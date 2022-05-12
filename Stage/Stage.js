/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("數數看有幾隻", "./Stage/costumes/數數看有幾隻.png", {
        x: 480,
        y: 360
      }),
      new Costume("恭喜你答對了", "./Stage/costumes/恭喜你答對了.svg", {
        x: 240,
        y: 180.5
      }),
      new Costume("哎喲不對不對", "./Stage/costumes/哎喲不對不對.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [
      new Sound("pop", "./Stage/sounds/pop.wav"),
      new Sound("數數看有幾隻", "./Stage/sounds/數數看有幾隻.wav"),
      new Sound("不對不對", "./Stage/sounds/不對不對.wav"),
      new Sound("恭喜答對", "./Stage/sounds/恭喜答對.wav"),
      new Sound("1", "./Stage/sounds/1.mp3"),
      new Sound("2", "./Stage/sounds/2.mp3"),
      new Sound("3", "./Stage/sounds/3.mp3"),
      new Sound("4", "./Stage/sounds/4.mp3"),
      new Sound("5", "./Stage/sounds/5.mp3"),
      new Sound("6", "./Stage/sounds/6.mp3"),
      new Sound("7", "./Stage/sounds/7.mp3"),
      new Sound("8", "./Stage/sounds/8.mp3"),
      new Sound("9", "./Stage/sounds/9.mp3"),
      new Sound("10", "./Stage/sounds/10.mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "c" }, this.whenKeyCPressed),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.BROADCAST, { name: "下一題" }, this.whenIReceive),
      new Trigger(Trigger.KEY_PRESSED, { key: "1" }, this.whenKey1Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "2" }, this.whenKey2Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "3" }, this.whenKey3Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "4" }, this.whenKey4Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "5" }, this.whenKey5Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "6" }, this.whenKey6Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "7" }, this.whenKey7Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "8" }, this.whenKey8Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "9" }, this.whenKey9Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "0" }, this.whenKey0Pressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.roleoriginalscalerate = 30;
    this.vars.roleindex = 10;
    this.vars.visiblecount = 6;
    this.vars.costumeinuse = 5;
    this.vars.soundofkey = 10;
    this.vars.rightanswercount = 1;
    this.vars.posxlist = [-180, -90, 0, 90, 180, -180, -90, 0, 90, 180];
    this.vars.posylist = [35, 35, 35, 35, 35, -35, -35, -35, -35, -35];
    this.vars.visiblelist = [1, 1, 1, 1, 1, 0, 0, 1, 0, 0];
    this.vars.countlist = [1, 2, 3, 4, 5, 0, 0, 6, 0, 0];
  }

  *whenKeyCPressed() {
    this.broadcast("數數看");
  }

  *whenKeySpacePressed() {
    this.broadcast("下一題");
  }

  *whenIReceive() {
    this.costume = "數數看有幾隻";
    yield* this.startSound("數數看有幾隻");
    this.vars.costumeinuse = this.random(1, 10);
    this.vars.visiblecount = 0;
    this.vars.roleindex = 1;
    while (!(this.vars.roleindex == 10)) {
      this.vars.visiblelist.splice(
        this.vars.roleindex - 1,
        1,
        this.random(0, 1)
      );
      if (this.vars.visiblelist[this.vars.roleindex - 1] == 1) {
        this.vars.visiblecount += 1;
        this.vars.countlist.splice(
          this.vars.roleindex - 1,
          1,
          this.vars.visiblecount
        );
      } else {
        this.vars.countlist.splice(this.vars.roleindex - 1, 1, 0);
      }
      this.vars.roleindex += 1;
      yield;
    }
    this.broadcast("數數看有幾隻");
  }

  *whenKey1Pressed() {
    yield* this.checkAnswer(1);
  }

  *checkAnswer(key) {
    this.vars.soundofkey = key.toString();
    yield* this.playSoundUntilDone(this.vars.soundofkey);
    if (this.vars.visiblecount == key) {
      this.vars.rightanswercount += 1;
      this.costume = "恭喜你答對了";
      yield* this.playSoundUntilDone("恭喜答對");
      this.broadcast("下一題");
    } else {
      this.costume = "哎喲不對不對";
      yield* this.playSoundUntilDone("不對不對");
    }
    this.costume = "數數看有幾隻";
  }

  *whenKey2Pressed() {
    yield* this.checkAnswer(2);
  }

  *whenKey3Pressed() {
    yield* this.checkAnswer(3);
  }

  *whenKey4Pressed() {
    yield* this.checkAnswer(4);
  }

  *whenKey5Pressed() {
    yield* this.checkAnswer(5);
  }

  *whenKey6Pressed() {
    yield* this.checkAnswer(6);
  }

  *whenKey7Pressed() {
    yield* this.checkAnswer(7);
  }

  *whenKey8Pressed() {
    yield* this.checkAnswer(8);
  }

  *whenKey9Pressed() {
    yield* this.checkAnswer(9);
  }

  *whenKey0Pressed() {
    yield* this.checkAnswer(10);
  }

  *whenGreenFlagClicked() {
    this.vars.rightanswercount = 0;
    this.broadcast("下一題");
  }

  *convertToString(value) {}
}
