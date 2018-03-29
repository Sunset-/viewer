/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(297);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	__webpack_require__(2);

	__webpack_require__(293);

	__webpack_require__(294);

	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;

	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}

	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);

	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(57);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(89);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(189);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(193);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(211);
	__webpack_require__(214);
	__webpack_require__(215);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(221);
	__webpack_require__(222);
	__webpack_require__(224);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(291);
	__webpack_require__(292);
	module.exports = __webpack_require__(9);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(4)
	  , has            = __webpack_require__(5)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , META           = __webpack_require__(22).KEY
	  , $fails         = __webpack_require__(7)
	  , shared         = __webpack_require__(23)
	  , setToStringTag = __webpack_require__(24)
	  , uid            = __webpack_require__(19)
	  , wks            = __webpack_require__(25)
	  , wksExt         = __webpack_require__(26)
	  , wksDefine      = __webpack_require__(27)
	  , keyOf          = __webpack_require__(29)
	  , enumKeys       = __webpack_require__(42)
	  , isArray        = __webpack_require__(45)
	  , anObject       = __webpack_require__(12)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , createDesc     = __webpack_require__(17)
	  , _create        = __webpack_require__(46)
	  , gOPNExt        = __webpack_require__(49)
	  , $GOPD          = __webpack_require__(51)
	  , $DP            = __webpack_require__(11)
	  , $keys          = __webpack_require__(30)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f  = $propertyIsEnumerable;
	  __webpack_require__(43).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(28)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(7)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(9)
	  , hide      = __webpack_require__(10)
	  , redefine  = __webpack_require__(18)
	  , ctx       = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11)
	  , createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(6) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(12)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , toPrimitive    = __webpack_require__(16)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(6) && !__webpack_require__(7)(function(){
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , document = __webpack_require__(4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , hide      = __webpack_require__(10)
	  , has       = __webpack_require__(5)
	  , SRC       = __webpack_require__(19)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(9).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(21);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(19)('meta')
	  , isObject = __webpack_require__(13)
	  , has      = __webpack_require__(5)
	  , setDesc  = __webpack_require__(11).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(7)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f
	  , has = __webpack_require__(5)
	  , TAG = __webpack_require__(25)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(23)('wks')
	  , uid        = __webpack_require__(19)
	  , Symbol     = __webpack_require__(4).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(25);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(4)
	  , core           = __webpack_require__(9)
	  , LIBRARY        = __webpack_require__(28)
	  , wksExt         = __webpack_require__(26)
	  , defineProperty = __webpack_require__(11).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = false;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(31)
	  , enumBugKeys = __webpack_require__(41);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(5)
	  , toIObject    = __webpack_require__(32)
	  , arrayIndexOf = __webpack_require__(36)(false)
	  , IE_PROTO     = __webpack_require__(40)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(33)
	  , defined = __webpack_require__(35);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(34);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37)
	  , toIndex   = __webpack_require__(39);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(23)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(30)
	  , gOPS    = __webpack_require__(43)
	  , pIE     = __webpack_require__(44);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(34);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(12)
	  , dPs         = __webpack_require__(47)
	  , enumBugKeys = __webpack_require__(41)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(15)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(48).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(11)
	  , anObject = __webpack_require__(12)
	  , getKeys  = __webpack_require__(30);

	module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4).document && document.documentElement;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(32)
	  , gOPN      = __webpack_require__(50).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(31)
	  , hiddenKeys = __webpack_require__(41).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(44)
	  , createDesc     = __webpack_require__(17)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , has            = __webpack_require__(5)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(46)});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperties: __webpack_require__(47)});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(32)
	  , $getOwnPropertyDescriptor = __webpack_require__(51).f;

	__webpack_require__(56)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8)
	  , core    = __webpack_require__(9)
	  , fails   = __webpack_require__(7);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(58)
	  , $getPrototypeOf = __webpack_require__(59);

	__webpack_require__(56)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(35);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(5)
	  , toObject    = __webpack_require__(58)
	  , IE_PROTO    = __webpack_require__(40)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(58)
	  , $keys    = __webpack_require__(30);

	__webpack_require__(56)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(56)('getOwnPropertyNames', function(){
	  return __webpack_require__(49).f;
	});

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;

	__webpack_require__(56)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(56)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(69)});

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(30)
	  , gOPS     = __webpack_require__(43)
	  , pIE      = __webpack_require__(44)
	  , toObject = __webpack_require__(58)
	  , IObject  = __webpack_require__(33)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(7)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {is: __webpack_require__(71)});

/***/ }),
/* 71 */
/***/ (function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(73).set});

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13)
	  , anObject = __webpack_require__(12);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(20)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(75)
	  , test    = {};
	test[__webpack_require__(25)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(18)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(34)
	  , TAG = __webpack_require__(25)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(8);

	$export($export.P, 'Function', {bind: __webpack_require__(77)});

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(21)
	  , isObject   = __webpack_require__(13)
	  , invoke     = __webpack_require__(78)
	  , arraySlice = [].slice
	  , factories  = {};

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11).f
	  , createDesc = __webpack_require__(17)
	  , has        = __webpack_require__(5)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';

	var isExtensible = Object.isExtensible || function(){
	  return true;
	};

	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(13)
	  , getPrototypeOf = __webpack_require__(59)
	  , HAS_INSTANCE   = __webpack_require__(25)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(11).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(4).parseInt
	  , $trim     = __webpack_require__(83).trim
	  , ws        = __webpack_require__(84)
	  , hex       = /^[\-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , defined = __webpack_require__(35)
	  , fails   = __webpack_require__(7)
	  , spaces  = __webpack_require__(84)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(4).parseFloat
	  , $trim       = __webpack_require__(83).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(84) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , has               = __webpack_require__(5)
	  , cof               = __webpack_require__(34)
	  , inheritIfRequired = __webpack_require__(88)
	  , toPrimitive       = __webpack_require__(16)
	  , fails             = __webpack_require__(7)
	  , gOPN              = __webpack_require__(50).f
	  , gOPD              = __webpack_require__(51).f
	  , dP                = __webpack_require__(11).f
	  , $trim             = __webpack_require__(83).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(46)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(6) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)(global, NUMBER, $Number);
	}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(13)
	  , setPrototypeOf = __webpack_require__(73).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , toInteger    = __webpack_require__(38)
	  , aNumberValue = __webpack_require__(90)
	  , repeat       = __webpack_require__(91)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';

	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};

	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(7)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(34);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $fails       = __webpack_require__(7)
	  , aNumberValue = __webpack_require__(90)
	  , $toPrecision = 1..toPrecision;

	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(8)
	  , _isFinite = __webpack_require__(4).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {isInteger: __webpack_require__(96)});

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(8)
	  , isInteger = __webpack_require__(96)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(8)
	  , log1p   = __webpack_require__(104)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;

	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ }),
/* 104 */
/***/ (function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(8)
	  , $asinh  = Math.asinh;

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(8)
	  , $atanh  = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(8)
	  , sign    = __webpack_require__(108);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ }),
/* 108 */
/***/ (function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(8)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(8)
	  , $expm1  = __webpack_require__(112);

	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ }),
/* 112 */
/***/ (function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(8)
	  , sign      = __webpack_require__(108)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);

	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};


	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(8)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(8)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {log1p: __webpack_require__(104)});

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {sign: __webpack_require__(108)});

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(8)
	  , toIndex        = __webpack_require__(39)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(83)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(127)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(128)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(28)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , hide           = __webpack_require__(10)
	  , has            = __webpack_require__(5)
	  , Iterators      = __webpack_require__(129)
	  , $iterCreate    = __webpack_require__(130)
	  , setToStringTag = __webpack_require__(24)
	  , getPrototypeOf = __webpack_require__(59)
	  , ITERATOR       = __webpack_require__(25)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 129 */
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(46)
	  , descriptor     = __webpack_require__(17)
	  , setToStringTag = __webpack_require__(24)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(25)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(8)
	  , toLength  = __webpack_require__(37)
	  , context   = __webpack_require__(133)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(135)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(134)
	  , defined  = __webpack_require__(35);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(13)
	  , cof      = __webpack_require__(34)
	  , MATCH    = __webpack_require__(25)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(25)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(8)
	  , context  = __webpack_require__(133)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(135)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(91)
	});

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(8)
	  , toLength    = __webpack_require__(37)
	  , context     = __webpack_require__(133)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(135)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(140)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , defined = __webpack_require__(35)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(140)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(140)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(140)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(140)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(140)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(140)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(140)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(140)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(140)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(140)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(140)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(140)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(8);

	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(8)
	  , toObject    = __webpack_require__(58)
	  , toPrimitive = __webpack_require__(16);

	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , getTime = Date.prototype.getTime;

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(18)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(25)('toPrimitive')
	  , proto        = Date.prototype;

	if(!(TO_PRIMITIVE in proto))__webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(158));

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16)
	  , NUMBER      = 'number';

	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(8);

	$export($export.S, 'Array', {isArray: __webpack_require__(45)});

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(20)
	  , $export        = __webpack_require__(8)
	  , toObject       = __webpack_require__(58)
	  , call           = __webpack_require__(161)
	  , isArrayIter    = __webpack_require__(162)
	  , toLength       = __webpack_require__(37)
	  , createProperty = __webpack_require__(163)
	  , getIterFn      = __webpack_require__(164);

	$export($export.S + $export.F * !__webpack_require__(165)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(129)
	  , ITERATOR   = __webpack_require__(25)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11)
	  , createDesc      = __webpack_require__(17);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(75)
	  , ITERATOR  = __webpack_require__(25)('iterator')
	  , Iterators = __webpack_require__(129);
	module.exports = __webpack_require__(9).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(25)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(8)
	  , createProperty = __webpack_require__(163);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , arrayJoin = [].join;

	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(33) != Object || !__webpack_require__(168)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(7);

	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(8)
	  , html       = __webpack_require__(48)
	  , cof        = __webpack_require__(34)
	  , toIndex    = __webpack_require__(39)
	  , toLength   = __webpack_require__(37)
	  , arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , fails     = __webpack_require__(7)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];

	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(168)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(8)
	  , $forEach = __webpack_require__(172)(0)
	  , STRICT   = __webpack_require__(168)([].forEach, true);

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(20)
	  , IObject  = __webpack_require__(33)
	  , toObject = __webpack_require__(58)
	  , toLength = __webpack_require__(37)
	  , asc      = __webpack_require__(173);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(174);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , isArray  = __webpack_require__(45)
	  , SPECIES  = __webpack_require__(25)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $map    = __webpack_require__(172)(1);

	$export($export.P + $export.F * !__webpack_require__(168)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $filter = __webpack_require__(172)(2);

	$export($export.P + $export.F * !__webpack_require__(168)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $some   = __webpack_require__(172)(3);

	$export($export.P + $export.F * !__webpack_require__(168)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $every  = __webpack_require__(172)(4);

	$export($export.P + $export.F * !__webpack_require__(168)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);

	$export($export.P + $export.F * !__webpack_require__(168)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , IObject   = __webpack_require__(33)
	  , toLength  = __webpack_require__(37);

	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);

	$export($export.P + $export.F * !__webpack_require__(168)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , $indexOf      = __webpack_require__(36)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , toIObject     = __webpack_require__(32)
	  , toInteger     = __webpack_require__(38)
	  , toLength      = __webpack_require__(37)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(8);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(185)});

	__webpack_require__(186)('copyWithin');

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(25)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(8);

	$export($export.P, 'Array', {fill: __webpack_require__(188)});

	__webpack_require__(186)('fill');

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(192)('Array');

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(4)
	  , dP          = __webpack_require__(11)
	  , DESCRIPTORS = __webpack_require__(6)
	  , SPECIES     = __webpack_require__(25)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(186)
	  , step             = __webpack_require__(194)
	  , Iterators        = __webpack_require__(129)
	  , toIObject        = __webpack_require__(32);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(128)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ }),
/* 194 */
/***/ (function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(4)
	  , inheritIfRequired = __webpack_require__(88)
	  , dP                = __webpack_require__(11).f
	  , gOPN              = __webpack_require__(50).f
	  , isRegExp          = __webpack_require__(134)
	  , $flags            = __webpack_require__(196)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;

	if(__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(function(){
	  re2[__webpack_require__(25)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(18)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(192)('RegExp');

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(12);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(198);
	var anObject    = __webpack_require__(12)
	  , $flags      = __webpack_require__(196)
	  , DESCRIPTORS = __webpack_require__(6)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];

	var define = function(fn){
	  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(7)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(6) && /./g.flags != 'g')__webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(196)
	});

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(200)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(10)
	  , redefine = __webpack_require__(18)
	  , fails    = __webpack_require__(7)
	  , defined  = __webpack_require__(35)
	  , wks      = __webpack_require__(25);

	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(200)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(200)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(200)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(134)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(28)
	  , global             = __webpack_require__(4)
	  , ctx                = __webpack_require__(20)
	  , classof            = __webpack_require__(75)
	  , $export            = __webpack_require__(8)
	  , isObject           = __webpack_require__(13)
	  , aFunction          = __webpack_require__(21)
	  , anInstance         = __webpack_require__(205)
	  , forOf              = __webpack_require__(206)
	  , speciesConstructor = __webpack_require__(207)
	  , task               = __webpack_require__(208).set
	  , microtask          = __webpack_require__(209)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(25)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(210)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(24)($Promise, PROMISE);
	__webpack_require__(192)(PROMISE);
	Wrapper = __webpack_require__(9)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(165)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ }),
/* 205 */
/***/ (function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(20)
	  , call        = __webpack_require__(161)
	  , isArrayIter = __webpack_require__(162)
	  , anObject    = __webpack_require__(12)
	  , toLength    = __webpack_require__(37)
	  , getIterFn   = __webpack_require__(164)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(12)
	  , aFunction = __webpack_require__(21)
	  , SPECIES   = __webpack_require__(25)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(20)
	  , invoke             = __webpack_require__(78)
	  , html               = __webpack_require__(48)
	  , cel                = __webpack_require__(15)
	  , global             = __webpack_require__(4)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(34)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , macrotask = __webpack_require__(208).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(34)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);

	// 23.1 Map Objects
	module.exports = __webpack_require__(213)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(11).f
	  , create      = __webpack_require__(46)
	  , redefineAll = __webpack_require__(210)
	  , ctx         = __webpack_require__(20)
	  , anInstance  = __webpack_require__(205)
	  , defined     = __webpack_require__(35)
	  , forOf       = __webpack_require__(206)
	  , $iterDefine = __webpack_require__(128)
	  , step        = __webpack_require__(194)
	  , setSpecies  = __webpack_require__(192)
	  , DESCRIPTORS = __webpack_require__(6)
	  , fastKey     = __webpack_require__(22).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , $export           = __webpack_require__(8)
	  , redefine          = __webpack_require__(18)
	  , redefineAll       = __webpack_require__(210)
	  , meta              = __webpack_require__(22)
	  , forOf             = __webpack_require__(206)
	  , anInstance        = __webpack_require__(205)
	  , isObject          = __webpack_require__(13)
	  , fails             = __webpack_require__(7)
	  , $iterDetect       = __webpack_require__(165)
	  , setToStringTag    = __webpack_require__(24)
	  , inheritIfRequired = __webpack_require__(88);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);

	// 23.2 Set Objects
	module.exports = __webpack_require__(213)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(172)(0)
	  , redefine     = __webpack_require__(18)
	  , meta         = __webpack_require__(22)
	  , assign       = __webpack_require__(69)
	  , weak         = __webpack_require__(216)
	  , isObject     = __webpack_require__(13)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;

	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(213)('WeakMap', wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(210)
	  , getWeak           = __webpack_require__(22).getWeak
	  , anObject          = __webpack_require__(12)
	  , isObject          = __webpack_require__(13)
	  , anInstance        = __webpack_require__(205)
	  , forOf             = __webpack_require__(206)
	  , createArrayMethod = __webpack_require__(172)
	  , $has              = __webpack_require__(5)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(216);

	// 23.4 WeakSet Objects
	__webpack_require__(213)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $typed       = __webpack_require__(219)
	  , buffer       = __webpack_require__(220)
	  , anObject     = __webpack_require__(12)
	  , toIndex      = __webpack_require__(39)
	  , toLength     = __webpack_require__(37)
	  , isObject     = __webpack_require__(13)
	  , ArrayBuffer  = __webpack_require__(4).ArrayBuffer
	  , speciesConstructor = __webpack_require__(207)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';

	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});

	$export($export.P + $export.U + $export.F * __webpack_require__(7)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});

	__webpack_require__(192)(ARRAY_BUFFER);

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , hide   = __webpack_require__(10)
	  , uid    = __webpack_require__(19)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;

	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}

	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(4)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , LIBRARY        = __webpack_require__(28)
	  , $typed         = __webpack_require__(219)
	  , hide           = __webpack_require__(10)
	  , redefineAll    = __webpack_require__(210)
	  , fails          = __webpack_require__(7)
	  , anInstance     = __webpack_require__(205)
	  , toInteger      = __webpack_require__(38)
	  , toLength       = __webpack_require__(37)
	  , gOPN           = __webpack_require__(50).f
	  , dP             = __webpack_require__(11).f
	  , arrayFill      = __webpack_require__(188)
	  , setToStringTag = __webpack_require__(24)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};

	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};

	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};

	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};

	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};

	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	$export($export.G + $export.W + $export.F * !__webpack_require__(219).ABV, {
	  DataView: __webpack_require__(220).DataView
	});

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(6)){
	  var LIBRARY             = __webpack_require__(28)
	    , global              = __webpack_require__(4)
	    , fails               = __webpack_require__(7)
	    , $export             = __webpack_require__(8)
	    , $typed              = __webpack_require__(219)
	    , $buffer             = __webpack_require__(220)
	    , ctx                 = __webpack_require__(20)
	    , anInstance          = __webpack_require__(205)
	    , propertyDesc        = __webpack_require__(17)
	    , hide                = __webpack_require__(10)
	    , redefineAll         = __webpack_require__(210)
	    , toInteger           = __webpack_require__(38)
	    , toLength            = __webpack_require__(37)
	    , toIndex             = __webpack_require__(39)
	    , toPrimitive         = __webpack_require__(16)
	    , has                 = __webpack_require__(5)
	    , same                = __webpack_require__(71)
	    , classof             = __webpack_require__(75)
	    , isObject            = __webpack_require__(13)
	    , toObject            = __webpack_require__(58)
	    , isArrayIter         = __webpack_require__(162)
	    , create              = __webpack_require__(46)
	    , getPrototypeOf      = __webpack_require__(59)
	    , gOPN                = __webpack_require__(50).f
	    , getIterFn           = __webpack_require__(164)
	    , uid                 = __webpack_require__(19)
	    , wks                 = __webpack_require__(25)
	    , createArrayMethod   = __webpack_require__(172)
	    , createArrayIncludes = __webpack_require__(36)
	    , speciesConstructor  = __webpack_require__(207)
	    , ArrayIterators      = __webpack_require__(193)
	    , Iterators           = __webpack_require__(129)
	    , $iterDetect         = __webpack_require__(165)
	    , setSpecies          = __webpack_require__(192)
	    , arrayFill           = __webpack_require__(188)
	    , arrayCopyWithin     = __webpack_require__(185)
	    , $DP                 = __webpack_require__(11)
	    , $GOPD               = __webpack_require__(51)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';

	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });

	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };

	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };

	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };

	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };

	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };

	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };

	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };

	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });

	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });

	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });

	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});

	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , anObject  = __webpack_require__(12)
	  , rApply    = (__webpack_require__(4).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(7)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(8)
	  , create     = __webpack_require__(46)
	  , aFunction  = __webpack_require__(21)
	  , anObject   = __webpack_require__(12)
	  , isObject   = __webpack_require__(13)
	  , fails      = __webpack_require__(7)
	  , bind       = __webpack_require__(77)
	  , rConstruct = (__webpack_require__(4).Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});

	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(11)
	  , $export     = __webpack_require__(8)
	  , anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(8)
	  , gOPD     = __webpack_require__(51).f
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(130)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , isObject       = __webpack_require__(13)
	  , anObject       = __webpack_require__(12);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', {get: get});

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(51)
	  , $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(8)
	  , getProto = __webpack_require__(59)
	  , anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(8);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(8)
	  , anObject      = __webpack_require__(12)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(8);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(243)});

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(50)
	  , gOPS     = __webpack_require__(43)
	  , anObject = __webpack_require__(12)
	  , Reflect  = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(8)
	  , anObject           = __webpack_require__(12)
	  , $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(11)
	  , gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , createDesc     = __webpack_require__(17)
	  , anObject       = __webpack_require__(12)
	  , isObject       = __webpack_require__(13);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', {set: set});

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(8)
	  , setProto = __webpack_require__(73);

	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(8)
	  , $includes = __webpack_require__(36)(true);

	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(186)('includes');

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);

	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(37)
	  , repeat   = __webpack_require__(91)
	  , defined  = __webpack_require__(35);

	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);

	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(8)
	  , defined     = __webpack_require__(35)
	  , toLength    = __webpack_require__(37)
	  , isRegExp    = __webpack_require__(134)
	  , getFlags    = __webpack_require__(196)
	  , RegExpProto = RegExp.prototype;

	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};

	__webpack_require__(130)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});

	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(27)('asyncIterator');

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(27)('observable');

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(8)
	  , ownKeys        = __webpack_require__(243)
	  , toIObject      = __webpack_require__(32)
	  , gOPD           = __webpack_require__(51)
	  , createProperty = __webpack_require__(163);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8)
	  , $values = __webpack_require__(259)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32)
	  , isEnum    = __webpack_require__(44).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(8)
	  , $entries = __webpack_require__(259)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);

	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(28)|| !__webpack_require__(7)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(4)[K];
	});

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);

	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;

	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;

	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);

	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(267)('Map')});

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(75)
	  , from    = __webpack_require__(268);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(206);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(267)('Set')});

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(8);

	$export($export.S, 'System', {global: __webpack_require__(4)});

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(8)
	  , cof     = __webpack_require__(34);

	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(211)
	  , $export = __webpack_require__(8)
	  , shared  = __webpack_require__(23)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(215)));

	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};

	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;

	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};

	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(214)
	  , from                    = __webpack_require__(268)
	  , metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , getPrototypeOf          = __webpack_require__(59)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};

	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};

	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , aFunction                 = __webpack_require__(21)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(8)
	  , microtask = __webpack_require__(209)()
	  , process   = __webpack_require__(4).process
	  , isNode    = __webpack_require__(34)(process) == 'process';

	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(8)
	  , global      = __webpack_require__(4)
	  , core        = __webpack_require__(9)
	  , microtask   = __webpack_require__(209)()
	  , OBSERVABLE  = __webpack_require__(25)('observable')
	  , aFunction   = __webpack_require__(21)
	  , anObject    = __webpack_require__(12)
	  , anInstance  = __webpack_require__(205)
	  , redefineAll = __webpack_require__(210)
	  , hide        = __webpack_require__(10)
	  , forOf       = __webpack_require__(206)
	  , RETURN      = forOf.RETURN;

	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};

	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};

	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};

	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};

	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};

	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});

	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};

	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});

	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};

	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});

	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});

	hide($Observable.prototype, OBSERVABLE, function(){ return this; });

	$export($export.G, {Observable: $Observable});

	__webpack_require__(192)('Observable');

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(4)
	  , $export    = __webpack_require__(8)
	  , invoke     = __webpack_require__(78)
	  , partial    = __webpack_require__(289)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(290)
	  , invoke    = __webpack_require__(78)
	  , aFunction = __webpack_require__(21);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , $task   = __webpack_require__(208);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(193)
	  , redefine      = __webpack_require__(18)
	  , global        = __webpack_require__(4)
	  , hide          = __webpack_require__(10)
	  , Iterators     = __webpack_require__(129)
	  , wks           = __webpack_require__(25)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ }),
/* 293 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if (typeof global.process === "object" && global.process.domain) {
	      invoke = global.process.domain.bind(invoke);
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(295);
	module.exports = __webpack_require__(9).RegExp.escape;

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(8)
	  , $re     = __webpack_require__(296)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ }),
/* 296 */
/***/ (function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _cateyes = __webpack_require__(298);

	var _cateyes2 = _interopRequireDefault(_cateyes);

	var _toolbar = __webpack_require__(325);

	var _toolbar2 = _interopRequireDefault(_toolbar);

	var _navigation = __webpack_require__(326);

	var _navigation2 = _interopRequireDefault(_navigation);

	var _initer = __webpack_require__(327);

	var _initer2 = _interopRequireDefault(_initer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new _navigation2.default();
	new _initer2.default();

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Cateyes = __webpack_require__(299);

	var _Cateyes2 = _interopRequireDefault(_Cateyes);

	var _dicomEntity = __webpack_require__(300);

	var _dicomEntity2 = _interopRequireDefault(_dicomEntity);

	var _dicomHelper = __webpack_require__(301);

	var _dicomHelper2 = _interopRequireDefault(_dicomHelper);

	var _dicomService = __webpack_require__(302);

	var _dicomService2 = _interopRequireDefault(_dicomService);

	var _inputCovert = __webpack_require__(303);

	var _inputCovert2 = _interopRequireDefault(_inputCovert);

	var _marker = __webpack_require__(304);

	var _marker2 = _interopRequireDefault(_marker);

	var _messageResolver = __webpack_require__(305);

	var _messageResolver2 = _interopRequireDefault(_messageResolver);

	var _player = __webpack_require__(306);

	var _player2 = _interopRequireDefault(_player);

	var _plugins = __webpack_require__(307);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _positioner = __webpack_require__(308);

	var _positioner2 = _interopRequireDefault(_positioner);

	var _socket = __webpack_require__(309);

	var _socket2 = _interopRequireDefault(_socket);

	var _tinter = __webpack_require__(310);

	var _tinter2 = _interopRequireDefault(_tinter);

	var _viewerCommonds = __webpack_require__(321);

	var _viewerCommonds2 = _interopRequireDefault(_viewerCommonds);

	var _viewerManager = __webpack_require__(322);

	var _viewerManager2 = _interopRequireDefault(_viewerManager);

	var _multiViewer = __webpack_require__(323);

	var _multiViewer2 = _interopRequireDefault(_multiViewer);

	var _viewer = __webpack_require__(324);

	var _viewer2 = _interopRequireDefault(_viewer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 299 */
/***/ (function(module, exports) {

	"use strict";

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 *  猫瞳医学影像浏览工具
	 *
	 *  Version : 0.1
	 *
	 *  author : fanll
	 *
	 *  createTime : 2015-07-20
	 *
	 *  updateTime : 2015-07-20
	 *
	 */

	(function (window, undefined) {
		var _Cateyes$Utils;

		var Cateyes = window.Cateyes || (window.Cateyes = {});

		/**
	  *  
	  */
		(function () {
			function getQueryString(name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
				var r = window.location.search.substr(1).match(reg);
				if (r != null) return unescape(r[2]);
				return null;
			}
			Cateyes.getQueryString = getQueryString;
			var which = getQueryString('which');
			Cateyes.IMAGE_RESOUCE_PREFIX = (which == 'local_service' ? '/local_upload' : '/upload') + '/api/1.0.0/file/acquisition/';
		})();

		/**
	  * 唯一ID生成器
	  */
		Cateyes.UniqueID = function () {
			var index = 1;
			return function () {
				return index++;
			};
		}();

		Cateyes.TimeID = function () {
			return new Date().getTime();
		};

		/**
	  * 类帮助
	  * 
	  */
		Cateyes.ClassHelper = {
			/**
	   * 继承
	   * @param  {function} C [子类]
	   * @param  {function} P [父类]
	   * @param  {object} ext [扩展]
	   * @return {undifined}    无
	   */
			extend: function () {
				var F = function F() {};
				return function (P, C, ext) {
					F.prototype = P.prototype;
					var cp = C.prototype = new F();
					cp.__super = P.prototype; //添加父类原型引用
					if (ext) {
						for (var k in ext) {
							if (ext.hasOwnProperty(k)) {
								cp[k] = ext[k];
							}
						}
					}
					C.prototype.constructor = C;
					return C;
				};
			}()
		};

		/**
	  * 函数帮助
	  */
		Cateyes.Function = {
			/**
	   * 函数节流
	   * @param  {[type]} viewer [description]
	   * @return {[type]}        [description]
	   */
			throttle: function throttle(func, time) {
				var timer = null;
				return function () {
					if (timer) {
						//节流
						clearTimeout(timer);
					}
					var self = this,
					    args = [].slice.call(arguments);
					timer = setTimeout(function () {
						func.apply(self, args);
						timer = null;
					}, time);
				};
			},
			/**
	   * AOP after
	   * @param  {[type]} viewer [description]
	   * @return {[type]}        [description]
	   */
			after: function after(func, aop) {
				return function () {
					var self = this,
					    args = [].slice(arguments);
					var res = func.apply(self, args);
					aop.apply(self, args);
					return res;
				};
			}
		};

		Cateyes.namespace = function (nsStr, obj) {
			if (nsStr && nsStr.length) {
				var p = Cateyes,
				    ns = nsStr.split(".");
				if (ns[0] == 'Cateyes') {
					ns.shift();
				}
				if (ns.length) {
					var n;
					while (ns.length > 1) {
						n = ns.shift();
						p = p[n] = p[n] || {};
					}
					p[ns.shift()] = obj;
				}
				return obj;
			}
		};

		/**
	  * 事件订阅发布
	  * 
	  */
		var PubSub = Cateyes.PubSub = function (context) {
			this.context = context;
			this.callbacks = {};
		};
		PubSub.prototype = {
			/**
	   * 获取回调集合
	   */
			_getCallbacks: function _getCallbacks() {
				return this.callbacks || (this.callbacks = {});
			},
			/**
	   * 注册事件
	   * @param  {[type]}   ev       事件名称
	   * @param  {Function} callback 回调
	   * @return {[type]}            [description]
	   */
			subscribe: function subscribe(ev, callback) {
				var callbacks = this._getCallbacks();
				if (typeof callback == "function") {
					(callbacks[ev] || (callbacks[ev] = [])).push(callback);
				} else if (Object.prototype.toString.call(callback) === '[object Array]') {
					var singleCb;
					for (var i = 0, l = callback.length; i < l; i++) {
						if (typeof (singleCb = callback[i]) == "function") {
							(callbacks[ev] || (callbacks[ev] = [])).push(singleCb);
						}
					}
				}
			},
			/**
	   * 发布事件
	   * @return {[type]} [description]
	   */
			publish: function publish() {
				var callbacks = this._getCallbacks();
				var args = Array.prototype.slice.call(arguments, 0),
				    ev = args.shift(),
				    calls = callbacks[ev];
				if (ev && calls) {
					var l;
					if ((l = calls.length) == 1) {
						return calls[0].apply(this.context, args);
					} else {
						for (var i = 0; i < l; i++) {
							calls[i].apply(this.context, args);
						}
					}
				}
			},
			/**
	   * 发布事件
	   * @return {[type]} [description]
	   */
			publishAsync: function publishAsync() {
				var callbacks = this._getCallbacks();
				var args = Array.prototype.slice.call(arguments, 0),
				    ev = args.shift(),
				    calls = callbacks[ev],
				    self = this;
				if (ev && calls) {
					var l;
					if ((l = calls.length) == 1) {
						setTimeout(function () {
							calls[0].apply(self.context, args);
						});
					} else {
						for (var i = 0; i < l; i++) {
							(function (i) {
								setTimeout(function () {
									calls[i].apply(self.context, args);
								});
							})(i);
						}
					}
				}
			},
			/**
	   * 取消订阅
	   * @param  {[type]}   ev       事件名称
	   * @param  {Function} callback 回调函数
	   * @return {[type]}            [description]
	   */
			unsubscribe: function unsubscribe(ev, callback) {
				var callbacks = this._getCallbacks();
				var cbs;
				if (cbs = callbacks[ev]) {
					if (callback) {
						for (var i = 0, l = cbs.length; i < l; i++) {
							if (cbs[i] === callback) {
								cbs.slice(i);
							}
						}
					} else {
						callbacks[ev] = null;
					}
				}
			},
			/**
	   * 注册事件集合
	   * @param  {[type]} events [description]
	   * @return {[type]}        [description]
	   */
			regist: function regist(events) {
				if (events) {
					for (var ev in events) {
						if (events.hasOwnProperty(ev)) {
							this.subscribe(ev, events[ev]);
						}
					}
				}
				return this;
			}
		};

		Cateyes.GlobalPubSub = new PubSub();

		/**
	  * 基础工具
	  */
		Cateyes.Utils = (_Cateyes$Utils = {
			nativeToString: Object.prototype.toString,
			isObject: function isObject(obj) {
				return this.nativeToString.call(obj) == "[object Object]";
			},
			isUndefined: function isUndefined(val) {
				return typeof val == "undefined";
			},
			isArray: function isArray(obj) {
				return this.nativeToString.call(obj) == "[object Array]";
			},
			isObjectOrArray: function isObjectOrArray(src) {
				return this.isObject(src) || this.isArray(src);
			},
			isNumber: function isNumber(num) {
				return !isNaN(num);
			},
			isEmpty: function isEmpty(v, allowBlank) {
				return v === null || v === undefined || Ext.isArray(v) && !v.length || (!allowBlank ? v === '' : false);
			},
			isDate: function isDate(v) {
				return this.nativeToString.apply(v) === '[object Date]';
			},
			isPrimitive: function isPrimitive(v) {
				return Ext.isString(v) || Ext.isNumber(v) || Ext.isBoolean(v);
			},
			isFunction: function isFunction(v) {
				return this.nativeToString.apply(v) === '[object Function]';
			}
		}, _defineProperty(_Cateyes$Utils, "isNumber", function isNumber(v) {
			return typeof v === 'number' && isFinite(v);
		}), _defineProperty(_Cateyes$Utils, "isString", function isString(v) {
			return typeof v === 'string';
		}), _defineProperty(_Cateyes$Utils, "isBoolean", function isBoolean(v) {
			return typeof v === 'boolean';
		}), _defineProperty(_Cateyes$Utils, "isElement", function isElement(v) {
			return !!v && v.tagName;
		}), _defineProperty(_Cateyes$Utils, "isDefined", function isDefined(v) {
			return typeof v !== 'undefined';
		}), _defineProperty(_Cateyes$Utils, "each", function each(obj, callback) {
			if (this.isArray(obj)) {
				for (var i = 0, l = obj.length; i < l; i++) {
					callback(obj[i], i);
				}
			} else if (this.isObject(obj)) {
				for (var k in obj) {
					if (obj["hasOwnProperty"](k)) {
						callback(obj[k], k);
					}
				}
			}
		}), _defineProperty(_Cateyes$Utils, "filter", function filter(obj, _filter) {
			var result = [];
			if (this.isArray(obj)) {
				for (var i = 0, l = obj.length; i < l; i++) {
					_filter(i, obj[i]) && result.push(obj[i]);
				}
			} else if (this.isObject(obj)) {
				for (var k in obj) {
					if (obj["hasOwnProperty"](k)) {
						_filter(k, obj[k]) && result.push(obj[k]);
					}
				}
			}
			return result;
		}), _defineProperty(_Cateyes$Utils, "filterOne", function filterOne(obj, filter) {
			if (this.isArray(obj)) {
				for (var i = 0, l = obj.length; i < l; i++) {
					if (filter(i, obj[i])) {
						return obj[i];
					}
				}
			} else if (this.isObject(obj)) {
				for (var k in obj) {
					if (obj["hasOwnProperty"](k)) {
						if (filter(k, obj[k])) {
							return obj[k];
						}
					}
				}
			}
			return null;
		}), _defineProperty(_Cateyes$Utils, "some", function some(items, cb) {
			if (!items || items.length == 0) {
				return null;
			}
			if (typeof cb != 'function') {
				throw new Error('filter arguments[1] is not a function');
			}
			for (var i = 0, l = items.length; i < l; i++) {
				if (cb(items[i], i)) {
					return true;
				}
			}
			return false;
		}), _defineProperty(_Cateyes$Utils, "copy", function copy(src, isDeep) {
			if (!this.isObjectOrArray(src)) {
				return src;
			}
			var result = null;
			if (isDeep) {
				// 深拷贝
				if (this.isObject(src)) {
					result = {};
					for (var k in src) {
						if (src["hasOwnProperty"](k)) {
							if (this.isObjectOrArray(src[k])) {
								result[k] = this.copy(src[k]);
							} else {
								result[k] = src[k];
							}
						}
					}
				} else if (this.isArray(src)) {
					result = [];
					for (var i = 0, l = src.length; i < l; i++) {
						if (this.isObjectOrArray(src[i])) {
							result[i] = this.copy(src[i]);
						} else {
							result[i] = src[i];
						}
					}
				}
			} else {
				// 浅拷贝
				if (this.isObject(src)) {
					result = {};
					for (var k in src) {
						if (src["hasOwnProperty"](k)) {
							result[k] = src[k];
						}
					}
				} else if (this.isArray(src)) {
					result = [];
					for (var i = 0, l = src.length; i < l; i++) {
						result[i] = src[i];
					}
				}
			}
			return result;
		}), _defineProperty(_Cateyes$Utils, "getAttribute", function getAttribute(parent, namespace) {
			if (parent && namespace) {
				var ns = namespace.split(".");
				var obj = parent,
				    child;
				for (var i = 0, l = ns.length; i < l; i++) {
					child = obj[ns[i]];
					if (this.isFunction(child)) {
						obj = child.call(obj);
					} else {
						obj = child;
					}
					if (obj == null || obj == void 0) {
						return obj;
					}
				}
				return obj;
			}
			return parent;
		}), _defineProperty(_Cateyes$Utils, "setAttribute", function setAttribute(parent, namespace, value) {
			var lio,
			    obj = parent;
			if (lio = namespace.lastIndexOf(".")) {
				var ns = namespace.split("."),
				    obj = parent,
				    attrName = namespace.substring(lio + 1);
				for (var i = 0, l = ns.length - 1; i < l; i++) {
					if (obj[ns[i]] == null || obj[ns[i]] === void 0) {
						obj[ns[i]] = {};
					}
					obj = obj[ns[i]];
				}
				obj[attrName] = value;
			} else {
				obj[namespace] = value;
			}
		}), _defineProperty(_Cateyes$Utils, "getElByClass", function getElByClass(tgt, className) {
			var $result = null,
			    $temp;
			if (tgt.className.indexOf(className) >= 0) {
				$result = $(tgt);
			} else if (($temp = $(tgt).parents("." + className)).length) {
				$result = $temp;
			}
			return $result;
		}), _Cateyes$Utils);

		/*
	  *
	  * 数学工具类
	  *
	  */
		Cateyes.MathUtils = {
			/**
	   * 计算两点间距离
	   */
			getDistance: function getDistance(sx, sy, ex, ey) {
				var w = ex - sx,
				    h = ey - sy;
				return this.measureHypotenuse(w, h);
			},
			/**
	   * 计算直角三角形斜边
	   */
			measureHypotenuse: function measureHypotenuse(l1, l2) {
				return Math["sqrt"](l1 * l1 + l2 * l2);
			},
			/**
	   * 计算三点所成角度 s : 第一边上的点 e : 第二边上的点 p : 顶点
	   */
			getAngle: function getAngle(sx, sy, ex, ey, px, py) {
				var ps = [sx - px, sy - py];
				var pe = [ex - px, ey - py];
				var pJ = ps[0] * pe[0] + ps[1] * pe[1];
				var cosAngle = pJ / (Math["sqrt"](ps[0] * ps[0] + ps[1] * ps[1]) * Math.sqrt(pe[0] * pe[0] + pe[1] * pe[1]));
				return Math["acos"](cosAngle) / 2 / Math["PI"] * 360;
			},
			/**
	   * 判断值是否在两值之间
	   */
			isBetween: function isBetween(testVal, val_1, val_2) {
				return testVal >= val_1 && testVal <= val_2 || testVal >= val_2 && testVal <= val_1;
			},
			/**
	   * 点到直线距离
	   */
			verticalLineLength: function verticalLineLength(px, py, x1, y1, x2, y2) {
				return Math.abs((py - y1) * (x2 - x1) - (px - x1) * (y2 - y1)) / Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
			},
			/**
	   * 计算一组数据最大值，最小值，平均值，标准差
	   */
			measureMeanAndSD: function measureMeanAndSD(array) {
				var min = array[0],
				    max = array[0],
				    sum = 0,
				    mean,
				    sd,
				    count = array.length,
				    i,
				    temp;
				for (i = 0; i < count; i++) {
					temp = array[i];
					min = Math["min"](min, temp);
					max = Math["max"](max, temp);
					sum += temp;
				}
				mean = (sum * 1.0 / count).toFixed(1);
				// 计算标准差
				sum = 0;
				for (i = 0; i < count; i++) {
					temp = array[i];
					sum += Math["pow"](temp - mean, 2);
				}
				sd = Math["sqrt"](sum / count).toFixed(1);
				return {
					min: min,
					max: max,
					mean: mean,
					sd: sd,
					count: count
				};
			},
			/**
	   * 计算面积 sideLength:单元边长(毫米) count:单元个数
	   */
			measureArea: function measureArea(singlePixelArea, count) {
				var result;
				result = singlePixelArea * count;
				if (result > 1000000) {
					result = (result / 1000000.0).toFixed(2) + "m²";
				} else if (result > 100) {
					result = (result / 100.0).toFixed(2) + "cm²";
				} else {
					result = result.toFixed(2) + "mm²";
				}
				return result;
			}
		};

		/*******************************************LOADING****************************************************/
		(function () {
			var LOADING_HTML = '<div class="cateyes-loading-container"><div class="cateyes-loading-bg"></div><div class="cateyes-loading-msg"></div></div>';
			Cateyes.loading = function (msg, $parent) {
				var $el = $('.cateyes-loading-container');
				$parent = $parent || $('body');
				if (msg === false) {
					$el && $el.hide();
					return;
				}
				if (!$el.length) {
					$el = $(LOADING_HTML);
				}
				$('.cateyes-loading-msg', $el.appendTo($parent).show()).html(msg);
			};
		})();

		/*******************************************获取平台****************************************************/
		(function () {
			var browser = {
				versions: function () {
					var u = navigator.userAgent,
					    app = navigator.appVersion;
					return { //移动终端浏览器版本信息   
						trident: u.indexOf('Trident') > -1, //IE内核  
						presto: u.indexOf('Presto') > -1, //opera内核  
						webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
						gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
						mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端  
						ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
						android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器  
						iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器  
						iPad: u.indexOf('iPad') > -1, //是否iPad    
						webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部  
					};
				}(),
				language: (navigator.browserLanguage || navigator.language).toLowerCase()
			};
			var Events = {
				PC: {
					MOUSE_DOWN: "mousedown touchstart",
					MOUSE_MOVE: "mousemove touchmove",
					MOUSE_UP: "mouseup touchend",
					MOUSE_ENTER: "mouseenter touchstart",
					MOUSE_LEAVE: "mouseleave",
					CLICK: "click"
				},
				PAD: {
					MOUSE_DOWN: "touchstart",
					MOUSE_MOVE: "touchmove",
					MOUSE_UP: "touchend",
					MOUSE_ENTER: "touchstart",
					MOUSE_LEAVE: "",
					CLICK: "touchstart"
				},
				PHONE: {
					MOUSE_DOWN: "touchstart",
					MOUSE_MOVE: "touchmove",
					MOUSE_UP: "touchend",
					MOUSE_ENTER: "touchstart",
					MOUSE_LEAVE: "",
					CLICK: "touchstart"
				}
			};

			var platform = 'PC';
			if (browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.iPhone || browser.versions.iPad) {
				platform = "PHONE";
			}
			Cateyes.EVENTS = Events[platform];

			Cateyes.isPlat = function (plat) {
				return plat == platform;
			};
			Cateyes.getPlat = function () {
				return platform;
			};
			Cateyes.isPad = function (plat) {
				return browser.versions.iPad;
			};
		})();

		/**********************  业务事件  **********************/
		Cateyes.CustomEvents = {
			//阅片器状态变化
			'AFTER_VIEWER_STATUS_CHANGE': 'AFTER_VIEWER_STATUS_CHANGE',
			//DICOM加载完成
			'AFTER_DICOM_LOADED': 'AFTER_DICOM_LOADED',
			//阅片器激活
			'ON_VIEWER_ACTIVE': 'ON_VIEWER_ACTIVE',
			//阅片器绑定序列后
			'AFTER_BIND_SERIES': 'AFTER_BIND_SERIES',
			//定位器变化
			'ON_DICOM_CANVAS_RESIZE': 'ON_DICOM_CANVAS_RESIZE',
			//影像浏览切换后
			'AFTER_BROWSE_DICOM': 'AFTER_BROWSE_DICOM',
			//影像浏览切换后
			'AFTER_BROWSE_DICOM_SILIENT': 'AFTER_BROWSE_DICOM_SILIENT',
			//图像渲染前
			'BEFORE_RENDER_DICOM': 'BEFORE_RENDER_DICOM',
			//图像渲染后
			'AFTER_RENDER_DICOM': 'AFTER_RENDER_DICOM',
			'AFTER_TINT_DICOM': 'AFTER_TINT_DICOM',
			//阅片器缓冲
			'VIEWER_LOADING': 'VIEWER_LOADING',
			//暂停/播放切换后
			'AFTER_PLAY_OR_STOP': 'AFTER_PLAY_OR_STOP',
			//位置变化
			'POSITION': 'POSITION',
			//绘制定位线
			'DRAW_POSITIONLINE': 'DRAW_POSITIONLINE',
			//MPR重建
			'AFTER_MPR_REBUILD': 'AFTER_MPR_REBUILD',
			//标注变化
			'AFTER_MARK_CHANGE': 'AFTER_MARK_CHANGE',
			//单个标注变化
			'AFTER_SINGLE_MARK_CHANGE': 'AFTER_SINGLE_MARK_CHANGE',
			//刷新标注标签
			'REFRESH_MARK_TAG': 'REFRESH_MARK_TAG',
			//窗宽窗位变化
			'ON_VIEWER_WINDOW_CHANGE': 'ON_VIEWER_WINDOW_CHANGE'
		};

		/**********************  原生增强  **********************/
		/**
	  * 全替换
	  * @param  {[type]} reallyDo    [description]
	  * @param  {[type]} replaceWith [description]
	  * @param  {[type]} ignoreCase  [description]
	  * @return {[type]}             [description]
	  */
		String.prototype.replaceAll = function (reallyDo, replaceWith, ignoreCase) {
			if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
				return this.replace(new RegExp(reallyDo, ignoreCase ? "gi" : "g"), replaceWith);
			} else {
				return this.replace(reallyDo, replaceWith);
			}
		};

		/**
	  * 日期转换
	  * @param  {[type]} reallyDo    [description]
	  * @param  {[type]} replaceWith [description]
	  * @param  {[type]} ignoreCase  [description]
	  * @return {[type]}             [description]
	  */
		(function () {
			var reg = {
				'yyyy': 'getFullYear',
				'MM': 'getMonth',
				'dd': 'getDate',
				'HH': 'getHours',
				'mm': 'getMinutes',
				'ss': 'getSeconds'
			};

			Date.prototype.format = function (fmt) {
				var date = this;
				if (!isNaN(date)) {
					var d = new Date(date);
					for (var k in reg) {
						var v;
						if (reg.hasOwnProperty(k)) {
							v = d[reg[k]]();
							if (k == 'MM') {
								v++;
							}
							if (k != 'yyyy' && v < 10) {
								v = '0' + v;
							}
							fmt = fmt.replace(k, v);
						}
					}
					return fmt;
				} else {
					return '';
				}
			};
		})();

		var LOADING_HTML = '<div class="sunset-global-loader loader"><div class="loader-inner ball-spin-fade-loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>';

		Cateyes.loading = function (hide) {
			var $loading = $('.sunset-global-loader');
			if (hide === false) {
				$loading.hide();
			} else {
				if ($loading.length == 0) {
					$loading = $(LOADING_HTML).appendTo($('body'));
				}
				$loading.show();
			}
		};
	})(window);

/***/ }),
/* 300 */
/***/ (function(module, exports) {

	'use strict';

	(function () {

		var Cateyes = window.Cateyes || (window.Cateyes = {});

		var DicomHolder = Cateyes.DicomHolder = {
			studyMap: {},
			seriesMap: {},
			registStudy: function registStudy(study) {
				this.studyMap[study.studyInfo.studyInstanceUID] = study;
			},
			registSeries: function registSeries(series) {
				this.seriesMap[series.info.seriesInstanceUID] = series;
			},
			getStudyByUid: function getStudyByUid(uid) {
				return this.studyMap[uid];
			},
			getSeriesByUid: function getSeriesByUid(uid) {
				return this.seriesMap[uid];
			}
		};

		/**
	  * 迭代器
	  * @param {[type]} list [description]
	  */
		var Iterator = function Iterator(indexCb, totalCb, loadedCb) {
			this.indexCb = indexCb;
			this.totalCb = totalCb;
			this.loadedCb = loadedCb;
			this.index = 0;
		};
		Iterator.prototype = {
			hasNext: function hasNext() {
				return this.totalCb() > this.index + 1;
			},
			next: function next() {
				return this.hasNext() ? this.indexCb(++this.index) : null;
			},
			prev: function prev() {
				return this.index > 0 ? this.indexCb(--this.index) : null;
			},
			getTotal: function getTotal() {
				return this.totalCb();
			},
			getLoadedCount: function getLoadedCount() {
				return this.loadedCb();
			},
			getCurrent: function getCurrent() {
				return this.indexCb(this.index);
			},
			getByIndex: function getByIndex(index) {
				return this.indexCb(index);
			},
			getIndex: function getIndex() {
				return this.index;
			},
			gotoIndex: function gotoIndex(index) {
				return index >= 0 && index < this.totalCb() ? this.indexCb(this.index = index) : null;
			},
			isEmpty: function isEmpty() {
				return !(this.totalCb() > 0);
			}
		};
		Iterator.prototype.constructor = Iterator;

		function castNumber(list) {
			var res = [];
			for (var i = 0, t; t = list[i++];) {
				res.push(+t);
			}
			return res;
		}

		/**
	  * 检查
	  */
		var Study = Cateyes.namespace('Cateyes.Entity.Study', function (data) {
			this.init(data);
			DicomHolder.registStudy(this);
		});

		Study.prototype = {
			TYPE: 'STUDY',
			/**
	   * 初始化
	   */
			init: function init(data) {
				this.seriesCount = 0;
				this.dicomCount = 0;
				this.data = data;
				this.serieses = data.study.serieses;
				this.seriesMap = {};
				delete data.study.serieses;
				this.studyInfo = $.extend({}, data.patient, data.study);
				this._splitSerires(this.studyInfo, this.serieses);
			},
			_splitSerires: function _splitSerires(studyInfo, ss) {
				var serises = this.serieses = [],
				    seriesMap = this.seriesMap,
				    simpleFrames,
				    series,
				    seriesInfo,
				    images,
				    image,
				    imageInfo,
				    frames,
				    frame,
				    s;
				for (var seriesId in ss) {
					series = ss[seriesId];
					images = series.images;
					delete series.images;
					seriesInfo = $.extend({
						studyInfo: studyInfo
					}, series);
					simpleFrames = [];
					for (var i = 0, image; image = images[i++];) {
						frames = image.frames;
						if (frames.length > 1) {
							seriesInfo.isFinished = false;
						}
						this._loadSeriesInfo(seriesInfo, image);
						if (frames.length == 1) {
							frames[0].instanceNumber = image.instanceNumber;
							frames[0].frameNumber = image.instanceNumber;
							simpleFrames.push(frames[0]);
						} else if (frames.length > 1) {
							//多帧图组成序列
							var multiFrameSeriesInfo = $.extend({}, seriesInfo);
							multiFrameSeriesInfo.seriesInstanceUID += '_' + image.instanceNumber;
							multiFrameSeriesInfo.autoPlay = true;
							s = new Series(multiFrameSeriesInfo, frames, this);
							if (s.inited) {
								serises.push(s);
								seriesMap[multiFrameSeriesInfo.seriesInstanceUID] = s;
							}
						}
						this._loadFrameInfo(frames, image);
					}
					if (simpleFrames.length) {
						simpleFrames.sort(function (f1, f2) {
							return f1.instanceNumber - f2.instanceNumber;
						});
						s = new Series(seriesInfo, simpleFrames, this);
						if (s.inited) {
							serises.push(s);
							seriesMap[seriesInfo.seriesInstanceUID] = s;
						}
					}
				}
				//series排序
				serises.sort(function (s1, s2) {
					return s1.info.seriesNumber - s2.info.seriesNumber;
				});
			},
			/**
	   * 汇总序列信息
	   */
			_loadSeriesInfo: function _loadSeriesInfo(seriesInfo, image) {
				if (!seriesInfo.isFinished) {
					seriesInfo.width = image.width;
					seriesInfo.height = image.height;
					seriesInfo.windowWidth = image.windowWidth;
					seriesInfo.windowCenter = image.windowCenter;
					seriesInfo.samplesPerPixel = image.samplesPerPixel;
					seriesInfo.sliceThickness = image.sliceThickness;
					if (image.deviceType == 'CT') {
						seriesInfo.rescaleSlope = image.rescaleSlope;
						seriesInfo.rescaleIntercept = image.rescaleIntercept;
					} else {
						seriesInfo.rescaleSlope = 1;
						seriesInfo.rescaleIntercept = 0;
					}
					seriesInfo.deviceType = image.deviceType;
					seriesInfo.pixelSpacing = Cateyes.Utils.isString(image.pixelSpacing) && castNumber(image.pixelSpacing.split('\\'));
					seriesInfo.patientOrientation = image.patientOrientation;
					seriesInfo.recommendedDisplayFrameRate = image.recommendedDisplayFrameRate;
					seriesInfo.imageOrientationPatient = Cateyes.Utils.isString(image.imageOrientationPatient) && castNumber(image.imageOrientationPatient.split('\\'));
					seriesInfo.orientation = Cateyes.DicomHelper.getImageOrientation(seriesInfo.imageOrientationPatient);
					seriesInfo.isFinished = true;
				}
			},
			/**
	   * 汇总影像信息
	   */
			_loadFrameInfo: function _loadFrameInfo(frames, image) {
				for (var i = 0, f; f = frames[i++];) {
					f.info = image;
				}
			},
			/**
	   * 合并多个帧为一个序列
	   * @return {[type]} [description]
	   */
			mergeFrame: function mergeFrame() {},
			/**
	   * 获取序列
	   */
			getSeries: function getSeries(seriesId) {
				if (Cateyes.Utils.isNumber(seriesId)) {
					return this.serieses && this.serieses[seriesId];
				} else {
					return this.seriesMap && this.seriesMap[seriesId];
				}
			},
			/**
	   * 通过索引获取序列
	   */
			getSeriesByIndex: function getSeriesByIndex(index) {
				index = index || 0;
				return this.serieses[index];
			},
			/**
	   * 获取序列个数
	   */
			getSeriesCount: function getSeriesCount() {
				return this.serieses.length;
			},
			loadSeriesFirstDicom: function loadSeriesFirstDicom() {
				this._firstLoadCount || (this._firstLoadCount = 0);
				this._firstLoadCount++;
				if (this._firstLoadCount <= 4) {
					var serieses = this.serieses;
					setTimeout(function () {
						for (var i = 0, s; s = serieses[i++];) {
							s.loadAll();
						}
					}, 1000);
				}
			},
			getMarks: function getMarks() {
				var serieses = this.serieses,
				    cache = {},
				    marks,
				    flag = false;
				for (var i = 0, series; series = serieses[i++];) {
					marks = series.getMarks();
					if (marks) {
						flag = true;
						cache[series.info.seriesInstanceUID] = marks;
					}
				}
				return flag ? cache : null;
			},
			setMarks: function setMarks(marks) {
				if (marks) {
					var serieses = this.serieses;
					for (var i = 0, series; series = serieses[i++];) {
						if (marks[series.info.seriesInstanceUID]) {
							series.setMarks(marks[series.info.seriesInstanceUID]);
						}
					}
				}
			}
		};
		Study.prototype.constructor = Study;

		/**
	  * 序列
	  */
		var Series = Cateyes.namespace('Cateyes.Entity.Series', function (info, frames, study) {
			//关键影像过滤
			frames = this.filter(study, info, frames);
			if (!frames || frames.length == 0) {
				return;
			}
			this.study = study;
			this.id = Cateyes.UniqueID();
			this.info = info;
			try {
				if (info.extensions) {
					info.extensions = JSON.parse(info.extensions);
				} else {
					info.extensions = {};
				}
			} catch (e) {
				info.extensions = {};
			}
			info._width = info.width;
			info._height = info.height;
			this.adjustQuality();
			info.minGray = frames[0].minGray;
			info.maxGray = frames[0].maxGray;
			//窗宽窗位缺失修正
			this.amendWindow(info);
			//排序
			frames.sort(function (f1, f2) {
				return f1.frameNumber - f2.frameNumber;
			});
			if (frames.length >= 2 && frames[1].info) {
				info.realSliceThickness = Math.abs(frames[1].info.sliceLocation - frames[0].info.sliceLocation) / Math.abs(frames[1].info.instanceNumber - frames[0].info.instanceNumber);
				info.sizeTransform = Math.abs(frames[0].info.sliceLocation - frames[frames.length - 1].info.sliceLocation) / frames.length / info.pixelSpacing[0];
			} else {
				info.realSliceThickness = info.sliceThickness;
				info.sizeTransform = 1;
			}
			this.frames = frames;
			this.loaded = 0;
			DicomHolder.registSeries(this);
			this.AUTO_LOAD && this.loadAll();
			study.seriesCount++;
			study.dicomCount += frames.length;
			this.inited = true;
		});

		Series.prototype = {
			TYPE: 'SERIES',
			AUTO_LOAD: false,
			/**
	   * 调整质量
	   * @return {[type]} [description]
	   */
			adjustQuality: function adjustQuality(quality) {
				var info = this.info;
				if (info.extensions.hasCompress) {
					quality = quality || (Cateyes.getPlat() == 'PHONE' ? 'SPEED' : 'LOSSLESS');
					info.width = Math.floor(info._width / info.extensions.quality[quality]);
					info.height = Math.floor(info._height / info.extensions.quality[quality]);
					info.imageQuality = quality.toLowerCase();
				}
			},
			filter: function filter(study, info, frames) {
				var Filter = Cateyes.Entity.KeyImageFilter;
				if (Filter.isOpen()) {
					var res = [];
					for (var i = 0, item; item = frames[i++];) {
						if (Filter.contains(study.studyInfo.studyInstanceUID, info.seriesInstanceUID, item.instanceNumber)) {
							res.push(item);
						}
					}
					return res;
				} else {
					return frames;
				}
			},
			amendWindow: function amendWindow(info) {
				var gtc = Cateyes.DicomHelper.grayToCT;
				if (info.windowWidth == 0 && info.windowCenter == 0) {
					var minCT = gtc(info.minGray, info),
					    maxCT = gtc(info.maxGray, info);
					info.windowWidth = maxCT - minCT + 1;
					info.windowCenter = Math.round((maxCT - minCT) / 2);
				}
			},
			/**
	   * 获取信息
	   * @return {[type]} [description]
	   */
			getInfo: function getInfo() {
				return this.info;
			},
			/**
	   * 获取一个迭代器
	   */
			getIterator: function getIterator() {
				var self = this;
				return this.frames ? new Iterator(function (index) {
					return self.getDicom(index);
				}, function () {
					return self.getTotal();
				}, function () {
					return self.getLoadedCount();
				}) : null;
			},
			/**
	   * 总数
	   */
			getTotal: function getTotal() {
				return this.frames && this.frames.length || 0;
			},
			/**
	   * 获取已加载个数
	   */
			getLoadedCount: function getLoadedCount() {
				return this.loaded;
			},
			/**
	   * 已缓存全部
	   * @return {Boolean} [description]
	   */
			isCachedAll: function isCachedAll() {
				return this.getLoadedCount() == this.getTotal();
			},
			/**
	   * 获取已加载
	   */
			getLoaded: function getLoaded() {
				return this._dicoms;
			},
			/**
	   * 获取dicom
	   */
			getDicom: function getDicom(index, silent) {
				if (this.frames[index]) {
					var dicoms = this._dicoms = this._dicoms || [];
					if (!dicoms[index]) {
						dicoms[index] = this._fetchDicom(this.frames[index], index);
						dicoms[index].index = index;
						dicoms[index].info = this._castSomeAttributes(this.frames[index].info);
						if (this.marks && this.marks[dicoms[index].info.instanceNumber]) {
							dicoms[index].marks = this._deserializeMarks(this.marks[dicoms[index].info.instanceNumber]);
						}
						//console.log('LOAD:' + index);
					}
					silent || this.preLoad(index);
					return dicoms[index];
				}
			},
			_castSomeAttributes: function _castSomeAttributes(obj) {
				if (obj.imageOrientationPatient && Cateyes.Utils.isString(obj.imageOrientationPatient)) {
					obj.imageOrientationPatient = castNumber(obj.imageOrientationPatient.split('\\'));
				}
				if (obj.imagePositionPatient && Cateyes.Utils.isString(obj.imagePositionPatient)) {
					obj.imagePositionPatient = castNumber(obj.imagePositionPatient.split('\\'));
				}
				if (obj.pixelSpacing && Cateyes.Utils.isString(obj.pixelSpacing)) {
					obj.pixelSpacing = castNumber(obj.pixelSpacing.split('\\'));
				}
				return obj;
			},
			/**
	   * 拉取dicom数据
	   * @return {[type]} [description]
	   */
			_fetchDicom: function _fetchDicom(dicomInfo, index) {
				if (dicomInfo.type = 'PNG') {
					return this._fetchImageDicom(dicomInfo);
				} else {
					return this._fetchSimpleDicom(dicomInfo);
				}
			},
			_fetchSimpleDicom: function _fetchSimpleDicom(dicomInfo) {
				var self = this;
				return $.ajax({
					url: Cateyes.IMAGE_RESOUCE_PREFIX + dicomInfo.uri,
					type: 'GET'
				}).then(function (data) {
					return self.loadedDicom(new SimpleDicom(data));
				});
			},
			_fetchImageDicom: function _fetchImageDicom(dicomInfo) {
				var $q = $.Deferred(),
				    img = ImagePool.get(),
				    self = this;
				var uri = JSON.parse(dicomInfo.uri);

				var src;
				src = uri[this.info.imageQuality || 'lossless'];

				if (uri.lossless == '3baae4de301733a9b731a54118da0d75') {
					src = uri.hd;
				}
				img.src = Cateyes.IMAGE_RESOUCE_PREFIX + src;
				img.onload = function () {

					dicomInfo.info.width = img.width;

					dicomInfo.info.height = img.height;
					var d = self.loadedDicom(new ImageDicom(dicomInfo, img, $q));
					$q.resolve(d);
				};
				return $q;
			},
			loadedDicom: function loadedDicom(dicom) {
				this.loaded++;
				if (this.loaded == 1) {
					this.study.loadSeriesFirstDicom();
				}
				Cateyes.GlobalPubSub.publish('AFTER_DICOM_LOADED', {
					loaded: this.loaded,
					total: this.getTotal(),
					series: this,
					dicom: dicom
				});
				return dicom;
			},
			/**
	   * 预加载机制
	   */
			_START_PRELOAD_OFFSET: 10,
			_PRELOAD_NUMBER: 20,
			_PHONE_PRELOAD_NUMBER: 20,
			_PHONE_PRELOAD_OFFSET: 10,
			preLoad: function preLoad(index) {
				if (Cateyes.getPlat() == 'PHONE') {
					var peace = this._PHONE_PRELOAD_NUMBER;
					var offset = index % peace,
					    start = index - offset,
					    end = Math.min(this.getTotal(), start + peace);
					for (var i = start; i < end; i++) {
						this.getDicom(i, true);
					}
					//加载下一块
					if (offset == peace - this._PHONE_PRELOAD_OFFSET) {
						start += peace;
						end = Math.min(this.getTotal(), start + peace);
						for (var i = start; i < end; i++) {
							this.getDicom(i, true);
						}
					}
				} else {
					if (index == 0) {
						this._preloadedCount = 1;
						return;
					}
					var preloadedCount = this._preloadedCount;
					if (index + this._START_PRELOAD_OFFSET >= preloadedCount) {
						var start = preloadedCount,
						    end = Math.min(this.getTotal(), this._preloadedCount += this._PRELOAD_NUMBER);
						for (var i = start; i < end; i++) {
							this.getDicom(i, true);
						}
					}
				}
			},
			loadAll: function loadAll() {
				//手机端无加载全部
				if (Cateyes.getPlat() == 'PHONE') {
					return;
				}
				for (var i = 0, l = this.frames.length; i < l; i++) {
					this.getDicom(i);
				}
			},
			getMarks: function getMarks() {
				var dicoms = this._dicoms,
				    cache = {},
				    marksJson = [],
				    flag = false;
				if (dicoms && dicoms.length) {
					for (var k = 0, dicom; dicom = dicoms[k++];) {
						if (dicom.marks && dicom.marks.length) {
							var marks = dicom.marks;
							marksJson = [];
							for (var m = 0, mark; mark = marks[m++];) {
								marksJson.push(mark.serialize());
							}
							cache[dicom.info.instanceNumber] = marksJson;
							flag = true;
						}
					}
				}
				return flag ? cache : null;
			},
			setMarks: function setMarks(marks) {
				this.marks = marks;
			},
			_deserializeMarks: function _deserializeMarks(marks) {
				if (marks && marks.length) {
					var res = [],
					    MarkFactory = Cateyes.MarkFactory;
					for (var i = 0, m; m = marks[i++];) {
						res.push(MarkFactory.create(m.type, m.params));
					}
					return res;
				}
			}
		};
		Series.prototype.constructor = Series;

		/**
	  * Dicom 基类
	  */
		var Dicom = Cateyes.namespace('Cateyes.Entity.Dicom', function (info) {
			this.info = info;
		});

		Dicom.prototype = {
			TYPE: 'DICOM',
			/**
	   * 获取信息
	   */
			getInfo: function getInfo() {
				return this.info;
			},
			/**
	   * 获取像素数据
	   * @return {[type]} [description]
	   */
			getPixelData: function getPixelData() {
				throw new Error('getPixelData 方法未在子类中实现');
			}
		};

		/**
	  * 简单Dicom类
	  *
	  * 像素数据以json格式存储
	  *
	  * @param  {[type]} )      {	}         [description]
	  * @param  {[type]} {	}) [description]
	  * @return {[type]}        [description]
	  */
		var SimpleDicom = Cateyes.namespace('Cateyes.Entity.SimpleDicom', Cateyes.ClassHelper.extend(Dicom, function (info) {
			this.info = info;
			this.isLoaded = true;
		}, {
			/**
	   * 获取像素数据
	   * @return {[type]} [description]
	   */
			getPixelData: function getPixelData() {
				return this.info.pixelData;
			}
		}));

		/**
	  * Image对象池
	  * @type {Object}
	  */
		var ImagePool = {
			imgs: [],
			get: function get() {
				if (this.imgs.length) {
					return this.imgs.shift();
				} else {
					return new Image();
				}
			},
			recover: function recover(img) {
				img && this.imgs.push(img);
			}
		};

		/**
	  * 图片压缩型Dicom类
	  *
	  * 像素数据以图像格式压缩存储
	  *
	  * @param  {[type]} )      {	}         [description]
	  * @param  {[type]} {	}) [description]
	  * @return {[type]}        [description]
	  */
		var ImageDicom = Cateyes.namespace('Cateyes.Entity.ImageDicom', Cateyes.ClassHelper.extend(Dicom, function (info, img, $q) {
			this.info = info;
			this.dicomInfo = info.info;
			if (info && info.info && info.info.extensions) {
				try {
					info.extensions = JSON.parse(info.info.extensions);
				} catch (e) {}
			}
			this._img = img;
			this.$q = $q;
			var self = this;
			this.$q.dicomInfo = info.info;
			this.$q.getPixelData = function () {
				return self.getPixelData();
			};
			this.isLoaded = true;
		}, {
			cvs: function () {
				var cvs = document.createElement('canvas');
				cvs.ctx = cvs.getContext('2d');
				return cvs;
			}(),
			depressList: [],
			CACHE_DEPRESS: true, //是否缓存解压（空间换时间）
			CACHE_DEPRESS_COUNT: Cateyes.getPlat() == 'PC' ? 0 : 5, //缓存保存个数
			/**
	   * 获取像素数据
	   * @return {[type]} [description]
	   */
			getPixelData: function getPixelData() {
				if (this.CACHE_DEPRESS) {
					if (!this.info.pixelData) {
						this.info.pixelData = this._depress(this._img);
					}
					return this.info.pixelData;
				} else {
					return this._depress(this._img);
				}
			},
			getImage: function getImage() {
				return this._img;
			},
			_depress: function _depress(img) {
				var cvs = this.cvs,
				    ctx = cvs.ctx;
				if (cvs.width != img.width || cvs.height != img.height) {
					cvs.width = img.width;
					cvs.height = img.height;
				}
				this.width = cvs.width;
				this.height = cvs.height;
				ctx.drawImage(img, 0, 0, cvs.width, cvs.height);
				var panel = ctx.getImageData(0, 0, img.width, img.height),
				    pixelData = panel.data;
				var grays = [],
				    offset = this.info.minGray < 0 ? Math.abs(this.info.minGray) : 0;
				if (this.info.info.samplesPerPixel == 1) {
					for (var i = 0, l = pixelData.length; i < l; i += 4) {
						var gray = (pixelData[i + 0] << 16) + (pixelData[i + 1] << 8) + pixelData[i + 2];
						grays.push(gray - offset);
					}
				} else {
					grays = pixelData;
				}
				if (this.CACHE_DEPRESS) {
					this.depressList.push(this);
					if (this.CACHE_DEPRESS_COUNT > 0 && this.CACHE_DEPRESS_COUNT < this.depressList.length) {
						this.depressList.shift().info.pixelData = null;
					}
				}
				return grays;
			}
		}));

		Dicom.prototype.constructor = Dicom;

		/**
	  * 关键影像过滤
	  */
		Cateyes.namespace('Cateyes.Entity.KeyImageFilter', {
			open: false,
			_filter: null,
			isOpen: function isOpen() {
				return this.open;
			},
			addFilter: function addFilter(filter) {
				if (this._filter == null) {
					this.open = true;
					this._filter = filter;
				}
			},
			contains: function contains(studyInstanceUID, seriesInstanceUID, instanceNumber) {
				var filter = this._filter;
				return filter[studyInstanceUID] && filter[studyInstanceUID][seriesInstanceUID] && filter[studyInstanceUID][seriesInstanceUID][instanceNumber];
			}
		});
	})();

/***/ }),
/* 301 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * DICOM帮助类
	 *
	 * author : fanll
	 *
	 * createTime : 2015-07-20
	 * 
	 * @return {[type]} [description]
	 */
	(function () {

		var Cateyes = window.Cateyes || (window.Cateyes = {});

		var DicomHelper = Cateyes.DicomHelper = {
			/**
	   * 灰度值转ct值
	   * @param  {[type]} gray      [description]
	   * @param  {[type]} dicomInfo [description]
	   * @return {[type]}           [description]
	   */
			grayToCT: function grayToCT(gray, dicomInfo) {
				return gray * dicomInfo.rescaleSlope + dicomInfo.rescaleIntercept;
			},
			/**
	   * ct值转灰度值
	   * @param  {[type]} ct        [description]
	   * @param  {[type]} dicomInfo [description]
	   * @return {[type]}           [description]
	   */
			cTToGray: function cTToGray(ct, dicomInfo) {
				return (ct - dicomInfo.rescaleIntercept) / dicomInfo.rescaleSlope;
			},
			/**
	   * 获取图像方向
	   * @param  {[type]} imageOrientationPatient [description]
	   * @return {[type]}                         [description]
	   */
			ORIENTATION: {
				'100010': 'AXIAL', //轴状位
				'10000-1': 'CORONAL', //冠状位
				'01000-1': 'SAGITTAL' //矢状面
			},
			getImageOrientation: function getImageOrientation(imageOrientationPatient) {
				if (imageOrientationPatient) {
					var fori = [];
					for (var i = 0, l = imageOrientationPatient.length; i < l; i++) {
						fori.push(Math.round(imageOrientationPatient[i]));
					}
					return this.ORIENTATION[fori.join('')];
				}
			}
		};
	})();

/***/ }),
/* 302 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Dicom服务（处理加载/格式化/缓存）
	 *
	 * author : fanll
	 *
	 * createTime : 2015-07-30
	 *
	 */
	(function () {

		var DicomService = Cateyes.namespace('Cateyes.DicomService', {
			cache: {},
			studies: [],
			/**
	   * 获取多个检查
	   */
			getStudies: function getStudies(studyIds, keysUrl) {
				var defs = [];
				if (keysUrl) {
					var self = this;
					return this.getKeys(keysUrl).then(function (keys) {
						Cateyes.Entity.KeyImageFilter.addFilter(keys);
						for (var i = 0, id; id = studyIds[i++];) {
							defs.push(self.getStudy(id));
						}
						return $.when.apply($, defs);
					});
				} else {
					for (var i = 0, id; id = studyIds[i++];) {
						defs.push(this.getStudy(id));
					}
					return $.when.apply($, defs);
				}
			},
			/**
	   * 获取检查
	   */
			getStudy: function getStudy(studyId) {
				var self = this;
				if (self.cache[studyId]) {
					return Promise.resolve(self.cache[studyId]);
				} else {
					return self._fetchStudyInfo(studyId);
				}
				// return Promise.resolve().then(function(){
				// 	debugger;
				// 	return self.cache[studyId] || (self.cache[studyId] = self._fetchStudyInfo(studyId));
				// });
			},
			/**
	   * 获取关键影像索引
	   */
			getKeys: function getKeys(keysUrl) {
				return $.ajax({
					url: keysUrl,
					type: 'GET'
				}).then(function (res) {
					if (res && res.code == 200 && res.data && res.data.data) {
						var keys = {};
						try {
							keys = JSON.parse(res.data.data[0].keyDcm);
						} catch (e) {}
						return keys;
					}
				});
			},
			/**
	   * 获取所有检查
	   *
	   * @param  {[type]} studyId [description]
	   * @return {[type]}         [description]
	   */
			getAllStudies: function getAllStudies() {
				return this.studies;
			},
			_fetchStudyInfo: function _fetchStudyInfo(studyId) {
				var self = this;
				Cateyes.loading();
				return $.ajax({
					url: studyId,
					type: 'GET',
					cache: true,
					headers: {
						Accept: 'application/json, text/plain, */*'
					}
				}).then(function (res) {
					Cateyes.loading(false);
					if (res && res.code == 200 && res.data) {
						var study = new Cateyes.Entity.Study(res.data);
						self.cache[study.studyInfo.studyInstanceUID] = study;
						self.studies.push(study);
						self._loadBusinessInfo(study);
						Cateyes.GlobalPubSub.publish('AFTER_LOAD_STUDY', study);
						return study;
					}
					// var study = new Cateyes.Entity.Study(res);
					// Cateyes.GlobalPubSub.publish('AFTER_LOAD_STUDY', study);
					// return study;
				});
			},
			getSeries: function getSeries(studyId, seriesId) {
				//var study = this.getStudy('/' + studyId + '/' + studyId + '.json');
				var study = this.getStudy(studyId);
				return study.then(function (sy) {
					return sy.getSeries(seriesId);
				});
			},
			_loadBusinessInfo: function _loadBusinessInfo(study) {
				var cpb;
				if (cpb = window.parent.window.CateyesPubSub) {
					var replyMarks = cpb.replyMarks || {},
					    studyMarks;
					if (studyMarks = replyMarks[study.studyInfo.studyInstanceUID]) {
						study.setMarks(studyMarks);
					}
				}
			}
		});

		//业务钩子挂载
		var cpb;
		if (cpb = window.parent.window.CateyesPubSub) {
			cpb.getAllMarks = function () {
				var allStudies = Cateyes.DicomService.getAllStudies();
				var markDicomCount = 0;
				if (allStudies && allStudies.length) {
					var marks,
					    markCache = {};
					for (var i = 0, study; study = allStudies[i++];) {
						marks = study.getMarks();
						if (marks) {
							markCache[study.studyInfo.studyInstanceUID] = marks;
						}
					}
				}
				return markCache;
			};
		}
	})();

/***/ }),
/* 303 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * 输入转换
	 * @return {[type]} [description]
	 */
	(function () {

		var Cateyes = window.Cateyes || (window.Cateyes = {});

		/**
	  * 全局鼠标代理
	  */
		var Mouse = Cateyes.Mouse = function () {
			var MouseEvent = Cateyes.EVENTS;
			var Mouse = {
				x: 0,
				y: 0,
				isDowned: false,
				button: "LEFT", // 鼠标按下的键(0:左键,1:中键,2:右键)
				offsetX: 0, // 鼠标落下移动后的X位移
				offsetY: 0, // 鼠标落下移动后的Y位移
				ev: null,
				state: {}
			};
			var $el = $('.cateyes-major-content');
			var _mLastX = 0,
			    _mLastY = 0,
			    _mStartX = 0,
			    _mStartY = 0;
			$el.on(MouseEvent.MOUSE_MOVE, function (ev) {
				if (ev.originalEvent) {
					ev = ev.originalEvent;
				}
				var pX = ((ev.touches || [])[0] || ev).pageX,
				    pY = ((ev.touches || [])[0] || ev).pageY;
				Mouse.ctrlKey = ev.ctrlKey;
				Mouse.altKey = ev.altKey;
				Mouse.x = pX;
				Mouse.y = pY;
				Mouse.offsetX = pX - _mStartX;
				Mouse.offsetY = pY - _mStartY;
				Mouse.moveX = pX - _mLastX;
				Mouse.moveY = pY - _mLastY;
				_mLastX = pX;
				_mLastY = pY;
				Mouse.isMove = true;
				if (Mouse.moveX != 0 || Mouse.moveY != 0) {
					Mouse.touchEnd = false;
					Mouse.touchStart = false;
				} else {
					return false;
				}
			});
			$el.on(MouseEvent.MOUSE_DOWN, function (ev) {
				if (ev.originalEvent) {
					ev = ev.originalEvent;
				}
				Mouse.moveX = 0;
				Mouse.moveY = 0;
				_mLastX = _mStartX = Mouse.startX = Mouse.x = ((ev.touches || [])[0] || ev).pageX;
				_mLastY = _mStartY = Mouse.startY = Mouse.y = ((ev.touches || [])[0] || ev).pageY;
				Mouse.ctrlKey = ev.ctrlKey;
				Mouse.altKey = ev.altKey;
				Mouse.touchStart = true;
				Mouse.isDowned = true;
				Mouse.touchEnd = false;
				this.isMove = false;
				Mouse.offsetX = 0;
				Mouse.offsetY = 0;
				ev.preventDefault();
			});
			$el.on(MouseEvent.MOUSE_UP, function (ev) {
				if (ev.originalEvent) {
					ev = ev.originalEvent;
				}
				Mouse.moveX = 0;
				Mouse.moveY = 0;
				Mouse.ctrlKey = ev.ctrlKey;
				Mouse.altKey = ev.altKey;
				Mouse.touchStart = false;
				Mouse.touchEnd = true;
				Mouse.isDowned = false;
				this.isMove = false;
			});
			return Mouse;
		}();

		/**
	  * 输入转换器
	  * @type {Object}
	  */
		Cateyes.InputCovert = {
			coverts: {},
			getCovert: function getCovert(type, params) {
				if (this.coverts[type]) {
					if (!params) {
						return this.coverts[type];
					} else {
						var self = this;
						return function () {
							return self.coverts[type].call(null, params);
						};
					}
				} else if (Cateyes.ViewerCommondFactory.has(type)) {
					return function () {
						return Cateyes.ViewerCommondFactory.create(type, params);
					};
				}
			}
		};

		/**
	  * 特殊转换器
	  * @type {[type]}
	  */
		var ci = Cateyes.InputCovert.coverts;

		//切换激活窗
		ci.ACTIVE_VIEWER = function (params) {
			Cateyes.ViewerManager.activeViewer(params);
		};

		//检索
		ci.BROWSE = function (params) {
			if (params) {
				return Cateyes.ViewerCommondFactory.create('CMD_BROWSE', {
					to: params
				});
			} else if (Mouse.isDowned && Mouse.isMove && Mouse.moveY != 0) {
				return Cateyes.ViewerCommondFactory.create('CMD_BROWSE', {
					to: params || (Mouse.moveY > 0 ? 'NEXT' : 'PREV')
				});
			}
		};

		//播放
		ci.PLAY = function (params) {
			return Cateyes.ViewerCommondFactory.create('CMD_PLAY', params);
		};

		//快照
		ci.SNAPSHOOT = function (params) {
			return Cateyes.ViewerCommondFactory.create('CMD_SNAPSHOOT', params);
		};

		//多窗
		ci.VIEWER_GRID = function (params) {
			return function () {
				Cateyes.ViewerManager.initGrid(params.rows, params.cols);
			};
		};
		//多图
		ci.VIEWER_MULTI = function (params) {
			return function () {
				var multiViewer = Cateyes.ViewerManager.getCurrentMultiViewer();
				multiViewer && multiViewer.initGrid(params.rows, params.cols);
			};
		};

		//标记关键帧
		ci.KEYIMAGE = function (params) {
			return Cateyes.ViewerCommondFactory.create('CMD_KEYIMAGE', params);
		};

		//窗宽窗位
		ci.CHANGE_WINDOW = function () {
			if (Mouse.isDowned && Mouse.isMove) {
				var step = 1;
				// var viewer = Cateyes.ViewerManager.getCurrentViewer();
				// if(viewer){
				// 	var d = viewer.getPlayer().getCurrentDicom();
				// 	if(d){
				// 		var f = d.info.frames[0].maxGray-d.info.frames[0].minGray;
				// 		if(f>30000){
				// 			step = 20;
				// 		}
				// 	}
				// }
				return Cateyes.ViewerCommondFactory.create('CMD_TINT', {
					_: {
						windowWidth: '+' + Mouse.moveX * step,
						windowCenter: '+' + Mouse.moveY * step
					}
				});
			}
		};

		//窗宽窗位
		ci.SET_WINDOW = function (params) {
			return Cateyes.ViewerCommondFactory.create('CMD_TINT', {
				windowWidth: params.windowWidth,
				windowCenter: params.windowCenter
			});
		};

		//缩放
		var zoomOffset = 0;
		ci.ZOOM = function () {
			var viewer = Cateyes.ViewerManager.getCurrentViewer();
			if (viewer) {
				if (Mouse.touchStart) {
					var CanvasMouse = viewer.positioner.getMouseXYofCanvas(Mouse.x, Mouse.y);
					Mouse.state._zoomAmendX = CanvasMouse.width / 2 - CanvasMouse.x;
					Mouse.state._zoomAmendY = CanvasMouse.height / 2 - CanvasMouse.y;
					if (CanvasMouse.x < 0 || CanvasMouse.x > CanvasMouse.width) {
						Mouse.state._zoomAmendX = 0;
					}
					if (CanvasMouse.y < 0 || CanvasMouse.y > CanvasMouse.height) {
						Mouse.state._zoomAmendY = 0;
					}
				}
				if (Mouse.isDowned && Mouse.isMove) {
					var state = viewer.positioner.getState(),
					    changeScale = Mouse.moveY * 0.01;
					if (changeScale < 0 && state.scale <= 0.1) {
						return Cateyes.ViewerCommondFactory.create('CMD_TRANSFORM', {
							scale: 0.1
						});
					}
					return Cateyes.ViewerCommondFactory.create('CMD_TRANSFORM', {
						_: {
							scale: changeScale,
							x: changeScale * Mouse.state._zoomAmendX,
							y: changeScale * Mouse.state._zoomAmendY
						}
					});
				}
			}
		};

		//设置缩放大小
		ci.SET_SCALE = function (params) {
			return Cateyes.ViewerCommondFactory.create('CMD_TRANSFORM', {
				scale: params.scale
			});
		};

		//平移
		ci.TRANSLATE = function () {
			var startX, startY;
			return function () {
				if (Mouse.touchStart) {
					var viewer = Cateyes.ViewerManager.getCurrentViewer(),
					    state;
					if (viewer) {
						state = viewer.positioner.getState();
						startX = state.x;
						startY = state.y;
					}
				} else if (Mouse.isDowned && Mouse.isMove) {
					return Cateyes.ViewerCommondFactory.create('CMD_TRANSFORM', {
						x: startX + Mouse.offsetX,
						y: startY + Mouse.offsetY
					});
				}
			};
		}();

		//设置平移
		ci.SET_TRANSLATE = function (params) {
			return Cateyes.ViewerCommondFactory.create('CMD_TRANSFORM', {
				x: params.x,
				y: params.y
			});
		};

		//水平翻转
		ci.HORIZONTAL_TURN = function () {
			return Cateyes.ViewerCommondFactory.create('CMD_TRANSFORM', {
				_: {
					horizontal: '*-1'
				}
			});
		};
		//垂直翻转
		ci.VERTICAL_TURN = function () {
			return Cateyes.ViewerCommondFactory.create('CMD_TRANSFORM', {
				_: {
					vertical: '*-1'
				}
			});
		};

		//自由旋转
		ci.FREEDOM_ROTATE = function () {
			if (Mouse.isDowned && Mouse.isMove) {
				return Cateyes.ViewerCommondFactory.create('CMD_TRANSFORM', {
					_: {
						rotate: '+' + Mouse.moveY
					}
				});
			}
		};

		//左转
		ci.ROTATE_LEFT = function () {
			var viewer = Cateyes.ViewerManager.getCurrentViewer();
			if (viewer) {
				var state = viewer.positioner.getState();
				//var step = -(state.horizontal * state.vertical * 90);
				return Cateyes.ViewerCommondFactory.create('CMD_TRANSFORM', {
					_: {
						rotate: '-90' //(step < 0 ? '' : '+') + step
					}
				});
			}
		};
		//右转
		ci.ROTATE_RIGHT = function () {
			var viewer = Cateyes.ViewerManager.getCurrentViewer();
			if (viewer) {
				var state = viewer.positioner.getState();
				//var step = state.horizontal * state.vertical * 90;
				return Cateyes.ViewerCommondFactory.create('CMD_TRANSFORM', {
					_: {
						rotate: '+90' //(step < 0 ? '' : '+') + step
					}
				});
			}
		};
		//反色
		ci.INVERSE = function () {
			return Cateyes.ViewerCommondFactory.create('CMD_TINT', {
				_: {
					isInverse: '^true'
				}
			});
		};

		//伪彩
		ci.PSEUDOCOLOR = function () {
			return Cateyes.ViewerCommondFactory.create('CMD_TINT', {
				_: {
					isPseudoColor: '^true'
				}
			});
		};

		//文字标注输入框
		ci.SHOW_TEXT_MARKER = function () {
			if (Mouse.touchStart) {
				var viewer = Cateyes.ViewerManager.getCurrentViewer();
				if (viewer) {
					var canvasMouse = viewer.positioner.getMouseXYofCanvas(Mouse.x, Mouse.y, true);
					Cateyes.GlobalPubSub.publish('SHOW_TEXT_MARKER', {
						viewerId: viewer.id,
						mx: Mouse.x,
						my: Mouse.y,
						cx: canvasMouse.x,
						cy: canvasMouse.y
					});
				}
			}
		};

		//标注创建公共接口
		ci.MARK_CREATE_BASE = function (condition) {
			var viewer = Cateyes.ViewerManager.getCurrentViewer();
			if (viewer) {
				var marker = viewer.marker,
				    startCanvasMouse = viewer.positioner.getMouseXYofCanvas(Mouse.startX, Mouse.startY, true),
				    canvasMouse = viewer.positioner.getMouseXYofCanvas(Mouse.x, Mouse.y, true);
				if (canvasMouse && startCanvasMouse) {
					if (marker.getCreatingMark() && condition.creating) {
						//创建中
						var params = null;
						if (Cateyes.Utils.isFunction(condition.creatingCallback)) {
							params = condition.creatingCallback({
								sx: startCanvasMouse.x,
								sy: startCanvasMouse.y,
								ex: canvasMouse.x,
								ey: canvasMouse.y
							});
						} else {
							params = {
								sx: startCanvasMouse.x,
								sy: startCanvasMouse.y,
								ex: canvasMouse.x,
								ey: canvasMouse.y
							};
						}
						return Cateyes.ViewerCommondFactory.create('CMD_MARK_CREATING', params);
					} else if (!marker.getCurrentMark() && !marker.getCreatingMark() && condition.create) {
						//创建
						return Cateyes.ViewerCommondFactory.create('CMD_MARK_CREATE', {
							type: condition.markType,
							params: {
								sx: startCanvasMouse.x,
								sy: startCanvasMouse.y,
								ex: canvasMouse.x,
								ey: canvasMouse.y
							}
						});
					}
				}
			}
		};

		//标注刷新公共接口
		ci.MARK_REFRESH_BASE = function () {
			var startX, startY;
			return function (condition) {
				var viewer = Cateyes.ViewerManager.getCurrentViewer();
				if (viewer) {
					var marker = viewer.marker,
					    state = viewer.positioner.getState(),
					    startCanvasMouse = viewer.positioner.getMouseXYofCanvas(Mouse.startX, Mouse.startY),
					    canvasMouse = viewer.positioner.getMouseXYofCanvas(Mouse.x, Mouse.y);
					if (marker.getCreatingMark() && (Mouse.touchStart || Mouse.touchEnd)) {
						//完成创建
						return Cateyes.ViewerCommondFactory.create('CMD_MARK_CREATED');
					} else if (marker.getCurrentMark() && Mouse.isDowned) {
						var mark = marker.getCurrentMark();
						if (Mouse.touchStart) {
							mark.startMove();
						}
						//刷新
						var state = viewer.positioner.getState();
						var vX = Mouse.offsetX / state.scale,
						    vY = Mouse.offsetY / state.scale;
						var sink = Math.sin(Math.PI / 180 * -state.rotate),
						    cosk = Math.cos(Math.PI / 180 * -state.rotate);
						return Cateyes.ViewerCommondFactory.create('CMD_MARK_REFRESH', {
							_: {
								x: (vX * cosk - vY * sink) * state.horizontal,
								y: (vX * sink + vY * cosk) * state.vertical
							}
						});
					} else if (Mouse.touchEnd) {
						//离开
						return Cateyes.ViewerCommondFactory.create('CMD_MARK_LEAVE');
					} else if ((!Mouse.isDowned || Mouse.isDowned && Mouse.touchStart) && !marker.getCreatingMark()) {
						//激活
						return Cateyes.ViewerCommondFactory.create('CMD_MARK_ACTIVE', {
							x: canvasMouse.x,
							y: canvasMouse.y
						});
					}
				}
			};
		}();

		//直线测量
		ci.MARK_PYS_LENGTH = function () {
			return ci.MARK_CREATE_BASE({
				markType: 'PYS_LENGTH',
				create: Mouse.isDowned && Mouse.isMove && !Mouse.touchStart,
				creating: Mouse.isDowned
			});
		};

		//角度测量
		ci.MARK_PYS_ANGLE = function () {
			return ci.MARK_CREATE_BASE({
				markType: 'PYS_ANGLE',
				create: Mouse.isDowned && Mouse.isMove && !Mouse.touchStart,
				creating: true,
				creatingCallback: function creatingCallback(params) {
					if (Mouse.isDowned) {
						return params;
					} else {
						return {
							ex: params.ex,
							ey: params.ey
						};
					}
				}
			});
		};

		//单点CT
		ci.MARK_CT_POINT = function () {
			return ci.MARK_CREATE_BASE({
				markType: 'CT_POINT',
				create: Mouse.isDowned && Mouse.touchStart,
				creating: Mouse.isDowned
			});
		};

		//箭头标注
		ci.MARK_ARROWS = function () {
			return ci.MARK_CREATE_BASE({
				markType: 'ARROWS',
				create: Mouse.isDowned && Mouse.isMove && !Mouse.touchStart,
				creating: Mouse.isDowned
			});
		};

		//矩形CT标注
		ci.MARK_CT_RECT = function () {
			return ci.MARK_CREATE_BASE({
				markType: 'CT_RECT',
				create: Mouse.isDowned && Mouse.isMove && !Mouse.touchStart,
				creating: Mouse.isDowned
			});
		};

		//椭圆CT标注
		ci.MARK_CT_ELLIPSE = function () {
			return ci.MARK_CREATE_BASE({
				markType: 'CT_ELLIPSE',
				create: Mouse.isDowned && Mouse.isMove && !Mouse.touchStart,
				creating: Mouse.isDowned
			});
		};

		//手涂区域CT
		ci.MARK_CT_SCRAWL = function () {
			return ci.MARK_CREATE_BASE({
				markType: 'CT_SCRAWL',
				create: Mouse.isDowned && Mouse.isMove && !Mouse.touchStart,
				creating: Mouse.isDowned
			});
		};

		//涂鸦
		ci.MARK_SCRAWL = function () {
			return ci.MARK_CREATE_BASE({
				markType: 'SCRAWL',
				create: Mouse.isDowned && Mouse.isMove && !Mouse.touchStart,
				creating: Mouse.isDowned
			});
		};

		/******************************** 进阶功能 ******************************/

		//MPR重建
		ci.MPR_REBUILD = function () {
			return function () {
				var currentViewer = Cateyes.ViewerManager.getCurrentViewer();
				if (currentViewer) {
					var currentSeries = currentViewer.getSeries();
					if (currentSeries) {
						//分三窗
						Cateyes.ViewerManager.initGrid(0, 0);
						Cateyes.ViewerManager.initGrid(1, 3);
						//绑定同一序列
						Cateyes.ViewerManager.getViewerByIndex(0).setSeries(currentSeries).tinter.mpr('AXIAL');
						Cateyes.ViewerManager.getViewerByIndex(1).setSeries(currentSeries).tinter.mpr('CORONAL');
						Cateyes.ViewerManager.getViewerByIndex(2).setSeries(currentSeries).tinter.mpr('SAGITTAL');
					}
				}
			};
		};

		//放大镜
		ci.MAGNIFYING_GLASS = function () {
			var $magnifyingGlass,
			    width = 400,
			    height = 300;

			function initDom() {
				if (!$magnifyingGlass) {
					$magnifyingGlass = $('<div class="cateyes-magnifying-glass"><canvas></canvas></div>').css({
						'position': 'absolute',
						'width': width,
						'height': height,
						'border': '2px solid #09c',
						'z-index': 9999,
						'background': '#000'
					}).hide().appendTo($('body'));
					var cvs = $('canvas', $magnifyingGlass)[0];
					cvs.width = width;
					cvs.height = height;
					$magnifyingGlass._canvas = cvs;
					$magnifyingGlass._context = cvs.getContext('2d');
					$magnifyingGlass._scale = 2;
				}
				return $magnifyingGlass;
			}
			return function () {
				var currentViewer = Cateyes.ViewerManager.getCurrentViewer(),
				    canvasMouse = currentViewer.positioner.getMouseXYofCanvas(Mouse.x, Mouse.y),
				    $glass = initDom();
				if (Mouse.touchEnd) {
					$glass.hide();
				} else if (Mouse.isDowned) {
					$glass._init = true;
					if (Mouse.touchStart) {
						$glass.show();
						$glass._init = false;
					}
					var left = Mouse.x - width - 50,
					    top = Mouse.y - height - 50;
					if (left < 0) {
						left = Mouse.x + 50;
					}
					if (top < 0) {
						top = Mouse.y + 50;
					}
					$glass.css({
						left: left,
						top: top
					});
				}
				return Cateyes.ViewerCommondFactory.create('CMD_MAGNIFYING_GLASS', {
					$container: $glass,
					x: canvasMouse.x,
					y: canvasMouse.y
				});
			};
		}();

		/******************************** 设置 ******************************/
		ci.TOGGLE_FULLSCREEN = function () {
			try {
				var isFullScreen = false,
				    docElm = window.top.document.documentElement,
				    doc = window.top.document,
				    funs = {
					open: function () {
						//W3C 
						if (docElm.requestFullscreen) {
							return function () {
								docElm.requestFullscreen();
							};
						}
						//FireFox 
						else if (docElm.mozRequestFullScreen) {
								return function () {
									docElm.mozRequestFullScreen();
								};
							}
							//Chrome等 
							else if (docElm.webkitRequestFullScreen) {
									return function () {
										docElm.webkitRequestFullScreen();
									};
								}
								//IE11 
								else if (elem.msRequestFullscreen) {
										return function () {
											elem.msRequestFullscreen();
										};
									}
					}(),
					close: function () {
						if (doc.exitFullscreen) {
							return function () {
								doc.exitFullscreen();
							};
						} else if (doc.mozCancelFullScreen) {
							return function () {
								doc.mozCancelFullScreen();
							};
						} else if (doc.webkitCancelFullScreen) {
							return function () {
								doc.webkitCancelFullScreen();
							};
						} else if (doc.msExitFullscreen) {
							return function () {
								doc.msExitFullscreen();
							};
						}
					}()
				};
				Cateyes.GlobalPubSub.subscribe('AFTER_TOGGLE_FULLSCREEN', function (isFull) {
					isFullScreen = isFull;
				});
				return function () {
					funs[(isFullScreen = !isFullScreen) ? 'open' : 'close']();
				};
			} catch (e) {}
		}();
		ci.TOGGLE_INFO = function () {
			return function () {
				var viewer = Cateyes.ViewerManager.getViewerByIndex(0);
				var infoP = viewer.getPlugins("QuadrangleInfo");
				infoP && infoP.toggleShow();
			};
		};

		ci.TOGGLE_POSITION_LINE = function () {
			return function () {
				var viewer = Cateyes.ViewerManager.getViewerByIndex(0);
				var pl = viewer.getPlugins("PositionLine");
				pl && pl.toggleShow();
			};
		};
	})();

/***/ }),
/* 304 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * 标注
	 */
	(function () {

		var Cateyes = window.Cateyes || (window.Cateyes = {});

		/**
	  * 标注池
	  * @type {Object}
	  */
		var MarkPool = {};

		var MarkFactory = Cateyes.MarkFactory = {
			TYPES: {},
			regist: function regist(type, markConstructor) {
				markConstructor.prototype.TYPE = type;
				return this.TYPES[type] = markConstructor;
			},
			create: function create(type, params) {
				if (this.TYPES[type]) {
					MarkPool[type] = MarkPool[type] || [];
					var mark;
					if (MarkPool[type].length) {
						mark = MarkPool[type].shift();
						mark.setParams(params);
					} else {
						mark = new this.TYPES[type](params);
						mark.id = Cateyes.UniqueID();
						mark.type = type;
					}
					return mark;
				}
			}
		};

		/**
	  * 标注器
	  */
		var Marker = Cateyes.namespace('Cateyes.Marker', Cateyes.ClassHelper.extend(Cateyes.PubSub, function (viewer, params) {
			this.init(viewer, params);
		}, {
			/**
	   * 初始化
	   * @param  {[type]} params [description]
	   * @return {[type]}        [description]
	   */
			init: function init(viewer, params) {
				this.viewer = viewer;
				this.params = this.params || {};
				this.initEvent();
				this.inited = true;
			},
			initEvent: function initEvent() {
				if (!this.inited) {
					var self = this;
					this.viewer.subscribe('AFTER_RENDER_DICOM', function () {
						self.getCurrentDicom().then(function () {
							self.refresh();
						});
					});
					this.viewer.subscribe('AFTER_MARK_CHANGE', function () {
						self.synchronizeCloud();
						self.refreshBusiness();
					});
					this.viewer.subscribe('AFTER_MARK_RENDER', function () {
						self.synchronizeCloud();
					});
				}
			},
			getSeriesInfo: function getSeriesInfo() {
				return this.viewer.getSeries().getInfo();
			},
			getCurrentDicom: function getCurrentDicom() {
				return this.viewer.player.getCurrentDicom();
			},
			setCurrentMark: function setCurrentMark(mark) {
				this._currentMark = mark;
			},
			getCurrentMark: function getCurrentMark() {
				return this._currentMark;
			},
			setCreatingMark: function setCreatingMark(mark) {
				this._creatingMark = mark;
			},
			getCreatingMark: function getCreatingMark() {
				return this._creatingMark;
			},
			getMarks: function getMarks() {
				var dicom;
				if (dicom = this.viewer.player.getCurrentDicom()) {
					return this.viewer.player.getCurrentDicom().marks || (this.viewer.player.getCurrentDicom().marks = []);
				}
			},
			setMarks: function setMarks(marks) {
				var dicom;
				if (dicom = this.viewer.player.getCurrentDicom()) {
					this.viewer.player.getCurrentDicom().marks = marks || [];
				}
			},
			/**
	   * 添加标注
	   */
			addMark: function addMark(markInfo, isCurrent) {
				if (markInfo) {
					var mark,
					    toCreate = true;
					//特殊处理：涂鸦标注唯一
					if (markInfo.type == 'CT_SCRAWL') {
						var marks = this.getMarks(),
						    have = false;
						for (var i = 0, m; m = marks[i++];) {
							if (m.type == markInfo.type) {
								toCreate = false;
								m.destory();
								mark = m;
								break;
							}
						}
					}
					if (toCreate) {
						mark = MarkFactory.create(markInfo.type, markInfo.params);
						this.getMarks().push(mark);
					}
					this.refresh();
					if (isCurrent) {
						this.setCurrentMark(mark);
					}
					this.viewer.publish('AFTER_MARK_CHANGE');
					return mark;
				}
			},
			/**
	   * 创建标注
	   * @return {[type]} [description]
	   */
			creatingMark: function creatingMark(params) {
				var mark = this.getCreatingMark();
				if (mark) {
					mark.setParams(params);
					this.refresh();
					this.viewer.publish('AFTER_MARK_RENDER');
				}
			},
			/**
	   * 完成创建
	   * @return {[type]} [description]
	   */
			createdMark: function createdMark() {
				var mark = this.getCreatingMark();
				if (mark) {
					var a = mark.isCreated(this._getMarkCanvas(), this);
					a && this.setCreatingMark(null);
					Cateyes.GlobalPubSub.publish('AFTER_MARK_CREATED', mark);
					return a;
				}
			},
			/**
	   * 更新标注
	   * @return {[type]} [description]
	   */
			refreshMark: function refreshMark(params) {
				var mark = this.getCurrentMark();
				if (mark) {
					if (mark.isMove()) {
						mark.move(params);
					} else if (mark.isModify()) {
						mark.modify(params);
					}
					this.refresh();
					this.viewer.publish('AFTER_MARK_RENDER');
				}
			},
			/**
	   * 激活
	   * @return {[type]} [description]
	   */
			active: function active(params) {
				var marks = this.getMarks(),
				    a;
				if (marks) {
					for (var i = 0, m; m = marks[i++];) {
						if (!a) {
							a = m.focus(params, this);
						} else {
							m.blur();
						}
					}
					this.setCurrentMark(a);
					var haveSomeActive = !!a,
					    self = this;
					if (this._lastHaveSomeActive != haveSomeActive) {
						this.getCurrentDicom().then(function () {
							self.refresh();
						});
						this._lastHaveSomeActive = haveSomeActive;
					}
				}
				return !!a;
			},
			refresh: function refresh(silent) {
				this._clear();
				this._reDraw();
			},
			_clear: function _clear() {
				var cvs = this._getMarkCanvas();
				cvs.context.clearRect(0, 0, cvs.width, cvs.height);
			},
			_reDraw: function _reDraw() {
				var marks = this.getMarks(),
				    cvs = this._getMarkCanvas();
				if (marks) {
					for (var i = 0, m; m = marks[i++];) {
						m.draw(cvs, this);
					}
				}
			},
			revoke: function revoke() {
				var m = this.getMarks().pop();
				m && m.remove();
				this.refresh();
				this.viewer.publish('AFTER_MARK_CHANGE');
			},
			clear: function clear() {
				var marks = this.getMarks();
				while (marks.length) {
					marks.pop().remove();
				}
				this.refresh();
				this.viewer.publish('AFTER_MARK_CHANGE');
			},
			/**
	   * 获取标注画布
	   * @return {[type]} [description]
	   */
			_getMarkCanvas: function _getMarkCanvas() {
				var self = this;
				return this.viewer.getCanvas('MARK', 2, function (viewer) {
					var dicomCanvas = viewer.getCanvas('DICOM'),
					    $dicomCanvas = dicomCanvas.$el,
					    position = viewer.positioner.getDicomCanvasPosition();
					if (this.width != position.width || this.height != position.height) {
						this.width = position.width;
						this.height = position.height;
						self._reDraw();
					}
					var stl = this.style,
					    buff = [];
					buff.push("scale(");
					buff.push(position.horizontal > 0 ? 1 : -1);
					buff.push(",");
					buff.push(position.vertical > 0 ? 1 : -1);
					buff.push(") rotate(");
					buff.push(position.rotate * position.horizontal * position.vertical);
					buff.push("deg)");
					buff = buff.join("");
					// 兼容各浏览器
					stl.transform = buff;
					stl.oTransform = buff;
					stl.msTransform = buff;
					stl.mozTransform = buff;
					stl.webkitTransform = buff;
					this.$el.css({
						'margin-top': position.top - this.height / 2,
						'margin-left': position.left - this.width / 2
					});
				});
			},
			/**
	   * 锁住画布尺寸(坐标转换失效)
	   * @return {[type]} [description]
	   */
			lockSize: function lockSize(flag) {
				this._lockSize = !!flag;
			},
			/**
	   * 将DICOM坐标转换为标注画布坐标
	   * @param  {[type]} s [description]
	   * @return {[type]}   [description]
	   */
			covertPositionForMark: function covertPositionForMark(s, key) {
				if (this._lockSize) {
					return s;
				}
				var state = this.viewer.positioner.getState();
				if (Cateyes.Utils.isObject(s)) {
					var obj = {};
					for (var k in s) {
						if (s.hasOwnProperty(k)) {
							obj[k] = s[k] * state.scale;
							if (k.indexOf('x') == k.length - 1) {
								obj[k] *= state.horizontal;
							} else if (k.indexOf('y') == k.length - 1) {
								obj[k] *= state.vertical;
							}
						}
					}
					return obj;
				} else if (Cateyes.Utils.isArray(s)) {
					var arr = [],
					    scale = state.scale,
					    temp;
					for (var i = 0, l = s.length; i < l; i++) {
						temp = s[i] * state.scale;
						arr[i] = i % 2 == 0 ? temp *= state.horizontal : temp *= state.vertical;
					}
					return arr;
				} else {
					s *= state.scale;
					if (key.indexOf('x') == key.length - 1) {
						s *= state.horizontal;
					} else if (key.indexOf('y') == key.length - 1) {
						s *= state.vertical;
					}
					return s;
				}
			},
			/**
	   * 获取状态JSON信息
	   * @return {[type]} [description]
	   */
			synchronizeCloud: function synchronizeCloud() {
				if (Cateyes.CatCloud.isOnline()) {
					Cateyes.SocketPubSub.publish(Cateyes.SOCKET_EVENTS.SK_SEND_MESSAGE, this.getJson());
				}
			},
			getJson: function getJson() {
				var json = {};
				var marks = this.getMarks(),
				    marksJson = [];
				for (var i = 0, m; m = marks[i++];) {
					marksJson.push(m.serialize());
				}
				json['VIEWER_' + this.viewer.getViewerId() + '|marker'] = JSON.stringify({
					marks: marksJson
				});
				return json;
			},
			setJson: function setJson(json) {
				var params = JSON.parse(json),
				    marksJson = params.marks,
				    marks = [];
				for (var i = 0, m; m = marksJson[i++];) {
					marks.push(MarkFactory.create(m.type, m.params));
				}
				this.setMarks(marks);
				this.refresh();
				this.viewer.publish(Cateyes.CustomEvents.REFRESH_MARK_TAG);
			},
			/**
	   * 业务层传递参数
	   * @param  {[type]} ) {		var       cvs [description]
	   * @return {[type]}   [description]
	   */
			refreshBusiness: function refreshBusiness() {
				var cpb;
				if (cpb = window.parent.window.CateyesPubSub) {
					var allStudies = Cateyes.DicomService.getAllStudies();
					var markDicomCount = 0;
					if (allStudies && allStudies.length) {
						var serieses, dicoms;
						for (var i = 0, study; study = allStudies[i++];) {
							serieses = study.serieses;
							if (serieses) {
								for (var j = 0, series; series = serieses[j++];) {
									dicoms = series._dicoms;
									if (dicoms) {
										for (var k = 0, dicom; dicom = dicoms[k++];) {
											if (dicom.marks && dicom.marks.length) {
												markDicomCount++;
											}
										}
									}
								}
							}
						}
					}
					cpb.trigger('AFTER_CATEYES_MARK', [markDicomCount]);
				}
			}

		}));

		//静态离屏Canvas
		Marker.getOffScreenCanvasBuffer = function () {
			var cvs = document.createElement('canvas'),
			    panel;
			cvs.context = cvs.getContext('2d');
			cvs.style.display = 'none';
			return function (width, height) {
				if (cvs.width == width && cvs.height == height && panel) {
					return panel;
				} else {
					cvs.width = width;
					cvs.height = height;
					return panel = cvs.context.getImageData(0, 0, width, height);
				}
			};
		}();

		// 全局常量
		var LINE_WIDTH = 2,
		    // 线粗
		POINT_RADIUS = 10,
		    // 触点半径
		NORMAL_COLOR = '#40E829',
		    ACTIVE_COLOR = '#F6E93B',
		    BORDER_WIDTH = 1.5,
		    BORDER_COLOR = "#000",
		    NORMAL_POINT_COLOR = "#CC0032",
		    // 常规触点颜色
		ACTIVE_POINT_COLOR = "#ECC41C",
		    // 激活触点颜色
		FONT_COLOR = "#E9363A",
		    // 文字颜色
		FONT_STYLE = "bold 14px arial,sans-serif",
		    // 文字样式
		ELLIPSE_POINT_X = 2 / 3,
		    // 椭圆斜率
		ELLIPSE_POINT_Y = Math["sqrt"](5 / 9);

		/**
	  * 标注基类
	  */
		var Mark = function Mark(params) {
			this.setParams(params);
		};
		Mark.prototype = {
			baseStyle: {
				COMMON_MARK_ALPHA: 0.2, //标记法透明值
				NORMAL_LINE_COLOR: '#00dddb',
				ACTIVE_LINE_COLOR: '#74fc8d',
				NORMAL_LINE_WIDTH: 2,
				NORMAL_POINT_COLOR: '#74fc8d',
				ACTIVE_POINT_COLOR: '#e9ff8f',
				CIRCLE_POINT_RADIUS: Cateyes.isPlat('PC') ? 7 : 12,
				POINT_RADIUS: 3,
				NORMAL_FONTPANEL_COLOR: '#7dfffe',
				ACTIVE_FONTPANEL_COLOR: '#7dfffe',
				NORMAL_FONT_COLOR: '#FBF41C',
				ACTIVE_FONT_COLOR: '#e745e9',
				NORMAL_FONT_STYLE: 'normal 14px arial,sans-serif',
				NORMAL_TEXT_BG_COLOR: 'RGBA(133,52,77,0.9)',
				ACTIVE_TEXT_BG_COLOR: 'RGBA(163,82,107,0.9)'
			},
			/**
	   * 设置参数
	   * @param {[type]} params [description]
	   */
			setParams: function setParams(params, init) {
				this.params = $.extend({}, this.params || this.defaults, params);
				this.style = $.extend({}, this.baseStyle, this.defaultStyle, this.style, params.style);
				if (Cateyes.Utils.isDefined(this.params._)) {
					var _ = this.params._;
					for (var k in _) {
						this.params[k] = eval(this.params[k] + _[k]);
					}
					delete this.params._;
				}
				init && this.blur();
				this.updateTime = new Date().getTime();
			},
			isCreated: function isCreated() {
				return true;
			},
			startMove: function startMove() {
				this.moveStartParams = $.extend(true, {}, this.params);
			},
			/**
	   * 移动
	   * @param  {[type]} params [description]
	   * @return {[type]}        [description]
	   */
			move: function move(params) {
				this._move(params);
				this.updateTime = new Date();
			},
			/**
	   * 移动策略
	   * @return {[type]} [description]
	   */
			_move: function _move(params) {
				var posXAttrs = ['sx', 'ex', 'ax'],
				    posYAttrs = ['sy', 'ey', 'ay'],
				    _ = params._;
				if (!this.moveStartParams) {
					this.moveStartParams = this.params;
				}
				var tp = this.params = $.extend(true, {}, this.moveStartParams);
				if (_) {
					for (var i = 0, k; k = posXAttrs[i++];) {
						if (tp.hasOwnProperty(k)) {
							tp[k] = eval(tp[k] + _.x);
						}
					}
					for (var i = 0, k; k = posYAttrs[i++];) {
						if (tp.hasOwnProperty(k)) {
							tp[k] = eval(tp[k] + _.y);
						}
					}
				}
			},
			/**
	   * 修改
	   */
			modify: function modify(params) {
				if (!this.moveStartParams) {
					this.moveStartParams = this.params;
				}
				this.params = $.extend(true, {}, this.moveStartParams);
				this._modify(params);
				this.updateTime = new Date().getTime();
			},
			/**
	   * 修改策略
	   * @return {[type]} [description]
	   */
			_modify: function _modify() {
				throw new Error('getModify 方法未在子类中实现');
			},
			/**
	   * 绘制
	   * @return {[type]} [description]
	   */
			draw: function draw() {
				this._draw.apply(this, [].slice.call(arguments));
				this.drawTime = new Date().getTime();
			},
			_draw: function _draw() {
				throw new Error('draw 方法未在子类中实现');
			},
			/**
	   * 是否变化
	   * @return {Boolean} [description]
	   */
			isChanged: function isChanged() {
				return !(this.drawTime && this.updateTime && this.drawTime > this.updateTime);
			},
			refreshChanged: function refreshChanged() {
				this.updateTime = new Date().getTime();
			},
			/**
	   * 移除
	   * @return {[type]} [description]
	   */
			remove: function remove() {
				MarkPool[this.TYPE].push(this);
				this.destory();
			},
			destory: function destory() {},
			focus: function focus(params, marker) {
				this.blur();
				//测量结果激活判定
				this.measureResultFoucs(params, marker);
				//调用子类的激活判断
				this._focus(params, marker);
				if (this.isMove() || this.isModify()) {
					this.startMove();
					return this;
				}
			},
			isActive: function isActive() {
				return this._isMove || this._isModify;
			},
			isMove: function isMove() {
				return this._isMove;
			},
			isModify: function isModify() {
				return this._isModify;
			},
			blur: function blur() {
				this._isMove = this._isModify = false;
				this._blur();
			},
			_blur: function _blur() {
				throw new Error('_blur 方法未在子类中实现');
			},
			/**
	   * 绘制测量结果
	   * @param  {[type]} cvs  [description]
	   * @param  {[type]} text [description]
	   * @return {[type]}      [description]
	   */
			drawMeasureResult: function drawMeasureResult(cvs, pos, marker) {
				var text = this.getText(cvs, marker);
				if (!text) {
					return;
				}
				var ctx = cvs.context,
				    style = this.style;
				var state = this._calculateTextBgSize(text, style.NORMAL_FONT_STYLE);
				if (pos.x + state.width > cvs.width) {
					pos.x -= state.width;
				}
				ctx.save();
				//1.绘制背景
				ctx.beginPath();
				ctx.fillStyle = this.isActive() ? style.ACTIVE_TEXT_BG_COLOR : style.NORMAL_TEXT_BG_COLOR;
				ctx.rect(pos.x, pos.y, state.width, state.height);
				ctx.fill();
				//2.绘制文字
				ctx.fillStyle = style.NORMAL_FONT_COLOR;
				ctx.font = style.NORMAL_FONT_STYLE;
				var textY = pos.y + 14 + 2;
				for (var i = 0, t; t = text[i++];) {
					ctx.fillText(t, pos.x + 3, textY);
					textY += 14 + 2;
				}
				ctx.restore();
				this.MeasureResultPosition = $.extend(state, pos);
			},
			/**
	   * 测量结果激活判定
	   */
			measureResultFoucs: function measureResultFoucs(params, marker) {
				var pos;
				if (pos = this.MeasureResultPosition) {
					var cp = marker.covertPositionForMark({
						x: params.x,
						y: params.y
					});
					if (Cateyes.MathUtils.isBetween(cp.x, pos.x, pos.x + pos.width) && Cateyes.MathUtils.isBetween(cp.y, pos.y, pos.y + pos.height)) {
						this._isMove = true;
					}
				}
			},
			/**
	   * 计算文字容器的尺寸
	   */
			_calculateTextBgSize: function _calculateTextBgSize(text, fontStyle) {
				var html = ['<div style="position:absolute;">'];
				for (var i = 0, t; t = text[i++];) {
					html.push('<div>' + t + '</div>');
				}
				html.push('</div>');
				var $el = $(html.join('')).css({
					visibility: 'hidden',
					font: fontStyle
				}).appendTo($('body'));
				var state = {
					width: $el.width() + 6,
					height: $el.height() + 6 + 2 * (text.length - 1)
				};
				$el.remove();
				return state;
			},
			/**
	   * 获取标注测量结果文本
	   * @return {[type]} [description]
	   */
			getText: function getText() {
				var text = this._text;
				if (!text || this.isChanged()) {
					text = this._text = this._getText.apply(this, [].slice.call(arguments));
				}
				return text;
			},
			_getText: function _getText() {
				throw new Error('_getText 方法未在子类中实现');
			},
			serialize: function serialize() {
				return {
					type: this.type,
					params: this.params
				};
			}
		};
		Mark.prototype.contrunctor = Mark;

		//直线测量
		MarkFactory.regist('PYS_LENGTH', Cateyes.ClassHelper.extend(Mark, function (params) {
			this.setParams(params, true);
		}, {
			defaults: {
				sx: 0,
				sy: 0,
				ex: 0,
				ey: 0
			},
			_draw: function _draw(canvas, marker) {
				var ctx = canvas.context,
				    params = this.params,
				    style = this.style,
				    cp = marker.covertPositionForMark({
					sx: params.sx,
					sy: params.sy,
					ex: params.ex,
					ey: params.ey
				});
				ctx.save();
				// line
				ctx.beginPath();
				ctx.lineWidth = style.NORMAL_LINE_WIDTH;
				ctx.strokeStyle = style.lineColor;
				ctx.moveTo(cp.sx, cp.sy);
				ctx.lineTo(cp.ex, cp.ey);
				ctx.stroke();
				// point
				ctx.strokeStyle = ctx.fillStyle = style.startPointColor;
				ctx.beginPath();
				ctx.arc(cp.sx, cp.sy, style.CIRCLE_POINT_RADIUS, 0, Math.PI * 2, true);
				ctx.stroke();
				ctx.beginPath();
				ctx.arc(cp.sx, cp.sy, 2, 0, Math.PI * 2, true);
				ctx.fill();
				ctx.closePath();
				ctx.strokeStyle = ctx.fillStyle = style.endPointColor;
				ctx.beginPath();
				ctx.arc(cp.ex, cp.ey, style.CIRCLE_POINT_RADIUS, 0, Math.PI * 2, true);
				ctx.stroke();
				ctx.beginPath();
				ctx.arc(cp.ex, cp.ey, 2, 0, Math.PI * 2, true);
				ctx.fill();
				ctx.closePath();
				//text
				this.drawMeasureResult(canvas, {
					x: Math.max(cp.ex, cp.sx) + 15,
					y: (cp.ex > cp.sx ? cp.ey : cp.sy) - 35
				}, marker);
				ctx.restore();
			},
			_getText: function _getText(cvs, marker) {
				var currentDicom = marker.getCurrentDicom(),
				    params = this.params,
				    pixelSpacing = currentDicom.dicomInfo.pixelSpacing;
				return [Cateyes.MathUtils.measureHypotenuse((params.sx - params.ex) * pixelSpacing[0], (params.sy - params.ey) * (pixelSpacing[1] || pixelSpacing[0])).toFixed(2) + 'mm'];
			},
			/**
	   * 激活
	   * @param  {[type]} params [description]
	   * @param  {[type]} marker [description]
	   * @return {[type]}        [description]
	   */
			_focus: function _focus(params, marker) {
				var thisParams = this.params,
				    style = this.style,
				    cp = marker.covertPositionForMark({
					sx: thisParams.sx,
					sy: thisParams.sy,
					ex: thisParams.ex,
					ey: thisParams.ey,
					cx: params.x,
					cy: params.y
				});
				if (Cateyes.MathUtils.getDistance(cp.cx, cp.cy, cp.sx, cp.sy) <= style.CIRCLE_POINT_RADIUS + 5) {
					this._activePoint = 'START';
					style.startPointColor = style.ACTIVE_POINT_COLOR;
					this._isModify = true;
				} else if (Cateyes.MathUtils.getDistance(cp.cx, cp.cy, cp.ex, cp.ey) <= style.CIRCLE_POINT_RADIUS + 5) {
					this._activePoint = 'END';
					style.endPointColor = style.ACTIVE_POINT_COLOR;
					this._isModify = true;
				} else {
					this._isMove = this._isMove || Cateyes.MathUtils.verticalLineLength(cp.cx, cp.cy, cp.sx, cp.sy, cp.ex, cp.ey) <= 10 && Cateyes.MathUtils.isBetween(cp.cx, cp.sx, cp.ex) && Cateyes.MathUtils.isBetween(cp.cy, cp.sy, cp.ey);
					if (this._isMove) {
						style.lineColor = style.ACTIVE_LINE_COLOR;
					}
				}
			},
			_blur: function _blur() {
				var style = this.style;
				this._activePoint = null;
				style.startPointColor = style.endPointColor = style.NORMAL_POINT_COLOR;
				style.lineColor = style.NORMAL_LINE_COLOR;
			},
			/**
	   * 修改
	   * @param  {[type]} params [description]
	   * @return {[type]}        [description]
	   */
			_modify: function _modify(params) {
				if (this._activePoint == 'START') {
					this.params.sx = eval(this.params.sx + params._.x);
					this.params.sy = eval(this.params.sy + params._.y);
				} else if (this._activePoint == 'END') {
					this.params.ex = eval(this.params.ex + params._.x);
					this.params.ey = eval(this.params.ey + params._.y);
				}
			}
		}));

		//角度测量
		MarkFactory.regist('PYS_ANGLE', Cateyes.ClassHelper.extend(Mark, function (params) {
			this.setParams(params, true);
		}, {
			defaults: {
				sx: 0,
				sy: 0,
				ex: 0,
				ey: 0,
				ax: null,
				ay: null
			},
			_draw: function _draw(canvas, marker) {
				var ctx = canvas.context,
				    params = this.params,
				    style = this.style,
				    creating = params.ax == null,
				    cp = marker.covertPositionForMark({
					sx: params.sx,
					sy: params.sy,
					ex: params.ex,
					ey: params.ey,
					ax: creating ? params.ex : params.ax,
					ay: creating ? params.ey : params.ay
				}),
				    sx = cp.sx,
				    sy = cp.sy,
				    ex = cp.ex,
				    ey = cp.ey,
				    ax = cp.ax,
				    ay = cp.ay;
				ctx.save();
				// line
				ctx.beginPath();
				ctx.lineWidth = style.NORMAL_LINE_WIDTH;
				ctx.strokeStyle = style.lineColor;
				ctx.moveTo(sx, sy);
				ctx.lineTo(ax, ay);
				ctx.lineTo(ex, ey);
				ctx.stroke();
				// point
				var points = ["start", "angle", "end"];
				for (var i = 0; i < 3; i++) {
					ctx.strokeStyle = ctx.fillStyle = style[points[i] + "PointColor"];
					ctx.beginPath();
					var x = cp[points[i][0] + "x"],
					    y = cp[points[i][0] + "y"];
					ctx.arc(x, y, style.CIRCLE_POINT_RADIUS, 0, Math.PI * 2, true);
					ctx.stroke();
					ctx.beginPath();
					ctx.arc(x, y, 2, 0, Math.PI * 2, true);
					ctx.fill();
					ctx.closePath();
				}
				ctx.strokeStyle = FONT_COLOR;
				if (!creating) {
					// text
					this.drawMeasureResult(canvas, {
						x: (ex + sx + ax) / 3,
						y: (ey + sy + ay) / 3
					}, marker);
				}
				ctx.restore();
			},
			_getText: function _getText(cvs, marker) {
				var params = this.params;
				var angle = parseInt(Cateyes.MathUtils.getAngle(params.sx, params.sy, params.ex, params.ey, params.ax, params.ay));
				return [(isNaN(angle) ? '0' : angle) + "°"];
			},
			isCreated: function isCreated() {
				if (this.params.ax == null) {
					this.params.ax = this.params.ex;
					this.params.ay = this.params.ey;
				} else {
					return true;
				}
			},
			/**
	   * 激活
	   * @param  {[type]} params [description]
	   * @param  {[type]} marker [description]
	   * @return {[type]}        [description]
	   */
			_focus: function _focus(params, marker) {
				var thisParams = this.params,
				    style = this.style,
				    cp = marker.covertPositionForMark({
					sx: thisParams.sx,
					sy: thisParams.sy,
					ex: thisParams.ex,
					ey: thisParams.ey,
					ax: thisParams.ax,
					ay: thisParams.ay,
					cx: params.x,
					cy: params.y
				});
				if (Cateyes.MathUtils.getDistance(cp.cx, cp.cy, cp.sx, cp.sy) <= 10) {
					this._activePoint = 'START';
					style.startPointColor = style.ACTIVE_POINT_COLOR;
					this._isModify = true;
				} else if (Cateyes.MathUtils.getDistance(cp.cx, cp.cy, cp.ex, cp.ey) <= 10) {
					this._activePoint = 'END';
					style.endPointColor = style.ACTIVE_POINT_COLOR;
					this._isModify = true;
				} else if (Cateyes.MathUtils.getDistance(cp.cx, cp.cy, cp.ax, cp.ay) <= 10) {
					this._activePoint = 'ANGLE';
					style.anglePointColor = style.ACTIVE_POINT_COLOR;
					this._isModify = true;
				} else {
					this._isMove = this._isMove || Cateyes.MathUtils.verticalLineLength(cp.cx, cp.cy, cp.sx, cp.sy, cp.ex, cp.ey) <= 10;
					if (this._isMove) {
						style.lineColor = style.ACTIVE_LINE_COLOR;
					}
				}
			},
			_blur: function _blur() {
				var style = this.style;
				this._activePoint = null;
				style.startPointColor = style.endPointColor = style.anglePointColor = style.NORMAL_POINT_COLOR;
				style.lineColor = style.NORMAL_LINE_COLOR;
			},
			/**
	   * 修改
	   * @param  {[type]} params [description]
	   * @return {[type]}        [description]
	   */
			_modify: function _modify(params) {
				if (this._activePoint == 'START') {
					this.params.sx = eval(this.params.sx + params._.x);
					this.params.sy = eval(this.params.sy + params._.y);
				} else if (this._activePoint == 'END') {
					this.params.ex = eval(this.params.ex + params._.x);
					this.params.ey = eval(this.params.ey + params._.y);
				} else if (this._activePoint == 'ANGLE') {
					this.params.ax = eval(this.params.ax + params._.x);
					this.params.ay = eval(this.params.ay + params._.y);
				}
			}
		}));

		//单点CT测量标注
		MarkFactory.regist('CT_POINT', Cateyes.ClassHelper.extend(Mark, function (params) {
			this.setParams(params, true);
		}, {
			defaults: {
				sx: 0,
				sy: 0
			},
			defaultStyle: {
				r: 5,
				fillStyle: 'rgba(83,83,82,0.7)',
				strokeStyle: '#ababab'
			},
			_draw: function _draw(canvas, marker) {
				var ctx = canvas.context,
				    params = this.params,
				    style = this.style,
				    sx = params.sx,
				    sy = params.sy,
				    msx = marker.covertPositionForMark(sx, 'msx'),
				    msy = marker.covertPositionForMark(sy, 'msy');
				// //point
				ctx.save();
				ctx.lineWidth = style.lineWidth;
				ctx.strokeStyle = style.NORMAL_TEXT_BG_COLOR;
				ctx.fillStyle = style.NORMAL_TEXT_BG_COLOR;
				ctx.beginPath();
				ctx.arc(msx, msy, 2, 0, Math.PI * 2, true);
				ctx.fill();
				ctx.beginPath();
				ctx.moveTo(msx, msy);
				ctx.lineTo(msx + 10, msy - 10);
				ctx.stroke();
				ctx.restore();
				//text
				this.drawMeasureResult(canvas, {
					x: msx + 10,
					y: msy - 31
				}, marker);
			},
			_getText: function _getText(cvs, marker) {
				var params = this.params,
				    seriesInfo = marker.getSeriesInfo(),
				    currentDicom = marker.getCurrentDicom();
				if (seriesInfo.samplesPerPixel == 1) {
					//灰度图
					var gray = currentDicom.getPixelData()[Math.round(params.sy) * currentDicom.dicomInfo.width + Math.round(params.sx)];
					return currentDicom.dicomInfo.deviceType == 'CT' ? [Cateyes.DicomHelper.grayToCT(gray, currentDicom.dicomInfo) + 'Hu' + '(' + Math.round(params.sx) + ',' + Math.round(params.sy) + ')'] : [gray + '(' + Math.round(params.sx) + ',' + Math.round(params.sy) + ')'];
				} else {
					return null;
				}
			},
			_focus: function _focus(params, marker) {
				var thisParams = this.params,
				    cp = marker.covertPositionForMark({
					sx: thisParams.sx,
					sy: thisParams.sy,
					cx: params.x,
					cy: params.y
				});
				this._isMove = this._isMove || Cateyes.MathUtils.isBetween(cp.cx, cp.sx + 3, cp.sx + 53) && Cateyes.MathUtils.isBetween(cp.cy, cp.sy - 30, cp.sy - 10);
			},
			_blur: function _blur() {
				this._isMove = false;
			}
		}));

		//矩形CT测量
		MarkFactory.regist('CT_RECT', Cateyes.ClassHelper.extend(Mark, function (params) {
			this.setParams(params, true);
		}, {
			defaults: {
				sx: 0,
				sy: 0,
				ex: 0,
				ey: 0,
				POINT_HALF_WIDTH: 3,
				POINTS: ["LT", "RT", "RB", "LB"],
				POINTS_OFFSET: [0, 0, 1, 0, 1, 1, 0, 1]
			},
			_draw: function _draw(canvas, marker) {
				var ctx = canvas.context,
				    params = this.params,
				    style = this.style,
				    cp = marker.covertPositionForMark({
					sx: params.sx,
					sy: params.sy,
					ex: params.ex,
					ey: params.ey
				}),
				    sx = cp.sx,
				    sy = cp.sy,
				    ex = cp.ex,
				    ey = cp.ey,
				    w = ex - sx,
				    h = ey - sy,
				    r = style.POINT_RADIUS,
				    d = 2 * r;
				ctx.save();
				// line
				ctx.beginPath();
				ctx.lineWidth = style.NORMAL_LINE_WIDTH;
				ctx.strokeStyle = style.lineColor;
				ctx.strokeRect(sx, sy, w, h);
				// point
				var points = params.POINTS,
				    offsets = params.POINTS_OFFSET;
				for (var i = 0, l = points.length; i < l; i++) {
					ctx.fillStyle = style[points[i]];
					ctx.fillRect(sx + offsets[i * 2] * w - r, sy + offsets[i * 2 + 1] * h - r, d, d);
				}
				ctx.restore();
				//text
				this.drawMeasureResult(canvas, {
					x: Math.max(cp.sx, cp.ex) + 10,
					y: Math.min(cp.sy, cp.ey) - 65
				}, marker);
			},
			_getText: function _getText(cvs, marker) {
				// 计算区域内平平均CT值
				var params = this.params,
				    x1 = Math.round(Math.min(params.sx, params.ex)),
				    x2 = Math.round(Math.max(params.sx, params.ex)),
				    y1 = Math.round(Math.min(params.sy, params.ey)),
				    y2 = Math.round(Math.max(params.sy, params.ey)),
				    currentDicom = marker.getCurrentDicom(),
				    columns = currentDicom.dicomInfo.width,
				    slope = currentDicom.dicomInfo.rescaleSlope,
				    intercept = currentDicom.dicomInfo.rescaleIntercept,
				    pixels = currentDicom.getPixelData(),
				    offset,
				    temp,
				    cts = [];
				for (var i = y1; i < y2; i++) {
					offset = i * columns;
					for (var j = x1; j < x2; j++) {
						if (!isNaN(temp = pixels[offset + j])) {
							cts.push(temp * slope + intercept);
						}
					}
				}
				var ctObj = Cateyes.MathUtils.measureMeanAndSD(cts);
				var text = [];
				text.push("Min / Max：" + ctObj.min + " / " + ctObj.max);
				text.push("Mean ± SD：" + ctObj.mean + " ± " + ctObj.sd);
				// 面积
				text.push("AREA：" + Cateyes.MathUtils.measureArea(currentDicom.dicomInfo.pixelSpacing[0] * currentDicom.dicomInfo.pixelSpacing[1], cts.length));
				return text;
			},
			_points: {
				LT: ['sx', 'sy'],
				RT: ['ex', 'sy'],
				LB: ['sx', 'ey'],
				RB: ['ex', 'ey']
			},
			_focus: function _focus(params, marker) {
				var thisParams = this.params,
				    style = this.style,
				    cp = marker.covertPositionForMark({
					sx: thisParams.sx,
					sy: thisParams.sy,
					ex: thisParams.ex,
					ey: thisParams.ey,
					cx: params.x,
					cy: params.y
				});
				var ps = this._points;
				for (var k in ps) {
					if (ps.hasOwnProperty(k)) {
						if (Cateyes.MathUtils.getDistance(cp.cx, cp.cy, cp[ps[k][0]], cp[ps[k][1]]) <= 10) {
							this._activePoint = k;
							style[k] = style.ACTIVE_POINT_COLOR;
							this._isModify = true;
							return;
						}
					}
				}
				this._isMove = this._isMove || Cateyes.MathUtils.verticalLineLength(cp.cx, cp.cy, cp.sx, cp.sy, cp.sx, cp.ey) <= 10 && Cateyes.MathUtils.isBetween(cp.cy, cp.sy, cp.ey) || Cateyes.MathUtils.verticalLineLength(cp.cx, cp.cy, cp.sx, cp.sy, cp.ex, cp.sy) <= 10 && Cateyes.MathUtils.isBetween(cp.cx, cp.sx, cp.ex) || Cateyes.MathUtils.verticalLineLength(cp.cx, cp.cy, cp.ex, cp.ey, cp.sx, cp.ey) <= 10 && Cateyes.MathUtils.isBetween(cp.cx, cp.sx, cp.ex) || Cateyes.MathUtils.verticalLineLength(cp.cx, cp.cy, cp.ex, cp.ey, cp.ex, cp.sy) <= 10 && Cateyes.MathUtils.isBetween(cp.cy, cp.sy, cp.ey);
				if (this._isMove) {
					style.lineColor = style.ACTIVE_LINE_COLOR;
				}
			},
			_blur: function _blur() {
				var style = this.style;
				this._activePoint = null;
				style.lineColor = style.NORMAL_LINE_COLOR;
				style.LT = style.RT = style.LB = style.RB = style.NORMAL_POINT_COLOR;
			},
			/**
	   * 修改
	   * @param  {[type]} params [description]
	   * @return {[type]}        [description]
	   */
			_modify: function _modify(params) {
				var p = this._points[this._activePoint];
				if (p) {
					this.params[p[0]] = eval(this.params[p[0]] + params._.x);
					this.params[p[1]] = eval(this.params[p[1]] + params._.y);
				}
			}
		}));

		//椭圆CT测量
		MarkFactory.regist('CT_ELLIPSE', Cateyes.ClassHelper.extend(Mark, function (params) {
			this.setParams(params, true);
		}, {
			defaults: {
				sx: 0,
				sy: 0,
				ex: 0,
				ey: 0,
				POINT_HALF_WIDTH: 3,
				POINTS: ["LT", "RT", "RB", "LB"],
				POINTS_OFFSET: [-1, -1, 1, -1, 1, 1, -1, 1]
			},
			_draw: function _draw(canvas, marker) {
				var ctx = canvas.context,
				    params = this.params,
				    style = this.style,
				    cp = this._cp = marker.covertPositionForMark({
					sx: params.sx,
					sy: params.sy,
					ex: params.ex,
					ey: params.ey
				}),
				    sx = cp.sx,
				    sy = cp.sy,
				    ex = cp.ex,
				    ey = cp.ey,
				    a = cp.a = Math.abs(ex - sx) / 2,
				    b = cp.b = Math.abs(ey - sy) / 2,
				    x = (sx + ex) / 2,
				    y = (sy + ey) / 2,
				    r = style.POINT_RADIUS,
				    d = 2 * r,
				    ox = 0.5 * a,
				    oy = 0.6 * b;
				ctx.save();
				// line
				ctx.save();
				ctx.lineWidth = style.NORMAL_LINE_WIDTH;
				ctx.strokeStyle = style.lineColor;
				ctx.translate(x, y);
				ctx.beginPath();
				// 从椭圆纵轴下端开始逆时针方向绘制
				ctx.moveTo(0, b);
				ctx.bezierCurveTo(ox, b, a, oy, a, 0);
				ctx.bezierCurveTo(a, -oy, ox, -b, 0, -b);
				ctx.bezierCurveTo(-ox, -b, -a, -oy, -a, 0);
				ctx.bezierCurveTo(-a, oy, -ox, b, 0, b);
				ctx.closePath();
				ctx.stroke();
				ctx.restore();
				// point
				var points = params.POINTS,
				    offsets = params.POINTS_OFFSET;
				for (var i = 0, l = points.length; i < l; i++) {
					ctx.fillStyle = style[points[i]];
					ctx.fillRect(x + offsets[i * 2] * a - r, y + offsets[i * 2 + 1] * b - r, d, d);
				}
				ctx.restore();

				//text
				this.drawMeasureResult(canvas, {
					x: Math.max(cp.sx, cp.ex) + 10,
					y: Math.min(cp.sy, cp.ey) - 70
				}, marker);
			},
			_getText: function _getText(canvas, marker) {
				var params = this.params,
				    cp = this._cp,
				    currentDicom = marker.getCurrentDicom(),
				    scale = canvas.width * 1.0 / currentDicom.dicomInfo.width,
				    x1 = Math.round(Math.min(params.sx, params.ex)),
				    x2 = Math.round(Math.max(params.sx, params.ex)),
				    y1 = Math.round(Math.min(params.sy, params.ey)),
				    y2 = Math.round(Math.max(params.sy, params.ey)),
				    canvasWidth = canvas.width,
				    imageData = canvas.context.getImageData(0, 0, canvas.width, canvas.height),
				    pixels = imageData.data,
				    alp255 = Math.floor(255 * this.style.COMMON_MARK_ALPHA),
				    min = alp255 - 5,
				    max = alp255 + 5,
				    offset,
				    index,
				    gray,
				    alp,
				    points = [],
				    point,
				    cts = [];
				//椭圆内的点,计算CT
				var a = (x2 - x1) / 2,
				    aa = a * a,
				    b = (y2 - y1) / 2,
				    bb = b * b,
				    ox = (x2 + x1) / 2,
				    oy = (y2 + y1) / 2,
				    x,
				    y;
				x1 -= ox;
				x2 -= ox;
				y1 -= oy;
				y2 -= oy;
				var dicomWidth = currentDicom.dicomInfo.width,
				    dicomHeight = currentDicom.dicomInfo.height,
				    slope = currentDicom.dicomInfo.rescaleSlope,
				    intercept = currentDicom.dicomInfo.rescaleIntercept,
				    grayArray = marker.getCurrentDicom().getPixelData(),
				    ps,
				    x,
				    y,
				    gray;
				for (var i = y1; i < y2; i++) {
					for (var j = x1; j < x2; j++) {
						if (Math.pow(j, 2) / aa + Math.pow(i, 2) / bb < 1) {
							gray = grayArray[(i + oy) * dicomWidth + j + ox];
							if (!isNaN(gray)) {
								cts.push(gray * slope + intercept);
							}
						}
					}
				}
				var ctObj = Cateyes.MathUtils.measureMeanAndSD(cts),
				    text = [];
				text.push("Min / Max：" + ctObj.min + " / " + ctObj.max);
				text.push("Mean ± SD：" + ctObj.mean + " ± " + ctObj.sd);
				// 面积
				text.push("AREA：" + Cateyes.MathUtils.measureArea(currentDicom.dicomInfo.pixelSpacing[0] * currentDicom.dicomInfo.pixelSpacing[1], cts.length) + "(" + cts.length + " px)");
				return text;
			},
			_points: {
				LT: ['sx', 'sy'],
				RT: ['ex', 'sy'],
				LB: ['sx', 'ey'],
				RB: ['ex', 'ey']
			},
			_focus: function _focus(params, marker) {
				var thisParams = this.params,
				    style = this.style,
				    cp = marker.covertPositionForMark({
					sx: thisParams.sx,
					sy: thisParams.sy,
					ex: thisParams.ex,
					ey: thisParams.ey,
					cx: params.x,
					cy: params.y
				});
				var ps = this._points;
				for (var k in ps) {
					if (ps.hasOwnProperty(k)) {
						if (Cateyes.MathUtils.getDistance(cp.cx, cp.cy, cp[ps[k][0]], cp[ps[k][1]]) <= 10) {
							this._activePoint = k;
							style[k] = style.ACTIVE_POINT_COLOR;
							this._isModify = true;
							return;
						}
					}
				}
				this._isMove = this._isMove || Cateyes.MathUtils.verticalLineLength(cp.cx, cp.cy, cp.sx, cp.sy, cp.sx, cp.ey) <= 10 && Cateyes.MathUtils.isBetween(cp.cy, cp.sy, cp.ey) || Cateyes.MathUtils.verticalLineLength(cp.cx, cp.cy, cp.sx, cp.sy, cp.ex, cp.sy) <= 10 && Cateyes.MathUtils.isBetween(cp.cx, cp.sx, cp.ex) || Cateyes.MathUtils.verticalLineLength(cp.cx, cp.cy, cp.ex, cp.ey, cp.sx, cp.ey) <= 10 && Cateyes.MathUtils.isBetween(cp.cx, cp.sx, cp.ex) || Cateyes.MathUtils.verticalLineLength(cp.cx, cp.cy, cp.ex, cp.ey, cp.ex, cp.sy) <= 10 && Cateyes.MathUtils.isBetween(cp.cy, cp.sy, cp.ey);
				if (this._isMove) {
					style.lineColor = style.ACTIVE_LINE_COLOR;
				}
			},
			_blur: function _blur() {
				var style = this.style;
				this._activePoint = null;
				style.lineColor = style.NORMAL_LINE_COLOR;
				style.LT = style.RT = style.LB = style.RB = style.NORMAL_POINT_COLOR;
			},
			/**
	   * 修改
	   * @param  {[type]} params [description]
	   * @return {[type]}        [description]
	   */
			_modify: function _modify(params) {
				var p = this._points[this._activePoint];
				if (p) {
					this.params[p[0]] = eval(this.params[p[0]] + params._.x);
					this.params[p[1]] = eval(this.params[p[1]] + params._.y);
				}
			}
		}));

		//涂鸦CT测量
		MarkFactory.regist('CT_SCRAWL', Cateyes.ClassHelper.extend(Mark, function (params) {
			this.key = null;
			this.trace = [];
			this.setParams(params, true);
		}, {
			defaults: {
				sx: 0,
				sy: 0,
				ex: 0,
				ey: 0,
				POINT_HALF_WIDTH: 3,
				POINTS: ["LT", "RT", "RB", "LB"],
				POINTS_OFFSET: [-1, -1, 1, -1, 1, 1, -1, 1]
			},
			_draw: function _draw(canvas, marker) {
				var ctx = canvas.context,
				    params = this.params,
				    style = this.style,
				    key = params.sx + '-' + params.sy,
				    start = false;

				var LINE_WIDTH = 1;
				ctx.lineWidth = LINE_WIDTH;
				ctx.strokeStyle = "#00FF37";
				if (this.key != key) {
					this.key = key;
					this.trace = [params.sx, params.sy, params.ex, params.ey];
					this._minX = Math.min(params.sx, params.ex);
					this._maxX = Math.max(params.sx, params.ex);
					this._minY = Math.min(params.sy, params.ey);
					this._maxY = Math.max(params.sy, params.ey);
					start = true;
				} else {
					this.trace = this.trace || [];
					this.trace.splice(this.trace.length, 0, params.ex, params.ey);
					this._minX = Math.min(this._minX, params.ex);
					this._maxX = Math.max(this._maxX, params.ex);
					this._minY = Math.min(this._minY, params.ey);
					this._maxY = Math.max(this._maxY, params.ey);
				}

				var trace = marker.covertPositionForMark(this.trace);
				ctx.beginPath();
				ctx.moveTo(trace[0], trace[1]);
				for (var i = 2; i < trace.length; i += 2) {
					ctx.lineTo(trace[i], trace[i + 1]);
				}
				ctx.stroke();
				if (this._finished) {
					this.isCreated(canvas, marker);
				}
			},
			isCreated: function isCreated(canvas, marker) {
				var trace = this.trace,
				    ctx = canvas.context,
				    cp = marker.covertPositionForMark({
					sx: trace[trace.length - 2],
					sy: trace[trace.length - 1],
					ex: trace[0],
					ey: trace[1]
				});
				ctx.moveTo(cp.sx, cp.sy);
				ctx.lineTo(cp.ex, cp.ey);
				ctx.stroke();
				this._finished = true;

				ctx.save();
				ctx.fillStyle = "#000";
				ctx.globalAlpha = this.style.COMMON_MARK_ALPHA; // 标记区域信号
				ctx.fill();
				ctx.restore();
				//text
				var cp = this._cp = marker.covertPositionForMark({
					sx: this._minX,
					sy: this._minY,
					ex: this._maxX,
					ey: this._maxY
				});
				this.refreshChanged();
				this.drawMeasureResult(canvas, {
					x: (cp.sx + cp.ex >> 1) + 10,
					y: cp.ey + 10
				}, marker);
				return true;
			},
			destory: function destory() {
				this._finished = false;
				this.key = null;
				this.trace = [];
			},
			_getText: function _getText(canvas, marker) {
				var params = this.params,
				    cp = this._cp,
				    currentDicom = marker.getCurrentDicom(),
				    scale = canvas.width * 1.0 / currentDicom.dicomInfo.width,
				    x1 = Math.round(Math.min(cp.sx, cp.ex)),
				    x2 = Math.round(Math.max(cp.sx, cp.ex)),
				    y1 = Math.round(Math.min(cp.sy, cp.ey)),
				    y2 = Math.round(Math.max(cp.sy, cp.ey)),
				    canvasWidth = canvas.width,
				    imageData = canvas.context.getImageData(0, 0, canvas.width, canvas.height),
				    pixels = imageData.data,
				    alp255 = Math.floor(255 * this.style.COMMON_MARK_ALPHA),
				    min = alp255 - 5,
				    max = alp255 + 5,
				    offset,
				    index,
				    gray,
				    alp,
				    points = {},
				    point,
				    cts = [];
				//1.收集标记点
				for (var i = y1; i < y2; i++) {
					offset = i * canvasWidth;
					for (var j = x1; j < x2; j++) {
						index = offset * 4 + j * 4;
						gray = pixels[index];
						alp = pixels[index + 3];
						if (alp >= min && alp <= max) {
							pixels[index + 3] = 1; // 取消透明标记
							point = Math.round(j / scale) + ',' + Math.round(i / scale);
							points[point] = true;
						}
					}
				}
				//canvas.context.putImageData(imageData, 0, 0);
				//2.计算CT
				var dicomWidth = currentDicom.dicomInfo.width,
				    dicomHeight = currentDicom.dicomInfo.height,
				    slope = currentDicom.dicomInfo.rescaleSlope,
				    intercept = currentDicom.dicomInfo.rescaleIntercept,
				    grayArray = marker.getCurrentDicom().getPixelData(),
				    ps,
				    x,
				    y,
				    gray;
				for (var p in points) {
					if (points.hasOwnProperty(p)) {
						ps = p.split(",");
						x = ps[0], y = ps[1];
						gray = grayArray[+y * dicomWidth + +x];
						if (!isNaN(gray)) {
							cts.push(gray * slope + intercept);
						}
					}
				}
				var ctObj = Cateyes.MathUtils.measureMeanAndSD(cts);
				var text = [];
				text.push("Min / Max：" + ctObj.min + " / " + ctObj.max);
				text.push("Mean ± SD：" + ctObj.mean + " ± " + ctObj.sd);
				// 面积
				text.push("AREA：" + Cateyes.MathUtils.measureArea(currentDicom.dicomInfo.pixelSpacing[0] * currentDicom.dicomInfo.pixelSpacing[1], cts.length) + "(" + cts.length + " px)");
				return text;
			},
			_points: {
				LT: ['sx', 'sy'],
				RT: ['ex', 'sy'],
				LB: ['sx', 'ey'],
				RB: ['ex', 'ey']
			},
			_focus: function _focus(params, marker) {
				this._isMove = false;
			},
			_blur: function _blur() {},
			/**
	   * 修改
	   * @param  {[type]} params [description]
	   * @return {[type]}        [description]
	   */
			_modify: function _modify(params) {}
		}));

		//涂鸦
		MarkFactory.regist('SCRAWL', Cateyes.ClassHelper.extend(Mark, function (params) {
			this.setParams(params, true);
		}, {
			defaults: {
				sx: 0,
				sy: 0,
				ex: 0,
				ey: 0,
				POINT_HALF_WIDTH: 3,
				POINTS: ["LT", "RT", "RB", "LB"],
				POINTS_OFFSET: [-1, -1, 1, -1, 1, 1, -1, 1]
			},
			_draw: function _draw(canvas, marker) {
				var ctx = canvas.context,
				    params = this.params,
				    style = this.style;

				var LINE_WIDTH = 1;
				ctx.lineWidth = LINE_WIDTH;
				ctx.strokeStyle = "#00FF37";
				var trace = this.params.trace || (this.params.trace = []);
				trace.splice(trace.length, 0, params.ex, params.ey);
				trace = marker.covertPositionForMark(trace);
				ctx.beginPath();
				ctx.moveTo(trace[0], trace[1]);
				for (var i = 2; i < trace.length; i += 2) {
					ctx.lineTo(trace[i], trace[i + 1]);
				}
				ctx.stroke();
				if (this._finished) {
					this.isCreated(canvas, marker);
				}
			},
			isCreated: function isCreated(canvas, marker) {
				canvas.context.stroke();
				this._finished = true;
				return true;
			},
			destory: function destory() {
				this._finished = false;
				this.params.trace = [];
			},
			_focus: function _focus(params, marker) {
				this._isMove = false;
			},
			_blur: function _blur() {}
		}));

		//箭头标注
		MarkFactory.regist('ARROWS', Cateyes.ClassHelper.extend(Mark, function (params) {
			this.setParams(params, true);
		}, {
			defaults: {
				sx: 0,
				sy: 0,
				ex: 0,
				ey: 0
			},
			_draw: function _draw(canvas, marker) {
				var ctx = canvas.context,
				    params = this.params,
				    sx = marker.covertPositionForMark(params.sx, 'sx'),
				    sy = marker.covertPositionForMark(params.sy, 'sy'),
				    ex = marker.covertPositionForMark(params.ex, 'ex'),
				    ey = marker.covertPositionForMark(params.ey, 'ey'),
				    dx = ex - sx,
				    dy = ey - sy,
				    rotation = Math["atan2"](dy, dx) + Math["PI"] / 2,
				    style = this.style;
				ctx.save();
				ctx.lineWidth = style.NORMAL_LINE_WIDTH;
				ctx.strokeStyle = style.NORMAL_LINE_COLOR;
				ctx.beginPath();
				ctx.moveTo(sx, sy);
				ctx.lineTo(ex, ey);
				ctx.fill();
				ctx.stroke();
				ctx.closePath();
				ctx.save();
				ctx.translate(ex, ey);
				ctx.rotate(rotation);
				ctx.lineWidth = style.NORMAL_LINE_WIDTH;
				ctx.beginPath();
				ctx.moveTo(0, 2);
				ctx.lineTo(-2, 4);
				ctx.lineTo(0, 0);
				ctx.lineTo(2, 4);
				ctx.lineTo(0, 2);
				ctx.closePath();
				ctx.stroke();
				ctx.restore();
				ctx.restore();
			},
			_focus: function _focus(params) {
				var tp = this.params;
				return Cateyes.MathUtils.isBetween(params.x, tp.sx, tp.ex) && Cateyes.MathUtils.isBetween(params.y, tp.sy, tp.ey);
			},
			_blur: function _blur() {}
		}));

		//文字标注
		MarkFactory.regist('TEXT', Cateyes.ClassHelper.extend(Mark, function (params) {
			this.setParams(params, true);
		}, {
			defaults: {
				sx: 0,
				sy: 0,
				ex: 0,
				ey: 0
			},
			_draw: function _draw(canvas, marker) {
				var ctx = canvas.context,
				    params = this.params,
				    sx = marker.covertPositionForMark(params.sx, 'sx'),
				    sy = marker.covertPositionForMark(params.sy, 'sy'),
				    style = this.style;
				//text
				this.drawMeasureResult(canvas, {
					x: sx,
					y: sy
				}, marker);
			},
			_getText: function _getText(cvs, marker) {
				return [this.params.text];
			},
			_focus: function _focus(params) {
				var tp = this.params;
				return Cateyes.MathUtils.isBetween(params.x, tp.sx, tp.ex) && Cateyes.MathUtils.isBetween(params.y, tp.sy, tp.ey);
			},
			_blur: function _blur() {}
		}));
	})();

/***/ }),
/* 305 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 *websokct 消息解析器
	 *
	 * 
	 * 
	 */

	(function () {

		var Cateyes = window.Cateyes || (window.Cateyes = {});

		Cateyes.MessageResolver = {
			analysis: function analysis(msg) {
				if (msg && msg.length) {
					msg = JSON.parse(msg);
					var temp, obj, params;
					for (var alias in msg) {
						obj = this._getObj(alias);
						obj.setJson(msg[alias]);
					}
				}
			},
			_getObj: function _getObj(alias) {
				var temp = alias.split("|");
				if (temp.length == 1) {
					if (alias.indexOf('VIEWER_') == 0) {
						var viewer = Cateyes.ViewerManager.getViewerById(temp[0].split("_")[1]);
						return viewer;
					} else if (alias == "VIEWERMANAGER") {
						return Cateyes.ViewerManager;
					}
				} else {
					var viewer = Cateyes.ViewerManager.getViewerById(temp[0].split("_")[1]);
					return Cateyes.Utils.getAttribute(viewer, temp[1]);
				}
			},
			_getParams: function _getParams(params) {
				return JSON.parse(params);
			}
		};
	})();

/***/ }),
/* 306 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * dicom播放器
	 */
	(function () {
		var Cateyes = window.Cateyes || (window.Cateyes = {});

		var Player = Cateyes.Player = Cateyes.ClassHelper.extend(Cateyes.PubSub, function (viewer) {
			this.viewer = viewer;
			this.init();
		}, {
			/**
	   * 初始化
	   * @return {[type]} [description]
	   */
			init: function init() {
				this._initDom();
				var series = this.viewer.getSeries();
				if (series) {
					this.dicomIterator = series.getIterator();
					this.state.index = 0;
					this.calculateTotal();
					this.refreshProgress();
					this.refreshMarkFragment();
					this.refreshSlider();
					this.viewer.publish(Cateyes.CustomEvents.AFTER_BROWSE_DICOM);
					this.viewer.render();
				}
				this.inited = true;
			},
			_initDom: function _initDom() {
				if (!this.inited) {
					this.state = {
						index: 0,
						total: 0,
						fps: 10
					};
					var $header = this.viewer.$header,
					    $progressBar = this.$progressBar = $('<div class="cateyes-searcher-progressbar"></div>').appendTo($header),
					    $progress = this.$progress = $('<div class="cateyes-searcher-progress"></div>').appendTo($progressBar),
					    $slider = this.$slider = $('<div class="cateyes-searcher-slider"></div>').appendTo($progressBar),
					    self = this;
					Cateyes.GlobalPubSub.subscribe(Cateyes.CustomEvents.AFTER_DICOM_LOADED, function (params) {
						self.refreshProgress(params);
						//DSC自动播放
						if (params.loaded == params.total) {
							var series = self.viewer.getSeries();
							if (series && series.info.seriesInstanceUID == params.series.info.seriesInstanceUID && series.info.autoPlay) {
								self.togglePlay(true);
							}
						}
					});
					this.viewer.subscribe(Cateyes.CustomEvents.AFTER_BIND_SERIES, function (series) {
						self.init();
					});
					this.viewer.subscribe(Cateyes.CustomEvents.AFTER_MARK_CHANGE, function () {
						self.refreshMarkFragment();
					});
					this.viewer.subscribe(Cateyes.CustomEvents.REFRESH_MARK_TAG, function () {
						self.refreshMarkFragment();
					});
					this.viewer.subscribe(Cateyes.CustomEvents.AFTER_MPR_REBUILD, function () {
						self.calculateTotal();
					});
					Cateyes.GlobalPubSub.subscribe(Cateyes.CustomEvents.AFTER_SINGLE_MARK_CHANGE, function (params) {
						var series = self.viewer.getSeries();
						if (series && params && params.viewerId != self.viewer.id && params.seriesInstanceUID == series.info.seriesInstanceUID) {
							self._drawMarkFragment(params.index, true);
						}
					});
					this._initEvent();
				} else {
					this.$progress.width(0);
				}
			},
			_initEvent: function _initEvent() {
				var $header = this.viewer.$header,
				    $progressBar = this.$progressBar,
				    $slider = this.$slider,
				    self = this;
				$header.on(Cateyes.EVENTS.CLICK, function (ev) {
					if (ev.originalEvent) {
						ev = ev.originalEvent;
					}
					var mx = ((ev.touches || [])[0] || ev).pageX,
					    offset = $header.offset();
					self.jump(Math.floor((mx - offset.left) / $progressBar.width() * self.state.total));
					return false;
				});
			},
			getState: function getState() {
				return this.state;
			},
			getProgressBar: function getProgressBar() {
				return this.$progressBar;
			},
			/**
	   * 刷新进度
	   * @param  {[type]} params [description]
	   * @return {[type]}        [description]
	   */
			refreshProgress: function refreshProgress(params) {
				if (!params || params.series == this.viewer.getSeries()) {
					var itor;
					if (itor = this.dicomIterator) {
						var loadedCount = itor.getLoadedCount(),
						    total = this.state.total;
						this.$progress.width(loadedCount * 1.0 / total * 100 + '%');
						if (loadedCount == total) {
							this.refreshMarkFragment();
						}
					}
				}
			},
			/**
	   * 刷新游标
	   * @return {[type]} [description]
	   */
			refreshSlider: function refreshSlider() {
				var index = this.state.index,
				    total = this.state.total,
				    singleWidth = 100 / total;
				this.$slider.css({
					'left': (index + 0.5) * singleWidth + '%',
					'right': 'auto'
				});
			},
			/**
	   * 标注片段
	   * @return {[type]} [description]
	   */
			refreshMarkFragment: function refreshMarkFragment() {
				var series = this.viewer.getSeries();
				if (series) {
					var dicoms = series.getLoaded();
					if (dicoms && dicoms.length) {
						for (var index in dicoms) {
							this._drawMarkFragment(index);
						}
					}
				}
			},
			_drawMarkFragment: function _drawMarkFragment(index, silent) {
				index = +index;
				var dicom = this.dicomIterator.getByIndex(index),
				    marks = dicom && dicom.marks;
				if (marks && marks.length) {
					var $frag = $('.mark-fragment-' + index, this.$progressBar);
					if (!$frag.length) {
						var total = this.state.total,
						    singleWidth = 100 / total;
						$frag = $('<div class="cateyes-mark-fragment mark-fragment-' + index + '"></div>').css({
							left: (index + 0.5) * singleWidth + '%'
						}).appendTo(this.$progressBar);
					}
					$frag.addClass('marked');
				} else {
					$('.mark-fragment-' + index, this.$progressBar).remove();
				}
				if (!silent) {
					Cateyes.GlobalPubSub.publish(Cateyes.CustomEvents.AFTER_SINGLE_MARK_CHANGE, {
						viewerId: this.viewer.id,
						seriesInstanceUID: this.viewer.getSeries().info.seriesInstanceUID,
						index: index,
						markCount: marks && marks.length || 0
					});
				}
			},
			/**
	   * 获取当前Dicom
	   * @return {[type]} [description]
	   */
			getCurrentDicom: function getCurrentDicom() {
				return this.dicomIterator && (this.dicomIterator.getByIndex(this.state.index) || this.dicomIterator.getByIndex(0));
			},
			getStep: function getStep() {
				return this._step || 1;
			},
			setStep: function setStep(step) {
				return this._step = step || 1;
			},

			prev: function prev(silent) {
				this.dicomIterator && this.jump(this.state.index - this.getStep(), silent, 'prev');
			},
			next: function next(silent) {
				this.dicomIterator && this.jump(this.state.index + this.getStep(), silent, 'next');
			},
			jump: function jump(index, silent, ev) {
				if (!this.dicomIterator) {
					return;
				}
				var total = this.state.total;
				index = index % total;
				if (index < 0) {
					index += total;
				}
				var itr = this.dicomIterator,
				    from = itr.getIndex(),
				    lastItem = itr.getCurrent(),
				    item = itr.gotoIndex(this.state.index = index);
				//if (item && lastItem != item) {
				this.refreshSlider();
				this.viewer.render();
				if (silent) {
					this.viewer.publish(Cateyes.CustomEvents.AFTER_BROWSE_DICOM_SILIENT);
				} else {
					silent || this.viewer.publish(Cateyes.CustomEvents.AFTER_BROWSE_DICOM, {
						event: ev || 'jump',
						from: from,
						to: index,
						total: total
					});
				}
				//}
				silent || this.synchronizeCloud();
			},
			calculateTotal: function calculateTotal() {
				var orientation = this.viewer.tinter.state.orientation,
				    series = this.viewer.getSeries(),
				    total = 0,
				    currentIndex = this.state.index;
				if (orientation == series.info.orientation) {
					total = series.getTotal();
				} else {
					if (series.info.orientation == 'AXIAL') {
						if (orientation == 'CORONAL') {
							total = series.info.height;
						} else {
							total = series.info.width;
						}
					} else {
						if (orientation == 'AXIAL') {
							total = series.info.height;
						} else {
							total = series.info.width;
						}
					}
					//this.state.index = total / 2;
				}
				if (currentIndex >= total) {
					this.state.index = 0;
				}
				this.state.total = total;
			},
			getIndex: function getIndex() {
				return this.state.index;
			},
			getTotal: function getTotal() {
				return this.state.total;
			},
			isPlaying: function isPlaying() {
				return !!this.state.playing && !this.state.pause;
			},
			togglePlay: function togglePlay(forcePlay) {
				this.state.fps = this.viewer.getSeries().info.recommendedDisplayFrameRate || this.state.fps;
				if (forcePlay) {
					this.play();
				} else {
					this[this.state.playing ? 'stop' : 'play']();
				}
				Cateyes.GlobalPubSub.publish(Cateyes.CustomEvents.AFTER_VIEWER_STATUS_CHANGE);
				this.viewer.publish(Cateyes.CustomEvents.AFTER_PLAY_OR_STOP);
			},
			play: function play() {
				this.state.playing = true;
				this.state.pause = false;
				if (this.state.playing) {
					this._play();
				} else {
					this.stop();
				}
				this.viewer.getPlugins('PlayControl');
			},
			stop: function stop() {
				this.state.playing = false;
				this.state.pause = false;
				if (this._playTimer) {
					clearTimeout(this._playTimer);
				}
			},
			pause: function pause() {
				this.state.pause = true;
				if (this._playTimer) {
					clearTimeout(this._playTimer);
				}
			},
			_play: function _play() {
				var self = this;
				if (this._playTimer) {
					clearTimeout(this._playTimer);
				}
				if (this.isPlaying()) {
					this._playTimer = setTimeout(function () {
						self.next();
						self._play();
					}, 1000 * 1.0 / this.state.fps);
				}
			},
			/**
	   * 云同步
	   * @return {[type]} [description]
	   */
			synchronizeCloud: function synchronizeCloud() {
				if (Cateyes.CatCloud.isOnline()) {
					Cateyes.SocketPubSub.publish(Cateyes.SOCKET_EVENTS.SK_SEND_MESSAGE, this.getJson());
				}
			},
			getJson: function getJson() {
				var json = {};
				json['VIEWER_' + this.viewer.getViewerId() + '|player'] = JSON.stringify(this.state);
				return json;
			},
			setJson: function setJson(json) {
				var params = JSON.parse(json);
				this.jump(params.index, true);
				this.viewer.publish(Cateyes.CustomEvents.AFTER_BROWSE_DICOM);
			}
		});
	})();

/***/ }),
/* 307 */
/***/ (function(module, exports) {

	'use strict';

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * 插件管理器
	 */
	(function () {
		var _TOP;

		var Cateyes = window.Cateyes || (window.Cateyes = {});

		/**
	  * 插件工厂
	  * @type {[type]}
	  */
		var PluginFactory = Cateyes.PluginFactory = {
			TYPES: {},
			regist: function regist(type, constructor) {
				constructor.prototype.TYPE = type;
				return this.TYPES[type] = constructor;
			},
			create: function create(type, viewer, params) {
				if (this.TYPES[type]) {
					return new this.TYPES[type](viewer, params);
				}
			}
		};

		/**
	  * 插件基类
	  */
		var Plugin = function Plugin() {};
		Plugin.prototype = {
			init: function init(viewer) {
				this.viewer = viewer;
				this.initDom(this.viewer);
			},
			show: function show() {
				throw new Error('show 方法未在子类中实现');
			},
			hide: function hide() {
				throw new Error('hide 方法未在子类中实现');
			}
		};
		Plugin.prototype.constructor = Plugin;

		/**
	  * 四角信息插件
	  */
		var HIDE_PATIENT_INFO = !(Cateyes.getQueryString('show') == 'true');
		var QuadrangleInfoConfig = {
			PC: {
				LT: [{
					display: "IM",
					name: "instanceNumber",
					prop: "IM：<<{{player.state.index}}+1>> / {{player.state.total}}",
					level: "DICOM"
				}, {
					display: "SE",
					name: "seriesNumber",
					prop: "SE：{{_series.info.seriesNumber}}",
					level: "SERIES"
				}, {
					display: "姓名",
					name: "patientName",
					prop: "{{_series.info.studyInfo.name}}",
					level: "SERIES",
					isHide: HIDE_PATIENT_INFO
				}, {
					display: "性别",
					name: "patientSex",
					prop: "<<{'0':'男','1':'女','2':'未知'}[{{_series.info.studyInfo.sex}}]>>",
					level: "SERIES"
				}, {
					display: "年龄",
					name: "patientAge",
					prop: "{{_series.info.studyInfo.age}}岁",
					level: "SERIES"
				},
				// {
				// 	display: "身高",
				// 	name: "patientSize",
				// 	prop: "HEGHT:{{_series.info.studyInfo.height}}",
				// 	level: "SERIES"
				// }, {
				// 	display: "体重",
				// 	name: "patientWeight",
				// 	prop: "WEIGHT:{{_series.info.studyInfo.weight}}",
				// 	level: "SERIES"
				// },
				// 				
				{
					display: "检查描述",
					name: "studyDescription",
					prop: "{{_series.info.studyInfo.studyDescription}}",
					level: "SERIES"
				}, {
					display: "序列描述",
					name: "seriesDescription",
					prop: "{{_series.info.extensions.SeriesDescription}}",
					level: "SERIES"
				}, {
					display: "设备类型",
					name: "modality",
					prop: "{{_series.info.deviceType}}",
					level: "SERIES"
				}, {
					display: "患者编号",
					name: "patientNo",
					prop: "患者编号:{{_series.info.studyInfo.patientId}}",
					level: "SERIES",
					isHide: HIDE_PATIENT_INFO
				}, {
					display: "检查号",
					name: "studyNo",
					prop: "检查号:{{_series.info.studyInfo.studyId}}",
					level: "SERIES",
					isHide: HIDE_PATIENT_INFO
				}],
				RT: [],
				LB: [{
					display: "",
					name: "scale",
					prop: "ZOOM：<<Math.floor({{positioner.state.scale}}*100)>>%&nbsp;&nbsp;&nbsp;<<{{positioner.state.rotate}}%360?('ANGLE：'+({{positioner.state.rotate}}%360<0?({{positioner.state.rotate}}%360+360):{{positioner.state.rotate}}%360)):''>>",
					level: "RENDER"
				}, {
					display: "",
					name: "window",
					prop: "WW：{{tinter.state.windowWidth}} WC：{{tinter.state.windowCenter}}",
					level: "RENDER"
				}, {
					display: "",
					name: "SliceThickness",
					prop: "T: <<{{_series.info.extensions.SliceThickness}}>> mm", // L：<<(+{{player.dicomIterator.getCurrent.info.sliceLocation}}).toFixed(1)>> mm
					level: "DICOM"
				}, {
					display: "KVP",
					name: "KVP",
					prop: "KVP: <<{{_series.info.extensions.KVP}}>>", // L：<<(+{{player.dicomIterator.getCurrent.info.sliceLocation}}).toFixed(1)>> mm
					level: "DICOM"
				}, {
					display: "",
					name: "XRayTubeCurrent",
					prop: "XRayTubeCurrent: <<{{_series.info.extensions.XRayTubeCurrent}}>>", // L：<<(+{{player.dicomIterator.getCurrent.info.sliceLocation}}).toFixed(1)>> mm
					level: "DICOM"
				}, {
					display: "",
					name: "SeriesDescription",
					prop: "SeriesDescription: <<{{_series.info.extensions.SeriesDescription}}>>", // L：<<(+{{player.dicomIterator.getCurrent.info.sliceLocation}}).toFixed(1)>> mm
					level: "DICOM"
				}, {
					display: "",
					name: "RepetitionTime",
					prop: "RepetitionTime: <<{{_series.info.extensions.RepetitionTime}}>>", // L：<<(+{{player.dicomIterator.getCurrent.info.sliceLocation}}).toFixed(1)>> mm
					level: "DICOM"
				}, {
					display: "",
					name: "EchoTime",
					prop: "EchoTime: <<{{_series.info.extensions.EchoTime}}>>", // L：<<(+{{player.dicomIterator.getCurrent.info.sliceLocation}}).toFixed(1)>> mm
					level: "DICOM"
				}],
				RB: [{
					display: "检查日期",
					name: "studyDate",
					prop: "<<new Date('{{_series.info.seriesDate}}').format('yyyy-MM-dd')>>",
					level: "SERIES",
					isHide: HIDE_PATIENT_INFO
				}, {
					display: "医院",
					name: "hospital",
					prop: "{{_series.info.studyInfo.hospital}}",
					level: "SERIES",
					isHide: HIDE_PATIENT_INFO
				}]
			},
			PHONE: {
				LT: [
				//{
				//		display: "SE",
				//		name: "seriesNumber",
				//		prop: "SE：{{_series.info.seriesNumber}}",
				//		level: "SERIES"
				//	},  {
				// 		display: "姓名",
				// 		name: "patientName",
				// 		prop: "* * *", //{{_series.info.studyInfo.name}}
				// 		level: "SERIES"
				// 	}, 
				{
					display: "性别",
					name: "patientSex",
					prop: "<<{'0':'男','1':'女','2':'未知'}[{{_series.info.studyInfo.sex}}]>>",
					level: "SERIES"
				}, {
					display: "年龄",
					name: "patientAge",
					prop: "AGE:{{_series.info.studyInfo.age}}",
					level: "SERIES"
				},
				// {
				// 	display: "身高",
				// 	name: "patientSize",
				// 	prop: "HEGHT:{{_series.info.studyInfo.height}}",
				// 	level: "SERIES"
				// }, {
				// 	display: "体重",
				// 	name: "patientWeight",
				// 	prop: "WEIGHT:{{_series.info.studyInfo.weight}}",
				// 	level: "SERIES"
				// },
				{
					display: "检查描述",
					name: "studyDescription",
					prop: "{{_series.info.studyInfo.studyDescription}}",
					level: "SERIES"
				}, {
					display: "序列描述",
					name: "seriesDescription",
					prop: "{{_series.info.seriesDescription}}",
					level: "SERIES"
				}, {
					display: "设备类型",
					name: "modality",
					prop: "{{_series.info.deviceType}}",
					level: "SERIES"
				}, {
					display: "检查日期",
					name: "studyDate",
					prop: "<<new Date('{{_series.info.seriesDate}}').format('yyyy-MM-dd')>>",
					level: "SERIES"
				}],
				RT: [],
				LB: [{
					display: "",
					name: "scale",
					prop: "ZOOM：<<Math.floor({{positioner.state.scale}}*100)>>%&nbsp;&nbsp;&nbsp;<<{{positioner.state.rotate}}%360?('ANGLE：'+({{positioner.state.rotate}}%360<0?({{positioner.state.rotate}}%360+360):{{positioner.state.rotate}}%360)):''>>",
					level: "RENDER"
				}, {
					display: "",
					name: "window",
					prop: "WW：{{tinter.state.windowWidth}} WC：{{tinter.state.windowCenter}}",
					level: "RENDER"
				}, {
					display: "",
					name: "sliceLocation",
					prop: "T: <<(+{{_series.info.sliceThickness}}).toFixed(1)>> mm", // L：<<(+{{player.dicomIterator.getCurrent.info.sliceLocation}}).toFixed(1)>> mm
					level: "DICOM"
				}, {
					display: "KVP",
					name: "KVP",
					prop: "KVP: <<{{_series.info.extensions.KVP}}>>", // L：<<(+{{player.dicomIterator.getCurrent.info.sliceLocation}}).toFixed(1)>> mm
					level: "DICOM"
				}, {
					display: "",
					name: "XRayTubeCurrent",
					prop: "XRayTubeCurrent: <<{{_series.info.extensions.XRayTubeCurrent}}>>", // L：<<(+{{player.dicomIterator.getCurrent.info.sliceLocation}}).toFixed(1)>> mm
					level: "DICOM"
				}, {
					display: "",
					name: "SeriesDescription",
					prop: "SeriesDescription: <<{{_series.info.extensions.SeriesDescription}}>>", // L：<<(+{{player.dicomIterator.getCurrent.info.sliceLocation}}).toFixed(1)>> mm
					level: "DICOM"
				}, {
					display: "",
					name: "RepetitionTime",
					prop: "RepetitionTime: <<{{_series.info.extensions.RepetitionTime}}>>", // L：<<(+{{player.dicomIterator.getCurrent.info.sliceLocation}}).toFixed(1)>> mm
					level: "DICOM"
				}, {
					display: "",
					name: "EchoTime",
					prop: "EchoTime: <<{{_series.info.extensions.EchoTime}}>>", // L：<<(+{{player.dicomIterator.getCurrent.info.sliceLocation}}).toFixed(1)>> mm
					level: "DICOM"
				}],
				RB: [],
				MINI: [{
					display: "WW",
					name: "WW",
					prop: "WW:{{tinter.state.windowWidth}}",
					level: "RENDER"
				}, {
					display: "WC",
					name: "WC",
					prop: "WC:{{tinter.state.windowCenter}}",
					level: "RENDER"
				}],
				TOP: [{
					display: "IM",
					name: "instanceNumber",
					prop: "<<{{player.state.index}}+1>> / {{player.state.total}}",
					level: "DICOM"
				}]
			}
		};
		PluginFactory.regist('QuadrangleInfo', Cateyes.ClassHelper.extend(Plugin, function (viewer, params) {
			this.init(viewer, params);
		}, {
			QUADRANGLE_INFO: QuadrangleInfoConfig[Cateyes.getPlat()],
			css: {
				LT: {
					'left': '0px',
					'top': '0px'
				},
				RT: {
					'right': '0px',
					'top': '0px',
					'text-align': 'right'
				},
				LB: {
					'left': '0px',
					'bottom': Cateyes.getPlat() == 'PHONE' ? '25px' : '0px'
				},
				RB: {
					'right': '0px',
					'bottom': '0px',
					'text-align': 'right'
				},
				MINI: {
					'left': '0px',
					'top': '5px',
					'text-align': 'left'
				},
				TOP: (_TOP = {
					'left': '50%',
					'top': '5px',
					'text-align': 'left',
					'font-size': '18px',
					'margin-left': '-40px'
				}, _defineProperty(_TOP, 'text-align', 'center'), _defineProperty(_TOP, 'width', '80px'), _TOP)
			},
			init: function init(viewer) {
				this.viewer = viewer;
				this.initDom();
				this.initEvent();
				this[this.state.isShow ? 'show' : 'hide']();
				this.inited = true;
			},
			initDom: function initDom(viewer) {
				var viewer = this.viewer,
				    $container = viewer.getContainer(),
				    self = this;
				var cache = this.cache = {};
				for (var k in this.QUADRANGLE_INFO) {
					$container.append(this._generate(this.QUADRANGLE_INFO[k], k).addClass('cateyes-plugin-quadrangleinfo').css(this.css[k]));
				}
				//cache
				for (var k in this.QUADRANGLE_INFO) {
					for (var i = 0, t; t = this.QUADRANGLE_INFO[k][i++];) {
						cache[t.level] = cache[t.level] || [];
						cache[t.level].push($(".cateyes-plugin-quadrangle-" + t.name, $container).data('prop', t.prop));
					}
				}
			},
			initEvent: function initEvent() {
				if (!this.inited) {
					var self = this;
					this.viewer.subscribe(Cateyes.CustomEvents.AFTER_BIND_SERIES, function () {
						self.refreshInfo('SERIES');
					});
					this.viewer.subscribe(Cateyes.CustomEvents.AFTER_BROWSE_DICOM, function () {
						self.refreshInfo('DICOM');
					});
					this.viewer.subscribe(Cateyes.CustomEvents.AFTER_BROWSE_DICOM_SILIENT, function () {
						self.refreshInfo('DICOM');
					});
					this.viewer.subscribe(Cateyes.CustomEvents.AFTER_RENDER_DICOM, function () {
						self.refreshInfo('RENDER');
					});
					this.viewer.subscribe(Cateyes.CustomEvents.ON_DICOM_CANVAS_RESIZE, function () {
						self.refreshInfo('RENDER');
					});
				}
			},
			_generate: function _generate(items, pos) {
				var html = ['<ul class="cateyes-plugin-quadrangle-ul cateyes-plugin-quadrangle-' + pos + '">'];
				for (var i = 0, item; item = items[i++];) {
					if (item.isHide) {
						continue;
					}
					html.push('<li><span class="cateyes-plugin-quadrangle cateyes-plugin-quadrangle-' + item.name + '">' + this._getValue(item.prop) + '</span></li>');
				}
				html.push('</ul>');
				return $(html.join(''));
			},
			_getValue: function _getValue(prop) {
				var viewer = this.viewer;
				if (!prop || !viewer.getSeries()) {
					return '';
				} else {
					try {
						var val = prop.replace(/\{\{.*?\}\}/g, function (a, b, c) {
							var attr = a.substring(2, a.length - 2);
							var v = Cateyes.Utils.getAttribute(viewer, attr);
							return v == void 0 ? '' : v;
						});
						val = val.replace(/\<\<.*?\>\>/g, function (a, b, c) {
							var attr = a.substring(2, a.length - 2);
							return eval('(' + attr + ')');
						});
						return val;
					} catch (e) {
						return '';
					}
				}
			},
			refreshInfo: function refreshInfo(level) {
				if (this.viewer && this.viewer.getSeries()) {
					var items = this.cache[level];
					if (items && items.length) {
						for (var i = 0, t; t = items[i++];) {
							t.html(this._getValue(t.data('prop')));
						}
					}
				}
			},
			state: {
				isShow: true //(Cateyes.getPlat() != 'PHONE')
			},
			show: function show() {
				$('.cateyes-plugin-quadrangle-ul', this.viewer.getContainer()).show();
				$('.cateyes-plugin-quadrangle-MINI', this.viewer.getContainer()).hide();
				$('.cateyes-plugin-quadrangle-TOP', this.viewer.getContainer()).show();
			},
			hide: function hide() {
				$('.cateyes-plugin-quadrangle-ul', this.viewer.getContainer()).hide();
				$('.cateyes-plugin-quadrangle-MINI', this.viewer.getContainer()).show();
				$('.cateyes-plugin-quadrangle-TOP', this.viewer.getContainer()).show();
			},
			toggleShow: function toggleShow() {
				$('.cateyes-plugin-quadrangle-ul', this.viewer.getContainer)[(this.state.isShow = !this.state.isShow) ? 'show' : 'hide']();
				$('.cateyes-plugin-quadrangle-MINI', this.viewer.getContainer())[this.state.isShow ? 'hide' : 'show']();
				$('.cateyes-plugin-quadrangle-TOP', this.viewer.getContainer()).show();
			}
		}));

		/**
	  * 播放控制插件
	  */
		PluginFactory.regist('PlayControl', Cateyes.ClassHelper.extend(Plugin, function (viewer, params) {
			this.init(viewer, params);
		}, {
			init: function init(viewer, params) {
				this.viewer = viewer;
				this.player = viewer.player;
				this._initDom();
				this._initEvent();
				//this[this.player.isPlaying() ? 'show' : 'hide']();
			},
			DOM: ['<ul class="cateyes-plugin-playcontrol">', '	<li><i title="第一张" class="icon-step-backward"></i></li>', '	<li><i title="减速" class="icon-backward"></i></li>', '	<li><i title="暂停" class="icon-play play-trigger"></i></li>', '	<li><i title="加速" class="icon-forward"></i></li>', '	<li><i title="最后一张" class="icon-step-forward"></i></li>', '	<li class="cateyes-plugin-playcontrol-fps">FPS:<span class="fps">0</span></li>', '</ul>'].join(''),
			_initDom: function _initDom() {
				var $container = this.viewer.getContainer();
				$container.append(this.$control = $(this.DOM));
				this.$fps = $('.fps', this.$control);
			},
			_initEvent: function _initEvent() {
				var self = this;
				this.viewer.subscribe(Cateyes.CustomEvents.AFTER_PLAY_OR_STOP, function () {
					self[self.player.isPlaying() ? 'show' : 'hide']();
				});
				this.$control.on(Cateyes.EVENTS.MOUSE_DOWN, 'i', function () {
					var $this = $(this),
					    player = self.player;
					if ($this.hasClass('icon-step-backward')) {
						player.jump(0);
					} else if ($this.hasClass('icon-backward')) {
						player.state.fps > 1 && player.state.fps--;
						self.refreshFps();
					} else if ($this.hasClass('icon-play')) {
						player.play();
						$this.removeClass('icon-play').addClass('icon-pause').attr('title', '暂停');
					} else if ($this.hasClass('icon-pause')) {
						player.pause();
						$this.addClass('icon-play').removeClass('icon-pause').attr('title', '播放');
					} else if ($this.hasClass('icon-forward')) {
						player.state.fps < 99 && player.state.fps++;
						self.refreshFps();
					} else if ($this.hasClass('icon-step-forward')) {
						player.jump(-1);
					}
					return false;
				});
				this.$control.on(Cateyes.EVENTS.CLICK, function () {
					return false;
				});
				this.$control.on('dblclick', function () {
					return false;
				});
			},
			refreshFps: function refreshFps() {
				this.player._play();
				this.$fps.html(this.player.state.fps || 0);
			},
			show: function show() {
				var self = this;
				setTimeout(function () {
					self.$control.addClass('show');
					$('.play-trigger', self.$control).removeClass('icon-play').addClass('icon-pause').attr('title', '暂停');
					self.refreshFps();
				}, 0);
			},
			hide: function hide() {
				this.$control.removeClass('show');
			}
		}));

		/**
	  * 浏览控制插件
	  */
		PluginFactory.regist('SwipeControl', Cateyes.ClassHelper.extend(Plugin, function (viewer, params) {
			this.init(viewer, params);
		}, {
			init: function init(viewer, params) {
				this.viewer = viewer;
				this.player = viewer.player;
				this._initDom();
				this._initEvent();
				//this[this.player.isPlaying() ? 'show' : 'hide']();
			},
			DOM: ['<ul class="cateyes-plugin-swipecontrol">', '<li class="swipecontrol-prev icon icon-chevron-left"></li>', '<li class="swipecontrol-next icon icon-chevron-right"></li></ul>'].join(''),
			_initDom: function _initDom() {
				var $container = this.viewer.getContainer();
				$container.append(this.$control = $(this.DOM));
			},
			_initEvent: function _initEvent() {
				var self = this;
				this.$control.on(Cateyes.EVENTS.MOUSE_DOWN, 'li', function () {
					var $this = $(this),
					    player = self.player;
					if ($this.hasClass('swipecontrol-prev')) {
						player.prev();
					} else if ($this.hasClass('swipecontrol-next')) {
						player.next();
					}
					return false;
				});
			},
			show: function show() {
				var self = this;
				setTimeout(function () {
					self.$control.addClass('show');
					$('.play-trigger', self.$control).removeClass('icon-play').addClass('icon-pause').attr('title', '暂停');
					self.refreshFps();
				}, 0);
			},
			hide: function hide() {
				this.$control.removeClass('show');
			}
		}));

		/**
	  * 关键影像标记插件
	  */
		PluginFactory.regist('KeyImageMarker', Cateyes.ClassHelper.extend(Plugin, function (viewer, params) {
			this.init(viewer, params);
		}, {
			MARK_MAX: 100,
			state: {
				isOn: false
			},
			markCache: {
				image: {},
				count: {
					total: 0
				}
			},
			markDom: {
				showCount: 0
			},
			markers: [],
			init: function init(viewer, params) {
				this.viewer = viewer;
				this.player = viewer.player;
				this._initDom();
				this._initEvent();
				this._initPrototype();
				this.start = null;
				this.startIndex = null;
				this.end = null;
				this.endIndex = null;
				this.markers.push(this);
			},
			_initPrototype: function _initPrototype() {
				if (!this.state.initedPrototype) {
					this.state.initedPrototype = true;
					var cpb;
					if (cpb = window.parent.window.CateyesPubSub) {
						var self = this;
						if (cpb.getKeyImageMax) {
							var max = cpb.getKeyImageMax();
							if (max) {
								this.MARK_MAX = max;
							}
						}
						cpb.loadKeyImage && cpb.loadKeyImage().then(function (data) {
							if (data) {
								$.extend(self.markCache, JSON.parse(data));
								self.refreshKeyImageFragment();
								self._refreshTotalDom();
							}
						});
					}
				}
			},
			DOM: ['<ul class="cateyes-plugin-keyimage">', '	<li title="标记单张" class="icon-keyimage-single"><i class="icon-keyimage"></i></li>', '	<i class="keyimage-line"></i>', '	<li title="标记区间开始" class="icon-keyimage-rangestart"><i class="icon-keyimage"></i></li>', '	<i class="keyimage-line"></i>', '	<li title="标记区间结束" class="icon-keyimage-rangeend"><i class="icon-keyimage"></i></li>', '	<i class="keyimage-line"></i>', '	<li title="关闭" class="icon-keyimage-close"><i class="icon-keyimage"></i></li>', '	<div class="keyimage-max-tip">已超过 <b></b> 张（上限：MARK_MAX）</div>', '</ul>'].join(''),
			_initDom: function _initDom() {
				var $container = this.viewer.getContainer();
				$container.append(this.$control = $(this.DOM.replace('MARK_MAX', this.MARK_MAX)));
				this.$single = $('.icon-keyimage-single .icon-keyimage', this.$control);
				this.$start = $('.icon-keyimage-rangestart .icon-keyimage', this.$control);
				this.$end = $('.icon-keyimage-rangeend .icon-keyimage', this.$control);
				this.$close = $('.icon-keyimage-close .icon-keyimage', this.$control);
				this.$tip = $('.keyimage-max-tip', this.$control);
				this.$tipB = $('.keyimage-max-tip b', this.$control);
			},
			_initEvent: function _initEvent() {
				var self = this;
				this.viewer.subscribe(Cateyes.CustomEvents.AFTER_BIND_SERIES, function () {
					self.refreshKeyImageFragment();
					self.show();
				});
				this.viewer.subscribe(Cateyes.CustomEvents.ON_VIEWER_ACTIVE, function () {
					self.show();
				});
				this.viewer.subscribe(Cateyes.CustomEvents.AFTER_BROWSE_DICOM, function () {
					self.refresh();
				});
				this.$control.on(Cateyes.EVENTS.MOUSE_DOWN, 'li', function () {
					var $this = $(this);
					if ($this.hasClass('icon-keyimage-single')) {
						self.mark('SINGLE');
					} else if ($this.hasClass('icon-keyimage-rangestart')) {
						self.mark('START');
					} else if ($this.hasClass('icon-keyimage-rangeend')) {
						self.mark('END');
					} else if ($this.hasClass('icon-keyimage-close')) {
						self.toggle();
					}
					return false;
				});
				this.$control.on(Cateyes.EVENTS.CLICK, function () {
					return false;
				});
				this.$control.on('dblclick', function () {
					return false;
				});
			},
			mark: function mark(type) {
				var seriesNumber = this.viewer.getSeries().info.seriesNumber,
				    id = this.player.getCurrentDicom().info.id,
				    cache = this.getMarkCache(seriesNumber);
				if (seriesNumber != void 0 && id != void 0) {
					switch (type) {
						case 'SINGLE':
							if (cache[id]) {
								delete cache[id];
								this.refreshTotal(seriesNumber, -1);
							} else {
								if (this.canAddMark(1)) {
									cache[id] = true;
									this.refreshTotal(seriesNumber, 1);
								}
							}
							break;
						case 'START':
							if (this.$start.hasClass('active')) {
								this.start = null;
								this.startIndex = null;
								this.clearKeyingImageFragment();
							} else {
								this.start = id;
								this.startIndex = this.player.getIndex();
								this.startTime = new Date().getTime();
							}
							break;
						case 'END':
							if (this.$end.hasClass('active')) {
								this.end = null;
								this.endIndex = null;
								this.clearKeyingImageFragment();
							} else {
								this.end = id;
								this.endIndex = this.player.getIndex();
								this.endTime = new Date().getTime();
							}
							break;
					}
					this.refresh();
					this.refreshKeyImageFragment();
				}
			},
			/**
	   * 能否添加标记
	   * @param  {[type]} num [description]
	   * @return {[type]}     [description]
	   */
			canAddMark: function canAddMark(num) {
				if (num + this.markCache.count.total > this.MARK_MAX) {
					this.$tipB.html(num + this.markCache.count.total - this.MARK_MAX);
					this.$tip.addClass('show');
					var self = this;
					if (this.markDom.__tipTimer) {
						clearTimeout(this.markDom.__tipTimer);
					}
					this.markDom.__tipTimer = setTimeout(function () {
						self.$tip.removeClass('show');
					}, 3000);
					return false;
				}
				return true;
			},
			refresh: function refresh(silent) {
				if (!this.viewer.getSeries()) {
					return;
				}
				var seriesNumber = this.viewer.getSeries().info.seriesNumber,
				    cache = this.getMarkCache(seriesNumber);
				//区间是否完成
				var start = this.start,
				    end = this.end;
				if (start && end) {
					var frames = this.viewer.getSeries().frames,
					    startFlag = false,
					    endFlag = false,
					    ids = [];
					if (this.startIndex > this.endIndex) {
						end = [start, start = end][0];
					}
					for (var i = 0, item; item = frames[i++];) {
						if (start == item.info.id) {
							startFlag = true;
						}
						if (startFlag) {
							if (!cache[item.info.id]) {
								ids.push(item.info.id);
							}
							if (end == item.info.id) {
								endFlag = true;
								break;
							}
						}
					}
					if (this.canAddMark(ids.length)) {
						for (var i = 0, id; id = ids[i++];) {
							cache[id] = true;
						}
						this.start = this.end = null;
						this.startIndex = this.endIndex = null;
						this.$single.addClass('active');
						this.$start.removeClass('active');
						this.$end.removeClass('active');
						this.clearKeyingImageFragment();
						this.refreshTotal(seriesNumber, ids.length);
					} else {
						if (this.startTime < this.endTime) {
							this.end = null;
						} else {
							this.start = this.startIndex = null;
						}
					}
				} else if (start || end) {
					this.refreshKeyingImageFragment();
				}
				//当前影像是否激活
				this.$single[cache[this.player.getCurrentDicom().info.id] ? 'addClass' : 'removeClass']('active');
				this.$start[this.start ? 'addClass' : 'removeClass']('active');
				this.$end[this.end ? 'addClass' : 'removeClass']('active');
				if (!silent) {
					var markers = this.markers;
					for (var i = 0, m; m = markers[i++];) {
						if (m != this) {
							m.refresh(true);
						}
					}
				}
			},
			removeKeyImage: function removeKeyImage(which) {
				var cache = this.getMarkCache();
				if (which == 'ALL') {
					cache.image = {};
					cache.count = {
						total: 0
					};
				} else {
					delete cache.image[which];
					cache.count.total -= cache.count[which];
					delete cache.count[which];
				}
				this.refresh();
				this.refreshKeyImageFragment();
				this._refreshTotalDom();
				this.refreshBusiness();
			},
			show: function show() {
				var self = this,
				    markBox = self.getMarkBox();
				if (this.state.isOn && !this.$control.hasClass('show')) {
					var state = this.state;
					state.marker && state.marker.hide();
					if (this.viewer.getSeries()) {
						state.marker = this;
						setTimeout(function () {
							self.$control.addClass('show');
							markBox.element.addClass('show');
							markBox.showCount++;
						}, 0);
					}
				}
			},
			hide: function hide() {
				if (this.$control.hasClass('show')) {
					this.$control.removeClass('show');
					if (--this.getMarkBox().showCount == 0) {
						this.getMarkBox().element.removeClass('show');
					}
					this.start = this.end = null;
					this.startIndex = this.endIndex = null;
					this.refresh();
					this.clearKeyingImageFragment();
				}
			},
			toggle: function toggle() {
				var state = this.state;
				state.isOn = !state.isOn;
				if (state.isOn) {
					this.show();
				} else {
					state.marker && state.marker.hide();
				}
				(state.$icon || (state.$icon = $('.nav-icon.nav-icon-keyimage')))[state.isOn ? 'addClass' : 'removeClass']('active');
			},
			getMarkCache: function getMarkCache(seriesNumber) {
				if (arguments.length == 0) {
					return this.markCache;
				} else {
					return this.markCache.image[seriesNumber] = this.markCache.image[seriesNumber] || {};
				}
			},
			/**
	   * 刷新关键影像标记
	   * @return {[type]} [description]
	   */
			refreshKeyImageFragment: function refreshKeyImageFragment(silent) {
				if (!this.viewer.getSeries()) {
					return;
				}
				var $progress = this._$ImageFragmentProgress || (this._$ImageFragmentProgress = $('<div class="cateyes-keyimage-progress"></div>').appendTo(this.player.getProgressBar()));
				var series = this.viewer.getSeries(),
				    cache = this.getMarkCache(series.info.seriesNumber);
				$progress.empty();
				if (series) {
					var dicoms = series.frames;
					if (dicoms && dicoms.length) {
						var w = 100 / dicoms.length;
						for (var i = 0, item; item = dicoms[i]; i++) {
							if (cache[item.info.id]) {
								$('<div></div>').css({
									position: 'absolute',
									left: i * w + '%',
									width: w + '%',
									height: '100%',
									'background': '#09c'
								}).appendTo($progress);
							}
						}
					}
				}
				if (!silent) {
					var markers = this.markers;
					for (var i = 0, m; m = markers[i++];) {
						if (m != this) {
							m.refreshKeyImageFragment(true);
						}
					}
				}
			},
			/**
	   * 刷新关键影像标记区间
	   * @return {[type]} [description]
	   */
			refreshKeyingImageFragment: function refreshKeyingImageFragment() {
				var $progress = this._$ImageingFragmentProgress || (this._$ImageingFragmentProgress = $('<div class="cateyes-keyingimage-progress"></div>').appendTo(this.player.getProgressBar()));
				$progress.empty();
				var currentIndex = this.player.getIndex(),
				    end = this.end,
				    w = 100 / this.player.getTotal();
				var start = this.startIndex == null ? this.endIndex : this.startIndex,
				    end = this.player.getIndex();
				if (start > end) {
					start = [end, end = start][0];
				}
				$('<div></div>').css({
					position: 'absolute',
					width: (end - start + 1) * w + '%',
					height: '100%',
					left: w * start + '%',
					'background': '#09c',
					opacity: '0.5'
				}).appendTo($progress);
			},
			clearKeyingImageFragment: function clearKeyingImageFragment() {
				this._$ImageingFragmentProgress && this._$ImageingFragmentProgress.empty();
			},
			refreshTotal: function refreshTotal(seriesNumber, count) {
				var cacheCount = this.markCache.count;
				if (!cacheCount[seriesNumber]) {
					cacheCount[seriesNumber] = 0;
				}
				cacheCount[seriesNumber] += count;
				cacheCount.total += count;
				this._refreshTotalDom();
				this.refreshBusiness();
			},
			_refreshTotalDom: function _refreshTotalDom() {
				var markDom = this.getMarkBox(),
				    self = this;
				markDom.$ul.empty();
				var sn;
				markDom.$total.html(this.markCache.count.total);
				for (sn in this.markCache.count) {
					if (sn != 'total' && this.markCache.count.hasOwnProperty(sn)) {
						markDom.$ul.append($('<li>SE ' + sn + '：已标记 ' + this.markCache.count[sn] + ' 张<button type="button" data-which="' + sn + '" class="remove-keyimage" title="删除">X</button></li>'));
					}
				}
			},
			getMarkBox: function getMarkBox() {
				var markDom = this.markDom,
				    self = this;
				if (!markDom.element) {
					markDom.element = $('<div class="cateyes-plugin-keyimage-box"><div class="keyimage-box-head">关键帧 <span style="color: yellowgreen;">已标记 <b style="color:orange;">0</b> / ' + this.MARK_MAX + '(上限)</span> <button class="remove-keyimage" data-which="ALL">清空</button></div><ul></ul></div>').appendTo($('body'));
					markDom.$ul = $('ul', markDom.element);
					markDom.$total = $('b', markDom.element);
					markDom.element.on(Cateyes.EVENTS.CLICK, function (ev) {
						var $tgt = $(ev.target);
						if ($tgt.hasClass('remove-keyimage')) {
							self.removeKeyImage($tgt.data('which'));
						}
					});
				}
				return markDom;
			},
			/**
	   * 业务层传递参数
	   * @param  {[type]} ) {		var       cvs [description]
	   * @return {[type]}   [description]
	   */
			refreshBusiness: function refreshBusiness() {
				var cpb;
				if (cpb = window.parent.window.CateyesPubSub) {
					cpb.trigger('AFTER_CATEYES_KEYIMAGE', [JSON.stringify(this.markCache), this.markCache.count.total]);
				}
			}
		}));

		/**
	  * 全屏插件
	  */
		PluginFactory.regist('FullScreen', Cateyes.ClassHelper.extend(Plugin, function (viewer, params) {
			this.init(viewer, params);
		}, {
			init: function init(viewer, params) {
				this.viewer = viewer;
				this._initDom();
				this._initEvent();
			},
			DOM: '<div class="cateyes-plugin-fullscreen" title="全屏"><i></i></div>',
			_initDom: function _initDom() {
				var $container = this.viewer.getContainer();
				$container.append(this.$control = $(this.DOM));
			},
			_initEvent: function _initEvent() {
				var self = this,
				    $lock = this.$control;
				$lock.on(Cateyes.EVENTS.CLICK, function () {
					$(this).toggleClass('active');
					Cateyes.ViewerManager.toggleViewerFullScreen(self.viewer);
				});
				$lock.on(Cateyes.EVENTS.CLICK, function () {
					return false;
				});
				$lock.on('dblclick', function () {
					return false;
				});
			},
			show: function show() {
				this.$control.show();
			},
			hide: function hide() {
				this.$control.hide();
			}
		}));

		/**
	  * 同步浏览锁定插件
	  */
		PluginFactory.regist('BrowseLock', Cateyes.ClassHelper.extend(Plugin, function (viewer, params) {
			this.init(viewer, params);
		}, {
			lockedViewers: [],
			init: function init(viewer, params) {
				this.viewer = viewer;
				this.player = viewer.player;
				this._initDom();
				this._initEvent();
			},
			DOM: '<div class="cateyes-plugin-browselock" title="关联浏览锁"><i></i></div>',
			_initDom: function _initDom() {
				var $container = this.viewer.getContainer();
				$container.append(this.$control = $(this.DOM));
			},
			_initEvent: function _initEvent() {
				var self = this,
				    $lock = this.$control;
				this.viewer.subscribe(Cateyes.CustomEvents.AFTER_BROWSE_DICOM, function (params) {
					params && $lock.hasClass('active') && self.sync(params);
				});
				$lock.on(Cateyes.EVENTS.CLICK, function () {
					if ($(this).toggleClass('active').hasClass('active')) {
						self.lock();
					} else {
						self.unlock();
					}
				});
				$lock.on(Cateyes.EVENTS.CLICK, function () {
					return false;
				});
				$lock.on('dblclick', function () {
					return false;
				});
			},
			lock: function lock() {
				this.lockedViewers.push(this.viewer);
			},
			unlock: function unlock() {
				var vs = this.lockedViewers;
				for (var i = 0, v; v = vs[i]; i++) {
					if (v == this.viewer) {
						vs.splice(i, 1);
						break;
					}
				}
			},
			/**
	   * 同步
	   * @return {[type]} [description]
	   */
			sync: function sync(params) {
				var vs = this.lockedViewers,
				    cv = this.viewer,
				    event = params.event;
				if (vs && vs.length > 1 && (event == 'prev' || event == 'next')) {
					for (var i = 0, v; v = vs[i++];) {
						if (v != cv) {
							v.player[event](true);
						}
					}
				}
			},
			show: function show() {
				this.$control.show();
			},
			hide: function hide() {
				this.$control.hide();
			}
		}));

		/**
	  * 图像方位插件
	  */
		PluginFactory.regist('ImageOrientation', Cateyes.ClassHelper.extend(Plugin, function (viewer, params) {
			this.init(viewer, params);
		}, {
			init: function init(viewer) {
				var self = this;
				this.viewer = viewer;
				viewer.subscribe(Cateyes.CustomEvents.AFTER_BIND_SERIES, function () {
					self.refresh();
				});
				viewer.subscribe(Cateyes.CustomEvents.ON_DICOM_CANVAS_RESIZE, function () {
					self.refresh();
				});
				this._initDom();
				this.refresh();
			},
			_initDom: function _initDom() {
				var $container = this.viewer.getContainer();
				var css = {
					position: 'absolute',
					width: '15px',
					height: '15px',
					color: '#09c',
					'font-size': '18px',
					'z-index': '10',
					'font-family': '微软雅黑'
				};
				this.$top = $('<div></div>').css($.extend({}, css, {
					'top': '5%',
					'left': '50%',
					'margin-left': '-7px'
				})).appendTo($container);
				this.$bottom = $('<div></div>').css($.extend({}, css, {
					'bottom': '3%',
					'left': '50%',
					'margin-left': '-7px'
				})).appendTo($container);
				this.$left = $('<div></div>').css($.extend({}, css, {
					'left': '5%',
					'top': '50%',
					'margin-top': '-7px'
				})).appendTo($container);
				this.$right = $('<div></div>').css($.extend({}, css, {
					'right': '5%',
					'top': '50%',
					'margin-top': '-7px'
				})).appendTo($container);
			},
			refresh: function refresh() {
				var series = this.viewer.getSeries(),
				    oris = ['', '', '', '', '', '', '', '']; //top,right,bottom,left
				if (series) {
					var orientation = this.viewer.tinter.getState().orientation || series.info.orientation,
					    positionState = this.viewer.positioner.getState(),
					    h,
					    v;
					switch (orientation) {
						case 'AXIAL':
							oris[0] = 'A';
							oris[1] = 'LA';
							oris[2] = 'L';
							oris[3] = 'LP';
							oris[4] = 'P';
							oris[5] = 'RP';
							oris[6] = 'R';
							oris[7] = 'RA';
							break;
						case 'CORONAL':
							oris[0] = 'H';
							oris[1] = 'LH';
							oris[2] = 'L';
							oris[3] = 'LF';
							oris[4] = 'F';
							oris[5] = 'RF';
							oris[6] = 'R';
							oris[7] = 'RH';
							break;
						case 'SAGITTAL':
							oris[0] = 'H';
							oris[1] = 'HP';
							oris[2] = 'P';
							oris[3] = 'FP';
							oris[4] = 'F';
							oris[5] = 'AF';
							oris[6] = 'A';
							oris[7] = 'AH';
							break;
					}
					var rotateStep = Math.floor((positionState.rotate + 22.5) / 45) % 8;
					rotateStep < 0 && (rotateStep += 8);
					switch (rotateStep) {
						case 0:
							h = [2, 6];
							v = [0, 4];
							break;
						case 1:
							h = [0, 2, 4, 6];
							v = [0, 6, 2, 4];
							break;
						case 2:
							h = [0, 4];
							v = [2, 6];
							break;
						case 3:
							h = [0, 6, 2, 4];
							v = [0, 2, 4, 6];
							break;
						case 4:
							h = [2, 6];
							v = [0, 4];
							break;
						case 5:
							h = [0, 2, 4, 6];
							v = [0, 6, 2, 4];
							break;
						case 6:
							h = [0, 4];
							v = [2, 6];
							break;
						case 7:
							h = [0, 6, 2, 4];
							v = [0, 2, 4, 6];
							break;
					}
					while (rotateStep > 0) {
						rotateStep--;
						oris.unshift(oris.pop());
					}

					if (positionState.horizontal < 0) {
						for (var i = 0; i < h.length; i += 2) {
							oris[h[i]] = [oris[h[i + 1]], oris[h[i + 1]] = oris[h[i]]][0];
						}
					}
					if (positionState.vertical < 0) {
						for (var i = 0; i < v.length; i += 2) {
							oris[v[i]] = [oris[v[i + 1]], oris[v[i + 1]] = oris[v[i]]][0];
						}
					}
				}
				this.$top.html(oris[0]);
				this.$right.html(oris[2]);
				this.$bottom.html(oris[4]);
				this.$left.html(oris[6]);
			},
			show: function show() {},
			hide: function hide() {}
		}));

		/**
	  * 标尺插件
	  */
		PluginFactory.regist('Scaleplate', Cateyes.ClassHelper.extend(Plugin, function (viewer, params) {
			this.init(viewer, params);
		}, {
			init: function init(viewer) {
				var self = this;
				this.viewer = viewer;
				viewer.subscribe(Cateyes.CustomEvents.AFTER_BIND_SERIES, function () {
					self.refresh(true);
				});
				viewer.subscribe(Cateyes.CustomEvents.ON_DICOM_CANVAS_RESIZE, function () {
					self.refresh();
				});
				this._initDom();
				this.refresh();
			},
			_initDom: function _initDom() {
				var $container = this.viewer.getContainer();
				var css = {
					position: 'absolute',
					'box-sizing': 'border-box',
					color: '#09c',
					'font-size': '18px',
					'z-index': '10',
					'font-family': 'cursive'
				};
				this.$bottom = $('<div></div>').css($.extend({}, css, {
					height: '8px',
					'bottom': '5%',
					'left': '50%',
					'border-bottom': '1px solid #09c',
					'border-right': '1px solid #09c'
				}));
				for (var i = 0; i < 10; i++) {
					$('<div></div>').css({
						'box-sizing': 'border-box',
						'border-left': '1px solid #09c',
						'height': i != 0 && i != 5 ? '4px' : '7px',
						'margin-top': i != 0 && i != 5 ? '3px' : '0px',
						'width': '10%',
						'float': 'left'
					}).appendTo(this.$bottom);
				}
				//this.$bottom.appendTo($container);
				this.$left = $('<div></div>').css($.extend({}, css, {
					width: '8px',
					'left': '1%',
					'top': '50%',
					'border-bottom': '1px solid #09c',
					'border-left': '1px solid #09c'
				}));
				for (var i = 0; i < 10; i++) {
					$('<div></div>').css({
						'box-sizing': 'border-box',
						'border-top': '1px solid #09c',
						'width': i != 0 && i != 5 ? '4px' : '7px',
						'height': '10%'
					}).appendTo(this.$left);
				}
				this.$left.appendTo($container);
			},
			refresh: function refresh(force) {
				var series = this.viewer.getSeries(),
				    positionState = this.viewer.positioner.getState();
				if (force) {
					var pixelSpacing = series.info.pixelSpacing,
					    ruleWidth = 100 / pixelSpacing[0],
					    ruleHeight = 100 / (pixelSpacing[1] || pixelSpacing[0]);
					this.$bottom._ruleWidth = ruleWidth;
					this.$left._ruleheight = ruleHeight;
				}
				var width = positionState.scale * Math.abs(positionState.horizontal) * this.$bottom._ruleWidth,
				    height = positionState.scale * Math.abs(positionState.vertical) * this.$left._ruleheight;
				this.$bottom.css({
					width: width + 'px',
					'margin-left': '-' + width / 2 + 'px'
				});
				this.$left.css({
					height: height + 'px',
					'margin-top': '-' + height / 2 + 'px'
				});
			},
			show: function show() {},
			hide: function hide() {},
			_setTransform: function _setTransform($el, buff) {
				var stl = $el[0].style;
				// 兼容各浏览器
				stl.transform = buff;
				stl.oTransform = buff;
				stl.msTransform = buff;
				stl.mozTransform = buff;
				stl.webkitTransform = buff;
			}
		}));

		/**
	  * Loading
	  */
		PluginFactory.regist('Loading', Cateyes.ClassHelper.extend(Plugin, function (viewer, params) {
			this.init(viewer, params);
		}, {
			init: function init(viewer) {
				var self = this;
				this.viewer = viewer;
				viewer.subscribe(Cateyes.CustomEvents.VIEWER_LOADING, function (params) {
					self.refresh(params);
				});
				this._initDom();
				this.refresh();
			},
			_initDom: function _initDom() {
				var $container = this.viewer.getContainer();
				this.$loading = $('<div></div>').css({
					position: 'absolute',
					'box-sizing': 'border-box',
					top: '45%',
					left: '50%',
					transform: 'translate(-50%,0)',
					'font-size': '14px',
					'z-index': '10',
					'font-family': 'cursive',
					color: '#FFF',
					padding: '6px',
					background: '#232323',
					'border-radius': '3px',
					'display': 'none'
				});
				this.$loading.appendTo($container);
			},
			refresh: function refresh(params) {
				if (params) {
					this.$loading.html(params.text || '加载中...');
					this.show();
				} else {
					this.hide();
				}
			},
			show: function show() {
				this.$loading.show();
			},
			hide: function hide() {
				this.$loading.hide();
			}
		}));

		/**
	  *定位线插件
	  */
		PluginFactory.regist('PositionLine', Cateyes.ClassHelper.extend(Plugin, function (viewer, params) {
			this.init(viewer, params);
		}, {
			lopPubSub: new Cateyes.PubSub(),
			init: function init(viewer, params) {
				var self = this;
				this.viewer = viewer;
				this.lopPubSub.subscribe(Cateyes.CustomEvents.DRAW_POSITIONLINE, function (sliceViewer) {
					self.drawPositionline(sliceViewer);
				});
				viewer.subscribe(Cateyes.CustomEvents.AFTER_BROWSE_DICOM, function () {
					self.lopPubSub.publish(Cateyes.CustomEvents.DRAW_POSITIONLINE, viewer);
				});
				viewer.subscribe(Cateyes.CustomEvents.ON_VIEWER_ACTIVE, function () {
					self.lopPubSub.publish(Cateyes.CustomEvents.DRAW_POSITIONLINE, viewer);
					self.clearPositionLine();
				});
			},
			state: {
				show: true
			},
			toggleShow: function toggleShow() {
				this.state.show = !this.state.show;
				$('canvas.POSITION_LINE')[this.state.show ? 'show' : 'hide']();
			},
			/**
	   * 绘制定位线
	   * @param  {[type]} positionFrame [description]
	   * @param  {[type]} sliceFrame    [description]
	   * @return {[type]}               [description]
	   */
			drawPositionline: function drawPositionline(sliceViewer) {
				var positionFrame = this._getInfoFromFrame(this.viewer),
				    sliceFrame = this._getInfoFromFrame(sliceViewer);
				if (!positionFrame || !sliceFrame) {
					return;
				}
				if (positionFrame.seriesId == sliceFrame.seriesId && positionFrame.orientation == sliceFrame.orientation) {
					this.clearPositionLine();
					return;
				}
				var points;
				if (positionFrame.seriesId == sliceFrame.seriesId) {
					//临时解决方案
					points = this.calculateMprPositionLine(this.viewer, sliceViewer);
				} else {
					points = this.calculatePositionLine(positionFrame, sliceFrame);
				}
				if (points) {
					var cvs = this._getPostionLineCanvas(),
					    ctx = cvs.context,
					    state = this.viewer.positioner.getState(),
					    scale = state.scale;
					points.start.x = Math.round(points.start.x * scale * Math.abs(state.horizontal)) + 0.5;
					points.start.y = Math.round(points.start.y * scale * Math.abs(state.vertical)) + 0.5;
					points.end.x = Math.round(points.end.x * scale * Math.abs(state.horizontal)) + 0.5;
					points.end.y = Math.round(points.end.y * scale * Math.abs(state.vertical)) + 0.5;
					if (!cvs._inited) {
						cvs._inited = true;
						ctx.strokeStyle = 'yellow';
						ctx.lineWidth = '1';
					}
					ctx.clearRect(0, 0, cvs.width, cvs.height);
					ctx.strokeStyle = '#333';
					ctx.lineWidth = '3';
					ctx.beginPath();
					ctx.moveTo(points.start.x, points.start.y);
					ctx.lineTo(points.end.x, points.end.y);
					ctx.stroke();
					ctx.beginPath();
					ctx.strokeStyle = 'yellow';
					ctx.lineWidth = '1';
					ctx.moveTo(points.start.x, points.start.y);
					ctx.lineTo(points.end.x, points.end.y);
					ctx.stroke();
				} else {
					this.clearPositionLine();
				}
			},
			/**
	   * 清空定位线
	   */
			clearPositionLine: function clearPositionLine() {
				var cvs = this._getPostionLineCanvas();
				cvs.context.clearRect(0, 0, cvs.width, cvs.height);
			},
			/**
	   * 计算定位线坐标
	   * @return {[type]} [description]
	   */
			calculatePositionLine: function calculatePositionLine(positionFrame, sliceFrame) {
				//1.计算定位图平面方程
				var ip = positionFrame.imagePosition,
				    io = positionFrame.imageOrientation,
				    ips = positionFrame.pixelSpacing,
				    dx = io[1] * io[5] - io[4] * io[2],
				    dy = io[2] * io[3] - io[0] * io[5],
				    dz = io[0] * io[4] - io[3] * io[1];
				//  (x-ip[0])*dx +(y-ip[1])*dy+(z-ip[2])*dz=0;
				//2.计算切片图四个点
				var cip = sliceFrame.imagePosition,
				    cio = sliceFrame.imageOrientation,
				    cps = sliceFrame.pixelSpacing,
				    cw = sliceFrame.columns,
				    ch = sliceFrame.rows;

				var p1 = cip,
				    cpsw = cw * cps[0],
				    cpsh = ch * cps[1],
				    p2 = [p1[0] + cpsw * cio[0], p1[1] + cpsw * cio[1], p1[2] + cpsw * cio[2]],
				    p3 = [p2[0] + cpsh * cio[3], p2[1] + cpsh * cio[4], p2[2] + cpsh * cio[5]],
				    p4 = [p1[0] + cpsh * cio[3], p1[1] + cpsh * cio[4], p1[2] + cpsh * cio[5]];

				//3.计算四个端点的矢量位移
				var dv1 = (p1[0] - ip[0]) * dx + (p1[1] - ip[1]) * dy + (p1[2] - ip[2]) * dz,
				    dv2 = (p2[0] - ip[0]) * dx + (p2[1] - ip[1]) * dy + (p2[2] - ip[2]) * dz,
				    dv3 = (p3[0] - ip[0]) * dx + (p3[1] - ip[1]) * dy + (p3[2] - ip[2]) * dz,
				    dv4 = (p4[0] - ip[0]) * dx + (p4[1] - ip[1]) * dy + (p4[2] - ip[2]) * dz;

				//4.判断是否穿过
				var isCross_12 = dv1 >= 0 && dv2 <= 0 || dv1 <= 0 && dv2 >= 0,
				    isCross_23 = dv2 >= 0 && dv3 <= 0 || dv2 <= 0 && dv3 >= 0,
				    isCross_34 = dv3 >= 0 && dv4 <= 0 || dv3 <= 0 && dv4 >= 0,
				    isCross_41 = dv4 >= 0 && dv1 <= 0 || dv4 <= 0 && dv1 >= 0;

				// console.log('isCross_12:' + isCross_12);
				// console.log('isCross_23:' + isCross_23);
				// console.log('isCross_34:' + isCross_34);
				// console.log('isCross_41:' + isCross_41);

				//5.计算定位线两端坐标

				var croessPoint_1, croessPoint_2;
				if (isCross_12 && isCross_34) {
					croessPoint_1 = [p1[0] + (p2[0] - p1[0]) * dv1 / (dv1 - dv2), p1[1] + (p2[1] - p1[1]) * dv1 / (dv1 - dv2), p1[2] + (p2[2] - p1[2]) * dv1 / (dv1 - dv2)];
					croessPoint_2 = [p3[0] + (p4[0] - p3[0]) * dv3 / (dv3 - dv4), p3[1] + (p4[1] - p3[1]) * dv3 / (dv3 - dv4), p3[2] + (p4[2] - p3[2]) * dv3 / (dv3 - dv4)];
				} else if (isCross_23 && isCross_41) {
					croessPoint_1 = [p2[0] + (p3[0] - p2[0]) * dv2 / (dv2 - dv3), p2[1] + (p3[1] - p2[1]) * dv2 / (dv2 - dv3), p2[2] + (p3[2] - p2[2]) * dv2 / (dv2 - dv3)];
					croessPoint_2 = [p4[0] + (p1[0] - p4[0]) * dv4 / (dv4 - dv1), p4[1] + (p1[1] - p4[1]) * dv4 / (dv4 - dv1), p4[2] + (p1[2] - p4[2]) * dv4 / (dv4 - dv1)];
				}

				// console.log('croessPoint_1:' + croessPoint_1);
				// console.log('croessPoint_2:' + croessPoint_2);

				if (croessPoint_1 && croessPoint_2) {
					return {
						start: this.projectLocation({
							x: croessPoint_1[0] - ip[0],
							y: croessPoint_1[1] - ip[1],
							z: croessPoint_1[2] - ip[2]
						}, io, ips),
						end: this.projectLocation({
							x: croessPoint_2[0] - ip[0],
							y: croessPoint_2[1] - ip[1],
							z: croessPoint_2[2] - ip[2]
						}, io, ips)
					};
				}
			},
			/**
	   * 将3D坐标点投射到2D平面
	   * @type {Object}
	   */
			projectLocation: function projectLocation(point, imageOrientation, pixelSpacing) {
				var x = point.x * imageOrientation[0] + point.y * imageOrientation[1] + point.z * imageOrientation[2],
				    y = point.x * imageOrientation[3] + point.y * imageOrientation[4] + point.z * imageOrientation[5];
				return {
					x: x / pixelSpacing[0],
					y: y / pixelSpacing[1]
				};
			},
			/**
	   * 获取定位线画布
	   * @return {[type]} [description]
	   */
			_getPostionLineCanvas: function _getPostionLineCanvas() {
				var self = this;
				return this.viewer.getCanvas('POSITION_LINE', 1, function (viewer) {
					var dicomCanvas = viewer.getCanvas('DICOM'),
					    $dicomCanvas = dicomCanvas.$el,
					    position = viewer.positioner.getDicomCanvasPosition();
					if (this.width != position.width || this.height != position.height) {
						this.width = position.width;
						this.height = position.height;
					}
					var stl = this.style,
					    buff = [];
					buff.push("scale(");
					buff.push(position.horizontal > 0 ? 1 : -1);
					buff.push(",");
					buff.push(position.vertical > 0 ? 1 : -1);
					buff.push(") rotate(");
					buff.push(position.rotate);
					buff.push("deg)");
					buff = buff.join("");
					// 兼容各浏览器
					stl.transform = buff;
					stl.oTransform = buff;
					stl.msTransform = buff;
					stl.mozTransform = buff;
					stl.webkitTransform = buff;
					this.$el.css({
						'margin-top': position.top - this.height / 2,
						'margin-left': position.left - this.width / 2
					});
				}, function () {
					$('canvas.POSITION_LINE')[self.state.show ? 'show' : 'hide']();
				});
			},
			/**
	   * 提取切片位置信息
	   * @param  {[type]} frame [description]
	   * @return {[type]}       [description]
	   */
			_getInfoFromFrame: function _getInfoFromFrame(viewer) {
				var series = viewer.getSeries();
				if (!series) {
					return null;
				}
				var index = viewer.player.getState().index,
				    seriesInfo = series.info,
				    originalOrientation = seriesInfo.orientation,
				    orientation = viewer.tinter.getState().orientation;
				var imagePosition, imageOrientation, rows, columns, pixelSpacing, orientation;
				if (originalOrientation == orientation) {
					var frame = viewer.player.getCurrentDicom().info;
					imagePosition = frame.imagePositionPatient;
					imageOrientation = frame.imageOrientationPatient;
					rows = +frame.height;
					columns = +frame.width;
					pixelSpacing = frame.pixelSpacing;
					orientation = Cateyes.DicomHelper.getImageOrientation(frame.imageOrientationPatient);
				} else {
					var firstFrame = series.getDicom(0),
					    lastFrame = series.getDicom(series.getTotal() - 1),
					    imageOrientation = Cateyes.Utils.copy(firstFrame.info.imageOrientationPatient),
					    imagePosition = Cateyes.Utils.copy(firstFrame.info.imagePositionPatient),
					    rowPoint,
					    colPoint,
					    sliceThicknessOrientation = this._calculateDirectionCosine(firstFrame.info.imagePositionPatient, lastFrame.info.imagePositionPatient);
					switch (originalOrientation) {
						case 'AXIAL':
							if (orientation == 'CORONAL') {
								columns = +seriesInfo.width;
								rows = series.getTotal();
								pixelSpacing = [+seriesInfo.pixelSpacing[0], +seriesInfo.realSliceThickness];
								imagePosition[1] += index * seriesInfo.pixelSpacing[1];
								imageOrientation = imageOrientation.slice(0, 3).concat(sliceThicknessOrientation.F_L);
							} else {
								columns = +seriesInfo.height;
								rows = series.getTotal();
								pixelSpacing = [+seriesInfo.pixelSpacing[1], +seriesInfo.realSliceThickness];
								imagePosition[0] += index * seriesInfo.pixelSpacing[0];
							}
							break;
						case 'SAGITTAL':
							if (orientation == 'AXIAL') {
								columns = series.getTotal();
								rows = +seriesInfo.width;
								pixelSpacing = [+seriesInfo.realSliceThickness, +seriesInfo.pixelSpacing[0]];
								imagePosition[2] -= index * seriesInfo.pixelSpacing[1];
							} else {
								columns = series.getTotal();
								rows = +seriesInfo.height;
								pixelSpacing = [+seriesInfo.realSliceThickness, +seriesInfo.pixelSpacing[1]];
								imagePosition[1] += index * seriesInfo.pixelSpacing[0];
							}
							break;
						case 'CORONAL':
							if (orientation == 'AXIAL') {
								columns = +seriesInfo.width;
								rows = series.getTotal();
								pixelSpacing = [+seriesInfo.pixelSpacing[0], +seriesInfo.realSliceThickness];
								imagePosition[1] -= rows * pixelSpacing[1];
								imagePosition[2] -= index * seriesInfo.pixelSpacing[1];
								imageOrientation = imageOrientation.slice(0, 3).concat(sliceThicknessOrientation.L_F);
							} else {
								columns = series.getTotal();
								rows = +seriesInfo.height;
								pixelSpacing = [+seriesInfo.realSliceThickness, +seriesInfo.pixelSpacing[1]];
								imagePosition[0] += index * seriesInfo.pixelSpacing[0];
								imageOrientation = sliceThicknessOrientation.L_F.concat(imageOrientation.slice(3, 6));
							}
							break;
					}
					// rowPoint = Cateyes.Utils.copy(imagePosition);
					// colPoint = Cateyes.Utils.copy(imagePosition);
					// switch (orientation) {
					// 	case 'AXIAL':
					// 		debugger;
					// 		rowPoint[0] += columns * pixelSpacing[0];
					// 		colPoint[1] += rows * pixelSpacing[1];
					// 		break;
					// 	case 'SAGITTAL':
					// 		rowPoint[1] += columns * pixelSpacing[0];
					// 		colPoint[2] -= rows * pixelSpacing[1];
					// 		break;
					// 	case 'CORONAL':
					// 		rowPoint[0] += columns * pixelSpacing[0];
					// 		colPoint[2] -= rows * pixelSpacing[1];
					// 		break;
					// }
					// imageOrientation = this._calculateDirectionCosine(imagePosition, rowPoint, colPoint);
				}

				// var imagePosition = frame.imagePositionPatient,
				// 	imageOrientation = frame.imageOrientationPatient,
				// 	rows = +frame.height,
				// 	columns = +frame.width,
				// 	pixelSpacing = frame.pixelSpacing,
				// 	orientation = Cateyes.DicomHelper.getImageOrientation(frame.imageOrientationPatient);
				// if (frame.windowCenter == 600) {
				// 	imageOrientation = [1, 0, 0, 0, 0, -1];
				// 	columns = +frame.width;
				// 	rows = 361;
				// 	orientation = 'SAGITTAL';
				// 	pixelSpacing = [pixelSpacing[0], 1.5];
				// }
				return {
					seriesId: series.id,
					imagePosition: imagePosition,
					imageOrientation: imageOrientation,
					rows: rows,
					columns: columns,
					pixelSpacing: pixelSpacing,
					orientation: orientation
				};
			},
			/**
	   * 计算方向余弦
	   * @return {[type]} [description]
	   */
			_calculateDirectionCosine: function _calculateDirectionCosine(p1, p2) {
				var dis = Math.sqrt((p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]) + (p1[2] - p2[2]) * (p1[2] - p2[2]));
				return {
					F_L: [(p2[0] - p1[0]) / dis, (p2[1] - p1[1]) / dis, (p2[2] - p1[2]) / dis],
					L_F: [(p1[0] - p2[0]) / dis, (p1[1] - p2[1]) / dis, (p1[2] - p2[2]) / dis]
				};
			},
			calculateMprPositionLine: function calculateMprPositionLine(positionViewer, sliceViewer) {
				var positionOri = positionViewer.tinter.state.orientation,
				    positionWidth = positionViewer.tinter.state.width,
				    positionHeight = positionViewer.tinter.state.height,
				    sliceOri = sliceViewer.tinter.state.orientation,
				    sliceIndex = sliceViewer.player.state.index,
				    start,
				    end,
				    rowPoints = {
					start: {
						x: 0,
						y: sliceIndex
					},
					end: {
						x: positionWidth,
						y: sliceIndex
					}
				},
				    colPoints = {
					start: {
						x: sliceIndex,
						y: 0
					},
					end: {
						x: sliceIndex,
						y: positionHeight
					}
				};
				if (positionOri == 'AXIAL') {
					if (sliceOri == 'CORONAL') {
						return rowPoints;
					} else {

						return colPoints;
					}
				} else if (positionOri == 'CORONAL') {
					if (sliceOri == 'AXIAL') {
						return rowPoints;
					} else {
						return colPoints;
					}
				} else {
					if (sliceOri == 'AXIAL') {
						return rowPoints;
					} else {
						return colPoints;
					}
				}
			}
		}));
	})();

/***/ }),
/* 308 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * 定位器
	 *
	 * author : fanll 
	 *
	 * createTime : 2015-07-20
	 * 
	 * @return {[type]} [description]
	 */
	(function () {

		var Cateyes = window.Cateyes || (window.Cateyes = {});

		var Positioner = Cateyes.Positioner = function (viewer) {
			this.viewer = viewer;
			this.init();
		};

		Positioner.prototype = {
			/**
	   * 初始化
	   * @return {[type]} [description]
	   */
			init: function init() {
				this.state = {
					x: 0,
					y: 0,
					scale: 1,
					horizontal: 1,
					vertical: 1,
					rotate: 0,
					mpring: false
				};
				this.initEvents();
			},
			initEvents: function initEvents() {
				var self = this;
				this.viewer.subscribe(Cateyes.CustomEvents.AFTER_BIND_SERIES, function (series) {
					self.reset();
				});
				this.viewer.subscribe(Cateyes.CustomEvents.AFTER_MPR_REBUILD, function (params) {
					self.calculateMprSize(params);
				});
			},
			/**
	   * 重置
	   * @return {[type]} [description]
	   */
			reset: function reset() {
				//1.重置state
				this.state = $.extend(this.state, {
					x: 0,
					y: 0,
					scale: 1,
					horizontal: 1,
					vertical: 1,
					rotate: 0
				});
				//2.调整canvas尺寸
				this.refreshCanvasSize();
				//3.居中
				this.center();
			},
			/**
	   * 刷新canvas尺寸
	   * @return {[type]} [description]
	   */
			refreshCanvasSize: function refreshCanvasSize(state) {
				var viewer = this.viewer,
				    series = viewer.getSeries();
				if (series) {
					var seriseInfo = series.getInfo(),
					    dicomCanvas = this.viewer.getCanvas('DICOM');
					if (!this.state.mpring) {
						dicomCanvas.width = seriseInfo.width;
						dicomCanvas.height = seriseInfo.height;
					} else {
						var count = this.wrap.height = seriseInfo.dicoms.length;
						// var sliceThickness = Math
						// 	.abs(sliceCount > 1 ? (dicoms[1].sliceLocation - dicoms[0].sliceLocation) / (dicoms[1].instanceNumber - dicoms[0].instanceNumber) : dicoms[0].sliceThickness); // 切片厚度
						// state.vertical = sliceCount * sliceThickness / (sliceCount * dicom.pixelSpacing); // 纵向伸长量
					}
				}
			},
			/**
	   * 居中
	   * @return {[type]} [description]
	   */
			center: function center() {
				var state = this.state,
				    $container = this.viewer.getContainer(),
				    containerWidth = $container.width(),
				    containerHeight = $container.height(),
				    cvs = this.viewer.getCanvas('DICOM'),
				    width = cvs.width,
				    height = cvs.height;
				cvs._center();
				state.x = 0;
				state.y = 0;
				// state.x = (containerWidth - width) / 2; // 中央显示
				// state.y = (containerHeight - height) / 2;
				var scaleX = containerWidth / width,
				    scaleY = containerHeight / height;
				// 放缩比例
				if (scaleX < scaleY) {
					state.scale = scaleX;
					state._scaleReferTo = 'X';
				} else {
					state.scale = scaleY;
					state._scaleReferTo = 'Y';
				}
				this.refresh();
			},
			/**
	   * 刷新位置
	   * @param  {[type]} state [description]
	   * @return {[type]}       [description]
	   */
			refresh: function refresh(state, silent) {
				if (state) {
					$.extend(this.state, state);
				}
				this._offset();
				this._refresh();
				silent || this.viewer.publish('POSITION', this.state);
				silent || this.synchronizeCloud();
			},
			_offset: function _offset() {
				var state = this.state,
				    _ = state._;
				if (Cateyes.Utils.isDefined(_)) {
					for (var k in _) {
						state[k] = eval(state[k] + _[k]);
					}
					delete state._;
				}
				if (state.scale <= 0) {
					state.scale = 0.01;
				}
				if (isNaN(state.x)) {
					state.x = 0;
				}
				if (isNaN(state.y)) {
					state.y = 0;
				}
			},
			/**
	   * 刷新样式
	   * @return {[type]} [description]
	   */
			_refresh: function _refresh() {
				var state = this.state,
				    viewer = this.viewer,
				    cvs = viewer.getCanvas('DICOM'),
				    stl = cvs.style,
				    buff = [];
				buff.push("translate(");
				buff.push(state.x);
				buff.push("px,");
				buff.push(state.y);
				buff.push("px) ");
				buff.push("scale(");
				buff.push(state.scale * state.horizontal);
				buff.push(",");
				buff.push(state.scale * state.vertical);
				buff.push(") rotate(");
				buff.push(state.rotate * state.horizontal * state.vertical);
				buff.push("deg)");
				buff = buff.join("");
				// 兼容各浏览器
				stl.transform = buff;
				stl.oTransform = buff;
				stl.msTransform = buff;
				stl.mozTransform = buff;
				stl.webkitTransform = buff;
				//this.viewer.publishAsync(Cateyes.CustomEvents.AFTER_RENDER_DICOM);
				this.viewer.publishAsync(Cateyes.CustomEvents.ON_DICOM_CANVAS_RESIZE);
			},
			getState: function getState() {
				return this.state;
			},
			/**
	   * 获取鼠标在操作画布上的相对位置(停用)
	   */
			____getMouseXYofCanvas: function ____getMouseXYofCanvas(x, y, isInArea) {
				var canvas = this.viewer.getCanvas('DICOM'),
				    offset = canvas.$el.offset(),
				    state = this.state,
				    scale = state.scale,
				    horizontal = state.horizontal,
				    vertical = state.vertical,
				    rotate = state.rotate,
				    height = canvas.height,
				    width = canvas.width;
				var result = {
					x: Math["floor"]((x - offset.left) / scale),
					y: Math["floor"]((y - offset.top) / scale),
					width: width,
					height: height
				};
				canvas.$el.css('border', '1px solid #09c');
				// 旋转/翻转坐标修正
				if (horizontal < 0) {
					result.x = width - result.x;
				}
				if (vertical < 0) {
					result.y = height - result.y;
				}
				rotate %= 360;
				if (rotate < 0) {
					rotate += 360;
				}
				//计算出左上角位置
				if (rotate == 90) {
					result.y = height - x;
					result.x = y;
				} else if (rotate == 180) {
					result.x = width - x;
					result.y = height - y;
				} else if (rotate == 270) {
					result.y = x;
					result.x = width - y;
				}
				if (isInArea === true) {
					//出界返回null
					if (result.x > result.width || result.x < 0 || result.y > result.height || result.y < 0) {
						return null;
					}
				} else if (isInArea === false) {
					//出界返回边界值
					result.x = result.x > result.width ? result.width : result.x < 0 ? 0 : result.x;
					result.y = result.y > result.height ? result.height : result.y < 0 ? 0 : result.y;
				}
				return result;
			},
			/**
	   * 获取鼠标在操作画布上的相对位置
	   */
			getMouseXYofCanvas: function getMouseXYofCanvas(x, y, isInArea) {
				var canvas = this.viewer.getCanvas('DICOM'),
				    offset = canvas.$el.offset(),
				    state = this.state,
				    scale = state.scale,
				    horizontal = state.horizontal,
				    vertical = state.vertical,
				    rotate = state.rotate,
				    height = canvas.height,
				    width = canvas.width;
				var result = {
					width: width,
					height: height
				};
				// 旋转/翻转坐标修正
				// var x = result.x,
				// 	y = result.y;
				rotate %= 360;
				if (rotate < 0) {
					rotate += 360;
				}
				var cvsX, cvsY;
				if (rotate < 90) {
					cvsX = offset.left + width * scale * Math.sin(Math.PI / 180 * rotate);
					cvsY = offset.top;
				} else if (rotate >= 90 && rotate < 180) {
					var hypotenuse = Math.sqrt(width * width + height * height);
					cvsX = offset.left + hypotenuse * scale * Math.sin(Math.PI / 180 * (Math.atan(width / height) / (Math.PI / 180) + rotate - 90));
					cvsY = offset.top + height * scale * Math.sin(Math.PI / 180 * (rotate - 90));
				} else if (rotate >= 180 && rotate < 270) {
					var hypotenuse = Math.sqrt(width * width + height * height);
					cvsX = offset.left + width * scale * Math.cos(Math.PI / 180 * (rotate - 180));
					cvsY = offset.top + hypotenuse * scale * Math.sin(Math.PI / 180 * (Math.atan(height / width) / (Math.PI / 180) + rotate - 180));
				} else {
					cvsX = offset.left;
					cvsY = offset.top + width * scale * Math.cos(Math.PI / 180 * (rotate - 270));
				}
				//旋转向量
				var vX = x - cvsX,
				    vY = y - cvsY;
				var sink = Math.sin(Math.PI / 180 * -rotate),
				    cosk = Math.cos(Math.PI / 180 * -rotate);
				result.x = 0 + (vX - 0) * cosk - (vY - 0) * sink;
				result.y = 0 + (vX - 0) * sink + (vY - 0) * cosk;
				//比例恢复
				result.x = Math["floor"](result.x / scale);
				result.y = Math["floor"](result.y / scale);

				// 旋转/翻转坐标修正
				result.x /= Math.abs(horizontal);
				result.y /= Math.abs(vertical);
				if (horizontal < 0) {
					result.x = width - result.x;
				}
				if (vertical < 0) {
					result.y = height - result.y;
				}
				if (isInArea === true) {
					//出界返回null
					if (result.x > result.width || result.x < 0 || result.y > result.height || result.y < 0) {
						return null;
					}
				} else if (isInArea === false) {
					//出界返回边界值
					result.x = result.x > result.width ? result.width : result.x < 0 ? 0 : result.x;
					result.y = result.y > result.height ? result.height : result.y < 0 ? 0 : result.y;
				}
				return result;
			},
			/**
	   * 获取canvas在$container中的位置
	   */
			getDicomCanvasPosition: function getDicomCanvasPosition() {
				var cvs = this.viewer.getCanvas(),
				    $cvs = cvs.$el,
				    $container = this.viewer.getContainer(),
				    cvsOffset = $cvs.offset(),
				    containerOffset = $container.offset(),
				    state = this.state;
				var ow = $cvs.width(),
				    oh = $cvs.height();
				var w = Math.abs(ow * state.scale * state.horizontal),
				    h = Math.abs(oh * state.scale * state.vertical);
				return $.extend({}, this.state, {
					top: state.y, //cvsOffset.top - containerOffset.top,
					left: state.x, //cvsOffset.left - containerOffset.left,
					width: w,
					height: h
				});
			},
			/**
	   * 计算MPR后的尺寸
	   */
			calculateMprSize: function calculateMprSize(params) {
				var orientation = params.orientation,
				    originalOrientation = params.originalOrientation,
				    series = this.viewer.getSeries(),
				    horizontal = this.state.horizontal,
				    vertical = this.state.vertical;
				horizontal /= Math.abs(horizontal);
				vertical /= Math.abs(vertical);
				if (orientation != originalOrientation) {
					if (originalOrientation == 'AXIAL') {
						vertical = vertical * series.info.sizeTransform;
					} else {
						if (orientation == 'AXIAL') {
							vertical = vertical * series.info.sizeTransform;
						} else {
							horizontal = horizontal * series.info.sizeTransform;
						}
					}
				}
				this.state.horizontal = horizontal;
				this.state.vertical = vertical;
				this._refresh();
			},
			/**
	   * 云同步
	   * @return {[type]} [description]
	   */
			synchronizeCloud: function synchronizeCloud() {
				if (Cateyes.CatCloud.isOnline()) {
					Cateyes.SocketPubSub.publish(Cateyes.SOCKET_EVENTS.SK_SEND_MESSAGE, this.getJson());
				}
			},
			getJson: function getJson() {
				var json = {};
				this.calculateProportion();
				json['VIEWER_' + this.viewer.getViewerId() + '|positioner'] = JSON.stringify(this.state);
				return json;
			},
			setJson: function setJson(json) {
				var params = JSON.parse(json);
				this.useProportion(params);
				this.refresh(params, true);
			},
			/**
	   * 获取canvas相对容器位置（比例）
	   */
			calculateProportion: function calculateProportion() {
				var state = this.state,
				    $parentContainer = this.viewer.getContainer(),
				    cvs = this.viewer.getCanvas('DICOM'),
				    pWidth = $parentContainer.width(),
				    pHeight = $parentContainer.height();
				state._ratioX = state.x / pWidth;
				state._ratioY = state.y / pHeight;
				state._ratioScaleX = cvs.width * state.scale / pWidth;
				state._ratioScaleY = cvs.height * state.scale / pHeight;
			},
			useProportion: function useProportion(params) {
				var $parentContainer = this.viewer.getContainer(),
				    cvs = this.viewer.getCanvas('DICOM'),
				    pWidth = $parentContainer.width(),
				    pHeight = $parentContainer.height();
				params.x = params._ratioX * pWidth;
				params.y = params._ratioY * pHeight;
				if (params._scaleReferTo == 'X') {
					params.scale = pWidth * params._ratioScaleX / cvs.width;
				} else {
					params.scale = pHeight * params._ratioScaleY / cvs.height;
				}
			}
		};

		Positioner.prototype.constructor = Positioner;
	})();

/***/ }),
/* 309 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * websocket 组件
	 *
	 * 实现实时交互功能
	 *
	 * @return {[type]} [description]
	 */
	(function () {

		var Cateyes = window.Cateyes || (window.Cateyes = {});

		var CatCloud = Cateyes.CatCloud = {
			_isOnline: false,
			isOnline: function isOnline() {
				return this._isOnline;
			}
		};

		var CateyesSocket = Cateyes.CateyesSocket = function () {
			this.init();
		};

		CateyesSocket.prototype = {
			URL: 'ws://117.34.72.19:9000/ws/internetop',
			/**
	   * 初始化
	   * @return {[type]} [description]
	   */
			init: function init() {
				this.connect();
			},
			/**
	   * 连接
	   * @return {[type]} [description]
	   */
			connect: function connect() {
				var connection = this.connection,
				    url = this.URL;
				if (connection != null) {
					this.disconnect();
				}
				if ('WebSocket' in window) {
					connection = new WebSocket(url);
				} else if ('MozWebSocket' in window) {
					connection = new MozWebSocket(url);
				} else {
					alert('WebSocket is not supported by this browser.');
					return;
				}
				this.connection = connection;
				this._initEvent();
			},
			_initEvent: function _initEvent() {
				var self = this,
				    connection = this.connection;
				connection.onopen = function () {
					Cateyes.SocketPubSub.publish(EVENTS.SK_CONNECT_OPENED);
					console.log('open');
				};
				connection.onmessage = function (evt) {
					var data;
					try {
						data = JSON.parse(evt.data);
					} catch (e) {
						console.log(e);
					}
					Cateyes.SocketPubSub.publish(EVENTS.SK_RECEIVE_MESSAGE, data || evt.data);
				};
				connection.onclose = function (evt) {
					if (self.connection) {
						console.log('断线重连');
						self.connect();
					} else {
						Cateyes.SocketPubSub.publish(EVENTS.SK_CONNECT_CLOSED);
					}
					console.log('close');
				};
				connection.onerror = function (evt) {
					console.log("WebSocketError!");
				};
			},
			/**
	   * 断开连接
	   */
			disconnect: function disconnect() {
				var connection = this.connection;
				this.connection = null;
				if (connection != null) {
					connection.close();
				}
				CatCloud._isOnline = false;
				Cateyes.SocketPubSub.publish('SK_CONNECT_CLOSEED');
			},
			/**
	   * 发送消息
	   * @return {[type]} [description]
	   */
			initChat: function initChat(data) {
				this._send({
					type: 'INIT_CHAT',
					topic: '123456',
					data: JSON.stringify(data)
				});
				CatCloud._isOnline = true;
				console.log('init');
			},
			/**
	   * 发送消息
	   * @return {[type]} [description]
	   */
			sendMessage: function sendMessage(data) {
				this._send({
					type: 'MESSAGE',
					topic: '123456',
					data: JSON.stringify(data)
				});
			},
			/**
	   * 克隆镜像
	   * @return {[type]} [description]
	   */
			cloneMirror: function cloneMirror() {
				this._send({
					type: 'CLONE_MIRROR',
					topic: '123456'
				});
				console.log('clone');
			},
			_send: function _send(msg) {
				if (this.connection.readyState == 1) {
					this.connection && this.connection.send(JSON.stringify(msg));
				}
			}
		};

		CateyesSocket.prototype.constructor = CateyesSocket;

		/*WEB SOCKET 实例*/
		var ws;
		var SocketPubSub = Cateyes.SocketPubSub = new Cateyes.PubSub();
		SocketPubSub.regist({
			SK_SEND_MESSAGE: function SK_SEND_MESSAGE(msg) {
				if (!ws) {
					ws = new CateyesSocket();
				}
				ws.sendMessage(msg);
			},
			SK_RECEIVE_MESSAGE: function SK_RECEIVE_MESSAGE(json) {
				if (json.type == "MESSAGE" || json.type == "CLONE_MIRROR") {
					Cateyes.MessageResolver.analysis(json.data);
					if (json.type == "CLONE_MIRROR") {
						CatCloud._isOnline = true;
					}
				}
			},
			SK_CLONE: function SK_CLONE() {
				if (!ws) {
					ws = new CateyesSocket();
				}
				ws.cloneMirror();
			},
			SK_OPEN_CONNECT: function SK_OPEN_CONNECT() {
				if (!ws) {
					ws = new CateyesSocket();
				}
			},
			SK_INIT_CHAT: function SK_INIT_CHAT(msg) {
				if (!ws) {
					ws = new CateyesSocket();
				}
				ws.initChat(msg);
			}
		});

		var EVENTS = Cateyes.SOCKET_EVENTS = {
			SK_CONNECT_OPENED: 'SK_CONNECT_OPENED',
			SK_CONNECT_CLOSED: 'SK_CONNECT_CLOSED',
			SK_SEND_MESSAGE: 'SK_SEND_MESSAGE',
			SK_RECEIVE_MESSAGE: 'SK_RECEIVE_MESSAGE',
			SK_CLONE: 'SK_CLONE',
			SK_OPEN_CONNECT: 'SK_OPEN_CONNECT',
			SK_INIT_CHAT: 'SK_INIT_CHAT'
		};
	})();

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(311);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 着色器工厂
	 *
	 * author : fanll
	 *
	 * createTime : 2015-07-20
	 *
	 * @return {[type]} [description]
	 */
	(function (window) {

		var Cateyes = window.Cateyes || (window.Cateyes = {});

		/**
	  * 着色器工厂
	  * @type {[type]}
	  */
		var TinterFactory = Cateyes.TinterFactory = {
			TYPE: {},
			/**
	   * 创建着色器
	   * @return {[type]} [description]
	   */
			create: function create(type, opts) {
				if (this.TYPE[type]) {
					return new this.TYPE[type](opts);
				} else {
					throw new Error('着色器【' + type + '】未定义');
				}
			}
		};

		/**
	  * 着色器基类
	  * @param {[type]} opts [description]
	  */
		var Tinter = function Tinter(opts) {};
		Tinter.prototype = {
			init: function init() {
				throw new Error('init 方法未在子类中实现！');
			},
			refresh: function refresh() {
				throw new Error('refresh 方法未在子类中实现！');
			},
			tint: function tint() {
				throw new Error('tint 方法未在子类中实现！');
			},
			reset: function reset() {
				throw new Error('reset 方法未在子类中实现！');
			}
		};
		Tinter.prototype.constructor = Tinter;
		//静态离屏Canvas
		Tinter.getOffScreenCanvasBuffer = function () {
			var cvs = document.createElement('canvas'),
			    panel;

			cvs.context = cvs.getContext('2d');
			cvs.style.display = 'none';
			return function (width, height) {
				if (cvs.width == width && cvs.height == height && panel) {
					return panel;
				} else {
					cvs.width = width;
					cvs.height = height;
					panel = cvs.context.getImageData(0, 0, width, height);
					return panel;
				}
			};
		}();

		/**
	  * 窗宽窗位着色器
	  */
		var WindowTinter = TinterFactory.TYPE['WINDOW'] = Cateyes.ClassHelper.extend(Tinter, function (viewer) {
			this.init(viewer);
		}, {
			/**
	   * 初始化
	   * @return {[type]} [description]
	   */
			init: function init(viewer) {
				this.viewer = viewer;
				this._initEvent();
				this._initState();
				this.inited = true;
			},
			_initEvent: function _initEvent() {
				var self = this;
				if (!this.inited) {
					this.viewer.subscribe(Cateyes.CustomEvents.AFTER_BIND_SERIES, function (series) {
						self._initState(series);
					});
					this.viewer.subscribe(Cateyes.CustomEvents.AFTER_RENDER_DICOM, function (series) {
						self.loading(false);
					});
					this.viewer.subscribe(Cateyes.CustomEvents.BEFORE_RENDER_DICOM, function (params) {
						var viewer = self.viewer,
						    dicomProxy = params.dicomProxy;
						// self.loading(true, dicomProxy);
						self.viewer.publish(Cateyes.CustomEvents.VIEWER_LOADING, {});
						if (dicomProxy) {
							dicomProxy.then(function (dicom) {
								var currentDicom = viewer.player.getCurrentDicom();
								if (dicom && currentDicom && currentDicom.index == dicomProxy.index) {
									self.tint(viewer.getCanvas('DICOM'), dicom, params.silint);
									viewer.publish('AFTER_RENDER_DICOM', self.state);
								}
							});
						} else {
							self.tint(viewer.getCanvas('DICOM'), null, params.silint);
							viewer.publish('AFTER_RENDER_DICOM', self.state);
						}
					});
				}
			},
			_initState: function _initState(series) {
				series = series || this.viewer.getSeries();
				if (series) {
					var info = this.seriesInfo = series.getInfo();
					this.state = {
						isInverse: false,
						isPseudoColor: false,
						windowWidth: Math.round(series.info.windowWidth),
						windowCenter: Math.round(series.info.windowCenter),
						rescaleSlope: series.info.rescaleSlope,
						rescaleIntercept: series.info.rescaleIntercept,
						samplesPerPixel: series.info.samplesPerPixel,
						orientation: series.info.orientation,
						forceOperate: false //强制处理过
					};
					this._calculateTintSize();
				}
			},
			getState: function getState() {
				return this.state;
			},
			/**
	   * 刷新
	   * @return {[type]} [description]
	   */
			refresh: function refresh(params) {
				if (params.windowWidth == 'DEFAULT') {
					params.windowWidth = this.seriesInfo.windowWidth;
				}
				if (params.windowCenter == 'DEFAULT') {
					params.windowCenter = this.seriesInfo.windowCenter;
				}
				if (params.windowWidth == 'FULL' || params.windowCenter == 'FULL') {
					var gtc = Cateyes.DicomHelper.grayToCT,
					    minCT = gtc(this.seriesInfo.minGray, this.state),
					    maxCT = gtc(this.seriesInfo.maxGray, this.state);
					if (params.windowWidth == 'FULL') {
						params.windowWidth = maxCT - minCT;
					}
					if (params.windowCenter == 'FULL') {
						params.windowCenter = (maxCT - minCT) / 2;
					}
				}
				$.extend(this.state, params);
				if (this.state) {
					this._offset();
				}
			},
			_offset: function _offset() {
				var state = this.state,
				    last = state.windowWidth,
				    _ = state._;
				if (Cateyes.Utils.isDefined(_)) {
					for (var k in _) {
						state[k] = eval(state[k] + _[k]);
					}
					delete state._;
				}
				state.windowWidth = Math.round(state.windowWidth);
				state.windowCenter = Math.round(state.windowCenter);
				Cateyes.GlobalPubSub.publishAsync(Cateyes.CustomEvents.ON_VIEWER_WINDOW_CHANGE);
			},
			/**
	   * 重置
	   * @return {[type]} [description]
	   */
			reset: function reset() {
				this._initState();
			},
			/**
	   * 着色
	   * @return {[type]} [description]
	   * getPixelData
	   */
			_tintTime: null,
			tint: function tint(canvas, dicom, silent, getPixelData) {
				var now = new Date().getTime();
				if (this._throttleEnable && this._tintTime != null && now - this._tintTime < 220) {
					return;
				}
				this._tintTime = now;

				var start = new Date().getTime(),
				    cc = [];
				var self = this,
				    state = this.state,
				    isMpring = this.isMpring(),
				    img = dicom._img,
				    cols = isMpring ? this.state.width : dicom.info.info.width,
				    rows = isMpring ? this.state.height : dicom.info.info.height,
				    panel = Tinter.getOffScreenCanvasBuffer(cols, rows),
				    pixelData = panel.data,
				    grayMapping = null,
				    isInverse = state.isInverse,
				    isPseudoColor = state.isPseudoColor,
				    l = cols * rows,
				    p,
				    rgb;
				var minGray = dicom.info.minGray || 0;

				try {
					dicom.info.uri = JSON.parse(dicom.info.uri);
				} catch (e) {}

				if (canvas.width != cols || canvas.height != rows) {
					canvas.width = cols;
					canvas.height = rows;
					canvas._center();
					this.viewer.publish(Cateyes.CustomEvents.ON_DICOM_CANVAS_RESIZE);
				}
				if (!dicom) {
					return;
				}
				if (dicom.info.info.samplesPerPixel > 1) {
					if (!state.forceOperate) {
						state.forceOperate = true;
						state.windowWidth = 256;
						state.windowCenter = 128;
					}
					var p1, p2, p3, p4;
					//普通图片
					//canvas.context.drawImage(dicom.getImage(), 0, 0);
					//灰度图片
					var dicomPixelData = dicom.getPixelData();
					cc.push('load' + (new Date().getTime() - start));
					grayMapping = self._generateGrayMapping(dicom.info);
					var showMaxGray = grayMapping.showMaxGray,
					    showMinGray = grayMapping.showMinGray,
					    step = grayMapping.step;
					if (dicom.info.extensions) {
						//DX,CR的反色
						if (dicom.info.extensions.photometricInterpretation == 'MONOCHROME1') {
							isInverse = !isInverse;
						}
					};
					cc.push('map' + (new Date().getTime() - start));
					// 渲染
					// if (isInverse && isPseudoColor) {
					// 	for (var i = 0, j = 0; i < l; i++, j += 4) {
					// 		p = dicomPixelData[i];
					// 		p = 255 - (p <= showMinGray ? 0 : (p >= showMaxGray ? 255 : ((p - showMinGray) * step)));
					// 		rgb = self._pseudoColorChange(p);
					// 		pixelData[j] = rgb[0];
					// 		pixelData[j + 1] = rgb[1];
					// 		pixelData[j + 2] = rgb[2];
					// 		pixelData[j + 3] = 255;
					// 	}
					// } else if ((!isInverse) && isPseudoColor) {
					// 	for (var i = 0, j = 0; i < l; i++, j += 4) {
					// 		p = dicomPixelData[i];
					// 		rgb = self._pseudoColorChange(p <= showMinGray ? 0 : (p >= showMaxGray ? 255 : ((p - showMinGray) * step)));
					// 		pixelData[j] = rgb[0];
					// 		pixelData[j + 1] = rgb[1];
					// 		pixelData[j + 2] = rgb[2];
					// 		pixelData[j + 3] = 255;
					// 	}
					// } else if (isInverse && (!isPseudoColor)) {
					// 	for (var i = 0, j = 0; i < l; i++, j += 4) {
					// 		p = dicomPixelData[i];
					// 		p = 255 - (p <= showMinGray ? 0 : (p >= showMaxGray ? 255 : ((p - showMinGray) * step)));
					// 		pixelData[j] = pixelData[j + 1] = pixelData[j + 2] = p;
					// 		pixelData[j + 3] = 255;
					// 	}
					// }
					if (canvas.type == 'WEBGL') {
						canvas.ST.options = {
							piscolor: 2,
							pmingray: showMinGray,
							pmaxgray: showMaxGray,
							pstep: step,
							rescaleSlope: state.rescaleSlope,
							rescaleIntercept: minGray < 0 ? minGray : 0,
							pinverse: !!isInverse,
							ppseudocolor: !!isPseudoColor
						};
						var PImage = _index2.default.Particle.PImage;
						var pimage = new PImage(img, null, null, canvas.ST.gl);

						if (!canvas.ST.LOADIMAGE || canvas.ST.LOADIMAGE != img) {
							canvas.ST.options.offset = 0;
							canvas.ST.LOADIMAGE = img;
							canvas.ST.loadparticle(pimage);
							canvas.ST.render(pimage, null, getPixelData);
						} else {
							canvas.ST.render(pimage, null, getPixelData);
						}
					} else {
						if (isInverse) {
							for (var i = 0, j = 0; i < l; i++, j += 4) {
								p = dicomPixelData[j];
								p = 255 - (p <= showMinGray ? 0 : p >= showMaxGray ? 255 : (p - showMinGray) * step);
								pixelData[j] = p;

								p = dicomPixelData[j + 1];
								p = 255 - (p <= showMinGray ? 0 : p >= showMaxGray ? 255 : (p - showMinGray) * step);
								pixelData[j + 1] = p;

								p = dicomPixelData[j + 2];
								p = 255 - (p <= showMinGray ? 0 : p >= showMaxGray ? 255 : (p - showMinGray) * step);
								pixelData[j + 2] = p;
								pixelData[j + 3] = 255;
							}
						} else {
							var starttttt = new Date().getTime();
							var t;
							for (var i = 0, j = 0; i < l; i++, j += 4) {
								p = dicomPixelData[j];
								p = p <= showMinGray ? 0 : p >= showMaxGray ? 255 : (p - showMinGray) * step;
								pixelData[j] = p;

								p = dicomPixelData[j + 1];
								p = p <= showMinGray ? 0 : p >= showMaxGray ? 255 : (p - showMinGray) * step;
								pixelData[j + 1] = p;

								p = dicomPixelData[j + 2];
								p = p <= showMinGray ? 0 : p >= showMaxGray ? 255 : (p - showMinGray) * step;
								pixelData[j + 2] = p;
								pixelData[j + 3] = 255;
							}
						}
						canvas.context.putImageData(panel, 0, 0);
					}

					cc.push('calc' + (new Date().getTime() - start));

					cc.push('put' + (new Date().getTime() - start));
					cc.push('tintf' + (new Date().getTime() - start));
					//self._tintTime = null;
					// cc.forEach(time => {
					// 		console.log(time)
					// 	})
					//SunsetConsole.apply(null, cc);
					var tinterCost = new Date().getTime() - now;
					self._throttleEnable = tinterCost > 100;
				} else {
					cc.push('pre' + (new Date().getTime() - start));
					//灰度图片
					this.getGrayDataset(dicom).then(function (dicomPixelData) {
						cc.push('load' + (new Date().getTime() - start));
						grayMapping = self._generateGrayMapping(dicom.info);
						var showMaxGray = grayMapping.showMaxGray,
						    showMinGray = grayMapping.showMinGray,
						    step = grayMapping.step;
						if (dicom.info.extensions) {
							//DX,CR的反色
							if (dicom.info.extensions.photometricInterpretation == 'MONOCHROME1') {
								isInverse = !isInverse;
							}
						};
						cc.push('map' + (new Date().getTime() - start));
						// 渲染
						if (canvas.type == 'WEBGL') {
							canvas.ST.options = {
								piscolor: 1,
								pmingray: showMinGray,
								pmaxgray: showMaxGray,
								pstep: step,
								rescaleSlope: state.rescaleSlope,
								rescaleIntercept: minGray < 0 ? minGray : 0,
								pinverse: !!isInverse,
								ppseudocolor: !!isPseudoColor
							};

							var _PImage = _index2.default.Particle.PImage;
							var _pimage = new _PImage(img, null, null, canvas.ST.gl);

							if (!canvas.ST.LOADIMAGE || canvas.ST.LOADIMAGE != img) {
								canvas.ST.options.offset = 0;
								canvas.ST.loadparticle(_pimage);
								canvas.ST.LOADIMAGE = img;
								canvas.ST.render(_pimage, null, getPixelData);
							} else {
								canvas.ST.render(_pimage, null, getPixelData);
							}
						} else {

							if (isInverse && isPseudoColor) {
								for (var i = 0, j = 0; i < l; i++, j += 4) {
									p = dicomPixelData[i];
									p = 255 - (p <= showMinGray ? 0 : p >= showMaxGray ? 255 : (p - showMinGray) * step);
									rgb = self._pseudoColorChange(p);
									pixelData[j] = rgb[0];
									pixelData[j + 1] = rgb[1];
									pixelData[j + 2] = rgb[2];
									pixelData[j + 3] = 255;
								}
							} else if (!isInverse && isPseudoColor) {
								for (var i = 0, j = 0; i < l; i++, j += 4) {
									p = dicomPixelData[i];
									rgb = self._pseudoColorChange(p <= showMinGray ? 0 : p >= showMaxGray ? 255 : (p - showMinGray) * step);
									pixelData[j] = rgb[0];
									pixelData[j + 1] = rgb[1];
									pixelData[j + 2] = rgb[2];
									pixelData[j + 3] = 255;
								}
							} else if (isInverse && !isPseudoColor) {
								for (var i = 0, j = 0; i < l; i++, j += 4) {
									p = dicomPixelData[i];
									p = 255 - (p <= showMinGray ? 0 : p >= showMaxGray ? 255 : (p - showMinGray) * step);
									pixelData[j] = pixelData[j + 1] = pixelData[j + 2] = p;
									pixelData[j + 3] = 255;
								}
							} else {
								var starttttt = new Date().getTime();
								var t;
								for (var i = 0, j = 0; i < l; i++, j += 4) {
									p = dicomPixelData[i];
									p = p <= showMinGray ? 0 : p >= showMaxGray ? 255 : (p - showMinGray) * step;
									pixelData[j] = pixelData[j + 1] = pixelData[j + 2] = p;
									pixelData[j + 3] = 255;
								}
							}
							canvas.context.putImageData(panel, 0, 0);
						}

						cc.push('calc' + (new Date().getTime() - start));
						cc.push('put' + (new Date().getTime() - start));
						cc.push('tintf' + (new Date().getTime() - start));
						//self._tintTime = null;
						//SunsetConsole.apply(null, cc);
						var tinterCost = new Date().getTime() - now;
						self._throttleEnable = tinterCost > 100;
					});
				}
				silent || this.synchronizeCloud();
			},
			/**
	   * 加载中
	   * @return {[type]} [description]
	   */
			loading: function loading(showLoading, dicomProxy) {
				this._isLoading = showLoading;
				if (showLoading && !dicomProxy.getPixelData) {
					this.clear();
					this.viewer.publish(Cateyes.CustomEvents.VIEWER_LOADING, {});
					//加载前将虚像画入
					if (dicomProxy) {
						var self = this,
						    img = new Image();
						img.src = Cateyes.IMAGE_RESOUCE_PREFIX + dicomProxy.info.frames[0].thumbnailUri;
						img.onload = function () {
							if (self._isLoading) {
								var cvs = self.viewer.getCanvas('DICOM');
								// cvs.context.drawImage(img, 0, 0, cvs.width, cvs.height);
							}
						};
					}
				} else {
					this.viewer.publish(Cateyes.CustomEvents.VIEWER_LOADING);
				}
			},
			clear: function clear() {
				var canvas = this.viewer.getCanvas('DICOM');
				if (canvas.type == 'WEBGL') {
					canvas.ST.clean();
				} else {
					canvas.context.clearRect(0, 0, canvas.width, canvas.height);
				}
			},
			/**
	   * 是否MPR重建中
	   * @return {Boolean} [description]
	   */
			isMpring: function isMpring() {
				var series = this.viewer.getSeries(),
				    originalOrientation = series.info.orientation,
				    orientation = this.state.orientation;
				return !(originalOrientation == orientation || !orientation);
			},
			/**
	   * 获取灰度数组
	   */
			getGrayDataset: function getGrayDataset(dicom) {
				var series = this.viewer.getSeries(),
				    originalOrientation = series.info.orientation,
				    orientation = this.state.orientation;
				if (originalOrientation == orientation || !orientation) {
					var a = dicom.getPixelData();
					var d = $.Deferred().resolve(a);
					return d;
				} else {
					var func;
					if (originalOrientation == 'AXIAL') {
						if (orientation == 'CORONAL') {
							func = '_getRowsGray';
						} else {
							func = '_getColumnsGray';
						}
					} else {
						if (orientation == 'AXIAL') {
							func = '_getRowsGray';
						} else {
							func = '_getColumnsGray';
						}
					}
					return this[func](this.viewer.player.getState().index, originalOrientation).then(function (data) {
						Cateyes.loading(false);
						return data;
					});
				}
			},
			_getRowsGray: function _getRowsGray(rowIndex, originalOrientation) {
				var series = this.viewer.getSeries(),
				    it = series.getIterator(),
				    defs = [],
				    buff,
				    temp,
				    merge = Array.prototype.push;
				defs.push(it.getCurrent());
				while (temp = it.next()) {
					defs.push(temp);
				}
				return $.when.apply($, defs).then(function () {
					var cols = series.info.width,
					    args = arguments,
					    grays = [],
					    pixels;
					if (originalOrientation == 'AXIAL') {
						for (var i = 0, l = args.length; i < l; i++) {
							pixels = args[i].getPixelData();
							for (var j = rowIndex * cols, jl = j + cols; j < jl; j++) {
								grays.push(pixels[j]);
							}
						}
					} else if (originalOrientation == 'SAGITTAL') {
						for (var j = rowIndex * cols, jl = j + cols; j < jl; j++) {
							for (var i = 0, l = args.length; i < l; i++) {
								pixels = args[i].getPixelData();
								grays.push(pixels[j]);
							}
						}
					} else {
						for (var i = args.length - 1; i >= 0; i--) {
							pixels = args[i].getPixelData();
							for (var j = rowIndex * cols, jl = j + cols; j < jl; j++) {
								grays.push(pixels[j]);
							}
						}
					}

					return grays;
				});
			},
			_getColumnsGray: function _getColumnsGray(columnIndex, originalOrientation) {
				var series = this.viewer.getSeries(),
				    it = series.getIterator(),
				    defs = [],
				    buff,
				    temp,
				    merge = Array.prototype.push;
				defs.push(it.getCurrent());
				while (temp = it.next()) {
					defs.push(temp);
				}
				return $.when.apply($, defs).then(function () {
					var rows = series.info.height,
					    cols = series.info.width,
					    args = arguments,
					    grays = [],
					    pixels;
					if (originalOrientation == 'AXIAL') {
						for (var i = 0, l = args.length; i < l; i++) {
							pixels = args[i].getPixelData();
							for (var j = 0, jl = rows; j < jl; j++) {
								grays.push(pixels[j * cols + columnIndex]);
							}
						}
					} else if (originalOrientation == 'SAGITTAL') {
						for (var j = 0, jl = rows; j < jl; j++) {
							for (var i = 0, l = args.length; i < l; i++) {
								pixels = args[i].getPixelData();
								grays.push(pixels[j * cols + columnIndex]);
							}
						}
					} else {
						for (var j = 0, jl = rows; j < jl; j++) {
							for (var i = args.length - 1; i >= 0; i--) {
								pixels = args[i].getPixelData();
								grays.push(pixels[j * cols + columnIndex]);
							}
						}
					}
					return grays;
				});
			},
			/**
	   * 计算渲染画布尺寸
	   * @return {[type]} [description]
	   */
			_calculateTintSize: function _calculateTintSize() {
				var series = this.viewer.getSeries(),
				    originalOrientation = series.info.orientation,
				    orientation = this.state.orientation,
				    height,
				    width;
				if (originalOrientation == orientation || !orientation) {
					width = series.info.width;
					height = series.info.height;
				} else {
					if (originalOrientation == 'AXIAL') {
						if (orientation == 'CORONAL') {
							width = series.info.width;
							height = series.getTotal();
						} else {
							width = series.info.height;
							height = series.getTotal();
						}
					} else if (originalOrientation == 'CORONAL') {
						if (orientation == 'AXIAL') {
							width = series.info.width;
							height = series.getTotal();
						} else {
							width = series.getTotal();
							height = series.info.height;
						}
					} else {
						if (orientation == 'AXIAL') {
							width = series.getTotal();
							height = series.info.width;
						} else {
							width = series.getTotal();
							height = series.info.height;
						}
					}
				}
				this.state.width = width;
				this.state.height = height;
			},
			/**
	   * 获取灰度映射面板
	   */
			_generateGrayMapping: function _generateGrayMapping(dicomInfo) {
				/*
	    * 窗宽：灰度映射范围 窗位：灰度映射中心偏移 exp: 窗宽：300H，则映射CT值为
	    * -150H~150H，窗位为40H，则实际映射CT值为-110H~190H
	    */
				var info = dicomInfo.info,
				    state = this.state,
				    windowWidth = state.windowWidth,
				    windowCenter = state.windowCenter,
				    gtc = Cateyes.DicomHelper.grayToCT,
				    ctg = Cateyes.DicomHelper.cTToGray;
				// ct转换为gray
				if (info.rescaleSlope == 0) {
					info.rescaleSlope = 1;
					info.rescaleIntercept = 0;
				}
				// 生成灰度映射板
				var showMinCT = windowCenter - (windowWidth >> 1),
				    showMaxCT = windowCenter + (windowWidth >> 1),
				    showMinGray = ctg(showMinCT, info),
				    showMaxGray = ctg(showMaxCT, info),
				    step = 255.0 / windowWidth,
				    i;
				return {
					step: step,
					showMinGray: showMinGray,
					showMaxGray: showMaxGray
				};
			},
			/**
	   * 灰度-彩色转换算法
	   */
			_pseudoColorChange: function _pseudoColorChange(gray) {
				// var r, g, b;
				// if (gray < 64) {
				// 	r = 0;
				// 	g = 4 * gray;
				// 	b = 255;
				// } else if (gray < 128) {
				// 	r = 0;
				// 	g = 255;
				// 	b = (127 - gray) * 4;
				// } else if (gray < 192) {
				// 	r = (gray - 128) * 4;
				// 	g = 255;
				// 	b = 0;
				// } else {
				// 	r = 255;
				// 	g = (255 - gray) * 4;
				// 	b = 0;
				// }
				// return [r, g, b];
				//
				gray = gray / 256;
				var red, green, blue;
				if (gray <= 0.25) {
					red = 0;
					green = 0;
					blue = 4.0 * gray;
				} else if (gray <= 0.375) {
					red = 4.0 * (gray - 0.25);
					green = 0;
					blue = 1.0;
				} else if (gray < 0.5) {
					red = 4.0 * (gray - 0.25);
					green = 0;
					blue = 1.0 - 8.0 * (gray - 0.375);
				} else if (gray == 0.5) {
					red = 1.0;
					green = 0;
					blue = 0;
				} else if (gray <= 0.75) {
					red = 1.0;
					green = 4.0 * (gray - 0.5);
					blue = 0;
				} else {
					red = 1.0;
					green = 1.0;
					blue = 4.0 * (gray - 0.75);
				}
				return [red * 256, green * 256, blue * 256];
			},
			__pseudoColorChange: function __pseudoColorChange(gray) {
				//return PSEUDO_COLOR_CODING_SCHEDULE.RAINBOW_SATURABILITY_2[Math.round(gray)];
				var rgb = [];
				if (gray <= 51) {
					rgb[2] = 255;
					rgb[1] = gray * 5;
					rgb[0] = 0;
				} else if (gray <= 102) {
					gray -= 51;
					rgb[2] = 255 - gray * 5;
					rgb[1] = 255;
					rgb[0] = 0;
				} else if (gray <= 153) {
					gray -= 102;
					rgb[2] = 0;
					rgb[1] = 255;
					rgb[0] = gray * 5;
				} else if (gray <= 204) {
					gray -= 153;
					rgb[2] = 0;
					rgb[1] = 255 - (128.0 * gray / 51.0 + 0.5);
					rgb[0] = 255;
				} else {
					gray -= 204;
					rgb[2] = 0;
					rgb[1] = 127 - (127.0 * gray / 51.0 + 0.5);
					rgb[0] = 255;
				}
				return rgb;
			},
			/**
	   * mpr重建
	   * @return {[type]} [description]
	   */
			mpr: function mpr(orientation) {
				var lastOrientation = this.state.orientation,
				    series = this.viewer.getSeries();
				if (orientation) {
					this.state.orientation = orientation;
				} else if (series) {
					this.state.orientation = series.info.orientation;
				}
				if (lastOrientation != this.state.orientation) {
					this.state.orientation != series.info.orientation && Cateyes.loading('MPR重建中...', $('#major'));
					this.viewer.publish(Cateyes.CustomEvents.AFTER_MPR_REBUILD, {
						orientation: this.state.orientation,
						originalOrientation: series.info.orientation
					});
					this._calculateTintSize();
					var self = this;
					setTimeout(function () {
						self.viewer.player.jump(Math.floor(self.viewer.player.getTotal() / 2));
					});
				}
			},
			/**
	   * 云同步
	   * @return {[type]} [description]
	   */
			synchronizeCloud: function synchronizeCloud() {
				this.viewer.publish('AFTER_TINT_DICOM', this.state);
				if (Cateyes.CatCloud.isOnline()) {
					Cateyes.SocketPubSub.publish(Cateyes.SOCKET_EVENTS.SK_SEND_MESSAGE, this.getJson());
				}
			},
			getJson: function getJson() {
				var json = {};
				json['VIEWER_' + this.viewer.getViewerId() + '|tinter'] = JSON.stringify(this.state);
				return json;
			},
			setJson: function setJson(json) {
				var params = JSON.parse(json);
				this.refresh(params);
				this.viewer.render(true);
			}
		});

		WindowTinter.prototype.constructor = WindowTinter;

		//伪彩编码
		//
		var PSEUDO_COLOR_CODING_SCHEDULE = {
			// 红色饱和度编码 
			RED_SATURABILITY: [[0, 0, 0, 0], [1, 0, 0, 0], [2, 0, 0, 0], [3, 0, 0, 0], [4, 0, 0, 0], [5, 0, 0, 0], [6, 0, 0, 0], [7, 0, 0, 0], [8, 0, 0, 0], [9, 0, 0, 0], [10, 0, 0, 0], [11, 0, 0, 0], [12, 0, 0, 0], [13, 0, 0, 0], [14, 0, 0, 0], [15, 0, 0, 0], [16, 0, 0, 0], [17, 0, 0, 0], [18, 0, 0, 0], [19, 0, 0, 0], [20, 0, 0, 0], [21, 0, 0, 0], [22, 0, 0, 0], [23, 0, 0, 0], [24, 0, 0, 0], [25, 0, 0, 0], [26, 0, 0, 0], [27, 0, 0, 0], [28, 0, 0, 0], [29, 0, 0, 0], [30, 0, 0, 0], [31, 0, 0, 0], [32, 0, 0, 0], [33, 0, 0, 0], [34, 0, 0, 0], [35, 0, 0, 0], [36, 0, 0, 0], [37, 0, 0, 0], [38, 0, 0, 0], [39, 0, 0, 0], [40, 0, 0, 0], [41, 0, 0, 0], [42, 0, 0, 0], [43, 0, 0, 0], [44, 0, 0, 0], [45, 0, 0, 0], [46, 0, 0, 0], [47, 0, 0, 0], [48, 0, 0, 0], [49, 0, 0, 0], [50, 0, 0, 0], [51, 0, 0, 0], [52, 0, 0, 0], [53, 0, 0, 0], [54, 0, 0, 0], [55, 0, 0, 0], [56, 0, 0, 0], [57, 0, 0, 0], [58, 0, 0, 0], [59, 0, 0, 0], [60, 0, 0, 0], [61, 0, 0, 0], [62, 0, 0, 0], [63, 0, 0, 0], [64, 0, 0, 0], [65, 0, 0, 0], [66, 0, 0, 0], [67, 0, 0, 0], [68, 0, 0, 0], [69, 0, 0, 0], [70, 0, 0, 0], [71, 0, 0, 0], [72, 0, 0, 0], [73, 0, 0, 0], [74, 0, 0, 0], [75, 0, 0, 0], [76, 0, 0, 0], [77, 0, 0, 0], [78, 0, 0, 0], [79, 0, 0, 0], [80, 0, 0, 0], [81, 0, 0, 0], [82, 0, 0, 0], [83, 0, 0, 0], [84, 0, 0, 0], [85, 0, 0, 0], [86, 0, 0, 0], [87, 0, 0, 0], [88, 0, 0, 0], [89, 0, 0, 0], [90, 0, 0, 0], [91, 0, 0, 0], [92, 0, 0, 0], [93, 0, 0, 0], [94, 0, 0, 0], [95, 0, 0, 0], [96, 0, 0, 0], [97, 0, 0, 0], [98, 0, 0, 0], [99, 0, 0, 0], [100, 0, 0, 0], [101, 0, 0, 0], [102, 0, 0, 0], [103, 0, 0, 0], [104, 0, 0, 0], [105, 0, 0, 0], [106, 0, 0, 0], [107, 0, 0, 0], [108, 0, 0, 0], [109, 0, 0, 0], [110, 0, 0, 0], [111, 0, 0, 0], [112, 0, 0, 0], [113, 0, 0, 0], [114, 0, 0, 0], [115, 0, 0, 0], [116, 0, 0, 0], [117, 0, 0, 0], [118, 0, 0, 0], [119, 0, 0, 0], [120, 0, 0, 0], [121, 0, 0, 0], [122, 0, 0, 0], [123, 0, 0, 0], [124, 0, 0, 0], [125, 0, 0, 0], [126, 0, 0, 0], [127, 0, 0, 0], [128, 0, 0, 0], [129, 0, 0, 0], [130, 0, 0, 0], [131, 0, 0, 0], [132, 0, 0, 0], [133, 0, 0, 0], [134, 0, 0, 0], [135, 0, 0, 0], [136, 0, 0, 0], [137, 0, 0, 0], [138, 0, 0, 0], [139, 0, 0, 0], [140, 0, 0, 0], [141, 0, 0, 0], [142, 0, 0, 0], [143, 0, 0, 0], [144, 0, 0, 0], [145, 0, 0, 0], [146, 0, 0, 0], [147, 0, 0, 0], [148, 0, 0, 0], [149, 0, 0, 0], [150, 0, 0, 0], [151, 0, 0, 0], [152, 0, 0, 0], [153, 0, 0, 0], [154, 0, 0, 0], [155, 0, 0, 0], [156, 0, 0, 0], [157, 0, 0, 0], [158, 0, 0, 0], [159, 0, 0, 0], [160, 0, 0, 0], [161, 0, 0, 0], [162, 0, 0, 0], [163, 0, 0, 0], [164, 0, 0, 0], [165, 0, 0, 0], [166, 0, 0, 0], [167, 0, 0, 0], [168, 0, 0, 0], [169, 0, 0, 0], [170, 0, 0, 0], [171, 0, 0, 0], [172, 0, 0, 0], [173, 0, 0, 0], [174, 0, 0, 0], [175, 0, 0, 0], [176, 0, 0, 0], [177, 0, 0, 0], [178, 0, 0, 0], [179, 0, 0, 0], [180, 0, 0, 0], [181, 0, 0, 0], [182, 0, 0, 0], [183, 0, 0, 0], [184, 0, 0, 0], [185, 0, 0, 0], [186, 0, 0, 0], [187, 0, 0, 0], [188, 0, 0, 0], [189, 0, 0, 0], [190, 0, 0, 0], [191, 0, 0, 0], [192, 0, 0, 0], [193, 0, 0, 0], [194, 0, 0, 0], [195, 0, 0, 0], [196, 0, 0, 0], [197, 0, 0, 0], [198, 0, 0, 0], [199, 0, 0, 0], [200, 0, 0, 0], [201, 0, 0, 0], [202, 0, 0, 0], [203, 0, 0, 0], [204, 0, 0, 0], [205, 0, 0, 0], [206, 0, 0, 0], [207, 0, 0, 0], [208, 0, 0, 0], [209, 0, 0, 0], [210, 0, 0, 0], [211, 0, 0, 0], [212, 0, 0, 0], [213, 0, 0, 0], [214, 0, 0, 0], [215, 0, 0, 0], [216, 0, 0, 0], [217, 0, 0, 0], [218, 0, 0, 0], [219, 0, 0, 0], [220, 0, 0, 0], [221, 0, 0, 0], [222, 0, 0, 0], [223, 0, 0, 0], [224, 0, 0, 0], [225, 0, 0, 0], [226, 0, 0, 0], [227, 0, 0, 0], [228, 0, 0, 0], [229, 0, 0, 0], [230, 0, 0, 0], [231, 0, 0, 0], [232, 0, 0, 0], [233, 0, 0, 0], [234, 0, 0, 0], [235, 0, 0, 0], [236, 0, 0, 0], [237, 0, 0, 0], [238, 0, 0, 0], [239, 0, 0, 0], [240, 0, 0, 0], [241, 0, 0, 0], [242, 0, 0, 0], [243, 0, 0, 0], [244, 0, 0, 0], [245, 0, 0, 0], [246, 0, 0, 0], [247, 0, 0, 0], [248, 0, 0, 0], [249, 0, 0, 0], [250, 0, 0, 0], [251, 0, 0, 0], [252, 0, 0, 0], [253, 0, 0, 0], [254, 0, 0, 0], [255, 0, 0, 0]],
			RAINBOW_SATURABILITY_1: [[0, 0, 0, 0], [0, 0, 7, 0], [0, 0, 15, 0], [0, 0, 23, 0], [0, 0, 31, 0], [0, 0, 39, 0], [0, 0, 47, 0], [0, 0, 55, 0], [0, 0, 63, 0], [0, 0, 71, 0], [0, 0, 79, 0], [0, 0, 87, 0], [0, 0, 85, 0], [0, 0, 103, 0], [0, 0, 111, 0], [0, 0, 119, 0], [0, 0, 127, 0], [0, 0, 135, 0], [0, 0, 143, 0], [0, 0, 151, 0], [0, 0, 159, 0], [0, 0, 167, 0], [0, 0, 175, 0], [0, 0, 183, 0], [0, 0, 191, 0], [0, 0, 199, 0], [0, 0, 207, 0], [0, 0, 215, 0], [0, 0, 223, 0], [0, 0, 231, 0], [0, 0, 239, 0], [0, 0, 247, 0], [0, 0, 255, 0], [0, 8, 255, 0], [0, 16, 255, 0], [0, 24, 255, 0], [0, 32, 255, 0], [0, 40, 255, 0], [0, 48, 255, 0], [0, 56, 255, 0], [0, 64, 255, 0], [0, 72, 255, 0], [0, 80, 255, 0], [0, 88, 255, 0], [0, 96, 255, 0], [0, 104, 255, 0], [0, 112, 255, 0], [0, 120, 255, 0], [0, 128, 255, 0], [0, 136, 255, 0], [0, 144, 255, 0], [0, 152, 255, 0], [0, 160, 255, 0], [0, 168, 255, 0], [0, 176, 255, 0], [0, 184, 255, 0], [0, 192, 255, 0], [0, 200, 255, 0], [0, 208, 255, 0], [0, 216, 255, 0], [0, 224, 255, 0], [6, 232, 255, 0], [0, 240, 255, 0], [0, 248, 255, 0], [0, 255, 255, 0], [0, 255, 247, 0], [0, 255, 239, 0], [0, 255, 231, 0], [0, 255, 223, 0], [0, 255, 215, 0], [0, 255, 207, 0], [0, 255, 199, 0], [0, 255, 191, 0], [0, 255, 183, 0], [0, 255, 175, 0], [0, 255, 167, 0], [0, 255, 159, 0], [0, 255, 151, 0], [0, 255, 143, 0], [0, 255, 135, 0], [0, 255, 127, 0], [0, 255, 119, 0], [0, 255, 111, 0], [0, 255, 103, 0], [0, 255, 95, 0], [0, 255, 87, 0], [0, 255, 79, 0], [0, 255, 71, 0], [0, 255, 63, 0], [0, 255, 55, 0], [0, 255, 47, 0], [0, 255, 39, 0], [0, 255, 31, 0], [0, 255, 23, 0], [0, 255, 15, 0], [0, 255, 7, 0], [0, 255, 0, 0], [8, 255, 0, 0], [16, 255, 0, 0], [24, 255, 0, 0], [32, 255, 0, 0], [40, 255, 0, 0], [48, 255, 0, 0], [56, 255, 0, 0], [64, 255, 0, 0], [72, 255, 0, 0], [80, 255, 0, 0], [88, 255, 0, 0], [96, 255, 0, 0], [104, 255, 0, 0], [112, 255, 0, 0], [120, 255, 0, 0], [128, 255, 0, 0], [136, 255, 0, 0], [144, 255, 0, 0], [152, 255, 0, 0], [160, 255, 0, 0], [168, 255, 0, 0], [176, 255, 0, 0], [184, 255, 0, 0], [192, 255, 0, 0], [200, 255, 0, 0], [208, 255, 0, 0], [216, 255, 0, 0], [224, 255, 0, 0], [232, 255, 0, 0], [240, 255, 0, 0], [248, 255, 0, 0], [255, 255, 0, 0], [255, 251, 0, 0], [255, 247, 0, 0], [255, 243, 0, 0], [255, 239, 0, 0], [255, 235, 0, 0], [255, 231, 0, 0], [255, 227, 0, 0], [255, 223, 0, 0], [255, 219, 0, 0], [255, 215, 0, 0], [255, 211, 0, 0], [255, 207, 0, 0], [255, 203, 0, 0], [255, 199, 0, 0], [255, 195, 0, 0], [255, 191, 0, 0], [255, 187, 0, 0], [255, 183, 0, 0], [255, 179, 0, 0], [255, 175, 0, 0], [255, 171, 0, 0], [255, 167, 0, 0], [255, 163, 0, 0], [255, 159, 0, 0], [255, 155, 0, 0], [255, 151, 0, 0], [255, 147, 0, 0], [255, 143, 0, 0], [255, 139, 0, 0], [255, 135, 0, 0], [255, 131, 0, 0], [255, 127, 0, 0], [255, 123, 0, 0], [255, 119, 0, 0], [255, 115, 0, 0], [255, 111, 0, 0], [255, 107, 0, 0], [255, 103, 0, 0], [255, 99, 0, 0], [255, 95, 0, 0], [255, 91, 0, 0], [255, 87, 0, 0], [255, 83, 0, 0], [255, 79, 0, 0], [255, 75, 0, 0], [255, 71, 0, 0], [255, 67, 0, 0], [255, 63, 0, 0], [255, 59, 0, 0], [255, 55, 0, 0], [255, 51, 0, 0], [255, 47, 0, 0], [255, 43, 0, 0], [255, 39, 0, 0], [255, 35, 0, 0], [255, 31, 0, 0], [255, 27, 0, 0], [255, 23, 0, 0], [255, 19, 0, 0], [255, 15, 0, 0], [255, 11, 0, 0], [255, 7, 0, 0], [255, 3, 0, 0], [255, 0, 0, 0], [255, 4, 4, 0], [255, 8, 8, 0], [255, 12, 12, 0], [255, 16, 16, 0], [255, 20, 20, 0], [255, 24, 24, 0], [255, 28, 28, 0], [255, 32, 32, 0], [255, 36, 36, 0], [255, 40, 40, 0], [255, 44, 44, 0], [255, 48, 48, 0], [255, 52, 52, 0], [255, 56, 56, 0], [255, 60, 60, 0], [255, 64, 64, 0], [255, 68, 68, 0], [255, 72, 72, 0], [255, 76, 76, 0], [255, 80, 80, 0], [255, 84, 84, 0], [255, 88, 88, 0], [255, 92, 92, 0], [255, 96, 96, 0], [255, 100, 100, 0], [255, 104, 104, 0], [255, 108, 108, 0], [255, 112, 112, 0], [255, 116, 116, 0], [255, 120, 120, 0], [255, 124, 124, 0], [255, 128, 128, 0], [255, 132, 132, 0], [255, 136, 136, 0], [255, 140, 140, 0], [255, 144, 144, 0], [255, 148, 148, 0], [255, 152, 152, 0], [255, 156, 156, 0], [255, 160, 160, 0], [255, 164, 164, 0], [255, 168, 168, 0], [255, 172, 172, 0], [255, 176, 176, 0], [255, 180, 180, 0], [255, 184, 184, 0], [255, 188, 188, 0], [255, 192, 192, 0], [255, 196, 196, 0], [255, 200, 200, 0], [255, 204, 204, 0], [255, 208, 208, 0], [255, 212, 212, 0], [255, 216, 216, 0], [255, 220, 220, 0], [255, 224, 224, 0], [255, 228, 228, 0], [255, 232, 232, 0], [255, 236, 236, 0], [255, 240, 240, 0], [255, 244, 244, 0], [255, 248, 248, 0], [255, 252, 252, 0]],
			RAINBOW_SATURABILITY_2: [[0, 0, 255, 0], [0, 3, 255, 0], [0, 7, 255, 0], [0, 11, 255, 0], [0, 15, 255, 0], [0, 19, 255, 0], [0, 23, 255, 0], [0, 27, 255, 0], [0, 31, 255, 0], [0, 35, 255, 0], [0, 39, 255, 0], [0, 43, 255, 0], [0, 47, 255, 0], [0, 51, 255, 0], [0, 55, 255, 0], [0, 59, 255, 0], [0, 63, 255, 0], [0, 67, 255, 0], [0, 71, 255, 0], [0, 75, 255, 0], [0, 79, 255, 0], [0, 83, 255, 0], [0, 87, 255, 0], [0, 91, 255, 0], [0, 95, 255, 0], [0, 99, 255, 0], [0, 103, 255, 0], [0, 107, 255, 0], [0, 111, 255, 0], [0, 115, 255, 0], [0, 119, 255, 0], [0, 123, 255, 0], [0, 127, 255, 0], [0, 131, 255, 0], [0, 135, 255, 0], [0, 139, 255, 0], [0, 143, 255, 0], [0, 147, 255, 0], [0, 151, 255, 0], [0, 155, 255, 0], [0, 159, 255, 0], [0, 163, 255, 0], [0, 167, 255, 0], [0, 171, 255, 0], [0, 175, 255, 0], [0, 179, 255, 0], [0, 183, 255, 0], [0, 187, 255, 0], [0, 191, 255, 0], [0, 195, 255, 0], [0, 199, 255, 0], [0, 203, 255, 0], [0, 207, 255, 0], [0, 211, 255, 0], [0, 215, 255, 0], [0, 219, 255, 0], [0, 223, 255, 0], [0, 227, 255, 0], [0, 231, 255, 0], [0, 235, 255, 0], [0, 239, 255, 0], [6, 243, 255, 0], [0, 247, 255, 0], [0, 251, 255, 0], [0, 255, 255, 0], [0, 255, 247, 0], [0, 255, 239, 0], [0, 255, 231, 0], [0, 255, 223, 0], [0, 255, 215, 0], [0, 255, 207, 0], [0, 255, 199, 0], [0, 255, 191, 0], [0, 255, 183, 0], [0, 255, 175, 0], [0, 255, 167, 0], [0, 255, 159, 0], [0, 255, 151, 0], [0, 255, 143, 0], [0, 255, 135, 0], [0, 255, 127, 0], [0, 255, 119, 0], [0, 255, 111, 0], [0, 255, 103, 0], [0, 255, 95, 0], [0, 255, 87, 0], [0, 255, 79, 0], [0, 255, 71, 0], [0, 255, 63, 0], [0, 255, 55, 0], [0, 255, 47, 0], [0, 255, 39, 0], [0, 255, 31, 0], [0, 255, 23, 0], [0, 255, 15, 0], [0, 255, 7, 0], [0, 255, 0, 0], [8, 255, 0, 0], [16, 255, 0, 0], [24, 255, 0, 0], [32, 255, 0, 0], [40, 255, 0, 0], [48, 255, 0, 0], [56, 255, 0, 0], [64, 255, 0, 0], [72, 255, 0, 0], [80, 255, 0, 0], [88, 255, 0, 0], [96, 255, 0, 0], [104, 255, 0, 0], [112, 255, 0, 0], [120, 255, 0, 0], [128, 255, 0, 0], [136, 255, 0, 0], [144, 255, 0, 0], [152, 255, 0, 0], [160, 255, 0, 0], [168, 255, 0, 0], [176, 255, 0, 0], [184, 255, 0, 0], [192, 255, 0, 0], [200, 255, 0, 0], [208, 255, 0, 0], [216, 255, 0, 0], [224, 255, 0, 0], [232, 255, 0, 0], [240, 255, 0, 0], [248, 255, 0, 0], [255, 255, 0, 0], [255, 251, 0, 0], [255, 247, 0, 0], [255, 243, 0, 0], [255, 239, 0, 0], [255, 235, 0, 0], [255, 231, 0, 0], [255, 227, 0, 0], [255, 223, 0, 0], [255, 219, 0, 0], [255, 215, 0, 0], [255, 211, 0, 0], [255, 207, 0, 0], [255, 203, 0, 0], [255, 199, 0, 0], [255, 195, 0, 0], [255, 191, 0, 0], [255, 187, 0, 0], [255, 183, 0, 0], [255, 179, 0, 0], [255, 175, 0, 0], [255, 171, 0, 0], [255, 167, 0, 0], [255, 163, 0, 0], [255, 159, 0, 0], [255, 155, 0, 0], [255, 151, 0, 0], [255, 147, 0, 0], [255, 143, 0, 0], [255, 139, 0, 0], [255, 135, 0, 0], [255, 131, 0, 0], [255, 127, 0, 0], [255, 123, 0, 0], [255, 119, 0, 0], [255, 115, 0, 0], [255, 111, 0, 0], [255, 107, 0, 0], [255, 103, 0, 0], [255, 99, 0, 0], [255, 95, 0, 0], [255, 91, 0, 0], [255, 87, 0, 0], [255, 83, 0, 0], [255, 79, 0, 0], [255, 75, 0, 0], [255, 71, 0, 0], [255, 67, 0, 0], [255, 63, 0, 0], [255, 59, 0, 0], [255, 55, 0, 0], [255, 51, 0, 0], [255, 47, 0, 0], [255, 43, 0, 0], [255, 39, 0, 0], [255, 35, 0, 0], [255, 31, 0, 0], [255, 27, 0, 0], [255, 23, 0, 0], [255, 19, 0, 0], [255, 15, 0, 0], [255, 11, 0, 0], [255, 7, 0, 0], [255, 3, 0, 0], [255, 0, 0, 0], [255, 4, 4, 0], [255, 8, 8, 0], [255, 12, 12, 0], [255, 16, 16, 0], [255, 20, 20, 0], [255, 24, 24, 0], [255, 28, 28, 0], [255, 32, 32, 0], [255, 36, 36, 0], [255, 40, 40, 0], [255, 44, 44, 0], [255, 48, 48, 0], [255, 52, 52, 0], [255, 56, 56, 0], [255, 60, 60, 0], [255, 64, 64, 0], [255, 68, 68, 0], [255, 72, 72, 0], [255, 76, 76, 0], [255, 80, 80, 0], [255, 84, 84, 0], [255, 88, 88, 0], [255, 92, 92, 0], [255, 96, 96, 0], [255, 100, 100, 0], [255, 104, 104, 0], [255, 108, 108, 0], [255, 112, 112, 0], [255, 116, 116, 0], [255, 120, 120, 0], [255, 124, 124, 0], [255, 128, 128, 0], [255, 132, 132, 0], [255, 136, 136, 0], [255, 140, 140, 0], [255, 144, 144, 0], [255, 148, 148, 0], [255, 152, 152, 0], [255, 156, 156, 0], [255, 160, 160, 0], [255, 164, 164, 0], [255, 168, 168, 0], [255, 172, 172, 0], [255, 176, 176, 0], [255, 180, 180, 0], [255, 184, 184, 0], [255, 188, 188, 0], [255, 192, 192, 0], [255, 196, 196, 0], [255, 200, 200, 0], [255, 204, 204, 0], [255, 208, 208, 0], [255, 212, 212, 0], [255, 216, 216, 0], [255, 220, 220, 0], [255, 224, 224, 0], [255, 228, 228, 0], [255, 232, 232, 0], [255, 236, 236, 0], [255, 240, 240, 0], [255, 244, 244, 0], [255, 248, 248, 0], [255, 252, 252, 0]]

		};
	})(window);

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ST = ST;

	var _Renderer = __webpack_require__(312);

	var _Renderer2 = _interopRequireDefault(_Renderer);

	var _index = __webpack_require__(317);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    Renderer: _Renderer2.default,
	    Particle: _index2.default
	};


	var PImage = _index2.default.PImage;
	var pimages = [];

	function ST(canvas) {
	    this.Renderer = new _Renderer2.default();
	    this.pimages = {};
	    this.options = {};
	}

	ST.prototype.loadPImage = function (id, img) {
	    if (!img && !this.pimages.hasOwnProperty(id)) {
	        return false;
	    } else {
	        this.pimages[id] = new PImage(img, null);
	    }

	    this.Renderer.render(this.pimages[id], this.options);

	    return true;
	};

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _minMatrix = __webpack_require__(313);

	var _index = __webpack_require__(314);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Renderer = function () {
	    function Renderer() {
	        _classCallCheck(this, Renderer);

	        this.view = {};
	        this.gl = {};
	        this.canvas = {};
	        this.options = {
	            piscolor: 1, //1:黑白图 2:彩色图
	            rescaleSlope: 0.683760684,
	            rescaleIntercept: 200,
	            pmingray: 0.0, //CT矫正
	            pmaxgray: 2800.0, //窗宽
	            pstep: 1600.0, //窗位
	            width: 3730,
	            height: 3062,
	            pinverse: true || false, //反色
	            ppseudocolor: false, //伪彩
	            offset: 0,
	            m: null //位置变幻矩阵
	        };

	        var canvas = void 0;
	        if (arguments.length == 1) {
	            canvas = arguments.length <= 0 ? undefined : arguments[0];
	        } else if (arguments.length == 2) {
	            canvas = document.createElement("canvas");
	            canvas.width = arguments.length <= 0 ? undefined : arguments[0];
	            canvas.height = arguments.length <= 1 ? undefined : arguments[1];
	        }
	        this.view = canvas;

	        var gl = this.gl = Renderer.create3DContext(canvas);

	        if (!gl) {
	            throw new Error('can not use webgl');
	        }

	        var shader = new _index2.default.Cateyes();

	        gl.program = shader.initShader(gl);

	        // let m = new matIV();
	        // let Matrix = m.identity(m.create()); //模型
	        // this.mMatrix = m.identity(m.create()); //模型
	        // this.m= m;
	        // this.Matrix = Matrix;

	        return this;
	    } //domElement


	    _createClass(Renderer, [{
	        key: 'setPlevel',
	        value: function setPlevel(num) {
	            this.options.plevel = num;
	        }
	    }, {
	        key: 'setPwidth',
	        value: function setPwidth(num) {
	            this.options.pwidth = num;
	        }
	    }, {
	        key: 'translate',
	        value: function translate() {
	            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.0;
	            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.0;
	            var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.0;

	            this.m.translate(this.Matrix, [x, y, z], this.mMatrix);
	        }
	        /**
	         * 显示
	         * @param {Object} options - isPre
	         */

	    }, {
	        key: 'loadparticle',
	        value: function loadparticle(particle) {
	            particle.loadBuffer(this.gl);
	            return this;
	        }
	        //  var ctx = renderer.getContext("experimental-webgl",{preserveDrawingBuffer: true}) || renderer.getContext("webgl",{preserveDrawingBuffer: true});
	        // renderer.render(scene, camera, renderTarget);
	        // var arr = new Uint8Array( 4 * 512 * 512);
	        // ctx.readPixels(0, 0, 512, 512, ctx.RGBA, ctx.UNSIGNED_BYTE, arr);
	        // var c=document.getElementById("canvaspip2");
	        // var ctx=c.getContext("2d");
	        // var ImgData = ctx.createImageData(512, 512);
	        // ImgData.data.set( arr, 0, arr.length );

	        // var c=document.getElementById("canvaspip2");
	        // var ctx=c.getContext("2d");
	        // ctx.putImageData(ImgData,0,0)

	    }, {
	        key: 'changeToCanvas',
	        value: function changeToCanvas(callback) {
	            var canvas = document.createElement('canvas');
	            canvas.width = this.view.width;
	            canvas.height = this.view.height;
	            canvas.context = canvas.getContext('2d');
	            var pixels = this.pixels;

	            var imagedata = new ImageData(canvas.width, canvas.height);
	            imagedata.data.set(pixels, 0, pixels.length);
	            canvas.context.putImageData(imagedata, 0, 0);

	            var image = new Image();
	            image.src = canvas.toDataURL("image/png");
	            image.onload = function () {
	                canvas.context.clearRect(0, 0, canvas.width, canvas.height);

	                // 水平“翻转”画布
	                canvas.context.translate(0, canvas.height);
	                canvas.context.scale(1, -1);

	                // 下面画的图片是水平翻转的
	                canvas.context.drawImage(image, canvas.width - canvas.width, 0);

	                // 画布恢复正常
	                canvas.context.translate(0, canvas.height);
	                canvas.context.scale(1, -1);

	                callback(canvas);
	            };

	            return canvas;
	        }
	    }, {
	        key: 'clean',
	        value: function clean() {
	            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
	        }
	    }, {
	        key: 'render',
	        value: function render(particle, newoptions, photo) {
	            var options = this.options;

	            Object.assign(options, newoptions);
	            var gl = this.gl;
	            var canvas = this.view;

	            // let m = this.m;
	            // let mMatrix = this.mMatrix; //模型
	            // let vMatrix = m.identity(m.create()); //视图
	            // let pMatrix = m.identity(m.create()); //投影
	            // let mvpMatrix = m.identity(m.create());

	            // // 视图变换坐标矩阵
	            // m.lookAt([
	            //     0.0, 0.0, 1.00000
	            // ], [
	            //     0, 0, 0
	            // ], [
	            //     0, 1, 0
	            // ], vMatrix);

	            // // 投影坐标变换矩阵
	            // m.perspective(90,  canvas.width/canvas.height,0.01, 1000, pMatrix);

	            // m.multiply(pMatrix, vMatrix, mvpMatrix);
	            // m.multiply(mvpMatrix, mMatrix, mvpMatrix);

	            // let uniLocation = gl.getUniformLocation(gl.program, 'mvpMatrix');
	            // gl.uniformMatrix4fv(uniLocation, false, mvpMatrix);

	            gl.viewport(0, 0, canvas.width, canvas.height);

	            //设置着色器其余参数
	            Renderer.setUniform1f(gl, options);
	            gl.clearColor(0.0, 0.0, 0.0, 1.0);
	            gl.enable(gl.DEPTH_TEST);
	            gl.depthFunc(gl.LEQUAL);
	            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

	            /**
	             * 生成快照
	             */
	            if (photo) {
	                var pixels = new Uint8Array(canvas.width * canvas.height * 4);
	                this.gl.readPixels(0, 0, canvas.width, canvas.height, this.gl.RGBA, this.gl.UNSIGNED_BYTE, pixels);
	                this.pixels = pixels;
	            }
	        }
	    }], [{
	        key: 'create3DContext',
	        value: function create3DContext(canvas, options) {
	            var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
	            var context = null;
	            for (var i = 0; i < names.length; i++) {
	                try {
	                    context = canvas.getContext(names[i]);
	                } catch (e) {}

	                if (context) {
	                    break;
	                }
	            }
	            return context;
	        }
	    }, {
	        key: 'setUniform1f',
	        value: function setUniform1f(gl, options) {
	            var types = ['pmingray', 'pmaxgray', 'pstep', 'pinverse', 'ppseudocolor', 'rescaleSlope', 'rescaleIntercept', 'piscolor', 'offset'];
	            types.forEach(function (item) {
	                var location = gl.getUniformLocation(gl.program, item);
	                gl.uniform1f(location, options[item]);
	            });
	        }
	    }]);

	    return Renderer;
	}();

	exports.default = Renderer;

/***/ }),
/* 313 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.matIV = matIV;
	// ------------------------------------------------------------------------------------------------
	// minMatrix.js
	// version 0.0.3
	// ------------------------------------------------------------------------------------------------

	function matIV() {
		this.create = function () {
			return new Float32Array(16);
		};
		this.identity = function (dest) {
			dest[0] = 1;dest[1] = 0;dest[2] = 0;dest[3] = 0;
			dest[4] = 0;dest[5] = 1;dest[6] = 0;dest[7] = 0;
			dest[8] = 0;dest[9] = 0;dest[10] = 1;dest[11] = 0;
			dest[12] = 0;dest[13] = 0;dest[14] = 0;dest[15] = 1;
			return dest;
		};
		this.multiply = function (mat1, mat2, dest) {
			var a = mat1[0],
			    b = mat1[1],
			    c = mat1[2],
			    d = mat1[3],
			    e = mat1[4],
			    f = mat1[5],
			    g = mat1[6],
			    h = mat1[7],
			    i = mat1[8],
			    j = mat1[9],
			    k = mat1[10],
			    l = mat1[11],
			    m = mat1[12],
			    n = mat1[13],
			    o = mat1[14],
			    p = mat1[15],
			    A = mat2[0],
			    B = mat2[1],
			    C = mat2[2],
			    D = mat2[3],
			    E = mat2[4],
			    F = mat2[5],
			    G = mat2[6],
			    H = mat2[7],
			    I = mat2[8],
			    J = mat2[9],
			    K = mat2[10],
			    L = mat2[11],
			    M = mat2[12],
			    N = mat2[13],
			    O = mat2[14],
			    P = mat2[15];
			dest[0] = A * a + B * e + C * i + D * m;
			dest[1] = A * b + B * f + C * j + D * n;
			dest[2] = A * c + B * g + C * k + D * o;
			dest[3] = A * d + B * h + C * l + D * p;
			dest[4] = E * a + F * e + G * i + H * m;
			dest[5] = E * b + F * f + G * j + H * n;
			dest[6] = E * c + F * g + G * k + H * o;
			dest[7] = E * d + F * h + G * l + H * p;
			dest[8] = I * a + J * e + K * i + L * m;
			dest[9] = I * b + J * f + K * j + L * n;
			dest[10] = I * c + J * g + K * k + L * o;
			dest[11] = I * d + J * h + K * l + L * p;
			dest[12] = M * a + N * e + O * i + P * m;
			dest[13] = M * b + N * f + O * j + P * n;
			dest[14] = M * c + N * g + O * k + P * o;
			dest[15] = M * d + N * h + O * l + P * p;
			return dest;
		};
		this.scale = function (mat, vec, dest) {
			dest[0] = mat[0] * vec[0];
			dest[1] = mat[1] * vec[0];
			dest[2] = mat[2] * vec[0];
			dest[3] = mat[3] * vec[0];
			dest[4] = mat[4] * vec[1];
			dest[5] = mat[5] * vec[1];
			dest[6] = mat[6] * vec[1];
			dest[7] = mat[7] * vec[1];
			dest[8] = mat[8] * vec[2];
			dest[9] = mat[9] * vec[2];
			dest[10] = mat[10] * vec[2];
			dest[11] = mat[11] * vec[2];
			dest[12] = mat[12];
			dest[13] = mat[13];
			dest[14] = mat[14];
			dest[15] = mat[15];
			return dest;
		};
		this.translate = function (mat, vec, dest) {
			dest[0] = mat[0];dest[1] = mat[1];dest[2] = mat[2];dest[3] = mat[3];
			dest[4] = mat[4];dest[5] = mat[5];dest[6] = mat[6];dest[7] = mat[7];
			dest[8] = mat[8];dest[9] = mat[9];dest[10] = mat[10];dest[11] = mat[11];
			dest[12] = mat[0] * vec[0] + mat[4] * vec[1] + mat[8] * vec[2] + mat[12];
			dest[13] = mat[1] * vec[0] + mat[5] * vec[1] + mat[9] * vec[2] + mat[13];
			dest[14] = mat[2] * vec[0] + mat[6] * vec[1] + mat[10] * vec[2] + mat[14];
			dest[15] = mat[3] * vec[0] + mat[7] * vec[1] + mat[11] * vec[2] + mat[15];
			return dest;
		};
		this.rotate = function (mat, angle, axis, dest) {
			var sq = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);
			if (!sq) {
				return null;
			}
			var a = axis[0],
			    b = axis[1],
			    c = axis[2];
			if (sq != 1) {
				sq = 1 / sq;a *= sq;b *= sq;c *= sq;
			}
			var d = Math.sin(angle),
			    e = Math.cos(angle),
			    f = 1 - e,
			    g = mat[0],
			    h = mat[1],
			    i = mat[2],
			    j = mat[3],
			    k = mat[4],
			    l = mat[5],
			    m = mat[6],
			    n = mat[7],
			    o = mat[8],
			    p = mat[9],
			    q = mat[10],
			    r = mat[11],
			    s = a * a * f + e,
			    t = b * a * f + c * d,
			    u = c * a * f - b * d,
			    v = a * b * f - c * d,
			    w = b * b * f + e,
			    x = c * b * f + a * d,
			    y = a * c * f + b * d,
			    z = b * c * f - a * d,
			    A = c * c * f + e;
			if (angle) {
				if (mat != dest) {
					dest[12] = mat[12];dest[13] = mat[13];
					dest[14] = mat[14];dest[15] = mat[15];
				}
			} else {
				dest = mat;
			}
			dest[0] = g * s + k * t + o * u;
			dest[1] = h * s + l * t + p * u;
			dest[2] = i * s + m * t + q * u;
			dest[3] = j * s + n * t + r * u;
			dest[4] = g * v + k * w + o * x;
			dest[5] = h * v + l * w + p * x;
			dest[6] = i * v + m * w + q * x;
			dest[7] = j * v + n * w + r * x;
			dest[8] = g * y + k * z + o * A;
			dest[9] = h * y + l * z + p * A;
			dest[10] = i * y + m * z + q * A;
			dest[11] = j * y + n * z + r * A;
			return dest;
		};
		this.lookAt = function (eye, center, up, dest) {
			var eyeX = eye[0],
			    eyeY = eye[1],
			    eyeZ = eye[2],
			    upX = up[0],
			    upY = up[1],
			    upZ = up[2],
			    centerX = center[0],
			    centerY = center[1],
			    centerZ = center[2];
			if (eyeX == centerX && eyeY == centerY && eyeZ == centerZ) {
				return this.identity(dest);
			}
			var x0, x1, x2, y0, y1, y2, z0, z1, z2, l;
			z0 = eyeX - center[0];z1 = eyeY - center[1];z2 = eyeZ - center[2];
			l = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
			z0 *= l;z1 *= l;z2 *= l;
			x0 = upY * z2 - upZ * z1;
			x1 = upZ * z0 - upX * z2;
			x2 = upX * z1 - upY * z0;
			l = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
			if (!l) {
				x0 = 0;x1 = 0;x2 = 0;
			} else {
				l = 1 / l;
				x0 *= l;x1 *= l;x2 *= l;
			}
			y0 = z1 * x2 - z2 * x1;y1 = z2 * x0 - z0 * x2;y2 = z0 * x1 - z1 * x0;
			l = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
			if (!l) {
				y0 = 0;y1 = 0;y2 = 0;
			} else {
				l = 1 / l;
				y0 *= l;y1 *= l;y2 *= l;
			}
			dest[0] = x0;dest[1] = y0;dest[2] = z0;dest[3] = 0;
			dest[4] = x1;dest[5] = y1;dest[6] = z1;dest[7] = 0;
			dest[8] = x2;dest[9] = y2;dest[10] = z2;dest[11] = 0;
			dest[12] = -(x0 * eyeX + x1 * eyeY + x2 * eyeZ);
			dest[13] = -(y0 * eyeX + y1 * eyeY + y2 * eyeZ);
			dest[14] = -(z0 * eyeX + z1 * eyeY + z2 * eyeZ);
			dest[15] = 1;
			return dest;
		};
		this.perspective = function (fovy, aspect, near, far, dest) {
			var t = near * Math.tan(fovy * Math.PI / 360);
			var r = t * aspect;
			var a = r * 2,
			    b = t * 2,
			    c = far - near;
			dest[0] = near * 2 / a;
			dest[1] = 0;
			dest[2] = 0;
			dest[3] = 0;
			dest[4] = 0;
			dest[5] = near * 2 / b;
			dest[6] = 0;
			dest[7] = 0;
			dest[8] = 0;
			dest[9] = 0;
			dest[10] = -(far + near) / c;
			dest[11] = -1;
			dest[12] = 0;
			dest[13] = 0;
			dest[14] = -(far * near * 2) / c;
			dest[15] = 0;
			return dest;
		};
		this.ortho = function (left, right, top, bottom, near, far, dest) {
			var h = right - left;
			var v = top - bottom;
			var d = far - near;
			dest[0] = 2 / h;
			dest[1] = 0;
			dest[2] = 0;
			dest[3] = 0;
			dest[4] = 0;
			dest[5] = 2 / v;
			dest[6] = 0;
			dest[7] = 0;
			dest[8] = 0;
			dest[9] = 0;
			dest[10] = -2 / d;
			dest[11] = 0;
			dest[12] = -(left + right) / h;
			dest[13] = -(top + bottom) / v;
			dest[14] = -(far + near) / d;
			dest[15] = 1;
			return dest;
		};
		this.transpose = function (mat, dest) {
			dest[0] = mat[0];dest[1] = mat[4];
			dest[2] = mat[8];dest[3] = mat[12];
			dest[4] = mat[1];dest[5] = mat[5];
			dest[6] = mat[9];dest[7] = mat[13];
			dest[8] = mat[2];dest[9] = mat[6];
			dest[10] = mat[10];dest[11] = mat[14];
			dest[12] = mat[3];dest[13] = mat[7];
			dest[14] = mat[11];dest[15] = mat[15];
			return dest;
		};
		this.inverse = function (mat, dest) {
			var a = mat[0],
			    b = mat[1],
			    c = mat[2],
			    d = mat[3],
			    e = mat[4],
			    f = mat[5],
			    g = mat[6],
			    h = mat[7],
			    i = mat[8],
			    j = mat[9],
			    k = mat[10],
			    l = mat[11],
			    m = mat[12],
			    n = mat[13],
			    o = mat[14],
			    p = mat[15],
			    q = a * f - b * e,
			    r = a * g - c * e,
			    s = a * h - d * e,
			    t = b * g - c * f,
			    u = b * h - d * f,
			    v = c * h - d * g,
			    w = i * n - j * m,
			    x = i * o - k * m,
			    y = i * p - l * m,
			    z = j * o - k * n,
			    A = j * p - l * n,
			    B = k * p - l * o,
			    ivd = 1 / (q * B - r * A + s * z + t * y - u * x + v * w);
			dest[0] = (f * B - g * A + h * z) * ivd;
			dest[1] = (-b * B + c * A - d * z) * ivd;
			dest[2] = (n * v - o * u + p * t) * ivd;
			dest[3] = (-j * v + k * u - l * t) * ivd;
			dest[4] = (-e * B + g * y - h * x) * ivd;
			dest[5] = (a * B - c * y + d * x) * ivd;
			dest[6] = (-m * v + o * s - p * r) * ivd;
			dest[7] = (i * v - k * s + l * r) * ivd;
			dest[8] = (e * A - f * y + h * w) * ivd;
			dest[9] = (-a * A + b * y - d * w) * ivd;
			dest[10] = (m * u - n * s + p * q) * ivd;
			dest[11] = (-i * u + j * s - l * q) * ivd;
			dest[12] = (-e * z + f * x - g * w) * ivd;
			dest[13] = (a * z - b * x + c * w) * ivd;
			dest[14] = (-m * t + n * r - o * q) * ivd;
			dest[15] = (i * t - j * r + k * q) * ivd;
			return dest;
		};
	}

	function qtnIV() {
		this.create = function () {
			return new Float32Array(4);
		};
		this.identity = function (dest) {
			dest[0] = 0;dest[1] = 0;dest[2] = 0;dest[3] = 1;
			return dest;
		};
		this.inverse = function (qtn, dest) {
			dest[0] = -qtn[0];
			dest[1] = -qtn[1];
			dest[2] = -qtn[2];
			dest[3] = qtn[3];
			return dest;
		};
		this.normalize = function (dest) {
			var x = dest[0],
			    y = dest[1],
			    z = dest[2],
			    w = dest[3];
			var l = Math.sqrt(x * x + y * y + z * z + w * w);
			if (l === 0) {
				dest[0] = 0;
				dest[1] = 0;
				dest[2] = 0;
				dest[3] = 0;
			} else {
				l = 1 / l;
				dest[0] = x * l;
				dest[1] = y * l;
				dest[2] = z * l;
				dest[3] = w * l;
			}
			return dest;
		};
		this.multiply = function (qtn1, qtn2, dest) {
			var ax = qtn1[0],
			    ay = qtn1[1],
			    az = qtn1[2],
			    aw = qtn1[3];
			var bx = qtn2[0],
			    by = qtn2[1],
			    bz = qtn2[2],
			    bw = qtn2[3];
			dest[0] = ax * bw + aw * bx + ay * bz - az * by;
			dest[1] = ay * bw + aw * by + az * bx - ax * bz;
			dest[2] = az * bw + aw * bz + ax * by - ay * bx;
			dest[3] = aw * bw - ax * bx - ay * by - az * bz;
			return dest;
		};
		this.rotate = function (angle, axis, dest) {
			var sq = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);
			if (!sq) {
				return null;
			}
			var a = axis[0],
			    b = axis[1],
			    c = axis[2];
			if (sq != 1) {
				sq = 1 / sq;a *= sq;b *= sq;c *= sq;
			}
			var s = Math.sin(angle * 0.5);
			dest[0] = a * s;
			dest[1] = b * s;
			dest[2] = c * s;
			dest[3] = Math.cos(angle * 0.5);
			return dest;
		};
		this.toVecIII = function (vec, qtn, dest) {
			var qp = this.create();
			var qq = this.create();
			var qr = this.create();
			this.inverse(qtn, qr);
			qp[0] = vec[0];
			qp[1] = vec[1];
			qp[2] = vec[2];
			this.multiply(qr, qp, qq);
			this.multiply(qq, qtn, qr);
			dest[0] = qr[0];
			dest[1] = qr[1];
			dest[2] = qr[2];
			return dest;
		};
		this.toMatIV = function (qtn, dest) {
			var x = qtn[0],
			    y = qtn[1],
			    z = qtn[2],
			    w = qtn[3];
			var x2 = x + x,
			    y2 = y + y,
			    z2 = z + z;
			var xx = x * x2,
			    xy = x * y2,
			    xz = x * z2;
			var yy = y * y2,
			    yz = y * z2,
			    zz = z * z2;
			var wx = w * x2,
			    wy = w * y2,
			    wz = w * z2;
			dest[0] = 1 - (yy + zz);
			dest[1] = xy - wz;
			dest[2] = xz + wy;
			dest[3] = 0;
			dest[4] = xy + wz;
			dest[5] = 1 - (xx + zz);
			dest[6] = yz - wx;
			dest[7] = 0;
			dest[8] = xz - wy;
			dest[9] = yz + wx;
			dest[10] = 1 - (xx + yy);
			dest[11] = 0;
			dest[12] = 0;
			dest[13] = 0;
			dest[14] = 0;
			dest[15] = 1;
			return dest;
		};
		this.slerp = function (qtn1, qtn2, time, dest) {
			var ht = qtn1[0] * qtn2[0] + qtn1[1] * qtn2[1] + qtn1[2] * qtn2[2] + qtn1[3] * qtn2[3];
			var hs = 1.0 - ht * ht;
			if (hs <= 0.0) {
				dest[0] = qtn1[0];
				dest[1] = qtn1[1];
				dest[2] = qtn1[2];
				dest[3] = qtn1[3];
			} else {
				hs = Math.sqrt(hs);
				if (Math.abs(hs) < 0.0001) {
					dest[0] = qtn1[0] * 0.5 + qtn2[0] * 0.5;
					dest[1] = qtn1[1] * 0.5 + qtn2[1] * 0.5;
					dest[2] = qtn1[2] * 0.5 + qtn2[2] * 0.5;
					dest[3] = qtn1[3] * 0.5 + qtn2[3] * 0.5;
				} else {
					var ph = Math.acos(ht);
					var pt = ph * time;
					var t0 = Math.sin(ph - pt) / hs;
					var t1 = Math.sin(pt) / hs;
					dest[0] = qtn1[0] * t0 + qtn2[0] * t1;
					dest[1] = qtn1[1] * t0 + qtn2[1] * t1;
					dest[2] = qtn1[2] * t0 + qtn2[2] * t1;
					dest[3] = qtn1[3] * t0 + qtn2[3] * t1;
				}
			}
			return dest;
		};
	}

	function torus(row, column, irad, orad, color) {
		var i, j, tc;
		var pos = new Array(),
		    nor = new Array(),
		    col = new Array(),
		    st = new Array(),
		    idx = new Array();
		for (i = 0; i <= row; i++) {
			var r = Math.PI * 2 / row * i;
			var rr = Math.cos(r);
			var ry = Math.sin(r);
			for (j = 0; j <= column; j++) {
				var tr = Math.PI * 2 / column * j;
				var tx = (rr * irad + orad) * Math.cos(tr);
				var ty = ry * irad;
				var tz = (rr * irad + orad) * Math.sin(tr);
				var rx = rr * Math.cos(tr);
				var rz = rr * Math.sin(tr);
				if (color) {
					tc = color;
				} else {
					tc = hsva(360 / column * j, 1, 1, 1);
				}
				var rs = 1 / column * j;
				var rt = 1 / row * i + 0.5;
				if (rt > 1.0) {
					rt -= 1.0;
				}
				rt = 1.0 - rt;
				pos.push(tx, ty, tz);
				nor.push(rx, ry, rz);
				col.push(tc[0], tc[1], tc[2], tc[3]);
				st.push(rs, rt);
			}
		}
		for (i = 0; i < row; i++) {
			for (j = 0; j < column; j++) {
				r = (column + 1) * i + j;
				idx.push(r, r + column + 1, r + 1);
				idx.push(r + column + 1, r + column + 2, r + 1);
			}
		}
		return { p: pos, n: nor, c: col, t: st, i: idx };
	}

	function sphere(row, column, rad, color) {
		var i, j, tc;
		var pos = new Array(),
		    nor = new Array(),
		    col = new Array(),
		    st = new Array(),
		    idx = new Array();
		for (i = 0; i <= row; i++) {
			var r = Math.PI / row * i;
			var ry = Math.cos(r);
			var rr = Math.sin(r);
			for (j = 0; j <= column; j++) {
				var tr = Math.PI * 2 / column * j;
				var tx = rr * rad * Math.cos(tr);
				var ty = ry * rad;
				var tz = rr * rad * Math.sin(tr);
				var rx = rr * Math.cos(tr);
				var rz = rr * Math.sin(tr);
				if (color) {
					tc = color;
				} else {
					tc = hsva(360 / row * i, 1, 1, 1);
				}
				pos.push(tx, ty, tz);
				nor.push(rx, ry, rz);
				col.push(tc[0], tc[1], tc[2], tc[3]);
				st.push(1 - 1 / column * j, 1 / row * i);
			}
		}
		r = 0;
		for (i = 0; i < row; i++) {
			for (j = 0; j < column; j++) {
				r = (column + 1) * i + j;
				idx.push(r, r + 1, r + column + 2);
				idx.push(r, r + column + 2, r + column + 1);
			}
		}
		return { p: pos, n: nor, c: col, t: st, i: idx };
	}

	function cube(side, color) {
		var tc,
		    hs = side * 0.5;
		var pos = [-hs, -hs, hs, hs, -hs, hs, hs, hs, hs, -hs, hs, hs, -hs, -hs, -hs, -hs, hs, -hs, hs, hs, -hs, hs, -hs, -hs, -hs, hs, -hs, -hs, hs, hs, hs, hs, hs, hs, hs, -hs, -hs, -hs, -hs, hs, -hs, -hs, hs, -hs, hs, -hs, -hs, hs, hs, -hs, -hs, hs, hs, -hs, hs, hs, hs, hs, -hs, hs, -hs, -hs, -hs, -hs, -hs, hs, -hs, hs, hs, -hs, hs, -hs];
		var nor = [-1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0];
		var col = new Array();
		for (var i = 0; i < pos.length / 3; i++) {
			if (color) {
				tc = color;
			} else {
				tc = hsva(360 / pos.length / 3 * i, 1, 1, 1);
			}
			col.push(tc[0], tc[1], tc[2], tc[3]);
		}
		var st = [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0];
		var idx = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
		return { p: pos, n: nor, c: col, t: st, i: idx };
	}

	function hsva(h, s, v, a) {
		if (s > 1 || v > 1 || a > 1) {
			return;
		}
		var th = h % 360;
		var i = Math.floor(th / 60);
		var f = th / 60 - i;
		var m = v * (1 - s);
		var n = v * (1 - s * f);
		var k = v * (1 - s * (1 - f));
		var color = new Array();
		if (!s > 0 && !s < 0) {
			color.push(v, v, v, a);
		} else {
			var r = new Array(v, n, m, m, k, v);
			var g = new Array(k, v, v, n, m, m);
			var b = new Array(m, m, k, v, v, n);
			color.push(r[i], g[i], b[i], a);
		}
		return color;
	}

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Cateyes = __webpack_require__(315);

	var _Cateyes2 = _interopRequireDefault(_Cateyes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    Cateyes: _Cateyes2.default
	};

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _Base2 = __webpack_require__(316);

	var _Base3 = _interopRequireDefault(_Base2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Cateyes = function (_Base) {
	    _inherits(Cateyes, _Base);

	    function Cateyes(gl, vshader, fshader) {
	        var _ret;

	        _classCallCheck(this, Cateyes);

	        var _this = _possibleConstructorReturn(this, (Cateyes.__proto__ || Object.getPrototypeOf(Cateyes)).call(this));

	        _this.vshader = ['attribute vec4 aVertexPosition;', 'attribute vec2 a_TexCoord;', 'varying vec2 v_TexCoord;', 'uniform mat4 mvpMatrix;', 'void main(void) {', '   gl_Position =  aVertexPosition;', '   v_TexCoord = a_TexCoord;', '}'].join('\n');
	        _this.fshader = ['#ifdef GL_ES', 'precision highp float;', '#endif', 'uniform sampler2D u_Sampler;', 'uniform float pmingray,pmaxgray,pstep,rescaleSlope,rescaleIntercept,piscolor,offset;', 'uniform bool pinverse,ppseudocolor;', 'varying vec2 v_TexCoord;', 'void main(void) {', '   gl_FragColor = texture2D(u_Sampler , v_TexCoord);', '   vec4 c = gl_FragColor;', '   vec4 rgb;float gray;', '   if(piscolor==1.0){', '       gray = (c.r * 255.0 * 65536.0) + (c.g * 255.0 * 256.0) + (c.b * 255.0);', '       gray = gray  + rescaleIntercept;',
	        // '       gray = gray+offset;',
	        // '       gray = gray * rescaleSlope-2000.0;',
	        '       gray = gray<=pmingray?0.0:(gray>=pmaxgray?255.0:((gray-pmingray) * pstep));', '       gray = gray / 255.0;', '       gray = pinverse?(1.0-gray):gray;', '       rgb=vec4(gray,gray,gray,1.0);', '       if(ppseudocolor){', '           if(gray<0.0){rgb=vec4(0.0,0.0,0.0,c.a);}', '           else if(gray<=0.25) {rgb=vec4(0.0,0.0,4.0*gray,c.a);}', '           else if(gray<=0.375) {rgb=vec4(4.0*(gray-0.25),0.0,1.0,c.a);}', '           else if(gray<0.5) {rgb=vec4(4.0*(gray-0.25),0.0,1.0-8.0*(gray-0.375),c.a);}', '           else if(gray==0.5) {rgb=vec4(1.0,0.0,0.0,c.a);}', '           else if(gray<=0.75) {rgb=vec4(1.0,4.0*(gray-0.5),0,c.a);}', '           else if(gray<1.0){rgb=vec4(1.0,1.0,4.0*(gray-0.75),c.a);}', '           else {rgb=vec4(1.0,1.0,1.0,c.a);}', '       }', '   }else if (piscolor==2.0){', '       gray = c.r*255.0;', '       gray = gray<=pmingray?0.0:(gray>=pmaxgray?255.0:((gray-pmingray) * pstep));', '       rgb.r= gray/255.0;', '       rgb.r = pinverse?(1.0-rgb.r):rgb.r;', '       gray = c.g*255.0;', '       gray = gray<=pmingray?0.0:(gray>=pmaxgray?255.0:((gray-pmingray) * pstep));', '       rgb.g=gray/255.0;', '       rgb.g = pinverse?(1.0-rgb.g):rgb.g;', '       gray = c.b*255.0;', '       gray = gray<=pmingray?0.0:(gray>=pmaxgray?255.0:((gray-pmingray) * pstep));', '       rgb.b = gray/255.0;', '       rgb.b = pinverse?(1.0-rgb.b):rgb.b;', '       rgb.a =1.0;', '   }', '   gl_FragColor = rgb;', '} '].join('\n');

	        _this.gl = gl;
	        _this.vshader = vshader || _this.vshader;
	        _this.fshader = fshader || _this.fshader;

	        return _ret = _this, _possibleConstructorReturn(_this, _ret);
	    }

	    return Cateyes;
	}(_Base3.default);

	exports.default = Cateyes;

/***/ }),
/* 316 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Base = function () {
	    function Base(gl, vshader, fshader) {
	        _classCallCheck(this, Base);

	        this.gl = {};
	        this.vshader = {};
	        this.fshader = {};
	        this.program = null;

	        this.gl = gl;
	        this.vshader = vshader;
	        this.fshader = fshader;

	        return this;
	    }

	    _createClass(Base, [{
	        key: 'initShader',
	        value: function initShader(gl) {
	            this.gl = gl;
	            if (!this.program) {
	                this.program = Base.createProgram(this.gl, this.vshader, this.fshader);
	            }

	            if (!this.program) {
	                console.log('Failed to create program');
	                return null;
	            }

	            gl.useProgram(this.program);
	            gl.program = this.program;

	            return this.program;
	        }
	    }], [{
	        key: 'createProgram',
	        value: function createProgram(gl, vshader, fshader) {
	            // Create shader object
	            var vertexShader = Base.loadShader(gl, gl.VERTEX_SHADER, vshader);
	            var fragmentShader = Base.loadShader(gl, gl.FRAGMENT_SHADER, fshader);

	            if (!vertexShader || !fragmentShader) {
	                return null;
	            }

	            // Create a program object
	            var program = gl.createProgram();
	            if (!program) {
	                return null;
	            }

	            // Attach the shader objects
	            gl.attachShader(program, vertexShader);
	            gl.attachShader(program, fragmentShader);

	            // Link the program object
	            gl.linkProgram(program);

	            // Check the result of linking
	            var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
	            if (!linked) {
	                var error = gl.getProgramInfoLog(program);
	                console.log('Failed to link program: ' + error);
	                gl.deleteProgram(program);
	                gl.deleteShader(fragmentShader);
	                gl.deleteShader(vertexShader);
	                return null;
	            }
	            return program;
	        }
	    }, {
	        key: 'loadShader',
	        value: function loadShader(gl, type, source) {
	            // Create shader object
	            var shader = gl.createShader(type);
	            if (shader == null) {
	                console.log('unable to create shader');
	                return null;
	            }

	            // Set the shader program
	            gl.shaderSource(shader, source);

	            // Compile the shader
	            gl.compileShader(shader);

	            // Check the result of compilation
	            var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
	            if (!compiled) {
	                var error = gl.getShaderInfoLog(shader);
	                console.log('Failed to compile shader: ' + error);
	                gl.deleteShader(shader);
	                return null;
	            }

	            return shader;
	        }
	    }]);

	    return Base;
	}();

	exports.default = Base;

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Image = __webpack_require__(318);

	var _Image2 = _interopRequireDefault(_Image);

	var _PData = __webpack_require__(320);

	var _PData2 = _interopRequireDefault(_PData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    PImage: _Image2.default,
	    PData: _PData2.default
	};

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Base2 = __webpack_require__(319);

	var _Base3 = _interopRequireDefault(_Base2);

	var _index = __webpack_require__(314);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PImage = function (_Base) {
	    _inherits(PImage, _Base);

	    // plength = 3062.0;
	    // pwidth = 2800.0;
	    // plevel = 1600.0;
	    // pinverse = true;
	    // ppseudocolor = true;
	    // featurenum = 5;
	    // featurecolors = [];
	    // featurevertiecs = [];
	    /**
	     * plength, pwidth, plevel, isInverse, isPseudocolor: options
	     * @param {number} featurenum 特征点间隔数
	     */
	    function PImage(img, width, height) {
	        var _ret;

	        _classCallCheck(this, PImage);

	        var _this = _possibleConstructorReturn(this, (PImage.__proto__ || Object.getPrototypeOf(PImage)).call(this));

	        _this.vertiecs = [];
	        _this.colors = [];
	        _this.filters = [];

	        _this.image = img;
	        _this.vertiecs = PImage.getPosition(img);

	        _this.width = img.width;
	        _this.height = img.height;

	        _this.num = 4;
	        _this.filters.push(new _index2.default.Cateyes());

	        return _ret = _this, _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(PImage, [{
	        key: 'loadBuffer',
	        value: function loadBuffer(gl) {
	            this.gl = gl;
	            var n = this.initBuffer(gl);
	            if (n < 0) {
	                console.log('Failed to set the vertex information');
	                return -1;
	            }
	            return n;
	        }
	    }], [{
	        key: 'getPosition',
	        value: function getPosition(img) {

	            var vertiecs = [-1, 1, 0, 1, 1, 1, 1, 1, -1, -1, 0, 0, 1, -1, 1, 0];

	            return vertiecs;
	        }
	    }]);

	    return PImage;
	}(_Base3.default);

	exports.default = PImage;

/***/ }),
/* 319 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Base = function () {
	    function Base(gl, vertiecs, colors, num) {
	        _classCallCheck(this, Base);

	        this.gl = {};
	        this.vertiecs = [];
	        this.colors = [];
	        this.num = 0;

	        this.vertiecs = vertiecs;
	        this.colors = colors;
	        this.num = num;
	        return this;
	    }

	    _createClass(Base, [{
	        key: 'initBuffer',
	        value: function initBuffer(gl) {
	            this.gl = gl;
	            // Write the vertex coordinates and color to the buffer object
	            var vertiecs = [];
	            var num = 0;

	            vertiecs = this.vertiecs;
	            num = this.num;

	            if (!Base.initArrayBuffer(this.gl, vertiecs, 4, gl.FLOAT, 'aVertexPosition')) return -1;

	            if (!Base.initTextures(this.gl, num, this.image, 'u_Sampler')) return -1;
	            return num;
	        }
	    }], [{
	        key: 'initArrayBuffer',
	        value: function initArrayBuffer(gl, data, num, type, attribute) {
	            // Create a buffer object
	            var buffer = gl.createBuffer();
	            if (!buffer) {
	                console.log('Failed to create the buffer object');
	                return -1;
	            }
	            // Write date into the buffer object
	            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

	            var verticesTexCoords = new Float32Array(data);
	            var FSIZE = verticesTexCoords.BYTES_PER_ELEMENT;

	            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
	            // Assign the buffer object to the attribute variable
	            var a_attribute = gl.getAttribLocation(gl.program, attribute);
	            if (a_attribute < 0) {
	                console.log('Failed to get the storage location of ' + attribute);
	                return -1;
	            }

	            gl.vertexAttribPointer(a_attribute, 2, type, false, FSIZE * 4, 0);
	            // Enable the assignment of the buffer object to the attribute variable
	            gl.enableVertexAttribArray(a_attribute);

	            // Get the storage location of a_TexCoord
	            var a_TexCoord = gl.getAttribLocation(gl.program, 'a_TexCoord');
	            if (a_TexCoord < 0) {
	                console.log('Failed to get the storage location of a_TexCoord');
	                return -1;
	            }
	            // Assign the buffer object to a_TexCoord variable
	            gl.vertexAttribPointer(a_TexCoord, 2, type, false, FSIZE * 4, FSIZE * 2);
	            gl.enableVertexAttribArray(a_TexCoord);
	            gl.bindBuffer(gl.ARRAY_BUFFER, null);

	            buffer = null;
	            a_attribute = null;
	            a_TexCoord = null;
	            return num;
	        }
	    }, {
	        key: 'initTextures',
	        value: function initTextures(gl, n, image, attribute) {
	            var texture = gl.createTexture();

	            if (!texture) {
	                console.log('Failed to create the texture object');
	                return false;
	            }

	            var u_Sampler = gl.getUniformLocation(gl.program, attribute);

	            if (!u_Sampler) {
	                console.log('Failed to get the storage location of u_Sampler');
	                return false;
	            }
	            if (!image.complete) {
	                image.addEventListener('load', function () {
	                    Base.loadTexture(gl, n, texture, u_Sampler, image);
	                });
	            } else {
	                Base.loadTexture(gl, n, texture, u_Sampler, image);
	            }

	            return true;
	        }
	    }, {
	        key: 'loadTexture',
	        value: function loadTexture(gl, n, texture, u_Sampler, image) {
	            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
	            gl.activeTexture(gl.TEXTURE0);
	            gl.bindTexture(gl.TEXTURE_2D, texture);

	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
	            gl.uniform1i(u_Sampler, 0);

	            texture = null;
	            u_Sampler = null;
	        }
	    }]);

	    return Base;
	}();

	exports.default = Base;

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Base2 = __webpack_require__(319);

	var _Base3 = _interopRequireDefault(_Base2);

	var _index = __webpack_require__(314);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PData = function (_Base) {
	    _inherits(PData, _Base);

	    // plength = 3062.0;
	    // pwidth = 2800.0;
	    // plevel = 1600.0;
	    // pinverse = true;
	    // ppseudocolor = true;
	    // featurenum = 5;
	    // featurecolors = [];
	    // featurevertiecs = [];
	    /**
	     * plength, pwidth, plevel, isInverse, isPseudocolor: options
	     * @param {number} featurenum 特征点间隔数
	     */
	    function PData(data, width, height) {
	        var _ret;

	        _classCallCheck(this, PData);

	        var _this = _possibleConstructorReturn(this, (PData.__proto__ || Object.getPrototypeOf(PData)).call(this));

	        _this.vertiecs = [];
	        _this.colors = [];
	        _this.filters = [];
	        _this.offset = 0;

	        _this.data = data;
	        // let img = PData.getImageformData(data,width,height);
	        // this.image = img;
	        _this.vertiecs = PData.getPosition();

	        _this.width = width;
	        _this.height = height;

	        _this.num = 4;
	        _this.filters.push(new _index2.default.Cateyes());

	        return _ret = _this, _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(PData, [{
	        key: 'getoffset',
	        value: function getoffset() {
	            this.image = this.getImageformData(this.data, this.width, this.height);
	            return this;
	        }
	    }, {
	        key: 'loadBuffer',
	        value: function loadBuffer(gl) {
	            this.gl = gl;
	            var n = this.initBuffer(gl);
	            if (n < 0) {
	                console.log('Failed to set the vertex information');
	                return -1;
	            }
	            return n;
	        }
	    }, {
	        key: 'getImageformData',
	        value: function getImageformData(data, width, height) {
	            var canvas = document.createElement('canvas');
	            canvas.width = width;
	            canvas.height = height;
	            var min = 0;
	            for (var i = 0; i < data.length; i++) {
	                min = data[i] < min ? data[i] : min;
	            }
	            this.offset = min;

	            var ctx = canvas.conext = canvas.getContext('2d');
	            var pixels = [];
	            for (var _i = 0; _i < data.length; _i++) {
	                var temp = data[_i] + Math.abs(this.offset);
	                var r = void 0,
	                    g = void 0,
	                    b = void 0;
	                r = parseInt(temp / 65536);
	                var step = r * 65536;
	                g = parseInt((temp - step) / 256);
	                step += g * 256;
	                b = parseInt(temp - step);
	                pixels.push(r, g, b, 255.0);
	            }

	            var imagedata = new ImageData(width, height);
	            imagedata.data.set(pixels, 0, pixels.length);
	            ctx.putImageData(imagedata, 0, 0);

	            var image = new Image();
	            image.src = canvas.toDataURL('image/png');

	            return image;
	        }
	    }], [{
	        key: 'getPosition',
	        value: function getPosition() {

	            var vertiecs = [-1, 1, 0, 1, 1, 1, 1, 1, -1, -1, 0, 0, 1, -1, 1, 0];

	            return vertiecs;
	        }
	    }]);

	    return PData;
	}(_Base3.default);

	exports.default = PData;

/***/ }),
/* 321 */
/***/ (function(module, exports) {

	'use strict';

	(function () {

		var Cateyes = window.Cateyes || (window.Cateyes = {});

		/**
	  * 指令池
	  * @type {Object}
	  */
		var CommondPool = {};

		/**
	  * 指令工厂
	  */
		var ViewerCommondFactory = Cateyes.namespace('Cateyes.ViewerCommondFactory', {
			/**
	   * 指令类型
	   * @type {Object}
	   */
			TYPES: {},
			regist: function regist(commondType, commondConstructor) {
				commondConstructor.prototype.TYPE = commondType;
				this.TYPES[commondType] = commondConstructor;
			},
			/**
	   * 是否注册了某指令
	   * @return {Boolean} [description]
	   */
			has: function has(commondType) {
				return !!this.TYPES[commondType];
			},
			/**
	   * 创建指令
	   * @param  {[type]} commondType [description]
	   * @param  {[type]} params      [description]
	   * @return {[type]}             [description]
	   */
			create: function create(commondType, params) {
				if (this.TYPES[commondType]) {
					var cmdQueue = CommondPool[commondType] || (CommondPool[commondType] = []),
					    cmd;
					if (cmdQueue.length) {
						cmd = CommondPool[commondType].shift();
						cmd.setParams(params);
					} else {
						cmd = new this.TYPES[commondType](params);
					}
					return cmd;
				}
			},
			/**
	   * 反序列化指令
	   * @param  {[type]} json [description]
	   * @return {[type]}      [description]
	   */
			deserialization: function deserialization(json) {
				if (Cateyes.Utils.isString(json)) {
					try {
						json = JSON.parse(json);
					} catch (e) {}
				}
				if (this.TYPES[json.cmd]) {
					return this.create(json.cmd, json.params);
				}
			}
		});

		/*******************************   指令内置对象解析器   ***********************************/

		//指令解析器
		var CommondParamsResolver = {
			resolve: function resolve(params, viewer) {
				if (params) {
					if (params.$) {
						for (var k in params.$) {
							params[k] = this._resolveCmdStr(params.$[k], viewer);
						}
					}
					if (params._$) {
						var _ = params._ = params._ || {};
						for (var k in params._$) {
							_[k] = this._resolveCmdStr(params._$[k], viewer);
						}
					}
				}
			},
			_resolveCmdStr: function _resolveCmdStr(cmdStr, viewer) {
				//CANVAS_X,CANVAS_Y
				if (viewer && cmdStr) {
					var $dicomCanvas = viewer.getCanvas('DICOM').$el,
					    offset = $dicomCanvas.offset();
					dicomCanvasTransform = this._getTransformMatrix($dicomCanvas);
					var builtinVar = {
						CANVAS_OFFSET_LEFT: offset.left,
						CANVAS_OFFSET_TOP: offset.top,
						CANVAS_WIDTH: $dicomCanvas.width(),
						CANVAS_HEIGHT: $dicomCanvas.height(),
						CANVAS_SCALE_HORIZONTAL: dicomCanvasTransform.horizontal,
						CANVAS_SCALE_VERTICAL: dicomCanvasTransform.vertical
					};
					for (var k in builtinVar) {
						cmdStr = cmdStr.replaceAll('{' + k + '}', builtinVar[k]);
					}
					return cmdStr;
				}
			},
			_getTransformMatrix: function _getTransformMatrix($el) {
				var matrix = $el.css('transform');
				matrix = matrix.substring(7, matrix.length - 1).split(',');
				return {
					horizontal: matrix[0],
					vertical: matrix[3]
				};
			}
		};

		/**
	  * 指令基类
	  */
		var ViewerCommond = function ViewerCommond(params) {
			this.setParams(params);
		};
		ViewerCommond.prototype = {
			TYPE: 'BASE',
			/**
	   * 设置参数
	   */
			setParams: function setParams(params) {
				this.params = params;
			},
			getParams: function getParams() {
				return this.params;
			},
			/**
	   * 执行指令
	   * @param  {[type]} viewer [description]
	   * @return {[type]}        [description]
	   */
			execute: function execute(viewer) {
				//预处理指令
				var params = this.getParams();
				CommondParamsResolver.resolve(params, viewer);
				//执行指令(返回值表示 是否阻止同一用户事件中后续指令的执行)
				var stop = this._execute(viewer);
				//回收
				this.recover();
				return stop;
			},
			_execute: function _execute(viewer) {
				throw new Error('execute 方法未在子类中实现');
			},
			/**
	   * 回收指令
	   * @return {[type]} [description]
	   */
			recover: function recover() {
				CommondPool[this.TYPE].push(this);
			},
			/**
	   * 序列化指令
	   */
			serialize: function serialize() {
				return JSON.stringify({
					cmd: this.TYPE,
					params: this.params
				});
			}
		};

		/********************************   指令集   ************************************/

		/**
	  * 1.还原指令
	  * 
	  * params : 无
	  * 
	  */
		ViewerCommondFactory.regist('CMD_RESET', Cateyes.ClassHelper.extend(ViewerCommond, function () {}, {
			_execute: function _execute(viewer) {
				viewer.positioner.reset();
				viewer.tinter.reset();
				viewer.render();
			}
		}));

		/**
	  * 2.平移，缩放，旋转，反转指令
	  *
	  * params : {
	  * x : 横坐标
	  * y ： 纵坐标
	  * scale ：缩放比例
	  * horizontal ： 水平比例
	  * vertical ：垂直比例
	  * rotate ：旋转角度
	  * }
	  * 
	  */
		ViewerCommondFactory.regist('CMD_TRANSFORM', Cateyes.ClassHelper.extend(ViewerCommond, function (params) {
			this.setParams(params);
		}, {
			_execute: function _execute(viewer) {
				var params = this.getParams();
				params && viewer.transform(params);
			}
		}));

		/**
	  * 3.检索
	  *
	  * params:{
	  * to : 切换图（PREV,NEXT,index）
	  * }
	  * 
	  */
		ViewerCommondFactory.regist('CMD_BROWSE', Cateyes.ClassHelper.extend(ViewerCommond, function (params) {
			this.setParams(params);
		}, {
			_execute: function _execute(viewer) {
				var params = this.getParams(),
				    player = viewer.getPlayer();
				switch (params.to) {
					case 'NEXT':
						player.next();
						break;
					case 'PREV':
						player.prev();
						break;
					default:
						if (Cateyes.Utils.isNumber(params.to)) {
							player.jump(params.to);
						}
				}
			}
		}));

		/**
	  * 4.着色指令（窗宽窗位，反色，伪彩）
	  *
	  * params{
	  * windowWitdh :窗宽
	  * windowCenter : 窗位
	  * offsetWindowWitdh :变化窗宽
	  * offsetWindowCenter : 变化窗位
	  * }
	  */
		ViewerCommondFactory.regist('CMD_TINT', Cateyes.ClassHelper.extend(ViewerCommond, function (params) {
			this.setParams(params);
		}, {
			_execute: function _execute(viewer) {
				var params = this.getParams();
				params && viewer.tinter.refresh(params);
				viewer.render();
			}
		}));

		/**
	  * 5.播放指令
	  */
		ViewerCommondFactory.regist('CMD_PLAY', Cateyes.ClassHelper.extend(ViewerCommond, function (params) {
			this.setParams(params);
		}, {
			_execute: function _execute(viewer) {
				viewer.player.togglePlay();
			}
		}));

		/**
	  * 6.快照指令
	  *
	  */
		ViewerCommondFactory.regist('CMD_SNAPSHOOT', Cateyes.ClassHelper.extend(ViewerCommond, function (params) {
			this.setParams(params);
		}, {
			_execute: function _execute(viewer) {
				viewer.snapshoot();
			}
		}));

		/**
	  * 7.显示隐藏四角信息
	  */
		ViewerCommondFactory.regist('CMD_TOGGLE_INFO', Cateyes.ClassHelper.extend(ViewerCommond, function (params) {
			this.setParams(params);
		}, {
			_execute: function _execute(viewer) {
				var infoP = viewer.getPlugins("QuadrangleInfo");
				infoP && infoP.toggleShow();
			}
		}));

		/**
	  * 8.标记关键帧指令
	  */
		ViewerCommondFactory.regist('CMD_KEYIMAGE', Cateyes.ClassHelper.extend(ViewerCommond, function (params) {
			this.setParams(params);
		}, {
			_execute: function _execute(viewer) {
				viewer.keyImage();
			}
		}));

		/**
	  * 开始创建指令
	  *
	  * params{
	  * type : 标注类型
	  * params : 标注参数
	  * }
	  */
		ViewerCommondFactory.regist('CMD_MARK_CREATE', Cateyes.ClassHelper.extend(ViewerCommond, function (params) {
			this.setParams(params);
		}, {
			_execute: function _execute(viewer) {
				viewer.marker.setCreatingMark(viewer.marker.addMark(this.getParams(), true));
				viewer.marker.setCurrentMark(null);
				viewer.marker.refresh();
			}
		}));
		/**
	  * 创建中
	  */
		ViewerCommondFactory.regist('CMD_MARK_CREATING', Cateyes.ClassHelper.extend(ViewerCommond, function (params) {
			this.setParams(params);
		}, {
			_execute: function _execute(viewer) {
				viewer.marker.creatingMark(this.getParams());
			}
		}));
		/**
	  * 完成创建
	  */
		ViewerCommondFactory.regist('CMD_MARK_CREATED', Cateyes.ClassHelper.extend(ViewerCommond, function (params) {
			this.setParams(params);
		}, {
			_execute: function _execute(viewer) {
				return viewer.marker.createdMark(this.getParams());
			}
		}));
		/**
	  * 创建标注指令
	  */
		ViewerCommondFactory.regist('CMD_MARK_REFRESH', Cateyes.ClassHelper.extend(ViewerCommond, function (params) {
			this.setParams(params);
		}, {
			_execute: function _execute(viewer) {
				viewer.marker.refreshMark(this.getParams());
				return true;
			}
		}));
		/**
	  * 激活标注指令
	  */
		ViewerCommondFactory.regist('CMD_MARK_ACTIVE', Cateyes.ClassHelper.extend(ViewerCommond, function (params) {
			this.setParams(params);
		}, {
			_execute: function _execute(viewer) {
				var params = this.getParams();
				var stop = params && viewer.marker.active(params);
				return stop;
			}
		}));
		/**
	  * 激活标注指令
	  */
		ViewerCommondFactory.regist('CMD_MARK_LEAVE', Cateyes.ClassHelper.extend(ViewerCommond, function () {}, {
			_execute: function _execute(viewer) {
				viewer.marker.setCurrentMark(null);
			}
		}));

		/**
	  * 撤销标注指令
	  */
		ViewerCommondFactory.regist('CMD_MARK_REVOKE', Cateyes.ClassHelper.extend(ViewerCommond, function () {}, {
			_execute: function _execute(viewer) {
				viewer.marker.revoke();
			}
		}));

		/**
	  * 清除标注指令
	  */
		ViewerCommondFactory.regist('CMD_MARK_CLEAR', Cateyes.ClassHelper.extend(ViewerCommond, function () {}, {
			_execute: function _execute(viewer) {
				viewer.marker.clear();
			}
		}));

		/******************************** 进阶功能 ******************************/

		/**
	  * MPR重建
	  */
		ViewerCommondFactory.regist('CMD_MPR_REBUILD', Cateyes.ClassHelper.extend(ViewerCommond, function (params) {
			this.setParams(params);
		}, {
			_execute: function _execute(viewer) {
				viewer.tinter.mpr(this.getParams() && this.getParams().orientation);
			}
		}));

		/**
	  * 放大镜
	  */
		ViewerCommondFactory.regist('CMD_MAGNIFYING_GLASS', Cateyes.ClassHelper.extend(ViewerCommond, function (params) {
			this.setParams(params);
		}, {
			_execute: function _execute(viewer) {
				var params = this.getParams(),
				    $container = params.$container;
				// if(!$container._init){
				// }
				var cvs = $container._canvas,
				    ctx = $container._context,
				    scale = $container._scale,
				    width = cvs.width,
				    height = cvs.height;
				ctx.clearRect(0, 0, width, height);
				ctx.save();
				ctx.scale(scale, scale);
				ctx.translate(-params.x + width / 2 / scale, -params.y + height / 2 / scale);
				// ctx
				ctx.drawImage(viewer.getCanvas('DICOM'), 0, 0);
				ctx.restore();
			}
		}));
	})();

/***/ }),
/* 322 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * 
	 * 阅片器管理器
	 *
	 * author : fanll
	 *
	 * createTime :2015-07-31
	 * 
	 * 
	 */
	(function () {

		var Cateyes = window.Cateyes || (window.Cateyes = {});

		/**
	  * 阅片器管理器
	  * @type {Object}
	  */
		Cateyes.ViewerManager = {
			currentViewer: null,
			currentMultiViewer: null,
			getCurrentViewer: function getCurrentViewer() {
				return this.currentViewer;
			},
			setCurrentViewer: function setCurrentViewer(viewer) {
				if (this.currentViewer) {
					this.currentViewer.getContainer().closest('.cateyes-viewer-container').removeClass('active');
				}
				this.currentViewer = viewer;
				if (viewer) {
					viewer.getContainer().closest('.cateyes-viewer-container').addClass('active');
				}
			},
			getCurrentMultiViewer: function getCurrentMultiViewer() {
				return this.currentMultiViewer;
			},
			setCurrentMultiViewer: function setCurrentMultiViewer(multiViewer) {
				if (this.currentMultiViewer) {
					this.currentMultiViewer.getContainer().parent().removeClass('active');
				}
				this.currentMultiViewer = multiViewer;
				if (multiViewer) {
					this.currentViewer = multiViewer.getFirstViewer();
					multiViewer.getContainer().parent().addClass('active');
				}
			},
			getViewerById: function getViewerById(id) {
				return Cateyes.ViewerFactory.get(id);
			},
			getViewerByIndex: function getViewerByIndex(index) {
				return this.getViewerById($(".cateyes-viewer").eq(index).data('cateyes-viewer-id'));
			},
			getMultiViewerById: function getMultiViewerById(id) {
				return Cateyes.MultiViewerFactory.get(id);
			},
			getMultiViewerByIndex: function getMultiViewerByIndex(index) {
				return this.getMultiViewerById($(".cateyes-viewer-multi-wrap").eq(index).data('id'));
			},
			getAllViewers: function getAllViewers() {
				var vs = [],
				    viewers = this.viewers;
				for (var v in viewers) {
					if (viewers.hasOwnProperty(v)) {
						vs.push(viewers[v]);
					}
				}
				return vs;
			},
			viewers: {},
			GRID: {
				'1*1': true,
				'1*2': true,
				'2*2': true,
				'1*3': true,
				'2*3': true,
				'3*3': true,
				'1*4': true,
				'2*4': true,
				'3*4': true,
				'4*4': true
			},
			/**
	   * 初始化
	   * @param  {[type]} $el  [description]
	   * @param  {[type]} grid [description]
	   * @return {[type]}      [description]
	   */
			init: function init($el, grid) {
				if (!$el) {
					return;
				}
				this.$container = $('<div></div>').css({
					width: '100%',
					height: '100%',
					position: 'relative'
				}).appendTo($el);
				this.grid = this.GRID[grid] ? grid : '1*1';
				var grid = this.grid.split('*');
				this.initGrid(+grid[0], +grid[1]);
				this.initEvent();
			},
			/**
	   * 初始化网格
	   * @param  {[type]} grid [description]
	   * @return {[type]}      [description]
	   */
			initGrid: function initGrid(rows, cols, silent) {
				var total = this.total = rows * cols;
				this.rows = rows;
				this.cols = cols;
				var $wraps = this.$container.children('.cateyes-viewer-container'),
				    wrapCount = $wraps.length;
				//调整数量
				if (wrapCount > total) {
					var viewerId;
					for (var i = total; i < wrapCount; i++) {
						viewerId = $(".cateyes-viewer-multi-wrap", $wraps.eq(i)).data('id');
						Cateyes.MultiViewerFactory.recover(viewerId + '');
						delete this.viewers[viewerId];
						$wraps.eq(i).remove();
					}
				} else if (wrapCount < total) {
					for (var i = wrapCount; i < total; i++) {
						var $wrap = $('<div class="cateyes-viewer-container">').css({
							'position': 'relative',
							'box-sizing': 'border-box',
							'overflow': 'hidden',
							display: 'inline-block'
						});
						var $el = $('<div></div>').appendTo($wrap);
						var viewer = Cateyes.MultiViewerFactory.create($el, i);
						this.viewers[viewer.id] = viewer;
						if (!Cateyes.ViewerManager.getCurrentMultiViewer()) {
							Cateyes.ViewerManager.setCurrentMultiViewer(viewer);
						}
						$wrap.appendTo(this.$container);
					}
				}
				$('.cateyes-viewer-container').css('display', 'inline-block');
				this.refresh();
				silent || this.synchronizeCloud();
			},
			initEvent: function initEvent() {
				var self = this;
				//双击放大
				//手机端无需此操作
				if (Cateyes.getPlat() == 'PHONE' && !Cateyes.isPad()) {
					return;
				}
				var dbTime = 0;
				this.$container.on(Cateyes.EVENTS.MOUSE_DOWN, '.cateyes-viewer-container', function (ev) {
					var now = new Date().getTime(),
					    touches = ev.originalEvent.touches;
					if (touches && touches.length == 2) {
						return;
					}
					if (now - dbTime <= 240) {
						self.toggleViewerFullScreen(Cateyes.ViewerManager.getMultiViewerById($('.cateyes-viewer-multi-wrap', $(this)).data('id')));
					} else {
						dbTime = now;
					}
				});
			},
			toggleViewerFullScreen: function toggleViewerFullScreen(viewer) {
				if (viewer) {
					var $container = viewer.getContainer().parent();
					if ($container.toggleClass('full-screen').hasClass('full-screen')) {
						$container.css({
							width: '100%',
							height: '100%'
						});
						$container.siblings('.cateyes-viewer-container').css('display', 'none');
					} else {
						$container.css({
							width: $container.data('width'),
							height: $container.data('height')
						});
						$container.siblings('.cateyes-viewer-container').css('display', 'inline-block');
					}
					this.synchronizeCloud();
					viewer.center();
				}
			},
			/**
	   * 刷新样式
	   * @return {[type]} [description]
	   */
			refresh: function refresh() {
				var $wraps = this.$container.children('.cateyes-viewer-container'),
				    wrapWidth = 100 / this.cols,
				    wrapHeight = 100 / this.rows;
				for (var i = 0, l = $wraps.length; i < l; i++) {
					$wraps.eq(i).css({
						width: wrapWidth + '%',
						height: wrapHeight + '%'
					}).removeClass('full-screen').data('width', wrapWidth + '%').data('height', wrapHeight + '%');
				}
				//刷新所有viewer
				var viewers = this.viewers;
				for (var k in viewers) {
					if (viewers.hasOwnProperty(k)) {
						viewers[k].reset();
					}
				}
			},
			getFullShowViewerIndex: function getFullShowViewerIndex() {
				var $els = $('.cateyes-viewer-container'),
				    index = '';
				for (var i = 0, l = $els.length; i < l; i++) {
					if ($els.eq(i).hasClass('full-screen')) {
						index = i;
						break;
					}
				}
				return index;
			},
			activeViewer: function activeViewer(witch) {
				var index = +this.getCurrentMultiViewer().id,
				    total = this.total;
				switch (witch) {
					case 'NEXT':
						index++;
						break;
					case 'PREV':
						index--;
						break;
					default:
						index = +witch;
						break;
				}
				if (index < 0) {
					index += total;
				}
				if (index >= total) {
					index -= total;
				}
				var v = this.getMultiViewerByIndex(index);
				v && v.active();
			},
			/**
	   * 云同步
	   * @return {[type]} [description]
	   */
			synchronizeCloud: function synchronizeCloud() {
				if (Cateyes.CatCloud.isOnline()) {
					Cateyes.SocketPubSub.publish(Cateyes.SOCKET_EVENTS.SK_SEND_MESSAGE, this.getJson());
				}
			},
			getJson: function getJson() {
				return {
					VIEWERMANAGER: JSON.stringify({
						rows: this.rows,
						cols: this.cols,
						full: this.getFullShowViewerIndex()
					})
				};
			},
			setJson: function setJson(json) {
				var grid = JSON.parse(json);
				this.initGrid(grid.rows, grid.cols, true);
				if (grid.full !== '') {
					var $fullShowViewer = $('.cateyes-viewer-container').eq(grid.full);
					$fullShowViewer.css({
						width: '100%',
						height: '100%'
					});
					$fullShowViewer.siblings('.cateyes-viewer-container').css('display', 'none');
				}
			}
		};
	})();

/***/ }),
/* 323 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 *  阅片器
	 *
	 *  createTime : 2015-07-20
	 *
	 *  updateTime : 2015-07-20
	 *
	 */
	(function (window, undefined) {

	    var Cateyes = window.Cateyes || (window.Cateyes = {});

	    Cateyes.MultiViewerFactory = {
	        map: {},
	        list: [],
	        /**
	         * 创建
	         * @param  {[type]} el  [description]
	         * @param  {[type]} ops [description]
	         * @return {[type]}     [description]
	         */
	        create: function create($el, id) {
	            var viewer;
	            viewer = new MultiViewer($el, id);
	            this.map[id] = viewer;
	            return viewer;
	        },
	        /**
	         * 回收
	         * @param  {[type]} viewer [description]
	         * @return {[type]}        [description]
	         */
	        recover: function recover(viewer) {
	            if (Cateyes.Utils.isString(viewer)) {
	                viewer = this.get(viewer);
	            }
	            viewer.close();
	            // this.list.push(viewer);
	        },
	        /**
	         * 获取
	         * @param  {[type]} id [description]
	         * @return {[type]}    [description]
	         */
	        get: function get(id) {
	            return this.map[id];
	        }
	    };

	    /**
	     * Dicom浏览器
	     */
	    var MultiViewer = Cateyes.MultiViewer = function ($el, id) {
	        this.init($el, id);
	    };
	    Cateyes.ClassHelper.extend(Cateyes.PubSub, MultiViewer, {
	        /**
	         * 初始化
	         * @return {[type]} [description]
	         */
	        init: function init($el, id) {
	            this.id = id;
	            this.$viewers = [];
	            this.viewers = [];
	            this._initDom($el);
	            this.initGrid(1, 1);
	        },
	        initGrid: function initGrid(rows, cols) {
	            var total = this.total = rows * cols;
	            this.rows = rows;
	            this.cols = cols;
	            var $wraps = this.$container.children('.cateyes-viewer-box'),
	                wrapCount = $wraps.length;
	            //调整数量
	            if (wrapCount > total) {
	                var viewerId;
	                for (var i = total; i < wrapCount; i++) {
	                    viewerId = $(".cateyes-viewer", $wraps.eq(i)).data('cateyes-viewer-id');
	                    Cateyes.ViewerFactory.recover(viewerId + '');
	                    this.viewers.pop();
	                    $wraps.eq(i).remove();
	                }
	            } else if (wrapCount < total) {
	                for (var i = wrapCount; i < total; i++) {
	                    var $wrap = $('<div class="cateyes-viewer-box"><div class="cateyes-viewer-body"></div></div>').css({
	                        'position': 'relative',
	                        'box-sizing': 'border-box',
	                        display: 'inline-block'
	                    });
	                    this.$container.append($wrap);
	                    var viewer = Cateyes.ViewerFactory.create($('.cateyes-viewer-body', $wrap), this.id + '-' + i);
	                    this.viewers.push(viewer);
	                }
	            }
	            this.refresh();
	            this._initViewerEvent();
	        },

	        /**
	         * 刷新样式
	         * @return {[type]} [description]
	         */
	        refresh: function refresh() {
	            var $wraps = this.$container.children('.cateyes-viewer-box'),
	                wrapWidth = 100 / this.cols,
	                wrapHeight = 100 / this.rows;
	            for (var i = 0, l = $wraps.length; i < l; i++) {
	                $wraps.eq(i).css({
	                    width: wrapWidth + '%',
	                    height: wrapHeight + '%'
	                }).removeClass('full-screen').data('width', wrapWidth + '%').data('height', wrapHeight + '%');
	            }
	            //刷新所有viewer
	            var step = this.viewers.length;
	            this.viewers.forEach(function (viewer, index) {
	                viewer.player.setStep(step);
	            });
	            if (this.series) {
	                this.setSeries(this.series);
	            }
	        },
	        _initViewerEvent: function _initViewerEvent() {
	            var _this = this;

	            this.viewers.forEach(function (viewer, index) {
	                if (viewer.__bindMultiViewerEvent) {
	                    return;
	                }
	                viewer.__bindMultiViewerEvent = true;
	                //浏览
	                viewer.subscribe(Cateyes.CustomEvents.AFTER_BROWSE_DICOM, function (params) {
	                    if (params) {
	                        _this.viewers.forEach(function (viewer, currentIndex) {
	                            if (index != currentIndex) {
	                                viewer.player.jump(params.to + (currentIndex - index), true);
	                            }
	                        });
	                    }
	                });
	                //位置
	                viewer.subscribe(Cateyes.CustomEvents.POSITION, function (state) {
	                    if (state) {
	                        _this.viewers.forEach(function (viewer, currentIndex) {
	                            if (index != currentIndex) {
	                                viewer.positioner.refresh(state, true);
	                            }
	                        });
	                    }
	                });
	                //渲染状态
	                viewer.subscribe(Cateyes.CustomEvents.AFTER_TINT_DICOM, function (state) {
	                    if (state) {
	                        var stateJson = JSON.stringify(state);
	                        _this.viewers.forEach(function (viewer, currentIndex) {
	                            if (index != currentIndex) {
	                                viewer.getSeries() && viewer.tinter.setJson(stateJson);
	                            }
	                        });
	                    }
	                });
	            });
	        },

	        getViewerId: function getViewerId() {
	            return this.id;
	        },
	        /**
	         * 初始化结构
	         */
	        _initDom: function _initDom($el) {
	            var _this2 = this;

	            this.$container = $el.addClass('cateyes-viewer-multi-wrap').data('id', this.id).css({
	                'box-sizing': 'border-box',
	                'width': '100%',
	                'height': '100%'
	            });
	            this.$container.parent().on(Cateyes.EVENTS.MOUSE_DOWN, function () {
	                _this2.active();
	            });
	        },
	        /**
	         * 初始化事件
	         */
	        _initEvents: function _initEvents() {},
	        getContainer: function getContainer() {
	            return this.$container;
	        },
	        //门户方法
	        /**
	         * 绑定序列
	         * @param {[type]} series [description]
	         */
	        setSeries: function setSeries(series, silent) {
	            this.series = series;
	            this.viewers.forEach(function (viewer, index) {
	                viewer.setSeries(series, silent);
	                while (index--) {
	                    viewer.player.next(true);
	                }
	            });
	            return this;
	        },
	        reset: function reset(reTinter) {
	            this.viewers.forEach(function (viewer) {
	                viewer.reset(reTinter);
	            });
	        },
	        getFirstViewer: function getFirstViewer() {
	            return this.viewers[0];
	        },
	        center: function center() {
	            this.viewers.forEach(function (viewer) {
	                viewer.positioner.center();
	            });
	        },

	        /**
	         * 激活
	         * @return {[type]} [description]
	         */
	        active: function active() {
	            Cateyes.ViewerManager.setCurrentMultiViewer(this);
	            return this;
	        },
	        /**
	         * 关闭
	         * @return {[type]} [description]
	         */
	        close: function close() {
	            //this.setSeries(null);
	        }
	    });
	})(window);

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(311);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 *  阅片器
	 *
	 *  createTime : 2015-07-20
	 *
	 *  updateTime : 2015-07-20
	 *
	 */
	(function (window, undefined) {

		var Cateyes = window.Cateyes || (window.Cateyes = {});

		Cateyes.ViewerFactory = {
			map: {},
			list: [],
			/**
	   * 创建
	   * @param  {[type]} el  [description]
	   * @param  {[type]} ops [description]
	   * @return {[type]}     [description]
	   */
			create: function create($el, id) {
				var viewer;
				//if (this.list.length) {
				//viewer = this.list.shift();
				//viewer.init($el, id);
				//} else {
				viewer = new Viewer($el, id);
				this.map[id] = viewer;
				//}
				return viewer;
			},
			/**
	   * 回收
	   * @param  {[type]} viewer [description]
	   * @return {[type]}        [description]
	   */
			recover: function recover(viewer) {
				if (Cateyes.Utils.isString(viewer)) {
					viewer = this.get(viewer);
				}
				viewer.close();
				this.list.push(viewer);
			},
			/**
	   * 获取
	   * @param  {[type]} id [description]
	   * @return {[type]}    [description]
	   */
			get: function get(id) {
				return this.map[id];
			}
		};

		/**
	  * Dicom浏览器
	  */
		var Viewer = Cateyes.Viewer = function ($el, id) {
			this.init($el, id);
			this.canvas = {};
		};
		var plugins = Cateyes.getPlat() == 'PHONE' ? ['QuadrangleInfo', 'ImageOrientation', 'Scaleplate', 'Loading'] : ['QuadrangleInfo', 'BrowseLock', 'FullScreen', 'SwipeControl', 'KeyImageMarker', 'PositionLine', 'ImageOrientation', 'Scaleplate', 'Loading'];
		if (Cateyes.isPad()) {
			plugins.push('SwipeControl');
			plugins.push('PositionLine');
		}
		Cateyes.ClassHelper.extend(Cateyes.PubSub, Viewer, {
			BASE_PLUGINS: plugins,
			/**
	   * 初始化
	   * @return {[type]} [description]
	   */
			init: function init($el, id) {
				this.id = id;
				this._initDom($el);
				this._initEvents();
				this._initTinter();
				this._initPositioner();
				this._initMarker();
				this._initPlayer();
				this.initPlugins();
				this.inited = true;
			},
			getViewerId: function getViewerId() {
				return this.id;
			},
			/**
	   * 初始化结构
	   */
			_initDom: function _initDom($el) {
				var self = this;
				this.$container = $el.addClass("cateyes-viewer").data("cateyes-viewer-id", this.id);
				this.$container.parent().on(Cateyes.EVENTS.MOUSE_DOWN, function () {
					self.active();
				});
				//初始化头部
				var $header = this.$header = $('<div class="cateyes-viewer-header"></div>').insertBefore(this.$container);
			},
			/**
	   * 初始化事件
	   */
			_initEvents: function _initEvents() {},
			getContainer: function getContainer() {
				return this.$container;
			},
			/**
	   * 变更画布尺寸
	   * @param  {[type]} width  [description]
	   * @param  {[type]} height [description]
	   * @return {[type]}        [description]
	   */
			changeWrapSize: function changeWrapSize(width, height) {
				for (var witch in this.canvas) {
					if (this.canvas.hasOwnProperty(witch)) {
						this.canvas[witch].width = width;
						this.canvas[witch].height = height;
					}
				}
			},
			/**
	   * 获取画布
	   * @param  {[type]} type    画布标识
	   * @param  {[type]} zIndex  层级
	   * @param  {[type]} refresh 尺寸刷新回调
	   * @return {[type]}         [description]
	   */
			getCanvas: function getCanvas(type, zIndex, refresh, inited) {
				type = type || 'DICOM';
				var $container = this.getContainer();
				if (this.canvas[type]) {
					return this.canvas[type];
				} else {
					var $cvs = $('<canvas class="' + type + '"></canvas>').appendTo($container).css({
						'position': 'absolute',
						'top': '50%',
						'bottom': '0px',
						'left': '50%',
						'right': '0px',
						'z-index': zIndex || 0
					}),
					    self = this;
					var cvs = this.canvas[type] = $cvs[0];
					cvs.$el = $cvs;
					if (type == 'DICOM') {
						var seriesInfo = this.getSeries();
						var deviceType = seriesInfo && seriesInfo.info.deviceType;
						try {
							if (deviceType && deviceType !== 'CT' && deviceType !== 'MR') {
								cvs.ST = new _index2.default.Renderer(cvs);
								cvs.type = "WEBGL";
							} else {
								cvs.type = "CANVAS";
							}
						} catch (e) {
							cvs.type = "CANVAS";
						}
						$cvs.attr('data-type', cvs.type);
					}
					try {
						cvs.context = cvs.getContext('2d');
					} catch (e) {
						console.log('2d canvas error');
					}
					cvs._center = function () {
						cvs.$el.css({
							'margin-top': -cvs.height / 2 + 'px',
							'margin-left': -cvs.width / 2 + 'px'
						});
					};
					if (refresh) {
						refresh.call(cvs, self);
						this.subscribe(Cateyes.CustomEvents.ON_DICOM_CANVAS_RESIZE, function (series) {
							refresh.call(cvs, self);
						});
					}
					if (inited) {
						inited.call(cvs, self);
					};
					return cvs;
				}
			},
			destroyCanvas: function destroyCanvas(type) {
				if (this.canvas[type]) {
					$('.' + type, this.getContainer()).remove();
					delete this.canvas[type];
				}
			},

			/**
	   * 绑定序列
	   * @param {[type]} series [description]
	   */
			setSeries: function setSeries(series, silent) {
				this._series = series;
				this.destroyCanvas('DICOM');
				this.publish('AFTER_BIND_SERIES', series);
				silent || this.synchronizeCloud();
				this.render();
				return this;
			},
			/**
	   * 获取序列
	   * @return {[type]} [description]
	   */
			getSeries: function getSeries() {
				return this._series;
			},
			/**
	   * 获取DICOM迭代器
	   * @return {[type]} [description]
	   */
			getDicomIterator: function getDicomIterator() {
				return this._dicomIterator;
			},
			/**
	   * 着色器
	   * @type {Array}
	   */
			tinter: null,
			getTinter: function getTinter() {
				if (this.tinter) {
					return this.tinter;
				} else {
					return this._initTinter();
				}
			},
			_initTinter: function _initTinter() {
				if (!this.tinter) {
					this.tinter = Cateyes.TinterFactory.create('WINDOW', this);
				} else {
					this.tinter.reset();
				}
				return this.tinter;
			},
			/**
	   * 定位器
	   */
			positioner: null,
			_initPositioner: function _initPositioner() {
				if (!this.positioner) {
					this.positioner = new Cateyes.Positioner(this);
				} else {
					this.positioner.refresh();
				}
			},
			/**
	   * 标注器
	   */
			marker: null,
			_initMarker: function _initMarker() {
				if (!this.marker) {
					this.marker = new Cateyes.Marker(this);
				} else {
					this.marker.refresh();
				}
			},
			/**
	   * 播放器
	   */
			player: null,
			getPlayer: function getPlayer() {
				if (this.player) {
					return this.player;
				} else {
					return this._initPlayer();
				}
			},
			_initPlayer: function _initPlayer() {
				if (!this.player) {
					this.player = new Cateyes.Player(this);
				} else {
					this.player.init();
				}
				return this.player;
			},
			/**
	   * 初始化基础插件
	   * @return {[type]} [description]
	   */
			initPlugins: function initPlugins() {
				var ps = this.PLUGINS = this.PLUGINS || Cateyes.Utils.copy(this.BASE_PLUGINS);
				for (var i = 0, p; p = ps[i++];) {
					this._initPlugins(p);
				}
			},
			/**
	   * 获取插件
	   * @param  {[type]} pluginType [description]
	   * @return {[type]}            [description]
	   */
			getPlugins: function getPlugins(pluginType) {
				return this._initPlugins(pluginType);
			},
			/**
	   * 初始化插件
	   */
			_initPlugins: function _initPlugins(pluginType) {
				this.plugins = this.plugins || {};
				if (!this.plugins[pluginType]) {
					this.plugins[pluginType] = Cateyes.PluginFactory.create(pluginType, this);
				}
				return this.plugins[pluginType];
			},
			/**
	   * 渲染
	   * @param  {array} series    dicom序列
	   * @return {[type]}           [description]
	   */
			render: function render(silint) {
				this._series && this.publish('BEFORE_RENDER_DICOM', {
					dicomProxy: this.player.getCurrentDicom(),
					silint: silint
				});
			},
			/**
	   * 移动
	   * @param  {[type]} ops [description]
	   * @return {[type]}     [description]
	   */
			transform: function transform(ops) {
				this.positioner.refresh(ops);
			},
			reset: function reset(reTinter) {
				this.positioner.center();
				this.player.refreshMarkFragment();
				reTinter && this.tinter.reset();
			},
			/**
	   * 快照
	   * @return {[type]} [description]
	   */
			timer: null,
			snapshoot: function snapshoot() {
				var self = this;
				this.player.getCurrentDicom().then(function (dicom) {
					self.tinter.tint(self.getCanvas('DICOM'), dicom, true, true);
					SnapshootCreate(self.getCanvas('DICOM'), self.getCanvas('MARK'), self.marker, self.player.getCurrentDicom().marks, self.getSeries());
				});
			},
			/**
	   * 获取快照Base64
	   * @return {[type]} [description]
	   */
			getSnapshootBase64: function getSnapshootBase64() {},
			/**
	   * 执行指令
	   * @return {[type]} [是否阻塞后续事件]
	   */
			executeCommond: function executeCommond(cmd) {
				return cmd && cmd.execute(this);
			},
			/**
	   * 激活
	   * @return {[type]} [description]
	   */
			active: function active() {
				Cateyes.ViewerManager.setCurrentViewer(this);
				this.publish('ON_VIEWER_ACTIVE');
				Cateyes.GlobalPubSub.publish('ON_VIEWER_ACTIVE', {
					viewerId: this.id
				});
				return this;
			},
			/**
	   * 关闭
	   * @return {[type]} [description]
	   */
			close: function close() {
				//this.setSeries(null);
			},
			/**
	   * 标记关键影像
	   */
			keyImage: function keyImage() {
				var keyImageMarker = this.getPlugins('KeyImageMarker');
				if (keyImageMarker) {
					keyImageMarker.toggle();
				}
			},
			/**
	   * 云同步
	   * @return {[type]} [description]
	   */
			synchronizeCloud: function synchronizeCloud() {
				if (Cateyes.CatCloud.isOnline()) {
					Cateyes.SocketPubSub.publish(Cateyes.SOCKET_EVENTS.SK_SEND_MESSAGE, this.getJson());
				}
			},
			getJson: function getJson() {
				var json = {},
				    series = this.getSeries();
				json['VIEWER_' + this.id] = JSON.stringify({
					studyId: series.study.studyInfo.studyInstanceUID,
					seriesId: series.info.seriesInstanceUID
				});
				return json;
			},
			getFullJson: function getFullJson() {
				var json = this.getJson();
				$.extend(json, this.tinter.getJson(), this.positioner.getJson(), this.player.getJson());
				return json;
			},
			setJson: function setJson(json) {
				var params = JSON.parse(json);
				var series = Cateyes.DicomService.getSeries(params.studyId, params.seriesId);
				if (series) {
					var self = this;
					series.then(function (s) {
						self.setSeries(s, true);
					});
				}
			}
		});

		/**
	  * 快照生成器
	  */
		var SnapshootCreate = function () {
			var cvs = document.createElement('canvas');
			cvs.context = cvs.getContext('2d');
			cvs.style.display = 'none';
			var $snapshootBox = $('<div class="cateyes-snapshoot-box"><img/><div style="text-align:center;"><button class="button"value="插入报告" type="button" style="font-size:16px;">插入报告</button><a title="快照" download="影像快照.png"  style="font-size:16px;"><button>下载照片</button></a></div></div>').hide().appendTo($('body')),
			    $button = $('.button', $snapshootBox),
			    $input = $('input', $input),
			    $img = $('img', $snapshootBox),
			    $link = $('a', $snapshootBox);
			var cpb;
			try {
				cpb = window.parent.window.CateyesPubSub;
			} catch (e) {
				cpb = window.CateyesPubSub;
			}

			$snapshootBox.on(Cateyes.EVENTS.CLICK, function () {
				setTimeout(function () {
					$snapshootBox.hide();
				}, 0);
			});
			return function (dicomCanvas, markCanvas, marker, marks, Series) {
				var type = Series.info.seriesDescription;

				if (type !== 'OS') {
					type = 'OD';
				}
				//1.绘制dicom
				cvs.width = markCanvas.width;
				cvs.height = markCanvas.height;
				cvs.context.save();
				cvs.context.scale(markCanvas.width / dicomCanvas.width, markCanvas.height / dicomCanvas.height);
				var canvas = void 0;
				if (dicomCanvas.type == 'WEBGL') {
					canvas = dicomCanvas.ST.changeToCanvas(function (canvas) {
						cvs.context.drawImage(canvas, 0, 0);
						//2.绘制标注
						cvs.context.restore();
						cvs.context.drawImage(markCanvas, 0, 0);
						//3.显示快照
						var data = cvs.toDataURL("image/png");
						$img.attr('src', data);
						$link.attr('href', data);
						$snapshootBox.show();
						$button.off('click');
						$button.click(function () {
							cpb.trigger('SNAPSHOOT_SELECT', {
								image: data,
								type: type
							});
						});
					});
				} else {
					canvas = dicomCanvas;

					cvs.context.drawImage(canvas, 0, 0);

					//2.绘制标注
					cvs.context.restore();
					cvs.context.drawImage(markCanvas, 0, 0);
					//3.显示快照
					var data = cvs.toDataURL("image/png");
					$img.attr('src', data);
					$link.attr('href', data);
					$snapshootBox.show();
					$button.off('click');
					$button.click(function () {
						cpb.trigger('SNAPSHOOT_SELECT', {
							image: data,
							type: type
						});
					});
					//Cateyes.GlobalPubSub.publish('AFTER_MARK_CREATED', mark);
				}
			};
		}();
	})(window);

/***/ }),
/* 325 */
/***/ (function(module, exports) {

	'use strict';

	// 工具栏
	$(function () {

		//工具栏事件中介
		var ToolbarPubSub = function () {
			var tps = $({});
			tps.EVENTS = {
				BIND_OPERATE: 'BIND_OPERATE',
				SELECTED_MODE: 'SELECTED_MODE',
				CHANGED_STATE: 'CHANGED_STATE',
				REFRESH_TOOLBAR_STATUS: 'REFRESH_TOOLBAR_STATUS',
				DOCUMENT_CLICK: 'DOCUMENT_CLICK'
			};
			return tps;
		}();

		//预设窗宽窗位常量
		var WINDOW_CONSTANT = {
			DEFAULT: "SET_WINDOW|{windowWidth:'DEFAULT',windowCenter:'DEFAULT'}",
			FULL: "SET_WINDOW|{windowWidth:'FULL',windowCenter:'FULL'}",
			'FQ': 'SET_WINDOW|{windowWidth:350,windowCenter:50}',
			'NC': 'SET_WINDOW|{windowWidth:120,windowCenter:40}',
			'GC': 'SET_WINDOW|{windowWidth:150,windowCenter:50}',
			'FC': 'SET_WINDOW|{windowWidth:1500,windowCenter:-500}',
			'ZG': 'SET_WINDOW|{windowWidth:300,windowCenter:50}',
			'GP': 'SET_WINDOW|{windowWidth:400,windowCenter:40}',
			'GUC': 'SET_WINDOW|{windowWidth:1300,windowCenter:350}',
			'CUSTOM': 'CUSTOM_WINDOW'
		};

		//操作事件
		var Operate = function () {
			var Operate = {
				working: true,
				mouseKeyRel: {
					'0': 'LEFT',
					'1': 'MIDDLE',
					'2': 'RIGHT'
					// 'SCROLL'
				},
				cis: {
					MIDDLE: Cateyes.InputCovert.getCovert('ZOOM'),
					LEFT: Cateyes.InputCovert.getCovert('CHANGE_WINDOW'),
					RIGHT: Cateyes.InputCovert.getCovert('CHANGE_WINDOW')
				},
				cisName: {
					MIDDLE: 'ZOOM',
					LEFT: 'CHANGE_WINDOW',
					RIGHT: 'CHANGE_WINDOW'
				},
				init: function init() {
					var self = this;
					this.initEvent();
					Cateyes.GlobalPubSub.subscribe('STOP_OPERATE', function () {
						self.working = false;
					});
					Cateyes.GlobalPubSub.subscribe('RESTORE_OPERATE', function () {
						self.working = true;
					});
					ToolbarPubSub.on(ToolbarPubSub.EVENTS.BIND_OPERATE, function (ev, data) {
						var type = data.type,
						    cmd = data.cmd;
						switch (type) {
							case "global":
								Operate.globalOperate(cmd);
								break;
							case "state":
								Operate.globalOperate(cmd);
								ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.CHANGED_STATE, cmd);
								break;
							case "normal":
								Operate.normalOperate(cmd);
								break;
							case "mode":
								Operate.bindModeOperate(cmd);
								ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.SELECTED_MODE, cmd);
								break;
							case "custom":
								Operate.customOperate(cmd);
						}
					});
				},
				/**
	    * 绑定模式操作
	    * @param  {[type]} mode  [description]
	    * @param  {[type]} mouse [description]
	    * @return {[type]}       [description]
	    */
				bindModeOperate: function bindModeOperate(mode, mouse) {
					mouse = mouse || 'LEFT';
					this.cisName[mouse] = mode;
					this.cis[mouse] = Cateyes.InputCovert.getCovert(mode);
				},
				/**
	    * 普通操作
	    */
				normalOperate: function normalOperate(op) {
					if (op) {
						var viewer = Cateyes.ViewerManager.getCurrentViewer();
						if (viewer) {
							op = op.split('|');
							var cmd = Cateyes.InputCovert.getCovert(op[0], eval('(' + op[1] + ')'))();
							viewer.executeCommond(cmd);
						}
					}
				},
				/**
	    * 全局操作
	    * @return {[type]} [description]
	    */
				globalOperate: function globalOperate(op) {
					if (op) {
						op = op.split('|');
						var cmd = Cateyes.InputCovert.getCovert(op[0], eval('(' + op[1] + ')'))();
						cmd && cmd();
					}
				},
				/**
	    * 特殊操作
	    * @return {[type]} [description]
	    */
				customOperate: function customOperate(cmd) {
					switch (cmd) {
						case "CUSTOM_WINDOW":
							this.showCustomWindow();
					}
				},
				/**
	    * 快捷键定义
	    */
				SHORTCUT_KEY: {
					BIND: {
						'87': 'CHANGE_WINDOW', //w
						'70': 'BROWSE', //f
						'77': 'TRANSLATE', //m
						'90': 'ZOOM', //z
						'76': 'MARK_PYS_LENGTH',
						'69': 'MARK_CT_ELLIPSE',
						'83': 'MARK_CT_RECT',
						'74': 'MARK_PYS_ANGLE',
						'84': 'SHOW_TEXT_MARKER',
						'65': 'MARK_ARROWS',
						'CTRL+17': 'MARK_CT_POINT'
					},
					NORMAL: {
						'CTRL+90': 'CMD_MARK_REVOKE',
						'CTRL+68': 'CMD_MARK_CLEAR',
						'112': WINDOW_CONSTANT.DEFAULT,
						'113': WINDOW_CONSTANT.FULL,
						'114': WINDOW_CONSTANT.FQ,
						'115': WINDOW_CONSTANT.NC,
						'116': WINDOW_CONSTANT.GC,
						'117': WINDOW_CONSTANT.FC,
						'118': WINDOW_CONSTANT.ZG,
						'119': WINDOW_CONSTANT.GP,
						'120': WINDOW_CONSTANT.GUC,
						'57': 'PSEUDOCOLOR',
						'72': 'CMD_TOGGLE_INFO',
						'38': 'BROWSE|"PREV"',
						'40': 'BROWSE|"NEXT"',
						'37': 'ACTIVE_VIEWER|"PREV"',
						'39': 'ACTIVE_VIEWER|"NEXT"',
						'82': 'CMD_RESET',
						'80': 'PLAY'
					},
					CUSTOM: {
						'48': 'CUSTOM_WINDOW'
					}
				},
				/**
	    * 常驻处理
	    * @type {Array}
	    */
				RESIDENT: [Cateyes.InputCovert.getCovert('MARK_REFRESH_BASE')],
				resident: function resident(viewer) {
					var flag = false;
					if (viewer && this.RESIDENT) {
						for (var i = 0, f; f = this.RESIDENT[i++];) {
							flag = flag || viewer.executeCommond(f());
						}
					}
					return flag;
				},
				/**
	    * 全局事件
	    * @param  {[type]} ev){			var cmd           [description]
	    * @return {[type]}             [description]
	    */
				baseEvent: function baseEvent(ev) {
					if (!this.working) {
						return;
					}
					var viewer = Cateyes.ViewerManager.getCurrentViewer(),
					    touches = ev.originalEvent.touches;
					if (viewer) {
						var self = this;
						// setTimeout(function() {
						if (touches && touches.length == 2) {
							self.twoTouchesOperate(ev.type, touches[0], touches[1]);
						} else {
							var stop = Operate.resident(viewer);
							if (!stop) {
								var ci = Operate.cis[self.mouseKeyRel[ev.button] || 'LEFT'];
								if ('MAGNIFYING_GLASS' == ci) {
									debugger;
								}
								var cmd = ci && ci();
								cmd && viewer.executeCommond(cmd);
							}
						}
						// });
					}
				},
				initEvent: function initEvent() {
					var self = this,
					    $major = $('.cateyes-major'),
					    $document = $(document);
					$major.bind(Cateyes.EVENTS.MOUSE_MOVE, function (ev) {
						self.baseEvent(ev);
					});
					$major.bind(Cateyes.EVENTS.MOUSE_DOWN, function (ev) {
						self.baseEvent(ev);
					});
					$major.bind(Cateyes.EVENTS.MOUSE_UP, function (ev) {
						self.baseEvent(ev);
					});
					//滚轮操作
					$major.mousewheel(function (ev, delta) {
						var $tgt = $(ev.target),
						    $viewer;
						if ($tgt.hasClass('cateyes-viewer')) {
							$viewer = $tgt;
						} else {
							$viewer = $tgt.closest('.cateyes-viewer');
						}
						if ($viewer && $viewer.length) {
							var viewer = Cateyes.ViewerManager.getViewerById($viewer.data('cateyes-viewer-id'));
							if (viewer) {
								var cmd = Cateyes.InputCovert.getCovert('BROWSE', delta < 0 ? 'NEXT' : 'PREV')();
								cmd && viewer.executeCommond(cmd);
							}
						}
					});
					//快捷键事件
					var lastMode;
					$document.on('keydown', ':not(input,textarea)', function (ev) {
						if ($(ev.target).is('input,textarea')) {
							return;
						}
						var key = '',
						    normalOp = self.SHORTCUT_KEY.NORMAL,
						    bindOp = self.SHORTCUT_KEY.BIND,
						    customOp = self.SHORTCUT_KEY.CUSTOM,
						    cmd;
						if (ev.ctrlKey) {
							key += 'CTRL+';
						}
						key += ev.keyCode;
						if (key == 'CTRL+17' && self.cisName.LEFT != 'MARK_CT_POINT') {
							lastMode = self.cisName.LEFT;
						}
						if (cmd = normalOp[key]) {
							self.normalOperate(cmd);
							return false;
						} else if (cmd = bindOp[key]) {
							$('.dicom-op-mode[data-cmd="' + cmd + '"]').trigger('click');
							return false;
						} else if (cmd = customOp[key]) {
							self.customOperate(cmd);
							return false;
						}
					});
					$document.on('keyup', function (ev) {
						var key = ev.keyCode,
						    cmd;
						if (key == '17') {
							$('.dicom-op-mode[data-cmd="' + lastMode + '"]').trigger('click');
						}
					});
					//监听业务事件
					Cateyes.GlobalPubSub.subscribe('AFTER_VIEWER_STATUS_CHANGE', function () {
						ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.REFRESH_TOOLBAR_STATUS);
					});
					Cateyes.GlobalPubSub.subscribe('ON_VIEWER_ACTIVE', function () {
						ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.REFRESH_TOOLBAR_STATUS);
					});
				},
				/**
	    * 多触点操作
	    */
				trace: {},
				twoTouchesOperate: function twoTouchesOperate(evType, t0, t1) {
					var trace = this.trace,
					    viewer = Cateyes.ViewerManager.getCurrentViewer(),
					    state = viewer.positioner.getState(),
					    distance = Cateyes.MathUtils.getDistance(t0.pageX, t0.pageY, t1.pageX, t1.pageY);
					if (evType == "touchstart") {
						var CanvasMouse = viewer.positioner.getMouseXYofCanvas((t0.pageX + t1.pageX) / 2, (t0.pageY + t1.pageY) / 2);
						trace._zoomAmendX = CanvasMouse.width / 2 - CanvasMouse.x;
						trace._zoomAmendY = CanvasMouse.height / 2 - CanvasMouse.y;
						trace._zoomStartDistance = distance;
						trace._translateStartX = t0.pageX + t1.pageX >> 1;
						trace._translateStartY = t0.pageY + t1.pageY >> 1;
						if (CanvasMouse.x < 0 || CanvasMouse.x > CanvasMouse.width) {
							trace._zoomAmendX = 0;
						}
						if (CanvasMouse.y < 0 || CanvasMouse.y > CanvasMouse.height) {
							trace._zoomAmendY = 0;
						}
					}
					if (evType == "touchmove") {
						var changeScale = (distance - trace._zoomStartDistance) * 0.01;
						trace._zoomStartDistance = distance;

						var nowTranslateStartX = t0.pageX + t1.pageX >> 1,
						    nowTranslateStartY = t0.pageY + t1.pageY >> 1,
						    offsetX = nowTranslateStartX - trace._translateStartX,
						    offsetY = nowTranslateStartY - trace._translateStartY;
						trace._translateStartX = nowTranslateStartX;
						trace._translateStartY = nowTranslateStartY;
						//平移 and 缩放
						if (changeScale > 0 || state.scale > 0.2) {
							var cmd = Cateyes.ViewerCommondFactory.create('CMD_TRANSFORM', {
								_: {
									scale: changeScale,
									x: changeScale * trace._zoomAmendX + offsetX,
									y: changeScale * trace._zoomAmendY + offsetY
								}
							});
							viewer.executeCommond(cmd);
						}
					}
				}
			};
			Operate.init();
			return Operate;
		}();

		//菜单
		(function () {
			//1.顶部菜单
			(function () {
				var configs = [{
					name: '浏览 F',
					type: 'mode',
					icon: 'browse',
					cmd: 'BROWSE'
				}, {
					name: '平移 M',
					type: 'mode',
					icon: 'translate',
					cmd: 'TRANSLATE'
				}, {
					name: '窗宽窗位 W',
					type: 'mode',
					icon: 'window',
					cmd: 'CHANGE_WINDOW',
					active: true
				}, {
					name: '视图多窗',
					icon: 'viewergrid',
					className: 'multi-window'
				}, {
					name: '多图',
					icon: 'imagegrid',
					className: 'multi-viewer'
				},
				/* {
	   				name: '放大镜 F',
	   				type: 'mode',
	   				icon: 'magnifying_glass',
	   				cmd: 'MAGNIFYING_GLASS'
	   			},*/
				{
					name: '缩放',
					type: 'mode',
					icon: 'zoom',
					cmd: 'ZOOM'
				}, {
					name: '单点CT',
					type: 'mode',
					icon: 'pointct',
					cmd: 'MARK_CT_POINT'
				}, {
					name: '还原',
					type: 'normal',
					icon: 'reset',
					cmd: 'CMD_RESET'
				}, {
					name: '播放',
					type: 'normal',
					icon: 'play',
					cmd: 'PLAY'
				}, {
					name: '快照',
					type: 'normal',
					icon: 'snapshoot',
					cmd: 'SNAPSHOOT'
				}];

				var $headerTools = $('.header-toolbar-main'),
				    html = [];
				for (var i = 0, temp; temp = configs[i++];) {
					html.push('<li class="tool op-mode-' + temp.cmd + ' ' + (temp.className || '') + (temp.active ? ' active ' : '') + '" data-type="' + temp.type + '" data-cmd="' + temp.cmd + '" title="' + temp.name + '"><i class="nav-icon nav-icon-' + temp.icon + '"></i></li>');
				}
				$headerTools.html(html.join(''));
			})();

			//多窗
			(function () {
				var $trigger = $('.multi-window'),
				    $windows,
				    html = [];
				html.push('<div class="multi-window-grid">');
				for (var i = 0; i < 12; i++) {
					html.push('<div class="multi-window-grid-cell" data-row="' + Math.floor(i / 4 + 1) + '" data-col="' + Math.floor(i % 4 + 1) + '"></div>');
				}
				html.push('</div>');
				$windows = $(html.join(''));
				$trigger.append($windows);
				var $allCell = $('.multi-window-grid-cell', $windows);
				var timer = null;
				$trigger.on('click touchstart', function (ev) {
					var $tgt = $(ev.target);
					if ($tgt.hasClass('multi-window-grid-cell')) {
						var row = $tgt.data('row'),
						    col = $tgt.data('col');
						$windows.hide();
						ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.BIND_OPERATE, {
							type: 'global',
							cmd: 'VIEWER_GRID|{rows:' + row + ',cols:' + col + '}'
						});
					} else {
						clearTimeout(timer);
						$windows.show();
					}
				});
				$windows.on('mousemove', '.multi-window-grid-cell', function () {
					var $tgt = $(this),
					    row = $tgt.data('row'),
					    col = $tgt.data('col');
					clearTimeout(timer);
					$allCell.removeClass('hover');
					for (var i = 1; i <= row; i++) {
						for (var j = 1; j <= col; j++) {
							$allCell.eq((i - 1) * 4 + j - 1).addClass('hover');
						}
					}
				});
				$windows.on('mouseleave', function () {
					$allCell.removeClass('hover');
					clearTimeout(timer);
					timer = setTimeout(function () {
						$windows.hide();
					}, 500);
				});
			})();

			//多图
			(function () {
				var $trigger = $('.multi-viewer'),
				    $windows,
				    html = [];
				html.push('<div class="multi-window-grid">');
				for (var i = 0; i < 12; i++) {
					html.push('<div class="multi-window-grid-cell" data-row="' + Math.floor(i / 4 + 1) + '" data-col="' + Math.floor(i % 4 + 1) + '"></div>');
				}
				html.push('</div>');
				$windows = $(html.join(''));
				$trigger.append($windows);
				var $allCell = $('.multi-window-grid-cell', $windows);
				var timer = null;
				$trigger.on('click touchstart', function (ev) {
					var $tgt = $(ev.target);
					if ($tgt.hasClass('multi-window-grid-cell')) {
						var row = $tgt.data('row'),
						    col = $tgt.data('col');
						$windows.hide();
						ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.BIND_OPERATE, {
							type: 'global',
							cmd: 'VIEWER_MULTI|{rows:' + row + ',cols:' + col + '}'
						});
					} else {
						clearTimeout(timer);
						$windows.show();
					}
				});
				$windows.on('mousemove', '.multi-window-grid-cell', function () {
					var $tgt = $(this),
					    row = $tgt.data('row'),
					    col = $tgt.data('col');
					clearTimeout(timer);
					$allCell.removeClass('hover');
					for (var i = 1; i <= row; i++) {
						for (var j = 1; j <= col; j++) {
							$allCell.eq((i - 1) * 4 + j - 1).addClass('hover');
						}
					}
				});
				$windows.on('mouseleave', function () {
					$allCell.removeClass('hover');
					clearTimeout(timer);
					timer = setTimeout(function () {
						$windows.hide();
					}, 500);
				});
			})();

			//2.窗宽窗位
			(function () {
				var $windowWidth = $('.header-window-width-input'),
				    $windowCenter = $('.header-window-center-input'),
				    $windowTrigger = $('.header-window-trigger'),
				    oldValue = {
					lastWindowWidth: $windowWidth.val() || 0,
					lastWindowCenter: $windowCenter.val() || 0
				};
				$('.header-window-width-input,.header-window-center-input').on('input', function (ev) {
					var val = this.value;
					if (val != '-' && isNaN(+val)) {
						this.value = oldValue[$(this).hasClass('header-window-width-input') ? 'lastWindowWidth' : 'lastWindowCenter'];
					} else {
						oldValue[$(this).hasClass('header-window-width-input') ? 'lastWindowWidth' : 'lastWindowCenter'] = val;
					}
				});
				$windowTrigger.on('touchstart click', function () {
					ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.BIND_OPERATE, {
						type: 'normal',
						cmd: 'SET_WINDOW|{windowWidth:' + $windowWidth.val() + ',windowCenter:' + $windowCenter.val() + '}'
					});
				});
				$windowWidth.on('keydown', function (ev) {
					if (ev.keyCode == 13) {
						$windowTrigger.trigger('click');
					}
				});
				$windowCenter.on('keydown', function (ev) {
					if (ev.keyCode == 13) {
						$windowTrigger.trigger('click');
					}
				});
				Cateyes.GlobalPubSub.subscribe('ON_VIEWER_WINDOW_CHANGE', function () {
					var currentViewer = Cateyes.ViewerManager.getCurrentViewer();
					if (currentViewer) {
						var state = currentViewer.getTinter().state;
						if (state) {
							$windowWidth.val(oldValue.lastWindowWidth = state.windowWidth);
							$windowCenter.val(oldValue.lastWindowCenter = state.windowCenter);
						}
					}
				});
				//预设窗宽窗位
				var $windowSelector = $('.header-window-selector'),
				    windowSelectHtml = [],
				    windowSelectItems = [{
					name: 'F1 默认',
					type: 'normal',
					cmd: WINDOW_CONSTANT.DEFAULT
				}, {
					name: 'F2 全窗',
					type: 'normal',
					cmd: WINDOW_CONSTANT.FULL
				}, {
					name: 'F3 腹腔(350,50)',
					type: 'normal',
					cmd: WINDOW_CONSTANT.FQ
				}, {
					name: 'F4 脑窗(120,40)',
					type: 'normal',
					cmd: WINDOW_CONSTANT.NC
				}, {
					name: 'F5 肝窗(150,50)',
					type: 'normal',
					cmd: WINDOW_CONSTANT.GC
				}, {
					name: 'F6 肺窗(1500,-500)',
					type: 'normal',
					cmd: WINDOW_CONSTANT.FC
				}, {
					name: 'F7 纵膈(300,50)',
					type: 'normal',
					cmd: WINDOW_CONSTANT.ZG
				}, {
					name: 'F8 骨盆(400,40)',
					type: 'normal',
					cmd: WINDOW_CONSTANT.GP
				}, {
					name: 'F9 骨窗(1300,350)',
					type: 'normal',
					cmd: WINDOW_CONSTANT.GUC
				}];
				windowSelectHtml.push('<ul class="window-combobox sunset-combobox">');
				for (var i = 0, item; item = windowSelectItems[i++];) {
					windowSelectHtml.push('<li data-cmd="' + item.cmd + '">' + item.name + '</li>');
				}
				windowSelectHtml.push('</ul>');
				var $selector = $(windowSelectHtml.join(''));
				$windowSelector.append($selector);
				$windowSelector.on('click touchstart', function (ev) {
					var $tgt = $(ev.target),
					    cmd = $tgt.data('cmd');
					if (cmd) {
						ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.BIND_OPERATE, {
							type: 'normal',
							cmd: cmd
						});
					}
					$selector.toggle();
					return false;
				});
				ToolbarPubSub.on(ToolbarPubSub.EVENTS.DOCUMENT_CLICK, function () {
					$selector.hide();
				});
			})();

			//伪彩，反色，旋转，反转
			(function () {
				var configs = [{
					name: '反色',
					type: 'normal',
					icon: 'inverse',
					cmd: 'INVERSE'
				}, {
					name: '伪彩',
					type: 'normal',
					icon: 'pseudocolor',
					cmd: 'PSEUDOCOLOR'
				}],
				    html = [];
				for (var i = 0, temp; temp = configs[i++];) {
					html.push('<div class="mini-tool tool" data-type="' + temp.type + '" data-cmd="' + temp.cmd + '" style="margin-left: 8px;"><i class="nav-mini-icon nav-icon-' + temp.icon + '"></i></div>');
				}
				$('.header-window-selector').after($(html.join('')));
				var configs2 = [{
					name: '左转90度',
					type: 'normal',
					icon: "rotate_left",
					cmd: "ROTATE_LEFT"
				}, {
					name: '右转90度',
					type: 'normal',
					icon: 'rotate_right',
					cmd: 'ROTATE_RIGHT'
				}, {
					name: '水平翻转',
					type: 'normal',
					icon: 'horizontal_turn',
					cmd: 'HORIZONTAL_TURN'
				}, {
					name: '垂直翻转',
					type: 'normal',
					icon: 'vertical_turn',
					cmd: 'VERTICAL_TURN'
				}];
				html = ['<li>'];
				for (var i = 0, temp; temp = configs2[i++];) {
					html.push('<div class="mini-tool tool" data-type="' + temp.type + '" data-cmd="' + temp.cmd + '"><i class="nav-mini-icon nav-icon-' + temp.icon + '"></i></div> ');
					if (i == 2) {
						html.push('</li><li>');
					}
				}
				html.push('</li>');
				$('.header-rotate').append($(html.join('')));
			})();

			//各种标注
			(function () {
				var configs = [{
					name: '箭头',
					type: 'mode',
					icon: 'arrows',
					cmd: 'MARK_ARROWS'
				}, {
					name: '文字',
					type: 'mode',
					icon: 'text',
					cmd: 'SHOW_TEXT_MARKER'
				}, {
					line: true
				}, {
					name: '涂鸦',
					type: 'mode',
					icon: 'scrawl',
					cmd: "MARK_SCRAWL"
				}, {
					name: '直线',
					type: 'mode',
					icon: 'line',
					cmd: "MARK_PYS_LENGTH"
				}, {
					name: '角度',
					type: 'mode',
					icon: 'angle',
					cmd: 'MARK_PYS_ANGLE'
				}, {
					name: '矩形',
					type: 'mode',
					icon: 'rect',
					cmd: 'MARK_CT_RECT'
				}, {
					name: '椭圆',
					type: 'mode',
					icon: 'ellipse',
					cmd: 'MARK_CT_ELLIPSE'
				}, {
					line: true
				}, {
					name: '撤销（ctrl+z）',
					type: 'normal',
					icon: 'mark_revoke',
					cmd: 'CMD_MARK_REVOKE'
				}, {
					name: '全部清除',
					type: 'normal',
					icon: 'mark_clear',
					cmd: 'CMD_MARK_CLEAR'
				}];

				var html = [];
				for (var i = 0, temp; temp = configs[i++];) {
					if (temp.line) {
						html.push('<li class="line"></li>');
						continue;
					}
					html.push('<li class="mini-tool tool op-mode-' + temp.cmd + '" data-type="' + temp.type + '" data-cmd="' + temp.cmd + '" title="' + temp.name + '"><i class="nav-mini-icon nav-icon-' + temp.icon + '"></i></li>');
				}
				$('.left-side-toolbar-wrap').append($(html.join('')));
			})();

			//高级操作
			(function () {
				var $ext = $('.header-toolbar-ext');
				$ext.append($([
				//'<li class="tool op-mode-KEYIMAGE" data-type="normal" data-cmd="KEYIMAGE" title="标记关键帧"><i class="nav-icon nav-icon-keyimage"></i></li>',
				'<li class="tool" data-type="global" data-cmd="MPR_REBUILD" title="MPR重建"><i class="nav-icon nav-icon-mpr"></i></li>', '<li class="toolbar-setting" title="设置"><i class="nav-icon nav-icon-setting"></i></li>'].join('')));
				//设置
				var $settingTrigger = $('.toolbar-setting'),
				    html = [];
				var configs = [{
					name: '全屏',
					cmd: 'TOGGLE_FULLSCREEN',
					type: 'global'
				}, {
					name: '显示定位线',
					cmd: 'TOGGLE_POSITION_LINE',
					type: 'state',
					active: true
				}, {
					name: '四角信息',
					cmd: 'TOGGLE_INFO',
					type: 'state',
					active: true
				}];
				html.push('<ul class="toolbar-settion-wrapper sunset-combobox" style="display: none;position: absolute;top: 30px;' + ($(window).width() <= 1024 ? 'right: 0px;left: auto;' : '') + '">');
				for (var i = 0, temp; temp = configs[i++];) {
					html.push('<li class="tool op-state-' + temp.cmd + ' ' + (temp.active ? 'active' : '') + '" data-type="' + temp.type + '" data-cmd="' + temp.cmd + '"><i class="icon-ok"></i>' + temp.name + '</li>');
				}
				html.push('</ul>');
				var $setting = $(html.join('')),
				    timer = null;
				$settingTrigger.append($setting).on(Cateyes.EVENTS.CLICK, function (ev) {
					var $tgt = $(ev.target),
					    cmd = $tgt.data('cmd');
					clearTimeout(timer);
					$setting.toggle();
				});
				$setting.on('mouseleave', function () {
					clearTimeout(timer);
					timer = setTimeout(function () {
						$setting.hide();
					}, 500);
				});
				//全屏事件
				var $fullScreen = $('li.op-state-TOGGLE_FULLSCREEN');
				(function () {
					function refresh(isFull) {
						$fullScreen[isFull ? 'addClass' : 'removeClass']('active');
						Cateyes.GlobalPubSub.publish('AFTER_TOGGLE_FULLSCREEN', isFull);
					}
					var topDoc = window.top.document;
					topDoc.addEventListener("fullscreenchange", function () {
						refresh(topDoc.fullscreen);
					}, false);
					topDoc.addEventListener("mozfullscreenchange", function () {
						refresh(topDoc.mozFullScreen);
					}, false);
					topDoc.addEventListener("webkitfullscreenchange", function () {
						refresh(topDoc.webkitIsFullScreen);
					}, false);
					topDoc.addEventListener("msfullscreenchange", function () {
						refresh(topDoc.msFullscreenElement);
					}, false);
				})();
			})();

			//收起序列影像
			(function () {
				var $trigger = $('.left-side-trigger'),
				    $mainContainer = $('.main-container');
				$trigger.on('click touchstart', function () {
					$mainContainer.toggleClass('close');
				});
			})();
		})();

		//事件绑定
		(function () {
			//工具栏
			$('.header,.left-side-toolbar').on(Cateyes.EVENTS.CLICK, '.tool', function () {
				var $this = $(this);
				ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.BIND_OPERATE, {
					type: $this.data('type'),
					cmd: $this.data('cmd')
				});
			});
			$(document).on('click touchstart', function () {
				ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.DOCUMENT_CLICK);
			});
			//钩子事件
			ToolbarPubSub.on(ToolbarPubSub.EVENTS.SELECTED_MODE, function (ev, op) {
				$('.tool.active').removeClass('active');
				$('.op-mode-' + op).addClass('active');
			});
			ToolbarPubSub.on(ToolbarPubSub.EVENTS.CHANGED_STATE, function (ev, op) {
				$('.op-state-' + op).toggleClass('active');
			});
			ToolbarPubSub.on(ToolbarPubSub.EVENTS.REFRESH_TOOLBAR_STATUS, function (ev) {
				var viewer = Cateyes.ViewerManager.getCurrentViewer();
				//播放状态
				if (viewer) {
					$(".nav-icon-play").css({
						'background-position': viewer.player.isPlaying() ? '-391px center' : '-210px center'
					});
				} else {
					$(".nav-icon-play").css({
						'background-position': '-210px center'
					});
				}
			});
		})();

		//右键菜单
		(function () {
			var config = [{
				name: '还原',
				type: 'normal',
				cmd: 'CMD_RESET'
			}, {
				name: '撤销测量',
				type: 'normal',
				cmd: 'CMD_MARK_REVOKE'
			}, {
				name: '清除测量',
				type: 'normal',
				cmd: 'CMD_MARK_CLEAR'
			}, {
				name: '窗宽窗位',
				type: 'mode',
				cmd: 'CHANGE_WINDOW'
			}, {
				name: '单点CT',
				type: 'mode',
				cmd: 'MARK_CT_POINT'
			}, {
				name: '负片',
				type: 'normal',
				cmd: 'INVERSE'
			}, {
				name: '浏览',
				type: 'mode',
				cmd: 'BROWSE'
			}, {
				name: '平移',
				type: 'mode',
				cmd: 'TRANSLATE'
			}, {
				name: '缩放',
				type: 'mode',
				cmd: 'ZOOM'
			}, {
				name: '四角信息',
				type: 'normal',
				cmd: 'CMD_TOGGLE_INFO'
			}];
			var html = [],
			    $document = $(document);
			for (var i = 0, temp; temp = config[i++];) {
				html.push('<li data-type="' + temp.type + '" data-cmd="' + temp.cmd + '">' + temp.name + '</li>');
			}
			var $menu = $('<div class="sunset-content-menu"><ul class="sunset-combobox">' + html.join('') + '</ul></div>').appendTo($('body')).hide();
			$document["bind"]("contextmenu", function (ev) {
				if (Cateyes.Mouse.startX == ev.pageX && Cateyes.Mouse.startY == ev.pageY) {
					$menu.css({
						display: 'block',
						position: 'absolute',
						top: ev.pageY,
						left: ev.pageX
					}).show();
				}
				return false;
			});
			$menu.on('click', 'li', function () {
				var $this = $(this),
				    type = $this.data('type'),
				    cmd = $this.data('cmd');
				switch (type) {
					case "global":
						Operate.globalOperate(cmd);
						break;
					case "normal":
						Operate.normalOperate(cmd);
						break;
					case "mode":
						ToolbarPubSub.trigger(ToolbarPubSub.EVENTS.BIND_OPERATE, {
							type: 'mode',
							cmd: cmd
						});
						break;
					case "custom":
						Operate.customOperate(cmd);
				}
				$menu.hide();
			});
			$document.bind(Cateyes.EVENTS.MOUSE_DOWN, function (ev) {
				if ($(ev.target).closest('.sunset-content-menu').length == 0) {
					$menu.hide();
				}
			});
		})();

		//影像类型屏蔽功能
		function getQueryString(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var r = window.location.search.substr(1).match(reg);
			if (r != null) return unescape(r[2]);
			return null;
		}
		if (getQueryString('imageType') == 'EYE') {
			$(".op-mode-MARK_CT_RECT").hide();
			$(".op-mode-MARK_CT_ELLIPSE").hide();
			$(".header-window-selector").hide();
		}
	});

/***/ }),
/* 326 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Navigation = function () {
		function Navigation() {
			_classCallCheck(this, Navigation);

			this.initEvent();
		}

		/**
	  * 初始化事件
	  * @return {[type]} [description]
	  */


		_createClass(Navigation, [{
			key: "initEvent",
			value: function initEvent() {
				var $listWrap = $(".dicom-list-wrap"),
				    $list = this.$list = $(".left-side-studys"),
				    $trigger = $(".image-panel-trigger"),
				    self = this;
				$trigger.on('click', function () {
					$trigger.toggleClass('close');
					if ($listWrap.toggleClass('close').hasClass('close')) {
						self._translate($listWrap[0], -$list.width());
						$trigger.attr('title', "展开影像列表");
					} else {
						self._translate($listWrap[0], 0);
						$trigger.attr('title', "收起影像列表");
					}
				});
				//拖拽事件
				var $body = $('body'),
				    $dragThumbnail = $('<img class="drag-thumbnail" />').hide().appendTo($body),
				    dragging = false;

				function dragCallback(ev) {
					$dragThumbnail.css({
						display: 'block',
						left: ev.pageX - 65,
						top: ev.pageY - 65
					});
				}

				function dropCallback(ev) {
					var $tgt = $(ev.target);
					dragging = false;
					$dragThumbnail.hide();
					$body.unbind(Cateyes.EVENTS.MOUSE_MOVE, dragCallback);
					$body.unbind(Cateyes.EVENTS.MOUSE_UP, dropCallback);
					Cateyes.GlobalPubSub.publish('RESTORE_OPERATE');
					var $viewer;
					if ($tgt.hasClass('.cateyes-viewer-multi-wrap')) {
						$viewer = $tgt;
					}
					if ($viewer || ($viewer = $tgt.closest('.cateyes-viewer-multi-wrap')).length) {
						self.viewSeries($viewer.data('id'), $dragThumbnail.data('seriesuid'));
					}
				}
				$list.on(Cateyes.EVENTS.MOUSE_DOWN, '.series-thumbnail', function () {
					var $this = $(this);
					dragging = true;
					$dragThumbnail.attr('src', $this.attr('src')).data('seriesuid', $this.attr('data-seriesuid'));
					$body.on(Cateyes.EVENTS.MOUSE_MOVE, dragCallback);
					$body.on(Cateyes.EVENTS.MOUSE_UP, dropCallback);
					Cateyes.GlobalPubSub.publish('STOP_OPERATE');
				});
				$list.on('click', '.series-thumbnail', function () {
					self.viewSeries(Cateyes.ViewerManager.getCurrentMultiViewer().id, $(this).attr('data-seriesuid'));
				});
				//检查加载
				Cateyes.GlobalPubSub.subscribe('AFTER_LOAD_STUDY', function (study) {
					self.addStudy(study);
				});
				//dicom加载
				Cateyes.GlobalPubSub.subscribe('AFTER_DICOM_LOADED', function (params) {
					self.changeProgress(params);
				});
				//文字标注
				Cateyes.GlobalPubSub.subscribe('SHOW_TEXT_MARKER', function (params) {
					self.showTextMarker(params);
				});
			}
		}, {
			key: "_translate",
			value: function _translate(el, x) {
				var stl = el.style,
				    buff = [];
				buff.push("translate(");
				buff.push(x);
				buff.push("px,0px)");
				buff = buff.join("");
				// 兼容各浏览器
				stl.transform = buff;
				stl.oTransform = buff;
				stl.msTransform = buff;
				stl.mozTransform = buff;
				stl.webkitTransform = buff;
			}

			/**
	   * 加载检查
	   * @param {[type]} study [description]
	   */

		}, {
			key: "addStudy",
			value: function addStudy(study) {
				var html = [];
				html.push('<div class="left-side-study">');
				//html.push('<div>' + (study.studyInfo.name?(study.studyInfo.name.split(study.studyInfo.name.indexOf(' ') >= 0 ? ' ' : '')[0] + ' * *'):'') + '</div>');
				html.push('<div>* * *</div>');
				html.push('<div>' + new Date(study.studyInfo.date).format('yyyy-MM-dd') + '</div>');
				html.push('<ul>');
				for (var i = 0, s; s = study.serieses[i++];) {
					html.push('<li>');
					html.push('<span class="tag-device-' + (s.info.deviceType + '').toLowerCase() + '">' + s.info.deviceType + '</span>');
					html.push('<img class="series-thumbnail" src="' + (Cateyes.IMAGE_RESOUCE_PREFIX + s.frames[0].thumbnailUri) + '" data-seriesuid="' + s.info.seriesInstanceUID + '" alt="">');
					html.push('<div class="progress-wrap"><div class="progress progress-series-' + s.id + '"></div></div>');
					html.push('<p class="left-side-series-num">' + s.frames.length + '张</p>');
					html.push('</li>');
				}
				html.push('</ul></div>');
				if ((this.$scrollContainer = $('.mCSB_container', this.$list)).length) {
					this.$scrollContainer.append(html.join(''));
				} else {
					this.$list.append(html.join(''));
				}
				//滚动条
				this.$list.mCustomScrollbar();
			}

			/**
	   * 变更加载进度
	   * @param  {[type]} params [description]
	   * @return {[type]}        [description]
	   */

		}, {
			key: "changeProgress",
			value: function changeProgress(params) {
				$(".progress-series-" + params.series.id).css({
					width: params.loaded * 1.0 / params.total * 100 + '%'
				});
			}

			/**
	   * 查看影像
	   * @param  {[type]} viewerId  [description]
	   * @param  {[type]} seriesUid [description]
	   * @return {[type]}           [description]
	   */

		}, {
			key: "viewSeries",
			value: function viewSeries(viewerId, seriesUid) {
				Cateyes.ViewerManager.getMultiViewerById(viewerId).setSeries(Cateyes.DicomHolder.getSeriesByUid(seriesUid));
			}

			/**
	   * 显示文字标注器
	   * @param  {[type]} params [description]
	   * @return {[type]}        [description]
	   */

		}, {
			key: "showTextMarker",
			value: function showTextMarker(params) {
				var $textMarker = this._$textMarker;
				if (!$textMarker) {
					var html = ['<div class="text-marker-editor">', '<i class="icon-remove"></i>', '	<form onsubmit="return false;">', '		<textarea></textarea>', '		<button type="submit">标注</button>', '	</form>', '</div>'].join('');
					$textMarker = this._$textMarker = $(html).appendTo($('body'));
					$('form', $textMarker).on('submit', function () {
						var viewerId = $textMarker.data('viewerid'),
						    text = $textMarker._$text.val().trim();
						if (text != "") {
							var viewer = Cateyes.ViewerManager.getViewerById(viewerId);
							viewer.executeCommond(Cateyes.ViewerCommondFactory.create('CMD_MARK_CREATE', {
								type: "TEXT",
								params: {
									text: text,
									sx: $textMarker.data('cx'),
									sy: $textMarker.data('cy')
								}
							}));
							viewer.executeCommond(Cateyes.ViewerCommondFactory.create('CMD_MARK_CREATED'));
							$textMarker._$text.val("");
							$textMarker.hide();
						}
						return false;
					});
					$('i', $textMarker).on('click', function () {
						$textMarker.hide()._$text.val("");
					});
					$textMarker._$text = $('textarea', $textMarker);
				}
				$textMarker.css({
					left: params.mx,
					top: params.my
				}).data('cx', params.cx).data('cy', params.cy).data('viewerid', params.viewerId).show()._$text.focus();
			}
		}]);

		return Navigation;
	}();

	exports.default = Navigation;

/***/ }),
/* 327 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Initer = function () {
		function Initer() {
			_classCallCheck(this, Initer);

			this.TEST_STUDYIDS = 'd2f920b1e4eb48c59a0f8c15360b6727';

			this.initViewStudies();
			Cateyes.isPlat("PHONE") || this.initWebsocket();
		}

		// TEST_STUDYIDS = '3b00a6c3dba64b6a970a0030f601dfaf,57025f27083344baa3c2611badbe1887,d66b3da129e24c1f8cf1fb3698eb26e9,6265b20c90294a4ca99c53f882df4ce0,f355c24988bc460fa67073c85d508f1e,f710f11bb36c403999cbe806c0312f5f,fdf133fc172244dcb88b314151ee5a01';


		_createClass(Initer, [{
			key: "getQueryString",


			/**
	   * 获取URL参数
	   * @param  {[type]} name [description]
	   * @return {[type]}      [description]
	   */
			value: function getQueryString(name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
				var r = window.location.search.substr(1).match(reg);
				if (r != null) return unescape(r[2]);
				return null;
			}

			/**
	   * 初始化查看影像检查
	   * @return {[type]} [description]
	   */

		}, {
			key: "initViewStudies",
			value: function initViewStudies() {
				var studyIds = this.getQueryString('studyIds') || this.TEST_STUDYIDS,
				    keyDcmId = this.getQueryString('keyDcmId'),
				    which = this.getQueryString('which');
				if (studyIds) {
					var urls = studyIds.split(',').map(function (item) {
						return "/" + (which ? which : 'service') + "/fileRes/dcmJson?listId=" + item;
					});
					Cateyes.DicomService.getStudies(urls, null).then(function () {
						var studies = [].slice.call(arguments);
						if (studies && studies.length && studies[0]) {
							if (Cateyes.isPlat("PHONE")) {
								Cateyes.ViewerManager.init($('.cateyes-major-content'), '1*1');
								Cateyes.ViewerManager.setCurrentViewer(Cateyes.ViewerManager.getViewerByIndex(0));
								Cateyes.ViewerManager.getCurrentViewer(0).setSeries(studies[0].getSeriesByIndex(0));
							} else {
								var firstStudySeriesCount = studies[0].getSeriesCount();
								var viewer_grid = {
									'1': '1*1',
									'2': '1*2',
									'3': '1*3',
									'4': '2*2',
									'5': '2*3',
									'6': '2*3',
									'7': '3*3',
									'8': '3*3',
									'9': '3*3'
								};
								var viewerCount = Math.min(firstStudySeriesCount, 4);
								Cateyes.ViewerManager.init($('.cateyes-major-content'), viewer_grid[viewerCount]);
								for (var i = 0; i < viewerCount; i++) {
									Cateyes.ViewerManager.getMultiViewerByIndex(i).setSeries(studies[0].getSeriesByIndex(i));
								}
							}
						}
					});
				}
			}

			/**
	   * 初始化websocket连接
	   * @return {[type]} [description]
	   */

		}, {
			key: "initWebsocket",
			value: function initWebsocket() {
				var houseId = this.getQueryString('houseId');
				if (houseId) {
					document.title = '虚拟阅片室';
					Cateyes.SocketPubSub.subscribe(Cateyes.SOCKET_EVENTS.SK_CONNECT_OPENED, function () {
						Cateyes.SocketPubSub.publish(Cateyes.SOCKET_EVENTS.SK_INIT_CHAT);
						Cateyes.SocketPubSub.publish(Cateyes.SOCKET_EVENTS.SK_CLONE);
					});
					Cateyes.SocketPubSub.publish(Cateyes.SOCKET_EVENTS.SK_OPEN_CONNECT);
				}
			}
		}]);

		return Initer;
	}();

	exports.default = Initer;

/***/ })
/******/ ]);