import { transporter } from '../config/email.js';
import { EMAIL } from '../constant/email.js';
import { IContact } from '../interface/contact.interface.js';

export class ContactService {

  async enviarCorreo(data: IContact) {

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,

      subject: `🚀 Nueva propuesta de ${data.nombre}`,

      html: EMAIL(data)
    });

    return {
      success: true,
      message: 'Correo enviado correctamente'
    };
  }

}