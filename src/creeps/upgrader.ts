import * as Config from "settings/config";

export function run(creep: Creep): void {
  let roomController = creep.room.find<StructureController>(FIND_STRUCTURES)[0];
  //console.log("RC: " + roomController.pos);
  /*
  if (creep.store.getFreeCapacity() > 0) {
    const sources = creep.room.find(FIND_SOURCES);
    if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
      creep.moveTo(sources[0]);
    }
    */
  creep.moveTo(roomController);
  /*
    else {
      console.log("Test: " + creep.upgradeController(roomController));
      if (creep.upgradeController(roomController) === ERR_NOT_IN_RANGE) {
        console.log("movetocont");
        creep.moveTo(roomController);
      } else {
        creep.upgradeController(roomController);
      }

    }
    */
}
