import TareasLexer from "./generated/TareasLexer.js";
import TareasParser from "./generated/TareasParser.js";
import CustomTareasVisitor from "./CustomTareasVisitor.js";
import { CharStreams, CommonTokenStream } from "antlr4";
import fs from 'fs';

async function main() {
    const fileName = 'input.txt';
    let input;

    try {
        input = fs.readFileSync(fileName, 'utf8');
        console.log(`--- CÓDIGO FUENTE (${fileName}) ---\n${input}\n`);
    } catch (err) {
        console.error("Error: No se encontró input.txt");
        return;
    }

    const inputStream = CharStreams.fromString(input);
    const lexer = new TareasLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);

    // REQUERIMIENTO: TABLA DE LEXEMAS-TOKENS
    console.log("TABLA DE LEXEMAS-TOKENS");
    console.log("-------------------------------------------");
    tokenStream.fill();
    tokenStream.tokens.forEach(t => {
        const symName = TareasLexer.symbolicNames[t.type] || "EOF";
        if (symName !== 'WS' && t.type !== -1) {
            console.log(`${t.text.padEnd(15)} | ${symName}`);
        }
    });
    console.log("-------------------------------------------\n");

    const parser = new TareasParser(tokenStream);
    const tree = parser.comando();

    // REQUERIMIENTO: INFORMAR ERRORES (Línea y Causa)
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nERROR: La entrada contiene errores sintácticos.");
    } else {
        console.log("Sintaxis válida.");
        
        // REQUERIMIENTO: ÁRBOL SINTÁCTICO (Formato texto)
        console.log("\nÁRBOL DE ANÁLISIS SINTÁCTICO:");
        console.log(tree.toStringTree(parser.ruleNames));

        // REQUERIMIENTO: INTERPRETACIÓN
        console.log("\n--- EJECUCIÓN DEL INTÉRPRETE ---");
        const visitor = new CustomTareasVisitor();
        visitor.visit(tree);
    }
}

main();