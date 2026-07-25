import { transporter } from '../config/email.js';
import { env } from '../config/env.js';
import { EMAIL } from '../constant/email.js';
import type { IContact } from '../interface/contact.interface.js';

export class ContactService {

  async enviarCorreo(data: IContact) {

    if (!env.EMAIL_USER || !env.EMAIL_PASS) {
      throw new Error('EMAIL_USER y EMAIL_PASS deben estar configurados');
    }

    await transporter.sendMail({
      from: env.EMAIL_USER,
      to: env.EMAIL_USER,

      subject: `🚀 Nueva propuesta de ${data.nombre}`,

      html: EMAIL(data)
    });

    return {
      success: true,
      message: 'Correo enviado correctamente'
    };
  }

}
