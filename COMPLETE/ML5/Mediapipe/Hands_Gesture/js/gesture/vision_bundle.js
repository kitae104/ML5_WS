var t = 'undefined' != typeof self ? self : {};
function e(e, n) {
	t: {
		for (var r = ['CLOSURE_FLAGS'], i = t, s = 0; s < r.length; s++)
			if (null == (i = i[r[s]])) {
				r = null;
				break t;
			}
		r = i;
	}
	return null != (e = r && r[e]) ? e : n;
}
function n() {
	throw Error('Invalid UTF8');
}
function r(t, e) {
	return (e = String.fromCharCode.apply(null, e)), null == t ? e : t + e;
}
let i, s;
const o = 'undefined' != typeof TextDecoder;
let a;
const c = 'undefined' != typeof TextEncoder;
function h(t) {
	if (c) t = (a ||= new TextEncoder()).encode(t);
	else {
		let n = 0;
		const r = new Uint8Array(3 * t.length);
		for (let i = 0; i < t.length; i++) {
			var e = t.charCodeAt(i);
			if (e < 128) r[n++] = e;
			else {
				if (e < 2048) r[n++] = (e >> 6) | 192;
				else {
					if (e >= 55296 && e <= 57343) {
						if (e <= 56319 && i < t.length) {
							const s = t.charCodeAt(++i);
							if (s >= 56320 && s <= 57343) {
								(e = 1024 * (e - 55296) + s - 56320 + 65536),
									(r[n++] = (e >> 18) | 240),
									(r[n++] = ((e >> 12) & 63) | 128),
									(r[n++] = ((e >> 6) & 63) | 128),
									(r[n++] = (63 & e) | 128);
								continue;
							}
							i--;
						}
						e = 65533;
					}
					(r[n++] = (e >> 12) | 224),
						(r[n++] = ((e >> 6) & 63) | 128);
				}
				r[n++] = (63 & e) | 128;
			}
		}
		t = n === r.length ? r : r.subarray(0, n);
	}
	return t;
}
var u,
	l = e(610401301, !1),
	f = e(653718497, e(1, !0));
const d = t.navigator;
function p(t) {
	return (
		!!l && !!u && u.brands.some(({ brand: e }) => e && -1 != e.indexOf(t))
	);
}
function g(e) {
	var n;
	return (
		((n = t.navigator) && (n = n.userAgent)) || (n = ''), -1 != n.indexOf(e)
	);
}
function m() {
	return !!l && !!u && u.brands.length > 0;
}
function y() {
	return m()
		? p('Chromium')
		: ((g('Chrome') || g('CriOS')) && !(!m() && g('Edge'))) || g('Silk');
}
function _(t) {
	return _[' '](t), t;
}
(u = (d && d.userAgentData) || null), (_[' '] = function () {});
var v = !m() && (g('Trident') || g('MSIE'));
!g('Android') || y(),
	y(),
	g('Safari') &&
		(y() ||
			(!m() && g('Coast')) ||
			(!m() && g('Opera')) ||
			(!m() && g('Edge')) ||
			(m() ? p('Microsoft Edge') : g('Edg/')) ||
			(m() && p('Opera')));
var E = {},
	w = null;
function T(t) {
	var e = t.length,
		n = (3 * e) / 4;
	n % 3
		? (n = Math.floor(n))
		: -1 != '=.'.indexOf(t[e - 1]) &&
		  (n = -1 != '=.'.indexOf(t[e - 2]) ? n - 2 : n - 1);
	var r = new Uint8Array(n),
		i = 0;
	return (
		(function (t, e) {
			function n(e) {
				for (; r < t.length; ) {
					var n = t.charAt(r++),
						i = w[n];
					if (null != i) return i;
					if (!/^[\s\xa0]*$/.test(n))
						throw Error('Unknown base64 encoding at char: ' + n);
				}
				return e;
			}
			b();
			for (var r = 0; ; ) {
				var i = n(-1),
					s = n(0),
					o = n(64),
					a = n(64);
				if (64 === a && -1 === i) break;
				e((i << 2) | (s >> 4)),
					64 != o &&
						(e(((s << 4) & 240) | (o >> 2)),
						64 != a && e(((o << 6) & 192) | a));
			}
		})(t, function (t) {
			r[i++] = t;
		}),
		i !== n ? r.subarray(0, i) : r
	);
}
function b() {
	if (!w) {
		w = {};
		for (
			var t =
					'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
						''
					),
				e = ['+/=', '+/', '-_=', '-_.', '-_'],
				n = 0;
			n < 5;
			n++
		) {
			var r = t.concat(e[n].split(''));
			E[n] = r;
			for (var i = 0; i < r.length; i++) {
				var s = r[i];
				void 0 === w[s] && (w[s] = i);
			}
		}
	}
}
var A = 'undefined' != typeof Uint8Array,
	k = !v && 'function' == typeof btoa;
function S(t) {
	if (!k) {
		var e;
		void 0 === e && (e = 0), b(), (e = E[e]);
		var n = Array(Math.floor(t.length / 3)),
			r = e[64] || '';
		let c = 0,
			h = 0;
		for (; c < t.length - 2; c += 3) {
			var i = t[c],
				s = t[c + 1],
				o = t[c + 2],
				a = e[i >> 2];
			(i = e[((3 & i) << 4) | (s >> 4)]),
				(s = e[((15 & s) << 2) | (o >> 6)]),
				(o = e[63 & o]),
				(n[h++] = a + i + s + o);
		}
		switch (((a = 0), (o = r), t.length - c)) {
			case 2:
				o = e[(15 & (a = t[c + 1])) << 2] || r;
			case 1:
				(t = t[c]),
					(n[h] = e[t >> 2] + e[((3 & t) << 4) | (a >> 4)] + o + r);
		}
		return n.join('');
	}
	for (e = '', n = 0, r = t.length - 10240; n < r; )
		e += String.fromCharCode.apply(null, t.subarray(n, (n += 10240)));
	return (
		(e += String.fromCharCode.apply(null, n ? t.subarray(n) : t)), btoa(e)
	);
}
const x = /[-_.]/g,
	L = { '-': '+', _: '/', '.': '=' };
function R(t) {
	return L[t] || '';
}
function F(t) {
	if (!k) return T(t);
	x.test(t) && (t = t.replace(x, R)), (t = atob(t));
	const e = new Uint8Array(t.length);
	for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
	return e;
}
function M(t) {
	return A && null != t && t instanceof Uint8Array;
}
var I = {};
let P;
function O(t) {
	if (t !== I) throw Error('illegal external caller');
}
function C() {
	return (P ||= new U(null, I));
}
function N(t) {
	O(I);
	var e = t.g;
	return null ==
		(e = null == e || M(e) ? e : 'string' == typeof e ? F(e) : null)
		? e
		: (t.g = e);
}
var U = class {
	constructor(t, e) {
		if ((O(e), (this.g = t), null != t && 0 === t.length))
			throw Error(
				'ByteString should be constructed with non-empty values'
			);
	}
	h() {
		return new Uint8Array(N(this) || 0);
	}
};
function D(t, e) {
	t.__closure__error__context__984382 ||
		(t.__closure__error__context__984382 = {}),
		(t.__closure__error__context__984382.severity = e);
}
let B;
function G() {
	const e = Error();
	D(e, 'incident'),
		(function (e) {
			t.setTimeout(() => {
				throw e;
			}, 0);
		})(e);
}
function j(t) {
	return D((t = Error(t)), 'warning'), t;
}
function V() {
	return 'function' == typeof BigInt;
}
function X(t) {
	return Array.prototype.slice.call(t);
}
var H = 'function' == typeof Symbol && 'symbol' == typeof Symbol();
function W(t) {
	return 'function' == typeof Symbol && 'symbol' == typeof Symbol()
		? Symbol()
		: t;
}
var z = W(),
	K = W('0di'),
	Y = W('2ex'),
	$ = W('1oa'),
	q = W('0dg'),
	J = H
		? (t, e) => {
				t[z] |= e;
		  }
		: (t, e) => {
				void 0 !== t.G
					? (t.G |= e)
					: Object.defineProperties(t, {
							G: {
								value: e,
								configurable: !0,
								writable: !0,
								enumerable: !1,
							},
					  });
		  },
	Z = H
		? (t, e) => {
				t[z] &= ~e;
		  }
		: (t, e) => {
				void 0 !== t.G && (t.G &= ~e);
		  },
	Q = H ? (t) => 0 | t[z] : (t) => 0 | t.G,
	tt = H ? (t) => t[z] : (t) => t.G,
	et = H
		? (t, e) => {
				t[z] = e;
		  }
		: (t, e) => {
				void 0 !== t.G
					? (t.G = e)
					: Object.defineProperties(t, {
							G: {
								value: e,
								configurable: !0,
								writable: !0,
								enumerable: !1,
							},
					  });
		  };
function nt(t) {
	return J(t, 34), t;
}
function rt(t, e) {
	et(e, -30975 & (0 | t));
}
function it(t, e) {
	et(e, -30941 & (34 | t));
}
var st,
	ot = {},
	at = {};
function ct(t) {
	return !(!t || 'object' != typeof t || t.Ja !== at);
}
function ht(t) {
	return (
		null !== t &&
		'object' == typeof t &&
		!Array.isArray(t) &&
		t.constructor === Object
	);
}
function ut(t, e, n) {
	if (null != t)
		if ('string' == typeof t) t = t ? new U(t, I) : C();
		else if (t.constructor !== U)
			if (M(t)) t = t.length ? new U(n ? t : new Uint8Array(t), I) : C();
			else {
				if (!e) throw Error();
				t = void 0;
			}
	return t;
}
function lt(t) {
	return !(!Array.isArray(t) || t.length) && !!(1 & Q(t));
}
const ft = [];
function dt(t) {
	if (2 & t) throw Error();
}
et(ft, 55), (st = Object.freeze(ft));
class pt {
	constructor(t, e, n) {
		(this.l = 0), (this.g = t), (this.h = e), (this.m = n);
	}
	next() {
		if (this.l < this.g.length) {
			const t = this.g[this.l++];
			return { done: !1, value: this.h ? this.h.call(this.m, t) : t };
		}
		return { done: !0, value: void 0 };
	}
	[Symbol.iterator]() {
		return new pt(this.g, this.h, this.m);
	}
}
let gt;
function mt(t, e) {
	(e = gt ? e[gt] : void 0) && (t[gt] = X(e));
}
var yt = Object.freeze({}),
	_t = Object.freeze({}),
	vt = Object.freeze({});
function Et(t) {
	return (t.Qa = !0), t;
}
var wt = Et((t) => 'number' == typeof t),
	Tt = Et((t) => 'string' == typeof t),
	bt = Et((t) => 'boolean' == typeof t),
	At = 'function' == typeof t.BigInt && 'bigint' == typeof t.BigInt(0),
	kt = Et((t) =>
		At ? t >= xt && t <= Rt : '-' === t[0] ? Ft(t, St) : Ft(t, Lt)
	);
const St = Number.MIN_SAFE_INTEGER.toString(),
	xt = At ? BigInt(Number.MIN_SAFE_INTEGER) : void 0,
	Lt = Number.MAX_SAFE_INTEGER.toString(),
	Rt = At ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
function Ft(t, e) {
	if (t.length > e.length) return !1;
	if (t.length < e.length || t === e) return !0;
	for (let n = 0; n < t.length; n++) {
		const r = t[n],
			i = e[n];
		if (r > i) return !1;
		if (r < i) return !0;
	}
}
const Mt = 'function' == typeof Uint8Array.prototype.slice;
let It,
	Pt = 0,
	Ot = 0;
function Ct(t) {
	const e = t >>> 0;
	(Pt = e), (Ot = ((t - e) / 4294967296) >>> 0);
}
function Nt(t) {
	if (t < 0) {
		Ct(-t);
		const [e, n] = Xt(Pt, Ot);
		(Pt = e >>> 0), (Ot = n >>> 0);
	} else Ct(t);
}
function Ut(t) {
	const e = (It ||= new DataView(new ArrayBuffer(8)));
	e.setFloat32(0, +t, !0), (Ot = 0), (Pt = e.getUint32(0, !0));
}
function Dt(t, e) {
	return 4294967296 * e + (t >>> 0);
}
function Bt(t, e) {
	const n = 2147483648 & e;
	return (
		n && ((e = ~e >>> 0), 0 == (t = (1 + ~t) >>> 0) && (e = (e + 1) >>> 0)),
		(t = Dt(t, e)),
		n ? -t : t
	);
}
function Gt(t, e) {
	if (((t >>>= 0), (e >>>= 0) <= 2097151)) var n = '' + (4294967296 * e + t);
	else
		V()
			? (n = '' + ((BigInt(e) << BigInt(32)) | BigInt(t)))
			: ((t =
					(16777215 & t) +
					6777216 * (n = 16777215 & ((t >>> 24) | (e << 8))) +
					6710656 * (e = (e >> 16) & 65535)),
			  (n += 8147497 * e),
			  (e *= 2),
			  t >= 1e7 && ((n += (t / 1e7) >>> 0), (t %= 1e7)),
			  n >= 1e7 && ((e += (n / 1e7) >>> 0), (n %= 1e7)),
			  (n = e + jt(n) + jt(t)));
	return n;
}
function jt(t) {
	return (t = String(t)), '0000000'.slice(t.length) + t;
}
function Vt(t) {
	if (t.length < 16) Nt(Number(t));
	else if (V())
		(t = BigInt(t)),
			(Pt = Number(t & BigInt(4294967295)) >>> 0),
			(Ot = Number((t >> BigInt(32)) & BigInt(4294967295)));
	else {
		const e = +('-' === t[0]);
		Ot = Pt = 0;
		const n = t.length;
		for (let r = e, i = ((n - e) % 6) + e; i <= n; r = i, i += 6) {
			const e = Number(t.slice(r, i));
			(Ot *= 1e6),
				(Pt = 1e6 * Pt + e),
				Pt >= 4294967296 &&
					((Ot += Math.trunc(Pt / 4294967296)),
					(Ot >>>= 0),
					(Pt >>>= 0));
		}
		if (e) {
			const [t, e] = Xt(Pt, Ot);
			(Pt = t), (Ot = e);
		}
	}
}
function Xt(t, e) {
	return (e = ~e), t ? (t = 1 + ~t) : (e += 1), [t, e];
}
function Ht(t) {
	return null == t || 'number' == typeof t
		? t
		: 'NaN' === t || 'Infinity' === t || '-Infinity' === t
		? Number(t)
		: void 0;
}
function Wt(t) {
	return null == t || 'boolean' == typeof t
		? t
		: 'number' == typeof t
		? !!t
		: void 0;
}
const zt = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function Kt(t) {
	const e = typeof t;
	switch (e) {
		case 'bigint':
			return !0;
		case 'number':
			return Number.isFinite(t);
	}
	return 'string' === e && zt.test(t);
}
function Yt(t) {
	if (null == t) return t;
	if ('string' == typeof t) {
		if (!t) return;
		t = +t;
	}
	return 'number' == typeof t && Number.isFinite(t) ? 0 | t : void 0;
}
function $t(t) {
	if (null == t) return t;
	if ('string' == typeof t) {
		if (!t) return;
		t = +t;
	}
	return 'number' == typeof t && Number.isFinite(t) ? t >>> 0 : void 0;
}
function qt(t) {
	return (
		'-' !== t[0] &&
		(t.length < 20 ||
			(20 === t.length && Number(t.substring(0, 6)) < 184467))
	);
}
function Jt(t) {
	return (
		(t = Math.trunc(t)),
		Number.isSafeInteger(t) || (Nt(t), (t = Bt(Pt, Ot))),
		t
	);
}
function Zt(t) {
	var e = Math.trunc(Number(t));
	if (Number.isSafeInteger(e)) return String(e);
	if (
		(-1 !== (e = t.indexOf('.')) && (t = t.substring(0, e)),
		!('-' === t[0]
			? t.length < 20 ||
			  (20 === t.length && Number(t.substring(0, 7)) > -922337)
			: t.length < 19 ||
			  (19 === t.length && Number(t.substring(0, 6)) < 922337)))
	)
		if ((Vt(t), (t = Pt), 2147483648 & (e = Ot)))
			if (V()) t = '' + ((BigInt(0 | e) << BigInt(32)) | BigInt(t >>> 0));
			else {
				const [n, r] = Xt(t, e);
				t = '-' + Gt(n, r);
			}
		else t = Gt(t, e);
	return t;
}
function Qt(t) {
	return null == t
		? t
		: 'bigint' == typeof t
		? (kt(t)
				? (t = Number(t))
				: ((t = BigInt.asIntN(64, t)),
				  (t = kt(t) ? Number(t) : String(t))),
		  t)
		: Kt(t)
		? 'number' == typeof t
			? Jt(t)
			: Zt(t)
		: void 0;
}
function te(t) {
	if (null == t) return t;
	var e = typeof t;
	if ('bigint' === e) return String(BigInt.asUintN(64, t));
	if (Kt(t)) {
		if ('string' === e)
			return (
				(e = Math.trunc(Number(t))),
				Number.isSafeInteger(e) && e >= 0
					? (t = String(e))
					: (-1 !== (e = t.indexOf('.')) && (t = t.substring(0, e)),
					  qt(t) || (Vt(t), (t = Gt(Pt, Ot)))),
				t
			);
		if ('number' === e)
			return (t = Math.trunc(t)) >= 0 && Number.isSafeInteger(t)
				? t
				: (function (t) {
						if (t < 0) {
							Nt(t);
							const e = Gt(Pt, Ot);
							return (
								(t = Number(e)), Number.isSafeInteger(t) ? t : e
							);
						}
						return qt(String(t)) ? t : (Nt(t), Dt(Pt, Ot));
				  })(t);
	}
}
function ee(t) {
	if ('string' != typeof t) throw Error();
	return t;
}
function ne(t) {
	if (null != t && 'string' != typeof t) throw Error();
	return t;
}
function re(t) {
	return null == t || 'string' == typeof t ? t : void 0;
}
function ie(t, e, n, r) {
	if (null != t && 'object' == typeof t && t.X === ot) return t;
	if (!Array.isArray(t))
		return (
			n
				? 2 & r
					? (t = e[K])
						? (e = t)
						: (nt((t = new e()).u), (e = e[K] = t))
					: (e = new e())
				: (e = void 0),
			e
		);
	let i = (n = Q(t));
	return (
		0 === i && (i |= 32 & r), (i |= 2 & r), i !== n && et(t, i), new e(t)
	);
}
function se(t, e, n) {
	if (e)
		t: {
			if (!Kt((e = t))) throw j('int64');
			switch (typeof e) {
				case 'string':
					e = Zt(e);
					break t;
				case 'bigint':
					if (((t = e = BigInt.asIntN(64, e)), Tt(t))) {
						if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))
							throw Error(String(t));
					} else if (wt(t) && !Number.isSafeInteger(t))
						throw Error(String(t));
					e = At
						? BigInt(e)
						: bt(e)
						? e
							? '1'
							: '0'
						: Tt(e)
						? e.trim() || '0'
						: String(e);
					break t;
				default:
					e = Jt(e);
			}
		}
	else e = Qt(t);
	return 'string' == typeof (n = null == (t = e) ? (n ? 0 : void 0) : t) &&
		((e = +n), Number.isSafeInteger(e))
		? e
		: n;
}
function oe(t) {
	if (
		(void 0 === he && (he = 'function' == typeof Proxy ? ye(Proxy) : null),
		!he || !me())
	)
		return t;
	let e = ae?.get(t);
	return (
		e ||
		(Math.random() > 0.01
			? t
			: ((function (t) {
					if (void 0 === le) {
						const t = new he([], {});
						le = 1 === Array.prototype.concat.call([], t).length;
					}
					le &&
						'function' == typeof Symbol &&
						Symbol.isConcatSpreadable &&
						(t[Symbol.isConcatSpreadable] = !0);
			  })(t),
			  (e = new he(t, { set: (t, e, n) => (G(), (t[e] = n), !0) })),
			  (function (t, e) {
					(ae ||= new ue()).set(t, e), (ce ||= new ue()).set(e, t);
			  })(t, e),
			  e))
	);
}
let ae, ce, he, ue, le, fe, de, pe, ge;
function me() {
	return (
		void 0 === ue &&
			(ue = 'function' == typeof WeakMap ? ye(WeakMap) : null),
		ue
	);
}
function ye(t) {
	try {
		return -1 !== t.toString().indexOf('[native code]') ? t : null;
	} catch {
		return null;
	}
}
function _e(t, e, n) {
	if (me()) {
		if (fe?.get(e)?.get(t)) {
			if (n) return;
		} else if (Math.random() > 0.01) return;
		var r = t.length;
		n = { length: r };
		for (var i = 0; i < Math.min(r, 10); i++) {
			if (r <= 10) var s = i;
			else {
				s = r / 10;
				const t = Math.floor(i * s);
				s =
					t +
					Math.floor(Math.random() * (Math.floor((i + 1) * s) - t));
			}
			n[s] = t[s];
		}
		Ee(t, n)
			? ((i = (r = fe ||= new ue()).get(e)) ||
					((i = new ue()), r.set(e, i)),
			  i.set(t, n))
			: (G(), Te(t, e));
	}
}
function ve(t, e) {
	const n = fe?.get(e)?.get(t);
	n && !Ee(t, n) && (G(), Te(t, e));
}
function Ee(t, e) {
	if (t.length !== e.length) return !1;
	for (const i in e) {
		var n,
			r = Number(i);
		if (
			((n = Number.isInteger(r)) &&
				((n = t[r]),
				(r = e[r]),
				(n = !(Number.isNaN(n) ? Number.isNaN(r) : n === r))),
			n)
		)
			return !1;
	}
	return !0;
}
function we(t) {
	if (t && fe?.has(t)) {
		var e = t.u;
		if (e)
			for (let n = 0; n < e.length; n++) {
				const r = e[n];
				if (n === e.length - 1 && ht(r))
					for (const e in r) {
						const n = r[e];
						Array.isArray(n) && ve(n, t);
					}
				else Array.isArray(r) && ve(r, t);
			}
	}
}
function Te(t, e) {
	fe?.get(e)?.delete(t);
}
function be(t, e, n) {
	return (t = Ae(t, e[0], e[1], n ? 1 : 2)), e !== pe && n && J(t, 16384), t;
}
function Ae(t, e, n, r) {
	if (((r = r ?? 0), null == t && (t = de), (de = void 0), null == t)) {
		var i = 96;
		n ? ((t = [n]), (i |= 512)) : (t = []),
			e && (i = (-33521665 & i) | ((1023 & e) << 15));
	} else {
		if (!Array.isArray(t)) throw Error('narr');
		if (2048 & (i = Q(t))) throw Error('farr');
		if (64 & i) return t;
		if ((1 === r || 2 === r || (i |= 64), n && ((i |= 512), n !== t[0])))
			throw Error('mid');
		t: {
			if ((r = (n = t).length)) {
				const t = r - 1;
				if (ht(n[t])) {
					if ((e = t - (+!!(512 & (i |= 256)) - 1)) >= 1024)
						throw Error('pvtlmt');
					i = (-33521665 & i) | ((1023 & e) << 15);
					break t;
				}
			}
			if (e) {
				if ((e = Math.max(e, r - (+!!(512 & i) - 1))) > 1024)
					throw Error('spvt');
				i = (-33521665 & i) | ((1023 & e) << 15);
			}
		}
	}
	return et(t, i), t;
}
const ke = {};
let Se = (function () {
	try {
		return (
			_(
				new (class extends Map {
					constructor() {
						super();
					}
				})()
			),
			!1
		);
	} catch {
		return !0;
	}
})();
class xe {
	constructor() {
		this.g = new Map();
	}
	get(t) {
		return this.g.get(t);
	}
	set(t, e) {
		return this.g.set(t, e), (this.size = this.g.size), this;
	}
	delete(t) {
		return (t = this.g.delete(t)), (this.size = this.g.size), t;
	}
	clear() {
		this.g.clear(), (this.size = this.g.size);
	}
	has(t) {
		return this.g.has(t);
	}
	entries() {
		return this.g.entries();
	}
	keys() {
		return this.g.keys();
	}
	values() {
		return this.g.values();
	}
	forEach(t, e) {
		return this.g.forEach(t, e);
	}
	[Symbol.iterator]() {
		return this.entries();
	}
}
const Le = Se
	? (Object.setPrototypeOf(xe.prototype, Map.prototype),
	  Object.defineProperties(xe.prototype, {
			size: { value: 0, configurable: !0, enumerable: !0, writable: !0 },
	  }),
	  xe)
	: class extends Map {
			constructor() {
				super();
			}
	  };
