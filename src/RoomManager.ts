import * as Config from "settings/config";

import * as Miner from "creeps/miner";
import * as Upgrader from "creeps/upgrader";

// import * as Profiler from "screeps-profiler";

import * as M from "settings/memory";

export function run(room: Room): void {
  for (const name in Game.creeps) {
    const creep = Game.creeps[name];
    /* if (Creep.name.includes("Har")) {
      Miner.run(room, creep);
    } else {
      Upgrader.run(room, creep);
    } */
    // Miner.run(room, creep);
    Upgrader.run(room, creep);
  }
}
