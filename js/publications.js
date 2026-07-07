/* Publications page renderer from paper-bib/myPublications.bib */
(function () {
  "use strict";

  var containers = document.querySelectorAll("[data-publications-source], #publication-list");
  if (!containers.length) return;

  var sources = {};

  Array.prototype.forEach.call(containers, function (container) {
    var source = container.getAttribute("data-publications-source") || "paper-bib/myPublications.bib";
    if (!sources[source]) sources[source] = [];
    sources[source].push(container);
  });

  Object.keys(sources).forEach(function (source) {
    if (window.PUBLICATIONS_DATA && source === "paper-bib/myPublications.bib") {
      sources[source].forEach(function (container) {
        renderPublications(container, window.PUBLICATIONS_DATA);
      });
      return;
    }

    fetch(source, { cache: "no-store" })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Unable to load " + source + " (" + response.status + ")");
        }
        return response.text();
      })
      .then(function (text) {
        var entries = parseBibTeX(text);
        if (!entries.length) {
          sources[source].forEach(function (container) {
            container.innerHTML = '<p class="pub-note">No publications found in <code>' + escapeHtml(source) + '</code>.</p>';
          });
          return;
        }
        sources[source].forEach(function (container) {
          renderPublications(container, entries);
        });
      })
      .catch(function () {
        var protocol = window.location && window.location.protocol;
        var helpText = protocol === "file:"
          ? 'Open the site through a local web server such as <code>http://localhost:3000</code> so the browser can fetch <code>' + escapeHtml(source) + '</code>.'
          : 'Please make sure <code>' + escapeHtml(source) + '</code> is available and that the site is being served over HTTP.';
        sources[source].forEach(function (container) {
          container.innerHTML = '<p class="pub-note">Could not load the publication list automatically. ' + helpText + '</p>';
        });
      });
  });

  function renderPublications(container, entries) {
    var mode = (container.getAttribute("data-publications-mode") || "full").toLowerCase();
    var limit = parseInt(container.getAttribute("data-publications-limit") || "0", 10) || 0;
    var allowedYears = parseYearsList(container.getAttribute("data-publications-years") || "");
    var minYear = parseInt(container.getAttribute("data-publications-min-year") || "", 10);
    var maxYear = parseInt(container.getAttribute("data-publications-max-year") || "", 10);
    var perYearLimit = parseInt(container.getAttribute("data-publications-per-year") || "0", 10) || 0;
    var showAcceptanceRate = (container.getAttribute("data-publications-show-acceptance-rate") || "").toLowerCase() === "true";
    var visibleEntries = entries.slice(0);

    visibleEntries.sort(function (a, b) {
      var yearA = parseInt(a.fields.year || "0", 10) || 0;
      var yearB = parseInt(b.fields.year || "0", 10) || 0;
      if (yearA !== yearB) return yearB - yearA;
      return a.order - b.order;
    });

    if (allowedYears.length || !isNaN(minYear) || !isNaN(maxYear)) {
      visibleEntries = visibleEntries.filter(function (entry) {
        var year = parseInt(entry.fields.year || "", 10);
        if (isNaN(year)) return false;
        if (allowedYears.length && allowedYears.indexOf(year) === -1) return false;
        if (!isNaN(minYear) && year < minYear) return false;
        if (!isNaN(maxYear) && year > maxYear) return false;
        return true;
      });
    }

    if (mode === "preview" && perYearLimit > 0 && allowedYears.length) {
      var selectedEntries = [];
      var grouped = {};

      visibleEntries.forEach(function (entry) {
        var year = entry.fields.year ? String(entry.fields.year) : "Unknown";
        if (!grouped[year]) grouped[year] = [];
        grouped[year].push(entry);
      });

      allowedYears.forEach(function (year) {
        var bucket = grouped[String(year)] || [];
        selectedEntries = selectedEntries.concat(bucket.slice(0, perYearLimit));
      });

      visibleEntries = selectedEntries;
    }

    if (mode === "preview" && limit > 0) {
      visibleEntries = visibleEntries.slice(0, limit);
    }

    var groups = {};
    var years = [];

    visibleEntries.forEach(function (entry) {
      var year = entry.fields.year ? String(entry.fields.year) : "Unknown";
      if (!groups[year]) {
        groups[year] = [];
        years.push(year);
      }
      groups[year].push(entry);
    });

    years.sort(function (a, b) {
      if (a === "Unknown") return 1;
      if (b === "Unknown") return -1;
      return parseInt(b, 10) - parseInt(a, 10);
    });

    var html = "";
    years.forEach(function (year) {
      var count = groups[year].length;
      html += '<article class="pub-year-card">';
      html += '<div class="pub-year">';
      html += '<span class="pub-year-label">' + escapeHtml(year) + "</span>";
      html += '<span class="pub-year-count">' + escapeHtml(String(count)) + "</span>";
      html += "</div>";
      html += '<ul class="pubs">';
      groups[year].forEach(function (entry) {
        html += renderEntry(entry, showAcceptanceRate);
      });
      html += "</ul>";
      html += "</article>";
    });

    container.innerHTML = html;
  }

  function parseYearsList(raw) {
    return String(raw || "")
      .split(/[\s,]+/)
      .map(function (part) { return parseInt(part, 10); })
      .filter(function (year) { return !isNaN(year); });
  }

  function renderEntry(entry, showAcceptanceRate) {
    var fields = entry.fields;
    var title = decodeBibtexText(fields.title || "");
    var titleHtml = escapeHtml(title);
    var url = fields.url ? String(fields.url).trim() : "";
    var titleLink = url
      ? '<a href="' + escapeAttr(url) + '" target="_blank" rel="noopener">' + titleHtml + "</a>"
      : titleHtml;
    var authors = formatAuthors(fields.author || "");
    var venue = decodeBibtexText(fields.journal || fields.booktitle || fields.publisher || fields.school || fields.howpublished || "");
    var year = fields.year ? String(fields.year).trim() : "";
    var venueHtml = venue ? '<span class="pub-venue">' + escapeHtml(venue) + (year ? ', ' + escapeHtml(year) : '') + "</span>" : "";
    var rawNote = decodeBibtexText(fields.note || fields.comment || "");
    var award = sanitizeAwardText(rawNote);
    var awardHtml = award ? '<span class="pub-note">' + escapeHtml(award) + "</span>" : "";
    var acceptanceRate = showAcceptanceRate ? extractAcceptanceRate(rawNote) : "";
    var rateHtml = acceptanceRate ? '<span class="pub-rate">' + escapeHtml(acceptanceRate) + "</span>" : "";
    var meta = venueHtml || awardHtml || rateHtml ? '<div class="pub-meta">' + venueHtml + awardHtml + rateHtml + "</div>" : "";

    return [
      "<li>",
      '<div class="pub-title">', titleLink, "</div>",
      authors ? '<div class="pub-authors">' + authors + "</div>" : "",
      meta,
      "</li>"
    ].join("");
  }

  function formatAuthors(raw) {
    var authors = splitAuthors(raw);
    if (!authors.length) return "";

    return authors.map(function (author) {
      var display = decodeBibtexText(author);
      display = formatAuthorName(display);
      if (isMe(display) || isMe(author)) {
        return '<span class="me">' + escapeHtml(display) + "</span>";
      }
      return escapeHtml(display);
    }).join(", ");
  }

  function splitAuthors(raw) {
    return String(raw)
      .split(/\s+and\s+/i)
      .map(function (part) { return part.trim(); })
      .filter(Boolean);
  }

  function formatAuthorName(name) {
    var parts = String(name).split(",");
    if (parts.length >= 2) {
      var last = parts[0].trim();
      var first = parts.slice(1).join(",").trim();
      return (first + " " + last).replace(/\s+/g, " ").trim();
    }
    return String(name).replace(/\s+/g, " ").trim();
  }

  function isMe(value) {
    var key = String(value).toLowerCase().replace(/[^a-z]/g, "");
    return key.indexOf("zberkaycelik") !== -1 || key.indexOf("celikzberkay") !== -1;
  }

  function sanitizeAwardText(text) {
    return String(text || "")
      .split(";")
      .map(function (part) {
        return part.replace(/\(?\s*Acceptance Rate[^)]*\)?/ig, "").trim();
      })
      .filter(Boolean)
      .join("; ")
      .replace(/\s{2,}/g, " ")
      .trim();
  }

  function extractAcceptanceRate(text) {
    var match = String(text || "").match(/Acceptance Rate[^;)]*/i);
    return match ? match[0].replace(/[\s()]+$/g, "").trim() : "";
  }

  function parseBibTeX(text) {
    var entries = [];
    var order = 0;
    var i = 0;
    var source = String(text).replace(/\r\n/g, "\n");

    while (i < source.length) {
      var at = source.indexOf("@", i);
      if (at === -1) break;

      var typeStart = at + 1;
      var typeEnd = typeStart;
      while (typeEnd < source.length && /[A-Za-z]/.test(source[typeEnd])) typeEnd++;
      var entryType = source.slice(typeStart, typeEnd).toLowerCase();

      while (typeEnd < source.length && /\s/.test(source[typeEnd])) typeEnd++;
      var open = source[typeEnd];
      if (open !== "{" && open !== "(") {
        i = typeEnd + 1;
        continue;
      }

      var close = open === "{" ? "}" : ")";
      var contentStart = typeEnd + 1;
      var depth = 1;
      var j = contentStart;

      while (j < source.length && depth > 0) {
        var ch = source[j];
        if (ch === "\\") {
          j += 2;
          continue;
        }
        if (ch === open) depth++;
        if (ch === close) depth--;
        j++;
      }

      var inner = source.slice(contentStart, j - 1);
      i = j;

      var comma = findTopLevelComma(inner);
      if (comma === -1) continue;

      var fields = parseFields(inner.slice(comma + 1));
      fields.__type = entryType;
      fields.__key = inner.slice(0, comma).trim();
      entries.push({ fields: fields, order: order++ });
    }

    return entries;
  }

  function findTopLevelComma(text) {
    var depth = 0;
    var inQuote = false;
    for (var i = 0; i < text.length; i++) {
      var ch = text[i];
      if (ch === "\\") {
        i++;
        continue;
      }
      if (ch === '"') {
        inQuote = !inQuote;
        continue;
      }
      if (inQuote) continue;
      if (ch === "{") depth++;
      else if (ch === "}") depth--;
      else if (ch === "," && depth === 0) return i;
    }
    return -1;
  }

  function parseFields(body) {
    var fields = {};
    var i = 0;

    while (i < body.length) {
      while (i < body.length && /[\s,]/.test(body[i])) i++;
      if (i >= body.length) break;
      if (body[i] === "%") {
        while (i < body.length && body[i] !== "\n") i++;
        continue;
      }

      var nameStart = i;
      while (i < body.length && /[A-Za-z0-9_-]/.test(body[i])) i++;
      var name = body.slice(nameStart, i).toLowerCase();
      if (!name) {
        i++;
        continue;
      }

      while (i < body.length && /\s/.test(body[i])) i++;
      if (body[i] !== "=") {
        i++;
        continue;
      }
      i++;
      while (i < body.length && /\s/.test(body[i])) i++;

      var parsed = parseValue(body, i);
      fields[name] = decodeBibtexText(parsed.value);
      i = parsed.nextIndex;
    }

    return fields;
  }

  function parseValue(text, startIndex) {
    var i = startIndex;
    if (i >= text.length) return { value: "", nextIndex: i };

    if (text[i] === "{") {
      var depth = 1;
      var j = i + 1;
      while (j < text.length && depth > 0) {
        var ch = text[j];
        if (ch === "\\") {
          j += 2;
          continue;
        }
        if (ch === "{") depth++;
        else if (ch === "}") depth--;
        j++;
      }
      return { value: text.slice(i + 1, j - 1), nextIndex: j };
    }

    if (text[i] === '"') {
      var k = i + 1;
      while (k < text.length) {
        if (text[k] === "\\") {
          k += 2;
          continue;
        }
        if (text[k] === '"') break;
        k++;
      }
      return { value: text.slice(i + 1, k), nextIndex: k + 1 };
    }

    var end = i;
    while (end < text.length && text[end] !== ",") end++;
    return { value: text.slice(i, end).trim(), nextIndex: end };
  }

  function decodeBibtexText(text) {
    var out = String(text || "");
    out = out.replace(/\\&/g, "&")
      .replace(/\\%/g, "%")
      .replace(/\\#/g, "#")
      .replace(/\\_/g, "_")
      .replace(/\\{/g, "{")
      .replace(/\\}/g, "}")
      .replace(/\\$/g, "$");

    out = out.replace(/\{?\\\"([A-Za-z])\}?/g, function (_, ch) {
      return ({
        a: "ä", A: "Ä", e: "ë", E: "Ë", i: "ï", I: "Ï", o: "ö", O: "Ö", u: "ü", U: "Ü", y: "ÿ", Y: "Ÿ"
      }[ch] || ch);
    });
    out = out.replace(/\{?\\'([A-Za-z])\}?/g, function (_, ch) {
      return ({
        a: "á", A: "Á", e: "é", E: "É", i: "í", I: "Í", o: "ó", O: "Ó", u: "ú", U: "Ú", y: "ý", Y: "Ý", c: "ć", C: "Ć", n: "ń", N: "Ń"
      }[ch] || ch);
    });
    out = out.replace(/\{?\\`([A-Za-z])\}?/g, function (_, ch) {
      return ({
        a: "à", A: "À", e: "è", E: "È", i: "ì", I: "Ì", o: "ò", O: "Ò", u: "ù", U: "Ù"
      }[ch] || ch);
    });
    out = out.replace(/\{?\\\^([A-Za-z])\}?/g, function (_, ch) {
      return ({
        a: "â", A: "Â", e: "ê", E: "Ê", i: "î", I: "Î", o: "ô", O: "Ô", u: "û", U: "Û"
      }[ch] || ch);
    });
    out = out.replace(/\{?\\~([A-Za-z])\}?/g, function (_, ch) {
      return ({
        a: "ã", A: "Ã", n: "ñ", N: "Ñ", o: "õ", O: "Õ"
      }[ch] || ch);
    });
    out = out.replace(/\\ae/g, "æ").replace(/\\AE/g, "Æ")
      .replace(/\\oe/g, "œ").replace(/\\OE/g, "Œ")
      .replace(/\\aa/g, "å").replace(/\\AA/g, "Å")
      .replace(/\\ss/g, "ß")
      .replace(/\\o/g, "ø").replace(/\\O/g, "Ø");

    out = out.replace(/\{|\}/g, "");
    out = out.replace(/\s+/g, " ");
    return out.trim();
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttr(text) {
    return escapeHtml(text).replace(/`/g, "&#96;");
  }
})();