function Re(t) {
	return t;
}
function Fe(t) {
	if (2 & t.M) throw Error('Cannot mutate an immutable Map');
}
var Me = class extends Le {
	constructor(t, e, n = Re, r = Re) {
		super();
		let i = Q(t);
		(i |= 64),
			et(t, i),
			(this.M = i),
			(this.T = e),
			(this.S = n),
			(this.Z = this.T ? Ie : r);
		for (let s = 0; s < t.length; s++) {
			const o = t[s],
				a = n(o[0], !1, !0);
			let c = o[1];
			e
				? void 0 === c && (c = null)
				: (c = r(o[1], !1, !0, void 0, void 0, i)),
				super.set(a, c);
		}
	}
	pa(t = Pe) {
		if (0 !== this.size) return this.Y(t);
	}
	Y(t = Pe) {
		const e = [],
			n = super.entries();
		for (var r; !(r = n.next()).done; )
			((r = r.value)[0] = t(r[0])), (r[1] = t(r[1])), e.push(r);
		return e;
	}
	clear() {
		Fe(this), super.clear();
	}
	delete(t) {
		return Fe(this), super.delete(this.S(t, !0, !1));
	}
	entries() {
		var t = this.oa();
		return new pt(t, Oe, this);
	}
	keys() {
		return this.Ia();
	}
	values() {
		var t = this.oa();
		return new pt(t, Me.prototype.get, this);
	}
	forEach(t, e) {
		super.forEach((n, r) => {
			t.call(e, this.get(r), r, this);
		});
	}
	set(t, e) {
		return (
			Fe(this),
			null == (t = this.S(t, !0, !1))
				? this
				: null == e
				? (super.delete(t), this)
				: super.set(t, this.Z(e, !0, !0, this.T, !1, this.M))
		);
	}
	Oa(t) {
		const e = this.S(t[0], !1, !0);
		(t = t[1]),
			(t = this.T
				? void 0 === t
					? null
					: t
				: this.Z(t, !1, !0, void 0, !1, this.M)),
			super.set(e, t);
	}
	has(t) {
		return super.has(this.S(t, !1, !1));
	}
	get(t) {
		t = this.S(t, !1, !1);
		const e = super.get(t);
		if (void 0 !== e) {
			var n = this.T;
			return n
				? ((n = this.Z(e, !1, !0, n, this.ta, this.M)) !== e &&
						super.set(t, n),
				  n)
				: e;
		}
	}
	oa() {
		return Array.from(super.keys());
	}
	Ia() {
		return super.keys();
	}
	[Symbol.iterator]() {
		return this.entries();
	}
};
function Ie(t, e, n, r, i, s) {
	return (t = ie(t, r, n, s)), i && (t = He(t)), t;
}
function Pe(t) {
	return t;
}
function Oe(t) {
	return [t, this.get(t)];
}
let Ce;
function Ne() {
	return (Ce ||= new Me(nt([]), void 0, void 0, void 0, ke));
}
function Ue(t, e, n, r, i) {
	if (null != t) {
		if (Array.isArray(t))
			t = lt(t)
				? void 0
				: i && 2 & Q(t)
				? t
				: De(t, e, n, void 0 !== r, i);
		else if (ht(t)) {
			const s = {};
			for (let o in t) s[o] = Ue(t[o], e, n, r, i);
			t = s;
		} else t = e(t, r);
		return t;
	}
}
function De(t, e, n, r, i) {
	const s = r || n ? Q(t) : 0;
	r = r ? !!(32 & s) : void 0;
	const o = X(t);
	for (let t = 0; t < o.length; t++) o[t] = Ue(o[t], e, n, r, i);
	return n && (mt(o, t), n(s, o)), o;
}
function Be(t) {
	return Ue(t, Ge, void 0, void 0, !1);
}
function Ge(t) {
	return t.X === ot
		? t.toJSON()
		: t instanceof Me
		? t.pa(Be)
		: (function (t) {
				switch (typeof t) {
					case 'number':
						return isFinite(t) ? t : String(t);
					case 'bigint':
						return kt(t) ? Number(t) : String(t);
					case 'boolean':
						return t ? 1 : 0;
					case 'object':
						if (t)
							if (Array.isArray(t)) {
								if (lt(t)) return;
							} else {
								if (M(t)) return S(t);
								if (t instanceof U) {
									const e = t.g;
									return null == e
										? ''
										: 'string' == typeof e
										? e
										: (t.g = S(e));
								}
								if (t instanceof Me) return t.pa();
							}
				}
				return t;
		  })(t);
}
function je(t, e, n = it) {
	if (null != t) {
		if (A && t instanceof Uint8Array) return e ? t : new Uint8Array(t);
		if (Array.isArray(t)) {
			var r = Q(t);
			return 2 & r
				? t
				: ((e &&= 0 === r || (!!(32 & r) && !(64 & r || !(16 & r)))),
				  e
						? (et(t, -12293 & (34 | r)), t)
						: De(t, je, 4 & r ? it : n, !0, !0));
		}
		return (
			t.X === ot
				? ((n = t.u), (t = 2 & (r = tt(n)) ? t : Ve(t, n, r, !0)))
				: t instanceof Me &&
				  !(2 & t.M) &&
				  ((n = nt(t.Y(je))), (t = new Me(n, t.T, t.S, t.Z))),
			t
		);
	}
}
function Ve(t, e, n, r) {
	return (
		we(t),
		(t = t.constructor),
		(de = e = Xe(e, n, r)),
		(e = new t(e)),
		(de = void 0),
		e
	);
}
function Xe(t, e, n) {
	const r = n || 2 & e ? it : rt,
		i = !!(32 & e);
	return (
		(t = (function (t, e, n) {
			const r = X(t);
			var i = r.length;
			const s = 256 & e ? r[i - 1] : void 0;
			for (i += s ? -1 : 0, e = 512 & e ? 1 : 0; e < i; e++)
				r[e] = n(r[e]);
			if (s) {
				e = r[e] = {};
				for (const t in s) e[t] = n(s[t]);
			}
			return mt(r, t), r;
		})(t, e, (t) => je(t, i, r))),
		J(t, 32 | (n ? 2 : 0)),
		t
	);
}
function He(t) {
	const e = t.u,
		n = tt(e);
	return 2 & n ? Ve(t, e, n, !1) : t;
}
function We(t, e, n, r) {
	return (
		!(4 & e) ||
		(null != n &&
			(!r &&
				0 === n &&
				(4096 & e || 8192 & e) &&
				(t.constructor[q] = 1 + (0 | t.constructor[q])) < 5 &&
				G(),
			0 !== n && !(n & e)))
	);
}
function ze(t, e) {
	return Ye((t = t.u), tt(t), e);
}
function Ke(t, e, n, r) {
	if (!((e = r + (+!!(512 & e) - 1)) < 0 || e >= t.length || e >= n))
		return t[e];
}
function Ye(t, e, n, r) {
	if (-1 === n) return null;
	const i = (e >> 15) & 1023 || 536870912;
	if (!(n >= i)) {
		var s = t.length;
		return r && 256 & e && null != (r = t[s - 1][n])
			? (Ke(t, e, i, n) &&
					null != Y &&
					((e = (t = B ??= {})[Y] || 0) >= 4 ||
						((t[Y] = e + 1), G())),
			  r)
			: Ke(t, e, i, n);
	}
	return 256 & e ? t[t.length - 1][n] : void 0;
}
function $e(t, e, n) {
	const r = t.u;
	let i = tt(r);
	return dt(i), qe(r, i, e, n), t;
}
function qe(t, e, n, r) {
	const i = (e >> 15) & 1023 || 536870912;
	if (n >= i) {
		let s,
			o = e;
		if (256 & e) s = t[t.length - 1];
		else {
			if (null == r) return o;
			(s = t[i + (+!!(512 & e) - 1)] = {}), (o |= 256);
		}
		return (
			(s[n] = r),
			n < i && (t[n + (+!!(512 & e) - 1)] = void 0),
			o !== e && et(t, o),
			o
		);
	}
	return (
		(t[n + (+!!(512 & e) - 1)] = r),
		256 & e && n in (t = t[t.length - 1]) && delete t[n],
		e
	);
}
function Je(t, e, n, r, i) {
	var s = 2 & e;
	(i = Ye(t, e, n, i)), Array.isArray(i) || (i = st);
	const o = !(2 & r);
	r = !(1 & r);
	const a = !!(32 & e);
	let c = Q(i);
	return (
		0 !== c || !a || s || o
			? 1 & c || ((c |= 1), et(i, c))
			: ((c |= 33), et(i, c)),
		s
			? ((t = !1),
			  2 & c || (nt(i), (t = !!(4 & c))),
			  (r || t) && Object.freeze(i))
			: ((s = !!(2 & c) || !!(2048 & c)),
			  r && s
					? ((i = X(i)),
					  (s = 1),
					  a && !o && (s |= 32),
					  et(i, s),
					  qe(t, e, n, i))
					: o && 32 & c && !s && Z(i, 32)),
		i
	);
}
function Ze(t, e) {
	t = t.u;
	let n = tt(t);
	const r = Ye(t, n, e),
		i = Ht(r);
	return null != i && i !== r && qe(t, n, e, i), i;
}
function Qe(t) {
	t = t.u;
	let e = tt(t);
	const n = Ye(t, e, 1),
		r = ut(n, !0, !!(34 & e));
	return null != r && r !== n && qe(t, e, 1, r), r;
}
function tn() {
	return void 0 === yt ? 2 : 5;
}
function en(t, e, n, r, i, s) {
	const o = t.u;
	let a = tt(o);
	(r = 2 & a ? 1 : r), (s = !!s), (i = nn(o, a, e, i));
	var c = Q(i),
		h = i;
	if ((ve(h, t), (2 !== r && 1 !== r) || Te(h, t), We(t, c, void 0, s))) {
		4 & c && ((i = X(i)), (c = vn(c, a)), (a = qe(o, a, e, i)));
		let t = (h = 0);
		for (; h < i.length; h++) {
			const e = n(i[h]);
			null != e && (i[t++] = e);
		}
		t < h && (i.length = t),
			(c = -4097 & (20 | (c = rn(c, a)))),
			et(i, (c &= -8193)),
			2 & c && Object.freeze(i);
	}
	let u;
	return (
		1 === r || (4 === r && 32 & c)
			? sn(c) || ((t = c), (c |= 2) !== t && et(i, c), Object.freeze(i))
			: ((n = 5 === r && (!!(32 & c) || sn(c) || !!ae?.get(i))),
			  (2 === r || n) &&
					sn(c) &&
					((i = X(i)),
					(c = En((c = vn(c, a)), a, s)),
					et(i, c),
					(a = qe(o, a, e, i))),
			  sn(c) || ((e = c), (c = En(c, a, s)) !== e && et(i, c)),
			  n ? ((u = oe(i)), _e(i, t, !0)) : 2 !== r || s || ae?.delete(i)),
		u || i
	);
}
function nn(t, e, n, r) {
	return (t = Ye(t, e, n, r)), Array.isArray(t) ? t : st;
}
function rn(t, e) {
	return 0 === t && (t = vn(t, e)), 1 | t;
}
function sn(t) {
	return (!!(2 & t) && !!(4 & t)) || !!(2048 & t);
}
function on(t) {
	t = X(t);
	for (let e = 0; e < t.length; e++) {
		const n = (t[e] = X(t[e]));
		Array.isArray(n[1]) && (n[1] = nt(n[1]));
	}
	return t;
}
function an(t, e, n, r) {
	t = t.u;
	let i = tt(t);
	dt(i), qe(t, i, e, ('0' === r ? 0 === Number(n) : n === r) ? void 0 : n);
}
function cn(t, e) {
	var n = Rs;
	return ln(hn((t = t.u)), t, tt(t), n) === e ? e : -1;
}
function hn(t) {
	if (H) return t[$] ?? (t[$] = new Map());
	if ($ in t) return t[$];
	const e = new Map();
	return Object.defineProperty(t, $, { value: e }), e;
}
function un(t, e, n, r) {
	const i = hn(t),
		s = ln(i, t, e, n);
	return s !== r && (s && (e = qe(t, e, s)), i.set(n, r)), e;
}
function ln(t, e, n, r) {
	let i = t.get(r);
	if (null != i) return i;
	i = 0;
	for (let t = 0; t < r.length; t++) {
		const s = r[t];
		null != Ye(e, n, s) && (0 !== i && (n = qe(e, n, i)), (i = s));
	}
	return t.set(r, i), i;
}
function fn(t, e, n, r) {
	let i,
		s = tt(t);
	if (null != (r = Ye(t, s, n, r)) && r.X === ot)
		return (e = He(r)) !== r && qe(t, s, n, e), e.u;
	if (Array.isArray(r)) {
		const t = Q(r);
		i = 2 & t ? be(Xe(r, t, !1), e, !0) : 64 & t ? r : be(i, e, !0);
	} else i = be(void 0, e, !0);
	return i !== r && qe(t, s, n, i), i;
}
function dn(t, e, n, r) {
	t = t.u;
	let i = tt(t);
	return (
		(e = ie((r = Ye(t, i, n, r)), e, !1, i)) !== r &&
			null != e &&
			qe(t, i, n, e),
		e
	);
}
function pn(t, e, n, r = !1) {
	if (null == (e = dn(t, e, n, r))) return e;
	if (((t = t.u), !(2 & (r = tt(t))))) {
		const i = He(e);
		i !== e && qe(t, r, n, (e = i));
	}
	return e;
}
function gn(t, e, n, r, i, s, o) {
	const a = t.u;
	var c = !!(2 & e);
	(i = c ? 1 : i), (s = !!s), (o &&= !c), (c = nn(a, e, r));
	var h = Q(c),
		u = c;
	if ((ve(u, t), (2 !== i && 1 !== i) || Te(u, t), !(u = !!(4 & h)))) {
		var l = c,
			f = e;
		const t = !!(2 & (h = rn(h, e)));
		t && (f |= 2);
		let r = !t,
			i = !0,
			s = 0,
			o = 0;
		for (; s < l.length; s++) {
			const e = ie(l[s], n, !1, f);
			if (e instanceof n) {
				if (!t) {
					const t = !!(2 & Q(e.u));
					(r &&= !t), (i &&= t);
				}
				l[o++] = e;
			}
		}
		o < s && (l.length = o),
			(h |= 4),
			(h = i ? 16 | h : -17 & h),
			et(l, (h = r ? 8 | h : -9 & h)),
			t && Object.freeze(l);
	}
	if (o && !(8 & h || (!c.length && (1 === i || (4 === i && 32 & h))))) {
		for (
			sn(h)
				? ((c = X(c)), (h = vn(h, e)), (e = qe(a, e, r, c)))
				: Te(c, t),
				n = c,
				o = h,
				l = 0;
			l < n.length;
			l++
		)
			(h = n[l]) !== (f = He(h)) && (n[l] = f);
		(o |= 8), (o = n.length ? -17 & o : 16 | o), et(n, o), (h = o);
	}
	let d;
	return (
		1 === i || (4 === i && 32 & h)
			? sn(h) ||
			  ((t = h),
			  (h |= !c.length || (16 & h && (!u || 32 & h)) ? 2 : 2048) !== t &&
					et(c, h),
			  Object.freeze(c))
			: ((u = 5 === i && (!!(32 & h) || sn(h) || !!ae?.get(c))),
			  (2 === i || u) &&
					sn(h) &&
					((c = X(c)),
					(h = En((h = vn(h, e)), e, s)),
					et(c, h),
					(e = qe(a, e, r, c))),
			  sn(h) || ((r = h), (h = En(h, e, s)) !== r && et(c, h)),
			  u ? ((d = oe(c)), _e(c, t, !0)) : 2 !== i || s || ae?.delete(c)),
		d || c
	);
}
function mn(t, e, n) {
	const r = tt(t.u);
	return gn(t, r, e, n, tn(), !1, !(2 & r));
}
function yn(t, e, n, r) {
	return null == r && (r = void 0), $e(t, n, r);
}
function _n(t, e, n, r) {
	null == r && (r = void 0);
	t: {
		t = t.u;
		let i = tt(t);
		if ((dt(i), null == r)) {
			const r = hn(t);
			if (ln(r, t, i, n) !== e) break t;
			r.set(n, 0);
		} else i = un(t, i, n, e);
		qe(t, i, e, r);
	}
}
function vn(t, e) {
	return -2049 & (t = 32 | (2 & e ? 2 | t : -3 & t));
}
function En(t, e, n) {
	return (32 & e && n) || (t &= -33), t;
}
function wn(t, e, n, r) {
	const i = tt(t.u);
	dt(i),
		(t = gn(t, i, n, e, 2, !0)),
		(r = null != r ? r : new n()),
		t.push(r),
		2 & Q(r.u) ? Z(t, 8) : Z(t, 16);
}
function Tn(t, e) {
	return t ?? e;
}
function bn(t, e) {
	return Yt(ze(t, e));
}
function An(t, e) {
	return Tn(Ze(t, e), 0);
}
function kn(t, e) {
	return Tn(re(ze(t, e)), '');
}
function Sn(t, e, n) {
	if (null != n && 'boolean' != typeof n)
		throw (
			((t = typeof n),
			Error(
				`Expected boolean but got ${
					'object' != t
						? t
						: n
						? Array.isArray(n)
							? 'array'
							: t
						: 'null'
				}: ${n}`
			))
		);
	$e(t, e, n);
}
function xn(t, e, n) {
	if (null != n) {
		if ('number' != typeof n) throw j('int32');
		if (!Number.isFinite(n)) throw j('int32');
		n |= 0;
	}
	$e(t, e, n);
}
function Ln(t, e, n) {
	if (null != n && 'number' != typeof n)
		throw Error(
			`Value of float/double field must be a number, found ${typeof n}: ${n}`
		);
	$e(t, e, n);
}
function Rn(t, e, n) {
	{
		const a = t.u;
		let c = tt(a);
		if ((dt(c), null == n)) qe(a, c, e);
		else {
			n = ce?.get(n) || n;
			var r,
				i = Q(n),
				s = i,
				o = !!(2 & i) || Object.isFrozen(n);
			if (
				((r = !o) &&
					((r = void 0 === vt) || (r = !!f && void 0 !== _t)),
				We(t, i))
			) {
				(i = 21),
					o && ((n = X(n)), (s = 0), (i = En((i = vn(i, c)), c, !0)));
				for (let t = 0; t < n.length; t++) n[t] = ee(n[t]);
			}
			r
				? ((n = X(n)), (s = 0), (i = En((i = vn(i, c)), c, !0)))
				: o || _e(n, t),
				i !== s && et(n, i),
				qe(a, c, e, n);
		}
	}
}
function Fn(t, e, n) {
	dt(tt(t.u)), en(t, e, re, 2, void 0, !0).push(ee(n));
}
function Mn(t, e) {
	return Error(`Invalid wire type: ${t} (at position ${e})`);
}
function In() {
	return Error('Failed to read varint, encoding is invalid.');
}
function Pn(t, e) {
	return Error(`Tried to read past the end of the data ${e} > ${t}`);
}
function On(t) {
	if ('string' == typeof t) return { buffer: F(t), O: !1 };
	if (Array.isArray(t)) return { buffer: new Uint8Array(t), O: !1 };
	if (t.constructor === Uint8Array) return { buffer: t, O: !1 };
	if (t.constructor === ArrayBuffer)
		return { buffer: new Uint8Array(t), O: !1 };
	if (t.constructor === U)
		return { buffer: N(t) || new Uint8Array(0), O: !0 };
	if (t instanceof Uint8Array)
		return {
			buffer: new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
			O: !1,
		};
	throw Error(
		'Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers'
	);
}
function Cn(t, e) {
	let n,
		r = 0,
		i = 0,
		s = 0;
	const o = t.h;
	let a = t.g;
	do {
		(n = o[a++]), (r |= (127 & n) << s), (s += 7);
	} while (s < 32 && 128 & n);
	for (s > 32 && (i |= (127 & n) >> 4), s = 3; s < 32 && 128 & n; s += 7)
		(n = o[a++]), (i |= (127 & n) << s);
	if ((Xn(t, a), n < 128)) return e(r >>> 0, i >>> 0);
	throw In();
}
function Nn(t) {
	let e = 0,
		n = t.g;
	const r = n + 10,
		i = t.h;
	for (; n < r; ) {
		const r = i[n++];
		if (((e |= r), 0 == (128 & r))) return Xn(t, n), !!(127 & e);
	}
	throw In();
}
function Un(t) {
	const e = t.h;
	let n = t.g,
		r = e[n++],
		i = 127 & r;
	if (
		128 & r &&
		((r = e[n++]),
		(i |= (127 & r) << 7),
		128 & r &&
			((r = e[n++]),
			(i |= (127 & r) << 14),
			128 & r &&
				((r = e[n++]),
				(i |= (127 & r) << 21),
				128 & r &&
					((r = e[n++]),
					(i |= r << 28),
					128 & r &&
						128 & e[n++] &&
						128 & e[n++] &&
						128 & e[n++] &&
						128 & e[n++] &&
						128 & e[n++]))))
	)
		throw In();
	return Xn(t, n), i;
}
function Dn(t) {
	return Un(t) >>> 0;
}
function Bn(t) {
	var e = t.h;
	const n = t.g,
		r = e[n],
		i = e[n + 1],
		s = e[n + 2];
	return (
		(e = e[n + 3]),
		Xn(t, t.g + 4),
		((r << 0) | (i << 8) | (s << 16) | (e << 24)) >>> 0
	);
}
function Gn(t) {
	var e = Bn(t);
	t = 2 * (e >> 31) + 1;
	const n = (e >>> 23) & 255;
	return (
		(e &= 8388607),
		255 == n
			? e
				? NaN
				: t * (1 / 0)
			: 0 == n
			? 1401298464324817e-60 * t * e
			: t * Math.pow(2, n - 150) * (e + 8388608)
	);
}
function jn(t) {
	return Un(t);
}
function Vn(t, e, { ca: n = !1 } = {}) {
	(t.ca = n),
		e &&
			((e = On(e)),
			(t.h = e.buffer),
			(t.m = e.O),
			(t.j = 0),
			(t.l = t.h.length),
			(t.g = t.j));
}
function Xn(t, e) {
	if (((t.g = e), e > t.l)) throw Pn(t.l, e);
}
function Hn(t, e) {
	if (e < 0) throw Error(`Tried to read a negative byte length: ${e}`);
	const n = t.g,
		r = n + e;
	if (r > t.l) throw Pn(e, t.l - n);
	return (t.g = r), n;
}
function Wn(t, e) {
	if (0 == e) return C();
	var n = Hn(t, e);
	return (
		t.ca && t.m
			? (n = t.h.subarray(n, n + e))
			: ((t = t.h),
			  (n =
					n === (e = n + e)
						? new Uint8Array(0)
						: Mt
						? t.slice(n, e)
						: new Uint8Array(t.subarray(n, e)))),
		0 == n.length ? C() : new U(n, I)
	);
}
(Me.prototype.toJSON = void 0), (Me.prototype.Ja = at);
var zn = [];
function Kn(t) {
	var e = t.g;
	if (e.g == e.l) return !1;
	t.l = t.g.g;
	var n = Dn(t.g);
	if (((e = n >>> 3), !((n &= 7) >= 0 && n <= 5))) throw Mn(n, t.l);
	if (e < 1) throw Error(`Invalid field number: ${e} (at position ${t.l})`);
	return (t.m = e), (t.h = n), !0;
}
function Yn(t) {
	switch (t.h) {
		case 0:
			0 != t.h ? Yn(t) : Nn(t.g);
			break;
		case 1:
			Xn((t = t.g), t.g + 8);
			break;
		case 2:
			if (2 != t.h) Yn(t);
			else {
				var e = Dn(t.g);
				Xn((t = t.g), t.g + e);
			}
			break;
		case 5:
			Xn((t = t.g), t.g + 4);
			break;
		case 3:
			for (e = t.m; ; ) {
				if (!Kn(t))
					throw Error('Unmatched start-group tag: stream EOF');
				if (4 == t.h) {
					if (t.m != e) throw Error('Unmatched end-group tag');
					break;
				}
				Yn(t);
			}
			break;
		default:
			throw Mn(t.h, t.l);
	}
}
function $n(t, e, n) {
	const r = t.g.l,
		i = Dn(t.g),
		s = t.g.g + i;
	let o = s - r;
	if (
		(o <= 0 &&
			((t.g.l = s), n(e, t, void 0, void 0, void 0), (o = s - t.g.g)),
		o)
	)
		throw Error(
			`Message parsing ended unexpectedly. Expected to read ${i} bytes, instead read ${
				i - o
			} bytes, either the data ended unexpectedly or the message misreported its own length`
		);
	return (t.g.g = s), (t.g.l = r), e;
}
function qn(t) {
	var e = Dn(t.g),
		a = Hn((t = t.g), e);
	if (((t = t.h), o)) {
		var c,
			h = t;
		(c = s) || (c = s = new TextDecoder('utf-8', { fatal: !0 })),
			(e = a + e),
			(h = 0 === a && e === h.length ? h : h.subarray(a, e));
		try {
			var u = c.decode(h);
		} catch (t) {
			if (void 0 === i) {
				try {
					c.decode(new Uint8Array([128]));
				} catch (t) {}
				try {
					c.decode(new Uint8Array([97])), (i = !0);
				} catch (t) {
					i = !1;
				}
			}
			throw (!i && (s = void 0), t);
		}
	} else {
		(e = (u = a) + e), (a = []);
		let i,
			s = null;
		for (; u < e; ) {
			var l = t[u++];
			l < 128
				? a.push(l)
				: l < 224
				? u >= e
					? n()
					: ((i = t[u++]),
					  l < 194 || 128 != (192 & i)
							? (u--, n())
							: a.push(((31 & l) << 6) | (63 & i)))
				: l < 240
				? u >= e - 1
					? n()
					: ((i = t[u++]),
					  128 != (192 & i) ||
					  (224 === l && i < 160) ||
					  (237 === l && i >= 160) ||
					  128 != (192 & (c = t[u++]))
							? (u--, n())
							: a.push(
									((15 & l) << 12) |
										((63 & i) << 6) |
										(63 & c)
							  ))
				: l <= 244
				? u >= e - 2
					? n()
					: ((i = t[u++]),
					  128 != (192 & i) ||
					  (i - 144 + (l << 28)) >> 30 != 0 ||
					  128 != (192 & (c = t[u++])) ||
					  128 != (192 & (h = t[u++]))
							? (u--, n())
							: ((l =
									((7 & l) << 18) |
									((63 & i) << 12) |
									((63 & c) << 6) |
									(63 & h)),
							  (l -= 65536),
							  a.push(
									55296 + ((l >> 10) & 1023),
									56320 + (1023 & l)
							  )))
				: n(),
				a.length >= 8192 && ((s = r(s, a)), (a.length = 0));
		}
		u = r(s, a);
	}
	return u;
}
function Jn(t) {
	const e = Dn(t.g);
	return Wn(t.g, e);
}
function Zn(t, e, n) {
	var r = Dn(t.g);
	for (r = t.g.g + r; t.g.g < r; ) n.push(e(t.g));
}
var Qn = [];
let tr;
function er(t, e, n) {
	e.g ? e.m(t, e.g, e.h, n, !0) : e.m(t, e.h, n, !0);
}
var nr = class {
	constructor(t, e) {
		this.u = Ae(t, e);
	}
	toJSON() {
		return rr(this);
	}
	l() {
		var t = ko;
		return t.g
			? t.l(this, t.g, t.h, !0)
			: t.l(this, t.h, t.defaultValue, !0);
	}
	clone() {
		const t = this.u;
		return Ve(this, t, tt(t), !1);
	}
	O() {
		return !!(2 & Q(this.u));
	}
};
function rr(t) {
	we(t), (t = tr ? t.u : De(t.u, Ge, void 0, void 0, !1));
	{
		var e = !tr;
		let h = t.length;
		if (h) {
			var n = t[h - 1],
				r = ht(n);
			r ? h-- : (n = void 0);
			var i = t;
			if (r) {
				t: {
					var s,
						o = n,
						a = !1;
					if (o)
						for (let t in o)
							isNaN(+t)
								? ((s ??= {})[t] = o[t])
								: ((r = o[t]),
								  Array.isArray(r) &&
										(lt(r) || (ct(r) && 0 === r.size)) &&
										(r = null),
								  null == r && (a = !0),
								  null != r && ((s ??= {})[t] = r));
					if ((a || (s = o), s))
						for (let t in s) {
							a = s;
							break t;
						}
					a = null;
				}
				o = null == a ? null != n : a !== n;
			}
			for (
				;
				h > 0 &&
				(null == (s = i[h - 1]) || lt(s) || (ct(s) && 0 === s.size));
				h--
			)
				var c = !0;
			(i !== t || o || c) &&
				(e
					? (c || o || a) && (i.length = h)
					: (i = Array.prototype.slice.call(i, 0, h)),
				a && i.push(a)),
				(c = i);
		} else c = t;
	}
	return c;
}
function ir(t) {
	return t
		? /^\d+$/.test(t)
			? (Vt(t), new sr(Pt, Ot))
			: null
		: (or ||= new sr(0, 0));
}
(nr.prototype.X = ot),
	(nr.prototype.toString = function () {
		try {
			return (tr = !0), rr(this).toString();
		} finally {
			tr = !1;
		}
	});
var sr = class {
	constructor(t, e) {
		(this.h = t >>> 0), (this.g = e >>> 0);
	}
};
let or;
function ar(t) {
	return t
		? /^-?\d+$/.test(t)
			? (Vt(t), new cr(Pt, Ot))
			: null
		: (hr ||= new cr(0, 0));
}
var cr = class {
	constructor(t, e) {
		(this.h = t >>> 0), (this.g = e >>> 0);
	}
};
let hr;
function ur(t, e, n) {
	for (; n > 0 || e > 127; )
		t.g.push((127 & e) | 128),
			(e = ((e >>> 7) | (n << 25)) >>> 0),
			(n >>>= 7);
	t.g.push(e);
}
function lr(t, e) {
	for (; e > 127; ) t.g.push((127 & e) | 128), (e >>>= 7);
	t.g.push(e);
}
function fr(t, e) {
	if (e >= 0) lr(t, e);
	else {
		for (let n = 0; n < 9; n++) t.g.push((127 & e) | 128), (e >>= 7);
		t.g.push(1);
	}
}
function dr(t, e) {
	t.g.push((e >>> 0) & 255),
		t.g.push((e >>> 8) & 255),
		t.g.push((e >>> 16) & 255),
		t.g.push((e >>> 24) & 255);
}
function pr(t, e) {
	0 !== e.length && (t.l.push(e), (t.h += e.length));
}
function gr(t, e, n) {
	lr(t.g, 8 * e + n);
}
function mr(t, e) {
	return gr(t, e, 2), (e = t.g.end()), pr(t, e), e.push(t.h), e;
}
function yr(t, e) {
	var n = e.pop();
	for (n = t.h + t.g.length() - n; n > 127; )
		e.push((127 & n) | 128), (n >>>= 7), t.h++;
	e.push(n), t.h++;
}
function _r(t, e, n) {
	gr(t, e, 2), lr(t.g, n.length), pr(t, t.g.end()), pr(t, n);
}
function vr(t, e, n, r) {
	null != n && ((e = mr(t, e)), r(n, t), yr(t, e));
}
function Er() {
	const t = class {
		constructor() {
			throw Error();
		}
	};
	return Object.setPrototypeOf(t, t.prototype), t;
}
var wr = Er(),
	Tr = Er(),
	br = Er(),
	Ar = Er(),
	kr = Er(),
	Sr = Er(),
	xr = Er(),
	Lr = Er(),
	Rr = class {
		constructor(t, e, n) {
			(this.g = t),
				(this.h = e),
				(t = wr),
				(this.l = (!!t && n === t) || !1);
		}
	};
function Fr(t, e) {
	return new Rr(t, e, wr);
}
function Mr(t, e, n, r, i) {
	vr(t, n, Vr(e, r), i);
}
const Ir = Fr(function (t, e, n, r, i) {
		return 2 === t.h && ($n(t, fn(e, r, n), i), !0);
	}, Mr),
	Pr = Fr(function (t, e, n, r, i) {
		return 2 === t.h && ($n(t, fn(e, r, n, !0), i), !0);
	}, Mr);
var Or = Symbol(),
	Cr = Symbol(),
	Nr = Symbol(),
	Ur = Symbol();
