import mongoose, { Schema } from 'mongoose';

import { DataType, TrackType } from '@copyist/web-report-sdk';
import { Data } from '@copyist/web-report-sdk';

/** 自定义事件 */
const TrackSchema = new Schema({
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
    default: DataType.track,
  },
  /** 二级类型 */
  subType: {
    type: String,
    enum: Object.keys(TrackType),
    default: TrackType.track,
  },
  /**页面url */
  url: String,
  /**页面标题 */
  title: String,
  /** 时间戳 */
  timeStamp: Number,
  /** performance时间 */
  performanceStamp: Number,
  /** 元素路径 */
  path: String,
  /** 最后一个交互元素及属性 */
  lastElement: String,
  /** 最后一个交互元素路径 */
  lastPath: String,
  /** 自定义事件名 */
  name: String,
  /** 自定义事件数据 */
  data: Object,
});

export default mongoose.model<Data>('Track', TrackSchema);
