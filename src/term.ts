import Operand from "./operand";
import Operator from "./operator";

export default interface Term {
    processValueStack(values: Operand[]): Operand[];
}

export class TermFactory {
    static fromString(stringTerm: string) {
        if (Operator.isOperatorSymbol(stringTerm)) {
            return new Operator(stringTerm);
        }
        return Operand.fromString(stringTerm);
    }
}
