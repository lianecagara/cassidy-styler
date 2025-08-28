var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
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

// src/font.ts
var font_exports = {};
__export(font_exports, {
  FontTypes: () => FontTypes,
  allFonts: () => allFonts,
  applyFonts: () => applyFonts,
  default: () => font_default,
  fontMap: () => fontMap,
  fonts: () => fonts2
});
var fonts = {
  widespace: {
    a: "\uFF41",
    b: "\uFF42",
    c: "\uFF43",
    d: "\uFF44",
    e: "\uFF45",
    f: "\uFF46",
    g: "\uFF47",
    h: "\uFF48",
    i: "\uFF49",
    j: "\uFF4A",
    k: "\uFF4B",
    l: "\uFF4C",
    m: "\uFF4D",
    n: "\uFF4E",
    o: "\uFF4F",
    p: "\uFF50",
    q: "\uFF51",
    r: "\uFF52",
    s: "\uFF53",
    t: "\uFF54",
    u: "\uFF55",
    v: "\uFF56",
    w: "\uFF57",
    x: "\uFF58",
    y: "\uFF59",
    z: "\uFF5A",
    A: "\uFF21",
    B: "\uFF22",
    C: "\uFF23",
    D: "\uFF24",
    E: "\uFF25",
    F: "\uFF26",
    G: "\uFF27",
    H: "\uFF28",
    I: "\uFF29",
    J: "\uFF2A",
    K: "\uFF2B",
    L: "\uFF2C",
    M: "\uFF2D",
    N: "\uFF2E",
    O: "\uFF2F",
    P: "\uFF30",
    Q: "\uFF31",
    R: "\uFF32",
    S: "\uFF33",
    T: "\uFF34",
    U: "\uFF35",
    V: "\uFF36",
    W: "\uFF37",
    X: "\uFF38",
    Y: "\uFF39",
    Z: "\uFF3A",
    " ": " "
  },
  serif: {
    a: "\u{1D41A}",
    b: "\u{1D41B}",
    c: "\u{1D41C}",
    d: "\u{1D41D}",
    e: "\u{1D41E}",
    f: "\u{1D41F}",
    g: "\u{1D420}",
    h: "\u{1D421}",
    i: "\u{1D422}",
    j: "\u{1D423}",
    k: "\u{1D424}",
    l: "\u{1D425}",
    m: "\u{1D426}",
    n: "\u{1D427}",
    o: "\u{1D428}",
    p: "\u{1D429}",
    q: "\u{1D42A}",
    r: "\u{1D42B}",
    s: "\u{1D42C}",
    t: "\u{1D42D}",
    u: "\u{1D42E}",
    v: "\u{1D42F}",
    w: "\u{1D430}",
    x: "\u{1D431}",
    y: "\u{1D432}",
    z: "\u{1D433}",
    A: "\u{1D400}",
    B: "\u{1D401}",
    C: "\u{1D402}",
    D: "\u{1D403}",
    E: "\u{1D404}",
    F: "\u{1D405}",
    G: "\u{1D406}",
    H: "\u{1D407}",
    I: "\u{1D408}",
    J: "\u{1D409}",
    K: "\u{1D40A}",
    L: "\u{1D40B}",
    M: "\u{1D40C}",
    N: "\u{1D40D}",
    O: "\u{1D40E}",
    P: "\u{1D40F}",
    Q: "\u{1D410}",
    R: "\u{1D411}",
    S: "\u{1D412}",
    T: "\u{1D413}",
    U: "\u{1D414}",
    V: "\u{1D415}",
    W: "\u{1D416}",
    X: "\u{1D417}",
    Y: "\u{1D418}",
    Z: "\u{1D419}",
    " ": " "
  },
  handwriting: {
    a: "\u{1D4EA}",
    b: "\u{1D4EB}",
    c: "\u{1D4EC}",
    d: "\u{1D4ED}",
    e: "\u{1D4EE}",
    f: "\u{1D4EF}",
    g: "\u{1D4F0}",
    h: "\u{1D4F1}",
    i: "\u{1D4F2}",
    j: "\u{1D4F3}",
    k: "\u{1D4F4}",
    l: "\u{1D4F5}",
    m: "\u{1D4F6}",
    n: "\u{1D4F7}",
    o: "\u{1D4F8}",
    p: "\u{1D4F9}",
    q: "\u{1D4FA}",
    r: "\u{1D4FB}",
    s: "\u{1D4FC}",
    t: "\u{1D4FD}",
    u: "\u{1D4FE}",
    v: "\u{1D4FF}",
    w: "\u{1D500}",
    x: "\u{1D501}",
    y: "\u{1D502}",
    z: "\u{1D503}",
    A: "\u{1D4D0}",
    B: "\u{1D4D1}",
    C: "\u{1D4D2}",
    D: "\u{1D4D3}",
    E: "\u{1D4D4}",
    F: "\u{1D4D5}",
    G: "\u{1D4D6}",
    H: "\u{1D4D7}",
    I: "\u{1D4D8}",
    J: "\u{1D4D9}",
    K: "\u{1D4DA}",
    L: "\u{1D4DB}",
    M: "\u{1D4DC}",
    N: "\u{1D4DD}",
    O: "\u{1D4DE}",
    P: "\u{1D4DF}",
    Q: "\u{1D4E0}",
    R: "\u{1D4E1}",
    S: "\u{1D4E2}",
    T: "\u{1D4E3}",
    U: "\u{1D4E4}",
    V: "\u{1D4E5}",
    W: "\u{1D4E6}",
    X: "\u{1D4E7}",
    Y: "\u{1D4E8}",
    Z: "\u{1D4E9}",
    " ": " "
  },
  scriptbold: {
    a: "\u{1D482}",
    b: "\u{1D483}",
    c: "\u{1D484}",
    d: "\u{1D485}",
    e: "\u{1D486}",
    f: "\u{1D487}",
    g: "\u{1D488}",
    h: "\u{1D489}",
    i: "\u{1D48A}",
    j: "\u{1D48B}",
    k: "\u{1D48C}",
    l: "\u{1D48D}",
    m: "\u{1D48E}",
    n: "\u{1D48F}",
    o: "\u{1D490}",
    p: "\u{1D491}",
    q: "\u{1D492}",
    r: "\u{1D493}",
    s: "\u{1D494}",
    t: "\u{1D495}",
    u: "\u{1D496}",
    v: "\u{1D497}",
    w: "\u{1D498}",
    x: "\u{1D499}",
    y: "\u{1D49A}",
    z: "\u{1D49B}",
    A: "\u{1D468}",
    B: "\u{1D469}",
    C: "\u{1D46A}",
    D: "\u{1D46B}",
    E: "\u{1D46C}",
    F: "\u{1D46D}",
    G: "\u{1D46E}",
    H: "\u{1D46F}",
    I: "\u{1D470}",
    J: "\u{1D471}",
    K: "\u{1D472}",
    L: "\u{1D473}",
    M: "\u{1D474}",
    N: "\u{1D475}",
    O: "\u{1D476}",
    P: "\u{1D477}",
    Q: "\u{1D478}",
    R: "\u{1D479}",
    S: "\u{1D47A}",
    T: "\u{1D47B}",
    U: "\u{1D47C}",
    V: "\u{1D47D}",
    W: "\u{1D47E}",
    X: "\u{1D47F}",
    Y: "\u{1D480}",
    Z: "\u{1D481}",
    " ": " "
  },
  script: {
    a: "\u{1D44E}",
    b: "\u{1D44F}",
    c: "\u{1D450}",
    d: "\u{1D451}",
    e: "\u{1D452}",
    f: "\u{1D453}",
    g: "\u{1D454}",
    h: "\u210E",
    i: "\u{1D456}",
    j: "\u{1D457}",
    k: "\u{1D458}",
    l: "\u{1D459}",
    m: "\u{1D45A}",
    n: "\u{1D45B}",
    o: "\u{1D45C}",
    p: "\u{1D45D}",
    q: "\u{1D45E}",
    r: "\u{1D45F}",
    s: "\u{1D460}",
    t: "\u{1D461}",
    u: "\u{1D462}",
    v: "\u{1D463}",
    w: "\u{1D464}",
    x: "\u{1D465}",
    y: "\u{1D466}",
    z: "\u{1D467}",
    A: "\u{1D434}",
    B: "\u{1D435}",
    C: "\u{1D436}",
    D: "\u{1D437}",
    E: "\u{1D438}",
    F: "\u{1D439}",
    G: "\u{1D43A}",
    H: "\u{1D43B}",
    I: "\u{1D43C}",
    J: "\u{1D43D}",
    K: "\u{1D43E}",
    L: "\u{1D43F}",
    M: "\u{1D440}",
    N: "\u{1D441}",
    O: "\u{1D442}",
    P: "\u{1D443}",
    Q: "\u{1D444}",
    R: "\u{1D445}",
    S: "\u{1D446}",
    T: "\u{1D447}",
    U: "\u{1D448}",
    V: "\u{1D449}",
    W: "\u{1D44A}",
    X: "\u{1D44B}",
    Y: "\u{1D44C}",
    Z: "\u{1D44D}",
    " ": " "
  },
  typewriter: {
    a: "\u{1D68A}",
    b: "\u{1D68B}",
    c: "\u{1D68C}",
    d: "\u{1D68D}",
    e: "\u{1D68E}",
    f: "\u{1D68F}",
    g: "\u{1D690}",
    h: "\u{1D691}",
    i: "\u{1D692}",
    j: "\u{1D693}",
    k: "\u{1D694}",
    l: "\u{1D695}",
    m: "\u{1D696}",
    n: "\u{1D697}",
    o: "\u{1D698}",
    p: "\u{1D699}",
    q: "\u{1D69A}",
    r: "\u{1D69B}",
    s: "\u{1D69C}",
    t: "\u{1D69D}",
    u: "\u{1D69E}",
    v: "\u{1D69F}",
    w: "\u{1D6A0}",
    x: "\u{1D6A1}",
    y: "\u{1D6A2}",
    z: "\u{1D6A3}",
    A: "\u{1D670}",
    B: "\u{1D671}",
    C: "\u{1D672}",
    D: "\u{1D673}",
    E: "\u{1D674}",
    F: "\u{1D675}",
    G: "\u{1D676}",
    H: "\u{1D677}",
    I: "\u{1D678}",
    J: "\u{1D679}",
    K: "\u{1D67A}",
    L: "\u{1D67B}",
    M: "\u{1D67C}",
    N: "\u{1D67D}",
    O: "\u{1D67E}",
    P: "\u{1D67F}",
    Q: "\u{1D680}",
    R: "\u{1D681}",
    S: "\u{1D682}",
    T: "\u{1D683}",
    U: "\u{1D684}",
    V: "\u{1D685}",
    W: "\u{1D686}",
    X: "\u{1D687}",
    Y: "\u{1D688}",
    Z: "\u{1D689}",
    "1": "\u{1D7F7}",
    "2": "\u{1D7F8}",
    "3": "\u{1D7F9}",
    "4": "\u{1D7FA}",
    "5": "\u{1D7FB}",
    "6": "\u{1D7FC}",
    "7": "\u{1D7FD}",
    "8": "\u{1D7FE}",
    "9": "\u{1D7FF}",
    "0": "\u{1D7F6}",
    " ": " "
  },
  bold: {
    0: "\u{1D7EC}",
    1: "\u{1D7ED}",
    2: "\u{1D7EE}",
    3: "\u{1D7EF}",
    4: "\u{1D7F0}",
    5: "\u{1D7F1}",
    6: "\u{1D7F2}",
    7: "\u{1D7F3}",
    8: "\u{1D7F4}",
    9: "\u{1D7F5}",
    a: "\u{1D5EE}",
    b: "\u{1D5EF}",
    c: "\u{1D5F0}",
    d: "\u{1D5F1}",
    e: "\u{1D5F2}",
    f: "\u{1D5F3}",
    g: "\u{1D5F4}",
    h: "\u{1D5F5}",
    i: "\u{1D5F6}",
    j: "\u{1D5F7}",
    k: "\u{1D5F8}",
    l: "\u{1D5F9}",
    m: "\u{1D5FA}",
    n: "\u{1D5FB}",
    o: "\u{1D5FC}",
    p: "\u{1D5FD}",
    q: "\u{1D5FE}",
    r: "\u{1D5FF}",
    s: "\u{1D600}",
    t: "\u{1D601}",
    u: "\u{1D602}",
    v: "\u{1D603}",
    w: "\u{1D604}",
    x: "\u{1D605}",
    y: "\u{1D606}",
    z: "\u{1D607}",
    A: "\u{1D5D4}",
    B: "\u{1D5D5}",
    C: "\u{1D5D6}",
    D: "\u{1D5D7}",
    E: "\u{1D5D8}",
    F: "\u{1D5D9}",
    G: "\u{1D5DA}",
    H: "\u{1D5DB}",
    I: "\u{1D5DC}",
    J: "\u{1D5DD}",
    K: "\u{1D5DE}",
    L: "\u{1D5DF}",
    M: "\u{1D5E0}",
    N: "\u{1D5E1}",
    O: "\u{1D5E2}",
    P: "\u{1D5E3}",
    Q: "\u{1D5E4}",
    R: "\u{1D5E5}",
    S: "\u{1D5E6}",
    T: "\u{1D5E7}",
    U: "\u{1D5E8}",
    V: "\u{1D5E9}",
    W: "\u{1D5EA}",
    X: "\u{1D5EB}",
    Y: "\u{1D5EC}",
    Z: "\u{1D5ED}"
  },
  fancy: {
    0: "\u{1D7E2}",
    1: "\u{1D7E3}",
    2: "\u{1D7E4}",
    3: "\u{1D7E5}",
    4: "\u{1D7E6}",
    5: "\u{1D7E7}",
    6: "\u{1D7E8}",
    7: "\u{1D7E9}",
    8: "\u{1D7EA}",
    9: "\u{1D7EB}",
    a: "\u{1D5BA}",
    b: "\u{1D5BB}",
    c: "\u{1D5BC}",
    d: "\u{1D5BD}",
    e: "\u{1D5BE}",
    f: "\u{1D5BF}",
    g: "\u{1D5C0}",
    h: "\u{1D5C1}",
    i: "\u{1D5C2}",
    j: "\u{1D5C3}",
    k: "\u{1D5C4}",
    l: "\u{1D5C5}",
    m: "\u{1D5C6}",
    n: "\u{1D5C7}",
    o: "\u{1D5C8}",
    p: "\u{1D5C9}",
    q: "\u{1D5CA}",
    r: "\u{1D5CB}",
    s: "\u{1D5CC}",
    t: "\u{1D5CD}",
    u: "\u{1D5CE}",
    v: "\u{1D5CF}",
    w: "\u{1D5D0}",
    x: "\u{1D5D1}",
    y: "\u{1D5D2}",
    z: "\u{1D5D3}",
    A: "\u{1D5A0}",
    B: "\u{1D5A1}",
    C: "\u{1D5A2}",
    D: "\u{1D5A3}",
    E: "\u{1D5A4}",
    F: "\u{1D5A5}",
    G: "\u{1D5A6}",
    H: "\u{1D5A7}",
    I: "\u{1D5A8}",
    J: "\u{1D5A9}",
    K: "\u{1D5AA}",
    L: "\u{1D5AB}",
    M: "\u{1D5AC}",
    N: "\u{1D5AD}",
    O: "\u{1D5AE}",
    P: "\u{1D5AF}",
    Q: "\u{1D5B0}",
    R: "\u{1D5B1}",
    S: "\u{1D5B2}",
    T: "\u{1D5B3}",
    U: "\u{1D5B4}",
    V: "\u{1D5B5}",
    W: "\u{1D5B6}",
    X: "\u{1D5B7}",
    Y: "\u{1D5B8}",
    Z: "\u{1D5B9}"
  },
  get redux() {
    return __spreadProps(__spreadValues({}, this.fancy), {
      a: "\u1972",
      b: "\u1472",
      c: "\u1974",
      e: "\u1971",
      f: "\u{1D5BF}",
      h: "\u04BB",
      j: "\u0237",
      l: "\u1963",
      n: "\u1952",
      o: "\u1946",
      p: "\u2374",
      q: "\u{1D5CA}",
      t: "\u{1D5CD}",
      u: "\u1959",
      v: "\u194E",
      w: "\u1955",
      x: "\u194A"
    });
  },
  moody: {
    0: "\u{1D7F6}",
    1: "\u{1D7F7}",
    2: "\u{1D7F8}",
    3: "\u{1D7F9}",
    4: "\u{1D7FA}",
    5: "\u{1D7FB}",
    6: "\u{1D7FC}",
    7: "\u{1D7FD}",
    8: "\u{1D7FE}",
    9: "\u{1D7FF}",
    a: "\u{1D68A}",
    b: "\u{1D68B}",
    c: "\u{1D68C}",
    d: "\u{1D68D}",
    e: "\u{1D68E}",
    f: "\u{1D68F}",
    g: "\u{1D690}",
    h: "\u{1D691}",
    i: "\u{1D692}",
    j: "\u{1D693}",
    k: "\u{1D694}",
    l: "\u{1D695}",
    m: "\u{1D696}",
    n: "\u{1D697}",
    o: "\u{1D698}",
    p: "\u{1D699}",
    q: "\u{1D69A}",
    r: "\u{1D69B}",
    s: "\u{1D69C}",
    t: "\u{1D69D}",
    u: "\u{1D69E}",
    v: "\u{1D69F}",
    w: "\u{1D6A0}",
    x: "\u{1D6A1}",
    y: "\u{1D6A2}",
    z: "\u{1D6A3}",
    A: "\u{1D400}",
    B: "\u{1D401}",
    C: "\u{1D402}",
    D: "\u{1D403}",
    E: "\u{1D404}",
    F: "\u{1D405}",
    G: "\u{1D406}",
    H: "\u{1D407}",
    I: "\u{1D408}",
    J: "\u{1D409}",
    K: "\u{1D40A}",
    L: "\u{1D40B}",
    M: "\u{1D40C}",
    N: "\u{1D40D}",
    O: "\u{1D40E}",
    P: "\u{1D40F}",
    Q: "\u{1D410}",
    R: "\u{1D411}",
    S: "\u{1D412}",
    T: "\u{1D413}",
    U: "\u{1D414}",
    V: "\u{1D415}",
    W: "\u{1D416}",
    X: "\u{1D417}",
    Y: "\u{1D418}",
    Z: "\u{1D419}"
  },
  none: {},
  bold_italic: {
    A: "\u{1D63C}",
    B: "\u{1D63D}",
    C: "\u{1D63E}",
    D: "\u{1D63F}",
    E: "\u{1D640}",
    F: "\u{1D641}",
    G: "\u{1D642}",
    H: "\u{1D643}",
    I: "\u{1D644}",
    J: "\u{1D645}",
    K: "\u{1D646}",
    L: "\u{1D647}",
    M: "\u{1D648}",
    N: "\u{1D649}",
    O: "\u{1D64A}",
    P: "\u{1D64B}",
    Q: "\u{1D64C}",
    R: "\u{1D64D}",
    S: "\u{1D64E}",
    T: "\u{1D64F}",
    U: "\u{1D650}",
    V: "\u{1D651}",
    W: "\u{1D652}",
    X: "\u{1D653}",
    Y: "\u{1D654}",
    Z: "\u{1D655}",
    a: "\u{1D656}",
    b: "\u{1D657}",
    c: "\u{1D658}",
    d: "\u{1D659}",
    e: "\u{1D65A}",
    f: "\u{1D65B}",
    g: "\u{1D65C}",
    h: "\u{1D65D}",
    i: "\u{1D65E}",
    j: "\u{1D65F}",
    k: "\u{1D660}",
    l: "\u{1D661}",
    m: "\u{1D662}",
    n: "\u{1D663}",
    o: "\u{1D664}",
    p: "\u{1D665}",
    q: "\u{1D666}",
    r: "\u{1D667}",
    s: "\u{1D668}",
    t: "\u{1D669}",
    u: "\u{1D66A}",
    v: "\u{1D66B}",
    w: "\u{1D66C}",
    x: "\u{1D66D}",
    y: "\u{1D66E}",
    z: "\u{1D66F}",
    0: "\u{1D7EC}",
    1: "\u{1D7ED}",
    2: "\u{1D7EE}",
    3: "\u{1D7EF}",
    4: "\u{1D7F0}",
    5: "\u{1D7F1}",
    6: "\u{1D7F2}",
    7: "\u{1D7F3}",
    8: "\u{1D7F4}",
    9: "\u{1D7F5}"
  },
  fancy_italic: {
    A: "\u{1D608}",
    B: "\u{1D609}",
    C: "\u{1D60A}",
    D: "\u{1D60B}",
    E: "\u{1D60C}",
    F: "\u{1D60D}",
    G: "\u{1D60E}",
    H: "\u{1D60F}",
    I: "\u{1D610}",
    J: "\u{1D611}",
    K: "\u{1D612}",
    L: "\u{1D613}",
    M: "\u{1D614}",
    N: "\u{1D615}",
    O: "\u{1D616}",
    P: "\u{1D617}",
    Q: "\u{1D618}",
    R: "\u{1D619}",
    S: "\u{1D61A}",
    T: "\u{1D61B}",
    U: "\u{1D61C}",
    V: "\u{1D61D}",
    W: "\u{1D61E}",
    X: "\u{1D61F}",
    Y: "\u{1D620}",
    Z: "\u{1D621}",
    a: "\u{1D622}",
    b: "\u{1D623}",
    c: "\u{1D624}",
    d: "\u{1D625}",
    e: "\u{1D626}",
    f: "\u{1D627}",
    g: "\u{1D628}",
    h: "\u{1D629}",
    i: "\u{1D62A}",
    j: "\u{1D62B}",
    k: "\u{1D62C}",
    l: "\u{1D62D}",
    m: "\u{1D62E}",
    n: "\u{1D62F}",
    o: "\u{1D630}",
    p: "\u{1D631}",
    q: "\u{1D632}",
    r: "\u{1D633}",
    s: "\u{1D634}",
    t: "\u{1D635}",
    u: "\u{1D636}",
    v: "\u{1D637}",
    w: "\u{1D638}",
    x: "\u{1D639}",
    y: "\u{1D63A}",
    z: "\u{1D63B}",
    0: "\u{1D7E2}",
    1: "\u{1D7E3}",
    2: "\u{1D7E4}",
    3: "\u{1D7E5}",
    4: "\u{1D7E6}",
    5: "\u{1D7E7}",
    6: "\u{1D7E8}",
    7: "\u{1D7E9}",
    8: "\u{1D7EA}",
    9: "\u{1D7EB}"
  },
  serif2: {
    A: "\u{1D400}",
    B: "\u{1D401}",
    C: "\u{1D402}",
    D: "\u{1D403}",
    E: "\u{1D404}",
    F: "\u{1D405}",
    G: "\u{1D406}",
    H: "\u{1D407}",
    I: "\u{1D408}",
    J: "\u{1D409}",
    K: "\u{1D40A}",
    L: "\u{1D40B}",
    M: "\u{1D40C}",
    N: "\u{1D40D}",
    O: "\u{1D40E}",
    P: "\u{1D40F}",
    Q: "\u{1D410}",
    R: "\u{1D411}",
    S: "\u{1D412}",
    T: "\u{1D413}",
    U: "\u{1D414}",
    V: "\u{1D415}",
    W: "\u{1D416}",
    X: "\u{1D417}",
    Y: "\u{1D418}",
    Z: "\u{1D419}",
    a: "\u{1D41A}",
    b: "\u{1D41B}",
    c: "\u{1D41C}",
    d: "\u{1D41D}",
    e: "\u{1D41E}",
    f: "\u{1D41F}",
    g: "\u{1D420}",
    h: "\u{1D421}",
    i: "\u{1D422}",
    j: "\u{1D423}",
    k: "\u{1D424}",
    l: "\u{1D425}",
    m: "\u{1D426}",
    n: "\u{1D427}",
    o: "\u{1D428}",
    p: "\u{1D429}",
    q: "\u{1D42A}",
    r: "\u{1D42B}",
    s: "\u{1D42C}",
    t: "\u{1D42D}",
    u: "\u{1D42E}",
    v: "\u{1D42F}",
    w: "\u{1D430}",
    x: "\u{1D431}",
    y: "\u{1D432}",
    z: "\u{1D433}",
    1: "\u{1D7CF}",
    2: "\u{1D7D0}",
    3: "\u{1D7D1}",
    4: "\u{1D7D2}",
    5: "\u{1D7D3}",
    6: "\u{1D7D4}",
    7: "\u{1D7D5}",
    8: "\u{1D7D6}",
    9: "\u{1D7D7}",
    0: "\u{1D7CE}"
  },
  double_struck: {
    A: "\u{1D538}",
    B: "\u{1D539}",
    C: "\u2102",
    D: "\u{1D53B}",
    E: "\u{1D53C}",
    F: "\u{1D53D}",
    G: "\u{1D53E}",
    H: "\u210D",
    I: "\u{1D540}",
    J: "\u{1D541}",
    K: "\u{1D542}",
    L: "\u{1D543}",
    M: "\u{1D544}",
    N: "\u2115",
    O: "\u{1D546}",
    P: "\u2119",
    Q: "\u211A",
    R: "\u211D",
    S: "\u{1D54A}",
    T: "\u{1D54B}",
    U: "\u{1D54C}",
    V: "\u{1D54D}",
    W: "\u{1D54E}",
    X: "\u{1D54F}",
    Y: "\u{1D550}",
    Z: "\u2124",
    a: "\u{1D552}",
    b: "\u{1D553}",
    c: "\u{1D554}",
    d: "\u{1D555}",
    e: "\u{1D556}",
    f: "\u{1D557}",
    g: "\u{1D558}",
    h: "\u{1D559}",
    i: "\u{1D55A}",
    j: "\u{1D55B}",
    k: "\u{1D55C}",
    l: "\u{1D55D}",
    m: "\u{1D55E}",
    n: "\u{1D55F}",
    o: "\u{1D560}",
    p: "\u{1D561}",
    q: "\u{1D562}",
    r: "\u{1D563}",
    s: "\u{1D564}",
    t: "\u{1D565}",
    u: "\u{1D566}",
    v: "\u{1D567}",
    w: "\u{1D568}",
    x: "\u{1D569}",
    y: "\u{1D56A}",
    z: "\u{1D56B}",
    1: "\u{1D7D9}",
    2: "\u{1D7DA}",
    3: "\u{1D7DB}",
    4: "\u{1D7DC}",
    5: "\u{1D7DD}",
    6: "\u{1D7DE}",
    7: "\u{1D7DF}",
    8: "\u{1D7E0}",
    9: "\u{1D7E1}",
    0: "\u{1D7D8}"
  }
};
var FontTypes = Object.keys(fonts);
var FontSystem = {
  /**
   * Applies a specified font style to a given text.
   *
   * @param {string} text - The input text to style.
   * @param {FontTypes} [font="none"] - The font type to apply.
   * @param {ApplyFontConfig} [config={}] - Configuration for ignoring words/links.
   * @returns {string} - The formatted text.
   */
  applyFonts(text, font = "none", config = {}) {
    var _a;
    config != null ? config : config = {};
    (_a = config.ignoreLinks) != null ? _a : config.ignoreLinks = true;
    if (!FontTypes.includes(font)) {
      throw new TypeError(
        `${font} is not a valid font type. All valid font types are ${FontTypes.join(
          ", "
        )}`
      );
    }
    const func = fonts[font];
    const linkRegex = /(https?:\/\/[^\s]+)/g;
    let parts = [];
    let lastIndex = 0;
    text.replace(linkRegex, (match, _, offset) => {
      var _a2;
      if (lastIndex < offset) {
        parts.push({ value: text.slice(lastIndex, offset), skip: false });
      }
      parts.push({ value: match, skip: (_a2 = config.ignoreLinks) != null ? _a2 : false });
      lastIndex = offset + match.length;
      return match;
    });
    if (lastIndex < text.length) {
      parts.push({ value: text.slice(lastIndex), skip: false });
    }
    return parts.map(({ value, skip }) => {
      if (skip) return value;
      return value.split(/\b/).map((segment) => {
        var _a2;
        if ((_a2 = config.ignoreWords) == null ? void 0 : _a2.includes(segment)) {
          return segment;
        }
        return segment.split("").map(
          (char) => char in func ? func[char] : char
        ).join("");
      }).join("");
    }).join("");
  },
  /**
   * All valid font names.
   */
  fontNames: FontTypes,
  /**
   * Retrieves a formatted list of all available font styles.
   */
  allFonts() {
    let fontList = ``;
    Object.keys(fonts).forEach((font) => {
      const someText = font.replace(/_/g, " ").replace(/\b\w/g, (match) => match.toUpperCase());
      fontList += this.fonts[font](someText) + "\n";
    });
    return fontList;
  },
  /**
   * A direct reference to the font mapping object.
   */
  fontMap: fonts,
  /**
   * Provides a proxy to dynamically apply fonts without explicitly calling `applyFonts`.
   */
  get fonts() {
    return new Proxy(
      {},
      {
        get(_, prop) {
          if (FontTypes.includes(prop) && typeof prop === "string") {
            return function(text, config) {
              return FontSystem.applyFonts(
                String(text),
                prop,
                config
              );
            };
          } else {
            throw new TypeError(
              `${String(
                prop
              )} is not a valid font type. All valid font types are ${FontTypes.join(
                ", "
              )}`
            );
          }
        }
      }
    );
  }
};
var applyFonts = FontSystem.applyFonts;
var allFonts = FontSystem.allFonts;
var fontMap = FontSystem.fontMap;
var fonts2 = FontSystem.fonts;
var font_default = FontSystem;

