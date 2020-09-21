import Operand from "./operand";
import Operator from "./operator";

export default class TermFactory {
    static fromString(stringTerm: string) {
        if (Operator.isOperatorSymbol(stringTerm)) {
            return new Operator(stringTerm);
        }
        return Operand.fromString(stringTerm);
    }
}
