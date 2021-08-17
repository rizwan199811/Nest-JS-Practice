import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log("listening on:",'http://192.168.16.10:4000/')
  await app.listen(4000);
}
bootstrap();
