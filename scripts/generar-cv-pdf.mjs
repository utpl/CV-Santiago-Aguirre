import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const B = new URL('../', import.meta.url).pathname; // raíz del proyecto
const b64 = (p) => readFileSync(p).toString('base64');

const inter = b64(`${B}src/app/fonts/inter-latin-variable.woff2`);
const playfair = b64(`${B}src/app/fonts/playfair-latin-variable.woff2`);
const foto = b64(`${B}public/FOTO.jpg`);

const experiencia = [
  {
    puesto: 'Desarrollador — Ámbito educativo',
    empresa: 'EdiLoja',
    lugar: 'Loja, Ecuador',
    periodo: '01/2023 — Presente',
    actual: true,
    puntos: [
      'Diseño y desarrollo de aplicaciones en Python (FastAPI, SQLAlchemy, PostgreSQL, Redis) para automatizar la producción editorial.',
      'Interfaces web en TypeScript, React y Next.js, y en htmx cuando el proyecto no justifica un build de front.',
      'Integración con las APIs REST de Canvas LMS: autenticación, subida de archivos y creación de contenido programática.',
      'Administración de Moodle y Canvas LMS, servidores Linux y documentación técnica (arquitectura, ADRs, deuda técnica).',
    ],
  },
  {
    puesto: 'Analista de Desarrollo de Sistemas',
    empresa: 'UTPL — Universidad Técnica Particular de Loja',
    lugar: 'Loja, Ecuador',
    periodo: '05/2022 — 12/2022',
    puntos: [
      'Gestión documental y mantenimiento de repositorios institucionales.',
      'Análisis y optimización de procesos internos mediante soluciones TIC.',
    ],
  },
  {
    puesto: 'Digitalizador TIC',
    empresa: 'EdiLoja',
    lugar: 'Loja, Ecuador',
    periodo: '02/2021 — 04/2022',
    puntos: [
      'Maquetación de metacursos en HTML y CSS para la modalidad abierta y a distancia de la UTPL.',
      'Desarrollo de recursos interactivos autocontenidos en HTML, CSS, JavaScript y SVG.',
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
    desc: 'Plataforma completa para la producción de guías didácticas y metacursos de Canvas: un agente de IA genera el borrador, los docentes lo revisan en un editor web, un validador aplica las reglas institucionales y el resultado se publica en Canvas. Monorepo con pruebas, ADRs y documentación propia.',
    stack: 'FastAPI · PostgreSQL 17 · Redis + RQ · SQLAlchemy · htmx',
    enlace: 'github.com/utpl/Atomatizacion_Ediloja',
  },
  {
    titulo: 'Loja Moda',
    anio: '2026',
    desc: 'Ecommerce de moda en Next.js que permite al usuario ver cómo le quedaría una prenda a partir de su propia fotografía. Catálogo, cuentas de usuario y flujo de compra, desplegado en Vercel.',
    stack: 'Next.js · TypeScript · React · Vercel',
    enlace: 'loja-moda-delta.vercel.app',
  },
  {
    titulo: 'Canvas Course Builder',
    anio: '2026',
    desc: 'Constructor visual de cursos como bundle de Theme JS. Escribe directamente contra la API REST de Canvas usando la sesión del docente y genera un curso completo sin exponer HTML al usuario final.',
    stack: 'JavaScript · Canvas REST API · Files API',
  },
  {
    titulo: 'Apolo — Gestión de personal',
    anio: '2025',
    desc: 'Aplicación web para el registro y seguimiento de personal, construida sobre Next.js con Firebase para autenticación y persistencia. Desplegada en Vercel.',
    stack: 'Next.js · TypeScript · Firebase',
    enlace: 'apolo-ten.vercel.app',
  },
];

const competencias = [
  { t: 'Back-end', v: 'Python 3.13 · FastAPI · Django · Flask · SQLAlchemy · Alembic · Redis + RQ · JWT / Argon2 · Node.js · Java' },
  { t: 'Front-end', v: 'TypeScript · React · Next.js · Vue.js · Tailwind CSS · htmx · HTML5 · CSS3 · SVG · Accesibilidad WCAG' },
  { t: 'Datos e infraestructura', v: 'PostgreSQL · MongoDB · Firebase · Docker · Linux · Windows Server · Vercel · AWS Lightsail · Git' },
  { t: 'Integraciones y seguridad', v: 'Canvas LMS REST API · Moodle · Theme JS · python-docx · BeautifulSoup · Hardening · Ethical Hacking' },
];

const formacion = [
  { t: 'Máster en Ciberseguridad', s: 'UNIR — Universidad Internacional de La Rioja', d: 'Prev. 2027' },
  { t: 'Ingeniero en Sistemas Informáticos y Computación', s: 'UTPL — Universidad Técnica Particular de Loja', d: 'Titulado' },
  { t: 'Asistente en Desarrollo de Software', s: 'Centro de Estudios Latinoamericano', d: '2017' },
];

const certificaciones = [
  { t: 'Ethical Hacking', s: 'Hacker Mentor · Quito', d: '2022' },
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
  color:#fff;padding:11mm 14mm 8.5mm;position:relative;
}
.banda::after{content:'';position:absolute;left:0;right:0;bottom:0;height:2.2mm;background:var(--gold-light)}
.cab{display:flex;gap:9mm;align-items:center}
.cab-txt{flex:1;min-width:0}
.nombre{font-family:'Playfair',Georgia,serif;font-weight:600;font-size:25pt;line-height:1.06;letter-spacing:-.2pt}
.rol{color:#F7D57E;font-size:12pt;margin-top:2.8mm;font-weight:600}
.sub{color:#9FBBD6;font-size:8.8pt;margin-top:1.2mm;letter-spacing:.2pt}
.lema{color:#C6D6E6;font-size:8.4pt;margin-top:2.6mm;max-width:126mm;line-height:1.45}
.contacto{display:flex;flex-wrap:wrap;gap:1.6mm 5mm;margin-top:4mm;font-size:8.1pt;color:#D9E5F1}
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
.tarjeta .link{margin-top:1.4mm;font-size:7.2pt;color:var(--gold);font-weight:600}

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
      <div class="rol">Desarrollador Full Stack</div>
      <div class="sub">Python · FastAPI · PostgreSQL · TypeScript · React · Next.js</div>
      <div class="lema">APIs en Python sobre PostgreSQL y Redis, interfaces en Next.js y TypeScript. Cinco años entregando software en producción.</div>
      <div class="contacto">
        <span><b>Correo</b>santiaguirrem@gmail.com</span>
        <span><b>Tel</b>+593 99 395 4787</span>
        <span><b>Ubicación</b>Loja, Ecuador</span>
        <span><b>LinkedIn</b>in/santiago-aguirre-93b4251b1</span>
        <span><b>GitHub</b>github.com/utpl</span>
        <span><b>Web</b>cv-santiago-aguirre.vercel.app</span>
      </div>
    </div>
    <img class="foto" src="data:image/jpeg;base64,${foto}" alt="Hermel Santiago Aguirre Montaño">
  </div>
</header>

<main class="cuerpo">

  <section>
    <h2>Perfil profesional</h2>
    <p class="perfil">Desarrollador full stack con cinco años construyendo software que se usa a diario. En el back trabajo con Python —FastAPI, SQLAlchemy, PostgreSQL, Redis— y en el front con TypeScript, React y Next.js: escribo sistemas completos, del modelo de datos y la API hasta la interfaz y el despliegue. Mi experiencia viene del sector editorial y universitario, donde los problemas rara vez son de manual: integrar plataformas con APIs de terceros, procesar documentos con reglas de negocio complejas y automatizar procesos que antes tomaban semanas.</p>
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
        ${p.enlace ? `<div class="link">${esc(p.enlace)}</div>` : ''}
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
