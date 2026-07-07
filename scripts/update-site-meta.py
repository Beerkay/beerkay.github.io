#!/usr/bin/env python3
from __future__ import annotations

import calendar
import subprocess
from pathlib import Path


def get_last_commit_date() -> str:
    raw = subprocess.check_output(
        ["git", "log", "-1", "--format=%cs"],
        text=True,
    ).strip()
    if not raw:
        raise RuntimeError("Unable to determine the latest git commit date.")
    return raw


def format_date(iso_date: str) -> str:
    year_s, month_s, day_s = iso_date.split("-")
    year = int(year_s)
    month = int(month_s)
    day = int(day_s)
    return f"{calendar.month_name[month]} {day}, {year}"


def main() -> None:
    iso_date = get_last_commit_date()
    formatted = format_date(iso_date)
    output = (
        "window.SITE_META = {\n"
        f'  lastUpdated: "{formatted}"\n'
        "};\n"
    )
    Path("js/site-meta.js").write_text(output, encoding="utf-8")
    print(f"Updated js/site-meta.js to {formatted}")


if __name__ == "__main__":
    main()
