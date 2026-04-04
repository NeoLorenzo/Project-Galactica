# The Player Entity & Command Structure

### 1. The Core Concept: The "King" Piece
Unlike traditional 4X strategy games where the player is an omnipresent "god" in the sky, in *Project Galáctica*, the player exists as a physical, vulnerable entity within the game universe. You are the Leader. Your physical location dictates your tactical advantages, your communication limits, and your ultimate survival. If the Leader is killed, the campaign ends.

### 2. Command Locations & Strategic Trade-offs
The Leader can be transferred between three types of command centers, each offering distinct advantages and vulnerabilities:

* **Planetary Capitals:** * *Advantage:* Maximum defense. Protected by planetary shields, deep-crust bunkers, and orbital defense grids. 
    * *Disadvantage:* Zero mobility. If a siege begins, the Leader is trapped inside a gravity well. Evacuation requires breaking through the enemy blockade.
* **Space Stations (Wormhole Hubs):**
    * *Advantage:* Supreme logistical control. Placing the Leader on a station directly over a wormhole guarantees instant FTL communication across the entire connected empire. Rapid escape through the wormhole is possible if attacked.
    * *Disadvantage:* Structurally vulnerable. Cannot retreat or dodge. Susceptible to concentrated strikes from heavy dreadnoughts.
* **Spaceships (The Flagship):**
    * *Advantage:* Ultimate mobility and offensive power. The Leader can spearhead invasions, granting massive morale and combat bonuses to the local fleet. Can retreat at will.
    * *Disadvantage:* Extreme risk. A single tactical error, an ambush, or a jump into an uncharted system can result in immediate isolation or death.

### 3. FTL Communication & The "Fog of War"
Communication within the empire is bound by the laws of physics. FTL communication is *only* possible by shooting data-lasers through the established Wormhole Network. 

* **The Command Hub:** If the Leader is stationed at a connected node (Capital or Hub Station), the player has real-time vision and control over all connected systems.
* **The Dark Sector:** If the Leader is on a Flagship that jumps into an unconnected star system, **communication is severed.** 
    * The player's UI will lock out real-time updates from the rest of the empire.
    * The player cannot issue micro-management orders to distant fleets or planets until a laser-link is re-established (either by returning to a wormhole or building a relay).
    * *AI Sub-routines:* While the Leader is cut off, the rest of the empire runs on automated "Standing Orders" (Defend, Build, Harvest) but cannot adapt to unexpected enemy invasions.
* **Information as a Resource (Reconnaissance):** Sensor data and military intel are physically harvested resources. If a scout fleet jumps into deep space, it must deliver that data within a reasonable time window back to the central network. If a fleet drifts too far or takes too long, it falls completely outside the Fog of War, effectively acting autonomously and cannot be controlled by the player.
* **Class I Relay Nodes:** To maintain control over distant fleets, empires can attempt to establish artificial Class I "Micro-Fracture" data relays. However, these are late-game constructs that must be deeply researched. Even then, they cannot be deployed arbitrarily—they must be tethered to specific, gravitationally viable anchor zones in space.

### 4. Survival, Fleeing, and "Game Over" Conditions
To prevent frustrating, instantaneous "Game Over" screens from lucky enemy critical hits, the death of the Leader must be a deliberate tactical failure by the player.

* **The Escape Pod Mechanic:** If the Leader's Flagship or Space Station is destroyed, the Leader automatically ejects in an Escape Pod.
    * The game shifts to a high-stakes, stealth-survival state. 
    * The player takes manual control of the pod (which has zero weapons and minimal thrusters) and must navigate through the debris and enemy fleets to reach a friendly unit, planet, or wormhole.
* **True "Game Over":** If the Leader's Escape Pod is captured/destroyed, it results in an **immediate Game Over**, ending the campaign. While post-death succession mechanics may be considered for future expansions, for the MVP, the loss of the "King" piece definitively stops the game—akin to getting checkmated in chess.

### 5. Universal Timeline & Speed Caps
To prevent the simulation (and the player experience) from becoming overwhelmingly complicated due to relativistic physics, *Project Galactica* runs on a synchronized, universal clock.
* **Universal Speed Limits:** All ships, including the Leader's flagship, are globally capped at a maximum sub-light speed (e.g., 0.05c to 0.1c). By keeping all travel at non-relativistic speeds, time dilation effects are rendered mathematically negligible.
* The game avoids the need to warp time dynamically or calculate desynchronized fleet arrivals, ensuring that the heavy tactical focus remains entirely on the Wormhole Network and FTL data logistics rather than complex relativity equations.