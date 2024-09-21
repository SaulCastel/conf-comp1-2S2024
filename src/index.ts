import Expression from './Expressions/Expression.js';
import { TsCalcParser } from './ts-calculator.js';

const input = '1 + a; 2 - 3 - 1 + 5;';
try {
    const exprs: Expression[] = new TsCalcParser().parse(input);
    for (const expr of exprs) {
        console.log(expr.interpret());
    }
} catch (err) {
    console.error(err.message);
}
