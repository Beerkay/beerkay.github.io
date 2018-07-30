---
layout: default_minimal_2col
title: Home
notitle: true
---

### About Me
I am a research assistant in Department of Electrical Engineering and Computer Science at the Pennsylvania State University working with [Prof. Patrick McDaniel](http://www.patrickmcdaniel.org/) and a member of the [Systems and Internet Infrastructure Security Laboratory (SIIS)](http://siis.cse.psu.edu/). During my Msc. studies, I worked with [Prof. George Kesidis](http://www.cse.psu.edu/~gik2/) and [Prof. David J. Miller](http://www.ee.psu.edu/directory/FacultyInfo/Miller/MillerProfilePage.aspx). My research was on machine learning systems and network security. Previously I have worked at VMware evaluating the security of VMware source code, Vencore Labs building machine learning systems under privileged information, and Istanbul Technical University doing research on feature engineering for malware detection.
 
Generally, I am interested in developing secure systems through program analysis and machine learning. My recent work seeks to improve security, safety and privacy guarantees in commodity IoT. 

---
### News 
- I will give a lightning talk on Program Analysis of IoT Applications at [USENIX HotSec'18](https://www.usenix.org/conference/hotsec18)
- [Soteria: Automated IoT Safety and Security Analysis](https://arxiv.org/pdf/1805.08876.pdf) is accepted to USENIX ATC'18
- [Sensitive Information Tracking in Commodity IoT](https://arxiv.org/pdf/1802.08307.pdf) is accepted to USENIX Security'18
- [Detection under Privileged Information](https://arxiv.org/abs/1603.09638) is accepted to AsiaCCS'18
- [Extending Detection with Privileged Information via Generalized Distillation](https://beerkay.github.io/) is accepted to IEEE S&P'18 Deep Learning Security (DLS) Workshop (will be available soon)
- [Mission-oriented Security Model, Incorporating Security Risk, Cost and Payout](https://beerkay.github.io/) is accepted to SECURECOMM'18 (will be available soon)
- [IoTBench: A micro-benchmark suite to assess the effectiveness of tools designed for IoT apps](https://github.com/IoTBench/IoTBench-test-suite) is now online.
---

### Projects
I've had the opportunity to work on a number of interesting research projects during my Msc. and PhD. studies. Here is a summary of some of my efforts. 

#### Automated IoT Security, Safety and Privacy Analysis
<img align="left" src="{{ site.base }}/img/saint/saint.png" style="border-radius: 15px" hspace="15"> First, we implemented Soteria, a static analysis system for validating whether an IoT app or IoT environment (collection of apps working in concert) adheres to identified safety, security, and functional properties. We demonstrated that many apps violate properties when used in isolation and when used together in multi-app environments. Read more about [Soteria](https://arxiv.org/pdf/1805.08876.pdf). Second, we present Saint, a static taint analysis tool for IoT applications. Through this effort, we introduced a rigorously grounded framework for evaluating the use of sensitive information in IoT apps--and therein provide developers, markets, and consumers a means of identifying potential threats to security and privacy. Read more about [Saint](https://arxiv.org/pdf/1802.08307.pdf).

[IoTBench](https://github.com/IoTBench/test-suite) is an IoT-specific test corpus, an open repository for evaluating systems designed for IoT app analyses. IoTBench is under continual development, always welcoming contributions of the new IoT apps. 

#### Detection under Privileged Information
<img align="left" src="{{ site.base }}/img/privileged/forensic-detection.png" style="border-radius: 15px" hspace="15">  The training of the models has been historically limited to only those features available at runtime. In this study, we ask "how can detection systems integrate intelligence relevant to an attack that is available at training time, yet not available at runtime?". Consider a rootkit detection system for mobile phones. Obtaining a set of features may drain the battery even though they contribute to the detection of a rootkit. Therefore, the users might disable the system because the battery dies very quickly. However, obtaining these features at training time is feasible as we have unlimited resources in a laboratory-based environment. We built an alternate model construction approach that trains models using "privileged" information--features available at training time but not at runtime, yet samples are classified without the need of privileged features at runtime. Turning to rootkit example, the features draining the battery are the privileged features. 

Our paper is accepted to AsiaCCS'18: [Detection under Privileged Information](https://arxiv.org/pdf/1603.09638v4.pdf). Read more about formulation and implementation in our [technical report](http://www.cse.psu.edu/~zbc102/files/svm_plus_technical_report_15.pdf), and [Feature Cultivation in Privileged Information-augmented Detection](https://beerkay.github.io/papers/Celik17_CODASPY_IWSPA.pdf). 

#### Machine Learning in Adversarial Settings
<img align="left" src="{{ site.base }}/img/adversarial/dnn-sm.png" style="border-radius: 15px" hspace="15"> One of the limitations of machine learning in practice is that they are subject to adversarial samples. Adversarial samples are carefully modified inputs crafted to dictate a selected output. In the context of classification, adversarial samples are crafted so as to force a target model to classify them in a class different from their legitimate class. In this work, we focus on Deep Neural Networks (DNNs) for adversarial sample generation and attacker's capabilities to evade systems built on DNNs. Check out our publication on adversarial machine learning: [The Limitations of Deep Learning in Adversarial Settings](https://arxiv.org/pdf/1511.07528.pdf) and [Practical Black-Box Attacks against Machine Learning](https://arxiv.org/pdf/1602.02697.pdf).

#### Patient-Driven Privacy Control 
<img align="left" src="{{ site.base }}/img/patient-privacy/problem.png" style="border-radius: 15px" hspace="15"> Patients are asked to disclose personal information such as genetic markers, lifestyle habits, and clinical history. This data is then used by statistical models to predict personalized treatments. However, due to privacy concerns, patients often desire to withhold sensitive information. This self-censorship can impede proper diagnosis and treatment, which may lead to serious health complications. We implemented privacy distillation, a mechanism which allows patients to control the type and amount of information they wish to disclose to the healthcare providers for use in ML models. 

[Patient-Driven Privacy Control through Generalized Distillation](https://arxiv.org/pdf/1611.08648v1.pdf) is accepted to IEEE Privacy-aware computing (PAC) conference, 2016. The use of patient data made us develop new algorithms for [Achieving Secure and Differentially Private Computations in Multiparty Settings](https://arxiv.org/pdf/1702.08342.pdf). This paper is also accepted to PAC conference.

#### Malware Traffic Detection and Malware Experimentation Design
<img align="left" src="{{ site.base }}/img/malware/malware-pca2.png" style="border-radius: 15px" hspace="15"> We present a framework for evaluating the transport layer feature space of malware heartbeat traffic. We use these features in a prototype detection system to distinguish malware traffic from traffic generated by legitimate applications. Further, we characterize the evolution of malware evasion techniques over time by examining the behavior of 16 malware families. In particular, we highlight the difficulty of detecting malware that use traffic-shaping techniques to mimic legitimate traffic. Read more about the study [here](https://beerkay.github.io/papers/Celik15_Milcom.pdf).

In our [USENIX CSET](https://beerkay.github.io/papers/Celik11_CSET.pdf) and [JDMS](https://beerkay.github.io/papers/Celik17_JDMS.pdf) works, my co-authors and I also take a closer look at the experimentation artifacts of malware detection. For instance, we find that current approaches do not consider timing-based calibration of the malware traffic traces prior to using this traffic to salt a background enterprise traffic trace. We found that timing-based features of the malware traffic may be artificially distinctive, potentially leading to (unrealistically) optimistic classification results.

#### Science of Security
I am involved in Cyber-Security Collaborative Research Alliance ([CSec CRA](http://cra.psu.edu/)) with the Army Research Laboratory, Penn State, Carnegie Mellon, UC Riverside, UC Davis, and Indiana University. Our mandate is to develop a new science of security. As part of this effort, I've worked on the foundation for representing of operational and environmental knowledge. [See our work on operational models](http://wwwusers.di.uniroma1.it/~novella/myhome/Home_Page_di_Novella_Bartolini/milcom_2016.pdf). Our goal is to reason about both current and future states of a cyber-operation to make optimal decisions.

<!---
### Teaching Experience
* CMPSC 311: System Programming (with Prof. Patrick McDaniel) (Fall 2016)
* CMPSC 443: Introduction to Computer Security (with Prof. Patrick McDaniel) (Spring 2017)
* CSE 597: Security and Privacy of Machine Learning (with Prof. Patrick McDaniel and Nicolas Papernot) (Fall 2016)
* CSE 597: Advanced Topics in the Security and Privacy of Machine Learning (with Prof. Patrick McDaniel and Nicolas Papernot) (Spring 2017)

### Professional Activities
* 2018, Program Committee Member for IEEE Symposium on Privacy-Aware Computing (IEEE PAC) 
* 2017, Program Committee Member for CCS Workshop on Internet-of-Things Security and Privacy (IoT S&P)
* 2017, Publicity Chair for IEEE Conference on Communications and Network Security (CNS) Workshop on Cyber-Physical Systems Security (CPS-Sec)
* 2016, Technical Program Committee for MILCOM'16 (Track 3: Cyber Security and Trusted Computing)
* Reviewer: USENIX Security (2018), Neural Processing Letters (2017), ACM Computing Surveys (2017), IEEE S&P Magazine (2016), NDSS (2016), Journal of Network and Computer Applications (JNCA) (2016), Computers-Open Access Journal (2016)


### Invited Talks/Presentations
* April 2018: Recent Research on IoT Privacy and Security, [Penn State University](http://www.cse.psu.edu/~sxz16/) (host: Dr. Senchun Zhu, CSE 597: Wireless and Mobile Security class)
* March 2018: Automated IoT Privacy and Security Analysis, [Army Research Laboratory](https://www.arl.army.mil/www/default.cfm) (host: Dr. Ed Colbert)
* September 2017: SainT: Sensitive Information Tracking for IoT Applications, [Great Lakes Security Day 2017, RIT](https://www.rit.edu/cybersecurity/great-lakes-security-day-2017) (host: [Dr. Matthew Wright](https://sites.google.com/site/matthewkwright/))
* August 2017: Deep Learning for Analyzing VMware Software, [VMware Cambridge Office](https://www.vmware.com/) (VMware Intern Presentation) 
* July 2017: Convolutional Neural Networks for Secure Code, [VMware Cambridge Office](https://www.vmware.com/) (VMware CTO Office Presentation) 
* December 2016: Recent Research Topics in Security and Privacy, [Istanbul Technical University](http://www.bb.itu.edu) (host: [Dr. Sema Oktug](http://web.itu.edu.tr/~oktug/)
* December 2016:Detection under Privileged Information, [Florida International University](https://csl.fiu.edu/) (host: [Dr. Selcuk Uluagac](http://web.eng.fiu.edu/selcuk/)
* March 2016: Malware Traffic Detection using Tamper Resistant Features, [Army Research Laboratory](https://www.arl.army.mil/www/default.cfm) (host: Dr. Ananthram Swami)
* March 2016: Mapping Sample Scenarios to Operational Models in Cyber Environments, [George Mason University](https://www2.gmu.edu/) (host: [Dr. Sushil Jajodia](http://csis.gmu.edu/jajodia/))
* August 2015: Detection under Privileged Information, [Vencore Labs](https://www.vencorelabs.com/)(Intern presentation)


### Awards
* August 2018: Student Travel Award (ACM ASIA Conference on Information, Computer and Communications Security (ACM ASIACCS 2018)) 
* March 2018: Best demo award (Sensitive Information Tracking in Commodity IoT, [Florida Institute for Cybersecurity Research (FICS) Research Annual Conference on Cybersecurity](http://fics.institute.ufl.edu/poster-demo-winners-at-the-fics-annual-conference-on-cybersecurity/))
* July 2015: Student Travel Award (Military Communications Conference (MILCOM))
* August 2015 and 2017: PSU Summer Tuition Assistance Program (STAP) Fellowship

### Internships
* 2017 (Summer): Software Engineer, VMware CTO Office, Greater Boston Area (Managers: Ronn Mann and [Josh Simons](https://octo.vmware.com/author/josh_simons/))
* 2015 (Summer): Research Associate, Vencore Labs, New Jersey (Managers: Dr. Ritu Chadha and [Dr. Rauf Izmailov](https://scholar.google.com/citations?user=eA2qnCYAAAAJ&hl=en))

---


Reviwer for Neural Information Processing Systems (NIPS) 2018

### Personal
[Click to know more about me](https://octo.vmware.com/author/josh_simons/)
http://www.cs.virginia.edu/~robins/TimeManagementTalk.html

#### Policy-based Secure Data Exchange 
<img align="left" src="{{ site.base }}/img/curie/curie.png" style="border-radius: 15px" hspace="15"> Data sharing among partners---users, organizations, companies---is crucial for the advancement of data analytics in many domains. Sharing through secure computation and differential privacy allows these partners to perform private computations on their sensitive data in controlled ways. However, in reality, there exist complex relationships among members. Politics, regulations, interest, trust, data demands and needs are one of the many reasons. Thus, there is a need for a mechanism to meet these conflicting relationships on data sharing. This paper presents Curie, an approach to exchange data among members whose membership has complex relationships. The CPL policy language that allows members to define the specifications of data exchange requirements is introduced. Members (partners) assert who and what to exchange through their local policies and negotiate a global sharing agreement. The agreement is implemented in a multi-party computation that guarantees sharing among members will comply with the policy as negotiated. The use of Curie is validated through an example of a health care application built on recently introduced secure multi-party computation and differential privacy frameworks, and policy and performance trade-offs are explored.

This paper is under peer-review: [Curie: Policy-based Secure Data Exchange](https://arxiv.org/pdf/1702.08342.pdf), Z. Berkay Celik, Hidayet Aksu, Abbas Acar,Ryan Sheatsley, A. Selcuk Uluagac and Patrick McDaniel, 2017. We extend the algorithms used in Curie paper and construct algorithms for [Achieving Secure and Differentially Private Computations in Multiparty Settings](https://arxiv.org/pdf/1702.08342.pdf). This paper is accepted to IEEE Privacy-aware computing (PAC) conference.

We also studied the detection of Fast-Flux Service Networks (FFSNs) using DNS (Domain Name System)
response packets. We have observed that current approaches do not employ a large combination of DNS features to feed into the proposed detection systems. The lack of features leads to high false positive or false negative rates triggered by benign activities including Content Distribution Networks (CDNs). Read more about the study [here](https://beerkay.github.io/papers/Celik13_ISCC.pdf).


During my Msc. studies, I worked with [Prof. George Kesidis](http://www.cse.psu.edu/~gik2/) and [Prof. David J. Miller](http://www.ee.psu.edu/directory/FacultyInfo/Miller/MillerProfilePage.aspx) on NSF NeTSE Unsupervised Flow-Based Clustering project (also supported by Cisco Systems URP gift and DHS/NSF EMIST/DETER project). My research there focused on network security and machine learning. 


I also worked under the direction of [Prof. Sema Oktug](http://web.itu.edu.tr/~oktug/) at [Istanbul Technical University](http://www.itu.edu.tr/en/) focusing on practical network security problems (e.g., fast-flux networks).
-->

<!---
Posters missing, Reviewlari mutlaka ekle.
### Posters
## DLS
## CRA
## VENCORE LABS
## VMWARE

--
* 2018--NIPS
* 2017, Program Committee Member for IEEE Symposium on Privacy-Aware Computing (PAC)
* Reviewer, Usenix Security (2018)



### Publications
<script src="https://bibbase.org/show?bib=https%3A%2F%2Fraw.githubusercontent.com%2FBeerkay%2Fbeerkay.github.io%2Fmaster%2Fpapers%2FmyPublications.bib&jsonp=1"></script>
-->
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-56069371-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-56069371-2');
</script>

