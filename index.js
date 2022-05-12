import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Countinorder from "./Countinorder/Countinorder.js";
import Nextcase from "./Nextcase/Nextcase.js";
import Role from "./Role/Role.js";
import Role2 from "./Role2/Role2.js";
import Role3 from "./Role3/Role3.js";
import Role4 from "./Role4/Role4.js";
import Role5 from "./Role5/Role5.js";
import Role6 from "./Role6/Role6.js";
import Role7 from "./Role7/Role7.js";
import Role8 from "./Role8/Role8.js";
import Role9 from "./Role9/Role9.js";
import Role10 from "./Role10/Role10.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Countinorder: new Countinorder({
    x: -112,
    y: 111,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Nextcase: new Nextcase({
    x: -193.21678434563006,
    y: 112.39035654047822,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Role: new Role({
    x: -180,
    y: 35,
    direction: 90,
    costumeNumber: 5,
    size: 30,
    visible: true
  }),
  Role2: new Role2({
    x: -90,
    y: 35,
    direction: 90,
    costumeNumber: 5,
    size: 30,
    visible: true
  }),
  Role3: new Role3({
    x: 0,
    y: 35,
    direction: 90,
    costumeNumber: 5,
    size: 30,
    visible: true
  }),
  Role4: new Role4({
    x: 90,
    y: 35,
    direction: 90,
    costumeNumber: 5,
    size: 30,
    visible: true
  }),
  Role5: new Role5({
    x: 180,
    y: 35,
    direction: 90,
    costumeNumber: 5,
    size: 30,
    visible: true
  }),
  Role6: new Role6({
    x: -180,
    y: -35,
    direction: 90,
    costumeNumber: 5,
    size: 30,
    visible: false
  }),
  Role7: new Role7({
    x: -90,
    y: -35,
    direction: 90,
    costumeNumber: 5,
    size: 30,
    visible: false
  }),
  Role8: new Role8({
    x: 0,
    y: -35,
    direction: 90,
    costumeNumber: 5,
    size: 30,
    visible: true
  }),
  Role9: new Role9({
    x: 90,
    y: -35,
    direction: 90,
    costumeNumber: 5,
    size: 30,
    visible: false
  }),
  Role10: new Role10({
    x: 180,
    y: -35,
    direction: 90,
    costumeNumber: 5,
    size: 30,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
