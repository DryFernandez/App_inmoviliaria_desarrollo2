import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <html>
        <head>
          <title>API Endpoints</title>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
          <style>
            body { font-family: 'Roboto', Arial, sans-serif; margin: 0; background: #f4f6fa; }
            .container { max-width: 700px; margin: 2rem auto; background: #fff; border-radius: 12px; box-shadow: 0 2px 12px #0001; padding: 2rem; }
            .form-compact {
              max-width: 320px;
              margin: 1.5rem auto;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 0.7rem 1rem;
              padding: 1.2rem 1rem;
            }
            .form-compact h3 {
              grid-column: 1 / -1;
              text-align: center;
            }
            .form-compact button {
              grid-column: 1 / -1;
              width: 100%;
            }
            .form-compact .result {
              grid-column: 1 / -1;
            }
            .form-row {
              display: flex;
              flex-wrap: wrap;
              gap: 2rem;
              justify-content: center;
              margin-bottom: 2rem;
            }
            @media (max-width: 800px) {
              .form-row { flex-direction: column; gap: 1rem; }
            }
            .form-compact label {
              margin-top: 0.2rem;
              margin-bottom: 0.1rem;
            }
            h1 { color: #2c3e50; text-align: center; }
            ul { line-height: 2; }
            code { background: #f4f4f4; padding: 2px 4px; border-radius: 3px; }
            form { margin-bottom: 2rem; padding: 1.5rem; background: #f9f9f9; border-radius: 8px; box-shadow: 0 1px 4px #0001; }
            label { display: block; margin-top: 0.7rem; font-weight: 500; color: #34495e; }
            input, select { margin-bottom: 0.7rem; width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 4px; font-size: 1rem; }
            button { margin-top: 0.7rem; background: #1976d2; color: #fff; border: none; padding: 0.6rem 1.2rem; border-radius: 4px; font-size: 1rem; cursor: pointer; transition: background 0.2s; }
            button:hover { background: #125ea2; }
            h2 { color: #1976d2; margin-top: 2.5rem; }
            h3 { color: #34495e; margin-bottom: 0.5rem; }
            .result { margin-top: 0.5rem; font-size: 0.95rem; color: #1976d2; word-break: break-all; }
            .endpoint-list { margin-bottom: 2.5rem; }
            @media (max-width: 800px) {
              .container { padding: 1rem; }
              .form-compact { max-width: 98vw; }
            }
            .empresa-fields { display: none; grid-column: 1 / -1; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>API Endpoints</h1>
            <ul class="endpoint-list">
              <li><b>Usuarios</b>
                <ul>
                  <li><a href="/user" target="_blank">GET /user</a> - Listar usuarios</li>
                  <li>POST /user - Crear usuario</li>
                  <li><a href="/user/1" target="_blank">GET /user/:id</a> - Obtener usuario por id</li>
                </ul>
              </li>
              <li><b>Tipos de Identificación</b>
                <ul>
                  <li><a href="/identification-type" target="_blank">GET /identification-type</a> - Listar tipos</li>
                  <li>POST /identification-type - Crear tipo</li>
                  <li><a href="/identification-type/1" target="_blank">GET /identification-type/:id</a> - Obtener tipo por id</li>
                </ul>
              </li>
              <li><b>Auth</b>
                <ul>
                  <li>POST /auth/register - Registro de usuario</li>
                  <li>POST /auth/login - Login</li>
                </ul>
              </li>
            </ul>
            <h2>Probar métodos POST</h2>
            <div class="form-row">
              <form id="userForm" class="form-compact">
                <h3>Crear Usuario</h3>
                <label>Tipo de Usuario:
                  <select name="userTypeId" id="userTypeId" required onchange="toggleEmpresaFields()">
                    <option value="1">Normal</option>
                    <option value="2">Empresa</option>
                  </select>
                </label>
                <label>Username:<input name="username" required></label>
                <label>Tipo ID:
                  <select name="identificationTypeId" id="identificationTypeId" required></select>
                </label>
                <label>N° Identificación:<input name="identificationNumber" required></label>
                <label>Nombre:<input name="firstName" required></label>
                <label>Apellido:<input name="lastName" required></label>
                <label>Teléfono:<input name="phone" required></label>
                <label>Email:<input name="email" type="email" required></label>
                <label>Contraseña:<input name="password" type="password" required></label>
                <label>Foto:<input name="photo" type="file" accept="image/*"></label>
                <label>Documento:<input name="identificationDocument" type="file" accept="application/pdf,image/*"></label>
                <div class="empresa-fields" id="empresaFields">
                  <label>Razón Social:<input name="companyName"></label>
                  <label>Nombre Comercial:<input name="companyTradeName"></label>
                  <label>Tipo de Sociedad:<input name="companyLegalType"></label>
                  <label>Estado Legal:<input name="companyLegalStatus"></label>
                </div>
                <button type="submit">Crear Usuario</button>
                <div class="result" id="userResult"></div>
              </form>
            </div>
            <form id="typeForm" class="form-compact">
              <h3>Crear Tipo de Identificación</h3>
              <label>Nombre:<input name="name" required></label>
              <button type="submit">Crear Tipo</button>
              <div class="result" id="typeResult"></div>
            </form>
            <form id="registerForm" class="form-compact">
              <h3>Registro de Usuario</h3>
              <label>Username:<input name="username" required></label>
              <label>Email:<input name="email" type="email" required></label>
              <label>Contraseña:<input name="password" type="password" required></label>
              <button type="submit">Registrar</button>
              <div class="result" id="registerResult"></div>
            </form>
            <form id="loginForm" class="form-compact">
              <h3>Login</h3>
              <label>Username:<input name="username" required></label>
              <label>Contraseña:<input name="password" type="password" required></label>
              <button type="submit">Login</button>
              <div class="result" id="loginResult"></div>
            </form>
          </div>
          <script>

            async function loadIdentificationTypes() {
              const select = document.getElementById('identificationTypeId');
              select.innerHTML = '';
              try {
                const res = await fetch('/identification-type');
                const types = await res.json();
                types.forEach(type => {
                  const opt = document.createElement('option');
                  opt.value = type.id;
                  opt.textContent = type.name;
                  select.appendChild(opt);
                });
              } catch (e) {
                const opt = document.createElement('option');
                opt.value = '';
                opt.textContent = 'Error cargando tipos';
                select.appendChild(opt);
              }
            }

            function toggleEmpresaFields() {
              const userTypeId = document.getElementById('userTypeId').value;
              const empresaFields = document.getElementById('empresaFields');
              if (userTypeId === '2') {
                empresaFields.style.display = 'grid';
                empresaFields.querySelectorAll('input').forEach(i => i.required = true);
              } else {
                empresaFields.style.display = 'none';
                empresaFields.querySelectorAll('input').forEach(i => i.required = false);
              }
            }
            // Inicializar visibilidad y cargar tipos al cargar
            window.onload = function() {
              toggleEmpresaFields();
              loadIdentificationTypes();
            };

            function postForm(formId, url, resultId) {
              document.getElementById(formId).onsubmit = async function(e) {
                e.preventDefault();
                const form = e.target;
                const data = {};
                const filePromises = [];
                for (const el of form.elements) {
                  if (!el.name) continue;
                  if (el.type === 'file' && el.files && el.files[0]) {
                    // Leer archivo como base64
                    const file = el.files[0];
                    const p = new Promise((resolve) => {
                      const reader = new FileReader();
                      reader.onload = function(evt) {
                        data[el.name] = evt.target.result;
                        resolve();
                      };
                      reader.readAsDataURL(file);
                    });
                    filePromises.push(p);
                  } else {
                    data[el.name] = el.value;
                  }
                }
                await Promise.all(filePromises);
                const res = await fetch(url, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data)
                });
                const text = await res.text();
                document.getElementById(resultId).innerText = text;
              }
            }
            postForm('userForm', '/user', 'userResult');
            postForm('typeForm', '/identification-type', 'typeResult');
            postForm('registerForm', '/auth/register', 'registerResult');
            postForm('loginForm', '/auth/login', 'loginResult');
          </script>
        </body>
      </html>
    `;
  }
}
