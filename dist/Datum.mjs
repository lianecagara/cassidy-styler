var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/Datum.ts
import fs from "fs/promises";
var Datum;
((Datum2) => {
  function readPackageJson(pkgPath = "./package.json") {
    return __async(this, null, function* () {
      try {
        const data = yield fs.readFile(pkgPath, "utf-8");
        return JSON.parse(data);
      } catch (e) {
        return null;
      }
    });
  }
  Datum2.readPackageJson = readPackageJson;
  function getPackageName(pkgPath = "./package.json") {
    return __async(this, null, function* () {
      var _a;
      const pkg = yield readPackageJson(pkgPath);
      return (_a = pkg == null ? void 0 : pkg.name) != null ? _a : null;
    });
  }
  Datum2.getPackageName = getPackageName;
  function getPackageVersion(pkgPath = "./package.json") {
    return __async(this, null, function* () {
      var _a;
      const pkg = yield readPackageJson(pkgPath);
      return (_a = pkg == null ? void 0 : pkg.version) != null ? _a : null;
    });
  }
  Datum2.getPackageVersion = getPackageVersion;
  function updatePackageJson(pkgPath, updater) {
    return __async(this, null, function* () {
      const pkg = (yield readPackageJson(pkgPath)) || {};
      const updated = updater(pkg);
      yield fs.writeFile(pkgPath, JSON.stringify(updated, null, 2));
    });
  }
  Datum2.updatePackageJson = updatePackageJson;
  function parseJson(jsonStr) {
    try {
      return JSON.parse(jsonStr);
    } catch (e) {
      return null;
    }
  }
  Datum2.parseJson = parseJson;
  function stringifyJson(obj, pretty = false) {
    return pretty ? JSON.stringify(obj, null, 2) : JSON.stringify(obj);
  }
  Datum2.stringifyJson = stringifyJson;
  function validateSchema(obj, schema) {
    if (typeof schema === "string") {
      return typeof obj === schema;
    }
    if (typeof schema === "function") {
      return obj instanceof schema;
    }
    if (typeof schema === "object" && schema !== null && typeof obj === "object" && obj !== null) {
      for (const key in schema) {
        if (!validateSchema(obj[key], schema[key])) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  Datum2.validateSchema = validateSchema;
  function matchesField(value, condition) {
    if (condition instanceof RegExp) {
      return typeof value === "string" && condition.test(value);
    }
    if (typeof condition !== "object" || condition === null) {
      return value === condition;
    }
    if (typeof value === "object" && value !== null && !Array.isArray(value) && !("$eq" in condition || "$ne" in condition || "$gt" in condition || "$gte" in condition || "$lt" in condition || "$lte" in condition || "$in" in condition || "$nin" in condition || "$regex" in condition)) {
      for (const key in condition) {
        if (!matchesField(value[key], condition[key])) {
          return false;
        }
      }
      return true;
    }
    for (const op in condition) {
      const condVal = condition[op];
      switch (op) {
        case "$eq":
          if (value !== condVal) return false;
          break;
        case "$ne":
          if (value === condVal) return false;
          break;
        case "$gt":
          if (!(value > condVal)) return false;
          break;
        case "$gte":
          if (!(value >= condVal)) return false;
          break;
        case "$lt":
          if (!(value < condVal)) return false;
          break;
        case "$lte":
          if (!(value <= condVal)) return false;
          break;
        case "$in":
          if (!Array.isArray(condVal) || !condVal.includes(value)) return false;
          break;
        case "$nin":
          if (Array.isArray(condVal) && condVal.includes(value)) return false;
          break;
        case "$regex":
          if (typeof value !== "string" || !condVal.test(value)) return false;
          break;
        default:
          return false;
      }
    }
    return true;
  }
  function queryData(data, query) {
    const items = data instanceof Map ? Array.from(data.values()) : Object.values(data);
    return items.filter((item) => {
      for (const key in query) {
        const condition = query[key];
        const val = item[key];
        if (!matchesField(val, condition)) {
          return false;
        }
      }
      return true;
    });
  }
  Datum2.queryData = queryData;
  function keyOf(value, parentObj) {
    const keys = Object.entries(parentObj).filter(([_, v]) => v === value).map(([k]) => k);
    if (keys.length === 0) return null;
    return keys.length === 1 ? keys[0] : keys;
  }
  Datum2.keyOf = keyOf;
  function valueOf(key, parentObj) {
    if (Array.isArray(key)) {
      const values = key.map((k) => parentObj[k]).filter((v) => v !== void 0);
      if (values.length === 0) return null;
      return values;
    }
    const val = parentObj[key];
    return val !== void 0 ? val : null;
  }
  Datum2.valueOf = valueOf;
  function toUniqueArray(array, callback) {
    const seen = /* @__PURE__ */ new Set();
    const result = [];
    for (const item of array) {
      const key = callback ? callback(item) : item;
      if (!seen.has(key)) {
        seen.add(key);
        result.push(item);
      }
    }
    return result;
  }
  Datum2.toUniqueArray = toUniqueArray;
  function decodeGameID(input) {
    input = `${input}`;
    input = input.replace(Datum2.GAME_ID_PREFIX, "");
    const pad = input.length % 4;
    if (pad > 0) {
      input += "=".repeat(4 - pad);
    }
    try {
      return Buffer.from(input, "base64").toString("utf8").replaceAll("custom_", "");
    } catch (e) {
      return input;
    }
  }
  Datum2.decodeGameID = decodeGameID;
  Datum2.GAME_ID_PREFIX = "web:";
  function encodeGameID(input) {
    input = `${input}`;
    try {
      if (input.startsWith(Datum2.GAME_ID_PREFIX)) {
        return input;
      }
      const encodedIP = Buffer.from(input.replaceAll("custom_", "")).toString("base64").replace(/=/g, "");
      return `${Datum2.GAME_ID_PREFIX}${encodedIP}`;
    } catch (error) {
      return input;
    }
  }
  Datum2.encodeGameID = encodeGameID;
  function encodeGameIDLegacy(input) {
    try {
      const encodedIP = Buffer.from(input).toString("base64").replace(/[+/=]/g, (match) => {
        var _a;
        return (_a = { "+": "0", "/": "1", "=": "" }[match]) != null ? _a : "";
      });
      return `${Datum2.GAME_ID_PREFIX}${encodedIP}`;
    } catch (error) {
      return input;
    }
  }
  Datum2.encodeGameIDLegacy = encodeGameIDLegacy;
  function makeMapPlain(plainObj = {}) {
    const internalMap = new Map(
      Object.entries(plainObj)
    );
    const target = Object.create(Object.getPrototypeOf(plainObj));
    const handler = {
      get(target2, prop, receiver) {
        if (prop === Symbol.iterator) {
          return function* () {
            for (const [key, value] of internalMap) {
              yield [key, value];
            }
          };
        }
        if (typeof prop === "symbol" || prop in Object.prototype) {
          return Reflect.get(target2, prop, receiver);
        }
        return internalMap.get(prop);
      },
      set(_target, prop, value, _receiver) {
        internalMap.set(prop, value);
        return true;
      },
      deleteProperty(_target, prop) {
        return internalMap.delete(prop);
      },
      has(_target, prop) {
        return internalMap.has(prop);
      },
      ownKeys(_target) {
        return Array.from(internalMap.keys());
      },
      getOwnPropertyDescriptor(_target, prop) {
        if (internalMap.has(prop)) {
          return {
            value: internalMap.get(prop),
            writable: true,
            enumerable: true,
            configurable: true
          };
        }
        return void 0;
      },
      defineProperty(_target, prop, descriptor) {
        if ("value" in descriptor && descriptor.value !== void 0) {
          internalMap.set(prop, descriptor.value);
        } else if (!descriptor.get && !descriptor.set) {
          internalMap.delete(prop);
        }
        return true;
      },
      getPrototypeOf(target2) {
        return Object.getPrototypeOf(target2);
      },
      setPrototypeOf(target2, proto) {
        Object.setPrototypeOf(target2, proto);
        return true;
      },
      isExtensible(_target) {
        return true;
      },
      preventExtensions(_target) {
        return false;
      }
    };
    const proxied = new Proxy(target, handler);
    return { map: internalMap, proxied };
  }
  Datum2.makeMapPlain = makeMapPlain;
  function shuffle(inp) {
    if (!Array.isArray(inp)) {
      return Object.fromEntries(shuffle(Object.entries(inp)));
    } else {
      return fisherYates(inp);
    }
  }
  Datum2.shuffle = shuffle;
  function randomInt(min, max) {
    if (min > max) [min, max] = [max, min];
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  Datum2.randomInt = randomInt;
  function fisherYates(array) {
    const a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  Datum2.fisherYates = fisherYates;
  function normalize(input) {
    if (Array.isArray(input)) {
      return input.map(normalize);
    } else if (input !== null && typeof input === "object") {
      const sorted = Object.keys(input).sort().reduce((acc, key) => {
        acc[key] = normalize(input[key]);
        return acc;
      }, {});
      return sorted;
    }
    return input;
  }
  Datum2.normalize = normalize;
  function conform(obj, schema) {
    const errors = [];
    for (const key in schema) {
      if (!schema[key](obj[key])) {
        errors.push(`Key '${key}' failed validation.`);
      }
    }
    return [errors.length === 0, errors];
  }
  Datum2.conform = conform;
  function pick(obj, keys) {
    const result = {};
    for (const key of keys) {
      if (key in obj) result[key] = obj[key];
    }
    return result;
  }
  Datum2.pick = pick;
  function infer(value) {
    if (Array.isArray(value)) return "array";
    if (value === null) return "null";
    return typeof value;
  }
  Datum2.infer = infer;
  function trace(obj, target, path = []) {
    if (obj === target) return path;
    if (typeof obj !== "object" || obj === null) return null;
    for (const key in obj) {
      const result = trace(obj[key], target, [...path, key]);
      if (result) return result;
    }
    return null;
  }
  Datum2.trace = trace;
  function index(array, key) {
    return array.reduce((acc, item) => {
      const id = String(item[key]);
      acc[id] = item;
      return acc;
    }, {});
  }
  Datum2.index = index;
  function remap(obj, mapper) {
    var _a;
    const result = {};
    for (const key in obj) {
      const newKey = typeof mapper === "function" ? mapper(key, obj[key]) : (_a = mapper[key]) != null ? _a : key;
      result[newKey] = obj[key];
    }
    return result;
  }
  Datum2.remap = remap;
  function assert(condition, message = "Assertion failed") {
    if (!condition) {
      throw new Error(message);
    }
  }
  Datum2.assert = assert;
  function sample(array) {
    if (array.length === 0) return null;
    const index2 = Math.floor(Math.random() * array.length);
    return array[index2];
  }
  Datum2.sample = sample;
})(Datum || (Datum = {}));
export {
  Datum
};
//# sourceMappingURL=Datum.mjs.map