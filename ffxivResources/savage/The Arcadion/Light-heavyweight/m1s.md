---
sidebar_position: 1
sidebar_custom_props:
  cardImage: 'arcadion/light-heavyweight/Black_Cat_from_FFXIV.webp'
title: M1S - Black Cat
description: M1S - Black Cat resource page.
slug: /m1s
pagination_next: null
pagination_prev: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# M1S - Black Cat

![M1S_Arena](/arcadion/light-heavyweight/M1S_Arena.png)

## Party Finder Summary

***

### Party Finder TL;DR

```
TN | Same Bait Intercards | Supp CCW | THD | MTTT
```

***

### Party Finder Terms

<Tabs>
  <TabItem value="TN" label="TN" default>
    Mechanics will be performed facing and using True North as the reference point. This applies to [Quadruple Crossing](#quadruple-crossing) and [Leaping One-Two Clone](#leaping-one-two-clone).
  </TabItem>
  <TabItem value="Same Bait" label="Same Bait">
    Proteans during Quadruple Crossing are always baited in the same spot on intercardinals, with DPS baiting the first set unless they have Nailchipper markers.
  </TabItem>
  <TabItem value="Supp CCW" label="Supp CCW">
    Supports rotate counterclockwise (CCW) to their pair and protean spot, and tanks rotate CCW to their light party (LP) stack at East and West.
  </TabItem>
  <TabItem value="THD" label="THD">
    Mouser 2 Protean Spreads are boss-relative, from left to right: Tank - Healer - DPS.
  </TabItem>
  <TabItem value="MTTT" label="MTTT">
    Raining Cats tether order: Melee - Tank - Tank - Tank. Tanks should heavily mitigate the second set of tethers and use invulnerability for the last two.
    
    :::tip
    NA Party Finder mostly uses the [DiaStarvy MTTT Raidplan](https://raidplan.io/plan/3Kfzojuys7fOQs1v). Tanks will take the close bait, while the party takes the far bait.

    You may see groups using a slightly different strategy with the tanks not in light parties. View the Joonbob guide for an explanation.
    :::
  </TabItem>
</Tabs>

***

### Raidplans

<Tabs>
  <TabItem value="MTTT" label="MTTT" default>
    [MTTT Raidplan](https://raidplan.io/plan/3Kfzojuys7fOQs1)
  </TabItem>
</Tabs>

***

### Arena Markers

```json
{"Name":"NASEbin - Numbers for Sleepy Cats","MapID":986,"A":{"X":100.0,"Y":0.0,"Z":90.0,"ID":0,"Active":true},"B":{"X":110.0,"Y":0.0,"Z":100.0,"ID":1,"Active":true},"C":{"X":100.0,"Y":0.0,"Z":110.0,"ID":2,"Active":true},"D":{"X":90.0,"Y":0.0,"Z":100.0,"ID":3,"Active":true},"One":{"X":90.0,"Y":0.0,"Z":95.0,"ID":4,"Active":true},"Two":{"X":110.0,"Y":0.0,"Z":95.0,"ID":5,"Active":true},"Three":{"X":110.0,"Y":0.0,"Z":105.0,"ID":6,"Active":true},"Four":{"X":90.0,"Y":0.0,"Z":105.0,"ID":7,"Active":true}}
```

***

## Video Guides

### M1S Guide | Pickup Guide | Joonbob

<YouTube youTubeId="0Vb3TCqz4F8" />
:::tip
Other than Raining Cats, this video guide is 1-to-1 with NA PF strats . 
:::

## Detailed Fight Overview

***

### Quadruple Crossing

**Same Bait Strategy**

Bait all proteans on intercardinals – DPS first, supports second.

Partner stacks on cardinals in their safe spots – light party stacks on East/West.

* Supports rotate counterclockwise to where the DPS took their protean.
* DPS rotate clockwise to the safe spot after baiting.

:::tip
This strategy will be used for ALL Quadruple Crossings throughout the fight.
:::

***

### Double One-Two Paw

**Left Safe First:**
Stand to the left of the intercardinal clone, then move to the right of the cardinal clone.

**Right Safe First:**
Stand to the right of the cardinal clone, then move to the left of the intercardinal clone.

:::tip
Light party and partner stacks are resolved in the same positions as during the Quadruple Crossing.
:::

***

### Leaping Quadruple Crossing

Resolved in the same way as the first Quadruple Crossing. The only difference is how you determine "north." NA Party Finder mostly performs this mechanic facing True North.

:::warning
Boss-relative positioning is not widely used. If using boss-relative, treat the direction the boss is facing as north.
:::

***

### Mouser 1

<Tabs>
  <TabItem value="Platform Dodges" label="Platform Dodges" default>
    During the first part of Mouser, all 16 tiles in the arena will be hit at least once; 
    12 of them will be hit twice and break, leaving a zig-zag pattern of 4 remaining tiles from north to south or west to east. 
    To dodge all of the hits, start on either of the two inner tiles next to the first one hit. 
    Watch to see if the tile that is hit first gets hit a second time.

    * If it gets hit only once, move into it after the first hit.
    * If it gets hit twice, move into it after the first hit, then back into the other tile once the other is hit.

    Notably, the southeast (SE) inner tile is always hit before the southwest (SW) inner tile. The zig-zag pattern will always be through the center two columns or rows.
  </TabItem>
  <TabItem value="Knock-ups and Knock-downs" label="Knock-ups and Knock-downs">
      The next part of the mechanic will either knock up (sending the player forward) or knock down (keeping the player in the same spot but unable to move or attack) all support roles or DPS. 
      The paw marker will indicate who is getting knocked up or down. 
      Unlike in Normal mode, the clone will always teleport directly behind the affected player's facing direction rather than dash from its current location.

      * Left arm glowing + reeling back = Knock-down
      * Right arm glowing + lunging forward = Knock-up

      The player getting knocked up or knocked down will perform the mechanic on their current tile, regardless of the version.

      * If knocked up, stand in one corner of the safe tile and look toward the opposite corner.
      * If knocked down, you can stand anywhere in your safe tile.

      When a player is hit, an AoE attack is triggered in a "+" (plus) shape pattern from that player, which will knock off anyone standing in it. 
      This AoE will affect all tiles directly adjacent to the hit player's position in all cardinal directions. 
      Players who are not marked can safely stand on a tile diagonal from the marked player.
  </TabItem>
</Tabs>

***

### Clones

The initial Leaping One-Two and Leaping Quadruple Crossing are resolved in the same way as before. Note the following:

* Clone positions and their associated mechanics.
* Jump directions and the order of safe sides. Use True North as the reference.

Pay attention to which clone is tethered after the first two mechanics are resolved. The clone tethered to a mechanic will begin performing that specific mechanic.

<Tabs>
  <TabItem value="Quadruple Crossing / Nail Chipper Clone" label="Quadruple Crossing / Nail Chipper Clone" default>
    This is resolved in the same way as the "same baits" strategy, with the only difference being which role starts first.
    * Roles without markers bait first; roles with markers bait second. Avoid standing near marked players.
    * Players who were unmarked will receive markers after their baits.
    * Marked players need to stay away from other marked players until their mechanics are resolved. They can stand near unmarked players.
    :::warning
    Boss-relative positioning is not commonly used. If using boss-relative, treat the direction the boss is facing as North.
    :::
  </TabItem>
  <TabItem value="Leaping One-Two Clone" label="Leaping One-Two Clone">
    This is resolved similarly to the "same baits" strategy, with the addition of light party stacks.
    * As the room-wide cleaves occur, light party stacks will form on two players.
    * Light Party 1 should position to the north of the boss, and Light Party 2 to the south, using True North as the reference.
    :::warning
    Boss-relative positioning is not commonly used. If using boss-relative, treat the direction the boss is facing as North.
    :::
  </TabItem>
</Tabs>

***

### Mouser 2

Mouser 2 is resolved in the same way as Mouser 1, but with an additional mechanic. 
The role that was not marked during Mouser 1 will be marked for Mouser 2.

During each knock-up or knock-down, there will be two instances of either a 7-player party stack or a protean bait, for a total of four events. 
The order of these events is random.

Protean spreads are boss-relative, from left to right: Tank - Healer - DPS.

***

### Raining Cats

Two tethers spawn from the boss. 
These tethers are heavy-hitting cleaves that apply a vulnerability-up debuff to the tethered player. 
Additionally, two proximity-based stacks will target the closest and furthest players.

To resolve this mechanic, NA Party Finder uses the [DiaStarvy MTTT Raidplan](https://raidplan.io/plan/3Kfzojuys7fOQs1v).

<Tabs>
  <TabItem value="Stacks" label="Stacks" default>
    Tanks will always be responsible for taking the close stacks throughout the entire mechanic. 
    They should stack together north of the boss, within the boss's hitbox for the first set of tethers.

    The rest of the party will stack at max melee range south of the boss.
  </TabItem>
  <TabItem value="Tethers" label="Tethers">
    **First Tethers:** 
    - Melees take the first tethers to the west and east. Group 1 goes west, and Group 2 goes east. 
    - Make sure to stand at the edge of the boss's hitbox.

    **Second Tethers:**  
    - Tanks take the second tethers. These should be mitigated by the tanks. 
    - Tanks should position themselves east and west, remaining close to the boss.
    - Melees join the stack south.

    **Third and Fourth Tethers:**
    - The third and fourth tethers will be handled using invulnerability skills by the tanks, with everyone remaining in their positions.
  </TabItem>
</Tabs>

***

### Predaceous Pounce

Telegraphed AoEs and dashes will appear in the arena from a clone. 
Additionally, the boss will perform a left or right cleave as the clone dashes around the arena.
Players should avoid the AoEs and dashes while keeping an eye on the boss's cleave pattern.

:::tip
This mechanic is generally skipped. It won't be seen unless there are a lot of deaths and low DPS.
:::

***

### Enrage

The boss casts another Mouser, which will destroy the entire platform, resulting in a party wipe.
