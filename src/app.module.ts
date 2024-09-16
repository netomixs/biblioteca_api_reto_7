import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibrosModule } from './libros/libros.module';
import { Libro } from './libros/entities/libro.entity';
import { AutorModule } from './autor/autor.module';
import { PersonaModule } from './persona/persona.module';
import { EditorialModule } from './editorial/editorial.module';
import { GeneroModule } from './genero/genero.module';
import { LectorModule } from './lector/lector.module';
import { NivelUsuarioModule } from './nivel-usuario/nivel-usuario.module';
import { PrestamoModule } from './prestamo/prestamo.module';
import { UsuarioModule } from './usuario/usuario.module';
import { Autor } from './autor/entities/autor.entity';
import { Persona } from './persona/entities/persona.entity';
import { Editorial } from './editorial/entities/editorial.entity';
import { Genero } from './genero/entities/genero.entity';
import { Lector } from './lector/entities/lector.entity';
import { NivelUsuario } from './nivel-usuario/entities/nivel-usuario.entity';
import { Prestamo } from './prestamo/entities/prestamo.entity';
import { Usuario } from './usuario/entities/usuario.entity';
import { ApiModule } from './api/api.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'biblioteca7',
    entities: [Libro, Autor, Persona, Editorial, Genero, Lector, NivelUsuario, Prestamo, Usuario],
    synchronize: true,
  }), LibrosModule, AutorModule, PersonaModule, EditorialModule, GeneroModule, LectorModule, NivelUsuarioModule, PrestamoModule, UsuarioModule, ApiModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
