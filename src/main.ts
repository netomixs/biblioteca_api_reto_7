import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RestriccionDiaGuard } from './api/auth/guard/time.guard';
import { ValidationPipe } from '@nestjs/common';
declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new RestriccionDiaGuard());
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,   // Elimina los campos que no están definidos en el DTO
    forbidNonWhitelisted: true,  // Genera error si se envían campos no permitidos
    transform: true,    // Transforma los datos a los tipos correctos
  }));
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
