import PostfixExpression from "./expression";

describe("Expression Operations", () => {
    test("Given wrong operation, should throw", () => {
        expect(
            PostfixExpression.runFromArray.bind(PostfixExpression, ["1", "+"])
        ).toThrow();
        expect(
            PostfixExpression.runFromArray.bind(PostfixExpression, [
                "1",
                "1",
                "1",
            ])
        ).toThrow();
        expect(
            PostfixExpression.runFromArray.bind(PostfixExpression, ["+"])
        ).toThrow();
    });

    test("Given simple operations, should work", () => {
        const sum: number = PostfixExpression.runFromArray(["1", "2", "+"]);
        expect(sum).toBe(3);

        const sub: number = PostfixExpression.runFromArray(["1", "1", "-"]);
        expect(sub).toBe(0);

        const mult: number = PostfixExpression.runFromArray(["1", "2", "*"]);
        expect(mult).toBe(2);

        const div: number = PostfixExpression.runFromArray(["1", "2", "/"]);
        expect(div).toBe(0.5);
    });

    test("Given more than one operation, should work", () => {
        const sum: number = PostfixExpression.runFromArray([
            "4",
            "2",
            "+",
            "3",
            "-",
        ]);
        expect(sum).toBe(3);

        const complexOp: number = PostfixExpression.runFromArray([
            "3",
            "5",
            "8",
            "*",
            "7",
            "+",
            "*",
        ]);

        expect(complexOp).toBe(141);
    });
});
