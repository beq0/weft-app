import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.SERVER_PORT, () => {
    Logger.log(`API started on port ${process.env.SERVER_PORT}`);
  });
}
bootstrap();
