// email.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email') // Especifica la ruta base para este controlador
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('enviar-correo') // La ruta completa será /email/enviar-correo
  async enviarCorreoEjemplo(@Body() body: any) {
    const destinatario = body.destinatario;
    const asunto = body.asunto;
    const cuerpo = body.cuerpo;

    try {
      const info = await this.emailService.enviarCorreo(destinatario, asunto, cuerpo);
      return { message: 'Correo enviado con éxito', info };
    } catch (error) {
      return { message: 'Error al enviar el correo', error };
    }
  }
}
