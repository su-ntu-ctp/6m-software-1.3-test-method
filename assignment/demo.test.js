const {studentList, printStudentNames} = require("./q2-arrays-loop");
const {convert} = require("./q3-objects");

describe("Demo", ()=>{

    it("should test the printStudentNames function of q2", ()=>{
        const spyFn = jest.spyOn(console, "log");
        printStudentNames();
        expect(spyFn).toHaveBeenCalledTimes(studentList.length);
    })

    it("should test the convert function of q3", ()=>{
        const keyArr = ["NLB1", "NLB2"];
        const valueArr = ["Book A", "Book B"];

        const result = convert(keyArr, valueArr);
        expect(result["NLB1"]).toBe("Book A");
        expect(result["NLB2"]).toBe("Book B");
    })
})