let Dr, Br;
function Gr(t, e, n, r) {
	var i = r[t];
	if (i) return i;
	(i = {}).W = (function (t) {
		switch (typeof t) {
			case 'boolean':
				return (pe ||= [0, void 0, !0]);
			case 'number':
				return t > 0
					? void 0
					: 0 === t
					? (ge ||= [0, void 0])
					: [-t, void 0];
			case 'string':
				return [0, t];
			case 'object':
				return t;
		}
	})(r[0]);
	var s = r[1];
	let o = 1;
	s &&
		s.constructor === Object &&
		((i.ia = s),
		'function' == typeof (s = r[++o]) &&
			((i.na = !0), (Dr ??= s), (Br ??= r[o + 1]), (s = r[(o += 2)])));
	const a = {};
	for (
		;
		s &&
		Array.isArray(s) &&
		s.length &&
		'number' == typeof s[0] &&
		s[0] > 0;

	) {
		for (var c = 0; c < s.length; c++) a[s[c]] = s;
		s = r[++o];
	}
	for (c = 1; void 0 !== s; ) {
		let t;
		'number' == typeof s && ((c += s), (s = r[++o]));
		var h = void 0;
		if ((s instanceof Rr ? (t = s) : ((t = Ir), o--), t?.l)) {
			(s = r[++o]), (h = r);
			var u = o;
			'function' == typeof s && ((s = s()), (h[u] = s)), (h = s);
		}
		for (
			u = c + 1,
				'number' == typeof (s = r[++o]) &&
					s < 0 &&
					((u -= s), (s = r[++o]));
			c < u;
			c++
		) {
			const r = a[c];
			h ? n(i, c, t, h, r) : e(i, c, t, r);
		}
	}
	return (r[t] = i);
}
function jr(t) {
	return Array.isArray(t) ? (t[0] instanceof Rr ? t : [Pr, t]) : [t, void 0];
}
function Vr(t, e) {
	return t instanceof nr
		? (we(t), t.u)
		: Array.isArray(t)
		? be(t, e, !1)
		: void 0;
}
function Xr(t, e, n, r) {
	const i = n.g;
	t[e] = r ? (t, e, n) => i(t, e, n, r) : i;
}
function Hr(t, e, n, r, i) {
	const s = n.g;
	let o, a;
	t[e] = (t, e, n) =>
		s(t, e, n, (a ||= Gr(Cr, Xr, Hr, r).W), (o ||= Wr(r)), i);
}
function Wr(t) {
	let e = t[Nr];
	if (null != e) return e;
	const n = Gr(Cr, Xr, Hr, t);
	return (
		(e = n.na
			? (t, e) => Dr(t, e, n)
			: (t, e) => {
					const r = tt(t);
					for (; Kn(e) && 4 != e.h; ) {
						var i = e.m,
							s = n[i];
						if (null == s) {
							var o = n.ia;
							o &&
								(o = o[i]) &&
								null != (o = zr(o)) &&
								(s = n[i] = o);
						}
						(null != s && s(e, t, i)) ||
							((i = (s = e).l),
							Yn(s),
							s.ha
								? (s = void 0)
								: ((o = s.g.g - i),
								  (s.g.g = i),
								  (s = Wn(s.g, o))),
							(i = t),
							s &&
								((gt ||= Symbol()),
								(o = i[gt]) ? o.push(s) : (i[gt] = [s])));
					}
					return 16384 & r && nt(t), !0;
			  }),
		(t[Nr] = e)
	);
}
function zr(t) {
	const e = (t = jr(t))[0].g;
	if ((t = t[1])) {
		const n = Wr(t),
			r = Gr(Cr, Xr, Hr, t).W;
		return (t, i, s) => e(t, i, s, r, n);
	}
	return e;
}
function Kr(t, e, n) {
	t[e] = n.h;
}
function Yr(t, e, n, r) {
	let i, s;
	const o = n.h;
	t[e] = (t, e, n) => o(t, e, n, (s ||= Gr(Or, Kr, Yr, r).W), (i ||= $r(r)));
}
function $r(t) {
	let e = t[Ur];
	if (!e) {
		const n = Gr(Or, Kr, Yr, t);
		(e = (t, e) => qr(t, e, n)), (t[Ur] = e);
	}
	return e;
}
function qr(t, e, n) {
	for (
		var r = Q(t),
			i = +!!(512 & r) - 1,
			s = t.length,
			o = 512 & r ? 1 : 0,
			a = s + (256 & r ? -1 : 0);
		o < a;
		o++
	) {
		const r = t[o];
		if (null == r) continue;
		const s = o - i,
			a = Jr(n, s);
		a && a(e, r, s);
	}
	if (256 & r) {
		r = t[s - 1];
		for (const t in r)
			(i = +t),
				Number.isNaN(i) ||
					(null != (s = r[i]) && (a = Jr(n, i)) && a(e, s, i));
	}
	if ((t = gt ? t[gt] : void 0))
		for (pr(e, e.g.end()), n = 0; n < t.length; n++)
			pr(e, N(t[n]) || new Uint8Array(0));
}
function Jr(t, e) {
	var n = t[e];
	if (n) return n;
	if ((n = t.ia) && (n = n[e])) {
		var r = (n = jr(n))[0].h;
		if ((n = n[1])) {
			const e = $r(n),
				i = Gr(Or, Kr, Yr, n).W;
			n = t.na ? Br(i, e) : (t, n, s) => r(t, n, s, i, e);
		} else n = r;
		return (t[e] = n);
	}
}
function Zr(t, e) {
	if (Array.isArray(e)) {
		var n = Q(e);
		if (4 & n) return e;
		for (var r = 0, i = 0; r < e.length; r++) {
			const n = t(e[r]);
			null != n && (e[i++] = n);
		}
		return (
			i < r && (e.length = i),
			et(e, -12289 & (5 | n)),
			2 & n && Object.freeze(e),
			e
		);
	}
}
function Qr(t, e, n) {
	return new Rr(t, e, n);
}
function ti(t, e, n) {
	return new Rr(t, e, n);
}
function ei(t, e, n) {
	qe(t, tt(t), e, n);
}
var ni = Fr(
	function (t, e, n, r, i) {
		return (
			2 === t.h &&
			((t = $n(t, be([void 0, void 0], r, !0), i)),
			dt((r = tt(e))),
			(i = Ye(e, r, n)) instanceof Me
				? 0 != (2 & i.M)
					? ((i = i.Y()).push(t), qe(e, r, n, i))
					: i.Oa(t)
				: Array.isArray(i)
				? (2 & Q(i) && qe(e, r, n, (i = on(i))), i.push(t))
				: qe(e, r, n, [t]),
			!0)
		);
	},
	function (t, e, n, r, i) {
		if (e instanceof Me)
			e.forEach((e, s) => {
				vr(t, n, be([s, e], r, !1), i);
			});
		else if (Array.isArray(e))
			for (let s = 0; s < e.length; s++) {
				const o = e[s];
				Array.isArray(o) && vr(t, n, be(o, r, !1), i);
			}
	}
);
function ri(t, e, n) {
	if (
		((e = (function (t) {
			if (null == t) return t;
			const e = typeof t;
			if ('bigint' === e) return String(BigInt.asIntN(64, t));
			if (Kt(t)) {
				if ('string' === e) return Zt(t);
				if ('number' === e) return Jt(t);
			}
		})(e)),
		null != e)
	) {
		if ('string' == typeof e) ar(e);
		if (null != e)
			switch ((gr(t, n, 0), typeof e)) {
				case 'number':
					(t = t.g), Nt(e), ur(t, Pt, Ot);
					break;
				case 'bigint':
					(n = BigInt.asUintN(64, e)),
						(n = new cr(
							Number(n & BigInt(4294967295)),
							Number(n >> BigInt(32))
						)),
						ur(t.g, n.h, n.g);
					break;
				default:
					(n = ar(e)), ur(t.g, n.h, n.g);
			}
	}
}
function ii(t, e, n) {
	null != (e = Yt(e)) && null != e && (gr(t, n, 0), fr(t.g, e));
}
function si(t, e, n) {
	null != (e = Wt(e)) && (gr(t, n, 0), t.g.g.push(e ? 1 : 0));
}
function oi(t, e, n) {
	null != (e = re(e)) && _r(t, n, h(e));
}
function ai(t, e, n, r, i) {
	vr(t, n, Vr(e, r), i);
}
function ci(t, e, n) {
	null !=
		(e =
			null == e || 'string' == typeof e || M(e) || e instanceof U
				? e
				: void 0) && _r(t, n, On(e).buffer);
}
function hi(t, e, n) {
	return (
		(5 === t.h || 2 === t.h) &&
		((e = Je(e, tt(e), n, 2, !1)),
		2 == t.h ? Zn(t, Gn, e) : e.push(Gn(t.g)),
		!0)
	);
}
var ui = Qr(
		function (t, e, n) {
			if (1 !== t.h) return !1;
			var r = t.g;
			t = Bn(r);
			const i = Bn(r);
			r = 2 * (i >> 31) + 1;
			const s = (i >>> 20) & 2047;
			return (
				(t = 4294967296 * (1048575 & i) + t),
				ei(
					e,
					n,
					2047 == s
						? t
							? NaN
							: r * (1 / 0)
						: 0 == s
						? 5e-324 * r * t
						: r * Math.pow(2, s - 1075) * (t + 4503599627370496)
				),
				!0
			);
		},
		function (t, e, n) {
			null != (e = Ht(e)) &&
				(gr(t, n, 1),
				(t = t.g),
				(n = It ||= new DataView(new ArrayBuffer(8))).setFloat64(
					0,
					+e,
					!0
				),
				(Pt = n.getUint32(0, !0)),
				(Ot = n.getUint32(4, !0)),
				dr(t, Pt),
				dr(t, Ot));
		},
		Er()
	),
	li = Qr(
		function (t, e, n) {
			return 5 === t.h && (ei(e, n, Gn(t.g)), !0);
		},
		function (t, e, n) {
			null != (e = Ht(e)) && (gr(t, n, 5), (t = t.g), Ut(e), dr(t, Pt));
		},
		Sr
	),
	fi = ti(
		hi,
		function (t, e, n) {
			if (null != (e = Zr(Ht, e)))
				for (let o = 0; o < e.length; o++) {
					var r = t,
						i = n,
						s = e[o];
					null != s && (gr(r, i, 5), (r = r.g), Ut(s), dr(r, Pt));
				}
		},
		Sr
	),
	di = ti(
		hi,
		function (t, e, n) {
			if (null != (e = Zr(Ht, e)) && e.length) {
				gr(t, n, 2), lr(t.g, 4 * e.length);
				for (let r = 0; r < e.length; r++)
					(n = t.g), Ut(e[r]), dr(n, Pt);
			}
		},
		Sr
	),
	pi = Qr(
		function (t, e, n) {
			return 0 === t.h && (ei(e, n, Cn(t.g, Bt)), !0);
		},
		ri,
		kr
	),
	gi = Qr(
		function (t, e, n) {
			return (
				0 === t.h &&
				(ei(e, n, 0 === (t = Cn(t.g, Bt)) ? void 0 : t), !0)
			);
		},
		ri,
		kr
	),
	mi = Qr(
		function (t, e, n) {
			return 0 === t.h && (ei(e, n, Cn(t.g, Dt)), !0);
		},
		function (t, e, n) {
			if (null != (e = te(e))) {
				if ('string' == typeof e) ir(e);
				if (null != e)
					switch ((gr(t, n, 0), typeof e)) {
						case 'number':
							(t = t.g), Nt(e), ur(t, Pt, Ot);
							break;
						case 'bigint':
							(n = BigInt.asUintN(64, e)),
								(n = new sr(
									Number(n & BigInt(4294967295)),
									Number(n >> BigInt(32))
								)),
								ur(t.g, n.h, n.g);
							break;
						default:
							(n = ir(e)), ur(t.g, n.h, n.g);
					}
			}
		},
		Er()
	),
	yi = Qr(
		function (t, e, n) {
			return 0 === t.h && (ei(e, n, Un(t.g)), !0);
		},
		ii,
		Ar
	),
	_i = ti(
		function (t, e, n) {
			return (
				(0 === t.h || 2 === t.h) &&
				((e = Je(e, tt(e), n, 2, !1)),
				2 == t.h ? Zn(t, Un, e) : e.push(Un(t.g)),
				!0)
			);
		},
		function (t, e, n) {
			if (null != (e = Zr(Yt, e)) && e.length) {
				n = mr(t, n);
				for (let n = 0; n < e.length; n++) fr(t.g, e[n]);
				yr(t, n);
			}
		},
		Ar
	),
	vi = Qr(
		function (t, e, n) {
			return (
				0 === t.h && (ei(e, n, 0 === (t = Un(t.g)) ? void 0 : t), !0)
			);
		},
		ii,
		Ar
	),
	Ei = Qr(
		function (t, e, n) {
			return 0 === t.h && (ei(e, n, Nn(t.g)), !0);
		},
		si,
		Tr
	),
	wi = Qr(
		function (t, e, n) {
			return (
				0 === t.h && (ei(e, n, !1 === (t = Nn(t.g)) ? void 0 : t), !0)
			);
		},
		si,
		Tr
	),
	Ti = ti(
		function (t, e, n) {
			if (2 !== t.h) return !1;
			t = qn(t);
			const r = tt(e);
			return dt(r), Je(e, r, n, 2).push(t), !0;
		},
		function (t, e, n) {
			if (null != (e = Zr(re, e)))
				for (let o = 0; o < e.length; o++) {
					var r = t,
						i = n,
						s = e[o];
					null != s && _r(r, i, h(s));
				}
		},
		br
	),
	bi = Qr(
		function (t, e, n) {
			return 2 === t.h && (ei(e, n, '' === (t = qn(t)) ? void 0 : t), !0);
		},
		oi,
		br
	),
	Ai = Qr(
		function (t, e, n) {
			return 2 === t.h && (ei(e, n, qn(t)), !0);
		},
		oi,
		br
	),
	ki = (function (t, e, n = wr) {
		return new Rr(t, e, n);
	})(
		function (t, e, n, r, i) {
			if (2 !== t.h) return !1;
			r = be(void 0, r, !0);
			let s = tt(e);
			dt(s);
			let o = Je(e, s, n, 3);
			return (
				(s = tt(e)),
				4 & Q(o) &&
					((o = X(o)), et(o, -2079 & (1 | Q(o))), qe(e, s, n, o)),
				o.push(r),
				$n(t, r, i),
				!0
			);
		},
		function (t, e, n, r, i) {
			if (Array.isArray(e))
				for (let s = 0; s < e.length; s++) ai(t, e[s], n, r, i);
		}
	),
	Si = Fr(function (t, e, n, r, i, s) {
		return (
			2 === t.h && (un(e, Q(e), s, n), $n(t, (e = fn(e, r, n)), i), !0)
		);
	}, ai),
	xi = Qr(
		function (t, e, n) {
			return 2 === t.h && (ei(e, n, Jn(t)), !0);
		},
		ci,
		xr
	),
	Li = ti(
		function (t, e, n) {
			return (
				(0 === t.h || 2 === t.h) &&
				((e = Je(e, tt(e), n, 2, !1)),
				2 == t.h ? Zn(t, Dn, e) : e.push(Dn(t.g)),
				!0)
			);
		},
		function (t, e, n) {
			if (null != (e = Zr($t, e)))
				for (let o = 0; o < e.length; o++) {
					var r = t,
						i = n,
						s = e[o];
					null != s && (gr(r, i, 0), lr(r.g, s));
				}
		},
		Er()
	),
	Ri = Qr(
		function (t, e, n) {
			return 0 === t.h && (ei(e, n, Un(t.g)), !0);
		},
		function (t, e, n) {
			null != (e = Yt(e)) &&
				((e = parseInt(e, 10)), gr(t, n, 0), fr(t.g, e));
		},
		Lr
	);
class Fi {
	constructor(t, e) {
		(this.h = t),
			(this.g = e),
			(this.l = pn),
			(this.m = yn),
			(this.defaultValue = void 0);
	}
}
function Mi(t, e) {
	return new Fi(t, e);
}
function Ii(t, e) {
	return (n, r) => {
		if (Qn.length) {
			const t = Qn.pop();
			t.o(r), Vn(t.g, n, r), (n = t);
		} else
			n = new (class {
				constructor(t, e) {
					if (zn.length) {
						const n = zn.pop();
						Vn(n, t, e), (t = n);
					} else
						t = new (class {
							constructor(t, e) {
								(this.h = null),
									(this.m = !1),
									(this.g = this.l = this.j = 0),
									Vn(this, t, e);
							}
							clear() {
								(this.h = null),
									(this.m = !1),
									(this.g = this.l = this.j = 0),
									(this.ca = !1);
							}
						})(t, e);
					(this.g = t),
						(this.l = this.g.g),
						(this.h = this.m = -1),
						this.o(e);
				}
				o({ ha: t = !1 } = {}) {
					this.ha = t;
				}
			})(n, r);
		try {
			const r = new t(),
				s = r.u;
			Wr(e)(s, n);
			var i = r;
		} finally {
			n.g.clear(), (n.m = -1), (n.h = -1), Qn.length < 100 && Qn.push(n);
		}
		return i;
	};
}
function Pi(t) {
	return function () {
		we(this);
		const e = new (class {
			constructor() {
				(this.l = []),
					(this.h = 0),
					(this.g = new (class {
						constructor() {
							this.g = [];
						}
						length() {
							return this.g.length;
						}
						end() {
							const t = this.g;
							return (this.g = []), t;
						}
					})());
			}
		})();
		qr(this.u, e, Gr(Or, Kr, Yr, t)), pr(e, e.g.end());
		const n = new Uint8Array(e.h),
			r = e.l,
			i = r.length;
		let s = 0;
		for (let t = 0; t < i; t++) {
			const e = r[t];
			n.set(e, s), (s += e.length);
		}
		return (e.l = [n]), n;
	};
}
var Oi = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	Ci = [
		0,
		bi,
		Qr(
			function (t, e, n) {
				return (
					2 === t.h &&
					(ei(e, n, (t = Jn(t)) === C() ? void 0 : t), !0)
				);
			},
			function (t, e, n) {
				if (null != e) {
					if (e instanceof nr) {
						const r = e.Ra;
						return void (
							r &&
							((e = r(e)), null != e && _r(t, n, On(e).buffer))
						);
					}
					if (Array.isArray(e)) return;
				}
				ci(t, e, n);
			},
			xr
		),
	];
let Ni,
	Ui = globalThis.trustedTypes;
function Di(t) {
	void 0 === Ni &&
		(Ni = (function () {
			let t = null;
			if (!Ui) return t;
			try {
				const e = (t) => t;
				t = Ui.createPolicy('goog#html', {
					createHTML: e,
					createScript: e,
					createScriptURL: e,
				});
			} catch (t) {}
			return t;
		})());
	var e = Ni;
	return new (class {
		constructor(t) {
			this.g = t;
		}
		toString() {
			return this.g + '';
		}
	})(e ? e.createScriptURL(t) : t);
}
function Bi(t, ...e) {
	if (0 === e.length) return Di(t[0]);
	let n = t[0];
	for (let r = 0; r < e.length; r++) n += encodeURIComponent(e[r]) + t[r + 1];
	return Di(n);
}
var Gi = [0, yi, Ri, Ei, -1, _i, Ri, -1],
	ji = class extends nr {
		constructor() {
			super();
		}
	},
	Vi = [
		0,
		Ei,
		Ai,
		Ei,
		Ri,
		-1,
		ti(
			function (t, e, n) {
				return (
					(0 === t.h || 2 === t.h) &&
					((e = Je(e, tt(e), n, 2, !1)),
					2 == t.h ? Zn(t, jn, e) : e.push(Un(t.g)),
					!0)
				);
			},
			function (t, e, n) {
				if (null != (e = Zr(Yt, e)) && e.length) {
					n = mr(t, n);
					for (let n = 0; n < e.length; n++) fr(t.g, e[n]);
					yr(t, n);
				}
			},
			Lr
		),
		Ai,
		-1,
		[0, Ei, -1],
		Ri,
		Ei,
		-1,
	],
	Xi = [0, Ai, -2],
	Hi = class extends nr {
		constructor() {
			super();
		}
	},
	Wi = [0],
	zi = [0, yi, Ei, 1, Ei, -3],
	Ki = class extends nr {
		constructor(t) {
			super(t, 2);
		}
	},
	Yi = {};
Yi[336783863] = [
	0,
	Ai,
	Ei,
	-1,
	yi,
	[
		0,
		[1, 2, 3, 4, 5, 6, 7],
		Si,
		Wi,
		Si,
		Vi,
		Si,
		Xi,
		Si,
		zi,
		Si,
		Gi,
		Si,
		[0, Ai, -2],
		Si,
		[0, Ai, Ri],
	],
	[0, Ai],
	Ei,
	[0, [1, 3], [2, 4], Si, [0, _i], -1, Si, [0, Ti], -1, ki, [0, Ai, -1]],
	Ai,
];
var $i = [0, gi, -1, wi, -3, gi, _i, bi, vi, gi, -1, wi, vi, wi, -2, bi];
function qi(t, e) {
	an(t, 2, ne(e), '');
}
function Ji(t, e) {
	Fn(t, 3, e);
}
function Zi(t, e) {
	Fn(t, 4, e);
}
var Qi = class extends nr {
		constructor(t) {
			super(t, 500);
		}
		o(t) {
			return yn(this, 0, 7, t);
		}
	},
	ts = [-1, {}],
	es = [0, Ai, 1, ts],
	ns = [0, Ai, Ti, ts];
function rs(t, e) {
	wn(t, 1, Qi, e);
}
function is(t, e) {
	Fn(t, 10, e);
}
function ss(t, e) {
	Fn(t, 15, e);
}
var os = class extends nr {
		constructor(t) {
			super(t, 500);
		}
		o(t) {
			return yn(this, 0, 1001, t);
		}
	},
	as = [
		-500,
		ki,
		[
			-500,
			bi,
			-1,
			Ti,
			-3,
			[-2, Yi, Ei],
			ki,
			Ci,
			vi,
			-1,
			es,
			ns,
			ki,
			[0, bi, wi],
			bi,
			$i,
			vi,
			Ti,
			987,
			Ti,
		],
		4,
		ki,
		[-500, Ai, -1, [-1, {}], 998, Ai],
		ki,
		[-500, Ai, Ti, -1, [-2, {}, Ei], 997, Ti, -1],
		vi,
		ki,
		[-500, Ai, Ti, ts, 998, Ti],
		Ti,
		vi,
		es,
		ns,
		ki,
		[0, bi, -1, ts],
		Ti,
		-2,
		$i,
		bi,
		-1,
		wi,
		979,
		ts,
		ki,
		Ci,
	];
os.prototype.g = Pi(as);
var cs = Ii(os, as),
	hs = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	us = class extends nr {
		constructor(t) {
			super(t);
		}
		g() {
			return mn(this, hs, 1);
		}
	},
	ls = [0, ki, [0, yi, li, Ai, -1]],
	fs = Ii(us, ls),
	ds = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	ps = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	gs = class extends nr {
		constructor(t) {
			super(t);
		}
		h() {
			return pn(this, ds, 2);
		}
		g() {
			return mn(this, ps, 5);
		}
	},
	ms = Ii(
		class extends nr {
			constructor(t) {
				super(t);
			}
		},
		[
			0,
			Ti,
			_i,
			di,
			[
				0,
				Ri,
				[0, yi, -3],
				[0, li, -3],
				[0, yi, -1, [0, ki, [0, yi, -2]]],
				ki,
				[0, li, -1, Ai, li],
			],
			Ai,
			-1,
			pi,
			ki,
			[0, yi, li],
			Ti,
			pi,
		]
	),
	ys = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	_s = Ii(
		class extends nr {
			constructor(t) {
				super(t);
			}
		},
		[0, ki, [0, li, -4]]
	),
	vs = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	Es = Ii(
		class extends nr {
			constructor(t) {
				super(t);
			}
		},
		[0, ki, [0, li, -4]]
	),
	ws = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	Ts = [0, yi, -1, di, Ri],
	bs = class extends nr {
		constructor() {
			super();
		}
	};
bs.prototype.g = Pi([0, li, -4, pi]);
var As = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	ks = Ii(
		class extends nr {
			constructor(t) {
				super(t);
			}
		},
		[0, ki, [0, 1, yi, Ai, ls], pi]
	),
	Ss = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	xs = class extends nr {
		constructor(t) {
			super(t);
		}
		qa() {
			const t = Qe(this);
			return null == t ? C() : t;
		}
	},
	Ls = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	Rs = [1, 2],
	Fs = Ii(
		class extends nr {
			constructor(t) {
				super(t);
			}
		},
		[0, ki, [0, Rs, Si, [0, di], Si, [0, xi], yi, Ai], pi]
	),
	Ms = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	Is = [0, Ai, yi, li, Ti, -1],
	Ps = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	Os = [0, Ei, -1],
	Cs = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	Ns = [1, 2, 3, 4, 5],
	Us = class extends nr {
		constructor(t) {
			super(t);
		}
		g() {
			return null != Qe(this);
		}
		h() {
			return null != re(ze(this, 2));
		}
	},
	Ds = class extends nr {
		constructor(t) {
			super(t);
		}
		g() {
			return Wt(ze(this, 2)) ?? !1;
		}
	},
	Bs = [0, xi, Ai, [0, yi, pi, -1], [0, mi, pi]],
	Gs = [0, Bs, Ei, [0, Ns, Si, zi, Si, Vi, Si, Gi, Si, Wi, Si, Xi], Ri],
	js = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	Vs = [0, Gs, li, -1, yi],
	Xs = Mi(502141897, js);
Yi[502141897] = Vs;
var Hs = Ii(
		class extends nr {
			constructor(t) {
				super(t);
			}
		},
		[0, [0, Ri, -1, fi, Li], Ts]
	),
	Ws = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	zs = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	Ks = [0, Gs, li, [0, Gs], Ei],
	Ys = [0, Gs, Vs, Ks, li, [0, [0, Bs]]],
	$s = Mi(508968150, zs);
(Yi[508968150] = Ys), (Yi[508968149] = Ks);
var qs = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	Js = Mi(513916220, qs);
Yi[513916220] = [0, Gs, Ys, yi];
var Zs = class extends nr {
		constructor(t) {
			super(t);
		}
		h() {
			return pn(this, Ms, 2);
		}
		g() {
			$e(this, 2);
		}
	},
	Qs = [0, Gs, Is];
Yi[478825465] = Qs;
var to = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	eo = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	no = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	ro = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	io = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	so = [0, Gs, [0, Gs], Qs, -1],
	oo = [0, Gs, li, yi],
	ao = [0, Gs, li],
	co = [0, Gs, oo, ao, li],
	ho = Mi(479097054, io);
(Yi[479097054] = [0, Gs, co, so]), (Yi[463370452] = so), (Yi[464864288] = oo);
var uo = Mi(462713202, ro);
(Yi[462713202] = co), (Yi[474472470] = ao);
var lo = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	fo = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	po = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	go = class extends nr {
		constructor() {
			super();
		}
	},
	mo = [0, Gs, li, -1, yi],
	yo = [0, Gs, li, Ei];
go.prototype.g = Pi([0, Gs, ao, [0, Gs], Vs, Ks, mo, yo]);
var _o = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	vo = Mi(456383383, _o);
Yi[456383383] = [0, Gs, Is];
var Eo = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	wo = Mi(476348187, Eo);
Yi[476348187] = [0, Gs, Os];
var To = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	bo = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	Ao = [0, Ri, -1],
	ko = Mi(
		458105876,
		class extends nr {
			constructor(t) {
				super(t);
			}
			g() {
				var t = this.u;
				const e = tt(t);
				const n = 2 & e;
				return (
					(t = (function (t, e, n) {
						var r = bo;
						const i = 2 & e;
						let s = !1;
						if (null == n) {
							if (i) return Ne();
							n = [];
						} else if (n.constructor === Me) {
							if (0 == (2 & n.M) || i) return n;
							n = n.Y();
						} else Array.isArray(n) ? (s = !!(2 & Q(n))) : (n = []);
						if (i) {
							if (!n.length) return Ne();
							s || ((s = !0), nt(n));
						} else s && ((s = !1), (n = on(n)));
						return (
							s || (64 & Q(n) ? Z(n, 32) : 32 & e && J(n, 32)),
							qe(t, e, 2, (r = new Me(n, r, se, void 0))),
							r
						);
					})(t, e, Ye(t, e, 2))),
					!n && bo && (t.ta = !0),
					t
				);
			}
		}
	);
Yi[458105876] = [0, Ao, ni, [!0, pi, [0, Ai, -1, Ti]]];
var So = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	xo = Mi(458105758, So);
Yi[458105758] = [0, Gs, Ai, Ao];
var Lo = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	Ro = Mi(443442058, Lo);
(Yi[443442058] = [0, Gs, Ai, yi, li, Ti, -1]), (Yi[514774813] = mo);
var Fo = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	Mo = Mi(516587230, Fo);
function Io(t, e) {
	return (
		(e = e ? e.clone() : new Ms()),
		void 0 !== t.displayNamesLocale
			? $e(e, 1, ne(t.displayNamesLocale))
			: void 0 === t.displayNamesLocale && $e(e, 1),
		void 0 !== t.maxResults
			? xn(e, 2, t.maxResults)
			: 'maxResults' in t && $e(e, 2),
		void 0 !== t.scoreThreshold
			? Ln(e, 3, t.scoreThreshold)
			: 'scoreThreshold' in t && $e(e, 3),
		void 0 !== t.categoryAllowlist
			? Rn(e, 4, t.categoryAllowlist)
			: 'categoryAllowlist' in t && $e(e, 4),
		void 0 !== t.categoryDenylist
			? Rn(e, 5, t.categoryDenylist)
			: 'categoryDenylist' in t && $e(e, 5),
		e
	);
}
function Po(t, e = -1, n = '') {
	return {
		categories: t.map((t) => ({
			index: Tn(bn(t, 1), 0) ?? -1,
			score: An(t, 2) ?? 0,
			categoryName: kn(t, 3) ?? '',
			displayName: kn(t, 4) ?? '',
		})),
		headIndex: e,
		headName: n,
	};
}
function Oo(t) {
	var e = en(t, 3, Ht, tn()),
		n = en(t, 2, Yt, tn()),
		r = en(t, 1, re, tn()),
		i = en(t, 9, re, tn());
	const s = { categories: [], keypoints: [] };
	for (let t = 0; t < e.length; t++)
		s.categories.push({
			score: e[t],
			index: n[t] ?? -1,
			categoryName: r[t] ?? '',
			displayName: i[t] ?? '',
		});
	if (
		((e = pn(t, gs, 4)?.h()) &&
			(s.boundingBox = {
				originX: bn(e, 1) ?? 0,
				originY: bn(e, 2) ?? 0,
				width: bn(e, 3) ?? 0,
				height: bn(e, 4) ?? 0,
				angle: 0,
			}),
		pn(t, gs, 4)?.g().length)
	)
		for (const e of pn(t, gs, 4).g())
			s.keypoints.push({
				x: Ze(e, 1) ?? 0,
				y: Ze(e, 2) ?? 0,
				score: Ze(e, 4) ?? 0,
				label: re(ze(e, 3)) ?? '',
			});
	return s;
}
function Co(t) {
	const e = [];
	for (const n of mn(t, vs, 1))
		e.push({
			x: An(n, 1) ?? 0,
			y: An(n, 2) ?? 0,
			z: An(n, 3) ?? 0,
			visibility: An(n, 4) ?? 0,
		});
	return e;
}
function No(t) {
	const e = [];
	for (const n of mn(t, ys, 1))
		e.push({
			x: An(n, 1) ?? 0,
			y: An(n, 2) ?? 0,
			z: An(n, 3) ?? 0,
			visibility: An(n, 4) ?? 0,
		});
	return e;
}
function Uo(t) {
	return Array.from(t, (t) => (t > 127 ? t - 256 : t));
}
function Do(t, e) {
	if (t.length !== e.length)
		throw Error(
			`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`
		);
	let n = 0,
		r = 0,
		i = 0;
	for (let s = 0; s < t.length; s++)
		(n += t[s] * e[s]), (r += t[s] * t[s]), (i += e[s] * e[s]);
	if (r <= 0 || i <= 0)
		throw Error(
			'Cannot compute cosine similarity on embedding with 0 norm.'
		);
	return n / Math.sqrt(r * i);
}
let Bo;
(Yi[516587230] = [0, Gs, mo, yo, li]), (Yi[518928384] = yo);
const Go = new Uint8Array([
	0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1,
	8, 0, 65, 0, 253, 15, 253, 98, 11,
]);
async function jo() {
	if (void 0 === Bo)
		try {
			await WebAssembly.instantiate(Go), (Bo = !0);
		} catch {
			Bo = !1;
		}
	return Bo;
}
async function Vo(t, e = Bi``) {
	const n = (await jo()) ? 'wasm_internal' : 'wasm_nosimd_internal';
	return {
		wasmLoaderPath: `${e}/${t}_${n}.js`,
		wasmBinaryPath: `${e}/${t}_${n}.wasm`,
	};
}
var Xo = class {};
function Ho() {
	var t = navigator;
	return (
		'undefined' != typeof OffscreenCanvas &&
		(!(function (t = navigator) {
			return (
				(t = t.userAgent).includes('Safari') && !t.includes('Chrome')
			);
		})(t) ||
			!!(
				(t = t.userAgent.match(/Version\/([\d]+).*Safari/)) &&
				t.length >= 1 &&
				Number(t[1]) >= 17
			))
	);
}
async function Wo(t) {
	if ('function' != typeof importScripts) {
		const e = document.createElement('script');
		return (
			(e.src = t.toString()),
			(e.crossOrigin = 'anonymous'),
			new Promise((t, n) => {
				e.addEventListener(
					'load',
					() => {
						t();
					},
					!1
				),
					e.addEventListener(
						'error',
						(t) => {
							n(t);
						},
						!1
					),
					document.body.appendChild(e);
			})
		);
	}
	importScripts(t.toString());
}
function zo(t) {
	return void 0 !== t.videoWidth
		? [t.videoWidth, t.videoHeight]
		: void 0 !== t.naturalWidth
		? [t.naturalWidth, t.naturalHeight]
		: void 0 !== t.displayWidth
		? [t.displayWidth, t.displayHeight]
		: [t.width, t.height];
}
function Ko(t, e, n) {
	t.m ||
		console.error(
			'No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target'
		),
		n((e = t.i.stringToNewUTF8(e))),
		t.i._free(e);
}
function Yo(t, e, n) {
	if (!t.i.canvas) throw Error('No OpenGL canvas configured.');
	if (
		(n ? t.i._bindTextureToStream(n) : t.i._bindTextureToCanvas(),
		!(n =
			t.i.canvas.getContext('webgl2') || t.i.canvas.getContext('webgl')))
	)
		throw Error(
			'Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.'
		);
	t.i.gpuOriginForWebTexturesIsBottomLeft &&
		n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, !0),
		n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, e),
		t.i.gpuOriginForWebTexturesIsBottomLeft &&
			n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, !1);
	const [r, i] = zo(e);
	return (
		!t.l ||
			(r === t.i.canvas.width && i === t.i.canvas.height) ||
			((t.i.canvas.width = r), (t.i.canvas.height = i)),
		[r, i]
	);
}
function $o(t, e, n) {
	t.m ||
		console.error(
			'No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target'
		);
	const r = new Uint32Array(e.length);
	for (let n = 0; n < e.length; n++) r[n] = t.i.stringToNewUTF8(e[n]);
	(e = t.i._malloc(4 * r.length)), t.i.HEAPU32.set(r, e >> 2), n(e);
	for (const e of r) t.i._free(e);
	t.i._free(e);
}
function qo(t, e, n) {
	(t.i.simpleListeners = t.i.simpleListeners || {}),
		(t.i.simpleListeners[e] = n);
}
function Jo(t, e, n) {
	let r = [];
	(t.i.simpleListeners = t.i.simpleListeners || {}),
		(t.i.simpleListeners[e] = (t, e, i) => {
			e ? (n(r, i), (r = [])) : r.push(t);
		});
}
(Xo.forVisionTasks = function (t) {
	return Vo('vision', t);
}),
	(Xo.forTextTasks = function (t) {
		return Vo('text', t);
	}),
	(Xo.forGenAiExperimentalTasks = function (t) {
		return Vo('genai_experimental', t);
	}),
	(Xo.forGenAiTasks = function (t) {
		return Vo('genai', t);
	}),
	(Xo.forAudioTasks = function (t) {
		return Vo('audio', t);
	}),
	(Xo.isSimdSupported = function () {
		return jo();
	});
