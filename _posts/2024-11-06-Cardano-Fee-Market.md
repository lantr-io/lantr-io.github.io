---
layout: post
title: Why Cardano Needs a Fee Market
description: An analysis of Cardano's transaction ordering system and a proposal for improvement
author: Alexander Nemish
tags: cardano blockchain
categories: blockchain
---

## The Current Challenge

Remember the [Cardano DDoS attack](https://forum.cardano.org/t/cardano-triumphs-against-ddos-attack/134768) in June 2024? While IOG released a quick fix, they didn't address the fundamental issue.

I've analyzed the potential cost of DDoS attacks on Cardano, and the numbers are concerning. Under current protocol parameters, the maximum transaction size is 16KB with a minimum fee (`minfee`) of 0.8 ADA. This means an attacker could potentially flood the network with 16KB transactions for approximately $7,000 per day, filling blocks and significantly degrading network performance.

The core issue? Cardano lacks transaction prioritization. We need a fee market to allow higher-priority transactions to bypass network congestion through increased fees.

![Cardano DDoS attack cost calculation](/assets/img/cardano-ddos-calculation.png)

## Current Transaction Ordering System

An important distinction: transaction ordering isn't part of Cardano's consensus protocol. This means we can implement improvements without requiring a hard fork!

Currently, transactions wait in the mempool queue and are processed first-in-first-out (FIFO), based on when relay nodes receive them. While this approach provides basic fairness and allows for backpressure during high activity, it has two significant limitations:

1. No transaction prioritization
2. Suboptimal script execution budgeting

### The Script Execution Problem

Consider this scenario with four transactions in the queue:

1. Transaction A: 70% block execution budget, 20% block size
2. Transaction B: 50% block execution budget, 20% block size
3. Transaction C: 30% block execution budget, 20% block size
4. Transaction D: 50% block execution budget, 20% block size

The current system would only include Transaction A in the block, as Transaction B would exceed the remaining execution budget. This creates suboptimal blocks - we recently saw this issue during a token launch.

A more efficient approach would be to include Transactions A and C in one block, followed by B and D in the next block.

## The Three-Dimensional Challenge

Optimizing block creation requires balancing three key constraints:

- Block size
- CPU budget
- Memory budget

We need a solution that optimizes block filling while:

- Maximizing fee collection
- Respecting transaction dependencies
- Maintaining fairness

## Our Proposal: A Flexible Fee Market

We're proposing an alternative transaction ordering system for the Cardano node mempool, based on both transaction fees and execution budgets.

### Key Features

1. **Flexible Configuration**: Stake Pool Operators (SPOs) can choose between:
   - Current FIFO system
   - New Generous-In-First-Out (GIFO) ranking system

2. **Enhanced Mempool Management**:
   - Holds N transactions before implementing backpressure
   - Orders a portion of transactions by fees
   - Uses execution budget as a tiebreaker for equal fees

3. **Configurable Fairness Parameter**:
   - 100% = Pure FIFO (current system)
   - 0% = Full fee-based ordering
   - SPOs can optimize based on their preferences

### Expected Benefits

- Higher throughput for priority transactions
- Natural deprioritization of resource-heavy transactions
- More efficient block utilization
- Increased rewards for all ecosystem participants

It's important to note that on Cardano, transaction fees go into the Rewards pot, which is then distributed between the Treasury, Stake Pool Operators (SPOs), and stakers as rewards. This means that higher fees from priority transactions don't just help with network efficiency – they directly benefit everyone in the Cardano ecosystem by increasing rewards distribution.

![Preservation of Value](/assets/img/value-preservation.png){: width="750" }

## Support the Initiative

### Vote for Our Proposal

Support our [Cardano Fee Market](https://cardano.ideascale.com/c/cardano/idea/131153) proposal in Catalyst.

Look for "LANTR" when voting on Catalyst proposals.

### Delegate Your Voting Power

Help advance Cardano's development by delegating your voting power:

CIP-105 DRep ID: `drep1k4h4cd5jknvcfeq5uuzqthpl7sdjxrwf9gn25tdk49qxyfhusgm`

[Learn how to delegate using Eternl Wallet](https://learncardano.io/how-to-delegate-drep-eternl-wallet-mobile/)
