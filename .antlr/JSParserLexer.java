// Generated from c:/Users/Juani/Desktop/proyectos/antlr-calculator-project/antlr-calculator-project/Calculator.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class JSParserLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LET=1, VAR=2, ASSIGN=3, SEMI=4, ADD=5, SUB=6, MUL=7, DIV=8, LPAREN=9, 
		RPAREN=10, ID=11, NUMBER=12, WS=13;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"LET", "VAR", "ASSIGN", "SEMI", "ADD", "SUB", "MUL", "DIV", "LPAREN", 
			"RPAREN", "ID", "NUMBER", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'let'", "'var'", "'='", "';'", "'+'", "'-'", "'*'", "'/'", "'('", 
			"')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LET", "VAR", "ASSIGN", "SEMI", "ADD", "SUB", "MUL", "DIV", "LPAREN", 
			"RPAREN", "ID", "NUMBER", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public JSParserLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Calculator.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\rF\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b"+
		"\u0001\t\u0001\t\u0001\n\u0001\n\u0005\n6\b\n\n\n\f\n9\t\n\u0001\u000b"+
		"\u0004\u000b<\b\u000b\u000b\u000b\f\u000b=\u0001\f\u0004\fA\b\f\u000b"+
		"\f\f\fB\u0001\f\u0001\f\u0000\u0000\r\u0001\u0001\u0003\u0002\u0005\u0003"+
		"\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015"+
		"\u000b\u0017\f\u0019\r\u0001\u0000\u0004\u0003\u0000AZ__az\u0004\u0000"+
		"09AZ__az\u0001\u000009\u0003\u0000\t\n\r\r  H\u0000\u0001\u0001\u0000"+
		"\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000"+
		"\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000"+
		"\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000"+
		"\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000"+
		"\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000"+
		"\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000"+
		"\u0001\u001b\u0001\u0000\u0000\u0000\u0003\u001f\u0001\u0000\u0000\u0000"+
		"\u0005#\u0001\u0000\u0000\u0000\u0007%\u0001\u0000\u0000\u0000\t\'\u0001"+
		"\u0000\u0000\u0000\u000b)\u0001\u0000\u0000\u0000\r+\u0001\u0000\u0000"+
		"\u0000\u000f-\u0001\u0000\u0000\u0000\u0011/\u0001\u0000\u0000\u0000\u0013"+
		"1\u0001\u0000\u0000\u0000\u00153\u0001\u0000\u0000\u0000\u0017;\u0001"+
		"\u0000\u0000\u0000\u0019@\u0001\u0000\u0000\u0000\u001b\u001c\u0005l\u0000"+
		"\u0000\u001c\u001d\u0005e\u0000\u0000\u001d\u001e\u0005t\u0000\u0000\u001e"+
		"\u0002\u0001\u0000\u0000\u0000\u001f \u0005v\u0000\u0000 !\u0005a\u0000"+
		"\u0000!\"\u0005r\u0000\u0000\"\u0004\u0001\u0000\u0000\u0000#$\u0005="+
		"\u0000\u0000$\u0006\u0001\u0000\u0000\u0000%&\u0005;\u0000\u0000&\b\u0001"+
		"\u0000\u0000\u0000\'(\u0005+\u0000\u0000(\n\u0001\u0000\u0000\u0000)*"+
		"\u0005-\u0000\u0000*\f\u0001\u0000\u0000\u0000+,\u0005*\u0000\u0000,\u000e"+
		"\u0001\u0000\u0000\u0000-.\u0005/\u0000\u0000.\u0010\u0001\u0000\u0000"+
		"\u0000/0\u0005(\u0000\u00000\u0012\u0001\u0000\u0000\u000012\u0005)\u0000"+
		"\u00002\u0014\u0001\u0000\u0000\u000037\u0007\u0000\u0000\u000046\u0007"+
		"\u0001\u0000\u000054\u0001\u0000\u0000\u000069\u0001\u0000\u0000\u0000"+
		"75\u0001\u0000\u0000\u000078\u0001\u0000\u0000\u00008\u0016\u0001\u0000"+
		"\u0000\u000097\u0001\u0000\u0000\u0000:<\u0007\u0002\u0000\u0000;:\u0001"+
		"\u0000\u0000\u0000<=\u0001\u0000\u0000\u0000=;\u0001\u0000\u0000\u0000"+
		"=>\u0001\u0000\u0000\u0000>\u0018\u0001\u0000\u0000\u0000?A\u0007\u0003"+
		"\u0000\u0000@?\u0001\u0000\u0000\u0000AB\u0001\u0000\u0000\u0000B@\u0001"+
		"\u0000\u0000\u0000BC\u0001\u0000\u0000\u0000CD\u0001\u0000\u0000\u0000"+
		"DE\u0006\f\u0000\u0000E\u001a\u0001\u0000\u0000\u0000\u0004\u00007=B\u0001"+
		"\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}