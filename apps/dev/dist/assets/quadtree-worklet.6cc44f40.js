import crypto from 'crypto';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function createProperties(prefix, props) {
  props.map(prop => {
    prop.variable = `--${prefix}-${prop.name}`;

    switch (prop.type) {
      case 'number':
        prop.value = exp => parseInt(exp);

        break;

      case 'string':
        prop.value = exp => exp.toString().trim();

        break;

      case 'boolean':
        prop.value = exp => JSON.parse(exp);

        break;

      case 'object':
        prop.value = exp => JSON.parse(exp);

        break;
    }
  });
  return Object.defineProperties({}, {
    propsMap: {
      value: props
    },
    values: {
      get: function () {
        const arr = [];
        this.propsMap.forEach(prop => arr.push(prop.value));
        return arr;
      }
    },
    variableStrings: {
      get: function () {
        const arr = [];
        this.propsMap.forEach(prop => arr.push(prop.variable));
        return arr;
      }
    }
  });
}

/**
 * Layout Worklet Definitions
 *
 * @remarks
*/

var ChildDisplayType;

(function (ChildDisplayType) {
  ChildDisplayType["block"] = "block";
  ChildDisplayType["normal"] = "normal";
})(ChildDisplayType || (ChildDisplayType = {}));

var LayoutSizingMode;

(function (LayoutSizingMode) {
  LayoutSizingMode["blockLike"] = "block-like";
  LayoutSizingMode["manual"] = "manual";
})(LayoutSizingMode || (LayoutSizingMode = {}));

var BlockFragmentationType;

(function (BlockFragmentationType) {
  BlockFragmentationType["none"] = "none";
  BlockFragmentationType["page"] = "page";
  BlockFragmentationType["column"] = "column";
  BlockFragmentationType["region"] = "region";
})(BlockFragmentationType || (BlockFragmentationType = {}));

var BreakType;

(function (BreakType) {
  BreakType["none"] = "none";
  BreakType["line"] = "line";
  BreakType["page"] = "page";
  BreakType["column"] = "column";
  BreakType["region"] = "region";
})(BreakType || (BreakType = {}));
class FragmentResultOptions {}
class IntrinsicSizesResultOptions {}
class LayoutDefinition {
  layout(children, edges, constraints, styleMap) {
    return __awaiter(this, void 0, void 0, function* () {
      return new FragmentResultOptions();
    });
  }

  intrinsicSizes(children, edges, styleMap) {
    return __awaiter(this, void 0, void 0, function* () {
      return new IntrinsicSizesResultOptions();
    });
  }

}

function CSSLayout(name) {
  return function (type) {
    if (!type.prototype.layout || !type.prototype.intrinsicSizes) {
      type = LayoutDefinition;
    } // @ts-ignore


    registerLayout(name, type);
  };
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var alea = createCommonjsModule(function (module) {
  // A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
  // http://baagoe.com/en/RandomMusings/javascript/
  // https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
  // Original work is under MIT license -
  // Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
  //
  // Permission is hereby granted, free of charge, to any person obtaining a copy
  // of this software and associated documentation files (the "Software"), to deal
  // in the Software without restriction, including without limitation the rights
  // to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  // copies of the Software, and to permit persons to whom the Software is
  // furnished to do so, subject to the following conditions:
  //
  // The above copyright notice and this permission notice shall be included in
  // all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  // OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  // THE SOFTWARE.
  (function (global, module, define) {
    function Alea(seed) {
      var me = this,
          mash = Mash();

      me.next = function () {
        var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32

        me.s0 = me.s1;
        me.s1 = me.s2;
        return me.s2 = t - (me.c = t | 0);
      }; // Apply the seeding algorithm from Baagoe.


      me.c = 1;
      me.s0 = mash(' ');
      me.s1 = mash(' ');
      me.s2 = mash(' ');
      me.s0 -= mash(seed);

      if (me.s0 < 0) {
        me.s0 += 1;
      }

      me.s1 -= mash(seed);

      if (me.s1 < 0) {
        me.s1 += 1;
      }

      me.s2 -= mash(seed);

      if (me.s2 < 0) {
        me.s2 += 1;
      }

      mash = null;
    }

    function copy(f, t) {
      t.c = f.c;
      t.s0 = f.s0;
      t.s1 = f.s1;
      t.s2 = f.s2;
      return t;
    }

    function impl(seed, opts) {
      var xg = new Alea(seed),
          state = opts && opts.state,
          prng = xg.next;

      prng.int32 = function () {
        return xg.next() * 0x100000000 | 0;
      };

      prng.double = function () {
        return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
      };

      prng.quick = prng;

      if (state) {
        if (typeof state == 'object') copy(state, xg);

        prng.state = function () {
          return copy(xg, {});
        };
      }

      return prng;
    }

    function Mash() {
      var n = 0xefc8249d;

      var mash = function (data) {
        data = String(data);

        for (var i = 0; i < data.length; i++) {
          n += data.charCodeAt(i);
          var h = 0.02519603282416938 * n;
          n = h >>> 0;
          h -= n;
          h *= n;
          n = h >>> 0;
          h -= n;
          n += h * 0x100000000; // 2^32
        }

        return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
      };

      return mash;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function () {
        return impl;
      });
    } else {
      this.alea = impl;
    }
  })(commonjsGlobal, module, // present in node.js
  typeof undefined == 'function'  // present with an AMD loader
  );
});