async function Zo(t, e, n, r) {
	return (
		(t = await (async (t, e, n, r, i) => {
			if ((e && (await Wo(e)), !self.ModuleFactory))
				throw Error('ModuleFactory not set.');
			if (n && (await Wo(n), !self.ModuleFactory))
				throw Error('ModuleFactory not set.');
			return (
				self.Module &&
					i &&
					(((e = self.Module).locateFile = i.locateFile),
					i.mainScriptUrlOrBlob &&
						(e.mainScriptUrlOrBlob = i.mainScriptUrlOrBlob)),
				(i = await self.ModuleFactory(self.Module || i)),
				(self.ModuleFactory = self.Module = void 0),
				new t(i, r)
			);
		})(t, n.wasmLoaderPath, n.assetLoaderPath, e, {
			locateFile: (t) =>
				t.endsWith('.wasm')
					? n.wasmBinaryPath.toString()
					: n.assetBinaryPath && t.endsWith('.data')
					? n.assetBinaryPath.toString()
					: t,
		})),
		await t.o(r),
		t
	);
}
function Qo(t, e) {
	const n = pn(t.baseOptions, Us, 1) || new Us();
	'string' == typeof e
		? ($e(n, 2, ne(e)), $e(n, 1))
		: e instanceof Uint8Array && ($e(n, 1, ut(e, !1, !1)), $e(n, 2)),
		yn(t.baseOptions, 0, 1, n);
}
function ta(t) {
	try {
		const e = t.H.length;
		if (1 === e) throw Error(t.H[0].message);
		if (e > 1)
			throw Error(
				'Encountered multiple errors: ' +
					t.H.map((t) => t.message).join(', ')
			);
	} finally {
		t.H = [];
	}
}
function ea(t, e) {
	t.B = Math.max(t.B, e);
}
function na(t, e) {
	(t.A = new Qi()),
		qi(t.A, 'PassThroughCalculator'),
		Ji(t.A, 'free_memory'),
		Zi(t.A, 'free_memory_unused_out'),
		is(e, 'free_memory'),
		rs(e, t.A);
}
function ra(t, e) {
	Ji(t.A, e), Zi(t.A, e + '_unused_out');
}
function ia(t) {
	t.g.addBoolToStream(!0, 'free_memory', t.B);
}
var sa = class {
	constructor(t) {
		(this.g = t),
			(this.H = []),
			(this.B = 0),
			this.g.setAutoRenderToScreen(!1);
	}
	l(t, e = !0) {
		if (e) {
			const e = t.baseOptions || {};
			if (
				t.baseOptions?.modelAssetBuffer &&
				t.baseOptions?.modelAssetPath
			)
				throw Error(
					'Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer'
				);
			if (
				!(
					pn(this.baseOptions, Us, 1)?.g() ||
					pn(this.baseOptions, Us, 1)?.h() ||
					t.baseOptions?.modelAssetBuffer ||
					t.baseOptions?.modelAssetPath
				)
			)
				throw Error(
					'Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set'
				);
			if (
				((function (t, e) {
					let n = pn(t.baseOptions, Cs, 3);
					if (!n) {
						var r = (n = new Cs()),
							i = new Hi();
						_n(r, 4, Ns, i);
					}
					'delegate' in e &&
						('GPU' === e.delegate
							? ((e = n), (r = new ji()), _n(e, 2, Ns, r))
							: ((e = n), (r = new Hi()), _n(e, 4, Ns, r))),
						yn(t.baseOptions, 0, 3, n);
				})(this, e),
				e.modelAssetPath)
			)
				return fetch(e.modelAssetPath.toString())
					.then((t) => {
						if (t.ok) return t.arrayBuffer();
						throw Error(
							`Failed to fetch model: ${e.modelAssetPath} (${t.status})`
						);
					})
					.then((t) => {
						try {
							this.g.i.FS_unlink('/model.dat');
						} catch {}
						this.g.i.FS_createDataFile(
							'/',
							'model.dat',
							new Uint8Array(t),
							!0,
							!1,
							!1
						),
							Qo(this, '/model.dat'),
							this.m(),
							this.J();
					});
			if (e.modelAssetBuffer instanceof Uint8Array)
				Qo(this, e.modelAssetBuffer);
			else if (e.modelAssetBuffer)
				return (async function (t) {
					const e = [];
					for (var n = 0; ; ) {
						const { done: r, value: i } = await t.read();
						if (r) break;
						e.push(i), (n += i.length);
					}
					if (0 === e.length) return new Uint8Array(0);
					if (1 === e.length) return e[0];
					(t = new Uint8Array(n)), (n = 0);
					for (const r of e) t.set(r, n), (n += r.length);
					return t;
				})(e.modelAssetBuffer).then((t) => {
					Qo(this, t), this.m(), this.J();
				});
		}
		return this.m(), this.J(), Promise.resolve();
	}
	J() {}
	ea() {
		let t;
		if (
			(this.g.ea((e) => {
				t = cs(e);
			}),
			!t)
		)
			throw Error('Failed to retrieve CalculatorGraphConfig');
		return t;
	}
	setGraph(t, e) {
		this.g.attachErrorListener((t, e) => {
			this.H.push(Error(e));
		}),
			this.g.Ma(),
			this.g.setGraph(t, e),
			(this.A = void 0),
			ta(this);
	}
	finishProcessing() {
		this.g.finishProcessing(), ta(this);
	}
	close() {
		(this.A = void 0), this.g.closeGraph();
	}
};
function oa(t, e) {
	if (!t) throw Error(`Unable to obtain required WebGL resource: ${e}`);
	return t;
}
(sa.prototype.close = sa.prototype.close),
	(function (e, n) {
		e = e.split('.');
		var r,
			i = t;
		e[0] in i || void 0 === i.execScript || i.execScript('var ' + e[0]);
		for (; e.length && (r = e.shift()); )
			e.length || void 0 === n
				? (i =
						i[r] && i[r] !== Object.prototype[r]
							? i[r]
							: (i[r] = {}))
				: (i[r] = n);
	})('TaskRunner', sa);
class aa {
	constructor(t, e, n, r) {
		(this.g = t), (this.h = e), (this.m = n), (this.l = r);
	}
	bind() {
		this.g.bindVertexArray(this.h);
	}
	close() {
		this.g.deleteVertexArray(this.h),
			this.g.deleteBuffer(this.m),
			this.g.deleteBuffer(this.l);
	}
}
function ca(t, e, n) {
	const r = t.g;
	if (
		((n = oa(r.createShader(n), 'Failed to create WebGL shader')),
		r.shaderSource(n, e),
		r.compileShader(n),
		!r.getShaderParameter(n, r.COMPILE_STATUS))
	)
		throw Error(`Could not compile WebGL shader: ${r.getShaderInfoLog(n)}`);
	return r.attachShader(t.h, n), n;
}
function ha(t, e) {
	const n = t.g,
		r = oa(n.createVertexArray(), 'Failed to create vertex array');
	n.bindVertexArray(r);
	const i = oa(n.createBuffer(), 'Failed to create buffer');
	n.bindBuffer(n.ARRAY_BUFFER, i),
		n.enableVertexAttribArray(t.P),
		n.vertexAttribPointer(t.P, 2, n.FLOAT, !1, 0, 0),
		n.bufferData(
			n.ARRAY_BUFFER,
			new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]),
			n.STATIC_DRAW
		);
	const s = oa(n.createBuffer(), 'Failed to create buffer');
	return (
		n.bindBuffer(n.ARRAY_BUFFER, s),
		n.enableVertexAttribArray(t.J),
		n.vertexAttribPointer(t.J, 2, n.FLOAT, !1, 0, 0),
		n.bufferData(
			n.ARRAY_BUFFER,
			new Float32Array(
				e ? [0, 1, 0, 0, 1, 0, 1, 1] : [0, 0, 0, 1, 1, 1, 1, 0]
			),
			n.STATIC_DRAW
		),
		n.bindBuffer(n.ARRAY_BUFFER, null),
		n.bindVertexArray(null),
		new aa(n, r, i, s)
	);
}
function ua(t, e) {
	if (t.g) {
		if (e !== t.g) throw Error('Cannot change GL context once initialized');
	} else t.g = e;
}
function la(t, e, n, r) {
	return (
		ua(t, e),
		t.h || (t.m(), t.C()),
		n
			? (t.s || (t.s = ha(t, !0)), (n = t.s))
			: (t.v || (t.v = ha(t, !1)), (n = t.v)),
		e.useProgram(t.h),
		n.bind(),
		t.l(),
		(t = r()),
		n.g.bindVertexArray(null),
		t
	);
}
function fa(t, e, n) {
	return (
		ua(t, e),
		(t = oa(e.createTexture(), 'Failed to create texture')),
		e.bindTexture(e.TEXTURE_2D, t),
		e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
		e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
		e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, n ?? e.LINEAR),
		e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, n ?? e.LINEAR),
		e.bindTexture(e.TEXTURE_2D, null),
		t
	);
}
function da(t, e, n) {
	ua(t, e),
		t.A ||
			(t.A = oa(e.createFramebuffer(), 'Failed to create framebuffe.')),
		e.bindFramebuffer(e.FRAMEBUFFER, t.A),
		e.framebufferTexture2D(
			e.FRAMEBUFFER,
			e.COLOR_ATTACHMENT0,
			e.TEXTURE_2D,
			n,
			0
		);
}
function pa(t) {
	t.g?.bindFramebuffer(t.g.FRAMEBUFFER, null);
}
var ga = class {
	H() {
		return '\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D inputTexture;\n  void main() {\n    gl_FragColor = texture2D(inputTexture, vTex);\n  }\n ';
	}
	m() {
		const t = this.g;
		if (
			((this.h = oa(t.createProgram(), 'Failed to create WebGL program')),
			(this.ba = ca(
				this,
				'\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }',
				t.VERTEX_SHADER
			)),
			(this.aa = ca(this, this.H(), t.FRAGMENT_SHADER)),
			t.linkProgram(this.h),
			!t.getProgramParameter(this.h, t.LINK_STATUS))
		)
			throw Error(
				`Error during program linking: ${t.getProgramInfoLog(this.h)}`
			);
		(this.P = t.getAttribLocation(this.h, 'aVertex')),
			(this.J = t.getAttribLocation(this.h, 'aTex'));
	}
	C() {}
	l() {}
	close() {
		if (this.h) {
			const t = this.g;
			t.deleteProgram(this.h),
				t.deleteShader(this.ba),
				t.deleteShader(this.aa);
		}
		this.A && this.g.deleteFramebuffer(this.A),
			this.v && this.v.close(),
			this.s && this.s.close();
	}
};
var ma = class extends ga {
		H() {
			return '\n  precision mediump float;\n  uniform sampler2D backgroundTexture;\n  uniform sampler2D maskTexture;\n  uniform sampler2D colorMappingTexture;\n  varying vec2 vTex;\n  void main() {\n    vec4 backgroundColor = texture2D(backgroundTexture, vTex);\n    float category = texture2D(maskTexture, vTex).r;\n    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));\n    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);\n  }\n ';
		}
		C() {
			const t = this.g;
			t.activeTexture(t.TEXTURE1),
				(this.B = fa(this, t, t.LINEAR)),
				t.activeTexture(t.TEXTURE2),
				(this.j = fa(this, t, t.NEAREST));
		}
		m() {
			super.m();
			const t = this.g;
			(this.L = oa(
				t.getUniformLocation(this.h, 'backgroundTexture'),
				'Uniform location'
			)),
				(this.U = oa(
					t.getUniformLocation(this.h, 'colorMappingTexture'),
					'Uniform location'
				)),
				(this.K = oa(
					t.getUniformLocation(this.h, 'maskTexture'),
					'Uniform location'
				));
		}
		l() {
			super.l();
			const t = this.g;
			t.uniform1i(this.K, 0),
				t.uniform1i(this.L, 1),
				t.uniform1i(this.U, 2);
		}
		close() {
			this.B && this.g.deleteTexture(this.B),
				this.j && this.g.deleteTexture(this.j),
				super.close();
		}
	},
	ya = class extends ga {
		H() {
			return '\n  precision mediump float;\n  uniform sampler2D maskTexture;\n  uniform sampler2D defaultTexture;\n  uniform sampler2D overlayTexture;\n  varying vec2 vTex;\n  void main() {\n    float confidence = texture2D(maskTexture, vTex).r;\n    vec4 defaultColor = texture2D(defaultTexture, vTex);\n    vec4 overlayColor = texture2D(overlayTexture, vTex);\n    // Apply the alpha from the overlay and merge in the default color\n    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);\n    gl_FragColor = mix(defaultColor, overlayColor, confidence);\n  }\n ';
		}
		C() {
			const t = this.g;
			t.activeTexture(t.TEXTURE1),
				(this.j = fa(this, t)),
				t.activeTexture(t.TEXTURE2),
				(this.B = fa(this, t));
		}
		m() {
			super.m();
			const t = this.g;
			(this.K = oa(
				t.getUniformLocation(this.h, 'defaultTexture'),
				'Uniform location'
			)),
				(this.L = oa(
					t.getUniformLocation(this.h, 'overlayTexture'),
					'Uniform location'
				)),
				(this.I = oa(
					t.getUniformLocation(this.h, 'maskTexture'),
					'Uniform location'
				));
		}
		l() {
			super.l();
			const t = this.g;
			t.uniform1i(this.I, 0),
				t.uniform1i(this.K, 1),
				t.uniform1i(this.L, 2);
		}
		close() {
			this.j && this.g.deleteTexture(this.j),
				this.B && this.g.deleteTexture(this.B),
				super.close();
		}
	};
function _a(t, e) {
	switch (e) {
		case 0:
			return t.g.find((t) => t instanceof Uint8Array);
		case 1:
			return t.g.find((t) => t instanceof Float32Array);
		case 2:
			return t.g.find(
				(t) =>
					'undefined' != typeof WebGLTexture &&
					t instanceof WebGLTexture
			);
		default:
			throw Error(`Type is not supported: ${e}`);
	}
}
function va(t) {
	var e = _a(t, 1);
	if (!e) {
		if ((e = _a(t, 0))) e = new Float32Array(e).map((t) => t / 255);
		else {
			e = new Float32Array(t.width * t.height);
			const r = wa(t);
			var n = ba(t);
			if (
				(da(n, r, Ea(t)),
				'iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod'
					.split(';')
					.includes(navigator.platform) ||
					(navigator.userAgent.includes('Mac') &&
						'document' in self &&
						'ontouchend' in self.document))
			) {
				(n = new Float32Array(t.width * t.height * 4)),
					r.readPixels(0, 0, t.width, t.height, r.RGBA, r.FLOAT, n);
				for (let t = 0, r = 0; t < e.length; ++t, r += 4) e[t] = n[r];
			} else r.readPixels(0, 0, t.width, t.height, r.RED, r.FLOAT, e);
		}
		t.g.push(e);
	}
	return e;
}
function Ea(t) {
	let e = _a(t, 2);
	if (!e) {
		const n = wa(t);
		e = Aa(t);
		const r = va(t),
			i = Ta(t);
		n.texImage2D(
			n.TEXTURE_2D,
			0,
			i,
			t.width,
			t.height,
			0,
			n.RED,
			n.FLOAT,
			r
		),
			ka(t);
	}
	return e;
}
function wa(t) {
	if (!t.canvas)
		throw Error(
			'Conversion to different image formats require that a canvas is passed when initializing the image.'
		);
	return (
		t.h ||
			(t.h = oa(
				t.canvas.getContext('webgl2'),
				'You cannot use a canvas that is already bound to a different type of rendering context.'
			)),
		t.h
	);
}
function Ta(t) {
	if (((t = wa(t)), !Sa))
		if (
			t.getExtension('EXT_color_buffer_float') &&
			t.getExtension('OES_texture_float_linear') &&
			t.getExtension('EXT_float_blend')
		)
			Sa = t.R32F;
		else {
			if (!t.getExtension('EXT_color_buffer_half_float'))
				throw Error(
					'GPU does not fully support 4-channel float32 or float16 formats'
				);
			Sa = t.R16F;
		}
	return Sa;
}
function ba(t) {
	return t.l || (t.l = new ga()), t.l;
}
function Aa(t) {
	const e = wa(t);
	e.viewport(0, 0, t.width, t.height), e.activeTexture(e.TEXTURE0);
	let n = _a(t, 2);
	return (
		n ||
			((n = fa(ba(t), e, t.m ? e.LINEAR : e.NEAREST)),
			t.g.push(n),
			(t.j = !0)),
		e.bindTexture(e.TEXTURE_2D, n),
		n
	);
}
function ka(t) {
	t.h.bindTexture(t.h.TEXTURE_2D, null);
}
var Sa,
	xa = class {
		constructor(t, e, n, r, i, s, o) {
			(this.g = t),
				(this.m = e),
				(this.j = n),
				(this.canvas = r),
				(this.l = i),
				(this.width = s),
				(this.height = o),
				this.j &&
					0 === --La &&
					console.error(
						'You seem to be creating MPMask instances without invoking .close(). This leaks resources.'
					);
		}
		Ha() {
			return !!_a(this, 0);
		}
		la() {
			return !!_a(this, 1);
		}
		R() {
			return !!_a(this, 2);
		}
		ka() {
			return (
				(e = _a((t = this), 0)) ||
					((e = va(t)),
					(e = new Uint8Array(e.map((t) => 255 * t))),
					t.g.push(e)),
				e
			);
			var t, e;
		}
		ja() {
			return va(this);
		}
		N() {
			return Ea(this);
		}
		clone() {
			const t = [];
			for (const e of this.g) {
				let n;
				if (e instanceof Uint8Array) n = new Uint8Array(e);
				else if (e instanceof Float32Array) n = new Float32Array(e);
				else {
					if (!(e instanceof WebGLTexture))
						throw Error(`Type is not supported: ${e}`);
					{
						const t = wa(this),
							e = ba(this);
						t.activeTexture(t.TEXTURE1),
							(n = fa(e, t, this.m ? t.LINEAR : t.NEAREST)),
							t.bindTexture(t.TEXTURE_2D, n);
						const r = Ta(this);
						t.texImage2D(
							t.TEXTURE_2D,
							0,
							r,
							this.width,
							this.height,
							0,
							t.RED,
							t.FLOAT,
							null
						),
							t.bindTexture(t.TEXTURE_2D, null),
							da(e, t, n),
							la(e, t, !1, () => {
								Aa(this),
									t.clearColor(0, 0, 0, 0),
									t.clear(t.COLOR_BUFFER_BIT),
									t.drawArrays(t.TRIANGLE_FAN, 0, 4),
									ka(this);
							}),
							pa(e),
							ka(this);
					}
				}
				t.push(n);
			}
			return new xa(
				t,
				this.m,
				this.R(),
				this.canvas,
				this.l,
				this.width,
				this.height
			);
		}
		close() {
			this.j && wa(this).deleteTexture(_a(this, 2)), (La = -1);
		}
	};
(xa.prototype.close = xa.prototype.close),
	(xa.prototype.clone = xa.prototype.clone),
	(xa.prototype.getAsWebGLTexture = xa.prototype.N),
	(xa.prototype.getAsFloat32Array = xa.prototype.ja),
	(xa.prototype.getAsUint8Array = xa.prototype.ka),
	(xa.prototype.hasWebGLTexture = xa.prototype.R),
	(xa.prototype.hasFloat32Array = xa.prototype.la),
	(xa.prototype.hasUint8Array = xa.prototype.Ha);
var La = 250;
const Ra = { color: 'white', lineWidth: 4, radius: 6 };
function Fa(t) {
	return { ...Ra, fillColor: (t = t || {}).color, ...t };
}
function Ma(t, e) {
	return t instanceof Function ? t(e) : t;
}
function Ia(t, e, n) {
	return Math.max(Math.min(e, n), Math.min(Math.max(e, n), t));
}
function Pa(t) {
	if (!t.l)
		throw Error(
			'CPU rendering requested but CanvasRenderingContext2D not provided.'
		);
	return t.l;
}
function Oa(t) {
	if (!t.j)
		throw Error(
			'GPU rendering requested but WebGL2RenderingContext not provided.'
		);
	return t.j;
}
function Ca(t, e, n) {
	if (e.R()) n(e.N());
	else {
		const r = e.la() ? e.ja() : e.ka();
		t.m = t.m ?? new ga();
		const i = Oa(t);
		n((t = new xa([r], e.m, !1, i.canvas, t.m, e.width, e.height)).N()),
			t.close();
	}
}
function Na(t, e, n, r) {
	const i = (function (t) {
			return t.g || (t.g = new ma()), t.g;
		})(t),
		s = Oa(t),
		o = Array.isArray(n)
			? new ImageData(new Uint8ClampedArray(n), 1, 1)
			: n;
	la(i, s, !0, () => {
		!(function (t, e, n, r) {
			const i = t.g;
			if (
				(i.activeTexture(i.TEXTURE0),
				i.bindTexture(i.TEXTURE_2D, e),
				i.activeTexture(i.TEXTURE1),
				i.bindTexture(i.TEXTURE_2D, t.B),
				i.texImage2D(
					i.TEXTURE_2D,
					0,
					i.RGBA,
					i.RGBA,
					i.UNSIGNED_BYTE,
					n
				),
				t.I &&
					(function (t, e) {
						if (t !== e) return !1;
						(t = t.entries()), (e = e.entries());
						for (const [r, i] of t) {
							t = r;
							const s = i;
							var n = e.next();
							if (n.done) return !1;
							const [o, a] = n.value;
							if (
								((n = a),
								t !== o ||
									s[0] !== n[0] ||
									s[1] !== n[1] ||
									s[2] !== n[2] ||
									s[3] !== n[3])
							)
								return !1;
						}
						return !!e.next().done;
					})(t.I, r))
			)
				i.activeTexture(i.TEXTURE2), i.bindTexture(i.TEXTURE_2D, t.j);
			else {
				t.I = r;
				const e = Array(1024).fill(0);
				r.forEach((t, n) => {
					if (4 !== t.length)
						throw Error(
							`Color at index ${n} is not a four-channel value.`
						);
					(e[4 * n] = t[0]),
						(e[4 * n + 1] = t[1]),
						(e[4 * n + 2] = t[2]),
						(e[4 * n + 3] = t[3]);
				}),
					i.activeTexture(i.TEXTURE2),
					i.bindTexture(i.TEXTURE_2D, t.j),
					i.texImage2D(
						i.TEXTURE_2D,
						0,
						i.RGBA,
						256,
						1,
						0,
						i.RGBA,
						i.UNSIGNED_BYTE,
						new Uint8Array(e)
					);
			}
		})(i, e, o, r),
			s.clearColor(0, 0, 0, 0),
			s.clear(s.COLOR_BUFFER_BIT),
			s.drawArrays(s.TRIANGLE_FAN, 0, 4);
		const t = i.g;
		t.activeTexture(t.TEXTURE0),
			t.bindTexture(t.TEXTURE_2D, null),
			t.activeTexture(t.TEXTURE1),
			t.bindTexture(t.TEXTURE_2D, null),
			t.activeTexture(t.TEXTURE2),
			t.bindTexture(t.TEXTURE_2D, null);
	});
}
function Ua(t, e, n, r) {
	const i = Oa(t),
		s = (function (t) {
			return t.h || (t.h = new ya()), t.h;
		})(t),
		o = Array.isArray(n)
			? new ImageData(new Uint8ClampedArray(n), 1, 1)
			: n,
		a = Array.isArray(r)
			? new ImageData(new Uint8ClampedArray(r), 1, 1)
			: r;
	la(s, i, !0, () => {
		var t = s.g;
		t.activeTexture(t.TEXTURE0),
			t.bindTexture(t.TEXTURE_2D, e),
			t.activeTexture(t.TEXTURE1),
			t.bindTexture(t.TEXTURE_2D, s.j),
			t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, o),
			t.activeTexture(t.TEXTURE2),
			t.bindTexture(t.TEXTURE_2D, s.B),
			t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, a),
			i.clearColor(0, 0, 0, 0),
			i.clear(i.COLOR_BUFFER_BIT),
			i.drawArrays(i.TRIANGLE_FAN, 0, 4),
			i.bindTexture(i.TEXTURE_2D, null),
			(t = s.g).activeTexture(t.TEXTURE0),
			t.bindTexture(t.TEXTURE_2D, null),
			t.activeTexture(t.TEXTURE1),
			t.bindTexture(t.TEXTURE_2D, null),
			t.activeTexture(t.TEXTURE2),
			t.bindTexture(t.TEXTURE_2D, null);
	});
}
var Da = class {
	constructor(t, e) {
		t instanceof CanvasRenderingContext2D ||
		t instanceof OffscreenCanvasRenderingContext2D
			? ((this.l = t), (this.j = e))
			: (this.j = t);
	}
	Aa(t, e) {
		if (t) {
			var n = Pa(this);
			(e = Fa(e)), n.save();
			var r = n.canvas,
				i = 0;
			for (const s of t)
				(n.fillStyle = Ma(e.fillColor, { index: i, from: s })),
					(n.strokeStyle = Ma(e.color, { index: i, from: s })),
					(n.lineWidth = Ma(e.lineWidth, { index: i, from: s })),
					(t = new Path2D()).arc(
						s.x * r.width,
						s.y * r.height,
						Ma(e.radius, { index: i, from: s }),
						0,
						2 * Math.PI
					),
					n.fill(t),
					n.stroke(t),
					++i;
			n.restore();
		}
	}
	za(t, e, n) {
		if (t && e) {
			var r = Pa(this);
			(n = Fa(n)), r.save();
			var i = r.canvas,
				s = 0;
			for (const o of e) {
				r.beginPath(), (e = t[o.start]);
				const a = t[o.end];
				e &&
					a &&
					((r.strokeStyle = Ma(n.color, {
						index: s,
						from: e,
						to: a,
					})),
					(r.lineWidth = Ma(n.lineWidth, {
						index: s,
						from: e,
						to: a,
					})),
					r.moveTo(e.x * i.width, e.y * i.height),
					r.lineTo(a.x * i.width, a.y * i.height)),
					++s,
					r.stroke();
			}
			r.restore();
		}
	}
	wa(t, e) {
		const n = Pa(this);
		(e = Fa(e)),
			n.save(),
			n.beginPath(),
			(n.lineWidth = Ma(e.lineWidth, {})),
			(n.strokeStyle = Ma(e.color, {})),
			(n.fillStyle = Ma(e.fillColor, {})),
			n.moveTo(t.originX, t.originY),
			n.lineTo(t.originX + t.width, t.originY),
			n.lineTo(t.originX + t.width, t.originY + t.height),
			n.lineTo(t.originX, t.originY + t.height),
			n.lineTo(t.originX, t.originY),
			n.stroke(),
			n.fill(),
			n.restore();
	}
	xa(t, e, n = [0, 0, 0, 255]) {
		this.l
			? (function (t, e, n, r) {
					const i = Oa(t);
					Ca(t, e, (e) => {
						Na(t, e, n, r),
							(e = Pa(t)).drawImage(
								i.canvas,
								0,
								0,
								e.canvas.width,
								e.canvas.height
							);
					});
			  })(this, t, n, e)
			: Na(this, t.N(), n, e);
	}
	ya(t, e, n) {
		this.l
			? (function (t, e, n, r) {
					const i = Oa(t);
					Ca(t, e, (e) => {
						Ua(t, e, n, r),
							(e = Pa(t)).drawImage(
								i.canvas,
								0,
								0,
								e.canvas.width,
								e.canvas.height
							);
					});
			  })(this, t, e, n)
			: Ua(this, t.N(), e, n);
	}
	close() {
		this.g?.close(),
			(this.g = void 0),
			this.h?.close(),
			(this.h = void 0),
			this.m?.close(),
			(this.m = void 0);
	}
};
function Ba(t, e) {
	switch (e) {
		case 0:
			return t.g.find((t) => t instanceof ImageData);
		case 1:
			return t.g.find(
				(t) =>
					'undefined' != typeof ImageBitmap &&
					t instanceof ImageBitmap
			);
		case 2:
			return t.g.find(
				(t) =>
					'undefined' != typeof WebGLTexture &&
					t instanceof WebGLTexture
			);
		default:
			throw Error(`Type is not supported: ${e}`);
	}
}
function Ga(t) {
	var e = Ba(t, 0);
	if (!e) {
		e = Va(t);
		const n = Xa(t),
			r = new Uint8Array(t.width * t.height * 4);
		da(n, e, ja(t)),
			e.readPixels(0, 0, t.width, t.height, e.RGBA, e.UNSIGNED_BYTE, r),
			pa(n),
			(e = new ImageData(
				new Uint8ClampedArray(r.buffer),
				t.width,
				t.height
			)),
			t.g.push(e);
	}
	return e;
}
function ja(t) {
	let e = Ba(t, 2);
	if (!e) {
		const n = Va(t);
		e = Ha(t);
		const r = Ba(t, 1) || Ga(t);
		n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, r),
			Wa(t);
	}
	return e;
}
function Va(t) {
	if (!t.canvas)
		throw Error(
			'Conversion to different image formats require that a canvas is passed when iniitializing the image.'
		);
	return (
		t.h ||
			(t.h = oa(
				t.canvas.getContext('webgl2'),
				'You cannot use a canvas that is already bound to a different type of rendering context.'
			)),
		t.h
	);
}
function Xa(t) {
	return t.l || (t.l = new ga()), t.l;
}
function Ha(t) {
	const e = Va(t);
	e.viewport(0, 0, t.width, t.height), e.activeTexture(e.TEXTURE0);
	let n = Ba(t, 2);
	return (
		n || ((n = fa(Xa(t), e)), t.g.push(n), (t.m = !0)),
		e.bindTexture(e.TEXTURE_2D, n),
		n
	);
}
function Wa(t) {
	t.h.bindTexture(t.h.TEXTURE_2D, null);
}
function za(t) {
	const e = Va(t);
	return la(Xa(t), e, !0, () =>
		(function (t, e) {
			const n = t.canvas;
			if (n.width === t.width && n.height === t.height) return e();
			const r = n.width,
				i = n.height;
			return (
				(n.width = t.width),
				(n.height = t.height),
				(t = e()),
				(n.width = r),
				(n.height = i),
				t
			);
		})(t, () => {
			if (
				(e.bindFramebuffer(e.FRAMEBUFFER, null),
				e.clearColor(0, 0, 0, 0),
				e.clear(e.COLOR_BUFFER_BIT),
				e.drawArrays(e.TRIANGLE_FAN, 0, 4),
				!(t.canvas instanceof OffscreenCanvas))
			)
				throw Error(
					'Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas'
				);
			return t.canvas.transferToImageBitmap();
		})
	);
}
(Da.prototype.close = Da.prototype.close),
	(Da.prototype.drawConfidenceMask = Da.prototype.ya),
	(Da.prototype.drawCategoryMask = Da.prototype.xa),
	(Da.prototype.drawBoundingBox = Da.prototype.wa),
	(Da.prototype.drawConnectors = Da.prototype.za),
	(Da.prototype.drawLandmarks = Da.prototype.Aa),
	(Da.lerp = function (t, e, n, r, i) {
		return Ia(
			r * (1 - (t - e) / (n - e)) + i * (1 - (n - t) / (n - e)),
			r,
			i
		);
	}),
	(Da.clamp = Ia);
var Ka = class {
	constructor(t, e, n, r, i, s, o) {
		(this.g = t),
			(this.j = e),
			(this.m = n),
			(this.canvas = r),
			(this.l = i),
			(this.width = s),
			(this.height = o),
			(this.j || this.m) &&
				0 === --Ya &&
				console.error(
					'You seem to be creating MPImage instances without invoking .close(). This leaks resources.'
				);
	}
	Ga() {
		return !!Ba(this, 0);
	}
	ma() {
		return !!Ba(this, 1);
	}
	R() {
		return !!Ba(this, 2);
	}
	Ea() {
		return Ga(this);
	}
	Da() {
		var t = Ba(this, 1);
		return (
			t ||
				(ja(this),
				Ha(this),
				(t = za(this)),
				Wa(this),
				this.g.push(t),
				(this.j = !0)),
			t
		);
	}
	N() {
		return ja(this);
	}
	clone() {
		const t = [];
		for (const e of this.g) {
			let n;
			if (e instanceof ImageData)
				n = new ImageData(e.data, this.width, this.height);
			else if (e instanceof WebGLTexture) {
				const t = Va(this),
					e = Xa(this);
				t.activeTexture(t.TEXTURE1),
					(n = fa(e, t)),
					t.bindTexture(t.TEXTURE_2D, n),
					t.texImage2D(
						t.TEXTURE_2D,
						0,
						t.RGBA,
						this.width,
						this.height,
						0,
						t.RGBA,
						t.UNSIGNED_BYTE,
						null
					),
					t.bindTexture(t.TEXTURE_2D, null),
					da(e, t, n),
					la(e, t, !1, () => {
						Ha(this),
							t.clearColor(0, 0, 0, 0),
							t.clear(t.COLOR_BUFFER_BIT),
							t.drawArrays(t.TRIANGLE_FAN, 0, 4),
							Wa(this);
					}),
					pa(e),
					Wa(this);
			} else {
				if (!(e instanceof ImageBitmap))
					throw Error(`Type is not supported: ${e}`);
				ja(this), Ha(this), (n = za(this)), Wa(this);
			}
			t.push(n);
		}
		return new Ka(
			t,
			this.ma(),
			this.R(),
			this.canvas,
			this.l,
			this.width,
			this.height
		);
	}
	close() {
		this.j && Ba(this, 1).close(),
			this.m && Va(this).deleteTexture(Ba(this, 2)),
			(Ya = -1);
	}
};
(Ka.prototype.close = Ka.prototype.close),
	(Ka.prototype.clone = Ka.prototype.clone),
	(Ka.prototype.getAsWebGLTexture = Ka.prototype.N),
	(Ka.prototype.getAsImageBitmap = Ka.prototype.Da),
	(Ka.prototype.getAsImageData = Ka.prototype.Ea),
	(Ka.prototype.hasWebGLTexture = Ka.prototype.R),
	(Ka.prototype.hasImageBitmap = Ka.prototype.ma),
	(Ka.prototype.hasImageData = Ka.prototype.Ga);
