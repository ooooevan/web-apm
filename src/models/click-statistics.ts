import mongoose, { Schema } from 'mongoose';
import { DataType, StatisticsType } from '@copyist/web-report-sdk';
import { ClickStatisticsData } from '@copyist/web-report-sdk';
// Data去掉path、lastPath、lastElement

/** 页面点击数据 */
const ClickStatisticsSchema = new Schema({
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
    default: DataType.statistics,
  },
  /** 二级类型 */
  subType: {
    type: String,
    enum: Object.keys(StatisticsType),
    default: StatisticsType.pageView,
  },
  /**页面url */
  url: String,
  /**页面标题 */
  title: String,
  /** 时间戳 */
  timeStamp: Number,
  /** performance时间 */
  performanceStamp: Number,
  /** 交互元素路径 */
  path: String,
  /** 最后交互的元素 */
  lastElement: String,
  /** 最后交互的元素路径 */
  lastPath: String,
  /**坐标x */
  pageX: Number,
  /**坐标y */
  pageY: Number,
  /**可视height */
  innerHeight: Number,
  /**可视width */
  innerWidth: Number,
  /**文档height */
  clientHeight: Number,
  /**文档width */
  clientWidth: Number,
});

export default mongoose.model<ClickStatisticsData>(
  'Clickstatistics',
  ClickStatisticsSchema,
);
