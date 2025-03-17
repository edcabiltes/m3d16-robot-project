import { goalOrientedRobot, randomRobot, routeRobot } from "./robots.js";
import { runRobot } from "./simulation.js";
import { roadGraph, VillageState } from "./villageState.js";

console.log("Running randomRobot...");
runRobot(VillageState.random(), randomRobot, []);

console.log("Running routeRobot...");
runRobot(VillageState.random(), routeRobot, []);

console.log("Running goalOrientedRobot...");
runRobot(VillageState.random(), goalOrientedRobot, []);

console.log(roadGraph);