var Ya = 250;
function $a(...t) {
	return t.map(([t, e]) => ({ start: t, end: e }));
}
const qa = (function (t) {
	return class extends t {
		Ma() {
			this.i._registerModelResourcesGraphService();
		}
	};
})(
	((Ja = class {
		constructor(t, e) {
			(this.l = !0),
				(this.i = t),
				(this.g = null),
				(this.h = 0),
				(this.m = 'function' == typeof this.i._addIntToInputStream),
				void 0 !== e
					? (this.i.canvas = e)
					: Ho()
					? (this.i.canvas = new OffscreenCanvas(1, 1))
					: (console.warn(
							'OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas.'
					  ),
					  (this.i.canvas = document.createElement('canvas')));
		}
		async initializeGraph(t) {
			const e = await (await fetch(t)).arrayBuffer();
			(t = !(t.endsWith('.pbtxt') || t.endsWith('.textproto'))),
				this.setGraph(new Uint8Array(e), t);
		}
		setGraphFromString(t) {
			this.setGraph(new TextEncoder().encode(t), !1);
		}
		setGraph(t, e) {
			const n = t.length,
				r = this.i._malloc(n);
			this.i.HEAPU8.set(t, r),
				e
					? this.i._changeBinaryGraph(n, r)
					: this.i._changeTextGraph(n, r),
				this.i._free(r);
		}
		configureAudio(t, e, n, r, i) {
			this.i._configureAudio ||
				console.warn(
					'Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'
				),
				Ko(this, r || 'input_audio', (r) => {
					Ko(this, (i = i || 'audio_header'), (i) => {
						this.i._configureAudio(r, i, t, e ?? 0, n);
					});
				});
		}
		setAutoResizeCanvas(t) {
			this.l = t;
		}
		setAutoRenderToScreen(t) {
			this.i._setAutoRenderToScreen(t);
		}
		setGpuBufferVerticalFlip(t) {
			this.i.gpuOriginForWebTexturesIsBottomLeft = t;
		}
		ea(t) {
			qo(this, '__graph_config__', (e) => {
				t(e);
			}),
				Ko(this, '__graph_config__', (t) => {
					this.i._getGraphConfig(t, void 0);
				}),
				delete this.i.simpleListeners.__graph_config__;
		}
		attachErrorListener(t) {
			this.i.errorListener = t;
		}
		attachEmptyPacketListener(t, e) {
			(this.i.emptyPacketListeners = this.i.emptyPacketListeners || {}),
				(this.i.emptyPacketListeners[t] = e);
		}
		addAudioToStream(t, e, n) {
			this.addAudioToStreamWithShape(t, 0, 0, e, n);
		}
		addAudioToStreamWithShape(t, e, n, r, i) {
			const s = 4 * t.length;
			this.h !== s &&
				(this.g && this.i._free(this.g),
				(this.g = this.i._malloc(s)),
				(this.h = s)),
				this.i.HEAPF32.set(t, this.g / 4),
				Ko(this, r, (t) => {
					this.i._addAudioToInputStream(this.g, e, n, t, i);
				});
		}
		addGpuBufferToStream(t, e, n) {
			Ko(this, e, (e) => {
				const [r, i] = Yo(this, t, e);
				this.i._addBoundTextureToStream(e, r, i, n);
			});
		}
		addBoolToStream(t, e, n) {
			Ko(this, e, (e) => {
				this.i._addBoolToInputStream(t, e, n);
			});
		}
		addDoubleToStream(t, e, n) {
			Ko(this, e, (e) => {
				this.i._addDoubleToInputStream(t, e, n);
			});
		}
		addFloatToStream(t, e, n) {
			Ko(this, e, (e) => {
				this.i._addFloatToInputStream(t, e, n);
			});
		}
		addIntToStream(t, e, n) {
			Ko(this, e, (e) => {
				this.i._addIntToInputStream(t, e, n);
			});
		}
		addUintToStream(t, e, n) {
			Ko(this, e, (e) => {
				this.i._addUintToInputStream(t, e, n);
			});
		}
		addStringToStream(t, e, n) {
			Ko(this, e, (e) => {
				Ko(this, t, (t) => {
					this.i._addStringToInputStream(t, e, n);
				});
			});
		}
		addStringRecordToStream(t, e, n) {
			Ko(this, e, (e) => {
				$o(this, Object.keys(t), (r) => {
					$o(this, Object.values(t), (i) => {
						this.i._addFlatHashMapToInputStream(
							r,
							i,
							Object.keys(t).length,
							e,
							n
						);
					});
				});
			});
		}
		addProtoToStream(t, e, n, r) {
			Ko(this, n, (n) => {
				Ko(this, e, (e) => {
					const i = this.i._malloc(t.length);
					this.i.HEAPU8.set(t, i),
						this.i._addProtoToInputStream(i, t.length, e, n, r),
						this.i._free(i);
				});
			});
		}
		addEmptyPacketToStream(t, e) {
			Ko(this, t, (t) => {
				this.i._addEmptyPacketToInputStream(t, e);
			});
		}
		addBoolVectorToStream(t, e, n) {
			Ko(this, e, (e) => {
				const r = this.i._allocateBoolVector(t.length);
				if (!r)
					throw Error('Unable to allocate new bool vector on heap.');
				for (const e of t) this.i._addBoolVectorEntry(r, e);
				this.i._addBoolVectorToInputStream(r, e, n);
			});
		}
		addDoubleVectorToStream(t, e, n) {
			Ko(this, e, (e) => {
				const r = this.i._allocateDoubleVector(t.length);
				if (!r)
					throw Error(
						'Unable to allocate new double vector on heap.'
					);
				for (const e of t) this.i._addDoubleVectorEntry(r, e);
				this.i._addDoubleVectorToInputStream(r, e, n);
			});
		}
		addFloatVectorToStream(t, e, n) {
			Ko(this, e, (e) => {
				const r = this.i._allocateFloatVector(t.length);
				if (!r)
					throw Error('Unable to allocate new float vector on heap.');
				for (const e of t) this.i._addFloatVectorEntry(r, e);
				this.i._addFloatVectorToInputStream(r, e, n);
			});
		}
		addIntVectorToStream(t, e, n) {
			Ko(this, e, (e) => {
				const r = this.i._allocateIntVector(t.length);
				if (!r)
					throw Error('Unable to allocate new int vector on heap.');
				for (const e of t) this.i._addIntVectorEntry(r, e);
				this.i._addIntVectorToInputStream(r, e, n);
			});
		}
		addUintVectorToStream(t, e, n) {
			Ko(this, e, (e) => {
				const r = this.i._allocateUintVector(t.length);
				if (!r)
					throw Error(
						'Unable to allocate new unsigned int vector on heap.'
					);
				for (const e of t) this.i._addUintVectorEntry(r, e);
				this.i._addUintVectorToInputStream(r, e, n);
			});
		}
		addStringVectorToStream(t, e, n) {
			Ko(this, e, (e) => {
				const r = this.i._allocateStringVector(t.length);
				if (!r)
					throw Error(
						'Unable to allocate new string vector on heap.'
					);
				for (const e of t)
					Ko(this, e, (t) => {
						this.i._addStringVectorEntry(r, t);
					});
				this.i._addStringVectorToInputStream(r, e, n);
			});
		}
		addBoolToInputSidePacket(t, e) {
			Ko(this, e, (e) => {
				this.i._addBoolToInputSidePacket(t, e);
			});
		}
		addDoubleToInputSidePacket(t, e) {
			Ko(this, e, (e) => {
				this.i._addDoubleToInputSidePacket(t, e);
			});
		}
		addFloatToInputSidePacket(t, e) {
			Ko(this, e, (e) => {
				this.i._addFloatToInputSidePacket(t, e);
			});
		}
		addIntToInputSidePacket(t, e) {
			Ko(this, e, (e) => {
				this.i._addIntToInputSidePacket(t, e);
			});
		}
		addUintToInputSidePacket(t, e) {
			Ko(this, e, (e) => {
				this.i._addUintToInputSidePacket(t, e);
			});
		}
		addStringToInputSidePacket(t, e) {
			Ko(this, e, (e) => {
				Ko(this, t, (t) => {
					this.i._addStringToInputSidePacket(t, e);
				});
			});
		}
		addProtoToInputSidePacket(t, e, n) {
			Ko(this, n, (n) => {
				Ko(this, e, (e) => {
					const r = this.i._malloc(t.length);
					this.i.HEAPU8.set(t, r),
						this.i._addProtoToInputSidePacket(r, t.length, e, n),
						this.i._free(r);
				});
			});
		}
		addBoolVectorToInputSidePacket(t, e) {
			Ko(this, e, (e) => {
				const n = this.i._allocateBoolVector(t.length);
				if (!n)
					throw Error('Unable to allocate new bool vector on heap.');
				for (const e of t) this.i._addBoolVectorEntry(n, e);
				this.i._addBoolVectorToInputSidePacket(n, e);
			});
		}
		addDoubleVectorToInputSidePacket(t, e) {
			Ko(this, e, (e) => {
				const n = this.i._allocateDoubleVector(t.length);
				if (!n)
					throw Error(
						'Unable to allocate new double vector on heap.'
					);
				for (const e of t) this.i._addDoubleVectorEntry(n, e);
				this.i._addDoubleVectorToInputSidePacket(n, e);
			});
		}
		addFloatVectorToInputSidePacket(t, e) {
			Ko(this, e, (e) => {
				const n = this.i._allocateFloatVector(t.length);
				if (!n)
					throw Error('Unable to allocate new float vector on heap.');
				for (const e of t) this.i._addFloatVectorEntry(n, e);
				this.i._addFloatVectorToInputSidePacket(n, e);
			});
		}
		addIntVectorToInputSidePacket(t, e) {
			Ko(this, e, (e) => {
				const n = this.i._allocateIntVector(t.length);
				if (!n)
					throw Error('Unable to allocate new int vector on heap.');
				for (const e of t) this.i._addIntVectorEntry(n, e);
				this.i._addIntVectorToInputSidePacket(n, e);
			});
		}
		addUintVectorToInputSidePacket(t, e) {
			Ko(this, e, (e) => {
				const n = this.i._allocateUintVector(t.length);
				if (!n)
					throw Error(
						'Unable to allocate new unsigned int vector on heap.'
					);
				for (const e of t) this.i._addUintVectorEntry(n, e);
				this.i._addUintVectorToInputSidePacket(n, e);
			});
		}
		addStringVectorToInputSidePacket(t, e) {
			Ko(this, e, (e) => {
				const n = this.i._allocateStringVector(t.length);
				if (!n)
					throw Error(
						'Unable to allocate new string vector on heap.'
					);
				for (const e of t)
					Ko(this, e, (t) => {
						this.i._addStringVectorEntry(n, t);
					});
				this.i._addStringVectorToInputSidePacket(n, e);
			});
		}
		attachBoolListener(t, e) {
			qo(this, t, e),
				Ko(this, t, (t) => {
					this.i._attachBoolListener(t);
				});
		}
		attachBoolVectorListener(t, e) {
			Jo(this, t, e),
				Ko(this, t, (t) => {
					this.i._attachBoolVectorListener(t);
				});
		}
		attachIntListener(t, e) {
			qo(this, t, e),
				Ko(this, t, (t) => {
					this.i._attachIntListener(t);
				});
		}
		attachIntVectorListener(t, e) {
			Jo(this, t, e),
				Ko(this, t, (t) => {
					this.i._attachIntVectorListener(t);
				});
		}
		attachUintListener(t, e) {
			qo(this, t, e),
				Ko(this, t, (t) => {
					this.i._attachUintListener(t);
				});
		}
		attachUintVectorListener(t, e) {
			Jo(this, t, e),
				Ko(this, t, (t) => {
					this.i._attachUintVectorListener(t);
				});
		}
		attachDoubleListener(t, e) {
			qo(this, t, e),
				Ko(this, t, (t) => {
					this.i._attachDoubleListener(t);
				});
		}
		attachDoubleVectorListener(t, e) {
			Jo(this, t, e),
				Ko(this, t, (t) => {
					this.i._attachDoubleVectorListener(t);
				});
		}
		attachFloatListener(t, e) {
			qo(this, t, e),
				Ko(this, t, (t) => {
					this.i._attachFloatListener(t);
				});
		}
		attachFloatVectorListener(t, e) {
			Jo(this, t, e),
				Ko(this, t, (t) => {
					this.i._attachFloatVectorListener(t);
				});
		}
		attachStringListener(t, e) {
			qo(this, t, e),
				Ko(this, t, (t) => {
					this.i._attachStringListener(t);
				});
		}
		attachStringVectorListener(t, e) {
			Jo(this, t, e),
				Ko(this, t, (t) => {
					this.i._attachStringVectorListener(t);
				});
		}
		attachProtoListener(t, e, n) {
			qo(this, t, e),
				Ko(this, t, (t) => {
					this.i._attachProtoListener(t, n || !1);
				});
		}
		attachProtoVectorListener(t, e, n) {
			Jo(this, t, e),
				Ko(this, t, (t) => {
					this.i._attachProtoVectorListener(t, n || !1);
				});
		}
		attachAudioListener(t, e, n) {
			this.i._attachAudioListener ||
				console.warn(
					'Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'
				),
				qo(this, t, (t, n) => {
					(t = new Float32Array(
						t.buffer,
						t.byteOffset,
						t.length / 4
					)),
						e(t, n);
				}),
				Ko(this, t, (t) => {
					this.i._attachAudioListener(t, n || !1);
				});
		}
		finishProcessing() {
			this.i._waitUntilIdle();
		}
		closeGraph() {
			this.i._closeGraph(),
				(this.i.simpleListeners = void 0),
				(this.i.emptyPacketListeners = void 0);
		}
	}),
	class extends Ja {
		get ga() {
			return this.i;
		}
		sa(t, e, n) {
			Ko(this, e, (e) => {
				const [r, i] = Yo(this, t, e);
				this.ga._addBoundTextureAsImageToStream(e, r, i, n);
			});
		}
		V(t, e) {
			qo(this, t, e),
				Ko(this, t, (t) => {
					this.ga._attachImageListener(t);
				});
		}
		da(t, e) {
			Jo(this, t, e),
				Ko(this, t, (t) => {
					this.ga._attachImageVectorListener(t);
				});
		}
	})
);
var Ja,
	Za = class extends qa {};
async function Qa(t, e, n) {
	return (async function (t, e, n, r) {
		return Zo(t, e, n, r);
	})(t, n.canvas ?? (Ho() ? void 0 : document.createElement('canvas')), e, n);
}
function tc(t, e, n, r) {
	if (t.U) {
		const s = new bs();
		if (n?.regionOfInterest) {
			if (!t.ra)
				throw Error("This task doesn't support region-of-interest.");
			var i = n.regionOfInterest;
			if (i.left >= i.right || i.top >= i.bottom)
				throw Error(
					'Expected RectF with left < right and top < bottom.'
				);
			if (i.left < 0 || i.top < 0 || i.right > 1 || i.bottom > 1)
				throw Error('Expected RectF values to be in [0,1].');
			Ln(s, 1, (i.left + i.right) / 2),
				Ln(s, 2, (i.top + i.bottom) / 2),
				Ln(s, 4, i.right - i.left),
				Ln(s, 3, i.bottom - i.top);
		} else Ln(s, 1, 0.5), Ln(s, 2, 0.5), Ln(s, 4, 1), Ln(s, 3, 1);
		if (n?.rotationDegrees) {
			if (n?.rotationDegrees % 90 != 0)
				throw Error('Expected rotation to be a multiple of 90°.');
			if (
				(Ln(s, 5, (-Math.PI * n.rotationDegrees) / 180),
				n?.rotationDegrees % 180 != 0)
			) {
				const [t, r] = zo(e);
				(n = (An(s, 3) * r) / t),
					(i = (An(s, 4) * t) / r),
					Ln(s, 4, n),
					Ln(s, 3, i);
			}
		}
		t.g.addProtoToStream(s.g(), 'mediapipe.NormalizedRect', t.U, r);
	}
	t.g.sa(e, t.ba, r ?? performance.now()), t.finishProcessing();
}
function ec(t, e, n) {
	if (t.baseOptions?.g())
		throw Error(
			"Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'."
		);
	tc(t, e, n, t.B + 1);
}
function nc(t, e, n, r) {
	if (!t.baseOptions?.g())
		throw Error(
			"Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'."
		);
	tc(t, e, n, r);
}
function rc(t, e, n, r) {
	var i = e.data;
	const s = e.width,
		o = s * (e = e.height);
	if (
		(i instanceof Uint8Array || i instanceof Float32Array) &&
		i.length !== o
	)
		throw Error('Unsupported channel count: ' + i.length / o);
	return (t = new xa([i], n, !1, t.g.i.canvas, t.P, s, e)), r ? t.clone() : t;
}
var ic = class extends sa {
	constructor(t, e, n, r) {
		super(t),
			(this.g = t),
			(this.ba = e),
			(this.U = n),
			(this.ra = r),
			(this.P = new ga());
	}
	l(t, e = !0) {
		if (
			('runningMode' in t &&
				Sn(
					this.baseOptions,
					2,
					!!t.runningMode && 'IMAGE' !== t.runningMode
				),
			void 0 !== t.canvas && this.g.i.canvas !== t.canvas)
		)
			throw Error('You must create a new task to reset the canvas.');
		return super.l(t, e);
	}
	close() {
		this.P.close(), super.close();
	}
};
ic.prototype.close = ic.prototype.close;
var sc = class extends ic {
	constructor(t, e) {
		super(new Za(t, e), 'image_in', 'norm_rect_in', !1),
			(this.j = { detections: [] }),
			yn((t = this.h = new js()), 0, 1, (e = new Ds())),
			Ln(this.h, 2, 0.5),
			Ln(this.h, 3, 0.3);
	}
	get baseOptions() {
		return pn(this.h, Ds, 1);
	}
	set baseOptions(t) {
		yn(this.h, 0, 1, t);
	}
	o(t) {
		return (
			'minDetectionConfidence' in t &&
				Ln(this.h, 2, t.minDetectionConfidence ?? 0.5),
			'minSuppressionThreshold' in t &&
				Ln(this.h, 3, t.minSuppressionThreshold ?? 0.3),
			this.l(t)
		);
	}
	D(t, e) {
		return (this.j = { detections: [] }), ec(this, t, e), this.j;
	}
	F(t, e, n) {
		return (this.j = { detections: [] }), nc(this, t, n, e), this.j;
	}
	m() {
		var t = new os();
		is(t, 'image_in'), is(t, 'norm_rect_in'), ss(t, 'detections');
		const e = new Ki();
		er(e, Xs, this.h);
		const n = new Qi();
		qi(n, 'mediapipe.tasks.vision.face_detector.FaceDetectorGraph'),
			Ji(n, 'IMAGE:image_in'),
			Ji(n, 'NORM_RECT:norm_rect_in'),
			Zi(n, 'DETECTIONS:detections'),
			n.o(e),
			rs(t, n),
			this.g.attachProtoVectorListener('detections', (t, e) => {
				for (const e of t) (t = ms(e)), this.j.detections.push(Oo(t));
				ea(this, e);
			}),
			this.g.attachEmptyPacketListener('detections', (t) => {
				ea(this, t);
			}),
			(t = t.g()),
			this.setGraph(new Uint8Array(t), !0);
	}
};
(sc.prototype.detectForVideo = sc.prototype.F),
	(sc.prototype.detect = sc.prototype.D),
	(sc.prototype.setOptions = sc.prototype.o),
	(sc.createFromModelPath = async function (t, e) {
		return Qa(sc, t, { baseOptions: { modelAssetPath: e } });
	}),
	(sc.createFromModelBuffer = function (t, e) {
		return Qa(sc, t, { baseOptions: { modelAssetBuffer: e } });
	}),
	(sc.createFromOptions = function (t, e) {
		return Qa(sc, t, e);
	});
