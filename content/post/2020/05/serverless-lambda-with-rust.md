---
title: "How to: Serverless, AWS Lambda and Rust"
date: 2020-05-18
math: true
diagram: true
tags: ["tutorial", "serverless", "aws", "lambda", "rust", "faas"]
featured: false
draft: true
---

{{% toc %}}

# Foreword

## Why Rust

Rust has just become 5 years old ([see blog post](https://blog.rust-lang.org/2020/05/15/five-years-of-rust.html)). Along with many features the language brings there are a few reasons that stand out on why you should consider learning or even using the Rust programming language and ecosystem in your projects.\
The most prominent feature of Rust is it's type system with the outstanding ownership model and the lack of a garbage collector (which is a very positive property). This allows the Rust compiler to detect race conditions and more at compile time. This is a huge improvement over the more traditional runtime exceptions that lead to unexpected behaviour. This is also one of the many reasons, big companies and institutions use Rust for their projects or refactorings, see [the Servo engine (Mozilla Research)](https://research.mozilla.org/servo-engines/).\
For more information about the many awesome features the Rust language has, see [the Rust homepage `https://www.rust-lang.org`](https://www.rust-lang.org).

## Why AWS and Lambda

Serverless approaches using a "Function as a service" approach are very attractive to everyone who does not want to worry about infrastructure and machines, updating packages via `apt` or rotating `SSH certificates` for remote connection and debugging / logging.\
In a Cloud environment, where everything is interconnected, you usually want to focus on the #1 main thing a software engineer should do. Solving problems. Everything that distracts you from this #1 goal should be avoided. This is a long ongoing trend already. Today it is quite easy to implement a software, let's say using the `Go` programming language for example, and write a microservice that is RESTful. You do not need to manage any registers manually (thanks to a higher level programming language) or mess around with network protocols (thanks to many libraries that exist to handle this for you). You solely focus on solving your problem. By the way, the people that write the libraries that you may use have this problem to solve. So in some way, you both are doing the exact same thing whereas it is maybe just another layer of abstraction or type of problem.\
Mostly thoughm when writing software I do not want to worry about operating it. At least not when it comes to running it. This should just be working. This is kind of the same argument why people still buy Apple products and accept the [vendor lock in](https://en.wikipedia.org/wiki/Vendor_lock-in) that comes with that. It is simply working (I know this can be argued about).\
Amazon AWS (but also other competitors like Microsoft Azure) and especially their Lambda service for running software in a Faas fashion enables you to do exactly that. By stripping your work from all the obsolete, redundant and annoying tasks that operating software in a secure and reliable manner brings with it, you can focus more on solving your actual problem.

## It now works with AWS Lambda

The relatively new [AWS Lambda Rust Runtime (GitHub)](https://aws.amazon.com/blogs/opensource/rust-runtime-for-aws-lambda) provides a working runtime environment for Rust programs to be executed in. This runtime can be added as a dependency to your `Cargo.toml` and works out of the box. You will not really be able to communicate with other AWS services in a good way though, as this crate only provides the runtime and not AWS service bindings. For that, use the [Rusoto project (GitHub)](https://github.com/rusoto/rusoto). This crate provides bindings for all common AWS services including `S3`, `Lambda`, `DynamoDB` and more. An interesting fact is that the crates is generated based on the `botocore` service manifests.

# Setup

## Prerequisites

### Serverless

Serverless is a framework that let's you easily manage cloud infrastructure and deployments. It also offers an integration with `localstack` in order to deploy and test your infrastructure locally. Install via:
```
brew install serverless
```
or
```
yarn add -g --dev serverless
```
You will also need `serverless-localstack`. Install via:
```
yarn add --dev serverless-localstack
serverless plugin install --name serverless-localstack
```

### Localstack
Localstack is a local AWS mock project which mocks all commonly used services like `S3`, `Lambda`, `DynamoDB` and more. Install via:
```
pip install localstack
```
---
**MACOS**\
If your are developing on MacOS then you will need to add the `/var` folder to your `shared paths` in the Docker config. This is not done easily though because `/var` is actually `/private/var/` and since the docker daemon uses `Finder` to select the path, you can not add `/var`. You will need to go to the docker daemon settings and edit the file using an editor.
```
vim ~/Library/Group\ Containers/group.com.docker/settings.json
```
Here, edit the `filesharingDirectories` array to also include `/var/folders` sothat it looks as follows:
```
"filesharingDirectories" : [
    [...],
    "\/var\/folders",
    "\/private\/var\/folders"
],
```
---

### AWS CLI local

This tool is a wrapper around AWS CLI that automatically targets localstack. Install via:
```
pip install awscli-local
```

## Bootstrapping

To bootstrap your development, you can use the [AWS Movies](https://github.com/replicadse/aws-movies-sls-rest-sample) template repository. This will get you started with your initial setup. All you now need to do is invoke following commands inside this repo:

1) `localstack start` <br /> Do this from a separate terminal since this command is blocking.
2) `make build` <br /> This builds all the binaries and artifacts.
3) `serverless deploy` <br /> This automatically deploys to the `dev` stage, which is mapped to your running instance of `localstack`.
4) `make test` <br /> This invokes a python script which is used to test the endpoints.

---
**NOTE**\
In order to deploy to other stages, simply add the `--stage ${stage}` flag to the `serverless deploy` command. In order to change the region, add `--region ${region}`. Default values are `dev` for `stage` and `us-east-1` for `region`.\
You will need to setup proper `authentication` for serverless and aws in order to deploy to the cloud. I recommend simply using the `aws-cli` and invoking `aws configure` to do so.

---
