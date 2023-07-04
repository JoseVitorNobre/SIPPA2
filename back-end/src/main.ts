import { NestFactory } from '@nestjs/core';
import { AppModule } from './application/modules/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // // Swagger Documentation
  const config = new DocumentBuilder()
    .setTitle('SIPPA 2')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('sippa2', app, document);

  // // Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // // CORS
  app.enableCors();

  await app.listen(3333);
}
bootstrap();
