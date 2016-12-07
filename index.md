---
layout: default_minimal_2col
title: Home
notitle: true
---

### News
Pennsylvania State University working with [Prof. Patrick McDaniel](http://www.patrickmcdaniel.org/) 
---

### About Me

I am a research assistant in Department of Electrical Engineering and Computer Science at the Pennsylvania State University working with [Prof. Patrick McDaniel](http://www.patrickmcdaniel.org/) and a member of the [Systems and Internet Infrastructure Security Laboratory (SIIS)](http://siis.cse.psu.edu/). 

During my Msc.studies, I worked with [Prof. George Kesidis](http://www.cse.psu.edu/~gik2/) and [Prof. David J. Miller](http://www.ee.psu.edu/directory/FacultyInfo/Miller/MillerProfilePage.aspx) on NSF NeTSE Unsupervised Flow-Based 
Clustering project (also supported by Cisco Systems URP gift and DHS/NSF EMIST/DETER project). My research there focused on network security and learning algorithms. 

I also worked under the direction of [Prof. Sema Oktug](http://web.itu.edu.tr/~oktug/) at [Istanbul Technical University](http://www.itu.edu.tr/en/) focusing on practical network security problems (e.g., fast-flux networks).
---

### Projects

I've had the opportunity to work on a number of interesting research projects during my Msc. and PhD. studies. Here is a summary of some of my efforts. 


#### Patient-Driven Privacy Control 
<img align="left" src="{{ site.base }}/img/patient-privacy/problem.png" style="border-radius: 15px" hspace="15"> The introduction of data analytics into medicine has changed the nature of treatment. In this, patients are asked to disclose personal information such as genetic markers, lifestyle habits, and clinical history. This data is then used by statistical models to predict personalized treatments. However, due to privacy concerns, patients often desire to withhold sensitive information. This self-censorship can impede proper diagnosis and treatment, which may lead to serious health complications and even death. In this work, we present privacy distillation, a mechanism which allows patients to control the type and amount of information they wish to disclose to the healthcare providers for use in statistical models. Meanwhile, it retains the accuracy of models that have access to all patient data under a sufficient but not full set of privacy-relevant information. We validate privacy distillation using a corpus of patients prescribed to warfarin for a personalized dosage. We use a deep neural network to implement privacy distillation for training and making dose predictions. We find that privacy distillation with sufficient privacy-relevant information i) retains accuracy almost as good as having all patient data (only 3% worse), and ii) is effective at preventing errors that introduce health-related risks (yielding on average 3.9% of under- or over-prescriptions).

This paper is under peer-review: [Patient-Driven Privacy Control through Generalized Distillation](https://arxiv.org/pdf/1611.08648v1.pdf), Z. Berkay Celik, David Lopez-Paz, and Patrick McDaniel, 2016.

#### Extending Detection with Forensic Information
<img align="left" src="{{ site.base }}/img/privileged/forensic-detection.png" style="border-radius: 15px" hspace="15"> For over a quarter century, security-relevant detection has been driven by models learned from input features collected from real or simulated environments. An artifact (e.g., network event, potential malware sample, suspicious email) is deemed malicious or non-malicious based on its similarity to the learned model at run-time. However, the training of the models has been historically limited to only those features available at run time. This talk covers an alternate model construction approach that trains models using forensic "privileged" information--features available at training time but not at runtime--to improve the accuracy and resilience of detection systems. In particular, we adapt and extend recent advances in knowledge transfer, model influence, and distillation to enable the use of forensic data in a range of security domains. Such techniques open the door to systems that can integrate forensic data directly into detection models, and therein provide a means to fully exploit the information available about past security-relevant events.

This paper is under peer-review: [Extending Detection with Forensic Information](https://arxiv.org/pdf/1603.09638v3.pdf), Z. Berkay Celik, Patrick McDaniel, Rauf Izmailov, Nicolas Papernot and Ananthram Swami, 2016. Read more about formulation and implementation in [technical report](http://www.cse.psu.edu/~zbc102/files/svm_plus_technical_report_15.pdf).


#### Malware Traffic Detection and Experimentation Artifacts
<img align="left" src="{{ site.base }}/img/malware/malware-pca.png" style="border-radius: 15px" hspace="15"> We present a framework for evaluating the transport layer feature space of malware heartbeat traffic. We utilize these features in a prototype detection system to distinguish malware traffic from traffic generated by legitimate applications. In contrast to previous work, we eliminate features at risk of producing overly optimistic detection results, detect previously unobserved anomalous behavior, and rely only on tamperresistant features making it difficult for sophisticated malware to avoid detection. Further, we characterize the evolution of malware evasion techniques over time by examining the behavior of 16 malware families. In particular, we highlight the difficulty of detecting malware that use traffic-shaping techniques to mimic legitimate traffic. Read more about the study [here](https://beerkay.github.io/papers/Celik15_Milcom.pdf).

In our [CSET 2011](https://beerkay.github.io/papers/Celik11_CSET.pdf) work my co-authors and I also take a closer look at the experimentation artifacts of malware detection. We find that current approaches do not consider timing-based calibration of the C&C traffic traces prior to using this traffic to salt a background traffic trace. Thus, timing-based features of the C&C traffic may be artificially distinctive, potentially leading to (unrealistically) optimistic flow classification results.

We also studied the detection of Fast-Flux Service Networks (FFSNs) using DNS (Domain Name System)
response packets. We have observed that current approaches do not employ a large combination of DNS features to feed into
the proposed detection systems. The lack of features leads to high false positive or false negative rates triggered by benign
activities including Content Distribution Networks (CDNs). Read more about the study [here](https://beerkay.github.io/papers/Celik13_ISCC.pdf).

#### Machine Learning in Adversarial Settings

<img align="left" src="{{ site.base }}/img/adversarial/dnn-sm.png" style="border-radius: 15px" hspace="15"> One of the limitations of machine learning in practice is that they are subject to adversarial samples. Adversarial samples are carefully modified inputs crafted to dictate a selected output. In the context of classification, adversarial samples are crafted so as to force a target model to classify them in a class different from their legitimate class. In this work, we focus on Deep Neural Networks (DNNs) for adversarial sample generation and attacker's capabilities to evade systems built on DNNs.

In collaboration with [Nicolas Papernot](https://www.papernot.fr/).

#### Science of Security

I am involved in Cyber-Security Collaborative Research Alliance ([CSec CRA](http://cra.psu.edu/)) with the Army Research Laboratory, Penn State, Carnegie Mellon, UC Riverside, UC Davis, and Indiana University. Our mandate is to develop a new science of security. As part of this effort, I've worked on the foundation for representing of operational and environmental knowledge. (See my work on operational models [here](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=g1I269gAAAAJ&citation_for_view=g1I269gAAAAJ:e5wmG9Sq2KIC)). Our goal to reason about both current and future states of a system to make optimal decisions.
---

### Invited Talks
* December 2016 --- Extending Detection with Forensic information (FIU, host: [Dr. Selcuk Uluagac](http://web.eng.fiu.edu/selcuk/), [Cyber-Physical Systems Security Lab](https://csl.fiu.edu/))

### Publications

{% include pubs-2.html %}
