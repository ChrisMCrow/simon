var colors = ["green", "red", "yellow", "blue"];
export var gameSequence = [];

export function computerTurn() {
  gameSequence.push(colors[Math.floor(Math.random() * 4)]);
}
