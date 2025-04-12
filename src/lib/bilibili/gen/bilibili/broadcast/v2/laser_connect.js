// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=js"
// @generated from file bilibili/broadcast/v2/laser.proto (package bilibili.broadcast.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { LaserEventResp } from "./laser_pb.js";

/**
 * Laser
 *
 * @generated from service bilibili.broadcast.v2.Laser
 */
export const Laser = {
  typeName: "bilibili.broadcast.v2.Laser",
  methods: {
    /**
     * 监听Laser事件
     *
     * @generated from rpc bilibili.broadcast.v2.Laser.WatchEvent
     */
    watchEvent: {
      name: "WatchEvent",
      I: Empty,
      O: LaserEventResp,
      kind: MethodKind.ServerStreaming,
    },
  }
};

