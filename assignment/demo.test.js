const { hasUncaughtExceptionCaptureCallback } = require("process");
const {convert} = require("./q3-objects");

describe("Demo", ()=>{
    it("should test the convert function", ()=>{
        const keyArr = ["NLB1", "NLB2"];
        const valueArr = ["Book A", "Book B"];

        const result = convert(keyArr, valueArr);
        expect(result["NLB1"]).toBe("Book A");
        expect(result["NLB2"]).toBe("Book B");
    })
})