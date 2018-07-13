# ApiAcceptance

API Acceptance uses [karate](https://github.com/intuit/karate) version 0.7.0 and Java scripts

API Acceptance enables execution of automated test to validate Rest/SOAP APIs. It is a collection of java modules interacting in loosely coupled layers which facilitates the automation. The framework generates reports that can be shared with stack holders and provide insight about the health of the APIs.

The test suite can be switched between multiple environment configurations and reports can be generates for different sets of configuration. Has the capability to test multiple mico services APIs interacting with each other. Can also simulate interaction with upstream system. This will support various different data structures such as JSON, XML and even plain text and also supports parsing mechanism for JSON and XML.

## Getting Started

Download the folder strure and the POM file in to your local machine. Execute maven install from the command line. That will download all the dependencies and start execute your test

```
mvn install
```

### Prerequisites

- [Java](http://www.oracle.com/technetwork/java/javase/downloads/index.html) 8 
- [Maven](http://maven.apache.org)
- IDE (Choose any one)
  - [IntelliJ](https://www.jetbrains.com/idea/)
  - [Visual Studio Code](https://code.visualstudio.com/)

### Execute From Intellij

Setup Intellij Run/Debug configuration which is shown bellow

<img src="https://github.com/Veln/ApiAcceptance/blob/master/resources/APIAcceptance.png" height="600px"/>


Once you setup everything in the IDE now click on Run button all the test will run. 
