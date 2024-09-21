import { TokenLocation } from '@ts-jison/common';
import Expression from './Expression.js';
import getNegation from './operations/Negation.js';

export default class UnaryExpr implements Expression {
    private operator: string;
    private expr: Expression;
    location: TokenLocation;

    constructor(operator: string, expr: Expression, location: TokenLocation) {
        this.operator = operator;
        this.expr = expr;
        this.location = location;
    }

    interpret() {
        const expr = this.expr.interpret();
        switch (this.operator) {
            case '-':
                return getNegation(expr, this.location);
        }
    }
}
