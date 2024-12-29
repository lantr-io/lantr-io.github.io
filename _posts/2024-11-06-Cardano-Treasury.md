---
layout: post
title: Cardano Treasury Withdrawal Strategy
description: A sustainable strategy for Cardano Treasury withdrawals
author: Alexander Nemish
tags: cardano, treasury, governance, drep
categories:
---
## Treasury Withdrawal Strategy

I’ve made a [mathematical model](https://github.com/lantr-io/treasury-model/blob/main/treasury.ipynb) of the Treasury income for the next 10 years.

Current Treasury yearly income is about 300 million ADA.
In 5 years it drops down to 125 million ADA per year.
And in 10 years it’s about 40 million ADA.

My thoughts on the Treasury withdrawals as a DRep and Cardano developer:

1. I don't mind **once a year withdrawals**.
I think @radioastro made good arguments why this is OK during Cardano Summit presentation on Governance.
It's easier to plan, to vote, to hedge against the price volatility, etc.
2. I'm **against** the idea of **random withdrawals** from the current Treasury.
Treasury withdrawals should be **sustainable**. Thus we need a **strategy**.
3. The Treasury withdrawals **should not be staked**.
4. **No voting** with Treasury withdrawals

## Treasury Withdrawal Boundaries

I propose defining **Treasury Withdrawal Boundaries** for Cardano's spending model.
The budget would be constrained by:

$$Budget \in [50\%⋅TreasuryIncome, TreasuryIncome + 20\% \cdot Treasury]$$

This approach ensures:

* A flexible budget that adapts to Cardano's evolving needs and market conditions
* Opportunity for Treasury growth during favorable periods
* Sustainable long-term Treasury management with built-in safeguards

Based on current projections, this would make **150M–600M ADA** available for the 2025 budget.

The parameters (50% and 20%) are adjustable based on community consensus – for example, a 70%/10% ratio could also be viable.

{::nomarkdown}
{% jupyter_notebook "/notebooks/2024-Treasury.ipynb" %}
{:/nomarkdown}

## Why No Staking For Treasury Withdrawals

The Treasury withdrawals **should not be staked**.

According to Cardano Shelly [specification](https://github.com/intersectmbo/cardano-ledger/releases/latest/download/shelley-ledger.pdf), staking rewards are taken from the Reward pot, which is filled by the Reserves and Fees pots.

![Preservation of Value](/assets/img/value-preservation.png){: width="750" }

When Treasury withdrawals are staked, the rewards are taken from the Rewards pot to Reward accounts. Thus less money goes to Treasury.

This means that by staking the Treasury withdrawals we are decreasing Treasury income, essentially **taking money** from Treasury **twice**.

## No Voting With Treasury Withdrawals

Well, I think that's obvious. Intersect **should not vote** with Treasury withdrawals.

## Delegate

If you like what I'm doing, please, consider delegating your voting power to me:

CIP-105: [drep1k4h4cd5jknvcfeq5uuzqthpl7sdjxrwf9gn25tdk49qxyfhusgm](https://gov.tools/connected/drep_directory/drep1k4h4cd5jknvcfeq5uuzqthpl7sdjxrwf9gn25tdk49qxyfhusgm)

CIP-129: drep1y26k7hpkj26dnp8yznnsgpwu8l6pkgcdey4zd23dk655qcse26y3g

[Here is how to do that](https://learncardano.io/how-to-delegate-drep-eternl-wallet-mobile/)

And vote for our Catalyst proposals! Search LANTR.
