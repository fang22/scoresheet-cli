
let Score = require("./score");

class student {
    constructor(name,id,nation,klass,scoreARR) {
        this.name = name;
        this.id = id;
        this.nation = nation;
        this.klass = klass;
        this.scoreARR = scoreARR;
    }
    addStudent() {

        let sa = new Score(100,100,100,100);
        return new student('Tom',1,'汉',1,sa);
    }
    printScoreForm(stu) {
        //let str = "成绩单" + "\n" + "姓名" + "|" +
        console.log('hello world!');
    }
};
module.exports = student;