var xor128 = createCommonjsModule(function (module) {
  // A Javascript implementaion of the "xor128" prng algorithm by
  // George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper
  (function (global, module, define) {
    function XorGen(seed) {
      var me = this,
          strseed = '';
      me.x = 0;
      me.y = 0;
      me.z = 0;
      me.w = 0; // Set up generator function.

      me.next = function () {
        var t = me.x ^ me.x << 11;
        me.x = me.y;
        me.y = me.z;
        me.z = me.w;
        return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
      };

      if (seed === (seed | 0)) {
        // Integer seed.
        me.x = seed;
      } else {
        // String seed.
        strseed += seed;
      } // Mix in string seed, then discard an initial batch of 64 values.


      for (var k = 0; k < strseed.length + 64; k++) {
        me.x ^= strseed.charCodeAt(k) | 0;
        me.next();
      }
    }

    function copy(f, t) {
      t.x = f.x;
      t.y = f.y;
      t.z = f.z;
      t.w = f.w;
      return t;
    }

    function impl(seed, opts) {
      var xg = new XorGen(seed),
          state = opts && opts.state,
          prng = function () {
        return (xg.next() >>> 0) / 0x100000000;
      };

      prng.double = function () {
        do {
          var top = xg.next() >>> 11,
              bot = (xg.next() >>> 0) / 0x100000000,
              result = (top + bot) / (1 << 21);
        } while (result === 0);

        return result;
      };

      prng.int32 = xg.next;
      prng.quick = prng;

      if (state) {
        if (typeof state == 'object') copy(state, xg);

        prng.state = function () {
          return copy(xg, {});
        };
      }

      return prng;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function () {
        return impl;
      });
    } else {
      this.xor128 = impl;
    }
  })(commonjsGlobal, module, // present in node.js
  typeof undefined == 'function'  // present with an AMD loader
  );
});

var xorwow = createCommonjsModule(function (module) {
  // A Javascript implementaion of the "xorwow" prng algorithm by
  // George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper
  (function (global, module, define) {
    function XorGen(seed) {
      var me = this,
          strseed = ''; // Set up generator function.

      me.next = function () {
        var t = me.x ^ me.x >>> 2;
        me.x = me.y;
        me.y = me.z;
        me.z = me.w;
        me.w = me.v;
        return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
      };

      me.x = 0;
      me.y = 0;
      me.z = 0;
      me.w = 0;
      me.v = 0;

      if (seed === (seed | 0)) {
        // Integer seed.
        me.x = seed;
      } else {
        // String seed.
        strseed += seed;
      } // Mix in string seed, then discard an initial batch of 64 values.


      for (var k = 0; k < strseed.length + 64; k++) {
        me.x ^= strseed.charCodeAt(k) | 0;

        if (k == strseed.length) {
          me.d = me.x << 10 ^ me.x >>> 4;
        }

        me.next();
      }
    }

    function copy(f, t) {
      t.x = f.x;
      t.y = f.y;
      t.z = f.z;
      t.w = f.w;
      t.v = f.v;
      t.d = f.d;
      return t;
    }

    function impl(seed, opts) {
      var xg = new XorGen(seed),
          state = opts && opts.state,
          prng = function () {
        return (xg.next() >>> 0) / 0x100000000;
      };

      prng.double = function () {
        do {
          var top = xg.next() >>> 11,
              bot = (xg.next() >>> 0) / 0x100000000,
              result = (top + bot) / (1 << 21);
        } while (result === 0);

        return result;
      };

      prng.int32 = xg.next;
      prng.quick = prng;

      if (state) {
        if (typeof state == 'object') copy(state, xg);

        prng.state = function () {
          return copy(xg, {});
        };
      }

      return prng;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function () {
        return impl;
      });
    } else {
      this.xorwow = impl;
    }
  })(commonjsGlobal, module, // present in node.js
  typeof undefined == 'function'  // present with an AMD loader
  );
});

