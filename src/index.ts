import Expression from './Expressions/Expression.js';
import { LangParser } from './Parser.js';

const input = '1 + 1 - 2; 3 + 1 == 4; -3 + 2;-(-3 + 2);';
try {
    const exprs: Expression[] = new LangParser().parse(input);
    for (const expr of exprs) {
        console.log(expr.interpret());
    }
} catch (err) {
    console.error(err.message);
}
