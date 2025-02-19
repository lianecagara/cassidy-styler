"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
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
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  FontSystem: () => font_default,
  UNIRedux: () => UNIRedux,
  forceTitleFormat: () => forceTitleFormat,
  format: () => format
});
module.exports = __toCommonJS(index_exports);

// src/font.ts
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
var FontSystem = {
  applyFonts(text, font = "none") {
    const formattedText = text.split("").map((char) => fonts[font][char] || char).join("");
    return formattedText;
  },
  allFonts() {
    let fontList = ``;
    Object.keys(fonts).forEach((font) => {
      const someText = font.replace(/_/g, " ").replace(/\b\w/g, (match) => match.toUpperCase());
      fontList += this.fonts[font](someText) + "\n";
    });
    return fontList;
  },
  fontMap: fonts,
  get fonts() {
    return new Proxy(
      {},
      {
        get(_, prop) {
          if (prop in fonts && typeof prop === "string") {
            return function(text) {
              return FontSystem.applyFonts(String(text), prop);
            };
          } else {
            return (i) => typeof i;
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

// src/index.ts
var line = "\u2501";
function forceTitleFormat(str, pattern) {
  pattern != null ? pattern : pattern = `{word} ${UNIRedux.charm} {emojis}`;
  const emojiRegex = new RegExp("\\p{Emoji}", "gu");
  let emojis = [...str].filter((char) => emojiRegex.test(char)).join("");
  let nonEmojis = [...str].filter((char) => !emojiRegex.test(char)).join("").trim().replaceAll("|", "");
  const res = pattern.replaceAll("{word}", nonEmojis).replaceAll("{emojis}", emojis);
  return res;
}
function format(arg1, arg2) {
  var _a, _b, _c;
  let options;
  if (typeof arg1 === "string" && typeof arg2 === "string") {
    options = { title: arg1, content: arg2 };
  } else if (typeof arg1 === "object" && arg1 !== null) {
    options = arg1;
  } else {
    throw new Error("Invalid arguments");
  }
  (_a = options.titleFont) != null ? _a : options.titleFont = "bold";
  (_b = options.contentFont) != null ? _b : options.contentFont = "none";
  (_c = options.titlePattern) != null ? _c : options.titlePattern = void 0;
  return `${fonts2[options.titleFont](
    options.titlePattern ? forceTitleFormat(options.title, options.titlePattern) : options.title
  )}
${UNIRedux.standardLine}
${fonts2[options.contentFont](options.content)}`;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FontSystem,
  UNIRedux,
  forceTitleFormat,
  format
});
//# sourceMappingURL=index.js.map