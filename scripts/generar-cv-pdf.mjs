import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const B = new URL('../', import.meta.url).pathname; // raíz del proyecto
const b64 = (p) => readFileSync(p).toString('base64');

const inter = b64(`${B}src/app/fonts/inter-latin-variable.woff2`);
const playfair = b64(`${B}src/app/fonts/playfair-latin-variable.woff2`);
const foto = b64(`${B}public/FOTO.jpg`);

const experiencia = [
  {
    puesto: 'Desarrollador TIC — Ámbito educativo',
    empresa: 'EdiLoja',
    lugar: 'Loja, Ecuador',
    periodo: '01/2023 — Presente',
    actual: true,
    puntos: [
      'Implementación, personalización y administración de Moodle y Canvas LMS para instituciones educativas.',
      'Virtualización de cursos en línea aplicando estándares de diseño instruccional y accesibilidad.',
      'Automatización de la producción de contenido con Python y las APIs REST de Canvas.',
      'Desarrollo de recursos interactivos en HTML, CSS y JavaScript embebidos en aulas virtuales.',
      'Administración de servidores, respuesta a incidentes, endurecimiento de la infraestructura y soporte a docentes.',
    ],
  },
  {
    puesto: 'Analista de Desarrollo de Sistemas',
    empresa: 'UTPL — Universidad Técnica Particular de Loja',
    lugar: 'Loja, Ecuador',
    periodo: '05/2022 — 12/2022',
    puntos: [
      'Gestión documental y carga en repositorios institucionales.',
      'Desarrollo de procesos para mantener un registro histórico accesible para el personal.',
      'Optimización de procesos internos mediante soluciones TIC.',
    ],
  },
  {
    puesto: 'Digitalizador TIC',
    empresa: 'EdiLoja',
    lugar: 'Loja, Ecuador',
    periodo: '02/2021 — 04/2022',
    puntos: [
      'Virtualización de metacursos en HTML y CSS para la modalidad abierta y a distancia de la UTPL.',
      'Revisión y adaptación de parámetros operativos de planes docentes.',
      'Implementación de recursos interactivos digitales.',
    ],
  },
  {
    puesto: 'Desarrollador Full Stack',
    empresa: 'Ingenix',
    lugar: 'Loja, Ecuador',
    periodo: '10/2020 — 12/2020',
    puntos: [
      'Desarrollo front-end y back-end de aplicaciones web en JavaScript.',
      'Participación en los proyectos Toosh-Eventos y Megashop.',
    ],
  },
];

const proyectos = [
  {
    titulo: 'Automatización EdiLoja',
    anio: '2026',
    desc: 'Pipeline en Python que migra cursos de Canvas comprimiendo metacursos de 16 semanas a formatos de 5 y 8 semanas: extracción por API, mapeo del curso origen, copia de recursos y generación del HTML final, operado desde una interfaz Flask.',
    stack: 'Python · Flask · BeautifulSoup · Canvas REST API',
  },
  {
    titulo: 'Canvas Course Builder',
    anio: '2026',
    desc: 'Constructor visual de cursos como bundle de Theme JS. Escribe directamente contra la API REST de Canvas usando la sesión del docente y genera un curso completo sin exponer HTML al usuario final.',
    stack: 'JavaScript · Canvas REST API · Files API',
  },
  {
    titulo: 'Validador de guías didácticas',
    anio: '2025 — 2026',
    desc: 'Pipeline Word → JSON y validador en navegador para guías editoriales: normalización APA de tablas y figuras con numeración SEQ, detección de tablas fusionadas y reprocesamiento idempotente.',
    stack: 'Python · python-docx · JavaScript · HTML',
  },
  {
    titulo: 'Respuesta a incidente e infraestructura',
    anio: '2026',
    desc: 'Investigación y erradicación de un compromiso de seguridad en el hosting corporativo, identificación del vector de reinfección, informes técnicos y hoja de ruta de migración a la nube en tres fases.',
    stack: 'Linux · cPanel · Hardening · AWS / GCP / Azure',
  },
];

