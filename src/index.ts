import Context from './Context/Context.js';
import RuntimeError from './Exceptions/Runtime.js';
import { LangParser } from './Parser.js';
import Statement from './Statements/Statement.js';

const input = `
    echo 1 + 1 - 2;
    echo 3 + 1 == 4;
    echo -3 + 2;
    echo -(-3 + 2);
    echo echo;
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
    echo: string;
    foo = "Nuevo foo";
    echo foo;
    `;

const globalCtx = new Context();
try {
    const { errors, ast }: { errors: SyntaxError[]; ast: Statement[] } =
        new LangParser().parse(input);
    if (errors.length !== 0) {
        for (const err of errors) {
            console.error(err.message);
        }
    } else {
        for (const stmt of ast) {
            stmt.interpret(globalCtx);
        }
    }
} catch (err) {
    if (err instanceof RuntimeError) {
        console.error(err.message);
    } else {
        console.log(err);
    }
}
