#!/usr/bin/env node
"use strict";
function require( path ){ return $node[ path ] };

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;

;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
var $node = $node || {} ; $node[ "/bog/ainews/favicon.svg" ] = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByb2xlPSJpbWciIGFyaWEtbGFiZWw9Ik5ld3NwYXBlciBpY29uIj4KICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMCwxMUg0VjhIMjBNMjAsMTVIMTNWMTNIMjBNMjAsMTlIMTNWMTdIMjBNMTEsMTlINFYxM0gxMU0yMC4zMyw0LjY3TDE4LjY3LDNMMTcsNC42N0wxNS4zMywzTDEzLjY3LDQuNjdMMTIsM0wxMC4zMyw0LjY3TDguNjcsM0w3LDQuNjdMNS4zMywzTDMuNjcsNC42N0wyLDNWMTlBMiwyIDAgMCwwIDQsMjFIMjBBMiwyIDAgMCwwIDIyLDE5VjNMMjAuMzMsNC42N1oiLz4KPC9zdmc+Cg=="

;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom = $mol_dom_context;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_style_attach(id, text) {
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        const elid = `$mol_style_attach:${id}`;
        let el = doc.getElementById(elid);
        if (!el) {
            el = doc.createElement('style');
            el.id = elid;
            doc.head.appendChild(el);
        }
        if (el.innerHTML != text)
            el.innerHTML = text;
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_promise extends Promise {
        done;
        fail;
        constructor(executor) {
            let done;
            let fail;
            super((d, f) => {
                done = d;
                fail = f;
                executor?.(d, f);
            });
            this.done = done;
            this.fail = fail;
        }
    }
    $.$mol_promise = $mol_promise;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_promise_blocker extends $mol_promise {
        static [Symbol.toStringTag] = '$mol_promise_blocker';
    }
    $.$mol_promise_blocker = $mol_promise_blocker;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return `${value}%`; }
        static px(value) { return `${value}px`; }
        static mm(value) { return `${value}mm`; }
        static cm(value) { return `${value}cm`; }
        static Q(value) { return `${value}Q`; }
        static in(value) { return `${value}in`; }
        static pc(value) { return `${value}pc`; }
        static pt(value) { return `${value}pt`; }
        static cap(value) { return `${value}cap`; }
        static ch(value) { return `${value}ch`; }
        static em(value) { return `${value}em`; }
        static rem(value) { return `${value}rem`; }
        static ex(value) { return `${value}ex`; }
        static ic(value) { return `${value}ic`; }
        static lh(value) { return `${value}lh`; }
        static rlh(value) { return `${value}rlh`; }
        static vh(value) { return `${value}vh`; }
        static vw(value) { return `${value}vw`; }
        static vi(value) { return `${value}vi`; }
        static vb(value) { return `${value}vb`; }
        static vmin(value) { return `${value}vmin`; }
        static vmax(value) { return `${value}vmax`; }
        static deg(value) { return `${value}deg`; }
        static rad(value) { return `${value}rad`; }
        static grad(value) { return `${value}grad`; }
        static turn(value) { return `${value}turn`; }
        static s(value) { return `${value}s`; }
        static ms(value) { return `${value}ms`; }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static linear_gradient(value) {
            return new $mol_style_func('linear-gradient', value);
        }
        static radial_gradient(value) {
            return new $mol_style_func('radial-gradient', value);
        }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name, defaultValue) {
            return new $mol_style_func('var', defaultValue ? [name, defaultValue] : name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
        static linear(...breakpoints) {
            return new $mol_style_func("linear", breakpoints.map((e) => Array.isArray(e)
                ? String(e[0]) +
                    " " +
                    (typeof e[1] === "number" ? e[1] + "%" : e[1].toString())
                : String(e)));
        }
        static cubic_bezier(x1, y1, x2, y2) {
            return new $mol_style_func('cubic-bezier', [x1, y1, x2, y2]);
        }
        static steps(value, step_position) {
            return new $mol_style_func('steps', [value, step_position]);
        }
        static blur(value) {
            return new $mol_style_func('blur', value ?? "");
        }
        static brightness(value) {
            return new $mol_style_func('brightness', value ?? "");
        }
        static contrast(value) {
            return new $mol_style_func('contrast', value ?? "");
        }
        static drop_shadow(color, x_offset, y_offset, blur_radius) {
            return new $mol_style_func("drop-shadow", blur_radius
                ? [color, x_offset, y_offset, blur_radius]
                : [color, x_offset, y_offset]);
        }
        static grayscale(value) {
            return new $mol_style_func('grayscale', value ?? "");
        }
        static hue_rotate(value) {
            return new $mol_style_func('hue-rotate', value ?? "");
        }
        static invert(value) {
            return new $mol_style_func('invert', value ?? "");
        }
        static opacity(value) {
            return new $mol_style_func('opacity', value ?? "");
        }
        static sepia(value) {
            return new $mol_style_func('sepia', value ?? "");
        }
        static saturate(value) {
            return new $mol_style_func('saturate', value ?? "");
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_style_prop(prefix, keys) {
        const record = keys.reduce((rec, key) => {
            rec[key] = $mol_style_func.vary(`--${prefix}_${key}`);
            return rec;
        }, {});
        return record;
    }
    $.$mol_style_prop = $mol_style_prop;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object' && typeof having !== 'function')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        named.add(func);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [Symbol.toStringTag];
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || this.constructor.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            return this[Symbol.toStringTag] || this.$.$mol_func_name(this);
        }
        static toJSON() {
            return this.toString();
        }
        destructor() { }
        static destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '<>';
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        constructor(id = `$mol_wire_pub:${$mol_guid()}`) {
            super();
            this[Symbol.toStringTag] = id;
        }
        [Symbol.toStringTag];
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.length = end;
            if (end === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        get incompleted() {
            return false;
        }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant, this.data[i + 1]);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_wire_auto_sub = null;
    function $mol_wire_auto(next = $.$mol_wire_auto_sub) {
        return $.$mol_wire_auto_sub = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] ||= [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    function $mol_dev_format_button(label, click) {
        return $mol_dev_format_auto({
            [$.$mol_dev_format_head]() {
                return $.$mol_dev_format_span({ color: 'cornflowerblue' }, label);
            },
            [$.$mol_dev_format_body]() {
                Promise.resolve().then(click);
                return $.$mol_dev_format_span({});
            }
        });
    }
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                try {
                    return val[$.$mol_dev_format_head]();
                }
                catch (error) {
                    return $.$mol_dev_format_accent($mol_dev_format_native(val), '💨', $mol_dev_format_native(error), '');
                }
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            if (val instanceof Error) {
                return $.$mol_dev_format_span({}, $mol_dev_format_native(val), ' ', $mol_dev_format_button('throw', () => $mol_fail_hidden(val)));
            }
            if (val instanceof Promise) {
                return $.$mol_dev_format_shade($mol_dev_format_native(val), ' ', val[Symbol.toStringTag] ?? '');
            }
            if (Symbol.toStringTag in val) {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: (val, config = false) => {
            if (config)
                return false;
            if (!val)
                return false;
            if (val[$.$mol_dev_format_body])
                return true;
            return false;
        },
        body: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_body in val) {
                try {
                    return val[$.$mol_dev_format_body]();
                }
                catch (error) {
                    return $.$mol_dev_format_accent($mol_dev_format_native(val), '💨', $mol_dev_format_native(error), '');
                }
            }
            return null;
        },
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    $.$mol_dev_format_span = $mol_dev_format_element.bind(null, 'span');
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $.$mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $.$mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $.$mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $.$mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
    class Stack extends Array {
        toString() {
            return this.join('\n');
        }
    }
    class Call extends Object {
        type;
        function;
        method;
        eval;
        source;
        offset;
        pos;
        object;
        flags;
        [Symbol.toStringTag];
        constructor(call) {
            super();
            this.type = call.getTypeName() ?? '';
            this.function = call.getFunctionName() ?? '';
            this.method = call.getMethodName() ?? '';
            if (this.method === this.function)
                this.method = '';
            this.pos = [call.getEnclosingLineNumber() ?? 0, call.getEnclosingColumnNumber() ?? 0];
            this.eval = call.getEvalOrigin() ?? '';
            this.source = call.getScriptNameOrSourceURL() ?? '';
            this.object = call.getThis();
            this.offset = call.getPosition();
            const flags = [];
            if (call.isAsync())
                flags.push('async');
            if (call.isConstructor())
                flags.push('constructor');
            if (call.isEval())
                flags.push('eval');
            if (call.isNative())
                flags.push('native');
            if (call.isPromiseAll())
                flags.push('PromiseAll');
            if (call.isToplevel())
                flags.push('top');
            this.flags = flags;
            const type = this.type ? this.type + '.' : '';
            const func = this.function || '<anon>';
            const method = this.method ? ' [' + this.method + '] ' : '';
            this[Symbol.toStringTag] = `${type}${func}${method}`;
        }
        [Symbol.toPrimitive]() {
            return this.toString();
        }
        toString() {
            const object = this.object || '';
            const label = this[Symbol.toStringTag];
            const source = `${this.source}:${this.pos.join(':')} #${this.offset}`;
            return `\tat ${object}${label} (${source})`;
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_div({}, $mol_dev_format_native(this), $.$mol_dev_format_shade(' '), ...this.object ? [
                $mol_dev_format_native(this.object),
            ] : [], ...this.method ? [$.$mol_dev_format_shade(' ', ' [', this.method, ']')] : [], $.$mol_dev_format_shade(' ', this.flags.join(', ')));
        }
    }
    Error.prepareStackTrace ??= (error, stack) => new Stack(...stack.map(call => new Call(call)));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get temp() {
            return false;
        }
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                if (this.data[i])
                    res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
            }
            this.data.length = this.sub_from;
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.stale;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let end = this.data.length;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                end -= 2;
                if (this.sub_from <= end)
                    this.peer_move(end, cursor);
            }
            this.data.length = end;
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                if (pub?.incompleted)
                    return;
            }
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale, pos = -1) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        static promise = null;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            if (!$mol_after_tick.promise)
                $mol_after_tick.promise = Promise.resolve().then(() => {
                    $mol_after_tick.promise = null;
                });
            $mol_after_tick.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_promise_like(val) {
        try {
            return val && typeof val === 'object' && 'then' in val && typeof val.then === 'function';
        }
        catch {
            return false;
        }
    }
    $.$mol_promise_like = $mol_promise_like;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const wrappers = new WeakMap();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_tick(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if ($mol_promise_like(this.cache))
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        get incompleted() {
            return $mol_promise_like(this.cache);
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super(id);
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
            return this;
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_owning_check(this, this.cache)
                ? $mol_dev_format_shade(cursor)
                : $mol_dev_format_shade(this[Symbol.toStringTag], cursor), $mol_dev_format_auto(this.cache));
        }
        [$mol_dev_format_body]() { return null; }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if ($mol_promise_like(result)) {
                    if (wrappers.has(result)) {
                        result = wrappers.get(result).then(a => a);
                    }
                    else {
                        const put = (res) => {
                            if (this.cache === result)
                                this.put(res);
                            return res;
                        };
                        wrappers.set(result, result = Object.assign(result.then(put, put), { destructor: result.destructor || (() => { }) }));
                        wrappers.set(result, result);
                        const error = new Error(`Promise in ${this}`);
                        Object.defineProperty(result, 'stack', { get: () => error.stack });
                    }
                }
            }
            catch (error) {
                if (error instanceof Error || $mol_promise_like(error)) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if ($mol_promise_like(result)) {
                    if (wrappers.has(result)) {
                        result = wrappers.get(result);
                    }
                    else {
                        const put = (v) => {
                            if (this.cache === result)
                                this.absorb();
                            return v;
                        };
                        wrappers.set(result, result = Object.assign(result.then(put, put), { destructor: result.destructor || (() => { }) }));
                        const error = new Error(`Promise in ${this}`);
                        Object.defineProperty(result, 'stack', { get: () => error.stack });
                    }
                }
            }
            if (!$mol_promise_like(result)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
            return this;
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if ($mol_promise_like(this.cache)) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async_raw() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                await Promise.race([this.cache, this.step()]);
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
        async() {
            const promise = this.async_raw();
            if (!promise.destructor)
                promise.destructor = () => this.destructor();
            return promise;
        }
        step() {
            return new Promise(done => {
                const sub = new $mol_wire_pub_sub;
                const prev = sub.track_on();
                sub.track_next(this);
                sub.track_off(prev);
                sub.absorb = () => {
                    done(null);
                    setTimeout(() => sub.destructor());
                };
            });
        }
        destructor() {
            super.destructor();
            $mol_wire_fiber.planning.delete(this);
            if (!$mol_owning_check(this, this.cache))
                return;
            try {
                this.cache.destructor();
            }
            catch (result) {
                if ($mol_promise_like(result)) {
                    const error = new Error(`Promise in ${this}.destructor()`);
                    Object.defineProperty(result, 'stack', { get: () => error.stack });
                }
                $mol_fail_hidden(result);
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    const TypedArray = Object.getPrototypeOf(Uint8Array);
    function $mol_key(value) {
        if (typeof value === 'bigint')
            return value.toString() + 'n';
        if (typeof value === 'symbol')
            return value.description;
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (typeof value === 'bigint')
                return value.toString() + 'n';
            if (typeof value === 'symbol')
                return value.description;
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            if (value instanceof TypedArray)
                return [...value];
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_object2 {
        task;
        static _promise = null;
        static get promise() {
            if (this._promise)
                return this._promise;
            return this._promise = new Promise(done => {
                const complete = () => {
                    this._promise = null;
                    done();
                };
                if (typeof requestAnimationFrame === 'function') {
                    requestAnimationFrame(complete);
                }
                else {
                    setTimeout(complete, 16);
                }
            });
        }
        cancelled = false;
        promise;
        constructor(task) {
            super();
            this.task = task;
            this.promise = $mol_after_frame.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right.source && left.flags === right.flags;
        if (left instanceof Error)
            return left.message === right.message && $mol_compare_deep(left.stack, right.stack);
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap();
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        left_cache.set(right, true);
        let result;
        try {
            if (!left_proto)
                result = compare_pojo(left, right);
            else if (!Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.iterator in left)
                result = compare_iterator(left[Symbol.iterator](), right[Symbol.iterator]());
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        if (left instanceof DataView)
            return compare_buffer(new Uint8Array(left.buffer, left.byteOffset, left.byteLength), new Uint8Array(right.buffer, right.byteOffset, right.byteLength));
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (!compare_array(left_keys, right_keys))
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        const left_syms = Object.getOwnPropertySymbols(left);
        const right_syms = Object.getOwnPropertySymbols(right);
        if (!compare_array(left_syms, right_syms))
            return false;
        for (let key of left_syms) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this.$;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_log3_web_make(level, color) {
        return function $mol_log3_logger(event) {
            const pending = this.$mol_log3_stack.pop();
            if (pending)
                pending();
            let tpl = '%c';
            const chunks = Object.entries(event);
            for (let i = 0; i < chunks.length; ++i) {
                tpl += (typeof chunks[i][1] === 'string') ? '%s: %s\n' : '%s: %o\n';
            }
            const style = `color:${color};font-weight:bolder`;
            this.console[level](tpl.trim(), style, ...[].concat(...chunks));
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_web_make = $mol_log3_web_make;
    $.$mol_log3_come = $mol_log3_web_make('info', 'royalblue');
    $.$mol_log3_done = $mol_log3_web_make('info', 'forestgreen');
    $.$mol_log3_fail = $mol_log3_web_make('error', 'orangered');
    $.$mol_log3_warn = $mol_log3_web_make('warn', 'goldenrod');
    $.$mol_log3_rise = $mol_log3_web_make('log', 'magenta');
    $.$mol_log3_area = $mol_log3_web_make('group', 'cyan');
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                let cause = '';
                reuse: if (existen) {
                    if (!existen.temp)
                        break reuse;
                    if (existen.task !== task) {
                        cause = 'task';
                        break reuse;
                    }
                    if (existen.host !== host) {
                        cause = 'host';
                        break reuse;
                    }
                    if (!$mol_compare_deep(existen.args, args)) {
                        cause = 'args';
                        break reuse;
                    }
                    return existen;
                }
                const key = (host?.[Symbol.toStringTag] ?? host) + ('.' + task.name + '<#>');
                const next = new $mol_wire_task(key, task, host, args);
                if (existen?.temp) {
                    $$.$mol_log3_warn({
                        place: '$mol_wire_task',
                        message: `Different ${cause} on restart`,
                        sub,
                        prev: existen,
                        next,
                        hint: 'Maybe required additional memoization',
                    });
                }
                return next;
            };
        }
        get temp() {
            return true;
        }
        complete() {
            if ($mol_promise_like(this.cache))
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if ($mol_promise_like(next)) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
        destructor() {
            super.destructor();
            this.cursor = $mol_wire_cursor.final;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const catched = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if ($mol_promise_like(error))
            $mol_fail_hidden(error);
        if (catched.get(error))
            return false;
        catched.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let error;
    let result;
    let handler;
    function $mol_try(handler2) {
        handler = handler2;
        error = undefined;
        result = undefined;
        window.dispatchEvent(new Event('$mol_try'));
        const error2 = error;
        const result2 = result;
        error = undefined;
        result = undefined;
        return error2 || result2;
    }
    $.$mol_try = $mol_try;
    self.addEventListener('$mol_try', (event) => {
        result = handler();
    }, true);
    self.addEventListener('error', (event) => {
        error = event.error;
    }, true);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if ($mol_promise_like(error))
            return false;
        if (!$mol_fail_catch(error))
            return false;
        $mol_try(() => { $mol_fail_hidden(error); });
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = prefix + ('.' + task.name + '<>');
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key_str = $mol_key(key);
            if (dict) {
                const existen = dict.get(key_str);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const id = prefix + ('.' + task.name) + ('<' + key_str.replace(/^"|"$/g, "'") + '>');
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(key_str, fiber);
            return fiber;
        }
        static watching = new Set();
        static watcher = null;
        static watch() {
            $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            if (!$mol_wire_atom.watcher) {
                $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            }
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            for (let cursor = this.pub_from; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                if (pub && pub instanceof $mol_wire_task) {
                    pub.destructor();
                }
            }
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto()?.temp) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
        }
        destructor() {
            super.destructor();
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete($mol_key(this.args[0]));
            }
        }
        put(next) {
            const prev = this.cache;
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
            this.cursor = $mol_wire_cursor.fresh;
            if ($mol_promise_like(next))
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static href(next) {
            if (next === undefined) {
                next = $mol_dom.location.href;
            }
            else if (!/^about:srcdoc/.test(next)) {
                new $mol_after_frame(() => {
                    const next = this.href();
                    const prev = $mol_dom.location.href;
                    if (next === prev)
                        return;
                    const history = $mol_dom.history;
                    history.replaceState(history.state, $mol_dom.document.title, next);
                });
            }
            if ($mol_dom.parent && ($mol_dom.parent !== $mol_dom.self)) {
                $mol_dom.parent.postMessage(['hashchange', next], '*');
            }
            return next;
        }
        static href_normal() {
            return this.link({});
        }
        static href_absolute() {
            return new URL(this.href(), $mol_dom.location.href).toString();
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#!?/)[1] || '';
            var chunks = href.split(this.separator);
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static dict_cut(except) {
            const dict = this.dict();
            const cut = {};
            for (const key in dict) {
                if (except.indexOf(key) >= 0)
                    break;
                cut[key] = dict[key];
            }
            return cut;
        }
        static value(key, next) {
            const nextDict = (next === void 0) ? void 0 : { ...this.dict(), [key]: next };
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link({
                ...this.dict_cut(Object.keys(next)),
                ...next,
            });
        }
        static prolog = '!';
        static separator = '/';
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                const val = next[key];
                chunks.push([key].concat(val ? [val] : []).map(this.encode).join('='));
            }
            return new URL('#' + this.prolog + chunks.join(this.separator), this.href_absolute()).toString();
        }
        static commit() {
            $mol_dom.history.pushState($mol_dom.history.state, $mol_dom.document.title, this.href());
        }
        static go(next) {
            $mol_dom.location.href = this.link(next);
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_absolute", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "make_link", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "commit", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
    function $mol_state_arg_change() {
        $mol_state_arg.href($mol_dom.location.href);
    }
    self.addEventListener('hashchange', $mol_state_arg_change);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_media extends $mol_object2 {
        static match(query, next) {
            if (next !== undefined)
                return next;
            const res = this.$.$mol_dom_context.matchMedia?.(query) ?? {};
            res.onchange = () => this.match(query, res.matches);
            return res.matches;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_media, "match", null);
    $.$mol_media = $mol_media;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        let current = $mol_wire_auto();
        if (current.temp)
            current = current.host;
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem_persist = $mol_wire_solid;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, def) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            const res = task();
            if (res === undefined)
                return def;
            return res;
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const factories = new WeakMap();
    function factory(val) {
        let make = factories.get(val);
        if (make)
            return make;
        make = $mol_func_name_from((...args) => new val(...args), val);
        factories.set(val, make);
        return make;
    }
    const getters = new WeakMap();
    function get_prop(host, field) {
        let props = getters.get(host);
        let get_val = props?.[field];
        if (get_val)
            return get_val;
        get_val = (next) => {
            if (next !== undefined)
                host[field] = next;
            return host[field];
        };
        Object.defineProperty(get_val, 'name', { value: field });
        if (!props) {
            props = {};
            getters.set(host, props);
        }
        props[field] = get_val;
        return get_val;
    }
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                let val = obj[field];
                const temp = $mol_wire_task.getter(typeof val === 'function' ? val : get_prop(obj, field));
                if (typeof val !== 'function')
                    return temp(obj, []).sync();
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            set(obj, field, next) {
                const temp = $mol_wire_task.getter(get_prop(obj, field));
                temp(obj, [next]).sync();
                return true;
            },
            construct(obj, args) {
                const temp = $mol_wire_task.getter(factory(obj));
                return temp(obj, args).sync();
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                return temp(self, args).sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_storage extends $mol_object2 {
        static native() {
            return this.$.$mol_dom_context.navigator.storage ?? {
                persisted: async () => false,
                persist: async () => false,
                estimate: async () => ({}),
                getDirectory: async () => null,
            };
        }
        static persisted(next, cache) {
            $mol_mem_persist();
            if (cache)
                return Boolean(next);
            const native = this.native();
            if (next && !$mol_mem_cached(() => this.persisted())) {
                native.persist().then(actual => {
                    setTimeout(() => this.persisted(actual, 'cache'), 5000);
                    if (actual)
                        this.$.$mol_log3_done({ place: `$mol_storage`, message: `Persist: Yes` });
                    else
                        this.$.$mol_log3_fail({ place: `$mol_storage`, message: `Persist: No` });
                });
            }
            return next ?? $mol_wire_sync(native).persisted();
        }
        static estimate() {
            return $mol_wire_sync(this.native() ?? {}).estimate();
        }
        static dir() {
            return $mol_wire_sync(this.native()).getDirectory();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_storage, "native", null);
    __decorate([
        $mol_mem
    ], $mol_storage, "persisted", null);
    $.$mol_storage = $mol_storage;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null) {
                this.native().removeItem(key);
            }
            else {
                this.native().setItem(key, JSON.stringify(next));
                this.$.$mol_storage.persisted(true);
            }
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => $.$mol_state_local.changes(event));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function parse(theme) {
        if (theme === 'true')
            return true;
        if (theme === 'false')
            return false;
        return null;
    }
    function $mol_lights(next) {
        const arg = parse(this.$mol_state_arg.value('mol_lights'));
        const base = this.$mol_media.match('(prefers-color-scheme: light)');
        if (next === undefined) {
            return arg ?? this.$mol_state_local.value('$mol_lights') ?? base;
        }
        else {
            if (arg === null) {
                this.$mol_state_local.value('$mol_lights', next === base ? null : next);
            }
            else {
                this.$mol_state_arg.value('mol_lights', String(next));
            }
            return next;
        }
    }
    $.$mol_lights = $mol_lights;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_theme = $mol_style_prop('mol_theme', [
        'back',
        'hover',
        'card',
        'current',
        'special',
        'text',
        'control',
        'shade',
        'line',
        'focus',
        'field',
        'image',
        'spirit',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 240deg;\n\t--mol_theme_hue_spread: 90deg;\n\tcolor-scheme: dark light;\n}\n\n:where([mol_theme]) {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n\tbackground-color: var(--mol_theme_back);\n}\n\t\n:root, [mol_theme=\"$mol_theme_dark\"], :where([mol_theme=\"$mol_theme_dark\"]) [mol_theme]  {\n\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n\t--mol_theme_spirit: hsl( 0deg, 0%, 0%, .75 );\n\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 20%, 10% );\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 50%, 20%, .25 );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, 8%, .25 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, 80% );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 60%, 1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .25 );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, 65% );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 60%, 65% );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 60%, 65% );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 60%, 65% );\n\n} @supports( color: oklch( 0% 0 0deg ) ) {\n:root, [mol_theme=\"$mol_theme_dark\"], :where([mol_theme=\"$mol_theme_dark\"]) [mol_theme]  {\n\t\n\t--mol_theme_back: oklch( 20% .03 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 30% .05 var(--mol_theme_hue) / .25 );\n\t--mol_theme_field: oklch( 15% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_hover: oklch( 70% 0 var(--mol_theme_hue) / .1 );\n\t\n\t--mol_theme_text: oklch( 80% 0 var(--mol_theme_hue) );\n\t--mol_theme_shade: oklch( 60% 0 var(--mol_theme_hue) );\n\t--mol_theme_line: oklch( 60% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_focus: oklch( 80% .2 calc( var(--mol_theme_hue) + 180deg ) );\n\t\n\t--mol_theme_control: oklch( 70% .1 var(--mol_theme_hue) );\n\t--mol_theme_current: oklch( 70% .2 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_special: oklch( 70% .2 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\n} }\n\n[mol_theme=\"$mol_theme_light\"], :where([mol_theme=\"$mol_theme_light\"]) [mol_theme] {\n\t\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n\t--mol_theme_spirit: hsl( 0deg, 0%, 100%, .75 );\n\t\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 20%, 92% );\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 50%, 100%, .5 );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, 100%, .75 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, 0% );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 40%, 1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .25 );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, 40% );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 80%, 30% );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 80%, 30% );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 80%, 30% );\n\n} @supports( color: oklch( 0% 0 0deg ) ) {\n[mol_theme=\"$mol_theme_light\"], :where([mol_theme=\"$mol_theme_light\"]) [mol_theme] {\n\t--mol_theme_back: oklch( 92% .01 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 99% .01 var(--mol_theme_hue) / .5 );\n\t--mol_theme_field: oklch( 100% 0 var(--mol_theme_hue) / .5 );\n\t--mol_theme_hover: oklch( 50% 0 var(--mol_theme_hue) / .1 );\n\t\n\t--mol_theme_text: oklch( 20% 0 var(--mol_theme_hue) );\n\t--mol_theme_shade: oklch( 60% 0 var(--mol_theme_hue) );\n\t--mol_theme_line: oklch( 50% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_focus: oklch( 60% .2 calc( var(--mol_theme_hue) + 180deg ) );\n\t\n\t--mol_theme_control: oklch( 40% .15 var(--mol_theme_hue) );\n\t--mol_theme_current: oklch( 50% .2 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_special: oklch( 50% .2 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\n} }\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: oklch( 25% .075 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 35% .1 var(--mol_theme_hue) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: oklch( 85% .075 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 98% .03 var(--mol_theme_hue) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: oklch( 25% .05 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 35% .1 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: oklch( 85% .05 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: oklch( 25% .05 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 35% .1 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: oklch( 85% .05 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: oklch( 35% .1 calc( var(--mol_theme_hue) + 180deg ) );\n\t--mol_theme_card: oklch( 45% .15 calc( var(--mol_theme_hue) + 180deg ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: oklch( 83% .1 calc( var(--mol_theme_hue) + 180deg ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) + 180deg ) / .25 );\n}\n\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach('$mol_theme_lights', `:root { --mol_theme_back: oklch( ${$$.$mol_lights() ? 92 : 20}% .01 var(--mol_theme_hue) ) }`);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_gap = $mol_style_prop('mol_gap', [
        'block',
        'text',
        'round',
        'space',
        'blur',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_crumbs = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElementNS: (space, name) => $mol_dom_context.document.createElementNS(space, name),
        createDocumentFragment: () => $mol_dom_context.document.createDocumentFragment(),
    };
    $.$mol_jsx_frag = '';
    function $mol_jsx(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        const guid = id ? $.$mol_jsx_prefix ? $.$mol_jsx_prefix + '/' + id : id : $.$mol_jsx_prefix;
        const crumbs_self = id ? $.$mol_jsx_crumbs.replace(/(\S+)/g, `$1_${id.replace(/\/.*/i, '')}`) : $.$mol_jsx_crumbs;
        if (Elem && $.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(guid)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        let node = guid ? $.$mol_jsx_document.getElementById(guid) : null;
        if ($.$mol_jsx_prefix) {
            const prefix_ext = $.$mol_jsx_prefix;
            const booked_ext = $.$mol_jsx_booked;
            const crumbs_ext = $.$mol_jsx_crumbs;
            for (const field in props) {
                const func = props[field];
                if (typeof func !== 'function')
                    continue;
                const wrapper = function (...args) {
                    const prefix = $.$mol_jsx_prefix;
                    const booked = $.$mol_jsx_booked;
                    const crumbs = $.$mol_jsx_crumbs;
                    try {
                        $.$mol_jsx_prefix = prefix_ext;
                        $.$mol_jsx_booked = booked_ext;
                        $.$mol_jsx_crumbs = crumbs_ext;
                        return func.call(this, ...args);
                    }
                    finally {
                        $.$mol_jsx_prefix = prefix;
                        $.$mol_jsx_booked = booked;
                        $.$mol_jsx_crumbs = crumbs;
                    }
                };
                $mol_func_name_from(wrapper, func);
                props[field] = wrapper;
            }
        }
        if (typeof Elem !== 'string') {
            if ('prototype' in Elem) {
                const view = node && node[String(Elem)] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                view.className = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                node = view.valueOf();
                node[String(Elem)] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                const crumbs = $.$mol_jsx_crumbs;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    $.$mol_jsx_crumbs = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                    $.$mol_jsx_crumbs = crumbs;
                }
            }
        }
        if (!node) {
            node = Elem
                ? $.$mol_jsx_document.createElementNS(props?.xmlns ?? 'http://www.w3.org/1999/xhtml', Elem)
                : $.$mol_jsx_document.createDocumentFragment();
        }
        $mol_dom_render_children(node, [].concat(...childNodes));
        if (!Elem)
            return node;
        if (guid)
            node.id = guid;
        for (const key in props) {
            if (key === 'id')
                continue;
            if (typeof props[key] === 'string') {
                if (typeof node[key] === 'string')
                    node[key] = props[key];
                node.setAttribute(key, props[key]);
            }
            else if (props[key] &&
                typeof props[key] === 'object' &&
                Reflect.getPrototypeOf(props[key]) === Reflect.getPrototypeOf({})) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            else {
                node[key] = props[key];
            }
        }
        if ($.$mol_jsx_crumbs)
            node.className = (props?.['class'] ? props['class'] + ' ' : '') + crumbs_self;
        return node;
    }
    $.$mol_jsx = $mol_jsx;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            this.resizes();
            return {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
        static resizes(next) { return next; }
    }
    __decorate([
        $mol_mem
    ], $mol_window, "size", null);
    __decorate([
        $mol_mem
    ], $mol_window, "resizes", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', event => $mol_window.resizes(event));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_guard_defined(value) {
        return value !== null && value !== undefined;
    }
    $.$mol_guard_defined = $mol_guard_defined;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element?.shadowRoot) {
                element = element.shadowRoot.activeElement;
            }
            while (element) {
                parents.push(element);
                const parent = element.parentNode;
                if (parent instanceof ShadowRoot)
                    element = parent.host;
                else
                    element = parent;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    if ($mol_dom_context.document) {
        function focus(event) {
            const target = event.target;
            if (target?.shadowRoot)
                watch(target.shadowRoot);
            $mol_view_selection.focused($mol_maybe(target), 'notify');
        }
        function watch(root) {
            root.removeEventListener('focus', focus, true);
            root.addEventListener('focus', focus, true);
        }
        watch($mol_dom_context.document);
        $mol_dom.document.addEventListener('keydown', event => {
            if (!event.altKey)
                return;
            const self = $mol_view_selection.focused()[0];
            if (!self)
                return;
            switch (event.keyCode) {
                case $mol_keyboard_code.down:
                    var vert = 1, hor = 0;
                    break;
                case $mol_keyboard_code.up:
                    var vert = -1, hor = 0;
                    break;
                case $mol_keyboard_code.left:
                    var hor = -1, vert = 0;
                    break;
                case $mol_keyboard_code.right:
                    var hor = 1, vert = 0;
                    break;
                default: return;
            }
            event.preventDefault();
            const self_rect = self.getBoundingClientRect();
            const center_hor = (self_rect.left + self_rect.right) / 2;
            const center_vert = (self_rect.top + self_rect.bottom) / 2;
            const all = [...$mol_dom.document.querySelectorAll(':where( [role="button"], [role="checkbox"], input, button, a ):not([disabled])')]
                .map(el => {
                const rect = el.getBoundingClientRect();
                const dist = (Math.max(0, center_hor - rect.right) + Math.max(0, rect.left - center_hor)) * vert * vert
                    + (Math.max(0, center_vert - rect.bottom) + Math.max(0, rect.top - center_vert)) * hor * hor;
                return [el, rect, dist];
            })
                .filter(([el, rect]) => {
                if (el === self)
                    return false;
                if (vert > 0 && rect.top < self_rect.bottom)
                    return false;
                if (vert < 0 && rect.bottom > self_rect.top)
                    return false;
                if (hor > 0 && rect.left < self_rect.right)
                    return false;
                if (hor < 0 && rect.right > self_rect.left)
                    return false;
                return true;
            })
                .sort(([, one, dist1], [, two, dist2]) => {
                return (dist1 - dist2) || ((one.top - two.top) * vert + (one.left - two.left) * hor);
            });
            const target = all[0]?.[0];
            target?.focus();
        });
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr = Reflect.getOwnPropertyDescriptor(obj, name)) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr = Reflect.getOwnPropertyDescriptor(obj, name)) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            const fun = function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
            Reflect.defineProperty(fun, 'name', { value: task.name + ' ' });
            return fun;
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is required for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        const getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        getter[$mol_dev_format_head] = () => $mol_dev_format_span({}, '()=> ', $mol_dev_format_auto(value));
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === undefined) {
                continue;
            }
            else if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
            if (typeof val === 'number') {
                style.setProperty(kebab(name), `${val}px`);
            }
            else {
                style.setProperty(kebab(name), val);
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            if (val === el[key])
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform, scale, translate, rotate;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\t/* background: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text); */\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n\toverscroll-behavior: contain; /** Disable navigation gestures **/\n}\n\n@media print {\n\t[mol_view_root] {\n\t\theight: auto;\n\t}\n}\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"], [mol_view_error=\"$mol_promise_blocker\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n@keyframes mol_view_wait {\n\tfrom {\n\t\topacity: .25;\n\t}\n\t20% {\n\t\topacity: .75;\n\t}\n\tto {\n\t\topacity: .25;\n\t}\n}\n\n:where([mol_view][mol_view_error=\"$mol_promise_blocker\"]),\n:where([mol_view][mol_view_error=\"Promise\"]) {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait 1s steps(20,end) infinite;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        static roots() {
            return [...$mol_dom.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])')].map((node, index) => {
                const name = node.getAttribute('mol_view_root');
                const View = this.$[name];
                if (!View) {
                    $mol_fail_log(new Error(`Autobind unknown view class`, { cause: { name } }));
                    return null;
                }
                const view = View.Root(index);
                view.dom_node(node);
                return view;
            }).filter($mol_guard_defined);
        }
        static auto() {
            const roots = this.roots();
            if (!roots.length)
                return;
            for (const root of roots) {
                try {
                    root.dom_tree();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
            }
            try {
                document.title = roots[0].title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            descr: try {
                const descr = roots[0].hint();
                if (!descr)
                    break descr;
                const head = $mol_dom.document.head;
                let node = head.querySelector('meta[name="description"]');
                if (node)
                    node.content = descr;
                else
                    head.append($mol_jsx("meta", { name: "description", content: descr }));
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        title() {
            return this.toString().match(/.*\.(\w+)/)?.[1] ?? this.toString();
        }
        hint() {
            return '';
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString().replace(/</g, '(').replace(/>/g, ')').replaceAll(/"/g, "'");
        }
        dom_node_external(next) {
            const node = next ?? $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            return node;
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = this.dom_node_external(next);
            $mol_dom_render_attributes(node, this.attr_static());
            const events = this.event_async();
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                const mol_view_error = $mol_promise_like(error)
                    ? error.constructor[Symbol.toStringTag] ?? 'Promise'
                    : error.name || error.constructor.name;
                $mol_dom_render_attributes(node, { mol_view_error });
                if ($mol_promise_like(error))
                    break render;
                try {
                    const message = error.message || error;
                    node.innerText = message.replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            const attr = this.attr();
            const style = this.style();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return [];
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                if (current.constructor.name !== classes.at(-1)?.name) {
                    classes.push(current.constructor);
                }
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        static _view_names;
        static view_names(suffix) {
            let cache = Reflect.getOwnPropertyDescriptor(this, '_view_names')?.value;
            if (!cache)
                cache = this._view_names = new Map;
            const cached = cache.get(suffix);
            if (cached)
                return cached;
            const names = [];
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            for (const Class of this.view_classes()) {
                if (suffix in Class.prototype)
                    names.push(this.$.$mol_func_name(Class) + suffix2);
                else
                    break;
            }
            cache.set(suffix, names);
            return names;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (!(owner?.host instanceof $mol_view))
                return names;
            const suffix = owner.task.name.trim();
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            names.push(...owner.host.constructor.view_names(suffix));
            for (let prefix of owner.host.view_names_owned()) {
                names.push(prefix + suffix2);
            }
            return names;
        }
        view_names() {
            const names = new Set();
            for (let name of this.view_names_owned())
                names.add(name);
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (name)
                    names.add(name);
            }
            return names;
        }
        theme(next) {
            return next;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {
                mol_theme: this.theme(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return { ...$mol_wire_async(this.event()) };
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (path.length === 0 && check(this))
                return yield [this];
            try {
                const checked = new Set();
                const sub = this.sub();
                for (const item of sub) {
                    if (!(item instanceof $mol_view))
                        continue;
                    if (!check(item))
                        continue;
                    checked.add(item);
                    yield [...path, this, item];
                }
                for (const item of sub) {
                    if (!(item instanceof $mol_view))
                        continue;
                    if (checked.has(item))
                        continue;
                    yield* item.view_find(check, [...path, this]);
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            try {
                this.dom_final();
            }
            finally {
                view.dom_node().scrollIntoView({ block: align });
            }
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            new this.$.$mol_after_timeout(0, () => {
                this.focused(true);
            });
        }
        destructor() {
            const node = $mol_wire_probe(() => this.dom_node());
            if (!node)
                return;
            const events = $mol_wire_probe(() => this.event_async());
            if (!events)
                return;
            for (let event_name in events) {
                node.removeEventListener(event_name, events[event_name]);
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_id", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "roots", null);
    __decorate([
        $mol_mem
    ], $mol_view, "auto", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_dom_context.document?.addEventListener('DOMContentLoaded', () => $mol_view.auto(), { once: true });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node_external(next) {
            return next ?? $mol_owning_get(this).host.dom_node();
        }
        render() {
            this.dom_node_actual();
        }
    }
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));

;
	($.$mol_scroll) = class $mol_scroll extends ($.$mol_view) {
		tabindex(){
			return -1;
		}
		event_scroll(next){
			if(next !== undefined) return next;
			return null;
		}
		scroll_top(next){
			if(next !== undefined) return next;
			return 0;
		}
		scroll_left(next){
			if(next !== undefined) return next;
			return 0;
		}
		attr(){
			return {...(super.attr()), "tabindex": (this.tabindex())};
		}
		event(){
			return {...(super.event()), "scroll": (next) => (this.event_scroll(next))};
		}
	};
	($mol_mem(($.$mol_scroll.prototype), "event_scroll"));
	($mol_mem(($.$mol_scroll.prototype), "scroll_top"));
	($mol_mem(($.$mol_scroll.prototype), "scroll_left"));


;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^(--)?[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix of Object.keys(val).reverse()) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type of Object.keys(types).reverse()) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name of Object.keys(attrs).reverse()) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query of Object.keys(media).reverse()) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else if (key === '@starting-style') {
                    const styles = config[key];
                    rules.push('}\n');
                    make_class(prefix, path, styles);
                    rules.push(`${key} {\n`);
                }
                else if (key[0] === '[' && key[key.length - 1] === ']') {
                    const attr = key.slice(1, -1);
                    const vals = config[key];
                    for (let val of Object.keys(vals).reverse()) {
                        make_class(selector(prefix, path) + ':where([' + attr + '=' + JSON.stringify(val) + '])', [], vals[val]);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            display: 'grid',
            overflow: 'auto',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
            },
            outline: 'none',
            align: {
                self: 'stretch',
                items: 'flex-start',
            },
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            scroll: {
                padding: [rem(.75), 0],
            },
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    gridArea: '1/1',
                },
            },
            '::before': {
                display: 'none',
            },
            '::after': {
                display: 'none',
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            '@media': {
                'print': {
                    overflow: 'hidden',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_book2) = class $mol_book2 extends ($.$mol_scroll) {
		pages_deep(){
			return [];
		}
		pages(){
			return (this.pages_deep());
		}
		Placeholder(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		placeholders(){
			return [(this.Placeholder())];
		}
		menu_title(){
			return "";
		}
		sub(){
			return [...(this.pages()), ...(this.placeholders())];
		}
		minimal_width(){
			return 0;
		}
		Gap(id){
			const obj = new this.$.$mol_view();
			(obj.title) = () => ("");
			return obj;
		}
	};
	($mol_mem(($.$mol_book2.prototype), "Placeholder"));
	($mol_mem_key(($.$mol_book2.prototype), "Gap"));


;
"use strict";
var $;
(function ($) {
    $.$mol_layer = $mol_style_prop('mol_layer', [
        'hover',
        'focus',
        'speck',
        'float',
        'popup',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            pages_deep() {
                let result = [];
                for (const subpage of this.pages()) {
                    if (subpage instanceof $mol_book2)
                        result = [...result, ...subpage.pages_deep()];
                    else
                        result.push(subpage);
                }
                return result;
            }
            title() {
                return this.pages_deep().map(page => {
                    try {
                        return page?.title();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                    }
                }).reverse().filter(Boolean).join(' | ');
            }
            menu_title() {
                return this.pages_deep()[0]?.title() || this.title();
            }
            sub() {
                const placeholders = this.placeholders();
                const next = this.pages_deep().filter(Boolean);
                const prev = $mol_mem_cached(() => this.sub())?.filter(page => !placeholders.includes(page)) ?? [];
                for (let i = 1; i; ++i) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    new this.$.$mol_after_tick(() => {
                        const b = this.dom_node();
                        const p = n.dom_node();
                        b.scroll({
                            left: p.offsetLeft + p.offsetWidth - b.offsetWidth,
                            behavior: 'smooth',
                        });
                    });
                    break;
                }
                return [...next, ...placeholders];
            }
            bring() {
                const pages = this.pages_deep();
                if (pages.length)
                    pages[pages.length - 1].bring();
                else
                    super.bring();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2.prototype, "pages_deep", null);
        __decorate([
            $mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\tscroll-snap-type: x mandatory;\n\t/* padding: 0 1px;\n\tscroll-padding: 0 1px;\n\tgap: 1px; */\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tflex-shrink: 0;\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_field);\n}\n\n[mol_book2] > *:not(:first-of-type):before,\n[mol_book2] > *:not(:last-of-type)::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 1.5rem;\n\twidth: 3px;\n\theight: 1rem;\n\tbackground: linear-gradient(\n\t\tto bottom,\n\t\tvar(--mol_theme_special) 0%,\n\t\tvar(--mol_theme_special) 14%,\n\t\ttransparent 15%,\n\t\ttransparent 42%,\n\t\tvar(--mol_theme_special) 43%,\n\t\tvar(--mol_theme_special) 57%,\n\t\ttransparent 58%,\n\t\ttransparent 85%,\n\t\tvar(--mol_theme_special) 86%,\n\t\tvar(--mol_theme_special) 100%\n\t);\n\topacity: .5;\n\tz-index: var(--mol_layer_speck);\n}\n[mol_book2] > *:not(:first-of-type):before {\n\tleft: -3px;\n}\n[mol_book2] > *:not(:last-of-type)::after {\n\tright: -3px;\n}\n\n:where([mol_book2]) > * {\n\tbackground-color: var(--mol_theme_card);\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_back); */\n}\n\n[mol_book2] > [mol_book2] {\n\tdisplay: contents;\n}\n\n[mol_book2] > *:first-child {\n\tscroll-snap-align: start;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\tbackground: none;\n}\n\n[mol_book2_gap] {\n\tbackground: none;\n\tflex-grow: 1;\n\tscroll-snap-align: none;\n\tmargin-right: -1px;\n\tbox-shadow: none;\n}\n\n[mol_book2_gap]::before,\n[mol_book2_gap]::after {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_pop) = class $mol_pop extends ($.$mol_view) {
		Anchor(){
			return null;
		}
		align(){
			return "bottom_center";
		}
		bubble_content(){
			return [];
		}
		height_max(){
			return 9999;
		}
		Bubble(){
			const obj = new this.$.$mol_pop_bubble();
			(obj.align) = () => ((this.align()));
			(obj.content) = () => ((this.bubble_content()));
			(obj.height_max) = () => ((this.height_max()));
			return obj;
		}
		showed(next){
			if(next !== undefined) return next;
			return false;
		}
		align_vert(){
			return "";
		}
		align_hor(){
			return "";
		}
		prefer(){
			return "vert";
		}
		sub(){
			return [(this.Anchor())];
		}
		sub_visible(){
			return [(this.Anchor()), (this.Bubble())];
		}
	};
	($mol_mem(($.$mol_pop.prototype), "Bubble"));
	($mol_mem(($.$mol_pop.prototype), "showed"));
	($.$mol_pop_bubble) = class $mol_pop_bubble extends ($.$mol_view) {
		content(){
			return [];
		}
		height_max(){
			return 9999;
		}
		align(){
			return "";
		}
		sub(){
			return (this.content());
		}
		style(){
			return {...(super.style()), "maxHeight": (this.height_max())};
		}
		attr(){
			return {
				...(super.attr()), 
				"mol_pop_align": (this.align()), 
				"tabindex": 0
			};
		}
	};


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            showed(next = false) {
                this.focused();
                return next;
            }
            sub_visible() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                const align = this.align_vert();
                if (align === 'bottom')
                    return (viewport.height - rect_bubble.bottom) * .66;
                if (align === 'top')
                    return rect_bubble.top * .66;
                return 0;
            }
            align() {
                switch (this.prefer()) {
                    case 'hor': return `${this.align_hor()}_${this.align_vert()}`;
                    case 'vert': return `${this.align_vert()}_${this.align_hor()}`;
                    default: return this.prefer();
                }
            }
            align_vert() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.top > (viewport.top + viewport.height / 2) ? 'top' : 'bottom';
            }
            align_hor() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.left > (viewport.left + viewport.width / 2) ? 'left' : 'right';
            }
            View_port() {
                const view = new $mol_view;
                view.dom_node = () => {
                    let node = this.dom_node();
                    while (node = node.offsetParent) {
                        if (this.$.$mol_dom_context.getComputedStyle(node).overflow !== 'visible')
                            return node;
                    }
                    return this.$.$mol_dom_context.document.documentElement;
                };
                return view;
            }
            view_port() {
                return this.View_port().view_rect() ?? { ...this.$.$mol_window.size(), left: 0, top: 0 };
            }
        }
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "showed", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "height_max", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_vert", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_hor", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "View_port", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "view_port", null);
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pop/pop.view.css", "[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop_bubble] {\n\tbox-shadow: 0 0 1rem hsla(0,0%,0%,.5);\n\tborder-radius: var(--mol_gap_round);\n\tposition: absolute;\n\tz-index: var(--mol_layer_popup);\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\t/* overflow: hidden;\n\toverflow-y: scroll;\n\toverflow-y: overlay; */\n\tword-break: normal;\n\twidth: max-content;\n\t/* height: max-content; */\n\tflex-direction: column;\n\tmax-width: 80vw;\n\tmax-height: 80vw;\n\tcontain: paint;\n\ttransition-property: opacity;\n}\n\n:where( [mol_pop_bubble] > * ) {\n\tbackground: var(--mol_theme_card);\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n\n[mol_pop_align=\"suspense_suspense\"] {\n\topacity: 0;\n}\n\n[mol_pop_align=\"left_top\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"left_center\"] {\n\ttransform: translate(-100%, -50%);\n\tleft: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"left_bottom\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"right_top\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"right_center\"] {\n\ttransform: translate(100%, -50%);\n\tright: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"right_bottom\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"center\"] {\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\n[mol_pop_align=\"top_left\"] {\n\tright: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_right\"] {\n\tleft: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"bottom_left\"] {\n\tright: 0;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_right\"] {\n\tleft: 0;\n\ttop: 100%;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_hotkey) = class $mol_hotkey extends ($.$mol_plugin) {
		keydown(next){
			if(next !== undefined) return next;
			return null;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.keydown(next))};
		}
		key(){
			return {};
		}
		mod_ctrl(){
			return false;
		}
		mod_alt(){
			return false;
		}
		mod_shift(){
			return false;
		}
	};
	($mol_mem(($.$mol_hotkey.prototype), "keydown"));


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== (event.ctrlKey || event.metaKey))
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_nav) = class $mol_nav extends ($.$mol_plugin) {
		event_key(next){
			if(next !== undefined) return next;
			return null;
		}
		cycle(next){
			if(next !== undefined) return next;
			return false;
		}
		mod_ctrl(){
			return false;
		}
		mod_shift(){
			return false;
		}
		mod_alt(){
			return false;
		}
		keys_x(next){
			if(next !== undefined) return next;
			return [];
		}
		keys_y(next){
			if(next !== undefined) return next;
			return [];
		}
		current_x(next){
			if(next !== undefined) return next;
			return null;
		}
		current_y(next){
			if(next !== undefined) return next;
			return null;
		}
		event_up(next){
			if(next !== undefined) return next;
			return null;
		}
		event_down(next){
			if(next !== undefined) return next;
			return null;
		}
		event_left(next){
			if(next !== undefined) return next;
			return null;
		}
		event_right(next){
			if(next !== undefined) return next;
			return null;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.event_key(next))};
		}
	};
	($mol_mem(($.$mol_nav.prototype), "event_key"));
	($mol_mem(($.$mol_nav.prototype), "cycle"));
	($mol_mem(($.$mol_nav.prototype), "keys_x"));
	($mol_mem(($.$mol_nav.prototype), "keys_y"));
	($mol_mem(($.$mol_nav.prototype), "current_x"));
	($mol_mem(($.$mol_nav.prototype), "current_y"));
	($mol_mem(($.$mol_nav.prototype), "event_up"));
	($mol_mem(($.$mol_nav.prototype), "event_down"));
	($mol_mem(($.$mol_nav.prototype), "event_left"));
	($mol_mem(($.$mol_nav.prototype), "event_right"));


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $mol_keyboard_code.up: return this.event_up(event);
                    case $mol_keyboard_code.down: return this.event_down(event);
                    case $mol_keyboard_code.left: return this.event_left(event);
                    case $mol_keyboard_code.right: return this.event_right(event);
                    case $mol_keyboard_code.pageUp: return this.event_up(event);
                    case $mol_keyboard_code.pageDown: return this.event_down(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_lock extends $mol_object {
        promise = null;
        async wait() {
            let next = () => { };
            let destructed = false;
            const task = $mol_wire_auto();
            if (!task)
                return next;
            const destructor = task.destructor.bind(task);
            task.destructor = () => {
                destructor();
                destructed = true;
                next();
            };
            let promise;
            do {
                promise = this.promise;
                await promise;
                if (destructed)
                    return next;
            } while (promise !== this.promise);
            this.promise = new Promise(done => { next = done; });
            return next;
        }
        grab() { return $mol_wire_sync(this).wait(); }
    }
    $.$mol_lock = $mol_lock;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_compare_array(a, b) {
        if (a === b)
            return true;
        if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
            return false;
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++)
            if (a[i] !== b[i])
                return false;
        return true;
    }
    $.$mol_compare_array = $mol_compare_array;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let buf = new Uint8Array(2 ** 12);
    function $mol_charset_encode(str) {
        const capacity = str.length * 3;
        if (buf.byteLength < capacity)
            buf = new Uint8Array(capacity);
        return buf.slice(0, $mol_charset_encode_to(str, buf));
    }
    $.$mol_charset_encode = $mol_charset_encode;
    function $mol_charset_encode_to(str, buf, from = 0) {
        let pos = from;
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            if (code < 0x80) {
                buf[pos++] = code;
            }
            else if (code < 0x800) {
                buf[pos++] = 0xc0 | (code >> 6);
                buf[pos++] = 0x80 | (code & 0x3f);
            }
            else if (code < 0xd800 || code >= 0xe000) {
                buf[pos++] = 0xe0 | (code >> 12);
                buf[pos++] = 0x80 | ((code >> 6) & 0x3f);
                buf[pos++] = 0x80 | (code & 0x3f);
            }
            else {
                const point = ((code - 0xd800) << 10) + str.charCodeAt(++i) + 0x2400;
                buf[pos++] = 0xf0 | (point >> 18);
                buf[pos++] = 0x80 | ((point >> 12) & 0x3f);
                buf[pos++] = 0x80 | ((point >> 6) & 0x3f);
                buf[pos++] = 0x80 | (point & 0x3f);
            }
        }
        return pos - from;
    }
    $.$mol_charset_encode_to = $mol_charset_encode_to;
    function $mol_charset_encode_size(str) {
        let size = 0;
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            if (code < 0x80)
                size += 1;
            else if (code < 0x800)
                size += 2;
            else if (code < 0xd800 || code >= 0xe000)
                size += 3;
            else
                size += 4;
        }
        return size;
    }
    $.$mol_charset_encode_size = $mol_charset_encode_size;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_transaction extends $mol_object {
        path() { return ''; }
        modes() { return []; }
        write(options) {
            return 0;
        }
        read() {
            return new Uint8Array();
        }
        truncate(size) { }
        close() { }
        destructor() {
            this.close();
        }
    }
    $.$mol_file_transaction = $mol_file_transaction;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_transaction_web extends $mol_file_transaction {
        write(options) {
            throw new Error('Not implemented');
        }
        truncate(size) {
            throw new Error('Not implemented');
        }
        read() {
            throw new Error('Not implemented');
        }
        close() {
            throw new Error('Not implemented');
        }
    }
    $.$mol_file_transaction_web = $mol_file_transaction_web;
    $.$mol_file_transaction = $mol_file_transaction_web;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_base extends $mol_object {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        exists_cut() { return this.exists(); }
        root() {
            const path = this.path();
            const base = this.constructor.base;
            return base.startsWith(path) || this == this.parent();
        }
        stat(next, virt) {
            const path = this.path();
            const parent = this.parent();
            if (!this.root()) {
                parent.version();
            }
            parent.watcher();
            if (virt)
                return next ?? null;
            return next ?? this.info(path);
        }
        static changed = new Set;
        static frame = null;
        static changed_add(type, path) {
            if (/([\/\\]\.|___$)/.test(path))
                return;
            const file = this.relative(path.at(-1) === '/' ? path.slice(0, -1) : path);
            this.changed.add(file);
            if (!this.watching)
                return;
            this.frame?.destructor();
            this.frame = new this.$.$mol_after_timeout(this.watch_debounce(), () => {
                if (!this.watching)
                    return;
                this.watching = false;
                $mol_wire_async(this).flush();
            });
        }
        static watch_debounce() { return 500; }
        static flush() {
            for (const file of this.changed) {
                const parent = file.parent();
                try {
                    if ($mol_wire_probe(() => parent.sub()))
                        parent.sub(null);
                    file.reset();
                }
                catch (error) {
                    if ($mol_fail_catch(error))
                        $mol_fail_log(error);
                }
            }
            this.changed.clear();
            this.watching = true;
        }
        static watching = true;
        static lock = new $mol_lock;
        static watch_off(path) {
            this.watching = false;
            this.flush();
            this.watching = false;
            this.changed.add(this.absolute(path));
        }
        static unwatched(side_effect, affected_dir) {
            const unlock = this.lock.grab();
            this.watch_off(affected_dir);
            try {
                const result = side_effect();
                this.flush();
                unlock();
                return result;
            }
            catch (e) {
                if (!$mol_promise_like(e)) {
                    this.flush();
                    unlock();
                }
                $mol_fail_hidden(e);
            }
        }
        reset() {
            this.stat(null);
        }
        modified() { return this.stat()?.mtime ?? null; }
        version() {
            const next = this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
            return next;
        }
        info(path) { return null; }
        ensure() { }
        drop() { }
        copy(to) { }
        read() { return new Uint8Array; }
        write(buffer) { }
        kids() {
            return [];
        }
        readable(opts) {
            return new ReadableStream;
        }
        writable(opts) {
            return new WritableStream;
        }
        buffer(next) {
            let readed = new Uint8Array();
            if (next === undefined) {
                if (this.version())
                    readed = this.read();
            }
            const prev = $mol_mem_cached(() => this.buffer());
            const changed = prev === undefined || !$mol_compare_array(prev, next ?? readed);
            if (prev !== undefined && changed) {
                this.$.$mol_log3_rise({
                    place: `$mol_file_node.buffer()`,
                    message: 'Changed',
                    path: this.relate(),
                });
            }
            if (next === undefined)
                return changed ? readed : prev;
            if (!changed && this.exists())
                return prev;
            this.parent().exists(true);
            this.stat(this.stat_make(next.length), 'virt');
            this.write(next);
            return next;
        }
        stat_make(size) {
            const now = new Date();
            return {
                type: 'file',
                size,
                atime: now,
                mtime: now,
                ctime: now,
            };
        }
        clone(to) {
            if (!this.exists())
                return null;
            const target = this.constructor.absolute(to);
            try {
                this.version();
                target.parent().exists(true);
                this.copy(to);
                target.reset();
                return target;
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    console.error(error);
                }
            }
            return null;
        }
        watcher() {
            return {
                destructor() { }
            };
        }
        exists(next) {
            const exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next) {
                this.parent().exists(true);
                this.ensure();
            }
            else {
                this.drop();
            }
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (next !== undefined)
                this.exists();
            return this.text_int(next, virt);
        }
        text_int(next, virt) {
            if (virt) {
                this.stat(this.stat_make(0), 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer());
            }
            else {
                const buffer = $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        sub(reset) {
            if (!this.exists())
                return [];
            if (this.type() !== 'dir')
                return [];
            this.version();
            return this.kids().filter(file => file.exists());
        }
        resolve(path) {
            throw new Error('implement');
        }
        relate(base = this.constructor.relative('.')) {
            const base_path = base.path();
            const path = this.path();
            return path.startsWith(base_path) ? path.slice(base_path.length) : path;
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
        toJSON() {
            return this.path();
        }
        open(...modes) {
            return this.$.$mol_file_transaction.make({
                path: () => this.path(),
                modes: () => modes
            });
        }
    }
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "exists_cut", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "modified", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "version", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "readable", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "writable", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "stat_make", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "clone", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "text_int", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "sub", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "size", null);
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "open", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base, "absolute", null);
    __decorate([
        $mol_action
    ], $mol_file_base, "flush", null);
    __decorate([
        $mol_action
    ], $mol_file_base, "watch_off", null);
    $.$mol_file_base = $mol_file_base;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file extends $mol_file_base {
    }
    $.$mol_file = $mol_file;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_rest_code;
    (function ($mol_rest_code) {
        $mol_rest_code[$mol_rest_code["Continue"] = 100] = "Continue";
        $mol_rest_code[$mol_rest_code["Switching protocols"] = 101] = "Switching protocols";
        $mol_rest_code[$mol_rest_code["Processing"] = 102] = "Processing";
        $mol_rest_code[$mol_rest_code["OK"] = 200] = "OK";
        $mol_rest_code[$mol_rest_code["Created"] = 201] = "Created";
        $mol_rest_code[$mol_rest_code["Accepted"] = 202] = "Accepted";
        $mol_rest_code[$mol_rest_code["Non-Authoritative Information"] = 203] = "Non-Authoritative Information";
        $mol_rest_code[$mol_rest_code["No Content"] = 204] = "No Content";
        $mol_rest_code[$mol_rest_code["Reset Content"] = 205] = "Reset Content";
        $mol_rest_code[$mol_rest_code["Partial Content"] = 206] = "Partial Content";
        $mol_rest_code[$mol_rest_code["Multi Status"] = 207] = "Multi Status";
        $mol_rest_code[$mol_rest_code["Already Reported"] = 208] = "Already Reported";
        $mol_rest_code[$mol_rest_code["IM Used"] = 226] = "IM Used";
        $mol_rest_code[$mol_rest_code["Multiple Choices"] = 300] = "Multiple Choices";
        $mol_rest_code[$mol_rest_code["Moved Permanently"] = 301] = "Moved Permanently";
        $mol_rest_code[$mol_rest_code["Found"] = 302] = "Found";
        $mol_rest_code[$mol_rest_code["See Other"] = 303] = "See Other";
        $mol_rest_code[$mol_rest_code["Not Modified"] = 304] = "Not Modified";
        $mol_rest_code[$mol_rest_code["Use Proxy"] = 305] = "Use Proxy";
        $mol_rest_code[$mol_rest_code["Temporary Redirect"] = 307] = "Temporary Redirect";
        $mol_rest_code[$mol_rest_code["Bad Request"] = 400] = "Bad Request";
        $mol_rest_code[$mol_rest_code["Unauthorized"] = 401] = "Unauthorized";
        $mol_rest_code[$mol_rest_code["Payment Required"] = 402] = "Payment Required";
        $mol_rest_code[$mol_rest_code["Forbidden"] = 403] = "Forbidden";
        $mol_rest_code[$mol_rest_code["Not Found"] = 404] = "Not Found";
        $mol_rest_code[$mol_rest_code["Method Not Allowed"] = 405] = "Method Not Allowed";
        $mol_rest_code[$mol_rest_code["Not Acceptable"] = 406] = "Not Acceptable";
        $mol_rest_code[$mol_rest_code["Proxy Authentication Required"] = 407] = "Proxy Authentication Required";
        $mol_rest_code[$mol_rest_code["Request Timeout"] = 408] = "Request Timeout";
        $mol_rest_code[$mol_rest_code["Conflict"] = 409] = "Conflict";
        $mol_rest_code[$mol_rest_code["Gone"] = 410] = "Gone";
        $mol_rest_code[$mol_rest_code["Length Required"] = 411] = "Length Required";
        $mol_rest_code[$mol_rest_code["Precondition Failed"] = 412] = "Precondition Failed";
        $mol_rest_code[$mol_rest_code["Request Entity Too Large"] = 413] = "Request Entity Too Large";
        $mol_rest_code[$mol_rest_code["Request URI Too Long"] = 414] = "Request URI Too Long";
        $mol_rest_code[$mol_rest_code["Unsupported Media Type"] = 415] = "Unsupported Media Type";
        $mol_rest_code[$mol_rest_code["Requested Range Not Satisfiable"] = 416] = "Requested Range Not Satisfiable";
        $mol_rest_code[$mol_rest_code["Expectation Failed"] = 417] = "Expectation Failed";
        $mol_rest_code[$mol_rest_code["Teapot"] = 418] = "Teapot";
        $mol_rest_code[$mol_rest_code["Unprocessable Entity"] = 422] = "Unprocessable Entity";
        $mol_rest_code[$mol_rest_code["Locked"] = 423] = "Locked";
        $mol_rest_code[$mol_rest_code["Failed Dependency"] = 424] = "Failed Dependency";
        $mol_rest_code[$mol_rest_code["Upgrade Required"] = 426] = "Upgrade Required";
        $mol_rest_code[$mol_rest_code["Precondition Required"] = 428] = "Precondition Required";
        $mol_rest_code[$mol_rest_code["Too Many Requests"] = 429] = "Too Many Requests";
        $mol_rest_code[$mol_rest_code["Request Header Fields Too Large"] = 431] = "Request Header Fields Too Large";
        $mol_rest_code[$mol_rest_code["Unavailable For Legal Reasons"] = 451] = "Unavailable For Legal Reasons";
        $mol_rest_code[$mol_rest_code["Internal Server Error"] = 500] = "Internal Server Error";
        $mol_rest_code[$mol_rest_code["Not Implemented"] = 501] = "Not Implemented";
        $mol_rest_code[$mol_rest_code["Bad Gateway"] = 502] = "Bad Gateway";
        $mol_rest_code[$mol_rest_code["Service Unavailable"] = 503] = "Service Unavailable";
        $mol_rest_code[$mol_rest_code["Gateway Timeout"] = 504] = "Gateway Timeout";
        $mol_rest_code[$mol_rest_code["HTTP Version Not Supported"] = 505] = "HTTP Version Not Supported";
        $mol_rest_code[$mol_rest_code["Insufficient Storage"] = 507] = "Insufficient Storage";
        $mol_rest_code[$mol_rest_code["Loop Detected"] = 508] = "Loop Detected";
        $mol_rest_code[$mol_rest_code["Not Extended"] = 510] = "Not Extended";
        $mol_rest_code[$mol_rest_code["Network Authentication Required"] = 511] = "Network Authentication Required";
        $mol_rest_code[$mol_rest_code["Network Read Timeout Error"] = 598] = "Network Read Timeout Error";
        $mol_rest_code[$mol_rest_code["Network Connect Timeout Error"] = 599] = "Network Connect Timeout Error";
    })($mol_rest_code = $.$mol_rest_code || ($.$mol_rest_code = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $mol_object {
        native;
        request;
        status() {
            const types = ['unknown', 'inform', 'success', 'redirect', 'wrong', 'failed'];
            return types[Math.floor(this.native.status / 100)];
        }
        code() {
            return this.native.status;
        }
        ok() {
            return this.native.ok;
        }
        message() {
            return $mol_rest_code[this.code()] || `HTTP Error ${this.code()}`;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const mime = this.mime() || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            return $mol_wire_sync(this.native).json();
        }
        blob() {
            return $mol_wire_sync(this.native).blob();
        }
        buffer() {
            return $mol_wire_sync(this.native).arrayBuffer();
        }
        xml() {
            return $mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch_request extends $mol_object {
        native;
        response_async() {
            const controller = new AbortController();
            let done = false;
            const request = new Request(this.native, { signal: controller.signal });
            const promise = fetch(request).finally(() => {
                done = true;
            });
            return Object.assign(promise, {
                destructor: () => {
                    if (!done && !controller.signal.aborted)
                        controller.abort();
                },
            });
        }
        response() {
            return this.$.$mol_fetch_response.make({
                native: $mol_wire_sync(this).response_async(),
                request: this
            });
        }
        success() {
            const response = this.response();
            if (response.status() === 'success')
                return response;
            throw new Error(response.message(), { cause: response });
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_request.prototype, "response", null);
    $.$mol_fetch_request = $mol_fetch_request;
    class $mol_fetch extends $mol_object {
        static request(input, init) {
            return this.$.$mol_fetch_request.make({
                native: new Request(input, init)
            });
        }
        static response(input, init) {
            return this.request(input, init).response();
        }
        static success(input, init) {
            return this.request(input, init).success();
        }
        static stream(input, init) {
            return this.success(input, init).stream();
        }
        static text(input, init) {
            return this.success(input, init).text();
        }
        static json(input, init) {
            return this.success(input, init).json();
        }
        static blob(input, init) {
            return this.success(input, init).blob();
        }
        static buffer(input, init) {
            return this.success(input, init).buffer();
        }
        static xml(input, init) {
            return this.success(input, init).xml();
        }
        static xhtml(input, init) {
            return this.success(input, init).xhtml();
        }
        static html(input, init) {
            return this.success(input, init).html();
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch, "request", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_webdav extends $mol_file_base {
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        resolve(path) {
            let res = this.path() + '/' + path;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/.]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            res = res.replace(/\/\.\.\/?$/, '');
            if (res === this.path())
                return this;
            return this.constructor.absolute(res);
        }
        static headers() { return {}; }
        headers() { return this.constructor.headers(); }
        fetch(init) {
            return this.$.$mol_fetch.success(this.path(), {
                ...init,
                headers: {
                    ...this.headers(),
                    ...init.headers,
                }
            });
        }
        read() {
            try {
                const response = this.fetch({});
                return new Uint8Array(response.buffer());
            }
            catch (error) {
                if (error instanceof Error
                    && error.cause instanceof $mol_fetch_response
                    && error.cause.native.status === 404)
                    return new Uint8Array;
                $mol_fail_hidden(error);
            }
        }
        write(body) { this.fetch({ method: 'PUT', body }); }
        ensure() { this.fetch({ method: 'MKCOL' }); }
        drop() { this.fetch({ method: 'DELETE' }); }
        copy(to) {
            this.fetch({
                method: 'COPY',
                headers: { Destination: to }
            });
        }
        kids() {
            const response = this.fetch({ method: 'PROPFIND' });
            const xml = response.xml();
            const result = [];
            for (const multistatus of xml.childNodes) {
                if (multistatus.nodeName !== 'D:multistatus')
                    continue;
                for (const response of multistatus.childNodes) {
                    let path;
                    if (response.nodeName === 'D:href')
                        path = response.textContent ?? '';
                    if (!path)
                        continue;
                    if (response.nodeName !== 'D:propstat')
                        continue;
                    const stat = webdav_stat(response);
                    const file = this.resolve(path);
                    file.stat(stat, 'virt');
                    result.push(file);
                }
            }
            return result;
        }
        readable(opts) {
            return this.fetch({
                headers: !opts.start ? {} : {
                    'Range': `bytes=${opts.start}-${opts.end ?? ''}`
                }
            }).stream() || $mol_fail(new Error('Not found'));
        }
        info() {
            return this.kids().at(0)?.stat() ?? null;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_file_webdav.prototype, "readable", null);
    $.$mol_file_webdav = $mol_file_webdav;
    function webdav_stat(prop_stat) {
        const now = new Date();
        const stat = {
            type: 'file',
            size: 0,
            atime: now,
            mtime: now,
            ctime: now,
        };
        for (const prop of prop_stat.childNodes) {
            if (prop.nodeName !== 'D:prop')
                continue;
            for (const value of prop.childNodes) {
                const name = value.nodeName;
                const text = value.textContent ?? '';
                if (name === 'D:getcontenttype') {
                    stat.type = text.endsWith('directory') ? 'dir' : 'file';
                }
                if (name === 'D:getcontentlength') {
                    stat.size = Number(value.textContent || '0');
                    if (Number.isNaN(stat.size))
                        stat.size = 0;
                }
                if (name === 'D:getlastmodified')
                    stat.mtime = stat.atime = new Date(text);
                if (name === 'D:creationdate')
                    stat.ctime = new Date(text);
            }
        }
        return stat;
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_web extends $mol_file_webdav {
        static base = $mol_dom_context.document?.currentScript
            ? new URL('.', $mol_dom_context.document.currentScript['src']).toString()
            : '';
        version() { return '1'; }
        info() {
            try {
                const response = this.fetch({ method: 'HEAD' });
                const headers = response.headers();
                let size = Number(headers.get('Content-Length'));
                if (Number.isNaN(size))
                    size = 0;
                const last = headers.get('Last-Modified');
                const mtime = last ? new Date(last) : new Date();
                return {
                    type: 'file',
                    size,
                    mtime,
                    atime: mtime,
                    ctime: mtime,
                };
            }
            catch (error) {
                if (error instanceof Error
                    && error.cause instanceof $mol_fetch_response
                    && error.cause.native.status === 404)
                    return null;
                $mol_fail_hidden(error);
            }
        }
    }
    $.$mol_file_web = $mol_file_web;
    $.$mol_file = $mol_file_web;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    const def = this.lang_default();
                    if (lang === def)
                        throw error;
                }
            }
            return {};
        }
        static text(key) {
            const lang = this.lang();
            const target = this.texts(lang)[key];
            if (target)
                return target;
            this.warn(key);
            const en = this.texts('en')[key];
            if (!en)
                return key;
            return en;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));

;
	($.$mol_string) = class $mol_string extends ($.$mol_view) {
		selection_watcher(){
			return null;
		}
		error_report(){
			return null;
		}
		disabled(){
			return false;
		}
		value(next){
			if(next !== undefined) return next;
			return "";
		}
		value_changed(next){
			return (this.value(next));
		}
		hint(){
			return "";
		}
		hint_visible(){
			return (this.hint());
		}
		spellcheck(){
			return true;
		}
		autocomplete_native(){
			return "";
		}
		selection_end(){
			return 0;
		}
		selection_start(){
			return 0;
		}
		keyboard(){
			return "text";
		}
		enter(){
			return "go";
		}
		length_max(){
			return +Infinity;
		}
		type(next){
			if(next !== undefined) return next;
			return "text";
		}
		event_change(next){
			if(next !== undefined) return next;
			return null;
		}
		submit_with_ctrl(){
			return false;
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		Submit(){
			const obj = new this.$.$mol_hotkey();
			(obj.mod_ctrl) = () => ((this.submit_with_ctrl()));
			(obj.key) = () => ({"enter": (next) => (this.submit(next))});
			return obj;
		}
		dom_name(){
			return "input";
		}
		enabled(){
			return true;
		}
		minimal_height(){
			return 40;
		}
		autocomplete(){
			return false;
		}
		selection(next){
			if(next !== undefined) return next;
			return [0, 0];
		}
		auto(){
			return [(this.selection_watcher()), (this.error_report())];
		}
		field(){
			return {
				...(super.field()), 
				"disabled": (this.disabled()), 
				"value": (this.value_changed()), 
				"placeholder": (this.hint_visible()), 
				"spellcheck": (this.spellcheck()), 
				"autocomplete": (this.autocomplete_native()), 
				"selectionEnd": (this.selection_end()), 
				"selectionStart": (this.selection_start()), 
				"inputMode": (this.keyboard()), 
				"enterkeyhint": (this.enter())
			};
		}
		attr(){
			return {
				...(super.attr()), 
				"maxlength": (this.length_max()), 
				"type": (this.type())
			};
		}
		event(){
			return {...(super.event()), "input": (next) => (this.event_change(next))};
		}
		plugins(){
			return [(this.Submit())];
		}
	};
	($mol_mem(($.$mol_string.prototype), "value"));
	($mol_mem(($.$mol_string.prototype), "type"));
	($mol_mem(($.$mol_string.prototype), "event_change"));
	($mol_mem(($.$mol_string.prototype), "submit"));
	($mol_mem(($.$mol_string.prototype), "Submit"));
	($mol_mem(($.$mol_string.prototype), "selection"));


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                const el = this.dom_node();
                const from = el.selectionStart;
                const to = el.selectionEnd;
                try {
                    el.value = this.value_changed(el.value);
                }
                catch (error) {
                    const el = this.dom_node();
                    if (error instanceof Error) {
                        el.setCustomValidity(error.message);
                        el.reportValidity();
                    }
                    $mol_fail_hidden(error);
                }
                if (to === null)
                    return;
                el.selectionEnd = to;
                el.selectionStart = from;
                this.selection_change(next);
            }
            error_report() {
                try {
                    if (this.focused())
                        this.value();
                }
                catch (error) {
                    const el = this.dom_node();
                    if (error instanceof Error) {
                        el.setCustomValidity(error.message);
                        el.reportValidity();
                    }
                }
            }
            hint_visible() {
                return (this.enabled() ? this.hint() : '') || ' ';
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', $mol_wire_async(event => this.selection_change(event)));
            }
            selection_change(event) {
                const el = this.dom_node();
                if (el !== this.$.$mol_dom_context.document.activeElement)
                    return;
                const [from, to] = this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
                el.selectionEnd = to;
                el.selectionStart = from;
                if (to !== from && el.selectionEnd === el.selectionStart) {
                    el.selectionEnd = to;
                }
            }
            selection_start() {
                const el = this.dom_node();
                if (!this.focused())
                    return undefined;
                if (el.selectionStart == null)
                    return undefined;
                return this.selection()[0];
            }
            selection_end() {
                const el = this.dom_node();
                if (!this.focused())
                    return undefined;
                if (el.selectionEnd == null)
                    return undefined;
                return this.selection()[1];
            }
        }
        __decorate([
            $mol_action
        ], $mol_string.prototype, "event_change", null);
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "error_report", null);
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: transparent;\n\tmin-width: 0;\n\tcolor: inherit;\n\tbackground: var(--mol_theme_field);\n}\n\n[mol_string]:disabled:not(:placeholder-shown) {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:where(:not(:disabled)) {\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:where(:not(:disabled)):hover {\n\tbox-shadow: inset 0 0 0 2px var(--mol_theme_line);\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::placeholder {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_svg) = class $mol_svg extends ($.$mol_view) {
		dom_name(){
			return "svg";
		}
		dom_name_space(){
			return "http://www.w3.org/2000/svg";
		}
		font_size(){
			return 16;
		}
		font_family(){
			return "";
		}
		style_size(){
			return {};
		}
	};


;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_svg_root) = class $mol_svg_root extends ($.$mol_svg) {
		view_box(){
			return "0 0 100 100";
		}
		aspect(){
			return "xMidYMid";
		}
		dom_name(){
			return "svg";
		}
		attr(){
			return {
				...(super.attr()), 
				"viewBox": (this.view_box()), 
				"preserveAspectRatio": (this.aspect())
			};
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_svg_path) = class $mol_svg_path extends ($.$mol_svg) {
		geometry(){
			return "";
		}
		dom_name(){
			return "path";
		}
		attr(){
			return {...(super.attr()), "d": (this.geometry())};
		}
	};


;
"use strict";

;
	($.$mol_icon) = class $mol_icon extends ($.$mol_svg_root) {
		path(){
			return "";
		}
		Path(){
			const obj = new this.$.$mol_svg_path();
			(obj.geometry) = () => ((this.path()));
			return obj;
		}
		view_box(){
			return "0 0 24 24";
		}
		minimal_width(){
			return 16;
		}
		minimal_height(){
			return 16;
		}
		sub(){
			return [(this.Path())];
		}
	};
	($mol_mem(($.$mol_icon.prototype), "Path"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1.5em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_icon_close) = class $mol_icon_close extends ($.$mol_icon) {
		path(){
			return "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
		}
	};


;
"use strict";

;
	($.$mol_speck) = class $mol_speck extends ($.$mol_view) {
		value(){
			return null;
		}
		theme(){
			return "$mol_theme_accent";
		}
		sub(){
			return [(this.value())];
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .75rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.2rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .75rem;\n\tvertical-align: sub;\n\tpadding: 0 .2rem;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: .9;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tuser-select: none;\n\tbox-shadow: 0 0 3px rgba(0,0,0,.5);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_button) = class $mol_button extends ($.$mol_view) {
		event_activate(next){
			if(next !== undefined) return next;
			return null;
		}
		activate(next){
			return (this.event_activate(next));
		}
		clicks(next){
			if(next !== undefined) return next;
			return null;
		}
		event_key_press(next){
			if(next !== undefined) return next;
			return null;
		}
		key_press(next){
			return (this.event_key_press(next));
		}
		disabled(){
			return false;
		}
		tab_index(){
			return 0;
		}
		hint(){
			return "";
		}
		hint_safe(){
			return (this.hint());
		}
		error(){
			return "";
		}
		enabled(){
			return true;
		}
		click(next){
			if(next !== undefined) return next;
			return null;
		}
		event_click(next){
			if(next !== undefined) return next;
			return null;
		}
		event(){
			return {
				...(super.event()), 
				"click": (next) => (this.activate(next)), 
				"dblclick": (next) => (this.clicks(next)), 
				"keydown": (next) => (this.key_press(next))
			};
		}
		attr(){
			return {
				...(super.attr()), 
				"disabled": (this.disabled()), 
				"role": "button", 
				"tabindex": (this.tab_index()), 
				"title": (this.hint_safe())
			};
		}
		sub(){
			return [(this.title())];
		}
		Speck(){
			const obj = new this.$.$mol_speck();
			(obj.value) = () => ((this.error()));
			return obj;
		}
	};
	($mol_mem(($.$mol_button.prototype), "event_activate"));
	($mol_mem(($.$mol_button.prototype), "clicks"));
	($mol_mem(($.$mol_button.prototype), "event_key_press"));
	($mol_mem(($.$mol_button.prototype), "click"));
	($mol_mem(($.$mol_button.prototype), "event_click"));
	($mol_mem(($.$mol_button.prototype), "Speck"));


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            status(next = [null]) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    Promise.resolve().then(() => this.status([error]));
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const [error] = this.status();
                if (!error)
                    return '';
                if (error instanceof Promise) {
                    return $mol_fail_hidden(error);
                }
                return String(error.message ?? error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button.prototype, "status", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\t-webkit-user-select: none;\n\tborder-radius: var(--mol_gap_round);\n\tbackground: transparent;\n\tcolor: inherit;\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_button_typed) = class $mol_button_typed extends ($.$mol_button) {
		minimal_height(){
			return 40;
		}
		minimal_width(){
			return 40;
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n\tmin-width: 2.5rem;\n\tmin-height: 2.5rem;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus-visible {\n\tbox-shadow: inset 0 0 0 100vmax var(--mol_theme_hover);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_button_minor) = class $mol_button_minor extends ($.$mol_button_typed) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_minor][disabled] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_list) = class $mol_list extends ($.$mol_view) {
		gap_before(){
			return 0;
		}
		Gap_before(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({"paddingTop": (this.gap_before())});
			return obj;
		}
		Empty(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		gap_after(){
			return 0;
		}
		Gap_after(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({"paddingTop": (this.gap_after())});
			return obj;
		}
		rows(){
			return [
				(this.Gap_before()), 
				(this.Empty()), 
				(this.Gap_after())
			];
		}
		render_visible_only(){
			return true;
		}
		render_over(){
			return 0.1;
		}
		sub(){
			return (this.rows());
		}
		item_height_min(id){
			return 1;
		}
		item_width_min(id){
			return 1;
		}
		view_window_shift(next){
			if(next !== undefined) return next;
			return 0;
		}
		view_window(){
			return [0, 0];
		}
	};
	($mol_mem(($.$mol_list.prototype), "Gap_before"));
	($mol_mem(($.$mol_list.prototype), "Empty"));
	($mol_mem(($.$mol_list.prototype), "Gap_after"));
	($mol_mem(($.$mol_list.prototype), "view_window_shift"));


;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = this.$mol_dom_context.CSS?.supports('overflow-anchor:auto') ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                const next = (rows.length === 0) ? [this.Empty()] : rows;
                const prev = $mol_mem_cached(() => this.sub());
                const [start, end] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                if (prev && $mol_mem_cached(() => prev[start] !== next[start])) {
                    const index = $mol_mem_cached(() => next.indexOf(prev[start])) ?? -1;
                    if (index >= 0)
                        this.view_window_shift(index - start);
                }
                return next;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                const shift = this.view_window_shift();
                min += shift;
                max += shift;
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = this.item_height_min(min);
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top < limit_top) && (bottom < limit_bottom) && (max < kids.length)) {
                    min2 = max;
                    top2 = bottom;
                }
                if ((bottom > limit_bottom) && (top > limit_top) && (min > 0)) {
                    max2 = min;
                    bottom2 = top;
                }
                while (anchoring && ((top2 > limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= this.item_height_min(min2);
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += this.item_height_min(max2);
                    ++max2;
                }
                return [min2, max2];
            }
            item_height_min(index) {
                try {
                    return this.sub()[index]?.minimal_height() ?? 0;
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 0;
                }
            }
            row_width_min(index) {
                try {
                    return this.sub()[index]?.minimal_width() ?? 0;
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 0;
                }
            }
            gap_before() {
                let gap = 0;
                const skipped = this.view_window()[0];
                for (let i = 0; i < skipped; ++i)
                    gap += this.item_height_min(i);
                return gap;
            }
            gap_after() {
                let gap = 0;
                const from = this.view_window()[1];
                const to = this.sub().length;
                for (let i = from; i < to; ++i)
                    gap += this.item_height_min(i);
                return gap;
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                let height = 0;
                const len = this.sub().length;
                for (let i = 0; i < len; ++i)
                    height += this.item_height_min(i);
                return height;
            }
            minimal_width() {
                let width = 0;
                const len = this.sub().length;
                for (let i = 0; i < len; ++i)
                    width = Math.max(width, this.item_width_min(i));
                return width;
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        this.view_window([this.render_visible_only() ? index : 0, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_width", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: 1.5rem;\n\t/* will-change: contents; */\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_paragraph) = class $mol_paragraph extends ($.$mol_view) {
		line_height(){
			return 24;
		}
		letter_width(){
			return 7;
		}
		width_limit(){
			return +Infinity;
		}
		row_width(){
			return 0;
		}
		sub(){
			return [(this.title())];
		}
	};


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paragraph/paragraph.view.css", ":where([mol_paragraph]) {\n\tmargin: 0;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_dimmer) = class $mol_dimmer extends ($.$mol_paragraph) {
		parts(){
			return [];
		}
		string(id){
			return "";
		}
		haystack(){
			return "";
		}
		needle(){
			return "";
		}
		sub(){
			return (this.parts());
		}
		Low(id){
			const obj = new this.$.$mol_paragraph();
			(obj.sub) = () => ([(this.string(id))]);
			return obj;
		}
		High(id){
			const obj = new this.$.$mol_paragraph();
			(obj.sub) = () => ([(this.string(id))]);
			return obj;
		}
	};
	($mol_mem_key(($.$mol_dimmer.prototype), "Low"));
	($mol_mem_key(($.$mol_dimmer.prototype), "High"));


;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        groups;
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            try {
                while (this.lastIndex < str.length) {
                    const found = this.exec(str);
                    if (!found)
                        break;
                    yield found;
                }
            }
            finally {
                this.lastIndex = index;
            }
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        [Symbol.split](str) {
            const res = [];
            let token_last = null;
            for (let token of this[Symbol.matchAll](str)) {
                if (token.groups && (token_last ? token_last.groups : true))
                    res.push('');
                res.push(token[0]);
                token_last = token;
            }
            if (!res.length)
                res.push('');
            return res;
        }
        test(str) {
            return Boolean(str.match(this));
        }
        exec(str) {
            const from = this.lastIndex;
            if (from >= str.length)
                return null;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        get native() {
            return new RegExp(this.source, this.flags);
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static vary(sources) {
            const groups = [];
            const chunks = sources.map(source => {
                const regexp = $mol_regexp.from(source);
                groups.push(...regexp.groups);
                return regexp.source;
            });
            return new $mol_regexp(`(?:${chunks.join('|')})`, '', groups);
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof $mol_regexp) {
                const regexp = new $mol_regexp(source.source, flags, source.groups);
                regexp.generate = params => source.generate(params);
                return regexp;
            }
            if (source instanceof RegExp) {
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = (params) => {
                    for (let option in source) {
                        if (option in params) {
                            if (typeof params[option] === 'boolean') {
                                if (!params[option])
                                    continue;
                            }
                            else {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
        static decimal_only = $mol_regexp.from(/\d/gsu);
        static decimal_except = $mol_regexp.from(/\D/gsu);
        static latin_only = $mol_regexp.from(/\w/gsu);
        static latin_except = $mol_regexp.from(/\W/gsu);
        static space_only = $mol_regexp.from(/\s/gsu);
        static space_except = $mol_regexp.from(/\S/gsu);
        static word_break_only = $mol_regexp.from(/\b/gsu);
        static word_break_except = $mol_regexp.from(/\B/gsu);
        static tab = $mol_regexp.from(/\t/gsu);
        static slash_back = $mol_regexp.from(/\\/gsu);
        static nul = $mol_regexp.from(/\0/gsu);
        static char_any = $mol_regexp.from(/./gsu);
        static begin = $mol_regexp.from(/^/gsu);
        static end = $mol_regexp.from(/$/gsu);
        static or = $mol_regexp.from(/|/gsu);
        static line_end = $mol_regexp.from({
            win_end: [['\r'], '\n'],
            mac_end: '\r',
        });
    }
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const options = this.needle().split(/\s+/g).filter(Boolean);
                if (!options.length)
                    return [this.haystack()];
                const variants = { ...options };
                const regexp = $mol_regexp.from({ needle: variants }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.8;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_search) = class $mol_search extends ($.$mol_pop) {
		clear(next){
			if(next !== undefined) return next;
			return null;
		}
		Hotkey(){
			const obj = new this.$.$mol_hotkey();
			(obj.key) = () => ({"escape": (next) => (this.clear(next))});
			return obj;
		}
		nav_components(){
			return [];
		}
		nav_focused(next){
			if(next !== undefined) return next;
			return null;
		}
		Nav(){
			const obj = new this.$.$mol_nav();
			(obj.keys_y) = () => ((this.nav_components()));
			(obj.current_y) = (next) => ((this.nav_focused(next)));
			return obj;
		}
		suggests_showed(next){
			if(next !== undefined) return next;
			return false;
		}
		query(next){
			if(next !== undefined) return next;
			return "";
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_search_hint"));
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		enabled(){
			return true;
		}
		keyboard(){
			return "search";
		}
		enter(){
			return "search";
		}
		bring(){
			return (this.Query().bring());
		}
		Query(){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this.query(next)));
			(obj.hint) = () => ((this.hint()));
			(obj.submit) = (next) => ((this.submit(next)));
			(obj.enabled) = () => ((this.enabled()));
			(obj.keyboard) = () => ((this.keyboard()));
			(obj.enter) = () => ((this.enter()));
			return obj;
		}
		Clear_icon(){
			const obj = new this.$.$mol_icon_close();
			return obj;
		}
		Clear(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_search_Clear_hint")));
			(obj.enabled) = () => ((this.enabled()));
			(obj.click) = (next) => ((this.clear(next)));
			(obj.sub) = () => ([(this.Clear_icon())]);
			return obj;
		}
		anchor_content(){
			return [(this.Query()), (this.Clear())];
		}
		menu_items(){
			return [];
		}
		Menu(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.menu_items()));
			return obj;
		}
		Bubble_pane(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ([(this.Menu())]);
			return obj;
		}
		suggest_select(id, next){
			if(next !== undefined) return next;
			return null;
		}
		suggest_label(id){
			return "";
		}
		Suggest_label(id){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ((this.suggest_label(id)));
			(obj.needle) = () => ((this.query()));
			return obj;
		}
		suggest_content(id){
			return [(this.Suggest_label(id))];
		}
		suggests(){
			return [];
		}
		plugins(){
			return [
				...(super.plugins()), 
				(this.Hotkey()), 
				(this.Nav())
			];
		}
		showed(next){
			return (this.suggests_showed(next));
		}
		align_hor(){
			return "right";
		}
		Anchor(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.anchor_content()));
			return obj;
		}
		bubble_content(){
			return [(this.Bubble_pane())];
		}
		Suggest(id){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.suggest_select(id, next)));
			(obj.sub) = () => ((this.suggest_content(id)));
			return obj;
		}
	};
	($mol_mem(($.$mol_search.prototype), "clear"));
	($mol_mem(($.$mol_search.prototype), "Hotkey"));
	($mol_mem(($.$mol_search.prototype), "nav_focused"));
	($mol_mem(($.$mol_search.prototype), "Nav"));
	($mol_mem(($.$mol_search.prototype), "suggests_showed"));
	($mol_mem(($.$mol_search.prototype), "query"));
	($mol_mem(($.$mol_search.prototype), "submit"));
	($mol_mem(($.$mol_search.prototype), "Query"));
	($mol_mem(($.$mol_search.prototype), "Clear_icon"));
	($mol_mem(($.$mol_search.prototype), "Clear"));
	($mol_mem(($.$mol_search.prototype), "Menu"));
	($mol_mem(($.$mol_search.prototype), "Bubble_pane"));
	($mol_mem_key(($.$mol_search.prototype), "suggest_select"));
	($mol_mem_key(($.$mol_search.prototype), "Suggest_label"));
	($mol_mem(($.$mol_search.prototype), "Anchor"));
	($mol_mem_key(($.$mol_search.prototype), "Suggest"));


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search extends $.$mol_search {
            anchor_content() {
                return [
                    this.Query(),
                    ...this.query() ? [this.Clear()] : [],
                ];
            }
            suggests_showed(next = true) {
                this.query();
                if (!this.focused())
                    return false;
                return next;
            }
            suggest_selected(next) {
                if (next === undefined)
                    return;
                this.query(next);
                this.Query().focused(true);
            }
            nav_components() {
                return [
                    this.Query(),
                    ...this.menu_items(),
                ];
            }
            nav_focused(component) {
                if (!this.focused())
                    return null;
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.suggests_showed()) {
                    this.ensure_visible(component, "center");
                    component.focused(true);
                }
                return component;
            }
            suggest_label(key) {
                return key;
            }
            menu_items() {
                return this.suggests().map((suggest) => this.Suggest(suggest));
            }
            suggest_select(id, event) {
                this.query(id);
                this.Query().selection([id.length, id.length]);
                this.Query().focused(true);
            }
            clear(event) {
                this.query('');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "anchor_content", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "suggests_showed", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "nav_focused", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "menu_items", null);
        $$.$mol_search = $mol_search;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/search/search.view.css", "[mol_search] {\n\talign-self: flex-start;\n\tflex: auto;\n}\n\n[mol_search_anchor] {\n\tflex: 1 1 auto;\n}\n\n[mol_search_query] {\n\tflex-grow: 1;\n}\n\n[mol_search_menu] {\n\tmin-height: .75rem;\n\tdisplay: flex;\n}\n\n[mol_search_suggest] {\n\ttext-align: left;\n}\n\n[mol_search_suggest_label_high] {\n\tcolor: var(--mol_theme_shade);\n\ttext-shadow: none;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_link) = class $mol_link extends ($.$mol_view) {
		uri_toggle(){
			return "";
		}
		hint(){
			return "";
		}
		hint_safe(){
			return (this.hint());
		}
		target(){
			return "_self";
		}
		file_name(){
			return "";
		}
		current(){
			return false;
		}
		relation(){
			return "";
		}
		event_click(next){
			if(next !== undefined) return next;
			return null;
		}
		click(next){
			return (this.event_click(next));
		}
		uri(){
			return "";
		}
		dom_name(){
			return "a";
		}
		uri_off(){
			return "";
		}
		uri_native(){
			return null;
		}
		external(){
			return false;
		}
		attr(){
			return {
				...(super.attr()), 
				"href": (this.uri_toggle()), 
				"title": (this.hint_safe()), 
				"target": (this.target()), 
				"download": (this.file_name()), 
				"mol_link_current": (this.current()), 
				"rel": (this.relation())
			};
		}
		sub(){
			return [(this.title())];
		}
		arg(){
			return {};
		}
		event(){
			return {...(super.event()), "click": (next) => (this.click(next))};
		}
	};
	($mol_mem(($.$mol_link.prototype), "event_click"));


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri_toggle() {
                return this.current() ? this.uri_off() : this.uri();
            }
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            uri_off() {
                const arg2 = {};
                for (let i in this.arg())
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) != args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            external() {
                return this.uri_native().origin !== $mol_dom_context.location.origin;
            }
            target() {
                return this.external() ? '_blank' : '_self';
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_toggle", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_off", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        minHeight: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
        },
        ':focus-visible': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            }
        },
        ':active': {
            color: $mol_theme.focus,
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));

;
	($.$mol_page) = class $mol_page extends ($.$mol_view) {
		tabindex(){
			return -1;
		}
		Logo(){
			return null;
		}
		title_content(){
			return [(this.Logo()), (this.title())];
		}
		Title(){
			const obj = new this.$.$mol_view();
			(obj.dom_name) = () => ("h1");
			(obj.sub) = () => ((this.title_content()));
			return obj;
		}
		tools(){
			return [];
		}
		Tools(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.tools()));
			return obj;
		}
		head(){
			return [(this.Title()), (this.Tools())];
		}
		Head(){
			const obj = new this.$.$mol_view();
			(obj.minimal_height) = () => (64);
			(obj.dom_name) = () => ("header");
			(obj.sub) = () => ((this.head()));
			return obj;
		}
		body_scroll_top(next){
			return (this.Body().scroll_top(next));
		}
		body(){
			return [];
		}
		Body_content(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.body()));
			return obj;
		}
		body_content(){
			return [(this.Body_content())];
		}
		Body(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ((this.body_content()));
			return obj;
		}
		foot(){
			return [];
		}
		Foot(){
			const obj = new this.$.$mol_view();
			(obj.dom_name) = () => ("footer");
			(obj.sub) = () => ((this.foot()));
			return obj;
		}
		dom_name(){
			return "article";
		}
		attr(){
			return {...(super.attr()), "tabIndex": (this.tabindex())};
		}
		sub(){
			return [
				(this.Head()), 
				(this.Body()), 
				(this.Foot())
			];
		}
	};
	($mol_mem(($.$mol_page.prototype), "Title"));
	($mol_mem(($.$mol_page.prototype), "Tools"));
	($mol_mem(($.$mol_page.prototype), "Head"));
	($mol_mem(($.$mol_page.prototype), "Body_content"));
	($mol_mem(($.$mol_page.prototype), "Body"));
	($mol_mem(($.$mol_page.prototype), "Foot"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        const { hsla, blur } = $mol_style_func;
        $mol_style_define($mol_page, {
            display: 'flex',
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            color: $mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $mol_gap.block,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                box: {
                    shadow: [
                        [0, `-0.5rem`, `0.5rem`, `-0.5rem`, hsla(0, 0, 0, .25)],
                        [0, `0.5rem`, `0.5rem`, `-0.5rem`, hsla(0, 0, 0, .25)],
                    ],
                },
                zIndex: 2,
                '@media': {
                    'print': {
                        box: {
                            shadow: [[0, `1px`, 0, 0, hsla(0, 0, 0, .25)]],
                        },
                    },
                },
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $mol_gap.text,
                gap: $mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 0,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                '@media': {
                    'print': {
                        display: 'none',
                    },
                },
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
            },
            Body_content: {
                padding: $mol_gap.block,
                minHeight: 0,
                minWidth: 0,
                flex: {
                    direction: 'column',
                    shrink: 1,
                    grow: 1,
                },
                justify: {
                    self: 'stretch',
                },
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                box: {
                    shadow: [
                        [0, `-0.5rem`, `0.5rem`, `-0.5rem`, hsla(0, 0, 0, .25)],
                        [0, `0.5rem`, `0.5rem`, `-0.5rem`, hsla(0, 0, 0, .25)],
                    ],
                },
                zIndex: 1,
                padding: $mol_gap.block,
                ':empty': {
                    display: 'none',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_book2_catalog) = class $mol_book2_catalog extends ($.$mol_book2) {
		Menu_title(){
			return (this.Menu().Title());
		}
		menu_title(){
			return "";
		}
		Menu_tools(){
			return (this.Menu().Tools());
		}
		Menu_logo(){
			return null;
		}
		menu_head(){
			return [(this.Menu_title()), (this.Menu_tools())];
		}
		menu_filter(next){
			if(next !== undefined) return next;
			return "";
		}
		Menu_filter(){
			const obj = new this.$.$mol_search();
			(obj.query) = (next) => ((this.menu_filter(next)));
			return obj;
		}
		Menu_links_empty(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		arg(id){
			return {};
		}
		menu_link_arg(id){
			return (this.arg(id));
		}
		spread_title(id){
			return "";
		}
		Menu_link_title(id){
			const obj = new this.$.$mol_dimmer();
			(obj.needle) = () => ((this.menu_filter()));
			(obj.haystack) = () => ((this.spread_title(id)));
			return obj;
		}
		menu_link_content(id){
			return [(this.Menu_link_title(id))];
		}
		Menu_link(id){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ((this.menu_link_arg(id)));
			(obj.sub) = () => ((this.menu_link_content(id)));
			return obj;
		}
		menu_item_content(id){
			return [(this.Menu_link(id))];
		}
		Menu_item(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.menu_item_content(id)));
			return obj;
		}
		menu_links(){
			return [(this.Menu_item("0"))];
		}
		Menu_links(){
			const obj = new this.$.$mol_list();
			(obj.Empty) = () => ((this.Menu_links_empty()));
			(obj.rows) = () => ((this.menu_links()));
			return obj;
		}
		menu_body(){
			return [(this.Menu_filter()), (this.Menu_links())];
		}
		menu_foot(){
			return [];
		}
		Menu(){
			const obj = new this.$.$mol_page();
			(obj.title) = () => ((this.menu_title()));
			(obj.Logo) = () => ((this.Menu_logo()));
			(obj.tools) = () => ([...(this.menu_tools()), ...(this.addon_tools())]);
			(obj.head) = () => ((this.menu_head()));
			(obj.body) = () => ((this.menu_body()));
			(obj.foot) = () => ((this.menu_foot()));
			return obj;
		}
		spread_close_arg(){
			return {};
		}
		Spread_close_icon(){
			const obj = new this.$.$mol_icon_close();
			return obj;
		}
		param(){
			return "";
		}
		spread(next){
			if(next !== undefined) return next;
			return "";
		}
		spreads(){
			return {};
		}
		Spread(id){
			const obj = new this.$.$mol_view();
			return obj;
		}
		Spread_default(){
			return null;
		}
		spread_ids(){
			return [];
		}
		menu_filter_enabled(){
			return false;
		}
		spread_ids_filtered(){
			return [];
		}
		spread_current(){
			return null;
		}
		menu_tools(){
			return [];
		}
		addon_tools(){
			return [];
		}
		pages(){
			return [(this.Menu())];
		}
		Spread_close(){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ((this.spread_close_arg()));
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_book2_catalog_Spread_close_hint")));
			(obj.sub) = () => ([(this.Spread_close_icon())]);
			return obj;
		}
	};
	($mol_mem(($.$mol_book2_catalog.prototype), "menu_filter"));
	($mol_mem(($.$mol_book2_catalog.prototype), "Menu_filter"));
	($mol_mem(($.$mol_book2_catalog.prototype), "Menu_links_empty"));
	($mol_mem_key(($.$mol_book2_catalog.prototype), "Menu_link_title"));
	($mol_mem_key(($.$mol_book2_catalog.prototype), "Menu_link"));
	($mol_mem_key(($.$mol_book2_catalog.prototype), "Menu_item"));
	($mol_mem(($.$mol_book2_catalog.prototype), "Menu_links"));
	($mol_mem(($.$mol_book2_catalog.prototype), "Menu"));
	($mol_mem(($.$mol_book2_catalog.prototype), "Spread_close_icon"));
	($mol_mem(($.$mol_book2_catalog.prototype), "spread"));
	($mol_mem_key(($.$mol_book2_catalog.prototype), "Spread"));
	($mol_mem(($.$mol_book2_catalog.prototype), "Spread_close"));


;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2_catalog extends $.$mol_book2_catalog {
            spread_current() {
                return this.spread() === '' ? this.Spread_default() : this.Spread(this.spread());
            }
            pages() {
                const spread = this.spread_current();
                return [
                    this.Menu(),
                    ...spread
                        ? spread instanceof $mol_book2
                            ? spread.pages_deep()
                            : [spread]
                        : [],
                ];
            }
            auto() {
                const spread = this.spread_current();
                if (spread instanceof $mol_book2)
                    spread.auto();
            }
            spread_ids() {
                return Object.keys(this.spreads());
            }
            menu_body() {
                return [
                    ...this.menu_filter_enabled() ? [this.Menu_filter()] : [],
                    this.Menu_links(),
                ];
            }
            menu_filter_enabled() {
                return this.spread_ids().length >= 10;
            }
            menu_links() {
                return this.spread_ids_filtered()
                    .map(spread => this.Menu_item(spread));
            }
            spread_ids_filtered() {
                return this.spread_ids()
                    .filter($mol_match_text(this.menu_filter(), spread => [this.spread_title(spread)]));
            }
            Spread(id) {
                return this.spreads()[id];
            }
            Spread_default() {
                return this.spreads()[''];
            }
            spread(next) {
                return this.$.$mol_state_arg.value(this.param(), next) ?? '';
            }
            arg(spread) {
                return { [this.param()]: spread || null };
            }
            spread_close_arg() {
                return { [this.param()]: null };
            }
            spread_title(spread) {
                const page = this.Spread(spread);
                return page instanceof $mol_book2
                    && page.menu_title()
                    || page.title()
                    || spread;
            }
            spread_current_book() {
                const spread = this.spread_current();
                return spread instanceof $mol_book2 ? spread : null;
            }
            placeholders() {
                const spread_placeholders = this.spread_current_book()?.placeholders() ?? [];
                return spread_placeholders.length ? spread_placeholders : super.placeholders();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "pages", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "spread_ids", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "menu_body", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "menu_links", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "spread_ids_filtered", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "spread", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "placeholders", null);
        $$.$mol_book2_catalog = $mol_book2_catalog;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($mol_book2_catalog, {
            Menu_filter: {
                flex: {
                    shrink: 0,
                    grow: 0,
                },
                alignSelf: 'stretch',
            },
            Menu_item: {
                align: {
                    items: 'flex-start',
                },
            },
            Menu_link: {
                flex: {
                    grow: 1,
                    shrink: 1,
                    wrap: 'wrap',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_check) = class $mol_check extends ($.$mol_button_minor) {
		checked(next){
			if(next !== undefined) return next;
			return false;
		}
		aria_checked(){
			return "false";
		}
		aria_role(){
			return "checkbox";
		}
		Icon(){
			return null;
		}
		title(){
			return "";
		}
		Title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.title())]);
			return obj;
		}
		label(){
			return [(this.Title())];
		}
		attr(){
			return {
				...(super.attr()), 
				"mol_check_checked": (this.checked()), 
				"aria-checked": (this.aria_checked()), 
				"role": (this.aria_role())
			};
		}
		sub(){
			return [(this.Icon()), (this.label())];
		}
	};
	($mol_mem(($.$mol_check.prototype), "checked"));
	($mol_mem(($.$mol_check.prototype), "Title"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\t/* align-items: flex-start; */\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
            aria_checked() {
                return String(this.checked());
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_check_icon) = class $mol_check_icon extends ($.$mol_check) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/icon/icon.view.css", "[mol_check_icon]:where([mol_check_checked]) {\n\tcolor: var(--mol_theme_current);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_icon_brightness_4) = class $mol_icon_brightness_4 extends ($.$mol_icon) {
		path(){
			return "M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z";
		}
	};


;
"use strict";

;
	($.$mol_lights_toggle) = class $mol_lights_toggle extends ($.$mol_check_icon) {
		Lights_icon(){
			const obj = new this.$.$mol_icon_brightness_4();
			return obj;
		}
		lights(next){
			if(next !== undefined) return next;
			return false;
		}
		Icon(){
			return (this.Lights_icon());
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_lights_toggle_hint"));
		}
		checked(next){
			return (this.lights(next));
		}
	};
	($mol_mem(($.$mol_lights_toggle.prototype), "Lights_icon"));
	($mol_mem(($.$mol_lights_toggle.prototype), "lights"));


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_lights_toggle extends $.$mol_lights_toggle {
            lights(next) {
                return this.$.$mol_lights(next);
            }
        }
        $$.$mol_lights_toggle = $mol_lights_toggle;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$bog_ainews_theme = $mol_style_prop('mol_theme', [
        'back',
        'hover',
        'card',
        'current',
        'special',
        'text',
        'control',
        'shade',
        'line',
        'focus',
        'field',
        'image',
        'spirit',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("bog/ainews/theme/theme.css", ":root {\n\t--mol_theme_hue: 645deg;\n\t--mol_theme_hue_spread: 90deg;\n\n\t/* алиасы фиксами, чтобы не ломать совместимость */\n\t--mol_theme_primary_hue: 645deg;\n\t--mol_theme_secondary_hue: 735deg;\n\t--mol_theme_tertiary_hue: 555deg;\n\t--mol_theme_accent_hue: 180deg;\n}\n\n:where([mol_theme]) {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n\tbackground-color: var(--mol_theme_back);\n}\n\n/* ===================== DARK ===================== */\n\n:root,\n[mol_theme='$mol_theme_dark'],\n:where([mol_theme='$mol_theme_dark']) [mol_theme] {\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate(180deg);\n\n\t/* ВАЖНО: mol_* — именно их читает демка */\n\t--mol_theme_back: #3e3e3e; /* paper dark */\n\t--mol_theme_card: #4a4a4a40; /* paper-2 dark 25% */\n\t--mol_theme_field: #4c4c4c40; /* chip dark 25% */\n\t--mol_theme_hover: #5a5a5a1a; /* edge dark 10% */\n\n\t--mol_theme_text: #bcbcbc; /* ink dark */\n\t--mol_theme_shade: #909090; /* ink-muted dark */\n\t--mol_theme_line: #5a5a5a40; /* edge dark 25% */\n\t--mol_theme_focus: #a8bcff; /* accent dark */\n\n\t--mol_theme_control: #a8bcff; /* accent dark */\n\t--mol_theme_current: #c7b18c; /* accent-2 dark */\n\t--mol_theme_special: #d4bf9d; /* accent-2 lighter */\n}\n\n/* можно оставить дубликат в @supports — тоже mol_* */\n@supports (color: oklch(0% 0 0deg)) {\n\t:root,\n\t[mol_theme='$mol_theme_dark'],\n\t:where([mol_theme='$mol_theme_dark']) [mol_theme] {\n\t\t--mol_theme_back: #3e3e3e;\n\t\t--mol_theme_card: #4a4a4a40;\n\t\t--mol_theme_field: #4c4c4c40;\n\t\t--mol_theme_hover: #5a5a5a1a;\n\n\t\t--mol_theme_text: #bcbcbc;\n\t\t--mol_theme_shade: #909090;\n\t\t--mol_theme_line: #5a5a5a40;\n\t\t--mol_theme_focus: #a8bcff;\n\n\t\t--mol_theme_control: #a8bcff;\n\t\t--mol_theme_current: #c7b18c;\n\t\t--mol_theme_special: #d4bf9d;\n\t}\n}\n\n/* ===================== LIGHT ===================== */\n\n[mol_theme='$mol_theme_light'],\n:where([mol_theme='$mol_theme_light']) [mol_theme] {\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n\t--mol_theme_spirit: #fbf8f1bf; /* 75% */\n\n\t--mol_theme_back: #f7f3e9; /* paper */\n\t--mol_theme_card: #fbf8f180; /* paper-2 50% */\n\t--mol_theme_field: #efe8d8bf; /* chip 75% */\n\t--mol_theme_hover: #ded7c81a; /* edge 10% */\n\n\t--mol_theme_text: #22211f; /* ink */\n\t--mol_theme_shade: #6e6a62; /* ink-muted */\n\t--mol_theme_line: #ded7c840; /* edge 25% */\n\t--mol_theme_focus: #3b5aad; /* accent */\n\n\t--mol_theme_control: #3b5aad; /* accent */\n\t--mol_theme_current: #92734b; /* accent-2 */\n\t--mol_theme_special: #c7b18c; /* accent-2 lighter */\n}\n\n@supports (color: oklch(0% 0 0deg)) {\n\t[mol_theme='$mol_theme_light'],\n\t:where([mol_theme='$mol_theme_light']) [mol_theme] {\n\t\t--mol_theme_back: #f7f3e9;\n\t\t--mol_theme_card: #fbf8f180;\n\t\t--mol_theme_field: #efe8d8bf;\n\t\t--mol_theme_hover: #ded7c81a;\n\n\t\t--mol_theme_text: #22211f;\n\t\t--mol_theme_shade: #6e6a62;\n\t\t--mol_theme_line: #ded7c840;\n\t\t--mol_theme_focus: #3b5aad;\n\n\t\t--mol_theme_control: #3b5aad;\n\t\t--mol_theme_current: #92734b;\n\t\t--mol_theme_special: #c7b18c;\n\t}\n}\n");
})($ || ($ = {}));

;
	($.$mol_theme_auto) = class $mol_theme_auto extends ($.$mol_plugin) {
		dark(){
			return "$mol_theme_dark";
		}
		theme(){
			return (this.dark());
		}
		light(){
			return "$mol_theme_light";
		}
		attr(){
			return {"mol_theme": (this.theme())};
		}
	};


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_theme_auto extends $.$mol_theme_auto {
            theme() {
                return this.$.$mol_lights() ? this.light() : this.dark();
            }
        }
        $$.$mol_theme_auto = $mol_theme_auto;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
	($.$bog_ainews_theme_auto) = class $bog_ainews_theme_auto extends ($.$mol_theme_auto) {
		light(){
			return "$mol_theme_light";
		}
		dark(){
			return "$mol_theme_dark";
		}
	};


;
"use strict";

;
	($.$bog_ainews_app_page) = class $bog_ainews_app_page extends ($.$mol_page) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("bog/ainews/app/page/page.view.css", "[bog_ainews_app_page] {\n\tflex: 1 0 40rem;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_button_major) = class $mol_button_major extends ($.$mol_button_minor) {
		theme(){
			return "$mol_theme_base";
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/major/major.view.css", "[mol_button_major] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_check_list) = class $mol_check_list extends ($.$mol_view) {
		option_checked(id, next){
			if(next !== undefined) return next;
			return false;
		}
		option_title(id){
			return "";
		}
		option_label(id){
			return [(this.option_title(id))];
		}
		enabled(){
			return true;
		}
		option_enabled(id){
			return (this.enabled());
		}
		option_hint(id){
			return "";
		}
		items(){
			return [];
		}
		dictionary(){
			return {};
		}
		Option(id){
			const obj = new this.$.$mol_check();
			(obj.checked) = (next) => ((this.option_checked(id, next)));
			(obj.label) = () => ((this.option_label(id)));
			(obj.enabled) = () => ((this.option_enabled(id)));
			(obj.hint) = () => ((this.option_hint(id)));
			(obj.minimal_height) = () => (24);
			return obj;
		}
		options(){
			return {};
		}
		keys(){
			return [];
		}
		sub(){
			return (this.items());
		}
	};
	($mol_mem_key(($.$mol_check_list.prototype), "option_checked"));
	($mol_mem_key(($.$mol_check_list.prototype), "Option"));


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_list extends $.$mol_check_list {
            options() {
                return {};
            }
            dictionary(next) {
                return next ?? {};
            }
            option_checked(id, next) {
                const prev = this.dictionary();
                if (next === undefined)
                    return prev[id] ?? null;
                const next_rec = { ...prev, [id]: next };
                if (next === null)
                    delete next_rec[id];
                return this.dictionary(next_rec)[id] ?? null;
            }
            keys() {
                return Object.keys(this.options());
            }
            items() {
                return this.keys().map(key => this.Option(key));
            }
            option_title(key) {
                return this.options()[key] || key;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "keys", null);
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "items", null);
        $$.$mol_check_list = $mol_check_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/list/list.view.css", "[mol_check_list] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex: 1 1 auto;\n\tborder-radius: var(--mol_gap_round);\n\tgap: 1px;\n}\n\n[mol_check_list_option] {\n\tflex: 0 1 auto;\n}\n\n[mol_check_list_option]:where([mol_check_checked=\"true\"]) {\n\ttext-shadow: 0 0;\n\tcolor: var(--mol_theme_current);\n}\n\n[mol_check_list_option]:where([mol_check_checked=\"true\"][disabled]) {\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_switch) = class $mol_switch extends ($.$mol_check_list) {
		value(next){
			if(next !== undefined) return next;
			return "";
		}
	};
	($mol_mem(($.$mol_switch.prototype), "value"));


;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_switch extends $.$mol_switch {
            value(next) {
                return $mol_state_session.value(`${this}.value()`, next) ?? '';
            }
            option_checked(key, next) {
                if (next === undefined)
                    return this.value() == key;
                this.value(next ? key : '');
                return next;
            }
        }
        $$.$mol_switch = $mol_switch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_deck) = class $mol_deck extends ($.$mol_list) {
		current(next){
			if(next !== undefined) return next;
			return "0";
		}
		switch_options(){
			return {};
		}
		Switch(){
			const obj = new this.$.$mol_switch();
			(obj.value) = (next) => ((this.current(next)));
			(obj.options) = () => ((this.switch_options()));
			return obj;
		}
		Content(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		items(){
			return [];
		}
		rows(){
			return [(this.Switch()), (this.Content())];
		}
	};
	($mol_mem(($.$mol_deck.prototype), "current"));
	($mol_mem(($.$mol_deck.prototype), "Switch"));
	($mol_mem(($.$mol_deck.prototype), "Content"));


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_deck extends $.$mol_deck {
            current(next) {
                return $mol_state_session.value(`${this}.current()`, next) || '0';
            }
            switch_options() {
                let options = {};
                this.items().forEach((item, index) => {
                    options[String(index)] = item.title();
                });
                return options;
            }
            Content() {
                return this.items()[Number(this.current())];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_deck.prototype, "Content", null);
        $$.$mol_deck = $mol_deck;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
	($.$bog_ainews_app_feed_img) = class $bog_ainews_app_feed_img extends ($.$mol_view) {
		src(next){
			if(next !== undefined) return next;
			return null;
		}
		alt(next){
			if(next !== undefined) return next;
			return null;
		}
		width(next){
			if(next !== undefined) return next;
			return null;
		}
		height(next){
			if(next !== undefined) return next;
			return null;
		}
	};
	($mol_mem(($.$bog_ainews_app_feed_img.prototype), "src"));
	($mol_mem(($.$bog_ainews_app_feed_img.prototype), "alt"));
	($mol_mem(($.$bog_ainews_app_feed_img.prototype), "width"));
	($mol_mem(($.$bog_ainews_app_feed_img.prototype), "height"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_ainews_app_feed_img extends $.$bog_ainews_app_feed_img {
            dom_name() {
                return 'img';
            }
            attr() {
                const a = super.attr();
                const src = this.src();
                if (!src || (Array.isArray(src) && src.length === 0))
                    return {};
                return {
                    ...a,
                    src: Array.isArray(src) ? src[0] : src,
                    alt: this.alt() ?? '',
                    loading: 'lazy',
                    referrerpolicy: 'no-referrer',
                    width: this.width() ? String(this.width()) : undefined,
                    height: this.height() ? String(this.height()) : undefined,
                };
            }
            render() {
                const src = this.src();
                if (!src || (Array.isArray(src) && src.length === 0))
                    return null;
                return super.render();
            }
        }
        $$.$bog_ainews_app_feed_img = $bog_ainews_app_feed_img;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($.$$.$bog_ainews_app_feed_img, {
        display: 'block',
        objectFit: 'cover',
        borderRadius: rem(0.5),
        boxShadow: '0 2px 8px rgba(0,0,0,.08)',
    });
})($ || ($ = {}));

;
	($.$mol_icon_cards) = class $mol_icon_cards extends ($.$mol_icon) {
		path(){
			return "M21.47,4.35L20.13,3.79V12.82L22.56,6.96C22.97,5.94 22.5,4.77 21.47,4.35M1.97,8.05L6.93,20C7.24,20.77 7.97,21.24 8.74,21.26C9,21.26 9.27,21.21 9.53,21.1L16.9,18.05C17.65,17.74 18.11,17 18.13,16.26C18.14,16 18.09,15.71 18,15.45L13,3.5C12.71,2.73 11.97,2.26 11.19,2.25C10.93,2.25 10.67,2.31 10.42,2.4L3.06,5.45C2.04,5.87 1.55,7.04 1.97,8.05M18.12,4.25A2,2 0 0,0 16.12,2.25H14.67L18.12,10.59";
		}
	};


;
"use strict";

;
	($.$mol_icon_cards_heart) = class $mol_icon_cards_heart extends ($.$mol_icon) {
		path(){
			return "M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z";
		}
	};


;
"use strict";

;
	($.$mol_labeler) = class $mol_labeler extends ($.$mol_list) {
		label(){
			return [(this.title())];
		}
		Label(){
			const obj = new this.$.$mol_view();
			(obj.minimal_height) = () => (32);
			(obj.sub) = () => ((this.label()));
			return obj;
		}
		content(){
			return [];
		}
		Content(){
			const obj = new this.$.$mol_view();
			(obj.minimal_height) = () => (24);
			(obj.sub) = () => ((this.content()));
			return obj;
		}
		rows(){
			return [(this.Label()), (this.Content())];
		}
	};
	($mol_mem(($.$mol_labeler.prototype), "Label"));
	($mol_mem(($.$mol_labeler.prototype), "Content"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tmin-height: 2rem;\n\tcolor: var(--mol_theme_shade);\n\tpadding: .5rem .75rem 0;\n\tgap: 0 var(--mol_gap_block);\n\tflex-wrap: wrap;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n\tpadding: var(--mol_gap_text);\n\tmin-height: 2.5rem;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$bog_ainews_app_filters) = class $bog_ainews_app_filters extends ($.$bog_ainews_app_page) {
		include_string_value(next){
			if(next !== undefined) return next;
			return "";
		}
		Include_string(){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this.include_string_value(next)));
			(obj.hint) = () => ("Visual");
			return obj;
		}
		include_string_clear_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Include_string_close_icon(){
			const obj = new this.$.$mol_icon_close();
			return obj;
		}
		Include_string_clear_button(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.include_string_clear_click(next)));
			(obj.sub) = () => ([(this.Include_string_close_icon())]);
			return obj;
		}
		Include_labeler(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_filters_Include_labeler_title")));
			(obj.content) = () => ([(this.Include_string()), (this.Include_string_clear_button())]);
			return obj;
		}
		exclude_string_value(next){
			if(next !== undefined) return next;
			return "";
		}
		Exclude_string(){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this.exclude_string_value(next)));
			(obj.hint) = () => ("AI,II");
			return obj;
		}
		exclude_string_clear_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Exclude_string_close_icon(){
			const obj = new this.$.$mol_icon_close();
			return obj;
		}
		Exclude_string_clear_button(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.exclude_string_clear_click(next)));
			(obj.sub) = () => ([(this.Exclude_string_close_icon())]);
			return obj;
		}
		Excldue_labeler(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_filters_Excldue_labeler_title")));
			(obj.content) = () => ([(this.Exclude_string()), (this.Exclude_string_clear_button())]);
			return obj;
		}
		Tip(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_filters_Tip_title")));
			return obj;
		}
		Tip_labeler(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_filters_Tip_labeler_title")));
			(obj.content) = () => ([(this.Tip())]);
			return obj;
		}
		title(){
			return (this.$.$mol_locale.text("$bog_ainews_app_filters_title"));
		}
		body(){
			return [
				(this.Include_labeler()), 
				(this.Excldue_labeler()), 
				(this.Tip_labeler())
			];
		}
	};
	($mol_mem(($.$bog_ainews_app_filters.prototype), "include_string_value"));
	($mol_mem(($.$bog_ainews_app_filters.prototype), "Include_string"));
	($mol_mem(($.$bog_ainews_app_filters.prototype), "include_string_clear_click"));
	($mol_mem(($.$bog_ainews_app_filters.prototype), "Include_string_close_icon"));
	($mol_mem(($.$bog_ainews_app_filters.prototype), "Include_string_clear_button"));
	($mol_mem(($.$bog_ainews_app_filters.prototype), "Include_labeler"));
	($mol_mem(($.$bog_ainews_app_filters.prototype), "exclude_string_value"));
	($mol_mem(($.$bog_ainews_app_filters.prototype), "Exclude_string"));
	($mol_mem(($.$bog_ainews_app_filters.prototype), "exclude_string_clear_click"));
	($mol_mem(($.$bog_ainews_app_filters.prototype), "Exclude_string_close_icon"));
	($mol_mem(($.$bog_ainews_app_filters.prototype), "Exclude_string_clear_button"));
	($mol_mem(($.$bog_ainews_app_filters.prototype), "Excldue_labeler"));
	($mol_mem(($.$bog_ainews_app_filters.prototype), "Tip"));
	($mol_mem(($.$bog_ainews_app_filters.prototype), "Tip_labeler"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_ainews_app_filters extends $.$bog_ainews_app_filters {
            include_string_value(next) {
                if (next !== undefined)
                    return $mol_state_local.value('include_string_value', next);
                return $mol_state_local.value('include_string_value') ?? '';
            }
            exclude_string_value(next) {
                if (next !== undefined)
                    return $mol_state_local.value('exclude_string_value', next);
                return $mol_state_local.value('exclude_string_value') ?? '';
            }
            include_string_clear_click() {
                $mol_state_local.value('include_string_value', null);
            }
            exclude_string_clear_click() {
                $mol_state_local.value('exclude_string_value', null);
            }
        }
        __decorate([
            $mol_mem
        ], $bog_ainews_app_filters.prototype, "include_string_value", null);
        __decorate([
            $mol_mem
        ], $bog_ainews_app_filters.prototype, "exclude_string_value", null);
        $$.$bog_ainews_app_filters = $bog_ainews_app_filters;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_pick) = class $mol_pick extends ($.$mol_pop) {
		keydown(next){
			if(next !== undefined) return next;
			return null;
		}
		trigger_enabled(){
			return true;
		}
		clicks(next){
			if(next !== undefined) return next;
			return null;
		}
		trigger_content(){
			return [(this.title())];
		}
		hint(){
			return "";
		}
		Trigger(){
			const obj = new this.$.$mol_check();
			(obj.minimal_width) = () => (40);
			(obj.minimal_height) = () => (40);
			(obj.enabled) = () => ((this.trigger_enabled()));
			(obj.checked) = (next) => ((this.showed(next)));
			(obj.clicks) = (next) => ((this.clicks(next)));
			(obj.sub) = () => ((this.trigger_content()));
			(obj.hint) = () => ((this.hint()));
			return obj;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.keydown(next))};
		}
		Anchor(){
			return (this.Trigger());
		}
	};
	($mol_mem(($.$mol_pick.prototype), "keydown"));
	($mol_mem(($.$mol_pick.prototype), "clicks"));
	($mol_mem(($.$mol_pick.prototype), "Trigger"));


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pick extends $.$mol_pick {
            keydown(event) {
                if (!this.trigger_enabled())
                    return;
                if (event.defaultPrevented)
                    return;
                if (event.keyCode === $mol_keyboard_code.escape) {
                    if (!this.showed())
                        return;
                    event.preventDefault();
                    this.showed(false);
                }
            }
        }
        $$.$mol_pick = $mol_pick;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pick/pick.view.css", "[mol_pick_trigger] {\n\talign-items: center;\n\tflex-grow: 1;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_icon_dots_vertical) = class $mol_icon_dots_vertical extends ($.$mol_icon) {
		path(){
			return "M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z";
		}
	};