var xorshift7 = createCommonjsModule(function (module) {
  // A Javascript implementaion of the "xorshift7" algorithm by
  // François Panneton and Pierre L'ecuyer:
  // "On the Xorgshift Random Number Generators"
  // http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf
  (function (global, module, define) {
    function XorGen(seed) {
      var me = this; // Set up generator function.

      me.next = function () {
        // Update xor generator.
        var X = me.x,
            i = me.i,
            t,
            v;
        t = X[i];
        t ^= t >>> 7;
        v = t ^ t << 24;
        t = X[i + 1 & 7];
        v ^= t ^ t >>> 10;
        t = X[i + 3 & 7];
        v ^= t ^ t >>> 3;
        t = X[i + 4 & 7];
        v ^= t ^ t << 7;
        t = X[i + 7 & 7];
        t = t ^ t << 13;
        v ^= t ^ t << 9;
        X[i] = v;
        me.i = i + 1 & 7;
        return v;
      };

      function init(me, seed) {
        var j,
            X = [];

        if (seed === (seed | 0)) {
          // Seed state array using a 32-bit integer.
          X[0] = seed;
        } else {
          // Seed state using a string.
          seed = '' + seed;

          for (j = 0; j < seed.length; ++j) {
            X[j & 7] = X[j & 7] << 15 ^ seed.charCodeAt(j) + X[j + 1 & 7] << 13;
          }
        } // Enforce an array length of 8, not all zeroes.


        while (X.length < 8) X.push(0);

        for (j = 0; j < 8 && X[j] === 0; ++j);

        if (j == 8) X[7] = -1;
        me.x = X;
        me.i = 0; // Discard an initial 256 values.

        for (j = 256; j > 0; --j) {
          me.next();
        }
      }

      init(me, seed);
    }

    function copy(f, t) {
      t.x = f.x.slice();
      t.i = f.i;
      return t;
    }

    function impl(seed, opts) {
      if (seed == null) seed = +new Date();

      var xg = new XorGen(seed),
          state = opts && opts.state,
          prng = function () {
        return (xg.next() >>> 0) / 0x100000000;
      };

      prng.double = function () {
        do {
          var top = xg.next() >>> 11,
              bot = (xg.next() >>> 0) / 0x100000000,
              result = (top + bot) / (1 << 21);
        } while (result === 0);

        return result;
      };

      prng.int32 = xg.next;
      prng.quick = prng;

      if (state) {
        if (state.x) copy(state, xg);

        prng.state = function () {
          return copy(xg, {});
        };
      }

      return prng;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function () {
        return impl;
      });
    } else {
      this.xorshift7 = impl;
    }
  })(commonjsGlobal, module, // present in node.js
  typeof undefined == 'function'  // present with an AMD loader
  );
});

