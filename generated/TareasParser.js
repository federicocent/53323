// Generated from c:/Users/Hp/Documents/53323/tarea/53555/tareas/Tareas.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TareasListener from './TareasListener.js';
import TareasVisitor from './TareasVisitor.js';

const serializedATN = [4,1,6,32,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,5,0,13,8,0,10,0,12,0,16,9,0,1,1,1,1,1,1,1,1,3,1,22,8,1,1,2,1,2,3,
2,26,8,2,1,3,1,3,1,4,1,4,1,4,0,0,5,0,2,4,6,8,0,0,29,0,10,1,0,0,0,2,17,1,
0,0,0,4,25,1,0,0,0,6,27,1,0,0,0,8,29,1,0,0,0,10,14,3,6,3,0,11,13,3,2,1,0,
12,11,1,0,0,0,13,16,1,0,0,0,14,12,1,0,0,0,14,15,1,0,0,0,15,1,1,0,0,0,16,
14,1,0,0,0,17,18,5,1,0,0,18,21,3,8,4,0,19,20,5,2,0,0,20,22,3,4,2,0,21,19,
1,0,0,0,21,22,1,0,0,0,22,3,1,0,0,0,23,26,5,4,0,0,24,26,5,5,0,0,25,23,1,0,
0,0,25,24,1,0,0,0,26,5,1,0,0,0,27,28,5,3,0,0,28,7,1,0,0,0,29,30,5,3,0,0,
30,9,1,0,0,0,3,14,21,25];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TareasParser extends antlr4.Parser {

    static grammarFileName = "Tareas.g4";
    static literalNames = [ null, "'-'", "'='" ];
    static symbolicNames = [ null, "DASH", "EQUALS", "ID", "NUMBER", "STRING", 
                             "WS" ];
    static ruleNames = [ "comando", "opcion", "valor", "nombre", "id" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TareasParser.ruleNames;
        this.literalNames = TareasParser.literalNames;
        this.symbolicNames = TareasParser.symbolicNames;
    }



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TareasParser.RULE_comando);
	    var _la = 0;
	    try {
	        localctx = new StartContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.nombre();
	        this.state = 14;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 11;
	            this.opcion();
	            this.state = 16;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	opcion() {
	    let localctx = new OpcionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TareasParser.RULE_opcion);
	    var _la = 0;
	    try {
	        localctx = new OptContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.match(TareasParser.DASH);
	        this.state = 18;
	        this.id();
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 19;
	            this.match(TareasParser.EQUALS);
	            this.state = 20;
	            this.valor();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TareasParser.RULE_valor);
	    try {
	        this.state = 25;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            localctx = new ValNumContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 23;
	            this.match(TareasParser.NUMBER);
	            break;
	        case 5:
	            localctx = new ValStrContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 24;
	            this.match(TareasParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TareasParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.match(TareasParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TareasParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(TareasParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

TareasParser.EOF = antlr4.Token.EOF;
TareasParser.DASH = 1;
TareasParser.EQUALS = 2;
TareasParser.ID = 3;
TareasParser.NUMBER = 4;
TareasParser.STRING = 5;
TareasParser.WS = 6;

TareasParser.RULE_comando = 0;
TareasParser.RULE_opcion = 1;
TareasParser.RULE_valor = 2;
TareasParser.RULE_nombre = 3;
TareasParser.RULE_id = 4;

class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_comando;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StartContext extends ComandoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	opcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OpcionContext);
	    } else {
	        return this.getTypedRuleContext(OpcionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.exitStart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TareasParser.StartContext = StartContext;

class OpcionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_opcion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OptContext extends OpcionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DASH() {
	    return this.getToken(TareasParser.DASH, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	EQUALS() {
	    return this.getToken(TareasParser.EQUALS, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.enterOpt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.exitOpt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitOpt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TareasParser.OptContext = OptContext;

class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_valor;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ValStrContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(TareasParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.enterValStr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.exitValStr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitValStr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TareasParser.ValStrContext = ValStrContext;

class ValNumContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(TareasParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.enterValNum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.exitValNum(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitValNum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TareasParser.ValNumContext = ValNumContext;

class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_nombre;
    }

	ID() {
	    return this.getToken(TareasParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_id;
    }

	ID() {
	    return this.getToken(TareasParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.exitId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




TareasParser.ComandoContext = ComandoContext; 
TareasParser.OpcionContext = OpcionContext; 
TareasParser.ValorContext = ValorContext; 
TareasParser.NombreContext = NombreContext; 
TareasParser.IdContext = IdContext; 
