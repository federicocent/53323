// Generated from c:/Users/Juani/Desktop/proyectos/53555/tareas/Tareas.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link TareasParser}.
 */
public interface TareasListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link TareasParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(TareasParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link TareasParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(TareasParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link TareasParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(TareasParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link TareasParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(TareasParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Assign}
	 * labeled alternative in {@link TareasParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void enterAssign(TareasParser.AssignContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Assign}
	 * labeled alternative in {@link TareasParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void exitAssign(TareasParser.AssignContext ctx);
	/**
	 * Enter a parse tree produced by the {@code If}
	 * labeled alternative in {@link TareasParser#condicional}.
	 * @param ctx the parse tree
	 */
	void enterIf(TareasParser.IfContext ctx);
	/**
	 * Exit a parse tree produced by the {@code If}
	 * labeled alternative in {@link TareasParser#condicional}.
	 * @param ctx the parse tree
	 */
	void exitIf(TareasParser.IfContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Print}
	 * labeled alternative in {@link TareasParser#imprimir}.
	 * @param ctx the parse tree
	 */
	void enterPrint(TareasParser.PrintContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Print}
	 * labeled alternative in {@link TareasParser#imprimir}.
	 * @param ctx the parse tree
	 */
	void exitPrint(TareasParser.PrintContext ctx);
	/**
	 * Enter a parse tree produced by {@link TareasParser#condicion}.
	 * @param ctx the parse tree
	 */
	void enterCondicion(TareasParser.CondicionContext ctx);
	/**
	 * Exit a parse tree produced by {@link TareasParser#condicion}.
	 * @param ctx the parse tree
	 */
	void exitCondicion(TareasParser.CondicionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Expr}
	 * labeled alternative in {@link TareasParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExpr(TareasParser.ExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Expr}
	 * labeled alternative in {@link TareasParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExpr(TareasParser.ExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Num}
	 * labeled alternative in {@link TareasParser#termino}.
	 * @param ctx the parse tree
	 */
	void enterNum(TareasParser.NumContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Num}
	 * labeled alternative in {@link TareasParser#termino}.
	 * @param ctx the parse tree
	 */
	void exitNum(TareasParser.NumContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Id}
	 * labeled alternative in {@link TareasParser#termino}.
	 * @param ctx the parse tree
	 */
	void enterId(TareasParser.IdContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Id}
	 * labeled alternative in {@link TareasParser#termino}.
	 * @param ctx the parse tree
	 */
	void exitId(TareasParser.IdContext ctx);
}