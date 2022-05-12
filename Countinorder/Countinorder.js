/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Countinorder extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("數數看", "./Countinorder/costumes/數數看.svg", {
        x: 37.37886428833008,
        y: 14.911504745483398
      })
    ];

    this.sounds = [];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    this.broadcast("數數看");
  }
}
