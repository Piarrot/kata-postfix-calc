import Operand from "./operand";
import Term, { TermFactory } from "./term";

export default class PostfixExpression {
    static runFromArray(arrayExpression: string[]): number {
        const terms = PostfixExpression.parseTerms(arrayExpression);
        const exp = new PostfixExpression(terms);
        return exp.execute();
    }

    static parseTerms(arrayExpression: string[]): Term[] {
        return arrayExpression.map((stringTerm) => {
            return TermFactory.fromString(stringTerm);
        });
    }

    constructor(private terms: Term[]) {}

    execute() {
        let values: Operand[] = [];
        for (const term of this.terms) {
            values = term.processValueStack(values);
        }
        if (values.length > 1) throw "Invalid Expression";
        return values.pop().value;
    }
}
