
// eslint-disable-next-line import/prefer-default-export
export const character = {
  attack: 14,
  health: 15,
  defence: 10,
  modeUp: undefined,
  arr: [],

  set powerMode(value) {
    this.modeUp = value;
    if (value === true) {
      this.arr.push(1);
    } else if (value !== true && value !== false) {
      throw new Error('Введены некорректные данные');
    }

    if (this.arr.length > 3) {
      this.modeUp = false;
    }
  },

  get powerMode() {
    if (this.modeUp === true) {
      this.attack *= 2;
      this.health *= 2;
      this.defence *= 2;
    }
    return `${this.attack} , ${this.health} , ${this.defence}`;
  },
};
