---
layout: post
title: Cardano Fee Market
description:
tags: cardano
categories:
---
## Why Cardano Needs A Fee Market

Remember that [Cardano DDoS attack](https://forum.cardano.org/t/cardano-triumphs-against-ddos-attack/134768) in June 2024?
The one IOG had to release a quick fix for the root cause?

The thing is that they didn't fix the actual root cause.

I’ve made a calculation of Cardano DDoS attacks budget and it’s not that big.
According to current protocol parameters, maximum transaction size is 16KB and `minfee` for such transaction is 0.8 ADA.

This means that attacker can spam the network with regular 16kb transactions, spending $7k a day to potentially fill all the blocks with his transactions and significantly slow down the network.

Because currently there is no way to give priority to transactions. That's why we need a fee market – to give priority to transactions with higher fees.

![alt text](/assets/img/cardano-ddos-calculation.png)

## How It Works Right Now

What's important to understand is that transaction ordering is not a part of the consensus protocol.
This means we can change it without hardforking the network!

Currently, transactions are ordered by the order they are received by the relay nodes.
This implements a first-come-first-serve policy and 'pull' approach.
The transactions are held in the mempool queue until they are included in a block, first in first out.

This approach if 'fair' and allows for backpressure on the network.

But it's not ideal as there is no transaction prioritization.

Also, it's not optimal in terms of script execution budgeting.

Say, you have 4 transactions in the queue:

1. 70% of block execution budget, 20% of block size
2. 50% of block execution budget, 20% of block size
3. 30% of block execution budget, 20% of block size
4. 0% of block execution budget, 20% of block size

Current implementation will include only the first transaction in a block, because including the second one would exceed the block execution budget.
This produces a suboptimal block.

This happened recently with SNEK token launch.

More optimally would be to include transactions 1, 3, and 4 in the block.

We have 3 dimensions to consider:

- block size
- CPU budget
- memory budget

And we need to optimize the block filling while maximizing the fees, respecting the transactions interdependencies and be fair. That's a challenging task!

## What We Propose

We propose to implement an alternative version of transaction ordering in the Cardano node mempool, based on transaction fees and execution budgets.

Key points of the proposal:

Flexible Configuration: SPOs will be able to switch between the current First-In-First-Out (FIFO) and the new Generous-In-First-Out (GIFO) ranking mempool.

### Mempool Behavior

The mempool will collect and hold $$N*BlockSize$$ of transactions needed for a block.
A portion of these transactions will be ordered by fees, with lower execution budgets used as a tiebreaker for equal fees.

### Fairness Parameter

A configurable "Fairness" parameter will determine the balance between fee-ordered and FIFO transactions.
100% fairness means pure FIFO ordering (current system).
0% fairness means full fee-based ordering.
SPOs can adjust this parameter to find an optimal balance.

### Benefits

Improved throughput for high-priority (high-fee) transactions.
Deprioritization of transactions with overly high execution budgets.
More optimal block filling.

### Implementation

This mempool transaction ordering functionality is not part of Cardano consensus.
No hardfork will be required for implementation.
This solution aims to create a more dynamic and efficient transaction processing system while allowing SPOs to maintain a desired level of fairness in transaction ordering.

## What's Next

Vote for our [Cardano Fee Market](https://cardano.ideascale.com/c/cardano/idea/131153) Catalyst proposal.

## Delegate

Support my work by delegating your voting power.

CIP-105: [drep1k4h4cd5jknvcfeq5uuzqthpl7sdjxrwf9gn25tdk49qxyfhusgm](https://gov.tools/connected/drep_directory/drep1k4h4cd5jknvcfeq5uuzqthpl7sdjxrwf9gn25tdk49qxyfhusgm)

[Here is how to do that](https://learncardano.io/how-to-delegate-drep-eternl-wallet-mobile/)

Vote for our Catalyst proposals - search "LANTR".
