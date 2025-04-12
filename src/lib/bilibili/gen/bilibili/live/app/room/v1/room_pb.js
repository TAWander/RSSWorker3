// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/live/app/room/v1/room.proto (package bilibili.live.app.room.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message bilibili.live.app.room.v1.GetStudioListReq
 */
export const GetStudioListReq = proto3.makeMessageType(
  "bilibili.live.app.room.v1.GetStudioListReq",
  () => [
    { no: 1, name: "room_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message bilibili.live.app.room.v1.GetStudioListResp
 */
export const GetStudioListResp = proto3.makeMessageType(
  "bilibili.live.app.room.v1.GetStudioListResp",
  () => [
    { no: 1, name: "status", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "master_list", kind: "message", T: GetStudioListResp_StudioMaster, repeated: true },
  ],
);

/**
 * @generated from message bilibili.live.app.room.v1.GetStudioListResp.Pendants
 */
export const GetStudioListResp_Pendants = proto3.makeMessageType(
  "bilibili.live.app.room.v1.GetStudioListResp.Pendants",
  () => [
    { no: 1, name: "frame", kind: "message", T: GetStudioListResp_Pendant },
    { no: 2, name: "badge", kind: "message", T: GetStudioListResp_Pendant },
  ],
  {localName: "GetStudioListResp_Pendants"},
);

/**
 * @generated from message bilibili.live.app.room.v1.GetStudioListResp.Pendant
 */
export const GetStudioListResp_Pendant = proto3.makeMessageType(
  "bilibili.live.app.room.v1.GetStudioListResp.Pendant",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "position", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "desc", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "GetStudioListResp_Pendant"},
);

/**
 * @generated from message bilibili.live.app.room.v1.GetStudioListResp.StudioMaster
 */
export const GetStudioListResp_StudioMaster = proto3.makeMessageType(
  "bilibili.live.app.room.v1.GetStudioListResp.StudioMaster",
  () => [
    { no: 1, name: "uid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "room_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "uname", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "face", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "pendants", kind: "message", T: GetStudioListResp_Pendants },
    { no: 6, name: "tag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "tag_type", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
  {localName: "GetStudioListResp_StudioMaster"},
);

