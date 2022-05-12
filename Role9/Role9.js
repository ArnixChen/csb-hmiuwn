/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Role9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Dinasor", "./Role9/costumes/Dinasor.png", {
        x: 211,
        y: 208
      }),
      new Costume("crab", "./Role9/costumes/crab.png", { x: 230, y: 157 }),
      new Costume("dog", "./Role9/costumes/dog.png", { x: 249, y: 146 }),
      new Costume("fish", "./Role9/costumes/fish.png", { x: 242, y: 197 }),
      new Costume("Lion", "./Role9/costumes/Lion.png", { x: 201.5, y: 246 }),
      new Costume("shark", "./Role9/costumes/shark.png", { x: 235, y: 166 }),
      new Costume("starfish", "./Role9/costumes/starfish.png", {
        x: 220,
        y: 226
      }),
      new Costume("zebra", "./Role9/costumes/zebra.png", { x: 198, y: 202 }),
      new Costume("巨嘴鳥", "./Role9/costumes/巨嘴鳥.png", {
        x: 215.5,
        y: 186.5
      })
    ];

    this.sounds = [
      new Sound("01", "./Role9/sounds/01.mp3"),
      new Sound("02", "./Role9/sounds/02.mp3"),
      new Sound("03", "./Role9/sounds/03.mp3"),
      new Sound("04", "./Role9/sounds/04.mp3"),
      new Sound("05", "./Role9/sounds/05.mp3"),
      new Sound("06", "./Role9/sounds/06.mp3"),
      new Sound("07", "./Role9/sounds/07.mp3"),
      new Sound("08", "./Role9/sounds/08.mp3"),
      new Sound("09", "./Role9/sounds/09.mp3"),
      new Sound("10", "./Role9/sounds/10.mp3")
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

    this.vars.roleid9 = 9;
    this.vars.visible9 = 0;
    this.vars.countorder9 = 1;
    this.vars.rolescalerate9 = -5;
  }

  *whenIReceive() {
    this.vars.roleid9 = 9;
    this.stage.vars.roleoriginalscalerate = 30;
    this.size = this.stage.vars.roleoriginalscalerate;
    this.costume = this.stage.vars.costumeinuse;
    this.vars.visible9 = this.stage.vars.visiblelist[this.vars.roleid9 - 1];
    this.goto(
      this.stage.vars.posxlist[this.vars.roleid9 - 1],
      this.stage.vars.posylist[this.vars.roleid9 - 1]
    );
    if (this.vars.visible9 == 1) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceive2() {
    if (this.stage.vars.visiblelist[this.vars.roleid9 - 1] == 1) {
      this.vars.countorder9 = this.stage.vars.countlist[this.vars.roleid9 - 1];
      yield* this.wait(this.vars.countorder9 - 1);
      yield* this.startSound(this.vars.countorder9);
      yield* this.roleZoomInAndOut(40, 8);
    }
  }

  *whenIReceive3() {
    if (this.stage.vars.visiblelist[this.vars.roleid9 - 1] == 1) {
      this.vars.countorder9 = this.stage.vars.countlist[this.vars.roleid9 - 1];
      yield* this.wait(this.vars.countorder9 - 1);
      yield* this.sayAndWait(this.vars.countorder9, 0.5);
    }
  }

  *roleZoomInAndOut(maxscalerate9, scalestep9) {
    this.size = this.stage.vars.roleoriginalscalerate;
    this.vars.rolescalerate9 = 0;
    while (!(this.vars.rolescalerate9 > maxscalerate9)) {
      this.size =
        this.stage.vars.roleoriginalscalerate + this.vars.rolescalerate9;
      this.vars.rolescalerate9 += scalestep9;
      yield;
    }
    while (!(this.vars.rolescalerate9 < 0)) {
      this.size =
        this.stage.vars.roleoriginalscalerate + this.vars.rolescalerate9;
      this.vars.rolescalerate9 += 0 - scalestep9;
      yield;
    }
  }
}
