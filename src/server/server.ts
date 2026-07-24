import app from './app.js';
const { sticker, logger } = require('@poppinss/cliui');

const PORT =
  Number(process.env.PORT) || 3001;


app.listen(PORT, () => {
  // initSecrets()

  sticker()
    .add('Servidor HTTP iniciado')
    .add('')
    .add(`Servidor ejecutándose en puerto: ${logger.colors.cyan(PORT)}`)
    .render();
});