var oc = $a(
		[61, 146],
		[146, 91],
		[91, 181],
		[181, 84],
		[84, 17],
		[17, 314],
		[314, 405],
		[405, 321],
		[321, 375],
		[375, 291],
		[61, 185],
		[185, 40],
		[40, 39],
		[39, 37],
		[37, 0],
		[0, 267],
		[267, 269],
		[269, 270],
		[270, 409],
		[409, 291],
		[78, 95],
		[95, 88],
		[88, 178],
		[178, 87],
		[87, 14],
		[14, 317],
		[317, 402],
		[402, 318],
		[318, 324],
		[324, 308],
		[78, 191],
		[191, 80],
		[80, 81],
		[81, 82],
		[82, 13],
		[13, 312],
		[312, 311],
		[311, 310],
		[310, 415],
		[415, 308]
	),
	ac = $a(
		[263, 249],
		[249, 390],
		[390, 373],
		[373, 374],
		[374, 380],
		[380, 381],
		[381, 382],
		[382, 362],
		[263, 466],
		[466, 388],
		[388, 387],
		[387, 386],
		[386, 385],
		[385, 384],
		[384, 398],
		[398, 362]
	),
	cc = $a(
		[276, 283],
		[283, 282],
		[282, 295],
		[295, 285],
		[300, 293],
		[293, 334],
		[334, 296],
		[296, 336]
	),
	hc = $a([474, 475], [475, 476], [476, 477], [477, 474]),
	uc = $a(
		[33, 7],
		[7, 163],
		[163, 144],
		[144, 145],
		[145, 153],
		[153, 154],
		[154, 155],
		[155, 133],
		[33, 246],
		[246, 161],
		[161, 160],
		[160, 159],
		[159, 158],
		[158, 157],
		[157, 173],
		[173, 133]
	),
	lc = $a(
		[46, 53],
		[53, 52],
		[52, 65],
		[65, 55],
		[70, 63],
		[63, 105],
		[105, 66],
		[66, 107]
	),
	fc = $a([469, 470], [470, 471], [471, 472], [472, 469]),
	dc = $a(
		[10, 338],
		[338, 297],
		[297, 332],
		[332, 284],
		[284, 251],
		[251, 389],
		[389, 356],
		[356, 454],
		[454, 323],
		[323, 361],
		[361, 288],
		[288, 397],
		[397, 365],
		[365, 379],
		[379, 378],
		[378, 400],
		[400, 377],
		[377, 152],
		[152, 148],
		[148, 176],
		[176, 149],
		[149, 150],
		[150, 136],
		[136, 172],
		[172, 58],
		[58, 132],
		[132, 93],
		[93, 234],
		[234, 127],
		[127, 162],
		[162, 21],
		[21, 54],
		[54, 103],
		[103, 67],
		[67, 109],
		[109, 10]
	),
	pc = [...oc, ...ac, ...cc, ...uc, ...lc, ...dc],
	gc = $a(
		[127, 34],
		[34, 139],
		[139, 127],
		[11, 0],
		[0, 37],
		[37, 11],
		[232, 231],
		[231, 120],
		[120, 232],
		[72, 37],
		[37, 39],
		[39, 72],
		[128, 121],
		[121, 47],
		[47, 128],
		[232, 121],
		[121, 128],
		[128, 232],
		[104, 69],
		[69, 67],
		[67, 104],
		[175, 171],
		[171, 148],
		[148, 175],
		[118, 50],
		[50, 101],
		[101, 118],
		[73, 39],
		[39, 40],
		[40, 73],
		[9, 151],
		[151, 108],
		[108, 9],
		[48, 115],
		[115, 131],
		[131, 48],
		[194, 204],
		[204, 211],
		[211, 194],
		[74, 40],
		[40, 185],
		[185, 74],
		[80, 42],
		[42, 183],
		[183, 80],
		[40, 92],
		[92, 186],
		[186, 40],
		[230, 229],
		[229, 118],
		[118, 230],
		[202, 212],
		[212, 214],
		[214, 202],
		[83, 18],
		[18, 17],
		[17, 83],
		[76, 61],
		[61, 146],
		[146, 76],
		[160, 29],
		[29, 30],
		[30, 160],
		[56, 157],
		[157, 173],
		[173, 56],
		[106, 204],
		[204, 194],
		[194, 106],
		[135, 214],
		[214, 192],
		[192, 135],
		[203, 165],
		[165, 98],
		[98, 203],
		[21, 71],
		[71, 68],
		[68, 21],
		[51, 45],
		[45, 4],
		[4, 51],
		[144, 24],
		[24, 23],
		[23, 144],
		[77, 146],
		[146, 91],
		[91, 77],
		[205, 50],
		[50, 187],
		[187, 205],
		[201, 200],
		[200, 18],
		[18, 201],
		[91, 106],
		[106, 182],
		[182, 91],
		[90, 91],
		[91, 181],
		[181, 90],
		[85, 84],
		[84, 17],
		[17, 85],
		[206, 203],
		[203, 36],
		[36, 206],
		[148, 171],
		[171, 140],
		[140, 148],
		[92, 40],
		[40, 39],
		[39, 92],
		[193, 189],
		[189, 244],
		[244, 193],
		[159, 158],
		[158, 28],
		[28, 159],
		[247, 246],
		[246, 161],
		[161, 247],
		[236, 3],
		[3, 196],
		[196, 236],
		[54, 68],
		[68, 104],
		[104, 54],
		[193, 168],
		[168, 8],
		[8, 193],
		[117, 228],
		[228, 31],
		[31, 117],
		[189, 193],
		[193, 55],
		[55, 189],
		[98, 97],
		[97, 99],
		[99, 98],
		[126, 47],
		[47, 100],
		[100, 126],
		[166, 79],
		[79, 218],
		[218, 166],
		[155, 154],
		[154, 26],
		[26, 155],
		[209, 49],
		[49, 131],
		[131, 209],
		[135, 136],
		[136, 150],
		[150, 135],
		[47, 126],
		[126, 217],
		[217, 47],
		[223, 52],
		[52, 53],
		[53, 223],
		[45, 51],
		[51, 134],
		[134, 45],
		[211, 170],
		[170, 140],
		[140, 211],
		[67, 69],
		[69, 108],
		[108, 67],
		[43, 106],
		[106, 91],
		[91, 43],
		[230, 119],
		[119, 120],
		[120, 230],
		[226, 130],
		[130, 247],
		[247, 226],
		[63, 53],
		[53, 52],
		[52, 63],
		[238, 20],
		[20, 242],
		[242, 238],
		[46, 70],
		[70, 156],
		[156, 46],
		[78, 62],
		[62, 96],
		[96, 78],
		[46, 53],
		[53, 63],
		[63, 46],
		[143, 34],
		[34, 227],
		[227, 143],
		[123, 117],
		[117, 111],
		[111, 123],
		[44, 125],
		[125, 19],
		[19, 44],
		[236, 134],
		[134, 51],
		[51, 236],
		[216, 206],
		[206, 205],
		[205, 216],
		[154, 153],
		[153, 22],
		[22, 154],
		[39, 37],
		[37, 167],
		[167, 39],
		[200, 201],
		[201, 208],
		[208, 200],
		[36, 142],
		[142, 100],
		[100, 36],
		[57, 212],
		[212, 202],
		[202, 57],
		[20, 60],
		[60, 99],
		[99, 20],
		[28, 158],
		[158, 157],
		[157, 28],
		[35, 226],
		[226, 113],
		[113, 35],
		[160, 159],
		[159, 27],
		[27, 160],
		[204, 202],
		[202, 210],
		[210, 204],
		[113, 225],
		[225, 46],
		[46, 113],
		[43, 202],
		[202, 204],
		[204, 43],
		[62, 76],
		[76, 77],
		[77, 62],
		[137, 123],
		[123, 116],
		[116, 137],
		[41, 38],
		[38, 72],
		[72, 41],
		[203, 129],
		[129, 142],
		[142, 203],
		[64, 98],
		[98, 240],
		[240, 64],
		[49, 102],
		[102, 64],
		[64, 49],
		[41, 73],
		[73, 74],
		[74, 41],
		[212, 216],
		[216, 207],
		[207, 212],
		[42, 74],
		[74, 184],
		[184, 42],
		[169, 170],
		[170, 211],
		[211, 169],
		[170, 149],
		[149, 176],
		[176, 170],
		[105, 66],
		[66, 69],
		[69, 105],
		[122, 6],
		[6, 168],
		[168, 122],
		[123, 147],
		[147, 187],
		[187, 123],
		[96, 77],
		[77, 90],
		[90, 96],
		[65, 55],
		[55, 107],
		[107, 65],
		[89, 90],
		[90, 180],
		[180, 89],
		[101, 100],
		[100, 120],
		[120, 101],
		[63, 105],
		[105, 104],
		[104, 63],
		[93, 137],
		[137, 227],
		[227, 93],
		[15, 86],
		[86, 85],
		[85, 15],
		[129, 102],
		[102, 49],
		[49, 129],
		[14, 87],
		[87, 86],
		[86, 14],
		[55, 8],
		[8, 9],
		[9, 55],
		[100, 47],
		[47, 121],
		[121, 100],
		[145, 23],
		[23, 22],
		[22, 145],
		[88, 89],
		[89, 179],
		[179, 88],
		[6, 122],
		[122, 196],
		[196, 6],
		[88, 95],
		[95, 96],
		[96, 88],
		[138, 172],
		[172, 136],
		[136, 138],
		[215, 58],
		[58, 172],
		[172, 215],
		[115, 48],
		[48, 219],
		[219, 115],
		[42, 80],
		[80, 81],
		[81, 42],
		[195, 3],
		[3, 51],
		[51, 195],
		[43, 146],
		[146, 61],
		[61, 43],
		[171, 175],
		[175, 199],
		[199, 171],
		[81, 82],
		[82, 38],
		[38, 81],
		[53, 46],
		[46, 225],
		[225, 53],
		[144, 163],
		[163, 110],
		[110, 144],
		[52, 65],
		[65, 66],
		[66, 52],
		[229, 228],
		[228, 117],
		[117, 229],
		[34, 127],
		[127, 234],
		[234, 34],
		[107, 108],
		[108, 69],
		[69, 107],
		[109, 108],
		[108, 151],
		[151, 109],
		[48, 64],
		[64, 235],
		[235, 48],
		[62, 78],
		[78, 191],
		[191, 62],
		[129, 209],
		[209, 126],
		[126, 129],
		[111, 35],
		[35, 143],
		[143, 111],
		[117, 123],
		[123, 50],
		[50, 117],
		[222, 65],
		[65, 52],
		[52, 222],
		[19, 125],
		[125, 141],
		[141, 19],
		[221, 55],
		[55, 65],
		[65, 221],
		[3, 195],
		[195, 197],
		[197, 3],
		[25, 7],
		[7, 33],
		[33, 25],
		[220, 237],
		[237, 44],
		[44, 220],
		[70, 71],
		[71, 139],
		[139, 70],
		[122, 193],
		[193, 245],
		[245, 122],
		[247, 130],
		[130, 33],
		[33, 247],
		[71, 21],
		[21, 162],
		[162, 71],
		[170, 169],
		[169, 150],
		[150, 170],
		[188, 174],
		[174, 196],
		[196, 188],
		[216, 186],
		[186, 92],
		[92, 216],
		[2, 97],
		[97, 167],
		[167, 2],
		[141, 125],
		[125, 241],
		[241, 141],
		[164, 167],
		[167, 37],
		[37, 164],
		[72, 38],
		[38, 12],
		[12, 72],
		[38, 82],
		[82, 13],
		[13, 38],
		[63, 68],
		[68, 71],
		[71, 63],
		[226, 35],
		[35, 111],
		[111, 226],
		[101, 50],
		[50, 205],
		[205, 101],
		[206, 92],
		[92, 165],
		[165, 206],
		[209, 198],
		[198, 217],
		[217, 209],
		[165, 167],
		[167, 97],
		[97, 165],
		[220, 115],
		[115, 218],
		[218, 220],
		[133, 112],
		[112, 243],
		[243, 133],
		[239, 238],
		[238, 241],
		[241, 239],
		[214, 135],
		[135, 169],
		[169, 214],
		[190, 173],
		[173, 133],
		[133, 190],
		[171, 208],
		[208, 32],
		[32, 171],
		[125, 44],
		[44, 237],
		[237, 125],
		[86, 87],
		[87, 178],
		[178, 86],
		[85, 86],
		[86, 179],
		[179, 85],
		[84, 85],
		[85, 180],
		[180, 84],
		[83, 84],
		[84, 181],
		[181, 83],
		[201, 83],
		[83, 182],
		[182, 201],
		[137, 93],
		[93, 132],
		[132, 137],
		[76, 62],
		[62, 183],
		[183, 76],
		[61, 76],
		[76, 184],
		[184, 61],
		[57, 61],
		[61, 185],
		[185, 57],
		[212, 57],
		[57, 186],
		[186, 212],
		[214, 207],
		[207, 187],
		[187, 214],
		[34, 143],
		[143, 156],
		[156, 34],
		[79, 239],
		[239, 237],
		[237, 79],
		[123, 137],
		[137, 177],
		[177, 123],
		[44, 1],
		[1, 4],
		[4, 44],
		[201, 194],
		[194, 32],
		[32, 201],
		[64, 102],
		[102, 129],
		[129, 64],
		[213, 215],
		[215, 138],
		[138, 213],
		[59, 166],
		[166, 219],
		[219, 59],
		[242, 99],
		[99, 97],
		[97, 242],
		[2, 94],
		[94, 141],
		[141, 2],
		[75, 59],
		[59, 235],
		[235, 75],
		[24, 110],
		[110, 228],
		[228, 24],
		[25, 130],
		[130, 226],
		[226, 25],
		[23, 24],
		[24, 229],
		[229, 23],
		[22, 23],
		[23, 230],
		[230, 22],
		[26, 22],
		[22, 231],
		[231, 26],
		[112, 26],
		[26, 232],
		[232, 112],
		[189, 190],
		[190, 243],
		[243, 189],
		[221, 56],
		[56, 190],
		[190, 221],
		[28, 56],
		[56, 221],
		[221, 28],
		[27, 28],
		[28, 222],
		[222, 27],
		[29, 27],
		[27, 223],
		[223, 29],
		[30, 29],
		[29, 224],
		[224, 30],
		[247, 30],
		[30, 225],
		[225, 247],
		[238, 79],
		[79, 20],
		[20, 238],
		[166, 59],
		[59, 75],
		[75, 166],
		[60, 75],
		[75, 240],
		[240, 60],
		[147, 177],
		[177, 215],
		[215, 147],
		[20, 79],
		[79, 166],
		[166, 20],
		[187, 147],
		[147, 213],
		[213, 187],
		[112, 233],
		[233, 244],
		[244, 112],
		[233, 128],
		[128, 245],
		[245, 233],
		[128, 114],
		[114, 188],
		[188, 128],
		[114, 217],
		[217, 174],
		[174, 114],
		[131, 115],
		[115, 220],
		[220, 131],
		[217, 198],
		[198, 236],
		[236, 217],
		[198, 131],
		[131, 134],
		[134, 198],
		[177, 132],
		[132, 58],
		[58, 177],
		[143, 35],
		[35, 124],
		[124, 143],
		[110, 163],
		[163, 7],
		[7, 110],
		[228, 110],
		[110, 25],
		[25, 228],
		[356, 389],
		[389, 368],
		[368, 356],
		[11, 302],
		[302, 267],
		[267, 11],
		[452, 350],
		[350, 349],
		[349, 452],
		[302, 303],
		[303, 269],
		[269, 302],
		[357, 343],
		[343, 277],
		[277, 357],
		[452, 453],
		[453, 357],
		[357, 452],
		[333, 332],
		[332, 297],
		[297, 333],
		[175, 152],
		[152, 377],
		[377, 175],
		[347, 348],
		[348, 330],
		[330, 347],
		[303, 304],
		[304, 270],
		[270, 303],
		[9, 336],
		[336, 337],
		[337, 9],
		[278, 279],
		[279, 360],
		[360, 278],
		[418, 262],
		[262, 431],
		[431, 418],
		[304, 408],
		[408, 409],
		[409, 304],
		[310, 415],
		[415, 407],
		[407, 310],
		[270, 409],
		[409, 410],
		[410, 270],
		[450, 348],
		[348, 347],
		[347, 450],
		[422, 430],
		[430, 434],
		[434, 422],
		[313, 314],
		[314, 17],
		[17, 313],
		[306, 307],
		[307, 375],
		[375, 306],
		[387, 388],
		[388, 260],
		[260, 387],
		[286, 414],
		[414, 398],
		[398, 286],
		[335, 406],
		[406, 418],
		[418, 335],
		[364, 367],
		[367, 416],
		[416, 364],
		[423, 358],
		[358, 327],
		[327, 423],
		[251, 284],
		[284, 298],
		[298, 251],
		[281, 5],
		[5, 4],
		[4, 281],
		[373, 374],
		[374, 253],
		[253, 373],
		[307, 320],
		[320, 321],
		[321, 307],
		[425, 427],
		[427, 411],
		[411, 425],
		[421, 313],
		[313, 18],
		[18, 421],
		[321, 405],
		[405, 406],
		[406, 321],
		[320, 404],
		[404, 405],
		[405, 320],
		[315, 16],
		[16, 17],
		[17, 315],
		[426, 425],
		[425, 266],
		[266, 426],
		[377, 400],
		[400, 369],
		[369, 377],
		[322, 391],
		[391, 269],
		[269, 322],
		[417, 465],
		[465, 464],
		[464, 417],
		[386, 257],
		[257, 258],
		[258, 386],
		[466, 260],
		[260, 388],
		[388, 466],
		[456, 399],
		[399, 419],
		[419, 456],
		[284, 332],
		[332, 333],
		[333, 284],
		[417, 285],
		[285, 8],
		[8, 417],
		[346, 340],
		[340, 261],
		[261, 346],
		[413, 441],
		[441, 285],
		[285, 413],
		[327, 460],
		[460, 328],
		[328, 327],
		[355, 371],
		[371, 329],
		[329, 355],
		[392, 439],
		[439, 438],
		[438, 392],
		[382, 341],
		[341, 256],
		[256, 382],
		[429, 420],
		[420, 360],
		[360, 429],
		[364, 394],
		[394, 379],
		[379, 364],
		[277, 343],
		[343, 437],
		[437, 277],
		[443, 444],
		[444, 283],
		[283, 443],
		[275, 440],
		[440, 363],
		[363, 275],
		[431, 262],
		[262, 369],
		[369, 431],
		[297, 338],
		[338, 337],
		[337, 297],
		[273, 375],
		[375, 321],
		[321, 273],
		[450, 451],
		[451, 349],
		[349, 450],
		[446, 342],
		[342, 467],
		[467, 446],
		[293, 334],
		[334, 282],
		[282, 293],
		[458, 461],
		[461, 462],
		[462, 458],
		[276, 353],
		[353, 383],
		[383, 276],
		[308, 324],
		[324, 325],
		[325, 308],
		[276, 300],
		[300, 293],
		[293, 276],
		[372, 345],
		[345, 447],
		[447, 372],
		[352, 345],
		[345, 340],
		[340, 352],
		[274, 1],
		[1, 19],
		[19, 274],
		[456, 248],
		[248, 281],
		[281, 456],
		[436, 427],
		[427, 425],
		[425, 436],
		[381, 256],
		[256, 252],
		[252, 381],
		[269, 391],
		[391, 393],
		[393, 269],
		[200, 199],
		[199, 428],
		[428, 200],
		[266, 330],
		[330, 329],
		[329, 266],
		[287, 273],
		[273, 422],
		[422, 287],
		[250, 462],
		[462, 328],
		[328, 250],
		[258, 286],
		[286, 384],
		[384, 258],
		[265, 353],
		[353, 342],
		[342, 265],
		[387, 259],
		[259, 257],
		[257, 387],
		[424, 431],
		[431, 430],
		[430, 424],
		[342, 353],
		[353, 276],
		[276, 342],
		[273, 335],
		[335, 424],
		[424, 273],
		[292, 325],
		[325, 307],
		[307, 292],
		[366, 447],
		[447, 345],
		[345, 366],
		[271, 303],
		[303, 302],
		[302, 271],
		[423, 266],
		[266, 371],
		[371, 423],
		[294, 455],
		[455, 460],
		[460, 294],
		[279, 278],
		[278, 294],
		[294, 279],
		[271, 272],
		[272, 304],
		[304, 271],
		[432, 434],
		[434, 427],
		[427, 432],
		[272, 407],
		[407, 408],
		[408, 272],
		[394, 430],
		[430, 431],
		[431, 394],
		[395, 369],
		[369, 400],
		[400, 395],
		[334, 333],
		[333, 299],
		[299, 334],
		[351, 417],
		[417, 168],
		[168, 351],
		[352, 280],
		[280, 411],
		[411, 352],
		[325, 319],
		[319, 320],
		[320, 325],
		[295, 296],
		[296, 336],
		[336, 295],
		[319, 403],
		[403, 404],
		[404, 319],
		[330, 348],
		[348, 349],
		[349, 330],
		[293, 298],
		[298, 333],
		[333, 293],
		[323, 454],
		[454, 447],
		[447, 323],
		[15, 16],
		[16, 315],
		[315, 15],
		[358, 429],
		[429, 279],
		[279, 358],
		[14, 15],
		[15, 316],
		[316, 14],
		[285, 336],
		[336, 9],
		[9, 285],
		[329, 349],
		[349, 350],
		[350, 329],
		[374, 380],
		[380, 252],
		[252, 374],
		[318, 402],
		[402, 403],
		[403, 318],
		[6, 197],
		[197, 419],
		[419, 6],
		[318, 319],
		[319, 325],
		[325, 318],
		[367, 364],
		[364, 365],
		[365, 367],
		[435, 367],
		[367, 397],
		[397, 435],
		[344, 438],
		[438, 439],
		[439, 344],
		[272, 271],
		[271, 311],
		[311, 272],
		[195, 5],
		[5, 281],
		[281, 195],
		[273, 287],
		[287, 291],
		[291, 273],
		[396, 428],
		[428, 199],
		[199, 396],
		[311, 271],
		[271, 268],
		[268, 311],
		[283, 444],
		[444, 445],
		[445, 283],
		[373, 254],
		[254, 339],
		[339, 373],
		[282, 334],
		[334, 296],
		[296, 282],
		[449, 347],
		[347, 346],
		[346, 449],
		[264, 447],
		[447, 454],
		[454, 264],
		[336, 296],
		[296, 299],
		[299, 336],
		[338, 10],
		[10, 151],
		[151, 338],
		[278, 439],
		[439, 455],
		[455, 278],
		[292, 407],
		[407, 415],
		[415, 292],
		[358, 371],
		[371, 355],
		[355, 358],
		[340, 345],
		[345, 372],
		[372, 340],
		[346, 347],
		[347, 280],
		[280, 346],
		[442, 443],
		[443, 282],
		[282, 442],
		[19, 94],
		[94, 370],
		[370, 19],
		[441, 442],
		[442, 295],
		[295, 441],
		[248, 419],
		[419, 197],
		[197, 248],
		[263, 255],
		[255, 359],
		[359, 263],
		[440, 275],
		[275, 274],
		[274, 440],
		[300, 383],
		[383, 368],
		[368, 300],
		[351, 412],
		[412, 465],
		[465, 351],
		[263, 467],
		[467, 466],
		[466, 263],
		[301, 368],
		[368, 389],
		[389, 301],
		[395, 378],
		[378, 379],
		[379, 395],
		[412, 351],
		[351, 419],
		[419, 412],
		[436, 426],
		[426, 322],
		[322, 436],
		[2, 164],
		[164, 393],
		[393, 2],
		[370, 462],
		[462, 461],
		[461, 370],
		[164, 0],
		[0, 267],
		[267, 164],
		[302, 11],
		[11, 12],
		[12, 302],
		[268, 12],
		[12, 13],
		[13, 268],
		[293, 300],
		[300, 301],
		[301, 293],
		[446, 261],
		[261, 340],
		[340, 446],
		[330, 266],
		[266, 425],
		[425, 330],
		[426, 423],
		[423, 391],
		[391, 426],
		[429, 355],
		[355, 437],
		[437, 429],
		[391, 327],
		[327, 326],
		[326, 391],
		[440, 457],
		[457, 438],
		[438, 440],
		[341, 382],
		[382, 362],
		[362, 341],
		[459, 457],
		[457, 461],
		[461, 459],
		[434, 430],
		[430, 394],
		[394, 434],
		[414, 463],
		[463, 362],
		[362, 414],
		[396, 369],
		[369, 262],
		[262, 396],
		[354, 461],
		[461, 457],
		[457, 354],
		[316, 403],
		[403, 402],
		[402, 316],
		[315, 404],
		[404, 403],
		[403, 315],
		[314, 405],
		[405, 404],
		[404, 314],
		[313, 406],
		[406, 405],
		[405, 313],
		[421, 418],
		[418, 406],
		[406, 421],
		[366, 401],
		[401, 361],
		[361, 366],
		[306, 408],
		[408, 407],
		[407, 306],
		[291, 409],
		[409, 408],
		[408, 291],
		[287, 410],
		[410, 409],
		[409, 287],
		[432, 436],
		[436, 410],
		[410, 432],
		[434, 416],
		[416, 411],
		[411, 434],
		[264, 368],
		[368, 383],
		[383, 264],
		[309, 438],
		[438, 457],
		[457, 309],
		[352, 376],
		[376, 401],
		[401, 352],
		[274, 275],
		[275, 4],
		[4, 274],
		[421, 428],
		[428, 262],
		[262, 421],
		[294, 327],
		[327, 358],
		[358, 294],
		[433, 416],
		[416, 367],
		[367, 433],
		[289, 455],
		[455, 439],
		[439, 289],
		[462, 370],
		[370, 326],
		[326, 462],
		[2, 326],
		[326, 370],
		[370, 2],
		[305, 460],
		[460, 455],
		[455, 305],
		[254, 449],
		[449, 448],
		[448, 254],
		[255, 261],
		[261, 446],
		[446, 255],
		[253, 450],
		[450, 449],
		[449, 253],
		[252, 451],
		[451, 450],
		[450, 252],
		[256, 452],
		[452, 451],
		[451, 256],
		[341, 453],
		[453, 452],
		[452, 341],
		[413, 464],
		[464, 463],
		[463, 413],
		[441, 413],
		[413, 414],
		[414, 441],
		[258, 442],
		[442, 441],
		[441, 258],
		[257, 443],
		[443, 442],
		[442, 257],
		[259, 444],
		[444, 443],
		[443, 259],
		[260, 445],
		[445, 444],
		[444, 260],
		[467, 342],
		[342, 445],
		[445, 467],
		[459, 458],
		[458, 250],
		[250, 459],
		[289, 392],
		[392, 290],
		[290, 289],
		[290, 328],
		[328, 460],
		[460, 290],
		[376, 433],
		[433, 435],
		[435, 376],
		[250, 290],
		[290, 392],
		[392, 250],
		[411, 416],
		[416, 433],
		[433, 411],
		[341, 463],
		[463, 464],
		[464, 341],
		[453, 464],
		[464, 465],
		[465, 453],
		[357, 465],
		[465, 412],
		[412, 357],
		[343, 412],
		[412, 399],
		[399, 343],
		[360, 363],
		[363, 440],
		[440, 360],
		[437, 399],
		[399, 456],
		[456, 437],
		[420, 456],
		[456, 363],
		[363, 420],
		[401, 435],
		[435, 288],
		[288, 401],
		[372, 383],
		[383, 353],
		[353, 372],
		[339, 255],
		[255, 249],
		[249, 339],
		[448, 261],
		[261, 255],
		[255, 448],
		[133, 243],
		[243, 190],
		[190, 133],
		[133, 155],
		[155, 112],
		[112, 133],
		[33, 246],
		[246, 247],
		[247, 33],
		[33, 130],
		[130, 25],
		[25, 33],
		[398, 384],
		[384, 286],
		[286, 398],
		[362, 398],
		[398, 414],
		[414, 362],
		[362, 463],
		[463, 341],
		[341, 362],
		[263, 359],
		[359, 467],
		[467, 263],
		[263, 249],
		[249, 255],
		[255, 263],
		[466, 467],
		[467, 260],
		[260, 466],
		[75, 60],
		[60, 166],
		[166, 75],
		[238, 239],
		[239, 79],
		[79, 238],
		[162, 127],
		[127, 139],
		[139, 162],
		[72, 11],
		[11, 37],
		[37, 72],
		[121, 232],
		[232, 120],
		[120, 121],
		[73, 72],
		[72, 39],
		[39, 73],
		[114, 128],
		[128, 47],
		[47, 114],
		[233, 232],
		[232, 128],
		[128, 233],
		[103, 104],
		[104, 67],
		[67, 103],
		[152, 175],
		[175, 148],
		[148, 152],
		[119, 118],
		[118, 101],
		[101, 119],
		[74, 73],
		[73, 40],
		[40, 74],
		[107, 9],
		[9, 108],
		[108, 107],
		[49, 48],
		[48, 131],
		[131, 49],
		[32, 194],
		[194, 211],
		[211, 32],
		[184, 74],
		[74, 185],
		[185, 184],
		[191, 80],
		[80, 183],
		[183, 191],
		[185, 40],
		[40, 186],
		[186, 185],
		[119, 230],
		[230, 118],
		[118, 119],
		[210, 202],
		[202, 214],
		[214, 210],
		[84, 83],
		[83, 17],
		[17, 84],
		[77, 76],
		[76, 146],
		[146, 77],
		[161, 160],
		[160, 30],
		[30, 161],
		[190, 56],
		[56, 173],
		[173, 190],
		[182, 106],
		[106, 194],
		[194, 182],
		[138, 135],
		[135, 192],
		[192, 138],
		[129, 203],
		[203, 98],
		[98, 129],
		[54, 21],
		[21, 68],
		[68, 54],
		[5, 51],
		[51, 4],
		[4, 5],
		[145, 144],
		[144, 23],
		[23, 145],
		[90, 77],
		[77, 91],
		[91, 90],
		[207, 205],
		[205, 187],
		[187, 207],
		[83, 201],
		[201, 18],
		[18, 83],
		[181, 91],
		[91, 182],
		[182, 181],
		[180, 90],
		[90, 181],
		[181, 180],
		[16, 85],
		[85, 17],
		[17, 16],
		[205, 206],
		[206, 36],
		[36, 205],
		[176, 148],
		[148, 140],
		[140, 176],
		[165, 92],
		[92, 39],
		[39, 165],
		[245, 193],
		[193, 244],
		[244, 245],
		[27, 159],
		[159, 28],
		[28, 27],
		[30, 247],
		[247, 161],
		[161, 30],
		[174, 236],
		[236, 196],
		[196, 174],
		[103, 54],
		[54, 104],
		[104, 103],
		[55, 193],
		[193, 8],
		[8, 55],
		[111, 117],
		[117, 31],
		[31, 111],
		[221, 189],
		[189, 55],
		[55, 221],
		[240, 98],
		[98, 99],
		[99, 240],
		[142, 126],
		[126, 100],
		[100, 142],
		[219, 166],
		[166, 218],
		[218, 219],
		[112, 155],
		[155, 26],
		[26, 112],
		[198, 209],
		[209, 131],
		[131, 198],
		[169, 135],
		[135, 150],
		[150, 169],
		[114, 47],
		[47, 217],
		[217, 114],
		[224, 223],
		[223, 53],
		[53, 224],
		[220, 45],
		[45, 134],
		[134, 220],
		[32, 211],
		[211, 140],
		[140, 32],
		[109, 67],
		[67, 108],
		[108, 109],
		[146, 43],
		[43, 91],
		[91, 146],
		[231, 230],
		[230, 120],
		[120, 231],
		[113, 226],
		[226, 247],
		[247, 113],
		[105, 63],
		[63, 52],
		[52, 105],
		[241, 238],
		[238, 242],
		[242, 241],
		[124, 46],
		[46, 156],
		[156, 124],
		[95, 78],
		[78, 96],
		[96, 95],
		[70, 46],
		[46, 63],
		[63, 70],
		[116, 143],
		[143, 227],
		[227, 116],
		[116, 123],
		[123, 111],
		[111, 116],
		[1, 44],
		[44, 19],
		[19, 1],
		[3, 236],
		[236, 51],
		[51, 3],
		[207, 216],
		[216, 205],
		[205, 207],
		[26, 154],
		[154, 22],
		[22, 26],
		[165, 39],
		[39, 167],
		[167, 165],
		[199, 200],
		[200, 208],
		[208, 199],
		[101, 36],
		[36, 100],
		[100, 101],
		[43, 57],
		[57, 202],
		[202, 43],
		[242, 20],
		[20, 99],
		[99, 242],
		[56, 28],
		[28, 157],
		[157, 56],
		[124, 35],
		[35, 113],
		[113, 124],
		[29, 160],
		[160, 27],
		[27, 29],
		[211, 204],
		[204, 210],
		[210, 211],
		[124, 113],
		[113, 46],
		[46, 124],
		[106, 43],
		[43, 204],
		[204, 106],
		[96, 62],
		[62, 77],
		[77, 96],
		[227, 137],
		[137, 116],
		[116, 227],
		[73, 41],
		[41, 72],
		[72, 73],
		[36, 203],
		[203, 142],
		[142, 36],
		[235, 64],
		[64, 240],
		[240, 235],
		[48, 49],
		[49, 64],
		[64, 48],
		[42, 41],
		[41, 74],
		[74, 42],
		[214, 212],
		[212, 207],
		[207, 214],
		[183, 42],
		[42, 184],
		[184, 183],
		[210, 169],
		[169, 211],
		[211, 210],
		[140, 170],
		[170, 176],
		[176, 140],
		[104, 105],
		[105, 69],
		[69, 104],
		[193, 122],
		[122, 168],
		[168, 193],
		[50, 123],
		[123, 187],
		[187, 50],
		[89, 96],
		[96, 90],
		[90, 89],
		[66, 65],
		[65, 107],
		[107, 66],
		[179, 89],
		[89, 180],
		[180, 179],
		[119, 101],
		[101, 120],
		[120, 119],
		[68, 63],
		[63, 104],
		[104, 68],
		[234, 93],
		[93, 227],
		[227, 234],
		[16, 15],
		[15, 85],
		[85, 16],
		[209, 129],
		[129, 49],
		[49, 209],
		[15, 14],
		[14, 86],
		[86, 15],
		[107, 55],
		[55, 9],
		[9, 107],
		[120, 100],
		[100, 121],
		[121, 120],
		[153, 145],
		[145, 22],
		[22, 153],
		[178, 88],
		[88, 179],
		[179, 178],
		[197, 6],
		[6, 196],
		[196, 197],
		[89, 88],
		[88, 96],
		[96, 89],
		[135, 138],
		[138, 136],
		[136, 135],
		[138, 215],
		[215, 172],
		[172, 138],
		[218, 115],
		[115, 219],
		[219, 218],
		[41, 42],
		[42, 81],
		[81, 41],
		[5, 195],
		[195, 51],
		[51, 5],
		[57, 43],
		[43, 61],
		[61, 57],
		[208, 171],
		[171, 199],
		[199, 208],
		[41, 81],
		[81, 38],
		[38, 41],
		[224, 53],
		[53, 225],
		[225, 224],
		[24, 144],
		[144, 110],
		[110, 24],
		[105, 52],
		[52, 66],
		[66, 105],
		[118, 229],
		[229, 117],
		[117, 118],
		[227, 34],
		[34, 234],
		[234, 227],
		[66, 107],
		[107, 69],
		[69, 66],
		[10, 109],
		[109, 151],
		[151, 10],
		[219, 48],
		[48, 235],
		[235, 219],
		[183, 62],
		[62, 191],
		[191, 183],
		[142, 129],
		[129, 126],
		[126, 142],
		[116, 111],
		[111, 143],
		[143, 116],
		[118, 117],
		[117, 50],
		[50, 118],
		[223, 222],
		[222, 52],
		[52, 223],
		[94, 19],
		[19, 141],
		[141, 94],
		[222, 221],
		[221, 65],
		[65, 222],
		[196, 3],
		[3, 197],
		[197, 196],
		[45, 220],
		[220, 44],
		[44, 45],
		[156, 70],
		[70, 139],
		[139, 156],
		[188, 122],
		[122, 245],
		[245, 188],
		[139, 71],
		[71, 162],
		[162, 139],
		[149, 170],
		[170, 150],
		[150, 149],
		[122, 188],
		[188, 196],
		[196, 122],
		[206, 216],
		[216, 92],
		[92, 206],
		[164, 2],
		[2, 167],
		[167, 164],
		[242, 141],
		[141, 241],
		[241, 242],
		[0, 164],
		[164, 37],
		[37, 0],
		[11, 72],
		[72, 12],
		[12, 11],
		[12, 38],
		[38, 13],
		[13, 12],
		[70, 63],
		[63, 71],
		[71, 70],
		[31, 226],
		[226, 111],
		[111, 31],
		[36, 101],
		[101, 205],
		[205, 36],
		[203, 206],
		[206, 165],
		[165, 203],
		[126, 209],
		[209, 217],
		[217, 126],
		[98, 165],
		[165, 97],
		[97, 98],
		[237, 220],
		[220, 218],
		[218, 237],
		[237, 239],
		[239, 241],
		[241, 237],
		[210, 214],
		[214, 169],
		[169, 210],
		[140, 171],
		[171, 32],
		[32, 140],
		[241, 125],
		[125, 237],
		[237, 241],
		[179, 86],
		[86, 178],
		[178, 179],
		[180, 85],
		[85, 179],
		[179, 180],
		[181, 84],
		[84, 180],
		[180, 181],
		[182, 83],
		[83, 181],
		[181, 182],
		[194, 201],
		[201, 182],
		[182, 194],
		[177, 137],
		[137, 132],
		[132, 177],
		[184, 76],
		[76, 183],
		[183, 184],
		[185, 61],
		[61, 184],
		[184, 185],
		[186, 57],
		[57, 185],
		[185, 186],
		[216, 212],
		[212, 186],
		[186, 216],
		[192, 214],
		[214, 187],
		[187, 192],
		[139, 34],
		[34, 156],
		[156, 139],
		[218, 79],
		[79, 237],
		[237, 218],
		[147, 123],
		[123, 177],
		[177, 147],
		[45, 44],
		[44, 4],
		[4, 45],
		[208, 201],
		[201, 32],
		[32, 208],
		[98, 64],
		[64, 129],
		[129, 98],
		[192, 213],
		[213, 138],
		[138, 192],
		[235, 59],
		[59, 219],
		[219, 235],
		[141, 242],
		[242, 97],
		[97, 141],
		[97, 2],
		[2, 141],
		[141, 97],
		[240, 75],
		[75, 235],
		[235, 240],
		[229, 24],
		[24, 228],
		[228, 229],
		[31, 25],
		[25, 226],
		[226, 31],
		[230, 23],
		[23, 229],
		[229, 230],
		[231, 22],
		[22, 230],
		[230, 231],
		[232, 26],
		[26, 231],
		[231, 232],
		[233, 112],
		[112, 232],
		[232, 233],
		[244, 189],
		[189, 243],
		[243, 244],
		[189, 221],
		[221, 190],
		[190, 189],
		[222, 28],
		[28, 221],
		[221, 222],
		[223, 27],
		[27, 222],
		[222, 223],
		[224, 29],
		[29, 223],
		[223, 224],
		[225, 30],
		[30, 224],
		[224, 225],
		[113, 247],
		[247, 225],
		[225, 113],
		[99, 60],
		[60, 240],
		[240, 99],
		[213, 147],
		[147, 215],
		[215, 213],
		[60, 20],
		[20, 166],
		[166, 60],
		[192, 187],
		[187, 213],
		[213, 192],
		[243, 112],
		[112, 244],
		[244, 243],
		[244, 233],
		[233, 245],
		[245, 244],
		[245, 128],
		[128, 188],
		[188, 245],
		[188, 114],
		[114, 174],
		[174, 188],
		[134, 131],
		[131, 220],
		[220, 134],
		[174, 217],
		[217, 236],
		[236, 174],
		[236, 198],
		[198, 134],
		[134, 236],
		[215, 177],
		[177, 58],
		[58, 215],
		[156, 143],
		[143, 124],
		[124, 156],
		[25, 110],
		[110, 7],
		[7, 25],
		[31, 228],
		[228, 25],
		[25, 31],
		[264, 356],
		[356, 368],
		[368, 264],
		[0, 11],
		[11, 267],
		[267, 0],
		[451, 452],
		[452, 349],
		[349, 451],
		[267, 302],
		[302, 269],
		[269, 267],
		[350, 357],
		[357, 277],
		[277, 350],
		[350, 452],
		[452, 357],
		[357, 350],
		[299, 333],
		[333, 297],
		[297, 299],
		[396, 175],
		[175, 377],
		[377, 396],
		[280, 347],
		[347, 330],
		[330, 280],
		[269, 303],
		[303, 270],
		[270, 269],
		[151, 9],
		[9, 337],
		[337, 151],
		[344, 278],
		[278, 360],
		[360, 344],
		[424, 418],
		[418, 431],
		[431, 424],
		[270, 304],
		[304, 409],
		[409, 270],
		[272, 310],
		[310, 407],
		[407, 272],
		[322, 270],
		[270, 410],
		[410, 322],
		[449, 450],
		[450, 347],
		[347, 449],
		[432, 422],
		[422, 434],
		[434, 432],
		[18, 313],
		[313, 17],
		[17, 18],
		[291, 306],
		[306, 375],
		[375, 291],
		[259, 387],
		[387, 260],
		[260, 259],
		[424, 335],
		[335, 418],
		[418, 424],
		[434, 364],
		[364, 416],
		[416, 434],
		[391, 423],
		[423, 327],
		[327, 391],
		[301, 251],
		[251, 298],
		[298, 301],
		[275, 281],
		[281, 4],
		[4, 275],
		[254, 373],
		[373, 253],
		[253, 254],
		[375, 307],
		[307, 321],
		[321, 375],
		[280, 425],
		[425, 411],
		[411, 280],
		[200, 421],
		[421, 18],
		[18, 200],
		[335, 321],
		[321, 406],
		[406, 335],
		[321, 320],
		[320, 405],
		[405, 321],
		[314, 315],
		[315, 17],
		[17, 314],
		[423, 426],
		[426, 266],
		[266, 423],
		[396, 377],
		[377, 369],
		[369, 396],
		[270, 322],
		[322, 269],
		[269, 270],
		[413, 417],
		[417, 464],
		[464, 413],
		[385, 386],
		[386, 258],
		[258, 385],
		[248, 456],
		[456, 419],
		[419, 248],
		[298, 284],
		[284, 333],
		[333, 298],
		[168, 417],
		[417, 8],
		[8, 168],
		[448, 346],
		[346, 261],
		[261, 448],
		[417, 413],
		[413, 285],
		[285, 417],
		[326, 327],
		[327, 328],
		[328, 326],
		[277, 355],
		[355, 329],
		[329, 277],
		[309, 392],
		[392, 438],
		[438, 309],
		[381, 382],
		[382, 256],
		[256, 381],
		[279, 429],
		[429, 360],
		[360, 279],
		[365, 364],
		[364, 379],
		[379, 365],
		[355, 277],
		[277, 437],
		[437, 355],
		[282, 443],
		[443, 283],
		[283, 282],
		[281, 275],
		[275, 363],
		[363, 281],
		[395, 431],
		[431, 369],
		[369, 395],
		[299, 297],
		[297, 337],
		[337, 299],
		[335, 273],
		[273, 321],
		[321, 335],
		[348, 450],
		[450, 349],
		[349, 348],
		[359, 446],
		[446, 467],
		[467, 359],
		[283, 293],
		[293, 282],
		[282, 283],
		[250, 458],
		[458, 462],
		[462, 250],
		[300, 276],
		[276, 383],
		[383, 300],
		[292, 308],
		[308, 325],
		[325, 292],
		[283, 276],
		[276, 293],
		[293, 283],
		[264, 372],
		[372, 447],
		[447, 264],
		[346, 352],
		[352, 340],
		[340, 346],
		[354, 274],
		[274, 19],
		[19, 354],
		[363, 456],
		[456, 281],
		[281, 363],
		[426, 436],
		[436, 425],
		[425, 426],
		[380, 381],
		[381, 252],
		[252, 380],
		[267, 269],
		[269, 393],
		[393, 267],
		[421, 200],
		[200, 428],
		[428, 421],
		[371, 266],
		[266, 329],
		[329, 371],
		[432, 287],
		[287, 422],
		[422, 432],
		[290, 250],
		[250, 328],
		[328, 290],
		[385, 258],
		[258, 384],
		[384, 385],
		[446, 265],
		[265, 342],
		[342, 446],
		[386, 387],
		[387, 257],
		[257, 386],
		[422, 424],
		[424, 430],
		[430, 422],
		[445, 342],
		[342, 276],
		[276, 445],
		[422, 273],
		[273, 424],
		[424, 422],
		[306, 292],
		[292, 307],
		[307, 306],
		[352, 366],
		[366, 345],
		[345, 352],
		[268, 271],
		[271, 302],
		[302, 268],
		[358, 423],
		[423, 371],
		[371, 358],
		[327, 294],
		[294, 460],
		[460, 327],
		[331, 279],
		[279, 294],
		[294, 331],
		[303, 271],
		[271, 304],
		[304, 303],
		[436, 432],
		[432, 427],
		[427, 436],
		[304, 272],
		[272, 408],
		[408, 304],
		[395, 394],
		[394, 431],
		[431, 395],
		[378, 395],
		[395, 400],
		[400, 378],
		[296, 334],
		[334, 299],
		[299, 296],
		[6, 351],
		[351, 168],
		[168, 6],
		[376, 352],
		[352, 411],
		[411, 376],
		[307, 325],
		[325, 320],
		[320, 307],
		[285, 295],
		[295, 336],
		[336, 285],
		[320, 319],
		[319, 404],
		[404, 320],
		[329, 330],
		[330, 349],
		[349, 329],
		[334, 293],
		[293, 333],
		[333, 334],
		[366, 323],
		[323, 447],
		[447, 366],
		[316, 15],
		[15, 315],
		[315, 316],
		[331, 358],
		[358, 279],
		[279, 331],
		[317, 14],
		[14, 316],
		[316, 317],
		[8, 285],
		[285, 9],
		[9, 8],
		[277, 329],
		[329, 350],
		[350, 277],
		[253, 374],
		[374, 252],
		[252, 253],
		[319, 318],
		[318, 403],
		[403, 319],
		[351, 6],
		[6, 419],
		[419, 351],
		[324, 318],
		[318, 325],
		[325, 324],
		[397, 367],
		[367, 365],
		[365, 397],
		[288, 435],
		[435, 397],
		[397, 288],
		[278, 344],
		[344, 439],
		[439, 278],
		[310, 272],
		[272, 311],
		[311, 310],
		[248, 195],
		[195, 281],
		[281, 248],
		[375, 273],
		[273, 291],
		[291, 375],
		[175, 396],
		[396, 199],
		[199, 175],
		[312, 311],
		[311, 268],
		[268, 312],
		[276, 283],
		[283, 445],
		[445, 276],
		[390, 373],
		[373, 339],
		[339, 390],
		[295, 282],
		[282, 296],
		[296, 295],
		[448, 449],
		[449, 346],
		[346, 448],
		[356, 264],
		[264, 454],
		[454, 356],
		[337, 336],
		[336, 299],
		[299, 337],
		[337, 338],
		[338, 151],
		[151, 337],
		[294, 278],
		[278, 455],
		[455, 294],
		[308, 292],
		[292, 415],
		[415, 308],
		[429, 358],
		[358, 355],
		[355, 429],
		[265, 340],
		[340, 372],
		[372, 265],
		[352, 346],
		[346, 280],
		[280, 352],
		[295, 442],
		[442, 282],
		[282, 295],
		[354, 19],
		[19, 370],
		[370, 354],
		[285, 441],
		[441, 295],
		[295, 285],
		[195, 248],
		[248, 197],
		[197, 195],
		[457, 440],
		[440, 274],
		[274, 457],
		[301, 300],
		[300, 368],
		[368, 301],
		[417, 351],
		[351, 465],
		[465, 417],
		[251, 301],
		[301, 389],
		[389, 251],
		[394, 395],
		[395, 379],
		[379, 394],
		[399, 412],
		[412, 419],
		[419, 399],
		[410, 436],
		[436, 322],
		[322, 410],
		[326, 2],
		[2, 393],
		[393, 326],
		[354, 370],
		[370, 461],
		[461, 354],
		[393, 164],
		[164, 267],
		[267, 393],
		[268, 302],
		[302, 12],
		[12, 268],
		[312, 268],
		[268, 13],
		[13, 312],
		[298, 293],
		[293, 301],
		[301, 298],
		[265, 446],
		[446, 340],
		[340, 265],
		[280, 330],
		[330, 425],
		[425, 280],
		[322, 426],
		[426, 391],
		[391, 322],
		[420, 429],
		[429, 437],
		[437, 420],
		[393, 391],
		[391, 326],
		[326, 393],
		[344, 440],
		[440, 438],
		[438, 344],
		[458, 459],
		[459, 461],
		[461, 458],
		[364, 434],
		[434, 394],
		[394, 364],
		[428, 396],
		[396, 262],
		[262, 428],
		[274, 354],
		[354, 457],
		[457, 274],
		[317, 316],
		[316, 402],
		[402, 317],
		[316, 315],
		[315, 403],
		[403, 316],
		[315, 314],
		[314, 404],
		[404, 315],
		[314, 313],
		[313, 405],
		[405, 314],
		[313, 421],
		[421, 406],
		[406, 313],
		[323, 366],
		[366, 361],
		[361, 323],
		[292, 306],
		[306, 407],
		[407, 292],
		[306, 291],
		[291, 408],
		[408, 306],
		[291, 287],
		[287, 409],
		[409, 291],
		[287, 432],
		[432, 410],
		[410, 287],
		[427, 434],
		[434, 411],
		[411, 427],
		[372, 264],
		[264, 383],
		[383, 372],
		[459, 309],
		[309, 457],
		[457, 459],
		[366, 352],
		[352, 401],
		[401, 366],
		[1, 274],
		[274, 4],
		[4, 1],
		[418, 421],
		[421, 262],
		[262, 418],
		[331, 294],
		[294, 358],
		[358, 331],
		[435, 433],
		[433, 367],
		[367, 435],
		[392, 289],
		[289, 439],
		[439, 392],
		[328, 462],
		[462, 326],
		[326, 328],
		[94, 2],
		[2, 370],
		[370, 94],
		[289, 305],
		[305, 455],
		[455, 289],
		[339, 254],
		[254, 448],
		[448, 339],
		[359, 255],
		[255, 446],
		[446, 359],
		[254, 253],
		[253, 449],
		[449, 254],
		[253, 252],
		[252, 450],
		[450, 253],
		[252, 256],
		[256, 451],
		[451, 252],
		[256, 341],
		[341, 452],
		[452, 256],
		[414, 413],
		[413, 463],
		[463, 414],
		[286, 441],
		[441, 414],
		[414, 286],
		[286, 258],
		[258, 441],
		[441, 286],
		[258, 257],
		[257, 442],
		[442, 258],
		[257, 259],
		[259, 443],
		[443, 257],
		[259, 260],
		[260, 444],
		[444, 259],
		[260, 467],
		[467, 445],
		[445, 260],
		[309, 459],
		[459, 250],
		[250, 309],
		[305, 289],
		[289, 290],
		[290, 305],
		[305, 290],
		[290, 460],
		[460, 305],
		[401, 376],
		[376, 435],
		[435, 401],
		[309, 250],
		[250, 392],
		[392, 309],
		[376, 411],
		[411, 433],
		[433, 376],
		[453, 341],
		[341, 464],
		[464, 453],
		[357, 453],
		[453, 465],
		[465, 357],
		[343, 357],
		[357, 412],
		[412, 343],
		[437, 343],
		[343, 399],
		[399, 437],
		[344, 360],
		[360, 440],
		[440, 344],
		[420, 437],
		[437, 456],
		[456, 420],
		[360, 420],
		[420, 363],
		[363, 360],
		[361, 401],
		[401, 288],
		[288, 361],
		[265, 372],
		[372, 353],
		[353, 265],
		[390, 339],
		[339, 249],
		[249, 390],
		[339, 448],
		[448, 255],
		[255, 339]
	);
