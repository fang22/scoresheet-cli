
let Score = require("./score");
let Arr = require("./array");

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
    studentScore() {
        let sc = new Arr(100,400);
        return new arr(sc);
    }
    printScoreForm(stu) {
        let str = "成绩单" + "\n" + "姓名" + "|" + "数学" + "|" + "语文" + "|" + "英语" + "|" + "编程" + "|" +
            "平均分" + "|" + "总分" + "\n" + "========================" + "\n";
        return str + stu.name + "|" + stu.scoreARR.Math + "|" + stu.scoreARR.Chinese + "|" + stu.scoreARR.English +
            "|" + stu.scoreARR.Programing + "|" + 100 + "|" + 400;
    }
}
module.exports = student;
