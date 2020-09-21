import Term from "./term";

export default class Operand implements Term {
    constructor(private _value: number) {}

    processValueStack(values: Operand[]): Operand[] {
        values.push(this);
        return values;
    }

    static fromString(stringTerm: string) {
        const op = Number.parseFloat(stringTerm);
        if (op == NaN) {
            throw `Invalid Operand '${stringTerm}'`;
        }
        return new Operand(op);
    }

    get value(): number {
        return this._value;
    }
}
