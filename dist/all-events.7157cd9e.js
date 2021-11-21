// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"h10ks":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "1ef3134d7157cd9e";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bBdBR":[function(require,module,exports) {
var _dataJs = require("./data.js");
var _headerFooterJs = require("./header-footer.js");
var _firstSectionJs = require("./landingPage/firstSection.js");
var _secondSectionJs = require("./landingPage/secondSection.js");
var _subsModalJs = require("./landingPage/subsModal.js");
var _calendarJs = require("./landingPage/calendar.js");
var _outstandingNewsJs = require("./landingPage/outstandingNews.js");
var _scrollUpJs = require("./landingPage/scroll-up.js");
var _eventJs = require("./event.js");
var _allEventsJs = require("./all-events.js");
var _allNewsJs = require("./all-news.js");
// Render header and footer
_headerFooterJs.renderHeader();
_headerFooterJs.renderFooter();
// Render the first section: events of the day
_firstSectionJs.render(_firstSectionJs.generateVideoMarkup(_dataJs.theaterData.events));
_firstSectionJs.render(_firstSectionJs.generateInfoMarkup(_dataJs.theaterData.events));
// Render the second section: events of the week
window.addEventListener('load', ()=>{
    _secondSectionJs.generateImgBkg(_dataJs.theaterData.events);
    _secondSectionJs.render(_secondSectionJs.generateInfoMarkup(_dataJs.theaterData.events));
});
_secondSectionJs.displayEventHandler(_dataJs.theaterData.events);
// Render the event when a tickets button is clicked
_eventJs.render(_eventJs.generateEventMarkup(_dataJs.theaterData.events));
// Render all events into all-events page
_dataJs.theaterData.events.forEach((event)=>_allEventsJs.render(_allEventsJs.generateEventsMarkup(event))
);
_allEventsJs.renderFilterButtons(_allEventsJs.generateFilterMarkup(_dataJs.theaterData.events));
_allEventsJs.filterHandler(_dataJs.theaterData.events);
//Render the fourth section: news
_outstandingNewsJs.filterNews(_dataJs.theaterData.news).slice(0, 4).reverse().forEach((news)=>_outstandingNewsJs.render(_outstandingNewsJs.generateNewsMarkup(news))
);
// Render the all News Page
_outstandingNewsJs.filterNews(_dataJs.theaterData.news).forEach((news)=>_allNewsJs.render(_allNewsJs.generateAllNews(news))
);
_allNewsJs.showContent();
//Render Calendar
_calendarJs.render(_calendarJs.createCalendar());
_calendarJs.addEventCalendar();
if (!document.cookie) {
    // One week = 604800 seconds
    document.cookie = 'name=Cookie; max-age=604800; path=/; SameSite=Lax';
    // Render modal form for subscription
    _subsModalJs.obsSect();
    _subsModalJs.addHandlerHideForm();
}

},{"./data.js":"lKWCw","./header-footer.js":"vGVAA","./landingPage/firstSection.js":"fOCw2","./landingPage/secondSection.js":"eHJIO","./landingPage/subsModal.js":"5YiyO","./landingPage/calendar.js":"1FA6L","./landingPage/outstandingNews.js":"a4xEc","./landingPage/scroll-up.js":"5xJk9","./event.js":"e9rOw","./all-events.js":"kC1ak","./all-news.js":"iTQsS"}],"lKWCw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "theaterData", ()=>theaterData
);
const generateRandomId = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
const theaterData = {
    events: [
        {
            id: generateRandomId(1, 999999),
            title: 'Winterreise',
            author: 'Angelin Preljocaj',
            group: 'Ballet Preljocaj',
            dates: [
                '11/05/2021',
                '11/06/2021',
                '11/08/2021',
                '11/09/2021',
                '11/10/2021', 
            ],
            type: 'dance',
            duration: '85',
            price: '45',
            artists: {
                choreography: 'Angelin Preljocaj',
                music: 'Franz Schubert',
                scenography: 'Constance Guisset',
                production: 'Ballet Preljocaj'
            },
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/front_web_winterreise.jpg',
            videoURL: 'https://www.liceubarcelona.cat/sites/default/files/espectacles/temporada_2021-2022/dansa/promo_winterreise_2122_h_clean_1.mp4',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ratione debitis impedit voluptate fuga dolores ullam, vitae voluptatibus quidem veniam eius, nisi odio harum nobis deserunt iure delectus? Excepturi, a?'
        },
        {
            id: generateRandomId(1, 999999),
            title: 'Pierrot Lunaire anb un pròleg: Narcís',
            author: 'Arnold Schönberg',
            group: '',
            dates: [
                '11/16/2021',
                '11/17/2021',
                '11/18/2021'
            ],
            type: 'concert',
            duration: '60',
            price: '65',
            artists: {
                countertenor: 'Xavier Sabata',
                scenography: 'cube.bz',
                movement: 'Maria C. de Vaca',
                musicDirector: 'Francesc Prat'
            },
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/front_web_pierrot_2_0.png',
            videoURL: '',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!'
        },
        {
            id: generateRandomId(1, 999999),
            title: "Mite i tragèdia d'electra i èdip",
            author: [
                'Richard Strauss',
                'Igor Stravinsky'
            ],
            group: [
                'Cor del Gran TeaTRE del Liceu',
                'Orquestra Simfónica del Gran Tatre del Liceu', 
            ],
            dates: [
                '11/13/2021'
            ],
            type: 'opera',
            duration: '120',
            price: '80',
            artists: {
                director: 'Josep Pons',
                cast: {
                    oedipe: 'Michael Spyres',
                    jocaste: 'Ekaterina Gubanova',
                    creon: 'José Antonio López',
                    tiresias: 'Albert Dohmen',
                    pastor: 'David Alegret'
                }
            },
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/front_web_elektra_edip.jpg',
            videoURL: '',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!'
        },
        {
            id: generateRandomId(1, 999999),
            title: 'Rigoletto',
            author: 'Giuseppe Verdi',
            group: '',
            dates: [
                '11/28/2021',
                '11/30/2021',
                '12/01/2021',
                '12/02/2021',
                '12/03/2021',
                '12/04/2021',
                '12/05/2021',
                '12/06/2021',
                '12/07/2021',
                '12/08/2021',
                '12/09/2021',
                '12/10/2021',
                '12/11/2021',
                '12/12/2021',
                '12/13/2021',
                '12/014/2021',
                '12/15/2021', 
            ],
            type: 'opera',
            duration: '160',
            price: '75',
            artists: {
                director: 'Daniele Callegari',
                stageDirector: 'Monique Wagemakers',
                scenography: 'Michael Levine',
                dress: 'Sandy Powell',
                cast: {
                    matuaDuke: 'Benjamin Bernheim',
                    rigoletto: 'Christopher Maltman',
                    gilda: 'Olga Peretyatko',
                    sparafucile: 'Grigory Shkarupa',
                    maddalena: 'Rinat Shaham'
                }
            },
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/front_web_rigoleto.jpg',
            videoURL: 'https://www.liceubarcelona.cat/sites/default/files/espectacles/temporada_2021-2022/opera/rigoletto/caps10_rigoletto_2122_1.mp4',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!'
        },
        {
            id: generateRandomId(1, 999999),
            title: 'Dudamel dirigeix la Simfònica fantàstica de Berlioz',
            author: 'Gustavo Dudamel',
            group: [
                'Orquestra Simfónica del Gran Teatre del Liceu',
                "Orchestre de l'Opéra National de Paris", 
            ],
            dates: [
                '11/21/2021'
            ],
            type: 'concert',
            duration: '120',
            price: '45',
            artists: {
                director: 'Gustavo Dudamel'
            },
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/front_web_dudamel_2.png',
            videoURL: '',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!'
        },
        {
            id: generateRandomId(1, 999999),
            title: 'Die Zauberflöte',
            author: 'Wolfgang Amadeus Mozart',
            group: [
                'Orquestra Simfónica del Gran Teatre del Liceu',
                'Cor del Gran Teatre del Liceu', 
            ],
            dates: [
                '06/20/2022',
                '06/21/2022',
                '06/22/2022',
                '06/25/2022',
                '06/26/2022',
                '06/27/2022',
                '06/28/2022',
                '06/30/2022',
                '07/01/2022',
                '07/02/2022', 
            ],
            type: 'opera',
            duration: '170',
            price: '50',
            artists: {
                director: 'Gustavo Dudamel',
                stageDirector: 'Simon McBurney',
                scenography: 'Michael Levine',
                dress: 'Nicky Gillibrand',
                production: 'Dutch National Opera'
            },
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/front_web_flauta.jpg',
            videoURL: 'https://www.liceubarcelona.cat/sites/default/files/espectacles/temporada_2021-2022/opera/la_flauta_magica/caps10_flauta_mag_2122_1.mp4',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!'
        },
        {
            id: generateRandomId(1, 999999),
            title: 'El Trencanous',
            author: 'Piotr Tchaikovsky',
            group: '',
            dates: [
                '12/28/2021',
                '12/29/2021',
                '12/30/2021',
                '01/02/2022',
                '01/03/2022',
                '01/04/2022', 
            ],
            type: 'dance',
            duration: '90',
            price: '40',
            artists: {
                director: 'Marius Stighorst',
                music: 'Piotr Íllitx Txaikovski',
                choreography: 'Kader Belarbi',
                scenography: 'Antoine Fontaine',
                dress: 'Philippe Guillotel'
            },
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/front_web_trencanous_0.jpg',
            videoURL: 'https://www.liceubarcelona.cat/sites/default/files/espectacles/temporada_2021-2022/dansa/promo_trencanous_2122_h_clean_1.mp4',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!'
        },
        {
            id: generateRandomId(1, 999999),
            title: 'Els Madrigals de Monteverdi I',
            author: 'C. Monteverdi',
            group: 'Concerto Italiano',
            dates: [
                '11/07/2021'
            ],
            type: 'concert',
            duration: '120',
            price: '105',
            artists: {
                director: 'Rinaldo Alessandrini'
            },
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/front_web_madrigals1.jpg',
            videoURL: '',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!'
        },
        {
            id: generateRandomId(1, 999999),
            title: 'Pelléas et Mélisande',
            author: 'Maurice Maeterlinck',
            group: '',
            dates: [
                '02/28/2022',
                '03/03/2022',
                '03/06/2022',
                '03/08/2022',
                '03/11/2022',
                '03/15/2022',
                '03/18/2022', 
            ],
            type: 'opera',
            duration: '200',
            price: '95',
            artists: {
                director: 'Josep Pons',
                stageDirector: 'Àlex Ollé',
                scenography: 'Alfons Flores',
                dress: 'Lluc Castells',
                production: 'Nova producció basada en la producció de la Dresden Oper'
            },
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/front_web_pelleas-et-melisande.jpg',
            videoURL: 'https://www.liceubarcelona.cat/sites/default/files/caps10_pelleasetmelisande_2122_1.mp4',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!'
        },
        {
            id: generateRandomId(1, 999999),
            title: 'Pikovaia Dama',
            author: 'Piotr Ilitx Txaikovski',
            group: '',
            dates: [
                '01/26/2022',
                '01/27/2022',
                '02/01/2022',
                '02/02/2022',
                '02/04/2022',
                '02/05/2022',
                '02/06/2022',
                '02/08/2022',
                '02/10/2022',
                '02/11/2022', 
            ],
            type: 'opera',
            duration: '230',
            price: '185',
            artists: {
                director: 'Dmitry Jurowski',
                stageDirector: 'Gilbert Deflo',
                scenography: 'William Orlandi',
                choreography: 'Nadejda L. Loujine',
                dress: 'William Orlandi',
                production: 'Gran Teatre del Liceu'
            },
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/front_web_dama-de-picas.jpg',
            videoURL: 'https://www.liceubarcelona.cat/sites/default/files/espectacles/temporada_2021-2022/opera/pikovaia_dama/caps10_piquedame_2122_1.mp4',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!'
        },
        {
            id: generateRandomId(1, 999999),
            title: 'Piotr Beczala',
            author: '',
            group: '',
            dates: [
                '02/03/2022'
            ],
            type: 'concert',
            duration: 'Not available',
            price: '25',
            artists: {
                tenor: 'Piotr Beczala',
                piano: 'Not available'
            },
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/front_web_beczala_0.jpg',
            videoURL: '',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!'
        },
        {
            id: generateRandomId(1, 999999),
            title: 'Sonya Yoncheva canta Puccini',
            author: '',
            group: 'Gran Simfònica del Gran Teatre del Liceu',
            dates: [
                '04/30/2022'
            ],
            type: 'concert',
            duration: '160',
            price: '35',
            artists: {
                director: 'Francesco Ivan Ciampa',
                soprano: 'Sonya Yoncheva'
            },
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/front_web_yoncheva.jpg',
            videoURL: '',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!'
        },
        {
            id: generateRandomId(1, 999999),
            title: "Giselle D'Akram Khan",
            author: 'Adolphe Adam',
            group: 'English National Ballet',
            dates: [
                '05/04/2022',
                '05/05/2022',
                '05/06/2022',
                '05/07/2022'
            ],
            type: 'dance',
            duration: '120',
            price: '70',
            artists: {
                direction: 'Akram Khan',
                choreography: 'Akram Khan',
                music: 'Vincenzo Lamagna',
                scenography: 'Tim Yip',
                director: 'Gavin Sutherland',
                dress: 'Tim Yip'
            },
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/10_-_giselle_english_national_ballet_0.jpg',
            videoURL: 'https://www.liceubarcelona.cat/sites/default/files/promo_giselle_2122_h_clean_1.mp4',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!'
        }, 
    ],
    news: [
        {
            title: 'The Liceu starts a new project with the teacher Rinaldo Alessandrini',
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/banner_madrigals_noticia.png',
            publicationDate: '12/11/2021',
            content: 'The Gran Teatre del Liceu begins a project by the master Rinaldo Alessandrini and his renowned group Concerto Italiano, with the collaboration of the Italian Institute of Culture of Barcelona, ​​to promote and disseminate the representation of the cycle of the Madrigals of Monteverdi. The work occupies a prominent place in the composers production and represents the culmination of the Madrigal genre, as well as the beginning of the opera genre. The madrigals are grouped into 9 books.',
            sponsored: true
        },
        {
            title: "Josep Pons conducts 'Mite i tragèdia d'Electra i Èdip'",
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/josep_banner_01.png',
            publicationDate: '12/27/2021',
            content: 'The Symphony Orchestra and the Choir of the Gran Teatre del Liceu, with the baton of the master Josep Pons, offer a concert that brings together modern visions of the tragedies of Sophocles from the eyes of two of the most brilliant composers of the 20th century: Ricard Strauss and Igor Stravinsky.',
            sponsored: true
        },
        {
            title: 'Liceu projects financed with the support of the Department of Culture',
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/sala_bastida_noticia.png',
            publicationDate: '12/19/2021',
            content: 'The improvement plan for the facilities of the Gran Teatre del Liceu, which have been funded with the support of the Department of Culture of the Generalitat de Catalunya, includes the improvement of the users online experience in purchasing and consulting services through the Information and Communication Technologies (ICT), the dissemination of documents of artistic, historical and cultural value with the creation of the digital archive and the Annals platform.',
            sponsored: false
        },
        {
            title: 'Serena Sáenz gana el XVI Concurso Internacional de Canto Montserrat Caballé',
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/banner_noticia_serena-saenz.png',
            publicationDate: '12/10/2021',
            content: 'The Catalan soprano Serena Sáenz, 27, has won the First Prize of the 16th edition of the Montserrat Caballé International Singing Competition. Sáenz has also been recognized with the honorary public award and the special awards of the Castell de Peralada Festival and Gran Teatre del Liceu, which involve a contract for a future production at the Gran Teatre and another at the festival.',
            sponsored: false
        },
        {
            title: "'War Requiem' de Britten arriba al Liceu amb producció escenificada",
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/warrequiem_banner.png',
            publicationDate: '12/29/2021',
            content: 'Music and the arts merge on the stage of the Gran Teatre del Liceu with War Requiem, a play by Benjamin Britten that arrives with a stage proposal signed by stage director Daniel Kramer and the gaze of photographer and visual artist Wolfgang Tillmans. After its premiere in 2018 at the English National Opera, the production will be shown for the first time in Spain.',
            sponsored: true
        },
        {
            title: 'The Liceu hosts the Montserrat Caballé Contest for the first time',
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/banner_noticia_caballe.png',
            publicationDate: '01/17/2022',
            content: 'Montserrat Caballés dream in recent years has been to be able to create a foundation and keep alive its International Singing Competition as a springboard for new generations of young talent. In order to achieve his wishes, his family decided to create the Montserrat Caballé Private Foundation, which aims to keep alive the memory of his life and work, while promoting all the teaching work he carried out.',
            sponsored: false
        },
        {
            title: 'Salvador Alemany renews as president of the Gran Teatre del Liceu Foundation',
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/banner_noticia_patronat.png',
            publicationDate: '01/06/2022',
            content: 'Salvador Alemany has been re-elected president of the Gran Teatre del Liceu Foundation in an extraordinary Board of Trustees held today on the stage of the Teatre in the presence of all the administrations, the Societat del Liceu and the Patronage Council. The president of the Generalitat and also honorary president of the Theater, Pere Aragonès, who chaired the event, has renewed his position in Germany after consulting all the institutions of the Board for a new term of 5 years.',
            sponsored: true
        },
        {
            title: "The Liceu presents 'La noche de San Juan' with choreography by Antonio Ruz",
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/nitsantjoan_portada.png',
            publicationDate: '01/28/2022',
            content: 'The Gran Teatre del Liceu presents La nit de Sant Joan (Soirées de Barcelona), ballet with music by Robert Gerhard (1896-1970), scenography by Joan Junyer and plot by Ventura Gassol remain unpublished in 1939 by the ups and downs of the Civil War. The work had been created as a result of the fury of dance at the beginning of the 20th century, with the background of the European image of an exotic Spain and the devastating success that Falla had conquered in this field.',
            sponsored: true
        },
        {
            title: 'Extension of the annals of the Liceu fins to 1981',
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/banner_parsifal.png',
            publicationDate: '01/07/2022',
            content: 'The Gran Teatre del Liceu continues to expand the database it made public last year and enables a new stage of the Theater that covers the period between the 1981/82 and 1992/93 seasons. From today, users will be able to consult hundreds of photographs, hand programs and artistic information of all the operas, ballets and concerts of the last 40 years, since the death of the last businessman Joan Antoni Pàmias and the creation of the Consortium of Lyceum until the current season.',
            sponsored: true
        },
        {
            title: 'The Futbol Club Barcelona gives its support to the Liceu',
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/futbolclubbarcelona_banner.png',
            publicationDate: '01/13/2022',
            content: 'Joan Laporta and Elena Fort, President and Institutional Vice President of Futbol Club Barcelona, ​​and Salvador Alemany and Valentí Oviedo, President and General Manager of the Gran Teatre del Liceu Foundation, have signed a collaboration agreement by which Futbol Club Barcelona renews its support as a collaborating entity of the Liceu. Also present at the signing ceremony were Juli Guiu, Vice-President of the Marketing Department of Futbol Club Barcelona, ​​and Helena Roca, Director of Sponsorship, Patronage and Events at the Gran Teatre del Liceu Foundation.',
            sponsored: true
        },
        {
            title: "Reading of the 'Divina Comèdia' by Dante al Liceu",
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/1280px-dante_domenico_di_michelino_duomo_florence-1.png',
            publicationDate: '12/01/2021',
            content: 'The first activity of the season of the Gran Teatre del Liceu is linked to its theme (paradise) with a complete continuous reading in Barcelona of the Divine Comedy: one of the universal, timeless and central texts of European poetry. Coinciding with the 700th anniversary of the passing of Dante Alighieri, the Theater opens the doors of its Sala Tenor Viñas and invites all audiences to read an excerpt from the Divine Comedy, translated by Josep Maria de Segarra.',
            sponsored: false
        },
        {
            title: 'The Liceu launches the # LiceUnder35 Community',
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/liceu_under_35_038_1_0.jpg',
            publicationDate: '01/20/2022',
            content: 'The romantic ornamentation of the Sala Miralls and the contemporary art of Okuda San Miguel dialogue in the new proposal of the Liceu de les Arts. At the beginning of the season of the 175th anniversary of the Liceu, past and future go hand in hand, with a work that creates an intense contrast between the historical paintings of the Theater and current urban art. In this context, the Liceu is launching the ‘LiceUnder35 Community’, convinced that it is working for those who will be part of the Liceu of the future, with proposals aimed at young people under 35 years of age.',
            sponsored: false
        },
        {
            title: "The musical 'My Fair Lady', for the first time at the Liceu",
            imgURL: 'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/mfl_rehearsal_07.png',
            publicationDate: '12/04/2021',
            content: 'Considered the “perfect musical”, My Fair Lady, by Frederik Loewe, can be seen for the first time in Barcelona at the Gran Teatre del Liceu with two unique performances. The two-act musical premiered on March 15, 1956 at the Mark Hellinger Theater in New York City. It was later performed at the Broadhurst Theater and then at The Broadway Theater, where it was on the bill until 1962. The musical is based on George Bernard Shaws comedy Pygmalion (1913) and features a libretto by Alan Jay Lerner.',
            sponsored: true
        }, 
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"vGVAA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderHeader", ()=>renderHeader
);
parcelHelpers.export(exports, "renderFooter", ()=>renderFooter
);
const headerContainer = document.querySelector('.header');
const footerContainer = document.querySelector('.footer');
const generateHeaderMarkup = function() {
    return `
    <a href="index.html"><img class="logo" src="${require('../images/logo.png')}" alt="logo"></img></a>
    <img class="menu-icon" src="${require('../images/calendar-icon.png')}" alt="icono menu">
    <img class="menu-icon" src="${require('../images/user-icon.png')}" alt="icono menu">
    <img class="menu-icon" src="${require('../images/cart-icon.png')}" alt="icono menu">
    <img class="nav-btn menu-icon" src="${require('../images/menu-icon.png')}" alt="icono menu">
    <nav class="nav-section">
      <img class="nav-btn x-close" src="${require('../images/x-close.png')}" alt="icono cerrar">
      <a href="./allevents.html">Events</a>
      <a href="./news.html">News</a>
      <a href="Prices">Prices</a>
      <a href="About us">About us</a>
      <a href="Contact">Contact</a>
      </nav>
      `;
};
/* <div class="search"><input type="search" name="q" id="search" placeholder="Search events"><i class="fas fa-search"></i></div> */ const generateFooterMarkup = function() {
    return `
  <div class="footer-container">
    <div class= "footer-info">
    <img src="${require('../images/map.png')}" alt="map" class="map">
    <div class="contact">
      <p>Times Square, 4th, New York</p>
      <p>555-66245567</p>
      <p>thecodetheater@mail.com </p>
    </div>
    <div class="social-links">
      <div class="social-icons">
        <i class="fab fa-instagram "></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-youtube"></i>
        <i class="fab fa-twitter"></i>
        <i class="fas fa-rss"></i>
      </div>
      <div class="footer-links">
        <a href="http://PrivacyPolicy" class="link-footer">Privacy Policy</a>
        <a href="http://webdesign" class="link-footer">Web Design</a>
        <a href="http://cookies" class="link-footer">Cookies</a>
      </div>
      </div>
      </div>
    <div class="footer-refrn">
    All the data and images used come from&nbsp<a href="https://www.liceubarcelona.cat/">www.liceubarcelona.cat</a>
    </div>
  </div>`;
};
const renderHeader = function() {
    if (!headerContainer) return;
    headerContainer.insertAdjacentHTML('afterbegin', generateHeaderMarkup());
};
const renderFooter = function() {
    if (!footerContainer) return;
    footerContainer.insertAdjacentHTML('afterbegin', generateFooterMarkup());
};
const toggleMenu = function() {
    const headerMenu = document.querySelector('.nav-section');
    if (!headerMenu) return;
    headerMenu.classList.toggle('menu2');
    headerMenu.style.transition = 'transform 0.5s ease-in-out';
};
const menuHandler = function() {
    if (!headerContainer) return;
    headerContainer.addEventListener('click', (e)=>{
        const btn = e.target.closest('.nav-btn');
        if (!btn) return;
        toggleMenu();
    });
};
menuHandler();

},{"../images/logo.png":"dGoy2","../images/calendar-icon.png":"2URcy","../images/user-icon.png":"at9ez","../images/cart-icon.png":"flV4x","../images/menu-icon.png":"7A1wf","../images/x-close.png":"4D20A","../images/map.png":"dQMU8","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dGoy2":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2EK68') + "logo.502ce92a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"2URcy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2EK68') + "calendar-icon.fe5adc8b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"at9ez":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2EK68') + "user-icon.e86d5b2e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"flV4x":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2EK68') + "cart-icon.66876fdd.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"7A1wf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2EK68') + "menu-icon.ea95fc30.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"4D20A":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2EK68') + "x-close.28223f5c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"dQMU8":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2EK68') + "map.6cf315f4.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"fOCw2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateVideoMarkup", ()=>generateVideoMarkup
);
parcelHelpers.export(exports, "generateInfoMarkup", ()=>generateInfoMarkup
);
parcelHelpers.export(exports, "render", ()=>render
);
const dayEventSection = document.querySelector('.day-events-container');
const generateVideoMarkup = function(events) {
    return `<video class="day-event-video" autoplay="autoplay" loop="loop" muted="muted">
            <source src="${events[0].videoURL}" type="video/mp4">
          </video>`;
};
const generateInfoMarkup = function(events) {
    const firstDate = new Date(events[0].dates[0]).toLocaleDateString();
    const lastDate = new Date(events[0].dates[events[0].dates.length - 1]).toLocaleDateString();
    return `
    <div class="day-event-info">
      <h1 class="day-event-title">${events[0].title}</h1>
      <p class="day-event-type">${events[0].type}</p>
      <p class="day-event-dates">${firstDate} - 
      ${lastDate}</p>
      <button class="tickets-btn day-tickets-btn" href="event.html">Tickets</button>
    </div>`;
};
const render = function(markup) {
    if (!dayEventSection) return;
    dayEventSection.insertAdjacentHTML('beforeend', markup);
};
const loadEventPage = function() {
    if (!dayEventSection) return;
    dayEventSection.addEventListener('click', (e)=>{
        const btn = e.target.closest('.day-tickets-btn');
        if (!btn) return;
        window.location.replace('event.html');
    });
};
loadEventPage();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eHJIO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateImgBkg", ()=>generateImgBkg
);
parcelHelpers.export(exports, "generateInfoMarkup", ()=>generateInfoMarkup
);
parcelHelpers.export(exports, "render", ()=>render
);
parcelHelpers.export(exports, "displayEventHandler", ()=>displayEventHandler
);
const weekEventSection = document.querySelector('.week-events-container');
let eventNum = 0;
const generateImgBkg = function(events, posNum = 0) {
    if (!weekEventSection) return;
    weekEventSection.style.backgroundImage = `url(${events[posNum].imgURL})`;
};
const generateInfoMarkup = function(events, posNum = 0) {
    const nearEvents = sortEventsByDate(events).slice(0, 3);
    const firstDate = new Date(nearEvents[posNum].dates[0]).toLocaleDateString();
    const lastDate = new Date(nearEvents[posNum].dates[nearEvents[posNum].dates.length - 1]).toLocaleDateString();
    const eventDate = `<p class="week-event-dates">${firstDate}</p>`;
    const eventDates = `<p class="week-event-dates">${firstDate} - 
  ${lastDate}</p>`;
    return `<div class="week-event-info">
            <button class="btn slider-btn slider-btn-right"><i class="fas fa-chevron-right"></i></button>
            <button class="btn slider-btn slider-btn-left"><i class="fas fa-chevron-left"></i></button>
            <button class="btn all-events-btn">All events</button>
            <p class="week-event-type">${nearEvents[posNum].type}</p>
            <h1 class="week-event-title">${nearEvents[posNum].title}</h1>
            <p class="week-event-author">${nearEvents[posNum].author}</p>
            ${nearEvents[posNum].dates.length === 1 ? eventDate : eventDates}
            <button class="btn tickets-btn week-tickets-btn" href="event.html">Tickets</button>
          </div>`;
};
const render = function(markup) {
    if (!weekEventSection || !markup) return;
    weekEventSection.insertAdjacentHTML('afterbegin', markup);
};
const displayEventHandler = function(events) {
    if (!weekEventSection) return;
    weekEventSection.addEventListener('click', (e)=>{
        e.preventDefault();
        const btn = e.target.closest('.btn');
        if (!btn) return;
        if (btn.classList.contains('slider-btn-right')) renderNextEvent(events);
        else if (btn.classList.contains('slider-btn-left')) renderPrevEvent(events);
        else if (btn.classList.contains('all-events-btn')) window.location.replace('allevents.html');
        else if (btn.classList.contains('week-tickets-btn')) window.location.replace('event.html');
    });
};
const renderNextEvent = function(events) {
    if (eventNum >= 2) return;
    weekEventSection.innerHTML = '';
    eventNum += 1;
    render(generateImgBkg(events, eventNum));
    render(generateInfoMarkup(events, eventNum));
};
const renderPrevEvent = function(events) {
    if (eventNum === 0) return;
    weekEventSection.innerHTML = '';
    eventNum -= 1;
    render(generateImgBkg(events, eventNum));
    render(generateInfoMarkup(events, eventNum));
};
const sortEventsByDate = function(events) {
    return events.sort((a, b)=>{
        return new Date(a.dates[0]).getTime() - new Date(b.dates[0]).getTime();
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5YiyO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "obsSect", ()=>obsSect
);
parcelHelpers.export(exports, "addHandlerHideForm", ()=>addHandlerHideForm
);
const overlay = document.querySelector('.overlay');
const formWindow = document.querySelector('.form-window');
const secondSection = document.querySelector('.week-events-container');
const btnCloseModal = document.querySelector('.btn--close-modal');
const revealSubsForm = function(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    toggleWindow();
    observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSubsForm, {
    root: null,
    threshold: 0.15
});
const obsSect = function() {
    if (!secondSection) return;
    sectionObserver.observe(secondSection);
};
const toggleWindow = function() {
    if (!overlay || !formWindow) return;
    overlay.classList.toggle('hidden');
    formWindow.classList.toggle('hidden');
};
const addHandlerHideForm = function() {
    if (!btnCloseModal) return;
    btnCloseModal.addEventListener('click', toggleWindow());
    overlay.addEventListener('click', toggleWindow());
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1FA6L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCalendar", ()=>createCalendar
);
parcelHelpers.export(exports, "render", ()=>render
);
parcelHelpers.export(exports, "addEventCalendar", ()=>addEventCalendar
);
const dayContainer = document.querySelector('.day-container');
const createCalendar = function() {
    let buttons = '';
    for(let i = 1; i <= 35; i++){
        if (i <= 31) buttons += `<button class="calendar-btn calendar-${i}">${i}</button>`;
        else if (i > 31) buttons += `<button class="calendar-btn calendar-empty"></button>`;
    }
    return buttons;
};
const render = function(markup) {
    if (!dayContainer) return;
    dayContainer.insertAdjacentHTML('beforeend', markup);
};
function addEventCalendar() {
    if (!dayContainer) return;
    dayContainer.addEventListener('click', (e)=>{
        const btn = e.target.closest('.calendar-btn');
        if (!btn) return;
        if (btn.classList.contains('calendar-empty')) return;
        if (btn.classList.contains('calendar-28')) window.location.assign('allevents.html');
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"a4xEc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filterNews", ()=>filterNews
);
parcelHelpers.export(exports, "generateNewsMarkup", ()=>generateNewsMarkup
);
parcelHelpers.export(exports, "render", ()=>render
);
const newsSection = document.querySelector('.news-section');
const newsContainer = document.querySelector('.news-container');
const filterNews = function(news) {
    let sponsoredNews = news.filter(function(n) {
        return n.sponsored == true;
    });
    let notSponsoredNews = news.filter(function(n) {
        return n.sponsored == false;
    });
    filterDate(sponsoredNews);
    filterDate(notSponsoredNews);
    let orderedNews = sponsoredNews.concat(notSponsoredNews);
    return orderedNews;
};
const generateNewsMarkup = function(singleNews) {
    const localePubDate = new Date(singleNews.publicationDate).toLocaleDateString();
    return `
  <div class="news-info">
  <img class="news-image" src="${singleNews.imgURL}" alt="News Image">
  <p class="news-title">${singleNews.title}</p>
  <p class="news-date">${localePubDate}</p>
  </div>`;
};
const render = function(markup) {
    if (!newsContainer) return;
    newsContainer.insertAdjacentHTML('afterbegin', markup);
};
function filterDate(news) {
    news.sort(function(a, b) {
        return new Date(a.publicationDate).getTime() - new Date(b.publicationDate).getTime();
    });
}
const loadNewsPage = function() {
    if (!newsSection) return;
    newsSection.addEventListener('click', (e)=>{
        const btn = e.target.closest('.all-news-btn');
        if (!btn) return;
        window.location.replace('news.html');
    });
};
loadNewsPage();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5xJk9":[function(require,module,exports) {
const buttonUp = document.querySelector('.scroll-up-icon');
document.querySelector('.scroll-up-icon').addEventListener('click', function() {
    scrollUp();
});
const scrollUp = function() {
    const currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - currentScroll / 10);
        buttonUp.style.transform = 'scale(0)';
    }
};
window.onscroll = function() {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 200) buttonUp.style.transform = 'scale(1)';
    else if (scroll < 200) buttonUp.style.transform = 'scale(0)';
};

},{}],"e9rOw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateEventMarkup", ()=>generateEventMarkup
);
parcelHelpers.export(exports, "render", ()=>render
);
const eventContainer = document.querySelector('.event-container');
const generateEventMarkup = function(events) {
    return `
  <section class="event">
        <h1 class="event-title">${events[0].title}</h1>
        <img class="event-img" src="${events[0].imgURL}" alt="${events[0].title}">
        <aside class="event-form">
          <form action="post">
            <input class="event-form-input" type="text" name="name" id="name" placeholder="Name"/>
            <input class="event-form-input" type="text" name="lastName" id="lastName" placeholder="Last name"/>
            <input class="event-form-input" type="text" name="phone" id="phone" placeholder="Phone"/>
            <input class="event-form-input" type="text" name="email" id="email" placeholder="Email"/>
            <input class="event-form-input" type="number" name="numTickets" id="numTickets" value="1" min="1"/>
            <button class="event-form-btn" type="submit">Add to cart</button>
          </form>
        </aside>
        <div class="event-description">
        <h2>Price</h2>
        <p>${events[0].price} €</p>
        <h2>Dates</h2>
        <p>${events[0].dates.join(', ')}</p>
        <h2>Author</h2>
        <p>${events[0].author}</p>
          <h2>Description</h2>
          <p>${events[0].description}</p>
          <h2>Duration</h2>
        <p>${events[0].duration} min</p>
        </div>
      </section>
  `;
};
const render = function(markup) {
    if (!eventContainer) return;
    eventContainer.insertAdjacentHTML('afterbegin', markup);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kC1ak":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateEventsMarkup", ()=>generateEventsMarkup
);
parcelHelpers.export(exports, "render", ()=>render
);
parcelHelpers.export(exports, "generateFilterMarkup", ()=>generateFilterMarkup
);
parcelHelpers.export(exports, "renderFilterButtons", ()=>renderFilterButtons
);
parcelHelpers.export(exports, "filterHandler", ()=>filterHandler
);
var _helperJs = require("./helper.js");
const eventsContainer = document.querySelector('.allevents-container');
const filterContainer = document.querySelector('.filter-container');
const addEventBtn = document.querySelector('.add-event-btn');
const btnCloseModal = document.querySelector('.btn--close-modal');
const overlay = document.querySelector('.overlay');
const formWindow = document.querySelector('.form-window');
const addEventForm = document.querySelector('.upload');
const uploadBtn = document.querySelector('.upload__btn');
const editBtn = document.querySelector('.edit__btn');
const generateEventsMarkup = function(event) {
    const [...dates] = event.dates;
    const eventsNearDate = dates.join('').slice(0, 10).replaceAll('-', '/');
    const localeDate = new Date(eventsNearDate).toLocaleDateString();
    return `
    <div class="single-event-container">
      <img src="${event.imgURL}" alt="${event.title}">
      <h2 class="event-title">${event.title}</h2>
      <p class="event-desc">${event.description}</p>
      <p class="event-dates">${localeDate}</p>
      <button class="btn-icon edit-icon"><i class="far fa-edit"></i></button>
      <button class="btn-icon trash-icon"><i class="fas fa-trash-alt"></i></button>
    </div>`;
};
const render = function(markup) {
    if (!eventsContainer || !markup) return;
    eventsContainer.insertAdjacentHTML('beforeend', markup);
};
const generateFilterMarkup = function(events) {
    if (!events) return;
    let buttons = '<button class="btn-filter btn-all-events">All events</button>';
    const uniqueEventTypes = [
        ...new Set(events.map((event)=>event.type
        ))
    ];
    uniqueEventTypes.forEach((eventType)=>{
        buttons += `
    <button class="btn-filter btn-${eventType}">${_helperJs.firstUpperLetter(eventType)}</button>
    `;
    });
    return buttons;
};
const renderFilterButtons = function(markup) {
    if (!filterContainer || !markup) return;
    filterContainer.insertAdjacentHTML('afterbegin', markup);
};
const filterHandler = function(events) {
    if (!filterContainer) return;
    filterContainer.addEventListener('click', (e)=>{
        const btn = e.target.closest('.btn-filter');
        if (!btn) return;
        if (btn.classList.contains('btn-all-events')) {
            eventsContainer.innerHTML = '';
            events.forEach((event)=>render(generateEventsMarkup(event))
            );
        } else if (btn.classList.contains('btn-dance')) {
            eventsContainer.innerHTML = '';
            const danceEvents = filterEventsByType(events, 'dance');
            danceEvents.forEach((event)=>render(generateEventsMarkup(event))
            );
        } else if (btn.classList.contains('btn-concert')) {
            eventsContainer.innerHTML = '';
            const concertEvents = filterEventsByType(events, 'concert');
            concertEvents.forEach((event)=>render(generateEventsMarkup(event))
            );
        } else if (btn.classList.contains('btn-opera')) {
            eventsContainer.innerHTML = '';
            const operaEvents = filterEventsByType(events, 'opera');
            operaEvents.forEach((event)=>render(generateEventsMarkup(event))
            );
        }
    });
};
const filterEventsByType = function(events, type) {
    return events.filter((event)=>event.type === type
    );
};
const toggleWindow = function() {
    if (!overlay || !formWindow) return;
    overlay.classList.toggle('hidden');
    formWindow.classList.toggle('hidden');
};
const addHandlerShowForm = function() {
    if (!addEventBtn) return;
    addEventBtn.addEventListener('click', ()=>{
        if (uploadBtn.classList.contains('btn-hidden')) toggleBtnVisibility();
        toggleWindow();
    });
};
addHandlerShowForm();
const addHandlerHideForm = function() {
    if (!btnCloseModal) return;
    btnCloseModal.addEventListener('click', toggleWindow);
    overlay.addEventListener('click', toggleWindow);
};
addHandlerHideForm();
const uploadBtnHandler = function() {
    if (!uploadBtn) return;
    uploadBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        uploadEvent();
    });
};
uploadBtnHandler();
const uploadEvent = function() {
    const formData = getFormData();
    const markup = generateEventsMarkup(formData);
    eventsContainer.insertAdjacentHTML('afterbegin', markup);
    toggleWindow();
};
const getFormData = function() {
    const formData = new FormData(addEventForm);
    if (!formData) return;
    const data = Object.fromEntries(formData);
    return data;
};
const deleteEventHandler = function() {
    if (!eventsContainer) return;
    eventsContainer.addEventListener('click', (e)=>{
        const btn = e.target.closest('.btn-icon');
        if (!btn) return;
        if (btn.classList.contains('trash-icon')) deleteEvent(btn);
    });
};
deleteEventHandler();
const deleteEvent = function(elem) {
    elem.parentElement.outerHTML = '';
};
const toggleBtnVisibility = function() {
    if (!editBtn || !uploadBtn) return;
    editBtn.classList.toggle('btn-hidden');
    uploadBtn.classList.toggle('btn-hidden');
};
const generateEditedEventMarkup = function(event) {
    const [...dates] = event.dates;
    const eventsNearDate = dates.join('').slice(0, 10).replaceAll('-', '/');
    const localeDate = new Date(eventsNearDate).toLocaleDateString();
    return `
      <img src="${event.imgURL}" alt="${event.title}">
      <h2 class="event-title">${event.title}</h2>
      <p class="event-desc">${event.description}</p>
      <p class="event-dates">${localeDate}</p>
      <button class="btn-icon edit-icon"><i class="far fa-edit"></i></button>
      <button class="btn-icon trash-icon"><i class="fas fa-trash-alt"></i></button>
      `;
};
const editEvent = function(parentElem) {
    const formData = getFormData();
    const markup = generateEditedEventMarkup(formData);
    parentElem.innerHTML = markup;
};
const editBtnHandler = function(parentElem) {
    if (!editBtn) return;
    editBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        toggleWindow();
        editEvent(parentElem);
        toggleBtnVisibility();
    });
};
const editEventHandler = function() {
    if (!eventsContainer) return;
    eventsContainer.addEventListener('click', (e)=>{
        const btn = e.target.closest('.btn-icon');
        if (!btn) return;
        if (btn.classList.contains('edit-icon')) {
            if (editBtn.classList.contains('btn-hidden')) toggleBtnVisibility();
            toggleWindow();
            editBtnHandler(btn.parentElement);
        }
    });
};
editEventHandler();

},{"./helper.js":"gDUlg","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gDUlg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "firstUpperLetter", ()=>firstUpperLetter
);
const firstUpperLetter = function(word) {
    const firstLetter = word.split('')[0].toUpperCase();
    return firstLetter.concat(word.slice(1, word.length));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iTQsS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateAllNews", ()=>generateAllNews
);
parcelHelpers.export(exports, "render", ()=>render
);
parcelHelpers.export(exports, "showContent", ()=>showContent
);
const eventContainer = document.querySelector('.all-news-container');
const generateAllNews = function(singleNews) {
    const localePubDate = new Date(singleNews.publicationDate).toLocaleDateString();
    return `
      <div class="news-info">
          <img class="news-image" src="${singleNews.imgURL}" alt="News Image">
          <p class="news-title">${singleNews.title}</p>
          <p class="news-content hidden">${singleNews.content}</p>
          <p class="news-date">${localePubDate}</p>
          <button class="btn-readmore">Read More...</button>
          </div>
          `;
};
const render = function(markup) {
    if (!eventContainer) return;
    eventContainer.insertAdjacentHTML('beforeend', markup);
};
const showContent = function() {
    if (!eventContainer) return;
    eventContainer.addEventListener('click', (e)=>{
        const btn = e.target.closest('.btn-readmore');
        if (!btn) return;
        const newsContent = e.target.parentElement.childNodes[5];
        if (newsContent.classList.contains('hidden')) newsContent.classList.toggle('hidden');
        else newsContent.classList.toggle('hidden');
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["h10ks","bBdBR"], "bBdBR", "parcelRequire2340")

//# sourceMappingURL=all-events.7157cd9e.js.map