var xor4096 = createCommonjsModule(function (module) {
  // A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
  //
  // This fast non-cryptographic random number generator is designed for
  // use in Monte-Carlo algorithms. It combines a long-period xorshift
  // generator with a Weyl generator, and it passes all common batteries
  // of stasticial tests for randomness while consuming only a few nanoseconds
  // for each prng generated.  For background on the generator, see Brent's
  // paper: "Some long-period random number generators using shifts and xors."
  // http://arxiv.org/pdf/1004.3115v1.pdf
  //
  // Usage:
  //
  // var xor4096 = require('xor4096');
  // random = xor4096(1);                        // Seed with int32 or string.
  // assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
  // assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
  //
  // For nonzero numeric keys, this impelementation provides a sequence
  // identical to that by Brent's xorgens 3 implementaion in C.  This
  // implementation also provides for initalizing the generator with
  // string seeds, or for saving and restoring the state of the generator.
  //
  // On Chrome, this prng benchmarks about 2.1 times slower than
  // Javascript's built-in Math.random().
  (function (global, module, define) {
    function XorGen(seed) {
      var me = this; // Set up generator function.

      me.next = function () {
        var w = me.w,
            X = me.X,
            i = me.i,
            t,
            v; // Update Weyl generator.

        me.w = w = w + 0x61c88647 | 0; // Update xor generator.

        v = X[i + 34 & 127];
        t = X[i = i + 1 & 127];
        v ^= v << 13;
        t ^= t << 17;
        v ^= v >>> 15;
        t ^= t >>> 12; // Update Xor generator array state.

        v = X[i] = v ^ t;
        me.i = i; // Result is the combination.

        return v + (w ^ w >>> 16) | 0;
      };

      function init(me, seed) {
        var t,
            v,
            i,
            j,
            w,
            X = [],
            limit = 128;

        if (seed === (seed | 0)) {
          // Numeric seeds initialize v, which is used to generates X.
          v = seed;
          seed = null;
        } else {
          // String seeds are mixed into v and X one character at a time.
          seed = seed + '\0';
          v = 0;
          limit = Math.max(limit, seed.length);
        } // Initialize circular array and weyl value.


        for (i = 0, j = -32; j < limit; ++j) {
          // Put the unicode characters into the array, and shuffle them.
          if (seed) v ^= seed.charCodeAt((j + 32) % seed.length); // After 32 shuffles, take v as the starting w value.

          if (j === 0) w = v;
          v ^= v << 10;
          v ^= v >>> 15;
          v ^= v << 4;
          v ^= v >>> 13;

          if (j >= 0) {
            w = w + 0x61c88647 | 0; // Weyl.

            t = X[j & 127] ^= v + w; // Combine xor and weyl to init array.

            i = 0 == t ? i + 1 : 0; // Count zeroes.
          }
        } // We have detected all zeroes; make the key nonzero.


        if (i >= 128) {
          X[(seed && seed.length || 0) & 127] = -1;
        } // Run the generator 512 times to further mix the state before using it.
        // Factoring this as a function slows the main generator, so it is just
        // unrolled here.  The weyl generator is not advanced while warming up.


        i = 127;

        for (j = 4 * 128; j > 0; --j) {
          v = X[i + 34 & 127];
          t = X[i = i + 1 & 127];
          v ^= v << 13;
          t ^= t << 17;
          v ^= v >>> 15;
          t ^= t >>> 12;
          X[i] = v ^ t;
        } // Storing state as object members is faster than using closure variables.


        me.w = w;
        me.X = X;
        me.i = i;
      }

      init(me, seed);
    }

    function copy(f, t) {
      t.i = f.i;
      t.w = f.w;
      t.X = f.X.slice();
      return t;
    }

    function impl(seed, opts) {
      if (seed == null) seed = +new Date();

      var xg = new XorGen(seed),
          state = opts && opts.state,
          prng = function () {
        return (xg.next() >>> 0) / 0x100000000;
      };

      prng.double = function () {
        do {
          var top = xg.next() >>> 11,
              bot = (xg.next() >>> 0) / 0x100000000,
              result = (top + bot) / (1 << 21);
        } while (result === 0);

        return result;
      };

      prng.int32 = xg.next;
      prng.quick = prng;

      if (state) {
        if (state.X) copy(state, xg);

        prng.state = function () {
          return copy(xg, {});
        };
      }

      return prng;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function () {
        return impl;
      });
    } else {
      this.xor4096 = impl;
    }
  })(commonjsGlobal, // window object or global
  module, // present in node.js
  typeof undefined == 'function'  // present with an AMD loader
  );
});

var tychei = createCommonjsModule(function (module) {
  // A Javascript implementaion of the "Tyche-i" prng algorithm by
  // Samuel Neves and Filipe Araujo.
  // See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
  (function (global, module, define) {
    function XorGen(seed) {
      var me = this,
          strseed = ''; // Set up generator function.

      me.next = function () {
        var b = me.b,
            c = me.c,
            d = me.d,
            a = me.a;
        b = b << 25 ^ b >>> 7 ^ c;
        c = c - d | 0;
        d = d << 24 ^ d >>> 8 ^ a;
        a = a - b | 0;
        me.b = b = b << 20 ^ b >>> 12 ^ c;
        me.c = c = c - d | 0;
        me.d = d << 16 ^ c >>> 16 ^ a;
        return me.a = a - b | 0;
      };
      /* The following is non-inverted tyche, which has better internal
       * bit diffusion, but which is about 25% slower than tyche-i in JS.
      me.next = function() {
        var a = me.a, b = me.b, c = me.c, d = me.d;
        a = (me.a + me.b | 0) >>> 0;
        d = me.d ^ a; d = d << 16 ^ d >>> 16;
        c = me.c + d | 0;
        b = me.b ^ c; b = b << 12 ^ d >>> 20;
        me.a = a = a + b | 0;
        d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
        me.c = c = c + d | 0;
        b = b ^ c;
        return me.b = (b << 7 ^ b >>> 25);
      }
      */


      me.a = 0;
      me.b = 0;
      me.c = 2654435769 | 0;
      me.d = 1367130551;

      if (seed === Math.floor(seed)) {
        // Integer seed.
        me.a = seed / 0x100000000 | 0;
        me.b = seed | 0;
      } else {
        // String seed.
        strseed += seed;
      } // Mix in string seed, then discard an initial batch of 64 values.


      for (var k = 0; k < strseed.length + 20; k++) {
        me.b ^= strseed.charCodeAt(k) | 0;
        me.next();
      }
    }

    function copy(f, t) {
      t.a = f.a;
      t.b = f.b;
      t.c = f.c;
      t.d = f.d;
      return t;
    }

    function impl(seed, opts) {
      var xg = new XorGen(seed),
          state = opts && opts.state,
          prng = function () {
        return (xg.next() >>> 0) / 0x100000000;
      };

      prng.double = function () {
        do {
          var top = xg.next() >>> 11,
              bot = (xg.next() >>> 0) / 0x100000000,
              result = (top + bot) / (1 << 21);
        } while (result === 0);

        return result;
      };

      prng.int32 = xg.next;
      prng.quick = prng;

      if (state) {
        if (typeof state == 'object') copy(state, xg);

        prng.state = function () {
          return copy(xg, {});
        };
      }

      return prng;
    }

    if (module && module.exports) {
      module.exports = impl;
    } else if (define && define.amd) {
      define(function () {
        return impl;
      });
    } else {
      this.tychei = impl;
    }
  })(commonjsGlobal, module, // present in node.js
  typeof undefined == 'function'  // present with an AMD loader
  );
});

