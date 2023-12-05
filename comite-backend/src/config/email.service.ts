
// email.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'manuel.ospina2004@gmail.com', // Tu dirección de correo electrónico
        pass: 'bwvc gehu vods rlar', // Tu contraseña
      },
    });
  }

  async enviarCorreo(destinatario: string, asunto: string, cuerpo: string) {
    const opcionesCorreo = {
      from: 'Carla Plus <carlaplus@sena.edu.co>',
      to: destinatario,
      subject: asunto,
      text: cuerpo,
    };
    

    try {
      const info = await this.transporter.sendMail(opcionesCorreo);
      console.log('Correo enviado: %s', info.messageId);
    } catch (error) {
      console.error('Error al enviar el correo: ', error);
    }
  }
}