;
"use strict";

;
	($.$mol_select) = class $mol_select extends ($.$mol_pick) {
		enabled(){
			return true;
		}
		event_select(id, next){
			if(next !== undefined) return next;
			return null;
		}
		option_label(id){
			return "";
		}
		filter_pattern(next){
			if(next !== undefined) return next;
			return "";
		}
		Option_label(id){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ((this.option_label(id)));
			(obj.needle) = () => ((this.filter_pattern()));
			return obj;
		}
		option_content(id){
			return [(this.Option_label(id))];
		}
		no_options_message(){
			return (this.$.$mol_locale.text("$mol_select_no_options_message"));
		}
		nav_components(){
			return [];
		}
		option_focused(next){
			if(next !== undefined) return next;
			return null;
		}
		nav_cycle(next){
			if(next !== undefined) return next;
			return true;
		}
		Nav(){
			const obj = new this.$.$mol_nav();
			(obj.keys_y) = () => ((this.nav_components()));
			(obj.current_y) = (next) => ((this.option_focused(next)));
			(obj.cycle) = (next) => ((this.nav_cycle(next)));
			return obj;
		}
		menu_content(){
			return [];
		}
		Menu(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.menu_content()));
			return obj;
		}
		Bubble_pane(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ([(this.Menu())]);
			return obj;
		}
		filter_hint(){
			return (this.$.$mol_locale.text("$mol_select_filter_hint"));
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		dictionary(next){
			if(next !== undefined) return next;
			return {};
		}
		options(){
			return [];
		}
		value(next){
			if(next !== undefined) return next;
			return "";
		}
		option_label_default(){
			return "";
		}
		Option_row(id){
			const obj = new this.$.$mol_button_minor();
			(obj.enabled) = () => ((this.enabled()));
			(obj.event_click) = (next) => ((this.event_select(id, next)));
			(obj.sub) = () => ((this.option_content(id)));
			return obj;
		}
		No_options(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.no_options_message())]);
			return obj;
		}
		plugins(){
			return [...(super.plugins()), (this.Nav())];
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_select_hint"));
		}
		bubble_content(){
			return [(this.Filter()), (this.Bubble_pane())];
		}
		Filter(){
			const obj = new this.$.$mol_search();
			(obj.query) = (next) => ((this.filter_pattern(next)));
			(obj.hint) = () => ((this.filter_hint()));
			(obj.submit) = (next) => ((this.submit(next)));
			(obj.enabled) = () => ((this.enabled()));
			return obj;
		}
		Trigger_icon(){
			const obj = new this.$.$mol_icon_dots_vertical();
			return obj;
		}
	};
	($mol_mem_key(($.$mol_select.prototype), "event_select"));
	($mol_mem(($.$mol_select.prototype), "filter_pattern"));
	($mol_mem_key(($.$mol_select.prototype), "Option_label"));
	($mol_mem(($.$mol_select.prototype), "option_focused"));
	($mol_mem(($.$mol_select.prototype), "nav_cycle"));
	($mol_mem(($.$mol_select.prototype), "Nav"));
	($mol_mem(($.$mol_select.prototype), "Menu"));
	($mol_mem(($.$mol_select.prototype), "Bubble_pane"));
	($mol_mem(($.$mol_select.prototype), "submit"));
	($mol_mem(($.$mol_select.prototype), "dictionary"));
	($mol_mem(($.$mol_select.prototype), "value"));
	($mol_mem_key(($.$mol_select.prototype), "Option_row"));
	($mol_mem(($.$mol_select.prototype), "No_options"));
	($mol_mem(($.$mol_select.prototype), "Filter"));
	($mol_mem(($.$mol_select.prototype), "Trigger_icon"));


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select extends $.$mol_select {
            filter_pattern(next) {
                this.focused();
                return next || '';
            }
            open() {
                this.showed(true);
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_filtered() {
                let options = this.options();
                options = options.filter($mol_match_text(this.filter_pattern(), (id) => [this.option_label(id)]));
                const index = options.indexOf(this.value());
                if (index >= 0)
                    options = [...options.slice(0, index), ...options.slice(index + 1)];
                return options;
            }
            option_label(id) {
                const value = this.dictionary()[id];
                return (value == null ? id : value) || this.option_label_default();
            }
            option_rows() {
                return this.options_filtered().map((option) => this.Option_row(option));
            }
            option_focused(component) {
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.showed()) {
                    component.focused(true);
                }
                return component;
            }
            event_select(id, event) {
                this.value(id);
                this.showed(false);
                event?.preventDefault();
            }
            nav_components() {
                if (this.options().length > 1 && this.Filter()) {
                    return [this.Filter(), ...this.option_rows()];
                }
                else {
                    return this.option_rows();
                }
            }
            trigger_content() {
                return [
                    ...this.option_content(this.value()),
                    this.Trigger_icon(),
                ];
            }
            menu_content() {
                return [
                    ...this.option_rows(),
                    ...(this.options_filtered().length === 0) ? [this.No_options()] : []
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "filter_pattern", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options_filtered", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "option_focused", null);
        $$.$mol_select = $mol_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/select/select.view.css", "[mol_select] {\n\tdisplay: flex;\n\tword-break: normal;\n\talign-self: flex-start;\n}\n\n[mol_select_option_row] {\n\tmin-width: 100%;\n\tpadding: 0;\n\tjustify-content: flex-start;\n}\n\n[mol_select_bubble] {\n\tmin-width: 100%;\n}\n\n[mol_select_filter] {\n\tflex: 1 0 auto;\n\talign-self: stretch;\n}\n\n[mol_select_option_label] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tmin-height: 1.5em;\n\tdisplay: block;\n\twhite-space: nowrap;\n}\n\n[mol_select_clear_option_content] {\n\tpadding: .5em 1rem .5rem 0;\n\ttext-align: left;\n\tbox-shadow: var(--mol_theme_line);\n\tflex: 1 0 auto;\n}\n\n[mol_select_no_options] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tdisplay: block;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_select_trigger] {\n\tpadding: 0;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n}\n\n[mol_select_trigger] > * {\n\tmargin-right: -1rem;\n}\n\n[mol_select_trigger] > *:last-child {\n\tmargin-right: 0;\n}\n\n[mol_select_menu] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_locale_select) = class $mol_locale_select extends ($.$mol_select) {};


