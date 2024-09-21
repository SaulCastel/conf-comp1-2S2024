%{
    import LexicalError from './Exceptions/Lexical.js';
%}

%lex
%x string

%%

\s+               /* skip whitespace */
[0-9]+            return 'INT'
["]               this.pushState('string');
<string>[^"\n]*   return 'STRING'
<string>["]       this.popState();
";"               return ';'
"-"               return '-'
"+"               return '+'
"=="              return '=='
"="               return '='
"("               return '('
")"               return ')'
"null"            return 'NULL'
<<EOF>>           return 'EOF'
. {
  throw new LexicalError(yytext, yylineno + 1, yylloc.first_column + 1);
}

/lex

/* operator associations and precedence */
%{
  import BinaryExpr from './Expressions/Binary.js'
  import LiteralExpr from './Expressions/Literal.js'
  import UnaryExpr from './Expressions/Unary.js'
%}


%left '=='
%left '+' '-'
%right UMINUS

%start start

%% /* language grammar */

start
  : expressions EOF
  { return $1; }
;

expressions
  : expressions expression ';'
  {
    $1.push($2)
    $$ = $1
  }
  | expression ';'
  {$$ = [$1]}
;

expression
  : arithmetic
  { $$ = $1 }
  | relational
  { $$ = $1 }
  | '(' expression ')'
  { $$ = $2}
  | '-' expression %prec UMINUS
  { $$ = new UnaryExpr($1, $2, @1) }
  | literal
  { $$ = $1 }
;

arithmetic
  : expression '+' expression
  {$$ = new BinaryExpr($1, $2, $3, @2) }
  | expression '-' expression
  {$$ = new BinaryExpr($1, $2, $3, @2) }
;

relational
  : expression '==' expression
  { $$ = new BinaryExpr($1, $2, $3, @1) }
;

literal
  : INT
  { $$ = new LiteralExpr($1, 'INT',@1) }
  | STRING
  { $$ = new LiteralExpr($1, 'STRING',@1) }
  | NULL
  { $$ = new LiteralExpr($1, 'NULL',@1) }
;
