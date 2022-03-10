import mongoose from 'mongoose';

import Clickstatistics from './click-statistics';
import Error from './error';
import NavigationStability from './navigation-stability';
import Pagestistics from './page-view-statistics';
import Track from './track';
import RequestStability from './request-stability';
import config from '../../config';

mongoose.connect(config.MONGODB_URL).then(
  () => {
    console.log('数据库启动成功');
  },
  (err) => {
    console.log('数据库启动失败', err);
  },
);

export {
  Clickstatistics,
  Pagestistics,
  NavigationStability,
  RequestStability,
  Error,
  Track,
};
