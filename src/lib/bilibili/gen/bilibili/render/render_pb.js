// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/render/render.proto (package bilibili.render, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Any, proto3 } from "@bufbuild/protobuf";

/**
 * 
 *
 * @generated from message bilibili.render.Render
 */
export const Render = proto3.makeMessageType(
  "bilibili.render.Render",
  () => [
    { no: 1, name: "code", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "ttl", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "data", kind: "message", T: Any },
  ],
);

