import TareasVisitor from './generated/TareasVisitor.js';

export default class CustomTareasVisitor extends TareasVisitor {
    constructor() {
        super();
        this.memory = new Map();
    }

    visitAssign(ctx) {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expresion());
        this.memory.set(id, value);
        return value;
    }

    visitPrint(ctx) {
        const value = this.visit(ctx.expresion());
        console.log(`> SALIDA: ${value}`);
        return value;
    }

    visitIf(ctx) {
        const condCtx = ctx.condicion();
        const left = this.visit(condCtx.left);
        const right = this.visit(condCtx.right);
        const op = condCtx.op.text;

        let result = false;
        if (op === '==') result = left == right;
        else if (op === '!=') result = left != right;
        else if (op === '>') result = left > right;
        else if (op === '<') result = left < right;

        if (result) {
            ctx.instruccion().forEach(inst => this.visit(inst));
        }
    }

    visitExpr(ctx) {
        // Obtenemos el valor del primer término
        let res = this.visit(ctx.termino(0));

        // Recorremos los términos adicionales si existen
        for (let i = 1; i < ctx.termino().length; i++) {
            const val = this.visit(ctx.termino(i));
            
            // Accedemos al texto del operador (+ o -) que está justo antes del término
            // En el árbol, los operadores son hijos del nodo Expr intercalados con los términos
            const op = ctx.getChild(i * 2 - 1).getText(); 
            
            if (op === '+') {
                res += val;
            } else if (op === '-') {
                res -= val;
            }
        }
        return res;
    }

    visitNum(ctx) { return parseInt(ctx.NUMBER().getText()); }
    visitId(ctx) {
        const id = ctx.ID().getText();
        return this.memory.has(id) ? this.memory.get(id) : 0;
    }
}