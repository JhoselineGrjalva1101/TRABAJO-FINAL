# HUB 3DS·A

Portal de repaso de los módulos de 3.º Bachillerato Técnico Vocacional en Desarrollo de Software «A», Instituto Nacional Cantón Lourdes (INDEL).

**Enlace público:** https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/  ← _reemplazar_

## Integrantes y roles

| Integrante | Rol | Módulos que le tocan |
|---|---|---|
| _Nombre 1_ | Líder Git | _…_ |
| _Nombre 2_ | Diseñador UI | _…_ |
| _Nombre 3_ | Curador de contenido | _…_ |
| _Nombre 4_ | QA y accesibilidad | _…_ |

## Qué incluye (niveles de la guía)

- **Base:** portada, navegación, módulos pintados desde `data/modulos.js`, ficha por módulo (instrumentos, programas, herramientas, recursos, evidencias), diseño responsivo, publicación en GitHub Pages.
- **Pro:** buscador y filtros en tiempo real, progreso guardado en el navegador (`localStorage`), quiz con retroalimentación inmediata, modo claro y oscuro.
- **Extra:** atajo de teclado `/` para buscar.

## Estructura

```
index.html          página única
css/estilos.css     estilos (variables para tema claro/oscuro)
js/app.js           lógica: rutas, filtros, progreso, quiz, tema
data/modulos.js     datos de los módulos (aquí se agrega contenido)
```

## Cómo agregar o editar un módulo

Abre `data/modulos.js` y añade un objeto al arreglo con estos campos:
`id`, `nombre`, `docente`, `resumen`, `aprendiste` (3 cosas), `instrumentos`, `programas`, `herramientas`, `recursos` (con `t` y `u`), `evidencias` y `quiz` (preguntas con `p`, `o`, `c` y `e`). No hay que tocar el HTML: el módulo aparece solo.

## Ver el portal en tu computadora

Usa Live Server en VS Code, o desde la carpeta del proyecto: `python -m http.server 8000` y abre `http://localhost:8000`.

## Publicar en GitHub Pages

1. Sube el proyecto a un repositorio público.
2. En **Settings → Pages**, elige la rama `main` y la carpeta raíz (`/`).
3. Espera un par de minutos y abre la URL en una ventana de incógnito.

## Registro de prompts de IA

_Anota aquí cada prompt que usaron, qué respondió la IA y qué verificaron o cambiaron._

| Fecha | Integrante | Prompt | Qué hicimos con la respuesta |
|---|---|---|---|
| 03/11/2026 | _…_ | Construir el portal HUB 3DS·A (Base + Pro) según la guía del Día 1 | Base inicial del proyecto; módulos de ejemplo por reemplazar |

## Créditos

Guía y proyecto del profesor Javier Arturo García Mineros. Módulos con el profesor Javier Mineros y el profesor Arcides Canales.
