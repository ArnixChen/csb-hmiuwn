/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Role4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Dinasor", "./Role4/costumes/Dinasor.png", {
        x: 211,
        y: 208
      }),
      new Costume("crab", "./Role4/costumes/crab.png", { x: 230, y: 157 }),
      new Costume("dog", "./Role4/costumes/dog.png", { x: 249, y: 146 }),
      new Costume("fish", "./Role4/costumes/fish.png", { x: 242, y: 197 }),
      new Costume("Lion", "./Role4/costumes/Lion.png", { x: 201.5, y: 246 }),
      new Costume("shark", "./Role4/costumes/shark.png", { x: 235, y: 166 }),
      new Costume("starfish", "./Role4/costumes/starfish.png", {
        x: 220,
        y: 226
      }),
      new Costume("zebra", "./Role4/costumes/zebra.png", { x: 198, y: 202 }),
      new Costume("巨嘴鳥", "./Role4/costumes/巨嘴鳥.png", {
        x: 215.5,
        y: 186.5
      })
    ];

    this.sounds = [
      new Sound("01", "./Role4/sounds/01.mp3"),
      new Sound("02", "./Role4/sounds/02.mp3"),
      new Sound("03", "./Role4/sounds/03.mp3"),
      new Sound("04", "./Role4/sounds/04.mp3"),
      new Sound("05", "./Role4/sounds/05.mp3"),
      new Sound("06", "./Role4/sounds/06.mp3"),
      new Sound("07", "./Role4/sounds/07.mp3"),
      new Sound("08", "./Role4/sounds/08.mp3"),
      new Sound("09", "./Role4/sounds/09.mp3"),
      new Sound("10", "./Role4/sounds/10.mp3")
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

    this.vars.roleid4 = 4;
    this.vars.visible4 = 1;
    this.vars.countorder4 = 4;
    this.vars.rolescalerate4 = -8;
  }

  *whenIReceive() {
    this.vars.roleid4 = 4;
    this.stage.vars.roleoriginalscalerate = 30;
    this.size = this.stage.vars.roleoriginalscalerate;
    this.costume = this.stage.vars.costumeinuse;
    this.vars.visible4 = this.stage.vars.visiblelist[this.vars.roleid4 - 1];
    this.goto(
      this.stage.vars.posxlist[this.vars.roleid4 - 1],
      this.stage.vars.posylist[this.vars.roleid4 - 1]
    );
    if (this.vars.visible4 == 1) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceive2() {
    if (this.stage.vars.visiblelist[this.vars.roleid4 - 1] == 1) {
      this.vars.countorder4 = this.stage.vars.countlist[this.vars.roleid4 - 1];
      yield* this.wait(this.vars.countorder4 - 1);
      yield* this.startSound(this.vars.countorder4);
      yield* this.roleZoomInAndOut(40, 8);
    }
  }

  *whenIReceive3() {
    if (this.stage.vars.visiblelist[this.vars.roleid4 - 1] == 1) {
      this.vars.countorder4 = this.stage.vars.countlist[this.vars.roleid4 - 1];
      yield* this.wait(this.vars.countorder4 - 1);
      yield* this.sayAndWait(this.vars.countorder4, 0.5);
    }
  }

  *roleZoomInAndOut(maxscalerate4, scalestep4) {
    this.size = this.stage.vars.roleoriginalscalerate;
    this.vars.rolescalerate4 = 0;
    while (!(this.vars.rolescalerate4 > maxscalerate4)) {
      this.size =
        this.stage.vars.roleoriginalscalerate + this.vars.rolescalerate4;
      this.vars.rolescalerate4 += scalestep4;
      yield;
    }
    while (!(this.vars.rolescalerate4 < 0)) {
      this.size =
        this.stage.vars.roleoriginalscalerate + this.vars.rolescalerate4;
      this.vars.rolescalerate4 += 0 - scalestep4;
      yield;
    }
  }
}
