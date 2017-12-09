// import {student} from "../lib/student";

let sinon = require("sinon");
let main = require("../lib/main");
let Student = require("../lib/student");
let Score = require("../lib/score");
let expectedStu = new Student('Tom',1,'汉',1,new Score(100,100,100,100));

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

describe('printScoreForm()', () => {

    it('should printScoreForm is successful', () => {
        sinon.spy(console, 'log');
//         let expectedResult = `成绩单
// 姓名|数学|语文|英语|编程|平均分|总分
// ========================
// 张三|75|95|80|80|82.5|330
// 李四|85|80|70|90|81.25|325
// ========================
// 全班总分平均数：xxx
// 全班总分中位数：xxx`;
        let expectedRe = `成绩单
        姓名|数学|语文|英语|编程|平均分|总分
        ========================
        Tom|100|100|100|100|100|400`;
        new Student().printScoreForm(expectedStu);
        expect(console.log.args.join()).toHaveBeenCalledWith(expectedRe);
    });

});