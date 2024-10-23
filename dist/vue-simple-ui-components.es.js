import { defineComponent as _e, openBlock as m, createElementBlock as $, normalizeClass as ke, renderSlot as V, createElementVNode as I, toDisplayString as ae, createTextVNode as Re, ref as q, createCommentVNode as k, Fragment as de, resolveComponent as St, renderList as Te, createBlock as fe, onMounted as tt, createVNode as he, withCtx as ie, withKeys as ue, withModifiers as Pe, withDirectives as Xe, vShow as ut, Transition as lt, computed as G, mergeProps as Fe, vModelText as ou, vModelDynamic as ns, pushScopeId as rs, popScopeId as as, normalizeStyle as Nt, reactive as ln, useSlots as qo, toRef as wa, onUnmounted as zo, watch as un, unref as g, isRef as Mt, createSlots as et, normalizeProps as rt, guardReactiveProps as bt, Teleport as os, resolveDynamicComponent as bn, nextTick as sn, onBeforeUpdate as is, getCurrentScope as ls, onScopeDispose as us } from "vue";
const ss = _e({
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
}), Ue = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, cs = ["disabled"];
function fs(e, t, n, r, a, i) {
  return m(), $("button", {
    class: ke(["custom-button", e.assignStyle()]),
    disabled: e.disabled,
    onClick: t[0] || (t[0] = (...o) => e.handleClick && e.handleClick(...o))
  }, [
    V(e.$slots, "slot-left"),
    I("span", null, ae(e.label), 1),
    V(e.$slots, "slot-right")
  ], 10, cs);
}
const ds = /* @__PURE__ */ Ue(ss, [["render", fs]]), ps = _e({
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
}), ms = ["checked", "disabled", "name"], ys = /* @__PURE__ */ I("span", { class: "checkmark" }, null, -1);
function hs(e, t, n, r, a, i) {
  return m(), $("label", {
    class: ke(["wrapper flex items-center", { disabled: e.disabled }])
  }, [
    Re(ae(e.label) + " ", 1),
    I("input", {
      class: "checkbox",
      type: "checkbox",
      checked: e.checked,
      onChange: t[0] || (t[0] = (...o) => e.updateInput && e.updateInput(...o)),
      disabled: e.disabled,
      name: e.name
    }, null, 40, ms),
    ys
  ], 2);
}
const vs = /* @__PURE__ */ Ue(ps, [["render", hs]]), bs = _e({
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
  return m(), $("div", gs, [
    e.label ? (m(), $("label", _s, ae(e.label), 1)) : k("", !0),
    I("div", ws, [
      V(e.$slots, "prepend"),
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
          e.currentFile ? (m(), $("div", ks, [
            Re(ae(e.currentFile.name) + " ", 1),
            I("div", {
              onClick: t[2] || (t[2] = (...o) => e.deleteFile && e.deleteFile(...o)),
              class: "generic-input__input-file__file__file-name__cancel"
            }, Ts)
          ])) : (m(), $("div", Ss, ae(e.placeholder), 1))
        ])
      ])
    ])
  ]);
}
const Y_ = /* @__PURE__ */ Ue(bs, [["render", Ds]]), Rs = _e({
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
  return e.loading ? (m(), $("div", {
    key: 0,
    class: ke(["spinner-border", e.size]),
    role: "status"
  }, Cs, 2)) : k("", !0);
}
const Ns = /* @__PURE__ */ Ue(Rs, [["render", Ms]]), Es = _e({
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
  return e.isOpen ? (m(), $("div", As, [
    I("div", Bs, [
      I("div", Is, [
        I("div", Ls, [
          I("div", Vs, [
            e.withoutTitle ? k("", !0) : (m(), $(de, { key: 0 }, [
              Re(ae(e.modalTitle), 1)
            ], 64))
          ]),
          I("div", {
            class: "modal-close",
            onClick: t[0] || (t[0] = (...o) => e.emitCloseModal && e.emitCloseModal(...o))
          }, Fs)
        ]),
        I("div", Ys, [
          V(e.$slots, "modal-body")
        ]),
        I("div", js, [
          V(e.$slots, "modal-footer")
        ])
      ])
    ])
  ])) : k("", !0);
}
const j_ = /* @__PURE__ */ Ue(Es, [["render", Hs]]), Ws = _e({
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
  const o = St("custom-checkbox");
  return m(), $("div", null, [
    (m(!0), $(de, null, Te(e.options, (l, f) => (m(), fe(o, {
      key: f,
      label: l.label,
      checked: e.value.includes(l.id),
      "onUpdate:checked": (u) => e.check(l.id, u)
    }, null, 8, ["label", "checked", "onUpdate:checked"]))), 128))
  ]);
}
const H_ = /* @__PURE__ */ Ue(Ws, [["render", qs]]);
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
}, mc = _t("HTMLFormElement"), yc = (e) => e.toLowerCase().replace(
  /[_-\s]([a-z\d])(\w*)/g,
  function(n, r, a) {
    return r.toUpperCase() + a;
  }
), mi = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), hc = _t("RegExp"), fu = (e, t) => {
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
  isHTMLForm: mc,
  hasOwnProperty: mi,
  hasOwnProp: mi,
  reduceDescriptors: fu,
  freezeMethods: vc,
  toObjectSet: bc,
  toCamelCase: yc,
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
var yn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, wc = typeof self == "object" ? self.FormData : window.FormData;
function Sa(e) {
  return R.isPlainObject(e) || R.isArray(e);
}
function mu(e) {
  return R.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function yi(e, t, n) {
  return e ? e.concat(t).map(function(a, i) {
    return a = mu(a), !n && i ? "[" + a + "]" : a;
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
  function u(b) {
    if (b === null)
      return "";
    if (R.isDate(b))
      return b.toISOString();
    if (!f && R.isBlob(b))
      throw new be("Blob is not supported. Use a Buffer instead.");
    return R.isArrayBuffer(b) || R.isTypedArray(b) ? f && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b;
  }
  function d(b, N, H) {
    let F = b;
    if (b && !H && typeof b == "object") {
      if (R.endsWith(N, "{}"))
        N = r ? N : N.slice(0, -2), b = JSON.stringify(b);
      else if (R.isArray(b) && Oc(b) || R.isFileList(b) || R.endsWith(N, "[]") && (F = R.toArray(b)))
        return N = mu(N), F.forEach(function(W, J) {
          !(R.isUndefined(W) || W === null) && t.append(
            o === !0 ? yi([N], J, i) : o === null ? N : N + "[]",
            u(W)
          );
        }), !1;
    }
    return Sa(b) ? !0 : (t.append(yi(H, N, i), u(b)), !1);
  }
  const s = [], p = Object.assign($c, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: Sa
  });
  function v(b, N) {
    if (!R.isUndefined(b)) {
      if (s.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + N.join("."));
      s.push(b), R.forEach(b, function(F, E) {
        (!(R.isUndefined(F) || F === null) && a.call(
          t,
          F,
          R.isString(E) ? E.trim() : E,
          N,
          p
        )) === !0 && v(F, N ? N.concat(E) : [E]);
      }), s.pop();
    }
  }
  if (!R.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), t;
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
const yu = Zo.prototype;
yu.append = function(t, n) {
  this._pairs.push([t, n]);
};
yu.toString = function(t) {
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
    const v = d && u - d;
    return v ? Math.round(p * 1e3 / v) : void 0;
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
      const v = e.auth.username || "", b = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(v + ":" + b));
    }
    const d = gu(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), hu(d, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function s() {
      if (!u)
        return;
      const v = it.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), N = {
        data: !o || o === "text" || o === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: v,
        config: e,
        request: u
      };
      Mc(function(F) {
        n(F), f();
      }, function(F) {
        r(F), f();
      }, N), u = null;
    }
    if ("onloadend" in u ? u.onloadend = s : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(s);
    }, u.onabort = function() {
      !u || (r(new be("Request aborted", be.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new be("Network Error", be.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let b = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const N = e.transitional || vu;
      e.timeoutErrorMessage && (b = e.timeoutErrorMessage), r(new be(
        b,
        N.clarifyTimeoutError ? be.ETIMEDOUT : be.ECONNABORTED,
        e,
        u
      )), u = null;
    }, gt.isStandardBrowserEnv) {
      const v = (e.withCredentials || Bc(d)) && e.xsrfCookieName && Nc.read(e.xsrfCookieName);
      v && i.set(e.xsrfHeaderName, v);
    }
    a === void 0 && i.setContentType(null), "setRequestHeader" in u && R.forEach(i.toJSON(), function(b, N) {
      u.setRequestHeader(N, b);
    }), R.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), o && o !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", _i(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", _i(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (v) => {
      !u || (r(!v || v.type ? new fn(null, e, u) : v), u.abort(), u = null);
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
class At {
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
      function(b) {
        delete n.headers[b];
      }
    ), n.headers = new it(n.headers, i);
    const o = [];
    let l = !0;
    this.interceptors.request.forEach(function(b) {
      typeof b.runWhen == "function" && b.runWhen(n) === !1 || (l = l && b.synchronous, o.unshift(b.fulfilled, b.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(b) {
      f.push(b.fulfilled, b.rejected);
    });
    let u, d = 0, s;
    if (!l) {
      const v = [Si.bind(this), void 0];
      for (v.unshift.apply(v, o), v.push.apply(v, f), s = v.length, u = Promise.resolve(n); d < s; )
        u = u.then(v[d++], v[d++]);
      return u;
    }
    s = o.length;
    let p = n;
    for (d = 0; d < s; ) {
      const v = o[d++], b = o[d++];
      try {
        p = v(p);
      } catch (N) {
        b.call(this, N);
        break;
      }
    }
    try {
      u = Si.call(this, p);
    } catch (v) {
      return Promise.reject(v);
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
  At.prototype[t] = function(n, r) {
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
  At.prototype[t] = n(), At.prototype[t + "Form"] = n(!0);
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
  const t = new At(e), n = iu(At.prototype.request, t);
  return R.extend(n, At.prototype, t, { allOwnKeys: !0 }), R.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return $u(on(e, a));
  }, n;
}
const qe = $u(qt);
qe.Axios = At;
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
const Zc = _e({
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
  const o = St("custom-button"), l = St("custom-loader");
  return m(), $("div", Jc, [
    e.label ? (m(), $("label", Kc, ae(e.label), 1)) : k("", !0),
    I("ul", Xc, [
      (m(!0), $(de, null, Te(e.fileList, (f, u) => (m(), $("li", {
        class: "file-list-item",
        key: u
      }, [
        Re(ae(f.original_name + "." + f.extension) + " ", 1),
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
        he(o, {
          label: "Carica",
          styleType: "primary",
          disabled: !1,
          onOnClick: e.handleClick
        }, {
          "slot-left": ie(() => [
            (m(), $("svg", of, uf))
          ]),
          _: 1
        }, 8, ["onOnClick"])
      ]),
      he(l, {
        loading: e.loading,
        size: "small"
      }, null, 8, ["loading"])
    ])
  ]);
}
const W_ = /* @__PURE__ */ Ue(Zc, [["render", sf]]);
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
var mf = {
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
}, yf = {
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
  mixins: [mf, yf],
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
}, vf = { class: "multiselect__tags-wrap" }, bf = { class: "multiselect__spinner" }, gf = { key: 0 }, _f = { class: "multiselect__option" }, wf = { class: "multiselect__option" }, Of = /* @__PURE__ */ Re("No elements found. Consider changing the search query."), $f = { class: "multiselect__option" }, Sf = /* @__PURE__ */ Re("List is empty.");
function kf(e, t, n, r, a, i) {
  return m(), fe("div", {
    tabindex: e.searchable ? -1 : n.tabindex,
    class: [{ "multiselect--active": e.isOpen, "multiselect--disabled": n.disabled, "multiselect--above": i.isAbove }, "multiselect"],
    onFocus: t[14] || (t[14] = (o) => e.activate()),
    onBlur: t[15] || (t[15] = (o) => e.searchable ? !1 : e.deactivate()),
    onKeydown: [
      t[16] || (t[16] = ue(Pe((o) => e.pointerForward(), ["self", "prevent"]), ["down"])),
      t[17] || (t[17] = ue(Pe((o) => e.pointerBackward(), ["self", "prevent"]), ["up"]))
    ],
    onKeypress: t[18] || (t[18] = ue(Pe((o) => e.addPointerElement(o), ["stop", "self"]), ["enter", "tab"])),
    onKeyup: t[19] || (t[19] = ue((o) => e.deactivate(), ["esc"])),
    role: "combobox",
    "aria-owns": "listbox-" + e.id
  }, [
    V(e.$slots, "caret", { toggle: e.toggle }, () => [
      he("div", {
        onMousedown: t[1] || (t[1] = Pe((o) => e.toggle(), ["prevent", "stop"])),
        class: "multiselect__select"
      }, null, 32)
    ]),
    V(e.$slots, "clear", { search: e.search }),
    he("div", hf, [
      V(e.$slots, "selection", {
        search: e.search,
        remove: e.removeElement,
        values: i.visibleValues,
        isOpen: e.isOpen
      }, () => [
        Xe(he("div", vf, [
          (m(!0), fe(de, null, Te(i.visibleValues, (o, l) => V(e.$slots, "tag", {
            option: o,
            search: e.search,
            remove: e.removeElement
          }, () => [
            (m(), fe("span", {
              class: "multiselect__tag",
              key: l
            }, [
              he("span", {
                textContent: ae(e.getOptionLabel(o))
              }, null, 8, ["textContent"]),
              he("i", {
                tabindex: "1",
                onKeypress: ue(Pe((f) => e.removeElement(o), ["prevent"]), ["enter"]),
                onMousedown: Pe((f) => e.removeElement(o), ["prevent"]),
                class: "multiselect__tag-icon"
              }, null, 40, ["onKeypress", "onMousedown"])
            ]))
          ])), 256))
        ], 512), [
          [ut, i.visibleValues.length > 0]
        ]),
        e.internalValue && e.internalValue.length > n.limit ? V(e.$slots, "limit", { key: 0 }, () => [
          he("strong", {
            class: "multiselect__strong",
            textContent: ae(n.limitText(e.internalValue.length - n.limit))
          }, null, 8, ["textContent"])
        ]) : k("v-if", !0)
      ]),
      he(lt, { name: "multiselect__loading" }, {
        default: ie(() => [
          V(e.$slots, "loading", {}, () => [
            Xe(he("div", bf, null, 512), [
              [ut, n.loading]
            ])
          ])
        ]),
        _: 3
      }),
      e.searchable ? (m(), fe("input", {
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
        onFocus: t[3] || (t[3] = Pe((o) => e.activate(), ["prevent"])),
        onBlur: t[4] || (t[4] = Pe((o) => e.deactivate(), ["prevent"])),
        onKeyup: t[5] || (t[5] = ue((o) => e.deactivate(), ["esc"])),
        onKeydown: [
          t[6] || (t[6] = ue(Pe((o) => e.pointerForward(), ["prevent"]), ["down"])),
          t[7] || (t[7] = ue(Pe((o) => e.pointerBackward(), ["prevent"]), ["up"])),
          t[9] || (t[9] = ue(Pe((o) => e.removeLastElement(), ["stop"]), ["delete"]))
        ],
        onKeypress: t[8] || (t[8] = ue(Pe((o) => e.addPointerElement(o), ["prevent", "stop", "self"]), ["enter"])),
        class: "multiselect__input",
        "aria-controls": "listbox-" + e.id
      }, null, 44, ["name", "id", "placeholder", "value", "disabled", "tabindex", "aria-controls"])) : k("v-if", !0),
      i.isSingleLabelVisible ? (m(), fe("span", {
        key: 1,
        class: "multiselect__single",
        onMousedown: t[10] || (t[10] = Pe((...o) => e.toggle && e.toggle(...o), ["prevent"]))
      }, [
        V(e.$slots, "singleLabel", { option: i.singleValue }, () => [
          Re(ae(e.currentOptionLabel), 1)
        ])
      ], 32)) : k("v-if", !0),
      i.isPlaceholderVisible ? (m(), fe("span", {
        key: 2,
        class: "multiselect__placeholder",
        onMousedown: t[11] || (t[11] = Pe((...o) => e.toggle && e.toggle(...o), ["prevent"]))
      }, [
        V(e.$slots, "placeholder", {}, () => [
          Re(ae(e.placeholder), 1)
        ])
      ], 32)) : k("v-if", !0)
    ], 512),
    he(lt, { name: "multiselect" }, {
      default: ie(() => [
        Xe(he("div", {
          class: "multiselect__content-wrapper",
          onFocus: t[12] || (t[12] = (...o) => e.activate && e.activate(...o)),
          tabindex: "-1",
          onMousedown: t[13] || (t[13] = Pe(() => {
          }, ["prevent"])),
          style: { maxHeight: e.optimizedHeight + "px" },
          ref: "list"
        }, [
          he("ul", {
            class: "multiselect__content",
            style: i.contentStyle,
            role: "listbox",
            id: "listbox-" + e.id
          }, [
            V(e.$slots, "beforeList"),
            e.multiple && e.max === e.internalValue.length ? (m(), fe("li", gf, [
              he("span", _f, [
                V(e.$slots, "maxElements", {}, () => [
                  Re("Maximum of " + ae(e.max) + " options selected. First remove a selected option to select another.", 1)
                ])
              ])
            ])) : k("v-if", !0),
            !e.max || e.internalValue.length < e.max ? (m(!0), fe(de, { key: 1 }, Te(e.filteredOptions, (o, l) => (m(), fe("li", {
              class: "multiselect__element",
              key: l,
              id: e.id + "-" + l,
              role: o && (o.$isLabel || o.$isDisabled) ? null : "option"
            }, [
              o && (o.$isLabel || o.$isDisabled) ? k("v-if", !0) : (m(), fe("span", {
                key: 0,
                class: [e.optionHighlight(l, o), "multiselect__option"],
                onClick: Pe((f) => e.select(o), ["stop"]),
                onMouseenter: Pe((f) => e.pointerSet(l), ["self"]),
                "data-select": o && o.isTag ? e.tagPlaceholder : i.selectLabelText,
                "data-selected": i.selectedLabelText,
                "data-deselect": i.deselectLabelText
              }, [
                V(e.$slots, "option", {
                  option: o,
                  search: e.search,
                  index: l
                }, () => [
                  he("span", null, ae(e.getOptionLabel(o)), 1)
                ])
              ], 42, ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"])),
              o && (o.$isLabel || o.$isDisabled) ? (m(), fe("span", {
                key: 1,
                "data-select": e.groupSelect && i.selectGroupLabelText,
                "data-deselect": e.groupSelect && i.deselectGroupLabelText,
                class: [e.groupHighlight(l, o), "multiselect__option"],
                onMouseenter: Pe((f) => e.groupSelect && e.pointerSet(l), ["self"]),
                onMousedown: Pe((f) => e.selectGroup(o), ["prevent"])
              }, [
                V(e.$slots, "option", {
                  option: o,
                  search: e.search,
                  index: l
                }, () => [
                  he("span", null, ae(e.getOptionLabel(o)), 1)
                ])
              ], 42, ["data-select", "data-deselect", "onMouseenter", "onMousedown"])) : k("v-if", !0)
            ], 8, ["id", "role"]))), 128)) : k("v-if", !0),
            Xe(he("li", null, [
              he("span", wf, [
                V(e.$slots, "noResult", { search: e.search }, () => [
                  Of
                ])
              ])
            ], 512), [
              [ut, n.showNoResults && e.filteredOptions.length === 0 && e.search && !n.loading]
            ]),
            Xe(he("li", null, [
              he("span", $f, [
                V(e.$slots, "noOptions", {}, () => [
                  Sf
                ])
              ])
            ], 512), [
              [ut, n.showNoOptions && e.options.length === 0 && !e.search && !n.loading]
            ]),
            V(e.$slots, "afterList")
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
const Pf = _e({
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
  const o = St("vue-multiselect");
  return m(), $("div", Tf, [
    e.label ? (m(), $("label", Df, ae(e.label), 1)) : k("", !0),
    he(o, {
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
      noResult: ie(() => [
        Re(" Nessun risultato. ")
      ]),
      tag: ie((l) => [
        I("div", Rf, [
          I("span", xf, [
            I("span", null, ae(l.option.label), 1),
            I("i", {
              onClick: (f) => e.removeOption(l.option),
              tabindex: "1",
              class: "multiselect__tag-icon"
            }, null, 8, Cf)
          ])
        ])
      ]),
      option: ie((l) => [
        Re(ae(l.option.label), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "options", "placeholder", "onSearchChange"])
  ]);
}
const q_ = /* @__PURE__ */ Ue(Pf, [["render", Mf]]);
var Nf = "Expected a function", Ti = 0 / 0, Ef = "[object Symbol]", Af = /^\s+|\s+$/g, Bf = /^[-+]0x[0-9a-f]+$/i, If = /^0b[01]+$/i, Lf = /^0o[0-7]+$/i, Vf = parseInt, Uf = typeof yn == "object" && yn && yn.Object === Object && yn, Ff = typeof self == "object" && self && self.Object === Object && self, Yf = Uf || Ff || Function("return this")(), jf = Object.prototype, Hf = jf.toString, Wf = Math.max, qf = Math.min, ia = function() {
  return Yf.Date.now();
};
function zf(e, t, n) {
  var r, a, i, o, l, f, u = 0, d = !1, s = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Nf);
  t = Di(t) || 0, Pa(n) && (d = !!n.leading, s = "maxWait" in n, i = s ? Wf(Di(n.maxWait) || 0, t) : i, p = "trailing" in n ? !!n.trailing : p);
  function v(h) {
    var x = r, Y = a;
    return r = a = void 0, u = h, o = e.apply(Y, x), o;
  }
  function b(h) {
    return u = h, l = setTimeout(F, t), d ? v(h) : o;
  }
  function N(h) {
    var x = h - f, Y = h - u, Q = t - x;
    return s ? qf(Q, i - Y) : Q;
  }
  function H(h) {
    var x = h - f, Y = h - u;
    return f === void 0 || x >= t || x < 0 || s && Y >= i;
  }
  function F() {
    var h = ia();
    if (H(h))
      return E(h);
    l = setTimeout(F, N(h));
  }
  function E(h) {
    return l = void 0, p && r ? v(h) : (r = a = void 0, o);
  }
  function W() {
    l !== void 0 && clearTimeout(l), u = 0, r = f = a = l = void 0;
  }
  function J() {
    return l === void 0 ? o : E(ia());
  }
  function re() {
    var h = ia(), x = H(h);
    if (r = arguments, a = this, f = h, x) {
      if (l === void 0)
        return b(f);
      if (s)
        return l = setTimeout(F, t), v(f);
    }
    return l === void 0 && (l = setTimeout(F, t)), o;
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
const Jf = _e({
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
  const o = St("vue-multiselect");
  return m(), $("div", Kf, [
    e.label ? (m(), $("label", Xf, ae(e.label), 1)) : k("", !0),
    he(o, {
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
      noResult: ie(() => [
        Re(" Nessun risultato. ")
      ]),
      tag: ie((l) => [
        I("div", ed, [
          I("span", td, [
            I("span", null, ae(l.option.label), 1),
            I("i", {
              onClick: (f) => e.removeOption(l.option),
              tabindex: "1",
              class: "multiselect__tag-icon"
            }, null, 8, nd)
          ])
        ])
      ]),
      option: ie((l) => [
        Re(ae(l.option.label), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "options", "placeholder", "onSearchChange", "loading"])
  ]);
}
const z_ = /* @__PURE__ */ Ue(Jf, [["render", rd]]), ad = _e({
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
  return m(), $("div", od, [
    e.label ? (m(), $("label", id, ae(e.label), 1)) : k("", !0),
    I("select", {
      name: e.name,
      class: "custom-select__select",
      id: "select_" + e.name,
      onChange: t[0] || (t[0] = (...o) => e.handleSelectChange && e.handleSelectChange(...o)),
      disabled: e.disabled
    }, [
      I("option", ud, ae(e.placeholder), 1),
      (m(!0), $(de, null, Te(e.options, (o, l) => (m(), $("option", {
        key: l,
        value: o.value,
        selected: o.value == e.value
      }, ae(o.label), 9, sd))), 128))
    ], 40, ld)
  ]);
}
const G_ = /* @__PURE__ */ Ue(ad, [["render", cd]]), fd = _e({
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
}), dd = { class: "custom-radio-group" }, pd = ["name", "id", "value", "disabled", "checked"], md = ["onClick"], yd = ["for"];
function hd(e, t, n, r, a, i) {
  return m(), $("div", dd, [
    (m(!0), $(de, null, Te(e.options, (o) => (m(), $("div", {
      key: o.id,
      class: ke([{ disabled: o.disabled, checked: o.value == e.value }, "custom-radio-group__single-radio"])
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
      }, null, 8, md),
      I("label", {
        class: "custom-radio-group__single-radio__radio-label",
        for: o.id
      }, ae(o.label), 9, yd)
    ], 2))), 128))
  ]);
}
const Q_ = /* @__PURE__ */ Ue(fd, [["render", hd]]), vd = _e({
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
  return m(), $("div", bd, [
    e.label ? (m(), $("label", gd, ae(e.label), 1)) : k("", !0),
    Xe(I("textarea", Fe(e.$attrs, {
      "onUpdate:modelValue": t[0] || (t[0] = (o) => e.computedValue = o),
      class: "generic-input__input " + e.classes
    }), null, 16), [
      [ou, e.computedValue]
    ])
  ]);
}
const Z_ = /* @__PURE__ */ Ue(vd, [["render", _d]]), wd = _e({
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
  return m(), $("div", Od, [
    e.label ? (m(), $("label", $d, ae(e.label), 1)) : k("", !0),
    I("div", Sd, [
      V(e.$slots, "prepend"),
      e.readOnly ? k("", !0) : Xe((m(), $("input", Fe({ key: 0 }, e.$attrs, {
        "onUpdate:modelValue": t[0] || (t[0] = (o) => e.computedValue = o),
        class: "generic-input__input " + e.classes
      }), null, 16)), [
        [ns, e.computedValue]
      ])
    ]),
    e.readOnly ? (m(), $("div", kd, ae(e.computedValue), 1)) : k("", !0)
  ]);
}
const Td = /* @__PURE__ */ Ue(wd, [["render", Pd]]), Dd = _e({
  name: "Breadcrumbs",
  props: {
    path_breadcrumbs: {
      type: Array,
      required: !0,
      default: []
    }
  }
}), Rd = { class: "text-secondary text-xl" }, xd = {
  key: 0,
  class: "font-bold"
}, Cd = { key: 1 };
function Md(e, t, n, r, a, i) {
  const o = St("router-link");
  return m(), $("div", Rd, [
    (m(!0), $(de, null, Te(e.path_breadcrumbs, (l, f) => (m(), $(de, { key: f }, [
      f === e.path_breadcrumbs.length - 1 ? (m(), $("span", xd, ae(l.label), 1)) : (m(), $(de, { key: 1 }, [
        l.path ? (m(), fe(o, {
          key: 0,
          to: l.path,
          class: "cursor-pointer hover:underline"
        }, {
          default: ie(() => [
            Re(ae(l.label), 1)
          ]),
          _: 2
        }, 1032, ["to"])) : (m(), $("span", Cd, ae(l.label), 1)),
        Re(" / ")
      ], 64))
    ], 64))), 128))
  ]);
}
const Nd = /* @__PURE__ */ Ue(Dd, [["render", Md]]), Ed = _e({
  name: "FormSeparator"
}), Ad = {
  style: { width: "calc(100% + 2 * 24px)", transform: "translateX(-24px)" },
  class: "border-secondaryLight mb-8 mt-9"
};
function Bd(e, t, n, r, a, i) {
  return m(), $("hr", Ad);
}
const J_ = /* @__PURE__ */ Ue(Ed, [["render", Bd]]), Id = _e({
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
const Ld = (e) => (rs("data-v-7e204a81"), e = e(), as(), e), Vd = /* @__PURE__ */ Ld(() => /* @__PURE__ */ I("svg", {
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
], -1)), Ud = [
  Vd
];
function Fd(e, t, n, r, a, i) {
  return m(), fe(lt, null, {
    default: ie(() => [
      Xe(I("div", {
        onClick: t[0] || (t[0] = (...o) => e.trigger && e.trigger(...o)),
        ref: "scrollToTop",
        class: "fixed z-50 bottom-10 right-5 w-12 h-12 bg-secondary hover:bg-secondaryHover transition rounded-full flex items-center justify-center cursor-pointer shadow"
      }, Ud, 512), [
        [ut, e.buttonVisible]
      ])
    ]),
    _: 1
  });
}
const K_ = /* @__PURE__ */ Ue(Id, [["render", Fd], ["__scopeId", "data-v-7e204a81"]]), Yd = _e({
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
}), jd = { class: "custom-search-input flex items-center cursor-pointer" }, Hd = { class: "search-box shadow" }, Wd = ["placeholder"], qd = /* @__PURE__ */ I("svg", {
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
], -1), zd = [
  qd
];
function Gd(e, t, n, r, a, i) {
  return m(), $("div", jd, [
    I("div", Hd, [
      Xe(I("input", {
        onKeyup: t[0] || (t[0] = ue((...o) => e.emitSearch && e.emitSearch(...o), ["enter"])),
        class: "search-input text-textGrey font-medium",
        type: "text",
        "onUpdate:modelValue": t[1] || (t[1] = (o) => e.searchQuery = o),
        placeholder: e.placeholder
      }, null, 40, Wd), [
        [ou, e.searchQuery]
      ]),
      I("div", {
        onClick: t[2] || (t[2] = (...o) => e.emitSearch && e.emitSearch(...o)),
        class: "search-btn bg-textGrey hover:bg-customBlack transition h-9 w-9 rounded-full flex items-center justify-center"
      }, zd)
    ])
  ]);
}
const X_ = /* @__PURE__ */ Ue(Yd, [["render", Gd]]), Qd = _e({
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
function Zd(e, t, n, r, a, i) {
  return m(), $("div", {
    onMouseover: t[0] || (t[0] = (...o) => e.onMouseOver && e.onMouseOver(...o)),
    onMouseleave: t[1] || (t[1] = (...o) => e.onMouseLeave && e.onMouseLeave(...o)),
    class: "inline-flex flex-col relative cursor-pointer"
  }, [
    V(e.$slots, "target", {}, void 0, !0),
    he(lt, null, {
      default: ie(() => [
        Xe(I("div", {
          style: Nt(`background-color: ${e.backroundColor}; --background-color: ${e.backroundColor}; --max-width: ${e.maxWidth}px`),
          class: ke(["absolute w-max z-50 p-3 shadow cursor-auto rounded-lg text-white text-sm", e.getClassPosition()])
        }, [
          V(e.$slots, "content", {}, void 0, !0)
        ], 6), [
          [ut, e.hovered]
        ])
      ]),
      _: 3
    })
  ], 32);
}
const ew = /* @__PURE__ */ Ue(Qd, [["render", Zd], ["__scopeId", "data-v-3f54f249"]]);
function le(e) {
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
function se(e) {
  X(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || wn(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function $t(e, t) {
  X(2, arguments);
  var n = se(e), r = le(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function pt(e, t) {
  X(2, arguments);
  var n = se(e), r = le(t);
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
  var n = t.years ? le(t.years) : 0, r = t.months ? le(t.months) : 0, a = t.weeks ? le(t.weeks) : 0, i = t.days ? le(t.days) : 0, o = t.hours ? le(t.hours) : 0, l = t.minutes ? le(t.minutes) : 0, f = t.seconds ? le(t.seconds) : 0, u = se(e), d = r || n ? pt(u, r + n * 12) : u, s = i || a ? $t(d, i + a * 7) : d, p = l + o * 60, v = f + p * 60, b = v * 1e3, N = new Date(s.getTime() + b);
  return N;
}
function Jd(e, t) {
  X(2, arguments);
  var n = se(e).getTime(), r = le(t);
  return new Date(n + r);
}
var Kd = {};
function kt() {
  return Kd;
}
function Ta(e, t) {
  var n, r, a, i, o, l, f, u;
  X(1, arguments);
  var d = kt(), s = le((n = (r = (a = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && a !== void 0 ? a : d.weekStartsOn) !== null && r !== void 0 ? r : (f = d.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(s >= 0 && s <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = se(e), v = p.getDay(), b = (v < s ? 7 : 0) + v - s;
  return p.setDate(p.getDate() - b), p.setHours(0, 0, 0, 0), p;
}
function ur(e) {
  return X(1, arguments), Ta(e, {
    weekStartsOn: 1
  });
}
function Xd(e) {
  X(1, arguments);
  var t = se(e), n = t.getFullYear(), r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var a = ur(r), i = new Date(0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  var o = ur(i);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function ep(e) {
  X(1, arguments);
  var t = Xd(e), n = new Date(0);
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
  var t = se(e);
  return t.setHours(0, 0, 0, 0), t;
}
var tp = 864e5;
function np(e, t) {
  X(2, arguments);
  var n = Ri(e), r = Ri(t), a = n.getTime() - sr(n), i = r.getTime() - sr(r);
  return Math.round((a - i) / tp);
}
function Pu(e, t) {
  X(2, arguments);
  var n = le(t);
  return pt(e, n * 12);
}
var ei = 6e4, ti = 36e5, rp = 1e3;
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
  var t = se(e);
  return !isNaN(Number(t));
}
function xi(e, t) {
  var n;
  X(1, arguments);
  var r = e || {}, a = se(r.start), i = se(r.end), o = i.getTime();
  if (!(a.getTime() <= o))
    throw new RangeError("Invalid interval");
  var l = [], f = a;
  f.setHours(0, 0, 0, 0);
  var u = Number((n = t == null ? void 0 : t.step) !== null && n !== void 0 ? n : 1);
  if (u < 1 || isNaN(u))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; f.getTime() <= o; )
    l.push(se(f)), f.setDate(f.getDate() + u), f.setHours(0, 0, 0, 0);
  return l;
}
function ap(e, t) {
  var n, r, a, i, o, l, f, u;
  X(1, arguments);
  var d = kt(), s = le((n = (r = (a = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && a !== void 0 ? a : d.weekStartsOn) !== null && r !== void 0 ? r : (f = d.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(s >= 0 && s <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = se(e), v = p.getDay(), b = (v < s ? -7 : 0) + 6 - (v - s);
  return p.setDate(p.getDate() + b), p.setHours(23, 59, 59, 999), p;
}
function Du(e, t) {
  X(2, arguments);
  var n = le(t);
  return Jd(e, -n);
}
var op = 864e5;
function ip(e) {
  X(1, arguments);
  var t = se(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), a = n - r;
  return Math.floor(a / op) + 1;
}
function jt(e) {
  X(1, arguments);
  var t = 1, n = se(e), r = n.getUTCDay(), a = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n;
}
function Ru(e) {
  X(1, arguments);
  var t = se(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = jt(r), i = new Date(0);
  i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var o = jt(i);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function lp(e) {
  X(1, arguments);
  var t = Ru(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = jt(n);
  return r;
}
var up = 6048e5;
function xu(e) {
  X(1, arguments);
  var t = se(e), n = jt(t).getTime() - lp(t).getTime();
  return Math.round(n / up) + 1;
}
function It(e, t) {
  var n, r, a, i, o, l, f, u;
  X(1, arguments);
  var d = kt(), s = le((n = (r = (a = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && a !== void 0 ? a : d.weekStartsOn) !== null && r !== void 0 ? r : (f = d.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(s >= 0 && s <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = se(e), v = p.getUTCDay(), b = (v < s ? 7 : 0) + v - s;
  return p.setUTCDate(p.getUTCDate() - b), p.setUTCHours(0, 0, 0, 0), p;
}
function ni(e, t) {
  var n, r, a, i, o, l, f, u;
  X(1, arguments);
  var d = se(e), s = d.getUTCFullYear(), p = kt(), v = le((n = (r = (a = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && a !== void 0 ? a : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (f = p.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(v >= 1 && v <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var b = new Date(0);
  b.setUTCFullYear(s + 1, 0, v), b.setUTCHours(0, 0, 0, 0);
  var N = It(b, t), H = new Date(0);
  H.setUTCFullYear(s, 0, v), H.setUTCHours(0, 0, 0, 0);
  var F = It(H, t);
  return d.getTime() >= N.getTime() ? s + 1 : d.getTime() >= F.getTime() ? s : s - 1;
}
function sp(e, t) {
  var n, r, a, i, o, l, f, u;
  X(1, arguments);
  var d = kt(), s = le((n = (r = (a = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (o = t.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && a !== void 0 ? a : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (f = d.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = ni(e, t), v = new Date(0);
  v.setUTCFullYear(p, 0, s), v.setUTCHours(0, 0, 0, 0);
  var b = It(v, t);
  return b;
}
var cp = 6048e5;
function Cu(e, t) {
  X(1, arguments);
  var n = se(e), r = It(n, t).getTime() - sp(n, t).getTime();
  return Math.round(r / cp) + 1;
}
function Se(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var fp = {
  y: function(t, n) {
    var r = t.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return Se(n === "yy" ? a % 100 : a, n.length);
  },
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : Se(r + 1, 2);
  },
  d: function(t, n) {
    return Se(t.getUTCDate(), n.length);
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
    return Se(t.getUTCHours() % 12 || 12, n.length);
  },
  H: function(t, n) {
    return Se(t.getUTCHours(), n.length);
  },
  m: function(t, n) {
    return Se(t.getUTCMinutes(), n.length);
  },
  s: function(t, n) {
    return Se(t.getUTCSeconds(), n.length);
  },
  S: function(t, n) {
    var r = n.length, a = t.getUTCMilliseconds(), i = Math.floor(a * Math.pow(10, r - 3));
    return Se(i, n.length);
  }
};
const Ot = fp;
var Ut = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, dp = {
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
      return Se(l, 2);
    }
    return n === "Yo" ? r.ordinalNumber(o, {
      unit: "year"
    }) : Se(o, n.length);
  },
  R: function(t, n) {
    var r = Ru(t);
    return Se(r, n.length);
  },
  u: function(t, n) {
    var r = t.getUTCFullYear();
    return Se(r, n.length);
  },
  Q: function(t, n, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(a);
      case "QQ":
        return Se(a, 2);
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
        return Se(a, 2);
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
        return Se(a + 1, 2);
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
    }) : Se(i, n.length);
  },
  I: function(t, n, r) {
    var a = xu(t);
    return n === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : Se(a, n.length);
  },
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Ot.d(t, n);
  },
  D: function(t, n, r) {
    var a = ip(t);
    return n === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : Se(a, n.length);
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
        return Se(o, 2);
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
        return Se(o, n.length);
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
        return Se(i, n.length);
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
    switch (a === 12 ? i = Ut.noon : a === 0 ? i = Ut.midnight : i = a / 12 >= 1 ? "pm" : "am", n) {
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
    switch (a >= 17 ? i = Ut.evening : a >= 12 ? i = Ut.afternoon : a >= 4 ? i = Ut.morning : i = Ut.night, n) {
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
    }) : Se(a, n.length);
  },
  k: function(t, n, r) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), n === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : Se(a, n.length);
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
        return Ct(o);
      case "XXXXX":
      case "XXX":
      default:
        return Ct(o, ":");
    }
  },
  x: function(t, n, r, a) {
    var i = a._originalDate || t, o = i.getTimezoneOffset();
    switch (n) {
      case "x":
        return Mi(o);
      case "xxxx":
      case "xx":
        return Ct(o);
      case "xxxxx":
      case "xxx":
      default:
        return Ct(o, ":");
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
        return "GMT" + Ct(o, ":");
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
        return "GMT" + Ct(o, ":");
    }
  },
  t: function(t, n, r, a) {
    var i = a._originalDate || t, o = Math.floor(i.getTime() / 1e3);
    return Se(o, n.length);
  },
  T: function(t, n, r, a) {
    var i = a._originalDate || t, o = i.getTime();
    return Se(o, n.length);
  }
};
function Ci(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.floor(r / 60), i = r % 60;
  if (i === 0)
    return n + String(a);
  var o = t || "";
  return n + String(a) + o + Se(i, 2);
}
function Mi(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + Se(Math.abs(e) / 60, 2);
  }
  return Ct(e, t);
}
function Ct(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", a = Math.abs(e), i = Se(Math.floor(a / 60), 2), o = Se(a % 60, 2);
  return r + i + n + o;
}
const pp = dp;
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
}, mp = function(t, n) {
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
}, yp = {
  p: Mu,
  P: mp
};
const Da = yp;
var hp = ["D", "DD"], vp = ["YY", "YYYY"];
function Nu(e) {
  return hp.indexOf(e) !== -1;
}
function Eu(e) {
  return vp.indexOf(e) !== -1;
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
var bp = {
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
}, gp = function(t, n, r) {
  var a, i = bp[t];
  return typeof i == "string" ? a = i : n === 1 ? a = i.one : a = i.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const _p = gp;
function la(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var wp = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Op = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, $p = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Sp = {
  date: la({
    formats: wp,
    defaultWidth: "full"
  }),
  time: la({
    formats: Op,
    defaultWidth: "full"
  }),
  dateTime: la({
    formats: $p,
    defaultWidth: "full"
  })
};
const kp = Sp;
var Pp = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Tp = function(t, n, r, a) {
  return Pp[t];
};
const Dp = Tp;
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
var Rp = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, xp = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Cp = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Mp = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Np = {
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
}, Ep = {
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
}, Ap = function(t, n) {
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
}, Bp = {
  ordinalNumber: Ap,
  era: Zt({
    values: Rp,
    defaultWidth: "wide"
  }),
  quarter: Zt({
    values: xp,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Zt({
    values: Cp,
    defaultWidth: "wide"
  }),
  day: Zt({
    values: Mp,
    defaultWidth: "wide"
  }),
  dayPeriod: Zt({
    values: Np,
    defaultWidth: "wide",
    formattingValues: Ep,
    defaultFormattingWidth: "wide"
  })
};
const Ip = Bp;
function Jt(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(a);
    if (!i)
      return null;
    var o = i[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], f = Array.isArray(l) ? Vp(l, function(s) {
      return s.test(o);
    }) : Lp(l, function(s) {
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
function Lp(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function Vp(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Up(e) {
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
var Fp = /^(\d+)(th|st|nd|rd)?/i, Yp = /\d+/i, jp = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Hp = {
  any: [/^b/i, /^(a|c)/i]
}, Wp = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, qp = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, zp = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Gp = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Qp = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Zp = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Jp = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Kp = {
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
}, Xp = {
  ordinalNumber: Up({
    matchPattern: Fp,
    parsePattern: Yp,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Jt({
    matchPatterns: jp,
    defaultMatchWidth: "wide",
    parsePatterns: Hp,
    defaultParseWidth: "any"
  }),
  quarter: Jt({
    matchPatterns: Wp,
    defaultMatchWidth: "wide",
    parsePatterns: qp,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Jt({
    matchPatterns: zp,
    defaultMatchWidth: "wide",
    parsePatterns: Gp,
    defaultParseWidth: "any"
  }),
  day: Jt({
    matchPatterns: Qp,
    defaultMatchWidth: "wide",
    parsePatterns: Zp,
    defaultParseWidth: "any"
  }),
  dayPeriod: Jt({
    matchPatterns: Jp,
    defaultMatchWidth: "any",
    parsePatterns: Kp,
    defaultParseWidth: "any"
  })
};
const em = Xp;
var tm = {
  code: "en-US",
  formatDistance: _p,
  formatLong: kp,
  formatRelative: Dp,
  localize: Ip,
  match: em,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Au = tm;
var nm = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, rm = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, am = /^'([^]*?)'?$/, om = /''/g, im = /[a-zA-Z]/;
function nn(e, t, n) {
  var r, a, i, o, l, f, u, d, s, p, v, b, N, H, F, E, W, J;
  X(2, arguments);
  var re = String(t), h = kt(), x = (r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : h.locale) !== null && r !== void 0 ? r : Au, Y = le((i = (o = (l = (f = n == null ? void 0 : n.firstWeekContainsDate) !== null && f !== void 0 ? f : n == null || (u = n.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && l !== void 0 ? l : h.firstWeekContainsDate) !== null && o !== void 0 ? o : (s = h.locale) === null || s === void 0 || (p = s.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(Y >= 1 && Y <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var Q = le((v = (b = (N = (H = n == null ? void 0 : n.weekStartsOn) !== null && H !== void 0 ? H : n == null || (F = n.locale) === null || F === void 0 || (E = F.options) === null || E === void 0 ? void 0 : E.weekStartsOn) !== null && N !== void 0 ? N : h.weekStartsOn) !== null && b !== void 0 ? b : (W = h.locale) === null || W === void 0 || (J = W.options) === null || J === void 0 ? void 0 : J.weekStartsOn) !== null && v !== void 0 ? v : 0);
  if (!(Q >= 0 && Q <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!x.localize)
    throw new RangeError("locale must contain localize property");
  if (!x.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var ne = se(e);
  if (!tn(ne))
    throw new RangeError("Invalid time value");
  var U = sr(ne), Z = Du(ne, U), P = {
    firstWeekContainsDate: Y,
    weekStartsOn: Q,
    locale: x,
    _originalDate: ne
  }, _ = re.match(rm).map(function(C) {
    var M = C[0];
    if (M === "p" || M === "P") {
      var c = Da[M];
      return c(C, x.formatLong);
    }
    return C;
  }).join("").match(nm).map(function(C) {
    if (C === "''")
      return "'";
    var M = C[0];
    if (M === "'")
      return lm(C);
    var c = pp[M];
    if (c)
      return !(n != null && n.useAdditionalWeekYearTokens) && Eu(C) && cr(C, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && Nu(C) && cr(C, t, String(e)), c(Z, C, x.localize, P);
    if (M.match(im))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + M + "`");
    return C;
  }).join("");
  return _;
}
function lm(e) {
  var t = e.match(am);
  return t ? t[1].replace(om, "'") : e;
}
function um(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e;
}
function sm(e) {
  X(1, arguments);
  var t = se(e), n = t.getDay();
  return n;
}
function cm(e) {
  X(1, arguments);
  var t = se(e), n = t.getFullYear(), r = t.getMonth(), a = new Date(0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function ht(e) {
  X(1, arguments);
  var t = se(e), n = t.getHours();
  return n;
}
var fm = 6048e5;
function dm(e) {
  X(1, arguments);
  var t = se(e), n = ur(t).getTime() - ep(t).getTime();
  return Math.round(n / fm) + 1;
}
function vt(e) {
  X(1, arguments);
  var t = se(e), n = t.getMinutes();
  return n;
}
function Me(e) {
  X(1, arguments);
  var t = se(e), n = t.getMonth();
  return n;
}
function Ht(e) {
  X(1, arguments);
  var t = se(e), n = t.getSeconds();
  return n;
}
function Ne(e) {
  return X(1, arguments), se(e).getFullYear();
}
function ri(e, t) {
  X(2, arguments);
  var n = se(e), r = se(t);
  return n.getTime() > r.getTime();
}
function ai(e, t) {
  X(2, arguments);
  var n = se(e), r = se(t);
  return n.getTime() < r.getTime();
}
function Bu(e, t) {
  X(2, arguments);
  var n = se(e), r = se(t);
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
  var t = mm();
  return function() {
    var r = fr(e), a;
    if (t) {
      var i = fr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return pm(this, a);
  };
}
function pm(e, t) {
  return t && (Sn(t) === "object" || typeof t == "function") ? t : xa(e);
}
function xa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mm() {
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
var ym = 10, Vu = /* @__PURE__ */ function() {
  function e() {
    oi(this, e), Ca(this, "subPriority", 0);
  }
  return ii(e, [{
    key: "validate",
    value: function(n, r) {
      return !0;
    }
  }]), e;
}(), hm = /* @__PURE__ */ function(e) {
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
}(Vu), vm = /* @__PURE__ */ function(e) {
  Iu(n, e);
  var t = Lu(n);
  function n() {
    var r;
    oi(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Ca(xa(r), "priority", ym), Ca(xa(r), "subPriority", -1), r;
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
function bm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ai(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function gm(e, t, n) {
  return t && Ai(e.prototype, t), n && Ai(e, n), e;
}
var we = /* @__PURE__ */ function() {
  function e() {
    bm(this, e);
  }
  return gm(e, [{
    key: "run",
    value: function(n, r, a, i) {
      var o = this.parse(n, r, a, i);
      return o ? {
        setter: new hm(o.value, this.validate, this.set, this.priority, this.subPriority),
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
function _m(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function wm(e, t, n) {
  return t && Bi(e.prototype, t), n && Bi(e, n), e;
}
function Om(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ma(e, t);
}
function Ma(e, t) {
  return Ma = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ma(e, t);
}
function $m(e) {
  var t = km();
  return function() {
    var r = dr(e), a;
    if (t) {
      var i = dr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Sm(this, a);
  };
}
function Sm(e, t) {
  return t && (kn(t) === "object" || typeof t == "function") ? t : Na(e);
}
function Na(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function km() {
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
var Pm = /* @__PURE__ */ function(e) {
  Om(n, e);
  var t = $m(n);
  function n() {
    var r;
    _m(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Ii(Na(r), "priority", 140), Ii(Na(r), "incompatibleTokens", ["R", "u", "t", "T"]), r;
  }
  return wm(n, [{
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
}(we), Le = {
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
function Ee(e, t) {
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
    value: r * (a * ti + i * ei + o * rp),
    rest: t.slice(n[0].length)
  };
}
function Uu(e) {
  return Ee(Le.anyDigitsSigned, e);
}
function Be(e, t) {
  switch (e) {
    case 1:
      return Ee(Le.singleDigit, t);
    case 2:
      return Ee(Le.twoDigits, t);
    case 3:
      return Ee(Le.threeDigits, t);
    case 4:
      return Ee(Le.fourDigits, t);
    default:
      return Ee(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function pr(e, t) {
  switch (e) {
    case 1:
      return Ee(Le.singleDigitSigned, t);
    case 2:
      return Ee(Le.twoDigitsSigned, t);
    case 3:
      return Ee(Le.threeDigitsSigned, t);
    case 4:
      return Ee(Le.fourDigitsSigned, t);
    default:
      return Ee(new RegExp("^-?\\d{1," + e + "}"), t);
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
function Tm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Li(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Dm(e, t, n) {
  return t && Li(e.prototype, t), n && Li(e, n), e;
}
function Rm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ea(e, t);
}
function Ea(e, t) {
  return Ea = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ea(e, t);
}
function xm(e) {
  var t = Mm();
  return function() {
    var r = mr(e), a;
    if (t) {
      var i = mr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Cm(this, a);
  };
}
function Cm(e, t) {
  return t && (Pn(t) === "object" || typeof t == "function") ? t : Aa(e);
}
function Aa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Mm() {
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
function Vi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Nm = /* @__PURE__ */ function(e) {
  Rm(n, e);
  var t = xm(n);
  function n() {
    var r;
    Tm(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Vi(Aa(r), "priority", 130), Vi(Aa(r), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return Dm(n, [{
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
}(we);
function Tn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Tn = function(n) {
    return typeof n;
  } : Tn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Tn(e);
}
function Em(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ui(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Am(e, t, n) {
  return t && Ui(e.prototype, t), n && Ui(e, n), e;
}
function Bm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ba(e, t);
}
function Ba(e, t) {
  return Ba = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ba(e, t);
}
function Im(e) {
  var t = Vm();
  return function() {
    var r = yr(e), a;
    if (t) {
      var i = yr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Lm(this, a);
  };
}
function Lm(e, t) {
  return t && (Tn(t) === "object" || typeof t == "function") ? t : Ia(e);
}
function Ia(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vm() {
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
function Fi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Um = /* @__PURE__ */ function(e) {
  Bm(n, e);
  var t = Im(n);
  function n() {
    var r;
    Em(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Fi(Ia(r), "priority", 130), Fi(Ia(r), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return Am(n, [{
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
        return a.setUTCFullYear(u, 0, l.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), It(a, l);
      }
      var d = !("era" in i) || i.era === 1 ? o.year : 1 - o.year;
      return a.setUTCFullYear(d, 0, l.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), It(a, l);
    }
  }]), n;
}(we);
function Dn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Dn = function(n) {
    return typeof n;
  } : Dn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Dn(e);
}
function Fm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Yi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ym(e, t, n) {
  return t && Yi(e.prototype, t), n && Yi(e, n), e;
}
function jm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && La(e, t);
}
function La(e, t) {
  return La = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, La(e, t);
}
function Hm(e) {
  var t = qm();
  return function() {
    var r = hr(e), a;
    if (t) {
      var i = hr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Wm(this, a);
  };
}
function Wm(e, t) {
  return t && (Dn(t) === "object" || typeof t == "function") ? t : Va(e);
}
function Va(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qm() {
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
var zm = /* @__PURE__ */ function(e) {
  jm(n, e);
  var t = Hm(n);
  function n() {
    var r;
    Fm(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), ji(Va(r), "priority", 130), ji(Va(r), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return Ym(n, [{
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
}(we);
function Rn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Rn = function(n) {
    return typeof n;
  } : Rn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Rn(e);
}
function Gm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Qm(e, t, n) {
  return t && Hi(e.prototype, t), n && Hi(e, n), e;
}
function Zm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ua(e, t);
}
function Ua(e, t) {
  return Ua = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ua(e, t);
}
function Jm(e) {
  var t = Xm();
  return function() {
    var r = vr(e), a;
    if (t) {
      var i = vr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Km(this, a);
  };
}
function Km(e, t) {
  return t && (Rn(t) === "object" || typeof t == "function") ? t : Fa(e);
}
function Fa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Xm() {
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
var ey = /* @__PURE__ */ function(e) {
  Zm(n, e);
  var t = Jm(n);
  function n() {
    var r;
    Gm(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Wi(Fa(r), "priority", 130), Wi(Fa(r), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return Qm(n, [{
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
}(we);
function xn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? xn = function(n) {
    return typeof n;
  } : xn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, xn(e);
}
function ty(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ny(e, t, n) {
  return t && qi(e.prototype, t), n && qi(e, n), e;
}
function ry(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ya(e, t);
}
function Ya(e, t) {
  return Ya = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ya(e, t);
}
function ay(e) {
  var t = iy();
  return function() {
    var r = br(e), a;
    if (t) {
      var i = br(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return oy(this, a);
  };
}
function oy(e, t) {
  return t && (xn(t) === "object" || typeof t == "function") ? t : ja(e);
}
function ja(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function iy() {
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
var ly = /* @__PURE__ */ function(e) {
  ry(n, e);
  var t = ay(n);
  function n() {
    var r;
    ty(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), zi(ja(r), "priority", 120), zi(ja(r), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return ny(n, [{
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
}(we);
function Cn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Cn = function(n) {
    return typeof n;
  } : Cn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Cn(e);
}
function uy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function sy(e, t, n) {
  return t && Gi(e.prototype, t), n && Gi(e, n), e;
}
function cy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ha(e, t);
}
function Ha(e, t) {
  return Ha = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ha(e, t);
}
function fy(e) {
  var t = py();
  return function() {
    var r = gr(e), a;
    if (t) {
      var i = gr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return dy(this, a);
  };
}
function dy(e, t) {
  return t && (Cn(t) === "object" || typeof t == "function") ? t : Wa(e);
}
function Wa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function py() {
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
var my = /* @__PURE__ */ function(e) {
  cy(n, e);
  var t = fy(n);
  function n() {
    var r;
    uy(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Qi(Wa(r), "priority", 120), Qi(Wa(r), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return sy(n, [{
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
}(we);
function Mn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Mn = function(n) {
    return typeof n;
  } : Mn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Mn(e);
}
function yy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function hy(e, t, n) {
  return t && Zi(e.prototype, t), n && Zi(e, n), e;
}
function vy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && qa(e, t);
}
function qa(e, t) {
  return qa = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, qa(e, t);
}
function by(e) {
  var t = _y();
  return function() {
    var r = _r(e), a;
    if (t) {
      var i = _r(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return gy(this, a);
  };
}
function gy(e, t) {
  return t && (Mn(t) === "object" || typeof t == "function") ? t : za(e);
}
function za(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _y() {
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
var wy = /* @__PURE__ */ function(e) {
  vy(n, e);
  var t = by(n);
  function n() {
    var r;
    yy(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Ji(za(r), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), Ji(za(r), "priority", 110), r;
  }
  return hy(n, [{
    key: "parse",
    value: function(a, i, o) {
      var l = function(u) {
        return u - 1;
      };
      switch (i) {
        case "M":
          return Ve(Ee(Le.month, a), l);
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
}(we);
function Nn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Nn = function(n) {
    return typeof n;
  } : Nn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Nn(e);
}
function Oy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ki(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function $y(e, t, n) {
  return t && Ki(e.prototype, t), n && Ki(e, n), e;
}
function Sy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ga(e, t);
}
function Ga(e, t) {
  return Ga = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ga(e, t);
}
function ky(e) {
  var t = Ty();
  return function() {
    var r = wr(e), a;
    if (t) {
      var i = wr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Py(this, a);
  };
}
function Py(e, t) {
  return t && (Nn(t) === "object" || typeof t == "function") ? t : Qa(e);
}
function Qa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ty() {
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
var Dy = /* @__PURE__ */ function(e) {
  Sy(n, e);
  var t = ky(n);
  function n() {
    var r;
    Oy(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Xi(Qa(r), "priority", 110), Xi(Qa(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return $y(n, [{
    key: "parse",
    value: function(a, i, o) {
      var l = function(u) {
        return u - 1;
      };
      switch (i) {
        case "L":
          return Ve(Ee(Le.month, a), l);
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
}(we);
function Ry(e, t, n) {
  X(2, arguments);
  var r = se(e), a = le(t), i = Cu(r, n) - a;
  return r.setUTCDate(r.getUTCDate() - i * 7), r;
}
function En(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? En = function(n) {
    return typeof n;
  } : En = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, En(e);
}
function xy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function el(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Cy(e, t, n) {
  return t && el(e.prototype, t), n && el(e, n), e;
}
function My(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Za(e, t);
}
function Za(e, t) {
  return Za = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Za(e, t);
}
function Ny(e) {
  var t = Ay();
  return function() {
    var r = Or(e), a;
    if (t) {
      var i = Or(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Ey(this, a);
  };
}
function Ey(e, t) {
  return t && (En(t) === "object" || typeof t == "function") ? t : Ja(e);
}
function Ja(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ay() {
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
var By = /* @__PURE__ */ function(e) {
  My(n, e);
  var t = Ny(n);
  function n() {
    var r;
    xy(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), tl(Ja(r), "priority", 100), tl(Ja(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return Cy(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "w":
          return Ee(Le.week, a);
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
      return It(Ry(a, o, l), l);
    }
  }]), n;
}(we);
function Iy(e, t) {
  X(2, arguments);
  var n = se(e), r = le(t), a = xu(n) - r;
  return n.setUTCDate(n.getUTCDate() - a * 7), n;
}
function An(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? An = function(n) {
    return typeof n;
  } : An = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, An(e);
}
function Ly(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Vy(e, t, n) {
  return t && nl(e.prototype, t), n && nl(e, n), e;
}
function Uy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ka(e, t);
}
function Ka(e, t) {
  return Ka = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ka(e, t);
}
function Fy(e) {
  var t = jy();
  return function() {
    var r = $r(e), a;
    if (t) {
      var i = $r(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Yy(this, a);
  };
}
function Yy(e, t) {
  return t && (An(t) === "object" || typeof t == "function") ? t : Xa(e);
}
function Xa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jy() {
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
var Hy = /* @__PURE__ */ function(e) {
  Uy(n, e);
  var t = Fy(n);
  function n() {
    var r;
    Ly(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), rl(Xa(r), "priority", 100), rl(Xa(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return Vy(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "I":
          return Ee(Le.week, a);
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
      return jt(Iy(a, o));
    }
  }]), n;
}(we);
function Bn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Bn = function(n) {
    return typeof n;
  } : Bn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Bn(e);
}
function Wy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function al(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function qy(e, t, n) {
  return t && al(e.prototype, t), n && al(e, n), e;
}
function zy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && eo(e, t);
}
function eo(e, t) {
  return eo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, eo(e, t);
}
function Gy(e) {
  var t = Zy();
  return function() {
    var r = Sr(e), a;
    if (t) {
      var i = Sr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Qy(this, a);
  };
}
function Qy(e, t) {
  return t && (Bn(t) === "object" || typeof t == "function") ? t : In(e);
}
function In(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Zy() {
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
var Jy = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Ky = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Xy = /* @__PURE__ */ function(e) {
  zy(n, e);
  var t = Gy(n);
  function n() {
    var r;
    Wy(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), ua(In(r), "priority", 90), ua(In(r), "subPriority", 1), ua(In(r), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return qy(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "d":
          return Ee(Le.date, a);
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
      return l ? i >= 1 && i <= Ky[f] : i >= 1 && i <= Jy[f];
    }
  }, {
    key: "set",
    value: function(a, i, o) {
      return a.setUTCDate(o), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(we);
function Ln(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ln = function(n) {
    return typeof n;
  } : Ln = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ln(e);
}
function eh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ol(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function th(e, t, n) {
  return t && ol(e.prototype, t), n && ol(e, n), e;
}
function nh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && to(e, t);
}
function to(e, t) {
  return to = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, to(e, t);
}
function rh(e) {
  var t = oh();
  return function() {
    var r = kr(e), a;
    if (t) {
      var i = kr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return ah(this, a);
  };
}
function ah(e, t) {
  return t && (Ln(t) === "object" || typeof t == "function") ? t : Vn(e);
}
function Vn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function oh() {
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
var ih = /* @__PURE__ */ function(e) {
  nh(n, e);
  var t = rh(n);
  function n() {
    var r;
    eh(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), sa(Vn(r), "priority", 90), sa(Vn(r), "subpriority", 1), sa(Vn(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), r;
  }
  return th(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "D":
        case "DD":
          return Ee(Le.dayOfYear, a);
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
}(we);
function ui(e, t, n) {
  var r, a, i, o, l, f, u, d;
  X(2, arguments);
  var s = kt(), p = le((r = (a = (i = (o = n == null ? void 0 : n.weekStartsOn) !== null && o !== void 0 ? o : n == null || (l = n.locale) === null || l === void 0 || (f = l.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && i !== void 0 ? i : s.weekStartsOn) !== null && a !== void 0 ? a : (u = s.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(p >= 0 && p <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = se(e), b = le(t), N = v.getUTCDay(), H = b % 7, F = (H + 7) % 7, E = (F < p ? 7 : 0) + b - N;
  return v.setUTCDate(v.getUTCDate() + E), v;
}
function Un(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Un = function(n) {
    return typeof n;
  } : Un = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Un(e);
}
function lh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function il(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function uh(e, t, n) {
  return t && il(e.prototype, t), n && il(e, n), e;
}
function sh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && no(e, t);
}
function no(e, t) {
  return no = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, no(e, t);
}
function ch(e) {
  var t = dh();
  return function() {
    var r = Pr(e), a;
    if (t) {
      var i = Pr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return fh(this, a);
  };
}
function fh(e, t) {
  return t && (Un(t) === "object" || typeof t == "function") ? t : ro(e);
}
function ro(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function dh() {
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
var ph = /* @__PURE__ */ function(e) {
  sh(n, e);
  var t = ch(n);
  function n() {
    var r;
    lh(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), ll(ro(r), "priority", 90), ll(ro(r), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), r;
  }
  return uh(n, [{
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
}(we);
function Fn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Fn = function(n) {
    return typeof n;
  } : Fn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Fn(e);
}
function mh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ul(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function yh(e, t, n) {
  return t && ul(e.prototype, t), n && ul(e, n), e;
}
function hh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ao(e, t);
}
function ao(e, t) {
  return ao = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ao(e, t);
}
function vh(e) {
  var t = gh();
  return function() {
    var r = Tr(e), a;
    if (t) {
      var i = Tr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return bh(this, a);
  };
}
function bh(e, t) {
  return t && (Fn(t) === "object" || typeof t == "function") ? t : oo(e);
}
function oo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gh() {
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
var _h = /* @__PURE__ */ function(e) {
  hh(n, e);
  var t = vh(n);
  function n() {
    var r;
    mh(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), sl(oo(r), "priority", 90), sl(oo(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), r;
  }
  return yh(n, [{
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
}(we);
function Yn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Yn = function(n) {
    return typeof n;
  } : Yn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Yn(e);
}
function wh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Oh(e, t, n) {
  return t && cl(e.prototype, t), n && cl(e, n), e;
}
function $h(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && io(e, t);
}
function io(e, t) {
  return io = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, io(e, t);
}
function Sh(e) {
  var t = Ph();
  return function() {
    var r = Dr(e), a;
    if (t) {
      var i = Dr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return kh(this, a);
  };
}
function kh(e, t) {
  return t && (Yn(t) === "object" || typeof t == "function") ? t : lo(e);
}
function lo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ph() {
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
var Th = /* @__PURE__ */ function(e) {
  $h(n, e);
  var t = Sh(n);
  function n() {
    var r;
    wh(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), fl(lo(r), "priority", 90), fl(lo(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), r;
  }
  return Oh(n, [{
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
}(we);
function Dh(e, t) {
  X(2, arguments);
  var n = le(t);
  n % 7 === 0 && (n = n - 7);
  var r = 1, a = se(e), i = a.getUTCDay(), o = n % 7, l = (o + 7) % 7, f = (l < r ? 7 : 0) + n - i;
  return a.setUTCDate(a.getUTCDate() + f), a;
}
function jn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? jn = function(n) {
    return typeof n;
  } : jn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, jn(e);
}
function Rh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function xh(e, t, n) {
  return t && dl(e.prototype, t), n && dl(e, n), e;
}
function Ch(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && uo(e, t);
}
function uo(e, t) {
  return uo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, uo(e, t);
}
function Mh(e) {
  var t = Eh();
  return function() {
    var r = Rr(e), a;
    if (t) {
      var i = Rr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Nh(this, a);
  };
}
function Nh(e, t) {
  return t && (jn(t) === "object" || typeof t == "function") ? t : so(e);
}
function so(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Eh() {
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
var Ah = /* @__PURE__ */ function(e) {
  Ch(n, e);
  var t = Mh(n);
  function n() {
    var r;
    Rh(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), pl(so(r), "priority", 90), pl(so(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), r;
  }
  return xh(n, [{
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
      return a = Dh(a, o), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(we);
function Hn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Hn = function(n) {
    return typeof n;
  } : Hn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Hn(e);
}
function Bh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ml(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ih(e, t, n) {
  return t && ml(e.prototype, t), n && ml(e, n), e;
}
function Lh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && co(e, t);
}
function co(e, t) {
  return co = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, co(e, t);
}
function Vh(e) {
  var t = Fh();
  return function() {
    var r = xr(e), a;
    if (t) {
      var i = xr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Uh(this, a);
  };
}
function Uh(e, t) {
  return t && (Hn(t) === "object" || typeof t == "function") ? t : fo(e);
}
function fo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fh() {
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
function yl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Yh = /* @__PURE__ */ function(e) {
  Lh(n, e);
  var t = Vh(n);
  function n() {
    var r;
    Bh(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), yl(fo(r), "priority", 80), yl(fo(r), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), r;
  }
  return Ih(n, [{
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
}(we);
function Wn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Wn = function(n) {
    return typeof n;
  } : Wn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Wn(e);
}
function jh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Hh(e, t, n) {
  return t && hl(e.prototype, t), n && hl(e, n), e;
}
function Wh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && po(e, t);
}
function po(e, t) {
  return po = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, po(e, t);
}
function qh(e) {
  var t = Gh();
  return function() {
    var r = Cr(e), a;
    if (t) {
      var i = Cr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return zh(this, a);
  };
}
function zh(e, t) {
  return t && (Wn(t) === "object" || typeof t == "function") ? t : mo(e);
}
function mo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Gh() {
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
var Qh = /* @__PURE__ */ function(e) {
  Wh(n, e);
  var t = qh(n);
  function n() {
    var r;
    jh(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), vl(mo(r), "priority", 80), vl(mo(r), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), r;
  }
  return Hh(n, [{
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
}(we);
function qn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qn = function(n) {
    return typeof n;
  } : qn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, qn(e);
}
function Zh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Jh(e, t, n) {
  return t && bl(e.prototype, t), n && bl(e, n), e;
}
function Kh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && yo(e, t);
}
function yo(e, t) {
  return yo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, yo(e, t);
}
function Xh(e) {
  var t = tv();
  return function() {
    var r = Mr(e), a;
    if (t) {
      var i = Mr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return ev(this, a);
  };
}
function ev(e, t) {
  return t && (qn(t) === "object" || typeof t == "function") ? t : ho(e);
}
function ho(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tv() {
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
var nv = /* @__PURE__ */ function(e) {
  Kh(n, e);
  var t = Xh(n);
  function n() {
    var r;
    Zh(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), gl(ho(r), "priority", 80), gl(ho(r), "incompatibleTokens", ["a", "b", "t", "T"]), r;
  }
  return Jh(n, [{
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
}(we);
function zn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zn = function(n) {
    return typeof n;
  } : zn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, zn(e);
}
function rv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _l(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function av(e, t, n) {
  return t && _l(e.prototype, t), n && _l(e, n), e;
}
function ov(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && vo(e, t);
}
function vo(e, t) {
  return vo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, vo(e, t);
}
function iv(e) {
  var t = uv();
  return function() {
    var r = Nr(e), a;
    if (t) {
      var i = Nr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return lv(this, a);
  };
}
function lv(e, t) {
  return t && (zn(t) === "object" || typeof t == "function") ? t : bo(e);
}
function bo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function uv() {
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
var sv = /* @__PURE__ */ function(e) {
  ov(n, e);
  var t = iv(n);
  function n() {
    var r;
    rv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), wl(bo(r), "priority", 70), wl(bo(r), "incompatibleTokens", ["H", "K", "k", "t", "T"]), r;
  }
  return av(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "h":
          return Ee(Le.hour12h, a);
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
}(we);
function Gn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Gn = function(n) {
    return typeof n;
  } : Gn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Gn(e);
}
function cv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ol(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function fv(e, t, n) {
  return t && Ol(e.prototype, t), n && Ol(e, n), e;
}
function dv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && go(e, t);
}
function go(e, t) {
  return go = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, go(e, t);
}
function pv(e) {
  var t = yv();
  return function() {
    var r = Er(e), a;
    if (t) {
      var i = Er(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return mv(this, a);
  };
}
function mv(e, t) {
  return t && (Gn(t) === "object" || typeof t == "function") ? t : _o(e);
}
function _o(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yv() {
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
var hv = /* @__PURE__ */ function(e) {
  dv(n, e);
  var t = pv(n);
  function n() {
    var r;
    cv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), $l(_o(r), "priority", 70), $l(_o(r), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), r;
  }
  return fv(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "H":
          return Ee(Le.hour23h, a);
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
}(we);
function Qn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Qn = function(n) {
    return typeof n;
  } : Qn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Qn(e);
}
function vv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function bv(e, t, n) {
  return t && Sl(e.prototype, t), n && Sl(e, n), e;
}
function gv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && wo(e, t);
}
function wo(e, t) {
  return wo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, wo(e, t);
}
function _v(e) {
  var t = Ov();
  return function() {
    var r = Ar(e), a;
    if (t) {
      var i = Ar(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return wv(this, a);
  };
}
function wv(e, t) {
  return t && (Qn(t) === "object" || typeof t == "function") ? t : Oo(e);
}
function Oo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ov() {
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
var $v = /* @__PURE__ */ function(e) {
  gv(n, e);
  var t = _v(n);
  function n() {
    var r;
    vv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), kl(Oo(r), "priority", 70), kl(Oo(r), "incompatibleTokens", ["h", "H", "k", "t", "T"]), r;
  }
  return bv(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "K":
          return Ee(Le.hour11h, a);
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
}(we);
function Zn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Zn = function(n) {
    return typeof n;
  } : Zn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Zn(e);
}
function Sv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Pl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function kv(e, t, n) {
  return t && Pl(e.prototype, t), n && Pl(e, n), e;
}
function Pv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && $o(e, t);
}
function $o(e, t) {
  return $o = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, $o(e, t);
}
function Tv(e) {
  var t = Rv();
  return function() {
    var r = Br(e), a;
    if (t) {
      var i = Br(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Dv(this, a);
  };
}
function Dv(e, t) {
  return t && (Zn(t) === "object" || typeof t == "function") ? t : So(e);
}
function So(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Rv() {
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
var xv = /* @__PURE__ */ function(e) {
  Pv(n, e);
  var t = Tv(n);
  function n() {
    var r;
    Sv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Tl(So(r), "priority", 70), Tl(So(r), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), r;
  }
  return kv(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "k":
          return Ee(Le.hour24h, a);
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
}(we);
function Jn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Jn = function(n) {
    return typeof n;
  } : Jn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Jn(e);
}
function Cv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Mv(e, t, n) {
  return t && Dl(e.prototype, t), n && Dl(e, n), e;
}
function Nv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ko(e, t);
}
function ko(e, t) {
  return ko = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ko(e, t);
}
function Ev(e) {
  var t = Bv();
  return function() {
    var r = Ir(e), a;
    if (t) {
      var i = Ir(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Av(this, a);
  };
}
function Av(e, t) {
  return t && (Jn(t) === "object" || typeof t == "function") ? t : Po(e);
}
function Po(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Bv() {
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
var Iv = /* @__PURE__ */ function(e) {
  Nv(n, e);
  var t = Ev(n);
  function n() {
    var r;
    Cv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Rl(Po(r), "priority", 60), Rl(Po(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Mv(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "m":
          return Ee(Le.minute, a);
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
}(we);
function Kn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Kn = function(n) {
    return typeof n;
  } : Kn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Kn(e);
}
function Lv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Vv(e, t, n) {
  return t && xl(e.prototype, t), n && xl(e, n), e;
}
function Uv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && To(e, t);
}
function To(e, t) {
  return To = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, To(e, t);
}
function Fv(e) {
  var t = jv();
  return function() {
    var r = Lr(e), a;
    if (t) {
      var i = Lr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Yv(this, a);
  };
}
function Yv(e, t) {
  return t && (Kn(t) === "object" || typeof t == "function") ? t : Do(e);
}
function Do(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jv() {
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
var Hv = /* @__PURE__ */ function(e) {
  Uv(n, e);
  var t = Fv(n);
  function n() {
    var r;
    Lv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Cl(Do(r), "priority", 50), Cl(Do(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Vv(n, [{
    key: "parse",
    value: function(a, i, o) {
      switch (i) {
        case "s":
          return Ee(Le.second, a);
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
}(we);
function Xn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xn = function(n) {
    return typeof n;
  } : Xn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Xn(e);
}
function Wv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ml(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function qv(e, t, n) {
  return t && Ml(e.prototype, t), n && Ml(e, n), e;
}
function zv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ro(e, t);
}
function Ro(e, t) {
  return Ro = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ro(e, t);
}
function Gv(e) {
  var t = Zv();
  return function() {
    var r = Vr(e), a;
    if (t) {
      var i = Vr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Qv(this, a);
  };
}
function Qv(e, t) {
  return t && (Xn(t) === "object" || typeof t == "function") ? t : xo(e);
}
function xo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Zv() {
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
var Jv = /* @__PURE__ */ function(e) {
  zv(n, e);
  var t = Gv(n);
  function n() {
    var r;
    Wv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Nl(xo(r), "priority", 30), Nl(xo(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return qv(n, [{
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
}(we);
function er(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? er = function(n) {
    return typeof n;
  } : er = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, er(e);
}
function Kv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function El(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Xv(e, t, n) {
  return t && El(e.prototype, t), n && El(e, n), e;
}
function e0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Co(e, t);
}
function Co(e, t) {
  return Co = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Co(e, t);
}
function t0(e) {
  var t = r0();
  return function() {
    var r = Ur(e), a;
    if (t) {
      var i = Ur(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return n0(this, a);
  };
}
function n0(e, t) {
  return t && (er(t) === "object" || typeof t == "function") ? t : Mo(e);
}
function Mo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function r0() {
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
var a0 = /* @__PURE__ */ function(e) {
  e0(n, e);
  var t = t0(n);
  function n() {
    var r;
    Kv(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Al(Mo(r), "priority", 10), Al(Mo(r), "incompatibleTokens", ["t", "T", "x"]), r;
  }
  return Xv(n, [{
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
}(we);
function tr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? tr = function(n) {
    return typeof n;
  } : tr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, tr(e);
}
function o0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function i0(e, t, n) {
  return t && Bl(e.prototype, t), n && Bl(e, n), e;
}
function l0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && No(e, t);
}
function No(e, t) {
  return No = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, No(e, t);
}
function u0(e) {
  var t = c0();
  return function() {
    var r = Fr(e), a;
    if (t) {
      var i = Fr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return s0(this, a);
  };
}
function s0(e, t) {
  return t && (tr(t) === "object" || typeof t == "function") ? t : Eo(e);
}
function Eo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function c0() {
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
var f0 = /* @__PURE__ */ function(e) {
  l0(n, e);
  var t = u0(n);
  function n() {
    var r;
    o0(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Il(Eo(r), "priority", 10), Il(Eo(r), "incompatibleTokens", ["t", "T", "X"]), r;
  }
  return i0(n, [{
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
}(we);
function nr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? nr = function(n) {
    return typeof n;
  } : nr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, nr(e);
}
function d0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ll(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function p0(e, t, n) {
  return t && Ll(e.prototype, t), n && Ll(e, n), e;
}
function m0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ao(e, t);
}
function Ao(e, t) {
  return Ao = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ao(e, t);
}
function y0(e) {
  var t = v0();
  return function() {
    var r = Yr(e), a;
    if (t) {
      var i = Yr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return h0(this, a);
  };
}
function h0(e, t) {
  return t && (nr(t) === "object" || typeof t == "function") ? t : Bo(e);
}
function Bo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function v0() {
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
var b0 = /* @__PURE__ */ function(e) {
  m0(n, e);
  var t = y0(n);
  function n() {
    var r;
    d0(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Vl(Bo(r), "priority", 40), Vl(Bo(r), "incompatibleTokens", "*"), r;
  }
  return p0(n, [{
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
}(we);
function rr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? rr = function(n) {
    return typeof n;
  } : rr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, rr(e);
}
function g0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ul(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function _0(e, t, n) {
  return t && Ul(e.prototype, t), n && Ul(e, n), e;
}
function w0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Io(e, t);
}
function Io(e, t) {
  return Io = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Io(e, t);
}
function O0(e) {
  var t = S0();
  return function() {
    var r = jr(e), a;
    if (t) {
      var i = jr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return $0(this, a);
  };
}
function $0(e, t) {
  return t && (rr(t) === "object" || typeof t == "function") ? t : Lo(e);
}
function Lo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function S0() {
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
var k0 = /* @__PURE__ */ function(e) {
  w0(n, e);
  var t = O0(n);
  function n() {
    var r;
    g0(this, n);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(i)), Fl(Lo(r), "priority", 20), Fl(Lo(r), "incompatibleTokens", "*"), r;
  }
  return _0(n, [{
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
}(we), P0 = {
  G: new Pm(),
  y: new Nm(),
  Y: new Um(),
  R: new zm(),
  u: new ey(),
  Q: new ly(),
  q: new my(),
  M: new wy(),
  L: new Dy(),
  w: new By(),
  I: new Hy(),
  d: new Xy(),
  D: new ih(),
  E: new ph(),
  e: new _h(),
  c: new Th(),
  i: new Ah(),
  a: new Yh(),
  b: new Qh(),
  B: new nv(),
  h: new sv(),
  H: new hv(),
  K: new $v(),
  k: new xv(),
  m: new Iv(),
  s: new Hv(),
  S: new Jv(),
  X: new a0(),
  x: new f0(),
  t: new b0(),
  T: new k0()
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
    if (Array.isArray(e) || (n = T0(e)) || t && e && typeof e.length == "number") {
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
function T0(e, t) {
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
var D0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, R0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, x0 = /^'([^]*?)'?$/, C0 = /''/g, M0 = /\S/, N0 = /[a-zA-Z]/;
function Vo(e, t, n, r) {
  var a, i, o, l, f, u, d, s, p, v, b, N, H, F, E, W, J, re;
  X(3, arguments);
  var h = String(e), x = String(t), Y = kt(), Q = (a = (i = r == null ? void 0 : r.locale) !== null && i !== void 0 ? i : Y.locale) !== null && a !== void 0 ? a : Au;
  if (!Q.match)
    throw new RangeError("locale must contain match property");
  var ne = le((o = (l = (f = (u = r == null ? void 0 : r.firstWeekContainsDate) !== null && u !== void 0 ? u : r == null || (d = r.locale) === null || d === void 0 || (s = d.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && f !== void 0 ? f : Y.firstWeekContainsDate) !== null && l !== void 0 ? l : (p = Y.locale) === null || p === void 0 || (v = p.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(ne >= 1 && ne <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var U = le((b = (N = (H = (F = r == null ? void 0 : r.weekStartsOn) !== null && F !== void 0 ? F : r == null || (E = r.locale) === null || E === void 0 || (W = E.options) === null || W === void 0 ? void 0 : W.weekStartsOn) !== null && H !== void 0 ? H : Y.weekStartsOn) !== null && N !== void 0 ? N : (J = Y.locale) === null || J === void 0 || (re = J.options) === null || re === void 0 ? void 0 : re.weekStartsOn) !== null && b !== void 0 ? b : 0);
  if (!(U >= 0 && U <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (x === "")
    return h === "" ? se(n) : new Date(NaN);
  var Z = {
    firstWeekContainsDate: ne,
    weekStartsOn: U,
    locale: Q
  }, P = [new vm()], _ = x.match(R0).map(function(ge) {
    var ye = ge[0];
    if (ye in Da) {
      var ee = Da[ye];
      return ee(ge, Q.formatLong);
    }
    return ge;
  }).join("").match(D0), C = [], M = Yl(_), c;
  try {
    var O = function() {
      var ye = c.value;
      !(r != null && r.useAdditionalWeekYearTokens) && Eu(ye) && cr(ye, x, e), !(r != null && r.useAdditionalDayOfYearTokens) && Nu(ye) && cr(ye, x, e);
      var ee = ye[0], nt = P0[ee];
      if (nt) {
        var pe = nt.incompatibleTokens;
        if (Array.isArray(pe)) {
          var $e = C.find(function(st) {
            return pe.includes(st.token) || st.token === ee;
          });
          if ($e)
            throw new RangeError("The format string mustn't contain `".concat($e.fullToken, "` and `").concat(ye, "` at the same time"));
        } else if (nt.incompatibleTokens === "*" && C.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(ye, "` and any other token at the same time"));
        C.push({
          token: ee,
          fullToken: ye
        });
        var Ae = nt.run(h, ye, Q.match, Z);
        if (!Ae)
          return {
            v: new Date(NaN)
          };
        P.push(Ae.setter), h = Ae.rest;
      } else {
        if (ee.match(N0))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + ee + "`");
        if (ye === "''" ? ye = "'" : ee === "'" && (ye = E0(ye)), h.indexOf(ye) === 0)
          h = h.slice(ye.length);
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
  if (h.length > 0 && M0.test(h))
    return new Date(NaN);
  var j = P.map(function(ge) {
    return ge.priority;
  }).sort(function(ge, ye) {
    return ye - ge;
  }).filter(function(ge, ye, ee) {
    return ee.indexOf(ge) === ye;
  }).map(function(ge) {
    return P.filter(function(ye) {
      return ye.priority === ge;
    }).sort(function(ye, ee) {
      return ee.subPriority - ye.subPriority;
    });
  }).map(function(ge) {
    return ge[0];
  }), z = se(n);
  if (isNaN(z.getTime()))
    return new Date(NaN);
  var S = Du(z, sr(z)), w = {}, L = Yl(j), me;
  try {
    for (L.s(); !(me = L.n()).done; ) {
      var Oe = me.value;
      if (!Oe.validate(S, Z))
        return new Date(NaN);
      var xe = Oe.set(S, w, Z);
      Array.isArray(xe) ? (S = xe[0], um(w, xe[1])) : S = xe;
    }
  } catch (ge) {
    L.e(ge);
  } finally {
    L.f();
  }
  return S;
}
function E0(e) {
  return e.match(x0)[1].replace(C0, "'");
}
function A0(e, t) {
  X(2, arguments);
  var n = le(t);
  return $t(e, -n);
}
function B0(e, t) {
  var n;
  X(1, arguments);
  var r = le((n = t == null ? void 0 : t.additionalDigits) !== null && n !== void 0 ? n : 2);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return new Date(NaN);
  var a = U0(e), i;
  if (a.date) {
    var o = F0(a.date, r);
    i = Y0(o.restDateString, o.year);
  }
  if (!i || isNaN(i.getTime()))
    return new Date(NaN);
  var l = i.getTime(), f = 0, u;
  if (a.time && (f = j0(a.time), isNaN(f)))
    return new Date(NaN);
  if (a.timezone) {
    if (u = H0(a.timezone), isNaN(u))
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
}, I0 = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, L0 = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, V0 = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function U0(e) {
  var t = {}, n = e.split(hn.dateTimeDelimiter), r;
  if (n.length > 2)
    return t;
  if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], hn.timeZoneDelimiter.test(t.date) && (t.date = e.split(hn.timeZoneDelimiter)[0], r = e.substr(t.date.length, e.length))), r) {
    var a = hn.timezone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timezone = a[1]) : t.time = r;
  }
  return t;
}
function F0(e, t) {
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
function Y0(e, t) {
  if (t === null)
    return new Date(NaN);
  var n = e.match(I0);
  if (!n)
    return new Date(NaN);
  var r = !!n[4], a = Kt(n[1]), i = Kt(n[2]) - 1, o = Kt(n[3]), l = Kt(n[4]), f = Kt(n[5]) - 1;
  if (r)
    return Q0(t, l, f) ? W0(t, l, f) : new Date(NaN);
  var u = new Date(0);
  return !z0(t, i, o) || !G0(t, a) ? new Date(NaN) : (u.setUTCFullYear(t, i, Math.max(a, o)), u);
}
function Kt(e) {
  return e ? parseInt(e) : 1;
}
function j0(e) {
  var t = e.match(L0);
  if (!t)
    return NaN;
  var n = ca(t[1]), r = ca(t[2]), a = ca(t[3]);
  return Z0(n, r, a) ? n * ti + r * ei + a * 1e3 : NaN;
}
function ca(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function H0(e) {
  if (e === "Z")
    return 0;
  var t = e.match(V0);
  if (!t)
    return 0;
  var n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), a = t[3] && parseInt(t[3]) || 0;
  return J0(r, a) ? n * (r * ti + a * ei) : NaN;
}
function W0(e, t, n) {
  var r = new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, i = (t - 1) * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + i), r;
}
var q0 = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ju(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function z0(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (q0[t] || (ju(e) ? 29 : 28));
}
function G0(e, t) {
  return t >= 1 && t <= (ju(e) ? 366 : 365);
}
function Q0(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function Z0(e, t, n) {
  return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function J0(e, t) {
  return t >= 0 && t <= 59;
}
function rn(e, t) {
  X(2, arguments);
  var n = se(e), r = le(t), a = n.getFullYear(), i = n.getDate(), o = new Date(0);
  o.setFullYear(a, r, 15), o.setHours(0, 0, 0, 0);
  var l = cm(o);
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
  var n = se(e);
  return isNaN(n.getTime()) ? new Date(NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = rn(n, t.month)), t.date != null && n.setDate(le(t.date)), t.hours != null && n.setHours(le(t.hours)), t.minutes != null && n.setMinutes(le(t.minutes)), t.seconds != null && n.setSeconds(le(t.seconds)), t.milliseconds != null && n.setMilliseconds(le(t.milliseconds)), n);
}
function Hu(e, t) {
  X(2, arguments);
  var n = se(e), r = le(t);
  return n.setHours(r), n;
}
function si(e, t) {
  X(2, arguments);
  var n = se(e), r = le(t);
  return n.setMilliseconds(r), n;
}
function Wu(e, t) {
  X(2, arguments);
  var n = se(e), r = le(t);
  return n.setMinutes(r), n;
}
function qu(e, t) {
  X(2, arguments);
  var n = se(e), r = le(t);
  return n.setSeconds(r), n;
}
function Bt(e, t) {
  X(2, arguments);
  var n = se(e), r = le(t);
  return isNaN(n.getTime()) ? new Date(NaN) : (n.setFullYear(r), n);
}
function Yt(e, t) {
  X(2, arguments);
  var n = le(t);
  return pt(e, -n);
}
function ir(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ir = function(n) {
    return typeof n;
  } : ir = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ir(e);
}
function K0(e, t) {
  if (X(2, arguments), !t || ir(t) !== "object")
    return new Date(NaN);
  var n = t.years ? le(t.years) : 0, r = t.months ? le(t.months) : 0, a = t.weeks ? le(t.weeks) : 0, i = t.days ? le(t.days) : 0, o = t.hours ? le(t.hours) : 0, l = t.minutes ? le(t.minutes) : 0, f = t.seconds ? le(t.seconds) : 0, u = Yt(e, r + n * 12), d = A0(u, i + a * 7), s = l + o * 60, p = f + s * 60, v = p * 1e3, b = new Date(d.getTime() - v);
  return b;
}
function X0(e, t) {
  X(2, arguments);
  var n = le(t);
  return Pu(e, -n);
}
const Lt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, eb = {}, tb = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, nb = /* @__PURE__ */ I("path", { d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" }, null, -1), rb = /* @__PURE__ */ I("path", { d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), ab = /* @__PURE__ */ I("path", { d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), ob = /* @__PURE__ */ I("path", { d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" }, null, -1), ib = [
  nb,
  rb,
  ab,
  ob
];
function lb(e, t) {
  return m(), $("svg", tb, ib);
}
const Gr = /* @__PURE__ */ Lt(eb, [["render", lb]]), ub = {}, sb = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, cb = /* @__PURE__ */ I("path", { d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" }, null, -1), fb = /* @__PURE__ */ I("path", { d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" }, null, -1), db = [
  cb,
  fb
];
function pb(e, t) {
  return m(), $("svg", sb, db);
}
const mb = /* @__PURE__ */ Lt(ub, [["render", pb]]), yb = {}, hb = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, vb = /* @__PURE__ */ I("path", { d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" }, null, -1), bb = [
  vb
];
function gb(e, t) {
  return m(), $("svg", hb, bb);
}
const Hl = /* @__PURE__ */ Lt(yb, [["render", gb]]), _b = {}, wb = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Ob = /* @__PURE__ */ I("path", { d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z" }, null, -1), $b = [
  Ob
];
function Sb(e, t) {
  return m(), $("svg", wb, $b);
}
const Wl = /* @__PURE__ */ Lt(_b, [["render", Sb]]), kb = {}, Pb = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Tb = /* @__PURE__ */ I("path", { d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z" }, null, -1), Db = /* @__PURE__ */ I("path", { d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" }, null, -1), Rb = [
  Tb,
  Db
];
function xb(e, t) {
  return m(), $("svg", Pb, Rb);
}
const zu = /* @__PURE__ */ Lt(kb, [["render", xb]]), Cb = {}, Mb = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Nb = /* @__PURE__ */ I("path", { d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z" }, null, -1), Eb = [
  Nb
];
function Ab(e, t) {
  return m(), $("svg", Mb, Eb);
}
const Gu = /* @__PURE__ */ Lt(Cb, [["render", Ab]]), Bb = {}, Ib = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "dp__icon"
}, Lb = /* @__PURE__ */ I("path", { d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" }, null, -1), Vb = [
  Lb
];
function Ub(e, t) {
  return m(), $("svg", Ib, Vb);
}
const Qu = /* @__PURE__ */ Lt(Bb, [["render", Ub]]), ql = (e, t) => {
  const n = Vo(e, t.slice(0, e.length), new Date());
  return tn(n) && Tu(n) ? n : null;
}, Fb = (e, t) => {
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
}, B = (e) => e ? new Date(e) : new Date(), Yb = (e, t) => {
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
}, mt = (e) => {
  let t = B(JSON.parse(JSON.stringify(e)));
  return t = Hu(t, 0), t = Wu(t, 0), t = qu(t, 0), t = si(t, 0), t;
}, ot = (e, t, n, r) => {
  let a = e ? B(e) : B();
  return (t || t === 0) && (a = Hu(a, +t)), (n || n === 0) && (a = Wu(a, +n)), (r || r === 0) && (a = qu(a, +r)), si(a, 0);
}, We = (e, t) => !e || !t ? !1 : ai(mt(e), mt(t)), Ce = (e, t) => !e || !t ? !1 : Bu(mt(e), mt(t)), Je = (e, t) => !e || !t ? !1 : ri(mt(e), mt(t)), Zu = (e, t, n) => e && e[0] && e[1] ? Je(n, e[0]) && We(n, e[1]) : e && e[0] && t ? Je(n, e[0]) && We(n, t) || We(n, e[0]) && Je(n, t) : !1, Xt = ln({
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
const jb = /* @__PURE__ */ ci(Uo.exports);
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
function Hb(e, t) {
  var n = Gb(t);
  return n.formatToParts ? qb(n, e) : zb(n, e);
}
var Wb = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function qb(e, t) {
  try {
    for (var n = e.formatToParts(t), r = [], a = 0; a < n.length; a++) {
      var i = Wb[n[a].type];
      i >= 0 && (r[i] = parseInt(n[a].value, 10));
    }
    return r;
  } catch (o) {
    if (o instanceof RangeError)
      return [NaN];
    throw o;
  }
}
function zb(e, t) {
  var n = e.format(t).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);
  return [r[3], r[1], r[2], r[4], r[5], r[6]];
}
var fa = {};
function Gb(e) {
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
var Gl = 36e5, Qb = 6e4, da = {
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
    return Ql(i, o) ? (a = Math.abs(i) * Gl + o * Qb, i > 0 ? -a : a) : NaN;
  }
  if (Kb(e)) {
    t = new Date(t || Date.now());
    var l = n ? t : Zb(t), f = Yo(l, e), u = n ? f : Jb(t, f, e);
    return -u;
  }
  return NaN;
}
function Zb(e) {
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
  var n = Hb(e, t), r = fi(
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
function Jb(e, t, n) {
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
function Kb(e) {
  if (Zl[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), Zl[e] = !0, !0;
  } catch {
    return !1;
  }
}
var Ku = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, pa = 36e5, Jl = 6e4, Xb = 2, Ze = {
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
  var n = t || {}, r = n.additionalDigits == null ? Xb : jb(n.additionalDigits);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return new Date(NaN);
  var a = eg(e), i = tg(a.date, r), o = i.year, l = i.restDateString, f = ng(l, o);
  if (isNaN(f))
    return new Date(NaN);
  if (f) {
    var u = f.getTime(), d = 0, s;
    if (a.time && (d = rg(a.time), isNaN(d)))
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
function eg(e) {
  var t = {}, n = Ze.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = Ze.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    var a = Ze.timeZone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timeZone = a[1].trim()) : t.time = r;
  }
  return t;
}
function tg(e, t) {
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
function ng(e, t) {
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
    return ig(t, o) ? (r.setUTCFullYear(t, 0, o), r) : new Date(NaN);
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
function rg(e) {
  var t, n, r;
  if (t = Ze.HH.exec(e), t)
    return n = parseFloat(t[1].replace(",", ".")), ma(n) ? n % 24 * pa : NaN;
  if (t = Ze.HHMM.exec(e), t)
    return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), ma(n, r) ? n % 24 * pa + r * Jl : NaN;
  if (t = Ze.HHMMSS.exec(e), t) {
    n = parseInt(t[1], 10), r = parseInt(t[2], 10);
    var a = parseFloat(t[3].replace(",", "."));
    return ma(n, r, a) ? n % 24 * pa + r * Jl + a * 1e3 : NaN;
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
var ag = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], og = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
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
    if (r && n > og[t] || !r && n > ag[t])
      return !1;
  }
  return !0;
}
function ig(e, t) {
  if (t < 1)
    return !1;
  var n = Xu(e);
  return !(n && t > 366 || !n && t > 365);
}
function eu(e, t, n) {
  return !(t < 0 || t > 52 || n != null && (n < 0 || n > 6));
}
function ma(e, t, n) {
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
const lg = /* @__PURE__ */ ci(Ho.exports);
function ug(e, t, n) {
  var r = jo(e, n), a = di(t, r, !0), i = new Date(r.getTime() - a), o = new Date(0);
  return o.setFullYear(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()), o.setHours(i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds(), i.getUTCMilliseconds()), o;
}
function sg(e, t, n) {
  if (typeof e == "string" && !e.match(Ku)) {
    var r = lg(n);
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
const cg = (e, t = 3) => {
  const n = [];
  for (let r = 0; r < e.length; r += t)
    n.push([e[r], e[r + 1], e[r + 2]]);
  return n;
}, fg = (e, t) => {
  const n = [1, 2, 3, 4, 5, 6, 7].map((i) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(new Date(`2017-01-0${i}T00:00:00+00:00`)).slice(0, 2)), r = n.slice(0, t), a = n.slice(t + 1, n.length);
  return [n[t]].concat(...a).concat(...r);
}, dg = (e) => {
  const t = [];
  for (let n = +e[0]; n <= +e[1]; n++)
    t.push({ value: +n, text: `${n}` });
  return t;
}, pg = (e, t) => {
  const n = new Intl.DateTimeFormat(e, { month: t, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((r) => {
    const a = r < 10 ? `0${r}` : r;
    return new Date(`2017-${a}-01T00:00:00+00:00`);
  }).map((r, a) => ({
    text: n.format(r),
    value: a
  }));
}, mg = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], je = (e) => {
  var n;
  const t = g(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}, yg = (e) => Object.assign({ type: "dot" }, e), es = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Hr = {
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
), hg = (e) => Object.assign(
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
), vg = (e) => e === null ? 0 : typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2, bg = (e, t, n) => e || (typeof n == "string" ? n : t), gg = (e) => typeof e == "boolean" ? e ? tu({}) : !1 : tu(e), _g = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), wg = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), at = (e) => {
  const t = () => {
    if (e.partialRange)
      return null;
    throw new Error(Hr.prop("partial-range"));
  }, n = G(() => ({
    ariaLabels: hg(e.ariaLabels),
    textInputOptions: Object.assign(_g(), e.textInputOptions),
    multiCalendars: vg(e.multiCalendars),
    previewFormat: bg(e.previewFormat, e.format, i()),
    filters: wg(e.filters),
    transitions: gg(e.transitions),
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
  }, l = (c) => e.timezone ? ug(c, e.timezone) : c, f = (c) => e.timezone ? sg(c, e.timezone) : c, u = G(() => (c) => {
    var O;
    return (O = e.hideNavigation) == null ? void 0 : O.includes(c);
  }), d = (c) => {
    const O = e.maxDate ? Je(l(c), l(B(e.maxDate))) : !1, T = e.minDate ? We(l(c), l(B(e.minDate))) : !1, j = F(c, e.disabledDates), z = n.value.filters.months.map((Oe) => +Oe).includes(Me(c)), S = e.disabledWeekDays.length ? e.disabledWeekDays.some((Oe) => +Oe === sm(c)) : !1, w = e.allowedDates.length ? !e.allowedDates.some((Oe) => Ce(l(B(Oe)), l(c))) : !1, L = Ne(c), me = L < +e.yearRange[0] || L > +e.yearRange[1];
    return !(O || T || j || z || me || S || w);
  }, s = (c) => {
    const O = {
      hours: ht(B()),
      minutes: vt(B()),
      seconds: Ht(B())
    };
    return Object.assign(O, c);
  }, p = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [s(e.startTime[0]), s(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? s(e.startTime) : null, v = (c) => !d(c), b = (c) => Array.isArray(c) ? tn(c[0]) && (c[1] ? tn(c[1]) : !0) : c ? tn(c) : !1, N = (c) => c instanceof Date ? c : B0(c), H = (c) => {
    const O = Ta(l(c), { weekStartsOn: +e.weekStart }), T = ap(l(c), { weekStartsOn: +e.weekStart });
    return [O, T];
  }, F = (c, O) => Array.isArray(O) ? O.some((T) => Ce(l(B(T)), l(c))) : O(c), E = (c, O, T) => {
    let j = c ? B(c) : B();
    return (O || O === 0) && (j = rn(j, O)), T && (j = Bt(j, T)), j;
  }, W = (c) => Qe(B(), { hours: ht(c), minutes: vt(c), seconds: Ht(c) }), J = (c) => Qe(B(), {
    hours: +c.hours || 0,
    minutes: +c.minutes || 0,
    seconds: +c.seconds || 0
  }), re = (c, O, T, j) => {
    if (!c)
      return !0;
    if (j) {
      const z = T === "max" ? ai(c, O) : ri(c, O), S = { seconds: 0, milliseconds: 0 };
      return z || Bu(Qe(c, S), Qe(O, S));
    }
    return T === "max" ? c.getTime() <= O.getTime() : c.getTime() >= O.getTime();
  }, h = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, x = (c) => Array.isArray(c) ? [c[0] ? W(c[0]) : null, c[1] ? W(c[1]) : null] : W(c), Y = (c) => {
    const O = e.maxTime ? J(e.maxTime) : B(e.maxDate);
    return Array.isArray(c) ? re(c[0], O, "max", !!e.maxDate) && re(c[1], O, "max", !!e.maxDate) : re(c, O, "max", !!e.maxDate);
  }, Q = (c, O) => {
    const T = e.minTime ? J(e.minTime) : B(e.minDate);
    return Array.isArray(c) ? re(c[0], T, "min", !!e.minDate) && re(c[1], T, "min", !!e.minDate) && O : re(c, T, "min", !!e.minDate) && O;
  }, ne = (c) => {
    let O = !0;
    if (!c || h())
      return !0;
    const T = !e.minDate && !e.maxDate ? x(c) : c;
    return (e.maxTime || e.maxDate) && (O = Y(He(T))), (e.minTime || e.minDate) && (O = Q(He(T), O)), O;
  }, U = (c, O) => {
    const T = B(JSON.parse(JSON.stringify(c))), j = [];
    for (let z = 0; z < 7; z++) {
      const S = $t(T, z), w = Me(S) !== O;
      j.push({
        text: e.hideOffsetDates && w ? "" : S.getDate(),
        value: S,
        current: !w,
        classData: {}
      });
    }
    return j;
  }, Z = (c, O) => {
    const T = [], j = B(l(new Date(O, c))), z = B(l(new Date(O, c + 1, 0))), S = Ta(j, { weekStartsOn: e.weekStart }), w = (L) => {
      const me = U(L, c);
      if (T.push({ days: me }), !T[T.length - 1].days.some(
        (Oe) => Ce(mt(Oe.value), mt(z))
      )) {
        const Oe = $t(L, 7);
        w(Oe);
      }
    };
    if (w(S), e.sixWeeks && T.length < 6) {
      const L = 6 - T.length;
      for (let me = 1; me <= L; me++) {
        const Oe = T[T.length - 1], xe = Oe.days[Oe.days.length - 1], ge = U($t(xe.value, 1), Me(j));
        T.push({ days: ge });
      }
    }
    return T;
  }, P = (c, O, T) => [Qe(B(c), { date: 1 }), Qe(B(), { month: O, year: T, date: 1 })], _ = (c, O) => We(...P(e.minDate, c, O)) || Ce(...P(e.minDate, c, O)), C = (c, O) => Je(...P(e.maxDate, c, O)) || Ce(...P(e.maxDate, c, O)), M = (c, O, T) => {
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
    isDisabled: v,
    isValidDate: b,
    sanitizeDate: N,
    getWeekFromDate: H,
    matchDate: F,
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
}, De = ln({
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
}), ya = q(null), vn = q(!1), ha = q(!1), va = q(!1), ba = q(!1), Ge = q(0), Ye = q(0), Pt = () => {
  const e = G(() => vn.value ? [...De.selectionGrid, De.actionRow].filter((s) => s.length) : ha.value ? [
    ...De.timePicker[0],
    ...De.timePicker[1],
    ba.value ? [] : [ya.value],
    De.actionRow
  ].filter((s) => s.length) : va.value ? [...De.monthPicker, De.actionRow] : [De.monthYear, ...De.calendar, De.time, De.actionRow].filter((s) => s.length)), t = (s) => {
    Ge.value = s ? Ge.value + 1 : Ge.value - 1;
    let p = null;
    e.value[Ye.value] && (p = e.value[Ye.value][Ge.value]), p || (Ge.value = s ? Ge.value - 1 : Ge.value + 1);
  }, n = (s) => {
    Ye.value === 0 && !s || Ye.value === e.value.length && s || (Ye.value = s ? Ye.value + 1 : Ye.value - 1, e.value[Ye.value] ? e.value[Ye.value] && !e.value[Ye.value][Ge.value] && Ge.value !== 0 && (Ge.value = e.value[Ye.value].length - 1) : Ye.value = s ? Ye.value - 1 : Ye.value + 1);
  }, r = (s) => {
    let p = null;
    e.value[Ye.value] && (p = e.value[Ye.value][Ge.value]), p ? p.focus({ preventScroll: !vn.value }) : Ge.value = s ? Ge.value - 1 : Ge.value + 1;
  }, a = () => {
    t(!0), r(!0);
  }, i = () => {
    t(!1), r(!1);
  }, o = () => {
    n(!1), r(!0);
  }, l = () => {
    n(!0), r(!0);
  }, f = (s, p) => {
    De[p] = s;
  }, u = (s, p) => {
    De[p] = s;
  }, d = () => {
    Ge.value = 0, Ye.value = 0;
  };
  return {
    buildMatrix: f,
    buildMultiLevelMatrix: u,
    setTimePickerBackRef: (s) => {
      ya.value = s;
    },
    setSelectionGrid: (s) => {
      vn.value = s, d(), s || (De.selectionGrid = []);
    },
    setTimePicker: (s, p = !1) => {
      ha.value = s, ba.value = p, d(), s || (De.timePicker[0] = [], De.timePicker[1] = []);
    },
    setTimePickerElements: (s, p = 0) => {
      De.timePicker[p] = s;
    },
    arrowRight: a,
    arrowLeft: i,
    arrowUp: o,
    arrowDown: l,
    clearArrowNav: () => {
      De.monthYear = [], De.calendar = [], De.time = [], De.actionRow = [], De.selectionGrid = [], De.timePicker[0] = [], De.timePicker[1] = [], vn.value = !1, ha.value = !1, ba.value = !1, va.value = !1, d(), ya.value = null;
    },
    setMonthPicker: (s) => {
      va.value = s, d();
    },
    refSets: De
  };
}, nu = (e) => Array.isArray(e), xt = (e) => Array.isArray(e), ru = (e) => Array.isArray(e) && e.length === 2, Og = (e, t, n, r) => {
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
  const v = q([{ month: Me(B()), year: Ne(B()) }]), b = ln({
    hours: e.range ? [ht(B()), ht(B())] : ht(B()),
    minutes: e.range ? [vt(B()), vt(B())] : vt(B()),
    seconds: e.range ? [0, 0] : 0
  }), N = G(
    () => (y) => v.value[y] ? v.value[y].month : 0
  ), H = G(
    () => (y) => v.value[y] ? v.value[y].year : 0
  ), F = (y, A, te) => {
    v.value[y].month = A === null ? v.value[y].month : A, v.value[y].year = te === null ? v.value[y].year : te;
  }, E = (y, A) => {
    b[y] = A;
  };
  tt(() => {
    s.value || (e.startDate && (F(0, Me(B(e.startDate)), Ne(B(e.startDate))), d.value.multiCalendars && yt(0)), d.value.startTime && P()), W(!0);
  });
  const W = (y = !1) => {
    if (s.value)
      return Array.isArray(s.value) ? Y(y) : re(s.value);
    if (e.timePicker)
      return Q();
    if (e.monthPicker && !e.range)
      return ne();
    if (e.yearPicker && !e.range)
      return U();
    if (d.value.multiCalendars)
      return J(B(), y);
  }, J = (y, A = !1) => {
    if ((!d.value.multiCalendars || !e.multiStatic || A) && F(0, Me(y), Ne(y)), d.value.multiCalendars)
      for (let te = 1; te <= d.value.multiCalendars; te++) {
        const ce = Qe(B(), { month: N.value(te - 1), year: H.value(te - 1) }), Ie = ku(ce, { months: 1 });
        v.value[te] = { month: Me(Ie), year: Ne(Ie) };
      }
  }, re = (y) => {
    J(y), E("hours", ht(y)), E("minutes", vt(y)), E("seconds", Ht(y));
  }, h = (y, A) => {
    J(y[0], A);
    const te = (ce) => [
      ce(y[0]),
      y[1] ? ce(y[1]) : ce(B())
    ];
    E("hours", te(ht)), E("minutes", te(vt)), E("seconds", te(Ht));
  }, x = (y, A) => {
    if (e.range && !e.multiDates)
      return h(y, A);
    if (e.multiDates) {
      const te = y[y.length - 1];
      return re(te);
    }
  }, Y = (y) => {
    const A = s.value;
    x(A, y), d.value.multiCalendars && e.multiCalendarsSolo && C();
  }, Q = () => {
    if (P(), !e.range)
      s.value = ot(B(), b.hours, b.minutes, Z());
    else {
      const y = b.hours, A = b.minutes;
      s.value = [
        ot(B(), y[0], A[0], Z()),
        ot(B(), y[1], A[1], Z(!1))
      ];
    }
  }, ne = () => {
    s.value = f(B(), N.value(0), H.value(0));
  }, U = () => {
    s.value = B();
  }, Z = (y = !0) => e.enableSeconds ? Array.isArray(b.seconds) ? y ? b.seconds[0] : b.seconds[1] : b.seconds : 0, P = () => {
    const y = a();
    if (y) {
      const A = Array.isArray(y), te = A ? [+y[0].hours, +y[1].hours] : +y.hours, ce = A ? [+y[0].minutes, +y[1].minutes] : +y.minutes, Ie = A ? [+y[0].seconds, +y[1].seconds] : +y.seconds;
      E("hours", te), E("minutes", ce), e.enableSeconds && E("seconds", Ie);
    }
  }, _ = () => Array.isArray(s.value) && s.value.length ? s.value[s.value.length - 1] : null, C = () => {
    if (Array.isArray(s.value) && s.value.length === 2) {
      const y = B(
        B(s.value[1] ? s.value[1] : pt(s.value[0], 1))
      ), [A, te] = [Me(s.value[0]), Ne(s.value[0])], [ce, Ie] = [Me(s.value[1]), Ne(s.value[1])];
      (A !== ce || A === ce && te !== Ie) && e.multiCalendarsSolo && F(1, Me(y), Ne(y));
    }
  }, M = (y) => {
    const A = pt(y, 1);
    return { month: Me(A), year: Ne(A) };
  }, c = (y) => {
    const A = Me(B(y)), te = Ne(B(y));
    if (F(0, A, te), d.value.multiCalendars > 0)
      for (let ce = 1; ce < d.value.multiCalendars; ce++) {
        const Ie = M(
          Qe(B(y), { year: N.value(ce - 1), month: H.value(ce - 1) })
        );
        F(ce, Ie.month, Ie.year);
      }
  }, O = (y) => {
    if (s.value && Array.isArray(s.value))
      if (s.value.some((A) => Ce(y, A))) {
        const A = s.value.filter((te) => !Ce(te, y));
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
      const A = np(y, s.value[0]), te = T(s.value[0], y), ce = te.length === 1 ? 0 : te.filter((ct) => i(ct)).length, Ie = Math.abs(A) - ce;
      if (e.minRange && e.maxRange)
        return Ie >= +e.minRange && Ie <= +e.maxRange;
      if (e.minRange)
        return Ie >= +e.minRange;
      if (e.maxRange)
        return Ie <= +e.maxRange;
    }
    return !0;
  }, z = (y) => Array.isArray(s.value) && s.value.length === 2 ? e.fixedStart && (Je(y, s.value[0]) || Ce(y, s.value[0])) ? [s.value[0], y] : e.fixedEnd && (We(y, s.value[1]) || Ce(y, s.value[1])) ? [y, s.value[1]] : s.value : [], S = () => {
    e.autoApply && t("auto-apply");
  }, w = () => {
    e.autoApply && t("select-date");
  }, L = (y) => !xi({ start: y[0], end: y[1] }).some((A) => i(A)), me = (y) => (s.value = l(B(y.value)), S()), Oe = (y) => {
    const A = ot(B(y.value), b.hours, b.minutes, Z());
    e.multiDates ? O(A) : s.value = A, n(), S();
  }, xe = () => {
    p.value = s.value ? s.value.slice() : [], p.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (p.value = []);
  }, ge = (y, A) => {
    const te = [B(y.value), $t(B(y.value), +e.autoRange)];
    L(te) && (A && c(y.value), p.value = te);
  }, ye = (y) => {
    p.value = z(B(y.value));
  }, ee = (y) => e.noDisabledRange ? T(p.value[0], y).some((A) => i(A)) : !1, nt = (y, A) => {
    if (xe(), e.autoRange)
      return ge(y, A);
    if (e.fixedStart || e.fixedEnd)
      return ye(y);
    p.value[0] ? j(B(y.value)) && !ee(y.value) && (We(B(y.value), B(p.value[0])) ? p.value.unshift(B(y.value)) : p.value[1] = B(y.value)) : p.value[0] = B(y.value);
  }, pe = (y) => {
    p.value[y] = ot(
      p.value[y],
      b.hours[y],
      b.minutes[y],
      Z(y !== 1)
    );
  }, $e = () => {
    p.value.length && (p.value[0] && !p.value[1] ? pe(0) : (pe(0), pe(1), n()), s.value = p.value.slice(), p.value[0] && p.value[1] && e.autoApply && t("auto-apply"), p.value[0] && !p.value[1] && e.modelAuto && e.autoApply && t("auto-apply"));
  }, Ae = (y, A = !1) => {
    if (!(i(y.value) || !y.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return me(y);
      if (!e.range)
        return Oe(y);
      xt(b.hours) && xt(b.minutes) && !e.multiDates && (nt(y, A), $e());
    }
  }, st = (y) => {
    const A = y.find((te) => te.current);
    return A ? dm(A.value) : "";
  }, yt = (y) => {
    for (let A = y - 1; A >= 0; A--) {
      const te = Yt(Qe(B(), { month: N.value(A + 1), year: H.value(A + 1) }), 1);
      F(A, Me(te), Ne(te));
    }
    for (let A = y + 1; A <= d.value.multiCalendars - 1; A++) {
      const te = pt(Qe(B(), { month: N.value(A - 1), year: H.value(A - 1) }), 1);
      F(A, Me(te), Ne(te));
    }
  }, Dt = (y) => f(B(), N.value(y), H.value(y)), zt = (y) => ot(y, b.hours, b.minutes, Z()), Zr = (y, A) => {
    const te = e.monthPicker ? N.value(y) !== A.month || !A.fromNav : H.value(y) !== A.year;
    if (F(y, A.month, A.year), d.value.multiCalendars && !e.multiCalendarsSolo && yt(y), e.monthPicker || e.yearPicker)
      if (e.range) {
        if (te) {
          let ce = s.value ? s.value.slice() : [];
          ce.length === 2 && ce[1] !== null && (ce = []), ce.length ? We(Dt(y), ce[0]) ? ce.unshift(Dt(y)) : ce[1] = Dt(y) : ce = [Dt(y)], s.value = ce;
        }
      } else
        s.value = Dt(y);
    t("update-month-year", { instance: y, month: A.month, year: A.year }), r(e.multiCalendarsSolo ? y : void 0);
  }, Jr = async (y = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await sn();
      const A = e.monthPicker ? y : !1;
      e.range ? t("auto-apply", A || !s.value || s.value.length === 1) : t("auto-apply", A);
    }
    n();
  }, dn = (y, A) => {
    const te = Qe(B(), { month: N.value(A), year: H.value(A) }), ce = y < 0 ? pt(te, 1) : Yt(te, 1);
    u(Me(ce), Ne(ce), y < 0, e.preventMinMaxNavigation) && (F(A, Me(ce), Ne(ce)), d.value.multiCalendars && !e.multiCalendarsSolo && yt(A), r());
  }, Gt = (y) => {
    nu(y) && nu(s.value) && xt(b.hours) && xt(b.minutes) ? (y[0] && s.value[0] && (s.value[0] = ot(y[0], b.hours[0], b.minutes[0], Z())), y[1] && s.value[1] && (s.value[1] = ot(y[1], b.hours[1], b.minutes[1], Z(!1)))) : e.multiDates && Array.isArray(s.value) ? s.value[s.value.length - 1] = zt(y) : !e.range && !ru(y) && (s.value = zt(y)), t("time-update");
  }, Kr = (y, A = !0, te = !1) => {
    const ce = A ? y : b.hours, Ie = !A && !te ? y : b.minutes, ct = te ? y : b.seconds;
    if (e.range && ru(s.value) && xt(ce) && xt(Ie) && xt(ct) && !e.disableTimeRangeValidation) {
      const Rt = (K) => ot(s.value[K], ce[K], Ie[K], ct[K]), D = (K) => si(s.value[K], 0);
      if (Ce(s.value[0], s.value[1]) && (ri(Rt(0), D(1)) || ai(Rt(1), D(0))))
        return;
    }
    if (E("hours", ce), E("minutes", Ie), E("seconds", ct), s.value)
      if (e.multiDates) {
        const Rt = _();
        Rt && Gt(Rt);
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
    time: b,
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
    getMarker: (y) => e.markers.find((A) => Ce(o(y.value), o(A.date))),
    handleArrow: ea,
    handleSwipe: pn,
    selectCurrentDate: () => {
      e.range ? s.value && Array.isArray(s.value) && s.value[0] ? s.value = We(B(), s.value[0]) ? [B(), s.value[0]] : [s.value[0], B()] : s.value = [B()] : s.value = B(), w();
    },
    presetDateRange: (y, A) => {
      A || y.length && y.length <= 2 && e.range && (s.value = y.map((te) => B(te)), w());
    }
  };
}, $g = (e, t, n) => {
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
  } = at(t), v = q("");
  un(r, () => {
    e("internal-model-change", r.value);
  });
  const b = (S) => {
    const w = S || B();
    return {
      hours: ht(w),
      minutes: vt(w),
      seconds: t.enableSeconds ? Ht(w) : 0
    };
  }, N = (S) => ({ month: Me(S), year: Ne(S) }), H = (S) => Array.isArray(S) ? f(() => [
    Bt(B(), S[0]),
    S[1] ? Bt(B(), S[1]) : u()
  ]) : Bt(B(), +S), F = (S) => Array.isArray(S) ? [
    ot(null, +S[0].hours, +S[0].minutes, S[0].seconds),
    ot(null, +S[1].hours, +S[1].minutes, S[1].seconds)
  ] : ot(null, S.hours, S.minutes, S == null ? void 0 : S.seconds), E = (S) => Array.isArray(S) ? f(() => [
    s(null, +S[0].month, +S[0].year),
    S[1] ? s(null, +S[1].month, +S[1].year) : u()
  ]) : s(null, +S.month, +S.year), W = (S) => {
    if (Array.isArray(S))
      return S.map((w) => c(w));
    throw new Error(Hr.dateArr("multi-dates"));
  }, J = (S) => {
    if (Array.isArray(S))
      return [B(S[0]), B(S[1])];
    throw new Error(Hr.dateArr("week-picker"));
  }, re = (S) => t.modelAuto ? Array.isArray(S) ? [c(S[0]), c(S[1])] : t.autoApply ? [c(S)] : [c(S), null] : Array.isArray(S) ? f(() => [
    c(S[0]),
    S[1] ? c(S[1]) : u()
  ]) : c(S), h = () => {
    Array.isArray(r.value) && t.range && r.value.length === 1 && r.value.push(u());
  }, x = () => {
    const S = r.value;
    return [
      O(S[0]),
      S[1] ? O(S[1]) : u()
    ];
  }, Y = () => r.value[1] ? x() : O(He(r.value[0])), Q = () => r.value.map((S) => O(S)), ne = () => (h(), t.modelAuto ? Y() : t.multiDates ? Q() : Array.isArray(r.value) ? f(() => x()) : O(He(r.value))), U = (S) => S ? t.timePicker ? F(He(S)) : t.monthPicker ? E(He(S)) : t.yearPicker ? H(He(S)) : t.multiDates ? W(He(S)) : t.weekPicker ? J(He(S)) : re(He(S)) : null, Z = (S) => {
    const w = U(S);
    d(He(w)) ? (r.value = He(w), M()) : (r.value = null, v.value = "");
  }, P = () => {
    var S;
    const w = (L) => {
      var me;
      return nn(L, (me = p.value.textInputOptions) == null ? void 0 : me.format);
    };
    return `${w(r.value[0])} ${(S = p.value.textInputOptions) == null ? void 0 : S.rangeSeparator} ${r.value[1] ? w(r.value[1]) : ""}`;
  }, _ = () => {
    var S;
    return n.value && r.value ? Array.isArray(r.value) ? P() : nn(r.value, (S = p.value.textInputOptions) == null ? void 0 : S.format) : o(r.value);
  }, C = () => {
    var S;
    return r.value ? t.multiDates ? r.value.map((w) => o(w)).join("; ") : t.textInput && typeof ((S = p.value.textInputOptions) == null ? void 0 : S.format) == "string" ? _() : o(r.value) : "";
  }, M = () => {
    !t.format || typeof t.format == "string" ? v.value = C() : v.value = t.format(r.value);
  }, c = (S) => {
    if (t.utc) {
      const w = new Date(S);
      return t.utc === "preserve" ? new Date(w.getTime() + w.getTimezoneOffset() * 6e4) : w;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? i(new Date(S)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? Vo(S, l(), new Date()) : i(Vo(S, t.modelType, new Date())) : i(new Date(S));
  }, O = (S) => t.utc ? Yb(S, t.utc === "preserve") : t.modelType ? t.modelType === "timestamp" ? +a(S) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? o(a(S)) : o(a(S), t.modelType) : a(S), T = (S) => {
    e("update:model-value", S);
  }, j = (S) => Array.isArray(r.value) ? [
    S(r.value[0]),
    r.value[1] ? S(r.value[1]) : u()
  ] : S(He(r.value)), z = (S) => T(He(j(S)));
  return {
    inputValue: v,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? t.range ? t.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: Z,
    formatInputValue: M,
    emitModelValue: () => (M(), t.monthPicker ? z(N) : t.timePicker ? z(b) : t.yearPicker ? z(Ne) : t.weekPicker ? T(r.value) : T(ne()))
  };
}, Sg = (e, t) => {
  const { validateMonthYearInRange: n, validateMaxDate: r, validateMinDate: a, defaults: i } = at(e), o = (s, p) => {
    let v = s;
    return i.value.filters.months.includes(Me(v)) ? (v = p ? pt(s, 1) : Yt(s, 1), o(v, p)) : v;
  }, l = (s, p) => {
    let v = s;
    return i.value.filters.years.includes(Ne(v)) ? (v = p ? Pu(s, 1) : X0(s, 1), l(v, p)) : v;
  }, f = (s) => {
    const p = Qe(new Date(), { month: e.month, year: e.year });
    let v = s ? pt(p, 1) : Yt(p, 1), b = Me(v), N = Ne(v);
    i.value.filters.months.includes(b) && (v = o(v, s), b = Me(v), N = Ne(v)), i.value.filters.years.includes(N) && (v = l(v, s), N = Ne(v)), n(b, N, s, e.preventMinMaxNavigation) && u(b, N);
  }, u = (s, p) => {
    t("update-month-year", { month: s, year: p });
  }, d = G(() => (s) => {
    if (!e.preventMinMaxNavigation || s && !e.maxDate || !s && !e.minDate)
      return !1;
    const p = Qe(new Date(), { month: e.month, year: e.year }), v = s ? pt(p, 1) : Yt(p, 1), b = [Me(v), Ne(v)];
    return s ? !r(...b) : !a(...b);
  });
  return { handleMonthYearChange: f, isDisabled: d, updateMonthYear: u };
};
var lr = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(lr || {});
const kg = (e, t, n, r) => {
  const a = q({
    top: "0",
    left: "0",
    transform: "none"
  }), i = q(!1), o = wa(r, "teleportCenter");
  un(o, () => {
    H();
  });
  const l = (h) => {
    const x = h.getBoundingClientRect();
    return {
      left: x.left + window.scrollX,
      top: x.top + window.scrollY
    };
  }, f = (h) => {
    const x = h.getBoundingClientRect();
    let Y = 0, Q = 0;
    for (; h && !isNaN(h.offsetLeft) && !isNaN(h.offsetTop); )
      Y += h.offsetLeft - h.scrollLeft, Q = x.top + h.scrollTop, h = h.offsetParent;
    return { top: Q, left: Y };
  }, u = (h, x) => {
    a.value.left = `${h + x}px`, a.value.transform = "translateX(-100%)";
  }, d = (h) => {
    a.value.left = `${h}px`, a.value.transform = "translateX(0)";
  }, s = (h, x, Y = !1) => {
    r.position === lr.left && d(h), r.position === lr.right && u(h, x), r.position === lr.center && (a.value.left = `${h + x / 2}px`, a.value.transform = Y ? "translate(-50%, -50%)" : "translateX(-50%)");
  }, p = (h) => {
    const { width: x, height: Y } = h.getBoundingClientRect(), { top: Q, left: ne } = r.altPosition ? f(h) : l(h);
    return { top: Q, left: ne, width: x, height: Y };
  }, v = () => {
    const h = je(t);
    if (h) {
      const { top: x, left: Y, width: Q, height: ne } = p(h);
      a.value.top = `${x + ne / 2}px`, a.value.transform = "translateY(-50%)", s(Y, Q, !0);
    }
  }, b = () => {
    a.value.left = "50%", a.value.top = "50%", a.value.transform = "translate(-50%, -50%)", a.value.position = "fixed";
  }, N = () => {
    const h = je(t);
    a.value = r.altPosition(h);
  }, H = (h = !0) => {
    if (!r.inline)
      return o.value ? b() : r.altPosition && typeof r.altPosition != "boolean" ? N() : (h && n("recalculate-position"), re());
  }, F = (h, x) => {
    const { top: Y, left: Q, height: ne, width: U } = p(h);
    a.value.top = `${ne + Y + +r.offset}px`, s(Q, U), W(h, x), i.value = !1;
  }, E = (h, x) => {
    const { top: Y, left: Q, width: ne } = p(h), { height: U } = x.getBoundingClientRect();
    a.value.top = `${Y - U - +r.offset}px`, s(Q, ne), W(h, x), i.value = !0;
  }, W = (h, x) => {
    if (r.autoPosition) {
      const { left: Y, width: Q } = p(h), { left: ne, right: U } = x.getBoundingClientRect();
      if (ne < 0)
        return d(Y);
      if (U > document.documentElement.clientWidth)
        return u(Y, Q);
    }
  }, J = (h, x) => {
    const { height: Y } = x.getBoundingClientRect(), { top: Q, height: ne } = h.getBoundingClientRect(), U = window.innerHeight - Q - ne, Z = Q;
    return Y <= U ? F(h, x) : Y > U && Y <= Z ? E(h, x) : U >= Z ? F(h, x) : E(h, x);
  }, re = () => {
    const h = je(t), x = je(e);
    if (h && x)
      return r.autoPosition ? J(h, x) : F(h, x);
  };
  return { openOnTop: i, menuPosition: a, setMenuPosition: H, setInitialPosition: v };
}, Ft = [
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
], Pg = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], Tg = {
  all: () => Ft,
  monthYear: () => Ft.filter((e) => e.use.includes("month-year")),
  input: () => Pg,
  timePicker: () => Ft.filter((e) => e.use.includes("time")),
  action: () => Ft.filter((e) => e.use.includes("action")),
  calendar: () => Ft.filter((e) => e.use.includes("calendar")),
  menu: () => Ft.filter((e) => e.use.includes("menu"))
}, Et = (e, t, n) => {
  const r = [];
  return Tg[t]().forEach((a) => {
    e[a.name] && r.push(a.name);
  }), n && n.length && n.forEach((a) => {
    a.slot && r.push(a.slot);
  }), r;
}, Qr = (e) => ({ transitionName: G(() => (t) => e && typeof e != "boolean" ? t ? e.open : e.close : ""), showTransition: !!e }), Tt = {
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
}, Dg = ["aria-label", "aria-disabled", "aria-readonly"], Rg = {
  key: 1,
  class: "dp__input_wrap"
}, xg = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"], Cg = {
  key: 2,
  class: "dp__input_icon"
}, Mg = {
  key: 4,
  class: "dp__clear_icon"
}, Ng = /* @__PURE__ */ _e({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...Tt
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
    }, p = (h) => {
      var x;
      return Fb(h, ((x = o.value.textInputOptions) == null ? void 0 : x.format) || a());
    }, v = (h) => {
      const { rangeSeparator: x } = o.value.textInputOptions;
      if (r.range) {
        const [Y, Q] = h.split(`${x}`);
        if (Y && Q) {
          const ne = p(Y.trim()), U = p(Q.trim());
          l.value = ne && U ? [ne, U] : null;
        }
      } else
        l.value = p(h);
    }, b = (h) => {
      var x;
      const { value: Y } = h.target;
      Y !== "" ? (((x = o.value.textInputOptions) == null ? void 0 : x.openMenu) && !r.isMenuOpen && n("open"), v(Y), n("set-input-date", l.value)) : s(), n("update:input-value", Y);
    }, N = () => {
      var h, x;
      ((h = o.value.textInputOptions) == null ? void 0 : h.enterSubmit) && i(l.value) && r.inputValue !== "" ? (n("set-input-date", l.value, !0), l.value = null) : ((x = o.value.textInputOptions) == null ? void 0 : x.enterSubmit) && r.inputValue === "" && (l.value = null, n("clear"));
    }, H = () => {
      var h, x;
      ((h = o.value.textInputOptions) == null ? void 0 : h.tabSubmit) && i(l.value) && r.inputValue !== "" ? (n("set-input-date", l.value, !0), l.value = null) : ((x = o.value.textInputOptions) == null ? void 0 : x.tabSubmit) && r.inputValue === "" && (l.value = null, n("clear"));
    }, F = () => {
      u.value = !0, n("focus");
    }, E = (h) => {
      var x;
      h.preventDefault(), h.stopImmediatePropagation(), h.stopPropagation(), r.textInput && ((x = o.value.textInputOptions) == null ? void 0 : x.openMenu) && !r.inlineWithInput ? r.isMenuOpen ? o.value.textInputOptions.enterSubmit && n("select-date") : n("open") : r.textInput || n("toggle");
    }, W = () => {
      u.value = !1, r.isMenuOpen || n("blur"), r.autoApply && r.textInput && l.value && (n("set-input-date", l.value), n("select-date"), l.value = null);
    }, J = () => {
      n("clear");
    }, re = (h) => {
      r.textInput || h.preventDefault();
    };
    return t({
      focusInput: () => {
        f.value && f.value.focus({ preventScroll: !0 });
      }
    }), (h, x) => {
      var Y;
      return m(), $("div", {
        onClick: E,
        "aria-label": (Y = g(o).ariaLabels) == null ? void 0 : Y.input,
        role: "textbox",
        "aria-multiline": "false",
        "aria-disabled": h.disabled,
        "aria-readonly": h.readonly
      }, [
        h.$slots.trigger && !h.$slots["dp-input"] && !h.inline ? V(h.$slots, "trigger", { key: 0 }) : k("", !0),
        !h.$slots.trigger && (!h.inline || h.inlineWithInput) ? (m(), $("div", Rg, [
          h.$slots["dp-input"] && !h.$slots.trigger && !h.inline ? V(h.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            onInput: b,
            onEnter: N,
            onTab: H,
            onClear: J
          }) : k("", !0),
          h.$slots["dp-input"] ? k("", !0) : (m(), $("input", {
            key: 1,
            ref_key: "inputRef",
            ref: f,
            id: h.uid ? `dp-input-${h.uid}` : void 0,
            name: h.name,
            class: ke(g(d)),
            inputmode: h.textInput ? "text" : "none",
            placeholder: h.placeholder,
            disabled: h.disabled,
            readonly: h.readonly,
            required: h.required,
            value: e.inputValue,
            autocomplete: h.autocomplete,
            onInput: b,
            onKeydown: [
              ue(E, ["enter"]),
              ue(H, ["tab"])
            ],
            onBlur: W,
            onFocus: F,
            onKeypress: re
          }, null, 42, xg)),
          h.$slots["input-icon"] && !h.hideInputIcon ? (m(), $("span", Cg, [
            V(h.$slots, "input-icon")
          ])) : k("", !0),
          !h.$slots["input-icon"] && !h.hideInputIcon && !h.$slots["dp-input"] ? (m(), fe(g(Gr), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : k("", !0),
          h.$slots["clear-icon"] && e.inputValue && h.clearable && !h.disabled && !h.readonly ? (m(), $("span", Mg, [
            V(h.$slots, "clear-icon", { clear: J })
          ])) : k("", !0),
          h.clearable && !h.$slots["clear-icon"] && e.inputValue && !h.disabled && !h.readonly ? (m(), fe(g(mb), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: Pe(J, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : k("", !0)
        ])) : k("", !0)
      ], 8, Dg);
    };
  }
}), Eg = { class: "dp__selection_preview" }, Ag = { class: "dp__action_buttons" }, Bg = ["onKeydown"], Ig = /* @__PURE__ */ _e({
  __name: "ActionRow",
  props: {
    calendarWidth: { type: Number, default: 0 },
    menuMount: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Tt
  },
  emits: ["close-picker", "select-date", "invalid-select"],
  setup(e, { emit: t }) {
    const n = e, { formatDate: r, isValidTime: a, defaults: i } = at(n), { buildMatrix: o } = Pt(), l = q(null), f = q(null);
    tt(() => {
      n.arrowNavigation && o([je(l), je(f)], "actionRow");
    });
    const u = G(() => n.range && !n.partialRange && n.internalModelValue ? n.internalModelValue.length === 2 : !0), d = G(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: !s.value || !p.value || !u.value
    })), s = G(() => !n.enableTimePicker || n.ignoreTimeValidation ? !0 : a(n.internalModelValue)), p = G(() => n.monthPicker ? H(n.internalModelValue) : !0), v = () => {
      const E = i.value.previewFormat;
      return n.timePicker || n.monthPicker, E(He(n.internalModelValue));
    }, b = () => {
      const E = n.internalModelValue;
      return i.value.multiCalendars > 0 ? `${r(E[0])} - ${r(E[1])}` : [r(E[0]), r(E[1])];
    }, N = G(() => !n.internalModelValue || !n.menuMount ? "" : typeof i.value.previewFormat == "string" ? Array.isArray(n.internalModelValue) ? n.internalModelValue.length === 2 && n.internalModelValue[1] ? b() : n.multiDates ? n.internalModelValue.map((E) => `${r(E)}`) : n.modelAuto ? `${r(n.internalModelValue[0])}` : `${r(n.internalModelValue[0])} -` : r(n.internalModelValue) : v()), H = (E) => {
      if (!n.monthPicker)
        return !0;
      let W = !0;
      return n.minDate && n.maxDate ? Je(B(E), B(n.minDate)) && We(B(E), B(n.maxDate)) : (n.minDate && (W = Je(B(E), B(n.minDate))), n.maxDate && (W = We(B(E), B(n.maxDate))), W);
    }, F = () => {
      s.value && p.value && u.value ? t("select-date") : t("invalid-select");
    };
    return (E, W) => (m(), $("div", {
      class: "dp__action_row",
      style: Nt(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      I("div", Eg, [
        E.$slots["action-preview"] ? V(E.$slots, "action-preview", {
          key: 0,
          value: e.internalModelValue
        }) : k("", !0),
        E.$slots["action-preview"] ? k("", !0) : (m(), $(de, { key: 1 }, [
          Array.isArray(g(N)) ? k("", !0) : (m(), $(de, { key: 0 }, [
            Re(ae(g(N)), 1)
          ], 64)),
          Array.isArray(g(N)) ? (m(!0), $(de, { key: 1 }, Te(g(N), (J, re) => (m(), $("div", { key: re }, ae(J), 1))), 128)) : k("", !0)
        ], 64))
      ]),
      I("div", Ag, [
        E.$slots["action-select"] ? V(E.$slots, "action-select", {
          key: 0,
          value: e.internalModelValue
        }) : k("", !0),
        E.$slots["action-select"] ? k("", !0) : (m(), $(de, { key: 1 }, [
          E.inline ? k("", !0) : (m(), $("span", {
            key: 0,
            class: "dp__action dp__cancel",
            ref_key: "cancelButtonRef",
            ref: l,
            tabindex: "0",
            onClick: W[0] || (W[0] = (J) => E.$emit("close-picker")),
            onKeydown: [
              W[1] || (W[1] = ue((J) => E.$emit("close-picker"), ["enter"])),
              W[2] || (W[2] = ue((J) => E.$emit("close-picker"), ["space"]))
            ]
          }, ae(E.cancelText), 545)),
          I("span", {
            class: ke(g(d)),
            tabindex: "0",
            onKeydown: [
              ue(F, ["enter"]),
              ue(F, ["space"])
            ],
            onClick: F,
            "data-test": "select-button",
            ref_key: "selectButtonRef",
            ref: f
          }, ae(E.selectText), 43, Bg)
        ], 64))
      ])
    ], 4));
  }
}), Lg = ["aria-label"], Vg = {
  class: "dp__calendar_header",
  role: "row"
}, Ug = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, Fg = /* @__PURE__ */ I("div", { class: "dp__calendar_header_separator" }, null, -1), Yg = ["aria-label"], jg = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, Hg = { class: "dp__cell_inner" }, Wg = ["aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseover"], qg = /* @__PURE__ */ I("div", { class: "dp__arrow_bottom_tp" }, null, -1), zg = /* @__PURE__ */ _e({
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
    ...Tt
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
    const r = e, { buildMultiLevelMatrix: a } = Pt(), { setDateMonthOrYear: i, defaults: o } = at(r), l = q(null), f = q({ bottom: "", left: "", transform: "" }), u = q([]), d = q(null), s = q(!0), p = q(""), v = q({ startX: 0, endX: 0, startY: 0, endY: 0 }), b = G(() => r.dayNames ? Array.isArray(r.dayNames) ? r.dayNames : r.dayNames(r.locale, +r.weekStart) : fg(r.locale, +r.weekStart));
    tt(() => {
      n("mount", { cmp: "calendar", refs: u }), r.noSwipe || d.value && (d.value.addEventListener("touchstart", Y, { passive: !1 }), d.value.addEventListener("touchend", Q, { passive: !1 }), d.value.addEventListener("touchmove", ne, { passive: !1 })), r.monthChangeOnScroll && d.value && d.value.addEventListener("wheel", P, { passive: !1 });
    });
    const N = (_) => _ ? r.vertical ? "vNext" : "next" : r.vertical ? "vPrevious" : "previous", H = (_, C) => {
      if (r.transitions) {
        const M = mt(i(B(), r.month, r.year));
        p.value = Je(mt(i(B(), _, C)), M) ? o.value.transitions[N(!0)] : o.value.transitions[N(!1)], s.value = !1, sn(() => {
          s.value = !0;
        });
      }
    }, F = G(
      () => ({
        dp__calendar_wrap: !0,
        [r.calendarClassName]: !!r.calendarClassName
      })
    ), E = G(() => (_) => {
      const C = yg(_);
      return {
        dp__marker_dot: C.type === "dot",
        dp__marker_line: C.type === "line"
      };
    }), W = G(() => (_) => Ce(_, l.value)), J = G(() => ({
      dp__calendar: !0,
      dp__calendar_next: o.value.multiCalendars > 0 && r.instance !== 0
    })), re = G(() => r.specificMode ? { height: `${r.modeHeight}px` } : void 0), h = (_, C, M) => {
      var c, O;
      if (n("set-hover-date", _), (O = (c = _.marker) == null ? void 0 : c.tooltip) != null && O.length) {
        const T = je(u.value[C][M]);
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
      v.value.startX = _.changedTouches[0].screenX, v.value.startY = _.changedTouches[0].screenY;
    }, Q = (_) => {
      v.value.endX = _.changedTouches[0].screenX, v.value.endY = _.changedTouches[0].screenY, U();
    }, ne = (_) => {
      r.vertical && !r.inline && _.preventDefault();
    }, U = () => {
      const _ = r.vertical ? "Y" : "X";
      Math.abs(v.value[`start${_}`] - v.value[`end${_}`]) > 10 && n("handle-swipe", v.value[`start${_}`] > v.value[`end${_}`] ? "right" : "left");
    }, Z = (_, C, M) => {
      _ && (Array.isArray(u.value[C]) ? u.value[C][M] = _ : u.value[C] = [_]), r.arrowNavigation && a(u.value, "calendar");
    }, P = (_) => {
      r.monthChangeOnScroll && (_.preventDefault(), n("handle-scroll", _));
    };
    return t({ triggerTransition: H }), (_, C) => {
      var M;
      return m(), $("div", {
        class: ke(g(J))
      }, [
        I("div", {
          style: Nt(g(re))
        }, [
          e.specificMode ? k("", !0) : (m(), $("div", {
            key: 0,
            ref_key: "calendarWrapRef",
            ref: d,
            class: ke(g(F)),
            role: "grid",
            "aria-label": (M = g(o).ariaLabels) == null ? void 0 : M.calendarWrap
          }, [
            I("div", Vg, [
              _.weekNumbers ? (m(), $("div", Ug, ae(_.weekNumName), 1)) : k("", !0),
              (m(!0), $(de, null, Te(g(b), (c, O) => (m(), $("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: O,
                "data-test": "calendar-header"
              }, [
                _.$slots["calendar-header"] ? V(_.$slots, "calendar-header", {
                  key: 0,
                  day: c,
                  index: O
                }) : k("", !0),
                _.$slots["calendar-header"] ? k("", !0) : (m(), $(de, { key: 1 }, [
                  Re(ae(c), 1)
                ], 64))
              ]))), 128))
            ]),
            Fg,
            he(lt, {
              name: p.value,
              css: !!_.transitions
            }, {
              default: ie(() => {
                var c;
                return [
                  s.value ? (m(), $("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (c = g(o).ariaLabels) == null ? void 0 : c.calendarDays
                  }, [
                    (m(!0), $(de, null, Te(e.mappedDates, (O, T) => (m(), $("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: T
                    }, [
                      _.weekNumbers ? (m(), $("div", jg, [
                        I("div", Hg, ae(e.getWeekNum(O.days)), 1)
                      ])) : k("", !0),
                      (m(!0), $(de, null, Te(O.days, (j, z) => {
                        var S, w, L;
                        return m(), $("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (me) => Z(me, T, z),
                          key: z + T,
                          "aria-selected": j.classData.dp__active_date || j.classData.dp__range_start || j.classData.dp__range_start,
                          "aria-disabled": j.classData.dp__cell_disabled,
                          "aria-label": (w = (S = g(o).ariaLabels) == null ? void 0 : S.day) == null ? void 0 : w.call(S, j),
                          tabindex: "0",
                          "data-test": j.value,
                          onClick: Pe((me) => _.$emit("select-date", j), ["stop", "prevent"]),
                          onKeydown: [
                            ue((me) => _.$emit("select-date", j), ["enter"]),
                            ue((me) => _.$emit("handle-space", j), ["space"])
                          ],
                          onMouseover: (me) => h(j, T, z),
                          onMouseleave: x
                        }, [
                          I("div", {
                            class: ke(["dp__cell_inner", j.classData])
                          }, [
                            _.$slots.day ? V(_.$slots, "day", {
                              key: 0,
                              day: +j.text,
                              date: j.value
                            }) : k("", !0),
                            _.$slots.day ? k("", !0) : (m(), $(de, { key: 1 }, [
                              Re(ae(j.text), 1)
                            ], 64)),
                            j.marker ? (m(), $("div", {
                              key: 2,
                              class: ke(g(E)(j.marker)),
                              style: Nt(j.marker.color ? { backgroundColor: j.marker.color } : {})
                            }, null, 6)) : k("", !0),
                            g(W)(j.value) ? (m(), $("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              style: Nt(f.value)
                            }, [
                              (L = j.marker) != null && L.tooltip ? (m(), $("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: C[0] || (C[0] = Pe(() => {
                                }, ["stop"]))
                              }, [
                                (m(!0), $(de, null, Te(j.marker.tooltip, (me, Oe) => (m(), $("div", {
                                  key: Oe,
                                  class: "dp__tooltip_text"
                                }, [
                                  _.$slots["marker-tooltip"] ? V(_.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltop: me,
                                    day: j.value
                                  }) : k("", !0),
                                  _.$slots["marker-tooltip"] ? k("", !0) : (m(), $(de, { key: 1 }, [
                                    I("div", {
                                      class: "dp__tooltip_mark",
                                      style: Nt(me.color ? { backgroundColor: me.color } : {})
                                    }, null, 4),
                                    I("div", null, ae(me.text), 1)
                                  ], 64))
                                ]))), 128)),
                                qg
                              ])) : k("", !0)
                            ], 4)) : k("", !0)
                          ], 2)
                        ], 40, Wg);
                      }), 128))
                    ]))), 128))
                  ], 8, Yg)) : k("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 10, Lg))
        ], 4)
      ], 2);
    };
  }
}), Gg = ["aria-label", "aria-disabled"], ga = /* @__PURE__ */ _e({
  __name: "ActionIcon",
  props: {
    ariaLabel: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const n = q(null);
    return tt(() => t("set-ref", n)), (r, a) => (m(), $("div", {
      class: "dp__month_year_col_nav",
      onClick: a[0] || (a[0] = (i) => r.$emit("activate")),
      onKeydown: [
        a[1] || (a[1] = ue((i) => r.$emit("activate"), ["enter"])),
        a[2] || (a[2] = ue((i) => r.$emit("activate"), ["space"]))
      ],
      tabindex: "0",
      role: "button",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled,
      ref_key: "elRef",
      ref: n
    }, [
      I("div", {
        class: ke(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        V(r.$slots, "default")
      ], 2)
    ], 40, Gg));
  }
}), Qg = ["onKeydown"], Zg = { class: "dp__selection_grid_header" }, Jg = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], Kg = ["aria-label", "onKeydown"], an = /* @__PURE__ */ _e({
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
    const r = e, { setSelectionGrid: a, buildMultiLevelMatrix: i, setMonthPicker: o } = Pt(), { hideNavigationButtons: l } = at(r), f = q(!1), u = q(null), d = q(null), s = q([]), p = q(), v = q(null);
    is(() => {
      u.value = null;
    }), tt(() => {
      sn().then(() => x()), N(), b(!0);
    }), zo(() => b(!1));
    const b = (_) => {
      var C;
      r.arrowNavigation && ((C = r.headerRefs) != null && C.length ? o(_) : a(_));
    }, N = () => {
      const _ = je(d);
      _ && (r.textInput || _.focus({ preventScroll: !0 }), f.value = _.clientHeight < _.scrollHeight);
    }, H = G(
      () => ({
        dp__overlay: !0
      })
    ), F = G(() => ({
      dp__overlay_col: !0
    })), E = (_) => r.skipActive ? !1 : _.value === r.modelValue, W = G(() => r.items.map((_) => _.filter((C) => C).map((C) => {
      var M, c, O;
      const T = r.disabledValues.some((z) => z === C.value) || h(C.value), j = (M = r.multiModelValue) != null && M.length ? (c = r.multiModelValue) == null ? void 0 : c.some(
        (z) => Ce(
          z,
          Bt(
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
    }), h = (_) => {
      const C = r.maxValue || r.maxValue === 0, M = r.minValue || r.minValue === 0;
      return !C && !M ? !1 : C && M ? +_ > +r.maxValue || +_ < +r.minValue : C ? +_ > +r.maxValue : M ? +_ < +r.minValue : !1;
    }, x = () => {
      const _ = je(u);
      if (_) {
        const C = je(d);
        C && (C.scrollTop = _.offsetTop - C.offsetTop - (C.getBoundingClientRect().height / 2 - _.getBoundingClientRect().height));
      }
    }, Y = (_) => {
      !r.disabledValues.some((C) => C === _) && !h(_) && (n("update:model-value", _), n("selected"));
    }, Q = (_) => {
      const C = r.monthPicker ? r.year : _;
      return Zu(
        r.multiModelValue,
        Bt(
          r.monthPicker ? rn(new Date(), p.value || 0) : new Date(),
          r.monthPicker ? C : p.value || C
        ),
        Bt(r.monthPicker ? rn(new Date(), _) : new Date(), C)
      );
    }, ne = () => {
      n("toggle"), n("reset-flow");
    }, U = () => {
      r.escClose && ne();
    }, Z = (_, C, M, c) => {
      _ && (C.value === +r.modelValue && !r.disabledValues.includes(C.value) && (u.value = _), r.arrowNavigation && (Array.isArray(s.value[M]) ? s.value[M][c] = _ : s.value[M] = [_], P()));
    }, P = () => {
      var _, C;
      const M = (_ = r.headerRefs) != null && _.length ? [r.headerRefs].concat(s.value) : s.value.concat([r.skipButtonRef ? [] : [v.value]]);
      i(He(M), (C = r.headerRefs) != null && C.length ? "monthPicker" : "selectionGrid");
    };
    return t({ focusGrid: N }), (_, C) => {
      var M;
      return m(), $("div", {
        ref_key: "gridWrapRef",
        ref: d,
        class: ke(g(H)),
        role: "dialog",
        tabindex: "0",
        onKeydown: ue(U, ["esc"])
      }, [
        I("div", {
          class: ke(g(re)),
          role: "grid"
        }, [
          I("div", Zg, [
            V(_.$slots, "header")
          ]),
          _.$slots.overlay ? V(_.$slots, "overlay", { key: 0 }) : (m(), $(de, { key: 1 }, [
            (m(!0), $(de, null, Te(g(W), (c, O) => (m(), $("div", {
              class: "dp__overlay_row",
              key: O,
              role: "row"
            }, [
              (m(!0), $(de, null, Te(c, (T, j) => (m(), $("div", {
                role: "gridcell",
                class: ke(g(F)),
                key: T.value,
                "aria-selected": T.value === e.modelValue && !e.disabledValues.includes(T.value),
                "aria-disabled": T.className.dp__overlay_cell_disabled,
                ref_for: !0,
                ref: (z) => Z(z, T, O, j),
                tabindex: "0",
                "data-test": T.text,
                onClick: (z) => Y(T.value),
                onKeydown: [
                  ue((z) => Y(T.value), ["enter"]),
                  ue((z) => Y(T.value), ["space"])
                ],
                onMouseover: (z) => p.value = T.value
              }, [
                I("div", {
                  class: ke(T.className)
                }, [
                  _.$slots.item ? V(_.$slots, "item", {
                    key: 0,
                    item: T
                  }) : k("", !0),
                  _.$slots.item ? k("", !0) : (m(), $(de, { key: 1 }, [
                    Re(ae(T.text), 1)
                  ], 64))
                ], 2)
              ], 42, Jg))), 128))
            ]))), 128)),
            _.$slots["button-icon"] ? Xe((m(), $("div", {
              key: 0,
              role: "button",
              "aria-label": (M = e.ariaLabels) == null ? void 0 : M.toggleOverlay,
              class: ke(g(J)),
              tabindex: "0",
              ref_key: "toggleButton",
              ref: v,
              onClick: ne,
              onKeydown: ue(ne, ["enter"])
            }, [
              V(_.$slots, "button-icon")
            ], 42, Kg)), [
              [ut, !g(l)(e.type)]
            ]) : k("", !0)
          ], 64))
        ], 2)
      ], 42, Qg);
    };
  }
}), Xg = ["aria-label"], au = /* @__PURE__ */ _e({
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
    return tt(() => t("set-ref", i)), (o, l) => (m(), $(de, null, [
      I("div", {
        class: "dp__month_year_select",
        onClick: l[0] || (l[0] = (f) => o.$emit("toggle")),
        onKeydown: [
          l[1] || (l[1] = ue((f) => o.$emit("toggle"), ["enter"])),
          l[2] || (l[2] = ue((f) => o.$emit("toggle"), ["space"]))
        ],
        role: "button",
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: i
      }, [
        V(o.$slots, "default")
      ], 40, Xg),
      he(lt, {
        name: g(r)(e.showSelectionGrid),
        css: g(a)
      }, {
        default: ie(() => [
          e.showSelectionGrid ? (m(), fe(an, Fe({ key: 0 }, {
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
            "button-icon": ie(() => [
              o.$slots["calendar-icon"] ? V(o.$slots, "calendar-icon", { key: 0 }) : k("", !0),
              o.$slots["calendar-icon"] ? k("", !0) : (m(), fe(g(Gr), { key: 1 }))
            ]),
            _: 2
          }, [
            o.$slots[e.slotName] ? {
              name: "item",
              fn: ie(({ item: f }) => [
                V(o.$slots, e.slotName, { item: f })
              ]),
              key: "0"
            } : void 0,
            o.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: ie(() => [
                V(o.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            o.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: ie(() => [
                V(o.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : k("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), e_ = { class: "dp__month_year_row" }, t_ = { class: "dp__month_year_wrap" }, n_ = { class: "dp__month_picker_header" }, r_ = ["aria-label"], a_ = ["aria-label"], o_ = ["aria-label"], i_ = /* @__PURE__ */ _e({
  __name: "MonthYearPicker",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    internalModelValue: { type: [Date, Array], default: null },
    ...Tt
  },
  emits: ["update-month-year", "month-year-select", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: t, emit: n }) {
    const r = e, { defaults: a } = at(r), { transitionName: i, showTransition: o } = Qr(a.value.transitions), { buildMatrix: l } = Pt(), { handleMonthYearChange: f, isDisabled: u, updateMonthYear: d } = Sg(r, n), s = q(!1), p = q(!1), v = q([null, null, null, null]), b = q(null), N = q(null), H = q(null);
    tt(() => {
      n("mount");
    });
    const F = (w) => ({
      get: () => r[w],
      set: (L) => {
        const me = w === "month" ? "year" : "month";
        n("update-month-year", { [w]: L, [me]: r[me] }), n("month-year-select", w === "year"), w === "month" ? O(!0) : T(!0);
      }
    }), E = G(F("month")), W = G(F("year")), J = G(() => (w) => {
      const L = w === "month";
      return {
        showSelectionGrid: (L ? s : p).value,
        items: (L ? _ : C).value,
        disabledValues: a.value.filters[L ? "months" : "years"],
        minValue: (L ? Y : h).value,
        maxValue: (L ? Q : x).value,
        headerRefs: L && r.monthPicker ? [b.value, N.value, H.value] : [],
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
    })), h = G(() => r.minDate ? Ne(B(r.minDate)) : null), x = G(() => r.maxDate ? Ne(B(r.maxDate)) : null), Y = G(() => {
      if (r.minDate && h.value) {
        if (h.value > r.year)
          return 12;
        if (h.value === r.year)
          return Me(B(r.minDate));
      }
      return null;
    }), Q = G(() => r.maxDate && x.value ? x.value < r.year ? -1 : x.value === r.year ? Me(B(r.maxDate)) : null : null), ne = G(() => r.range && r.internalModelValue && (r.monthPicker || r.yearPicker) ? r.internalModelValue : []), U = (w) => w.reverse(), Z = (w, L = !1) => {
      const me = [], Oe = (xe) => L ? U(xe) : xe;
      for (let xe = 0; xe < w.length; xe += 3) {
        const ge = [w[xe], w[xe + 1], w[xe + 2]];
        me.push(Oe(ge));
      }
      return L ? me.reverse() : me;
    }, P = G(() => r.months.find((L) => L.value === r.month) || { text: "", value: 0 }), _ = G(() => Z(r.months)), C = G(() => Z(r.years, r.reverseYears)), M = G(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === 0 : !0), c = G(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === a.value.multiCalendars - 1 : !0), O = (w = !1) => {
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
    }, S = (w, L) => {
      r.arrowNavigation && (v.value[L] = je(w), l(v.value, "monthYear"));
    };
    return t({
      toggleMonthPicker: O,
      toggleYearPicker: T
    }), (w, L) => {
      var me, Oe, xe, ge, ye;
      return m(), $("div", e_, [
        w.$slots["month-year"] ? V(w.$slots, "month-year", rt(Fe({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: g(d), handleMonthYearChange: g(f), instance: e.instance }))) : (m(), $(de, { key: 1 }, [
          !w.monthPicker && !w.yearPicker ? (m(), $(de, { key: 0 }, [
            g(M) && !w.vertical ? (m(), fe(ga, {
              key: 0,
              "aria-label": (me = g(a).ariaLabels) == null ? void 0 : me.prevMonth,
              disabled: g(u)(!1),
              onActivate: L[0] || (L[0] = (ee) => g(f)(!1)),
              onSetRef: L[1] || (L[1] = (ee) => S(ee, 0))
            }, {
              default: ie(() => [
                w.$slots["arrow-left"] ? V(w.$slots, "arrow-left", { key: 0 }) : k("", !0),
                w.$slots["arrow-left"] ? k("", !0) : (m(), fe(g(Hl), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : k("", !0),
            I("div", t_, [
              he(au, Fe({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (Oe = g(a).ariaLabels) == null ? void 0 : Oe.openMonthsOverlay,
                modelValue: g(E),
                "onUpdate:modelValue": L[2] || (L[2] = (ee) => Mt(E) ? E.value = ee : null)
              }, g(J)("month"), {
                onToggle: O,
                onSetRef: L[3] || (L[3] = (ee) => S(ee, 1))
              }), et({
                default: ie(() => [
                  w.$slots.month ? V(w.$slots, "month", rt(Fe({ key: 0 }, g(P)))) : k("", !0),
                  w.$slots.month ? k("", !0) : (m(), $(de, { key: 1 }, [
                    Re(ae(g(P).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                w.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: ie(() => [
                    V(w.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                w.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: ie(({ item: ee }) => [
                    V(w.$slots, "month-overlay-value", {
                      text: ee.text,
                      value: ee.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                w.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: ie(() => [
                    V(w.$slots, "month-overlay", rt(bt(g(re)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                w.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: ie(() => [
                    V(w.$slots, "month-overlay-header", { toggle: O })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              he(au, Fe({
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (xe = g(a).ariaLabels) == null ? void 0 : xe.openYearsOverlay,
                modelValue: g(W),
                "onUpdate:modelValue": L[4] || (L[4] = (ee) => Mt(W) ? W.value = ee : null)
              }, g(J)("year"), {
                onToggle: T,
                onSetRef: L[5] || (L[5] = (ee) => S(ee, 2))
              }), et({
                default: ie(() => [
                  w.$slots.year ? V(w.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : k("", !0),
                  w.$slots.year ? k("", !0) : (m(), $(de, { key: 1 }, [
                    Re(ae(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                w.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: ie(() => [
                    V(w.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                w.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: ie(({ item: ee }) => [
                    V(w.$slots, "year-overlay-value", {
                      text: ee.text,
                      value: ee.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                w.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: ie(() => [
                    V(w.$slots, "year-overlay", rt(bt(g(re)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                w.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: ie(() => [
                    V(w.$slots, "year-overlay-header", { toggle: T })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"])
            ]),
            g(M) && w.vertical ? (m(), fe(ga, {
              key: 1,
              "aria-label": (ge = g(a).ariaLabels) == null ? void 0 : ge.prevMonth,
              disabled: g(u)(!1),
              onActivate: L[6] || (L[6] = (ee) => g(f)(!1))
            }, {
              default: ie(() => [
                w.$slots["arrow-up"] ? V(w.$slots, "arrow-up", { key: 0 }) : k("", !0),
                w.$slots["arrow-up"] ? k("", !0) : (m(), fe(g(Gu), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : k("", !0),
            g(c) ? (m(), fe(ga, {
              key: 2,
              ref: "rightIcon",
              disabled: g(u)(!0),
              "aria-label": (ye = g(a).ariaLabels) == null ? void 0 : ye.nextMonth,
              onActivate: L[7] || (L[7] = (ee) => g(f)(!0)),
              onSetRef: L[8] || (L[8] = (ee) => S(ee, 3))
            }, {
              default: ie(() => [
                w.$slots[w.vertical ? "arrow-down" : "arrow-right"] ? V(w.$slots, w.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : k("", !0),
                w.$slots[w.vertical ? "arrow-down" : "arrow-right"] ? k("", !0) : (m(), fe(bn(w.vertical ? g(Qu) : g(Wl)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : k("", !0)
          ], 64)) : k("", !0),
          w.monthPicker ? (m(), fe(an, Fe({ key: 1 }, g(J)("month"), {
            "skip-active": w.range,
            year: e.year,
            "multi-model-value": g(ne),
            "month-picker": "",
            modelValue: g(E),
            "onUpdate:modelValue": L[17] || (L[17] = (ee) => Mt(E) ? E.value = ee : null),
            onToggle: O,
            onSelected: L[18] || (L[18] = (ee) => w.$emit("overlay-closed"))
          }), et({
            header: ie(() => {
              var ee, nt, pe;
              return [
                I("div", n_, [
                  I("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: b,
                    onClick: L[9] || (L[9] = ($e) => z(!1)),
                    onKeydown: L[10] || (L[10] = ue(($e) => z(!1), ["enter"]))
                  }, [
                    I("div", {
                      class: "dp__inner_nav",
                      role: "button",
                      "aria-label": (ee = g(a).ariaLabels) == null ? void 0 : ee.prevMonth
                    }, [
                      w.$slots["arrow-left"] ? V(w.$slots, "arrow-left", { key: 0 }) : k("", !0),
                      w.$slots["arrow-left"] ? k("", !0) : (m(), fe(g(Hl), { key: 1 }))
                    ], 8, r_)
                  ], 544),
                  I("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: N,
                    "aria-label": (nt = g(a).ariaLabels) == null ? void 0 : nt.openYearsOverlay,
                    tabindex: "0",
                    onClick: L[11] || (L[11] = () => T(!1)),
                    onKeydown: L[12] || (L[12] = ue(() => T(!1), ["enter"]))
                  }, [
                    w.$slots.year ? V(w.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : k("", !0),
                    w.$slots.year ? k("", !0) : (m(), $(de, { key: 1 }, [
                      Re(ae(e.year), 1)
                    ], 64))
                  ], 40, a_),
                  I("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: H,
                    onClick: L[13] || (L[13] = ($e) => z(!0)),
                    onKeydown: L[14] || (L[14] = ue(($e) => z(!0), ["enter"]))
                  }, [
                    I("div", {
                      class: "dp__inner_nav",
                      role: "button",
                      "aria-label": (pe = g(a).ariaLabels) == null ? void 0 : pe.nextMonth
                    }, [
                      w.$slots["arrow-right"] ? V(w.$slots, "arrow-right", { key: 0 }) : k("", !0),
                      w.$slots["arrow-right"] ? k("", !0) : (m(), fe(g(Wl), { key: 1 }))
                    ], 8, o_)
                  ], 544)
                ]),
                he(lt, {
                  name: g(i)(p.value),
                  css: g(o)
                }, {
                  default: ie(() => [
                    p.value ? (m(), fe(an, Fe({ key: 0 }, g(J)("year"), {
                      modelValue: g(W),
                      "onUpdate:modelValue": L[15] || (L[15] = ($e) => Mt(W) ? W.value = $e : null),
                      onToggle: T,
                      onSelected: L[16] || (L[16] = ($e) => w.$emit("overlay-closed"))
                    }), et({
                      "button-icon": ie(() => [
                        w.$slots["calendar-icon"] ? V(w.$slots, "calendar-icon", { key: 0 }) : k("", !0),
                        w.$slots["calendar-icon"] ? k("", !0) : (m(), fe(g(Gr), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      w.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: ie(({ item: $e }) => [
                          V(w.$slots, "year-overlay-value", {
                            text: $e.text,
                            value: $e.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : k("", !0)
                  ]),
                  _: 3
                }, 8, ["name", "css"])
              ];
            }),
            _: 2
          }, [
            w.$slots["month-overlay-value"] ? {
              name: "item",
              fn: ie(({ item: ee }) => [
                V(w.$slots, "month-overlay-value", {
                  text: ee.text,
                  value: ee.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : k("", !0),
          w.yearPicker ? (m(), fe(an, Fe({ key: 2 }, g(J)("year"), {
            modelValue: g(W),
            "onUpdate:modelValue": L[19] || (L[19] = (ee) => Mt(W) ? W.value = ee : null),
            "multi-model-value": g(ne),
            "skip-active": w.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: T,
            onSelected: L[20] || (L[20] = (ee) => w.$emit("overlay-closed"))
          }), et({ _: 2 }, [
            w.$slots["year-overlay-value"] ? {
              name: "item",
              fn: ie(({ item: ee }) => [
                V(w.$slots, "year-overlay-value", {
                  text: ee.text,
                  value: ee.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : k("", !0)
        ], 64))
      ]);
    };
  }
}), l_ = {
  key: 0,
  class: "dp__time_input"
}, u_ = ["aria-label", "onKeydown", "onClick"], s_ = ["aria-label", "onKeydown", "onClick"], c_ = ["aria-label", "onKeydown", "onClick"], f_ = { key: 0 }, d_ = ["aria-label", "onKeydown"], p_ = /* @__PURE__ */ _e({
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    ...Tt
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
    const r = e, { setTimePickerElements: a, setTimePickerBackRef: i } = Pt(), { defaults: o } = at(r), { transitionName: l, showTransition: f } = Qr(o.value.transitions), u = ln({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), d = q("AM"), s = q(null), p = q([]);
    tt(() => {
      n("mounted");
    });
    const v = (P, _) => ku(Qe(B(), P), _), b = (P, _) => K0(Qe(B(), P), _), N = G(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !r.enableSeconds && r.is24,
        dp__time_col_reg_with_button: !r.enableSeconds && !r.is24,
        dp__time_col_sec: r.enableSeconds && r.is24,
        dp__time_col_sec_with_button: r.enableSeconds && !r.is24
      })
    ), H = G(() => {
      const P = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return r.enableSeconds ? P.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : P;
    }), F = G(() => H.value.filter((P) => !P.separator)), E = G(() => (P) => {
      if (P === "hours") {
        const _ = Y(r.hours);
        return { text: _ < 10 ? `0${_}` : `${_}`, value: _ };
      }
      return { text: r[P] < 10 ? `0${r[P]}` : `${r[P]}`, value: r[P] };
    }), W = (P) => {
      const _ = r.is24 ? 24 : 12, C = P === "hours" ? _ : 60, M = +r[`${P}GridIncrement`], c = P === "hours" && !r.is24 ? M : 0, O = [];
      for (let T = c; T < C; T += M)
        O.push({ value: T, text: T < 10 ? `0${T}` : `${T}` });
      return P === "hours" && !r.is24 && O.push({ value: 0, text: "12" }), cg(O);
    }, J = (P) => r[`no${P[0].toUpperCase() + P.slice(1)}Overlay`], re = (P) => {
      J(P) || (u[P] = !u[P], u[P] || n("overlay-closed"));
    }, h = (P) => P === "hours" ? ht : P === "minutes" ? vt : Ht, x = (P, _ = !0) => {
      const C = _ ? v : b;
      n(
        `update:${P}`,
        h(P)(C({ [P]: +r[P] }, { [P]: +r[`${P}Increment`] }))
      );
    }, Y = (P) => r.is24 ? P : (P >= 12 ? d.value = "PM" : d.value = "AM", mg(P)), Q = () => {
      d.value === "PM" ? (d.value = "AM", n("update:hours", r.hours - 12)) : (d.value = "PM", n("update:hours", r.hours + 12));
    }, ne = (P) => {
      u[P] = !0;
    }, U = (P, _, C) => {
      if (P && r.arrowNavigation) {
        Array.isArray(p.value[_]) ? p.value[_][C] = P : p.value[_] = [P];
        const M = p.value.reduce(
          (c, O) => O.map((T, j) => [...c[j] || [], O[j]]),
          []
        );
        i(r.closeTimePickerBtn), s.value && (M[1] = M[1].concat(s.value)), a(M, r.order);
      }
    }, Z = (P, _) => P === "hours" && !r.is24 ? n(`update:${P}`, d.value === "PM" ? _ + 12 : _) : n(`update:${P}`, _);
    return t({ openChildCmp: ne }), (P, _) => {
      var C;
      return P.disabled ? k("", !0) : (m(), $("div", l_, [
        (m(!0), $(de, null, Te(g(H), (M, c) => {
          var O, T, j;
          return m(), $("div", {
            key: c,
            class: ke(g(N))
          }, [
            M.separator ? (m(), $(de, { key: 0 }, [
              Re(" : ")
            ], 64)) : (m(), $(de, { key: 1 }, [
              I("div", {
                class: "dp__inc_dec_button",
                role: "button",
                "aria-label": (O = g(o).ariaLabels) == null ? void 0 : O.incrementValue(M.type),
                tabindex: "0",
                onKeydown: [
                  ue((z) => x(M.type), ["enter"]),
                  ue((z) => x(M.type), ["space"])
                ],
                onClick: (z) => x(M.type),
                ref_for: !0,
                ref: (z) => U(z, c, 0)
              }, [
                P.$slots["arrow-up"] ? V(P.$slots, "arrow-up", { key: 0 }) : k("", !0),
                P.$slots["arrow-up"] ? k("", !0) : (m(), fe(g(Gu), { key: 1 }))
              ], 40, u_),
              I("div", {
                role: "button",
                "aria-label": (T = g(o).ariaLabels) == null ? void 0 : T.openTpOverlay(M.type),
                class: ke(J(M.type) ? "" : "dp__time_display"),
                tabindex: "0",
                onKeydown: [
                  ue((z) => re(M.type), ["enter"]),
                  ue((z) => re(M.type), ["space"])
                ],
                onClick: (z) => re(M.type),
                ref_for: !0,
                ref: (z) => U(z, c, 1)
              }, [
                P.$slots[M.type] ? V(P.$slots, M.type, {
                  key: 0,
                  text: g(E)(M.type).text,
                  value: g(E)(M.type).value
                }) : k("", !0),
                P.$slots[M.type] ? k("", !0) : (m(), $(de, { key: 1 }, [
                  Re(ae(g(E)(M.type).text), 1)
                ], 64))
              ], 42, s_),
              I("div", {
                class: "dp__inc_dec_button",
                role: "button",
                "aria-label": (j = g(o).ariaLabels) == null ? void 0 : j.decrementValue(M.type),
                tabindex: "0",
                onKeydown: [
                  ue((z) => x(M.type, !1), ["enter"]),
                  ue((z) => x(M.type, !1), ["space"])
                ],
                onClick: (z) => x(M.type, !1),
                ref_for: !0,
                ref: (z) => U(z, c, 2)
              }, [
                P.$slots["arrow-down"] ? V(P.$slots, "arrow-down", { key: 0 }) : k("", !0),
                P.$slots["arrow-down"] ? k("", !0) : (m(), fe(g(Qu), { key: 1 }))
              ], 40, c_)
            ], 64))
          ], 2);
        }), 128)),
        P.is24 ? k("", !0) : (m(), $("div", f_, [
          P.$slots["am-pm-button"] ? V(P.$slots, "am-pm-button", {
            key: 0,
            toggle: Q,
            value: d.value
          }) : k("", !0),
          P.$slots["am-pm-button"] ? k("", !0) : (m(), $("button", {
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
              ue(Pe(Q, ["prevent"]), ["enter"]),
              ue(Pe(Q, ["prevent"]), ["space"])
            ]
          }, ae(d.value), 41, d_))
        ])),
        (m(!0), $(de, null, Te(g(F), (M, c) => (m(), fe(lt, {
          key: c,
          name: g(l)(u[M.type]),
          css: g(f)
        }, {
          default: ie(() => [
            u[M.type] ? (m(), fe(an, {
              key: 0,
              items: W(M.type),
              "disabled-values": g(o).filters.times[M.type],
              "esc-close": P.escClose,
              "aria-labels": g(o).ariaLabels,
              "hide-navigation": P.hideNavigation,
              "onUpdate:modelValue": (O) => Z(M.type, O),
              onSelected: (O) => re(M.type),
              onToggle: (O) => re(M.type),
              onResetFlow: _[0] || (_[0] = (O) => P.$emit("reset-flow")),
              type: M.type
            }, et({
              "button-icon": ie(() => [
                P.$slots["clock-icon"] ? V(P.$slots, "clock-icon", { key: 0 }) : k("", !0),
                P.$slots["clock-icon"] ? k("", !0) : (m(), fe(g(zu), { key: 1 }))
              ]),
              _: 2
            }, [
              P.$slots[`${M.type}-overlay-value`] ? {
                name: "item",
                fn: ie(({ item: O }) => [
                  V(P.$slots, `${M.type}-overlay-value`, {
                    text: O.text,
                    value: O.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : k("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), m_ = ["aria-label"], y_ = { class: "dp__overlay_container dp__container_flex" }, h_ = {
  key: 1,
  class: "dp__overlay_row"
}, v_ = ["aria-label"], b_ = /* @__PURE__ */ _e({
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Tt
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
    const r = e, { buildMatrix: a, setTimePicker: i } = Pt(), o = qo(), { hideNavigationButtons: l, defaults: f } = at(r), { transitionName: u, showTransition: d } = Qr(f.value.transitions), s = q(null), p = q(null), v = q([]), b = q(null);
    tt(() => {
      n("mount"), !r.timePicker && r.arrowNavigation ? a([je(s.value)], "time") : i(!0, r.timePicker);
    });
    const N = G(() => r.range && r.modelAuto ? es(r.internalModelValue) : !0), H = q(!1), F = (U) => ({
      hours: Array.isArray(r.hours) ? r.hours[U] : r.hours,
      minutes: Array.isArray(r.minutes) ? r.minutes[U] : r.minutes,
      seconds: Array.isArray(r.seconds) ? r.seconds[U] : r.seconds
    }), E = G(() => {
      const U = [];
      if (r.range)
        for (let Z = 0; Z < 2; Z++)
          U.push(F(Z));
      else
        U.push(F(0));
      return U;
    }), W = (U, Z = !1, P = "") => {
      Z || n("reset-flow"), H.value = U, r.arrowNavigation && (i(U), U || n("overlay-closed")), sn(() => {
        P !== "" && v.value[0] && v.value[0].openChildCmp(P);
      });
    }, J = G(() => ({
      dp__button: !0,
      dp__button_bottom: r.autoApply
    })), re = Et(o, "timePicker"), h = (U, Z, P) => r.range ? Z === 0 ? [U, E.value[1][P]] : [E.value[0][P], U] : U, x = (U) => {
      n("update:hours", U);
    }, Y = (U) => {
      n("update:minutes", U);
    }, Q = (U) => {
      n("update:seconds", U);
    }, ne = () => {
      b.value && r.arrowNavigation && b.value.focus({ preventScroll: !0 });
    };
    return t({ toggleTimePicker: W }), (U, Z) => {
      var P;
      return m(), $("div", null, [
        U.timePicker ? k("", !0) : Xe((m(), $("div", {
          key: 0,
          class: ke(g(J)),
          role: "button",
          "aria-label": (P = g(f).ariaLabels) == null ? void 0 : P.openTimePicker,
          tabindex: "0",
          ref_key: "openTimePickerBtn",
          ref: s,
          onKeydown: [
            Z[0] || (Z[0] = ue((_) => W(!0), ["enter"])),
            Z[1] || (Z[1] = ue((_) => W(!0), ["space"]))
          ],
          onClick: Z[2] || (Z[2] = (_) => W(!0))
        }, [
          U.$slots["clock-icon"] ? V(U.$slots, "clock-icon", { key: 0 }) : k("", !0),
          U.$slots["clock-icon"] ? k("", !0) : (m(), fe(g(zu), { key: 1 }))
        ], 42, m_)), [
          [ut, !g(l)("time")]
        ]),
        he(lt, {
          name: g(u)(H.value),
          css: g(d)
        }, {
          default: ie(() => {
            var _;
            return [
              H.value || U.timePicker ? (m(), $("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: b,
                tabindex: "0"
              }, [
                I("div", y_, [
                  U.$slots["time-picker-overlay"] ? V(U.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: x,
                    setMinutes: Y,
                    setSeconds: Q
                  }) : k("", !0),
                  U.$slots["time-picker-overlay"] ? k("", !0) : (m(), $("div", h_, [
                    (m(!0), $(de, null, Te(g(E), (C, M) => Xe((m(), fe(p_, Fe({ key: M }, {
                      ...U.$props,
                      order: M,
                      hours: C.hours,
                      minutes: C.minutes,
                      seconds: C.seconds,
                      closeTimePickerBtn: p.value,
                      disabled: M === 0 ? U.fixedStart : U.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: v,
                      "onUpdate:hours": (c) => x(h(c, M, "hours")),
                      "onUpdate:minutes": (c) => Y(h(c, M, "minutes")),
                      "onUpdate:seconds": (c) => Q(h(c, M, "seconds")),
                      onMounted: ne,
                      onOverlayClosed: ne
                    }), et({ _: 2 }, [
                      Te(g(re), (c, O) => ({
                        name: c,
                        fn: ie((T) => [
                          V(U.$slots, c, rt(bt(T)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [ut, M === 0 ? !0 : g(N)]
                    ])), 128))
                  ])),
                  U.timePicker ? k("", !0) : Xe((m(), $("div", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: p,
                    class: ke(g(J)),
                    role: "button",
                    "aria-label": (_ = g(f).ariaLabels) == null ? void 0 : _.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      Z[3] || (Z[3] = ue((C) => W(!1), ["enter"])),
                      Z[4] || (Z[4] = ue((C) => W(!1), ["space"]))
                    ],
                    onClick: Z[5] || (Z[5] = (C) => W(!1))
                  }, [
                    U.$slots["calendar-icon"] ? V(U.$slots, "calendar-icon", { key: 0 }) : k("", !0),
                    U.$slots["calendar-icon"] ? k("", !0) : (m(), fe(g(Gr), { key: 1 }))
                  ], 42, v_)), [
                    [ut, !g(l)("time")]
                  ])
                ])
              ], 512)) : k("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), g_ = (e, t) => {
  const { isDisabled: n, matchDate: r, getWeekFromDate: a } = at(t), i = q(null), o = q(B()), l = (c) => {
    !c.current && t.hideOffsetDates || (i.value = c.value);
  }, f = () => {
    i.value = null;
  }, u = (c) => Array.isArray(e.value) && t.range && e.value[0] && i.value ? c ? Je(i.value, e.value[0]) : We(i.value, e.value[0]) : !0, d = (c, O) => {
    const T = () => e.value ? O ? e.value[0] || null : e.value[1] : null, j = e.value && Array.isArray(e.value) ? T() : null;
    return Ce(B(c.value), j);
  }, s = (c) => {
    const O = Array.isArray(e.value) ? e.value[0] : null;
    return c ? !We(i.value || null, O) : !0;
  }, p = (c, O = !0) => (t.range || t.weekPicker) && Array.isArray(e.value) ? t.hideOffsetDates && !c.current ? !1 : Ce(B(c.value), e.value[O ? 0 : 1]) : t.range ? d(c, O) && s(O) || Ce(c.value, Array.isArray(e.value) ? e.value[0] : null) && u(O) : !1, v = (c, O, T) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? c ? !1 : T ? Je(e.value[0], O.value) : We(e.value[0], O.value) : !1, b = (c) => !e.value || t.hideOffsetDates && !c.current ? !1 : t.range ? t.modelAuto && Array.isArray(e.value) ? Ce(c.value, e.value[0] ? e.value[0] : o.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((O) => Ce(O, c.value)) : Ce(c.value, e.value ? e.value : o.value), N = (c) => {
    if (t.autoRange || t.weekPicker) {
      if (i.value) {
        if (t.hideOffsetDates && !c.current)
          return !1;
        const O = $t(i.value, +t.autoRange), T = a(B(i.value));
        return t.weekPicker ? Ce(T[1], B(c.value)) : Ce(O, B(c.value));
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
  }, F = (c) => {
    if (t.autoRange || t.weekPicker) {
      if (i.value) {
        if (t.hideOffsetDates && !c.current)
          return !1;
        const O = a(B(i.value));
        return t.weekPicker ? Ce(O[0], c.value) : Ce(i.value, c.value);
      }
      return !1;
    }
    return !1;
  }, E = (c) => Zu(e.value, i.value, c.value), W = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, J = () => t.modelAuto ? es(t.internalModelValue) : !0, re = (c) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const O = t.range ? !p(c) && !p(c, !1) : !0;
    return !n(c.value) && !b(c) && !(!c.current && t.hideOffsetDates) && O;
  }, h = (c) => t.range ? t.modelAuto ? W() && b(c) : !1 : b(c), x = (c) => t.highlight ? r(c.value, t.highlight) : !1, Y = (c) => n(c.value) && t.highlightDisabledDays === !1, Q = (c) => t.highlightWeekDays && t.highlightWeekDays.includes(c.value.getDay()), ne = (c) => (t.range || t.weekPicker) && (t.multiCalendars > 0 ? c.current : !0) && J() && !(!c.current && t.hideOffsetDates) && !b(c) ? E(c) : !1, U = (c) => ({
    dp__cell_offset: !c.current,
    dp__pointer: !t.disabled && !(!c.current && t.hideOffsetDates) && !n(c.value),
    dp__cell_disabled: n(c.value),
    dp__cell_highlight: !Y(c) && (x(c) || Q(c)) && !h(c),
    dp__cell_highlight_active: !Y && (x(c) || Q(c)) && h(c),
    dp__today: !t.noToday && Ce(c.value, o.value) && c.current
  }), Z = (c) => ({
    dp__active_date: h(c),
    dp__date_hover: re(c)
  }), P = (c) => ({
    ..._(c),
    ...C(c),
    dp__range_between_week: ne(c) && t.weekPicker
  }), _ = (c) => ({
    dp__range_start: t.multiCalendars > 0 ? c.current && p(c) && J() : p(c) && J(),
    dp__range_end: t.multiCalendars > 0 ? c.current && p(c, !1) && J() : p(c, !1) && J(),
    dp__range_between: ne(c) && !t.weekPicker,
    dp__date_hover_start: v(re(c), c, !0),
    dp__date_hover_end: v(re(c), c, !1)
  }), C = (c) => ({
    ..._(c),
    dp__cell_auto_range: H(c),
    dp__cell_auto_range_start: F(c),
    dp__cell_auto_range_end: N(c)
  }), M = (c) => t.range ? t.autoRange ? C(c) : t.modelAuto ? { ...Z(c), ..._(c) } : _(c) : t.weekPicker ? P(c) : Z(c);
  return {
    setHoverDate: l,
    clearHoverDate: f,
    getDayClassData: (c) => ({
      ...U(c),
      ...M(c),
      [t.dayClass ? t.dayClass(c.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    })
  };
}, __ = ["id", "onKeydown"], w_ = {
  key: 0,
  class: "dp__sidebar_left"
}, O_ = {
  key: 1,
  class: "dp__preset_ranges"
}, $_ = ["onClick"], S_ = {
  key: 2,
  class: "dp__sidebar_right"
}, k_ = {
  key: 3,
  class: "dp__now_wrap"
}, P_ = /* @__PURE__ */ _e({
  __name: "DatepickerMenu",
  props: {
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Tt
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
    }), s = q([]), p = q([]), v = q(null), b = q(null), N = q(0), H = q(!1), F = q(0);
    tt(() => {
      var D;
      H.value = !0, !((D = n.presetRanges) != null && D.length) && !f["left-sidebar"] && !f["right-sidebar"] && st();
      const K = je(b);
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
    const { arrowRight: E, arrowLeft: W, arrowDown: J, arrowUp: re } = Pt(), h = (D) => {
      D || D === 0 ? p.value[D].triggerTransition(
        U.value(D),
        Z.value(D)
      ) : p.value.forEach(
        (K, ze) => K.triggerTransition(U.value(ze), Z.value(ze))
      );
    }, x = () => {
      const D = je(b);
      D && D.focus({ preventScroll: !0 });
    }, Y = () => {
      var D;
      ((D = n.flow) == null ? void 0 : D.length) && F.value !== -1 && (F.value += 1, t("flow-step", F.value), Ie());
    }, Q = () => {
      F.value = -1;
    }, {
      modelValue: ne,
      month: U,
      year: Z,
      time: P,
      updateTime: _,
      updateMonthYear: C,
      selectDate: M,
      getWeekNum: c,
      monthYearSelect: O,
      handleScroll: T,
      handleArrow: j,
      handleSwipe: z,
      getMarker: S,
      selectCurrentDate: w,
      presetDateRange: L
    } = Og(n, t, Y, h), { setHoverDate: me, clearHoverDate: Oe, getDayClassData: xe } = g_(ne, n), ge = Et(f, "calendar"), ye = Et(f, "action"), ee = Et(f, "timePicker"), nt = Et(f, "monthYear"), pe = G(() => n.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), $e = G(() => dg(n.yearRange)), Ae = G(() => pg(n.locale, n.monthNameFormat)), st = () => {
      const D = je(u);
      D && (N.value = D.getBoundingClientRect().width);
    }, yt = G(() => (D) => o(U.value(D), Z.value(D))), Dt = G(
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
      () => (D) => ea(yt, D)
    ), Xr = G(
      () => ({
        dp__menu: !0,
        dp__menu_index: !n.inline,
        dp__relative: n.inline,
        [n.menuClassName]: !!n.menuClassName
      })
    ), ea = (D, K) => D.value(K).map((ze) => ({
      ...ze,
      days: ze.days.map((Ke) => (Ke.marker = S(Ke), Ke.classData = xe(Ke), Ke))
    })), pn = (D) => {
      D.stopPropagation(), D.preventDefault(), D.stopImmediatePropagation();
    }, y = () => {
      n.escClose && t("close-picker");
    }, A = (D, K = !1) => {
      M(D, K), n.spaceConfirm && t("select-date");
    }, te = (D) => {
      var K;
      (K = n.flow) != null && K.length && (d[D] = !0, Object.keys(d).filter((ze) => !d[ze]).length || Ie());
    }, ce = (D, K, ze, Ke, ...mn) => {
      if (n.flow[F.value] === D) {
        const oe = Ke ? K.value[0] : K.value;
        oe && oe[ze](...mn);
      }
    }, Ie = () => {
      ce("month", s, "toggleMonthPicker", !0, !0), ce("year", s, "toggleYearPicker", !0, !0), ce("calendar", v, "toggleTimePicker", !1, !1, !0), ce("time", v, "toggleTimePicker", !1, !0, !0);
      const D = n.flow[F.value];
      (D === "hours" || D === "minutes" || D === "seconds") && ce(D, v, "toggleTimePicker", !1, !0, !0, D);
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
    }, Rt = (D) => {
      a(D.shiftKey), !n.disableMonthYearSelect && D.code === "Tab" && D.target.classList.contains("dp__menu") && i.value.shiftKeyInMenu && (D.preventDefault(), D.stopImmediatePropagation(), t("close-picker"));
    };
    return (D, K) => {
      var ze;
      return m(), fe(lt, {
        appear: "",
        name: (ze = g(l).transitions) == null ? void 0 : ze.menuAppear,
        mode: "out-in",
        css: !!D.transitions
      }, {
        default: ie(() => {
          var Ke, mn;
          return [
            I("div", {
              id: D.uid ? `dp-menu-${D.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: b,
              role: "dialog",
              class: ke(g(Xr)),
              onMouseleave: K[12] || (K[12] = (...oe) => g(Oe) && g(Oe)(...oe)),
              onClick: pn,
              onKeydown: [
                ue(y, ["esc"]),
                K[13] || (K[13] = ue(Pe((oe) => ct("left"), ["prevent"]), ["left"])),
                K[14] || (K[14] = ue(Pe((oe) => ct("up"), ["prevent"]), ["up"])),
                K[15] || (K[15] = ue(Pe((oe) => ct("down"), ["prevent"]), ["down"])),
                K[16] || (K[16] = ue(Pe((oe) => ct("right"), ["prevent"]), ["right"])),
                Rt
              ]
            }, [
              (D.disabled || D.readonly) && D.inline ? (m(), $("div", {
                key: 0,
                class: ke(g(Gt))
              }, null, 2)) : k("", !0),
              !D.inline && !D.teleportCenter ? (m(), $("div", {
                key: 1,
                class: ke(g(pe))
              }, null, 2)) : k("", !0),
              I("div", {
                class: ke({
                  dp__menu_content_wrapper: ((Ke = D.presetRanges) == null ? void 0 : Ke.length) || !!D.$slots["left-sidebar"] || !!D.$slots["right-sidebar"]
                })
              }, [
                D.$slots["left-sidebar"] ? (m(), $("div", w_, [
                  V(D.$slots, "left-sidebar")
                ])) : k("", !0),
                (mn = D.presetRanges) != null && mn.length ? (m(), $("div", O_, [
                  (m(!0), $(de, null, Te(D.presetRanges, (oe, Vt) => (m(), $("div", {
                    key: Vt,
                    style: Nt(oe.style || {}),
                    class: "dp__preset_range",
                    onClick: (ve) => g(L)(oe.range, !!oe.slot)
                  }, [
                    oe.slot ? V(D.$slots, oe.slot, {
                      key: 0,
                      presetDateRange: g(L),
                      label: oe.label,
                      range: oe.range
                    }) : (m(), $(de, { key: 1 }, [
                      Re(ae(oe.label), 1)
                    ], 64))
                  ], 12, $_))), 128))
                ])) : k("", !0),
                I("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: u,
                  role: "document"
                }, [
                  I("div", {
                    class: ke(g(Jr))
                  }, [
                    (m(!0), $(de, null, Te(g(Dt), (oe, Vt) => (m(), $("div", {
                      key: oe,
                      class: ke(g(dn))
                    }, [
                      !D.disableMonthYearSelect && !D.timePicker ? (m(), fe(bn(D.monthYearComponent ? D.monthYearComponent : i_), Fe({
                        key: 0,
                        ref_for: !0,
                        ref: (ve) => {
                          ve && (s.value[Vt] = ve);
                        },
                        months: g(Ae),
                        years: g($e),
                        month: g(U)(oe),
                        year: g(Z)(oe),
                        instance: oe,
                        "internal-model-value": e.internalModelValue
                      }, D.$props, {
                        onMount: K[0] || (K[0] = (ve) => te("monthYearInput")),
                        onResetFlow: Q,
                        onUpdateMonthYear: (ve) => g(C)(oe, ve),
                        onMonthYearSelect: g(O),
                        onOverlayClosed: x
                      }), et({ _: 2 }, [
                        Te(g(nt), (ve, ts) => ({
                          name: ve,
                          fn: ie((ta) => [
                            V(D.$slots, ve, rt(bt(ta)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : k("", !0),
                      he(zg, Fe({
                        ref_for: !0,
                        ref: (ve) => {
                          ve && (p.value[Vt] = ve);
                        },
                        "specific-mode": g(Zr),
                        "get-week-num": g(c),
                        instance: oe,
                        "mapped-dates": g(Kr)(oe),
                        month: g(U)(oe),
                        year: g(Z)(oe)
                      }, D.$props, {
                        "flow-step": F.value,
                        "onUpdate:flow-step": K[1] || (K[1] = (ve) => F.value = ve),
                        onSelectDate: (ve) => g(M)(ve, !g(zt)(oe)),
                        onHandleSpace: (ve) => A(ve, !g(zt)(oe)),
                        onSetHoverDate: K[2] || (K[2] = (ve) => g(me)(ve)),
                        onHandleScroll: (ve) => g(T)(ve, oe),
                        onHandleSwipe: (ve) => g(z)(ve, oe),
                        onMount: K[3] || (K[3] = (ve) => te("calendar")),
                        onResetFlow: Q
                      }), et({ _: 2 }, [
                        Te(g(ge), (ve, ts) => ({
                          name: ve,
                          fn: ie((ta) => [
                            V(D.$slots, ve, rt(bt({ ...ta })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "flow-step", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  I("div", null, [
                    D.$slots["time-picker"] ? V(D.$slots, "time-picker", rt(Fe({ key: 0 }, { time: g(P), updateTime: g(_) }))) : (m(), $(de, { key: 1 }, [
                      D.enableTimePicker && !D.monthPicker && !D.weekPicker ? (m(), fe(bn(D.timePickerComponent ? D.timePickerComponent : b_), Fe({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: v,
                        hours: g(P).hours,
                        minutes: g(P).minutes,
                        seconds: g(P).seconds,
                        "internal-model-value": e.internalModelValue
                      }, D.$props, {
                        onMount: K[4] || (K[4] = (oe) => te("timePicker")),
                        "onUpdate:hours": K[5] || (K[5] = (oe) => g(_)(oe)),
                        "onUpdate:minutes": K[6] || (K[6] = (oe) => g(_)(oe, !1)),
                        "onUpdate:seconds": K[7] || (K[7] = (oe) => g(_)(oe, !1, !0)),
                        onResetFlow: Q,
                        onOverlayClosed: x
                      }), et({ _: 2 }, [
                        Te(g(ee), (oe, Vt) => ({
                          name: oe,
                          fn: ie((ve) => [
                            V(D.$slots, oe, rt(bt(ve)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : k("", !0)
                    ], 64))
                  ])
                ], 512),
                D.$slots["right-sidebar"] ? (m(), $("div", S_, [
                  V(D.$slots, "right-sidebar")
                ])) : k("", !0),
                D.showNowButton ? (m(), $("div", k_, [
                  D.$slots["now-button"] ? V(D.$slots, "now-button", {
                    key: 0,
                    selectCurrentDate: g(w)
                  }) : k("", !0),
                  D.$slots["now-button"] ? k("", !0) : (m(), $("button", {
                    key: 1,
                    type: "button",
                    role: "button",
                    class: "dp__now_button",
                    onClick: K[8] || (K[8] = (...oe) => g(w) && g(w)(...oe))
                  }, ae(D.nowButtonLabel), 1))
                ])) : k("", !0)
              ], 2),
              D.$slots["action-row"] ? V(D.$slots, "action-row", rt(Fe({ key: 2 }, {
                internalModelValue: e.internalModelValue,
                selectDate: () => D.$emit("select-date"),
                closePicker: () => D.$emit("close-picker")
              }))) : (m(), $(de, { key: 3 }, [
                !D.autoApply || D.keepActionRow ? (m(), fe(bn(D.actionRowComponent ? D.actionRowComponent : Ig), Fe({
                  key: 0,
                  "menu-mount": H.value,
                  "calendar-width": N.value,
                  "internal-model-value": e.internalModelValue
                }, D.$props, {
                  onClosePicker: K[9] || (K[9] = (oe) => D.$emit("close-picker")),
                  onSelectDate: K[10] || (K[10] = (oe) => D.$emit("select-date")),
                  onInvalidSelect: K[11] || (K[11] = (oe) => D.$emit("invalid-select"))
                }), et({ _: 2 }, [
                  Te(g(ye), (oe, Vt) => ({
                    name: oe,
                    fn: ie((ve) => [
                      V(D.$slots, oe, rt(bt({ ...ve })))
                    ])
                  }))
                ]), 1040, ["menu-mount", "calendar-width", "internal-model-value"])) : k("", !0)
              ], 64))
            ], 42, __)
          ];
        }),
        _: 3
      }, 8, ["name", "css"]);
    };
  }
}), T_ = typeof window < "u" ? window : void 0, _a = () => {
}, D_ = (e) => ls() ? (us(e), !0) : !1, R_ = (e, t, n, r) => {
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
  return D_(o), o;
}, x_ = (e, t, n, r = {}) => {
  const { window: a = T_, event: i = "pointerdown" } = r;
  return a ? R_(a, i, (o) => {
    const l = je(e), f = je(t);
    !l || !f || l === o.target || o.composedPath().includes(l) || o.composedPath().includes(f) || n(o);
  }, { passive: !0 }) : void 0;
}, C_ = /* @__PURE__ */ _e({
  __name: "VueDatePicker",
  props: {
    ...Tt
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
    const r = e, a = qo(), i = q(!1), o = wa(r, "modelValue"), l = wa(r, "timezone"), f = q(null), u = q(null), d = q(!1), { setMenuFocused: s, setShiftKey: p } = Ju(), { clearArrowNav: v } = Pt(), { validateDate: b, isValidTime: N, defaults: H } = at(r);
    tt(() => {
      Q(r.modelValue), r.inline || (window.addEventListener("scroll", C), window.addEventListener("resize", M)), r.inline && (i.value = !0);
    }), zo(() => {
      r.inline || (window.removeEventListener("scroll", C), window.removeEventListener("resize", M));
    });
    const F = Et(a, "all", r.presetRanges), E = Et(a, "input");
    un(
      [o, l],
      () => {
        Q(o.value);
      },
      { deep: !0 }
    );
    const { openOnTop: W, menuPosition: J, setMenuPosition: re, setInitialPosition: h } = kg(
      f,
      u,
      n,
      r
    ), {
      inputValue: x,
      internalModelValue: Y,
      parseExternalModelValue: Q,
      emitModelValue: ne,
      formatInputValue: U,
      checkBeforeEmit: Z
    } = $g(n, r, d), P = G(
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
      !r.disabled && !r.readonly && (h(), i.value = !0, sn().then(() => {
        re(), i.value && n("open");
      }), i.value || w(), Q(r.modelValue));
    }, O = () => {
      x.value = "", w(), n("update:model-value", null), n("cleared"), L();
    }, T = () => {
      const pe = Y.value;
      return !pe || !Array.isArray(pe) && b(pe) ? !0 : Array.isArray(pe) ? pe.length === 2 && b(pe[0]) && b(pe[1]) ? !0 : b(pe[0]) : !1;
    }, j = () => {
      Z() && T() ? (ne(), L()) : n("invalid-select", Y.value);
    }, z = (pe) => {
      ne(), r.closeOnAutoApply && !pe && L();
    }, S = (pe = !1) => {
      r.autoApply && N(Y.value) && T() && (r.range && Array.isArray(Y.value) ? (r.partialRange || Y.value.length === 2) && z(pe) : z(pe));
    }, w = () => {
      r.textInput || (Y.value = null);
    }, L = () => {
      r.inline || (i.value && (i.value = !1, s(!1), p(!1), v(), n("closed"), h(), x.value && Q(o.value)), w(), u.value && u.value.focusInput());
    }, me = (pe, $e) => {
      if (!pe) {
        Y.value = null;
        return;
      }
      Y.value = pe, $e && (j(), n("text-submit"));
    }, Oe = () => {
      r.autoApply && N(Y.value) && ne();
    }, xe = () => i.value ? L() : c(), ge = (pe) => {
      Y.value = pe;
    }, ye = G(() => r.textInput && H.value.textInputOptions.format), ee = () => {
      ye.value && (d.value = !0, U()), n("focus");
    }, nt = () => {
      ye.value && (d.value = !1, U()), n("blur");
    };
    return x_(
      f,
      u,
      r.onClickOutside ? () => r.onClickOutside(T) : L
    ), t({
      closeMenu: L,
      selectDate: j,
      clearValue: O,
      openMenu: c,
      onScroll: C,
      formatInputValue: U,
      updateInternalModelValue: ge
    }), (pe, $e) => (m(), $("div", {
      class: ke(g(P))
    }, [
      he(Ng, Fe({
        ref_key: "inputRef",
        ref: u,
        "is-menu-open": i.value,
        "input-value": g(x),
        "onUpdate:input-value": $e[0] || ($e[0] = (Ae) => Mt(x) ? x.value = Ae : null)
      }, pe.$props, {
        onClear: O,
        onOpen: c,
        onSetInputDate: me,
        onSetEmptyDate: g(ne),
        onSelectDate: j,
        onToggle: xe,
        onClose: L,
        onFocus: ee,
        onBlur: nt
      }), et({ _: 2 }, [
        Te(g(E), (Ae, st) => ({
          name: Ae,
          fn: ie((yt) => [
            V(pe.$slots, Ae, rt(bt(yt)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      i.value ? (m(), fe(os, {
        key: 0,
        to: pe.teleport,
        disabled: pe.inline
      }, [
        i.value ? (m(), fe(P_, Fe({
          key: 0,
          ref_key: "dpMenuRef",
          ref: f,
          class: g(_),
          style: g(J),
          "open-on-top": g(W)
        }, pe.$props, {
          "internal-model-value": g(Y),
          "onUpdate:internal-model-value": $e[1] || ($e[1] = (Ae) => Mt(Y) ? Y.value = Ae : null),
          onClosePicker: L,
          onSelectDate: j,
          onAutoApply: S,
          onTimeUpdate: Oe,
          onFlowStep: $e[2] || ($e[2] = (Ae) => pe.$emit("flow-step", Ae)),
          onUpdateMonthYear: $e[3] || ($e[3] = (Ae) => pe.$emit("update-month-year", Ae)),
          onInvalidSelect: $e[4] || ($e[4] = (Ae) => pe.$emit("invalid-select", g(Y)))
        }), et({ _: 2 }, [
          Te(g(F), (Ae, st) => ({
            name: Ae,
            fn: ie((yt) => [
              V(pe.$slots, Ae, rt(bt({ ...yt })))
            ])
          }))
        ]), 1040, ["class", "style", "open-on-top", "internal-model-value"])) : k("", !0)
      ], 8, ["to", "disabled"])) : k("", !0)
    ], 2));
  }
}), pi = /* @__PURE__ */ (() => {
  const e = C_;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), M_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pi
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(M_).forEach(([e, t]) => {
  e !== "default" && (pi[e] = t);
});
const N_ = _e({
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
        const d = u.split(" "), s = d[0].split("-"), p = parseInt(s[0]), v = parseInt(s[1]) - 1, b = parseInt(s[2]);
        if (e.type === "datetime" && d.length === 2) {
          const H = d[1].split(":"), F = parseInt(H[0]), E = parseInt(H[1]), W = 0;
          return new Date(p, v, b, F, E, W);
        }
        return new Date(p, v, b);
      }
    };
    return {
      selectedDate: n,
      format: (u) => {
        if (e.type !== "time")
          if (e.range === !0) {
            const d = ("0" + u[0].getDate()).slice(-2), s = ("0" + (u[0].getMonth() + 1)).slice(-2), p = u[0].getFullYear(), v = ("0" + u[0].getHours()).slice(-2), b = ("0" + u[0].getMinutes()).slice(-2);
            if (u[1]) {
              const N = ("0" + u[1].getDate()).slice(-2), H = ("0" + (u[1].getMonth() + 1)).slice(-2), F = u[1].getFullYear(), E = ("0" + u[1].getHours()).slice(-2), W = ("0" + u[1].getMinutes()).slice(-2);
              return e.type !== "datetime" ? `${d}/${s}/${p} - ${N}/${H}/${F}` : `${d}/${s}/${p} ${v}:${b} - ${N}/${H}/${F} ${E}:${W}`;
            }
          } else {
            const d = ("0" + u.getDate()).slice(-2), s = ("0" + (u.getMonth() + 1)).slice(-2), p = u.getFullYear(), v = ("0" + u.getHours()).slice(-2), b = ("0" + u.getMinutes()).slice(-2);
            return e.type !== "datetime" ? `${d}/${s}/${p}` : `${d}/${s}/${p} ${v}:${b}`;
          }
        else if (e.range === !0) {
          const d = ("0" + u[0].getHours()).slice(-2), s = ("0" + u[0].getMinutes()).slice(-2), p = ("0" + u[1].getHours()).slice(-2), v = ("0" + u[1].getMinutes()).slice(-2);
          return `${d}:${s} - ${p}:${v}`;
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
              const v = ("0" + p.getDate()).slice(-2), b = ("0" + (p.getMonth() + 1)).slice(-2), N = p.getFullYear(), H = ("0" + p.getHours()).slice(-2), F = ("0" + p.getMinutes()).slice(-2);
              e.type !== "datetime" ? d.push(`${N}-${b}-${v}`) : d.push(`${N}-${b}-${v} ${H}:${F}:00`);
            }), u = d;
          } else {
            let d = "";
            const s = n.value, p = ("0" + s.getDate()).slice(-2), v = ("0" + (s.getMonth() + 1)).slice(-2), b = s.getFullYear(), N = ("0" + s.getHours()).slice(-2), H = ("0" + s.getMinutes()).slice(-2);
            e.type !== "datetime" ? d = `${b}-${v}-${p}` : d = `${b}-${v}-${p} ${N}:${H}:00`, u = d;
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
}), E_ = {
  key: 0,
  class: "generic-input__label text-sm secondary-color"
};
function A_(e, t, n, r, a, i) {
  const o = St("Datepicker");
  return m(), $("div", {
    class: ke(["custom-date-picker generic-input", { "no-time": e.type === "date" }])
  }, [
    e.label ? (m(), $("label", E_, ae(e.label), 1)) : k("", !0),
    he(o, {
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
const tw = /* @__PURE__ */ Ue(N_, [["render", A_]]), B_ = _e({
  name: "FormContainer",
  components: {
    Breadcrumbs: Nd
  },
  props: {
    path_breadcrumbs: {
      type: Array,
      required: !1,
      default: []
    },
    title: {
      type: String,
      required: !1
    }
  }
}), I_ = {
  key: 0,
  class: "mb-6 ml-1"
}, L_ = {
  key: 1,
  class: "mb-3 ml-1 font-semibold text-lg uppercase"
}, V_ = { class: "form_container p-6 bg-white rounded-lg shadow overflow-x-hidden" };
function U_(e, t, n, r, a, i) {
  const o = St("breadcrumbs");
  return m(), $(de, null, [
    e.path_breadcrumbs.length > 0 ? (m(), $("div", I_, [
      he(o, { path_breadcrumbs: e.path_breadcrumbs }, null, 8, ["path_breadcrumbs"])
    ])) : k("", !0),
    V(e.$slots, "form-buttons-top"),
    e.title ? (m(), $("h3", L_, ae(e.title), 1)) : k("", !0),
    I("div", V_, [
      V(e.$slots, "form-content")
    ]),
    V(e.$slots, "form-buttons-bottom")
  ], 64);
}
const nw = /* @__PURE__ */ Ue(B_, [["render", U_]]);
function rw() {
  return {
    setPageTitle: (t) => {
      document.title = t;
    }
  };
}
export {
  Nd as Breadcrumbs,
  ds as CustomButton,
  vs as CustomCheckbox,
  tw as CustomDatePicker,
  Y_ as CustomFileUpload,
  Ns as CustomLoader,
  j_ as CustomModal,
  H_ as CustomMultiCheckbox,
  q_ as CustomMultiSelect,
  z_ as CustomMultiSelectAsync,
  W_ as CustomMultipleFileUpload,
  Q_ as CustomRadioGroup,
  X_ as CustomSearchInput,
  G_ as CustomSelect,
  Z_ as CustomTextArea,
  ew as CustomTooltip,
  nw as FormContainer,
  J_ as FormSeparator,
  Td as GenericInput,
  K_ as ScrollToTop,
  rw as usePageMeta
};
