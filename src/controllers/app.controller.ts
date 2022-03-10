import { Controller, Get, Query } from '@nestjs/common';
import { NestLogger } from 'nest-logs';
import { AppService } from '../services/app.service';
import { encode, decode } from 'js-base64';
import { Data, DataType } from '@copyist/web-report-sdk';

@NestLogger()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/report')
  async report(@Query('data') str) {
    const dataStr = decode(decodeURI(str));
    let data: Data | Data[] = [];
    try {
      data = JSON.parse(dataStr);
    } catch (e) {
      console.log('JSON.parse失败：', e);
    }
    let promises = [];
    if (Array.isArray(data)) {
      // 批量数据
      promises = data.map((d) => this.appService.saveReportData(d));
    } else {
      promises = [this.appService.saveReportData(data)];
    }
    await Promise.all(promises);
    return '';
  }

  @Get('/query')
  async query(@Query('type') type: DataType) {
    return this.appService.getReport(type);
  }
}
