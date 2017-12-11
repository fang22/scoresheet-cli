
let sinon = require("sinon");
let main = require("../lib/main");
let Student = require("../lib/student");
let Score = require("../lib/score");
let Arr = require("../lib/array");
let expectedStu = new Student('Tom',1,'汉',1,new Score(100,100,100,100));
let newStudentScore = [100,400];

describe('main()', () => {

    it('should display main menu once started', () => {
        sinon.spy(console, 'log');
        main();
        expect(console.log.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    });

});

describe('addStudents()', () => {

    it('should add student is successful', () => {

        expect(new Student().addStudent()).toEqual(expectedStu);
    });

});

describe('student of averageScore and totalScore', () => {

    it('According to the results of the subjects to find the average score and total score', () => {


        expect(new Arr().studentScore()).toEqual(newStudentScore);
    });

});

describe('printScoreForm()', () => {

    it('should printScoreForm is successful', () => {

        let expectedRe = "成绩单" + "\n" +
        "姓名|数学|语文|英语|编程|平均分|总分" + "\n" +
        "========================" + "\n" +
        "Tom|100|100|100|100|100|400";

        expect(new Student().printScoreForm(expectedStu)).toEqual(expectedRe);
    });

});