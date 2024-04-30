class Developer {
    drink() {
        console.log("drink");
    }
}
class FrontEndDeveloper extends Developer {
    coding() {
        console.log("develop");
    }
    design() {
        console.log("design");
    }
}
// const dev01 = new Developer();
const dev = new FrontEndDeveloper();
dev.coding();
export {};
//# sourceMappingURL=Developer.js.map