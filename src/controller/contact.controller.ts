import type { Request, Response } from 'express';
import { ContactService } from '../service/contact.service.js';
const { logger } = require('@poppinss/cliui');

export class ContactController {

  private readonly contactService =
    new ContactService();

  public enviar = async (
    req: Request,
    res: Response
  ): Promise<void> => {

    try {
      const { nombre, email, servicio, mensaje } = req.body ?? {};

      if (!nombre || !email || !servicio || !mensaje) {
        res.status(400).json({
          success: false,
          message: 'Todos los campos son obligatorios'
        });
        return;
      }

      const resultado = await this.contactService.enviarCorreo(req.body);

      if (!resultado) {
        throw Error('Error de envio');
      }

      logger.info(resultado.message);

      res.status(200).json(resultado);
    } catch (error) {
      logger.error('No se pudo enviar el correo', error);

      res.status(500).json({
        success: false,
        message: 'No se pudo enviar el correo'
      });
    }
  };

}
