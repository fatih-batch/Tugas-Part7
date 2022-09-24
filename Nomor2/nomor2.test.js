const BanyakMuncul = require("./nomor2");

test("Test 1", () => {
    expect(BanyakMuncul(["js", "js", "golang", "ruby", "ruby", "js", "js"])).toEqual("golang -> 1 ruby -> 2 js -> 4");
});
test("Test 2", () => {
    expect(BanyakMuncul(["A", "B", "B", "C", "A", "A", "B", "A", "D", "D"])).toEqual("C -> 1 D -> 2 B -> 3 A -> 4");
});
test("Test 3", () => {
    expect(BanyakMuncul(["jakarta", "semarang", "surabaya"])).toEqual("jakarta -> 1 semarang -> 1 surabaya -> 1");
});