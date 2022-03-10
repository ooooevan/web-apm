import mongoose, { Schema } from 'mongoose';

import { DataType, StabilityType } from '@copyist/web-report-sdk';
import { Data } from '@copyist/web-report-sdk';

/** 异步资源性能 */
const RequestStabilitySchema = new Schema({
  /** 应用id */
  appId: String,
  /** 匿名id */
  anonymousId: String,
  /** 登录id */
  distinctId: String,
  /** 一级类型 */
  type: {
    type: String,
    enum: Object.keys(DataType),
    default: DataType.stability,
  },
  /** 二级类型 */
  subType: {
    type: String,
    enum: Object.keys(StabilityType),
    default: StabilityType.request,
  },
  /**页面url */
  url: String,
  /**页面标题 */
  title: String,
  /** 时间戳 */
  timeStamp: Number,
  /** performance时间 */
  performanceStamp: Number,

  /**响应状态码，0表示失败 */
  status: Number,
  /**如果报错，message */
  message: String,
  /**xhr response字段 */
  bodyUsed: Boolean,
  /**缓存情况 */
  cacheType: String,
  /**请求地址 */
  name: String,
  /** 请求标签 */
  initiatorType: String,
  /**耗时 */
  duration: Number,
  /**encode body大小 */
  encodedBodySize: Number,
  /**dncode body大小 */
  decodedBodySize: Number,
  /**请求开始时间，从页面初始化开始 */
  startTime: Number,
  /**协议 */
  nextHopProtocol: String,
  /**传输的大小 */
  transferSize: Number,
});

export default mongoose.model<Data>('RequestStability', RequestStabilitySchema);
