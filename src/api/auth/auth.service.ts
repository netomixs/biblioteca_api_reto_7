import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
 
import { UserLogin } from './dto/user-credentials.dto';

@Injectable()
export class AuthService {
    constructor(private usersService: UsuarioService,
        private jwtService: JwtService) {

    }


    async getJWT(user: UserLogin) {
        var usuario = await this.usersService.findByUserAndPassword(user.usuario, user.password);
 
        if(usuario==null) {
            return null
        }
        if(usuario.id<=0){
            return null
        }
        const payload = { username: usuario.usuario, sub: usuario.id, type: usuario.nivel };

        return {

            access_token: this.jwtService.sign(payload),
        };
    }
    async validateToken(token: string) {
        try {
 
          const decoded = this.jwtService.verify(token, { secret: 'secretKey' });
 
          return decoded;  
        } catch (error) {
          return null;
        }
      }

}
