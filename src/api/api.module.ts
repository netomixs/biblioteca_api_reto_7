import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { AuthModule } from './auth/auth.module';
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
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestriccionDiaGuard } from './auth/guard/auth.guard';
import { ConfigService } from '@nestjs/config';
@Module({
  imports: [TypeOrmModule.forRoot({
 
    type: 'mysql',
    host: 'mysql-biblioteca-api.alwaysdata.net',
  
    username: '358147',
    password: 'POKEMONDIAMANTEYPERLA',
    database: 'biblioteca-api_dnao',
    entities: [Libro,
      Autor,
      Persona,
      Editorial,
      Genero,
      Lector,
      NivelUsuario,
      Prestamo,
      Usuario],
    synchronize: true,
  }),
    LibrosModule,
    AutorModule,
    PersonaModule,
    EditorialModule,
    GeneroModule,
    LectorModule,
    NivelUsuarioModule,
    PrestamoModule,
    UsuarioModule,
    AuthModule],
  controllers: [ApiController],
  providers: [ApiService],

})
export class ApiModule { }
