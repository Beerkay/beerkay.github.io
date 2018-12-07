---
layout: default_minimal
title: Home
notitle: true
---

### Research 
I've had the opportunity to work on a number of interesting research projects during my Msc. and PhD. studies. I have developed new analysis tools and algorithms for emerging applications, built robust detection systems against sophisticated malware, designed new attacks for machine learning systems, and demonstrated the effectiveness of approaches on real systems. The system-specific core of my research has led to rewarding collaborations with researchers from program analysis, machine learning, networking, secure computation, and optimization. Here is a summary of some of my efforts. 

####  IoT Safety, Security, and Privacy Analysis

<img align="left" src="{{ site.base }}/img/saint/saint.png" style="border-radius: 15px" hspace="15"> We have implemented two systems and a toolset to analyze IoT applications: Soteria, Saint and IoTBench. 

[Soteria](https://www.usenix.org/system/files/conference/atc18/atc18-celik.pdf) is a static analysis system for validating whether an IoT app or IoT environment (collection of apps working in concert) adheres to identified safety, security, and functional properties. We demonstrated that many apps violate properties when used in isolation and when used together in multi-app environments. This work was presented in USENIX ATC 2018. 

[Saint](https://www.usenix.org/system/files/conference/usenixsecurity18/sec18-celik.pdf) is a static taint analysis tool for IoT applications. Through this effort, we introduced a rigorously grounded framework for evaluating the use of sensitive information in IoT apps–and therein provide developers, markets, and consumers a means of identifying potential threats to security and privacy. This work appeared in USENIX Security Symposium 2018. 

Lastly, we have introduced [IoTBench](https://github.com/IoTBench/test-suite), an IoT-specific test corpus for evaluating systems designed for IoT app analyses. IoTBench is under continual development and always welcoming contributions.

<img src="https://raw.github.com/secure-software-engineering/DroidBench/develop/new.gif"/> My colleague, Xiaolei Wang and I created [a collection of papers](https://github.com/Beerkay/IoTResearch/blob/master/README.md) we recommend reading for those interested in studying Internet of Things security and privacy. 


##### My Usenix Security'18 talk on Sensitive Information Tracking in Commodity IoT.

[![Sensitive Information Tracking in Commodity IoT](/img/saint/saintTalk.png)](https://www.youtube.com/watch?v=ggsoDoOBdTo "Sensitive Information Tracking in Commodity IoT")

#### Robust Detection under Privileged Information
<img align="left" src="{{ site.base }}/img/privileged/forensic-detection.png" style="border-radius: 15px" hspace="15">  Training of models has been historically limited to only those features available at runtime. In this study, we ask "how can detection systems integrate intelligence relevant to an attack that is available at training time, yet not available at runtime?" 

Consider a rootkit detection system for mobile phones. Obtaining a set of features may drain the battery even though they contribute to the detection of a rootkit. Therefore, the users might disable the system because the battery dies very quickly. However, obtaining these features at training time is feasible as we have unlimited resources in a laboratory-based environment. We built an alternate model construction approach that trains models using "privileged" information--features available at training time but not at runtime, yet samples are classified without the need of privileged features at runtime. Turning to rootkit example, the features draining the battery are the privileged features. 

Our paper is accepted to ACM AsiaCCS'18: [Detection under Privileged Information](https://arxiv.org/pdf/1603.09638v4.pdf). Read more about formulation and implementation in our [technical report](http://www.cse.psu.edu/~zbc102/files/svm_plus_technical_report_15.pdf), and [Feature Cultivation in Privileged Information-augmented Detection](https://beerkay.github.io/papers/Celik17_CODASPY_IWSPA.pdf). 

#### Machine Learning in Adversarial Settings
<img align="left" src="{{ site.base }}/img/adversarial/dnn-sm.png" style="border-radius: 15px" hspace="15"> One of the limitations of machine learning in practice is that they are subject to adversarial samples. Adversarial samples are carefully modified inputs crafted to dictate a selected output. In the context of classification, adversarial samples are crafted so as to force a target model to classify them in a class different from their legitimate class. In this work, we focus on Deep Neural Networks (DNNs) for adversarial sample generation and attacker's capabilities to evade systems built on DNNs. You can check out our publication on adversarial machine learning: [The Limitations of Deep Learning in Adversarial Settings](https://arxiv.org/pdf/1511.07528.pdf) and [Practical Black-Box Attacks against Machine Learning](https://arxiv.org/pdf/1602.02697.pdf).

#### Data Security and Privacy
<img align="left" src="{{ site.base }}/img/patient-privacy/problem.png" style="border-radius: 15px" hspace="15"> Users are asked to disclose personal information such as genetic markers, lifestyle habits, and clinical history. This data is then used by statistical models to predict personalized treatments. However, due to privacy concerns, patients often desire to withhold sensitive information. This self-censorship can impede proper diagnosis and treatment, which may lead to serious health complications. We implemented privacy distillation, a mechanism which allows users to control the type and amount of information they wish to disclose to the healthcare providers for use in ML models. The capacity afforded by this approach allows us to make accurate predictions in a wide array of applications requiring private inputs, such as the ones found in medicine, law, forensics, and social networks.

[Patient-Driven Privacy Control through Generalized Distillation](https://arxiv.org/pdf/1611.08648v1.pdf) is accepted to IEEE Privacy-aware computing (PAC) conference, 2016. The use of privacy-sensitive patient data made us develop new algorithms for [Achieving Secure and Differentially Private Computations in Multiparty Settings](https://arxiv.org/pdf/1702.08342.pdf). This paper is also accepted to PAC conference. Lastly, we have developed algorithms that allow members to define data exchange policies in a privacy-preserving collaborative machine learning. Our paper [Curie: Policy-based Secure Data Exchange](https://arxiv.org/pdf/1702.08342.pdf) is accepted to CODASPY'19.


#### Network Security
<img align="left" src="{{ site.base }}/img/malware/malware-pca2.png" style="border-radius: 15px" hspace="15"> We present a framework for evaluating the transport layer feature space of malware heartbeat traffic. We use these features in a prototype detection system to distinguish malware traffic from traffic generated by legitimate applications. Further, we characterize the evolution of malware evasion techniques over time by examining the behavior of 16 malware families. In particular, we highlight the difficulty of detecting malware that use traffic-shaping techniques to mimic legitimate traffic. Read more about the study [here](https://beerkay.github.io/papers/Celik15_Milcom.pdf).

In our [USENIX CSET](https://beerkay.github.io/papers/Celik11_CSET.pdf) and [JDMS](https://beerkay.github.io/papers/Celik17_JDMS.pdf) works, my co-authors and I also take a closer look at the experimentation artifacts of malware detection. For instance, we find that current approaches do not consider timing-based calibration of the malware traffic traces prior to using this traffic to salt a background enterprise traffic trace. We found that timing-based features of the malware traffic may be artificially distinctive, potentially leading to (unrealistically) optimistic classification results.

#### Science of Security
I am involved in Cyber-Security Collaborative Research Alliance ([CSec CRA](http://cra.psu.edu/)) with the Army Research Laboratory, Penn State, Carnegie Mellon, UC Riverside, UC Davis, and Indiana University. Our mandate is to develop a new science of security. As part of this effort, I've worked on the foundation for representing of operational models for cybersecurity. I developed algorithms [to make optimal decisions in a cyber environment by modeling the current and future states of a cyber-operation](http://wwwusers.di.uniroma1.it/~novella/myhome/Home_Page_di_Novella_Bartolini/milcom_2016.pdf).

<!---
Malware Traffic Detection and Malware Experimentation Design
-->
