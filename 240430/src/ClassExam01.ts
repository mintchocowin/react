interface CharaterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharaterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
const test = () => console.log("스피드");

const characterA = new Character("짱구!", 50, "test");

console.log(characterA);

characterA.move();
