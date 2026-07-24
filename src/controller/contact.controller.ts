import { Color, green } from './../../node_modules/@colors/colors/index.d';
import { Request, Response } from 'express';
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

      const resultado = await this.contactService.enviarCorreo(req.body);

      if (!resultado) {
        throw Error('error de envio ')
      }
      logger.info(resultado.message);

      res.status(200).json(resultado);
    } catch (error) {
      logger.error('No se pudo enviar el correo', error)
    }
  };

}