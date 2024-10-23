import { defineComponent as Pe, openBlock as b, createElementBlock as S, normalizeClass as Se, renderSlot as F, createElementVNode as I, toDisplayString as se, createTextVNode as Ee, ref as q, createCommentVNode as P, Fragment as ye, resolveComponent as Yt, renderList as De, createBlock as fe, onMounted as tt, createVNode as ve, withCtx as oe, withKeys as le, withModifiers as ke, withDirectives as Xe, vShow as ut, Transition as lt, computed as G, mergeProps as Ue, vModelText as ou, vModelDynamic as ns, pushScopeId as rs, popScopeId as as, normalizeStyle as Mt, reactive as ln, useSlots as qo, toRef as wa, onUnmounted as zo, watch as un, unref as g, isRef as Ct, createSlots as et, normalizeProps as rt, guardReactiveProps as bt, Teleport as os, resolveDynamicComponent as bn, nextTick as sn, onBeforeUpdate as is, getCurrentScope as ls, onScopeDispose as us } from "vue";
const ss = Pe({
  name: "CustomButton",
  props: {
    label: {
      type: String,
      required: !1
    },
    styleType: {
      type: String,
      required: !1,
      default: "primary"
    },
    size: {
      type: String,
      required: !1,
      default: "default"
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e, t) {
    return {
      assignStyle: () => {
        let a = "btn ", i = "";
        switch (e.styleType) {
          case "primary":
            i = "btn-primary";
            break;
          case "primary-outline":
            i = "btn-primary-outline";
            break;
          case "secondary":
            i = "btn-secondary";
            break;
          case "secondary-outline":
            i = "btn-secondary-outline";
            break;
        }
        let o = "";
        switch (e.size) {
          case "default":
            o = "";
            break;
          case "small":
            o = "btn--small";
            break;
          case "large":
            o = "btn--large";
            break;
        }
        let l = "";
        return e.disabled && (l = " btn--disabled"), a + " " + i + " " + o + " " + l;
      },
      handleClick: (a) => {
        if (e.disabled)
          return a.preventDefault();
        t.emit("onClick");
      }
    };
  }
}), je = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, cs = ["disabled"];
function fs(e, t, n, r, a, i) {
  return b(), S("button", {
    class: Se(["custom-button", e.assignStyle()]),
    disabled: e.disabled,
    onClick: t[0] || (t[0] = (...o) => e.handleClick && e.handleClick(...o))
  }, [
    F(e.$slots, "slot-left"),
    I("span", null, se(e.label), 1),
    F(e.$slots, "slot-right")
  ], 10, cs);
}
const ds = /* @__PURE__ */ je(ss, [["render", fs]]), ps = Pe({
  name: "CustomCheckbox",
  props: {
    modelValue: {
      type: Boolean
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      required: !0
    },
    name: {
      type: String,
      default: ""
    },
    checked: {
      type: Boolean
    }
  },
  methods: {
    updateInput(e) {
      this.$emit("update:checked", e.target.checked);
    }
  }
}), ys = ["checked", "disabled", "name"], ms = /* @__PURE__ */ I("span", { class: "checkmark" }, null, -1);
function hs(e, t, n, r, a, i) {
  return b(), S("label", {
    class: Se(["wrapper flex items-center", { disabled: e.disabled }])
  }, [
    Ee(se(e.label) + " ", 1),
    I("input", {
      class: "checkbox",
      type: "checkbox",
      checked: e.checked,
      onChange: t[0] || (t[0] = (...o) => e.updateInput && e.updateInput(...o)),
      disabled: e.disabled,
      name: e.name
    }, null, 40, ys),
    ms
  ], 2);
}
const vs = /* @__PURE__ */ je(ps, [["render", hs]]), bs = Pe({
  name: "CustomFileUpload",
  props: {
    label: {
      type: String,
      required: !1
    },
    placeholder: {
      type: String,
      required: !1,
      default: "Nessun file selezionato"
    },
    file: {
      type: File,
      required: !1
    }
  },
  setup(e, t) {
    const n = q(null), r = () => {
      n.value.click();
    }, a = q(null);
    return {
      inputFileRef: n,
      handleButtonClick: r,
      handleInputChange: ({ target: l }) => {
        l && l.files.length > 0 && (a.value = l.files[0], t.emit("update:file", l.files[0]), n.value.value = "");
      },
      currentFile: a,
      deleteFile: () => {
        a.value = null, t.emit("update:file", null);
      }
    };
  }
}), gs = { class: "generic-input" }, _s = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, ws = { class: "input-container" }, Os = { class: "generic-input__input-file" }, $s = { class: "generic-input__input-file__file" }, Ss = {
  key: 0,
  class: "generic-input__input-file__file__placeholder"
}, ks = {
  key: 1,
  class: "generic-input__input-file__file__file-name"
}, Ps = /* @__PURE__ */ I("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2.5",
  stroke: "#FFFFFF",
  class: "cancel"
}, [
  /* @__PURE__ */ I("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Ts = [
  Ps
];
function Ds(e, t, n, r, a, i) {
  return b(), S("div", gs, [
    e.label ? (b(), S("label", _s, se(e.label), 1)) : P("", !0),
    I("div", ws, [
      F(e.$slots, "prepend"),
      I("input", {
        type: "file",
        class: "generic-input__input-file--hidden",
        ref: "inputFileRef",
        onChange: t[0] || (t[0] = (...o) => e.handleInputChange && e.handleInputChange(...o))
      }, null, 544),
      I("div", Os, [
        I("div", {
          class: "generic-input__input-file__button",
          onClick: t[1] || (t[1] = (...o) => e.handleButtonClick && e.handleButtonClick(...o))
        }, " Sfoglia... "),
        I("div", $s, [
          e.currentFile ? (b(), S("div", ks, [
            Ee(se(e.currentFile.name) + " ", 1),
            I("div", {
              onClick: t[2] || (t[2] = (...o) => e.deleteFile && e.deleteFile(...o)),
              class: "generic-input__input-file__file__file-name__cancel"
            }, Ts)
          ])) : (b(), S("div", Ss, se(e.placeholder), 1))
        ])
      ])
    ])
  ]);
}
const D_ = /* @__PURE__ */ je(bs, [["render", Ds]]), Rs = Pe({
  name: "CustomLoader",
  props: {
    loading: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "default"
    }
  }
}), xs = /* @__PURE__ */ I("span", { class: "sr-only" }, "Loading...", -1), Cs = [
  xs
];
function Ms(e, t, n, r, a, i) {
  return e.loading ? (b(), S("div", {
    key: 0,
    class: Se(["spinner-border", e.size]),
    role: "status"
  }, Cs, 2)) : P("", !0);
}
const Ns = /* @__PURE__ */ je(Rs, [["render", Ms]]), Es = Pe({
  name: "CustomModal",
  props: {
    isOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    modalTitle: {
      type: String,
      required: !1,
      default: "Titolo modale"
    },
    withoutTitle: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, t) {
    return { emitCloseModal: () => {
      t.emit("closeModal");
    } };
  }
}), As = {
  key: 0,
  class: "custom-modal"
}, Bs = { class: "modal-background" }, Is = { class: "modal-container" }, Ls = { class: "modal-header" }, Vs = { class: "modal-title" }, Us = /* @__PURE__ */ I("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  width: "24px",
  height: "24px"
}, [
  /* @__PURE__ */ I("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Fs = [
  Us
], Ys = { class: "modal-body" }, js = { class: "modal-footer" };
function Hs(e, t, n, r, a, i) {
  return e.isOpen ? (b(), S("div", As, [
    I("div", Bs, [
      I("div", Is, [
        I("div", Ls, [
          I("div", Vs, [
            e.withoutTitle ? P("", !0) : (b(), S(ye, { key: 0 }, [
              Ee(se(e.modalTitle), 1)
            ], 64))
          ]),
          I("div", {
            class: "modal-close",
            onClick: t[0] || (t[0] = (...o) => e.emitCloseModal && e.emitCloseModal(...o))
          }, Fs)
        ]),
        I("div", Ys, [
          F(e.$slots, "modal-body")
        ]),
        I("div", js, [
          F(e.$slots, "modal-footer")
        ])
      ])
    ])
  ])) : P("", !0);
}
const R_ = /* @__PURE__ */ je(Es, [["render", Hs]]), Ws = Pe({
  name: "CustomMultiCheckbox",
  components: {
    CustomCheckbox: vs
  },
  props: {
    value: {
      type: Array,
      default: []
    },
    options: {
      type: Array,
      required: !0
    }
  },
  setup(e, t) {
    return { check: (r, a) => {
      let i = [...e.value];
      a ? i.push(r) : i.splice(i.indexOf(r), 1), t.emit("update:value", i);
    } };
  }
});
function qs(e, t, n, r, a, i) {
  const o = Yt("custom-checkbox");
  return b(), S("div", null, [
    (b(!0), S(ye, null, De(e.options, (l, f) => (b(), fe(o, {
      key: f,
      label: l.label,
      checked: e.value.includes(l.id),
      "onUpdate:checked": (u) => e.check(l.id, u)
    }, null, 8, ["label", "checked", "onUpdate:checked"]))), 128))
  ]);
}
const x_ = /* @__PURE__ */ je(Ws, [["render", qs]]);
function iu(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: lu } = Object.prototype, { getPrototypeOf: Go } = Object, Qo = ((e) => (t) => {
  const n = lu.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), _t = (e) => (e = e.toLowerCase(), (t) => Qo(t) === e), Wr = (e) => (t) => typeof t === e, { isArray: cn } = Array, Oa = Wr("undefined");
function zs(e) {
  return e !== null && !Oa(e) && e.constructor !== null && !Oa(e.constructor) && Wt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const uu = _t("ArrayBuffer");
function Gs(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && uu(e.buffer), t;
}
const Qs = Wr("string"), Wt = Wr("function"), su = Wr("number"), cu = (e) => e !== null && typeof e == "object", Zs = (e) => e === !0 || e === !1, gn = (e) => {
  if (Qo(e) !== "object")
    return !1;
  const t = Go(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Js = _t("Date"), Ks = _t("File"), Xs = _t("Blob"), ec = _t("FileList"), tc = (e) => cu(e) && Wt(e.pipe), nc = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || lu.call(e) === t || Wt(e.toString) && e.toString() === t);
}, rc = _t("URLSearchParams"), ac = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function qr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), cn(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let l;
    for (r = 0; r < o; r++)
      l = i[r], t.call(null, e[l], l, e);
  }
}
function $a() {
  const e = {}, t = (n, r) => {
    gn(e[r]) && gn(n) ? e[r] = $a(e[r], n) : gn(n) ? e[r] = $a({}, n) : cn(n) ? e[r] = n.slice() : e[r] = n;
  };
  for (let n = 0, r = arguments.length; n < r; n++)
    arguments[n] && qr(arguments[n], t);
  return e;
}
const oc = (e, t, n, { allOwnKeys: r } = {}) => (qr(t, (a, i) => {
  n && Wt(a) ? e[i] = iu(a, n) : e[i] = a;
}, { allOwnKeys: r }), e), ic = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), lc = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, uc = (e, t, n, r) => {
  let a, i, o;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (a = Object.getOwnPropertyNames(e), i = a.length; i-- > 0; )
      o = a[i], (!r || r(o, e, t)) && !l[o] && (t[o] = e[o], l[o] = !0);
    e = n !== !1 && Go(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, sc = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, cc = (e) => {
  if (!e)
    return null;
  if (cn(e))
    return e;
  let t = e.length;
  if (!su(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, fc = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Go(Uint8Array)), dc = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const i = a.value;
    t.call(e, i[0], i[1]);
  }
}, pc = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, yc = _t("HTMLFormElement"), mc = (e) => e.toLowerCase().replace(
  /[_-\s]([a-z\d])(\w*)/g,
  function(n, r, a) {
    return r.toUpperCase() + a;
  }
), yi = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), hc = _t("RegExp"), fu = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  qr(n, (a, i) => {
    t(a, i, e) !== !1 && (r[i] = a);
  }), Object.defineProperties(e, r);
}, vc = (e) => {
  fu(e, (t, n) => {
    const r = e[n];
    if (!!Wt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not read-only method '" + n + "'");
      });
    }
  });
}, bc = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((i) => {
      n[i] = !0;
    });
  };
  return cn(e) ? r(e) : r(String(e).split(t)), n;
}, gc = () => {
}, _c = (e, t) => (e = +e, Number.isFinite(e) ? e : t), R = {
  isArray: cn,
  isArrayBuffer: uu,
  isBuffer: zs,
  isFormData: nc,
  isArrayBufferView: Gs,
  isString: Qs,
  isNumber: su,
  isBoolean: Zs,
  isObject: cu,
  isPlainObject: gn,
  isUndefined: Oa,
  isDate: Js,
  isFile: Ks,
  isBlob: Xs,
  isRegExp: hc,
  isFunction: Wt,
  isStream: tc,
  isURLSearchParams: rc,
  isTypedArray: fc,
  isFileList: ec,
  forEach: qr,
  merge: $a,
  extend: oc,
  trim: ac,
  stripBOM: ic,
  inherits: lc,
  toFlatObject: uc,
  kindOf: Qo,
  kindOfTest: _t,
  endsWith: sc,
  toArray: cc,
  forEachEntry: dc,
  matchAll: pc,
  isHTMLForm: yc,
  hasOwnProperty: yi,
  hasOwnProp: yi,
  reduceDescriptors: fu,
  freezeMethods: vc,
  toObjectSet: bc,
  toCamelCase: mc,
  noop: gc,
  toFiniteNumber: _c
};
function be(e, t, n, r, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a);
}
R.inherits(be, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const du = be.prototype, pu = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
].forEach((e) => {
  pu[e] = { value: e };
});
Object.defineProperties(be, pu);
Object.defineProperty(du, "isAxiosError", { value: !0 });
be.from = (e, t, n, r, a, i) => {
  const o = Object.create(du);
  return R.toFlatObject(e, o, function(f) {
    return f !== Error.prototype;
  }, (l) => l !== "isAxiosError"), be.call(o, e.message, t, n, r, a), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
var mn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, wc = typeof self == "object" ? self.FormData : window.FormData;
function Sa(e) {
  return R.isPlainObject(e) || R.isArray(e);
}
function yu(e) {
  return R.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function mi(e, t, n) {
  return e ? e.concat(t).map(function(a, i) {
    return a = yu(a), !n && i ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function Oc(e) {
  return R.isArray(e) && !e.some(Sa);
}
const $c = R.toFlatObject(R, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Sc(e) {
  return e && R.isFunction(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator];
}
function zr(e, t, n) {
  if (!R.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new (wc || FormData)(), n = R.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(N, H) {
    return !R.isUndefined(H[N]);
  });
  const r = n.metaTokens, a = n.visitor || d, i = n.dots, o = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && Sc(t);
  if (!R.isFunction(a))
    throw new TypeError("visitor must be a function");
  function u(v) {
    if (v === null)
      return "";
    if (R.isDate(v))
      return v.toISOString();
    if (!f && R.isBlob(v))
      throw new be("Blob is not supported. Use a Buffer instead.");
    return R.isArrayBuffer(v) || R.isTypedArray(v) ? f && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function d(v, N, H) {
    let U = v;
    if (v && !H && typeof v == "object") {
      if (R.endsWith(N, "{}"))
        N = r ? N : N.slice(0, -2), v = JSON.stringify(v);
      else if (R.isArray(v) && Oc(v) || R.isFileList(v) || R.endsWith(N, "[]") && (U = R.toArray(v)))
        return N = yu(N), U.forEach(function(W, J) {
          !(R.isUndefined(W) || W === null) && t.append(
            o === !0 ? mi([N], J, i) : o === null ? N : N + "[]",
            u(W)
          );
        }), !1;
    }
    return Sa(v) ? !0 : (t.append(mi(H, N, i), u(v)), !1);
  }
  const s = [], p = Object.assign($c, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: Sa
  });
  function h(v, N) {
    if (!R.isUndefined(v)) {
      if (s.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + N.join("."));
      s.push(v), R.forEach(v, function(U, E) {
        (!(R.isUndefined(U) || U === null) && a.call(
          t,
          U,
          R.isString(E) ? E.trim() : E,
          N,
          p
        )) === !0 && h(U, N ? N.concat(E) : [E]);
      }), s.pop();
    }
  }
  if (!R.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function hi(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Zo(e, t) {
  this._pairs = [], e && zr(e, this, t);
}
const mu = Zo.prototype;
mu.append = function(t, n) {
  this._pairs.push([t, n]);
};
mu.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, hi);
  } : hi;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function kc(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function hu(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || kc, a = n && n.serialize;
  let i;
  if (a ? i = a(t, n) : i = R.isURLSearchParams(t) ? t.toString() : new Zo(t, n).toString(r), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class vi {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    R.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const vu = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Pc = typeof URLSearchParams < "u" ? URLSearchParams : Zo, Tc = FormData, Dc = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), gt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Pc,
    FormData: Tc,
    Blob
  },
  isStandardBrowserEnv: Dc,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Rc(e, t) {
  return zr(e, new gt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, a, i) {
      return gt.isNode && R.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function xc(e) {
  return R.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Cc(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let i;
  for (r = 0; r < a; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function bu(e) {
  function t(n, r, a, i) {
    let o = n[i++];
    const l = Number.isFinite(+o), f = i >= n.length;
    return o = !o && R.isArray(a) ? a.length : o, f ? (R.hasOwnProp(a, o) ? a[o] = [a[o], r] : a[o] = r, !l) : ((!a[o] || !R.isObject(a[o])) && (a[o] = []), t(n, r, a[o], i) && R.isArray(a[o]) && (a[o] = Cc(a[o])), !l);
  }
  if (R.isFormData(e) && R.isFunction(e.entries)) {
    const n = {};
    return R.forEachEntry(e, (r, a) => {
      t(xc(r), a, n, 0);
    }), n;
  }
  return null;
}
function Mc(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new be(
    "Request failed with status code " + n.status,
    [be.ERR_BAD_REQUEST, be.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Nc = gt.isStandardBrowserEnv ? function() {
  return {
    write: function(n, r, a, i, o, l) {
      const f = [];
      f.push(n + "=" + encodeURIComponent(r)), R.isNumber(a) && f.push("expires=" + new Date(a).toGMTString()), R.isString(i) && f.push("path=" + i), R.isString(o) && f.push("domain=" + o), l === !0 && f.push("secure"), document.cookie = f.join("; ");
    },
    read: function(n) {
      const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return r ? decodeURIComponent(r[3]) : null;
    },
    remove: function(n) {
      this.write(n, "", Date.now() - 864e5);
    }
  };
}() : function() {
  return {
    write: function() {
    },
    read: function() {
      return null;
    },
    remove: function() {
    }
  };
}();
function Ec(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ac(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function gu(e, t) {
  return e && !Ec(t) ? Ac(e, t) : t;
}
const Bc = gt.isStandardBrowserEnv ? function() {
  const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
  let r;
  function a(i) {
    let o = i;
    return t && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
      href: n.href,
      protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
      host: n.host,
      search: n.search ? n.search.replace(/^\?/, "") : "",
      hash: n.hash ? n.hash.replace(/^#/, "") : "",
      hostname: n.hostname,
      port: n.port,
      pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
    };
  }
  return r = a(window.location.href), function(o) {
    const l = R.isString(o) ? a(o) : o;
    return l.protocol === r.protocol && l.host === r.host;
  };
}() : function() {
  return function() {
    return !0;
  };
}();
function fn(e, t, n) {
  be.call(this, e == null ? "canceled" : e, be.ERR_CANCELED, t, n), this.name = "CanceledError";
}
R.inherits(fn, be, {
  __CANCEL__: !0
});
function Ic(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
const Lc = R.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Vc = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(o) {
    a = o.indexOf(":"), n = o.substring(0, a).trim().toLowerCase(), r = o.substring(a + 1).trim(), !(!n || t[n] && Lc[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, bi = Symbol("internals"), _u = Symbol("defaults");
function en(e) {
  return e && String(e).trim().toLowerCase();
}
function _n(e) {
  return e === !1 || e == null ? e : R.isArray(e) ? e.map(_n) : String(e);
}
function Uc(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
function gi(e, t, n, r) {
  if (R.isFunction(r))
    return r.call(this, t, n);
  if (!!R.isString(t)) {
    if (R.isString(r))
      return t.indexOf(r) !== -1;
    if (R.isRegExp(r))
      return r.test(t);
  }
}
function Fc(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Yc(e, t) {
  const n = R.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(a, i, o) {
        return this[r].call(this, t, a, i, o);
      },
      configurable: !0
    });
  });
}
function Qt(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
function it(e, t) {
  e && this.set(e), this[_u] = t || null;
}
Object.assign(it.prototype, {
  set: function(e, t, n) {
    const r = this;
    function a(i, o, l) {
      const f = en(o);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const u = Qt(r, f);
      u && l !== !0 && (r[u] === !1 || l === !1) || (r[u || o] = _n(i));
    }
    return R.isPlainObject(e) ? R.forEach(e, (i, o) => {
      a(i, o, t);
    }) : a(t, e, n), this;
  },
  get: function(e, t) {
    if (e = en(e), !e)
      return;
    const n = Qt(this, e);
    if (n) {
      const r = this[n];
      if (!t)
        return r;
      if (t === !0)
        return Uc(r);
      if (R.isFunction(t))
        return t.call(this, r, n);
      if (R.isRegExp(t))
        return t.exec(r);
      throw new TypeError("parser must be boolean|regexp|function");
    }
  },
  has: function(e, t) {
    if (e = en(e), e) {
      const n = Qt(this, e);
      return !!(n && (!t || gi(this, this[n], n, t)));
    }
    return !1;
  },
  delete: function(e, t) {
    const n = this;
    let r = !1;
    function a(i) {
      if (i = en(i), i) {
        const o = Qt(n, i);
        o && (!t || gi(n, n[o], o, t)) && (delete n[o], r = !0);
      }
    }
    return R.isArray(e) ? e.forEach(a) : a(e), r;
  },
  clear: function() {
    return Object.keys(this).forEach(this.delete.bind(this));
  },
  normalize: function(e) {
    const t = this, n = {};
    return R.forEach(this, (r, a) => {
      const i = Qt(n, a);
      if (i) {
        t[i] = _n(r), delete t[a];
        return;
      }
      const o = e ? Fc(a) : String(a).trim();
      o !== a && delete t[a], t[o] = _n(r), n[o] = !0;
    }), this;
  },
  toJSON: function(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return R.forEach(
      Object.assign({}, this[_u] || null, this),
      (n, r) => {
        n == null || n === !1 || (t[r] = e && R.isArray(n) ? n.join(", ") : n);
      }
    ), t;
  }
});
Object.assign(it, {
  from: function(e) {
    return R.isString(e) ? new this(Vc(e)) : e instanceof this ? e : new this(e);
  },
  accessor: function(e) {
    const n = (this[bi] = this[bi] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function a(i) {
      const o = en(i);
      n[o] || (Yc(r, i), n[o] = !0);
    }
    return R.isArray(e) ? e.forEach(a) : a(e), this;
  }
});
it.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
R.freezeMethods(it.prototype);
R.freezeMethods(it);
function jc(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let a = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const u = Date.now(), d = r[i];
    o || (o = u), n[a] = f, r[a] = u;
    let s = i, p = 0;
    for (; s !== a; )
      p += n[s++], s = s % e;
    if (a = (a + 1) % e, a === i && (i = (i + 1) % e), u - o < t)
      return;
    const h = d && u - d;
    return h ? Math.round(p * 1e3 / h) : void 0;
  };
}
function _i(e, t) {
  let n = 0;
  const r = jc(50, 250);
  return (a) => {
    const i = a.loaded, o = a.lengthComputable ? a.total : void 0, l = i - n, f = r(l), u = i <= o;
    n = i;
    const d = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: l,
      rate: f || void 0,
      estimated: f && o && u ? (o - i) / f : void 0
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
function wi(e) {
  return new Promise(function(n, r) {
    let a = e.data;
    const i = it.from(e.headers).normalize(), o = e.responseType;
    let l;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    R.isFormData(a) && gt.isStandardBrowserEnv && i.setContentType(!1);
    let u = new XMLHttpRequest();
    if (e.auth) {
      const h = e.auth.username || "", v = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(h + ":" + v));
    }
    const d = gu(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), hu(d, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function s() {
      if (!u)
        return;
      const h = it.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), N = {
        data: !o || o === "text" || o === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: h,
        config: e,
        request: u
      };
      Mc(function(U) {
        n(U), f();
      }, function(U) {
        r(U), f();
      }, N), u = null;
    }
    if ("onloadend" in u ? u.onloadend = s : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(s);
    }, u.onabort = function() {
      !u || (r(new be("Request aborted", be.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new be("Network Error", be.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let v = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const N = e.transitional || vu;
      e.timeoutErrorMessage && (v = e.timeoutErrorMessage), r(new be(
        v,
        N.clarifyTimeoutError ? be.ETIMEDOUT : be.ECONNABORTED,
        e,
        u
      )), u = null;
    }, gt.isStandardBrowserEnv) {
      const h = (e.withCredentials || Bc(d)) && e.xsrfCookieName && Nc.read(e.xsrfCookieName);
      h && i.set(e.xsrfHeaderName, h);
    }
    a === void 0 && i.setContentType(null), "setRequestHeader" in u && R.forEach(i.toJSON(), function(v, N) {
      u.setRequestHeader(N, v);
    }), R.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), o && o !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", _i(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", _i(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (h) => {
      !u || (r(!h || h.type ? new fn(null, e, u) : h), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const p = Ic(d);
    if (p && gt.protocols.indexOf(p) === -1) {
      r(new be("Unsupported protocol " + p + ":", be.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(a || null);
  });
}
const Oi = {
  http: wi,
  xhr: wi
}, $i = {
  getAdapter: (e) => {
    if (R.isString(e)) {
      const t = Oi[e];
      if (!e)
        throw Error(
          R.hasOwnProp(e) ? `Adapter '${e}' is not available in the build` : `Can not resolve adapter '${e}'`
        );
      return t;
    }
    if (!R.isFunction(e))
      throw new TypeError("adapter is not a function");
    return e;
  },
  adapters: Oi
}, Hc = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Wc() {
  let e;
  return typeof XMLHttpRequest < "u" ? e = $i.getAdapter("xhr") : typeof process < "u" && R.kindOf(process) === "process" && (e = $i.getAdapter("http")), e;
}
function qc(e, t, n) {
  if (R.isString(e))
    try {
      return (t || JSON.parse)(e), R.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const qt = {
  transitional: vu,
  adapter: Wc(),
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, i = R.isObject(t);
    if (i && R.isHTMLForm(t) && (t = new FormData(t)), R.isFormData(t))
      return a && a ? JSON.stringify(bu(t)) : t;
    if (R.isArrayBuffer(t) || R.isBuffer(t) || R.isStream(t) || R.isFile(t) || R.isBlob(t))
      return t;
    if (R.isArrayBufferView(t))
      return t.buffer;
    if (R.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Rc(t, this.formSerializer).toString();
      if ((l = R.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return zr(
          l ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return i || a ? (n.setContentType("application/json", !1), qc(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || qt.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
    if (t && R.isString(t) && (r && !this.responseType || a)) {
      const o = !(n && n.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (o)
          throw l.name === "SyntaxError" ? be.from(l, be.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: gt.classes.FormData,
    Blob: gt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
R.forEach(["delete", "get", "head"], function(t) {
  qt.headers[t] = {};
});
R.forEach(["post", "put", "patch"], function(t) {
  qt.headers[t] = R.merge(Hc);
});
function na(e, t) {
  const n = this || qt, r = t || n, a = it.from(r.headers);
  let i = r.data;
  return R.forEach(e, function(l) {
    i = l.call(n, i, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), i;
}
function wu(e) {
  return !!(e && e.__CANCEL__);
}
function ra(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new fn();
}
function Si(e) {
  return ra(e), e.headers = it.from(e.headers), e.data = na.call(
    e,
    e.transformRequest
  ), (e.adapter || qt.adapter)(e).then(function(r) {
    return ra(e), r.data = na.call(
      e,
      e.transformResponse,
      r
    ), r.headers = it.from(r.headers), r;
  }, function(r) {
    return wu(r) || (ra(e), r && r.response && (r.response.data = na.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = it.from(r.response.headers))), Promise.reject(r);
  });
}
function on(e, t) {
  t = t || {};
  const n = {};
  function r(u, d) {
    return R.isPlainObject(u) && R.isPlainObject(d) ? R.merge(u, d) : R.isPlainObject(d) ? R.merge({}, d) : R.isArray(d) ? d.slice() : d;
  }
  function a(u) {
    if (R.isUndefined(t[u])) {
      if (!R.isUndefined(e[u]))
        return r(void 0, e[u]);
    } else
      return r(e[u], t[u]);
  }
  function i(u) {
    if (!R.isUndefined(t[u]))
      return r(void 0, t[u]);
  }
  function o(u) {
    if (R.isUndefined(t[u])) {
      if (!R.isUndefined(e[u]))
        return r(void 0, e[u]);
    } else
      return r(void 0, t[u]);
  }
  function l(u) {
    if (u in t)
      return r(e[u], t[u]);
    if (u in e)
      return r(void 0, e[u]);
  }
  const f = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: l
  };
  return R.forEach(Object.keys(e).concat(Object.keys(t)), function(d) {
    const s = f[d] || a, p = s(d);
    R.isUndefined(p) && s !== l || (n[d] = p);
  }), n;
}
const Ou = "1.1.3", Jo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Jo[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ki = {};
Jo.transitional = function(t, n, r) {
  function a(i, o) {
    return "[Axios v" + Ou + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, l) => {
    if (t === !1)
      throw new be(
        a(o, " has been removed" + (n ? " in " + n : "")),
        be.ERR_DEPRECATED
      );
    return n && !ki[o] && (ki[o] = !0, console.warn(
      a(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, o, l) : !0;
  };
};
function zc(e, t, n) {
  if (typeof e != "object")
    throw new be("options must be an object", be.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const i = r[a], o = t[i];
    if (o) {
      const l = e[i], f = l === void 0 || o(l, i, e);
      if (f !== !0)
        throw new be("option " + i + " must be " + f, be.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new be("Unknown option " + i, be.ERR_BAD_OPTION);
  }
}
const ka = {
  assertOptions: zc,
  validators: Jo
}, wt = ka.validators;
class Et {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new vi(),
      response: new vi()
    };
  }
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = on(this.defaults, n);
    const { transitional: r, paramsSerializer: a } = n;
    r !== void 0 && ka.assertOptions(r, {
      silentJSONParsing: wt.transitional(wt.boolean),
      forcedJSONParsing: wt.transitional(wt.boolean),
      clarifyTimeoutError: wt.transitional(wt.boolean)
    }, !1), a !== void 0 && ka.assertOptions(a, {
      encode: wt.function,
      serialize: wt.function
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    const i = n.headers && R.merge(
      n.headers.common,
      n.headers[n.method]
    );
    i && R.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      function(v) {
        delete n.headers[v];
      }
    ), n.headers = new it(n.headers, i);
    const o = [];
    let l = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(n) === !1 || (l = l && v.synchronous, o.unshift(v.fulfilled, v.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(v) {
      f.push(v.fulfilled, v.rejected);
    });
    let u, d = 0, s;
    if (!l) {
      const h = [Si.bind(this), void 0];
      for (h.unshift.apply(h, o), h.push.apply(h, f), s = h.length, u = Promise.resolve(n); d < s; )
        u = u.then(h[d++], h[d++]);
      return u;
    }
    s = o.length;
    let p = n;
    for (d = 0; d < s; ) {
      const h = o[d++], v = o[d++];
      try {
        p = h(p);
      } catch (N) {
        v.call(this, N);
        break;
      }
    }
    try {
      u = Si.call(this, p);
    } catch (h) {
      return Promise.reject(h);
    }
    for (d = 0, s = f.length; d < s; )
      u = u.then(f[d++], f[d++]);
    return u;
  }
  getUri(t) {
    t = on(this.defaults, t);
    const n = gu(t.baseURL, t.url);
    return hu(n, t.params, t.paramsSerializer);
  }
}
R.forEach(["delete", "get", "head", "options"], function(t) {
  Et.prototype[t] = function(n, r) {
    return this.request(on(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
R.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, o, l) {
      return this.request(on(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  Et.prototype[t] = n(), Et.prototype[t + "Form"] = n(!0);
});
class Ko {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((a) => {
      if (!r._listeners)
        return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](a);
      r._listeners = null;
    }), this.promise.then = (a) => {
      let i;
      const o = new Promise((l) => {
        r.subscribe(l), i = l;
      }).then(a);
      return o.cancel = function() {
        r.unsubscribe(i);
      }, o;
    }, t(function(i, o, l) {
      r.reason || (r.reason = new fn(i, o, l), n(r.reason));
    });
  }
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Ko(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
function Gc(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Qc(e) {
  return R.isObject(e) && e.isAxiosError === !0;
}
function $u(e) {
  const t = new Et(e), n = iu(Et.prototype.request, t);
  return R.extend(n, Et.prototype, t, { allOwnKeys: !0 }), R.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return $u(on(e, a));
  }, n;
}
const qe = $u(qt);
qe.Axios = Et;
qe.CanceledError = fn;
qe.CancelToken = Ko;
qe.isCancel = wu;
qe.VERSION = Ou;
qe.toFormData = zr;
qe.AxiosError = be;
qe.Cancel = qe.CanceledError;
qe.all = function(t) {
  return Promise.all(t);
};
qe.spread = Gc;
qe.isAxiosError = Qc;
qe.formToJSON = (e) => bu(R.isHTMLForm(e) ? new FormData(e) : e);
const Zc = Pe({
  name: "CustomMultipleFileUpload",
  components: {
    CustomButton: ds,
    CustomLoader: Ns
  },
  props: {
    label: {
      type: String,
      required: !1
    },
    routeGetFiles: {
      type: String,
      required: !0
    },
    routePostFiles: {
      type: String,
      required: !0
    },
    routeDeleteFile: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = q(null), n = () => {
      t.value.click();
    }, r = ({ target: u }) => {
      if (u && u.files.length > 0) {
        let d = new FormData();
        for (let s = 0; s < u.files.length; s++) {
          const p = u.files[s];
          d.append("files", p);
        }
        o(d), t.value.value = "";
      }
    }, a = q([]), i = q(!1), o = (u) => {
      console.log(u), i.value = !0, qe.post(e.routePostFiles, u).then((d) => {
        d.data.success ? alert("success") : alert("error"), i.value = !1;
      }).catch((d) => {
        console.log(d), i.value = !1;
      });
    }, l = (u) => {
      a.value.length > 0 && a.value.splice(u, 1);
    }, f = () => {
      qe.get(e.routeGetFiles).then((u) => {
        console.log("okk", u);
      }).catch((u) => {
        console.log(u);
      });
    };
    return tt(() => {
      f();
    }), {
      handleClick: n,
      handleInputChange: r,
      inputFileRef: t,
      fileList: a,
      deleteFile: l,
      getFiles: f,
      loading: i
    };
  }
}), Jc = { class: "generic-input" }, Kc = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, Xc = { class: "file-list" }, ef = ["onClick"], tf = /* @__PURE__ */ I("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2.5",
  stroke: "#FFFFFF",
  class: "cancel"
}, [
  /* @__PURE__ */ I("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), nf = [
  tf
], rf = { class: "flexAligned" }, af = { style: { "margin-right": "10px" } }, of = {
  style: { "margin-right": "8px" },
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "#FFFFFF",
  width: "16px",
  height: "16px"
}, lf = /* @__PURE__ */ I("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
}, null, -1), uf = [
  lf
];
function sf(e, t, n, r, a, i) {
  const o = Yt("custom-button"), l = Yt("custom-loader");
  return b(), S("div", Jc, [
    e.label ? (b(), S("label", Kc, se(e.label), 1)) : P("", !0),
    I("ul", Xc, [
      (b(!0), S(ye, null, De(e.fileList, (f, u) => (b(), S("li", {
        class: "file-list-item",
        key: u
      }, [
        Ee(se(f.original_name + "." + f.extension) + " ", 1),
        I("div", {
          onClick: (d) => e.deleteFile(u),
          class: "item-cancel"
        }, nf, 8, ef)
      ]))), 128))
    ]),
    I("input", {
      type: "file",
      class: "generic-input__input-file--hidden",
      ref: "inputFileRef",
      onChange: t[0] || (t[0] = (...f) => e.handleInputChange && e.handleInputChange(...f)),
      multiple: ""
    }, null, 544),
    I("div", rf, [
      I("div", af, [
        ve(o, {
          label: "Carica",
          styleType: "primary",
          disabled: !1,
          onOnClick: e.handleClick
        }, {
          "slot-left": oe(() => [
            (b(), S("svg", of, uf))
          ]),
          _: 1
        }, 8, ["onOnClick"])
      ]),
      ve(l, {
        loading: e.loading,
        size: "small"
      }, null, 8, ["loading"])
    ])
  ]);
}
const C_ = /* @__PURE__ */ je(Zc, [["render", sf]]);
function aa(e) {
  return e === 0 ? !1 : Array.isArray(e) && e.length === 0 ? !0 : !e;
}
function cf(e) {
  return (...t) => !e(...t);
}
function ff(e, t) {
  return e === void 0 && (e = "undefined"), e === null && (e = "null"), e === !1 && (e = "false"), e.toString().toLowerCase().indexOf(t.trim()) !== -1;
}
function Su(e, t, n, r) {
  return t ? e.filter((a) => ff(r(a, n), t)).sort((a, i) => r(a, n).length - r(i, n).length) : e;
}
function df(e) {
  return e.filter((t) => !t.$isLabel);
}
function oa(e, t) {
  return (n) => n.reduce((r, a) => a[e] && a[e].length ? (r.push({
    $groupLabel: a[t],
    $isLabel: !0
  }), r.concat(a[e])) : r, []);
}
function pf(e, t, n, r, a) {
  return (i) => i.map((o) => {
    if (!o[n])
      return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."), [];
    const l = Su(o[n], e, t, a);
    return l.length ? {
      [r]: o[r],
      [n]: l
    } : [];
  });
}
const Pi = (...e) => (t) => e.reduce((n, r) => r(n), t);
var yf = {
  data() {
    return {
      search: "",
      isOpen: !1,
      preferredOpenDirection: "below",
      optimizedHeight: this.maxHeight
    };
  },
  props: {
    internalSearch: {
      type: Boolean,
      default: !0
    },
    options: {
      type: Array,
      required: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    trackBy: {
      type: String
    },
    label: {
      type: String
    },
    searchable: {
      type: Boolean,
      default: !0
    },
    clearOnSelect: {
      type: Boolean,
      default: !0
    },
    hideSelected: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: "Select option"
    },
    allowEmpty: {
      type: Boolean,
      default: !0
    },
    resetAfter: {
      type: Boolean,
      default: !1
    },
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    customLabel: {
      type: Function,
      default(e, t) {
        return aa(e) ? "" : t ? e[t] : e;
      }
    },
    taggable: {
      type: Boolean,
      default: !1
    },
    tagPlaceholder: {
      type: String,
      default: "Press enter to create a tag"
    },
    tagPosition: {
      type: String,
      default: "top"
    },
    max: {
      type: [Number, Boolean],
      default: !1
    },
    id: {
      default: null
    },
    optionsLimit: {
      type: Number,
      default: 1e3
    },
    groupValues: {
      type: String
    },
    groupLabel: {
      type: String
    },
    groupSelect: {
      type: Boolean,
      default: !1
    },
    blockKeys: {
      type: Array,
      default() {
        return [];
      }
    },
    preserveSearch: {
      type: Boolean,
      default: !1
    },
    preselectFirst: {
      type: Boolean,
      default: !1
    }
  },
  mounted() {
    !this.multiple && this.max && console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."), this.preselectFirst && !this.internalValue.length && this.options.length && this.select(this.filteredOptions[0]);
  },
  computed: {
    internalValue() {
      return this.modelValue || this.modelValue === 0 ? Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue] : [];
    },
    filteredOptions() {
      const e = this.search || "", t = e.toLowerCase().trim();
      let n = this.options.concat();
      return this.internalSearch ? n = this.groupValues ? this.filterAndFlat(n, t, this.label) : Su(n, t, this.label, this.customLabel) : n = this.groupValues ? oa(this.groupValues, this.groupLabel)(n) : n, n = this.hideSelected ? n.filter(cf(this.isSelected)) : n, this.taggable && t.length && !this.isExistingOption(t) && (this.tagPosition === "bottom" ? n.push({ isTag: !0, label: e }) : n.unshift({ isTag: !0, label: e })), n.slice(0, this.optionsLimit);
    },
    valueKeys() {
      return this.trackBy ? this.internalValue.map((e) => e[this.trackBy]) : this.internalValue;
    },
    optionKeys() {
      return (this.groupValues ? this.flatAndStrip(this.options) : this.options).map((t) => this.customLabel(t, this.label).toString().toLowerCase());
    },
    currentOptionLabel() {
      return this.multiple ? this.searchable ? "" : this.placeholder : this.internalValue.length ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? "" : this.placeholder;
    }
  },
  watch: {
    internalValue() {
      this.resetAfter && this.internalValue.length && (this.search = "", this.$emit("update:modelValue", this.multiple ? [] : null));
    },
    search() {
      this.$emit("search-change", this.search);
    }
  },
  emits: ["open", "search-change", "close", "select", "update:modelValue", "remove", "tag"],
  methods: {
    getValue() {
      return this.multiple ? this.internalValue : this.internalValue.length === 0 ? null : this.internalValue[0];
    },
    filterAndFlat(e, t, n) {
      return Pi(
        pf(t, n, this.groupValues, this.groupLabel, this.customLabel),
        oa(this.groupValues, this.groupLabel)
      )(e);
    },
    flatAndStrip(e) {
      return Pi(
        oa(this.groupValues, this.groupLabel),
        df
      )(e);
    },
    updateSearch(e) {
      this.search = e;
    },
    isExistingOption(e) {
      return this.options ? this.optionKeys.indexOf(e) > -1 : !1;
    },
    isSelected(e) {
      const t = this.trackBy ? e[this.trackBy] : e;
      return this.valueKeys.indexOf(t) > -1;
    },
    isOptionDisabled(e) {
      return !!e.$isDisabled;
    },
    getOptionLabel(e) {
      if (aa(e))
        return "";
      if (e.isTag)
        return e.label;
      if (e.$isLabel)
        return e.$groupLabel;
      const t = this.customLabel(e, this.label);
      return aa(t) ? "" : t;
    },
    select(e, t) {
      if (e.$isLabel && this.groupSelect) {
        this.selectGroup(e);
        return;
      }
      if (!(this.blockKeys.indexOf(t) !== -1 || this.disabled || e.$isDisabled || e.$isLabel) && !(this.max && this.multiple && this.internalValue.length === this.max) && !(t === "Tab" && !this.pointerDirty)) {
        if (e.isTag)
          this.$emit("tag", e.label, this.id), this.search = "", this.closeOnSelect && !this.multiple && this.deactivate();
        else {
          if (this.isSelected(e)) {
            t !== "Tab" && this.removeElement(e);
            return;
          }
          this.$emit("select", e, this.id), this.multiple ? this.$emit("update:modelValue", this.internalValue.concat([e])) : this.$emit("update:modelValue", e), this.clearOnSelect && (this.search = "");
        }
        this.closeOnSelect && this.deactivate();
      }
    },
    selectGroup(e) {
      const t = this.options.find((n) => n[this.groupLabel] === e.$groupLabel);
      if (!!t) {
        if (this.wholeGroupSelected(t)) {
          this.$emit("remove", t[this.groupValues], this.id);
          const n = this.internalValue.filter(
            (r) => t[this.groupValues].indexOf(r) === -1
          );
          this.$emit("update:modelValue", n);
        } else {
          const n = t[this.groupValues].filter(
            (r) => !(this.isOptionDisabled(r) || this.isSelected(r))
          );
          this.$emit("select", n, this.id), this.$emit(
            "update:modelValue",
            this.internalValue.concat(n)
          );
        }
        this.closeOnSelect && this.deactivate();
      }
    },
    wholeGroupSelected(e) {
      return e[this.groupValues].every(
        (t) => this.isSelected(t) || this.isOptionDisabled(t)
      );
    },
    wholeGroupDisabled(e) {
      return e[this.groupValues].every(this.isOptionDisabled);
    },
    removeElement(e, t = !0) {
      if (this.disabled || e.$isDisabled)
        return;
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return;
      }
      const n = typeof e == "object" ? this.valueKeys.indexOf(e[this.trackBy]) : this.valueKeys.indexOf(e);
      if (this.$emit("remove", e, this.id), this.multiple) {
        const r = this.internalValue.slice(0, n).concat(this.internalValue.slice(n + 1));
        this.$emit("update:modelValue", r);
      } else
        this.$emit("update:modelValue", null);
      this.closeOnSelect && t && this.deactivate();
    },
    removeLastElement() {
      this.blockKeys.indexOf("Delete") === -1 && this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length && this.removeElement(this.internalValue[this.internalValue.length - 1], !1);
    },
    activate() {
      this.isOpen || this.disabled || (this.adjustPosition(), this.groupValues && this.pointer === 0 && this.filteredOptions.length && (this.pointer = 1), this.isOpen = !0, this.searchable ? (this.preserveSearch || (this.search = ""), this.$nextTick(() => this.$refs.search && this.$refs.search.focus())) : this.$el.focus(), this.$emit("open", this.id));
    },
    deactivate() {
      !this.isOpen || (this.isOpen = !1, this.searchable ? this.$refs.search && this.$refs.search.blur() : this.$el.blur(), this.preserveSearch || (this.search = ""), this.$emit("close", this.getValue(), this.id));
    },
    toggle() {
      this.isOpen ? this.deactivate() : this.activate();
    },
    adjustPosition() {
      if (typeof window > "u")
        return;
      const e = this.$el.getBoundingClientRect().top, t = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      t > this.maxHeight || t > e || this.openDirection === "below" || this.openDirection === "bottom" ? (this.preferredOpenDirection = "below", this.optimizedHeight = Math.min(t - 40, this.maxHeight)) : (this.preferredOpenDirection = "above", this.optimizedHeight = Math.min(e - 40, this.maxHeight));
    }
  }
}, mf = {
  data() {
    return {
      pointer: 0,
      pointerDirty: !1
    };
  },
  props: {
    showPointer: {
      type: Boolean,
      default: !0
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition() {
      return this.pointer * this.optionHeight;
    },
    visibleElements() {
      return this.optimizedHeight / this.optionHeight;
    }
  },
  watch: {
    filteredOptions() {
      this.pointerAdjust();
    },
    isOpen() {
      this.pointerDirty = !1;
    },
    pointer() {
      this.$refs.search && this.$refs.search.setAttribute("aria-activedescendant", this.id + "-" + this.pointer.toString());
    }
  },
  methods: {
    optionHighlight(e, t) {
      return {
        "multiselect__option--highlight": e === this.pointer && this.showPointer,
        "multiselect__option--selected": this.isSelected(t)
      };
    },
    groupHighlight(e, t) {
      if (!this.groupSelect)
        return [
          "multiselect__option--disabled",
          { "multiselect__option--group": t.$isLabel }
        ];
      const n = this.options.find((r) => r[this.groupLabel] === t.$groupLabel);
      return n && !this.wholeGroupDisabled(n) ? [
        "multiselect__option--group",
        { "multiselect__option--highlight": e === this.pointer && this.showPointer },
        { "multiselect__option--group-selected": this.wholeGroupSelected(n) }
      ] : "multiselect__option--disabled";
    },
    addPointerElement({ key: e } = "Enter") {
      this.filteredOptions.length > 0 && this.select(this.filteredOptions[this.pointer], e), this.pointerReset();
    },
    pointerForward() {
      this.pointer < this.filteredOptions.length - 1 && (this.pointer++, this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight && (this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward()), this.pointerDirty = !0;
    },
    pointerBackward() {
      this.pointer > 0 ? (this.pointer--, this.$refs.list.scrollTop >= this.pointerPosition && (this.$refs.list.scrollTop = this.pointerPosition), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerBackward()) : this.filteredOptions[this.pointer] && this.filteredOptions[0].$isLabel && !this.groupSelect && this.pointerForward(), this.pointerDirty = !0;
    },
    pointerReset() {
      !this.closeOnSelect || (this.pointer = 0, this.$refs.list && (this.$refs.list.scrollTop = 0));
    },
    pointerAdjust() {
      this.pointer >= this.filteredOptions.length - 1 && (this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0), this.filteredOptions.length > 0 && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward();
    },
    pointerSet(e) {
      this.pointer = e, this.pointerDirty = !0;
    }
  }
}, Xo = {
  name: "vue-multiselect",
  mixins: [yf, mf],
  props: {
    name: {
      type: String,
      default: ""
    },
    modelValue: {
      type: null,
      default() {
        return [];
      }
    },
    selectLabel: {
      type: String,
      default: "Press enter to select"
    },
    selectGroupLabel: {
      type: String,
      default: "Press enter to select group"
    },
    selectedLabel: {
      type: String,
      default: "Selected"
    },
    deselectLabel: {
      type: String,
      default: "Press enter to remove"
    },
    deselectGroupLabel: {
      type: String,
      default: "Press enter to deselect group"
    },
    showLabels: {
      type: Boolean,
      default: !0
    },
    limit: {
      type: Number,
      default: 99999
    },
    maxHeight: {
      type: Number,
      default: 300
    },
    limitText: {
      type: Function,
      default: (e) => `and ${e} more`
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    openDirection: {
      type: String,
      default: ""
    },
    showNoOptions: {
      type: Boolean,
      default: !0
    },
    showNoResults: {
      type: Boolean,
      default: !0
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isSingleLabelVisible() {
      return (this.singleValue || this.singleValue === 0) && (!this.isOpen || !this.searchable) && !this.visibleValues.length;
    },
    isPlaceholderVisible() {
      return !this.internalValue.length && (!this.searchable || !this.isOpen);
    },
    visibleValues() {
      return this.multiple ? this.internalValue.slice(0, this.limit) : [];
    },
    singleValue() {
      return this.internalValue[0];
    },
    deselectLabelText() {
      return this.showLabels ? this.deselectLabel : "";
    },
    deselectGroupLabelText() {
      return this.showLabels ? this.deselectGroupLabel : "";
    },
    selectLabelText() {
      return this.showLabels ? this.selectLabel : "";
    },
    selectGroupLabelText() {
      return this.showLabels ? this.selectGroupLabel : "";
    },
    selectedLabelText() {
      return this.showLabels ? this.selectedLabel : "";
    },
    inputStyle() {
      return this.searchable || this.multiple && this.modelValue && this.modelValue.length ? this.isOpen ? { width: "100%" } : { width: "0", position: "absolute", padding: "0" } : "";
    },
    contentStyle() {
      return this.options.length ? { display: "inline-block" } : { display: "block" };
    },
    isAbove() {
      return this.openDirection === "above" || this.openDirection === "top" ? !0 : this.openDirection === "below" || this.openDirection === "bottom" ? !1 : this.preferredOpenDirection === "above";
    },
    showSearchInput() {
      return this.searchable && (this.hasSingleSelectedSlot && (this.visibleSingleValue || this.visibleSingleValue === 0) ? this.isOpen : !0);
    }
  }
};
const hf = {
  ref: "tags",
  class: "multiselect__tags"
}, vf = { class: "multiselect__tags-wrap" }, bf = { class: "multiselect__spinner" }, gf = { key: 0 }, _f = { class: "multiselect__option" }, wf = { class: "multiselect__option" }, Of = /* @__PURE__ */ Ee("No elements found. Consider changing the search query."), $f = { class: "multiselect__option" }, Sf = /* @__PURE__ */ Ee("List is empty.");
function kf(e, t, n, r, a, i) {
  return b(), fe("div", {
    tabindex: e.searchable ? -1 : n.tabindex,
    class: [{ "multiselect--active": e.isOpen, "multiselect--disabled": n.disabled, "multiselect--above": i.isAbove }, "multiselect"],
    onFocus: t[14] || (t[14] = (o) => e.activate()),
    onBlur: t[15] || (t[15] = (o) => e.searchable ? !1 : e.deactivate()),
    onKeydown: [
      t[16] || (t[16] = le(ke((o) => e.pointerForward(), ["self", "prevent"]), ["down"])),
      t[17] || (t[17] = le(ke((o) => e.pointerBackward(), ["self", "prevent"]), ["up"]))
    ],
    onKeypress: t[18] || (t[18] = le(ke((o) => e.addPointerElement(o), ["stop", "self"]), ["enter", "tab"])),
    onKeyup: t[19] || (t[19] = le((o) => e.deactivate(), ["esc"])),
    role: "combobox",
    "aria-owns": "listbox-" + e.id
  }, [
    F(e.$slots, "caret", { toggle: e.toggle }, () => [
      ve("div", {
        onMousedown: t[1] || (t[1] = ke((o) => e.toggle(), ["prevent", "stop"])),
        class: "multiselect__select"
      }, null, 32)
    ]),
    F(e.$slots, "clear", { search: e.search }),
    ve("div", hf, [
      F(e.$slots, "selection", {
        search: e.search,
        remove: e.removeElement,
        values: i.visibleValues,
        isOpen: e.isOpen
      }, () => [
        Xe(ve("div", vf, [
          (b(!0), fe(ye, null, De(i.visibleValues, (o, l) => F(e.$slots, "tag", {
            option: o,
            search: e.search,
            remove: e.removeElement
          }, () => [
            (b(), fe("span", {
              class: "multiselect__tag",
              key: l
            }, [
              ve("span", {
                textContent: se(e.getOptionLabel(o))
              }, null, 8, ["textContent"]),
              ve("i", {
                tabindex: "1",
                onKeypress: le(ke((f) => e.removeElement(o), ["prevent"]), ["enter"]),
                onMousedown: ke((f) => e.removeElement(o), ["prevent"]),
                class: "multiselect__tag-icon"
              }, null, 40, ["onKeypress", "onMousedown"])
            ]))
          ])), 256))
        ], 512), [
          [ut, i.visibleValues.length > 0]
        ]),
        e.internalValue && e.internalValue.length > n.limit ? F(e.$slots, "limit", { key: 0 }, () => [
          ve("strong", {
            class: "multiselect__strong",
            textContent: se(n.limitText(e.internalValue.length - n.limit))
          }, null, 8, ["textContent"])
        ]) : P("v-if", !0)
      ]),
      ve(lt, { name: "multiselect__loading" }, {
        default: oe(() => [
          F(e.$slots, "loading", {}, () => [
            Xe(ve("div", bf, null, 512), [
              [ut, n.loading]
            ])
          ])
        ]),
        _: 3
      }),
      e.searchable ? (b(), fe("input", {
        key: 0,
        ref: "search",
        name: n.name,
        id: e.id,
        type: "text",
        autocomplete: "off",
        spellcheck: "false",
        placeholder: e.placeholder,
        style: i.inputStyle,
        value: e.search,
        disabled: n.disabled,
        tabindex: n.tabindex,
        onInput: t[2] || (t[2] = (o) => e.updateSearch(o.target.value)),
        onFocus: t[3] || (t[3] = ke((o) => e.activate(), ["prevent"])),
        onBlur: t[4] || (t[4] = ke((o) => e.deactivate(), ["prevent"])),
        onKeyup: t[5] || (t[5] = le((o) => e.deactivate(), ["esc"])),
        onKeydown: [
          t[6] || (t[6] = le(ke((o) => e.pointerForward(), ["prevent"]), ["down"])),
          t[7] || (t[7] = le(ke((o) => e.pointerBackward(), ["prevent"]), ["up"])),
          t[9] || (t[9] = le(ke((o) => e.removeLastElement(), ["stop"]), ["delete"]))
        ],
        onKeypress: t[8] || (t[8] = le(ke((o) => e.addPointerElement(o), ["prevent", "stop", "self"]), ["enter"])),
        class: "multiselect__input",
        "aria-controls": "listbox-" + e.id
      }, null, 44, ["name", "id", "placeholder", "value", "disabled", "tabindex", "aria-controls"])) : P("v-if", !0),
      i.isSingleLabelVisible ? (b(), fe("span", {
        key: 1,
        class: "multiselect__single",
        onMousedown: t[10] || (t[10] = ke((...o) => e.toggle && e.toggle(...o), ["prevent"]))
      }, [
        F(e.$slots, "singleLabel", { option: i.singleValue }, () => [
          Ee(se(e.currentOptionLabel), 1)
        ])
      ], 32)) : P("v-if", !0),
      i.isPlaceholderVisible ? (b(), fe("span", {
        key: 2,
        class: "multiselect__placeholder",
        onMousedown: t[11] || (t[11] = ke((...o) => e.toggle && e.toggle(...o), ["prevent"]))
      }, [
        F(e.$slots, "placeholder", {}, () => [
          Ee(se(e.placeholder), 1)
        ])
      ], 32)) : P("v-if", !0)
    ], 512),
    ve(lt, { name: "multiselect" }, {
      default: oe(() => [
        Xe(ve("div", {
          class: "multiselect__content-wrapper",
          onFocus: t[12] || (t[12] = (...o) => e.activate && e.activate(...o)),
          tabindex: "-1",
          onMousedown: t[13] || (t[13] = ke(() => {
          }, ["prevent"])),
          style: { maxHeight: e.optimizedHeight + "px" },
          ref: "list"
        }, [
          ve("ul", {
            class: "multiselect__content",
            style: i.contentStyle,
            role: "listbox",
            id: "listbox-" + e.id
          }, [
            F(e.$slots, "beforeList"),
            e.multiple && e.max === e.internalValue.length ? (b(), fe("li", gf, [
              ve("span", _f, [
                F(e.$slots, "maxElements", {}, () => [
                  Ee("Maximum of " + se(e.max) + " options selected. First remove a selected option to select another.", 1)
                ])
              ])
            ])) : P("v-if", !0),
            !e.max || e.internalValue.length < e.max ? (b(!0), fe(ye, { key: 1 }, De(e.filteredOptions, (o, l) => (b(), fe("li", {
              class: "multiselect__element",
              key: l,
              id: e.id + "-" + l,
              role: o && (o.$isLabel || o.$isDisabled) ? null : "option"
            }, [
              o && (o.$isLabel || o.$isDisabled) ? P("v-if", !0) : (b(), fe("span", {
                key: 0,
                class: [e.optionHighlight(l, o), "multiselect__option"],
                onClick: ke((f) => e.select(o), ["stop"]),
                onMouseenter: ke((f) => e.pointerSet(l), ["self"]),
                "data-select": o && o.isTag ? e.tagPlaceholder : i.selectLabelText,
                "data-selected": i.selectedLabelText,
                "data-deselect": i.deselectLabelText
              }, [
                F(e.$slots, "option", {
                  option: o,
                  search: e.search,
                  index: l
                }, () => [
                  ve("span", null, se(e.getOptionLabel(o)), 1)
                ])
              ], 42, ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"])),
              o && (o.$isLabel || o.$isDisabled) ? (b(), fe("span", {
                key: 1,
                "data-select": e.groupSelect && i.selectGroupLabelText,
                "data-deselect": e.groupSelect && i.deselectGroupLabelText,
                class: [e.groupHighlight(l, o), "multiselect__option"],
                onMouseenter: ke((f) => e.groupSelect && e.pointerSet(l), ["self"]),
                onMousedown: ke((f) => e.selectGroup(o), ["prevent"])
              }, [
                F(e.$slots, "option", {
                  option: o,
                  search: e.search,
                  index: l
                }, () => [
                  ve("span", null, se(e.getOptionLabel(o)), 1)
                ])
              ], 42, ["data-select", "data-deselect", "onMouseenter", "onMousedown"])) : P("v-if", !0)
            ], 8, ["id", "role"]))), 128)) : P("v-if", !0),
            Xe(ve("li", null, [
              ve("span", wf, [
                F(e.$slots, "noResult", { search: e.search }, () => [
                  Of
                ])
              ])
            ], 512), [
              [ut, n.showNoResults && e.filteredOptions.length === 0 && e.search && !n.loading]
            ]),
            Xe(ve("li", null, [
              ve("span", $f, [
                F(e.$slots, "noOptions", {}, () => [
                  Sf
                ])
              ])
            ], 512), [
              [ut, n.showNoOptions && e.options.length === 0 && !e.search && !n.loading]
            ]),
            F(e.$slots, "afterList")
          ], 12, ["id"])
        ], 36), [
          [ut, e.isOpen]
        ])
      ]),
      _: 3
    })
  ], 42, ["tabindex", "aria-owns"]);
}
Xo.render = kf;
const Pf = Pe({
  name: "CustomMultiSelect",
  emits: ["update:selectedOptions"],
  props: {
    label: {
      type: String
    },
    placeholder: {
      type: String,
      default: "Seleziona opzione"
    },
    options: {
      type: Array,
      required: !0
    },
    selectedOptions: {
      type: Array,
      required: !0
    }
  },
  components: {
    VueMultiselect: Xo
  },
  data() {
    return {
      value: [],
      visibleOptions: []
    };
  },
  methods: {
    removeOption(e) {
      const t = this.value.findIndex((r) => r.label === e.label && r.value === e.value), n = this.value;
      n.splice(t, 1), this.value = n, this.updateModel();
    },
    find(e) {
      this.visibleOptions = [...this.options].filter((t) => t.label.toLowerCase().includes(e.toLowerCase()));
    },
    updateModel() {
      const e = [...this.value].map((t) => t.value);
      this.$emit("update:selectedOptions", e);
    }
  },
  watch: {
    value() {
      this.updateModel();
    }
  },
  mounted() {
    this.visibleOptions = this.options;
    let e = [];
    [...this.selectedOptions].forEach((t) => {
      const n = this.options.find((r) => r.value == t);
      n ? e.push(n) : console.log("Option multiselect not found");
    }), this.value = e;
  }
});
const Tf = { class: "custom-multiselect" }, Df = {
  key: 0,
  for: "exampleFormControlSelect1",
  class: "custom-multiselect__label text-sm"
}, Rf = { class: "multiselect__tags-wrap" }, xf = { class: "multiselect__tag" }, Cf = ["onClick"];
function Mf(e, t, n, r, a, i) {
  const o = Yt("vue-multiselect");
  return b(), S("div", Tf, [
    e.label ? (b(), S("label", Df, se(e.label), 1)) : P("", !0),
    ve(o, {
      modelValue: e.value,
      "onUpdate:modelValue": t[0] || (t[0] = (l) => e.value = l),
      options: e.visibleOptions,
      class: "custom-multiselect__select",
      placeholder: e.placeholder,
      multiple: !0,
      "close-on-select": !1,
      selectLabel: "Seleziona",
      selectedLabel: "Selezionato",
      deselectLabel: "Rimuovi",
      "track-by": "label",
      onSearchChange: e.find,
      "internal-search": !1
    }, {
      noResult: oe(() => [
        Ee(" Nessun risultato. ")
      ]),
      tag: oe((l) => [
        I("div", Rf, [
          I("span", xf, [
            I("span", null, se(l.option.label), 1),
            I("i", {
              onClick: (f) => e.removeOption(l.option),
              tabindex: "1",
              class: "multiselect__tag-icon"
            }, null, 8, Cf)
          ])
        ])
      ]),
      option: oe((l) => [
        Ee(se(l.option.label), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "options", "placeholder", "onSearchChange"])
  ]);
}
const M_ = /* @__PURE__ */ je(Pf, [["render", Mf]]);
var Nf = "Expected a function", Ti = 0 / 0, Ef = "[object Symbol]", Af = /^\s+|\s+$/g, Bf = /^[-+]0x[0-9a-f]+$/i, If = /^0b[01]+$/i, Lf = /^0o[0-7]+$/i, Vf = parseInt, Uf = typeof mn == "object" && mn && mn.Object === Object && mn, Ff = typeof self == "object" && self && self.Object === Object && self, Yf = Uf || Ff || Function("return this")(), jf = Object.prototype, Hf = jf.toString, Wf = Math.max, qf = Math.min, ia = function() {
  return Yf.Date.now();
};
function zf(e, t, n) {
  var r, a, i, o, l, f, u = 0, d = !1, s = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Nf);
  t = Di(t) || 0, Pa(n) && (d = !!n.leading, s = "maxWait" in n, i = s ? Wf(Di(n.maxWait) || 0, t) : i, p = "trailing" in n ? !!n.trailing : p);
  function h(m) {
    var x = r, Y = a;
    return r = a = void 0, u = m, o = e.apply(Y, x), o;
  }
  function v(m) {
    return u = m, l = setTimeout(U, t), d ? h(m) : o;
  }
  function N(m) {
    var x = m - f, Y = m - u, Q = t - x;
    return s ? qf(Q, i - Y) : Q;
  }
  function H(m) {
    var x = m - f, Y = m - u;
    return f === void 0 || x >= t || x < 0 || s && Y >= i;
  }
  function U() {
    var m = ia();
    if (H(m))
      return E(m);
    l = setTimeout(U, N(m));
  }
  function E(m) {
    return l = void 0, p && r ? h(m) : (r = a = void 0, o);
  }
  function W() {
    l !== void 0 && clearTimeout(l), u = 0, r = f = a = l = void 0;
  }
  function J() {
    return l === void 0 ? o : E(ia());
  }
  function re() {
    var m = ia(), x = H(m);
    if (r = arguments, a = this, f = m, x) {
      if (l === void 0)
        return v(f);
      if (s)
        return l = setTimeout(U, t), h(f);
    }
    return l === void 0 && (l = setTimeout(U, t)), o;
  }
  return re.cancel = W, re.flush = J, re;
}
function Pa(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function Gf(e) {
  return !!e && typeof e == "object";
}
function Qf(e) {
  return typeof e == "symbol" || Gf(e) && Hf.call(e) == Ef;
}
function Di(e) {
  if (typeof e == "number")
    return e;
  if (Qf(e))
    return Ti;
  if (Pa(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Pa(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Af, "");
  var n = If.test(e);
  return n || Lf.test(e) ? Vf(e.slice(2), n ? 2 : 8) : Bf.test(e) ? Ti : +e;
}
var Zf = zf;
const Jf = Pe({
  name: "CustomMultiSelectAsync",
  emits: ["update:selectedOptions"],
  props: {
    label: {
      type: String
    },
    placeholder: {
      type: String,
      default: "Seleziona opzione"
    },
    optionsSearchRoute: {
      type: String,
      required: !0
    },
    selectedOptions: {
      type: Array,
      required: !0
    }
  },
  components: {
    VueMultiselect: Xo
  },
  data() {
    return {
      value: [],
      visibleOptions: [],
      loading: !1
    };
  },
  methods: {
    removeOption(e) {
      const t = this.value.findIndex((r) => r.label === e.label && r.value === e.value), n = this.value;
      n.splice(t, 1), this.value = n, this.updateModel();
    },
    updateModel() {
      this.$emit("update:selectedOptions", this.value);
    },
    find(e) {
      e && (this.loading = !0, qe.get(this.optionsSearchRoute, {
        params: {
          q: e
        }
      }).then((t) => {
        if (t.status === 200) {
          this.loading = !1;
          let n = [...this.value];
          this.visibleOptions = n.concat(t.data);
        }
      }).catch((t) => {
        console.log(t), this.loading = !1;
      }));
    },
    debouncedSearch: Zf(function(e) {
      this.find(e);
    }, 500)
  },
  watch: {
    value() {
      this.updateModel();
    }
  },
  mounted() {
    this.visibleOptions = [...this.selectedOptions], this.value = this.selectedOptions;
  }
}), Kf = { class: "custom-multiselect" }, Xf = {
  key: 0,
  class: "custom-multiselect__label text-sm"
}, ed = { class: "multiselect__tags-wrap" }, td = { class: "multiselect__tag" }, nd = ["onClick"];
function rd(e, t, n, r, a, i) {
  const o = Yt("vue-multiselect");
  return b(), S("div", Kf, [
    e.label ? (b(), S("label", Xf, se(e.label), 1)) : P("", !0),
    ve(o, {
      modelValue: e.value,
      "onUpdate:modelValue": t[0] || (t[0] = (l) => e.value = l),
      options: e.visibleOptions,
      class: "custom-multiselect__select",
      placeholder: e.placeholder,
      multiple: !0,
      "close-on-select": !1,
      selectLabel: "Seleziona",
      selectedLabel: "Selezionato",
      deselectLabel: "Rimuovi",
      "track-by": "label",
      "internal-search": !1,
      onSearchChange: e.debouncedSearch,
      loading: e.loading
    }, {
      noResult: oe(() => [
        Ee(" Nessun risultato. ")
      ]),
      tag: oe((l) => [
        I("div", ed, [
          I("span", td, [
            I("span", null, se(l.option.label), 1),
            I("i", {
              onClick: (f) => e.removeOption(l.option),
              tabindex: "1",
              class: "multiselect__tag-icon"
            }, null, 8, nd)
          ])
        ])
      ]),
      option: oe((l) => [
        Ee(se(l.option.label), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "options", "placeholder", "onSearchChange", "loading"])
  ]);
}
const N_ = /* @__PURE__ */ je(Jf, [["render", rd]]), ad = Pe({
  name: "CustomSelect",
  props: {
    options: {
      type: Array,
      required: !0
    },
    label: {
      type: String,
      required: !1
    },
    name: {
      type: String,
      required: !0
    },
    value: {
      type: [String, Number]
    },
    placeholder: {
      type: String,
      default: "Seleziona opzione",
      required: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, t) {
    return { handleSelectChange: ({ target: r }) => {
      t.emit("update:value", r.value);
    } };
  }
}), od = { class: "custom-select" }, id = {
  key: 0,
  for: "exampleFormControlSelect1",
  class: "custom-select__label text-sm"
}, ld = ["name", "id", "disabled"], ud = {
  selected: "",
  value: "0"
}, sd = ["value", "selected"];
function cd(e, t, n, r, a, i) {
  return b(), S("div", od, [
    e.label ? (b(), S("label", id, se(e.label), 1)) : P("", !0),
    I("select", {
      name: e.name,
      class: "custom-select__select",
      id: "select_" + e.name,
      onChange: t[0] || (t[0] = (...o) => e.handleSelectChange && e.handleSelectChange(...o)),
      disabled: e.disabled
    }, [
      I("option", ud, se(e.placeholder), 1),
      (b(!0), S(ye, null, De(e.options, (o, l) => (b(), S("option", {
        key: l,
        value: o.value,
        selected: o.value == e.value
      }, se(o.label), 9, sd))), 128))
    ], 40, ld)
  ]);
}
const E_ = /* @__PURE__ */ je(ad, [["render", cd]]), fd = Pe({
  name: "CustomRadioGroup",
  props: {
    options: {
      type: Array,
      required: !0
    },
    value: {
      type: [Number, String],
      default: ""
    }
  },
  setup(e, t) {
    return { checkRadio: ({ target: r }) => {
      t.emit("update:value", r.value);
    } };
  }
}), dd = { class: "custom-radio-group" }, pd = ["name", "id", "value", "disabled", "checked"], yd = ["onClick"], md = ["for"];
function hd(e, t, n, r, a, i) {
  return b(), S("div", dd, [
    (b(!0), S(ye, null, De(e.options, (o) => (b(), S("div", {
      key: o.id,
      class: Se([{ disabled: o.disabled, checked: o.value == e.value }, "custom-radio-group__single-radio"])
    }, [
      I("input", {
        type: "radio",
        name: o.name,
        id: o.id,
        value: o.value,
        disabled: o.disabled,
        class: "custom-radio-group__single-radio__radio-hidden",
        checked: o.value == e.value,
        onChange: t[0] || (t[0] = (...l) => e.checkRadio && e.checkRadio(...l))
      }, null, 40, pd),
      I("span", {
        class: "custom-radio-group__single-radio__radio",
        onClick: (l) => e.checkRadio({
          target: {
            value: o.value
          }
        })
      }, null, 8, yd),
      I("label", {
        class: "custom-radio-group__single-radio__radio-label",
        for: o.id
      }, se(o.label), 9, md)
    ], 2))), 128))
  ]);
}
const A_ = /* @__PURE__ */ je(fd, [["render", hd]]), vd = Pe({
  name: "CustomTextArea",
  emits: ["update"],
  props: {
    classes: {
      required: !1,
      default: "",
      type: String
    },
    modelValue: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      required: !1
    }
  },
  setup(e, { emit: t }) {
    return { computedValue: G({
      get() {
        return e.modelValue;
      },
      set(r) {
        t("update", r);
      }
    }) };
  }
}), bd = { class: "generic-input" }, gd = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
};
function _d(e, t, n, r, a, i) {
  return b(), S("div", bd, [
    e.label ? (b(), S("label", gd, se(e.label), 1)) : P("", !0),
    Xe(I("textarea", Ue(e.$attrs, {
      "onUpdate:modelValue": t[0] || (t[0] = (o) => e.computedValue = o),
      class: "generic-input__input " + e.classes
    }), null, 16), [
      [ou, e.computedValue]
    ])
  ]);
}
const B_ = /* @__PURE__ */ je(vd, [["render", _d]]), wd = Pe({
  name: "GenericInput",
  emits: ["update"],
  props: {
    classes: {
      required: !1,
      default: "",
      type: String
    },
    modelValue: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      required: !1
    },
    readOnly: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { emit: t }) {
    return { computedValue: G({
      get() {
        return e.modelValue;
      },
      set(r) {
        t("update", r);
      }
    }) };
  }
}), Od = { class: "generic-input" }, $d = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
}, Sd = { class: "input-container" }, kd = {
  key: 1,
  class: "generic-input__read-only"
};
function Pd(e, t, n, r, a, i) {
  return b(), S("div", Od, [
    e.label ? (b(), S("label", $d, se(e.label), 1)) : P("", !0),
    I("div", Sd, [
      F(e.$slots, "prepend"),
      e.readOnly ? P("", !0) : Xe((b(), S("input", Ue({ key: 0 }, e.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (o) => e.computedValue = o),
        class: "generic-input__input " + e.classes
      }), null, 16)), [
        [ns, e.computedValue]
      ])
    ]),
    e.readOnly ? (b(), S("div", kd, se(e.computedValue), 1)) : P("", !0)
  ]);
}
const Td = /* @__PURE__ */ je(wd, [["render", Pd]]), Dd = Pe({
  name: "ScrollToTop",
  components: {
    Transition: lt
  },
  setup() {
    const e = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, t = q(!1), n = () => {
      window.scrollY >= 500 ? t.value = !0 : t.value = !1;
    };
    return tt(() => {
      document.addEventListener("scroll", n);
    }), {
      trigger: e,
      buttonVisible: t
    };
  }
});
const Rd = (e) => (rs("data-v-7e204a81"), e = e(), as(), e), xd = /* @__PURE__ */ Rd(() => /* @__PURE__ */ I("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  stroke: "#FFFFFF",
  class: "w-6 h-6"
}, [
  /* @__PURE__ */ I("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
  })
], -1)), Cd = [
  xd
];
function Md(e, t, n, r, a, i) {
  return b(), fe(lt, null, {
    default: oe(() => [
      Xe(I("div", {
        onClick: t[0] || (t[0] = (...o) => e.trigger && e.trigger(...o)),
        ref: "scrollToTop",
        class: "fixed z-50 bottom-10 right-5 w-12 h-12 bg-secondary hover:bg-secondaryHover transition rounded-full flex items-center justify-center cursor-pointer shadow"
      }, Cd, 512), [
        [ut, e.buttonVisible]
      ])
    ]),
    _: 1
  });
}
const I_ = /* @__PURE__ */ je(Dd, [["render", Md], ["__scopeId", "data-v-7e204a81"]]), Nd = Pe({
  name: "CustomSearchInput",
  components: {
    GenericInput: Td
  },
  props: {
    placeholder: {
      type: String,
      default: "Cerca..."
    }
  },
  setup(e, t) {
    const n = q("");
    return {
      searchQuery: n,
      emitSearch: () => {
        t.emit("onSearch", n.value);
      }
    };
  }
}), Ed = { class: "custom-search-input flex items-center cursor-pointer" }, Ad = { class: "search-box shadow" }, Bd = ["placeholder"], Id = /* @__PURE__ */ I("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  stroke: "#FFFFFF",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ I("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  })
], -1), Ld = [
  Id
];
function Vd(e, t, n, r, a, i) {
  return b(), S("div", Ed, [
    I("div", Ad, [
      Xe(I("input", {
        onKeyup: t[0] || (t[0] = le((...o) => e.emitSearch && e.emitSearch(...o), ["enter"])),
        class: "search-input text-textGrey font-medium",
        type: "text",
        "onUpdate:modelValue": t[1] || (t[1] = (o) => e.searchQuery = o),
        placeholder: e.placeholder
      }, null, 40, Bd), [
        [ou, e.searchQuery]
      ]),
      I("div", {
        onClick: t[2] || (t[2] = (...o) => e.emitSearch && e.emitSearch(...o)),
        class: "search-btn bg-textGrey hover:bg-customBlack transition h-9 w-9 rounded-full flex items-center justify-center"
      }, Ld)
    ])
  ]);
}
const L_ = /* @__PURE__ */ je(Nd, [["render", Vd]]), Ud = Pe({
  name: "CustomTooltip",
  components: {
    Transition: lt
  },
  props: {
    position: {
      type: String,
      default: "top"
    },
    backroundColor: {
      type: String,
      default: "#000000"
    },
    maxWidth: {
      type: Number,
      default: 250
    }
  },
  setup(e) {
    const t = q(!1);
    return {
      onMouseOver: () => {
        t.value = !0;
      },
      getClassPosition: () => "tooltip-" + e.position,
      onMouseLeave: () => {
        t.value = !1;
      },
      hovered: t
    };
  }
});
function Fd(e, t, n, r, a, i) {
  return b(), S("div", {
    onMouseover: t[0] || (t[0] = (...o) => e.onMouseOver && e.onMouseOver(...o)),
    onMouseleave: t[1] || (t[1] = (...o) => e.onMouseLeave && e.onMouseLeave(...o)),
    class: "inline-flex flex-col relative cursor-pointer"
  }, [
    F(e.$slots, "target", {}, void 0, !0),
    ve(lt, null, {
      default: oe(() => [
        Xe(I("div", {
          style: Mt(`background-color: ${e.backroundColor}; --background-color: ${e.backroundColor}; --max-width: ${e.maxWidth}px`),
          class: Se(["absolute w-max z-50 p-3 shadow cursor-auto rounded-lg text-white text-sm", e.getClassPosition()])
        }, [
          F(e.$slots, "content", {}, void 0, !0)
        ], 6), [
          [ut, e.hovered]
        ])
      ]),
      _: 3
    })
  ], 32);
}
const V_ = /* @__PURE__ */ je(Ud, [["render", Fd], ["__scopeId", "data-v-3f54f249"]]);
function ie(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function X(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function wn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? wn = function(n) {
    return typeof n;
  } : wn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, wn(e);
}
function ue(e) {
  X(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || wn(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function $t(e, t) {
  X(2, arguments);
  var n = ue(e), r = ie(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function pt(e, t) {
  X(2, arguments);
  var n = ue(e), r = ie(t);
  if (isNaN(r))
    return new Date(NaN);
  if (!r)
    return n;
  var a = n.getDate(), i = new Date(n.getTime());
  i.setMonth(n.getMonth() + r + 1, 0);
  var o = i.getDate();
  return a >= o ? i : (n.setFullYear(i.getFullYear(), i.getMonth(), a), n);
}
function On(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? On = function(n) {
    return typeof n;
  } : On = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, On(e);
}
function ku(e, t) {
  if (X(2, arguments), !t || On(t) !== "object")
    return new Date(NaN);
  var n = t.years ? ie(t.years) : 0, r = t.months ? ie(t.months) : 0, a = t.weeks ? ie(t.weeks) : 0, i = t.days ? ie(t.days) : 0, o = t.hours ? ie(t.hours) : 0, l = t.minutes ? ie(t.minutes) : 0, f = t.seconds ? ie(t.seconds) : 0, u = ue(e), d = r || n ? pt(u, r + n * 12) : u, s = i || a ? $t(d, i + a * 7) : d, p = l + o * 60, h = f + p * 60, v = h * 1e3, N = new Date(s.getTime() + v);
  return N;
}
function Yd(e, t) {
  X(2, arguments);
  var n = ue(e).getTime(), r = ie(t);
  return new Date(n + r);
}
var jd = {};
function St() {
  return jd;
}
function Ta(e, t) {
  var n, r, a, i, o, l, f, u;
  X(1, arguments);
  var d = St(), s = ie((n = (r = (a = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && a !== void 0 ? a : d.weekStartsOn) !== null && r !== void 0 ? r : (f = d.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(s >= 0 && s <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = ue(e), h = p.getDay(), v = (h < s ? 7 : 0) + h - s;
  return p.setDate(p.getDate() - v), p.setHours(0, 0, 0, 0), p;
}
function ur(e) {
  return X(1, arguments), Ta(e, {
    weekStartsOn: 1
  });
}
function Hd(e) {
  X(1, arguments);
  var t = ue(e), n = t.getFullYear(), r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var a = ur(r), i = new Date(0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  var o = ur(i);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function Wd(e) {
  X(1, arguments);
  var t = Hd(e), n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = ur(n);
  return r;
}
function sr(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Ri(e) {
  X(1, arguments);
  var t = ue(e);
  return t.setHours(0, 0, 0, 0), t;
}
var qd = 864e5;
function zd(e, t) {
  X(2, arguments);
  var n = Ri(e), r = Ri(t), a = n.getTime() - sr(n), i = r.getTime() - sr(r);
  return Math.round((a - i) / qd);
}
function Pu(e, t) {
  X(2, arguments);
  var n = ie(t);
  return pt(e, n * 12);
}
var ei = 6e4, ti = 36e5, Gd = 1e3;
function $n(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $n = function(n) {
    return typeof n;
  } : $n = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, $n(e);
}
function Tu(e) {
  return X(1, arguments), e instanceof Date || $n(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function tn(e) {
  if (X(1, arguments), !Tu(e) && typeof e != "number")
    return !1;
  var t = ue(e);
  return !isNaN(Number(t));
}
function xi(e, t) {
  var n;
  X(1, arguments);
  var r = e || {}, a = ue(r.start), i = ue(r.end), o = i.getTime();
  if (!(a.getTime() <= o))
    throw new RangeError("Invalid interval");
  var l = [], f = a;
  f.setHours(0, 0, 0, 0);
  var u = Number((n = t == null ? void 0 : t.step) !== null && n !== void 0 ? n : 1);
  if (u < 1 || isNaN(u))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; f.getTime() <= o; )
    l.push(ue(f)), f.setDate(f.getDate() + u), f.setHours(0, 0, 0, 0);
  return l;
}
function Qd(e, t) {
  var n, r, a, i, o, l, f, u;
  X(1, arguments);
  var d = St(), s = ie((n = (r = (a = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && a !== void 0 ? a : d.weekStartsOn) !== null && r !== void 0 ? r : (f = d.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(s >= 0 && s <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = ue(e), h = p.getDay(), v = (h < s ? -7 : 0) + 6 - (h - s);
  return p.setDate(p.getDate() + v), p.setHours(23, 59, 59, 999), p;
}
function Du(e, t) {
  X(2, arguments);
  var n = ie(t);
  return Yd(e, -n);
}
var Zd = 864e5;
function Jd(e) {
  X(1, arguments);
  var t = ue(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), a = n - r;
  return Math.floor(a / Zd) + 1;
}
function jt(e) {
  X(1, arguments);
  var t = 1, n = ue(e), r = n.getUTCDay(), a = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n;
}
function Ru(e) {
  X(1, arguments);
  var t = ue(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = jt(r), i = new Date(0);
  i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var o = jt(i);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function Kd(e) {
  X(1, arguments);
  var t = Ru(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = jt(n);
  return r;
}
var Xd = 6048e5;
function xu(e) {
  X(1, arguments);
  var t = ue(e), n = jt(t).getTime() - Kd(t).getTime();
  return Math.round(n / Xd) + 1;
}
function Bt(e, t) {
  var n, r, a, i, o, l, f, u;
  X(1, arguments);
  var d = St(), s = ie((n = (r = (a = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && a !== void 0 ? a : d.weekStartsOn) !== null && r !== void 0 ? r : (f = d.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(s >= 0 && s <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = ue(e), h = p.getUTCDay(), v = (h < s ? 7 : 0) + h - s;
  return p.setUTCDate(p.getUTCDate() - v), p.setUTCHours(0, 0, 0, 0), p;
}
function ni(e, t) {
  var n, r, a, i, o, l, f, u;
  X(1, arguments);
  var d = ue(e), s = d.getUTCFullYear(), p = St(), h = ie((n = (r = (a = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && a !== void 0 ? a : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (f = p.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = new Date(0);
  v.setUTCFullYear(s + 1, 0, h), v.setUTCHours(0, 0, 0, 0);
  var N = Bt(v, t), H = new Date(0);
  H.setUTCFullYear(s, 0, h), H.setUTCHours(0, 0, 0, 0);
  var U = Bt(H, t);
  return d.getTime() >= N.getTime() ? s + 1 : d.getTime() >= U.getTime() ? s : s - 1;
}
function ep(e, t) {
  var n, r, a, i, o, l, f, u;
  X(1, arguments);
  var d = St(), s = ie((n = (r = (a = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && a !== void 0 ? a : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (f = d.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = ni(e, t), h = new Date(0);
  h.setUTCFullYear(p, 0, s), h.setUTCHours(0, 0, 0, 0);
  var v = Bt(h, t);
  return v;
}
var tp = 6048e5;
function Cu(e, t) {
  X(1, arguments);
  var n = ue(e), r = Bt(n, t).getTime() - ep(n, t).getTime();
  return Math.round(r / tp) + 1;
}
function $e(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var np = {
  y: function(t, n) {
    var r = t.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return $e(n === "yy" ? a % 100 : a, n.length);
  },
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : $e(r + 1, 2);
  },
  d: function(t, n) {
    return $e(t.getUTCDate(), n.length);
  },
  a: function(t, n) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  h: function(t, n) {
    return $e(t.getUTCHours() % 12 || 12, n.length);
  },
  H: function(t, n) {
    return $e(t.getUTCHours(), n.length);
  },
  m: function(t, n) {
    return $e(t.getUTCMinutes(), n.length);
  },
  s: function(t, n) {
    return $e(t.getUTCSeconds(), n.length);
  },
  S: function(t, n) {
    var r = n.length, a = t.getUTCMilliseconds(), i = Math.floor(a * Math.pow(10, r - 3));
    return $e(i, n.length);
  }
};
const Ot = np;
var Vt = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, rp = {
  G: function(t, n, r) {
    var a = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(a, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(a, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(a, {
          width: "wide"
        });
    }
  },
  y: function(t, n, r) {
    if (n === "yo") {
      var a = t.getUTCFullYear(), i = a > 0 ? a : 1 - a;
      return r.ordinalNumber(i, {
        unit: "year"
      });
    }
    return Ot.y(t, n);
  },
  Y: function(t, n, r, a) {
    var i = ni(t, a), o = i > 0 ? i : 1 - i;
    if (n === "YY") {
      var l = o % 100;
      return $e(l, 2);
    }
    return n === "Yo" ? r.ordinalNumber(o, {
      unit: "year"
    }) : $e(o, n.length);
  },
  R: function(t, n) {
    var r = Ru(t);
    return $e(r, n.length);
  },
  u: function(t, n) {
    var r = t.getUTCFullYear();
    return $e(r, n.length);
  },
  Q: function(t, n, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(a);
      case "QQ":
        return $e(a, 2);
      case "Qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(t, n, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(a);
      case "qq":
        return $e(a, 2);
      case "qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(t, n, r) {
    var a = t.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return Ot.M(t, n);
      case "Mo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(a, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(t, n, r) {
    var a = t.getUTCMonth();
    switch (n) {
      case "L":
        return String(a + 1);
      case "LL":
        return $e(a + 1, 2);
      case "Lo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(a, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(t, n, r, a) {
    var i = Cu(t, a);
    return n === "wo" ? r.ordinalNumber(i, {
      unit: "week"
    }) : $e(i, n.length);
  },
  I: function(t, n, r) {
    var a = xu(t);
    return n === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : $e(a, n.length);
  },
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Ot.d(t, n);
  },
  D: function(t, n, r) {
    var a = Jd(t);
    return n === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : $e(a, n.length);
  },
  E: function(t, n, r) {
    var a = t.getUTCDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(t, n, r, a) {
    var i = t.getUTCDay(), o = (i - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(o);
      case "ee":
        return $e(o, 2);
      case "eo":
        return r.ordinalNumber(o, {
          unit: "day"
        });
      case "eee":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(t, n, r, a) {
    var i = t.getUTCDay(), o = (i - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(o);
      case "cc":
        return $e(o, n.length);
      case "co":
        return r.ordinalNumber(o, {
          unit: "day"
        });
      case "ccc":
        return r.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(t, n, r) {
    var a = t.getUTCDay(), i = a === 0 ? 7 : a;
    switch (n) {
      case "i":
        return String(i);
      case "ii":
        return $e(i, n.length);
      case "io":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "iii":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(t, n, r) {
    var a = t.getUTCHours(), i = a / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(t, n, r) {
    var a = t.getUTCHours(), i;
    switch (a === 12 ? i = Vt.noon : a === 0 ? i = Vt.midnight : i = a / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(t, n, r) {
    var a = t.getUTCHours(), i;
    switch (a >= 17 ? i = Vt.evening : a >= 12 ? i = Vt.afternoon : a >= 4 ? i = Vt.morning : i = Vt.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(t, n, r) {
    if (n === "ho") {
      var a = t.getUTCHours() % 12;
      return a === 0 && (a = 12), r.ordinalNumber(a, {
        unit: "hour"
      });
    }
    return Ot.h(t, n);
  },
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Ot.H(t, n);
  },
  K: function(t, n, r) {
    var a = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : $e(a, n.length);
  },
  k: function(t, n, r) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), n === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : $e(a, n.length);
  },
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : Ot.m(t, n);
  },
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Ot.s(t, n);
  },
  S: function(t, n) {
    return Ot.S(t, n);
  },
  X: function(t, n, r, a) {
    var i = a._originalDate || t, o = i.getTimezoneOffset();
    if (o === 0)
      return "Z";
    switch (n) {
      case "X":
        return Mi(o);
      case "XXXX":
      case "XX":
        return xt(o);
      case "XXXXX":
      case "XXX":
      default:
        return xt(o, ":");
    }
  },
  x: function(t, n, r, a) {
    var i = a._originalDate || t, o = i.getTimezoneOffset();
    switch (n) {
      case "x":
        return Mi(o);
      case "xxxx":
      case "xx":
        return xt(o);
      case "xxxxx":
      case "xxx":
      default:
        return xt(o, ":");
    }
  },
  O: function(t, n, r, a) {
    var i = a._originalDate || t, o = i.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ci(o, ":");
      case "OOOO":
      default:
        return "GMT" + xt(o, ":");
    }
  },
  z: function(t, n, r, a) {
    var i = a._originalDate || t, o = i.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ci(o, ":");
      case "zzzz":
      default:
        return "GMT" + xt(o, ":");
    }
  },
  t: function(t, n, r, a) {
    var i = a._originalDate || t, o = Math.floor(i.getTime() / 1e3);
    return $e(o, n.length);
  },
  T: function(t, n, r, a) {
    var i = a._originalDate || t, o = i.getTime();
    return $e(o, n.length);
  }
};
function Ci(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.floor(r / 60), i = r % 60;
  if (i === 0)
    return n + String(a);
  var o = t || "";
  return n + String(a) + o + $e(i, 2);
}
function Mi(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + $e(Math.abs(e) / 60, 2);
  }
  return xt(e, t);
}
function xt(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", a = Math.abs(e), i = $e(Math.floor(a / 60), 2), o = $e(a % 60, 2);
  return r + i + n + o;
}
const ap = rp;
var Ni = function(t, n) {
  switch (t) {
    case "P":
      return n.date({
        width: "short"
      });
    case "PP":
      return n.date({
        width: "medium"
      });
    case "PPP":
      return n.date({
        width: "long"
      });
    case "PPPP":
    default:
      return n.date({
        width: "full"
      });
  }
}, Mu = function(t, n) {
  switch (t) {
    case "p":
      return n.time({
        width: "short"
      });
    case "pp":
      return n.time({
        width: "medium"
      });
    case "ppp":
      return n.time({
        width: "long"
      });
    case "pppp":
    default:
      return n.time({
        width: "full"
      });
  }
}, op = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], i = r[2];
  if (!i)
    return Ni(t, n);
  var o;
  switch (a) {
    case "P":
      o = n.dateTime({
        width: "short"
      });
      break;
    case "PP":
      o = n.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      o = n.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      o = n.dateTime({
        width: "full"
      });
      break;
  }
  return o.replace("{{date}}", Ni(a, n)).replace("{{time}}", Mu(i, n));
}, ip = {
  p: Mu,
  P: op
};
const Da = ip;
var lp = ["D", "DD"], up = ["YY", "YYYY"];
function Nu(e) {
  return lp.indexOf(e) !== -1;
}
function Eu(e) {
  return up.indexOf(e) !== -1;
}
function cr(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var sp = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, cp = function(t, n, r) {
  var a, i = sp[t];
  return typeof i == "string" ? a = i : n === 1 ? a = i.one : a = i.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const fp = cp;
function la(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var dp = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, pp = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, yp = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, mp = {
  date: la({
    formats: dp,
    defaultWidth: "full"
  }),
  time: la({
    formats: pp,
    defaultWidth: "full"
  }),
  dateTime: la({
    formats: yp,
    defaultWidth: "full"
  })
};
const hp = mp;
var vp = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, bp = function(t, n, r, a) {
  return vp[t];
};
const gp = bp;
function Zt(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", a;
    if (r === "formatting" && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth, o = n != null && n.width ? String(n.width) : i;
      a = e.formattingValues[o] || e.formattingValues[i];
    } else {
      var l = e.defaultWidth, f = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[f] || e.values[l];
    }
    var u = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[u];
  };
}
var _p = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, wp = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Op = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, $p = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Sp = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, kp = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Pp = function(t, n) {
  var r = Number(t), a = r % 100;
  if (a > 20 || a < 10)
    switch (a % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, Tp = {
  ordinalNumber: Pp,
  era: Zt({
    values: _p,
    defaultWidth: "wide"
  }),
  quarter: Zt({
    values: wp,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Zt({
    values: Op,
    defaultWidth: "wide"
  }),
  day: Zt({
    values: $p,
    defaultWidth: "wide"
  }),
  dayPeriod: Zt({
    values: Sp,
    defaultWidth: "wide",
    formattingValues: kp,
    defaultFormattingWidth: "wide"
  })
};
const Dp = Tp;
function Jt(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(a);
    if (!i)
      return null;
    var o = i[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], f = Array.isArray(l) ? xp(l, function(s) {
      return s.test(o);
    }) : Rp(l, function(s) {
      return s.test(o);
    }), u;
    u = e.valueCallback ? e.valueCallback(f) : f, u = n.valueCallback ? n.valueCallback(u) : u;
    var d = t.slice(o.length);
    return {
      value: u,
      rest: d
    };
  };
}
function Rp(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function xp(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Cp(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var a = r[0], i = t.match(e.parsePattern);
    if (!i)
      return null;
    var o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    var l = t.slice(a.length);
    return {
      value: o,
      rest: l
    };
  };
}
var Mp = /^(\d+)(th|st|nd|rd)?/i, Np = /\d+/i, Ep = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ap = {
  any: [/^b/i, /^(a|c)/i]
}, Bp = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Ip = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Lp = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Vp = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Up = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Fp = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Yp = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, jp = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Hp = {
  ordinalNumber: Cp({
    matchPattern: Mp,
    parsePattern: Np,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Jt({
    matchPatterns: Ep,
    defaultMatchWidth: "wide",
    parsePatterns: Ap,
    defaultParseWidth: "any"
  }),
  quarter: Jt({
    matchPatterns: Bp,
    defaultMatchWidth: "wide",
    parsePatterns: Ip,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Jt({
    matchPatterns: Lp,
    defaultMatchWidth: "wide",
    parsePatterns: Vp,
    defaultParseWidth: "any"
  }),
  day: Jt({
    matchPatterns: Up,
    defaultMatchWidth: "wide",
    parsePatterns: Fp,
    defaultParseWidth: "any"
  }),
  dayPeriod: Jt({
    matchPatterns: Yp,
    defaultMatchWidth: "any",
    parsePatterns: jp,
    defaultParseWidth: "any"
  })
};
const Wp = Hp;
var qp = {
  code: "en-US",
  formatDistance: fp,
  formatLong: hp,
  formatRelative: gp,
  localize: Dp,
  match: Wp,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Au = qp;
var zp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Gp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Qp = /^'([^]*?)'?$/, Zp = /''/g, Jp = /[a-zA-Z]/;
function nn(e, t, n) {
  var r, a, i, o, l, f, u, d, s, p, h, v, N, H, U, E, W, J;
  X(2, arguments);
  var re = String(t), m = St(), x = (r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : m.locale) !== null && r !== void 0 ? r : Au, Y = ie((i = (o = (l = (f = n == null ? void 0 : n.firstWeekContainsDate) !== null && f !== void 0 ? f : n == null || (u = n.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && l !== void 0 ? l : m.firstWeekContainsDate) !== null && o !== void 0 ? o : (s = m.locale) === null || s === void 0 || (p = s.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(Y >= 1 && Y <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var Q = ie((h = (v = (N = (H = n == null ? void 0 : n.weekStartsOn) !== null && H !== void 0 ? H : n == null || (U = n.locale) === null || U === void 0 || (E = U.options) === null || E === void 0 ? void 0 : E.weekStartsOn) !== null && N !== void 0 ? N : m.weekStartsOn) !== null && v !== void 0 ? v : (W = m.locale) === null || W === void 0 || (J = W.options) === null || J === void 0 ? void 0 : J.weekStartsOn) !== null && h !== void 0 ? h : 0);
  if (!(Q >= 0 && Q <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!x.localize)
    throw new RangeError("locale must contain localize property");
  if (!x.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var ne = ue(e);
  if (!tn(ne))
    throw new RangeError("Invalid time value");
  var V = sr(ne), Z = Du(ne, V), k = {
    firstWeekContainsDate: Y,
    weekStartsOn: Q,
    locale: x,
    _originalDate: ne
  }, _ = re.match(Gp).map(function(C) {
    var M = C[0];
    if (M === "p" || M === "P") {
      var c = Da[M];
      return c(C, x.formatLong);
    }
    return C;
  }).join("").match(zp).map(function(C) {
    if (C === "''")
      return "'";
    var M = C[0];
    if (M === "'")
      return Kp(C);
    var c = ap[M];
    if (c)
      return !(n != null && n.useAdditionalWeekYearTokens) && Eu(C) && cr(C, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && Nu(C) && cr(C, t, String(e)), c(Z, C, x.localize, k);
    if (M.match(Jp))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + M + "`");
    return C;
  }).join("");
  return _;
}
function Kp(e) {
  var t = e.match(Qp);
  return t ? t[1].replace(Zp, "'") : e;
}
function Xp(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e;
}
function ey(e) {
  X(1, arguments);
  var t = ue(e), n = t.getDay();
  return n;
}
function ty(e) {
  X(1, arguments);
  var t = ue(e), n = t.getFullYear(), r = t.getMonth(), a = new Date(0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function ht(e) {
  X(1, arguments);
  var t = ue(e), n = t.getHours();
  return n;
}
var ny = 6048e5;
function ry(e) {
  X(1, arguments);
  var t = ue(e), n = ur(t).getTime() - Wd(t).getTime();
  return Math.round(n / ny) + 1;
}
function vt(e) {
  X(1, arguments);
  var t = ue(e), n = t.getMinutes();
  return n;
}
function Ce(e) {
  X(1, arguments);
  var t = ue(e), n = t.getMonth();
  return n;
}
function Ht(e) {
  X(1, arguments);
  var t = ue(e), n = t.getSeconds();
  return n;
}
function Me(e) {
  return X(1, arguments), ue(e).getFullYear();
}
function ri(e, t) {
  X(2, arguments);
  var n = ue(e), r = ue(t);
  return n.getTime() > r.getTime();
}
function ai(e, t) {
  X(2, arguments);
  var n = ue(e), r = ue(t);
  return n.getTime() < r.getTime();
}
function Bu(e, t) {
  X(2, arguments);
  var n = ue(e), r = ue(t);
  return n.getTime() === r.getTime();
}
function Sn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Sn = function(n) {
    return typeof n;
  } : Sn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Sn(e);
}
function Iu(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ra(e, t);
}
function Ra(e, t) {
  return Ra = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ra(e, t);
}
function Lu(e) {
  var t = oy();
  return function() {
    var r = fr(e), a;
    if (t) {
      var i = fr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return ay(this, a);
  };
}
function ay(e, t) {
  return t && (Sn(t) === "object" || typeof t == "function") ? t : xa(e);
}
function xa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function oy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function fr(e) {
  return fr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, fr(e);
}
function oi(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ei(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ii(e, t, n) {
  return t && Ei(e.prototype, t), n && Ei(e, n), e;
}
function Ca(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var iy = 10, Vu = /* @__PURE__ */ function() {
  function e() {
    oi(this, e), Ca(this, "subPriority", 0);
  }
  return ii(e, [{
    key: "validate",
    value: function(n, r) {
      return !0;
    }
  }]), e;
}(), ly = /* @__PURE__ */ function(e) {
  Iu(n, e);
  var t = Lu(n);
  function n(r, a, i, o, l) {
    var f;
    return oi(this, n), f = t.call(this), f.value = r, f.validateValue = a, f.setValue = i, f.priority = o, l && (f.subPriority = l), f;
  }
  return ii(n, [{
    key: "validate",
    value: function(a, i) {
      return this.validateValue(a, this.value, i);
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return this.setValue(a, i, this.value, o);
    }
  }]), n;
}(Vu), uy = /* @__PURE__ */ function(e) {
  Iu(n, e);
  var t = Lu(n);
  function n() {
    var r;
    oi(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Ca(xa(r), "priority", iy), Ca(xa(r), "subPriority", -1), r;
  }
  return ii(n, [{
    key: "set",
    value: function(a, i) {
      if (i.timestampIsSet)
        return a;
      var o = new Date(0);
      return o.setFullYear(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()), o.setHours(a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds()), o;
    }
  }]), n;
}(Vu);
function sy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ai(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function cy(e, t, n) {
  return t && Ai(e.prototype, t), n && Ai(e, n), e;
}
var _e = /* @__PURE__ */ function() {
  function e() {
    sy(this, e);
  }
  return cy(e, [{
    key: "run",
    value: function(n, r, a, i) {
      var o = this.parse(n, r, a, i);
      return o ? {
        setter: new ly(o.value, this.validate, this.set, this.priority, this.subPriority),
        rest: o.rest
      } : null;
    }
  }, {
    key: "validate",
    value: function(n, r, a) {
      return !0;
    }
  }]), e;
}();
function kn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? kn = function(n) {
    return typeof n;
  } : kn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, kn(e);
}
function fy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function dy(e, t, n) {
  return t && Bi(e.prototype, t), n && Bi(e, n), e;
}
function py(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ma(e, t);
}
function Ma(e, t) {
  return Ma = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ma(e, t);
}
function yy(e) {
  var t = hy();
  return function() {
    var r = dr(e), a;
    if (t) {
      var i = dr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return my(this, a);
  };
}
function my(e, t) {
  return t && (kn(t) === "object" || typeof t == "function") ? t : Na(e);
}
function Na(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function dr(e) {
  return dr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, dr(e);
}
function Ii(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var vy = /* @__PURE__ */ function(e) {
  py(n, e);
  var t = yy(n);
  function n() {
    var r;
    fy(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Ii(Na(r), "priority", 140), Ii(Na(r), "incompatibleTokens", ["R", "u", "t", "T"]), r;
  }
  return dy(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "G":
        case "GG":
        case "GGG":
          return o.era(a, {
            width: "abbreviated"
          }) || o.era(a, {
            width: "narrow"
          });
        case "GGGGG":
          return o.era(a, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return o.era(a, {
            width: "wide"
          }) || o.era(a, {
            width: "abbreviated"
          }) || o.era(a, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return i.era = o, a.setUTCFullYear(o, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(_e), Le = {
  month: /^(1[0-2]|0?\d)/,
  date: /^(3[0-1]|[0-2]?\d)/,
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  week: /^(5[0-3]|[0-4]?\d)/,
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  hour11h: /^(1[0-1]|0?\d)/,
  hour12h: /^(1[0-2]|0?\d)/,
  minute: /^[0-5]?\d/,
  second: /^[0-5]?\d/,
  singleDigit: /^\d/,
  twoDigits: /^\d{1,2}/,
  threeDigits: /^\d{1,3}/,
  fourDigits: /^\d{1,4}/,
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  twoDigitsSigned: /^-?\d{1,2}/,
  threeDigitsSigned: /^-?\d{1,3}/,
  fourDigitsSigned: /^-?\d{1,4}/
}, ft = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function Ve(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function Ne(e, t) {
  var n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null;
}
function dt(e, t) {
  var n = t.match(e);
  if (!n)
    return null;
  if (n[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  var r = n[1] === "+" ? 1 : -1, a = n[2] ? parseInt(n[2], 10) : 0, i = n[3] ? parseInt(n[3], 10) : 0, o = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: r * (a * ti + i * ei + o * Gd),
    rest: t.slice(n[0].length)
  };
}
function Uu(e) {
  return Ne(Le.anyDigitsSigned, e);
}
function Be(e, t) {
  switch (e) {
    case 1:
      return Ne(Le.singleDigit, t);
    case 2:
      return Ne(Le.twoDigits, t);
    case 3:
      return Ne(Le.threeDigits, t);
    case 4:
      return Ne(Le.fourDigits, t);
    default:
      return Ne(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function pr(e, t) {
  switch (e) {
    case 1:
      return Ne(Le.singleDigitSigned, t);
    case 2:
      return Ne(Le.twoDigitsSigned, t);
    case 3:
      return Ne(Le.threeDigitsSigned, t);
    case 4:
      return Ne(Le.fourDigitsSigned, t);
    default:
      return Ne(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function li(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Fu(e, t) {
  var n = t > 0, r = n ? t : 1 - t, a;
  if (r <= 50)
    a = e || 100;
  else {
    var i = r + 50, o = Math.floor(i / 100) * 100, l = e >= i % 100;
    a = e + o - (l ? 100 : 0);
  }
  return n ? a : 1 - a;
}
function Yu(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Pn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pn = function(n) {
    return typeof n;
  } : Pn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Pn(e);
}
function by(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Li(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function gy(e, t, n) {
  return t && Li(e.prototype, t), n && Li(e, n), e;
}
function _y(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ea(e, t);
}
function Ea(e, t) {
  return Ea = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ea(e, t);
}
function wy(e) {
  var t = $y();
  return function() {
    var r = yr(e), a;
    if (t) {
      var i = yr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Oy(this, a);
  };
}
function Oy(e, t) {
  return t && (Pn(t) === "object" || typeof t == "function") ? t : Aa(e);
}
function Aa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $y() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function yr(e) {
  return yr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, yr(e);
}
function Vi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Sy = /* @__PURE__ */ function(e) {
  _y(n, e);
  var t = wy(n);
  function n() {
    var r;
    by(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Vi(Aa(r), "priority", 130), Vi(Aa(r), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return gy(n, [{
    key: "parse",
    value: function(a, i, o) {
      var l = function(u) {
        return {
          year: u,
          isTwoDigitYear: i === "yy"
        };
      };
      switch (i) {
        case "y":
          return Ve(Be(4, a), l);
        case "yo":
          return Ve(o.ordinalNumber(a, {
            unit: "year"
          }), l);
        default:
          return Ve(Be(i.length, a), l);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i.isTwoDigitYear || i.year > 0;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      var l = a.getUTCFullYear();
      if (o.isTwoDigitYear) {
        var f = Fu(o.year, l);
        return a.setUTCFullYear(f, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
      }
      var u = !("era" in i) || i.era === 1 ? o.year : 1 - o.year;
      return a.setUTCFullYear(u, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(_e);
function Tn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Tn = function(n) {
    return typeof n;
  } : Tn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Tn(e);
}
function ky(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ui(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Py(e, t, n) {
  return t && Ui(e.prototype, t), n && Ui(e, n), e;
}
function Ty(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ba(e, t);
}
function Ba(e, t) {
  return Ba = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ba(e, t);
}
function Dy(e) {
  var t = xy();
  return function() {
    var r = mr(e), a;
    if (t) {
      var i = mr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Ry(this, a);
  };
}
function Ry(e, t) {
  return t && (Tn(t) === "object" || typeof t == "function") ? t : Ia(e);
}
function Ia(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function xy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function mr(e) {
  return mr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, mr(e);
}
function Fi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Cy = /* @__PURE__ */ function(e) {
  Ty(n, e);
  var t = Dy(n);
  function n() {
    var r;
    ky(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Fi(Ia(r), "priority", 130), Fi(Ia(r), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return Py(n, [{
    key: "parse",
    value: function(a, i, o) {
      var l = function(u) {
        return {
          year: u,
          isTwoDigitYear: i === "YY"
        };
      };
      switch (i) {
        case "Y":
          return Ve(Be(4, a), l);
        case "Yo":
          return Ve(o.ordinalNumber(a, {
            unit: "year"
          }), l);
        default:
          return Ve(Be(i.length, a), l);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i.isTwoDigitYear || i.year > 0;
    }
  }, {
    key: "set",
    value: function(a, i, o, l) {
      var f = ni(a, l);
      if (o.isTwoDigitYear) {
        var u = Fu(o.year, f);
        return a.setUTCFullYear(u, 0, l.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), Bt(a, l);
      }
      var d = !("era" in i) || i.era === 1 ? o.year : 1 - o.year;
      return a.setUTCFullYear(d, 0, l.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), Bt(a, l);
    }
  }]), n;
}(_e);
function Dn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Dn = function(n) {
    return typeof n;
  } : Dn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Dn(e);
}
function My(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Yi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ny(e, t, n) {
  return t && Yi(e.prototype, t), n && Yi(e, n), e;
}
function Ey(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && La(e, t);
}
function La(e, t) {
  return La = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, La(e, t);
}
function Ay(e) {
  var t = Iy();
  return function() {
    var r = hr(e), a;
    if (t) {
      var i = hr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return By(this, a);
  };
}
function By(e, t) {
  return t && (Dn(t) === "object" || typeof t == "function") ? t : Va(e);
}
function Va(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Iy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function hr(e) {
  return hr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, hr(e);
}
function ji(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ly = /* @__PURE__ */ function(e) {
  Ey(n, e);
  var t = Ay(n);
  function n() {
    var r;
    My(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), ji(Va(r), "priority", 130), ji(Va(r), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return Ny(n, [{
    key: "parse",
    value: function(a, i) {
      return pr(i === "R" ? 4 : i.length, a);
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      var l = new Date(0);
      return l.setUTCFullYear(o, 0, 4), l.setUTCHours(0, 0, 0, 0), jt(l);
    }
  }]), n;
}(_e);
function Rn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Rn = function(n) {
    return typeof n;
  } : Rn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Rn(e);
}
function Vy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Uy(e, t, n) {
  return t && Hi(e.prototype, t), n && Hi(e, n), e;
}
function Fy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ua(e, t);
}
function Ua(e, t) {
  return Ua = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ua(e, t);
}
function Yy(e) {
  var t = Hy();
  return function() {
    var r = vr(e), a;
    if (t) {
      var i = vr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return jy(this, a);
  };
}
function jy(e, t) {
  return t && (Rn(t) === "object" || typeof t == "function") ? t : Fa(e);
}
function Fa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Hy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function vr(e) {
  return vr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, vr(e);
}
function Wi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Wy = /* @__PURE__ */ function(e) {
  Fy(n, e);
  var t = Yy(n);
  function n() {
    var r;
    Vy(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Wi(Fa(r), "priority", 130), Wi(Fa(r), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return Uy(n, [{
    key: "parse",
    value: function(a, i) {
      return pr(i === "u" ? 4 : i.length, a);
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCFullYear(o, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(_e);
function xn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? xn = function(n) {
    return typeof n;
  } : xn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, xn(e);
}
function qy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function zy(e, t, n) {
  return t && qi(e.prototype, t), n && qi(e, n), e;
}
function Gy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ya(e, t);
}
function Ya(e, t) {
  return Ya = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ya(e, t);
}
function Qy(e) {
  var t = Jy();
  return function() {
    var r = br(e), a;
    if (t) {
      var i = br(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Zy(this, a);
  };
}
function Zy(e, t) {
  return t && (xn(t) === "object" || typeof t == "function") ? t : ja(e);
}
function ja(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function br(e) {
  return br = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, br(e);
}
function zi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ky = /* @__PURE__ */ function(e) {
  Gy(n, e);
  var t = Qy(n);
  function n() {
    var r;
    qy(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), zi(ja(r), "priority", 120), zi(ja(r), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return zy(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "Q":
        case "QQ":
          return Be(i.length, a);
        case "Qo":
          return o.ordinalNumber(a, {
            unit: "quarter"
          });
        case "QQQ":
          return o.quarter(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.quarter(a, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return o.quarter(a, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return o.quarter(a, {
            width: "wide",
            context: "formatting"
          }) || o.quarter(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.quarter(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 4;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCMonth((o - 1) * 3, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(_e);
function Cn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Cn = function(n) {
    return typeof n;
  } : Cn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Cn(e);
}
function Xy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function em(e, t, n) {
  return t && Gi(e.prototype, t), n && Gi(e, n), e;
}
function tm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ha(e, t);
}
function Ha(e, t) {
  return Ha = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ha(e, t);
}
function nm(e) {
  var t = am();
  return function() {
    var r = gr(e), a;
    if (t) {
      var i = gr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return rm(this, a);
  };
}
function rm(e, t) {
  return t && (Cn(t) === "object" || typeof t == "function") ? t : Wa(e);
}
function Wa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function am() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function gr(e) {
  return gr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, gr(e);
}
function Qi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var om = /* @__PURE__ */ function(e) {
  tm(n, e);
  var t = nm(n);
  function n() {
    var r;
    Xy(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Qi(Wa(r), "priority", 120), Qi(Wa(r), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return em(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "q":
        case "qq":
          return Be(i.length, a);
        case "qo":
          return o.ordinalNumber(a, {
            unit: "quarter"
          });
        case "qqq":
          return o.quarter(a, {
            width: "abbreviated",
            context: "standalone"
          }) || o.quarter(a, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return o.quarter(a, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return o.quarter(a, {
            width: "wide",
            context: "standalone"
          }) || o.quarter(a, {
            width: "abbreviated",
            context: "standalone"
          }) || o.quarter(a, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 4;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCMonth((o - 1) * 3, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(_e);
function Mn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Mn = function(n) {
    return typeof n;
  } : Mn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Mn(e);
}
function im(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function lm(e, t, n) {
  return t && Zi(e.prototype, t), n && Zi(e, n), e;
}
function um(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && qa(e, t);
}
function qa(e, t) {
  return qa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, qa(e, t);
}
function sm(e) {
  var t = fm();
  return function() {
    var r = _r(e), a;
    if (t) {
      var i = _r(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return cm(this, a);
  };
}
function cm(e, t) {
  return t && (Mn(t) === "object" || typeof t == "function") ? t : za(e);
}
function za(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function _r(e) {
  return _r = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, _r(e);
}
function Ji(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var dm = /* @__PURE__ */ function(e) {
  um(n, e);
  var t = sm(n);
  function n() {
    var r;
    im(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Ji(za(r), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), Ji(za(r), "priority", 110), r;
  }
  return lm(n, [{
    key: "parse",
    value: function(a, i, o) {
      var l = function(u) {
        return u - 1;
      };
      switch (i) {
        case "M":
          return Ve(Ne(Le.month, a), l);
        case "MM":
          return Ve(Be(2, a), l);
        case "Mo":
          return Ve(o.ordinalNumber(a, {
            unit: "month"
          }), l);
        case "MMM":
          return o.month(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.month(a, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return o.month(a, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return o.month(a, {
            width: "wide",
            context: "formatting"
          }) || o.month(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.month(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCMonth(o, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(_e);
function Nn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Nn = function(n) {
    return typeof n;
  } : Nn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Nn(e);
}
function pm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ki(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ym(e, t, n) {
  return t && Ki(e.prototype, t), n && Ki(e, n), e;
}
function mm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ga(e, t);
}
function Ga(e, t) {
  return Ga = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ga(e, t);
}
function hm(e) {
  var t = bm();
  return function() {
    var r = wr(e), a;
    if (t) {
      var i = wr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return vm(this, a);
  };
}
function vm(e, t) {
  return t && (Nn(t) === "object" || typeof t == "function") ? t : Qa(e);
}
function Qa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function wr(e) {
  return wr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, wr(e);
}
function Xi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var gm = /* @__PURE__ */ function(e) {
  mm(n, e);
  var t = hm(n);
  function n() {
    var r;
    pm(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Xi(Qa(r), "priority", 110), Xi(Qa(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return ym(n, [{
    key: "parse",
    value: function(a, i, o) {
      var l = function(u) {
        return u - 1;
      };
      switch (i) {
        case "L":
          return Ve(Ne(Le.month, a), l);
        case "LL":
          return Ve(Be(2, a), l);
        case "Lo":
          return Ve(o.ordinalNumber(a, {
            unit: "month"
          }), l);
        case "LLL":
          return o.month(a, {
            width: "abbreviated",
            context: "standalone"
          }) || o.month(a, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return o.month(a, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return o.month(a, {
            width: "wide",
            context: "standalone"
          }) || o.month(a, {
            width: "abbreviated",
            context: "standalone"
          }) || o.month(a, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCMonth(o, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(_e);
function _m(e, t, n) {
  X(2, arguments);
  var r = ue(e), a = ie(t), i = Cu(r, n) - a;
  return r.setUTCDate(r.getUTCDate() - i * 7), r;
}
function En(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? En = function(n) {
    return typeof n;
  } : En = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, En(e);
}
function wm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function el(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Om(e, t, n) {
  return t && el(e.prototype, t), n && el(e, n), e;
}
function $m(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Za(e, t);
}
function Za(e, t) {
  return Za = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Za(e, t);
}
function Sm(e) {
  var t = Pm();
  return function() {
    var r = Or(e), a;
    if (t) {
      var i = Or(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return km(this, a);
  };
}
function km(e, t) {
  return t && (En(t) === "object" || typeof t == "function") ? t : Ja(e);
}
function Ja(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Pm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Or(e) {
  return Or = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Or(e);
}
function tl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Tm = /* @__PURE__ */ function(e) {
  $m(n, e);
  var t = Sm(n);
  function n() {
    var r;
    wm(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), tl(Ja(r), "priority", 100), tl(Ja(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return Om(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "w":
          return Ne(Le.week, a);
        case "wo":
          return o.ordinalNumber(a, {
            unit: "week"
          });
        default:
          return Be(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 53;
    }
  }, {
    key: "set",
    value: function(a, i, o, l) {
      return Bt(_m(a, o, l), l);
    }
  }]), n;
}(_e);
function Dm(e, t) {
  X(2, arguments);
  var n = ue(e), r = ie(t), a = xu(n) - r;
  return n.setUTCDate(n.getUTCDate() - a * 7), n;
}
function An(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? An = function(n) {
    return typeof n;
  } : An = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, An(e);
}
function Rm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function xm(e, t, n) {
  return t && nl(e.prototype, t), n && nl(e, n), e;
}
function Cm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ka(e, t);
}
function Ka(e, t) {
  return Ka = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ka(e, t);
}
function Mm(e) {
  var t = Em();
  return function() {
    var r = $r(e), a;
    if (t) {
      var i = $r(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Nm(this, a);
  };
}
function Nm(e, t) {
  return t && (An(t) === "object" || typeof t == "function") ? t : Xa(e);
}
function Xa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Em() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function $r(e) {
  return $r = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, $r(e);
}
function rl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Am = /* @__PURE__ */ function(e) {
  Cm(n, e);
  var t = Mm(n);
  function n() {
    var r;
    Rm(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), rl(Xa(r), "priority", 100), rl(Xa(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return xm(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "I":
          return Ne(Le.week, a);
        case "Io":
          return o.ordinalNumber(a, {
            unit: "week"
          });
        default:
          return Be(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 53;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return jt(Dm(a, o));
    }
  }]), n;
}(_e);
function Bn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Bn = function(n) {
    return typeof n;
  } : Bn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Bn(e);
}
function Bm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function al(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Im(e, t, n) {
  return t && al(e.prototype, t), n && al(e, n), e;
}
function Lm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && eo(e, t);
}
function eo(e, t) {
  return eo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, eo(e, t);
}
function Vm(e) {
  var t = Fm();
  return function() {
    var r = Sr(e), a;
    if (t) {
      var i = Sr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Um(this, a);
  };
}
function Um(e, t) {
  return t && (Bn(t) === "object" || typeof t == "function") ? t : In(e);
}
function In(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Sr(e) {
  return Sr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Sr(e);
}
function ua(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ym = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], jm = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Hm = /* @__PURE__ */ function(e) {
  Lm(n, e);
  var t = Vm(n);
  function n() {
    var r;
    Bm(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), ua(In(r), "priority", 90), ua(In(r), "subPriority", 1), ua(In(r), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return Im(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "d":
          return Ne(Le.date, a);
        case "do":
          return o.ordinalNumber(a, {
            unit: "date"
          });
        default:
          return Be(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      var o = a.getUTCFullYear(), l = Yu(o), f = a.getUTCMonth();
      return l ? i >= 1 && i <= jm[f] : i >= 1 && i <= Ym[f];
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCDate(o), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(_e);
function Ln(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ln = function(n) {
    return typeof n;
  } : Ln = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ln(e);
}
function Wm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ol(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function qm(e, t, n) {
  return t && ol(e.prototype, t), n && ol(e, n), e;
}
function zm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && to(e, t);
}
function to(e, t) {
  return to = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, to(e, t);
}
function Gm(e) {
  var t = Zm();
  return function() {
    var r = kr(e), a;
    if (t) {
      var i = kr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Qm(this, a);
  };
}
function Qm(e, t) {
  return t && (Ln(t) === "object" || typeof t == "function") ? t : Vn(e);
}
function Vn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Zm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function kr(e) {
  return kr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, kr(e);
}
function sa(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Jm = /* @__PURE__ */ function(e) {
  zm(n, e);
  var t = Gm(n);
  function n() {
    var r;
    Wm(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), sa(Vn(r), "priority", 90), sa(Vn(r), "subpriority", 1), sa(Vn(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), r;
  }
  return qm(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "D":
        case "DD":
          return Ne(Le.dayOfYear, a);
        case "Do":
          return o.ordinalNumber(a, {
            unit: "date"
          });
        default:
          return Be(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      var o = a.getUTCFullYear(), l = Yu(o);
      return l ? i >= 1 && i <= 366 : i >= 1 && i <= 365;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCMonth(0, o), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(_e);
function ui(e, t, n) {
  var r, a, i, o, l, f, u, d;
  X(2, arguments);
  var s = St(), p = ie((r = (a = (i = (o = n == null ? void 0 : n.weekStartsOn) !== null && o !== void 0 ? o : n == null || (l = n.locale) === null || l === void 0 || (f = l.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && i !== void 0 ? i : s.weekStartsOn) !== null && a !== void 0 ? a : (u = s.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(p >= 0 && p <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var h = ue(e), v = ie(t), N = h.getUTCDay(), H = v % 7, U = (H + 7) % 7, E = (U < p ? 7 : 0) + v - N;
  return h.setUTCDate(h.getUTCDate() + E), h;
}
function Un(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Un = function(n) {
    return typeof n;
  } : Un = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Un(e);
}
function Km(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function il(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Xm(e, t, n) {
  return t && il(e.prototype, t), n && il(e, n), e;
}
function eh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && no(e, t);
}
function no(e, t) {
  return no = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, no(e, t);
}
function th(e) {
  var t = rh();
  return function() {
    var r = Pr(e), a;
    if (t) {
      var i = Pr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return nh(this, a);
  };
}
function nh(e, t) {
  return t && (Un(t) === "object" || typeof t == "function") ? t : ro(e);
}
function ro(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function rh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Pr(e) {
  return Pr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Pr(e);
}
function ll(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ah = /* @__PURE__ */ function(e) {
  eh(n, e);
  var t = th(n);
  function n() {
    var r;
    Km(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), ll(ro(r), "priority", 90), ll(ro(r), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), r;
  }
  return Xm(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "E":
        case "EE":
        case "EEE":
          return o.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return o.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return o.day(a, {
            width: "wide",
            context: "formatting"
          }) || o.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(a, i, o, l) {
      return a = ui(a, o, l), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(_e);
function Fn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Fn = function(n) {
    return typeof n;
  } : Fn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Fn(e);
}
function oh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ul(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ih(e, t, n) {
  return t && ul(e.prototype, t), n && ul(e, n), e;
}
function lh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ao(e, t);
}
function ao(e, t) {
  return ao = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ao(e, t);
}
function uh(e) {
  var t = ch();
  return function() {
    var r = Tr(e), a;
    if (t) {
      var i = Tr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return sh(this, a);
  };
}
function sh(e, t) {
  return t && (Fn(t) === "object" || typeof t == "function") ? t : oo(e);
}
function oo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ch() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Tr(e) {
  return Tr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Tr(e);
}
function sl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var fh = /* @__PURE__ */ function(e) {
  lh(n, e);
  var t = uh(n);
  function n() {
    var r;
    oh(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), sl(oo(r), "priority", 90), sl(oo(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), r;
  }
  return ih(n, [{
    key: "parse",
    value: function(a, i, o, l) {
      var f = function(d) {
        var s = Math.floor((d - 1) / 7) * 7;
        return (d + l.weekStartsOn + 6) % 7 + s;
      };
      switch (i) {
        case "e":
        case "ee":
          return Ve(Be(i.length, a), f);
        case "eo":
          return Ve(o.ordinalNumber(a, {
            unit: "day"
          }), f);
        case "eee":
          return o.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return o.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return o.day(a, {
            width: "wide",
            context: "formatting"
          }) || o.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(a, i, o, l) {
      return a = ui(a, o, l), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(_e);
function Yn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Yn = function(n) {
    return typeof n;
  } : Yn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Yn(e);
}
function dh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ph(e, t, n) {
  return t && cl(e.prototype, t), n && cl(e, n), e;
}
function yh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && io(e, t);
}
function io(e, t) {
  return io = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, io(e, t);
}
function mh(e) {
  var t = vh();
  return function() {
    var r = Dr(e), a;
    if (t) {
      var i = Dr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return hh(this, a);
  };
}
function hh(e, t) {
  return t && (Yn(t) === "object" || typeof t == "function") ? t : lo(e);
}
function lo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Dr(e) {
  return Dr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Dr(e);
}
function fl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var bh = /* @__PURE__ */ function(e) {
  yh(n, e);
  var t = mh(n);
  function n() {
    var r;
    dh(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), fl(lo(r), "priority", 90), fl(lo(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), r;
  }
  return ph(n, [{
    key: "parse",
    value: function(a, i, o, l) {
      var f = function(d) {
        var s = Math.floor((d - 1) / 7) * 7;
        return (d + l.weekStartsOn + 6) % 7 + s;
      };
      switch (i) {
        case "c":
        case "cc":
          return Ve(Be(i.length, a), f);
        case "co":
          return Ve(o.ordinalNumber(a, {
            unit: "day"
          }), f);
        case "ccc":
          return o.day(a, {
            width: "abbreviated",
            context: "standalone"
          }) || o.day(a, {
            width: "short",
            context: "standalone"
          }) || o.day(a, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return o.day(a, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return o.day(a, {
            width: "short",
            context: "standalone"
          }) || o.day(a, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return o.day(a, {
            width: "wide",
            context: "standalone"
          }) || o.day(a, {
            width: "abbreviated",
            context: "standalone"
          }) || o.day(a, {
            width: "short",
            context: "standalone"
          }) || o.day(a, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(a, i, o, l) {
      return a = ui(a, o, l), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(_e);
function gh(e, t) {
  X(2, arguments);
  var n = ie(t);
  n % 7 === 0 && (n = n - 7);
  var r = 1, a = ue(e), i = a.getUTCDay(), o = n % 7, l = (o + 7) % 7, f = (l < r ? 7 : 0) + n - i;
  return a.setUTCDate(a.getUTCDate() + f), a;
}
function jn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? jn = function(n) {
    return typeof n;
  } : jn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, jn(e);
}
function _h(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function wh(e, t, n) {
  return t && dl(e.prototype, t), n && dl(e, n), e;
}
function Oh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && uo(e, t);
}
function uo(e, t) {
  return uo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, uo(e, t);
}
function $h(e) {
  var t = kh();
  return function() {
    var r = Rr(e), a;
    if (t) {
      var i = Rr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Sh(this, a);
  };
}
function Sh(e, t) {
  return t && (jn(t) === "object" || typeof t == "function") ? t : so(e);
}
function so(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Rr(e) {
  return Rr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Rr(e);
}
function pl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ph = /* @__PURE__ */ function(e) {
  Oh(n, e);
  var t = $h(n);
  function n() {
    var r;
    _h(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), pl(so(r), "priority", 90), pl(so(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), r;
  }
  return wh(n, [{
    key: "parse",
    value: function(a, i, o) {
      var l = function(u) {
        return u === 0 ? 7 : u;
      };
      switch (i) {
        case "i":
        case "ii":
          return Be(i.length, a);
        case "io":
          return o.ordinalNumber(a, {
            unit: "day"
          });
        case "iii":
          return Ve(o.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          }), l);
        case "iiiii":
          return Ve(o.day(a, {
            width: "narrow",
            context: "formatting"
          }), l);
        case "iiiiii":
          return Ve(o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          }), l);
        case "iiii":
        default:
          return Ve(o.day(a, {
            width: "wide",
            context: "formatting"
          }) || o.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.day(a, {
            width: "short",
            context: "formatting"
          }) || o.day(a, {
            width: "narrow",
            context: "formatting"
          }), l);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 7;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a = gh(a, o), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(_e);
function Hn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Hn = function(n) {
    return typeof n;
  } : Hn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Hn(e);
}
function Th(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Dh(e, t, n) {
  return t && yl(e.prototype, t), n && yl(e, n), e;
}
function Rh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && co(e, t);
}
function co(e, t) {
  return co = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, co(e, t);
}
function xh(e) {
  var t = Mh();
  return function() {
    var r = xr(e), a;
    if (t) {
      var i = xr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Ch(this, a);
  };
}
function Ch(e, t) {
  return t && (Hn(t) === "object" || typeof t == "function") ? t : fo(e);
}
function fo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Mh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function xr(e) {
  return xr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, xr(e);
}
function ml(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Nh = /* @__PURE__ */ function(e) {
  Rh(n, e);
  var t = xh(n);
  function n() {
    var r;
    Th(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), ml(fo(r), "priority", 80), ml(fo(r), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), r;
  }
  return Dh(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "a":
        case "aa":
        case "aaa":
          return o.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return o.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return o.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          }) || o.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCHours(li(o), 0, 0, 0), a;
    }
  }]), n;
}(_e);
function Wn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Wn = function(n) {
    return typeof n;
  } : Wn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Wn(e);
}
function Eh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ah(e, t, n) {
  return t && hl(e.prototype, t), n && hl(e, n), e;
}
function Bh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && po(e, t);
}
function po(e, t) {
  return po = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, po(e, t);
}
function Ih(e) {
  var t = Vh();
  return function() {
    var r = Cr(e), a;
    if (t) {
      var i = Cr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Lh(this, a);
  };
}
function Lh(e, t) {
  return t && (Wn(t) === "object" || typeof t == "function") ? t : yo(e);
}
function yo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Cr(e) {
  return Cr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Cr(e);
}
function vl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Uh = /* @__PURE__ */ function(e) {
  Bh(n, e);
  var t = Ih(n);
  function n() {
    var r;
    Eh(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), vl(yo(r), "priority", 80), vl(yo(r), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), r;
  }
  return Ah(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "b":
        case "bb":
        case "bbb":
          return o.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return o.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return o.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          }) || o.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCHours(li(o), 0, 0, 0), a;
    }
  }]), n;
}(_e);
function qn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qn = function(n) {
    return typeof n;
  } : qn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, qn(e);
}
function Fh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Yh(e, t, n) {
  return t && bl(e.prototype, t), n && bl(e, n), e;
}
function jh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && mo(e, t);
}
function mo(e, t) {
  return mo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, mo(e, t);
}
function Hh(e) {
  var t = qh();
  return function() {
    var r = Mr(e), a;
    if (t) {
      var i = Mr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Wh(this, a);
  };
}
function Wh(e, t) {
  return t && (qn(t) === "object" || typeof t == "function") ? t : ho(e);
}
function ho(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Mr(e) {
  return Mr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Mr(e);
}
function gl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var zh = /* @__PURE__ */ function(e) {
  jh(n, e);
  var t = Hh(n);
  function n() {
    var r;
    Fh(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), gl(ho(r), "priority", 80), gl(ho(r), "incompatibleTokens", ["a", "b", "t", "T"]), r;
  }
  return Yh(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "B":
        case "BB":
        case "BBB":
          return o.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return o.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return o.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          }) || o.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || o.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCHours(li(o), 0, 0, 0), a;
    }
  }]), n;
}(_e);
function zn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zn = function(n) {
    return typeof n;
  } : zn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, zn(e);
}
function Gh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _l(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Qh(e, t, n) {
  return t && _l(e.prototype, t), n && _l(e, n), e;
}
function Zh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && vo(e, t);
}
function vo(e, t) {
  return vo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, vo(e, t);
}
function Jh(e) {
  var t = Xh();
  return function() {
    var r = Nr(e), a;
    if (t) {
      var i = Nr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Kh(this, a);
  };
}
function Kh(e, t) {
  return t && (zn(t) === "object" || typeof t == "function") ? t : bo(e);
}
function bo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Xh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Nr(e) {
  return Nr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Nr(e);
}
function wl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ev = /* @__PURE__ */ function(e) {
  Zh(n, e);
  var t = Jh(n);
  function n() {
    var r;
    Gh(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), wl(bo(r), "priority", 70), wl(bo(r), "incompatibleTokens", ["H", "K", "k", "t", "T"]), r;
  }
  return Qh(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "h":
          return Ne(Le.hour12h, a);
        case "ho":
          return o.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Be(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 12;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      var l = a.getUTCHours() >= 12;
      return l && o < 12 ? a.setUTCHours(o + 12, 0, 0, 0) : !l && o === 12 ? a.setUTCHours(0, 0, 0, 0) : a.setUTCHours(o, 0, 0, 0), a;
    }
  }]), n;
}(_e);
function Gn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Gn = function(n) {
    return typeof n;
  } : Gn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Gn(e);
}
function tv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ol(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function nv(e, t, n) {
  return t && Ol(e.prototype, t), n && Ol(e, n), e;
}
function rv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && go(e, t);
}
function go(e, t) {
  return go = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, go(e, t);
}
function av(e) {
  var t = iv();
  return function() {
    var r = Er(e), a;
    if (t) {
      var i = Er(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return ov(this, a);
  };
}
function ov(e, t) {
  return t && (Gn(t) === "object" || typeof t == "function") ? t : _o(e);
}
function _o(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function iv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Er(e) {
  return Er = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Er(e);
}
function $l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var lv = /* @__PURE__ */ function(e) {
  rv(n, e);
  var t = av(n);
  function n() {
    var r;
    tv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), $l(_o(r), "priority", 70), $l(_o(r), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), r;
  }
  return nv(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "H":
          return Ne(Le.hour23h, a);
        case "Ho":
          return o.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Be(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 23;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCHours(o, 0, 0, 0), a;
    }
  }]), n;
}(_e);
function Qn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Qn = function(n) {
    return typeof n;
  } : Qn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Qn(e);
}
function uv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function sv(e, t, n) {
  return t && Sl(e.prototype, t), n && Sl(e, n), e;
}
function cv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && wo(e, t);
}
function wo(e, t) {
  return wo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, wo(e, t);
}
function fv(e) {
  var t = pv();
  return function() {
    var r = Ar(e), a;
    if (t) {
      var i = Ar(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return dv(this, a);
  };
}
function dv(e, t) {
  return t && (Qn(t) === "object" || typeof t == "function") ? t : Oo(e);
}
function Oo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ar(e) {
  return Ar = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ar(e);
}
function kl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var yv = /* @__PURE__ */ function(e) {
  cv(n, e);
  var t = fv(n);
  function n() {
    var r;
    uv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), kl(Oo(r), "priority", 70), kl(Oo(r), "incompatibleTokens", ["h", "H", "k", "t", "T"]), r;
  }
  return sv(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "K":
          return Ne(Le.hour11h, a);
        case "Ko":
          return o.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Be(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      var l = a.getUTCHours() >= 12;
      return l && o < 12 ? a.setUTCHours(o + 12, 0, 0, 0) : a.setUTCHours(o, 0, 0, 0), a;
    }
  }]), n;
}(_e);
function Zn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Zn = function(n) {
    return typeof n;
  } : Zn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Zn(e);
}
function mv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Pl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function hv(e, t, n) {
  return t && Pl(e.prototype, t), n && Pl(e, n), e;
}
function vv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && $o(e, t);
}
function $o(e, t) {
  return $o = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, $o(e, t);
}
function bv(e) {
  var t = _v();
  return function() {
    var r = Br(e), a;
    if (t) {
      var i = Br(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return gv(this, a);
  };
}
function gv(e, t) {
  return t && (Zn(t) === "object" || typeof t == "function") ? t : So(e);
}
function So(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _v() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Br(e) {
  return Br = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Br(e);
}
function Tl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var wv = /* @__PURE__ */ function(e) {
  vv(n, e);
  var t = bv(n);
  function n() {
    var r;
    mv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Tl(So(r), "priority", 70), Tl(So(r), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), r;
  }
  return hv(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "k":
          return Ne(Le.hour24h, a);
        case "ko":
          return o.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Be(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 24;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      var l = o <= 24 ? o % 24 : o;
      return a.setUTCHours(l, 0, 0, 0), a;
    }
  }]), n;
}(_e);
function Jn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Jn = function(n) {
    return typeof n;
  } : Jn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Jn(e);
}
function Ov(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function $v(e, t, n) {
  return t && Dl(e.prototype, t), n && Dl(e, n), e;
}
function Sv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ko(e, t);
}
function ko(e, t) {
  return ko = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ko(e, t);
}
function kv(e) {
  var t = Tv();
  return function() {
    var r = Ir(e), a;
    if (t) {
      var i = Ir(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Pv(this, a);
  };
}
function Pv(e, t) {
  return t && (Jn(t) === "object" || typeof t == "function") ? t : Po(e);
}
function Po(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Tv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ir(e) {
  return Ir = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ir(e);
}
function Rl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Dv = /* @__PURE__ */ function(e) {
  Sv(n, e);
  var t = kv(n);
  function n() {
    var r;
    Ov(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Rl(Po(r), "priority", 60), Rl(Po(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return $v(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "m":
          return Ne(Le.minute, a);
        case "mo":
          return o.ordinalNumber(a, {
            unit: "minute"
          });
        default:
          return Be(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 59;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCMinutes(o, 0, 0), a;
    }
  }]), n;
}(_e);
function Kn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Kn = function(n) {
    return typeof n;
  } : Kn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Kn(e);
}
function Rv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function xv(e, t, n) {
  return t && xl(e.prototype, t), n && xl(e, n), e;
}
function Cv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && To(e, t);
}
function To(e, t) {
  return To = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, To(e, t);
}
function Mv(e) {
  var t = Ev();
  return function() {
    var r = Lr(e), a;
    if (t) {
      var i = Lr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Nv(this, a);
  };
}
function Nv(e, t) {
  return t && (Kn(t) === "object" || typeof t == "function") ? t : Do(e);
}
function Do(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ev() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Lr(e) {
  return Lr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Lr(e);
}
function Cl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Av = /* @__PURE__ */ function(e) {
  Cv(n, e);
  var t = Mv(n);
  function n() {
    var r;
    Rv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Cl(Do(r), "priority", 50), Cl(Do(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return xv(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "s":
          return Ne(Le.second, a);
        case "so":
          return o.ordinalNumber(a, {
            unit: "second"
          });
        default:
          return Be(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 59;
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCSeconds(o, 0), a;
    }
  }]), n;
}(_e);
function Xn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xn = function(n) {
    return typeof n;
  } : Xn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Xn(e);
}
function Bv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ml(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Iv(e, t, n) {
  return t && Ml(e.prototype, t), n && Ml(e, n), e;
}
function Lv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ro(e, t);
}
function Ro(e, t) {
  return Ro = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ro(e, t);
}
function Vv(e) {
  var t = Fv();
  return function() {
    var r = Vr(e), a;
    if (t) {
      var i = Vr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Uv(this, a);
  };
}
function Uv(e, t) {
  return t && (Xn(t) === "object" || typeof t == "function") ? t : xo(e);
}
function xo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Vr(e) {
  return Vr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Vr(e);
}
function Nl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Yv = /* @__PURE__ */ function(e) {
  Lv(n, e);
  var t = Vv(n);
  function n() {
    var r;
    Bv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Nl(xo(r), "priority", 30), Nl(xo(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Iv(n, [{
    key: "parse",
    value: function(a, i) {
      var o = function(f) {
        return Math.floor(f * Math.pow(10, -i.length + 3));
      };
      return Ve(Be(i.length, a), o);
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCMilliseconds(o), a;
    }
  }]), n;
}(_e);
function er(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? er = function(n) {
    return typeof n;
  } : er = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, er(e);
}
function jv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function El(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Hv(e, t, n) {
  return t && El(e.prototype, t), n && El(e, n), e;
}
function Wv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Co(e, t);
}
function Co(e, t) {
  return Co = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Co(e, t);
}
function qv(e) {
  var t = Gv();
  return function() {
    var r = Ur(e), a;
    if (t) {
      var i = Ur(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return zv(this, a);
  };
}
function zv(e, t) {
  return t && (er(t) === "object" || typeof t == "function") ? t : Mo(e);
}
function Mo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Gv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ur(e) {
  return Ur = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ur(e);
}
function Al(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Qv = /* @__PURE__ */ function(e) {
  Wv(n, e);
  var t = qv(n);
  function n() {
    var r;
    jv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Al(Mo(r), "priority", 10), Al(Mo(r), "incompatibleTokens", ["t", "T", "x"]), r;
  }
  return Hv(n, [{
    key: "parse",
    value: function(a, i) {
      switch (i) {
        case "X":
          return dt(ft.basicOptionalMinutes, a);
        case "XX":
          return dt(ft.basic, a);
        case "XXXX":
          return dt(ft.basicOptionalSeconds, a);
        case "XXXXX":
          return dt(ft.extendedOptionalSeconds, a);
        case "XXX":
        default:
          return dt(ft.extended, a);
      }
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return i.timestampIsSet ? a : new Date(a.getTime() - o);
    }
  }]), n;
}(_e);
function tr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? tr = function(n) {
    return typeof n;
  } : tr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, tr(e);
}
function Zv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Jv(e, t, n) {
  return t && Bl(e.prototype, t), n && Bl(e, n), e;
}
function Kv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && No(e, t);
}
function No(e, t) {
  return No = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, No(e, t);
}
function Xv(e) {
  var t = t0();
  return function() {
    var r = Fr(e), a;
    if (t) {
      var i = Fr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return e0(this, a);
  };
}
function e0(e, t) {
  return t && (tr(t) === "object" || typeof t == "function") ? t : Eo(e);
}
function Eo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function t0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Fr(e) {
  return Fr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Fr(e);
}
function Il(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var n0 = /* @__PURE__ */ function(e) {
  Kv(n, e);
  var t = Xv(n);
  function n() {
    var r;
    Zv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Il(Eo(r), "priority", 10), Il(Eo(r), "incompatibleTokens", ["t", "T", "X"]), r;
  }
  return Jv(n, [{
    key: "parse",
    value: function(a, i) {
      switch (i) {
        case "x":
          return dt(ft.basicOptionalMinutes, a);
        case "xx":
          return dt(ft.basic, a);
        case "xxxx":
          return dt(ft.basicOptionalSeconds, a);
        case "xxxxx":
          return dt(ft.extendedOptionalSeconds, a);
        case "xxx":
        default:
          return dt(ft.extended, a);
      }
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return i.timestampIsSet ? a : new Date(a.getTime() - o);
    }
  }]), n;
}(_e);
function nr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? nr = function(n) {
    return typeof n;
  } : nr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, nr(e);
}
function r0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ll(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function a0(e, t, n) {
  return t && Ll(e.prototype, t), n && Ll(e, n), e;
}
function o0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ao(e, t);
}
function Ao(e, t) {
  return Ao = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ao(e, t);
}
function i0(e) {
  var t = u0();
  return function() {
    var r = Yr(e), a;
    if (t) {
      var i = Yr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return l0(this, a);
  };
}
function l0(e, t) {
  return t && (nr(t) === "object" || typeof t == "function") ? t : Bo(e);
}
function Bo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function u0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Yr(e) {
  return Yr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Yr(e);
}
function Vl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var s0 = /* @__PURE__ */ function(e) {
  o0(n, e);
  var t = i0(n);
  function n() {
    var r;
    r0(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Vl(Bo(r), "priority", 40), Vl(Bo(r), "incompatibleTokens", "*"), r;
  }
  return a0(n, [{
    key: "parse",
    value: function(a) {
      return Uu(a);
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return [new Date(o * 1e3), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}(_e);
function rr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? rr = function(n) {
    return typeof n;
  } : rr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, rr(e);
}
function c0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ul(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function f0(e, t, n) {
  return t && Ul(e.prototype, t), n && Ul(e, n), e;
}
function d0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Io(e, t);
}
function Io(e, t) {
  return Io = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Io(e, t);
}
function p0(e) {
  var t = m0();
  return function() {
    var r = jr(e), a;
    if (t) {
      var i = jr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return y0(this, a);
  };
}
function y0(e, t) {
  return t && (rr(t) === "object" || typeof t == "function") ? t : Lo(e);
}
function Lo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function m0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function jr(e) {
  return jr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, jr(e);
}
function Fl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var h0 = /* @__PURE__ */ function(e) {
  d0(n, e);
  var t = p0(n);
  function n() {
    var r;
    c0(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Fl(Lo(r), "priority", 20), Fl(Lo(r), "incompatibleTokens", "*"), r;
  }
  return f0(n, [{
    key: "parse",
    value: function(a) {
      return Uu(a);
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return [new Date(o), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}(_e), v0 = {
  G: new vy(),
  y: new Sy(),
  Y: new Cy(),
  R: new Ly(),
  u: new Wy(),
  Q: new Ky(),
  q: new om(),
  M: new dm(),
  L: new gm(),
  w: new Tm(),
  I: new Am(),
  d: new Hm(),
  D: new Jm(),
  E: new ah(),
  e: new fh(),
  c: new bh(),
  i: new Ph(),
  a: new Nh(),
  b: new Uh(),
  B: new zh(),
  h: new ev(),
  H: new lv(),
  K: new yv(),
  k: new wv(),
  m: new Dv(),
  s: new Av(),
  S: new Yv(),
  X: new Qv(),
  x: new n0(),
  t: new s0(),
  T: new h0()
};
function ar(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ar = function(n) {
    return typeof n;
  } : ar = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ar(e);
}
function Yl(e, t) {
  var n;
  if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (n = b0(e)) || t && e && typeof e.length == "number") {
      n && (e = n);
      var r = 0, a = function() {
      };
      return { s: a, n: function() {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      }, e: function(u) {
        throw u;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0, o = !1, l;
  return { s: function() {
    n = e[Symbol.iterator]();
  }, n: function() {
    var u = n.next();
    return i = u.done, u;
  }, e: function(u) {
    o = !0, l = u;
  }, f: function() {
    try {
      !i && n.return != null && n.return();
    } finally {
      if (o)
        throw l;
    }
  } };
}
function b0(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return jl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return jl(e, t);
  }
}
function jl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var g0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, _0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, w0 = /^'([^]*?)'?$/, O0 = /''/g, $0 = /\S/, S0 = /[a-zA-Z]/;
function Vo(e, t, n, r) {
  var a, i, o, l, f, u, d, s, p, h, v, N, H, U, E, W, J, re;
  X(3, arguments);
  var m = String(e), x = String(t), Y = St(), Q = (a = (i = r == null ? void 0 : r.locale) !== null && i !== void 0 ? i : Y.locale) !== null && a !== void 0 ? a : Au;
  if (!Q.match)
    throw new RangeError("locale must contain match property");
  var ne = ie((o = (l = (f = (u = r == null ? void 0 : r.firstWeekContainsDate) !== null && u !== void 0 ? u : r == null || (d = r.locale) === null || d === void 0 || (s = d.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && f !== void 0 ? f : Y.firstWeekContainsDate) !== null && l !== void 0 ? l : (p = Y.locale) === null || p === void 0 || (h = p.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(ne >= 1 && ne <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var V = ie((v = (N = (H = (U = r == null ? void 0 : r.weekStartsOn) !== null && U !== void 0 ? U : r == null || (E = r.locale) === null || E === void 0 || (W = E.options) === null || W === void 0 ? void 0 : W.weekStartsOn) !== null && H !== void 0 ? H : Y.weekStartsOn) !== null && N !== void 0 ? N : (J = Y.locale) === null || J === void 0 || (re = J.options) === null || re === void 0 ? void 0 : re.weekStartsOn) !== null && v !== void 0 ? v : 0);
  if (!(V >= 0 && V <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (x === "")
    return m === "" ? ue(n) : new Date(NaN);
  var Z = {
    firstWeekContainsDate: ne,
    weekStartsOn: V,
    locale: Q
  }, k = [new uy()], _ = x.match(_0).map(function(ge) {
    var me = ge[0];
    if (me in Da) {
      var ee = Da[me];
      return ee(ge, Q.formatLong);
    }
    return ge;
  }).join("").match(g0), C = [], M = Yl(_), c;
  try {
    var O = function() {
      var me = c.value;
      !(r != null && r.useAdditionalWeekYearTokens) && Eu(me) && cr(me, x, e), !(r != null && r.useAdditionalDayOfYearTokens) && Nu(me) && cr(me, x, e);
      var ee = me[0], nt = v0[ee];
      if (nt) {
        var de = nt.incompatibleTokens;
        if (Array.isArray(de)) {
          var Oe = C.find(function(st) {
            return de.includes(st.token) || st.token === ee;
          });
          if (Oe)
            throw new RangeError("The format string mustn't contain `".concat(Oe.fullToken, "` and `").concat(me, "` at the same time"));
        } else if (nt.incompatibleTokens === "*" && C.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(me, "` and any other token at the same time"));
        C.push({
          token: ee,
          fullToken: me
        });
        var Ae = nt.run(m, me, Q.match, Z);
        if (!Ae)
          return {
            v: new Date(NaN)
          };
        k.push(Ae.setter), m = Ae.rest;
      } else {
        if (ee.match(S0))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + ee + "`");
        if (me === "''" ? me = "'" : ee === "'" && (me = k0(me)), m.indexOf(me) === 0)
          m = m.slice(me.length);
        else
          return {
            v: new Date(NaN)
          };
      }
    };
    for (M.s(); !(c = M.n()).done; ) {
      var T = O();
      if (ar(T) === "object")
        return T.v;
    }
  } catch (ge) {
    M.e(ge);
  } finally {
    M.f();
  }
  if (m.length > 0 && $0.test(m))
    return new Date(NaN);
  var j = k.map(function(ge) {
    return ge.priority;
  }).sort(function(ge, me) {
    return me - ge;
  }).filter(function(ge, me, ee) {
    return ee.indexOf(ge) === me;
  }).map(function(ge) {
    return k.filter(function(me) {
      return me.priority === ge;
    }).sort(function(me, ee) {
      return ee.subPriority - me.subPriority;
    });
  }).map(function(ge) {
    return ge[0];
  }), z = ue(n);
  if (isNaN(z.getTime()))
    return new Date(NaN);
  var $ = Du(z, sr(z)), w = {}, L = Yl(j), pe;
  try {
    for (L.s(); !(pe = L.n()).done; ) {
      var we = pe.value;
      if (!we.validate($, Z))
        return new Date(NaN);
      var Re = we.set($, w, Z);
      Array.isArray(Re) ? ($ = Re[0], Xp(w, Re[1])) : $ = Re;
    }
  } catch (ge) {
    L.e(ge);
  } finally {
    L.f();
  }
  return $;
}
function k0(e) {
  return e.match(w0)[1].replace(O0, "'");
}
function P0(e, t) {
  X(2, arguments);
  var n = ie(t);
  return $t(e, -n);
}
function T0(e, t) {
  var n;
  X(1, arguments);
  var r = ie((n = t == null ? void 0 : t.additionalDigits) !== null && n !== void 0 ? n : 2);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return new Date(NaN);
  var a = C0(e), i;
  if (a.date) {
    var o = M0(a.date, r);
    i = N0(o.restDateString, o.year);
  }
  if (!i || isNaN(i.getTime()))
    return new Date(NaN);
  var l = i.getTime(), f = 0, u;
  if (a.time && (f = E0(a.time), isNaN(f)))
    return new Date(NaN);
  if (a.timezone) {
    if (u = A0(a.timezone), isNaN(u))
      return new Date(NaN);
  } else {
    var d = new Date(l + f), s = new Date(0);
    return s.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()), s.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds()), s;
  }
  return new Date(l + f + u);
}
var hn = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, D0 = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, R0 = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, x0 = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function C0(e) {
  var t = {}, n = e.split(hn.dateTimeDelimiter), r;
  if (n.length > 2)
    return t;
  if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], hn.timeZoneDelimiter.test(t.date) && (t.date = e.split(hn.timeZoneDelimiter)[0], r = e.substr(t.date.length, e.length))), r) {
    var a = hn.timezone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timezone = a[1]) : t.time = r;
  }
  return t;
}
function M0(e, t) {
  var n = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"), r = e.match(n);
  if (!r)
    return {
      year: NaN,
      restDateString: ""
    };
  var a = r[1] ? parseInt(r[1]) : null, i = r[2] ? parseInt(r[2]) : null;
  return {
    year: i === null ? a : i * 100,
    restDateString: e.slice((r[1] || r[2]).length)
  };
}
function N0(e, t) {
  if (t === null)
    return new Date(NaN);
  var n = e.match(D0);
  if (!n)
    return new Date(NaN);
  var r = !!n[4], a = Kt(n[1]), i = Kt(n[2]) - 1, o = Kt(n[3]), l = Kt(n[4]), f = Kt(n[5]) - 1;
  if (r)
    return U0(t, l, f) ? B0(t, l, f) : new Date(NaN);
  var u = new Date(0);
  return !L0(t, i, o) || !V0(t, a) ? new Date(NaN) : (u.setUTCFullYear(t, i, Math.max(a, o)), u);
}
function Kt(e) {
  return e ? parseInt(e) : 1;
}
function E0(e) {
  var t = e.match(R0);
  if (!t)
    return NaN;
  var n = ca(t[1]), r = ca(t[2]), a = ca(t[3]);
  return F0(n, r, a) ? n * ti + r * ei + a * 1e3 : NaN;
}
function ca(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function A0(e) {
  if (e === "Z")
    return 0;
  var t = e.match(x0);
  if (!t)
    return 0;
  var n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), a = t[3] && parseInt(t[3]) || 0;
  return Y0(r, a) ? n * (r * ti + a * ei) : NaN;
}
function B0(e, t, n) {
  var r = new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, i = (t - 1) * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + i), r;
}
var I0 = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ju(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function L0(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (I0[t] || (ju(e) ? 29 : 28));
}
function V0(e, t) {
  return t >= 1 && t <= (ju(e) ? 366 : 365);
}
function U0(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function F0(e, t, n) {
  return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function Y0(e, t) {
  return t >= 0 && t <= 59;
}
function rn(e, t) {
  X(2, arguments);
  var n = ue(e), r = ie(t), a = n.getFullYear(), i = n.getDate(), o = new Date(0);
  o.setFullYear(a, r, 15), o.setHours(0, 0, 0, 0);
  var l = ty(o);
  return n.setMonth(r, Math.min(i, l)), n;
}
function or(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? or = function(n) {
    return typeof n;
  } : or = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, or(e);
}
function Qe(e, t) {
  if (X(2, arguments), or(t) !== "object" || t === null)
    throw new RangeError("values parameter must be an object");
  var n = ue(e);
  return isNaN(n.getTime()) ? new Date(NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = rn(n, t.month)), t.date != null && n.setDate(ie(t.date)), t.hours != null && n.setHours(ie(t.hours)), t.minutes != null && n.setMinutes(ie(t.minutes)), t.seconds != null && n.setSeconds(ie(t.seconds)), t.milliseconds != null && n.setMilliseconds(ie(t.milliseconds)), n);
}
function Hu(e, t) {
  X(2, arguments);
  var n = ue(e), r = ie(t);
  return n.setHours(r), n;
}
function si(e, t) {
  X(2, arguments);
  var n = ue(e), r = ie(t);
  return n.setMilliseconds(r), n;
}
function Wu(e, t) {
  X(2, arguments);
  var n = ue(e), r = ie(t);
  return n.setMinutes(r), n;
}
function qu(e, t) {
  X(2, arguments);
  var n = ue(e), r = ie(t);
  return n.setSeconds(r), n;
}
function At(e, t) {
  X(2, arguments);
  var n = ue(e), r = ie(t);
  return isNaN(n.getTime()) ? new Date(NaN) : (n.setFullYear(r), n);
}
function Ft(e, t) {
  X(2, arguments);
  var n = ie(t);
  return pt(e, -n);
}
function ir(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ir = function(n) {
    return typeof n;
  } : ir = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ir(e);
}
function j0(e, t) {
  if (X(2, arguments), !t || ir(t) !== "object")
    return new Date(NaN);
  var n = t.years ? ie(t.years) : 0, r = t.months ? ie(t.months) : 0, a = t.weeks ? ie(t.weeks) : 0, i = t.days ? ie(t.days) : 0, o = t.hours ? ie(t.hours) : 0, l = t.minutes ? ie(t.minutes) : 0, f = t.seconds ? ie(t.seconds) : 0, u = Ft(e, r + n * 12), d = P0(u, i + a * 7), s = l + o * 60, p = f + s * 60, h = p * 1e3, v = new Date(d.getTime() - h);
  return v;
}
function H0(e, t) {
  X(2, arguments);
  var n = ie(t);
  return Pu(e, -n);
}
const It = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, W0 = {}, q0 = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, z0 = /* @__PURE__ */ I("path", { d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" }, null, -1), G0 = /* @__PURE__ */ I("path", { d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), Q0 = /* @__PURE__ */ I("path", { d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), Z0 = /* @__PURE__ */ I("path", { d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" }, null, -1), J0 = [
  z0,
  G0,
  Q0,
  Z0
];
function K0(e, t) {
  return b(), S("svg", q0, J0);
}
const Gr = /* @__PURE__ */ It(W0, [["render", K0]]), X0 = {}, eb = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, tb = /* @__PURE__ */ I("path", { d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" }, null, -1), nb = /* @__PURE__ */ I("path", { d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" }, null, -1), rb = [
  tb,
  nb
];
function ab(e, t) {
  return b(), S("svg", eb, rb);
}
const ob = /* @__PURE__ */ It(X0, [["render", ab]]), ib = {}, lb = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, ub = /* @__PURE__ */ I("path", { d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" }, null, -1), sb = [
  ub
];
function cb(e, t) {
  return b(), S("svg", lb, sb);
}
const Hl = /* @__PURE__ */ It(ib, [["render", cb]]), fb = {}, db = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, pb = /* @__PURE__ */ I("path", { d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z" }, null, -1), yb = [
  pb
];
function mb(e, t) {
  return b(), S("svg", db, yb);
}
const Wl = /* @__PURE__ */ It(fb, [["render", mb]]), hb = {}, vb = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, bb = /* @__PURE__ */ I("path", { d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z" }, null, -1), gb = /* @__PURE__ */ I("path", { d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), _b = [
  bb,
  gb
];
function wb(e, t) {
  return b(), S("svg", vb, _b);
}
const zu = /* @__PURE__ */ It(hb, [["render", wb]]), Ob = {}, $b = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Sb = /* @__PURE__ */ I("path", { d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" }, null, -1), kb = [
  Sb
];
function Pb(e, t) {
  return b(), S("svg", $b, kb);
}
const Gu = /* @__PURE__ */ It(Ob, [["render", Pb]]), Tb = {}, Db = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Rb = /* @__PURE__ */ I("path", { d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" }, null, -1), xb = [
  Rb
];
function Cb(e, t) {
  return b(), S("svg", Db, xb);
}
const Qu = /* @__PURE__ */ It(Tb, [["render", Cb]]), ql = (e, t) => {
  const n = Vo(e, t.slice(0, e.length), new Date());
  return tn(n) && Tu(n) ? n : null;
}, Mb = (e, t) => {
  if (typeof t == "string")
    return ql(e, t);
  if (Array.isArray(t)) {
    let n = null;
    for (const r of t)
      if (n = ql(e, r), n)
        break;
    return n;
  }
  return typeof t == "function" ? t(e) : null;
}, B = (e) => e ? new Date(e) : new Date(), Nb = (e, t) => {
  if (t) {
    const r = (e.getMonth() + 1).toString().padStart(2, "0"), a = e.getDate().toString().padStart(2, "0"), i = e.getHours().toString().padStart(2, "0"), o = e.getMinutes().toString().padStart(2, "0");
    return `${e.getFullYear()}-${r}-${a}T${i}:${o}:00.000Z`;
  }
  const n = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(n).toISOString();
}, yt = (e) => {
  let t = B(JSON.parse(JSON.stringify(e)));
  return t = Hu(t, 0), t = Wu(t, 0), t = qu(t, 0), t = si(t, 0), t;
}, ot = (e, t, n, r) => {
  let a = e ? B(e) : B();
  return (t || t === 0) && (a = Hu(a, +t)), (n || n === 0) && (a = Wu(a, +n)), (r || r === 0) && (a = qu(a, +r)), si(a, 0);
}, We = (e, t) => !e || !t ? !1 : ai(yt(e), yt(t)), xe = (e, t) => !e || !t ? !1 : Bu(yt(e), yt(t)), Je = (e, t) => !e || !t ? !1 : ri(yt(e), yt(t)), Zu = (e, t, n) => e && e[0] && e[1] ? Je(n, e[0]) && We(n, e[1]) : e && e[0] && t ? Je(n, e[0]) && We(n, t) || We(n, e[0]) && Je(n, t) : !1, Xt = ln({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Ju = () => {
  const e = (n) => {
    Xt.menuFocused = n;
  }, t = (n) => {
    Xt.shiftKeyInMenu !== n && (Xt.shiftKeyInMenu = n);
  };
  return {
    control: G(() => ({ shiftKeyInMenu: Xt.shiftKeyInMenu, menuFocused: Xt.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
};
function ci(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Uo = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    if (r === null || r === !0 || r === !1)
      return NaN;
    var a = Number(r);
    return isNaN(a) ? a : a < 0 ? Math.ceil(a) : Math.floor(a);
  }
  e.exports = t.default;
})(Uo, Uo.exports);
const Eb = /* @__PURE__ */ ci(Uo.exports);
var Fo = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    var a = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()));
    return a.setUTCFullYear(r.getFullYear()), r.getTime() - a.getTime();
  }
  e.exports = t.default;
})(Fo, Fo.exports);
const zl = /* @__PURE__ */ ci(Fo.exports);
function Ab(e, t) {
  var n = Vb(t);
  return n.formatToParts ? Ib(n, e) : Lb(n, e);
}
var Bb = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Ib(e, t) {
  try {
    for (var n = e.formatToParts(t), r = [], a = 0; a < n.length; a++) {
      var i = Bb[n[a].type];
      i >= 0 && (r[i] = parseInt(n[a].value, 10));
    }
    return r;
  } catch (o) {
    if (o instanceof RangeError)
      return [NaN];
    throw o;
  }
}
function Lb(e, t) {
  var n = e.format(t).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);
  return [r[3], r[1], r[2], r[4], r[5], r[6]];
}
var fa = {};
function Vb(e) {
  if (!fa[e]) {
    var t = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date("2014-06-25T04:00:00.123Z")), n = t === "06/25/2014, 00:00:00" || t === "\u200E06\u200E/\u200E25\u200E/\u200E2014\u200E \u200E00\u200E:\u200E00\u200E:\u200E00";
    fa[e] = n ? new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return fa[e];
}
function fi(e, t, n, r, a, i, o) {
  var l = new Date(0);
  return l.setUTCFullYear(e, t, n), l.setUTCHours(r, a, i, o), l;
}
var Gl = 36e5, Ub = 6e4, da = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function di(e, t, n) {
  var r, a;
  if (e === "" || (r = da.timezoneZ.exec(e), r))
    return 0;
  var i;
  if (r = da.timezoneHH.exec(e), r)
    return i = parseInt(r[1], 10), Ql(i) ? -(i * Gl) : NaN;
  if (r = da.timezoneHHMM.exec(e), r) {
    i = parseInt(r[1], 10);
    var o = parseInt(r[2], 10);
    return Ql(i, o) ? (a = Math.abs(i) * Gl + o * Ub, i > 0 ? -a : a) : NaN;
  }
  if (jb(e)) {
    t = new Date(t || Date.now());
    var l = n ? t : Fb(t), f = Yo(l, e), u = n ? f : Yb(t, f, e);
    return -u;
  }
  return NaN;
}
function Fb(e) {
  return fi(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function Yo(e, t) {
  var n = Ab(e, t), r = fi(
    n[0],
    n[1] - 1,
    n[2],
    n[3] % 24,
    n[4],
    n[5],
    0
  ).getTime(), a = e.getTime(), i = a % 1e3;
  return a -= i >= 0 ? i : 1e3 + i, r - a;
}
function Yb(e, t, n) {
  var r = e.getTime(), a = r - t, i = Yo(new Date(a), n);
  if (t === i)
    return t;
  a -= i - t;
  var o = Yo(new Date(a), n);
  return i === o ? i : Math.max(i, o);
}
function Ql(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
var Zl = {};
function jb(e) {
  if (Zl[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), Zl[e] = !0, !0;
  } catch {
    return !1;
  }
}
var Ku = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, pa = 36e5, Jl = 6e4, Hb = 2, Ze = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    /^([+-]\d{3})$/,
    /^([+-]\d{4})$/
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    /^([+-]\d{5})/,
    /^([+-]\d{6})/
  ],
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  timeZone: Ku
};
function jo(e, t) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return new Date(NaN);
  var n = t || {}, r = n.additionalDigits == null ? Hb : Eb(n.additionalDigits);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return new Date(NaN);
  var a = Wb(e), i = qb(a.date, r), o = i.year, l = i.restDateString, f = zb(l, o);
  if (isNaN(f))
    return new Date(NaN);
  if (f) {
    var u = f.getTime(), d = 0, s;
    if (a.time && (d = Gb(a.time), isNaN(d)))
      return new Date(NaN);
    if (a.timeZone || n.timeZone) {
      if (s = di(a.timeZone || n.timeZone, new Date(u + d)), isNaN(s))
        return new Date(NaN);
    } else
      s = zl(new Date(u + d)), s = zl(new Date(u + d + s));
    return new Date(u + d + s);
  } else
    return new Date(NaN);
}
function Wb(e) {
  var t = {}, n = Ze.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = Ze.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    var a = Ze.timeZone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timeZone = a[1].trim()) : t.time = r;
  }
  return t;
}
function qb(e, t) {
  var n = Ze.YYY[t], r = Ze.YYYYY[t], a;
  if (a = Ze.YYYY.exec(e) || r.exec(e), a) {
    var i = a[1];
    return {
      year: parseInt(i, 10),
      restDateString: e.slice(i.length)
    };
  }
  if (a = Ze.YY.exec(e) || n.exec(e), a) {
    var o = a[1];
    return {
      year: parseInt(o, 10) * 100,
      restDateString: e.slice(o.length)
    };
  }
  return {
    year: null
  };
}
function zb(e, t) {
  if (t === null)
    return null;
  var n, r, a, i;
  if (e.length === 0)
    return r = new Date(0), r.setUTCFullYear(t), r;
  if (n = Ze.MM.exec(e), n)
    return r = new Date(0), a = parseInt(n[1], 10) - 1, Xl(t, a) ? (r.setUTCFullYear(t, a), r) : new Date(NaN);
  if (n = Ze.DDD.exec(e), n) {
    r = new Date(0);
    var o = parseInt(n[1], 10);
    return Jb(t, o) ? (r.setUTCFullYear(t, 0, o), r) : new Date(NaN);
  }
  if (n = Ze.MMDD.exec(e), n) {
    r = new Date(0), a = parseInt(n[1], 10) - 1;
    var l = parseInt(n[2], 10);
    return Xl(t, a, l) ? (r.setUTCFullYear(t, a, l), r) : new Date(NaN);
  }
  if (n = Ze.Www.exec(e), n)
    return i = parseInt(n[1], 10) - 1, eu(t, i) ? Kl(t, i) : new Date(NaN);
  if (n = Ze.WwwD.exec(e), n) {
    i = parseInt(n[1], 10) - 1;
    var f = parseInt(n[2], 10) - 1;
    return eu(t, i, f) ? Kl(t, i, f) : new Date(NaN);
  }
  return null;
}
function Gb(e) {
  var t, n, r;
  if (t = Ze.HH.exec(e), t)
    return n = parseFloat(t[1].replace(",", ".")), ya(n) ? n % 24 * pa : NaN;
  if (t = Ze.HHMM.exec(e), t)
    return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), ya(n, r) ? n % 24 * pa + r * Jl : NaN;
  if (t = Ze.HHMMSS.exec(e), t) {
    n = parseInt(t[1], 10), r = parseInt(t[2], 10);
    var a = parseFloat(t[3].replace(",", "."));
    return ya(n, r, a) ? n % 24 * pa + r * Jl + a * 1e3 : NaN;
  }
  return null;
}
function Kl(e, t, n) {
  t = t || 0, n = n || 0;
  var r = new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, i = t * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + i), r;
}
var Qb = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Zb = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Xu(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Xl(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    var r = Xu(e);
    if (r && n > Zb[t] || !r && n > Qb[t])
      return !1;
  }
  return !0;
}
function Jb(e, t) {
  if (t < 1)
    return !1;
  var n = Xu(e);
  return !(n && t > 366 || !n && t > 365);
}
function eu(e, t, n) {
  return !(t < 0 || t > 52 || n != null && (n < 0 || n > 6));
}
function ya(e, t, n) {
  return !(e != null && (e < 0 || e >= 25) || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
var Ho = { exports: {} }, Wo = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r, a) {
    if (r == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var i in a)
      Object.prototype.hasOwnProperty.call(a, i) && (r[i] = a[i]);
    return r;
  }
  e.exports = t.default;
})(Wo, Wo.exports);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var n = r(Wo.exports);
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function a(i) {
    return (0, n.default)({}, i);
  }
  e.exports = t.default;
})(Ho, Ho.exports);
const Kb = /* @__PURE__ */ ci(Ho.exports);
function Xb(e, t, n) {
  var r = jo(e, n), a = di(t, r, !0), i = new Date(r.getTime() - a), o = new Date(0);
  return o.setFullYear(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()), o.setHours(i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds(), i.getUTCMilliseconds()), o;
}
function eg(e, t, n) {
  if (typeof e == "string" && !e.match(Ku)) {
    var r = Kb(n);
    return r.timeZone = t, jo(e, r);
  }
  var a = jo(e, n), i = fi(
    a.getFullYear(),
    a.getMonth(),
    a.getDate(),
    a.getHours(),
    a.getMinutes(),
    a.getSeconds(),
    a.getMilliseconds()
  ).getTime(), o = di(t, new Date(i));
  return new Date(i + o);
}
const tg = (e, t = 3) => {
  const n = [];
  for (let r = 0; r < e.length; r += t)
    n.push([e[r], e[r + 1], e[r + 2]]);
  return n;
}, ng = (e, t) => {
  const n = [1, 2, 3, 4, 5, 6, 7].map((i) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(new Date(`2017-01-0${i}T00:00:00+00:00`)).slice(0, 2)), r = n.slice(0, t), a = n.slice(t + 1, n.length);
  return [n[t]].concat(...a).concat(...r);
}, rg = (e) => {
  const t = [];
  for (let n = +e[0]; n <= +e[1]; n++)
    t.push({ value: +n, text: `${n}` });
  return t;
}, ag = (e, t) => {
  const n = new Intl.DateTimeFormat(e, { month: t, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((r) => {
    const a = r < 10 ? `0${r}` : r;
    return new Date(`2017-${a}-01T00:00:00+00:00`);
  }).map((r, a) => ({
    text: n.format(r),
    value: a
  }));
}, og = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Ye = (e) => {
  var n;
  const t = g(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}, ig = (e) => Object.assign({ type: "dot" }, e), es = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Hr = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, He = (e) => e, tu = (e) => Object.assign(
  {
    menuAppear: "dp-menu-appear",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down"
  },
  e
), lg = (e) => Object.assign(
  {
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: (t) => `Increment ${t}`,
    decrementValue: (t) => `Decrement ${t}`,
    openTpOverlay: (t) => `Open ${t} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month",
    day: () => ""
  },
  e
), ug = (e) => e === null ? 0 : typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2, sg = (e, t, n) => e || (typeof n == "string" ? n : t), cg = (e) => typeof e == "boolean" ? e ? tu({}) : !1 : tu(e), fg = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), dg = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), at = (e) => {
  const t = () => {
    if (e.partialRange)
      return null;
    throw new Error(Hr.prop("partial-range"));
  }, n = G(() => ({
    ariaLabels: lg(e.ariaLabels),
    textInputOptions: Object.assign(fg(), e.textInputOptions),
    multiCalendars: ug(e.multiCalendars),
    previewFormat: sg(e.previewFormat, e.format, i()),
    filters: dg(e.filters),
    transitions: cg(e.transitions),
    startTime: p()
  })), r = (c) => {
    if (e.range)
      return c();
    throw new Error(Hr.prop("range"));
  }, a = () => {
    const c = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${c}` : `hh:mm${c} aa`;
  }, i = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? a() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${a()}` : "MM/dd/yyyy", o = (c, O) => {
    if (typeof e.format == "function")
      return e.format(c);
    const T = O || i(), j = e.formatLocale ? { locale: e.formatLocale } : void 0;
    return Array.isArray(c) ? `${nn(c[0], T, j)} ${e.modelAuto && !c[1] ? "" : n.value.textInputOptions.rangeSeparator || "-"} ${c[1] ? nn(c[1], T, j) : ""}` : nn(c, T, j);
  }, l = (c) => e.timezone ? Xb(c, e.timezone) : c, f = (c) => e.timezone ? eg(c, e.timezone) : c, u = G(() => (c) => {
    var O;
    return (O = e.hideNavigation) == null ? void 0 : O.includes(c);
  }), d = (c) => {
    const O = e.maxDate ? Je(l(c), l(B(e.maxDate))) : !1, T = e.minDate ? We(l(c), l(B(e.minDate))) : !1, j = U(c, e.disabledDates), z = n.value.filters.months.map((we) => +we).includes(Ce(c)), $ = e.disabledWeekDays.length ? e.disabledWeekDays.some((we) => +we === ey(c)) : !1, w = e.allowedDates.length ? !e.allowedDates.some((we) => xe(l(B(we)), l(c))) : !1, L = Me(c), pe = L < +e.yearRange[0] || L > +e.yearRange[1];
    return !(O || T || j || z || pe || $ || w);
  }, s = (c) => {
    const O = {
      hours: ht(B()),
      minutes: vt(B()),
      seconds: Ht(B())
    };
    return Object.assign(O, c);
  }, p = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [s(e.startTime[0]), s(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? s(e.startTime) : null, h = (c) => !d(c), v = (c) => Array.isArray(c) ? tn(c[0]) && (c[1] ? tn(c[1]) : !0) : c ? tn(c) : !1, N = (c) => c instanceof Date ? c : T0(c), H = (c) => {
    const O = Ta(l(c), { weekStartsOn: +e.weekStart }), T = Qd(l(c), { weekStartsOn: +e.weekStart });
    return [O, T];
  }, U = (c, O) => Array.isArray(O) ? O.some((T) => xe(l(B(T)), l(c))) : O(c), E = (c, O, T) => {
    let j = c ? B(c) : B();
    return (O || O === 0) && (j = rn(j, O)), T && (j = At(j, T)), j;
  }, W = (c) => Qe(B(), { hours: ht(c), minutes: vt(c), seconds: Ht(c) }), J = (c) => Qe(B(), {
    hours: +c.hours || 0,
    minutes: +c.minutes || 0,
    seconds: +c.seconds || 0
  }), re = (c, O, T, j) => {
    if (!c)
      return !0;
    if (j) {
      const z = T === "max" ? ai(c, O) : ri(c, O), $ = { seconds: 0, milliseconds: 0 };
      return z || Bu(Qe(c, $), Qe(O, $));
    }
    return T === "max" ? c.getTime() <= O.getTime() : c.getTime() >= O.getTime();
  }, m = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, x = (c) => Array.isArray(c) ? [c[0] ? W(c[0]) : null, c[1] ? W(c[1]) : null] : W(c), Y = (c) => {
    const O = e.maxTime ? J(e.maxTime) : B(e.maxDate);
    return Array.isArray(c) ? re(c[0], O, "max", !!e.maxDate) && re(c[1], O, "max", !!e.maxDate) : re(c, O, "max", !!e.maxDate);
  }, Q = (c, O) => {
    const T = e.minTime ? J(e.minTime) : B(e.minDate);
    return Array.isArray(c) ? re(c[0], T, "min", !!e.minDate) && re(c[1], T, "min", !!e.minDate) && O : re(c, T, "min", !!e.minDate) && O;
  }, ne = (c) => {
    let O = !0;
    if (!c || m())
      return !0;
    const T = !e.minDate && !e.maxDate ? x(c) : c;
    return (e.maxTime || e.maxDate) && (O = Y(He(T))), (e.minTime || e.minDate) && (O = Q(He(T), O)), O;
  }, V = (c, O) => {
    const T = B(JSON.parse(JSON.stringify(c))), j = [];
    for (let z = 0; z < 7; z++) {
      const $ = $t(T, z), w = Ce($) !== O;
      j.push({
        text: e.hideOffsetDates && w ? "" : $.getDate(),
        value: $,
        current: !w,
        classData: {}
      });
    }
    return j;
  }, Z = (c, O) => {
    const T = [], j = B(l(new Date(O, c))), z = B(l(new Date(O, c + 1, 0))), $ = Ta(j, { weekStartsOn: e.weekStart }), w = (L) => {
      const pe = V(L, c);
      if (T.push({ days: pe }), !T[T.length - 1].days.some(
        (we) => xe(yt(we.value), yt(z))
      )) {
        const we = $t(L, 7);
        w(we);
      }
    };
    if (w($), e.sixWeeks && T.length < 6) {
      const L = 6 - T.length;
      for (let pe = 1; pe <= L; pe++) {
        const we = T[T.length - 1], Re = we.days[we.days.length - 1], ge = V($t(Re.value, 1), Ce(j));
        T.push({ days: ge });
      }
    }
    return T;
  }, k = (c, O, T) => [Qe(B(c), { date: 1 }), Qe(B(), { month: O, year: T, date: 1 })], _ = (c, O) => We(...k(e.minDate, c, O)) || xe(...k(e.minDate, c, O)), C = (c, O) => Je(...k(e.maxDate, c, O)) || xe(...k(e.maxDate, c, O)), M = (c, O, T) => {
    let j = !1;
    return e.maxDate && T && C(c, O) && (j = !0), e.minDate && !T && _(c, O) && (j = !0), j;
  };
  return {
    checkPartialRangeValue: t,
    checkRangeEnabled: r,
    getZonedDate: l,
    getZonedToUtc: f,
    formatDate: o,
    getDefaultPattern: i,
    validateDate: d,
    getDefaultStartTime: p,
    isDisabled: h,
    isValidDate: v,
    sanitizeDate: N,
    getWeekFromDate: H,
    matchDate: U,
    setDateMonthOrYear: E,
    isValidTime: ne,
    getCalendarDays: Z,
    validateMonthYearInRange: (c, O, T, j) => {
      let z = !1;
      return j ? e.minDate && e.maxDate ? z = M(c, O, T) : (e.minDate && _(c, O) || e.maxDate && C(c, O)) && (z = !0) : z = !0, z;
    },
    validateMaxDate: C,
    validateMinDate: _,
    defaults: n,
    hideNavigationButtons: u
  };
}, Te = ln({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), ma = q(null), vn = q(!1), ha = q(!1), va = q(!1), ba = q(!1), Ge = q(0), Fe = q(0), kt = () => {
  const e = G(() => vn.value ? [...Te.selectionGrid, Te.actionRow].filter((s) => s.length) : ha.value ? [
    ...Te.timePicker[0],
    ...Te.timePicker[1],
    ba.value ? [] : [ma.value],
    Te.actionRow
  ].filter((s) => s.length) : va.value ? [...Te.monthPicker, Te.actionRow] : [Te.monthYear, ...Te.calendar, Te.time, Te.actionRow].filter((s) => s.length)), t = (s) => {
    Ge.value = s ? Ge.value + 1 : Ge.value - 1;
    let p = null;
    e.value[Fe.value] && (p = e.value[Fe.value][Ge.value]), p || (Ge.value = s ? Ge.value - 1 : Ge.value + 1);
  }, n = (s) => {
    Fe.value === 0 && !s || Fe.value === e.value.length && s || (Fe.value = s ? Fe.value + 1 : Fe.value - 1, e.value[Fe.value] ? e.value[Fe.value] && !e.value[Fe.value][Ge.value] && Ge.value !== 0 && (Ge.value = e.value[Fe.value].length - 1) : Fe.value = s ? Fe.value - 1 : Fe.value + 1);
  }, r = (s) => {
    let p = null;
    e.value[Fe.value] && (p = e.value[Fe.value][Ge.value]), p ? p.focus({ preventScroll: !vn.value }) : Ge.value = s ? Ge.value - 1 : Ge.value + 1;
  }, a = () => {
    t(!0), r(!0);
  }, i = () => {
    t(!1), r(!1);
  }, o = () => {
    n(!1), r(!0);
  }, l = () => {
    n(!0), r(!0);
  }, f = (s, p) => {
    Te[p] = s;
  }, u = (s, p) => {
    Te[p] = s;
  }, d = () => {
    Ge.value = 0, Fe.value = 0;
  };
  return {
    buildMatrix: f,
    buildMultiLevelMatrix: u,
    setTimePickerBackRef: (s) => {
      ma.value = s;
    },
    setSelectionGrid: (s) => {
      vn.value = s, d(), s || (Te.selectionGrid = []);
    },
    setTimePicker: (s, p = !1) => {
      ha.value = s, ba.value = p, d(), s || (Te.timePicker[0] = [], Te.timePicker[1] = []);
    },
    setTimePickerElements: (s, p = 0) => {
      Te.timePicker[p] = s;
    },
    arrowRight: a,
    arrowLeft: i,
    arrowUp: o,
    arrowDown: l,
    clearArrowNav: () => {
      Te.monthYear = [], Te.calendar = [], Te.time = [], Te.actionRow = [], Te.selectionGrid = [], Te.timePicker[0] = [], Te.timePicker[1] = [], vn.value = !1, ha.value = !1, ba.value = !1, va.value = !1, d(), ma.value = null;
    },
    setMonthPicker: (s) => {
      va.value = s, d();
    },
    refSets: Te
  };
}, nu = (e) => Array.isArray(e), Rt = (e) => Array.isArray(e), ru = (e) => Array.isArray(e) && e.length === 2, pg = (e, t, n, r) => {
  const {
    getDefaultStartTime: a,
    isDisabled: i,
    sanitizeDate: o,
    getWeekFromDate: l,
    setDateMonthOrYear: f,
    validateMonthYearInRange: u,
    defaults: d
  } = at(e), s = G({
    get: () => e.internalModelValue,
    set: (y) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", y);
    }
  }), p = q([]);
  un(s, () => W());
  const h = q([{ month: Ce(B()), year: Me(B()) }]), v = ln({
    hours: e.range ? [ht(B()), ht(B())] : ht(B()),
    minutes: e.range ? [vt(B()), vt(B())] : vt(B()),
    seconds: e.range ? [0, 0] : 0
  }), N = G(
    () => (y) => h.value[y] ? h.value[y].month : 0
  ), H = G(
    () => (y) => h.value[y] ? h.value[y].year : 0
  ), U = (y, A, te) => {
    h.value[y].month = A === null ? h.value[y].month : A, h.value[y].year = te === null ? h.value[y].year : te;
  }, E = (y, A) => {
    v[y] = A;
  };
  tt(() => {
    s.value || (e.startDate && (U(0, Ce(B(e.startDate)), Me(B(e.startDate))), d.value.multiCalendars && mt(0)), d.value.startTime && k()), W(!0);
  });
  const W = (y = !1) => {
    if (s.value)
      return Array.isArray(s.value) ? Y(y) : re(s.value);
    if (e.timePicker)
      return Q();
    if (e.monthPicker && !e.range)
      return ne();
    if (e.yearPicker && !e.range)
      return V();
    if (d.value.multiCalendars)
      return J(B(), y);
  }, J = (y, A = !1) => {
    if ((!d.value.multiCalendars || !e.multiStatic || A) && U(0, Ce(y), Me(y)), d.value.multiCalendars)
      for (let te = 1; te <= d.value.multiCalendars; te++) {
        const ce = Qe(B(), { month: N.value(te - 1), year: H.value(te - 1) }), Ie = ku(ce, { months: 1 });
        h.value[te] = { month: Ce(Ie), year: Me(Ie) };
      }
  }, re = (y) => {
    J(y), E("hours", ht(y)), E("minutes", vt(y)), E("seconds", Ht(y));
  }, m = (y, A) => {
    J(y[0], A);
    const te = (ce) => [
      ce(y[0]),
      y[1] ? ce(y[1]) : ce(B())
    ];
    E("hours", te(ht)), E("minutes", te(vt)), E("seconds", te(Ht));
  }, x = (y, A) => {
    if (e.range && !e.multiDates)
      return m(y, A);
    if (e.multiDates) {
      const te = y[y.length - 1];
      return re(te);
    }
  }, Y = (y) => {
    const A = s.value;
    x(A, y), d.value.multiCalendars && e.multiCalendarsSolo && C();
  }, Q = () => {
    if (k(), !e.range)
      s.value = ot(B(), v.hours, v.minutes, Z());
    else {
      const y = v.hours, A = v.minutes;
      s.value = [
        ot(B(), y[0], A[0], Z()),
        ot(B(), y[1], A[1], Z(!1))
      ];
    }
  }, ne = () => {
    s.value = f(B(), N.value(0), H.value(0));
  }, V = () => {
    s.value = B();
  }, Z = (y = !0) => e.enableSeconds ? Array.isArray(v.seconds) ? y ? v.seconds[0] : v.seconds[1] : v.seconds : 0, k = () => {
    const y = a();
    if (y) {
      const A = Array.isArray(y), te = A ? [+y[0].hours, +y[1].hours] : +y.hours, ce = A ? [+y[0].minutes, +y[1].minutes] : +y.minutes, Ie = A ? [+y[0].seconds, +y[1].seconds] : +y.seconds;
      E("hours", te), E("minutes", ce), e.enableSeconds && E("seconds", Ie);
    }
  }, _ = () => Array.isArray(s.value) && s.value.length ? s.value[s.value.length - 1] : null, C = () => {
    if (Array.isArray(s.value) && s.value.length === 2) {
      const y = B(
        B(s.value[1] ? s.value[1] : pt(s.value[0], 1))
      ), [A, te] = [Ce(s.value[0]), Me(s.value[0])], [ce, Ie] = [Ce(s.value[1]), Me(s.value[1])];
      (A !== ce || A === ce && te !== Ie) && e.multiCalendarsSolo && U(1, Ce(y), Me(y));
    }
  }, M = (y) => {
    const A = pt(y, 1);
    return { month: Ce(A), year: Me(A) };
  }, c = (y) => {
    const A = Ce(B(y)), te = Me(B(y));
    if (U(0, A, te), d.value.multiCalendars > 0)
      for (let ce = 1; ce < d.value.multiCalendars; ce++) {
        const Ie = M(
          Qe(B(y), { year: N.value(ce - 1), month: H.value(ce - 1) })
        );
        U(ce, Ie.month, Ie.year);
      }
  }, O = (y) => {
    if (s.value && Array.isArray(s.value))
      if (s.value.some((A) => xe(y, A))) {
        const A = s.value.filter((te) => !xe(te, y));
        s.value = A.length ? A : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > s.value.length || !e.multiDatesLimit) && s.value.push(y);
    else
      s.value = [y];
  }, T = (y, A) => {
    const te = Je(y, A) ? A : y, ce = Je(A, y) ? A : y;
    return xi({ start: te, end: ce });
  }, j = (y) => {
    if (Array.isArray(s.value) && s.value[0]) {
      const A = zd(y, s.value[0]), te = T(s.value[0], y), ce = te.length === 1 ? 0 : te.filter((ct) => i(ct)).length, Ie = Math.abs(A) - ce;
      if (e.minRange && e.maxRange)
        return Ie >= +e.minRange && Ie <= +e.maxRange;
      if (e.minRange)
        return Ie >= +e.minRange;
      if (e.maxRange)
        return Ie <= +e.maxRange;
    }
    return !0;
  }, z = (y) => Array.isArray(s.value) && s.value.length === 2 ? e.fixedStart && (Je(y, s.value[0]) || xe(y, s.value[0])) ? [s.value[0], y] : e.fixedEnd && (We(y, s.value[1]) || xe(y, s.value[1])) ? [y, s.value[1]] : s.value : [], $ = () => {
    e.autoApply && t("auto-apply");
  }, w = () => {
    e.autoApply && t("select-date");
  }, L = (y) => !xi({ start: y[0], end: y[1] }).some((A) => i(A)), pe = (y) => (s.value = l(B(y.value)), $()), we = (y) => {
    const A = ot(B(y.value), v.hours, v.minutes, Z());
    e.multiDates ? O(A) : s.value = A, n(), $();
  }, Re = () => {
    p.value = s.value ? s.value.slice() : [], p.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (p.value = []);
  }, ge = (y, A) => {
    const te = [B(y.value), $t(B(y.value), +e.autoRange)];
    L(te) && (A && c(y.value), p.value = te);
  }, me = (y) => {
    p.value = z(B(y.value));
  }, ee = (y) => e.noDisabledRange ? T(p.value[0], y).some((A) => i(A)) : !1, nt = (y, A) => {
    if (Re(), e.autoRange)
      return ge(y, A);
    if (e.fixedStart || e.fixedEnd)
      return me(y);
    p.value[0] ? j(B(y.value)) && !ee(y.value) && (We(B(y.value), B(p.value[0])) ? p.value.unshift(B(y.value)) : p.value[1] = B(y.value)) : p.value[0] = B(y.value);
  }, de = (y) => {
    p.value[y] = ot(
      p.value[y],
      v.hours[y],
      v.minutes[y],
      Z(y !== 1)
    );
  }, Oe = () => {
    p.value.length && (p.value[0] && !p.value[1] ? de(0) : (de(0), de(1), n()), s.value = p.value.slice(), p.value[0] && p.value[1] && e.autoApply && t("auto-apply"), p.value[0] && !p.value[1] && e.modelAuto && e.autoApply && t("auto-apply"));
  }, Ae = (y, A = !1) => {
    if (!(i(y.value) || !y.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return pe(y);
      if (!e.range)
        return we(y);
      Rt(v.hours) && Rt(v.minutes) && !e.multiDates && (nt(y, A), Oe());
    }
  }, st = (y) => {
    const A = y.find((te) => te.current);
    return A ? ry(A.value) : "";
  }, mt = (y) => {
    for (let A = y - 1; A >= 0; A--) {
      const te = Ft(Qe(B(), { month: N.value(A + 1), year: H.value(A + 1) }), 1);
      U(A, Ce(te), Me(te));
    }
    for (let A = y + 1; A <= d.value.multiCalendars - 1; A++) {
      const te = pt(Qe(B(), { month: N.value(A - 1), year: H.value(A - 1) }), 1);
      U(A, Ce(te), Me(te));
    }
  }, Tt = (y) => f(B(), N.value(y), H.value(y)), zt = (y) => ot(y, v.hours, v.minutes, Z()), Zr = (y, A) => {
    const te = e.monthPicker ? N.value(y) !== A.month || !A.fromNav : H.value(y) !== A.year;
    if (U(y, A.month, A.year), d.value.multiCalendars && !e.multiCalendarsSolo && mt(y), e.monthPicker || e.yearPicker)
      if (e.range) {
        if (te) {
          let ce = s.value ? s.value.slice() : [];
          ce.length === 2 && ce[1] !== null && (ce = []), ce.length ? We(Tt(y), ce[0]) ? ce.unshift(Tt(y)) : ce[1] = Tt(y) : ce = [Tt(y)], s.value = ce;
        }
      } else
        s.value = Tt(y);
    t("update-month-year", { instance: y, month: A.month, year: A.year }), r(e.multiCalendarsSolo ? y : void 0);
  }, Jr = async (y = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await sn();
      const A = e.monthPicker ? y : !1;
      e.range ? t("auto-apply", A || !s.value || s.value.length === 1) : t("auto-apply", A);
    }
    n();
  }, dn = (y, A) => {
    const te = Qe(B(), { month: N.value(A), year: H.value(A) }), ce = y < 0 ? pt(te, 1) : Ft(te, 1);
    u(Ce(ce), Me(ce), y < 0, e.preventMinMaxNavigation) && (U(A, Ce(ce), Me(ce)), d.value.multiCalendars && !e.multiCalendarsSolo && mt(A), r());
  }, Gt = (y) => {
    nu(y) && nu(s.value) && Rt(v.hours) && Rt(v.minutes) ? (y[0] && s.value[0] && (s.value[0] = ot(y[0], v.hours[0], v.minutes[0], Z())), y[1] && s.value[1] && (s.value[1] = ot(y[1], v.hours[1], v.minutes[1], Z(!1)))) : e.multiDates && Array.isArray(s.value) ? s.value[s.value.length - 1] = zt(y) : !e.range && !ru(y) && (s.value = zt(y)), t("time-update");
  }, Kr = (y, A = !0, te = !1) => {
    const ce = A ? y : v.hours, Ie = !A && !te ? y : v.minutes, ct = te ? y : v.seconds;
    if (e.range && ru(s.value) && Rt(ce) && Rt(Ie) && Rt(ct) && !e.disableTimeRangeValidation) {
      const Dt = (K) => ot(s.value[K], ce[K], Ie[K], ct[K]), D = (K) => si(s.value[K], 0);
      if (xe(s.value[0], s.value[1]) && (ri(Dt(0), D(1)) || ai(Dt(1), D(0))))
        return;
    }
    if (E("hours", ce), E("minutes", Ie), E("seconds", ct), s.value)
      if (e.multiDates) {
        const Dt = _();
        Dt && Gt(Dt);
      } else
        Gt(s.value);
    else
      e.timePicker && Gt(e.range ? [B(), B()] : B());
    n();
  }, Xr = (y, A) => {
    e.monthChangeOnScroll && dn(e.monthChangeOnScroll !== "inverse" ? -y.deltaY : y.deltaY, A);
  }, ea = (y, A, te = !1) => {
    e.monthChangeOnArrows && e.vertical === te && pn(y, A);
  }, pn = (y, A) => {
    dn(y === "right" ? -1 : 1, A);
  };
  return {
    time: v,
    month: N,
    year: H,
    modelValue: s,
    monthYearSelect: Jr,
    isDisabled: i,
    updateTime: Kr,
    getWeekNum: st,
    selectDate: Ae,
    updateMonthYear: Zr,
    handleScroll: Xr,
    getMarker: (y) => e.markers.find((A) => xe(o(y.value), o(A.date))),
    handleArrow: ea,
    handleSwipe: pn,
    selectCurrentDate: () => {
      e.range ? s.value && Array.isArray(s.value) && s.value[0] ? s.value = We(B(), s.value[0]) ? [B(), s.value[0]] : [s.value[0], B()] : s.value = [B()] : s.value = B(), w();
    },
    presetDateRange: (y, A) => {
      A || y.length && y.length <= 2 && e.range && (s.value = y.map((te) => B(te)), w());
    }
  };
}, yg = (e, t, n) => {
  const r = q(), {
    getZonedToUtc: a,
    getZonedDate: i,
    formatDate: o,
    getDefaultPattern: l,
    checkRangeEnabled: f,
    checkPartialRangeValue: u,
    isValidDate: d,
    setDateMonthOrYear: s,
    defaults: p
  } = at(t), h = q("");
  un(r, () => {
    e("internal-model-change", r.value);
  });
  const v = ($) => {
    const w = $ || B();
    return {
      hours: ht(w),
      minutes: vt(w),
      seconds: t.enableSeconds ? Ht(w) : 0
    };
  }, N = ($) => ({ month: Ce($), year: Me($) }), H = ($) => Array.isArray($) ? f(() => [
    At(B(), $[0]),
    $[1] ? At(B(), $[1]) : u()
  ]) : At(B(), +$), U = ($) => Array.isArray($) ? [
    ot(null, +$[0].hours, +$[0].minutes, $[0].seconds),
    ot(null, +$[1].hours, +$[1].minutes, $[1].seconds)
  ] : ot(null, $.hours, $.minutes, $ == null ? void 0 : $.seconds), E = ($) => Array.isArray($) ? f(() => [
    s(null, +$[0].month, +$[0].year),
    $[1] ? s(null, +$[1].month, +$[1].year) : u()
  ]) : s(null, +$.month, +$.year), W = ($) => {
    if (Array.isArray($))
      return $.map((w) => c(w));
    throw new Error(Hr.dateArr("multi-dates"));
  }, J = ($) => {
    if (Array.isArray($))
      return [B($[0]), B($[1])];
    throw new Error(Hr.dateArr("week-picker"));
  }, re = ($) => t.modelAuto ? Array.isArray($) ? [c($[0]), c($[1])] : t.autoApply ? [c($)] : [c($), null] : Array.isArray($) ? f(() => [
    c($[0]),
    $[1] ? c($[1]) : u()
  ]) : c($), m = () => {
    Array.isArray(r.value) && t.range && r.value.length === 1 && r.value.push(u());
  }, x = () => {
    const $ = r.value;
    return [
      O($[0]),
      $[1] ? O($[1]) : u()
    ];
  }, Y = () => r.value[1] ? x() : O(He(r.value[0])), Q = () => r.value.map(($) => O($)), ne = () => (m(), t.modelAuto ? Y() : t.multiDates ? Q() : Array.isArray(r.value) ? f(() => x()) : O(He(r.value))), V = ($) => $ ? t.timePicker ? U(He($)) : t.monthPicker ? E(He($)) : t.yearPicker ? H(He($)) : t.multiDates ? W(He($)) : t.weekPicker ? J(He($)) : re(He($)) : null, Z = ($) => {
    const w = V($);
    d(He(w)) ? (r.value = He(w), M()) : (r.value = null, h.value = "");
  }, k = () => {
    var $;
    const w = (L) => {
      var pe;
      return nn(L, (pe = p.value.textInputOptions) == null ? void 0 : pe.format);
    };
    return `${w(r.value[0])} ${($ = p.value.textInputOptions) == null ? void 0 : $.rangeSeparator} ${r.value[1] ? w(r.value[1]) : ""}`;
  }, _ = () => {
    var $;
    return n.value && r.value ? Array.isArray(r.value) ? k() : nn(r.value, ($ = p.value.textInputOptions) == null ? void 0 : $.format) : o(r.value);
  }, C = () => {
    var $;
    return r.value ? t.multiDates ? r.value.map((w) => o(w)).join("; ") : t.textInput && typeof (($ = p.value.textInputOptions) == null ? void 0 : $.format) == "string" ? _() : o(r.value) : "";
  }, M = () => {
    !t.format || typeof t.format == "string" ? h.value = C() : h.value = t.format(r.value);
  }, c = ($) => {
    if (t.utc) {
      const w = new Date($);
      return t.utc === "preserve" ? new Date(w.getTime() + w.getTimezoneOffset() * 6e4) : w;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? i(new Date($)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? Vo($, l(), new Date()) : i(Vo($, t.modelType, new Date())) : i(new Date($));
  }, O = ($) => t.utc ? Nb($, t.utc === "preserve") : t.modelType ? t.modelType === "timestamp" ? +a($) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? o(a($)) : o(a($), t.modelType) : a($), T = ($) => {
    e("update:model-value", $);
  }, j = ($) => Array.isArray(r.value) ? [
    $(r.value[0]),
    r.value[1] ? $(r.value[1]) : u()
  ] : $(He(r.value)), z = ($) => T(He(j($)));
  return {
    inputValue: h,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? t.range ? t.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: Z,
    formatInputValue: M,
    emitModelValue: () => (M(), t.monthPicker ? z(N) : t.timePicker ? z(v) : t.yearPicker ? z(Me) : t.weekPicker ? T(r.value) : T(ne()))
  };
}, mg = (e, t) => {
  const { validateMonthYearInRange: n, validateMaxDate: r, validateMinDate: a, defaults: i } = at(e), o = (s, p) => {
    let h = s;
    return i.value.filters.months.includes(Ce(h)) ? (h = p ? pt(s, 1) : Ft(s, 1), o(h, p)) : h;
  }, l = (s, p) => {
    let h = s;
    return i.value.filters.years.includes(Me(h)) ? (h = p ? Pu(s, 1) : H0(s, 1), l(h, p)) : h;
  }, f = (s) => {
    const p = Qe(new Date(), { month: e.month, year: e.year });
    let h = s ? pt(p, 1) : Ft(p, 1), v = Ce(h), N = Me(h);
    i.value.filters.months.includes(v) && (h = o(h, s), v = Ce(h), N = Me(h)), i.value.filters.years.includes(N) && (h = l(h, s), N = Me(h)), n(v, N, s, e.preventMinMaxNavigation) && u(v, N);
  }, u = (s, p) => {
    t("update-month-year", { month: s, year: p });
  }, d = G(() => (s) => {
    if (!e.preventMinMaxNavigation || s && !e.maxDate || !s && !e.minDate)
      return !1;
    const p = Qe(new Date(), { month: e.month, year: e.year }), h = s ? pt(p, 1) : Ft(p, 1), v = [Ce(h), Me(h)];
    return s ? !r(...v) : !a(...v);
  });
  return { handleMonthYearChange: f, isDisabled: d, updateMonthYear: u };
};
var lr = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(lr || {});
const hg = (e, t, n, r) => {
  const a = q({
    top: "0",
    left: "0",
    transform: "none"
  }), i = q(!1), o = wa(r, "teleportCenter");
  un(o, () => {
    H();
  });
  const l = (m) => {
    const x = m.getBoundingClientRect();
    return {
      left: x.left + window.scrollX,
      top: x.top + window.scrollY
    };
  }, f = (m) => {
    const x = m.getBoundingClientRect();
    let Y = 0, Q = 0;
    for (; m && !isNaN(m.offsetLeft) && !isNaN(m.offsetTop); )
      Y += m.offsetLeft - m.scrollLeft, Q = x.top + m.scrollTop, m = m.offsetParent;
    return { top: Q, left: Y };
  }, u = (m, x) => {
    a.value.left = `${m + x}px`, a.value.transform = "translateX(-100%)";
  }, d = (m) => {
    a.value.left = `${m}px`, a.value.transform = "translateX(0)";
  }, s = (m, x, Y = !1) => {
    r.position === lr.left && d(m), r.position === lr.right && u(m, x), r.position === lr.center && (a.value.left = `${m + x / 2}px`, a.value.transform = Y ? "translate(-50%, -50%)" : "translateX(-50%)");
  }, p = (m) => {
    const { width: x, height: Y } = m.getBoundingClientRect(), { top: Q, left: ne } = r.altPosition ? f(m) : l(m);
    return { top: Q, left: ne, width: x, height: Y };
  }, h = () => {
    const m = Ye(t);
    if (m) {
      const { top: x, left: Y, width: Q, height: ne } = p(m);
      a.value.top = `${x + ne / 2}px`, a.value.transform = "translateY(-50%)", s(Y, Q, !0);
    }
  }, v = () => {
    a.value.left = "50%", a.value.top = "50%", a.value.transform = "translate(-50%, -50%)", a.value.position = "fixed";
  }, N = () => {
    const m = Ye(t);
    a.value = r.altPosition(m);
  }, H = (m = !0) => {
    if (!r.inline)
      return o.value ? v() : r.altPosition && typeof r.altPosition != "boolean" ? N() : (m && n("recalculate-position"), re());
  }, U = (m, x) => {
    const { top: Y, left: Q, height: ne, width: V } = p(m);
    a.value.top = `${ne + Y + +r.offset}px`, s(Q, V), W(m, x), i.value = !1;
  }, E = (m, x) => {
    const { top: Y, left: Q, width: ne } = p(m), { height: V } = x.getBoundingClientRect();
    a.value.top = `${Y - V - +r.offset}px`, s(Q, ne), W(m, x), i.value = !0;
  }, W = (m, x) => {
    if (r.autoPosition) {
      const { left: Y, width: Q } = p(m), { left: ne, right: V } = x.getBoundingClientRect();
      if (ne < 0)
        return d(Y);
      if (V > document.documentElement.clientWidth)
        return u(Y, Q);
    }
  }, J = (m, x) => {
    const { height: Y } = x.getBoundingClientRect(), { top: Q, height: ne } = m.getBoundingClientRect(), V = window.innerHeight - Q - ne, Z = Q;
    return Y <= V ? U(m, x) : Y > V && Y <= Z ? E(m, x) : V >= Z ? U(m, x) : E(m, x);
  }, re = () => {
    const m = Ye(t), x = Ye(e);
    if (m && x)
      return r.autoPosition ? J(m, x) : U(m, x);
  };
  return { openOnTop: i, menuPosition: a, setMenuPosition: H, setInitialPosition: h };
}, Ut = [
  { name: "clock-icon", use: ["time", "calendar"] },
  { name: "arrow-left", use: ["month-year", "calendar"] },
  { name: "arrow-right", use: ["month-year", "calendar"] },
  { name: "arrow-up", use: ["time", "calendar"] },
  { name: "arrow-down", use: ["time", "calendar"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar"] },
  { name: "day", use: ["calendar"] },
  { name: "month-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay", use: ["month-year"] },
  { name: "month-overlay", use: ["month-year"] },
  { name: "month-overlay-header", use: ["month-year"] },
  { name: "year-overlay-header", use: ["month-year"] },
  { name: "hours-overlay-value", use: ["calendar", "time"] },
  { name: "minutes-overlay-value", use: ["calendar", "time"] },
  { name: "seconds-overlay-value", use: ["calendar", "time"] },
  { name: "hours", use: ["calendar", "time"] },
  { name: "minutes", use: ["calendar", "time"] },
  { name: "month", use: ["calendar", "month-year"] },
  { name: "year", use: ["calendar", "month-year"] },
  { name: "action-select", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar"] },
  { name: "marker-tooltip", use: ["calendar"] },
  { name: "now-button", use: [] },
  { name: "time-picker-overlay", use: ["calendar", "time"] },
  { name: "am-pm-button", use: ["calendar", "time"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year"] },
  { name: "time-picker", use: ["menu"] },
  { name: "action-row", use: ["menu"] }
], vg = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], bg = {
  all: () => Ut,
  monthYear: () => Ut.filter((e) => e.use.includes("month-year")),
  input: () => vg,
  timePicker: () => Ut.filter((e) => e.use.includes("time")),
  action: () => Ut.filter((e) => e.use.includes("action")),
  calendar: () => Ut.filter((e) => e.use.includes("calendar")),
  menu: () => Ut.filter((e) => e.use.includes("menu"))
}, Nt = (e, t, n) => {
  const r = [];
  return bg[t]().forEach((a) => {
    e[a.name] && r.push(a.name);
  }), n && n.length && n.forEach((a) => {
    a.slot && r.push(a.slot);
  }), r;
}, Qr = (e) => ({ transitionName: G(() => (t) => e && typeof e != "boolean" ? t ? e.open : e.close : ""), showTransition: !!e }), Pt = {
  multiCalendars: { type: [Boolean, Number, String], default: null },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  closeOnScroll: { type: Boolean, default: !1 },
  autoPosition: { type: Boolean, default: !0 },
  closeOnAutoApply: { type: Boolean, default: !0 },
  teleport: { type: [String, Object], default: "body" },
  altPosition: { type: [Boolean, Function], default: !1 },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  multiCalendarsSolo: { type: Boolean, default: !1 },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  monthYearComponent: { type: Object, default: null },
  timePickerComponent: { type: Object, default: null },
  actionRowComponent: { type: Object, default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: () => [] },
  showNowButton: { type: Boolean, default: !1 },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  modeHeight: { type: [Number, String], default: 255 },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetRanges: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  keepActionRow: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  multiStatic: { type: Boolean, default: !0 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Array, Function],
    default: null
  },
  highlightWeekDays: {
    type: Array,
    default: null
  },
  highlightDisabledDays: { type: Boolean, default: !1 },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: { type: Boolean, default: !1 },
  calendarClassName: { type: String, default: null },
  noSwipe: { type: Boolean, default: !1 },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  inlineWithInput: { type: Boolean, default: !1 },
  textInputOptions: { type: Object, default: () => null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: Boolean, default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: Boolean, default: !1 },
  textInput: { type: Boolean, default: !1 },
  onClickOutside: { type: Function, default: null },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: Boolean, default: !1 }
}, gg = ["aria-label", "aria-disabled", "aria-readonly"], _g = {
  key: 1,
  class: "dp__input_wrap"
}, wg = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"], Og = {
  key: 2,
  class: "dp__input_icon"
}, $g = {
  key: 4,
  class: "dp__clear_icon"
}, Sg = /* @__PURE__ */ Pe({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...Pt
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, { getDefaultPattern: a, isValidDate: i, defaults: o } = at(r), l = q(), f = q(null), u = q(!1), d = G(
      () => ({
        dp__pointer: !r.disabled && !r.readonly && !r.textInput,
        dp__disabled: r.disabled,
        dp__input_readonly: !r.textInput,
        dp__input: !0,
        dp__input_icon_pad: !r.hideInputIcon,
        dp__input_valid: r.state,
        dp__input_invalid: r.state === !1,
        dp__input_focus: u.value || r.isMenuOpen,
        dp__input_reg: !r.textInput,
        [r.inputClassName]: !!r.inputClassName
      })
    ), s = () => {
      n("set-input-date", null), r.autoApply && (n("set-empty-date"), l.value = null);
    }, p = (m) => {
      var x;
      return Mb(m, ((x = o.value.textInputOptions) == null ? void 0 : x.format) || a());
    }, h = (m) => {
      const { rangeSeparator: x } = o.value.textInputOptions;
      if (r.range) {
        const [Y, Q] = m.split(`${x}`);
        if (Y && Q) {
          const ne = p(Y.trim()), V = p(Q.trim());
          l.value = ne && V ? [ne, V] : null;
        }
      } else
        l.value = p(m);
    }, v = (m) => {
      var x;
      const { value: Y } = m.target;
      Y !== "" ? (((x = o.value.textInputOptions) == null ? void 0 : x.openMenu) && !r.isMenuOpen && n("open"), h(Y), n("set-input-date", l.value)) : s(), n("update:input-value", Y);
    }, N = () => {
      var m, x;
      ((m = o.value.textInputOptions) == null ? void 0 : m.enterSubmit) && i(l.value) && r.inputValue !== "" ? (n("set-input-date", l.value, !0), l.value = null) : ((x = o.value.textInputOptions) == null ? void 0 : x.enterSubmit) && r.inputValue === "" && (l.value = null, n("clear"));
    }, H = () => {
      var m, x;
      ((m = o.value.textInputOptions) == null ? void 0 : m.tabSubmit) && i(l.value) && r.inputValue !== "" ? (n("set-input-date", l.value, !0), l.value = null) : ((x = o.value.textInputOptions) == null ? void 0 : x.tabSubmit) && r.inputValue === "" && (l.value = null, n("clear"));
    }, U = () => {
      u.value = !0, n("focus");
    }, E = (m) => {
      var x;
      m.preventDefault(), m.stopImmediatePropagation(), m.stopPropagation(), r.textInput && ((x = o.value.textInputOptions) == null ? void 0 : x.openMenu) && !r.inlineWithInput ? r.isMenuOpen ? o.value.textInputOptions.enterSubmit && n("select-date") : n("open") : r.textInput || n("toggle");
    }, W = () => {
      u.value = !1, r.isMenuOpen || n("blur"), r.autoApply && r.textInput && l.value && (n("set-input-date", l.value), n("select-date"), l.value = null);
    }, J = () => {
      n("clear");
    }, re = (m) => {
      r.textInput || m.preventDefault();
    };
    return t({
      focusInput: () => {
        f.value && f.value.focus({ preventScroll: !0 });
      }
    }), (m, x) => {
      var Y;
      return b(), S("div", {
        onClick: E,
        "aria-label": (Y = g(o).ariaLabels) == null ? void 0 : Y.input,
        role: "textbox",
        "aria-multiline": "false",
        "aria-disabled": m.disabled,
        "aria-readonly": m.readonly
      }, [
        m.$slots.trigger && !m.$slots["dp-input"] && !m.inline ? F(m.$slots, "trigger", { key: 0 }) : P("", !0),
        !m.$slots.trigger && (!m.inline || m.inlineWithInput) ? (b(), S("div", _g, [
          m.$slots["dp-input"] && !m.$slots.trigger && !m.inline ? F(m.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            onInput: v,
            onEnter: N,
            onTab: H,
            onClear: J
          }) : P("", !0),
          m.$slots["dp-input"] ? P("", !0) : (b(), S("input", {
            key: 1,
            ref_key: "inputRef",
            ref: f,
            id: m.uid ? `dp-input-${m.uid}` : void 0,
            name: m.name,
            class: Se(g(d)),
            inputmode: m.textInput ? "text" : "none",
            placeholder: m.placeholder,
            disabled: m.disabled,
            readonly: m.readonly,
            required: m.required,
            value: e.inputValue,
            autocomplete: m.autocomplete,
            onInput: v,
            onKeydown: [
              le(E, ["enter"]),
              le(H, ["tab"])
            ],
            onBlur: W,
            onFocus: U,
            onKeypress: re
          }, null, 42, wg)),
          m.$slots["input-icon"] && !m.hideInputIcon ? (b(), S("span", Og, [
            F(m.$slots, "input-icon")
          ])) : P("", !0),
          !m.$slots["input-icon"] && !m.hideInputIcon && !m.$slots["dp-input"] ? (b(), fe(g(Gr), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : P("", !0),
          m.$slots["clear-icon"] && e.inputValue && m.clearable && !m.disabled && !m.readonly ? (b(), S("span", $g, [
            F(m.$slots, "clear-icon", { clear: J })
          ])) : P("", !0),
          m.clearable && !m.$slots["clear-icon"] && e.inputValue && !m.disabled && !m.readonly ? (b(), fe(g(ob), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: ke(J, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : P("", !0)
        ])) : P("", !0)
      ], 8, gg);
    };
  }
}), kg = { class: "dp__selection_preview" }, Pg = { class: "dp__action_buttons" }, Tg = ["onKeydown"], Dg = /* @__PURE__ */ Pe({
  __name: "ActionRow",
  props: {
    calendarWidth: { type: Number, default: 0 },
    menuMount: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Pt
  },
  emits: ["close-picker", "select-date", "invalid-select"],
  setup(e, { emit: t }) {
    const n = e, { formatDate: r, isValidTime: a, defaults: i } = at(n), { buildMatrix: o } = kt(), l = q(null), f = q(null);
    tt(() => {
      n.arrowNavigation && o([Ye(l), Ye(f)], "actionRow");
    });
    const u = G(() => n.range && !n.partialRange && n.internalModelValue ? n.internalModelValue.length === 2 : !0), d = G(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: !s.value || !p.value || !u.value
    })), s = G(() => !n.enableTimePicker || n.ignoreTimeValidation ? !0 : a(n.internalModelValue)), p = G(() => n.monthPicker ? H(n.internalModelValue) : !0), h = () => {
      const E = i.value.previewFormat;
      return n.timePicker || n.monthPicker, E(He(n.internalModelValue));
    }, v = () => {
      const E = n.internalModelValue;
      return i.value.multiCalendars > 0 ? `${r(E[0])} - ${r(E[1])}` : [r(E[0]), r(E[1])];
    }, N = G(() => !n.internalModelValue || !n.menuMount ? "" : typeof i.value.previewFormat == "string" ? Array.isArray(n.internalModelValue) ? n.internalModelValue.length === 2 && n.internalModelValue[1] ? v() : n.multiDates ? n.internalModelValue.map((E) => `${r(E)}`) : n.modelAuto ? `${r(n.internalModelValue[0])}` : `${r(n.internalModelValue[0])} -` : r(n.internalModelValue) : h()), H = (E) => {
      if (!n.monthPicker)
        return !0;
      let W = !0;
      return n.minDate && n.maxDate ? Je(B(E), B(n.minDate)) && We(B(E), B(n.maxDate)) : (n.minDate && (W = Je(B(E), B(n.minDate))), n.maxDate && (W = We(B(E), B(n.maxDate))), W);
    }, U = () => {
      s.value && p.value && u.value ? t("select-date") : t("invalid-select");
    };
    return (E, W) => (b(), S("div", {
      class: "dp__action_row",
      style: Mt(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      I("div", kg, [
        E.$slots["action-preview"] ? F(E.$slots, "action-preview", {
          key: 0,
          value: e.internalModelValue
        }) : P("", !0),
        E.$slots["action-preview"] ? P("", !0) : (b(), S(ye, { key: 1 }, [
          Array.isArray(g(N)) ? P("", !0) : (b(), S(ye, { key: 0 }, [
            Ee(se(g(N)), 1)
          ], 64)),
          Array.isArray(g(N)) ? (b(!0), S(ye, { key: 1 }, De(g(N), (J, re) => (b(), S("div", { key: re }, se(J), 1))), 128)) : P("", !0)
        ], 64))
      ]),
      I("div", Pg, [
        E.$slots["action-select"] ? F(E.$slots, "action-select", {
          key: 0,
          value: e.internalModelValue
        }) : P("", !0),
        E.$slots["action-select"] ? P("", !0) : (b(), S(ye, { key: 1 }, [
          E.inline ? P("", !0) : (b(), S("span", {
            key: 0,
            class: "dp__action dp__cancel",
            ref_key: "cancelButtonRef",
            ref: l,
            tabindex: "0",
            onClick: W[0] || (W[0] = (J) => E.$emit("close-picker")),
            onKeydown: [
              W[1] || (W[1] = le((J) => E.$emit("close-picker"), ["enter"])),
              W[2] || (W[2] = le((J) => E.$emit("close-picker"), ["space"]))
            ]
          }, se(E.cancelText), 545)),
          I("span", {
            class: Se(g(d)),
            tabindex: "0",
            onKeydown: [
              le(U, ["enter"]),
              le(U, ["space"])
            ],
            onClick: U,
            "data-test": "select-button",
            ref_key: "selectButtonRef",
            ref: f
          }, se(E.selectText), 43, Tg)
        ], 64))
      ])
    ], 4));
  }
}), Rg = ["aria-label"], xg = {
  class: "dp__calendar_header",
  role: "row"
}, Cg = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, Mg = /* @__PURE__ */ I("div", { class: "dp__calendar_header_separator" }, null, -1), Ng = ["aria-label"], Eg = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, Ag = { class: "dp__cell_inner" }, Bg = ["aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseover"], Ig = /* @__PURE__ */ I("div", { class: "dp__arrow_bottom_tp" }, null, -1), Lg = /* @__PURE__ */ Pe({
  __name: "Calendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    getWeekNum: {
      type: Function,
      default: () => ""
    },
    specificMode: { type: Boolean, default: !1 },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...Pt
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, { buildMultiLevelMatrix: a } = kt(), { setDateMonthOrYear: i, defaults: o } = at(r), l = q(null), f = q({ bottom: "", left: "", transform: "" }), u = q([]), d = q(null), s = q(!0), p = q(""), h = q({ startX: 0, endX: 0, startY: 0, endY: 0 }), v = G(() => r.dayNames ? Array.isArray(r.dayNames) ? r.dayNames : r.dayNames(r.locale, +r.weekStart) : ng(r.locale, +r.weekStart));
    tt(() => {
      n("mount", { cmp: "calendar", refs: u }), r.noSwipe || d.value && (d.value.addEventListener("touchstart", Y, { passive: !1 }), d.value.addEventListener("touchend", Q, { passive: !1 }), d.value.addEventListener("touchmove", ne, { passive: !1 })), r.monthChangeOnScroll && d.value && d.value.addEventListener("wheel", k, { passive: !1 });
    });
    const N = (_) => _ ? r.vertical ? "vNext" : "next" : r.vertical ? "vPrevious" : "previous", H = (_, C) => {
      if (r.transitions) {
        const M = yt(i(B(), r.month, r.year));
        p.value = Je(yt(i(B(), _, C)), M) ? o.value.transitions[N(!0)] : o.value.transitions[N(!1)], s.value = !1, sn(() => {
          s.value = !0;
        });
      }
    }, U = G(
      () => ({
        dp__calendar_wrap: !0,
        [r.calendarClassName]: !!r.calendarClassName
      })
    ), E = G(() => (_) => {
      const C = ig(_);
      return {
        dp__marker_dot: C.type === "dot",
        dp__marker_line: C.type === "line"
      };
    }), W = G(() => (_) => xe(_, l.value)), J = G(() => ({
      dp__calendar: !0,
      dp__calendar_next: o.value.multiCalendars > 0 && r.instance !== 0
    })), re = G(() => r.specificMode ? { height: `${r.modeHeight}px` } : void 0), m = (_, C, M) => {
      var c, O;
      if (n("set-hover-date", _), (O = (c = _.marker) == null ? void 0 : c.tooltip) != null && O.length) {
        const T = Ye(u.value[C][M]);
        if (T) {
          const { width: j, height: z } = T.getBoundingClientRect();
          f.value = {
            bottom: `${z}px`,
            left: `${j / 2}px`,
            transform: "translateX(-50%)"
          }, l.value = _.value;
        }
      }
    }, x = () => {
      l.value = null;
    }, Y = (_) => {
      h.value.startX = _.changedTouches[0].screenX, h.value.startY = _.changedTouches[0].screenY;
    }, Q = (_) => {
      h.value.endX = _.changedTouches[0].screenX, h.value.endY = _.changedTouches[0].screenY, V();
    }, ne = (_) => {
      r.vertical && !r.inline && _.preventDefault();
    }, V = () => {
      const _ = r.vertical ? "Y" : "X";
      Math.abs(h.value[`start${_}`] - h.value[`end${_}`]) > 10 && n("handle-swipe", h.value[`start${_}`] > h.value[`end${_}`] ? "right" : "left");
    }, Z = (_, C, M) => {
      _ && (Array.isArray(u.value[C]) ? u.value[C][M] = _ : u.value[C] = [_]), r.arrowNavigation && a(u.value, "calendar");
    }, k = (_) => {
      r.monthChangeOnScroll && (_.preventDefault(), n("handle-scroll", _));
    };
    return t({ triggerTransition: H }), (_, C) => {
      var M;
      return b(), S("div", {
        class: Se(g(J))
      }, [
        I("div", {
          style: Mt(g(re))
        }, [
          e.specificMode ? P("", !0) : (b(), S("div", {
            key: 0,
            ref_key: "calendarWrapRef",
            ref: d,
            class: Se(g(U)),
            role: "grid",
            "aria-label": (M = g(o).ariaLabels) == null ? void 0 : M.calendarWrap
          }, [
            I("div", xg, [
              _.weekNumbers ? (b(), S("div", Cg, se(_.weekNumName), 1)) : P("", !0),
              (b(!0), S(ye, null, De(g(v), (c, O) => (b(), S("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: O,
                "data-test": "calendar-header"
              }, [
                _.$slots["calendar-header"] ? F(_.$slots, "calendar-header", {
                  key: 0,
                  day: c,
                  index: O
                }) : P("", !0),
                _.$slots["calendar-header"] ? P("", !0) : (b(), S(ye, { key: 1 }, [
                  Ee(se(c), 1)
                ], 64))
              ]))), 128))
            ]),
            Mg,
            ve(lt, {
              name: p.value,
              css: !!_.transitions
            }, {
              default: oe(() => {
                var c;
                return [
                  s.value ? (b(), S("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (c = g(o).ariaLabels) == null ? void 0 : c.calendarDays
                  }, [
                    (b(!0), S(ye, null, De(e.mappedDates, (O, T) => (b(), S("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: T
                    }, [
                      _.weekNumbers ? (b(), S("div", Eg, [
                        I("div", Ag, se(e.getWeekNum(O.days)), 1)
                      ])) : P("", !0),
                      (b(!0), S(ye, null, De(O.days, (j, z) => {
                        var $, w, L;
                        return b(), S("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (pe) => Z(pe, T, z),
                          key: z + T,
                          "aria-selected": j.classData.dp__active_date || j.classData.dp__range_start || j.classData.dp__range_start,
                          "aria-disabled": j.classData.dp__cell_disabled,
                          "aria-label": (w = ($ = g(o).ariaLabels) == null ? void 0 : $.day) == null ? void 0 : w.call($, j),
                          tabindex: "0",
                          "data-test": j.value,
                          onClick: ke((pe) => _.$emit("select-date", j), ["stop", "prevent"]),
                          onKeydown: [
                            le((pe) => _.$emit("select-date", j), ["enter"]),
                            le((pe) => _.$emit("handle-space", j), ["space"])
                          ],
                          onMouseover: (pe) => m(j, T, z),
                          onMouseleave: x
                        }, [
                          I("div", {
                            class: Se(["dp__cell_inner", j.classData])
                          }, [
                            _.$slots.day ? F(_.$slots, "day", {
                              key: 0,
                              day: +j.text,
                              date: j.value
                            }) : P("", !0),
                            _.$slots.day ? P("", !0) : (b(), S(ye, { key: 1 }, [
                              Ee(se(j.text), 1)
                            ], 64)),
                            j.marker ? (b(), S("div", {
                              key: 2,
                              class: Se(g(E)(j.marker)),
                              style: Mt(j.marker.color ? { backgroundColor: j.marker.color } : {})
                            }, null, 6)) : P("", !0),
                            g(W)(j.value) ? (b(), S("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              style: Mt(f.value)
                            }, [
                              (L = j.marker) != null && L.tooltip ? (b(), S("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: C[0] || (C[0] = ke(() => {
                                }, ["stop"]))
                              }, [
                                (b(!0), S(ye, null, De(j.marker.tooltip, (pe, we) => (b(), S("div", {
                                  key: we,
                                  class: "dp__tooltip_text"
                                }, [
                                  _.$slots["marker-tooltip"] ? F(_.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltop: pe,
                                    day: j.value
                                  }) : P("", !0),
                                  _.$slots["marker-tooltip"] ? P("", !0) : (b(), S(ye, { key: 1 }, [
                                    I("div", {
                                      class: "dp__tooltip_mark",
                                      style: Mt(pe.color ? { backgroundColor: pe.color } : {})
                                    }, null, 4),
                                    I("div", null, se(pe.text), 1)
                                  ], 64))
                                ]))), 128)),
                                Ig
                              ])) : P("", !0)
                            ], 4)) : P("", !0)
                          ], 2)
                        ], 40, Bg);
                      }), 128))
                    ]))), 128))
                  ], 8, Ng)) : P("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 10, Rg))
        ], 4)
      ], 2);
    };
  }
}), Vg = ["aria-label", "aria-disabled"], ga = /* @__PURE__ */ Pe({
  __name: "ActionIcon",
  props: {
    ariaLabel: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const n = q(null);
    return tt(() => t("set-ref", n)), (r, a) => (b(), S("div", {
      class: "dp__month_year_col_nav",
      onClick: a[0] || (a[0] = (i) => r.$emit("activate")),
      onKeydown: [
        a[1] || (a[1] = le((i) => r.$emit("activate"), ["enter"])),
        a[2] || (a[2] = le((i) => r.$emit("activate"), ["space"]))
      ],
      tabindex: "0",
      role: "button",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled,
      ref_key: "elRef",
      ref: n
    }, [
      I("div", {
        class: Se(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        F(r.$slots, "default")
      ], 2)
    ], 40, Vg));
  }
}), Ug = ["onKeydown"], Fg = { class: "dp__selection_grid_header" }, Yg = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], jg = ["aria-label", "onKeydown"], an = /* @__PURE__ */ Pe({
  __name: "SelectionGrid",
  props: {
    items: { type: Array, default: () => [] },
    modelValue: { type: [String, Number], default: null },
    multiModelValue: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: [Number, String], default: null },
    maxValue: { type: [Number, String], default: null },
    year: { type: Number, default: 0 },
    skipActive: { type: Boolean, default: !1 },
    headerRefs: { type: Array, default: () => [] },
    skipButtonRef: { type: Boolean, default: !1 },
    monthPicker: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "selected", "toggle", "reset-flow"],
  setup(e, { expose: t, emit: n }) {
    const r = e, { setSelectionGrid: a, buildMultiLevelMatrix: i, setMonthPicker: o } = kt(), { hideNavigationButtons: l } = at(r), f = q(!1), u = q(null), d = q(null), s = q([]), p = q(), h = q(null);
    is(() => {
      u.value = null;
    }), tt(() => {
      sn().then(() => x()), N(), v(!0);
    }), zo(() => v(!1));
    const v = (_) => {
      var C;
      r.arrowNavigation && ((C = r.headerRefs) != null && C.length ? o(_) : a(_));
    }, N = () => {
      const _ = Ye(d);
      _ && (r.textInput || _.focus({ preventScroll: !0 }), f.value = _.clientHeight < _.scrollHeight);
    }, H = G(
      () => ({
        dp__overlay: !0
      })
    ), U = G(() => ({
      dp__overlay_col: !0
    })), E = (_) => r.skipActive ? !1 : _.value === r.modelValue, W = G(() => r.items.map((_) => _.filter((C) => C).map((C) => {
      var M, c, O;
      const T = r.disabledValues.some((z) => z === C.value) || m(C.value), j = (M = r.multiModelValue) != null && M.length ? (c = r.multiModelValue) == null ? void 0 : c.some(
        (z) => xe(
          z,
          At(
            r.monthPicker ? rn(new Date(), C.value) : new Date(),
            r.monthPicker ? r.year : C.value
          )
        )
      ) : E(C);
      return {
        ...C,
        className: {
          dp__overlay_cell_active: j,
          dp__overlay_cell: !j,
          dp__overlay_cell_disabled: T,
          dp__overlay_cell_active_disabled: T && j,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: (O = r.multiModelValue) != null && O.length ? Q(C.value) : !1
        }
      };
    }))), J = G(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: f.value,
        dp__button_bottom: r.autoApply
      })
    ), re = G(() => {
      var _, C;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((_ = r.items) == null ? void 0 : _.length) <= 6,
        dp__container_block: ((C = r.items) == null ? void 0 : C.length) > 6
      };
    }), m = (_) => {
      const C = r.maxValue || r.maxValue === 0, M = r.minValue || r.minValue === 0;
      return !C && !M ? !1 : C && M ? +_ > +r.maxValue || +_ < +r.minValue : C ? +_ > +r.maxValue : M ? +_ < +r.minValue : !1;
    }, x = () => {
      const _ = Ye(u);
      if (_) {
        const C = Ye(d);
        C && (C.scrollTop = _.offsetTop - C.offsetTop - (C.getBoundingClientRect().height / 2 - _.getBoundingClientRect().height));
      }
    }, Y = (_) => {
      !r.disabledValues.some((C) => C === _) && !m(_) && (n("update:model-value", _), n("selected"));
    }, Q = (_) => {
      const C = r.monthPicker ? r.year : _;
      return Zu(
        r.multiModelValue,
        At(
          r.monthPicker ? rn(new Date(), p.value || 0) : new Date(),
          r.monthPicker ? C : p.value || C
        ),
        At(r.monthPicker ? rn(new Date(), _) : new Date(), C)
      );
    }, ne = () => {
      n("toggle"), n("reset-flow");
    }, V = () => {
      r.escClose && ne();
    }, Z = (_, C, M, c) => {
      _ && (C.value === +r.modelValue && !r.disabledValues.includes(C.value) && (u.value = _), r.arrowNavigation && (Array.isArray(s.value[M]) ? s.value[M][c] = _ : s.value[M] = [_], k()));
    }, k = () => {
      var _, C;
      const M = (_ = r.headerRefs) != null && _.length ? [r.headerRefs].concat(s.value) : s.value.concat([r.skipButtonRef ? [] : [h.value]]);
      i(He(M), (C = r.headerRefs) != null && C.length ? "monthPicker" : "selectionGrid");
    };
    return t({ focusGrid: N }), (_, C) => {
      var M;
      return b(), S("div", {
        ref_key: "gridWrapRef",
        ref: d,
        class: Se(g(H)),
        role: "dialog",
        tabindex: "0",
        onKeydown: le(V, ["esc"])
      }, [
        I("div", {
          class: Se(g(re)),
          role: "grid"
        }, [
          I("div", Fg, [
            F(_.$slots, "header")
          ]),
          _.$slots.overlay ? F(_.$slots, "overlay", { key: 0 }) : (b(), S(ye, { key: 1 }, [
            (b(!0), S(ye, null, De(g(W), (c, O) => (b(), S("div", {
              class: "dp__overlay_row",
              key: O,
              role: "row"
            }, [
              (b(!0), S(ye, null, De(c, (T, j) => (b(), S("div", {
                role: "gridcell",
                class: Se(g(U)),
                key: T.value,
                "aria-selected": T.value === e.modelValue && !e.disabledValues.includes(T.value),
                "aria-disabled": T.className.dp__overlay_cell_disabled,
                ref_for: !0,
                ref: (z) => Z(z, T, O, j),
                tabindex: "0",
                "data-test": T.text,
                onClick: (z) => Y(T.value),
                onKeydown: [
                  le((z) => Y(T.value), ["enter"]),
                  le((z) => Y(T.value), ["space"])
                ],
                onMouseover: (z) => p.value = T.value
              }, [
                I("div", {
                  class: Se(T.className)
                }, [
                  _.$slots.item ? F(_.$slots, "item", {
                    key: 0,
                    item: T
                  }) : P("", !0),
                  _.$slots.item ? P("", !0) : (b(), S(ye, { key: 1 }, [
                    Ee(se(T.text), 1)
                  ], 64))
                ], 2)
              ], 42, Yg))), 128))
            ]))), 128)),
            _.$slots["button-icon"] ? Xe((b(), S("div", {
              key: 0,
              role: "button",
              "aria-label": (M = e.ariaLabels) == null ? void 0 : M.toggleOverlay,
              class: Se(g(J)),
              tabindex: "0",
              ref_key: "toggleButton",
              ref: h,
              onClick: ne,
              onKeydown: le(ne, ["enter"])
            }, [
              F(_.$slots, "button-icon")
            ], 42, jg)), [
              [ut, !g(l)(e.type)]
            ]) : P("", !0)
          ], 64))
        ], 2)
      ], 42, Ug);
    };
  }
}), Hg = ["aria-label"], au = /* @__PURE__ */ Pe({
  __name: "RegularPicker",
  props: {
    ariaLabel: { type: String, default: "" },
    showSelectionGrid: { type: Boolean, default: !1 },
    modelValue: { type: Number, default: null },
    items: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: Number, default: null },
    maxValue: { type: Number, default: null },
    slotName: { type: String, default: "" },
    overlaySlot: { type: String, default: "" },
    headerRefs: { type: Array, default: () => [] },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    transitions: { type: [Object, Boolean], default: !1 },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "toggle", "set-ref"],
  setup(e, { emit: t }) {
    const n = e, { transitionName: r, showTransition: a } = Qr(n.transitions), i = q(null);
    return tt(() => t("set-ref", i)), (o, l) => (b(), S(ye, null, [
      I("div", {
        class: "dp__month_year_select",
        onClick: l[0] || (l[0] = (f) => o.$emit("toggle")),
        onKeydown: [
          l[1] || (l[1] = le((f) => o.$emit("toggle"), ["enter"])),
          l[2] || (l[2] = le((f) => o.$emit("toggle"), ["space"]))
        ],
        role: "button",
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: i
      }, [
        F(o.$slots, "default")
      ], 40, Hg),
      ve(lt, {
        name: g(r)(e.showSelectionGrid),
        css: g(a)
      }, {
        default: oe(() => [
          e.showSelectionGrid ? (b(), fe(an, Ue({ key: 0 }, {
            modelValue: e.modelValue,
            items: e.items,
            disabledValues: e.disabledValues,
            minValue: e.minValue,
            maxValue: e.maxValue,
            escClose: e.escClose,
            type: e.type,
            arrowNavigation: e.arrowNavigation,
            textInput: e.textInput,
            autoApply: e.autoApply,
            ariaLabels: e.ariaLabels,
            hideNavigation: e.hideNavigation
          }, {
            "header-refs": [],
            "onUpdate:modelValue": l[3] || (l[3] = (f) => o.$emit("update:model-value", f)),
            onToggle: l[4] || (l[4] = (f) => o.$emit("toggle"))
          }), et({
            "button-icon": oe(() => [
              o.$slots["calendar-icon"] ? F(o.$slots, "calendar-icon", { key: 0 }) : P("", !0),
              o.$slots["calendar-icon"] ? P("", !0) : (b(), fe(g(Gr), { key: 1 }))
            ]),
            _: 2
          }, [
            o.$slots[e.slotName] ? {
              name: "item",
              fn: oe(({ item: f }) => [
                F(o.$slots, e.slotName, { item: f })
              ]),
              key: "0"
            } : void 0,
            o.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: oe(() => [
                F(o.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            o.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: oe(() => [
                F(o.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : P("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), Wg = { class: "dp__month_year_row" }, qg = { class: "dp__month_year_wrap" }, zg = { class: "dp__month_picker_header" }, Gg = ["aria-label"], Qg = ["aria-label"], Zg = ["aria-label"], Jg = /* @__PURE__ */ Pe({
  __name: "MonthYearPicker",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    internalModelValue: { type: [Date, Array], default: null },
    ...Pt
  },
  emits: ["update-month-year", "month-year-select", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: t, emit: n }) {
    const r = e, { defaults: a } = at(r), { transitionName: i, showTransition: o } = Qr(a.value.transitions), { buildMatrix: l } = kt(), { handleMonthYearChange: f, isDisabled: u, updateMonthYear: d } = mg(r, n), s = q(!1), p = q(!1), h = q([null, null, null, null]), v = q(null), N = q(null), H = q(null);
    tt(() => {
      n("mount");
    });
    const U = (w) => ({
      get: () => r[w],
      set: (L) => {
        const pe = w === "month" ? "year" : "month";
        n("update-month-year", { [w]: L, [pe]: r[pe] }), n("month-year-select", w === "year"), w === "month" ? O(!0) : T(!0);
      }
    }), E = G(U("month")), W = G(U("year")), J = G(() => (w) => {
      const L = w === "month";
      return {
        showSelectionGrid: (L ? s : p).value,
        items: (L ? _ : C).value,
        disabledValues: a.value.filters[L ? "months" : "years"],
        minValue: (L ? Y : m).value,
        maxValue: (L ? Q : x).value,
        headerRefs: L && r.monthPicker ? [v.value, N.value, H.value] : [],
        escClose: r.escClose,
        transitions: a.value.transitions,
        ariaLabels: a.value.ariaLabels,
        textInput: r.textInput,
        autoApply: r.autoApply,
        arrowNavigation: r.arrowNavigation,
        hideNavigation: r.hideNavigation
      };
    }), re = G(() => (w) => ({
      month: r.month,
      year: r.year,
      items: w === "month" ? r.months : r.years,
      instance: r.instance,
      updateMonthYear: d,
      toggle: w === "month" ? O : T
    })), m = G(() => r.minDate ? Me(B(r.minDate)) : null), x = G(() => r.maxDate ? Me(B(r.maxDate)) : null), Y = G(() => {
      if (r.minDate && m.value) {
        if (m.value > r.year)
          return 12;
        if (m.value === r.year)
          return Ce(B(r.minDate));
      }
      return null;
    }), Q = G(() => r.maxDate && x.value ? x.value < r.year ? -1 : x.value === r.year ? Ce(B(r.maxDate)) : null : null), ne = G(() => r.range && r.internalModelValue && (r.monthPicker || r.yearPicker) ? r.internalModelValue : []), V = (w) => w.reverse(), Z = (w, L = !1) => {
      const pe = [], we = (Re) => L ? V(Re) : Re;
      for (let Re = 0; Re < w.length; Re += 3) {
        const ge = [w[Re], w[Re + 1], w[Re + 2]];
        pe.push(we(ge));
      }
      return L ? pe.reverse() : pe;
    }, k = G(() => r.months.find((L) => L.value === r.month) || { text: "", value: 0 }), _ = G(() => Z(r.months)), C = G(() => Z(r.years, r.reverseYears)), M = G(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === 0 : !0), c = G(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === a.value.multiCalendars - 1 : !0), O = (w = !1) => {
      j(w), s.value = !s.value, s.value || n("overlay-closed");
    }, T = (w = !1) => {
      j(w), p.value = !p.value, p.value || n("overlay-closed");
    }, j = (w) => {
      w || n("reset-flow");
    }, z = (w = !1) => {
      n("update-month-year", {
        year: w ? r.year + 1 : r.year - 1,
        month: r.month,
        fromNav: !0
      });
    }, $ = (w, L) => {
      r.arrowNavigation && (h.value[L] = Ye(w), l(h.value, "monthYear"));
    };
    return t({
      toggleMonthPicker: O,
      toggleYearPicker: T
    }), (w, L) => {
      var pe, we, Re, ge, me;
      return b(), S("div", Wg, [
        w.$slots["month-year"] ? F(w.$slots, "month-year", rt(Ue({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: g(d), handleMonthYearChange: g(f), instance: e.instance }))) : (b(), S(ye, { key: 1 }, [
          !w.monthPicker && !w.yearPicker ? (b(), S(ye, { key: 0 }, [
            g(M) && !w.vertical ? (b(), fe(ga, {
              key: 0,
              "aria-label": (pe = g(a).ariaLabels) == null ? void 0 : pe.prevMonth,
              disabled: g(u)(!1),
              onActivate: L[0] || (L[0] = (ee) => g(f)(!1)),
              onSetRef: L[1] || (L[1] = (ee) => $(ee, 0))
            }, {
              default: oe(() => [
                w.$slots["arrow-left"] ? F(w.$slots, "arrow-left", { key: 0 }) : P("", !0),
                w.$slots["arrow-left"] ? P("", !0) : (b(), fe(g(Hl), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : P("", !0),
            I("div", qg, [
              ve(au, Ue({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (we = g(a).ariaLabels) == null ? void 0 : we.openMonthsOverlay,
                modelValue: g(E),
                "onUpdate:modelValue": L[2] || (L[2] = (ee) => Ct(E) ? E.value = ee : null)
              }, g(J)("month"), {
                onToggle: O,
                onSetRef: L[3] || (L[3] = (ee) => $(ee, 1))
              }), et({
                default: oe(() => [
                  w.$slots.month ? F(w.$slots, "month", rt(Ue({ key: 0 }, g(k)))) : P("", !0),
                  w.$slots.month ? P("", !0) : (b(), S(ye, { key: 1 }, [
                    Ee(se(g(k).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                w.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: oe(() => [
                    F(w.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                w.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: oe(({ item: ee }) => [
                    F(w.$slots, "month-overlay-value", {
                      text: ee.text,
                      value: ee.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                w.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: oe(() => [
                    F(w.$slots, "month-overlay", rt(bt(g(re)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                w.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: oe(() => [
                    F(w.$slots, "month-overlay-header", { toggle: O })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              ve(au, Ue({
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (Re = g(a).ariaLabels) == null ? void 0 : Re.openYearsOverlay,
                modelValue: g(W),
                "onUpdate:modelValue": L[4] || (L[4] = (ee) => Ct(W) ? W.value = ee : null)
              }, g(J)("year"), {
                onToggle: T,
                onSetRef: L[5] || (L[5] = (ee) => $(ee, 2))
              }), et({
                default: oe(() => [
                  w.$slots.year ? F(w.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : P("", !0),
                  w.$slots.year ? P("", !0) : (b(), S(ye, { key: 1 }, [
                    Ee(se(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                w.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: oe(() => [
                    F(w.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                w.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: oe(({ item: ee }) => [
                    F(w.$slots, "year-overlay-value", {
                      text: ee.text,
                      value: ee.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                w.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: oe(() => [
                    F(w.$slots, "year-overlay", rt(bt(g(re)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                w.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: oe(() => [
                    F(w.$slots, "year-overlay-header", { toggle: T })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"])
            ]),
            g(M) && w.vertical ? (b(), fe(ga, {
              key: 1,
              "aria-label": (ge = g(a).ariaLabels) == null ? void 0 : ge.prevMonth,
              disabled: g(u)(!1),
              onActivate: L[6] || (L[6] = (ee) => g(f)(!1))
            }, {
              default: oe(() => [
                w.$slots["arrow-up"] ? F(w.$slots, "arrow-up", { key: 0 }) : P("", !0),
                w.$slots["arrow-up"] ? P("", !0) : (b(), fe(g(Gu), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : P("", !0),
            g(c) ? (b(), fe(ga, {
              key: 2,
              ref: "rightIcon",
              disabled: g(u)(!0),
              "aria-label": (me = g(a).ariaLabels) == null ? void 0 : me.nextMonth,
              onActivate: L[7] || (L[7] = (ee) => g(f)(!0)),
              onSetRef: L[8] || (L[8] = (ee) => $(ee, 3))
            }, {
              default: oe(() => [
                w.$slots[w.vertical ? "arrow-down" : "arrow-right"] ? F(w.$slots, w.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : P("", !0),
                w.$slots[w.vertical ? "arrow-down" : "arrow-right"] ? P("", !0) : (b(), fe(bn(w.vertical ? g(Qu) : g(Wl)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : P("", !0)
          ], 64)) : P("", !0),
          w.monthPicker ? (b(), fe(an, Ue({ key: 1 }, g(J)("month"), {
            "skip-active": w.range,
            year: e.year,
            "multi-model-value": g(ne),
            "month-picker": "",
            modelValue: g(E),
            "onUpdate:modelValue": L[17] || (L[17] = (ee) => Ct(E) ? E.value = ee : null),
            onToggle: O,
            onSelected: L[18] || (L[18] = (ee) => w.$emit("overlay-closed"))
          }), et({
            header: oe(() => {
              var ee, nt, de;
              return [
                I("div", zg, [
                  I("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: v,
                    onClick: L[9] || (L[9] = (Oe) => z(!1)),
                    onKeydown: L[10] || (L[10] = le((Oe) => z(!1), ["enter"]))
                  }, [
                    I("div", {
                      class: "dp__inner_nav",
                      role: "button",
                      "aria-label": (ee = g(a).ariaLabels) == null ? void 0 : ee.prevMonth
                    }, [
                      w.$slots["arrow-left"] ? F(w.$slots, "arrow-left", { key: 0 }) : P("", !0),
                      w.$slots["arrow-left"] ? P("", !0) : (b(), fe(g(Hl), { key: 1 }))
                    ], 8, Gg)
                  ], 544),
                  I("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: N,
                    "aria-label": (nt = g(a).ariaLabels) == null ? void 0 : nt.openYearsOverlay,
                    tabindex: "0",
                    onClick: L[11] || (L[11] = () => T(!1)),
                    onKeydown: L[12] || (L[12] = le(() => T(!1), ["enter"]))
                  }, [
                    w.$slots.year ? F(w.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : P("", !0),
                    w.$slots.year ? P("", !0) : (b(), S(ye, { key: 1 }, [
                      Ee(se(e.year), 1)
                    ], 64))
                  ], 40, Qg),
                  I("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: H,
                    onClick: L[13] || (L[13] = (Oe) => z(!0)),
                    onKeydown: L[14] || (L[14] = le((Oe) => z(!0), ["enter"]))
                  }, [
                    I("div", {
                      class: "dp__inner_nav",
                      role: "button",
                      "aria-label": (de = g(a).ariaLabels) == null ? void 0 : de.nextMonth
                    }, [
                      w.$slots["arrow-right"] ? F(w.$slots, "arrow-right", { key: 0 }) : P("", !0),
                      w.$slots["arrow-right"] ? P("", !0) : (b(), fe(g(Wl), { key: 1 }))
                    ], 8, Zg)
                  ], 544)
                ]),
                ve(lt, {
                  name: g(i)(p.value),
                  css: g(o)
                }, {
                  default: oe(() => [
                    p.value ? (b(), fe(an, Ue({ key: 0 }, g(J)("year"), {
                      modelValue: g(W),
                      "onUpdate:modelValue": L[15] || (L[15] = (Oe) => Ct(W) ? W.value = Oe : null),
                      onToggle: T,
                      onSelected: L[16] || (L[16] = (Oe) => w.$emit("overlay-closed"))
                    }), et({
                      "button-icon": oe(() => [
                        w.$slots["calendar-icon"] ? F(w.$slots, "calendar-icon", { key: 0 }) : P("", !0),
                        w.$slots["calendar-icon"] ? P("", !0) : (b(), fe(g(Gr), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      w.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: oe(({ item: Oe }) => [
                          F(w.$slots, "year-overlay-value", {
                            text: Oe.text,
                            value: Oe.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : P("", !0)
                  ]),
                  _: 3
                }, 8, ["name", "css"])
              ];
            }),
            _: 2
          }, [
            w.$slots["month-overlay-value"] ? {
              name: "item",
              fn: oe(({ item: ee }) => [
                F(w.$slots, "month-overlay-value", {
                  text: ee.text,
                  value: ee.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : P("", !0),
          w.yearPicker ? (b(), fe(an, Ue({ key: 2 }, g(J)("year"), {
            modelValue: g(W),
            "onUpdate:modelValue": L[19] || (L[19] = (ee) => Ct(W) ? W.value = ee : null),
            "multi-model-value": g(ne),
            "skip-active": w.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: T,
            onSelected: L[20] || (L[20] = (ee) => w.$emit("overlay-closed"))
          }), et({ _: 2 }, [
            w.$slots["year-overlay-value"] ? {
              name: "item",
              fn: oe(({ item: ee }) => [
                F(w.$slots, "year-overlay-value", {
                  text: ee.text,
                  value: ee.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : P("", !0)
        ], 64))
      ]);
    };
  }
}), Kg = {
  key: 0,
  class: "dp__time_input"
}, Xg = ["aria-label", "onKeydown", "onClick"], e_ = ["aria-label", "onKeydown", "onClick"], t_ = ["aria-label", "onKeydown", "onClick"], n_ = { key: 0 }, r_ = ["aria-label", "onKeydown"], a_ = /* @__PURE__ */ Pe({
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    ...Pt
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, { setTimePickerElements: a, setTimePickerBackRef: i } = kt(), { defaults: o } = at(r), { transitionName: l, showTransition: f } = Qr(o.value.transitions), u = ln({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), d = q("AM"), s = q(null), p = q([]);
    tt(() => {
      n("mounted");
    });
    const h = (k, _) => ku(Qe(B(), k), _), v = (k, _) => j0(Qe(B(), k), _), N = G(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !r.enableSeconds && r.is24,
        dp__time_col_reg_with_button: !r.enableSeconds && !r.is24,
        dp__time_col_sec: r.enableSeconds && r.is24,
        dp__time_col_sec_with_button: r.enableSeconds && !r.is24
      })
    ), H = G(() => {
      const k = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return r.enableSeconds ? k.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : k;
    }), U = G(() => H.value.filter((k) => !k.separator)), E = G(() => (k) => {
      if (k === "hours") {
        const _ = Y(r.hours);
        return { text: _ < 10 ? `0${_}` : `${_}`, value: _ };
      }
      return { text: r[k] < 10 ? `0${r[k]}` : `${r[k]}`, value: r[k] };
    }), W = (k) => {
      const _ = r.is24 ? 24 : 12, C = k === "hours" ? _ : 60, M = +r[`${k}GridIncrement`], c = k === "hours" && !r.is24 ? M : 0, O = [];
      for (let T = c; T < C; T += M)
        O.push({ value: T, text: T < 10 ? `0${T}` : `${T}` });
      return k === "hours" && !r.is24 && O.push({ value: 0, text: "12" }), tg(O);
    }, J = (k) => r[`no${k[0].toUpperCase() + k.slice(1)}Overlay`], re = (k) => {
      J(k) || (u[k] = !u[k], u[k] || n("overlay-closed"));
    }, m = (k) => k === "hours" ? ht : k === "minutes" ? vt : Ht, x = (k, _ = !0) => {
      const C = _ ? h : v;
      n(
        `update:${k}`,
        m(k)(C({ [k]: +r[k] }, { [k]: +r[`${k}Increment`] }))
      );
    }, Y = (k) => r.is24 ? k : (k >= 12 ? d.value = "PM" : d.value = "AM", og(k)), Q = () => {
      d.value === "PM" ? (d.value = "AM", n("update:hours", r.hours - 12)) : (d.value = "PM", n("update:hours", r.hours + 12));
    }, ne = (k) => {
      u[k] = !0;
    }, V = (k, _, C) => {
      if (k && r.arrowNavigation) {
        Array.isArray(p.value[_]) ? p.value[_][C] = k : p.value[_] = [k];
        const M = p.value.reduce(
          (c, O) => O.map((T, j) => [...c[j] || [], O[j]]),
          []
        );
        i(r.closeTimePickerBtn), s.value && (M[1] = M[1].concat(s.value)), a(M, r.order);
      }
    }, Z = (k, _) => k === "hours" && !r.is24 ? n(`update:${k}`, d.value === "PM" ? _ + 12 : _) : n(`update:${k}`, _);
    return t({ openChildCmp: ne }), (k, _) => {
      var C;
      return k.disabled ? P("", !0) : (b(), S("div", Kg, [
        (b(!0), S(ye, null, De(g(H), (M, c) => {
          var O, T, j;
          return b(), S("div", {
            key: c,
            class: Se(g(N))
          }, [
            M.separator ? (b(), S(ye, { key: 0 }, [
              Ee(" : ")
            ], 64)) : (b(), S(ye, { key: 1 }, [
              I("div", {
                class: "dp__inc_dec_button",
                role: "button",
                "aria-label": (O = g(o).ariaLabels) == null ? void 0 : O.incrementValue(M.type),
                tabindex: "0",
                onKeydown: [
                  le((z) => x(M.type), ["enter"]),
                  le((z) => x(M.type), ["space"])
                ],
                onClick: (z) => x(M.type),
                ref_for: !0,
                ref: (z) => V(z, c, 0)
              }, [
                k.$slots["arrow-up"] ? F(k.$slots, "arrow-up", { key: 0 }) : P("", !0),
                k.$slots["arrow-up"] ? P("", !0) : (b(), fe(g(Gu), { key: 1 }))
              ], 40, Xg),
              I("div", {
                role: "button",
                "aria-label": (T = g(o).ariaLabels) == null ? void 0 : T.openTpOverlay(M.type),
                class: Se(J(M.type) ? "" : "dp__time_display"),
                tabindex: "0",
                onKeydown: [
                  le((z) => re(M.type), ["enter"]),
                  le((z) => re(M.type), ["space"])
                ],
                onClick: (z) => re(M.type),
                ref_for: !0,
                ref: (z) => V(z, c, 1)
              }, [
                k.$slots[M.type] ? F(k.$slots, M.type, {
                  key: 0,
                  text: g(E)(M.type).text,
                  value: g(E)(M.type).value
                }) : P("", !0),
                k.$slots[M.type] ? P("", !0) : (b(), S(ye, { key: 1 }, [
                  Ee(se(g(E)(M.type).text), 1)
                ], 64))
              ], 42, e_),
              I("div", {
                class: "dp__inc_dec_button",
                role: "button",
                "aria-label": (j = g(o).ariaLabels) == null ? void 0 : j.decrementValue(M.type),
                tabindex: "0",
                onKeydown: [
                  le((z) => x(M.type, !1), ["enter"]),
                  le((z) => x(M.type, !1), ["space"])
                ],
                onClick: (z) => x(M.type, !1),
                ref_for: !0,
                ref: (z) => V(z, c, 2)
              }, [
                k.$slots["arrow-down"] ? F(k.$slots, "arrow-down", { key: 0 }) : P("", !0),
                k.$slots["arrow-down"] ? P("", !0) : (b(), fe(g(Qu), { key: 1 }))
              ], 40, t_)
            ], 64))
          ], 2);
        }), 128)),
        k.is24 ? P("", !0) : (b(), S("div", n_, [
          k.$slots["am-pm-button"] ? F(k.$slots, "am-pm-button", {
            key: 0,
            toggle: Q,
            value: d.value
          }) : P("", !0),
          k.$slots["am-pm-button"] ? P("", !0) : (b(), S("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: s,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (C = g(o).ariaLabels) == null ? void 0 : C.amPmButton,
            tabindex: "0",
            onClick: Q,
            onKeydown: [
              le(ke(Q, ["prevent"]), ["enter"]),
              le(ke(Q, ["prevent"]), ["space"])
            ]
          }, se(d.value), 41, r_))
        ])),
        (b(!0), S(ye, null, De(g(U), (M, c) => (b(), fe(lt, {
          key: c,
          name: g(l)(u[M.type]),
          css: g(f)
        }, {
          default: oe(() => [
            u[M.type] ? (b(), fe(an, {
              key: 0,
              items: W(M.type),
              "disabled-values": g(o).filters.times[M.type],
              "esc-close": k.escClose,
              "aria-labels": g(o).ariaLabels,
              "hide-navigation": k.hideNavigation,
              "onUpdate:modelValue": (O) => Z(M.type, O),
              onSelected: (O) => re(M.type),
              onToggle: (O) => re(M.type),
              onResetFlow: _[0] || (_[0] = (O) => k.$emit("reset-flow")),
              type: M.type
            }, et({
              "button-icon": oe(() => [
                k.$slots["clock-icon"] ? F(k.$slots, "clock-icon", { key: 0 }) : P("", !0),
                k.$slots["clock-icon"] ? P("", !0) : (b(), fe(g(zu), { key: 1 }))
              ]),
              _: 2
            }, [
              k.$slots[`${M.type}-overlay-value`] ? {
                name: "item",
                fn: oe(({ item: O }) => [
                  F(k.$slots, `${M.type}-overlay-value`, {
                    text: O.text,
                    value: O.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : P("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), o_ = ["aria-label"], i_ = { class: "dp__overlay_container dp__container_flex" }, l_ = {
  key: 1,
  class: "dp__overlay_row"
}, u_ = ["aria-label"], s_ = /* @__PURE__ */ Pe({
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Pt
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-closed"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, { buildMatrix: a, setTimePicker: i } = kt(), o = qo(), { hideNavigationButtons: l, defaults: f } = at(r), { transitionName: u, showTransition: d } = Qr(f.value.transitions), s = q(null), p = q(null), h = q([]), v = q(null);
    tt(() => {
      n("mount"), !r.timePicker && r.arrowNavigation ? a([Ye(s.value)], "time") : i(!0, r.timePicker);
    });
    const N = G(() => r.range && r.modelAuto ? es(r.internalModelValue) : !0), H = q(!1), U = (V) => ({
      hours: Array.isArray(r.hours) ? r.hours[V] : r.hours,
      minutes: Array.isArray(r.minutes) ? r.minutes[V] : r.minutes,
      seconds: Array.isArray(r.seconds) ? r.seconds[V] : r.seconds
    }), E = G(() => {
      const V = [];
      if (r.range)
        for (let Z = 0; Z < 2; Z++)
          V.push(U(Z));
      else
        V.push(U(0));
      return V;
    }), W = (V, Z = !1, k = "") => {
      Z || n("reset-flow"), H.value = V, r.arrowNavigation && (i(V), V || n("overlay-closed")), sn(() => {
        k !== "" && h.value[0] && h.value[0].openChildCmp(k);
      });
    }, J = G(() => ({
      dp__button: !0,
      dp__button_bottom: r.autoApply
    })), re = Nt(o, "timePicker"), m = (V, Z, k) => r.range ? Z === 0 ? [V, E.value[1][k]] : [E.value[0][k], V] : V, x = (V) => {
      n("update:hours", V);
    }, Y = (V) => {
      n("update:minutes", V);
    }, Q = (V) => {
      n("update:seconds", V);
    }, ne = () => {
      v.value && r.arrowNavigation && v.value.focus({ preventScroll: !0 });
    };
    return t({ toggleTimePicker: W }), (V, Z) => {
      var k;
      return b(), S("div", null, [
        V.timePicker ? P("", !0) : Xe((b(), S("div", {
          key: 0,
          class: Se(g(J)),
          role: "button",
          "aria-label": (k = g(f).ariaLabels) == null ? void 0 : k.openTimePicker,
          tabindex: "0",
          ref_key: "openTimePickerBtn",
          ref: s,
          onKeydown: [
            Z[0] || (Z[0] = le((_) => W(!0), ["enter"])),
            Z[1] || (Z[1] = le((_) => W(!0), ["space"]))
          ],
          onClick: Z[2] || (Z[2] = (_) => W(!0))
        }, [
          V.$slots["clock-icon"] ? F(V.$slots, "clock-icon", { key: 0 }) : P("", !0),
          V.$slots["clock-icon"] ? P("", !0) : (b(), fe(g(zu), { key: 1 }))
        ], 42, o_)), [
          [ut, !g(l)("time")]
        ]),
        ve(lt, {
          name: g(u)(H.value),
          css: g(d)
        }, {
          default: oe(() => {
            var _;
            return [
              H.value || V.timePicker ? (b(), S("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: v,
                tabindex: "0"
              }, [
                I("div", i_, [
                  V.$slots["time-picker-overlay"] ? F(V.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: x,
                    setMinutes: Y,
                    setSeconds: Q
                  }) : P("", !0),
                  V.$slots["time-picker-overlay"] ? P("", !0) : (b(), S("div", l_, [
                    (b(!0), S(ye, null, De(g(E), (C, M) => Xe((b(), fe(a_, Ue({ key: M }, {
                      ...V.$props,
                      order: M,
                      hours: C.hours,
                      minutes: C.minutes,
                      seconds: C.seconds,
                      closeTimePickerBtn: p.value,
                      disabled: M === 0 ? V.fixedStart : V.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: h,
                      "onUpdate:hours": (c) => x(m(c, M, "hours")),
                      "onUpdate:minutes": (c) => Y(m(c, M, "minutes")),
                      "onUpdate:seconds": (c) => Q(m(c, M, "seconds")),
                      onMounted: ne,
                      onOverlayClosed: ne
                    }), et({ _: 2 }, [
                      De(g(re), (c, O) => ({
                        name: c,
                        fn: oe((T) => [
                          F(V.$slots, c, rt(bt(T)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [ut, M === 0 ? !0 : g(N)]
                    ])), 128))
                  ])),
                  V.timePicker ? P("", !0) : Xe((b(), S("div", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: p,
                    class: Se(g(J)),
                    role: "button",
                    "aria-label": (_ = g(f).ariaLabels) == null ? void 0 : _.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      Z[3] || (Z[3] = le((C) => W(!1), ["enter"])),
                      Z[4] || (Z[4] = le((C) => W(!1), ["space"]))
                    ],
                    onClick: Z[5] || (Z[5] = (C) => W(!1))
                  }, [
                    V.$slots["calendar-icon"] ? F(V.$slots, "calendar-icon", { key: 0 }) : P("", !0),
                    V.$slots["calendar-icon"] ? P("", !0) : (b(), fe(g(Gr), { key: 1 }))
                  ], 42, u_)), [
                    [ut, !g(l)("time")]
                  ])
                ])
              ], 512)) : P("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), c_ = (e, t) => {
  const { isDisabled: n, matchDate: r, getWeekFromDate: a } = at(t), i = q(null), o = q(B()), l = (c) => {
    !c.current && t.hideOffsetDates || (i.value = c.value);
  }, f = () => {
    i.value = null;
  }, u = (c) => Array.isArray(e.value) && t.range && e.value[0] && i.value ? c ? Je(i.value, e.value[0]) : We(i.value, e.value[0]) : !0, d = (c, O) => {
    const T = () => e.value ? O ? e.value[0] || null : e.value[1] : null, j = e.value && Array.isArray(e.value) ? T() : null;
    return xe(B(c.value), j);
  }, s = (c) => {
    const O = Array.isArray(e.value) ? e.value[0] : null;
    return c ? !We(i.value || null, O) : !0;
  }, p = (c, O = !0) => (t.range || t.weekPicker) && Array.isArray(e.value) ? t.hideOffsetDates && !c.current ? !1 : xe(B(c.value), e.value[O ? 0 : 1]) : t.range ? d(c, O) && s(O) || xe(c.value, Array.isArray(e.value) ? e.value[0] : null) && u(O) : !1, h = (c, O, T) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? c ? !1 : T ? Je(e.value[0], O.value) : We(e.value[0], O.value) : !1, v = (c) => !e.value || t.hideOffsetDates && !c.current ? !1 : t.range ? t.modelAuto && Array.isArray(e.value) ? xe(c.value, e.value[0] ? e.value[0] : o.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((O) => xe(O, c.value)) : xe(c.value, e.value ? e.value : o.value), N = (c) => {
    if (t.autoRange || t.weekPicker) {
      if (i.value) {
        if (t.hideOffsetDates && !c.current)
          return !1;
        const O = $t(i.value, +t.autoRange), T = a(B(i.value));
        return t.weekPicker ? xe(T[1], B(c.value)) : xe(O, B(c.value));
      }
      return !1;
    }
    return !1;
  }, H = (c) => {
    if (t.autoRange || t.weekPicker) {
      if (i.value) {
        const O = $t(i.value, +t.autoRange);
        if (t.hideOffsetDates && !c.current)
          return !1;
        const T = a(B(i.value));
        return t.weekPicker ? Je(c.value, T[0]) && We(c.value, T[1]) : Je(c.value, i.value) && We(c.value, O);
      }
      return !1;
    }
    return !1;
  }, U = (c) => {
    if (t.autoRange || t.weekPicker) {
      if (i.value) {
        if (t.hideOffsetDates && !c.current)
          return !1;
        const O = a(B(i.value));
        return t.weekPicker ? xe(O[0], c.value) : xe(i.value, c.value);
      }
      return !1;
    }
    return !1;
  }, E = (c) => Zu(e.value, i.value, c.value), W = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, J = () => t.modelAuto ? es(t.internalModelValue) : !0, re = (c) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const O = t.range ? !p(c) && !p(c, !1) : !0;
    return !n(c.value) && !v(c) && !(!c.current && t.hideOffsetDates) && O;
  }, m = (c) => t.range ? t.modelAuto ? W() && v(c) : !1 : v(c), x = (c) => t.highlight ? r(c.value, t.highlight) : !1, Y = (c) => n(c.value) && t.highlightDisabledDays === !1, Q = (c) => t.highlightWeekDays && t.highlightWeekDays.includes(c.value.getDay()), ne = (c) => (t.range || t.weekPicker) && (t.multiCalendars > 0 ? c.current : !0) && J() && !(!c.current && t.hideOffsetDates) && !v(c) ? E(c) : !1, V = (c) => ({
    dp__cell_offset: !c.current,
    dp__pointer: !t.disabled && !(!c.current && t.hideOffsetDates) && !n(c.value),
    dp__cell_disabled: n(c.value),
    dp__cell_highlight: !Y(c) && (x(c) || Q(c)) && !m(c),
    dp__cell_highlight_active: !Y && (x(c) || Q(c)) && m(c),
    dp__today: !t.noToday && xe(c.value, o.value) && c.current
  }), Z = (c) => ({
    dp__active_date: m(c),
    dp__date_hover: re(c)
  }), k = (c) => ({
    ..._(c),
    ...C(c),
    dp__range_between_week: ne(c) && t.weekPicker
  }), _ = (c) => ({
    dp__range_start: t.multiCalendars > 0 ? c.current && p(c) && J() : p(c) && J(),
    dp__range_end: t.multiCalendars > 0 ? c.current && p(c, !1) && J() : p(c, !1) && J(),
    dp__range_between: ne(c) && !t.weekPicker,
    dp__date_hover_start: h(re(c), c, !0),
    dp__date_hover_end: h(re(c), c, !1)
  }), C = (c) => ({
    ..._(c),
    dp__cell_auto_range: H(c),
    dp__cell_auto_range_start: U(c),
    dp__cell_auto_range_end: N(c)
  }), M = (c) => t.range ? t.autoRange ? C(c) : t.modelAuto ? { ...Z(c), ..._(c) } : _(c) : t.weekPicker ? k(c) : Z(c);
  return {
    setHoverDate: l,
    clearHoverDate: f,
    getDayClassData: (c) => ({
      ...V(c),
      ...M(c),
      [t.dayClass ? t.dayClass(c.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    })
  };
}, f_ = ["id", "onKeydown"], d_ = {
  key: 0,
  class: "dp__sidebar_left"
}, p_ = {
  key: 1,
  class: "dp__preset_ranges"
}, y_ = ["onClick"], m_ = {
  key: 2,
  class: "dp__sidebar_right"
}, h_ = {
  key: 3,
  class: "dp__now_wrap"
}, v_ = /* @__PURE__ */ Pe({
  __name: "DatepickerMenu",
  props: {
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Pt
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value"
  ],
  setup(e, { emit: t }) {
    const n = e, { setMenuFocused: r, setShiftKey: a, control: i } = Ju(), { getCalendarDays: o, defaults: l } = at(n), f = qo(), u = q(null), d = ln({
      timePicker: !!(!n.enableTimePicker || n.timePicker || n.monthPicker),
      monthYearInput: !!n.timePicker,
      calendar: !1
    }), s = q([]), p = q([]), h = q(null), v = q(null), N = q(0), H = q(!1), U = q(0);
    tt(() => {
      var D;
      H.value = !0, !((D = n.presetRanges) != null && D.length) && !f["left-sidebar"] && !f["right-sidebar"] && st();
      const K = Ye(v);
      if (K && !n.textInput && !n.inline && (r(!0), x()), K) {
        const ze = (Ke) => {
          !n.monthYearComponent && !n.timePickerComponent && !Object.keys(f).length && Ke.preventDefault(), Ke.stopImmediatePropagation(), Ke.stopPropagation();
        };
        K.addEventListener("pointerdown", ze), K.addEventListener("mousedown", ze);
      }
      document.addEventListener("resize", st);
    }), zo(() => {
      document.removeEventListener("resize", st);
    });
    const { arrowRight: E, arrowLeft: W, arrowDown: J, arrowUp: re } = kt(), m = (D) => {
      D || D === 0 ? p.value[D].triggerTransition(
        V.value(D),
        Z.value(D)
      ) : p.value.forEach(
        (K, ze) => K.triggerTransition(V.value(ze), Z.value(ze))
      );
    }, x = () => {
      const D = Ye(v);
      D && D.focus({ preventScroll: !0 });
    }, Y = () => {
      var D;
      ((D = n.flow) == null ? void 0 : D.length) && U.value !== -1 && (U.value += 1, t("flow-step", U.value), Ie());
    }, Q = () => {
      U.value = -1;
    }, {
      modelValue: ne,
      month: V,
      year: Z,
      time: k,
      updateTime: _,
      updateMonthYear: C,
      selectDate: M,
      getWeekNum: c,
      monthYearSelect: O,
      handleScroll: T,
      handleArrow: j,
      handleSwipe: z,
      getMarker: $,
      selectCurrentDate: w,
      presetDateRange: L
    } = pg(n, t, Y, m), { setHoverDate: pe, clearHoverDate: we, getDayClassData: Re } = c_(ne, n), ge = Nt(f, "calendar"), me = Nt(f, "action"), ee = Nt(f, "timePicker"), nt = Nt(f, "monthYear"), de = G(() => n.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), Oe = G(() => rg(n.yearRange)), Ae = G(() => ag(n.locale, n.monthNameFormat)), st = () => {
      const D = Ye(u);
      D && (N.value = D.getBoundingClientRect().width);
    }, mt = G(() => (D) => o(V.value(D), Z.value(D))), Tt = G(
      () => l.value.multiCalendars > 0 && n.range ? [...Array(l.value.multiCalendars).keys()] : [0]
    ), zt = G(
      () => (D) => D === 1
    ), Zr = G(() => n.monthPicker || n.timePicker || n.yearPicker), Jr = G(
      () => ({
        dp__flex_display: l.value.multiCalendars > 0
      })
    ), dn = G(() => ({
      dp__instance_calendar: l.value.multiCalendars > 0
    })), Gt = G(() => ({
      dp__menu_disabled: n.disabled,
      dp__menu_readonly: n.readonly
    })), Kr = G(
      () => (D) => ea(mt, D)
    ), Xr = G(
      () => ({
        dp__menu: !0,
        dp__menu_index: !n.inline,
        dp__relative: n.inline,
        [n.menuClassName]: !!n.menuClassName
      })
    ), ea = (D, K) => D.value(K).map((ze) => ({
      ...ze,
      days: ze.days.map((Ke) => (Ke.marker = $(Ke), Ke.classData = Re(Ke), Ke))
    })), pn = (D) => {
      D.stopPropagation(), D.preventDefault(), D.stopImmediatePropagation();
    }, y = () => {
      n.escClose && t("close-picker");
    }, A = (D, K = !1) => {
      M(D, K), n.spaceConfirm && t("select-date");
    }, te = (D) => {
      var K;
      (K = n.flow) != null && K.length && (d[D] = !0, Object.keys(d).filter((ze) => !d[ze]).length || Ie());
    }, ce = (D, K, ze, Ke, ...yn) => {
      if (n.flow[U.value] === D) {
        const ae = Ke ? K.value[0] : K.value;
        ae && ae[ze](...yn);
      }
    }, Ie = () => {
      ce("month", s, "toggleMonthPicker", !0, !0), ce("year", s, "toggleYearPicker", !0, !0), ce("calendar", h, "toggleTimePicker", !1, !1, !0), ce("time", h, "toggleTimePicker", !1, !0, !0);
      const D = n.flow[U.value];
      (D === "hours" || D === "minutes" || D === "seconds") && ce(D, h, "toggleTimePicker", !1, !0, !0, D);
    }, ct = (D) => {
      if (n.arrowNavigation) {
        if (D === "up")
          return re();
        if (D === "down")
          return J();
        if (D === "left")
          return W();
        if (D === "right")
          return E();
      } else
        D === "left" || D === "up" ? j("left", 0, D === "up") : j("right", 0, D === "down");
    }, Dt = (D) => {
      a(D.shiftKey), !n.disableMonthYearSelect && D.code === "Tab" && D.target.classList.contains("dp__menu") && i.value.shiftKeyInMenu && (D.preventDefault(), D.stopImmediatePropagation(), t("close-picker"));
    };
    return (D, K) => {
      var ze;
      return b(), fe(lt, {
        appear: "",
        name: (ze = g(l).transitions) == null ? void 0 : ze.menuAppear,
        mode: "out-in",
        css: !!D.transitions
      }, {
        default: oe(() => {
          var Ke, yn;
          return [
            I("div", {
              id: D.uid ? `dp-menu-${D.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: v,
              role: "dialog",
              class: Se(g(Xr)),
              onMouseleave: K[12] || (K[12] = (...ae) => g(we) && g(we)(...ae)),
              onClick: pn,
              onKeydown: [
                le(y, ["esc"]),
                K[13] || (K[13] = le(ke((ae) => ct("left"), ["prevent"]), ["left"])),
                K[14] || (K[14] = le(ke((ae) => ct("up"), ["prevent"]), ["up"])),
                K[15] || (K[15] = le(ke((ae) => ct("down"), ["prevent"]), ["down"])),
                K[16] || (K[16] = le(ke((ae) => ct("right"), ["prevent"]), ["right"])),
                Dt
              ]
            }, [
              (D.disabled || D.readonly) && D.inline ? (b(), S("div", {
                key: 0,
                class: Se(g(Gt))
              }, null, 2)) : P("", !0),
              !D.inline && !D.teleportCenter ? (b(), S("div", {
                key: 1,
                class: Se(g(de))
              }, null, 2)) : P("", !0),
              I("div", {
                class: Se({
                  dp__menu_content_wrapper: ((Ke = D.presetRanges) == null ? void 0 : Ke.length) || !!D.$slots["left-sidebar"] || !!D.$slots["right-sidebar"]
                })
              }, [
                D.$slots["left-sidebar"] ? (b(), S("div", d_, [
                  F(D.$slots, "left-sidebar")
                ])) : P("", !0),
                (yn = D.presetRanges) != null && yn.length ? (b(), S("div", p_, [
                  (b(!0), S(ye, null, De(D.presetRanges, (ae, Lt) => (b(), S("div", {
                    key: Lt,
                    style: Mt(ae.style || {}),
                    class: "dp__preset_range",
                    onClick: (he) => g(L)(ae.range, !!ae.slot)
                  }, [
                    ae.slot ? F(D.$slots, ae.slot, {
                      key: 0,
                      presetDateRange: g(L),
                      label: ae.label,
                      range: ae.range
                    }) : (b(), S(ye, { key: 1 }, [
                      Ee(se(ae.label), 1)
                    ], 64))
                  ], 12, y_))), 128))
                ])) : P("", !0),
                I("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: u,
                  role: "document"
                }, [
                  I("div", {
                    class: Se(g(Jr))
                  }, [
                    (b(!0), S(ye, null, De(g(Tt), (ae, Lt) => (b(), S("div", {
                      key: ae,
                      class: Se(g(dn))
                    }, [
                      !D.disableMonthYearSelect && !D.timePicker ? (b(), fe(bn(D.monthYearComponent ? D.monthYearComponent : Jg), Ue({
                        key: 0,
                        ref_for: !0,
                        ref: (he) => {
                          he && (s.value[Lt] = he);
                        },
                        months: g(Ae),
                        years: g(Oe),
                        month: g(V)(ae),
                        year: g(Z)(ae),
                        instance: ae,
                        "internal-model-value": e.internalModelValue
                      }, D.$props, {
                        onMount: K[0] || (K[0] = (he) => te("monthYearInput")),
                        onResetFlow: Q,
                        onUpdateMonthYear: (he) => g(C)(ae, he),
                        onMonthYearSelect: g(O),
                        onOverlayClosed: x
                      }), et({ _: 2 }, [
                        De(g(nt), (he, ts) => ({
                          name: he,
                          fn: oe((ta) => [
                            F(D.$slots, he, rt(bt(ta)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : P("", !0),
                      ve(Lg, Ue({
                        ref_for: !0,
                        ref: (he) => {
                          he && (p.value[Lt] = he);
                        },
                        "specific-mode": g(Zr),
                        "get-week-num": g(c),
                        instance: ae,
                        "mapped-dates": g(Kr)(ae),
                        month: g(V)(ae),
                        year: g(Z)(ae)
                      }, D.$props, {
                        "flow-step": U.value,
                        "onUpdate:flow-step": K[1] || (K[1] = (he) => U.value = he),
                        onSelectDate: (he) => g(M)(he, !g(zt)(ae)),
                        onHandleSpace: (he) => A(he, !g(zt)(ae)),
                        onSetHoverDate: K[2] || (K[2] = (he) => g(pe)(he)),
                        onHandleScroll: (he) => g(T)(he, ae),
                        onHandleSwipe: (he) => g(z)(he, ae),
                        onMount: K[3] || (K[3] = (he) => te("calendar")),
                        onResetFlow: Q
                      }), et({ _: 2 }, [
                        De(g(ge), (he, ts) => ({
                          name: he,
                          fn: oe((ta) => [
                            F(D.$slots, he, rt(bt({ ...ta })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "flow-step", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  I("div", null, [
                    D.$slots["time-picker"] ? F(D.$slots, "time-picker", rt(Ue({ key: 0 }, { time: g(k), updateTime: g(_) }))) : (b(), S(ye, { key: 1 }, [
                      D.enableTimePicker && !D.monthPicker && !D.weekPicker ? (b(), fe(bn(D.timePickerComponent ? D.timePickerComponent : s_), Ue({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: h,
                        hours: g(k).hours,
                        minutes: g(k).minutes,
                        seconds: g(k).seconds,
                        "internal-model-value": e.internalModelValue
                      }, D.$props, {
                        onMount: K[4] || (K[4] = (ae) => te("timePicker")),
                        "onUpdate:hours": K[5] || (K[5] = (ae) => g(_)(ae)),
                        "onUpdate:minutes": K[6] || (K[6] = (ae) => g(_)(ae, !1)),
                        "onUpdate:seconds": K[7] || (K[7] = (ae) => g(_)(ae, !1, !0)),
                        onResetFlow: Q,
                        onOverlayClosed: x
                      }), et({ _: 2 }, [
                        De(g(ee), (ae, Lt) => ({
                          name: ae,
                          fn: oe((he) => [
                            F(D.$slots, ae, rt(bt(he)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : P("", !0)
                    ], 64))
                  ])
                ], 512),
                D.$slots["right-sidebar"] ? (b(), S("div", m_, [
                  F(D.$slots, "right-sidebar")
                ])) : P("", !0),
                D.showNowButton ? (b(), S("div", h_, [
                  D.$slots["now-button"] ? F(D.$slots, "now-button", {
                    key: 0,
                    selectCurrentDate: g(w)
                  }) : P("", !0),
                  D.$slots["now-button"] ? P("", !0) : (b(), S("button", {
                    key: 1,
                    type: "button",
                    role: "button",
                    class: "dp__now_button",
                    onClick: K[8] || (K[8] = (...ae) => g(w) && g(w)(...ae))
                  }, se(D.nowButtonLabel), 1))
                ])) : P("", !0)
              ], 2),
              D.$slots["action-row"] ? F(D.$slots, "action-row", rt(Ue({ key: 2 }, {
                internalModelValue: e.internalModelValue,
                selectDate: () => D.$emit("select-date"),
                closePicker: () => D.$emit("close-picker")
              }))) : (b(), S(ye, { key: 3 }, [
                !D.autoApply || D.keepActionRow ? (b(), fe(bn(D.actionRowComponent ? D.actionRowComponent : Dg), Ue({
                  key: 0,
                  "menu-mount": H.value,
                  "calendar-width": N.value,
                  "internal-model-value": e.internalModelValue
                }, D.$props, {
                  onClosePicker: K[9] || (K[9] = (ae) => D.$emit("close-picker")),
                  onSelectDate: K[10] || (K[10] = (ae) => D.$emit("select-date")),
                  onInvalidSelect: K[11] || (K[11] = (ae) => D.$emit("invalid-select"))
                }), et({ _: 2 }, [
                  De(g(me), (ae, Lt) => ({
                    name: ae,
                    fn: oe((he) => [
                      F(D.$slots, ae, rt(bt({ ...he })))
                    ])
                  }))
                ]), 1040, ["menu-mount", "calendar-width", "internal-model-value"])) : P("", !0)
              ], 64))
            ], 42, f_)
          ];
        }),
        _: 3
      }, 8, ["name", "css"]);
    };
  }
}), b_ = typeof window < "u" ? window : void 0, _a = () => {
}, g_ = (e) => ls() ? (us(e), !0) : !1, __ = (e, t, n, r) => {
  if (!e)
    return _a;
  let a = _a;
  const i = un(
    () => g(e),
    (l) => {
      a(), l && (l.addEventListener(t, n, r), a = () => {
        l.removeEventListener(t, n, r), a = _a;
      });
    },
    { immediate: !0, flush: "post" }
  ), o = () => {
    i(), a();
  };
  return g_(o), o;
}, w_ = (e, t, n, r = {}) => {
  const { window: a = b_, event: i = "pointerdown" } = r;
  return a ? __(a, i, (o) => {
    const l = Ye(e), f = Ye(t);
    !l || !f || l === o.target || o.composedPath().includes(l) || o.composedPath().includes(f) || n(o);
  }, { passive: !0 }) : void 0;
}, O_ = /* @__PURE__ */ Pe({
  __name: "VueDatePicker",
  props: {
    ...Pt
  },
  emits: [
    "update:model-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = qo(), i = q(!1), o = wa(r, "modelValue"), l = wa(r, "timezone"), f = q(null), u = q(null), d = q(!1), { setMenuFocused: s, setShiftKey: p } = Ju(), { clearArrowNav: h } = kt(), { validateDate: v, isValidTime: N, defaults: H } = at(r);
    tt(() => {
      Q(r.modelValue), r.inline || (window.addEventListener("scroll", C), window.addEventListener("resize", M)), r.inline && (i.value = !0);
    }), zo(() => {
      r.inline || (window.removeEventListener("scroll", C), window.removeEventListener("resize", M));
    });
    const U = Nt(a, "all", r.presetRanges), E = Nt(a, "input");
    un(
      [o, l],
      () => {
        Q(o.value);
      },
      { deep: !0 }
    );
    const { openOnTop: W, menuPosition: J, setMenuPosition: re, setInitialPosition: m } = hg(
      f,
      u,
      n,
      r
    ), {
      inputValue: x,
      internalModelValue: Y,
      parseExternalModelValue: Q,
      emitModelValue: ne,
      formatInputValue: V,
      checkBeforeEmit: Z
    } = yg(n, r, d), k = G(
      () => ({
        dp__main: !0,
        dp__theme_dark: r.dark,
        dp__theme_light: !r.dark,
        dp__flex_display: r.inline,
        dp__flex_display_with_input: r.inlineWithInput
      })
    ), _ = G(() => r.dark ? "dp__theme_dark" : "dp__theme_light"), C = () => {
      i.value && (r.closeOnScroll ? L() : r.autoPosition ? re() : window.removeEventListener("scroll", C));
    }, M = () => {
      i.value && re();
    }, c = () => {
      !r.disabled && !r.readonly && (m(), i.value = !0, sn().then(() => {
        re(), i.value && n("open");
      }), i.value || w(), Q(r.modelValue));
    }, O = () => {
      x.value = "", w(), n("update:model-value", null), n("cleared"), L();
    }, T = () => {
      const de = Y.value;
      return !de || !Array.isArray(de) && v(de) ? !0 : Array.isArray(de) ? de.length === 2 && v(de[0]) && v(de[1]) ? !0 : v(de[0]) : !1;
    }, j = () => {
      Z() && T() ? (ne(), L()) : n("invalid-select", Y.value);
    }, z = (de) => {
      ne(), r.closeOnAutoApply && !de && L();
    }, $ = (de = !1) => {
      r.autoApply && N(Y.value) && T() && (r.range && Array.isArray(Y.value) ? (r.partialRange || Y.value.length === 2) && z(de) : z(de));
    }, w = () => {
      r.textInput || (Y.value = null);
    }, L = () => {
      r.inline || (i.value && (i.value = !1, s(!1), p(!1), h(), n("closed"), m(), x.value && Q(o.value)), w(), u.value && u.value.focusInput());
    }, pe = (de, Oe) => {
      if (!de) {
        Y.value = null;
        return;
      }
      Y.value = de, Oe && (j(), n("text-submit"));
    }, we = () => {
      r.autoApply && N(Y.value) && ne();
    }, Re = () => i.value ? L() : c(), ge = (de) => {
      Y.value = de;
    }, me = G(() => r.textInput && H.value.textInputOptions.format), ee = () => {
      me.value && (d.value = !0, V()), n("focus");
    }, nt = () => {
      me.value && (d.value = !1, V()), n("blur");
    };
    return w_(
      f,
      u,
      r.onClickOutside ? () => r.onClickOutside(T) : L
    ), t({
      closeMenu: L,
      selectDate: j,
      clearValue: O,
      openMenu: c,
      onScroll: C,
      formatInputValue: V,
      updateInternalModelValue: ge
    }), (de, Oe) => (b(), S("div", {
      class: Se(g(k))
    }, [
      ve(Sg, Ue({
        ref_key: "inputRef",
        ref: u,
        "is-menu-open": i.value,
        "input-value": g(x),
        "onUpdate:input-value": Oe[0] || (Oe[0] = (Ae) => Ct(x) ? x.value = Ae : null)
      }, de.$props, {
        onClear: O,
        onOpen: c,
        onSetInputDate: pe,
        onSetEmptyDate: g(ne),
        onSelectDate: j,
        onToggle: Re,
        onClose: L,
        onFocus: ee,
        onBlur: nt
      }), et({ _: 2 }, [
        De(g(E), (Ae, st) => ({
          name: Ae,
          fn: oe((mt) => [
            F(de.$slots, Ae, rt(bt(mt)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      i.value ? (b(), fe(os, {
        key: 0,
        to: de.teleport,
        disabled: de.inline
      }, [
        i.value ? (b(), fe(v_, Ue({
          key: 0,
          ref_key: "dpMenuRef",
          ref: f,
          class: g(_),
          style: g(J),
          "open-on-top": g(W)
        }, de.$props, {
          "internal-model-value": g(Y),
          "onUpdate:internal-model-value": Oe[1] || (Oe[1] = (Ae) => Ct(Y) ? Y.value = Ae : null),
          onClosePicker: L,
          onSelectDate: j,
          onAutoApply: $,
          onTimeUpdate: we,
          onFlowStep: Oe[2] || (Oe[2] = (Ae) => de.$emit("flow-step", Ae)),
          onUpdateMonthYear: Oe[3] || (Oe[3] = (Ae) => de.$emit("update-month-year", Ae)),
          onInvalidSelect: Oe[4] || (Oe[4] = (Ae) => de.$emit("invalid-select", g(Y)))
        }), et({ _: 2 }, [
          De(g(U), (Ae, st) => ({
            name: Ae,
            fn: oe((mt) => [
              F(de.$slots, Ae, rt(bt({ ...mt })))
            ])
          }))
        ]), 1040, ["class", "style", "open-on-top", "internal-model-value"])) : P("", !0)
      ], 8, ["to", "disabled"])) : P("", !0)
    ], 2));
  }
}), pi = /* @__PURE__ */ (() => {
  const e = O_;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), $_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pi
}, Symbol.toStringTag, { value: "Module" }));
Object.entries($_).forEach(([e, t]) => {
  e !== "default" && (pi[e] = t);
});
const S_ = Pe({
  name: "CustomDatePicker",
  components: {
    Datepicker: pi
  },
  props: {
    label: {
      type: String
    },
    range: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "date"
    },
    resultType: {
      type: String,
      default: "formatted"
    },
    value: {
      type: [String, Array]
    }
  },
  setup(e, t) {
    const n = q(null);
    tt(() => {
      if (e.type !== "time")
        if (e.range === !0) {
          const u = a(e.value[0]), d = a(e.value[1]);
          n.value = [u, d];
        } else
          n.value = a(e.value);
      else if (e.range === !0) {
        const u = r(e.value[0]), d = r(e.value[1]);
        n.value = [u, d];
      } else {
        const u = r(e.value);
        n.value = u;
      }
    });
    const r = (u) => {
      if (typeof u == "string") {
        const d = u.split(":");
        return {
          hours: parseInt(d[0]),
          minutes: parseInt(d[1]),
          seconds: 0
        };
      }
    }, a = (u) => {
      if (typeof u == "string") {
        const d = u.split(" "), s = d[0].split("-"), p = parseInt(s[0]), h = parseInt(s[1]) - 1, v = parseInt(s[2]);
        if (e.type === "datetime" && d.length === 2) {
          const H = d[1].split(":"), U = parseInt(H[0]), E = parseInt(H[1]), W = 0;
          return new Date(p, h, v, U, E, W);
        }
        return new Date(p, h, v);
      }
    };
    return {
      selectedDate: n,
      format: (u) => {
        if (e.type !== "time")
          if (e.range === !0) {
            const d = ("0" + u[0].getDate()).slice(-2), s = ("0" + (u[0].getMonth() + 1)).slice(-2), p = u[0].getFullYear(), h = ("0" + u[0].getHours()).slice(-2), v = ("0" + u[0].getMinutes()).slice(-2);
            if (u[1]) {
              const N = ("0" + u[1].getDate()).slice(-2), H = ("0" + (u[1].getMonth() + 1)).slice(-2), U = u[1].getFullYear(), E = ("0" + u[1].getHours()).slice(-2), W = ("0" + u[1].getMinutes()).slice(-2);
              return e.type !== "datetime" ? `${d}/${s}/${p} - ${N}/${H}/${U}` : `${d}/${s}/${p} ${h}:${v} - ${N}/${H}/${U} ${E}:${W}`;
            }
          } else {
            const d = ("0" + u.getDate()).slice(-2), s = ("0" + (u.getMonth() + 1)).slice(-2), p = u.getFullYear(), h = ("0" + u.getHours()).slice(-2), v = ("0" + u.getMinutes()).slice(-2);
            return e.type !== "datetime" ? `${d}/${s}/${p}` : `${d}/${s}/${p} ${h}:${v}`;
          }
        else if (e.range === !0) {
          const d = ("0" + u[0].getHours()).slice(-2), s = ("0" + u[0].getMinutes()).slice(-2), p = ("0" + u[1].getHours()).slice(-2), h = ("0" + u[1].getMinutes()).slice(-2);
          return `${d}:${s} - ${p}:${h}`;
        } else {
          const d = ("0" + u.getHours()).slice(-2), s = ("0" + u.getMinutes()).slice(-2);
          return `${d}:${s}`;
        }
      },
      getDateType: (u) => u === e.type,
      checkIfOnlyDate: () => {
        if (e.type === "date") {
          const u = document.querySelector(".dp__instance_calendar .dp__button");
          u && (u.style.display = "none");
        }
      },
      emitDate: () => {
        let u;
        if (e.type !== "time")
          if (e.range === !0) {
            let d = [];
            Object.values({ ...n.value }).forEach((p) => {
              const h = ("0" + p.getDate()).slice(-2), v = ("0" + (p.getMonth() + 1)).slice(-2), N = p.getFullYear(), H = ("0" + p.getHours()).slice(-2), U = ("0" + p.getMinutes()).slice(-2);
              e.type !== "datetime" ? d.push(`${N}-${v}-${h}`) : d.push(`${N}-${v}-${h} ${H}:${U}:00`);
            }), u = d;
          } else {
            let d = "";
            const s = n.value, p = ("0" + s.getDate()).slice(-2), h = ("0" + (s.getMonth() + 1)).slice(-2), v = s.getFullYear(), N = ("0" + s.getHours()).slice(-2), H = ("0" + s.getMinutes()).slice(-2);
            e.type !== "datetime" ? d = `${v}-${h}-${p}` : d = `${v}-${h}-${p} ${N}:${H}:00`, u = d;
          }
        else if (e.range === !0) {
          let d = [];
          Object.values({ ...n.value }).forEach((s) => {
            d.push(`${("0" + s.hours).toString().slice(-2)}:${("0" + s.minutes).toString().slice(-2)}:00`);
          }), u = d;
        } else {
          const d = n.value;
          u = `${("0" + d.hours).toString().slice(-2)}:${("0" + d.minutes).toString().slice(-2)}:00`;
        }
        e.resultType === "original" ? t.emit("update", {
          formatted: u,
          original: n.value,
          type: e.type
        }) : t.emit("update:value", u);
      }
    };
  }
}), k_ = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
};
function P_(e, t, n, r, a, i) {
  const o = Yt("Datepicker");
  return b(), S("div", {
    class: Se(["custom-date-picker generic-input", { "no-time": e.type === "date" }])
  }, [
    e.label ? (b(), S("label", k_, se(e.label), 1)) : P("", !0),
    ve(o, {
      modelValue: e.selectedDate,
      "onUpdate:modelValue": [
        t[0] || (t[0] = (l) => e.selectedDate = l),
        e.emitDate
      ],
      locale: "it",
      range: e.range,
      position: "left",
      format: e.format,
      "time-picker": e.getDateType("time"),
      onOpen: e.checkIfOnlyDate,
      "select-text": "Seleziona",
      "cancel-text": "Annulla"
    }, null, 8, ["modelValue", "range", "format", "time-picker", "onOpen", "onUpdate:modelValue"])
  ], 2);
}
const U_ = /* @__PURE__ */ je(S_, [["render", P_]]);
function F_() {
  return {
    setPageTitle: (t) => {
      document.title = t;
    }
  };
}
export {
  ds as CustomButton,
  vs as CustomCheckbox,
  U_ as CustomDatePicker,
  D_ as CustomFileUpload,
  Ns as CustomLoader,
  R_ as CustomModal,
  x_ as CustomMultiCheckbox,
  M_ as CustomMultiSelect,
  N_ as CustomMultiSelectAsync,
  C_ as CustomMultipleFileUpload,
  A_ as CustomRadioGroup,
  L_ as CustomSearchInput,
  E_ as CustomSelect,
  B_ as CustomTextArea,
  V_ as CustomTooltip,
  Td as GenericInput,
  I_ as ScrollToTop,
  F_ as usePageMeta
};
