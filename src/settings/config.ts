/* Helper
+-------------------------------------------------------------------------------------+
|R |  R       |  C |  S |  E  | R          | W  | T |  S |  L |  E |  L |  T |  O |  P|
|C |  o       |  o |  p |  x  | a          | a  | o |  t |  i |  x |  a |  e |  b |  S|
|L |  a       |  n |  a |  t  | m          | l  | w |  o |  n |  t |  b |  t |  s |  p|
|  |  d	      |  t |  w |  e  | p          | l  | e |  r |  k |  r |  o |  m |  e |  a|
|  |          |  a |  n |  n  | a          | s  | r |  a |    |  a |  r |  i |  r |  w|
|  |          |  i |	  |  s  | r			     |    |   |  g |    |  k |	y |  n |  v |  n|
|-------------------------------------------------------------------------------------+
|0	|  0			 |  5	|  1 |  0	 |  0			   | 0	|  0|	 0 |  0	|  0 |  0	|  0 |  0	|  0|
|1	|  200		 |  5	|  1 |  0	 |  0			   | 0	|  0|	 0 |  0	|  0 |  0	|  0 |  0	|  0|
|2	|  45			 |  5	|  1 |  5	 |  300000	 | 1	|  0|	 0 |  0	|  0 |  0	|  0 |  0	|  0|
|3	|  135		 |  5	|  1 |  10 |	1000000	 | 1	|  1|	 0 |  0	|  0 |  0	|  0 |  0	|  0|
|4	|  405		 |  5	|  1 |  20 |	3000000	 | 1	|  1|	 1 |  0	|  0 |  0	|  0 |  0	|  0|
|5	|  1215000 |	5	|  1 |  30 |	10000000 | 1	|  2|	 1 |  2	|  0 |  0	|  0 |  0	|  0|
|6	|  3645000 |	5	|  1 |  40 |	30000000 | 1	|  2|	 1 |  3	|  1 |  3	|  1 |  0	|  0|
|7	|  10935000|  5	|  2 |  50 |	100000000| 1	|  3|	 1 |  4	|  1 |  6	|  1 |  0	|  0|
|8	|  99999999|	5	|  3 |  60 |	300000000| 1	|  6|	 1 |  6	|  1 |  10|  1 |  1	|  1|
+-------------------------------------------------------------------------------------+
*/

// Memory Version
export const MEMORY_VERSION = 1;

// Debug-Mode
export const DEBUG_MODE = true;

// Room Name
export const roomName = Game.spawns[0].room.name;

// Spawn Name
export const SpawnName = Game.spawns[0].name;

// Minimum number of ticksToLive for a Creep before they go to renew.
export const DEFAULT_MIN_LIFE_BEFORE_NEEDS_REFILL: number = 300;

// Manager Max Creeps per Role
export const MANAGER_MAX_HARVESTERS = 3;
export const MANAGER_MAX_UPGRADERS = 3;

// Slack Test
export const ENABLE_SLACK = true;
