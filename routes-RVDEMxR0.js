import {
    n as e,
    r as t,
    t as n
} from "./index-BFn7oCA3.js";
var r = (...e) => e.filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t).join(` `).trim(),
    i = e => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
    a = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()),
    o = e => {
        let t = a(e);
        return t.charAt(0).toUpperCase() + t.slice(1)
    },
    s = {
        xmlns: `http://www.w3.org/2000/svg`,
        width: 24,
        height: 24,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: 2,
        strokeLinecap: `round`,
        strokeLinejoin: `round`
    },
    c = e => {
        for (let t in e)
            if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
        return !1
    },
    l = t(e()),
    u = (0, l.forwardRef)(({
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: i,
        className: a = ``,
        children: o,
        iconNode: u,
        ...d
    }, ee) => (0, l.createElement)(`svg`, {
        ref: ee,
        ...s,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: i ? Number(n) * 24 / Number(t) : n,
        className: r(`lucide`, a),
        ...!o && !c(d) && {
            "aria-hidden": `true`
        },
        ...d
    }, [...u.map(([e, t]) => (0, l.createElement)(e, t)), ...Array.isArray(o) ? o : [o]])),
    d = (e, t) => {
        let n = (0, l.forwardRef)(({
            className: n,
            ...a
        }, s) => (0, l.createElement)(u, {
            ref: s,
            iconNode: t,
            className: r(`lucide-${i(o(e))}`, `lucide-${e}`, n),
            ...a
        }));
        return n.displayName = o(e), n
    },
    ee = d(`arrow-up`, [
        [`path`, {
            d: `m5 12 7-7 7 7`,
            key: `hav0vg`
        }],
        [`path`, {
            d: `M12 19V5`,
            key: `x0mq9r`
        }]
    ]),
    f = d(`badge-check`, [
        [`path`, {
            d: `M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z`,
            key: `3c2336`
        }],
        [`path`, {
            d: `m9 12 2 2 4-4`,
            key: `dzmm74`
        }]
    ]),
    p = d(`heart`, [
        [`path`, {
            d: `M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,
            key: `mvr1a0`
        }]
    ]),
    m = d(`plus`, [
        [`path`, {
            d: `M5 12h14`,
            key: `1ays0h`
        }],
        [`path`, {
            d: `M12 5v14`,
            key: `s699le`
        }]
    ]),
    h = `https://linkthem.net/aff_c?offer_id=1224&aff_id=11767`,
    g = [{
        name: `Maya R.`,
        handle: `@mayahauls`,
        tag: `Verified`,
        text: `did the sponsored offers and got the selection email the next day. honestly easy 💅`,
        likes: 612
    }, {
        name: `Jordan K.`,
        handle: `@jkfits`,
        tag: `Verified`,
        text: `took like 5 min to do the offers. selected in 24hrs, no cap 💀`,
        likes: 498
    }, {
        name: `Sofia L.`,
        handle: `@sofsstyles`,
        tag: `Verified`,
        text: `just did the offers, got the mail same night. haul arrived quick ✨`,
        likes: 476
    }, {
        name: `Ethan P.`,
        handle: `@ethanthrifts`,
        tag: `Basics`,
        text: `getting paid to review clothes i'd buy anyway = free win`,
        likes: 299
    }, {
        name: `Priya N.`,
        handle: `@priyaootd`,
        tag: `Accessories`,
        text: `ootd girlies this is your sign to get paid for fits ✨`,
        likes: 601
    }, {
        name: `Chloe M.`,
        handle: `@chloewears`,
        tag: `Tops`,
        text: `5 tops in one box and every single one fit. shein sizing finally understood me`,
        likes: 274
    }, {
        name: `Diego A.`,
        handle: `@diegodrip`,
        tag: `Menswear`,
        text: `menswear picks are actually solid now, reviewed 3 jackets this month`,
        likes: 187
    }, {
        name: `Amara J.`,
        handle: `@amarajstyle`,
        tag: `Curve`,
        text: `curve section reviews are so needed, glad they're paying us for real feedback`,
        likes: 433
    }, {
        name: `Lena V.`,
        handle: `@lenavibes`,
        tag: `Denim`,
        text: `the denim review box was unreal. 3 pairs, all keepers`,
        likes: 356
    }, {
        name: `Noah B.`,
        handle: `@noahbfits`,
        tag: `Sneakers`,
        text: `didn't expect shoes in the box ngl. reviewed them the same day`,
        likes: 221
    }, {
        name: `Isla T.`,
        handle: `@islatries`,
        tag: `Swim`,
        text: `swim drop came early for summer reviews, obsessed`,
        likes: 512
    }, {
        name: `Kai S.`,
        handle: `@kaistyled`,
        tag: `Streetwear`,
        text: `cargo pants review paid for my weekend. wild.`,
        likes: 198
    }, {
        name: `Zara H.`,
        handle: `@zarahauls`,
        tag: `Dresses`,
        text: `the mini dress i reviewed sold out two days later lol`,
        likes: 389
    }, {
        name: `Marcus D.`,
        handle: `@marcusfit`,
        tag: `Activewear`,
        text: `activewear set holds up at the gym, wrote an honest 5 star`,
        likes: 245
    }, {
        name: `Ava C.`,
        handle: `@avaootd`,
        tag: `Tops`,
        text: `quality is way better than 2022 shein, saying it as a reviewer`,
        likes: 310
    }, {
        name: `Tomas E.`,
        handle: `@tomaswears`,
        tag: `Shipping`,
        text: `box tracked door to door, no customs drama`,
        likes: 164
    }, {
        name: `Nia F.`,
        handle: `@niafinds`,
        tag: `Home`,
        text: `they added home stuff to my review box, my room looks unreal now`,
        likes: 402
    }, {
        name: `Owen L.`,
        handle: `@owenlooks`,
        tag: `Basics`,
        text: `restocked my whole basics drawer through reviews`,
        likes: 176
    }, {
        name: `Hana Y.`,
        handle: `@hanayoung`,
        tag: `Accessories`,
        text: `jewelry review box was tiny but insanely good value`,
        likes: 288
    }, {
        name: `Riley Q.`,
        handle: `@rileyq`,
        tag: `Curve`,
        text: `sizing feedback actually gets read, they emailed me back`,
        likes: 233
    }, {
        name: `Sana K.`,
        handle: `@sanakstyle`,
        tag: `Modest`,
        text: `modest fits section reviews are my whole feed now`,
        likes: 471
    }, {
        name: `Leo M.`,
        handle: `@leomdrip`,
        tag: `Menswear`,
        text: `the knitwear review had me looking expensive for $0`,
        likes: 209
    }, {
        name: `Freya B.`,
        handle: `@freyabee`,
        tag: `Dresses`,
        text: `wedding guest dress review = free dress + payout. insane`,
        likes: 528
    }, {
        name: `Malik R.`,
        handle: `@malikreviews`,
        tag: `Sneakers`,
        text: `second box already on the way, this is real`,
        likes: 191
    }, {
        name: `Bea S.`,
        handle: `@beasees`,
        tag: `Tops`,
        text: `corset top review went viral on my page lol`,
        likes: 617
    }, {
        name: `Yuki N.`,
        handle: `@yukinotes`,
        tag: `Denim`,
        text: `wide leg jeans, perfect length for once. reviewed 5 stars`,
        likes: 268
    }, {
        name: `Grace O.`,
        handle: `@graceofits`,
        tag: `Swim`,
        text: `bikini review shoot was the easiest money i've made`,
        likes: 349
    }, {
        name: `Adam W.`,
        handle: `@adamwears`,
        tag: `Streetwear`,
        text: `hoodie quality shocked me. wrote a long review`,
        likes: 214
    }, {
        name: `Elena P.`,
        handle: `@elenapicks`,
        tag: `Home`,
        text: `reviewed the storage bins, my closet is finally sorted`,
        likes: 158
    }, {
        name: `Jonas H.`,
        handle: `@jonashaul`,
        tag: `Basics`,
        text: `3 boxes in, still free. panel is legit`,
        likes: 305
    }, {
        name: `Mila K.`,
        handle: `@milakay`,
        tag: `Accessories`,
        text: `bag review made me a bag person`,
        likes: 262
    }, {
        name: `Ray T.`,
        handle: `@raytee`,
        tag: `Menswear`,
        text: `tees fit true to size, first time i've said that`,
        likes: 143
    }, {
        name: `Anika G.`,
        handle: `@anikag`,
        tag: `Dresses`,
        text: `got picked in like 10 minutes after applying`,
        likes: 480
    }, {
        name: `Peter V.`,
        handle: `@petervlogs`,
        tag: `Shipping`,
        text: `shipping was faster than my grocery delivery`,
        likes: 172
    }, {
        name: `Tessa L.`,
        handle: `@tessalooks`,
        tag: `Activewear`,
        text: `leggings are squat proof. reviewed and confirmed 🫡`,
        likes: 394
    }, {
        name: `Bruno C.`,
        handle: `@brunoc`,
        tag: `Outerwear`,
        text: `puffer jacket review saved my winter`,
        likes: 227
    }, {
        name: `Dani M.`,
        handle: `@danimoves`,
        tag: `Curve`,
        text: `finally a panel that asks curve reviewers first`,
        likes: 366
    }, {
        name: `Aya S.`,
        handle: `@ayastyles`,
        tag: `Modest`,
        text: `abaya review box was gorgeous, all keepers`,
        likes: 421
    }, {
        name: `Sam I.`,
        handle: `@samits`,
        tag: `Sneakers`,
        text: `chunky sneakers reviewed, they're my daily now`,
        likes: 185
    }, {
        name: `Clara D.`,
        handle: `@clarad`,
        tag: `Tops`,
        text: `the blouse i reviewed became my interview outfit`,
        likes: 253
    }, {
        name: `Felix A.`,
        handle: `@felixa`,
        tag: `Denim`,
        text: `jeans review took 5 minutes, payout was same week`,
        likes: 297
    }, {
        name: `Nora Z.`,
        handle: `@noraz`,
        tag: `Home`,
        text: `kitchen picks in a fashion box? weirdly great`,
        likes: 149
    }, {
        name: `Ivan P.`,
        handle: `@ivanp`,
        tag: `Streetwear`,
        text: `cargo shorts review, honest 4 stars, still got paid`,
        likes: 168
    }, {
        name: `Layla F.`,
        handle: `@laylaf`,
        tag: `Swim`,
        text: `swim haul review reached 200k views, shein reposted it`,
        likes: 555
    }, {
        name: `Miles R.`,
        handle: `@milesr`,
        tag: `Basics`,
        text: `socks and tees, unglamorous but free is free`,
        likes: 131
    }, {
        name: `Emi T.`,
        handle: `@emit`,
        tag: `Accessories`,
        text: `sunglasses review box, all 6 pairs are cute`,
        likes: 240
    }, {
        name: `Rosa B.`,
        handle: `@rosab`,
        tag: `Dresses`,
        text: `maxi dress review, wore it to a wedding same weekend`,
        likes: 318
    }, {
        name: `Hugo N.`,
        handle: `@hugon`,
        tag: `Menswear`,
        text: `shirts fit better than my usual brand tbh`,
        likes: 156
    }, {
        name: `Talia K.`,
        handle: `@taliak`,
        tag: `Activewear`,
        text: `sports bra review, actually supportive. shocked`,
        likes: 371
    }, {
        name: `Jia W.`,
        handle: `@jiaw`,
        tag: `Outerwear`,
        text: `coat review box arrived just before the cold snap 🧥`,
        likes: 284
    }];

function _(e) {
    var t, n, r = ``;
    if (typeof e == `string` || typeof e == `number`) r += e;
    else if (typeof e == `object`)
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++) e[t] && (n = _(e[t])) && (r && (r += ` `), r += n)
        } else
            for (n in e) e[n] && (r && (r += ` `), r += n);
    return r
}

function v() {
    for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)(e = arguments[n]) && (t = _(e)) && (r && (r += ` `), r += t);
    return r
}
var y = (e, t) => {
        let n = Array(e.length + t.length);
        for (let t = 0; t < e.length; t++) n[t] = e[t];
        for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
        return n
    },
    te = (e, t) => ({
        classGroupId: e,
        validator: t
    }),
    b = (e = new Map, t = null, n) => ({
        nextPart: e,
        validators: t,
        classGroupId: n
    }),
    x = `-`,
    S = [],
    C = `arbitrary..`,
    ne = e => {
        let t = ie(e),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: r
            } = e;
        return {
            getClassGroupId: e => {
                if (e.startsWith(`[`) && e.endsWith(`]`)) return w(e);
                let n = e.split(x);
                return re(n, +(n[0] === `` && n.length > 1), t)
            },
            getConflictingClassGroupIds: (e, t) => {
                if (t) {
                    let t = r[e],
                        i = n[e];
                    return t ? i ? y(i, t) : t : i || S
                }
                return n[e] || S
            }
        }
    },
    re = (e, t, n) => {
        if (e.length - t === 0) return n.classGroupId;
        let r = e[t],
            i = n.nextPart.get(r);
        if (i) {
            let n = re(e, t + 1, i);
            if (n) return n
        }
        let a = n.validators;
        if (a === null) return;
        let o = t === 0 ? e.join(x) : e.slice(t).join(x),
            s = a.length;
        for (let e = 0; e < s; e++) {
            let t = a[e];
            if (t.validator(o)) return t.classGroupId
        }
    },
    w = e => e.slice(1, -1).indexOf(`:`) === -1 ? void 0 : (() => {
        let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
        return r ? C + r : void 0
    })(),
    ie = e => {
        let {
            theme: t,
            classGroups: n
        } = e;
        return T(n, t)
    },
    T = (e, t) => {
        let n = b();
        for (let r in e) {
            let i = e[r];
            E(i, n, r, t)
        }
        return n
    },
    E = (e, t, n, r) => {
        let i = e.length;
        for (let a = 0; a < i; a++) {
            let i = e[a];
            D(i, t, n, r)
        }
    },
    D = (e, t, n, r) => {
        if (typeof e == `string`) {
            O(e, t, n);
            return
        }
        if (typeof e == `function`) {
            k(e, t, n, r);
            return
        }
        A(e, t, n, r)
    },
    O = (e, t, n) => {
        let r = e === `` ? t : j(t, e);
        r.classGroupId = n
    },
    k = (e, t, n, r) => {
        if (ae(e)) {
            E(e(r), t, n, r);
            return
        }
        t.validators === null && (t.validators = []), t.validators.push(te(n, e))
    },
    A = (e, t, n, r) => {
        let i = Object.entries(e),
            a = i.length;
        for (let e = 0; e < a; e++) {
            let [a, o] = i[e];
            E(o, j(t, a), n, r)
        }
    },
    j = (e, t) => {
        let n = e,
            r = t.split(x),
            i = r.length;
        for (let e = 0; e < i; e++) {
            let t = r[e],
                i = n.nextPart.get(t);
            i || (i = b(), n.nextPart.set(t, i)), n = i
        }
        return n
    },
    ae = e => `isThemeGetter` in e && e.isThemeGetter === !0,
    oe = e => {
        if (e < 1) return {
            get: () => void 0,
            set: () => {}
        };
        let t = 0,
            n = Object.create(null),
            r = Object.create(null),
            i = (i, a) => {
                n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null))
            };
        return {
            get(e) {
                let t = n[e];
                if (t !== void 0) return t;
                if ((t = r[e]) !== void 0) return i(e, t), t
            },
            set(e, t) {
                e in n ? n[e] = t : i(e, t)
            }
        }
    },
    M = `!`,
    N = `:`,
    P = [],
    F = (e, t, n, r, i) => ({
        modifiers: e,
        hasImportantModifier: t,
        baseClassName: n,
        maybePostfixModifierPosition: r,
        isExternal: i
    }),
    I = e => {
        let {
            prefix: t,
            experimentalParseClassName: n
        } = e, r = e => {
            let t = [],
                n = 0,
                r = 0,
                i = 0,
                a, o = e.length;
            for (let s = 0; s < o; s++) {
                let o = e[s];
                if (n === 0 && r === 0) {
                    if (o === N) {
                        t.push(e.slice(i, s)), i = s + 1;
                        continue
                    }
                    if (o === `/`) {
                        a = s;
                        continue
                    }
                }
                o === `[` ? n++ : o === `]` ? n-- : o === `(` ? r++ : o === `)` && r--
            }
            let s = t.length === 0 ? e : e.slice(i),
                c = s,
                l = !1;
            s.endsWith(M) ? (c = s.slice(0, -1), l = !0) : s.startsWith(M) && (c = s.slice(1), l = !0);
            let u = a && a > i ? a - i : void 0;
            return F(t, l, c, u)
        };
        if (t) {
            let e = t + N,
                n = r;
            r = t => t.startsWith(e) ? n(t.slice(e.length)) : F(P, !1, t, void 0, !0)
        }
        if (n) {
            let e = r;
            r = t => n({
                className: t,
                parseClassName: e
            })
        }
        return r
    },
    se = e => {
        let t = new Map;
        return e.orderSensitiveModifiers.forEach((e, n) => {
            t.set(e, 1e6 + n)
        }), e => {
            let n = [],
                r = [];
            for (let i = 0; i < e.length; i++) {
                let a = e[i],
                    o = a[0] === `[`,
                    s = t.has(a);
                o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a)
            }
            return r.length > 0 && (r.sort(), n.push(...r)), n
        }
    },
    L = e => ({
        cache: oe(e.cacheSize),
        parseClassName: I(e),
        sortModifiers: se(e),
        postfixLookupClassGroupIds: ce(e),
        ...ne(e)
    }),
    ce = e => {
        let t = Object.create(null),
            n = e.postfixLookupClassGroups;
        if (n)
            for (let e = 0; e < n.length; e++) t[n[e]] = !0;
        return t
    },
    R = /\s+/,
    z = (e, t) => {
        let {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: i,
            sortModifiers: a,
            postfixLookupClassGroupIds: o
        } = t, s = [], c = e.trim().split(R), l = ``;
        for (let e = c.length - 1; e >= 0; --e) {
            let t = c[e],
                {
                    isExternal: u,
                    modifiers: d,
                    hasImportantModifier: ee,
                    baseClassName: f,
                    maybePostfixModifierPosition: p
                } = n(t);
            if (u) {
                l = t + (l.length > 0 ? ` ` + l : l);
                continue
            }
            let m = !!p,
                h;
            if (m) {
                h = r(f.substring(0, p));
                let e = h && o[h] ? r(f) : void 0;
                e && e !== h && (h = e, m = !1)
            } else h = r(f);
            if (!h) {
                if (!m) {
                    l = t + (l.length > 0 ? ` ` + l : l);
                    continue
                }
                if (h = r(f), !h) {
                    l = t + (l.length > 0 ? ` ` + l : l);
                    continue
                }
                m = !1
            }
            let g = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
                _ = ee ? g + M : g,
                v = _ + h;
            if (s.indexOf(v) > -1) continue;
            s.push(v);
            let y = i(h, m);
            for (let e = 0; e < y.length; ++e) {
                let t = y[e];
                s.push(_ + t)
            }
            l = t + (l.length > 0 ? ` ` + l : l)
        }
        return l
    },
    B = (...e) => {
        let t = 0,
            n, r, i = ``;
        for (; t < e.length;)(n = e[t++]) && (r = V(n)) && (i && (i += ` `), i += r);
        return i
    },
    V = e => {
        if (typeof e == `string`) return e;
        let t, n = ``;
        for (let r = 0; r < e.length; r++) e[r] && (t = V(e[r])) && (n && (n += ` `), n += t);
        return n
    },
    le = (e, ...t) => {
        let n, r, i, a, o = o => (n = L(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)),
            s = e => {
                let t = r(e);
                if (t) return t;
                let a = z(e, n);
                return i(e, a), a
            };
        return a = o, (...e) => a(B(...e))
    },
    ue = [],
    H = e => {
        let t = t => t[e] || ue;
        return t.isThemeGetter = !0, t
    },
    de = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    fe = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    pe = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
    me = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    he = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    ge = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    _e = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    ve = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    U = e => pe.test(e),
    W = e => !!e && !Number.isNaN(Number(e)),
    G = e => !!e && Number.isInteger(Number(e)),
    ye = e => e.endsWith(`%`) && W(e.slice(0, -1)),
    K = e => me.test(e),
    be = () => !0,
    xe = e => he.test(e) && !ge.test(e),
    Se = () => !1,
    Ce = e => _e.test(e),
    we = e => ve.test(e),
    Te = e => !q(e) && !Y(e),
    Ee = e => e.startsWith(`@container`) && (e[10] === `/` && e[11] !== void 0 || e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10) || e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10)),
    De = e => Z(e, He, Se),
    q = e => de.test(e),
    J = e => Z(e, Ue, xe),
    Oe = e => Z(e, We, W),
    ke = e => Z(e, Ke, be),
    Ae = e => Z(e, Ge, Se),
    je = e => Z(e, Be, Se),
    Me = e => Z(e, Ve, we),
    Ne = e => Z(e, qe, Ce),
    Y = e => fe.test(e),
    X = e => Q(e, Ue),
    Pe = e => Q(e, Ge),
    Fe = e => Q(e, Be),
    Ie = e => Q(e, He),
    Le = e => Q(e, Ve),
    Re = e => Q(e, qe, !0),
    ze = e => Q(e, Ke, !0),
    Z = (e, t, n) => {
        let r = de.exec(e);
        return r ? r[1] ? t(r[1]) : n(r[2]) : !1
    },
    Q = (e, t, n = !1) => {
        let r = fe.exec(e);
        return r ? r[1] ? t(r[1]) : n : !1
    },
    Be = e => e === `position` || e === `percentage`,
    Ve = e => e === `image` || e === `url`,
    He = e => e === `length` || e === `size` || e === `bg-size`,
    Ue = e => e === `length`,
    We = e => e === `number`,
    Ge = e => e === `family-name`,
    Ke = e => e === `number` || e === `weight`,
    qe = e => e === `shadow`,
    Je = le(() => {
        let e = H(`color`),
            t = H(`font`),
            n = H(`text`),
            r = H(`font-weight`),
            i = H(`tracking`),
            a = H(`leading`),
            o = H(`breakpoint`),
            s = H(`container`),
            c = H(`spacing`),
            l = H(`radius`),
            u = H(`shadow`),
            d = H(`inset-shadow`),
            ee = H(`text-shadow`),
            f = H(`drop-shadow`),
            p = H(`blur`),
            m = H(`perspective`),
            h = H(`aspect`),
            g = H(`ease`),
            _ = H(`animate`),
            v = () => [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`],
            y = () => [`center`, `top`, `bottom`, `left`, `right`, `top-left`, `left-top`, `top-right`, `right-top`, `bottom-right`, `right-bottom`, `bottom-left`, `left-bottom`],
            te = () => [...y(), Y, q],
            b = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
            x = () => [`auto`, `contain`, `none`],
            S = () => [Y, q, c],
            C = () => [U, `full`, `auto`, ...S()],
            ne = () => [G, `none`, `subgrid`, Y, q],
            re = () => [`auto`, {
                span: [`full`, G, Y, q]
            }, G, Y, q],
            w = () => [G, `auto`, Y, q],
            ie = () => [`auto`, `min`, `max`, `fr`, Y, q],
            T = () => [`start`, `end`, `center`, `between`, `around`, `evenly`, `stretch`, `baseline`, `center-safe`, `end-safe`],
            E = () => [`start`, `end`, `center`, `stretch`, `center-safe`, `end-safe`],
            D = () => [`auto`, ...S()],
            O = () => [U, `auto`, `full`, `dvw`, `dvh`, `lvw`, `lvh`, `svw`, `svh`, `min`, `max`, `fit`, ...S()],
            k = () => [U, `screen`, `full`, `dvw`, `lvw`, `svw`, `min`, `max`, `fit`, ...S()],
            A = () => [U, `screen`, `full`, `lh`, `dvh`, `lvh`, `svh`, `min`, `max`, `fit`, ...S()],
            j = () => [e, Y, q],
            ae = () => [...y(), Fe, je, {
                position: [Y, q]
            }],
            oe = () => [`no-repeat`, {
                repeat: [``, `x`, `y`, `space`, `round`]
            }],
            M = () => [`auto`, `cover`, `contain`, Ie, De, {
                size: [Y, q]
            }],
            N = () => [ye, X, J],
            P = () => [``, `none`, `full`, l, Y, q],
            F = () => [``, W, X, J],
            I = () => [`solid`, `dashed`, `dotted`, `double`],
            se = () => [`normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`],
            L = () => [W, ye, Fe, je],
            ce = () => [``, `none`, p, Y, q],
            R = () => [`none`, W, Y, q],
            z = () => [`none`, W, Y, q],
            B = () => [W, Y, q],
            V = () => [U, `full`, ...S()];
        return {
            cacheSize: 500,
            theme: {
                animate: [`spin`, `ping`, `pulse`, `bounce`],
                aspect: [`video`],
                blur: [K],
                breakpoint: [K],
                color: [be],
                container: [K],
                "drop-shadow": [K],
                ease: [`in`, `out`, `in-out`],
                font: [Te],
                "font-weight": [`thin`, `extralight`, `light`, `normal`, `medium`, `semibold`, `bold`, `extrabold`, `black`],
                "inset-shadow": [K],
                leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
                perspective: [`dramatic`, `near`, `normal`, `midrange`, `distant`, `none`],
                radius: [K],
                shadow: [K],
                spacing: [`px`, W],
                text: [K],
                "text-shadow": [K],
                tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`]
            },
            classGroups: {
                aspect: [{
                    aspect: [`auto`, `square`, U, q, Y, h]
                }],
                container: [`container`],
                "container-type": [{
                    "@container": [``, `normal`, `size`, Y, q]
                }],
                "container-named": [Ee],
                columns: [{
                    columns: [W, q, Y, s]
                }],
                "break-after": [{
                    "break-after": v()
                }],
                "break-before": [{
                    "break-before": v()
                }],
                "break-inside": [{
                    "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`]
                }],
                "box-decoration": [{
                    "box-decoration": [`slice`, `clone`]
                }],
                box: [{
                    box: [`border`, `content`]
                }],
                display: [`block`, `inline-block`, `inline`, `flex`, `inline-flex`, `table`, `inline-table`, `table-caption`, `table-cell`, `table-column`, `table-column-group`, `table-footer-group`, `table-header-group`, `table-row-group`, `table-row`, `flow-root`, `grid`, `inline-grid`, `contents`, `list-item`, `hidden`],
                sr: [`sr-only`, `not-sr-only`],
                float: [{
                    float: [`right`, `left`, `none`, `start`, `end`]
                }],
                clear: [{
                    clear: [`left`, `right`, `both`, `none`, `start`, `end`]
                }],
                isolation: [`isolate`, `isolation-auto`],
                "object-fit": [{
                    object: [`contain`, `cover`, `fill`, `none`, `scale-down`]
                }],
                "object-position": [{
                    object: te()
                }],
                overflow: [{
                    overflow: b()
                }],
                "overflow-x": [{
                    "overflow-x": b()
                }],
                "overflow-y": [{
                    "overflow-y": b()
                }],
                overscroll: [{
                    overscroll: x()
                }],
                "overscroll-x": [{
                    "overscroll-x": x()
                }],
                "overscroll-y": [{
                    "overscroll-y": x()
                }],
                position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
                inset: [{
                    inset: C()
                }],
                "inset-x": [{
                    "inset-x": C()
                }],
                "inset-y": [{
                    "inset-y": C()
                }],
                start: [{
                    "inset-s": C(),
                    start: C()
                }],
                end: [{
                    "inset-e": C(),
                    end: C()
                }],
                "inset-bs": [{
                    "inset-bs": C()
                }],
                "inset-be": [{
                    "inset-be": C()
                }],
                top: [{
                    top: C()
                }],
                right: [{
                    right: C()
                }],
                bottom: [{
                    bottom: C()
                }],
                left: [{
                    left: C()
                }],
                visibility: [`visible`, `invisible`, `collapse`],
                z: [{
                    z: [G, `auto`, Y, q]
                }],
                basis: [{
                    basis: [U, `full`, `auto`, s, ...S()]
                }],
                "flex-direction": [{
                    flex: [`row`, `row-reverse`, `col`, `col-reverse`]
                }],
                "flex-wrap": [{
                    flex: [`nowrap`, `wrap`, `wrap-reverse`]
                }],
                flex: [{
                    flex: [W, U, `auto`, `initial`, `none`, q]
                }],
                grow: [{
                    grow: [``, W, Y, q]
                }],
                shrink: [{
                    shrink: [``, W, Y, q]
                }],
                order: [{
                    order: [G, `first`, `last`, `none`, Y, q]
                }],
                "grid-cols": [{
                    "grid-cols": ne()
                }],
                "col-start-end": [{
                    col: re()
                }],
                "col-start": [{
                    "col-start": w()
                }],
                "col-end": [{
                    "col-end": w()
                }],
                "grid-rows": [{
                    "grid-rows": ne()
                }],
                "row-start-end": [{
                    row: re()
                }],
                "row-start": [{
                    "row-start": w()
                }],
                "row-end": [{
                    "row-end": w()
                }],
                "grid-flow": [{
                    "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`]
                }],
                "auto-cols": [{
                    "auto-cols": ie()
                }],
                "auto-rows": [{
                    "auto-rows": ie()
                }],
                gap: [{
                    gap: S()
                }],
                "gap-x": [{
                    "gap-x": S()
                }],
                "gap-y": [{
                    "gap-y": S()
                }],
                "justify-content": [{
                    justify: [...T(), `normal`]
                }],
                "justify-items": [{
                    "justify-items": [...E(), `normal`]
                }],
                "justify-self": [{
                    "justify-self": [`auto`, ...E()]
                }],
                "align-content": [{
                    content: [`normal`, ...T()]
                }],
                "align-items": [{
                    items: [...E(), {
                        baseline: [``, `last`]
                    }]
                }],
                "align-self": [{
                    self: [`auto`, ...E(), {
                        baseline: [``, `last`]
                    }]
                }],
                "place-content": [{
                    "place-content": T()
                }],
                "place-items": [{
                    "place-items": [...E(), `baseline`]
                }],
                "place-self": [{
                    "place-self": [`auto`, ...E()]
                }],
                p: [{
                    p: S()
                }],
                px: [{
                    px: S()
                }],
                py: [{
                    py: S()
                }],
                ps: [{
                    ps: S()
                }],
                pe: [{
                    pe: S()
                }],
                pbs: [{
                    pbs: S()
                }],
                pbe: [{
                    pbe: S()
                }],
                pt: [{
                    pt: S()
                }],
                pr: [{
                    pr: S()
                }],
                pb: [{
                    pb: S()
                }],
                pl: [{
                    pl: S()
                }],
                m: [{
                    m: D()
                }],
                mx: [{
                    mx: D()
                }],
                my: [{
                    my: D()
                }],
                ms: [{
                    ms: D()
                }],
                me: [{
                    me: D()
                }],
                mbs: [{
                    mbs: D()
                }],
                mbe: [{
                    mbe: D()
                }],
                mt: [{
                    mt: D()
                }],
                mr: [{
                    mr: D()
                }],
                mb: [{
                    mb: D()
                }],
                ml: [{
                    ml: D()
                }],
                "space-x": [{
                    "space-x": S()
                }],
                "space-x-reverse": [`space-x-reverse`],
                "space-y": [{
                    "space-y": S()
                }],
                "space-y-reverse": [`space-y-reverse`],
                size: [{
                    size: O()
                }],
                "inline-size": [{
                    inline: [`auto`, ...k()]
                }],
                "min-inline-size": [{
                    "min-inline": [`auto`, ...k()]
                }],
                "max-inline-size": [{
                    "max-inline": [`none`, ...k()]
                }],
                "block-size": [{
                    block: [`auto`, ...A()]
                }],
                "min-block-size": [{
                    "min-block": [`auto`, ...A()]
                }],
                "max-block-size": [{
                    "max-block": [`none`, ...A()]
                }],
                w: [{
                    w: [s, `screen`, ...O()]
                }],
                "min-w": [{
                    "min-w": [s, `screen`, `none`, ...O()]
                }],
                "max-w": [{
                    "max-w": [s, `screen`, `none`, `prose`, {
                        screen: [o]
                    }, ...O()]
                }],
                h: [{
                    h: [`screen`, `lh`, ...O()]
                }],
                "min-h": [{
                    "min-h": [`screen`, `lh`, `none`, ...O()]
                }],
                "max-h": [{
                    "max-h": [`screen`, `lh`, ...O()]
                }],
                "font-size": [{
                    text: [`base`, n, X, J]
                }],
                "font-smoothing": [`antialiased`, `subpixel-antialiased`],
                "font-style": [`italic`, `not-italic`],
                "font-weight": [{
                    font: [r, ze, ke]
                }],
                "font-stretch": [{
                    "font-stretch": [`ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`, ye, q]
                }],
                "font-family": [{
                    font: [Pe, Ae, t]
                }],
                "font-features": [{
                    "font-features": [q]
                }],
                "fvn-normal": [`normal-nums`],
                "fvn-ordinal": [`ordinal`],
                "fvn-slashed-zero": [`slashed-zero`],
                "fvn-figure": [`lining-nums`, `oldstyle-nums`],
                "fvn-spacing": [`proportional-nums`, `tabular-nums`],
                "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
                tracking: [{
                    tracking: [i, Y, q]
                }],
                "line-clamp": [{
                    "line-clamp": [W, `none`, Y, Oe]
                }],
                leading: [{
                    leading: [a, ...S()]
                }],
                "list-image": [{
                    "list-image": [`none`, Y, q]
                }],
                "list-style-position": [{
                    list: [`inside`, `outside`]
                }],
                "list-style-type": [{
                    list: [`disc`, `decimal`, `none`, Y, q]
                }],
                "text-alignment": [{
                    text: [`left`, `center`, `right`, `justify`, `start`, `end`]
                }],
                "placeholder-color": [{
                    placeholder: j()
                }],
                "text-color": [{
                    text: j()
                }],
                "text-decoration": [`underline`, `overline`, `line-through`, `no-underline`],
                "text-decoration-style": [{
                    decoration: [...I(), `wavy`]
                }],
                "text-decoration-thickness": [{
                    decoration: [W, `from-font`, `auto`, Y, J]
                }],
                "text-decoration-color": [{
                    decoration: j()
                }],
                "underline-offset": [{
                    "underline-offset": [W, `auto`, Y, q]
                }],
                "text-transform": [`uppercase`, `lowercase`, `capitalize`, `normal-case`],
                "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
                "text-wrap": [{
                    text: [`wrap`, `nowrap`, `balance`, `pretty`]
                }],
                indent: [{
                    indent: S()
                }],
                "tab-size": [{
                    tab: [G, Y, q]
                }],
                "vertical-align": [{
                    align: [`baseline`, `top`, `middle`, `bottom`, `text-top`, `text-bottom`, `sub`, `super`, Y, q]
                }],
                whitespace: [{
                    whitespace: [`normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`, `break-spaces`]
                }],
                break: [{
                    break: [`normal`, `words`, `all`, `keep`]
                }],
                wrap: [{
                    wrap: [`break-word`, `anywhere`, `normal`]
                }],
                hyphens: [{
                    hyphens: [`none`, `manual`, `auto`]
                }],
                content: [{
                    content: [`none`, Y, q]
                }],
                "bg-attachment": [{
                    bg: [`fixed`, `local`, `scroll`]
                }],
                "bg-clip": [{
                    "bg-clip": [`border`, `padding`, `content`, `text`]
                }],
                "bg-origin": [{
                    "bg-origin": [`border`, `padding`, `content`]
                }],
                "bg-position": [{
                    bg: ae()
                }],
                "bg-repeat": [{
                    bg: oe()
                }],
                "bg-size": [{
                    bg: M()
                }],
                "bg-image": [{
                    bg: [`none`, {
                        linear: [{
                            to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`]
                        }, G, Y, q],
                        radial: [``, Y, q],
                        conic: [G, Y, q]
                    }, Le, Me]
                }],
                "bg-color": [{
                    bg: j()
                }],
                "gradient-from-pos": [{
                    from: N()
                }],
                "gradient-via-pos": [{
                    via: N()
                }],
                "gradient-to-pos": [{
                    to: N()
                }],
                "gradient-from": [{
                    from: j()
                }],
                "gradient-via": [{
                    via: j()
                }],
                "gradient-to": [{
                    to: j()
                }],
                rounded: [{
                    rounded: P()
                }],
                "rounded-s": [{
                    "rounded-s": P()
                }],
                "rounded-e": [{
                    "rounded-e": P()
                }],
                "rounded-t": [{
                    "rounded-t": P()
                }],
                "rounded-r": [{
                    "rounded-r": P()
                }],
                "rounded-b": [{
                    "rounded-b": P()
                }],
                "rounded-l": [{
                    "rounded-l": P()
                }],
                "rounded-ss": [{
                    "rounded-ss": P()
                }],
                "rounded-se": [{
                    "rounded-se": P()
                }],
                "rounded-ee": [{
                    "rounded-ee": P()
                }],
                "rounded-es": [{
                    "rounded-es": P()
                }],
                "rounded-tl": [{
                    "rounded-tl": P()
                }],
                "rounded-tr": [{
                    "rounded-tr": P()
                }],
                "rounded-br": [{
                    "rounded-br": P()
                }],
                "rounded-bl": [{
                    "rounded-bl": P()
                }],
                "border-w": [{
                    border: F()
                }],
                "border-w-x": [{
                    "border-x": F()
                }],
                "border-w-y": [{
                    "border-y": F()
                }],
                "border-w-s": [{
                    "border-s": F()
                }],
                "border-w-e": [{
                    "border-e": F()
                }],
                "border-w-bs": [{
                    "border-bs": F()
                }],
                "border-w-be": [{
                    "border-be": F()
                }],
                "border-w-t": [{
                    "border-t": F()
                }],
                "border-w-r": [{
                    "border-r": F()
                }],
                "border-w-b": [{
                    "border-b": F()
                }],
                "border-w-l": [{
                    "border-l": F()
                }],
                "divide-x": [{
                    "divide-x": F()
                }],
                "divide-x-reverse": [`divide-x-reverse`],
                "divide-y": [{
                    "divide-y": F()
                }],
                "divide-y-reverse": [`divide-y-reverse`],
                "border-style": [{
                    border: [...I(), `hidden`, `none`]
                }],
                "divide-style": [{
                    divide: [...I(), `hidden`, `none`]
                }],
                "border-color": [{
                    border: j()
                }],
                "border-color-x": [{
                    "border-x": j()
                }],
                "border-color-y": [{
                    "border-y": j()
                }],
                "border-color-s": [{
                    "border-s": j()
                }],
                "border-color-e": [{
                    "border-e": j()
                }],
                "border-color-bs": [{
                    "border-bs": j()
                }],
                "border-color-be": [{
                    "border-be": j()
                }],
                "border-color-t": [{
                    "border-t": j()
                }],
                "border-color-r": [{
                    "border-r": j()
                }],
                "border-color-b": [{
                    "border-b": j()
                }],
                "border-color-l": [{
                    "border-l": j()
                }],
                "divide-color": [{
                    divide: j()
                }],
                "outline-style": [{
                    outline: [...I(), `none`, `hidden`]
                }],
                "outline-offset": [{
                    "outline-offset": [W, Y, q]
                }],
                "outline-w": [{
                    outline: [``, W, X, J]
                }],
                "outline-color": [{
                    outline: j()
                }],
                shadow: [{
                    shadow: [``, `none`, u, Re, Ne]
                }],
                "shadow-color": [{
                    shadow: j()
                }],
                "inset-shadow": [{
                    "inset-shadow": [`none`, d, Re, Ne]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": j()
                }],
                "ring-w": [{
                    ring: F()
                }],
                "ring-w-inset": [`ring-inset`],
                "ring-color": [{
                    ring: j()
                }],
                "ring-offset-w": [{
                    "ring-offset": [W, J]
                }],
                "ring-offset-color": [{
                    "ring-offset": j()
                }],
                "inset-ring-w": [{
                    "inset-ring": F()
                }],
                "inset-ring-color": [{
                    "inset-ring": j()
                }],
                "text-shadow": [{
                    "text-shadow": [`none`, ee, Re, Ne]
                }],
                "text-shadow-color": [{
                    "text-shadow": j()
                }],
                opacity: [{
                    opacity: [W, Y, q]
                }],
                "mix-blend": [{
                    "mix-blend": [...se(), `plus-darker`, `plus-lighter`]
                }],
                "bg-blend": [{
                    "bg-blend": se()
                }],
                "mask-clip": [{
                    "mask-clip": [`border`, `padding`, `content`, `fill`, `stroke`, `view`]
                }, `mask-no-clip`],
                "mask-composite": [{
                    mask: [`add`, `subtract`, `intersect`, `exclude`]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [W]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": L()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": L()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": j()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": j()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": L()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": L()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": j()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": j()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": L()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": L()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": j()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": j()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": L()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": L()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": j()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": j()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": L()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": L()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": j()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": j()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": L()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": L()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": j()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": j()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": L()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": L()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": j()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": j()
                }],
                "mask-image-radial": [{
                    "mask-radial": [Y, q]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": L()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": L()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": j()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": j()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": [`circle`, `ellipse`]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: [`side`, `corner`],
                        farthest: [`side`, `corner`]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": y()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [W]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": L()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": L()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": j()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": j()
                }],
                "mask-mode": [{
                    mask: [`alpha`, `luminance`, `match`]
                }],
                "mask-origin": [{
                    "mask-origin": [`border`, `padding`, `content`, `fill`, `stroke`, `view`]
                }],
                "mask-position": [{
                    mask: ae()
                }],
                "mask-repeat": [{
                    mask: oe()
                }],
                "mask-size": [{
                    mask: M()
                }],
                "mask-type": [{
                    "mask-type": [`alpha`, `luminance`]
                }],
                "mask-image": [{
                    mask: [`none`, Y, q]
                }],
                filter: [{
                    filter: [``, `none`, Y, q]
                }],
                blur: [{
                    blur: ce()
                }],
                brightness: [{
                    brightness: [W, Y, q]
                }],
                contrast: [{
                    contrast: [W, Y, q]
                }],
                "drop-shadow": [{
                    "drop-shadow": [``, `none`, f, Re, Ne]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": j()
                }],
                grayscale: [{
                    grayscale: [``, W, Y, q]
                }],
                "hue-rotate": [{
                    "hue-rotate": [W, Y, q]
                }],
                invert: [{
                    invert: [``, W, Y, q]
                }],
                saturate: [{
                    saturate: [W, Y, q]
                }],
                sepia: [{
                    sepia: [``, W, Y, q]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": [``, `none`, Y, q]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": ce()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [W, Y, q]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [W, Y, q]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [``, W, Y, q]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [W, Y, q]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [``, W, Y, q]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [W, Y, q]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [W, Y, q]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [``, W, Y, q]
                }],
                "border-collapse": [{
                    border: [`collapse`, `separate`]
                }],
                "border-spacing": [{
                    "border-spacing": S()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": S()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": S()
                }],
                "table-layout": [{
                    table: [`auto`, `fixed`]
                }],
                caption: [{
                    caption: [`top`, `bottom`]
                }],
                transition: [{
                    transition: [``, `all`, `colors`, `opacity`, `shadow`, `transform`, `none`, Y, q]
                }],
                "transition-behavior": [{
                    transition: [`normal`, `discrete`]
                }],
                duration: [{
                    duration: [W, `initial`, Y, q]
                }],
                ease: [{
                    ease: [`linear`, `initial`, g, Y, q]
                }],
                delay: [{
                    delay: [W, Y, q]
                }],
                animate: [{
                    animate: [`none`, _, Y, q]
                }],
                backface: [{
                    backface: [`hidden`, `visible`]
                }],
                perspective: [{
                    perspective: [m, Y, q]
                }],
                "perspective-origin": [{
                    "perspective-origin": te()
                }],
                rotate: [{
                    rotate: R()
                }],
                "rotate-x": [{
                    "rotate-x": R()
                }],
                "rotate-y": [{
                    "rotate-y": R()
                }],
                "rotate-z": [{
                    "rotate-z": R()
                }],
                scale: [{
                    scale: z()
                }],
                "scale-x": [{
                    "scale-x": z()
                }],
                "scale-y": [{
                    "scale-y": z()
                }],
                "scale-z": [{
                    "scale-z": z()
                }],
                "scale-3d": [`scale-3d`],
                skew: [{
                    skew: B()
                }],
                "skew-x": [{
                    "skew-x": B()
                }],
                "skew-y": [{
                    "skew-y": B()
                }],
                transform: [{
                    transform: [Y, q, ``, `none`, `gpu`, `cpu`]
                }],
                "transform-origin": [{
                    origin: te()
                }],
                "transform-style": [{
                    transform: [`3d`, `flat`]
                }],
                translate: [{
                    translate: V()
                }],
                "translate-x": [{
                    "translate-x": V()
                }],
                "translate-y": [{
                    "translate-y": V()
                }],
                "translate-z": [{
                    "translate-z": V()
                }],
                "translate-none": [`translate-none`],
                zoom: [{
                    zoom: [G, Y, q]
                }],
                accent: [{
                    accent: j()
                }],
                appearance: [{
                    appearance: [`none`, `auto`]
                }],
                "caret-color": [{
                    caret: j()
                }],
                "color-scheme": [{
                    scheme: [`normal`, `dark`, `light`, `light-dark`, `only-dark`, `only-light`]
                }],
                cursor: [{
                    cursor: [`auto`, `default`, `pointer`, `wait`, `text`, `move`, `help`, `not-allowed`, `none`, `context-menu`, `progress`, `cell`, `crosshair`, `vertical-text`, `alias`, `copy`, `no-drop`, `grab`, `grabbing`, `all-scroll`, `col-resize`, `row-resize`, `n-resize`, `e-resize`, `s-resize`, `w-resize`, `ne-resize`, `nw-resize`, `se-resize`, `sw-resize`, `ew-resize`, `ns-resize`, `nesw-resize`, `nwse-resize`, `zoom-in`, `zoom-out`, Y, q]
                }],
                "field-sizing": [{
                    "field-sizing": [`fixed`, `content`]
                }],
                "pointer-events": [{
                    "pointer-events": [`auto`, `none`]
                }],
                resize: [{
                    resize: [`none`, ``, `y`, `x`]
                }],
                "scroll-behavior": [{
                    scroll: [`auto`, `smooth`]
                }],
                "scrollbar-thumb-color": [{
                    "scrollbar-thumb": j()
                }],
                "scrollbar-track-color": [{
                    "scrollbar-track": j()
                }],
                "scrollbar-gutter": [{
                    "scrollbar-gutter": [`auto`, `stable`, `both`]
                }],
                "scrollbar-w": [{
                    scrollbar: [`auto`, `thin`, `none`]
                }],
                "scroll-m": [{
                    "scroll-m": S()
                }],
                "scroll-mx": [{
                    "scroll-mx": S()
                }],
                "scroll-my": [{
                    "scroll-my": S()
                }],
                "scroll-ms": [{
                    "scroll-ms": S()
                }],
                "scroll-me": [{
                    "scroll-me": S()
                }],
                "scroll-mbs": [{
                    "scroll-mbs": S()
                }],
                "scroll-mbe": [{
                    "scroll-mbe": S()
                }],
                "scroll-mt": [{
                    "scroll-mt": S()
                }],
                "scroll-mr": [{
                    "scroll-mr": S()
                }],
                "scroll-mb": [{
                    "scroll-mb": S()
                }],
                "scroll-ml": [{
                    "scroll-ml": S()
                }],
                "scroll-p": [{
                    "scroll-p": S()
                }],
                "scroll-px": [{
                    "scroll-px": S()
                }],
                "scroll-py": [{
                    "scroll-py": S()
                }],
                "scroll-ps": [{
                    "scroll-ps": S()
                }],
                "scroll-pe": [{
                    "scroll-pe": S()
                }],
                "scroll-pbs": [{
                    "scroll-pbs": S()
                }],
                "scroll-pbe": [{
                    "scroll-pbe": S()
                }],
                "scroll-pt": [{
                    "scroll-pt": S()
                }],
                "scroll-pr": [{
                    "scroll-pr": S()
                }],
                "scroll-pb": [{
                    "scroll-pb": S()
                }],
                "scroll-pl": [{
                    "scroll-pl": S()
                }],
                "snap-align": [{
                    snap: [`start`, `end`, `center`, `align-none`]
                }],
                "snap-stop": [{
                    snap: [`normal`, `always`]
                }],
                "snap-type": [{
                    snap: [`none`, `x`, `y`, `both`]
                }],
                "snap-strictness": [{
                    snap: [`mandatory`, `proximity`]
                }],
                touch: [{
                    touch: [`auto`, `none`, `manipulation`]
                }],
                "touch-x": [{
                    "touch-pan": [`x`, `left`, `right`]
                }],
                "touch-y": [{
                    "touch-pan": [`y`, `up`, `down`]
                }],
                "touch-pz": [`touch-pinch-zoom`],
                select: [{
                    select: [`none`, `text`, `all`, `auto`]
                }],
                "will-change": [{
                    "will-change": [`auto`, `scroll`, `contents`, `transform`, Y, q]
                }],
                fill: [{
                    fill: [`none`, ...j()]
                }],
                "stroke-w": [{
                    stroke: [W, X, J, Oe]
                }],
                stroke: [{
                    stroke: [`none`, ...j()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": [`auto`, `none`]
                }]
            },
            conflictingClassGroups: {
                "container-named": [`container-type`],
                overflow: [`overflow-x`, `overflow-y`],
                overscroll: [`overscroll-x`, `overscroll-y`],
                inset: [`inset-x`, `inset-y`, `inset-bs`, `inset-be`, `start`, `end`, `top`, `right`, `bottom`, `left`],
                "inset-x": [`right`, `left`],
                "inset-y": [`top`, `bottom`],
                flex: [`basis`, `grow`, `shrink`],
                gap: [`gap-x`, `gap-y`],
                p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
                px: [`pr`, `pl`],
                py: [`pt`, `pb`],
                m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
                mx: [`mr`, `ml`],
                my: [`mt`, `mb`],
                size: [`w`, `h`],
                "font-size": [`leading`],
                "fvn-normal": [`fvn-ordinal`, `fvn-slashed-zero`, `fvn-figure`, `fvn-spacing`, `fvn-fraction`],
                "fvn-ordinal": [`fvn-normal`],
                "fvn-slashed-zero": [`fvn-normal`],
                "fvn-figure": [`fvn-normal`],
                "fvn-spacing": [`fvn-normal`],
                "fvn-fraction": [`fvn-normal`],
                "line-clamp": [`display`, `overflow`],
                rounded: [`rounded-s`, `rounded-e`, `rounded-t`, `rounded-r`, `rounded-b`, `rounded-l`, `rounded-ss`, `rounded-se`, `rounded-ee`, `rounded-es`, `rounded-tl`, `rounded-tr`, `rounded-br`, `rounded-bl`],
                "rounded-s": [`rounded-ss`, `rounded-es`],
                "rounded-e": [`rounded-se`, `rounded-ee`],
                "rounded-t": [`rounded-tl`, `rounded-tr`],
                "rounded-r": [`rounded-tr`, `rounded-br`],
                "rounded-b": [`rounded-br`, `rounded-bl`],
                "rounded-l": [`rounded-tl`, `rounded-bl`],
                "border-spacing": [`border-spacing-x`, `border-spacing-y`],
                "border-w": [`border-w-x`, `border-w-y`, `border-w-s`, `border-w-e`, `border-w-bs`, `border-w-be`, `border-w-t`, `border-w-r`, `border-w-b`, `border-w-l`],
                "border-w-x": [`border-w-r`, `border-w-l`],
                "border-w-y": [`border-w-t`, `border-w-b`],
                "border-color": [`border-color-x`, `border-color-y`, `border-color-s`, `border-color-e`, `border-color-bs`, `border-color-be`, `border-color-t`, `border-color-r`, `border-color-b`, `border-color-l`],
                "border-color-x": [`border-color-r`, `border-color-l`],
                "border-color-y": [`border-color-t`, `border-color-b`],
                translate: [`translate-x`, `translate-y`, `translate-none`],
                "translate-none": [`translate`, `translate-x`, `translate-y`, `translate-z`],
                "scroll-m": [`scroll-mx`, `scroll-my`, `scroll-ms`, `scroll-me`, `scroll-mbs`, `scroll-mbe`, `scroll-mt`, `scroll-mr`, `scroll-mb`, `scroll-ml`],
                "scroll-mx": [`scroll-mr`, `scroll-ml`],
                "scroll-my": [`scroll-mt`, `scroll-mb`],
                "scroll-p": [`scroll-px`, `scroll-py`, `scroll-ps`, `scroll-pe`, `scroll-pbs`, `scroll-pbe`, `scroll-pt`, `scroll-pr`, `scroll-pb`, `scroll-pl`],
                "scroll-px": [`scroll-pr`, `scroll-pl`],
                "scroll-py": [`scroll-pt`, `scroll-pb`],
                touch: [`touch-x`, `touch-y`, `touch-pz`],
                "touch-x": [`touch`],
                "touch-y": [`touch`],
                "touch-pz": [`touch`]
            },
            conflictingClassGroupModifiers: {
                "font-size": [`leading`]
            },
            postfixLookupClassGroups: [`container-type`],
            orderSensitiveModifiers: [`*`, `**`, `after`, `backdrop`, `before`, `details-content`, `file`, `first-letter`, `first-line`, `marker`, `placeholder`, `selection`]
        }
    });

function Ye(...e) {
    return Je(v(e))
}
var $ = n(),
    Xe = 5;

function Ze(e) {
    return e.split(` `).map(e => e[0]).join(``).slice(0, 2).toUpperCase()
}

function Qe({
    review: e
}) {
    let [t, n] = (0, l.useState)(!1);
    return (0, $.jsxs)(`li`, {
        className: `relative pl-11`,
        children: [(0, $.jsx)(`div`, {
            className: `absolute left-0 top-2.5 flex size-9 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-[11px] font-bold text-primary-foreground`,
            children: Ze(e.name)
        }), (0, $.jsxs)(`div`, {
            className: `surface-card px-4 py-3`,
            children: [(0, $.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [(0, $.jsx)(`span`, {
                    className: `text-sm font-semibold`,
                    children: e.name
                }), (0, $.jsx)(f, {
                    className: `size-3.5 text-primary`,
                    "aria-hidden": `true`
                }), (0, $.jsx)(`span`, {
                    className: `truncate text-xs text-muted-foreground`,
                    children: e.handle
                }), (0, $.jsx)(`span`, {
                    className: `ml-auto rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground`,
                    children: e.tag
                })]
            }), (0, $.jsx)(`p`, {
                className: `mt-1.5 text-base leading-relaxed text-foreground/90`,
                children: e.text
            }), (0, $.jsxs)(`button`, {
                type: `button`,
                "aria-pressed": t,
                "aria-label": `Like review by ${e.name}`,
                onClick: () => n(e => !e),
                className: Ye(`mt-2 inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold transition-colors`, t ? `border-primary/30 bg-primary/10 text-primary` : `text-muted-foreground hover:bg-muted`),
                children: [(0, $.jsx)(p, {
                    className: Ye(`size-4`, t && `fill-current`),
                    "aria-hidden": `true`
                }), e.likes + +!!t]
            })]
        })]
    })
}

function $e() {
    let [e, t] = (0, l.useState)(Xe), n = g.length - e;
    return (0, $.jsxs)(`section`, {
        id: `reviews`,
        className: `mx-auto w-full max-w-xl px-5 pt-6 pb-14`,
        children: [(0, $.jsxs)(`div`, {
            className: `mb-6 text-center`,
            children: [(0, $.jsx)(`span`, {
                className: `inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary-foreground`,
                children: `Panel reviews`
            }), (0, $.jsx)(`h2`, {
                className: `mt-4 text-2xl font-bold sm:text-3xl`,
                children: `What the panel is saying`
            }), (0, $.jsxs)(`p`, {
                className: `mt-2 text-sm text-muted-foreground`,
                children: [g.length, ` verified reviewers · real hauls, real takes`]
            })]
        }), (0, $.jsxs)(`div`, {
            className: `relative`,
            children: [(0, $.jsx)(`div`, {
                className: `absolute bottom-2 left-[19px] top-2 w-px bg-border`,
                "aria-hidden": `true`
            }), (0, $.jsx)(`ul`, {
                className: `space-y-3`,
                children: g.slice(0, e).map(e => (0, $.jsx)(Qe, {
                    review: e
                }, e.handle))
            })]
        }), n > 0 && (0, $.jsx)(`div`, {
            className: `mt-6 flex justify-center`,
            children: (0, $.jsxs)(`button`, {
                type: `button`,
                onClick: () => t(e => Math.min(e + Xe, g.length)),
                className: `inline-flex h-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted`,
                children: [(0, $.jsx)(m, {
                    className: `size-4`,
                    "aria-hidden": `true`
                }), ` Explore more comments (`, n, ` left)`]
            })
        })]
    })
}

function et() {
    let [e, t] = (0, l.useState)(!1);
    return (0, l.useEffect)(() => {
        let e = () => t(window.scrollY > 400);
        return e(), window.addEventListener(`scroll`, e, {
            passive: !0
        }), () => window.removeEventListener(`scroll`, e)
    }, []), (0, $.jsx)(`button`, {
        type: `button`,
        "aria-label": `Scroll back to top`,
        onClick: () => window.scrollTo({
            top: 0,
            behavior: `smooth`
        }),
        className: Ye(`fixed bottom-6 right-5 z-50 flex size-12 cursor-pointer items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-cta)] transition-all duration-300`, e ? `translate-y-0 opacity-100` : `pointer-events-none translate-y-4 opacity-0`),
        children: (0, $.jsx)(ee, {
            className: `size-5`,
            "aria-hidden": `true`
        })
    })
}
var tt = [`Tap the START NOW button above.`, `Enter your active email address.`, `Complete 3-4 partner offers to complete your application.`];

function nt() {
    return (0, $.jsxs)(`main`, {
        className: `grain-bg min-h-screen pb-24`,
        children: [(0, $.jsx)(`div`, {
            className: `bg-foreground py-2.5 text-center`,
            children: (0, $.jsx)(`span`, {
                className: `text-[13px] font-bold uppercase tracking-[0.18em] text-background`,
                children: `SHEIN TRIALS`
            })
        }), (0, $.jsx)(`section`, {
            className: `mx-auto w-full max-w-xl px-5 pt-4 sm:pt-6`,
            children: (0, $.jsxs)(`div`, {
                className: `surface-card px-5 pt-5 pb-8 text-center sm:px-8 sm:pt-6 sm:pb-10`,
                children: [(0, $.jsxs)(`span`, {
                    className: `inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-background`,
                    children: [(0, $.jsx)(`span`, {
                        className: `size-2 rounded-full bg-emerald-500`,
                        "aria-hidden": `true`
                    }), `2026 Active Panel Selection`]
                }), (0, $.jsx)(`div`, {
                    className: `mx-auto mt-2 flex size-14 items-center justify-center rounded-full bg-foreground text-2xl font-black text-background`,
                    children: `S`
                }), (0, $.jsxs)(`h1`, {
                    className: `mt-2`,
                    children: [(0, $.jsx)(`span`, {
                        className: `block text-2xl font-extrabold tracking-tight sm:text-3xl`,
                        children: `Become a`
                    }), (0, $.jsx)(`span`, {
                        className: `block text-[2.1rem] font-extrabold leading-none tracking-tight sm:text-[2.625rem]`,
                        children: `SHEIN Reviewer`
                    })]
                }), (0, $.jsx)(`p`, {
                    className: `mt-1 text-7xl font-black leading-none tracking-tight drop-shadow-sm sm:text-8xl`,
                    children: `$750`
                }), (0, $.jsx)(`p`, {
                    className: `mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground`,
                    children: `Review 30+ monthly hauls sent by Shein to improve products for the customers`
                }), (0, $.jsx)(`a`, {
                    href: h,
                    className: `mt-5 inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[image:var(--gradient-primary)] px-8 text-base font-semibold uppercase tracking-[0.12em] text-primary-foreground shadow-[var(--shadow-cta)] transition-transform hover:-translate-y-0.5 active:translate-y-0`,
                    children: `Start now`
                }), (0, $.jsx)(`p`, {
                    className: `mt-2 text-center text-[11px] font-medium uppercase tracking-wider text-muted-foreground`,
                    children: `Read rules first`
                })]
            })
        }), (0, $.jsx)(`section`, {
            className: `mx-auto mt-4 w-full max-w-xl px-5`,
            children: (0, $.jsx)(`div`, {
                className: `surface-card px-5 py-5 sm:px-8`,
                children: (0, $.jsx)(`ol`, {
                    className: `space-y-3`,
                    children: tt.map((e, t) => (0, $.jsxs)(`li`, {
                        className: `flex items-start gap-3`,
                        children: [(0, $.jsx)(`span`, {
                            className: `flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground text-[11px] font-bold text-background`,
                            children: t + 1
                        }), (0, $.jsx)(`p`, {
                            className: `text-sm leading-snug text-foreground`,
                            children: e.includes(`START NOW`) ? (0, $.jsxs)($.Fragment, {
                                children: [`Tap the `, (0, $.jsx)(`span`, {
                                    className: `font-semibold`,
                                    children: `START NOW`
                                }), ` button above.`]
                            }) : e
                        })]
                    }, t))
                })
            })
        }), (0, $.jsx)($e, {}), (0, $.jsx)(`section`, {
            className: `mx-auto w-full max-w-xl px-5`,
            children: (0, $.jsxs)(`div`, {
                className: `surface-card overflow-hidden bg-[image:var(--gradient-primary)] px-6 py-10 text-center sm:px-10`,
                children: [(0, $.jsx)(`h2`, {
                    className: `text-2xl font-bold text-primary-foreground sm:text-3xl`,
                    children: `Ready to join the panel?`
                }), (0, $.jsx)(`p`, {
                    className: `mx-auto mt-2 max-w-sm text-sm text-primary-foreground/75`,
                    children: `Weekly haul drops, honest reviews, zero cost to you.`
                }), (0, $.jsx)(`a`, {
                    href: h,
                    className: `mt-7 inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-background px-8 text-base font-medium text-foreground transition-colors hover:bg-background/90`,
                    children: `Claim your $750 allowance`
                })]
            })
        }), (0, $.jsx)(et, {})]
    })
}
export {
    nt as component
};