;
"use strict";
var $;
(function ($) {
    $.$mol_lang_iso639 = {
        ab: "Abkhazian",
        aa: "Afar",
        af: "Afrikaans",
        ak: "Akan",
        sq: "Albanian",
        am: "Amharic",
        ar: "Arabic",
        an: "Aragonese",
        hy: "Armenian",
        as: "Assamese",
        av: "Avaric",
        ae: "Avestan",
        ay: "Aymara",
        az: "Azerbaijani",
        bm: "Bambara",
        ba: "Bashkir",
        eu: "Basque",
        be: "Belarusian",
        bn: "Bengali",
        bi: "Bislama",
        nb: "Bokmål",
        bs: "Bosnian",
        br: "Breton",
        bg: "Bulgarian",
        my: "Burmese",
        ca: "Catalan",
        ch: "Chamorro",
        ce: "Chechen",
        zh: "Chinese",
        cu: "Church Slavonic",
        cv: "Chuvash",
        kw: "Cornish",
        co: "Corsican",
        cr: "Cree",
        hr: "Croatian",
        cs: "Czech",
        da: "Danish",
        dv: "Divehi",
        nl: "Dutch",
        dz: "Dzongkha",
        en: "English",
        eo: "Esperanto",
        et: "Estonian",
        ee: "Ewe",
        fo: "Faroese",
        fj: "Fijian",
        fi: "Finnish",
        fr: "French",
        fy: "Frisian",
        ff: "Fulah",
        gd: "Gaelic",
        gl: "Galician",
        lg: "Ganda",
        ka: "Georgian",
        de: "German",
        el: "Greek",
        gn: "Guarani",
        gu: "Gujarati",
        ht: "Haitian",
        ha: "Hausa",
        he: "Hebrew",
        hz: "Herero",
        hi: "Hindi",
        ho: "Hiri Motu",
        hu: "Hungarian",
        is: "Icelandic",
        io: "Ido",
        ig: "Igbo",
        id: "Indonesian",
        ia: "InterlinguA",
        ie: "InterlinguE",
        iu: "Inuktitut",
        ik: "Inupiaq",
        ga: "Irish",
        it: "Italian",
        ja: "Japanese",
        jv: "Javanese",
        kl: "Kalaallisut",
        kn: "Kannada",
        kr: "Kanuri",
        ks: "Kashmiri",
        kk: "Kazakh",
        km: "Khmer",
        ki: "Kikuyu",
        rw: "Kinyarwanda",
        ky: "Kyrgyz",
        kv: "Komi",
        kg: "Kongo",
        ko: "Korean",
        kj: "Kwanyama",
        ku: "Kurdish",
        lo: "Lao",
        la: "Latin",
        lv: "Latvian",
        li: "Limburgan",
        ln: "Lingala",
        lt: "Lithuanian",
        lu: "Luba-Katanga",
        lb: "Luxembourgish",
        mk: "Macedonian",
        mg: "Malagasy",
        ms: "Malay",
        ml: "Malayalam",
        mt: "Maltese",
        gv: "Manx",
        mi: "Maori",
        mr: "Marathi",
        mh: "Marshallese",
        mn: "Mongolian",
        na: "Nauru",
        nv: "Navaho",
        nd: "North Ndebele",
        ng: "Ndonga",
        ne: "Nepali",
        no: "Norwegian",
        ny: "Nyanja",
        nn: "Nynorsk",
        oc: "Occitan",
        oj: "Ojibwa",
        or: "Oriya",
        om: "Oromo",
        os: "Ossetian",
        pi: "Pali",
        ps: "Pushto",
        fa: "Persian",
        pl: "Polish",
        pt: "Portuguese",
        pa: "Panjabi",
        qu: "Quechua",
        ro: "Romanian",
        rm: "Romansh",
        rn: "Rundi",
        ru: "Russian",
        se: "Sami",
        sm: "Samoan",
        sg: "Sango",
        sa: "Sanskrit",
        sc: "Sardinian",
        sr: "Serbian",
        sn: "Shona",
        ii: "Sichuan Yi",
        sd: "Sindhi",
        si: "Sinhala",
        sk: "Slovak",
        sl: "Slovenian",
        so: "Somali",
        st: "Sotho",
        nr: "South Ndebele",
        es: "Spanish",
        su: "Sundanese",
        sw: "Swahili",
        ss: "Swati",
        sv: "Swedish",
        tl: "Tagalog",
        ty: "Tahitian",
        tg: "Tajik",
        ta: "Tamil",
        tt: "Tatar",
        te: "Telugu",
        th: "Thai",
        bo: "Tibetan",
        ti: "Tigrinya",
        to: "Tonga",
        ts: "Tsonga",
        tn: "Tswana",
        tr: "Turkish",
        tk: "Turkmen",
        tw: "Twi",
        ug: "Uyghur",
        uk: "Ukrainian",
        ur: "Urdu",
        uz: "Uzbek",
        ve: "Venda",
        vi: "Vietnamese",
        vo: "Volapük",
        wa: "Walloon",
        cy: "Welsh",
        wo: "Wolof",
        xh: "Xhosa",
        yi: "Yiddish",
        yo: "Yoruba",
        za: "Zhuang",
        zu: "Zulu",
    };
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_locale_select extends $.$mol_locale_select {
            value(next) {
                return this.$.$mol_locale.lang(next);
            }
            dictionary() {
                return this.$.$mol_lang_iso639;
            }
        }
        $$.$mol_locale_select = $mol_locale_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_icon_tick) = class $mol_icon_tick extends ($.$mol_icon) {
		path(){
			return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
		}
	};


;
"use strict";

;
	($.$mol_check_box) = class $mol_check_box extends ($.$mol_check) {
		Icon(){
			const obj = new this.$.$mol_icon_tick();
			return obj;
		}
	};
	($mol_mem(($.$mol_check_box.prototype), "Icon"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/box/box.view.css", "[mol_check_box_icon] {\n\tborder-radius: var(--mol_gap_round);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n\tcolor: var(--mol_theme_shade);\n\theight: 1rem;\n\talign-self: center;\n}\n\n[mol_check]:not([mol_check_checked]) > [mol_check_box_icon] {\n\tfill: transparent;\n}\n\n[mol_check]:not([disabled]) > [mol_check_box_icon] {\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_icon_chevron) = class $mol_icon_chevron extends ($.$mol_icon) {
		path(){
			return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
		}
	};


;
"use strict";

;
	($.$mol_icon_chevron_left) = class $mol_icon_chevron_left extends ($.$mol_icon) {
		path(){
			return "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_chevron_right) = class $mol_icon_chevron_right extends ($.$mol_icon) {
		path(){
			return "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";
		}
	};


;
"use strict";

;
	($.$mol_number) = class $mol_number extends ($.$mol_view) {
		precision(){
			return 1;
		}
		event_dec(next){
			if(next !== undefined) return next;
			return null;
		}
		event_inc(next){
			if(next !== undefined) return next;
			return null;
		}
		event_dec_boost(next){
			if(next !== undefined) return next;
			return null;
		}
		event_inc_boost(next){
			if(next !== undefined) return next;
			return null;
		}
		Hotkey(){
			const obj = new this.$.$mol_hotkey();
			(obj.key) = () => ({
				"down": (next) => (this.event_dec(next)), 
				"up": (next) => (this.event_inc(next)), 
				"pageDown": (next) => (this.event_dec_boost(next)), 
				"pageUp": (next) => (this.event_inc_boost(next))
			});
			return obj;
		}
		dec_enabled(){
			return (this.enabled());
		}
		dec_icon(){
			const obj = new this.$.$mol_icon_chevron_left();
			return obj;
		}
		Dec(){
			const obj = new this.$.$mol_button_minor();
			(obj.event_click) = (next) => ((this.event_dec(next)));
			(obj.enabled) = () => ((this.dec_enabled()));
			(obj.sub) = () => ([(this.dec_icon())]);
			return obj;
		}
		type(){
			return "text";
		}
		value_string(next){
			if(next !== undefined) return next;
			return "";
		}
		hint(){
			return " ";
		}
		string_enabled(){
			return (this.enabled());
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		String(){
			const obj = new this.$.$mol_string();
			(obj.type) = () => ((this.type()));
			(obj.keyboard) = () => ("decimal");
			(obj.value) = (next) => ((this.value_string(next)));
			(obj.hint) = () => ((this.hint()));
			(obj.enabled) = () => ((this.string_enabled()));
			(obj.submit) = (next) => ((this.submit(next)));
			return obj;
		}
		inc_enabled(){
			return (this.enabled());
		}
		inc_icon(){
			const obj = new this.$.$mol_icon_chevron_right();
			return obj;
		}
		Inc(){
			const obj = new this.$.$mol_button_minor();
			(obj.event_click) = (next) => ((this.event_inc(next)));
			(obj.enabled) = () => ((this.inc_enabled()));
			(obj.sub) = () => ([(this.inc_icon())]);
			return obj;
		}
		precision_view(){
			return (this.precision());
		}
		precision_change(){
			return (this.precision());
		}
		boost(){
			return 10;
		}
		value_min(){
			return -Infinity;
		}
		value_max(){
			return +Infinity;
		}
		value(next){
			if(next !== undefined) return next;
			return +NaN;
		}
		enabled(){
			return true;
		}
		plugins(){
			return [(this.Hotkey())];
		}
		sub(){
			return [
				(this.Dec()), 
				(this.String()), 
				(this.Inc())
			];
		}
	};
	($mol_mem(($.$mol_number.prototype), "event_dec"));
	($mol_mem(($.$mol_number.prototype), "event_inc"));
	($mol_mem(($.$mol_number.prototype), "event_dec_boost"));
	($mol_mem(($.$mol_number.prototype), "event_inc_boost"));
	($mol_mem(($.$mol_number.prototype), "Hotkey"));
	($mol_mem(($.$mol_number.prototype), "dec_icon"));
	($mol_mem(($.$mol_number.prototype), "Dec"));
	($mol_mem(($.$mol_number.prototype), "value_string"));
	($mol_mem(($.$mol_number.prototype), "submit"));
	($mol_mem(($.$mol_number.prototype), "String"));
	($mol_mem(($.$mol_number.prototype), "inc_icon"));
	($mol_mem(($.$mol_number.prototype), "Inc"));
	($mol_mem(($.$mol_number.prototype), "value"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/number/number.css", "[mol_number] {\n\tdisplay: flex;\n\tflex: 0 1 auto;\n\tposition: relative;\n\talign-items: stretch;\n\tmax-width: 100%;\n}\n\n[mol_number_string] {\n\tappearance: textfield;\n\tflex: 1 1 7rem;\n\twidth: 7rem;\n}\n\n[mol_number_string]::-webkit-inner-spin-button {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_number extends $.$mol_number {
            value_limited(val) {
                if (Number.isNaN(val))
                    return this.value(val);
                if (val === undefined)
                    return this.value();
                const min = this.value_min();
                const max = this.value_max();
                if (val < min)
                    return this.value(min);
                if (val > max)
                    return this.value(max);
                return this.value(val);
            }
            event_dec(next) {
                this.value_limited((this.value_limited() || 0) - this.precision_change());
                next?.preventDefault();
            }
            event_inc(next) {
                this.value_limited((this.value_limited() || 0) + this.precision_change());
                next?.preventDefault();
            }
            event_dec_boost(next) {
                this.value_limited((this.value_limited() || 0) - this.precision_change() * this.boost());
                next?.preventDefault();
            }
            event_inc_boost(next) {
                this.value_limited((this.value_limited() || 0) + this.precision_change() * this.boost());
                next?.preventDefault();
            }
            round(val) {
                if (Number.isNaN(val))
                    return '';
                if (val === 0)
                    return '0';
                if (!val)
                    return '';
                const precision_view = this.precision_view();
                if (!precision_view)
                    return val.toFixed();
                if (precision_view >= 1) {
                    return (val / precision_view).toFixed();
                }
                else {
                    const fixed_number = Math.log10(1 / precision_view);
                    return val.toFixed(Math.ceil(fixed_number));
                }
            }
            value_string(next) {
                const current = this.round(this.value_limited());
                if (next === undefined)
                    return current;
                const precision = this.precision_view();
                if (precision - Math.floor(precision) === 0)
                    next = next.replace(/[.,]/g, '');
                next = (this.value_min() < 0 && next.startsWith('-') ? '-' : '')
                    + next.replace(/,/g, '.').replace(/[^\d\.]/g, '').replace(/^0{2,}/, '0');
                let dot_pos = next.indexOf('.');
                if (dot_pos !== -1) {
                    const prev = $mol_wire_probe(() => this.value_string()) ?? '';
                    const dot_pos_prev = prev.indexOf('.');
                    if (dot_pos_prev === dot_pos)
                        dot_pos = next.lastIndexOf('.');
                    const frac = next.slice(dot_pos + 1).replace(/\./g, '');
                    next = (next.slice(0, dot_pos) || '0').replace(/\./g, '') + '.' + frac;
                }
                if (Number.isNaN(Number(next)))
                    return next;
                if (next.endsWith('.'))
                    return next;
                if (next.endsWith('-'))
                    return next;
                this.value_limited(Number(next || Number.NaN));
                return next;
            }
            dec_enabled() {
                return this.enabled() && (!((this.value() || 0) <= this.value_min()));
            }
            inc_enabled() {
                return this.enabled() && (!((this.value() || 0) >= this.value_max()));
            }
        }
        __decorate([
            $mol_mem
        ], $mol_number.prototype, "value_string", null);
        __decorate([
            $mol_mem
        ], $mol_number.prototype, "dec_enabled", null);
        __decorate([
            $mol_mem
        ], $mol_number.prototype, "inc_enabled", null);
        $$.$mol_number = $mol_number;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_icon_settings) = class $mol_icon_settings extends ($.$mol_icon) {
		path(){
			return "M12,15.5C10.07,15.5 8.5,13.93 8.5,12C8.5,10.07 10.07,8.5 12,8.5C13.93,8.5 15.5,10.07 15.5,12C15.5,13.93 13.93,15.5 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z";
		}
	};


;
"use strict";

;
	($.$bog_ainews_app_settings) = class $bog_ainews_app_settings extends ($.$bog_ainews_app_page) {
		Interface_language_select(){
			const obj = new this.$.$mol_locale_select();
			(obj.dictionary) = () => ({
				"ru": "Russian", 
				"en": "English", 
				"de": "Deutsch"
			});
			return obj;
		}
		Interface_language_labeler(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_settings_Interface_language_labeler_title")));
			(obj.content) = () => ([(this.Interface_language_select())]);
			return obj;
		}
		current_language_code(next){
			if(next !== undefined) return next;
			return "ru";
		}
		Translate_to_select(){
			const obj = new this.$.$mol_select();
			(obj.value) = (next) => ((this.current_language_code(next)));
			(obj.dictionary) = () => ((this.langs_list()));
			return obj;
		}
		Translate_to_labeler(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_settings_Translate_to_labeler_title")));
			(obj.content) = () => ([(this.Translate_to_select())]);
			return obj;
		}
		is_enable_auto_translate(next){
			if(next !== undefined) return next;
			return true;
		}
		Auto_translate(){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_settings_Auto_translate_title")));
			(obj.checked) = (next) => ((this.is_enable_auto_translate(next)));
			return obj;
		}
		Localization_labeler(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_settings_Localization_labeler_title")));
			(obj.content) = () => ([(this.Auto_translate())]);
			return obj;
		}
		description_count_limiter_value(next){
			if(next !== undefined) return next;
			return 256;
		}
		Description_count_limiter(){
			const obj = new this.$.$mol_number();
			(obj.value) = (next) => ((this.description_count_limiter_value(next)));
			(obj.precision_change) = () => (20);
			(obj.value_min) = () => (20);
			return obj;
		}
		Description_count_limiter_labeler(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_settings_Description_count_limiter_labeler_title")));
			(obj.content) = () => ([(this.Description_count_limiter())]);
			return obj;
		}
		auto_open_spoiler_check_box_value(next){
			if(next !== undefined) return next;
			return false;
		}
		Auto_open_spoiler_check_box(){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_settings_Auto_open_spoiler_check_box_title")));
			(obj.checked) = (next) => ((this.auto_open_spoiler_check_box_value(next)));
			return obj;
		}
		open_links_in_new_tabs_check_box_value(next){
			if(next !== undefined) return next;
			return true;
		}
		Open_links_in_new_tabs_check_box(){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_settings_Open_links_in_new_tabs_check_box_title")));
			(obj.checked) = (next) => ((this.open_links_in_new_tabs_check_box_value(next)));
			return obj;
		}
		Spoilers_labeler_list(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([(this.Auto_open_spoiler_check_box()), (this.Open_links_in_new_tabs_check_box())]);
			return obj;
		}
		Spoilers_labeler(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_settings_Spoilers_labeler_title")));
			(obj.content) = () => ([(this.Spoilers_labeler_list())]);
			return obj;
		}
		Install_button(){
			const obj = new this.$.$mol_button_major();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_settings_Install_button_title")));
			(obj.click) = (next) => ((this.install(next)));
			return obj;
		}
		Install_labeler(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_settings_Install_labeler_title")));
			(obj.content) = () => ([(this.Install_button())]);
			return obj;
		}
		current_language(){
			return "";
		}
		langs_list(){
			return {
				"ru": "Russian", 
				"en": "English", 
				"de": "Deutsch"
			};
		}
		title(){
			return (this.$.$mol_locale.text("$bog_ainews_app_settings_title"));
		}
		Logo(){
			const obj = new this.$.$mol_icon_settings();
			return obj;
		}
		install(next){
			if(next !== undefined) return next;
			return null;
		}
		install_ios_instruction(){
			return (this.$.$mol_locale.text("$bog_ainews_app_settings_install_ios_instruction"));
		}
		install_chrome_instruction(){
			return (this.$.$mol_locale.text("$bog_ainews_app_settings_install_chrome_instruction"));
		}
		install_edge_instruction(){
			return (this.$.$mol_locale.text("$bog_ainews_app_settings_install_edge_instruction"));
		}
		install_unsupported_browser(){
			return (this.$.$mol_locale.text("$bog_ainews_app_settings_install_unsupported_browser"));
		}
		install_already_installed(){
			return (this.$.$mol_locale.text("$bog_ainews_app_settings_install_already_installed"));
		}
		body(){
			return [
				(this.Interface_language_labeler()), 
				(this.Translate_to_labeler()), 
				(this.Localization_labeler()), 
				(this.Description_count_limiter_labeler()), 
				(this.Spoilers_labeler()), 
				(this.Install_labeler())
			];
		}
	};
	($mol_mem(($.$bog_ainews_app_settings.prototype), "Interface_language_select"));
	($mol_mem(($.$bog_ainews_app_settings.prototype), "Interface_language_labeler"));
	($mol_mem(($.$bog_ainews_app_settings.prototype), "current_language_code"));
	($mol_mem(($.$bog_ainews_app_settings.prototype), "Translate_to_select"));
	($mol_mem(($.$bog_ainews_app_settings.prototype), "Translate_to_labeler"));
	($mol_mem(($.$bog_ainews_app_settings.prototype), "is_enable_auto_translate"));
	($mol_mem(($.$bog_ainews_app_settings.prototype), "Auto_translate"));
	($mol_mem(($.$bog_ainews_app_settings.prototype), "Localization_labeler"));
	($mol_mem(($.$bog_ainews_app_settings.prototype), "description_count_limiter_value"));
	($mol_mem(($.$bog_ainews_app_settings.prototype), "Description_count_limiter"));
	($mol_mem(($.$bog_ainews_app_settings.prototype), "Description_count_limiter_labeler"));
	($mol_mem(($.$bog_ainews_app_settings.prototype), "auto_open_spoiler_check_box_value"));
	($mol_mem(($.$bog_ainews_app_settings.prototype), "Auto_open_spoiler_check_box"));
	($mol_mem(($.$bog_ainews_app_settings.prototype), "open_links_in_new_tabs_check_box_value"));
	($mol_mem(($.$bog_ainews_app_settings.prototype), "Open_links_in_new_tabs_check_box"));
	($mol_mem(($.$bog_ainews_app_settings.prototype), "Spoilers_labeler_list"));
	($mol_mem(($.$bog_ainews_app_settings.prototype), "Spoilers_labeler"));
	($mol_mem(($.$bog_ainews_app_settings.prototype), "Install_button"));
	($mol_mem(($.$bog_ainews_app_settings.prototype), "Install_labeler"));
	($mol_mem(($.$bog_ainews_app_settings.prototype), "Logo"));
	($mol_mem(($.$bog_ainews_app_settings.prototype), "install"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$bog_ainews_app_settings_font_size_value = () => $mol_state_local.value('font_size_value') ? $mol_state_local.value('font_size_value') + 'rem' : '0.4rem';
        class $bog_ainews_app_settings extends $.$bog_ainews_app_settings {
            is_enable_auto_translate(next) {
                if (next !== undefined)
                    return $mol_state_local.value('is_enable_auto_translate', next);
                return $mol_state_local.value('is_enable_auto_translate') ?? true;
            }
            description_count_limiter_value(next) {
                if (next !== undefined)
                    return $mol_state_local.value('description_count_limiter_value', next);
                return $mol_state_local.value('description_count_limiter_value') ?? 256;
            }
            current_language_code(next) {
                if (next !== undefined)
                    return $mol_state_local.value('current_language', next);
                return $mol_state_local.value('current_language') ?? 'ru';
            }
            current_language() {
                return this.langs_list()[this.current_language_code()];
            }
            auto_open_spoiler_check_box_value(next) {
                if (next !== undefined)
                    return $mol_state_local.value('auto_open_spoiler_check_box_value', next);
                return ($mol_state_local.value('auto_open_spoiler_check_box_value') ?? super.auto_open_spoiler_check_box_value());
            }
            open_links_in_new_tabs_check_box_value(next) {
                if (next !== undefined)
                    return $mol_state_local.value('open_links_in_new_tabs_check_box_value', next);
                return ($mol_state_local.value('open_links_in_new_tabs_check_box_value') ??
                    super.open_links_in_new_tabs_check_box_value());
            }
            deferredPrompt = null;
            auto() {
                super.auto();
                window.addEventListener('beforeinstallprompt', e => {
                    e.preventDefault();
                    this.deferredPrompt = e;
                });
            }
            install() {
                if (!this.deferredPrompt) {
                    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
                    const isDesktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    if (isIOS) {
                        alert(this.install_ios_instruction());
                    }
                    else if (isDesktop) {
                        const isChrome = navigator.userAgent.includes('Chrome') && !navigator.userAgent.includes('Edge');
                        const isEdge = navigator.userAgent.includes('Edge');
                        if (isChrome) {
                            alert(this.install_chrome_instruction());
                        }
                        else if (isEdge) {
                            alert(this.install_edge_instruction());
                        }
                        else {
                            alert(this.install_unsupported_browser());
                        }
                    }
                    else {
                        alert(this.install_already_installed());
                    }
                    return;
                }
                this.deferredPrompt.prompt();
                this.deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the install prompt');
                    }
                    this.deferredPrompt = null;
                });
            }
        }
        __decorate([
            $mol_mem
        ], $bog_ainews_app_settings.prototype, "is_enable_auto_translate", null);
        __decorate([
            $mol_mem
        ], $bog_ainews_app_settings.prototype, "description_count_limiter_value", null);
        __decorate([
            $mol_mem
        ], $bog_ainews_app_settings.prototype, "current_language_code", null);
        __decorate([
            $mol_mem
        ], $bog_ainews_app_settings.prototype, "current_language", null);
        __decorate([
            $mol_mem
        ], $bog_ainews_app_settings.prototype, "auto_open_spoiler_check_box_value", null);
        __decorate([
            $mol_mem
        ], $bog_ainews_app_settings.prototype, "open_links_in_new_tabs_check_box_value", null);
        __decorate([
            $mol_action
        ], $bog_ainews_app_settings.prototype, "install", null);
        $$.$bog_ainews_app_settings = $bog_ainews_app_settings;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($bog_ainews_app_settings, {});
})($ || ($ = {}));

;
	($.$mol_icon_script) = class $mol_icon_script extends ($.$mol_icon) {
		path(){
			return "M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18H5L14.2,18C14.6,19.2 15.7,20 17,20H17.8M19,2H8C6.3,2 5,3.3 5,5V16H16V17C16,17.6 16.4,18 17,18H18V5C18,4.4 18.4,4 19,4C19.6,4 20,4.4 20,5V6H22V5C22,3.3 20.7,2 19,2Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_script_text) = class $mol_icon_script_text extends ($.$mol_icon) {
		path(){
			return "M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18H5L14.2,18C14.6,19.2 15.7,20 17,20H17.8M19,2C20.7,2 22,3.3 22,5V6H20V5C20,4.4 19.6,4 19,4C18.4,4 18,4.4 18,5V18H17C16.4,18 16,17.6 16,17V16H5V5C5,3.3 6.3,2 8,2H19M8,6V8H15V6H8M8,10V12H14V10H8Z";
		}
	};


;
"use strict";

;
	($.$mol_check_expand) = class $mol_check_expand extends ($.$mol_check) {
		level_style(){
			return "0px";
		}
		expanded(next){
			if(next !== undefined) return next;
			return false;
		}
		expandable(){
			return false;
		}
		Icon(){
			const obj = new this.$.$mol_icon_chevron();
			return obj;
		}
		level(){
			return 0;
		}
		style(){
			return {...(super.style()), "paddingLeft": (this.level_style())};
		}
		checked(next){
			return (this.expanded(next));
		}
		enabled(){
			return (this.expandable());
		}
	};
	($mol_mem(($.$mol_check_expand.prototype), "expanded"));
	($mol_mem(($.$mol_check_expand.prototype), "Icon"));


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n\tmin-width: 20px;\n}\n\n:where([mol_check_expand][disabled]) [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n\tmargin-left: -0.375rem;\n}\n[mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n:where([mol_check_checked]) [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-left: 0;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_expander) = class $mol_expander extends ($.$mol_list) {
		expanded(next){
			if(next !== undefined) return next;
			return false;
		}
		expandable(){
			return true;
		}
		label(){
			return [(this.title())];
		}
		Trigger(){
			const obj = new this.$.$mol_check_expand();
			(obj.checked) = (next) => ((this.expanded(next)));
			(obj.expandable) = () => ((this.expandable()));
			(obj.label) = () => ((this.label()));
			return obj;
		}
		Tools(){
			return null;
		}
		Label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Trigger()), (this.Tools())]);
			return obj;
		}
		content(){
			return [];
		}
		Content(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.content()));
			return obj;
		}
		rows(){
			return [(this.Label()), (this.Content())];
		}
	};
	($mol_mem(($.$mol_expander.prototype), "expanded"));
	($mol_mem(($.$mol_expander.prototype), "Trigger"));
	($mol_mem(($.$mol_expander.prototype), "Label"));
	($mol_mem(($.$mol_expander.prototype), "Content"));


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_expander extends $.$mol_expander {
            rows() {
                return [
                    this.Label(),
                    ...this.expanded() ? [this.Content()] : []
                ];
            }
            expandable() {
                return this.content().length > 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_expander.prototype, "rows", null);
        $$.$mol_expander = $mol_expander;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/expander/expander.view.css", "[mol_expander] {\n\tflex-direction: column;\n}\n\n[mol_expander_label] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_expander_trigger] {\n\tflex: auto;\n\tposition: relative;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$bog_ainews_app_feed) = class $bog_ainews_app_feed extends ($.$bog_ainews_app_page) {
		summary_all_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Summary_all_button(){
			const obj = new this.$.$mol_button_major();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_feed_Summary_all_button_title")));
			(obj.click) = (next) => ((this.summary_all_click(next)));
			return obj;
		}
		summary_all_showed(next){
			if(next !== undefined) return next;
			return false;
		}
		summary_all_close_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Summary_all_close(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_feed_Summary_all_close_title")));
			(obj.click) = (next) => ((this.summary_all_close_click(next)));
			return obj;
		}
		summary_all_result(){
			return "";
		}
		Summary_all_text(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ((this.summary_all_result()));
			return obj;
		}
		Summary_all_content(){
			const obj = new this.$.$mol_page();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_feed_Summary_all_content_title")));
			(obj.tools) = () => ([(this.Summary_all_close())]);
			(obj.body) = () => ([(this.Summary_all_text())]);
			return obj;
		}
		Summary_all_pop(){
			const obj = new this.$.$mol_pop();
			(obj.showed) = (next) => ((this.summary_all_showed(next)));
			(obj.Anchor) = () => ((this.Summary_all_button()));
			(obj.bubble_content) = () => ([(this.Summary_all_content())]);
			return obj;
		}
		search_word(next){
			if(next !== undefined) return next;
			return "";
		}
		Searcher(){
			const obj = new this.$.$mol_search();
			(obj.query) = (next) => ((this.search_word(next)));
			return obj;
		}
		Hot_fix(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Searcher())]);
			return obj;
		}
		Categories(){
			return [];
		}
		Tabs(){
			const obj = new this.$.$mol_deck();
			(obj.items) = () => ((this.Categories()));
			return obj;
		}
		Welcome_block_p1_paragraph(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_feed_Welcome_block_p1_paragraph_title")));
			(obj.dom_name) = () => ("h4");
			return obj;
		}
		Welcome_block_p2_paragraph(){
			const obj = new this.$.$mol_link();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_feed_Welcome_block_p2_paragraph_title")));
			(obj.uri) = () => ("#!=sources");
			return obj;
		}
		Welcome_block_p2(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Welcome_block_p2_paragraph())]);
			return obj;
		}
		Welcome_block(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([(this.Welcome_block_p1_paragraph()), (this.Welcome_block_p2())]);
			return obj;
		}
		category_title(id){
			return "blank category title";
		}
		category_summary_click(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Category_summary_button(id){
			const obj = new this.$.$mol_button_major();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_feed_Category_summary_button_title")));
			(obj.click) = (next) => ((this.category_summary_click(id, next)));
			return obj;
		}
		category_summary_showed(id, next){
			if(next !== undefined) return next;
			return false;
		}
		category_summary_close_click(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Category_summary_close(id){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_feed_Category_summary_close_title")));
			(obj.click) = (next) => ((this.category_summary_close_click(id, next)));
			return obj;
		}
		category_summary_result(id){
			return "";
		}
		Category_summary_text(id){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ((this.category_summary_result(id)));
			return obj;
		}
		Category_summary_content(id){
			const obj = new this.$.$mol_page();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_feed_Category_summary_content_title")));
			(obj.tools) = () => ([(this.Category_summary_close(id))]);
			(obj.body) = () => ([(this.Category_summary_text(id))]);
			return obj;
		}
		Category_summary_pop(id){
			const obj = new this.$.$mol_pop();
			(obj.showed) = (next) => ((this.category_summary_showed(id, next)));
			(obj.Anchor) = () => ((this.Category_summary_button(id)));
			(obj.bubble_content) = () => ([(this.Category_summary_content(id))]);
			return obj;
		}
		articles(id){
			return [];
		}
		Items(id){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.articles(id)));
			return obj;
		}
		openned_post(id, next){
			if(next !== undefined) return next;
			return false;
		}
		article_title(id){
			return "";
		}
		article_image_src(id){
			return [];
		}
		Article_thumbnail(id){
			const obj = new this.$.$bog_ainews_app_feed_img();
			(obj.src) = () => ((this.article_image_src(id)));
			(obj.alt) = () => ((this.article_title(id)));
			(obj.width) = () => (192);
			(obj.height) = () => (108);
			return obj;
		}
		summary_description_click(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Article_description_summary_button(id){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_feed_Article_description_summary_button_title")));
			(obj.click) = (next) => ((this.summary_description_click(id, next)));
			return obj;
		}
		article_description(id){
			return "";
		}
		Article_description(id){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ((this.article_description(id)));
			return obj;
		}
		open_in_new_tab(id){
			return "_self";
		}
		article_link(id){
			return "";
		}
		Article_link(id){
			const obj = new this.$.$mol_link();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_feed_Article_link_title")));
			(obj.target) = () => ((this.open_in_new_tab(id)));
			(obj.uri_toggle) = () => ((this.article_link(id)));
			return obj;
		}
		article_translated_link(id){
			return "";
		}
		Article_translated_link(id){
			const obj = new this.$.$mol_link();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_feed_Article_translated_link_title")));
			(obj.target) = () => ((this.open_in_new_tab(id)));
			(obj.uri_toggle) = () => ((this.article_translated_link(id)));
			return obj;
		}
		translate_click(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Article_translate_text(id){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_feed_Article_translate_text_title")));
			(obj.click) = (next) => ((this.translate_click(id, next)));
			return obj;
		}
		Base_icon(id){
			const obj = new this.$.$mol_icon_cards_heart();
			return obj;
		}
		base_checked(id, next){
			if(next !== undefined) return next;
			return false;
		}
		Favorite(id){
			const obj = new this.$.$mol_check_icon();
			(obj.Icon) = () => ((this.Base_icon(id)));
			(obj.checked) = (next) => ((this.base_checked(id, next)));
			return obj;
		}
		Spoiler_tools(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Article_link(id)), 
				(this.Article_translated_link(id)), 
				(this.Article_translate_text(id)), 
				(this.Favorite(id))
			]);
			return obj;
		}
		app_filters(){
			const obj = new this.$.$bog_ainews_app_filters();
			return obj;
		}
		app_settings(){
			const obj = new this.$.$bog_ainews_app_settings();
			return obj;
		}
		app_source(){
			const obj = new this.$.$bog_ainews_app_sources();
			return obj;
		}
		app_favorites(){
			const obj = new this.$.$bog_ainews_app_favorites();
			return obj;
		}
		title(){
			return (this.$.$mol_locale.text("$bog_ainews_app_feed_title"));
		}
		Logo(){
			const obj = new this.$.$mol_icon_script_text();
			return obj;
		}
		tools(){
			return [(this.Summary_all_button()), (this.Summary_all_pop())];
		}
		body(){
			return [
				(this.Hot_fix()), 
				(this.Tabs()), 
				(this.Welcome_block())
			];
		}
		Category_page(id){
			const obj = new this.$.$mol_list();
			(obj.title) = () => ((this.category_title(id)));
			(obj.rows) = () => ([
				(this.Category_summary_button(id)), 
				(this.Category_summary_pop(id)), 
				(this.Items(id))
			]);
			return obj;
		}
		Article(id){
			const obj = new this.$.$mol_expander();
			(obj.expanded) = (next) => ((this.openned_post(id, next)));
			(obj.label) = () => ([(this.article_title(id))]);
			(obj.content) = () => ([
				(this.Article_thumbnail(id)), 
				(this.Article_description_summary_button(id)), 
				(this.Article_description(id))
			]);
			(obj.Tools) = () => ((this.Spoiler_tools(id)));
			return obj;
		}
	};
	($mol_mem(($.$bog_ainews_app_feed.prototype), "summary_all_click"));
	($mol_mem(($.$bog_ainews_app_feed.prototype), "Summary_all_button"));
	($mol_mem(($.$bog_ainews_app_feed.prototype), "summary_all_showed"));
	($mol_mem(($.$bog_ainews_app_feed.prototype), "summary_all_close_click"));
	($mol_mem(($.$bog_ainews_app_feed.prototype), "Summary_all_close"));
	($mol_mem(($.$bog_ainews_app_feed.prototype), "Summary_all_text"));
	($mol_mem(($.$bog_ainews_app_feed.prototype), "Summary_all_content"));
	($mol_mem(($.$bog_ainews_app_feed.prototype), "Summary_all_pop"));
	($mol_mem(($.$bog_ainews_app_feed.prototype), "search_word"));
	($mol_mem(($.$bog_ainews_app_feed.prototype), "Searcher"));
	($mol_mem(($.$bog_ainews_app_feed.prototype), "Hot_fix"));
	($mol_mem(($.$bog_ainews_app_feed.prototype), "Tabs"));
	($mol_mem(($.$bog_ainews_app_feed.prototype), "Welcome_block_p1_paragraph"));
	($mol_mem(($.$bog_ainews_app_feed.prototype), "Welcome_block_p2_paragraph"));
	($mol_mem(($.$bog_ainews_app_feed.prototype), "Welcome_block_p2"));
	($mol_mem(($.$bog_ainews_app_feed.prototype), "Welcome_block"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "category_summary_click"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "Category_summary_button"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "category_summary_showed"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "category_summary_close_click"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "Category_summary_close"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "Category_summary_text"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "Category_summary_content"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "Category_summary_pop"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "Items"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "openned_post"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "Article_thumbnail"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "summary_description_click"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "Article_description_summary_button"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "Article_description"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "Article_link"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "Article_translated_link"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "translate_click"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "Article_translate_text"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "Base_icon"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "base_checked"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "Favorite"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "Spoiler_tools"));
	($mol_mem(($.$bog_ainews_app_feed.prototype), "app_filters"));
	($mol_mem(($.$bog_ainews_app_feed.prototype), "app_settings"));
	($mol_mem(($.$bog_ainews_app_feed.prototype), "app_source"));
	($mol_mem(($.$bog_ainews_app_feed.prototype), "app_favorites"));
	($mol_mem(($.$bog_ainews_app_feed.prototype), "Logo"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "Category_page"));
	($mol_mem_key(($.$bog_ainews_app_feed.prototype), "Article"));
	($.$bog_ainews_app_feed_title) = class $bog_ainews_app_feed_title extends ($.$mol_paragraph) {
		font_size_title(){
			return "1.22rem";
		}
		style(){
			return {...(super.style()), "font-size": (this.font_size_title())};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$bog_ainews_app_feed_proxy_url = 'https://proxy.kinsle.ru/proxy';
        $$.$bog_ainews_app_feed_translate_url = 'https://proxy.kinsle.ru/translate';
        $$.$bog_ainews_app_feed_summary_url = 'https://proxy.kinsle.ru/summary';
        class $bog_ainews_app_feed extends $.$bog_ainews_app_feed {
            translate_text(text, to_lang = this.app_settings().current_language()) {
                if (!navigator.onLine)
                    return text;
                const payload = new URLSearchParams({
                    text: text.substring(0, 512),
                    to_lang,
                });
                return $mol_fetch.text($$.$bog_ainews_app_feed_translate_url + '?' + payload.toString());
            }
            summary_text(text, to_lang = this.app_settings().current_language()) {
                if (!navigator.onLine)
                    return text;
                const payload = new URLSearchParams({
                    text: text.substring(0, 1024),
                    to_lang,
                });
                return $mol_fetch.text($$.$bog_ainews_app_feed_summary_url + '?' + payload.toString());
            }
            parse_rss(xml_doc) {
                return Array.from(xml_doc.querySelectorAll('item')).map((item) => {
                    const enclosure = item.querySelector('enclosure');
                    const mediaContent = item.querySelector('media\\:content, content');
                    const mediaThumbnail = item.querySelector('media\\:thumbnail, thumbnail');
                    const description = item.querySelector('description')?.textContent || '';
                    let image_src = enclosure?.getAttribute('url') ||
                        mediaContent?.getAttribute('url') ||
                        mediaThumbnail?.getAttribute('url') ||
                        '';
                    if (!image_src && description) {
                        const imgMatch = description.match(/<img[^>]+src=["']([^"']+)["']/i);
                        if (imgMatch) {
                            image_src = imgMatch[1];
                        }
                    }
                    if (!image_src && description) {
                        const linkMatch = description.match(/<a[^>]+href=["']([^"']+\.(jpg|jpeg|png|gif|webp))["']/i);
                        if (linkMatch) {
                            image_src = linkMatch[1];
                        }
                    }
                    return {
                        title: item.querySelector('title')?.textContent,
                        pubDate: item.querySelector('pubDate')?.textContent,
                        description: description,
                        link: item.querySelector('link')?.textContent,
                        image_src: image_src,
                    };
                });
            }
            cache_image(url) {
                if (!url)
                    return url;
                const cached = $mol_state_local.value(`img_cache_${url}`);
                if (cached)
                    return cached;
                try {
                    $mol_wire_solid();
                    const response = $mol_fetch.response(url);
                    const arrayBuffer = response.buffer();
                    const buffer = new Uint8Array(arrayBuffer);
                    let binary = '';
                    const len = buffer.length;
                    for (let i = 0; i < len; i++) {
                        binary += String.fromCharCode(buffer[i]);
                    }
                    const base64 = 'data:image/jpeg;base64,' + btoa(binary);
                    const cache_list_key = 'img_cache_list';
                    const cache_list = $mol_state_local.value(cache_list_key) || [];
                    const updated_list = [url, ...cache_list.filter(u => u !== url)].slice(0, 30);
                    cache_list.forEach(old_url => {
                        if (!updated_list.includes(old_url)) {
                            $mol_state_local.value(`img_cache_${old_url}`, null);
                        }
                    });
                    $mol_state_local.value(cache_list_key, updated_list);
                    $mol_state_local.value(`img_cache_${url}`, base64);
                    return base64;
                }
                catch (e) {
                    return url;
                }
            }
            make_proxy(url) {
                return $$.$bog_ainews_app_feed_proxy_url + url;
            }
            make_translate(text) {
                return $$.$bog_ainews_app_feed_translate_url + decodeURIComponent(text.substring(0, 256));
            }
            articles(category) {
                const selected_sources = this.sources(category).map((url_id) => this.app_source().runtime_links()[category][url_id] ?? url_id);
                return selected_sources.map((rss_link) => this.get_articles_from_sources(rss_link)).flat();
            }
            request_articles_from_sources(source_url) {
                $mol_wire_solid();
                const cached = $mol_state_local.value(`feed_cache_${source_url}`);
                if (cached) {
                    try {
                        const cache_data = JSON.parse(cached);
                        const cache_time = cache_data.timestamp || 0;
                        const now = Date.now();
                        const cache_ttl = 60 * 60 * 1000;
                        if (now - cache_time < cache_ttl) {
                            return cache_data.articles;
                        }
                    }
                    catch (e) {
                    }
                }
                const payload = new URLSearchParams({
                    link: source_url,
                });
                const xml_doc = $mol_fetch.xml($$.$bog_ainews_app_feed_proxy_url + '?' + payload.toString());
                const articles_list = this.parse_rss(xml_doc);
                const feed_cache_list_key = 'feed_cache_list';
                const feed_cache_list = $mol_state_local.value(feed_cache_list_key) || [];
                const updated_feed_list = [source_url, ...feed_cache_list.filter(u => u !== source_url)].slice(0, 20);
                feed_cache_list.forEach(old_url => {
                    if (!updated_feed_list.includes(old_url)) {
                        $mol_state_local.value(`feed_cache_${old_url}`, null);
                    }
                });
                $mol_state_local.value(feed_cache_list_key, updated_feed_list);
                const cache_data = {
                    timestamp: Date.now(),
                    articles: articles_list,
                };
                $mol_state_local.value(`feed_cache_${source_url}`, JSON.stringify(cache_data));
                return articles_list;
            }
            get_articles_from_sources(source_url) {
                const articles_list = this.request_articles_from_sources(source_url);
                const filtered_list = this.filter_articles(articles_list);
                return filtered_list.map((article) => this.Article(article));
            }
            filter_articles(articles_list) {
                const include_string_value = this.app_filters().include_string_value();
                const exclude_string_value = this.app_filters().exclude_string_value();
                if (include_string_value !== null && include_string_value.trim() !== '') {
                    const rules = include_string_value
                        .split(',')
                        .map(rule => rule.trim())
                        .filter(rule => rule.trim() != '');
                    articles_list = articles_list.filter((article) => {
                        return rules.some(rule => {
                            return new RegExp(rule, 'ig').test(article.title);
                        });
                    });
                }
                if (exclude_string_value !== null && exclude_string_value.trim() !== '') {
                    const rules = exclude_string_value
                        .split(',')
                        .map(rule => rule.trim())
                        .filter(rule => rule.trim() != '');
                    console.log({ rules, exclude_string_value });
                    articles_list = articles_list.filter((article) => {
                        return (rules.some(rule => {
                            console.log({ rule });
                            return new RegExp(rule, 'ig').test(article.title);
                        }) == false);
                    });
                }
                if (this.search_word().trim() !== '')
                    return articles_list.filter((item) => new RegExp(this.search_word(), 'ig').test(item.title));
                return articles_list;
            }
            is_need_translate(text) {
                function remove_from_string(words, str) {
                    return words.reduce((result, word) => result.replace(new RegExp(word, 'gi'), ''), str);
                }
                const cyrillic_pattern = /^\p{Script=Cyrillic}+$/u;
                let text_without_numbers = text.replace(/[\p{P}\d]+/gu, '');
                text_without_numbers = remove_from_string([
                    'KDE',
                    'Plasma',
                    'linux',
                    'bsd',
                    'router',
                    'project',
                    'Android',
                    'Chrome',
                    'Postgre',
                    'elementary',
                    'Ubuntu',
                    ' ',
                ], text_without_numbers);
                const russian_chars = Array.from(text_without_numbers).filter(char => cyrillic_pattern.test(char)).length;
                const length = text_without_numbers.length;
                const persent_of_cyrilic_in_text = (russian_chars / length) * 100;
                return persent_of_cyrilic_in_text < 55;
            }
            force_translate(article, next) {
                if (next !== undefined)
                    return next;
                return false;
            }
            article_title(article) {
                const should_translate = (this.app_settings().is_enable_auto_translate() && this.is_need_translate(article.title)) ||
                    this.force_translate(article);
                if (should_translate) {
                    return this.translate_text(article.title);
                }
                return article.title;
            }
            article_description(article) {
                function strip_html_tags(html) {
                    let doc = new DOMParser().parseFromString(html, 'text/html');
                    return doc.body.textContent || '';
                }
                const description_count_limiter_value = this.app_settings().description_count_limiter_value();
                const description_without_html_tags = strip_html_tags(article.description);
                const description_limited = description_without_html_tags.substring(0, description_count_limiter_value);
                if (this.force_summary(article)) {
                    return this.summary_text(description_without_html_tags);
                }
                const should_translate = (this.app_settings().is_enable_auto_translate() &&
                    this.is_need_translate(description_without_html_tags)) ||
                    this.force_translate(article);
                if (should_translate) {
                    return this.translate_text(description_without_html_tags);
                }
                else {
                    return description_limited;
                }
            }
            article_link(article) {
                return article.link;
            }
            article_image_src(article) {
                const src = article.image_src || '';
                if (src.trim().length === 0)
                    return [];
                if (src.includes('.mp4') || src.includes('/mp4/') || src.includes('format/mp4')) {
                    return [];
                }
                const cached = this.cache_image(src);
                return cached ? [cached] : [];
            }
            article_translated_link(article) {
                return `https://translate.google.com/translate?sl=auto&tl=ru-RU&u=${encodeURIComponent(article.link)}`;
            }
            article_translate_enable() {
                return !this.app_settings().is_enable_auto_translate();
            }
            translate_click(article, next) {
                if (next && navigator.onLine) {
                    this.force_translate(article, true);
                }
                return next;
            }
            summary_description_click(article, next) {
                if (next) {
                    this.force_summary(article, true);
                }
                return next;
            }
            force_summary(article, next) {
                if (next !== undefined)
                    return next;
                return false;
            }
            sources(id, next) {
                if (next !== undefined)
                    return $mol_state_local.value(id, next);
                return $mol_state_local.value(id) ?? [];
            }
            Categories() {
                return Object.keys(this.app_source().runtime_links())
                    .filter(category => $mol_state_local.value(category) != null &&
                    $mol_state_local.value(category).length > 0)
                    .map(category => this.Category_page(category));
            }
            category_title(category) {
                return category;
            }
            openned_post(id, next) {
                if (this.app_settings().auto_open_spoiler_check_box_value()) {
                    return true;
                }
                if (next !== undefined)
                    return next;
                return false;
            }
            open_in_new_tab(id, next) {
                if (this.app_settings().open_links_in_new_tabs_check_box_value()) {
                    return '_blank';
                }
                return '_self';
            }
            body() {
                if (this.Categories().length == 0) {
                    return [this.Welcome_block()];
                }
                else {
                    return [this.Hot_fix(), this.Tabs()];
                }
            }
            Spoiler_tools(id) {
                const obj = new this.$.$mol_view();
                obj.sub = () => [
                    this.Article_link(id),
                    this.Article_translated_link(id),
                    this.is_need_translate(id.title) ? this.Article_translate_text(id) : null,
                    this.Favorite(id),
                ];
                return obj;
            }
            base_checked(id, next) {
                if (next !== undefined) {
                    if (next == true)
                        this.app_favorites().add_post(id);
                    if (next == false)
                        this.app_favorites().remove_post(id);
                    return next;
                }
                return this.app_favorites().posts().includes(id);
            }
            summary_all_click(next) {
                if (next) {
                    this.summary_all_showed(!this.summary_all_showed());
                }
                return next;
            }
            summary_all_close_click(next) {
                if (next) {
                    this.summary_all_showed(false);
                }
                return next;
            }
            summary_all_result() {
                if (!this.summary_all_showed())
                    return '';
                const all_categories = Object.keys(this.app_source().runtime_links()).filter(category => $mol_state_local.value(category) != null &&
                    $mol_state_local.value(category).length > 0);
                const raw_articles = [];
                all_categories.forEach((category) => {
                    const selected_sources = this.sources(category).map((url_id) => this.app_source().runtime_links()[category][url_id] ?? url_id);
                    selected_sources.forEach((rss_link) => {
                        const articles_from_source = this.request_articles_from_sources(rss_link);
                        const filtered = this.filter_articles(articles_from_source);
                        raw_articles.push(...filtered);
                    });
                });
                const texts = raw_articles
                    .map((article) => {
                    const title = article.title || '';
                    const description = article.description || '';
                    return `${title}\n${description}`.substring(0, 500);
                })
                    .join('\n\n');
                if (!navigator.onLine)
                    return 'No internet connection';
                if (texts.length === 0)
                    return 'No news for summary';
                return this.summary_text(texts.substring(0, 10000));
            }
            category_summary_click(category, next) {
                if (next) {
                    this.category_summary_showed(category, !this.category_summary_showed(category));
                }
                return next;
            }
            category_summary_close_click(category, next) {
                if (next) {
                    this.category_summary_showed(category, false);
                }
                return next;
            }
            category_summary_text(category, text) {
                if (!navigator.onLine)
                    return text;
                const to_lang = this.app_settings().current_language();
                const payload = new URLSearchParams({
                    text: text.substring(0, 1000),
                    to_lang,
                });
                const url = $$.$bog_ainews_app_feed_summary_url + '?' + payload.toString();
                const result = $mol_fetch.text(url);
                return result;
            }
            category_summary_result(category) {
                if (!this.category_summary_showed(category))
                    return '';
                const selected_sources = this.sources(category).map((url_id) => this.app_source().runtime_links()[category][url_id] ?? url_id);
                const raw_articles = [];
                selected_sources.forEach((rss_link) => {
                    const articles_from_source = this.request_articles_from_sources(rss_link);
                    const filtered = this.filter_articles(articles_from_source);
                    raw_articles.push(...filtered);
                });
                const texts = raw_articles
                    .map((article) => {
                    const title = article.title || '';
                    const description = article.description || '';
                    return `${title}\n${description}`.substring(0, 500);
                })
                    .join('\n\n');
                if (!navigator.onLine)
                    return 'No internet connection';
                if (texts.length === 0)
                    return 'No news for summary';
                return this.category_summary_text(category, texts);
            }
        }
        __decorate([
            $mol_mem_key
        ], $bog_ainews_app_feed.prototype, "translate_text", null);
        __decorate([
            $mol_mem_key
        ], $bog_ainews_app_feed.prototype, "cache_image", null);
        __decorate([
            $mol_mem_key
        ], $bog_ainews_app_feed.prototype, "request_articles_from_sources", null);
        __decorate([
            $mol_mem_key
        ], $bog_ainews_app_feed.prototype, "get_articles_from_sources", null);
        __decorate([
            $mol_mem_key
        ], $bog_ainews_app_feed.prototype, "force_translate", null);
        __decorate([
            $mol_mem_key
        ], $bog_ainews_app_feed.prototype, "article_title", null);
        __decorate([
            $mol_mem_key
        ], $bog_ainews_app_feed.prototype, "article_description", null);
        __decorate([
            $mol_action
        ], $bog_ainews_app_feed.prototype, "summary_description_click", null);
        __decorate([
            $mol_mem_key
        ], $bog_ainews_app_feed.prototype, "force_summary", null);
        __decorate([
            $mol_mem_key
        ], $bog_ainews_app_feed.prototype, "sources", null);
        __decorate([
            $mol_mem_key
        ], $bog_ainews_app_feed.prototype, "openned_post", null);
        __decorate([
            $mol_mem_key
        ], $bog_ainews_app_feed.prototype, "open_in_new_tab", null);
        __decorate([
            $mol_mem
        ], $bog_ainews_app_feed.prototype, "Spoiler_tools", null);
        __decorate([
            $mol_mem_key
        ], $bog_ainews_app_feed.prototype, "base_checked", null);
        __decorate([
            $mol_action
        ], $bog_ainews_app_feed.prototype, "summary_all_click", null);
        __decorate([
            $mol_action
        ], $bog_ainews_app_feed.prototype, "summary_all_close_click", null);
        __decorate([
            $mol_mem
        ], $bog_ainews_app_feed.prototype, "summary_all_result", null);
        __decorate([
            $mol_action
        ], $bog_ainews_app_feed.prototype, "category_summary_click", null);
        __decorate([
            $mol_action
        ], $bog_ainews_app_feed.prototype, "category_summary_close_click", null);
        __decorate([
            $mol_mem_key
        ], $bog_ainews_app_feed.prototype, "category_summary_text", null);
        __decorate([
            $mol_mem_key
        ], $bog_ainews_app_feed.prototype, "category_summary_result", null);
        $$.$bog_ainews_app_feed = $bog_ainews_app_feed;
        class $bog_ainews_app_feed_title extends $.$bog_ainews_app_feed_title {
            font_size_title() {
                return $bog_ainews_app_settings_font_size_value();
            }
        }
        $$.$bog_ainews_app_feed_title = $bog_ainews_app_feed_title;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($bog_ainews_app_feed, {
        Article: {
            background: {
                color: $mol_theme.card,
            },
            border: {
                radius: rem(0.75),
            },
            padding: rem(0.5),
            margin: {
                bottom: rem(0.7),
            },
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            ':hover': {
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                transform: 'translateY(-2px)',
                transition: 'all 0.2s ease',
            },
        },
        Article_description: {
            font: {
                size: rem(0.875),
            },
            lineHeight: '1.5',
            color: $mol_theme.text,
            margin: {
                bottom: rem(1),
            },
        },
        Article_link: {
            font: {
                size: rem(0.75),
            },
            color: $mol_theme.shade,
            textDecoration: 'none',
            ':hover': {
                textDecoration: 'underline',
            },
        },
        Article_translated_link: {
            font: {
                size: rem(0.75),
            },
            color: $mol_theme.shade,
            textDecoration: 'none',
            margin: {
                left: rem(1),
            },
            ':hover': {
                textDecoration: 'underline',
            },
        },
        Article_translate_text: {
            font: {
                size: rem(0.75),
            },
            color: $mol_theme.shade,
            margin: {
                left: rem(1),
            },
            ':hover': {
                textDecoration: 'underline',
            },
        },
        Article_description_summary_button: {
            color: $mol_theme.shade,
        },
        Category_summary_content: {
            maxWidth: '65vw',
            maxHeight: '80vh',
            width: 'fit-content',
            height: 'fit-content',
        },
        Category_summary_text: {
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            whiteSpace: 'pre-wrap',
            maxWidth: '100%',
        },
        Summary_all_content: {
            maxWidth: '65vw',
            maxHeight: '80vh',
            width: 'fit-content',
            height: 'fit-content',
        },
        Summary_all_text: {
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            whiteSpace: 'pre-wrap',
            maxWidth: '100%',
        },
    });
})($ || ($ = {}));

