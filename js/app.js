/* HUB 3DS·A · lógica del portal (JavaScript puro) */
(function () {
  'use strict';

  var MODS = window.MODULOS || [];
  var PFX = 'hub3dsa:';
  var main = document.getElementById('contenido');

  /* ---------- utilidades ---------- */
  function lee(k, def) {
    try { var v = localStorage.getItem(PFX + k); return v === null ? def : JSON.parse(v); }
    catch (e) { return def; }
  }
  function guarda(k, v) {
    try { localStorage.setItem(PFX + k, JSON.stringify(v)); } catch (e) {}
  }
  // Crea un elemento. Usa textContent, así nunca se interpreta HTML de los datos.
  function h(tag, attrs, kids) {
    var el = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (a) {
      var v = attrs[a];
      if (a === 'class') el.className = v;
      else if (a === 'text') el.textContent = v;
      else if (a.indexOf('on') === 0) el.addEventListener(a.slice(2), v);
      else el.setAttribute(a, v);
    });
    (kids || []).forEach(function (k) {
      if (k == null) return;
      el.appendChild(typeof k === 'string' ? document.createTextNode(k) : k);
    });
    return el;
  }
  function norm(s) {
    return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }
  function lista(items) {
    return h('ul', {}, items.map(function (t) { return h('li', { text: t }); }));
  }
  function enlaces(items) {
    return h('ul', { class: 'enlaces' }, items.map(function (r) {
      return h('li', {}, [h('a', { href: r.u, target: '_blank', rel: 'noopener', text: r.t })]);
    }));
  }
  function buscar(id) {
    for (var i = 0; i < MODS.length; i++) if (MODS[i].id === id) return MODS[i];
    return null;
  }
  function docentes() {
    var out = [];
    MODS.forEach(function (m) { if (out.indexOf(m.docente) < 0) out.push(m.docente); });
    return out;
  }

  /* ---------- progreso (guardado en el navegador) ---------- */
  function repasados() { return lee('repasados', []); }
  function esRepasado(id) { return repasados().indexOf(id) >= 0; }
  function alternaRepasado(id) {
    var r = repasados(), i = r.indexOf(id);
    if (i >= 0) r.splice(i, 1); else r.push(id);
    guarda('repasados', r);
  }
  function porcentaje() {
    if (!MODS.length) return 0;
    var n = repasados().filter(function (id) { return buscar(id); }).length;
    return Math.round(n * 100 / MODS.length);
  }
  function barraProgreso() {
    var n = repasados().filter(function (id) { return buscar(id); }).length;
    var pista = h('div', { class: 'pista', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': '100', 'aria-valuenow': String(porcentaje()), 'aria-label': 'Progreso del repaso' }, [h('i', { style: 'width:' + porcentaje() + '%' })]);
    return h('div', { class: 'prog' }, [
      h('span', { text: 'Tu progreso: ' + n + ' de ' + MODS.length + ' módulos repasados (' + porcentaje() + ' %)' }),
      pista
    ]);
  }

  /* ---------- tema claro / oscuro ---------- */
  function aplicaTema(t) {
    document.documentElement.setAttribute('data-theme', t);
    var ico = document.getElementById('icoTema');
    if (ico) ico.textContent = t === 'light' ? '☾' : '☀';
  }
  function temaInicial() {
    var g = lee('tema', null);
    if (g) return g;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  document.getElementById('btnTema').addEventListener('click', function () {
    var nuevo = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    aplicaTema(nuevo); guarda('tema', nuevo);
  });
  aplicaTema(temaInicial());

  /* ---------- tarjeta de módulo ---------- */
  function tarjeta(m, i) {
    var ok = esRepasado(m.id);
    return h('a', { class: 'tarjeta c' + ((i % 4) + 1), href: '#/modulo/' + m.id }, [
      h('h3', { text: m.nombre }),
      h('div', { class: 'doc', text: 'Prof. ' + m.docente }),
      h('p', { text: m.resumen }),
      h('div', { class: 'pills' }, m.herramientas.slice(0, 3).map(function (t) { return h('span', { class: 'pill', text: t }); })),
      h('div', { class: 'estado' + (ok ? ' ok' : ''), text: ok ? '✓ Repasado' : 'Pendiente de repasar' })
    ]);
  }

  /* ---------- lista con buscador y filtros ---------- */
  function listaModulos(contenedor) {
    var inBus = h('input', { type: 'search', id: 'fBus', placeholder: 'Ej.: python, SQL, Godot…', autocomplete: 'off' });
    var selDoc = h('select', { id: 'fDoc' }, [h('option', { value: '', text: 'Todos' })].concat(
      docentes().map(function (d) { return h('option', { value: d, text: d }); })));
    var selEst = h('select', { id: 'fEst' }, [
      h('option', { value: '', text: 'Todos' }),
      h('option', { value: 'ok', text: 'Repasados' }),
      h('option', { value: 'pend', text: 'Pendientes' })
    ]);
    var conteo = h('p', { class: 'conteo', 'aria-live': 'polite' });
    var rejilla = h('div', { class: 'rejilla' });

    function pinta() {
      var q = norm(inBus.value.trim());
      var res = MODS.filter(function (m) {
        if (selDoc.value && m.docente !== selDoc.value) return false;
        var rep = esRepasado(m.id);
        if (selEst.value === 'ok' && !rep) return false;
        if (selEst.value === 'pend' && rep) return false;
        if (!q) return true;
        var texto = norm([m.nombre, m.resumen, m.docente].concat(m.programas, m.herramientas).join(' '));
        return texto.indexOf(q) >= 0;
      });
      rejilla.textContent = '';
      if (!res.length) {
        rejilla.appendChild(h('div', { class: 'vacio', text: 'No hay módulos con esos filtros. Prueba con otra palabra.' }));
      } else {
        res.forEach(function (m) { rejilla.appendChild(tarjeta(m, MODS.indexOf(m))); });
      }
      conteo.textContent = res.length + ' de ' + MODS.length + ' módulos';
    }
    inBus.addEventListener('input', pinta);
    selDoc.addEventListener('change', pinta);
    selEst.addEventListener('change', pinta);

    contenedor.appendChild(h('div', { class: 'filtros' }, [
      h('div', {}, [h('label', { for: 'fBus', text: 'Buscar' }), inBus]),
      h('div', {}, [h('label', { for: 'fDoc', text: 'Docente' }), selDoc]),
      h('div', {}, [h('label', { for: 'fEst', text: 'Estado' }), selEst])
    ]));
    contenedor.appendChild(conteo);
    contenedor.appendChild(rejilla);
    pinta();
  }

  /* ---------- vistas ---------- */
  function vistaInicio() {
    var hero = h('header', { class: 'hero' }, [h('div', { class: 'wrap' }, [
      h('p', { class: 'eyebrow', text: 'Instituto Nacional Cantón Lourdes (INDEL) · 3.º Bachillerato en Desarrollo de Software «A»' }),
      h('h1', {}, ['Repasa el año ', h('em', { text: 'módulo a módulo' })]),
      h('p', { class: 'lead', text: 'Aquí encuentras qué hicimos en cada módulo, con qué programas y herramientas, qué instrumentos usamos y dónde seguir aprendiendo. Haz el quiz y marca lo que ya repasaste.' }),
      h('div', { class: 'cta' }, [
        h('a', { class: 'btn', href: '#/modulos', text: 'Empezar a repasar' }),
        h('a', { class: 'btn sec', href: '#/modulos', text: 'Buscar un módulo' })
      ]),
      h('div', { class: 'stats' }, [
        h('div', { class: 'stat' }, [h('b', { text: String(MODS.length) }), h('span', { text: 'módulos' })]),
        h('div', { class: 'stat' }, [h('b', { text: String(MODS.reduce(function (a, m) { return a + m.quiz.length; }, 0)) }), h('span', { text: 'preguntas de quiz' })]),
        h('div', { class: 'stat' }, [h('b', { text: porcentaje() + ' %' }), h('span', { text: 'repasado por ti' })])
      ])
    ])]);
    var sec = h('section', { class: 'bloque' }, [h('div', { class: 'wrap' }, [
      h('h2', { text: 'Módulos del año' }),
      h('p', { class: 'sub', text: 'Elige uno para ver su ficha completa.' }),
      barraProgreso()
    ])]);
    var rej = h('div', { class: 'rejilla' }, MODS.slice(0, 6).map(function (m, i) { return tarjeta(m, i); }));
    sec.firstChild.appendChild(rej);
    if (MODS.length > 6) {
      sec.firstChild.appendChild(h('p', { style: 'margin-top:18px' }, [h('a', { class: 'btn sec', href: '#/modulos', text: 'Ver los ' + MODS.length + ' módulos' })]));
    }
    main.appendChild(hero);
    main.appendChild(sec);
  }

  function vistaModulos() {
    var w = h('div', { class: 'wrap' }, [
      h('h2', { text: 'Todos los módulos' }),
      h('p', { class: 'sub', text: 'Busca por nombre, programa o herramienta y filtra por docente o estado.' }),
      barraProgreso()
    ]);
    listaModulos(w);
    main.appendChild(h('section', { class: 'bloque' }, [w]));
  }

  function vistaFicha(id) {
    var m = buscar(id);
    if (!m) {
      main.appendChild(h('section', { class: 'bloque' }, [h('div', { class: 'wrap' }, [
        h('div', { class: 'vacio', text: 'Ese módulo no existe.' }),
        h('p', { style: 'margin-top:16px' }, [h('a', { href: '#/modulos', text: '← Volver a los módulos' })])
      ])]));
      return;
    }
    var btnRep = h('button', { class: 'btn', type: 'button', 'aria-pressed': 'false' });
    function pintaBtn() {
      var ok = esRepasado(m.id);
      btnRep.className = 'btn' + (ok ? ' hecho' : '');
      btnRep.setAttribute('aria-pressed', ok ? 'true' : 'false');
      btnRep.textContent = ok ? '✓ Módulo repasado' : 'Marcar como repasado';
    }
    btnRep.addEventListener('click', function () { alternaRepasado(m.id); pintaBtn(); });
    pintaBtn();

    var cabecera = h('div', { class: 'wrap' }, [
      h('p', { class: 'migas' }, [h('a', { href: '#/modulos', text: '← Todos los módulos' })]),
      h('div', { class: 'ficha-h' }, [
        h('p', { class: 'doc', text: 'Prof. ' + m.docente }),
        h('h1', { text: m.nombre }),
        h('p', { class: 'lead', text: m.resumen }),
        h('div', { class: 'acciones' }, [btnRep, h('a', { class: 'btn sec', href: '#quiz', text: 'Ir al quiz' })])
      ])
    ]);

    var cols = h('div', { class: 'cols' }, [
      h('div', { class: 'caja ancha' }, [h('h3', { text: 'Lo que aprendí' }), lista(m.aprendiste)]),
      h('div', { class: 'caja' }, [h('h3', { text: 'Instrumentos' }), lista(m.instrumentos)]),
      h('div', { class: 'caja mg' }, [h('h3', { text: 'Programas' }), lista(m.programas)]),
      h('div', { class: 'caja am' }, [h('h3', { text: 'Herramientas' }), lista(m.herramientas)]),
      h('div', { class: 'caja gr' }, [h('h3', { text: 'Evidencias' }), enlaces(m.evidencias)]),
      h('div', { class: 'caja ancha gr' }, [h('h3', { text: 'Recursos para seguir aprendiendo' }), enlaces(m.recursos)])
    ]);

    var quizBox = h('section', { class: 'quiz', id: 'quiz', 'aria-labelledby': 'tQuiz' });
    iniciaQuiz(m, quizBox);

    main.appendChild(h('div', {}, [
      cabecera,
      h('div', { class: 'wrap', style: 'padding-bottom:50px' }, [cols, quizBox])
    ]));
  }

  /* ---------- quiz con retroalimentación inmediata ---------- */
  function iniciaQuiz(m, box) {
    var i = 0, aciertos = 0;
    function pregunta() {
      box.textContent = '';
      var q = m.quiz[i];
      var retro = h('div', { 'aria-live': 'polite' });
      var ops = h('div', { class: 'opciones', role: 'group', 'aria-label': 'Opciones de respuesta' });
      var botones = [];
      q.o.forEach(function (txt, idx) {
        var b = h('button', { class: 'op', type: 'button', text: txt });
        b.addEventListener('click', function () { responde(idx, botones, retro); });
        botones.push(b); ops.appendChild(b);
      });
      box.appendChild(h('h2', { id: 'tQuiz', text: 'Quiz del módulo' }));
      box.appendChild(h('p', { class: 'q-prog', text: 'Pregunta ' + (i + 1) + ' de ' + m.quiz.length }));
      box.appendChild(h('p', { class: 'q-preg', text: q.p }));
      box.appendChild(ops);
      box.appendChild(retro);
    }
    function responde(idx, botones, retro) {
      var q = m.quiz[i], bien = idx === q.c;
      if (bien) aciertos++;
      botones.forEach(function (b, j) {
        b.disabled = true;
        if (j === q.c) b.classList.add('bien');
        else if (j === idx) b.classList.add('mal');
      });
      retro.appendChild(h('div', { class: 'retro ' + (bien ? 'bien' : 'mal') }, [
        h('b', { text: bien ? '¡Correcto! ' : 'No es esa. ' }), q.e
      ]));
      var ultima = i === m.quiz.length - 1;
      var sig = h('button', { class: 'btn', type: 'button', style: 'margin-top:14px', text: ultima ? 'Ver resultado' : 'Siguiente pregunta' });
      sig.addEventListener('click', function () { i++; if (i < m.quiz.length) pregunta(); else fin(); });
      retro.appendChild(sig);
      sig.focus();
    }
    function fin() {
      box.textContent = '';
      var mejores = lee('quiz', {});
      var previo = mejores[m.id] || 0;
      if (aciertos > previo) { mejores[m.id] = aciertos; guarda('quiz', mejores); }
      var msg = aciertos === m.quiz.length ? '¡Dominas este módulo!' : aciertos >= Math.ceil(m.quiz.length / 2) ? 'Vas bien, repasa lo que fallaste.' : 'Repasa la ficha y vuelve a intentarlo.';
      var otra = h('button', { class: 'btn sec', type: 'button', text: 'Intentar de nuevo' });
      otra.addEventListener('click', function () { i = 0; aciertos = 0; pregunta(); });
      box.appendChild(h('h2', { id: 'tQuiz', text: 'Quiz del módulo' }));
      box.appendChild(h('div', { class: 'q-fin' }, [
        h('b', { text: aciertos + ' / ' + m.quiz.length }),
        h('p', { text: msg }),
        h('p', { class: 'q-prog', text: 'Tu mejor resultado: ' + Math.max(aciertos, previo) + ' / ' + m.quiz.length }),
        otra
      ]));
    }
    pregunta();
  }

  /* ---------- enrutador por hash (funciona en GitHub Pages) ---------- */
  function ruta() {
    var hash = location.hash || '#/';
    if (hash === '#quiz') return; // ancla interna de la ficha
    main.textContent = '';
    var partes = hash.replace(/^#\/?/, '').split('/');
    var links = document.querySelectorAll('.top nav a');
    for (var k = 0; k < links.length; k++) links[k].classList.remove('act');
    if (partes[0] === 'modulo' && partes[1]) {
      vistaFicha(decodeURIComponent(partes[1]));
      document.title = (buscar(partes[1]) ? buscar(partes[1]).nombre + ' · ' : '') + 'HUB 3DS·A';
    } else if (partes[0] === 'modulos') {
      vistaModulos(); links[1].classList.add('act'); document.title = 'Módulos · HUB 3DS·A';
    } else {
      vistaInicio(); links[0].classList.add('act'); document.title = 'HUB 3DS·A · Portal de repaso';
    }
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', ruta);
  ruta();

  /* ---------- atajo de teclado: "/" enfoca el buscador ---------- */
  document.addEventListener('keydown', function (e) {
    var t = e.target.tagName;
    if (e.key !== '/' || t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT') return;
    e.preventDefault();
    var f = document.getElementById('fBus');
    if (!f) { location.hash = '#/modulos'; setTimeout(function () { var g = document.getElementById('fBus'); if (g) g.focus(); }, 50); }
    else f.focus();
  });
})();
