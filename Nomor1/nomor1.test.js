const domino = require("./nomor1");

test("Test 1", () => {
    expect(domino([[6, 5], [3, 4], [2, 1], [3, 3]], [4, 3])).toEqual([3, 4]);
});
test("Test 2", () => {
    expect(domino([[6, 5], [3, 3], [3, 4], [2, 1], [3, 6]],[3, 6])).toEqual([6, 5]);
});
test("Test 3", () => {
    expect(domino([[6, 6], [2, 4], [3, 6]], [5, 1])).toEqual([]);
});