var seedrandom$1 = createCommonjsModule(function (module) {
  /*
  Copyright 2019 David Bau.
  
  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:
  
  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  
  */
  (function (global, pool, math) {
    //
    // The following constants are related to IEEE 754 limits.
    //
    var width = 256,
        // each RC4 output is 0 <= x < 256
    chunks = 6,
        // at least six RC4 outputs for each double
    digits = 52,
        // there are 52 significant digits in a double
    rngname = 'random',
        // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
        significance = math.pow(2, digits),
        overflow = significance * 2,
        mask = width - 1,
        nodecrypto; // node.js crypto module, initialized at the bottom.
    //
    // seedrandom()
    // This is the seedrandom function described above.
    //

    function seedrandom(seed, options, callback) {
      var key = [];
      options = options == true ? {
        entropy: true
      } : options || {}; // Flatten the seed string or build one from local entropy if needed.

      var shortseed = mixkey(flatten(options.entropy ? [seed, tostring(pool)] : seed == null ? autoseed() : seed, 3), key); // Use the seed to initialize an ARC4 generator.

      var arc4 = new ARC4(key); // This function returns a random double in [0, 1) that contains
      // randomness in every bit of the mantissa of the IEEE 754 value.

      var prng = function () {
        var n = arc4.g(chunks),
            // Start with a numerator n < 2 ^ 48
        d = startdenom,
            //   and denominator d = 2 ^ 48.
        x = 0; //   and no 'extra last byte'.

        while (n < significance) {
          // Fill up all significant digits by
          n = (n + x) * width; //   shifting numerator and

          d *= width; //   denominator and generating a

          x = arc4.g(1); //   new least-significant-byte.
        }

        while (n >= overflow) {
          // To avoid rounding up, before adding
          n /= 2; //   last byte, shift everything

          d /= 2; //   right using integer math until

          x >>>= 1; //   we have exactly the desired bits.
        }

        return (n + x) / d; // Form the number within [0, 1).
      };

      prng.int32 = function () {
        return arc4.g(4) | 0;
      };

      prng.quick = function () {
        return arc4.g(4) / 0x100000000;
      };

      prng.double = prng; // Mix the randomness into accumulated entropy.

      mixkey(tostring(arc4.S), pool); // Calling convention: what to return as a function of prng, seed, is_math.

      return (options.pass || callback || function (prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) {
            copy(state, arc4);
          } // Only provide the .state method if requested via options.state.


          prng.state = function () {
            return copy(arc4, {});
          };
        } // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.


        if (is_math_call) {
          math[rngname] = prng;
          return seed;
        } // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(prng, shortseed, 'global' in options ? options.global : this == math, options.state);
    } //
    // ARC4
    //
    // An ARC4 implementation.  The constructor takes a key in the form of
    // an array of at most (width) integers that should be 0 <= x < (width).
    //
    // The g(count) method returns a pseudorandom integer that concatenates
    // the next (count) outputs from ARC4.  Its return value is a number x
    // that is in the range 0 <= x < (width ^ count).
    //


    function ARC4(key) {
      var t,
          keylen = key.length,
          me = this,
          i = 0,
          j = me.i = me.j = 0,
          s = me.S = []; // The empty key [] is treated as [0].

      if (!keylen) {
        key = [keylen++];
      } // Set up S using the standard key scheduling algorithm.


      while (i < width) {
        s[i] = i++;
      }

      for (i = 0; i < width; i++) {
        s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
        s[j] = t;
      } // The "g" method returns the next (count) outputs as one number.


      (me.g = function (count) {
        // Using instance members instead of closure state nearly doubles speed.
        var t,
            r = 0,
            i = me.i,
            j = me.j,
            s = me.S;

        while (count--) {
          t = s[i = mask & i + 1];
          r = r * width + s[mask & (s[i] = s[j = mask & j + t]) + (s[j] = t)];
        }

        me.i = i;
        me.j = j;
        return r; // For robust unpredictability, the function call below automatically
        // discards an initial batch of values.  This is called RC4-drop[256].
        // See http://google.com/search?q=rsa+fluhrer+response&btnI
      })(width);
    } //
    // copy()
    // Copies internal state of ARC4 to or from a plain object.
    //


    function copy(f, t) {
      t.i = f.i;
      t.j = f.j;
      t.S = f.S.slice();
      return t;
    }
    // flatten()
    // Converts an object tree to nested arrays of strings.
    //

    function flatten(obj, depth) {
      var result = [],
          typ = typeof obj,
          prop;

      if (depth && typ == 'object') {
        for (prop in obj) {
          try {
            result.push(flatten(obj[prop], depth - 1));
          } catch (e) {}
        }
      }

      return result.length ? result : typ == 'string' ? obj : obj + '\0';
    } //
    // mixkey()
    // Mixes a string seed into a key that is an array of integers, and
    // returns a shortened string seed that is equivalent to the result key.
    //


    function mixkey(seed, key) {
      var stringseed = seed + '',
          smear,
          j = 0;

      while (j < stringseed.length) {
        key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
      }

      return tostring(key);
    } //
    // autoseed()
    // Returns an object for autoseeding, using window.crypto and Node crypto
    // module if available.
    //


    function autoseed() {
      try {
        var out;

        if (nodecrypto && (out = nodecrypto.randomBytes)) {
          // The use of 'out' to remember randomBytes makes tight minified code.
          out = out(width);
        } else {
          out = new Uint8Array(width);
          (global.crypto || global.msCrypto).getRandomValues(out);
        }

        return tostring(out);
      } catch (e) {
        var browser = global.navigator,
            plugins = browser && browser.plugins;
        return [+new Date(), global, plugins, global.screen, tostring(pool)];
      }
    } //
    // tostring()
    // Converts an array of charcodes to a string
    //


    function tostring(a) {
      return String.fromCharCode.apply(0, a);
    } //
    // When seedrandom.js is loaded, we immediately mix a few bits
    // from the built-in RNG into the entropy pool.  Because we do
    // not want to interfere with deterministic PRNG state later,
    // seedrandom will not call math.random on its own again after
    // initialization.
    //


    mixkey(math.random(), pool); //
    // Nodejs and AMD support: export the implementation as a module using
    // either convention.
    //

    if (module.exports) {
      module.exports = seedrandom; // When in node.js, try using crypto package for autoseeding.

      try {
        nodecrypto = crypto;
      } catch (ex) {}
    } else {
      // When included as a plain script, set up Math.seedrandom global.
      math['seed' + rngname] = seedrandom;
    } // End anonymous scope, and pass initial values.

  })( // global: `self` in browsers (including strict mode and web workers),
  // otherwise `this` in Node and other environments
  typeof self !== 'undefined' ? self : commonjsGlobal, [], // pool: entropy pool starts empty
  Math // math: package containing random, pow, and seedrandom
  );
});

