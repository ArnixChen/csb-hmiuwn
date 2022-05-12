/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Role5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Dinasor", "./Role5/costumes/Dinasor.png", {
        x: 211,
        y: 208
      }),
      new Costume("crab", "./Role5/costumes/crab.png", { x: 230, y: 157 }),
      new Costume("dog", "./Role5/costumes/dog.png", { x: 249, y: 146 }),
      new Costume("fish", "./Role5/costumes/fish.png", { x: 242, y: 197 }),
      new Costume("Lion", "./Role5/costumes/Lion.png", { x: 201.5, y: 246 }),
      new Costume("shark", "./Role5/costumes/shark.png", { x: 235, y: 166 }),
      new Costume("starfish", "./Role5/costumes/starfish.png", {
        x: 220,
        y: 226
      }),
      new Costume("zebra", "./Role5/costumes/zebra.png", { x: 198, y: 202 }),
      new Costume("巨嘴鳥", "./Role5/costumes/巨嘴鳥.png", {
        x: 215.5,
        y: 186.5
      })
    ];

    this.sounds = [
      new Sound("01", "./Role5/sounds/01.mp3"),
      new Sound("02", "./Role5/sounds/02.mp3"),
      new Sound("03", "./Role5/sounds/03.mp3"),
      new Sound("04", "./Role5/sounds/04.mp3"),
      new Sound("05", "./Role5/sounds/05.mp3"),
      new Sound("06", "./Role5/sounds/06.mp3"),
      new Sound("07", "./Role5/sounds/07.mp3"),
      new Sound("08", "./Role5/sounds/08.mp3"),
      new Sound("09", "./Role5/sounds/09.mp3"),
      new Sound("10", "./Role5/sounds/10.mp3")
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

    this.vars.roleid5 = 5;
    this.vars.visible5 = 1;
    this.vars.countorder5 = 5;
    this.vars.rolescalerate5 = -8;
  }

  *whenIReceive() {
    this.vars.roleid5 = 5;
    this.stage.vars.roleoriginalscalerate = 30;
    this.size = this.stage.vars.roleoriginalscalerate;
    this.costume = this.stage.vars.costumeinuse;
    this.vars.visible5 = this.stage.vars.visiblelist[this.vars.roleid5 - 1];
    this.goto(
      this.stage.vars.posxlist[this.vars.roleid5 - 1],
      this.stage.vars.posylist[this.vars.roleid5 - 1]
    );
    if (this.vars.visible5 == 1) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceive2() {
    if (this.stage.vars.visiblelist[this.vars.roleid5 - 1] == 1) {
      this.vars.countorder5 = this.stage.vars.countlist[this.vars.roleid5 - 1];
      yield* this.wait(this.vars.countorder5 - 1);
      yield* this.startSound(this.vars.countorder5);
      yield* this.roleZoomInAndOut(40, 8);
    }
  }

  *whenIReceive3() {
    if (this.stage.vars.visiblelist[this.vars.roleid5 - 1] == 1) {
      this.vars.countorder5 = this.stage.vars.countlist[this.vars.roleid5 - 1];
      yield* this.wait(this.vars.countorder5 - 1);
      yield* this.sayAndWait(this.vars.countorder5, 0.5);
    }
  }

  *roleZoomInAndOut(maxscalerate5, scalestep5) {
    this.size = this.stage.vars.roleoriginalscalerate;
    this.vars.rolescalerate5 = 0;
    while (!(this.vars.rolescalerate5 > maxscalerate5)) {
      this.size =
        this.stage.vars.roleoriginalscalerate + this.vars.rolescalerate5;
      this.vars.rolescalerate5 += scalestep5;
      yield;
    }
    while (!(this.vars.rolescalerate5 < 0)) {
      this.size =
        this.stage.vars.roleoriginalscalerate + this.vars.rolescalerate5;
      this.vars.rolescalerate5 += 0 - scalestep5;
      yield;
    }
  }
}
