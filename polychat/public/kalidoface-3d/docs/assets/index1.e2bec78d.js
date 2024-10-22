import { t as us, l as cs, c as le, w as J, S as pe, i as _e, s as me, a as fs, T as En, M as ds, b as Fn, g as E, d as I, P as ms, W as Ts, R as Bs, V as rl, e as xs, n as G, f as P, h as Q, j as R, m as $, k as x, o as W, p as S, q as ee, C as nl, r as L, u as s, v as Le, x as j, y as kt, z as ht, A as te, B as zl, D as d, E as Nt, F as xt, G as $l, H as _l, I as ne, J as Re, K as re, L as ue, N as Xt, O as Se, Q as bt, U as yt, X as hs, Y as Os, Z as Us, _ as wn, $ as js, a0 as Ce, a1 as si, a2 as Ws, a3 as Ns, a4 as qs, a5 as Gs, a6 as Zs, a7 as Ys, a8 as Xs, a9 as ai, aa as Js, ab as Je, ac as Ks, ad as Vs, ae as hn, af as Qs, ag as $s, ah as ea, ai as ta, aj as la, ak as na, al as ia, am as sa, an as aa, ao as Gl, ap as ra, aq as oa, ar as ua, as as ca, at as ri, au as fa, av as Tn, aw as gn, ax as da, ay as Zl, az as gs, aA as ma, aB as ha, aC as We, aD as jl, aE as ga, aF as Ne, aG as pa, aH as _a, aI as va, aJ as ba, aK as ya, aL as ka, aM as fe, aN as oi, aO as Bn, aP as Z, aQ as xn, aR as On, aS as Un, aT as wa, aU as ps, aV as il, aW as jn, aX as Wn, aY as Nn, aZ as qn, a_ as Gn, a$ as Ct, b0 as La, b1 as ui, b2 as vl, b3 as Ca, b4 as ci, b5 as fi, b6 as za } from "./vendor.832d142e.js";
const Ma = function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) {
        return;
    }
    for (const i of document.querySelectorAll("link[rel=\"modulepreload\"]")) n(i);
    new MutationObserver(i => {
        for (const a of i) if (a.type === "childList") {
            for (const o of a.addedNodes) if (o.tagName === "LINK" && o.rel === "modulepreload") {
                n(o);
            }
        }
    }).observe(document, {
        childList: true,
        subtree: true
    });
    function t(i) {
        const a = {};
        if (i.integrity) {
            a.integrity = i.integrity;
        }
        if (i.referrerpolicy) {
            a.referrerPolicy = i.referrerpolicy;
        }
        if (i.crossorigin === "use-credentials") {
            a.credentials = "include";
        } else if (i.crossorigin === "anonymous") {
            a.credentials = "omit";
        } else {
            a.credentials = "same-origin";
        }
        return a;
    }
    function n(i) {
        if (i.ep) {
            return;
        }
        i.ep = true;
        const a = t(i);
        fetch(i.href, a);
    }
};
Ma();
const _s = l => {
    let e = null;
    switch (l.type) {
        case "video/mp4":
            e = "video";
            break;
        case "video/quicktime":
            e = "video";
            break;
        case "video/webm":
            e = "video";
            break;
        case "image/jpeg":
            e = "img";
            break;
        case "image/png":
            e = "img";
            break;
        case "image/tif":
            e = "img";
            break;
        case "image/apng":
            e = "img";
            break;
        case "image/gif":
            e = "img";
            break;
        case "image/svg+xml":
            e = "img";
            break;
        case "image/webp":
            e = "img";
            break;
        case "image/avif":
            e = "img";
            break;
    }
    return e;
};
function di(l) {
    var e = l.split(",");
    var t = e[0].match(/:(.*?);/)[1];
    var n = atob(e[1]);
    var i = n.length;
    for (var a = new Uint8Array(i); i--;) {
        a[i] = n.charCodeAt(i);
    }
    return new Blob([a], {
        type: t
    });
}
const Zn = l => {
    if (Array.isArray(l)) {
        l.forEach(e => {
            if (e.data) {
                let t = di(e.data);
                e.url = URL.createObjectURL(t);
            }
        });
        return;
    }
    if (typeof l == "object") {
        if (l.data) {
            l.url = URL.createObjectURL(di(l.data));
        }
        return;
    }
};
function ae(l, e, t) {
    return Math.max(Math.min(l, t), e);
}
function vs(l, e) {
    var t = "";
    for (var n = l; n > 0; --n) {
        t += e[Math.floor(Math.random() * e.length)];
    }
    return t;
}
const en = (l, e = document.documentElement, t = "string") => {
    let n = getComputedStyle(e).getPropertyValue(l);
    if (n.length) {
        n = n.replace(/\'|"/g, "").trim();
    }
    switch (t) {
        case "number":
        case "int":
            return parseInt(n, 10);
        case "float":
            return parseFloat(n, 10);
        case "boolean":
        case "bool":
            return n === "true" || n === "1";
    }
    return n;
};
const Wl = () => {
    if ("vibrate" in navigator) {
        navigator.vibrate(15);
    }
};
console.log("%c%s", "color: #ffffff; background: #009df7;padding:4px 8px 4px 8px;border-radius:24px", "Kalidoface 3D 0.0.11");
if (navigator.languages) {
    navigator.languages[0];
}
const Vt = J("en");
const bs = J(window.innerWidth > 600 ? "desktop" : "mobile");
const Ln = matchMedia("(hover: none), (pointer: coarse)").matches;
const bl = navigator.vendor && navigator.vendor.indexOf("Apple") > -1 && navigator.userAgent && navigator.userAgent.indexOf("CriOS") == -1 && navigator.userAgent.indexOf("FxiOS") == -1;
const Pa = () => typeof HTMLCanvasElement.prototype.captureStream == "function";
const $t = document.pictureInPictureEnabled && !bl && Pa;
const ut = J({
    w: 0,
    h: 0,
    s: 1,
    cw: 0,
    ch: 0
});
const kn = J(false);
const ol = J(false);
const Cn = us(0, {
    duration: 2e3,
    easing: le
});
const tn = J(null);
const Hl = J(false);
const ys = J(null);
const Jt = J(false);
const $e = async (l, e, t, n) => {
    cs.getItem(e + "0.0.11").then(function (i) {
        let a = i !== null ? i : t;
        if (n) {
            n(a);
        }
        l.set(a);
    }).catch(function (i) {
        console.error(i);
    });
};
const et = (l, e, t = n => false) => {
    l.subscribe(n => {
        if (!t(n)) {
            cs.setItem(e + "0.0.11", n);
        }
    });
};
class K {
    constructor(e, t, n) {
        if (!!e && e.constructor === Array) {
            this.x = e[0] || 0;
            this.y = e[1] || 0;
            this.z = e[2] || 0;
            return;
        }
        if (!!e && e.constructor === Object) {
            this.x = e.x || 0;
            this.y = e.y || 0;
            this.z = e.z || 0;
            return;
        }
        this.x = e || 0;
        this.y = t || 0;
        this.z = n || 0;
    }
    negative() {
        return new K(-this.x, -this.y, -this.z);
    }
    add(e) {
        return e instanceof K ? new K(this.x + e.x, this.y + e.y, this.z + e.z) : new K(this.x + e, this.y + e, this.z + e);
    }
    subtract(e) {
        return e instanceof K ? new K(this.x - e.x, this.y - e.y, this.z - e.z) : new K(this.x - e, this.y - e, this.z - e);
    }
    multiply(e) {
        return e instanceof K ? new K(this.x * e.x, this.y * e.y, this.z * e.z) : new K(this.x * e, this.y * e, this.z * e);
    }
    divide(e) {
        return e instanceof K ? new K(this.x / e.x, this.y / e.y, this.z / e.z) : new K(this.x / e, this.y / e, this.z / e);
    }
    equals(e) {
        return this.x == e.x && this.y == e.y && this.z == e.z;
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z;
    }
    cross(e) {
        return new K(this.y * e.z - this.z * e.y, this.z * e.x - this.x * e.z, this.x * e.y - this.y * e.x);
    }
    length() {
        return Math.sqrt(this.dot(this));
    }
    distance(e, t = 3) {
        return Math.sqrt(t === 2 ? Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2) : Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2) + Math.pow(this.z - e.z, 2));
    }
    lerp(e, t) {
        return e.subtract(this).multiply(t).add(this);
    }
    unit() {
        return this.divide(this.length());
    }
    min() {
        return Math.min(Math.min(this.x, this.y), this.z);
    }
    max() {
        return Math.max(Math.max(this.x, this.y), this.z);
    }
    toAngles() {
        return {
            theta: Math.atan2(this.z, this.x),
            phi: Math.asin(this.y / this.length())
        };
    }
    angleTo(e) {
        return Math.acos(this.dot(e) / (this.length() * e.length()));
    }
    toArray(e) {
        return [this.x, this.y, this.z].slice(0, e || 3);
    }
    clone() {
        return new K(this.x, this.y, this.z);
    }
    init(e, t, n) {
        this.x = e;
        this.y = t;
        this.z = n;
        return this;
    }
    static negative(e, t) {
        t.x = -e.x;
        t.y = -e.y;
        t.z = -e.z;
        return t;
    }
    static add(e, t, n) {
        if (t instanceof K) {
            n.x = e.x + t.x;
            n.y = e.y + t.y;
            n.z = e.z + t.z;
        } else {
            n.x = e.x + t;
            n.y = e.y + t;
            n.z = e.z + t;
        }
        return n;
    }
    static subtract(e, t, n) {
        if (t instanceof K) {
            n.x = e.x - t.x;
            n.y = e.y - t.y;
            n.z = e.z - t.z;
        } else {
            n.x = e.x - t;
            n.y = e.y - t;
            n.z = e.z - t;
        }
        return n;
    }
    static multiply(e, t, n) {
        if (t instanceof K) {
            n.x = e.x * t.x;
            n.y = e.y * t.y;
            n.z = e.z * t.z;
        } else {
            n.x = e.x * t;
            n.y = e.y * t;
            n.z = e.z * t;
        }
        return n;
    }
    static divide(e, t, n) {
        if (t instanceof K) {
            n.x = e.x / t.x;
            n.y = e.y / t.y;
            n.z = e.z / t.z;
        } else {
            n.x = e.x / t;
            n.y = e.y / t;
            n.z = e.z / t;
        }
        return n;
    }
    static cross(e, t, n) {
        n.x = e.y * t.z - e.z * t.y;
        n.y = e.z * t.x - e.x * t.z;
        n.z = e.x * t.y - e.y * t.x;
        return n;
    }
    static unit(e, t) {
        let n = e.length();
        t.x = e.x / n;
        t.y = e.y / n;
        t.z = e.z / n;
        return t;
    }
    static fromAngles(e, t) {
        return new K(Math.cos(e) * Math.cos(t), Math.sin(t), Math.sin(e) * Math.cos(t));
    }
    static randomDirection() {
        return K.fromAngles(Math.random() * Math.PI * 2, Math.asin(Math.random() * 2 - 1));
    }
    static min(e, t) {
        return new K(Math.min(e.x, t.x), Math.min(e.y, t.y), Math.min(e.z, t.z));
    }
    static max(e, t) {
        return new K(Math.max(e.x, t.x), Math.max(e.y, t.y), Math.max(e.z, t.z));
    }
    static lerp(e, t, n) {
        return t instanceof K ? t.subtract(e).multiply(n).add(e) : (t - e) * n + e;
    }
    static fromArray(e) {
        return !!e && e.constructor === Array ? new K(e[0], e[1], e[2]) : new K(e.x, e.y, e.z);
    }
    static angleBetween(e, t) {
        return e.angleTo(t);
    }
    static angleBetweenVertices(e, t, n) {
        e.subtract(t);
        n.subtract(t);
    }
    static distance(e, t, n) {
        return Math.sqrt(n === 2 ? Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2) : Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2) + Math.pow(e.z - t.z, 2));
    }
    static toDegrees(e) {
        return e * (180 / Math.PI);
    }
    static normalizeAngle(e) {
        let t = Math.PI * 2;
        let n = e % t;
        n = n > Math.PI ? n - t : n < -Math.PI ? t + n : n;
        return n / Math.PI;
    }
    static normalizeRadians(e) {
        if (e >= Math.PI / 2) {
            e -= 2 * Math.PI;
        }
        if (e <= -Math.PI / 2) {
            e += 2 * Math.PI;
            e = Math.PI - e;
        }
        return e / Math.PI;
    }
    static find2DAngle(e, t, n, i) {
        var a = i - t;
        var o = n - e;
        var r = Math.atan2(a, o);
        return r;
    }
    static findRotation(e, t, n = true) {
        return n ? new K(K.normalizeRadians(K.find2DAngle(e.z, e.x, t.z, t.x)), K.normalizeRadians(K.find2DAngle(e.z, e.y, t.z, t.y)), K.normalizeRadians(K.find2DAngle(e.x, e.y, t.x, t.y))) : new K(K.find2DAngle(e.z, e.x, t.z, t.x), K.find2DAngle(e.z, e.y, t.z, t.y), K.find2DAngle(e.x, e.y, t.x, t.y));
    }
    static rollPitchYaw(e, t, n) {
        if (!n) {
            return new K(K.normalizeAngle(K.find2DAngle(e.z, e.y, t.z, t.y)), K.normalizeAngle(K.find2DAngle(e.z, e.x, t.z, t.x)), K.normalizeAngle(K.find2DAngle(e.x, e.y, t.x, t.y)));
        }
        let i = t.subtract(e);
        let a = n.subtract(e);
        let r = i.cross(a).unit();
        let u = i.unit();
        let c = r.cross(u);
        let f = Math.asin(r.x) || 0;
        let h = Math.atan2(-r.y, r.z) || 0;
        let m = Math.atan2(-c.x, u.x) || 0;
        return new K(K.normalizeAngle(h), K.normalizeAngle(f), K.normalizeAngle(m));
    }
    static angleBetween3DCoords(e, t, n) {
        if (!(e instanceof K)) {
            e = new K(e);
            t = new K(t);
            n = new K(n);
        }
        const i = e.subtract(t);
        const a = n.subtract(t);
        const o = i.unit();
        const r = a.unit();
        const u = o.dot(r);
        const c = Math.acos(u);
        return K.normalizeRadians(c);
    }
}
function Ra(l, e, t) {
    let {
        scene: n
    } = e;
    let {
        texture: i = null
    } = e;
    const a = new fs(80, 640, 640);
    a.scale(-1, 1, 1);
    new En();
    const o = new ds();
    o.fog = false;
    const r = new Fn(a, o);
    r.rotation.y = -Math.PI * 1;
    n.add(r);
    l.$$set = u => {
        if ("scene" in u) {
            t(0, n = u.scene);
        }
        if ("texture" in u) {
            t(1, i = u.texture);
        }
    };
    l.$$.update = () => {
        if (l.$$.dirty & 6) {
            if (i) {
                t(2, r.visible = true, r);
                if (r.material.map) {
                    r.material.map.dispose();
                }
                t(2, r.material.map = i, r);
                t(2, r.material.needsUpdate = true, r);
            } else {
                t(2, r.visible = false, r);
            }
        }
    };
    return [n, i, r];
}
class Sa extends pe {
    constructor(e) {
        super();
        _e(this, e, Ra, null, me, {
            scene: 0,
            texture: 1
        });
    }
}
const Ml = J(false);
$e(Ml, "animateWater", E(Ml));
et(Ml, "animateWater");
var el;
let Ha = () => {
    if (!(!el || !E(Ml))) {
        el.material.uniforms.time.value += 0.008333333333333333;
    }
};
function Da(l, e, t) {
    I(l, pl, h => t(4, h));
    I(l, gl, h => t(5, h));
    let {
        scene: a
    } = e;
    let {
        light: o
    } = e;
    let {
        hide: r = false
    } = e;
    const u = new ms(100, 100);
    const c = new En();
    c.crossOrigin = "anonymous";
    el = new Ts(u, {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: c.load("https://cdn.glitch.com/29e07830-2317-4b15-a044-135e73c7f840%2F95d0cfb2406ee5a65491bbaba429713684b5b089.jpeg?v=1622566026664", function (h) {
            h.wrapS = h.wrapT = Bs;
        }),
        sunDirection: new rl(),
        sunColor: 16777215,
        waterColor: 7695,
        distortionScale: 3.7,
        fog: a.fog !== undefined
    });
    el.rotation.x = -Math.PI / 2;
    el.position.y = .01;
    const f = el.material.uniforms;
    f.distortionScale.value = 1.2;
    f.size.value = 10;
    f.time.value = 40.5;
    f.waterColor.value.r = 0.25882352941176473;
    f.waterColor.value.g = 0.5294117647058824;
    f.waterColor.value.b = 0.9607843137254902;
    a.add(el);
    l.$$set = h => {
        if ("scene" in h) {
            t(0, a = h.scene);
        }
        if ("light" in h) {
            t(1, o = h.light);
        }
        if ("hide" in h) {
            t(2, r = h.hide);
        }
    };
    l.$$.update = () => {
        if (l.$$.dirty & 4) {
            el.visible = !r;
        }
        if (l.$$.dirty & 58 && (h || h)) {
            const h = new rl();
            o.getWorldPosition(h);
            h.y -= 1;
            f.sunDirection.value.copy(h);
        }
    };
    return [a, o, r, f, h, h];
}
class Ia extends pe {
    constructor(e) {
        super();
        _e(this, e, Da, null, me, {
            scene: 0,
            light: 1,
            hide: 2
        });
    }
}
const Pl = J(.3);
const Rl = J(.2);
$e(Pl, "shadowStrength", E(Pl));
et(Pl, "shadowStrength");
$e(Rl, "shadowBlur", E(Rl));
et(Rl, "shadowBlur");
function Aa(l, e, t) {
    I(l, Rl, _ => t(3, _));
    I(l, Pl, _ => t(4, _));
    l.$$.on_destroy.push(() => G());
    l.$$.on_destroy.push(() => G());
    let {
        scene: r
    } = e;
    let {
        light: u
    } = e;
    let {
        hide: c = false
    } = e;
    const f = new ms(100, 100);
    const h = new xs({
        opacity: .2
    });
    const m = new Fn(f, h);
    m.rotation.x = -Math.PI / 2;
    m.position.y = .01;
    m.receiveShadow = true;
    r.add(m);
    l.$$set = _ => {
        if ("scene" in _) {
            t(1, r = _.scene);
        }
        if ("light" in _) {
            t(0, u = _.light);
        }
        if ("hide" in _) {
            t(2, c = _.hide);
        }
    };
    l.$$.update = () => {
        if (l.$$.dirty & 16) {
            h.opacity = _;
        }
        if (l.$$.dirty & 16) {
            m.visible = _ > 0;
        }
        if (l.$$.dirty & 8) {
            t(0, u.shadow.radius = _ * 10, u);
        }
    };
    return [u, r, c, _, _];
}
class Ea extends pe {
    constructor(e) {
        super();
        _e(this, e, Aa, null, me, {
            scene: 1,
            light: 0,
            hide: 2
        });
    }
}
function Fa(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    t = new Sa({
        props: {
            scene: l[0],
            texture: (l[3] && l[3].pano) === true ? l[2] : null
        }
    });
    i = new Ia({
        props: {
            scene: l[0],
            light: l[1],
            hide: l[3] && !l[3].sea
        }
    });
    o = new Ea({
        props: {
            scene: l[0],
            light: l[1],
            hide: l[3] && !l[3].sea
        }
    });
    return {
        c() {
            e = P();
            Q(t.$$.fragment);
            n = P();
            Q(i.$$.fragment);
            a = P();
            Q(o.$$.fragment);
        },
        m(u, c) {
            R(u, e, c);
            $(t, u, c);
            R(u, n, c);
            $(i, u, c);
            R(u, a, c);
            $(o, u, c);
            r = true;
        },
        p(u, [c]) {
            const f = {};
            if (c & 1) {
                f.scene = u[0];
            }
            if (c & 12) {
                f.texture = (u[3] && u[3].pano) === true ? u[2] : null;
            }
            t.$set(f);
            const h = {};
            if (c & 1) {
                h.scene = u[0];
            }
            if (c & 2) {
                h.light = u[1];
            }
            if (c & 8) {
                h.hide = u[3] && !u[3].sea;
            }
            i.$set(h);
            const m = {};
            if (c & 1) {
                m.scene = u[0];
            }
            if (c & 2) {
                m.light = u[1];
            }
            if (c & 8) {
                m.hide = u[3] && !u[3].sea;
            }
            o.$set(m);
        },
        i(u) {
            if (!r) {
                x(t.$$.fragment, u);
                x(i.$$.fragment, u);
                x(o.$$.fragment, u);
                r = true;
            }
        },
        o(u) {
            W(t.$$.fragment, u);
            W(i.$$.fragment, u);
            W(o.$$.fragment, u);
            r = false;
        },
        d(u) {
            if (u) {
                S(e);
            }
            ee(t, u);
            if (u) {
                S(n);
            }
            ee(i, u);
            if (u) {
                S(a);
            }
            ee(o, u);
        }
    };
}
const Ft = J(null);
let zn = J(null);
let al = J([]);
let gi = [{
    type: "img",
    name: "Morning Haze",
    url: "https://yeemachine.github.io/k2021/img/bg/morning_bg.jpg",
    thumbnail: "https://yeemachine.github.io/k2021/img/bg/morning_bg.jpg",
    pano: false,
    sea: false,
    light: "#ffffff"
}, {
    type: "img",
    name: "After Glow",
    url: "https://yeemachine.github.io/k2021/img/bg/midday_bg.jpg",
    thumbnail: "https://yeemachine.github.io/k2021/img/bg/midday_bg.jpg",
    pano: false,
    sea: false,
    light: "#ffffff"
}, {
    type: "img",
    name: "City Lights",
    url: "https://yeemachine.github.io/k2021/img/bg/night_bg.jpg",
    thumbnail: "https://yeemachine.github.io/k2021/img/bg/night_bg.jpg",
    pano: false,
    sea: false,
    light: "#ffffff"
}, {
    type: "color",
    name: "Transparent",
    url: "#00fc0100"
}, {
    type: "color",
    name: "White",
    url: "#ffffff"
}, {
    type: "color",
    name: "Chroma Green",
    url: "#00fc01"
}, {
    type: "color",
    name: "Chroma Blue",
    url: "#0033cc"
}, {
    type: "color",
    name: "Chroma Pink",
    url: "#ff00ff"
}];
let Mn = [{
    type: "img",
    name: "Starry Sea",
    url: "https://yeemachine.github.io/k2021/img/pano/starrynight.jpg",
    thumbnail: "https://yeemachine.github.io/k2021/img/pano/starrynight_icon.jpg",
    pano: true,
    sea: true,
    light: "#D2F4FF"
}, {
    type: "img",
    name: "Perseverance",
    url: "https://yeemachine.github.io/k2021/img/pano/mars.jpg",
    thumbnail: "https://yeemachine.github.io/k2021/img/pano/mars_icon.jpg",
    pano: true,
    sea: true,
    light: "#FFE8D2"
}, {
    type: "img",
    name: "Monument Valley",
    url: "https://yeemachine.github.io/k2021/img/pano/monumentvalley.jpg",
    thumbnail: "https://yeemachine.github.io/k2021/img/pano/monumentvalley_icon.jpg",
    pano: true,
    sea: true,
    light: "#ffffff"
}, {
    type: "img",
    name: "Cosy Loft",
    url: "https://yeemachine.github.io/k2021/img/pano/loft.jpg",
    thumbnail: "https://yeemachine.github.io/k2021/img/pano/loft_icon.jpg",
    pano: true,
    sea: false,
    light: "#FCDFA9"
}, {
    type: "img",
    name: "Factory",
    url: "https://yeemachine.github.io/k2021/img/pano/factory.jpg",
    thumbnail: "https://yeemachine.github.io/k2021/img/pano/factory_icon.jpg",
    pano: true,
    sea: false,
    light: "#FCDFA9"
}];
$e(al, "bgList", [], Zn);
et(al, "bgList");
$e(Ft, "bgURL", Mn[0], Zn);
et(Ft, "bgURL");
const pi = (l, e) => {
    let t = E(zn);
    if (t && t.image && !t.isPano) {
        const n = l / e;
        const a = t.image.width / t.image.height / n;
        t.offset.x = a > 1 ? (1 - 1 / a) / 2 : 0;
        t.repeat.x = a > 1 ? 1 / a : 1;
        t.offset.y = a > 1 ? 0 : (1 - a) / 2;
        t.repeat.y = a > 1 ? 1 : a;
    }
};
function Ta(l, e, t) {
    I(l, ut, b => t(6, b));
    I(l, Kt, b => t(7, b));
    I(l, zn, b => t(2, b));
    I(l, Ft, b => t(3, b));
    l.$$.on_destroy.push(() => G());
    l.$$.on_destroy.push(() => G());
    let {
        scene: c
    } = e;
    let {
        light: f
    } = e;
    let {
        glowLight: h
    } = e;
    let {
        renderer: m
    } = e;
    const _ = new En();
    Ft.subscribe(async b => {
        if (b) {
            switch (b.type) {
                case "img":
                    _.load(b.url, w => {
                        w.isPano = b.pano;
                        zn.set(w);
                        t(0, c.background = b, c);
                        pi(b.w, b.h);
                    });
                    if (b.light) {
                        Kt.set(b.light);
                    } else {
                        t(1, f.color = new nl(b), f);
                    }
                    break;
                case "color":
                    if (b.url.length > 7) {
                        t(0, c.background = null, c);
                    } else {
                        t(0, c.background = new nl(b.url), c);
                    }
                    t(1, f.color = new nl(b), f);
                    break;
                case "iro":
                    t(0, c.background = new nl(b.url), c);
                    t(1, f.color = new nl(b), f);
                    break;
            }
        }
    });
    l.$$set = b => {
        if ("scene" in b) {
            t(0, c = b.scene);
        }
        if ("light" in b) {
            t(1, f = b.light);
        }
        if ("glowLight" in b) {
            t(4, h = b.glowLight);
        }
        if ("renderer" in b) {
            t(5, m = b.renderer);
        }
    };
    l.$$.update = () => {
        if (l.$$.dirty & 64) {
            pi(b.w, b.h);
        }
    };
    return [c, f, b, b, h, m, b];
}
class Ba extends pe {
    constructor(e) {
        super();
        _e(this, e, Ta, Fa, me, {
            scene: 0,
            light: 1,
            glowLight: 4,
            renderer: 5
        });
    }
}
const _i = {
    en: "Face and full-body tracking!",
    ru: "стать <strong>виртуальным персонажем</strong>"
};
const He = {
    cameraOn: {
        en: "Stop Face Tracking",
        ru: "Выключите веб-камеру"
    },
    cameraOff: {
        en: "Start Face Tracking",
        ru: "Включите веб-камеру"
    },
    char: {
        en: "Characters",
        ru: "Символы"
    },
    sticker: {
        en: "Stickers",
        ru: "Наклейки"
    },
    bg: {
        en: "Backgrounds",
        ru: "Фоны"
    },
    call: {
        en: "Call a friend",
        ru: "Позвонить другу"
    },
    exp: {
        en: "Accessories",
        ru: "Выражения"
    },
    pip: {
        en: "Picture-in-Picture",
        ru: "Выражения"
    },
    selfie: {
        en: "Selfie Mode",
        ru: "Выражения"
    },
    firstPerson: {
        en: "First Person Mode",
        ru: "Выражения"
    },
    flip: {
        en: "Flip Camera",
        ru: "Выражения"
    },
    settings: {
        en: "Settings",
        ru: "Выражения"
    },
    lights: {
        en: "Effects",
        ru: "Выражения"
    },
    hide: {
        en: "Hide Controls",
        ru: "Выражения"
    },
    show: {
        en: "Show Controls",
        ru: "Выражения"
    }
};
const Yl = {
    sticker: {
        message: {
            en: "Add <b>image/gif</b> stickers that you can resize and use as props for videos or streaming."
        },
        confirm: {
            en: "Sounds good"
        }
    },
    bg: {
        message: {
            en: "Add <b>photo</b> backgrounds, use the <b>color picker</b>, or select <b>transparent bg</b> for streaming software like OBS."
        },
        confirm: {
            en: "Sounds good"
        }
    },
    call: {
        message: {
            en: "Share your <b>6 digit code</b> with a friend to start a private <b>voice call</b> using virtual avatars!"
        },
        confirm: {
            en: "Let's go"
        }
    },
    char: {
        message: {
            en: "Drag and drop <b>.vrm</b> files to load your own character models. Uploads are saved locally for future visits!"
        },
        confirm: {
            en: "Start now"
        }
    }
};
const Xl = {
    upload: {
        en: "Upload .vrm file"
    },
    feed: {
        on: {
            en: "Show Camera Feed"
        },
        off: {
            en: "Hide Camera Feed"
        }
    }
};
const yl = {
    upload: {
        en: "Upload Image BG"
    },
    upload3D: {
        en: "Upload Panorama Img"
    }
};
const Jl = {
    upload: {
        en: "Upload .jpg, .png, .gif, .mp4"
    }
};
const Mt = {
    label: {
        default: {
            en: "Enter 6 digit Chat ID"
        },
        disconnected: {
            en: "Disconnected from server"
        },
        connected: {
            en: "Call with"
        }
    },
    connecting: {
        en: "Connecting..."
    },
    disconnected: {
        en: "Tap to reconnect"
    },
    id: {
        share: {
            en: "Or share your Chat ID:"
        },
        copied: {
            en: "Copied to clipboard"
        }
    }
};
const Me = [{
    en: "Start Vtubing!"
}, {
    en: "<b>Animate your character with your webcam!</b><br><br>As a sequal to <a href='https://kalidoface.com' target='_blank'><b>Kalidoface</b></a>, Kalidoface 3D brings support for 3D Vtuber avatars, more dynamic camera angles, and even full-body tracking options. Add the app to your homescreen to use it in standalone full screen or even add it to OBS as a browser object directly."
}, {
    en: "Kalidoface 3D works with <b>VRM rigged 3D models</b>. Just drag and drop your own .vrm files to add your Vtuber character.<br><br>Models are saved locally so you won't need to reupload them next visit!"
}, {
    en: "Share your 6 digit code with a friend and have <b>one-on-one calls</b> using expressive avatars when you're not in the mood for regular video. Perfect for livestream collabs or just chatting."
}, {
    en: "Upload image backgrounds, or use the included <b>chroma key colors</b> for keying in special software such as OBS. You can also upload resizeable <b>gif stickers</b> to use as props for your videos/streams. Uploaded images are also saved locally for the next time you visit!"
}, {
    header: {
        en: "Have fun!"
    },
    p: {
        en: "Hope you enjoy using Kalidoface! This app was developed to provide a super simple way to become a <b>Vtuber</b>. All you need is a webcam and a web browser and you too can embody a virtual character! Whether it be for live streaming or short meme videos, Kalidoface offers real-time face tracking without needing to install anything. Kalidoface is powered by <a href='https://github.com/yeemachine/kalidokit' target='_blank'><b>KalidoKit</b></a>, an open source face, pose, and hand rigger with the intention to make motion capture easy to use on the web.<br><br>Feel free to reach out to me <a href='https://twitter.com/yeemachine' target='_blank'><b>@yeemachine</b></a>."
    }
}, {
    header: {
        en: "Special thanks"
    },
    p: {
        en: "This project wouldn't have been possible without the support of these amazing people!"
    },
    list: {
        en: ["Logo, Icons, Illustrations", "three/vrm", "Dev Platform", "Holistic", "Facemesh"]
    }
}, {
    header: {
        en: "Model Credits"
    },
    p: {
        en: "Demo models provided or purchased from these talented artists!"
    }
}, {
    header: {
        en: "Discord server coming soon..."
    },
    p: {
        en: "A dedicated server coming soon..."
    }
}];
const ln = {
    close: {
        en: "Let's go!"
    },
    refresh: {
        en: "Refresh cards"
    }
};
function xa(l) {
    let e;
    let t;
    let n;
    return {
        c() {
            e = L("video");
            s(e, "id", "pip");
            e.muted = true;
            e.playsInline = true;
            s(e, "class", "svelte-1rxu17a");
            Le(e, "enabled", l[1]);
        },
        m(i, a) {
            R(i, e, a);
            l[3](e);
            if (!t) {
                n = [j(e, "enterpictureinpicture", Ua), j(e, "leavepictureinpicture", l[4])];
                t = true;
            }
        },
        p(i, [a]) {
            if (a & 2) {
                Le(e, "enabled", i[1]);
            }
        },
        i: G,
        o: G,
        d(i) {
            if (i) {
                S(e);
            }
            l[3](null);
            t = false;
            kt(n);
        }
    };
}
const sl = J(false);
const Oa = async l => {
    sl.set(true);
};
const Ua = () => {};
function ja(l, e, t) {
    I(l, sl, w => t(1, w));
    l.$$.on_destroy.push(() => G());
    let {
        canvas: a
    } = e;
    let o;
    let r;
    const u = async () => {
        if (!o || o.active === false) {
            try {
                o = a.captureStream();
                f(o, r);
            } catch (w) {
                sl.set(false);
                console(w);
            }
        }
    };
    let c;
    const f = (w, C) => {
        C.srcObject = w;
        c = setInterval(() => {
            if (C.readyState >= 3) {
                C.play();
                m(C);
                clearInterval(c);
            }
        }, 500);
    };
    const h = () => {
        if (o) {
            o.getTracks().forEach(w => w.stop());
        }
        sl.set(false);
        clearInterval(c);
    };
    const m = async w => {
        try {
            if (w !== document.pictureInPictureElement) {
                w.play();
                await w.requestPictureInPicture();
            } else {
                await w.exitPictureInPicture();
            }
        } catch (C) {
            console.log(`> Argh! ${C}`);
        } finally {}
    };
    sl.subscribe(w => {
        if (w) {
            u();
        } else {
            h();
        }
    });
    function _(w) {
        ht[w ? "unshift" : "push"](() => {
            r = w;
            t(0, r);
        });
    }
    const b = () => {
        sl.set(false);
    };
    l.$$set = w => {
        if ("canvas" in w) {
            t(2, a = w.canvas);
        }
    };
    return [r, w, a, _, b];
}
class Wa extends pe {
    constructor(e) {
        super();
        _e(this, e, ja, xa, me, {
            canvas: 2
        });
    }
}
function Na(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    return {
        c() {
            e = L("container");
            t = L("div");
            n = L("video");
            i = P();
            a = L("canvas");
            o = P();
            r = L("button");
            r.innerHTML = "<i class=\"kalicon notranslate solid small\">close</i>";
            s(n, "id", "user-cam");
            n.autoplay = true;
            n.muted = true;
            n.playsInline = true;
            s(n, "class", "svelte-rw7740");
            Le(n, "hide", l[4]);
            s(a, "class", "output_canvas svelte-rw7740");
            s(a, "width", "1280px");
            s(a, "height", "720px");
            s(r, "class", "svelte-rw7740");
            s(t, "id", "drag-cam");
            te(t, "--margin", 8);
            s(t, "class", u = zl(l[2] || !l[1] || !l[0] || l[3] ? "hide" : "") + " svelte-rw7740");
            s(e, "class", "svelte-rw7740");
        },
        m(h, m) {
            R(h, e, m);
            d(e, t);
            d(t, n);
            l[6](n);
            d(t, i);
            d(t, a);
            l[7](a);
            d(t, o);
            d(t, r);
            if (!c) {
                f = [j(r, "click", l[8]), j(t, "mouseenter", l[9]), j(t, "mouseleave", l[10])];
                c = true;
            }
        },
        p(h, [m]) {
            if (m & 16) {
                Le(n, "hide", h[4]);
            }
            if (m & 0) {
                te(t, "--margin", 8);
            }
            if (m & 15 && u !== (u = zl(h[2] || !h[1] || !h[0] || h[3] ? "hide" : "") + " svelte-rw7740")) {
                s(t, "class", u);
            }
        },
        i: G,
        o: G,
        d(h) {
            if (h) {
                S(e);
            }
            l[6](null);
            l[7](null);
            c = false;
            kt(f);
        }
    };
}
const wl = J(false);
const Il = J(false);
let je = null;
let kl = null;
let rt = null;
const Sl = J(true);
const Nl = J(true);
$e(Sl, "hideCamera", false);
et(Sl, "hideCamera");
$e(Nl, "hideFace", true);
et(Nl, "hideFace");
const Ue = {
    x: 0,
    y: 0,
    sx: 0,
    sy: 0,
    m: 8,
    hover: false,
    active: false
};
const Pn = J({
    videoinput: [],
    audioinput: [],
    audiooutput: [],
    currentVideoIndex: 0,
    currentAudioIndex: 0
});
let Fl = J(null);
function vi(l) {
    console.log("navigator.MediaDevices.getUserMedia error: ", l.message, l.name);
}
function qa(l, e, t) {
    I(l, ut, H => t(5, H));
    I(l, Il, H => t(0, H));
    I(l, wl, H => t(1, H));
    I(l, Pn, H => t(13, H));
    I(l, Fl, H => t(14, H));
    I(l, Sl, H => t(2, H));
    I(l, sl, H => t(3, H));
    I(l, Nl, H => t(4, H));
    l.$$.on_destroy.push(() => G());
    l.$$.on_destroy.push(() => G());
    l.$$.on_destroy.push(() => G());
    l.$$.on_destroy.push(() => G());
    l.$$.on_destroy.push(() => G());
    l.$$.on_destroy.push(() => G());
    function p(H) {
        for (let B = 0; B !== H.length; ++B) {
            const T = H[B];
            if (T.kind === "audioinput") {
                H.audioinput.push(T);
            } else if (T.kind === "audiooutput") {
                H.audiooutput.push(T);
            } else if (T.kind === "videoinput") {
                if (T.deviceId !== "" && !H.videoinput.find(q => q.deviceId === T.deviceId)) {
                    H.videoinput.push(T);
                }
            } else {
                if (T.deviceId !== "" && !H.videoinput.find(q => q.deviceId === T.deviceId)) {
                    H.videoinput.push(T);
                }
                console.log("Some other kind of source/device: ", T);
            }
        }
        H.videoinput.forEach((B, T) => {
            if (B.label.includes("Virtual") || B.label.includes("virtual")) {
                H.videoinput.push(H.videoinput.splice(T, 1)[0]);
            }
        });
        Pn.set(H);
        if (!H) {
            Fl.set(H.videoinput[0].deviceId);
        }
    }
    navigator.mediaDevices.enumerateDevices().then(p).catch(vi);
    let z;
    const k = () => {
        const H = {
            video: {
                deviceId: H ? {
                    exact: H
                } : undefined,
                facingMode: "user",
                width: {
                    min: 480,
                    ideal: 640,
                    max: 640
                },
                height: {
                    min: 480,
                    ideal: 480,
                    max: 480
                }
            },
            audio: false
        };
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            if (!z || z.active === false) {
                navigator.mediaDevices.getUserMedia(H).then(B => {
                    z = B;
                    g(B);
                    if (H.videoinput.length === 0) {
                        return navigator.mediaDevices.enumerateDevices().then(p).catch(vi);
                    }
                }).catch(B => {
                    alert("Please allow camera for facial tracking.");
                    setTimeout(() => {
                        wl.set(false);
                        Il.set(false);
                    }, 1e3);
                });
            } else {
                y();
            }
        }
    };
    let v;
    const g = H => {
        je.srcObject = H;
        v = setInterval(() => {
            if (je.readyState >= 3) {
                Il.set(true);
                je.play();
                je.width = je.videoWidth;
                je.height = je.videoHeight;
                clearInterval(v);
            }
        }, 500);
    };
    const y = () => {
        if (z) {
            z.getTracks().forEach(H => H.stop());
        }
        Il.set(false);
        clearInterval(v);
    };
    wl.subscribe(H => {
        if (H) {
            k();
        } else {
            setTimeout(y, 50);
        }
    });
    Fl.subscribe(H => {
        if (H && H) {
            y();
            k();
        }
    });
    Nt(() => {
        rt = kl.getContext("2d");
        xt("#drag-cam").draggable({
            inertia: !Ln,
            modifiers: [xt.modifiers.restrictRect({
                restriction: "parent",
                endOnly: true,
                elementRect: {
                    top: 0,
                    left: 0,
                    bottom: 1,
                    right: 1
                }
            })],
            listeners: {
                start(H) {},
                move(H) {
                    Ue.x += H.dx;
                    Ue.y += H.dy;
                    Ue.sx = 0 / (H.w - H.target.offsetWidth - 16);
                    Ue.sy = 0 / (H.h - H.target.offsetHeight - 16);
                    H.target.style.webkitTransform = H.target.style.transform = `translate(${0}px, ${0}px)`;
                }
            }
        }).on("down", function (H) {
            Ue.active = true;
        }).on("up", function (H) {
            Ue.active = false;
        });
    });
    function M(H) {
        ht[H ? "unshift" : "push"](() => {
            je = H;
        });
    }
    function N(H) {
        ht[H ? "unshift" : "push"](() => {
            kl = H;
        });
    }
    const O = () => {
        Sl.set(true);
    };
    const A = () => {
        Ue.hover = true;
    };
    const D = () => {
        Ue.hover = false;
    };
    l.$$.update = () => {
        if (l.$$.dirty & 33 && H) {
            Ue.x = 0 * (H.w - je.offsetWidth - 16);
            Ue.y = 0 * (H.h - je.offsetHeight - 16);
            document.querySelector("#drag-cam").style.webkitTransform = document.querySelector("#drag-cam").style.transform = `translate(${0}px, ${0}px)`;
        }
    };
    return [H, H, H, H, H, H, M, N, O, A, D];
}
class Ga extends pe {
    constructor(e) {
        super();
        _e(this, e, qa, Na, me, {});
    }
}
const V = J({
    user: {
        id: "user",
        model: null,
        live2d: null,
        position: {
            x: 0,
            y: window.innerWidth > 600 ? .7 : .55,
            z: 0
        },
        currentExp: 0,
        expressions: [],
        zoom: .5,
        destroying: false,
        detected: false,
        tracking: JSON.parse(JSON.stringify($l))
    },
    friend: {
        id: "friend",
        model: null,
        live2d: null,
        position: {
            x: 1,
            y: window.innerWidth > 600 ? .7 : .55,
            z: 0
        },
        currentExp: 0,
        expressions: [],
        zoom: .5,
        destroying: false,
        detected: true,
        tracking: JSON.parse(JSON.stringify($l))
    }
});
let nn;
let bi;
function Za() {
    pn.set("0:00");
    clearInterval(nn);
    nn = null;
}
function Ya() {
    bi = Date.now();
    nn = setInterval(function () {
        var l = Date.now();
        var e = l - bi;
        var t = Math.floor(e / 86400000);
        var n = Math.floor(e % 86400000 / 3600000);
        var i = Math.floor(e % 3600000 / 60000);
        var a = Math.floor(e % 60000 / 1e3);
        let o = t === 0 ? "" : t + ":";
        let r = n === 0 && t === 0 ? "" : n !== 0 && t === 0 ? n + ":" : ("0" + n).slice(-2) + ":";
        let u = i === 0 && n === 0 ? "0:" : i !== 0 && n === 0 ? i + ":" : ("0" + i).slice(-2) + ":";
        let c = ("0" + a).slice(-2);
        pn.set(o + r + u + c);
    }, 1e3);
}
function yi(l) {
    let e;
    let t = l[0].text + "";
    let n;
    let i;
    let a;
    let o;
    let r;
    return {
        c() {
            e = L("div");
            n = ne(t);
            s(e, "class", i = "notification " + l[0].type + " svelte-1g24hxh");
        },
        m(u, c) {
            R(u, e, c);
            d(e, n);
            r = true;
        },
        p(u, c) {
            l = u;
            if ((!r || c & 1) && t !== (t = l[0].text + "")) {
                Re(n, t);
            }
            if (!r || c & 1 && i !== (i = "notification " + l[0].type + " svelte-1g24hxh")) {
                s(e, "class", i);
            }
        },
        i(u) {
            if (!r) {
                re(() => {
                    if (o) {
                        o.end(1);
                    }
                    a = ue(e, Xt, {
                        y: l[1].w > 600 ? 20 : -20,
                        easing: le,
                        duration: 400
                    });
                    a.start();
                });
                r = true;
            }
        },
        o(u) {
            if (a) {
                a.invalidate();
            }
            o = Se(e, Xt, {
                y: l[1].w > 600 ? 20 : -20,
                easing: le,
                duration: 400,
                delay: 200
            });
            r = false;
        },
        d(u) {
            if (u) {
                S(e);
            }
            if (u && o) {
                o.end();
            }
        }
    };
}
function ki(l) {
    let e;
    let t;
    let n = l[0] && yi(l);
    return {
        c() {
            if (n) {
                n.c();
            }
            e = _l();
        },
        m(i, a) {
            if (n) {
                n.m(i, a);
            }
            R(i, e, a);
            t = true;
        },
        p(i, a) {
            if (i[0]) {
                if (n) {
                    n.p(i, a);
                    if (a & 1) {
                        x(n, 1);
                    }
                } else {
                    n = yi(i);
                    n.c();
                    x(n, 1);
                    n.m(e.parentNode, e);
                }
            } else if (n) {
                bt();
                W(n, 1, 1, () => {
                    n = null;
                });
                yt();
            }
        },
        i(i) {
            if (!t) {
                x(n);
                t = true;
            }
        },
        o(i) {
            W(n);
            t = false;
        },
        d(i) {
            if (n) {
                n.d(i);
            }
            if (i) {
                S(e);
            }
        }
    };
}
function Xa(l) {
    let e = l[0];
    let t;
    let n;
    let i = ki(l);
    return {
        c() {
            i.c();
            t = _l();
        },
        m(a, o) {
            i.m(a, o);
            R(a, t, o);
            n = true;
        },
        p(a, [o]) {
            if (o & 1 && me(e, e = a[0])) {
                bt();
                W(i, 1, 1, G);
                yt();
                i = ki(a);
                i.c();
                x(i);
                i.m(t.parentNode, t);
            } else {
                i.p(a, o);
            }
        },
        i(a) {
            if (!n) {
                x(i);
                n = true;
            }
        },
        o(a) {
            W(i);
            n = false;
        },
        d(a) {
            if (a) {
                S(t);
            }
            i.d(a);
        }
    };
}
const Ll = J(null);
function Ja(l, e, t) {
    I(l, Ll, u => t(0, u));
    I(l, ut, u => t(1, u));
    l.$$.on_destroy.push(() => G());
    let o;
    const r = () => {
        clearTimeout(o);
        o = setTimeout(() => {
            Ll.set(null);
        }, 3e3);
    };
    Ll.subscribe(u => {
        if (u) {
            r();
        }
    });
    return [u, u];
}
class Ka extends pe {
    constructor(e) {
        super();
        _e(this, e, Ja, Xa, me, {});
    }
}
const oe = (l, e, t) => {
    l[e + "X"] = t.x;
    l[e + "Y"] = t.y;
    l[e + "Z"] = t.z;
};
const Ae = (l, e, t, n = null) => {
    if (n) {
        l[n][e] = {
            x: t[n + e + "X"],
            y: t[n + e + "Y"],
            z: t[n + e + "Z"]
        };
    } else {
        l[e] = {
            x: t[e + "X"],
            y: t[e + "Y"],
            z: t[e + "Z"]
        };
    }
};
let Li = window.performance.now();
const Qa = async () => {
    if (!E(Ot)) {
        return;
    }
    let l = window.performance.now();
    let e = l - Li;
    if (e < 100) {
        return;
    }
    Li = l - e % 100;
    let t = E(V).user;
    let n = {
        headX: t.tracking.Face.head.x,
        headY: t.tracking.Face.head.y,
        headZ: t.tracking.Face.head.z,
        eyeL: t.tracking.Face.eye.l,
        eyeR: t.tracking.Face.eye.r,
        brow: t.tracking.Face.brow,
        pupilX: t.tracking.Face.pupil.x,
        pupilY: t.tracking.Face.pupil.y,
        mouthX: t.tracking.Face.mouth.x,
        mouthY: t.tracking.Face.mouth.y,
        mouthA: t.tracking.Face.mouth.shape.A,
        mouthE: t.tracking.Face.mouth.shape.E,
        mouthI: t.tracking.Face.mouth.shape.I,
        mouthO: t.tracking.Face.mouth.shape.O,
        mouthU: t.tracking.Face.mouth.shape.U,
        detected: t.detected,
        type: "face"
    };
    if (E(de).holistic.enable) {
        oe(n, "RightUpperArm", t.tracking.Pose.RightUpperArm);
        oe(n, "RightLowerArm", t.tracking.Pose.RightLowerArm);
        oe(n, "RightHand", t.tracking.Pose.RightHand);
        oe(n, "LeftUpperArm", t.tracking.Pose.LeftUpperArm);
        oe(n, "LeftLowerArm", t.tracking.Pose.LeftLowerArm);
        oe(n, "LeftHand", t.tracking.Pose.LeftHand);
        oe(n, "Spine", t.tracking.Pose.Spine);
        oe(n, "HipsPosition", t.tracking.Pose.Hips.position);
        oe(n, "HipsRotation", t.tracking.Pose.Hips.rotation);
        oe(n, "RightUpperLeg", t.tracking.Pose.RightUpperLeg);
        oe(n, "RightLowerLeg", t.tracking.Pose.RightLowerLeg);
        oe(n, "LeftUpperLeg", t.tracking.Pose.LeftUpperLeg);
        oe(n, "LeftLowerLeg", t.tracking.Pose.LeftLowerLeg);
        oe(n, "RightWrist", t.tracking.RightHand.RightWrist);
        oe(n, "RightRingProximal", t.tracking.RightHand.RightRingProximal);
        oe(n, "RightRingIntermediate", t.tracking.RightHand.RightRingIntermediate);
        oe(n, "RightRingDistal", t.tracking.RightHand.RightRingDistal);
        oe(n, "RightIndexProximal", t.tracking.RightHand.RightIndexProximal);
        oe(n, "RightIndexIntermediate", t.tracking.RightHand.RightIndexIntermediate);
        oe(n, "RightIndexDistal", t.tracking.RightHand.RightIndexDistal);
        oe(n, "RightMiddleProximal", t.tracking.RightHand.RightMiddleProximal);
        oe(n, "RightMiddleIntermediate", t.tracking.RightHand.RightMiddleIntermediate);
        oe(n, "RightMiddleDistal", t.tracking.RightHand.RightMiddleDistal);
        oe(n, "RightThumbProximal", t.tracking.RightHand.RightThumbProximal);
        oe(n, "RightThumbIntermediate", t.tracking.RightHand.RightThumbIntermediate);
        oe(n, "RightThumbDistal", t.tracking.RightHand.RightThumbDistal);
        oe(n, "RightLittleProximal", t.tracking.RightHand.RightLittleProximal);
        oe(n, "RightLittleIntermediate", t.tracking.RightHand.RightLittleIntermediate);
        oe(n, "RightLittleDistal", t.tracking.RightHand.RightLittleDistal);
        oe(n, "LeftWrist", t.tracking.LeftHand.LeftWrist);
        oe(n, "LeftRingProximal", t.tracking.LeftHand.LeftRingProximal);
        oe(n, "LeftRingIntermediate", t.tracking.LeftHand.LeftRingIntermediate);
        oe(n, "LeftRingDistal", t.tracking.LeftHand.LeftRingDistal);
        oe(n, "LeftIndexProximal", t.tracking.LeftHand.LeftIndexProximal);
        oe(n, "LeftIndexIntermediate", t.tracking.LeftHand.LeftIndexIntermediate);
        oe(n, "LeftIndexDistal", t.tracking.LeftHand.LeftIndexDistal);
        oe(n, "LeftMiddleProximal", t.tracking.LeftHand.LeftMiddleProximal);
        oe(n, "LeftMiddleIntermediate", t.tracking.LeftHand.LeftMiddleIntermediate);
        oe(n, "LeftMiddleDistal", t.tracking.LeftHand.LeftMiddleDistal);
        oe(n, "LeftThumbProximal", t.tracking.LeftHand.LeftThumbProximal);
        oe(n, "LeftThumbIntermediate", t.tracking.LeftHand.LeftThumbIntermediate);
        oe(n, "LeftThumbDistal", t.tracking.LeftHand.LeftThumbDistal);
        oe(n, "LeftLittleProximal", t.tracking.LeftHand.LeftLittleProximal);
        oe(n, "LeftLittleIntermediate", t.tracking.LeftHand.LeftLittleIntermediate);
        oe(n, "LeftLittleDistal", t.tracking.LeftHand.LeftLittleDistal);
        n.type = "holistic";
    }
    E(Ot).send(n);
};
function Xn(l, e = "holistic", t = null) {
    kl.width = je.videoWidth;
    kl.height = je.videoHeight;
    rt.save();
    rt.clearRect(0, 0, kl.width, kl.height);
    switch (e) {
        case "holistic":
            drawConnectors(rt, l.poseLandmarks, POSE_CONNECTIONS, {
                color: "#00cff7",
                lineWidth: 4
            });
            drawLandmarks(rt, l.poseLandmarks, {
                color: "#ff0364",
                lineWidth: 2
            });
            drawConnectors(rt, l.faceLandmarks, FACEMESH_TESSELATION, {
                color: "#C0C0C070",
                lineWidth: 1
            });
            if (l.faceLandmarks && l.faceLandmarks.length === 478) {
                drawLandmarks(rt, [l.faceLandmarks[468], l.faceLandmarks[473]], {
                    color: "#ffe603",
                    lineWidth: 2
                });
            }
            drawConnectors(rt, l.leftHandLandmarks, HAND_CONNECTIONS, {
                color: "#eb1064",
                lineWidth: 5
            });
            drawLandmarks(rt, l.leftHandLandmarks, {
                color: "#00cff7",
                lineWidth: 2
            });
            drawConnectors(rt, l.rightHandLandmarks, HAND_CONNECTIONS, {
                color: "#22c3e3",
                lineWidth: 5
            });
            drawLandmarks(rt, l.rightHandLandmarks, {
                color: "#ff0364",
                lineWidth: 2
            });
            break;
        case "pose":
            if (t && t.length === 478) {
                drawConnectors(rt, t, FACEMESH_TESSELATION, {
                    color: "#C0C0C070",
                    lineWidth: 1
                });
                drawLandmarks(rt, [t[468], t[473]], {
                    color: "#ffe603",
                    lineWidth: 2
                });
            }
            drawConnectors(rt, l.keypoints, POSE_CONNECTIONS, {
                color: "#00cff7",
                lineWidth: 4
            });
            drawLandmarks(rt, l.keypoints, {
                color: "#ff0364",
                lineWidth: 2
            });
            break;
        case "facemeshMP":
            drawConnectors(rt, l, FACEMESH_TESSELATION, {
                color: "#C0C0C070",
                lineWidth: 1
            });
            drawLandmarks(rt, [l[468], l[473]], {
                color: "#ffe603",
                lineWidth: 2
            });
            break;
    }
    rt.restore();
}
const qt = Os.lerp;
let Rn = null;
async function Sn(l, e) {
    Rn = l;
    let t = E(Ie).firstPerson && E(Ie).freeCamera;
    const n = E(V).user.tracking.Face;
    if (l.length === 0) {
        n.detected = false;
        return;
    }
    E(V).user.tracking.running = true;
    if (!E(de).holistic.enable) {
        Xn(Rn, "facemeshMP");
    }
    let i = hs.solve(l, {
        runtime: e,
        smoothBlink: false,
        video: je,
        blinkSettings: e === "mediapipe" ? [.3, .5] : []
    });
    n.detected = true;
    n.head.width = i.head.width / je.videoWidth;
    n.head.height = i.head.height / je.videoHeight;
    n.head.position.x = i.head.position.x / je.videoWidth;
    n.head.position.y = i.head.position.y / je.videoHeight;
    n.head.x = i.head.x;
    n.head.y = i.head.y * (t ? -1 : 1);
    n.head.z = i.head.z;
    an.user.face.set({
        eye: i.eye,
        mouth: i.mouth,
        head: i.head,
        brow: i.brow,
        pupil: {
            x: Math.abs(i.pupil.x - n.pupil.x) > .1 ? i.pupil.x : n.pupil.x,
            y: Math.abs(i.pupil.y - n.pupil.y) > .1 ? i.pupil.y : n.pupil.y
        }
    });
    n.mouth = {
        x: qt(n.mouth.x, i.mouth.x, .7),
        y: qt(n.mouth.y, i.mouth.y, .7),
        shape: {
            A: qt(n.mouth.shape.A, i.mouth.shape.A, .7),
            E: qt(n.mouth.shape.E, i.mouth.shape.E, .7),
            I: qt(n.mouth.shape.I, i.mouth.shape.I, .7),
            O: qt(n.mouth.shape.O, i.mouth.shape.O, .7),
            U: qt(n.mouth.shape.U, i.mouth.shape.U, .7)
        }
    };
    if (i.eye.r > .5 && i.eye.l > .5) {
        n.pupil.x = qt(n.pupil.x, i.pupil.x, .7);
        n.pupil.y = qt(n.pupil.y, i.pupil.y, .7);
    }
    if (!E(de).face.running) {
        E(de).face.running = true;
        de.set(E(de));
    }
    Qa();
}
const $a = {
    Face: {
        eye: {
            l: 1,
            r: 1
        },
        mouth: {
            x: 0,
            y: 0,
            shape: {
                A: 0,
                E: 0,
                I: 0,
                O: 0,
                U: 0
            }
        },
        head: {
            x: 0,
            y: 0,
            z: 0,
            width: .3,
            height: .6,
            position: {
                x: .5,
                y: .5,
                z: 0
            }
        },
        brow: 0,
        pupil: {
            x: 0,
            y: 0
        }
    },
    Pose: {
        RightUpperArm: {
            x: 0,
            y: 0,
            z: -1.25
        },
        LeftUpperArm: {
            x: 0,
            y: 0,
            z: 1.25
        },
        RightLowerArm: {
            x: 0,
            y: 0,
            z: 0
        },
        LeftLowerArm: {
            x: 0,
            y: 0,
            z: 0
        },
        LeftUpperLeg: {
            x: 0,
            y: 0,
            z: 0
        },
        RightUpperLeg: {
            x: 0,
            y: 0,
            z: 0
        },
        RightLowerLeg: {
            x: 0,
            y: 0,
            z: 0
        },
        LeftLowerLeg: {
            x: 0,
            y: 0,
            z: 0
        },
        LeftHand: {
            x: 0,
            y: 0,
            z: 0
        },
        RightHand: {
            x: 0,
            y: 0,
            z: 0
        },
        Spine: {
            x: 0,
            y: 0,
            z: 0
        },
        Hips: {
            position: {
                x: 0,
                y: 0,
                z: 0
            },
            rotation: {
                x: 0,
                y: 0,
                z: 0
            }
        }
    },
    RightHand: {
        RightWrist: {
            x: -.1315541586772754,
            y: -.07882867526197412,
            z: -1.0417476769631682
        },
        RightRingProximal: {
            x: 0,
            y: 0,
            z: -.13224515812536933
        },
        RightRingIntermediate: {
            x: 0,
            y: 0,
            z: -.4068258603832122
        },
        RightRingDistal: {
            x: 0,
            y: 0,
            z: -.04950943047275125
        },
        RightIndexProximal: {
            x: 0,
            y: 0,
            z: -.24443519921597368
        },
        RightIndexIntermediate: {
            x: 0,
            y: 0,
            z: -.25695509972035424
        },
        RightIndexDistal: {
            x: 0,
            y: 0,
            z: -.06699515077992313
        },
        RightMiddleProximal: {
            x: 0,
            y: 0,
            z: -.09663436414575077
        },
        RightMiddleIntermediate: {
            x: 0,
            y: 0,
            z: -.44945038168605306
        },
        RightMiddleDistal: {
            x: 0,
            y: 0,
            z: -.06660398263230727
        },
        RightThumbProximal: {
            x: -.2349819227955754,
            y: -.33498192279557526,
            z: -.12613225518081256
        },
        RightThumbIntermediate: {
            x: -.2,
            y: -.19959491036565571,
            z: -.013996364546896928
        },
        RightThumbDistal: {
            x: -.2,
            y: .002005509674788991,
            z: .1510027548373945
        },
        RightLittleProximal: {
            x: 0,
            y: 0,
            z: -.09045147788376662
        },
        RightLittleIntermediate: {
            x: 0,
            y: 0,
            z: -.22559206415066682
        },
        RightLittleDistal: {
            x: 0,
            y: 0,
            z: -.10080630460393536
        }
    },
    LeftHand: {
        LeftWrist: {
            x: -.1315541586772754,
            y: -.07882867526197412,
            z: -1.0417476769631682
        },
        LeftRingProximal: {
            x: 0,
            y: 0,
            z: .13224515812536933
        },
        LeftRingIntermediate: {
            x: 0,
            y: 0,
            z: .4068258603832122
        },
        LeftRingDistal: {
            x: 0,
            y: 0,
            z: .04950943047275125
        },
        LeftIndexProximal: {
            x: 0,
            y: 0,
            z: .24443519921597368
        },
        LeftIndexIntermediate: {
            x: 0,
            y: 0,
            z: .25695509972035424
        },
        LeftIndexDistal: {
            x: 0,
            y: 0,
            z: .06699515077992313
        },
        LeftMiddleProximal: {
            x: 0,
            y: 0,
            z: .09663436414575077
        },
        LeftMiddleIntermediate: {
            x: 0,
            y: 0,
            z: .44945038168605306
        },
        LeftMiddleDistal: {
            x: 0,
            y: 0,
            z: .06660398263230727
        },
        LeftThumbProximal: {
            x: -.2349819227955754,
            y: .33498192279557526,
            z: .12613225518081256
        },
        LeftThumbIntermediate: {
            x: -.2,
            y: .2506506391005022,
            z: .05046474221464442
        },
        LeftThumbDistal: {
            x: -.2,
            y: .17880674636490754,
            z: -.06059662681754624
        },
        LeftLittleProximal: {
            x: 0,
            y: 0,
            z: .1748998529912705
        },
        LeftLittleIntermediate: {
            x: 0,
            y: 0,
            z: .4065799037713114
        },
        LeftLittleDistal: {
            x: 0,
            y: 0,
            z: .10080630460393536
        }
    }
};
const er = J(null);
let tr = JSON.parse(JSON.stringify($a));
let sn = 0;
function lr(l) {
    if (!E(de).holistic.running) {
        E(de).holistic.running = true;
        de.set(E(de));
    }
    Xn(l, "holistic");
    if (sn < 20) {
        sn += 1;
        return;
    }
    E(Ot);
    const e = l.faceLandmarks || null;
    let t = l.poseLandmarks || null;
    let n = l.X || l.ea || null;
    const i = {
        Right: l.leftHandLandmarks || null,
        Left: l.rightHandLandmarks || null
    };
    if (e && !E(de).face.enable) {
        Sn(e, "mediapipe");
    }
    ["Right", "Left"].forEach(o => {
        if (i[o] !== null) {
            E(V).user.tracking[o + "Hand"] = Us.solve(i[o], o);
        }
    });
    if (n) {
        er.set(n);
        const o = E(V).user.tracking.Pose;
        const r = wn.solve(n, t, {
            enableLegs: E(Wt)
        });
        o.Hips.rotation = r.Hips.rotation;
        o.Hips.position = r.Hips.worldPosition;
        o.Spine = r.Spine;
        o.RightUpperArm = r.RightUpperArm;
        o.LeftUpperArm = r.LeftUpperArm;
        o.RightLowerArm = r.RightLowerArm;
        o.LeftLowerArm = r.LeftLowerArm;
        o.RightUpperLeg = r.RightUpperLeg;
        o.LeftUpperLeg = r.LeftUpperLeg;
        o.RightLowerLeg = r.RightLowerLeg;
        o.LeftLowerLeg = r.LeftLowerLeg;
        o.RightHand = {
            z: r.RightHand.z,
            y: E(V).user.tracking.RightHand.RightWrist.y,
            x: E(V).user.tracking.RightHand.RightWrist.x
        };
        o.LeftHand = {
            z: r.LeftHand.z,
            y: E(V).user.tracking.LeftHand.LeftWrist.y,
            x: E(V).user.tracking.LeftHand.LeftWrist.x
        };
    }
}
function nr(l) {
    if (!E(de).holistic.running) {
        E(de).holistic.running = true;
        de.set(E(de));
    }
    if (sn < 20) {
        sn += 1;
        return;
    }
    E(Ot);
    let e = l.keypoints || null;
    if (e) {
        let n = {
            width: je.width,
            height: je.height
        };
        e.forEach((i, a) => {
            i.x /= n.width;
            i.y /= n.height;
            i.z = 0;
            i.visibility = i.score;
        });
    }
    Xn(l, "pose", Rn);
    let t = l.keypoints3D || null;
    if (t) {
        t.forEach((a, o) => {
            a.visibility = a.score;
        });
        const n = E(V).user.tracking.Pose;
        const i = wn.solve(t, e, {
            enableLegs: E(Wt)
        });
        n.Hips.rotation = i.Hips.rotation;
        n.Hips.position = i.Hips.worldPosition;
        n.Spine = i.Spine;
        n.RightUpperArm = i.RightUpperArm;
        n.LeftUpperArm = i.LeftUpperArm;
        n.RightLowerArm = i.RightLowerArm;
        n.LeftLowerArm = i.LeftLowerArm;
        n.RightUpperLeg = i.RightUpperLeg;
        n.LeftUpperLeg = i.LeftUpperLeg;
        n.RightLowerLeg = i.RightLowerLeg;
        n.LeftLowerLeg = i.LeftLowerLeg;
        n.RightHand = {
            z: i.RightHand.z,
            y: E(V).user.tracking.RightHand.RightWrist.y,
            x: E(V).user.tracking.RightHand.RightWrist.x
        };
        n.LeftHand = {
            z: i.LeftHand.z,
            y: E(V).user.tracking.LeftHand.LeftWrist.y,
            x: E(V).user.tracking.LeftHand.LeftWrist.x
        };
        tr.Pose = wn.solve(t, e);
    }
}
function ir(l) {
    let e;
    return {
        c() {
            e = L("audio");
            s(e, "class", "remote-audio svelte-937zs6");
            e.controls = true;
            e.autoplay = true;
        },
        m(t, n) {
            R(t, e, n);
        },
        p: G,
        i: G,
        o: G,
        d(t) {
            if (t) {
                S(e);
            }
        }
    };
}
const Ot = J(null);
const Hn = J("");
const ks = J(null);
const Kl = J(null);
const ws = J(null);
const tl = J("default");
const pn = J("0:00");
const Vl = J(false);
const Ls = J(false);
function sr(l, e, t) {
    I(l, Ot, g => t(3, g));
    I(l, Ls, g => t(4, g));
    I(l, Ut, g => t(5, g));
    I(l, Kl, g => t(6, g));
    I(l, V, g => t(7, g));
    l.$$.on_destroy.push(() => G());
    l.$$.on_destroy.push(() => G());
    l.$$.on_destroy.push(() => G());
    tl.subscribe(g => {
        if (g === "connected") {
            if (!nn) {
                Ya();
            }
        } else {
            Za();
        }
    });
    let h;
    let m;
    let _ = vs(6, "0123456789");
    let b = null;
    ks.set(_);
    let w = new js(_, {
        host: "kalidoface-pair.glitch.me",
        config: {
            iceServers: [{
                urls: "stun:stun.stunprotocol.org"
            }, {
                urls: "turn:avaritia.akiroz.life",
                username: "kf",
                credential: "kf"
            }]
        }
    });
    ws.set(w);
    Kl.subscribe(g => {
        if (g) {
            C(g);
        }
    });
    const C = g => {
        console.log(`Connecting to ${g}...`);
        let y = w.connect(g);
        v(y);
        Vl.set(true);
        if (!g) {
            navigator.mediaDevices.getUserMedia({
                video: false,
                audio: true
            }).then(M => {
                h = M;
                w.call(g, M).on("stream", k);
            }).catch(M => {});
        }
    };
    const p = () => {
        z();
        rn.set(null);
        Kl.set(null);
        Ot.set(null);
        Vl.set(false);
        tl.set("default");
    };
    const z = () => {
        if (h) {
            h.getAudioTracks().forEach(g => g.stop());
        }
        if (m) {
            m.getAudioTracks().forEach(g => g.stop());
        }
    };
    const k = g => {
        document.querySelector("audio").srcObject = g;
        document.querySelector("audio").play();
    };
    const v = (g, y) => {
        b = g;
        Ot.set(b);
        tl.set(g ? "connected" : "connecting");
        g.on("data", M => {
            if (M.type === "modelObj") {
                rn.set(JSON.parse(atob(M.res)));
                tl.set("connected");
            }
            let N = g[g ? "user" : "friend"];
            let O = an[g ? "user" : "friend"];
            if (M.type === "face" || M.type === "holistic") {
                N.detected = M.detected;
                N.tracking.Face.head.x = M.headX;
                N.tracking.Face.head.y = M.headY;
                N.tracking.Face.head.z = M.headZ;
                N.tracking.Face.mouth = {
                    x: M.mouthX,
                    y: M.mouthY,
                    shape: {
                        A: M.mouthA,
                        E: M.mouthE,
                        I: M.mouthI,
                        O: M.mouthO,
                        U: M.mouthU
                    }
                };
                N.tracking.Face.pupil = {
                    x: M.pupilX,
                    y: M.pupilY
                };
                O.face.set({
                    eye: {
                        l: M.eyeL,
                        r: M.eyeR
                    },
                    mouth: {
                        x: M.mouthX,
                        y: M.mouthY,
                        shape: {
                            A: M.mouthA,
                            E: M.mouthE,
                            I: M.mouthI,
                            O: M.mouthO,
                            U: M.mouthU
                        }
                    },
                    head: {
                        x: M.headX,
                        y: M.headY,
                        z: M.headZ,
                        width: .3,
                        height: .6,
                        position: {
                            x: .5,
                            y: .5,
                            z: 0
                        }
                    },
                    brow: M.brow,
                    pupil: {
                        x: M.pupilX,
                        y: M.pupilY
                    }
                });
                N.tracking.Pose.enable = true;
            }
            if (M.type === "holistic") {
                let A = {};
                Ae(A, "RightUpperArm", M);
                Ae(A, "LeftUpperArm", M);
                Ae(A, "RightLowerArm", M);
                Ae(A, "LeftLowerArm", M);
                Ae(A, "RightUpperLeg", M);
                Ae(A, "LeftUpperLeg", M);
                Ae(A, "RightLowerLeg", M);
                Ae(A, "LeftLowerLeg", M);
                Ae(A, "LeftHand", M);
                Ae(A, "RightHand", M);
                Ae(A, "Spine", M);
                A.Hips = {
                    position: {
                        x: M.HipsPositionX,
                        y: M.HipsPositionY,
                        z: M.HipsPositionZ
                    },
                    rotation: {
                        x: M.HipsRotationX,
                        y: M.HipsRotationY,
                        z: M.HipsRotationZ
                    }
                };
                N.tracking.Pose = A;
                let D = {
                    Left: {},
                    Right: {}
                };
                Object.keys(D).forEach(H => {
                    Ae(D[H], H + "Wrist", M);
                    Ae(D[H], H + "RingProximal", M);
                    Ae(D[H], H + "RingIntermediate", M);
                    Ae(D[H], H + "RingDistal", M);
                    Ae(D[H], H + "IndexProximal", M);
                    Ae(D[H], H + "IndexIntermediate", M);
                    Ae(D[H], H + "IndexDistal", M);
                    Ae(D[H], H + "MiddleProximal", M);
                    Ae(D[H], H + "MiddleIntermediate", M);
                    Ae(D[H], H + "MiddleDistal", M);
                    Ae(D[H], H + "ThumbProximal", M);
                    Ae(D[H], H + "ThumbIntermediate", M);
                    Ae(D[H], H + "ThumbDistal", M);
                    Ae(D[H], H + "LittleProximal", M);
                    Ae(D[H], H + "LittleIntermediate", M);
                    Ae(D[H], H + "LittleDistal", M);
                    N.tracking[H + "Hand"] = D[H];
                });
            }
        });
        g.on("open", () => {
            g.send("hello!");
            if (g) {
                g.send({
                    res: g,
                    type: "id",
                    remoteMode: g
                });
            }
            if (typeof g == "object" && !g) {
                g.data = Dn(g);
                let N = btoa(JSON.stringify(g));
                g.send({
                    res: N,
                    type: "modelObj"
                });
            }
        });
        g.on("close", () => {
            p();
        });
    };
    w.on("open", g => {
        console.log("My Chat ID is: " + g);
        tl.set("default");
    });
    w.on("error", g => {
        if (g.message.includes("Could not connect to peer")) {
            Ll.set({
                type: "error",
                text: "Could not connect to Chat ID"
            });
            p();
        }
        console.error(g);
    });
    w.on("disconnected", g => {
        p();
        tl.set("server-disconnect");
    });
    w.on("close", g => {});
    w.on("connection", g => {
        v(g);
        Vl.set(false);
        console.log("being connect to");
        Hn.set(g.peer);
    });
    w.on("call", g => {
        if (!g) {
            navigator.mediaDevices.getUserMedia({
                video: false,
                audio: true
            }).then(y => {
                m = y;
                g.answer(y);
                g.on("stream", k);
            }).catch(y => {
                console.error("Failed to get local stream", y);
            });
        }
    });
    Ut.subscribe(g => {
        if (g && !g && typeof g == "object") {
            g.data = Dn(g);
            let M = btoa(JSON.stringify(g));
            g.send({
                res: M,
                type: "modelObj"
            });
        }
    });
    return [];
}
class ar extends pe {
    constructor(e) {
        super();
        _e(this, e, sr, ir, me, {});
    }
}
const de = J({
    face: {
        running: false,
        enable: !(window.innerWidth > 600),
        enableWink: true,
        model: {
            maxContinuousChecks: 5,
            detectionConfidence: .9,
            maxFaces: 1,
            iouThreshold: .3,
            scoreThreshold: .85
        },
        predict: {
            input: null,
            returnTensors: false,
            flipHorizontal: false,
            predictIrises: true
        }
    },
    holistic: {
        running: false,
        enable: window.innerWidth > 600,
        model: {
            modelComplexity: 1,
            smoothLandmarks: true,
            minDetectionConfidence: .7,
            minTrackingConfidence: .7,
            refineFaceLandmarks: true
        },
        predict: {
            flipHorizontal: true
        }
    }
});
$e(de, "options", E(de));
et(de, "options");
function rr(l, e, t) {
    I(l, de, p => t(3, p));
    I(l, V, p => t(8, p));
    I(l, Jt, p => t(4, p));
    I(l, wl, p => t(5, p));
    I(l, Il, p => t(6, p));
    l.$$.on_destroy.push(() => G());
    let c;
    let f;
    let h;
    let m;
    async function _() {
        if (bl === "disabled") {
            await si("webgl");
            t(1, f = await Ws(Ns.mediapipeFacemesh, p.face.model));
        } else {
            t(1, f = new FaceMesh({
                locateFile: p => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@0.4.1633559619/${p}`
            }));
            f.setOptions({
                maxNumFaces: 1,
                refineLandmarks: true,
                minDetectionConfidence: .5,
                minTrackingConfidence: .5
            });
            f.onResults(p => {
                if (p.multiFaceLandmarks.length > 0) {
                    Sn(p.multiFaceLandmarks[0], "mediapipe");
                }
            });
        }
    }
    _();
    async function b() {
        await si("webgl");
        h = Zs.BlazePose;
        t(2, m = await qs(h, {
            runtime: "tfjs",
            modelType: "lite",
            enableSmoothing: true
        }));
        console.log(Gs, h, m);
    }
    async function w() {
        t(0, c = new Holistic({
            locateFile: p => `https://cdn.jsdelivr.net/npm/@mediapipe/holistic@0.5.1635989137/${p}`
        }));
        c.setOptions(p.holistic.model);
        c.onResults(lr);
    }
    if (bl) {
        b();
    } else {
        w();
    }
    async function C() {
        if (!p || !p || p) {
            Ce(V, p.user.detected = false, p);
            Ce(de, p.face.running = false, p);
            Ce(de, p.holistic.running = false, p);
            return;
        } else {
            if (p.face.enable) {
                if (bl === "disabled") {
                    const p = await f.estimateFaces({
                        input: je,
                        returnTensors: p.face.predict.returnTensors,
                        flipHorizontal: p.face.predict.flipHorizontal,
                        predictIrises: p.face.predict.predictIrises
                    });
                    if (p.length > 0) {
                        Sn(p[0].scaledMesh, "tfjs");
                    }
                } else {
                    await f.send({
                        image: je
                    });
                }
            }
            if (p.holistic.enable) {
                if (bl) {
                    await f.send({
                        image: je
                    });
                    const p = await m.estimatePoses(je, {
                        flipHorizontal: true
                    });
                    if (p.length > 0) {
                        nr(p[0]);
                    }
                } else {
                    await c.send({
                        image: je
                    });
                }
            }
            Ce(V, p.user.detected = true, p);
            requestAnimationFrame(C);
        }
    }
    l.$$.update = () => {
        if (l.$$.dirty & 119 && p && p && (c || m) && f && !p) {
            C();
        }
        if (l.$$.dirty & 8) {
            Ce(V, p.user.tracking.Face.enable = p.face.enable, p);
            Ce(V, p.user.tracking.Pose.enable = p.holistic.enable, p);
        }
    };
    return [c, f, m, p, p, p, p];
}
class or extends pe {
    constructor(e) {
        super();
        _e(this, e, rr, null, me, {});
    }
}
let an = {
    user: {
        head: null,
        face: null,
        pose: null,
        hands: {}
    },
    friend: {
        head: null,
        face: null,
        pose: null,
        hands: {}
    }
};
const ur = ["user", "friend"];
ur.forEach(l => {
    an[l].face = Ys(JSON.parse(JSON.stringify($l.Face)), {
        stiffness: .15,
        damping: .7,
        precision: 1e-4
    });
    an[l].face.subscribe(e => {
        if (e && V) {
            const t = E(V)[l].tracking.Face;
            if (e.head.x >= -.4 && e.head.x <= .4 && e.head.y >= -.6 && e.head.y <= .6) {
                t.eye = hs.stabilizeBlink(e.eye, e.head.y, {
                    enableWink: E(de).face.enableWink,
                    maxRot: .5
                });
            }
        }
    });
});
let cl = ["#73a9ff", "#ff9785", "#ff6385", "#ffd75e", "#97ff94", "#d791ff", "#5ce9ff"];
const Cs = () => {
    let l = cl[Math.floor(Math.random() * cl.length)];
    let e = [];
    E(vt).forEach(t => {
        if (t.color) {
            e.push(t.color);
        }
    });
    if (e.length < cl.length) {
        do {
            l = cl[Math.floor(Math.random() * cl.length)];
        } while (e.includes(l));
    } else {
        do {
            l = cl[Math.floor(Math.random() * cl.length)];
        } while (E(vt)[0].color === l);
    }
    return l;
};
const cr = l => {
    $e(Ut, "userModel", {
        type: Yt[0].type,
        name: Yt[0].name,
        uploaded: Yt[0].uploaded,
        url: Yt[0].url
    });
    et(Ut, "userModel");
};
let vt = J([]);
let Yt = [{
    id: 3,
    name: "Ashtra",
    type: "url",
    url: "https://yeemachine.github.io/k2021/vrm/Ashtra.vrm",
    icon: "https://yeemachine.github.io/k2021/vrm/Ashtra.png",
    source: "https://hub.vroid.com/en/characters/6617701103638326208/models/8892157442595230149",
    author: "아기쥐작업소",
    color: null
}, {
    id: 2,
    name: "Mono Cat",
    type: "url",
    url: "https://yeemachine.github.io/k2021/vrm/MonoCat.vrm",
    icon: "https://yeemachine.github.io/k2021/vrm/MonoCat.png",
    source: "https://hub.vroid.com/en/characters/6063135800223582444/models/1998385702537276695",
    author: "凪",
    color: null
}, {
    id: 4,
    name: "VAL",
    type: "url",
    url: "https://yeemachine.github.io/k2021/vrm/VAL.vrm",
    icon: "https://yeemachine.github.io/k2021/vrm/VAL.png",
    source: "https://booth.pm/en/items/3093190",
    author: "とりんご",
    color: null
}, {
    id: 0,
    name: "Sample A",
    type: "url",
    url: "https://yeemachine.github.io/k2021/vrm/SampleA.vrm",
    icon: "https://yeemachine.github.io/k2021/vrm/SampleA.png",
    source: "https://hub.vroid.com/en/characters/2843975675147313744/models/5644550979324015604",
    author: "Vroid Project",
    color: null
}, {
    id: 1,
    name: "Alicia Solid",
    type: "url",
    url: "https://yeemachine.github.io/k2021/vrm/AliciaSolid.vrm",
    icon: "https://yeemachine.github.io/k2021/vrm/AliciaSolid.png",
    source: "https://3d.nicovideo.jp/alicia/",
    author: "黒星紅白 & 雨刻",
    color: null
}, {
    id: 5,
    name: "Sample B",
    type: "url",
    url: "https://yeemachine.github.io/k2021/vrm/SampleB.vrm",
    icon: "https://yeemachine.github.io/k2021/vrm/SampleB.png",
    source: "https://hub.vroid.com/en/characters/7939147878897061040/models/2292219474373673889",
    author: "Vroid Project",
    color: null
}, {
    id: 6,
    name: "Sample C",
    type: "url",
    url: "https://yeemachine.github.io/k2021/vrm/SampleC.vrm",
    icon: "https://yeemachine.github.io/k2021/vrm/SampleC.png",
    source: "https://hub.vroid.com/en/characters/1248981995540129234/models/8640547963669442173",
    author: "Vroid Project",
    color: null
}, {
    id: 7,
    name: "緑子ちゃん",
    type: "url",
    url: "https://yeemachine.github.io/k2021/vrm/Midori.vrm",
    icon: "https://yeemachine.github.io/k2021/vrm/Midori.png",
    source: "https://hub.vroid.com/en/characters/3846600528849029990/models/7104226743214656101",
    author: "チェリ藻",
    color: null
}, {
    id: 8,
    name: "9",
    type: "url",
    url: "https://yeemachine.github.io/k2021/vrm/9.vrm",
    icon: "https://yeemachine.github.io/k2021/vrm/9.png",
    source: "https://hub.vroid.com/en/characters/7768535476794077163/models/8558814239275634162",
    author: "井村",
    color: null
}];
$e(vt, "modelList", E(vt), cr);
et(vt, "modelList");
const Ut = J(null);
const fr = J(0);
const Dn = l => {
    let e = Yt[0].url;
    if (l.type === "blob" && E(vt).length > 0) {
        E(vt).forEach(t => {
            if (l.url === t.url && t.data) {
                e = t.data;
            }
        });
    }
    if (l.type === "url") {
        e = l.url;
    }
    return e;
};
const rn = J(null);
const zs = (l, e, t = "user", n = false, i = false) => {
    if (i) {
        e = JSON.parse(JSON.stringify($l));
    }
    Kn(l, e.Face, e.Pose, false, n);
    Ps(l, e.Face, n);
    Vn(l, e.Pose, e.Face, false, n);
    Ms(l, e.Face, e.Pose, false, n);
    fn(l, e.Pose, e.Face, "Right", false, n);
    fn(l, e.Pose, e.Face, "Left", false, n);
    un(l, e.Pose, "Right", false, n);
    un(l, e.Pose, "Left", false, n);
    cn(l, e.RightHand, e.Pose, "Right", false, n);
    cn(l, e.LeftHand, e.Pose, "Left", false, n);
};
const Ci = (l, e = .01) => {
    let t = E(V)[l];
    let n = t.model;
    if (!n) {
        return;
    }
    let i = E(Ie).freeCamera && E(Ie).firstPerson && l === "user";
    if (E(Ie).freeCamera || t.detected) {
        Vn(n, t.tracking.Pose, t.tracking.Face, i);
        Kn(n, t.tracking.Face, t.tracking.Pose, i);
        Ps(n, t.tracking.Face);
    }
    if (n.scene.position.x !== t.position.x) {
        n.scene.position.x = t.position.x;
    }
    if (n.scene.position.z !== t.position.z) {
        n.scene.position.z = t.position.z;
    }
    if (t.detected) {
        Ms(n, t.tracking.Face, t.tracking.Pose, i);
        fn(n, t.tracking.Pose, t.tracking.Face, "Right", i);
        fn(n, t.tracking.Pose, t.tracking.Face, "Left", i);
        if (t.tracking.Pose.enable) {
            un(n, t.tracking.Pose, "Right", i);
            un(n, t.tracking.Pose, "Left", i);
            cn(n, t.tracking.RightHand, t.tracking.Pose, "Right", i);
            cn(n, t.tracking.LeftHand, t.tracking.Pose, "Left", i);
        }
    }
    n.update(e);
};
const Al = l => {
    if (!!l) {
        if (E(Ie).firstPerson && l.isUser) {
            It.layers.enable(l.firstPerson.firstPersonOnlyLayer);
            It.layers.disable(l.firstPerson.thirdPersonOnlyLayer);
        } else {
            It.layers.disable(l.firstPerson.firstPersonOnlyLayer);
            It.layers.enable(l.firstPerson.thirdPersonOnlyLayer);
        }
    }
};
function dr(l, e, t) {
    I(l, V, z => t(8, z));
    I(l, Ls, z => t(3, z));
    I(l, Vl, z => t(4, z));
    I(l, Ot, z => t(5, z));
    I(l, Ie, z => t(6, z));
    I(l, ol, z => t(9, z));
    I(l, vt, z => t(10, z));
    I(l, rn, z => t(11, z));
    l.$$.on_destroy.push(() => G());
    l.$$.on_destroy.push(() => G());
    let {
        scene: _
    } = e;
    let {
        group: b
    } = e;
    let {
        renderer: w
    } = e;
    Nt(async () => {
        Ut.subscribe(z => {
            if (z) {
                p(z.user, Dn(z), z);
            }
        });
        rn.subscribe(z => {
            if (z) {
                let k = z.type === "url" ? z.url : z.data;
                p(z.friend, k, z);
            } else if (z.friend.model) {
                b.remove(z.friend.model.scene);
                z.friend.model.dispose();
            }
        });
    });
    const C = new Xs();
    C.crossOrigin = "anonymous";
    function p(z, k, v) {
        C.crossOrigin = "anonymous";
        C.load(k, g => {
            ai.removeUnnecessaryJoints(g.scene);
            Js.from(g).then(y => {
                Wl();
                if (z.model) {
                    b.remove(z.model.scene);
                    z.model.dispose();
                    z.model = null;
                }
                if (z.id === "friend" && !z) {
                    return;
                }
                y.id = z.id;
                y.isUser = z.id === "user";
                y.name = v.name || y.meta.title;
                y.firstPerson.setup({
                    firstPersonOnlyLayer: z.id === "user" ? 9 : 11,
                    thirdPersonOnlyLayer: z.id === "user" ? 10 : 12
                });
                jt.layers.disable(y.firstPerson.firstPersonOnlyLayer);
                jt.layers.enable(y.firstPerson.thirdPersonOnlyLayer);
                Al(y);
                if (z.id === "user") {
                    _t.position.setFromMatrixPosition(y.firstPerson.firstPersonBone.matrixWorld);
                    It.position.set(0, 0, 1);
                    It.lookAt(_t.position);
                    Dt.target.y = _t.position.y;
                    Dt.target.y += .025;
                    Dt.update();
                    jt.position.y = _t.position.y + .1;
                    y.pivotPoint = {
                        x: _t.position.x,
                        y: _t.position.y
                    };
                    y.scene.rotation.order = "YXZ";
                }
                y.scene.position.x = z.position.x;
                b.add(y.scene);
                y.humanoid.getBoneNode(Je.HumanoidBoneName.Hips).rotation.y = Math.PI;
                y.humanoid.getBoneNode(Je.HumanoidBoneName.Hips).rotation.order = "YXZ";
                y.selection = [];
                let M = [];
                let N = [];
                y.scene.traverse(function (O) {
                    if (O.isMesh) {
                        O.castShadow = true;
                        y.selection.push(O);
                    }
                });
                y.scene.children.forEach(O => {
                    if (!["blendshape", "root", "face", "hair", "morph", "armature", "secondary", "erase", "mesh"].some(D => O.name.toLowerCase().includes(D))) {
                        if (O.name.toLowerCase().includes("body")) {
                            if (O.type === "Group") {
                                let D = ["erase"];
                                O.children.forEach((H, B) => {
                                    if (B > 3 && !D.some(T => H.name.toLowerCase().includes(T))) {
                                        N.push(H);
                                    }
                                });
                                return;
                            }
                        } else {
                            M.push(O);
                        }
                    }
                });
                y.extractedParts = [...M, ...N];
                z.model = y;
                V.set(z);
                zs(y, z.tracking, z.id, true);
                if (z.id === "user" && v.uploaded) {
                    let O = false;
                    let A = null;
                    z.forEach((D, H) => {
                        if (D.url === v.url) {
                            O = true;
                            if (!D.icon) {
                                A = D;
                            }
                        }
                    });
                    if ((A || !O) && typeof OffscreenCanvas != "undefined") {
                        try {
                            ai.extractThumbnailBlob(w, y, 256).then(D => {
                                var H = new FileReader();
                                H.onload = function (B) {
                                    if (!O) {
                                        vt.set([{
                                            name: y.name,
                                            type: v.type,
                                            url: v.url,
                                            data: v.type === "blob" ? k : null,
                                            uploaded: v.uploaded,
                                            icon: B.target.result,
                                            color: null
                                        }, ...z]);
                                        return;
                                    }
                                    A.icon = B.target.result;
                                    A.color = null;
                                    vt.set(z);
                                };
                                H.readAsDataURL(D);
                            });
                        } catch {}
                    } else if (!O) {
                        vt.set([{
                            name: y.name,
                            type: "url",
                            url: k,
                            date: v.date,
                            icon: null,
                            color: Cs()
                        }, ...z]);
                    }
                }
            });
            if (!z) {
                setTimeout(() => {
                    ol.set(true);
                    Cn.set(1);
                }, 1e3);
            }
        }, g => fr.set(g.loaded / g.total), g => {
            console.error(g);
            if (!z) {
                setTimeout(() => {
                    ol.set(true);
                    Cn.set(1);
                }, 1e3);
            }
        });
    }
    new Ks(10, 10);
    new Vs(5);
    l.$$set = z => {
        if ("scene" in z) {
            t(0, _ = z.scene);
        }
        if ("group" in z) {
            t(1, b = z.group);
        }
        if ("renderer" in z) {
            t(2, w = z.renderer);
        }
    };
    l.$$.update = () => {
        if (l.$$.dirty & 120) {
            if (z && z.firstPerson && z.freeCamera && !z) {
                Ce(V, z.user.position.x = 0, z);
                Ce(V, z.friend.position.x = 0, z);
                Ce(V, z.friend.position.z = -.5, z);
            } else if (z && z && !z) {
                Ce(V, z.user.position.x = .2, z);
                Ce(V, z.friend.position.z = 0, z);
                Ce(V, z.friend.position.x = -.2, z);
            } else if (z && !z && !z) {
                Ce(V, z.user.position.x = -.2, z);
                Ce(V, z.friend.position.x = .2, z);
                Ce(V, z.friend.position.z = 0, z);
            } else {
                Ce(V, z.user.position.x = 0, z);
                Ce(V, z.friend.position.x = 0, z);
                Ce(V, z.friend.position.z = 0, z);
            }
        }
    };
    return [_, b, w, z, z, z, z];
}
class mr extends pe {
    constructor(e) {
        super();
        _e(this, e, dr, null, me, {
            scene: 0,
            group: 1,
            renderer: 2
        });
    }
}
let Et = new hn();
let on = new hn();
const ql = J(false);
const Bl = J(0);
const xl = J(0);
const In = J("#ffffff");
const hr = l => {
    if (!Et || !E(V).user.model) {
        return;
    }
    let e = E(V).user.model.pivotPoint;
    Et.rotation.y -= .03;
    let t = Math.sin(l.getElapsedTime()) * .4;
    Et.rotation.x = t;
    if (e.x !== Et.position.x || e.y !== Et.position.y) {
        Et.position.x = e.x;
        Et.position.y = e.y;
        on.position.copy(Et.position);
    }
    on.rotation.copy(Et.rotation);
};
function gr(l, e, t) {
    I(l, V, B => t(9, B));
    I(l, In, B => t(10, B));
    I(l, xl, B => t(11, B));
    I(l, Bl, B => t(12, B));
    I(l, ql, B => t(13, B));
    I(l, Kt, B => t(14, B));
    l.$$.on_destroy.push(() => G());
    l.$$.on_destroy.push(() => G());
    l.$$.on_destroy.push(() => G());
    l.$$.on_destroy.push(() => G());
    let {
        scene: _
    } = e;
    let {
        camera: b
    } = e;
    let {
        renderer: w
    } = e;
    let {
        composer: C
    } = e;
    let p = null;
    let z = null;
    let k = null;
    let v = null;
    let g = null;
    let y = null;
    const M = new Qs(16769969);
    M.intensity = .8;
    M.shadow.radius = 8;
    M.position.set(0, 2, 3.25);
    M.castShadow = true;
    M.shadow.bias = 125e-7;
    M.shadow.mapSize.width = 2048;
    M.shadow.mapSize.height = 2048;
    M.shadow.camera.near = .5;
    M.shadow.camera.far = 500;
    const N = new ds({
        color: 16768426,
        transparent: true,
        fog: false
    });
    new fs(.05, 32, 32);
    const O = new $s(.05, .05, .05);
    const A = new Fn(O, N);
    A.position.copy(M.position);
    A.position.y -= 2;
    A.position.z -= 3;
    A.rotation.x = Math.PI / 2;
    A.updateMatrix();
    A.frustumCulled = false;
    A.matrixAutoUpdate = false;
    Et.position.set(0, 1.25, 0);
    Et.add(A, M);
    on.add(M);
    _.add(on);
    function D() {
        const B = new Map();
        const T = new ea();
        const q = new ta(T);
        return new Promise((X, se) => {
            T.onLoad = () => X(B);
            T.onError = se;
            q.load(([Y, ze]) => {
                B.set("smaa-search", Y);
                B.set("smaa-area", ze);
            });
        });
    }
    function H(B) {
        const T = new la(B.get("smaa-search"), B.get("smaa-area"), na.HIGH, ia.COLOR);
        T.edgeDetectionMaterial.setEdgeDetectionThreshold(.02);
        T.edgeDetectionMaterial.setPredicationMode(sa.DEPTH);
        T.edgeDetectionMaterial.setPredicationThreshold(.002);
        T.edgeDetectionMaterial.setPredicationScale(1);
        t(6, k = new aa(b, A, {
            height: 480,
            kernelSize: Gl.SMALL,
            density: .96,
            decay: .92,
            weight: .7,
            exposure: .54,
            samples: 60,
            clampMax: 1
        }));
        t(7, g = new ra(B * 35));
        t(8, y = new oa(_, b, {
            blendFunction: ua.SCREEN,
            edgeStrength: 1,
            pulseSpeed: 0,
            visibleEdgeColor: 16777215,
            hiddenEdgeColor: 16777215,
            height: w.height,
            kernelSize: Gl.MEDIUM,
            blur: true,
            xRay: false
        }));
        t(5, z = new ca(_, b));
        t(4, p = new ri(b, k, g, y));
        v = new ri(b, T);
        t(4, p.needsDepthTexture = false, p);
        t(4, p.renderToScreen = true, p);
        C.addPass(z);
        C.addPass(v);
        C.addPass(p);
    }
    D().then(H).catch(B => console.error(B));
    l.$$set = B => {
        if ("scene" in B) {
            t(0, _ = B.scene);
        }
        if ("camera" in B) {
            t(1, b = B.camera);
        }
        if ("renderer" in B) {
            t(2, w = B.renderer);
        }
        if ("composer" in B) {
            t(3, C = B.composer);
        }
    };
    l.$$.update = () => {
        if (l.$$.dirty & 8192) {
            M.visible = B;
        }
        if (l.$$.dirty & 16384) {
            M.color = new nl(B);
        }
        if (l.$$.dirty & 8192) {
            A.visible = B;
        }
        if (l.$$.dirty & 370 && z && p && k && y && b) {
            t(5, z.camera = b, z);
            t(4, p.camera = b, p);
            t(6, k.camera = b, k);
            v.camera = b;
            t(8, y.camera = b, y);
        }
        if (l.$$.dirty & 4224 && g) {
            g.setGranularity(B * 35);
        }
        if (l.$$.dirty & 3840 && y) {
            if (B > 0 && B.user.model) {
                let B = Object.keys(Gl);
                t(8, y.blurPass.kernelSize = Gl[B[Math.floor(B * (B.length - 1))]], y);
                y.uniforms.get("edgeStrength").value = B * 264;
                y.uniforms.get("visibleEdgeColor").value.set(B);
                y.selection.set(B.user.model.selection);
            } else {
                y.selection.clear();
            }
        }
    };
    return [_, b, w, C, p, z, k, g, y, B, B, B, B, B, B];
}
class pr extends pe {
    constructor(e) {
        super();
        _e(this, e, gr, null, me, {
            scene: 0,
            camera: 1,
            renderer: 2,
            composer: 3
        });
    }
}
const zi = new fa();
let Ke = 0;
function _r(l, e, t) {
    I(l, Ft, _ => t(3, _));
    I(l, Qn, _ => t(4, _));
    I(l, ql, _ => t(5, _));
    I(l, xl, _ => t(6, _));
    I(l, Bl, _ => t(7, _));
    I(l, Jt, _ => t(8, _));
    let {
        scene: c
    } = e;
    let {
        renderer: f
    } = e;
    let {
        composer: h
    } = e;
    function m() {
        requestAnimationFrame(m);
        Ke = zi.getDelta();
        if (!_) {
            Ci("user", Ke);
            Ci("friend", Ke);
            Pr();
            if (h && (_ || _ > 0 || _ > 0)) {
                h.render(Ke);
                if (_) {
                    hr(zi);
                }
            } else {
                f.render(c, _);
            }
            if (_ && _.sea) {
                Ha();
            }
        }
    }
    m();
    l.$$set = _ => {
        if ("scene" in _) {
            t(0, c = _.scene);
        }
        if ("renderer" in _) {
            t(1, f = _.renderer);
        }
        if ("composer" in _) {
            t(2, h = _.composer);
        }
    };
    return [c, f, h];
}
class vr extends pe {
    constructor(e) {
        super();
        _e(this, e, _r, null, me, {
            scene: 0,
            renderer: 1,
            composer: 2
        });
    }
}
const Wt = J(true);
const Tt = J(true);
const Jn = J(true);
$e(Wt, "allowLegs", E(Wt));
et(Wt, "allowLegs");
$e(Tt, "allowRoom", E(Tt));
et(Tt, "allowRoom");
$e(Tt, "allowSmile", E(Tt));
et(Tt, "allowSmile");
const zt = (l, e = {
    x: 0,
    y: 0,
    z: 0
}, t = .3) => {
    if (t === 1) {
        l.rotation.x = e.x;
        l.rotation.y = e.y;
        l.rotation.z = e.z;
        return;
    }
    let n = new gn().setFromEuler(new Tn(e.x, e.y, e.z));
    let i = n.clone().invert().multiply(l.quaternion);
    let a = .6 + Math.max(Math.min(Math.abs((i.x + i.y + i.z) * 40), 1), 0) * .4;
    l.quaternion.slerp(n, Math.max(Math.min(t * a, 1), 0));
};
const Kn = (l, e, t, n = false, i = false) => {
    if (!e || !t) {
        return;
    }
    let a = n ? -1 : 1;
    const o = l.humanoid.getBoneNode(Je.HumanoidBoneName.Neck);
    let r = E(Ie).freeCamera && !E(Ie).firstPerson ? Math.max(Math.min(-_t.rotation.x, .4), -.4) : 0;
    let u = E(de).holistic.enable ? Math.max(Math.min(t.Hips.rotation.y, Math.PI), -Math.PI) : 0;
    if (o) {
        E(de).holistic.enable;
        zt(o, {
            y: Math.max(Math.min(e.head.y * 1 - u, .8), -.8) * a,
            x: Math.max(Math.min(e.head.x * 1 + r, .8), -.8),
            z: Math.max(Math.min(e.head.z * 1 * .8, .3), -.3) * a
        }, i ? 1 : .04 + Ke * 4);
    }
};
const Ms = (l, e, t, n = false, i = false) => {
    if (!e || !t) {
        return;
    }
    let a = n ? -1 : 1;
    let o = l.humanoid.getBoneNode(Je.HumanoidBoneName.UpperChest);
    const r = l.humanoid.getBoneNode(Je.HumanoidBoneName.Chest);
    const u = l.humanoid.getBoneNode(Je.HumanoidBoneName.Spine);
    if (r) {
        zt(r, {
            x: Math.max(Math.min(e.head.x * .05, .3), -.3),
            z: E(de).holistic.enable ? Math.max(Math.min(t.Spine.z * .05, .7), -.7) * a : Math.max(Math.min(e.head.z * .05, .1), -.1) * a,
            y: E(de).holistic.enable ? Math.max(Math.min(t.Spine.y * .05 * .2, .7), -.7) : Math.max(Math.min(e.head.y * .05 * 2, .3), -.3)
        }, i ? 1 : .04 + Ke * 2);
    }
    if (u) {
        zt(u, {
            x: Math.max(Math.min(e.head.x * .05, .3), -.3),
            z: E(de).holistic.enable ? Math.max(Math.min(t.Spine.z * .05, .7), -.7) * a : Math.max(Math.min(e.head.z * .05, .3), -.3) * a,
            y: E(de).holistic.enable ? Math.max(Math.min(t.Spine.y * .05 * .2, .4), -.4) : Math.max(Math.min(e.head.y * .05 * 2, .1), -.1)
        }, i ? 1 : .04 + Ke * 2);
    }
    if (o) {
        zt(o, {
            x: Math.max(Math.min(e.head.x * .05, .3), -.3),
            z: E(de).holistic.enable ? Math.max(Math.min(t.Spine.z * .05, .7), -.7) * a : Math.max(Math.min(e.head.z * .05, .1), -.1) * a,
            y: E(de).holistic.enable ? Math.max(Math.min(t.Spine.y * .05 * .2, .4), -.4) : Math.max(Math.min(e.head.y * .05 * 2, .3), -.3)
        }, i ? 1 : .04 + Ke * 2);
    }
};
const Ps = (l, e, t = false) => {
    if (!e) {
        return;
    }
    const n = l.blendShapeProxy;
    const i = Je.BlendShapePresetName;
    const a = (Math.max(Math.min(e.mouth.x - .4, .5), 0) - 0) / 0.5;
    e.mouth.y;
    let o = {
        l: e.eye.l,
        r: e.eye.r
    };
    let r = 0;
    if (E(Jn)) {
        r = Math.max(Math.min(a * 1, 1), 0);
        r *= o.l !== o.r ? 0 : 1 - (Math.max(Math.min(o.l, .8), .2) - .2) / 0.6000000000000001;
    }
    if (o.l !== o.r) {
        o.l = Math.max(Math.min(1 - o.l, 1), 0);
        o.r = Math.max(Math.min(1 - o.r, 1), 0);
        r = 0;
        n.setValue(i.Blink, 0);
        n.setValue(i.BlinkL, o.l);
        n.setValue(i.BlinkR, o.r);
    } else {
        const c = Math.max(Math.min(1 - o.l, 1), 0);
        n.setValue(i.Blink, c - r);
        n.setValue(i.BlinkL, 0);
        n.setValue(i.BlinkR, 0);
    }
    n.setValue(i.I, e.mouth.shape.I - r);
    n.setValue(i.A, e.mouth.shape.A * .8 - r);
    n.setValue(i.E, e.mouth.shape.E * .8 - r);
    n.setValue(i.O, e.mouth.shape.O * .8 - r);
    n.setValue(i.U, e.mouth.shape.U * .8 - r);
    n.setValue(i.Joy, r);
    let u;
    u = new Tn(e.pupil.y, e.pupil.x, 0, "XYZ");
    l.lookAt.applyer.lookAt(u);
};
const un = (l, e, t = "Right", n = false, i = false) => {
    if (!e) {
        return;
    }
    let a = t === "Right" && n ? "Left" : t === "Left" && n ? "Right" : t;
    let o = n ? -1 : 1;
    const r = l.humanoid.getBoneNode(Je.HumanoidBoneName[a + "UpperArm"]);
    const u = l.humanoid.getBoneNode(Je.HumanoidBoneName[a + "LowerArm"]);
    const c = l.humanoid.getBoneNode(Je.HumanoidBoneName[a + "Hand"]);
    zt(r, {
        z: e[t + "UpperArm"].z * o,
        y: e[t + "UpperArm"].y * o,
        x: e[t + "UpperArm"].x
    }, i ? 1 : .04 + Ke * 4);
    zt(u, {
        z: e[t + "LowerArm"].z * o,
        y: e[t + "LowerArm"].y * o,
        x: e[t + "LowerArm"].x
    }, i ? 1 : .04 + Ke * 4);
    zt(c, {
        z: e[t + "Hand"].z * o,
        y: e[t + "Hand"].y * o,
        x: e[t + "Hand"].x
    }, i ? 1 : .04 + Ke * 6);
};
const cn = (l, e, t, n = "Right", i = false, a = false) => {
    if (!e || !t) {
        return;
    }
    let o = n === "Right" && i ? "Left" : n === "Left" && i ? "Right" : n;
    let r = i ? -1 : 1;
    let u = ["Ring", "Index", "Little", "Thumb", "Middle"];
    let c = ["Proximal", "Intermediate", "Distal"];
    u.forEach(f => {
        c.forEach(h => {
            const m = e[n + f + h];
            const _ = l.humanoid.getBoneNode(Je.HumanoidBoneName[o + f + h]);
            if (!!_) {
                zt(_, {
                    z: m.z * r,
                    y: f === "Thumb" ? m.y * r : 0,
                    x: f === "Thumb" ? m.x : 0
                }, a ? 1 : .04 + Ke * 8);
            }
        });
    });
};
const fn = (l, e, t, n = "Right", i, a = false) => {
    if (!t || !e) {
        return;
    }
    let o = n === "Right" ? 1 : -1;
    const r = l.humanoid.getBoneNode(Je.HumanoidBoneName[n + "UpperLeg"]);
    const u = l.humanoid.getBoneNode(Je.HumanoidBoneName[n + "LowerLeg"]);
    const c = l.humanoid.getBoneNode(Je.HumanoidBoneName[n + "Foot"]);
    l.humanoid.getBoneNode(Je.HumanoidBoneName.Chest);
    const f = l.humanoid.getBoneNode(Je.HumanoidBoneName.Hips);
    if (E(de).holistic.enable && e[n + "UpperLeg"].z !== 0 && E(Wt)) {
        zt(r, {
            z: e[n + "UpperLeg"].z,
            x: e[n + "UpperLeg"].x,
            y: 0
        }, a ? 1 : .08 + Ke * 8);
        zt(u, {
            z: 0,
            x: e[n + "LowerLeg"].x,
            y: 0
        }, a ? 1 : .08 + Ke * 8);
        return;
    }
    let h = t.head.y;
    zt(r, {
        z: .015 * o + Math.max(Math.min(E(de).holistic.enable ? f.rotation.z : t.head.z * .3, 2.3), -2.3) * -.9,
        x: Math.max(Math.min(t.head.x, 0), -1) * -.85,
        y: Math.max(Math.min(h * .3, 1.3), -1.3) * -.85
    }, a ? 1 : .08 + Ke * 4);
    zt(u, {
        z: 0,
        x: Math.max(Math.min(t.head.x, 0), -1) * .85 * 2,
        y: 0
    }, a ? 1 : .08 + Ke * 4);
    zt(c, {
        z: 0,
        x: Math.max(Math.min(t.head.x, 0), -1) * -.85,
        y: 0
    }, a ? 1 : .08 + Ke * 4);
};
const Vn = (l, e, t, n = false, i = false) => {
    if (!t || !e) {
        return;
    }
    let a = n ? -1 : 1;
    const o = l.humanoid.getBoneNode(Je.HumanoidBoneName.Hips);
    l.humanoid.getBoneNode(Je.HumanoidBoneName.Spine);
    l.humanoid.getBoneNode(Je.HumanoidBoneName.Chest);
    let u = l.humanoid.restPose.hips.position[1] - Math.max(Math.min(t.head.x, 0), -1) * -0.14166666666666666;
    if (E(Wt) && (e.RightUpperLeg.z !== 0 || e.LeftUpperLeg.z !== 0)) {
        const C = l.humanoid.getBoneNode(Je.HumanoidBoneName.RightFoot);
        const p = l.humanoid.getBoneNode(Je.HumanoidBoneName.LeftFoot);
        var c = new rl();
        var f = new rl();
        C.getWorldPosition(c);
        p.getWorldPosition(f);
        u = o.position.y - Math.min(c.y - .08, f.y - .08);
    }
    let h = i ? u : K.lerp(o.position.y, u, .5 + Ke * 4);
    let m = i ? e.Hips.position.x : K.lerp(o.position.x, e.Hips.position.x, .05 + e.Hips.position.z * -Ke * 4);
    let _ = i ? e.Hips.position.z : K.lerp(o.position.z, e.Hips.position.z, .02 + e.Hips.position.z * -Ke * 4);
    m = E(Tt) && !n ? Math.max(Math.min(m, 3), -3) : 0;
    _ = E(Tt) && !n ? Math.max(Math.min(_, 3), -10) : 0;
    const b = new rl(m, h, _);
    o.position.lerp(b, i ? 1 : .7);
    let w = {
        z: E(de).holistic.enable && E(Tt) && E(Wt) ? Math.max(Math.min(e.Hips.rotation.z, 1.3), -1.3) * a : Math.max(Math.min(t.head.z, 1.3), -1.3) * .3 * a,
        x: E(de).holistic.enable ? Math.max(Math.min(e.Hips.rotation.z, 1.3), -1.3) * -.85 * .1 : Math.max(Math.min(t.head.x * .2, 1.3), -1.3) * -.85 * .1,
        y: E(de).holistic.enable && !n && !i ? e.Hips.rotation.y + Math.PI : Math.PI * (n ? 0 : 1) + Math.max(Math.min(t.head.y * .2 * 4, 1.3), -1.3) * .75
    };
    zt(o, w, i ? 1 : .04 + Ke * 4);
};
const yr = new rl(0, 0, 1);
const Mi = new Tn();
const kr = new gn();
const wr = new gn(-Math.sqrt(.5), 0, 0, Math.sqrt(.5));
const Lr = {
    type: "change"
};
class Cr extends da {
    constructor(e) {
        super();
        if (window.isSecureContext === false) {
            console.error("THREE.DeviceOrientationControls: DeviceOrientationEvent is only available in secure contexts (https)");
        }
        const t = this;
        const i = new gn();
        this.object = e;
        this.object.rotation.reorder("YXZ");
        this.enabled = true;
        this.deviceOrientation = {};
        this.screenOrientation = 0;
        this.alphaOffset = 0;
        const a = function (u) {
            t.deviceOrientation = u;
        };
        const o = function () {
            t.screenOrientation = window.orientation || 0;
        };
        const r = function (u, c, f, h, m) {
            Mi.set(f, c, -h, "YXZ");
            u.setFromEuler(Mi);
            u.multiply(wr);
            u.multiply(kr.setFromAxisAngle(yr, -m));
        };
        this.connect = function () {
            o();
            if (window.DeviceOrientationEvent !== undefined && typeof window.DeviceOrientationEvent.requestPermission == "function") {
                window.DeviceOrientationEvent.requestPermission().then(function (u) {
                    if (u == "granted") {
                        window.addEventListener("orientationchange", o);
                        window.addEventListener("deviceorientation", a);
                    }
                }).catch(function (u) {
                    console.error("THREE.DeviceOrientationControls: Unable to use DeviceOrientation API:", u);
                });
            } else {
                window.addEventListener("orientationchange", o);
                window.addEventListener("deviceorientation", a);
            }
            t.enabled = true;
        };
        this.disconnect = function () {
            window.removeEventListener("orientationchange", o);
            window.removeEventListener("deviceorientation", a);
            t.enabled = false;
        };
        this.update = function () {
            if (t.enabled === false) {
                return;
            }
            const u = t.deviceOrientation;
            if (u) {
                const c = u.alpha ? Zl.degToRad(u.alpha) + t.alphaOffset : 0;
                const f = u.beta ? Zl.degToRad(u.beta) : 0;
                const h = u.gamma ? Zl.degToRad(u.gamma) : 0;
                const m = t.screenOrientation ? Zl.degToRad(t.screenOrientation) : 0;
                r(t.object.quaternion, c, f, h, m);
                if (8 * (1 - i.dot(t.object.quaternion)) > 1e-6) {
                    i.copy(t.object.quaternion);
                    t.dispatchEvent(Lr);
                }
            }
        };
        this.dispose = function () {
            t.disconnect();
        };
        this.connect();
    }
}
const Ie = J({
    firstPerson: false,
    freeCamera: false
});
const jt = new gs(40, window.innerWidth / window.innerHeight, .1, 700);
jt.position.set(0, 1.4, 1);
const It = new gs(65, window.innerWidth / window.innerHeight, .1, 1e3);
const _t = new hn();
const Ol = J(0);
_t.position.set(0, 1.35, 0);
_t.add(It);
It.position.set(0, 0, 1);
_t.rotation.order = "YXZ";
let Dt;
let Zt = null;
let Qn = J(jt);
const zr = () => {
    Wl();
    Ie.set({
        freeCamera: !E(Ie).freeCamera,
        firstPerson: E(Ie).firstPerson
    });
};
const Mr = () => {
    Ie.set({
        firstPerson: !E(Ie).firstPerson,
        freeCamera: E(Ie).freeCamera
    });
};
let Ql = false;
window.addEventListener("devicemotion", function (l) {
    if (l.rotationRate.alpha || l.rotationRate.beta || l.rotationRate.gamma) {
        Ql = true;
    }
});
const Pr = () => {
    Rr(El, It, _t);
    Sr(Zt, It, _t);
    if (Dt && !E(Ie).freeCamera) {
        Dt.update();
    }
};
let El;
const dn = (l, e, t = "user") => {
    if (!l || !e) {
        return;
    }
    let n = E(Ie).firstPerson;
    if (!E(Ie).freeCamera) {
        l.scene.rotation.y = 0;
        Kn(l, E(V)[t].tracking.Face, E(V)[t].tracking.Pose);
        Vn(l, E(V)[t].tracking.Pose, E(V)[t].tracking.Face, false, false);
        return;
    }
    let a = new rl();
    e.getWorldPosition(a);
    let o = Math.atan2(a.x - l.scene.position.x, a.z - l.scene.position.z);
    if (n && l.isUser) {
        l.scene.rotation.y = o + Math.PI;
    } else if (n && !l.isUser) {
        l.scene.rotation.y = 0;
    } else {
        l.scene.rotation.y = o;
    }
};
const Rs = l => {
    if (E(Ie).firstPerson) {
        l.position.set(0, .03, -.05);
    } else {
        let e = Math.max(Math.min(1.15 + (E(V).user.tracking.Face.head.width - .3) * -1.9, 24.5), .2);
        let t = Math.max(Math.min((E(V).user.tracking.Face.head.position.x - .5) * .35, 1.5), -1.5);
        let n = Math.max(Math.min((E(V).user.tracking.Face.head.position.y - .5) * .35, 1.5), -1.5);
        l.position.lerp(new rl(t, n, e), .3);
    }
};
const Rr = (l, e, t) => {
    if (!l) {
        return;
    }
    const n = E(V).user.model;
    const i = E(V).friend.model;
    dn(n, e, "user");
    dn(i, e, "friend");
    if (!E(Ie).freeCamera) {
        return;
    }
    l.update();
    let a = (K.normalizeAngle(t.rotation.y) + 1) / 2;
    if (a !== E(Ol)) {
        Ol.set(a);
    }
    t.rotation.x = Math.max(Math.min(t.rotation.x * (E(Ie).firstPerson ? 1 : -1), .7), E(Ie).firstPerson ? -Math.PI * .25 : -Math.PI);
    t.rotation.y *= E(Ie).firstPerson ? 1 : -1;
    Rs(e);
};
const Sr = (l, e, t, n) => {
    const i = E(V).user.model;
    const a = E(V).friend.model;
    if (!l || (dn(i, e, "user"), dn(a, e, "friend"), l.isLocked === false)) {
        return;
    }
    let o = (K.normalizeAngle(t.rotation.y) + 1) / 2;
    if (o !== E(Ol)) {
        Ol.set(o);
    }
    t.rotation.x = Math.max(Math.min(t.rotation.x, .7), E(Ie).firstPerson ? -Math.PI * .25 : -Math.PI);
    Rs(e);
};
function Hr(l, e, t) {
    I(l, Cn, m => t(2, m));
    I(l, Ie, m => t(3, m));
    I(l, V, m => t(4, m));
    l.$$.on_destroy.push(() => G());
    let {
        scene: r
    } = e;
    let {
        renderer: u
    } = e;
    const c = () => {
        if (typeof DeviceMotionEvent != "undefined" && typeof DeviceMotionEvent.requestPermission == "function") {
            DeviceMotionEvent.requestPermission().then(m => {
                if (m == "granted") {
                    window.addEventListener("devicemotion", _ => {
                        if (_.rotationRate.alpha || _.rotationRate.beta || _.rotationRate.gamma) {
                            Ql = true;
                        }
                        f();
                    });
                }
            }).catch(console.error);
        }
    };
    const f = () => {
        if (!(El || !Ql)) {
            El = new Cr(_t);
            Al(m.user.model);
        }
    };
    const h = () => {
        if (!(!window.matchMedia("(hover: hover) and (pointer: fine)").matches || El || Zt)) {
            Zt = new ha(_t, u.domElement);
            Zt.addEventListener("lock", function () {
                Al(m.user.model);
            });
            Zt.addEventListener("unlock", function () {
                Ie.set({
                    firstPerson: m.firstPerson,
                    freeCamera: false
                });
            });
        }
    };
    Dt = new ma(jt, u.domElement);
    Dt.enableDamping = true;
    Dt.dampingFactor = .2;
    Dt.screenSpacePanning = true;
    Dt.maxPolarAngle = Math.PI * .62;
    Dt.maxDistance = 10;
    Dt.minDistance = .25;
    Dt.update();
    r.add(_t);
    l.$$set = m => {
        if ("scene" in m) {
            t(0, r = m.scene);
        }
        if ("renderer" in m) {
            t(1, u = m.renderer);
        }
    };
    l.$$.update = () => {
        if (l.$$.dirty & 24) {
            if (m.freeCamera) {
                if (!Ql) {
                    c();
                }
                f();
                h();
                if (Zt) {
                    Zt.lock();
                }
                if (El) {
                    Al(m.user.model);
                }
            } else {
                if (Zt) {
                    Zt.unlock();
                }
                Al(m.user.model);
            }
        }
        if (l.$$.dirty & 4) {
            jt.position.z = .75 + 3.5 * (1 - m);
        }
        if (l.$$.dirty & 8) {
            Qn.set(m.freeCamera ? It : jt);
        }
    };
    return [r, u, m, m, m];
}
class Dr extends pe {
    constructor(e) {
        super();
        _e(this, e, Hr, null, me, {
            scene: 0,
            renderer: 1
        });
    }
}
function Pi(l, e, t) {
    const n = l.slice();
    n[3] = e[t];
    return n;
}
function Ir(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    return {
        c() {
            e = L("img");
            s(e, "class", "content svelte-1p6qz08");
            if (!Ne(e.src, t = l[3].url)) {
                s(e, "src", t);
            }
            s(e, "alt", n = "preset sticker" + l[3].id);
        },
        m(o, r) {
            R(o, e, r);
            if (!i) {
                a = j(e, "contextmenu", Tr);
                i = true;
            }
        },
        p(o, r) {
            if (r & 1 && !Ne(e.src, t = o[3].url)) {
                s(e, "src", t);
            }
            if (r & 1 && n !== (n = "preset sticker" + o[3].id)) {
                s(e, "alt", n);
            }
        },
        d(o) {
            if (o) {
                S(e);
            }
            i = false;
            a();
        }
    };
}
function Ar(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    return {
        c() {
            e = L("video");
            s(e, "class", "content svelte-1p6qz08");
            if (!Ne(e.src, t = l[3].url)) {
                s(e, "src", t);
            }
            s(e, "alt", n = "uploaded sticker" + l[3].id);
            e.autoplay = true;
            e.muted = true;
            e.playsInline = true;
            e.loop = true;
        },
        m(o, r) {
            R(o, e, r);
            if (!i) {
                a = j(e, "contextmenu", Fr);
                i = true;
            }
        },
        p(o, r) {
            if (r & 1 && !Ne(e.src, t = o[3].url)) {
                s(e, "src", t);
            }
            if (r & 1 && n !== (n = "uploaded sticker" + o[3].id)) {
                s(e, "alt", n);
            }
        },
        d(o) {
            if (o) {
                S(e);
            }
            i = false;
            a();
        }
    };
}
function Ri(l, e) {
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let f = e[3].type === "video" ? Ar : Ir;
    let h = f(e);
    return {
        key: l,
        first: null,
        c() {
            t = L("div");
            h.c();
            n = P();
            s(t, "class", "resize-drag svelte-1p6qz08");
            te(t, "max-width", Math.min(e[1].w * .5, 300) + "px");
            te(t, "z-index", e[3].zIndex);
            s(t, "data-id", i = e[3].id);
            s(t, "data-z", a = e[3].zIndex);
            this.first = t;
        },
        m(m, _) {
            R(m, t, _);
            h.m(t, null);
            d(t, n);
            u = true;
        },
        p(m, _) {
            e = m;
            if (f === (f = e[3].type === "video" ? Ar : Ir) && h) {
                h.p(e, _);
            } else {
                h.d(1);
                h = f(e);
                if (h) {
                    h.c();
                    h.m(t, n);
                }
            }
            if (!u || _ & 2) {
                te(t, "max-width", Math.min(e[1].w * .5, 300) + "px");
            }
            if (!u || _ & 1) {
                te(t, "z-index", e[3].zIndex);
            }
            if (!u || _ & 1 && i !== (i = e[3].id)) {
                s(t, "data-id", i);
            }
            if (!u || _ & 1 && a !== (a = e[3].zIndex)) {
                s(t, "data-z", a);
            }
        },
        i(m) {
            if (!u) {
                re(() => {
                    if (r) {
                        r.end(1);
                    }
                    o = ue(t, We, {
                        duration: 300,
                        easing: le
                    });
                    o.start();
                });
                u = true;
            }
        },
        o(m) {
            if (o) {
                o.invalidate();
            }
            r = Se(t, We, {
                duration: 300,
                easing: le
            });
            u = false;
        },
        d(m) {
            if (m) {
                S(t);
            }
            h.d();
            if (m && r) {
                r.end();
            }
        }
    };
}
function Er(l) {
    let e = [];
    let t = new Map();
    let n;
    let i;
    let a = l[0];
    const o = r => r[3].id;
    for (let r = 0; r < a.length; r += 1) {
        let u = Pi(l, a, r);
        let c = u[3].id;
        t.set(c, e[r] = Ri(c, u));
    }
    return {
        c() {
            for (let r = 0; r < e.length; r += 1) {
                e[r].c();
            }
            n = _l();
        },
        m(r, u) {
            for (let c = 0; c < e.length; c += 1) {
                e[c].m(r, u);
            }
            R(r, n, u);
            i = true;
        },
        p(r, [u]) {
            if (u & 3) {
                a = r[0];
                bt();
                e = jl(e, u, o, 1, r, a, t, n.parentNode, ga, Ri, n, Pi);
                yt();
            }
        },
        i(r) {
            if (!i) {
                for (let u = 0; u < a.length; u += 1) {
                    x(e[u]);
                }
                i = true;
            }
        },
        o(r) {
            for (let u = 0; u < e.length; u += 1) {
                W(e[u]);
            }
            i = false;
        },
        d(r) {
            for (let u = 0; u < e.length; u += 1) {
                e[u].d(r);
            }
            if (r) {
                S(n);
            }
        }
    };
}
const hl = J([]);
const Si = [{
    url: "https://yeemachine.github.io/k2021/img/sticker/accessories/sunglass_normal.png",
    default: .5
}, {
    url: "https://yeemachine.github.io/k2021/img/sticker/accessories/birthday_party_sunglass.png",
    default: .5
}, {
    url: "https://yeemachine.github.io/k2021/img/sticker/accessories/medical_mask_front_view.png",
    default: .5
}, {
    url: "https://yeemachine.github.io/k2021/img/sticker/furniture/table_syoumen_wood.png",
    default: .5
}, {
    url: "https://yeemachine.github.io/k2021/img/sticker/food/potatochips_fukuro_red.png",
    default: .5
}, {
    url: "https://yeemachine.github.io/k2021/img/sticker/food/sweets_marzipan_cake.png",
    default: .5
}, {
    url: "https://yeemachine.github.io/k2021/img/sticker/food/sweets_purin_cup.png",
    default: .5
}, {
    url: "https://yeemachine.github.io/k2021/img/sticker/food/snackgashi.png",
    default: .5
}, {
    url: "https://yeemachine.github.io/k2021/img/sticker/drink/cafe_coffee_cup.png",
    default: .5
}, {
    url: "https://yeemachine.github.io/k2021/img/sticker/drink/drink_cocktail09.png",
    default: .5
}, {
    url: "https://yeemachine.github.io/k2021/img/sticker/drink/drink_cocktail10.png",
    default: .5
}, {
    url: "https://yeemachine.github.io/k2021/img/sticker/drink/drink_sangria.png",
    default: .5
}, {
    url: "https://yeemachine.github.io/k2021/img/sticker/drink/wine_bottle_bourgogne.png",
    default: .5
}, {
    url: "https://yeemachine.github.io/k2021/img/sticker/music/music_mic_stand.png",
    default: .5
}, {
    url: "https://yeemachine.github.io/k2021/img/sticker/music/pen_light2_3_lime.png",
    default: .5
}, {
    url: "https://yeemachine.github.io/k2021/img/sticker/music/music_guitar_doubleneck.png",
    default: .5
}, {
    url: "https://yeemachine.github.io/k2021/img/sticker/music/gassyou_fumendai.png",
    default: .5
}, {
    url: "https://yeemachine.github.io/k2021/img/sticker/music/music_mixer_dj.png",
    default: .5
}, {
    url: "https://yeemachine.github.io/k2021/img/sticker/music/animal_penguin_music_band.png",
    default: .5
}];
$e(hl, "stickerList", [], Zn);
et(hl, "stickerList");
const ul = J([]);
function Hi(l) {
    var e = l.target;
    var t = (parseFloat(e.getAttribute("data-x")) || 0) + l.dx;
    var n = (parseFloat(e.getAttribute("data-y")) || 0) + l.dy;
    e.style.webkitTransform = e.style.transform = "translate(" + t + "px, " + n + "px)";
    e.setAttribute("data-x", t);
    e.setAttribute("data-y", n);
}
const Fr = l => (l.preventDefault(), false);
const Tr = l => (l.preventDefault(), false);
function Br(l, e, t) {
    I(l, ul, r => t(0, r));
    I(l, ut, r => t(1, r));
    l.$$.on_destroy.push(() => G());
    const o = r => {
        let u = [];
        r.forEach(c => {
            if (c.id === r.getAttribute("data-id")) {
                c.zIndex = r.length + 1;
            } else if (c.zIndex > r.getAttribute("data-z")) {
                c.zIndex = c.zIndex - 1;
            }
            u.push(c);
        });
        ul.set(u);
    };
    Nt(async () => {
        xt(".resize-drag").gesturable({
            listeners: {
                start(r) {
                    let u = (parseFloat(r.target.getAttribute("data-a")) || 0) - r.angle;
                    let c = parseFloat(r.target.getAttribute("data-s")) || 1;
                    r.target.setAttribute("data-a", u);
                    r.target.setAttribute("data-s", c);
                },
                move(r) {
                    let u = parseFloat(r.target.getAttribute("data-a")) + r.angle;
                    u = u > 360 || u < -360 ? u % 360 : u;
                    let c = parseFloat(r.target.getAttribute("data-s")) * r.scale;
                    var f = u;
                    f = Math.abs(u) < 3 ? 0 : Math.abs(90 - u) < 3 || Math.abs(-270 - u) < 3 ? 90 : Math.abs(180 - Math.abs(u)) < 3 ? 180 : Math.abs(270 - u) < 3 || Math.abs(-90 - u) < 3 ? 270 : Math.abs(360 - Math.abs(u)) < 3 ? 0 : u;
                    let m = r.target.firstChild;
                    m.style.webkitTransform = m.style.transform = "rotate(" + f + "deg)scale(" + c + ")";
                    Hi(r);
                },
                end(r) {
                    let u = (parseFloat(r.target.getAttribute("data-a")) || 0) + r.angle;
                    u = u > 360 || u < -360 ? u % 360 : u;
                    let c = (parseFloat(r.target.getAttribute("data-s")) || 1) * r.scale;
                    r.target.setAttribute("data-a", u);
                    r.target.setAttribute("data-s", c);
                }
            }
        }).draggable({
            onmove: Hi,
            cursorChecker() {
                return null;
            }
        }).on("down", function (r) {
            o(r.currentTarget);
        });
        if (window.matchMedia("(hover: hover) and (pointer:fine)").matches) {
            xt(".resize-drag").resizable({
                edges: {
                    left: true,
                    right: true,
                    bottom: true,
                    top: true
                },
                modifiers: [xt.modifiers.aspectRatio({
                    ratio: "preserve"
                }), xt.modifiers.restrictSize({
                    min: {
                        width: 50
                    }
                })],
                inertia: true
            }).on("resizemove", function (r) {
                if (window.matchMedia("(hover: hover) and (pointer:fine)").matches) {
                    var u = r.target;
                    var c = parseFloat(u.getAttribute("data-x")) || 0;
                    var f = parseFloat(u.getAttribute("data-y")) || 0;
                    if (r.rect.width > 50) {
                        u.firstChild.style.width = r.rect.width + "px";
                        u.firstChild.style.height = r.rect.height + "px";
                        c += r.deltaRect.left;
                        f += r.deltaRect.top;
                        u.style.webkitTransform = u.style.transform = "translate(" + c + "px," + f + "px)";
                        u.setAttribute("data-x", c);
                        u.setAttribute("data-y", f);
                    }
                    u.style.maxWidth = "none";
                    u.style.maxHeight = "none";
                }
            });
        }
    });
    return [r, r];
}
class xr extends pe {
    constructor(e) {
        super();
        _e(this, e, Br, Er, me, {});
    }
}
function Di(l) {
    let e;
    let t;
    e = new pr({
        props: {
            scene: l[6],
            camera: l[5],
            renderer: l[0],
            composer: l[1]
        }
    });
    return {
        c() {
            Q(e.$$.fragment);
        },
        m(n, i) {
            $(e, n, i);
            t = true;
        },
        p(n, i) {
            const a = {};
            if (i & 32) {
                a.camera = n[5];
            }
            if (i & 1) {
                a.renderer = n[0];
            }
            if (i & 2) {
                a.composer = n[1];
            }
            e.$set(a);
        },
        i(n) {
            if (!t) {
                x(e.$$.fragment, n);
                t = true;
            }
        },
        o(n) {
            W(e.$$.fragment, n);
            t = false;
        },
        d(n) {
            ee(e, n);
        }
    };
}
function Or(l) {
    let e;
    let t;
    e = new Wa({
        props: {
            canvas: l[0].domElement
        }
    });
    return {
        c() {
            Q(e.$$.fragment);
        },
        m(n, i) {
            $(e, n, i);
            t = true;
        },
        p(n, i) {
            const a = {};
            if (i & 1) {
                a.canvas = n[0].domElement;
            }
            e.$set(a);
        },
        i(n) {
            if (!t) {
                x(e.$$.fragment, n);
                t = true;
            }
        },
        o(n) {
            W(e.$$.fragment, n);
            t = false;
        },
        d(n) {
            ee(e, n);
        }
    };
}
function Ur(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m;
    let _;
    let b;
    let w;
    let C;
    let p;
    a = new xr({});
    let z = l[1] && Di(l);
    u = new mr({
        props: {
            scene: l[6],
            group: l[7],
            renderer: l[0]
        }
    });
    f = new Ba({
        props: {
            renderer: l[0],
            scene: l[6],
            light: l[3]
        }
    });
    m = new Dr({
        props: {
            scene: l[6],
            renderer: l[0]
        }
    });
    b = new vr({
        props: {
            scene: l[6],
            renderer: l[0],
            composer: l[1]
        }
    });
    let k = $t && Or(l);
    return {
        c() {
            e = L("container");
            t = L("container");
            i = P();
            Q(a.$$.fragment);
            o = P();
            if (z) {
                z.c();
            }
            r = P();
            Q(u.$$.fragment);
            c = P();
            Q(f.$$.fragment);
            h = P();
            Q(m.$$.fragment);
            _ = P();
            Q(b.$$.fragment);
            w = P();
            if (k) {
                k.c();
            }
            C = _l();
            s(t, "class", n = "canvasContainer " + (l[4] === "sticker" ? "disabled" : "") + " svelte-rjdl5h");
            s(e, "class", "scene svelte-rjdl5h");
        },
        m(v, g) {
            R(v, e, g);
            d(e, t);
            l[15](t);
            d(e, i);
            $(a, e, null);
            R(v, o, g);
            if (z) {
                z.m(v, g);
            }
            R(v, r, g);
            $(u, v, g);
            R(v, c, g);
            $(f, v, g);
            R(v, h, g);
            $(m, v, g);
            R(v, _, g);
            $(b, v, g);
            R(v, w, g);
            if (k) {
                k.m(v, g);
            }
            R(v, C, g);
            p = true;
        },
        p(v, [g]) {
            if (!p || g & 16 && n !== (n = "canvasContainer " + (v[4] === "sticker" ? "disabled" : "") + " svelte-rjdl5h")) {
                s(t, "class", n);
            }
            if (v[1]) {
                if (z) {
                    z.p(v, g);
                    if (g & 2) {
                        x(z, 1);
                    }
                } else {
                    z = Di(v);
                    z.c();
                    x(z, 1);
                    z.m(r.parentNode, r);
                }
            } else if (z) {
                bt();
                W(z, 1, 1, () => {
                    z = null;
                });
                yt();
            }
            const y = {};
            if (g & 1) {
                y.renderer = v[0];
            }
            u.$set(y);
            const M = {};
            if (g & 1) {
                M.renderer = v[0];
            }
            if (g & 8) {
                M.light = v[3];
            }
            f.$set(M);
            const N = {};
            if (g & 1) {
                N.renderer = v[0];
            }
            m.$set(N);
            const O = {};
            if (g & 1) {
                O.renderer = v[0];
            }
            if (g & 2) {
                O.composer = v[1];
            }
            b.$set(O);
            if ($t) {
                k.p(v, g);
            }
        },
        i(v) {
            if (!p) {
                x(a.$$.fragment, v);
                x(z);
                x(u.$$.fragment, v);
                x(f.$$.fragment, v);
                x(m.$$.fragment, v);
                x(b.$$.fragment, v);
                x(k);
                p = true;
            }
        },
        o(v) {
            W(a.$$.fragment, v);
            W(z);
            W(u.$$.fragment, v);
            W(f.$$.fragment, v);
            W(m.$$.fragment, v);
            W(b.$$.fragment, v);
            W(k);
            p = false;
        },
        d(v) {
            if (v) {
                S(e);
            }
            l[15](null);
            ee(a);
            if (v) {
                S(o);
            }
            if (z) {
                z.d(v);
            }
            if (v) {
                S(r);
            }
            ee(u, v);
            if (v) {
                S(c);
            }
            ee(f, v);
            if (v) {
                S(h);
            }
            ee(m, v);
            if (v) {
                S(_);
            }
            ee(b, v);
            if (v) {
                S(w);
            }
            if (k) {
                k.d(v);
            }
            if (v) {
                S(C);
            }
        }
    };
}
const Ul = J(1);
const Kt = J("#ffffff");
const gl = J(.64);
const pl = J(.75);
$e(Ul, "lightIntensity", E(Ul));
et(Ul, "lightIntensity");
$e(Kt, "lightColor", E(Kt));
et(Kt, "lightColor");
$e(gl, "lightRotY", E(gl));
et(gl, "lightRotY");
$e(pl, "lightRotX", E(pl));
et(pl, "lightRotX");
function jr(l, e, t) {
    I(l, pl, A => t(8, A));
    I(l, gl, A => t(9, A));
    I(l, ql, A => t(10, A));
    I(l, Ul, A => t(11, A));
    I(l, Kt, A => t(12, A));
    I(l, xl, A => t(13, A));
    I(l, Bl, A => t(14, A));
    I(l, ys, A => t(4, A));
    I(l, Qn, A => t(5, A));
    l.$$.on_destroy.push(() => G());
    l.$$.on_destroy.push(() => G());
    l.$$.on_destroy.push(() => G());
    l.$$.on_destroy.push(() => G());
    let C;
    const p = new pa({
        powerPreference: "high-performance",
        antialias: true,
        stencil: true,
        alpha: true,
        depth: true
    });
    p.setSize(window.innerWidth, window.innerHeight);
    p.setPixelRatio(Math.max(2, window.devicePixelRatio));
    p.shadowMap.enabled = true;
    let z = null;
    const k = new _a();
    const v = new hn();
    v.position.set(0, 1, 0);
    k.add(v);
    const g = new va(new nl(A));
    v.add(g);
    g.position.set(0, 0, 1);
    g.castShadow = true;
    g.shadow.radius = 2;
    g.shadow.bias = 125e-7;
    g.shadow.mapSize.width = 2048;
    g.shadow.mapSize.height = 2048;
    const y = new ba(14452852, .5);
    k.add(y);
    const M = new ya();
    k.add(M);
    Nt(async () => {
        C.appendChild(p.domElement);
    });
    ut.subscribe(A => {
        if (A.w > 0 && p) {
            N(A.w, A.h, A.s);
        }
    });
    function N(A, D, H) {
        p.getPixelRatio();
        let B = A / D;
        jt.aspect = B;
        jt.updateProjectionMatrix();
        It.aspect = B;
        It.updateProjectionMatrix();
        if (z) {
            z.setSize(A, D);
        } else {
            p.setSize(A, D);
        }
    }
    function O(A) {
        ht[A ? "unshift" : "push"](() => {
            C = A;
            t(2, C);
        });
    }
    l.$$.update = () => {
        if (l.$$.dirty & 1024) {
            t(0, p.antialias = !A, p);
        }
        if (l.$$.dirty & 1024) {
            t(0, p.stencil = !A, p);
        }
        if (l.$$.dirty & 1024) {
            t(0, p.depth = !A, p);
        }
        if (l.$$.dirty & 25603) {
            t(1, z = (A || A > 0 || A > 0) && !z ? new ka(p) : z);
        }
        if (l.$$.dirty & 4096) {
            t(3, g.color = new nl(A), g);
        }
        if (l.$$.dirty & 2048) {
            t(3, g.intensity = A, g);
        }
        if (l.$$.dirty & 1024) {
            t(3, g.visible = !A, g);
        }
        if (l.$$.dirty & 512) {
            v.rotation.y = Math.PI * 2 * A;
        }
        if (l.$$.dirty & 256) {
            v.rotation.x = Math.PI * A;
        }
    };
    return [p, z, C, g, A, A, k, M, A, A, A, A, A, A, A, O];
}
class Wr extends pe {
    constructor(e) {
        super();
        _e(this, e, jr, Ur, me, {});
    }
}
const Gt = J({
    char: [],
    bg: [],
    sticker: [],
    p2pConnection: false,
    uploadedVRM: false,
    firstPerson: false,
    freeCamera: false,
    infoExpanded: false,
    toggledHolistic: false,
    toggledFacemesh: false,
    toggledFacemeshHolistic: false
});
function Nr(l, e, t) {
    I(l, Gt, i => t(0, i));
    if (!window.dataLayer) {
        window.dataLayer = [];
    }
    de.subscribe(i => {
        if (i.face.running && !i.toggledFacemesh) {
            dataLayer.push({
                event: "toggledFacemesh",
                conversionValue: true
            });
            Ce(Gt, i.toggledFacemesh = true, i);
        }
        if (i.holistic.running && !i.toggledHolistic) {
            dataLayer.push({
                event: "toggledHolistic",
                conversionValue: true
            });
            Ce(Gt, i.toggledHolistic = true, i);
        }
        if (i.face.running && i.holistic.running && !i.toggledFacemeshHolistic) {
            dataLayer.push({
                event: "toggledFacemeshHolistic",
                conversionValue: true
            });
            Ce(Gt, i.toggledFacemeshHolistic = true, i);
        }
    });
    Jt.subscribe(i => {
        if (i && !i.infoExpanded) {
            dataLayer.push({
                event: "infoExpanded",
                conversionValue: true
            });
            Ce(Gt, i.infoExpanded = true, i);
        }
    });
    Ut.subscribe(i => {
        if (i && i.uploaded && !i.uploadedVRM) {
            dataLayer.push({
                event: "uploadedVRM",
                conversionValue: true
            });
            Ce(Gt, i.uploadedVRM = true, i);
            return;
        }
        if (i && i.type === "url" && !i.char.includes(i.name)) {
            dataLayer.push({
                event: "char",
                conversionValue: i.name
            });
            i.char.push(i.name);
        }
    });
    Ft.subscribe(i => {
        if (i && i.type === "img" && i.pano && !i.bg.includes(i.url)) {
            dataLayer.push({
                event: "bg",
                conversionValue: i.uploaded ? "customBG" : i.url
            });
            i.bg.push(i.url);
        }
        if (i && i.type === "color" && !i.bg.includes(i.url)) {
            dataLayer.push({
                event: "bg",
                conversionValue: i.url
            });
            i.bg.push(i.url);
        }
        if (i && i.type === "iro" && !i.bg.includes("iro")) {
            dataLayer.push({
                event: "bg",
                conversionValue: "iro"
            });
            i.bg.push("iro");
        }
    });
    Ie.subscribe(i => {
        if (i.freeCamera && !i.freeCamera) {
            dataLayer.push({
                event: "freeCamera",
                conversionValue: true
            });
            Ce(Gt, i.freeCamera = true, i);
        }
        if (i.freeCamera && i.firstPerson && !i.firstPerson) {
            dataLayer.push({
                event: "firstPerson",
                conversionValue: true
            });
            Ce(Gt, i.firstPerson = true, i);
        }
    });
    Ot.subscribe(i => {
        if (i && !i.p2pConnection) {
            dataLayer.push({
                event: "p2pConnection",
                conversionValue: true
            });
            Ce(Gt, i.p2pConnection = true, i);
        }
    });
    return [];
}
class qr extends pe {
    constructor(e) {
        super();
        _e(this, e, Nr, null, me, {});
    }
}
function Ii(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c = Yl[l[0]].message[l[3]] + "";
    let f;
    let h;
    let m = Yl[l[0]].confirm[l[3]] + "";
    let _;
    let b;
    let w;
    let C;
    let p;
    let z;
    return {
        c() {
            e = L("container");
            t = L("video");
            o = P();
            r = L("div");
            u = L("p");
            f = P();
            h = L("p");
            _ = ne(m);
            s(t, "class", n = "content " + l[0] + " svelte-1kc6ls6");
            if (!Ne(t.src, i = l[4][l[0]])) {
                s(t, "src", i);
            }
            s(t, "alt", a = "uploaded sticker");
            t.autoplay = true;
            t.muted = true;
            t.playsInline = true;
            t.loop = true;
            s(u, "class", "svelte-1kc6ls6");
            s(h, "class", "confirm svelte-1kc6ls6");
            s(e, "style", l[1]);
            s(e, "class", "svelte-1kc6ls6");
        },
        m(k, v) {
            R(k, e, v);
            d(e, t);
            d(e, o);
            d(e, r);
            d(r, u);
            u.innerHTML = c;
            d(r, f);
            d(r, h);
            d(h, _);
            C = true;
            if (!p) {
                z = j(h, "click", l[5]);
                p = true;
            }
        },
        p(k, v) {
            l = k;
            if (!C || v & 1 && n !== (n = "content " + l[0] + " svelte-1kc6ls6")) {
                s(t, "class", n);
            }
            if (!C || v & 1 && !Ne(t.src, i = l[4][l[0]])) {
                s(t, "src", i);
            }
            if ((!C || v & 9) && c !== (c = Yl[l[0]].message[l[3]] + "")) {
                u.innerHTML = c;
            }
            if ((!C || v & 9) && m !== (m = Yl[l[0]].confirm[l[3]] + "")) {
                Re(_, m);
            }
            if (!C || v & 2) {
                s(e, "style", l[1]);
            }
        },
        i(k) {
            if (!C) {
                re(() => {
                    if (w) {
                        w.end(1);
                    }
                    b = ue(e, We, {
                        delay: 1e3,
                        duration: 300,
                        easing: le,
                        baseScale: .9
                    });
                    b.start();
                });
                C = true;
            }
        },
        o(k) {
            if (b) {
                b.invalidate();
            }
            w = Se(e, fe, {
                duration: 200
            });
            C = false;
        },
        d(k) {
            if (k) {
                S(e);
            }
            if (k && w) {
                w.end();
            }
            p = false;
            z();
        }
    };
}
function Gr(l) {
    let e;
    let t;
    let n = l[0] && l[2][l[0]] && Ii(l);
    return {
        c() {
            if (n) {
                n.c();
            }
            e = _l();
        },
        m(i, a) {
            if (n) {
                n.m(i, a);
            }
            R(i, e, a);
            t = true;
        },
        p(i, [a]) {
            if (i[0] && i[2][i[0]]) {
                if (n) {
                    n.p(i, a);
                    if (a & 5) {
                        x(n, 1);
                    }
                } else {
                    n = Ii(i);
                    n.c();
                    x(n, 1);
                    n.m(e.parentNode, e);
                }
            } else if (n) {
                bt();
                W(n, 1, 1, () => {
                    n = null;
                });
                yt();
            }
        },
        i(i) {
            if (!t) {
                x(n);
                t = true;
            }
        },
        o(i) {
            W(n);
            t = false;
        },
        d(i) {
            if (n) {
                n.d(i);
            }
            if (i) {
                S(e);
            }
        }
    };
}
const ml = J({
    camera: true,
    char: true,
    call: true,
    bg: true,
    sticker: true
});
const mn = l => {
    if (E(ml)[l]) {
        E(ml)[l] = false;
        ml.set(E(ml));
    }
};
$e(ml, "ftueState", {
    camera: true,
    char: true,
    call: true,
    bg: true,
    sticker: true
});
et(ml, "ftueState");
function Zr(l, e, t) {
    I(l, ml, f => t(2, f));
    I(l, Vt, f => t(3, f));
    l.$$.on_destroy.push(() => G());
    let {
        selected: o
    } = e;
    let {
        style: r = ""
    } = e;
    let u = {
        char: "https://cdn.glitch.com/29e07830-2317-4b15-a044-135e73c7f840%2Fcharupload1clippedcropped.mp4?v=1625730916425",
        bg: "https://cdn.glitch.com/29e07830-2317-4b15-a044-135e73c7f840%2Fbgupload1.mp4?v=1625732427215",
        sticker: "https://cdn.glitch.com/29e07830-2317-4b15-a044-135e73c7f840%2Fstickerdropcrop.mp4?v=1625760067751",
        call: "https://cdn.glitch.com/29e07830-2317-4b15-a044-135e73c7f840%2Fcall_small.mp4?v=1626041341731"
    };
    const c = () => mn(o);
    l.$$set = f => {
        if ("selected" in f) {
            t(0, o = f.selected);
        }
        if ("style" in f) {
            t(1, r = f.style);
        }
    };
    return [o, r, f, f, u, c];
}
class Yr extends pe {
    constructor(e) {
        super();
        _e(this, e, Zr, Gr, me, {
            selected: 0,
            style: 1
        });
    }
}
function Xr(l) {
    let e;
    let t;
    let n;
    let i;
    const a = l[8].default;
    const o = Bn(a, l, l[7], null);
    return {
        c() {
            e = Z("svg");
            if (o) {
                o.c();
            }
            s(e, "class", "shape-overlays svelte-19kx5c6");
            s(e, "viewBox", "0 0 100 100");
            s(e, "data-axis", t = l[1] ? "x" : "y");
            s(e, "data-flip", n = !!l[2]);
            s(e, "preserveAspectRatio", "none");
        },
        m(r, u) {
            R(r, e, u);
            if (o) {
                o.m(e, null);
            }
            l[9](e);
            i = true;
        },
        p(r, [u]) {
            if (o && o.p && (!i || u & 128)) {
                xn(o, a, r, r[7], i ? Un(a, r[7], u, null) : On(r[7]), null);
            }
            if (!i || u & 2 && t !== (t = r[1] ? "x" : "y")) {
                s(e, "data-axis", t);
            }
            if (!i || u & 4 && n !== (n = !!r[2])) {
                s(e, "data-flip", n);
            }
        },
        i(r) {
            if (!i) {
                x(o, r);
                i = true;
            }
        },
        o(r) {
            W(o, r);
            i = false;
        },
        d(r) {
            if (r) {
                S(e);
            }
            if (o) {
                o.d(r);
            }
            l[9](null);
        }
    };
}
function Jr(l, e, t) {
    let {
        $$slots: i = {},
        $$scope: a
    } = e;
    let {
        transition: o = false
    } = e;
    let r;
    let u = [];
    let c = [];
    let f = 0;
    let h = 5;
    let m = 1200;
    let _ = .5;
    let {
        isOpen: b = false
    } = e;
    let w = "curve";
    let C = false;
    let p = false;
    let z = false;
    const k = us(0, {
        duration: 1e3,
        easing: wa
    });
    I(l, k, A => t(18, A));
    const v = ({
                   axis: A = "x",
                   _duration: D = 1200,
                   _delayPointsMax: H = .15,
                   _delayPerPath: B = .125,
                   action: T = null,
                   _wipe: q = false,
                   _flip: X = false,
                   _curve: se = "curve",
                   pattern: Y = [],
                   _numPoints: ze = 5
               } = {}) => {
        if (!o) {
            t(1, p = A === "x");
            m = D;
            h = ze;
            w = se;
            _ = H;
            _ = B;
            t(5, b = T === "open" ? false : T === "close" ? true : b);
            C = q;
            t(2, z = X);
            r.setAttribute("data-axis", A);
            r.setAttribute("data-flip", X);
            if (Y.length >= h) {
                c = Y;
            } else {
                g();
            }
            t(4, o = true);
            k.set(0, {
                duration: 0
            });
            k.set(1, {
                duration: m
            });
        }
    };
    const g = () => {
        for (let A = 0; A < h; A++) {
            c[A] = Math.random() * _;
        }
    };
    const y = A => {
        let D = [[], [], []];
        let H = 1 - .125 * (f - 1);
        for (let B = 0; B < f; B++) {
            let T = .125 * (b ? B : f - B - 1);
            let q = (A - T) / H;
            q = Math.min(Math.max(q, 0), 1);
            for (let X = 0; X < h; X++) {
                let se = (q - c[X]) / (1 - _);
                se = Math.min(Math.max(se, 0), 1);
                D[f - B - 1][X] = le(se) * 100;
            }
        }
        return D;
    };
    const M = (A = [], D = []) => {
        for (var H = 0; H < f; H++) {
            var B = A[H];
            var T = D[H];
            var q = "";
            switch (w) {
                case "curve":
                    q += p ? b ? `M 100 0 H ${T[0]} C` : `M 0 0 H ${T[0]} C` : b ? `M 0 0 V ${T[0]} C` : `M 0 ${T[0]} C`;
                    break;
                case "step":
                    q += p ? b ? `M 100 0 H ${T[0]} L` : `M 0 0 H ${T[0]} L` : b ? `M 0 0 V ${T[0]} L` : `M 0 ${T[0]} L`;
                    break;
                case "zigzag":
                    q += p ? b ? `M 100 0 H ${T[0]} L` : `M 0 0 H ${T[0]} L` : b ? `M 0 0 V ${T[0]} L` : `M 0 ${T[0]} L`;
                    break;
                default:
                    q += p ? b ? `M 100 0 H ${T[0]} C` : `M 0 0 H ${T[0]} C` : b ? `M 0 0 V ${T[0]} C` : `M 0 ${T[0]} C`;
                    break;
            }
            for (var X = 0; X < h - 1; X++) {
                var se = (X + 1) / (h - 1) * 100;
                var Y = se - 1 / (h - 1) * 100 / 2;
                switch (w) {
                    case "curve":
                        q += p ? ` ${T[X]} ${Y} ${T[X + 1]} ${Y}  ${T[X + 1]} ${se}` : ` ${Y} ${T[X]} ${Y} ${T[X + 1]} ${se} ${T[X + 1]}`;
                        break;
                    case "step":
                        q += p ? ` ${T[X]} ${Y} ${T[X + 1]} ${Y}  ${T[X + 1]} ${se}` : ` ${Y} ${T[X]} ${Y} ${T[X + 1]} ${se} ${T[X + 1]}`;
                        break;
                    case "zigzag":
                        q += p ? ` ${T[X]} ${Y} ${T[X + 1]} ${se}` : ` ${Y} ${T[X]} ${se} ${T[X + 1]}`;
                        break;
                    default:
                        q += p ? ` ${T[X]} ${Y} ${T[X + 1]} ${Y}  ${T[X + 1]} ${se}` : ` ${Y} ${T[X]} ${Y} ${T[X + 1]} ${se} ${T[X + 1]}`;
                        break;
                }
            }
            q += p ? b ? " V 100 H 100" : " V 100 H 0" : b ? " V 100 H 0" : " V 0 H 0";
            B.setAttribute("d", q);
        }
    };
    k.subscribe(A => {
        let D = y(A);
        if (u.length > 0) {
            M(u, D);
        }
        if (A === 1) {
            t(5, b = !b);
            if (C) {
                C = false;
                k.set(0, {
                    duration: 0
                });
                k.set(1, {
                    duration: m
                });
            } else {
                t(4, o = false);
            }
        }
    });
    const N = () => {
        u = r.querySelectorAll(".shape-overlays__path");
        f = u.length;
        g();
        if (u.length > 0) {
            let A = y(A);
            M(u, A);
        }
    };
    Nt(() => {
        N();
    });
    function O(A) {
        ht[A ? "unshift" : "push"](() => {
            r = A;
            t(0, r);
        });
    }
    l.$$set = A => {
        if ("transition" in A) {
            t(4, o = A.transition);
        }
        if ("isOpen" in A) {
            t(5, b = A.isOpen);
        }
        if ("$$scope" in A) {
            t(7, a = A.$$scope);
        }
    };
    return [r, p, z, k, o, b, v, a, i, O];
}
class Ss extends pe {
    constructor(e) {
        super();
        _e(this, e, Jr, Xr, me, {
            transition: 4,
            isOpen: 5,
            animate: 6
        });
    }
    get transition() {
        return this.$$.ctx[4];
    }
    set transition(e) {
        this.$$set({
            transition: e
        });
        oi();
    }
    get isOpen() {
        return this.$$.ctx[5];
    }
    set isOpen(e) {
        this.$$set({
            isOpen: e
        });
        oi();
    }
    get animate() {
        return this.$$.ctx[6];
    }
}
function Kr(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    return {
        c() {
            e = L("div");
            t = L("div");
            n = L("span");
            n.textContent = "#";
            i = P();
            a = L("input");
            s(n, "class", "prefix svelte-1te2i8x");
            a.value = o = l[2].replace("#", "");
            s(a, "data-length", r = l[2].length);
            s(a, "maxlength", "6");
            s(a, "spellcheck", "false");
            s(a, "placeholder", "000000");
            s(a, "class", "svelte-1te2i8x");
            s(t, "class", "hex svelte-1te2i8x");
            s(e, "id", "picker");
            s(e, "class", "svelte-1te2i8x");
        },
        m(f, h) {
            R(f, e, h);
            d(e, t);
            d(t, n);
            d(t, i);
            d(t, a);
            l[7](a);
            if (!u) {
                c = [j(a, "input", l[3]), j(a, "paste", l[3])];
                u = true;
            }
        },
        p(f, [h]) {
            if (h & 4 && o !== (o = f[2].replace("#", "")) && a.value !== o) {
                a.value = o;
            }
            if (h & 4 && r !== (r = f[2].length)) {
                s(a, "data-length", r);
            }
        },
        i: G,
        o: G,
        d(f) {
            if (f) {
                S(e);
            }
            l[7](null);
            u = false;
            kt(c);
        }
    };
}
function Vr(l, e, t) {
    let a = G;
    let o = () => (a(), a = ps(r, b => t(2, b)), r);
    I(l, bs, b => t(6, b));
    l.$$.on_destroy.push(() => a());
    let {
        savedIro: r
    } = e;
    o();
    let {
        bgURL: u
    } = e;
    let c = null;
    let f = null;
    const h = () => {
        t(5, c = new il.ColorPicker("#picker", {
            layout: [{
                component: il.ui.Box
            }, {
                component: il.ui.Slider,
                options: {
                    sliderType: "hue"
                }
            }],
            display: "flex",
            width: 126,
            color: b,
            borderWidth: 0,
            borderColor: "var(--offblack)"
        }));
        c.forceUpdate();
        c.on("color:change", function (b) {
            r.set(b.hexString);
            u.set({
                type: "iro",
                url: b.hexString
            });
        });
    };
    const m = b => {
        let w = f.value.toLowerCase().replace(/[^A-Fa-f0-9]/g, "");
        t(1, f.value = w, f);
        if (w.length === 6) {
            t(5, c.color.hexString = "#" + w, c);
            console.log(w);
        }
    };
    Nt(() => {
        if (!c) {
            h();
        }
    });
    function _(b) {
        ht[b ? "unshift" : "push"](() => {
            f = b;
            t(1, f);
        });
    }
    l.$$set = b => {
        if ("savedIro" in b) {
            o(t(0, r = b.savedIro));
        }
        if ("bgURL" in b) {
            t(4, u = b.bgURL);
        }
    };
    l.$$.update = () => {
        if (l.$$.dirty & 96 && c && b) {
            t(5, c.state.layoutDirection = b === "desktop" ? "vertical" : "horizontal", c);
            c.forceUpdate();
        }
    };
    return [r, f, b, m, u, c, b, _];
}
class Qr extends pe {
    constructor(e) {
        super();
        _e(this, e, Vr, Kr, me, {
            savedIro: 0,
            bgURL: 4
        });
    }
}
function $r(l) {
    let e;
    let t;
    return {
        c() {
            e = Z("svg");
            t = Z("path");
            s(t, "d", "M19.1597 13.5394C19.1697 13.7094 19.1697 13.8894 19.1297 14.0594C19.1297 14.0694 19.1197 14.0794 19.1197 14.0794C19.0497 14.3794 18.8997 14.6594 18.6697 14.8994C17.9997 15.5694 16.9097 15.5694 16.2397 14.8994C15.5497 14.2094 14.5797 13.9494 13.6797 14.1194C13.4897 14.1594 13.3097 14.2094 13.1297 14.2794C12.7897 14.4194 12.4697 14.6294 12.1897 14.8994L9.50969 17.5894L6.25969 20.8394C5.14969 21.9494 5.14969 23.7694 6.25969 24.8794C7.33969 25.9594 9.21969 25.9594 10.2997 24.8794L12.7697 22.4094C13.8097 23.1194 14.9797 23.5994 16.2197 23.8094L12.7297 27.2994C11.4997 28.5294 9.88969 29.1394 8.27969 29.1394C6.66969 29.1394 5.05969 28.5294 3.82969 27.2994C1.37969 24.8494 1.37969 20.8494 3.82969 18.3994L9.75969 12.4694C10.9897 11.2394 12.5997 10.6294 14.2097 10.6294C15.8197 10.6294 17.4297 11.2394 18.6597 12.4694C18.7897 12.5994 18.8897 12.7494 18.9697 12.9094C18.9797 12.9294 18.9997 12.9594 19.0097 12.9794C19.0797 13.1394 19.1197 13.2994 19.1397 13.4594C19.1597 13.4894 19.1597 13.5194 19.1597 13.5394ZM28.1597 4.69937C26.9697 3.50937 25.3897 2.85938 23.7097 2.85938C22.0297 2.85938 20.4497 3.50937 19.2597 4.69937L15.7597 8.19938C16.9797 8.40938 18.1597 8.87938 19.2097 9.59938L21.6797 7.12938C22.7597 6.04938 24.6397 6.04938 25.7197 7.12938C26.2597 7.66938 26.5597 8.38937 26.5597 9.14937C26.5597 9.90937 26.2597 10.6294 25.7197 11.1694L24.6297 12.2594L19.7997 17.0994C18.7197 18.1794 16.8397 18.1794 15.7597 17.0994C15.0897 16.4294 13.9997 16.4294 13.3297 17.0994C12.6597 17.7694 12.6597 18.8594 13.3297 19.5294C14.5197 20.7194 16.0997 21.3694 17.7797 21.3694C19.4597 21.3694 21.0397 20.7194 22.2297 19.5294L27.0697 14.6894L28.1597 13.5994C29.3497 12.4094 29.9997 10.8294 29.9997 9.14937C29.9997 7.46938 29.3497 5.88937 28.1597 4.69937Z");
            s(t, "fill", l[0]);
            s(e, "style", l[1]);
            s(e, "width", "32");
            s(e, "height", "32");
            s(e, "viewBox", "0 0 32 32");
            s(e, "fill", "none");
            s(e, "xmlns", "http://www.w3.org/2000/svg");
            s(e, "class", "svelte-dglue3");
        },
        m(n, i) {
            R(n, e, i);
            d(e, t);
        },
        p(n, [i]) {
            if (i & 1) {
                s(t, "fill", n[0]);
            }
            if (i & 2) {
                s(e, "style", n[1]);
            }
        },
        i: G,
        o: G,
        d(n) {
            if (n) {
                S(e);
            }
        }
    };
}
function eo(l, e, t) {
    let {
        fill: n = "white"
    } = e;
    let {
        style: i = ""
    } = e;
    l.$$set = a => {
        if ("fill" in a) {
            t(0, n = a.fill);
        }
        if ("style" in a) {
            t(1, i = a.style);
        }
    };
    return [n, i];
}
class $n extends pe {
    constructor(e) {
        super();
        _e(this, e, eo, $r, me, {
            fill: 0,
            style: 1
        });
    }
}
function Ei(l, e, t) {
    const n = l.slice();
    n[16] = e[t];
    n[18] = t;
    return n;
}
function Fi(l, e, t) {
    const n = l.slice();
    n[19] = e[t];
    return n;
}
function Ti(l) {
    let e;
    let t;
    let n;
    let i;
    function a() {
        return l[11](l[19]);
    }
    return {
        c() {
            e = L("p");
            t = ne(l[19]);
            s(e, "class", "svelte-zpac5a");
            Le(e, "selected", l[19] === l[5]);
        },
        m(o, r) {
            R(o, e, r);
            d(e, t);
            if (!n) {
                i = j(e, "click", a);
                n = true;
            }
        },
        p(o, r) {
            l = o;
            if (r & 32) {
                Le(e, "selected", l[19] === l[5]);
            }
        },
        d(o) {
            if (o) {
                S(e);
            }
            n = false;
            i();
        }
    };
}
function to(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m = [];
    let _ = new Map();
    let b;
    let w;
    let C;
    let p;
    f = new $n({});
    let z = [...l[9](l[1], l[5]), ...(l[5] === "3D" ? Mn : gi)];
    const k = v => v[16];
    for (let v = 0; v < z.length; v += 1) {
        let g = Ei(l, z, v);
        let y = g[16];
        _.set(y, m[v] = xi(y, g));
    }
    return {
        c() {
            e = L("div");
            t = L("label");
            n = L("i");
            n.textContent = "file";
            i = P();
            a = L("input");
            r = P();
            u = L("label");
            c = L("i");
            Q(f.$$.fragment);
            h = P();
            for (let v = 0; v < m.length; v += 1) {
                m[v].c();
            }
            b = _l();
            s(n, "class", "kalicon notranslate solid variable svelte-zpac5a");
            s(a, "type", "file");
            s(a, "id", "uploadImage");
            s(a, "name", "fileList");
            s(a, "accept", ".jpg,.png,.mp4");
            s(a, "class", "svelte-zpac5a");
            s(t, "data-text", o = l[5] === "3D" ? yl.upload3D[l[3]] : yl.upload[l[3]]);
            s(t, "for", "uploadImage");
            s(t, "class", "svelte-zpac5a");
            s(c, "class", "svgIcon svelte-zpac5a");
            s(u, "data-text", "Load from URL");
            s(u, "class", "svelte-zpac5a");
            s(e, "class", "upload svelte-zpac5a");
        },
        m(v, g) {
            R(v, e, g);
            d(e, t);
            d(t, n);
            d(t, i);
            d(t, a);
            d(e, r);
            d(e, u);
            d(u, c);
            $(f, c, null);
            R(v, h, g);
            for (let y = 0; y < m.length; y += 1) {
                m[y].m(v, g);
            }
            R(v, b, g);
            w = true;
            if (!C) {
                p = [j(a, "change", l[8]), j(u, "click", l[10])];
                C = true;
            }
        },
        p(v, g) {
            if (!w || g & 40 && o !== (o = v[5] === "3D" ? yl.upload3D[v[3]] : yl.upload[v[3]])) {
                s(t, "data-text", o);
            }
            if (g & 739) {
                z = [...v[9](v[1], v[5]), ...(v[5] === "3D" ? Mn : gi)];
                for (let y = 0; y < m.length; y += 1) {
                    m[y].r();
                }
                m = jl(m, g, k, 1, v, z, _, b.parentNode, Gn, xi, b, Ei);
                for (let y = 0; y < m.length; y += 1) {
                    m[y].a();
                }
            }
        },
        i(v) {
            if (!w) {
                x(f.$$.fragment, v);
                for (let g = 0; g < z.length; g += 1) {
                    x(m[g]);
                }
                w = true;
            }
        },
        o(v) {
            W(f.$$.fragment, v);
            w = false;
        },
        d(v) {
            if (v) {
                S(e);
            }
            ee(f);
            if (v) {
                S(h);
            }
            for (let g = 0; g < m.length; g += 1) {
                m[g].d(v);
            }
            if (v) {
                S(b);
            }
            C = false;
            kt(p);
        }
    };
}
function lo(l) {
    let e;
    let t;
    e = new Qr({
        props: {
            savedIro: ei,
            bgURL: Ft
        }
    });
    return {
        c() {
            Q(e.$$.fragment);
        },
        m(n, i) {
            $(e, n, i);
            t = true;
        },
        p: G,
        i(n) {
            if (!t) {
                x(e.$$.fragment, n);
                t = true;
            }
        },
        o(n) {
            W(e.$$.fragment, n);
            t = false;
        },
        d(n) {
            ee(e, n);
        }
    };
}
function no(l) {
    let e;
    let t;
    let n;
    function i(...a) {
        return l[14](l[16], ...a);
    }
    return {
        c() {
            e = L("div");
            s(e, "class", "content color svelte-zpac5a");
            te(e, "--bgUrl", l[16].url);
            Le(e, "transparent", l[16].url.length > 7);
        },
        m(a, o) {
            R(a, e, o);
            if (!t) {
                n = j(e, "click", i);
                t = true;
            }
        },
        p(a, o) {
            l = a;
            if (o & 34) {
                te(e, "--bgUrl", l[16].url);
            }
            if (o & 546) {
                Le(e, "transparent", l[16].url.length > 7);
            }
        },
        d(a) {
            if (a) {
                S(e);
            }
            t = false;
            n();
        }
    };
}
function io(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    function o(...r) {
        return l[13](l[16], ...r);
    }
    return {
        c() {
            e = L("img");
            s(e, "class", "content svelte-zpac5a");
            if (!Ne(e.src, t = l[16].thumbnail ? l[16].thumbnail : l[16].url)) {
                s(e, "src", t);
            }
            s(e, "alt", n = "bg" + l[18]);
        },
        m(r, u) {
            R(r, e, u);
            if (!i) {
                a = j(e, "click", o);
                i = true;
            }
        },
        p(r, u) {
            l = r;
            if (u & 34 && !Ne(e.src, t = l[16].thumbnail ? l[16].thumbnail : l[16].url)) {
                s(e, "src", t);
            }
            if (u & 34 && n !== (n = "bg" + l[18])) {
                s(e, "alt", n);
            }
        },
        d(r) {
            if (r) {
                S(e);
            }
            i = false;
            a();
        }
    };
}
function so(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    function o(...r) {
        return l[12](l[16], ...r);
    }
    return {
        c() {
            e = L("video");
            s(e, "class", "content svelte-zpac5a");
            if (!Ne(e.src, t = l[16].url)) {
                s(e, "src", t);
            }
            s(e, "alt", n = "bg" + l[18]);
            e.autoplay = true;
            e.muted = true;
            e.playsInline = true;
            e.loop = true;
        },
        m(r, u) {
            R(r, e, u);
            if (!i) {
                a = j(e, "click", o);
                i = true;
            }
        },
        p(r, u) {
            l = r;
            if (u & 34 && !Ne(e.src, t = l[16].url)) {
                s(e, "src", t);
            }
            if (u & 34 && n !== (n = "bg" + l[18])) {
                s(e, "alt", n);
            }
        },
        d(r) {
            if (r) {
                S(e);
            }
            i = false;
            a();
        }
    };
}
function Bi(l) {
    let e;
    let t;
    let n;
    function i(...a) {
        return l[15](l[18], ...a);
    }
    return {
        c() {
            e = L("button");
            e.innerHTML = `<i class="kalicon notranslate fill small svelte-zpac5a">jellyfill</i> 
                    <i class="kalicon notranslate solid small svelte-zpac5a">minus</i>`;
            s(e, "class", "remove svelte-zpac5a");
        },
        m(a, o) {
            R(a, e, o);
            if (!t) {
                n = j(e, "click", i);
                t = true;
            }
        },
        p(a, o) {
            l = a;
        },
        d(a) {
            if (a) {
                S(e);
            }
            t = false;
            n();
        }
    };
}
function xi(l, e) {
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f = G;
    function h(w, C) {
        if (w[16].type === "video") {
            return so;
        }
        if (w[16].type === "img") {
            return io;
        }
        if (w[16].type === "color") {
            return no;
        }
    }
    let m = h(e);
    let _ = m && m(e);
    let b = e[16].uploaded && Bi(e);
    return {
        key: l,
        first: null,
        c() {
            t = L("div");
            n = L("div");
            if (_) {
                _.c();
            }
            i = P();
            if (b) {
                b.c();
            }
            a = P();
            s(n, "class", "contentContainer svelte-zpac5a");
            s(t, "class", o = "bg " + (e[0].url === e[16].url ? "selected" : "") + " svelte-zpac5a");
            te(t, "--bg-color", e[16].type === "color" ? e[16].url : "");
            s(t, "name", r = e[16].name);
            this.first = t;
        },
        m(w, C) {
            R(w, t, C);
            d(t, n);
            if (_) {
                _.m(n, null);
            }
            d(t, i);
            if (b) {
                b.m(t, null);
            }
            d(t, a);
        },
        p(w, C) {
            e = w;
            if (m === (m = h(e)) && _) {
                _.p(e, C);
            } else {
                if (_) {
                    _.d(1);
                }
                _ = m && m(e);
                if (_) {
                    _.c();
                    _.m(n, null);
                }
            }
            if (e[16].uploaded) {
                if (b) {
                    b.p(e, C);
                } else {
                    b = Bi(e);
                    b.c();
                    b.m(t, a);
                }
            } else if (b) {
                b.d(1);
                b = null;
            }
            if (C & 35 && o !== (o = "bg " + (e[0].url === e[16].url ? "selected" : "") + " svelte-zpac5a")) {
                s(t, "class", o);
            }
            if (C & 34) {
                te(t, "--bg-color", e[16].type === "color" ? e[16].url : "");
            }
            if (C & 34 && r !== (r = e[16].name)) {
                s(t, "name", r);
            }
        },
        r() {
            c = t.getBoundingClientRect();
        },
        f() {
            Wn(t);
            f();
        },
        a() {
            f();
            f = Nn(t, c, qn, {
                duration: 300
            });
        },
        i(w) {
            if (w) {
                if (!u) {
                    re(() => {
                        u = ue(t, We, {
                            duration: 250
                        });
                        u.start();
                    });
                }
            }
        },
        o: G,
        d(w) {
            if (w) {
                S(t);
            }
            if (_) {
                _.d();
            }
            if (b) {
                b.d();
            }
        }
    };
}
function ao(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m;
    let _;
    let b = ["2D", "3D", "Color"];
    let w = [];
    for (let k = 0; k < 3; k += 1) {
        w[k] = Ti(Fi(l, b, k));
    }
    const C = [lo, to];
    const p = [];
    u = l[5] === "Color" ? 0 : 1;
    c = p[u] = C[u](l);
    return {
        c() {
            e = L("container");
            t = L("section");
            n = L("div");
            for (let k = 0; k < 3; k += 1) {
                w[k].c();
            }
            o = P();
            r = L("div");
            c.c();
            s(n, "class", "tabs svelte-zpac5a");
            s(r, "class", "bg-list svelte-zpac5a");
            s(t, "class", "svelte-zpac5a");
            s(e, "data-text", m = yl.upload[l[3]]);
            s(e, "class", "svelte-zpac5a");
            Le(e, "drop_zone", l[2]);
        },
        m(k, v) {
            R(k, e, v);
            d(e, t);
            d(t, n);
            for (let g = 0; g < 3; g += 1) {
                w[g].m(n, null);
            }
            d(t, o);
            d(t, r);
            p[u].m(r, null);
            _ = true;
        },
        p(k, [v]) {
            l = k;
            if (v & 32) {
                b = ["2D", "3D", "Color"];
                let y;
                for (y = 0; y < 3; y += 1) {
                    const M = Fi(l, b, y);
                    if (w[y]) {
                        w[y].p(M, v);
                    } else {
                        w[y] = Ti(M);
                        w[y].c();
                        w[y].m(n, null);
                    }
                }
                for (; y < 3; y += 1) {
                    w[y].d(1);
                }
            }
            let g = u;
            u = l[5] === "Color" ? 0 : 1;
            if (u === g) {
                p[u].p(l, v);
            } else {
                bt();
                W(p[g], 1, 1, () => {
                    p[g] = null;
                });
                yt();
                c = p[u];
                if (c) {
                    c.p(l, v);
                } else {
                    c = p[u] = C[u](l);
                    c.c();
                }
                x(c, 1);
                c.m(r, null);
            }
            if (!_ || v & 8 && m !== (m = yl.upload[l[3]])) {
                s(e, "data-text", m);
            }
            if (v & 4) {
                Le(e, "drop_zone", l[2]);
            }
        },
        i(k) {
            if (!_) {
                re(() => {
                    if (a) {
                        a.end(1);
                    }
                    l[4].w > 600;
                    i = ue(n, Xt, {
                        x: 0,
                        y: l[4].w > 600 ? 20 : 0,
                        easing: le,
                        duration: 400,
                        delay: 400
                    });
                    i.start();
                });
                x(c);
                re(() => {
                    if (h) {
                        h.end(1);
                    }
                    f = ue(r, Xt, {
                        x: l[4].w > 600 ? 0 : 20,
                        y: l[4].w > 600 ? 20 : 0,
                        easing: le,
                        duration: 400,
                        delay: 200
                    });
                    f.start();
                });
                _ = true;
            }
        },
        o(k) {
            if (i) {
                i.invalidate();
            }
            a = Se(n, fe, {
                duration: l[4].w > 600 ? 200 : 0
            });
            W(c);
            if (f) {
                f.invalidate();
            }
            h = Se(r, fe, {
                duration: l[4].w > 600 ? 200 : 0
            });
            _ = false;
        },
        d(k) {
            if (k) {
                S(e);
            }
            jn(w, k);
            if (k && a) {
                a.end();
            }
            p[u].d();
            if (k && h) {
                h.end();
            }
        }
    };
}
const ei = J("#ffffff");
$e(ei, "savedIro", "#ffffff");
et(ei, "savedIro");
const Tl = J("2D");
const Hs = l => {
    for (var e = 0; e < l.length; e++) {
        let n = l[e];
        let i = _s(n);
        if (!i) {
            console.log("File format not supported.");
            Ll.set({
                type: "error",
                text: "Backgrounds can only be .jpg, .png, or .mp4"
            });
            return;
        }
        const a = URL.createObjectURL(n);
        var t = new FileReader();
        t.onload = function (o) {
            let r = o.target.result;
            Ft.set({
                type: i,
                data: r,
                name: n.name,
                pano: E(Tl) === "3D",
                url: a
            });
            al.set([{
                type: i,
                data: r,
                name: n.name,
                pano: E(Tl) === "3D",
                url: a,
                uploaded: true
            }, ...E(al)]);
        };
        t.readAsDataURL(n);
    }
};
function ro(l, e, t) {
    let i;
    I(l, Ft, v => t(0, v));
    I(l, al, v => t(1, i = v));
    I(l, Cl, v => t(2, v));
    I(l, Vt, v => t(3, v));
    I(l, ut, v => t(4, v));
    I(l, Tl, v => t(5, v));
    l.$$.on_destroy.push(() => G());
    const f = v => {
        let g = i;
        g.splice(v, 1);
        if (v > -1) {
            Ce(al, i = g, i);
        }
    };
    const h = v => {
        if (v.url !== v.url) {
            Ft.set({
                type: v.type,
                data: v.data,
                url: v.url,
                sea: v.sea,
                pano: v.pano,
                light: v.light
            });
        }
    };
    return [v, i, v, v, v, v, f, h, v => {
        Hs(v.target.files);
    }, (v, g) => {
        let y = [];
        v.forEach(M => {
            if (M.pano && g === "3D" || !M.pano && g === "2D") {
                y.push(M);
            }
        });
        return y;
    }, () => {
        let v = prompt("Enter the URL to a .jpg or .png background (ﾉ◕ヮ◕)");
        if (!v) {
            return;
        }
        let g = {
            type: "img",
            pano: E(Tl) === "3D",
            url: v,
            uploaded: Date.now()
        };
        Ft.set(g);
        al.set([g, ...E(al)]);
    }, v => {
        Tl.set(v);
    }, (v, g) => {
        g.preventDefault;
        h(v);
    }, (v, g) => {
        g.preventDefault;
        h(v);
    }, (v, g) => {
        g.preventDefault;
        h(v);
    }, (v, g) => {
        g.preventDefault;
        f(v);
    }];
}
class oo extends pe {
    constructor(e) {
        super();
        _e(this, e, ro, ao, me, {});
    }
}
function Oi(l, e, t) {
    const n = l.slice();
    n[14] = e[t];
    n[16] = t;
    return n;
}
function uo(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    function o() {
        return l[11](l[14]);
    }
    return {
        c() {
            e = L("img");
            s(e, "class", "content svelte-se6fsr");
            if (!Ne(e.src, t = l[14].url)) {
                s(e, "src", t);
            }
            s(e, "alt", n = "uploaded sticker" + l[16]);
        },
        m(r, u) {
            R(r, e, u);
            if (!i) {
                a = j(e, "click", o);
                i = true;
            }
        },
        p(r, u) {
            l = r;
            if (u & 1 && !Ne(e.src, t = l[14].url)) {
                s(e, "src", t);
            }
            if (u & 1 && n !== (n = "uploaded sticker" + l[16])) {
                s(e, "alt", n);
            }
        },
        d(r) {
            if (r) {
                S(e);
            }
            i = false;
            a();
        }
    };
}
function co(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    function o() {
        return l[10](l[14]);
    }
    return {
        c() {
            e = L("video");
            s(e, "class", "content svelte-se6fsr");
            if (!Ne(e.src, t = l[14].url)) {
                s(e, "src", t);
            }
            s(e, "alt", n = "uploaded sticker" + l[16]);
            e.autoplay = true;
            e.muted = true;
            e.playsInline = true;
            e.loop = true;
        },
        m(r, u) {
            R(r, e, u);
            if (!i) {
                a = j(e, "click", o);
                i = true;
            }
        },
        p(r, u) {
            l = r;
            if (u & 1 && !Ne(e.src, t = l[14].url)) {
                s(e, "src", t);
            }
            if (u & 1 && n !== (n = "uploaded sticker" + l[16])) {
                s(e, "alt", n);
            }
        },
        d(r) {
            if (r) {
                S(e);
            }
            i = false;
            a();
        }
    };
}
function Ui(l) {
    let e;
    let t;
    let n;
    function i() {
        return l[12](l[14]);
    }
    return {
        c() {
            e = L("button");
            e.innerHTML = `<i class="kalicon notranslate fill small svelte-se6fsr">jellyfill</i> 
          <i class="kalicon notranslate solid small svelte-se6fsr">minus</i>`;
            s(e, "class", "remove svelte-se6fsr");
        },
        m(a, o) {
            R(a, e, o);
            if (!t) {
                n = j(e, "click", i);
                t = true;
            }
        },
        p(a, o) {
            l = a;
        },
        d(a) {
            if (a) {
                S(e);
            }
            t = false;
            n();
        }
    };
}
function ji(l, e) {
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c = G;
    let h = e[14].type === "video" ? co : uo;
    let m = h(e);
    let _ = e[14].uploaded && Ui(e);
    return {
        key: l,
        first: null,
        c() {
            t = L("div");
            n = L("div");
            m.c();
            i = P();
            if (_) {
                _.c();
            }
            a = P();
            s(n, "class", "contentContainer svelte-se6fsr");
            s(t, "class", o = "sticker " + (e[1].length > 0 && e[7](e[14].url, e[1], "url") !== null ? "selected" : "") + " svelte-se6fsr");
            this.first = t;
        },
        m(b, w) {
            R(b, t, w);
            d(t, n);
            m.m(n, null);
            d(t, i);
            if (_) {
                _.m(t, null);
            }
            d(t, a);
        },
        p(b, w) {
            e = b;
            if (h === (h = e[14].type === "video" ? co : uo) && m) {
                m.p(e, w);
            } else {
                m.d(1);
                m = h(e);
                if (m) {
                    m.c();
                    m.m(n, null);
                }
            }
            if (e[14].uploaded) {
                if (_) {
                    _.p(e, w);
                } else {
                    _ = Ui(e);
                    _.c();
                    _.m(t, a);
                }
            } else if (_) {
                _.d(1);
                _ = null;
            }
            if (w & 3 && o !== (o = "sticker " + (e[1].length > 0 && e[7](e[14].url, e[1], "url") !== null ? "selected" : "") + " svelte-se6fsr")) {
                s(t, "class", o);
            }
        },
        r() {
            u = t.getBoundingClientRect();
        },
        f() {
            Wn(t);
            c();
        },
        a() {
            c();
            c = Nn(t, u, qn, {
                duration: 300
            });
        },
        i(b) {
            if (b) {
                if (!r) {
                    re(() => {
                        r = ue(t, We, {
                            duration: 250
                        });
                        r.start();
                    });
                }
            }
        },
        o: G,
        d(b) {
            if (b) {
                S(t);
            }
            m.d();
            if (_) {
                _.d();
            }
        }
    };
}
function fo(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m;
    let _;
    let b = [];
    let w = new Map();
    let C;
    let p;
    let z;
    let k;
    let v;
    let g;
    m = new $n({});
    let y = [...l[0], ...Si];
    const M = N => N[14];
    for (let N = 0; N < y.length; N += 1) {
        let O = Oi(l, y, N);
        let A = O[14];
        w.set(A, b[N] = ji(A, O));
    }
    return {
        c() {
            e = L("container");
            t = L("div");
            n = L("div");
            i = L("label");
            a = L("i");
            a.textContent = "file";
            o = P();
            r = L("input");
            c = P();
            f = L("label");
            h = L("i");
            Q(m.$$.fragment);
            _ = P();
            for (let N = 0; N < b.length; N += 1) {
                b[N].c();
            }
            s(a, "class", "kalicon notranslate solid variable svelte-se6fsr");
            s(r, "type", "file");
            s(r, "id", "uploadImage");
            s(r, "name", "fileList");
            s(r, "accept", ".jpg,.png,.gif,.mp4");
            s(r, "class", "svelte-se6fsr");
            s(i, "data-text", u = Jl.upload[l[3]]);
            s(i, "for", "uploadImage");
            s(i, "class", "svelte-se6fsr");
            s(h, "class", "svgIcon svelte-se6fsr");
            s(f, "data-text", "Load from URL");
            s(f, "class", "svelte-se6fsr");
            s(n, "class", "upload svelte-se6fsr");
            s(t, "class", "sticker-list svelte-se6fsr");
            s(e, "data-text", z = Jl.upload[l[3]]);
            s(e, "class", "svelte-se6fsr");
            Le(e, "drop_zone", l[2]);
        },
        m(N, O) {
            R(N, e, O);
            d(e, t);
            d(t, n);
            d(n, i);
            d(i, a);
            d(i, o);
            d(i, r);
            d(n, c);
            d(n, f);
            d(f, h);
            $(m, h, null);
            d(t, _);
            for (let A = 0; A < b.length; A += 1) {
                b[A].m(t, null);
            }
            k = true;
            if (!v) {
                g = [j(r, "change", l[5]), j(f, "click", l[9])];
                v = true;
            }
        },
        p(N, [O]) {
            l = N;
            if (!k || O & 8 && u !== (u = Jl.upload[l[3]])) {
                s(i, "data-text", u);
            }
            if (O & 451) {
                y = [...l[0], ...Si];
                for (let A = 0; A < b.length; A += 1) {
                    b[A].r();
                }
                b = jl(b, O, M, 1, l, y, w, t, Gn, ji, null, Oi);
                for (let A = 0; A < b.length; A += 1) {
                    b[A].a();
                }
            }
            if (!k || O & 8 && z !== (z = Jl.upload[l[3]])) {
                s(e, "data-text", z);
            }
            if (O & 4) {
                Le(e, "drop_zone", l[2]);
            }
        },
        i(N) {
            if (!k) {
                x(m.$$.fragment, N);
                for (let O = 0; O < y.length; O += 1) {
                    x(b[O]);
                }
                re(() => {
                    if (p) {
                        p.end(1);
                    }
                    C = ue(t, Xt, {
                        x: l[4].w > 600 ? 0 : 20,
                        y: l[4].w > 600 ? 20 : 0,
                        easing: le,
                        duration: 400,
                        delay: 200
                    });
                    C.start();
                });
                k = true;
            }
        },
        o(N) {
            W(m.$$.fragment, N);
            if (C) {
                C.invalidate();
            }
            p = Se(t, fe, {
                duration: l[4].w > 600 ? 200 : 0
            });
            k = false;
        },
        d(N) {
            if (N) {
                S(e);
            }
            ee(m);
            for (let O = 0; O < b.length; O += 1) {
                b[O].d();
            }
            if (N && p) {
                p.end();
            }
            v = false;
            kt(g);
        }
    };
}
const Ds = l => {
    for (var e = 0; e < l.length; e++) {
        let t = _s(l[e]);
        if (!t) {
            Ll.set({
                type: "error",
                text: "Stickers can only be .jpg, .png, .gif or .mp4"
            });
            return;
        }
        const n = URL.createObjectURL(l[e]);
        let i = new FileReader();
        i.onload = function (a) {
            let o = a.target.result;
            let r = {
                url: n,
                data: o,
                default: .5,
                type: t,
                uploaded: true,
                zIndex: E(ul).length + 1
            };
            hl.set([r, ...E(hl)]);
            An(r);
        };
        i.readAsDataURL(l[e]);
    }
};
const An = l => {
    ul.set([...E(ul), {
        id: vs(6, "0123456789"),
        url: l.url,
        type: l.type ? l.type : l.url.includes(".mp4") ? "video" : "img",
        default: l.default,
        zIndex: E(ul).length + 1
    }]);
};
function mo(l, e, t) {
    let n;
    I(l, hl, p => t(0, n = p));
    I(l, ul, p => t(1, p));
    I(l, Cl, p => t(2, p));
    I(l, Vt, p => t(3, p));
    I(l, ut, p => t(4, p));
    const u = p => {
        Ds(p.target.files);
    };
    const c = p => {
        let z = f(p, n, "url");
        if (z !== null) {
            let k = n;
            k.splice(z, 1);
            if (z > -1) {
                Ce(hl, n = k, n);
            }
        }
        h(p);
        return z;
    };
    const f = (p, z, k) => {
        let v = null;
        z.forEach((g, y) => {
            if (g[k].includes(p)) {
                v = y;
                return;
            }
        });
        return v;
    };
    const h = p => {
        let z = f(p, p, "url");
        if (z !== null) {
            p.splice(z, 1);
            if (z > -1) {
                ul.set(p);
            }
        }
        return z;
    };
    const m = p => {
        if (h(p.url) === null) {
            An(p);
        }
    };
    return [n, p, p, p, p, u, c, f, m, () => {
        let p = prompt("Enter the URL to a .jpg, .png, .gif or .mp4 sticker (ﾉ◕ヮ◕)");
        if (!p) {
            return;
        }
        let z = {
            url: p,
            default: .5,
            type: p.includes(".mp4") ? "video" : "img",
            uploaded: Date.now(),
            zIndex: p.length + 1
        };
        hl.set([z, ...n]);
        An(z);
    }, p => {
        m(p);
    }, p => {
        m(p);
    }, p => {
        c(p.url);
    }];
}
class ho extends pe {
    constructor(e) {
        super();
        _e(this, e, mo, fo, me, {});
    }
}
function go(l) {
    let e;
    let t;
    return {
        c: G,
        m(n, i) {
            if (!e) {
                t = [j(window, "dragenter", l[0]), j(window, "dragleave", l[1]), j(window, "drop", l[2]), j(window, "dragover", l[0])];
                e = true;
            }
        },
        p: G,
        i: G,
        o: G,
        d(n) {
            e = false;
            kt(t);
        }
    };
}
let Cl = J(false);
function po(l, e, t) {
    I(l, V, c => t(4, c));
    let {
        selected: i
    } = e;
    const a = c => {
        c.preventDefault();
        c.stopPropagation();
    };
    const o = c => {
        a(c);
        c.dataTransfer.dropEffect = "copy";
        Cl.set(true);
    };
    const r = c => {
        a(c);
        Cl.set(false);
    };
    const u = c => {
        a(c);
        Cl.set(false);
        let f = c.dataTransfer.files;
        if (!!f[0]) {
            if (f[0].name.includes(".vrm") && !c.user.destroying) {
                Is(f);
                return;
            }
            if (i === "bg") {
                Hs(f);
                return;
            }
            if (i !== "bg") {
                Ds(f);
                return;
            }
        }
    };
    l.$$set = c => {
        if ("selected" in c) {
            t(3, i = c.selected);
        }
    };
    return [o, r, u, i];
}
class _o extends pe {
    constructor(e) {
        super();
        _e(this, e, po, go, me, {
            selected: 3
        });
    }
}
function Wi(l, e, t) {
    const n = l.slice();
    n[16] = e[t];
    n[18] = t;
    return n;
}
function vo(l) {
    let e;
    let t = l[16].name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "").charAt(0) + "";
    let n;
    let i;
    let a;
    function o() {
        return l[13](l[16]);
    }
    return {
        c() {
            e = L("div");
            n = ne(t);
            s(e, "class", "noicon svelte-wowwl9");
        },
        m(r, u) {
            R(r, e, u);
            d(e, n);
            if (!i) {
                a = j(e, "click", o);
                i = true;
            }
        },
        p(r, u) {
            l = r;
            if (u & 2 && t !== (t = l[16].name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "").charAt(0) + "")) {
                Re(n, t);
            }
        },
        d(r) {
            if (r) {
                S(e);
            }
            i = false;
            a();
        }
    };
}
function bo(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    function o() {
        return l[12](l[16]);
    }
    return {
        c() {
            e = L("img");
            if (!Ne(e.src, t = l[16].url.icon)) {
                s(e, "src", t);
            }
            s(e, "class", "noBorder svelte-wowwl9");
            s(e, "alt", n = l[16].name);
        },
        m(r, u) {
            R(r, e, u);
            if (!i) {
                a = j(e, "click", o);
                i = true;
            }
        },
        p(r, u) {
            l = r;
            if (u & 2 && !Ne(e.src, t = l[16].url.icon)) {
                s(e, "src", t);
            }
            if (u & 2 && n !== (n = l[16].name)) {
                s(e, "alt", n);
            }
        },
        d(r) {
            if (r) {
                S(e);
            }
            i = false;
            a();
        }
    };
}
function yo(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    function o() {
        return l[11](l[16]);
    }
    return {
        c() {
            e = L("img");
            if (!Ne(e.src, t = l[16].icon)) {
                s(e, "src", t);
            }
            s(e, "alt", n = l[16].name);
            s(e, "class", "svelte-wowwl9");
        },
        m(r, u) {
            R(r, e, u);
            if (!i) {
                a = j(e, "click", o);
                i = true;
            }
        },
        p(r, u) {
            l = r;
            if (u & 2 && !Ne(e.src, t = l[16].icon)) {
                s(e, "src", t);
            }
            if (u & 2 && n !== (n = l[16].name)) {
                s(e, "alt", n);
            }
        },
        d(r) {
            if (r) {
                S(e);
            }
            i = false;
            a();
        }
    };
}
function Ni(l) {
    let e;
    let t;
    let n;
    function i(...a) {
        return l[14](l[18], ...a);
    }
    return {
        c() {
            e = L("button");
            e.innerHTML = `<i class="kalicon notranslate fill small svelte-wowwl9">jellyfill</i> 
              <i class="kalicon notranslate solid small svelte-wowwl9">minus</i>`;
            s(e, "class", "remove svelte-wowwl9");
        },
        m(a, o) {
            R(a, e, o);
            if (!t) {
                n = j(e, "click", i);
                t = true;
            }
        },
        p(a, o) {
            l = a;
        },
        d(a) {
            if (a) {
                S(e);
            }
            t = false;
            n();
        }
    };
}
function qi(l, e) {
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c = G;
    let h = e[16].icon ? yo : e[16].url.icon ? bo : vo;
    let m = h(e);
    let _ = e[16].uploaded && Ni(e);
    return {
        key: l,
        first: null,
        c() {
            t = L("div");
            m.c();
            n = P();
            if (_) {
                _.c();
            }
            i = P();
            s(t, "class", a = "model " + (typeof e[0] == "string" && e[0] === e[16].url || typeof e[0] == "object" && e[8](e[16]) ? "selected" : "") + " svelte-wowwl9");
            s(t, "name", o = e[16].name);
            te(t, "--color", e[16].color ? e[16].color : "");
            this.first = t;
        },
        m(b, w) {
            R(b, t, w);
            m.m(t, null);
            d(t, n);
            if (_) {
                _.m(t, null);
            }
            d(t, i);
        },
        p(b, w) {
            e = b;
            if (h === (h = e[16].icon ? yo : e[16].url.icon ? bo : vo) && m) {
                m.p(e, w);
            } else {
                m.d(1);
                m = h(e);
                if (m) {
                    m.c();
                    m.m(t, n);
                }
            }
            if (e[16].uploaded) {
                if (_) {
                    _.p(e, w);
                } else {
                    _ = Ni(e);
                    _.c();
                    _.m(t, i);
                }
            } else if (_) {
                _.d(1);
                _ = null;
            }
            if (w & 3 && a !== (a = "model " + (typeof e[0] == "string" && e[0] === e[16].url || typeof e[0] == "object" && e[8](e[16]) ? "selected" : "") + " svelte-wowwl9")) {
                s(t, "class", a);
            }
            if (w & 2 && o !== (o = e[16].name)) {
                s(t, "name", o);
            }
            if (w & 2) {
                te(t, "--color", e[16].color ? e[16].color : "");
            }
        },
        r() {
            u = t.getBoundingClientRect();
        },
        f() {
            Wn(t);
            c();
        },
        a() {
            c();
            c = Nn(t, u, qn, {
                duration: 300
            });
        },
        i(b) {
            if (b) {
                if (!r) {
                    re(() => {
                        r = ue(t, We, {
                            duration: 250
                        });
                        r.start();
                    });
                }
            }
        },
        o: G,
        d(b) {
            if (b) {
                S(t);
            }
            m.d();
            if (_) {
                _.d();
            }
        }
    };
}
function ko(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m;
    let _;
    let b;
    let w;
    let C;
    let p;
    let z;
    let k = [];
    let v = new Map();
    let g;
    let y;
    let M;
    let N;
    let O;
    let A;
    p = new $n({});
    let D = [...l[1], ...Yt];
    const H = B => B[16];
    for (let B = 0; B < D.length; B += 1) {
        let T = Wi(l, D, B);
        let q = T[16];
        v.set(q, k[B] = qi(q, T));
    }
    return {
        c() {
            e = L("container");
            t = L("div");
            t.innerHTML = `<p class="svelte-wowwl9"><a href="https://kalidoface.com" class="svelte-wowwl9">Live2D</a></p> 
      <p class="selected svelte-wowwl9"><a href="https://3d.kalidoface.com" class="svelte-wowwl9">3D VRM</a></p>`;
            a = P();
            o = L("section");
            r = L("div");
            u = L("div");
            c = L("label");
            f = L("i");
            f.textContent = "file";
            h = P();
            m = L("input");
            b = P();
            w = L("label");
            C = L("i");
            Q(p.$$.fragment);
            z = P();
            for (let B = 0; B < k.length; B += 1) {
                k[B].c();
            }
            s(t, "class", "tabs svelte-wowwl9");
            s(f, "class", "kalicon notranslate solid variable svelte-wowwl9");
            s(m, "type", "file");
            s(m, "id", "uploadLive2D");
            s(m, "name", "fileList");
            s(m, "accept", ".vrm");
            s(m, "class", "svelte-wowwl9");
            s(c, "data-text", _ = Xl.upload[l[3]]);
            s(c, "for", "uploadLive2D");
            s(c, "class", "svelte-wowwl9");
            s(C, "class", "svgIcon svelte-wowwl9");
            s(w, "data-text", "Load from URL");
            s(w, "class", "svelte-wowwl9");
            s(u, "class", "upload svelte-wowwl9");
            s(r, "class", "model-list svelte-wowwl9");
            s(o, "class", "svelte-wowwl9");
            s(e, "data-text", M = Xl.upload[l[3]]);
            s(e, "class", "svelte-wowwl9");
            Le(e, "drop_zone", l[2]);
        },
        m(B, T) {
            R(B, e, T);
            d(e, t);
            d(e, a);
            d(e, o);
            d(o, r);
            d(r, u);
            d(u, c);
            d(c, f);
            d(c, h);
            d(c, m);
            l[10](m);
            d(u, b);
            d(u, w);
            d(w, C);
            $(p, C, null);
            d(r, z);
            for (let q = 0; q < k.length; q += 1) {
                k[q].m(r, null);
            }
            N = true;
            if (!O) {
                A = [j(m, "change", l[7]), j(w, "click", l[9])];
                O = true;
            }
        },
        p(B, [T]) {
            l = B;
            if (!N || T & 8 && _ !== (_ = Xl.upload[l[3]])) {
                s(c, "data-text", _);
            }
            if (T & 355) {
                D = [...l[1], ...Yt];
                for (let q = 0; q < k.length; q += 1) {
                    k[q].r();
                }
                k = jl(k, T, H, 1, l, D, v, r, Gn, qi, null, Wi);
                for (let q = 0; q < k.length; q += 1) {
                    k[q].a();
                }
            }
            if (!N || T & 8 && M !== (M = Xl.upload[l[3]])) {
                s(e, "data-text", M);
            }
            if (T & 4) {
                Le(e, "drop_zone", l[2]);
            }
        },
        i(B) {
            if (!N) {
                re(() => {
                    if (i) {
                        i.end(1);
                    }
                    l[4].w > 600;
                    n = ue(t, Xt, {
                        x: 0,
                        y: l[4].w > 600 ? 20 : 0,
                        easing: le,
                        duration: 400,
                        delay: 400
                    });
                    n.start();
                });
                x(p.$$.fragment, B);
                for (let T = 0; T < D.length; T += 1) {
                    x(k[T]);
                }
                re(() => {
                    if (y) {
                        y.end(1);
                    }
                    g = ue(r, Xt, {
                        x: l[4].w > 600 ? 0 : 20,
                        y: l[4].w > 600 ? 20 : 0,
                        easing: le,
                        duration: 400,
                        delay: 200
                    });
                    g.start();
                });
                N = true;
            }
        },
        o(B) {
            if (n) {
                n.invalidate();
            }
            i = Se(t, fe, {
                duration: l[4].w > 600 ? 200 : 0
            });
            W(p.$$.fragment, B);
            if (g) {
                g.invalidate();
            }
            y = Se(r, fe, {
                duration: l[4].w > 600 ? 200 : 0
            });
            N = false;
        },
        d(B) {
            if (B) {
                S(e);
            }
            if (B && i) {
                i.end();
            }
            l[10](null);
            ee(p);
            for (let T = 0; T < k.length; T += 1) {
                k[T].d();
            }
            if (B && y) {
                y.end();
            }
            O = false;
            kt(A);
        }
    };
}
const Is = async l => {
    if (!l) {
        return;
    }
    const e = l[0];
    if (!e) {
        return;
    }
    const t = new Blob([e], {
        type: "application/octet-stream"
    });
    const n = URL.createObjectURL(t);
    var i = new FileReader();
    i.onload = function (a) {
        let o = Date.now();
        let r = a.target.result;
        vt.set([{
            name: e.name,
            data: r,
            type: "blob",
            url: n,
            uploaded: o,
            icon: null,
            color: Cs()
        }, ...E(vt)]);
        Ut.set({
            type: "blob",
            name: e.name,
            uploaded: o,
            url: n
        });
    };
    i.readAsDataURL(e);
};
function wo(l, e, t) {
    let i;
    I(l, Ut, k => t(0, k));
    I(l, vt, k => t(1, i = k));
    I(l, V, k => t(15, k));
    I(l, Cl, k => t(2, k));
    I(l, Vt, k => t(3, k));
    I(l, ut, k => t(4, k));
    const c = k => {
        if (!((k.uploaded && k.uploaded ? k.uploaded === k.uploaded : k.url && k.url ? k.url === k.url : false) || k.user.destroying)) {
            Ut.set({
                type: k.type,
                name: k.name,
                uploaded: k.uploaded,
                url: k.url
            });
        }
    };
    const f = k => {
        let v = i;
        v.splice(k, 1);
        if (k > -1) {
            Ce(vt, i = v, i);
        }
    };
    const h = k => {
        Is(k.target.files);
    };
    const m = k => k.uploaded && k.uploaded ? k.uploaded === k.uploaded : k.url && k.url ? k.url === k.url : false;
    const _ = () => {
        let k = prompt("Enter the URL to your .vrm model ヾ(･ω･*)ﾉ");
        if (!!k) {
            Ut.set({
                type: "url",
                uploaded: Date.now(),
                name: null,
                url: k
            });
        }
    };
    function b(k) {
        ht[k ? "unshift" : "push"](() => {});
    }
    return [k, i, k, k, k, c, f, h, m, _, b, k => {
        c(k);
    }, k => {
        c(k);
    }, k => {
        c(k);
    }, (k, v) => {
        v.preventDefault;
        f(k);
    }];
}
class Lo extends pe {
    constructor(e) {
        super();
        _e(this, e, wo, ko, me, {});
    }
}
function Co(l) {
    let e;
    let t = Mt.label.disconnected[l[6]] + "";
    let n;
    let i;
    let a;
    let o = Mt.disconnected[l[6]] + "";
    let r;
    let u;
    let c;
    return {
        c() {
            e = L("label");
            n = ne(t);
            i = P();
            a = L("button");
            r = ne(o);
            s(e, "class", "svelte-1ax078w");
            s(a, "class", "reconnect svelte-1ax078w");
        },
        m(f, h) {
            R(f, e, h);
            d(e, n);
            R(f, i, h);
            R(f, a, h);
            d(a, r);
            if (!u) {
                c = j(a, "click", l[13]);
                u = true;
            }
        },
        p(f, h) {
            if (h & 64 && t !== (t = Mt.label.disconnected[f[6]] + "")) {
                Re(n, t);
            }
            if (h & 64 && o !== (o = Mt.disconnected[f[6]] + "")) {
                Re(r, o);
            }
        },
        d(f) {
            if (f) {
                S(e);
            }
            if (f) {
                S(i);
            }
            if (f) {
                S(a);
            }
            u = false;
            c();
        }
    };
}
function zo(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m;
    let _;
    let b;
    let w = !l[3] && Gi(l);
    function C(v, g) {
        if (v[4] === "connecting") {
            return Po;
        }
        if (v[4] === "connected") {
            return Mo;
        }
    }
    let p = C(l);
    let z = p && p(l);
    let k = l[4] === "connected" && Zi();
    return {
        c() {
            if (w) {
                w.c();
            }
            e = P();
            t = L("div");
            n = P();
            if (z) {
                z.c();
            }
            i = P();
            a = L("button");
            o = L("i");
            o.textContent = "jellyfill";
            r = P();
            u = L("i");
            c = ne("phone");
            h = P();
            if (k) {
                k.c();
            }
            s(t, "class", "cover svelte-1ax078w");
            s(o, "class", "kalicon notranslate fill svelte-1ax078w");
            s(u, "class", f = "kalicon notranslate solid variable " + (l[3] ? "end" : "") + " svelte-1ax078w");
            s(a, "class", m = "call-button no_highlights " + (l[2].length === 6 && l[2].match(/^[0-9]+$/) || l[3] ? "" : "disabled") + " svelte-1ax078w");
        },
        m(v, g) {
            if (w) {
                w.m(v, g);
            }
            R(v, e, g);
            R(v, t, g);
            R(v, n, g);
            if (z) {
                z.m(v, g);
            }
            R(v, i, g);
            R(v, a, g);
            d(a, o);
            d(a, r);
            d(a, u);
            d(u, c);
            d(a, h);
            if (k) {
                k.m(a, null);
            }
            if (!_) {
                b = j(a, "click", l[9]);
                _ = true;
            }
        },
        p(v, g) {
            if (v[3]) {
                if (w) {
                    w.d(1);
                    w = null;
                }
            } else if (w) {
                w.p(v, g);
            } else {
                w = Gi(v);
                w.c();
                w.m(e.parentNode, e);
            }
            if (p === (p = C(v)) && z) {
                z.p(v, g);
            } else {
                if (z) {
                    z.d(1);
                }
                z = p && p(v);
                if (z) {
                    z.c();
                    z.m(i.parentNode, i);
                }
            }
            if (g & 8 && f !== (f = "kalicon notranslate solid variable " + (v[3] ? "end" : "") + " svelte-1ax078w")) {
                s(u, "class", f);
            }
            if (v[4] === "connected") {
                if (!k) {
                    k = Zi();
                    k.c();
                    k.m(a, null);
                }
            } else if (k) {
                k.d(1);
                k = null;
            }
            if (g & 12 && m !== (m = "call-button no_highlights " + (v[2].length === 6 && v[2].match(/^[0-9]+$/) || v[3] ? "" : "disabled") + " svelte-1ax078w")) {
                s(a, "class", m);
            }
        },
        d(v) {
            if (w) {
                w.d(v);
            }
            if (v) {
                S(e);
            }
            if (v) {
                S(t);
            }
            if (v) {
                S(n);
            }
            if (z) {
                z.d(v);
            }
            if (v) {
                S(i);
            }
            if (v) {
                S(a);
            }
            if (k) {
                k.d();
            }
            _ = false;
            b();
        }
    };
}
function Gi(l) {
    let e;
    let t = Mt.label.default[l[6]] + "";
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    return {
        c() {
            e = L("label");
            n = ne(t);
            i = P();
            a = L("input");
            s(e, "class", "svelte-1ax078w");
            s(a, "data-length", o = l[2].length);
            s(a, "maxlength", "6");
            s(a, "pattern", "^[0-9]*$");
            s(a, "spellcheck", "false");
            s(a, "onkeypress", "return /[0-9]/i.test(event.key)");
            s(a, "type", "tel");
            s(a, "placeholder", "000000");
            s(a, "class", "svelte-1ax078w");
        },
        m(c, f) {
            R(c, e, f);
            d(e, n);
            R(c, i, f);
            R(c, a, f);
            Ct(a, l[2]);
            if (!r) {
                u = j(a, "input", l[12]);
                r = true;
            }
        },
        p(c, f) {
            if (f & 64 && t !== (t = Mt.label.default[c[6]] + "")) {
                Re(n, t);
            }
            if (f & 4 && o !== (o = c[2].length)) {
                s(a, "data-length", o);
            }
            if (f & 4) {
                Ct(a, c[2]);
            }
        },
        d(c) {
            if (c) {
                S(e);
            }
            if (c) {
                S(i);
            }
            if (c) {
                S(a);
            }
            r = false;
            u();
        }
    };
}
function Mo(l) {
    let e;
    let t = Mt.label.connected[l[6]] + "";
    let n;
    let i;
    let a;
    let o;
    let r = l[3].peer + "";
    let u;
    let c;
    let f;
    let h;
    return {
        c() {
            e = L("label");
            n = ne(t);
            i = P();
            a = L("b");
            o = ne("#");
            u = ne(r);
            c = P();
            f = L("h4");
            h = ne(l[7]);
            s(a, "class", "svelte-1ax078w");
            s(e, "class", "friend svelte-1ax078w");
            s(f, "class", "timer svelte-1ax078w");
        },
        m(m, _) {
            R(m, e, _);
            d(e, n);
            d(e, i);
            d(e, a);
            d(a, o);
            d(a, u);
            R(m, c, _);
            R(m, f, _);
            d(f, h);
        },
        p(m, _) {
            if (_ & 64 && t !== (t = Mt.label.connected[m[6]] + "")) {
                Re(n, t);
            }
            if (_ & 8 && r !== (r = m[3].peer + "")) {
                Re(u, r);
            }
            if (_ & 128) {
                Re(h, m[7]);
            }
        },
        d(m) {
            if (m) {
                S(e);
            }
            if (m) {
                S(c);
            }
            if (m) {
                S(f);
            }
        }
    };
}
function Po(l) {
    let e;
    let t = Mt.connecting[l[6]] + "";
    let n;
    return {
        c() {
            e = L("h4");
            n = ne(t);
            s(e, "class", "loading svelte-1ax078w");
        },
        m(i, a) {
            R(i, e, a);
            d(e, n);
        },
        p(i, a) {
            if (a & 64 && t !== (t = Mt.connecting[i[6]] + "")) {
                Re(n, t);
            }
        },
        d(i) {
            if (i) {
                S(e);
            }
        }
    };
}
function Zi(l) {
    let e;
    return {
        c() {
            e = L("div");
            s(e, "class", "pulse svelte-1ax078w");
        },
        m(t, n) {
            R(t, e, n);
        },
        d(t) {
            if (t) {
                S(e);
            }
        }
    };
}
function Ro(l) {
    let e = Mt.id.share[l[6]] + "";
    let t;
    let n;
    let i;
    let a;
    return {
        c() {
            t = ne(e);
            n = ne(" #");
            i = L("span");
            a = ne(l[1]);
            s(i, "class", "svelte-1ax078w");
        },
        m(o, r) {
            R(o, t, r);
            R(o, n, r);
            R(o, i, r);
            d(i, a);
        },
        p(o, r) {
            if (r & 64 && e !== (e = Mt.id.share[o[6]] + "")) {
                Re(t, e);
            }
            if (r & 2) {
                Re(a, o[1]);
            }
        },
        d(o) {
            if (o) {
                S(t);
            }
            if (o) {
                S(n);
            }
            if (o) {
                S(i);
            }
        }
    };
}
function So(l) {
    let e = Mt.id.copied[l[6]] + "";
    let t;
    let n;
    let i = l[11][Math.floor(Math.random() * l[11].length)] + "";
    let a;
    return {
        c() {
            t = ne(e);
            n = P();
            a = ne(i);
        },
        m(o, r) {
            R(o, t, r);
            R(o, n, r);
            R(o, a, r);
        },
        p(o, r) {
            if (r & 64 && e !== (e = Mt.id.copied[o[6]] + "")) {
                Re(t, e);
            }
        },
        d(o) {
            if (o) {
                S(t);
            }
            if (o) {
                S(n);
            }
            if (o) {
                S(a);
            }
        }
    };
}
function Ho(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m;
    let _;
    let w = l[4] !== "server-disconnect" ? zo : Co;
    let C = w(l);
    let z = l[0] ? So : Ro;
    let k = z(l);
    return {
        c() {
            e = L("container");
            t = L("div");
            C.c();
            o = P();
            r = L("button");
            k.c();
            s(t, "class", n = "call " + l[4] + " svelte-1ax078w");
            s(r, "class", u = "your-id " + (l[0] ? "copied" : "") + " svelte-1ax078w");
            s(e, "class", "svelte-1ax078w");
        },
        m(v, g) {
            R(v, e, g);
            d(e, t);
            C.m(t, null);
            d(e, o);
            d(e, r);
            k.m(r, null);
            h = true;
            if (!m) {
                _ = j(r, "click", l[10]);
                m = true;
            }
        },
        p(v, [g]) {
            l = v;
            if (w === (w = l[4] !== "server-disconnect" ? zo : Co) && C) {
                C.p(l, g);
            } else {
                C.d(1);
                C = w(l);
                if (C) {
                    C.c();
                    C.m(t, null);
                }
            }
            if (!h || g & 16 && n !== (n = "call " + l[4] + " svelte-1ax078w")) {
                s(t, "class", n);
            }
            if (z === (z = l[0] ? So : Ro) && k) {
                k.p(l, g);
            } else {
                k.d(1);
                k = z(l);
                if (k) {
                    k.c();
                    k.m(r, null);
                }
            }
            if (!h || g & 1 && u !== (u = "your-id " + (l[0] ? "copied" : "") + " svelte-1ax078w")) {
                s(r, "class", u);
            }
        },
        i(v) {
            if (!h) {
                re(() => {
                    if (a) {
                        a.end(1);
                    }
                    i = ue(t, fe, {
                        easing: le,
                        duration: 300,
                        delay: 400
                    });
                    i.start();
                });
                re(() => {
                    if (f) {
                        f.end(1);
                    }
                    c = ue(r, fe, {
                        easing: le,
                        duration: 300,
                        delay: 500
                    });
                    c.start();
                });
                h = true;
            }
        },
        o(v) {
            if (i) {
                i.invalidate();
            }
            a = Se(t, fe, {
                duration: l[5].w > 600 ? 200 : 0
            });
            if (c) {
                c.invalidate();
            }
            f = Se(r, fe, {
                duration: l[5].w > 600 ? 200 : 0
            });
            h = false;
        },
        d(v) {
            if (v) {
                S(e);
            }
            C.d();
            if (v && a) {
                a.end();
            }
            k.d();
            if (v && f) {
                f.end();
            }
            m = false;
            _();
        }
    };
}
function Do(l, e, t) {
    let i;
    I(l, ks, k => t(1, k));
    I(l, Hn, k => t(2, i = k));
    I(l, Ot, k => t(3, k));
    I(l, tl, k => t(4, k));
    I(l, ut, k => t(5, k));
    I(l, Vt, k => t(6, k));
    I(l, pn, k => t(7, k));
    I(l, ws, k => t(8, k));
    let h = false;
    let m;
    const _ = () => {
        clearTimeout(m);
        t(0, h = true);
        m = setTimeout(() => {
            t(0, h = false);
        }, 1e3);
    };
    const b = () => {
        if (k) {
            k.close();
            return;
        }
        if (i.length === 6 && i.match(/^[0-9]+$/)) {
            Kl.set(i);
        }
    };
    const w = () => {
        const k = document.createElement("textarea");
        k.value = k;
        document.body.appendChild(k);
        k.select();
        document.execCommand("copy");
        document.body.removeChild(k);
        _();
    };
    let C = ["(◍•ᴗ•◍)", "(≧▽≦)", "(ﾉ◕ヮ◕)", "(ㆁωㆁ)"];
    function p() {
        i = this.value;
        Hn.set(i);
    }
    return [h, k, i, k, k, k, k, k, k, b, w, C, p, () => k.reconnect()];
}
class Io extends pe {
    constructor(e) {
        super();
        _e(this, e, Do, Ho, me, {});
    }
}
function Ao(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    return {
        c() {
            e = L("label");
            t = L("input");
            i = P();
            a = L("container");
            o = L("div");
            o.innerHTML = "<div class=\"toggleButton svelte-yzrsaq\"><i class=\"kalicon notranslate fill small svelte-yzrsaq\">jellyfill</i></div>";
            s(t, "type", "checkbox");
            s(t, "aria-label", l[5]);
            t.checked = n = !!l[7];
            s(t, "class", "svelte-yzrsaq");
            s(o, "class", "track svelte-yzrsaq");
            s(a, "class", r = zl(l[7] ? "" : l[4]) + " svelte-yzrsaq");
            s(e, "name", l[5]);
            s(e, "class", u = (l[7] ? "toggled" : "") + " " + (l[2] ? "hide" : "") + " " + l[3] + " svelte-yzrsaq");
        },
        m(h, m) {
            R(h, e, m);
            d(e, t);
            d(e, i);
            d(e, a);
            d(a, o);
            l[11](e);
            if (!c) {
                f = j(t, "change", l[8]);
                c = true;
            }
        },
        p(h, m) {
            if (m & 32) {
                s(t, "aria-label", h[5]);
            }
            if (m & 128 && n !== (n = !!h[7])) {
                t.checked = n;
            }
            if (m & 144 && r !== (r = zl(h[7] ? "" : h[4]) + " svelte-yzrsaq")) {
                s(a, "class", r);
            }
            if (m & 32) {
                s(e, "name", h[5]);
            }
            if (m & 140 && u !== (u = (h[7] ? "toggled" : "") + " " + (h[2] ? "hide" : "") + " " + h[3] + " svelte-yzrsaq")) {
                s(e, "class", u);
            }
        },
        d(h) {
            if (h) {
                S(e);
            }
            l[11](null);
            c = false;
            f();
        }
    };
}
function Eo(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    return {
        c() {
            e = L("label");
            t = L("input");
            i = P();
            a = L("container");
            o = L("div");
            o.innerHTML = "<div class=\"toggleButton svelte-yzrsaq\"><i class=\"kalicon notranslate fill small svelte-yzrsaq\">jellyfill</i></div>";
            s(t, "type", "checkbox");
            s(t, "aria-label", l[5]);
            t.checked = n = !!l[1];
            s(t, "class", "svelte-yzrsaq");
            s(o, "class", "track svelte-yzrsaq");
            s(a, "class", r = zl(l[1] ? "" : l[4]) + " svelte-yzrsaq");
            s(e, "name", l[5]);
            s(e, "class", u = (l[1] ? "toggled" : "") + " " + (l[2] ? "hide" : "") + " " + l[3] + " svelte-yzrsaq");
        },
        m(h, m) {
            R(h, e, m);
            d(e, t);
            d(e, i);
            d(e, a);
            d(a, o);
            l[10](e);
            if (!c) {
                f = j(t, "change", l[8]);
                c = true;
            }
        },
        p(h, m) {
            if (m & 32) {
                s(t, "aria-label", h[5]);
            }
            if (m & 2 && n !== (n = !!h[1])) {
                t.checked = n;
            }
            if (m & 18 && r !== (r = zl(h[1] ? "" : h[4]) + " svelte-yzrsaq")) {
                s(a, "class", r);
            }
            if (m & 32) {
                s(e, "name", h[5]);
            }
            if (m & 14 && u !== (u = (h[1] ? "toggled" : "") + " " + (h[2] ? "hide" : "") + " " + h[3] + " svelte-yzrsaq")) {
                s(e, "class", u);
            }
        },
        d(h) {
            if (h) {
                S(e);
            }
            l[10](null);
            c = false;
            f();
        }
    };
}
function Fo(l) {
    let e;
    let n = l[1] !== null ? Eo : Ao;
    let i = n(l);
    return {
        c() {
            i.c();
            e = _l();
        },
        m(a, o) {
            i.m(a, o);
            R(a, e, o);
        },
        p(a, [o]) {
            if (n === (n = a[1] !== null ? Eo : Ao) && i) {
                i.p(a, o);
            } else {
                i.d(1);
                i = n(a);
                if (i) {
                    i.c();
                    i.m(e.parentNode, e);
                }
            }
        },
        i: G,
        o: G,
        d(a) {
            i.d(a);
            if (a) {
                S(e);
            }
        }
    };
}
function To(l, e, t) {
    let i = G;
    let a = () => (i(), i = ps(o, p => t(7, p)), o);
    l.$$.on_destroy.push(() => i());
    let {
        setting: o
    } = e;
    a();
    let {
        value: r = null
    } = e;
    let {
        callback: u = null
    } = e;
    let {
        hide: c = false
    } = e;
    let {
        styles: f = ""
    } = e;
    let {
        classes: h = ""
    } = e;
    let {
        name: m = ""
    } = e;
    let _;
    const b = () => {
        if (u !== null) {
            u();
            o.set(p);
        } else {
            o.set(!p);
        }
        Wl();
    };
    function w(p) {
        ht[p ? "unshift" : "push"](() => {
            _ = p;
            t(6, _);
        });
    }
    function C(p) {
        ht[p ? "unshift" : "push"](() => {
            _ = p;
            t(6, _);
        });
    }
    l.$$set = p => {
        if ("setting" in p) {
            a(t(0, o = p.setting));
        }
        if ("value" in p) {
            t(1, r = p.value);
        }
        if ("callback" in p) {
            t(9, u = p.callback);
        }
        if ("hide" in p) {
            t(2, c = p.hide);
        }
        if ("styles" in p) {
            t(3, f = p.styles);
        }
        if ("classes" in p) {
            t(4, h = p.classes);
        }
        if ("name" in p) {
            t(5, m = p.name);
        }
    };
    return [o, r, c, f, h, m, _, p, b, u, w, C];
}
class ll extends pe {
    constructor(e) {
        super();
        _e(this, e, To, Fo, me, {
            setting: 0,
            value: 1,
            callback: 9,
            hide: 2,
            styles: 3,
            classes: 4,
            name: 5
        });
    }
}
function Yi(l, e, t) {
    const n = l.slice();
    n[19] = e[t];
    return n;
}
function Bo(l) {
    let e;
    return {
        c() {
            e = L("p");
            e.textContent = "For eyetracking, use both face and full body tracking.";
            s(e, "class", "info svelte-1krauxh");
        },
        m(t, n) {
            R(t, e, n);
        },
        d(t) {
            if (t) {
                S(e);
            }
        }
    };
}
function xo(l) {
    let e;
    return {
        c() {
            e = L("p");
            e.textContent = "Full body tracking recommended for desktop browsers.";
            s(e, "class", "info svelte-1krauxh");
        },
        m(t, n) {
            R(t, e, n);
        },
        d(t) {
            if (t) {
                S(e);
            }
        }
    };
}
function Oo(l) {
    let e;
    return {
        c() {
            e = L("p");
            e.textContent = "Full body finger tracking unavailble on Safari.";
            s(e, "class", "info warning svelte-1krauxh");
        },
        m(t, n) {
            R(t, e, n);
        },
        d(t) {
            if (t) {
                S(e);
            }
        }
    };
}
function Uo(l) {
    let e;
    return {
        c() {
            e = L("p");
            e.textContent = "Allow webcam access to see camera list.";
            s(e, "class", "info svelte-1krauxh");
        },
        m(t, n) {
            R(t, e, n);
        },
        p: G,
        d(t) {
            if (t) {
                S(e);
            }
        }
    };
}
function jo(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o = l[8].videoinput;
    let r = [];
    for (let u = 0; u < o.length; u += 1) {
        r[u] = Xi(Yi(l, o, u));
    }
    return {
        c() {
            e = L("select");
            for (let u = 0; u < r.length; u += 1) {
                r[u].c();
            }
            t = P();
            n = L("div");
            s(e, "aria-label", "Change Video Source");
            s(e, "name", "Video Source");
            s(e, "class", "svelte-1krauxh");
            if (l[9] === undefined) {
                re(() => l[16].call(e));
            }
            s(n, "class", "select_arrow svelte-1krauxh");
        },
        m(u, c) {
            R(u, e, c);
            for (let f = 0; f < r.length; f += 1) {
                r[f].m(e, null);
            }
            ui(e, l[9]);
            R(u, t, c);
            R(u, n, c);
            if (!i) {
                a = j(e, "change", l[16]);
                i = true;
            }
        },
        p(u, c) {
            if (c & 256) {
                o = u[8].videoinput;
                let f;
                for (f = 0; f < o.length; f += 1) {
                    const h = Yi(u, o, f);
                    if (r[f]) {
                        r[f].p(h, c);
                    } else {
                        r[f] = Xi(h);
                        r[f].c();
                        r[f].m(e, null);
                    }
                }
                for (; f < r.length; f += 1) {
                    r[f].d(1);
                }
                r.length = o.length;
            }
            if (c & 768) {
                ui(e, u[9]);
            }
        },
        d(u) {
            if (u) {
                S(e);
            }
            jn(r, u);
            if (u) {
                S(t);
            }
            if (u) {
                S(n);
            }
            i = false;
            a();
        }
    };
}
function Xi(l) {
    let e;
    let t = l[19].label + "";
    let n;
    let i;
    return {
        c() {
            e = L("option");
            n = ne(t);
            e.__value = i = l[19].deviceId;
            e.value = e.__value;
            s(e, "class", "svelte-1krauxh");
        },
        m(a, o) {
            R(a, e, o);
            d(e, n);
        },
        p(a, o) {
            if (o & 256 && t !== (t = a[19].label + "")) {
                Re(n, t);
            }
            if (o & 256 && i !== (i = a[19].deviceId)) {
                e.__value = i;
                e.value = e.__value;
            }
        },
        d(a) {
            if (a) {
                S(e);
            }
        }
    };
}
function Wo(l) {
    let e;
    return {
        c() {
            e = ne("Reset Character Tracking");
        },
        m(t, n) {
            R(t, e, n);
        },
        p: G,
        d(t) {
            if (t) {
                S(e);
            }
        }
    };
}
function No(l) {
    let e;
    let t = l[10][Math.floor(Math.random() * l[10].length)] + "";
    let n;
    return {
        c() {
            e = ne("Tracking Reset ");
            n = ne(t);
        },
        m(i, a) {
            R(i, e, a);
            R(i, n, a);
        },
        p: G,
        d(i) {
            if (i) {
                S(e);
            }
            if (i) {
                S(n);
            }
        }
    };
}
function qo(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m;
    let _;
    let b;
    let w;
    let C;
    let p;
    let z;
    let k;
    let v;
    let g;
    let y;
    let M;
    let N;
    let O;
    let A;
    let D;
    let H;
    let B;
    let T;
    let q;
    let X;
    let se;
    let Y;
    let ze;
    let Ze;
    let he;
    let Ve;
    let Te;
    let ye;
    let xe;
    let Oe;
    let Ee;
    let ce;
    let ke;
    let Fe;
    let tt;
    let Ye;
    let Pe;
    let be;
    let F;
    let ct;
    let ot;
    let Qe;
    let ft;
    let gt;
    let Bt;
    let dt;
    let nt = bl ? Oo : l[2].w < 600 ? xo : Bo;
    let qe = nt(l);
    w = new ll({
        props: {
            name: l[1].face.enableWink ? "Disable Wink Detection" : "Enable Wink Detection",
            setting: de,
            value: l[1].face.enableWink,
            callback: l[15]
        }
    });
    v = new ll({
        props: {
            name: l[3] ? "Disable Smile Detection" : "Enable Smile Detection",
            setting: Jn
        }
    });
    O = new ll({
        props: {
            name: l[4] ? "Disable Room Tracking" : "Enable Room Tracking",
            setting: Tt
        }
    });
    T = new ll({
        props: {
            name: l[5] ? "Disable Leg Tracking" : "Enable Leg Tracking",
            setting: Wt
        }
    });
    he = new ll({
        props: {
            name: l[6] ? "Hide Video Feed" : "Show Video Feed",
            setting: Sl
        }
    });
    Oe = new ll({
        props: {
            name: l[7] ? "Hide Face" : "Show Face",
            setting: Nl
        }
    });
    let pt = l[8].videoinput.length > 0 ? jo : Uo;
    let mt = pt(l);
    let Pt = l[0] ? No : Wo;
    let it = Pt(l);
    return {
        c() {
            e = L("container");
            t = L("div");
            n = L("div");
            i = L("h4");
            i.textContent = "Body Tracking Options";
            a = P();
            o = L("div");
            r = L("div");
            r.innerHTML = `<img src="https://yeemachine.github.io/k2021/gif/face_eye.gif" class="svelte-1krauxh"/> 
           <label class="svelte-1krauxh">Face/Eye</label>`;
            u = P();
            c = L("div");
            c.innerHTML = `<img src="https://yeemachine.github.io/k2021/gif/fullbody.gif" class="svelte-1krauxh"/> 
           <label class="svelte-1krauxh">Full Body</label>`;
            f = P();
            qe.c();
            h = P();
            m = L("div");
            _ = L("h4");
            _.textContent = "Enable Wink";
            b = P();
            Q(w.$$.fragment);
            C = P();
            p = L("div");
            z = L("h4");
            z.textContent = "Smile Detection [Beta]";
            k = P();
            Q(v.$$.fragment);
            g = P();
            y = L("div");
            M = L("h4");
            M.textContent = "Room Tracking";
            N = P();
            Q(O.$$.fragment);
            A = P();
            D = L("div");
            H = L("h4");
            H.textContent = "Leg Tracking [WIP]";
            B = P();
            Q(T.$$.fragment);
            X = P();
            se = L("div");
            Y = L("div");
            ze = L("h4");
            ze.textContent = "Hide Camera Panel";
            Ze = P();
            Q(he.$$.fragment);
            Ve = P();
            Te = L("div");
            ye = L("h4");
            ye.textContent = "Hide Webcam Video";
            xe = P();
            Q(Oe.$$.fragment);
            Ee = P();
            ce = L("div");
            ke = L("h4");
            ke.textContent = "Change Camera";
            Fe = P();
            tt = L("div");
            mt.c();
            Pe = P();
            be = L("button");
            it.c();
            te(i, "margin", "0");
            s(i, "class", "svelte-1krauxh");
            s(r, "class", "trackingOption svelte-1krauxh");
            Le(r, "selected", l[1].face.enable);
            s(c, "class", "trackingOption svelte-1krauxh");
            Le(c, "selected", l[1].holistic.enable);
            s(o, "class", "tracking svelte-1krauxh");
            te(_, "margin", "0");
            s(_, "class", "svelte-1krauxh");
            s(m, "class", "list svelte-1krauxh");
            te(z, "margin", "0");
            s(z, "class", "svelte-1krauxh");
            s(p, "class", "list svelte-1krauxh");
            te(M, "margin", "0");
            s(M, "class", "svelte-1krauxh");
            s(y, "class", "list svelte-1krauxh");
            te(H, "margin", "0");
            s(H, "class", "svelte-1krauxh");
            s(D, "class", "list svelte-1krauxh");
            s(n, "class", "select svelte-1krauxh");
            s(t, "class", "setting svelte-1krauxh");
            te(ze, "margin", "0");
            s(ze, "class", "svelte-1krauxh");
            s(Y, "class", "list svelte-1krauxh");
            te(ye, "margin", "0");
            s(ye, "class", "svelte-1krauxh");
            s(Te, "class", "list svelte-1krauxh");
            s(ke, "class", "svelte-1krauxh");
            s(tt, "class", "select svelte-1krauxh");
            s(ce, "class", "list svelte-1krauxh");
            te(ce, "flex-direction", "column");
            s(se, "class", "setting svelte-1krauxh");
            s(be, "class", F = "trigger " + (l[0] ? "reset" : "") + " svelte-1krauxh");
            s(e, "class", "svelte-1krauxh");
        },
        m(ve, we) {
            R(ve, e, we);
            d(e, t);
            d(t, n);
            d(n, i);
            d(n, a);
            d(n, o);
            d(o, r);
            d(o, u);
            d(o, c);
            d(n, f);
            qe.m(n, null);
            d(n, h);
            d(n, m);
            d(m, _);
            d(m, b);
            $(w, m, null);
            d(n, C);
            d(n, p);
            d(p, z);
            d(p, k);
            $(v, p, null);
            d(n, g);
            d(n, y);
            d(y, M);
            d(y, N);
            $(O, y, null);
            d(n, A);
            d(n, D);
            d(D, H);
            d(D, B);
            $(T, D, null);
            d(e, X);
            d(e, se);
            d(se, Y);
            d(Y, ze);
            d(Y, Ze);
            $(he, Y, null);
            d(se, Ve);
            d(se, Te);
            d(Te, ye);
            d(Te, xe);
            $(Oe, Te, null);
            d(se, Ee);
            d(se, ce);
            d(ce, ke);
            d(ce, Fe);
            d(ce, tt);
            mt.m(tt, null);
            d(e, Pe);
            d(e, be);
            it.m(be, null);
            gt = true;
            if (!Bt) {
                dt = [j(r, "click", l[13]), j(c, "click", l[14]), j(be, "click", l[11])];
                Bt = true;
            }
        },
        p(ve, [we]) {
            l = ve;
            if (we & 2) {
                Le(r, "selected", l[1].face.enable);
            }
            if (we & 2) {
                Le(c, "selected", l[1].holistic.enable);
            }
            if (nt !== (nt = bl ? Oo : l[2].w < 600 ? xo : Bo)) {
                qe.d(1);
                qe = nt(l);
                if (qe) {
                    qe.c();
                    qe.m(n, h);
                }
            }
            const At = {};
            if (we & 2) {
                At.name = l[1].face.enableWink ? "Disable Wink Detection" : "Enable Wink Detection";
            }
            if (we & 2) {
                At.value = l[1].face.enableWink;
            }
            if (we & 2) {
                At.callback = l[15];
            }
            w.$set(At);
            const Rt = {};
            if (we & 8) {
                Rt.name = l[3] ? "Disable Smile Detection" : "Enable Smile Detection";
            }
            v.$set(Rt);
            const Xe = {};
            if (we & 16) {
                Xe.name = l[4] ? "Disable Room Tracking" : "Enable Room Tracking";
            }
            O.$set(Xe);
            const Be = {};
            if (we & 32) {
                Be.name = l[5] ? "Disable Leg Tracking" : "Enable Leg Tracking";
            }
            T.$set(Be);
            const St = {};
            if (we & 64) {
                St.name = l[6] ? "Hide Video Feed" : "Show Video Feed";
            }
            he.$set(St);
            const De = {};
            if (we & 128) {
                De.name = l[7] ? "Hide Face" : "Show Face";
            }
            Oe.$set(De);
            if (pt === (pt = l[8].videoinput.length > 0 ? jo : Uo) && mt) {
                mt.p(l, we);
            } else {
                mt.d(1);
                mt = pt(l);
                if (mt) {
                    mt.c();
                    mt.m(tt, null);
                }
            }
            if (Pt === (Pt = l[0] ? No : Wo) && it) {
                it.p(l, we);
            } else {
                it.d(1);
                it = Pt(l);
                if (it) {
                    it.c();
                    it.m(be, null);
                }
            }
            if (!gt || we & 1 && F !== (F = "trigger " + (l[0] ? "reset" : "") + " svelte-1krauxh")) {
                s(be, "class", F);
            }
        },
        i(ve) {
            if (!gt) {
                x(w.$$.fragment, ve);
                x(v.$$.fragment, ve);
                x(O.$$.fragment, ve);
                x(T.$$.fragment, ve);
                if (!q) {
                    re(() => {
                        q = ue(t, fe, {
                            easing: le,
                            duration: 300,
                            delay: 400
                        });
                        q.start();
                    });
                }
                x(he.$$.fragment, ve);
                x(Oe.$$.fragment, ve);
                if (!Ye) {
                    re(() => {
                        Ye = ue(se, fe, {
                            easing: le,
                            duration: 300,
                            delay: 400
                        });
                        Ye.start();
                    });
                }
                re(() => {
                    if (ot) {
                        ot.end(1);
                    }
                    ct = ue(be, fe, {
                        easing: le,
                        duration: 300,
                        delay: 500
                    });
                    ct.start();
                });
                re(() => {
                    if (ft) {
                        ft.end(1);
                    }
                    Qe = ue(e, fe, {
                        easing: le,
                        duration: 300,
                        delay: 400
                    });
                    Qe.start();
                });
                gt = true;
            }
        },
        o(ve) {
            W(w.$$.fragment, ve);
            W(v.$$.fragment, ve);
            W(O.$$.fragment, ve);
            W(T.$$.fragment, ve);
            W(he.$$.fragment, ve);
            W(Oe.$$.fragment, ve);
            if (ct) {
                ct.invalidate();
            }
            ot = Se(be, fe, {
                duration: l[2].w > 600 ? 200 : 0
            });
            if (Qe) {
                Qe.invalidate();
            }
            ft = Se(e, fe, {
                duration: l[2].w > 600 ? 200 : 0
            });
            gt = false;
        },
        d(ve) {
            if (ve) {
                S(e);
            }
            qe.d();
            ee(w);
            ee(v);
            ee(O);
            ee(T);
            ee(he);
            ee(Oe);
            mt.d();
            it.d();
            if (ve && ot) {
                ot.end();
            }
            if (ve && ft) {
                ft.end();
            }
            Bt = false;
            kt(dt);
        }
    };
}
function Go(l, e, t) {
    let m;
    I(l, de, y => t(1, y));
    I(l, V, y => t(18, y));
    I(l, ut, y => t(2, y));
    I(l, Jn, y => t(3, y));
    I(l, Tt, y => t(4, y));
    I(l, Wt, y => t(5, y));
    I(l, Sl, y => t(6, y));
    I(l, Nl, y => t(7, y));
    I(l, Pn, y => t(8, y));
    I(l, Fl, y => t(9, m = y));
    let _ = false;
    let b;
    let w = ["(◍•ᴗ•◍)", "(≧▽≦)", "(ﾉ◕ヮ◕)", "(ㆁωㆁ)"];
    const C = () => {
        if (b) {
            clearTimeout(b);
        }
        t(0, _ = true);
        zs(y.user.model, y.user.tracking, "user", true, true);
        b = setTimeout(() => {
            t(0, _ = false);
        }, 1e3);
    };
    const p = (y, M) => {
        y.preventDefault;
        if (!y[M].enable && (Ce(de, y[M].enable = !y[M].enable, y), Ce(de, y[M === "face" ? "holistic" : "face"].enable = !y[M === "face" ? "holistic" : "face"].enable, y), Wl(), !y.holistic.enable && !y.face.enable)) {
            Ce(de, y.face.enable = true, y);
            return;
        }
    };
    const z = y => {
        p(y, "face");
    };
    const k = y => {
        p(y, "holistic");
    };
    const v = () => {
        Ce(de, y.face.enableWink = !y.face.enableWink, y);
    };
    function g() {
        m = La(this);
        Fl.set(m);
    }
    return [_, y, y, y, y, y, y, y, y, m, w, C, p, z, k, v, g];
}
class Zo extends pe {
    constructor(e) {
        super();
        _e(this, e, Go, qo, me, {});
    }
}
function Yo(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m;
    let _;
    let b;
    let w;
    let C;
    let p;
    let z;
    let k;
    let v;
    let g;
    let y;
    let M;
    let N;
    let O;
    let A;
    let D;
    let H;
    let B;
    let T;
    let q;
    let X;
    let se;
    let Y;
    let ze;
    let Ze;
    let he;
    let Ve;
    let Te;
    let ye;
    let xe;
    let Oe;
    let Ee;
    let ce;
    let ke;
    let Fe;
    let tt;
    let Ye;
    let Pe;
    let be;
    let F;
    let ct;
    let ot;
    let Qe;
    let ft;
    let gt;
    let Bt;
    let dt;
    let lt;
    let nt;
    let qe;
    let wt;
    let pt;
    let mt;
    let Ge;
    let Pt;
    let it;
    let ve;
    let we;
    let At;
    let Rt;
    dt = new ll({
        props: {
            name: l[7] ? "Animation Off" : "Animation On",
            setting: Ml
        }
    });
    Ge = new ll({
        props: {
            name: l[8] ? "Disable Experiment" : "Enable Experiment",
            setting: ql
        }
    });
    return {
        c() {
            e = L("container");
            t = L("div");
            n = L("h4");
            n.textContent = "Light Color";
            i = P();
            a = L("div");
            u = P();
            c = L("hr");
            f = P();
            h = L("h4");
            h.textContent = "Light Position X";
            m = P();
            _ = L("input");
            b = P();
            w = L("hr");
            C = P();
            p = L("h4");
            p.textContent = "Light Position Y";
            z = P();
            k = L("input");
            g = P();
            y = L("div");
            M = L("h4");
            M.textContent = "Shadow Strength";
            N = P();
            O = L("input");
            A = P();
            D = L("hr");
            H = P();
            B = L("h4");
            B.textContent = "Shadow Blur";
            T = P();
            q = L("input");
            se = P();
            Y = L("div");
            ze = L("h4");
            ze.textContent = "Outline Size";
            Ze = P();
            he = L("input");
            Ve = P();
            Te = L("hr");
            ye = P();
            xe = L("h4");
            xe.textContent = "Outline Color";
            Oe = P();
            Ee = L("div");
            tt = P();
            Ye = L("div");
            Pe = L("h4");
            Pe.textContent = "Pixelate";
            be = P();
            F = L("input");
            ot = P();
            Qe = L("div");
            ft = L("div");
            gt = L("h4");
            gt.textContent = "Water Animation";
            Bt = P();
            Q(dt.$$.fragment);
            nt = P();
            qe = L("div");
            wt = L("div");
            pt = L("h4");
            pt.textContent = "Light Cube Experiment";
            mt = P();
            Q(Ge.$$.fragment);
            te(n, "margin", "0");
            s(n, "class", "svelte-2t25z9");
            s(a, "id", "temp");
            s(a, "class", "svelte-2t25z9");
            s(c, "class", "svelte-2t25z9");
            s(h, "class", "svelte-2t25z9");
            s(_, "aria-label", "Light Position Y");
            s(_, "name", "lightRotY");
            s(_, "type", "range");
            s(_, "min", 0);
            s(_, "max", 1);
            s(_, "step", ".01");
            te(_, "background-size", l[1] * 100 + "% 100%");
            s(_, "class", "svelte-2t25z9");
            s(w, "class", "svelte-2t25z9");
            s(p, "class", "svelte-2t25z9");
            s(k, "aria-label", "Light Position X");
            s(k, "name", "lightRotX");
            s(k, "type", "range");
            s(k, "min", 0);
            s(k, "max", 1);
            s(k, "step", ".01");
            te(k, "background-size", l[2] * 100 + "% 100%");
            s(k, "class", "svelte-2t25z9");
            s(t, "class", "setting svelte-2t25z9");
            s(M, "class", "svelte-2t25z9");
            s(O, "aria-label", "Shadow Strength");
            s(O, "name", "shadowStrength");
            s(O, "type", "range");
            s(O, "min", 0);
            s(O, "max", 1);
            s(O, "step", ".01");
            te(O, "background-size", l[3] * 100 + "% 100%");
            s(O, "class", "svelte-2t25z9");
            s(D, "class", "svelte-2t25z9");
            s(B, "class", "svelte-2t25z9");
            s(q, "aria-label", "Shadow Blur");
            s(q, "name", "shadowBlur");
            s(q, "type", "range");
            s(q, "min", 0);
            s(q, "max", 1);
            s(q, "step", ".01");
            te(q, "background-size", l[4] * 100 + "% 100%");
            s(q, "class", "svelte-2t25z9");
            s(y, "class", "setting svelte-2t25z9");
            s(ze, "class", "svelte-2t25z9");
            s(he, "aria-label", "Outline Size");
            s(he, "name", "outlineSize");
            s(he, "type", "range");
            s(he, "min", 0);
            s(he, "max", 1);
            s(he, "step", ".01");
            te(he, "background-size", l[5] * 100 + "% 100%");
            s(he, "class", "svelte-2t25z9");
            s(Te, "class", "svelte-2t25z9");
            te(xe, "margin", "0");
            s(xe, "class", "svelte-2t25z9");
            s(Ee, "id", "outline");
            s(Ee, "class", "svelte-2t25z9");
            s(Y, "class", "setting svelte-2t25z9");
            s(Pe, "class", "svelte-2t25z9");
            s(F, "aria-label", "Pixelate");
            s(F, "name", "pixelSize");
            s(F, "type", "range");
            s(F, "min", 0);
            s(F, "max", 1);
            s(F, "step", ".01");
            te(F, "background-size", l[6] * 100 + "% 100%");
            s(F, "class", "svelte-2t25z9");
            s(Ye, "class", "setting svelte-2t25z9");
            te(gt, "margin", "0");
            s(gt, "class", "svelte-2t25z9");
            s(ft, "class", "toggle svelte-2t25z9");
            s(Qe, "class", "setting svelte-2t25z9");
            te(pt, "margin", "0");
            s(pt, "class", "svelte-2t25z9");
            s(wt, "class", "toggle svelte-2t25z9");
            s(qe, "class", "setting last svelte-2t25z9");
            s(e, "class", "svelte-2t25z9");
        },
        m(Xe, Be) {
            R(Xe, e, Be);
            d(e, t);
            d(t, n);
            d(t, i);
            d(t, a);
            d(t, u);
            d(t, c);
            d(t, f);
            d(t, h);
            d(t, m);
            d(t, _);
            Ct(_, l[1]);
            d(t, b);
            d(t, w);
            d(t, C);
            d(t, p);
            d(t, z);
            d(t, k);
            Ct(k, l[2]);
            d(e, g);
            d(e, y);
            d(y, M);
            d(y, N);
            d(y, O);
            Ct(O, l[3]);
            d(y, A);
            d(y, D);
            d(y, H);
            d(y, B);
            d(y, T);
            d(y, q);
            Ct(q, l[4]);
            d(e, se);
            d(e, Y);
            d(Y, ze);
            d(Y, Ze);
            d(Y, he);
            Ct(he, l[5]);
            d(Y, Ve);
            d(Y, Te);
            d(Y, ye);
            d(Y, xe);
            d(Y, Oe);
            d(Y, Ee);
            d(e, tt);
            d(e, Ye);
            d(Ye, Pe);
            d(Ye, be);
            d(Ye, F);
            Ct(F, l[6]);
            d(e, ot);
            d(e, Qe);
            d(Qe, ft);
            d(ft, gt);
            d(ft, Bt);
            $(dt, ft, null);
            d(e, nt);
            d(e, qe);
            d(qe, wt);
            d(wt, pt);
            d(wt, mt);
            $(Ge, wt, null);
            we = true;
            if (!At) {
                Rt = [j(_, "change", l[9]), j(_, "input", l[9]), j(k, "change", l[10]), j(k, "input", l[10]), j(O, "change", l[11]), j(O, "input", l[11]), j(q, "change", l[12]), j(q, "input", l[12]), j(he, "change", l[13]), j(he, "input", l[13]), j(F, "change", l[14]), j(F, "input", l[14])];
                At = true;
            }
        },
        p(Xe, [Be]) {
            l = Xe;
            if (!we || Be & 2) {
                te(_, "background-size", l[1] * 100 + "% 100%");
            }
            if (Be & 2) {
                Ct(_, l[1]);
            }
            if (!we || Be & 4) {
                te(k, "background-size", l[2] * 100 + "% 100%");
            }
            if (Be & 4) {
                Ct(k, l[2]);
            }
            if (!we || Be & 8) {
                te(O, "background-size", l[3] * 100 + "% 100%");
            }
            if (Be & 8) {
                Ct(O, l[3]);
            }
            if (!we || Be & 16) {
                te(q, "background-size", l[4] * 100 + "% 100%");
            }
            if (Be & 16) {
                Ct(q, l[4]);
            }
            if (!we || Be & 32) {
                te(he, "background-size", l[5] * 100 + "% 100%");
            }
            if (Be & 32) {
                Ct(he, l[5]);
            }
            if (!we || Be & 64) {
                te(F, "background-size", l[6] * 100 + "% 100%");
            }
            if (Be & 64) {
                Ct(F, l[6]);
            }
            const St = {};
            if (Be & 128) {
                St.name = l[7] ? "Animation Off" : "Animation On";
            }
            dt.$set(St);
            const De = {};
            if (Be & 256) {
                De.name = l[8] ? "Disable Experiment" : "Enable Experiment";
            }
            Ge.$set(De);
        },
        i(Xe) {
            if (!we) {
                re(() => {
                    if (r) {
                        r.end(1);
                    }
                    o = ue(a, fe, {
                        easing: le,
                        duration: 300,
                        delay: 400
                    });
                    o.start();
                });
                if (!v) {
                    re(() => {
                        v = ue(t, fe, {
                            easing: le,
                            duration: 300,
                            delay: 400
                        });
                        v.start();
                    });
                }
                if (!X) {
                    re(() => {
                        X = ue(y, fe, {
                            easing: le,
                            duration: 300,
                            delay: 400
                        });
                        X.start();
                    });
                }
                re(() => {
                    if (ke) {
                        ke.end(1);
                    }
                    ce = ue(Ee, fe, {
                        easing: le,
                        duration: 300,
                        delay: 400
                    });
                    ce.start();
                });
                if (!Fe) {
                    re(() => {
                        Fe = ue(Y, fe, {
                            easing: le,
                            duration: 300,
                            delay: 400
                        });
                        Fe.start();
                    });
                }
                if (!ct) {
                    re(() => {
                        ct = ue(Ye, fe, {
                            easing: le,
                            duration: 300,
                            delay: 400
                        });
                        ct.start();
                    });
                }
                x(dt.$$.fragment, Xe);
                if (!lt) {
                    re(() => {
                        lt = ue(Qe, fe, {
                            easing: le,
                            duration: 300,
                            delay: 400
                        });
                        lt.start();
                    });
                }
                x(Ge.$$.fragment, Xe);
                if (!Pt) {
                    re(() => {
                        Pt = ue(qe, fe, {
                            easing: le,
                            duration: 300,
                            delay: 400
                        });
                        Pt.start();
                    });
                }
                re(() => {
                    if (ve) {
                        ve.end(1);
                    }
                    it = ue(e, fe, {
                        easing: le,
                        duration: 300,
                        delay: 400
                    });
                    it.start();
                });
                we = true;
            }
        },
        o(Xe) {
            if (o) {
                o.invalidate();
            }
            r = Se(a, fe, {
                duration: l[0].w > 600 ? 200 : 0
            });
            if (ce) {
                ce.invalidate();
            }
            ke = Se(Ee, fe, {
                duration: l[0].w > 600 ? 200 : 0
            });
            W(dt.$$.fragment, Xe);
            W(Ge.$$.fragment, Xe);
            if (it) {
                it.invalidate();
            }
            ve = Se(e, fe, {
                duration: l[0].w > 600 ? 200 : 0
            });
            we = false;
        },
        d(Xe) {
            if (Xe) {
                S(e);
            }
            if (Xe && r) {
                r.end();
            }
            if (Xe && ke) {
                ke.end();
            }
            ee(dt);
            ee(Ge);
            if (Xe && ve) {
                ve.end();
            }
            At = false;
            kt(Rt);
        }
    };
}
function Xo(l, e, t) {
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    I(l, In, y => t(17, y));
    I(l, Kt, y => t(18, y));
    I(l, ut, y => t(0, y));
    I(l, gl, y => t(1, o = y));
    I(l, pl, y => t(2, r = y));
    I(l, Pl, y => t(3, u = y));
    I(l, Rl, y => t(4, c = y));
    I(l, xl, y => t(5, f = y));
    I(l, Bl, y => t(6, h = y));
    I(l, Ml, y => t(7, y));
    I(l, ql, y => t(8, y));
    let b;
    let w;
    Nt(() => {
        b = new il.ColorPicker("#temp", {
            color: y,
            layout: [{
                component: il.ui.Box
            }, {
                component: il.ui.Slider,
                options: {
                    sliderType: "hue",
                    sliderSize: 40
                }
            }],
            layoutDirection: "horizontal",
            display: "flex",
            width: 150,
            boxheight: 150,
            borderWidth: 0,
            borderColor: "var(--offblack)"
        });
        b.forceUpdate();
        b.on("color:change", function (y) {
            Kt.set(y.hexString);
            Ul.set(y.value / 100);
        });
        w = new il.ColorPicker("#outline", {
            color: y,
            layout: [{
                component: il.ui.Wheel
            }],
            layoutDirection: "horizontal",
            display: "flex",
            width: 150,
            boxheight: 150,
            borderWidth: 0,
            borderColor: "var(--offblack)"
        });
        w.forceUpdate();
        w.on("color:change", function (y) {
            In.set(y.hexString);
        });
    });
    function C() {
        o = vl(this.value);
        gl.set(o);
    }
    function p() {
        r = vl(this.value);
        pl.set(r);
    }
    function z() {
        u = vl(this.value);
        Pl.set(u);
    }
    function k() {
        c = vl(this.value);
        Rl.set(c);
    }
    function v() {
        f = vl(this.value);
        xl.set(f);
    }
    function g() {
        h = vl(this.value);
        Bl.set(h);
    }
    return [y, o, r, u, c, f, h, y, y, C, p, z, k, v, g];
}
class Jo extends pe {
    constructor(e) {
        super();
        _e(this, e, Xo, Yo, me, {});
    }
}
function Ji(l, e, t) {
    const n = l.slice();
    n[4] = e[t];
    n[6] = t;
    return n;
}
function Ki(l, e) {
    let t;
    let n = e[4].name + "";
    let i;
    let a;
    let o;
    function r() {
        return e[3](e[4]);
    }
    return {
        key: l,
        first: null,
        c() {
            t = L("p");
            i = ne(n);
            s(t, "class", "part svelte-11z4t61");
            Le(t, "visible", e[4].visible);
            this.first = t;
        },
        m(u, c) {
            R(u, t, c);
            d(t, i);
            if (!a) {
                o = j(t, "click", r);
                a = true;
            }
        },
        p(u, c) {
            e = u;
            if (c & 1 && n !== (n = e[4].name + "")) {
                Re(i, n);
            }
            if (c & 1) {
                Le(t, "visible", e[4].visible);
            }
        },
        d(u) {
            if (u) {
                S(t);
            }
            a = false;
            o();
        }
    };
}
function Ko(l) {
    let e;
    let t;
    let n;
    let i = l[0].user.model.name + "";
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m = [];
    let _ = new Map();
    let b;
    let w;
    let C;
    let p;
    let z;
    let k = l[0].user.model.extractedParts;
    const v = g => g[4];
    for (let g = 0; g < k.length; g += 1) {
        let y = Ji(l, k, g);
        let M = y[4];
        _.set(M, m[g] = Ki(M, y));
    }
    return {
        c() {
            e = L("container");
            t = L("div");
            n = L("h2");
            a = ne(i);
            o = P();
            r = L("p");
            r.innerHTML = `Show/hide clothes, accessories, or body parts.
          <b>Label names come directly from the model file.</b>`;
            f = P();
            h = L("div");
            for (let g = 0; g < m.length; g += 1) {
                m[g].c();
            }
            s(n, "class", "svelte-11z4t61");
            s(r, "class", "info svelte-11z4t61");
            s(t, "class", "setting svelte-11z4t61");
            s(h, "class", "setting tabs svelte-11z4t61");
            s(e, "class", "svelte-11z4t61");
        },
        m(g, y) {
            R(g, e, y);
            d(e, t);
            d(t, n);
            d(n, a);
            d(t, o);
            d(t, r);
            d(e, f);
            d(e, h);
            for (let M = 0; M < m.length; M += 1) {
                m[M].m(h, null);
            }
            z = true;
        },
        p(g, [y]) {
            l = g;
            if ((!z || y & 1) && i !== (i = l[0].user.model.name + "")) {
                Re(a, i);
            }
            if (y & 5) {
                k = l[0].user.model.extractedParts;
                m = jl(m, y, v, 1, l, k, _, h, Ca, Ki, null, Ji);
            }
        },
        i(g) {
            if (!z) {
                re(() => {
                    if (c) {
                        c.end(1);
                    }
                    u = ue(t, fe, {
                        easing: le,
                        duration: 300,
                        delay: 400
                    });
                    u.start();
                });
                re(() => {
                    if (w) {
                        w.end(1);
                    }
                    b = ue(h, fe, {
                        easing: le,
                        duration: 300,
                        delay: 400
                    });
                    b.start();
                });
                re(() => {
                    if (p) {
                        p.end(1);
                    }
                    C = ue(e, fe, {
                        easing: le,
                        duration: 300,
                        delay: 400
                    });
                    C.start();
                });
                z = true;
            }
        },
        o(g) {
            if (u) {
                u.invalidate();
            }
            c = Se(t, fe, {
                duration: 0
            });
            if (b) {
                b.invalidate();
            }
            w = Se(h, fe, {
                duration: 0
            });
            if (C) {
                C.invalidate();
            }
            p = Se(e, fe, {
                duration: l[1].w > 600 ? 200 : 0
            });
            z = false;
        },
        d(g) {
            if (g) {
                S(e);
            }
            if (g && c) {
                c.end();
            }
            for (let y = 0; y < m.length; y += 1) {
                m[y].d();
            }
            if (g && w) {
                w.end();
            }
            if (g && p) {
                p.end();
            }
        }
    };
}
function Vo(l, e, t) {
    I(l, V, r => t(0, r));
    I(l, ut, r => t(1, r));
    const a = r => {
        r.visible = !r.visible;
        V.set(r);
    };
    return [r, r, a, r => {
        a(r);
    }];
}
class Qo extends pe {
    constructor(e) {
        super();
        _e(this, e, Vo, Ko, me, {});
    }
}
function $o(l) {
    let e;
    let t;
    let n;
    return {
        c() {
            e = L("style");
            e.textContent = `svg{
        pointer-events:none;
      }`;
            t = P();
            n = Z("path");
            s(n, "class", "shape-overlays__path");
            s(n, "fill", l[3]);
        },
        m(i, a) {
            R(i, e, a);
            R(i, t, a);
            R(i, n, a);
        },
        p(i, a) {
            if (a & 8) {
                s(n, "fill", i[3]);
            }
        },
        d(i) {
            if (i) {
                S(e);
            }
            if (i) {
                S(t);
            }
            if (i) {
                S(n);
            }
        }
    };
}
function eu(l) {
    return {
        c: G,
        m: G,
        i: G,
        o: G,
        d: G
    };
}
function tu(l) {
    let e;
    let t;
    e = new Qo({});
    return {
        c() {
            Q(e.$$.fragment);
        },
        m(n, i) {
            $(e, n, i);
            t = true;
        },
        i(n) {
            if (!t) {
                x(e.$$.fragment, n);
                t = true;
            }
        },
        o(n) {
            W(e.$$.fragment, n);
            t = false;
        },
        d(n) {
            ee(e, n);
        }
    };
}
function lu(l) {
    let e;
    let t;
    e = new Jo({});
    return {
        c() {
            Q(e.$$.fragment);
        },
        m(n, i) {
            $(e, n, i);
            t = true;
        },
        i(n) {
            if (!t) {
                x(e.$$.fragment, n);
                t = true;
            }
        },
        o(n) {
            W(e.$$.fragment, n);
            t = false;
        },
        d(n) {
            ee(e, n);
        }
    };
}
function nu(l) {
    let e;
    let t;
    e = new Zo({});
    return {
        c() {
            Q(e.$$.fragment);
        },
        m(n, i) {
            $(e, n, i);
            t = true;
        },
        i(n) {
            if (!t) {
                x(e.$$.fragment, n);
                t = true;
            }
        },
        o(n) {
            W(e.$$.fragment, n);
            t = false;
        },
        d(n) {
            ee(e, n);
        }
    };
}
function iu(l) {
    let e;
    let t;
    e = new Io({});
    return {
        c() {
            Q(e.$$.fragment);
        },
        m(n, i) {
            $(e, n, i);
            t = true;
        },
        i(n) {
            if (!t) {
                x(e.$$.fragment, n);
                t = true;
            }
        },
        o(n) {
            W(e.$$.fragment, n);
            t = false;
        },
        d(n) {
            ee(e, n);
        }
    };
}
function su(l) {
    let e;
    let t;
    e = new ho({});
    return {
        c() {
            Q(e.$$.fragment);
        },
        m(n, i) {
            $(e, n, i);
            t = true;
        },
        i(n) {
            if (!t) {
                x(e.$$.fragment, n);
                t = true;
            }
        },
        o(n) {
            W(e.$$.fragment, n);
            t = false;
        },
        d(n) {
            ee(e, n);
        }
    };
}
function au(l) {
    let e;
    let t;
    e = new oo({});
    return {
        c() {
            Q(e.$$.fragment);
        },
        m(n, i) {
            $(e, n, i);
            t = true;
        },
        i(n) {
            if (!t) {
                x(e.$$.fragment, n);
                t = true;
            }
        },
        o(n) {
            W(e.$$.fragment, n);
            t = false;
        },
        d(n) {
            ee(e, n);
        }
    };
}
function ru(l) {
    let e;
    let t;
    e = new Lo({});
    return {
        c() {
            Q(e.$$.fragment);
        },
        m(n, i) {
            $(e, n, i);
            t = true;
        },
        i(n) {
            if (!t) {
                x(e.$$.fragment, n);
                t = true;
            }
        },
        o(n) {
            W(e.$$.fragment, n);
            t = false;
        },
        d(n) {
            ee(e, n);
        }
    };
}
function ou(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m;
    let _;
    let b;
    let w;
    let C;
    let p;
    let z = {
        $$slots: {
            default: [$o]
        },
        $$scope: {
            ctx: l
        }
    };
    r = new Ss({
        props: z
    });
    l[7](r);
    const k = [ru, au, su, iu, nu, lu, tu, eu];
    const v = [];
    f = l[0] === "char" ? 0 : l[0] === "bg" ? 1 : l[0] === "sticker" ? 2 : l[0] === "call" ? 3 : l[0] === "settings" ? 4 : l[0] === "lights" ? 5 : l[0] === "exp" ? 6 : 7;
    h = v[f] = k[f](l);
    b = new Yr({
        props: {
            selected: l[0],
            style: l[4]
        }
    });
    return {
        c() {
            e = L("container");
            t = L("button");
            t.innerHTML = `<i class="kalicon notranslate fill small svelte-buekxu">jellyfill</i> 
    <i class="kalicon notranslate solid small">close</i>`;
            n = P();
            i = L("div");
            a = P();
            o = L("section");
            Q(r.$$.fragment);
            u = P();
            c = L("div");
            h.c();
            _ = P();
            Q(b.$$.fragment);
            s(t, "class", "subnav-close svelte-buekxu");
            s(i, "class", "nav-touch no_highlights svelte-buekxu");
            s(o, "class", "svelte-buekxu");
            s(c, "class", "content svelte-buekxu");
            s(e, "class", m = "subnav " + (l[0] ? "" : "hide") + " " + (l[1] ? "dim" : "") + " svelte-buekxu");
            s(e, "style", l[4]);
            s(e, "data-dragging", "false");
            s(e, "data-status", "waitiing");
        },
        m(y, M) {
            R(y, e, M);
            d(e, t);
            d(e, n);
            d(e, i);
            d(e, a);
            d(e, o);
            $(r, o, null);
            d(e, u);
            d(e, c);
            v[f].m(c, null);
            l[8](e);
            R(y, _, M);
            $(b, y, M);
            w = true;
            if (!C) {
                p = j(t, "click", l[5]);
                C = true;
            }
        },
        p(y, [M]) {
            const N = {};
            if (M & 262152) {
                N.$$scope = {
                    dirty: M,
                    ctx: y
                };
            }
            r.$set(N);
            let O = f;
            f = y[0] === "char" ? 0 : y[0] === "bg" ? 1 : y[0] === "sticker" ? 2 : y[0] === "call" ? 3 : y[0] === "settings" ? 4 : y[0] === "lights" ? 5 : y[0] === "exp" ? 6 : 7;
            if (f !== O) {
                bt();
                W(v[O], 1, 1, () => {
                    v[O] = null;
                });
                yt();
                h = v[f];
                if (!h) {
                    h = v[f] = k[f](y);
                    h.c();
                }
                x(h, 1);
                h.m(c, null);
            }
            if (!w || M & 3 && m !== (m = "subnav " + (y[0] ? "" : "hide") + " " + (y[1] ? "dim" : "") + " svelte-buekxu")) {
                s(e, "class", m);
            }
            if (!w || M & 16) {
                s(e, "style", y[4]);
            }
            const A = {};
            if (M & 1) {
                A.selected = y[0];
            }
            if (M & 16) {
                A.style = y[4];
            }
            b.$set(A);
        },
        i(y) {
            if (!w) {
                x(r.$$.fragment, y);
                x(h);
                x(b.$$.fragment, y);
                w = true;
            }
        },
        o(y) {
            W(r.$$.fragment, y);
            W(h);
            W(b.$$.fragment, y);
            w = false;
        },
        d(y) {
            if (y) {
                S(e);
            }
            l[7](null);
            ee(r);
            v[f].d();
            l[8](null);
            if (y) {
                S(_);
            }
            ee(b, y);
            C = false;
            p();
        }
    };
}
let fl = null;
function cu(l, e, t) {
    I(l, ut, g => t(12, g));
    let {
        selected: i = null
    } = e;
    let {
        sideSelected: a = null
    } = e;
    let {
        forceClose: o = false
    } = e;
    let r;
    let u = "var(--iconbg)";
    let c = "";
    let f = 300;
    let h = 0;
    let m = 0;
    const _ = () => {
        if (fl.isOpen) {
            if (!i || i === "close") {
                b();
            }
        } else if (!fl.isOpen) {
            w();
        }
    };
    const b = () => {
        mn(i);
        let g = g.w < 600;
        fl.animate({
            action: "close",
            axis: g ? "y" : "x",
            _flip: !g,
            _curve: "curve",
            _numPoints: 5,
            _duration: g ? 0 : 600
        });
        t(0, i = null);
        t(6, o = false);
    };
    const w = () => {
        let g = g.w < 600;
        fl.animate({
            action: "open",
            axis: g ? "y" : "x",
            _curve: "cuve",
            _flip: !!g,
            _numPoints: 5,
            _duration: 600
        });
        t(6, o = false);
    };
    function C(g) {
        g.preventDefault();
        h = (en("--container-x", r, "float") || 0) + g.dx;
        m = (en("--container-y", r, "float") || 0) + g.dy;
        if (h > 0) {
            h = 0;
        }
        if (m < 0) {
            m = 0;
        }
        r.setAttribute("data-status", "");
        r.style.setProperty("--container-x", h + "px");
        r.style.setProperty("--container-y", m + "px");
    }
    function p(g) {
        if (g.propertyName === "transform") {
            r.setAttribute("data-status", "waiting");
            r.removeEventListener("transitionend", p);
            r.style.setProperty("--container-x", "0px");
            r.style.setProperty("--container-y", "0px");
            b();
        }
    }
    const z = () => {
        m = f;
        r.setAttribute("data-status", "transition");
        r.addEventListener("transitionend", p);
        r.style.setProperty("--container-y", m + "px");
        t(6, o = false);
    };
    Nt(() => {
        xt(".subnav[data-dragging=\"false\"] .nav-touch").on("tap", z);
        xt(".subnav[data-dragging=\"false\"] .nav-touch").draggable({
            onstart: () => {
                r.setAttribute("data-dragging", true);
            },
            onmove: C,
            onend: g => {
                r.setAttribute("data-dragging", false);
                if (Math.sqrt(Math.pow(g.pageX - g.x0, 2) + Math.pow(g.pageY - g.y0, 2) | 0) > 100) {
                    m = f;
                    r.setAttribute("data-status", "transition");
                    r.addEventListener("transitionend", p);
                } else {
                    h = 0;
                    m = 0;
                }
                r.style.setProperty("--container-x", h + "px");
                r.style.setProperty("--container-y", m + "px");
            }
        });
    });
    function k(g) {
        ht[g ? "unshift" : "push"](() => {
            fl = g;
        });
    }
    function v(g) {
        ht[g ? "unshift" : "push"](() => {
            r = g;
            t(2, r);
        });
    }
    l.$$set = g => {
        if ("selected" in g) {
            t(0, i = g.selected);
        }
        if ("sideSelected" in g) {
            t(1, a = g.sideSelected);
        }
        if ("forceClose" in g) {
            t(6, o = g.forceClose);
        }
    };
    l.$$.update = () => {
        if (l.$$.dirty & 1) {
            ys.set(i);
        }
        if (l.$$.dirty & 1 && i && fl) {
            _();
        }
        if (l.$$.dirty & 64 && o) {
            z();
        }
        if (l.$$.dirty & 1) {
            switch (i) {
                case "char":
                    t(3, u = "var(--darkgrey)");
                    t(4, c = "--container-w-d:180px;--container-h-m:260px;");
                    f = 260;
                    break;
                case "call":
                    t(3, u = "var(--darkgrey)");
                    t(4, c = "--container-w-d:360px;--container-h-m:360px;");
                    f = 360;
                    break;
                case "bg":
                    t(3, u = "var(--darkgrey)");
                    t(4, c = "--container-w-d:180px;--container-h-m:260px;");
                    f = 260;
                    break;
                case "sticker":
                    t(3, u = "var(--darkgrey)");
                    t(4, c = "--container-w-d:180px;");
                    f = 210;
                    break;
                case "settings":
                    t(3, u = "var(--darkgrey)");
                    t(4, c = "--container-w-d:360px;--container-h-m:360px;");
                    f = 360;
                    break;
                case "lights":
                    t(3, u = "var(--darkgrey)");
                    t(4, c = "--container-w-d:320px;--container-h-m:360px;");
                    f = 360;
                    break;
                case "exp":
                    t(4, c = "--container-w-d:270px;--container-h-m:300px;");
                    t(3, u = "var(--darkgrey)");
                    f = 300;
                    break;
            }
        }
    };
    return [i, a, r, u, c, b, o, k, v];
}
class fu extends pe {
    constructor(e) {
        super();
        _e(this, e, cu, ou, me, {
            selected: 0,
            sideSelected: 1,
            forceClose: 6
        });
    }
}
function du(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m;
    let _;
    let b;
    return {
        c() {
            e = Z("svg");
            t = Z("g");
            n = Z("circle");
            i = Z("circle");
            a = Z("circle");
            o = Z("circle");
            r = Z("circle");
            u = Z("circle");
            c = Z("circle");
            f = Z("circle");
            h = Z("defs");
            m = Z("filter");
            _ = Z("feGaussianBlur");
            b = Z("feColorMatrix");
            s(n, "id", "circle1");
            s(n, "cx", "328");
            s(n, "cy", "304");
            s(n, "r", "174");
            s(n, "fill", l[1]);
            s(n, "class", "svelte-ialess");
            s(i, "id", "circle2");
            s(i, "class", "main svelte-ialess");
            s(i, "cx", "120.5");
            s(i, "cy", "405.5");
            s(i, "r", "90");
            s(i, "fill", l[1]);
            s(a, "id", "circle2_3");
            s(a, "class", "filler svelte-ialess");
            s(a, "cx", "120.5");
            s(a, "cy", "337.5");
            s(a, "r", "76.5");
            s(a, "fill", l[1]);
            s(o, "id", "circle3");
            s(o, "class", "main svelte-ialess");
            s(o, "cx", "88.5");
            s(o, "cy", "234.5");
            s(o, "r", "90");
            s(o, "fill", l[1]);
            s(r, "id", "circle3_4");
            s(r, "class", "filler svelte-ialess");
            s(r, "cx", "175.52");
            s(r, "cy", "180.5");
            s(r, "r", "76.5");
            s(r, "fill", l[1]);
            s(u, "id", "circle4");
            s(u, "class", "main svelte-ialess");
            s(u, "cx", "210.5");
            s(u, "cy", "92.5");
            s(u, "r", "90");
            s(u, "fill", l[1]);
            s(c, "id", "circle4_5");
            s(c, "class", "filler svelte-ialess");
            s(c, "cx", "304.52");
            s(c, "cy", "119.5");
            s(c, "r", "76.5");
            s(c, "fill", l[1]);
            s(f, "id", "circle5");
            s(f, "class", "main svelte-ialess");
            s(f, "cx", "398.5");
            s(f, "cy", "88.5");
            s(f, "r", "90");
            s(f, "fill", l[1]);
            s(t, "filter", "url(#filter0_b)");
            s(_, "in", "SourceGraphic");
            s(_, "stdDeviation", "24.5");
            s(_, "result", "blur");
            s(b, "id", "colorMatrixElement");
            s(b, "in", "blur");
            s(b, "mode", "matrix");
            s(b, "values", `1 0 0 0 0 
                                                                         0 1 0 0 0 
                                                                         0 0 1 0 0 
                                                                         0 0 0 25 -15`);
            s(b, "result", "matrix");
            s(m, "id", "filter0_b");
            s(m, "x", "-49");
            s(m, "y", "-49");
            s(m, "width", "600");
            s(m, "height", "592");
            s(m, "filterUnits", "userSpaceOnUse");
            s(m, "color-interpolation-filters", "sRGB");
            s(e, "width", "502");
            s(e, "height", "494");
            s(e, "viewBox", "0 0 502 494");
            s(e, "fill", "none");
            s(e, "xmlns", "http://www.w3.org/2000/svg");
            s(e, "class", "svelte-ialess");
            Le(e, "hide", l[0]);
        },
        m(w, C) {
            R(w, e, C);
            d(e, t);
            d(t, n);
            d(t, i);
            d(t, a);
            d(t, o);
            d(t, r);
            d(t, u);
            d(t, c);
            d(t, f);
            d(e, h);
            d(h, m);
            d(m, _);
            d(m, b);
        },
        p(w, [C]) {
            if (C & 2) {
                s(n, "fill", w[1]);
            }
            if (C & 2) {
                s(i, "fill", w[1]);
            }
            if (C & 2) {
                s(a, "fill", w[1]);
            }
            if (C & 2) {
                s(o, "fill", w[1]);
            }
            if (C & 2) {
                s(r, "fill", w[1]);
            }
            if (C & 2) {
                s(u, "fill", w[1]);
            }
            if (C & 2) {
                s(c, "fill", w[1]);
            }
            if (C & 2) {
                s(f, "fill", w[1]);
            }
            if (C & 1) {
                Le(e, "hide", w[0]);
            }
        },
        i: G,
        o: G,
        d(w) {
            if (w) {
                S(e);
            }
        }
    };
}
function mu(l, e, t) {
    let {
        hide: n = false
    } = e;
    let {
        fill: i = "#2E525F"
    } = e;
    l.$$set = a => {
        if ("hide" in a) {
            t(0, n = a.hide);
        }
        if ("fill" in a) {
            t(1, i = a.fill);
        }
    };
    return [n, i];
}
class hu extends pe {
    constructor(e) {
        super();
        _e(this, e, mu, du, me, {
            hide: 0,
            fill: 1
        });
    }
}
function gu(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    return {
        c() {
            e = Z("svg");
            t = Z("g");
            n = Z("circle");
            i = Z("circle");
            a = Z("defs");
            o = Z("filter");
            r = Z("feGaussianBlur");
            u = Z("feColorMatrix");
            s(n, "cx", "247.387");
            s(n, "cy", "247.387");
            s(n, "r", "247.387");
            s(n, "fill", l[1]);
            s(n, "class", "svelte-9a5upb");
            s(i, "cx", "572");
            s(i, "cy", "143");
            s(i, "r", "161");
            s(i, "fill", l[1]);
            s(i, "class", "svelte-9a5upb");
            s(t, "filter", "url(#filter0_c)");
            s(r, "in", "SourceGraphic");
            s(r, "stdDeviation", "24.5");
            s(r, "result", "blur");
            s(u, "id", "colorMatrixElement");
            s(u, "in", "blur");
            s(u, "mode", "matrix");
            s(u, "values", `1 0 0 0 0 
                                                                             0 1 0 0 0 
                                                                             0 0 1 0 0 
                                                                             0 0 0 25 -15`);
            s(u, "result", "matrix");
            s(o, "id", "filter0_c");
            s(o, "x", "-107.297");
            s(o, "y", "-107.297");
            s(o, "width", "898.775");
            s(o, "height", "709.368");
            s(o, "filterUnits", "userSpaceOnUse");
            s(o, "color-interpolation-filters", "sRGB");
            s(e, "width", "685");
            s(e, "height", "495");
            s(e, "viewBox", "0 0 685 495");
            s(e, "fill", "none");
            s(e, "xmlns", "http://www.w3.org/2000/svg");
            s(e, "class", "svelte-9a5upb");
            Le(e, "hide", l[0]);
        },
        m(c, f) {
            R(c, e, f);
            d(e, t);
            d(t, n);
            d(t, i);
            d(e, a);
            d(a, o);
            d(o, r);
            d(o, u);
        },
        p(c, [f]) {
            if (f & 2) {
                s(n, "fill", c[1]);
            }
            if (f & 2) {
                s(i, "fill", c[1]);
            }
            if (f & 1) {
                Le(e, "hide", c[0]);
            }
        },
        i: G,
        o: G,
        d(c) {
            if (c) {
                S(e);
            }
        }
    };
}
function pu(l, e, t) {
    let {
        hide: n = false
    } = e;
    let {
        fill: i = "#2E525F"
    } = e;
    l.$$set = a => {
        if ("hide" in a) {
            t(0, n = a.hide);
        }
        if ("fill" in a) {
            t(1, i = a.fill);
        }
    };
    return [n, i];
}
class _u extends pe {
    constructor(e) {
        super();
        _e(this, e, pu, gu, me, {
            hide: 0,
            fill: 1
        });
    }
}
function Vi(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    return {
        c() {
            e = Z("g");
            t = Z("path");
            n = Z("path");
            s(t, "opacity", "0.5");
            s(t, "d", "M90.5209 75.8114H64.3093C62.0367 70.1726 43.7778 22.3603 43.7778 22.3603C53.7299 16.2263 65.4519 12.6875 78.0005 12.6875C90.6603 12.6875 102.479 16.2893 112.487 22.524C112.487 22.524 92.7552 70.5563 90.5209 75.8114Z");
            s(t, "fill", "url(#paint0_radial)");
            s(t, "class", "svelte-1qaakgn");
            s(n, "fill-rule", "evenodd");
            s(n, "clip-rule", "evenodd");
            s(n, "d", "M44.3982 23.9551C54.1487 17.8795 65.6622 14.3694 78.0006 14.3694C90.4429 14.3694 102.047 17.9389 111.849 24.1091L113.13 20.9374C102.915 14.6357 90.88 11 78.0006 11C65.2249 11 53.2799 14.5774 43.1182 20.7857L44.3982 23.9551Z");
            s(n, "fill", "#C8EDFF");
            s(n, "class", "svelte-1qaakgn");
        },
        m(r, u) {
            R(r, e, u);
            d(e, t);
            d(e, n);
            o = true;
        },
        p(r, u) {},
        i(r) {
            if (!o) {
                re(() => {
                    if (a) {
                        a.end(1);
                    }
                    i = ue(e, fe, {
                        easing: le,
                        duration: 400
                    });
                    i.start();
                });
                o = true;
            }
        },
        o(r) {
            if (i) {
                i.invalidate();
            }
            a = Se(e, fe, {
                duration: 200
            });
            o = false;
        },
        d(r) {
            if (r) {
                S(e);
            }
            if (r && a) {
                a.end();
            }
        }
    };
}
function vu(l) {
    let e;
    let t;
    let n;
    let i;
    return {
        c() {
            e = Z("circle");
            s(e, "cx", "78");
            s(e, "cy", "78");
            s(e, "r", "11");
            s(e, "fill", "white");
            s(e, "class", "svelte-1qaakgn");
        },
        m(a, o) {
            R(a, e, o);
            i = true;
        },
        p(a, o) {},
        i(a) {
            if (!i) {
                re(() => {
                    if (n) {
                        n.end(1);
                    }
                    t = ue(e, We, {
                        easing: le,
                        duration: 300
                    });
                    t.start();
                });
                i = true;
            }
        },
        o(a) {
            if (t) {
                t.invalidate();
            }
            n = Se(e, fe, {
                duration: 200
            });
            i = false;
        },
        d(a) {
            if (a) {
                S(e);
            }
            if (a && n) {
                n.end();
            }
        }
    };
}
function bu(l) {
    let e;
    let t;
    let n;
    let i;
    return {
        c() {
            e = Z("path");
            s(e, "d", "M85.3439 88.5557C85.8567 88.795 86.3866 88.7437 86.9335 88.4019C87.5488 88.06 88.0274 87.5815 88.3693 86.9661C88.7111 86.3508 88.7624 85.821 88.5231 85.3766C87.8394 83.9408 86.3353 81.9239 84.0108 79.3259C81.6862 76.7279 79.242 74.2837 76.6782 71.9934C74.1144 69.703 72.1146 68.2502 70.6788 67.6349C70.2003 67.4298 69.6362 67.481 68.9867 67.7887C68.4056 68.0964 67.9612 68.5408 67.6535 69.1219C67.3459 69.703 67.3117 70.25 67.551 70.7627C68.2005 72.1643 69.6875 74.1641 72.012 76.7621C74.3708 79.3259 76.8149 81.7701 79.3446 84.0947C81.9426 86.4192 83.9424 87.9062 85.3439 88.5557ZM80.8829 80.0951C85.0876 75.7537 87.6001 72.6258 88.4205 70.7115C88.6256 70.2329 88.5573 69.6859 88.2154 69.0706C87.942 68.4553 87.5147 67.9938 86.9335 67.6861C86.3524 67.3785 85.8054 67.3443 85.2927 67.5836C83.2416 68.5408 80.1479 71.0875 76.0116 75.2238L80.8829 80.0951ZM76.0116 75.2238C74.0289 77.1381 72.2342 79.0354 70.6276 80.9155C69.0893 82.7956 68.0466 84.2827 67.4997 85.3766C67.2604 85.8893 67.2946 86.4363 67.6023 87.0174C67.9783 87.5986 68.474 88.06 69.0893 88.4019C69.7046 88.7437 70.2345 88.795 70.6788 88.5557C71.7727 88.0088 73.2427 86.949 75.0886 85.3766C77.003 83.8041 78.9344 82.0436 80.8829 80.0951L76.0116 75.2238ZM81.7033 83.2742C81.9768 83.411 82.2332 83.3939 82.4725 83.2229C82.7801 83.052 83.0194 82.8127 83.1903 82.5051C83.3613 82.1974 83.3954 81.9239 83.2929 81.6847C82.9169 80.9668 82.1477 79.9583 80.9854 78.6593C79.8574 77.3945 78.6438 76.181 77.3448 75.0187C76.08 73.8906 75.0886 73.1727 74.3708 72.8651C74.1315 72.7625 73.8409 72.7796 73.4991 72.9164C73.2256 73.0531 73.0034 73.2753 72.8325 73.583C72.6957 73.8564 72.6957 74.1299 72.8325 74.4034C73.1743 75.0871 73.9264 76.0784 75.0886 77.3774C76.2509 78.6764 77.4644 79.89 78.7293 81.0181C80.0283 82.1803 81.0196 82.9324 81.7033 83.2742Z");
            s(e, "fill", "white");
            s(e, "class", "svelte-1qaakgn");
        },
        m(a, o) {
            R(a, e, o);
            i = true;
        },
        p(a, o) {},
        i(a) {
            if (!i) {
                re(() => {
                    if (n) {
                        n.end(1);
                    }
                    t = ue(e, We, {
                        easing: le,
                        duration: 300
                    });
                    t.start();
                });
                i = true;
            }
        },
        o(a) {
            if (t) {
                t.invalidate();
            }
            n = Se(e, fe, {
                duration: 200
            });
            i = false;
        },
        d(a) {
            if (a) {
                S(e);
            }
            if (a && n) {
                n.end();
            }
        }
    };
}
function yu(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m = l[0] && Vi();
    const _ = [bu, vu];
    const b = [];
    a = l[0] ? 0 : 1;
    o = b[a] = _[a](l);
    return {
        c() {
            e = Z("svg");
            t = Z("g");
            if (m) {
                m.c();
            }
            n = Z("path");
            i = Z("path");
            o.c();
            r = Z("defs");
            u = Z("radialGradient");
            c = Z("stop");
            f = Z("stop");
            s(n, "opacity", "0.1");
            s(n, "fill-rule", "evenodd");
            s(n, "clip-rule", "evenodd");
            s(n, "d", "M78 14.3694C42.8578 14.3694 14.3694 42.8578 14.3694 78C14.3694 113.142 42.8578 141.631 78 141.631C113.142 141.631 141.631 113.142 141.631 78C141.631 42.8578 113.142 14.3694 78 14.3694ZM11 78C11 40.9969 40.9969 11 78 11C115.003 11 145 40.9969 145 78C145 115.003 115.003 145 78 145C40.9969 145 11 115.003 11 78Z");
            s(n, "fill", "white");
            s(n, "class", "svelte-1qaakgn");
            s(t, "id", "compass");
            te(t, "--rotation", (1 - l[1]) * 360 + "deg");
            s(t, "class", "svelte-1qaakgn");
            s(i, "fill-rule", "evenodd");
            s(i, "clip-rule", "evenodd");
            s(i, "d", "M72.0839 8.17773C73.8745 2.36264 82.106 2.36263 83.8966 8.17772L95.7228 46.5845C97.1504 51.2207 92.8831 55.7577 88.0832 55.055C84.8789 54.5859 81.3358 54.2274 77.9903 54.2274C74.6448 54.2274 71.1016 54.5859 67.8973 55.055C63.0975 55.7577 58.8302 51.2207 60.2577 46.5845L72.0839 8.17773ZM110.412 60.2546L148.818 72.0808C154.633 73.8714 154.633 82.1029 148.818 83.8934L110.412 95.7197C105.775 97.1472 101.238 92.8799 101.941 88.0801C102.41 84.8757 102.769 81.3326 102.769 77.9871C102.769 74.6416 102.41 71.0985 101.941 67.8942C101.238 63.0943 105.775 58.827 110.412 60.2546ZM83.8966 147.819C82.106 153.634 73.8745 153.634 72.0839 147.819L60.2577 109.412C58.8302 104.776 63.0975 100.239 67.8973 100.941C71.1016 101.41 74.6448 101.769 77.9903 101.769C81.3358 101.769 84.8789 101.41 88.0832 100.941C92.8831 100.239 97.1504 104.776 95.7228 109.412L83.8966 147.819ZM7.18164 72.0808C1.36655 73.8714 1.36653 82.1029 7.18163 83.8934L45.5884 95.7197C50.2246 97.1472 54.7616 92.8799 54.0589 88.0801C53.5898 84.8757 53.2313 81.3326 53.2313 77.9871C53.2313 74.6416 53.5898 71.0985 54.0589 67.8942C54.7616 63.0943 50.2246 58.827 45.5884 60.2546L7.18164 72.0808Z");
            s(i, "fill", "white");
            s(i, "class", "svelte-1qaakgn");
            s(c, "stop-color", "#CEEFFF");
            s(f, "offset", "0.869792");
            s(f, "stop-color", "#C4C4C4");
            s(f, "stop-opacity", "0");
            s(u, "id", "paint0_radial");
            s(u, "cx", "0");
            s(u, "cy", "0");
            s(u, "r", "1");
            s(u, "gradientUnits", "userSpaceOnUse");
            s(u, "gradientTransform", "translate(77.6706 20.4308) rotate(90) scale(55.8865 400.929)");
            s(e, "width", "156");
            s(e, "height", "156");
            s(e, "viewBox", "0 0 156 156");
            s(e, "fill", "none");
            s(e, "xmlns", "http://www.w3.org/2000/svg");
            s(e, "class", "svelte-1qaakgn");
        },
        m(C, p) {
            R(C, e, p);
            d(e, t);
            if (m) {
                m.m(t, null);
            }
            d(t, n);
            d(e, i);
            b[a].m(e, null);
            d(e, r);
            d(r, u);
            d(u, c);
            d(u, f);
            h = true;
        },
        p(C, [p]) {
            if (C[0]) {
                if (m) {
                    if (p & 1) {
                        x(m, 1);
                    }
                } else {
                    m = Vi();
                    m.c();
                    x(m, 1);
                    m.m(t, n);
                }
            } else if (m) {
                bt();
                W(m, 1, 1, () => {
                    m = null;
                });
                yt();
            }
            if (!h || p & 2) {
                te(t, "--rotation", (1 - C[1]) * 360 + "deg");
            }
            let z = a;
            a = C[0] ? 0 : 1;
            if (a !== z) {
                bt();
                W(b[z], 1, 1, () => {
                    b[z] = null;
                });
                yt();
                o = b[a];
                if (!o) {
                    o = b[a] = _[a](C);
                    o.c();
                }
                x(o, 1);
                o.m(e, r);
            }
        },
        i(C) {
            if (!h) {
                x(m);
                x(o);
                h = true;
            }
        },
        o(C) {
            W(m);
            W(o);
            h = false;
        },
        d(C) {
            if (C) {
                S(e);
            }
            if (m) {
                m.d();
            }
            b[a].d();
        }
    };
}
function ku(l, e, t) {
    let {
        active: n = false
    } = e;
    let {
        fill: i = "#2E525F"
    } = e;
    let {
        rotation: a = 0
    } = e;
    l.$$set = o => {
        if ("active" in o) {
            t(0, n = o.active);
        }
        if ("fill" in o) {
            t(2, i = o.fill);
        }
        if ("rotation" in o) {
            t(1, a = o.rotation);
        }
    };
    return [n, a, i];
}
class wu extends pe {
    constructor(e) {
        super();
        _e(this, e, ku, yu, me, {
            active: 0,
            fill: 2,
            rotation: 1
        });
    }
}
function Lu(l) {
    let e;
    let t;
    return {
        c() {
            e = Z("svg");
            t = Z("path");
            s(t, "d", "M7.87469 6.13203L10.1664 7.41536L8.88302 5.1237L10.1664 2.83203L7.87469 4.11536L5.58302 2.83203L6.86635 5.1237L5.58302 7.41536L7.87469 6.13203ZM18.8747 15.1154L16.583 13.832L17.8664 16.1237L16.583 18.4154L18.8747 17.132L21.1664 18.4154L19.883 16.1237L21.1664 13.832L18.8747 15.1154ZM21.1664 2.83203L18.8747 4.11536L16.583 2.83203L17.8664 5.1237L16.583 7.41536L18.8747 6.13203L21.1664 7.41536L19.883 5.1237L21.1664 2.83203ZM14.1722 7.6812C13.8147 7.3237 13.2372 7.3237 12.8797 7.6812L2.18219 18.3787C1.82469 18.7362 1.82469 19.3137 2.18219 19.6712L4.32719 21.8162C4.68469 22.1737 5.26219 22.1737 5.61969 21.8162L16.308 11.1279C16.6655 10.7704 16.6655 10.1929 16.308 9.83537L14.1722 7.6812V7.6812ZM13.228 12.7137L11.2847 10.7704L13.5214 8.5337L15.4647 10.477L13.228 12.7137V12.7137Z");
            s(t, "fill", l[0]);
            s(e, "style", l[1]);
            s(e, "width", "24");
            s(e, "height", "24");
            s(e, "viewBox", "0 0 24 24");
            s(e, "fill", "none");
            s(e, "xmlns", "http://www.w3.org/2000/svg");
            s(e, "class", "svelte-dglue3");
        },
        m(n, i) {
            R(n, e, i);
            d(e, t);
        },
        p(n, [i]) {
            if (i & 1) {
                s(t, "fill", n[0]);
            }
            if (i & 2) {
                s(e, "style", n[1]);
            }
        },
        i: G,
        o: G,
        d(n) {
            if (n) {
                S(e);
            }
        }
    };
}
function Cu(l, e, t) {
    let {
        fill: n = "white"
    } = e;
    let {
        style: i = ""
    } = e;
    l.$$set = a => {
        if ("fill" in a) {
            t(0, n = a.fill);
        }
        if ("style" in a) {
            t(1, i = a.style);
        }
    };
    return [n, i];
}
class zu extends pe {
    constructor(e) {
        super();
        _e(this, e, Cu, Lu, me, {
            fill: 0,
            style: 1
        });
    }
}
function Mu(l) {
    let e;
    let t;
    return {
        c() {
            e = Z("svg");
            t = Z("path");
            s(t, "d", "M5.83406 19.9011V10.806L5.17691 11.5169C5.13106 11.5689 5.07467 11.6106 5.01149 11.6391C4.94831 11.6676 4.87979 11.6824 4.81047 11.6824C4.74115 11.6824 4.67262 11.6676 4.60944 11.6391C4.54626 11.6106 4.48988 11.5689 4.44403 11.5169L2.0133 8.8468C1.96937 8.79947 1.93526 8.74391 1.91293 8.68331C1.89061 8.62272 1.88052 8.5583 1.88325 8.49379C1.88597 8.42927 1.90146 8.36594 1.92882 8.30744C1.95617 8.24895 1.99485 8.19646 2.04261 8.153L6.05637 4.4153L8.0889 4L8.74361 5.16773C9.06823 5.74639 9.54114 6.22815 10.1137 6.56345C10.6862 6.89874 11.3378 7.07548 12.0013 7.07548C12.6648 7.07548 13.3163 6.89874 13.8889 6.56345C14.4614 6.22815 14.9343 5.74639 15.2589 5.16773L15.9063 4L17.934 4.40797L21.9526 8.153C22.0018 8.19658 22.0418 8.24964 22.07 8.30902C22.0983 8.36839 22.1142 8.43286 22.117 8.49855C22.1197 8.56424 22.1092 8.62981 22.0859 8.69133C22.0627 8.75285 22.0274 8.80905 21.9819 8.85657L19.5561 11.5145C19.5102 11.5665 19.4538 11.6081 19.3907 11.6366C19.3275 11.6652 19.259 11.6799 19.1896 11.6799C19.1203 11.6799 19.0518 11.6652 18.9886 11.6366C18.9254 11.6081 18.869 11.5665 18.8232 11.5145L18.166 10.8036V19.9011C18.166 20.0307 18.1146 20.155 18.0229 20.2466C17.9313 20.3382 17.807 20.3897 17.6775 20.3897H6.33486C6.26968 20.3913 6.20483 20.3799 6.14414 20.3561C6.08344 20.3323 6.02813 20.2965 5.98146 20.251C5.93478 20.2055 5.8977 20.151 5.87239 20.091C5.84707 20.0309 5.83404 19.9663 5.83406 19.9011V19.9011Z");
            s(t, "fill", l[0]);
            s(e, "style", l[1]);
            s(e, "width", "24");
            s(e, "height", "24");
            s(e, "viewBox", "0 0 24 24");
            s(e, "fill", "none");
            s(e, "xmlns", "http://www.w3.org/2000/svg");
            s(e, "class", "svelte-dglue3");
        },
        m(n, i) {
            R(n, e, i);
            d(e, t);
        },
        p(n, [i]) {
            if (i & 1) {
                s(t, "fill", n[0]);
            }
            if (i & 2) {
                s(e, "style", n[1]);
            }
        },
        i: G,
        o: G,
        d(n) {
            if (n) {
                S(e);
            }
        }
    };
}
function Pu(l, e, t) {
    let {
        fill: n = "white"
    } = e;
    let {
        style: i = ""
    } = e;
    l.$$set = a => {
        if ("fill" in a) {
            t(0, n = a.fill);
        }
        if ("style" in a) {
            t(1, i = a.style);
        }
    };
    return [n, i];
}
class Ru extends pe {
    constructor(e) {
        super();
        _e(this, e, Pu, Mu, me, {
            fill: 0,
            style: 1
        });
    }
}
function Qi(l) {
    let e;
    return {
        c() {
            e = L("div");
            s(e, "class", "pulse svelte-1ngro65");
        },
        m(t, n) {
            R(t, e, n);
        },
        d(t) {
            if (t) {
                S(e);
            }
        }
    };
}
function $i(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m;
    let _;
    let b;
    r = new Ru({});
    return {
        c() {
            e = L("button");
            t = L("i");
            n = ne("jellyfill3");
            a = P();
            o = L("i");
            Q(r.$$.fragment);
            s(t, "class", i = "kalicon notranslate fill medium " + (l[2] === "exp" ? "forceAnimate" : "") + " svelte-1ngro65");
            s(o, "class", "kalicon notranslate solid medium svgIcon");
            s(e, "class", u = "menu-item no_highlights exp " + (l[2] === "exp" ? "selected" : "") + " svelte-1ngro65");
            s(e, "data-text", c = He.exp[l[9]]);
        },
        m(w, C) {
            R(w, e, C);
            d(e, t);
            d(t, n);
            d(e, a);
            d(e, o);
            $(r, o, null);
            m = true;
            if (!_) {
                b = [j(e, "click", l[31]), j(e, "touchend", l[32])];
                _ = true;
            }
        },
        p(w, C) {
            l = w;
            if (!m || C[0] & 4 && i !== (i = "kalicon notranslate fill medium " + (l[2] === "exp" ? "forceAnimate" : "") + " svelte-1ngro65")) {
                s(t, "class", i);
            }
            if (!m || C[0] & 4 && u !== (u = "menu-item no_highlights exp " + (l[2] === "exp" ? "selected" : "") + " svelte-1ngro65")) {
                s(e, "class", u);
            }
            if (!m || C[0] & 512 && c !== (c = He.exp[l[9]])) {
                s(e, "data-text", c);
            }
        },
        i(w) {
            if (!m) {
                x(r.$$.fragment, w);
                re(() => {
                    if (h) {
                        h.end(1);
                    }
                    f = ue(e, We, {
                        duration: 300,
                        easing: le
                    });
                    f.start();
                });
                m = true;
            }
        },
        o(w) {
            W(r.$$.fragment, w);
            if (f) {
                f.invalidate();
            }
            h = Se(e, We, {
                duration: 300,
                easing: le
            });
            m = false;
        },
        d(w) {
            if (w) {
                S(e);
            }
            ee(r);
            if (w && h) {
                h.end();
            }
            _ = false;
            kt(b);
        }
    };
}
function es(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m;
    let _;
    let b;
    let w;
    let C;
    let p;
    let z;
    let k;
    let v;
    let g;
    let y;
    let M;
    let N;
    let O;
    let A;
    let D;
    let H;
    let B;
    let T;
    let q;
    let X;
    let se;
    let Y;
    let ze;
    let Ze;
    let he;
    let Ve;
    let Te;
    let ye = l[1] ? "show" : "hide";
    let xe;
    let Oe;
    let Ee;
    let ce;
    let ke;
    let Fe;
    let tt;
    let Ye;
    B = new zu({});
    let Pe = !l[13] && $t && ts(l);
    return {
        c() {
            e = L("button");
            t = L("i");
            t.textContent = "jellyfill3";
            n = P();
            i = L("i");
            a = ne("info");
            h = P();
            m = L("section");
            _ = L("button");
            b = L("i");
            w = ne("jellyfill");
            p = P();
            z = L("i");
            z.textContent = "settings";
            y = P();
            M = L("button");
            N = L("i");
            O = ne("jellyfill");
            D = P();
            H = L("i");
            Q(B.$$.fragment);
            se = P();
            Y = L("button");
            ze = L("i");
            Ze = ne("jellyfill");
            Ve = P();
            Te = L("i");
            xe = ne(ye);
            ke = P();
            if (Pe) {
                Pe.c();
            }
            s(t, "class", "kalicon notranslate fill small svelte-1ngro65");
            s(i, "class", o = "kalicon notranslate solid small variable " + (l[6] ? "end" : "") + " svelte-1ngro65");
            s(e, "class", r = "subButton infoToggle no_highlights " + (l[6] ? "selected" : "") + " " + (l[7] ? "disabled" : "") + " svelte-1ngro65");
            s(e, "style", u = l[6] ? "z-index:5" : "");
            s(b, "class", C = "kalicon notranslate fill small " + (l[2] === "settings" ? "forceAnimate" : "") + " svelte-1ngro65");
            s(z, "class", "kalicon notranslate solid small svelte-1ngro65");
            s(_, "class", "subButton no_highlights svelte-1ngro65");
            s(_, "data-text", k = He.settings[l[9]]);
            Le(_, "selected", l[2] === "settings");
            s(N, "class", A = "kalicon notranslate fill small " + (l[2] === "lights" ? "forceAnimate" : "") + " svelte-1ngro65");
            s(H, "class", "kalicon notranslate solid small svgIcon svelte-1ngro65");
            s(M, "class", "subButton no_highlights svelte-1ngro65");
            s(M, "data-text", T = He.lights[l[9]]);
            Le(M, "selected", l[2] === "lights");
            s(ze, "class", he = "kalicon notranslate fill small " + (l[2] === "exp" ? "forceAnimate" : "") + " svelte-1ngro65");
            s(Te, "class", "kalicon notranslate solid small svelte-1ngro65");
            s(Y, "class", "subButton no_highlights svelte-1ngro65");
            s(Y, "data-text", Oe = l[1] ? He.hide[l[9]] : He.show[l[9]]);
            s(m, "class", "secondaryMenu svelte-1ngro65");
        },
        m(be, F) {
            R(be, e, F);
            d(e, t);
            d(e, n);
            d(e, i);
            d(i, a);
            R(be, h, F);
            R(be, m, F);
            d(m, _);
            d(_, b);
            d(b, w);
            d(_, p);
            d(_, z);
            d(m, y);
            d(m, M);
            d(M, N);
            d(N, O);
            d(M, D);
            d(M, H);
            $(B, H, null);
            d(m, se);
            d(m, Y);
            d(Y, ze);
            d(ze, Ze);
            d(Y, Ve);
            d(Y, Te);
            d(Te, xe);
            d(m, ke);
            if (Pe) {
                Pe.m(m, null);
            }
            Fe = true;
            if (!tt) {
                Ye = [j(e, "click", l[18]), j(_, "mouseover", l[35]), j(_, "mouseout", l[19]), j(_, "click", l[36]), j(_, "touchend", l[37]), j(M, "mouseover", l[38]), j(M, "mouseout", l[19]), j(M, "click", l[39]), j(M, "touchend", l[40]), j(Y, "mouseover", l[41]), j(Y, "mouseout", l[19]), j(Y, "click", l[42]), j(Y, "touchend", l[43])];
                tt = true;
            }
        },
        p(be, F) {
            l = be;
            if (!Fe || F[0] & 64 && o !== (o = "kalicon notranslate solid small variable " + (l[6] ? "end" : "") + " svelte-1ngro65")) {
                s(i, "class", o);
            }
            if (!Fe || F[0] & 192 && r !== (r = "subButton infoToggle no_highlights " + (l[6] ? "selected" : "") + " " + (l[7] ? "disabled" : "") + " svelte-1ngro65")) {
                s(e, "class", r);
            }
            if (!Fe || F[0] & 64 && u !== (u = l[6] ? "z-index:5" : "")) {
                s(e, "style", u);
            }
            if (!Fe || F[0] & 4 && C !== (C = "kalicon notranslate fill small " + (l[2] === "settings" ? "forceAnimate" : "") + " svelte-1ngro65")) {
                s(b, "class", C);
            }
            if (!Fe || F[0] & 512 && k !== (k = He.settings[l[9]])) {
                s(_, "data-text", k);
            }
            if (F[0] & 4) {
                Le(_, "selected", l[2] === "settings");
            }
            if (!Fe || F[0] & 4 && A !== (A = "kalicon notranslate fill small " + (l[2] === "lights" ? "forceAnimate" : "") + " svelte-1ngro65")) {
                s(N, "class", A);
            }
            if (!Fe || F[0] & 512 && T !== (T = He.lights[l[9]])) {
                s(M, "data-text", T);
            }
            if (F[0] & 4) {
                Le(M, "selected", l[2] === "lights");
            }
            if (!Fe || F[0] & 4 && he !== (he = "kalicon notranslate fill small " + (l[2] === "exp" ? "forceAnimate" : "") + " svelte-1ngro65")) {
                s(ze, "class", he);
            }
            if ((!Fe || F[0] & 2) && ye !== (ye = l[1] ? "show" : "hide")) {
                Re(xe, ye);
            }
            if (!Fe || F[0] & 514 && Oe !== (Oe = l[1] ? He.hide[l[9]] : He.show[l[9]])) {
                s(Y, "data-text", Oe);
            }
            if (!l[13] && $t) {
                if (Pe) {
                    Pe.p(l, F);
                    if (F[0] & 8192) {
                        x(Pe, 1);
                    }
                } else {
                    Pe = ts(l);
                    Pe.c();
                    x(Pe, 1);
                    Pe.m(m, null);
                }
            } else if (Pe) {
                bt();
                W(Pe, 1, 1, () => {
                    Pe = null;
                });
                yt();
            }
        },
        i(be) {
            if (!Fe) {
                re(() => {
                    if (f) {
                        f.end(1);
                    }
                    c = ue(e, We, {
                        duration: 300,
                        easing: le
                    });
                    c.start();
                });
                re(() => {
                    if (g) {
                        g.end(1);
                    }
                    v = ue(_, We, {
                        duration: 300,
                        easing: le,
                        delay: 50
                    });
                    v.start();
                });
                x(B.$$.fragment, be);
                re(() => {
                    if (X) {
                        X.end(1);
                    }
                    q = ue(M, We, {
                        duration: 300,
                        easing: le,
                        delay: 50
                    });
                    q.start();
                });
                re(() => {
                    if (ce) {
                        ce.end(1);
                    }
                    Ee = ue(Y, We, {
                        duration: 300,
                        easing: le,
                        delay: 100
                    });
                    Ee.start();
                });
                x(Pe);
                Fe = true;
            }
        },
        o(be) {
            if (c) {
                c.invalidate();
            }
            f = Se(e, We, {
                duration: 300,
                easing: le,
                delay: $t ? 150 : 100
            });
            if (v) {
                v.invalidate();
            }
            g = Se(_, We, {
                duration: 300,
                easing: le,
                delay: $t ? 100 : 50
            });
            W(B.$$.fragment, be);
            if (q) {
                q.invalidate();
            }
            X = Se(M, We, {
                duration: 300,
                easing: le,
                delay: $t ? 100 : 50
            });
            if (Ee) {
                Ee.invalidate();
            }
            ce = Se(Y, We, {
                duration: 300,
                easing: le,
                delay: $t ? 50 : 0
            });
            W(Pe);
            Fe = false;
        },
        d(be) {
            if (be) {
                S(e);
            }
            if (be && f) {
                f.end();
            }
            if (be) {
                S(h);
            }
            if (be) {
                S(m);
            }
            if (be && g) {
                g.end();
            }
            ee(B);
            if (be && X) {
                X.end();
            }
            if (be && ce) {
                ce.end();
            }
            if (Pe) {
                Pe.d();
            }
            tt = false;
            kt(Ye);
        }
    };
}
function ts(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    return {
        c() {
            e = L("button");
            t = L("i");
            t.textContent = "jellyfill";
            n = P();
            i = L("i");
            i.textContent = "pip";
            s(t, "class", "kalicon notranslate fill small svelte-1ngro65");
            s(i, "class", "kalicon notranslate solid small svelte-1ngro65");
            s(e, "class", "subButton pip svelte-1ngro65");
            s(e, "data-text", a = He.pip[l[9]]);
        },
        m(h, m) {
            R(h, e, m);
            d(e, t);
            d(e, n);
            d(e, i);
            u = true;
            if (!c) {
                f = j(e, "click", Oa);
                c = true;
            }
        },
        p(h, m) {
            l = h;
            if (!u || m[0] & 512 && a !== (a = He.pip[l[9]])) {
                s(e, "data-text", a);
            }
        },
        i(h) {
            if (!u) {
                re(() => {
                    if (r) {
                        r.end(1);
                    }
                    o = ue(e, We, {
                        duration: 300,
                        easing: le,
                        delay: 150
                    });
                    o.start();
                });
                u = true;
            }
        },
        o(h) {
            if (o) {
                o.invalidate();
            }
            r = Se(e, We, {
                duration: 300,
                easing: le
            });
            u = false;
        },
        d(h) {
            if (h) {
                S(e);
            }
            if (h && r) {
                r.end();
            }
            c = false;
            f();
        }
    };
}
function ls(l) {
    let e;
    let t;
    let n;
    return {
        c() {
            e = L("div");
            s(e, "class", "scrim svelte-1ngro65");
        },
        m(i, a) {
            R(i, e, a);
            if (!t) {
                n = [j(e, "mousemove", l[20]), j(e, "mouseout", l[19]), j(e, "click", l[20]), j(e, "touchstart", l[20])];
                t = true;
            }
        },
        p: G,
        d(i) {
            if (i) {
                S(e);
            }
            t = false;
            kt(n);
        }
    };
}
function Su(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m;
    let _;
    let b;
    let w;
    let C;
    let p;
    let z;
    let k;
    let v;
    let g;
    let y;
    let M;
    let N;
    let O;
    let A;
    let D;
    let H;
    let B;
    let T;
    let q;
    let X;
    let se;
    let Y;
    let ze;
    let Ze;
    let he;
    let Ve;
    let Te;
    let ye;
    let xe;
    let Oe;
    let Ee;
    let ce;
    let ke;
    let Fe;
    let tt;
    let Ye;
    let Pe;
    let be;
    let F;
    let ct;
    let ot;
    let Qe;
    let ft;
    let gt;
    let Bt;
    let dt;
    let lt;
    let nt;
    let qe;
    let wt;
    let pt;
    let mt;
    let Ge;
    let Pt;
    let it;
    let ve;
    let we;
    let At;
    let Rt;
    let Xe;
    let Be;
    let St;
    let De;
    let _n;
    let ti;
    let Ht = l[10] === "connected" && Qi();
    let st = l[1] && l[12].user.model && l[12].user.model.extractedParts.length > 0 && $i(l);
    F = new hu({
        props: {
            hide: !l[1]
        }
    });
    function Es(U) {
        l[33](U);
    }
    function Fs(U) {
        l[34](U);
    }
    let vn = {};
    if (l[2] !== undefined) {
        vn.selected = l[2];
    }
    if (l[3] !== undefined) {
        vn.forceClose = l[3];
    }
    Qe = new fu({
        props: vn
    });
    ht.push(() => ci(Qe, "selected", Es));
    ht.push(() => ci(Qe, "forceClose", Fs));
    let at = (!l[5] || l[6]) && (!l[2] && l[8].w < 600 || l[8].w > 600) && es(l);
    qe = new wu({
        props: {
            active: l[14].freeCamera,
            rotation: l[15]
        }
    });
    Rt = new _u({
        props: {
            hide: !l[1] || !l[4] && !l[14].freeCamera
        }
    });
    let Lt = l[5] && ls(l);
    St = new _o({
        props: {
            selected: l[2]
        }
    });
    return {
        c() {
            e = L("nav");
            t = L("input");
            n = P();
            i = L("button");
            a = L("i");
            a.textContent = "jellyfill3";
            o = P();
            r = L("i");
            u = ne("video");
            m = P();
            _ = L("button");
            b = L("i");
            w = ne("jellyfill");
            p = P();
            z = L("i");
            z.textContent = "charalt";
            g = P();
            y = L("button");
            M = L("i");
            N = ne("jellyfill");
            A = P();
            D = L("i");
            D.textContent = "sticker";
            T = P();
            q = L("button");
            X = L("i");
            se = ne("jellyfill2");
            ze = P();
            Ze = L("i");
            Ze.textContent = "backgroundalttwo";
            Te = P();
            ye = L("button");
            xe = L("i");
            Oe = ne("jellyfill3");
            ce = P();
            ke = L("i");
            ke.textContent = "phone";
            Fe = P();
            if (Ht) {
                Ht.c();
            }
            Pe = P();
            if (st) {
                st.c();
            }
            be = P();
            Q(F.$$.fragment);
            ot = P();
            Q(Qe.$$.fragment);
            Bt = P();
            if (at) {
                at.c();
            }
            dt = P();
            lt = L("section");
            nt = L("button");
            Q(qe.$$.fragment);
            mt = P();
            Ge = L("button");
            Pt = L("i");
            Pt.textContent = "jellyfill3";
            it = P();
            ve = L("i");
            ve.textContent = "flip";
            At = P();
            Q(Rt.$$.fragment);
            Xe = P();
            if (Lt) {
                Lt.c();
            }
            Be = P();
            Q(St.$$.fragment);
            s(t, "type", "checkbox");
            s(t, "href", "#");
            s(t, "class", "menu-open svelte-1ngro65");
            s(t, "name", "menu-open");
            s(t, "id", "menu-open");
            s(a, "class", "kalicon notranslate fill svelte-1ngro65");
            s(r, "class", c = "kalicon notranslate solid variable " + (l[7] ? "end" : "") + " svelte-1ngro65");
            s(i, "class", f = "menu-item video no_highlights " + (l[7] ? "selected" : "") + " svelte-1ngro65");
            s(i, "data-text", h = l[7] ? He.cameraOn[l[9]] : He.cameraOff[l[9]]);
            s(b, "class", C = "kalicon notranslate fill medium " + (l[2] === "char" ? "forceAnimate" : "") + " svelte-1ngro65");
            s(z, "class", "kalicon solid medium notranslate");
            s(_, "class", k = "menu-item no_highlights char " + (l[2] === "char" ? "selected" : "") + " svelte-1ngro65");
            s(_, "data-text", v = He.char[l[9]]);
            s(M, "class", O = "kalicon notranslate fill medium " + (l[2] === "sticker" ? "forceAnimate" : "") + " svelte-1ngro65");
            s(D, "class", "kalicon notranslate solid medium");
            s(y, "class", H = "menu-item no_highlights sticker " + (l[2] === "sticker" ? "selected" : "") + " svelte-1ngro65");
            s(y, "data-text", B = He.sticker[l[9]]);
            s(X, "class", Y = "kalicon notranslate fill medium " + (l[2] === "bg" ? "forceAnimate" : "") + " svelte-1ngro65");
            s(Ze, "class", "kalicon notranslate solid medium");
            s(q, "class", he = "menu-item no_highlights bg " + (l[2] === "bg" ? "selected" : "") + " svelte-1ngro65");
            s(q, "data-text", Ve = He.bg[l[9]]);
            s(xe, "class", Ee = "kalicon notranslate fill medium " + (l[2] === "call" ? "forceAnimate" : "") + " svelte-1ngro65");
            s(ke, "class", "kalicon notranslate solid medium svelte-1ngro65");
            s(ye, "class", tt = "menu-item no_highlights " + l[10] + " call " + (l[2] === "call" ? "selected" : "") + " svelte-1ngro65");
            s(ye, "data-text", Ye = l[10] === "connected" ? l[11] : He.call[l[9]]);
            s(e, "class", ct = "menu no_highlights " + (l[1] ? "" : "hide") + " svelte-1ngro65");
            s(nt, "class", wt = "menu-item no_highlights " + (l[14].freeCamera ? "selected" : "") + " svelte-1ngro65");
            s(nt, "data-text", pt = l[14].firstPerson ? He.firstPerson[l[9]] : He.selfie[l[9]]);
            Le(nt, "hide", !l[1] || !l[4] && !l[14].freeCamera);
            s(Pt, "class", "kalicon notranslate fill medium svelte-1ngro65");
            s(ve, "class", "kalicon notranslate solid medium");
            s(Ge, "class", "menu-item no_highlights svelte-1ngro65");
            s(Ge, "data-text", we = He.flip[l[9]]);
            Le(Ge, "hide", !l[1] || !l[4] && !l[14].freeCamera);
            s(lt, "class", "cameraMenu svelte-1ngro65");
            Le(lt, "hide", !l[1]);
        },
        m(U, ie) {
            R(U, e, ie);
            d(e, t);
            t.checked = l[1];
            d(e, n);
            d(e, i);
            d(i, a);
            d(i, o);
            d(i, r);
            d(r, u);
            d(e, m);
            d(e, _);
            d(_, b);
            d(b, w);
            d(_, p);
            d(_, z);
            d(e, g);
            d(e, y);
            d(y, M);
            d(M, N);
            d(y, A);
            d(y, D);
            d(e, T);
            d(e, q);
            d(q, X);
            d(X, se);
            d(q, ze);
            d(q, Ze);
            d(e, Te);
            d(e, ye);
            d(ye, xe);
            d(xe, Oe);
            d(ye, ce);
            d(ye, ke);
            d(ye, Fe);
            if (Ht) {
                Ht.m(ye, null);
            }
            d(e, Pe);
            if (st) {
                st.m(e, null);
            }
            d(e, be);
            $(F, e, null);
            R(U, ot, ie);
            $(Qe, U, ie);
            R(U, Bt, ie);
            if (at) {
                at.m(U, ie);
            }
            R(U, dt, ie);
            R(U, lt, ie);
            d(lt, nt);
            $(qe, nt, null);
            d(lt, mt);
            d(lt, Ge);
            d(Ge, Pt);
            d(Ge, it);
            d(Ge, ve);
            d(lt, At);
            $(Rt, lt, null);
            R(U, Xe, ie);
            if (Lt) {
                Lt.m(U, ie);
            }
            R(U, Be, ie);
            $(St, U, ie);
            De = true;
            if (!_n) {
                ti = [j(t, "change", l[22]), j(i, "click", l[17]), j(_, "click", l[23]), j(_, "touch", l[24]), j(y, "click", l[25]), j(y, "touchend", l[26]), j(q, "click", l[27]), j(q, "touchend", l[28]), j(ye, "click", l[29]), j(ye, "touchend", l[30]), j(nt, "mouseover", l[44]), j(nt, "click", zr), j(Ge, "click", Mr), j(lt, "mouseleave", l[45])];
                _n = true;
            }
        },
        p(U, ie) {
            if (ie[0] & 2) {
                t.checked = U[1];
            }
            if (!De || ie[0] & 128 && c !== (c = "kalicon notranslate solid variable " + (U[7] ? "end" : "") + " svelte-1ngro65")) {
                s(r, "class", c);
            }
            if (!De || ie[0] & 128 && f !== (f = "menu-item video no_highlights " + (U[7] ? "selected" : "") + " svelte-1ngro65")) {
                s(i, "class", f);
            }
            if (!De || ie[0] & 640 && h !== (h = U[7] ? He.cameraOn[U[9]] : He.cameraOff[U[9]])) {
                s(i, "data-text", h);
            }
            if (!De || ie[0] & 4 && C !== (C = "kalicon notranslate fill medium " + (U[2] === "char" ? "forceAnimate" : "") + " svelte-1ngro65")) {
                s(b, "class", C);
            }
            if (!De || ie[0] & 4 && k !== (k = "menu-item no_highlights char " + (U[2] === "char" ? "selected" : "") + " svelte-1ngro65")) {
                s(_, "class", k);
            }
            if (!De || ie[0] & 512 && v !== (v = He.char[U[9]])) {
                s(_, "data-text", v);
            }
            if (!De || ie[0] & 4 && O !== (O = "kalicon notranslate fill medium " + (U[2] === "sticker" ? "forceAnimate" : "") + " svelte-1ngro65")) {
                s(M, "class", O);
            }
            if (!De || ie[0] & 4 && H !== (H = "menu-item no_highlights sticker " + (U[2] === "sticker" ? "selected" : "") + " svelte-1ngro65")) {
                s(y, "class", H);
            }
            if (!De || ie[0] & 512 && B !== (B = He.sticker[U[9]])) {
                s(y, "data-text", B);
            }
            if (!De || ie[0] & 4 && Y !== (Y = "kalicon notranslate fill medium " + (U[2] === "bg" ? "forceAnimate" : "") + " svelte-1ngro65")) {
                s(X, "class", Y);
            }
            if (!De || ie[0] & 4 && he !== (he = "menu-item no_highlights bg " + (U[2] === "bg" ? "selected" : "") + " svelte-1ngro65")) {
                s(q, "class", he);
            }
            if (!De || ie[0] & 512 && Ve !== (Ve = He.bg[U[9]])) {
                s(q, "data-text", Ve);
            }
            if (!De || ie[0] & 4 && Ee !== (Ee = "kalicon notranslate fill medium " + (U[2] === "call" ? "forceAnimate" : "") + " svelte-1ngro65")) {
                s(xe, "class", Ee);
            }
            if (U[10] === "connected") {
                if (!Ht) {
                    Ht = Qi();
                    Ht.c();
                    Ht.m(ye, null);
                }
            } else if (Ht) {
                Ht.d(1);
                Ht = null;
            }
            if (!De || ie[0] & 1028 && tt !== (tt = "menu-item no_highlights " + U[10] + " call " + (U[2] === "call" ? "selected" : "") + " svelte-1ngro65")) {
                s(ye, "class", tt);
            }
            if (!De || ie[0] & 3584 && Ye !== (Ye = U[10] === "connected" ? U[11] : He.call[U[9]])) {
                s(ye, "data-text", Ye);
            }
            if (U[1] && U[12].user.model && U[12].user.model.extractedParts.length > 0) {
                if (st) {
                    st.p(U, ie);
                    if (ie[0] & 4098) {
                        x(st, 1);
                    }
                } else {
                    st = $i(U);
                    st.c();
                    x(st, 1);
                    st.m(e, be);
                }
            } else if (st) {
                bt();
                W(st, 1, 1, () => {
                    st = null;
                });
                yt();
            }
            const li = {};
            if (ie[0] & 2) {
                li.hide = !U[1];
            }
            F.$set(li);
            if (!De || ie[0] & 2 && ct !== (ct = "menu no_highlights " + (U[1] ? "" : "hide") + " svelte-1ngro65")) {
                s(e, "class", ct);
            }
            const bn = {};
            if (!ft && ie[0] & 4) {
                ft = true;
                bn.selected = U[2];
                fi(() => ft = false);
            }
            if (!gt && ie[0] & 8) {
                gt = true;
                bn.forceClose = U[3];
                fi(() => gt = false);
            }
            Qe.$set(bn);
            if ((!U[5] || U[6]) && (!U[2] && U[8].w < 600 || U[8].w > 600)) {
                if (at) {
                    at.p(U, ie);
                    if (ie[0] & 356) {
                        x(at, 1);
                    }
                } else {
                    at = es(U);
                    at.c();
                    x(at, 1);
                    at.m(dt.parentNode, dt);
                }
            } else if (at) {
                bt();
                W(at, 1, 1, () => {
                    at = null;
                });
                yt();
            }
            const yn = {};
            if (ie[0] & 16384) {
                yn.active = U[14].freeCamera;
            }
            if (ie[0] & 32768) {
                yn.rotation = U[15];
            }
            qe.$set(yn);
            if (!De || ie[0] & 16384 && wt !== (wt = "menu-item no_highlights " + (U[14].freeCamera ? "selected" : "") + " svelte-1ngro65")) {
                s(nt, "class", wt);
            }
            if (!De || ie[0] & 16896 && pt !== (pt = U[14].firstPerson ? He.firstPerson[U[9]] : He.selfie[U[9]])) {
                s(nt, "data-text", pt);
            }
            if (ie[0] & 16402) {
                Le(nt, "hide", !U[1] || !U[4] && !U[14].freeCamera);
            }
            if (!De || ie[0] & 512 && we !== (we = He.flip[U[9]])) {
                s(Ge, "data-text", we);
            }
            if (ie[0] & 16402) {
                Le(Ge, "hide", !U[1] || !U[4] && !U[14].freeCamera);
            }
            const ni = {};
            if (ie[0] & 16402) {
                ni.hide = !U[1] || !U[4] && !U[14].freeCamera;
            }
            Rt.$set(ni);
            if (ie[0] & 2) {
                Le(lt, "hide", !U[1]);
            }
            if (U[5]) {
                if (Lt) {
                    Lt.p(U, ie);
                } else {
                    Lt = ls(U);
                    Lt.c();
                    Lt.m(Be.parentNode, Be);
                }
            } else if (Lt) {
                Lt.d(1);
                Lt = null;
            }
            const ii = {};
            if (ie[0] & 4) {
                ii.selected = U[2];
            }
            St.$set(ii);
        },
        i(U) {
            if (!De) {
                x(st);
                x(F.$$.fragment, U);
                x(Qe.$$.fragment, U);
                x(at);
                x(qe.$$.fragment, U);
                x(Rt.$$.fragment, U);
                x(St.$$.fragment, U);
                De = true;
            }
        },
        o(U) {
            W(st);
            W(F.$$.fragment, U);
            W(Qe.$$.fragment, U);
            W(at);
            W(qe.$$.fragment, U);
            W(Rt.$$.fragment, U);
            W(St.$$.fragment, U);
            De = false;
        },
        d(U) {
            if (U) {
                S(e);
            }
            if (Ht) {
                Ht.d();
            }
            if (st) {
                st.d();
            }
            ee(F);
            if (U) {
                S(ot);
            }
            ee(Qe, U);
            if (U) {
                S(Bt);
            }
            if (at) {
                at.d(U);
            }
            if (U) {
                S(dt);
            }
            if (U) {
                S(lt);
            }
            ee(qe);
            ee(Rt);
            if (U) {
                S(Xe);
            }
            if (Lt) {
                Lt.d(U);
            }
            if (U) {
                S(Be);
            }
            ee(St, U);
            _n = false;
            kt(ti);
        }
    };
}
function Hu(l, e, t) {
    let n;
    I(l, Hl, F => t(1, n = F));
    I(l, ol, F => t(21, F));
    I(l, kn, F => t(5, F));
    I(l, Jt, F => t(6, F));
    I(l, tn, F => t(46, F));
    I(l, wl, F => t(7, F));
    I(l, ut, F => t(8, F));
    I(l, Vt, F => t(9, F));
    I(l, tl, F => t(10, F));
    I(l, pn, F => t(11, F));
    I(l, V, F => t(12, F));
    I(l, sl, F => t(13, F));
    I(l, Ie, F => t(14, F));
    I(l, Ol, F => t(15, F));
    let p;
    let z = false;
    let k = false;
    let v;
    const g = (F, ct) => {
        F.preventDefault();
        if (p === ct) {
            let ot = F.w < 600;
            if (ot) {
                t(3, z = true);
                return;
            }
            mn(p);
            fl.animate({
                action: "close",
                axis: ot ? "y" : "x",
                _flip: !ot,
                _curve: "curve",
                _numPoints: 5,
                _duration: ot ? 0 : 600
            });
            t(2, p = null);
        } else {
            t(2, p = ct);
        }
    };
    const y = () => {
        mn("camera");
        wl.set(!F);
        Wl();
    };
    const M = F => {
        if (!F.transition) {
            Jt.set(!F);
        }
    };
    const N = () => {
        clearTimeout(v);
        t(0, v = setTimeout(() => {
            if (!n) {
                kn.set(true);
            }
        }, 2e3));
    };
    const O = () => {
        if (!F && !n) {
            N();
        }
    };
    const A = F => {
        F.preventDefault();
        kn.set(false);
        N();
    };
    ol.subscribe(F => {
        if (F) {
            setTimeout(() => {
                Hl.set(true);
            }, 800);
        }
    });
    function D() {
        n = this.checked;
        Hl.set(n);
    }
    const H = F => {
        g(F, "char");
    };
    const B = F => {
        g(F, "char");
    };
    const T = F => {
        g(F, "sticker");
    };
    const q = F => {
        g(F, "sticker");
    };
    const X = F => {
        g(F, "bg");
    };
    const se = F => {
        g(F, "bg");
    };
    const Y = F => {
        g(F, "call");
    };
    const ze = F => {
        g(F, "call");
    };
    const Ze = F => {
        g(F, "exp");
    };
    const he = F => {
        g(F, "exp");
    };
    function Ve(F) {
        p = F;
        t(2, p);
    }
    function Te(F) {
        z = F;
        t(3, z);
    }
    const ye = () => {
        clearTimeout(v);
    };
    const xe = F => {
        g(F, "settings");
    };
    const Oe = F => {
        g(F, "settings");
    };
    const Ee = () => {
        clearTimeout(v);
    };
    const ce = F => {
        g(F, "lights");
    };
    const ke = F => {
        g(F, "lights");
    };
    const Fe = () => {
        clearTimeout(v);
    };
    const tt = F => {
        F.preventDefault();
        Hl.set(!n);
    };
    const Ye = F => {
        F.preventDefault();
        Hl.set(!n);
    };
    const Pe = () => {
        if (!Ln) {
            t(4, k = true);
        }
    };
    const be = () => {
        if (!Ln) {
            t(4, k = false);
        }
    };
    l.$$.update = () => {
        if (l.$$.dirty[0] & 2097155) {
            if (F && !n) {
                O();
            } else {
                clearTimeout(v);
            }
        }
    };
    return [v, n, p, z, k, F, F, F, F, F, F, F, F, F, F, F, g, y, M, N, A, F, D, H, B, T, q, X, se, Y, ze, Ze, he, Ve, Te, ye, xe, Oe, Ee, ce, ke, Fe, tt, Ye, Pe, be];
}
class Du extends pe {
    constructor(e) {
        super();
        _e(this, e, Hu, Su, me, {}, null, [-1, -1]);
    }
}
function Iu(l) {
    let e;
    return {
        c() {
            e = ne(l[1]);
        },
        m(t, n) {
            R(t, e, n);
        },
        p(t, n) {
            if (n & 2) {
                Re(e, t[1]);
            }
        },
        d(t) {
            if (t) {
                S(e);
            }
        }
    };
}
function Au(l) {
    let e;
    let t;
    let n;
    const i = l[5].default;
    const a = Bn(i, l, l[4], null);
    const o = a || Iu(l);
    return {
        c() {
            e = L("p");
            if (o) {
                o.c();
            }
            s(e, "class", "card svelte-yms4qk");
            s(e, "data-dragging", "false");
            s(e, "data-status", t = l[0] === true ? "current" : "waiting");
            s(e, "style", l[2]);
        },
        m(r, u) {
            R(r, e, u);
            if (o) {
                o.m(e, null);
            }
            n = true;
        },
        p(r, [u]) {
            if (a) {
                if (a.p && (!n || u & 16)) {
                    xn(a, i, r, r[4], n ? Un(i, r[4], u, null) : On(r[4]), null);
                }
            } else if (o && o.p && (!n || u & 2)) {
                o.p(r, n ? u : -1);
            }
            if (!n || u & 1 && t !== (t = r[0] === true ? "current" : "waiting")) {
                s(e, "data-status", t);
            }
            if (!n || u & 4) {
                s(e, "style", r[2]);
            }
        },
        i(r) {
            if (!n) {
                x(o, r);
                n = true;
            }
        },
        o(r) {
            W(o, r);
            n = false;
        },
        d(r) {
            if (r) {
                S(e);
            }
            if (o) {
                o.d(r);
            }
        }
    };
}
function Eu(l, e, t) {
    let {
        $$slots: n = {},
        $$scope: i
    } = e;
    let {
        isCurrent: a = false
    } = e;
    let {
        cardContent: o = ""
    } = e;
    let {
        dataParity: r = 1
    } = e;
    let {
        styles: u = ""
    } = e;
    l.$$set = c => {
        if ("isCurrent" in c) {
            t(0, a = c.isCurrent);
        }
        if ("cardContent" in c) {
            t(1, o = c.cardContent);
        }
        if ("dataParity" in c) {
            t(3, r = c.dataParity);
        }
        if ("styles" in c) {
            t(2, u = c.styles);
        }
        if ("$$scope" in c) {
            t(4, i = c.$$scope);
        }
    };
    return [a, o, u, r, i, n];
}
class Qt extends pe {
    constructor(e) {
        super();
        _e(this, e, Eu, Au, me, {
            isCurrent: 0,
            cardContent: 1,
            dataParity: 3,
            styles: 2
        });
    }
}
function ns(l) {
    let e;
    let t = (l[2] ? l[2].length - l[1] - 1 : "0") + "";
    let n;
    let i;
    let a;
    let o;
    return {
        c() {
            e = L("div");
            n = ne(t);
            s(e, "class", "counter svelte-beijvx");
        },
        m(r, u) {
            R(r, e, u);
            d(e, n);
            o = true;
        },
        p(r, u) {
            l = r;
            if ((!o || u & 6) && t !== (t = (l[2] ? l[2].length - l[1] - 1 : "0") + "")) {
                Re(n, t);
            }
        },
        i(r) {
            if (!o) {
                re(() => {
                    if (a) {
                        a.end(1);
                    }
                    i = ue(e, We, {
                        delay: 400,
                        duration: 300,
                        easing: le
                    });
                    i.start();
                });
                o = true;
            }
        },
        o(r) {
            if (i) {
                i.invalidate();
            }
            a = Se(e, We, {
                duration: 300,
                easing: le
            });
            o = false;
        },
        d(r) {
            if (r) {
                S(e);
            }
            if (r && a) {
                a.end();
            }
        }
    };
}
function Fu(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r = ln.refresh[l[4]] + "";
    let u;
    let c;
    let f;
    let h;
    let m;
    let _;
    const b = l[7].default;
    const w = Bn(b, l, l[6], null);
    let C = l[2] && l[2].length - l[1] - 1 > 0 && ns(l);
    return {
        c() {
            e = L("main");
            t = L("container");
            if (w) {
                w.c();
            }
            n = P();
            i = L("button");
            a = L("span");
            a.textContent = "refresh";
            o = P();
            u = ne(r);
            c = P();
            if (C) {
                C.c();
            }
            s(a, "class", "kalicon notranslate svelte-beijvx");
            s(i, "class", "no_highlights svelte-beijvx");
            s(e, "class", f = "container " + (l[2] && l[1] === l[2].length ? "done" : "") + " svelte-beijvx");
            te(e, "--maxWidth", Math.max(l[3].w, l[3].h) + "px");
            te(e, "--progress", l[2] ? l[1] / l[2].length : 0);
        },
        m(p, z) {
            R(p, e, z);
            d(e, t);
            if (w) {
                w.m(t, null);
            }
            d(t, n);
            d(t, i);
            d(i, a);
            d(i, o);
            d(i, u);
            d(t, c);
            if (C) {
                C.m(t, null);
            }
            l[8](e);
            h = true;
            if (!m) {
                _ = [j(i, "click", l[5]), j(i, "touchend", l[5], {
                    passive: true
                })];
                m = true;
            }
        },
        p(p, [z]) {
            if (w && w.p && (!h || z & 64)) {
                xn(w, b, p, p[6], h ? Un(b, p[6], z, null) : On(p[6]), null);
            }
            if ((!h || z & 16) && r !== (r = ln.refresh[p[4]] + "")) {
                Re(u, r);
            }
            if (p[2] && p[2].length - p[1] - 1 > 0) {
                if (C) {
                    C.p(p, z);
                    if (z & 6) {
                        x(C, 1);
                    }
                } else {
                    C = ns(p);
                    C.c();
                    x(C, 1);
                    C.m(t, null);
                }
            } else if (C) {
                bt();
                W(C, 1, 1, () => {
                    C = null;
                });
                yt();
            }
            if (!h || z & 6 && f !== (f = "container " + (p[2] && p[1] === p[2].length ? "done" : "") + " svelte-beijvx")) {
                s(e, "class", f);
            }
            if (!h || z & 8) {
                te(e, "--maxWidth", Math.max(p[3].w, p[3].h) + "px");
            }
            if (!h || z & 6) {
                te(e, "--progress", p[2] ? p[1] / p[2].length : 0);
            }
        },
        i(p) {
            if (!h) {
                x(w, p);
                x(C);
                h = true;
            }
        },
        o(p) {
            W(w, p);
            W(C);
            h = false;
        },
        d(p) {
            if (p) {
                S(e);
            }
            if (w) {
                w.d(p);
            }
            if (C) {
                C.d();
            }
            l[8](null);
            m = false;
            kt(_);
        }
    };
}
function As(l) {
    l.target.style.setProperty("--card-r", "");
    l.target.style.setProperty("--card-x", "");
    l.target.style.setProperty("--card-y", "");
    l.target.setAttribute("data-status", "waiting");
    l.target.removeEventListener("transitionend", As);
}
function Tu(l, e, t) {
    I(l, ut, C => t(3, C));
    I(l, Vt, C => t(4, C));
    let {
        $$slots: a = {},
        $$scope: o
    } = e;
    let r;
    let u = 0;
    let c;
    let f = 0;
    let h = 0;
    let m = 0;
    const _ = () => {
        c[0].setAttribute("data-loop", "peak");
        c[0].setAttribute("data-status", "current");
        t(1, u = 0);
    };
    function b(C) {
        var p = C.target;
        h = (en("--card-x", p, "float") || 0) + C.dx;
        m = (en("--card-y", p, "float") || 0) + C.dy;
        f = 15 * (h / 100);
        if (f > 15) {
            f = 15;
        } else if (f < -15) {
            f = -15;
        }
        p.style.setProperty("--card-x", h + "px");
        p.style.setProperty("--card-y", m + "px");
        p.style.setProperty("--card-r", f + "deg");
    }
    Nt(() => {
        t(2, c = document.querySelectorAll(".card"));
        xt(".card[data-status=\"current\"]").unset();
        xt(".card[data-status=\"current\"]").styleCursor(false).draggable({
            onstart: () => {
                event.target.setAttribute("data-dragging", true);
            },
            onmove: b,
            onend: C => {
                const p = document.documentElement.clientWidth;
                const z = p < 500 ? 500 : p;
                t(2, c = C.target.parentNode.querySelectorAll(".card"));
                const k = [...c].indexOf(C.target);
                C.target.setAttribute("data-dragging", false);
                if (Math.sqrt(Math.pow(C.pageX - C.x0, 2) + Math.pow(C.pageY - C.y0, 2) | 0) > 100) {
                    C.target.setAttribute("data-status", "transition");
                    if (h > 0) {
                        h = z;
                    } else {
                        h = z * -1;
                    }
                    C.target.addEventListener("transitionend", As);
                    if (k < c.length - 1) {
                        c[k + 1].setAttribute("data-status", "current");
                    }
                    t(1, u = k + 1);
                    if (k === c.length - 1) {
                        c[0].setAttribute("data-loop", "load");
                    } else {
                        c[0].setAttribute("data-loop", "");
                    }
                } else {
                    h = 0;
                    m = 0;
                    f = 0;
                    C.target.style.setProperty("--card-r", f + "deg");
                }
                C.target.style.setProperty("--card-x", h + "px");
                C.target.style.setProperty("--card-y", m + "px");
            }
        });
    });
    function w(C) {
        ht[C ? "unshift" : "push"](() => {
            r = C;
            t(0, r);
        });
    }
    l.$$set = C => {
        if ("$$scope" in C) {
            t(6, o = C.$$scope);
        }
    };
    return [r, u, c, C, C, _, o, a, w];
}
class Bu extends pe {
    constructor(e) {
        super();
        _e(this, e, Tu, Fu, me, {});
    }
}
function ss(l, e, t) {
    const n = l.slice();
    n[4] = e[t];
    return n;
}
function xu(l) {
    let e;
    let t;
    let n;
    let i;
    let a = Me[0][l[0]] + "";
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m;
    let _;
    let b;
    let w;
    return {
        c() {
            e = L("h2");
            e.textContent = "kalidoface";
            n = P();
            i = L("h3");
            r = P();
            u = Z("svg");
            c = Z("rect");
            f = Z("path");
            h = Z("path");
            m = Z("path");
            _ = Z("path");
            b = Z("path");
            s(e, "class", "notranslate svelte-1mx7g4j");
            s(i, "class", "svelte-1mx7g4j");
            s(c, "width", "360");
            s(c, "height", "360");
            s(c, "fill", "white");
            s(c, "rx", "185");
            s(f, "d", "M271.948 68.424C244.096 52.7124 211.801 46.7834 180.499 50.6249C199.465 52.9571 218.012 58.8861 234.92 68.424C268.203 87.9348 289.627 129.635 289.627 178.604C289.627 227.955 268.586 269.655 234.92 289.165C217.773 298.819 199.377 304.834 180.633 307.215C211.772 311.157 243.57 305.143 271.948 289.165C305.614 269.655 326.655 227.955 326.655 178.604C326.655 129.635 305.232 87.9348 271.948 68.424Z");
            s(f, "fill", "#82CEF6");
            s(h, "d", "M70.3352 178.986C70.3352 129.635 91.7591 87.9348 125.808 68.424C142.86 58.8861 161.496 52.9571 180.498 50.6249C149.255 46.7834 116.869 52.7124 88.7788 68.424C54.7303 87.9348 33.3066 129.635 33.3066 178.986C33.3066 227.955 54.7303 270.419 88.7788 289.165C117.634 305.143 149.611 311.157 180.633 307.215C161.818 304.834 143.243 298.819 125.808 289.165C91.7591 270.419 70.3352 227.955 70.3352 178.986Z");
            s(h, "fill", "#4450F3");
            s(m, "d", "M289.626 178.604C289.626 129.635 268.203 87.935 234.919 68.4241C218.011 58.8862 199.465 52.9572 180.498 50.625C161.496 52.9572 142.86 58.8862 125.807 68.4241C91.7588 87.935 70.335 129.635 70.335 178.986C70.335 227.955 91.7588 270.42 125.807 289.165C143.242 298.82 161.817 304.834 180.633 307.215C199.377 304.834 217.772 298.82 234.919 289.165C268.585 269.655 289.626 227.955 289.626 178.604Z");
            s(m, "fill", "#1A9EF3");
            s(_, "d", "M289.626 178.604C289.626 129.635 268.203 87.935 234.919 68.4241C218.011 58.8862 199.465 52.9572 180.498 50.625C161.496 52.9572 142.86 58.8862 125.807 68.4241C91.7588 87.935 70.335 129.635 70.335 178.986C70.335 227.955 91.7588 270.42 125.807 289.165C143.242 298.82 161.817 304.834 180.633 307.215C199.377 304.834 217.772 298.82 234.919 289.165C268.585 269.655 289.626 227.955 289.626 178.604Z");
            s(_, "fill", "#1A9EF3");
            s(b, "class", "rect");
            s(b, "d", "M202.885 190.052C198.563 187.061 189.588 185.399 179.948 185.399C170.308 185.399 161.333 187.061 157.012 190.052C152.358 193.044 156.014 211.992 158.341 216.978C162.995 225.621 171.305 230.275 179.948 230.275C188.591 230.275 196.901 225.621 201.555 216.978C203.882 211.992 207.539 193.044 202.885 190.052ZM234.797 174.761C224.492 174.761 216.181 180.412 216.181 187.393C216.181 194.374 224.492 200.025 234.797 200.025C244.769 200.025 253.079 194.374 253.079 187.393C253.079 180.412 244.769 174.761 234.797 174.761ZM125.1 174.761C115.127 174.761 106.817 180.412 106.817 187.393C106.817 194.374 115.127 200.025 125.1 200.025C135.405 200.025 143.715 194.374 143.715 187.393C143.715 180.412 135.405 174.761 125.1 174.761ZM230.475 159.803C240.78 166.451 239.783 153.487 230.475 145.176C224.159 139.858 216.181 139.858 210.198 145.176C200.558 153.487 199.561 166.451 210.198 159.803C216.181 155.481 224.159 155.481 230.475 159.803ZM149.698 145.176C143.715 139.858 135.737 139.858 129.421 145.176C120.113 153.487 119.116 166.451 129.421 159.803C135.737 155.481 143.715 155.481 149.698 159.803C160.336 166.451 159.338 153.487 149.698 145.176Z");
            s(b, "fill", "white");
            s(u, "class", "appIcon svelte-1mx7g4j");
            s(u, "width", "360");
            s(u, "height", "360");
            s(u, "viewBox", "0 0 360 360");
            s(u, "fill", "none");
            s(u, "xmlns", "http://www.w3.org/2000/svg");
        },
        m(C, p) {
            R(C, e, p);
            R(C, n, p);
            R(C, i, p);
            i.innerHTML = a;
            R(C, r, p);
            R(C, u, p);
            d(u, c);
            d(u, f);
            d(u, h);
            d(u, m);
            d(u, _);
            d(u, b);
        },
        p(C, p) {
            l = C;
            if (p & 1 && a !== (a = Me[0][l[0]] + "")) {
                i.innerHTML = a;
            }
        },
        i(C) {
            if (!t) {
                re(() => {
                    t = ue(e, fe, {
                        easing: le,
                        duration: 400,
                        delay: 400
                    });
                    t.start();
                });
            }
            if (!o) {
                re(() => {
                    o = ue(i, fe, {
                        easing: le,
                        duration: 400,
                        delay: 500
                    });
                    o.start();
                });
            }
            if (!w) {
                re(() => {
                    w = ue(u, fe, {
                        easing: le,
                        duration: 400,
                        delay: 600
                    });
                    w.start();
                });
            }
        },
        o: G,
        d(C) {
            if (C) {
                S(e);
            }
            if (C) {
                S(n);
            }
            if (C) {
                S(i);
            }
            if (C) {
                S(r);
            }
            if (C) {
                S(u);
            }
        }
    };
}
function Ou(l) {
    let e;
    let t;
    let n;
    let i;
    let a = Me[1][l[0]] + "";
    return {
        c() {
            e = L("img");
            n = P();
            i = L("p");
            if (!Ne(e.src, t = "https://yeemachine.github.io/k2021/gif/intro.gif")) {
                s(e, "src", t);
            }
            s(e, "class", "svelte-1mx7g4j");
            s(i, "class", "instr svelte-1mx7g4j");
        },
        m(o, r) {
            R(o, e, r);
            R(o, n, r);
            R(o, i, r);
            i.innerHTML = a;
        },
        p(o, r) {
            if (r & 1 && a !== (a = Me[1][o[0]] + "")) {
                i.innerHTML = a;
            }
        },
        d(o) {
            if (o) {
                S(e);
            }
            if (o) {
                S(n);
            }
            if (o) {
                S(i);
            }
        }
    };
}
function Uu(l) {
    let e;
    let t;
    let n;
    let i;
    let a = Me[2][l[0]] + "";
    return {
        c() {
            e = L("img");
            n = P();
            i = L("p");
            if (!Ne(e.src, t = "https://yeemachine.github.io/k2021/gif/charupload.gif")) {
                s(e, "src", t);
            }
            s(e, "class", "svelte-1mx7g4j");
            s(i, "class", "instr svelte-1mx7g4j");
        },
        m(o, r) {
            R(o, e, r);
            R(o, n, r);
            R(o, i, r);
            i.innerHTML = a;
        },
        p(o, r) {
            if (r & 1 && a !== (a = Me[2][o[0]] + "")) {
                i.innerHTML = a;
            }
        },
        d(o) {
            if (o) {
                S(e);
            }
            if (o) {
                S(n);
            }
            if (o) {
                S(i);
            }
        }
    };
}
function ju(l) {
    let e;
    let t;
    let n;
    let i;
    let a = Me[3][l[0]] + "";
    return {
        c() {
            e = L("img");
            n = P();
            i = L("p");
            if (!Ne(e.src, t = "https://yeemachine.github.io/k2021/gif/friends.gif")) {
                s(e, "src", t);
            }
            s(e, "class", "svelte-1mx7g4j");
            s(i, "class", "instr svelte-1mx7g4j");
        },
        m(o, r) {
            R(o, e, r);
            R(o, n, r);
            R(o, i, r);
            i.innerHTML = a;
        },
        p(o, r) {
            if (r & 1 && a !== (a = Me[3][o[0]] + "")) {
                i.innerHTML = a;
            }
        },
        d(o) {
            if (o) {
                S(e);
            }
            if (o) {
                S(n);
            }
            if (o) {
                S(i);
            }
        }
    };
}
function Wu(l) {
    let e;
    let t;
    let n;
    let i;
    let a = Me[4][l[0]] + "";
    return {
        c() {
            e = L("img");
            n = P();
            i = L("p");
            if (!Ne(e.src, t = "https://yeemachine.github.io/k2021/gif/backgrounds.gif")) {
                s(e, "src", t);
            }
            s(e, "class", "svelte-1mx7g4j");
            s(i, "class", "instr svelte-1mx7g4j");
        },
        m(o, r) {
            R(o, e, r);
            R(o, n, r);
            R(o, i, r);
            i.innerHTML = a;
        },
        p(o, r) {
            if (r & 1 && a !== (a = Me[4][o[0]] + "")) {
                i.innerHTML = a;
            }
        },
        d(o) {
            if (o) {
                S(e);
            }
            if (o) {
                S(n);
            }
            if (o) {
                S(i);
            }
        }
    };
}
function Nu(l) {
    let e;
    let t;
    let n;
    let i;
    let a = Me[5].header[l[0]] + "";
    let o;
    let r;
    let u;
    let c = Me[5].p[l[0]] + "";
    let f;
    let h;
    return {
        c() {
            e = L("h2");
            e.textContent = "kalidoface";
            t = P();
            n = L("section");
            i = L("h4");
            o = ne(a);
            r = P();
            u = L("p");
            f = P();
            h = L("div");
            h.innerHTML = `<a href="https://github.com/yeemachine/kalidokit"><span class="icon github svelte-1mx7g4j"><svg class="svelte-1mx7g4j"><use xlink:href="#svg-icon-github"></use></svg></span></a> 
         <a href="https://instagram.com/yeemachine"><span class="icon github svelte-1mx7g4j"><svg class="svelte-1mx7g4j"><use xlink:href="#svg-icon-instagram"></use></svg></span></a> 
         <a href="https://twitter.com/yeemachine"><span class="icon github svelte-1mx7g4j"><svg class="svelte-1mx7g4j"><use xlink:href="#svg-icon-twitter"></use></svg></span></a>`;
            s(e, "class", "notranslate svelte-1mx7g4j");
            te(e, "color", "var(--accent1)");
            te(i, "color", "var(--accent1)");
            s(i, "class", "svelte-1mx7g4j");
            s(u, "class", "svelte-1mx7g4j");
            s(n, "class", "svelte-1mx7g4j");
            s(h, "class", "soc svelte-1mx7g4j");
        },
        m(m, _) {
            R(m, e, _);
            R(m, t, _);
            R(m, n, _);
            d(n, i);
            d(i, o);
            d(n, r);
            d(n, u);
            u.innerHTML = c;
            R(m, f, _);
            R(m, h, _);
        },
        p(m, _) {
            if (_ & 1 && a !== (a = Me[5].header[m[0]] + "")) {
                Re(o, a);
            }
            if (_ & 1 && c !== (c = Me[5].p[m[0]] + "")) {
                u.innerHTML = c;
            }
        },
        d(m) {
            if (m) {
                S(e);
            }
            if (m) {
                S(t);
            }
            if (m) {
                S(n);
            }
            if (m) {
                S(f);
            }
            if (m) {
                S(h);
            }
        }
    };
}
function qu(l) {
    let e;
    let t;
    let n;
    let i;
    let a = Me[6].header[l[0]] + "";
    let o;
    let r;
    let u;
    let c = Me[6].p[l[0]] + "";
    let f;
    let h;
    let m;
    let _;
    let b;
    let w;
    let C = Me[6].list[l[0]][0] + "";
    let p;
    let z;
    let k;
    let v;
    let g;
    let y = Me[6].list[l[0]][1] + "";
    let M;
    let N;
    let O;
    let A;
    let D;
    let H = Me[6].list[l[0]][2] + "";
    let B;
    let T;
    let q;
    let X;
    let se;
    let Y = Me[6].list[l[0]][3] + "";
    let ze;
    let Ze;
    let he;
    let Ve;
    let Te;
    let ye = Me[6].list[l[0]][4] + "";
    let xe;
    let Oe;
    let Ee;
    return {
        c() {
            e = L("h2");
            e.textContent = "kalidoface";
            t = P();
            n = L("div");
            i = L("h4");
            o = ne(a);
            r = P();
            u = L("p");
            f = ne(c);
            h = P();
            m = L("ul");
            _ = L("li");
            b = L("p");
            b.innerHTML = "<a href=\"https://twitter.com/hootalex\">hootalex</a>";
            w = L("p");
            p = ne(C);
            z = P();
            k = L("li");
            v = L("p");
            v.innerHTML = "<a href=\"https://pixiv.github.io/three-vrm/docs/\">Pixiv</a>";
            g = L("p");
            M = ne(y);
            N = P();
            O = L("li");
            A = L("p");
            A.innerHTML = "<a href=\"https://glitch.com\">Glitch</a>";
            D = L("p");
            B = ne(H);
            T = P();
            q = L("li");
            X = L("p");
            X.innerHTML = "<a href=\"https://google.github.io/mediapipe/\">Google MediaPipe</a>";
            se = L("p");
            ze = ne(Y);
            Ze = P();
            he = L("li");
            Ve = L("p");
            Ve.innerHTML = "<a href=\"https://hub.vroid.com/\">Tensorflow.js</a>";
            Te = L("p");
            xe = ne(ye);
            Oe = P();
            Ee = L("div");
            s(e, "class", "notranslate svelte-1mx7g4j");
            te(e, "color", "var(--accent1)");
            te(i, "color", "var(--accent1)");
            s(i, "class", "svelte-1mx7g4j");
            s(u, "class", "svelte-1mx7g4j");
            s(b, "class", "svelte-1mx7g4j");
            s(w, "class", "svelte-1mx7g4j");
            s(_, "class", "svelte-1mx7g4j");
            s(v, "class", "svelte-1mx7g4j");
            s(g, "class", "svelte-1mx7g4j");
            s(k, "class", "svelte-1mx7g4j");
            s(A, "class", "svelte-1mx7g4j");
            s(D, "class", "svelte-1mx7g4j");
            s(O, "class", "svelte-1mx7g4j");
            s(X, "class", "svelte-1mx7g4j");
            s(se, "class", "svelte-1mx7g4j");
            s(q, "class", "svelte-1mx7g4j");
            s(Ve, "class", "svelte-1mx7g4j");
            s(Te, "class", "svelte-1mx7g4j");
            s(he, "class", "svelte-1mx7g4j");
            s(m, "class", "svelte-1mx7g4j");
            s(n, "class", "svelte-1mx7g4j");
            s(Ee, "class", "svelte-1mx7g4j");
        },
        m(ce, ke) {
            R(ce, e, ke);
            R(ce, t, ke);
            R(ce, n, ke);
            d(n, i);
            d(i, o);
            d(n, r);
            d(n, u);
            d(u, f);
            d(n, h);
            d(n, m);
            d(m, _);
            d(_, b);
            d(_, w);
            d(w, p);
            d(m, z);
            d(m, k);
            d(k, v);
            d(k, g);
            d(g, M);
            d(m, N);
            d(m, O);
            d(O, A);
            d(O, D);
            d(D, B);
            d(m, T);
            d(m, q);
            d(q, X);
            d(q, se);
            d(se, ze);
            d(m, Ze);
            d(m, he);
            d(he, Ve);
            d(he, Te);
            d(Te, xe);
            R(ce, Oe, ke);
            R(ce, Ee, ke);
        },
        p(ce, ke) {
            if (ke & 1 && a !== (a = Me[6].header[ce[0]] + "")) {
                Re(o, a);
            }
            if (ke & 1 && c !== (c = Me[6].p[ce[0]] + "")) {
                Re(f, c);
            }
            if (ke & 1 && C !== (C = Me[6].list[ce[0]][0] + "")) {
                Re(p, C);
            }
            if (ke & 1 && y !== (y = Me[6].list[ce[0]][1] + "")) {
                Re(M, y);
            }
            if (ke & 1 && H !== (H = Me[6].list[ce[0]][2] + "")) {
                Re(B, H);
            }
            if (ke & 1 && Y !== (Y = Me[6].list[ce[0]][3] + "")) {
                Re(ze, Y);
            }
            if (ke & 1 && ye !== (ye = Me[6].list[ce[0]][4] + "")) {
                Re(xe, ye);
            }
        },
        d(ce) {
            if (ce) {
                S(e);
            }
            if (ce) {
                S(t);
            }
            if (ce) {
                S(n);
            }
            if (ce) {
                S(Oe);
            }
            if (ce) {
                S(Ee);
            }
        }
    };
}
function as(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r = l[4].name + "";
    let u;
    let c;
    let f;
    let h;
    let m = l[4].author + "";
    let _;
    let b;
    return {
        c() {
            e = L("li");
            t = L("p");
            n = L("img");
            a = P();
            o = L("a");
            u = ne(r);
            f = P();
            h = L("p");
            _ = ne(m);
            b = P();
            if (!Ne(n.src, i = l[4].icon)) {
                s(n, "src", i);
            }
            s(n, "class", "svelte-1mx7g4j");
            s(o, "href", c = l[4].source);
            te(t, "display", "flex");
            te(t, "align-items", "center");
            s(t, "class", "svelte-1mx7g4j");
            s(h, "class", "svelte-1mx7g4j");
            s(e, "class", "modelCredit svelte-1mx7g4j");
        },
        m(w, C) {
            R(w, e, C);
            d(e, t);
            d(t, n);
            d(t, a);
            d(t, o);
            d(o, u);
            d(e, f);
            d(e, h);
            d(h, _);
            d(e, b);
        },
        p: G,
        d(w) {
            if (w) {
                S(e);
            }
        }
    };
}
function Gu(l) {
    let e;
    let t;
    let n;
    let i;
    let a = Me[7].header[l[0]] + "";
    let o;
    let r;
    let u;
    let c = Me[7].p[l[0]] + "";
    let f;
    let h;
    let m;
    let _;
    let b;
    let w = Yt;
    let C = [];
    for (let p = 0; p < w.length; p += 1) {
        C[p] = as(ss(l, w, p));
    }
    return {
        c() {
            e = L("h2");
            e.textContent = "kalidoface";
            t = P();
            n = L("div");
            i = L("h4");
            o = ne(a);
            r = P();
            u = L("p");
            f = ne(c);
            h = P();
            m = L("ul");
            for (let p = 0; p < C.length; p += 1) {
                C[p].c();
            }
            _ = P();
            b = L("div");
            s(e, "class", "notranslate svelte-1mx7g4j");
            te(e, "color", "var(--accent1)");
            te(i, "color", "var(--accent1)");
            s(i, "class", "svelte-1mx7g4j");
            s(u, "class", "svelte-1mx7g4j");
            s(m, "class", "svelte-1mx7g4j");
            s(n, "class", "svelte-1mx7g4j");
            s(b, "class", "svelte-1mx7g4j");
        },
        m(p, z) {
            R(p, e, z);
            R(p, t, z);
            R(p, n, z);
            d(n, i);
            d(i, o);
            d(n, r);
            d(n, u);
            d(u, f);
            d(n, h);
            d(n, m);
            for (let k = 0; k < C.length; k += 1) {
                C[k].m(m, null);
            }
            R(p, _, z);
            R(p, b, z);
        },
        p(p, z) {
            if (z & 1 && a !== (a = Me[7].header[p[0]] + "")) {
                Re(o, a);
            }
            if (z & 1 && c !== (c = Me[7].p[p[0]] + "")) {
                Re(f, c);
            }
            if (z & 0) {
                w = Yt;
                let k;
                for (k = 0; k < w.length; k += 1) {
                    const v = ss(p, w, k);
                    if (C[k]) {
                        C[k].p(v, z);
                    } else {
                        C[k] = as(v);
                        C[k].c();
                        C[k].m(m, null);
                    }
                }
                for (; k < C.length; k += 1) {
                    C[k].d(1);
                }
                C.length = w.length;
            }
        },
        d(p) {
            if (p) {
                S(e);
            }
            if (p) {
                S(t);
            }
            if (p) {
                S(n);
            }
            jn(C, p);
            if (p) {
                S(_);
            }
            if (p) {
                S(b);
            }
        }
    };
}
function Zu(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m;
    let _;
    let b;
    let w;
    let C;
    let p;
    let z = ln.close[l[0]] + "";
    let k;
    let v;
    let g;
    let y;
    let M;
    let N;
    let O;
    let A;
    e = new Qt({
        props: {
            styles: "align-items:flex-end;--theme-color:var(--theme0);--text-color:var(--text0);",
            isCurrent: true,
            $$slots: {
                default: [xu]
            },
            $$scope: {
                ctx: l
            }
        }
    });
    n = new Qt({
        props: {
            styles: "var(--theme1);--text-color:var(--text2)",
            $$slots: {
                default: [Ou]
            },
            $$scope: {
                ctx: l
            }
        }
    });
    a = new Qt({
        props: {
            styles: "--theme-color:var(--theme1);--text-color:var(--text2);",
            $$slots: {
                default: [Uu]
            },
            $$scope: {
                ctx: l
            }
        }
    });
    r = new Qt({
        props: {
            styles: "--theme-color:var(--theme1);--text-color:var(--text2);",
            $$slots: {
                default: [ju]
            },
            $$scope: {
                ctx: l
            }
        }
    });
    c = new Qt({
        props: {
            styles: "--theme-color:var(--theme1);--text-color:var(--text2);",
            $$slots: {
                default: [Wu]
            },
            $$scope: {
                ctx: l
            }
        }
    });
    h = new Qt({
        props: {
            styles: "--theme-color:var(--theme4);--text-color:var(--text2);",
            $$slots: {
                default: [Nu]
            },
            $$scope: {
                ctx: l
            }
        }
    });
    _ = new Qt({
        props: {
            styles: "--theme-color:var(--theme4);--text-color:var(--text2);",
            $$slots: {
                default: [qu]
            },
            $$scope: {
                ctx: l
            }
        }
    });
    w = new Qt({
        props: {
            styles: "--theme-color:var(--theme4);--text-color:var(--text2);",
            $$slots: {
                default: [Gu]
            },
            $$scope: {
                ctx: l
            }
        }
    });
    return {
        c() {
            Q(e.$$.fragment);
            t = P();
            Q(n.$$.fragment);
            i = P();
            Q(a.$$.fragment);
            o = P();
            Q(r.$$.fragment);
            u = P();
            Q(c.$$.fragment);
            f = P();
            Q(h.$$.fragment);
            m = P();
            Q(_.$$.fragment);
            b = P();
            Q(w.$$.fragment);
            C = P();
            p = L("button");
            k = ne(z);
            v = P();
            g = L("i");
            g.textContent = "jellyfill";
            y = P();
            M = L("i");
            M.textContent = "jellyfill";
            s(g, "class", "kalicon notranslate focus");
            s(M, "class", "kalicon notranslate shadow");
            s(p, "class", "launch svelte-1mx7g4j");
        },
        m(D, H) {
            $(e, D, H);
            R(D, t, H);
            $(n, D, H);
            R(D, i, H);
            $(a, D, H);
            R(D, o, H);
            $(r, D, H);
            R(D, u, H);
            $(c, D, H);
            R(D, f, H);
            $(h, D, H);
            R(D, m, H);
            $(_, D, H);
            R(D, b, H);
            $(w, D, H);
            R(D, C, H);
            R(D, p, H);
            d(p, k);
            d(p, v);
            d(p, g);
            d(p, y);
            d(p, M);
            N = true;
            if (!O) {
                A = j(p, "click", l[1]);
                O = true;
            }
        },
        p(D, H) {
            const B = {};
            if (H & 129) {
                B.$$scope = {
                    dirty: H,
                    ctx: D
                };
            }
            e.$set(B);
            const T = {};
            if (H & 129) {
                T.$$scope = {
                    dirty: H,
                    ctx: D
                };
            }
            n.$set(T);
            const q = {};
            if (H & 129) {
                q.$$scope = {
                    dirty: H,
                    ctx: D
                };
            }
            a.$set(q);
            const X = {};
            if (H & 129) {
                X.$$scope = {
                    dirty: H,
                    ctx: D
                };
            }
            r.$set(X);
            const se = {};
            if (H & 129) {
                se.$$scope = {
                    dirty: H,
                    ctx: D
                };
            }
            c.$set(se);
            const Y = {};
            if (H & 129) {
                Y.$$scope = {
                    dirty: H,
                    ctx: D
                };
            }
            h.$set(Y);
            const ze = {};
            if (H & 129) {
                ze.$$scope = {
                    dirty: H,
                    ctx: D
                };
            }
            _.$set(ze);
            const Ze = {};
            if (H & 129) {
                Ze.$$scope = {
                    dirty: H,
                    ctx: D
                };
            }
            w.$set(Ze);
            if ((!N || H & 1) && z !== (z = ln.close[D[0]] + "")) {
                Re(k, z);
            }
        },
        i(D) {
            if (!N) {
                x(e.$$.fragment, D);
                x(n.$$.fragment, D);
                x(a.$$.fragment, D);
                x(r.$$.fragment, D);
                x(c.$$.fragment, D);
                x(h.$$.fragment, D);
                x(_.$$.fragment, D);
                x(w.$$.fragment, D);
                N = true;
            }
        },
        o(D) {
            W(e.$$.fragment, D);
            W(n.$$.fragment, D);
            W(a.$$.fragment, D);
            W(r.$$.fragment, D);
            W(c.$$.fragment, D);
            W(h.$$.fragment, D);
            W(_.$$.fragment, D);
            W(w.$$.fragment, D);
            N = false;
        },
        d(D) {
            ee(e, D);
            if (D) {
                S(t);
            }
            ee(n, D);
            if (D) {
                S(i);
            }
            ee(a, D);
            if (D) {
                S(o);
            }
            ee(r, D);
            if (D) {
                S(u);
            }
            ee(c, D);
            if (D) {
                S(f);
            }
            ee(h, D);
            if (D) {
                S(m);
            }
            ee(_, D);
            if (D) {
                S(b);
            }
            ee(w, D);
            if (D) {
                S(C);
            }
            if (D) {
                S(p);
            }
            O = false;
            A();
        }
    };
}
function Yu(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m;
    let _;
    let b;
    let w;
    let C;
    let p;
    let z;
    let k;
    let v;
    p = new Bu({
        props: {
            $$slots: {
                default: [Zu]
            },
            $$scope: {
                ctx: l
            }
        }
    });
    return {
        c() {
            e = L("container");
            t = L("a");
            t.innerHTML = "<img height=\"36\" style=\"border:0px;height:36px;width:auto\" src=\"https://cdn.glitch.com/239c5934-4d83-4c5c-bef6-44dcdb04c8fb%2Fkofi.png?v=1626708861780\" border=\"0\" alt=\"Buy Me a Coffee at ko-fi.com\" class=\"svelte-1mx7g4j\"/>";
            a = P();
            o = Z("svg");
            r = Z("symbol");
            u = Z("path");
            c = Z("symbol");
            f = Z("path");
            h = Z("symbol");
            m = Z("path");
            _ = Z("path");
            b = Z("circle");
            w = P();
            C = L("div");
            Q(p.$$.fragment);
            s(t, "href", "https://ko-fi.com/B0B75DIY1");
            s(t, "target", "_blank");
            te(t, "position", "absolute");
            te(t, "left", "16px");
            te(t, "bottom", "16px");
            s(u, "d", "M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z");
            s(r, "id", "svg-icon-twitter");
            s(r, "title", "Twitter");
            s(r, "viewBox", "0 0 512 512");
            s(f, "d", "M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z");
            s(c, "id", "svg-icon-github");
            s(c, "title", "GitHub");
            s(c, "viewBox", "0 0 512 512");
            s(m, "d", "M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z");
            s(_, "d", "M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z");
            s(b, "cx", "351.5");
            s(b, "cy", "160.5");
            s(b, "r", "21.5");
            s(h, "id", "svg-icon-instagram");
            s(h, "title", "Instagram");
            s(h, "viewBox", "0 0 512 512");
            s(o, "xmlns", "http://www.w3.org/2000/svg");
            te(o, "display", "none");
            s(C, "class", "svelte-1mx7g4j");
            s(e, "class", "svelte-1mx7g4j");
        },
        m(g, y) {
            R(g, e, y);
            d(e, t);
            d(e, a);
            d(e, o);
            d(o, r);
            d(r, u);
            d(o, c);
            d(c, f);
            d(o, h);
            d(h, m);
            d(h, _);
            d(h, b);
            d(e, w);
            d(e, C);
            $(p, C, null);
            v = true;
        },
        p(g, [y]) {
            l = g;
            const M = {};
            if (y & 129) {
                M.$$scope = {
                    dirty: y,
                    ctx: l
                };
            }
            p.$set(M);
        },
        i(g) {
            if (!v) {
                re(() => {
                    if (i) {
                        i.end(1);
                    }
                    n = ue(t, We, {
                        delay: 500,
                        duration: 600,
                        easing: le,
                        baseScale: .9
                    });
                    n.start();
                });
                x(p.$$.fragment, g);
                re(() => {
                    if (k) {
                        k.end(1);
                    }
                    z = ue(C, Xt, {
                        y: 20,
                        easing: le,
                        duration: 400,
                        delay: 200
                    });
                    z.start();
                });
                v = true;
            }
        },
        o(g) {
            if (n) {
                n.invalidate();
            }
            i = Se(t, fe, {
                duration: 200
            });
            W(p.$$.fragment, g);
            if (z) {
                z.invalidate();
            }
            k = Se(C, Xt, {
                y: 20,
                easing: le,
                duration: 400
            });
            v = false;
        },
        d(g) {
            if (g) {
                S(e);
            }
            if (g && i) {
                i.end();
            }
            ee(p);
            if (g && k) {
                k.end();
            }
        }
    };
}
function Xu(l, e, t) {
    I(l, Jt, r => t(2, r));
    I(l, tn, r => t(3, r));
    I(l, Vt, r => t(0, r));
    return [r, r => {
        if (!r.transition) {
            Jt.set(!r);
        }
    }];
}
class Ju extends pe {
    constructor(e) {
        super();
        _e(this, e, Xu, Yu, me, {});
    }
}
function Ku(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m;
    let _;
    let b;
    let w;
    let C;
    let p;
    let z;
    let k;
    let v;
    let g;
    return {
        c() {
            e = L("style");
            e.textContent = `svg{
             position:absolute;
           }`;
            t = P();
            n = Z("defs");
            i = Z("linearGradient");
            a = Z("stop");
            o = Z("stop");
            r = Z("linearGradient");
            u = Z("stop");
            c = Z("stop");
            f = Z("linearGradient");
            h = Z("stop");
            m = Z("stop");
            _ = P();
            b = Z("path");
            C = P();
            p = Z("path");
            k = P();
            v = Z("path");
            s(a, "offset", "0%");
            s(a, "stop-color", "#5800C9");
            s(o, "offset", "100%");
            s(o, "stop-color", "#ff0ea1");
            s(i, "id", "gradient1");
            s(i, "x1", "0%");
            s(i, "y1", "0%");
            s(i, "x2", "0%");
            s(i, "y2", "100%");
            s(u, "offset", "0%");
            s(u, "stop-color", "#ffd392");
            s(c, "offset", "100%");
            s(c, "stop-color", "#ff3898");
            s(r, "id", "gradient2");
            s(r, "x1", "0%");
            s(r, "y1", "0%");
            s(r, "x2", "0%");
            s(r, "y2", "100%");
            s(h, "offset", "0%");
            s(h, "stop-color", "#38DBFF");
            s(m, "offset", "100%");
            s(m, "stop-color", "#5800C9");
            s(f, "id", "gradient3");
            s(f, "x1", "0%");
            s(f, "y1", "0%");
            s(f, "x2", "0%");
            s(f, "y2", "100%");
            s(b, "class", "shape-overlays__path");
            s(b, "fill", w = l[0][1]);
            s(p, "class", "shape-overlays__path");
            s(p, "fill", z = l[0][2]);
            s(v, "class", "shape-overlays__path");
            s(v, "fill", g = l[0][0]);
        },
        m(y, M) {
            R(y, e, M);
            R(y, t, M);
            R(y, n, M);
            d(n, i);
            d(i, a);
            d(i, o);
            d(n, r);
            d(r, u);
            d(r, c);
            d(n, f);
            d(f, h);
            d(f, m);
            R(y, _, M);
            R(y, b, M);
            R(y, C, M);
            R(y, p, M);
            R(y, k, M);
            R(y, v, M);
        },
        p(y, M) {
            if (M & 1 && w !== (w = y[0][1])) {
                s(b, "fill", w);
            }
            if (M & 1 && z !== (z = y[0][2])) {
                s(p, "fill", z);
            }
            if (M & 1 && g !== (g = y[0][0])) {
                s(v, "fill", g);
            }
        },
        d(y) {
            if (y) {
                S(e);
            }
            if (y) {
                S(t);
            }
            if (y) {
                S(n);
            }
            if (y) {
                S(_);
            }
            if (y) {
                S(b);
            }
            if (y) {
                S(C);
            }
            if (y) {
                S(p);
            }
            if (y) {
                S(k);
            }
            if (y) {
                S(v);
            }
        }
    };
}
function rs(l) {
    let e;
    let t = _i[l[4]] + "";
    let n;
    let i;
    return {
        c() {
            e = L("p");
            s(e, "id", "tagline");
            s(e, "class", "svelte-1bjk5br");
        },
        m(a, o) {
            R(a, e, o);
            e.innerHTML = t;
            i = true;
        },
        p(a, o) {
            if ((!i || o & 16) && t !== (t = _i[a[4]] + "")) {
                e.innerHTML = t;
            }
        },
        i(a) {
            if (!i) {
                if (n) {
                    n.end(1);
                }
                i = true;
            }
        },
        o(a) {
            n = Se(e, fe, {
                duration: 200,
                delay: 600
            });
            i = false;
        },
        d(a) {
            if (a) {
                S(e);
            }
            if (a && n) {
                n.end();
            }
        }
    };
}
function os(l) {
    let e;
    let t;
    e = new Ju({});
    return {
        c() {
            Q(e.$$.fragment);
        },
        m(n, i) {
            $(e, n, i);
            t = true;
        },
        i(n) {
            if (!t) {
                x(e.$$.fragment, n);
                t = true;
            }
        },
        o(n) {
            W(e.$$.fragment, n);
            t = false;
        },
        d(n) {
            ee(e, n);
        }
    };
}
function Vu(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r = {
        isOpen: true,
        $$slots: {
            default: [Ku]
        },
        $$scope: {
            ctx: l
        }
    };
    t = new Ss({
        props: r
    });
    l[5](t);
    let u = !l[2] && rs(l);
    let c = l[3] && os();
    return {
        c() {
            e = L("container");
            Q(t.$$.fragment);
            n = P();
            if (u) {
                u.c();
            }
            i = P();
            if (c) {
                c.c();
            }
            s(e, "class", a = (l[2] ? "loaded" : "") + " " + (l[3] ? "info" : "") + " svelte-1bjk5br");
        },
        m(f, h) {
            R(f, e, h);
            $(t, e, null);
            d(e, n);
            if (u) {
                u.m(e, null);
            }
            d(e, i);
            if (c) {
                c.m(e, null);
            }
            o = true;
        },
        p(f, [h]) {
            const m = {};
            if (h & 129) {
                m.$$scope = {
                    dirty: h,
                    ctx: f
                };
            }
            t.$set(m);
            if (f[2]) {
                if (u) {
                    bt();
                    W(u, 1, 1, () => {
                        u = null;
                    });
                    yt();
                }
            } else if (u) {
                u.p(f, h);
                if (h & 4) {
                    x(u, 1);
                }
            } else {
                u = rs(f);
                u.c();
                x(u, 1);
                u.m(e, i);
            }
            if (f[3]) {
                if (c) {
                    if (h & 8) {
                        x(c, 1);
                    }
                } else {
                    c = os();
                    c.c();
                    x(c, 1);
                    c.m(e, null);
                }
            } else if (c) {
                bt();
                W(c, 1, 1, () => {
                    c = null;
                });
                yt();
            }
            if (!o || h & 12 && a !== (a = (f[2] ? "loaded" : "") + " " + (f[3] ? "info" : "") + " svelte-1bjk5br")) {
                s(e, "class", a);
            }
        },
        i(f) {
            if (!o) {
                x(t.$$.fragment, f);
                x(u);
                x(c);
                o = true;
            }
        },
        o(f) {
            W(t.$$.fragment, f);
            W(u);
            W(c);
            o = false;
        },
        d(f) {
            if (f) {
                S(e);
            }
            l[5](null);
            ee(t);
            if (u) {
                u.d();
            }
            if (c) {
                c.d();
            }
        }
    };
}
function Qu(l, e, t) {
    let n;
    I(l, tn, f => t(1, n = f));
    I(l, ut, f => t(6, f));
    I(l, ol, f => t(2, f));
    I(l, Jt, f => t(3, f));
    I(l, Vt, f => t(4, f));
    let u = ["var(--offblack)", "url(#gradient2)", "url(#gradient3)"];
    Jt.subscribe(f => {
        if (f) {
            if (f) {
                t(0, u = ["#2b2a35", "#2b2a35", "none"]);
                n.animate({
                    action: "open",
                    axis: "y",
                    _curve: "wave",
                    _flip: false,
                    _numPoints: 6,
                    _duration: 800
                });
            } else {
                t(0, u = ["#2b2a35", "none", "none"]);
                n.animate({
                    axis: "y",
                    _curve: "wave",
                    _flip: false,
                    _numPoints: 6,
                    _duration: 800
                });
            }
        }
    });
    ol.subscribe(f => {
        if (f) {
            n.animate({
                axis: "x",
                _flip: false,
                _curve: "wave",
                _numPoints: 6,
                _duration: 1e3
            });
        }
    });
    function c(f) {
        ht[f ? "unshift" : "push"](() => {
            n = f;
            tn.set(n);
        });
    }
    return [u, n, f, f, f, c];
}
class $u extends pe {
    constructor(e) {
        super();
        _e(this, e, Qu, Vu, me, {});
    }
}
function ec(l) {
    let e;
    let t;
    let n;
    let i;
    let a;
    let o;
    let r;
    let u;
    let c;
    let f;
    let h;
    let m;
    let _;
    let b;
    let w;
    let C;
    let p;
    let z;
    let k;
    let v;
    e = new $u({});
    n = new Ka({});
    a = new Du({});
    u = new Wr({});
    f = new or({});
    m = new Ga({});
    b = new ar({});
    C = new qr({});
    return {
        c() {
            Q(e.$$.fragment);
            t = P();
            Q(n.$$.fragment);
            i = P();
            Q(a.$$.fragment);
            o = P();
            r = L("main");
            Q(u.$$.fragment);
            c = P();
            Q(f.$$.fragment);
            h = P();
            Q(m.$$.fragment);
            _ = P();
            Q(b.$$.fragment);
            w = P();
            Q(C.$$.fragment);
            s(r, "class", "no_highlights svelte-ua78pf");
            re(() => l[5].call(r));
        },
        m(g, y) {
            $(e, g, y);
            R(g, t, y);
            $(n, g, y);
            R(g, i, y);
            $(a, g, y);
            R(g, o, y);
            R(g, r, y);
            $(u, r, null);
            d(r, c);
            $(f, r, null);
            d(r, h);
            $(m, r, null);
            d(r, _);
            $(b, r, null);
            d(r, w);
            $(C, r, null);
            l[4](r);
            p = za(r, l[5].bind(r));
            z = true;
            if (!k) {
                v = [j(window, "orientationchange", l[3]), j(window, "resize", l[3])];
                k = true;
            }
        },
        p: G,
        i(g) {
            if (!z) {
                x(e.$$.fragment, g);
                x(n.$$.fragment, g);
                x(a.$$.fragment, g);
                x(u.$$.fragment, g);
                x(f.$$.fragment, g);
                x(m.$$.fragment, g);
                x(b.$$.fragment, g);
                x(C.$$.fragment, g);
                z = true;
            }
        },
        o(g) {
            W(e.$$.fragment, g);
            W(n.$$.fragment, g);
            W(a.$$.fragment, g);
            W(u.$$.fragment, g);
            W(f.$$.fragment, g);
            W(m.$$.fragment, g);
            W(b.$$.fragment, g);
            W(C.$$.fragment, g);
            z = false;
        },
        d(g) {
            ee(e, g);
            if (g) {
                S(t);
            }
            ee(n, g);
            if (g) {
                S(i);
            }
            ee(a, g);
            if (g) {
                S(o);
            }
            if (g) {
                S(r);
            }
            ee(u);
            ee(f);
            ee(m);
            ee(b);
            ee(C);
            l[4](null);
            p();
            k = false;
            kt(v);
        }
    };
}
function tc(l, e, t) {
    let n;
    let i = 0;
    let a = 0;
    const o = f => {
        t(0, i = n.clientWidth);
        t(1, a = n.clientHeight);
    };
    const r = () => {
        let h = Math.min(1080 / i, 1);
        ut.set({
            w: i,
            h: a,
            s: h,
            cw: i * h,
            ch: a * h
        });
        bs.set(i > 600 ? "desktop" : "mobile");
    };
    ol.subscribe(f => {
        if (f) {
            const h = document.querySelector("h1");
            h.classList.add("fade");
            h.addEventListener("transitionend", () => {
                h.classList.add("pause");
            });
        }
    });
    Nt(() => {
        o();
        r();
    });
    function u(f) {
        ht[f ? "unshift" : "push"](() => {
            n = f;
            t(2, n);
        });
    }
    function c() {
        i = this.clientWidth;
        a = this.clientHeight;
        t(0, i);
        t(1, a);
    }
    l.$$.update = () => {
        if (l.$$.dirty & 3 && i && a) {
            r();
        }
    };
    return [i, a, n, o, u, c];
}
class lc extends pe {
    constructor(e) {
        super();
        _e(this, e, tc, ec, me, {});
    }
}
const nc = new lc({
    target: document.body
});
window.app = nc;
const ic = () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js").then(l => {}).catch(l => {
            console.log(l);
        });
    }
};
ic();