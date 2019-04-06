/**
 * @author jdiaz5513
 */

import * as s from "capnp-ts/lib/std/schema.capnp";
import initTrace from "debug";
import * as ts from "typescript";

const trace = initTrace("capnpc:constants");
trace("load");

/** undefined */

export const __ = undefined;

/** boolean */

export const BOOLEAN_TYPE = ts.createTypeReferenceNode("boolean", __);

/** capnp */

export const CAPNP = ts.createIdentifier("capnp");

/** A Mapping of various types to their list type constructor. */

export const ConcreteListType = {
  [s.Type.ANY_POINTER]: "capnp.AnyPointerList",
  [s.Type.BOOL]: "capnp.BoolList",
  [s.Type.DATA]: "capnp.DataList",
  [s.Type.ENUM]: "capnp.Uint16List",
  [s.Type.FLOAT32]: "capnp.Float32List",
  [s.Type.FLOAT64]: "capnp.Float64List",
  [s.Type.INT16]: "capnp.Int16List",
  [s.Type.INT32]: "capnp.Int32List",
  [s.Type.INT64]: "capnp.Int64List",
  [s.Type.INT8]: "capnp.Int8List",
  [s.Type.INTERFACE]: "capnp.InterfaceList",
  [s.Type.LIST]: "capnp.PointerList",
  [s.Type.STRUCT]: "capnp.CompositeList",
  [s.Type.TEXT]: "capnp.TextList",
  [s.Type.UINT16]: "capnp.Uint16List",
  [s.Type.UINT32]: "capnp.Uint32List",
  [s.Type.UINT64]: "capnp.Uint64List",
  [s.Type.UINT8]: "capnp.Uint8List",
  [s.Type.VOID]: "capnp.VoidList",
};

/** export */

export const EXPORT = ts.createToken(ts.SyntaxKind.ExportKeyword);

/** length */

export const LENGTH = ts.createIdentifier("length");

/** Some data used to help generate code for primitive struct fields. */

export const Primitive: { [t: number]: { byteLength: number; getter: string; mask: string; setter: string } } = {
  [s.Type.BOOL]: {
    byteLength: 1,
    getter: "getBit",
    mask: "getBitMask",
    setter: "setBit",
  },
  [s.Type.ENUM]: {
    byteLength: 2,
    getter: "getUint16",
    mask: "getUint16Mask",
    setter: "setUint16",
  },
  [s.Type.FLOAT32]: {
    byteLength: 4,
    getter: "getFloat32",
    mask: "getFloat32Mask",
    setter: "setFloat32",
  },
  [s.Type.FLOAT64]: {
    byteLength: 8,
    getter: "getFloat64",
    mask: "getFloat64Mask",
    setter: "setFloat64",
  },
  [s.Type.INT16]: {
    byteLength: 2,
    getter: "getInt16",
    mask: "getInt16Mask",
    setter: "setInt16",
  },
  [s.Type.INT32]: {
    byteLength: 4,
    getter: "getInt32",
    mask: "getInt32Mask",
    setter: "setInt32",
  },
  [s.Type.INT64]: {
    byteLength: 8,
    getter: "getInt64",
    mask: "getInt64Mask",
    setter: "setInt64",
  },
  [s.Type.INT8]: {
    byteLength: 1,
    getter: "getInt8",
    mask: "getInt8Mask",
    setter: "setInt8",
  },
  [s.Type.UINT16]: {
    byteLength: 2,
    getter: "getUint16",
    mask: "getUint16Mask",
    setter: "setUint16",
  },
  [s.Type.UINT32]: {
    byteLength: 4,
    getter: "getUint32",
    mask: "getUint32Mask",
    setter: "setUint32",
  },
  [s.Type.UINT64]: {
    byteLength: 8,
    getter: "getUint64",
    mask: "getUint64Mask",
    setter: "setUint64",
  },
  [s.Type.UINT8]: {
    byteLength: 1,
    getter: "getUint8",
    mask: "getUint8Mask",
    setter: "setUint8",
  },
  [s.Type.VOID]: {
    byteLength: 0,
    getter: "getVoid",
    mask: "getVoidMask",
    setter: "setVoid",
  },
};

/** number */

export const NUMBER_TYPE = ts.createTypeReferenceNode("number", __);

/** __O */
// This is referenced so frequently it gets a shorthand!
export const OBJECT_SIZE = ts.createIdentifier("__O");

/** readonly */

export const READONLY = ts.createToken(ts.SyntaxKind.ReadonlyKeyword);

/** No... comment? */

export const SOURCE_COMMENT = `/* tslint:disable */

/**
 * This file has been automatically generated by the [capnpc-ts utility](https://github.com/jdiaz5513/capnp-ts).
 */

`;

/** static */

export const STATIC = ts.createToken(ts.SyntaxKind.StaticKeyword);

/** string */

export const STRING_TYPE = ts.createTypeReferenceNode("string", __);

/** __S */
// This is referenced so frequently it gets a shorthand!
export const STRUCT = ts.createIdentifier("__S");

/** this */

export const THIS = ts.createThis();

/**
 * Used to look up the ts.capnp file by its ID.
 *
 * NOTE: The file ID should never change.
 */

export const TS_FILE_ID = "e37ded525a68a7c9";

/** value */

export const VALUE = ts.createIdentifier("value");

/** void */

export const VOID_TYPE = ts.createTypeReferenceNode("void", __);

/** any */

export const ANY_TYPE = ts.createTypeReferenceNode("any", __);
