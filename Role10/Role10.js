/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Role10 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Dinasor", "./Role10/costumes/Dinasor.png", {
        x: 211,
        y: 208
      }),
      new Costume("crab", "./Role10/costumes/crab.png", { x: 230, y: 157 }),
      new Costume("dog", "./Role10/costumes/dog.png", { x: 249, y: 146 }),
      new Costume("fish", "./Role10/costumes/fish.png", { x: 242, y: 197 }),
      new Costume("Lion", "./Role10/costumes/Lion.png", { x: 201.5, y: 246 }),
      new Costume("shark", "./Role10/costumes/shark.png", { x: 235, y: 166 }),
      new Costume("starfish", "./Role10/costumes/starfish.png", {
        x: 220,
        y: 226
      }),
      new Costume("zebra", "./Role10/costumes/zebra.png", { x: 198, y: 202 }),
      new Costume("巨嘴鳥", "./Role10/costumes/巨嘴鳥.png", {
        x: 215.5,
        y: 186.5
      })
    ];

    this.sounds = [
      new Sound("01", "./Role10/sounds/01.mp3"),
      new Sound("02", "./Role10/sounds/02.mp3"),
      new Sound("03", "./Role10/sounds/03.mp3"),
      new Sound("04", "./Role10/sounds/04.mp3"),
      new Sound("05", "./Role10/sounds/05.mp3"),
      new Sound("06", "./Role10/sounds/06.mp3"),
      new Sound("07", "./Role10/sounds/07.mp3"),
      new Sound("08", "./Role10/sounds/08.mp3"),
      new Sound("09", "./Role10/sounds/09.mp3"),
      new Sound("10", "./Role10/sounds/10.mp3")
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

    this.vars.roleid10 = 10;
    this.vars.visible10 = 0;
    this.vars.countorder10 = 1;
    this.vars.rolescalerate10 = -5;
  }

  *whenIReceive() {
    this.vars.roleid10 = 10;
    this.stage.vars.roleoriginalscalerate = 30;
    this.size = this.stage.vars.roleoriginalscalerate;
    this.costume = this.stage.vars.costumeinuse;
    this.vars.visible10 = this.stage.vars.visiblelist[this.vars.roleid10 - 1];
    this.goto(
      this.stage.vars.posxlist[this.vars.roleid10 - 1],
      this.stage.vars.posylist[this.vars.roleid10 - 1]
    );
    if (this.vars.visible10 == 1) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceive2() {
    if (this.stage.vars.visiblelist[this.vars.roleid10 - 1] == 1) {
      this.vars.countorder10 = this.stage.vars.countlist[
        this.vars.roleid10 - 1
      ];
      yield* this.wait(this.vars.countorder10 - 1);
      yield* this.startSound(this.vars.countorder10);
      yield* this.roleZoomInAndOut(40, 8);
    }
  }

  *whenIReceive3() {
    if (this.stage.vars.visiblelist[this.vars.roleid10 - 1] == 1) {
      this.vars.countorder10 = this.stage.vars.countlist[
        this.vars.roleid10 - 1
      ];
      yield* this.wait(this.vars.countorder10 - 1);
      yield* this.sayAndWait(this.vars.countorder10, 0.5);
    }
  }

  *roleZoomInAndOut(maxscalerate10, scalestep10) {
    this.size = this.stage.vars.roleoriginalscalerate;
    this.vars.rolescalerate10 = 0;
    while (!(this.vars.rolescalerate10 > maxscalerate10)) {
      this.size =
        this.stage.vars.roleoriginalscalerate + this.vars.rolescalerate10;
      this.vars.rolescalerate10 += scalestep10;
      yield;
    }
    while (!(this.vars.rolescalerate10 < 0)) {
      this.size =
        this.stage.vars.roleoriginalscalerate + this.vars.rolescalerate10;
      this.vars.rolescalerate10 += 0 - scalestep10;
      yield;
    }
  }
}
