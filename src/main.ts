import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RestriccionDiaGuard } from './api/auth/guard/time.guard';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new RestriccionDiaGuard());
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,   // Elimina los campos que no están definidos en el DTO
    forbidNonWhitelisted: true,  // Genera error si se envían campos no permitidos
    transform: true,    // Transforma los datos a los tipos correctos
  }));
  const config = new DocumentBuilder()
    .setTitle('Api Biblioteca')
    .setDescription('Api de biblioteca')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
