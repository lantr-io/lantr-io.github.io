---
layout: page
title: AdaStream
description: AdaStream - Decentralized File Hosting Incentivised via Cardano Ada Payments
img: https://via.placeholder.com/250x250?text=AdaStream
importance: 2
category: work
related_publications: false
---
## AdaStream - Decentralized File Hosting Incentivised via Cardano Ada Payments

## Introduction

This project is a Cardano implementation of the [BitStream](https://github.com/RobinLinus/BitStream) protocol by Robin Linus.

Original paper: [BitStream: Decentralized File Hosting Incentivised via Bitcoin Payments
](https://robinlinus.com/bitstream.pdf)

## TL;DR

- Alice wants to buy a file from Bob.
- Bob encrypts the file with a random key and sends it to Alice.
- Bob creates a bond contract on Cardano with a collateral and a commitment to the key and the file.
- Alice pays Bob for the file via a HTLC (Hash Time Lock Contract), using Cardano or Bitcoin Lightning Network.
- Alice decrypts the file with the key from the HTLC or takes the money back after the timeout.
- If Bob cheats, Alice can prove it and get the collateral from the bond contract.
- Bob can withdraw the collateral by revealing the key.

## Abstract from the original paper

An atomic swap of coins for files would enable an open market for content hosting, in which anyone can monetize their excess bandwidth and data storage capacities, by serving decentralized multimedia services.
Verifiable encryption provides a theoretical solution, but the computational overhead is too expensive in practice.
We propose a solution to the fair exchange problem, which is highly efficient such that servers can handle large files and manage many clients simultanously. Compatible payment methods include Lightning, Ecash, and every other system that supports hash-timelock contracts. The server encrypts the file such that if there’s any mismatch during decryption the client can derive a compact fraud proof. A bond contract guarantees the client receives the exact file or they can punish the server. The transfer happens fully off-chain. An on-chain transaction is required only in case a server cheated.

## Implementation

We used Scala and [Scalus](https://github.com/nau/scalus) to compile a bond and HTLC contracts, encrypt and decrypt the files, and create the transactions.

## On-Chain example

### Withdraw Transation

On Cardano Preview network
TxId – [10fea052e27e335a5addac89adc16460970b4b46ae86b8072377b9951d675404](https://preview.cexplorer.io/tx/10fea052e27e335a5addac89adc16460970b4b46ae86b8072377b9951d675404)

### Fraud Proof Transaction

On Cardano Preview network
[8faeadb75252c67475e1e1ddacde75d629b47938d70c082c07630955d46c8fae](https://preview.cexplorer.io/tx/8faeadb75252c67475e1e1ddacde75d629b47938d70c082c07630955d46c8fae)