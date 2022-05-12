/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Nextcase extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("下一題", "./Nextcase/costumes/下一題.svg", {
        x: 37.37886428833008,
        y: 25.93578974548342
      })
    ];

    this.sounds = [];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    this.broadcast("下一題");
  }
}
