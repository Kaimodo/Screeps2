import * as Config from "settings/config";

export function run(room: Room, creep: Creep): void {
  if (creep.store.getFreeCapacity() > 0) {
    const sources = creep.room.find(FIND_SOURCES);
    if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
      creep.moveTo(sources[0]);
    }
  } else {
    if (creep.transfer(Game.spawns[Config.SpawnName], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
      creep.moveTo(Game.spawns[Config.SpawnName]);
    } else {
      creep.transfer(Game.spawns[Config.SpawnName], RESOURCE_ENERGY);
    }
  }
}
