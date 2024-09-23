# Implementación del patrón interprete con Jison

[Link a las notas de la conferencia](https://lyrical-bracket-06d.notion.site/Uso-del-patr-n-interprete-con-Jison-10799cd29d2e80688ca2d45af31a998c?pvs=4)

Este repositorio contiene la implementación del patrón interprete para ejecutar las instrucciones de un lenguaje de programación ficticio.

## Estructura del proyecto:
```bash
./
├── grammar #Archivos de gramatica .jison
└── src
    ├── Context #Modulos de implementación contextos (tabla de simbolos)
    ├── Exceptions #Clases para los errores sintácticos, léxicos y de ejecución
    ├── Expressions #Clases para expresiones
    │   └── operations #Funciones para verifación de tipos entre operaciones
    └── Statements #Clases para declaraciones
```

Para ejecutar el ejemplo, ejecutar en orden:
```bash
npm install
npm run parser
npm run build
npm start
```

Contiene:
- Manejo de errores
- Manejo de contextos
- Validación semantica de tipos
- Expresiones
    - Aritméticas
    - Relacionales
    - Unarias
- Declaraciones (Statements)
    - Bloques
    - Declaración y asignación de variables
    - Print a consola

Hecho con mucho <3
