class Employee {
    name;
    age;
    position;
    //필드
    // private name: string;
    // public age: number;
    // public position: string;
    //생성자 함수
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
        // this.name = name;
        // this.age = age;
        // this.position = position;
    }
    work() {
        console.log("열심히 일함~!");
    }
}
const employeeA = new Employee("짱구", 22, "대리");
employeeA.work();
// employeeA.name = "피구왕통키";
employeeA.age = 26;
employeeA.position = "과장";
//상속 = extends : 부모요소로부터 값을 받을 수 있다는 전제를 설정, 상속받은 값을 구현해야할 의무 없음!
//실행 = implements: 부모로부터 받은 값은 받드시 구현해야하는 의무성이 있음!
class ExecutiveOfficer extends Employee {
    //필드값은 변함없이 그대로 상속
    //super 안써도 됨, 메서드만 추가~!
    func() {
        console.log(`${this.age}`);
        console.log(`${this.age}`);
    }
}
export {};
//TS 접근제어자
//public: 모든 범위에서 접근할 수 있는 제어자 설정
//(class 생성 시 자동 설정 값)
//private: 클래스 내부 범위에서만 접근할 수 있는 제어자 설정
//protected: 클래스 내부+ 상속받은 파생 클래스에서만 접근할 수 있는 제어자 설정
//# sourceMappingURL=ClassExample.js.map