function mc(t) {
	t.j = {
		faceLandmarks: [],
		faceBlendshapes: [],
		facialTransformationMatrixes: [],
	};
}
var yc = class extends ic {
	constructor(t, e) {
		super(new Za(t, e), 'image_in', 'norm_rect', !1),
			(this.j = {
				faceLandmarks: [],
				faceBlendshapes: [],
				facialTransformationMatrixes: [],
			}),
			(this.outputFacialTransformationMatrixes =
				this.outputFaceBlendshapes =
					!1),
			yn((t = this.h = new zs()), 0, 1, (e = new Ds())),
			(this.v = new Ws()),
			yn(this.h, 0, 3, this.v),
			(this.s = new js()),
			yn(this.h, 0, 2, this.s),
			xn(this.s, 4, 1),
			Ln(this.s, 2, 0.5),
			Ln(this.v, 2, 0.5),
			Ln(this.h, 4, 0.5);
	}
	get baseOptions() {
		return pn(this.h, Ds, 1);
	}
	set baseOptions(t) {
		yn(this.h, 0, 1, t);
	}
	o(t) {
		return (
			'numFaces' in t && xn(this.s, 4, t.numFaces ?? 1),
			'minFaceDetectionConfidence' in t &&
				Ln(this.s, 2, t.minFaceDetectionConfidence ?? 0.5),
			'minTrackingConfidence' in t &&
				Ln(this.h, 4, t.minTrackingConfidence ?? 0.5),
			'minFacePresenceConfidence' in t &&
				Ln(this.v, 2, t.minFacePresenceConfidence ?? 0.5),
			'outputFaceBlendshapes' in t &&
				(this.outputFaceBlendshapes = !!t.outputFaceBlendshapes),
			'outputFacialTransformationMatrixes' in t &&
				(this.outputFacialTransformationMatrixes =
					!!t.outputFacialTransformationMatrixes),
			this.l(t)
		);
	}
	D(t, e) {
		return mc(this), ec(this, t, e), this.j;
	}
	F(t, e, n) {
		return mc(this), nc(this, t, n, e), this.j;
	}
	m() {
		var t = new os();
		is(t, 'image_in'), is(t, 'norm_rect'), ss(t, 'face_landmarks');
		const e = new Ki();
		er(e, $s, this.h);
		const n = new Qi();
		qi(n, 'mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph'),
			Ji(n, 'IMAGE:image_in'),
			Ji(n, 'NORM_RECT:norm_rect'),
			Zi(n, 'NORM_LANDMARKS:face_landmarks'),
			n.o(e),
			rs(t, n),
			this.g.attachProtoVectorListener('face_landmarks', (t, e) => {
				for (const e of t)
					(t = Es(e)), this.j.faceLandmarks.push(Co(t));
				ea(this, e);
			}),
			this.g.attachEmptyPacketListener('face_landmarks', (t) => {
				ea(this, t);
			}),
			this.outputFaceBlendshapes &&
				(ss(t, 'blendshapes'),
				Zi(n, 'BLENDSHAPES:blendshapes'),
				this.g.attachProtoVectorListener('blendshapes', (t, e) => {
					if (this.outputFaceBlendshapes)
						for (const e of t)
							(t = fs(e)),
								this.j.faceBlendshapes.push(Po(t.g() ?? []));
					ea(this, e);
				}),
				this.g.attachEmptyPacketListener('blendshapes', (t) => {
					ea(this, t);
				})),
			this.outputFacialTransformationMatrixes &&
				(ss(t, 'face_geometry'),
				Zi(n, 'FACE_GEOMETRY:face_geometry'),
				this.g.attachProtoVectorListener('face_geometry', (t, e) => {
					if (this.outputFacialTransformationMatrixes)
						for (const e of t)
							(t = pn(Hs(e), ws, 2)) &&
								this.j.facialTransformationMatrixes.push({
									rows: Tn(bn(t, 1), 0) ?? 0,
									columns: Tn(bn(t, 2), 0) ?? 0,
									data: en(t, 3, Ht, tn()).slice() ?? [],
								});
					ea(this, e);
				}),
				this.g.attachEmptyPacketListener('face_geometry', (t) => {
					ea(this, t);
				})),
			(t = t.g()),
			this.setGraph(new Uint8Array(t), !0);
	}
};
(yc.prototype.detectForVideo = yc.prototype.F),
	(yc.prototype.detect = yc.prototype.D),
	(yc.prototype.setOptions = yc.prototype.o),
	(yc.createFromModelPath = function (t, e) {
		return Qa(yc, t, { baseOptions: { modelAssetPath: e } });
	}),
	(yc.createFromModelBuffer = function (t, e) {
		return Qa(yc, t, { baseOptions: { modelAssetBuffer: e } });
	}),
	(yc.createFromOptions = function (t, e) {
		return Qa(yc, t, e);
	}),
	(yc.FACE_LANDMARKS_LIPS = oc),
	(yc.FACE_LANDMARKS_LEFT_EYE = ac),
	(yc.FACE_LANDMARKS_LEFT_EYEBROW = cc),
	(yc.FACE_LANDMARKS_LEFT_IRIS = hc),
	(yc.FACE_LANDMARKS_RIGHT_EYE = uc),
	(yc.FACE_LANDMARKS_RIGHT_EYEBROW = lc),
	(yc.FACE_LANDMARKS_RIGHT_IRIS = fc),
	(yc.FACE_LANDMARKS_FACE_OVAL = dc),
	(yc.FACE_LANDMARKS_CONTOURS = pc),
	(yc.FACE_LANDMARKS_TESSELATION = gc);
var _c = class extends ic {
	constructor(t, e) {
		super(new Za(t, e), 'image_in', 'norm_rect', !0),
			yn((t = this.j = new qs()), 0, 1, (e = new Ds()));
	}
	get baseOptions() {
		return pn(this.j, Ds, 1);
	}
	set baseOptions(t) {
		yn(this.j, 0, 1, t);
	}
	o(t) {
		return super.l(t);
	}
	Pa(t, e, n) {
		const r = 'function' != typeof e ? e : {};
		if (
			((this.h = 'function' == typeof e ? e : n),
			ec(this, t, r ?? {}),
			!this.h)
		)
			return this.s;
	}
	m() {
		var t = new os();
		is(t, 'image_in'), is(t, 'norm_rect'), ss(t, 'stylized_image');
		const e = new Ki();
		er(e, Js, this.j);
		const n = new Qi();
		qi(n, 'mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph'),
			Ji(n, 'IMAGE:image_in'),
			Ji(n, 'NORM_RECT:norm_rect'),
			Zi(n, 'STYLIZED_IMAGE:stylized_image'),
			n.o(e),
			rs(t, n),
			this.g.V('stylized_image', (t, e) => {
				var n = !this.h,
					r = t.data,
					i = t.width;
				const s = i * (t = t.height);
				if (r instanceof Uint8Array)
					if (r.length === 3 * s) {
						const e = new Uint8ClampedArray(4 * s);
						for (let t = 0; t < s; ++t)
							(e[4 * t] = r[3 * t]),
								(e[4 * t + 1] = r[3 * t + 1]),
								(e[4 * t + 2] = r[3 * t + 2]),
								(e[4 * t + 3] = 255);
						r = new ImageData(e, i, t);
					} else {
						if (r.length !== 4 * s)
							throw Error(
								'Unsupported channel count: ' + r.length / s
							);
						r = new ImageData(
							new Uint8ClampedArray(
								r.buffer,
								r.byteOffset,
								r.length
							),
							i,
							t
						);
					}
				else if (!(r instanceof WebGLTexture))
					throw Error(`Unsupported format: ${r.constructor.name}`);
				(i = new Ka([r], !1, !1, this.g.i.canvas, this.P, i, t)),
					(this.s = n = n ? i.clone() : i),
					this.h && this.h(n),
					ea(this, e);
			}),
			this.g.attachEmptyPacketListener('stylized_image', (t) => {
				(this.s = null), this.h && this.h(null), ea(this, t);
			}),
			(t = t.g()),
			this.setGraph(new Uint8Array(t), !0);
	}
};
(_c.prototype.stylize = _c.prototype.Pa),
	(_c.prototype.setOptions = _c.prototype.o),
	(_c.createFromModelPath = function (t, e) {
		return Qa(_c, t, { baseOptions: { modelAssetPath: e } });
	}),
	(_c.createFromModelBuffer = function (t, e) {
		return Qa(_c, t, { baseOptions: { modelAssetBuffer: e } });
	}),
	(_c.createFromOptions = function (t, e) {
		return Qa(_c, t, e);
	});
var vc = $a(
	[0, 1],
	[1, 2],
	[2, 3],
	[3, 4],
	[0, 5],
	[5, 6],
	[6, 7],
	[7, 8],
	[5, 9],
	[9, 10],
	[10, 11],
	[11, 12],
	[9, 13],
	[13, 14],
	[14, 15],
	[15, 16],
	[13, 17],
	[0, 17],
	[17, 18],
	[18, 19],
	[19, 20]
);
function Ec(t) {
	(t.gestures = []),
		(t.landmarks = []),
		(t.worldLandmarks = []),
		(t.handedness = []);
}
function wc(t) {
	return 0 === t.gestures.length
		? {
				gestures: [],
				landmarks: [],
				worldLandmarks: [],
				handedness: [],
				handednesses: [],
		  }
		: {
				gestures: t.gestures,
				landmarks: t.landmarks,
				worldLandmarks: t.worldLandmarks,
				handedness: t.handedness,
				handednesses: t.handedness,
		  };
}
function Tc(t, e = !0) {
	const n = [];
	for (const i of t) {
		var r = fs(i);
		t = [];
		for (const n of r.g())
			(r = e && null != bn(n, 1) ? Tn(bn(n, 1), 0) : -1),
				t.push({
					score: An(n, 2) ?? 0,
					index: r,
					categoryName: kn(n, 3) ?? '',
					displayName: kn(n, 4) ?? '',
				});
		n.push(t);
	}
	return n;
}
var bc = class extends ic {
	constructor(t, e) {
		super(new Za(t, e), 'image_in', 'norm_rect', !1),
			(this.gestures = []),
			(this.landmarks = []),
			(this.worldLandmarks = []),
			(this.handedness = []),
			yn((t = this.j = new io()), 0, 1, (e = new Ds())),
			(this.s = new ro()),
			yn(this.j, 0, 2, this.s),
			(this.C = new no()),
			yn(this.s, 0, 3, this.C),
			(this.v = new eo()),
			yn(this.s, 0, 2, this.v),
			(this.h = new to()),
			yn(this.j, 0, 3, this.h),
			Ln(this.v, 2, 0.5),
			Ln(this.s, 4, 0.5),
			Ln(this.C, 2, 0.5);
	}
	get baseOptions() {
		return pn(this.j, Ds, 1);
	}
	set baseOptions(t) {
		yn(this.j, 0, 1, t);
	}
	o(t) {
		if (
			(xn(this.v, 3, t.numHands ?? 1),
			'minHandDetectionConfidence' in t &&
				Ln(this.v, 2, t.minHandDetectionConfidence ?? 0.5),
			'minTrackingConfidence' in t &&
				Ln(this.s, 4, t.minTrackingConfidence ?? 0.5),
			'minHandPresenceConfidence' in t &&
				Ln(this.C, 2, t.minHandPresenceConfidence ?? 0.5),
			t.cannedGesturesClassifierOptions)
		) {
			var e = new Zs(),
				n = e,
				r = Io(
					t.cannedGesturesClassifierOptions,
					pn(this.h, Zs, 3)?.h()
				);
			yn(n, 0, 2, r), yn(this.h, 0, 3, e);
		} else
			void 0 === t.cannedGesturesClassifierOptions &&
				pn(this.h, Zs, 3)?.g();
		return (
			t.customGesturesClassifierOptions
				? (yn(
						(n = e = new Zs()),
						0,
						2,
						(r = Io(
							t.customGesturesClassifierOptions,
							pn(this.h, Zs, 4)?.h()
						))
				  ),
				  yn(this.h, 0, 4, e))
				: void 0 === t.customGesturesClassifierOptions &&
				  pn(this.h, Zs, 4)?.g(),
			this.l(t)
		);
	}
	Ka(t, e) {
		return Ec(this), ec(this, t, e), wc(this);
	}
	La(t, e, n) {
		return Ec(this), nc(this, t, n, e), wc(this);
	}
	m() {
		var t = new os();
		is(t, 'image_in'),
			is(t, 'norm_rect'),
			ss(t, 'hand_gestures'),
			ss(t, 'hand_landmarks'),
			ss(t, 'world_hand_landmarks'),
			ss(t, 'handedness');
		const e = new Ki();
		er(e, ho, this.j);
		const n = new Qi();
		qi(
			n,
			'mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph'
		),
			Ji(n, 'IMAGE:image_in'),
			Ji(n, 'NORM_RECT:norm_rect'),
			Zi(n, 'HAND_GESTURES:hand_gestures'),
			Zi(n, 'LANDMARKS:hand_landmarks'),
			Zi(n, 'WORLD_LANDMARKS:world_hand_landmarks'),
			Zi(n, 'HANDEDNESS:handedness'),
			n.o(e),
			rs(t, n),
			this.g.attachProtoVectorListener('hand_landmarks', (t, e) => {
				for (const e of t) {
					t = Es(e);
					const n = [];
					for (const e of mn(t, vs, 1))
						n.push({
							x: An(e, 1) ?? 0,
							y: An(e, 2) ?? 0,
							z: An(e, 3) ?? 0,
							visibility: An(e, 4) ?? 0,
						});
					this.landmarks.push(n);
				}
				ea(this, e);
			}),
			this.g.attachEmptyPacketListener('hand_landmarks', (t) => {
				ea(this, t);
			}),
			this.g.attachProtoVectorListener('world_hand_landmarks', (t, e) => {
				for (const e of t) {
					t = _s(e);
					const n = [];
					for (const e of mn(t, ys, 1))
						n.push({
							x: An(e, 1) ?? 0,
							y: An(e, 2) ?? 0,
							z: An(e, 3) ?? 0,
							visibility: An(e, 4) ?? 0,
						});
					this.worldLandmarks.push(n);
				}
				ea(this, e);
			}),
			this.g.attachEmptyPacketListener('world_hand_landmarks', (t) => {
				ea(this, t);
			}),
			this.g.attachProtoVectorListener('hand_gestures', (t, e) => {
				this.gestures.push(...Tc(t, !1)), ea(this, e);
			}),
			this.g.attachEmptyPacketListener('hand_gestures', (t) => {
				ea(this, t);
			}),
			this.g.attachProtoVectorListener('handedness', (t, e) => {
				this.handedness.push(...Tc(t)), ea(this, e);
			}),
			this.g.attachEmptyPacketListener('handedness', (t) => {
				ea(this, t);
			}),
			(t = t.g()),
			this.setGraph(new Uint8Array(t), !0);
	}
};
function Ac(t) {
	return {
		landmarks: t.landmarks,
		worldLandmarks: t.worldLandmarks,
		handednesses: t.handedness,
		handedness: t.handedness,
	};
}
(bc.prototype.recognizeForVideo = bc.prototype.La),
	(bc.prototype.recognize = bc.prototype.Ka),
	(bc.prototype.setOptions = bc.prototype.o),
	(bc.createFromModelPath = function (t, e) {
		return Qa(bc, t, { baseOptions: { modelAssetPath: e } });
	}),
	(bc.createFromModelBuffer = function (t, e) {
		return Qa(bc, t, { baseOptions: { modelAssetBuffer: e } });
	}),
	(bc.createFromOptions = function (t, e) {
		return Qa(bc, t, e);
	}),
	(bc.HAND_CONNECTIONS = vc);
var kc = class extends ic {
	constructor(t, e) {
		super(new Za(t, e), 'image_in', 'norm_rect', !1),
			(this.landmarks = []),
			(this.worldLandmarks = []),
			(this.handedness = []),
			yn((t = this.h = new ro()), 0, 1, (e = new Ds())),
			(this.s = new no()),
			yn(this.h, 0, 3, this.s),
			(this.j = new eo()),
			yn(this.h, 0, 2, this.j),
			xn(this.j, 3, 1),
			Ln(this.j, 2, 0.5),
			Ln(this.s, 2, 0.5),
			Ln(this.h, 4, 0.5);
	}
	get baseOptions() {
		return pn(this.h, Ds, 1);
	}
	set baseOptions(t) {
		yn(this.h, 0, 1, t);
	}
	o(t) {
		return (
			'numHands' in t && xn(this.j, 3, t.numHands ?? 1),
			'minHandDetectionConfidence' in t &&
				Ln(this.j, 2, t.minHandDetectionConfidence ?? 0.5),
			'minTrackingConfidence' in t &&
				Ln(this.h, 4, t.minTrackingConfidence ?? 0.5),
			'minHandPresenceConfidence' in t &&
				Ln(this.s, 2, t.minHandPresenceConfidence ?? 0.5),
			this.l(t)
		);
	}
	D(t, e) {
		return (
			(this.landmarks = []),
			(this.worldLandmarks = []),
			(this.handedness = []),
			ec(this, t, e),
			Ac(this)
		);
	}
	F(t, e, n) {
		return (
			(this.landmarks = []),
			(this.worldLandmarks = []),
			(this.handedness = []),
			nc(this, t, n, e),
			Ac(this)
		);
	}
	m() {
		var t = new os();
		is(t, 'image_in'),
			is(t, 'norm_rect'),
			ss(t, 'hand_landmarks'),
			ss(t, 'world_hand_landmarks'),
			ss(t, 'handedness');
		const e = new Ki();
		er(e, uo, this.h);
		const n = new Qi();
		qi(n, 'mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph'),
			Ji(n, 'IMAGE:image_in'),
			Ji(n, 'NORM_RECT:norm_rect'),
			Zi(n, 'LANDMARKS:hand_landmarks'),
			Zi(n, 'WORLD_LANDMARKS:world_hand_landmarks'),
			Zi(n, 'HANDEDNESS:handedness'),
			n.o(e),
			rs(t, n),
			this.g.attachProtoVectorListener('hand_landmarks', (t, e) => {
				for (const e of t) (t = Es(e)), this.landmarks.push(Co(t));
				ea(this, e);
			}),
			this.g.attachEmptyPacketListener('hand_landmarks', (t) => {
				ea(this, t);
			}),
			this.g.attachProtoVectorListener('world_hand_landmarks', (t, e) => {
				for (const e of t) (t = _s(e)), this.worldLandmarks.push(No(t));
				ea(this, e);
			}),
			this.g.attachEmptyPacketListener('world_hand_landmarks', (t) => {
				ea(this, t);
			}),
			this.g.attachProtoVectorListener('handedness', (t, e) => {
				var n = this.handedness,
					r = n.push;
				const i = [];
				for (const e of t) {
					t = fs(e);
					const n = [];
					for (const e of t.g())
						n.push({
							score: An(e, 2) ?? 0,
							index: Tn(bn(e, 1), 0) ?? -1,
							categoryName: kn(e, 3) ?? '',
							displayName: kn(e, 4) ?? '',
						});
					i.push(n);
				}
				r.call(n, ...i), ea(this, e);
			}),
			this.g.attachEmptyPacketListener('handedness', (t) => {
				ea(this, t);
			}),
			(t = t.g()),
			this.setGraph(new Uint8Array(t), !0);
	}
};
(kc.prototype.detectForVideo = kc.prototype.F),
	(kc.prototype.detect = kc.prototype.D),
	(kc.prototype.setOptions = kc.prototype.o),
	(kc.createFromModelPath = function (t, e) {
		return Qa(kc, t, { baseOptions: { modelAssetPath: e } });
	}),
	(kc.createFromModelBuffer = function (t, e) {
		return Qa(kc, t, { baseOptions: { modelAssetBuffer: e } });
	}),
	(kc.createFromOptions = function (t, e) {
		return Qa(kc, t, e);
	}),
	(kc.HAND_CONNECTIONS = vc);
