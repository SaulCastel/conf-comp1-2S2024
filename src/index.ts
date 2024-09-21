import Context from './Context/Context.js';
import Expression from './Expressions/Expression.js';
import { LangParser } from './Parser.js';

const input = `
    echo 1 + 1 - 2;
    echo 3 + 1 == 4;
    echo -3 + 2;
    echo -(-3 + 2);
    let hello: string = "Hello";
    let world: string = "World";
    echo hello + ", " + world + "!";
    let foo: string = "Foo afuera de bloque";
    let bar: string = "Bar afuera de bloque";
    {
        let foo:string = "Foo dentro del bloque";
        echo foo;
        echo bar;
    };
    echo foo;
    foo = "Nuevo foo";
    echo foo;
    `;

const globalCtx = new Context();
try {
    const exprs: Expression[] = new LangParser().parse(input);
    for (const expr of exprs) {
        expr.interpret(globalCtx);
    }
} catch (err) {
    console.error(err.message);
}
