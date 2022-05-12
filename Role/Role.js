/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Role extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Dinasor", "./Role/costumes/Dinasor.png", { x: 211, y: 208 }),
      new Costume("crab", "./Role/costumes/crab.png", { x: 230, y: 157 }),
      new Costume("dog", "./Role/costumes/dog.png", { x: 249, y: 146 }),
      new Costume("fish", "./Role/costumes/fish.png", { x: 242, y: 197 }),
      new Costume("Lion", "./Role/costumes/Lion.png", { x: 201.5, y: 246 }),
      new Costume("shark", "./Role/costumes/shark.png", { x: 235, y: 166 }),
      new Costume("starfish", "./Role/costumes/starfish.png", {
        x: 220,
        y: 226
      }),
      new Costume("zebra", "./Role/costumes/zebra.png", { x: 198, y: 202 }),
      new Costume("巨嘴鳥", "./Role/costumes/巨嘴鳥.png", {
        x: 215.5,
        y: 186.5
      })
    ];

    this.sounds = [
      new Sound("01", "./Role/sounds/01.mp3"),
      new Sound("02", "./Role/sounds/02.mp3"),
      new Sound("03", "./Role/sounds/03.mp3"),
      new Sound("04", "./Role/sounds/04.mp3"),
      new Sound("05", "./Role/sounds/05.mp3"),
      new Sound("06", "./Role/sounds/06.mp3"),
      new Sound("07", "./Role/sounds/07.mp3"),
      new Sound("08", "./Role/sounds/08.mp3"),
      new Sound("09", "./Role/sounds/09.mp3"),
      new Sound("10", "./Role/sounds/10.mp3")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "數數看有幾隻" },
        this.whenIReceive
      ),
      new Trigger(Trigger.BROADCAST, { name: "數數看" }, this.whenIReceive2),
      new Trigger(Trigger.BROADCAST, { name: "數數看" }, this.whenIReceive3)
    ];

    this.vars.roleid = 1;
    this.vars.visible = 1;
    this.vars.countorder = 1;
    this.vars.rolescalerate = -8;
  }

  *whenIReceive() {
    this.vars.roleid = 1;
    this.stage.vars.roleoriginalscalerate = 30;
    this.size = this.stage.vars.roleoriginalscalerate;
    this.costume = this.stage.vars.costumeinuse;
    this.vars.visible = this.stage.vars.visiblelist[this.vars.roleid - 1];
    this.goto(
      this.stage.vars.posxlist[this.vars.roleid - 1],
      this.stage.vars.posylist[this.vars.roleid - 1]
    );
    if (this.vars.visible == 1) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceive2() {
    if (this.stage.vars.visiblelist[this.vars.roleid - 1] == 1) {
      this.vars.countorder = this.stage.vars.countlist[this.vars.roleid - 1];
      yield* this.wait(this.vars.countorder - 1);
      yield* this.startSound(this.vars.countorder);
      yield* this.roleZoomInAndOut(40, 8);
    }
  }

  *whenIReceive3() {
    if (this.stage.vars.visiblelist[this.vars.roleid - 1] == 1) {
      this.vars.countorder = this.stage.vars.countlist[this.vars.roleid - 1];
      yield* this.wait(this.vars.countorder - 1);
      yield* this.sayAndWait(this.vars.countorder, 0.5);
    }
  }

  *roleZoomInAndOut(maxscalerate, scalestep) {
    this.size = this.stage.vars.roleoriginalscalerate;
    this.effects.fisheye = 80;
    this.vars.rolescalerate = 0;
    while (!(this.vars.rolescalerate > maxscalerate)) {
      this.size =
        this.stage.vars.roleoriginalscalerate + this.vars.rolescalerate;
      this.vars.rolescalerate += scalestep;
      yield;
    }
    while (!(this.vars.rolescalerate < 0)) {
      this.size =
        this.stage.vars.roleoriginalscalerate + this.vars.rolescalerate;
      this.vars.rolescalerate += 0 - scalestep;
      yield;
    }
  }
}