const competencias = [
  { t: 'Lenguajes y frameworks', v: 'Python · Django · Flask · JavaScript · TypeScript · Vue.js · React · Next.js · Java · HTML5 · CSS3' },
  { t: 'Plataformas educativas', v: 'Canvas LMS · Moodle · Canvas REST API · Theme JS · Diseño instruccional · Accesibilidad WCAG' },
  { t: 'Infraestructura y seguridad', v: 'Linux · Windows Server · Docker · Redes · cPanel · AWS Lightsail · Hardening · Ethical Hacking' },
  { t: 'Datos y herramientas', v: 'MongoDB · PostgreSQL · Power BI · Odoo · BeautifulSoup · Git · Tailwind CSS · Bootstrap' },
];

const formacion = [
  { t: 'Máster en Ciberseguridad', s: 'UNIR — Universidad Internacional de La Rioja', d: '2022 — Presente' },
  { t: 'Ingeniero en Sistemas Informáticos y Computación', s: 'UTPL — Universidad Técnica Particular de Loja', d: 'Titulado' },
  { t: 'Asistente en Desarrollo de Software', s: 'Centro de Estudios Latinoamericano', d: '2017' },
];

const certificaciones = [
  { t: 'Ethical Hacking', s: 'Hacker Mentor · Quito', d: '2023' },
  { t: 'Business Intelligence con Power BI', s: 'Sociedad Ecuatoriana de Estadística', d: '2022' },
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

const html = `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><title>CV — Hermel Santiago Aguirre Montaño</title>
<style>
@font-face{font-family:'Inter';src:url(data:font/woff2;base64,${inter}) format('woff2');font-weight:100 900;font-style:normal;font-display:block}
@font-face{font-family:'Playfair';src:url(data:font/woff2;base64,${playfair}) format('woff2');font-weight:400 900;font-style:normal;font-display:block}

@page{size:A4;margin:0}
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#004170; --navy-dark:#00304F; --gold:#B8891A; --gold-light:#F2BF42;
  --ink:#14202D; --body:#3C4959; --muted:#6C7A8A; --line:#DCE3EC; --tint:#F4F7FB;
}
html,body{-webkit-print-color-adjust:exact;print-color-adjust:exact}
body{font-family:'Inter',system-ui,sans-serif;color:var(--body);font-size:9.4pt;line-height:1.5}

/* ---------- Cabecera ---------- */
.banda{
  background:linear-gradient(115deg,#00243C 0%,var(--navy) 62%,#125B93 100%);
  color:#fff;padding:15mm 14mm 11mm;position:relative;
}
.banda::after{content:'';position:absolute;left:0;right:0;bottom:0;height:2.2mm;background:var(--gold-light)}
.cab{display:flex;gap:9mm;align-items:center}
.cab-txt{flex:1;min-width:0}
.nombre{font-family:'Playfair',Georgia,serif;font-weight:600;font-size:25pt;line-height:1.06;letter-spacing:-.2pt}
.rol{color:#F7D57E;font-size:11pt;margin-top:2.6mm;font-weight:500}
.lema{color:#C6D6E6;font-size:8.6pt;margin-top:3.2mm;max-width:118mm;line-height:1.5}
.contacto{display:flex;flex-wrap:wrap;gap:2mm 6mm;margin-top:5mm;font-size:8.3pt;color:#D9E5F1}
.contacto b{font-weight:600;color:#F7D57E;letter-spacing:.4pt;font-size:7.1pt;text-transform:uppercase;margin-right:1.4mm}
.foto{width:30mm;height:37mm;border-radius:2.5mm;object-fit:cover;border:.5mm solid rgba(242,191,66,.55);flex:none;filter:saturate(.95)}

/* ---------- Cuerpo ---------- */
.cuerpo{padding:9mm 14mm 12mm}
section{margin-top:7mm;break-inside:auto}
section:first-child{margin-top:0}
.salto{break-before:page;margin-top:0;padding-top:13mm}
h2{
  font-family:'Playfair',Georgia,serif;font-size:12.6pt;font-weight:600;color:var(--navy);
  letter-spacing:-.1pt;padding-bottom:1.6mm;border-bottom:.35mm solid var(--line);
  margin-bottom:4mm;display:flex;align-items:baseline;gap:2.5mm;break-after:avoid
}
h2::after{content:'';flex:none;width:9mm;height:.8mm;background:var(--gold-light);border-radius:1mm}
.perfil{text-align:justify;color:var(--body)}

/* Experiencia */
.item{margin-bottom:4.6mm;break-inside:avoid}
.item:last-child{margin-bottom:0}
.item-cab{display:flex;justify-content:space-between;align-items:baseline;gap:5mm}
.puesto{font-size:10.2pt;font-weight:650;color:var(--ink)}
.fecha{font-size:7.5pt;font-weight:600;color:var(--muted);letter-spacing:.5pt;text-transform:uppercase;white-space:nowrap}
.empresa{font-size:8.9pt;color:var(--navy);font-weight:550;margin-top:.6mm}
.empresa span{color:var(--muted);font-weight:400}
.tag-actual{display:inline-block;margin-left:2mm;background:#FDF3DA;color:#8A6410;border:.25mm solid #E9CE84;
  border-radius:6mm;padding:.2mm 1.8mm;font-size:6.6pt;font-weight:700;letter-spacing:.5pt;text-transform:uppercase;vertical-align:.4mm}
ul{list-style:none;margin-top:2mm}
li{position:relative;padding-left:4.2mm;margin-bottom:1.1mm;font-size:9pt;line-height:1.45}
li::before{content:'';position:absolute;left:0;top:1.7mm;width:2mm;height:.45mm;background:var(--gold);border-radius:1mm}

/* Proyectos */
.proy{display:grid;grid-template-columns:1fr 1fr;gap:3.6mm 5mm}
.tarjeta{border:.3mm solid var(--line);border-left:.9mm solid var(--navy);border-radius:1.6mm;
  background:var(--tint);padding:3.2mm 3.6mm;break-inside:avoid}
.tarjeta h3{font-size:9.4pt;font-weight:650;color:var(--ink);display:flex;justify-content:space-between;
  align-items:baseline;gap:3mm}
.tarjeta h3 em{font-style:normal;font-size:7pt;font-weight:600;color:var(--muted);letter-spacing:.4pt;white-space:nowrap}
.tarjeta p{font-size:8.3pt;line-height:1.45;margin-top:1.4mm;color:var(--body)}
.tarjeta .stack{margin-top:2mm;font-size:7.4pt;font-weight:600;color:var(--navy);letter-spacing:.1pt}

/* Competencias */
.comp{display:grid;grid-template-columns:1fr 1fr;gap:3mm 6mm}
.comp div{break-inside:avoid}
.comp dt{font-size:7.4pt;font-weight:700;color:var(--gold);letter-spacing:.7pt;text-transform:uppercase;margin-bottom:1mm}
.comp dd{font-size:8.5pt;line-height:1.5;color:var(--body)}

/* Formación / certificaciones / idiomas */
.dos{display:grid;grid-template-columns:1fr 1fr;gap:6mm}
.lista{break-inside:avoid}
.lista h3{font-size:7.6pt;font-weight:700;color:var(--gold);letter-spacing:.7pt;text-transform:uppercase;margin-bottom:2.4mm}
.fila{display:flex;justify-content:space-between;align-items:baseline;gap:4mm;padding:1.9mm 0;border-top:.25mm solid var(--line)}
.fila:first-of-type{border-top:none;padding-top:0}
.fila b{font-size:9pt;font-weight:600;color:var(--ink);display:block}
.fila small{font-size:8pt;color:var(--muted);display:block;margin-top:.3mm}
.fila i{font-style:normal;font-size:7.3pt;font-weight:600;color:var(--muted);letter-spacing:.4pt;
  text-transform:uppercase;white-space:nowrap}
.idiomas{display:flex;gap:4mm;margin-top:1mm}
.idioma{flex:1;border:.3mm solid var(--line);border-radius:1.6mm;padding:2.4mm 3mm;background:var(--tint)}
.idioma b{font-size:9pt;color:var(--ink)}
.idioma span{display:block;font-size:7.6pt;color:var(--gold);font-weight:700;letter-spacing:.5pt;text-transform:uppercase;margin-top:.6mm}

.pie{margin-top:8mm;padding-top:3mm;border-top:.25mm solid var(--line);
  font-size:7.2pt;color:var(--muted);display:flex;justify-content:space-between;letter-spacing:.3pt}
</style></head><body>

<header class="banda">
  <div class="cab">
    <div class="cab-txt">
      <div class="nombre">Hermel Santiago<br>Aguirre Montaño</div>
      <div class="rol">Ingeniero en Sistemas · Especialista en Tecnología Educativa</div>
      <div class="lema">Diseño y automatizo la infraestructura que sostiene la educación en línea: plataformas LMS, pipelines de contenido y recursos digitales de aprendizaje.</div>
      <div class="contacto">
        <span><b>Correo</b>santiaguirrem@gmail.com</span>
        <span><b>Tel</b>+593 99 395 4787</span>
        <span><b>Ubicación</b>Loja, Ecuador</span>
        <span><b>LinkedIn</b>in/santiago-aguirre-93b4251b1</span>
        <span><b>GitHub</b>github.com/utpl</span>
      </div>
    </div>
    <img class="foto" src="data:image/jpeg;base64,${foto}" alt="Hermel Santiago Aguirre Montaño">
  </div>
</header>

<main class="cuerpo">

  <section>
    <h2>Perfil profesional</h2>
    <p class="perfil">Ingeniero en Sistemas con cinco años de experiencia en el ecosistema editorial y universitario, especializado en plataformas de gestión del aprendizaje. Llevo cursos completos desde el guion editorial hasta el aula virtual publicada: virtualización bajo estándares de diseño instruccional, desarrollo de recursos interactivos y automatización de los procesos repetitivos con Python y las APIs de Canvas. Sumo administración de servidores y seguridad de la información —curso el Máster en Ciberseguridad en UNIR—, lo que me permite responsabilizarme del ciclo completo: desarrollar, desplegar, endurecer y mantener.</p>
  </section>

  <section>
    <h2>Experiencia profesional</h2>
    ${experiencia.map((e) => `
    <div class="item">
      <div class="item-cab">
        <div class="puesto">${esc(e.puesto)}${e.actual ? '<span class="tag-actual">Actual</span>' : ''}</div>
        <div class="fecha">${esc(e.periodo)}</div>
      </div>
      <div class="empresa">${esc(e.empresa)}${e.lugar ? ` <span>· ${esc(e.lugar)}</span>` : ''}</div>
      <ul>${e.puntos.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
    </div>`).join('')}
  </section>

  <section class="salto">
    <h2>Proyectos destacados</h2>
    <div class="proy">
      ${proyectos.map((p) => `
      <article class="tarjeta">
        <h3><span>${esc(p.titulo)}</span><em>${esc(p.anio)}</em></h3>
        <p>${esc(p.desc)}</p>
        <div class="stack">${esc(p.stack)}</div>
      </article>`).join('')}
    </div>
  </section>

  <section>
    <h2>Competencias técnicas</h2>
    <dl class="comp">
      ${competencias.map((c) => `<div><dt>${esc(c.t)}</dt><dd>${esc(c.v)}</dd></div>`).join('')}
    </dl>
  </section>

  <section>
    <h2>Formación y certificaciones</h2>
    <div class="dos">
      <div class="lista">
        <h3>Formación académica</h3>
        ${formacion.map((f) => `<div class="fila"><div><b>${esc(f.t)}</b><small>${esc(f.s)}</small></div><i>${esc(f.d)}</i></div>`).join('')}
      </div>
      <div class="lista">
        <h3>Certificaciones</h3>
        ${certificaciones.map((c) => `<div class="fila"><div><b>${esc(c.t)}</b><small>${esc(c.s)}</small></div><i>${esc(c.d)}</i></div>`).join('')}
        <h3 style="margin-top:4.5mm">Idiomas</h3>
        <div class="idiomas">
          <div class="idioma"><b>Español</b><span>Nativo</span></div>
          <div class="idioma"><b>Inglés</b><span>Intermedio</span></div>
        </div>
      </div>
    </div>
  </section>

  <div class="pie">
    <span>Hermel Santiago Aguirre Montaño · Curriculum Vitae</span>
    <span>santiaguirrem@gmail.com</span>
  </div>
</main>
</body></html>`;


const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(600);
await page.pdf({
  path: B + 'public/cv-santiago-aguirre.pdf',
  format: 'A4',
  printBackground: true,
  margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' },
});
await browser.close();
console.log('PDF generado');
