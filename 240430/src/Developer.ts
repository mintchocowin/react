abstract class Developer {
  abstract coding(): void;
  drink(): void {
    console.log("drink");
  }
}

class FrontEndDeveloper extends Developer {
  coding(): void {
    console.log("develop");
  }
  design(): void {
    console.log("design");
  }
}
// const dev01 = new Developer();
const dev = new FrontEndDeveloper();
dev.coding();