var Sc = $a(
	[0, 1],
	[1, 2],
	[2, 3],
	[3, 7],
	[0, 4],
	[4, 5],
	[5, 6],
	[6, 8],
	[9, 10],
	[11, 12],
	[11, 13],
	[13, 15],
	[15, 17],
	[15, 19],
	[15, 21],
	[17, 19],
	[12, 14],
	[14, 16],
	[16, 18],
	[16, 20],
	[16, 22],
	[18, 20],
	[11, 23],
	[12, 24],
	[23, 24],
	[23, 25],
	[24, 26],
	[25, 27],
	[26, 28],
	[27, 29],
	[28, 30],
	[29, 31],
	[30, 32],
	[27, 31],
	[28, 32]
);
function xc(t) {
	t.h = {
		faceLandmarks: [],
		faceBlendshapes: [],
		poseLandmarks: [],
		poseWorldLandmarks: [],
		poseSegmentationMasks: [],
		leftHandLandmarks: [],
		leftHandWorldLandmarks: [],
		rightHandLandmarks: [],
		rightHandWorldLandmarks: [],
	};
}
function Lc(t) {
	try {
		if (!t.C) return t.h;
		t.C(t.h);
	} finally {
		ia(t);
	}
}
function Rc(t, e) {
	(t = Es(t)), e.push(Co(t));
}
var Fc = class extends ic {
	constructor(t, e) {
		super(new Za(t, e), 'input_frames_image', null, !1),
			(this.h = {
				faceLandmarks: [],
				faceBlendshapes: [],
				poseLandmarks: [],
				poseWorldLandmarks: [],
				poseSegmentationMasks: [],
				leftHandLandmarks: [],
				leftHandWorldLandmarks: [],
				rightHandLandmarks: [],
				rightHandWorldLandmarks: [],
			}),
			(this.outputPoseSegmentationMasks = this.outputFaceBlendshapes =
				!1),
			yn((t = this.j = new go()), 0, 1, (e = new Ds())),
			(this.K = new no()),
			yn(this.j, 0, 2, this.K),
			(this.aa = new lo()),
			yn(this.j, 0, 3, this.aa),
			(this.s = new js()),
			yn(this.j, 0, 4, this.s),
			(this.I = new Ws()),
			yn(this.j, 0, 5, this.I),
			(this.v = new fo()),
			yn(this.j, 0, 6, this.v),
			(this.L = new po()),
			yn(this.j, 0, 7, this.L),
			Ln(this.s, 2, 0.5),
			Ln(this.s, 3, 0.3),
			Ln(this.I, 2, 0.5),
			Ln(this.v, 2, 0.5),
			Ln(this.v, 3, 0.3),
			Ln(this.L, 2, 0.5),
			Ln(this.K, 2, 0.5);
	}
	get baseOptions() {
		return pn(this.j, Ds, 1);
	}
	set baseOptions(t) {
		yn(this.j, 0, 1, t);
	}
	o(t) {
		return (
			'minFaceDetectionConfidence' in t &&
				Ln(this.s, 2, t.minFaceDetectionConfidence ?? 0.5),
			'minFaceSuppressionThreshold' in t &&
				Ln(this.s, 3, t.minFaceSuppressionThreshold ?? 0.3),
			'minFacePresenceConfidence' in t &&
				Ln(this.I, 2, t.minFacePresenceConfidence ?? 0.5),
			'outputFaceBlendshapes' in t &&
				(this.outputFaceBlendshapes = !!t.outputFaceBlendshapes),
			'minPoseDetectionConfidence' in t &&
				Ln(this.v, 2, t.minPoseDetectionConfidence ?? 0.5),
			'minPoseSuppressionThreshold' in t &&
				Ln(this.v, 3, t.minPoseSuppressionThreshold ?? 0.3),
			'minPosePresenceConfidence' in t &&
				Ln(this.L, 2, t.minPosePresenceConfidence ?? 0.5),
			'outputPoseSegmentationMasks' in t &&
				(this.outputPoseSegmentationMasks =
					!!t.outputPoseSegmentationMasks),
			'minHandLandmarksConfidence' in t &&
				Ln(this.K, 2, t.minHandLandmarksConfidence ?? 0.5),
			this.l(t)
		);
	}
	D(t, e, n) {
		const r = 'function' != typeof e ? e : {};
		return (
			(this.C = 'function' == typeof e ? e : n),
			xc(this),
			ec(this, t, r),
			Lc(this)
		);
	}
	F(t, e, n, r) {
		const i = 'function' != typeof n ? n : {};
		return (
			(this.C = 'function' == typeof n ? n : r),
			xc(this),
			nc(this, t, i, e),
			Lc(this)
		);
	}
	m() {
		var t = new os();
		is(t, 'input_frames_image'),
			ss(t, 'pose_landmarks'),
			ss(t, 'pose_world_landmarks'),
			ss(t, 'face_landmarks'),
			ss(t, 'left_hand_landmarks'),
			ss(t, 'left_hand_world_landmarks'),
			ss(t, 'right_hand_landmarks'),
			ss(t, 'right_hand_world_landmarks');
		const e = new Ki(),
			n = new Oi();
		an(
			n,
			1,
			ne(
				'type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions'
			),
			''
		),
			(function (t, e) {
				if (null != e)
					if (Array.isArray(e))
						$e(t, 2, De(e, Ge, void 0, void 0, !1));
					else {
						if (!('string' == typeof e || e instanceof U || M(e)))
							throw Error(
								'invalid value in Any.value field: ' +
									e +
									' expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array'
							);
						an(t, 2, ut(e, !1, !1), C());
					}
			})(n, this.j.g());
		const r = new Qi();
		qi(
			r,
			'mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph'
		),
			wn(r, 8, Oi, n),
			Ji(r, 'IMAGE:input_frames_image'),
			Zi(r, 'POSE_LANDMARKS:pose_landmarks'),
			Zi(r, 'POSE_WORLD_LANDMARKS:pose_world_landmarks'),
			Zi(r, 'FACE_LANDMARKS:face_landmarks'),
			Zi(r, 'LEFT_HAND_LANDMARKS:left_hand_landmarks'),
			Zi(r, 'LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks'),
			Zi(r, 'RIGHT_HAND_LANDMARKS:right_hand_landmarks'),
			Zi(r, 'RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks'),
			r.o(e),
			rs(t, r),
			na(this, t),
			this.g.attachProtoListener('pose_landmarks', (t, e) => {
				Rc(t, this.h.poseLandmarks), ea(this, e);
			}),
			this.g.attachEmptyPacketListener('pose_landmarks', (t) => {
				ea(this, t);
			}),
			this.g.attachProtoListener('pose_world_landmarks', (t, e) => {
				var n = this.h.poseWorldLandmarks;
				(t = _s(t)), n.push(No(t)), ea(this, e);
			}),
			this.g.attachEmptyPacketListener('pose_world_landmarks', (t) => {
				ea(this, t);
			}),
			this.outputPoseSegmentationMasks &&
				(Zi(r, 'POSE_SEGMENTATION_MASK:pose_segmentation_mask'),
				ra(this, 'pose_segmentation_mask'),
				this.g.V('pose_segmentation_mask', (t, e) => {
					(this.h.poseSegmentationMasks = [rc(this, t, !0, !this.C)]),
						ea(this, e);
				}),
				this.g.attachEmptyPacketListener(
					'pose_segmentation_mask',
					(t) => {
						(this.h.poseSegmentationMasks = []), ea(this, t);
					}
				)),
			this.g.attachProtoListener('face_landmarks', (t, e) => {
				Rc(t, this.h.faceLandmarks), ea(this, e);
			}),
			this.g.attachEmptyPacketListener('face_landmarks', (t) => {
				ea(this, t);
			}),
			this.outputFaceBlendshapes &&
				(ss(t, 'extra_blendshapes'),
				Zi(r, 'FACE_BLENDSHAPES:extra_blendshapes'),
				this.g.attachProtoListener('extra_blendshapes', (t, e) => {
					var n = this.h.faceBlendshapes;
					this.outputFaceBlendshapes &&
						((t = fs(t)), n.push(Po(t.g() ?? []))),
						ea(this, e);
				}),
				this.g.attachEmptyPacketListener('extra_blendshapes', (t) => {
					ea(this, t);
				})),
			this.g.attachProtoListener('left_hand_landmarks', (t, e) => {
				Rc(t, this.h.leftHandLandmarks), ea(this, e);
			}),
			this.g.attachEmptyPacketListener('left_hand_landmarks', (t) => {
				ea(this, t);
			}),
			this.g.attachProtoListener('left_hand_world_landmarks', (t, e) => {
				var n = this.h.leftHandWorldLandmarks;
				(t = _s(t)), n.push(No(t)), ea(this, e);
			}),
			this.g.attachEmptyPacketListener(
				'left_hand_world_landmarks',
				(t) => {
					ea(this, t);
				}
			),
			this.g.attachProtoListener('right_hand_landmarks', (t, e) => {
				Rc(t, this.h.rightHandLandmarks), ea(this, e);
			}),
			this.g.attachEmptyPacketListener('right_hand_landmarks', (t) => {
				ea(this, t);
			}),
			this.g.attachProtoListener('right_hand_world_landmarks', (t, e) => {
				var n = this.h.rightHandWorldLandmarks;
				(t = _s(t)), n.push(No(t)), ea(this, e);
			}),
			this.g.attachEmptyPacketListener(
				'right_hand_world_landmarks',
				(t) => {
					ea(this, t);
				}
			),
			(t = t.g()),
			this.setGraph(new Uint8Array(t), !0);
	}
};
(Fc.prototype.detectForVideo = Fc.prototype.F),
	(Fc.prototype.detect = Fc.prototype.D),
	(Fc.prototype.setOptions = Fc.prototype.o),
	(Fc.createFromModelPath = function (t, e) {
		return Qa(Fc, t, { baseOptions: { modelAssetPath: e } });
	}),
	(Fc.createFromModelBuffer = function (t, e) {
		return Qa(Fc, t, { baseOptions: { modelAssetBuffer: e } });
	}),
	(Fc.createFromOptions = function (t, e) {
		return Qa(Fc, t, e);
	}),
	(Fc.HAND_CONNECTIONS = vc),
	(Fc.POSE_CONNECTIONS = Sc),
	(Fc.FACE_LANDMARKS_LIPS = oc),
	(Fc.FACE_LANDMARKS_LEFT_EYE = ac),
	(Fc.FACE_LANDMARKS_LEFT_EYEBROW = cc),
	(Fc.FACE_LANDMARKS_LEFT_IRIS = hc),
	(Fc.FACE_LANDMARKS_RIGHT_EYE = uc),
	(Fc.FACE_LANDMARKS_RIGHT_EYEBROW = lc),
	(Fc.FACE_LANDMARKS_RIGHT_IRIS = fc),
	(Fc.FACE_LANDMARKS_FACE_OVAL = dc),
	(Fc.FACE_LANDMARKS_CONTOURS = pc),
	(Fc.FACE_LANDMARKS_TESSELATION = gc);
var Mc = class extends ic {
	constructor(t, e) {
		super(new Za(t, e), 'input_image', 'norm_rect', !0),
			(this.j = { classifications: [] }),
			yn((t = this.h = new _o()), 0, 1, (e = new Ds()));
	}
	get baseOptions() {
		return pn(this.h, Ds, 1);
	}
	set baseOptions(t) {
		yn(this.h, 0, 1, t);
	}
	o(t) {
		return yn(this.h, 0, 2, Io(t, pn(this.h, Ms, 2))), this.l(t);
	}
	ua(t, e) {
		return (this.j = { classifications: [] }), ec(this, t, e), this.j;
	}
	va(t, e, n) {
		return (this.j = { classifications: [] }), nc(this, t, n, e), this.j;
	}
	m() {
		var t = new os();
		is(t, 'input_image'), is(t, 'norm_rect'), ss(t, 'classifications');
		const e = new Ki();
		er(e, vo, this.h);
		const n = new Qi();
		qi(n, 'mediapipe.tasks.vision.image_classifier.ImageClassifierGraph'),
			Ji(n, 'IMAGE:input_image'),
			Ji(n, 'NORM_RECT:norm_rect'),
			Zi(n, 'CLASSIFICATIONS:classifications'),
			n.o(e),
			rs(t, n),
			this.g.attachProtoListener('classifications', (t, e) => {
				(this.j = (function (t) {
					const e = {
						classifications: mn(t, As, 1).map((t) =>
							Po(
								pn(t, us, 4)?.g() ?? [],
								Tn(bn(t, 2), 0),
								kn(t, 3)
							)
						),
					};
					return (
						null != Qt(ze(t, 2)) &&
							(e.timestampMs = Tn(Qt(ze(t, 2)), 0)),
						e
					);
				})(ks(t))),
					ea(this, e);
			}),
			this.g.attachEmptyPacketListener('classifications', (t) => {
				ea(this, t);
			}),
			(t = t.g()),
			this.setGraph(new Uint8Array(t), !0);
	}
};
(Mc.prototype.classifyForVideo = Mc.prototype.va),
	(Mc.prototype.classify = Mc.prototype.ua),
	(Mc.prototype.setOptions = Mc.prototype.o),
	(Mc.createFromModelPath = function (t, e) {
		return Qa(Mc, t, { baseOptions: { modelAssetPath: e } });
	}),
	(Mc.createFromModelBuffer = function (t, e) {
		return Qa(Mc, t, { baseOptions: { modelAssetBuffer: e } });
	}),
	(Mc.createFromOptions = function (t, e) {
		return Qa(Mc, t, e);
	});
var Ic = class extends ic {
	constructor(t, e) {
		super(new Za(t, e), 'image_in', 'norm_rect', !0),
			(this.h = new Eo()),
			(this.embeddings = { embeddings: [] }),
			yn((t = this.h), 0, 1, (e = new Ds()));
	}
	get baseOptions() {
		return pn(this.h, Ds, 1);
	}
	set baseOptions(t) {
		yn(this.h, 0, 1, t);
	}
	o(t) {
		var e = this.h,
			n = pn(this.h, Ps, 2);
		return (
			(n = n ? n.clone() : new Ps()),
			void 0 !== t.l2Normalize
				? Sn(n, 1, t.l2Normalize)
				: 'l2Normalize' in t && $e(n, 1),
			void 0 !== t.quantize
				? Sn(n, 2, t.quantize)
				: 'quantize' in t && $e(n, 2),
			yn(e, 0, 2, n),
			this.l(t)
		);
	}
	Ba(t, e) {
		return ec(this, t, e), this.embeddings;
	}
	Ca(t, e, n) {
		return nc(this, t, n, e), this.embeddings;
	}
	m() {
		var t = new os();
		is(t, 'image_in'), is(t, 'norm_rect'), ss(t, 'embeddings_out');
		const e = new Ki();
		er(e, wo, this.h);
		const n = new Qi();
		qi(n, 'mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph'),
			Ji(n, 'IMAGE:image_in'),
			Ji(n, 'NORM_RECT:norm_rect'),
			Zi(n, 'EMBEDDINGS:embeddings_out'),
			n.o(e),
			rs(t, n),
			this.g.attachProtoListener('embeddings_out', (t, e) => {
				(t = Fs(t)),
					(this.embeddings = (function (t) {
						return {
							embeddings: mn(t, Ls, 1).map((t) => {
								const e = {
									headIndex: Tn(bn(t, 3), 0) ?? -1,
									headName: kn(t, 4) ?? '',
								};
								if (void 0 !== dn(t, Ss, cn(t, 1)))
									(t = en(
										(t = pn(t, Ss, cn(t, 1))),
										1,
										Ht,
										tn()
									)),
										(e.floatEmbedding = t.slice());
								else {
									const n = new Uint8Array(0);
									e.quantizedEmbedding =
										pn(t, xs, cn(t, 2))?.qa()?.h() ?? n;
								}
								return e;
							}),
							timestampMs: Tn(Qt(ze(t, 2)), 0),
						};
					})(t)),
					ea(this, e);
			}),
			this.g.attachEmptyPacketListener('embeddings_out', (t) => {
				ea(this, t);
			}),
			(t = t.g()),
			this.setGraph(new Uint8Array(t), !0);
	}
};
(Ic.cosineSimilarity = function (t, e) {
	if (t.floatEmbedding && e.floatEmbedding)
		t = Do(t.floatEmbedding, e.floatEmbedding);
	else {
		if (!t.quantizedEmbedding || !e.quantizedEmbedding)
			throw Error(
				'Cannot compute cosine similarity between quantized and float embeddings.'
			);
		t = Do(Uo(t.quantizedEmbedding), Uo(e.quantizedEmbedding));
	}
	return t;
}),
	(Ic.prototype.embedForVideo = Ic.prototype.Ca),
	(Ic.prototype.embed = Ic.prototype.Ba),
	(Ic.prototype.setOptions = Ic.prototype.o),
	(Ic.createFromModelPath = function (t, e) {
		return Qa(Ic, t, { baseOptions: { modelAssetPath: e } });
	}),
	(Ic.createFromModelBuffer = function (t, e) {
		return Qa(Ic, t, { baseOptions: { modelAssetBuffer: e } });
	}),
	(Ic.createFromOptions = function (t, e) {
		return Qa(Ic, t, e);
	});
var Pc = class {
	constructor(t, e, n) {
		(this.confidenceMasks = t),
			(this.categoryMask = e),
			(this.qualityScores = n);
	}
	close() {
		this.confidenceMasks?.forEach((t) => {
			t.close();
		}),
			this.categoryMask?.close();
	}
};
function Oc(t) {
	(t.categoryMask = void 0),
		(t.confidenceMasks = void 0),
		(t.qualityScores = void 0);
}
function Cc(t) {
	try {
		const e = new Pc(t.confidenceMasks, t.categoryMask, t.qualityScores);
		if (!t.j) return e;
		t.j(e);
	} finally {
		ia(t);
	}
}
Pc.prototype.close = Pc.prototype.close;
var Nc = class extends ic {
	constructor(t, e) {
		super(new Za(t, e), 'image_in', 'norm_rect', !1),
			(this.s = []),
			(this.outputCategoryMask = !1),
			(this.outputConfidenceMasks = !0),
			(this.h = new So()),
			(this.v = new To()),
			yn(this.h, 0, 3, this.v),
			yn((t = this.h), 0, 1, (e = new Ds()));
	}
	get baseOptions() {
		return pn(this.h, Ds, 1);
	}
	set baseOptions(t) {
		yn(this.h, 0, 1, t);
	}
	o(t) {
		return (
			void 0 !== t.displayNamesLocale
				? $e(this.h, 2, ne(t.displayNamesLocale))
				: 'displayNamesLocale' in t && $e(this.h, 2),
			'outputCategoryMask' in t &&
				(this.outputCategoryMask = t.outputCategoryMask ?? !1),
			'outputConfidenceMasks' in t &&
				(this.outputConfidenceMasks = t.outputConfidenceMasks ?? !0),
			super.l(t)
		);
	}
	J() {
		!(function (t) {
			const e = mn(t.ea(), Qi, 1).filter((t) =>
				kn(t, 1).includes(
					'mediapipe.tasks.TensorsToSegmentationCalculator'
				)
			);
			if (((t.s = []), e.length > 1))
				throw Error(
					'The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.'
				);
			1 === e.length &&
				(pn(e[0], Ki, 7)?.l()?.g() ?? new Map()).forEach((e, n) => {
					t.s[Number(n)] = kn(e, 1);
				});
		})(this);
	}
	fa(t, e, n) {
		const r = 'function' != typeof e ? e : {};
		return (
			(this.j = 'function' == typeof e ? e : n),
			Oc(this),
			ec(this, t, r),
			Cc(this)
		);
	}
	Na(t, e, n, r) {
		const i = 'function' != typeof n ? n : {};
		return (
			(this.j = 'function' == typeof n ? n : r),
			Oc(this),
			nc(this, t, i, e),
			Cc(this)
		);
	}
	Fa() {
		return this.s;
	}
	m() {
		var t = new os();
		is(t, 'image_in'), is(t, 'norm_rect');
		const e = new Ki();
		er(e, xo, this.h);
		const n = new Qi();
		qi(n, 'mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph'),
			Ji(n, 'IMAGE:image_in'),
			Ji(n, 'NORM_RECT:norm_rect'),
			n.o(e),
			rs(t, n),
			na(this, t),
			this.outputConfidenceMasks &&
				(ss(t, 'confidence_masks'),
				Zi(n, 'CONFIDENCE_MASKS:confidence_masks'),
				ra(this, 'confidence_masks'),
				this.g.da('confidence_masks', (t, e) => {
					(this.confidenceMasks = t.map((t) =>
						rc(this, t, !0, !this.j)
					)),
						ea(this, e);
				}),
				this.g.attachEmptyPacketListener('confidence_masks', (t) => {
					(this.confidenceMasks = []), ea(this, t);
				})),
			this.outputCategoryMask &&
				(ss(t, 'category_mask'),
				Zi(n, 'CATEGORY_MASK:category_mask'),
				ra(this, 'category_mask'),
				this.g.V('category_mask', (t, e) => {
					(this.categoryMask = rc(this, t, !1, !this.j)), ea(this, e);
				}),
				this.g.attachEmptyPacketListener('category_mask', (t) => {
					(this.categoryMask = void 0), ea(this, t);
				})),
			ss(t, 'quality_scores'),
			Zi(n, 'QUALITY_SCORES:quality_scores'),
			this.g.attachFloatVectorListener('quality_scores', (t, e) => {
				(this.qualityScores = t), ea(this, e);
			}),
			this.g.attachEmptyPacketListener('quality_scores', (t) => {
				(this.categoryMask = void 0), ea(this, t);
			}),
			(t = t.g()),
			this.setGraph(new Uint8Array(t), !0);
	}
};
(Nc.prototype.getLabels = Nc.prototype.Fa),
	(Nc.prototype.segmentForVideo = Nc.prototype.Na),
	(Nc.prototype.segment = Nc.prototype.fa),
	(Nc.prototype.setOptions = Nc.prototype.o),
	(Nc.createFromModelPath = function (t, e) {
		return Qa(Nc, t, { baseOptions: { modelAssetPath: e } });
	}),
	(Nc.createFromModelBuffer = function (t, e) {
		return Qa(Nc, t, { baseOptions: { modelAssetBuffer: e } });
	}),
	(Nc.createFromOptions = function (t, e) {
		return Qa(Nc, t, e);
	});
var Uc = class {
	constructor(t, e, n) {
		(this.confidenceMasks = t),
			(this.categoryMask = e),
			(this.qualityScores = n);
	}
	close() {
		this.confidenceMasks?.forEach((t) => {
			t.close();
		}),
			this.categoryMask?.close();
	}
};
Uc.prototype.close = Uc.prototype.close;
var Dc = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	Bc = [0, yi, -2],
	Gc = [0, ui, -3, Ei, ui, -1],
	jc = [0, Gc],
	Vc = [0, Gc, yi, -1],
	Xc = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	Hc = [0, ui, -1, Ei],
	Wc = class extends nr {
		constructor() {
			super();
		}
	},
	zc = class extends nr {
		constructor(t) {
			super(t);
		}
	},
	Kc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15],
	Yc = class extends nr {
		constructor() {
			super();
		}
	};
Yc.prototype.g = Pi([
	0,
	ki,
	[
		0,
		Kc,
		Si,
		Gc,
		Si,
		[0, Gc, Bc],
		Si,
		jc,
		Si,
		[0, jc, Bc],
		Si,
		Hc,
		Si,
		[0, ui, -3, Ei, Ri],
		Si,
		[0, ui, -3, Ei],
		Si,
		[0, Ai, ui, -2, Ei, yi, Ei, -1, 2, ui, Bc],
		Si,
		Vc,
		Si,
		[0, Vc, Bc],
		ui,
		Bc,
		Ai,
		Si,
		[0, ui, -3, Ei, Bc, -1],
		Si,
		[0, ki, Hc],
	],
	Ai,
	[0, Ai, yi, -1, Ei],
]);
var $c = class extends ic {
	constructor(t, e) {
		super(new Za(t, e), 'image_in', 'norm_rect_in', !1),
			(this.outputCategoryMask = !1),
			(this.outputConfidenceMasks = !0),
			(this.h = new So()),
			(this.s = new To()),
			yn(this.h, 0, 3, this.s),
			yn((t = this.h), 0, 1, (e = new Ds()));
	}
	get baseOptions() {
		return pn(this.h, Ds, 1);
	}
	set baseOptions(t) {
		yn(this.h, 0, 1, t);
	}
	o(t) {
		return (
			'outputCategoryMask' in t &&
				(this.outputCategoryMask = t.outputCategoryMask ?? !1),
			'outputConfidenceMasks' in t &&
				(this.outputConfidenceMasks = t.outputConfidenceMasks ?? !0),
			super.l(t)
		);
	}
	fa(t, e, n, r) {
		const i = 'function' != typeof n ? n : {};
		(this.j = 'function' == typeof n ? n : r),
			(this.qualityScores =
				this.categoryMask =
				this.confidenceMasks =
					void 0),
			(n = this.B + 1),
			(r = new Yc());
		const s = new zc();
		var o = new Dc();
		if ((xn(o, 1, 255), yn(s, 0, 12, o), e.keypoint && e.scribble))
			throw Error('Cannot provide both keypoint and scribble.');
		if (e.keypoint) {
			var a = new Xc();
			Sn(a, 3, !0),
				Ln(a, 1, e.keypoint.x),
				Ln(a, 2, e.keypoint.y),
				_n(s, 5, Kc, a);
		} else {
			if (!e.scribble)
				throw Error('Must provide either a keypoint or a scribble.');
			for (a of ((o = new Wc()), e.scribble))
				Sn((e = new Xc()), 3, !0),
					Ln(e, 1, a.x),
					Ln(e, 2, a.y),
					wn(o, 1, Xc, e);
			_n(s, 15, Kc, o);
		}
		wn(r, 1, zc, s),
			this.g.addProtoToStream(r.g(), 'drishti.RenderData', 'roi_in', n),
			ec(this, t, i);
		t: {
			try {
				const t = new Uc(
					this.confidenceMasks,
					this.categoryMask,
					this.qualityScores
				);
				if (!this.j) {
					var c = t;
					break t;
				}
				this.j(t);
			} finally {
				ia(this);
			}
			c = void 0;
		}
		return c;
	}
	m() {
		var t = new os();
		is(t, 'image_in'), is(t, 'roi_in'), is(t, 'norm_rect_in');
		const e = new Ki();
		er(e, xo, this.h);
		const n = new Qi();
		qi(
			n,
			'mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph'
		),
			Ji(n, 'IMAGE:image_in'),
			Ji(n, 'ROI:roi_in'),
			Ji(n, 'NORM_RECT:norm_rect_in'),
			n.o(e),
			rs(t, n),
			na(this, t),
			this.outputConfidenceMasks &&
				(ss(t, 'confidence_masks'),
				Zi(n, 'CONFIDENCE_MASKS:confidence_masks'),
				ra(this, 'confidence_masks'),
				this.g.da('confidence_masks', (t, e) => {
					(this.confidenceMasks = t.map((t) =>
						rc(this, t, !0, !this.j)
					)),
						ea(this, e);
				}),
				this.g.attachEmptyPacketListener('confidence_masks', (t) => {
					(this.confidenceMasks = []), ea(this, t);
				})),
			this.outputCategoryMask &&
				(ss(t, 'category_mask'),
				Zi(n, 'CATEGORY_MASK:category_mask'),
				ra(this, 'category_mask'),
				this.g.V('category_mask', (t, e) => {
					(this.categoryMask = rc(this, t, !1, !this.j)), ea(this, e);
				}),
				this.g.attachEmptyPacketListener('category_mask', (t) => {
					(this.categoryMask = void 0), ea(this, t);
				})),
			ss(t, 'quality_scores'),
			Zi(n, 'QUALITY_SCORES:quality_scores'),
			this.g.attachFloatVectorListener('quality_scores', (t, e) => {
				(this.qualityScores = t), ea(this, e);
			}),
			this.g.attachEmptyPacketListener('quality_scores', (t) => {
				(this.categoryMask = void 0), ea(this, t);
			}),
			(t = t.g()),
			this.setGraph(new Uint8Array(t), !0);
	}
};
($c.prototype.segment = $c.prototype.fa),
	($c.prototype.setOptions = $c.prototype.o),
	($c.createFromModelPath = function (t, e) {
		return Qa($c, t, { baseOptions: { modelAssetPath: e } });
	}),
	($c.createFromModelBuffer = function (t, e) {
		return Qa($c, t, { baseOptions: { modelAssetBuffer: e } });
	}),
	($c.createFromOptions = function (t, e) {
		return Qa($c, t, e);
	});
var qc = class extends ic {
	constructor(t, e) {
		super(new Za(t, e), 'input_frame_gpu', 'norm_rect', !1),
			(this.j = { detections: [] }),
			yn((t = this.h = new Lo()), 0, 1, (e = new Ds()));
	}
	get baseOptions() {
		return pn(this.h, Ds, 1);
	}
	set baseOptions(t) {
		yn(this.h, 0, 1, t);
	}
	o(t) {
		return (
			void 0 !== t.displayNamesLocale
				? $e(this.h, 2, ne(t.displayNamesLocale))
				: 'displayNamesLocale' in t && $e(this.h, 2),
			void 0 !== t.maxResults
				? xn(this.h, 3, t.maxResults)
				: 'maxResults' in t && $e(this.h, 3),
			void 0 !== t.scoreThreshold
				? Ln(this.h, 4, t.scoreThreshold)
				: 'scoreThreshold' in t && $e(this.h, 4),
			void 0 !== t.categoryAllowlist
				? Rn(this.h, 5, t.categoryAllowlist)
				: 'categoryAllowlist' in t && $e(this.h, 5),
			void 0 !== t.categoryDenylist
				? Rn(this.h, 6, t.categoryDenylist)
				: 'categoryDenylist' in t && $e(this.h, 6),
			this.l(t)
		);
	}
	D(t, e) {
		return (this.j = { detections: [] }), ec(this, t, e), this.j;
	}
	F(t, e, n) {
		return (this.j = { detections: [] }), nc(this, t, n, e), this.j;
	}
	m() {
		var t = new os();
		is(t, 'input_frame_gpu'), is(t, 'norm_rect'), ss(t, 'detections');
		const e = new Ki();
		er(e, Ro, this.h);
		const n = new Qi();
		qi(n, 'mediapipe.tasks.vision.ObjectDetectorGraph'),
			Ji(n, 'IMAGE:input_frame_gpu'),
			Ji(n, 'NORM_RECT:norm_rect'),
			Zi(n, 'DETECTIONS:detections'),
			n.o(e),
			rs(t, n),
			this.g.attachProtoVectorListener('detections', (t, e) => {
				for (const e of t) (t = ms(e)), this.j.detections.push(Oo(t));
				ea(this, e);
			}),
			this.g.attachEmptyPacketListener('detections', (t) => {
				ea(this, t);
			}),
			(t = t.g()),
			this.setGraph(new Uint8Array(t), !0);
	}
};
(qc.prototype.detectForVideo = qc.prototype.F),
	(qc.prototype.detect = qc.prototype.D),
	(qc.prototype.setOptions = qc.prototype.o),
	(qc.createFromModelPath = async function (t, e) {
		return Qa(qc, t, { baseOptions: { modelAssetPath: e } });
	}),
	(qc.createFromModelBuffer = function (t, e) {
		return Qa(qc, t, { baseOptions: { modelAssetBuffer: e } });
	}),
	(qc.createFromOptions = function (t, e) {
		return Qa(qc, t, e);
	});
var Jc = class {
	constructor(t, e, n) {
		(this.landmarks = t),
			(this.worldLandmarks = e),
			(this.segmentationMasks = n);
	}
	close() {
		this.segmentationMasks?.forEach((t) => {
			t.close();
		});
	}
};
function Zc(t) {
	(t.landmarks = []), (t.worldLandmarks = []), (t.segmentationMasks = void 0);
}
function Qc(t) {
	try {
		const e = new Jc(t.landmarks, t.worldLandmarks, t.segmentationMasks);
		if (!t.s) return e;
		t.s(e);
	} finally {
		ia(t);
	}
}
Jc.prototype.close = Jc.prototype.close;
var th = class extends ic {
	constructor(t, e) {
		super(new Za(t, e), 'image_in', 'norm_rect', !1),
			(this.landmarks = []),
			(this.worldLandmarks = []),
			(this.outputSegmentationMasks = !1),
			yn((t = this.h = new Fo()), 0, 1, (e = new Ds())),
			(this.v = new po()),
			yn(this.h, 0, 3, this.v),
			(this.j = new fo()),
			yn(this.h, 0, 2, this.j),
			xn(this.j, 4, 1),
			Ln(this.j, 2, 0.5),
			Ln(this.v, 2, 0.5),
			Ln(this.h, 4, 0.5);
	}
	get baseOptions() {
		return pn(this.h, Ds, 1);
	}
	set baseOptions(t) {
		yn(this.h, 0, 1, t);
	}
	o(t) {
		return (
			'numPoses' in t && xn(this.j, 4, t.numPoses ?? 1),
			'minPoseDetectionConfidence' in t &&
				Ln(this.j, 2, t.minPoseDetectionConfidence ?? 0.5),
			'minTrackingConfidence' in t &&
				Ln(this.h, 4, t.minTrackingConfidence ?? 0.5),
			'minPosePresenceConfidence' in t &&
				Ln(this.v, 2, t.minPosePresenceConfidence ?? 0.5),
			'outputSegmentationMasks' in t &&
				(this.outputSegmentationMasks =
					t.outputSegmentationMasks ?? !1),
			this.l(t)
		);
	}
	D(t, e, n) {
		const r = 'function' != typeof e ? e : {};
		return (
			(this.s = 'function' == typeof e ? e : n),
			Zc(this),
			ec(this, t, r),
			Qc(this)
		);
	}
	F(t, e, n, r) {
		const i = 'function' != typeof n ? n : {};
		return (
			(this.s = 'function' == typeof n ? n : r),
			Zc(this),
			nc(this, t, i, e),
			Qc(this)
		);
	}
	m() {
		var t = new os();
		is(t, 'image_in'),
			is(t, 'norm_rect'),
			ss(t, 'normalized_landmarks'),
			ss(t, 'world_landmarks'),
			ss(t, 'segmentation_masks');
		const e = new Ki();
		er(e, Mo, this.h);
		const n = new Qi();
		qi(n, 'mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph'),
			Ji(n, 'IMAGE:image_in'),
			Ji(n, 'NORM_RECT:norm_rect'),
			Zi(n, 'NORM_LANDMARKS:normalized_landmarks'),
			Zi(n, 'WORLD_LANDMARKS:world_landmarks'),
			n.o(e),
			rs(t, n),
			na(this, t),
			this.g.attachProtoVectorListener('normalized_landmarks', (t, e) => {
				this.landmarks = [];
				for (const e of t) (t = Es(e)), this.landmarks.push(Co(t));
				ea(this, e);
			}),
			this.g.attachEmptyPacketListener('normalized_landmarks', (t) => {
				(this.landmarks = []), ea(this, t);
			}),
			this.g.attachProtoVectorListener('world_landmarks', (t, e) => {
				this.worldLandmarks = [];
				for (const e of t) (t = _s(e)), this.worldLandmarks.push(No(t));
				ea(this, e);
			}),
			this.g.attachEmptyPacketListener('world_landmarks', (t) => {
				(this.worldLandmarks = []), ea(this, t);
			}),
			this.outputSegmentationMasks &&
				(Zi(n, 'SEGMENTATION_MASK:segmentation_masks'),
				ra(this, 'segmentation_masks'),
				this.g.da('segmentation_masks', (t, e) => {
					(this.segmentationMasks = t.map((t) =>
						rc(this, t, !0, !this.s)
					)),
						ea(this, e);
				}),
				this.g.attachEmptyPacketListener('segmentation_masks', (t) => {
					(this.segmentationMasks = []), ea(this, t);
				})),
			(t = t.g()),
			this.setGraph(new Uint8Array(t), !0);
	}
};
(th.prototype.detectForVideo = th.prototype.F),
	(th.prototype.detect = th.prototype.D),
	(th.prototype.setOptions = th.prototype.o),
	(th.createFromModelPath = function (t, e) {
		return Qa(th, t, { baseOptions: { modelAssetPath: e } });
	}),
	(th.createFromModelBuffer = function (t, e) {
		return Qa(th, t, { baseOptions: { modelAssetBuffer: e } });
	}),
	(th.createFromOptions = function (t, e) {
		return Qa(th, t, e);
	}),
	(th.POSE_CONNECTIONS = Sc);
export {
	Da as DrawingUtils,
	sc as FaceDetector,
	yc as FaceLandmarker,
	_c as FaceStylizer,
	Xo as FilesetResolver,
	bc as GestureRecognizer,
	kc as HandLandmarker,
	Fc as HolisticLandmarker,
	Mc as ImageClassifier,
	Ic as ImageEmbedder,
	Nc as ImageSegmenter,
	Pc as ImageSegmenterResult,
	$c as InteractiveSegmenter,
	Uc as InteractiveSegmenterResult,
	Ka as MPImage,
	xa as MPMask,
	qc as ObjectDetector,
	th as PoseLandmarker,
	ic as VisionTaskRunner,
};
//# sourceMappingURL=vision_bundle_mjs.js.map
