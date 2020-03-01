import * as Config from "settings/config";

import * as creepActions from "creeps/creepActions";

export function run(creep: Creep): void {
  let spawn = creep.room.find(FIND_MY_SPAWNS)[0];
  let energySource = creep.room.find(FIND_SOURCES_ACTIVE)[0];
  let roomController = creep.room.find<StructureController>(FIND_STRUCTURES)[0];

  // https://stackoverflow.com/questions/30324353/screeps-memory-adding-how

  if (creepActions.needsRenew(creep) && !creepActions.canWork(creep)) {
    creepActions.moveToRenew(creep, spawn);
  } else if (_.sum(creep.carry) === creep.carryCapacity) {
    creep.memory.working = true;
    creep.say("⏫ Upgarding RC");
    _moveToUpgradeController(creep, roomController);
  } else if (creepActions.canWork(creep)) {
    _moveToUpgradeController(creep, roomController);
  } else {
    if (!creepActions.canWork(creep)) {
      creep.say("🚧 harvesting");
      _moveToHarvest(creep, energySource);
    }
  }
}

function _tryHarvest(creep: Creep, target: Source): number {
  return creep.harvest(target);
}

function _tryUpgrade(creep: Creep, target: StructureController): number {
  return creep.upgradeController(target);
}

function _moveToHarvest(creep: Creep, target: Source): void {
  if (_tryHarvest(creep, target) === ERR_NOT_IN_RANGE) {
    creep.say("⛟ to 🚧");
    creepActions.moveTo(creep, target.pos);
  }
}
function _moveToUpgradeController(creep: Creep, target: StructureController): void {
  if (_tryUpgrade(creep, target) === ERR_NOT_IN_RANGE) {
    creep.say("⛟ to ⏫");
    creep.moveTo(target.pos);
  }
  if (creepActions.canWork(creep)) {
    creep.upgradeController(target);
    if (_.sum(creep.carry) === 0) {
      creep.memory.working = false;
    }
  }
}