//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.
// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
// The original ARC4-based prng included in this library.
// Period: ~2^1600

seedrandom$1.alea = alea;
seedrandom$1.xor128 = xor128;
seedrandom$1.xorwow = xorwow;
seedrandom$1.xorshift7 = xorshift7;
seedrandom$1.xor4096 = xor4096;
seedrandom$1.tychei = tychei;
var seedrandom = seedrandom$1;

let prng = seedrandom();

function random(i, k, l) {
  const isArray = Array.isArray(arguments[0]);

  if (isArray) {
    const targetArray = arguments[0];
    return targetArray[random(0, targetArray.length - 1, true)];
  } else {
    const min = arguments[0];
    const max = arguments[1];
    const clamp = arguments[2] || false;
    const val = prng() * (max - min) + min;
    return clamp ? Math.round(val) : val;
  }
}
function randomBias(min, max, bias, influence = 0.5) {
  const base = random(min, max);
  const mix = random(0, 1) * influence;
  return base * (1 - mix) + bias * mix;
}
class Quadtree {
  constructor(bounds, maxObjects = 10, maxLevels = 4, level = 0) {
    this.bounds = bounds;
    this.maxObjects = maxObjects;
    this.maxLevels = maxLevels;
    this.level = level;
    this.objects = [];
    this.nodes = [];
  }

