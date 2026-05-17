
grammar Tareas;

// --- REGLAS SINTÁCTICAS ---
comando     : nombre opcion* # Start ;
opcion      : DASH id (EQUALS valor)?              # Opt ;
valor       : NUMBER                               # ValNum
            | STRING                               # ValStr
            ;
nombre      : ID ;
id          : ID ;

// --- REGLAS LÉXICAS (Agregá estos nombres) ---
DASH    : '-' ;
EQUALS  : '=' ;

ID      : [a-zA-Z]+ ;
NUMBER  : [0-9]+ ;
STRING  : '"' ~'"'* '"' ;
WS      : [\t\r\n]+ -> skip ;