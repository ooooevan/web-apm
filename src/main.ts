import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import './models';
import responseTime from 'response-time';

const loggerMiddleware = responseTime(function (req, res, time) {
  console.log(
    req.method,
    'path:',
    req.path,
    'time:',
    time + 'ms',
    'statusCode:',
    res.statusCode,
  );
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(loggerMiddleware);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
