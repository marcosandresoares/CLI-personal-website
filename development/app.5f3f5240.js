// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../src/js/app.js":[function(require,module,exports) {
// Blacklisted Key Codes
var _BLACKLISTED_KEY_CODES_ = [38]; // Commands

var _COMMANDS_ = {
  hello: '<br>Hi, how are you doing today?<br> Have you tried typing <span class="code">help</span> in the console?<br><br>',
  help: '<br> Type one of these supported commands:<br><br><span class="code">about</span> <br><span class="code">tech skills</span> <br><span class="code">design skills</span> <br> <span class="code">previous research</span> <br> <span class="code">expertise areas</span> <br> <span class="code"> education</span> <br> <span class="code">experience</span> <br><span class="code">hobbies</span> <br> <span class="code">five fun facts</span> <br> <span class="code">contact</span><br><br> <span class="code">tools</span><br><br>',
  about: '<br><span class="code"> Marcos Soares </span> is a hybrid designer and researcher currently pursuing a PhD in Innovation Design Engineering at the Royal College of Art in London. He is also responsible for the entire user experience research for oddschecker\'s mobile applications and website. Prior to joining oddschecker, he held research positions at the Royal College of Art, Microsoft Research and Fraunhofer Portugal.<br><br> ',
  'tech skills': '<br> Front End Development:<br> <span class="code"> HTML</span>,<span class="code"> CSS</span>, <span class="code"> Custom Reusable CSS Components (Sass)</span>, <span class="code"> CSS Frameworks (Bootstrap, Materialize and Bulma) </span><span class="code"> Javascript</span>, <span class="code"> Javascript Frameworks (React) </span> and <span class="code"> Typescript</span><br><br> Server-side Language: <br><span class="code"> Node.js</span>, <span class="code"> Python</span> <br><br> Databases: <br>Experience with <span class="code"> Relational Databases (PostgreSQL and MySQL)</span> and <span class="code"> NoSQL (MongoDB)</span>. Basic Experience with <span class="code"> Cloud Databases (Firebase)</span> <br><br> Data Science: <br> <span class="code"> Python</span> and <span class="code"> Excel</span>. Familiar with <span class="code"> R</span>, <span class="code"> Deep Learning algorithms</span> and <span class="code"> Machine Learning algorithms</span> ',
  'design skills': '<br> Although not exclusive, these are the user research methods I use more frequently: <br> <span class="code"> Analytics & A/B Testing</span> <br> <span class="code"> Card Sorting</span><br> <span class="code"> Concept Testing</span><br> <span class="code"> Usability Testing</span><br> <span class="code"> Usability Benchmarking</span><br> <span class="code"> Eyetracking</span><br> <span class="code"> Interviews</span><br> <span class="code"> Participatory Design</span> <br> <span class="code"> Diary Studies</span><br> <span class="code"> Customer Feedback</span><br> <span class="code"> Surveys</span><br> <span class="code"> Qualitative and Quantitative Desirability Studies</span> <br> <span class="code"> Ethnographic Field Studies</span> <br> <span class="code"> Focus Groups</span><br> <span class="code"> Data Analysis for Qualitative Methods</span>',
  'previous research': '<br> Over the years, I\'ve worked in the following areas of research:<br><br><span class="code">Cultural Databases</span><br><span class="code">Data Collection in Remote and Underserved Areas</span><br><span class="code">Fall Monitoring and Fall Prevention</span><br><span class="code">Exergaming</span><br><span class="code">Food Recommendation Systems</span><br><span class="code">mHealth Solution</span><br><span class="code">Biological Computational Systems</span><br><span class="code">Human-AI Interaction</span><br><span class="code">Intelligent Personal Assistants</span><br><span class="code">Privacy and Security</span><br><br>',
  'expertise areas': '<br><span class="code">Interaction Design</span><br><span class="code">Human Computer Interaction</span><br><span class="code">UX Design Research</span><br><span class="code">Survey Research</span><br><span class="code">Design Strategy</span><br><span class="code">Data Collection and Data Analysis</span><br><span class="code">Statistical Methods</span><br><span class="code">Interviewing</span><br><span class="code">Project Management</span><br><span class="code">Prototyping and Web Development</span><br><span class="code">User Interface Design</span>',
  education: '<br><span class="code">PhD in Innovation Design Engineering</span><br> Royal College of Art | London, United Kingdom<br>September 2016 - Present<br><br> <span class="code">Masters in Multimedia - Specialisation in Technologies</span><br> FEUP | Porto, Portugal<br>September 2013 - July 2015<br><br> <span class="code"> Double Major - Bachelor\'s in Anthropology and Computer Art</span><br> SUNY Oneonta |  Oneonta, NY, USA<br>January 2009 - December 2011<br><br>',
  experience: '<br><span class="code">User Experience Researcher @ oddschecker</span><br>London, United Kingdom<br>October 2019 - Present<br><br> <span class="code">Visiting Lecturer @ Royal College of Art</span><br> London, United Kingdom<br>January 2018 - January 2019<br><br> <span class="code"> Human Computer Interaction / User Experience Research Intern @ Microsoft Research</span><br> Cambridge, United Kingdom<br>June 2017 - September 2017<br><br> <span class="code">User Experience / Human Computer Interaction Scientist @ Fraunhofer Portugal</span><br>Porto, Portugal<br>May 2016 - September 2016<br><br> <span class="code">User Experience / Human Computer Interaction Researcher @ Fraunhofer Portugal</span><br>Porto, Portugal<br>October 2014 - May 2016<br><br>',
  hobbies: 'Drawing <br> Running <br> Basketball <br> Football <br> Cooking <br> Urban Exploration ',
  'five fun facts': 'I studied Chinese for 4 years <br> I\'m obsessed with Non-Western history, particularly South American History <br> I\'m a huge fan of underground hip hop and old school Hip Hop <br> I played roller hockey player for 11 years in Portugal <br> I lived in New York state for five years ',
  tools: '<br>Preferred Operating System: <span class="code"> MacOS</span><br>Preferred Text Editor: <span class="code"> Visual Studio Code</span> <br>Preferred Web Browsers: <span class="code">Google Chrome & Mozilla Firefox</span><br>Others: <span class="code"> Terminal</span> & <span class="code"> Github</span><br>Preferred Design Software: <span class="code"> Sketch</span>, <span class="code"> Figma</span><br><br>',
  contact: '<br> Send me a message to: <a href="mailto:marcos.barroso.soares@gmail.com"><span class="code">marcos.barroso.soares@gmail.com</span></a><br> You can also find me on <a href="https://www.linkedin.com/in/marcos-soares-a9a1184a/" target="_blank"><span class="code">LinkedIn</span></a>, <a href="https://github.com/marcosandresoares" target="_blank"><span class="code">Github</span></a> and <a href="https://medium.com/@marcos.barroso.soares" target="_blank"><span class="code">Medium</span></a>'
};
var userInput;
var terminalOutput; // app 

