import mongoose, { Schema } from 'mongoose';

import { DataType, StabilityType, TrackType } from '@copyist/web-report-sdk';
import { Data } from '@copyist/web-report-sdk';

/** navigation 导航性能 */
const NavigationStabilitySchema = new Schema({
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
    default: StabilityType.navigationTiming,
  },
  /**页面url */
  url: String,
  /**页面标题 */
  title: String,
  /** 时间戳 */
  timeStamp: Number,
  /** performance时间 */
  performanceStamp: Number,
  /** 累积偏移分数 */
  cls: Number,
  /** domContentLoadedEvent 执行时间  */
  domContentEvent: Number,
  /** domContentLoaded 执行完 */
  domLoaded: Number,
  domainLookup: Number,
  /** domloadEvent load执行时间  */
  domloadEvent: Number,
  /** first contentful paint */
  fcp: Number,
  /** first input */
  fi: Number,
  /** first input delay（用户响应延时） */
  fid: Number,
  /** first paint 白屏*/
  fp: Number,
  /** http */
  http: Number,
  /** largest contentful paint 当前最大内容绘制，首屏*/
  lcp: Number,
  /** load 执行完 */
  load: Number,
  redirect: Number,
  request: Number,
  response: Number,
  /** ssl连接 */
  ssl: Number,
  tcp: Number,
  /** 首字节时间 */
  ttfb: Number,
  unload: Number,
});

export default mongoose.model<Data>(
  'NavigationStability',
  NavigationStabilitySchema,
);