// src/ArielUtils.ts
var ArielUtils_exports = {};
__export(ArielUtils_exports, {
  ArielIcons: () => ArielIcons,
  abbreviateNumber: () => abbreviateNumber,
  formatCash: () => formatCash,
  formatTimeSentence: () => formatTimeSentence,
  formatValue: () => formatValue,
  getMinimumChange: () => getMinimumChange,
  isNoChange: () => isNoChange,
  numMultipliers: () => numMultipliers,
  parseBet: () => parseBet
});
var numMultipliers = {
  "": 1,
  k: 1e3,
  m: 1e6,
  b: 1e9,
  t: 1e12,
  qa: 1e15,
  qi: 1e18,
  sx: 1e21,
  sp: 1e24,
  oc: 1e27,
  no: 1e30,
  dc: 1e33,
  ud: 1e36,
  dd: 1e39,
  td: 1e42,
  qad: 1e45,
  qid: 1e48,
  sxd: 1e51,
  spd: 1e54,
  ocd: 1e57,
  nod: 1e60,
  vg: 1e63,
  uvg: 1e66,
  dvg: 1e69,
  tvg: 1e72,
  qavg: 1e75,
  qivg: 1e78,
  sxvg: 1e81,
  spvg: 1e84,
  ocvg: 1e87,
  novg: 1e90,
  trg: 1e93,
  utrg: 1e96,
  dtrg: 1e99,
  ttrg: 1e102,
  qatrg: 1e105,
  qitrg: 1e108,
  sxtrg: 1e111,
  sptrg: 1e114,
  octrg: 1e117,
  notrg: 1e120,
  qag: 1e123,
  uqag: 1e126,
  dqag: 1e129,
  tqag: 1e132,
  qaqag: 1e135,
  qiqag: 1e138,
  sxqag: 1e141,
  spqag: 1e144,
  ocqag: 1e147,
  noqag: 1e150,
  qig: 1e153,
  uqig: 1e156,
  dqig: 1e159,
  tqig: 1e162,
  qaqig: 1e165,
  qiqig: 1e168,
  sxqig: 1e171,
  spqig: 1e174,
  ocqig: 1e177,
  noqig: 1e180,
  sxg: 1e183,
  usxg: 1e186,
  dsxg: 1e189,
  tsxg: 1e192,
  qasxg: 1e195,
  qisxg: 1e198,
  sxsxg: 1e201,
  spsxg: 1e204,
  ocsxg: 1e207,
  nosxg: 1e210,
  spg: 1e213,
  uspg: 1e216,
  dspg: 1e219,
  tspg: 1e222,
  qaspg: 1e225,
  qispg: 1e228,
  sxspg: 1e231,
  spspg: 1e234,
  ocspg: 1e237,
  nospg: 1e240,
  ocg: 1e243,
  uocg: 1e246,
  docg: 1e249,
  tocg: 1e252,
  qaocg: 1e255,
  qiocg: 1e258,
  sxocg: 1e261,
  spocg: 1e264,
  ococg: 1e267,
  noocg: 1e270,
  nog: 1e273,
  unog: 1e276,
  dnog: 1e279,
  tnog: 1e282,
  qanog: 1e285,
  qinog: 1e288,
  sxnog: 1e291,
  spnog: 1e294,
  ocnog: 1e297,
  nonog: 1e300,
  ctg: 1e303,
  uctg: 1e306,
  ctc: Infinity
};
function parseBet(arg, totalBalance = NaN) {
  let targetArg = `${arg}`.trim();
  if (targetArg === "allin" || targetArg === "all" && !isNaN(totalBalance)) {
    return Number(totalBalance);
  }
  if (targetArg.endsWith("%")) {
    const per = parseFloat(targetArg.replaceAll("%", "")) / 100;
    return Math.floor(Number(totalBalance) * per);
  }
  const clean = targetArg.replaceAll(",", "").replaceAll("_", "");
  const multipliers = numMultipliers;
  const suffixPattern = Object.keys(multipliers).sort((a, b) => b.length - a.length).join("|");
  const regex = new RegExp(
    `^([\\d.]+(?:e[+-]?\\d+)?)(?:(${suffixPattern}))?$`,
    "i"
  );
  const match = clean.match(regex);
  if (match) {
    const numberPart = parseFloat(match[1]);
    const abbreviation = match[2];
    if (!abbreviation) {
      return Math.floor(numberPart);
    }
    const multiplier = multipliers[String(abbreviation).toLowerCase()];
    if (multiplier !== void 0) {
      return Math.floor(numberPart * multiplier);
    }
  }
  return NaN;
}
var ArielIcons = class {
};
__publicField(ArielIcons, "mainArrow", "\u21D2");
__publicField(ArielIcons, "info", "\u2139\uFE0F \u21D2");
function abbreviateNumber(value, places = 3, isFull = false) {
  let num = Number(value);
  if (isNaN(num)) return "Invalid input";
  if (num < 1e3) {
    return num.toFixed(places).replace(/\.?0+$/, "");
  }
  const suffixes = [
    "",
    // 10^0
    "K",
    // 10^3
    "M",
    // 10^6
    "B",
    // 10^9
    "T",
    // 10^12
    "Qa",
    // Quadrillion, 10^15
    "Qi",
    // Quintillion, 10^18
    "Sx",
    // Sextillion, 10^21
    "Sp",
    // Septillion, 10^24
    "Oc",
    // Octillion, 10^27
    "No",
    // Nonillion, 10^30
    "Dc",
    // Decillion, 10^33
    "Ud",
    // Undecillion, 10^36
    "Dd",
    // Duodecillion, 10^39
    "Td",
    // Tredecillion, 10^42
    "Qad",
    // Quattuordecillion, 10^45
    "Qid",
    // Quindecillion, 10^48
    "Sxd",
    // Sexdecillion, 10^51
    "Spd",
    // Septendecillion, 10^54
    "Ocd",
    // Octodecillion, 10^57
    "Nod",
    // Novemdecillion, 10^60
    "Vg",
    // Vigintillion, 10^63
    "Uvg",
    // Unvigintillion, 10^66
    "Dvg",
    // Duovigintillion, 10^69
    "Tvg",
    // Tresvigintillion, 10^72
    "Qavg",
    // Quattuorvigintillion, 10^75
    "Qivg",
    // Quinquavigintillion, 10^78
    "Sxvg",
    // Sexvigintillion, 10^81
    "Spvg",
    // Septenvigintillion, 10^84
    "Ocvg",
    // Octovigintillion, 10^87
    "Novg",
    // Novemvigintillion, 10^90
    "Trg",
    // Trigintillion, 10^93
    "Utrg",
    // Untrigintillion, 10^96
    "Dtrg",
    // Duotrigintillion, 10^99
    "Ttrg",
    // Trestrigintillion, 10^102
    "Qatrg",
    // Quattuortrigintillion, 10^105
    "Qitrg",
    // Quinquatrigintillion, 10^108
    "Sxtrg",
    // Sextrigintillion, 10^111
    "Sptrg",
    // Septentrigintillion, 10^114
    "Octrg",
    // Octotrigintillion, 10^117
    "Notrg",
    // Novemtrigintillion, 10^120
    "Qag",
    // Quadragintillion, 10^123
    "Uqag",
    // Unquadragintillion, 10^126
    "Dqag",
    // Duoquadragintillion, 10^129
    "Tqag",
    // Tresquadragintillion, 10^132
    "Qaqag",
    // Quattuorquadragintillion, 10^135
    "Qiqag",
    // Quinquaquadragintillion, 10^138
    "Sxqag",
    // Sexquadragintillion, 10^141
    "Spqag",
    // Septenquadragintillion, 10^144
    "Ocqag",
    // Octoquadragintillion, 10^147
    "Noqag",
    // Novemquadragintillion, 10^150
    "Qig",
    // Quinquagintillion, 10^153
    "Uqig",
    // Unquinquagintillion, 10^156
    "Dqig",
    // Duoquinquagintillion, 10^159
    "Tqig",
    // Tresquinquagintillion, 10^162
    "Qaqig",
    // Quattuorquinquagintillion, 10^165
    "Qiqig",
    // Quinquaquinquagintillion, 10^168
    "Sxqig",
    // Sexquinquagintillion, 10^171
    "Spqig",
    // Septenquinquagintillion, 10^174
    "Ocqig",
    // Octoquinquagintillion, 10^177
    "Noqig",
    // Novemquinquagintillion, 10^180
    "Sxg",
    // Sexagintillion, 10^183
    "Usxg",
    // Unsexagintillion, 10^186
    "Dsxg",
    // Duosexagintillion, 10^189
    "Tsxg",
    // Tresexagintillion, 10^192
    "Qasxg",
    // Quattuorsexagintillion, 10^195
    "Qisxg",
    // Quinquasexagintillion, 10^198
    "Sxsxg",
    // Sexsexagintillion, 10^201
    "Spsxg",
    // Septensexagintillion, 10^204
    "Ocsxg",
    // Octosexagintillion, 10^207
    "Nosxg",
    // Novemsexagintillion, 10^210
    "Spg",
    // Septuagintillion, 10^213
    "Uspg",
    // Unseptuagintillion, 10^216
    "Dspg",
    // Duoseptuagintillion, 10^219
    "Tspg",
    // Treseptuagintillion, 10^222
    "Qaspg",
    // Quattuorseptuagintillion, 10^225
    "Qispg",
    // Quinquaseptuagintillion, 10^228
    "Sxspg",
    // Sexseptuagintillion, 10^231
    "Spspg",
    // Septenseptuagintillion, 10^234
    "Ocspg",
    // Octoseptuagintillion, 10^237
    "Nospg",
    // Novemseptuagintillion, 10^240
    "Ocg",
    // Octogintillion, 10^243
    "Uocg",
    // Unoctogintillion, 10^246
    "Docg",
    // Duooctogintillion, 10^249
    "Tocg",
    // Tresoctogintillion, 10^252
    "Qaocg",
    // Quattuoroctogintillion, 10^255
    "Qiocg",
    // Quinquaoctogintillion, 10^258
    "Sxocg",
    // Sexoctogintillion, 10^261
    "Spocg",
    // Septenoctogintillion, 10^264
    "Ococg",
    // Octooctogintillion, 10^267
    "Noocg",
    // Novemoctogintillion, 10^270
    "Nog",
    // Nonagintillion, 10^273
    "Unog",
    // Unnonagintillion, 10^276
    "Dnog",
    // Duononagintillion, 10^279
    "Tnog",
    // Tresnonagintillion, 10^282
    "Qanog",
    // Quattuornonagintillion, 10^285
    "Qinog",
    // Quinquanonagintillion, 10^288
    "Sxnog",
    // Sexnonagintillion, 10^291
    "Spnog",
    // Septennonagintillion, 10^294
    "Ocnog",
    // Octononagintillion, 10^297
    "Nonog",
    // Novemnonagintillion, 10^300
    "Ctg",
    // Centillion, 10^303
    "Uctg",
    // Uncentillion, 10^306
    "Ctc"
    // Centicentillion, 10^309
  ];
  const fullSuffixes = [
    "",
    "Thousand",
    "Million",
    "Billion",
    "Trillion",
    "Quadrillion",
    "Quintillion",
    "Sextillion",
    "Septillion",
    "Octillion",
    "Nonillion",
    "Decillion",
    "Undecillion",
    "Duodecillion",
    "Tredecillion",
    "Quattuordecillion",
    "Quindecillion",
    "Sexdecillion",
    "Septendecillion",
    "Octodecillion",
    "Novemdecillion",
    "Vigintillion",
    "Unvigintillion",
    // 10^66
    "Duovigintillion",
    // 10^69
    "Tresvigintillion",
    // 10^72
    "Quattuorvigintillion",
    // 10^75
    "Quinquavigintillion",
    // 10^78
    "Sexvigintillion",
    // 10^81
    "Septenvigintillion",
    // 10^84
    "Octovigintillion",
    // 10^87
    "Novemvigintillion",
    // 10^90
    "Trigintillion",
    // 10^93
    "Untrigintillion",
    // 10^96
    "Duotrigintillion",
    // 10^99
    "Trestrigintillion",
    // 10^102
    "Quattuortrigintillion",
    // 10^105
    "Quinquatrigintillion",
    // 10^108
    "Sextrigintillion",
    // 10^111
    "Septentrigintillion",
    // 10^114
    "Octotrigintillion",
    // 10^117
    "Novemtrigintillion",
    // 10^120
    "Quadragintillion",
    // 10^123
    "Unquadragintillion",
    // 10^126
    "Duoquadragintillion",
    // 10^129
    "Tresquadragintillion",
    // 10^132
    "Quattuorquadragintillion",
    // 10^135
    "Quinquaquadragintillion",
    // 10^138
    "Sexquadragintillion",
    // 10^141
    "Septenquadragintillion",
    // 10^144
    "Octoquadragintillion",
    // 10^147
    "Novemquadragintillion",
    // 10^150
    "Quinquagintillion",
    // 10^153
    "Unquinquagintillion",
    // 10^156
    "Duoquinquagintillion",
    // 10^159
    "Tresquinquagintillion",
    // 10^162
    "Quattuorquinquagintillion",
    // 10^165
    "Quinquaquinquagintillion",
    // 10^168
    "Sexquinquagintillion",
    // 10^171
    "Septenquinquagintillion",
    // 10^174
    "Octoquinquagintillion",
    // 10^177
    "Novemquinquagintillion",
    // 10^180
    "Sexagintillion",
    // 10^183
    "Unsexagintillion",
    // 10^186
    "Duosexagintillion",
    // 10^189
    "Tresexagintillion",
    // 10^192
    "Quattuorsexagintillion",
    // 10^195
    "Quinquasexagintillion",
    // 10^198
    "Sexsexagintillion",
    // 10^201
    "Septensexagintillion",
    // 10^204
    "Octosexagintillion",
    // 10^207
    "Novemsexagintillion",
    // 10^210
    "Septuagintillion",
    // 10^213
    "Unseptuagintillion",
    // 10^216
    "Duoseptuagintillion",
    // 10^219
    "Treseptuagintillion",
    // 10^222
    "Quattuorseptuagintillion",
    // 10^225
    "Quinquaseptuagintillion",
    // 10^228
    "Sexseptuagintillion",
    // 10^231
    "Septenseptuagintillion",
    // 10^234
    "Octoseptuagintillion",
    // 10^237
    "Novemseptuagintillion",
    // 10^240
    "Octogintillion",
    // 10^243
    "Unoctogintillion",
    // 10^246
    "Duooctogintillion",
    // 10^249
    "Tresoctogintillion",
    // 10^252
    "Quattuoroctogintillion",
    // 10^255
    "Quinquaoctogintillion",
    // 10^258
    "Sexoctogintillion",
    // 10^261
    "Septenoctogintillion",
    // 10^264
    "Octooctogintillion",
    // 10^267
    "Novemoctogintillion",
    // 10^270
    "Nonagintillion",
    // 10^273
    "Unnonagintillion",
    // 10^276
    "Duononagintillion",
    // 10^279
    "Tresnonagintillion",
    // 10^282
    "Quattuornonagintillion",
    // 10^285
    "Quinquanonagintillion",
    // 10^288
    "Sexnonagintillion",
    // 10^291
    "Septennonagintillion",
    // 10^294
    "Octononagintillion",
    // 10^297
    "Novemnonagintillion",
    // 10^300
    "Centillion",
    // 10^303
    "Uncentillion",
    // 10^306
    "Centicentillion"
    // 10^309
  ];
  const magnitude = Math.floor(Math.log10(num) / 3);
  if (magnitude === 0) {
    return num % 1 === 0 ? num.toString() : num.toFixed(places).replace(/\.?0+$/, "");
  }
  const abbreviatedValue = num / Math.pow(1e3, magnitude);
  const suffix = isFull ? fullSuffixes[magnitude] : suffixes[magnitude];
  if (!suffix) {
    return num.toExponential();
  }
  if (abbreviatedValue % 1 === 0) {
    return `${Math.round(abbreviatedValue)}${isFull ? ` ${suffix}` : suffix}`;
  }
  const formattedValue = places === 0 ? abbreviatedValue.toFixed(0) : abbreviatedValue.toFixed(places).replace(/\.?0+$/, "");
  return `${formattedValue}${isFull ? ` ${suffix}` : suffix}`;
}
function formatCash(number = 0, emoji = "\u{1F4B5}", bold = false) {
  if (typeof emoji === "boolean") {
    bold = emoji;
    emoji = "\u{1F4B5}";
  }
  return `${bold ? "**" : ""}${number > 999 ? `($${abbreviateNumber(number)}) ` : ""}$${Number(number).toLocaleString()}${emoji || "\u{1F4B5}"}${bold ? "**" : ""}`;
}
function formatValue(number = 0, emoji = "\u{1F3B2}", bold = false) {
  if (typeof emoji === "boolean") {
    bold = emoji;
    emoji = "\u{1F3B2}";
  }
  return `${bold ? "**" : ""}${number > 999 ? `(${emoji || "\u{1F3B2}"}${abbreviateNumber(number)}) ` : ""}${emoji || "\u{1F3B2}"}${Number(number).toLocaleString()}${bold ? "**" : ""}`;
}
function formatTimeSentence(ms, showMs = false) {
  const baseUnits = [
    { label: "year", ms: 365 * 24 * 60 * 60 * 1e3 },
    { label: "day", ms: 24 * 60 * 60 * 1e3 },
    { label: "hour", ms: 60 * 60 * 1e3 },
    { label: "minute", ms: 60 * 1e3 },
    { label: "second", ms: 1e3 }
  ];
  const allUnits = showMs ? [...baseUnits, { label: "millisecond", ms: 1 }] : baseUnits;
  const parts = [];
  let remainingMs = ms;
  for (const { label, ms: unitMs } of allUnits) {
    const value = Math.floor(remainingMs / unitMs);
    if (value > 0) {
      parts.push(`${value} ${label}${value > 1 ? "s" : ""}`);
      remainingMs %= unitMs;
    }
  }
  if (parts.length === 0 && !showMs && ms > 0 && ms < 1e3) {
    parts.push(`${ms} millisecond${ms !== 1 ? "s" : ""}`);
  }
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0];
  if (parts.length === 2) return `${parts[0]} and ${parts[1]}`;
  return `${parts.slice(0, -1).join(", ")}, and ${parts[parts.length - 1]}`;
}
function getMinimumChange(total) {
  const exp = Math.floor(Math.log2(Math.abs(total)));
  return Math.pow(2, exp - 52);
}
function isNoChange(change, total) {
  return change < getMinimumChange(total);
}

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