var app = function app() {
  userInput = document.getElementById('user-input');
  terminalOutput = document.getElementById('terminal-output');
  commandInput = document.getElementById('command-input');
  commandInput.focus();
  console.log('Application Ready!!');
}; // execute


var executeCommand = function executeCommand(input) {
  var output; // lowercase input

  input = input.toLowerCase();

  if (input.length === 0) {
    return;
  } // output


  output = "\n        <div class='terminal-line'>\n            <span class='success'> marcos-soares@Marcos-CLI</span>\n            <span class='directory'> ~ % </span>\n            ".concat(input, "\n        </div>\n    "); // Fn: If command is in list, run command.
  // Else, provide error message

  if (!_COMMANDS_.hasOwnProperty(input)) {
    output += "\n            <div class='terminal-line'>\n                No such command: ".concat(input, "\n            </div>\n        ");
    console.log('Oops! No such command!');
  } else {
    output += _COMMANDS_[input];
  }

  terminalOutput.innerHTML = "".concat(terminalOutput.innerHTML, "<div class='terminal-line'> ").concat(output, "</div>");
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}; // key


var key = function key(e) {
  var input = userInput.innerHTML;

  if (_BLACKLISTED_KEY_CODES_.includes(e.keyCode)) {
    return;
  }

  if (e.key === 'Enter') {
    executeCommand(input);
    userInput.innerHTML = '';
    commandInput.value = '';
    return;
  }

  userInput.innerHTML = input + e.key;
}; // backspace


var backspace = function backspace(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }

  userInput.innerHTML = userInput.innerHTML.slice(0, userInput.innerHTML.length - 1);
}; // Event Listeners


document.addEventListener('keydown', backspace);
document.addEventListener('keypress', key);
document.addEventListener('DOMContentLoaded', app);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51586" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/js/app.js"], null)
//# sourceMappingURL=/app.5f3f5240.js.map