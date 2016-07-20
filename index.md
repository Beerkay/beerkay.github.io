---
layout: default_minimal_2col
title: Home
notitle: true
---

### News

**Reviewing papers**: I've joined the program committee for the [2016 IEEE
International Conference on Network Protocols](http://icnp2016.comp.nus.edu.sg/).

**Going to Oakland**: Our paper "Domain-Z: 28 Registrations Later" was accepted
to the [IEEE Symposium on Security and
Privacy](http://www.ieee-security.org/TC/SP2016/).

### About Me

I am a research assistant in Department of Electrical Engineering and Computer Science at the Pennsylvania State University working with [Prof. Patrick McDaniel](http://www.patrickmcdaniel.org/) and a member of the Systems and 
Internet Infrastructure Security Laboratory (SIIS). 

Previously, I worked with [Prof. George Kesidis](http://www.cse.psu.edu/~gik2/) and [Prof. David J. Miller](http://www.ee.psu.edu/directory/FacultyInfo/Miller/MillerProfilePage.aspx) on NSF NeTSE Unsupervised Flow-Based 
Clustering project (also supported by Cisco Systems URP gift and DHS/NSF EMIST/DETER project) during my Msc.studies. My research there focused on network security and learning algorithms. 

I started to work under the direction of [Prof. Sema Oktug](http://web.itu.edu.tr/~oktug/) at [Istanbul Technical University](http://www.itu.edu.tr/en/) focusing on practical 
network security problems (e.g., fast-flux networks).


### Projects

I've had the opportunity to work on a number of interesting research projects
during my career. Here is a summary of some of my efforts. 

#### Web Security and Privacy 

Online advertising is one of those little annoyances that we all have to deal
with. "Not so!" Said the plethora of ad blocking extensions promising to
improve your browser experience. Not only do they block ads, they also claim to
help preserve your privacy and protect  you against the growing trend of
malicious advertisements. In our [IMC 2015 work][imc] my co-authors and I take
a closer look at the most popular ad blocking software. We find that ad
blockers are not quite what they appear to be.

[imc]: http://rjwalls.github.io/papers/walls15_imc.pdf

If you are in the market for a practical privacy solution, take a look at our
browser extension [Milk][milk]. Milk implements the concept of *functional
privacy*: give the users as much privacy as possible without breaking desired
functionality. The extension does this by putting cookies in separate silos and
restricting which sites have access to those cookies.  Read more about
[functional privacy here][funpriv].

[milk]:https://github.com/rjwalls/Milk
[funpriv]:http://forensics.umass.edu/pubs/walls.hotsec12.pdf
 

#### Detection with Privileged Information
<img align="right" src="{{ site.base }}/img/privileged/privileged.png">
Modern detection systems use sensor outputs available in the deployment environment to probabilistically identify attacks. These systems are trained on past or synthetic feature vectors to create a model of anomalous or normal behavior. Thereafter, run-time collected sensor outputs are compared to the model to identify attacks (or the lack of attack). While this approach to detection has been proven to be effective in many environments, it is limited to training on only features that can be reliably collected at test-time. Hence, they fail to leverage the often vast amount of ancillary information available from past forensic analysis and post-mortem data. In short, detection systems do not train (and thus do not learn from) features that are unavailable or too costly to collect at run-time. In this paper, we leverage recent advances in machine learning to integrate privileged information---features reliably available at training time, but not at run-time---into detection algorithms. We apply three different approaches to model training with privileged information: knowledge transfer, model influence, and distillation. We empirically validate their performance in a range of detection domains. Our evaluation shows that privileged information can increase detector precision and recall: we observe an average of 3.8\% relative decrease in detection error for fast-flux bot detection over a system with no privileged information, 5.4\% for malware traffic detection, 3.6\% for malware classification, and 16.9\% for user face authentication. We conclude by exploring the limitations and applications of different privileged information techniques in detection systems.
Read more about it [here](https://arxiv.org/pdf/1603.09638v1.pdf), and details of formulation and implementation in [technical report](http://www.cse.psu.edu/~zbc102/files/svm_plus_technical_report_15.pdf).

[Liftr](https://github.com/umass-forensics/Liftr-forensics) incorporates
investigator feedback and relevance graphs to improve the results of inference
engines like DEC0DE. [Paper here][liftr].

[Yapr](https://github.com/rjwalls/YaffsParser) parses the Yaffs File System
commonly found on (older) Android phones.  Yapr even has limited ability to
reconstruct past versions of a file by leverage expired pages of flash memory.

[Filtr](https://github.com/rjwalls/Filtr) implements the concept of block hash
filtering using bloom filters. In short, Filtr will remove an repeated blocks
of data in a raw byte stream. For flash-based devices, such as phones, Filtr
often removes 50-90% of the raw data, saving precious time by limited the
amount of data that needs to be examines. Read more about block hash filtering
[here][decode]. 

[decode]: http://forensics.umass.edu/pubs/Walls.usenixSecurity.2011.pdf
[liftr]:http://forensics.umass.edu/pubs/varma.spsm.2014.pdf


#### Science of Security

Perhaps the most  ambitious projects I am involved in is the 10-year
Cyber-Security Collaborative Research Alliance ([CSec CRA][cra]) with the Army
Research Laboratory, Penn State, Carnegie Mellon, UC Riverside, UC Davis, and
Indiana University. Our mandate is to develop a new science of security. As
part of this effort, I've worked on the foundation for representing of
operational and environmental knowledge. (See my work on ontologies
[here][ontology1]). Our goal to reason about both current and
future states to make optimal security decisions. 

[cra]: http://cra.psu.edu/
[ontology1]: http://rjwalls.github.io/papers/oltramari14_stids.pdf

#### Improving the Process

Like all computer scientists, I am constantly on the lookout for tools or
methods that will help me be more efficient in my work. Here are a few
repositories that you may find helpful.
 
[Latex Paper Template.](https://github.com/rjwalls/paper-template) Tired of wasting half an hour setting up your paper
   directory every time you start a new project? Try my paper template instead.

[Slidify Tutorial.](https://github.com/rjwalls/SlidifyTest) I am a big fan of
presentations, R, and Markdown---Slidify beautifully combines all three. Check
out my simple Slidify tutorial [here](http://rjwalls.github.io/SlidifyTest).

[Taskr.](https://github.com/rjwalls/Taskr) This simple command line utility
helps manage how you spend your time. 



### Publications

{% include pubs.html %}
