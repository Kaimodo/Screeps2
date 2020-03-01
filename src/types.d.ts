// example declaration file - remove these and add your own custom typings
// declare const require: (module: string) => any;

// interface XMLHttpRequest {}

// memory extension samples
interface CreepMemory {
  [Name: string]: any;
  role: string;
  room: string;
  working: boolean;
}

interface Memory {
  [key: string]: any;
  uuid: number;
  log: any;
  Profiler: any;
}

// `global` extension samples
declare namespace NodeJS {
  interface Global {
    log: any;
    cc: any;
    Profiler: any;
  }
}

interface FlagMemory {
  [name: string]: any;
}
interface SpawnMemory {
  [name: string]: any;
}
interface RoomMemory {
  [name: string]: any;
}
