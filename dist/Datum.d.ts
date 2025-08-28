/**
 * Datum Namespace Utilities
 * -------------------------
 * Collection of functions and types for manipulating and querying structured data.
 * Includes JSON helpers, filtering, schema validation, and data encoding/decoding utilities.
 *
 * Author: Nealiana Kaye Cagara (@lianecagara)
 */
declare namespace Datum {
    /**
     * Type-safe structure for `package.json`.
     * Augments the base shape with optional fields and extensibility.
     */
    type PackageJson = {
        /** Optional name of the package */
        name?: string;
        /** Optional version of the package */
        version?: string;
        /** Runtime dependencies */
        dependencies?: Record<string, string>;
        /** Development dependencies */
        devDependencies?: Record<string, string>;
        /** Allows additional custom fields */
        [key: string]: any;
    };
    /**
     * Defines a flexible query interface for filtering values of type `T`.
     * Mirrors MongoDB-style operators.
     */
    type QueryOperator<T> = {
        $eq?: T;
    } | {
        $ne?: T;
    } | {
        $gt?: T;
    } | {
        $gte?: T;
    } | {
        $lt?: T;
    } | {
        $lte?: T;
    } | {
        $in?: T[];
    } | {
        $nin?: T[];
    } | {
        $regex?: RegExp;
    };
    /**
     * Filters object type `T` based on per-key conditions.
     * Each key may be matched directly or via an operator.
     */
    type Query<T> = Partial<Record<keyof T, QueryOperator<T[keyof T]> | T[keyof T]>>;
    /**
     * Schema type for object validation.
     * Can be:
     * - a primitive type string (e.g., 'string', 'number')
     * - a class constructor (e.g., Date)
     * - a recursive object structure
     */
    type Schema = string | Function | {
        [key: string]: Schema;
    };
    /**
     * Reads and parses a package.json file asynchronously.
     * @param pkgPath - Path to the package.json file (default: "./package.json")
     * @returns Promise resolving to the parsed PackageJson object, or null if read/parse fails
     */
    function readPackageJson(pkgPath?: string): Promise<PackageJson | null>;
    /**
     * Retrieves the `name` field from a package.json file asynchronously.
     * @param pkgPath - Path to the package.json file (default: "./package.json")
     * @returns Promise resolving to the package name string or null if not found/error
     */
    function getPackageName(pkgPath?: string): Promise<string | null>;
    /**
     * Retrieves the `version` field from a package.json file asynchronously.
     * @param pkgPath - Path to the package.json file (default: "./package.json")
     * @returns Promise resolving to the package version string or null if not found/error
     */
    function getPackageVersion(pkgPath?: string): Promise<string | null>;
    /**
     * Updates the package.json file at the specified path by applying an updater function.
     * Reads the existing package.json, applies the updater, and writes back the result.
     * @param pkgPath - Path to the package.json file
     * @param updater - Function receiving the current PackageJson and returning the updated PackageJson
     * @returns Promise resolving when the update and write operation completes
     */
    function updatePackageJson(pkgPath: string, updater: (pkg: PackageJson) => PackageJson): Promise<void>;
    /**
     * Parses a JSON string into an object of type T.
     * Returns null if parsing fails.
     * @param jsonStr - JSON string to parse
     * @returns Parsed object of type T or null if invalid JSON
     */
    function parseJson<T>(jsonStr: string): T | null;
    /**
     * Stringifies an object into a JSON string.
     * Optionally pretty-prints with 2-space indentation.
     * @param obj - Object to stringify
     * @param pretty - If true, format JSON with indentation (default: false)
     * @returns JSON string representation of the object
     */
    function stringifyJson(obj: unknown, pretty?: boolean): string;
    /**
     * Validates if an object matches a given schema.
     * Supports primitive type strings, constructor functions, and nested schemas.
     * @param obj - Object to validate
     * @param schema - Schema definition to validate against
     * @returns True if object matches schema, false otherwise
     */
    function validateSchema(obj: unknown, schema: Schema): boolean;
    /**
     * Filters data entries based on a query object.
     * Supports data as a Record or Map.
     * @param data - Data collection to query (Record or Map)
     * @param query - Query object specifying filter conditions
     * @returns Array of matching data items
     */
    function queryData<T>(data: Record<string, T> | Map<string, T>, query: Query<T>): T[];
    /**
     * Returns the key or keys in the object that match the given value.
     * @param value - The value to search for.
     * @param parentObj - The object to search within.
     * @returns The first matching key as a string, or an array of matching keys, or null if none found.
     */
    function keyOf<T extends object>(value: unknown, parentObj: T): string | string[] | null;
    /**
     * Returns the value or values from the object for the given key(s).
     * @param key - A single key or an array of keys.
     * @param parentObj - The object to retrieve values from.
     * @returns The value for a single key, an array of values for multiple keys, or null if not found.
     */
    function valueOf<T extends object>(key: keyof T | (keyof T)[], parentObj: T): T[keyof T] | T[keyof T][] | null;
    /**
     * Returns a new array containing only unique elements from the input array.
     *
     * - If no callback is provided, uniqueness is determined using strict equality (`===`).
     * - If a callback is provided, it is used to derive a value from each item for uniqueness comparison.
     *
     * @template T - Type of items in the input array
     * @template K - Type of key returned by the callback function (if provided)
     *
     * @param array - The input array to filter.
     * @param callback - Optional function to generate a comparison key for each item.
     *
     * @returns A new array containing only unique items.
     *
     * @example
     * toUniqueArray([1, 2, 2, 3]); // [1, 2, 3]
     *
     * @example
     * toUniqueArray(['one', 'two', 'three'], str => str.length); // ['one', 'three']
     *
     * @example
     * toUniqueArray([{ id: 1 }, { id: 2 }, { id: 1 }], obj => obj.id); // [{ id: 1 }, { id: 2 }]
     */
    function toUniqueArray<T, K = T>(array: T[], callback?: (item: T) => K): T[];
    /** Permissible object keys in TypeScript */
    type ObjectKey = string | number | symbol;
    /**
     * Decodes a game ID string from a custom web-safe base64 format.
     *
     * - Removes the GAME_ID_PREFIX if present.
     * - Adds padding to make the base64 valid.
     * - Decodes from base64 and removes the `custom_` prefix (if any).
     *
     * @param input - Encoded game ID string (e.g., from URL or database).
     * @returns Decoded UTF-8 string, or original input if decoding fails.
     */
    function decodeGameID(input: string): string;
    /**
     * Prefix used to mark encoded game IDs in web-safe format.
     * Used by `encodeGameID` and `decodeGameID`.
     */
    const GAME_ID_PREFIX = "web:";
    /**
     * Encodes a UTF-8 string into a custom base64 game ID format.
     *
     * - Encodes the input string using standard base64.
     * - Adds the GAME_ID_PREFIX.
     *
     * @param input - Raw string to encode as a game ID.
     * @returns Encoded game ID string or the original input if encoding fails.
     */
    function encodeGameID(input: string): string;
    /**
     * Encodes a UTF-8 string into a custom base64 game ID format.
     *
     * - Encodes the input string using standard base64.
     * - Replaces `+`, `/`, and `=` characters to make it URL-safe.
     * - Adds the GAME_ID_PREFIX.
     *
     * @param input - Raw string to encode as a game ID.
     * @returns Encoded game ID string or the original input if encoding fails.
     */
    function encodeGameIDLegacy(input: string): string;
    /**
     * Creates a proxy-based object that behaves like a plain object,
     * but is backed by an internal `Map`. Allows for:
     *
     * - Map-style access and mutation.
     * - Proxy-based integration with object semantics (`in`, `for...in`, etc.).
     *
     * @template T - Type of the original object.
     * @param plainObj - An optional base object to initialize the map from.
     * @returns An object containing:
     *   - `map`: the internal `Map` storing key-value pairs.
     *   - `proxied`: a proxy object with object-like behavior powered by the `Map`.
     *
     * @example
     * const { map, proxied } = makeMapPlain({ a: 1 });
     * proxied.b = 2;
     * console.log(map.get("b")); // 2
     */
    function makeMapPlain<T extends Record<ObjectKey, any>>(plainObj?: T): {
        map: Map<keyof T, T[keyof T]>;
        proxied: T;
    };
    /**
     * Returns a shuffled version of the input array or object.
     *
     * - Arrays are shuffled using the Fisher-Yates algorithm.
     * - Objects are converted to key-value entries, shuffled, then reconstructed.
     *
     * @template T - Type of array elements or object values.
     * @param inp - Input array or object to shuffle.
     * @returns Shuffled array or object of the same type.
     *
     * @example
     * shuffle([1, 2, 3]); // e.g., [3, 1, 2]
     * shuffle({ a: 1, b: 2 }); // e.g., { b: 2, a: 1 }
     */
    function shuffle<T>(array: T[]): T[];
    function shuffle<O extends Record<ObjectKey, any>>(object: O): O;
    /**
     * Returns a random integer between the given min and max values (inclusive).
     *
     * - Both `min` and `max` are inclusive.
     * - If `min` is greater than `max`, the values are swapped internally.
     *
     * @param min - The lower bound (inclusive).
     * @param max - The upper bound (inclusive).
     * @returns A random integer within the specified range.
     *
     * @example
     * randomInt(1, 5); // e.g., 3
     * randomInt(5, 5); // 5
     * randomInt(10, 1); // e.g., 7 (handles swapped bounds)
     */
    function randomInt(min: number, max: number): number;
    /**
     * Shuffles an array in-place using the Fisher-Yates algorithm.
     *
     * - Produces a uniformly random permutation.
     * - Returns a new array (does not mutate the original).
     *
     * @template T - Type of elements in the array.
     * @param array - Input array to shuffle.
     * @returns A new array with shuffled elements.
     *
     * @example
     * fisherYates([1, 2, 3]); // e.g., [2, 3, 1]
     */
    function fisherYates<T>(array: T[]): T[];
    /**
     * Recursively sorts the keys of an object to produce a normalized structure.
     * Useful for consistent hashing, equality checks, or serialization where key order matters.
     *
     * @template T
     * @param input - The input to normalize, which may be an object, array, or primitive.
     * @returns A new object/array with keys sorted recursively, or the original primitive value.
     *
     * @example
     * const obj = { b: 1, a: { d: 4, c: 3 } };
     * const normalized = normalize(obj);
     * // normalized = { a: { c: 3, d: 4 }, b: 1 }
     */
    function normalize<T>(input: T): T;
    /**
     * Validates that an object conforms to a partial schema of validation functions.
     * Each schema key maps to a function that returns true if the value is valid, false otherwise.
     * Does not throw; instead returns a tuple of validity and error messages.
     *
     * @template T extends object
     * @param obj - The object to validate.
     * @param schema - Partial validation schema.
     * @returns A tuple where the first element indicates overall validity,
     *   and the second is an array of error messages for failed validations.
     *
     * @example
     * const schema = {
     *   age: (val) => typeof val === "number" && val > 0,
     *   name: (val) => typeof val === "string" && val.length > 0,
     * };
     * const [isValid, errors] = conform({ age: 25, name: "Alice" }, schema);
     */
    function conform<T extends object>(obj: any, schema: Partial<Record<keyof T, (val: any) => boolean>>): [boolean, string[]];
    /**
     * Creates a new object by picking only the specified keys from the input object.
     *
     * @template T extends object, K extends keyof T
     * @param obj - Source object to pick properties from.
     * @param keys - Array of keys to select.
     * @returns New object containing only the picked keys.
     *
     * @example
     * const obj = { a: 1, b: 2, c: 3 };
     * const picked = pick(obj, ['a', 'c']);
     * // picked = { a: 1, c: 3 }
     */
    function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;
    /**
     * Infers the simple type or shape of a given value as a string.
     * Recognizes "array", "null", or the result of `typeof`.
     *
     * @param value - The value to infer the type of.
     * @returns The inferred type string: "array", "null", or `typeof` result.
     *
     * @example
     * infer([1,2]); // "array"
     * infer(null);  // "null"
     * infer(123);   // "number"
     */
    function infer(value: any[]): "array";
    function infer(value: null): "null";
    function infer(value: string): "string";
    function infer(value: number): "number";
    function infer(value: boolean): "boolean";
    function infer(value: undefined): "undefined";
    function infer(value: Function): "function";
    function infer(value: object): "object";
    function infer(value: any): string;
    /**
     * Recursively searches an object to find the path (array of keys) to a given target value.
     * Returns null if the target is not found.
     *
     * @param obj - The object to search within.
     * @param target - The target value to find.
     * @param path - Accumulated path during recursion (for internal use).
     * @returns Array of keys representing the path to the target, or null if not found.
     *
     * @example
     * const obj = { a: { b: { c: 42 } } };
     * trace(obj, 42); // ["a", "b", "c"]
     */
    function trace(obj: any, target: any, path?: string[]): string[] | null;
    /**
     * Converts an array of objects into a lookup map keyed by a specified object property.
     *
     * @template T, K extends keyof T
     * @param array - Array of objects to index.
     * @param key - Key property name to use as the map key.
     * @returns Object mapping from stringified key values to corresponding objects.
     *
     * @example
     * const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
     * const userMap = index(users, "id");
     * // userMap = { "1": { id: 1, name: "Alice" }, "2": { id: 2, name: "Bob" } }
     */
    function index<T, K extends keyof T>(array: T[], key: K): Record<string, T>;
    /**
     * Remaps keys of an object according to a mapping function or key map object.
     * If no mapping exists for a key, it retains the original key.
     *
     * @template T extends object
     * @param obj - The source object whose keys will be remapped.
     * @param mapper
     *   Either an object mapping old keys to new keys, or a function that returns the new key for each entry.
     * @returns New object with remapped keys and original values.
     *
     * @example
     * remap({ a: 1, b: 2 }, { a: "alpha" }); // { alpha: 1, b: 2 }
     * remap({ a: 1, b: 2 }, (k, v) => k.toUpperCase()); // { A: 1, B: 2 }
     */
    function remap<T extends object>(obj: T, mapper: {
        [K in keyof T]?: string;
    } | ((key: keyof T, value: T[keyof T]) => string)): Record<string, any>;
    /**
     * Asserts that a condition is truthy. Throws an error with a message if the condition is falsy.
     * Useful for runtime type checks and ensuring invariants.
     *
     * @param condition - Condition to assert truthy.
     * @param message- Error message for the thrown exception.
     * @throws {Error} Throws if the condition is falsy.
     *
     * @example
     * assert(typeof value === "string", "Value must be a string");
     */
    function assert(condition: any, message?: string): asserts condition;
    /**
     * Returns a random element from an array, or null if the array is empty.
     *
     * @template T
     * @param array - The array to sample from.
     * @returns A randomly chosen element, or null if the array has no elements.
     *
     * @example
     * sample([1, 2, 3]); // might return 2
     * sample([]);        // returns null
     */
    function sample<T>(array: T[]): T | null;
}

export { Datum };
