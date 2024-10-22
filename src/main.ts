import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Get the ConfigService instance
  const configService = app.get(ConfigService);
  
  // Retrieve the PORT from the config service
  const port = configService.get<number>('PORT') || 3000; // Default to 3000 if PORT is not set
  
  await app.listen(port);
}

bootstrap();
