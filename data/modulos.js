/*
  DATOS DEL PORTAL · HUB 3DS·A
  Cada módulo es un objeto. Si agregas uno aquí, aparece solo en la página.

  IMPORTANTE: los módulos de abajo son EJEMPLOS para que el portal funcione.
  Reemplázalos por los módulos reales de su mapa del año y por contenido
  escrito con sus palabras (resumen, evidencias, instrumentos reales, etc.).
  Antes de entregar, abre cada enlace para verificar que funciona.
*/
window.MODULOS = [
  {
    id: "python",
    nombre: "Programación con Python",
    docente: "Javier Mineros",
    resumen: "Ejemplo: aprendimos a resolver problemas con Python usando variables, condicionales, ciclos, funciones y listas.",
    aprendiste: [
      "Dividir un problema en pasos pequeños antes de programar.",
      "Usar funciones para no repetir código.",
      "Leer los mensajes de error para encontrar el fallo."
    ],
    instrumentos: ["Guía de ejercicios", "Rúbrica de proyecto", "Examen práctico"],
    programas: ["Python 3", "Visual Studio Code"],
    herramientas: ["Python", "Listas y diccionarios", "pip"],
    recursos: [
      { t: "Documentación de Python", u: "https://docs.python.org/es/3/" },
      { t: "Tutorial oficial de Python", u: "https://docs.python.org/es/3/tutorial/" },
      { t: "Python en W3Schools", u: "https://www.w3schools.com/python/" }
    ],
    evidencias: [{ t: "Carpeta de ejercicios (reemplazar por tu enlace)", u: "https://github.com/" }],
    quiz: [
      { p: "¿Qué función muestra texto en pantalla en Python?", o: ["echo()", "print()", "console.log()", "write()"], c: 1, e: "En Python se usa print(). echo es de PHP y console.log de JavaScript." },
      { p: "¿Cuál de estas es una lista en Python?", o: ["{1, 2, 3}", "(1; 2; 3)", "[1, 2, 3]", "<1, 2, 3>"], c: 2, e: "Las listas se escriben entre corchetes: [1, 2, 3]." },
      { p: "¿Qué palabra clave se usa para definir una función?", o: ["function", "def", "fun", "define"], c: 1, e: "Python usa def, por ejemplo: def saludar():" }
    ]
  },
  {
    id: "web",
    nombre: "Desarrollo web (HTML, CSS y JavaScript)",
    docente: "Javier Mineros",
    resumen: "Ejemplo: construimos páginas web con HTML semántico, estilos con CSS responsivo e interactividad con JavaScript.",
    aprendiste: [
      "Estructurar una página con etiquetas semánticas.",
      "Hacer que un diseño se adapte al celular.",
      "Manipular el DOM con JavaScript."
    ],
    instrumentos: ["Lista de cotejo de página web", "Rúbrica de proyecto final"],
    programas: ["Visual Studio Code", "Google Chrome"],
    herramientas: ["HTML", "CSS", "JavaScript", "Live Server"],
    recursos: [
      { t: "Aprende HTML (MDN)", u: "https://developer.mozilla.org/es/docs/Learn/HTML" },
      { t: "Aprende CSS (MDN)", u: "https://developer.mozilla.org/es/docs/Learn/CSS" },
      { t: "Aprende JavaScript (MDN)", u: "https://developer.mozilla.org/es/docs/Learn/JavaScript" }
    ],
    evidencias: [{ t: "Sitio del módulo (reemplazar por tu enlace)", u: "https://github.com/" }],
    quiz: [
      { p: "¿Qué etiqueta HTML crea un enlace?", o: ["<link>", "<href>", "<a>", "<url>"], c: 2, e: "La etiqueta <a> con el atributo href crea enlaces." },
      { p: "¿Qué propiedad CSS cambia el color del texto?", o: ["font-color", "text-color", "color", "foreground"], c: 2, e: "La propiedad correcta es color." },
      { p: "¿Qué método busca un elemento por su id?", o: ["document.getElementById()", "document.findId()", "document.selectId()", "window.getId()"], c: 0, e: "document.getElementById('miId') devuelve el elemento con ese id." }
    ]
  },
  {
    id: "mysql",
    nombre: "Bases de datos con MySQL",
    docente: "Arcides Canales",
    resumen: "Ejemplo: diseñamos tablas relacionadas y consultamos información con SQL.",
    aprendiste: [
      "Diseñar tablas con llaves primarias y foráneas.",
      "Consultar datos con SELECT, WHERE y JOIN.",
      "Insertar, actualizar y borrar registros."
    ],
    instrumentos: ["Guía de laboratorio SQL", "Examen de consultas"],
    programas: ["MySQL Server", "MySQL Workbench"],
    herramientas: ["SQL", "Diagrama entidad-relación"],
    recursos: [
      { t: "Documentación de MySQL", u: "https://dev.mysql.com/doc/" },
      { t: "Tutorial de SQL (W3Schools)", u: "https://www.w3schools.com/sql/" },
      { t: "Tutorial de MySQL", u: "https://www.mysqltutorial.org/" }
    ],
    evidencias: [{ t: "Script de la base de datos (reemplazar por tu enlace)", u: "https://github.com/" }],
    quiz: [
      { p: "¿Qué comando se usa para consultar datos?", o: ["GET", "SELECT", "FETCH", "SHOW DATA"], c: 1, e: "SELECT es el comando para leer datos de una o varias tablas." },
      { p: "¿Qué cláusula filtra las filas de una consulta?", o: ["FILTER", "ORDER BY", "WHERE", "GROUP"], c: 2, e: "WHERE define la condición que deben cumplir las filas." },
      { p: "¿Para qué sirve una llave primaria?", o: ["Para cifrar la tabla", "Para identificar de forma única cada fila", "Para ordenar alfabéticamente", "Para duplicar registros"], c: 1, e: "La llave primaria identifica cada registro de manera única." }
    ]
  },
  {
    id: "csharp",
    nombre: "Programación en C# y .NET",
    docente: "Arcides Canales",
    resumen: "Ejemplo: programamos aplicaciones con C# aplicando programación orientada a objetos.",
    aprendiste: [
      "Crear clases y objetos con atributos y métodos.",
      "Usar tipos de datos y estructuras de control.",
      "Organizar el proyecto en clases separadas."
    ],
    instrumentos: ["Guía de ejercicios de C#", "Rúbrica de proyecto POO"],
    programas: ["Visual Studio", ".NET SDK"],
    herramientas: ["C#", "POO", "NuGet"],
    recursos: [
      { t: "Documentación de C# (Microsoft Learn)", u: "https://learn.microsoft.com/es-es/dotnet/csharp/" },
      { t: "Tour de C#", u: "https://learn.microsoft.com/es-es/dotnet/csharp/tour-of-csharp/" },
      { t: "Documentación de .NET", u: "https://learn.microsoft.com/es-es/dotnet/" }
    ],
    evidencias: [{ t: "Proyecto en C# (reemplazar por tu enlace)", u: "https://github.com/" }],
    quiz: [
      { p: "¿Qué extensión tienen los archivos de código C#?", o: [".cpp", ".cs", ".net", ".csh"], c: 1, e: "Los archivos de código fuente de C# terminan en .cs." },
      { p: "¿Qué palabra clave crea un objeto a partir de una clase?", o: ["create", "make", "new", "object"], c: 2, e: "new crea una instancia: var p = new Persona();" },
      { p: "¿Qué tipo de dato guarda números enteros?", o: ["int", "string", "bool", "double"], c: 0, e: "int guarda enteros. double guarda decimales." }
    ]
  },
  {
    id: "godot",
    nombre: "Videojuegos con Godot",
    docente: "Javier Mineros",
    resumen: "Ejemplo: creamos un videojuego 2D con el motor Godot, usando escenas, nodos y GDScript.",
    aprendiste: [
      "Armar escenas con nodos.",
      "Programar movimiento y colisiones con GDScript.",
      "Exportar el juego para compartirlo."
    ],
    instrumentos: ["Lista de cotejo del videojuego", "Rúbrica de proyecto"],
    programas: ["Godot Engine", "Editor de imágenes (Krita o GIMP)"],
    herramientas: ["GDScript", "Escenas y nodos", "Señales"],
    recursos: [
      { t: "Documentación de Godot", u: "https://docs.godotengine.org/es/" },
      { t: "Sitio oficial de Godot", u: "https://godotengine.org/" },
      { t: "Tu primer juego 2D (documentación)", u: "https://docs.godotengine.org/es/stable/getting_started/first_2d_game/index.html" }
    ],
    evidencias: [{ t: "Juego publicado (reemplazar por tu enlace)", u: "https://github.com/" }],
    quiz: [
      { p: "¿Cuál es el lenguaje de scripting propio de Godot?", o: ["Lua", "GDScript", "Blueprint", "UnityScript"], c: 1, e: "GDScript es el lenguaje integrado de Godot, de sintaxis parecida a Python." },
      { p: "¿Cuál es el bloque básico con el que se construyen las escenas?", o: ["Nodo", "Prefab", "Actor", "Entidad"], c: 0, e: "En Godot todo se construye con nodos organizados en escenas." },
      { p: "¿Qué función se ejecuta en cada fotograma?", o: ["_ready()", "_start()", "_process(delta)", "_init()"], c: 2, e: "_process(delta) se llama en cada fotograma. _ready() solo al entrar a la escena." }
    ]
  },
  {
    id: "odoo",
    nombre: "ERP con Odoo",
    docente: "Arcides Canales",
    resumen: "Ejemplo: instalamos y configuramos Odoo para gestionar procesos de una empresa, como ventas e inventario.",
    aprendiste: [
      "Qué es un sistema ERP y para qué sirve.",
      "Configurar módulos como Ventas e Inventario.",
      "Crear productos, clientes y órdenes de venta."
    ],
    instrumentos: ["Guía de laboratorio Odoo", "Examen práctico"],
    programas: ["Odoo", "PostgreSQL"],
    herramientas: ["Módulos de Odoo", "Python"],
    recursos: [
      { t: "Documentación de Odoo", u: "https://www.odoo.com/documentation" },
      { t: "Sitio oficial de Odoo", u: "https://www.odoo.com/" },
      { t: "Tutoriales de Odoo", u: "https://www.odoo.com/slides" }
    ],
    evidencias: [{ t: "Capturas de la configuración (reemplazar por tu enlace)", u: "https://github.com/" }],
    quiz: [
      { p: "¿Qué es un sistema ERP?", o: ["Un editor de imágenes", "Un sistema que integra los procesos de una empresa", "Un lenguaje de programación", "Un tipo de red"], c: 1, e: "Un ERP integra áreas como ventas, inventario y contabilidad en un solo sistema." },
      { p: "¿En qué lenguaje se desarrolla el servidor de Odoo?", o: ["Java", "Ruby", "Python", "Go"], c: 2, e: "El servidor de Odoo está escrito en Python." },
      { p: "En Odoo, ¿qué es un módulo (app)?", o: ["Un tipo de usuario", "Una pieza que agrega funciones, como Ventas o Inventario", "Un archivo de respaldo", "Un navegador"], c: 1, e: "Las apps o módulos extienden las funciones de Odoo." }
    ]
  }
];
