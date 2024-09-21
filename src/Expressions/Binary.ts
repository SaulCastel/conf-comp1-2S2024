import { TokenLocation } from '@ts-jison/common';
import Expression from './Expression.js';
import getDifference from './operations/Substraction.js';
import getSum from './operations/Sum.js';
import getComparison from './operations/Relational.js';

export default class BinaryExpr implements Expression {
    private left: Expression;
    private right: Expression;
    private operator: string;
    location: TokenLocation;

    constructor(
        left: Expression,
        operator: string,
        right: Expression,
        location: TokenLocation
    ) {
        this.left = left;
        this.right = right;
        this.operator = operator;
        this.location = location;
    }

    interpret() {
        const left = this.left.interpret();
        const right = this.right.interpret();

        switch (this.operator) {
            case '+':
                return getSum(left, right, this.location);
            case '-':
                return getDifference(left, right, this.location);
            case '==':
                return getComparison(left, this.operator, right, this.location);
        }
    }
}
