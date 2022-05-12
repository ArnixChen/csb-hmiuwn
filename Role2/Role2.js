/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Role2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Dinasor", "./Role2/costumes/Dinasor.png", {
        x: 211,
        y: 208
      }),
      new Costume("crab", "./Role2/costumes/crab.png", { x: 230, y: 157 }),
      new Costume("dog", "./Role2/costumes/dog.png", { x: 249, y: 146 }),
      new Costume("fish", "./Role2/costumes/fish.png", { x: 242, y: 197 }),
      new Costume("Lion", "./Role2/costumes/Lion.png", { x: 201.5, y: 246 }),
      new Costume("shark", "./Role2/costumes/shark.png", { x: 235, y: 166 }),
      new Costume("starfish", "./Role2/costumes/starfish.png", {
        x: 220,
        y: 226
      }),
      new Costume("zebra", "./Role2/costumes/zebra.png", { x: 198, y: 202 }),
      new Costume("巨嘴鳥", "./Role2/costumes/巨嘴鳥.png", {
        x: 215.5,
        y: 186.5
      })
    ];

    this.sounds = [
      new Sound("01", "./Role2/sounds/01.mp3"),
      new Sound("02", "./Role2/sounds/02.mp3"),
      new Sound("03", "./Role2/sounds/03.mp3"),
      new Sound("04", "./Role2/sounds/04.mp3"),
      new Sound("05", "./Role2/sounds/05.mp3"),
      new Sound("06", "./Role2/sounds/06.mp3"),
      new Sound("07", "./Role2/sounds/07.mp3"),
      new Sound("08", "./Role2/sounds/08.mp3"),
      new Sound("09", "./Role2/sounds/09.mp3"),
      new Sound("10", "./Role2/sounds/10.mp3")
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

    this.vars.roleid2 = 2;
    this.vars.visible2 = 1;
    this.vars.countorder2 = 2;
    this.vars.rolescalerate2 = -8;
  }

  *whenIReceive() {
    this.vars.roleid2 = 2;
    this.stage.vars.roleoriginalscalerate = 30;
    this.size = this.stage.vars.roleoriginalscalerate;
    this.costume = this.stage.vars.costumeinuse;
    this.vars.visible2 = this.stage.vars.visiblelist[this.vars.roleid2 - 1];
    this.goto(
      this.stage.vars.posxlist[this.vars.roleid2 - 1],
      this.stage.vars.posylist[this.vars.roleid2 - 1]
    );
    if (this.vars.visible2 == 1) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceive2() {
    if (this.stage.vars.visiblelist[this.vars.roleid2 - 1] == 1) {
      this.vars.countorder2 = this.stage.vars.countlist[this.vars.roleid2 - 1];
      yield* this.wait(this.vars.countorder2 - 1);
      yield* this.startSound(this.vars.countorder2);
      yield* this.roleZoomInAndOut(40, 8);
    }
  }

  *whenIReceive3() {
    if (this.stage.vars.visiblelist[this.vars.roleid2 - 1] == 1) {
      this.vars.countorder2 = this.stage.vars.countlist[this.vars.roleid2 - 1];
      yield* this.wait(this.vars.countorder2 - 1);
      yield* this.sayAndWait(this.vars.countorder2, 0.5);
    }
  }

  *roleZoomInAndOut(maxscalerate2, scalestep2) {
    this.size = this.stage.vars.roleoriginalscalerate;
    this.vars.rolescalerate2 = 0;
    while (!(this.vars.rolescalerate2 > maxscalerate2)) {
      this.size =
        this.stage.vars.roleoriginalscalerate + this.vars.rolescalerate2;
      this.vars.rolescalerate2 += scalestep2;
      yield;
    }
    while (!(this.vars.rolescalerate2 < 0)) {
      this.size =
        this.stage.vars.roleoriginalscalerate + this.vars.rolescalerate2;
      this.vars.rolescalerate2 += 0 - scalestep2;
      yield;
    }
  }
}