  split() {
    const nextLevel = this.level + 1,
          subWidth = this.bounds.width / 2,
          subHeight = this.bounds.height / 2,
          x = this.bounds.x,
          y = this.bounds.y;
    this.nodes[0] = new Quadtree({
      x: x + subWidth,
      y: y,
      width: subWidth,
      height: subHeight
    }, this.maxObjects, this.maxLevels, nextLevel);
    this.nodes[1] = new Quadtree({
      x: x,
      y: y,
      width: subWidth,
      height: subHeight
    }, this.maxObjects, this.maxLevels, nextLevel);
    this.nodes[2] = new Quadtree({
      x: x,
      y: y + subHeight,
      width: subWidth,
      height: subHeight
    }, this.maxObjects, this.maxLevels, nextLevel);
    this.nodes[3] = new Quadtree({
      x: x + subWidth,
      y: y + subHeight,
      width: subWidth,
      height: subHeight
    }, this.maxObjects, this.maxLevels, nextLevel);
  }

  getIndex(pRect) {
    const bounds = this.bounds;
    const indexes = [],
          yMidPoint = bounds.x + bounds.width / 2,
          xMidPoint = bounds.y + bounds.height / 2,
          startIsNorth = pRect.y < xMidPoint,
          startIsWest = pRect.x < yMidPoint,
          endIsEast = pRect.x + pRect.width > yMidPoint,
          endIsSouth = pRect.y + pRect.height > xMidPoint;

    if (startIsNorth && endIsEast) {
      indexes.push(0);
    }

    if (startIsWest && startIsNorth) {
      indexes.push(1);
    }

    if (startIsWest && endIsSouth) {
      indexes.push(2);
    }

    if (endIsEast && endIsSouth) {
      indexes.push(3);
    }

    return indexes;
  }

  insert(pRect) {
    let indexes;

    if (this.nodes.length) {
      indexes = this.getIndex(pRect);

      for (let i = 0; i < indexes.length; i++) {
        this.nodes[indexes[i]].insert(pRect);
      }

      return;
    }

    this.objects.push(pRect);

    if (this.objects.length > this.maxObjects && this.level < this.maxLevels) {
      if (!this.nodes.length) {
        this.split();
      }

      for (let i = 0; i < this.objects.length; i++) {
        indexes = this.getIndex(this.objects[i]);

        for (let j = 0; j < indexes.length; j++) {
          this.nodes[indexes[j]].insert(this.objects[i]);
        }
      }

      this.objects = [];
    }
  }

  retrieve(pRect) {
    const indexes = this.getIndex(pRect);
    let returnObjects = this.objects;

    if (this.nodes.length) {
      for (let i = 0; i < indexes.length; i++) {
        returnObjects = returnObjects.concat(this.nodes[indexes[i]].retrieve(pRect));
      }
    }

    returnObjects = returnObjects.filter((item, index) => {
      return returnObjects.indexOf(item) >= index;
    });
    return returnObjects;
  }

  clear() {
    this.objects = [];

    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes.length) {
        this.nodes[i].clear();
      }
    }

    this.nodes = [];
  }

}

const prefix = 'gen-grid';
const props = createProperties(prefix, [{
  name: 'points',
  type: 'number',
  default: 100
}, {
  name: 'gap',
  type: 'number',
  default: 5
}, {
  name: 'maxObjects',
  type: 'number',
  default: 10
}, {
  name: 'maxLevels',
  type: 'number',
  default: 4
}]);

function getGridArea(bounds, colSize, rowSize) {
  return {
    col: {
      start: bounds.x / colSize,
      end: (bounds.x + bounds.width) / colSize
    },
    row: {
      start: bounds.y / rowSize,
      end: (bounds.y + bounds.height) / rowSize
    }
  };
}

function getNodes(node) {
  const nodes = [];

  (function r(node) {
    if (node.nodes.length === 0) {
      nodes.push(node);
    } else {
      node.nodes.forEach(n => r(n));
    }
  })(node);

  return nodes;
}

