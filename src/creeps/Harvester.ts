import * as Config from "settings/config";

import * as creepActions from "creeps/creepActions";

export function run2(creep: Creep): void {
  // room.visual.text(`🛠️`, creep.pos.x, creep.pos.y, { align: "center", opacity: 0.8 });

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

export function run(creep: Creep): void {
  let spawn = creep.room.find(FIND_MY_SPAWNS)[0];
  let energySource = creep.room.find(FIND_SOURCES_ACTIVE)[0];

  if (creepActions.needsRenew(creep)) {
    creepActions.moveToRenew(creep, spawn);
  } else if (_.sum(creep.carry) === creep.carryCapacity) {
    creep.say("Dropping");
    _moveToDropEnergy(creep, spawn);
  } else {
    creep.say("⛟ to 🚧");
    _moveToHarvest(creep, energySource);
  }
}

function _tryHarvest(creep: Creep, target: Source): number {
  return creep.harvest(target);
}

function _moveToHarvest(creep: Creep, target: Source): void {
  if (_tryHarvest(creep, target) === ERR_NOT_IN_RANGE) {
    creepActions.moveTo(creep, target.pos);
  }
}

function _tryEnergyDropOff(creep: Creep, target: StructureSpawn | Structure): number {
  return creep.transfer(target, RESOURCE_ENERGY);
}

function _moveToDropEnergy(creep: Creep, target: StructureSpawn | Structure): void {
  if (_tryEnergyDropOff(creep, target) === ERR_NOT_IN_RANGE) {
    creepActions.moveTo(creep, target.pos);
  }
}
