---
layout: default_minimal_2col
title: Home
notitle: true
---

### About Me

I am a research assistant in Department of Electrical Engineering and Computer Science at the Pennsylvania State University working with [Prof. Patrick McDaniel](http://www.patrickmcdaniel.org/) and a member of the [Systems and Internet Infrastructure Security Laboratory (SIIS)](http://siis.cse.psu.edu/). 

During my Msc. studies, I worked with [Prof. George Kesidis](http://www.cse.psu.edu/~gik2/) and [Prof. David J. Miller](http://www.ee.psu.edu/directory/FacultyInfo/Miller/MillerProfilePage.aspx). My research was on machine learning and network security.

---

### News
- [IoTBench: A micro-benchmark suite to assess the effectiveness of tools designed for IoT apps](https://github.com/IoTBench/test-suite) is online.
- [Detection under Privileged Information](https://nodeca.github.io/pica/demo/) is accepted to ASIACCS'18.
- [Extending Detection with Privileged Information via Generalized Distillation](https://github.com/nodeca/babelfish/) is accepted to IEEE S&P'18 Deep Learning Security (DLS) Workshop.

---

### Projects

I've had the opportunity to work on a number of interesting research projects during my Msc. and PhD. studies. Here is a summary of some of my efforts. 

#### Sensitive Information Tracking in Commodity IoT
<img align="left" src="{{ site.base }}/img/saint/saint.png" style="border-radius: 15px" hspace="15"> We present SainT, a static taint analysis tool for IoT applications. SainT operates in three phases; (a) translation of platform-specific IoT source code into an intermediate representation (IR), (b) identifying sensitive sources and sinks, and (c) performing static analysis to identify sensitive data flows. We evaluate SainT on 230 SmartThings market apps and find 138 (60%) include sensitive data flows. In addition, we demonstrate SainT on IoTBench, a novel open-source test suite containing 19 apps with 27 unique data leaks. Through this effort, we introduce a rigorously grounded framework for evaluating the use of sensitive information in IoT apps---and therein provide developers, markets, and consumers a means of identifying potential threats to security and privacy.

#### Detection under Privileged Information
<img align="left" src="{{ site.base }}/img/privileged/forensic-detection.png" style="border-radius: 15px" hspace="15"> For over a quarter century, security-relevant detection has been driven by models learned from input features collected from real or simulated environments. An artifact (e.g., network event, potential malware sample, suspicious email) is deemed malicious or non-malicious based on its similarity to the learned model at run-time. However, the training of the models has been historically limited to only those features available at run time. This talk covers an alternate model construction approach that trains models using forensic "privileged" information--features available at training time but not at runtime--to improve the accuracy and resilience of detection systems. In particular, we adapt and extend recent advances in knowledge transfer, model influence, and distillation to enable the use of forensic data in a range of security domains. Such techniques open the door to systems that can integrate forensic data directly into detection models, and therein provide a means to fully exploit the information available about past security-relevant events.

Our paper is accepted to AsiaCCS'18: [Detection under Privileged Information](https://arxiv.org/pdf/1603.09638v3.pdf). Read more about formulation and implementation in our [technical report](http://www.cse.psu.edu/~zbc102/files/svm_plus_technical_report_15.pdf), and feature cultivation in privileged-augmented detection [Feature Cultivation in Privileged Information-augmented Detection (invited paper)](https://beerkay.github.io/papers/Celik17_CODASPY_IWSPA.pdf)

#### Machine Learning in Adversarial Settings
<img align="left" src="{{ site.base }}/img/adversarial/dnn-sm.png" style="border-radius: 15px" hspace="15"> One of the limitations of machine learning in practice is that they are subject to adversarial samples. Adversarial samples are carefully modified inputs crafted to dictate a selected output. In the context of classification, adversarial samples are crafted so as to force a target model to classify them in a class different from their legitimate class. In this work, we focus on Deep Neural Networks (DNNs) for adversarial sample generation and attacker's capabilities to evade systems built on DNNs.

Check out our publication on adversarial machine learning: [The Limitations of Deep Learning in Adversarial Settings](https://arxiv.org/pdf/1511.07528.pdf) and [Practical Black-Box Attacks against Machine Learning](https://arxiv.org/pdf/1602.02697.pdf).

#### Patient-Driven Privacy Control 
<img align="left" src="{{ site.base }}/img/patient-privacy/problem.png" style="border-radius: 15px" hspace="15"> Patients are asked to disclose personal information such as genetic markers, lifestyle habits, and clinical history. This data is then used by statistical models to predict personalized treatments. However, due to privacy concerns, patients often desire to withhold sensitive information. This self-censorship can impede proper diagnosis and treatment, which may lead to serious health complications and even death. In this work, we present privacy distillation, a mechanism which allows patients to control the type and amount of information they wish to disclose to the healthcare providers for use in statistical models. Meanwhile, it retains the accuracy of models that have access to all patient data under a sufficient but not full set of privacy-relevant information. We validate privacy distillation using a corpus of patients prescribed to warfarin for a personalized dosage. We use a deep neural network to implement privacy distillation for training and making dose predictions. We find that privacy distillation with sufficient privacy-relevant information i) retains accuracy almost as good as having all patient data (only 3% worse), and ii) is effective at preventing errors that introduce health-related risks (yielding on average 3.9% of under- or over-prescriptions).

This paper is accepted to IEEE Privacy-aware computing (PAC) conference [Patient-Driven Privacy Control through Generalized Distillation](https://arxiv.org/pdf/1611.08648v1.pdf), 2016. The use of patient data made us develop new algorithms for [Achieving Secure and Differentially Private Computations in Multiparty Settings](https://arxiv.org/pdf/1702.08342.pdf). This paper is also accepted to PAC conference.


#### Malware Traffic Detection and Experimentation Artifacts
<img align="left" src="{{ site.base }}/img/malware/malware-pca.png" style="border-radius: 15px" hspace="15"> We present a framework for evaluating the transport layer feature space of malware heartbeat traffic. We utilize these features in a prototype detection system to distinguish malware traffic from traffic generated by legitimate applications. In contrast to previous work, we eliminate features at risk of producing overly optimistic detection results, detect previously unobserved anomalous behavior, and rely only on tamperresistant features making it difficult for sophisticated malware to avoid detection. Further, we characterize the evolution of malware evasion techniques over time by examining the behavior of 16 malware families. In particular, we highlight the difficulty of detecting malware that use traffic-shaping techniques to mimic legitimate traffic. Read more about the study [here](https://beerkay.github.io/papers/Celik15_Milcom.pdf).

In our [CSET 2011](https://beerkay.github.io/papers/Celik11_CSET.pdf) work my co-authors and I also take a closer look at the experimentation artifacts of malware detection. We find that current approaches do not consider timing-based calibration of the C&C traffic traces prior to using this traffic to salt a background traffic trace. Thus, timing-based features of the C&C traffic may be artificially distinctive, potentially leading to (unrealistically) optimistic flow classification results.


#### Science of Security
I am involved in Cyber-Security Collaborative Research Alliance ([CSec CRA](http://cra.psu.edu/)) with the Army Research Laboratory, Penn State, Carnegie Mellon, UC Riverside, UC Davis, and Indiana University. Our mandate is to develop a new science of security. As part of this effort, I've worked on the foundation for representing of operational and environmental knowledge. (See my work on operational models [here](http://wwwusers.di.uniroma1.it/~novella/myhome/Home_Page_di_Novella_Bartolini/milcom_2016.pdf). Our goal is to reason about both current and future states of a cyber-operation to make optimal decisions.

---

### Teaching Experience
* CMPSC 311--System Programming (with Prof. Patrick McDaniel) (Fall 2016)
* CMPSC 443--Introduction to Computer Security (with Prof. Patrick McDaniel) (Spring 2017)
* CSE 598--S&P of Machine Learning (with Prof. Patrick McDaniel and Nicolas Papernot) (Fall 2016)

### Professional Activities
* 2018, Program Committee Member for IEEE Symposium on Privacy-Aware Computing (IEEE PAC) 
* 2017, Program Committee Member for CCS Workshop on Internet-of-Things Security and Privacy (IoT S&P)
* 2017, Publicity Chair for IEEE Conference on Communications and Network Security (CNS) Workshop on Cyber-Physical Systems Security (CPS-Sec)
* 2016, Technical Program Committee for MILCOM'16 (Track 3: Cyber Security and Trusted Computing)
* Reviewer: Neural Processing Letters (2017), ACM Computing Surveys (2017), IEEE S&P Magazine (2016), NDSS (2016), Journal of Network and Computer Applications (JNCA) (2016), Computers-Open Access Journal (2016)

### Invited Talks
* March 2018 --- Automated IoT Privacy and Security Analysis, [Army Research Laboratory](https://www.arl.army.mil/www/default.cfm) (host: Dr. Ed Colbert)
* September 2017 --- SainT: Sensitive Information Tracking for IoT Applications, [Great Lakes Security Day 2017](https://www.rit.edu/cybersecurity/great-lakes-security-day-2017) (Rochester Institute of Technology, host: [Matthew Wright](https://sites.google.com/site/matthewkwright/) and [Shanchieh Jay Yang](https://people.rit.edu/sjyeec/))
* December 2016 --- Recent Research Topics in Security and Networking (Istanbul Technical University, host: [Dr. Sema Oktug](http://web.itu.edu.tr/~oktug/), [Computer Networks Research Laboratory](http://www.bb.itu.edu.tr/en/research/computer-networks-research-laboratory))
* December 2016 --- Extending Detection with Forensic Information (Florida International University, host: [Dr. Selcuk Uluagac](http://web.eng.fiu.edu/selcuk/), [Cyber-Physical Systems Security Lab](https://csl.fiu.edu/))
* March 2016, Malware Traffic Detection using Tamper Resistant Features, [Army Research Laboratory](https://www.arl.army.mil/www/default.cfm) (host: Dr. Ananthram Swami)
* March 2016, Mapping Sample Scenarios to Operational Models in Cyber Environments, A DoD Multidisciplinary University Research Initiative (MURI) Project (George Mason University, host: [Dr. Sushil Jajodia](http://csis.gmu.edu/jajodia/)), 

### Awards
* Sensitive information Tracking in Commodity IoT (Best demo award, 2018), [Florida Institute for Cybersecurity Research (FICS) Research Annual Conference on Cybersecurity](http://fics.institute.ufl.edu/poster-demo-winners-at-the-fics-annual-conference-on-cybersecurity/)

### Internships
* 2015 (Summer), Research Associate, Vencore Labs, New Jersey (Managers: Dr. Ritu Chadha and [Dr. Rauf Izmailov](https://scholar.google.com/citations?user=eA2qnCYAAAAJ&hl=en))
* 2017 (Summer), Software Engineer, VMWare CTO Office, Greater Boston Area (Managers: Ronn Mann and [Josh Simons](https://octo.vmware.com/author/josh_simons/))

---

<!---
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
--
* 2017, Program Committee Member for IEEE Symposium on Privacy-Aware Computing (PAC)
* Reviewer, Usenix Security (2018)

Awards:
Sensitive information Tracking in Commodity IoT, best demo award, Florida Institute for Cybersecurity Research (FICS) Research Annual Conference on Cybersecurity
-->


### Publications

{% include pubs-3.html %}