;
	($.$bog_ainews_app_favorites) = class $bog_ainews_app_favorites extends ($.$bog_ainews_app_feed) {
		title(){
			return (this.$.$mol_locale.text("$bog_ainews_app_favorites_title"));
		}
		category_title(id){
			return " ";
		}
		add_post(next){
			if(next !== undefined) return next;
			return null;
		}
		remove_post(next){
			if(next !== undefined) return next;
			return null;
		}
		posts(){
			return [];
		}
	};
	($mol_mem(($.$bog_ainews_app_favorites.prototype), "add_post"));
	($mol_mem(($.$bog_ainews_app_favorites.prototype), "remove_post"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$bog_ainews_app_favorites_key = 'favorites';
        class $bog_ainews_app_favorites extends $.$bog_ainews_app_favorites {
            Categories() {
                return [this.Category_page('favorites')];
            }
            articles(category) {
                const articles = this.app_source().custom_sources($$.$bog_ainews_app_favorites_key);
                const filtered_articles = this.filter_articles(articles);
                return filtered_articles.map((article) => this.Article(article));
            }
            add_post(post) {
                const current_list = this.app_source().custom_sources($$.$bog_ainews_app_favorites_key);
                if (current_list.includes(post)) {
                    return;
                }
                const new_list = [...current_list, post];
                this.app_source().custom_sources($$.$bog_ainews_app_favorites_key, new_list);
            }
            remove_post(id) {
                const current_list = this.app_source().custom_sources($$.$bog_ainews_app_favorites_key);
                const new_list = current_list.filter((item) => item != id);
                this.app_source().custom_sources($$.$bog_ainews_app_favorites_key, new_list);
            }
            posts() {
                return this.app_source().custom_sources($$.$bog_ainews_app_favorites_key);
            }
            filter_articles(articles_list) {
                if (this.search_word().trim() !== '')
                    return articles_list.filter((item) => new RegExp(this.search_word(), 'ig').test(item.title));
                return articles_list;
            }
        }
        __decorate([
            $mol_mem
        ], $bog_ainews_app_favorites.prototype, "posts", null);
        $$.$bog_ainews_app_favorites = $bog_ainews_app_favorites;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_icon_newspaper) = class $mol_icon_newspaper extends ($.$mol_icon) {
		path(){
			return "M20,11H4V8H20M20,15H13V13H20M20,19H13V17H20M11,19H4V13H11M20.33,4.67L18.67,3L17,4.67L15.33,3L13.67,4.67L12,3L10.33,4.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V3L20.33,4.67Z";
		}
	};


;
"use strict";

;
	($.$bog_ainews_app) = class $bog_ainews_app extends ($.$mol_book2_catalog) {
		Lights(){
			const obj = new this.$.$mol_lights_toggle();
			return obj;
		}
		Theme(){
			const obj = new this.$.$bog_ainews_theme_auto();
			return obj;
		}
		Feed(){
			const obj = new this.$.$bog_ainews_app_feed();
			return obj;
		}
		Favorite(){
			const obj = new this.$.$bog_ainews_app_favorites();
			return obj;
		}
		Sources(){
			const obj = new this.$.$bog_ainews_app_sources();
			return obj;
		}
		Filters(){
			const obj = new this.$.$bog_ainews_app_filters();
			return obj;
		}
		Settings(){
			const obj = new this.$.$bog_ainews_app_settings();
			return obj;
		}
		Feat_1(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_Feat_1_title")));
			return obj;
		}
		Feat_2(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_Feat_2_title")));
			return obj;
		}
		Features(){
			const obj = new this.$.$mol_page();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_Features_title")));
			(obj.body) = () => ([(this.Feat_1()), (this.Feat_2())]);
			return obj;
		}
		Placeholder(){
			return null;
		}
		Menu_logo(){
			const obj = new this.$.$mol_icon_newspaper();
			return obj;
		}
		menu_title(){
			return (this.$.$mol_locale.text("$bog_ainews_app_menu_title"));
		}
		menu_tools(){
			return [(this.Lights())];
		}
		plugins(){
			return [(this.Theme())];
		}
		spreads(){
			return {
				"": (this.Feed()), 
				"favorite": (this.Favorite()), 
				"sources": (this.Sources()), 
				"filters": (this.Filters()), 
				"settings": (this.Settings()), 
				"features": (this.Features())
			};
		}
	};
	($mol_mem(($.$bog_ainews_app.prototype), "Lights"));
	($mol_mem(($.$bog_ainews_app.prototype), "Theme"));
	($mol_mem(($.$bog_ainews_app.prototype), "Feed"));
	($mol_mem(($.$bog_ainews_app.prototype), "Favorite"));
	($mol_mem(($.$bog_ainews_app.prototype), "Sources"));
	($mol_mem(($.$bog_ainews_app.prototype), "Filters"));
	($mol_mem(($.$bog_ainews_app.prototype), "Settings"));
	($mol_mem(($.$bog_ainews_app.prototype), "Feat_1"));
	($mol_mem(($.$bog_ainews_app.prototype), "Feat_2"));
	($mol_mem(($.$bog_ainews_app.prototype), "Features"));
	($mol_mem(($.$bog_ainews_app.prototype), "Menu_logo"));


;
"use strict";
var $;
(function ($) {
    function $mol_offline() { }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const blacklist = new Set([
        '//cse.google.com/adsense/search/async-ads.js'
    ]);
    function $mol_offline_web() {
        if (typeof window === 'undefined') {
            self.addEventListener('install', (event) => {
                ;
                self.skipWaiting();
            });
            self.addEventListener('activate', (event) => {
                ;
                self.clients.claim();
                $$.$mol_log3_done({
                    place: '$mol_offline',
                    message: 'Activated',
                });
            });
            self.addEventListener('fetch', (event) => {
                const request = event.request;
                if (blacklist.has(request.url.replace(/^https?:/, ''))) {
                    return event.respondWith(new Response(null, {
                        status: 418,
                        statusText: 'Blocked'
                    }));
                }
                if (request.method !== 'GET')
                    return;
                if (!/^https?:/.test(request.url))
                    return;
                if (/\?/.test(request.url))
                    return;
                if (request.cache === 'no-store')
                    return;
                const fetch_data = () => fetch(new Request(request, { credentials: 'omit' })).then(response => {
                    if (response.status !== 200)
                        return response;
                    event.waitUntil(caches.open('$mol_offline').then(cache => cache.put(request, response)));
                    return response.clone();
                });
                const enrich = (response) => {
                    if (!response.status)
                        return response;
                    const headers = new Headers(response.headers);
                    headers.set("$mol_offline", "");
                    headers.set("Origin-Agent-Cluster", "?1");
                    return new Response(response.body, {
                        status: response.status,
                        statusText: response.statusText,
                        headers,
                    });
                };
                const fresh = request.cache === 'force-cache' ? null : fetch_data();
                if (fresh)
                    event.waitUntil(fresh.then(enrich));
                event.respondWith(caches.match(request).then(cached => request.cache === 'no-cache' || request.cache === 'reload'
                    ? (cached
                        ? fresh
                            .then(actual => {
                            if (actual.status === cached.status)
                                return actual;
                            throw new Error(`${actual.status}${actual.statusText ? ` ${actual.statusText}` : ''}`, { cause: actual });
                        })
                            .catch((err) => {
                            const cloned = cached.clone();
                            const message = `${err.cause instanceof Response ? '' : '500 '}${err.message} $mol_offline fallback to cache`;
                            cloned.headers.set('$mol_offline_remote_status', message);
                            return cloned;
                        })
                        : fresh)
                    : (cached || fresh || fetch_data())).then(enrich));
            });
            self.addEventListener('beforeinstallprompt', (event) => event.prompt());
        }
        else if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
            console.warn('HTTPS or localhost is required for service workers.');
        }
        else if (!navigator.serviceWorker) {
            console.warn('Service Worker is not supported.');
        }
        else {
            $mol_dom.addEventListener('DOMContentLoaded', () => {
                navigator.serviceWorker.register('web.js').then(reg => {
                });
            });
        }
    }
    $.$mol_offline_web = $mol_offline_web;
    $.$mol_offline = $mol_offline_web;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    try {
        $mol_offline();
    }
    catch (error) {
        console.error(error);
    }
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_ainews_app extends $.$bog_ainews_app {
        }
        $$.$bog_ainews_app = $bog_ainews_app;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($bog_ainews_app, {});
})($ || ($ = {}));

