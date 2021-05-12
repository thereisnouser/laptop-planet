import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const PORT = 5000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  app.setGlobalPrefix('api');
  app.useStaticAssets(join(__dirname, '..', '..', 'public'));

  await app.listen(PORT);
}
bootstrap();