function stringToHash(string) {
  let hash = 0;
  if (string.length == 0) return hash;

  for (let i = 0; i < string.length; i++) {
    let char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return hash;
}

function createOrGetQuadtree(options) {
  let identHash = 0; // @ts-ignore

  Object.values(options).forEach(i => identHash += stringToHash(i.toString()));

  if (layouts.has(identHash)) {
    console.log(layouts.get(identHash), 'cache');
    return layouts.get(identHash);
  } else {
    const focus = {
      x: random(0, options.width),
      y: random(0, options.height)
    };
    const points = [...Array(options.points)].map(() => {
      return {
        x: randomBias(0, options.width, focus.x, 1),
        y: randomBias(0, options.height, focus.y, 1),
        width: 1,
        height: 1
      };
    });
    const qt = new Quadtree({
      x: 0,
      y: 0,
      width: options.width,
      height: options.height
    }, options.maxObjects, options.maxLevels);
    points.forEach(point => qt.insert(point));
    layouts.set(identHash, qt);
    console.log(qt, 'first');
    return qt;
  }
}

const layouts = new Map();
/**
 * CSS Layout Worklet to produce a grid-like layout based on Quadtrees
 *
 * @remarks
 *
 * @alpha
 */

let QuadtreeLayout = class QuadtreeLayout {
  static get inputProperties() {
    return props.variableStrings;
  }

  static get childInputProperties() {
    return [];
  }

  intrinsicSizes(children, edges, styleMap) {
    return __awaiter(this, void 0, void 0, function* () {
      const childrenSizes = yield Promise.all(children.map(child => {
        return child.intrinsicSizes();
      }));
      const maxContentSize = childrenSizes.reduce((sum, childSizes) => {
        return sum + childSizes.maxContentSize;
      }, 0) + edges.inline;
      const minContentSize = childrenSizes.reduce((sum, childSizes) => {
        return sum + childSizes.minContentSize;
      }, 0) + edges.inline;
      return {
        minContentSize,
        maxContentSize
      };
    });
  }

  layout(children, edges, constraints, styleMap, breakToken) {
    return __awaiter(this, void 0, void 0, function* () {
      const config = {};
      props.propsMap.forEach(prop => config[prop.name] = prop.value(styleMap.get(prop.variable)) | prop.default);
      console.log(config);
      const availableInlineSize = constraints.fixedInlineSize - edges.inline;
      const availableBlockSize = constraints.fixedBlockSize ? constraints.fixedBlockSize - edges.block : availableInlineSize;
      const qt = createOrGetQuadtree({
        width: availableInlineSize,
        height: availableBlockSize,
        maxObjects: config.maxObjects,
        maxLevels: config.maxLevels,
        points: config.points
      }); // TODO: move all grid code to other function above.

      const maxSubdivisions = Math.pow(2, config.maxLevels);
      const colSize = availableInlineSize / maxSubdivisions;
      const rowSize = availableBlockSize / maxSubdivisions;
      const grid = {
        width: availableInlineSize,
        height: availableBlockSize,
        cols: maxSubdivisions,
        rows: maxSubdivisions,
        areas: getNodes(qt).map(({
          bounds
        }) => {
          return Object.assign({
            x: bounds.x + config.gap,
            y: bounds.y + config.gap,
            width: bounds.width - config.gap,
            height: bounds.height - config.gap
          }, getGridArea(bounds, colSize, rowSize));
        })
      }; // const unconstrainedSizes: number[] = [];
      // const unconstrainedChildFragments = await Promise.all(
      // 	children.map(child =>
      // 		child.layoutNextFragment({
      // 			availableInlineSize,
      // 			availableBlockSize
      // 		})
      // 	)
      // );
      // const totalSize = unconstrainedChildFragments.reduce((sum, fragment, idx) => {
      // 	unconstrainedSizes[idx] = fragment.inlineSize;
      // 	return sum + fragment.inlineSize;
      // }, 0);
      // const remainingSpace = Math.max(0, availableInlineSize - totalSize);
      // const extraSpace = remainingSpace / children.length;

      const childFragments = yield Promise.all(children.map((child, i) => child.layoutNextFragment({
        fixedInlineSize: grid.areas[i].width,
        fixedBlockSize: grid.areas[i].height
      })));

      for (let fragment of childFragments) {
        const index = childFragments.indexOf(fragment);
        const area = grid.areas[index];
        fragment.inlineOffset = area.x;
        fragment.blockOffset = area.y;
      }

      return {
        autoBlockSize: 0,
        childFragments
      };
    });
  }

};
QuadtreeLayout.LayoutOptions = {
  childDisplay: ChildDisplayType.normal,
  sizing: LayoutSizingMode.blockLike
};
QuadtreeLayout = __decorate([CSSLayout('quadtree')], QuadtreeLayout);

export { QuadtreeLayout };
