# Proyecto: Web de Evento (trabajo en equipo con Git)

Plantilla basada en el diseño de una web de evento de boxeo (fondo azul noche, dorado y tipografía Cinzel).
La web está dividida en **5 partes independientes**: cada alumno trabaja SOLO en sus archivos, así no hay conflictos al unir las ramas.

## Estructura

```
web-evento/
├── index.html            ← NO TOCAR (profesor)
├── css/base.css          ← NO TOCAR (colores y clases comunes)
├── js/include.js         ← NO TOCAR (carga las secciones)
├── secciones/            ← un HTML por alumno
├── css/                  ← un CSS por alumno
├── js/                   ← un JS por alumno
├── img/alumnoX/          ← imágenes de cada alumno
└── tareas/               ← tareas de cada alumno
```

## Reparto

| Alumno | Rama | Sección | Archivos que puede editar |
|---|---|---|---|
| 1 | `alumno1-header-hero` | Menú, portada, cuenta regresiva | `secciones/01-header-hero.html`, `css/01-header-hero.css`, `js/01-header-hero.js`, `img/alumno1/` |
| 2 | `alumno2-participantes` | Grilla de participantes + ficha destacada | `secciones/02-participantes.html`, `css/02-participantes.css`, `js/02-participantes.js`, `img/alumno2/` |
| 3 | `alumno3-pronosticos-combates` | Pronósticos con barras + resultados | `secciones/03-pronosticos-combates.html`, `css/03-...css`, `js/03-...js`, `img/alumno3/` |
| 4 | `alumno4-patrocinadores-videos-sede` | Marcas, videos (modal), sede + mapa | `secciones/04-...html`, `css/04-...css`, `js/04-...js`, `img/alumno4/` |
| 5 | `alumno5-horarios-faq-footer` | Horarios por país, FAQ, pie de página | `secciones/05-...html`, `css/05-...css`, `js/05-...js`, `img/alumno5/` |

**Reglas de oro**
1. Solo editas TUS archivos. Nunca `index.html`, `base.css` ni `include.js`.
2. Tus clases CSS empiezan con tu prefijo: `.a1-`, `.a2-`, `.a3-`, `.a4-`, `.a5-`.
3. Puedes usar las variables de `base.css` (`var(--dorado)`, `var(--fondo)`, etc.) y las clases comunes (`.btn`, `.tarjeta`, `.titulo-seccion`, `.eyebrow`, `.seccion`, `.contenedor`).

## Cómo ver la web
Las secciones se cargan con JavaScript, así que **no funciona con doble clic**.
- VS Code → extensión **Live Server** → clic derecho en `index.html` → *Open with Live Server*.
- O publicarla con **GitHub Pages**.

## Pasos en Git (alumno)

```bash
# 1. Clonar el repositorio del profesor
git clone https://github.com/USUARIO/web-evento.git
cd web-evento

# 2. Crear tu rama (cambia por la tuya)
git checkout -b alumno1-header-hero

# 3. Trabajar y guardar cambios
git add .
git commit -m "Alumno 1: personalizo header y hero"

# 4. Subir tu rama
git push -u origin alumno1-header-hero
```
Luego en GitHub: **Compare & pull request** hacia `main`.

## Pasos en Git (profesor)

```bash
cd web-evento
git init
git add .
git commit -m "Plantilla inicial"
git branch -M main
git remote add origin https://github.com/USUARIO/web-evento.git
git push -u origin main
```
Agregar a los alumnos como colaboradores (Settings → Collaborators) o que hagan *fork*.
Al final, unir los 5 pull requests en `main`: como cada uno tocó archivos distintos, no habrá conflictos.
