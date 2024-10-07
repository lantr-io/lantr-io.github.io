---
layout: page
title: Scalus
description: Scalus - DApps Development Platform for Cardano
img: assets/img/scalus.png
importance: 1
category: work
related_publications: false
---
![CI/Release](https://github.com/nau/scalus/actions/workflows/release.yml/badge.svg)
![Maven Central](https://img.shields.io/maven-central/v/org.scalus/scalus_3)
[![Discord](https://img.shields.io/discord/1105852427346911252.svg?label=&logo=discord&logoColor=ffffff&color=404244&labelColor=6A7EC2)](https://discord.gg/ygwtuBybsy)

[GitHub](https://github.com/nau/scalus)
[Website](https://scalus.org)

## Vision

Scalus is a platform for developing decentralized applications (DApps) on the Cardano blockchain.

The goal is to make a full-stack development experience for Cardano DApps as smooth as possible.
Using the same language, tools and code for frontend, backend and smart contracts development.

## Write Cardano smart contracts in Scala 3

* Scala is a modern functional programming language that runs on JVM, JavaScript and natively via LLVM.
* Reuse your Scala code for your validator, frontend and backend.
* Write once, run anywhere. True full-stack development.
* Scala's powerful type system helps you write correct code.
* Benefit from a huge ecosystem of libraries and tools.
* Utilize testing frameworks like ScalaTest and ScalaCheck
  for [property-based testing](https://en.wikipedia.org/wiki/Property-based_testing).
* Enjoy comprehensive IDE support: IntelliJ IDEA, VSCode and syntax highlighting on GitHub.
* Advanced debugging support.
* Enhanced code formatting and linting, navigation, and refactoring.

## How It Works

Scalus compiles a subset of Scala code to Plutus Core, the language of Cardano smart contracts.

Scalus gives full control over the generated Plutus Core code.
Write efficient and compact smart contracts and squeeze the most out of the Cardano blockchain.

## Features

* Scala 3 to Cardano Plutus Core compiler
* Standard library for Plutus contracts development
* Plutus V1, V2 and V3 support
* Plutus VM Interpreter and execution budget calculation for Plutus V1, V2 and V3, pre and post Chang Hard Fork
* Property-based testing library
* Untyped Plutus Core (UPLC) data types and functions
* Flat, CBOR, JSON serialization
* UPLC parser and pretty printer
* Type safe UPLC expression builder, think of Plutarch
* Bloxbean [Cardano Client Lib](https://cardano-client.dev) integration