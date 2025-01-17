import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3001', 'https://www.speeds-test.com'], // Permite solo solicitudes de esta URL
  });
  
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
