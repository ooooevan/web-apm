import mongoose, { Schema } from 'mongoose';
import { DataType, ErrorType} from '@copyist/web-report-sdk/es/config';
import {  ErrorData} from '@copyist/web-report-sdk/es/data';

/** 自定义事件 */
const ErrorSchema = new Schema({
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
    default: DataType.error,
  },
  /** 二级类型 */
  subType: {
    type: String,
    enum: Object.keys(ErrorType),
    default: ErrorType.normal,
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

  /**错误信息栈 */
  stack: String,
  /**错误message */
  message: String,
  /**文件 */
  filename: String,
  /**行 */
  lineno: Number,
  /** 列*/
  colno: Number,
});

export default mongoose.model<ErrorData>('Error', ErrorSchema);
