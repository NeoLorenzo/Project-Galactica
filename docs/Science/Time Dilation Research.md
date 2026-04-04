# Time Dilation Research & Sub-Light Travel Mechanics

This document outlines the scientific realities of time dilation, why it poses a major challenge for game design, how *Project Galáctica* elegantly solves it using hard science, and the strategic consequences of this solution.

### 1. How Time Dilation Occurs (The Real-World Science)
Time is not absolute; it is relative to the observer. In astrophysics, time dilation occurs through two primary mechanisms:
* **Special Relativity (Velocity Time Dilation):** As an object accelerates closer to the speed of light ($c$), time slows down for that object relative to a stationary observer. The effect is calculated using the Lorentz factor ($\gamma$). At 90% the speed of light (0.9c), 1 year on a ship equals roughly 2.3 years on a stationary planet.
* **General Relativity (Gravitational Time Dilation):** Massive objects curve spacetime. Time moves slower deeper in a gravity well (e.g., near a star or black hole) compared to deep space. For standard stellar masses (like our Sun), this effect is minute compared to high-velocity dilation.

### 2. Why Time Dilation is a Problem for the Game
Simulating realistic relativistic travel in a real-time Grand Strategy Game introduces near-insurmountable friction:
* **Desynchronization of the Universal Clock:** If a player has one fleet traveling at 0.9c and five colonies completely stationary, time is passing at vastly different rates. A universal "game tick" becomes mathematically impossible to enforce.
* **The UI & UX Nightmare:** How does a player issue orders to a fleet that is experiencing time at a fraction of the speed of the rest of the empire? From the fleet's perspective, the empire is fast-forwarding uncontrollably.
* **Multiplayer/AI Syncing:** If multiple empires are moving fleets at different relativistic speeds, predicting interceptions, calculating production cycles, and resolving combat breaks down. The game state would fragment into hundreds of isolated timeframes.

### 3. How We Solve the Problem: The "Dust Limit"
Instead of ignoring physics or inventing "space magic" inertial dampeners, *Project Galáctica* solves the time dilation problem by strictly limiting sub-light speeds using a hard sci-fi concept: **The Dust Limit**.

* **The Velocity Cap:** No ship in the galaxy travels fast enough to trigger significant Special Relativity. The universal speed limit for all sub-light travel is **0.05c (5% the speed of light)**. 
* **The Hard Science Justification:** At relativistic speeds, the kinetic energy of microscopic interstellar debris becomes catastrophic. Without fictional energy shields, a mere 1-gram pebble hitting a hull at 0.05c impacts with a kinetic energy of roughly $1.12 \times 10^{11}$ Joules—the explosive equivalent of **26.8 tons of TNT**. A ship traveling at 0.5c or faster would be physically vaporized by stray hydrogen atoms and micro-asteroids. To survive space travel utilizing physical armor and point-defense systems, all factions strictly govern their engines to never exceed 0.05c.
* **The Math Checks Out:** At 0.05c, the Lorentz factor dictates that time dilation is approximately **0.125%**. Because this deviation is so infinitesimally small, time effectively flows uniformly for all actors across the map.
* **Interstellar Travel:** Because conventional thrusters are capped at 0.05c, traversing between star systems normally would take decades or centuries. Thus, *all* interstellar travel must rely on the network of static Einstein-Rosen bridges (wormholes), reserving thrusters entirely for localized, in-system traversal.

### 4. The Strategic Consequences (Gameplay Pacing)
Because FTL is impossible outside of wormholes and sub-light speed is heavily capped, moving fleets realistically across a solar system requires immense strategic patience and planning.

* **"Simulated Turns" in Real-Time:** Solar systems are vast. Traveling from a system's edge (where a wormhole might be located) to the inner habitable planets at 0.05c can take days or weeks of in-game time. This speed limit creates a "simulated turn" feel; if an enemy fleet drops out of a wormhole, you have a realistic tactical window to scramble defense fleets, recall miners, or evacuate the Leader via an Escape Pod before the siege begins.
* **Terrain & Gravity Wells:** Navigating deep into a star system means fighting the star's immense gravity well, reducing tactical mobility further. Defenders entrenched on inner planets hold a natural terrain advantage over invaders pushing inward from an outer-system wormhole.
* **Logistical Tension:** Reinforcements take time. If a battle is happening on an outer gas giant and your main fleet is docked at the innermost planet, they cannot just magically "warp" to the rescue. They must burn through the system at 0.05c, making positioning and foresight the primary skills needed to win wars in *Project Galáctica*.