import type { IContact } from '../interface/contact.interface.js';



export const EMAIL = (data: IContact): string => `<!DOCTYPE html>
<html lang="es">

<head>
<meta charset="UTF-8">

<style>

  body {
    margin: 0;
    padding: 0;
    background-color: #0F172A;
    font-family: Arial, Helvetica, sans-serif;
  }

  .container {
    max-width: 650px;
    margin: 2rem auto;
    background-color: #1E293B;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid #334155;
  }

  .header {
    padding: 2rem;
    text-align: center;
    background: linear-gradient(
      135deg,
      #2563EB,
      #1D4ED8
    );
  }

  .header h1 {
    margin: 0;
    color: #FFFFFF;
    font-size: 1.8rem;
  }

  .body {
    padding: 2rem;
  }

  .card {
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: #0F172A;
    border: 1px solid #334155;
    border-radius: 12px;
  }

  .label {
    display: block;
    margin-bottom: .4rem;
    font-weight: bold;
    color: #60A5FA;
  }

  .value {
    color: #E2E8F0;
    line-height: 1.6;
  }

  .message {
    min-height: 120px;
    white-space: pre-wrap;
  }

  .footer {
    padding: 1.5rem;
    text-align: center;
    border-top: 1px solid #334155;
    color: #94A3B8;
    font-size: .9rem;
  }

</style>

</head>

<body>

  <div class="container">

    <div class="header">
      <h1>🚀 Nueva Propuesta de Proyecto</h1>
    </div>

    <div class="body">

      <div class="card">
        <span class="label">
          Nombre
        </span>

        <span class="value">
          ${data.nombre}
        </span>
      </div>

      <div class="card">
        <span class="label">
          Correo Electrónico
        </span>

        <span class="value">
          ${data.email}
        </span>
      </div>

      <div class="card">
        <span class="label">
          Servicio Requerido
        </span>

        <span class="value">
          ${data.servicio}
        </span>
      </div>

      <div class="card">
        <span class="label">
          Descripción del Proyecto
        </span>

        <div class="value message">
          ${data.mensaje}
        </div>
      </div>

    </div>

    <div class="footer">
      Mensaje enviado desde tu portafolio web · 2026
    </div>

  </div>

</body>

</html>`;
