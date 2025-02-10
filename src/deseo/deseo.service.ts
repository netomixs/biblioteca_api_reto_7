import { Injectable } from '@nestjs/common';
import { CreateDeseoDto } from './dto/create-deseo.dto';
import { UpdateDeseoDto } from './dto/update-deseo.dto';
import { Deseo } from './entities/deseo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as nodemailer from "nodemailer";
@Injectable()
export class DeseoService {
    constructor(
      @InjectRepository(Deseo)
      private repository: Repository<Deseo>,
    ) {
  
    }
  async create(createDeseoDto: CreateDeseoDto) {
    const fechaActual = new Date();
   var resultado =await   this.eviarCorreo("Nuevo Deseo", createDeseoDto.deseo+" "+ fechaActual);
   createDeseoDto.metadata=resultado
    return this.repository.save(createDeseoDto);
  }

  findAll() {
    return this.repository.find();
  }
  findLast(){
    return this.repository.findOne({
      order: {
        fechaRegistro: "DESC",  
      },
  })
}
  async eviarCorreo(titulo:string,cuerpo:string) {
 var transporter = nodemailer.createTransport({
   host: 'smtp-biblioteca-api.alwaysdata.net', // Servidor SMTP
 
    auth: {
      user: "biblioteca-api@alwaysdata.net", // Reemplaza con tu correo
      pass: "POKEMONDIAMANTEYPERLA", // Reemplaza con tu contraseña de la app
    },
  });
  const mailOptions = {
    from: "biblioteca-api@alwaysdata.net", // Correo del remitente
    to: "netomixdeleon@gmail.com", // Correo del destinatario
    subject: titulo,
    text: cuerpo, // Contenido en texto
  };
  try {
    const info = await transporter.sendMail(mailOptions);
     return { message: "Correo enviado correctamente",
      info: info.response
     };
  } catch (error) {
     return { message: "Error al enviar correo",
      info: error.response
     };
  }
}
  findOne(id: number) {
    return `This action returns a #${id} deseo`;
  }

  update(id: number, updateDeseoDto: UpdateDeseoDto) {
    return `This action updates a #${id} deseo`;
  }

  remove(id: number) {
    return `This action removes a #${id} deseo`;
  }
   formatoFechaCompleta(fecha: Date): string {
    const dia = fecha.getDate().toString().padStart(2, '0'); // Día con dos dígitos
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Mes con dos dígitos
    const anio = fecha.getFullYear(); // Año
    const horas = fecha.getHours().toString().padStart(2, '0'); // Horas con dos dígitos
    const minutos = fecha.getMinutes().toString().padStart(2, '0'); // Minutos con dos dígitos
    const segundos = fecha.getSeconds().toString().padStart(2, '0'); // Segundos con dos dígitos
  
    return `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`;
  }
  
}
