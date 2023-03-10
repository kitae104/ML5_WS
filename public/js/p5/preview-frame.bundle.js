!(function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { exports: {}, id: r, loaded: !1 });
    return e[r].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports;
  }
  var n = {};
  return (t.m = e), (t.c = n), (t.p = ""), t(0);
})({
  0: function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n = "//cdnjs.cloudflare.com/ajax/libs/p5.js/" + e + "/p5.js",
        r = document.createElement("script");
      (t = t || function () {}),
        (r.onload = t),
        r.setAttribute("src", n),
        document.body.appendChild(r);
    }
    function o(e, t, n) {
      var r = {
          wasTriggered: !1,
          getLineNumber: function () {
            for (var t = i[0], n = 1, r = 0; t > r; r++) "\n" === e[r] && n++;
            return n;
          },
        },
        o = Date.now(),
        i = null;
      return (
        (a[t] = function (e) {
          if (Date.now() - o > n)
            throw (
              ((r.wasTriggered = !0),
              (i = e),
              new Error("Loop took over " + n + " ms to run"))
            );
        }),
        setInterval(function () {
          o = Date.now();
        }, n / 2),
        r
      );
    }
    function i(e) {
      var t = document.createElement("base");
      t.setAttribute("href", e), document.head.appendChild(t);
    }
    function s(e, t, n, s, c, u) {
      var f = document.createElement("script"),
        l = o(e, s, n);
      c && i(c),
        (f.textContent = e),
        a.addEventListener("error", function (e) {
          var t = e.message,
            n = void 0;
          l.wasTriggered
            ? ((t = "Your loop is taking too long to run."),
              (n = l.getLineNumber()))
            : "number" != typeof e.lineno ||
              ("" !== e.filename && e.filename !== window.location.href) ||
              (n = e.lineno);
          try {
            a.noLoop();
          } catch (e) {}
          u(t, n);
        }),
        document.body.appendChild(f),
        r(t);
    }
    n(190);
    var a = window;
    a.startSketch = s;
  },
  184: function (e, t) {
    e.exports = function () {
      var e = [];
      return (
        (e.toString = function () {
          for (var e = [], t = 0; t < this.length; t++) {
            var n = this[t];
            n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1]);
          }
          return e.join("");
        }),
        (e.i = function (t, n) {
          "string" == typeof t && (t = [[null, t, ""]]);
          for (var r = {}, o = 0; o < this.length; o++) {
            var i = this[o][0];
            "number" == typeof i && (r[i] = !0);
          }
          for (o = 0; o < t.length; o++) {
            var s = t[o];
            ("number" == typeof s[0] && r[s[0]]) ||
              (n && !s[2]
                ? (s[2] = n)
                : n && (s[2] = "(" + s[2] + ") and (" + n + ")"),
              e.push(s));
          }
        }),
        e
      );
    };
  },
  185: function (e, t, n) {
    function r(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          o = p[r.id];
        if (o) {
          o.refs++;
          for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);
          for (; i < r.parts.length; i++) o.parts.push(u(r.parts[i], t));
        } else {
          for (var s = [], i = 0; i < r.parts.length; i++)
            s.push(u(r.parts[i], t));
          p[r.id] = { id: r.id, refs: 1, parts: s };
        }
      }
    }
    function o(e) {
      for (var t = [], n = {}, r = 0; r < e.length; r++) {
        var o = e[r],
          i = o[0],
          s = o[1],
          a = o[2],
          c = o[3],
          u = { css: s, media: a, sourceMap: c };
        n[i] ? n[i].parts.push(u) : t.push((n[i] = { id: i, parts: [u] }));
      }
      return t;
    }
    function i(e, t) {
      var n = v(),
        r = g[g.length - 1];
      if ("top" === e.insertAt)
        r
          ? r.nextSibling
            ? n.insertBefore(t, r.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          g.push(t);
      else {
        if ("bottom" !== e.insertAt)
          throw new Error(
            "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
          );
        n.appendChild(t);
      }
    }
    function s(e) {
      e.parentNode.removeChild(e);
      var t = g.indexOf(e);
      t >= 0 && g.splice(t, 1);
    }
    function a(e) {
      var t = document.createElement("style");
      return (t.type = "text/css"), i(e, t), t;
    }
    function c(e) {
      var t = document.createElement("link");
      return (t.rel = "stylesheet"), i(e, t), t;
    }
    function u(e, t) {
      var n, r, o;
      if (t.singleton) {
        var i = b++;
        (n = m || (m = a(t))),
          (r = f.bind(null, n, i, !1)),
          (o = f.bind(null, n, i, !0));
      } else
        e.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((n = c(t)),
            (r = d.bind(null, n)),
            (o = function () {
              s(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = a(t)),
            (r = l.bind(null, n)),
            (o = function () {
              s(n);
            }));
      return (
        r(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else o();
        }
      );
    }
    function f(e, t, n, r) {
      var o = n ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = y(t, o);
      else {
        var i = document.createTextNode(o),
          s = e.childNodes;
        s[t] && e.removeChild(s[t]),
          s.length ? e.insertBefore(i, s[t]) : e.appendChild(i);
      }
    }
    function l(e, t) {
      var n = t.css,
        r = t.media;
      if ((r && e.setAttribute("media", r), e.styleSheet))
        e.styleSheet.cssText = n;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(n));
      }
    }
    function d(e, t) {
      var n = t.css,
        r = t.sourceMap;
      r &&
        (n +=
          "\n/*# sourceMappingURL=data:application/json;base64," +
          btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
          " */");
      var o = new Blob([n], { type: "text/css" }),
        i = e.href;
      (e.href = URL.createObjectURL(o)), i && URL.revokeObjectURL(i);
    }
    var p = {},
      A = function (e) {
        var t;
        return function () {
          return "undefined" == typeof t && (t = e.apply(this, arguments)), t;
        };
      },
      h = A(function () {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
      }),
      v = A(function () {
        return document.head || document.getElementsByTagName("head")[0];
      }),
      m = null,
      b = 0,
      g = [];
    e.exports = function (e, t) {
      (t = t || {}),
        "undefined" == typeof t.singleton && (t.singleton = h()),
        "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
      var n = o(e);
      return (
        r(n, t),
        function (e) {
          for (var i = [], s = 0; s < n.length; s++) {
            var a = n[s],
              c = p[a.id];
            c.refs--, i.push(c);
          }
          if (e) {
            var u = o(e);
            r(u, t);
          }
          for (var s = 0; s < i.length; s++) {
            var c = i[s];
            if (0 === c.refs) {
              for (var f = 0; f < c.parts.length; f++) c.parts[f]();
              delete p[c.id];
            }
          }
        }
      );
    };
    var y = (function () {
      var e = [];
      return function (t, n) {
        return (e[t] = n), e.filter(Boolean).join("\n");
      };
    })();
  },
  190: function (e, t, n) {
    var r = n(191);
    "string" == typeof r && (r = [[e.id, r, ""]]);
    n(185)(r, {});
    r.locals && (e.exports = r.locals);
  },
  191: function (e, t, n) {
    (t = e.exports = n(184)()),
      t.push([
        e.id,
        "body,html{height:100%}body{margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}",
        "",
        {
          version: 3,
          sources: ["/./css/preview-frame.css"],
          names: [],
          mappings:
            "AAAA,UACE,WAAa,CACd,AAED,KACE,SAAU,AACV,oBAAc,AAAd,qBAAc,AAAd,oBAAc,AAAd,aAAc,AAGd,wBAAwB,AAAxB,+BAAwB,AAAxB,qBAAwB,AAAxB,uBAAwB,AAGxB,yBAAoB,AAApB,2BAAoB,AAApB,sBAAoB,AAApB,kBAAoB,CACrB",
          file: "preview-frame.css",
          sourcesContent: [
            "html, body {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  display: flex;\r\n\r\n  /* This centers our sketch horizontally. */\r\n  justify-content: center;\r\n\r\n  /* This centers our sketch vertically. */\r\n  align-items: center;\r\n}\r\n",
          ],
          sourceRoot: "webpack://",
        },
      ]);
  },
});
//# sourceMappingURL=preview-frame.bundle.js.map
