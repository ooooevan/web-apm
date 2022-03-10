import {
  Data,
  DataType,
  StabilityType,
  StatisticsType,
} from '@copyist/web-report-sdk';
import { Injectable } from '@nestjs/common';
import {
  Clickstatistics,
  Error,
  RequestStability,
  Track,
  NavigationStability,
} from '../models';
@Injectable()
export class AppService {
  async saveReportData(data: Data) {
    switch (data.type) {
      case DataType.error:
        return Error.create(data);
      case DataType.track:
        return Track.create(data);
      case DataType.stability:
        switch (data.subType) {
          case StabilityType.navigationTiming:
            return NavigationStability.create(data);
          case StabilityType.request:
          case StabilityType.resource:
            return RequestStability.create(data);
        }
      case DataType.statistics:
        switch (data.subType) {
          case StatisticsType.click:
            return Clickstatistics.create(data);
          case StatisticsType.pageView:
            return Clickstatistics.create(data);
        }
    }
  }
  async getReport(type: DataType) {
    switch (type) {
      case DataType.error:
        return Error.find();
      case DataType.track:
        return Track.find();
      case DataType.stability:
        return NavigationStability.find();
      // return RequestStability.find();
      // switch (data.subType) {
      //   case StabilityType.navigationTiming:
      //     return Navigation.create(data);
      //   case StabilityType.request:
      //   case StabilityType.resource:
      //     return RequestStability.create(data);
      // }
      case DataType.statistics:
        return Clickstatistics.find();
      // return pageViewStatistics.find();
      // switch (data.subType) {
      //   case StatisticsType.click:
      //     return Clickstatistics.create(data);
      //   case StatisticsType.pageView:
      //     return Clickstatistics.create(data);
      // }
    }
  }
}