// src/index.ts
var line = "\u2501";
function forceTitleFormat(str, pattern) {
  pattern != null ? pattern : pattern = `{emojis} {word}`;
  const emojiRegex = new RegExp("\\p{Emoji}", "gu");
  let emojis = [...str].filter((char) => emojiRegex.test(char)).join("");
  let nonEmojis = [...str].filter((char) => !emojiRegex.test(char)).join("").trim().replaceAll("|", "");
  const res = pattern.replaceAll("{word}", nonEmojis).replaceAll("{emojis}", emojis);
  return res;
}
function createFormat(options) {
  return function(content, extra) {
    const normalized = normalizeFormatOverloads(__spreadProps(__spreadValues(__spreadValues({}, options), extra != null ? extra : []), {
      content
    }));
    return format(__spreadValues({}, normalized));
  };
}
function normalizeFormatOverloads(arg1, arg2, arg3) {
  var _a, _b, _c, _d, _e;
  let options;
  if (typeof arg1 === "string" && typeof arg2 === "string") {
    options = { title: arg1, content: arg2, contentFont: arg3 };
  } else if (typeof arg1 === "object" && arg1 !== null) {
    options = arg1;
  } else {
    throw new Error("Invalid arguments");
  }
  (_a = options.titleFont) != null ? _a : options.titleFont = "bold";
  (_b = options.contentFont) != null ? _b : options.contentFont = "fancy";
  (_c = options.titlePattern) != null ? _c : options.titlePattern = void 0;
  (_d = options.noFormat) != null ? _d : options.noFormat = false;
  (_e = options.lineLength) != null ? _e : options.lineLength = 15;
  return options;
}
function format(arg1, arg2, arg3) {
  var _a, _b;
  const options = normalizeFormatOverloads(arg1, arg2, arg3);
  return `${fonts2[options.titleFont ? options.titleFont : "bold"](
    !options.noFormat ? forceTitleFormat(options.title, options.titlePattern) : options.title,
    options.fontConfig
  )}
${line.repeat((_a = options.lineLength) != null ? _a : 15)}
${fonts2[(_b = options.contentFont) != null ? _b : "fancy"](autoBold(options.content, options.fontConfig), options.fontConfig)}`;
}
var UNIRedux = class {
};
/** Special invisible space character */
__publicField(UNIRedux, "specialSpace", "\u1160");
/** Standard line repeated 1 time */
__publicField(UNIRedux, "singleLine", line);
/** Burger menu icon */
__publicField(UNIRedux, "burger", "\u2630");
/** Standard line repeated 15 times */
__publicField(UNIRedux, "standardLine", line.repeat(15));
/** Section sign */
__publicField(UNIRedux, "section", "\xA7");
/** Pilcrow sign */
__publicField(UNIRedux, "paragraph", "\xB6");
/** Registered trademark sign */
__publicField(UNIRedux, "registered", "\xAE");
/** Trademark sign */
__publicField(UNIRedux, "trademark", "\u2122");
/** Copyright sign */
__publicField(UNIRedux, "copyright", "\xA9");
/** Degree sign */
__publicField(UNIRedux, "degree", "\xB0");
/** Micro sign */
__publicField(UNIRedux, "micro", "\xB5");
/** Bullet point */
__publicField(UNIRedux, "bullet", "\u2022");
/** En dash */
__publicField(UNIRedux, "enDash", "\u2013");
/** Em dash */
__publicField(UNIRedux, "emDash", "\u2014");
/** Prime symbol */
__publicField(UNIRedux, "prime", "\u2032");
/** Double prime symbol */
__publicField(UNIRedux, "doublePrime", "\u2033");
/** Dagger symbol */
__publicField(UNIRedux, "daggers", "\u2020");
/** Double dagger symbol */
__publicField(UNIRedux, "doubleDagger", "\u2021");
/** Ellipsis */
__publicField(UNIRedux, "ellipsis", "\u2026");
/** Infinity symbol */
__publicField(UNIRedux, "infinity", "\u221E");
/** Generic currency sign */
__publicField(UNIRedux, "currency", "\xA4");
/** Yen sign */
__publicField(UNIRedux, "yen", "\xA5");
/** Euro sign */
__publicField(UNIRedux, "euro", "\u20AC");
/** Pound sign */
__publicField(UNIRedux, "pound", "\xA3");
/** Plus-minus sign */
__publicField(UNIRedux, "plusMinus", "\xB1");
/** Approximately equal sign */
__publicField(UNIRedux, "approximately", "\u2248");
/** Not equal to sign */
__publicField(UNIRedux, "notEqual", "\u2260");
/** Less than or equal to sign */
__publicField(UNIRedux, "lessThanOrEqual", "\u2264");
/** Greater than or equal to sign */
__publicField(UNIRedux, "greaterThanOrEqual", "\u2265");
/** Summation sign */
__publicField(UNIRedux, "summation", "\u2211");
/** Integral sign */
__publicField(UNIRedux, "integral", "\u222B");
/** Square root sign */
__publicField(UNIRedux, "squareRoot", "\u221A");
/** Partial differential sign */
__publicField(UNIRedux, "partialDifferential", "\u2202");
/** Angle symbol */
__publicField(UNIRedux, "angle", "\u2220");
/** Degree Fahrenheit sign */
__publicField(UNIRedux, "degreeFahrenheit", "\u2109");
/** Degree Celsius sign */
__publicField(UNIRedux, "degreeCelsius", "\u2103");
/** Floral Heart symbol */
__publicField(UNIRedux, "floralHeart", "\u2767");
/** Star Flower symbol */
__publicField(UNIRedux, "starFlower", "\u273B");
/** Heavy Star symbol */
__publicField(UNIRedux, "heavyStar", "\u2605");
/** Sparkle symbol */
__publicField(UNIRedux, "sparkle", "\u2726");
/** Asterisk symbol */
__publicField(UNIRedux, "asterisk", "\u2731");
/** Heavy Check Mark */
__publicField(UNIRedux, "heavyCheckMark", "\u2714");
/** Heavy Ballot X */
__publicField(UNIRedux, "heavyBallotX", "\u2716");
/** Heart symbol */
__publicField(UNIRedux, "heart", "\u2665");
/** Diamond symbol */
__publicField(UNIRedux, "diamond", "\u2666");
/** Club symbol */
__publicField(UNIRedux, "club", "\u2663");
/** Spade symbol */
__publicField(UNIRedux, "spade", "\u2660");
/** Musical Note symbol */
__publicField(UNIRedux, "musicalNote", "\u266A");
/** Double Musical Note symbol */
__publicField(UNIRedux, "doubleMusicalNote", "\u266B");
/** Snowflake symbol */
__publicField(UNIRedux, "snowflake", "\u2744");
/** Sparkle Star symbol */
__publicField(UNIRedux, "sparkleStar", "\u2728");
/** Anchor symbol */
__publicField(UNIRedux, "anchor", "\u2693");
/** Umbrella symbol */
__publicField(UNIRedux, "umbrella", "\u2614");
/** Hourglass symbol */
__publicField(UNIRedux, "hourglass", "\u231B");
/** Hourglass Not Done symbol */
__publicField(UNIRedux, "hourglassNotDone", "\u23F3");
/** Charm symbol */
__publicField(UNIRedux, "charm", "\u2726");
/** Disc symbol */
__publicField(UNIRedux, "disc", "\u29BF");
/** Arrow symbol */
__publicField(UNIRedux, "arrow", "\u27A4");
/** Arrow (Black and White) symbol */
__publicField(UNIRedux, "arrowBW", "\u27A3");
/** Arrow from Top symbol */
__publicField(UNIRedux, "arrowFromT", "\u27A5");
/** Arrow from Bottom symbol */
__publicField(UNIRedux, "arrowFromB", "\u27A6");
/** Restart symbol */
__publicField(UNIRedux, "restart", "\u27F3");
/** Arrow Outline symbol */
__publicField(UNIRedux, "arrowOutline", "\u27A9");
function autoBold(text, config) {
  text = String(text);
  text = text.replace(
    /\*\*\*(.*?)\*\*\*/g,
    (_, text2) => fonts2.bold_italic(text2, config)
  );
  text = text.replace(
    /\*\*(.*?)\*\*/g,
    (_, text2) => fonts2.bold(text2, config)
  );
  text = text.replace(
    /`(.*?)`/g,
    (_, text2) => fonts2.typewriter(text2, config)
  );
  return text;
}
function fontTag(text) {
  text = String(text);
  text = text.replace(
    /\[font=(.*?)\]\s*(.*?)\s*\[:font=(.*?)\]/g,
    (_, font, text2, font2) => font === font2 ? fonts2[font](text2) : text2
  );
  return text;
}
var _api, _event;
var _Box = class _Box {
  /**
   * Creates an instance of the LiaIO class to manage message interactions.
   *
   * @param {API} api - The API instance for interacting with the messaging service.
   * @param {FCAMessageReplyEvent | any} event - The event that triggered the interaction.
   * @memberof Box
   */
  constructor(api, event, style) {
    __privateAdd(this, _api, null);
    __privateAdd(this, _event, null);
    __publicField(this, "style");
    __privateSet(this, _api, api);
    __privateSet(this, _event, event);
    this.style = style;
  }
  /**
   * Sends an output message, which can be a reply or a new message.
   *
   * @param params - The parameters for sending the message.
   * @param params.form - The form of the message to be sent.
   * @param params.senderID - The ID of the sender (optional).
   * @param params.replyTo - The ID of the message being replied to (optional).
   * @param style
   * @returns A promise resolving to the sent message event.
   * @memberof Box
   */
  out(param0) {
    return __async(this, null, function* () {
      const {
        form: oform,
        senderID = __privateGet(this, _event).threadID,
        replyTo = void 0,
        style = null
      } = param0;
      const form = normalizeMessageForm(oform);
      let exMents = [];
      if (typeof form.body === "string") {
        const ments = form.body.match(/@\[(.*?)=(.*?)\]/g);
        if (Array.isArray(ments)) {
          for (const ment of ments) {
            const [tag, uid] = ment.slice(2, -1).split("=");
            form.body = form.body.replace(ment, `@${tag}`);
            exMents.push({
              id: uid,
              tag,
              fromIndex: form.body.indexOf(`@${tag}`)
            });
          }
        }
      }
      let styler = this.style;
      if (style) {
        styler = style;
      }
      if (styler && form.body && styler !== void 0 && styler.title) {
        const combined = __spreadProps(__spreadValues({}, styler), {
          content: form.body
        });
        form.body = format(combined);
      }
      return new Promise((resolve, reject) => __async(this, null, function* () {
        var _a;
        form.mentions = [...exMents, ...(_a = form.mentions) != null ? _a : []];
        for (const key in form) {
          if (form[key] === null || form[key] === void 0) {
            delete form[key];
          }
          if (!form.mentions || form.mentions.length < 1) {
            delete form.mentions;
          }
        }
        console.log(`Form to send:`, form, senderID, replyTo);
        const queueItem = __spreadProps(__spreadValues({}, param0), {
          senderID,
          replyTo,
          style: styler,
          form,
          resolve,
          reject,
          api: __privateGet(this, _api),
          event: __privateGet(this, _event)
        });
        _Box.queue.push(queueItem);
        if (_Box.queue.length === 1) {
          _Box._processQueue();
        }
      }));
    });
  }
  static _processQueue() {
    return __async(this, null, function* () {
      var _a;
      console.log(`Processing Queue..`);
      while (this.queue.length > 0) {
        const currentTask = this.queue[0];
        console.log(
          `Current Queue task (total ${this.queue.length}):`,
          currentTask.form
        );
        if (this.queue.length > 1) {
          yield new Promise((resolve) => setTimeout(resolve, 500));
        }
        try {
          console.log(`Sending form...`, currentTask.form);
          const {
            api,
            form: oform,
            reject,
            resolve,
            replyTo,
            senderID
          } = currentTask;
          const form = normalizeMessageForm(oform);
          api.sendMessage(
            form,
            senderID,
            (err, info) => {
              if (err && reject) {
                reject(err);
              } else if (resolve) {
                console.log(`Form sent:`, form, senderID, replyTo);
                resolve(info);
              }
            },
            replyTo != null ? replyTo : void 0
          );
        } catch (error) {
          (_a = currentTask.reject) == null ? void 0 : _a.call(currentTask, error);
        }
        this.queue.shift();
        console.log(`Moving to next queue`);
      }
    });
  }
  /**
   * Sends a reply to a message, optionally targeting a specific reply.
   *
   * @param form - The form of the reply message to be sent.
   * @param replyTo - The ID of the message being replied to (optional).
   * @returns A promise resolving to the message reply event.
   * @memberof Box
   * @example
   * await liaIO.reply("Hello, world!");
   */
  reply(form, replyTo = __privateGet(this, _event).messageID) {
    return this.out({
      form,
      replyTo
    });
  }
  /**
   * Sends a message to a destination, optionally specifying the destination ID.
   *
   * @param form - The form of the message to be sent.
   * @param senderID - The ID of the destination to send the message to (optional).
   * @memberof Box
   * @example
   * await liaIO.send("Hello, world!");
   */
  send(form, senderID = __privateGet(this, _event).threadID) {
    return this.out({
      form,
      senderID
    });
  }
  /**
   * An easy way to handle errors.
   *
   * @param error - Error to be sent.
   */
  error(error) {
    const errString = error instanceof Error ? String(error.stack) : JSON.stringify(error, null, 2);
    console.error(error);
    return this.reply(errString);
  }
  /**
   * Adds a reaction to a message, optionally targeting a specific message to react to.
   *
   * @param emoji - The reaction to be added (e.g., "like", "love").
   * @param reactTo - The ID of the message to react to (optional).
   * @returns A promise resolving to the sent reaction event.
   * @memberof Box
   */
  reaction(emoji, reactTo = __privateGet(this, _event).messageID) {
    return new Promise((resolve, reject) => {
      __privateGet(this, _api).setMessageReaction(emoji, reactTo, (err) => {
        if (err) {
          return reject(err);
        }
        return resolve(true);
      });
    });
  }
  clone() {
    return new _Box(__privateGet(this, _api), __privateGet(this, _event), this.style);
  }
  styled(style) {
    return new _Box(__privateGet(this, _api), __privateGet(this, _event), style);
  }
};
_api = new WeakMap();
_event = new WeakMap();
__publicField(_Box, "queue", []);
var Box = _Box;
function normalizeMessageForm(form) {
  let r = {};
  if (form && r) {
    if (typeof form === "object") {
      r = form;
    }
    if (typeof form === "string") {
      r = {
        body: form
      };
    }
    if (!Array.isArray(r.attachment) && r.attachment) {
      r.attachment = [r.attachment];
    }
    return r;
  } else {
    return {
      body: void 0
    };
  }
}
var LiaIOLite = Box;
export {
  ArielIcons,
  ArielUtils_exports as ArielUtils,
  Box,
  Datum,
  font_exports as Font,
  font_default as FontSystem,
  FontTypes,
  LiaIOLite,
  UNIRedux,
  abbreviateNumber,
  allFonts,
  applyFonts,
  autoBold,
  createFormat,
  fontMap,
  fontTag,
  fonts2 as fonts,
  forceTitleFormat,
  format,
  formatCash,
  formatTimeSentence,
  formatValue,
  getMinimumChange,
  isNoChange,
  line,
  normalizeFormatOverloads,
  numMultipliers,
  parseBet
};
//# sourceMappingURL=index.mjs.map