;
	($.$mol_icon_plus) = class $mol_icon_plus extends ($.$mol_icon) {
		path(){
			return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
		}
	};


;
"use strict";

;
	($.$mol_select_list) = class $mol_select_list extends ($.$mol_view) {
		Badges(){
			return [];
		}
		badge_title(id){
			return "badge";
		}
		remove(id, next){
			if(next !== undefined) return next;
			return null;
		}
		badge_hint(){
			return (this.$.$mol_locale.text("$mol_select_list_badge_hint"));
		}
		enabled(){
			return true;
		}
		drop_enabled(){
			return (this.enabled());
		}
		event_select(id, next){
			if(next !== undefined) return next;
			return null;
		}
		align_hor(){
			return "right";
		}
		options(){
			return [];
		}
		options_pickable(){
			return (this.options());
		}
		pick(next){
			if(next !== undefined) return next;
			return "";
		}
		option_title(id){
			return "";
		}
		pick_enabled(){
			return (this.enabled());
		}
		pick_hint(){
			return (this.$.$mol_locale.text("$mol_select_list_pick_hint"));
		}
		filter_pattern(next){
			return (this.Pick().filter_pattern(next));
		}
		Pick_icon(){
			const obj = new this.$.$mol_icon_plus();
			return obj;
		}
		Pick(){
			const obj = new this.$.$mol_select();
			(obj.event_select) = (id, next) => ((this.event_select(id, next)));
			(obj.align_hor) = () => ((this.align_hor()));
			(obj.options) = () => ((this.options_pickable()));
			(obj.value) = (next) => ((this.pick(next)));
			(obj.option_label) = (id) => ((this.option_title(id)));
			(obj.trigger_enabled) = () => ((this.pick_enabled()));
			(obj.hint) = () => ((this.pick_hint()));
			(obj.Trigger_icon) = () => ((this.Pick_icon()));
			return obj;
		}
		value(next){
			if(next !== undefined) return next;
			return [];
		}
		dictionary(){
			return {};
		}
		badges_list(){
			return (this.Badges());
		}
		Badge(id){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.badge_title(id)));
			(obj.click) = (next) => ((this.remove(id, next)));
			(obj.hint) = () => ((this.badge_hint()));
			(obj.enabled) = () => ((this.drop_enabled()));
			return obj;
		}
		sub(){
			return [(this.Pick()), ...(this.badges_list())];
		}
	};
	($mol_mem_key(($.$mol_select_list.prototype), "remove"));
	($mol_mem_key(($.$mol_select_list.prototype), "event_select"));
	($mol_mem(($.$mol_select_list.prototype), "pick"));
	($mol_mem(($.$mol_select_list.prototype), "Pick_icon"));
	($mol_mem(($.$mol_select_list.prototype), "Pick"));
	($mol_mem(($.$mol_select_list.prototype), "value"));
	($mol_mem_key(($.$mol_select_list.prototype), "Badge"));


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select_list extends $.$mol_select_list {
            value(val) {
                return super.value(val);
            }
            pick(key) {
                if (!key)
                    return '';
                this.value([...this.value(), key]);
                return '';
            }
            event_select(id, event) {
                event?.preventDefault();
                this.pick(id);
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_pickable() {
                if (!this.enabled())
                    return [];
                const exists = new Set(this.value());
                return this.options().filter(key => !exists.has(key));
            }
            option_title(key) {
                const value = this.dictionary()[key];
                return value == null ? key : value;
            }
            badge_title(key) {
                return this.option_title(key);
            }
            pick_enabled() {
                return this.options_pickable().length > 0;
            }
            Badges() {
                return this.value()
                    .map(id => this.Badge(id))
                    .reverse();
            }
            title() {
                return this.value().map(key => this.option_title(key)).join(' + ');
            }
            remove(key) {
                this.value(this.value().filter(id => id !== key));
            }
        }
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "pick", null);
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "options", null);
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "options_pickable", null);
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "pick_enabled", null);
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "title", null);
        __decorate([
            $mol_action
        ], $mol_select_list.prototype, "remove", null);
        $$.$mol_select_list = $mol_select_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($mol_select_list, {
            flex: {
                wrap: 'wrap',
                shrink: 1,
                grow: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_icon_open_source_initiative) = class $mol_icon_open_source_initiative extends ($.$mol_icon) {
		path(){
			return "M15.41,22C15.35,22 15.28,22 15.22,22C15.1,21.95 15,21.85 14.96,21.73L12.74,15.93C12.65,15.69 12.77,15.42 13,15.32C13.71,15.06 14.28,14.5 14.58,13.83C15.22,12.4 14.58,10.73 13.15,10.09C11.72,9.45 10.05,10.09 9.41,11.5C9.11,12.21 9.09,13 9.36,13.69C9.66,14.43 10.25,15 11,15.28C11.24,15.37 11.37,15.64 11.28,15.89L9,21.69C8.96,21.81 8.87,21.91 8.75,21.96C8.63,22 8.5,22 8.39,21.96C3.24,19.97 0.67,14.18 2.66,9.03C4.65,3.88 10.44,1.31 15.59,3.3C18.06,4.26 20.05,6.15 21.13,8.57C22.22,11 22.29,13.75 21.33,16.22C20.32,18.88 18.23,21 15.58,22C15.5,22 15.47,22 15.41,22M12,3.59C7.03,3.46 2.9,7.39 2.77,12.36C2.68,16.08 4.88,19.47 8.32,20.9L10.21,16C8.38,15 7.69,12.72 8.68,10.89C9.67,9.06 11.96,8.38 13.79,9.36C15.62,10.35 16.31,12.64 15.32,14.47C14.97,15.12 14.44,15.65 13.79,16L15.68,20.93C17.86,19.95 19.57,18.16 20.44,15.93C22.28,11.31 20.04,6.08 15.42,4.23C14.33,3.8 13.17,3.58 12,3.59Z";
		}
	};


;
"use strict";

;
	($.$bog_ainews_app_sources) = class $bog_ainews_app_sources extends ($.$bog_ainews_app_page) {
		My_rss_feeds(){
			return [];
		}
		My(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.My_rss_feeds()));
			return obj;
		}
		Add_feed_string(){
			const obj = new this.$.$mol_string();
			return obj;
		}
		add_custom_feed_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Add_feed_button(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_sources_Add_feed_button_title")));
			(obj.click) = (next) => ((this.add_custom_feed_click(next)));
			return obj;
		}
		My_sources_labeler_content(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.My()), 
				(this.Add_feed_string()), 
				(this.Add_feed_button())
			]);
			return obj;
		}
		My_sources_labeler(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_sources_My_sources_labeler_title")));
			(obj.content) = () => ([(this.My_sources_labeler_content())]);
			return obj;
		}
		Categories(){
			return [];
		}
		Tabs(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.Categories()));
			return obj;
		}
		Sources_labeler(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_ainews_app_sources_Sources_labeler_title")));
			(obj.content) = () => ([(this.Tabs())]);
			return obj;
		}
		category_title(id){
			return "blank category title";
		}
		sources(id, next){
			if(next !== undefined) return next;
			return [];
		}
		suggestions(id){
			return [];
		}
		Sources(id){
			const obj = new this.$.$mol_select_list();
			(obj.value) = (next) => ((this.sources(id, next)));
			(obj.dictionary) = () => ((this.suggestions(id)));
			return obj;
		}
		articles(id){
			return [];
		}
		Items(id){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.articles(id)));
			return obj;
		}
		my_rss_title(id){
			return "";
		}
		RSS_title(id){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ((this.my_rss_title(id)));
			return obj;
		}
		Delete_close_icon(id){
			const obj = new this.$.$mol_icon_close();
			return obj;
		}
		delete_custom_feed_click(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Delete_my_feed_button(id){
			const obj = new this.$.$mol_button_major();
			(obj.sub) = () => ([(this.Delete_close_icon(id))]);
			(obj.click) = (next) => ((this.delete_custom_feed_click(id, next)));
			return obj;
		}
		runtime_links(){
			return null;
		}
		custom_sources(id, next){
			if(next !== undefined) return next;
			return [];
		}
		title(){
			return (this.$.$mol_locale.text("$bog_ainews_app_sources_title"));
		}
		Logo(){
			const obj = new this.$.$mol_icon_open_source_initiative();
			return obj;
		}
		body(){
			return [(this.My_sources_labeler()), (this.Sources_labeler())];
		}
		Category_page(id){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.category_title(id)));
			(obj.content) = () => ([(this.Sources(id)), (this.Items(id))]);
			return obj;
		}
		My_rss_item(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.RSS_title(id)), (this.Delete_my_feed_button(id))]);
			return obj;
		}
	};
	($mol_mem(($.$bog_ainews_app_sources.prototype), "My"));
	($mol_mem(($.$bog_ainews_app_sources.prototype), "Add_feed_string"));
	($mol_mem(($.$bog_ainews_app_sources.prototype), "add_custom_feed_click"));
	($mol_mem(($.$bog_ainews_app_sources.prototype), "Add_feed_button"));
	($mol_mem(($.$bog_ainews_app_sources.prototype), "My_sources_labeler_content"));
	($mol_mem(($.$bog_ainews_app_sources.prototype), "My_sources_labeler"));
	($mol_mem(($.$bog_ainews_app_sources.prototype), "Tabs"));
	($mol_mem(($.$bog_ainews_app_sources.prototype), "Sources_labeler"));
	($mol_mem_key(($.$bog_ainews_app_sources.prototype), "sources"));
	($mol_mem_key(($.$bog_ainews_app_sources.prototype), "Sources"));
	($mol_mem_key(($.$bog_ainews_app_sources.prototype), "Items"));
	($mol_mem_key(($.$bog_ainews_app_sources.prototype), "RSS_title"));
	($mol_mem_key(($.$bog_ainews_app_sources.prototype), "Delete_close_icon"));
	($mol_mem_key(($.$bog_ainews_app_sources.prototype), "delete_custom_feed_click"));
	($mol_mem_key(($.$bog_ainews_app_sources.prototype), "Delete_my_feed_button"));
	($mol_mem_key(($.$bog_ainews_app_sources.prototype), "custom_sources"));
	($mol_mem(($.$bog_ainews_app_sources.prototype), "Logo"));
	($mol_mem_key(($.$bog_ainews_app_sources.prototype), "Category_page"));
	($mol_mem_key(($.$bog_ainews_app_sources.prototype), "My_rss_item"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const $bog_ainews_app_sources_custom_rss_feeds = 'my';
        const $bog_ainews_app_source_links = {
            tech: [
                'https://devblogs.microsoft.com/landingpage/',
                'https://blogs.unity3d.com/feed/',
                'https://www.opennet.ru/opennews/opennews_all.rss',
                'https://devblogs.microsoft.com/ifdef-windows/feed/',
                'https://www.zdnet.com/news/rss.xml',
                'https://habr.com/ru/rss/all/all/?fl=ru',
                'https://habr.com/ru/rss/news/',
            ],
            shared: ['https://critter.blog/rss', 'https://news.ycombinator.com/rss'],
            russia: [
                'https://daily.afisha.ru/rss/',
                'https://dtf.ru/rss',
                'https://feeds.bbci.co.uk/russian/rss.xml',
                'https://habr.com/ru/rss/news/',
                'https://holod.media/feed',
                'https://istories.media/rss/all.xml',
                'https://meduza.io/rss/all',
                'https://novayagazeta.eu/feed/rss',
                'https://novayagazeta.ru/feed/rss',
                'https://paperpaper.io/feed/',
                'https://rss.dw.com/rdf/rss-ru-all',
                'https://rtvi.com/rss',
                'https://secretmag.ru/exports/rss.xml',
                'https://semnasem.org/rss/default.xml',
                'https://sota.vision/feed/',
                'https://theins.ru/api/rss/ru/default',
                'https://tvrain.tv/export/rss/all.xml',
                'https://vc.ru/rss',
                'https://www.currenttime.tv/api/zgbip_l-vomx-tpe-v_py',
                'https://www.dekoder.org/rss_ru_all.xml',
                'https://www.proekt.media/feed/',
                'https://www.sibreal.org/api/',
                'https://www.sova-center.ru/search/?rss=1&lg=1',
                'https://www.svoboda.org/api/z-pqpil-vomx-tper-ipp',
                'https://zona.media/rss',
            ],
            AI: [
                'http://bair.berkeley.edu/blog/feed.xml',
                'http://blog.evjang.com/feeds/posts/default?alt=rss',
                'http://distill.pub/rss.xml',
                'http://magenta.tensorflow.org/feed.xml',
                'http://news.mit.edu/rss/topic/artificial-intelligence2',
                'http://newsletter.ruder.io/?format=rss',
                'https://aidisruptor.ai/feed',
                'https://aiweekly.co/issues.rss',
                'https://bensbites.com/blog/rss.xml',
                'https://blog.ml.cmu.edu/feed/',
                'https://evjang.com/feed',
                'https://garymarcus.substack.com/feed',
                'https://jalammar.github.io/feed.xml',
                'https://lastweekin.ai/feed',
                'https://lilianweng.github.io/index.xml',
                'https://lilianweng.github.io/lil-log/feed.xml',
                'https://machinelearning.apple.com/rss.xml',
                'https://news.google.com/rss/topics/CAAqIAgKIhpDQkFTRFFvSEwyMHZNRzFyZWhJQ1pXNG9BQVAB?hl=en-US&gl=US&ceid=US%3Aen&oc=11',
                'https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREZvZVdoZkVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen&oc=11',
                'https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvSEwyMHZNRzFyZWhJRlpXNHRSMElvQUFQAQ?hl=en-CA&gl=CA&ceid=CA%3Aen&oc=11',
                'https://news.google.com/rss/topics/CAAqJAgKIh5DQkFTRUFvSEwyMHZNRzFyZWhJRlpXNHRSMElvQUFQAQ?hl=en-US&ceid=CA%3Aen&oc=11',
                'https://news.google.com/rss/topics/CAAqLAgKIiZDQkFTRmdvTkwyY3ZNVEZpZUdNMk5UWjJOaElGWlc0dFIwSW9BQVAB?hl=en-CA&gl=CA&ceid=CA%3Aen&oc=11',
                'https://news.mit.edu/topic/mitartificial-intelligence2-rss.xml',
                'https://news.mit.edu/topic/mitmachine-learning-rss.xml',
                'https://rss.beehiiv.com/feeds/2R3C6Bt5wj.xml',
                'https://rss.beehiiv.com/feeds/4EFsI5UmM7.xml',
                'https://rss.beehiiv.com/feeds/GcFiF2T4I5.xml',
                'https://rss.beehiiv.com/feeds/gtwKcGOtrm.xml',
                'https://rss.beehiiv.com/feeds/lvG7CGESX1.xml',
                'https://rss.beehiiv.com/feeds/vGKavlVUFO.xml',
                'https://simonwillison.net/atom/everything/',
                'https://syncedreview.com/feed/',
                'https://techcrunch.com/category/artificial-intelligence/feed/',
                'https://techxplore.com/rss-feed/breaking/machine-learning-ai-news/',
                'https://techxplore.com/rss-feed/machine-learning-ai-news/',
                'https://the-decoder.com/feed/',
                'https://theconversation.com/us/topics/machine-learning-8332/articles.atom',
                'https://thegradient.pub/rss/',
                'https://towardsdatascience.com/feed',
                'https://venturebeat.com/category/ai/feed/',
                'https://www.ai-supremacy.com/feed',
                'https://www.amazon.science/index.rss',
                'https://www.exponentialview.co/feed',
                'https://www.interconnects.ai/feed',
                'https://www.latent.space/feed',
                'https://www.louisbouchard.ai/rss/',
                'https://www.nextomoro.com/rss/',
                'https://www.reddit.com/r/Anthropic/.rss',
                'https://www.reddit.com/r/ChatGPT/.rss',
                'https://www.reddit.com/r/ChatGPTCoding/.rss',
                'https://www.reddit.com/r/DeepSeek/.rss',
                'https://www.reddit.com/r/LocalLLaMA/.rss',
                'https://www.reddit.com/r/MachineLearning/.rss',
                'https://www.reddit.com/r/MachineLearning/top/.rss',
                'https://www.reddit.com/r/OpenAI/.rss',
                'https://www.reddit.com/r/agi/.rss',
                'https://www.reddit.com/r/artificial/.rss',
                'https://www.sciencedaily.com/rss/computers_math/artificial_intelligence.xml',
                'https://www.swyx.io/rss.xml',
                'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml',
                'https://www.tostring.ai/feed',
                'https://www.unite.ai/feed/',
                'https://www.wired.com/feed/rss',
                'https://www.youtube.com/feeds/videos.xml?channel_id=UC5Wz4fFacYuON6IKbhSa7Zw',
                'https://www.youtube.com/feeds/videos.xml?channel_id=UCCKx8mAHiFus-XYQLy_WnaA',
                'https://www.youtube.com/feeds/videos.xml?channel_id=UCDZfn935vwaahDabsfylfIQ',
                'https://www.youtube.com/feeds/videos.xml?channel_id=UCDq7SjbgRKty5TgGafW8Clg',
                'https://www.youtube.com/feeds/videos.xml?channel_id=UCEAbqW0HFB_UxZoUDO0kJBw',
                'https://www.youtube.com/feeds/videos.xml?channel_id=UCPocEocBKqXv5rzQYWugHMQ',
                'https://www.youtube.com/feeds/videos.xml?channel_id=UCZHmQk67mSJgfCCTn7xBfew',
                'https://www.youtube.com/feeds/videos.xml?channel_id=UCbfYPyITQ-7l4upoX8nvctg',
                'https://www.youtube.com/feeds/videos.xml?channel_id=UCcIXc5mJsHVYTZR1maL5l9w',
                'https://www.youtube.com/feeds/videos.xml?channel_id=UChpleBmo18P08aKCIgti38g',
            ],
            Asia: [
                'http://feeds.bbci.co.uk/news/world/asia/rss.xml',
                'https://feeds.npr.org/1125/rss.xml',
                'https://rss.dw.com/rdf/rss-en-asia',
                'https://rss.nytimes.com/services/xml/rss/nyt/AsiaPacific.xml',
                'https://www.economist.com/asia/rss.xml',
                'https://www.euronews.com/rss?level=program&name=asia-news',
                'https://www.ft.com/world/asia-pacific?format=rss',
                'https://www.scmp.com/rss/3/feed',
                'https://www.theguardian.com/world/asia/rss',
            ],
            Autos: ['https://www.sfgate.com/rss/feed/car-news-rss-feed-441.php'],
            Bay: [
                'http://www.smdailyjournal.com/search/?f=rss&t=article&c=news/local&l=50&s=start_time&sd=desc',
                'https://48hills.org/feed/',
                'https://abc7news.com/feed/',
                'https://calmatters.org/feed/',
                'https://hoodline.com/news/bay-area/rss/',
                'https://localnewsmatters.org/feed/',
                'https://lookout.co/feed/',
                'https://midpenpost.org/feed/',
                'https://missionlocal.org/feed/',
                'https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRFp3ZG5JU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen&oc=11',
                'https://oaklandside.org/feed/',
                'https://pacificsun.com/feed/',
                'https://padailypost.com/feed/',
                'https://sanjosespotlight.com/feed/',
                'https://sf.eater.com/rss/index.xml',
                'https://sfbayca.com/feed/',
                'https://sfbaytimes.com/feed/',
                'https://sfbayview.com/feed/',
                'https://sfist.com/rss/',
                'https://sfnews.us/rss/',
                'https://sfstandard.com/feed/',
                'https://sftimes.com/feed/',
                'https://whatnow.com/san-francisco/feed/',
                'https://www.almanacnews.com/feed/',
                'https://www.cbsnews.com/sanfrancisco/latest/rss/local-news',
                'https://www.eastbaytimes.com/location/california/bay-area/feed/',
                'https://www.kron4.com/feed/',
                'https://www.kron4.com/news/app-feed',
                'https://www.ktvu.com/rss/category/local-news',
                'https://www.marinij.com/local-news/feed/',
                'https://www.mercurynews.com/location/california/bay-area/feed/',
                'https://www.mercurynews.com/location/california/bay-area/peninsula/feed/',
                'https://www.nbcbayarea.com/news/local/feed/',
                'https://www.paloaltoonline.com/feed/',
                'https://www.reddit.com/r/bayarea/.rss',
                'https://www.reddit.com/r/sanfrancisco/.rss',
                'https://www.sfgate.com/bayarea/feed/bay-area-news-429.php',
                'https://www.sfpublicpress.org/category/news/feed/',
                'https://www.siliconvalley.com/feed/',
                'https://www.thesfnews.com/feed',
            ],
            Books: [
                'https://feeds.feedburner.com/nybooks',
                'https://www.goodreads.com/blog/list_rss',
                'https://www.nytimes.com/section/books/review/rss.xml',
                'https://www.nytimes.com/svc/collections/v1/publish/',
                'https://www.theguardian.com/books/booksblog/rss',
            ],
            Business: [
                'http://feeds.benzinga.com/benzinga',
                'http://feeds.feedburner.com/AtlanticBusinessChannel',
                'http://feeds.feedburner.com/CalculatedRisk',
                'http://feeds.feedburner.com/TheBigPicture',
                'http://feeds2.feedburner.com/businessinsider',
                'http://fortune.com/feed/',
                'http://freakonomics.com//feed/',
                'http://www.economist.com/rss/the_world_this_week_rss.xml',
                'http://www.marketwatch.com/rss/topstories/',
                'http://www.metafilter.com/tags/business/rss',
                'http://www.metafilter.com/tags/economics/rss',
                'http://www.sbnonline.com/feed/',
                'http://www.thenonprofittimes.com/feed/',
                'https://abcnews.go.com/abcnews/moneyheadlines',
                'https://api.axios.com/feed/business',
                'https://economictimes.indiatimes.com/rssfeedsdefault.cms',
                'https://feeds.a.dj.com/rss/RSSMarketsMain.xml',
                'https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml',
                'https://feeds.bbci.co.uk/news/business/rss.xml',
                'https://feeds.bloomberg.com/business/news.rss',
                'https://feeds.bloomberg.com/economics/news.rss',
                'https://feeds.bloomberg.com/markets/news.rss',
                'https://feeds.bloomberg.com/wealth/news.rss',
                'https://feeds.elpais.com/mrss-s/list/ep/site/english.elpais.com/section/economy-and-business',
                'https://feeds.feedburner.com/Mixergy-main-podcast',
                'https://feeds.npr.org/1006/rss.xml',
                'https://feeds.npr.org/1017/rss.xml',
                'https://feeds.washingtonpost.com/rss/business',
                'https://finance.yahoo.com/news/rssindex',
                'https://fortune.com/feed',
                'https://homebusinessmag.com/feed/',
                'https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR1J5Y1hBU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen&oc=11',
                'https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNREpmTjNRU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen&oc=11',
                'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx6TVdZU0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US%3Aen&oc=11',
                'https://news.google.com/rss/topics/CAAqKAgKIiJDQkFTRXdvSkwyMHZNR2RtY0hNekVnWmxjeTAwTVRrb0FBUAE?hl=en-US&gl=US&ceid=US%3Aen&oc=11',
                'https://openrss.org/apnews.com/business',
                'https://openrss.org/www.reuters.com/business/',
                'https://qz.com/rss',
                'https://rss.dw.com/rdf/rss-en-bus',
                'https://rss.nytimes.com/services/xml/rss/nyt/Business.xml',
                'https://rss.nytimes.com/services/xml/rss/nyt/Economy.xml',
                'https://seekingalpha.com/feed.xml',
                'https://seekingalpha.com/listing/most-popular-articles.xml',
                'https://seekingalpha.com/market_currents.xml',
                'https://seekingalpha.com/tag/editors-picks.xml',
                'https://soylentnews.org/index.rss',
                'https://theconversation.com/us/business/articles.atom',
                'https://tim.blog/feed/',
                'https://time.com/business/feed',
                'https://www.cbsnews.com/latest/rss/moneywatch',
                'https://www.chicagotribune.com/business/feed/',
                'https://www.cnbc.com/id/100003114/device/rss/rss.html',
                'https://www.economist.com/finance-and-economics/rss.xml',
                'https://www.euronews.com/rss?level=vertical&name=business',
                'https://www.firstpost.com/commonfeeds/v1/mfp/rss/business.xml',
                'https://www.ft.com/companies?format=rss',
                'https://www.ft.com/markets?format=rss',
                'https://www.ft.com/rss/home',
                'https://www.ft.com/rss/home/international',
                'https://www.ft.com/technology?format=rss',
                'https://www.gobankingrates.com/feed/',
                'https://www.investing.com/rss/news.rss',
                'https://www.latimes.com/business/rss2.0.xml',
                'https://www.mckinsey.com/insights/rss.aspx',
                'https://www.pbs.org/newshour/feeds/rss/economy',
                'https://www.reddit.com/r/Economics/.rss',
                'https://www.reddit.com/r/GlobalMarkets/.rss',
                'https://www.reddit.com/r/business/.rss',
                'https://www.reddit.com/r/economy/.rss',
                'https://www.reddit.com/r/finance/.rss',
                'https://www.reddit.com/r/investing/.rss',
                'https://www.rt.com/rss/business/',
                'https://www.scmp.com/rss/92/feed',
                'https://www.seattletimes.com/business/feed/',
                'https://www.sfgate.com/rss/feed/business-and-technology-news-448.php',
                'https://www.spiegel.de/international/business/index.rss',
                'https://www.theguardian.com/uk/business/rss',
                'https://www.theguardian.com/uk/money/rss',
                'https://www.wired.com/feed/category/business/latest/rss',
                'https://www.youtube.com/feeds/videos.xml?user=Bloomberg',
                'https://www.youtube.com/feeds/videos.xml?user=businessinsider',
            ],
            'Celebs and Movies': [
                'http://entertainmentweekly.tumblr.com/rss',
                'http://www.tmz.com/rss.xml',
                'https://feeds2.feedburner.com/slashfilm',
                'https://www.avclub.com/rss',
            ],
            Culture: [
                'http://feeds.feedburner.com/99pi',
                'http://feeds.kottke.org/main',
                'https://aeon.co/feed.rss',
                'https://feeds.feedburner.com/damninteresting/all',
                'https://feeds.npr.org/1008/rss.xml',
                'https://feeds.npr.org/1045/rss.xml',
                'https://feeds.npr.org/1048/rss.xml',
                'https://quillette.com/tag/art-and-culture/rss/',
                'https://rss.csmonitor.com/feeds/theculture',
                'https://rss.dw.com/rdf/rss-en-cul',
                'https://theconversation.com/us/arts/articles.atom',
                'https://www.atlasobscura.com/feeds/latest',
                'https://www.boston.com/category/culture/feed/',
                'https://www.euronews.com/rss?level=vertical&name=culture',
                'https://www.firstpost.com/commonfeeds/v1/mfp/rss/art-and-culture.xml',
                'https://www.latimes.com/entertainment-arts/rss2.0.xml',
                'https://www.openculture.com/feed',
                'https://www.pbs.org/newshour/feeds/rss/arts',
                'https://www.pbs.org/newshour/feeds/rss/education',
                'https://www.scmp.com/rss/318202/feed',
                'https://www.scmp.com/rss/322296/feed',
                'https://www.sfgate.com/rss/feed/culture-530.php',
                'https://www.wired.com/feed/category/culture/latest/rss',
            ],
            Design: [
                'http://airbnb.design/feed/',
                'http://boxesandarrows.com/rss/',
                'http://feeds.feedburner.com/uxmovement',
                'https://feeds.feedburner.com/CssTricks',
                'https://feeds.feedburner.com/JustCreativeDesignBlog',
                'https://feeds.npr.org/1047/rss.xml',
                'https://interaction-design.org/rss/site_news.xml',
                'https://slack.design/feed/',
                'https://usabilitygeek.com/feed/',
                'https://uxdesign.cc/feed',
                'https://uxmatters.com/index.xml',
                'https://uxmovement.com/feed/',
                'https://uxplanet.org/feed',
                'https://uxstudioteam.com/ux-blog/feed/',
                'https://web.dev/feed.xml',
                'https://www.invisionapp.com/inside-design/feed',
                'https://www.nngroup.com/feed/rss/',
                'https://www.smashingmagazine.com/feed',
                'https://www.smashingmagazine.com/feed/',
            ],
            Food: [
                'http://feeds.feedburner.com/seriouseatsfeaturesvideos',
                'http://feeds.feedburner.com/smittenkitchen',
                'https://www.101cookbooks.com/feed',
                'https://www.sfgate.com/rss/feed/food-dining-550.php',
                'https://www.skinnytaste.com/feed/',
            ],
            'Freedom From Accounts': ['http://beeple.tumblr.com/rss', 'https://vimeo.com/user36872580/videos/rss'],
            Gaming: [
                'http://feeds.arstechnica.com/arstechnica/gaming/',
                'http://feeds.feedburner.com/RockPaperShotgun',
                'http://feeds.feedburner.com/TheAncientGamingNoob',
                'http://feeds.feedburner.com/psblog',
                'http://feeds.ign.com/ign/all',
                'http://feeds.ign.com/ign/games-all',
                'http://indiegamesplus.com/feed',
                'http://itrunsdoom.tumblr.com/rss',
                'http://news.xbox.com/feed',
                'http://rss.slashdot.org/Slashdot/slashdotGames',
                'http://tinycartridge.com/rss',
                'http://toucharcade.com/feed/',
                'http://www.metafilter.com/tags/games/rss',
                'http://www.metafilter.com/tags/gaming/rss',
                'http://www.newgamernation.com/feed/',
                'http://www.nintendolife.com/feeds/latest',
                'http://www.pushsquare.com/feeds/latest',
                'http://www.vg247.com/feed/',
                'https://80.lv/feed',
                'https://arstechnica.com/gaming/feed/',
                'https://dotesports.com/feed',
                'https://esports.gg/api/feed/',
                'https://esportsinsider.com/feed',
                'https://feeds.feedburner.com/Co-optimus',
                'https://feeds.feedburner.com/GeekNative',
                'https://galyonk.in/feed',
                'https://gamerant.com/feed/',
                'https://gameranx.com/feed/',
                'https://games.mxdwn.com/feed/',
                'https://gematsu.com/feed',
                'https://indiegamecloud.com/feed/',
                'https://insider-gaming.com/feed/',
                'https://kotaku.com/rss',
                'https://majornelson.com/feed/',
                'https://mynintendonews.com/feed',
                'https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNREZ0ZHpFU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen&oc=11',
                'https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREp4YURjNUVnSnlkU2dBUAE?hl=en-US&gl=US&ceid=US%3Aen&oc=11',
                'https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRFkxYTNKNkVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen&oc=11',
                'https://news.xbox.com/en-us/feed/',
                'https://nichegamer.com/feed/',
                'https://nowrongwaytoplay.tumblr.com/rss',
                'https://retrododo.com/feed/',
                'https://store.steampowered.com/feeds/news.xml',
                'https://tagn.wordpress.com/feed/',
                'https://techaeris.com/feed/',
                'https://techiemag.co.uk/category/gaming/feed/',
                'https://toucharcade.com/feed/',
                'https://wccftech.com/feed/',
                'https://www.cgchannel.com/feed/',
                'https://www.destructoid.com/feed/',
                'https://www.esports.net/feed/',
                'https://www.eurogamer.net/?format=rss',
                'https://www.eurogamer.net/feed',
                'https://www.eventhubs.com/news/feed/frontpage/',
                'https://www.gamesindustry.biz/feed',
                'https://www.gamespot.com/feeds/mashup/',
                'https://www.gamesradar.com/feeds.xml',
                'https://www.gamewatcher.com/feeds/rss',
                'https://www.gematsu.com/feed',
                'https://www.giantbomb.com/feeds/mashup',
                'https://www.indieretronews.com/feeds/posts/default',
                'https://www.inoreader.com/stream/user/1004847564/tag/Gaming%20Company%20Feeds',
                'https://www.makeupandbeautyblog.com/feed/',
                'https://www.mmorpg.com/rss',
                'https://www.only-gaming.com/feed/',
                'https://www.operationsports.com/feed/',
                'https://www.pcgamer.com/feeds.xml/',
                'https://www.pcgamesn.com/mainrss.xml',
                'https://www.pcinvasion.com/feed/',
                'https://www.pcworld.com/gaming/news/feed',
                'https://www.penny-arcade.com/feed',
                'https://www.polygon.com/rss/index.xml',
                'https://www.reddit.com/r/Games/.rss',
                'https://www.reddit.com/r/NintendoSwitch/.rss',
                'https://www.reddit.com/r/PS5/.rss',
                'https://www.reddit.com/r/XboxSeriesX/.rss',
                'https://www.reddit.com/r/consoles/.rss',
                'https://www.reddit.com/r/esports/.rss',
                'https://www.reddit.com/r/gamers/.rss',
                'https://www.reddit.com/r/gaming.rss',
                'https://www.reddit.com/r/indiegames/.rss',
                'https://www.reddit.com/r/pcgaming/.rss',
                'https://www.reddit.com/r/playstation/.rss',
                'https://www.reddit.com/r/retrogaming/.rss',
                'https://www.retrogarden.co.uk/feed/',
                'https://www.retronews.com/feed/',
                'https://www.rockpapershotgun.com/feed/',
                'https://www.siliconera.com/feed/',
                'https://www.thegamer.com/feed/',
                'https://www.theguardian.com/games/rss',
                'https://www.timeextension.com/feeds/latest',
                'https://www.tomshardware.com/feeds/tag/pc-gaming',
                'https://www.vg247.com/feed/',
            ],
            Guns: [
                'https://homemadeguns.wordpress.com/feed/',
                'https://www.forgottenweapons.com/feed/',
                'https://www.nrablog.com/rss',
                'https://www.thefirearmblog.com/blog/feed/',
            ],
            Linux: [
                'http://feeds.feedburner.com/UbuntuhandbookNewsTutorialsHowtosForUbuntuLinux',
                'https://linuxconfig.org/feed',
                'https://linuxhandbook.com/rss/',
                'https://linuxhint.com/feed/',
                'https://tecadmin.net/feed/',
                'https://www.cyberciti.com/feed/',
                'https://www.omgubuntu.co.uk/feed',
                'https://www.rosehosting.com/blog/feed/',
                'https://www.tecmint.com/feed/',
            ],
            'Middle East': [
                'https://feeds.npr.org/1009/rss.xml',
                'https://rss.nytimes.com/services/xml/rss/nyt/MiddleEast.xml',
                'https://www.lemonde.fr/middle-east/rss_full.xml',
                'https://www.scmp.com/rss/322264/feed',
            ],
            Music: [
                'https://3hive.com/feed/',
                'https://daily.bandcamp.com/feed/',
                'https://pitchfork.com/rss/reviews/best/albums/',
                'https://www.nme.com/feed',
                'https://www.stereogum.com/feed/',
            ],
            Podcasts: [
                'http://rss.acast.com/themagnusarchives',
                'http://www.uncannyjapan.com/feed/podcast/',
                'https://darknetdiaries.com/podcast.xml',
                'https://rss.acast.com/plumbingthedeathstar',
                'https://www.lorepodcast.com/episodes?format=RSS',
            ],
            Science: [
                'http://feeds.bbci.co.uk/news/science_and_environment/rss.xml',
                'http://feeds.feedburner.com/AllDiscovermagazinecomContent',
                'http://feeds.feedburner.com/BodyHorrors',
                'http://rss.cnn.com/rss/edition_space.rss',
                'http://rss.sciam.com/ScientificAmerican-Global',
                'http://rss.sciam.com/ScientificAmerican-Global?format=xml',
                'http://www.futurity.org/feed/',
                'http://www.metafilter.com/tags/science/rss',
                'http://www.nature.com/nature/current_issue/rss',
                'http://www.quantamagazine.org/feed/',
                'http://www.twis.org/feed/',
                'https://api.axios.com/feed/science',
                'https://charmingscience.com/feed/',
                'https://cosmosmagazine.com/feed/',
                'https://eos.org/feed',
                'https://feeds.bbci.co.uk/news/science_and_environment/rss.xml',
                'https://feeds.elpais.com/mrss-s/list/ep/site/english.elpais.com/section/climate',
                'https://feeds.elpais.com/mrss-s/list/ep/site/english.elpais.com/section/health',
                'https://feeds.elpais.com/mrss-s/list/ep/site/english.elpais.com/section/science-tech',
                'https://feeds.feedburner.com/AllDiscovermagazinecomContent',
                'https://feeds.newscientist.com/home',
                'https://feeds.npr.org/1007/rss.xml',
                'https://feeds.npr.org/1025/rss.xml',
                'https://feeds.npr.org/1026/rss.xml',
                'https://feeds.npr.org/1028/rss.xml',
                'https://feeds.science.org/rss/science.xml',
                'https://feeds.simplecast.com/y1LF_sn2',
                'https://flowingdata.com/feed',
                'https://futurism.com/feed',
                'https://gizmodo.com/tag/science/rss',
                'https://grist.org/feed/',
                'https://nautil.us/feed/',
                'https://news.climate.columbia.edu/feed/',
                'https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRE0yWHpJU0FtbDBLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen&oc=11',
                'https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNRFZ4YW5RU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen&oc=11',
                'https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNR1F3TmpOMkVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen&oc=11',
                'https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREU0TXpOM0VnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen&oc=11',
                'https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREp3ZVRBNUVnSmxiaWdBUAE?hl=en-US&gl=US&ceid=US%3Aen&oc=11',
                'https://news.google.com/rss/topics/CAAqJQgKIh9DQkFTRVFvSUwyMHZNREUxTkRBU0JXVnVMVWRDS0FBUAE?hl=en-US&gl=US&ceid=US%3Aen&oc=11',
                'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp0Y1RjU0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US%3Aen&oc=11',
                'https://news.mit.edu/rss/research',
                'https://news.mit.edu/rss/topic/science-technology-and-society',
                'https://openrss.org/apnews.com/science',
                'https://pa.tedcdn.com/feeds/talks.rss',
                'https://phys.org/rss-feed/',
                'https://phys.org/rss-feed/breaking/',
                'https://podcasts.files.bbci.co.uk/b00snr0w.rss',
                'https://podcasts.files.bbci.co.uk/p002w557.rss',
                'https://quillette.com/tag/science-tech/rss',
                'https://reddit.com/r/science/.rss',
                'https://rss.dw.com/xml/rss_en_environment',
                'https://rss.dw.com/xml/rss_en_science',
                'https://rss.nytimes.com/services/xml/rss/nyt/Climate.xml',
                'https://rss.nytimes.com/services/xml/rss/nyt/Science.xml',
                'https://rss.nytimes.com/services/xml/rss/nyt/Space.xml',
                'https://sciencealert.com/feed/gn/',
                'https://sciencebasedmedicine.org/feed/',
                'https://scienceblog.com/feed/',
                'https://sciencefeatured.com/feed/',
                'https://scitechdaily.com/feed/',
                'https://sciworthy.com/feed/',
                'https://singularityhub.com/feed/',
                'https://soylentnews.org/index.rss',
                'https://theconversation.com/us/technology/articles.atom',
                'https://thelumberjack.org/category/science/feed/',
                'https://time.com/science/feed/',
                'https://undark.org/feed/',
                'https://what-if.xkcd.com/feed.atom',
                'https://www.advancedsciencenews.com/feed/',
                'https://www.aljazeera.com/xml/rss/all.xml',
                'https://www.anthropocenemagazine.org/feed/',
                'https://www.astro.gla.ac.uk/users/eduard/cesra/?feed=rss2',
                'https://www.economist.com/science-and-technology/rss.xml',
                'https://www.kolabtree.com/blog/feed/',
                'https://www.latimes.com/science/rss2.0.xml',
                'https://www.livescience.com/feeds.xml',
                'https://www.nasa.gov/feed/',
                'https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss',
                'https://www.nature.com/nature.rss',
                'https://www.nsf.gov/rss/rss_www_news.xml',
                'https://www.pbs.org/newshour/feeds/rss/science',
                'https://www.popsci.com/rss.xml',
                'https://www.psypost.org/feed/',
                'https://www.reddit.com/r/Anthropology/.rss',
                'https://www.reddit.com/r/EarthScience/.rss',
                'https://www.reddit.com/r/Futurism/.rss',
                'https://www.reddit.com/r/Futurology/.rss',
                'https://www.reddit.com/r/Physics/.rss',
                'https://www.reddit.com/r/biology/.rss',
                'https://www.reddit.com/r/chemistry/.rss',
                'https://www.reddit.com/r/climate/.rss',
                'https://www.reddit.com/r/environment/.rss',
                'https://www.reddit.com/r/environmental_science/.rss',
                'https://www.reddit.com/r/hardscience/.rss',
                'https://www.reddit.com/r/science/.rss',
                'https://www.reddit.com/r/space/.rss',
                'https://www.sci.news/feed',
                'https://www.scidev.net/global/rss.xml/?type=header',
                'https://www.science.org/rss/news_current.xml',
                'https://www.sciencealert.com/rss',
                'https://www.sciencedaily.com/rss/all.xml',
                'https://www.sciencenews.org/feed',
                'https://www.scientificamerican.com/platform/syndication/rss/',
                'https://www.scimex.org/rss',
                'https://www.smithsonianmag.com/rss/science-nature/',
                'https://www.snexplores.org/feed',
                'https://www.space.com/feeds/all',
                'https://www.technologynetworks.com/applied-sciences/news/rss',
                'https://www.the-scientist.com/rss/feed-the-scientist.xml',
                'https://www.theguardian.com/environment/climate-crisis/rss',
                'https://www.theguardian.com/science/rss',
                'https://www.thehindu.com/sci-tech/science/feeder/default.rss',
                'https://www.wired.com/feed/category/science/latest/rss',
                'https://www.yahoo.com/news/rss/science',
                'https://www.youtube.com/feeds/videos.xml?channel_id=UCqZQJ4600a9wIfMPbYc60OQ',
                'https://www.zmescience.com/feed/',
            ],
            Sports: [
                'http://feeds.bbci.co.uk/sport/rss.xml',
                'http://feeds.bbci.co.uk/sport/rss.xml?edition=int#',
                'http://feeds.skynews.com/feeds/rss/sports.xml',
                'http://newsrss.bbc.co.uk/rss/sportonline_world_edition/front_page/rss.xml',
                'http://rss.cnn.com/rss/edition_sport.rss',
                'http://www.espn.com/espn/rss/news',
                'https://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU',
                'https://e00-marca.uecdn.es/rss/en/index.xml',
                'https://feeds.elpais.com/mrss-s/list/ep/site/english.elpais.com/section/sports',
                'https://feeds.washingtonpost.com/rss/sports',
                'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVAB/sections/CAQiQkNCQVNLd29JTDIwdk1EWnVkR29TQW1WdUdnSlZVeUlPQ0FRYUNnb0lMMjB2TURVNWVXb3FCd29GRWdOT1Jrd29BQSoqCAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVABUAE?hl=en-US&gl=US&ceid=US%3Aen',
                'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVAB/sections/CAQiR0NCQVNMd29JTDIwdk1EWnVkR29TQldWdUxVZENHZ0pIUWlJT0NBUWFDZ29JTDIwdk1ETTNhSG9xQ0FvR0VnUkhiMnhtS0FBKi4IACoqCAoiJENCQVNGUW9JTDIwdk1EWnVkR29TQldWdUxVZENHZ0pIUWlnQVABUAE?hl=en-GB&gl=GB&ceid=GB%3Aen',
                'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVAB/sections/CAQiRENCQVNMUW9JTDIwdk1EWnVkR29TQldWdUxVZENHZ0pIUWlJT0NBUWFDZ29JTDIwdk1ESjRlaklxQmdvRUVnSkdNU2dBKi4IACoqCAoiJENCQVNGUW9JTDIwdk1EWnVkR29TQldWdUxVZENHZ0pIUWlnQVABUAE?hl=en-GB&gl=GB&ceid=GB%3Aen',
                'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVAB/sections/CAQiS0NCQVNNZ29JTDIwdk1EWnVkR29TQldWdUxVZENHZ0pIUWlJT0NBUWFDZ29JTDIwdk1ERnpaMndxQ3dvSkVnZERlV05zYVc1bktBQSouCAAqKggKIiRDQkFTRlFvSUwyMHZNRFp1ZEdvU0JXVnVMVWRDR2dKSFFpZ0FQAVAB?hl=en-GB&gl=GB&ceid=GB%3Aen',
                'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVAB/sections/CAQiS0NCQVNNZ29JTDIwdk1EWnVkR29TQldWdUxVZENHZ0pIUWlJT0NBUWFDZ29JTDIwdk1EbDRjRjhxQ3dvSkVnZERjbWxqYTJWMEtBQSouCAAqKggKIiRDQkFTRlFvSUwyMHZNRFp1ZEdvU0JXVnVMVWRDR2dKSFFpZ0FQAVAB?hl=en-GB&gl=GB&ceid=GB%3Aen',
                'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVAB/sections/CAQiSENCQVNNQW9JTDIwdk1EWnVkR29TQldWdUxVZENHZ0pIUWlJT0NBUWFDZ29JTDIwdk1EWmljV1FxQ1FvSEVnVlNkV2RpZVNnQSouCAAqKggKIiRDQkFTRlFvSUwyMHZNRFp1ZEdvU0JXVnVMVWRDR2dKSFFpZ0FQAVAB?hl=en-GB&gl=GB&ceid=GB%3Aen',
                'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVAB/sections/CAQiSkNCQVNNUW9JTDIwdk1EWnVkR29TQldWdUxVZENHZ0pIUWlJT0NBUWFDZ29JTDIwdk1EZGljekFxQ2dvSUVnWlVaVzV1YVhNb0FBKi4IACoqCAoiJENCQVNGUW9JTDIwdk1EWnVkR29TQldWdUxVZENHZ0pIUWlnQVABUAE?hl=en-GB&gl=GB&ceid=GB%3Aen',
                'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVAB/sections/CAQiSkNCQVNNUW9JTDIwdk1EWnVkR29TQldWdUxVZENHZ0pIUWlJT0NBUWFDZ29JTDIwdk1HcDRlSFFxQ2dvSUVnWlNZV05wYm1jb0FBKi4IACoqCAoiJENCQVNGUW9JTDIwdk1EWnVkR29TQldWdUxVZENHZ0pIUWlnQVABUAE?hl=en-GB&gl=GB&ceid=GB%3Aen',
                'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVAB/sections/CAQiTENCQVNNd29JTDIwdk1EWnVkR29TQldWdUxVZENHZ0pIUWlJT0NBUWFDZ29JTDIwdk1ESjJlRFFxREFvS0VnaEdiMjkwWW1Gc2JDZ0EqLggAKioICiIkQ0JBU0ZRb0lMMjB2TURadWRHb1NCV1Z1TFVkQ0dnSkhRaWdBUAFQAQ?hl=en-GB&gl=GB&ceid=GB%3Aen',
                'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVAB?hl=en-GB&gl=GB&ceid=GB%3Aen',
                'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US%3Aen&oc=11',
                'https://openrss.org/www.inquirer.com/sports/',
                'https://rss.dw.com/rdf/rss-en-sports',
                'https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml',
                'https://sports.yahoo.com/rss/',
                'https://time.com/sports/feed/',
                'https://www.cbssports.com/rss/headlines/',
                'https://www.chicagotribune.com/sports/feed/',
                'https://www.dawn.com/feeds/sport/',
                'https://www.espn.com/espn/rss/news',
                'https://www.football365.com/rss',
                'https://www.foxsports.com/feedout/syndicatedContent?categoryId=117',
                'https://www.independent.co.uk/sport/rss',
                'https://www.latimes.com/sports/rss2.0.xml',
                'https://www.reddit.com/r/CFB.rss',
                'https://www.reddit.com/r/formula1.rss',
                'https://www.reddit.com/r/indepthsports.rss',
                'https://www.reddit.com/r/mlb.rss',
                'https://www.reddit.com/r/nba.rss',
                'https://www.reddit.com/r/nfl.rss',
                'https://www.reddit.com/r/soccer.rss',
                'https://www.reddit.com/r/sports.rss',
                'https://www.scmp.com/rss/95/feed',
                'https://www.seattletimes.com/sports/feed/',
                'https://www.sfgate.com/rss/feed/top-sports-stories-rss-feed-487.php',
                'https://www.skysports.com/rss/12040',
                'https://www.sportskeeda.com/feed',
                'https://www.teamtalk.com/rss',
                'https://www.theguardian.com/sport/rss',
                'https://www.theguardian.com/uk/sport/rss',
                'https://www.thehindu.com/sport/feeder/default.rss',
                'https://www.triathlonmag.com.au/rss',
                'https://www.westhesportsguy.com/feeds/posts/default',
            ],
            Technology: [
                'http://anandtech.com/rss/',
                'http://atomicsupermen.wordpress.com/feed/',
                'http://bloggingthemonkey.blogspot.com/feeds/posts/default',
                'http://boingboing.net/feed',
                'http://feeds.arstechnica.com/arstechnica/index',
                'http://feeds.feedburner.com/AllDiscovermagazinecomContent?format=xml',
                'http://feeds.feedburner.com/IeeeSpectrumFullText',
                'http://feeds.feedburner.com/IntoMobile?format=xml',
                'http://feeds.feedburner.com/KhronosorgNews',
                'http://feeds.feedburner.com/Liliputing?format=xml',
                'http://feeds.feedburner.com/Medgadget',
                'http://feeds.feedburner.com/NanotechwebTechUpdate',
                'http://feeds.feedburner.com/RedmondPie',
                'http://feeds.feedburner.com/Techcrunch',
                'http://feeds.feedburner.com/armdevices?format=xml',
                'http://feeds.feedburner.com/cnx-software/blog?format=xml',
                'http://feeds.feedburner.com/igyaan',
                'http://feeds.feedburner.com/oled-info',
                'http://feeds.feedburner.com/reason/AllArticles',
                'http://feeds.feedburner.com/ubergizmo',
                'http://feeds.feedburner.com/venturebeat/SZYF',
                'http://feeds.mashable.com/Mashable',
                'http://freegamer.blogspot.com/feeds/posts/default',
                'http://gliden64.blogspot.com/feeds/posts/default',
                'http://gpuopen.com/feed/',
                'http://lwn.net/headlines/newrss',
                'http://makezine.com/feed/',
                'http://mobilesemi.blogspot.com/feeds/posts/default',
                'http://rss.cnn.com/rss/cnn_tech.rss',
                'http://rss.nytimes.com/services/xml/rss/nyt/Technology.xml',
                'http://rss.slashdot.org/Slashdot/slashdot',
                'http://rss.slashdot.org/Slashdot/slashdotMain',
                'http://semiaccurate.com/feed/',
                'http://semiengineering.com/feed/',
                'http://sreweekly.com/feed/',
                'http://stratechery.com/feed/',
                'http://thehackernews.com/feeds/posts/default',
                'http://www.androidauthority.com/feed',
                'http://www.androidpolice.com/feed',
                'http://www.cancelledscifi.com/feed/',
                'http://www.computerweekly.com/rss/All-Computer-Weekly-content.xml',
                'http://www.cringely.com/feed/',
                'http://www.digitimes.com/rss/daily.xml',
                'http://www.engadget.com/rss.xml',
                'http://www.extremetech.com/feed',
                'http://www.fark.com/fark.rss',
                'http://www.fudzilla.com/?format=feed',
                'http://www.jeffq.com/blog/feed/',
                'http://www.lakka.tv/articles/feed.xml',
                'http://www.libretro.com/index.php/feed/',
                'http://www.macrumors.com/macrumors.xml',
                'http://www.metafilter.com/tags/apple/rss',
                'http://www.metafilter.com/tags/computers/rss',
                'http://www.metafilter.com/tags/google/rss',
                'http://www.metafilter.com/tags/internet/rss',
                'http://www.metafilter.com/tags/technology/rss',
                'http://www.metafilter.com/tags/web/rss',
                'http://www.mondo2000.com/feed/',
                'http://www.phdcomics.com/gradfeed.php',
                'http://www.phoronix.com/phoronix-rss.php',
                'http://www.pocketables.com/feed',
                'http://www.sammobile.com/feed/',
                'http://www.smbc-comics.com/rss.php',
                'http://www.techcentral.ie/feed/',
                'http://www.techradar.com/rss',
                'http://www.theregister.co.uk/headlines.atom',
                'http://www.theverge.com/rss/full.xml',
                'http://www.tomshardware.com/feeds/rss2/all.xml',
                'http://www.umpcportal.com/feed/',
                'http://www.wired.com/feed/',
                'http://www.xda-developers.com/feed/',
                'http://www.zdnet.com/news/rss.xml',
                'http://xenia.jp/feed.xml',
                'https://512pixels.net/feed/',
                'https://9to5google.com/feed',
                'https://9to5mac.com/feed/',
                'https://abcnews.go.com/abcnews/technologyheadlines',
                'https://androidpctv.com/feed/',
                'https://api.axios.com/feed/technology',
                'https://appleinsider.com/rss/news/',
                'https://atp.fm/rss',
                'https://betanews.com/feed/',
                'https://cloudseclist.com/feed.xml',
                'https://digitechbytes.com/feed/',
                'https://electrek.co/feed/',
                'https://feeds.bbci.co.uk/news/technology/rss.xml',
                'https://feeds.elpais.com/mrss-s/list/ep/site/english.elpais.com/section/science-tech',
                'https://feeds.elpais.com/mrss-s/list/ep/site/english.elpais.com/section/technology',
                'https://feeds.feedblitz.com/newatlas',
                'https://feeds.feedburner.com/ausdroid/feed',
                'https://feeds.feedburner.com/codinghorror',
                'https://feeds.feedburner.com/ndtvnews-top-stories',
                'https://feeds.feedburner.com/thenextweb',
                'https://feeds.macrumors.com/MacRumors-All',
                'https://feeds.npr.org/1019/rss.xml',
                'https://feeds.twit.tv/twit.xml',
                'https://feeds.washingtonpost.com/rss/business/technology',
                'https://flipshope.com/blog/feed',
                'https://futurefive.co.nz/feed',
                'https://futurism.com/feed',
                'https://gigaom.com/feed/?x=1',
                'https://gizmodo.com/feed',
                'https://gizmodo.com/rss',
                'https://hackaday.com/feed/',
                'https://insiderpaper.com/feed/',
                'https://knowtechie.com/feed/',
                'https://krebsonsecurity.com/feed/',
                'https://kubernetes.io/feed.xml',
                'https://latesttechno.in/feed/',
                'https://lobste.rs/rss',
                'https://mobilesyrup.com/feed',
                'https://moviecode.tumblr.com/rss',
                'https://mshibanami.github.io/GitHubTrendingRSS/daily/all.xml',
                'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US%3Aen&oc=11',
                'https://news969.com/feed/',
                'https://nocamels.com/feed/',
                'https://openrss.org/www.reuters.com/technology/',
                'https://osmc.tv/rss',
                'https://randomascii.wordpress.com/feed/',
                'https://readwrite.com/feed/',
                'https://restic.net/blog/index.xml',
                'https://retropie.org.uk/feed/',
                'https://rss.nytimes.com/services/xml/rss/nyt/PersonalTech.xml',
                'https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml',
                'https://rss.politico.com/technology.xml',
                'https://rthackersnews.blogspot.com/feeds/posts/default?alt=rss',
                'https://soylentnews.org/index.rss',
                'https://spectrum.ieee.org/feeds/feed.rss',
                'https://spider760.blogspot.com/feeds/posts/default?alt=rss',
                'https://stallman.org/rss/rss.xml',
                'https://techcavit.com/feed/',
                'https://techcrunch.com/feed/',
                'https://technode.com/feed/',
                'https://techviral.net/feed/',
                'https://techxplore.com/rss-feed/',
                'https://themarkup.org/feeds/rss.xml',
                'https://thenextweb.com/feed/',
                'https://tildes.net/topics.rss',
                'https://time.com/tech/feed/',
                'https://www.404media.co/rss/',
                'https://www.aclu.org/taxonomy/channel-term/1/feed',
                'https://www.androidauthority.com/feed/',
                'https://www.androidheadlines.com/feed',
                'https://www.antifraudnews.com/feed/',
                'https://www.betechwise.com/feed/',
                'https://www.bleepingcomputer.com/feed/',
                'https://www.blogger.com/feeds/4457929370096894305/posts/default',
                'https://www.chinatechnews.com/feed',
                'https://www.cnet.com/rss/news/',
                'https://www.codeofhonor.com/blog/feed',
                'https://www.cultofmac.com/feed/',
                'https://www.dawn.com/feeds/tech/',
                'https://www.developer-tech.com/feed',
                'https://www.digitaltrends.com/feed/',
                'https://www.droid-life.com/feed',
                'https://www.eff.org/rss/pressrelease',
                'https://www.engadget.com/rss.xml',
                'https://www.eweek.com/feed/',
                'https://www.extremetech.com/feed',
                'https://www.fastcompany.com/latest/rss?truncated=true',
                'https://www.firstpost.com/commonfeeds/v1/mfp/rss/tech.xml',
                'https://www.gadgetsinnepal.com.np/feed/',
                'https://www.geekwire.com/feed',
                'https://www.ghacks.net/feed/',
                'https://www.lastweekinaws.com/feed',
                'https://www.latimes.com/business/technology/rss2.0.xml',
                'https://www.lighthome.in/feed/',
                'https://www.macobserver.com/feed/',
                'https://www.macsparky.com/feed/',
                'https://www.macworld.com/en-us/feed',
                'https://www.macworld.com/index.rss',
                'https://www.mercurynews.com/tag/siliconbeat/feed/',
                'https://www.microled-info.com/rss.xml',
                'https://www.nature.com/nature.rss',
                'https://www.naval-technology.com/feed/',
                'https://www.newskart.com/feed',
                'https://www.nextgov.com/rss/all/',
                'https://www.pcmag.com/feeds/rss/latest',
                'https://www.pcworld.com/index.rss',
                'https://www.platformexecutive.com/feed',
                'https://www.popularmechanics.com/rss/default.xml',
                'https://www.quantamagazine.org/feed',
                'https://www.raspberrypi.org/feed/',
                'https://www.rayarena.com/feed',
                'https://www.reddit.com/r/Apple/.rss',
                'https://www.reddit.com/r/Google/.rss',
                'https://www.reddit.com/r/gadgets/.rss',
                'https://www.reddit.com/r/hardware/.rss',
                'https://www.reddit.com/r/iphone/.rss',
                'https://www.reddit.com/r/technology/.rss',
                'https://www.relay.fm/analogue/feed',
                'https://www.relay.fm/clockwise/feed',
                'https://www.relay.fm/rocket/feed',
                'https://www.researchsnipers.com/feed/',
                'https://www.schneier.com/feed/atom',
                'https://www.scmp.com/rss/36/feed',
                'https://www.securityweek.com/feed/',
                'https://www.servethehome.com/feed/',
                'https://www.siliconrepublic.com/feed',
                'https://www.slashgear.com/feed/',
                'https://www.techdirt.com/techdirt_rss.xml',
                'https://www.techfeeddata.com/feed',
                'https://www.techinasia.com/feed',
                'https://www.techjuice.pk/feed/',
                'https://www.techmeme.com/feed.xml',
                'https://www.technews.city/feeds/posts/default?alt=rss',
                'https://www.technewsworld.com/perl/syndication/rssfull.pl',
                'https://www.technologydrift.com/feed/',
                'https://www.technologyreview.com/feed',
                'https://www.techpout.com/feed/',
                'https://www.techrepublic.com/rssfeeds/articles/?feedType=rssfeeds&sort=latest',
                'https://www.techspot.com/backend.xml',
                'https://www.theblackweb.in/feed/',
                'https://www.theguardian.com/uk/technology/rss',
                'https://www.theverge.com/rss/frontpage',
                'https://www.theverge.com/rss/index.xml',
                'https://www.vox.com/rss/technology/index.xml',
                'https://www.wired.com/feed/rss',
                'https://www.wired.com/feed/tag/ai/latest/rss',
                'https://www.youtube.com/feeds/videos.xml?user=CNETTV',
                'https://www.youtube.com/feeds/videos.xml?user=LinusTechTips',
                'https://www.youtube.com/feeds/videos.xml?user=TheVerge',
                'https://www.youtube.com/feeds/videos.xml?user=marquesbrownlee',
                'https://www.youtube.com/feeds/videos.xml?user=unboxtherapy',
                'https://xkcd.com/rss.xml',
            ],
            Travel: [
                'http://rss.cnn.com/rss/cnn_travel.rss',
                'https://rss.nytimes.com/services/xml/rss/nyt/Travel.xml',
                'https://thepointsguy.com/feed/',
                'https://www.adventure-journal.com/feed/',
                'https://www.cntraveler.com/feed/rss',
                'https://www.euronews.com/rss?level=vertical&name=travel',
                'https://www.latimes.com/travel/rss2.0.xml',
                'https://www.lonelyplanet.com/blog/feed/atom/',
                'https://www.sfgate.com/rss/feed/travel-news-and-features-520.php',
                'https://www.theguardian.com/travel/rss',
                'https://www.thehindu.com/life-and-style/travel/feeder/default.rss',
            ],
            USA: [
                'http://dailysignal.com//feed/',
                'http://feeds.feedburner.com/Davidthompson',
                'http://feeds.foxnews.com/foxnews/national',
                'http://rss.cnn.com/rss/cnn_allpolitics.rss',
                'http://rss.cnn.com/rss/edition_us.rss',
                'http://rss.slashdot.org/Slashdot/slashdotPolitics',
                'http://www.marketwatch.com/rss/topstories/',
                'http://www.metafilter.com/tags/us/rss',
                'http://www.metafilter.com/tags/uspolitics/rss',
                'http://www.newyorker.com/services/rss/feeds/everything.xml',
                'http://www.slate.com/articles/news_and_politics.fulltext.all.10.rss',
                'http://www.slate.com/articles/news_and_politics/politics.teaser.all.10.rss/',
                'https://abcnews.go.com/abcnews/politicsheadlines',
                'https://abcnews.go.com/abcnews/usheadlines',
                'https://api.axios.com/feed/politics',
                'https://feeds.elpais.com/mrss-s/list/ep/site/english.elpais.com/section/usa',
                'https://feeds.feedburner.com/Popehat',
                'https://feeds.nbcnews.com/msnbc/public/news',
                'https://feeds.npr.org/1014/rss.xml',
                'https://feeds.washingtonpost.com/rss/national',
                'https://feeds.washingtonpost.com/rss/rss_fact-checker',
                'https://feeds.washingtonpost.com/rss/rss_the-fix',
                'https://fivethirtyeight.com/features/feed/',
                'https://justthenews.com/rss.xml',
                'https://nypost.com/politics/feed/',
                'https://nypost.com/us-news/feed/',
                'https://openrss.org/apnews.com/politics',
                'https://openrss.org/apnews.com/us-news',
                'https://openrss.org/www.axios.com',
                'https://openrss.org/www.inquirer.com/politics/',
                'https://pjmedia.com/news-and-politics/feed',
                'https://politicalwire.com/feed/',
                'https://prospect.org/api/rss/content.rss',
                'https://quillette.com/tag/politics/rss',
                'https://reason.com/feed/',
                'https://reason.com/volokh/atom.xml',
                'https://rss.csmonitor.com/feeds/usa',
                'https://rss.nytimes.com/services/xml/rss/nyt/Politics.xml',
                'https://rss.nytimes.com/services/xml/rss/nyt/US.xml',
                'https://status451.com/feed/',
                'https://theconversation.com/us/articles.atom',
                'https://theconversation.com/us/politics/articles.atom',
                'https://thehill.com/homenews/campaign/feed/',
                'https://thehill.com/homenews/feed/',
                'https://thehill.com/homenews/media/feed/',
                'https://thehill.com/lobbying/feed/',
                'https://thehill.com/regulation/feed/',
                'https://theintercept.com/feed/',
                'https://time.com/politics/feed',
                'https://time.com/us/feed',
                'https://www.allsides.com/rss/news',
                'https://www.alternet.org/feeds/feed.rss',
                'https://www.astralcodexten.com/feed',
                'https://www.boston.com/tag/politics/feed/',
                'https://www.cbsnews.com/latest/rss/politics',
                'https://www.chicagotribune.com/news/politics/feed/',
                'https://www.compactmag.com/rss/',
                'https://www.latimes.com/politics/rss2.0.xml',
                'https://www.lemonde.fr/united-states/rss_full.xml',
                'https://www.nationalreview.com/corner/feed/',
                'https://www.nationalreview.com/feed/',
                'https://www.pbs.org/newshour/feeds/rss/politics',
                'https://www.pewresearch.org/feed/',
                'https://www.propublica.org/feeds/propublica/main',
                'https://www.reddit.com/r/AmericanPolitics/.rss',
                'https://www.reddit.com/r/NeutralPolitics/.rss',
                'https://www.reddit.com/r/politics/.rss',
                'https://www.riskhedge.com/rss',
                'https://www.rollingstone.com/politics/feed/',
                'https://www.salon.com/feed/',
                'https://www.scmp.com/rss/322262/feed',
                'https://www.seattletimes.com/nation/feed/',
                'https://www.spiked-online.com/topic/usa/feed/',
                'https://www.theatlantic.com/feed/best-of/',
                'https://www.themarshallproject.org/rss/recent',
                'https://www.thenation.com/feed/?post_type=article',
                'https://www.vox.com/rss/politics/index.xml',
                'https://www.washingtonexaminer.com/section/politics/feed/',
                'https://www.yahoo.com/news/rss/politics',
                'https://www.yahoo.com/news/rss/us',
                'https://www.youtube.com/feeds/videos.xml?channel_id=UCDRIjKy6eZOvKtOELtTdeUA',
            ],
            'Web Comics': [
                'http://nedroid.com/feed/atom/',
                'http://www.harkavagrant.com/rssfeed.php',
                'http://www.marycagle.com/rss.php',
                'http://www.threepanelsoul.com/rss.php',
                'https://killsixbilliondemons.com/feed/',
                'https://www.foxtrot.com/feed/',
                'https://xkcd.com/atom.xml',
            ],
            World: [
                'http://tass.com/rss/v2.xml',
                'https://abcnews.go.com/abcnews/internationalheadlines',
                'https://acleddata.com/feed/',
                'https://aljazeera.com/xml/rss/all.xml',
                'https://allafrica.com/tools/headlines/rdf/latest/headlines.rdf',
                'https://en.mercopress.com/rss/',
                'https://feeds.a.dj.com/rss/RSSOpinion.xml',
                'https://feeds.a.dj.com/rss/RSSWorldNews.xml',
                'https://feeds.bbci.co.uk/news/world/rss.xml',
                'https://feeds.elpais.com/mrss-s/list/ep/site/english.elpais.com/section/international',
                'https://feeds.elpais.com/mrss-s/pages/ep/site/english.elpais.com/portada',
                'https://feeds.feedburner.com/ndtvnews-world-news',
                'https://feeds.npr.org/1004/rss.xml',
                'https://feeds.washingtonpost.com/rss/world',
                'https://foreignpolicy.com/category/world-brief/feed/',
                'https://foreignpolicy.com/feed/',
                'https://jacobin.com/feed/',
                'https://japantoday.com/category/world/feed',
                'https://meduza.io/rss/en/all',
                'https://michaelwest.com.au/feed/',
                'https://novaramedia.com/category/articles/feed/',
                'https://novaramedia.com/feed/',
                'https://openrss.org/apnews.com/world-news',
                'https://openrss.org/www.reuters.com/world/',
                'https://restofworld.org/feed/latest',
                'https://rss.csmonitor.com/feeds/all',
                'https://rss.dw.com/rdf/rss-en-all',
                'https://rss.dw.com/rdf/rss-en-world',
                'https://rss.nytimes.com/services/xml/rss/nyt/World.xml',
                'https://thespectator.com/feed/',
                'https://theweek.com/feeds.xml',
                'https://time.com/world/feed',
                'https://www.abc.net.au/news/feed/45910/rss.xml',
                'https://www.al-monitor.com/rss',
                'https://www.allsides.com/blog',
                'https://www.allsides.com/rss/news',
                'https://www.arabnews.com/taxonomy/term/3/feed',
                'https://www.boston.com/tag/world-news/feed/',
                'https://www.cbsnews.com/latest/rss/world',
                'https://www.compactmag.com/rss/',
                'https://www.dawn.com/feeds/world/',
                'https://www.economist.com/asia/rss.xml',
                'https://www.economist.com/britain/rss.xml',
                'https://www.economist.com/china/rss.xml',
                'https://www.economist.com/europe/rss.xml',
                'https://www.economist.com/international/rss.xml',
                'https://www.economist.com/middle-east-and-africa/rss.xml',
                'https://www.economist.com/the-americas/rss.xml',
                'https://www.euronews.com/rss?level=vertical&name=news',
                'https://www.firstpost.com/commonfeeds/v1/mfp/rss/world.xml',
                'https://www.foreignaffairs.com/rss.xml',
                'https://www.france24.com/en/rss',
                'https://www.ft.com/rss/home/international',
                'https://www.ft.com/world?format=rss',
                'https://www.globalissues.org/news/feed',
                'https://www.lemonde.fr/en/rss/une.xml',
                'https://www.lemonde.fr/opinion/rss_full.xml',
                'https://www.mintpressnews.com/feed/',
                'https://www.newarab.com/rss',
                'https://www.pbs.org/newshour/feeds/rss/world',
                'https://www.pewresearch.org/feed/',
                'https://www.politico.eu/feed/',
                'https://www.reddit.com/r/UpliftingNews/.rss',
                'https://www.reddit.com/r/inthenews/.rss',
                'https://www.reddit.com/r/truenews/.rss',
                'https://www.reddit.com/r/worldnews/.rss',
                'https://www.rferl.org/api/zbqiml-vomx-tpeqkmy',
                'https://www.rfi.fr/en/international/rss',
                'https://www.rt.com/rss/',
                'https://www.rt.com/rss/news/',
                'https://www.scmp.com/rss/5/feed',
                'https://www.scmp.com/rss/91/feed',
                'https://www.semafor.com/rss.xml',
                'https://www.spiegel.de/international/index.rss',
                'https://www.spiegel.de/international/world/index.rss',
                'https://www.spiked-online.com/topic/world/feed/',
                'https://www.straitstimes.com/news/world/rss.xml',
                'https://www.theglobeandmail.com/arc/outboundfeeds/rss/category/world/',
                'https://www.theguardian.com/world/rss',
                'https://www.thehindu.com/news/international/feeder/default.rss',
                'https://www.timesofisrael.com/feed/',
                'https://www.voanews.com/api/',
                'https://www.wsws.org/en/rss.xml',
                'https://www.youtube.com/feeds/videos.xml?channel_id=UCQfwfsi5VrQ8yKZ-UWmAEFg',
            ],
        };
        class $bog_ainews_app_sources extends $.$bog_ainews_app_sources {
            runtime_links() {
                const custom_rss = this.custom_sources($bog_ainews_app_sources_custom_rss_feeds);
                return { ...$bog_ainews_app_source_links, my: custom_rss };
            }
            Categories() {
                return Object.keys($bog_ainews_app_source_links).map(category => this.Category_page(category));
            }
            category_title(category) {
                return category;
            }
            suggestions(category) {
                const urls = $bog_ainews_app_source_links[category];
                return urls.reduce((acc, url) => {
                    try {
                        const domain = new URL(url).hostname.replace('www.', '');
                        acc[url] = domain;
                    }
                    catch {
                        acc[url] = url;
                    }
                    return acc;
                }, {});
            }
            sources(id, next) {
                if (next !== undefined)
                    return $mol_state_local.value(id, next);
                return $mol_state_local.value(id) ?? [];
            }
            custom_sources(id, next) {
                if (next !== undefined)
                    return $mol_state_local.value(id, next);
                return $mol_state_local.value(id) ?? [];
            }
            My_rss_feeds() {
                const my_rss = $mol_state_local.value($bog_ainews_app_sources_custom_rss_feeds) ?? [];
                return my_rss.map((category) => this.My_rss_item(category));
            }
            add_custom_feed_click() {
                const new_url = this.Add_feed_string().value();
                const current_list = this.custom_sources($bog_ainews_app_sources_custom_rss_feeds);
                if (current_list.includes(new_url)) {
                    return;
                }
                if (new_url !== null && new_url.trim() !== '') {
                    if (new_url.includes('https://') == false && new_url.includes('http://') == false) {
                        throw 'Need valid http url!';
                    }
                }
                const new_list = [...current_list, new_url];
                this.custom_sources($bog_ainews_app_sources_custom_rss_feeds, new_list);
                $mol_state_local.value($bog_ainews_app_sources_custom_rss_feeds, new_list);
                this.Add_feed_string().value('');
            }
            my_rss_title(id) {
                return id;
            }
            delete_custom_feed_click(id) {
                const current_list = this.custom_sources($bog_ainews_app_sources_custom_rss_feeds);
                const new_list = current_list.filter((item) => item != id);
                this.custom_sources($bog_ainews_app_sources_custom_rss_feeds, new_list);
                $mol_state_local.value($bog_ainews_app_sources_custom_rss_feeds, new_list);
            }
        }
        __decorate([
            $mol_mem_key
        ], $bog_ainews_app_sources.prototype, "custom_sources", null);
        __decorate([
            $mol_mem_key
        ], $bog_ainews_app_sources.prototype, "my_rss_title", null);
        $$.$bog_ainews_app_sources = $bog_ainews_app_sources;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));


//# sourceMappingURL=web.js.map
