import Operand from "./operand";
import Term from "./term";

const operators: string[] = ["+", "-", "*", "/"];

export default class Operator implements Term {
    processValueStack(values: Operand[]): Operand[] {
        const opB = values.pop();
        const opA = values.pop();
        const result = this.execute(opA, opB);
        values.push(result);
        return values;
    }
    static isOperatorSymbol(symbol: string) {
        return operators.includes(symbol);
    }

    constructor(private operation: string) {}

    execute(opA: Operand, opB: Operand) {
        if (!opA || !opB) {
            throw "Invalid operands";
        }
        switch (this.operation) {
            case "+":
                return new Operand(opA.value + opB.value);
            case "-":
                return new Operand(opA.value - opB.value);
            case "*":
                return new Operand(opA.value * opB.value);
            case "/":
                return new Operand(opA.value / opB.value);
            default:
                throw `Operation '${this.operation}' not implemented`;
        }
    }
}
