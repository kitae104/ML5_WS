!(function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { exports: {}, id: r, loaded: !1 });
    return e[r].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports;
  }
  var n = {};
  return (t.m = e), (t.c = n), (t.p = ""), t(0);
})([
  function (e, t, n) {
    "use strict";
    function r() {
      var e = document.referrer,
        t = a.parse(window.location.search, !0).query,
        n = e + "_" + t.id,
        r = t.baseSketchURL || e,
        p = "on" === t.autoplay,
        d = t.sketch || c,
        f = t.p5version || s.P5_VERSION,
        h = parseInt(t.previewWidth);
      isNaN(h) && (h = s.PREVIEW_WIDTH),
        (d = d.replace(/\r\n/g, "\n").trim()),
        i.render(
          o.createElement(l["default"], {
            initialContent: d,
            autosaver: new u.SessionStorageAutosaver(n),
            baseSketchURL: r,
            p5version: f,
            previewWidth: h,
            autoplay: p,
          }),
          document.getElementById("app-holder")
        );
    }
    var o = n(1),
      i = n(158),
      a = n(159),
      s = n(165),
      u = n(166),
      l = n(167),
      c = n(181);
    n(182), n(186), n(188), window.addEventListener("load", r);
  },
  function (e, t, n) {
    "use strict";
    e.exports = n(2);
  },
  function (e, t, n) {
    "use strict";
    var r = n(3),
      o = n(148),
      i = n(152),
      a = n(39),
      s = n(157),
      u = {};
    a(u, i),
      a(u, {
        findDOMNode: s(
          "findDOMNode",
          "ReactDOM",
          "react-dom",
          r,
          r.findDOMNode
        ),
        render: s("render", "ReactDOM", "react-dom", r, r.render),
        unmountComponentAtNode: s(
          "unmountComponentAtNode",
          "ReactDOM",
          "react-dom",
          r,
          r.unmountComponentAtNode
        ),
        renderToString: s(
          "renderToString",
          "ReactDOMServer",
          "react-dom/server",
          o,
          o.renderToString
        ),
        renderToStaticMarkup: s(
          "renderToStaticMarkup",
          "ReactDOMServer",
          "react-dom/server",
          o,
          o.renderToStaticMarkup
        ),
      }),
      (u.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r),
      (u.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o),
      (e.exports = u);
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(5),
        o = n(6),
        i = n(71),
        a = n(45),
        s = n(28),
        u = n(18),
        l = n(50),
        c = n(54),
        p = n(146),
        d = n(91),
        f = n(147),
        h = n(25);
      i.inject();
      var m = u.measure("React", "render", s.render),
        v = {
          findDOMNode: d,
          render: m,
          unmountComponentAtNode: s.unmountComponentAtNode,
          version: p,
          unstable_batchedUpdates: c.batchedUpdates,
          unstable_renderSubtreeIntoContainer: f,
        };
      if (
        ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject &&
          __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
            CurrentOwner: r,
            InstanceHandles: a,
            Mount: s,
            Reconciler: l,
            TextComponent: o,
          }),
        "production" !== t.env.NODE_ENV)
      ) {
        var g = n(9);
        if (g.canUseDOM && window.top === window.self) {
          "undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            ((navigator.userAgent.indexOf("Chrome") > -1 &&
              -1 === navigator.userAgent.indexOf("Edge")) ||
              navigator.userAgent.indexOf("Firefox") > -1) &&
            console.debug(
              "Download the React DevTools for a better development experience: https://fb.me/react-devtools"
            );
          var y = document.documentMode && document.documentMode < 8;
          "production" !== t.env.NODE_ENV
            ? h(
                !y,
                'Internet Explorer is running in compatibility mode; please add the following tag to your HTML to prevent this from happening: <meta http-equiv="X-UA-Compatible" content="IE=edge" />'
              )
            : void 0;
          for (
            var C = [
                Array.isArray,
                Array.prototype.every,
                Array.prototype.forEach,
                Array.prototype.indexOf,
                Array.prototype.map,
                Date.now,
                Function.prototype.bind,
                Object.keys,
                String.prototype.split,
                String.prototype.trim,
                Object.create,
                Object.freeze,
              ],
              A = 0;
            A < C.length;
            A++
          )
            if (!C[A]) {
              console.error(
                "One or more ES5 shim/shams expected by React are not available: https://fb.me/react-warning-polyfills"
              );
              break;
            }
        }
      }
      e.exports = v;
    }.call(t, n(4)));
  },
  function (e, t) {
    function n() {
      (l = !1), a.length ? (u = a.concat(u)) : (c = -1), u.length && r();
    }
    function r() {
      if (!l) {
        var e = setTimeout(n);
        l = !0;
        for (var t = u.length; t; ) {
          for (a = u, u = []; ++c < t; ) a && a[c].run();
          (c = -1), (t = u.length);
        }
        (a = null), (l = !1), clearTimeout(e);
      }
    }
    function o(e, t) {
      (this.fun = e), (this.array = t);
    }
    function i() {}
    var a,
      s = (e.exports = {}),
      u = [],
      l = !1,
      c = -1;
    (s.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      u.push(new o(e, t)), 1 !== u.length || l || setTimeout(r, 0);
    }),
      (o.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (s.title = "browser"),
      (s.browser = !0),
      (s.env = {}),
      (s.argv = []),
      (s.version = ""),
      (s.versions = {}),
      (s.on = i),
      (s.addListener = i),
      (s.once = i),
      (s.off = i),
      (s.removeListener = i),
      (s.removeAllListeners = i),
      (s.emit = i),
      (s.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (s.cwd = function () {
        return "/";
      }),
      (s.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (s.umask = function () {
        return 0;
      });
  },
  function (e, t) {
    "use strict";
    var n = { current: null };
    e.exports = n;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(7),
        o = n(22),
        i = n(26),
        a = n(28),
        s = n(39),
        u = n(21),
        l = n(20),
        c = n(70),
        p = function (e) {};
      s(p.prototype, {
        construct: function (e) {
          (this._currentElement = e),
            (this._stringText = "" + e),
            (this._rootNodeID = null),
            (this._mountIndex = 0);
        },
        mountComponent: function (e, n, r) {
          if (
            ("production" !== t.env.NODE_ENV &&
              r[c.ancestorInfoContextKey] &&
              c("span", null, r[c.ancestorInfoContextKey]),
            (this._rootNodeID = e),
            n.useCreateElement)
          ) {
            var i = r[a.ownerDocumentContextKey],
              s = i.createElement("span");
            return (
              o.setAttributeForID(s, e), a.getID(s), l(s, this._stringText), s
            );
          }
          var p = u(this._stringText);
          return n.renderToStaticMarkup
            ? p
            : "<span " + o.createMarkupForID(e) + ">" + p + "</span>";
        },
        receiveComponent: function (e, t) {
          if (e !== this._currentElement) {
            this._currentElement = e;
            var n = "" + e;
            if (n !== this._stringText) {
              this._stringText = n;
              var o = a.getNode(this._rootNodeID);
              r.updateTextContent(o, n);
            }
          }
        },
        unmountComponent: function () {
          i.unmountIDFromEnvironment(this._rootNodeID);
        },
      }),
        (e.exports = p);
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e, t, n) {
        var r = n >= e.childNodes.length ? null : e.childNodes.item(n);
        e.insertBefore(t, r);
      }
      var o = n(8),
        i = n(16),
        a = n(18),
        s = n(19),
        u = n(20),
        l = n(13),
        c = {
          dangerouslyReplaceNodeWithMarkup: o.dangerouslyReplaceNodeWithMarkup,
          updateTextContent: u,
          processUpdates: function (e, n) {
            for (var a, c = null, p = null, d = 0; d < e.length; d++)
              if (
                ((a = e[d]),
                a.type === i.MOVE_EXISTING || a.type === i.REMOVE_NODE)
              ) {
                var f = a.fromIndex,
                  h = a.parentNode.childNodes[f],
                  m = a.parentID;
                h
                  ? void 0
                  : "production" !== t.env.NODE_ENV
                  ? l(
                      !1,
                      "processUpdates(): Unable to find child %s of element. This probably means the DOM was unexpectedly mutated (e.g., by the browser), usually due to forgetting a <tbody> when using tables, nesting tags like <form>, <p>, or <a>, or using non-SVG elements in an <svg> parent. Try inspecting the child nodes of the element with React ID `%s`.",
                      f,
                      m
                    )
                  : l(!1),
                  (c = c || {}),
                  (c[m] = c[m] || []),
                  (c[m][f] = h),
                  (p = p || []),
                  p.push(h);
              }
            var v;
            if (
              ((v =
                n.length && "string" == typeof n[0]
                  ? o.dangerouslyRenderMarkup(n)
                  : n),
              p)
            )
              for (var g = 0; g < p.length; g++)
                p[g].parentNode.removeChild(p[g]);
            for (var y = 0; y < e.length; y++)
              switch (((a = e[y]), a.type)) {
                case i.INSERT_MARKUP:
                  r(a.parentNode, v[a.markupIndex], a.toIndex);
                  break;
                case i.MOVE_EXISTING:
                  r(a.parentNode, c[a.parentID][a.fromIndex], a.toIndex);
                  break;
                case i.SET_MARKUP:
                  s(a.parentNode, a.content);
                  break;
                case i.TEXT_CONTENT:
                  u(a.parentNode, a.content);
                  break;
                case i.REMOVE_NODE:
              }
          },
        };
      a.measureMethods(c, "DOMChildrenOperations", {
        updateTextContent: "updateTextContent",
      }),
        (e.exports = c);
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        return e.substring(1, e.indexOf(" "));
      }
      var o = n(9),
        i = n(10),
        a = n(15),
        s = n(14),
        u = n(13),
        l = /^(<[^ \/>]+)/,
        c = "data-danger-index",
        p = {
          dangerouslyRenderMarkup: function (e) {
            o.canUseDOM
              ? void 0
              : "production" !== t.env.NODE_ENV
              ? u(
                  !1,
                  "dangerouslyRenderMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString for server rendering."
                )
              : u(!1);
            for (var n, p = {}, d = 0; d < e.length; d++)
              e[d]
                ? void 0
                : "production" !== t.env.NODE_ENV
                ? u(!1, "dangerouslyRenderMarkup(...): Missing markup.")
                : u(!1),
                (n = r(e[d])),
                (n = s(n) ? n : "*"),
                (p[n] = p[n] || []),
                (p[n][d] = e[d]);
            var f = [],
              h = 0;
            for (n in p)
              if (p.hasOwnProperty(n)) {
                var m,
                  v = p[n];
                for (m in v)
                  if (v.hasOwnProperty(m)) {
                    var g = v[m];
                    v[m] = g.replace(l, "$1 " + c + '="' + m + '" ');
                  }
                for (var y = i(v.join(""), a), C = 0; C < y.length; ++C) {
                  var A = y[C];
                  A.hasAttribute && A.hasAttribute(c)
                    ? ((m = +A.getAttribute(c)),
                      A.removeAttribute(c),
                      f.hasOwnProperty(m)
                        ? "production" !== t.env.NODE_ENV
                          ? u(
                              !1,
                              "Danger: Assigning to an already-occupied result index."
                            )
                          : u(!1)
                        : void 0,
                      (f[m] = A),
                      (h += 1))
                    : "production" !== t.env.NODE_ENV &&
                      console.error("Danger: Discarding unexpected node:", A);
                }
              }
            return (
              h !== f.length
                ? "production" !== t.env.NODE_ENV
                  ? u(
                      !1,
                      "Danger: Did not assign to every index of resultList."
                    )
                  : u(!1)
                : void 0,
              f.length !== e.length
                ? "production" !== t.env.NODE_ENV
                  ? u(
                      !1,
                      "Danger: Expected markup to render %s nodes, but rendered %s.",
                      e.length,
                      f.length
                    )
                  : u(!1)
                : void 0,
              f
            );
          },
          dangerouslyReplaceNodeWithMarkup: function (e, n) {
            o.canUseDOM
              ? void 0
              : "production" !== t.env.NODE_ENV
              ? u(
                  !1,
                  "dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString() for server rendering."
                )
              : u(!1),
              n
                ? void 0
                : "production" !== t.env.NODE_ENV
                ? u(
                    !1,
                    "dangerouslyReplaceNodeWithMarkup(...): Missing markup."
                  )
                : u(!1),
              "html" === e.tagName.toLowerCase()
                ? "production" !== t.env.NODE_ENV
                  ? u(
                      !1,
                      "dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See ReactDOMServer.renderToString()."
                    )
                  : u(!1)
                : void 0;
            var r;
            (r = "string" == typeof n ? i(n, a)[0] : n),
              e.parentNode.replaceChild(r, e);
          },
        };
      e.exports = p;
    }.call(t, n(4)));
  },
  function (e, t) {
    "use strict";
    var n = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      ),
      r = {
        canUseDOM: n,
        canUseWorkers: "undefined" != typeof Worker,
        canUseEventListeners:
          n && !(!window.addEventListener && !window.attachEvent),
        canUseViewport: n && !!window.screen,
        isInWorker: !n,
      };
    e.exports = r;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        var t = e.match(c);
        return t && t[1].toLowerCase();
      }
      function o(e, n) {
        var o = l;
        l
          ? void 0
          : "production" !== t.env.NODE_ENV
          ? u(!1, "createNodesFromMarkup dummy not initialized")
          : u(!1);
        var i = r(e),
          c = i && s(i);
        if (c) {
          o.innerHTML = c[1] + e + c[2];
          for (var p = c[0]; p--; ) o = o.lastChild;
        } else o.innerHTML = e;
        var d = o.getElementsByTagName("script");
        d.length &&
          (n
            ? void 0
            : "production" !== t.env.NODE_ENV
            ? u(
                !1,
                "createNodesFromMarkup(...): Unexpected <script> element rendered."
              )
            : u(!1),
          a(d).forEach(n));
        for (var f = a(o.childNodes); o.lastChild; ) o.removeChild(o.lastChild);
        return f;
      }
      var i = n(9),
        a = n(11),
        s = n(14),
        u = n(13),
        l = i.canUseDOM ? document.createElement("div") : null,
        c = /^\s*<(\w+)/;
      e.exports = o;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return (
        !!e &&
        ("object" == typeof e || "function" == typeof e) &&
        "length" in e &&
        !("setInterval" in e) &&
        "number" != typeof e.nodeType &&
        (Array.isArray(e) || "callee" in e || "item" in e)
      );
    }
    function o(e) {
      return r(e) ? (Array.isArray(e) ? e.slice() : i(e)) : [e];
    }
    var i = n(12);
    e.exports = o;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        var n = e.length;
        if (
          (Array.isArray(e) || ("object" != typeof e && "function" != typeof e)
            ? "production" !== t.env.NODE_ENV
              ? o(!1, "toArray: Array-like object expected")
              : o(!1)
            : void 0,
          "number" != typeof n
            ? "production" !== t.env.NODE_ENV
              ? o(!1, "toArray: Object needs a length property")
              : o(!1)
            : void 0,
          0 === n || n - 1 in e
            ? void 0
            : "production" !== t.env.NODE_ENV
            ? o(!1, "toArray: Object should have keys for indices")
            : o(!1),
          e.hasOwnProperty)
        )
          try {
            return Array.prototype.slice.call(e);
          } catch (r) {}
        for (var i = Array(n), a = 0; n > a; a++) i[a] = e[a];
        return i;
      }
      var o = n(13);
      e.exports = r;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function n(e, n, r, o, i, a, s, u) {
        if ("production" !== t.env.NODE_ENV && void 0 === n)
          throw new Error("invariant requires an error message argument");
        if (!e) {
          var l;
          if (void 0 === n)
            l = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var c = [r, o, i, a, s, u],
              p = 0;
            (l = new Error(
              n.replace(/%s/g, function () {
                return c[p++];
              })
            )),
              (l.name = "Invariant Violation");
          }
          throw ((l.framesToPop = 1), l);
        }
      }
      e.exports = n;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        return (
          a
            ? void 0
            : "production" !== t.env.NODE_ENV
            ? i(!1, "Markup wrapping node not initialized")
            : i(!1),
          d.hasOwnProperty(e) || (e = "*"),
          s.hasOwnProperty(e) ||
            ("*" === e
              ? (a.innerHTML = "<link />")
              : (a.innerHTML = "<" + e + "></" + e + ">"),
            (s[e] = !a.firstChild)),
          s[e] ? d[e] : null
        );
      }
      var o = n(9),
        i = n(13),
        a = o.canUseDOM ? document.createElement("div") : null,
        s = {},
        u = [1, '<select multiple="true">', "</select>"],
        l = [1, "<table>", "</table>"],
        c = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        p = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
        d = {
          "*": [1, "?<div>", "</div>"],
          area: [1, "<map>", "</map>"],
          col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
          legend: [1, "<fieldset>", "</fieldset>"],
          param: [1, "<object>", "</object>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          optgroup: u,
          option: u,
          caption: l,
          colgroup: l,
          tbody: l,
          tfoot: l,
          thead: l,
          td: c,
          th: c,
        },
        f = [
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "g",
          "image",
          "line",
          "linearGradient",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "text",
          "tspan",
        ];
      f.forEach(function (e) {
        (d[e] = p), (s[e] = !0);
      }),
        (e.exports = r);
    }.call(t, n(4)));
  },
  function (e, t) {
    "use strict";
    function n(e) {
      return function () {
        return e;
      };
    }
    function r() {}
    (r.thatReturns = n),
      (r.thatReturnsFalse = n(!1)),
      (r.thatReturnsTrue = n(!0)),
      (r.thatReturnsNull = n(null)),
      (r.thatReturnsThis = function () {
        return this;
      }),
      (r.thatReturnsArgument = function (e) {
        return e;
      }),
      (e.exports = r);
  },
  function (e, t, n) {
    "use strict";
    var r = n(17),
      o = r({
        INSERT_MARKUP: null,
        MOVE_EXISTING: null,
        REMOVE_NODE: null,
        SET_MARKUP: null,
        TEXT_CONTENT: null,
      });
    e.exports = o;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(13),
        o = function (e) {
          var n,
            o = {};
          e instanceof Object && !Array.isArray(e)
            ? void 0
            : "production" !== t.env.NODE_ENV
            ? r(!1, "keyMirror(...): Argument must be an object.")
            : r(!1);
          for (n in e) e.hasOwnProperty(n) && (o[n] = n);
          return o;
        };
      e.exports = o;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function n(e, t, n) {
        return n;
      }
      var r = {
        enableMeasure: !1,
        storedMeasure: n,
        measureMethods: function (e, n, o) {
          if ("production" !== t.env.NODE_ENV)
            for (var i in o)
              o.hasOwnProperty(i) && (e[i] = r.measure(n, o[i], e[i]));
        },
        measure: function (e, n, o) {
          if ("production" !== t.env.NODE_ENV) {
            var i = null,
              a = function () {
                return r.enableMeasure
                  ? (i || (i = r.storedMeasure(e, n, o)),
                    i.apply(this, arguments))
                  : o.apply(this, arguments);
              };
            return (a.displayName = e + "_" + n), a;
          }
          return o;
        },
        injection: {
          injectMeasure: function (e) {
            r.storedMeasure = e;
          },
        },
      };
      e.exports = r;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    "use strict";
    var r = n(9),
      o = /^[ \r\n\t\f]/,
      i = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,
      a = function (e, t) {
        e.innerHTML = t;
      };
    if (
      ("undefined" != typeof MSApp &&
        MSApp.execUnsafeLocalFunction &&
        (a = function (e, t) {
          MSApp.execUnsafeLocalFunction(function () {
            e.innerHTML = t;
          });
        }),
      r.canUseDOM)
    ) {
      var s = document.createElement("div");
      (s.innerHTML = " "),
        "" === s.innerHTML &&
          (a = function (e, t) {
            if (
              (e.parentNode && e.parentNode.replaceChild(e, e),
              o.test(t) || ("<" === t[0] && i.test(t)))
            ) {
              e.innerHTML = String.fromCharCode(65279) + t;
              var n = e.firstChild;
              1 === n.data.length ? e.removeChild(n) : n.deleteData(0, 1);
            } else e.innerHTML = t;
          });
    }
    e.exports = a;
  },
  function (e, t, n) {
    "use strict";
    var r = n(9),
      o = n(21),
      i = n(19),
      a = function (e, t) {
        e.textContent = t;
      };
    r.canUseDOM &&
      ("textContent" in document.documentElement ||
        (a = function (e, t) {
          i(e, o(t));
        })),
      (e.exports = a);
  },
  function (e, t) {
    "use strict";
    function n(e) {
      return o[e];
    }
    function r(e) {
      return ("" + e).replace(i, n);
    }
    var o = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        '"': "&quot;",
        "'": "&#x27;",
      },
      i = /[&><"']/g;
    e.exports = r;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        return p.hasOwnProperty(e)
          ? !0
          : c.hasOwnProperty(e)
          ? !1
          : l.test(e)
          ? ((p[e] = !0), !0)
          : ((c[e] = !0),
            "production" !== t.env.NODE_ENV
              ? u(!1, "Invalid attribute name: `%s`", e)
              : void 0,
            !1);
      }
      function o(e, t) {
        return (
          null == t ||
          (e.hasBooleanValue && !t) ||
          (e.hasNumericValue && isNaN(t)) ||
          (e.hasPositiveNumericValue && 1 > t) ||
          (e.hasOverloadedBooleanValue && t === !1)
        );
      }
      var i = n(23),
        a = n(18),
        s = n(24),
        u = n(25),
        l = /^[a-zA-Z_][\w\.\-]*$/,
        c = {},
        p = {};
      if ("production" !== t.env.NODE_ENV)
        var d = { children: !0, dangerouslySetInnerHTML: !0, key: !0, ref: !0 },
          f = {},
          h = function (e) {
            if (
              !((d.hasOwnProperty(e) && d[e]) || (f.hasOwnProperty(e) && f[e]))
            ) {
              f[e] = !0;
              var n = e.toLowerCase(),
                r = i.isCustomAttribute(n)
                  ? n
                  : i.getPossibleStandardName.hasOwnProperty(n)
                  ? i.getPossibleStandardName[n]
                  : null;
              "production" !== t.env.NODE_ENV
                ? u(
                    null == r,
                    "Unknown DOM property %s. Did you mean %s?",
                    e,
                    r
                  )
                : void 0;
            }
          };
      var m = {
        createMarkupForID: function (e) {
          return i.ID_ATTRIBUTE_NAME + "=" + s(e);
        },
        setAttributeForID: function (e, t) {
          e.setAttribute(i.ID_ATTRIBUTE_NAME, t);
        },
        createMarkupForProperty: function (e, n) {
          var r = i.properties.hasOwnProperty(e) ? i.properties[e] : null;
          if (r) {
            if (o(r, n)) return "";
            var a = r.attributeName;
            return r.hasBooleanValue ||
              (r.hasOverloadedBooleanValue && n === !0)
              ? a + '=""'
              : a + "=" + s(n);
          }
          return i.isCustomAttribute(e)
            ? null == n
              ? ""
              : e + "=" + s(n)
            : ("production" !== t.env.NODE_ENV && h(e), null);
        },
        createMarkupForCustomAttribute: function (e, t) {
          return r(e) && null != t ? e + "=" + s(t) : "";
        },
        setValueForProperty: function (e, n, r) {
          var a = i.properties.hasOwnProperty(n) ? i.properties[n] : null;
          if (a) {
            var s = a.mutationMethod;
            if (s) s(e, r);
            else if (o(a, r)) this.deleteValueForProperty(e, n);
            else if (a.mustUseAttribute) {
              var u = a.attributeName,
                l = a.attributeNamespace;
              l
                ? e.setAttributeNS(l, u, "" + r)
                : a.hasBooleanValue || (a.hasOverloadedBooleanValue && r === !0)
                ? e.setAttribute(u, "")
                : e.setAttribute(u, "" + r);
            } else {
              var c = a.propertyName;
              (a.hasSideEffects && "" + e[c] == "" + r) || (e[c] = r);
            }
          } else
            i.isCustomAttribute(n)
              ? m.setValueForAttribute(e, n, r)
              : "production" !== t.env.NODE_ENV && h(n);
        },
        setValueForAttribute: function (e, t, n) {
          r(t) &&
            (null == n ? e.removeAttribute(t) : e.setAttribute(t, "" + n));
        },
        deleteValueForProperty: function (e, n) {
          var r = i.properties.hasOwnProperty(n) ? i.properties[n] : null;
          if (r) {
            var o = r.mutationMethod;
            if (o) o(e, void 0);
            else if (r.mustUseAttribute) e.removeAttribute(r.attributeName);
            else {
              var a = r.propertyName,
                s = i.getDefaultValueForProperty(e.nodeName, a);
              (r.hasSideEffects && "" + e[a] === s) || (e[a] = s);
            }
          } else
            i.isCustomAttribute(n)
              ? e.removeAttribute(n)
              : "production" !== t.env.NODE_ENV && h(n);
        },
      };
      a.measureMethods(m, "DOMPropertyOperations", {
        setValueForProperty: "setValueForProperty",
        setValueForAttribute: "setValueForAttribute",
        deleteValueForProperty: "deleteValueForProperty",
      }),
        (e.exports = m);
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e, t) {
        return (e & t) === t;
      }
      var o = n(13),
        i = {
          MUST_USE_ATTRIBUTE: 1,
          MUST_USE_PROPERTY: 2,
          HAS_SIDE_EFFECTS: 4,
          HAS_BOOLEAN_VALUE: 8,
          HAS_NUMERIC_VALUE: 16,
          HAS_POSITIVE_NUMERIC_VALUE: 48,
          HAS_OVERLOADED_BOOLEAN_VALUE: 64,
          injectDOMPropertyConfig: function (e) {
            var n = i,
              a = e.Properties || {},
              u = e.DOMAttributeNamespaces || {},
              l = e.DOMAttributeNames || {},
              c = e.DOMPropertyNames || {},
              p = e.DOMMutationMethods || {};
            e.isCustomAttribute &&
              s._isCustomAttributeFunctions.push(e.isCustomAttribute);
            for (var d in a) {
              s.properties.hasOwnProperty(d)
                ? "production" !== t.env.NODE_ENV
                  ? o(
                      !1,
                      "injectDOMPropertyConfig(...): You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.",
                      d
                    )
                  : o(!1)
                : void 0;
              var f = d.toLowerCase(),
                h = a[d],
                m = {
                  attributeName: f,
                  attributeNamespace: null,
                  propertyName: d,
                  mutationMethod: null,
                  mustUseAttribute: r(h, n.MUST_USE_ATTRIBUTE),
                  mustUseProperty: r(h, n.MUST_USE_PROPERTY),
                  hasSideEffects: r(h, n.HAS_SIDE_EFFECTS),
                  hasBooleanValue: r(h, n.HAS_BOOLEAN_VALUE),
                  hasNumericValue: r(h, n.HAS_NUMERIC_VALUE),
                  hasPositiveNumericValue: r(h, n.HAS_POSITIVE_NUMERIC_VALUE),
                  hasOverloadedBooleanValue: r(
                    h,
                    n.HAS_OVERLOADED_BOOLEAN_VALUE
                  ),
                };
              if (
                (m.mustUseAttribute && m.mustUseProperty
                  ? "production" !== t.env.NODE_ENV
                    ? o(
                        !1,
                        "DOMProperty: Cannot require using both attribute and property: %s",
                        d
                      )
                    : o(!1)
                  : void 0,
                !m.mustUseProperty && m.hasSideEffects
                  ? "production" !== t.env.NODE_ENV
                    ? o(
                        !1,
                        "DOMProperty: Properties that have side effects must use property: %s",
                        d
                      )
                    : o(!1)
                  : void 0,
                m.hasBooleanValue +
                  m.hasNumericValue +
                  m.hasOverloadedBooleanValue <=
                1
                  ? void 0
                  : "production" !== t.env.NODE_ENV
                  ? o(
                      !1,
                      "DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s",
                      d
                    )
                  : o(!1),
                "production" !== t.env.NODE_ENV &&
                  (s.getPossibleStandardName[f] = d),
                l.hasOwnProperty(d))
              ) {
                var v = l[d];
                (m.attributeName = v),
                  "production" !== t.env.NODE_ENV &&
                    (s.getPossibleStandardName[v] = d);
              }
              u.hasOwnProperty(d) && (m.attributeNamespace = u[d]),
                c.hasOwnProperty(d) && (m.propertyName = c[d]),
                p.hasOwnProperty(d) && (m.mutationMethod = p[d]),
                (s.properties[d] = m);
            }
          },
        },
        a = {},
        s = {
          ID_ATTRIBUTE_NAME: "data-reactid",
          properties: {},
          getPossibleStandardName: "production" !== t.env.NODE_ENV ? {} : null,
          _isCustomAttributeFunctions: [],
          isCustomAttribute: function (e) {
            for (var t = 0; t < s._isCustomAttributeFunctions.length; t++) {
              var n = s._isCustomAttributeFunctions[t];
              if (n(e)) return !0;
            }
            return !1;
          },
          getDefaultValueForProperty: function (e, t) {
            var n,
              r = a[e];
            return (
              r || (a[e] = r = {}),
              t in r || ((n = document.createElement(e)), (r[t] = n[t])),
              r[t]
            );
          },
          injection: i,
        };
      e.exports = s;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return '"' + o(e) + '"';
    }
    var o = n(21);
    e.exports = r;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(15),
        o = r;
      "production" !== t.env.NODE_ENV &&
        (o = function (e, t) {
          for (
            var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2;
            n > o;
            o++
          )
            r[o - 2] = arguments[o];
          if (void 0 === t)
            throw new Error(
              "`warning(condition, format, ...args)` requires a warning message argument"
            );
          if (0 !== t.indexOf("Failed Composite propType: ") && !e) {
            var i = 0,
              a =
                "Warning: " +
                t.replace(/%s/g, function () {
                  return r[i++];
                });
            "undefined" != typeof console && console.error(a);
            try {
              throw new Error(a);
            } catch (s) {}
          }
        }),
        (e.exports = o);
    }.call(t, n(4)));
  },
  function (e, t, n) {
    "use strict";
    var r = n(27),
      o = n(28),
      i = {
        processChildrenUpdates: r.dangerouslyProcessChildrenUpdates,
        replaceNodeWithMarkupByID: r.dangerouslyReplaceNodeWithMarkupByID,
        unmountIDFromEnvironment: function (e) {
          o.purgeID(e);
        },
      };
    e.exports = i;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(7),
        o = n(22),
        i = n(28),
        a = n(18),
        s = n(13),
        u = {
          dangerouslySetInnerHTML:
            "`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",
          style: "`style` must be set using `updateStylesByID()`.",
        },
        l = {
          updatePropertyByID: function (e, n, r) {
            var a = i.getNode(e);
            u.hasOwnProperty(n)
              ? "production" !== t.env.NODE_ENV
                ? s(!1, "updatePropertyByID(...): %s", u[n])
                : s(!1)
              : void 0,
              null != r
                ? o.setValueForProperty(a, n, r)
                : o.deleteValueForProperty(a, n);
          },
          dangerouslyReplaceNodeWithMarkupByID: function (e, t) {
            var n = i.getNode(e);
            r.dangerouslyReplaceNodeWithMarkup(n, t);
          },
          dangerouslyProcessChildrenUpdates: function (e, t) {
            for (var n = 0; n < e.length; n++)
              e[n].parentNode = i.getNode(e[n].parentID);
            r.processUpdates(e, t);
          },
        };
      a.measureMethods(l, "ReactDOMIDOperations", {
        dangerouslyReplaceNodeWithMarkupByID:
          "dangerouslyReplaceNodeWithMarkupByID",
        dangerouslyProcessChildrenUpdates: "dangerouslyProcessChildrenUpdates",
      }),
        (e.exports = l);
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e, t) {
        for (var n = Math.min(e.length, t.length), r = 0; n > r; r++)
          if (e.charAt(r) !== t.charAt(r)) return r;
        return e.length === t.length ? -1 : n;
      }
      function o(e) {
        return e ? (e.nodeType === q ? e.documentElement : e.firstChild) : null;
      }
      function i(e) {
        var t = o(e);
        return t && ee.getID(t);
      }
      function a(e) {
        var n = s(e);
        if (n)
          if (H.hasOwnProperty(n)) {
            var r = H[n];
            r !== e &&
              (p(r, n)
                ? "production" !== t.env.NODE_ENV
                  ? L(
                      !1,
                      "ReactMount: Two valid but unequal nodes with the same `%s`: %s",
                      j,
                      n
                    )
                  : L(!1)
                : void 0,
              (H[n] = e));
          } else H[n] = e;
        return n;
      }
      function s(e) {
        return (e && e.getAttribute && e.getAttribute(j)) || "";
      }
      function u(e, t) {
        var n = s(e);
        n !== t && delete H[n], e.setAttribute(j, t), (H[t] = e);
      }
      function l(e) {
        return (
          (H.hasOwnProperty(e) && p(H[e], e)) ||
            (H[e] = ee.findReactNodeByID(e)),
          H[e]
        );
      }
      function c(e) {
        var t = k.get(e)._rootNodeID;
        return x.isNullComponentID(t)
          ? null
          : ((H.hasOwnProperty(t) && p(H[t], t)) ||
              (H[t] = ee.findReactNodeByID(t)),
            H[t]);
      }
      function p(e, n) {
        if (e) {
          s(e) !== n
            ? "production" !== t.env.NODE_ENV
              ? L(!1, "ReactMount: Unexpected modification of `%s`", j)
              : L(!1)
            : void 0;
          var r = ee.findReactContainerForID(n);
          if (r && I(r, e)) return !0;
        }
        return !1;
      }
      function d(e) {
        delete H[e];
      }
      function f(e) {
        var t = H[e];
        return t && p(t, e) ? void (Z = t) : !1;
      }
      function h(e) {
        (Z = null), N.traverseAncestors(e, f);
        var t = Z;
        return (Z = null), t;
      }
      function m(e, n, r, o, i, a) {
        if (
          (E.useCreateElement &&
            ((a = F({}, a)),
            r.nodeType === q ? (a[K] = r) : (a[K] = r.ownerDocument)),
          "production" !== t.env.NODE_ENV)
        ) {
          a === T && (a = {});
          var s = r.nodeName.toLowerCase();
          a[U.ancestorInfoContextKey] = U.updatedAncestorInfo(null, s, null);
        }
        var u = _.mountComponent(e, n, o, a);
        (e._renderedComponent._topLevelWrapper = e),
          ee._mountImageIntoNode(u, r, i, o);
      }
      function v(e, t, n, r, o) {
        var i = O.ReactReconcileTransaction.getPooled(r);
        i.perform(m, null, e, t, n, i, r, o),
          O.ReactReconcileTransaction.release(i);
      }
      function g(e, t) {
        for (
          _.unmountComponent(e), t.nodeType === q && (t = t.documentElement);
          t.lastChild;

        )
          t.removeChild(t.lastChild);
      }
      function y(e) {
        var t = i(e);
        return t ? t !== N.getReactRootIDFromNodeID(t) : !1;
      }
      function C(e) {
        for (; e && e.parentNode !== e; e = e.parentNode)
          if (1 === e.nodeType) {
            var t = s(e);
            if (t) {
              var n,
                r = N.getReactRootIDFromNodeID(t),
                o = e;
              do if (((n = s(o)), (o = o.parentNode), null == o)) return null;
              while (n !== r);
              if (o === X[r]) return e;
            }
          }
        return null;
      }
      var A = n(23),
        D = n(29),
        b = n(5),
        E = n(41),
        w = n(42),
        x = n(44),
        N = n(45),
        k = n(47),
        S = n(48),
        B = n(18),
        _ = n(50),
        M = n(53),
        O = n(54),
        F = n(39),
        T = n(58),
        I = n(59),
        P = n(62),
        L = n(13),
        R = n(19),
        V = n(67),
        U = n(70),
        W = n(25),
        j = A.ID_ATTRIBUTE_NAME,
        H = {},
        z = 1,
        q = 9,
        Y = 11,
        K = "__ReactMount_ownerDocument$" + Math.random().toString(36).slice(2),
        G = {},
        X = {};
      if ("production" !== t.env.NODE_ENV) var $ = {};
      var Q = [],
        Z = null,
        J = function () {};
      (J.prototype.isReactComponent = {}),
        "production" !== t.env.NODE_ENV && (J.displayName = "TopLevelWrapper"),
        (J.prototype.render = function () {
          return this.props;
        });
      var ee = {
        TopLevelWrapper: J,
        _instancesByReactRootID: G,
        scrollMonitor: function (e, t) {
          t();
        },
        _updateRootComponent: function (e, n, r, a) {
          return (
            ee.scrollMonitor(r, function () {
              M.enqueueElementInternal(e, n),
                a && M.enqueueCallbackInternal(e, a);
            }),
            "production" !== t.env.NODE_ENV && ($[i(r)] = o(r)),
            e
          );
        },
        _registerComponent: function (e, n) {
          !n || (n.nodeType !== z && n.nodeType !== q && n.nodeType !== Y)
            ? "production" !== t.env.NODE_ENV
              ? L(
                  !1,
                  "_registerComponent(...): Target container is not a DOM element."
                )
              : L(!1)
            : void 0,
            D.ensureScrollValueMonitoring();
          var r = ee.registerContainer(n);
          return (G[r] = e), r;
        },
        _renderNewRootComponent: function (e, n, r, i) {
          "production" !== t.env.NODE_ENV
            ? W(
                null == b.current,
                "_renderNewRootComponent(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate. Check the render method of %s.",
                (b.current && b.current.getName()) || "ReactCompositeComponent"
              )
            : void 0;
          var a = P(e, null),
            s = ee._registerComponent(a, n);
          return (
            O.batchedUpdates(v, a, s, n, r, i),
            "production" !== t.env.NODE_ENV && ($[s] = o(n)),
            a
          );
        },
        renderSubtreeIntoContainer: function (e, n, r, o) {
          return (
            null == e || null == e._reactInternalInstance
              ? "production" !== t.env.NODE_ENV
                ? L(!1, "parentComponent must be a valid React Component")
                : L(!1)
              : void 0,
            ee._renderSubtreeIntoContainer(e, n, r, o)
          );
        },
        _renderSubtreeIntoContainer: function (e, n, r, a) {
          w.isValidElement(n)
            ? void 0
            : "production" !== t.env.NODE_ENV
            ? L(
                !1,
                "ReactDOM.render(): Invalid component element.%s",
                "string" == typeof n
                  ? " Instead of passing an element string, make sure to instantiate it by passing it to React.createElement."
                  : "function" == typeof n
                  ? " Instead of passing a component class, make sure to instantiate it by passing it to React.createElement."
                  : null != n && void 0 !== n.props
                  ? " This may be caused by unintentionally loading two independent copies of React."
                  : ""
              )
            : L(!1),
            "production" !== t.env.NODE_ENV
              ? W(
                  !r || !r.tagName || "BODY" !== r.tagName.toUpperCase(),
                  "render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app."
                )
              : void 0;
          var u = new w(J, null, null, null, null, null, n),
            l = G[i(r)];
          if (l) {
            var c = l._currentElement,
              p = c.props;
            if (V(p, n)) {
              var d = l._renderedComponent.getPublicInstance(),
                f =
                  a &&
                  function () {
                    a.call(d);
                  };
              return ee._updateRootComponent(l, u, r, f), d;
            }
            ee.unmountComponentAtNode(r);
          }
          var h = o(r),
            m = h && !!s(h),
            v = y(r);
          if (
            "production" !== t.env.NODE_ENV &&
            ("production" !== t.env.NODE_ENV
              ? W(
                  !v,
                  "render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."
                )
              : void 0,
            !m || h.nextSibling)
          )
            for (var g = h; g; ) {
              if (s(g)) {
                "production" !== t.env.NODE_ENV
                  ? W(
                      !1,
                      "render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup."
                    )
                  : void 0;
                break;
              }
              g = g.nextSibling;
            }
          var C = m && !l && !v,
            A = ee
              ._renderNewRootComponent(
                u,
                r,
                C,
                null != e
                  ? e._reactInternalInstance._processChildContext(
                      e._reactInternalInstance._context
                    )
                  : T
              )
              ._renderedComponent.getPublicInstance();
          return a && a.call(A), A;
        },
        render: function (e, t, n) {
          return ee._renderSubtreeIntoContainer(null, e, t, n);
        },
        registerContainer: function (e) {
          var t = i(e);
          return (
            t && (t = N.getReactRootIDFromNodeID(t)),
            t || (t = N.createReactRootID()),
            (X[t] = e),
            t
          );
        },
        unmountComponentAtNode: function (e) {
          "production" !== t.env.NODE_ENV
            ? W(
                null == b.current,
                "unmountComponentAtNode(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate. Check the render method of %s.",
                (b.current && b.current.getName()) || "ReactCompositeComponent"
              )
            : void 0,
            !e || (e.nodeType !== z && e.nodeType !== q && e.nodeType !== Y)
              ? "production" !== t.env.NODE_ENV
                ? L(
                    !1,
                    "unmountComponentAtNode(...): Target container is not a DOM element."
                  )
                : L(!1)
              : void 0;
          var n = i(e),
            r = G[n];
          if (!r) {
            var o = y(e),
              a = s(e),
              u = a && a === N.getReactRootIDFromNodeID(a);
            return (
              "production" !== t.env.NODE_ENV &&
                ("production" !== t.env.NODE_ENV
                  ? W(
                      !o,
                      "unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",
                      u
                        ? "You may have accidentally passed in a React root node instead of its container."
                        : "Instead, have the parent component update its state and rerender in order to remove this component."
                    )
                  : void 0),
              !1
            );
          }
          return (
            O.batchedUpdates(g, r, e),
            delete G[n],
            delete X[n],
            "production" !== t.env.NODE_ENV && delete $[n],
            !0
          );
        },
        findReactContainerForID: function (e) {
          var n = N.getReactRootIDFromNodeID(e),
            r = X[n];
          if ("production" !== t.env.NODE_ENV) {
            var o = $[n];
            if (o && o.parentNode !== r) {
              "production" !== t.env.NODE_ENV
                ? W(
                    s(o) === n,
                    "ReactMount: Root element ID differed from reactRootID."
                  )
                : void 0;
              var i = r.firstChild;
              i && n === s(i)
                ? ($[n] = i)
                : "production" !== t.env.NODE_ENV
                ? W(
                    !1,
                    "ReactMount: Root element has been removed from its original container. New container: %s",
                    o.parentNode
                  )
                : void 0;
            }
          }
          return r;
        },
        findReactNodeByID: function (e) {
          var t = ee.findReactContainerForID(e);
          return ee.findComponentRoot(t, e);
        },
        getFirstReactDOM: function (e) {
          return C(e);
        },
        findComponentRoot: function (e, n) {
          var r = Q,
            o = 0,
            i = h(n) || e;
          for (
            "production" !== t.env.NODE_ENV &&
              ("production" !== t.env.NODE_ENV
                ? W(
                    null != i,
                    "React can't find the root component node for data-reactid value `%s`. If you're seeing this message, it probably means that you've loaded two copies of React on the page. At this time, only a single copy of React can be loaded at a time.",
                    n
                  )
                : void 0),
              r[0] = i.firstChild,
              r.length = 1;
            o < r.length;

          ) {
            for (var a, s = r[o++]; s; ) {
              var u = ee.getID(s);
              u
                ? n === u
                  ? (a = s)
                  : N.isAncestorIDOf(u, n) &&
                    ((r.length = o = 0), r.push(s.firstChild))
                : r.push(s.firstChild),
                (s = s.nextSibling);
            }
            if (a) return (r.length = 0), a;
          }
          (r.length = 0),
            "production" !== t.env.NODE_ENV
              ? L(
                  !1,
                  "findComponentRoot(..., %s): Unable to find element. This probably means the DOM was unexpectedly mutated (e.g., by the browser), usually due to forgetting a <tbody> when using tables, nesting tags like <form>, <p>, or <a>, or using non-SVG elements in an <svg> parent. Try inspecting the child nodes of the element with React ID `%s`.",
                  n,
                  ee.getID(e)
                )
              : L(!1);
        },
        _mountImageIntoNode: function (e, n, i, a) {
          if (
            (!n || (n.nodeType !== z && n.nodeType !== q && n.nodeType !== Y)
              ? "production" !== t.env.NODE_ENV
                ? L(
                    !1,
                    "mountComponentIntoNode(...): Target container is not valid."
                  )
                : L(!1)
              : void 0,
            i)
          ) {
            var s = o(n);
            if (S.canReuseMarkup(e, s)) return;
            var u = s.getAttribute(S.CHECKSUM_ATTR_NAME);
            s.removeAttribute(S.CHECKSUM_ATTR_NAME);
            var l = s.outerHTML;
            s.setAttribute(S.CHECKSUM_ATTR_NAME, u);
            var c = e;
            if ("production" !== t.env.NODE_ENV) {
              var p;
              n.nodeType === z
                ? ((p = document.createElement("div")),
                  (p.innerHTML = e),
                  (c = p.innerHTML))
                : ((p = document.createElement("iframe")),
                  document.body.appendChild(p),
                  p.contentDocument.write(e),
                  (c = p.contentDocument.documentElement.outerHTML),
                  document.body.removeChild(p));
            }
            var d = r(c, l),
              f =
                " (client) " +
                c.substring(d - 20, d + 20) +
                "\n (server) " +
                l.substring(d - 20, d + 20);
            n.nodeType === q
              ? "production" !== t.env.NODE_ENV
                ? L(
                    !1,
                    "You're trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side:\n%s",
                    f
                  )
                : L(!1)
              : void 0,
              "production" !== t.env.NODE_ENV &&
                ("production" !== t.env.NODE_ENV
                  ? W(
                      !1,
                      "React attempted to reuse markup in a container but the checksum was invalid. This generally means that you are using server rendering and the markup generated on the server was not what the client was expecting. React injected new markup to compensate which works but you have lost many of the benefits of server rendering. Instead, figure out why the markup being generated is different on the client or server:\n%s",
                      f
                    )
                  : void 0);
          }
          if (
            (n.nodeType === q
              ? "production" !== t.env.NODE_ENV
                ? L(
                    !1,
                    "You're trying to render a component to the document but you didn't use server rendering. We can't do this without using server rendering due to cross-browser quirks. See ReactDOMServer.renderToString() for server rendering."
                  )
                : L(!1)
              : void 0,
            a.useCreateElement)
          ) {
            for (; n.lastChild; ) n.removeChild(n.lastChild);
            n.appendChild(e);
          } else R(n, e);
        },
        ownerDocumentContextKey: K,
        getReactRootID: i,
        getID: a,
        setID: u,
        getNode: l,
        getNodeFromInstance: c,
        isValid: p,
        purgeID: d,
      };
      B.measureMethods(ee, "ReactMount", {
        _renderNewRootComponent: "_renderNewRootComponent",
        _mountImageIntoNode: "_mountImageIntoNode",
      }),
        (e.exports = ee);
    }.call(t, n(4)));
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return (
        Object.prototype.hasOwnProperty.call(e, v) ||
          ((e[v] = h++), (d[e[v]] = {})),
        d[e[v]]
      );
    }
    var o = n(30),
      i = n(31),
      a = n(32),
      s = n(37),
      u = n(18),
      l = n(38),
      c = n(39),
      p = n(40),
      d = {},
      f = !1,
      h = 0,
      m = {
        topAbort: "abort",
        topBlur: "blur",
        topCanPlay: "canplay",
        topCanPlayThrough: "canplaythrough",
        topChange: "change",
        topClick: "click",
        topCompositionEnd: "compositionend",
        topCompositionStart: "compositionstart",
        topCompositionUpdate: "compositionupdate",
        topContextMenu: "contextmenu",
        topCopy: "copy",
        topCut: "cut",
        topDoubleClick: "dblclick",
        topDrag: "drag",
        topDragEnd: "dragend",
        topDragEnter: "dragenter",
        topDragExit: "dragexit",
        topDragLeave: "dragleave",
        topDragOver: "dragover",
        topDragStart: "dragstart",
        topDrop: "drop",
        topDurationChange: "durationchange",
        topEmptied: "emptied",
        topEncrypted: "encrypted",
        topEnded: "ended",
        topError: "error",
        topFocus: "focus",
        topInput: "input",
        topKeyDown: "keydown",
        topKeyPress: "keypress",
        topKeyUp: "keyup",
        topLoadedData: "loadeddata",
        topLoadedMetadata: "loadedmetadata",
        topLoadStart: "loadstart",
        topMouseDown: "mousedown",
        topMouseMove: "mousemove",
        topMouseOut: "mouseout",
        topMouseOver: "mouseover",
        topMouseUp: "mouseup",
        topPaste: "paste",
        topPause: "pause",
        topPlay: "play",
        topPlaying: "playing",
        topProgress: "progress",
        topRateChange: "ratechange",
        topScroll: "scroll",
        topSeeked: "seeked",
        topSeeking: "seeking",
        topSelectionChange: "selectionchange",
        topStalled: "stalled",
        topSuspend: "suspend",
        topTextInput: "textInput",
        topTimeUpdate: "timeupdate",
        topTouchCancel: "touchcancel",
        topTouchEnd: "touchend",
        topTouchMove: "touchmove",
        topTouchStart: "touchstart",
        topVolumeChange: "volumechange",
        topWaiting: "waiting",
        topWheel: "wheel",
      },
      v = "_reactListenersID" + String(Math.random()).slice(2),
      g = c({}, s, {
        ReactEventListener: null,
        injection: {
          injectReactEventListener: function (e) {
            e.setHandleTopLevel(g.handleTopLevel), (g.ReactEventListener = e);
          },
        },
        setEnabled: function (e) {
          g.ReactEventListener && g.ReactEventListener.setEnabled(e);
        },
        isEnabled: function () {
          return !(!g.ReactEventListener || !g.ReactEventListener.isEnabled());
        },
        listenTo: function (e, t) {
          for (
            var n = t,
              i = r(n),
              s = a.registrationNameDependencies[e],
              u = o.topLevelTypes,
              l = 0;
            l < s.length;
            l++
          ) {
            var c = s[l];
            (i.hasOwnProperty(c) && i[c]) ||
              (c === u.topWheel
                ? p("wheel")
                  ? g.ReactEventListener.trapBubbledEvent(
                      u.topWheel,
                      "wheel",
                      n
                    )
                  : p("mousewheel")
                  ? g.ReactEventListener.trapBubbledEvent(
                      u.topWheel,
                      "mousewheel",
                      n
                    )
                  : g.ReactEventListener.trapBubbledEvent(
                      u.topWheel,
                      "DOMMouseScroll",
                      n
                    )
                : c === u.topScroll
                ? p("scroll", !0)
                  ? g.ReactEventListener.trapCapturedEvent(
                      u.topScroll,
                      "scroll",
                      n
                    )
                  : g.ReactEventListener.trapBubbledEvent(
                      u.topScroll,
                      "scroll",
                      g.ReactEventListener.WINDOW_HANDLE
                    )
                : c === u.topFocus || c === u.topBlur
                ? (p("focus", !0)
                    ? (g.ReactEventListener.trapCapturedEvent(
                        u.topFocus,
                        "focus",
                        n
                      ),
                      g.ReactEventListener.trapCapturedEvent(
                        u.topBlur,
                        "blur",
                        n
                      ))
                    : p("focusin") &&
                      (g.ReactEventListener.trapBubbledEvent(
                        u.topFocus,
                        "focusin",
                        n
                      ),
                      g.ReactEventListener.trapBubbledEvent(
                        u.topBlur,
                        "focusout",
                        n
                      )),
                  (i[u.topBlur] = !0),
                  (i[u.topFocus] = !0))
                : m.hasOwnProperty(c) &&
                  g.ReactEventListener.trapBubbledEvent(c, m[c], n),
              (i[c] = !0));
          }
        },
        trapBubbledEvent: function (e, t, n) {
          return g.ReactEventListener.trapBubbledEvent(e, t, n);
        },
        trapCapturedEvent: function (e, t, n) {
          return g.ReactEventListener.trapCapturedEvent(e, t, n);
        },
        ensureScrollValueMonitoring: function () {
          if (!f) {
            var e = l.refreshScrollValues;
            g.ReactEventListener.monitorScrollValue(e), (f = !0);
          }
        },
        eventNameDispatchConfigs: i.eventNameDispatchConfigs,
        registrationNameModules: i.registrationNameModules,
        putListener: i.putListener,
        getListener: i.getListener,
        deleteListener: i.deleteListener,
        deleteAllListeners: i.deleteAllListeners,
      });
    u.measureMethods(g, "ReactBrowserEventEmitter", {
      putListener: "putListener",
      deleteListener: "deleteListener",
    }),
      (e.exports = g);
  },
  function (e, t, n) {
    "use strict";
    var r = n(17),
      o = r({ bubbled: null, captured: null }),
      i = r({
        topAbort: null,
        topBlur: null,
        topCanPlay: null,
        topCanPlayThrough: null,
        topChange: null,
        topClick: null,
        topCompositionEnd: null,
        topCompositionStart: null,
        topCompositionUpdate: null,
        topContextMenu: null,
        topCopy: null,
        topCut: null,
        topDoubleClick: null,
        topDrag: null,
        topDragEnd: null,
        topDragEnter: null,
        topDragExit: null,
        topDragLeave: null,
        topDragOver: null,
        topDragStart: null,
        topDrop: null,
        topDurationChange: null,
        topEmptied: null,
        topEncrypted: null,
        topEnded: null,
        topError: null,
        topFocus: null,
        topInput: null,
        topKeyDown: null,
        topKeyPress: null,
        topKeyUp: null,
        topLoad: null,
        topLoadedData: null,
        topLoadedMetadata: null,
        topLoadStart: null,
        topMouseDown: null,
        topMouseMove: null,
        topMouseOut: null,
        topMouseOver: null,
        topMouseUp: null,
        topPaste: null,
        topPause: null,
        topPlay: null,
        topPlaying: null,
        topProgress: null,
        topRateChange: null,
        topReset: null,
        topScroll: null,
        topSeeked: null,
        topSeeking: null,
        topSelectionChange: null,
        topStalled: null,
        topSubmit: null,
        topSuspend: null,
        topTextInput: null,
        topTimeUpdate: null,
        topTouchCancel: null,
        topTouchEnd: null,
        topTouchMove: null,
        topTouchStart: null,
        topVolumeChange: null,
        topWaiting: null,
        topWheel: null,
      }),
      a = { topLevelTypes: i, PropagationPhases: o };
    e.exports = a;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r() {
        var e = v && v.traverseTwoPhase && v.traverseEnterLeave;
        "production" !== t.env.NODE_ENV
          ? c(e, "InstanceHandle not injected before use!")
          : void 0;
      }
      var o = n(32),
        i = n(33),
        a = n(34),
        s = n(35),
        u = n(36),
        l = n(13),
        c = n(25),
        p = {},
        d = null,
        f = function (e, t) {
          e &&
            (i.executeDispatchesInOrder(e, t),
            e.isPersistent() || e.constructor.release(e));
        },
        h = function (e) {
          return f(e, !0);
        },
        m = function (e) {
          return f(e, !1);
        },
        v = null,
        g = {
          injection: {
            injectMount: i.injection.injectMount,
            injectInstanceHandle: function (e) {
              (v = e), "production" !== t.env.NODE_ENV && r();
            },
            getInstanceHandle: function () {
              return "production" !== t.env.NODE_ENV && r(), v;
            },
            injectEventPluginOrder: o.injectEventPluginOrder,
            injectEventPluginsByName: o.injectEventPluginsByName,
          },
          eventNameDispatchConfigs: o.eventNameDispatchConfigs,
          registrationNameModules: o.registrationNameModules,
          putListener: function (e, n, r) {
            "function" != typeof r
              ? "production" !== t.env.NODE_ENV
                ? l(
                    !1,
                    "Expected %s listener to be a function, instead got type %s",
                    n,
                    typeof r
                  )
                : l(!1)
              : void 0;
            var i = p[n] || (p[n] = {});
            i[e] = r;
            var a = o.registrationNameModules[n];
            a && a.didPutListener && a.didPutListener(e, n, r);
          },
          getListener: function (e, t) {
            var n = p[t];
            return n && n[e];
          },
          deleteListener: function (e, t) {
            var n = o.registrationNameModules[t];
            n && n.willDeleteListener && n.willDeleteListener(e, t);
            var r = p[t];
            r && delete r[e];
          },
          deleteAllListeners: function (e) {
            for (var t in p)
              if (p[t][e]) {
                var n = o.registrationNameModules[t];
                n && n.willDeleteListener && n.willDeleteListener(e, t),
                  delete p[t][e];
              }
          },
          extractEvents: function (e, t, n, r, i) {
            for (var a, u = o.plugins, l = 0; l < u.length; l++) {
              var c = u[l];
              if (c) {
                var p = c.extractEvents(e, t, n, r, i);
                p && (a = s(a, p));
              }
            }
            return a;
          },
          enqueueEvents: function (e) {
            e && (d = s(d, e));
          },
          processEventQueue: function (e) {
            var n = d;
            (d = null),
              e ? u(n, h) : u(n, m),
              d
                ? "production" !== t.env.NODE_ENV
                  ? l(
                      !1,
                      "processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented."
                    )
                  : l(!1)
                : void 0,
              a.rethrowCaughtError();
          },
          __purge: function () {
            p = {};
          },
          __getListenerBank: function () {
            return p;
          },
        };
      e.exports = g;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r() {
        if (s)
          for (var e in u) {
            var n = u[e],
              r = s.indexOf(e);
            if (
              (r > -1
                ? void 0
                : "production" !== t.env.NODE_ENV
                ? a(
                    !1,
                    "EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.",
                    e
                  )
                : a(!1),
              !l.plugins[r])
            ) {
              n.extractEvents
                ? void 0
                : "production" !== t.env.NODE_ENV
                ? a(
                    !1,
                    "EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.",
                    e
                  )
                : a(!1),
                (l.plugins[r] = n);
              var i = n.eventTypes;
              for (var c in i)
                o(i[c], n, c)
                  ? void 0
                  : "production" !== t.env.NODE_ENV
                  ? a(
                      !1,
                      "EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.",
                      c,
                      e
                    )
                  : a(!1);
            }
          }
      }
      function o(e, n, r) {
        l.eventNameDispatchConfigs.hasOwnProperty(r)
          ? "production" !== t.env.NODE_ENV
            ? a(
                !1,
                "EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.",
                r
              )
            : a(!1)
          : void 0,
          (l.eventNameDispatchConfigs[r] = e);
        var o = e.phasedRegistrationNames;
        if (o) {
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var u = o[s];
              i(u, n, r);
            }
          return !0;
        }
        return e.registrationName ? (i(e.registrationName, n, r), !0) : !1;
      }
      function i(e, n, r) {
        l.registrationNameModules[e]
          ? "production" !== t.env.NODE_ENV
            ? a(
                !1,
                "EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.",
                e
              )
            : a(!1)
          : void 0,
          (l.registrationNameModules[e] = n),
          (l.registrationNameDependencies[e] = n.eventTypes[r].dependencies);
      }
      var a = n(13),
        s = null,
        u = {},
        l = {
          plugins: [],
          eventNameDispatchConfigs: {},
          registrationNameModules: {},
          registrationNameDependencies: {},
          injectEventPluginOrder: function (e) {
            s
              ? "production" !== t.env.NODE_ENV
                ? a(
                    !1,
                    "EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React."
                  )
                : a(!1)
              : void 0,
              (s = Array.prototype.slice.call(e)),
              r();
          },
          injectEventPluginsByName: function (e) {
            var n = !1;
            for (var o in e)
              if (e.hasOwnProperty(o)) {
                var i = e[o];
                (u.hasOwnProperty(o) && u[o] === i) ||
                  (u[o]
                    ? "production" !== t.env.NODE_ENV
                      ? a(
                          !1,
                          "EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.",
                          o
                        )
                      : a(!1)
                    : void 0,
                  (u[o] = i),
                  (n = !0));
              }
            n && r();
          },
          getPluginModuleForEvent: function (e) {
            var t = e.dispatchConfig;
            if (t.registrationName)
              return l.registrationNameModules[t.registrationName] || null;
            for (var n in t.phasedRegistrationNames)
              if (t.phasedRegistrationNames.hasOwnProperty(n)) {
                var r = l.registrationNameModules[t.phasedRegistrationNames[n]];
                if (r) return r;
              }
            return null;
          },
          _resetEventPlugins: function () {
            s = null;
            for (var e in u) u.hasOwnProperty(e) && delete u[e];
            l.plugins.length = 0;
            var t = l.eventNameDispatchConfigs;
            for (var n in t) t.hasOwnProperty(n) && delete t[n];
            var r = l.registrationNameModules;
            for (var o in r) r.hasOwnProperty(o) && delete r[o];
          },
        };
      e.exports = l;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        return (
          e === y.topMouseUp || e === y.topTouchEnd || e === y.topTouchCancel
        );
      }
      function o(e) {
        return e === y.topMouseMove || e === y.topTouchMove;
      }
      function i(e) {
        return e === y.topMouseDown || e === y.topTouchStart;
      }
      function a(e, t, n, r) {
        var o = e.type || "unknown-event";
        (e.currentTarget = g.Mount.getNode(r)),
          t
            ? h.invokeGuardedCallbackWithCatch(o, n, e, r)
            : h.invokeGuardedCallback(o, n, e, r),
          (e.currentTarget = null);
      }
      function s(e, n) {
        var r = e._dispatchListeners,
          o = e._dispatchIDs;
        if (("production" !== t.env.NODE_ENV && d(e), Array.isArray(r)))
          for (var i = 0; i < r.length && !e.isPropagationStopped(); i++)
            a(e, n, r[i], o[i]);
        else r && a(e, n, r, o);
        (e._dispatchListeners = null), (e._dispatchIDs = null);
      }
      function u(e) {
        var n = e._dispatchListeners,
          r = e._dispatchIDs;
        if (("production" !== t.env.NODE_ENV && d(e), Array.isArray(n))) {
          for (var o = 0; o < n.length && !e.isPropagationStopped(); o++)
            if (n[o](e, r[o])) return r[o];
        } else if (n && n(e, r)) return r;
        return null;
      }
      function l(e) {
        var t = u(e);
        return (e._dispatchIDs = null), (e._dispatchListeners = null), t;
      }
      function c(e) {
        "production" !== t.env.NODE_ENV && d(e);
        var n = e._dispatchListeners,
          r = e._dispatchIDs;
        Array.isArray(n)
          ? "production" !== t.env.NODE_ENV
            ? m(!1, "executeDirectDispatch(...): Invalid `event`.")
            : m(!1)
          : void 0;
        var o = n ? n(e, r) : null;
        return (e._dispatchListeners = null), (e._dispatchIDs = null), o;
      }
      function p(e) {
        return !!e._dispatchListeners;
      }
      var d,
        f = n(30),
        h = n(34),
        m = n(13),
        v = n(25),
        g = {
          Mount: null,
          injectMount: function (e) {
            (g.Mount = e),
              "production" !== t.env.NODE_ENV &&
                ("production" !== t.env.NODE_ENV
                  ? v(
                      e && e.getNode && e.getID,
                      "EventPluginUtils.injection.injectMount(...): Injected Mount module is missing getNode or getID."
                    )
                  : void 0);
          },
        },
        y = f.topLevelTypes;
      "production" !== t.env.NODE_ENV &&
        (d = function (e) {
          var n = e._dispatchListeners,
            r = e._dispatchIDs,
            o = Array.isArray(n),
            i = Array.isArray(r),
            a = i ? r.length : r ? 1 : 0,
            s = o ? n.length : n ? 1 : 0;
          "production" !== t.env.NODE_ENV
            ? v(i === o && a === s, "EventPluginUtils: Invalid `event`.")
            : void 0;
        });
      var C = {
        isEndish: r,
        isMoveish: o,
        isStartish: i,
        executeDirectDispatch: c,
        executeDispatchesInOrder: s,
        executeDispatchesInOrderStopAtTrue: l,
        hasDispatches: p,
        getNode: function (e) {
          return g.Mount.getNode(e);
        },
        getID: function (e) {
          return g.Mount.getID(e);
        },
        injection: g,
      };
      e.exports = C;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function n(e, t, n, o) {
        try {
          return t(n, o);
        } catch (i) {
          return void (null === r && (r = i));
        }
      }
      var r = null,
        o = {
          invokeGuardedCallback: n,
          invokeGuardedCallbackWithCatch: n,
          rethrowCaughtError: function () {
            if (r) {
              var e = r;
              throw ((r = null), e);
            }
          },
        };
      if (
        "production" !== t.env.NODE_ENV &&
        "undefined" != typeof window &&
        "function" == typeof window.dispatchEvent &&
        "undefined" != typeof document &&
        "function" == typeof document.createEvent
      ) {
        var i = document.createElement("react");
        o.invokeGuardedCallback = function (e, t, n, r) {
          var o = t.bind(null, n, r),
            a = "react-" + e;
          i.addEventListener(a, o, !1);
          var s = document.createEvent("Event");
          s.initEvent(a, !1, !1),
            i.dispatchEvent(s),
            i.removeEventListener(a, o, !1);
        };
      }
      e.exports = o;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e, n) {
        if (
          (null == n
            ? "production" !== t.env.NODE_ENV
              ? o(
                  !1,
                  "accumulateInto(...): Accumulated items must not be null or undefined."
                )
              : o(!1)
            : void 0,
          null == e)
        )
          return n;
        var r = Array.isArray(e),
          i = Array.isArray(n);
        return r && i
          ? (e.push.apply(e, n), e)
          : r
          ? (e.push(n), e)
          : i
          ? [e].concat(n)
          : [e, n];
      }
      var o = n(13);
      e.exports = r;
    }.call(t, n(4)));
  },
  function (e, t) {
    "use strict";
    var n = function (e, t, n) {
      Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
    };
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      o.enqueueEvents(e), o.processEventQueue(!1);
    }
    var o = n(31),
      i = {
        handleTopLevel: function (e, t, n, i, a) {
          var s = o.extractEvents(e, t, n, i, a);
          r(s);
        },
      };
    e.exports = i;
  },
  function (e, t) {
    "use strict";
    var n = {
      currentScrollLeft: 0,
      currentScrollTop: 0,
      refreshScrollValues: function (e) {
        (n.currentScrollLeft = e.x), (n.currentScrollTop = e.y);
      },
    };
    e.exports = n;
  },
  function (e, t) {
    "use strict";
    function n(e, t) {
      if (null == e)
        throw new TypeError("Object.assign target cannot be null or undefined");
      for (
        var n = Object(e), r = Object.prototype.hasOwnProperty, o = 1;
        o < arguments.length;
        o++
      ) {
        var i = arguments[o];
        if (null != i) {
          var a = Object(i);
          for (var s in a) r.call(a, s) && (n[s] = a[s]);
        }
      }
      return n;
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @param {?boolean} capture Check if the capture phase is supported.
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function r(e, t) {
      if (!i.canUseDOM || (t && !("addEventListener" in document))) return !1;
      var n = "on" + e,
        r = n in document;
      if (!r) {
        var a = document.createElement("div");
        a.setAttribute(n, "return;"), (r = "function" == typeof a[n]);
      }
      return (
        !r &&
          o &&
          "wheel" === e &&
          (r = document.implementation.hasFeature("Events.wheel", "3.0")),
        r
      );
    }
    var o,
      i = n(9);
    i.canUseDOM &&
      (o =
        document.implementation &&
        document.implementation.hasFeature &&
        document.implementation.hasFeature("", "") !== !0),
      (e.exports = r);
  },
  function (e, t) {
    "use strict";
    var n = { useCreateElement: !1 };
    e.exports = n;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(5),
        o = n(39),
        i = n(43),
        a =
          ("function" == typeof Symbol &&
            Symbol["for"] &&
            Symbol["for"]("react.element")) ||
          60103,
        s = { key: !0, ref: !0, __self: !0, __source: !0 },
        u = function (e, n, r, o, s, u, l) {
          var c = { $$typeof: a, type: e, key: n, ref: r, props: l, _owner: u };
          return (
            "production" !== t.env.NODE_ENV &&
              ((c._store = {}),
              i
                ? (Object.defineProperty(c._store, "validated", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !0,
                    value: !1,
                  }),
                  Object.defineProperty(c, "_self", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !1,
                    value: o,
                  }),
                  Object.defineProperty(c, "_source", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !1,
                    value: s,
                  }))
                : ((c._store.validated = !1), (c._self = o), (c._source = s)),
              Object.freeze(c.props),
              Object.freeze(c)),
            c
          );
        };
      (u.createElement = function (e, t, n) {
        var o,
          i = {},
          a = null,
          l = null,
          c = null,
          p = null;
        if (null != t) {
          (l = void 0 === t.ref ? null : t.ref),
            (a = void 0 === t.key ? null : "" + t.key),
            (c = void 0 === t.__self ? null : t.__self),
            (p = void 0 === t.__source ? null : t.__source);
          for (o in t)
            t.hasOwnProperty(o) && !s.hasOwnProperty(o) && (i[o] = t[o]);
        }
        var d = arguments.length - 2;
        if (1 === d) i.children = n;
        else if (d > 1) {
          for (var f = Array(d), h = 0; d > h; h++) f[h] = arguments[h + 2];
          i.children = f;
        }
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (o in m) "undefined" == typeof i[o] && (i[o] = m[o]);
        }
        return u(e, a, l, c, p, r.current, i);
      }),
        (u.createFactory = function (e) {
          var t = u.createElement.bind(null, e);
          return (t.type = e), t;
        }),
        (u.cloneAndReplaceKey = function (e, t) {
          var n = u(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
          return n;
        }),
        (u.cloneAndReplaceProps = function (e, n) {
          var r = u(e.type, e.key, e.ref, e._self, e._source, e._owner, n);
          return (
            "production" !== t.env.NODE_ENV &&
              (r._store.validated = e._store.validated),
            r
          );
        }),
        (u.cloneElement = function (e, t, n) {
          var i,
            a = o({}, e.props),
            l = e.key,
            c = e.ref,
            p = e._self,
            d = e._source,
            f = e._owner;
          if (null != t) {
            void 0 !== t.ref && ((c = t.ref), (f = r.current)),
              void 0 !== t.key && (l = "" + t.key);
            for (i in t)
              t.hasOwnProperty(i) && !s.hasOwnProperty(i) && (a[i] = t[i]);
          }
          var h = arguments.length - 2;
          if (1 === h) a.children = n;
          else if (h > 1) {
            for (var m = Array(h), v = 0; h > v; v++) m[v] = arguments[v + 2];
            a.children = m;
          }
          return u(e.type, l, c, p, d, f, a);
        }),
        (u.isValidElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === a;
        }),
        (e.exports = u);
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      var n = !1;
      if ("production" !== t.env.NODE_ENV)
        try {
          Object.defineProperty({}, "x", { get: function () {} }), (n = !0);
        } catch (r) {}
      e.exports = n;
    }.call(t, n(4)));
  },
  function (e, t) {
    "use strict";
    function n(e) {
      return !!i[e];
    }
    function r(e) {
      i[e] = !0;
    }
    function o(e) {
      delete i[e];
    }
    var i = {},
      a = {
        isNullComponentID: n,
        registerNullComponentID: r,
        deregisterNullComponentID: o,
      };
    e.exports = a;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        return f + e.toString(36);
      }
      function o(e, t) {
        return e.charAt(t) === f || t === e.length;
      }
      function i(e) {
        return "" === e || (e.charAt(0) === f && e.charAt(e.length - 1) !== f);
      }
      function a(e, t) {
        return 0 === t.indexOf(e) && o(t, e.length);
      }
      function s(e) {
        return e ? e.substr(0, e.lastIndexOf(f)) : "";
      }
      function u(e, n) {
        if (
          (i(e) && i(n)
            ? void 0
            : "production" !== t.env.NODE_ENV
            ? d(
                !1,
                "getNextDescendantID(%s, %s): Received an invalid React DOM ID.",
                e,
                n
              )
            : d(!1),
          a(e, n)
            ? void 0
            : "production" !== t.env.NODE_ENV
            ? d(
                !1,
                "getNextDescendantID(...): React has made an invalid assumption about the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.",
                e,
                n
              )
            : d(!1),
          e === n)
        )
          return e;
        var r,
          s = e.length + h;
        for (r = s; r < n.length && !o(n, r); r++);
        return n.substr(0, r);
      }
      function l(e, n) {
        var r = Math.min(e.length, n.length);
        if (0 === r) return "";
        for (var a = 0, s = 0; r >= s; s++)
          if (o(e, s) && o(n, s)) a = s;
          else if (e.charAt(s) !== n.charAt(s)) break;
        var u = e.substr(0, a);
        return (
          i(u)
            ? void 0
            : "production" !== t.env.NODE_ENV
            ? d(
                !1,
                "getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s",
                e,
                n,
                u
              )
            : d(!1),
          u
        );
      }
      function c(e, n, r, o, i, l) {
        (e = e || ""),
          (n = n || ""),
          e === n
            ? "production" !== t.env.NODE_ENV
              ? d(
                  !1,
                  "traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.",
                  e
                )
              : d(!1)
            : void 0;
        var c = a(n, e);
        c || a(e, n)
          ? void 0
          : "production" !== t.env.NODE_ENV
          ? d(
              !1,
              "traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do not have a parent path.",
              e,
              n
            )
          : d(!1);
        for (var p = 0, f = c ? s : u, h = e; ; h = f(h, n)) {
          var v;
          if (
            ((i && h === e) || (l && h === n) || (v = r(h, c, o)),
            v === !1 || h === n)
          )
            break;
          p++ < m
            ? void 0
            : "production" !== t.env.NODE_ENV
            ? d(
                !1,
                "traverseParentPath(%s, %s, ...): Detected an infinite loop while traversing the React DOM ID tree. This may be due to malformed IDs: %s",
                e,
                n,
                h
              )
            : d(!1);
        }
      }
      var p = n(46),
        d = n(13),
        f = ".",
        h = f.length,
        m = 1e4,
        v = {
          createReactRootID: function () {
            return r(p.createReactRootIndex());
          },
          createReactID: function (e, t) {
            return e + t;
          },
          getReactRootIDFromNodeID: function (e) {
            if (e && e.charAt(0) === f && e.length > 1) {
              var t = e.indexOf(f, 1);
              return t > -1 ? e.substr(0, t) : e;
            }
            return null;
          },
          traverseEnterLeave: function (e, t, n, r, o) {
            var i = l(e, t);
            i !== e && c(e, i, n, r, !1, !0), i !== t && c(i, t, n, o, !0, !1);
          },
          traverseTwoPhase: function (e, t, n) {
            e && (c("", e, t, n, !0, !1), c(e, "", t, n, !1, !0));
          },
          traverseTwoPhaseSkipTarget: function (e, t, n) {
            e && (c("", e, t, n, !0, !0), c(e, "", t, n, !0, !0));
          },
          traverseAncestors: function (e, t, n) {
            c("", e, t, n, !0, !1);
          },
          getFirstCommonAncestorID: l,
          _getNextDescendantID: u,
          isAncestorIDOf: a,
          SEPARATOR: f,
        };
      e.exports = v;
    }.call(t, n(4)));
  },
  function (e, t) {
    "use strict";
    var n = {
        injectCreateReactRootIndex: function (e) {
          r.createReactRootIndex = e;
        },
      },
      r = { createReactRootIndex: null, injection: n };
    e.exports = r;
  },
  function (e, t) {
    "use strict";
    var n = {
      remove: function (e) {
        e._reactInternalInstance = void 0;
      },
      get: function (e) {
        return e._reactInternalInstance;
      },
      has: function (e) {
        return void 0 !== e._reactInternalInstance;
      },
      set: function (e, t) {
        e._reactInternalInstance = t;
      },
    };
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    var r = n(49),
      o = /\/?>/,
      i = {
        CHECKSUM_ATTR_NAME: "data-react-checksum",
        addChecksumToMarkup: function (e) {
          var t = r(e);
          return e.replace(o, " " + i.CHECKSUM_ATTR_NAME + '="' + t + '"$&');
        },
        canReuseMarkup: function (e, t) {
          var n = t.getAttribute(i.CHECKSUM_ATTR_NAME);
          n = n && parseInt(n, 10);
          var o = r(e);
          return o === n;
        },
      };
    e.exports = i;
  },
  function (e, t) {
    "use strict";
    function n(e) {
      for (var t = 1, n = 0, o = 0, i = e.length, a = -4 & i; a > o; ) {
        for (; o < Math.min(o + 4096, a); o += 4)
          n +=
            (t += e.charCodeAt(o)) +
            (t += e.charCodeAt(o + 1)) +
            (t += e.charCodeAt(o + 2)) +
            (t += e.charCodeAt(o + 3));
        (t %= r), (n %= r);
      }
      for (; i > o; o++) n += t += e.charCodeAt(o);
      return (t %= r), (n %= r), t | (n << 16);
    }
    var r = 65521;
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    function r() {
      o.attachRefs(this, this._currentElement);
    }
    var o = n(51),
      i = {
        mountComponent: function (e, t, n, o) {
          var i = e.mountComponent(t, n, o);
          return (
            e._currentElement &&
              null != e._currentElement.ref &&
              n.getReactMountReady().enqueue(r, e),
            i
          );
        },
        unmountComponent: function (e) {
          o.detachRefs(e, e._currentElement), e.unmountComponent();
        },
        receiveComponent: function (e, t, n, i) {
          var a = e._currentElement;
          if (t !== a || i !== e._context) {
            var s = o.shouldUpdateRefs(a, t);
            s && o.detachRefs(e, a),
              e.receiveComponent(t, n, i),
              s &&
                e._currentElement &&
                null != e._currentElement.ref &&
                n.getReactMountReady().enqueue(r, e);
          }
        },
        performUpdateIfNecessary: function (e, t) {
          e.performUpdateIfNecessary(t);
        },
      };
    e.exports = i;
  },
  function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      "function" == typeof e
        ? e(t.getPublicInstance())
        : i.addComponentAsRefTo(t, e, n);
    }
    function o(e, t, n) {
      "function" == typeof e ? e(null) : i.removeComponentAsRefFrom(t, e, n);
    }
    var i = n(52),
      a = {};
    (a.attachRefs = function (e, t) {
      if (null !== t && t !== !1) {
        var n = t.ref;
        null != n && r(n, e, t._owner);
      }
    }),
      (a.shouldUpdateRefs = function (e, t) {
        var n = null === e || e === !1,
          r = null === t || t === !1;
        return n || r || t._owner !== e._owner || t.ref !== e.ref;
      }),
      (a.detachRefs = function (e, t) {
        if (null !== t && t !== !1) {
          var n = t.ref;
          null != n && o(n, e, t._owner);
        }
      }),
      (e.exports = a);
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(13),
        o = {
          isValidOwner: function (e) {
            return !(
              !e ||
              "function" != typeof e.attachRef ||
              "function" != typeof e.detachRef
            );
          },
          addComponentAsRefTo: function (e, n, i) {
            o.isValidOwner(i)
              ? void 0
              : "production" !== t.env.NODE_ENV
              ? r(
                  !1,
                  "addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner)."
                )
              : r(!1),
              i.attachRef(n, e);
          },
          removeComponentAsRefFrom: function (e, n, i) {
            o.isValidOwner(i)
              ? void 0
              : "production" !== t.env.NODE_ENV
              ? r(
                  !1,
                  "removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might be removing a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner)."
                )
              : r(!1),
              i.getPublicInstance().refs[n] === e.getPublicInstance() &&
                i.detachRef(n);
          },
        };
      e.exports = o;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        u.enqueueUpdate(e);
      }
      function o(e, n) {
        var r = s.get(e);
        return r
          ? ("production" !== t.env.NODE_ENV &&
              ("production" !== t.env.NODE_ENV
                ? p(
                    null == i.current,
                    "%s(...): Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.",
                    n
                  )
                : void 0),
            r)
          : ("production" !== t.env.NODE_ENV &&
              ("production" !== t.env.NODE_ENV
                ? p(
                    !n,
                    "%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op. Please check the code for the %s component.",
                    n,
                    n,
                    e.constructor.displayName
                  )
                : void 0),
            null);
      }
      var i = n(5),
        a = n(42),
        s = n(47),
        u = n(54),
        l = n(39),
        c = n(13),
        p = n(25),
        d = {
          isMounted: function (e) {
            if ("production" !== t.env.NODE_ENV) {
              var n = i.current;
              null !== n &&
                ("production" !== t.env.NODE_ENV
                  ? p(
                      n._warnedAboutRefsInRender,
                      "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
                      n.getName() || "A component"
                    )
                  : void 0,
                (n._warnedAboutRefsInRender = !0));
            }
            var r = s.get(e);
            return r ? !!r._renderedComponent : !1;
          },
          enqueueCallback: function (e, n) {
            "function" != typeof n
              ? "production" !== t.env.NODE_ENV
                ? c(
                    !1,
                    "enqueueCallback(...): You called `setProps`, `replaceProps`, `setState`, `replaceState`, or `forceUpdate` with a callback that isn't callable."
                  )
                : c(!1)
              : void 0;
            var i = o(e);
            return i
              ? (i._pendingCallbacks
                  ? i._pendingCallbacks.push(n)
                  : (i._pendingCallbacks = [n]),
                void r(i))
              : null;
          },
          enqueueCallbackInternal: function (e, n) {
            "function" != typeof n
              ? "production" !== t.env.NODE_ENV
                ? c(
                    !1,
                    "enqueueCallback(...): You called `setProps`, `replaceProps`, `setState`, `replaceState`, or `forceUpdate` with a callback that isn't callable."
                  )
                : c(!1)
              : void 0,
              e._pendingCallbacks
                ? e._pendingCallbacks.push(n)
                : (e._pendingCallbacks = [n]),
              r(e);
          },
          enqueueForceUpdate: function (e) {
            var t = o(e, "forceUpdate");
            t && ((t._pendingForceUpdate = !0), r(t));
          },
          enqueueReplaceState: function (e, t) {
            var n = o(e, "replaceState");
            n &&
              ((n._pendingStateQueue = [t]),
              (n._pendingReplaceState = !0),
              r(n));
          },
          enqueueSetState: function (e, t) {
            var n = o(e, "setState");
            if (n) {
              var i = n._pendingStateQueue || (n._pendingStateQueue = []);
              i.push(t), r(n);
            }
          },
          enqueueSetProps: function (e, t) {
            var n = o(e, "setProps");
            n && d.enqueueSetPropsInternal(n, t);
          },
          enqueueSetPropsInternal: function (e, n) {
            var o = e._topLevelWrapper;
            o
              ? void 0
              : "production" !== t.env.NODE_ENV
              ? c(
                  !1,
                  "setProps(...): You called `setProps` on a component with a parent. This is an anti-pattern since props will get reactively updated when rendered. Instead, change the owner's `render` method to pass the correct value as props to the component where it is created."
                )
              : c(!1);
            var i = o._pendingElement || o._currentElement,
              s = i.props,
              u = l({}, s.props, n);
            (o._pendingElement = a.cloneAndReplaceProps(
              i,
              a.cloneAndReplaceProps(s, u)
            )),
              r(o);
          },
          enqueueReplaceProps: function (e, t) {
            var n = o(e, "replaceProps");
            n && d.enqueueReplacePropsInternal(n, t);
          },
          enqueueReplacePropsInternal: function (e, n) {
            var o = e._topLevelWrapper;
            o
              ? void 0
              : "production" !== t.env.NODE_ENV
              ? c(
                  !1,
                  "replaceProps(...): You called `replaceProps` on a component with a parent. This is an anti-pattern since props will get reactively updated when rendered. Instead, change the owner's `render` method to pass the correct value as props to the component where it is created."
                )
              : c(!1);
            var i = o._pendingElement || o._currentElement,
              s = i.props;
            (o._pendingElement = a.cloneAndReplaceProps(
              i,
              a.cloneAndReplaceProps(s, n)
            )),
              r(o);
          },
          enqueueElementInternal: function (e, t) {
            (e._pendingElement = t), r(e);
          },
        };
      e.exports = d;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r() {
        N.ReactReconcileTransaction && A
          ? void 0
          : "production" !== t.env.NODE_ENV
          ? v(
              !1,
              "ReactUpdates: must inject a reconcile transaction class and batching strategy"
            )
          : v(!1);
      }
      function o() {
        this.reinitializeTransaction(),
          (this.dirtyComponentsLength = null),
          (this.callbackQueue = c.getPooled()),
          (this.reconcileTransaction = N.ReactReconcileTransaction.getPooled(
            !1
          ));
      }
      function i(e, t, n, o, i, a) {
        r(), A.batchedUpdates(e, t, n, o, i, a);
      }
      function a(e, t) {
        return e._mountOrder - t._mountOrder;
      }
      function s(e) {
        var n = e.dirtyComponentsLength;
        n !== g.length
          ? "production" !== t.env.NODE_ENV
            ? v(
                !1,
                "Expected flush transaction's stored dirty-components length (%s) to match dirty-components array length (%s).",
                n,
                g.length
              )
            : v(!1)
          : void 0,
          g.sort(a);
        for (var r = 0; n > r; r++) {
          var o = g[r],
            i = o._pendingCallbacks;
          if (
            ((o._pendingCallbacks = null),
            f.performUpdateIfNecessary(o, e.reconcileTransaction),
            i)
          )
            for (var s = 0; s < i.length; s++)
              e.callbackQueue.enqueue(i[s], o.getPublicInstance());
        }
      }
      function u(e) {
        return (
          r(),
          A.isBatchingUpdates ? void g.push(e) : void A.batchedUpdates(u, e)
        );
      }
      function l(e, n) {
        A.isBatchingUpdates
          ? void 0
          : "production" !== t.env.NODE_ENV
          ? v(
              !1,
              "ReactUpdates.asap: Can't enqueue an asap callback in a context whereupdates are not being batched."
            )
          : v(!1),
          y.enqueue(e, n),
          (C = !0);
      }
      var c = n(55),
        p = n(56),
        d = n(18),
        f = n(50),
        h = n(57),
        m = n(39),
        v = n(13),
        g = [],
        y = c.getPooled(),
        C = !1,
        A = null,
        D = {
          initialize: function () {
            this.dirtyComponentsLength = g.length;
          },
          close: function () {
            this.dirtyComponentsLength !== g.length
              ? (g.splice(0, this.dirtyComponentsLength), w())
              : (g.length = 0);
          },
        },
        b = {
          initialize: function () {
            this.callbackQueue.reset();
          },
          close: function () {
            this.callbackQueue.notifyAll();
          },
        },
        E = [D, b];
      m(o.prototype, h.Mixin, {
        getTransactionWrappers: function () {
          return E;
        },
        destructor: function () {
          (this.dirtyComponentsLength = null),
            c.release(this.callbackQueue),
            (this.callbackQueue = null),
            N.ReactReconcileTransaction.release(this.reconcileTransaction),
            (this.reconcileTransaction = null);
        },
        perform: function (e, t, n) {
          return h.Mixin.perform.call(
            this,
            this.reconcileTransaction.perform,
            this.reconcileTransaction,
            e,
            t,
            n
          );
        },
      }),
        p.addPoolingTo(o);
      var w = function () {
        for (; g.length || C; ) {
          if (g.length) {
            var e = o.getPooled();
            e.perform(s, null, e), o.release(e);
          }
          if (C) {
            C = !1;
            var t = y;
            (y = c.getPooled()), t.notifyAll(), c.release(t);
          }
        }
      };
      w = d.measure("ReactUpdates", "flushBatchedUpdates", w);
      var x = {
          injectReconcileTransaction: function (e) {
            e
              ? void 0
              : "production" !== t.env.NODE_ENV
              ? v(
                  !1,
                  "ReactUpdates: must provide a reconcile transaction class"
                )
              : v(!1),
              (N.ReactReconcileTransaction = e);
          },
          injectBatchingStrategy: function (e) {
            e
              ? void 0
              : "production" !== t.env.NODE_ENV
              ? v(!1, "ReactUpdates: must provide a batching strategy")
              : v(!1),
              "function" != typeof e.batchedUpdates
                ? "production" !== t.env.NODE_ENV
                  ? v(
                      !1,
                      "ReactUpdates: must provide a batchedUpdates() function"
                    )
                  : v(!1)
                : void 0,
              "boolean" != typeof e.isBatchingUpdates
                ? "production" !== t.env.NODE_ENV
                  ? v(
                      !1,
                      "ReactUpdates: must provide an isBatchingUpdates boolean attribute"
                    )
                  : v(!1)
                : void 0,
              (A = e);
          },
        },
        N = {
          ReactReconcileTransaction: null,
          batchedUpdates: i,
          enqueueUpdate: u,
          flushBatchedUpdates: w,
          injection: x,
          asap: l,
        };
      e.exports = N;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r() {
        (this._callbacks = null), (this._contexts = null);
      }
      var o = n(56),
        i = n(39),
        a = n(13);
      i(r.prototype, {
        enqueue: function (e, t) {
          (this._callbacks = this._callbacks || []),
            (this._contexts = this._contexts || []),
            this._callbacks.push(e),
            this._contexts.push(t);
        },
        notifyAll: function () {
          var e = this._callbacks,
            n = this._contexts;
          if (e) {
            e.length !== n.length
              ? "production" !== t.env.NODE_ENV
                ? a(!1, "Mismatched list of contexts in callback queue")
                : a(!1)
              : void 0,
              (this._callbacks = null),
              (this._contexts = null);
            for (var r = 0; r < e.length; r++) e[r].call(n[r]);
            (e.length = 0), (n.length = 0);
          }
        },
        reset: function () {
          (this._callbacks = null), (this._contexts = null);
        },
        destructor: function () {
          this.reset();
        },
      }),
        o.addPoolingTo(r),
        (e.exports = r);
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(13),
        o = function (e) {
          var t = this;
          if (t.instancePool.length) {
            var n = t.instancePool.pop();
            return t.call(n, e), n;
          }
          return new t(e);
        },
        i = function (e, t) {
          var n = this;
          if (n.instancePool.length) {
            var r = n.instancePool.pop();
            return n.call(r, e, t), r;
          }
          return new n(e, t);
        },
        a = function (e, t, n) {
          var r = this;
          if (r.instancePool.length) {
            var o = r.instancePool.pop();
            return r.call(o, e, t, n), o;
          }
          return new r(e, t, n);
        },
        s = function (e, t, n, r) {
          var o = this;
          if (o.instancePool.length) {
            var i = o.instancePool.pop();
            return o.call(i, e, t, n, r), i;
          }
          return new o(e, t, n, r);
        },
        u = function (e, t, n, r, o) {
          var i = this;
          if (i.instancePool.length) {
            var a = i.instancePool.pop();
            return i.call(a, e, t, n, r, o), a;
          }
          return new i(e, t, n, r, o);
        },
        l = function (e) {
          var n = this;
          e instanceof n
            ? void 0
            : "production" !== t.env.NODE_ENV
            ? r(
                !1,
                "Trying to release an instance into a pool of a different type."
              )
            : r(!1),
            e.destructor(),
            n.instancePool.length < n.poolSize && n.instancePool.push(e);
        },
        c = 10,
        p = o,
        d = function (e, t) {
          var n = e;
          return (
            (n.instancePool = []),
            (n.getPooled = t || p),
            n.poolSize || (n.poolSize = c),
            (n.release = l),
            n
          );
        },
        f = {
          addPoolingTo: d,
          oneArgumentPooler: o,
          twoArgumentPooler: i,
          threeArgumentPooler: a,
          fourArgumentPooler: s,
          fiveArgumentPooler: u,
        };
      e.exports = f;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(13),
        o = {
          reinitializeTransaction: function () {
            (this.transactionWrappers = this.getTransactionWrappers()),
              this.wrapperInitData
                ? (this.wrapperInitData.length = 0)
                : (this.wrapperInitData = []),
              (this._isInTransaction = !1);
          },
          _isInTransaction: !1,
          getTransactionWrappers: null,
          isInTransaction: function () {
            return !!this._isInTransaction;
          },
          perform: function (e, n, o, i, a, s, u, l) {
            this.isInTransaction()
              ? "production" !== t.env.NODE_ENV
                ? r(
                    !1,
                    "Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction."
                  )
                : r(!1)
              : void 0;
            var c, p;
            try {
              (this._isInTransaction = !0),
                (c = !0),
                this.initializeAll(0),
                (p = e.call(n, o, i, a, s, u, l)),
                (c = !1);
            } finally {
              try {
                if (c)
                  try {
                    this.closeAll(0);
                  } catch (d) {}
                else this.closeAll(0);
              } finally {
                this._isInTransaction = !1;
              }
            }
            return p;
          },
          initializeAll: function (e) {
            for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
              var r = t[n];
              try {
                (this.wrapperInitData[n] = i.OBSERVED_ERROR),
                  (this.wrapperInitData[n] = r.initialize
                    ? r.initialize.call(this)
                    : null);
              } finally {
                if (this.wrapperInitData[n] === i.OBSERVED_ERROR)
                  try {
                    this.initializeAll(n + 1);
                  } catch (o) {}
              }
            }
          },
          closeAll: function (e) {
            this.isInTransaction()
              ? void 0
              : "production" !== t.env.NODE_ENV
              ? r(
                  !1,
                  "Transaction.closeAll(): Cannot close transaction when none are open."
                )
              : r(!1);
            for (var n = this.transactionWrappers, o = e; o < n.length; o++) {
              var a,
                s = n[o],
                u = this.wrapperInitData[o];
              try {
                (a = !0),
                  u !== i.OBSERVED_ERROR && s.close && s.close.call(this, u),
                  (a = !1);
              } finally {
                if (a)
                  try {
                    this.closeAll(o + 1);
                  } catch (l) {}
              }
            }
            this.wrapperInitData.length = 0;
          },
        },
        i = { Mixin: o, OBSERVED_ERROR: {} };
      e.exports = i;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      var n = {};
      "production" !== t.env.NODE_ENV && Object.freeze(n), (e.exports = n);
    }.call(t, n(4)));
  },
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n = !0;
      e: for (; n; ) {
        var r = e,
          i = t;
        if (((n = !1), r && i)) {
          if (r === i) return !0;
          if (o(r)) return !1;
          if (o(i)) {
            (e = r), (t = i.parentNode), (n = !0);
            continue e;
          }
          return r.contains
            ? r.contains(i)
            : r.compareDocumentPosition
            ? !!(16 & r.compareDocumentPosition(i))
            : !1;
        }
        return !1;
      }
    }
    var o = n(60);
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return o(e) && 3 == e.nodeType;
    }
    var o = n(61);
    e.exports = r;
  },
  function (e, t) {
    "use strict";
    function n(e) {
      return !(
        !e ||
        !("function" == typeof Node
          ? e instanceof Node
          : "object" == typeof e &&
            "number" == typeof e.nodeType &&
            "string" == typeof e.nodeName)
      );
    }
    e.exports = n;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        if (e) {
          var t = e.getName();
          if (t) return " Check the render method of `" + t + "`.";
        }
        return "";
      }
      function o(e) {
        return (
          "function" == typeof e &&
          "undefined" != typeof e.prototype &&
          "function" == typeof e.prototype.mountComponent &&
          "function" == typeof e.prototype.receiveComponent
        );
      }
      function i(e) {
        var n;
        if (null === e || e === !1) n = new s(i);
        else if ("object" == typeof e) {
          var a = e;
          !a || ("function" != typeof a.type && "string" != typeof a.type)
            ? "production" !== t.env.NODE_ENV
              ? c(
                  !1,
                  "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
                  null == a.type ? a.type : typeof a.type,
                  r(a._owner)
                )
              : c(!1)
            : void 0,
            (n =
              "string" == typeof a.type
                ? u.createInternalComponent(a)
                : o(a.type)
                ? new a.type(a)
                : new d());
        } else
          "string" == typeof e || "number" == typeof e
            ? (n = u.createInstanceForText(e))
            : "production" !== t.env.NODE_ENV
            ? c(!1, "Encountered invalid React node of type %s", typeof e)
            : c(!1);
        return (
          "production" !== t.env.NODE_ENV &&
            ("production" !== t.env.NODE_ENV
              ? p(
                  "function" == typeof n.construct &&
                    "function" == typeof n.mountComponent &&
                    "function" == typeof n.receiveComponent &&
                    "function" == typeof n.unmountComponent,
                  "Only React Components can be mounted."
                )
              : void 0),
          n.construct(e),
          (n._mountIndex = 0),
          (n._mountImage = null),
          "production" !== t.env.NODE_ENV &&
            ((n._isOwnerNecessary = !1), (n._warnedAboutRefsInRender = !1)),
          "production" !== t.env.NODE_ENV &&
            Object.preventExtensions &&
            Object.preventExtensions(n),
          n
        );
      }
      var a = n(63),
        s = n(68),
        u = n(69),
        l = n(39),
        c = n(13),
        p = n(25),
        d = function () {};
      l(d.prototype, a.Mixin, { _instantiateReactComponent: i }),
        (e.exports = i);
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        var t = e._currentElement._owner || null;
        if (t) {
          var n = t.getName();
          if (n) return " Check the render method of `" + n + "`.";
        }
        return "";
      }
      function o(e) {}
      var i = n(64),
        a = n(5),
        s = n(42),
        u = n(47),
        l = n(18),
        c = n(65),
        p = n(66),
        d = n(50),
        f = n(53),
        h = n(39),
        m = n(58),
        v = n(13),
        g = n(67),
        y = n(25);
      o.prototype.render = function () {
        var e = u.get(this)._currentElement.type;
        return e(this.props, this.context, this.updater);
      };
      var C = 1,
        A = {
          construct: function (e) {
            (this._currentElement = e),
              (this._rootNodeID = null),
              (this._instance = null),
              (this._pendingElement = null),
              (this._pendingStateQueue = null),
              (this._pendingReplaceState = !1),
              (this._pendingForceUpdate = !1),
              (this._renderedComponent = null),
              (this._context = null),
              (this._mountOrder = 0),
              (this._topLevelWrapper = null),
              (this._pendingCallbacks = null);
          },
          mountComponent: function (e, n, r) {
            (this._context = r),
              (this._mountOrder = C++),
              (this._rootNodeID = e);
            var i,
              l,
              c = this._processProps(this._currentElement.props),
              p = this._processContext(r),
              h = this._currentElement.type,
              g = "prototype" in h;
            if (g)
              if ("production" !== t.env.NODE_ENV) {
                a.current = this;
                try {
                  i = new h(c, p, f);
                } finally {
                  a.current = null;
                }
              } else i = new h(c, p, f);
            (g && null !== i && i !== !1 && !s.isValidElement(i)) ||
              ((l = i), (i = new o(h))),
              "production" !== t.env.NODE_ENV &&
                (null == i.render
                  ? "production" !== t.env.NODE_ENV
                    ? y(
                        !1,
                        "%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`, returned null/false from a stateless component, or tried to render an element whose type is a function that isn't a React component.",
                        h.displayName || h.name || "Component"
                      )
                    : void 0
                  : "production" !== t.env.NODE_ENV
                  ? y(
                      (h.prototype && h.prototype.isReactComponent) ||
                        !g ||
                        !(i instanceof h),
                      "%s(...): React component classes must extend React.Component.",
                      h.displayName || h.name || "Component"
                    )
                  : void 0),
              (i.props = c),
              (i.context = p),
              (i.refs = m),
              (i.updater = f),
              (this._instance = i),
              u.set(i, this),
              "production" !== t.env.NODE_ENV &&
                ("production" !== t.env.NODE_ENV
                  ? y(
                      !i.getInitialState ||
                        i.getInitialState.isReactClassApproved,
                      "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
                      this.getName() || "a component"
                    )
                  : void 0,
                "production" !== t.env.NODE_ENV
                  ? y(
                      !i.getDefaultProps ||
                        i.getDefaultProps.isReactClassApproved,
                      "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
                      this.getName() || "a component"
                    )
                  : void 0,
                "production" !== t.env.NODE_ENV
                  ? y(
                      !i.propTypes,
                      "propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",
                      this.getName() || "a component"
                    )
                  : void 0,
                "production" !== t.env.NODE_ENV
                  ? y(
                      !i.contextTypes,
                      "contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",
                      this.getName() || "a component"
                    )
                  : void 0,
                "production" !== t.env.NODE_ENV
                  ? y(
                      "function" != typeof i.componentShouldUpdate,
                      "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
                      this.getName() || "A component"
                    )
                  : void 0,
                "production" !== t.env.NODE_ENV
                  ? y(
                      "function" != typeof i.componentDidUnmount,
                      "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
                      this.getName() || "A component"
                    )
                  : void 0,
                "production" !== t.env.NODE_ENV
                  ? y(
                      "function" != typeof i.componentWillRecieveProps,
                      "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
                      this.getName() || "A component"
                    )
                  : void 0);
            var A = i.state;
            void 0 === A && (i.state = A = null),
              "object" != typeof A || Array.isArray(A)
                ? "production" !== t.env.NODE_ENV
                  ? v(
                      !1,
                      "%s.state: must be set to an object or null",
                      this.getName() || "ReactCompositeComponent"
                    )
                  : v(!1)
                : void 0,
              (this._pendingStateQueue = null),
              (this._pendingReplaceState = !1),
              (this._pendingForceUpdate = !1),
              i.componentWillMount &&
                (i.componentWillMount(),
                this._pendingStateQueue &&
                  (i.state = this._processPendingState(i.props, i.context))),
              void 0 === l && (l = this._renderValidatedComponent()),
              (this._renderedComponent = this._instantiateReactComponent(l));
            var D = d.mountComponent(
              this._renderedComponent,
              e,
              n,
              this._processChildContext(r)
            );
            return (
              i.componentDidMount &&
                n.getReactMountReady().enqueue(i.componentDidMount, i),
              D
            );
          },
          unmountComponent: function () {
            var e = this._instance;
            e.componentWillUnmount && e.componentWillUnmount(),
              d.unmountComponent(this._renderedComponent),
              (this._renderedComponent = null),
              (this._instance = null),
              (this._pendingStateQueue = null),
              (this._pendingReplaceState = !1),
              (this._pendingForceUpdate = !1),
              (this._pendingCallbacks = null),
              (this._pendingElement = null),
              (this._context = null),
              (this._rootNodeID = null),
              (this._topLevelWrapper = null),
              u.remove(e);
          },
          _maskContext: function (e) {
            var t = null,
              n = this._currentElement.type,
              r = n.contextTypes;
            if (!r) return m;
            t = {};
            for (var o in r) t[o] = e[o];
            return t;
          },
          _processContext: function (e) {
            var n = this._maskContext(e);
            if ("production" !== t.env.NODE_ENV) {
              var r = this._currentElement.type;
              r.contextTypes &&
                this._checkPropTypes(r.contextTypes, n, c.context);
            }
            return n;
          },
          _processChildContext: function (e) {
            var n = this._currentElement.type,
              r = this._instance,
              o = r.getChildContext && r.getChildContext();
            if (o) {
              "object" != typeof n.childContextTypes
                ? "production" !== t.env.NODE_ENV
                  ? v(
                      !1,
                      "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
                      this.getName() || "ReactCompositeComponent"
                    )
                  : v(!1)
                : void 0,
                "production" !== t.env.NODE_ENV &&
                  this._checkPropTypes(n.childContextTypes, o, c.childContext);
              for (var i in o)
                i in n.childContextTypes
                  ? void 0
                  : "production" !== t.env.NODE_ENV
                  ? v(
                      !1,
                      '%s.getChildContext(): key "%s" is not defined in childContextTypes.',
                      this.getName() || "ReactCompositeComponent",
                      i
                    )
                  : v(!1);
              return h({}, e, o);
            }
            return e;
          },
          _processProps: function (e) {
            if ("production" !== t.env.NODE_ENV) {
              var n = this._currentElement.type;
              n.propTypes && this._checkPropTypes(n.propTypes, e, c.prop);
            }
            return e;
          },
          _checkPropTypes: function (e, n, o) {
            var i = this.getName();
            for (var a in e)
              if (e.hasOwnProperty(a)) {
                var s;
                try {
                  "function" != typeof e[a]
                    ? "production" !== t.env.NODE_ENV
                      ? v(
                          !1,
                          "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",
                          i || "React class",
                          p[o],
                          a
                        )
                      : v(!1)
                    : void 0,
                    (s = e[a](n, a, i, o));
                } catch (u) {
                  s = u;
                }
                if (s instanceof Error) {
                  var l = r(this);
                  o === c.prop
                    ? "production" !== t.env.NODE_ENV
                      ? y(!1, "Failed Composite propType: %s%s", s.message, l)
                      : void 0
                    : "production" !== t.env.NODE_ENV
                    ? y(!1, "Failed Context Types: %s%s", s.message, l)
                    : void 0;
                }
              }
          },
          receiveComponent: function (e, t, n) {
            var r = this._currentElement,
              o = this._context;
            (this._pendingElement = null), this.updateComponent(t, r, e, o, n);
          },
          performUpdateIfNecessary: function (e) {
            null != this._pendingElement &&
              d.receiveComponent(
                this,
                this._pendingElement || this._currentElement,
                e,
                this._context
              ),
              (null !== this._pendingStateQueue || this._pendingForceUpdate) &&
                this.updateComponent(
                  e,
                  this._currentElement,
                  this._currentElement,
                  this._context,
                  this._context
                );
          },
          updateComponent: function (e, n, r, o, i) {
            var a,
              s = this._instance,
              u = this._context === i ? s.context : this._processContext(i);
            n === r
              ? (a = r.props)
              : ((a = this._processProps(r.props)),
                s.componentWillReceiveProps &&
                  s.componentWillReceiveProps(a, u));
            var l = this._processPendingState(a, u),
              c =
                this._pendingForceUpdate ||
                !s.shouldComponentUpdate ||
                s.shouldComponentUpdate(a, l, u);
            "production" !== t.env.NODE_ENV &&
              ("production" !== t.env.NODE_ENV
                ? y(
                    "undefined" != typeof c,
                    "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
                    this.getName() || "ReactCompositeComponent"
                  )
                : void 0),
              c
                ? ((this._pendingForceUpdate = !1),
                  this._performComponentUpdate(r, a, l, u, e, i))
                : ((this._currentElement = r),
                  (this._context = i),
                  (s.props = a),
                  (s.state = l),
                  (s.context = u));
          },
          _processPendingState: function (e, t) {
            var n = this._instance,
              r = this._pendingStateQueue,
              o = this._pendingReplaceState;
            if (
              ((this._pendingReplaceState = !1),
              (this._pendingStateQueue = null),
              !r)
            )
              return n.state;
            if (o && 1 === r.length) return r[0];
            for (
              var i = h({}, o ? r[0] : n.state), a = o ? 1 : 0;
              a < r.length;
              a++
            ) {
              var s = r[a];
              h(i, "function" == typeof s ? s.call(n, i, e, t) : s);
            }
            return i;
          },
          _performComponentUpdate: function (e, t, n, r, o, i) {
            var a,
              s,
              u,
              l = this._instance,
              c = Boolean(l.componentDidUpdate);
            c && ((a = l.props), (s = l.state), (u = l.context)),
              l.componentWillUpdate && l.componentWillUpdate(t, n, r),
              (this._currentElement = e),
              (this._context = i),
              (l.props = t),
              (l.state = n),
              (l.context = r),
              this._updateRenderedComponent(o, i),
              c &&
                o
                  .getReactMountReady()
                  .enqueue(l.componentDidUpdate.bind(l, a, s, u), l);
          },
          _updateRenderedComponent: function (e, t) {
            var n = this._renderedComponent,
              r = n._currentElement,
              o = this._renderValidatedComponent();
            if (g(r, o))
              d.receiveComponent(n, o, e, this._processChildContext(t));
            else {
              var i = this._rootNodeID,
                a = n._rootNodeID;
              d.unmountComponent(n),
                (this._renderedComponent = this._instantiateReactComponent(o));
              var s = d.mountComponent(
                this._renderedComponent,
                i,
                e,
                this._processChildContext(t)
              );
              this._replaceNodeWithMarkupByID(a, s);
            }
          },
          _replaceNodeWithMarkupByID: function (e, t) {
            i.replaceNodeWithMarkupByID(e, t);
          },
          _renderValidatedComponentWithoutOwnerOrContext: function () {
            var e = this._instance,
              n = e.render();
            return (
              "production" !== t.env.NODE_ENV &&
                "undefined" == typeof n &&
                e.render._isMockFunction &&
                (n = null),
              n
            );
          },
          _renderValidatedComponent: function () {
            var e;
            a.current = this;
            try {
              e = this._renderValidatedComponentWithoutOwnerOrContext();
            } finally {
              a.current = null;
            }
            return (
              null === e || e === !1 || s.isValidElement(e)
                ? void 0
                : "production" !== t.env.NODE_ENV
                ? v(
                    !1,
                    "%s.render(): A valid ReactComponent must be returned. You may have returned undefined, an array or some other invalid object.",
                    this.getName() || "ReactCompositeComponent"
                  )
                : v(!1),
              e
            );
          },
          attachRef: function (e, n) {
            var r = this.getPublicInstance();
            null == r
              ? "production" !== t.env.NODE_ENV
                ? v(!1, "Stateless function components cannot have refs.")
                : v(!1)
              : void 0;
            var o = n.getPublicInstance();
            if ("production" !== t.env.NODE_ENV) {
              var i = n && n.getName ? n.getName() : "a component";
              "production" !== t.env.NODE_ENV
                ? y(
                    null != o,
                    'Stateless function components cannot be given refs (See ref "%s" in %s created by %s). Attempts to access this ref will fail.',
                    e,
                    i,
                    this.getName()
                  )
                : void 0;
            }
            var a = r.refs === m ? (r.refs = {}) : r.refs;
            a[e] = o;
          },
          detachRef: function (e) {
            var t = this.getPublicInstance().refs;
            delete t[e];
          },
          getName: function () {
            var e = this._currentElement.type,
              t = this._instance && this._instance.constructor;
            return (
              e.displayName ||
              (t && t.displayName) ||
              e.name ||
              (t && t.name) ||
              null
            );
          },
          getPublicInstance: function () {
            var e = this._instance;
            return e instanceof o ? null : e;
          },
          _instantiateReactComponent: null,
        };
      l.measureMethods(A, "ReactCompositeComponent", {
        mountComponent: "mountComponent",
        updateComponent: "updateComponent",
        _renderValidatedComponent: "_renderValidatedComponent",
      });
      var D = { Mixin: A };
      e.exports = D;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(13),
        o = !1,
        i = {
          unmountIDFromEnvironment: null,
          replaceNodeWithMarkupByID: null,
          processChildrenUpdates: null,
          injection: {
            injectEnvironment: function (e) {
              o
                ? "production" !== t.env.NODE_ENV
                  ? r(
                      !1,
                      "ReactCompositeComponent: injectEnvironment() can only be called once."
                    )
                  : r(!1)
                : void 0,
                (i.unmountIDFromEnvironment = e.unmountIDFromEnvironment),
                (i.replaceNodeWithMarkupByID = e.replaceNodeWithMarkupByID),
                (i.processChildrenUpdates = e.processChildrenUpdates),
                (o = !0);
            },
          },
        };
      e.exports = i;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    "use strict";
    var r = n(17),
      o = r({
        prop: null,
        context: null,
        childContext: null,
      });
    e.exports = o;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      var n = {};
      "production" !== t.env.NODE_ENV &&
        (n = {
          prop: "prop",
          context: "context",
          childContext: "child context",
        }),
        (e.exports = n);
    }.call(t, n(4)));
  },
  function (e, t) {
    "use strict";
    function n(e, t) {
      var n = null === e || e === !1,
        r = null === t || t === !1;
      if (n || r) return n === r;
      var o = typeof e,
        i = typeof t;
      return "string" === o || "number" === o
        ? "string" === i || "number" === i
        : "object" === i && e.type === t.type && e.key === t.key;
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    function r() {
      a.registerNullComponentID(this._rootNodeID);
    }
    var o,
      i = n(42),
      a = n(44),
      s = n(50),
      u = n(39),
      l = {
        injectEmptyComponent: function (e) {
          o = i.createElement(e);
        },
      },
      c = function (e) {
        (this._currentElement = null),
          (this._rootNodeID = null),
          (this._renderedComponent = e(o));
      };
    u(c.prototype, {
      construct: function (e) {},
      mountComponent: function (e, t, n) {
        return (
          t.getReactMountReady().enqueue(r, this),
          (this._rootNodeID = e),
          s.mountComponent(this._renderedComponent, e, t, n)
        );
      },
      receiveComponent: function () {},
      unmountComponent: function (e, t, n) {
        s.unmountComponent(this._renderedComponent),
          a.deregisterNullComponentID(this._rootNodeID),
          (this._rootNodeID = null),
          (this._renderedComponent = null);
      },
    }),
      (c.injection = l),
      (e.exports = c);
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        if ("function" == typeof e.type) return e.type;
        var t = e.type,
          n = p[t];
        return null == n && (p[t] = n = l(t)), n;
      }
      function o(e) {
        return (
          c
            ? void 0
            : "production" !== t.env.NODE_ENV
            ? u(!1, "There is no registered component for the tag %s", e.type)
            : u(!1),
          new c(e.type, e.props)
        );
      }
      function i(e) {
        return new d(e);
      }
      function a(e) {
        return e instanceof d;
      }
      var s = n(39),
        u = n(13),
        l = null,
        c = null,
        p = {},
        d = null,
        f = {
          injectGenericComponentClass: function (e) {
            c = e;
          },
          injectTextComponentClass: function (e) {
            d = e;
          },
          injectComponentClasses: function (e) {
            s(p, e);
          },
        },
        h = {
          getComponentClassForElement: r,
          createInternalComponent: o,
          createInstanceForText: i,
          isTextComponent: a,
          injection: f,
        };
      e.exports = h;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(39),
        o = n(15),
        i = n(25),
        a = o;
      if ("production" !== t.env.NODE_ENV) {
        var s = [
            "address",
            "applet",
            "area",
            "article",
            "aside",
            "base",
            "basefont",
            "bgsound",
            "blockquote",
            "body",
            "br",
            "button",
            "caption",
            "center",
            "col",
            "colgroup",
            "dd",
            "details",
            "dir",
            "div",
            "dl",
            "dt",
            "embed",
            "fieldset",
            "figcaption",
            "figure",
            "footer",
            "form",
            "frame",
            "frameset",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hgroup",
            "hr",
            "html",
            "iframe",
            "img",
            "input",
            "isindex",
            "li",
            "link",
            "listing",
            "main",
            "marquee",
            "menu",
            "menuitem",
            "meta",
            "nav",
            "noembed",
            "noframes",
            "noscript",
            "object",
            "ol",
            "p",
            "param",
            "plaintext",
            "pre",
            "script",
            "section",
            "select",
            "source",
            "style",
            "summary",
            "table",
            "tbody",
            "td",
            "template",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "title",
            "tr",
            "track",
            "ul",
            "wbr",
            "xmp",
          ],
          u = [
            "applet",
            "caption",
            "html",
            "table",
            "td",
            "th",
            "marquee",
            "object",
            "template",
            "foreignObject",
            "desc",
            "title",
          ],
          l = u.concat(["button"]),
          c = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"],
          p = {
            parentTag: null,
            formTag: null,
            aTagInScope: null,
            buttonTagInScope: null,
            nobrTagInScope: null,
            pTagInButtonScope: null,
            listItemTagAutoclosing: null,
            dlItemTagAutoclosing: null,
          },
          d = function (e, t, n) {
            var o = r({}, e || p),
              i = { tag: t, instance: n };
            return (
              -1 !== u.indexOf(t) &&
                ((o.aTagInScope = null),
                (o.buttonTagInScope = null),
                (o.nobrTagInScope = null)),
              -1 !== l.indexOf(t) && (o.pTagInButtonScope = null),
              -1 !== s.indexOf(t) &&
                "address" !== t &&
                "div" !== t &&
                "p" !== t &&
                ((o.listItemTagAutoclosing = null),
                (o.dlItemTagAutoclosing = null)),
              (o.parentTag = i),
              "form" === t && (o.formTag = i),
              "a" === t && (o.aTagInScope = i),
              "button" === t && (o.buttonTagInScope = i),
              "nobr" === t && (o.nobrTagInScope = i),
              "p" === t && (o.pTagInButtonScope = i),
              "li" === t && (o.listItemTagAutoclosing = i),
              ("dd" !== t && "dt" !== t) || (o.dlItemTagAutoclosing = i),
              o
            );
          },
          f = function (e, t) {
            switch (t) {
              case "select":
                return "option" === e || "optgroup" === e || "#text" === e;
              case "optgroup":
                return "option" === e || "#text" === e;
              case "option":
                return "#text" === e;
              case "tr":
                return (
                  "th" === e ||
                  "td" === e ||
                  "style" === e ||
                  "script" === e ||
                  "template" === e
                );
              case "tbody":
              case "thead":
              case "tfoot":
                return (
                  "tr" === e ||
                  "style" === e ||
                  "script" === e ||
                  "template" === e
                );
              case "colgroup":
                return "col" === e || "template" === e;
              case "table":
                return (
                  "caption" === e ||
                  "colgroup" === e ||
                  "tbody" === e ||
                  "tfoot" === e ||
                  "thead" === e ||
                  "style" === e ||
                  "script" === e ||
                  "template" === e
                );
              case "head":
                return (
                  "base" === e ||
                  "basefont" === e ||
                  "bgsound" === e ||
                  "link" === e ||
                  "meta" === e ||
                  "title" === e ||
                  "noscript" === e ||
                  "noframes" === e ||
                  "style" === e ||
                  "script" === e ||
                  "template" === e
                );
              case "html":
                return "head" === e || "body" === e;
            }
            switch (e) {
              case "h1":
              case "h2":
              case "h3":
              case "h4":
              case "h5":
              case "h6":
                return (
                  "h1" !== t &&
                  "h2" !== t &&
                  "h3" !== t &&
                  "h4" !== t &&
                  "h5" !== t &&
                  "h6" !== t
                );
              case "rp":
              case "rt":
                return -1 === c.indexOf(t);
              case "caption":
              case "col":
              case "colgroup":
              case "frame":
              case "head":
              case "tbody":
              case "td":
              case "tfoot":
              case "th":
              case "thead":
              case "tr":
                return null == t;
            }
            return !0;
          },
          h = function (e, t) {
            switch (e) {
              case "address":
              case "article":
              case "aside":
              case "blockquote":
              case "center":
              case "details":
              case "dialog":
              case "dir":
              case "div":
              case "dl":
              case "fieldset":
              case "figcaption":
              case "figure":
              case "footer":
              case "header":
              case "hgroup":
              case "main":
              case "menu":
              case "nav":
              case "ol":
              case "p":
              case "section":
              case "summary":
              case "ul":
              case "pre":
              case "listing":
              case "table":
              case "hr":
              case "xmp":
              case "h1":
              case "h2":
              case "h3":
              case "h4":
              case "h5":
              case "h6":
                return t.pTagInButtonScope;
              case "form":
                return t.formTag || t.pTagInButtonScope;
              case "li":
                return t.listItemTagAutoclosing;
              case "dd":
              case "dt":
                return t.dlItemTagAutoclosing;
              case "button":
                return t.buttonTagInScope;
              case "a":
                return t.aTagInScope;
              case "nobr":
                return t.nobrTagInScope;
            }
            return null;
          },
          m = function (e) {
            if (!e) return [];
            var t = [];
            do t.push(e);
            while ((e = e._currentElement._owner));
            return t.reverse(), t;
          },
          v = {};
        (a = function (e, n, r) {
          r = r || p;
          var o = r.parentTag,
            a = o && o.tag,
            s = f(e, a) ? null : o,
            u = s ? null : h(e, r),
            l = s || u;
          if (l) {
            var c,
              d = l.tag,
              g = l.instance,
              y = n && n._currentElement._owner,
              C = g && g._currentElement._owner,
              A = m(y),
              D = m(C),
              b = Math.min(A.length, D.length),
              E = -1;
            for (c = 0; b > c && A[c] === D[c]; c++) E = c;
            var w = "(unknown)",
              x = A.slice(E + 1).map(function (e) {
                return e.getName() || w;
              }),
              N = D.slice(E + 1).map(function (e) {
                return e.getName() || w;
              }),
              k = []
                .concat(
                  -1 !== E ? A[E].getName() || w : [],
                  N,
                  d,
                  u ? ["..."] : [],
                  x,
                  e
                )
                .join(" > "),
              S = !!s + "|" + e + "|" + d + "|" + k;
            if (v[S]) return;
            if (((v[S] = !0), s)) {
              var B = "";
              "table" === d &&
                "tr" === e &&
                (B +=
                  " Add a <tbody> to your code to match the DOM tree generated by the browser."),
                "production" !== t.env.NODE_ENV
                  ? i(
                      !1,
                      "validateDOMNesting(...): <%s> cannot appear as a child of <%s>. See %s.%s",
                      e,
                      d,
                      k,
                      B
                    )
                  : void 0;
            } else
              "production" !== t.env.NODE_ENV
                ? i(
                    !1,
                    "validateDOMNesting(...): <%s> cannot appear as a descendant of <%s>. See %s.",
                    e,
                    d,
                    k
                  )
                : void 0;
          }
        }),
          (a.ancestorInfoContextKey =
            "__validateDOMNesting_ancestorInfo$" +
            Math.random().toString(36).slice(2)),
          (a.updatedAncestorInfo = d),
          (a.isTagValidInContext = function (e, t) {
            t = t || p;
            var n = t.parentTag,
              r = n && n.tag;
            return f(e, r) && !h(e, t);
          });
      }
      e.exports = a;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r() {
        if (
          !x &&
          ((x = !0),
          g.EventEmitter.injectReactEventListener(v),
          g.EventPluginHub.injectEventPluginOrder(s),
          g.EventPluginHub.injectInstanceHandle(y),
          g.EventPluginHub.injectMount(C),
          g.EventPluginHub.injectEventPluginsByName({
            SimpleEventPlugin: E,
            EnterLeaveEventPlugin: u,
            ChangeEventPlugin: i,
            SelectEventPlugin: D,
            BeforeInputEventPlugin: o,
          }),
          g.NativeComponent.injectGenericComponentClass(h),
          g.NativeComponent.injectTextComponentClass(m),
          g.Class.injectMixin(p),
          g.DOMProperty.injectDOMPropertyConfig(c),
          g.DOMProperty.injectDOMPropertyConfig(w),
          g.EmptyComponent.injectEmptyComponent("noscript"),
          g.Updates.injectReconcileTransaction(A),
          g.Updates.injectBatchingStrategy(f),
          g.RootIndex.injectCreateReactRootIndex(
            l.canUseDOM ? a.createReactRootIndex : b.createReactRootIndex
          ),
          g.Component.injectEnvironment(d),
          "production" !== t.env.NODE_ENV)
        ) {
          var e = (l.canUseDOM && window.location.href) || "";
          if (/[?&]react_perf\b/.test(e)) {
            var r = n(142);
            r.start();
          }
        }
      }
      var o = n(72),
        i = n(80),
        a = n(83),
        s = n(84),
        u = n(85),
        l = n(9),
        c = n(89),
        p = n(90),
        d = n(26),
        f = n(92),
        h = n(93),
        m = n(6),
        v = n(118),
        g = n(121),
        y = n(45),
        C = n(28),
        A = n(125),
        D = n(130),
        b = n(131),
        E = n(132),
        w = n(141),
        x = !1;
      e.exports = { inject: r };
    }.call(t, n(4)));
  },
  function (e, t, n) {
    "use strict";
    function r() {
      var e = window.opera;
      return (
        "object" == typeof e &&
        "function" == typeof e.version &&
        parseInt(e.version(), 10) <= 12
      );
    }
    function o(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
    }
    function i(e) {
      switch (e) {
        case S.topCompositionStart:
          return B.compositionStart;
        case S.topCompositionEnd:
          return B.compositionEnd;
        case S.topCompositionUpdate:
          return B.compositionUpdate;
      }
    }
    function a(e, t) {
      return e === S.topKeyDown && t.keyCode === D;
    }
    function s(e, t) {
      switch (e) {
        case S.topKeyUp:
          return -1 !== A.indexOf(t.keyCode);
        case S.topKeyDown:
          return t.keyCode !== D;
        case S.topKeyPress:
        case S.topMouseDown:
        case S.topBlur:
          return !0;
        default:
          return !1;
      }
    }
    function u(e) {
      var t = e.detail;
      return "object" == typeof t && "data" in t ? t.data : null;
    }
    function l(e, t, n, r, o) {
      var l, c;
      if (
        (b
          ? (l = i(e))
          : M
          ? s(e, r) && (l = B.compositionEnd)
          : a(e, r) && (l = B.compositionStart),
        !l)
      )
        return null;
      x &&
        (M || l !== B.compositionStart
          ? l === B.compositionEnd && M && (c = M.getData())
          : (M = v.getPooled(t)));
      var p = g.getPooled(l, n, r, o);
      if (c) p.data = c;
      else {
        var d = u(r);
        null !== d && (p.data = d);
      }
      return h.accumulateTwoPhaseDispatches(p), p;
    }
    function c(e, t) {
      switch (e) {
        case S.topCompositionEnd:
          return u(t);
        case S.topKeyPress:
          var n = t.which;
          return n !== N ? null : ((_ = !0), k);
        case S.topTextInput:
          var r = t.data;
          return r === k && _ ? null : r;
        default:
          return null;
      }
    }
    function p(e, t) {
      if (M) {
        if (e === S.topCompositionEnd || s(e, t)) {
          var n = M.getData();
          return v.release(M), (M = null), n;
        }
        return null;
      }
      switch (e) {
        case S.topPaste:
          return null;
        case S.topKeyPress:
          return t.which && !o(t) ? String.fromCharCode(t.which) : null;
        case S.topCompositionEnd:
          return x ? null : t.data;
        default:
          return null;
      }
    }
    function d(e, t, n, r, o) {
      var i;
      if (((i = w ? c(e, r) : p(e, r)), !i)) return null;
      var a = y.getPooled(B.beforeInput, n, r, o);
      return (a.data = i), h.accumulateTwoPhaseDispatches(a), a;
    }
    var f = n(30),
      h = n(73),
      m = n(9),
      v = n(74),
      g = n(76),
      y = n(78),
      C = n(79),
      A = [9, 13, 27, 32],
      D = 229,
      b = m.canUseDOM && "CompositionEvent" in window,
      E = null;
    m.canUseDOM && "documentMode" in document && (E = document.documentMode);
    var w = m.canUseDOM && "TextEvent" in window && !E && !r(),
      x = m.canUseDOM && (!b || (E && E > 8 && 11 >= E)),
      N = 32,
      k = String.fromCharCode(N),
      S = f.topLevelTypes,
      B = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: C({ onBeforeInput: null }),
            captured: C({ onBeforeInputCapture: null }),
          },
          dependencies: [
            S.topCompositionEnd,
            S.topKeyPress,
            S.topTextInput,
            S.topPaste,
          ],
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: C({ onCompositionEnd: null }),
            captured: C({ onCompositionEndCapture: null }),
          },
          dependencies: [
            S.topBlur,
            S.topCompositionEnd,
            S.topKeyDown,
            S.topKeyPress,
            S.topKeyUp,
            S.topMouseDown,
          ],
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: C({ onCompositionStart: null }),
            captured: C({ onCompositionStartCapture: null }),
          },
          dependencies: [
            S.topBlur,
            S.topCompositionStart,
            S.topKeyDown,
            S.topKeyPress,
            S.topKeyUp,
            S.topMouseDown,
          ],
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: C({ onCompositionUpdate: null }),
            captured: C({ onCompositionUpdateCapture: null }),
          },
          dependencies: [
            S.topBlur,
            S.topCompositionUpdate,
            S.topKeyDown,
            S.topKeyPress,
            S.topKeyUp,
            S.topMouseDown,
          ],
        },
      },
      _ = !1,
      M = null,
      O = {
        eventTypes: B,
        extractEvents: function (e, t, n, r, o) {
          return [l(e, t, n, r, o), d(e, t, n, r, o)];
        },
      };
    e.exports = O;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e, t, n) {
        var r = t.dispatchConfig.phasedRegistrationNames[n];
        return C(e, r);
      }
      function o(e, n, o) {
        "production" !== t.env.NODE_ENV &&
          ("production" !== t.env.NODE_ENV
            ? m(e, "Dispatching id must not be null")
            : void 0);
        var i = n ? y.bubbled : y.captured,
          a = r(e, o, i);
        a &&
          ((o._dispatchListeners = v(o._dispatchListeners, a)),
          (o._dispatchIDs = v(o._dispatchIDs, e)));
      }
      function i(e) {
        e &&
          e.dispatchConfig.phasedRegistrationNames &&
          h.injection
            .getInstanceHandle()
            .traverseTwoPhase(e.dispatchMarker, o, e);
      }
      function a(e) {
        e &&
          e.dispatchConfig.phasedRegistrationNames &&
          h.injection
            .getInstanceHandle()
            .traverseTwoPhaseSkipTarget(e.dispatchMarker, o, e);
      }
      function s(e, t, n) {
        if (n && n.dispatchConfig.registrationName) {
          var r = n.dispatchConfig.registrationName,
            o = C(e, r);
          o &&
            ((n._dispatchListeners = v(n._dispatchListeners, o)),
            (n._dispatchIDs = v(n._dispatchIDs, e)));
        }
      }
      function u(e) {
        e && e.dispatchConfig.registrationName && s(e.dispatchMarker, null, e);
      }
      function l(e) {
        g(e, i);
      }
      function c(e) {
        g(e, a);
      }
      function p(e, t, n, r) {
        h.injection.getInstanceHandle().traverseEnterLeave(n, r, s, e, t);
      }
      function d(e) {
        g(e, u);
      }
      var f = n(30),
        h = n(31),
        m = n(25),
        v = n(35),
        g = n(36),
        y = f.PropagationPhases,
        C = h.getListener,
        A = {
          accumulateTwoPhaseDispatches: l,
          accumulateTwoPhaseDispatchesSkipTarget: c,
          accumulateDirectDispatches: d,
          accumulateEnterLeaveDispatches: p,
        };
      e.exports = A;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      (this._root = e),
        (this._startText = this.getText()),
        (this._fallbackText = null);
    }
    var o = n(56),
      i = n(39),
      a = n(75);
    i(r.prototype, {
      destructor: function () {
        (this._root = null),
          (this._startText = null),
          (this._fallbackText = null);
      },
      getText: function () {
        return "value" in this._root ? this._root.value : this._root[a()];
      },
      getData: function () {
        if (this._fallbackText) return this._fallbackText;
        var e,
          t,
          n = this._startText,
          r = n.length,
          o = this.getText(),
          i = o.length;
        for (e = 0; r > e && n[e] === o[e]; e++);
        var a = r - e;
        for (t = 1; a >= t && n[r - t] === o[i - t]; t++);
        var s = t > 1 ? 1 - t : void 0;
        return (this._fallbackText = o.slice(e, s)), this._fallbackText;
      },
    }),
      o.addPoolingTo(r),
      (e.exports = r);
  },
  function (e, t, n) {
    "use strict";
    function r() {
      return (
        !i &&
          o.canUseDOM &&
          (i =
            "textContent" in document.documentElement
              ? "textContent"
              : "innerText"),
        i
      );
    }
    var o = n(9),
      i = null;
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    function r(e, t, n, r) {
      o.call(this, e, t, n, r);
    }
    var o = n(77),
      i = { data: null };
    o.augmentClass(r, i), (e.exports = r);
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e, t, n, r) {
        (this.dispatchConfig = e),
          (this.dispatchMarker = t),
          (this.nativeEvent = n);
        var o = this.constructor.Interface;
        for (var i in o)
          if (o.hasOwnProperty(i)) {
            var s = o[i];
            s
              ? (this[i] = s(n))
              : "target" === i
              ? (this.target = r)
              : (this[i] = n[i]);
          }
        var u =
          null != n.defaultPrevented
            ? n.defaultPrevented
            : n.returnValue === !1;
        u
          ? (this.isDefaultPrevented = a.thatReturnsTrue)
          : (this.isDefaultPrevented = a.thatReturnsFalse),
          (this.isPropagationStopped = a.thatReturnsFalse);
      }
      var o = n(56),
        i = n(39),
        a = n(15),
        s = n(25),
        u = {
          type: null,
          target: null,
          currentTarget: a.thatReturnsNull,
          eventPhase: null,
          bubbles: null,
          cancelable: null,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: null,
          isTrusted: null,
        };
      i(r.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          "production" !== t.env.NODE_ENV &&
            ("production" !== t.env.NODE_ENV
              ? s(
                  e,
                  "This synthetic event is reused for performance reasons. If you're seeing this, you're calling `preventDefault` on a released/nullified synthetic event. This is a no-op. See https://fb.me/react-event-pooling for more information."
                )
              : void 0),
            e &&
              (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
              (this.isDefaultPrevented = a.thatReturnsTrue));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          "production" !== t.env.NODE_ENV &&
            ("production" !== t.env.NODE_ENV
              ? s(
                  e,
                  "This synthetic event is reused for performance reasons. If you're seeing this, you're calling `stopPropagation` on a released/nullified synthetic event. This is a no-op. See https://fb.me/react-event-pooling for more information."
                )
              : void 0),
            e &&
              (e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0),
              (this.isPropagationStopped = a.thatReturnsTrue));
        },
        persist: function () {
          this.isPersistent = a.thatReturnsTrue;
        },
        isPersistent: a.thatReturnsFalse,
        destructor: function () {
          var e = this.constructor.Interface;
          for (var t in e) this[t] = null;
          (this.dispatchConfig = null),
            (this.dispatchMarker = null),
            (this.nativeEvent = null);
        },
      }),
        (r.Interface = u),
        (r.augmentClass = function (e, t) {
          var n = this,
            r = Object.create(n.prototype);
          i(r, e.prototype),
            (e.prototype = r),
            (e.prototype.constructor = e),
            (e.Interface = i({}, n.Interface, t)),
            (e.augmentClass = n.augmentClass),
            o.addPoolingTo(e, o.fourArgumentPooler);
        }),
        o.addPoolingTo(r, o.fourArgumentPooler),
        (e.exports = r);
    }.call(t, n(4)));
  },
  function (e, t, n) {
    "use strict";
    function r(e, t, n, r) {
      o.call(this, e, t, n, r);
    }
    var o = n(77),
      i = { data: null };
    o.augmentClass(r, i), (e.exports = r);
  },
  function (e, t) {
    "use strict";
    var n = function (e) {
      var t;
      for (t in e) if (e.hasOwnProperty(t)) return t;
      return null;
    };
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return "select" === t || ("input" === t && "file" === e.type);
    }
    function o(e) {
      var t = E.getPooled(B.change, M, e, w(e));
      A.accumulateTwoPhaseDispatches(t), b.batchedUpdates(i, t);
    }
    function i(e) {
      C.enqueueEvents(e), C.processEventQueue(!1);
    }
    function a(e, t) {
      (_ = e), (M = t), _.attachEvent("onchange", o);
    }
    function s() {
      _ && (_.detachEvent("onchange", o), (_ = null), (M = null));
    }
    function u(e, t, n) {
      return e === S.topChange ? n : void 0;
    }
    function l(e, t, n) {
      e === S.topFocus ? (s(), a(t, n)) : e === S.topBlur && s();
    }
    function c(e, t) {
      (_ = e),
        (M = t),
        (O = e.value),
        (F = Object.getOwnPropertyDescriptor(e.constructor.prototype, "value")),
        Object.defineProperty(_, "value", P),
        _.attachEvent("onpropertychange", d);
    }
    function p() {
      _ &&
        (delete _.value,
        _.detachEvent("onpropertychange", d),
        (_ = null),
        (M = null),
        (O = null),
        (F = null));
    }
    function d(e) {
      if ("value" === e.propertyName) {
        var t = e.srcElement.value;
        t !== O && ((O = t), o(e));
      }
    }
    function f(e, t, n) {
      return e === S.topInput ? n : void 0;
    }
    function h(e, t, n) {
      e === S.topFocus ? (p(), c(t, n)) : e === S.topBlur && p();
    }
    function m(e, t, n) {
      return (e !== S.topSelectionChange &&
        e !== S.topKeyUp &&
        e !== S.topKeyDown) ||
        !_ ||
        _.value === O
        ? void 0
        : ((O = _.value), M);
    }
    function v(e) {
      return (
        e.nodeName &&
        "input" === e.nodeName.toLowerCase() &&
        ("checkbox" === e.type || "radio" === e.type)
      );
    }
    function g(e, t, n) {
      return e === S.topClick ? n : void 0;
    }
    var y = n(30),
      C = n(31),
      A = n(73),
      D = n(9),
      b = n(54),
      E = n(77),
      w = n(81),
      x = n(40),
      N = n(82),
      k = n(79),
      S = y.topLevelTypes,
      B = {
        change: {
          phasedRegistrationNames: {
            bubbled: k({ onChange: null }),
            captured: k({ onChangeCapture: null }),
          },
          dependencies: [
            S.topBlur,
            S.topChange,
            S.topClick,
            S.topFocus,
            S.topInput,
            S.topKeyDown,
            S.topKeyUp,
            S.topSelectionChange,
          ],
        },
      },
      _ = null,
      M = null,
      O = null,
      F = null,
      T = !1;
    D.canUseDOM &&
      (T =
        x("change") &&
        (!("documentMode" in document) || document.documentMode > 8));
    var I = !1;
    D.canUseDOM &&
      (I =
        x("input") &&
        (!("documentMode" in document) || document.documentMode > 9));
    var P = {
        get: function () {
          return F.get.call(this);
        },
        set: function (e) {
          (O = "" + e), F.set.call(this, e);
        },
      },
      L = {
        eventTypes: B,
        extractEvents: function (e, t, n, o, i) {
          var a, s;
          if (
            (r(t)
              ? T
                ? (a = u)
                : (s = l)
              : N(t)
              ? I
                ? (a = f)
                : ((a = m), (s = h))
              : v(t) && (a = g),
            a)
          ) {
            var c = a(e, t, n);
            if (c) {
              var p = E.getPooled(B.change, c, o, i);
              return (p.type = "change"), A.accumulateTwoPhaseDispatches(p), p;
            }
          }
          s && s(e, t, n);
        },
      };
    e.exports = L;
  },
  function (e, t) {
    "use strict";
    function n(e) {
      var t = e.target || e.srcElement || window;
      return 3 === t.nodeType ? t.parentNode : t;
    }
    e.exports = n;
  },
  function (e, t) {
    "use strict";
    function n(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (("input" === t && r[e.type]) || "textarea" === t);
    }
    var r = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    e.exports = n;
  },
  function (e, t) {
    "use strict";
    var n = 0,
      r = {
        createReactRootIndex: function () {
          return n++;
        },
      };
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    var r = n(79),
      o = [
        r({ ResponderEventPlugin: null }),
        r({ SimpleEventPlugin: null }),
        r({ TapEventPlugin: null }),
        r({ EnterLeaveEventPlugin: null }),
        r({ ChangeEventPlugin: null }),
        r({ SelectEventPlugin: null }),
        r({ BeforeInputEventPlugin: null }),
      ];
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r = n(30),
      o = n(73),
      i = n(86),
      a = n(28),
      s = n(79),
      u = r.topLevelTypes,
      l = a.getFirstReactDOM,
      c = {
        mouseEnter: {
          registrationName: s({ onMouseEnter: null }),
          dependencies: [u.topMouseOut, u.topMouseOver],
        },
        mouseLeave: {
          registrationName: s({ onMouseLeave: null }),
          dependencies: [u.topMouseOut, u.topMouseOver],
        },
      },
      p = [null, null],
      d = {
        eventTypes: c,
        extractEvents: function (e, t, n, r, s) {
          if (e === u.topMouseOver && (r.relatedTarget || r.fromElement))
            return null;
          if (e !== u.topMouseOut && e !== u.topMouseOver) return null;
          var d;
          if (t.window === t) d = t;
          else {
            var f = t.ownerDocument;
            d = f ? f.defaultView || f.parentWindow : window;
          }
          var h,
            m,
            v = "",
            g = "";
          if (
            (e === u.topMouseOut
              ? ((h = t),
                (v = n),
                (m = l(r.relatedTarget || r.toElement)),
                m ? (g = a.getID(m)) : (m = d),
                (m = m || d))
              : ((h = d), (m = t), (g = n)),
            h === m)
          )
            return null;
          var y = i.getPooled(c.mouseLeave, v, r, s);
          (y.type = "mouseleave"), (y.target = h), (y.relatedTarget = m);
          var C = i.getPooled(c.mouseEnter, g, r, s);
          return (
            (C.type = "mouseenter"),
            (C.target = m),
            (C.relatedTarget = h),
            o.accumulateEnterLeaveDispatches(y, C, v, g),
            (p[0] = y),
            (p[1] = C),
            p
          );
        },
      };
    e.exports = d;
  },
  function (e, t, n) {
    "use strict";
    function r(e, t, n, r) {
      o.call(this, e, t, n, r);
    }
    var o = n(87),
      i = n(38),
      a = n(88),
      s = {
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: a,
        button: function (e) {
          var t = e.button;
          return "which" in e ? t : 2 === t ? 2 : 4 === t ? 1 : 0;
        },
        buttons: null,
        relatedTarget: function (e) {
          return (
            e.relatedTarget ||
            (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
          );
        },
        pageX: function (e) {
          return "pageX" in e ? e.pageX : e.clientX + i.currentScrollLeft;
        },
        pageY: function (e) {
          return "pageY" in e ? e.pageY : e.clientY + i.currentScrollTop;
        },
      };
    o.augmentClass(r, s), (e.exports = r);
  },
  function (e, t, n) {
    "use strict";
    function r(e, t, n, r) {
      o.call(this, e, t, n, r);
    }
    var o = n(77),
      i = n(81),
      a = {
        view: function (e) {
          if (e.view) return e.view;
          var t = i(e);
          if (null != t && t.window === t) return t;
          var n = t.ownerDocument;
          return n ? n.defaultView || n.parentWindow : window;
        },
        detail: function (e) {
          return e.detail || 0;
        },
      };
    o.augmentClass(r, a), (e.exports = r);
  },
  function (e, t) {
    "use strict";
    function n(e) {
      var t = this,
        n = t.nativeEvent;
      if (n.getModifierState) return n.getModifierState(e);
      var r = o[e];
      return r ? !!n[r] : !1;
    }
    function r(e) {
      return n;
    }
    var o = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    var r,
      o = n(23),
      i = n(9),
      a = o.injection.MUST_USE_ATTRIBUTE,
      s = o.injection.MUST_USE_PROPERTY,
      u = o.injection.HAS_BOOLEAN_VALUE,
      l = o.injection.HAS_SIDE_EFFECTS,
      c = o.injection.HAS_NUMERIC_VALUE,
      p = o.injection.HAS_POSITIVE_NUMERIC_VALUE,
      d = o.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
    if (i.canUseDOM) {
      var f = document.implementation;
      r =
        f &&
        f.hasFeature &&
        f.hasFeature(
          "http://www.w3.org/TR/SVG11/feature#BasicStructure",
          "1.1"
        );
    }
    var h = {
      isCustomAttribute: RegExp.prototype.test.bind(
        /^(data|aria)-[a-z_][a-z\d_.\-]*$/
      ),
      Properties: {
        accept: null,
        acceptCharset: null,
        accessKey: null,
        action: null,
        allowFullScreen: a | u,
        allowTransparency: a,
        alt: null,
        async: u,
        autoComplete: null,
        autoPlay: u,
        capture: a | u,
        cellPadding: null,
        cellSpacing: null,
        charSet: a,
        challenge: a,
        checked: s | u,
        classID: a,
        className: r ? a : s,
        cols: a | p,
        colSpan: null,
        content: null,
        contentEditable: null,
        contextMenu: a,
        controls: s | u,
        coords: null,
        crossOrigin: null,
        data: null,
        dateTime: a,
        default: u,
        defer: u,
        dir: null,
        disabled: a | u,
        download: d,
        draggable: null,
        encType: null,
        form: a,
        formAction: a,
        formEncType: a,
        formMethod: a,
        formNoValidate: u,
        formTarget: a,
        frameBorder: a,
        headers: null,
        height: a,
        hidden: a | u,
        high: null,
        href: null,
        hrefLang: null,
        htmlFor: null,
        httpEquiv: null,
        icon: null,
        id: s,
        inputMode: a,
        integrity: null,
        is: a,
        keyParams: a,
        keyType: a,
        kind: null,
        label: null,
        lang: null,
        list: a,
        loop: s | u,
        low: null,
        manifest: a,
        marginHeight: null,
        marginWidth: null,
        max: null,
        maxLength: a,
        media: a,
        mediaGroup: null,
        method: null,
        min: null,
        minLength: a,
        multiple: s | u,
        muted: s | u,
        name: null,
        nonce: a,
        noValidate: u,
        open: u,
        optimum: null,
        pattern: null,
        placeholder: null,
        poster: null,
        preload: null,
        radioGroup: null,
        readOnly: s | u,
        rel: null,
        required: u,
        reversed: u,
        role: a,
        rows: a | p,
        rowSpan: null,
        sandbox: null,
        scope: null,
        scoped: u,
        scrolling: null,
        seamless: a | u,
        selected: s | u,
        shape: null,
        size: a | p,
        sizes: a,
        span: p,
        spellCheck: null,
        src: null,
        srcDoc: s,
        srcLang: null,
        srcSet: a,
        start: c,
        step: null,
        style: null,
        summary: null,
        tabIndex: null,
        target: null,
        title: null,
        type: null,
        useMap: null,
        value: s | l,
        width: a,
        wmode: a,
        wrap: null,
        about: a,
        datatype: a,
        inlist: a,
        prefix: a,
        property: a,
        resource: a,
        typeof: a,
        vocab: a,
        autoCapitalize: a,
        autoCorrect: a,
        autoSave: null,
        color: null,
        itemProp: a,
        itemScope: a | u,
        itemType: a,
        itemID: a,
        itemRef: a,
        results: null,
        security: a,
        unselectable: a,
      },
      DOMAttributeNames: {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv",
      },
      DOMPropertyNames: {
        autoComplete: "autocomplete",
        autoFocus: "autofocus",
        autoPlay: "autoplay",
        autoSave: "autosave",
        encType: "encoding",
        hrefLang: "hreflang",
        radioGroup: "radiogroup",
        spellCheck: "spellcheck",
        srcDoc: "srcdoc",
        srcSet: "srcset",
      },
    };
    e.exports = h;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(47),
        o = n(91),
        i = n(25),
        a = "_getDOMNodeDidWarn",
        s = {
          getDOMNode: function () {
            return (
              "production" !== t.env.NODE_ENV
                ? i(
                    this.constructor[a],
                    "%s.getDOMNode(...) is deprecated. Please use ReactDOM.findDOMNode(instance) instead.",
                    r.get(this).getName() || this.tagName || "Unknown"
                  )
                : void 0,
              (this.constructor[a] = !0),
              o(this)
            );
          },
        };
      e.exports = s;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        if ("production" !== t.env.NODE_ENV) {
          var n = o.current;
          null !== n &&
            ("production" !== t.env.NODE_ENV
              ? u(
                  n._warnedAboutRefsInRender,
                  "%s is accessing getDOMNode or findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
                  n.getName() || "A component"
                )
              : void 0,
            (n._warnedAboutRefsInRender = !0));
        }
        return null == e
          ? null
          : 1 === e.nodeType
          ? e
          : i.has(e)
          ? a.getNodeFromInstance(e)
          : (null != e.render && "function" == typeof e.render
              ? "production" !== t.env.NODE_ENV
                ? s(!1, "findDOMNode was called on an unmounted component.")
                : s(!1)
              : void 0,
            void ("production" !== t.env.NODE_ENV
              ? s(
                  !1,
                  "Element appears to be neither ReactComponent nor DOMNode (keys: %s)",
                  Object.keys(e)
                )
              : s(!1)));
      }
      var o = n(5),
        i = n(47),
        a = n(28),
        s = n(13),
        u = n(25);
      e.exports = r;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    "use strict";
    function r() {
      this.reinitializeTransaction();
    }
    var o = n(54),
      i = n(57),
      a = n(39),
      s = n(15),
      u = {
        initialize: s,
        close: function () {
          d.isBatchingUpdates = !1;
        },
      },
      l = { initialize: s, close: o.flushBatchedUpdates.bind(o) },
      c = [l, u];
    a(r.prototype, i.Mixin, {
      getTransactionWrappers: function () {
        return c;
      },
    });
    var p = new r(),
      d = {
        isBatchingUpdates: !1,
        batchedUpdates: function (e, t, n, r, o, i) {
          var a = d.isBatchingUpdates;
          (d.isBatchingUpdates = !0),
            a ? e(t, n, r, o, i) : p.perform(e, null, t, n, r, o, i);
        },
      };
    e.exports = d;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        if (e) {
          var t = e._currentElement._owner || null;
          if (t) {
            var n = t.getName();
            if (n) return " This DOM node was rendered by `" + n + "`.";
          }
        }
        return "";
      }
      function o() {
        if ("production" !== t.env.NODE_ENV) {
          var e = this._reactInternalComponent;
          "production" !== t.env.NODE_ENV
            ? G(
                !1,
                "ReactDOMComponent: Do not access .getDOMNode() of a DOM node; instead, use the node directly.%s",
                r(e)
              )
            : void 0;
        }
        return this;
      }
      function i() {
        var e = this._reactInternalComponent;
        return (
          "production" !== t.env.NODE_ENV &&
            ("production" !== t.env.NODE_ENV
              ? G(
                  !1,
                  "ReactDOMComponent: Do not access .isMounted() of a DOM node.%s",
                  r(e)
                )
              : void 0),
          !!e
        );
      }
      function a() {
        if ("production" !== t.env.NODE_ENV) {
          var e = this._reactInternalComponent;
          "production" !== t.env.NODE_ENV
            ? G(
                !1,
                "ReactDOMComponent: Do not access .setState(), .replaceState(), or .forceUpdate() of a DOM node. This is a no-op.%s",
                r(e)
              )
            : void 0;
        }
      }
      function s(e, n) {
        var o = this._reactInternalComponent;
        "production" !== t.env.NODE_ENV &&
          ("production" !== t.env.NODE_ENV
            ? G(
                !1,
                "ReactDOMComponent: Do not access .setProps() of a DOM node. Instead, call ReactDOM.render again at the top level.%s",
                r(o)
              )
            : void 0),
          o &&
            (L.enqueueSetPropsInternal(o, e),
            n && L.enqueueCallbackInternal(o, n));
      }
      function u(e, n) {
        var o = this._reactInternalComponent;
        "production" !== t.env.NODE_ENV &&
          ("production" !== t.env.NODE_ENV
            ? G(
                !1,
                "ReactDOMComponent: Do not access .replaceProps() of a DOM node. Instead, call ReactDOM.render again at the top level.%s",
                r(o)
              )
            : void 0),
          o &&
            (L.enqueueReplacePropsInternal(o, e),
            n && L.enqueueCallbackInternal(o, n));
      }
      function l(e) {
        if ("object" == typeof e) {
          if (Array.isArray(e)) return "[" + e.map(l).join(", ") + "]";
          var t = [];
          for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n)) {
              var r = /^[a-z$_][\w$_]*$/i.test(n) ? n : JSON.stringify(n);
              t.push(r + ": " + l(e[n]));
            }
          return "{" + t.join(", ") + "}";
        }
        return "string" == typeof e
          ? JSON.stringify(e)
          : "function" == typeof e
          ? "[function object]"
          : String(e);
      }
      function c(e, n, r) {
        if (null != e && null != n && !Y(e, n)) {
          var o,
            i = r._tag,
            a = r._currentElement._owner;
          a && (o = a.getName());
          var s = o + "|" + i;
          re.hasOwnProperty(s) ||
            ((re[s] = !0),
            "production" !== t.env.NODE_ENV
              ? G(
                  !1,
                  "`%s` was passed a style object that has previously been mutated. Mutating `style` is deprecated. Consider cloning it beforehand. Check the `render` %s. Previous style: %s. Mutated style: %s.",
                  i,
                  a ? "of `" + o + "`" : "using <" + i + ">",
                  l(e),
                  l(n)
                )
              : void 0);
        }
      }
      function p(e, n) {
        n &&
          ("production" !== t.env.NODE_ENV &&
            se[e._tag] &&
            ("production" !== t.env.NODE_ENV
              ? G(
                  null == n.children && null == n.dangerouslySetInnerHTML,
                  "%s is a void element tag and must not have `children` or use `props.dangerouslySetInnerHTML`.%s",
                  e._tag,
                  e._currentElement._owner
                    ? " Check the render method of " +
                        e._currentElement._owner.getName() +
                        "."
                    : ""
                )
              : void 0),
          null != n.dangerouslySetInnerHTML &&
            (null != n.children
              ? "production" !== t.env.NODE_ENV
                ? W(
                    !1,
                    "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                  )
                : W(!1)
              : void 0,
            "object" == typeof n.dangerouslySetInnerHTML &&
            te in n.dangerouslySetInnerHTML
              ? void 0
              : "production" !== t.env.NODE_ENV
              ? W(
                  !1,
                  "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information."
                )
              : W(!1)),
          "production" !== t.env.NODE_ENV &&
            ("production" !== t.env.NODE_ENV
              ? G(
                  null == n.innerHTML,
                  "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
                )
              : void 0,
            "production" !== t.env.NODE_ENV
              ? G(
                  !n.contentEditable || null == n.children,
                  "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
                )
              : void 0),
          null != n.style && "object" != typeof n.style
            ? "production" !== t.env.NODE_ENV
              ? W(
                  !1,
                  "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.%s",
                  r(e)
                )
              : W(!1)
            : void 0);
      }
      function d(e, n, r, o) {
        "production" !== t.env.NODE_ENV &&
          ("production" !== t.env.NODE_ENV
            ? G(
                "onScroll" !== n || j("scroll", !0),
                "This browser doesn't support the `onScroll` event"
              )
            : void 0);
        var i = T.findReactContainerForID(e);
        if (i) {
          var a = i.nodeType === ne ? i.ownerDocument : i;
          $(n, a);
        }
        o.getReactMountReady().enqueue(f, {
          id: e,
          registrationName: n,
          listener: r,
        });
      }
      function f() {
        var e = this;
        k.putListener(e.id, e.registrationName, e.listener);
      }
      function h() {
        var e = this;
        e._rootNodeID
          ? void 0
          : "production" !== t.env.NODE_ENV
          ? W(!1, "Must be mounted to trap events")
          : W(!1);
        var n = T.getNode(e._rootNodeID);
        switch (
          (n
            ? void 0
            : "production" !== t.env.NODE_ENV
            ? W(!1, "trapBubbledEvent(...): Requires node to be rendered.")
            : W(!1),
          e._tag)
        ) {
          case "iframe":
            e._wrapperState.listeners = [
              k.trapBubbledEvent(N.topLevelTypes.topLoad, "load", n),
            ];
            break;
          case "video":
          case "audio":
            e._wrapperState.listeners = [];
            for (var r in oe)
              oe.hasOwnProperty(r) &&
                e._wrapperState.listeners.push(
                  k.trapBubbledEvent(N.topLevelTypes[r], oe[r], n)
                );
            break;
          case "img":
            e._wrapperState.listeners = [
              k.trapBubbledEvent(N.topLevelTypes.topError, "error", n),
              k.trapBubbledEvent(N.topLevelTypes.topLoad, "load", n),
            ];
            break;
          case "form":
            e._wrapperState.listeners = [
              k.trapBubbledEvent(N.topLevelTypes.topReset, "reset", n),
              k.trapBubbledEvent(N.topLevelTypes.topSubmit, "submit", n),
            ];
        }
      }
      function m() {
        _.mountReadyWrapper(this);
      }
      function v() {
        O.postUpdateWrapper(this);
      }
      function g(e) {
        ce.call(le, e) ||
          (ue.test(e)
            ? void 0
            : "production" !== t.env.NODE_ENV
            ? W(!1, "Invalid tag: %s", e)
            : W(!1),
          (le[e] = !0));
      }
      function y(e, t) {
        e = R({}, e);
        var n = e[K.ancestorInfoContextKey];
        return (
          (e[K.ancestorInfoContextKey] = K.updatedAncestorInfo(n, t._tag, t)), e
        );
      }
      function C(e, t) {
        return e.indexOf("-") >= 0 || null != t.is;
      }
      function A(e) {
        g(e),
          (this._tag = e.toLowerCase()),
          (this._renderedChildren = null),
          (this._previousStyle = null),
          (this._previousStyleCopy = null),
          (this._rootNodeID = null),
          (this._wrapperState = null),
          (this._topLevelWrapper = null),
          (this._nodeWithLegacyProperties = null),
          "production" !== t.env.NODE_ENV &&
            ((this._unprocessedContextDev = null),
            (this._processedContextDev = null));
      }
      var D,
        b = n(94),
        E = n(96),
        w = n(23),
        x = n(22),
        N = n(30),
        k = n(29),
        S = n(26),
        B = n(104),
        _ = n(105),
        M = n(109),
        O = n(112),
        F = n(113),
        T = n(28),
        I = n(114),
        P = n(18),
        L = n(53),
        R = n(39),
        V = n(43),
        U = n(21),
        W = n(13),
        j = n(40),
        H = n(79),
        z = n(19),
        q = n(20),
        Y = n(117),
        K = n(70),
        G = n(25),
        X = k.deleteListener,
        $ = k.listenTo,
        Q = k.registrationNameModules,
        Z = { string: !0, number: !0 },
        J = H({ children: null }),
        ee = H({ style: null }),
        te = H({ __html: null }),
        ne = 1;
      "production" !== t.env.NODE_ENV &&
        (D = {
          props: {
            enumerable: !1,
            get: function () {
              var e = this._reactInternalComponent;
              return (
                "production" !== t.env.NODE_ENV
                  ? G(
                      !1,
                      "ReactDOMComponent: Do not access .props of a DOM node; instead, recreate the props as `render` did originally or read the DOM properties/attributes directly from this node (e.g., this.refs.box.className).%s",
                      r(e)
                    )
                  : void 0,
                e._currentElement.props
              );
            },
          },
        });
      var re = {},
        oe = {
          topAbort: "abort",
          topCanPlay: "canplay",
          topCanPlayThrough: "canplaythrough",
          topDurationChange: "durationchange",
          topEmptied: "emptied",
          topEncrypted: "encrypted",
          topEnded: "ended",
          topError: "error",
          topLoadedData: "loadeddata",
          topLoadedMetadata: "loadedmetadata",
          topLoadStart: "loadstart",
          topPause: "pause",
          topPlay: "play",
          topPlaying: "playing",
          topProgress: "progress",
          topRateChange: "ratechange",
          topSeeked: "seeked",
          topSeeking: "seeking",
          topStalled: "stalled",
          topSuspend: "suspend",
          topTimeUpdate: "timeupdate",
          topVolumeChange: "volumechange",
          topWaiting: "waiting",
        },
        ie = {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        },
        ae = { listing: !0, pre: !0, textarea: !0 },
        se = R({ menuitem: !0 }, ie),
        ue = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
        le = {},
        ce = {}.hasOwnProperty;
      (A.displayName = "ReactDOMComponent"),
        (A.Mixin = {
          construct: function (e) {
            this._currentElement = e;
          },
          mountComponent: function (e, n, r) {
            this._rootNodeID = e;
            var o = this._currentElement.props;
            switch (this._tag) {
              case "iframe":
              case "img":
              case "form":
              case "video":
              case "audio":
                (this._wrapperState = { listeners: null }),
                  n.getReactMountReady().enqueue(h, this);
                break;
              case "button":
                o = B.getNativeProps(this, o, r);
                break;
              case "input":
                _.mountWrapper(this, o, r), (o = _.getNativeProps(this, o, r));
                break;
              case "option":
                M.mountWrapper(this, o, r), (o = M.getNativeProps(this, o, r));
                break;
              case "select":
                O.mountWrapper(this, o, r),
                  (o = O.getNativeProps(this, o, r)),
                  (r = O.processChildContext(this, o, r));
                break;
              case "textarea":
                F.mountWrapper(this, o, r), (o = F.getNativeProps(this, o, r));
            }
            p(this, o),
              "production" !== t.env.NODE_ENV &&
                r[K.ancestorInfoContextKey] &&
                K(this._tag, this, r[K.ancestorInfoContextKey]),
              "production" !== t.env.NODE_ENV &&
                ((this._unprocessedContextDev = r),
                (this._processedContextDev = y(r, this)),
                (r = this._processedContextDev));
            var i;
            if (n.useCreateElement) {
              var a = r[T.ownerDocumentContextKey],
                s = a.createElement(this._currentElement.type);
              x.setAttributeForID(s, this._rootNodeID),
                T.getID(s),
                this._updateDOMProperties({}, o, n, s),
                this._createInitialChildren(n, o, r, s),
                (i = s);
            } else {
              var u = this._createOpenTagMarkupAndPutListeners(n, o),
                l = this._createContentMarkup(n, o, r);
              i =
                !l && ie[this._tag]
                  ? u + "/>"
                  : u + ">" + l + "</" + this._currentElement.type + ">";
            }
            switch (this._tag) {
              case "input":
                n.getReactMountReady().enqueue(m, this);
              case "button":
              case "select":
              case "textarea":
                o.autoFocus &&
                  n.getReactMountReady().enqueue(b.focusDOMComponent, this);
            }
            return i;
          },
          _createOpenTagMarkupAndPutListeners: function (e, n) {
            var r = "<" + this._currentElement.type;
            for (var o in n)
              if (n.hasOwnProperty(o)) {
                var i = n[o];
                if (null != i)
                  if (Q.hasOwnProperty(o)) i && d(this._rootNodeID, o, i, e);
                  else {
                    o === ee &&
                      (i &&
                        ("production" !== t.env.NODE_ENV &&
                          (this._previousStyle = i),
                        (i = this._previousStyleCopy = R({}, n.style))),
                      (i = E.createMarkupForStyles(i)));
                    var a = null;
                    null != this._tag && C(this._tag, n)
                      ? o !== J && (a = x.createMarkupForCustomAttribute(o, i))
                      : (a = x.createMarkupForProperty(o, i)),
                      a && (r += " " + a);
                  }
              }
            if (e.renderToStaticMarkup) return r;
            var s = x.createMarkupForID(this._rootNodeID);
            return r + " " + s;
          },
          _createContentMarkup: function (e, t, n) {
            var r = "",
              o = t.dangerouslySetInnerHTML;
            if (null != o) null != o.__html && (r = o.__html);
            else {
              var i = Z[typeof t.children] ? t.children : null,
                a = null != i ? null : t.children;
              if (null != i) r = U(i);
              else if (null != a) {
                var s = this.mountChildren(a, e, n);
                r = s.join("");
              }
            }
            return ae[this._tag] && "\n" === r.charAt(0) ? "\n" + r : r;
          },
          _createInitialChildren: function (e, t, n, r) {
            var o = t.dangerouslySetInnerHTML;
            if (null != o) null != o.__html && z(r, o.__html);
            else {
              var i = Z[typeof t.children] ? t.children : null,
                a = null != i ? null : t.children;
              if (null != i) q(r, i);
              else if (null != a)
                for (
                  var s = this.mountChildren(a, e, n), u = 0;
                  u < s.length;
                  u++
                )
                  r.appendChild(s[u]);
            }
          },
          receiveComponent: function (e, t, n) {
            var r = this._currentElement;
            (this._currentElement = e), this.updateComponent(t, r, e, n);
          },
          updateComponent: function (e, n, r, o) {
            var i = n.props,
              a = this._currentElement.props;
            switch (this._tag) {
              case "button":
                (i = B.getNativeProps(this, i)),
                  (a = B.getNativeProps(this, a));
                break;
              case "input":
                _.updateWrapper(this),
                  (i = _.getNativeProps(this, i)),
                  (a = _.getNativeProps(this, a));
                break;
              case "option":
                (i = M.getNativeProps(this, i)),
                  (a = M.getNativeProps(this, a));
                break;
              case "select":
                (i = O.getNativeProps(this, i)),
                  (a = O.getNativeProps(this, a));
                break;
              case "textarea":
                F.updateWrapper(this),
                  (i = F.getNativeProps(this, i)),
                  (a = F.getNativeProps(this, a));
            }
            "production" !== t.env.NODE_ENV &&
              (this._unprocessedContextDev !== o &&
                ((this._unprocessedContextDev = o),
                (this._processedContextDev = y(o, this))),
              (o = this._processedContextDev)),
              p(this, a),
              this._updateDOMProperties(i, a, e, null),
              this._updateDOMChildren(i, a, e, o),
              !V &&
                this._nodeWithLegacyProperties &&
                (this._nodeWithLegacyProperties.props = a),
              "select" === this._tag && e.getReactMountReady().enqueue(v, this);
          },
          _updateDOMProperties: function (e, n, r, o) {
            var i, a, s;
            for (i in e)
              if (!n.hasOwnProperty(i) && e.hasOwnProperty(i))
                if (i === ee) {
                  var u = this._previousStyleCopy;
                  for (a in u)
                    u.hasOwnProperty(a) && ((s = s || {}), (s[a] = ""));
                  this._previousStyleCopy = null;
                } else
                  Q.hasOwnProperty(i)
                    ? e[i] && X(this._rootNodeID, i)
                    : (w.properties[i] || w.isCustomAttribute(i)) &&
                      (o || (o = T.getNode(this._rootNodeID)),
                      x.deleteValueForProperty(o, i));
            for (i in n) {
              var l = n[i],
                p = i === ee ? this._previousStyleCopy : e[i];
              if (n.hasOwnProperty(i) && l !== p)
                if (i === ee)
                  if (
                    (l
                      ? ("production" !== t.env.NODE_ENV &&
                          (c(
                            this._previousStyleCopy,
                            this._previousStyle,
                            this
                          ),
                          (this._previousStyle = l)),
                        (l = this._previousStyleCopy = R({}, l)))
                      : (this._previousStyleCopy = null),
                    p)
                  ) {
                    for (a in p)
                      !p.hasOwnProperty(a) ||
                        (l && l.hasOwnProperty(a)) ||
                        ((s = s || {}), (s[a] = ""));
                    for (a in l)
                      l.hasOwnProperty(a) &&
                        p[a] !== l[a] &&
                        ((s = s || {}), (s[a] = l[a]));
                  } else s = l;
                else
                  Q.hasOwnProperty(i)
                    ? l
                      ? d(this._rootNodeID, i, l, r)
                      : p && X(this._rootNodeID, i)
                    : C(this._tag, n)
                    ? (o || (o = T.getNode(this._rootNodeID)),
                      i === J && (l = null),
                      x.setValueForAttribute(o, i, l))
                    : (w.properties[i] || w.isCustomAttribute(i)) &&
                      (o || (o = T.getNode(this._rootNodeID)),
                      null != l
                        ? x.setValueForProperty(o, i, l)
                        : x.deleteValueForProperty(o, i));
            }
            s &&
              (o || (o = T.getNode(this._rootNodeID)),
              E.setValueForStyles(o, s));
          },
          _updateDOMChildren: function (e, t, n, r) {
            var o = Z[typeof e.children] ? e.children : null,
              i = Z[typeof t.children] ? t.children : null,
              a = e.dangerouslySetInnerHTML && e.dangerouslySetInnerHTML.__html,
              s = t.dangerouslySetInnerHTML && t.dangerouslySetInnerHTML.__html,
              u = null != o ? null : e.children,
              l = null != i ? null : t.children,
              c = null != o || null != a,
              p = null != i || null != s;
            null != u && null == l
              ? this.updateChildren(null, n, r)
              : c && !p && this.updateTextContent(""),
              null != i
                ? o !== i && this.updateTextContent("" + i)
                : null != s
                ? a !== s && this.updateMarkup("" + s)
                : null != l && this.updateChildren(l, n, r);
          },
          unmountComponent: function () {
            switch (this._tag) {
              case "iframe":
              case "img":
              case "form":
              case "video":
              case "audio":
                var e = this._wrapperState.listeners;
                if (e) for (var n = 0; n < e.length; n++) e[n].remove();
                break;
              case "input":
                _.unmountWrapper(this);
                break;
              case "html":
              case "head":
              case "body":
                "production" !== t.env.NODE_ENV
                  ? W(
                      !1,
                      "<%s> tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.",
                      this._tag
                    )
                  : W(!1);
            }
            if (
              (this.unmountChildren(),
              k.deleteAllListeners(this._rootNodeID),
              S.unmountIDFromEnvironment(this._rootNodeID),
              (this._rootNodeID = null),
              (this._wrapperState = null),
              this._nodeWithLegacyProperties)
            ) {
              var r = this._nodeWithLegacyProperties;
              (r._reactInternalComponent = null),
                (this._nodeWithLegacyProperties = null);
            }
          },
          getPublicInstance: function () {
            if (!this._nodeWithLegacyProperties) {
              var e = T.getNode(this._rootNodeID);
              (e._reactInternalComponent = this),
                (e.getDOMNode = o),
                (e.isMounted = i),
                (e.setState = a),
                (e.replaceState = a),
                (e.forceUpdate = a),
                (e.setProps = s),
                (e.replaceProps = u),
                "production" !== t.env.NODE_ENV && V
                  ? Object.defineProperties(e, D)
                  : (e.props = this._currentElement.props),
                (this._nodeWithLegacyProperties = e);
            }
            return this._nodeWithLegacyProperties;
          },
        }),
        P.measureMethods(A, "ReactDOMComponent", {
          mountComponent: "mountComponent",
          updateComponent: "updateComponent",
        }),
        R(A.prototype, A.Mixin, I.Mixin),
        (e.exports = A);
    }.call(t, n(4)));
  },
  function (e, t, n) {
    "use strict";
    var r = n(28),
      o = n(91),
      i = n(95),
      a = {
        componentDidMount: function () {
          this.props.autoFocus && i(o(this));
        },
      },
      s = {
        Mixin: a,
        focusDOMComponent: function () {
          i(r.getNode(this._rootNodeID));
        },
      };
    e.exports = s;
  },
  function (e, t) {
    "use strict";
    function n(e) {
      try {
        e.focus();
      } catch (t) {}
    }
    e.exports = n;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(97),
        o = n(9),
        i = n(18),
        a = n(98),
        s = n(100),
        u = n(101),
        l = n(103),
        c = n(25),
        p = l(function (e) {
          return u(e);
        }),
        d = !1,
        f = "cssFloat";
      if (o.canUseDOM) {
        var h = document.createElement("div").style;
        try {
          h.font = "";
        } catch (m) {
          d = !0;
        }
        void 0 === document.documentElement.style.cssFloat &&
          (f = "styleFloat");
      }
      if ("production" !== t.env.NODE_ENV)
        var v = /^(?:webkit|moz|o)[A-Z]/,
          g = /;\s*$/,
          y = {},
          C = {},
          A = function (e) {
            (y.hasOwnProperty(e) && y[e]) ||
              ((y[e] = !0),
              "production" !== t.env.NODE_ENV
                ? c(
                    !1,
                    "Unsupported style property %s. Did you mean %s?",
                    e,
                    a(e)
                  )
                : void 0);
          },
          D = function (e) {
            (y.hasOwnProperty(e) && y[e]) ||
              ((y[e] = !0),
              "production" !== t.env.NODE_ENV
                ? c(
                    !1,
                    "Unsupported vendor-prefixed style property %s. Did you mean %s?",
                    e,
                    e.charAt(0).toUpperCase() + e.slice(1)
                  )
                : void 0);
          },
          b = function (e, n) {
            (C.hasOwnProperty(n) && C[n]) ||
              ((C[n] = !0),
              "production" !== t.env.NODE_ENV
                ? c(
                    !1,
                    'Style property values shouldn\'t contain a semicolon. Try "%s: %s" instead.',
                    e,
                    n.replace(g, "")
                  )
                : void 0);
          },
          E = function (e, t) {
            e.indexOf("-") > -1
              ? A(e)
              : v.test(e)
              ? D(e)
              : g.test(t) && b(e, t);
          };
      var w = {
        createMarkupForStyles: function (e) {
          var n = "";
          for (var r in e)
            if (e.hasOwnProperty(r)) {
              var o = e[r];
              "production" !== t.env.NODE_ENV && E(r, o),
                null != o && ((n += p(r) + ":"), (n += s(r, o) + ";"));
            }
          return n || null;
        },
        setValueForStyles: function (e, n) {
          var o = e.style;
          for (var i in n)
            if (n.hasOwnProperty(i)) {
              "production" !== t.env.NODE_ENV && E(i, n[i]);
              var a = s(i, n[i]);
              if (("float" === i && (i = f), a)) o[i] = a;
              else {
                var u = d && r.shorthandPropertyExpansions[i];
                if (u) for (var l in u) o[l] = "";
                else o[i] = "";
              }
            }
        },
      };
      i.measureMethods(w, "CSSPropertyOperations", {
        setValueForStyles: "setValueForStyles",
      }),
        (e.exports = w);
    }.call(t, n(4)));
  },
  function (e, t) {
    "use strict";
    function n(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var r = {
        animationIterationCount: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        stopOpacity: !0,
        strokeDashoffset: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      o = ["Webkit", "ms", "Moz", "O"];
    Object.keys(r).forEach(function (e) {
      o.forEach(function (t) {
        r[n(t, e)] = r[e];
      });
    });
    var i = {
        background: {
          backgroundAttachment: !0,
          backgroundColor: !0,
          backgroundImage: !0,
          backgroundPositionX: !0,
          backgroundPositionY: !0,
          backgroundRepeat: !0,
        },
        backgroundPosition: {
          backgroundPositionX: !0,
          backgroundPositionY: !0,
        },
        border: { borderWidth: !0, borderStyle: !0, borderColor: !0 },
        borderBottom: {
          borderBottomWidth: !0,
          borderBottomStyle: !0,
          borderBottomColor: !0,
        },
        borderLeft: {
          borderLeftWidth: !0,
          borderLeftStyle: !0,
          borderLeftColor: !0,
        },
        borderRight: {
          borderRightWidth: !0,
          borderRightStyle: !0,
          borderRightColor: !0,
        },
        borderTop: {
          borderTopWidth: !0,
          borderTopStyle: !0,
          borderTopColor: !0,
        },
        font: {
          fontStyle: !0,
          fontVariant: !0,
          fontWeight: !0,
          fontSize: !0,
          lineHeight: !0,
          fontFamily: !0,
        },
        outline: { outlineWidth: !0, outlineStyle: !0, outlineColor: !0 },
      },
      a = { isUnitlessNumber: r, shorthandPropertyExpansions: i };
    e.exports = a;
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return o(e.replace(i, "ms-"));
    }
    var o = n(99),
      i = /^-ms-/;
    e.exports = r;
  },
  function (e, t) {
    "use strict";
    function n(e) {
      return e.replace(r, function (e, t) {
        return t.toUpperCase();
      });
    }
    var r = /-(.)/g;
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n = null == t || "boolean" == typeof t || "" === t;
      if (n) return "";
      var r = isNaN(t);
      return r || 0 === t || (i.hasOwnProperty(e) && i[e])
        ? "" + t
        : ("string" == typeof t && (t = t.trim()), t + "px");
    }
    var o = n(97),
      i = o.isUnitlessNumber;
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return o(e).replace(i, "-ms-");
    }
    var o = n(102),
      i = /^ms-/;
    e.exports = r;
  },
  function (e, t) {
    "use strict";
    function n(e) {
      return e.replace(r, "-$1").toLowerCase();
    }
    var r = /([A-Z])/g;
    e.exports = n;
  },
  function (e, t) {
    "use strict";
    function n(e) {
      var t = {};
      return function (n) {
        return t.hasOwnProperty(n) || (t[n] = e.call(this, n)), t[n];
      };
    }
    e.exports = n;
  },
  function (e, t) {
    "use strict";
    var n = {
        onClick: !0,
        onDoubleClick: !0,
        onMouseDown: !0,
        onMouseMove: !0,
        onMouseUp: !0,
        onClickCapture: !0,
        onDoubleClickCapture: !0,
        onMouseDownCapture: !0,
        onMouseMoveCapture: !0,
        onMouseUpCapture: !0,
      },
      r = {
        getNativeProps: function (e, t, r) {
          if (!t.disabled) return t;
          var o = {};
          for (var i in t) t.hasOwnProperty(i) && !n[i] && (o[i] = t[i]);
          return o;
        },
      };
    e.exports = r;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r() {
        this._rootNodeID && d.updateWrapper(this);
      }
      function o(e) {
        var n = this._currentElement.props,
          o = a.executeOnChange(n, e);
        u.asap(r, this);
        var i = n.name;
        if ("radio" === n.type && null != i) {
          for (var l = s.getNode(this._rootNodeID), d = l; d.parentNode; )
            d = d.parentNode;
          for (
            var f = d.querySelectorAll(
                "input[name=" + JSON.stringify("" + i) + '][type="radio"]'
              ),
              h = 0;
            h < f.length;
            h++
          ) {
            var m = f[h];
            if (m !== l && m.form === l.form) {
              var v = s.getID(m);
              v
                ? void 0
                : "production" !== t.env.NODE_ENV
                ? c(
                    !1,
                    "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                  )
                : c(!1);
              var g = p[v];
              g
                ? void 0
                : "production" !== t.env.NODE_ENV
                ? c(!1, "ReactDOMInput: Unknown radio button ID %s.", v)
                : c(!1),
                u.asap(r, g);
            }
          }
        }
        return o;
      }
      var i = n(27),
        a = n(106),
        s = n(28),
        u = n(54),
        l = n(39),
        c = n(13),
        p = {},
        d = {
          getNativeProps: function (e, t, n) {
            var r = a.getValue(t),
              o = a.getChecked(t),
              i = l({}, t, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: null != r ? r : e._wrapperState.initialValue,
                checked: null != o ? o : e._wrapperState.initialChecked,
                onChange: e._wrapperState.onChange,
              });
            return i;
          },
          mountWrapper: function (e, n) {
            "production" !== t.env.NODE_ENV &&
              a.checkPropTypes("input", n, e._currentElement._owner);
            var r = n.defaultValue;
            e._wrapperState = {
              initialChecked: n.defaultChecked || !1,
              initialValue: null != r ? r : null,
              onChange: o.bind(e),
            };
          },
          mountReadyWrapper: function (e) {
            p[e._rootNodeID] = e;
          },
          unmountWrapper: function (e) {
            delete p[e._rootNodeID];
          },
          updateWrapper: function (e) {
            var t = e._currentElement.props,
              n = t.checked;
            null != n &&
              i.updatePropertyByID(e._rootNodeID, "checked", n || !1);
            var r = a.getValue(t);
            null != r && i.updatePropertyByID(e._rootNodeID, "value", "" + r);
          },
        };
      e.exports = d;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        null != e.checkedLink && null != e.valueLink
          ? "production" !== t.env.NODE_ENV
            ? l(
                !1,
                "Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don't want to use valueLink and vice versa."
              )
            : l(!1)
          : void 0;
      }
      function o(e) {
        r(e),
          null != e.value || null != e.onChange
            ? "production" !== t.env.NODE_ENV
              ? l(
                  !1,
                  "Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don't want to use valueLink."
                )
              : l(!1)
            : void 0;
      }
      function i(e) {
        r(e),
          null != e.checked || null != e.onChange
            ? "production" !== t.env.NODE_ENV
              ? l(
                  !1,
                  "Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don't want to use checkedLink"
                )
              : l(!1)
            : void 0;
      }
      function a(e) {
        if (e) {
          var t = e.getName();
          if (t) return " Check the render method of `" + t + "`.";
        }
        return "";
      }
      var s = n(107),
        u = n(65),
        l = n(13),
        c = n(25),
        p = {
          button: !0,
          checkbox: !0,
          image: !0,
          hidden: !0,
          radio: !0,
          reset: !0,
          submit: !0,
        },
        d = {
          value: function (e, t, n) {
            return !e[t] || p[e.type] || e.onChange || e.readOnly || e.disabled
              ? null
              : new Error(
                  "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
                );
          },
          checked: function (e, t, n) {
            return !e[t] || e.onChange || e.readOnly || e.disabled
              ? null
              : new Error(
                  "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
                );
          },
          onChange: s.func,
        },
        f = {},
        h = {
          checkPropTypes: function (e, n, r) {
            for (var o in d) {
              if (d.hasOwnProperty(o)) var i = d[o](n, o, e, u.prop);
              if (i instanceof Error && !(i.message in f)) {
                f[i.message] = !0;
                var s = a(r);
                "production" !== t.env.NODE_ENV
                  ? c(!1, "Failed form propType: %s%s", i.message, s)
                  : void 0;
              }
            }
          },
          getValue: function (e) {
            return e.valueLink ? (o(e), e.valueLink.value) : e.value;
          },
          getChecked: function (e) {
            return e.checkedLink ? (i(e), e.checkedLink.value) : e.checked;
          },
          executeOnChange: function (e, t) {
            return e.valueLink
              ? (o(e), e.valueLink.requestChange(t.target.value))
              : e.checkedLink
              ? (i(e), e.checkedLink.requestChange(t.target.checked))
              : e.onChange
              ? e.onChange.call(void 0, t)
              : void 0;
          },
        };
      e.exports = h;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      function t(t, n, r, o, i, a) {
        if (((o = o || b), (a = a || r), null == n[r])) {
          var s = C[i];
          return t
            ? new Error(
                "Required " +
                  s +
                  " `" +
                  a +
                  "` was not specified in " +
                  ("`" + o + "`.")
              )
            : null;
        }
        return e(n, r, o, i, a);
      }
      var n = t.bind(null, !1);
      return (n.isRequired = t.bind(null, !0)), n;
    }
    function o(e) {
      function t(t, n, r, o, i) {
        var a = t[n],
          s = m(a);
        if (s !== e) {
          var u = C[o],
            l = v(a);
          return new Error(
            "Invalid " +
              u +
              " `" +
              i +
              "` of type " +
              ("`" + l + "` supplied to `" + r + "`, expected ") +
              ("`" + e + "`.")
          );
        }
        return null;
      }
      return r(t);
    }
    function i() {
      return r(A.thatReturns(null));
    }
    function a(e) {
      function t(t, n, r, o, i) {
        var a = t[n];
        if (!Array.isArray(a)) {
          var s = C[o],
            u = m(a);
          return new Error(
            "Invalid " +
              s +
              " `" +
              i +
              "` of type " +
              ("`" + u + "` supplied to `" + r + "`, expected an array.")
          );
        }
        for (var l = 0; l < a.length; l++) {
          var c = e(a, l, r, o, i + "[" + l + "]");
          if (c instanceof Error) return c;
        }
        return null;
      }
      return r(t);
    }
    function s() {
      function e(e, t, n, r, o) {
        if (!y.isValidElement(e[t])) {
          var i = C[r];
          return new Error(
            "Invalid " +
              i +
              " `" +
              o +
              "` supplied to " +
              ("`" + n + "`, expected a single ReactElement.")
          );
        }
        return null;
      }
      return r(e);
    }
    function u(e) {
      function t(t, n, r, o, i) {
        if (!(t[n] instanceof e)) {
          var a = C[o],
            s = e.name || b,
            u = g(t[n]);
          return new Error(
            "Invalid " +
              a +
              " `" +
              i +
              "` of type " +
              ("`" + u + "` supplied to `" + r + "`, expected ") +
              ("instance of `" + s + "`.")
          );
        }
        return null;
      }
      return r(t);
    }
    function l(e) {
      function t(t, n, r, o, i) {
        for (var a = t[n], s = 0; s < e.length; s++)
          if (a === e[s]) return null;
        var u = C[o],
          l = JSON.stringify(e);
        return new Error(
          "Invalid " +
            u +
            " `" +
            i +
            "` of value `" +
            a +
            "` " +
            ("supplied to `" + r + "`, expected one of " + l + ".")
        );
      }
      return r(
        Array.isArray(e)
          ? t
          : function () {
              return new Error(
                "Invalid argument supplied to oneOf, expected an instance of array."
              );
            }
      );
    }
    function c(e) {
      function t(t, n, r, o, i) {
        var a = t[n],
          s = m(a);
        if ("object" !== s) {
          var u = C[o];
          return new Error(
            "Invalid " +
              u +
              " `" +
              i +
              "` of type " +
              ("`" + s + "` supplied to `" + r + "`, expected an object.")
          );
        }
        for (var l in a)
          if (a.hasOwnProperty(l)) {
            var c = e(a, l, r, o, i + "." + l);
            if (c instanceof Error) return c;
          }
        return null;
      }
      return r(t);
    }
    function p(e) {
      function t(t, n, r, o, i) {
        for (var a = 0; a < e.length; a++) {
          var s = e[a];
          if (null == s(t, n, r, o, i)) return null;
        }
        var u = C[o];
        return new Error(
          "Invalid " + u + " `" + i + "` supplied to " + ("`" + r + "`.")
        );
      }
      return r(
        Array.isArray(e)
          ? t
          : function () {
              return new Error(
                "Invalid argument supplied to oneOfType, expected an instance of array."
              );
            }
      );
    }
    function d() {
      function e(e, t, n, r, o) {
        if (!h(e[t])) {
          var i = C[r];
          return new Error(
            "Invalid " +
              i +
              " `" +
              o +
              "` supplied to " +
              ("`" + n + "`, expected a ReactNode.")
          );
        }
        return null;
      }
      return r(e);
    }
    function f(e) {
      function t(t, n, r, o, i) {
        var a = t[n],
          s = m(a);
        if ("object" !== s) {
          var u = C[o];
          return new Error(
            "Invalid " +
              u +
              " `" +
              i +
              "` of type `" +
              s +
              "` " +
              ("supplied to `" + r + "`, expected `object`.")
          );
        }
        for (var l in e) {
          var c = e[l];
          if (c) {
            var p = c(a, l, r, o, i + "." + l);
            if (p) return p;
          }
        }
        return null;
      }
      return r(t);
    }
    function h(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e)) return e.every(h);
          if (null === e || y.isValidElement(e)) return !0;
          var t = D(e);
          if (!t) return !1;
          var n,
            r = t.call(e);
          if (t !== e.entries) {
            for (; !(n = r.next()).done; ) if (!h(n.value)) return !1;
          } else
            for (; !(n = r.next()).done; ) {
              var o = n.value;
              if (o && !h(o[1])) return !1;
            }
          return !0;
        default:
          return !1;
      }
    }
    function m(e) {
      var t = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : t;
    }
    function v(e) {
      var t = m(e);
      if ("object" === t) {
        if (e instanceof Date) return "date";
        if (e instanceof RegExp) return "regexp";
      }
      return t;
    }
    function g(e) {
      return e.constructor && e.constructor.name
        ? e.constructor.name
        : "<<anonymous>>";
    }
    var y = n(42),
      C = n(66),
      A = n(15),
      D = n(108),
      b = "<<anonymous>>",
      E = {
        array: o("array"),
        bool: o("boolean"),
        func: o("function"),
        number: o("number"),
        object: o("object"),
        string: o("string"),
        any: i(),
        arrayOf: a,
        element: s(),
        instanceOf: u,
        node: d(),
        objectOf: c,
        oneOf: l,
        oneOfType: p,
        shape: f,
      };
    e.exports = E;
  },
  function (e, t) {
    "use strict";
    function n(e) {
      var t = e && ((r && e[r]) || e[o]);
      return "function" == typeof t ? t : void 0;
    }
    var r = "function" == typeof Symbol && Symbol.iterator,
      o = "@@iterator";
    e.exports = n;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(110),
        o = n(112),
        i = n(39),
        a = n(25),
        s = o.valueContextKey,
        u = {
          mountWrapper: function (e, n, r) {
            "production" !== t.env.NODE_ENV &&
              ("production" !== t.env.NODE_ENV
                ? a(
                    null == n.selected,
                    "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
                  )
                : void 0);
            var o = r[s],
              i = null;
            if (null != o)
              if (((i = !1), Array.isArray(o))) {
                for (var u = 0; u < o.length; u++)
                  if ("" + o[u] == "" + n.value) {
                    i = !0;
                    break;
                  }
              } else i = "" + o == "" + n.value;
            e._wrapperState = { selected: i };
          },
          getNativeProps: function (e, n, o) {
            var s = i({ selected: void 0, children: void 0 }, n);
            null != e._wrapperState.selected &&
              (s.selected = e._wrapperState.selected);
            var u = "";
            return (
              r.forEach(n.children, function (e) {
                null != e &&
                  ("string" == typeof e || "number" == typeof e
                    ? (u += e)
                    : "production" !== t.env.NODE_ENV
                    ? a(
                        !1,
                        "Only strings and numbers are supported as <option> children."
                      )
                    : void 0);
              }),
              u && (s.children = u),
              s
            );
          },
        };
      e.exports = u;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return ("" + e).replace(A, "//");
    }
    function o(e, t) {
      (this.func = e), (this.context = t), (this.count = 0);
    }
    function i(e, t, n) {
      var r = e.func,
        o = e.context;
      r.call(o, t, e.count++);
    }
    function a(e, t, n) {
      if (null == e) return e;
      var r = o.getPooled(t, n);
      g(e, i, r), o.release(r);
    }
    function s(e, t, n, r) {
      (this.result = e),
        (this.keyPrefix = t),
        (this.func = n),
        (this.context = r),
        (this.count = 0);
    }
    function u(e, t, n) {
      var o = e.result,
        i = e.keyPrefix,
        a = e.func,
        s = e.context,
        u = a.call(s, t, e.count++);
      Array.isArray(u)
        ? l(u, o, n, v.thatReturnsArgument)
        : null != u &&
          (m.isValidElement(u) &&
            (u = m.cloneAndReplaceKey(
              u,
              i + (u !== t ? r(u.key || "") + "/" : "") + n
            )),
          o.push(u));
    }
    function l(e, t, n, o, i) {
      var a = "";
      null != n && (a = r(n) + "/");
      var l = s.getPooled(t, a, o, i);
      g(e, u, l), s.release(l);
    }
    function c(e, t, n) {
      if (null == e) return e;
      var r = [];
      return l(e, r, null, t, n), r;
    }
    function p(e, t, n) {
      return null;
    }
    function d(e, t) {
      return g(e, p, null);
    }
    function f(e) {
      var t = [];
      return l(e, t, null, v.thatReturnsArgument), t;
    }
    var h = n(56),
      m = n(42),
      v = n(15),
      g = n(111),
      y = h.twoArgumentPooler,
      C = h.fourArgumentPooler,
      A = /\/(?!\/)/g;
    (o.prototype.destructor = function () {
      (this.func = null), (this.context = null), (this.count = 0);
    }),
      h.addPoolingTo(o, y),
      (s.prototype.destructor = function () {
        (this.result = null),
          (this.keyPrefix = null),
          (this.func = null),
          (this.context = null),
          (this.count = 0);
      }),
      h.addPoolingTo(s, C);
    var D = {
      forEach: a,
      map: c,
      mapIntoWithKeyPrefixInternal: l,
      count: d,
      toArray: f,
    };
    e.exports = D;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        return g[e];
      }
      function o(e, t) {
        return e && null != e.key ? a(e.key) : t.toString(36);
      }
      function i(e) {
        return ("" + e).replace(y, r);
      }
      function a(e) {
        return "$" + i(e);
      }
      function s(e, n, r, i) {
        var u = typeof e;
        if (
          (("undefined" !== u && "boolean" !== u) || (e = null),
          null === e || "string" === u || "number" === u || c.isValidElement(e))
        )
          return r(i, e, "" === n ? m + o(e, 0) : n), 1;
        var p,
          g,
          y = 0,
          A = "" === n ? m : n + v;
        if (Array.isArray(e))
          for (var D = 0; D < e.length; D++)
            (p = e[D]), (g = A + o(p, D)), (y += s(p, g, r, i));
        else {
          var b = d(e);
          if (b) {
            var E,
              w = b.call(e);
            if (b !== e.entries)
              for (var x = 0; !(E = w.next()).done; )
                (p = E.value), (g = A + o(p, x++)), (y += s(p, g, r, i));
            else
              for (
                "production" !== t.env.NODE_ENV &&
                ("production" !== t.env.NODE_ENV
                  ? h(
                      C,
                      "Using Maps as children is not yet fully supported. It is an experimental feature that might be removed. Convert it to a sequence / iterable of keyed ReactElements instead."
                    )
                  : void 0,
                (C = !0));
                !(E = w.next()).done;

              ) {
                var N = E.value;
                N &&
                  ((p = N[1]),
                  (g = A + a(N[0]) + v + o(p, 0)),
                  (y += s(p, g, r, i)));
              }
          } else if ("object" === u) {
            var k = "";
            if (
              "production" !== t.env.NODE_ENV &&
              ((k =
                " If you meant to render a collection of children, use an array instead or wrap the object using createFragment(object) from the React add-ons."),
              e._isReactElement &&
                (k =
                  " It looks like you're using an element created by a different version of React. Make sure to use only one copy of React."),
              l.current)
            ) {
              var S = l.current.getName();
              S && (k += " Check the render method of `" + S + "`.");
            }
            var B = String(e);
            "production" !== t.env.NODE_ENV
              ? f(
                  !1,
                  "Objects are not valid as a React child (found: %s).%s",
                  "[object Object]" === B
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : B,
                  k
                )
              : f(!1);
          }
        }
        return y;
      }
      function u(e, t, n) {
        return null == e ? 0 : s(e, "", t, n);
      }
      var l = n(5),
        c = n(42),
        p = n(45),
        d = n(108),
        f = n(13),
        h = n(25),
        m = p.SEPARATOR,
        v = ":",
        g = { "=": "=0", ".": "=1", ":": "=2" },
        y = /[=.:]/g,
        C = !1;
      e.exports = u;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r() {
        if (this._rootNodeID && this._wrapperState.pendingUpdate) {
          this._wrapperState.pendingUpdate = !1;
          var e = this._currentElement.props,
            t = u.getValue(e);
          null != t && a(this, Boolean(e.multiple), t);
        }
      }
      function o(e) {
        if (e) {
          var t = e.getName();
          if (t) return " Check the render method of `" + t + "`.";
        }
        return "";
      }
      function i(e, n) {
        var r = e._currentElement._owner;
        u.checkPropTypes("select", n, r);
        for (var i = 0; i < h.length; i++) {
          var a = h[i];
          null != n[a] &&
            (n.multiple
              ? "production" !== t.env.NODE_ENV
                ? d(
                    Array.isArray(n[a]),
                    "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
                    a,
                    o(r)
                  )
                : void 0
              : "production" !== t.env.NODE_ENV
              ? d(
                  !Array.isArray(n[a]),
                  "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
                  a,
                  o(r)
                )
              : void 0);
        }
      }
      function a(e, t, n) {
        var r,
          o,
          i = l.getNode(e._rootNodeID).options;
        if (t) {
          for (r = {}, o = 0; o < n.length; o++) r["" + n[o]] = !0;
          for (o = 0; o < i.length; o++) {
            var a = r.hasOwnProperty(i[o].value);
            i[o].selected !== a && (i[o].selected = a);
          }
        } else {
          for (r = "" + n, o = 0; o < i.length; o++)
            if (i[o].value === r) return void (i[o].selected = !0);
          i.length && (i[0].selected = !0);
        }
      }
      function s(e) {
        var t = this._currentElement.props,
          n = u.executeOnChange(t, e);
        return (this._wrapperState.pendingUpdate = !0), c.asap(r, this), n;
      }
      var u = n(106),
        l = n(28),
        c = n(54),
        p = n(39),
        d = n(25),
        f = "__ReactDOMSelect_value$" + Math.random().toString(36).slice(2),
        h = ["value", "defaultValue"],
        m = {
          valueContextKey: f,
          getNativeProps: function (e, t, n) {
            return p({}, t, {
              onChange: e._wrapperState.onChange,
              value: void 0,
            });
          },
          mountWrapper: function (e, n) {
            "production" !== t.env.NODE_ENV && i(e, n);
            var r = u.getValue(n);
            e._wrapperState = {
              pendingUpdate: !1,
              initialValue: null != r ? r : n.defaultValue,
              onChange: s.bind(e),
              wasMultiple: Boolean(n.multiple),
            };
          },
          processChildContext: function (e, t, n) {
            var r = p({}, n);
            return (r[f] = e._wrapperState.initialValue), r;
          },
          postUpdateWrapper: function (e) {
            var t = e._currentElement.props;
            e._wrapperState.initialValue = void 0;
            var n = e._wrapperState.wasMultiple;
            e._wrapperState.wasMultiple = Boolean(t.multiple);
            var r = u.getValue(t);
            null != r
              ? ((e._wrapperState.pendingUpdate = !1),
                a(e, Boolean(t.multiple), r))
              : n !== Boolean(t.multiple) &&
                (null != t.defaultValue
                  ? a(e, Boolean(t.multiple), t.defaultValue)
                  : a(e, Boolean(t.multiple), t.multiple ? [] : ""));
          },
        };
      e.exports = m;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r() {
        this._rootNodeID && p.updateWrapper(this);
      }
      function o(e) {
        var t = this._currentElement.props,
          n = i.executeOnChange(t, e);
        return s.asap(r, this), n;
      }
      var i = n(106),
        a = n(27),
        s = n(54),
        u = n(39),
        l = n(13),
        c = n(25),
        p = {
          getNativeProps: function (e, n, r) {
            null != n.dangerouslySetInnerHTML
              ? "production" !== t.env.NODE_ENV
                ? l(
                    !1,
                    "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                  )
                : l(!1)
              : void 0;
            var o = u({}, n, {
              defaultValue: void 0,
              value: void 0,
              children: e._wrapperState.initialValue,
              onChange: e._wrapperState.onChange,
            });
            return o;
          },
          mountWrapper: function (e, n) {
            "production" !== t.env.NODE_ENV &&
              i.checkPropTypes("textarea", n, e._currentElement._owner);
            var r = n.defaultValue,
              a = n.children;
            null != a &&
              ("production" !== t.env.NODE_ENV &&
                ("production" !== t.env.NODE_ENV
                  ? c(
                      !1,
                      "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
                    )
                  : void 0),
              null != r
                ? "production" !== t.env.NODE_ENV
                  ? l(
                      !1,
                      "If you supply `defaultValue` on a <textarea>, do not pass children."
                    )
                  : l(!1)
                : void 0,
              Array.isArray(a) &&
                (a.length <= 1
                  ? void 0
                  : "production" !== t.env.NODE_ENV
                  ? l(!1, "<textarea> can only have at most one child.")
                  : l(!1),
                (a = a[0])),
              (r = "" + a)),
              null == r && (r = "");
            var s = i.getValue(n);
            e._wrapperState = {
              initialValue: "" + (null != s ? s : r),
              onChange: o.bind(e),
            };
          },
          updateWrapper: function (e) {
            var t = e._currentElement.props,
              n = i.getValue(t);
            null != n && a.updatePropertyByID(e._rootNodeID, "value", "" + n);
          },
        };
      e.exports = p;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e, t, n) {
        g.push({
          parentID: e,
          parentNode: null,
          type: p.INSERT_MARKUP,
          markupIndex: y.push(t) - 1,
          content: null,
          fromIndex: null,
          toIndex: n,
        });
      }
      function o(e, t, n) {
        g.push({
          parentID: e,
          parentNode: null,
          type: p.MOVE_EXISTING,
          markupIndex: null,
          content: null,
          fromIndex: t,
          toIndex: n,
        });
      }
      function i(e, t) {
        g.push({
          parentID: e,
          parentNode: null,
          type: p.REMOVE_NODE,
          markupIndex: null,
          content: null,
          fromIndex: t,
          toIndex: null,
        });
      }
      function a(e, t) {
        g.push({
          parentID: e,
          parentNode: null,
          type: p.SET_MARKUP,
          markupIndex: null,
          content: t,
          fromIndex: null,
          toIndex: null,
        });
      }
      function s(e, t) {
        g.push({
          parentID: e,
          parentNode: null,
          type: p.TEXT_CONTENT,
          markupIndex: null,
          content: t,
          fromIndex: null,
          toIndex: null,
        });
      }
      function u() {
        g.length && (c.processChildrenUpdates(g, y), l());
      }
      function l() {
        (g.length = 0), (y.length = 0);
      }
      var c = n(64),
        p = n(16),
        d = n(5),
        f = n(50),
        h = n(115),
        m = n(116),
        v = 0,
        g = [],
        y = [],
        C = {
          Mixin: {
            _reconcilerInstantiateChildren: function (e, n, r) {
              if ("production" !== t.env.NODE_ENV && this._currentElement)
                try {
                  return (
                    (d.current = this._currentElement._owner),
                    h.instantiateChildren(e, n, r)
                  );
                } finally {
                  d.current = null;
                }
              return h.instantiateChildren(e, n, r);
            },
            _reconcilerUpdateChildren: function (e, n, r, o) {
              var i;
              if ("production" !== t.env.NODE_ENV && this._currentElement) {
                try {
                  (d.current = this._currentElement._owner), (i = m(n));
                } finally {
                  d.current = null;
                }
                return h.updateChildren(e, i, r, o);
              }
              return (i = m(n)), h.updateChildren(e, i, r, o);
            },
            mountChildren: function (e, t, n) {
              var r = this._reconcilerInstantiateChildren(e, t, n);
              this._renderedChildren = r;
              var o = [],
                i = 0;
              for (var a in r)
                if (r.hasOwnProperty(a)) {
                  var s = r[a],
                    u = this._rootNodeID + a,
                    l = f.mountComponent(s, u, t, n);
                  (s._mountIndex = i++), o.push(l);
                }
              return o;
            },
            updateTextContent: function (e) {
              v++;
              var t = !0;
              try {
                var n = this._renderedChildren;
                h.unmountChildren(n);
                for (var r in n)
                  n.hasOwnProperty(r) && this._unmountChild(n[r]);
                this.setTextContent(e), (t = !1);
              } finally {
                v--, v || (t ? l() : u());
              }
            },
            updateMarkup: function (e) {
              v++;
              var t = !0;
              try {
                var n = this._renderedChildren;
                h.unmountChildren(n);
                for (var r in n)
                  n.hasOwnProperty(r) && this._unmountChildByName(n[r], r);
                this.setMarkup(e), (t = !1);
              } finally {
                v--, v || (t ? l() : u());
              }
            },
            updateChildren: function (e, t, n) {
              v++;
              var r = !0;
              try {
                this._updateChildren(e, t, n), (r = !1);
              } finally {
                v--, v || (r ? l() : u());
              }
            },
            _updateChildren: function (e, t, n) {
              var r = this._renderedChildren,
                o = this._reconcilerUpdateChildren(r, e, t, n);
              if (((this._renderedChildren = o), o || r)) {
                var i,
                  a = 0,
                  s = 0;
                for (i in o)
                  if (o.hasOwnProperty(i)) {
                    var u = r && r[i],
                      l = o[i];
                    u === l
                      ? (this.moveChild(u, s, a),
                        (a = Math.max(u._mountIndex, a)),
                        (u._mountIndex = s))
                      : (u &&
                          ((a = Math.max(u._mountIndex, a)),
                          this._unmountChild(u)),
                        this._mountChildByNameAtIndex(l, i, s, t, n)),
                      s++;
                  }
                for (i in r)
                  !r.hasOwnProperty(i) ||
                    (o && o.hasOwnProperty(i)) ||
                    this._unmountChild(r[i]);
              }
            },
            unmountChildren: function () {
              var e = this._renderedChildren;
              h.unmountChildren(e), (this._renderedChildren = null);
            },
            moveChild: function (e, t, n) {
              e._mountIndex < n && o(this._rootNodeID, e._mountIndex, t);
            },
            createChild: function (e, t) {
              r(this._rootNodeID, t, e._mountIndex);
            },
            removeChild: function (e) {
              i(this._rootNodeID, e._mountIndex);
            },
            setTextContent: function (e) {
              s(this._rootNodeID, e);
            },
            setMarkup: function (e) {
              a(this._rootNodeID, e);
            },
            _mountChildByNameAtIndex: function (e, t, n, r, o) {
              var i = this._rootNodeID + t,
                a = f.mountComponent(e, i, r, o);
              (e._mountIndex = n), this.createChild(e, a);
            },
            _unmountChild: function (e) {
              this.removeChild(e), (e._mountIndex = null);
            },
          },
        };
      e.exports = C;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e, n, r) {
        var o = void 0 === e[r];
        "production" !== t.env.NODE_ENV &&
          ("production" !== t.env.NODE_ENV
            ? u(
                o,
                "flattenChildren(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.",
                r
              )
            : void 0),
          null != n && o && (e[r] = i(n, null));
      }
      var o = n(50),
        i = n(62),
        a = n(67),
        s = n(111),
        u = n(25),
        l = {
          instantiateChildren: function (e, t, n) {
            if (null == e) return null;
            var o = {};
            return s(e, r, o), o;
          },
          updateChildren: function (e, t, n, r) {
            if (!t && !e) return null;
            var s;
            for (s in t)
              if (t.hasOwnProperty(s)) {
                var u = e && e[s],
                  l = u && u._currentElement,
                  c = t[s];
                if (null != u && a(l, c))
                  o.receiveComponent(u, c, n, r), (t[s] = u);
                else {
                  u && o.unmountComponent(u, s);
                  var p = i(c, null);
                  t[s] = p;
                }
              }
            for (s in e)
              !e.hasOwnProperty(s) ||
                (t && t.hasOwnProperty(s)) ||
                o.unmountComponent(e[s]);
            return t;
          },
          unmountChildren: function (e) {
            for (var t in e)
              if (e.hasOwnProperty(t)) {
                var n = e[t];
                o.unmountComponent(n);
              }
          },
        };
      e.exports = l;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e, n, r) {
        var o = e,
          i = void 0 === o[r];
        "production" !== t.env.NODE_ENV &&
          ("production" !== t.env.NODE_ENV
            ? a(
                i,
                "flattenChildren(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.",
                r
              )
            : void 0),
          i && null != n && (o[r] = n);
      }
      function o(e) {
        if (null == e) return e;
        var t = {};
        return i(e, r, t), t;
      }
      var i = n(111),
        a = n(25);
      e.exports = o;
    }.call(t, n(4)));
  },
  function (e, t) {
    "use strict";
    function n(e, t) {
      if (e === t) return !0;
      if (
        "object" != typeof e ||
        null === e ||
        "object" != typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        o = Object.keys(t);
      if (n.length !== o.length) return !1;
      for (var i = r.bind(t), a = 0; a < n.length; a++)
        if (!i(n[a]) || e[n[a]] !== t[n[a]]) return !1;
      return !0;
    }
    var r = Object.prototype.hasOwnProperty;
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      var t = d.getID(e),
        n = p.getReactRootIDFromNodeID(t),
        r = d.findReactContainerForID(n),
        o = d.getFirstReactDOM(r);
      return o;
    }
    function o(e, t) {
      (this.topLevelType = e), (this.nativeEvent = t), (this.ancestors = []);
    }
    function i(e) {
      a(e);
    }
    function a(e) {
      for (var t = d.getFirstReactDOM(m(e.nativeEvent)) || window, n = t; n; )
        e.ancestors.push(n), (n = r(n));
      for (var o = 0; o < e.ancestors.length; o++) {
        t = e.ancestors[o];
        var i = d.getID(t) || "";
        g._handleTopLevel(
          e.topLevelType,
          t,
          i,
          e.nativeEvent,
          m(e.nativeEvent)
        );
      }
    }
    function s(e) {
      var t = v(window);
      e(t);
    }
    var u = n(119),
      l = n(9),
      c = n(56),
      p = n(45),
      d = n(28),
      f = n(54),
      h = n(39),
      m = n(81),
      v = n(120);
    h(o.prototype, {
      destructor: function () {
        (this.topLevelType = null),
          (this.nativeEvent = null),
          (this.ancestors.length = 0);
      },
    }),
      c.addPoolingTo(o, c.twoArgumentPooler);
    var g = {
      _enabled: !0,
      _handleTopLevel: null,
      WINDOW_HANDLE: l.canUseDOM ? window : null,
      setHandleTopLevel: function (e) {
        g._handleTopLevel = e;
      },
      setEnabled: function (e) {
        g._enabled = !!e;
      },
      isEnabled: function () {
        return g._enabled;
      },
      trapBubbledEvent: function (e, t, n) {
        var r = n;
        return r ? u.listen(r, t, g.dispatchEvent.bind(null, e)) : null;
      },
      trapCapturedEvent: function (e, t, n) {
        var r = n;
        return r ? u.capture(r, t, g.dispatchEvent.bind(null, e)) : null;
      },
      monitorScrollValue: function (e) {
        var t = s.bind(null, e);
        u.listen(window, "scroll", t);
      },
      dispatchEvent: function (e, t) {
        if (g._enabled) {
          var n = o.getPooled(e, t);
          try {
            f.batchedUpdates(i, n);
          } finally {
            o.release(n);
          }
        }
      },
    };
    e.exports = g;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(15),
        o = {
          listen: function (e, t, n) {
            return e.addEventListener
              ? (e.addEventListener(t, n, !1),
                {
                  remove: function () {
                    e.removeEventListener(t, n, !1);
                  },
                })
              : e.attachEvent
              ? (e.attachEvent("on" + t, n),
                {
                  remove: function () {
                    e.detachEvent("on" + t, n);
                  },
                })
              : void 0;
          },
          capture: function (e, n, o) {
            return e.addEventListener
              ? (e.addEventListener(n, o, !0),
                {
                  remove: function () {
                    e.removeEventListener(n, o, !0);
                  },
                })
              : ("production" !== t.env.NODE_ENV &&
                  console.error(
                    "Attempted to listen to events during the capture phase on a browser that does not support the capture phase. Your application will not receive some events."
                  ),
                { remove: r });
          },
          registerDefault: function () {},
        };
      e.exports = o;
    }.call(t, n(4)));
  },
  function (e, t) {
    "use strict";
    function n(e) {
      return e === window
        ? {
            x: window.pageXOffset || document.documentElement.scrollLeft,
            y: window.pageYOffset || document.documentElement.scrollTop,
          }
        : { x: e.scrollLeft, y: e.scrollTop };
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    var r = n(23),
      o = n(31),
      i = n(64),
      a = n(122),
      s = n(68),
      u = n(29),
      l = n(69),
      c = n(18),
      p = n(46),
      d = n(54),
      f = {
        Component: i.injection,
        Class: a.injection,
        DOMProperty: r.injection,
        EmptyComponent: s.injection,
        EventPluginHub: o.injection,
        EventEmitter: u.injection,
        NativeComponent: l.injection,
        Perf: c.injection,
        RootIndex: p.injection,
        Updates: d.injection,
      };
    e.exports = f;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r() {
        k ||
          ((k = !0),
          "production" !== t.env.NODE_ENV
            ? E(
                !1,
                "setProps(...) and replaceProps(...) are deprecated. Instead, call render again at the top level."
              )
            : void 0);
      }
      function o(e, n, r) {
        for (var o in n)
          n.hasOwnProperty(o) &&
            ("production" !== t.env.NODE_ENV
              ? E(
                  "function" == typeof n[o],
                  "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",
                  e.displayName || "ReactClass",
                  v[r],
                  o
                )
              : void 0);
      }
      function i(e, n) {
        var r = S.hasOwnProperty(n) ? S[n] : null;
        _.hasOwnProperty(n) &&
          (r !== x.OVERRIDE_BASE
            ? "production" !== t.env.NODE_ENV
              ? A(
                  !1,
                  "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",
                  n
                )
              : A(!1)
            : void 0),
          e.hasOwnProperty(n) &&
            (r !== x.DEFINE_MANY && r !== x.DEFINE_MANY_MERGED
              ? "production" !== t.env.NODE_ENV
                ? A(
                    !1,
                    "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
                    n
                  )
                : A(!1)
              : void 0);
      }
      function a(e, n) {
        if (n) {
          "function" == typeof n
            ? "production" !== t.env.NODE_ENV
              ? A(
                  !1,
                  "ReactClass: You're attempting to use a component class as a mixin. Instead, just use a regular object."
                )
              : A(!1)
            : void 0,
            h.isValidElement(n)
              ? "production" !== t.env.NODE_ENV
                ? A(
                    !1,
                    "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object."
                  )
                : A(!1)
              : void 0;
          var r = e.prototype;
          n.hasOwnProperty(w) && B.mixins(e, n.mixins);
          for (var o in n)
            if (n.hasOwnProperty(o) && o !== w) {
              var a = n[o];
              if ((i(r, o), B.hasOwnProperty(o))) B[o](e, a);
              else {
                var s = S.hasOwnProperty(o),
                  u = r.hasOwnProperty(o),
                  p = "function" == typeof a,
                  d = p && !s && !u && n.autobind !== !1;
                if (d)
                  r.__reactAutoBindMap || (r.__reactAutoBindMap = {}),
                    (r.__reactAutoBindMap[o] = a),
                    (r[o] = a);
                else if (u) {
                  var f = S[o];
                  !s || (f !== x.DEFINE_MANY_MERGED && f !== x.DEFINE_MANY)
                    ? "production" !== t.env.NODE_ENV
                      ? A(
                          !1,
                          "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",
                          f,
                          o
                        )
                      : A(!1)
                    : void 0,
                    f === x.DEFINE_MANY_MERGED
                      ? (r[o] = l(r[o], a))
                      : f === x.DEFINE_MANY && (r[o] = c(r[o], a));
                } else
                  (r[o] = a),
                    "production" !== t.env.NODE_ENV &&
                      "function" == typeof a &&
                      n.displayName &&
                      (r[o].displayName = n.displayName + "_" + o);
              }
            }
        }
      }
      function s(e, n) {
        if (n)
          for (var r in n) {
            var o = n[r];
            if (n.hasOwnProperty(r)) {
              var i = r in B;
              i
                ? "production" !== t.env.NODE_ENV
                  ? A(
                      !1,
                      'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
                      r
                    )
                  : A(!1)
                : void 0;
              var a = r in e;
              a
                ? "production" !== t.env.NODE_ENV
                  ? A(
                      !1,
                      "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
                      r
                    )
                  : A(!1)
                : void 0,
                (e[r] = o);
            }
          }
      }
      function u(e, n) {
        e && n && "object" == typeof e && "object" == typeof n
          ? void 0
          : "production" !== t.env.NODE_ENV
          ? A(!1, "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.")
          : A(!1);
        for (var r in n)
          n.hasOwnProperty(r) &&
            (void 0 !== e[r]
              ? "production" !== t.env.NODE_ENV
                ? A(
                    !1,
                    "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",
                    r
                  )
                : A(!1)
              : void 0,
            (e[r] = n[r]));
        return e;
      }
      function l(e, t) {
        return function () {
          var n = e.apply(this, arguments),
            r = t.apply(this, arguments);
          if (null == n) return r;
          if (null == r) return n;
          var o = {};
          return u(o, n), u(o, r), o;
        };
      }
      function c(e, t) {
        return function () {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function p(e, n) {
        var r = n.bind(e);
        if ("production" !== t.env.NODE_ENV) {
          (r.__reactBoundContext = e),
            (r.__reactBoundMethod = n),
            (r.__reactBoundArguments = null);
          var o = e.constructor.displayName,
            i = r.bind;
          r.bind = function (a) {
            for (
              var s = arguments.length, u = Array(s > 1 ? s - 1 : 0), l = 1;
              s > l;
              l++
            )
              u[l - 1] = arguments[l];
            if (a !== e && null !== a)
              "production" !== t.env.NODE_ENV
                ? E(
                    !1,
                    "bind(): React component methods may only be bound to the component instance. See %s",
                    o
                  )
                : void 0;
            else if (!u.length)
              return (
                "production" !== t.env.NODE_ENV
                  ? E(
                      !1,
                      "bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s",
                      o
                    )
                  : void 0,
                r
              );
            var c = i.apply(r, arguments);
            return (
              (c.__reactBoundContext = e),
              (c.__reactBoundMethod = n),
              (c.__reactBoundArguments = u),
              c
            );
          };
        }
        return r;
      }
      function d(e) {
        for (var t in e.__reactAutoBindMap)
          if (e.__reactAutoBindMap.hasOwnProperty(t)) {
            var n = e.__reactAutoBindMap[t];
            e[t] = p(e, n);
          }
      }
      var f = n(123),
        h = n(42),
        m = n(65),
        v = n(66),
        g = n(124),
        y = n(39),
        C = n(58),
        A = n(13),
        D = n(17),
        b = n(79),
        E = n(25),
        w = b({ mixins: null }),
        x = D({
          DEFINE_ONCE: null,
          DEFINE_MANY: null,
          OVERRIDE_BASE: null,
          DEFINE_MANY_MERGED: null,
        }),
        N = [],
        k = !1,
        S = {
          mixins: x.DEFINE_MANY,
          statics: x.DEFINE_MANY,
          propTypes: x.DEFINE_MANY,
          contextTypes: x.DEFINE_MANY,
          childContextTypes: x.DEFINE_MANY,
          getDefaultProps: x.DEFINE_MANY_MERGED,
          getInitialState: x.DEFINE_MANY_MERGED,
          getChildContext: x.DEFINE_MANY_MERGED,
          render: x.DEFINE_ONCE,
          componentWillMount: x.DEFINE_MANY,
          componentDidMount: x.DEFINE_MANY,
          componentWillReceiveProps: x.DEFINE_MANY,
          shouldComponentUpdate: x.DEFINE_ONCE,
          componentWillUpdate: x.DEFINE_MANY,
          componentDidUpdate: x.DEFINE_MANY,
          componentWillUnmount: x.DEFINE_MANY,
          updateComponent: x.OVERRIDE_BASE,
        },
        B = {
          displayName: function (e, t) {
            e.displayName = t;
          },
          mixins: function (e, t) {
            if (t) for (var n = 0; n < t.length; n++) a(e, t[n]);
          },
          childContextTypes: function (e, n) {
            "production" !== t.env.NODE_ENV && o(e, n, m.childContext),
              (e.childContextTypes = y({}, e.childContextTypes, n));
          },
          contextTypes: function (e, n) {
            "production" !== t.env.NODE_ENV && o(e, n, m.context),
              (e.contextTypes = y({}, e.contextTypes, n));
          },
          getDefaultProps: function (e, t) {
            e.getDefaultProps
              ? (e.getDefaultProps = l(e.getDefaultProps, t))
              : (e.getDefaultProps = t);
          },
          propTypes: function (e, n) {
            "production" !== t.env.NODE_ENV && o(e, n, m.prop),
              (e.propTypes = y({}, e.propTypes, n));
          },
          statics: function (e, t) {
            s(e, t);
          },
          autobind: function () {},
        },
        _ = {
          replaceState: function (e, t) {
            this.updater.enqueueReplaceState(this, e),
              t && this.updater.enqueueCallback(this, t);
          },
          isMounted: function () {
            return this.updater.isMounted(this);
          },
          setProps: function (e, n) {
            "production" !== t.env.NODE_ENV && r(),
              this.updater.enqueueSetProps(this, e),
              n && this.updater.enqueueCallback(this, n);
          },
          replaceProps: function (e, n) {
            "production" !== t.env.NODE_ENV && r(),
              this.updater.enqueueReplaceProps(this, e),
              n && this.updater.enqueueCallback(this, n);
          },
        },
        M = function () {};
      y(M.prototype, f.prototype, _);
      var O = {
        createClass: function (e) {
          var n = function (e, r, o) {
            "production" !== t.env.NODE_ENV &&
              ("production" !== t.env.NODE_ENV
                ? E(
                    this instanceof n,
                    "Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory"
                  )
                : void 0),
              this.__reactAutoBindMap && d(this),
              (this.props = e),
              (this.context = r),
              (this.refs = C),
              (this.updater = o || g),
              (this.state = null);
            var i = this.getInitialState ? this.getInitialState() : null;
            "production" !== t.env.NODE_ENV &&
              "undefined" == typeof i &&
              this.getInitialState._isMockFunction &&
              (i = null),
              "object" != typeof i || Array.isArray(i)
                ? "production" !== t.env.NODE_ENV
                  ? A(
                      !1,
                      "%s.getInitialState(): must return an object or null",
                      n.displayName || "ReactCompositeComponent"
                    )
                  : A(!1)
                : void 0,
              (this.state = i);
          };
          (n.prototype = new M()),
            (n.prototype.constructor = n),
            N.forEach(a.bind(null, n)),
            a(n, e),
            n.getDefaultProps && (n.defaultProps = n.getDefaultProps()),
            "production" !== t.env.NODE_ENV &&
              (n.getDefaultProps &&
                (n.getDefaultProps.isReactClassApproved = {}),
              n.prototype.getInitialState &&
                (n.prototype.getInitialState.isReactClassApproved = {})),
            n.prototype.render
              ? void 0
              : "production" !== t.env.NODE_ENV
              ? A(
                  !1,
                  "createClass(...): Class specification must implement a `render` method."
                )
              : A(!1),
            "production" !== t.env.NODE_ENV &&
              ("production" !== t.env.NODE_ENV
                ? E(
                    !n.prototype.componentShouldUpdate,
                    "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
                    e.displayName || "A component"
                  )
                : void 0,
              "production" !== t.env.NODE_ENV
                ? E(
                    !n.prototype.componentWillRecieveProps,
                    "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
                    e.displayName || "A component"
                  )
                : void 0);
          for (var r in S) n.prototype[r] || (n.prototype[r] = null);
          return n;
        },
        injection: {
          injectMixin: function (e) {
            N.push(e);
          },
        },
      };
      e.exports = O;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = a),
          (this.updater = n || o);
      }
      var o = n(124),
        i = n(43),
        a = n(58),
        s = n(13),
        u = n(25);
      if (
        ((r.prototype.isReactComponent = {}),
        (r.prototype.setState = function (e, n) {
          "object" != typeof e && "function" != typeof e && null != e
            ? "production" !== t.env.NODE_ENV
              ? s(
                  !1,
                  "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
                )
              : s(!1)
            : void 0,
            "production" !== t.env.NODE_ENV &&
              ("production" !== t.env.NODE_ENV
                ? u(
                    null != e,
                    "setState(...): You passed an undefined or null state object; instead, use forceUpdate()."
                  )
                : void 0),
            this.updater.enqueueSetState(this, e),
            n && this.updater.enqueueCallback(this, n);
        }),
        (r.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this),
            e && this.updater.enqueueCallback(this, e);
        }),
        "production" !== t.env.NODE_ENV)
      ) {
        var l = {
            getDOMNode: [
              "getDOMNode",
              "Use ReactDOM.findDOMNode(component) instead.",
            ],
            isMounted: [
              "isMounted",
              "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
            ],
            replaceProps: [
              "replaceProps",
              "Instead, call render again at the top level.",
            ],
            replaceState: [
              "replaceState",
              "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).",
            ],
            setProps: [
              "setProps",
              "Instead, call render again at the top level.",
            ],
          },
          c = function (e, n) {
            i &&
              Object.defineProperty(r.prototype, e, {
                get: function () {
                  "production" !== t.env.NODE_ENV
                    ? u(
                        !1,
                        "%s(...) is deprecated in plain JavaScript React classes. %s",
                        n[0],
                        n[1]
                      )
                    : void 0;
                },
              });
          };
        for (var p in l) l.hasOwnProperty(p) && c(p, l[p]);
      }
      e.exports = r;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e, n) {
        "production" !== t.env.NODE_ENV &&
          ("production" !== t.env.NODE_ENV
            ? o(
                !1,
                "%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op. Please check the code for the %s component.",
                n,
                n,
                (e.constructor && e.constructor.displayName) || ""
              )
            : void 0);
      }
      var o = n(25),
        i = {
          isMounted: function (e) {
            return !1;
          },
          enqueueCallback: function (e, t) {},
          enqueueForceUpdate: function (e) {
            r(e, "forceUpdate");
          },
          enqueueReplaceState: function (e, t) {
            r(e, "replaceState");
          },
          enqueueSetState: function (e, t) {
            r(e, "setState");
          },
          enqueueSetProps: function (e, t) {
            r(e, "setProps");
          },
          enqueueReplaceProps: function (e, t) {
            r(e, "replaceProps");
          },
        };
      e.exports = i;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      this.reinitializeTransaction(),
        (this.renderToStaticMarkup = !1),
        (this.reactMountReady = o.getPooled(null)),
        (this.useCreateElement = !e && s.useCreateElement);
    }
    var o = n(55),
      i = n(56),
      a = n(29),
      s = n(41),
      u = n(126),
      l = n(57),
      c = n(39),
      p = { initialize: u.getSelectionInformation, close: u.restoreSelection },
      d = {
        initialize: function () {
          var e = a.isEnabled();
          return a.setEnabled(!1), e;
        },
        close: function (e) {
          a.setEnabled(e);
        },
      },
      f = {
        initialize: function () {
          this.reactMountReady.reset();
        },
        close: function () {
          this.reactMountReady.notifyAll();
        },
      },
      h = [p, d, f],
      m = {
        getTransactionWrappers: function () {
          return h;
        },
        getReactMountReady: function () {
          return this.reactMountReady;
        },
        destructor: function () {
          o.release(this.reactMountReady), (this.reactMountReady = null);
        },
      };
    c(r.prototype, l.Mixin, m), i.addPoolingTo(r), (e.exports = r);
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return i(document.documentElement, e);
    }
    var o = n(127),
      i = n(59),
      a = n(95),
      s = n(129),
      u = {
        hasSelectionCapabilities: function (e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t && "text" === e.type) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        },
        getSelectionInformation: function () {
          var e = s();
          return {
            focusedElem: e,
            selectionRange: u.hasSelectionCapabilities(e)
              ? u.getSelection(e)
              : null,
          };
        },
        restoreSelection: function (e) {
          var t = s(),
            n = e.focusedElem,
            o = e.selectionRange;
          t !== n &&
            r(n) &&
            (u.hasSelectionCapabilities(n) && u.setSelection(n, o), a(n));
        },
        getSelection: function (e) {
          var t;
          if ("selectionStart" in e)
            t = { start: e.selectionStart, end: e.selectionEnd };
          else if (
            document.selection &&
            e.nodeName &&
            "input" === e.nodeName.toLowerCase()
          ) {
            var n = document.selection.createRange();
            n.parentElement() === e &&
              (t = {
                start: -n.moveStart("character", -e.value.length),
                end: -n.moveEnd("character", -e.value.length),
              });
          } else t = o.getOffsets(e);
          return t || { start: 0, end: 0 };
        },
        setSelection: function (e, t) {
          var n = t.start,
            r = t.end;
          if (("undefined" == typeof r && (r = n), "selectionStart" in e))
            (e.selectionStart = n),
              (e.selectionEnd = Math.min(r, e.value.length));
          else if (
            document.selection &&
            e.nodeName &&
            "input" === e.nodeName.toLowerCase()
          ) {
            var i = e.createTextRange();
            i.collapse(!0),
              i.moveStart("character", n),
              i.moveEnd("character", r - n),
              i.select();
          } else o.setOffsets(e, t);
        },
      };
    e.exports = u;
  },
  function (e, t, n) {
    "use strict";
    function r(e, t, n, r) {
      return e === n && t === r;
    }
    function o(e) {
      var t = document.selection,
        n = t.createRange(),
        r = n.text.length,
        o = n.duplicate();
      o.moveToElementText(e), o.setEndPoint("EndToStart", n);
      var i = o.text.length,
        a = i + r;
      return { start: i, end: a };
    }
    function i(e) {
      var t = window.getSelection && window.getSelection();
      if (!t || 0 === t.rangeCount) return null;
      var n = t.anchorNode,
        o = t.anchorOffset,
        i = t.focusNode,
        a = t.focusOffset,
        s = t.getRangeAt(0);
      try {
        s.startContainer.nodeType, s.endContainer.nodeType;
      } catch (u) {
        return null;
      }
      var l = r(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset),
        c = l ? 0 : s.toString().length,
        p = s.cloneRange();
      p.selectNodeContents(e), p.setEnd(s.startContainer, s.startOffset);
      var d = r(p.startContainer, p.startOffset, p.endContainer, p.endOffset),
        f = d ? 0 : p.toString().length,
        h = f + c,
        m = document.createRange();
      m.setStart(n, o), m.setEnd(i, a);
      var v = m.collapsed;
      return { start: v ? h : f, end: v ? f : h };
    }
    function a(e, t) {
      var n,
        r,
        o = document.selection.createRange().duplicate();
      "undefined" == typeof t.end
        ? ((n = t.start), (r = n))
        : t.start > t.end
        ? ((n = t.end), (r = t.start))
        : ((n = t.start), (r = t.end)),
        o.moveToElementText(e),
        o.moveStart("character", n),
        o.setEndPoint("EndToStart", o),
        o.moveEnd("character", r - n),
        o.select();
    }
    function s(e, t) {
      if (window.getSelection) {
        var n = window.getSelection(),
          r = e[c()].length,
          o = Math.min(t.start, r),
          i = "undefined" == typeof t.end ? o : Math.min(t.end, r);
        if (!n.extend && o > i) {
          var a = i;
          (i = o), (o = a);
        }
        var s = l(e, o),
          u = l(e, i);
        if (s && u) {
          var p = document.createRange();
          p.setStart(s.node, s.offset),
            n.removeAllRanges(),
            o > i
              ? (n.addRange(p), n.extend(u.node, u.offset))
              : (p.setEnd(u.node, u.offset), n.addRange(p));
        }
      }
    }
    var u = n(9),
      l = n(128),
      c = n(75),
      p = u.canUseDOM && "selection" in document && !("getSelection" in window),
      d = { getOffsets: p ? o : i, setOffsets: p ? a : s };
    e.exports = d;
  },
  function (e, t) {
    "use strict";
    function n(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function r(e) {
      for (; e; ) {
        if (e.nextSibling) return e.nextSibling;
        e = e.parentNode;
      }
    }
    function o(e, t) {
      for (var o = n(e), i = 0, a = 0; o; ) {
        if (3 === o.nodeType) {
          if (((a = i + o.textContent.length), t >= i && a >= t))
            return { node: o, offset: t - i };
          i = a;
        }
        o = n(r(o));
      }
    }
    e.exports = o;
  },
  function (e, t) {
    "use strict";
    function n() {
      if ("undefined" == typeof document) return null;
      try {
        return document.activeElement || document.body;
      } catch (e) {
        return document.body;
      }
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      if ("selectionStart" in e && u.hasSelectionCapabilities(e))
        return { start: e.selectionStart, end: e.selectionEnd };
      if (window.getSelection) {
        var t = window.getSelection();
        return {
          anchorNode: t.anchorNode,
          anchorOffset: t.anchorOffset,
          focusNode: t.focusNode,
          focusOffset: t.focusOffset,
        };
      }
      if (document.selection) {
        var n = document.selection.createRange();
        return {
          parentElement: n.parentElement(),
          text: n.text,
          top: n.boundingTop,
          left: n.boundingLeft,
        };
      }
    }
    function o(e, t) {
      if (A || null == g || g !== c()) return null;
      var n = r(g);
      if (!C || !f(C, n)) {
        C = n;
        var o = l.getPooled(v.select, y, e, t);
        return (
          (o.type = "select"),
          (o.target = g),
          a.accumulateTwoPhaseDispatches(o),
          o
        );
      }
      return null;
    }
    var i = n(30),
      a = n(73),
      s = n(9),
      u = n(126),
      l = n(77),
      c = n(129),
      p = n(82),
      d = n(79),
      f = n(117),
      h = i.topLevelTypes,
      m =
        s.canUseDOM &&
        "documentMode" in document &&
        document.documentMode <= 11,
      v = {
        select: {
          phasedRegistrationNames: {
            bubbled: d({ onSelect: null }),
            captured: d({ onSelectCapture: null }),
          },
          dependencies: [
            h.topBlur,
            h.topContextMenu,
            h.topFocus,
            h.topKeyDown,
            h.topMouseDown,
            h.topMouseUp,
            h.topSelectionChange,
          ],
        },
      },
      g = null,
      y = null,
      C = null,
      A = !1,
      D = !1,
      b = d({ onSelect: null }),
      E = {
        eventTypes: v,
        extractEvents: function (e, t, n, r, i) {
          if (!D) return null;
          switch (e) {
            case h.topFocus:
              (p(t) || "true" === t.contentEditable) &&
                ((g = t), (y = n), (C = null));
              break;
            case h.topBlur:
              (g = null), (y = null), (C = null);
              break;
            case h.topMouseDown:
              A = !0;
              break;
            case h.topContextMenu:
            case h.topMouseUp:
              return (A = !1), o(r, i);
            case h.topSelectionChange:
              if (m) break;
            case h.topKeyDown:
            case h.topKeyUp:
              return o(r, i);
          }
          return null;
        },
        didPutListener: function (e, t, n) {
          t === b && (D = !0);
        },
      };
    e.exports = E;
  },
  function (e, t) {
    "use strict";
    var n = Math.pow(2, 53),
      r = {
        createReactRootIndex: function () {
          return Math.ceil(Math.random() * n);
        },
      };
    e.exports = r;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(30),
        o = n(119),
        i = n(73),
        a = n(28),
        s = n(133),
        u = n(77),
        l = n(134),
        c = n(135),
        p = n(86),
        d = n(138),
        f = n(139),
        h = n(87),
        m = n(140),
        v = n(15),
        g = n(136),
        y = n(13),
        C = n(79),
        A = r.topLevelTypes,
        D = {
          abort: {
            phasedRegistrationNames: {
              bubbled: C({ onAbort: !0 }),
              captured: C({ onAbortCapture: !0 }),
            },
          },
          blur: {
            phasedRegistrationNames: {
              bubbled: C({ onBlur: !0 }),
              captured: C({ onBlurCapture: !0 }),
            },
          },
          canPlay: {
            phasedRegistrationNames: {
              bubbled: C({ onCanPlay: !0 }),
              captured: C({ onCanPlayCapture: !0 }),
            },
          },
          canPlayThrough: {
            phasedRegistrationNames: {
              bubbled: C({ onCanPlayThrough: !0 }),
              captured: C({ onCanPlayThroughCapture: !0 }),
            },
          },
          click: {
            phasedRegistrationNames: {
              bubbled: C({ onClick: !0 }),
              captured: C({ onClickCapture: !0 }),
            },
          },
          contextMenu: {
            phasedRegistrationNames: {
              bubbled: C({ onContextMenu: !0 }),
              captured: C({ onContextMenuCapture: !0 }),
            },
          },
          copy: {
            phasedRegistrationNames: {
              bubbled: C({ onCopy: !0 }),
              captured: C({ onCopyCapture: !0 }),
            },
          },
          cut: {
            phasedRegistrationNames: {
              bubbled: C({ onCut: !0 }),
              captured: C({ onCutCapture: !0 }),
            },
          },
          doubleClick: {
            phasedRegistrationNames: {
              bubbled: C({ onDoubleClick: !0 }),
              captured: C({ onDoubleClickCapture: !0 }),
            },
          },
          drag: {
            phasedRegistrationNames: {
              bubbled: C({ onDrag: !0 }),
              captured: C({ onDragCapture: !0 }),
            },
          },
          dragEnd: {
            phasedRegistrationNames: {
              bubbled: C({ onDragEnd: !0 }),
              captured: C({ onDragEndCapture: !0 }),
            },
          },
          dragEnter: {
            phasedRegistrationNames: {
              bubbled: C({ onDragEnter: !0 }),
              captured: C({ onDragEnterCapture: !0 }),
            },
          },
          dragExit: {
            phasedRegistrationNames: {
              bubbled: C({ onDragExit: !0 }),
              captured: C({ onDragExitCapture: !0 }),
            },
          },
          dragLeave: {
            phasedRegistrationNames: {
              bubbled: C({ onDragLeave: !0 }),
              captured: C({ onDragLeaveCapture: !0 }),
            },
          },
          dragOver: {
            phasedRegistrationNames: {
              bubbled: C({ onDragOver: !0 }),
              captured: C({ onDragOverCapture: !0 }),
            },
          },
          dragStart: {
            phasedRegistrationNames: {
              bubbled: C({ onDragStart: !0 }),
              captured: C({ onDragStartCapture: !0 }),
            },
          },
          drop: {
            phasedRegistrationNames: {
              bubbled: C({ onDrop: !0 }),
              captured: C({ onDropCapture: !0 }),
            },
          },
          durationChange: {
            phasedRegistrationNames: {
              bubbled: C({ onDurationChange: !0 }),
              captured: C({ onDurationChangeCapture: !0 }),
            },
          },
          emptied: {
            phasedRegistrationNames: {
              bubbled: C({ onEmptied: !0 }),
              captured: C({ onEmptiedCapture: !0 }),
            },
          },
          encrypted: {
            phasedRegistrationNames: {
              bubbled: C({ onEncrypted: !0 }),
              captured: C({ onEncryptedCapture: !0 }),
            },
          },
          ended: {
            phasedRegistrationNames: {
              bubbled: C({ onEnded: !0 }),
              captured: C({ onEndedCapture: !0 }),
            },
          },
          error: {
            phasedRegistrationNames: {
              bubbled: C({ onError: !0 }),
              captured: C({ onErrorCapture: !0 }),
            },
          },
          focus: {
            phasedRegistrationNames: {
              bubbled: C({ onFocus: !0 }),
              captured: C({ onFocusCapture: !0 }),
            },
          },
          input: {
            phasedRegistrationNames: {
              bubbled: C({ onInput: !0 }),
              captured: C({ onInputCapture: !0 }),
            },
          },
          keyDown: {
            phasedRegistrationNames: {
              bubbled: C({ onKeyDown: !0 }),
              captured: C({ onKeyDownCapture: !0 }),
            },
          },
          keyPress: {
            phasedRegistrationNames: {
              bubbled: C({ onKeyPress: !0 }),
              captured: C({ onKeyPressCapture: !0 }),
            },
          },
          keyUp: {
            phasedRegistrationNames: {
              bubbled: C({ onKeyUp: !0 }),
              captured: C({ onKeyUpCapture: !0 }),
            },
          },
          load: {
            phasedRegistrationNames: {
              bubbled: C({ onLoad: !0 }),
              captured: C({ onLoadCapture: !0 }),
            },
          },
          loadedData: {
            phasedRegistrationNames: {
              bubbled: C({ onLoadedData: !0 }),
              captured: C({ onLoadedDataCapture: !0 }),
            },
          },
          loadedMetadata: {
            phasedRegistrationNames: {
              bubbled: C({ onLoadedMetadata: !0 }),
              captured: C({ onLoadedMetadataCapture: !0 }),
            },
          },
          loadStart: {
            phasedRegistrationNames: {
              bubbled: C({ onLoadStart: !0 }),
              captured: C({ onLoadStartCapture: !0 }),
            },
          },
          mouseDown: {
            phasedRegistrationNames: {
              bubbled: C({ onMouseDown: !0 }),
              captured: C({ onMouseDownCapture: !0 }),
            },
          },
          mouseMove: {
            phasedRegistrationNames: {
              bubbled: C({ onMouseMove: !0 }),
              captured: C({ onMouseMoveCapture: !0 }),
            },
          },
          mouseOut: {
            phasedRegistrationNames: {
              bubbled: C({ onMouseOut: !0 }),
              captured: C({ onMouseOutCapture: !0 }),
            },
          },
          mouseOver: {
            phasedRegistrationNames: {
              bubbled: C({ onMouseOver: !0 }),
              captured: C({ onMouseOverCapture: !0 }),
            },
          },
          mouseUp: {
            phasedRegistrationNames: {
              bubbled: C({ onMouseUp: !0 }),
              captured: C({ onMouseUpCapture: !0 }),
            },
          },
          paste: {
            phasedRegistrationNames: {
              bubbled: C({ onPaste: !0 }),
              captured: C({ onPasteCapture: !0 }),
            },
          },
          pause: {
            phasedRegistrationNames: {
              bubbled: C({ onPause: !0 }),
              captured: C({ onPauseCapture: !0 }),
            },
          },
          play: {
            phasedRegistrationNames: {
              bubbled: C({ onPlay: !0 }),
              captured: C({ onPlayCapture: !0 }),
            },
          },
          playing: {
            phasedRegistrationNames: {
              bubbled: C({ onPlaying: !0 }),
              captured: C({ onPlayingCapture: !0 }),
            },
          },
          progress: {
            phasedRegistrationNames: {
              bubbled: C({ onProgress: !0 }),
              captured: C({ onProgressCapture: !0 }),
            },
          },
          rateChange: {
            phasedRegistrationNames: {
              bubbled: C({ onRateChange: !0 }),
              captured: C({ onRateChangeCapture: !0 }),
            },
          },
          reset: {
            phasedRegistrationNames: {
              bubbled: C({ onReset: !0 }),
              captured: C({ onResetCapture: !0 }),
            },
          },
          scroll: {
            phasedRegistrationNames: {
              bubbled: C({ onScroll: !0 }),
              captured: C({ onScrollCapture: !0 }),
            },
          },
          seeked: {
            phasedRegistrationNames: {
              bubbled: C({ onSeeked: !0 }),
              captured: C({ onSeekedCapture: !0 }),
            },
          },
          seeking: {
            phasedRegistrationNames: {
              bubbled: C({ onSeeking: !0 }),
              captured: C({ onSeekingCapture: !0 }),
            },
          },
          stalled: {
            phasedRegistrationNames: {
              bubbled: C({ onStalled: !0 }),
              captured: C({ onStalledCapture: !0 }),
            },
          },
          submit: {
            phasedRegistrationNames: {
              bubbled: C({ onSubmit: !0 }),
              captured: C({ onSubmitCapture: !0 }),
            },
          },
          suspend: {
            phasedRegistrationNames: {
              bubbled: C({ onSuspend: !0 }),
              captured: C({ onSuspendCapture: !0 }),
            },
          },
          timeUpdate: {
            phasedRegistrationNames: {
              bubbled: C({ onTimeUpdate: !0 }),
              captured: C({ onTimeUpdateCapture: !0 }),
            },
          },
          touchCancel: {
            phasedRegistrationNames: {
              bubbled: C({ onTouchCancel: !0 }),
              captured: C({ onTouchCancelCapture: !0 }),
            },
          },
          touchEnd: {
            phasedRegistrationNames: {
              bubbled: C({ onTouchEnd: !0 }),
              captured: C({ onTouchEndCapture: !0 }),
            },
          },
          touchMove: {
            phasedRegistrationNames: {
              bubbled: C({ onTouchMove: !0 }),
              captured: C({ onTouchMoveCapture: !0 }),
            },
          },
          touchStart: {
            phasedRegistrationNames: {
              bubbled: C({ onTouchStart: !0 }),
              captured: C({ onTouchStartCapture: !0 }),
            },
          },
          volumeChange: {
            phasedRegistrationNames: {
              bubbled: C({ onVolumeChange: !0 }),
              captured: C({ onVolumeChangeCapture: !0 }),
            },
          },
          waiting: {
            phasedRegistrationNames: {
              bubbled: C({ onWaiting: !0 }),
              captured: C({ onWaitingCapture: !0 }),
            },
          },
          wheel: {
            phasedRegistrationNames: {
              bubbled: C({ onWheel: !0 }),
              captured: C({ onWheelCapture: !0 }),
            },
          },
        },
        b = {
          topAbort: D.abort,
          topBlur: D.blur,
          topCanPlay: D.canPlay,
          topCanPlayThrough: D.canPlayThrough,
          topClick: D.click,
          topContextMenu: D.contextMenu,
          topCopy: D.copy,
          topCut: D.cut,
          topDoubleClick: D.doubleClick,
          topDrag: D.drag,
          topDragEnd: D.dragEnd,
          topDragEnter: D.dragEnter,
          topDragExit: D.dragExit,
          topDragLeave: D.dragLeave,
          topDragOver: D.dragOver,
          topDragStart: D.dragStart,
          topDrop: D.drop,
          topDurationChange: D.durationChange,
          topEmptied: D.emptied,
          topEncrypted: D.encrypted,
          topEnded: D.ended,
          topError: D.error,
          topFocus: D.focus,
          topInput: D.input,
          topKeyDown: D.keyDown,
          topKeyPress: D.keyPress,
          topKeyUp: D.keyUp,
          topLoad: D.load,
          topLoadedData: D.loadedData,
          topLoadedMetadata: D.loadedMetadata,
          topLoadStart: D.loadStart,
          topMouseDown: D.mouseDown,
          topMouseMove: D.mouseMove,
          topMouseOut: D.mouseOut,
          topMouseOver: D.mouseOver,
          topMouseUp: D.mouseUp,
          topPaste: D.paste,
          topPause: D.pause,
          topPlay: D.play,
          topPlaying: D.playing,
          topProgress: D.progress,
          topRateChange: D.rateChange,
          topReset: D.reset,
          topScroll: D.scroll,
          topSeeked: D.seeked,
          topSeeking: D.seeking,
          topStalled: D.stalled,
          topSubmit: D.submit,
          topSuspend: D.suspend,
          topTimeUpdate: D.timeUpdate,
          topTouchCancel: D.touchCancel,
          topTouchEnd: D.touchEnd,
          topTouchMove: D.touchMove,
          topTouchStart: D.touchStart,
          topVolumeChange: D.volumeChange,
          topWaiting: D.waiting,
          topWheel: D.wheel,
        };
      for (var E in b) b[E].dependencies = [E];
      var w = C({ onClick: null }),
        x = {},
        N = {
          eventTypes: D,
          extractEvents: function (e, n, r, o, a) {
            var v = b[e];
            if (!v) return null;
            var C;
            switch (e) {
              case A.topAbort:
              case A.topCanPlay:
              case A.topCanPlayThrough:
              case A.topDurationChange:
              case A.topEmptied:
              case A.topEncrypted:
              case A.topEnded:
              case A.topError:
              case A.topInput:
              case A.topLoad:
              case A.topLoadedData:
              case A.topLoadedMetadata:
              case A.topLoadStart:
              case A.topPause:
              case A.topPlay:
              case A.topPlaying:
              case A.topProgress:
              case A.topRateChange:
              case A.topReset:
              case A.topSeeked:
              case A.topSeeking:
              case A.topStalled:
              case A.topSubmit:
              case A.topSuspend:
              case A.topTimeUpdate:
              case A.topVolumeChange:
              case A.topWaiting:
                C = u;
                break;
              case A.topKeyPress:
                if (0 === g(o)) return null;
              case A.topKeyDown:
              case A.topKeyUp:
                C = c;
                break;
              case A.topBlur:
              case A.topFocus:
                C = l;
                break;
              case A.topClick:
                if (2 === o.button) return null;
              case A.topContextMenu:
              case A.topDoubleClick:
              case A.topMouseDown:
              case A.topMouseMove:
              case A.topMouseOut:
              case A.topMouseOver:
              case A.topMouseUp:
                C = p;
                break;
              case A.topDrag:
              case A.topDragEnd:
              case A.topDragEnter:
              case A.topDragExit:
              case A.topDragLeave:
              case A.topDragOver:
              case A.topDragStart:
              case A.topDrop:
                C = d;
                break;
              case A.topTouchCancel:
              case A.topTouchEnd:
              case A.topTouchMove:
              case A.topTouchStart:
                C = f;
                break;
              case A.topScroll:
                C = h;
                break;
              case A.topWheel:
                C = m;
                break;
              case A.topCopy:
              case A.topCut:
              case A.topPaste:
                C = s;
            }
            C
              ? void 0
              : "production" !== t.env.NODE_ENV
              ? y(!1, "SimpleEventPlugin: Unhandled event type, `%s`.", e)
              : y(!1);
            var D = C.getPooled(v, r, o, a);
            return i.accumulateTwoPhaseDispatches(D), D;
          },
          didPutListener: function (e, t, n) {
            if (t === w) {
              var r = a.getNode(e);
              x[e] || (x[e] = o.listen(r, "click", v));
            }
          },
          willDeleteListener: function (e, t) {
            t === w && (x[e].remove(), delete x[e]);
          },
        };
      e.exports = N;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    "use strict";
    function r(e, t, n, r) {
      o.call(this, e, t, n, r);
    }
    var o = n(77),
      i = {
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
      };
    o.augmentClass(r, i), (e.exports = r);
  },
  function (e, t, n) {
    "use strict";
    function r(e, t, n, r) {
      o.call(this, e, t, n, r);
    }
    var o = n(87),
      i = { relatedTarget: null };
    o.augmentClass(r, i), (e.exports = r);
  },
  function (e, t, n) {
    "use strict";
    function r(e, t, n, r) {
      o.call(this, e, t, n, r);
    }
    var o = n(87),
      i = n(136),
      a = n(137),
      s = n(88),
      u = {
        key: a,
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: s,
        charCode: function (e) {
          return "keypress" === e.type ? i(e) : 0;
        },
        keyCode: function (e) {
          return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
        },
        which: function (e) {
          return "keypress" === e.type
            ? i(e)
            : "keydown" === e.type || "keyup" === e.type
            ? e.keyCode
            : 0;
        },
      };
    o.augmentClass(r, u), (e.exports = r);
  },
  function (e, t) {
    "use strict";
    function n(e) {
      var t,
        n = e.keyCode;
      return (
        "charCode" in e
          ? ((t = e.charCode), 0 === t && 13 === n && (t = 13))
          : (t = n),
        t >= 32 || 13 === t ? t : 0
      );
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      if (e.key) {
        var t = i[e.key] || e.key;
        if ("Unidentified" !== t) return t;
      }
      if ("keypress" === e.type) {
        var n = o(e);
        return 13 === n ? "Enter" : String.fromCharCode(n);
      }
      return "keydown" === e.type || "keyup" === e.type
        ? a[e.keyCode] || "Unidentified"
        : "";
    }
    var o = n(136),
      i = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      a = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      };
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    function r(e, t, n, r) {
      o.call(this, e, t, n, r);
    }
    var o = n(86),
      i = { dataTransfer: null };
    o.augmentClass(r, i), (e.exports = r);
  },
  function (e, t, n) {
    "use strict";
    function r(e, t, n, r) {
      o.call(this, e, t, n, r);
    }
    var o = n(87),
      i = n(88),
      a = {
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: i,
      };
    o.augmentClass(r, a), (e.exports = r);
  },
  function (e, t, n) {
    "use strict";
    function r(e, t, n, r) {
      o.call(this, e, t, n, r);
    }
    var o = n(86),
      i = {
        deltaX: function (e) {
          return "deltaX" in e
            ? e.deltaX
            : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
        },
        deltaY: function (e) {
          return "deltaY" in e
            ? e.deltaY
            : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
        },
        deltaZ: null,
        deltaMode: null,
      };
    o.augmentClass(r, i), (e.exports = r);
  },
  function (e, t, n) {
    "use strict";
    var r = n(23),
      o = r.injection.MUST_USE_ATTRIBUTE,
      i = {
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
      },
      a = {
        Properties: {
          clipPath: o,
          cx: o,
          cy: o,
          d: o,
          dx: o,
          dy: o,
          fill: o,
          fillOpacity: o,
          fontFamily: o,
          fontSize: o,
          fx: o,
          fy: o,
          gradientTransform: o,
          gradientUnits: o,
          markerEnd: o,
          markerMid: o,
          markerStart: o,
          offset: o,
          opacity: o,
          patternContentUnits: o,
          patternUnits: o,
          points: o,
          preserveAspectRatio: o,
          r: o,
          rx: o,
          ry: o,
          spreadMethod: o,
          stopColor: o,
          stopOpacity: o,
          stroke: o,
          strokeDasharray: o,
          strokeLinecap: o,
          strokeOpacity: o,
          strokeWidth: o,
          textAnchor: o,
          transform: o,
          version: o,
          viewBox: o,
          x1: o,
          x2: o,
          x: o,
          xlinkActuate: o,
          xlinkArcrole: o,
          xlinkHref: o,
          xlinkRole: o,
          xlinkShow: o,
          xlinkTitle: o,
          xlinkType: o,
          xmlBase: o,
          xmlLang: o,
          xmlSpace: o,
          y1: o,
          y2: o,
          y: o,
        },
        DOMAttributeNamespaces: {
          xlinkActuate: i.xlink,
          xlinkArcrole: i.xlink,
          xlinkHref: i.xlink,
          xlinkRole: i.xlink,
          xlinkShow: i.xlink,
          xlinkTitle: i.xlink,
          xlinkType: i.xlink,
          xmlBase: i.xml,
          xmlLang: i.xml,
          xmlSpace: i.xml,
        },
        DOMAttributeNames: {
          clipPath: "clip-path",
          fillOpacity: "fill-opacity",
          fontFamily: "font-family",
          fontSize: "font-size",
          gradientTransform: "gradientTransform",
          gradientUnits: "gradientUnits",
          markerEnd: "marker-end",
          markerMid: "marker-mid",
          markerStart: "marker-start",
          patternContentUnits: "patternContentUnits",
          patternUnits: "patternUnits",
          preserveAspectRatio: "preserveAspectRatio",
          spreadMethod: "spreadMethod",
          stopColor: "stop-color",
          stopOpacity: "stop-opacity",
          strokeDasharray: "stroke-dasharray",
          strokeLinecap: "stroke-linecap",
          strokeOpacity: "stroke-opacity",
          strokeWidth: "stroke-width",
          textAnchor: "text-anchor",
          viewBox: "viewBox",
          xlinkActuate: "xlink:actuate",
          xlinkArcrole: "xlink:arcrole",
          xlinkHref: "xlink:href",
          xlinkRole: "xlink:role",
          xlinkShow: "xlink:show",
          xlinkTitle: "xlink:title",
          xlinkType: "xlink:type",
          xmlBase: "xml:base",
          xmlLang: "xml:lang",
          xmlSpace: "xml:space",
        },
      };
    e.exports = a;
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return Math.floor(100 * e) / 100;
    }
    function o(e, t, n) {
      e[t] = (e[t] || 0) + n;
    }
    var i = n(23),
      a = n(143),
      s = n(28),
      u = n(18),
      l = n(144),
      c = {
        _allMeasurements: [],
        _mountStack: [0],
        _injected: !1,
        start: function () {
          c._injected || u.injection.injectMeasure(c.measure),
            (c._allMeasurements.length = 0),
            (u.enableMeasure = !0);
        },
        stop: function () {
          u.enableMeasure = !1;
        },
        getLastMeasurements: function () {
          return c._allMeasurements;
        },
        printExclusive: function (e) {
          e = e || c._allMeasurements;
          var t = a.getExclusiveSummary(e);
          console.table(
            t.map(function (e) {
              return {
                "Component class name": e.componentName,
                "Total inclusive time (ms)": r(e.inclusive),
                "Exclusive mount time (ms)": r(e.exclusive),
                "Exclusive render time (ms)": r(e.render),
                "Mount time per instance (ms)": r(e.exclusive / e.count),
                "Render time per instance (ms)": r(e.render / e.count),
                Instances: e.count,
              };
            })
          );
        },
        printInclusive: function (e) {
          e = e || c._allMeasurements;
          var t = a.getInclusiveSummary(e);
          console.table(
            t.map(function (e) {
              return {
                "Owner > component": e.componentName,
                "Inclusive time (ms)": r(e.time),
                Instances: e.count,
              };
            })
          ),
            console.log("Total time:", a.getTotalTime(e).toFixed(2) + " ms");
        },
        getMeasurementsSummaryMap: function (e) {
          var t = a.getInclusiveSummary(e, !0);
          return t.map(function (e) {
            return {
              "Owner > component": e.componentName,
              "Wasted time (ms)": e.time,
              Instances: e.count,
            };
          });
        },
        printWasted: function (e) {
          (e = e || c._allMeasurements),
            console.table(c.getMeasurementsSummaryMap(e)),
            console.log("Total time:", a.getTotalTime(e).toFixed(2) + " ms");
        },
        printDOM: function (e) {
          e = e || c._allMeasurements;
          var t = a.getDOMSummary(e);
          console.table(
            t.map(function (e) {
              var t = {};
              return (
                (t[i.ID_ATTRIBUTE_NAME] = e.id),
                (t.type = e.type),
                (t.args = JSON.stringify(e.args)),
                t
              );
            })
          ),
            console.log("Total time:", a.getTotalTime(e).toFixed(2) + " ms");
        },
        _recordWrite: function (e, t, n, r) {
          var o = c._allMeasurements[c._allMeasurements.length - 1].writes;
          (o[e] = o[e] || []), o[e].push({ type: t, time: n, args: r });
        },
        measure: function (e, t, n) {
          return function () {
            for (var r = arguments.length, i = Array(r), a = 0; r > a; a++)
              i[a] = arguments[a];
            var u, p, d;
            if ("_renderNewRootComponent" === t || "flushBatchedUpdates" === t)
              return (
                c._allMeasurements.push({
                  exclusive: {},
                  inclusive: {},
                  render: {},
                  counts: {},
                  writes: {},
                  displayNames: {},
                  totalTime: 0,
                  created: {},
                }),
                (d = l()),
                (p = n.apply(this, i)),
                (c._allMeasurements[c._allMeasurements.length - 1].totalTime =
                  l() - d),
                p
              );
            if (
              "_mountImageIntoNode" === t ||
              "ReactBrowserEventEmitter" === e ||
              "ReactDOMIDOperations" === e ||
              "CSSPropertyOperations" === e ||
              "DOMChildrenOperations" === e ||
              "DOMPropertyOperations" === e
            ) {
              if (
                ((d = l()),
                (p = n.apply(this, i)),
                (u = l() - d),
                "_mountImageIntoNode" === t)
              ) {
                var f = s.getID(i[1]);
                c._recordWrite(f, t, u, i[0]);
              } else if ("dangerouslyProcessChildrenUpdates" === t)
                i[0].forEach(function (e) {
                  var t = {};
                  null !== e.fromIndex && (t.fromIndex = e.fromIndex),
                    null !== e.toIndex && (t.toIndex = e.toIndex),
                    null !== e.textContent && (t.textContent = e.textContent),
                    null !== e.markupIndex && (t.markup = i[1][e.markupIndex]),
                    c._recordWrite(e.parentID, e.type, u, t);
                });
              else {
                var h = i[0];
                "object" == typeof h && (h = s.getID(i[0])),
                  c._recordWrite(h, t, u, Array.prototype.slice.call(i, 1));
              }
              return p;
            }
            if (
              "ReactCompositeComponent" !== e ||
              ("mountComponent" !== t &&
                "updateComponent" !== t &&
                "_renderValidatedComponent" !== t)
            )
              return n.apply(this, i);
            if (this._currentElement.type === s.TopLevelWrapper)
              return n.apply(this, i);
            var m = "mountComponent" === t ? i[0] : this._rootNodeID,
              v = "_renderValidatedComponent" === t,
              g = "mountComponent" === t,
              y = c._mountStack,
              C = c._allMeasurements[c._allMeasurements.length - 1];
            if (
              (v ? o(C.counts, m, 1) : g && ((C.created[m] = !0), y.push(0)),
              (d = l()),
              (p = n.apply(this, i)),
              (u = l() - d),
              v)
            )
              o(C.render, m, u);
            else if (g) {
              var A = y.pop();
              (y[y.length - 1] += u),
                o(C.exclusive, m, u - A),
                o(C.inclusive, m, u);
            } else o(C.inclusive, m, u);
            return (
              (C.displayNames[m] = {
                current: this.getName(),
                owner: this._currentElement._owner
                  ? this._currentElement._owner.getName()
                  : "<root>",
              }),
              p
            );
          };
        },
      };
    e.exports = c;
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      for (var t = 0, n = 0; n < e.length; n++) {
        var r = e[n];
        t += r.totalTime;
      }
      return t;
    }
    function o(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          Object.keys(e.writes).forEach(function (n) {
            e.writes[n].forEach(function (e) {
              t.push({ id: n, type: c[e.type] || e.type, args: e.args });
            });
          });
        }),
        t
      );
    }
    function i(e) {
      for (var t, n = {}, r = 0; r < e.length; r++) {
        var o = e[r],
          i = u({}, o.exclusive, o.inclusive);
        for (var a in i)
          (t = o.displayNames[a].current),
            (n[t] = n[t] || {
              componentName: t,
              inclusive: 0,
              exclusive: 0,
              render: 0,
              count: 0,
            }),
            o.render[a] && (n[t].render += o.render[a]),
            o.exclusive[a] && (n[t].exclusive += o.exclusive[a]),
            o.inclusive[a] && (n[t].inclusive += o.inclusive[a]),
            o.counts[a] && (n[t].count += o.counts[a]);
      }
      var s = [];
      for (t in n) n[t].exclusive >= l && s.push(n[t]);
      return (
        s.sort(function (e, t) {
          return t.exclusive - e.exclusive;
        }),
        s
      );
    }
    function a(e, t) {
      for (var n, r = {}, o = 0; o < e.length; o++) {
        var i,
          a = e[o],
          c = u({}, a.exclusive, a.inclusive);
        t && (i = s(a));
        for (var p in c)
          if (!t || i[p]) {
            var d = a.displayNames[p];
            (n = d.owner + " > " + d.current),
              (r[n] = r[n] || { componentName: n, time: 0, count: 0 }),
              a.inclusive[p] && (r[n].time += a.inclusive[p]),
              a.counts[p] && (r[n].count += a.counts[p]);
          }
      }
      var f = [];
      for (n in r) r[n].time >= l && f.push(r[n]);
      return (
        f.sort(function (e, t) {
          return t.time - e.time;
        }),
        f
      );
    }
    function s(e) {
      var t = {},
        n = Object.keys(e.writes),
        r = u({}, e.exclusive, e.inclusive);
      for (var o in r) {
        for (var i = !1, a = 0; a < n.length; a++)
          if (0 === n[a].indexOf(o)) {
            i = !0;
            break;
          }
        e.created[o] && (i = !0), !i && e.counts[o] > 0 && (t[o] = !0);
      }
      return t;
    }
    var u = n(39),
      l = 1.2,
      c = {
        _mountImageIntoNode: "set innerHTML",
        INSERT_MARKUP: "set innerHTML",
        MOVE_EXISTING: "move",
        REMOVE_NODE: "remove",
        SET_MARKUP: "set innerHTML",
        TEXT_CONTENT: "set textContent",
        setValueForProperty: "update attribute",
        setValueForAttribute: "update attribute",
        deleteValueForProperty: "remove attribute",
        setValueForStyles: "update styles",
        replaceNodeWithMarkup: "replace",
        updateTextContent: "set textContent",
      },
      p = {
        getExclusiveSummary: i,
        getInclusiveSummary: a,
        getDOMSummary: o,
        getTotalTime: r,
      };
    e.exports = p;
  },
  function (e, t, n) {
    "use strict";
    var r,
      o = n(145);
    (r = o.now
      ? function () {
          return o.now();
        }
      : function () {
          return Date.now();
        }),
      (e.exports = r);
  },
  function (e, t, n) {
    "use strict";
    var r,
      o = n(9);
    o.canUseDOM &&
      (r =
        window.performance || window.msPerformance || window.webkitPerformance),
      (e.exports = r || {});
  },
  function (e, t) {
    "use strict";
    e.exports = "0.14.8";
  },
  function (e, t, n) {
    "use strict";
    var r = n(28);
    e.exports = r.renderSubtreeIntoContainer;
  },
  function (e, t, n) {
    "use strict";
    var r = n(71),
      o = n(149),
      i = n(146);
    r.inject();
    var a = {
      renderToString: o.renderToString,
      renderToStaticMarkup: o.renderToStaticMarkup,
      version: i,
    };
    e.exports = a;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        a.isValidElement(e)
          ? void 0
          : "production" !== t.env.NODE_ENV
          ? h(!1, "renderToString(): You must pass a valid ReactElement.")
          : h(!1);
        var n;
        try {
          p.injection.injectBatchingStrategy(l);
          var r = s.createReactRootID();
          return (
            (n = c.getPooled(!1)),
            n.perform(function () {
              var t = f(e, null),
                o = t.mountComponent(r, n, d);
              return u.addChecksumToMarkup(o);
            }, null)
          );
        } finally {
          c.release(n), p.injection.injectBatchingStrategy(i);
        }
      }
      function o(e) {
        a.isValidElement(e)
          ? void 0
          : "production" !== t.env.NODE_ENV
          ? h(!1, "renderToStaticMarkup(): You must pass a valid ReactElement.")
          : h(!1);
        var n;
        try {
          p.injection.injectBatchingStrategy(l);
          var r = s.createReactRootID();
          return (
            (n = c.getPooled(!0)),
            n.perform(function () {
              var t = f(e, null);
              return t.mountComponent(r, n, d);
            }, null)
          );
        } finally {
          c.release(n), p.injection.injectBatchingStrategy(i);
        }
      }
      var i = n(92),
        a = n(42),
        s = n(45),
        u = n(48),
        l = n(150),
        c = n(151),
        p = n(54),
        d = n(58),
        f = n(62),
        h = n(13);
      e.exports = { renderToString: r, renderToStaticMarkup: o };
    }.call(t, n(4)));
  },
  function (e, t) {
    "use strict";
    var n = { isBatchingUpdates: !1, batchedUpdates: function (e) {} };
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      this.reinitializeTransaction(),
        (this.renderToStaticMarkup = e),
        (this.reactMountReady = i.getPooled(null)),
        (this.useCreateElement = !1);
    }
    var o = n(56),
      i = n(55),
      a = n(57),
      s = n(39),
      u = n(15),
      l = {
        initialize: function () {
          this.reactMountReady.reset();
        },
        close: u,
      },
      c = [l],
      p = {
        getTransactionWrappers: function () {
          return c;
        },
        getReactMountReady: function () {
          return this.reactMountReady;
        },
        destructor: function () {
          i.release(this.reactMountReady), (this.reactMountReady = null);
        },
      };
    s(r.prototype, a.Mixin, p), o.addPoolingTo(r), (e.exports = r);
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(110),
        o = n(123),
        i = n(122),
        a = n(153),
        s = n(42),
        u = n(154),
        l = n(107),
        c = n(146),
        p = n(39),
        d = n(156),
        f = s.createElement,
        h = s.createFactory,
        m = s.cloneElement;
      "production" !== t.env.NODE_ENV &&
        ((f = u.createElement), (h = u.createFactory), (m = u.cloneElement));
      var v = {
        Children: {
          map: r.map,
          forEach: r.forEach,
          count: r.count,
          toArray: r.toArray,
          only: d,
        },
        Component: o,
        createElement: f,
        cloneElement: m,
        isValidElement: s.isValidElement,
        PropTypes: l,
        createClass: i.createClass,
        createFactory: h,
        createMixin: function (e) {
          return e;
        },
        DOM: a,
        version: c,
        __spread: p,
      };
      e.exports = v;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        return "production" !== t.env.NODE_ENV
          ? i.createFactory(e)
          : o.createFactory(e);
      }
      var o = n(42),
        i = n(154),
        a = n(155),
        s = a(
          {
            a: "a",
            abbr: "abbr",
            address: "address",
            area: "area",
            article: "article",
            aside: "aside",
            audio: "audio",
            b: "b",
            base: "base",
            bdi: "bdi",
            bdo: "bdo",
            big: "big",
            blockquote: "blockquote",
            body: "body",
            br: "br",
            button: "button",
            canvas: "canvas",
            caption: "caption",
            cite: "cite",
            code: "code",
            col: "col",
            colgroup: "colgroup",
            data: "data",
            datalist: "datalist",
            dd: "dd",
            del: "del",
            details: "details",
            dfn: "dfn",
            dialog: "dialog",
            div: "div",
            dl: "dl",
            dt: "dt",
            em: "em",
            embed: "embed",
            fieldset: "fieldset",
            figcaption: "figcaption",
            figure: "figure",
            footer: "footer",
            form: "form",
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            h5: "h5",
            h6: "h6",
            head: "head",
            header: "header",
            hgroup: "hgroup",
            hr: "hr",
            html: "html",
            i: "i",
            iframe: "iframe",
            img: "img",
            input: "input",
            ins: "ins",
            kbd: "kbd",
            keygen: "keygen",
            label: "label",
            legend: "legend",
            li: "li",
            link: "link",
            main: "main",
            map: "map",
            mark: "mark",
            menu: "menu",
            menuitem: "menuitem",
            meta: "meta",
            meter: "meter",
            nav: "nav",
            noscript: "noscript",
            object: "object",
            ol: "ol",
            optgroup: "optgroup",
            option: "option",
            output: "output",
            p: "p",
            param: "param",
            picture: "picture",
            pre: "pre",
            progress: "progress",
            q: "q",
            rp: "rp",
            rt: "rt",
            ruby: "ruby",
            s: "s",
            samp: "samp",
            script: "script",
            section: "section",
            select: "select",
            small: "small",
            source: "source",
            span: "span",
            strong: "strong",
            style: "style",
            sub: "sub",
            summary: "summary",
            sup: "sup",
            table: "table",
            tbody: "tbody",
            td: "td",
            textarea: "textarea",
            tfoot: "tfoot",
            th: "th",
            thead: "thead",
            time: "time",
            title: "title",
            tr: "tr",
            track: "track",
            u: "u",
            ul: "ul",
            var: "var",
            video: "video",
            wbr: "wbr",
            circle: "circle",
            clipPath: "clipPath",
            defs: "defs",
            ellipse: "ellipse",
            g: "g",
            image: "image",
            line: "line",
            linearGradient: "linearGradient",
            mask: "mask",
            path: "path",
            pattern: "pattern",
            polygon: "polygon",
            polyline: "polyline",
            radialGradient: "radialGradient",
            rect: "rect",
            stop: "stop",
            svg: "svg",
            text: "text",
            tspan: "tspan",
          },
          r
        );
      e.exports = s;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r() {
        if (d.current) {
          var e = d.current.getName();
          if (e) return " Check the render method of `" + e + "`.";
        }
        return "";
      }
      function o(e, n) {
        if (e._store && !e._store.validated && null == e.key) {
          e._store.validated = !0;
          var r = i("uniqueKey", e, n);
          null !== r &&
            ("production" !== t.env.NODE_ENV
              ? v(
                  !1,
                  'Each child in an array or iterator should have a unique "key" prop.%s%s%s',
                  r.parentOrOwner || "",
                  r.childOwner || "",
                  r.url || ""
                )
              : void 0);
        }
      }
      function i(e, t, n) {
        var o = r();
        if (!o) {
          var i = "string" == typeof n ? n : n.displayName || n.name;
          i && (o = " Check the top-level render call using <" + i + ">.");
        }
        var a = g[e] || (g[e] = {});
        if (a[o]) return null;
        a[o] = !0;
        var s = {
          parentOrOwner: o,
          url: " See https://fb.me/react-warning-keys for more information.",
          childOwner: null,
        };
        return (
          t &&
            t._owner &&
            t._owner !== d.current &&
            (s.childOwner =
              " It was passed a child from " + t._owner.getName() + "."),
          s
        );
      }
      function a(e, t) {
        if ("object" == typeof e)
          if (Array.isArray(e))
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              l.isValidElement(r) && o(r, t);
            }
          else if (l.isValidElement(e)) e._store && (e._store.validated = !0);
          else if (e) {
            var i = h(e);
            if (i && i !== e.entries)
              for (var a, s = i.call(e); !(a = s.next()).done; )
                l.isValidElement(a.value) && o(a.value, t);
          }
      }
      function s(e, n, o, i) {
        for (var a in n)
          if (n.hasOwnProperty(a)) {
            var s;
            try {
              "function" != typeof n[a]
                ? "production" !== t.env.NODE_ENV
                  ? m(
                      !1,
                      "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",
                      e || "React class",
                      p[i],
                      a
                    )
                  : m(!1)
                : void 0,
                (s = n[a](o, a, e, i));
            } catch (u) {
              s = u;
            }
            if (
              ("production" !== t.env.NODE_ENV
                ? v(
                    !s || s instanceof Error,
                    "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                    e || "React class",
                    p[i],
                    a,
                    typeof s
                  )
                : void 0,
              s instanceof Error && !(s.message in y))
            ) {
              y[s.message] = !0;
              var l = r();
              "production" !== t.env.NODE_ENV
                ? v(!1, "Failed propType: %s%s", s.message, l)
                : void 0;
            }
          }
      }
      function u(e) {
        var n = e.type;
        if ("function" == typeof n) {
          var r = n.displayName || n.name;
          n.propTypes && s(r, n.propTypes, e.props, c.prop),
            "function" == typeof n.getDefaultProps &&
              ("production" !== t.env.NODE_ENV
                ? v(
                    n.getDefaultProps.isReactClassApproved,
                    "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
                  )
                : void 0);
        }
      }
      var l = n(42),
        c = n(65),
        p = n(66),
        d = n(5),
        f = n(43),
        h = n(108),
        m = n(13),
        v = n(25),
        g = {},
        y = {},
        C = {
          createElement: function (e, n, o) {
            var i = "string" == typeof e || "function" == typeof e;
            "production" !== t.env.NODE_ENV
              ? v(
                  i,
                  "React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components).%s",
                  r()
                )
              : void 0;
            var s = l.createElement.apply(this, arguments);
            if (null == s) return s;
            if (i)
              for (var c = 2; c < arguments.length; c++) a(arguments[c], e);
            return u(s), s;
          },
          createFactory: function (e) {
            var n = C.createElement.bind(null, e);
            return (
              (n.type = e),
              "production" !== t.env.NODE_ENV &&
                f &&
                Object.defineProperty(n, "type", {
                  enumerable: !1,
                  get: function () {
                    return (
                      "production" !== t.env.NODE_ENV
                        ? v(
                            !1,
                            "Factory.type is deprecated. Access the class directly before passing it to createFactory."
                          )
                        : void 0,
                      Object.defineProperty(this, "type", { value: e }),
                      e
                    );
                  },
                }),
              n
            );
          },
          cloneElement: function (e, t, n) {
            for (
              var r = l.cloneElement.apply(this, arguments), o = 2;
              o < arguments.length;
              o++
            )
              a(arguments[o], r.type);
            return u(r), r;
          },
        };
      e.exports = C;
    }.call(t, n(4)));
  },
  function (e, t) {
    "use strict";
    function n(e, t, n) {
      if (!e) return null;
      var o = {};
      for (var i in e) r.call(e, i) && (o[i] = t.call(n, e[i], i, e));
      return o;
    }
    var r = Object.prototype.hasOwnProperty;
    e.exports = n;
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        return (
          o.isValidElement(e)
            ? void 0
            : "production" !== t.env.NODE_ENV
            ? i(
                !1,
                "onlyChild must be passed a children with exactly one child."
              )
            : i(!1),
          e
        );
      }
      var o = n(42),
        i = n(13);
      e.exports = r;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e, n, r, a, s) {
        var u = !1;
        if ("production" !== t.env.NODE_ENV) {
          var l = function () {
            return (
              "production" !== t.env.NODE_ENV
                ? i(
                    u,
                    "React.%s is deprecated. Please use %s.%s from require('%s') instead.",
                    e,
                    n,
                    e,
                    r
                  )
                : void 0,
              (u = !0),
              s.apply(a, arguments)
            );
          };
          return o(l, s);
        }
        return s;
      }
      var o = n(39),
        i = n(25);
      e.exports = r;
    }.call(t, n(4)));
  },
  function (e, t, n) {
    "use strict";
    e.exports = n(3);
  },
  function (e, t, n) {
    function r() {
      (this.protocol = null),
        (this.slashes = null),
        (this.auth = null),
        (this.host = null),
        (this.port = null),
        (this.hostname = null),
        (this.hash = null),
        (this.search = null),
        (this.query = null),
        (this.pathname = null),
        (this.path = null),
        (this.href = null);
    }
    function o(e, t, n) {
      if (e && l(e) && e instanceof r) return e;
      var o = new r();
      return o.parse(e, t, n), o;
    }
    function i(e) {
      return (
        u(e) && (e = o(e)),
        e instanceof r ? e.format() : r.prototype.format.call(e)
      );
    }
    function a(e, t) {
      return o(e, !1, !0).resolve(t);
    }
    function s(e, t) {
      return e ? o(e, !1, !0).resolveObject(t) : t;
    }
    function u(e) {
      return "string" == typeof e;
    }
    function l(e) {
      return "object" == typeof e && null !== e;
    }
    function c(e) {
      return null === e;
    }
    function p(e) {
      return null == e;
    }
    var d = n(160);
    (t.parse = o),
      (t.resolve = a),
      (t.resolveObject = s),
      (t.format = i),
      (t.Url = r);
    var f = /^([a-z0-9.+-]+:)/i,
      h = /:[0-9]*$/,
      m = ["<", ">", '"', "`", " ", "\r", "\n", "	"],
      v = ["{", "}", "|", "\\", "^", "`"].concat(m),
      g = ["'"].concat(v),
      y = ["%", "/", "?", ";", "#"].concat(g),
      C = ["/", "?", "#"],
      A = 255,
      D = /^[a-z0-9A-Z_-]{0,63}$/,
      b = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
      E = { javascript: !0, "javascript:": !0 },
      w = { javascript: !0, "javascript:": !0 },
      x = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0,
      },
      N = n(162);
    (r.prototype.parse = function (e, t, n) {
      if (!u(e))
        throw new TypeError(
          "Parameter 'url' must be a string, not " + typeof e
        );
      var r = e;
      r = r.trim();
      var o = f.exec(r);
      if (o) {
        o = o[0];
        var i = o.toLowerCase();
        (this.protocol = i), (r = r.substr(o.length));
      }
      if (n || o || r.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var a = "//" === r.substr(0, 2);
        !a || (o && w[o]) || ((r = r.substr(2)), (this.slashes = !0));
      }
      if (!w[o] && (a || (o && !x[o]))) {
        for (var s = -1, l = 0; l < C.length; l++) {
          var c = r.indexOf(C[l]);
          -1 !== c && (-1 === s || s > c) && (s = c);
        }
        var p, h;
        (h = -1 === s ? r.lastIndexOf("@") : r.lastIndexOf("@", s)),
          -1 !== h &&
            ((p = r.slice(0, h)),
            (r = r.slice(h + 1)),
            (this.auth = decodeURIComponent(p))),
          (s = -1);
        for (var l = 0; l < y.length; l++) {
          var c = r.indexOf(y[l]);
          -1 !== c && (-1 === s || s > c) && (s = c);
        }
        -1 === s && (s = r.length),
          (this.host = r.slice(0, s)),
          (r = r.slice(s)),
          this.parseHost(),
          (this.hostname = this.hostname || "");
        var m =
          "[" === this.hostname[0] &&
          "]" === this.hostname[this.hostname.length - 1];
        if (!m)
          for (
            var v = this.hostname.split(/\./), l = 0, k = v.length;
            k > l;
            l++
          ) {
            var S = v[l];
            if (S && !S.match(D)) {
              for (var B = "", _ = 0, M = S.length; M > _; _++)
                B += S.charCodeAt(_) > 127 ? "x" : S[_];
              if (!B.match(D)) {
                var O = v.slice(0, l),
                  F = v.slice(l + 1),
                  T = S.match(b);
                T && (O.push(T[1]), F.unshift(T[2])),
                  F.length && (r = "/" + F.join(".") + r),
                  (this.hostname = O.join("."));
                break;
              }
            }
          }
        if (
          (this.hostname.length > A
            ? (this.hostname = "")
            : (this.hostname = this.hostname.toLowerCase()),
          !m)
        ) {
          for (
            var I = this.hostname.split("."), P = [], l = 0;
            l < I.length;
            ++l
          ) {
            var L = I[l];
            P.push(L.match(/[^A-Za-z0-9_-]/) ? "xn--" + d.encode(L) : L);
          }
          this.hostname = P.join(".");
        }
        var R = this.port ? ":" + this.port : "",
          V = this.hostname || "";
        (this.host = V + R),
          (this.href += this.host),
          m &&
            ((this.hostname = this.hostname.substr(
              1,
              this.hostname.length - 2
            )),
            "/" !== r[0] && (r = "/" + r));
      }
      if (!E[i])
        for (var l = 0, k = g.length; k > l; l++) {
          var U = g[l],
            W = encodeURIComponent(U);
          W === U && (W = escape(U)), (r = r.split(U).join(W));
        }
      var j = r.indexOf("#");
      -1 !== j && ((this.hash = r.substr(j)), (r = r.slice(0, j)));
      var H = r.indexOf("?");
      if (
        (-1 !== H
          ? ((this.search = r.substr(H)),
            (this.query = r.substr(H + 1)),
            t && (this.query = N.parse(this.query)),
            (r = r.slice(0, H)))
          : t && ((this.search = ""), (this.query = {})),
        r && (this.pathname = r),
        x[i] && this.hostname && !this.pathname && (this.pathname = "/"),
        this.pathname || this.search)
      ) {
        var R = this.pathname || "",
          L = this.search || "";
        this.path = R + L;
      }
      return (this.href = this.format()), this;
    }),
      (r.prototype.format = function () {
        var e = this.auth || "";
        e &&
          ((e = encodeURIComponent(e)),
          (e = e.replace(/%3A/i, ":")),
          (e += "@"));
        var t = this.protocol || "",
          n = this.pathname || "",
          r = this.hash || "",
          o = !1,
          i = "";
        this.host
          ? (o = e + this.host)
          : this.hostname &&
            ((o =
              e +
              (-1 === this.hostname.indexOf(":")
                ? this.hostname
                : "[" + this.hostname + "]")),
            this.port && (o += ":" + this.port)),
          this.query &&
            l(this.query) &&
            Object.keys(this.query).length &&
            (i = N.stringify(this.query));
        var a = this.search || (i && "?" + i) || "";
        return (
          t && ":" !== t.substr(-1) && (t += ":"),
          this.slashes || ((!t || x[t]) && o !== !1)
            ? ((o = "//" + (o || "")),
              n && "/" !== n.charAt(0) && (n = "/" + n))
            : o || (o = ""),
          r && "#" !== r.charAt(0) && (r = "#" + r),
          a && "?" !== a.charAt(0) && (a = "?" + a),
          (n = n.replace(/[?#]/g, function (e) {
            return encodeURIComponent(e);
          })),
          (a = a.replace("#", "%23")),
          t + o + n + a + r
        );
      }),
      (r.prototype.resolve = function (e) {
        return this.resolveObject(o(e, !1, !0)).format();
      }),
      (r.prototype.resolveObject = function (e) {
        if (u(e)) {
          var t = new r();
          t.parse(e, !1, !0), (e = t);
        }
        var n = new r();
        if (
          (Object.keys(this).forEach(function (e) {
            n[e] = this[e];
          }, this),
          (n.hash = e.hash),
          "" === e.href)
        )
          return (n.href = n.format()), n;
        if (e.slashes && !e.protocol)
          return (
            Object.keys(e).forEach(function (t) {
              "protocol" !== t && (n[t] = e[t]);
            }),
            x[n.protocol] &&
              n.hostname &&
              !n.pathname &&
              (n.path = n.pathname = "/"),
            (n.href = n.format()),
            n
          );
        if (e.protocol && e.protocol !== n.protocol) {
          if (!x[e.protocol])
            return (
              Object.keys(e).forEach(function (t) {
                n[t] = e[t];
              }),
              (n.href = n.format()),
              n
            );
          if (((n.protocol = e.protocol), e.host || w[e.protocol]))
            n.pathname = e.pathname;
          else {
            for (
              var o = (e.pathname || "").split("/");
              o.length && !(e.host = o.shift());

            );
            e.host || (e.host = ""),
              e.hostname || (e.hostname = ""),
              "" !== o[0] && o.unshift(""),
              o.length < 2 && o.unshift(""),
              (n.pathname = o.join("/"));
          }
          if (
            ((n.search = e.search),
            (n.query = e.query),
            (n.host = e.host || ""),
            (n.auth = e.auth),
            (n.hostname = e.hostname || e.host),
            (n.port = e.port),
            n.pathname || n.search)
          ) {
            var i = n.pathname || "",
              a = n.search || "";
            n.path = i + a;
          }
          return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
        }
        var s = n.pathname && "/" === n.pathname.charAt(0),
          l = e.host || (e.pathname && "/" === e.pathname.charAt(0)),
          d = l || s || (n.host && e.pathname),
          f = d,
          h = (n.pathname && n.pathname.split("/")) || [],
          o = (e.pathname && e.pathname.split("/")) || [],
          m = n.protocol && !x[n.protocol];
        if (
          (m &&
            ((n.hostname = ""),
            (n.port = null),
            n.host && ("" === h[0] ? (h[0] = n.host) : h.unshift(n.host)),
            (n.host = ""),
            e.protocol &&
              ((e.hostname = null),
              (e.port = null),
              e.host && ("" === o[0] ? (o[0] = e.host) : o.unshift(e.host)),
              (e.host = null)),
            (d = d && ("" === o[0] || "" === h[0]))),
          l)
        )
          (n.host = e.host || "" === e.host ? e.host : n.host),
            (n.hostname =
              e.hostname || "" === e.hostname ? e.hostname : n.hostname),
            (n.search = e.search),
            (n.query = e.query),
            (h = o);
        else if (o.length)
          h || (h = []),
            h.pop(),
            (h = h.concat(o)),
            (n.search = e.search),
            (n.query = e.query);
        else if (!p(e.search)) {
          if (m) {
            n.hostname = n.host = h.shift();
            var v = n.host && n.host.indexOf("@") > 0 ? n.host.split("@") : !1;
            v && ((n.auth = v.shift()), (n.host = n.hostname = v.shift()));
          }
          return (
            (n.search = e.search),
            (n.query = e.query),
            (c(n.pathname) && c(n.search)) ||
              (n.path =
                (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
            (n.href = n.format()),
            n
          );
        }
        if (!h.length)
          return (
            (n.pathname = null),
            n.search ? (n.path = "/" + n.search) : (n.path = null),
            (n.href = n.format()),
            n
          );
        for (
          var g = h.slice(-1)[0],
            y = ((n.host || e.host) && ("." === g || ".." === g)) || "" === g,
            C = 0,
            A = h.length;
          A >= 0;
          A--
        )
          (g = h[A]),
            "." == g
              ? h.splice(A, 1)
              : ".." === g
              ? (h.splice(A, 1), C++)
              : C && (h.splice(A, 1), C--);
        if (!d && !f) for (; C--; C) h.unshift("..");
        !d || "" === h[0] || (h[0] && "/" === h[0].charAt(0)) || h.unshift(""),
          y && "/" !== h.join("/").substr(-1) && h.push("");
        var D = "" === h[0] || (h[0] && "/" === h[0].charAt(0));
        if (m) {
          n.hostname = n.host = D ? "" : h.length ? h.shift() : "";
          var v = n.host && n.host.indexOf("@") > 0 ? n.host.split("@") : !1;
          v && ((n.auth = v.shift()), (n.host = n.hostname = v.shift()));
        }
        return (
          (d = d || (n.host && h.length)),
          d && !D && h.unshift(""),
          h.length
            ? (n.pathname = h.join("/"))
            : ((n.pathname = null), (n.path = null)),
          (c(n.pathname) && c(n.search)) ||
            (n.path =
              (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
          (n.auth = e.auth || n.auth),
          (n.slashes = n.slashes || e.slashes),
          (n.href = n.format()),
          n
        );
      }),
      (r.prototype.parseHost = function () {
        var e = this.host,
          t = h.exec(e);
        t &&
          ((t = t[0]),
          ":" !== t && (this.port = t.substr(1)),
          (e = e.substr(0, e.length - t.length))),
          e && (this.hostname = e);
      });
  },
  function (e, t, n) {
    var r;
    (function (e, o) {
      !(function (i) {
        function a(e) {
          throw RangeError(O[e]);
        }
        function s(e, t) {
          for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
          return r;
        }
        function u(e, t) {
          var n = e.split("@"),
            r = "";
          n.length > 1 && ((r = n[0] + "@"), (e = n[1])),
            (e = e.replace(M, "."));
          var o = e.split("."),
            i = s(o, t).join(".");
          return r + i;
        }
        function l(e) {
          for (var t, n, r = [], o = 0, i = e.length; i > o; )
            (t = e.charCodeAt(o++)),
              t >= 55296 && 56319 >= t && i > o
                ? ((n = e.charCodeAt(o++)),
                  56320 == (64512 & n)
                    ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
                    : (r.push(t), o--))
                : r.push(t);
          return r;
        }
        function c(e) {
          return s(e, function (e) {
            var t = "";
            return (
              e > 65535 &&
                ((e -= 65536),
                (t += I(((e >>> 10) & 1023) | 55296)),
                (e = 56320 | (1023 & e))),
              (t += I(e))
            );
          }).join("");
        }
        function p(e) {
          return 10 > e - 48
            ? e - 22
            : 26 > e - 65
            ? e - 65
            : 26 > e - 97
            ? e - 97
            : D;
        }
        function d(e, t) {
          return e + 22 + 75 * (26 > e) - ((0 != t) << 5);
        }
        function f(e, t, n) {
          var r = 0;
          for (
            e = n ? T(e / x) : e >> 1, e += T(e / t);
            e > (F * E) >> 1;
            r += D
          )
            e = T(e / F);
          return T(r + ((F + 1) * e) / (e + w));
        }
        function h(e) {
          var t,
            n,
            r,
            o,
            i,
            s,
            u,
            l,
            d,
            h,
            m = [],
            v = e.length,
            g = 0,
            y = k,
            C = N;
          for (n = e.lastIndexOf(S), 0 > n && (n = 0), r = 0; n > r; ++r)
            e.charCodeAt(r) >= 128 && a("not-basic"), m.push(e.charCodeAt(r));
          for (o = n > 0 ? n + 1 : 0; v > o; ) {
            for (
              i = g, s = 1, u = D;
              o >= v && a("invalid-input"),
                (l = p(e.charCodeAt(o++))),
                (l >= D || l > T((A - g) / s)) && a("overflow"),
                (g += l * s),
                (d = C >= u ? b : u >= C + E ? E : u - C),
                !(d > l);
              u += D
            )
              (h = D - d), s > T(A / h) && a("overflow"), (s *= h);
            (t = m.length + 1),
              (C = f(g - i, t, 0 == i)),
              T(g / t) > A - y && a("overflow"),
              (y += T(g / t)),
              (g %= t),
              m.splice(g++, 0, y);
          }
          return c(m);
        }
        function m(e) {
          var t,
            n,
            r,
            o,
            i,
            s,
            u,
            c,
            p,
            h,
            m,
            v,
            g,
            y,
            C,
            w = [];
          for (e = l(e), v = e.length, t = k, n = 0, i = N, s = 0; v > s; ++s)
            (m = e[s]), 128 > m && w.push(I(m));
          for (r = o = w.length, o && w.push(S); v > r; ) {
            for (u = A, s = 0; v > s; ++s)
              (m = e[s]), m >= t && u > m && (u = m);
            for (
              g = r + 1,
                u - t > T((A - n) / g) && a("overflow"),
                n += (u - t) * g,
                t = u,
                s = 0;
              v > s;
              ++s
            )
              if (((m = e[s]), t > m && ++n > A && a("overflow"), m == t)) {
                for (
                  c = n, p = D;
                  (h = i >= p ? b : p >= i + E ? E : p - i), !(h > c);
                  p += D
                )
                  (C = c - h),
                    (y = D - h),
                    w.push(I(d(h + (C % y), 0))),
                    (c = T(C / y));
                w.push(I(d(c, 0))), (i = f(n, g, r == o)), (n = 0), ++r;
              }
            ++n, ++t;
          }
          return w.join("");
        }
        function v(e) {
          return u(e, function (e) {
            return B.test(e) ? h(e.slice(4).toLowerCase()) : e;
          });
        }
        function g(e) {
          return u(e, function (e) {
            return _.test(e) ? "xn--" + m(e) : e;
          });
        }
        var y =
          ("object" == typeof t && t && !t.nodeType && t,
          "object" == typeof e && e && !e.nodeType && e,
          "object" == typeof o && o);
        (y.global !== y && y.window !== y && y.self !== y) || (i = y);
        var C,
          A = 2147483647,
          D = 36,
          b = 1,
          E = 26,
          w = 38,
          x = 700,
          N = 72,
          k = 128,
          S = "-",
          B = /^xn--/,
          _ = /[^\x20-\x7E]/,
          M = /[\x2E\u3002\uFF0E\uFF61]/g,
          O = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input",
          },
          F = D - b,
          T = Math.floor,
          I = String.fromCharCode;
        (C = {
          version: "1.3.2",
          ucs2: { decode: l, encode: c },
          decode: h,
          encode: m,
          toASCII: g,
          toUnicode: v,
        }),
          (r = function () {
            return C;
          }.call(t, n, t, e)),
          !(void 0 !== r && (e.exports = r));
      })(this);
    }.call(
      t,
      n(161)(e),
      (function () {
        return this;
      })()
    ));
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          (e.children = []),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    (t.decode = t.parse = n(163)), (t.encode = t.stringify = n(164));
  },
  function (e, t) {
    "use strict";
    function n(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    e.exports = function (e, t, r, o) {
      (t = t || "&"), (r = r || "=");
      var i = {};
      if ("string" != typeof e || 0 === e.length) return i;
      var a = /\+/g;
      e = e.split(t);
      var s = 1e3;
      o && "number" == typeof o.maxKeys && (s = o.maxKeys);
      var u = e.length;
      s > 0 && u > s && (u = s);
      for (var l = 0; u > l; ++l) {
        var c,
          p,
          d,
          f,
          h = e[l].replace(a, "%20"),
          m = h.indexOf(r);
        m >= 0
          ? ((c = h.substr(0, m)), (p = h.substr(m + 1)))
          : ((c = h), (p = "")),
          (d = decodeURIComponent(c)),
          (f = decodeURIComponent(p)),
          n(i, d)
            ? Array.isArray(i[d])
              ? i[d].push(f)
              : (i[d] = [i[d], f])
            : (i[d] = f);
      }
      return i;
    };
  },
  function (e, t) {
    "use strict";
    var n = function (e) {
      switch (typeof e) {
        case "string":
          return e;
        case "boolean":
          return e ? "true" : "false";
        case "number":
          return isFinite(e) ? e : "";
        default:
          return "";
      }
    };
    e.exports = function (e, t, r, o) {
      return (
        (t = t || "&"),
        (r = r || "="),
        null === e && (e = void 0),
        "object" == typeof e
          ? Object.keys(e)
              .map(function (o) {
                var i = encodeURIComponent(n(o)) + r;
                return Array.isArray(e[o])
                  ? e[o]
                      .map(function (e) {
                        return i + encodeURIComponent(n(e));
                      })
                      .join(t)
                  : i + encodeURIComponent(n(e[o]));
              })
              .join(t)
          : o
          ? encodeURIComponent(n(o)) + r + encodeURIComponent(n(e))
          : ""
      );
    };
  },
  function (e, t) {
    "use strict";
    (t.P5_VERSION = "1.0.0"), (t.PREVIEW_WIDTH = 150), (t.HEIGHT = 300);
  },
  function (e, t) {
    "use strict";
    var n = (function () {
      function e(e) {
        this.id = e;
      }
      return (
        (e.prototype.save = function (e) {
          try {
            window.sessionStorage[this.id] = e;
          } catch (t) {
            console.log("Autosave for " + this.id + " failed", t);
          }
        }),
        (e.prototype.restore = function () {
          return window.sessionStorage[this.id];
        }),
        e
      );
    })();
    t.SessionStorageAutosaver = n;
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__extends) ||
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      o = n(1),
      i = n(168),
      a = n(172),
      s = n(173),
      u = n(176),
      l = function (e) {
        return o.createElement(
          "div",
          { className: "error-message" },
          o.createElement(
            "span",
            { className: "error-message-line" },
            "Line ",
            e.line,
            ":"
          ),
          " " + e.message
        );
      },
      c = (function (e) {
        function t(t) {
          var n = this;
          e.call(this, t),
            (this.handleEditorChange = function (e, t, r) {
              n.setState({ editorContent: e, canUndo: t, canRedo: r }),
                n.props.autosaver.save(e);
            }),
            (this.handlePreviewError = function (e, t) {
              n.setState({ lastError: { message: e, line: t } });
            }),
            (this.handleRevertClick = function () {
              n.setState({
                isPlaying: !1,
                editorContent: n.props.initialContent,
              });
            }),
            (this.handlePlayClick = function () {
              n.setState(function (e, t) {
                return {
                  isPlaying: !0,
                  previewContent: e.editorContent,
                  startPlayTimestamp: Date.now(),
                  lastError: null,
                };
              });
            }),
            (this.handleStopClick = function () {
              n.setState({ isPlaying: !1 });
            }),
            (this.handleUndoClick = function () {
              n.refs.editor.undo();
            }),
            (this.handleRedoClick = function () {
              n.refs.editor.redo();
            }),
            (this.state = {
              canUndo: !1,
              canRedo: !1,
              previewContent: this.props.initialContent,
              editorContent: this.props.initialContent,
            });
        }
        return (
          r(t, e),
          (t.prototype.componentDidMount = function () {
            var e = this.props.autosaver && this.props.autosaver.restore();
            e && e !== this.state.editorContent
              ? this.setState({ editorContent: e })
              : this.props.autoplay && this.handlePlayClick();
          }),
          (t.prototype.render = function () {
            var e = null,
              t = this.state.editorContent !== this.props.initialContent;
            return (
              this.state.lastError &&
                this.state.editorContent === this.state.previewContent &&
                (e = this.state.lastError.line),
              o.createElement(
                "div",
                { className: "app" },
                o.createElement(a["default"], {
                  onPlayClick: this.handlePlayClick,
                  onStopClick: this.state.isPlaying && this.handleStopClick,
                  onUndoClick: this.state.canUndo && this.handleUndoClick,
                  onRedoClick: this.state.canRedo && this.handleRedoClick,
                  onRevertClick: t && this.handleRevertClick,
                }),
                o.createElement(
                  "div",
                  { className: "panes" },
                  o.createElement(s["default"], {
                    ref: "editor",
                    content: this.state.editorContent,
                    errorLine: e,
                    onChange: this.handleEditorChange,
                  }),
                  o.createElement(
                    "div",
                    { className: "preview-holder-wrapper" },
                    this.state.isPlaying
                      ? o.createElement(u["default"], {
                          content: this.state.previewContent,
                          baseSketchURL: this.props.baseSketchURL,
                          p5version: this.props.p5version,
                          width: this.props.previewWidth,
                          timestamp: this.state.startPlayTimestamp,
                          onError: this.handlePreviewError,
                        })
                      : null
                  )
                ),
                o.createElement(
                  "div",
                  { className: "status-bar" },
                  this.state.lastError
                    ? o.createElement(l, o.__spread({}, this.state.lastError))
                    : null
                )
              )
            );
          }),
          t
        );
      })(i["default"]);
    Object.defineProperty(t, "__esModule", { value: !0 }), (t["default"] = c);
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__extends) ||
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      o = n(1),
      i = n(169),
      a = (function (e) {
        function t() {
          e.apply(this, arguments);
        }
        return (
          r(t, e),
          (t.prototype.shouldComponentUpdate = function () {
            return i.shouldComponentUpdate.apply(this, arguments);
          }),
          t
        );
      })(o.Component);
    Object.defineProperty(t, "__esModule", { value: !0 }), (t["default"] = a);
  },
  function (e, t, n) {
    e.exports = n(170);
  },
  function (e, t, n) {
    "use strict";
    var r = n(171),
      o = {
        shouldComponentUpdate: function (e, t) {
          return r(this, e, t);
        },
      };
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      return !o(e.props, t) || !o(e.state, n);
    }
    var o = n(117);
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__extends) ||
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      o = n(1),
      i = n(168),
      a = function () {
        return o.createElement(
          "svg",
          {
            className: "open-iconic media-play",
            width: "8",
            height: "8",
            viewBox: "0 0 8 8",
          },
          o.createElement("path", {
            d: "M0 0v6l6-3-6-3z",
            transform: "translate(1 1)",
          })
        );
      },
      s = function () {
        return o.createElement(
          "svg",
          {
            className: "open-iconic media-stop",
            width: "8",
            height: "8",
            viewBox: "0 0 8 8",
          },
          o.createElement("path", {
            d: "M0 0v6h6v-6h-6z",
            transform: "translate(1 1)",
          })
        );
      },
      u = function () {
        return o.createElement(
          "svg",
          {
            className: "open-iconic action-undo",
            width: "8",
            height: "8",
            viewBox: "0 0 8 8",
          },
          o.createElement("path", {
            d: "M4.5 0c-1.93 0-3.5 1.57-3.5 3.5v.5h-1l2 2 2-2h-1v-.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0-1.93-1.57-3.5-3.5-3.5z",
            transform: "translate(0 1)",
          })
        );
      },
      l = function () {
        return o.createElement(
          "svg",
          {
            className: "open-iconic action-redo",
            width: "8",
            height: "8",
            viewBox: "0 0 8 8",
          },
          o.createElement("path", {
            d: "M3.5 0c-1.93 0-3.5 1.57-3.5 3.5 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v.5h-1l2 2 2-2h-1v-.5c0-1.93-1.57-3.5-3.5-3.5z",
            transform: "translate(0 1)",
          })
        );
      },
      c = (function (e) {
        function t() {
          e.apply(this, arguments);
        }
        return (
          r(t, e),
          (t.prototype.render = function () {
            return o.createElement(
              "div",
              { className: "toolbar" },
              o.createElement(
                "a",
                {
                  className: "p5-logo",
                  href: "http://p5js.org/",
                  target: "_blank",
                },
                o.createElement("img", {
                  src: "/public/images/light_logo.png",
                  alt: "p5js.org",
                })
              ),
              o.createElement(
                "button",
                { onClick: this.props.onPlayClick },
                o.createElement(a, null),
                "Play"
              ),
              this.props.onStopClick
                ? o.createElement(
                    "button",
                    { onClick: this.props.onStopClick },
                    o.createElement(s, null),
                    "Stop"
                  )
                : null,
              this.props.onUndoClick
                ? o.createElement(
                    "button",
                    { onClick: this.props.onUndoClick },
                    o.createElement(u, null),
                    "Undo"
                  )
                : null,
              this.props.onRedoClick
                ? o.createElement(
                    "button",
                    { onClick: this.props.onRedoClick },
                    o.createElement(l, null),
                    "Redo"
                  )
                : null,
              this.props.onRevertClick
                ? o.createElement(
                    "button",
                    { onClick: this.props.onRevertClick },
                    "Revert"
                  )
                : null
            );
          }),
          t
        );
      })(i["default"]);
    Object.defineProperty(t, "__esModule", { value: !0 }), (t["default"] = c);
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__extends) ||
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      o = n(1),
      i = n(174);
    n(175);
    var a = n(168),
      s = 100,
      u = (function (e) {
        function t() {
          var t = this;
          e.apply(this, arguments),
            (this.resizeEditor = function () {
              var e = t._cm.getWrapperElement(),
                n = e.style.display;
              e.style.display = "none";
              var r = t.refs.container.getBoundingClientRect().height;
              (e.style.display = n), t._cm.setSize(null, r);
            });
        }
        return (
          r(t, e),
          (t.prototype.componentDidUpdate = function (e) {
            this.props.content !== e.content &&
              this.props.content !== this._cm.getValue() &&
              this._cm.setValue(this.props.content),
              this.props.errorLine !== e.errorLine &&
                (this._errorLineHandle &&
                  (this._cm.removeLineClass(
                    this._errorLineHandle,
                    "background",
                    "error-line"
                  ),
                  (this._errorLineHandle = null)),
                this.props.errorLine &&
                  (this._errorLineHandle = this._cm.addLineClass(
                    this.props.errorLine - 1,
                    "background",
                    "error-line"
                  )));
          }),
          (t.prototype.componentDidMount = function () {
            var e = this;
            (this._cm = i(this.refs.container, {
              theme: "p5-widget",
              value: this.props.content,
              lineNumbers: !0,
              mode: "javascript",
            })),
              this._cm.on("change", function () {
                if (e.props.onChange) {
                  var t = e._cm.getDoc().historySize();
                  e.props.onChange(e._cm.getValue(), t.undo > 0, t.redo > 0);
                }
              }),
              this.resizeEditor(),
              (this._resizeTimeout = setTimeout(this.resizeEditor, s)),
              window.addEventListener("resize", this.resizeEditor, !1);
          }),
          (t.prototype.componentWillUnmount = function () {
            (this._cm = null),
              clearTimeout(this._resizeTimeout),
              window.removeEventListener("resize", this.resizeEditor, !1);
          }),
          (t.prototype.undo = function () {
            this._cm.getDoc().undo();
          }),
          (t.prototype.redo = function () {
            this._cm.getDoc().redo();
          }),
          (t.prototype.render = function () {
            return o.createElement("div", {
              ref: "container",
              className: "editor-holder",
            });
          }),
          t
        );
      })(a["default"]);
    Object.defineProperty(t, "__esModule", { value: !0 }), (t["default"] = u);
  },
  function (e, t, n) {
    !(function (t) {
      e.exports = t();
    })(function () {
      "use strict";
      function e(n, r) {
        if (!(this instanceof e)) return new e(n, r);
        (this.options = r = r ? Ro(r) : {}), Ro(Ji, r, !1), f(r);
        var o = r.value;
        "string" == typeof o && (o = new Ea(o, r.mode, null, r.lineSeparator)),
          (this.doc = o);
        var i = new e.inputStyles[r.inputStyle](this),
          a = (this.display = new t(n, o, i));
        (a.wrapper.CodeMirror = this),
          l(this),
          s(this),
          r.lineWrapping &&
            (this.display.wrapper.className += " CodeMirror-wrap"),
          r.autofocus && !Bi && a.input.focus(),
          g(this),
          (this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            delayingBlurEvent: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: !1,
            cutIncoming: !1,
            selectingText: !1,
            draggingText: !1,
            highlight: new Mo(),
            keySeq: null,
            specialChars: null,
          });
        var u = this;
        Ci &&
          11 > Ai &&
          setTimeout(function () {
            u.display.input.reset(!0);
          }, 20),
          jt(this),
          $o(),
          At(this),
          (this.curOp.forceUpdate = !0),
          $r(this, o),
          (r.autofocus && !Bi) || u.hasFocus()
            ? setTimeout(Vo(gn, this), 20)
            : yn(this);
        for (var c in ea) ea.hasOwnProperty(c) && ea[c](this, r[c], ta);
        b(this), r.finishInit && r.finishInit(this);
        for (var p = 0; p < ia.length; ++p) ia[p](this);
        bt(this),
          Di &&
            r.lineWrapping &&
            "optimizelegibility" == getComputedStyle(a.lineDiv).textRendering &&
            (a.lineDiv.style.textRendering = "auto");
      }
      function t(e, t, n) {
        var r = this;
        (this.input = n),
          (r.scrollbarFiller = Ho("div", null, "CodeMirror-scrollbar-filler")),
          r.scrollbarFiller.setAttribute("cm-not-content", "true"),
          (r.gutterFiller = Ho("div", null, "CodeMirror-gutter-filler")),
          r.gutterFiller.setAttribute("cm-not-content", "true"),
          (r.lineDiv = Ho("div", null, "CodeMirror-code")),
          (r.selectionDiv = Ho(
            "div",
            null,
            null,
            "position: relative; z-index: 1"
          )),
          (r.cursorDiv = Ho("div", null, "CodeMirror-cursors")),
          (r.measure = Ho("div", null, "CodeMirror-measure")),
          (r.lineMeasure = Ho("div", null, "CodeMirror-measure")),
          (r.lineSpace = Ho(
            "div",
            [r.measure, r.lineMeasure, r.selectionDiv, r.cursorDiv, r.lineDiv],
            null,
            "position: relative; outline: none"
          )),
          (r.mover = Ho(
            "div",
            [Ho("div", [r.lineSpace], "CodeMirror-lines")],
            null,
            "position: relative"
          )),
          (r.sizer = Ho("div", [r.mover], "CodeMirror-sizer")),
          (r.sizerWidth = null),
          (r.heightForcer = Ho(
            "div",
            null,
            null,
            "position: absolute; height: " + Ta + "px; width: 1px;"
          )),
          (r.gutters = Ho("div", null, "CodeMirror-gutters")),
          (r.lineGutter = null),
          (r.scroller = Ho(
            "div",
            [r.sizer, r.heightForcer, r.gutters],
            "CodeMirror-scroll"
          )),
          r.scroller.setAttribute("tabIndex", "-1"),
          (r.wrapper = Ho(
            "div",
            [r.scrollbarFiller, r.gutterFiller, r.scroller],
            "CodeMirror"
          )),
          Ci &&
            8 > Ai &&
            ((r.gutters.style.zIndex = -1),
            (r.scroller.style.paddingRight = 0)),
          Di || (vi && Bi) || (r.scroller.draggable = !0),
          e && (e.appendChild ? e.appendChild(r.wrapper) : e(r.wrapper)),
          (r.viewFrom = r.viewTo = t.first),
          (r.reportedViewFrom = r.reportedViewTo = t.first),
          (r.view = []),
          (r.renderedView = null),
          (r.externalMeasured = null),
          (r.viewOffset = 0),
          (r.lastWrapHeight = r.lastWrapWidth = 0),
          (r.updateLineNumbers = null),
          (r.nativeBarWidth = r.barHeight = r.barWidth = 0),
          (r.scrollbarsClipped = !1),
          (r.lineNumWidth = r.lineNumInnerWidth = r.lineNumChars = null),
          (r.alignWidgets = !1),
          (r.cachedCharWidth = r.cachedTextHeight = r.cachedPaddingH = null),
          (r.maxLine = null),
          (r.maxLineLength = 0),
          (r.maxLineChanged = !1),
          (r.wheelDX = r.wheelDY = r.wheelStartX = r.wheelStartY = null),
          (r.shift = !1),
          (r.selForContextMenu = null),
          (r.activeTouch = null),
          n.init(r);
      }
      function n(t) {
        (t.doc.mode = e.getMode(t.options, t.doc.modeOption)), r(t);
      }
      function r(e) {
        e.doc.iter(function (e) {
          e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
        }),
          (e.doc.frontier = e.doc.first),
          Ve(e, 100),
          e.state.modeGen++,
          e.curOp && It(e);
      }
      function o(e) {
        e.options.lineWrapping
          ? (Qa(e.display.wrapper, "CodeMirror-wrap"),
            (e.display.sizer.style.minWidth = ""),
            (e.display.sizerWidth = null))
          : ($a(e.display.wrapper, "CodeMirror-wrap"), d(e)),
          a(e),
          It(e),
          st(e),
          setTimeout(function () {
            y(e);
          }, 100);
      }
      function i(e) {
        var t = yt(e.display),
          n = e.options.lineWrapping,
          r =
            n &&
            Math.max(5, e.display.scroller.clientWidth / Ct(e.display) - 3);
        return function (o) {
          if (br(e.doc, o)) return 0;
          var i = 0;
          if (o.widgets)
            for (var a = 0; a < o.widgets.length; a++)
              o.widgets[a].height && (i += o.widgets[a].height);
          return n ? i + (Math.ceil(o.text.length / r) || 1) * t : i + t;
        };
      }
      function a(e) {
        var t = e.doc,
          n = i(e);
        t.iter(function (e) {
          var t = n(e);
          t != e.height && eo(e, t);
        });
      }
      function s(e) {
        (e.display.wrapper.className =
          e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
          e.options.theme.replace(/(^|\s)\s*/g, " cm-s-")),
          st(e);
      }
      function u(e) {
        l(e),
          It(e),
          setTimeout(function () {
            D(e);
          }, 20);
      }
      function l(e) {
        var t = e.display.gutters,
          n = e.options.gutters;
        zo(t);
        for (var r = 0; r < n.length; ++r) {
          var o = n[r],
            i = t.appendChild(Ho("div", null, "CodeMirror-gutter " + o));
          "CodeMirror-linenumbers" == o &&
            ((e.display.lineGutter = i),
            (i.style.width = (e.display.lineNumWidth || 1) + "px"));
        }
        (t.style.display = r ? "" : "none"), c(e);
      }
      function c(e) {
        var t = e.display.gutters.offsetWidth;
        e.display.sizer.style.marginLeft = t + "px";
      }
      function p(e) {
        if (0 == e.height) return 0;
        for (var t, n = e.text.length, r = e; (t = mr(r)); ) {
          var o = t.find(0, !0);
          (r = o.from.line), (n += o.from.ch - o.to.ch);
        }
        for (r = e; (t = vr(r)); ) {
          var o = t.find(0, !0);
          (n -= r.text.length - o.from.ch),
            (r = o.to.line),
            (n += r.text.length - o.to.ch);
        }
        return n;
      }
      function d(e) {
        var t = e.display,
          n = e.doc;
        (t.maxLine = Qr(n, n.first)),
          (t.maxLineLength = p(t.maxLine)),
          (t.maxLineChanged = !0),
          n.iter(function (e) {
            var n = p(e);
            n > t.maxLineLength && ((t.maxLineLength = n), (t.maxLine = e));
          });
      }
      function f(e) {
        var t = To(e.gutters, "CodeMirror-linenumbers");
        -1 == t && e.lineNumbers
          ? (e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]))
          : t > -1 &&
            !e.lineNumbers &&
            ((e.gutters = e.gutters.slice(0)), e.gutters.splice(t, 1));
      }
      function h(e) {
        var t = e.display,
          n = t.gutters.offsetWidth,
          r = Math.round(e.doc.height + ze(e.display));
        return {
          clientHeight: t.scroller.clientHeight,
          viewHeight: t.wrapper.clientHeight,
          scrollWidth: t.scroller.scrollWidth,
          clientWidth: t.scroller.clientWidth,
          viewWidth: t.wrapper.clientWidth,
          barLeft: e.options.fixedGutter ? n : 0,
          docHeight: r,
          scrollHeight: r + Ye(e) + t.barHeight,
          nativeBarWidth: t.nativeBarWidth,
          gutterWidth: n,
        };
      }
      function m(e, t, n) {
        this.cm = n;
        var r = (this.vert = Ho(
            "div",
            [Ho("div", null, null, "min-width: 1px")],
            "CodeMirror-vscrollbar"
          )),
          o = (this.horiz = Ho(
            "div",
            [Ho("div", null, null, "height: 100%; min-height: 1px")],
            "CodeMirror-hscrollbar"
          ));
        e(r),
          e(o),
          Ba(r, "scroll", function () {
            r.clientHeight && t(r.scrollTop, "vertical");
          }),
          Ba(o, "scroll", function () {
            o.clientWidth && t(o.scrollLeft, "horizontal");
          }),
          (this.checkedZeroWidth = !1),
          Ci &&
            8 > Ai &&
            (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
      }
      function v() {}
      function g(t) {
        t.display.scrollbars &&
          (t.display.scrollbars.clear(),
          t.display.scrollbars.addClass &&
            $a(t.display.wrapper, t.display.scrollbars.addClass)),
          (t.display.scrollbars = new e.scrollbarModel[
            t.options.scrollbarStyle
          ](
            function (e) {
              t.display.wrapper.insertBefore(e, t.display.scrollbarFiller),
                Ba(e, "mousedown", function () {
                  t.state.focused &&
                    setTimeout(function () {
                      t.display.input.focus();
                    }, 0);
                }),
                e.setAttribute("cm-not-content", "true");
            },
            function (e, n) {
              "horizontal" == n ? on(t, e) : rn(t, e);
            },
            t
          )),
          t.display.scrollbars.addClass &&
            Qa(t.display.wrapper, t.display.scrollbars.addClass);
      }
      function y(e, t) {
        t || (t = h(e));
        var n = e.display.barWidth,
          r = e.display.barHeight;
        C(e, t);
        for (
          var o = 0;
          (4 > o && n != e.display.barWidth) || r != e.display.barHeight;
          o++
        )
          n != e.display.barWidth && e.options.lineWrapping && M(e),
            C(e, h(e)),
            (n = e.display.barWidth),
            (r = e.display.barHeight);
      }
      function C(e, t) {
        var n = e.display,
          r = n.scrollbars.update(t);
        (n.sizer.style.paddingRight = (n.barWidth = r.right) + "px"),
          (n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px"),
          (n.heightForcer.style.borderBottom =
            r.bottom + "px solid transparent"),
          r.right && r.bottom
            ? ((n.scrollbarFiller.style.display = "block"),
              (n.scrollbarFiller.style.height = r.bottom + "px"),
              (n.scrollbarFiller.style.width = r.right + "px"))
            : (n.scrollbarFiller.style.display = ""),
          r.bottom &&
          e.options.coverGutterNextToScrollbar &&
          e.options.fixedGutter
            ? ((n.gutterFiller.style.display = "block"),
              (n.gutterFiller.style.height = r.bottom + "px"),
              (n.gutterFiller.style.width = t.gutterWidth + "px"))
            : (n.gutterFiller.style.display = "");
      }
      function A(e, t, n) {
        var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
        r = Math.floor(r - He(e));
        var o = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
          i = no(t, r),
          a = no(t, o);
        if (n && n.ensure) {
          var s = n.ensure.from.line,
            u = n.ensure.to.line;
          i > s
            ? ((i = s), (a = no(t, ro(Qr(t, s)) + e.wrapper.clientHeight)))
            : Math.min(u, t.lastLine()) >= a &&
              ((i = no(t, ro(Qr(t, u)) - e.wrapper.clientHeight)), (a = u));
        }
        return { from: i, to: Math.max(a, i + 1) };
      }
      function D(e) {
        var t = e.display,
          n = t.view;
        if (t.alignWidgets || (t.gutters.firstChild && e.options.fixedGutter)) {
          for (
            var r = w(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
              o = t.gutters.offsetWidth,
              i = r + "px",
              a = 0;
            a < n.length;
            a++
          )
            if (!n[a].hidden) {
              e.options.fixedGutter &&
                n[a].gutter &&
                (n[a].gutter.style.left = i);
              var s = n[a].alignable;
              if (s) for (var u = 0; u < s.length; u++) s[u].style.left = i;
            }
          e.options.fixedGutter && (t.gutters.style.left = r + o + "px");
        }
      }
      function b(e) {
        if (!e.options.lineNumbers) return !1;
        var t = e.doc,
          n = E(e.options, t.first + t.size - 1),
          r = e.display;
        if (n.length != r.lineNumChars) {
          var o = r.measure.appendChild(
              Ho(
                "div",
                [Ho("div", n)],
                "CodeMirror-linenumber CodeMirror-gutter-elt"
              )
            ),
            i = o.firstChild.offsetWidth,
            a = o.offsetWidth - i;
          return (
            (r.lineGutter.style.width = ""),
            (r.lineNumInnerWidth =
              Math.max(i, r.lineGutter.offsetWidth - a) + 1),
            (r.lineNumWidth = r.lineNumInnerWidth + a),
            (r.lineNumChars = r.lineNumInnerWidth ? n.length : -1),
            (r.lineGutter.style.width = r.lineNumWidth + "px"),
            c(e),
            !0
          );
        }
        return !1;
      }
      function E(e, t) {
        return String(e.lineNumberFormatter(t + e.firstLineNumber));
      }
      function w(e) {
        return (
          e.scroller.getBoundingClientRect().left -
          e.sizer.getBoundingClientRect().left
        );
      }
      function x(e, t, n) {
        var r = e.display;
        (this.viewport = t),
          (this.visible = A(r, e.doc, t)),
          (this.editorIsHidden = !r.wrapper.offsetWidth),
          (this.wrapperHeight = r.wrapper.clientHeight),
          (this.wrapperWidth = r.wrapper.clientWidth),
          (this.oldDisplayWidth = Ke(e)),
          (this.force = n),
          (this.dims = F(e)),
          (this.events = []);
      }
      function N(e) {
        var t = e.display;
        !t.scrollbarsClipped &&
          t.scroller.offsetWidth &&
          ((t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth),
          (t.heightForcer.style.height = Ye(e) + "px"),
          (t.sizer.style.marginBottom = -t.nativeBarWidth + "px"),
          (t.sizer.style.borderRightWidth = Ye(e) + "px"),
          (t.scrollbarsClipped = !0));
      }
      function k(e, t) {
        var n = e.display,
          r = e.doc;
        if (t.editorIsHidden) return Lt(e), !1;
        if (
          !t.force &&
          t.visible.from >= n.viewFrom &&
          t.visible.to <= n.viewTo &&
          (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) &&
          n.renderedView == n.view &&
          0 == Wt(e)
        )
          return !1;
        b(e) && (Lt(e), (t.dims = F(e)));
        var o = r.first + r.size,
          i = Math.max(t.visible.from - e.options.viewportMargin, r.first),
          a = Math.min(o, t.visible.to + e.options.viewportMargin);
        n.viewFrom < i &&
          i - n.viewFrom < 20 &&
          (i = Math.max(r.first, n.viewFrom)),
          n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(o, n.viewTo)),
          Pi && ((i = Ar(e.doc, i)), (a = Dr(e.doc, a)));
        var s =
          i != n.viewFrom ||
          a != n.viewTo ||
          n.lastWrapHeight != t.wrapperHeight ||
          n.lastWrapWidth != t.wrapperWidth;
        Ut(e, i, a),
          (n.viewOffset = ro(Qr(e.doc, n.viewFrom))),
          (e.display.mover.style.top = n.viewOffset + "px");
        var u = Wt(e);
        if (
          !s &&
          0 == u &&
          !t.force &&
          n.renderedView == n.view &&
          (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)
        )
          return !1;
        var l = Yo();
        return (
          u > 4 && (n.lineDiv.style.display = "none"),
          T(e, n.updateLineNumbers, t.dims),
          u > 4 && (n.lineDiv.style.display = ""),
          (n.renderedView = n.view),
          l && Yo() != l && l.offsetHeight && l.focus(),
          zo(n.cursorDiv),
          zo(n.selectionDiv),
          (n.gutters.style.height = n.sizer.style.minHeight = 0),
          s &&
            ((n.lastWrapHeight = t.wrapperHeight),
            (n.lastWrapWidth = t.wrapperWidth),
            Ve(e, 400)),
          (n.updateLineNumbers = null),
          !0
        );
      }
      function S(e, t) {
        for (
          var n = t.viewport, r = !0;
          ((r && e.options.lineWrapping && t.oldDisplayWidth != Ke(e)) ||
            (n &&
              null != n.top &&
              (n = {
                top: Math.min(e.doc.height + ze(e.display) - Ge(e), n.top),
              }),
            (t.visible = A(e.display, e.doc, n)),
            !(
              t.visible.from >= e.display.viewFrom &&
              t.visible.to <= e.display.viewTo
            ))) &&
          k(e, t);
          r = !1
        ) {
          M(e);
          var o = h(e);
          Te(e), y(e, o), _(e, o);
        }
        t.signal(e, "update", e),
          (e.display.viewFrom == e.display.reportedViewFrom &&
            e.display.viewTo == e.display.reportedViewTo) ||
            (t.signal(
              e,
              "viewportChange",
              e,
              e.display.viewFrom,
              e.display.viewTo
            ),
            (e.display.reportedViewFrom = e.display.viewFrom),
            (e.display.reportedViewTo = e.display.viewTo));
      }
      function B(e, t) {
        var n = new x(e, t);
        if (k(e, n)) {
          M(e), S(e, n);
          var r = h(e);
          Te(e), y(e, r), _(e, r), n.finish();
        }
      }
      function _(e, t) {
        (e.display.sizer.style.minHeight = t.docHeight + "px"),
          (e.display.heightForcer.style.top = t.docHeight + "px"),
          (e.display.gutters.style.height =
            t.docHeight + e.display.barHeight + Ye(e) + "px");
      }
      function M(e) {
        for (
          var t = e.display, n = t.lineDiv.offsetTop, r = 0;
          r < t.view.length;
          r++
        ) {
          var o,
            i = t.view[r];
          if (!i.hidden) {
            if (Ci && 8 > Ai) {
              var a = i.node.offsetTop + i.node.offsetHeight;
              (o = a - n), (n = a);
            } else {
              var s = i.node.getBoundingClientRect();
              o = s.bottom - s.top;
            }
            var u = i.line.height - o;
            if (
              (2 > o && (o = yt(t)),
              (u > 0.001 || -0.001 > u) && (eo(i.line, o), O(i.line), i.rest))
            )
              for (var l = 0; l < i.rest.length; l++) O(i.rest[l]);
          }
        }
      }
      function O(e) {
        if (e.widgets)
          for (var t = 0; t < e.widgets.length; ++t)
            e.widgets[t].height = e.widgets[t].node.parentNode.offsetHeight;
      }
      function F(e) {
        for (
          var t = e.display,
            n = {},
            r = {},
            o = t.gutters.clientLeft,
            i = t.gutters.firstChild,
            a = 0;
          i;
          i = i.nextSibling, ++a
        )
          (n[e.options.gutters[a]] = i.offsetLeft + i.clientLeft + o),
            (r[e.options.gutters[a]] = i.clientWidth);
        return {
          fixedPos: w(t),
          gutterTotalWidth: t.gutters.offsetWidth,
          gutterLeft: n,
          gutterWidth: r,
          wrapperWidth: t.wrapper.clientWidth,
        };
      }
      function T(e, t, n) {
        function r(t) {
          var n = t.nextSibling;
          return (
            Di && _i && e.display.currentWheelTarget == t
              ? (t.style.display = "none")
              : t.parentNode.removeChild(t),
            n
          );
        }
        for (
          var o = e.display,
            i = e.options.lineNumbers,
            a = o.lineDiv,
            s = a.firstChild,
            u = o.view,
            l = o.viewFrom,
            c = 0;
          c < u.length;
          c++
        ) {
          var p = u[c];
          if (p.hidden);
          else if (p.node && p.node.parentNode == a) {
            for (; s != p.node; ) s = r(s);
            var d = i && null != t && l >= t && p.lineNumber;
            p.changes &&
              (To(p.changes, "gutter") > -1 && (d = !1), I(e, p, l, n)),
              d &&
                (zo(p.lineNumber),
                p.lineNumber.appendChild(
                  document.createTextNode(E(e.options, l))
                )),
              (s = p.node.nextSibling);
          } else {
            var f = H(e, p, l, n);
            a.insertBefore(f, s);
          }
          l += p.size;
        }
        for (; s; ) s = r(s);
      }
      function I(e, t, n, r) {
        for (var o = 0; o < t.changes.length; o++) {
          var i = t.changes[o];
          "text" == i
            ? V(e, t)
            : "gutter" == i
            ? W(e, t, n, r)
            : "class" == i
            ? U(t)
            : "widget" == i && j(e, t, r);
        }
        t.changes = null;
      }
      function P(e) {
        return (
          e.node == e.text &&
            ((e.node = Ho("div", null, null, "position: relative")),
            e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
            e.node.appendChild(e.text),
            Ci && 8 > Ai && (e.node.style.zIndex = 2)),
          e.node
        );
      }
      function L(e) {
        var t = e.bgClass
          ? e.bgClass + " " + (e.line.bgClass || "")
          : e.line.bgClass;
        if ((t && (t += " CodeMirror-linebackground"), e.background))
          t
            ? (e.background.className = t)
            : (e.background.parentNode.removeChild(e.background),
              (e.background = null));
        else if (t) {
          var n = P(e);
          e.background = n.insertBefore(Ho("div", null, t), n.firstChild);
        }
      }
      function R(e, t) {
        var n = e.display.externalMeasured;
        return n && n.line == t.line
          ? ((e.display.externalMeasured = null),
            (t.measure = n.measure),
            n.built)
          : Rr(e, t);
      }
      function V(e, t) {
        var n = t.text.className,
          r = R(e, t);
        t.text == t.node && (t.node = r.pre),
          t.text.parentNode.replaceChild(r.pre, t.text),
          (t.text = r.pre),
          r.bgClass != t.bgClass || r.textClass != t.textClass
            ? ((t.bgClass = r.bgClass), (t.textClass = r.textClass), U(t))
            : n && (t.text.className = n);
      }
      function U(e) {
        L(e),
          e.line.wrapClass
            ? (P(e).className = e.line.wrapClass)
            : e.node != e.text && (e.node.className = "");
        var t = e.textClass
          ? e.textClass + " " + (e.line.textClass || "")
          : e.line.textClass;
        e.text.className = t || "";
      }
      function W(e, t, n, r) {
        if (
          (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
          t.gutterBackground &&
            (t.node.removeChild(t.gutterBackground),
            (t.gutterBackground = null)),
          t.line.gutterClass)
        ) {
          var o = P(t);
          (t.gutterBackground = Ho(
            "div",
            null,
            "CodeMirror-gutter-background " + t.line.gutterClass,
            "left: " +
              (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
              "px; width: " +
              r.gutterTotalWidth +
              "px"
          )),
            o.insertBefore(t.gutterBackground, t.text);
        }
        var i = t.line.gutterMarkers;
        if (e.options.lineNumbers || i) {
          var o = P(t),
            a = (t.gutter = Ho(
              "div",
              null,
              "CodeMirror-gutter-wrapper",
              "left: " +
                (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
                "px"
            ));
          if (
            (e.display.input.setUneditable(a),
            o.insertBefore(a, t.text),
            t.line.gutterClass && (a.className += " " + t.line.gutterClass),
            !e.options.lineNumbers ||
              (i && i["CodeMirror-linenumbers"]) ||
              (t.lineNumber = a.appendChild(
                Ho(
                  "div",
                  E(e.options, n),
                  "CodeMirror-linenumber CodeMirror-gutter-elt",
                  "left: " +
                    r.gutterLeft["CodeMirror-linenumbers"] +
                    "px; width: " +
                    e.display.lineNumInnerWidth +
                    "px"
                )
              )),
            i)
          )
            for (var s = 0; s < e.options.gutters.length; ++s) {
              var u = e.options.gutters[s],
                l = i.hasOwnProperty(u) && i[u];
              l &&
                a.appendChild(
                  Ho(
                    "div",
                    [l],
                    "CodeMirror-gutter-elt",
                    "left: " +
                      r.gutterLeft[u] +
                      "px; width: " +
                      r.gutterWidth[u] +
                      "px"
                  )
                );
            }
        }
      }
      function j(e, t, n) {
        t.alignable && (t.alignable = null);
        for (var r, o = t.node.firstChild; o; o = r) {
          var r = o.nextSibling;
          "CodeMirror-linewidget" == o.className && t.node.removeChild(o);
        }
        z(e, t, n);
      }
      function H(e, t, n, r) {
        var o = R(e, t);
        return (
          (t.text = t.node = o.pre),
          o.bgClass && (t.bgClass = o.bgClass),
          o.textClass && (t.textClass = o.textClass),
          U(t),
          W(e, t, n, r),
          z(e, t, r),
          t.node
        );
      }
      function z(e, t, n) {
        if ((q(e, t.line, t, n, !0), t.rest))
          for (var r = 0; r < t.rest.length; r++) q(e, t.rest[r], t, n, !1);
      }
      function q(e, t, n, r, o) {
        if (t.widgets)
          for (var i = P(n), a = 0, s = t.widgets; a < s.length; ++a) {
            var u = s[a],
              l = Ho("div", [u.node], "CodeMirror-linewidget");
            u.handleMouseEvents || l.setAttribute("cm-ignore-events", "true"),
              Y(u, l, n, r),
              e.display.input.setUneditable(l),
              o && u.above
                ? i.insertBefore(l, n.gutter || n.text)
                : i.appendChild(l),
              xo(u, "redraw");
          }
      }
      function Y(e, t, n, r) {
        if (e.noHScroll) {
          (n.alignable || (n.alignable = [])).push(t);
          var o = r.wrapperWidth;
          (t.style.left = r.fixedPos + "px"),
            e.coverGutter ||
              ((o -= r.gutterTotalWidth),
              (t.style.paddingLeft = r.gutterTotalWidth + "px")),
            (t.style.width = o + "px");
        }
        e.coverGutter &&
          ((t.style.zIndex = 5),
          (t.style.position = "relative"),
          e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"));
      }
      function K(e) {
        return Li(e.line, e.ch);
      }
      function G(e, t) {
        return Ri(e, t) < 0 ? t : e;
      }
      function X(e, t) {
        return Ri(e, t) < 0 ? e : t;
      }
      function $(e) {
        e.state.focused || (e.display.input.focus(), gn(e));
      }
      function Q(e, t, n, r, o) {
        var i = e.doc;
        (e.display.shift = !1), r || (r = i.sel);
        var a = e.state.pasteIncoming || "paste" == o,
          s = i.splitLines(t),
          u = null;
        if (a && r.ranges.length > 1)
          if (Vi && Vi.join("\n") == t) {
            if (r.ranges.length % Vi.length == 0) {
              u = [];
              for (var l = 0; l < Vi.length; l++) u.push(i.splitLines(Vi[l]));
            }
          } else
            s.length == r.ranges.length &&
              (u = Io(s, function (e) {
                return [e];
              }));
        for (var l = r.ranges.length - 1; l >= 0; l--) {
          var c = r.ranges[l],
            p = c.from(),
            d = c.to();
          c.empty() &&
            (n && n > 0
              ? (p = Li(p.line, p.ch - n))
              : e.state.overwrite &&
                !a &&
                (d = Li(
                  d.line,
                  Math.min(Qr(i, d.line).text.length, d.ch + Fo(s).length)
                )));
          var f = e.curOp.updateInput,
            h = {
              from: p,
              to: d,
              text: u ? u[l % u.length] : s,
              origin:
                o || (a ? "paste" : e.state.cutIncoming ? "cut" : "+input"),
            };
          Nn(e.doc, h), xo(e, "inputRead", e, h);
        }
        t && !a && J(e, t),
          Rn(e),
          (e.curOp.updateInput = f),
          (e.curOp.typing = !0),
          (e.state.pasteIncoming = e.state.cutIncoming = !1);
      }
      function Z(e, t) {
        var n = e.clipboardData && e.clipboardData.getData("text/plain");
        return n
          ? (e.preventDefault(),
            t.isReadOnly() ||
              t.options.disableInput ||
              Bt(t, function () {
                Q(t, n, 0, null, "paste");
              }),
            !0)
          : void 0;
      }
      function J(e, t) {
        if (e.options.electricChars && e.options.smartIndent)
          for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
            var o = n.ranges[r];
            if (
              !(
                o.head.ch > 100 ||
                (r && n.ranges[r - 1].head.line == o.head.line)
              )
            ) {
              var i = e.getModeAt(o.head),
                a = !1;
              if (i.electricChars) {
                for (var s = 0; s < i.electricChars.length; s++)
                  if (t.indexOf(i.electricChars.charAt(s)) > -1) {
                    a = Un(e, o.head.line, "smart");
                    break;
                  }
              } else
                i.electricInput &&
                  i.electricInput.test(
                    Qr(e.doc, o.head.line).text.slice(0, o.head.ch)
                  ) &&
                  (a = Un(e, o.head.line, "smart"));
              a && xo(e, "electricInput", e, o.head.line);
            }
          }
      }
      function ee(e) {
        for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
          var o = e.doc.sel.ranges[r].head.line,
            i = { anchor: Li(o, 0), head: Li(o + 1, 0) };
          n.push(i), t.push(e.getRange(i.anchor, i.head));
        }
        return { text: t, ranges: n };
      }
      function te(e) {
        e.setAttribute("autocorrect", "off"),
          e.setAttribute("autocapitalize", "off"),
          e.setAttribute("spellcheck", "false");
      }
      function ne(e) {
        (this.cm = e),
          (this.prevInput = ""),
          (this.pollingFast = !1),
          (this.polling = new Mo()),
          (this.inaccurateSelection = !1),
          (this.hasSelection = !1),
          (this.composing = null);
      }
      function re() {
        var e = Ho(
            "textarea",
            null,
            null,
            "position: absolute; padding: 0; width: 1px; height: 1em; outline: none"
          ),
          t = Ho(
            "div",
            [e],
            null,
            "overflow: hidden; position: relative; width: 3px; height: 0px;"
          );
        return (
          Di ? (e.style.width = "1000px") : e.setAttribute("wrap", "off"),
          Si && (e.style.border = "1px solid black"),
          te(e),
          t
        );
      }
      function oe(e) {
        (this.cm = e),
          (this.lastAnchorNode =
            this.lastAnchorOffset =
            this.lastFocusNode =
            this.lastFocusOffset =
              null),
          (this.polling = new Mo()),
          (this.gracePeriod = !1);
      }
      function ie(e, t) {
        var n = Je(e, t.line);
        if (!n || n.hidden) return null;
        var r = Qr(e.doc, t.line),
          o = $e(n, r, t.line),
          i = oo(r),
          a = "left";
        if (i) {
          var s = ci(i, t.ch);
          a = s % 2 ? "right" : "left";
        }
        var u = nt(o.map, t.ch, a);
        return (u.offset = "right" == u.collapse ? u.end : u.start), u;
      }
      function ae(e, t) {
        return t && (e.bad = !0), e;
      }
      function se(e, t, n) {
        var r;
        if (t == e.display.lineDiv) {
          if (((r = e.display.lineDiv.childNodes[n]), !r))
            return ae(e.clipPos(Li(e.display.viewTo - 1)), !0);
          (t = null), (n = 0);
        } else
          for (r = t; ; r = r.parentNode) {
            if (!r || r == e.display.lineDiv) return null;
            if (r.parentNode && r.parentNode == e.display.lineDiv) break;
          }
        for (var o = 0; o < e.display.view.length; o++) {
          var i = e.display.view[o];
          if (i.node == r) return ue(i, t, n);
        }
      }
      function ue(e, t, n) {
        function r(t, n, r) {
          for (var o = -1; o < (c ? c.length : 0); o++)
            for (var i = 0 > o ? l.map : c[o], a = 0; a < i.length; a += 3) {
              var s = i[a + 2];
              if (s == t || s == n) {
                var u = to(0 > o ? e.line : e.rest[o]),
                  p = i[a] + r;
                return (0 > r || s != t) && (p = i[a + (r ? 1 : 0)]), Li(u, p);
              }
            }
        }
        var o = e.text.firstChild,
          i = !1;
        if (!t || !Ka(o, t)) return ae(Li(to(e.line), 0), !0);
        if (t == o && ((i = !0), (t = o.childNodes[n]), (n = 0), !t)) {
          var a = e.rest ? Fo(e.rest) : e.line;
          return ae(Li(to(a), a.text.length), i);
        }
        var s = 3 == t.nodeType ? t : null,
          u = t;
        for (
          s ||
          1 != t.childNodes.length ||
          3 != t.firstChild.nodeType ||
          ((s = t.firstChild), n && (n = s.nodeValue.length));
          u.parentNode != o;

        )
          u = u.parentNode;
        var l = e.measure,
          c = l.maps,
          p = r(s, u, n);
        if (p) return ae(p, i);
        for (
          var d = u.nextSibling, f = s ? s.nodeValue.length - n : 0;
          d;
          d = d.nextSibling
        ) {
          if ((p = r(d, d.firstChild, 0))) return ae(Li(p.line, p.ch - f), i);
          f += d.textContent.length;
        }
        for (var h = u.previousSibling, f = n; h; h = h.previousSibling) {
          if ((p = r(h, h.firstChild, -1))) return ae(Li(p.line, p.ch + f), i);
          f += d.textContent.length;
        }
      }
      function le(e, t, n, r, o) {
        function i(e) {
          return function (t) {
            return t.id == e;
          };
        }
        function a(t) {
          if (1 == t.nodeType) {
            var n = t.getAttribute("cm-text");
            if (null != n)
              return (
                "" == n && (n = t.textContent.replace(/\u200b/g, "")),
                void (s += n)
              );
            var c,
              p = t.getAttribute("cm-marker");
            if (p) {
              var d = e.findMarks(Li(r, 0), Li(o + 1, 0), i(+p));
              return void (
                d.length &&
                (c = d[0].find()) &&
                (s += Zr(e.doc, c.from, c.to).join(l))
              );
            }
            if ("false" == t.getAttribute("contenteditable")) return;
            for (var f = 0; f < t.childNodes.length; f++) a(t.childNodes[f]);
            /^(pre|div|p)$/i.test(t.nodeName) && (u = !0);
          } else if (3 == t.nodeType) {
            var h = t.nodeValue;
            if (!h) return;
            u && ((s += l), (u = !1)), (s += h);
          }
        }
        for (var s = "", u = !1, l = e.doc.lineSeparator(); a(t), t != n; )
          t = t.nextSibling;
        return s;
      }
      function ce(e, t) {
        (this.ranges = e), (this.primIndex = t);
      }
      function pe(e, t) {
        (this.anchor = e), (this.head = t);
      }
      function de(e, t) {
        var n = e[t];
        e.sort(function (e, t) {
          return Ri(e.from(), t.from());
        }),
          (t = To(e, n));
        for (var r = 1; r < e.length; r++) {
          var o = e[r],
            i = e[r - 1];
          if (Ri(i.to(), o.from()) >= 0) {
            var a = X(i.from(), o.from()),
              s = G(i.to(), o.to()),
              u = i.empty() ? o.from() == o.head : i.from() == i.head;
            t >= r && --t, e.splice(--r, 2, new pe(u ? s : a, u ? a : s));
          }
        }
        return new ce(e, t);
      }
      function fe(e, t) {
        return new ce([new pe(e, t || e)], 0);
      }
      function he(e, t) {
        return Math.max(e.first, Math.min(t, e.first + e.size - 1));
      }
      function me(e, t) {
        if (t.line < e.first) return Li(e.first, 0);
        var n = e.first + e.size - 1;
        return t.line > n
          ? Li(n, Qr(e, n).text.length)
          : ve(t, Qr(e, t.line).text.length);
      }
      function ve(e, t) {
        var n = e.ch;
        return null == n || n > t ? Li(e.line, t) : 0 > n ? Li(e.line, 0) : e;
      }
      function ge(e, t) {
        return t >= e.first && t < e.first + e.size;
      }
      function ye(e, t) {
        for (var n = [], r = 0; r < t.length; r++) n[r] = me(e, t[r]);
        return n;
      }
      function Ce(e, t, n, r) {
        if ((e.cm && e.cm.display.shift) || e.extend) {
          var o = t.anchor;
          if (r) {
            var i = Ri(n, o) < 0;
            i != Ri(r, o) < 0
              ? ((o = n), (n = r))
              : i != Ri(n, r) < 0 && (n = r);
          }
          return new pe(o, n);
        }
        return new pe(r || n, n);
      }
      function Ae(e, t, n, r) {
        Ne(e, new ce([Ce(e, e.sel.primary(), t, n)], 0), r);
      }
      function De(e, t, n) {
        for (var r = [], o = 0; o < e.sel.ranges.length; o++)
          r[o] = Ce(e, e.sel.ranges[o], t[o], null);
        var i = de(r, e.sel.primIndex);
        Ne(e, i, n);
      }
      function be(e, t, n, r) {
        var o = e.sel.ranges.slice(0);
        (o[t] = n), Ne(e, de(o, e.sel.primIndex), r);
      }
      function Ee(e, t, n, r) {
        Ne(e, fe(t, n), r);
      }
      function we(e, t, n) {
        var r = {
          ranges: t.ranges,
          update: function (t) {
            this.ranges = [];
            for (var n = 0; n < t.length; n++)
              this.ranges[n] = new pe(me(e, t[n].anchor), me(e, t[n].head));
          },
          origin: n && n.origin,
        };
        return (
          Oa(e, "beforeSelectionChange", e, r),
          e.cm && Oa(e.cm, "beforeSelectionChange", e.cm, r),
          r.ranges != t.ranges ? de(r.ranges, r.ranges.length - 1) : t
        );
      }
      function xe(e, t, n) {
        var r = e.history.done,
          o = Fo(r);
        o && o.ranges ? ((r[r.length - 1] = t), ke(e, t, n)) : Ne(e, t, n);
      }
      function Ne(e, t, n) {
        ke(e, t, n), po(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
      }
      function ke(e, t, n) {
        (Bo(e, "beforeSelectionChange") ||
          (e.cm && Bo(e.cm, "beforeSelectionChange"))) &&
          (t = we(e, t, n));
        var r =
          (n && n.bias) ||
          (Ri(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
        Se(e, _e(e, t, r, !0)), (n && n.scroll === !1) || !e.cm || Rn(e.cm);
      }
      function Se(e, t) {
        t.equals(e.sel) ||
          ((e.sel = t),
          e.cm &&
            ((e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0),
            So(e.cm)),
          xo(e, "cursorActivity", e));
      }
      function Be(e) {
        Se(e, _e(e, e.sel, null, !1), Pa);
      }
      function _e(e, t, n, r) {
        for (var o, i = 0; i < t.ranges.length; i++) {
          var a = t.ranges[i],
            s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[i],
            u = Oe(e, a.anchor, s && s.anchor, n, r),
            l = Oe(e, a.head, s && s.head, n, r);
          (o || u != a.anchor || l != a.head) &&
            (o || (o = t.ranges.slice(0, i)), (o[i] = new pe(u, l)));
        }
        return o ? de(o, t.primIndex) : t;
      }
      function Me(e, t, n, r, o) {
        var i = Qr(e, t.line);
        if (i.markedSpans)
          for (var a = 0; a < i.markedSpans.length; ++a) {
            var s = i.markedSpans[a],
              u = s.marker;
            if (
              (null == s.from ||
                (u.inclusiveLeft ? s.from <= t.ch : s.from < t.ch)) &&
              (null == s.to || (u.inclusiveRight ? s.to >= t.ch : s.to > t.ch))
            ) {
              if (o && (Oa(u, "beforeCursorEnter"), u.explicitlyCleared)) {
                if (i.markedSpans) {
                  --a;
                  continue;
                }
                break;
              }
              if (!u.atomic) continue;
              if (n) {
                var l,
                  c = u.find(0 > r ? 1 : -1);
                if (
                  ((0 > r ? u.inclusiveRight : u.inclusiveLeft) &&
                    (c = Fe(e, c, -r, c && c.line == t.line ? i : null)),
                  c &&
                    c.line == t.line &&
                    (l = Ri(c, n)) &&
                    (0 > r ? 0 > l : l > 0))
                )
                  return Me(e, c, t, r, o);
              }
              var p = u.find(0 > r ? -1 : 1);
              return (
                (0 > r ? u.inclusiveLeft : u.inclusiveRight) &&
                  (p = Fe(e, p, r, p.line == t.line ? i : null)),
                p ? Me(e, p, t, r, o) : null
              );
            }
          }
        return t;
      }
      function Oe(e, t, n, r, o) {
        var i = r || 1,
          a =
            Me(e, t, n, i, o) ||
            (!o && Me(e, t, n, i, !0)) ||
            Me(e, t, n, -i, o) ||
            (!o && Me(e, t, n, -i, !0));
        return a ? a : ((e.cantEdit = !0), Li(e.first, 0));
      }
      function Fe(e, t, n, r) {
        return 0 > n && 0 == t.ch
          ? t.line > e.first
            ? me(e, Li(t.line - 1))
            : null
          : n > 0 && t.ch == (r || Qr(e, t.line)).text.length
          ? t.line < e.first + e.size - 1
            ? Li(t.line + 1, 0)
            : null
          : new Li(t.line, t.ch + n);
      }
      function Te(e) {
        e.display.input.showSelection(e.display.input.prepareSelection());
      }
      function Ie(e, t) {
        for (
          var n = e.doc,
            r = {},
            o = (r.cursors = document.createDocumentFragment()),
            i = (r.selection = document.createDocumentFragment()),
            a = 0;
          a < n.sel.ranges.length;
          a++
        )
          if (t !== !1 || a != n.sel.primIndex) {
            var s = n.sel.ranges[a];
            if (
              !(
                s.from().line >= e.display.viewTo ||
                s.to().line < e.display.viewFrom
              )
            ) {
              var u = s.empty();
              (u || e.options.showCursorWhenSelecting) && Pe(e, s.head, o),
                u || Le(e, s, i);
            }
          }
        return r;
      }
      function Pe(e, t, n) {
        var r = ft(
            e,
            t,
            "div",
            null,
            null,
            !e.options.singleCursorHeightPerLine
          ),
          o = n.appendChild(Ho("div", " ", "CodeMirror-cursor"));
        if (
          ((o.style.left = r.left + "px"),
          (o.style.top = r.top + "px"),
          (o.style.height =
            Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px"),
          r.other)
        ) {
          var i = n.appendChild(
            Ho("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor")
          );
          (i.style.display = ""),
            (i.style.left = r.other.left + "px"),
            (i.style.top = r.other.top + "px"),
            (i.style.height = 0.85 * (r.other.bottom - r.other.top) + "px");
        }
      }
      function Le(e, t, n) {
        function r(e, t, n, r) {
          0 > t && (t = 0),
            (t = Math.round(t)),
            (r = Math.round(r)),
            s.appendChild(
              Ho(
                "div",
                null,
                "CodeMirror-selected",
                "position: absolute; left: " +
                  e +
                  "px; top: " +
                  t +
                  "px; width: " +
                  (null == n ? c - e : n) +
                  "px; height: " +
                  (r - t) +
                  "px"
              )
            );
        }
        function o(t, n, o) {
          function i(n, r) {
            return dt(e, Li(t, n), "div", p, r);
          }
          var s,
            u,
            p = Qr(a, t),
            d = p.text.length;
          return (
            ti(oo(p), n || 0, null == o ? d : o, function (e, t, a) {
              var p,
                f,
                h,
                m = i(e, "left");
              if (e == t) (p = m), (f = h = m.left);
              else {
                if (((p = i(t - 1, "right")), "rtl" == a)) {
                  var v = m;
                  (m = p), (p = v);
                }
                (f = m.left), (h = p.right);
              }
              null == n && 0 == e && (f = l),
                p.top - m.top > 3 &&
                  (r(f, m.top, null, m.bottom),
                  (f = l),
                  m.bottom < p.top && r(f, m.bottom, null, p.top)),
                null == o && t == d && (h = c),
                (!s || m.top < s.top || (m.top == s.top && m.left < s.left)) &&
                  (s = m),
                (!u ||
                  p.bottom > u.bottom ||
                  (p.bottom == u.bottom && p.right > u.right)) &&
                  (u = p),
                l + 1 > f && (f = l),
                r(f, p.top, h - f, p.bottom);
            }),
            { start: s, end: u }
          );
        }
        var i = e.display,
          a = e.doc,
          s = document.createDocumentFragment(),
          u = qe(e.display),
          l = u.left,
          c = Math.max(i.sizerWidth, Ke(e) - i.sizer.offsetLeft) - u.right,
          p = t.from(),
          d = t.to();
        if (p.line == d.line) o(p.line, p.ch, d.ch);
        else {
          var f = Qr(a, p.line),
            h = Qr(a, d.line),
            m = yr(f) == yr(h),
            v = o(p.line, p.ch, m ? f.text.length + 1 : null).end,
            g = o(d.line, m ? 0 : null, d.ch).start;
          m &&
            (v.top < g.top - 2
              ? (r(v.right, v.top, null, v.bottom),
                r(l, g.top, g.left, g.bottom))
              : r(v.right, v.top, g.left - v.right, v.bottom)),
            v.bottom < g.top && r(l, v.bottom, null, g.top);
        }
        n.appendChild(s);
      }
      function Re(e) {
        if (e.state.focused) {
          var t = e.display;
          clearInterval(t.blinker);
          var n = !0;
          (t.cursorDiv.style.visibility = ""),
            e.options.cursorBlinkRate > 0
              ? (t.blinker = setInterval(function () {
                  t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden";
                }, e.options.cursorBlinkRate))
              : e.options.cursorBlinkRate < 0 &&
                (t.cursorDiv.style.visibility = "hidden");
        }
      }
      function Ve(e, t) {
        e.doc.mode.startState &&
          e.doc.frontier < e.display.viewTo &&
          e.state.highlight.set(t, Vo(Ue, e));
      }
      function Ue(e) {
        var t = e.doc;
        if (
          (t.frontier < t.first && (t.frontier = t.first),
          !(t.frontier >= e.display.viewTo))
        ) {
          var n = +new Date() + e.options.workTime,
            r = sa(t.mode, je(e, t.frontier)),
            o = [];
          t.iter(
            t.frontier,
            Math.min(t.first + t.size, e.display.viewTo + 500),
            function (i) {
              if (t.frontier >= e.display.viewFrom) {
                var a = i.styles,
                  s = i.text.length > e.options.maxHighlightLength,
                  u = Tr(e, i, s ? sa(t.mode, r) : r, !0);
                i.styles = u.styles;
                var l = i.styleClasses,
                  c = u.classes;
                c ? (i.styleClasses = c) : l && (i.styleClasses = null);
                for (
                  var p =
                      !a ||
                      a.length != i.styles.length ||
                      (l != c &&
                        (!l ||
                          !c ||
                          l.bgClass != c.bgClass ||
                          l.textClass != c.textClass)),
                    d = 0;
                  !p && d < a.length;
                  ++d
                )
                  p = a[d] != i.styles[d];
                p && o.push(t.frontier), (i.stateAfter = s ? r : sa(t.mode, r));
              } else
                i.text.length <= e.options.maxHighlightLength &&
                  Pr(e, i.text, r),
                  (i.stateAfter = t.frontier % 5 == 0 ? sa(t.mode, r) : null);
              return (
                ++t.frontier,
                +new Date() > n ? (Ve(e, e.options.workDelay), !0) : void 0
              );
            }
          ),
            o.length &&
              Bt(e, function () {
                for (var t = 0; t < o.length; t++) Pt(e, o[t], "text");
              });
        }
      }
      function We(e, t, n) {
        for (
          var r,
            o,
            i = e.doc,
            a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100),
            s = t;
          s > a;
          --s
        ) {
          if (s <= i.first) return i.first;
          var u = Qr(i, s - 1);
          if (u.stateAfter && (!n || s <= i.frontier)) return s;
          var l = Va(u.text, null, e.options.tabSize);
          (null == o || r > l) && ((o = s - 1), (r = l));
        }
        return o;
      }
      function je(e, t, n) {
        var r = e.doc,
          o = e.display;
        if (!r.mode.startState) return !0;
        var i = We(e, t, n),
          a = i > r.first && Qr(r, i - 1).stateAfter;
        return (
          (a = a ? sa(r.mode, a) : ua(r.mode)),
          r.iter(i, t, function (n) {
            Pr(e, n.text, a);
            var s =
              i == t - 1 || i % 5 == 0 || (i >= o.viewFrom && i < o.viewTo);
            (n.stateAfter = s ? sa(r.mode, a) : null), ++i;
          }),
          n && (r.frontier = i),
          a
        );
      }
      function He(e) {
        return e.lineSpace.offsetTop;
      }
      function ze(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight;
      }
      function qe(e) {
        if (e.cachedPaddingH) return e.cachedPaddingH;
        var t = qo(e.measure, Ho("pre", "x")),
          n = window.getComputedStyle
            ? window.getComputedStyle(t)
            : t.currentStyle,
          r = {
            left: parseInt(n.paddingLeft),
            right: parseInt(n.paddingRight),
          };
        return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r;
      }
      function Ye(e) {
        return Ta - e.display.nativeBarWidth;
      }
      function Ke(e) {
        return e.display.scroller.clientWidth - Ye(e) - e.display.barWidth;
      }
      function Ge(e) {
        return e.display.scroller.clientHeight - Ye(e) - e.display.barHeight;
      }
      function Xe(e, t, n) {
        var r = e.options.lineWrapping,
          o = r && Ke(e);
        if (!t.measure.heights || (r && t.measure.width != o)) {
          var i = (t.measure.heights = []);
          if (r) {
            t.measure.width = o;
            for (
              var a = t.text.firstChild.getClientRects(), s = 0;
              s < a.length - 1;
              s++
            ) {
              var u = a[s],
                l = a[s + 1];
              Math.abs(u.bottom - l.bottom) > 2 &&
                i.push((u.bottom + l.top) / 2 - n.top);
            }
          }
          i.push(n.bottom - n.top);
        }
      }
      function $e(e, t, n) {
        if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };
        for (var r = 0; r < e.rest.length; r++)
          if (e.rest[r] == t)
            return { map: e.measure.maps[r], cache: e.measure.caches[r] };
        for (var r = 0; r < e.rest.length; r++)
          if (to(e.rest[r]) > n)
            return {
              map: e.measure.maps[r],
              cache: e.measure.caches[r],
              before: !0,
            };
      }
      function Qe(e, t) {
        t = yr(t);
        var n = to(t),
          r = (e.display.externalMeasured = new Ft(e.doc, t, n));
        r.lineN = n;
        var o = (r.built = Rr(e, r));
        return (r.text = o.pre), qo(e.display.lineMeasure, o.pre), r;
      }
      function Ze(e, t, n, r) {
        return tt(e, et(e, t), n, r);
      }
      function Je(e, t) {
        if (t >= e.display.viewFrom && t < e.display.viewTo)
          return e.display.view[Rt(e, t)];
        var n = e.display.externalMeasured;
        return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0;
      }
      function et(e, t) {
        var n = to(t),
          r = Je(e, n);
        r && !r.text
          ? (r = null)
          : r && r.changes && (I(e, r, n, F(e)), (e.curOp.forceUpdate = !0)),
          r || (r = Qe(e, t));
        var o = $e(r, t, n);
        return {
          line: t,
          view: r,
          rect: null,
          map: o.map,
          cache: o.cache,
          before: o.before,
          hasHeights: !1,
        };
      }
      function tt(e, t, n, r, o) {
        t.before && (n = -1);
        var i,
          a = n + (r || "");
        return (
          t.cache.hasOwnProperty(a)
            ? (i = t.cache[a])
            : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
              t.hasHeights || (Xe(e, t.view, t.rect), (t.hasHeights = !0)),
              (i = rt(e, t, n, r)),
              i.bogus || (t.cache[a] = i)),
          {
            left: i.left,
            right: i.right,
            top: o ? i.rtop : i.top,
            bottom: o ? i.rbottom : i.bottom,
          }
        );
      }
      function nt(e, t, n) {
        for (var r, o, i, a, s = 0; s < e.length; s += 3) {
          var u = e[s],
            l = e[s + 1];
          if (
            (u > t
              ? ((o = 0), (i = 1), (a = "left"))
              : l > t
              ? ((o = t - u), (i = o + 1))
              : (s == e.length - 3 || (t == l && e[s + 3] > t)) &&
                ((i = l - u), (o = i - 1), t >= l && (a = "right")),
            null != o)
          ) {
            if (
              ((r = e[s + 2]),
              u == l && n == (r.insertLeft ? "left" : "right") && (a = n),
              "left" == n && 0 == o)
            )
              for (; s && e[s - 2] == e[s - 3] && e[s - 1].insertLeft; )
                (r = e[(s -= 3) + 2]), (a = "left");
            if ("right" == n && o == l - u)
              for (
                ;
                s < e.length - 3 &&
                e[s + 3] == e[s + 4] &&
                !e[s + 5].insertLeft;

              )
                (r = e[(s += 3) + 2]), (a = "right");
            break;
          }
        }
        return {
          node: r,
          start: o,
          end: i,
          collapse: a,
          coverStart: u,
          coverEnd: l,
        };
      }
      function rt(e, t, n, r) {
        var o,
          i = nt(t.map, n, r),
          a = i.node,
          s = i.start,
          u = i.end,
          l = i.collapse;
        if (3 == a.nodeType) {
          for (var c = 0; 4 > c; c++) {
            for (; s && jo(t.line.text.charAt(i.coverStart + s)); ) --s;
            for (
              ;
              i.coverStart + u < i.coverEnd &&
              jo(t.line.text.charAt(i.coverStart + u));

            )
              ++u;
            if (Ci && 9 > Ai && 0 == s && u == i.coverEnd - i.coverStart)
              o = a.parentNode.getBoundingClientRect();
            else if (Ci && e.options.lineWrapping) {
              var p = Ha(a, s, u).getClientRects();
              o = p.length ? p["right" == r ? p.length - 1 : 0] : Hi;
            } else o = Ha(a, s, u).getBoundingClientRect() || Hi;
            if (o.left || o.right || 0 == s) break;
            (u = s), (s -= 1), (l = "right");
          }
          Ci && 11 > Ai && (o = ot(e.display.measure, o));
        } else {
          s > 0 && (l = r = "right");
          var p;
          o =
            e.options.lineWrapping && (p = a.getClientRects()).length > 1
              ? p["right" == r ? p.length - 1 : 0]
              : a.getBoundingClientRect();
        }
        if (Ci && 9 > Ai && !s && (!o || (!o.left && !o.right))) {
          var d = a.parentNode.getClientRects()[0];
          o = d
            ? {
                left: d.left,
                right: d.left + Ct(e.display),
                top: d.top,
                bottom: d.bottom,
              }
            : Hi;
        }
        for (
          var f = o.top - t.rect.top,
            h = o.bottom - t.rect.top,
            m = (f + h) / 2,
            v = t.view.measure.heights,
            c = 0;
          c < v.length - 1 && !(m < v[c]);
          c++
        );
        var g = c ? v[c - 1] : 0,
          y = v[c],
          C = {
            left: ("right" == l ? o.right : o.left) - t.rect.left,
            right: ("left" == l ? o.left : o.right) - t.rect.left,
            top: g,
            bottom: y,
          };
        return (
          o.left || o.right || (C.bogus = !0),
          e.options.singleCursorHeightPerLine ||
            ((C.rtop = f), (C.rbottom = h)),
          C
        );
      }
      function ot(e, t) {
        if (
          !window.screen ||
          null == screen.logicalXDPI ||
          screen.logicalXDPI == screen.deviceXDPI ||
          !ei(e)
        )
          return t;
        var n = screen.logicalXDPI / screen.deviceXDPI,
          r = screen.logicalYDPI / screen.deviceYDPI;
        return {
          left: t.left * n,
          right: t.right * n,
          top: t.top * r,
          bottom: t.bottom * r,
        };
      }
      function it(e) {
        if (
          e.measure &&
          ((e.measure.cache = {}), (e.measure.heights = null), e.rest)
        )
          for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
      }
      function at(e) {
        (e.display.externalMeasure = null), zo(e.display.lineMeasure);
        for (var t = 0; t < e.display.view.length; t++) it(e.display.view[t]);
      }
      function st(e) {
        at(e),
          (e.display.cachedCharWidth =
            e.display.cachedTextHeight =
            e.display.cachedPaddingH =
              null),
          e.options.lineWrapping || (e.display.maxLineChanged = !0),
          (e.display.lineNumChars = null);
      }
      function ut() {
        return (
          window.pageXOffset ||
          (document.documentElement || document.body).scrollLeft
        );
      }
      function lt() {
        return (
          window.pageYOffset ||
          (document.documentElement || document.body).scrollTop
        );
      }
      function ct(e, t, n, r) {
        if (t.widgets)
          for (var o = 0; o < t.widgets.length; ++o)
            if (t.widgets[o].above) {
              var i = xr(t.widgets[o]);
              (n.top += i), (n.bottom += i);
            }
        if ("line" == r) return n;
        r || (r = "local");
        var a = ro(t);
        if (
          ("local" == r ? (a += He(e.display)) : (a -= e.display.viewOffset),
          "page" == r || "window" == r)
        ) {
          var s = e.display.lineSpace.getBoundingClientRect();
          a += s.top + ("window" == r ? 0 : lt());
          var u = s.left + ("window" == r ? 0 : ut());
          (n.left += u), (n.right += u);
        }
        return (n.top += a), (n.bottom += a), n;
      }
      function pt(e, t, n) {
        if ("div" == n) return t;
        var r = t.left,
          o = t.top;
        if ("page" == n) (r -= ut()), (o -= lt());
        else if ("local" == n || !n) {
          var i = e.display.sizer.getBoundingClientRect();
          (r += i.left), (o += i.top);
        }
        var a = e.display.lineSpace.getBoundingClientRect();
        return { left: r - a.left, top: o - a.top };
      }
      function dt(e, t, n, r, o) {
        return r || (r = Qr(e.doc, t.line)), ct(e, r, Ze(e, r, t.ch, o), n);
      }
      function ft(e, t, n, r, o, i) {
        function a(t, a) {
          var s = tt(e, o, t, a ? "right" : "left", i);
          return a ? (s.left = s.right) : (s.right = s.left), ct(e, r, s, n);
        }
        function s(e, t) {
          var n = u[t],
            r = n.level % 2;
          return (
            e == ni(n) && t && n.level < u[t - 1].level
              ? ((n = u[--t]), (e = ri(n) - (n.level % 2 ? 0 : 1)), (r = !0))
              : e == ri(n) &&
                t < u.length - 1 &&
                n.level < u[t + 1].level &&
                ((n = u[++t]), (e = ni(n) - (n.level % 2)), (r = !1)),
            r && e == n.to && e > n.from ? a(e - 1) : a(e, r)
          );
        }
        (r = r || Qr(e.doc, t.line)), o || (o = et(e, r));
        var u = oo(r),
          l = t.ch;
        if (!u) return a(l);
        var c = ci(u, l),
          p = s(l, c);
        return null != is && (p.other = s(l, is)), p;
      }
      function ht(e, t) {
        var n = 0,
          t = me(e.doc, t);
        e.options.lineWrapping || (n = Ct(e.display) * t.ch);
        var r = Qr(e.doc, t.line),
          o = ro(r) + He(e.display);
        return { left: n, right: n, top: o, bottom: o + r.height };
      }
      function mt(e, t, n, r) {
        var o = Li(e, t);
        return (o.xRel = r), n && (o.outside = !0), o;
      }
      function vt(e, t, n) {
        var r = e.doc;
        if (((n += e.display.viewOffset), 0 > n)) return mt(r.first, 0, !0, -1);
        var o = no(r, n),
          i = r.first + r.size - 1;
        if (o > i) return mt(r.first + r.size - 1, Qr(r, i).text.length, !0, 1);
        0 > t && (t = 0);
        for (var a = Qr(r, o); ; ) {
          var s = gt(e, a, o, t, n),
            u = vr(a),
            l = u && u.find(0, !0);
          if (!u || !(s.ch > l.from.ch || (s.ch == l.from.ch && s.xRel > 0)))
            return s;
          o = to((a = l.to.line));
        }
      }
      function gt(e, t, n, r, o) {
        function i(r) {
          var o = ft(e, Li(n, r), "line", t, l);
          return (
            (s = !0),
            a > o.bottom
              ? o.left - u
              : a < o.top
              ? o.left + u
              : ((s = !1), o.left)
          );
        }
        var a = o - ro(t),
          s = !1,
          u = 2 * e.display.wrapper.clientWidth,
          l = et(e, t),
          c = oo(t),
          p = t.text.length,
          d = oi(t),
          f = ii(t),
          h = i(d),
          m = s,
          v = i(f),
          g = s;
        if (r > v) return mt(n, f, g, 1);
        for (;;) {
          if (c ? f == d || f == di(t, d, 1) : 1 >= f - d) {
            for (
              var y = h > r || v - r >= r - h ? d : f, C = r - (y == d ? h : v);
              jo(t.text.charAt(y));

            )
              ++y;
            var A = mt(n, y, y == d ? m : g, -1 > C ? -1 : C > 1 ? 1 : 0);
            return A;
          }
          var D = Math.ceil(p / 2),
            b = d + D;
          if (c) {
            b = d;
            for (var E = 0; D > E; ++E) b = di(t, b, 1);
          }
          var w = i(b);
          w > r
            ? ((f = b), (v = w), (g = s) && (v += 1e3), (p = D))
            : ((d = b), (h = w), (m = s), (p -= D));
        }
      }
      function yt(e) {
        if (null != e.cachedTextHeight) return e.cachedTextHeight;
        if (null == Ui) {
          Ui = Ho("pre");
          for (var t = 0; 49 > t; ++t)
            Ui.appendChild(document.createTextNode("x")),
              Ui.appendChild(Ho("br"));
          Ui.appendChild(document.createTextNode("x"));
        }
        qo(e.measure, Ui);
        var n = Ui.offsetHeight / 50;
        return n > 3 && (e.cachedTextHeight = n), zo(e.measure), n || 1;
      }
      function Ct(e) {
        if (null != e.cachedCharWidth) return e.cachedCharWidth;
        var t = Ho("span", "xxxxxxxxxx"),
          n = Ho("pre", [t]);
        qo(e.measure, n);
        var r = t.getBoundingClientRect(),
          o = (r.right - r.left) / 10;
        return o > 2 && (e.cachedCharWidth = o), o || 10;
      }
      function At(e) {
        (e.curOp = {
          cm: e,
          viewChanged: !1,
          startHeight: e.doc.height,
          forceUpdate: !1,
          updateInput: null,
          typing: !1,
          changeObjs: null,
          cursorActivityHandlers: null,
          cursorActivityCalled: 0,
          selectionChanged: !1,
          updateMaxLine: !1,
          scrollLeft: null,
          scrollTop: null,
          scrollToPos: null,
          focus: !1,
          id: ++qi,
        }),
          zi
            ? zi.ops.push(e.curOp)
            : (e.curOp.ownsGroup = zi =
                { ops: [e.curOp], delayedCallbacks: [] });
      }
      function Dt(e) {
        var t = e.delayedCallbacks,
          n = 0;
        do {
          for (; n < t.length; n++) t[n].call(null);
          for (var r = 0; r < e.ops.length; r++) {
            var o = e.ops[r];
            if (o.cursorActivityHandlers)
              for (; o.cursorActivityCalled < o.cursorActivityHandlers.length; )
                o.cursorActivityHandlers[o.cursorActivityCalled++].call(
                  null,
                  o.cm
                );
          }
        } while (n < t.length);
      }
      function bt(e) {
        var t = e.curOp,
          n = t.ownsGroup;
        if (n)
          try {
            Dt(n);
          } finally {
            zi = null;
            for (var r = 0; r < n.ops.length; r++) n.ops[r].cm.curOp = null;
            Et(n);
          }
      }
      function Et(e) {
        for (var t = e.ops, n = 0; n < t.length; n++) wt(t[n]);
        for (var n = 0; n < t.length; n++) xt(t[n]);
        for (var n = 0; n < t.length; n++) Nt(t[n]);
        for (var n = 0; n < t.length; n++) kt(t[n]);
        for (var n = 0; n < t.length; n++) St(t[n]);
      }
      function wt(e) {
        var t = e.cm,
          n = t.display;
        N(t),
          e.updateMaxLine && d(t),
          (e.mustUpdate =
            e.viewChanged ||
            e.forceUpdate ||
            null != e.scrollTop ||
            (e.scrollToPos &&
              (e.scrollToPos.from.line < n.viewFrom ||
                e.scrollToPos.to.line >= n.viewTo)) ||
            (n.maxLineChanged && t.options.lineWrapping)),
          (e.update =
            e.mustUpdate &&
            new x(
              t,
              e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos },
              e.forceUpdate
            ));
      }
      function xt(e) {
        e.updatedDisplay = e.mustUpdate && k(e.cm, e.update);
      }
      function Nt(e) {
        var t = e.cm,
          n = t.display;
        e.updatedDisplay && M(t),
          (e.barMeasure = h(t)),
          n.maxLineChanged &&
            !t.options.lineWrapping &&
            ((e.adjustWidthTo =
              Ze(t, n.maxLine, n.maxLine.text.length).left + 3),
            (t.display.sizerWidth = e.adjustWidthTo),
            (e.barMeasure.scrollWidth = Math.max(
              n.scroller.clientWidth,
              n.sizer.offsetLeft + e.adjustWidthTo + Ye(t) + t.display.barWidth
            )),
            (e.maxScrollLeft = Math.max(
              0,
              n.sizer.offsetLeft + e.adjustWidthTo - Ke(t)
            ))),
          (e.updatedDisplay || e.selectionChanged) &&
            (e.preparedSelection = n.input.prepareSelection());
      }
      function kt(e) {
        var t = e.cm;
        null != e.adjustWidthTo &&
          ((t.display.sizer.style.minWidth = e.adjustWidthTo + "px"),
          e.maxScrollLeft < t.doc.scrollLeft &&
            on(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
          (t.display.maxLineChanged = !1)),
          e.preparedSelection &&
            t.display.input.showSelection(e.preparedSelection),
          (e.updatedDisplay || e.startHeight != t.doc.height) &&
            y(t, e.barMeasure),
          e.updatedDisplay && _(t, e.barMeasure),
          e.selectionChanged && Re(t),
          t.state.focused && e.updateInput && t.display.input.reset(e.typing),
          !e.focus ||
            e.focus != Yo() ||
            (document.hasFocus && !document.hasFocus()) ||
            $(e.cm);
      }
      function St(e) {
        var t = e.cm,
          n = t.display,
          r = t.doc;
        if (
          (e.updatedDisplay && S(t, e.update),
          null == n.wheelStartX ||
            (null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos) ||
            (n.wheelStartX = n.wheelStartY = null),
          null == e.scrollTop ||
            (n.scroller.scrollTop == e.scrollTop && !e.forceScroll) ||
            ((r.scrollTop = Math.max(
              0,
              Math.min(
                n.scroller.scrollHeight - n.scroller.clientHeight,
                e.scrollTop
              )
            )),
            n.scrollbars.setScrollTop(r.scrollTop),
            (n.scroller.scrollTop = r.scrollTop)),
          null == e.scrollLeft ||
            (n.scroller.scrollLeft == e.scrollLeft && !e.forceScroll) ||
            ((r.scrollLeft = Math.max(
              0,
              Math.min(
                n.scroller.scrollWidth - n.scroller.clientWidth,
                e.scrollLeft
              )
            )),
            n.scrollbars.setScrollLeft(r.scrollLeft),
            (n.scroller.scrollLeft = r.scrollLeft),
            D(t)),
          e.scrollToPos)
        ) {
          var o = Tn(
            t,
            me(r, e.scrollToPos.from),
            me(r, e.scrollToPos.to),
            e.scrollToPos.margin
          );
          e.scrollToPos.isCursor && t.state.focused && Fn(t, o);
        }
        var i = e.maybeHiddenMarkers,
          a = e.maybeUnhiddenMarkers;
        if (i)
          for (var s = 0; s < i.length; ++s)
            i[s].lines.length || Oa(i[s], "hide");
        if (a)
          for (var s = 0; s < a.length; ++s)
            a[s].lines.length && Oa(a[s], "unhide");
        n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop),
          e.changeObjs && Oa(t, "changes", t, e.changeObjs),
          e.update && e.update.finish();
      }
      function Bt(e, t) {
        if (e.curOp) return t();
        At(e);
        try {
          return t();
        } finally {
          bt(e);
        }
      }
      function _t(e, t) {
        return function () {
          if (e.curOp) return t.apply(e, arguments);
          At(e);
          try {
            return t.apply(e, arguments);
          } finally {
            bt(e);
          }
        };
      }
      function Mt(e) {
        return function () {
          if (this.curOp) return e.apply(this, arguments);
          At(this);
          try {
            return e.apply(this, arguments);
          } finally {
            bt(this);
          }
        };
      }
      function Ot(e) {
        return function () {
          var t = this.cm;
          if (!t || t.curOp) return e.apply(this, arguments);
          At(t);
          try {
            return e.apply(this, arguments);
          } finally {
            bt(t);
          }
        };
      }
      function Ft(e, t, n) {
        (this.line = t),
          (this.rest = Cr(t)),
          (this.size = this.rest ? to(Fo(this.rest)) - n + 1 : 1),
          (this.node = this.text = null),
          (this.hidden = br(e, t));
      }
      function Tt(e, t, n) {
        for (var r, o = [], i = t; n > i; i = r) {
          var a = new Ft(e.doc, Qr(e.doc, i), i);
          (r = i + a.size), o.push(a);
        }
        return o;
      }
      function It(e, t, n, r) {
        null == t && (t = e.doc.first),
          null == n && (n = e.doc.first + e.doc.size),
          r || (r = 0);
        var o = e.display;
        if (
          (r &&
            n < o.viewTo &&
            (null == o.updateLineNumbers || o.updateLineNumbers > t) &&
            (o.updateLineNumbers = t),
          (e.curOp.viewChanged = !0),
          t >= o.viewTo)
        )
          Pi && Ar(e.doc, t) < o.viewTo && Lt(e);
        else if (n <= o.viewFrom)
          Pi && Dr(e.doc, n + r) > o.viewFrom
            ? Lt(e)
            : ((o.viewFrom += r), (o.viewTo += r));
        else if (t <= o.viewFrom && n >= o.viewTo) Lt(e);
        else if (t <= o.viewFrom) {
          var i = Vt(e, n, n + r, 1);
          i
            ? ((o.view = o.view.slice(i.index)),
              (o.viewFrom = i.lineN),
              (o.viewTo += r))
            : Lt(e);
        } else if (n >= o.viewTo) {
          var i = Vt(e, t, t, -1);
          i
            ? ((o.view = o.view.slice(0, i.index)), (o.viewTo = i.lineN))
            : Lt(e);
        } else {
          var a = Vt(e, t, t, -1),
            s = Vt(e, n, n + r, 1);
          a && s
            ? ((o.view = o.view
                .slice(0, a.index)
                .concat(Tt(e, a.lineN, s.lineN))
                .concat(o.view.slice(s.index))),
              (o.viewTo += r))
            : Lt(e);
        }
        var u = o.externalMeasured;
        u &&
          (n < u.lineN
            ? (u.lineN += r)
            : t < u.lineN + u.size && (o.externalMeasured = null));
      }
      function Pt(e, t, n) {
        e.curOp.viewChanged = !0;
        var r = e.display,
          o = e.display.externalMeasured;
        if (
          (o &&
            t >= o.lineN &&
            t < o.lineN + o.size &&
            (r.externalMeasured = null),
          !(t < r.viewFrom || t >= r.viewTo))
        ) {
          var i = r.view[Rt(e, t)];
          if (null != i.node) {
            var a = i.changes || (i.changes = []);
            -1 == To(a, n) && a.push(n);
          }
        }
      }
      function Lt(e) {
        (e.display.viewFrom = e.display.viewTo = e.doc.first),
          (e.display.view = []),
          (e.display.viewOffset = 0);
      }
      function Rt(e, t) {
        if (t >= e.display.viewTo) return null;
        if (((t -= e.display.viewFrom), 0 > t)) return null;
        for (var n = e.display.view, r = 0; r < n.length; r++)
          if (((t -= n[r].size), 0 > t)) return r;
      }
      function Vt(e, t, n, r) {
        var o,
          i = Rt(e, t),
          a = e.display.view;
        if (!Pi || n == e.doc.first + e.doc.size) return { index: i, lineN: n };
        for (var s = 0, u = e.display.viewFrom; i > s; s++) u += a[s].size;
        if (u != t) {
          if (r > 0) {
            if (i == a.length - 1) return null;
            (o = u + a[i].size - t), i++;
          } else o = u - t;
          (t += o), (n += o);
        }
        for (; Ar(e.doc, n) != n; ) {
          if (i == (0 > r ? 0 : a.length - 1)) return null;
          (n += r * a[i - (0 > r ? 1 : 0)].size), (i += r);
        }
        return { index: i, lineN: n };
      }
      function Ut(e, t, n) {
        var r = e.display,
          o = r.view;
        0 == o.length || t >= r.viewTo || n <= r.viewFrom
          ? ((r.view = Tt(e, t, n)), (r.viewFrom = t))
          : (r.viewFrom > t
              ? (r.view = Tt(e, t, r.viewFrom).concat(r.view))
              : r.viewFrom < t && (r.view = r.view.slice(Rt(e, t))),
            (r.viewFrom = t),
            r.viewTo < n
              ? (r.view = r.view.concat(Tt(e, r.viewTo, n)))
              : r.viewTo > n && (r.view = r.view.slice(0, Rt(e, n)))),
          (r.viewTo = n);
      }
      function Wt(e) {
        for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
          var o = t[r];
          o.hidden || (o.node && !o.changes) || ++n;
        }
        return n;
      }
      function jt(e) {
        function t() {
          o.activeTouch &&
            ((i = setTimeout(function () {
              o.activeTouch = null;
            }, 1e3)),
            (a = o.activeTouch),
            (a.end = +new Date()));
        }
        function n(e) {
          if (1 != e.touches.length) return !1;
          var t = e.touches[0];
          return t.radiusX <= 1 && t.radiusY <= 1;
        }
        function r(e, t) {
          if (null == t.left) return !0;
          var n = t.left - e.left,
            r = t.top - e.top;
          return n * n + r * r > 400;
        }
        var o = e.display;
        Ba(o.scroller, "mousedown", _t(e, Kt)),
          Ci && 11 > Ai
            ? Ba(
                o.scroller,
                "dblclick",
                _t(e, function (t) {
                  if (!ko(e, t)) {
                    var n = Yt(e, t);
                    if (n && !Zt(e, t) && !qt(e.display, t)) {
                      Na(t);
                      var r = e.findWordAt(n);
                      Ae(e.doc, r.anchor, r.head);
                    }
                  }
                })
              )
            : Ba(o.scroller, "dblclick", function (t) {
                ko(e, t) || Na(t);
              }),
          Ti ||
            Ba(o.scroller, "contextmenu", function (t) {
              Cn(e, t);
            });
        var i,
          a = { end: 0 };
        Ba(o.scroller, "touchstart", function (t) {
          if (!ko(e, t) && !n(t)) {
            clearTimeout(i);
            var r = +new Date();
            (o.activeTouch = {
              start: r,
              moved: !1,
              prev: r - a.end <= 300 ? a : null,
            }),
              1 == t.touches.length &&
                ((o.activeTouch.left = t.touches[0].pageX),
                (o.activeTouch.top = t.touches[0].pageY));
          }
        }),
          Ba(o.scroller, "touchmove", function () {
            o.activeTouch && (o.activeTouch.moved = !0);
          }),
          Ba(o.scroller, "touchend", function (n) {
            var i = o.activeTouch;
            if (
              i &&
              !qt(o, n) &&
              null != i.left &&
              !i.moved &&
              new Date() - i.start < 300
            ) {
              var a,
                s = e.coordsChar(o.activeTouch, "page");
              (a =
                !i.prev || r(i, i.prev)
                  ? new pe(s, s)
                  : !i.prev.prev || r(i, i.prev.prev)
                  ? e.findWordAt(s)
                  : new pe(Li(s.line, 0), me(e.doc, Li(s.line + 1, 0)))),
                e.setSelection(a.anchor, a.head),
                e.focus(),
                Na(n);
            }
            t();
          }),
          Ba(o.scroller, "touchcancel", t),
          Ba(o.scroller, "scroll", function () {
            o.scroller.clientHeight &&
              (rn(e, o.scroller.scrollTop),
              on(e, o.scroller.scrollLeft, !0),
              Oa(e, "scroll", e));
          }),
          Ba(o.scroller, "mousewheel", function (t) {
            an(e, t);
          }),
          Ba(o.scroller, "DOMMouseScroll", function (t) {
            an(e, t);
          }),
          Ba(o.wrapper, "scroll", function () {
            o.wrapper.scrollTop = o.wrapper.scrollLeft = 0;
          }),
          (o.dragFunctions = {
            enter: function (t) {
              ko(e, t) || Sa(t);
            },
            over: function (t) {
              ko(e, t) || (tn(e, t), Sa(t));
            },
            start: function (t) {
              en(e, t);
            },
            drop: _t(e, Jt),
            leave: function (t) {
              ko(e, t) || nn(e);
            },
          });
        var s = o.input.getField();
        Ba(s, "keyup", function (t) {
          hn.call(e, t);
        }),
          Ba(s, "keydown", _t(e, dn)),
          Ba(s, "keypress", _t(e, mn)),
          Ba(s, "focus", Vo(gn, e)),
          Ba(s, "blur", Vo(yn, e));
      }
      function Ht(t, n, r) {
        var o = r && r != e.Init;
        if (!n != !o) {
          var i = t.display.dragFunctions,
            a = n ? Ba : Ma;
          a(t.display.scroller, "dragstart", i.start),
            a(t.display.scroller, "dragenter", i.enter),
            a(t.display.scroller, "dragover", i.over),
            a(t.display.scroller, "dragleave", i.leave),
            a(t.display.scroller, "drop", i.drop);
        }
      }
      function zt(e) {
        var t = e.display;
        (t.lastWrapHeight == t.wrapper.clientHeight &&
          t.lastWrapWidth == t.wrapper.clientWidth) ||
          ((t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
          (t.scrollbarsClipped = !1),
          e.setSize());
      }
      function qt(e, t) {
        for (var n = bo(t); n != e.wrapper; n = n.parentNode)
          if (
            !n ||
            (1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events")) ||
            (n.parentNode == e.sizer && n != e.mover)
          )
            return !0;
      }
      function Yt(e, t, n, r) {
        var o = e.display;
        if (!n && "true" == bo(t).getAttribute("cm-not-content")) return null;
        var i,
          a,
          s = o.lineSpace.getBoundingClientRect();
        try {
          (i = t.clientX - s.left), (a = t.clientY - s.top);
        } catch (t) {
          return null;
        }
        var u,
          l = vt(e, i, a);
        if (r && 1 == l.xRel && (u = Qr(e.doc, l.line).text).length == l.ch) {
          var c = Va(u, u.length, e.options.tabSize) - u.length;
          l = Li(
            l.line,
            Math.max(
              0,
              Math.round((i - qe(e.display).left) / Ct(e.display)) - c
            )
          );
        }
        return l;
      }
      function Kt(e) {
        var t = this,
          n = t.display;
        if (!(ko(t, e) || (n.activeTouch && n.input.supportsTouch()))) {
          if (((n.shift = e.shiftKey), qt(n, e)))
            return void (
              Di ||
              ((n.scroller.draggable = !1),
              setTimeout(function () {
                n.scroller.draggable = !0;
              }, 100))
            );
          if (!Zt(t, e)) {
            var r = Yt(t, e);
            switch ((window.focus(), Eo(e))) {
              case 1:
                t.state.selectingText
                  ? t.state.selectingText(e)
                  : r
                  ? Gt(t, e, r)
                  : bo(e) == n.scroller && Na(e);
                break;
              case 2:
                Di && (t.state.lastMiddleDown = +new Date()),
                  r && Ae(t.doc, r),
                  setTimeout(function () {
                    n.input.focus();
                  }, 20),
                  Na(e);
                break;
              case 3:
                Ti ? Cn(t, e) : vn(t);
            }
          }
        }
      }
      function Gt(e, t, n) {
        Ci ? setTimeout(Vo($, e), 0) : (e.curOp.focus = Yo());
        var r,
          o = +new Date();
        ji && ji.time > o - 400 && 0 == Ri(ji.pos, n)
          ? (r = "triple")
          : Wi && Wi.time > o - 400 && 0 == Ri(Wi.pos, n)
          ? ((r = "double"), (ji = { time: o, pos: n }))
          : ((r = "single"), (Wi = { time: o, pos: n }));
        var i,
          a = e.doc.sel,
          s = _i ? t.metaKey : t.ctrlKey;
        e.options.dragDrop &&
        Ja &&
        !e.isReadOnly() &&
        "single" == r &&
        (i = a.contains(n)) > -1 &&
        (Ri((i = a.ranges[i]).from(), n) < 0 || n.xRel > 0) &&
        (Ri(i.to(), n) > 0 || n.xRel < 0)
          ? Xt(e, t, n, s)
          : $t(e, t, n, r, s);
      }
      function Xt(e, t, n, r) {
        var o = e.display,
          i = +new Date(),
          a = _t(e, function (s) {
            Di && (o.scroller.draggable = !1),
              (e.state.draggingText = !1),
              Ma(document, "mouseup", a),
              Ma(o.scroller, "drop", a),
              Math.abs(t.clientX - s.clientX) +
                Math.abs(t.clientY - s.clientY) <
                10 &&
                (Na(s),
                !r && +new Date() - 200 < i && Ae(e.doc, n),
                Di || (Ci && 9 == Ai)
                  ? setTimeout(function () {
                      document.body.focus(), o.input.focus();
                    }, 20)
                  : o.input.focus());
          });
        Di && (o.scroller.draggable = !0),
          (e.state.draggingText = a),
          o.scroller.dragDrop && o.scroller.dragDrop(),
          Ba(document, "mouseup", a),
          Ba(o.scroller, "drop", a);
      }
      function $t(e, t, n, r, o) {
        function i(t) {
          if (0 != Ri(v, t))
            if (((v = t), "rect" == r)) {
              for (
                var o = [],
                  i = e.options.tabSize,
                  a = Va(Qr(l, n.line).text, n.ch, i),
                  s = Va(Qr(l, t.line).text, t.ch, i),
                  u = Math.min(a, s),
                  f = Math.max(a, s),
                  h = Math.min(n.line, t.line),
                  m = Math.min(e.lastLine(), Math.max(n.line, t.line));
                m >= h;
                h++
              ) {
                var g = Qr(l, h).text,
                  y = Ua(g, u, i);
                u == f
                  ? o.push(new pe(Li(h, y), Li(h, y)))
                  : g.length > y &&
                    o.push(new pe(Li(h, y), Li(h, Ua(g, f, i))));
              }
              o.length || o.push(new pe(n, n)),
                Ne(l, de(d.ranges.slice(0, p).concat(o), p), {
                  origin: "*mouse",
                  scroll: !1,
                }),
                e.scrollIntoView(t);
            } else {
              var C = c,
                A = C.anchor,
                D = t;
              if ("single" != r) {
                if ("double" == r) var b = e.findWordAt(t);
                else var b = new pe(Li(t.line, 0), me(l, Li(t.line + 1, 0)));
                Ri(b.anchor, A) > 0
                  ? ((D = b.head), (A = X(C.from(), b.anchor)))
                  : ((D = b.anchor), (A = G(C.to(), b.head)));
              }
              var o = d.ranges.slice(0);
              (o[p] = new pe(me(l, A), D)), Ne(l, de(o, p), La);
            }
        }
        function a(t) {
          var n = ++y,
            o = Yt(e, t, !0, "rect" == r);
          if (o)
            if (0 != Ri(o, v)) {
              (e.curOp.focus = Yo()), i(o);
              var s = A(u, l);
              (o.line >= s.to || o.line < s.from) &&
                setTimeout(
                  _t(e, function () {
                    y == n && a(t);
                  }),
                  150
                );
            } else {
              var c = t.clientY < g.top ? -20 : t.clientY > g.bottom ? 20 : 0;
              c &&
                setTimeout(
                  _t(e, function () {
                    y == n && ((u.scroller.scrollTop += c), a(t));
                  }),
                  50
                );
            }
        }
        function s(t) {
          (e.state.selectingText = !1),
            (y = 1 / 0),
            Na(t),
            u.input.focus(),
            Ma(document, "mousemove", C),
            Ma(document, "mouseup", D),
            (l.history.lastSelOrigin = null);
        }
        var u = e.display,
          l = e.doc;
        Na(t);
        var c,
          p,
          d = l.sel,
          f = d.ranges;
        if (
          (o && !t.shiftKey
            ? ((p = l.sel.contains(n)), (c = p > -1 ? f[p] : new pe(n, n)))
            : ((c = l.sel.primary()), (p = l.sel.primIndex)),
          t.altKey)
        )
          (r = "rect"),
            o || (c = new pe(n, n)),
            (n = Yt(e, t, !0, !0)),
            (p = -1);
        else if ("double" == r) {
          var h = e.findWordAt(n);
          c = e.display.shift || l.extend ? Ce(l, c, h.anchor, h.head) : h;
        } else if ("triple" == r) {
          var m = new pe(Li(n.line, 0), me(l, Li(n.line + 1, 0)));
          c = e.display.shift || l.extend ? Ce(l, c, m.anchor, m.head) : m;
        } else c = Ce(l, c, n);
        o
          ? -1 == p
            ? ((p = f.length),
              Ne(l, de(f.concat([c]), p), { scroll: !1, origin: "*mouse" }))
            : f.length > 1 && f[p].empty() && "single" == r && !t.shiftKey
            ? (Ne(l, de(f.slice(0, p).concat(f.slice(p + 1)), 0), {
                scroll: !1,
                origin: "*mouse",
              }),
              (d = l.sel))
            : be(l, p, c, La)
          : ((p = 0), Ne(l, new ce([c], 0), La), (d = l.sel));
        var v = n,
          g = u.wrapper.getBoundingClientRect(),
          y = 0,
          C = _t(e, function (e) {
            Eo(e) ? a(e) : s(e);
          }),
          D = _t(e, s);
        (e.state.selectingText = D),
          Ba(document, "mousemove", C),
          Ba(document, "mouseup", D);
      }
      function Qt(e, t, n, r) {
        try {
          var o = t.clientX,
            i = t.clientY;
        } catch (t) {
          return !1;
        }
        if (o >= Math.floor(e.display.gutters.getBoundingClientRect().right))
          return !1;
        r && Na(t);
        var a = e.display,
          s = a.lineDiv.getBoundingClientRect();
        if (i > s.bottom || !Bo(e, n)) return Do(t);
        i -= s.top - a.viewOffset;
        for (var u = 0; u < e.options.gutters.length; ++u) {
          var l = a.gutters.childNodes[u];
          if (l && l.getBoundingClientRect().right >= o) {
            var c = no(e.doc, i),
              p = e.options.gutters[u];
            return Oa(e, n, e, c, p, t), Do(t);
          }
        }
      }
      function Zt(e, t) {
        return Qt(e, t, "gutterClick", !0);
      }
      function Jt(e) {
        var t = this;
        if ((nn(t), !ko(t, e) && !qt(t.display, e))) {
          Na(e), Ci && (Yi = +new Date());
          var n = Yt(t, e, !0),
            r = e.dataTransfer.files;
          if (n && !t.isReadOnly())
            if (r && r.length && window.FileReader && window.File)
              for (
                var o = r.length,
                  i = Array(o),
                  a = 0,
                  s = function (e, r) {
                    if (
                      !t.options.allowDropFileTypes ||
                      -1 != To(t.options.allowDropFileTypes, e.type)
                    ) {
                      var s = new FileReader();
                      (s.onload = _t(t, function () {
                        var e = s.result;
                        if (
                          (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""),
                          (i[r] = e),
                          ++a == o)
                        ) {
                          n = me(t.doc, n);
                          var u = {
                            from: n,
                            to: n,
                            text: t.doc.splitLines(
                              i.join(t.doc.lineSeparator())
                            ),
                            origin: "paste",
                          };
                          Nn(t.doc, u), xe(t.doc, fe(n, Zi(u)));
                        }
                      })),
                        s.readAsText(e);
                    }
                  },
                  u = 0;
                o > u;
                ++u
              )
                s(r[u], u);
            else {
              if (t.state.draggingText && t.doc.sel.contains(n) > -1)
                return (
                  t.state.draggingText(e),
                  void setTimeout(function () {
                    t.display.input.focus();
                  }, 20)
                );
              try {
                var i = e.dataTransfer.getData("Text");
                if (i) {
                  if (t.state.draggingText && !(_i ? e.altKey : e.ctrlKey))
                    var l = t.listSelections();
                  if ((ke(t.doc, fe(n, n)), l))
                    for (var u = 0; u < l.length; ++u)
                      On(t.doc, "", l[u].anchor, l[u].head, "drag");
                  t.replaceSelection(i, "around", "paste"),
                    t.display.input.focus();
                }
              } catch (e) {}
            }
        }
      }
      function en(e, t) {
        if (Ci && (!e.state.draggingText || +new Date() - Yi < 100))
          return void Sa(t);
        if (
          !ko(e, t) &&
          !qt(e.display, t) &&
          (t.dataTransfer.setData("Text", e.getSelection()),
          t.dataTransfer.setDragImage && !xi)
        ) {
          var n = Ho("img", null, null, "position: fixed; left: 0; top: 0;");
          (n.src =
            "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
            wi &&
              ((n.width = n.height = 1),
              e.display.wrapper.appendChild(n),
              (n._top = n.offsetTop)),
            t.dataTransfer.setDragImage(n, 0, 0),
            wi && n.parentNode.removeChild(n);
        }
      }
      function tn(e, t) {
        var n = Yt(e, t);
        if (n) {
          var r = document.createDocumentFragment();
          Pe(e, n, r),
            e.display.dragCursor ||
              ((e.display.dragCursor = Ho(
                "div",
                null,
                "CodeMirror-cursors CodeMirror-dragcursors"
              )),
              e.display.lineSpace.insertBefore(
                e.display.dragCursor,
                e.display.cursorDiv
              )),
            qo(e.display.dragCursor, r);
        }
      }
      function nn(e) {
        e.display.dragCursor &&
          (e.display.lineSpace.removeChild(e.display.dragCursor),
          (e.display.dragCursor = null));
      }
      function rn(e, t) {
        Math.abs(e.doc.scrollTop - t) < 2 ||
          ((e.doc.scrollTop = t),
          vi || B(e, { top: t }),
          e.display.scroller.scrollTop != t &&
            (e.display.scroller.scrollTop = t),
          e.display.scrollbars.setScrollTop(t),
          vi && B(e),
          Ve(e, 100));
      }
      function on(e, t, n) {
        (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) ||
          ((t = Math.min(
            t,
            e.display.scroller.scrollWidth - e.display.scroller.clientWidth
          )),
          (e.doc.scrollLeft = t),
          D(e),
          e.display.scroller.scrollLeft != t &&
            (e.display.scroller.scrollLeft = t),
          e.display.scrollbars.setScrollLeft(t));
      }
      function an(e, t) {
        var n = Xi(t),
          r = n.x,
          o = n.y,
          i = e.display,
          a = i.scroller,
          s = a.scrollWidth > a.clientWidth,
          u = a.scrollHeight > a.clientHeight;
        if ((r && s) || (o && u)) {
          if (o && _i && Di)
            e: for (var l = t.target, c = i.view; l != a; l = l.parentNode)
              for (var p = 0; p < c.length; p++)
                if (c[p].node == l) {
                  e.display.currentWheelTarget = l;
                  break e;
                }
          if (r && !vi && !wi && null != Gi)
            return (
              o &&
                u &&
                rn(
                  e,
                  Math.max(
                    0,
                    Math.min(
                      a.scrollTop + o * Gi,
                      a.scrollHeight - a.clientHeight
                    )
                  )
                ),
              on(
                e,
                Math.max(
                  0,
                  Math.min(a.scrollLeft + r * Gi, a.scrollWidth - a.clientWidth)
                )
              ),
              (!o || (o && u)) && Na(t),
              void (i.wheelStartX = null)
            );
          if (o && null != Gi) {
            var d = o * Gi,
              f = e.doc.scrollTop,
              h = f + i.wrapper.clientHeight;
            0 > d
              ? (f = Math.max(0, f + d - 50))
              : (h = Math.min(e.doc.height, h + d + 50)),
              B(e, { top: f, bottom: h });
          }
          20 > Ki &&
            (null == i.wheelStartX
              ? ((i.wheelStartX = a.scrollLeft),
                (i.wheelStartY = a.scrollTop),
                (i.wheelDX = r),
                (i.wheelDY = o),
                setTimeout(function () {
                  if (null != i.wheelStartX) {
                    var e = a.scrollLeft - i.wheelStartX,
                      t = a.scrollTop - i.wheelStartY,
                      n =
                        (t && i.wheelDY && t / i.wheelDY) ||
                        (e && i.wheelDX && e / i.wheelDX);
                    (i.wheelStartX = i.wheelStartY = null),
                      n && ((Gi = (Gi * Ki + n) / (Ki + 1)), ++Ki);
                  }
                }, 200))
              : ((i.wheelDX += r), (i.wheelDY += o)));
        }
      }
      function sn(e, t, n) {
        if ("string" == typeof t && ((t = la[t]), !t)) return !1;
        e.display.input.ensurePolled();
        var r = e.display.shift,
          o = !1;
        try {
          e.isReadOnly() && (e.state.suppressEdits = !0),
            n && (e.display.shift = !1),
            (o = t(e) != Ia);
        } finally {
          (e.display.shift = r), (e.state.suppressEdits = !1);
        }
        return o;
      }
      function un(e, t, n) {
        for (var r = 0; r < e.state.keyMaps.length; r++) {
          var o = pa(t, e.state.keyMaps[r], n, e);
          if (o) return o;
        }
        return (
          (e.options.extraKeys && pa(t, e.options.extraKeys, n, e)) ||
          pa(t, e.options.keyMap, n, e)
        );
      }
      function ln(e, t, n, r) {
        var o = e.state.keySeq;
        if (o) {
          if (da(t)) return "handled";
          $i.set(50, function () {
            e.state.keySeq == o &&
              ((e.state.keySeq = null), e.display.input.reset());
          }),
            (t = o + " " + t);
        }
        var i = un(e, t, r);
        return (
          "multi" == i && (e.state.keySeq = t),
          "handled" == i && xo(e, "keyHandled", e, t, n),
          ("handled" != i && "multi" != i) || (Na(n), Re(e)),
          o && !i && /\'$/.test(t) ? (Na(n), !0) : !!i
        );
      }
      function cn(e, t) {
        var n = fa(t, !0);
        return n
          ? t.shiftKey && !e.state.keySeq
            ? ln(e, "Shift-" + n, t, function (t) {
                return sn(e, t, !0);
              }) ||
              ln(e, n, t, function (t) {
                return ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion)
                  ? sn(e, t)
                  : void 0;
              })
            : ln(e, n, t, function (t) {
                return sn(e, t);
              })
          : !1;
      }
      function pn(e, t, n) {
        return ln(e, "'" + n + "'", t, function (t) {
          return sn(e, t, !0);
        });
      }
      function dn(e) {
        var t = this;
        if (((t.curOp.focus = Yo()), !ko(t, e))) {
          Ci && 11 > Ai && 27 == e.keyCode && (e.returnValue = !1);
          var n = e.keyCode;
          t.display.shift = 16 == n || e.shiftKey;
          var r = cn(t, e);
          wi &&
            ((Qi = r ? n : null),
            !r &&
              88 == n &&
              !ns &&
              (_i ? e.metaKey : e.ctrlKey) &&
              t.replaceSelection("", null, "cut")),
            18 != n ||
              /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) ||
              fn(t);
        }
      }
      function fn(e) {
        function t(e) {
          (18 != e.keyCode && e.altKey) ||
            ($a(n, "CodeMirror-crosshair"),
            Ma(document, "keyup", t),
            Ma(document, "mouseover", t));
        }
        var n = e.display.lineDiv;
        Qa(n, "CodeMirror-crosshair"),
          Ba(document, "keyup", t),
          Ba(document, "mouseover", t);
      }
      function hn(e) {
        16 == e.keyCode && (this.doc.sel.shift = !1), ko(this, e);
      }
      function mn(e) {
        var t = this;
        if (
          !(
            qt(t.display, e) ||
            ko(t, e) ||
            (e.ctrlKey && !e.altKey) ||
            (_i && e.metaKey)
          )
        ) {
          var n = e.keyCode,
            r = e.charCode;
          if (wi && n == Qi) return (Qi = null), void Na(e);
          if (!wi || (e.which && !(e.which < 10)) || !cn(t, e)) {
            var o = String.fromCharCode(null == r ? n : r);
            pn(t, e, o) || t.display.input.onKeyPress(e);
          }
        }
      }
      function vn(e) {
        (e.state.delayingBlurEvent = !0),
          setTimeout(function () {
            e.state.delayingBlurEvent &&
              ((e.state.delayingBlurEvent = !1), yn(e));
          }, 100);
      }
      function gn(e) {
        e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
          "nocursor" != e.options.readOnly &&
            (e.state.focused ||
              (Oa(e, "focus", e),
              (e.state.focused = !0),
              Qa(e.display.wrapper, "CodeMirror-focused"),
              e.curOp ||
                e.display.selForContextMenu == e.doc.sel ||
                (e.display.input.reset(),
                Di &&
                  setTimeout(function () {
                    e.display.input.reset(!0);
                  }, 20)),
              e.display.input.receivedFocus()),
            Re(e));
      }
      function yn(e) {
        e.state.delayingBlurEvent ||
          (e.state.focused &&
            (Oa(e, "blur", e),
            (e.state.focused = !1),
            $a(e.display.wrapper, "CodeMirror-focused")),
          clearInterval(e.display.blinker),
          setTimeout(function () {
            e.state.focused || (e.display.shift = !1);
          }, 150));
      }
      function Cn(e, t) {
        qt(e.display, t) ||
          An(e, t) ||
          ko(e, t, "contextmenu") ||
          e.display.input.onContextMenu(t);
      }
      function An(e, t) {
        return Bo(e, "gutterContextMenu")
          ? Qt(e, t, "gutterContextMenu", !1)
          : !1;
      }
      function Dn(e, t) {
        if (Ri(e, t.from) < 0) return e;
        if (Ri(e, t.to) <= 0) return Zi(t);
        var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
          r = e.ch;
        return e.line == t.to.line && (r += Zi(t).ch - t.to.ch), Li(n, r);
      }
      function bn(e, t) {
        for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
          var o = e.sel.ranges[r];
          n.push(new pe(Dn(o.anchor, t), Dn(o.head, t)));
        }
        return de(n, e.sel.primIndex);
      }
      function En(e, t, n) {
        return e.line == t.line
          ? Li(n.line, e.ch - t.ch + n.ch)
          : Li(n.line + (e.line - t.line), e.ch);
      }
      function wn(e, t, n) {
        for (var r = [], o = Li(e.first, 0), i = o, a = 0; a < t.length; a++) {
          var s = t[a],
            u = En(s.from, o, i),
            l = En(Zi(s), o, i);
          if (((o = s.to), (i = l), "around" == n)) {
            var c = e.sel.ranges[a],
              p = Ri(c.head, c.anchor) < 0;
            r[a] = new pe(p ? l : u, p ? u : l);
          } else r[a] = new pe(u, u);
        }
        return new ce(r, e.sel.primIndex);
      }
      function xn(e, t, n) {
        var r = {
          canceled: !1,
          from: t.from,
          to: t.to,
          text: t.text,
          origin: t.origin,
          cancel: function () {
            this.canceled = !0;
          },
        };
        return (
          n &&
            (r.update = function (t, n, r, o) {
              t && (this.from = me(e, t)),
                n && (this.to = me(e, n)),
                r && (this.text = r),
                void 0 !== o && (this.origin = o);
            }),
          Oa(e, "beforeChange", e, r),
          e.cm && Oa(e.cm, "beforeChange", e.cm, r),
          r.canceled
            ? null
            : { from: r.from, to: r.to, text: r.text, origin: r.origin }
        );
      }
      function Nn(e, t, n) {
        if (e.cm) {
          if (!e.cm.curOp) return _t(e.cm, Nn)(e, t, n);
          if (e.cm.state.suppressEdits) return;
        }
        if (
          !(Bo(e, "beforeChange") || (e.cm && Bo(e.cm, "beforeChange"))) ||
          (t = xn(e, t, !0))
        ) {
          var r = Ii && !n && ur(e, t.from, t.to);
          if (r)
            for (var o = r.length - 1; o >= 0; --o)
              kn(e, { from: r[o].from, to: r[o].to, text: o ? [""] : t.text });
          else kn(e, t);
        }
      }
      function kn(e, t) {
        if (1 != t.text.length || "" != t.text[0] || 0 != Ri(t.from, t.to)) {
          var n = bn(e, t);
          lo(e, t, n, e.cm ? e.cm.curOp.id : NaN), _n(e, t, n, ir(e, t));
          var r = [];
          Xr(e, function (e, n) {
            n ||
              -1 != To(r, e.history) ||
              (Ao(e.history, t), r.push(e.history)),
              _n(e, t, null, ir(e, t));
          });
        }
      }
      function Sn(e, t, n) {
        if (!e.cm || !e.cm.state.suppressEdits) {
          for (
            var r,
              o = e.history,
              i = e.sel,
              a = "undo" == t ? o.done : o.undone,
              s = "undo" == t ? o.undone : o.done,
              u = 0;
            u < a.length &&
            ((r = a[u]), n ? !r.ranges || r.equals(e.sel) : r.ranges);
            u++
          );
          if (u != a.length) {
            for (
              o.lastOrigin = o.lastSelOrigin = null;
              (r = a.pop()), r.ranges;

            ) {
              if ((fo(r, s), n && !r.equals(e.sel)))
                return void Ne(e, r, { clearRedo: !1 });
              i = r;
            }
            var l = [];
            fo(i, s),
              s.push({ changes: l, generation: o.generation }),
              (o.generation = r.generation || ++o.maxGeneration);
            for (
              var c =
                  Bo(e, "beforeChange") || (e.cm && Bo(e.cm, "beforeChange")),
                u = r.changes.length - 1;
              u >= 0;
              --u
            ) {
              var p = r.changes[u];
              if (((p.origin = t), c && !xn(e, p, !1)))
                return void (a.length = 0);
              l.push(ao(e, p));
              var d = u ? bn(e, p) : Fo(a);
              _n(e, p, d, sr(e, p)),
                !u && e.cm && e.cm.scrollIntoView({ from: p.from, to: Zi(p) });
              var f = [];
              Xr(e, function (e, t) {
                t ||
                  -1 != To(f, e.history) ||
                  (Ao(e.history, p), f.push(e.history)),
                  _n(e, p, null, sr(e, p));
              });
            }
          }
        }
      }
      function Bn(e, t) {
        if (
          0 != t &&
          ((e.first += t),
          (e.sel = new ce(
            Io(e.sel.ranges, function (e) {
              return new pe(
                Li(e.anchor.line + t, e.anchor.ch),
                Li(e.head.line + t, e.head.ch)
              );
            }),
            e.sel.primIndex
          )),
          e.cm)
        ) {
          It(e.cm, e.first, e.first - t, t);
          for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)
            Pt(e.cm, r, "gutter");
        }
      }
      function _n(e, t, n, r) {
        if (e.cm && !e.cm.curOp) return _t(e.cm, _n)(e, t, n, r);
        if (t.to.line < e.first)
          return void Bn(e, t.text.length - 1 - (t.to.line - t.from.line));
        if (!(t.from.line > e.lastLine())) {
          if (t.from.line < e.first) {
            var o = t.text.length - 1 - (e.first - t.from.line);
            Bn(e, o),
              (t = {
                from: Li(e.first, 0),
                to: Li(t.to.line + o, t.to.ch),
                text: [Fo(t.text)],
                origin: t.origin,
              });
          }
          var i = e.lastLine();
          t.to.line > i &&
            (t = {
              from: t.from,
              to: Li(i, Qr(e, i).text.length),
              text: [t.text[0]],
              origin: t.origin,
            }),
            (t.removed = Zr(e, t.from, t.to)),
            n || (n = bn(e, t)),
            e.cm ? Mn(e.cm, t, r) : Yr(e, t, r),
            ke(e, n, Pa);
        }
      }
      function Mn(e, t, n) {
        var r = e.doc,
          o = e.display,
          a = t.from,
          s = t.to,
          u = !1,
          l = a.line;
        e.options.lineWrapping ||
          ((l = to(yr(Qr(r, a.line)))),
          r.iter(l, s.line + 1, function (e) {
            return e == o.maxLine ? ((u = !0), !0) : void 0;
          })),
          r.sel.contains(t.from, t.to) > -1 && So(e),
          Yr(r, t, n, i(e)),
          e.options.lineWrapping ||
            (r.iter(l, a.line + t.text.length, function (e) {
              var t = p(e);
              t > o.maxLineLength &&
                ((o.maxLine = e),
                (o.maxLineLength = t),
                (o.maxLineChanged = !0),
                (u = !1));
            }),
            u && (e.curOp.updateMaxLine = !0)),
          (r.frontier = Math.min(r.frontier, a.line)),
          Ve(e, 400);
        var c = t.text.length - (s.line - a.line) - 1;
        t.full
          ? It(e)
          : a.line != s.line || 1 != t.text.length || qr(e.doc, t)
          ? It(e, a.line, s.line + 1, c)
          : Pt(e, a.line, "text");
        var d = Bo(e, "changes"),
          f = Bo(e, "change");
        if (f || d) {
          var h = {
            from: a,
            to: s,
            text: t.text,
            removed: t.removed,
            origin: t.origin,
          };
          f && xo(e, "change", e, h),
            d && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(h);
        }
        e.display.selForContextMenu = null;
      }
      function On(e, t, n, r, o) {
        if ((r || (r = n), Ri(r, n) < 0)) {
          var i = r;
          (r = n), (n = i);
        }
        "string" == typeof t && (t = e.splitLines(t)),
          Nn(e, { from: n, to: r, text: t, origin: o });
      }
      function Fn(e, t) {
        if (!ko(e, "scrollCursorIntoView")) {
          var n = e.display,
            r = n.sizer.getBoundingClientRect(),
            o = null;
          if (
            (t.top + r.top < 0
              ? (o = !0)
              : t.bottom + r.top >
                  (window.innerHeight ||
                    document.documentElement.clientHeight) && (o = !1),
            null != o && !ki)
          ) {
            var i = Ho(
              "div",
              "​",
              null,
              "position: absolute; top: " +
                (t.top - n.viewOffset - He(e.display)) +
                "px; height: " +
                (t.bottom - t.top + Ye(e) + n.barHeight) +
                "px; left: " +
                t.left +
                "px; width: 2px;"
            );
            e.display.lineSpace.appendChild(i),
              i.scrollIntoView(o),
              e.display.lineSpace.removeChild(i);
          }
        }
      }
      function Tn(e, t, n, r) {
        null == r && (r = 0);
        for (var o = 0; 5 > o; o++) {
          var i = !1,
            a = ft(e, t),
            s = n && n != t ? ft(e, n) : a,
            u = Pn(
              e,
              Math.min(a.left, s.left),
              Math.min(a.top, s.top) - r,
              Math.max(a.left, s.left),
              Math.max(a.bottom, s.bottom) + r
            ),
            l = e.doc.scrollTop,
            c = e.doc.scrollLeft;
          if (
            (null != u.scrollTop &&
              (rn(e, u.scrollTop),
              Math.abs(e.doc.scrollTop - l) > 1 && (i = !0)),
            null != u.scrollLeft &&
              (on(e, u.scrollLeft),
              Math.abs(e.doc.scrollLeft - c) > 1 && (i = !0)),
            !i)
          )
            break;
        }
        return a;
      }
      function In(e, t, n, r, o) {
        var i = Pn(e, t, n, r, o);
        null != i.scrollTop && rn(e, i.scrollTop),
          null != i.scrollLeft && on(e, i.scrollLeft);
      }
      function Pn(e, t, n, r, o) {
        var i = e.display,
          a = yt(e.display);
        0 > n && (n = 0);
        var s =
            e.curOp && null != e.curOp.scrollTop
              ? e.curOp.scrollTop
              : i.scroller.scrollTop,
          u = Ge(e),
          l = {};
        o - n > u && (o = n + u);
        var c = e.doc.height + ze(i),
          p = a > n,
          d = o > c - a;
        if (s > n) l.scrollTop = p ? 0 : n;
        else if (o > s + u) {
          var f = Math.min(n, (d ? c : o) - u);
          f != s && (l.scrollTop = f);
        }
        var h =
            e.curOp && null != e.curOp.scrollLeft
              ? e.curOp.scrollLeft
              : i.scroller.scrollLeft,
          m = Ke(e) - (e.options.fixedGutter ? i.gutters.offsetWidth : 0),
          v = r - t > m;
        return (
          v && (r = t + m),
          10 > t
            ? (l.scrollLeft = 0)
            : h > t
            ? (l.scrollLeft = Math.max(0, t - (v ? 0 : 10)))
            : r > m + h - 3 && (l.scrollLeft = r + (v ? 0 : 10) - m),
          l
        );
      }
      function Ln(e, t, n) {
        (null == t && null == n) || Vn(e),
          null != t &&
            (e.curOp.scrollLeft =
              (null == e.curOp.scrollLeft
                ? e.doc.scrollLeft
                : e.curOp.scrollLeft) + t),
          null != n &&
            (e.curOp.scrollTop =
              (null == e.curOp.scrollTop
                ? e.doc.scrollTop
                : e.curOp.scrollTop) + n);
      }
      function Rn(e) {
        Vn(e);
        var t = e.getCursor(),
          n = t,
          r = t;
        e.options.lineWrapping ||
          ((n = t.ch ? Li(t.line, t.ch - 1) : t), (r = Li(t.line, t.ch + 1))),
          (e.curOp.scrollToPos = {
            from: n,
            to: r,
            margin: e.options.cursorScrollMargin,
            isCursor: !0,
          });
      }
      function Vn(e) {
        var t = e.curOp.scrollToPos;
        if (t) {
          e.curOp.scrollToPos = null;
          var n = ht(e, t.from),
            r = ht(e, t.to),
            o = Pn(
              e,
              Math.min(n.left, r.left),
              Math.min(n.top, r.top) - t.margin,
              Math.max(n.right, r.right),
              Math.max(n.bottom, r.bottom) + t.margin
            );
          e.scrollTo(o.scrollLeft, o.scrollTop);
        }
      }
      function Un(e, t, n, r) {
        var o,
          i = e.doc;
        null == n && (n = "add"),
          "smart" == n && (i.mode.indent ? (o = je(e, t)) : (n = "prev"));
        var a = e.options.tabSize,
          s = Qr(i, t),
          u = Va(s.text, null, a);
        s.stateAfter && (s.stateAfter = null);
        var l,
          c = s.text.match(/^\s*/)[0];
        if (r || /\S/.test(s.text)) {
          if (
            "smart" == n &&
            ((l = i.mode.indent(o, s.text.slice(c.length), s.text)),
            l == Ia || l > 150)
          ) {
            if (!r) return;
            n = "prev";
          }
        } else (l = 0), (n = "not");
        "prev" == n
          ? (l = t > i.first ? Va(Qr(i, t - 1).text, null, a) : 0)
          : "add" == n
          ? (l = u + e.options.indentUnit)
          : "subtract" == n
          ? (l = u - e.options.indentUnit)
          : "number" == typeof n && (l = u + n),
          (l = Math.max(0, l));
        var p = "",
          d = 0;
        if (e.options.indentWithTabs)
          for (var f = Math.floor(l / a); f; --f) (d += a), (p += "	");
        if ((l > d && (p += Oo(l - d)), p != c))
          return (
            On(i, p, Li(t, 0), Li(t, c.length), "+input"),
            (s.stateAfter = null),
            !0
          );
        for (var f = 0; f < i.sel.ranges.length; f++) {
          var h = i.sel.ranges[f];
          if (h.head.line == t && h.head.ch < c.length) {
            var d = Li(t, c.length);
            be(i, f, new pe(d, d));
            break;
          }
        }
      }
      function Wn(e, t, n, r) {
        var o = t,
          i = t;
        return (
          "number" == typeof t ? (i = Qr(e, he(e, t))) : (o = to(t)),
          null == o ? null : (r(i, o) && e.cm && Pt(e.cm, o, n), i)
        );
      }
      function jn(e, t) {
        for (var n = e.doc.sel.ranges, r = [], o = 0; o < n.length; o++) {
          for (var i = t(n[o]); r.length && Ri(i.from, Fo(r).to) <= 0; ) {
            var a = r.pop();
            if (Ri(a.from, i.from) < 0) {
              i.from = a.from;
              break;
            }
          }
          r.push(i);
        }
        Bt(e, function () {
          for (var t = r.length - 1; t >= 0; t--)
            On(e.doc, "", r[t].from, r[t].to, "+delete");
          Rn(e);
        });
      }
      function Hn(e, t, n, r, o) {
        function i() {
          var t = s + n;
          return t < e.first || t >= e.first + e.size
            ? !1
            : ((s = t), (c = Qr(e, t)));
        }
        function a(e) {
          var t = (o ? di : fi)(c, u, n, !0);
          if (null == t) {
            if (e || !i()) return !1;
            u = o ? (0 > n ? ii : oi)(c) : 0 > n ? c.text.length : 0;
          } else u = t;
          return !0;
        }
        var s = t.line,
          u = t.ch,
          l = n,
          c = Qr(e, s);
        if ("char" == r) a();
        else if ("column" == r) a(!0);
        else if ("word" == r || "group" == r)
          for (
            var p = null,
              d = "group" == r,
              f = e.cm && e.cm.getHelper(t, "wordChars"),
              h = !0;
            !(0 > n) || a(!h);
            h = !1
          ) {
            var m = c.text.charAt(u) || "\n",
              v = Uo(m, f)
                ? "w"
                : d && "\n" == m
                ? "n"
                : !d || /\s/.test(m)
                ? null
                : "p";
            if ((!d || h || v || (v = "s"), p && p != v)) {
              0 > n && ((n = 1), a());
              break;
            }
            if ((v && (p = v), n > 0 && !a(!h))) break;
          }
        var g = Oe(e, Li(s, u), t, l, !0);
        return Ri(t, g) || (g.hitSide = !0), g;
      }
      function zn(e, t, n, r) {
        var o,
          i = e.doc,
          a = t.left;
        if ("page" == r) {
          var s = Math.min(
            e.display.wrapper.clientHeight,
            window.innerHeight || document.documentElement.clientHeight
          );
          o = t.top + n * (s - (0 > n ? 1.5 : 0.5) * yt(e.display));
        } else "line" == r && (o = n > 0 ? t.bottom + 3 : t.top - 3);
        for (;;) {
          var u = vt(e, a, o);
          if (!u.outside) break;
          if (0 > n ? 0 >= o : o >= i.height) {
            u.hitSide = !0;
            break;
          }
          o += 5 * n;
        }
        return u;
      }
      function qn(t, n, r, o) {
        (e.defaults[t] = n),
          r &&
            (ea[t] = o
              ? function (e, t, n) {
                  n != ta && r(e, t, n);
                }
              : r);
      }
      function Yn(e) {
        for (
          var t, n, r, o, i = e.split(/-(?!$)/), e = i[i.length - 1], a = 0;
          a < i.length - 1;
          a++
        ) {
          var s = i[a];
          if (/^(cmd|meta|m)$/i.test(s)) o = !0;
          else if (/^a(lt)?$/i.test(s)) t = !0;
          else if (/^(c|ctrl|control)$/i.test(s)) n = !0;
          else {
            if (!/^s(hift)$/i.test(s))
              throw new Error("Unrecognized modifier name: " + s);
            r = !0;
          }
        }
        return (
          t && (e = "Alt-" + e),
          n && (e = "Ctrl-" + e),
          o && (e = "Cmd-" + e),
          r && (e = "Shift-" + e),
          e
        );
      }
      function Kn(e) {
        return "string" == typeof e ? ca[e] : e;
      }
      function Gn(e, t, n, r, o) {
        if (r && r.shared) return Xn(e, t, n, r, o);
        if (e.cm && !e.cm.curOp) return _t(e.cm, Gn)(e, t, n, r, o);
        var i = new va(e, o),
          a = Ri(t, n);
        if ((r && Ro(r, i, !1), a > 0 || (0 == a && i.clearWhenEmpty !== !1)))
          return i;
        if (
          (i.replacedWith &&
            ((i.collapsed = !0),
            (i.widgetNode = Ho("span", [i.replacedWith], "CodeMirror-widget")),
            r.handleMouseEvents ||
              i.widgetNode.setAttribute("cm-ignore-events", "true"),
            r.insertLeft && (i.widgetNode.insertLeft = !0)),
          i.collapsed)
        ) {
          if (
            gr(e, t.line, t, n, i) ||
            (t.line != n.line && gr(e, n.line, t, n, i))
          )
            throw new Error(
              "Inserting collapsed marker partially overlapping an existing one"
            );
          Pi = !0;
        }
        i.addToHistory &&
          lo(e, { from: t, to: n, origin: "markText" }, e.sel, NaN);
        var s,
          u = t.line,
          l = e.cm;
        if (
          (e.iter(u, n.line + 1, function (e) {
            l &&
              i.collapsed &&
              !l.options.lineWrapping &&
              yr(e) == l.display.maxLine &&
              (s = !0),
              i.collapsed && u != t.line && eo(e, 0),
              nr(
                e,
                new Jn(i, u == t.line ? t.ch : null, u == n.line ? n.ch : null)
              ),
              ++u;
          }),
          i.collapsed &&
            e.iter(t.line, n.line + 1, function (t) {
              br(e, t) && eo(t, 0);
            }),
          i.clearOnEnter &&
            Ba(i, "beforeCursorEnter", function () {
              i.clear();
            }),
          i.readOnly &&
            ((Ii = !0),
            (e.history.done.length || e.history.undone.length) &&
              e.clearHistory()),
          i.collapsed && ((i.id = ++ma), (i.atomic = !0)),
          l)
        ) {
          if ((s && (l.curOp.updateMaxLine = !0), i.collapsed))
            It(l, t.line, n.line + 1);
          else if (
            i.className ||
            i.title ||
            i.startStyle ||
            i.endStyle ||
            i.css
          )
            for (var c = t.line; c <= n.line; c++) Pt(l, c, "text");
          i.atomic && Be(l.doc), xo(l, "markerAdded", l, i);
        }
        return i;
      }
      function Xn(e, t, n, r, o) {
        (r = Ro(r)), (r.shared = !1);
        var i = [Gn(e, t, n, r, o)],
          a = i[0],
          s = r.widgetNode;
        return (
          Xr(e, function (e) {
            s && (r.widgetNode = s.cloneNode(!0)),
              i.push(Gn(e, me(e, t), me(e, n), r, o));
            for (var u = 0; u < e.linked.length; ++u)
              if (e.linked[u].isParent) return;
            a = Fo(i);
          }),
          new ga(i, a)
        );
      }
      function $n(e) {
        return e.findMarks(
          Li(e.first, 0),
          e.clipPos(Li(e.lastLine())),
          function (e) {
            return e.parent;
          }
        );
      }
      function Qn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n],
            o = r.find(),
            i = e.clipPos(o.from),
            a = e.clipPos(o.to);
          if (Ri(i, a)) {
            var s = Gn(e, i, a, r.primary, r.primary.type);
            r.markers.push(s), (s.parent = r);
          }
        }
      }
      function Zn(e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t],
            r = [n.primary.doc];
          Xr(n.primary.doc, function (e) {
            r.push(e);
          });
          for (var o = 0; o < n.markers.length; o++) {
            var i = n.markers[o];
            -1 == To(r, i.doc) && ((i.parent = null), n.markers.splice(o--, 1));
          }
        }
      }
      function Jn(e, t, n) {
        (this.marker = e), (this.from = t), (this.to = n);
      }
      function er(e, t) {
        if (e)
          for (var n = 0; n < e.length; ++n) {
            var r = e[n];
            if (r.marker == t) return r;
          }
      }
      function tr(e, t) {
        for (var n, r = 0; r < e.length; ++r)
          e[r] != t && (n || (n = [])).push(e[r]);
        return n;
      }
      function nr(e, t) {
        (e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t]),
          t.marker.attachLine(e);
      }
      function rr(e, t, n) {
        if (e)
          for (var r, o = 0; o < e.length; ++o) {
            var i = e[o],
              a = i.marker,
              s =
                null == i.from || (a.inclusiveLeft ? i.from <= t : i.from < t);
            if (
              s ||
              (i.from == t &&
                "bookmark" == a.type &&
                (!n || !i.marker.insertLeft))
            ) {
              var u = null == i.to || (a.inclusiveRight ? i.to >= t : i.to > t);
              (r || (r = [])).push(new Jn(a, i.from, u ? null : i.to));
            }
          }
        return r;
      }
      function or(e, t, n) {
        if (e)
          for (var r, o = 0; o < e.length; ++o) {
            var i = e[o],
              a = i.marker,
              s = null == i.to || (a.inclusiveRight ? i.to >= t : i.to > t);
            if (
              s ||
              (i.from == t &&
                "bookmark" == a.type &&
                (!n || i.marker.insertLeft))
            ) {
              var u =
                null == i.from || (a.inclusiveLeft ? i.from <= t : i.from < t);
              (r || (r = [])).push(
                new Jn(a, u ? null : i.from - t, null == i.to ? null : i.to - t)
              );
            }
          }
        return r;
      }
      function ir(e, t) {
        if (t.full) return null;
        var n = ge(e, t.from.line) && Qr(e, t.from.line).markedSpans,
          r = ge(e, t.to.line) && Qr(e, t.to.line).markedSpans;
        if (!n && !r) return null;
        var o = t.from.ch,
          i = t.to.ch,
          a = 0 == Ri(t.from, t.to),
          s = rr(n, o, a),
          u = or(r, i, a),
          l = 1 == t.text.length,
          c = Fo(t.text).length + (l ? o : 0);
        if (s)
          for (var p = 0; p < s.length; ++p) {
            var d = s[p];
            if (null == d.to) {
              var f = er(u, d.marker);
              f ? l && (d.to = null == f.to ? null : f.to + c) : (d.to = o);
            }
          }
        if (u)
          for (var p = 0; p < u.length; ++p) {
            var d = u[p];
            if ((null != d.to && (d.to += c), null == d.from)) {
              var f = er(s, d.marker);
              f || ((d.from = c), l && (s || (s = [])).push(d));
            } else (d.from += c), l && (s || (s = [])).push(d);
          }
        s && (s = ar(s)), u && u != s && (u = ar(u));
        var h = [s];
        if (!l) {
          var m,
            v = t.text.length - 2;
          if (v > 0 && s)
            for (var p = 0; p < s.length; ++p)
              null == s[p].to &&
                (m || (m = [])).push(new Jn(s[p].marker, null, null));
          for (var p = 0; v > p; ++p) h.push(m);
          h.push(u);
        }
        return h;
      }
      function ar(e) {
        for (var t = 0; t < e.length; ++t) {
          var n = e[t];
          null != n.from &&
            n.from == n.to &&
            n.marker.clearWhenEmpty !== !1 &&
            e.splice(t--, 1);
        }
        return e.length ? e : null;
      }
      function sr(e, t) {
        var n = vo(e, t),
          r = ir(e, t);
        if (!n) return r;
        if (!r) return n;
        for (var o = 0; o < n.length; ++o) {
          var i = n[o],
            a = r[o];
          if (i && a)
            e: for (var s = 0; s < a.length; ++s) {
              for (var u = a[s], l = 0; l < i.length; ++l)
                if (i[l].marker == u.marker) continue e;
              i.push(u);
            }
          else a && (n[o] = a);
        }
        return n;
      }
      function ur(e, t, n) {
        var r = null;
        if (
          (e.iter(t.line, n.line + 1, function (e) {
            if (e.markedSpans)
              for (var t = 0; t < e.markedSpans.length; ++t) {
                var n = e.markedSpans[t].marker;
                !n.readOnly || (r && -1 != To(r, n)) || (r || (r = [])).push(n);
              }
          }),
          !r)
        )
          return null;
        for (var o = [{ from: t, to: n }], i = 0; i < r.length; ++i)
          for (var a = r[i], s = a.find(0), u = 0; u < o.length; ++u) {
            var l = o[u];
            if (!(Ri(l.to, s.from) < 0 || Ri(l.from, s.to) > 0)) {
              var c = [u, 1],
                p = Ri(l.from, s.from),
                d = Ri(l.to, s.to);
              (0 > p || (!a.inclusiveLeft && !p)) &&
                c.push({ from: l.from, to: s.from }),
                (d > 0 || (!a.inclusiveRight && !d)) &&
                  c.push({ from: s.to, to: l.to }),
                o.splice.apply(o, c),
                (u += c.length - 1);
            }
          }
        return o;
      }
      function lr(e) {
        var t = e.markedSpans;
        if (t) {
          for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
          e.markedSpans = null;
        }
      }
      function cr(e, t) {
        if (t) {
          for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
          e.markedSpans = t;
        }
      }
      function pr(e) {
        return e.inclusiveLeft ? -1 : 0;
      }
      function dr(e) {
        return e.inclusiveRight ? 1 : 0;
      }
      function fr(e, t) {
        var n = e.lines.length - t.lines.length;
        if (0 != n) return n;
        var r = e.find(),
          o = t.find(),
          i = Ri(r.from, o.from) || pr(e) - pr(t);
        if (i) return -i;
        var a = Ri(r.to, o.to) || dr(e) - dr(t);
        return a ? a : t.id - e.id;
      }
      function hr(e, t) {
        var n,
          r = Pi && e.markedSpans;
        if (r)
          for (var o, i = 0; i < r.length; ++i)
            (o = r[i]),
              o.marker.collapsed &&
                null == (t ? o.from : o.to) &&
                (!n || fr(n, o.marker) < 0) &&
                (n = o.marker);
        return n;
      }
      function mr(e) {
        return hr(e, !0);
      }
      function vr(e) {
        return hr(e, !1);
      }
      function gr(e, t, n, r, o) {
        var i = Qr(e, t),
          a = Pi && i.markedSpans;
        if (a)
          for (var s = 0; s < a.length; ++s) {
            var u = a[s];
            if (u.marker.collapsed) {
              var l = u.marker.find(0),
                c = Ri(l.from, n) || pr(u.marker) - pr(o),
                p = Ri(l.to, r) || dr(u.marker) - dr(o);
              if (
                !((c >= 0 && 0 >= p) || (0 >= c && p >= 0)) &&
                ((0 >= c &&
                  (Ri(l.to, n) > 0 ||
                    (u.marker.inclusiveRight && o.inclusiveLeft))) ||
                  (c >= 0 &&
                    (Ri(l.from, r) < 0 ||
                      (u.marker.inclusiveLeft && o.inclusiveRight))))
              )
                return !0;
            }
          }
      }
      function yr(e) {
        for (var t; (t = mr(e)); ) e = t.find(-1, !0).line;
        return e;
      }
      function Cr(e) {
        for (var t, n; (t = vr(e)); )
          (e = t.find(1, !0).line), (n || (n = [])).push(e);
        return n;
      }
      function Ar(e, t) {
        var n = Qr(e, t),
          r = yr(n);
        return n == r ? t : to(r);
      }
      function Dr(e, t) {
        if (t > e.lastLine()) return t;
        var n,
          r = Qr(e, t);
        if (!br(e, r)) return t;
        for (; (n = vr(r)); ) r = n.find(1, !0).line;
        return to(r) + 1;
      }
      function br(e, t) {
        var n = Pi && t.markedSpans;
        if (n)
          for (var r, o = 0; o < n.length; ++o)
            if (((r = n[o]), r.marker.collapsed)) {
              if (null == r.from) return !0;
              if (
                !r.marker.widgetNode &&
                0 == r.from &&
                r.marker.inclusiveLeft &&
                Er(e, t, r)
              )
                return !0;
            }
      }
      function Er(e, t, n) {
        if (null == n.to) {
          var r = n.marker.find(1, !0);
          return Er(e, r.line, er(r.line.markedSpans, n.marker));
        }
        if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
        for (var o, i = 0; i < t.markedSpans.length; ++i)
          if (
            ((o = t.markedSpans[i]),
            o.marker.collapsed &&
              !o.marker.widgetNode &&
              o.from == n.to &&
              (null == o.to || o.to != n.from) &&
              (o.marker.inclusiveLeft || n.marker.inclusiveRight) &&
              Er(e, t, o))
          )
            return !0;
      }
      function wr(e, t, n) {
        ro(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) &&
          Ln(e, null, n);
      }
      function xr(e) {
        if (null != e.height) return e.height;
        var t = e.doc.cm;
        if (!t) return 0;
        if (!Ka(document.body, e.node)) {
          var n = "position: relative;";
          e.coverGutter &&
            (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"),
            e.noHScroll &&
              (n += "width: " + t.display.wrapper.clientWidth + "px;"),
            qo(t.display.measure, Ho("div", [e.node], null, n));
        }
        return (e.height = e.node.parentNode.offsetHeight);
      }
      function Nr(e, t, n, r) {
        var o = new ya(e, n, r),
          i = e.cm;
        return (
          i && o.noHScroll && (i.display.alignWidgets = !0),
          Wn(e, t, "widget", function (t) {
            var n = t.widgets || (t.widgets = []);
            if (
              (null == o.insertAt
                ? n.push(o)
                : n.splice(
                    Math.min(n.length - 1, Math.max(0, o.insertAt)),
                    0,
                    o
                  ),
              (o.line = t),
              i && !br(e, t))
            ) {
              var r = ro(t) < e.scrollTop;
              eo(t, t.height + xr(o)),
                r && Ln(i, null, o.height),
                (i.curOp.forceUpdate = !0);
            }
            return !0;
          }),
          o
        );
      }
      function kr(e, t, n, r) {
        (e.text = t),
          e.stateAfter && (e.stateAfter = null),
          e.styles && (e.styles = null),
          null != e.order && (e.order = null),
          lr(e),
          cr(e, n);
        var o = r ? r(e) : 1;
        o != e.height && eo(e, o);
      }
      function Sr(e) {
        (e.parent = null), lr(e);
      }
      function Br(e, t) {
        if (e)
          for (;;) {
            var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!n) break;
            e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
            var r = n[1] ? "bgClass" : "textClass";
            null == t[r]
              ? (t[r] = n[2])
              : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(t[r]) ||
                (t[r] += " " + n[2]);
          }
        return e;
      }
      function _r(t, n) {
        if (t.blankLine) return t.blankLine(n);
        if (t.innerMode) {
          var r = e.innerMode(t, n);
          return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0;
        }
      }
      function Mr(t, n, r, o) {
        for (var i = 0; 10 > i; i++) {
          o && (o[0] = e.innerMode(t, r).mode);
          var a = t.token(n, r);
          if (n.pos > n.start) return a;
        }
        throw new Error("Mode " + t.name + " failed to advance stream.");
      }
      function Or(e, t, n, r) {
        function o(e) {
          return {
            start: p.start,
            end: p.pos,
            string: p.current(),
            type: i || null,
            state: e ? sa(a.mode, c) : c,
          };
        }
        var i,
          a = e.doc,
          s = a.mode;
        t = me(a, t);
        var u,
          l = Qr(a, t.line),
          c = je(e, t.line, n),
          p = new ha(l.text, e.options.tabSize);
        for (r && (u = []); (r || p.pos < t.ch) && !p.eol(); )
          (p.start = p.pos), (i = Mr(s, p, c)), r && u.push(o(!0));
        return r ? u : o();
      }
      function Fr(e, t, n, r, o, i, a) {
        var s = n.flattenSpans;
        null == s && (s = e.options.flattenSpans);
        var u,
          l = 0,
          c = null,
          p = new ha(t, e.options.tabSize),
          d = e.options.addModeClass && [null];
        for ("" == t && Br(_r(n, r), i); !p.eol(); ) {
          if (
            (p.pos > e.options.maxHighlightLength
              ? ((s = !1),
                a && Pr(e, t, r, p.pos),
                (p.pos = t.length),
                (u = null))
              : (u = Br(Mr(n, p, r, d), i)),
            d)
          ) {
            var f = d[0].name;
            f && (u = "m-" + (u ? f + " " + u : f));
          }
          if (!s || c != u) {
            for (; l < p.start; ) (l = Math.min(p.start, l + 5e4)), o(l, c);
            c = u;
          }
          p.start = p.pos;
        }
        for (; l < p.pos; ) {
          var h = Math.min(p.pos, l + 5e4);
          o(h, c), (l = h);
        }
      }
      function Tr(e, t, n, r) {
        var o = [e.state.modeGen],
          i = {};
        Fr(
          e,
          t.text,
          e.doc.mode,
          n,
          function (e, t) {
            o.push(e, t);
          },
          i,
          r
        );
        for (var a = 0; a < e.state.overlays.length; ++a) {
          var s = e.state.overlays[a],
            u = 1,
            l = 0;
          Fr(
            e,
            t.text,
            s.mode,
            !0,
            function (e, t) {
              for (var n = u; e > l; ) {
                var r = o[u];
                r > e && o.splice(u, 1, e, o[u + 1], r),
                  (u += 2),
                  (l = Math.min(e, r));
              }
              if (t)
                if (s.opaque)
                  o.splice(n, u - n, e, "cm-overlay " + t), (u = n + 2);
                else
                  for (; u > n; n += 2) {
                    var i = o[n + 1];
                    o[n + 1] = (i ? i + " " : "") + "cm-overlay " + t;
                  }
            },
            i
          );
        }
        return { styles: o, classes: i.bgClass || i.textClass ? i : null };
      }
      function Ir(e, t, n) {
        if (!t.styles || t.styles[0] != e.state.modeGen) {
          var r = je(e, to(t)),
            o = Tr(
              e,
              t,
              t.text.length > e.options.maxHighlightLength
                ? sa(e.doc.mode, r)
                : r
            );
          (t.stateAfter = r),
            (t.styles = o.styles),
            o.classes
              ? (t.styleClasses = o.classes)
              : t.styleClasses && (t.styleClasses = null),
            n === e.doc.frontier && e.doc.frontier++;
        }
        return t.styles;
      }
      function Pr(e, t, n, r) {
        var o = e.doc.mode,
          i = new ha(t, e.options.tabSize);
        for (i.start = i.pos = r || 0, "" == t && _r(o, n); !i.eol(); )
          Mr(o, i, n), (i.start = i.pos);
      }
      function Lr(e, t) {
        if (!e || /^\s*$/.test(e)) return null;
        var n = t.addModeClass ? Da : Aa;
        return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"));
      }
      function Rr(e, t) {
        var n = Ho("span", null, null, Di ? "padding-right: .1px" : null),
          r = {
            pre: Ho("pre", [n], "CodeMirror-line"),
            content: n,
            col: 0,
            pos: 0,
            cm: e,
            splitSpaces: (Ci || Di) && e.getOption("lineWrapping"),
          };
        t.measure = {};
        for (var o = 0; o <= (t.rest ? t.rest.length : 0); o++) {
          var i,
            a = o ? t.rest[o - 1] : t.line;
          (r.pos = 0),
            (r.addToken = Ur),
            Jo(e.display.measure) &&
              (i = oo(a)) &&
              (r.addToken = jr(r.addToken, i)),
            (r.map = []);
          var s = t != e.display.externalMeasured && to(a);
          zr(a, r, Ir(e, a, s)),
            a.styleClasses &&
              (a.styleClasses.bgClass &&
                (r.bgClass = Go(a.styleClasses.bgClass, r.bgClass || "")),
              a.styleClasses.textClass &&
                (r.textClass = Go(
                  a.styleClasses.textClass,
                  r.textClass || ""
                ))),
            0 == r.map.length &&
              r.map.push(0, 0, r.content.appendChild(Zo(e.display.measure))),
            0 == o
              ? ((t.measure.map = r.map), (t.measure.cache = {}))
              : ((t.measure.maps || (t.measure.maps = [])).push(r.map),
                (t.measure.caches || (t.measure.caches = [])).push({}));
        }
        return (
          Di &&
            /\bcm-tab\b/.test(r.content.lastChild.className) &&
            (r.content.className = "cm-tab-wrap-hack"),
          Oa(e, "renderLine", e, t.line, r.pre),
          r.pre.className &&
            (r.textClass = Go(r.pre.className, r.textClass || "")),
          r
        );
      }
      function Vr(e) {
        var t = Ho("span", "•", "cm-invalidchar");
        return (
          (t.title = "\\u" + e.charCodeAt(0).toString(16)),
          t.setAttribute("aria-label", t.title),
          t
        );
      }
      function Ur(e, t, n, r, o, i, a) {
        if (t) {
          var s = e.splitSpaces ? t.replace(/ {3,}/g, Wr) : t,
            u = e.cm.state.specialChars,
            l = !1;
          if (u.test(t))
            for (var c = document.createDocumentFragment(), p = 0; ; ) {
              u.lastIndex = p;
              var d = u.exec(t),
                f = d ? d.index - p : t.length - p;
              if (f) {
                var h = document.createTextNode(s.slice(p, p + f));
                Ci && 9 > Ai
                  ? c.appendChild(Ho("span", [h]))
                  : c.appendChild(h),
                  e.map.push(e.pos, e.pos + f, h),
                  (e.col += f),
                  (e.pos += f);
              }
              if (!d) break;
              if (((p += f + 1), "	" == d[0])) {
                var m = e.cm.options.tabSize,
                  v = m - (e.col % m),
                  h = c.appendChild(Ho("span", Oo(v), "cm-tab"));
                h.setAttribute("role", "presentation"),
                  h.setAttribute("cm-text", "	"),
                  (e.col += v);
              } else if ("\r" == d[0] || "\n" == d[0]) {
                var h = c.appendChild(
                  Ho("span", "\r" == d[0] ? "␍" : "␤", "cm-invalidchar")
                );
                h.setAttribute("cm-text", d[0]), (e.col += 1);
              } else {
                var h = e.cm.options.specialCharPlaceholder(d[0]);
                h.setAttribute("cm-text", d[0]),
                  Ci && 9 > Ai
                    ? c.appendChild(Ho("span", [h]))
                    : c.appendChild(h),
                  (e.col += 1);
              }
              e.map.push(e.pos, e.pos + 1, h), e.pos++;
            }
          else {
            e.col += t.length;
            var c = document.createTextNode(s);
            e.map.push(e.pos, e.pos + t.length, c),
              Ci && 9 > Ai && (l = !0),
              (e.pos += t.length);
          }
          if (n || r || o || l || a) {
            var g = n || "";
            r && (g += r), o && (g += o);
            var y = Ho("span", [c], g, a);
            return i && (y.title = i), e.content.appendChild(y);
          }
          e.content.appendChild(c);
        }
      }
      function Wr(e) {
        for (var t = " ", n = 0; n < e.length - 2; ++n) t += n % 2 ? " " : " ";
        return (t += " ");
      }
      function jr(e, t) {
        return function (n, r, o, i, a, s, u) {
          o = o ? o + " cm-force-border" : "cm-force-border";
          for (var l = n.pos, c = l + r.length; ; ) {
            for (var p = 0; p < t.length; p++) {
              var d = t[p];
              if (d.to > l && d.from <= l) break;
            }
            if (d.to >= c) return e(n, r, o, i, a, s, u);
            e(n, r.slice(0, d.to - l), o, i, null, s, u),
              (i = null),
              (r = r.slice(d.to - l)),
              (l = d.to);
          }
        };
      }
      function Hr(e, t, n, r) {
        var o = !r && n.widgetNode;
        o && e.map.push(e.pos, e.pos + t, o),
          !r &&
            e.cm.display.input.needsContentAttribute &&
            (o || (o = e.content.appendChild(document.createElement("span"))),
            o.setAttribute("cm-marker", n.id)),
          o && (e.cm.display.input.setUneditable(o), e.content.appendChild(o)),
          (e.pos += t);
      }
      function zr(e, t, n) {
        var r = e.markedSpans,
          o = e.text,
          i = 0;
        if (r)
          for (
            var a, s, u, l, c, p, d, f = o.length, h = 0, m = 1, v = "", g = 0;
            ;

          ) {
            if (g == h) {
              (u = l = c = p = s = ""), (d = null), (g = 1 / 0);
              for (var y, C = [], A = 0; A < r.length; ++A) {
                var D = r[A],
                  b = D.marker;
                "bookmark" == b.type && D.from == h && b.widgetNode
                  ? C.push(b)
                  : D.from <= h &&
                    (null == D.to ||
                      D.to > h ||
                      (b.collapsed && D.to == h && D.from == h))
                  ? (null != D.to &&
                      D.to != h &&
                      g > D.to &&
                      ((g = D.to), (l = "")),
                    b.className && (u += " " + b.className),
                    b.css && (s = (s ? s + ";" : "") + b.css),
                    b.startStyle && D.from == h && (c += " " + b.startStyle),
                    b.endStyle &&
                      D.to == g &&
                      (y || (y = [])).push(b.endStyle, D.to),
                    b.title && !p && (p = b.title),
                    b.collapsed && (!d || fr(d.marker, b) < 0) && (d = D))
                  : D.from > h && g > D.from && (g = D.from);
              }
              if (y)
                for (var A = 0; A < y.length; A += 2)
                  y[A + 1] == g && (l += " " + y[A]);
              if (!d || d.from == h)
                for (var A = 0; A < C.length; ++A) Hr(t, 0, C[A]);
              if (d && (d.from || 0) == h) {
                if (
                  (Hr(
                    t,
                    (null == d.to ? f + 1 : d.to) - h,
                    d.marker,
                    null == d.from
                  ),
                  null == d.to)
                )
                  return;
                d.to == h && (d = !1);
              }
            }
            if (h >= f) break;
            for (var E = Math.min(f, g); ; ) {
              if (v) {
                var w = h + v.length;
                if (!d) {
                  var x = w > E ? v.slice(0, E - h) : v;
                  t.addToken(
                    t,
                    x,
                    a ? a + u : u,
                    c,
                    h + x.length == g ? l : "",
                    p,
                    s
                  );
                }
                if (w >= E) {
                  (v = v.slice(E - h)), (h = E);
                  break;
                }
                (h = w), (c = "");
              }
              (v = o.slice(i, (i = n[m++]))), (a = Lr(n[m++], t.cm.options));
            }
          }
        else
          for (var m = 1; m < n.length; m += 2)
            t.addToken(t, o.slice(i, (i = n[m])), Lr(n[m + 1], t.cm.options));
      }
      function qr(e, t) {
        return (
          0 == t.from.ch &&
          0 == t.to.ch &&
          "" == Fo(t.text) &&
          (!e.cm || e.cm.options.wholeLineUpdateBefore)
        );
      }
      function Yr(e, t, n, r) {
        function o(e) {
          return n ? n[e] : null;
        }
        function i(e, n, o) {
          kr(e, n, o, r), xo(e, "change", e, t);
        }
        function a(e, t) {
          for (var n = e, i = []; t > n; ++n) i.push(new Ca(l[n], o(n), r));
          return i;
        }
        var s = t.from,
          u = t.to,
          l = t.text,
          c = Qr(e, s.line),
          p = Qr(e, u.line),
          d = Fo(l),
          f = o(l.length - 1),
          h = u.line - s.line;
        if (t.full)
          e.insert(0, a(0, l.length)), e.remove(l.length, e.size - l.length);
        else if (qr(e, t)) {
          var m = a(0, l.length - 1);
          i(p, p.text, f),
            h && e.remove(s.line, h),
            m.length && e.insert(s.line, m);
        } else if (c == p)
          if (1 == l.length)
            i(c, c.text.slice(0, s.ch) + d + c.text.slice(u.ch), f);
          else {
            var m = a(1, l.length - 1);
            m.push(new Ca(d + c.text.slice(u.ch), f, r)),
              i(c, c.text.slice(0, s.ch) + l[0], o(0)),
              e.insert(s.line + 1, m);
          }
        else if (1 == l.length)
          i(c, c.text.slice(0, s.ch) + l[0] + p.text.slice(u.ch), o(0)),
            e.remove(s.line + 1, h);
        else {
          i(c, c.text.slice(0, s.ch) + l[0], o(0)),
            i(p, d + p.text.slice(u.ch), f);
          var m = a(1, l.length - 1);
          h > 1 && e.remove(s.line + 1, h - 1), e.insert(s.line + 1, m);
        }
        xo(e, "change", e, t);
      }
      function Kr(e) {
        (this.lines = e), (this.parent = null);
        for (var t = 0, n = 0; t < e.length; ++t)
          (e[t].parent = this), (n += e[t].height);
        this.height = n;
      }
      function Gr(e) {
        this.children = e;
        for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
          var o = e[r];
          (t += o.chunkSize()), (n += o.height), (o.parent = this);
        }
        (this.size = t), (this.height = n), (this.parent = null);
      }
      function Xr(e, t, n) {
        function r(e, o, i) {
          if (e.linked)
            for (var a = 0; a < e.linked.length; ++a) {
              var s = e.linked[a];
              if (s.doc != o) {
                var u = i && s.sharedHist;
                (n && !u) || (t(s.doc, u), r(s.doc, e, u));
              }
            }
        }
        r(e, null, !0);
      }
      function $r(e, t) {
        if (t.cm) throw new Error("This document is already in use.");
        (e.doc = t),
          (t.cm = e),
          a(e),
          n(e),
          e.options.lineWrapping || d(e),
          (e.options.mode = t.modeOption),
          It(e);
      }
      function Qr(e, t) {
        if (((t -= e.first), 0 > t || t >= e.size))
          throw new Error(
            "There is no line " + (t + e.first) + " in the document."
          );
        for (var n = e; !n.lines; )
          for (var r = 0; ; ++r) {
            var o = n.children[r],
              i = o.chunkSize();
            if (i > t) {
              n = o;
              break;
            }
            t -= i;
          }
        return n.lines[t];
      }
      function Zr(e, t, n) {
        var r = [],
          o = t.line;
        return (
          e.iter(t.line, n.line + 1, function (e) {
            var i = e.text;
            o == n.line && (i = i.slice(0, n.ch)),
              o == t.line && (i = i.slice(t.ch)),
              r.push(i),
              ++o;
          }),
          r
        );
      }
      function Jr(e, t, n) {
        var r = [];
        return (
          e.iter(t, n, function (e) {
            r.push(e.text);
          }),
          r
        );
      }
      function eo(e, t) {
        var n = t - e.height;
        if (n) for (var r = e; r; r = r.parent) r.height += n;
      }
      function to(e) {
        if (null == e.parent) return null;
        for (
          var t = e.parent, n = To(t.lines, e), r = t.parent;
          r;
          t = r, r = r.parent
        )
          for (var o = 0; r.children[o] != t; ++o)
            n += r.children[o].chunkSize();
        return n + t.first;
      }
      function no(e, t) {
        var n = e.first;
        e: do {
          for (var r = 0; r < e.children.length; ++r) {
            var o = e.children[r],
              i = o.height;
            if (i > t) {
              e = o;
              continue e;
            }
            (t -= i), (n += o.chunkSize());
          }
          return n;
        } while (!e.lines);
        for (var r = 0; r < e.lines.length; ++r) {
          var a = e.lines[r],
            s = a.height;
          if (s > t) break;
          t -= s;
        }
        return n + r;
      }
      function ro(e) {
        e = yr(e);
        for (var t = 0, n = e.parent, r = 0; r < n.lines.length; ++r) {
          var o = n.lines[r];
          if (o == e) break;
          t += o.height;
        }
        for (var i = n.parent; i; n = i, i = n.parent)
          for (var r = 0; r < i.children.length; ++r) {
            var a = i.children[r];
            if (a == n) break;
            t += a.height;
          }
        return t;
      }
      function oo(e) {
        var t = e.order;
        return null == t && (t = e.order = as(e.text)), t;
      }
      function io(e) {
        (this.done = []),
          (this.undone = []),
          (this.undoDepth = 1 / 0),
          (this.lastModTime = this.lastSelTime = 0),
          (this.lastOp = this.lastSelOp = null),
          (this.lastOrigin = this.lastSelOrigin = null),
          (this.generation = this.maxGeneration = e || 1);
      }
      function ao(e, t) {
        var n = { from: K(t.from), to: Zi(t), text: Zr(e, t.from, t.to) };
        return (
          ho(e, n, t.from.line, t.to.line + 1),
          Xr(
            e,
            function (e) {
              ho(e, n, t.from.line, t.to.line + 1);
            },
            !0
          ),
          n
        );
      }
      function so(e) {
        for (; e.length; ) {
          var t = Fo(e);
          if (!t.ranges) break;
          e.pop();
        }
      }
      function uo(e, t) {
        return t
          ? (so(e.done), Fo(e.done))
          : e.done.length && !Fo(e.done).ranges
          ? Fo(e.done)
          : e.done.length > 1 && !e.done[e.done.length - 2].ranges
          ? (e.done.pop(), Fo(e.done))
          : void 0;
      }
      function lo(e, t, n, r) {
        var o = e.history;
        o.undone.length = 0;
        var i,
          a = +new Date();
        if (
          (o.lastOp == r ||
            (o.lastOrigin == t.origin &&
              t.origin &&
              (("+" == t.origin.charAt(0) &&
                e.cm &&
                o.lastModTime > a - e.cm.options.historyEventDelay) ||
                "*" == t.origin.charAt(0)))) &&
          (i = uo(o, o.lastOp == r))
        ) {
          var s = Fo(i.changes);
          0 == Ri(t.from, t.to) && 0 == Ri(t.from, s.to)
            ? (s.to = Zi(t))
            : i.changes.push(ao(e, t));
        } else {
          var u = Fo(o.done);
          for (
            (u && u.ranges) || fo(e.sel, o.done),
              i = { changes: [ao(e, t)], generation: o.generation },
              o.done.push(i);
            o.done.length > o.undoDepth;

          )
            o.done.shift(), o.done[0].ranges || o.done.shift();
        }
        o.done.push(n),
          (o.generation = ++o.maxGeneration),
          (o.lastModTime = o.lastSelTime = a),
          (o.lastOp = o.lastSelOp = r),
          (o.lastOrigin = o.lastSelOrigin = t.origin),
          s || Oa(e, "historyAdded");
      }
      function co(e, t, n, r) {
        var o = t.charAt(0);
        return (
          "*" == o ||
          ("+" == o &&
            n.ranges.length == r.ranges.length &&
            n.somethingSelected() == r.somethingSelected() &&
            new Date() - e.history.lastSelTime <=
              (e.cm ? e.cm.options.historyEventDelay : 500))
        );
      }
      function po(e, t, n, r) {
        var o = e.history,
          i = r && r.origin;
        n == o.lastSelOp ||
        (i &&
          o.lastSelOrigin == i &&
          ((o.lastModTime == o.lastSelTime && o.lastOrigin == i) ||
            co(e, i, Fo(o.done), t)))
          ? (o.done[o.done.length - 1] = t)
          : fo(t, o.done),
          (o.lastSelTime = +new Date()),
          (o.lastSelOrigin = i),
          (o.lastSelOp = n),
          r && r.clearRedo !== !1 && so(o.undone);
      }
      function fo(e, t) {
        var n = Fo(t);
        (n && n.ranges && n.equals(e)) || t.push(e);
      }
      function ho(e, t, n, r) {
        var o = t["spans_" + e.id],
          i = 0;
        e.iter(
          Math.max(e.first, n),
          Math.min(e.first + e.size, r),
          function (n) {
            n.markedSpans &&
              ((o || (o = t["spans_" + e.id] = {}))[i] = n.markedSpans),
              ++i;
          }
        );
      }
      function mo(e) {
        if (!e) return null;
        for (var t, n = 0; n < e.length; ++n)
          e[n].marker.explicitlyCleared
            ? t || (t = e.slice(0, n))
            : t && t.push(e[n]);
        return t ? (t.length ? t : null) : e;
      }
      function vo(e, t) {
        var n = t["spans_" + e.id];
        if (!n) return null;
        for (var r = 0, o = []; r < t.text.length; ++r) o.push(mo(n[r]));
        return o;
      }
      function go(e, t, n) {
        for (var r = 0, o = []; r < e.length; ++r) {
          var i = e[r];
          if (i.ranges) o.push(n ? ce.prototype.deepCopy.call(i) : i);
          else {
            var a = i.changes,
              s = [];
            o.push({ changes: s });
            for (var u = 0; u < a.length; ++u) {
              var l,
                c = a[u];
              if ((s.push({ from: c.from, to: c.to, text: c.text }), t))
                for (var p in c)
                  (l = p.match(/^spans_(\d+)$/)) &&
                    To(t, Number(l[1])) > -1 &&
                    ((Fo(s)[p] = c[p]), delete c[p]);
            }
          }
        }
        return o;
      }
      function yo(e, t, n, r) {
        n < e.line ? (e.line += r) : t < e.line && ((e.line = t), (e.ch = 0));
      }
      function Co(e, t, n, r) {
        for (var o = 0; o < e.length; ++o) {
          var i = e[o],
            a = !0;
          if (i.ranges) {
            i.copied || ((i = e[o] = i.deepCopy()), (i.copied = !0));
            for (var s = 0; s < i.ranges.length; s++)
              yo(i.ranges[s].anchor, t, n, r), yo(i.ranges[s].head, t, n, r);
          } else {
            for (var s = 0; s < i.changes.length; ++s) {
              var u = i.changes[s];
              if (n < u.from.line)
                (u.from = Li(u.from.line + r, u.from.ch)),
                  (u.to = Li(u.to.line + r, u.to.ch));
              else if (t <= u.to.line) {
                a = !1;
                break;
              }
            }
            a || (e.splice(0, o + 1), (o = 0));
          }
        }
      }
      function Ao(e, t) {
        var n = t.from.line,
          r = t.to.line,
          o = t.text.length - (r - n) - 1;
        Co(e.done, n, r, o), Co(e.undone, n, r, o);
      }
      function Do(e) {
        return null != e.defaultPrevented
          ? e.defaultPrevented
          : 0 == e.returnValue;
      }
      function bo(e) {
        return e.target || e.srcElement;
      }
      function Eo(e) {
        var t = e.which;
        return (
          null == t &&
            (1 & e.button
              ? (t = 1)
              : 2 & e.button
              ? (t = 3)
              : 4 & e.button && (t = 2)),
          _i && e.ctrlKey && 1 == t && (t = 3),
          t
        );
      }
      function wo(e, t, n) {
        var r = e._handlers && e._handlers[t];
        return n ? (r && r.length > 0 ? r.slice() : _a) : r || _a;
      }
      function xo(e, t) {
        function n(e) {
          return function () {
            e.apply(null, i);
          };
        }
        var r = wo(e, t, !1);
        if (r.length) {
          var o,
            i = Array.prototype.slice.call(arguments, 2);
          zi
            ? (o = zi.delayedCallbacks)
            : Fa
            ? (o = Fa)
            : ((o = Fa = []), setTimeout(No, 0));
          for (var a = 0; a < r.length; ++a) o.push(n(r[a]));
        }
      }
      function No() {
        var e = Fa;
        Fa = null;
        for (var t = 0; t < e.length; ++t) e[t]();
      }
      function ko(e, t, n) {
        return (
          "string" == typeof t &&
            (t = {
              type: t,
              preventDefault: function () {
                this.defaultPrevented = !0;
              },
            }),
          Oa(e, n || t.type, e, t),
          Do(t) || t.codemirrorIgnore
        );
      }
      function So(e) {
        var t = e._handlers && e._handlers.cursorActivity;
        if (t)
          for (
            var n =
                e.curOp.cursorActivityHandlers ||
                (e.curOp.cursorActivityHandlers = []),
              r = 0;
            r < t.length;
            ++r
          )
            -1 == To(n, t[r]) && n.push(t[r]);
      }
      function Bo(e, t) {
        return wo(e, t).length > 0;
      }
      function _o(e) {
        (e.prototype.on = function (e, t) {
          Ba(this, e, t);
        }),
          (e.prototype.off = function (e, t) {
            Ma(this, e, t);
          });
      }
      function Mo() {
        this.id = null;
      }
      function Oo(e) {
        for (; Wa.length <= e; ) Wa.push(Fo(Wa) + " ");
        return Wa[e];
      }
      function Fo(e) {
        return e[e.length - 1];
      }
      function To(e, t) {
        for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
        return -1;
      }
      function Io(e, t) {
        for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
        return n;
      }
      function Po() {}
      function Lo(e, t) {
        var n;
        return (
          Object.create
            ? (n = Object.create(e))
            : ((Po.prototype = e), (n = new Po())),
          t && Ro(t, n),
          n
        );
      }
      function Ro(e, t, n) {
        t || (t = {});
        for (var r in e)
          !e.hasOwnProperty(r) ||
            (n === !1 && t.hasOwnProperty(r)) ||
            (t[r] = e[r]);
        return t;
      }
      function Vo(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return function () {
          return e.apply(null, t);
        };
      }
      function Uo(e, t) {
        return t
          ? t.source.indexOf("\\w") > -1 && qa(e)
            ? !0
            : t.test(e)
          : qa(e);
      }
      function Wo(e) {
        for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
        return !0;
      }
      function jo(e) {
        return e.charCodeAt(0) >= 768 && Ya.test(e);
      }
      function Ho(e, t, n, r) {
        var o = document.createElement(e);
        if (
          (n && (o.className = n),
          r && (o.style.cssText = r),
          "string" == typeof t)
        )
          o.appendChild(document.createTextNode(t));
        else if (t) for (var i = 0; i < t.length; ++i) o.appendChild(t[i]);
        return o;
      }
      function zo(e) {
        for (var t = e.childNodes.length; t > 0; --t)
          e.removeChild(e.firstChild);
        return e;
      }
      function qo(e, t) {
        return zo(e).appendChild(t);
      }
      function Yo() {
        for (
          var e = document.activeElement;
          e && e.root && e.root.activeElement;

        )
          e = e.root.activeElement;
        return e;
      }
      function Ko(e) {
        return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
      }
      function Go(e, t) {
        for (var n = e.split(" "), r = 0; r < n.length; r++)
          n[r] && !Ko(n[r]).test(t) && (t += " " + n[r]);
        return t;
      }
      function Xo(e) {
        if (document.body.getElementsByClassName)
          for (
            var t = document.body.getElementsByClassName("CodeMirror"), n = 0;
            n < t.length;
            n++
          ) {
            var r = t[n].CodeMirror;
            r && e(r);
          }
      }
      function $o() {
        Za || (Qo(), (Za = !0));
      }
      function Qo() {
        var e;
        Ba(window, "resize", function () {
          null == e &&
            (e = setTimeout(function () {
              (e = null), Xo(zt);
            }, 100));
        }),
          Ba(window, "blur", function () {
            Xo(yn);
          });
      }
      function Zo(e) {
        if (null == Ga) {
          var t = Ho("span", "​");
          qo(e, Ho("span", [t, document.createTextNode("x")])),
            0 != e.firstChild.offsetHeight &&
              (Ga =
                t.offsetWidth <= 1 && t.offsetHeight > 2 && !(Ci && 8 > Ai));
        }
        var n = Ga
          ? Ho("span", "​")
          : Ho(
              "span",
              " ",
              null,
              "display: inline-block; width: 1px; margin-right: -1px"
            );
        return n.setAttribute("cm-text", ""), n;
      }
      function Jo(e) {
        if (null != Xa) return Xa;
        var t = qo(e, document.createTextNode("AخA")),
          n = Ha(t, 0, 1).getBoundingClientRect();
        if (!n || n.left == n.right) return !1;
        var r = Ha(t, 1, 2).getBoundingClientRect();
        return (Xa = r.right - n.right < 3);
      }
      function ei(e) {
        if (null != rs) return rs;
        var t = qo(e, Ho("span", "x")),
          n = t.getBoundingClientRect(),
          r = Ha(t, 0, 1).getBoundingClientRect();
        return (rs = Math.abs(n.left - r.left) > 1);
      }
      function ti(e, t, n, r) {
        if (!e) return r(t, n, "ltr");
        for (var o = !1, i = 0; i < e.length; ++i) {
          var a = e[i];
          ((a.from < n && a.to > t) || (t == n && a.to == t)) &&
            (r(
              Math.max(a.from, t),
              Math.min(a.to, n),
              1 == a.level ? "rtl" : "ltr"
            ),
            (o = !0));
        }
        o || r(t, n, "ltr");
      }
      function ni(e) {
        return e.level % 2 ? e.to : e.from;
      }
      function ri(e) {
        return e.level % 2 ? e.from : e.to;
      }
      function oi(e) {
        var t = oo(e);
        return t ? ni(t[0]) : 0;
      }
      function ii(e) {
        var t = oo(e);
        return t ? ri(Fo(t)) : e.text.length;
      }
      function ai(e, t) {
        var n = Qr(e.doc, t),
          r = yr(n);
        r != n && (t = to(r));
        var o = oo(r),
          i = o ? (o[0].level % 2 ? ii(r) : oi(r)) : 0;
        return Li(t, i);
      }
      function si(e, t) {
        for (var n, r = Qr(e.doc, t); (n = vr(r)); )
          (r = n.find(1, !0).line), (t = null);
        var o = oo(r),
          i = o ? (o[0].level % 2 ? oi(r) : ii(r)) : r.text.length;
        return Li(null == t ? to(r) : t, i);
      }
      function ui(e, t) {
        var n = ai(e, t.line),
          r = Qr(e.doc, n.line),
          o = oo(r);
        if (!o || 0 == o[0].level) {
          var i = Math.max(0, r.text.search(/\S/)),
            a = t.line == n.line && t.ch <= i && t.ch;
          return Li(n.line, a ? 0 : i);
        }
        return n;
      }
      function li(e, t, n) {
        var r = e[0].level;
        return t == r ? !0 : n == r ? !1 : n > t;
      }
      function ci(e, t) {
        is = null;
        for (var n, r = 0; r < e.length; ++r) {
          var o = e[r];
          if (o.from < t && o.to > t) return r;
          if (o.from == t || o.to == t) {
            if (null != n)
              return li(e, o.level, e[n].level)
                ? (o.from != o.to && (is = n), r)
                : (o.from != o.to && (is = r), n);
            n = r;
          }
        }
        return n;
      }
      function pi(e, t, n, r) {
        if (!r) return t + n;
        do t += n;
        while (t > 0 && jo(e.text.charAt(t)));
        return t;
      }
      function di(e, t, n, r) {
        var o = oo(e);
        if (!o) return fi(e, t, n, r);
        for (
          var i = ci(o, t), a = o[i], s = pi(e, t, a.level % 2 ? -n : n, r);
          ;

        ) {
          if (s > a.from && s < a.to) return s;
          if (s == a.from || s == a.to)
            return ci(o, s) == i
              ? s
              : ((a = o[(i += n)]), n > 0 == a.level % 2 ? a.to : a.from);
          if (((a = o[(i += n)]), !a)) return null;
          s = n > 0 == a.level % 2 ? pi(e, a.to, -1, r) : pi(e, a.from, 1, r);
        }
      }
      function fi(e, t, n, r) {
        var o = t + n;
        if (r) for (; o > 0 && jo(e.text.charAt(o)); ) o += n;
        return 0 > o || o > e.text.length ? null : o;
      }
      var hi = navigator.userAgent,
        mi = navigator.platform,
        vi = /gecko\/\d/i.test(hi),
        gi = /MSIE \d/.test(hi),
        yi = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(hi),
        Ci = gi || yi,
        Ai = Ci && (gi ? document.documentMode || 6 : yi[1]),
        Di = /WebKit\//.test(hi),
        bi = Di && /Qt\/\d+\.\d+/.test(hi),
        Ei = /Chrome\//.test(hi),
        wi = /Opera\//.test(hi),
        xi = /Apple Computer/.test(navigator.vendor),
        Ni = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(hi),
        ki = /PhantomJS/.test(hi),
        Si = /AppleWebKit/.test(hi) && /Mobile\/\w+/.test(hi),
        Bi =
          Si ||
          /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(hi),
        _i = Si || /Mac/.test(mi),
        Mi = /win/i.test(mi),
        Oi = wi && hi.match(/Version\/(\d*\.\d*)/);
      Oi && (Oi = Number(Oi[1])), Oi && Oi >= 15 && ((wi = !1), (Di = !0));
      var Fi = _i && (bi || (wi && (null == Oi || 12.11 > Oi))),
        Ti = vi || (Ci && Ai >= 9),
        Ii = !1,
        Pi = !1;
      (m.prototype = Ro(
        {
          update: function (e) {
            var t = e.scrollWidth > e.clientWidth + 1,
              n = e.scrollHeight > e.clientHeight + 1,
              r = e.nativeBarWidth;
            if (n) {
              (this.vert.style.display = "block"),
                (this.vert.style.bottom = t ? r + "px" : "0");
              var o = e.viewHeight - (t ? r : 0);
              this.vert.firstChild.style.height =
                Math.max(0, e.scrollHeight - e.clientHeight + o) + "px";
            } else
              (this.vert.style.display = ""),
                (this.vert.firstChild.style.height = "0");
            if (t) {
              (this.horiz.style.display = "block"),
                (this.horiz.style.right = n ? r + "px" : "0"),
                (this.horiz.style.left = e.barLeft + "px");
              var i = e.viewWidth - e.barLeft - (n ? r : 0);
              this.horiz.firstChild.style.width =
                e.scrollWidth - e.clientWidth + i + "px";
            } else
              (this.horiz.style.display = ""),
                (this.horiz.firstChild.style.width = "0");
            return (
              !this.checkedZeroWidth &&
                e.clientHeight > 0 &&
                (0 == r && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
              { right: n ? r : 0, bottom: t ? r : 0 }
            );
          },
          setScrollLeft: function (e) {
            this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
              this.disableHoriz &&
                this.enableZeroWidthBar(this.horiz, this.disableHoriz);
          },
          setScrollTop: function (e) {
            this.vert.scrollTop != e && (this.vert.scrollTop = e),
              this.disableVert &&
                this.enableZeroWidthBar(this.vert, this.disableVert);
          },
          zeroWidthHack: function () {
            var e = _i && !Ni ? "12px" : "18px";
            (this.horiz.style.height = this.vert.style.width = e),
              (this.horiz.style.pointerEvents = this.vert.style.pointerEvents =
                "none"),
              (this.disableHoriz = new Mo()),
              (this.disableVert = new Mo());
          },
          enableZeroWidthBar: function (e, t) {
            function n() {
              var r = e.getBoundingClientRect(),
                o = document.elementFromPoint(r.left + 1, r.bottom - 1);
              o != e ? (e.style.pointerEvents = "none") : t.set(1e3, n);
            }
            (e.style.pointerEvents = "auto"), t.set(1e3, n);
          },
          clear: function () {
            var e = this.horiz.parentNode;
            e.removeChild(this.horiz), e.removeChild(this.vert);
          },
        },
        m.prototype
      )),
        (v.prototype = Ro(
          {
            update: function () {
              return { bottom: 0, right: 0 };
            },
            setScrollLeft: function () {},
            setScrollTop: function () {},
            clear: function () {},
          },
          v.prototype
        )),
        (e.scrollbarModel = { native: m, null: v }),
        (x.prototype.signal = function (e, t) {
          Bo(e, t) && this.events.push(arguments);
        }),
        (x.prototype.finish = function () {
          for (var e = 0; e < this.events.length; e++)
            Oa.apply(null, this.events[e]);
        });
      var Li = (e.Pos = function (e, t) {
          return this instanceof Li
            ? ((this.line = e), void (this.ch = t))
            : new Li(e, t);
        }),
        Ri = (e.cmpPos = function (e, t) {
          return e.line - t.line || e.ch - t.ch;
        }),
        Vi = null;
      (ne.prototype = Ro(
        {
          init: function (e) {
            function t(e) {
              if (!ko(r, e)) {
                if (r.somethingSelected())
                  (Vi = r.getSelections()),
                    n.inaccurateSelection &&
                      ((n.prevInput = ""),
                      (n.inaccurateSelection = !1),
                      (i.value = Vi.join("\n")),
                      ja(i));
                else {
                  if (!r.options.lineWiseCopyCut) return;
                  var t = ee(r);
                  (Vi = t.text),
                    "cut" == e.type
                      ? r.setSelections(t.ranges, null, Pa)
                      : ((n.prevInput = ""),
                        (i.value = t.text.join("\n")),
                        ja(i));
                }
                "cut" == e.type && (r.state.cutIncoming = !0);
              }
            }
            var n = this,
              r = this.cm,
              o = (this.wrapper = re()),
              i = (this.textarea = o.firstChild);
            e.wrapper.insertBefore(o, e.wrapper.firstChild),
              Si && (i.style.width = "0px"),
              Ba(i, "input", function () {
                Ci && Ai >= 9 && n.hasSelection && (n.hasSelection = null),
                  n.poll();
              }),
              Ba(i, "paste", function (e) {
                ko(r, e) ||
                  Z(e, r) ||
                  ((r.state.pasteIncoming = !0), n.fastPoll());
              }),
              Ba(i, "cut", t),
              Ba(i, "copy", t),
              Ba(e.scroller, "paste", function (t) {
                qt(e, t) ||
                  ko(r, t) ||
                  ((r.state.pasteIncoming = !0), n.focus());
              }),
              Ba(e.lineSpace, "selectstart", function (t) {
                qt(e, t) || Na(t);
              }),
              Ba(i, "compositionstart", function () {
                var e = r.getCursor("from");
                n.composing && n.composing.range.clear(),
                  (n.composing = {
                    start: e,
                    range: r.markText(e, r.getCursor("to"), {
                      className: "CodeMirror-composing",
                    }),
                  });
              }),
              Ba(i, "compositionend", function () {
                n.composing &&
                  (n.poll(), n.composing.range.clear(), (n.composing = null));
              });
          },
          prepareSelection: function () {
            var e = this.cm,
              t = e.display,
              n = e.doc,
              r = Ie(e);
            if (e.options.moveInputWithCursor) {
              var o = ft(e, n.sel.primary().head, "div"),
                i = t.wrapper.getBoundingClientRect(),
                a = t.lineDiv.getBoundingClientRect();
              (r.teTop = Math.max(
                0,
                Math.min(t.wrapper.clientHeight - 10, o.top + a.top - i.top)
              )),
                (r.teLeft = Math.max(
                  0,
                  Math.min(t.wrapper.clientWidth - 10, o.left + a.left - i.left)
                ));
            }
            return r;
          },
          showSelection: function (e) {
            var t = this.cm,
              n = t.display;
            qo(n.cursorDiv, e.cursors),
              qo(n.selectionDiv, e.selection),
              null != e.teTop &&
                ((this.wrapper.style.top = e.teTop + "px"),
                (this.wrapper.style.left = e.teLeft + "px"));
          },
          reset: function (e) {
            if (!this.contextMenuPending) {
              var t,
                n,
                r = this.cm,
                o = r.doc;
              if (r.somethingSelected()) {
                this.prevInput = "";
                var i = o.sel.primary();
                t =
                  ns &&
                  (i.to().line - i.from().line > 100 ||
                    (n = r.getSelection()).length > 1e3);
                var a = t ? "-" : n || r.getSelection();
                (this.textarea.value = a),
                  r.state.focused && ja(this.textarea),
                  Ci && Ai >= 9 && (this.hasSelection = a);
              } else
                e ||
                  ((this.prevInput = this.textarea.value = ""),
                  Ci && Ai >= 9 && (this.hasSelection = null));
              this.inaccurateSelection = t;
            }
          },
          getField: function () {
            return this.textarea;
          },
          supportsTouch: function () {
            return !1;
          },
          focus: function () {
            if (
              "nocursor" != this.cm.options.readOnly &&
              (!Bi || Yo() != this.textarea)
            )
              try {
                this.textarea.focus();
              } catch (e) {}
          },
          blur: function () {
            this.textarea.blur();
          },
          resetPosition: function () {
            this.wrapper.style.top = this.wrapper.style.left = 0;
          },
          receivedFocus: function () {
            this.slowPoll();
          },
          slowPoll: function () {
            var e = this;
            e.pollingFast ||
              e.polling.set(this.cm.options.pollInterval, function () {
                e.poll(), e.cm.state.focused && e.slowPoll();
              });
          },
          fastPoll: function () {
            function e() {
              var r = n.poll();
              r || t
                ? ((n.pollingFast = !1), n.slowPoll())
                : ((t = !0), n.polling.set(60, e));
            }
            var t = !1,
              n = this;
            (n.pollingFast = !0), n.polling.set(20, e);
          },
          poll: function () {
            var e = this.cm,
              t = this.textarea,
              n = this.prevInput;
            if (
              this.contextMenuPending ||
              !e.state.focused ||
              (ts(t) && !n && !this.composing) ||
              e.isReadOnly() ||
              e.options.disableInput ||
              e.state.keySeq
            )
              return !1;
            var r = t.value;
            if (r == n && !e.somethingSelected()) return !1;
            if (
              (Ci && Ai >= 9 && this.hasSelection === r) ||
              (_i && /[\uf700-\uf7ff]/.test(r))
            )
              return e.display.input.reset(), !1;
            if (e.doc.sel == e.display.selForContextMenu) {
              var o = r.charCodeAt(0);
              if ((8203 != o || n || (n = "​"), 8666 == o))
                return this.reset(), this.cm.execCommand("undo");
            }
            for (
              var i = 0, a = Math.min(n.length, r.length);
              a > i && n.charCodeAt(i) == r.charCodeAt(i);

            )
              ++i;
            var s = this;
            return (
              Bt(e, function () {
                Q(
                  e,
                  r.slice(i),
                  n.length - i,
                  null,
                  s.composing ? "*compose" : null
                ),
                  r.length > 1e3 || r.indexOf("\n") > -1
                    ? (t.value = s.prevInput = "")
                    : (s.prevInput = r),
                  s.composing &&
                    (s.composing.range.clear(),
                    (s.composing.range = e.markText(
                      s.composing.start,
                      e.getCursor("to"),
                      { className: "CodeMirror-composing" }
                    )));
              }),
              !0
            );
          },
          ensurePolled: function () {
            this.pollingFast && this.poll() && (this.pollingFast = !1);
          },
          onKeyPress: function () {
            Ci && Ai >= 9 && (this.hasSelection = null), this.fastPoll();
          },
          onContextMenu: function (e) {
            function t() {
              if (null != a.selectionStart) {
                var e = o.somethingSelected(),
                  t = "​" + (e ? a.value : "");
                (a.value = "⇚"),
                  (a.value = t),
                  (r.prevInput = e ? "" : "​"),
                  (a.selectionStart = 1),
                  (a.selectionEnd = t.length),
                  (i.selForContextMenu = o.doc.sel);
              }
            }
            function n() {
              if (
                ((r.contextMenuPending = !1),
                (r.wrapper.style.cssText = p),
                (a.style.cssText = c),
                Ci &&
                  9 > Ai &&
                  i.scrollbars.setScrollTop((i.scroller.scrollTop = u)),
                null != a.selectionStart)
              ) {
                (!Ci || (Ci && 9 > Ai)) && t();
                var e = 0,
                  n = function () {
                    i.selForContextMenu == o.doc.sel &&
                    0 == a.selectionStart &&
                    a.selectionEnd > 0 &&
                    "​" == r.prevInput
                      ? _t(o, la.selectAll)(o)
                      : e++ < 10
                      ? (i.detectingSelectAll = setTimeout(n, 500))
                      : i.input.reset();
                  };
                i.detectingSelectAll = setTimeout(n, 200);
              }
            }
            var r = this,
              o = r.cm,
              i = o.display,
              a = r.textarea,
              s = Yt(o, e),
              u = i.scroller.scrollTop;
            if (s && !wi) {
              var l = o.options.resetSelectionOnContextMenu;
              l && -1 == o.doc.sel.contains(s) && _t(o, Ne)(o.doc, fe(s), Pa);
              var c = a.style.cssText,
                p = r.wrapper.style.cssText;
              r.wrapper.style.cssText = "position: absolute";
              var d = r.wrapper.getBoundingClientRect();
              if (
                ((a.style.cssText =
                  "position: absolute; width: 30px; height: 30px; top: " +
                  (e.clientY - d.top - 5) +
                  "px; left: " +
                  (e.clientX - d.left - 5) +
                  "px; z-index: 1000; background: " +
                  (Ci ? "rgba(255, 255, 255, .05)" : "transparent") +
                  "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"),
                Di)
              )
                var f = window.scrollY;
              if (
                (i.input.focus(),
                Di && window.scrollTo(null, f),
                i.input.reset(),
                o.somethingSelected() || (a.value = r.prevInput = " "),
                (r.contextMenuPending = !0),
                (i.selForContextMenu = o.doc.sel),
                clearTimeout(i.detectingSelectAll),
                Ci && Ai >= 9 && t(),
                Ti)
              ) {
                Sa(e);
                var h = function () {
                  Ma(window, "mouseup", h), setTimeout(n, 20);
                };
                Ba(window, "mouseup", h);
              } else setTimeout(n, 50);
            }
          },
          readOnlyChanged: function (e) {
            e || this.reset();
          },
          setUneditable: Po,
          needsContentAttribute: !1,
        },
        ne.prototype
      )),
        (oe.prototype = Ro(
          {
            init: function (e) {
              function t(e) {
                if (!ko(r, e)) {
                  if (r.somethingSelected())
                    (Vi = r.getSelections()),
                      "cut" == e.type && r.replaceSelection("", null, "cut");
                  else {
                    if (!r.options.lineWiseCopyCut) return;
                    var t = ee(r);
                    (Vi = t.text),
                      "cut" == e.type &&
                        r.operation(function () {
                          r.setSelections(t.ranges, 0, Pa),
                            r.replaceSelection("", null, "cut");
                        });
                  }
                  if (e.clipboardData && !Si)
                    e.preventDefault(),
                      e.clipboardData.clearData(),
                      e.clipboardData.setData("text/plain", Vi.join("\n"));
                  else {
                    var n = re(),
                      o = n.firstChild;
                    r.display.lineSpace.insertBefore(
                      n,
                      r.display.lineSpace.firstChild
                    ),
                      (o.value = Vi.join("\n"));
                    var i = document.activeElement;
                    ja(o),
                      setTimeout(function () {
                        r.display.lineSpace.removeChild(n), i.focus();
                      }, 50);
                  }
                }
              }
              var n = this,
                r = n.cm,
                o = (n.div = e.lineDiv);
              te(o),
                Ba(o, "paste", function (e) {
                  ko(r, e) || Z(e, r);
                }),
                Ba(o, "compositionstart", function (e) {
                  var t = e.data;
                  if (
                    ((n.composing = { sel: r.doc.sel, data: t, startData: t }),
                    t)
                  ) {
                    var o = r.doc.sel.primary(),
                      i = r.getLine(o.head.line),
                      a = i.indexOf(t, Math.max(0, o.head.ch - t.length));
                    a > -1 &&
                      a <= o.head.ch &&
                      (n.composing.sel = fe(
                        Li(o.head.line, a),
                        Li(o.head.line, a + t.length)
                      ));
                  }
                }),
                Ba(o, "compositionupdate", function (e) {
                  n.composing.data = e.data;
                }),
                Ba(o, "compositionend", function (e) {
                  var t = n.composing;
                  t &&
                    (e.data == t.startData ||
                      /\u200b/.test(e.data) ||
                      (t.data = e.data),
                    setTimeout(function () {
                      t.handled || n.applyComposition(t),
                        n.composing == t && (n.composing = null);
                    }, 50));
                }),
                Ba(o, "touchstart", function () {
                  n.forceCompositionEnd();
                }),
                Ba(o, "input", function () {
                  n.composing ||
                    (!r.isReadOnly() && n.pollContent()) ||
                    Bt(n.cm, function () {
                      It(r);
                    });
                }),
                Ba(o, "copy", t),
                Ba(o, "cut", t);
            },
            prepareSelection: function () {
              var e = Ie(this.cm, !1);
              return (e.focus = this.cm.state.focused), e;
            },
            showSelection: function (e) {
              e &&
                this.cm.display.view.length &&
                (e.focus && this.showPrimarySelection(),
                this.showMultipleSelections(e));
            },
            showPrimarySelection: function () {
              var e = window.getSelection(),
                t = this.cm.doc.sel.primary(),
                n = se(this.cm, e.anchorNode, e.anchorOffset),
                r = se(this.cm, e.focusNode, e.focusOffset);
              if (
                !n ||
                n.bad ||
                !r ||
                r.bad ||
                0 != Ri(X(n, r), t.from()) ||
                0 != Ri(G(n, r), t.to())
              ) {
                var o = ie(this.cm, t.from()),
                  i = ie(this.cm, t.to());
                if (o || i) {
                  var a = this.cm.display.view,
                    s = e.rangeCount && e.getRangeAt(0);
                  if (o) {
                    if (!i) {
                      var u = a[a.length - 1].measure,
                        l = u.maps ? u.maps[u.maps.length - 1] : u.map;
                      i = {
                        node: l[l.length - 1],
                        offset: l[l.length - 2] - l[l.length - 3],
                      };
                    }
                  } else o = { node: a[0].measure.map[2], offset: 0 };
                  try {
                    var c = Ha(o.node, o.offset, i.offset, i.node);
                  } catch (p) {}
                  c &&
                    (!vi && this.cm.state.focused
                      ? (e.collapse(o.node, o.offset),
                        c.collapsed || e.addRange(c))
                      : (e.removeAllRanges(), e.addRange(c)),
                    s && null == e.anchorNode
                      ? e.addRange(s)
                      : vi && this.startGracePeriod()),
                    this.rememberSelection();
                }
              }
            },
            startGracePeriod: function () {
              var e = this;
              clearTimeout(this.gracePeriod),
                (this.gracePeriod = setTimeout(function () {
                  (e.gracePeriod = !1),
                    e.selectionChanged() &&
                      e.cm.operation(function () {
                        e.cm.curOp.selectionChanged = !0;
                      });
                }, 20));
            },
            showMultipleSelections: function (e) {
              qo(this.cm.display.cursorDiv, e.cursors),
                qo(this.cm.display.selectionDiv, e.selection);
            },
            rememberSelection: function () {
              var e = window.getSelection();
              (this.lastAnchorNode = e.anchorNode),
                (this.lastAnchorOffset = e.anchorOffset),
                (this.lastFocusNode = e.focusNode),
                (this.lastFocusOffset = e.focusOffset);
            },
            selectionInEditor: function () {
              var e = window.getSelection();
              if (!e.rangeCount) return !1;
              var t = e.getRangeAt(0).commonAncestorContainer;
              return Ka(this.div, t);
            },
            focus: function () {
              "nocursor" != this.cm.options.readOnly && this.div.focus();
            },
            blur: function () {
              this.div.blur();
            },
            getField: function () {
              return this.div;
            },
            supportsTouch: function () {
              return !0;
            },
            receivedFocus: function () {
              function e() {
                t.cm.state.focused &&
                  (t.pollSelection(),
                  t.polling.set(t.cm.options.pollInterval, e));
              }
              var t = this;
              this.selectionInEditor()
                ? this.pollSelection()
                : Bt(this.cm, function () {
                    t.cm.curOp.selectionChanged = !0;
                  }),
                this.polling.set(this.cm.options.pollInterval, e);
            },
            selectionChanged: function () {
              var e = window.getSelection();
              return (
                e.anchorNode != this.lastAnchorNode ||
                e.anchorOffset != this.lastAnchorOffset ||
                e.focusNode != this.lastFocusNode ||
                e.focusOffset != this.lastFocusOffset
              );
            },
            pollSelection: function () {
              if (
                !this.composing &&
                !this.gracePeriod &&
                this.selectionChanged()
              ) {
                var e = window.getSelection(),
                  t = this.cm;
                this.rememberSelection();
                var n = se(t, e.anchorNode, e.anchorOffset),
                  r = se(t, e.focusNode, e.focusOffset);
                n &&
                  r &&
                  Bt(t, function () {
                    Ne(t.doc, fe(n, r), Pa),
                      (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
                  });
              }
            },
            pollContent: function () {
              var e = this.cm,
                t = e.display,
                n = e.doc.sel.primary(),
                r = n.from(),
                o = n.to();
              if (r.line < t.viewFrom || o.line > t.viewTo - 1) return !1;
              var i;
              if (r.line == t.viewFrom || 0 == (i = Rt(e, r.line)))
                var a = to(t.view[0].line),
                  s = t.view[0].node;
              else
                var a = to(t.view[i].line),
                  s = t.view[i - 1].node.nextSibling;
              var u = Rt(e, o.line);
              if (u == t.view.length - 1)
                var l = t.viewTo - 1,
                  c = t.lineDiv.lastChild;
              else
                var l = to(t.view[u + 1].line) - 1,
                  c = t.view[u + 1].node.previousSibling;
              for (
                var p = e.doc.splitLines(le(e, s, c, a, l)),
                  d = Zr(e.doc, Li(a, 0), Li(l, Qr(e.doc, l).text.length));
                p.length > 1 && d.length > 1;

              )
                if (Fo(p) == Fo(d)) p.pop(), d.pop(), l--;
                else {
                  if (p[0] != d[0]) break;
                  p.shift(), d.shift(), a++;
                }
              for (
                var f = 0,
                  h = 0,
                  m = p[0],
                  v = d[0],
                  g = Math.min(m.length, v.length);
                g > f && m.charCodeAt(f) == v.charCodeAt(f);

              )
                ++f;
              for (
                var y = Fo(p),
                  C = Fo(d),
                  A = Math.min(
                    y.length - (1 == p.length ? f : 0),
                    C.length - (1 == d.length ? f : 0)
                  );
                A > h &&
                y.charCodeAt(y.length - h - 1) ==
                  C.charCodeAt(C.length - h - 1);

              )
                ++h;
              (p[p.length - 1] = y.slice(0, y.length - h)),
                (p[0] = p[0].slice(f));
              var D = Li(a, f),
                b = Li(l, d.length ? Fo(d).length - h : 0);
              return p.length > 1 || p[0] || Ri(D, b)
                ? (On(e.doc, p, D, b, "+input"), !0)
                : void 0;
            },
            ensurePolled: function () {
              this.forceCompositionEnd();
            },
            reset: function () {
              this.forceCompositionEnd();
            },
            forceCompositionEnd: function () {
              this.composing &&
                !this.composing.handled &&
                (this.applyComposition(this.composing),
                (this.composing.handled = !0),
                this.div.blur(),
                this.div.focus());
            },
            applyComposition: function (e) {
              this.cm.isReadOnly()
                ? _t(this.cm, It)(this.cm)
                : e.data &&
                  e.data != e.startData &&
                  _t(this.cm, Q)(this.cm, e.data, 0, e.sel);
            },
            setUneditable: function (e) {
              e.contentEditable = "false";
            },
            onKeyPress: function (e) {
              e.preventDefault(),
                this.cm.isReadOnly() ||
                  _t(this.cm, Q)(
                    this.cm,
                    String.fromCharCode(
                      null == e.charCode ? e.keyCode : e.charCode
                    ),
                    0
                  );
            },
            readOnlyChanged: function (e) {
              this.div.contentEditable = String("nocursor" != e);
            },
            onContextMenu: Po,
            resetPosition: Po,
            needsContentAttribute: !0,
          },
          oe.prototype
        )),
        (e.inputStyles = { textarea: ne, contenteditable: oe }),
        (ce.prototype = {
          primary: function () {
            return this.ranges[this.primIndex];
          },
          equals: function (e) {
            if (e == this) return !0;
            if (
              e.primIndex != this.primIndex ||
              e.ranges.length != this.ranges.length
            )
              return !1;
            for (var t = 0; t < this.ranges.length; t++) {
              var n = this.ranges[t],
                r = e.ranges[t];
              if (0 != Ri(n.anchor, r.anchor) || 0 != Ri(n.head, r.head))
                return !1;
            }
            return !0;
          },
          deepCopy: function () {
            for (var e = [], t = 0; t < this.ranges.length; t++)
              e[t] = new pe(K(this.ranges[t].anchor), K(this.ranges[t].head));
            return new ce(e, this.primIndex);
          },
          somethingSelected: function () {
            for (var e = 0; e < this.ranges.length; e++)
              if (!this.ranges[e].empty()) return !0;
            return !1;
          },
          contains: function (e, t) {
            t || (t = e);
            for (var n = 0; n < this.ranges.length; n++) {
              var r = this.ranges[n];
              if (Ri(t, r.from()) >= 0 && Ri(e, r.to()) <= 0) return n;
            }
            return -1;
          },
        }),
        (pe.prototype = {
          from: function () {
            return X(this.anchor, this.head);
          },
          to: function () {
            return G(this.anchor, this.head);
          },
          empty: function () {
            return (
              this.head.line == this.anchor.line &&
              this.head.ch == this.anchor.ch
            );
          },
        });
      var Ui,
        Wi,
        ji,
        Hi = { left: 0, right: 0, top: 0, bottom: 0 },
        zi = null,
        qi = 0,
        Yi = 0,
        Ki = 0,
        Gi = null;
      Ci
        ? (Gi = -0.53)
        : vi
        ? (Gi = 15)
        : Ei
        ? (Gi = -0.7)
        : xi && (Gi = -1 / 3);
      var Xi = function (e) {
        var t = e.wheelDeltaX,
          n = e.wheelDeltaY;
        return (
          null == t &&
            e.detail &&
            e.axis == e.HORIZONTAL_AXIS &&
            (t = e.detail),
          null == n && e.detail && e.axis == e.VERTICAL_AXIS
            ? (n = e.detail)
            : null == n && (n = e.wheelDelta),
          { x: t, y: n }
        );
      };
      e.wheelEventPixels = function (e) {
        var t = Xi(e);
        return (t.x *= Gi), (t.y *= Gi), t;
      };
      var $i = new Mo(),
        Qi = null,
        Zi = (e.changeEnd = function (e) {
          return e.text
            ? Li(
                e.from.line + e.text.length - 1,
                Fo(e.text).length + (1 == e.text.length ? e.from.ch : 0)
              )
            : e.to;
        });
      (e.prototype = {
        constructor: e,
        focus: function () {
          window.focus(), this.display.input.focus();
        },
        setOption: function (e, t) {
          var n = this.options,
            r = n[e];
          (n[e] == t && "mode" != e) ||
            ((n[e] = t), ea.hasOwnProperty(e) && _t(this, ea[e])(this, t, r));
        },
        getOption: function (e) {
          return this.options[e];
        },
        getDoc: function () {
          return this.doc;
        },
        addKeyMap: function (e, t) {
          this.state.keyMaps[t ? "push" : "unshift"](Kn(e));
        },
        removeKeyMap: function (e) {
          for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
            if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0;
        },
        addOverlay: Mt(function (t, n) {
          var r = t.token ? t : e.getMode(this.options, t);
          if (r.startState) throw new Error("Overlays may not be stateful.");
          this.state.overlays.push({
            mode: r,
            modeSpec: t,
            opaque: n && n.opaque,
          }),
            this.state.modeGen++,
            It(this);
        }),
        removeOverlay: Mt(function (e) {
          for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
            var r = t[n].modeSpec;
            if (r == e || ("string" == typeof e && r.name == e))
              return t.splice(n, 1), this.state.modeGen++, void It(this);
          }
        }),
        indentLine: Mt(function (e, t, n) {
          "string" != typeof t &&
            "number" != typeof t &&
            (t =
              null == t
                ? this.options.smartIndent
                  ? "smart"
                  : "prev"
                : t
                ? "add"
                : "subtract"),
            ge(this.doc, e) && Un(this, e, t, n);
        }),
        indentSelection: Mt(function (e) {
          for (var t = this.doc.sel.ranges, n = -1, r = 0; r < t.length; r++) {
            var o = t[r];
            if (o.empty())
              o.head.line > n &&
                (Un(this, o.head.line, e, !0),
                (n = o.head.line),
                r == this.doc.sel.primIndex && Rn(this));
            else {
              var i = o.from(),
                a = o.to(),
                s = Math.max(n, i.line);
              n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
              for (var u = s; n > u; ++u) Un(this, u, e);
              var l = this.doc.sel.ranges;
              0 == i.ch &&
                t.length == l.length &&
                l[r].from().ch > 0 &&
                be(this.doc, r, new pe(i, l[r].to()), Pa);
            }
          }
        }),
        getTokenAt: function (e, t) {
          return Or(this, e, t);
        },
        getLineTokens: function (e, t) {
          return Or(this, Li(e), t, !0);
        },
        getTokenTypeAt: function (e) {
          e = me(this.doc, e);
          var t,
            n = Ir(this, Qr(this.doc, e.line)),
            r = 0,
            o = (n.length - 1) / 2,
            i = e.ch;
          if (0 == i) t = n[2];
          else
            for (;;) {
              var a = (r + o) >> 1;
              if ((a ? n[2 * a - 1] : 0) >= i) o = a;
              else {
                if (!(n[2 * a + 1] < i)) {
                  t = n[2 * a + 2];
                  break;
                }
                r = a + 1;
              }
            }
          var s = t ? t.indexOf("cm-overlay ") : -1;
          return 0 > s ? t : 0 == s ? null : t.slice(0, s - 1);
        },
        getModeAt: function (t) {
          var n = this.doc.mode;
          return n.innerMode
            ? e.innerMode(n, this.getTokenAt(t).state).mode
            : n;
        },
        getHelper: function (e, t) {
          return this.getHelpers(e, t)[0];
        },
        getHelpers: function (e, t) {
          var n = [];
          if (!aa.hasOwnProperty(t)) return n;
          var r = aa[t],
            o = this.getModeAt(e);
          if ("string" == typeof o[t]) r[o[t]] && n.push(r[o[t]]);
          else if (o[t])
            for (var i = 0; i < o[t].length; i++) {
              var a = r[o[t][i]];
              a && n.push(a);
            }
          else
            o.helperType && r[o.helperType]
              ? n.push(r[o.helperType])
              : r[o.name] && n.push(r[o.name]);
          for (var i = 0; i < r._global.length; i++) {
            var s = r._global[i];
            s.pred(o, this) && -1 == To(n, s.val) && n.push(s.val);
          }
          return n;
        },
        getStateAfter: function (e, t) {
          var n = this.doc;
          return (
            (e = he(n, null == e ? n.first + n.size - 1 : e)),
            je(this, e + 1, t)
          );
        },
        cursorCoords: function (e, t) {
          var n,
            r = this.doc.sel.primary();
          return (
            (n =
              null == e
                ? r.head
                : "object" == typeof e
                ? me(this.doc, e)
                : e
                ? r.from()
                : r.to()),
            ft(this, n, t || "page")
          );
        },
        charCoords: function (e, t) {
          return dt(this, me(this.doc, e), t || "page");
        },
        coordsChar: function (e, t) {
          return (e = pt(this, e, t || "page")), vt(this, e.left, e.top);
        },
        lineAtHeight: function (e, t) {
          return (
            (e = pt(this, { top: e, left: 0 }, t || "page").top),
            no(this.doc, e + this.display.viewOffset)
          );
        },
        heightAtLine: function (e, t) {
          var n,
            r = !1;
          if ("number" == typeof e) {
            var o = this.doc.first + this.doc.size - 1;
            e < this.doc.first
              ? (e = this.doc.first)
              : e > o && ((e = o), (r = !0)),
              (n = Qr(this.doc, e));
          } else n = e;
          return (
            ct(this, n, { top: 0, left: 0 }, t || "page").top +
            (r ? this.doc.height - ro(n) : 0)
          );
        },
        defaultTextHeight: function () {
          return yt(this.display);
        },
        defaultCharWidth: function () {
          return Ct(this.display);
        },
        setGutterMarker: Mt(function (e, t, n) {
          return Wn(this.doc, e, "gutter", function (e) {
            var r = e.gutterMarkers || (e.gutterMarkers = {});
            return (r[t] = n), !n && Wo(r) && (e.gutterMarkers = null), !0;
          });
        }),
        clearGutter: Mt(function (e) {
          var t = this,
            n = t.doc,
            r = n.first;
          n.iter(function (n) {
            n.gutterMarkers &&
              n.gutterMarkers[e] &&
              ((n.gutterMarkers[e] = null),
              Pt(t, r, "gutter"),
              Wo(n.gutterMarkers) && (n.gutterMarkers = null)),
              ++r;
          });
        }),
        lineInfo: function (e) {
          if ("number" == typeof e) {
            if (!ge(this.doc, e)) return null;
            var t = e;
            if (((e = Qr(this.doc, e)), !e)) return null;
          } else {
            var t = to(e);
            if (null == t) return null;
          }
          return {
            line: t,
            handle: e,
            text: e.text,
            gutterMarkers: e.gutterMarkers,
            textClass: e.textClass,
            bgClass: e.bgClass,
            wrapClass: e.wrapClass,
            widgets: e.widgets,
          };
        },
        getViewport: function () {
          return { from: this.display.viewFrom, to: this.display.viewTo };
        },
        addWidget: function (e, t, n, r, o) {
          var i = this.display;
          e = ft(this, me(this.doc, e));
          var a = e.bottom,
            s = e.left;
          if (
            ((t.style.position = "absolute"),
            t.setAttribute("cm-ignore-events", "true"),
            this.display.input.setUneditable(t),
            i.sizer.appendChild(t),
            "over" == r)
          )
            a = e.top;
          else if ("above" == r || "near" == r) {
            var u = Math.max(i.wrapper.clientHeight, this.doc.height),
              l = Math.max(i.sizer.clientWidth, i.lineSpace.clientWidth);
            ("above" == r || e.bottom + t.offsetHeight > u) &&
            e.top > t.offsetHeight
              ? (a = e.top - t.offsetHeight)
              : e.bottom + t.offsetHeight <= u && (a = e.bottom),
              s + t.offsetWidth > l && (s = l - t.offsetWidth);
          }
          (t.style.top = a + "px"),
            (t.style.left = t.style.right = ""),
            "right" == o
              ? ((s = i.sizer.clientWidth - t.offsetWidth),
                (t.style.right = "0px"))
              : ("left" == o
                  ? (s = 0)
                  : "middle" == o &&
                    (s = (i.sizer.clientWidth - t.offsetWidth) / 2),
                (t.style.left = s + "px")),
            n && In(this, s, a, s + t.offsetWidth, a + t.offsetHeight);
        },
        triggerOnKeyDown: Mt(dn),
        triggerOnKeyPress: Mt(mn),
        triggerOnKeyUp: hn,
        execCommand: function (e) {
          return la.hasOwnProperty(e) ? la[e].call(null, this) : void 0;
        },
        triggerElectric: Mt(function (e) {
          J(this, e);
        }),
        findPosH: function (e, t, n, r) {
          var o = 1;
          0 > t && ((o = -1), (t = -t));
          for (
            var i = 0, a = me(this.doc, e);
            t > i && ((a = Hn(this.doc, a, o, n, r)), !a.hitSide);
            ++i
          );
          return a;
        },
        moveH: Mt(function (e, t) {
          var n = this;
          n.extendSelectionsBy(function (r) {
            return n.display.shift || n.doc.extend || r.empty()
              ? Hn(n.doc, r.head, e, t, n.options.rtlMoveVisually)
              : 0 > e
              ? r.from()
              : r.to();
          }, Ra);
        }),
        deleteH: Mt(function (e, t) {
          var n = this.doc.sel,
            r = this.doc;
          n.somethingSelected()
            ? r.replaceSelection("", null, "+delete")
            : jn(this, function (n) {
                var o = Hn(r, n.head, e, t, !1);
                return 0 > e
                  ? { from: o, to: n.head }
                  : { from: n.head, to: o };
              });
        }),
        findPosV: function (e, t, n, r) {
          var o = 1,
            i = r;
          0 > t && ((o = -1), (t = -t));
          for (var a = 0, s = me(this.doc, e); t > a; ++a) {
            var u = ft(this, s, "div");
            if (
              (null == i ? (i = u.left) : (u.left = i),
              (s = zn(this, u, o, n)),
              s.hitSide)
            )
              break;
          }
          return s;
        },
        moveV: Mt(function (e, t) {
          var n = this,
            r = this.doc,
            o = [],
            i = !n.display.shift && !r.extend && r.sel.somethingSelected();
          if (
            (r.extendSelectionsBy(function (a) {
              if (i) return 0 > e ? a.from() : a.to();
              var s = ft(n, a.head, "div");
              null != a.goalColumn && (s.left = a.goalColumn), o.push(s.left);
              var u = zn(n, s, e, t);
              return (
                "page" == t &&
                  a == r.sel.primary() &&
                  Ln(n, null, dt(n, u, "div").top - s.top),
                u
              );
            }, Ra),
            o.length)
          )
            for (var a = 0; a < r.sel.ranges.length; a++)
              r.sel.ranges[a].goalColumn = o[a];
        }),
        findWordAt: function (e) {
          var t = this.doc,
            n = Qr(t, e.line).text,
            r = e.ch,
            o = e.ch;
          if (n) {
            var i = this.getHelper(e, "wordChars");
            (e.xRel < 0 || o == n.length) && r ? --r : ++o;
            for (
              var a = n.charAt(r),
                s = Uo(a, i)
                  ? function (e) {
                      return Uo(e, i);
                    }
                  : /\s/.test(a)
                  ? function (e) {
                      return /\s/.test(e);
                    }
                  : function (e) {
                      return !/\s/.test(e) && !Uo(e);
                    };
              r > 0 && s(n.charAt(r - 1));

            )
              --r;
            for (; o < n.length && s(n.charAt(o)); ) ++o;
          }
          return new pe(Li(e.line, r), Li(e.line, o));
        },
        toggleOverwrite: function (e) {
          (null != e && e == this.state.overwrite) ||
            ((this.state.overwrite = !this.state.overwrite)
              ? Qa(this.display.cursorDiv, "CodeMirror-overwrite")
              : $a(this.display.cursorDiv, "CodeMirror-overwrite"),
            Oa(this, "overwriteToggle", this, this.state.overwrite));
        },
        hasFocus: function () {
          return this.display.input.getField() == Yo();
        },
        isReadOnly: function () {
          return !(!this.options.readOnly && !this.doc.cantEdit);
        },
        scrollTo: Mt(function (e, t) {
          (null == e && null == t) || Vn(this),
            null != e && (this.curOp.scrollLeft = e),
            null != t && (this.curOp.scrollTop = t);
        }),
        getScrollInfo: function () {
          var e = this.display.scroller;
          return {
            left: e.scrollLeft,
            top: e.scrollTop,
            height: e.scrollHeight - Ye(this) - this.display.barHeight,
            width: e.scrollWidth - Ye(this) - this.display.barWidth,
            clientHeight: Ge(this),
            clientWidth: Ke(this),
          };
        },
        scrollIntoView: Mt(function (e, t) {
          if (
            (null == e
              ? ((e = { from: this.doc.sel.primary().head, to: null }),
                null == t && (t = this.options.cursorScrollMargin))
              : "number" == typeof e
              ? (e = { from: Li(e, 0), to: null })
              : null == e.from && (e = { from: e, to: null }),
            e.to || (e.to = e.from),
            (e.margin = t || 0),
            null != e.from.line)
          )
            Vn(this), (this.curOp.scrollToPos = e);
          else {
            var n = Pn(
              this,
              Math.min(e.from.left, e.to.left),
              Math.min(e.from.top, e.to.top) - e.margin,
              Math.max(e.from.right, e.to.right),
              Math.max(e.from.bottom, e.to.bottom) + e.margin
            );
            this.scrollTo(n.scrollLeft, n.scrollTop);
          }
        }),
        setSize: Mt(function (e, t) {
          function n(e) {
            return "number" == typeof e || /^\d+$/.test(String(e))
              ? e + "px"
              : e;
          }
          var r = this;
          null != e && (r.display.wrapper.style.width = n(e)),
            null != t && (r.display.wrapper.style.height = n(t)),
            r.options.lineWrapping && at(this);
          var o = r.display.viewFrom;
          r.doc.iter(o, r.display.viewTo, function (e) {
            if (e.widgets)
              for (var t = 0; t < e.widgets.length; t++)
                if (e.widgets[t].noHScroll) {
                  Pt(r, o, "widget");
                  break;
                }
            ++o;
          }),
            (r.curOp.forceUpdate = !0),
            Oa(r, "refresh", this);
        }),
        operation: function (e) {
          return Bt(this, e);
        },
        refresh: Mt(function () {
          var e = this.display.cachedTextHeight;
          It(this),
            (this.curOp.forceUpdate = !0),
            st(this),
            this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop),
            c(this),
            (null == e || Math.abs(e - yt(this.display)) > 0.5) && a(this),
            Oa(this, "refresh", this);
        }),
        swapDoc: Mt(function (e) {
          var t = this.doc;
          return (
            (t.cm = null),
            $r(this, e),
            st(this),
            this.display.input.reset(),
            this.scrollTo(e.scrollLeft, e.scrollTop),
            (this.curOp.forceScroll = !0),
            xo(this, "swapDoc", this, t),
            t
          );
        }),
        getInputField: function () {
          return this.display.input.getField();
        },
        getWrapperElement: function () {
          return this.display.wrapper;
        },
        getScrollerElement: function () {
          return this.display.scroller;
        },
        getGutterElement: function () {
          return this.display.gutters;
        },
      }),
        _o(e);
      var Ji = (e.defaults = {}),
        ea = (e.optionHandlers = {}),
        ta = (e.Init = {
          toString: function () {
            return "CodeMirror.Init";
          },
        });
      qn(
        "value",
        "",
        function (e, t) {
          e.setValue(t);
        },
        !0
      ),
        qn(
          "mode",
          null,
          function (e, t) {
            (e.doc.modeOption = t), n(e);
          },
          !0
        ),
        qn("indentUnit", 2, n, !0),
        qn("indentWithTabs", !1),
        qn("smartIndent", !0),
        qn(
          "tabSize",
          4,
          function (e) {
            r(e), st(e), It(e);
          },
          !0
        ),
        qn("lineSeparator", null, function (e, t) {
          if (((e.doc.lineSep = t), t)) {
            var n = [],
              r = e.doc.first;
            e.doc.iter(function (e) {
              for (var o = 0; ; ) {
                var i = e.text.indexOf(t, o);
                if (-1 == i) break;
                (o = i + t.length), n.push(Li(r, i));
              }
              r++;
            });
            for (var o = n.length - 1; o >= 0; o--)
              On(e.doc, t, n[o], Li(n[o].line, n[o].ch + t.length));
          }
        }),
        qn(
          "specialChars",
          /[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g,
          function (t, n, r) {
            (t.state.specialChars = new RegExp(
              n.source + (n.test("	") ? "" : "|	"),
              "g"
            )),
              r != e.Init && t.refresh();
          }
        ),
        qn(
          "specialCharPlaceholder",
          Vr,
          function (e) {
            e.refresh();
          },
          !0
        ),
        qn("electricChars", !0),
        qn(
          "inputStyle",
          Bi ? "contenteditable" : "textarea",
          function () {
            throw new Error(
              "inputStyle can not (yet) be changed in a running editor"
            );
          },
          !0
        ),
        qn("rtlMoveVisually", !Mi),
        qn("wholeLineUpdateBefore", !0),
        qn(
          "theme",
          "default",
          function (e) {
            s(e), u(e);
          },
          !0
        ),
        qn("keyMap", "default", function (t, n, r) {
          var o = Kn(n),
            i = r != e.Init && Kn(r);
          i && i.detach && i.detach(t, o), o.attach && o.attach(t, i || null);
        }),
        qn("extraKeys", null),
        qn("lineWrapping", !1, o, !0),
        qn(
          "gutters",
          [],
          function (e) {
            f(e.options), u(e);
          },
          !0
        ),
        qn(
          "fixedGutter",
          !0,
          function (e, t) {
            (e.display.gutters.style.left = t ? w(e.display) + "px" : "0"),
              e.refresh();
          },
          !0
        ),
        qn(
          "coverGutterNextToScrollbar",
          !1,
          function (e) {
            y(e);
          },
          !0
        ),
        qn(
          "scrollbarStyle",
          "native",
          function (e) {
            g(e),
              y(e),
              e.display.scrollbars.setScrollTop(e.doc.scrollTop),
              e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
          },
          !0
        ),
        qn(
          "lineNumbers",
          !1,
          function (e) {
            f(e.options), u(e);
          },
          !0
        ),
        qn("firstLineNumber", 1, u, !0),
        qn(
          "lineNumberFormatter",
          function (e) {
            return e;
          },
          u,
          !0
        ),
        qn("showCursorWhenSelecting", !1, Te, !0),
        qn("resetSelectionOnContextMenu", !0),
        qn("lineWiseCopyCut", !0),
        qn("readOnly", !1, function (e, t) {
          "nocursor" == t
            ? (yn(e), e.display.input.blur(), (e.display.disabled = !0))
            : (e.display.disabled = !1),
            e.display.input.readOnlyChanged(t);
        }),
        qn(
          "disableInput",
          !1,
          function (e, t) {
            t || e.display.input.reset();
          },
          !0
        ),
        qn("dragDrop", !0, Ht),
        qn("allowDropFileTypes", null),
        qn("cursorBlinkRate", 530),
        qn("cursorScrollMargin", 0),
        qn("cursorHeight", 1, Te, !0),
        qn("singleCursorHeightPerLine", !0, Te, !0),
        qn("workTime", 100),
        qn("workDelay", 100),
        qn("flattenSpans", !0, r, !0),
        qn("addModeClass", !1, r, !0),
        qn("pollInterval", 100),
        qn("undoDepth", 200, function (e, t) {
          e.doc.history.undoDepth = t;
        }),
        qn("historyEventDelay", 1250),
        qn(
          "viewportMargin",
          10,
          function (e) {
            e.refresh();
          },
          !0
        ),
        qn("maxHighlightLength", 1e4, r, !0),
        qn("moveInputWithCursor", !0, function (e, t) {
          t || e.display.input.resetPosition();
        }),
        qn("tabindex", null, function (e, t) {
          e.display.input.getField().tabIndex = t || "";
        }),
        qn("autofocus", null);
      var na = (e.modes = {}),
        ra = (e.mimeModes = {});
      (e.defineMode = function (t, n) {
        e.defaults.mode || "null" == t || (e.defaults.mode = t),
          arguments.length > 2 &&
            (n.dependencies = Array.prototype.slice.call(arguments, 2)),
          (na[t] = n);
      }),
        (e.defineMIME = function (e, t) {
          ra[e] = t;
        }),
        (e.resolveMode = function (t) {
          if ("string" == typeof t && ra.hasOwnProperty(t)) t = ra[t];
          else if (
            t &&
            "string" == typeof t.name &&
            ra.hasOwnProperty(t.name)
          ) {
            var n = ra[t.name];
            "string" == typeof n && (n = { name: n }),
              (t = Lo(n, t)),
              (t.name = n.name);
          } else if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+xml$/.test(t))
            return e.resolveMode("application/xml");
          return "string" == typeof t ? { name: t } : t || { name: "null" };
        }),
        (e.getMode = function (t, n) {
          var n = e.resolveMode(n),
            r = na[n.name];
          if (!r) return e.getMode(t, "text/plain");
          var o = r(t, n);
          if (oa.hasOwnProperty(n.name)) {
            var i = oa[n.name];
            for (var a in i)
              i.hasOwnProperty(a) &&
                (o.hasOwnProperty(a) && (o["_" + a] = o[a]), (o[a] = i[a]));
          }
          if (
            ((o.name = n.name),
            n.helperType && (o.helperType = n.helperType),
            n.modeProps)
          )
            for (var a in n.modeProps) o[a] = n.modeProps[a];
          return o;
        }),
        e.defineMode("null", function () {
          return {
            token: function (e) {
              e.skipToEnd();
            },
          };
        }),
        e.defineMIME("text/plain", "null");
      var oa = (e.modeExtensions = {});
      (e.extendMode = function (e, t) {
        var n = oa.hasOwnProperty(e) ? oa[e] : (oa[e] = {});
        Ro(t, n);
      }),
        (e.defineExtension = function (t, n) {
          e.prototype[t] = n;
        }),
        (e.defineDocExtension = function (e, t) {
          Ea.prototype[e] = t;
        }),
        (e.defineOption = qn);
      var ia = [];
      e.defineInitHook = function (e) {
        ia.push(e);
      };
      var aa = (e.helpers = {});
      (e.registerHelper = function (t, n, r) {
        aa.hasOwnProperty(t) || (aa[t] = e[t] = { _global: [] }),
          (aa[t][n] = r);
      }),
        (e.registerGlobalHelper = function (t, n, r, o) {
          e.registerHelper(t, n, o), aa[t]._global.push({ pred: r, val: o });
        });
      var sa = (e.copyState = function (e, t) {
          if (t === !0) return t;
          if (e.copyState) return e.copyState(t);
          var n = {};
          for (var r in t) {
            var o = t[r];
            o instanceof Array && (o = o.concat([])), (n[r] = o);
          }
          return n;
        }),
        ua = (e.startState = function (e, t, n) {
          return e.startState ? e.startState(t, n) : !0;
        });
      e.innerMode = function (e, t) {
        for (; e.innerMode; ) {
          var n = e.innerMode(t);
          if (!n || n.mode == e) break;
          (t = n.state), (e = n.mode);
        }
        return n || { mode: e, state: t };
      };
      var la = (e.commands = {
          selectAll: function (e) {
            e.setSelection(Li(e.firstLine(), 0), Li(e.lastLine()), Pa);
          },
          singleSelection: function (e) {
            e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Pa);
          },
          killLine: function (e) {
            jn(e, function (t) {
              if (t.empty()) {
                var n = Qr(e.doc, t.head.line).text.length;
                return t.head.ch == n && t.head.line < e.lastLine()
                  ? { from: t.head, to: Li(t.head.line + 1, 0) }
                  : { from: t.head, to: Li(t.head.line, n) };
              }
              return { from: t.from(), to: t.to() };
            });
          },
          deleteLine: function (e) {
            jn(e, function (t) {
              return {
                from: Li(t.from().line, 0),
                to: me(e.doc, Li(t.to().line + 1, 0)),
              };
            });
          },
          delLineLeft: function (e) {
            jn(e, function (e) {
              return { from: Li(e.from().line, 0), to: e.from() };
            });
          },
          delWrappedLineLeft: function (e) {
            jn(e, function (t) {
              var n = e.charCoords(t.head, "div").top + 5,
                r = e.coordsChar({ left: 0, top: n }, "div");
              return { from: r, to: t.from() };
            });
          },
          delWrappedLineRight: function (e) {
            jn(e, function (t) {
              var n = e.charCoords(t.head, "div").top + 5,
                r = e.coordsChar(
                  { left: e.display.lineDiv.offsetWidth + 100, top: n },
                  "div"
                );
              return { from: t.from(), to: r };
            });
          },
          undo: function (e) {
            e.undo();
          },
          redo: function (e) {
            e.redo();
          },
          undoSelection: function (e) {
            e.undoSelection();
          },
          redoSelection: function (e) {
            e.redoSelection();
          },
          goDocStart: function (e) {
            e.extendSelection(Li(e.firstLine(), 0));
          },
          goDocEnd: function (e) {
            e.extendSelection(Li(e.lastLine()));
          },
          goLineStart: function (e) {
            e.extendSelectionsBy(
              function (t) {
                return ai(e, t.head.line);
              },
              { origin: "+move", bias: 1 }
            );
          },
          goLineStartSmart: function (e) {
            e.extendSelectionsBy(
              function (t) {
                return ui(e, t.head);
              },
              { origin: "+move", bias: 1 }
            );
          },
          goLineEnd: function (e) {
            e.extendSelectionsBy(
              function (t) {
                return si(e, t.head.line);
              },
              { origin: "+move", bias: -1 }
            );
          },
          goLineRight: function (e) {
            e.extendSelectionsBy(function (t) {
              var n = e.charCoords(t.head, "div").top + 5;
              return e.coordsChar(
                { left: e.display.lineDiv.offsetWidth + 100, top: n },
                "div"
              );
            }, Ra);
          },
          goLineLeft: function (e) {
            e.extendSelectionsBy(function (t) {
              var n = e.charCoords(t.head, "div").top + 5;
              return e.coordsChar({ left: 0, top: n }, "div");
            }, Ra);
          },
          goLineLeftSmart: function (e) {
            e.extendSelectionsBy(function (t) {
              var n = e.charCoords(t.head, "div").top + 5,
                r = e.coordsChar({ left: 0, top: n }, "div");
              return r.ch < e.getLine(r.line).search(/\S/) ? ui(e, t.head) : r;
            }, Ra);
          },
          goLineUp: function (e) {
            e.moveV(-1, "line");
          },
          goLineDown: function (e) {
            e.moveV(1, "line");
          },
          goPageUp: function (e) {
            e.moveV(-1, "page");
          },
          goPageDown: function (e) {
            e.moveV(1, "page");
          },
          goCharLeft: function (e) {
            e.moveH(-1, "char");
          },
          goCharRight: function (e) {
            e.moveH(1, "char");
          },
          goColumnLeft: function (e) {
            e.moveH(-1, "column");
          },
          goColumnRight: function (e) {
            e.moveH(1, "column");
          },
          goWordLeft: function (e) {
            e.moveH(-1, "word");
          },
          goGroupRight: function (e) {
            e.moveH(1, "group");
          },
          goGroupLeft: function (e) {
            e.moveH(-1, "group");
          },
          goWordRight: function (e) {
            e.moveH(1, "word");
          },
          delCharBefore: function (e) {
            e.deleteH(-1, "char");
          },
          delCharAfter: function (e) {
            e.deleteH(1, "char");
          },
          delWordBefore: function (e) {
            e.deleteH(-1, "word");
          },
          delWordAfter: function (e) {
            e.deleteH(1, "word");
          },
          delGroupBefore: function (e) {
            e.deleteH(-1, "group");
          },
          delGroupAfter: function (e) {
            e.deleteH(1, "group");
          },
          indentAuto: function (e) {
            e.indentSelection("smart");
          },
          indentMore: function (e) {
            e.indentSelection("add");
          },
          indentLess: function (e) {
            e.indentSelection("subtract");
          },
          insertTab: function (e) {
            e.replaceSelection("	");
          },
          insertSoftTab: function (e) {
            for (
              var t = [], n = e.listSelections(), r = e.options.tabSize, o = 0;
              o < n.length;
              o++
            ) {
              var i = n[o].from(),
                a = Va(e.getLine(i.line), i.ch, r);
              t.push(new Array(r - (a % r) + 1).join(" "));
            }
            e.replaceSelections(t);
          },
          defaultTab: function (e) {
            e.somethingSelected()
              ? e.indentSelection("add")
              : e.execCommand("insertTab");
          },
          transposeChars: function (e) {
            Bt(e, function () {
              for (
                var t = e.listSelections(), n = [], r = 0;
                r < t.length;
                r++
              ) {
                var o = t[r].head,
                  i = Qr(e.doc, o.line).text;
                if (i)
                  if (
                    (o.ch == i.length && (o = new Li(o.line, o.ch - 1)),
                    o.ch > 0)
                  )
                    (o = new Li(o.line, o.ch + 1)),
                      e.replaceRange(
                        i.charAt(o.ch - 1) + i.charAt(o.ch - 2),
                        Li(o.line, o.ch - 2),
                        o,
                        "+transpose"
                      );
                  else if (o.line > e.doc.first) {
                    var a = Qr(e.doc, o.line - 1).text;
                    a &&
                      e.replaceRange(
                        i.charAt(0) +
                          e.doc.lineSeparator() +
                          a.charAt(a.length - 1),
                        Li(o.line - 1, a.length - 1),
                        Li(o.line, 1),
                        "+transpose"
                      );
                  }
                n.push(new pe(o, o));
              }
              e.setSelections(n);
            });
          },
          newlineAndIndent: function (e) {
            Bt(e, function () {
              for (var t = e.listSelections().length, n = 0; t > n; n++) {
                var r = e.listSelections()[n];
                e.replaceRange(
                  e.doc.lineSeparator(),
                  r.anchor,
                  r.head,
                  "+input"
                ),
                  e.indentLine(r.from().line + 1, null, !0);
              }
              Rn(e);
            });
          },
          toggleOverwrite: function (e) {
            e.toggleOverwrite();
          },
        }),
        ca = (e.keyMap = {});
      (ca.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection",
      }),
        (ca.pcDefault = {
          "Ctrl-A": "selectAll",
          "Ctrl-D": "deleteLine",
          "Ctrl-Z": "undo",
          "Shift-Ctrl-Z": "redo",
          "Ctrl-Y": "redo",
          "Ctrl-Home": "goDocStart",
          "Ctrl-End": "goDocEnd",
          "Ctrl-Up": "goLineUp",
          "Ctrl-Down": "goLineDown",
          "Ctrl-Left": "goGroupLeft",
          "Ctrl-Right": "goGroupRight",
          "Alt-Left": "goLineStart",
          "Alt-Right": "goLineEnd",
          "Ctrl-Backspace": "delGroupBefore",
          "Ctrl-Delete": "delGroupAfter",
          "Ctrl-S": "save",
          "Ctrl-F": "find",
          "Ctrl-G": "findNext",
          "Shift-Ctrl-G": "findPrev",
          "Shift-Ctrl-F": "replace",
          "Shift-Ctrl-R": "replaceAll",
          "Ctrl-[": "indentLess",
          "Ctrl-]": "indentMore",
          "Ctrl-U": "undoSelection",
          "Shift-Ctrl-U": "redoSelection",
          "Alt-U": "redoSelection",
          fallthrough: "basic",
        }),
        (ca.emacsy = {
          "Ctrl-F": "goCharRight",
          "Ctrl-B": "goCharLeft",
          "Ctrl-P": "goLineUp",
          "Ctrl-N": "goLineDown",
          "Alt-F": "goWordRight",
          "Alt-B": "goWordLeft",
          "Ctrl-A": "goLineStart",
          "Ctrl-E": "goLineEnd",
          "Ctrl-V": "goPageDown",
          "Shift-Ctrl-V": "goPageUp",
          "Ctrl-D": "delCharAfter",
          "Ctrl-H": "delCharBefore",
          "Alt-D": "delWordAfter",
          "Alt-Backspace": "delWordBefore",
          "Ctrl-K": "killLine",
          "Ctrl-T": "transposeChars",
        }),
        (ca.macDefault = {
          "Cmd-A": "selectAll",
          "Cmd-D": "deleteLine",
          "Cmd-Z": "undo",
          "Shift-Cmd-Z": "redo",
          "Cmd-Y": "redo",
          "Cmd-Home": "goDocStart",
          "Cmd-Up": "goDocStart",
          "Cmd-End": "goDocEnd",
          "Cmd-Down": "goDocEnd",
          "Alt-Left": "goGroupLeft",
          "Alt-Right": "goGroupRight",
          "Cmd-Left": "goLineLeft",
          "Cmd-Right": "goLineRight",
          "Alt-Backspace": "delGroupBefore",
          "Ctrl-Alt-Backspace": "delGroupAfter",
          "Alt-Delete": "delGroupAfter",
          "Cmd-S": "save",
          "Cmd-F": "find",
          "Cmd-G": "findNext",
          "Shift-Cmd-G": "findPrev",
          "Cmd-Alt-F": "replace",
          "Shift-Cmd-Alt-F": "replaceAll",
          "Cmd-[": "indentLess",
          "Cmd-]": "indentMore",
          "Cmd-Backspace": "delWrappedLineLeft",
          "Cmd-Delete": "delWrappedLineRight",
          "Cmd-U": "undoSelection",
          "Shift-Cmd-U": "redoSelection",
          "Ctrl-Up": "goDocStart",
          "Ctrl-Down": "goDocEnd",
          fallthrough: ["basic", "emacsy"],
        }),
        (ca["default"] = _i ? ca.macDefault : ca.pcDefault),
        (e.normalizeKeyMap = function (e) {
          var t = {};
          for (var n in e)
            if (e.hasOwnProperty(n)) {
              var r = e[n];
              if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
              if ("..." == r) {
                delete e[n];
                continue;
              }
              for (var o = Io(n.split(" "), Yn), i = 0; i < o.length; i++) {
                var a, s;
                i == o.length - 1
                  ? ((s = o.join(" ")), (a = r))
                  : ((s = o.slice(0, i + 1).join(" ")), (a = "..."));
                var u = t[s];
                if (u) {
                  if (u != a) throw new Error("Inconsistent bindings for " + s);
                } else t[s] = a;
              }
              delete e[n];
            }
          for (var l in t) e[l] = t[l];
          return e;
        });
      var pa = (e.lookupKey = function (e, t, n, r) {
          t = Kn(t);
          var o = t.call ? t.call(e, r) : t[e];
          if (o === !1) return "nothing";
          if ("..." === o) return "multi";
          if (null != o && n(o)) return "handled";
          if (t.fallthrough) {
            if (
              "[object Array]" != Object.prototype.toString.call(t.fallthrough)
            )
              return pa(e, t.fallthrough, n, r);
            for (var i = 0; i < t.fallthrough.length; i++) {
              var a = pa(e, t.fallthrough[i], n, r);
              if (a) return a;
            }
          }
        }),
        da = (e.isModifierKey = function (e) {
          var t = "string" == typeof e ? e : os[e.keyCode];
          return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t;
        }),
        fa = (e.keyName = function (e, t) {
          if (wi && 34 == e.keyCode && e["char"]) return !1;
          var n = os[e.keyCode],
            r = n;
          return null == r || e.altGraphKey
            ? !1
            : (e.altKey && "Alt" != n && (r = "Alt-" + r),
              (Fi ? e.metaKey : e.ctrlKey) && "Ctrl" != n && (r = "Ctrl-" + r),
              (Fi ? e.ctrlKey : e.metaKey) && "Cmd" != n && (r = "Cmd-" + r),
              !t && e.shiftKey && "Shift" != n && (r = "Shift-" + r),
              r);
        });
      e.fromTextArea = function (t, n) {
        function r() {
          t.value = l.getValue();
        }
        if (
          ((n = n ? Ro(n) : {}),
          (n.value = t.value),
          !n.tabindex && t.tabIndex && (n.tabindex = t.tabIndex),
          !n.placeholder && t.placeholder && (n.placeholder = t.placeholder),
          null == n.autofocus)
        ) {
          var o = Yo();
          n.autofocus =
            o == t ||
            (null != t.getAttribute("autofocus") && o == document.body);
        }
        if (t.form && (Ba(t.form, "submit", r), !n.leaveSubmitMethodAlone)) {
          var i = t.form,
            a = i.submit;
          try {
            var s = (i.submit = function () {
              r(), (i.submit = a), i.submit(), (i.submit = s);
            });
          } catch (u) {}
        }
        (n.finishInit = function (e) {
          (e.save = r),
            (e.getTextArea = function () {
              return t;
            }),
            (e.toTextArea = function () {
              (e.toTextArea = isNaN),
                r(),
                t.parentNode.removeChild(e.getWrapperElement()),
                (t.style.display = ""),
                t.form &&
                  (Ma(t.form, "submit", r),
                  "function" == typeof t.form.submit && (t.form.submit = a));
            });
        }),
          (t.style.display = "none");
        var l = e(function (e) {
          t.parentNode.insertBefore(e, t.nextSibling);
        }, n);
        return l;
      };
      var ha = (e.StringStream = function (e, t) {
        (this.pos = this.start = 0),
          (this.string = e),
          (this.tabSize = t || 8),
          (this.lastColumnPos = this.lastColumnValue = 0),
          (this.lineStart = 0);
      });
      ha.prototype = {
        eol: function () {
          return this.pos >= this.string.length;
        },
        sol: function () {
          return this.pos == this.lineStart;
        },
        peek: function () {
          return this.string.charAt(this.pos) || void 0;
        },
        next: function () {
          return this.pos < this.string.length
            ? this.string.charAt(this.pos++)
            : void 0;
        },
        eat: function (e) {
          var t = this.string.charAt(this.pos);
          if ("string" == typeof e) var n = t == e;
          else var n = t && (e.test ? e.test(t) : e(t));
          return n ? (++this.pos, t) : void 0;
        },
        eatWhile: function (e) {
          for (var t = this.pos; this.eat(e); );
          return this.pos > t;
        },
        eatSpace: function () {
          for (
            var e = this.pos;
            /[\s\u00a0]/.test(this.string.charAt(this.pos));

          )
            ++this.pos;
          return this.pos > e;
        },
        skipToEnd: function () {
          this.pos = this.string.length;
        },
        skipTo: function (e) {
          var t = this.string.indexOf(e, this.pos);
          return t > -1 ? ((this.pos = t), !0) : void 0;
        },
        backUp: function (e) {
          this.pos -= e;
        },
        column: function () {
          return (
            this.lastColumnPos < this.start &&
              ((this.lastColumnValue = Va(
                this.string,
                this.start,
                this.tabSize,
                this.lastColumnPos,
                this.lastColumnValue
              )),
              (this.lastColumnPos = this.start)),
            this.lastColumnValue -
              (this.lineStart
                ? Va(this.string, this.lineStart, this.tabSize)
                : 0)
          );
        },
        indentation: function () {
          return (
            Va(this.string, null, this.tabSize) -
            (this.lineStart ? Va(this.string, this.lineStart, this.tabSize) : 0)
          );
        },
        match: function (e, t, n) {
          if ("string" != typeof e) {
            var r = this.string.slice(this.pos).match(e);
            return r && r.index > 0
              ? null
              : (r && t !== !1 && (this.pos += r[0].length), r);
          }
          var o = function (e) {
              return n ? e.toLowerCase() : e;
            },
            i = this.string.substr(this.pos, e.length);
          return o(i) == o(e)
            ? (t !== !1 && (this.pos += e.length), !0)
            : void 0;
        },
        current: function () {
          return this.string.slice(this.start, this.pos);
        },
        hideFirstChars: function (e, t) {
          this.lineStart += e;
          try {
            return t();
          } finally {
            this.lineStart -= e;
          }
        },
      };
      var ma = 0,
        va = (e.TextMarker = function (e, t) {
          (this.lines = []), (this.type = t), (this.doc = e), (this.id = ++ma);
        });
      _o(va),
        (va.prototype.clear = function () {
          if (!this.explicitlyCleared) {
            var e = this.doc.cm,
              t = e && !e.curOp;
            if ((t && At(e), Bo(this, "clear"))) {
              var n = this.find();
              n && xo(this, "clear", n.from, n.to);
            }
            for (var r = null, o = null, i = 0; i < this.lines.length; ++i) {
              var a = this.lines[i],
                s = er(a.markedSpans, this);
              e && !this.collapsed
                ? Pt(e, to(a), "text")
                : e &&
                  (null != s.to && (o = to(a)), null != s.from && (r = to(a))),
                (a.markedSpans = tr(a.markedSpans, s)),
                null == s.from &&
                  this.collapsed &&
                  !br(this.doc, a) &&
                  e &&
                  eo(a, yt(e.display));
            }
            if (e && this.collapsed && !e.options.lineWrapping)
              for (var i = 0; i < this.lines.length; ++i) {
                var u = yr(this.lines[i]),
                  l = p(u);
                l > e.display.maxLineLength &&
                  ((e.display.maxLine = u),
                  (e.display.maxLineLength = l),
                  (e.display.maxLineChanged = !0));
              }
            null != r && e && this.collapsed && It(e, r, o + 1),
              (this.lines.length = 0),
              (this.explicitlyCleared = !0),
              this.atomic &&
                this.doc.cantEdit &&
                ((this.doc.cantEdit = !1), e && Be(e.doc)),
              e && xo(e, "markerCleared", e, this),
              t && bt(e),
              this.parent && this.parent.clear();
          }
        }),
        (va.prototype.find = function (e, t) {
          null == e && "bookmark" == this.type && (e = 1);
          for (var n, r, o = 0; o < this.lines.length; ++o) {
            var i = this.lines[o],
              a = er(i.markedSpans, this);
            if (null != a.from && ((n = Li(t ? i : to(i), a.from)), -1 == e))
              return n;
            if (null != a.to && ((r = Li(t ? i : to(i), a.to)), 1 == e))
              return r;
          }
          return n && { from: n, to: r };
        }),
        (va.prototype.changed = function () {
          var e = this.find(-1, !0),
            t = this,
            n = this.doc.cm;
          e &&
            n &&
            Bt(n, function () {
              var r = e.line,
                o = to(e.line),
                i = Je(n, o);
              if (
                (i &&
                  (it(i),
                  (n.curOp.selectionChanged = n.curOp.forceUpdate = !0)),
                (n.curOp.updateMaxLine = !0),
                !br(t.doc, r) && null != t.height)
              ) {
                var a = t.height;
                t.height = null;
                var s = xr(t) - a;
                s && eo(r, r.height + s);
              }
            });
        }),
        (va.prototype.attachLine = function (e) {
          if (!this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            (t.maybeHiddenMarkers && -1 != To(t.maybeHiddenMarkers, this)) ||
              (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(
                this
              );
          }
          this.lines.push(e);
        }),
        (va.prototype.detachLine = function (e) {
          if (
            (this.lines.splice(To(this.lines, e), 1),
            !this.lines.length && this.doc.cm)
          ) {
            var t = this.doc.cm.curOp;
            (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
          }
        });
      var ma = 0,
        ga = (e.SharedTextMarker = function (e, t) {
          (this.markers = e), (this.primary = t);
          for (var n = 0; n < e.length; ++n) e[n].parent = this;
        });
      _o(ga),
        (ga.prototype.clear = function () {
          if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var e = 0; e < this.markers.length; ++e)
              this.markers[e].clear();
            xo(this, "clear");
          }
        }),
        (ga.prototype.find = function (e, t) {
          return this.primary.find(e, t);
        });
      var ya = (e.LineWidget = function (e, t, n) {
        if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
        (this.doc = e), (this.node = t);
      });
      _o(ya),
        (ya.prototype.clear = function () {
          var e = this.doc.cm,
            t = this.line.widgets,
            n = this.line,
            r = to(n);
          if (null != r && t) {
            for (var o = 0; o < t.length; ++o) t[o] == this && t.splice(o--, 1);
            t.length || (n.widgets = null);
            var i = xr(this);
            eo(n, Math.max(0, n.height - i)),
              e &&
                Bt(e, function () {
                  wr(e, n, -i), Pt(e, r, "widget");
                });
          }
        }),
        (ya.prototype.changed = function () {
          var e = this.height,
            t = this.doc.cm,
            n = this.line;
          this.height = null;
          var r = xr(this) - e;
          r &&
            (eo(n, n.height + r),
            t &&
              Bt(t, function () {
                (t.curOp.forceUpdate = !0), wr(t, n, r);
              }));
        });
      var Ca = (e.Line = function (e, t, n) {
        (this.text = e), cr(this, t), (this.height = n ? n(this) : 1);
      });
      _o(Ca),
        (Ca.prototype.lineNo = function () {
          return to(this);
        });
      var Aa = {},
        Da = {};
      (Kr.prototype = {
        chunkSize: function () {
          return this.lines.length;
        },
        removeInner: function (e, t) {
          for (var n = e, r = e + t; r > n; ++n) {
            var o = this.lines[n];
            (this.height -= o.height), Sr(o), xo(o, "delete");
          }
          this.lines.splice(e, t);
        },
        collapse: function (e) {
          e.push.apply(e, this.lines);
        },
        insertInner: function (e, t, n) {
          (this.height += n),
            (this.lines = this.lines
              .slice(0, e)
              .concat(t)
              .concat(this.lines.slice(e)));
          for (var r = 0; r < t.length; ++r) t[r].parent = this;
        },
        iterN: function (e, t, n) {
          for (var r = e + t; r > e; ++e) if (n(this.lines[e])) return !0;
        },
      }),
        (Gr.prototype = {
          chunkSize: function () {
            return this.size;
          },
          removeInner: function (e, t) {
            this.size -= t;
            for (var n = 0; n < this.children.length; ++n) {
              var r = this.children[n],
                o = r.chunkSize();
              if (o > e) {
                var i = Math.min(t, o - e),
                  a = r.height;
                if (
                  (r.removeInner(e, i),
                  (this.height -= a - r.height),
                  o == i && (this.children.splice(n--, 1), (r.parent = null)),
                  0 == (t -= i))
                )
                  break;
                e = 0;
              } else e -= o;
            }
            if (
              this.size - t < 25 &&
              (this.children.length > 1 || !(this.children[0] instanceof Kr))
            ) {
              var s = [];
              this.collapse(s),
                (this.children = [new Kr(s)]),
                (this.children[0].parent = this);
            }
          },
          collapse: function (e) {
            for (var t = 0; t < this.children.length; ++t)
              this.children[t].collapse(e);
          },
          insertInner: function (e, t, n) {
            (this.size += t.length), (this.height += n);
            for (var r = 0; r < this.children.length; ++r) {
              var o = this.children[r],
                i = o.chunkSize();
              if (i >= e) {
                if ((o.insertInner(e, t, n), o.lines && o.lines.length > 50)) {
                  for (; o.lines.length > 50; ) {
                    var a = o.lines.splice(o.lines.length - 25, 25),
                      s = new Kr(a);
                    (o.height -= s.height),
                      this.children.splice(r + 1, 0, s),
                      (s.parent = this);
                  }
                  this.maybeSpill();
                }
                break;
              }
              e -= i;
            }
          },
          maybeSpill: function () {
            if (!(this.children.length <= 10)) {
              var e = this;
              do {
                var t = e.children.splice(e.children.length - 5, 5),
                  n = new Gr(t);
                if (e.parent) {
                  (e.size -= n.size), (e.height -= n.height);
                  var r = To(e.parent.children, e);
                  e.parent.children.splice(r + 1, 0, n);
                } else {
                  var o = new Gr(e.children);
                  (o.parent = e), (e.children = [o, n]), (e = o);
                }
                n.parent = e.parent;
              } while (e.children.length > 10);
              e.parent.maybeSpill();
            }
          },
          iterN: function (e, t, n) {
            for (var r = 0; r < this.children.length; ++r) {
              var o = this.children[r],
                i = o.chunkSize();
              if (i > e) {
                var a = Math.min(t, i - e);
                if (o.iterN(e, a, n)) return !0;
                if (0 == (t -= a)) break;
                e = 0;
              } else e -= i;
            }
          },
        });
      var ba = 0,
        Ea = (e.Doc = function (e, t, n, r) {
          if (!(this instanceof Ea)) return new Ea(e, t, n, r);
          null == n && (n = 0),
            Gr.call(this, [new Kr([new Ca("", null)])]),
            (this.first = n),
            (this.scrollTop = this.scrollLeft = 0),
            (this.cantEdit = !1),
            (this.cleanGeneration = 1),
            (this.frontier = n);
          var o = Li(n, 0);
          (this.sel = fe(o)),
            (this.history = new io(null)),
            (this.id = ++ba),
            (this.modeOption = t),
            (this.lineSep = r),
            (this.extend = !1),
            "string" == typeof e && (e = this.splitLines(e)),
            Yr(this, { from: o, to: o, text: e }),
            Ne(this, fe(o), Pa);
        });
      (Ea.prototype = Lo(Gr.prototype, {
        constructor: Ea,
        iter: function (e, t, n) {
          n
            ? this.iterN(e - this.first, t - e, n)
            : this.iterN(this.first, this.first + this.size, e);
        },
        insert: function (e, t) {
          for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
          this.insertInner(e - this.first, t, n);
        },
        remove: function (e, t) {
          this.removeInner(e - this.first, t);
        },
        getValue: function (e) {
          var t = Jr(this, this.first, this.first + this.size);
          return e === !1 ? t : t.join(e || this.lineSeparator());
        },
        setValue: Ot(function (e) {
          var t = Li(this.first, 0),
            n = this.first + this.size - 1;
          Nn(
            this,
            {
              from: t,
              to: Li(n, Qr(this, n).text.length),
              text: this.splitLines(e),
              origin: "setValue",
              full: !0,
            },
            !0
          ),
            Ne(this, fe(t));
        }),
        replaceRange: function (e, t, n, r) {
          (t = me(this, t)), (n = n ? me(this, n) : t), On(this, e, t, n, r);
        },
        getRange: function (e, t, n) {
          var r = Zr(this, me(this, e), me(this, t));
          return n === !1 ? r : r.join(n || this.lineSeparator());
        },
        getLine: function (e) {
          var t = this.getLineHandle(e);
          return t && t.text;
        },
        getLineHandle: function (e) {
          return ge(this, e) ? Qr(this, e) : void 0;
        },
        getLineNumber: function (e) {
          return to(e);
        },
        getLineHandleVisualStart: function (e) {
          return "number" == typeof e && (e = Qr(this, e)), yr(e);
        },
        lineCount: function () {
          return this.size;
        },
        firstLine: function () {
          return this.first;
        },
        lastLine: function () {
          return this.first + this.size - 1;
        },
        clipPos: function (e) {
          return me(this, e);
        },
        getCursor: function (e) {
          var t,
            n = this.sel.primary();
          return (t =
            null == e || "head" == e
              ? n.head
              : "anchor" == e
              ? n.anchor
              : "end" == e || "to" == e || e === !1
              ? n.to()
              : n.from());
        },
        listSelections: function () {
          return this.sel.ranges;
        },
        somethingSelected: function () {
          return this.sel.somethingSelected();
        },
        setCursor: Ot(function (e, t, n) {
          Ee(this, me(this, "number" == typeof e ? Li(e, t || 0) : e), null, n);
        }),
        setSelection: Ot(function (e, t, n) {
          Ee(this, me(this, e), me(this, t || e), n);
        }),
        extendSelection: Ot(function (e, t, n) {
          Ae(this, me(this, e), t && me(this, t), n);
        }),
        extendSelections: Ot(function (e, t) {
          De(this, ye(this, e), t);
        }),
        extendSelectionsBy: Ot(function (e, t) {
          var n = Io(this.sel.ranges, e);
          De(this, ye(this, n), t);
        }),
        setSelections: Ot(function (e, t, n) {
          if (e.length) {
            for (var r = 0, o = []; r < e.length; r++)
              o[r] = new pe(me(this, e[r].anchor), me(this, e[r].head));
            null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
              Ne(this, de(o, t), n);
          }
        }),
        addSelection: Ot(function (e, t, n) {
          var r = this.sel.ranges.slice(0);
          r.push(new pe(me(this, e), me(this, t || e))),
            Ne(this, de(r, r.length - 1), n);
        }),
        getSelection: function (e) {
          for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
            var o = Zr(this, n[r].from(), n[r].to());
            t = t ? t.concat(o) : o;
          }
          return e === !1 ? t : t.join(e || this.lineSeparator());
        },
        getSelections: function (e) {
          for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
            var o = Zr(this, n[r].from(), n[r].to());
            e !== !1 && (o = o.join(e || this.lineSeparator())), (t[r] = o);
          }
          return t;
        },
        replaceSelection: function (e, t, n) {
          for (var r = [], o = 0; o < this.sel.ranges.length; o++) r[o] = e;
          this.replaceSelections(r, t, n || "+input");
        },
        replaceSelections: Ot(function (e, t, n) {
          for (var r = [], o = this.sel, i = 0; i < o.ranges.length; i++) {
            var a = o.ranges[i];
            r[i] = {
              from: a.from(),
              to: a.to(),
              text: this.splitLines(e[i]),
              origin: n,
            };
          }
          for (
            var s = t && "end" != t && wn(this, r, t), i = r.length - 1;
            i >= 0;
            i--
          )
            Nn(this, r[i]);
          s ? xe(this, s) : this.cm && Rn(this.cm);
        }),
        undo: Ot(function () {
          Sn(this, "undo");
        }),
        redo: Ot(function () {
          Sn(this, "redo");
        }),
        undoSelection: Ot(function () {
          Sn(this, "undo", !0);
        }),
        redoSelection: Ot(function () {
          Sn(this, "redo", !0);
        }),
        setExtending: function (e) {
          this.extend = e;
        },
        getExtending: function () {
          return this.extend;
        },
        historySize: function () {
          for (
            var e = this.history, t = 0, n = 0, r = 0;
            r < e.done.length;
            r++
          )
            e.done[r].ranges || ++t;
          for (var r = 0; r < e.undone.length; r++) e.undone[r].ranges || ++n;
          return { undo: t, redo: n };
        },
        clearHistory: function () {
          this.history = new io(this.history.maxGeneration);
        },
        markClean: function () {
          this.cleanGeneration = this.changeGeneration(!0);
        },
        changeGeneration: function (e) {
          return (
            e &&
              (this.history.lastOp =
                this.history.lastSelOp =
                this.history.lastOrigin =
                  null),
            this.history.generation
          );
        },
        isClean: function (e) {
          return this.history.generation == (e || this.cleanGeneration);
        },
        getHistory: function () {
          return {
            done: go(this.history.done),
            undone: go(this.history.undone),
          };
        },
        setHistory: function (e) {
          var t = (this.history = new io(this.history.maxGeneration));
          (t.done = go(e.done.slice(0), null, !0)),
            (t.undone = go(e.undone.slice(0), null, !0));
        },
        addLineClass: Ot(function (e, t, n) {
          return Wn(this, e, "gutter" == t ? "gutter" : "class", function (e) {
            var r =
              "text" == t
                ? "textClass"
                : "background" == t
                ? "bgClass"
                : "gutter" == t
                ? "gutterClass"
                : "wrapClass";
            if (e[r]) {
              if (Ko(n).test(e[r])) return !1;
              e[r] += " " + n;
            } else e[r] = n;
            return !0;
          });
        }),
        removeLineClass: Ot(function (e, t, n) {
          return Wn(this, e, "gutter" == t ? "gutter" : "class", function (e) {
            var r =
                "text" == t
                  ? "textClass"
                  : "background" == t
                  ? "bgClass"
                  : "gutter" == t
                  ? "gutterClass"
                  : "wrapClass",
              o = e[r];
            if (!o) return !1;
            if (null == n) e[r] = null;
            else {
              var i = o.match(Ko(n));
              if (!i) return !1;
              var a = i.index + i[0].length;
              e[r] =
                o.slice(0, i.index) +
                  (i.index && a != o.length ? " " : "") +
                  o.slice(a) || null;
            }
            return !0;
          });
        }),
        addLineWidget: Ot(function (e, t, n) {
          return Nr(this, e, t, n);
        }),
        removeLineWidget: function (e) {
          e.clear();
        },
        markText: function (e, t, n) {
          return Gn(
            this,
            me(this, e),
            me(this, t),
            n,
            (n && n.type) || "range"
          );
        },
        setBookmark: function (e, t) {
          var n = {
            replacedWith: t && (null == t.nodeType ? t.widget : t),
            insertLeft: t && t.insertLeft,
            clearWhenEmpty: !1,
            shared: t && t.shared,
            handleMouseEvents: t && t.handleMouseEvents,
          };
          return (e = me(this, e)), Gn(this, e, e, n, "bookmark");
        },
        findMarksAt: function (e) {
          e = me(this, e);
          var t = [],
            n = Qr(this, e.line).markedSpans;
          if (n)
            for (var r = 0; r < n.length; ++r) {
              var o = n[r];
              (null == o.from || o.from <= e.ch) &&
                (null == o.to || o.to >= e.ch) &&
                t.push(o.marker.parent || o.marker);
            }
          return t;
        },
        findMarks: function (e, t, n) {
          (e = me(this, e)), (t = me(this, t));
          var r = [],
            o = e.line;
          return (
            this.iter(e.line, t.line + 1, function (i) {
              var a = i.markedSpans;
              if (a)
                for (var s = 0; s < a.length; s++) {
                  var u = a[s];
                  (null != u.to && o == e.line && e.ch > u.to) ||
                    (null == u.from && o != e.line) ||
                    (null != u.from && o == t.line && u.from > t.ch) ||
                    (n && !n(u.marker)) ||
                    r.push(u.marker.parent || u.marker);
                }
              ++o;
            }),
            r
          );
        },
        getAllMarks: function () {
          var e = [];
          return (
            this.iter(function (t) {
              var n = t.markedSpans;
              if (n)
                for (var r = 0; r < n.length; ++r)
                  null != n[r].from && e.push(n[r].marker);
            }),
            e
          );
        },
        posFromIndex: function (e) {
          var t,
            n = this.first;
          return (
            this.iter(function (r) {
              var o = r.text.length + 1;
              return o > e ? ((t = e), !0) : ((e -= o), void ++n);
            }),
            me(this, Li(n, t))
          );
        },
        indexFromPos: function (e) {
          e = me(this, e);
          var t = e.ch;
          return e.line < this.first || e.ch < 0
            ? 0
            : (this.iter(this.first, e.line, function (e) {
                t += e.text.length + 1;
              }),
              t);
        },
        copy: function (e) {
          var t = new Ea(
            Jr(this, this.first, this.first + this.size),
            this.modeOption,
            this.first,
            this.lineSep
          );
          return (
            (t.scrollTop = this.scrollTop),
            (t.scrollLeft = this.scrollLeft),
            (t.sel = this.sel),
            (t.extend = !1),
            e &&
              ((t.history.undoDepth = this.history.undoDepth),
              t.setHistory(this.getHistory())),
            t
          );
        },
        linkedDoc: function (e) {
          e || (e = {});
          var t = this.first,
            n = this.first + this.size;
          null != e.from && e.from > t && (t = e.from),
            null != e.to && e.to < n && (n = e.to);
          var r = new Ea(
            Jr(this, t, n),
            e.mode || this.modeOption,
            t,
            this.lineSep
          );
          return (
            e.sharedHist && (r.history = this.history),
            (this.linked || (this.linked = [])).push({
              doc: r,
              sharedHist: e.sharedHist,
            }),
            (r.linked = [
              { doc: this, isParent: !0, sharedHist: e.sharedHist },
            ]),
            Qn(r, $n(this)),
            r
          );
        },
        unlinkDoc: function (t) {
          if ((t instanceof e && (t = t.doc), this.linked))
            for (var n = 0; n < this.linked.length; ++n) {
              var r = this.linked[n];
              if (r.doc == t) {
                this.linked.splice(n, 1), t.unlinkDoc(this), Zn($n(this));
                break;
              }
            }
          if (t.history == this.history) {
            var o = [t.id];
            Xr(
              t,
              function (e) {
                o.push(e.id);
              },
              !0
            ),
              (t.history = new io(null)),
              (t.history.done = go(this.history.done, o)),
              (t.history.undone = go(this.history.undone, o));
          }
        },
        iterLinkedDocs: function (e) {
          Xr(this, e);
        },
        getMode: function () {
          return this.mode;
        },
        getEditor: function () {
          return this.cm;
        },
        splitLines: function (e) {
          return this.lineSep ? e.split(this.lineSep) : es(e);
        },
        lineSeparator: function () {
          return this.lineSep || "\n";
        },
      })),
        (Ea.prototype.eachLine = Ea.prototype.iter);
      var wa = "iter insert remove copy getEditor constructor".split(" ");
      for (var xa in Ea.prototype)
        Ea.prototype.hasOwnProperty(xa) &&
          To(wa, xa) < 0 &&
          (e.prototype[xa] = (function (e) {
            return function () {
              return e.apply(this.doc, arguments);
            };
          })(Ea.prototype[xa]));
      _o(Ea);
      var Na = (e.e_preventDefault = function (e) {
          e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
        }),
        ka = (e.e_stopPropagation = function (e) {
          e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
        }),
        Sa = (e.e_stop = function (e) {
          Na(e), ka(e);
        }),
        Ba = (e.on = function (e, t, n) {
          if (e.addEventListener) e.addEventListener(t, n, !1);
          else if (e.attachEvent) e.attachEvent("on" + t, n);
          else {
            var r = e._handlers || (e._handlers = {}),
              o = r[t] || (r[t] = []);
            o.push(n);
          }
        }),
        _a = [],
        Ma = (e.off = function (e, t, n) {
          if (e.removeEventListener) e.removeEventListener(t, n, !1);
          else if (e.detachEvent) e.detachEvent("on" + t, n);
          else
            for (var r = wo(e, t, !1), o = 0; o < r.length; ++o)
              if (r[o] == n) {
                r.splice(o, 1);
                break;
              }
        }),
        Oa = (e.signal = function (e, t) {
          var n = wo(e, t, !0);
          if (n.length)
            for (
              var r = Array.prototype.slice.call(arguments, 2), o = 0;
              o < n.length;
              ++o
            )
              n[o].apply(null, r);
        }),
        Fa = null,
        Ta = 30,
        Ia = (e.Pass = {
          toString: function () {
            return "CodeMirror.Pass";
          },
        }),
        Pa = { scroll: !1 },
        La = { origin: "*mouse" },
        Ra = { origin: "+move" };
      Mo.prototype.set = function (e, t) {
        clearTimeout(this.id), (this.id = setTimeout(t, e));
      };
      var Va = (e.countColumn = function (e, t, n, r, o) {
          null == t &&
            ((t = e.search(/[^\s\u00a0]/)), -1 == t && (t = e.length));
          for (var i = r || 0, a = o || 0; ; ) {
            var s = e.indexOf("	", i);
            if (0 > s || s >= t) return a + (t - i);
            (a += s - i), (a += n - (a % n)), (i = s + 1);
          }
        }),
        Ua = (e.findColumn = function (e, t, n) {
          for (var r = 0, o = 0; ; ) {
            var i = e.indexOf("	", r);
            -1 == i && (i = e.length);
            var a = i - r;
            if (i == e.length || o + a >= t) return r + Math.min(a, t - o);
            if (((o += i - r), (o += n - (o % n)), (r = i + 1), o >= t))
              return r;
          }
        }),
        Wa = [""],
        ja = function (e) {
          e.select();
        };
      Si
        ? (ja = function (e) {
            (e.selectionStart = 0), (e.selectionEnd = e.value.length);
          })
        : Ci &&
          (ja = function (e) {
            try {
              e.select();
            } catch (t) {}
          });
      var Ha,
        za =
          /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
        qa = (e.isWordChar = function (e) {
          return (
            /\w/.test(e) ||
            (e > "" && (e.toUpperCase() != e.toLowerCase() || za.test(e)))
          );
        }),
        Ya =
          /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
      Ha = document.createRange
        ? function (e, t, n, r) {
            var o = document.createRange();
            return o.setEnd(r || e, n), o.setStart(e, t), o;
          }
        : function (e, t, n) {
            var r = document.body.createTextRange();
            try {
              r.moveToElementText(e.parentNode);
            } catch (o) {
              return r;
            }
            return (
              r.collapse(!0),
              r.moveEnd("character", n),
              r.moveStart("character", t),
              r
            );
          };
      var Ka = (e.contains = function (e, t) {
        if ((3 == t.nodeType && (t = t.parentNode), e.contains))
          return e.contains(t);
        do if ((11 == t.nodeType && (t = t.host), t == e)) return !0;
        while ((t = t.parentNode));
      });
      Ci &&
        11 > Ai &&
        (Yo = function () {
          try {
            return document.activeElement;
          } catch (e) {
            return document.body;
          }
        });
      var Ga,
        Xa,
        $a = (e.rmClass = function (e, t) {
          var n = e.className,
            r = Ko(t).exec(n);
          if (r) {
            var o = n.slice(r.index + r[0].length);
            e.className = n.slice(0, r.index) + (o ? r[1] + o : "");
          }
        }),
        Qa = (e.addClass = function (e, t) {
          var n = e.className;
          Ko(t).test(n) || (e.className += (n ? " " : "") + t);
        }),
        Za = !1,
        Ja = (function () {
          if (Ci && 9 > Ai) return !1;
          var e = Ho("div");
          return "draggable" in e || "dragDrop" in e;
        })(),
        es = (e.splitLines =
          3 != "\n\nb".split(/\n/).length
            ? function (e) {
                for (var t = 0, n = [], r = e.length; r >= t; ) {
                  var o = e.indexOf("\n", t);
                  -1 == o && (o = e.length);
                  var i = e.slice(t, "\r" == e.charAt(o - 1) ? o - 1 : o),
                    a = i.indexOf("\r");
                  -1 != a
                    ? (n.push(i.slice(0, a)), (t += a + 1))
                    : (n.push(i), (t = o + 1));
                }
                return n;
              }
            : function (e) {
                return e.split(/\r\n?|\n/);
              }),
        ts = window.getSelection
          ? function (e) {
              try {
                return e.selectionStart != e.selectionEnd;
              } catch (t) {
                return !1;
              }
            }
          : function (e) {
              try {
                var t = e.ownerDocument.selection.createRange();
              } catch (n) {}
              return t && t.parentElement() == e
                ? 0 != t.compareEndPoints("StartToEnd", t)
                : !1;
            },
        ns = (function () {
          var e = Ho("div");
          return "oncopy" in e
            ? !0
            : (e.setAttribute("oncopy", "return;"),
              "function" == typeof e.oncopy);
        })(),
        rs = null,
        os = (e.keyNames = {
          3: "Enter",
          8: "Backspace",
          9: "Tab",
          13: "Enter",
          16: "Shift",
          17: "Ctrl",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Esc",
          32: "Space",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "Left",
          38: "Up",
          39: "Right",
          40: "Down",
          44: "PrintScrn",
          45: "Insert",
          46: "Delete",
          59: ";",
          61: "=",
          91: "Mod",
          92: "Mod",
          93: "Mod",
          106: "*",
          107: "=",
          109: "-",
          110: ".",
          111: "/",
          127: "Delete",
          173: "-",
          186: ";",
          187: "=",
          188: ",",
          189: "-",
          190: ".",
          191: "/",
          192: "`",
          219: "[",
          220: "\\",
          221: "]",
          222: "'",
          63232: "Up",
          63233: "Down",
          63234: "Left",
          63235: "Right",
          63272: "Delete",
          63273: "Home",
          63275: "End",
          63276: "PageUp",
          63277: "PageDown",
          63302: "Insert",
        });
      !(function () {
        for (var e = 0; 10 > e; e++) os[e + 48] = os[e + 96] = String(e);
        for (var e = 65; 90 >= e; e++) os[e] = String.fromCharCode(e);
        for (var e = 1; 12 >= e; e++) os[e + 111] = os[e + 63235] = "F" + e;
      })();
      var is,
        as = (function () {
          function e(e) {
            return 247 >= e
              ? n.charAt(e)
              : e >= 1424 && 1524 >= e
              ? "R"
              : e >= 1536 && 1773 >= e
              ? r.charAt(e - 1536)
              : e >= 1774 && 2220 >= e
              ? "r"
              : e >= 8192 && 8203 >= e
              ? "w"
              : 8204 == e
              ? "b"
              : "L";
          }
          function t(e, t, n) {
            (this.level = e), (this.from = t), (this.to = n);
          }
          var n =
              "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
            r =
              "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm",
            o = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
            i = /[stwN]/,
            a = /[LRr]/,
            s = /[Lb1n]/,
            u = /[1n]/,
            l = "L";
          return function (n) {
            if (!o.test(n)) return !1;
            for (var r, c = n.length, p = [], d = 0; c > d; ++d)
              p.push((r = e(n.charCodeAt(d))));
            for (var d = 0, f = l; c > d; ++d) {
              var r = p[d];
              "m" == r ? (p[d] = f) : (f = r);
            }
            for (var d = 0, h = l; c > d; ++d) {
              var r = p[d];
              "1" == r && "r" == h
                ? (p[d] = "n")
                : a.test(r) && ((h = r), "r" == r && (p[d] = "R"));
            }
            for (var d = 1, f = p[0]; c - 1 > d; ++d) {
              var r = p[d];
              "+" == r && "1" == f && "1" == p[d + 1]
                ? (p[d] = "1")
                : "," != r ||
                  f != p[d + 1] ||
                  ("1" != f && "n" != f) ||
                  (p[d] = f),
                (f = r);
            }
            for (var d = 0; c > d; ++d) {
              var r = p[d];
              if ("," == r) p[d] = "N";
              else if ("%" == r) {
                for (var m = d + 1; c > m && "%" == p[m]; ++m);
                for (
                  var v =
                      (d && "!" == p[d - 1]) || (c > m && "1" == p[m])
                        ? "1"
                        : "N",
                    g = d;
                  m > g;
                  ++g
                )
                  p[g] = v;
                d = m - 1;
              }
            }
            for (var d = 0, h = l; c > d; ++d) {
              var r = p[d];
              "L" == h && "1" == r ? (p[d] = "L") : a.test(r) && (h = r);
            }
            for (var d = 0; c > d; ++d)
              if (i.test(p[d])) {
                for (var m = d + 1; c > m && i.test(p[m]); ++m);
                for (
                  var y = "L" == (d ? p[d - 1] : l),
                    C = "L" == (c > m ? p[m] : l),
                    v = y || C ? "L" : "R",
                    g = d;
                  m > g;
                  ++g
                )
                  p[g] = v;
                d = m - 1;
              }
            for (var A, D = [], d = 0; c > d; )
              if (s.test(p[d])) {
                var b = d;
                for (++d; c > d && s.test(p[d]); ++d);
                D.push(new t(0, b, d));
              } else {
                var E = d,
                  w = D.length;
                for (++d; c > d && "L" != p[d]; ++d);
                for (var g = E; d > g; )
                  if (u.test(p[g])) {
                    g > E && D.splice(w, 0, new t(1, E, g));
                    var x = g;
                    for (++g; d > g && u.test(p[g]); ++g);
                    D.splice(w, 0, new t(2, x, g)), (E = g);
                  } else ++g;
                d > E && D.splice(w, 0, new t(1, E, d));
              }
            return (
              1 == D[0].level &&
                (A = n.match(/^\s+/)) &&
                ((D[0].from = A[0].length),
                D.unshift(new t(0, 0, A[0].length))),
              1 == Fo(D).level &&
                (A = n.match(/\s+$/)) &&
                ((Fo(D).to -= A[0].length),
                D.push(new t(0, c - A[0].length, c))),
              2 == D[0].level && D.unshift(new t(1, D[0].to, D[0].to)),
              D[0].level != Fo(D).level && D.push(new t(D[0].level, c, c)),
              D
            );
          };
        })();
      return (e.version = "5.13.4"), e;
    });
  },
  function (e, t, n) {
    !(function (e) {
      e(n(174));
    })(function (e) {
      "use strict";
      function t(e, t, n) {
        return (
          /^(?:operator|sof|keyword c|case|new|[\[{}\(,;:]|=>)$/.test(
            t.lastType
          ) ||
          ("quasi" == t.lastType &&
            /\{\s*$/.test(e.string.slice(0, e.pos - (n || 0))))
        );
      }
      e.defineMode("javascript", function (n, r) {
        function o(e) {
          for (var t, n = !1, r = !1; null != (t = e.next()); ) {
            if (!n) {
              if ("/" == t && !r) return;
              "[" == t ? (r = !0) : r && "]" == t && (r = !1);
            }
            n = !n && "\\" == t;
          }
        }
        function i(e, t, n) {
          return (Ae = e), (De = n), t;
        }
        function a(e, n) {
          var r = e.next();
          if ('"' == r || "'" == r)
            return (n.tokenize = s(r)), n.tokenize(e, n);
          if ("." == r && e.match(/^\d+(?:[eE][+\-]?\d+)?/))
            return i("number", "number");
          if ("." == r && e.match("..")) return i("spread", "meta");
          if (/[\[\]{}\(\),;\:\.]/.test(r)) return i(r);
          if ("=" == r && e.eat(">")) return i("=>", "operator");
          if ("0" == r && e.eat(/x/i))
            return e.eatWhile(/[\da-f]/i), i("number", "number");
          if ("0" == r && e.eat(/o/i))
            return e.eatWhile(/[0-7]/i), i("number", "number");
          if ("0" == r && e.eat(/b/i))
            return e.eatWhile(/[01]/i), i("number", "number");
          if (/\d/.test(r))
            return (
              e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/), i("number", "number")
            );
          if ("/" == r)
            return e.eat("*")
              ? ((n.tokenize = u), u(e, n))
              : e.eat("/")
              ? (e.skipToEnd(), i("comment", "comment"))
              : t(e, n, 1)
              ? (o(e),
                e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),
                i("regexp", "string-2"))
              : (e.eatWhile(Be), i("operator", "operator", e.current()));
          if ("`" == r) return (n.tokenize = l), l(e, n);
          if ("#" == r) return e.skipToEnd(), i("error", "error");
          if (Be.test(r))
            return e.eatWhile(Be), i("operator", "operator", e.current());
          if (ke.test(r)) {
            e.eatWhile(ke);
            var a = e.current(),
              c = Se.propertyIsEnumerable(a) && Se[a];
            return c && "." != n.lastType
              ? i(c.type, c.style, a)
              : i("variable", "variable", a);
          }
        }
        function s(e) {
          return function (t, n) {
            var r,
              o = !1;
            if (we && "@" == t.peek() && t.match(_e))
              return (n.tokenize = a), i("jsonld-keyword", "meta");
            for (; null != (r = t.next()) && (r != e || o); )
              o = !o && "\\" == r;
            return o || (n.tokenize = a), i("string", "string");
          };
        }
        function u(e, t) {
          for (var n, r = !1; (n = e.next()); ) {
            if ("/" == n && r) {
              t.tokenize = a;
              break;
            }
            r = "*" == n;
          }
          return i("comment", "comment");
        }
        function l(e, t) {
          for (var n, r = !1; null != (n = e.next()); ) {
            if (!r && ("`" == n || ("$" == n && e.eat("{")))) {
              t.tokenize = a;
              break;
            }
            r = !r && "\\" == n;
          }
          return i("quasi", "string-2", e.current());
        }
        function c(e, t) {
          t.fatArrowAt && (t.fatArrowAt = null);
          var n = e.string.indexOf("=>", e.start);
          if (!(0 > n)) {
            for (var r = 0, o = !1, i = n - 1; i >= 0; --i) {
              var a = e.string.charAt(i),
                s = Me.indexOf(a);
              if (s >= 0 && 3 > s) {
                if (!r) {
                  ++i;
                  break;
                }
                if (0 == --r) break;
              } else if (s >= 3 && 6 > s) ++r;
              else if (ke.test(a)) o = !0;
              else {
                if (/["'\/]/.test(a)) return;
                if (o && !r) {
                  ++i;
                  break;
                }
              }
            }
            o && !r && (t.fatArrowAt = i);
          }
        }
        function p(e, t, n, r, o, i) {
          (this.indented = e),
            (this.column = t),
            (this.type = n),
            (this.prev = o),
            (this.info = i),
            null != r && (this.align = r);
        }
        function d(e, t) {
          for (var n = e.localVars; n; n = n.next) if (n.name == t) return !0;
          for (var r = e.context; r; r = r.prev)
            for (var n = r.vars; n; n = n.next) if (n.name == t) return !0;
        }
        function f(e, t, n, r, o) {
          var i = e.cc;
          for (
            Fe.state = e,
              Fe.stream = o,
              Fe.marked = null,
              Fe.cc = i,
              Fe.style = t,
              e.lexical.hasOwnProperty("align") || (e.lexical.align = !0);
            ;

          ) {
            var a = i.length ? i.pop() : xe ? E : b;
            if (a(n, r)) {
              for (; i.length && i[i.length - 1].lex; ) i.pop()();
              return Fe.marked
                ? Fe.marked
                : "variable" == n && d(e, r)
                ? "variable-2"
                : t;
            }
          }
        }
        function h() {
          for (var e = arguments.length - 1; e >= 0; e--)
            Fe.cc.push(arguments[e]);
        }
        function m() {
          return h.apply(null, arguments), !0;
        }
        function v(e) {
          function t(t) {
            for (var n = t; n; n = n.next) if (n.name == e) return !0;
            return !1;
          }
          var n = Fe.state;
          if (((Fe.marked = "def"), n.context)) {
            if (t(n.localVars)) return;
            n.localVars = { name: e, next: n.localVars };
          } else {
            if (t(n.globalVars)) return;
            r.globalVars && (n.globalVars = { name: e, next: n.globalVars });
          }
        }
        function g() {
          (Fe.state.context = {
            prev: Fe.state.context,
            vars: Fe.state.localVars,
          }),
            (Fe.state.localVars = Te);
        }
        function y() {
          (Fe.state.localVars = Fe.state.context.vars),
            (Fe.state.context = Fe.state.context.prev);
        }
        function C(e, t) {
          var n = function () {
            var n = Fe.state,
              r = n.indented;
            if ("stat" == n.lexical.type) r = n.lexical.indented;
            else
              for (var o = n.lexical; o && ")" == o.type && o.align; o = o.prev)
                r = o.indented;
            n.lexical = new p(r, Fe.stream.column(), e, null, n.lexical, t);
          };
          return (n.lex = !0), n;
        }
        function A() {
          var e = Fe.state;
          e.lexical.prev &&
            (")" == e.lexical.type && (e.indented = e.lexical.indented),
            (e.lexical = e.lexical.prev));
        }
        function D(e) {
          function t(n) {
            return n == e ? m() : ";" == e ? h() : m(t);
          }
          return t;
        }
        function b(e, t) {
          return "var" == e
            ? m(C("vardef", t.length), G, D(";"), A)
            : "keyword a" == e
            ? m(C("form"), E, b, A)
            : "keyword b" == e
            ? m(C("form"), b, A)
            : "{" == e
            ? m(C("}"), z, A)
            : ";" == e
            ? m()
            : "if" == e
            ? ("else" == Fe.state.lexical.info &&
                Fe.state.cc[Fe.state.cc.length - 1] == A &&
                Fe.state.cc.pop()(),
              m(C("form"), E, b, A, J))
            : "function" == e
            ? m(ie)
            : "for" == e
            ? m(C("form"), ee, b, A)
            : "variable" == e
            ? m(C("stat"), L)
            : "switch" == e
            ? m(C("form"), E, C("}", "switch"), D("{"), z, A, A)
            : "case" == e
            ? m(E, D(":"))
            : "default" == e
            ? m(D(":"))
            : "catch" == e
            ? m(C("form"), g, D("("), ae, D(")"), b, A, y)
            : "class" == e
            ? m(C("form"), se, A)
            : "export" == e
            ? m(C("stat"), pe, A)
            : "import" == e
            ? m(C("stat"), de, A)
            : "module" == e
            ? m(C("form"), X, C("}"), D("{"), z, A, A)
            : h(C("stat"), E, D(";"), A);
        }
        function E(e) {
          return x(e, !1);
        }
        function w(e) {
          return x(e, !0);
        }
        function x(e, t) {
          if (Fe.state.fatArrowAt == Fe.stream.start) {
            var n = t ? F : O;
            if ("(" == e) return m(g, C(")"), j(X, ")"), A, D("=>"), n, y);
            if ("variable" == e) return h(g, X, D("=>"), n, y);
          }
          var r = t ? B : S;
          return Oe.hasOwnProperty(e)
            ? m(r)
            : "function" == e
            ? m(ie, r)
            : "keyword c" == e
            ? m(t ? k : N)
            : "(" == e
            ? m(C(")"), N, ye, D(")"), A, r)
            : "operator" == e || "spread" == e
            ? m(t ? w : E)
            : "[" == e
            ? m(C("]"), ve, A, r)
            : "{" == e
            ? H(V, "}", null, r)
            : "quasi" == e
            ? h(_, r)
            : "new" == e
            ? m(T(t))
            : m();
        }
        function N(e) {
          return e.match(/[;\}\)\],]/) ? h() : h(E);
        }
        function k(e) {
          return e.match(/[;\}\)\],]/) ? h() : h(w);
        }
        function S(e, t) {
          return "," == e ? m(E) : B(e, t, !1);
        }
        function B(e, t, n) {
          var r = 0 == n ? S : B,
            o = 0 == n ? E : w;
          return "=>" == e
            ? m(g, n ? F : O, y)
            : "operator" == e
            ? /\+\+|--/.test(t)
              ? m(r)
              : "?" == t
              ? m(E, D(":"), o)
              : m(o)
            : "quasi" == e
            ? h(_, r)
            : ";" != e
            ? "(" == e
              ? H(w, ")", "call", r)
              : "." == e
              ? m(R, r)
              : "[" == e
              ? m(C("]"), N, D("]"), A, r)
              : void 0
            : void 0;
        }
        function _(e, t) {
          return "quasi" != e
            ? h()
            : "${" != t.slice(t.length - 2)
            ? m(_)
            : m(E, M);
        }
        function M(e) {
          return "}" == e
            ? ((Fe.marked = "string-2"), (Fe.state.tokenize = l), m(_))
            : void 0;
        }
        function O(e) {
          return c(Fe.stream, Fe.state), h("{" == e ? b : E);
        }
        function F(e) {
          return c(Fe.stream, Fe.state), h("{" == e ? b : w);
        }
        function T(e) {
          return function (t) {
            return "." == t ? m(e ? P : I) : h(e ? w : E);
          };
        }
        function I(e, t) {
          return "target" == t ? ((Fe.marked = "keyword"), m(S)) : void 0;
        }
        function P(e, t) {
          return "target" == t ? ((Fe.marked = "keyword"), m(B)) : void 0;
        }
        function L(e) {
          return ":" == e ? m(A, b) : h(S, D(";"), A);
        }
        function R(e) {
          return "variable" == e ? ((Fe.marked = "property"), m()) : void 0;
        }
        function V(e, t) {
          return "variable" == e || "keyword" == Fe.style
            ? ((Fe.marked = "property"), m("get" == t || "set" == t ? U : W))
            : "number" == e || "string" == e
            ? ((Fe.marked = we ? "property" : Fe.style + " property"), m(W))
            : "jsonld-keyword" == e
            ? m(W)
            : "modifier" == e
            ? m(V)
            : "[" == e
            ? m(E, D("]"), W)
            : "spread" == e
            ? m(E)
            : void 0;
        }
        function U(e) {
          return "variable" != e ? h(W) : ((Fe.marked = "property"), m(ie));
        }
        function W(e) {
          return ":" == e ? m(w) : "(" == e ? h(ie) : void 0;
        }
        function j(e, t) {
          function n(r) {
            if ("," == r) {
              var o = Fe.state.lexical;
              return "call" == o.info && (o.pos = (o.pos || 0) + 1), m(e, n);
            }
            return r == t ? m() : m(D(t));
          }
          return function (r) {
            return r == t ? m() : h(e, n);
          };
        }
        function H(e, t, n) {
          for (var r = 3; r < arguments.length; r++) Fe.cc.push(arguments[r]);
          return m(C(t, n), j(e, t), A);
        }
        function z(e) {
          return "}" == e ? m() : h(b, z);
        }
        function q(e) {
          return Ne && ":" == e ? m(K) : void 0;
        }
        function Y(e, t) {
          return "=" == t ? m(w) : void 0;
        }
        function K(e) {
          return "variable" == e ? ((Fe.marked = "variable-3"), m()) : void 0;
        }
        function G() {
          return h(X, q, Q, Z);
        }
        function X(e, t) {
          return "modifier" == e
            ? m(X)
            : "variable" == e
            ? (v(t), m())
            : "spread" == e
            ? m(X)
            : "[" == e
            ? H(X, "]")
            : "{" == e
            ? H($, "}")
            : void 0;
        }
        function $(e, t) {
          return "variable" != e || Fe.stream.match(/^\s*:/, !1)
            ? ("variable" == e && (Fe.marked = "property"),
              "spread" == e ? m(X) : "}" == e ? h() : m(D(":"), X, Q))
            : (v(t), m(Q));
        }
        function Q(e, t) {
          return "=" == t ? m(w) : void 0;
        }
        function Z(e) {
          return "," == e ? m(G) : void 0;
        }
        function J(e, t) {
          return "keyword b" == e && "else" == t
            ? m(C("form", "else"), b, A)
            : void 0;
        }
        function ee(e) {
          return "(" == e ? m(C(")"), te, D(")"), A) : void 0;
        }
        function te(e) {
          return "var" == e
            ? m(G, D(";"), re)
            : ";" == e
            ? m(re)
            : "variable" == e
            ? m(ne)
            : h(E, D(";"), re);
        }
        function ne(e, t) {
          return "in" == t || "of" == t
            ? ((Fe.marked = "keyword"), m(E))
            : m(S, re);
        }
        function re(e, t) {
          return ";" == e
            ? m(oe)
            : "in" == t || "of" == t
            ? ((Fe.marked = "keyword"), m(E))
            : h(E, D(";"), oe);
        }
        function oe(e) {
          ")" != e && m(E);
        }
        function ie(e, t) {
          return "*" == t
            ? ((Fe.marked = "keyword"), m(ie))
            : "variable" == e
            ? (v(t), m(ie))
            : "(" == e
            ? m(g, C(")"), j(ae, ")"), A, b, y)
            : void 0;
        }
        function ae(e) {
          return "spread" == e ? m(ae) : h(X, q, Y);
        }
        function se(e, t) {
          return "variable" == e ? (v(t), m(ue)) : void 0;
        }
        function ue(e, t) {
          return "extends" == t
            ? m(E, ue)
            : "{" == e
            ? m(C("}"), le, A)
            : void 0;
        }
        function le(e, t) {
          return "variable" == e || "keyword" == Fe.style
            ? "static" == t
              ? ((Fe.marked = "keyword"), m(le))
              : ((Fe.marked = "property"),
                "get" == t || "set" == t ? m(ce, ie, le) : m(ie, le))
            : "*" == t
            ? ((Fe.marked = "keyword"), m(le))
            : ";" == e
            ? m(le)
            : "}" == e
            ? m()
            : void 0;
        }
        function ce(e) {
          return "variable" != e ? h() : ((Fe.marked = "property"), m());
        }
        function pe(e, t) {
          return "*" == t
            ? ((Fe.marked = "keyword"), m(me, D(";")))
            : "default" == t
            ? ((Fe.marked = "keyword"), m(E, D(";")))
            : h(b);
        }
        function de(e) {
          return "string" == e ? m() : h(fe, me);
        }
        function fe(e, t) {
          return "{" == e
            ? H(fe, "}")
            : ("variable" == e && v(t),
              "*" == t && (Fe.marked = "keyword"),
              m(he));
        }
        function he(e, t) {
          return "as" == t ? ((Fe.marked = "keyword"), m(fe)) : void 0;
        }
        function me(e, t) {
          return "from" == t ? ((Fe.marked = "keyword"), m(E)) : void 0;
        }
        function ve(e) {
          return "]" == e ? m() : h(w, ge);
        }
        function ge(e) {
          return "for" == e
            ? h(ye, D("]"))
            : "," == e
            ? m(j(k, "]"))
            : h(j(w, "]"));
        }
        function ye(e) {
          return "for" == e ? m(ee, ye) : "if" == e ? m(E, ye) : void 0;
        }
        function Ce(e, t) {
          return (
            "operator" == e.lastType ||
            "," == e.lastType ||
            Be.test(t.charAt(0)) ||
            /[,.]/.test(t.charAt(0))
          );
        }
        var Ae,
          De,
          be = n.indentUnit,
          Ee = r.statementIndent,
          we = r.jsonld,
          xe = r.json || we,
          Ne = r.typescript,
          ke = r.wordCharacters || /[\w$\xa1-\uffff]/,
          Se = (function () {
            function e(e) {
              return { type: e, style: "keyword" };
            }
            var t = e("keyword a"),
              n = e("keyword b"),
              r = e("keyword c"),
              o = e("operator"),
              i = { type: "atom", style: "atom" },
              a = {
                if: e("if"),
                while: t,
                with: t,
                else: n,
                do: n,
                try: n,
                finally: n,
                return: r,
                break: r,
                continue: r,
                new: e("new"),
                delete: r,
                throw: r,
                debugger: r,
                var: e("var"),
                const: e("var"),
                let: e("var"),
                function: e("function"),
                catch: e("catch"),
                for: e("for"),
                switch: e("switch"),
                case: e("case"),
                default: e("default"),
                in: o,
                typeof: o,
                instanceof: o,
                true: i,
                false: i,
                null: i,
                undefined: i,
                NaN: i,
                Infinity: i,
                this: e("this"),
                class: e("class"),
                super: e("atom"),
                yield: r,
                export: e("export"),
                import: e("import"),
                extends: r,
              };
            if (Ne) {
              var s = { type: "variable", style: "variable-3" },
                u = {
                  interface: e("class"),
                  implements: r,
                  namespace: r,
                  module: e("module"),
                  enum: e("module"),
                  public: e("modifier"),
                  private: e("modifier"),
                  protected: e("modifier"),
                  abstract: e("modifier"),
                  as: o,
                  string: s,
                  number: s,
                  boolean: s,
                  any: s,
                };
              for (var l in u) a[l] = u[l];
            }
            return a;
          })(),
          Be = /[+\-*&%=<>!?|~^]/,
          _e =
            /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,
          Me = "([{}])",
          Oe = {
            atom: !0,
            number: !0,
            variable: !0,
            string: !0,
            regexp: !0,
            this: !0,
            "jsonld-keyword": !0,
          },
          Fe = { state: null, column: null, marked: null, cc: null },
          Te = { name: "this", next: { name: "arguments" } };
        return (
          (A.lex = !0),
          {
            startState: function (e) {
              var t = {
                tokenize: a,
                lastType: "sof",
                cc: [],
                lexical: new p((e || 0) - be, 0, "block", !1),
                localVars: r.localVars,
                context: r.localVars && { vars: r.localVars },
                indented: e || 0,
              };
              return (
                r.globalVars &&
                  "object" == typeof r.globalVars &&
                  (t.globalVars = r.globalVars),
                t
              );
            },
            token: function (e, t) {
              if (
                (e.sol() &&
                  (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1),
                  (t.indented = e.indentation()),
                  c(e, t)),
                t.tokenize != u && e.eatSpace())
              )
                return null;
              var n = t.tokenize(e, t);
              return "comment" == Ae
                ? n
                : ((t.lastType =
                    "operator" != Ae || ("++" != De && "--" != De)
                      ? Ae
                      : "incdec"),
                  f(t, n, Ae, De, e));
            },
            indent: function (t, n) {
              if (t.tokenize == u) return e.Pass;
              if (t.tokenize != a) return 0;
              var o = n && n.charAt(0),
                i = t.lexical;
              if (!/^\s*else\b/.test(n))
                for (var s = t.cc.length - 1; s >= 0; --s) {
                  var l = t.cc[s];
                  if (l == A) i = i.prev;
                  else if (l != J) break;
                }
              "stat" == i.type && "}" == o && (i = i.prev),
                Ee && ")" == i.type && "stat" == i.prev.type && (i = i.prev);
              var c = i.type,
                p = o == c;
              return "vardef" == c
                ? i.indented +
                    ("operator" == t.lastType || "," == t.lastType
                      ? i.info + 1
                      : 0)
                : "form" == c && "{" == o
                ? i.indented
                : "form" == c
                ? i.indented + be
                : "stat" == c
                ? i.indented + (Ce(t, n) ? Ee || be : 0)
                : "switch" != i.info || p || 0 == r.doubleIndentSwitch
                ? i.align
                  ? i.column + (p ? 0 : 1)
                  : i.indented + (p ? 0 : be)
                : i.indented + (/^(?:case|default)\b/.test(n) ? be : 2 * be);
            },
            electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
            blockCommentStart: xe ? null : "/*",
            blockCommentEnd: xe ? null : "*/",
            lineComment: xe ? null : "//",
            fold: "brace",
            closeBrackets: "()[]{}''\"\"``",
            helperType: xe ? "json" : "javascript",
            jsonldMode: we,
            jsonMode: xe,
            expressionAllowed: t,
            skipExpression: function (e) {
              var t = e.cc[e.cc.length - 1];
              (t != E && t != w) || e.cc.pop();
            },
          }
        );
      }),
        e.registerHelper("wordChars", "javascript", /[\w$]/),
        e.defineMIME("text/javascript", "javascript"),
        e.defineMIME("text/ecmascript", "javascript"),
        e.defineMIME("application/javascript", "javascript"),
        e.defineMIME("application/x-javascript", "javascript"),
        e.defineMIME("application/ecmascript", "javascript"),
        e.defineMIME("application/json", { name: "javascript", json: !0 }),
        e.defineMIME("application/x-json", { name: "javascript", json: !0 }),
        e.defineMIME("application/ld+json", { name: "javascript", jsonld: !0 }),
        e.defineMIME("text/typescript", { name: "javascript", typescript: !0 }),
        e.defineMIME("application/typescript", {
          name: "javascript",
          typescript: !0,
        });
    });
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__extends) ||
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n());
        },
      o = n(1),
      i = n(177),
      a = n(179),
      s = n(180),
      u = n(168),
      l = "__loopCheck",
      c = (function (e) {
        function t() {
          e.apply(this, arguments);
        }
        return (
          r(t, e),
          (t.prototype.resetIframe = function () {
            var e = this,
              t = this.props.content;
            t = s["default"](t);
            try {
              t = i["default"](
                t,
                {},
                a["default"](function (e) {
                  return l + "(" + JSON.stringify(e.range) + ");";
                })
              ).toString();
            } catch (n) {}
            this._iframe &&
              (this._iframe.parentNode.removeChild(this._iframe),
              (this._iframe = null));
            var r = document.createElement("iframe");
            r.setAttribute("src", "preview-frame.html"),
              r.setAttribute("width", this.props.width.toString()),
              r.addEventListener("load", function () {
                var n = r.contentWindow;
                n.startSketch(
                  t,
                  e.props.p5version,
                  1e3,
                  l,
                  e.props.baseSketchURL,
                  e.props.onError
                );
              }),
              this.refs.container.appendChild(r),
              (this._iframe = r);
          }),
          (t.prototype.componentDidUpdate = function (e, t) {
            e.timestamp !== this.props.timestamp && this.resetIframe();
          }),
          (t.prototype.componentDidMount = function () {
            this.resetIframe();
          }),
          (t.prototype.componentWillUnmount = function () {
            this._iframe = null;
          }),
          (t.prototype.render = function () {
            return o.createElement("div", {
              ref: "container",
              className: "preview-holder",
            });
          }),
          t
        );
      })(u["default"]);
    Object.defineProperty(t, "__esModule", { value: !0 }), (t["default"] = c);
  },
  function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      "function" == typeof t && ((n = t), (t = {})),
        "object" == typeof e && ((t = e), (e = t.source), delete t.source),
        (e = e || t.source),
        (t.range = !0),
        "string" != typeof e && (e = String(e));
      var r = a(e, t),
        i = {
          chunks: e.split(""),
          toString: function () {
            return i.chunks.join("");
          },
          inspect: function () {
            return i.toString();
          },
        };
      return (
        (function s(e, t) {
          o(e, t, i.chunks),
            Object.keys(e).forEach(function (t) {
              if ("parent" !== t) {
                var n = e[t];
                Array.isArray(n)
                  ? n.forEach(function (t) {
                      t && "string" == typeof t.type && s(t, e);
                    })
                  : n &&
                    "string" == typeof n.type &&
                    (o(n, e, i.chunks), s(n, e));
              }
            }),
            n(e);
        })(r, void 0),
        i
      );
    }
    function o(e, t, n) {
      function r(t) {
        n[e.range[0]] = t;
        for (var r = e.range[0] + 1; r < e.range[1]; r++) n[r] = "";
      }
      if (e.range)
        if (
          ((e.parent = t),
          (e.source = function () {
            return n.slice(e.range[0], e.range[1]).join("");
          }),
          e.update && "object" == typeof e.update)
        ) {
          var o = e.update;
          Object.keys(o).forEach(function (e) {
            r[e] = o[e];
          }),
            (e.update = r);
        } else e.update = r;
    }
    var i = n(178),
      a = i.parse;
    Object.defineProperty(t, "__esModule", { value: !0 }), (t["default"] = r);
  },
  function (e, t, n) {
    var r, o, i;
    !(function (n, a) {
      "use strict";
      (o = [t]),
        (r = a),
        (i = "function" == typeof r ? r.apply(t, o) : r),
        !(void 0 !== i && (e.exports = i));
    })(this, function (e) {
      "use strict";
      function t(e, t) {
        if (!e) throw new Error("ASSERT: " + t);
      }
      function n(e) {
        return e >= 48 && 57 >= e;
      }
      function r(e) {
        return "0123456789abcdefABCDEF".indexOf(e) >= 0;
      }
      function o(e) {
        return "01234567".indexOf(e) >= 0;
      }
      function i(e) {
        var t = "0" !== e,
          n = "01234567".indexOf(e);
        return (
          Cn > un &&
            o(an[un]) &&
            ((t = !0),
            (n = 8 * n + "01234567".indexOf(an[un++])),
            "0123".indexOf(e) >= 0 &&
              Cn > un &&
              o(an[un]) &&
              (n = 8 * n + "01234567".indexOf(an[un++]))),
          { code: n, octal: t }
        );
      }
      function a(e) {
        return (
          32 === e ||
          9 === e ||
          11 === e ||
          12 === e ||
          160 === e ||
          (e >= 5760 &&
            [
              5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200,
              8201, 8202, 8239, 8287, 12288, 65279,
            ].indexOf(e) >= 0)
        );
      }
      function s(e) {
        return 10 === e || 13 === e || 8232 === e || 8233 === e;
      }
      function u(e) {
        return 65536 > e
          ? String.fromCharCode(e)
          : String.fromCharCode(55296 + ((e - 65536) >> 10)) +
              String.fromCharCode(56320 + ((e - 65536) & 1023));
      }
      function l(e) {
        return (
          36 === e ||
          95 === e ||
          (e >= 65 && 90 >= e) ||
          (e >= 97 && 122 >= e) ||
          92 === e ||
          (e >= 128 && on.NonAsciiIdentifierStart.test(u(e)))
        );
      }
      function c(e) {
        return (
          36 === e ||
          95 === e ||
          (e >= 65 && 90 >= e) ||
          (e >= 97 && 122 >= e) ||
          (e >= 48 && 57 >= e) ||
          92 === e ||
          (e >= 128 && on.NonAsciiIdentifierPart.test(u(e)))
        );
      }
      function p(e) {
        switch (e) {
          case "enum":
          case "export":
          case "import":
          case "super":
            return !0;
          default:
            return !1;
        }
      }
      function d(e) {
        switch (e) {
          case "implements":
          case "interface":
          case "package":
          case "private":
          case "protected":
          case "public":
          case "static":
          case "yield":
          case "let":
            return !0;
          default:
            return !1;
        }
      }
      function f(e) {
        return "eval" === e || "arguments" === e;
      }
      function h(e) {
        switch (e.length) {
          case 2:
            return "if" === e || "in" === e || "do" === e;
          case 3:
            return (
              "var" === e ||
              "for" === e ||
              "new" === e ||
              "try" === e ||
              "let" === e
            );
          case 4:
            return (
              "this" === e ||
              "else" === e ||
              "case" === e ||
              "void" === e ||
              "with" === e ||
              "enum" === e
            );
          case 5:
            return (
              "while" === e ||
              "break" === e ||
              "catch" === e ||
              "throw" === e ||
              "const" === e ||
              "yield" === e ||
              "class" === e ||
              "super" === e
            );
          case 6:
            return (
              "return" === e ||
              "typeof" === e ||
              "delete" === e ||
              "switch" === e ||
              "export" === e ||
              "import" === e
            );
          case 7:
            return "default" === e || "finally" === e || "extends" === e;
          case 8:
            return "function" === e || "continue" === e || "debugger" === e;
          case 10:
            return "instanceof" === e;
          default:
            return !1;
        }
      }
      function m(e, n, r, o, i) {
        var a;
        t("number" == typeof r, "Comment must have valid position"),
          (Dn.lastCommentStart = r),
          (a = { type: e, value: n }),
          bn.range && (a.range = [r, o]),
          bn.loc && (a.loc = i),
          bn.comments.push(a),
          bn.attachComment &&
            (bn.leadingComments.push(a), bn.trailingComments.push(a)),
          bn.tokenize &&
            ((a.type = a.type + "Comment"),
            bn.delegate && (a = bn.delegate(a)),
            bn.tokens.push(a));
      }
      function v(e) {
        var t, n, r, o;
        for (
          t = un - e, n = { start: { line: ln, column: un - cn - e } };
          Cn > un;

        )
          if (((r = an.charCodeAt(un)), ++un, s(r)))
            return (
              (pn = !0),
              bn.comments &&
                ((o = an.slice(t + e, un - 1)),
                (n.end = { line: ln, column: un - cn - 1 }),
                m("Line", o, t, un - 1, n)),
              13 === r && 10 === an.charCodeAt(un) && ++un,
              ++ln,
              void (cn = un)
            );
        bn.comments &&
          ((o = an.slice(t + e, un)),
          (n.end = { line: ln, column: un - cn }),
          m("Line", o, t, un, n));
      }
      function g() {
        var e, t, n, r;
        for (
          bn.comments &&
          ((e = un - 2), (t = { start: { line: ln, column: un - cn - 2 } }));
          Cn > un;

        )
          if (((n = an.charCodeAt(un)), s(n)))
            13 === n && 10 === an.charCodeAt(un + 1) && ++un,
              (pn = !0),
              ++ln,
              ++un,
              (cn = un);
          else if (42 === n) {
            if (47 === an.charCodeAt(un + 1))
              return (
                ++un,
                ++un,
                void (
                  bn.comments &&
                  ((r = an.slice(e + 2, un - 2)),
                  (t.end = { line: ln, column: un - cn }),
                  m("Block", r, e, un, t))
                )
              );
            ++un;
          } else ++un;
        bn.comments &&
          ((t.end = { line: ln, column: un - cn }),
          (r = an.slice(e + 2, un)),
          m("Block", r, e, un, t)),
          ne();
      }
      function y() {
        var e, t;
        for (pn = !1, t = 0 === un; Cn > un; )
          if (((e = an.charCodeAt(un)), a(e))) ++un;
          else if (s(e))
            (pn = !0),
              ++un,
              13 === e && 10 === an.charCodeAt(un) && ++un,
              ++ln,
              (cn = un),
              (t = !0);
          else if (47 === e)
            if (((e = an.charCodeAt(un + 1)), 47 === e))
              ++un, ++un, v(2), (t = !0);
            else {
              if (42 !== e) break;
              ++un, ++un, g();
            }
          else if (t && 45 === e) {
            if (45 !== an.charCodeAt(un + 1) || 62 !== an.charCodeAt(un + 2))
              break;
            (un += 3), v(3);
          } else {
            if (60 !== e) break;
            if ("!--" !== an.slice(un + 1, un + 4)) break;
            ++un, ++un, ++un, ++un, v(4);
          }
      }
      function C(e) {
        var t,
          n,
          o,
          i = 0;
        for (n = "u" === e ? 4 : 2, t = 0; n > t; ++t) {
          if (!(Cn > un && r(an[un]))) return "";
          (o = an[un++]),
            (i = 16 * i + "0123456789abcdef".indexOf(o.toLowerCase()));
        }
        return String.fromCharCode(i);
      }
      function A() {
        var e, t;
        for (
          e = an[un], t = 0, "}" === e && te();
          Cn > un && ((e = an[un++]), r(e));

        )
          t = 16 * t + "0123456789abcdef".indexOf(e.toLowerCase());
        return (t > 1114111 || "}" !== e) && te(), u(t);
      }
      function D(e) {
        var t, n, r;
        return (
          (t = an.charCodeAt(e)),
          t >= 55296 &&
            56319 >= t &&
            ((r = an.charCodeAt(e + 1)),
            r >= 56320 &&
              57343 >= r &&
              ((n = t), (t = 1024 * (n - 55296) + r - 56320 + 65536))),
          t
        );
      }
      function b() {
        var e, t, n;
        for (
          e = D(un),
            n = u(e),
            un += n.length,
            92 === e &&
              (117 !== an.charCodeAt(un) && te(),
              ++un,
              "{" === an[un]
                ? (++un, (t = A()))
                : ((t = C("u")),
                  (e = t.charCodeAt(0)),
                  (t && "\\" !== t && l(e)) || te()),
              (n = t));
          Cn > un && ((e = D(un)), c(e));

        )
          (t = u(e)),
            (n += t),
            (un += t.length),
            92 === e &&
              ((n = n.substr(0, n.length - 1)),
              117 !== an.charCodeAt(un) && te(),
              ++un,
              "{" === an[un]
                ? (++un, (t = A()))
                : ((t = C("u")),
                  (e = t.charCodeAt(0)),
                  (t && "\\" !== t && c(e)) || te()),
              (n += t));
        return n;
      }
      function E() {
        var e, t;
        for (e = un++; Cn > un; ) {
          if (((t = an.charCodeAt(un)), 92 === t)) return (un = e), b();
          if (t >= 55296 && 57343 > t) return (un = e), b();
          if (!c(t)) break;
          ++un;
        }
        return an.slice(e, un);
      }
      function w() {
        var e, t, n;
        return (
          (e = un),
          (t = 92 === an.charCodeAt(un) ? b() : E()),
          (n =
            1 === t.length
              ? Zt.Identifier
              : h(t)
              ? Zt.Keyword
              : "null" === t
              ? Zt.NullLiteral
              : "true" === t || "false" === t
              ? Zt.BooleanLiteral
              : Zt.Identifier),
          {
            type: n,
            value: t,
            lineNumber: ln,
            lineStart: cn,
            start: e,
            end: un,
          }
        );
      }
      function x() {
        var e, t;
        switch (
          ((e = {
            type: Zt.Punctuator,
            value: "",
            lineNumber: ln,
            lineStart: cn,
            start: un,
            end: un,
          }),
          (t = an[un]))
        ) {
          case "(":
            bn.tokenize && (bn.openParenToken = bn.tokenValues.length), ++un;
            break;
          case "{":
            bn.tokenize && (bn.openCurlyToken = bn.tokenValues.length),
              Dn.curlyStack.push("{"),
              ++un;
            break;
          case ".":
            ++un,
              "." === an[un] && "." === an[un + 1] && ((un += 2), (t = "..."));
            break;
          case "}":
            ++un, Dn.curlyStack.pop();
            break;
          case ")":
          case ";":
          case ",":
          case "[":
          case "]":
          case ":":
          case "?":
          case "~":
            ++un;
            break;
          default:
            (t = an.substr(un, 4)),
              ">>>=" === t
                ? (un += 4)
                : ((t = t.substr(0, 3)),
                  "===" === t ||
                  "!==" === t ||
                  ">>>" === t ||
                  "<<=" === t ||
                  ">>=" === t
                    ? (un += 3)
                    : ((t = t.substr(0, 2)),
                      "&&" === t ||
                      "||" === t ||
                      "==" === t ||
                      "!=" === t ||
                      "+=" === t ||
                      "-=" === t ||
                      "*=" === t ||
                      "/=" === t ||
                      "++" === t ||
                      "--" === t ||
                      "<<" === t ||
                      ">>" === t ||
                      "&=" === t ||
                      "|=" === t ||
                      "^=" === t ||
                      "%=" === t ||
                      "<=" === t ||
                      ">=" === t ||
                      "=>" === t
                        ? (un += 2)
                        : ((t = an[un]),
                          "<>=!+-*%&|^/".indexOf(t) >= 0 && ++un)));
        }
        return un === e.start && te(), (e.end = un), (e.value = t), e;
      }
      function N(e) {
        for (var t = ""; Cn > un && r(an[un]); ) t += an[un++];
        return (
          0 === t.length && te(),
          l(an.charCodeAt(un)) && te(),
          {
            type: Zt.NumericLiteral,
            value: parseInt("0x" + t, 16),
            lineNumber: ln,
            lineStart: cn,
            start: e,
            end: un,
          }
        );
      }
      function k(e) {
        var t, r;
        for (r = ""; Cn > un && ((t = an[un]), "0" === t || "1" === t); )
          r += an[un++];
        return (
          0 === r.length && te(),
          Cn > un && ((t = an.charCodeAt(un)), (l(t) || n(t)) && te()),
          {
            type: Zt.NumericLiteral,
            value: parseInt(r, 2),
            lineNumber: ln,
            lineStart: cn,
            start: e,
            end: un,
          }
        );
      }
      function S(e, t) {
        var r, i;
        for (
          o(e) ? ((i = !0), (r = "0" + an[un++])) : ((i = !1), ++un, (r = ""));
          Cn > un && o(an[un]);

        )
          r += an[un++];
        return (
          i || 0 !== r.length || te(),
          (l(an.charCodeAt(un)) || n(an.charCodeAt(un))) && te(),
          {
            type: Zt.NumericLiteral,
            value: parseInt(r, 8),
            octal: i,
            lineNumber: ln,
            lineStart: cn,
            start: t,
            end: un,
          }
        );
      }
      function B() {
        var e, t;
        for (e = un + 1; Cn > e; ++e) {
          if (((t = an[e]), "8" === t || "9" === t)) return !1;
          if (!o(t)) return !0;
        }
        return !0;
      }
      function _() {
        var e, r, i;
        if (
          ((i = an[un]),
          t(
            n(i.charCodeAt(0)) || "." === i,
            "Numeric literal must start with a decimal digit or a decimal point"
          ),
          (r = un),
          (e = ""),
          "." !== i)
        ) {
          if (((e = an[un++]), (i = an[un]), "0" === e)) {
            if ("x" === i || "X" === i) return ++un, N(r);
            if ("b" === i || "B" === i) return ++un, k(r);
            if ("o" === i || "O" === i) return S(i, r);
            if (o(i) && B()) return S(i, r);
          }
          for (; n(an.charCodeAt(un)); ) e += an[un++];
          i = an[un];
        }
        if ("." === i) {
          for (e += an[un++]; n(an.charCodeAt(un)); ) e += an[un++];
          i = an[un];
        }
        if ("e" === i || "E" === i)
          if (
            ((e += an[un++]),
            (i = an[un]),
            ("+" !== i && "-" !== i) || (e += an[un++]),
            n(an.charCodeAt(un)))
          )
            for (; n(an.charCodeAt(un)); ) e += an[un++];
          else te();
        return (
          l(an.charCodeAt(un)) && te(),
          {
            type: Zt.NumericLiteral,
            value: parseFloat(e),
            lineNumber: ln,
            lineStart: cn,
            start: r,
            end: un,
          }
        );
      }
      function M() {
        var e,
          n,
          r,
          a,
          u,
          l = "",
          c = !1;
        for (
          e = an[un],
            t(
              "'" === e || '"' === e,
              "String literal must starts with a quote"
            ),
            n = un,
            ++un;
          Cn > un;

        ) {
          if (((r = an[un++]), r === e)) {
            e = "";
            break;
          }
          if ("\\" === r)
            if (((r = an[un++]), r && s(r.charCodeAt(0))))
              ++ln, "\r" === r && "\n" === an[un] && ++un, (cn = un);
            else
              switch (r) {
                case "u":
                case "x":
                  if ("{" === an[un]) ++un, (l += A());
                  else {
                    if (((a = C(r)), !a)) throw te();
                    l += a;
                  }
                  break;
                case "n":
                  l += "\n";
                  break;
                case "r":
                  l += "\r";
                  break;
                case "t":
                  l += "	";
                  break;
                case "b":
                  l += "\b";
                  break;
                case "f":
                  l += "\f";
                  break;
                case "v":
                  l += "\x0B";
                  break;
                case "8":
                case "9":
                  (l += r), ne();
                  break;
                default:
                  o(r)
                    ? ((u = i(r)),
                      (c = u.octal || c),
                      (l += String.fromCharCode(u.code)))
                    : (l += r);
              }
          else {
            if (s(r.charCodeAt(0))) break;
            l += r;
          }
        }
        return (
          "" !== e && ((un = n), te()),
          {
            type: Zt.StringLiteral,
            value: l,
            octal: c,
            lineNumber: vn,
            lineStart: gn,
            start: n,
            end: un,
          }
        );
      }
      function O() {
        var e,
          t,
          r,
          i,
          a,
          u,
          l,
          c,
          p = "";
        for (
          i = !1, u = !1, t = un, a = "`" === an[un], r = 2, ++un;
          Cn > un;

        ) {
          if (((e = an[un++]), "`" === e)) {
            (r = 1), (u = !0), (i = !0);
            break;
          }
          if ("$" === e) {
            if ("{" === an[un]) {
              Dn.curlyStack.push("${"), ++un, (i = !0);
              break;
            }
            p += e;
          } else if ("\\" === e)
            if (((e = an[un++]), s(e.charCodeAt(0))))
              ++ln, "\r" === e && "\n" === an[un] && ++un, (cn = un);
            else
              switch (e) {
                case "n":
                  p += "\n";
                  break;
                case "r":
                  p += "\r";
                  break;
                case "t":
                  p += "	";
                  break;
                case "u":
                case "x":
                  "{" === an[un]
                    ? (++un, (p += A()))
                    : ((l = un),
                      (c = C(e)),
                      c ? (p += c) : ((un = l), (p += e)));
                  break;
                case "b":
                  p += "\b";
                  break;
                case "f":
                  p += "\f";
                  break;
                case "v":
                  p += "\x0B";
                  break;
                default:
                  "0" === e
                    ? (n(an.charCodeAt(un)) && Z(rn.TemplateOctalLiteral),
                      (p += "\x00"))
                    : o(e)
                    ? Z(rn.TemplateOctalLiteral)
                    : (p += e);
              }
          else
            s(e.charCodeAt(0))
              ? (++ln,
                "\r" === e && "\n" === an[un] && ++un,
                (cn = un),
                (p += "\n"))
              : (p += e);
        }
        return (
          i || te(),
          a || Dn.curlyStack.pop(),
          {
            type: Zt.Template,
            value: { cooked: p, raw: an.slice(t + 1, un - r) },
            head: a,
            tail: u,
            lineNumber: ln,
            lineStart: cn,
            start: t,
            end: un,
          }
        );
      }
      function F(e, t) {
        var n = "￿",
          r = e;
        t.indexOf("u") >= 0 &&
          (r = r
            .replace(
              /\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,
              function (e, t, r) {
                var o = parseInt(t || r, 16);
                return (
                  o > 1114111 && te(null, rn.InvalidRegExp),
                  65535 >= o ? String.fromCharCode(o) : n
                );
              }
            )
            .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, n));
        try {
          RegExp(r);
        } catch (o) {
          te(null, rn.InvalidRegExp);
        }
        try {
          return new RegExp(e, t);
        } catch (i) {
          return null;
        }
      }
      function T() {
        var e, n, r, o, i;
        for (
          e = an[un],
            t("/" === e, "Regular expression literal must start with a slash"),
            n = an[un++],
            r = !1,
            o = !1;
          Cn > un;

        )
          if (((e = an[un++]), (n += e), "\\" === e))
            (e = an[un++]),
              s(e.charCodeAt(0)) && te(null, rn.UnterminatedRegExp),
              (n += e);
          else if (s(e.charCodeAt(0))) te(null, rn.UnterminatedRegExp);
          else if (r) "]" === e && (r = !1);
          else {
            if ("/" === e) {
              o = !0;
              break;
            }
            "[" === e && (r = !0);
          }
        return (
          o || te(null, rn.UnterminatedRegExp),
          (i = n.substr(1, n.length - 2)),
          { value: i, literal: n }
        );
      }
      function I() {
        var e, t, n, r;
        for (t = "", n = ""; Cn > un && ((e = an[un]), c(e.charCodeAt(0))); )
          if ((++un, "\\" === e && Cn > un))
            if (((e = an[un]), "u" === e)) {
              if ((++un, (r = un), (e = C("u"))))
                for (n += e, t += "\\u"; un > r; ++r) t += an[r];
              else (un = r), (n += "u"), (t += "\\u");
              ne();
            } else (t += "\\"), ne();
          else (n += e), (t += e);
        return { value: n, literal: t };
      }
      function P() {
        var e, t, n, r;
        return (
          (yn = !0),
          (An = null),
          y(),
          (e = un),
          (t = T()),
          (n = I()),
          (r = F(t.value, n.value)),
          (yn = !1),
          bn.tokenize
            ? {
                type: Zt.RegularExpression,
                value: r,
                regex: { pattern: t.value, flags: n.value },
                lineNumber: ln,
                lineStart: cn,
                start: e,
                end: un,
              }
            : {
                literal: t.literal + n.literal,
                value: r,
                regex: { pattern: t.value, flags: n.value },
                start: e,
                end: un,
              }
        );
      }
      function L() {
        var e, t, n, r;
        return (
          y(),
          (e = un),
          (t = { start: { line: ln, column: un - cn } }),
          (n = P()),
          (t.end = { line: ln, column: un - cn }),
          bn.tokenize ||
            (bn.tokens.length > 0 &&
              ((r = bn.tokens[bn.tokens.length - 1]),
              r.range[0] === e &&
                "Punctuator" === r.type &&
                (("/" !== r.value && "/=" !== r.value) || bn.tokens.pop())),
            bn.tokens.push({
              type: "RegularExpression",
              value: n.literal,
              regex: n.regex,
              range: [e, un],
              loc: t,
            })),
          n
        );
      }
      function R(e) {
        return (
          e.type === Zt.Identifier ||
          e.type === Zt.Keyword ||
          e.type === Zt.BooleanLiteral ||
          e.type === Zt.NullLiteral
        );
      }
      function V() {
        function e(e) {
          return e && e.length > 1 && e[0] >= "a" && e[0] <= "z";
        }
        var t, n, r;
        switch (
          ((n = bn.tokenValues[bn.tokens.length - 1]), (t = null !== n), n)
        ) {
          case "this":
          case "]":
            t = !1;
            break;
          case ")":
            (r = bn.tokenValues[bn.openParenToken - 1]),
              (t = "if" === r || "while" === r || "for" === r || "with" === r);
            break;
          case "}":
            (t = !1),
              e(bn.tokenValues[bn.openCurlyToken - 3])
                ? ((r = bn.tokenValues[bn.openCurlyToken - 4]),
                  (t = r ? en.indexOf(r) < 0 : !1))
                : e(bn.tokenValues[bn.openCurlyToken - 4]) &&
                  ((r = bn.tokenValues[bn.openCurlyToken - 5]),
                  (t = r ? en.indexOf(r) < 0 : !0));
        }
        return t ? L() : x();
      }
      function U() {
        var e, t;
        return un >= Cn
          ? { type: Zt.EOF, lineNumber: ln, lineStart: cn, start: un, end: un }
          : ((e = an.charCodeAt(un)),
            l(e)
              ? ((t = w()), sn && d(t.value) && (t.type = Zt.Keyword), t)
              : 40 === e || 41 === e || 59 === e
              ? x()
              : 39 === e || 34 === e
              ? M()
              : 46 === e
              ? n(an.charCodeAt(un + 1))
                ? _()
                : x()
              : n(e)
              ? _()
              : bn.tokenize && 47 === e
              ? V()
              : 96 === e ||
                (125 === e && "${" === Dn.curlyStack[Dn.curlyStack.length - 1])
              ? O()
              : e >= 55296 && 57343 > e && ((e = D(un)), l(e))
              ? w()
              : x());
      }
      function W() {
        var e, t, n, r;
        return (
          (e = { start: { line: ln, column: un - cn } }),
          (t = U()),
          (e.end = { line: ln, column: un - cn }),
          t.type !== Zt.EOF &&
            ((n = an.slice(t.start, t.end)),
            (r = {
              type: Jt[t.type],
              value: n,
              range: [t.start, t.end],
              loc: e,
            }),
            t.regex &&
              (r.regex = { pattern: t.regex.pattern, flags: t.regex.flags }),
            bn.tokenValues &&
              bn.tokenValues.push(
                "Punctuator" === r.type || "Keyword" === r.type ? r.value : null
              ),
            bn.tokenize &&
              (bn.range || delete r.range,
              bn.loc || delete r.loc,
              bn.delegate && (r = bn.delegate(r))),
            bn.tokens.push(r)),
          t
        );
      }
      function j() {
        var e;
        return (
          (yn = !0),
          (dn = un),
          (fn = ln),
          (hn = cn),
          y(),
          (e = An),
          (mn = un),
          (vn = ln),
          (gn = cn),
          (An = "undefined" != typeof bn.tokens ? W() : U()),
          (yn = !1),
          e
        );
      }
      function H() {
        (yn = !0),
          y(),
          (dn = un),
          (fn = ln),
          (hn = cn),
          (mn = un),
          (vn = ln),
          (gn = cn),
          (An = "undefined" != typeof bn.tokens ? W() : U()),
          (yn = !1);
      }
      function z() {
        (this.line = vn), (this.column = mn - gn);
      }
      function q() {
        (this.start = new z()), (this.end = null);
      }
      function Y(e) {
        (this.start = { line: e.lineNumber, column: e.start - e.lineStart }),
          (this.end = null);
      }
      function K() {
        bn.range && (this.range = [mn, 0]), bn.loc && (this.loc = new q());
      }
      function G(e) {
        bn.range && (this.range = [e.start, 0]),
          bn.loc && (this.loc = new Y(e));
      }
      function X(e) {
        var t, n;
        for (t = 0; t < bn.errors.length; t++)
          if (
            ((n = bn.errors[t]), n.index === e.index && n.message === e.message)
          )
            return;
        bn.errors.push(e);
      }
      function $(e, t) {
        var n = new Error(e);
        try {
          throw n;
        } catch (r) {
          Object.create &&
            Object.defineProperty &&
            ((n = Object.create(r)),
            Object.defineProperty(n, "column", { value: t }));
        } finally {
          return n;
        }
      }
      function Q(e, t, n) {
        var r, o, i;
        return (
          (r = "Line " + e + ": " + n),
          (o = t - (yn ? cn : hn) + 1),
          (i = $(r, o)),
          (i.lineNumber = e),
          (i.description = n),
          (i.index = t),
          i
        );
      }
      function Z(e) {
        var n, r;
        throw (
          ((n = Array.prototype.slice.call(arguments, 1)),
          (r = e.replace(/%(\d)/g, function (e, r) {
            return t(r < n.length, "Message reference must be in range"), n[r];
          })),
          Q(fn, dn, r))
        );
      }
      function J(e) {
        var n, r, o;
        if (
          ((n = Array.prototype.slice.call(arguments, 1)),
          (r = e.replace(/%(\d)/g, function (e, r) {
            return t(r < n.length, "Message reference must be in range"), n[r];
          })),
          (o = Q(ln, dn, r)),
          !bn.errors)
        )
          throw o;
        X(o);
      }
      function ee(e, t) {
        var n,
          r = t || rn.UnexpectedToken;
        return (
          e
            ? (t ||
                ((r =
                  e.type === Zt.EOF
                    ? rn.UnexpectedEOS
                    : e.type === Zt.Identifier
                    ? rn.UnexpectedIdentifier
                    : e.type === Zt.NumericLiteral
                    ? rn.UnexpectedNumber
                    : e.type === Zt.StringLiteral
                    ? rn.UnexpectedString
                    : e.type === Zt.Template
                    ? rn.UnexpectedTemplate
                    : rn.UnexpectedToken),
                e.type === Zt.Keyword &&
                  (p(e.value)
                    ? (r = rn.UnexpectedReserved)
                    : sn && d(e.value) && (r = rn.StrictReservedWord))),
              (n = e.type === Zt.Template ? e.value.raw : e.value))
            : (n = "ILLEGAL"),
          (r = r.replace("%0", n)),
          e && "number" == typeof e.lineNumber
            ? Q(e.lineNumber, e.start, r)
            : Q(yn ? ln : fn, yn ? un : dn, r)
        );
      }
      function te(e, t) {
        throw ee(e, t);
      }
      function ne(e, t) {
        var n = ee(e, t);
        if (!bn.errors) throw n;
        X(n);
      }
      function re(e) {
        var t = j();
        (t.type === Zt.Punctuator && t.value === e) || te(t);
      }
      function oe() {
        var e;
        bn.errors
          ? ((e = An),
            e.type === Zt.Punctuator && "," === e.value
              ? j()
              : e.type === Zt.Punctuator && ";" === e.value
              ? (j(), ne(e))
              : ne(e, rn.UnexpectedToken))
          : re(",");
      }
      function ie(e) {
        var t = j();
        (t.type === Zt.Keyword && t.value === e) || te(t);
      }
      function ae(e) {
        return An.type === Zt.Punctuator && An.value === e;
      }
      function se(e) {
        return An.type === Zt.Keyword && An.value === e;
      }
      function ue(e) {
        return An.type === Zt.Identifier && An.value === e;
      }
      function le() {
        var e;
        return An.type !== Zt.Punctuator
          ? !1
          : ((e = An.value),
            "=" === e ||
              "*=" === e ||
              "/=" === e ||
              "%=" === e ||
              "+=" === e ||
              "-=" === e ||
              "<<=" === e ||
              ">>=" === e ||
              ">>>=" === e ||
              "&=" === e ||
              "^=" === e ||
              "|=" === e);
      }
      function ce() {
        return 59 === an.charCodeAt(mn) || ae(";")
          ? void j()
          : void (
              pn ||
              ((dn = mn),
              (fn = vn),
              (hn = gn),
              An.type === Zt.EOF || ae("}") || te(An))
            );
      }
      function pe(e) {
        var t,
          n = En,
          r = wn,
          o = xn;
        return (
          (En = !0),
          (wn = !0),
          (xn = null),
          (t = e()),
          null !== xn && te(xn),
          (En = n),
          (wn = r),
          (xn = o),
          t
        );
      }
      function de(e) {
        var t,
          n = En,
          r = wn,
          o = xn;
        return (
          (En = !0),
          (wn = !0),
          (xn = null),
          (t = e()),
          (En = En && n),
          (wn = wn && r),
          (xn = o || xn),
          t
        );
      }
      function fe(e, t) {
        var n,
          r,
          o = new K(),
          i = [];
        for (re("["); !ae("]"); )
          if (ae(",")) j(), i.push(null);
          else {
            if (ae("...")) {
              (r = new K()),
                j(),
                e.push(An),
                (n = Je(t)),
                i.push(r.finishRestElement(n));
              break;
            }
            i.push(ge(e, t)), ae("]") || re(",");
          }
        return re("]"), o.finishArrayPattern(i);
      }
      function he(e, t) {
        var n,
          r,
          o,
          i = new K(),
          a = ae("[");
        if (An.type === Zt.Identifier) {
          if (((r = An), (n = Je()), ae("=")))
            return (
              e.push(r),
              j(),
              (o = Ge()),
              i.finishProperty(
                "init",
                n,
                !1,
                new G(r).finishAssignmentPattern(n, o),
                !1,
                !0
              )
            );
          if (!ae(":"))
            return e.push(r), i.finishProperty("init", n, !1, n, !1, !0);
        } else n = De();
        return (
          re(":"), (o = ge(e, t)), i.finishProperty("init", n, a, o, !1, !1)
        );
      }
      function me(e, t) {
        var n = new K(),
          r = [];
        for (re("{"); !ae("}"); ) r.push(he(e, t)), ae("}") || re(",");
        return j(), n.finishObjectPattern(r);
      }
      function ve(e, t) {
        return ae("[")
          ? fe(e, t)
          : ae("{")
          ? me(e, t)
          : (se("let") &&
              (("const" !== t && "let" !== t) || ne(An, rn.UnexpectedToken)),
            e.push(An),
            Je(t));
      }
      function ge(e, t) {
        var n,
          r,
          o,
          i = An;
        return (
          (n = ve(e, t)),
          ae("=") &&
            (j(),
            (r = Dn.allowYield),
            (Dn.allowYield = !0),
            (o = pe(Ge)),
            (Dn.allowYield = r),
            (n = new G(i).finishAssignmentPattern(n, o))),
          n
        );
      }
      function ye() {
        var e,
          t = [],
          n = new K();
        for (re("["); !ae("]"); )
          ae(",")
            ? (j(), t.push(null))
            : ae("...")
            ? ((e = new K()),
              j(),
              e.finishSpreadElement(de(Ge)),
              ae("]") || ((wn = En = !1), re(",")),
              t.push(e))
            : (t.push(de(Ge)), ae("]") || re(","));
        return j(), n.finishArrayExpression(t);
      }
      function Ce(e, t, n) {
        var r, o;
        return (
          (wn = En = !1),
          (r = sn),
          (o = pe(kt)),
          sn && t.firstRestricted && ne(t.firstRestricted, t.message),
          sn && t.stricted && ne(t.stricted, t.message),
          (sn = r),
          e.finishFunctionExpression(null, t.params, t.defaults, o, n)
        );
      }
      function Ae() {
        var e,
          t,
          n = new K(),
          r = Dn.allowYield;
        return (
          (Dn.allowYield = !1),
          (e = _t()),
          (Dn.allowYield = r),
          (Dn.allowYield = !1),
          (t = Ce(n, e, !1)),
          (Dn.allowYield = r),
          t
        );
      }
      function De() {
        var e,
          t,
          n = new K();
        switch (((e = j()), e.type)) {
          case Zt.StringLiteral:
          case Zt.NumericLiteral:
            return (
              sn && e.octal && ne(e, rn.StrictOctalLiteral), n.finishLiteral(e)
            );
          case Zt.Identifier:
          case Zt.BooleanLiteral:
          case Zt.NullLiteral:
          case Zt.Keyword:
            return n.finishIdentifier(e.value);
          case Zt.Punctuator:
            if ("[" === e.value) return (t = pe(Ge)), re("]"), t;
        }
        te(e);
      }
      function be() {
        switch (An.type) {
          case Zt.Identifier:
          case Zt.StringLiteral:
          case Zt.BooleanLiteral:
          case Zt.NullLiteral:
          case Zt.NumericLiteral:
          case Zt.Keyword:
            return !0;
          case Zt.Punctuator:
            return "[" === An.value;
        }
        return !1;
      }
      function Ee(e, t, n, r) {
        var o,
          i,
          a,
          s,
          u = Dn.allowYield;
        if (e.type === Zt.Identifier) {
          if ("get" === e.value && be())
            return (
              (n = ae("[")),
              (t = De()),
              (a = new K()),
              re("("),
              re(")"),
              (Dn.allowYield = !1),
              (o = Ce(
                a,
                {
                  params: [],
                  defaults: [],
                  stricted: null,
                  firstRestricted: null,
                  message: null,
                },
                !1
              )),
              (Dn.allowYield = u),
              r.finishProperty("get", t, n, o, !1, !1)
            );
          if ("set" === e.value && be())
            return (
              (n = ae("[")),
              (t = De()),
              (a = new K()),
              re("("),
              (i = {
                params: [],
                defaultCount: 0,
                defaults: [],
                firstRestricted: null,
                paramSet: {},
              }),
              ae(")")
                ? ne(An)
                : ((Dn.allowYield = !1),
                  Bt(i),
                  (Dn.allowYield = u),
                  0 === i.defaultCount && (i.defaults = [])),
              re(")"),
              (Dn.allowYield = !1),
              (o = Ce(a, i, !1)),
              (Dn.allowYield = u),
              r.finishProperty("set", t, n, o, !1, !1)
            );
        } else if (e.type === Zt.Punctuator && "*" === e.value && be()) return (n = ae("[")), (t = De()), (a = new K()), (Dn.allowYield = !0), (s = _t()), (Dn.allowYield = u), (Dn.allowYield = !1), (o = Ce(a, s, !0)), (Dn.allowYield = u), r.finishProperty("init", t, n, o, !0, !1);
        return t && ae("(")
          ? ((o = Ae()), r.finishProperty("init", t, n, o, !0, !1))
          : null;
      }
      function we(e) {
        var t,
          n,
          r,
          o,
          i,
          a = An,
          s = new K();
        return (
          (t = ae("[")),
          ae("*") ? j() : (n = De()),
          (r = Ee(a, n, t, s))
            ? r
            : (n || te(An),
              t ||
                ((o =
                  (n.type === tn.Identifier && "__proto__" === n.name) ||
                  (n.type === tn.Literal && "__proto__" === n.value)),
                e.value && o && J(rn.DuplicateProtoProperty),
                (e.value |= o)),
              ae(":")
                ? (j(), (i = de(Ge)), s.finishProperty("init", n, t, i, !1, !1))
                : a.type === Zt.Identifier
                ? ae("=")
                  ? ((xn = An),
                    j(),
                    (i = pe(Ge)),
                    s.finishProperty(
                      "init",
                      n,
                      t,
                      new G(a).finishAssignmentPattern(n, i),
                      !1,
                      !0
                    ))
                  : s.finishProperty("init", n, t, n, !1, !0)
                : void te(An))
        );
      }
      function xe() {
        var e = [],
          t = { value: !1 },
          n = new K();
        for (re("{"); !ae("}"); ) e.push(we(t)), ae("}") || oe();
        return re("}"), n.finishObjectExpression(e);
      }
      function Ne(e) {
        var t;
        switch (e.type) {
          case tn.Identifier:
          case tn.MemberExpression:
          case tn.RestElement:
          case tn.AssignmentPattern:
            break;
          case tn.SpreadElement:
            (e.type = tn.RestElement), Ne(e.argument);
            break;
          case tn.ArrayExpression:
            for (e.type = tn.ArrayPattern, t = 0; t < e.elements.length; t++)
              null !== e.elements[t] && Ne(e.elements[t]);
            break;
          case tn.ObjectExpression:
            for (e.type = tn.ObjectPattern, t = 0; t < e.properties.length; t++)
              Ne(e.properties[t].value);
            break;
          case tn.AssignmentExpression:
            (e.type = tn.AssignmentPattern), Ne(e.left);
        }
      }
      function ke(e) {
        var t, n;
        return (
          (An.type !== Zt.Template || (e.head && !An.head)) && te(),
          (t = new K()),
          (n = j()),
          t.finishTemplateElement(
            { raw: n.value.raw, cooked: n.value.cooked },
            n.tail
          )
        );
      }
      function Se() {
        var e,
          t,
          n,
          r = new K();
        for (e = ke({ head: !0 }), t = [e], n = []; !e.tail; )
          n.push(Xe()), (e = ke({ head: !1 })), t.push(e);
        return r.finishTemplateLiteral(t, n);
      }
      function Be() {
        var e,
          t,
          n,
          r,
          o = [];
        if ((re("("), ae(")")))
          return (
            j(),
            ae("=>") || re("=>"),
            { type: nn.ArrowParameterPlaceHolder, params: [], rawParams: [] }
          );
        if (((n = An), ae("...")))
          return (
            (e = lt(o)),
            re(")"),
            ae("=>") || re("=>"),
            { type: nn.ArrowParameterPlaceHolder, params: [e] }
          );
        if (((En = !0), (e = de(Ge)), ae(","))) {
          for (wn = !1, t = [e]; Cn > mn && ae(","); ) {
            if ((j(), ae("..."))) {
              for (
                En || te(An),
                  t.push(lt(o)),
                  re(")"),
                  ae("=>") || re("=>"),
                  En = !1,
                  r = 0;
                r < t.length;
                r++
              )
                Ne(t[r]);
              return { type: nn.ArrowParameterPlaceHolder, params: t };
            }
            t.push(de(Ge));
          }
          e = new G(n).finishSequenceExpression(t);
        }
        if ((re(")"), ae("=>"))) {
          if (e.type === tn.Identifier && "yield" === e.name)
            return { type: nn.ArrowParameterPlaceHolder, params: [e] };
          if ((En || te(An), e.type === tn.SequenceExpression))
            for (r = 0; r < e.expressions.length; r++) Ne(e.expressions[r]);
          else Ne(e);
          e = {
            type: nn.ArrowParameterPlaceHolder,
            params: e.type === tn.SequenceExpression ? e.expressions : [e],
          };
        }
        return (En = !1), e;
      }
      function _e() {
        var e, t, n, r;
        if (ae("(")) return (En = !1), de(Be);
        if (ae("[")) return de(ye);
        if (ae("{")) return de(xe);
        if (((e = An.type), (r = new K()), e === Zt.Identifier))
          "module" === Dn.sourceType && "await" === An.value && ne(An),
            (n = r.finishIdentifier(j().value));
        else if (e === Zt.StringLiteral || e === Zt.NumericLiteral)
          (wn = En = !1),
            sn && An.octal && ne(An, rn.StrictOctalLiteral),
            (n = r.finishLiteral(j()));
        else if (e === Zt.Keyword) {
          if (!sn && Dn.allowYield && se("yield")) return Oe();
          if (!sn && se("let")) return r.finishIdentifier(j().value);
          if (((wn = En = !1), se("function"))) return Ot();
          if (se("this")) return j(), r.finishThisExpression();
          if (se("class")) return It();
          te(j());
        } else
          e === Zt.BooleanLiteral
            ? ((wn = En = !1),
              (t = j()),
              (t.value = "true" === t.value),
              (n = r.finishLiteral(t)))
            : e === Zt.NullLiteral
            ? ((wn = En = !1),
              (t = j()),
              (t.value = null),
              (n = r.finishLiteral(t)))
            : ae("/") || ae("/=")
            ? ((wn = En = !1),
              (un = mn),
              (t = "undefined" != typeof bn.tokens ? L() : P()),
              j(),
              (n = r.finishLiteral(t)))
            : e === Zt.Template
            ? (n = Se())
            : te(j());
        return n;
      }
      function Me() {
        var e,
          t = [];
        if ((re("("), !ae(")")))
          for (
            ;
            Cn > mn &&
            (ae("...")
              ? ((e = new K()), j(), e.finishSpreadElement(pe(Ge)))
              : (e = pe(Ge)),
            t.push(e),
            !ae(")"));

          )
            oe();
        return re(")"), t;
      }
      function Oe() {
        var e,
          t = new K();
        return (e = j()), R(e) || te(e), t.finishIdentifier(e.value);
      }
      function Fe() {
        return re("."), Oe();
      }
      function Te() {
        var e;
        return re("["), (e = pe(Xe)), re("]"), e;
      }
      function Ie() {
        var e,
          t,
          n = new K();
        if ((ie("new"), ae("."))) {
          if (
            (j(),
            An.type === Zt.Identifier &&
              "target" === An.value &&
              Dn.inFunctionBody)
          )
            return j(), n.finishMetaProperty("new", "target");
          te(An);
        }
        return (
          (e = pe(Le)),
          (t = ae("(") ? Me() : []),
          (wn = En = !1),
          n.finishNewExpression(e, t)
        );
      }
      function Pe() {
        var e,
          t,
          n,
          r,
          o,
          i = Dn.allowIn;
        for (
          o = An,
            Dn.allowIn = !0,
            se("super") && Dn.inFunctionBody
              ? ((t = new K()),
                j(),
                (t = t.finishSuper()),
                ae("(") || ae(".") || ae("[") || te(An))
              : (t = de(se("new") ? Ie : _e));
          ;

        )
          if (ae("."))
            (En = !1),
              (wn = !0),
              (r = Fe()),
              (t = new G(o).finishMemberExpression(".", t, r));
          else if (ae("("))
            (En = !1),
              (wn = !1),
              (n = Me()),
              (t = new G(o).finishCallExpression(t, n));
          else if (ae("["))
            (En = !1),
              (wn = !0),
              (r = Te()),
              (t = new G(o).finishMemberExpression("[", t, r));
          else {
            if (An.type !== Zt.Template || !An.head) break;
            (e = Se()), (t = new G(o).finishTaggedTemplateExpression(t, e));
          }
        return (Dn.allowIn = i), t;
      }
      function Le() {
        var e, n, r, o;
        for (
          t(Dn.allowIn, "callee of new expression always allow in keyword."),
            o = An,
            se("super") && Dn.inFunctionBody
              ? ((n = new K()),
                j(),
                (n = n.finishSuper()),
                ae("[") || ae(".") || te(An))
              : (n = de(se("new") ? Ie : _e));
          ;

        )
          if (ae("["))
            (En = !1),
              (wn = !0),
              (r = Te()),
              (n = new G(o).finishMemberExpression("[", n, r));
          else if (ae("."))
            (En = !1),
              (wn = !0),
              (r = Fe()),
              (n = new G(o).finishMemberExpression(".", n, r));
          else {
            if (An.type !== Zt.Template || !An.head) break;
            (e = Se()), (n = new G(o).finishTaggedTemplateExpression(n, e));
          }
        return n;
      }
      function Re() {
        var e,
          t,
          n = An;
        return (
          (e = de(Pe)),
          pn ||
            An.type !== Zt.Punctuator ||
            ((ae("++") || ae("--")) &&
              (sn &&
                e.type === tn.Identifier &&
                f(e.name) &&
                J(rn.StrictLHSPostfix),
              wn || J(rn.InvalidLHSInAssignment),
              (wn = En = !1),
              (t = j()),
              (e = new G(n).finishPostfixExpression(t.value, e)))),
          e
        );
      }
      function Ve() {
        var e, t, n;
        return (
          An.type !== Zt.Punctuator && An.type !== Zt.Keyword
            ? (t = Re())
            : ae("++") || ae("--")
            ? ((n = An),
              (e = j()),
              (t = de(Ve)),
              sn &&
                t.type === tn.Identifier &&
                f(t.name) &&
                J(rn.StrictLHSPrefix),
              wn || J(rn.InvalidLHSInAssignment),
              (t = new G(n).finishUnaryExpression(e.value, t)),
              (wn = En = !1))
            : ae("+") || ae("-") || ae("~") || ae("!")
            ? ((n = An),
              (e = j()),
              (t = de(Ve)),
              (t = new G(n).finishUnaryExpression(e.value, t)),
              (wn = En = !1))
            : se("delete") || se("void") || se("typeof")
            ? ((n = An),
              (e = j()),
              (t = de(Ve)),
              (t = new G(n).finishUnaryExpression(e.value, t)),
              sn &&
                "delete" === t.operator &&
                t.argument.type === tn.Identifier &&
                J(rn.StrictDelete),
              (wn = En = !1))
            : (t = Re()),
          t
        );
      }
      function Ue(e, t) {
        var n = 0;
        if (e.type !== Zt.Punctuator && e.type !== Zt.Keyword) return 0;
        switch (e.value) {
          case "||":
            n = 1;
            break;
          case "&&":
            n = 2;
            break;
          case "|":
            n = 3;
            break;
          case "^":
            n = 4;
            break;
          case "&":
            n = 5;
            break;
          case "==":
          case "!=":
          case "===":
          case "!==":
            n = 6;
            break;
          case "<":
          case ">":
          case "<=":
          case ">=":
          case "instanceof":
            n = 7;
            break;
          case "in":
            n = t ? 7 : 0;
            break;
          case "<<":
          case ">>":
          case ">>>":
            n = 8;
            break;
          case "+":
          case "-":
            n = 9;
            break;
          case "*":
          case "/":
          case "%":
            n = 11;
        }
        return n;
      }
      function We() {
        var e, t, n, r, o, i, a, s, u, l;
        if (
          ((e = An), (u = de(Ve)), (r = An), (o = Ue(r, Dn.allowIn)), 0 === o)
        )
          return u;
        for (
          wn = En = !1, r.prec = o, j(), t = [e, An], a = pe(Ve), i = [u, r, a];
          (o = Ue(An, Dn.allowIn)) > 0;

        ) {
          for (; i.length > 2 && o <= i[i.length - 2].prec; )
            (a = i.pop()),
              (s = i.pop().value),
              (u = i.pop()),
              t.pop(),
              (n = new G(t[t.length - 1]).finishBinaryExpression(s, u, a)),
              i.push(n);
          (r = j()),
            (r.prec = o),
            i.push(r),
            t.push(An),
            (n = pe(Ve)),
            i.push(n);
        }
        for (l = i.length - 1, n = i[l], t.pop(); l > 1; )
          (n = new G(t.pop()).finishBinaryExpression(
            i[l - 1].value,
            i[l - 2],
            n
          )),
            (l -= 2);
        return n;
      }
      function je() {
        var e, t, n, r, o;
        return (
          (o = An),
          (e = de(We)),
          ae("?") &&
            (j(),
            (t = Dn.allowIn),
            (Dn.allowIn = !0),
            (n = pe(Ge)),
            (Dn.allowIn = t),
            re(":"),
            (r = pe(Ge)),
            (e = new G(o).finishConditionalExpression(e, n, r)),
            (wn = En = !1)),
          e
        );
      }
      function He() {
        return ae("{") ? kt() : pe(Ge);
      }
      function ze(e, n) {
        var r;
        switch (n.type) {
          case tn.Identifier:
            St(e, n, n.name);
            break;
          case tn.RestElement:
            ze(e, n.argument);
            break;
          case tn.AssignmentPattern:
            ze(e, n.left);
            break;
          case tn.ArrayPattern:
            for (r = 0; r < n.elements.length; r++)
              null !== n.elements[r] && ze(e, n.elements[r]);
            break;
          case tn.YieldExpression:
            break;
          default:
            for (
              t(n.type === tn.ObjectPattern, "Invalid type"), r = 0;
              r < n.properties.length;
              r++
            )
              ze(e, n.properties[r].value);
        }
      }
      function qe(e) {
        var t, n, r, o, i, a, s, u;
        switch (((i = []), (a = 0), (o = [e]), e.type)) {
          case tn.Identifier:
            break;
          case nn.ArrowParameterPlaceHolder:
            o = e.params;
            break;
          default:
            return null;
        }
        for (s = { paramSet: {} }, t = 0, n = o.length; n > t; t += 1)
          switch (((r = o[t]), r.type)) {
            case tn.AssignmentPattern:
              (o[t] = r.left),
                r.right.type === tn.YieldExpression &&
                  (r.right.argument && te(An),
                  (r.right.type = tn.Identifier),
                  (r.right.name = "yield"),
                  delete r.right.argument,
                  delete r.right.delegate),
                i.push(r.right),
                ++a,
                ze(s, r.left);
              break;
            default:
              ze(s, r), (o[t] = r), i.push(null);
          }
        if (sn || !Dn.allowYield)
          for (t = 0, n = o.length; n > t; t += 1)
            (r = o[t]), r.type === tn.YieldExpression && te(An);
        return (
          s.message === rn.StrictParamDupe &&
            ((u = sn ? s.stricted : s.firstRestricted), te(u, s.message)),
          0 === a && (i = []),
          {
            params: o,
            defaults: i,
            stricted: s.stricted,
            firstRestricted: s.firstRestricted,
            message: s.message,
          }
        );
      }
      function Ye(e, t) {
        var n, r, o;
        return (
          pn && ne(An),
          re("=>"),
          (n = sn),
          (r = Dn.allowYield),
          (Dn.allowYield = !0),
          (o = He()),
          sn && e.firstRestricted && te(e.firstRestricted, e.message),
          sn && e.stricted && ne(e.stricted, e.message),
          (sn = n),
          (Dn.allowYield = r),
          t.finishArrowFunctionExpression(
            e.params,
            e.defaults,
            o,
            o.type !== tn.BlockStatement
          )
        );
      }
      function Ke() {
        var e, t, n, r;
        return (
          (e = null),
          (t = new K()),
          (n = !1),
          ie("yield"),
          pn ||
            ((r = Dn.allowYield),
            (Dn.allowYield = !1),
            (n = ae("*")),
            n
              ? (j(), (e = Ge()))
              : ae(";") ||
                ae("}") ||
                ae(")") ||
                An.type === Zt.EOF ||
                (e = Ge()),
            (Dn.allowYield = r)),
          t.finishYieldExpression(e, n)
        );
      }
      function Ge() {
        var e, t, n, r, o;
        return (
          (o = An),
          (e = An),
          !Dn.allowYield && se("yield")
            ? Ke()
            : ((t = je()),
              t.type === nn.ArrowParameterPlaceHolder || ae("=>")
                ? ((wn = En = !1),
                  (r = qe(t)),
                  r ? ((xn = null), Ye(r, new G(o))) : t)
                : (le() &&
                    (wn || J(rn.InvalidLHSInAssignment),
                    sn &&
                      t.type === tn.Identifier &&
                      (f(t.name) && ne(e, rn.StrictLHSAssignment),
                      d(t.name) && ne(e, rn.StrictReservedWord)),
                    ae("=") ? Ne(t) : (wn = En = !1),
                    (e = j()),
                    (n = pe(Ge)),
                    (t = new G(o).finishAssignmentExpression(e.value, t, n)),
                    (xn = null)),
                  t))
        );
      }
      function Xe() {
        var e,
          t,
          n = An;
        if (((e = pe(Ge)), ae(","))) {
          for (t = [e]; Cn > mn && ae(","); ) j(), t.push(pe(Ge));
          e = new G(n).finishSequenceExpression(t);
        }
        return e;
      }
      function $e() {
        if (An.type === Zt.Keyword)
          switch (An.value) {
            case "export":
              return (
                "module" !== Dn.sourceType &&
                  ne(An, rn.IllegalExportDeclaration),
                Wt()
              );
            case "import":
              return (
                "module" !== Dn.sourceType &&
                  ne(An, rn.IllegalImportDeclaration),
                Yt()
              );
            case "const":
              return ut({ inFor: !1 });
            case "function":
              return Mt(new K());
            case "class":
              return Tt();
          }
        return se("let") && st() ? ut({ inFor: !1 }) : Nt();
      }
      function Qe() {
        for (var e = []; Cn > mn && !ae("}"); ) e.push($e());
        return e;
      }
      function Ze() {
        var e,
          t = new K();
        return re("{"), (e = Qe()), re("}"), t.finishBlockStatement(e);
      }
      function Je(e) {
        var t,
          n = new K();
        return (
          (t = j()),
          t.type === Zt.Keyword && "yield" === t.value
            ? (sn && ne(t, rn.StrictReservedWord), Dn.allowYield || te(t))
            : t.type !== Zt.Identifier
            ? sn && t.type === Zt.Keyword && d(t.value)
              ? ne(t, rn.StrictReservedWord)
              : (sn || "let" !== t.value || "var" !== e) && te(t)
            : "module" === Dn.sourceType &&
              t.type === Zt.Identifier &&
              "await" === t.value &&
              ne(t),
          n.finishIdentifier(t.value)
        );
      }
      function et(e) {
        var t,
          n = null,
          r = new K(),
          o = [];
        return (
          (t = ve(o, "var")),
          sn && f(t.name) && J(rn.StrictVarName),
          ae("=")
            ? (j(), (n = pe(Ge)))
            : t.type === tn.Identifier || e.inFor || re("="),
          r.finishVariableDeclarator(t, n)
        );
      }
      function tt(e) {
        var t, n;
        for (t = { inFor: e.inFor }, n = [et(t)]; ae(","); ) j(), n.push(et(t));
        return n;
      }
      function nt(e) {
        var t;
        return (
          ie("var"),
          (t = tt({ inFor: !1 })),
          ce(),
          e.finishVariableDeclaration(t)
        );
      }
      function rt(e, t) {
        var n,
          r = null,
          o = new K(),
          i = [];
        return (
          (n = ve(i, e)),
          sn && n.type === tn.Identifier && f(n.name) && J(rn.StrictVarName),
          "const" === e
            ? se("in") || ue("of") || (re("="), (r = pe(Ge)))
            : ((!t.inFor && n.type !== tn.Identifier) || ae("=")) &&
              (re("="), (r = pe(Ge))),
          o.finishVariableDeclarator(n, r)
        );
      }
      function ot(e, t) {
        for (var n = [rt(e, t)]; ae(","); ) j(), n.push(rt(e, t));
        return n;
      }
      function it() {
        return {
          index: un,
          lineNumber: ln,
          lineStart: cn,
          hasLineTerminator: pn,
          lastIndex: dn,
          lastLineNumber: fn,
          lastLineStart: hn,
          startIndex: mn,
          startLineNumber: vn,
          startLineStart: gn,
          lookahead: An,
          tokenCount: bn.tokens ? bn.tokens.length : 0,
        };
      }
      function at(e) {
        (un = e.index),
          (ln = e.lineNumber),
          (cn = e.lineStart),
          (pn = e.hasLineTerminator),
          (dn = e.lastIndex),
          (fn = e.lastLineNumber),
          (hn = e.lastLineStart),
          (mn = e.startIndex),
          (vn = e.startLineNumber),
          (gn = e.startLineStart),
          (An = e.lookahead),
          bn.tokens && bn.tokens.splice(e.tokenCount, bn.tokens.length);
      }
      function st() {
        var e, t;
        return (
          (t = it()),
          j(),
          (e =
            An.type === Zt.Identifier ||
            ae("[") ||
            ae("{") ||
            se("let") ||
            se("yield")),
          at(t),
          e
        );
      }
      function ut(e) {
        var n,
          r,
          o = new K();
        return (
          (n = j().value),
          t(
            "let" === n || "const" === n,
            "Lexical declaration must be either let or const"
          ),
          (r = ot(n, e)),
          ce(),
          o.finishLexicalDeclaration(r, n)
        );
      }
      function lt(e) {
        var t,
          n = new K();
        return (
          j(),
          ae("{") && Z(rn.ObjectPatternAsRestParameter),
          e.push(An),
          (t = Je()),
          ae("=") && Z(rn.DefaultRestParameter),
          ae(")") || Z(rn.ParameterAfterRestParameter),
          n.finishRestElement(t)
        );
      }
      function ct(e) {
        return re(";"), e.finishEmptyStatement();
      }
      function pt(e) {
        var t = Xe();
        return ce(), e.finishExpressionStatement(t);
      }
      function dt(e) {
        var t, n, r;
        return (
          ie("if"),
          re("("),
          (t = Xe()),
          re(")"),
          (n = Nt()),
          se("else") ? (j(), (r = Nt())) : (r = null),
          e.finishIfStatement(t, n, r)
        );
      }
      function ft(e) {
        var t, n, r;
        return (
          ie("do"),
          (r = Dn.inIteration),
          (Dn.inIteration = !0),
          (t = Nt()),
          (Dn.inIteration = r),
          ie("while"),
          re("("),
          (n = Xe()),
          re(")"),
          ae(";") && j(),
          e.finishDoWhileStatement(t, n)
        );
      }
      function ht(e) {
        var t, n, r;
        return (
          ie("while"),
          re("("),
          (t = Xe()),
          re(")"),
          (r = Dn.inIteration),
          (Dn.inIteration = !0),
          (n = Nt()),
          (Dn.inIteration = r),
          e.finishWhileStatement(t, n)
        );
      }
      function mt(e) {
        var t,
          n,
          r,
          o,
          i,
          a,
          s,
          u,
          l,
          c,
          p,
          d,
          f = Dn.allowIn;
        if (((t = i = a = null), (n = !0), ie("for"), re("("), ae(";"))) j();
        else if (se("var"))
          (t = new K()),
            j(),
            (Dn.allowIn = !1),
            (c = tt({ inFor: !0 })),
            (Dn.allowIn = f),
            1 === c.length && se("in")
              ? ((t = t.finishVariableDeclaration(c)),
                j(),
                (s = t),
                (u = Xe()),
                (t = null))
              : 1 === c.length && null === c[0].init && ue("of")
              ? ((t = t.finishVariableDeclaration(c)),
                j(),
                (s = t),
                (u = Ge()),
                (t = null),
                (n = !1))
              : ((t = t.finishVariableDeclaration(c)), re(";"));
        else if (se("const") || se("let"))
          (t = new K()),
            (l = j().value),
            sn || "in" !== An.value
              ? ((Dn.allowIn = !1),
                (c = ot(l, { inFor: !0 })),
                (Dn.allowIn = f),
                1 === c.length && null === c[0].init && se("in")
                  ? ((t = t.finishLexicalDeclaration(c, l)),
                    j(),
                    (s = t),
                    (u = Xe()),
                    (t = null))
                  : 1 === c.length && null === c[0].init && ue("of")
                  ? ((t = t.finishLexicalDeclaration(c, l)),
                    j(),
                    (s = t),
                    (u = Ge()),
                    (t = null),
                    (n = !1))
                  : (ce(), (t = t.finishLexicalDeclaration(c, l))))
              : ((t = t.finishIdentifier(l)),
                j(),
                (s = t),
                (u = Xe()),
                (t = null));
        else if (
          ((o = An),
          (Dn.allowIn = !1),
          (t = de(Ge)),
          (Dn.allowIn = f),
          se("in"))
        )
          wn || J(rn.InvalidLHSInForIn),
            j(),
            Ne(t),
            (s = t),
            (u = Xe()),
            (t = null);
        else if (ue("of"))
          wn || J(rn.InvalidLHSInForLoop),
            j(),
            Ne(t),
            (s = t),
            (u = Ge()),
            (t = null),
            (n = !1);
        else {
          if (ae(",")) {
            for (r = [t]; ae(","); ) j(), r.push(pe(Ge));
            t = new G(o).finishSequenceExpression(r);
          }
          re(";");
        }
        return (
          "undefined" == typeof s &&
            (ae(";") || (i = Xe()), re(";"), ae(")") || (a = Xe())),
          re(")"),
          (d = Dn.inIteration),
          (Dn.inIteration = !0),
          (p = pe(Nt)),
          (Dn.inIteration = d),
          "undefined" == typeof s
            ? e.finishForStatement(t, i, a, p)
            : n
            ? e.finishForInStatement(s, u, p)
            : e.finishForOfStatement(s, u, p)
        );
      }
      function vt(e) {
        var t,
          n = null;
        return (
          ie("continue"),
          59 === an.charCodeAt(mn)
            ? (j(),
              Dn.inIteration || Z(rn.IllegalContinue),
              e.finishContinueStatement(null))
            : pn
            ? (Dn.inIteration || Z(rn.IllegalContinue),
              e.finishContinueStatement(null))
            : (An.type === Zt.Identifier &&
                ((n = Je()),
                (t = "$" + n.name),
                Object.prototype.hasOwnProperty.call(Dn.labelSet, t) ||
                  Z(rn.UnknownLabel, n.name)),
              ce(),
              null !== n || Dn.inIteration || Z(rn.IllegalContinue),
              e.finishContinueStatement(n))
        );
      }
      function gt(e) {
        var t,
          n = null;
        return (
          ie("break"),
          59 === an.charCodeAt(dn)
            ? (j(),
              Dn.inIteration || Dn.inSwitch || Z(rn.IllegalBreak),
              e.finishBreakStatement(null))
            : (pn
                ? Dn.inIteration || Dn.inSwitch || Z(rn.IllegalBreak)
                : An.type === Zt.Identifier &&
                  ((n = Je()),
                  (t = "$" + n.name),
                  Object.prototype.hasOwnProperty.call(Dn.labelSet, t) ||
                    Z(rn.UnknownLabel, n.name)),
              ce(),
              null !== n || Dn.inIteration || Dn.inSwitch || Z(rn.IllegalBreak),
              e.finishBreakStatement(n))
        );
      }
      function yt(e) {
        var t = null;
        return (
          ie("return"),
          Dn.inFunctionBody || J(rn.IllegalReturn),
          32 === an.charCodeAt(dn) && l(an.charCodeAt(dn + 1))
            ? ((t = Xe()), ce(), e.finishReturnStatement(t))
            : pn
            ? e.finishReturnStatement(null)
            : (ae(";") || ae("}") || An.type === Zt.EOF || (t = Xe()),
              ce(),
              e.finishReturnStatement(t))
        );
      }
      function Ct(e) {
        var t, n;
        return (
          sn && J(rn.StrictModeWith),
          ie("with"),
          re("("),
          (t = Xe()),
          re(")"),
          (n = Nt()),
          e.finishWithStatement(t, n)
        );
      }
      function At() {
        var e,
          t,
          n = [],
          r = new K();
        for (
          se("default") ? (j(), (e = null)) : (ie("case"), (e = Xe())), re(":");
          Cn > mn && !(ae("}") || se("default") || se("case"));

        )
          (t = $e()), n.push(t);
        return r.finishSwitchCase(e, n);
      }
      function Dt(e) {
        var t, n, r, o, i;
        if (
          (ie("switch"),
          re("("),
          (t = Xe()),
          re(")"),
          re("{"),
          (n = []),
          ae("}"))
        )
          return j(), e.finishSwitchStatement(t, n);
        for (o = Dn.inSwitch, Dn.inSwitch = !0, i = !1; Cn > mn && !ae("}"); )
          (r = At()),
            null === r.test && (i && Z(rn.MultipleDefaultsInSwitch), (i = !0)),
            n.push(r);
        return (Dn.inSwitch = o), re("}"), e.finishSwitchStatement(t, n);
      }
      function bt(e) {
        var t;
        return (
          ie("throw"),
          pn && Z(rn.NewlineAfterThrow),
          (t = Xe()),
          ce(),
          e.finishThrowStatement(t)
        );
      }
      function Et() {
        var e,
          t,
          n,
          r,
          o = [],
          i = {},
          a = new K();
        for (
          ie("catch"), re("("), ae(")") && te(An), e = ve(o), n = 0;
          n < o.length;
          n++
        )
          (t = "$" + o[n].value),
            Object.prototype.hasOwnProperty.call(i, t) &&
              J(rn.DuplicateBinding, o[n].value),
            (i[t] = !0);
        return (
          sn && f(e.name) && J(rn.StrictCatchVariable),
          re(")"),
          (r = Ze()),
          a.finishCatchClause(e, r)
        );
      }
      function wt(e) {
        var t,
          n = null,
          r = null;
        return (
          ie("try"),
          (t = Ze()),
          se("catch") && (n = Et()),
          se("finally") && (j(), (r = Ze())),
          n || r || Z(rn.NoCatchOrFinally),
          e.finishTryStatement(t, n, r)
        );
      }
      function xt(e) {
        return ie("debugger"), ce(), e.finishDebuggerStatement();
      }
      function Nt() {
        var e,
          t,
          n,
          r,
          o = An.type;
        if ((o === Zt.EOF && te(An), o === Zt.Punctuator && "{" === An.value))
          return Ze();
        if (((wn = En = !0), (r = new K()), o === Zt.Punctuator))
          switch (An.value) {
            case ";":
              return ct(r);
            case "(":
              return pt(r);
          }
        else if (o === Zt.Keyword)
          switch (An.value) {
            case "break":
              return gt(r);
            case "continue":
              return vt(r);
            case "debugger":
              return xt(r);
            case "do":
              return ft(r);
            case "for":
              return mt(r);
            case "function":
              return Mt(r);
            case "if":
              return dt(r);
            case "return":
              return yt(r);
            case "switch":
              return Dt(r);
            case "throw":
              return bt(r);
            case "try":
              return wt(r);
            case "var":
              return nt(r);
            case "while":
              return ht(r);
            case "with":
              return Ct(r);
          }
        return (
          (e = Xe()),
          e.type === tn.Identifier && ae(":")
            ? (j(),
              (n = "$" + e.name),
              Object.prototype.hasOwnProperty.call(Dn.labelSet, n) &&
                Z(rn.Redeclaration, "Label", e.name),
              (Dn.labelSet[n] = !0),
              (t = Nt()),
              delete Dn.labelSet[n],
              r.finishLabeledStatement(e, t))
            : (ce(), r.finishExpressionStatement(e))
        );
      }
      function kt() {
        var e,
          t,
          n,
          r,
          o,
          i,
          a,
          s,
          u = [],
          l = new K();
        for (
          re("{");
          Cn > mn &&
          An.type === Zt.StringLiteral &&
          ((t = An), (e = $e()), u.push(e), e.expression.type === tn.Literal);

        )
          (n = an.slice(t.start + 1, t.end - 1)),
            "use strict" === n
              ? ((sn = !0), r && ne(r, rn.StrictOctalLiteral))
              : !r && t.octal && (r = t);
        for (
          o = Dn.labelSet,
            i = Dn.inIteration,
            a = Dn.inSwitch,
            s = Dn.inFunctionBody,
            Dn.labelSet = {},
            Dn.inIteration = !1,
            Dn.inSwitch = !1,
            Dn.inFunctionBody = !0;
          Cn > mn && !ae("}");

        )
          u.push($e());
        return (
          re("}"),
          (Dn.labelSet = o),
          (Dn.inIteration = i),
          (Dn.inSwitch = a),
          (Dn.inFunctionBody = s),
          l.finishBlockStatement(u)
        );
      }
      function St(e, t, n) {
        var r = "$" + n;
        sn
          ? (f(n) && ((e.stricted = t), (e.message = rn.StrictParamName)),
            Object.prototype.hasOwnProperty.call(e.paramSet, r) &&
              ((e.stricted = t), (e.message = rn.StrictParamDupe)))
          : e.firstRestricted ||
            (f(n)
              ? ((e.firstRestricted = t), (e.message = rn.StrictParamName))
              : d(n)
              ? ((e.firstRestricted = t), (e.message = rn.StrictReservedWord))
              : Object.prototype.hasOwnProperty.call(e.paramSet, r) &&
                ((e.stricted = t), (e.message = rn.StrictParamDupe))),
          (e.paramSet[r] = !0);
      }
      function Bt(e) {
        var t,
          n,
          r,
          o,
          i = [];
        if (((t = An), "..." === t.value))
          return (
            (n = lt(i)),
            St(e, n.argument, n.argument.name),
            e.params.push(n),
            e.defaults.push(null),
            !1
          );
        for (n = ge(i), r = 0; r < i.length; r++) St(e, i[r], i[r].value);
        return (
          n.type === tn.AssignmentPattern &&
            ((o = n.right), (n = n.left), ++e.defaultCount),
          e.params.push(n),
          e.defaults.push(o),
          !ae(")")
        );
      }
      function _t(e) {
        var t;
        if (
          ((t = {
            params: [],
            defaultCount: 0,
            defaults: [],
            firstRestricted: e,
          }),
          re("("),
          !ae(")"))
        )
          for (t.paramSet = {}; Cn > mn && Bt(t); ) re(",");
        return (
          re(")"),
          0 === t.defaultCount && (t.defaults = []),
          {
            params: t.params,
            defaults: t.defaults,
            stricted: t.stricted,
            firstRestricted: t.firstRestricted,
            message: t.message,
          }
        );
      }
      function Mt(e, t) {
        var n,
          r,
          o,
          i,
          a,
          s,
          u,
          l,
          c,
          p = null,
          h = [],
          m = [];
        return (
          (c = Dn.allowYield),
          ie("function"),
          (l = ae("*")),
          l && j(),
          (t && ae("(")) ||
            ((r = An),
            (p = Je()),
            sn
              ? f(r.value) && ne(r, rn.StrictFunctionName)
              : f(r.value)
              ? ((a = r), (s = rn.StrictFunctionName))
              : d(r.value) && ((a = r), (s = rn.StrictReservedWord))),
          (Dn.allowYield = !l),
          (i = _t(a)),
          (h = i.params),
          (m = i.defaults),
          (o = i.stricted),
          (a = i.firstRestricted),
          i.message && (s = i.message),
          (u = sn),
          (n = kt()),
          sn && a && te(a, s),
          sn && o && ne(o, s),
          (sn = u),
          (Dn.allowYield = c),
          e.finishFunctionDeclaration(p, h, m, n, l)
        );
      }
      function Ot() {
        var e,
          t,
          n,
          r,
          o,
          i,
          a,
          s,
          u,
          l = null,
          c = [],
          p = [],
          h = new K();
        return (
          (u = Dn.allowYield),
          ie("function"),
          (s = ae("*")),
          s && j(),
          (Dn.allowYield = !s),
          ae("(") ||
            ((e = An),
            (l = sn || s || !se("yield") ? Je() : Oe()),
            sn
              ? f(e.value) && ne(e, rn.StrictFunctionName)
              : f(e.value)
              ? ((n = e), (r = rn.StrictFunctionName))
              : d(e.value) && ((n = e), (r = rn.StrictReservedWord))),
          (o = _t(n)),
          (c = o.params),
          (p = o.defaults),
          (t = o.stricted),
          (n = o.firstRestricted),
          o.message && (r = o.message),
          (a = sn),
          (i = kt()),
          sn && n && te(n, r),
          sn && t && ne(t, r),
          (sn = a),
          (Dn.allowYield = u),
          h.finishFunctionExpression(l, c, p, i, s)
        );
      }
      function Ft() {
        var e,
          t,
          n,
          r,
          o,
          i,
          a,
          s = !1;
        for (e = new K(), re("{"), r = []; !ae("}"); )
          ae(";")
            ? j()
            : ((o = new K()),
              (t = An),
              (n = !1),
              (i = ae("[")),
              ae("*")
                ? j()
                : ((a = De()),
                  "static" === a.name &&
                    (be() || ae("*")) &&
                    ((t = An),
                    (n = !0),
                    (i = ae("[")),
                    ae("*") ? j() : (a = De()))),
              (o = Ee(t, a, i, o)),
              o
                ? ((o["static"] = n),
                  "init" === o.kind && (o.kind = "method"),
                  n
                    ? o.computed ||
                      "prototype" !== (o.key.name || o.key.value.toString()) ||
                      te(t, rn.StaticPrototype)
                    : o.computed ||
                      "constructor" !==
                        (o.key.name || o.key.value.toString()) ||
                      (("method" === o.kind &&
                        o.method &&
                        !o.value.generator) ||
                        te(t, rn.ConstructorSpecialMethod),
                      s ? te(t, rn.DuplicateConstructor) : (s = !0),
                      (o.kind = "constructor")),
                  (o.type = tn.MethodDefinition),
                  delete o.method,
                  delete o.shorthand,
                  r.push(o))
                : te(An));
        return j(), e.finishClassBody(r);
      }
      function Tt(e) {
        var t,
          n = null,
          r = null,
          o = new K(),
          i = sn;
        return (
          (sn = !0),
          ie("class"),
          (e && An.type !== Zt.Identifier) || (n = Je()),
          se("extends") && (j(), (r = pe(Pe))),
          (t = Ft()),
          (sn = i),
          o.finishClassDeclaration(n, r, t)
        );
      }
      function It() {
        var e,
          t = null,
          n = null,
          r = new K(),
          o = sn;
        return (
          (sn = !0),
          ie("class"),
          An.type === Zt.Identifier && (t = Je()),
          se("extends") && (j(), (n = pe(Pe))),
          (e = Ft()),
          (sn = o),
          r.finishClassExpression(t, n, e)
        );
      }
      function Pt() {
        var e = new K();
        return (
          An.type !== Zt.StringLiteral && Z(rn.InvalidModuleSpecifier),
          e.finishLiteral(j())
        );
      }
      function Lt() {
        var e,
          t,
          n,
          r = new K();
        return (
          se("default")
            ? ((n = new K()), j(), (t = n.finishIdentifier("default")))
            : (t = Je()),
          ue("as") && (j(), (e = Oe())),
          r.finishExportSpecifier(t, e)
        );
      }
      function Rt(e) {
        var t,
          n = null,
          r = null,
          o = [];
        if (An.type === Zt.Keyword)
          switch (An.value) {
            case "let":
            case "const":
              return (
                (n = ut({ inFor: !1 })),
                e.finishExportNamedDeclaration(n, o, null)
              );
            case "var":
            case "class":
            case "function":
              return (n = $e()), e.finishExportNamedDeclaration(n, o, null);
          }
        for (
          re("{");
          !ae("}") &&
          ((t = t || se("default")),
          o.push(Lt()),
          ae("}") || (re(","), !ae("}")));

        );
        return (
          re("}"),
          ue("from")
            ? (j(), (r = Pt()), ce())
            : t
            ? Z(An.value ? rn.UnexpectedToken : rn.MissingFromClause, An.value)
            : ce(),
          e.finishExportNamedDeclaration(n, o, r)
        );
      }
      function Vt(e) {
        var t = null,
          n = null;
        return (
          ie("default"),
          se("function")
            ? ((t = Mt(new K(), !0)), e.finishExportDefaultDeclaration(t))
            : se("class")
            ? ((t = Tt(!0)), e.finishExportDefaultDeclaration(t))
            : (ue("from") && Z(rn.UnexpectedToken, An.value),
              (n = ae("{") ? xe() : ae("[") ? ye() : Ge()),
              ce(),
              e.finishExportDefaultDeclaration(n))
        );
      }
      function Ut(e) {
        var t;
        return (
          re("*"),
          ue("from") ||
            Z(An.value ? rn.UnexpectedToken : rn.MissingFromClause, An.value),
          j(),
          (t = Pt()),
          ce(),
          e.finishExportAllDeclaration(t)
        );
      }
      function Wt() {
        var e = new K();
        return (
          Dn.inFunctionBody && Z(rn.IllegalExportDeclaration),
          ie("export"),
          se("default") ? Vt(e) : ae("*") ? Ut(e) : Rt(e)
        );
      }
      function jt() {
        var e,
          t,
          n = new K();
        return (
          (t = Oe()),
          ue("as") && (j(), (e = Je())),
          n.finishImportSpecifier(e, t)
        );
      }
      function Ht() {
        var e = [];
        for (
          re("{");
          !ae("}") && (e.push(jt()), ae("}") || (re(","), !ae("}")));

        );
        return re("}"), e;
      }
      function zt() {
        var e,
          t = new K();
        return (e = Oe()), t.finishImportDefaultSpecifier(e);
      }
      function qt() {
        var e,
          t = new K();
        return (
          re("*"),
          ue("as") || Z(rn.NoAsAfterImportNamespace),
          j(),
          (e = Oe()),
          t.finishImportNamespaceSpecifier(e)
        );
      }
      function Yt() {
        var e,
          t = [],
          n = new K();
        return (
          Dn.inFunctionBody && Z(rn.IllegalImportDeclaration),
          ie("import"),
          An.type === Zt.StringLiteral
            ? (e = Pt())
            : (ae("{")
                ? (t = t.concat(Ht()))
                : ae("*")
                ? t.push(qt())
                : R(An) && !se("default")
                ? (t.push(zt()),
                  ae(",") &&
                    (j(),
                    ae("*")
                      ? t.push(qt())
                      : ae("{")
                      ? (t = t.concat(Ht()))
                      : te(An)))
                : te(j()),
              ue("from") ||
                Z(
                  An.value ? rn.UnexpectedToken : rn.MissingFromClause,
                  An.value
                ),
              j(),
              (e = Pt())),
          ce(),
          n.finishImportDeclaration(t, e)
        );
      }
      function Kt() {
        for (
          var e, t, n, r, o = [];
          Cn > mn &&
          ((t = An), t.type === Zt.StringLiteral) &&
          ((e = $e()), o.push(e), e.expression.type === tn.Literal);

        )
          (n = an.slice(t.start + 1, t.end - 1)),
            "use strict" === n
              ? ((sn = !0), r && ne(r, rn.StrictOctalLiteral))
              : !r && t.octal && (r = t);
        for (; Cn > mn && ((e = $e()), "undefined" != typeof e); ) o.push(e);
        return o;
      }
      function Gt() {
        var e, t;
        return (
          H(), (t = new K()), (e = Kt()), t.finishProgram(e, Dn.sourceType)
        );
      }
      function Xt() {
        var e,
          t,
          n,
          r = [];
        for (e = 0; e < bn.tokens.length; ++e)
          (t = bn.tokens[e]),
            (n = { type: t.type, value: t.value }),
            t.regex &&
              (n.regex = { pattern: t.regex.pattern, flags: t.regex.flags }),
            bn.range && (n.range = t.range),
            bn.loc && (n.loc = t.loc),
            r.push(n);
        bn.tokens = r;
      }
      function $t(e, t, n) {
        var r, o;
        (r = String),
          "string" == typeof e || e instanceof String || (e = r(e)),
          (an = e),
          (un = 0),
          (ln = an.length > 0 ? 1 : 0),
          (cn = 0),
          (mn = un),
          (vn = ln),
          (gn = cn),
          (Cn = an.length),
          (An = null),
          (Dn = {
            allowIn: !0,
            allowYield: !0,
            labelSet: {},
            inFunctionBody: !1,
            inIteration: !1,
            inSwitch: !1,
            lastCommentStart: -1,
            curlyStack: [],
          }),
          (bn = {}),
          (t = t || {}),
          (t.tokens = !0),
          (bn.tokens = []),
          (bn.tokenValues = []),
          (bn.tokenize = !0),
          (bn.delegate = n),
          (bn.openParenToken = -1),
          (bn.openCurlyToken = -1),
          (bn.range = "boolean" == typeof t.range && t.range),
          (bn.loc = "boolean" == typeof t.loc && t.loc),
          "boolean" == typeof t.comment && t.comment && (bn.comments = []),
          "boolean" == typeof t.tolerant && t.tolerant && (bn.errors = []);
        try {
          if ((H(), An.type === Zt.EOF)) return bn.tokens;
          for (j(); An.type !== Zt.EOF; )
            try {
              j();
            } catch (i) {
              if (bn.errors) {
                X(i);
                break;
              }
              throw i;
            }
          (o = bn.tokens),
            "undefined" != typeof bn.errors && (o.errors = bn.errors);
        } catch (a) {
          throw a;
        } finally {
          bn = {};
        }
        return o;
      }
      function Qt(e, t) {
        var n, r;
        (r = String),
          "string" == typeof e || e instanceof String || (e = r(e)),
          (an = e),
          (un = 0),
          (ln = an.length > 0 ? 1 : 0),
          (cn = 0),
          (mn = un),
          (vn = ln),
          (gn = cn),
          (Cn = an.length),
          (An = null),
          (Dn = {
            allowIn: !0,
            allowYield: !0,
            labelSet: {},
            inFunctionBody: !1,
            inIteration: !1,
            inSwitch: !1,
            lastCommentStart: -1,
            curlyStack: [],
            sourceType: "script",
          }),
          (sn = !1),
          (bn = {}),
          "undefined" != typeof t &&
            ((bn.range = "boolean" == typeof t.range && t.range),
            (bn.loc = "boolean" == typeof t.loc && t.loc),
            (bn.attachComment =
              "boolean" == typeof t.attachComment && t.attachComment),
            bn.loc &&
              null !== t.source &&
              void 0 !== t.source &&
              (bn.source = r(t.source)),
            "boolean" == typeof t.tokens && t.tokens && (bn.tokens = []),
            "boolean" == typeof t.comment && t.comment && (bn.comments = []),
            "boolean" == typeof t.tolerant && t.tolerant && (bn.errors = []),
            bn.attachComment &&
              ((bn.range = !0),
              (bn.comments = []),
              (bn.bottomRightStack = []),
              (bn.trailingComments = []),
              (bn.leadingComments = [])),
            "module" === t.sourceType &&
              ((Dn.sourceType = t.sourceType), (sn = !0)));
        try {
          (n = Gt()),
            "undefined" != typeof bn.comments && (n.comments = bn.comments),
            "undefined" != typeof bn.tokens && (Xt(), (n.tokens = bn.tokens)),
            "undefined" != typeof bn.errors && (n.errors = bn.errors);
        } catch (o) {
          throw o;
        } finally {
          bn = {};
        }
        return n;
      }
      var Zt,
        Jt,
        en,
        tn,
        nn,
        rn,
        on,
        an,
        sn,
        un,
        ln,
        cn,
        pn,
        dn,
        fn,
        hn,
        mn,
        vn,
        gn,
        yn,
        Cn,
        An,
        Dn,
        bn,
        En,
        wn,
        xn;
      (Zt = {
        BooleanLiteral: 1,
        EOF: 2,
        Identifier: 3,
        Keyword: 4,
        NullLiteral: 5,
        NumericLiteral: 6,
        Punctuator: 7,
        StringLiteral: 8,
        RegularExpression: 9,
        Template: 10,
      }),
        (Jt = {}),
        (Jt[Zt.BooleanLiteral] = "Boolean"),
        (Jt[Zt.EOF] = "<end>"),
        (Jt[Zt.Identifier] = "Identifier"),
        (Jt[Zt.Keyword] = "Keyword"),
        (Jt[Zt.NullLiteral] = "Null"),
        (Jt[Zt.NumericLiteral] = "Numeric"),
        (Jt[Zt.Punctuator] = "Punctuator"),
        (Jt[Zt.StringLiteral] = "String"),
        (Jt[Zt.RegularExpression] = "RegularExpression"),
        (Jt[Zt.Template] = "Template"),
        (en = [
          "(",
          "{",
          "[",
          "in",
          "typeof",
          "instanceof",
          "new",
          "return",
          "case",
          "delete",
          "throw",
          "void",
          "=",
          "+=",
          "-=",
          "*=",
          "/=",
          "%=",
          "<<=",
          ">>=",
          ">>>=",
          "&=",
          "|=",
          "^=",
          ",",
          "+",
          "-",
          "*",
          "/",
          "%",
          "++",
          "--",
          "<<",
          ">>",
          ">>>",
          "&",
          "|",
          "^",
          "!",
          "~",
          "&&",
          "||",
          "?",
          ":",
          "===",
          "==",
          ">=",
          "<=",
          "<",
          ">",
          "!=",
          "!==",
        ]),
        (tn = {
          AssignmentExpression: "AssignmentExpression",
          AssignmentPattern: "AssignmentPattern",
          ArrayExpression: "ArrayExpression",
          ArrayPattern: "ArrayPattern",
          ArrowFunctionExpression: "ArrowFunctionExpression",
          BlockStatement: "BlockStatement",
          BinaryExpression: "BinaryExpression",
          BreakStatement: "BreakStatement",
          CallExpression: "CallExpression",
          CatchClause: "CatchClause",
          ClassBody: "ClassBody",
          ClassDeclaration: "ClassDeclaration",
          ClassExpression: "ClassExpression",
          ConditionalExpression: "ConditionalExpression",
          ContinueStatement: "ContinueStatement",
          DoWhileStatement: "DoWhileStatement",
          DebuggerStatement: "DebuggerStatement",
          EmptyStatement: "EmptyStatement",
          ExportAllDeclaration: "ExportAllDeclaration",
          ExportDefaultDeclaration: "ExportDefaultDeclaration",
          ExportNamedDeclaration: "ExportNamedDeclaration",
          ExportSpecifier: "ExportSpecifier",
          ExpressionStatement: "ExpressionStatement",
          ForStatement: "ForStatement",
          ForOfStatement: "ForOfStatement",
          ForInStatement: "ForInStatement",
          FunctionDeclaration: "FunctionDeclaration",
          FunctionExpression: "FunctionExpression",
          Identifier: "Identifier",
          IfStatement: "IfStatement",
          ImportDeclaration: "ImportDeclaration",
          ImportDefaultSpecifier: "ImportDefaultSpecifier",
          ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
          ImportSpecifier: "ImportSpecifier",
          Literal: "Literal",
          LabeledStatement: "LabeledStatement",
          LogicalExpression: "LogicalExpression",
          MemberExpression: "MemberExpression",
          MetaProperty: "MetaProperty",
          MethodDefinition: "MethodDefinition",
          NewExpression: "NewExpression",
          ObjectExpression: "ObjectExpression",
          ObjectPattern: "ObjectPattern",
          Program: "Program",
          Property: "Property",
          RestElement: "RestElement",
          ReturnStatement: "ReturnStatement",
          SequenceExpression: "SequenceExpression",
          SpreadElement: "SpreadElement",
          Super: "Super",
          SwitchCase: "SwitchCase",
          SwitchStatement: "SwitchStatement",
          TaggedTemplateExpression: "TaggedTemplateExpression",
          TemplateElement: "TemplateElement",
          TemplateLiteral: "TemplateLiteral",
          ThisExpression: "ThisExpression",
          ThrowStatement: "ThrowStatement",
          TryStatement: "TryStatement",
          UnaryExpression: "UnaryExpression",
          UpdateExpression: "UpdateExpression",
          VariableDeclaration: "VariableDeclaration",
          VariableDeclarator: "VariableDeclarator",
          WhileStatement: "WhileStatement",
          WithStatement: "WithStatement",
          YieldExpression: "YieldExpression",
        }),
        (nn = { ArrowParameterPlaceHolder: "ArrowParameterPlaceHolder" }),
        (rn = {
          UnexpectedToken: "Unexpected token %0",
          UnexpectedNumber: "Unexpected number",
          UnexpectedString: "Unexpected string",
          UnexpectedIdentifier: "Unexpected identifier",
          UnexpectedReserved: "Unexpected reserved word",
          UnexpectedTemplate: "Unexpected quasi %0",
          UnexpectedEOS: "Unexpected end of input",
          NewlineAfterThrow: "Illegal newline after throw",
          InvalidRegExp: "Invalid regular expression",
          UnterminatedRegExp: "Invalid regular expression: missing /",
          InvalidLHSInAssignment: "Invalid left-hand side in assignment",
          InvalidLHSInForIn: "Invalid left-hand side in for-in",
          InvalidLHSInForLoop: "Invalid left-hand side in for-loop",
          MultipleDefaultsInSwitch:
            "More than one default clause in switch statement",
          NoCatchOrFinally: "Missing catch or finally after try",
          UnknownLabel: "Undefined label '%0'",
          Redeclaration: "%0 '%1' has already been declared",
          IllegalContinue: "Illegal continue statement",
          IllegalBreak: "Illegal break statement",
          IllegalReturn: "Illegal return statement",
          StrictModeWith: "Strict mode code may not include a with statement",
          StrictCatchVariable:
            "Catch variable may not be eval or arguments in strict mode",
          StrictVarName:
            "Variable name may not be eval or arguments in strict mode",
          StrictParamName:
            "Parameter name eval or arguments is not allowed in strict mode",
          StrictParamDupe:
            "Strict mode function may not have duplicate parameter names",
          StrictFunctionName:
            "Function name may not be eval or arguments in strict mode",
          StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
          StrictDelete: "Delete of an unqualified identifier in strict mode.",
          StrictLHSAssignment:
            "Assignment to eval or arguments is not allowed in strict mode",
          StrictLHSPostfix:
            "Postfix increment/decrement may not have eval or arguments operand in strict mode",
          StrictLHSPrefix:
            "Prefix increment/decrement may not have eval or arguments operand in strict mode",
          StrictReservedWord: "Use of future reserved word in strict mode",
          TemplateOctalLiteral:
            "Octal literals are not allowed in template strings.",
          ParameterAfterRestParameter:
            "Rest parameter must be last formal parameter",
          DefaultRestParameter: "Unexpected token =",
          ObjectPatternAsRestParameter: "Unexpected token {",
          DuplicateProtoProperty:
            "Duplicate __proto__ fields are not allowed in object literals",
          ConstructorSpecialMethod: "Class constructor may not be an accessor",
          DuplicateConstructor: "A class may only have one constructor",
          StaticPrototype:
            "Classes may not have static property named prototype",
          MissingFromClause: "Unexpected token",
          NoAsAfterImportNamespace: "Unexpected token",
          InvalidModuleSpecifier: "Unexpected token",
          IllegalImportDeclaration: "Unexpected token",
          IllegalExportDeclaration: "Unexpected token",
          DuplicateBinding: "Duplicate binding %0",
        }),
        (on = {
          NonAsciiIdentifierStart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,
          NonAsciiIdentifierPart:
            /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
        }),
        (G.prototype = K.prototype =
          {
            processComment: function () {
              var e,
                t,
                n,
                r,
                o,
                i,
                a = bn.bottomRightStack,
                s = a[a.length - 1];
              if (!(this.type === tn.Program && this.body.length > 0)) {
                if (this.type === tn.BlockStatement && 0 === this.body.length) {
                  for (t = [], o = bn.leadingComments.length - 1; o >= 0; --o)
                    (i = bn.leadingComments[o]),
                      this.range[1] >= i.range[1] &&
                        (t.unshift(i),
                        bn.leadingComments.splice(o, 1),
                        bn.trailingComments.splice(o, 1));
                  if (t.length) return void (this.innerComments = t);
                }
                if (bn.trailingComments.length > 0) {
                  for (r = [], o = bn.trailingComments.length - 1; o >= 0; --o)
                    (i = bn.trailingComments[o]),
                      i.range[0] >= this.range[1] &&
                        (r.unshift(i), bn.trailingComments.splice(o, 1));
                  bn.trailingComments = [];
                } else
                  s &&
                    s.trailingComments &&
                    s.trailingComments[0].range[0] >= this.range[1] &&
                    ((r = s.trailingComments), delete s.trailingComments);
                for (; s && s.range[0] >= this.range[0]; )
                  (e = a.pop()), (s = a[a.length - 1]);
                if (e) {
                  if (e.leadingComments) {
                    for (n = [], o = e.leadingComments.length - 1; o >= 0; --o)
                      (i = e.leadingComments[o]),
                        i.range[1] <= this.range[0] &&
                          (n.unshift(i), e.leadingComments.splice(o, 1));
                    e.leadingComments.length || (e.leadingComments = void 0);
                  }
                } else if (bn.leadingComments.length > 0)
                  for (n = [], o = bn.leadingComments.length - 1; o >= 0; --o)
                    (i = bn.leadingComments[o]),
                      i.range[1] <= this.range[0] &&
                        (n.unshift(i), bn.leadingComments.splice(o, 1));
                n && n.length > 0 && (this.leadingComments = n),
                  r && r.length > 0 && (this.trailingComments = r),
                  a.push(this);
              }
            },
            finish: function () {
              bn.range && (this.range[1] = dn),
                bn.loc &&
                  ((this.loc.end = { line: fn, column: dn - hn }),
                  bn.source && (this.loc.source = bn.source)),
                bn.attachComment && this.processComment();
            },
            finishArrayExpression: function (e) {
              return (
                (this.type = tn.ArrayExpression),
                (this.elements = e),
                this.finish(),
                this
              );
            },
            finishArrayPattern: function (e) {
              return (
                (this.type = tn.ArrayPattern),
                (this.elements = e),
                this.finish(),
                this
              );
            },
            finishArrowFunctionExpression: function (e, t, n, r) {
              return (
                (this.type = tn.ArrowFunctionExpression),
                (this.id = null),
                (this.params = e),
                (this.defaults = t),
                (this.body = n),
                (this.generator = !1),
                (this.expression = r),
                this.finish(),
                this
              );
            },
            finishAssignmentExpression: function (e, t, n) {
              return (
                (this.type = tn.AssignmentExpression),
                (this.operator = e),
                (this.left = t),
                (this.right = n),
                this.finish(),
                this
              );
            },
            finishAssignmentPattern: function (e, t) {
              return (
                (this.type = tn.AssignmentPattern),
                (this.left = e),
                (this.right = t),
                this.finish(),
                this
              );
            },
            finishBinaryExpression: function (e, t, n) {
              return (
                (this.type =
                  "||" === e || "&&" === e
                    ? tn.LogicalExpression
                    : tn.BinaryExpression),
                (this.operator = e),
                (this.left = t),
                (this.right = n),
                this.finish(),
                this
              );
            },
            finishBlockStatement: function (e) {
              return (
                (this.type = tn.BlockStatement),
                (this.body = e),
                this.finish(),
                this
              );
            },
            finishBreakStatement: function (e) {
              return (
                (this.type = tn.BreakStatement),
                (this.label = e),
                this.finish(),
                this
              );
            },
            finishCallExpression: function (e, t) {
              return (
                (this.type = tn.CallExpression),
                (this.callee = e),
                (this.arguments = t),
                this.finish(),
                this
              );
            },
            finishCatchClause: function (e, t) {
              return (
                (this.type = tn.CatchClause),
                (this.param = e),
                (this.body = t),
                this.finish(),
                this
              );
            },
            finishClassBody: function (e) {
              return (
                (this.type = tn.ClassBody), (this.body = e), this.finish(), this
              );
            },
            finishClassDeclaration: function (e, t, n) {
              return (
                (this.type = tn.ClassDeclaration),
                (this.id = e),
                (this.superClass = t),
                (this.body = n),
                this.finish(),
                this
              );
            },
            finishClassExpression: function (e, t, n) {
              return (
                (this.type = tn.ClassExpression),
                (this.id = e),
                (this.superClass = t),
                (this.body = n),
                this.finish(),
                this
              );
            },
            finishConditionalExpression: function (e, t, n) {
              return (
                (this.type = tn.ConditionalExpression),
                (this.test = e),
                (this.consequent = t),
                (this.alternate = n),
                this.finish(),
                this
              );
            },
            finishContinueStatement: function (e) {
              return (
                (this.type = tn.ContinueStatement),
                (this.label = e),
                this.finish(),
                this
              );
            },
            finishDebuggerStatement: function () {
              return (this.type = tn.DebuggerStatement), this.finish(), this;
            },
            finishDoWhileStatement: function (e, t) {
              return (
                (this.type = tn.DoWhileStatement),
                (this.body = e),
                (this.test = t),
                this.finish(),
                this
              );
            },
            finishEmptyStatement: function () {
              return (this.type = tn.EmptyStatement), this.finish(), this;
            },
            finishExpressionStatement: function (e) {
              return (
                (this.type = tn.ExpressionStatement),
                (this.expression = e),
                this.finish(),
                this
              );
            },
            finishForStatement: function (e, t, n, r) {
              return (
                (this.type = tn.ForStatement),
                (this.init = e),
                (this.test = t),
                (this.update = n),
                (this.body = r),
                this.finish(),
                this
              );
            },
            finishForOfStatement: function (e, t, n) {
              return (
                (this.type = tn.ForOfStatement),
                (this.left = e),
                (this.right = t),
                (this.body = n),
                this.finish(),
                this
              );
            },
            finishForInStatement: function (e, t, n) {
              return (
                (this.type = tn.ForInStatement),
                (this.left = e),
                (this.right = t),
                (this.body = n),
                (this.each = !1),
                this.finish(),
                this
              );
            },
            finishFunctionDeclaration: function (e, t, n, r, o) {
              return (
                (this.type = tn.FunctionDeclaration),
                (this.id = e),
                (this.params = t),
                (this.defaults = n),
                (this.body = r),
                (this.generator = o),
                (this.expression = !1),
                this.finish(),
                this
              );
            },
            finishFunctionExpression: function (e, t, n, r, o) {
              return (
                (this.type = tn.FunctionExpression),
                (this.id = e),
                (this.params = t),
                (this.defaults = n),
                (this.body = r),
                (this.generator = o),
                (this.expression = !1),
                this.finish(),
                this
              );
            },
            finishIdentifier: function (e) {
              return (
                (this.type = tn.Identifier),
                (this.name = e),
                this.finish(),
                this
              );
            },
            finishIfStatement: function (e, t, n) {
              return (
                (this.type = tn.IfStatement),
                (this.test = e),
                (this.consequent = t),
                (this.alternate = n),
                this.finish(),
                this
              );
            },
            finishLabeledStatement: function (e, t) {
              return (
                (this.type = tn.LabeledStatement),
                (this.label = e),
                (this.body = t),
                this.finish(),
                this
              );
            },
            finishLiteral: function (e) {
              return (
                (this.type = tn.Literal),
                (this.value = e.value),
                (this.raw = an.slice(e.start, e.end)),
                e.regex && (this.regex = e.regex),
                this.finish(),
                this
              );
            },
            finishMemberExpression: function (e, t, n) {
              return (
                (this.type = tn.MemberExpression),
                (this.computed = "[" === e),
                (this.object = t),
                (this.property = n),
                this.finish(),
                this
              );
            },
            finishMetaProperty: function (e, t) {
              return (
                (this.type = tn.MetaProperty),
                (this.meta = e),
                (this.property = t),
                this.finish(),
                this
              );
            },
            finishNewExpression: function (e, t) {
              return (
                (this.type = tn.NewExpression),
                (this.callee = e),
                (this.arguments = t),
                this.finish(),
                this
              );
            },
            finishObjectExpression: function (e) {
              return (
                (this.type = tn.ObjectExpression),
                (this.properties = e),
                this.finish(),
                this
              );
            },
            finishObjectPattern: function (e) {
              return (
                (this.type = tn.ObjectPattern),
                (this.properties = e),
                this.finish(),
                this
              );
            },
            finishPostfixExpression: function (e, t) {
              return (
                (this.type = tn.UpdateExpression),
                (this.operator = e),
                (this.argument = t),
                (this.prefix = !1),
                this.finish(),
                this
              );
            },
            finishProgram: function (e, t) {
              return (
                (this.type = tn.Program),
                (this.body = e),
                (this.sourceType = t),
                this.finish(),
                this
              );
            },
            finishProperty: function (e, t, n, r, o, i) {
              return (
                (this.type = tn.Property),
                (this.key = t),
                (this.computed = n),
                (this.value = r),
                (this.kind = e),
                (this.method = o),
                (this.shorthand = i),
                this.finish(),
                this
              );
            },
            finishRestElement: function (e) {
              return (
                (this.type = tn.RestElement),
                (this.argument = e),
                this.finish(),
                this
              );
            },
            finishReturnStatement: function (e) {
              return (
                (this.type = tn.ReturnStatement),
                (this.argument = e),
                this.finish(),
                this
              );
            },
            finishSequenceExpression: function (e) {
              return (
                (this.type = tn.SequenceExpression),
                (this.expressions = e),
                this.finish(),
                this
              );
            },
            finishSpreadElement: function (e) {
              return (
                (this.type = tn.SpreadElement),
                (this.argument = e),
                this.finish(),
                this
              );
            },
            finishSwitchCase: function (e, t) {
              return (
                (this.type = tn.SwitchCase),
                (this.test = e),
                (this.consequent = t),
                this.finish(),
                this
              );
            },
            finishSuper: function () {
              return (this.type = tn.Super), this.finish(), this;
            },
            finishSwitchStatement: function (e, t) {
              return (
                (this.type = tn.SwitchStatement),
                (this.discriminant = e),
                (this.cases = t),
                this.finish(),
                this
              );
            },
            finishTaggedTemplateExpression: function (e, t) {
              return (
                (this.type = tn.TaggedTemplateExpression),
                (this.tag = e),
                (this.quasi = t),
                this.finish(),
                this
              );
            },
            finishTemplateElement: function (e, t) {
              return (
                (this.type = tn.TemplateElement),
                (this.value = e),
                (this.tail = t),
                this.finish(),
                this
              );
            },
            finishTemplateLiteral: function (e, t) {
              return (
                (this.type = tn.TemplateLiteral),
                (this.quasis = e),
                (this.expressions = t),
                this.finish(),
                this
              );
            },
            finishThisExpression: function () {
              return (this.type = tn.ThisExpression), this.finish(), this;
            },
            finishThrowStatement: function (e) {
              return (
                (this.type = tn.ThrowStatement),
                (this.argument = e),
                this.finish(),
                this
              );
            },
            finishTryStatement: function (e, t, n) {
              return (
                (this.type = tn.TryStatement),
                (this.block = e),
                (this.guardedHandlers = []),
                (this.handlers = t ? [t] : []),
                (this.handler = t),
                (this.finalizer = n),
                this.finish(),
                this
              );
            },
            finishUnaryExpression: function (e, t) {
              return (
                (this.type =
                  "++" === e || "--" === e
                    ? tn.UpdateExpression
                    : tn.UnaryExpression),
                (this.operator = e),
                (this.argument = t),
                (this.prefix = !0),
                this.finish(),
                this
              );
            },
            finishVariableDeclaration: function (e) {
              return (
                (this.type = tn.VariableDeclaration),
                (this.declarations = e),
                (this.kind = "var"),
                this.finish(),
                this
              );
            },
            finishLexicalDeclaration: function (e, t) {
              return (
                (this.type = tn.VariableDeclaration),
                (this.declarations = e),
                (this.kind = t),
                this.finish(),
                this
              );
            },
            finishVariableDeclarator: function (e, t) {
              return (
                (this.type = tn.VariableDeclarator),
                (this.id = e),
                (this.init = t),
                this.finish(),
                this
              );
            },
            finishWhileStatement: function (e, t) {
              return (
                (this.type = tn.WhileStatement),
                (this.test = e),
                (this.body = t),
                this.finish(),
                this
              );
            },
            finishWithStatement: function (e, t) {
              return (
                (this.type = tn.WithStatement),
                (this.object = e),
                (this.body = t),
                this.finish(),
                this
              );
            },
            finishExportSpecifier: function (e, t) {
              return (
                (this.type = tn.ExportSpecifier),
                (this.exported = t || e),
                (this.local = e),
                this.finish(),
                this
              );
            },
            finishImportDefaultSpecifier: function (e) {
              return (
                (this.type = tn.ImportDefaultSpecifier),
                (this.local = e),
                this.finish(),
                this
              );
            },
            finishImportNamespaceSpecifier: function (e) {
              return (
                (this.type = tn.ImportNamespaceSpecifier),
                (this.local = e),
                this.finish(),
                this
              );
            },
            finishExportNamedDeclaration: function (e, t, n) {
              return (
                (this.type = tn.ExportNamedDeclaration),
                (this.declaration = e),
                (this.specifiers = t),
                (this.source = n),
                this.finish(),
                this
              );
            },
            finishExportDefaultDeclaration: function (e) {
              return (
                (this.type = tn.ExportDefaultDeclaration),
                (this.declaration = e),
                this.finish(),
                this
              );
            },
            finishExportAllDeclaration: function (e) {
              return (
                (this.type = tn.ExportAllDeclaration),
                (this.source = e),
                this.finish(),
                this
              );
            },
            finishImportSpecifier: function (e, t) {
              return (
                (this.type = tn.ImportSpecifier),
                (this.local = e || t),
                (this.imported = t),
                this.finish(),
                this
              );
            },
            finishImportDeclaration: function (e, t) {
              return (
                (this.type = tn.ImportDeclaration),
                (this.specifiers = e),
                (this.source = t),
                this.finish(),
                this
              );
            },
            finishYieldExpression: function (e, t) {
              return (
                (this.type = tn.YieldExpression),
                (this.argument = e),
                (this.delegate = t),
                this.finish(),
                this
              );
            },
          }),
        (e.version = "2.7.2"),
        (e.tokenize = $t),
        (e.parse = Qt),
        (e.Syntax = (function () {
          var e,
            t = {};
          "function" == typeof Object.create && (t = Object.create(null));
          for (e in tn) tn.hasOwnProperty(e) && (t[e] = tn[e]);
          return "function" == typeof Object.freeze && Object.freeze(t), t;
        })());
    });
  },
  function (e, t) {
    "use strict";
    function n(e) {
      return function (t) {
        return e + "();";
      };
    }
    function r(e) {
      return (
        "string" == typeof e && (e = n(e)),
        function (t) {
          return "WhileStatement" == t.type ||
            "ForStatement" == t.type ||
            "DoWhileStatement" == t.type
            ? (t.body.update("{ " + e(t) + t.body.source() + " }"), !0)
            : !1;
        }
      );
    }
    Object.defineProperty(t, "__esModule", { value: !0 }), (t["default"] = r);
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      var t;
      try {
        t = o.parse(e);
      } catch (n) {
        return e;
      }
      for (var r = 0; r < t.body.length; r++) {
        var i = t.body[r];
        if (i.type === o.Syntax.FunctionDeclaration) {
          var a = i;
          if ("setup" === a.id.name || "draw" === a.id.name) return e;
        }
        if (i.type === o.Syntax.VariableDeclaration)
          for (var s = i, u = 0; u < s.declarations.length; u++) {
            var l = s.declarations[u].id;
            if ("setup" === l.name || "draw" === l.name) return e;
          }
      }
      return "function setup() { " + e + " }";
    }
    var o = n(178);
    Object.defineProperty(t, "__esModule", { value: !0 }), (t["default"] = r);
  },
  function (e, t) {
    e.exports =
      "function setup() {\r\n  createCanvas(100, 100);\r\n}\r\n\r\nfunction draw() {\r\n  background(255, 0, 200);\r\n}\r\n";
  },
  function (e, t, n) {
    var r = n(183);
    "string" == typeof r && (r = [[e.id, r, ""]]);
    n(185)(r, {});
    r.locals && (e.exports = r.locals);
  },
  function (e, t, n) {
    (t = e.exports = n(184)()),
      t.push([
        e.id,
        ".CodeMirror{font-family:monospace;height:300px;color:#000}.CodeMirror-lines{padding:4px 0}.CodeMirror pre{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:#fff}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0;background:#7e7}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-animate-fat-cursor{width:auto;border:0;-webkit-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite;background-color:#7e7}@-webkit-keyframes blink{50%{background-color:transparent}}@keyframes blink{50%{background-color:transparent}}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-ruler{border-left:1px solid #ccc;position:absolute}.cm-s-default .cm-header{color:blue}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-invalidchar,.cm-s-default .cm-error{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0f0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#f22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{position:relative;overflow:hidden;background:#fff}.CodeMirror-scroll{overflow:scroll!important;margin-bottom:-30px;margin-right:-30px;padding-bottom:30px;height:100%;outline:none;position:relative}.CodeMirror-sizer{position:relative;border-right:30px solid transparent}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{position:absolute;z-index:6;display:none}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}.CodeMirror-scrollbar-filler{right:0;bottom:0}.CodeMirror-gutter-filler{left:0;bottom:0}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-30px;*zoom:1;*display:inline}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:none!important;border:none!important}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}.CodeMirror-gutter-wrapper{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre{border-radius:0;border-width:0;background:transparent;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;-webkit-font-variant-ligatures:none;font-variant-ligatures:none}.CodeMirror-wrap pre{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}.CodeMirror-linewidget{position:relative;z-index:2;overflow:auto}.CodeMirror-code{outline:none}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{box-sizing:content-box}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}.CodeMirror-cursor{position:absolute}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}.CodeMirror-focused div.CodeMirror-cursors,div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background:#ffa;background:rgba(255,255,0,.4)}.CodeMirror span{*vertical-align:text-bottom}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:''}span.CodeMirror-selectedtext{background:none}",
        "",
        {
          version: 3,
          sources: ["/./node_modules/codemirror/lib/codemirror.css"],
          names: [],
          mappings:
            "AAEA,YAEE,sBAAuB,AACvB,aAAc,AACd,UAAa,CACd,AAID,kBACE,aAAe,CAChB,AACD,gBACE,aAAe,CAChB,AAED,uDACE,qBAAwB,CACzB,AAID,oBACE,4BAA6B,AAC7B,yBAA0B,AAC1B,kBAAoB,CACrB,AAED,uBACE,oBAAqB,AACrB,eAAgB,AAChB,iBAAkB,AAClB,WAAY,AACZ,kBAAoB,CACrB,AAED,yBAA2B,UAAa,CAAE,AAC1C,gCAAkC,UAAY,CAAE,AAIhD,mBACE,2BAA6B,AAC7B,kBAAmB,AACnB,OAAS,CACV,AAED,2CACE,4BAA8B,CAC/B,AACD,kCACE,WAAY,AACZ,SAAU,AACV,eAAiB,CAClB,AACD,sCACE,SAAW,CACZ,AAED,uBACE,WAAY,AACZ,SAAU,AACV,gDAAiD,AAEjD,wCAAyC,AACzC,qBAAuB,CACxB,AAMD,yBAEE,IAAM,4BAA8B,CAAE,CAEvC,AACD,iBAEE,IAAM,4BAA8B,CAAE,CAEvC,AAKD,QAAU,qBAAsB,AAAC,uBAAyB,CAAE,AAE5D,kBACE,2BAA4B,AAC5B,iBAAmB,CACpB,AAID,yBAA0B,UAAY,CAAC,AACvC,wBAAyB,UAAY,CAAC,AACtC,aAAc,UAAY,CAAC,AAC3B,aAAc,UAAY,CAAC,AAC3B,sBAAwB,eAAkB,CAAC,AAC3C,OAAQ,iBAAmB,CAAC,AAC5B,SAAU,yBAA2B,CAAC,AACtC,kBAAmB,4BAA8B,CAAC,AAElD,0BAA2B,UAAY,CAAC,AACxC,uBAAwB,UAAY,CAAC,AACrC,yBAA0B,UAAY,CAAC,AACvC,sBAAuB,UAAY,CAAC,AAKpC,6BAA8B,UAAY,CAAC,AAC3C,6BAA8B,UAAY,CAAC,AAC3C,0BAA2B,UAAY,CAAC,AACxC,yBAA0B,UAAY,CAAC,AACvC,2BAA4B,UAAY,CAAC,AAEzC,mDAA6B,UAAY,CAAC,AAC1C,0BAA2B,UAAY,CAAC,AACxC,0BAA2B,UAAY,CAAC,AACxC,sBAAuB,UAAY,CAAC,AACpC,4BAA6B,UAAY,CAAC,AAC1C,qBAAsB,UAAY,CAAC,AACnC,uBAAwB,UAAY,CAAC,AAGrC,wCAAiB,SAAY,CAAC,AAE9B,sBAAwB,uBAAyB,CAAE,AAInD,+CAAgD,UAAY,CAAC,AAC7D,kDAAmD,UAAY,CAAC,AAChE,wBAA0B,6BAAkC,CAAE,AAC9D,kCAAmC,kBAAoB,CAAC,AAOxD,YACE,kBAAmB,AACnB,gBAAiB,AACjB,eAAkB,CACnB,AAED,mBACE,0BAA4B,AAG5B,oBAAqB,AAAC,mBAAoB,AAC1C,oBAAqB,AACrB,YAAa,AACb,aAAc,AACd,iBAAmB,CACpB,AACD,kBACE,kBAAmB,AACnB,mCAAqC,CACtC,AAKD,qGACE,kBAAmB,AACnB,UAAW,AACX,YAAc,CACf,AACD,uBACE,QAAS,AAAC,MAAO,AACjB,kBAAmB,AACnB,iBAAmB,CACpB,AACD,uBACE,SAAU,AAAC,OAAQ,AACnB,kBAAmB,AACnB,iBAAmB,CACpB,AACD,6BACE,QAAS,AAAC,QAAU,CACrB,AACD,0BACE,OAAQ,AAAC,QAAU,CACpB,AAED,oBACE,kBAAmB,AAAC,OAAQ,AAAC,MAAO,AACpC,gBAAiB,AACjB,SAAW,CACZ,AACD,mBACE,mBAAoB,AACpB,YAAa,AACb,qBAAsB,AACtB,mBAAoB,AACpB,oBAAqB,CAJrB,OAMQ,CALR,cAMgB,CACjB,AACD,2BACE,kBAAmB,AACnB,UAAW,AACX,0BAA4B,AAC5B,qBAAwB,CACzB,AACD,8BACE,kBAAmB,AACnB,MAAO,AAAC,SAAU,AAClB,SAAW,CACZ,AACD,uBACE,kBAAmB,AACnB,eAAgB,AAChB,SAAW,CACZ,AACD,2BACE,yBAA0B,AAC1B,sBAAuB,AACvB,qBAAkB,AAAlB,gBAAkB,CACnB,AAED,kBACE,YAAa,AACb,cAAgB,CACjB,AACD,gBAEmD,gBAAiB,AAClE,eAAgB,AAChB,uBAAwB,AACxB,oBAAqB,AACrB,kBAAmB,AACnB,SAAU,AACV,gBAAiB,AACjB,iBAAkB,AAClB,oBAAqB,AACrB,cAAe,AACf,UAAW,AACX,kBAAmB,AACnB,iBAAkB,AAClB,wCAAyC,AACzC,oCAAqC,AACrC,2BAA6B,CAC9B,AACD,qBACE,qBAAsB,AACtB,qBAAsB,AACtB,iBAAmB,CACpB,AAED,2BACE,kBAAmB,AACnB,OAAQ,AAAC,QAAS,AAAC,MAAO,AAAC,SAAU,AACrC,SAAW,CACZ,AAED,uBACE,kBAAmB,AACnB,UAAW,AACX,aAAe,CAChB,AAID,iBACE,YAAc,CACf,AAGD,mGAME,sBAAwB,CACzB,AAED,oBACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,gBAAiB,AACjB,iBAAmB,CACpB,AAED,mBAAqB,iBAAmB,CAAE,AAC1C,wBAA0B,eAAiB,CAAE,AAE7C,uBACE,kBAAmB,AACnB,kBAAmB,AACnB,SAAW,CACZ,AAKD,sEACE,kBAAoB,CACrB,AAED,qBAAuB,kBAAoB,CAAE,AAC7C,yCAA2C,kBAAoB,CAAE,AACjE,sBAAwB,gBAAkB,CAAE,AAC5C,mGAA6G,kBAAoB,CAAE,AACnI,kHAA4H,kBAAoB,CAAE,AAElJ,cACE,gBAAiB,AACjB,6BAAkC,CACnC,AAGD,kBAAA,0BAAgD,CAAE,AAGlD,iBAAmB,kBAAoB,CAAE,AAEzC,aAEE,mCACE,iBAAmB,CACpB,CACF,AAGD,wBAA0B,UAAY,CAAE,AAGxC,6BAA+B,eAAiB,CAAE",
          file: "codemirror.css",
          sourcesContent: [
            "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3 {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0f0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #f22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n  /* Hack to make IE7 behave */\n  *zoom:1;\n  *display:inline;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  overflow: auto;\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor { position: absolute; }\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background: #ffa;\n  background: rgba(255, 255, 0, .4);\n}\n\n/* IE7 hack to prevent it from returning funny offsetTops on the spans */\n.CodeMirror span { *vertical-align: text-bottom; }\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n",
          ],
          sourceRoot: "webpack://",
        },
      ]);
  },
  function (e, t) {
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
            var a = t[o];
            ("number" == typeof a[0] && r[a[0]]) ||
              (n && !a[2]
                ? (a[2] = n)
                : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
              e.push(a));
          }
        }),
        e
      );
    };
  },
  function (e, t, n) {
    function r(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          o = f[r.id];
        if (o) {
          o.refs++;
          for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);
          for (; i < r.parts.length; i++) o.parts.push(l(r.parts[i], t));
        } else {
          for (var a = [], i = 0; i < r.parts.length; i++)
            a.push(l(r.parts[i], t));
          f[r.id] = { id: r.id, refs: 1, parts: a };
        }
      }
    }
    function o(e) {
      for (var t = [], n = {}, r = 0; r < e.length; r++) {
        var o = e[r],
          i = o[0],
          a = o[1],
          s = o[2],
          u = o[3],
          l = { css: a, media: s, sourceMap: u };
        n[i] ? n[i].parts.push(l) : t.push((n[i] = { id: i, parts: [l] }));
      }
      return t;
    }
    function i(e, t) {
      var n = v(),
        r = C[C.length - 1];
      if ("top" === e.insertAt)
        r
          ? r.nextSibling
            ? n.insertBefore(t, r.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          C.push(t);
      else {
        if ("bottom" !== e.insertAt)
          throw new Error(
            "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
          );
        n.appendChild(t);
      }
    }
    function a(e) {
      e.parentNode.removeChild(e);
      var t = C.indexOf(e);
      t >= 0 && C.splice(t, 1);
    }
    function s(e) {
      var t = document.createElement("style");
      return (t.type = "text/css"), i(e, t), t;
    }
    function u(e) {
      var t = document.createElement("link");
      return (t.rel = "stylesheet"), i(e, t), t;
    }
    function l(e, t) {
      var n, r, o;
      if (t.singleton) {
        var i = y++;
        (n = g || (g = s(t))),
          (r = c.bind(null, n, i, !1)),
          (o = c.bind(null, n, i, !0));
      } else
        e.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((n = u(t)),
            (r = d.bind(null, n)),
            (o = function () {
              a(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = s(t)),
            (r = p.bind(null, n)),
            (o = function () {
              a(n);
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
    function c(e, t, n, r) {
      var o = n ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = A(t, o);
      else {
        var i = document.createTextNode(o),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }
    function p(e, t) {
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
    var f = {},
      h = function (e) {
        var t;
        return function () {
          return "undefined" == typeof t && (t = e.apply(this, arguments)), t;
        };
      },
      m = h(function () {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
      }),
      v = h(function () {
        return document.head || document.getElementsByTagName("head")[0];
      }),
      g = null,
      y = 0,
      C = [];
    e.exports = function (e, t) {
      (t = t || {}),
        "undefined" == typeof t.singleton && (t.singleton = m()),
        "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
      var n = o(e);
      return (
        r(n, t),
        function (e) {
          for (var i = [], a = 0; a < n.length; a++) {
            var s = n[a],
              u = f[s.id];
            u.refs--, i.push(u);
          }
          if (e) {
            var l = o(e);
            r(l, t);
          }
          for (var a = 0; a < i.length; a++) {
            var u = i[a];
            if (0 === u.refs) {
              for (var c = 0; c < u.parts.length; c++) u.parts[c]();
              delete f[u.id];
            }
          }
        }
      );
    };
    var A = (function () {
      var e = [];
      return function (t, n) {
        return (e[t] = n), e.filter(Boolean).join("\n");
      };
    })();
  },
  function (e, t, n) {
    var r = n(187);
    "string" == typeof r && (r = [[e.id, r, ""]]);
    n(185)(r, {});
    r.locals && (e.exports = r.locals);
  },
  function (e, t, n) {
    (t = e.exports = n(184)()),
      t.push([
        e.id,
        "#app-holder,.app,body,html{height:100%}body{margin:0}button{font-size:14px;font-family:Montserrat,sans-serif;font-weight:400;color:#000;border:1px solid #ec245e;background:inherit;color:#ec245e;border-radius:2px;padding:2px 12px;cursor:pointer}button:hover,button:hover .open-iconic{fill:#30b8e6;color:#30b8e6;border-color:#30b8e6}a.p5-logo{margin-left:10px;margin-right:25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}a.p5-logo img{height:25px}.open-iconic{fill:#ec245e;height:16px;width:16px;vertical-align:-10%;margin-right:5px}.app{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.status-bar{border-top:1px solid #ec245e;background:#f0f0f0;min-height:1em;font-family:Monaco,Menlo,Ubuntu Mono,Consolas,source-code-pro,monospace;padding:8px}.error-message .error-message-line{font-family:Montserrat,sans-serif;font-weight:400;color:red}.toolbar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.toolbar button{margin:10px}.panes{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-top:1px solid #ec245e}.panes,.panes .editor-holder{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.panes .editor-holder{overflow-x:hidden}.panes .preview-holder-wrapper{flex-direction:column}.panes .preview-holder,.panes .preview-holder-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column}.panes .preview-holder{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;flex-direction:column;border-left:16px solid #f0f0f0}.panes .preview-holder-wrapper iframe{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;border:none}.CodeMirror{font-family:Monaco,Menlo,Ubuntu Mono,Consolas,source-code-pro,monospace;padding-right:1em}.CodeMirror-gutters{border-right:none;background:#f0f0f0}.error-line{background:#ffe5ea}",
        "",
        {
          version: 3,
          sources: ["/./css/style.css"],
          names: [],
          mappings:
            "AAUA,2BAIE,WAAa,CACd,AAED,KACE,QAAU,CACX,AAED,OACE,eAAgB,AAChB,kCAA4B,AAC5B,gBAAoB,AACpB,WAAa,AACb,yBAAmC,AACnC,mBAAoB,AACpB,cAAwB,AACxB,kBAAmB,AACnB,iBAAkB,AAClB,cAAgB,CACjB,AAED,uCAEE,aAAqB,AACrB,cAAsB,AACtB,oBAA6B,CAC9B,AAED,UACE,iBAAkB,AAClB,kBAAmB,AACnB,oBAAc,AAAd,qBAAc,AAAd,oBAAc,AAAd,aAAc,AACd,4BAAuB,AAAvB,6BAAuB,AAAvB,8BAAuB,AAAvB,0BAAuB,AAAvB,sBAAuB,AACvB,wBAAwB,AAAxB,+BAAwB,AAAxB,qBAAwB,AAAxB,sBAAwB,CACzB,AAED,cACE,WAAa,CACd,AAED,aACE,aAAuB,AACvB,YAAa,AACb,WAAY,AACZ,oBAAqB,AACrB,gBAAkB,CACnB,AAED,KACE,oBAAc,AAAd,qBAAc,AAAd,oBAAc,AAAd,aAAc,AACd,4BAAuB,AAAvB,6BAAuB,AAAvB,8BAAuB,AAAvB,0BAAuB,AAAvB,qBAAuB,CACxB,AAED,YACE,6BAAuC,AACvC,mBAAmC,AACnC,eAAgB,AAChB,wEAA8B,AAC9B,WAAa,CACd,AAED,mCACE,kCAA4B,AAC5B,gBAAoB,AACpB,SAAW,CACZ,AAED,SACE,oBAAc,AAAd,qBAAc,AAAd,oBAAc,AAAd,YAAc,CACf,AAED,gBACE,WAAa,CACd,AAED,OAEE,oBAAc,AAAd,qBAAc,AAAd,oBAAc,AAAd,aAAc,AACd,4BAAuC,CACxC,AAGD,6BANE,mBAAQ,AAAR,eAAQ,AAAR,WAAQ,AAAR,MAAQ,CAYT,AAND,sBAKE,iBAAmB,CACpB,AAED,+BAEE,qBAAuB,CACxB,AAED,sDAJE,oBAAc,AAAd,qBAAc,AAAd,oBAAc,AAAd,aAAc,AACd,4BAAuB,AAAvB,6BAAuB,AAAvB,8BAAuB,AAAvB,yBAAuB,CAQxB,AALD,uBACE,mBAAQ,AAAR,eAAQ,AAAR,WAAQ,AAAR,OAAQ,AAER,sBAAuB,AACvB,8BAA+C,CAChD,AAED,sCACE,mBAAQ,AAAR,eAAQ,AAAR,WAAQ,AAAR,OAAQ,AACR,WAAa,CACd,AAED,YACE,wEAA8B,AAI9B,iBAAmB,CACpB,AAED,oBACE,kBAAmB,AACnB,kBAAmC,CACpC,AAED,YACE,kBAA8B,CAC/B",
          file: "style.css",
          sourcesContent: [
            ':root {\r\n  --very-light-gray: #f0f0f0;\r\n  --light-pink: #ffe5ea;\r\n  --dark-pink: #ec245e;\r\n  --blueish: #30b8e6;\r\n  --ui-font: Montserrat, sans-serif;\r\n  --code-font: "Monaco", "Menlo", "Ubuntu Mono", "Consolas",\r\n               "source-code-pro", monospace;\r\n}\r\n\r\nhtml,\r\nbody,\r\n#app-holder,\r\n.app {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\nbutton {\r\n  font-size: 14px;\r\n  font-family: var(--ui-font);\r\n  font-weight: normal;\r\n  color: black;\r\n  border: 1px solid var(--dark-pink);\r\n  background: inherit;\r\n  color: var(--dark-pink);\r\n  border-radius: 2px;\r\n  padding: 2px 12px;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:hover,\r\nbutton:hover .open-iconic {\r\n  fill: var(--blueish);\r\n  color: var(--blueish);\r\n  border-color: var(--blueish);\r\n}\r\n\r\na.p5-logo {\r\n  margin-left: 10px;\r\n  margin-right: 25px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\na.p5-logo img {\r\n  height: 25px;\r\n}\r\n\r\n.open-iconic {\r\n  fill: var(--dark-pink);\r\n  height: 16px;\r\n  width: 16px;\r\n  vertical-align: -10%;\r\n  margin-right: 5px;\r\n}\r\n\r\n.app {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.status-bar {\r\n  border-top: 1px solid var(--dark-pink);\r\n  background: var(--very-light-gray);\r\n  min-height: 1em;\r\n  font-family: var(--code-font);\r\n  padding: 8px;\r\n}\r\n\r\n.error-message .error-message-line {\r\n  font-family: var(--ui-font);\r\n  font-weight: normal;\r\n  color: red;\r\n}\r\n\r\n.toolbar {\r\n  display: flex;\r\n}\r\n\r\n.toolbar button {\r\n  margin: 10px;\r\n}\r\n\r\n.panes {\r\n  flex: 1;\r\n  display: flex;\r\n  border-top: 1px solid var(--dark-pink);\r\n}\r\n\r\n\r\n.panes .editor-holder {\r\n  flex: 1;\r\n\r\n  /* We need this for horizontal scrolling to work properly.\r\n   * Very weird. */\r\n  overflow-x: hidden;\r\n}\r\n\r\n.panes .preview-holder-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.panes .preview-holder {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-left: 16px solid var(--very-light-gray);\r\n}\r\n\r\n.panes .preview-holder-wrapper iframe {\r\n  flex: 1;\r\n  border: none;\r\n}\r\n\r\n.CodeMirror {\r\n  font-family: var(--code-font);\r\n\r\n  /* If we don\'t add this, the final characters on some lines aren\'t\r\n   * visible if the editor has a horizontal scrollbar. Weird. */\r\n  padding-right: 1em;\r\n}\r\n\r\n.CodeMirror-gutters {\r\n  border-right: none;\r\n  background: var(--very-light-gray);\r\n}\r\n\r\n.error-line {\r\n  background: var(--light-pink);\r\n}\r\n',
          ],
          sourceRoot: "webpack://",
        },
      ]);
  },
  function (e, t, n) {
    var r = n(189);
    "string" == typeof r && (r = [[e.id, r, ""]]);
    n(185)(r, {});
    r.locals && (e.exports = r.locals);
  },
  function (e, t, n) {
    (t = e.exports = n(184)()),
      t.push([
        e.id,
        ".cm-s-p5-widget span,.cm-s-p5-widget span.cm-meta{color:#666}.cm-s-p5-widget span.cm-keyword{line-height:1em;color:#704f21}.cm-s-p5-widget span.cm-atom,.cm-s-p5-widget span.cm-number{color:#dc3787}.cm-s-p5-widget span.cm-def,.cm-s-p5-widget span.cm-variable{color:#00a1d3}.cm-s-p5-widget span.cm-property,.cm-s-p5-widget span.cm-variable-2,.cm-s-p5-widget span.cm-variable-3{color:#222}.cm-s-p5-widget span.cm-operator{color:#a67f59}.cm-s-p5-widget span.cm-comment{color:#a0a0a0}.cm-s-p5-widget span.cm-string,.cm-s-p5-widget span.cm-string-2{color:#00a1d3}.cm-s-p5-widget span.cm-error{color:red}.cm-s-p5-widget .CodeMirror-activeline-background{background:#e8f2ff}.cm-s-p5-widget .CodeMirror-matchingbracket{outline:1px solid grey;color:#000!important}.cm-s-p5-widget span.cm-qualifier{color:#555}.cm-s-p5-widget span.cm-builtin{color:#30a}.cm-s-p5-widget span.cm-bracket{color:#cc7}.cm-s-p5-widget span.cm-tag{color:#170}.cm-s-p5-widget span.cm-attribute{color:#00c}.cm-s-p5-widget span.cm-link{color:#219}",
        "",
        {
          version: 3,
          sources: ["/./css/p5-widget-codemirror-theme.css"],
          names: [],
          mappings:
            "AAYA,kDAA+B,UAAwB,CAAE,AACzD,gCAAkC,gBAAiB,AAAC,aAAyB,CAAE,AAE/E,4DAAiC,aAAsB,CAAE,AAEzD,6DAAmC,aAA2B,CAAE,AAGhE,uGAAmC,UAA2B,CAAE,AAChE,iCAAmC,aAA0B,CAAE,AAC/D,gCAAkC,aAAyB,CAAE,AAE7D,gEAAmC,aAA2B,CAAE,AAEhE,8BAAgC,SAAY,CAAE,AAE9C,kDAAoD,kBAAoB,CAAE,AAC1E,4CAA8C,uBAAuB,AAAC,oBAAuB,CAAE,AAI/F,kCAAoC,UAAY,CAAE,AAClD,gCAAkC,UAAY,CAAE,AAChD,gCAAkC,UAAY,CAAE,AAChD,4BAA8B,UAAY,CAAE,AAC5C,kCAAoC,UAAY,CAAE,AAClD,6BAA+B,UAAY,CAAE",
          file: "p5-widget-codemirror-theme.css",
          sourcesContent: [
            ":root {\r\n  --light-gray: #A0A0A0;\r\n  --dark-gray: #666;\r\n  --almost-black: #222;\r\n  --dark-brown: #704F21;\r\n  --light-brown: #a67f59;\r\n  --pinkish: #DC3787; /* not p5 pink, but related */\r\n  --dark-blueish: #00A1D3;\r\n}\r\n\r\n.cm-s-p5-widget span { color: var(--dark-gray); }\r\n\r\n.cm-s-p5-widget span.cm-meta { color: var(--dark-gray); }\r\n.cm-s-p5-widget span.cm-keyword { line-height: 1em; color: var(--dark-brown); }\r\n.cm-s-p5-widget span.cm-atom { color: var(--pinkish); }\r\n.cm-s-p5-widget span.cm-number { color: var(--pinkish); }\r\n.cm-s-p5-widget span.cm-def { color: var(--dark-blueish); }\r\n.cm-s-p5-widget span.cm-variable { color: var(--dark-blueish); }\r\n.cm-s-p5-widget span.cm-variable-2 { color: var(--almost-black); }\r\n.cm-s-p5-widget span.cm-variable-3 { color: var(--almost-black); }\r\n.cm-s-p5-widget span.cm-property { color: var(--almost-black); }\r\n.cm-s-p5-widget span.cm-operator { color: var(--light-brown); }\r\n.cm-s-p5-widget span.cm-comment { color: var(--light-gray); }\r\n.cm-s-p5-widget span.cm-string { color: var(--dark-blueish); }\r\n.cm-s-p5-widget span.cm-string-2 { color: var(--dark-blueish); }\r\n\r\n.cm-s-p5-widget span.cm-error { color: #f00; }\r\n\r\n.cm-s-p5-widget .CodeMirror-activeline-background { background: #e8f2ff; }\r\n.cm-s-p5-widget .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\r\n\r\n/* These styles don't seem to be set by CodeMirror's javascript mode. */\r\n\r\n.cm-s-p5-widget span.cm-qualifier { color: #555; }\r\n.cm-s-p5-widget span.cm-builtin { color: #30a; }\r\n.cm-s-p5-widget span.cm-bracket { color: #cc7; }\r\n.cm-s-p5-widget span.cm-tag { color: #170; }\r\n.cm-s-p5-widget span.cm-attribute { color: #00c; }\r\n.cm-s-p5-widget span.cm-link { color: #219; }\r\n",
          ],
          sourceRoot: "webpack://",
        },
      ]);
  },
]);
//# sourceMappingURL=main.bundle.js.map
