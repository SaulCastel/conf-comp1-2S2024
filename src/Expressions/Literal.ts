import { Type } from './Types.js';
import Expression from './Expression.js';
import { TokenLocation } from '@ts-jison/common';

export default class LiteralExpr implements Expression {
    private literal: any;
    private t: Type;
    location: TokenLocation;

    constructor(literal: any, t: Type, location: TokenLocation) {
        this.literal = literal;
        this.t = t;
        this.location = location;
    }

    interpret() {
        switch (this.t) {
            case 'INT':
                return Number(this.literal);
            case 'STRING':
                return this.literal;
            case 'NULL':
                return null;
        }
    }
}