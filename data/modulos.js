/*
  DATOS DEL PORTAL · HUB 3DS·A
  Cada módulo es un objeto. Si agregas uno aquí, aparece solo en la página.

  IMPORTANTE: los módulos de abajo son EJEMPLOS para que el portal funcione.
  Reemplázalos por los módulos reales de su mapa del año y por contenido
  escrito con sus palabras (resumen, evidencias, instrumentos reales, etc.).
  Antes de entregar, abre cada enlace para verificar que funciona.
*/
window.MODULOS = [

  // =========================
  // PRIMER AÑO
  // =========================

  {
    id: "diseno-multimedia",
    nombre: "Diseño de aplicaciones multimedia",
    docente: "Luis Mario Solis Cajul",
    resumen: "Aprendimos a diseñar aplicaciones multimedia integrando imágenes, audio, video, animaciones y elementos interactivos.",
    aprendiste: [
      "Identificar los elementos que forman una aplicación multimedia.",
      "Diseñar interfaces atractivas y fáciles de utilizar.",
      "Integrar imágenes, sonidos, videos y animaciones."
    ],
    instrumentos: ["Guía de diseño", "Rúbrica de proyecto multimedia", "Evaluación práctica"],
    programas: ["Visual Studio Code", "Canva", "Adobe Photoshop"],
    herramientas: ["HTML", "CSS", "Imágenes y audio", "Animaciones"],
    recursos: [
      { t: "Introducción a HTML", u: "https://developer.mozilla.org/es/docs/Web/HTML" },
      { t: "Documentación CSS", u: "https://developer.mozilla.org/es/docs/Web/CSS" },
      { t: "Canva", u: "https://www.canva.com/" }
    ],
    evidencias: [
      { t: "Proyectos de aplicaciones multimedia", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Qué significa multimedia?", o: ["Solo texto", "Integración de diferentes medios", "Solo imágenes", "Un lenguaje de programación"], c: 1, e: "Multimedia integra elementos como texto, imágenes, audio, video y animaciones." },
      { p: "¿Qué lenguaje se utiliza para estructurar una página web?", o: ["CSS", "Python", "HTML", "SQL"], c: 2, e: "HTML permite estructurar el contenido de una página web." },
      { p: "¿Cuál es una característica de una buena interfaz?", o: ["Ser difícil de utilizar", "No tener organización", "Ser clara e intuitiva", "Tener únicamente texto"], c: 2, e: "Una buena interfaz facilita la navegación y comprensión de la aplicación." }
    ]
  },

  {
    id: "desarrollo-web",
    nombre: "Desarrollo de páginas web",
    docente: "Luis Mario Solis Cajul",
    resumen: "Aprendimos a crear páginas web utilizando HTML, CSS y JavaScript, aplicando diseños organizados, atractivos y adaptables.",
    aprendiste: [
      "Crear estructuras web con HTML.",
      "Aplicar estilos y diseños utilizando CSS.",
      "Agregar interactividad mediante JavaScript."
    ],
    instrumentos: ["Guía de HTML y CSS", "Rúbrica de página web", "Examen práctico"],
    programas: ["Visual Studio Code", "Google Chrome"],
    herramientas: ["HTML5", "CSS3", "JavaScript", "GitHub"],
    recursos: [
      { t: "HTML - MDN", u: "https://developer.mozilla.org/es/docs/Web/HTML" },
      { t: "CSS - MDN", u: "https://developer.mozilla.org/es/docs/Web/CSS" },
      { t: "JavaScript - MDN", u: "https://developer.mozilla.org/es/docs/Web/JavaScript" }
    ],
    evidencias: [
      { t: "Prácticas y páginas web", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Qué etiqueta se utiliza para crear un enlace en HTML?", o: ["<link>", "<a>", "<href>", "<url>"], c: 1, e: "La etiqueta <a> permite crear enlaces hacia otras páginas o recursos." },
      { p: "¿Para qué se utiliza CSS?", o: ["Para crear bases de datos", "Para dar estilos a una página", "Para administrar servidores", "Para almacenar información"], c: 1, e: "CSS controla colores, tamaños, posiciones y presentación visual." },
      { p: "¿Qué lenguaje permite agregar interactividad a una página web?", o: ["SQL", "HTML", "JavaScript", "XML"], c: 2, e: "JavaScript permite agregar eventos, validaciones y comportamientos dinámicos." }
    ]
  },

  {
    id: "ingles-sistemas-web",
    nombre: "Conversación en inglés sobre sistemas informáticos y desarrollo de páginas web",
    docente: "Luis Mario Solis Cajul",
    resumen: "Desarrollamos habilidades de comunicación en inglés utilizando vocabulario técnico relacionado con computadoras, sistemas informáticos y desarrollo web.",
    aprendiste: [
      "Identificar vocabulario técnico de informática en inglés.",
      "Describir componentes de una computadora.",
      "Mantener conversaciones sencillas sobre desarrollo web."
    ],
    instrumentos: ["Pruebas de vocabulario", "Exposiciones orales", "Rúbrica de conversación"],
    programas: ["Google Translate", "Microsoft Word"],
    herramientas: ["Technical English", "Pronunciación", "Conversación", "Vocabulario informático"],
    recursos: [
      { t: "British Council - Learn English", u: "https://learnenglish.britishcouncil.org/" },
      { t: "Cambridge Dictionary", u: "https://dictionary.cambridge.org/" },
      { t: "W3Schools - HTML", u: "https://www.w3schools.com/html/" }
    ],
    evidencias: [
      { t: "Actividades y conversaciones en inglés", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Qué significa 'Keyboard' en español?", o: ["Monitor", "Teclado", "Ratón", "Impresora"], c: 1, e: "Keyboard significa teclado, un dispositivo de entrada." },
      { p: "¿Cómo se traduce 'Website'?", o: ["Base de datos", "Página web", "Computadora", "Programa"], c: 1, e: "Website se refiere a un sitio o página web." },
      { p: "¿Qué significa 'Developer'?", o: ["Usuario", "Desarrollador", "Diseñador gráfico", "Administrador"], c: 1, e: "Developer es la palabra en inglés para desarrollador." }
    ]
  },

  {
    id: "proyectos-tecnologicos-web",
    nombre: "Proyectos tecnológicos de desarrollo de páginas web",
    docente: "Luis Mario Solis Cajul",
    resumen: "Aplicamos los conocimientos de desarrollo web para planificar, diseñar y construir proyectos tecnológicos que respondan a necesidades reales.",
    aprendiste: [
      "Identificar problemas que pueden solucionarse mediante una página web.",
      "Organizar las etapas de un proyecto tecnológico.",
      "Desarrollar y presentar soluciones web funcionales."
    ],
    instrumentos: ["Plan de proyecto", "Rúbrica de desarrollo", "Presentación final"],
    programas: ["Visual Studio Code", "GitHub", "Google Chrome"],
    herramientas: ["HTML", "CSS", "JavaScript", "Metodología de proyectos"],
    recursos: [
      { t: "GitHub Docs", u: "https://docs.github.com/es" },
      { t: "MDN Web Docs", u: "https://developer.mozilla.org/es/" },
      { t: "W3Schools", u: "https://www.w3schools.com/" }
    ],
    evidencias: [
      { t: "Proyectos tecnológicos realizados", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Cuál es el primer paso para desarrollar un proyecto tecnológico?", o: ["Programar inmediatamente", "Identificar una necesidad o problema", "Publicar la página", "Comprar un dominio"], c: 1, e: "Primero se identifica el problema que el proyecto busca resolver." },
      { p: "¿Para qué sirve GitHub?", o: ["Editar imágenes", "Almacenar y gestionar código", "Crear presentaciones", "Diseñar logotipos"], c: 1, e: "GitHub permite alojar repositorios y colaborar en proyectos." },
      { p: "¿Qué se realiza durante las pruebas de un proyecto?", o: ["Se comprueba su funcionamiento", "Se elimina todo el código", "Se cambia el nombre del proyecto", "Se evita la revisión"], c: 0, e: "Las pruebas permiten detectar errores y verificar que el sistema funcione correctamente." }
    ]
  },

  {
    id: "algoritmos-logica",
    nombre: "Elaboración de algoritmos usando lógica de programación",
    docente: "Francisco Arcides Canales Sorto",
    resumen: "Aprendimos a resolver problemas mediante algoritmos, diagramas de flujo, pseudocódigo y estructuras básicas de programación.",
    aprendiste: [
      "Analizar problemas antes de escribir código.",
      "Representar soluciones mediante pseudocódigo y diagramas de flujo.",
      "Utilizar variables, condiciones y ciclos."
    ],
    instrumentos: ["Guía de algoritmos", "Ejercicios prácticos", "Examen de lógica"],
    programas: ["PSeInt", "Flowgorithm", "Visual Studio Code"],
    herramientas: ["Pseudocódigo", "Diagramas de flujo", "Variables", "Condicionales y ciclos"],
    recursos: [
      { t: "PSeInt", u: "https://pseint.sourceforge.net/" },
      { t: "Flowgorithm", u: "http://www.flowgorithm.org/" },
      { t: "Programiz - Algoritmos", u: "https://www.programiz.com/dsa" }
    ],
    evidencias: [
      { t: "Ejercicios de algoritmos", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Qué es un algoritmo?", o: ["Un programa de diseño", "Una secuencia de pasos para resolver un problema", "Un dispositivo electrónico", "Una base de datos"], c: 1, e: "Un algoritmo es un conjunto ordenado de instrucciones para resolver un problema." },
      { p: "¿Qué símbolo representa una decisión en un diagrama de flujo?", o: ["Rectángulo", "Óvalo", "Rombo", "Flecha"], c: 2, e: "El rombo representa una decisión o condición." },
      { p: "¿Para qué sirve una variable?", o: ["Para almacenar datos", "Para apagar la computadora", "Para dibujar diagramas", "Para conectar redes"], c: 0, e: "Las variables almacenan valores que pueden utilizarse y modificarse durante un programa." }
    ]
  },

  {
    id: "identificacion-requerimientos",
    nombre: "Identificación de requerimientos para diseñar o modificar sistemas informáticos",
    docente: "Francisco Arcides Canales Sorto",
    resumen: "Aprendimos a identificar las necesidades de los usuarios y establecer los requerimientos necesarios para diseñar o mejorar un sistema informático.",
    aprendiste: [
      "Recolectar información mediante entrevistas y observación.",
      "Diferenciar requerimientos funcionales y no funcionales.",
      "Documentar las necesidades de un sistema."
    ],
    instrumentos: ["Entrevistas", "Cuestionarios", "Documento de requerimientos"],
    programas: ["Microsoft Word", "Draw.io", "Visual Studio Code"],
    herramientas: ["Historias de usuario", "Casos de uso", "Requerimientos funcionales", "Requerimientos no funcionales"],
    recursos: [
      { t: "Atlassian - Requerimientos de software", u: "https://www.atlassian.com/agile/product-management/requirements" },
      { t: "Diagramas UML", u: "https://www.uml.org/" },
      { t: "Draw.io", u: "https://www.drawio.com/" }
    ],
    evidencias: [
      { t: "Documentación de requerimientos", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Qué es un requerimiento funcional?", o: ["Una característica visual", "Una función que debe realizar el sistema", "El costo del proyecto", "La marca de la computadora"], c: 1, e: "Define una función o servicio que el sistema debe proporcionar." },
      { p: "¿Cuál es una técnica para recopilar requerimientos?", o: ["Entrevista", "Formateo", "Compresión", "Instalación"], c: 0, e: "Las entrevistas permiten conocer las necesidades de los usuarios." },
      { p: "¿Qué describe un requerimiento no funcional?", o: ["Una operación específica", "La calidad o condición del sistema", "Un botón únicamente", "Un dato de entrada"], c: 1, e: "Describe características como seguridad, rendimiento y disponibilidad." }
    ]
  },

  {
    id: "manual-calidad-software",
    nombre: "Elaboración de manual de sistemas de calidad para el desarrollo de software",
    docente: "Francisco Arcides Canales Sorto",
    resumen: "Conocimos los principios de calidad del software y aprendimos a documentar procedimientos para asegurar que los sistemas cumplan con estándares establecidos.",
    aprendiste: [
      "Comprender la importancia de la calidad del software.",
      "Documentar procedimientos y normas de trabajo.",
      "Identificar actividades de revisión y control de calidad."
    ],
    instrumentos: ["Lista de verificación", "Rúbrica documental", "Evaluación de procedimientos"],
    programas: ["Microsoft Word", "Microsoft Excel", "Draw.io"],
    herramientas: ["ISO 9001", "Control de calidad", "Documentación", "Pruebas de software"],
    recursos: [
      { t: "ISO - Gestión de calidad", u: "https://www.iso.org/iso-9001-quality-management.html" },
      { t: "ISTQB", u: "https://www.istqb.org/" },
      { t: "OWASP", u: "https://owasp.org/" }
    ],
    evidencias: [
      { t: "Manual de calidad de software", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Cuál es el objetivo principal de la calidad del software?", o: ["Aumentar los errores", "Garantizar que cumpla los requisitos establecidos", "Evitar las pruebas", "Eliminar la documentación"], c: 1, e: "La calidad busca que el software cumpla los requisitos y funcione correctamente." },
      { p: "¿Para qué sirve una lista de verificación?", o: ["Para revisar el cumplimiento de criterios", "Para programar automáticamente", "Para almacenar contraseñas", "Para diseñar imágenes"], c: 0, e: "Permite comprobar que se hayan cumplido los puntos establecidos." },
      { p: "¿Qué significa ISO?", o: ["International Organization for Standardization", "Internet Software Office", "Information System Online", "Integrated Software Operation"], c: 0, e: "ISO es la Organización Internacional de Normalización." }
    ]
  },

  {
    id: "microempresa-cooperativa",
    nombre: "Puesta en marcha de la microempresa en asociatividad cooperativa",
    docente: "Francisco Arcides Canales Sorto",
    resumen: "Aprendimos a organizar y poner en funcionamiento una microempresa mediante el trabajo colaborativo, la planificación y los principios de asociatividad cooperativa.",
    aprendiste: [
      "Identificar oportunidades de emprendimiento.",
      "Organizar funciones y responsabilidades dentro de una cooperativa.",
      "Planificar recursos, costos y actividades de una microempresa."
    ],
    instrumentos: ["Plan de negocio", "Presupuesto", "Rúbrica de emprendimiento"],
    programas: ["Microsoft Word", "Microsoft Excel", "Canva"],
    herramientas: ["Emprendimiento", "Presupuestos", "Trabajo en equipo", "Asociatividad"],
    recursos: [
      { t: "CONAMYPE El Salvador", u: "https://www.conamype.gob.sv/" },
      { t: "OIT - Cooperativas", u: "https://www.ilo.org/" },
      { t: "Canva", u: "https://www.canva.com/" }
    ],
    evidencias: [
      { t: "Plan de negocio y proyecto cooperativo", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Qué es una microempresa?", o: ["Una empresa de gran tamaño", "Un pequeño negocio con recursos limitados", "Una institución educativa", "Un programa informático"], c: 1, e: "Una microempresa es una unidad económica de pequeña escala." },
      { p: "¿Qué caracteriza a una cooperativa?", o: ["El trabajo individual obligatorio", "La colaboración y participación de sus miembros", "La ausencia de organización", "La falta de objetivos"], c: 1, e: "Las cooperativas se basan en la participación y colaboración de sus integrantes." },
      { p: "¿Para qué sirve un presupuesto?", o: ["Para calcular ingresos y gastos", "Para diseñar una página web", "Para crear algoritmos", "Para instalar programas"], c: 0, e: "Un presupuesto ayuda a planificar y controlar los recursos económicos." }
    ]
  },
    // =========================
  // SEGUNDO AÑO
  // =========================

  {
    id: "instalaciones-redes-lan",
    nombre: "Diseño de instalaciones de redes LAN",
    docente: "Luis Mario Solis Cajul",
    resumen: "Aprendimos a diseñar e implementar redes de área local, identificando dispositivos, conexiones, topologías y configuraciones necesarias para compartir recursos.",
    aprendiste: [
      "Identificar los componentes de una red LAN.",
      "Diseñar topologías y esquemas de conexión.",
      "Configurar dispositivos de red y direcciones IP."
    ],
    instrumentos: ["Guía de redes", "Prácticas de cableado", "Rúbrica de instalación"],
    programas: ["Cisco Packet Tracer", "Wireshark"],
    herramientas: ["Routers", "Switches", "Cable UTP", "Direcciones IP", "Topologías"],
    recursos: [
      { t: "Cisco Networking Academy", u: "https://www.netacad.com/" },
      { t: "Wireshark", u: "https://www.wireshark.org/docs/" },
      { t: "Cisco Packet Tracer", u: "https://www.netacad.com/courses/packet-tracer" }
    ],
    evidencias: [
      { t: "Diseños y prácticas de redes LAN", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Qué significa LAN?", o: ["Local Area Network", "Large Access Node", "Logical Application Network", "Local Automatic Number"], c: 0, e: "LAN significa Local Area Network o red de área local." },
      { p: "¿Qué dispositivo conecta varios equipos dentro de una red LAN?", o: ["Monitor", "Switch", "Impresora", "Escáner"], c: 1, e: "Un switch conecta dispositivos dentro de una red local." },
      { p: "¿Qué tipo de cable se utiliza comúnmente en redes Ethernet?", o: ["HDMI", "USB", "UTP", "VGA"], c: 2, e: "El cable UTP es ampliamente utilizado en conexiones Ethernet." }
    ]
  },

  {
    id: "ingles-arquitectura-bd",
    nombre: "Conversación en inglés sobre arquitectura de software y base de datos",
    docente: "Luis Mario Solis Cajul",
    resumen: "Desarrollamos habilidades de comunicación en inglés mediante vocabulario técnico relacionado con la arquitectura de software, las bases de datos y los sistemas informáticos.",
    aprendiste: [
      "Reconocer términos técnicos de arquitectura de software en inglés.",
      "Describir estructuras y componentes de una base de datos.",
      "Explicar conceptos informáticos mediante conversaciones."
    ],
    instrumentos: ["Pruebas de vocabulario", "Conversaciones orales", "Exposiciones técnicas"],
    programas: ["Google Translate", "Microsoft Word"],
    herramientas: ["Technical English", "Database vocabulary", "Software architecture", "Pronunciación"],
    recursos: [
      { t: "Cambridge Dictionary", u: "https://dictionary.cambridge.org/" },
      { t: "British Council", u: "https://learnenglish.britishcouncil.org/" },
      { t: "MySQL Documentation", u: "https://dev.mysql.com/doc/" }
    ],
    evidencias: [
      { t: "Conversaciones y actividades en inglés", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Qué significa 'Database'?", o: ["Aplicación", "Base de datos", "Computadora", "Red local"], c: 1, e: "Database significa base de datos." },
      { p: "¿Cómo se traduce 'Software Architecture'?", o: ["Diseño gráfico", "Arquitectura de software", "Sistema operativo", "Red informática"], c: 1, e: "Software Architecture se refiere a la arquitectura de software." },
      { p: "¿Qué significa 'Table' en el contexto de bases de datos?", o: ["Tabla", "Consulta", "Usuario", "Servidor"], c: 0, e: "Una table es una tabla donde se organizan los datos." }
    ]
  },

  {
    id: "planes-negocio",
    nombre: "Diseño de planes de negocio en forma asociativa y cooperativa",
    docente: "Luis Mario Solis Cajul",
    resumen: "Aprendimos a desarrollar planes de negocio mediante la identificación de oportunidades, análisis del mercado, planificación financiera y organización cooperativa.",
    aprendiste: [
      "Identificar una idea de negocio y sus oportunidades.",
      "Analizar clientes, competencia y mercado.",
      "Elaborar presupuestos y planes de negocio colaborativos."
    ],
    instrumentos: ["Estudio de mercado", "Presupuesto", "Rúbrica de plan de negocio"],
    programas: ["Microsoft Word", "Microsoft Excel", "Canva"],
    herramientas: ["Modelo de negocio", "Análisis FODA", "Presupuesto", "Marketing"],
    recursos: [
      { t: "CONAMYPE El Salvador", u: "https://www.conamype.gob.sv/" },
      { t: "Canvas de modelo de negocio", u: "https://www.strategyzer.com/" },
      { t: "Canva", u: "https://www.canva.com/" }
    ],
    evidencias: [
      { t: "Planes de negocio desarrollados", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Qué es un plan de negocio?", o: ["Un documento que organiza una idea empresarial", "Un lenguaje de programación", "Una aplicación móvil", "Una red informática"], c: 0, e: "Un plan de negocio describe cómo funcionará y se desarrollará una empresa." },
      { p: "¿Qué significa FODA?", o: ["Fortalezas, Oportunidades, Debilidades y Amenazas", "Funciones, Organización, Datos y Aplicaciones", "Finanzas, Operaciones, Diseño y Administración", "Formación, Objetivos, Desarrollo y Actividades"], c: 0, e: "FODA permite analizar factores internos y externos de un negocio." },
      { p: "¿Qué permite conocer un estudio de mercado?", o: ["La velocidad del procesador", "Las necesidades de los clientes y la competencia", "La memoria RAM", "El sistema operativo"], c: 1, e: "Un estudio de mercado analiza clientes, demanda y competencia." }
    ]
  },

  {
    id: "componentes-base-datos",
    nombre: "Programación de componentes de base de datos",
    docente: "Francisco Arcides Canales Sorto",
    resumen: "Aprendimos a diseñar y programar componentes de bases de datos mediante tablas, consultas, procedimientos, relaciones y operaciones de manipulación de información.",
    aprendiste: [
      "Diseñar tablas y establecer relaciones entre ellas.",
      "Crear consultas SQL para administrar información.",
      "Desarrollar operaciones CRUD y utilizar procedimientos almacenados."
    ],
    instrumentos: ["Guía de SQL", "Prácticas de laboratorio", "Proyecto de base de datos"],
    programas: ["MySQL", "MySQL Workbench", "phpMyAdmin"],
    herramientas: ["SQL", "DDL", "DML", "CRUD", "Procedimientos almacenados"],
    recursos: [
      { t: "Documentación oficial de MySQL", u: "https://dev.mysql.com/doc/" },
      { t: "W3Schools SQL", u: "https://www.w3schools.com/sql/" },
      { t: "SQL Tutorial", u: "https://sqlbolt.com/" }
    ],
    evidencias: [
      { t: "Bases de datos y ejercicios SQL", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Qué significa CRUD?", o: ["Create, Read, Update, Delete", "Connect, Run, Upload, Download", "Create, Replace, Use, Design", "Code, Read, Update, Develop"], c: 0, e: "CRUD representa las cuatro operaciones básicas de gestión de datos." },
      { p: "¿Qué comando SQL permite consultar información?", o: ["INSERT", "SELECT", "DELETE", "DROP"], c: 1, e: "SELECT permite recuperar registros de una o varias tablas." },
      { p: "¿Para qué sirve una clave primaria?", o: ["Para identificar de forma única cada registro", "Para eliminar una tabla", "Para cambiar el color de una página", "Para conectar una impresora"], c: 0, e: "La clave primaria identifica de manera única cada fila de una tabla." }
    ]
  },

  {
    id: "arquitectura-software",
    nombre: "Diseño y arquitectura de software",
    docente: "Francisco Arcides Canales Sorto",
    resumen: "Estudiamos cómo planificar y estructurar sistemas informáticos mediante modelos, patrones arquitectónicos, diagramas y principios de diseño de software.",
    aprendiste: [
      "Comprender la estructura y los componentes de un sistema.",
      "Representar sistemas mediante diagramas UML.",
      "Identificar patrones y estilos de arquitectura de software."
    ],
    instrumentos: ["Diagramas UML", "Documentación técnica", "Proyecto de arquitectura"],
    programas: ["Draw.io", "Visual Studio Code", "StarUML"],
    herramientas: ["UML", "Arquitectura por capas", "MVC", "Patrones de diseño"],
    recursos: [
      { t: "Documentación UML", u: "https://www.uml.org/" },
      { t: "Draw.io", u: "https://www.drawio.com/" },
      { t: "Refactoring Guru", u: "https://refactoring.guru/es/design-patterns" }
    ],
    evidencias: [
      { t: "Diagramas y diseños de software", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Qué representa la arquitectura de software?", o: ["La estructura y organización de un sistema", "El diseño de una computadora", "El contenido de una página", "La conexión eléctrica"], c: 0, e: "Describe cómo se organizan los componentes y cómo interactúan entre sí." },
      { p: "¿Para qué se utiliza UML?", o: ["Para editar fotografías", "Para modelar y representar sistemas", "Para administrar redes eléctricas", "Para crear música"], c: 1, e: "UML permite representar visualmente la estructura y comportamiento de sistemas." },
      { p: "¿Qué significa MVC?", o: ["Modelo, Vista y Controlador", "Método, Variable y Código", "Módulo, Vista y Consulta", "Modelo, Verificación y Control"], c: 0, e: "MVC es un patrón que separa los datos, la interfaz y la lógica de control." }
    ]
  },

  {
    id: "programacion-poo",
    nombre: "Desarrollo de programación orientada a objetos",
    docente: "Francisco Arcides Canales Sorto",
    resumen: "Aprendimos a desarrollar programas utilizando programación orientada a objetos, organizando el código mediante clases, objetos, métodos y principios de reutilización.",
    aprendiste: [
      "Crear clases y objetos para representar elementos del mundo real.",
      "Aplicar encapsulamiento, herencia y polimorfismo.",
      "Organizar programas utilizando métodos y constructores."
    ],
    instrumentos: ["Guía de POO", "Ejercicios prácticos", "Proyecto de programación"],
    programas: ["Visual Studio", "Visual Studio Code"],
    herramientas: ["C#", "Clases", "Objetos", "Métodos", "Herencia"],
    recursos: [
      { t: "C# - Microsoft Learn", u: "https://learn.microsoft.com/es-es/dotnet/csharp/" },
      { t: "POO en C#", u: "https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/tutorials/oop" },
      { t: "W3Schools C#", u: "https://www.w3schools.com/cs/" }
    ],
    evidencias: [
      { t: "Ejercicios y proyectos de POO", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Qué es una clase en programación orientada a objetos?", o: ["Una plantilla para crear objetos", "Una base de datos", "Un tipo de conexión", "Un sistema operativo"], c: 0, e: "Una clase define atributos y comportamientos que tendrán sus objetos." },
      { p: "¿Qué es la herencia?", o: ["Eliminar métodos", "Permitir que una clase reutilice características de otra", "Guardar datos en archivos", "Crear una conexión a internet"], c: 1, e: "La herencia permite crear clases basadas en otras clases." },
      { p: "¿Qué es un objeto?", o: ["Una instancia de una clase", "Una instrucción SQL", "Una carpeta del sistema", "Un lenguaje de marcado"], c: 0, e: "Un objeto es una instancia que utiliza los atributos y métodos definidos en una clase." }
    ]
  },

  {
    id: "proyecto-innovador",
    nombre: "Proyecto innovador",
    docente: "Francisco Arcides Canales Sorto",
    resumen: "Desarrollamos ideas innovadoras para resolver problemas de nuestro entorno mediante la planificación, investigación, diseño y creación de propuestas tecnológicas.",
    aprendiste: [
      "Identificar problemas y oportunidades de innovación.",
      "Proponer soluciones tecnológicas creativas.",
      "Planificar y presentar prototipos de proyectos."
    ],
    instrumentos: ["Ficha de proyecto", "Rúbrica de innovación", "Presentación de prototipo"],
    programas: ["Visual Studio Code", "Canva", "GitHub"],
    herramientas: ["Prototipado", "Investigación", "Design Thinking", "Trabajo colaborativo"],
    recursos: [
      { t: "IDEO Design Thinking", u: "https://designthinking.ideo.com/" },
      { t: "GitHub Docs", u: "https://docs.github.com/es" },
      { t: "Canva", u: "https://www.canva.com/" }
    ],
    evidencias: [
      { t: "Prototipo y documentación del proyecto", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Qué caracteriza a un proyecto innovador?", o: ["Repetir siempre la misma solución", "Proponer una solución novedosa a un problema", "Evitar la investigación", "No tener objetivos"], c: 1, e: "La innovación busca aportar soluciones nuevas o mejoras significativas." },
      { p: "¿Qué es un prototipo?", o: ["Una versión inicial de una solución", "Un producto necesariamente terminado", "Una base de datos", "Un documento de asistencia"], c: 0, e: "Un prototipo permite representar y probar una idea antes de su desarrollo final." },
      { p: "¿Para qué sirve investigar antes de desarrollar un proyecto?", o: ["Para retrasar el trabajo", "Para comprender el problema y sus necesidades", "Para evitar las pruebas", "Para eliminar los objetivos"], c: 1, e: "La investigación ayuda a conocer el contexto y diseñar una solución adecuada." }
    ]
  },
    // =========================
  // TERCER AÑO
  // =========================

  {
    id: "proyecto-innovador-software",
    nombre: "Proyecto innovador de Desarrollo de software",
    docente: "Javier Arturo Mineros Garcia",
    resumen: "Integramos nuestros conocimientos de programación, bases de datos y diseño para desarrollar un proyecto de software que solucione una necesidad real.",
    aprendiste: [
      "Planificar proyectos completos de desarrollo de software.",
      "Integrar bases de datos con aplicaciones.",
      "Desarrollar, probar y presentar soluciones tecnológicas."
    ],
    instrumentos: ["Documento de proyecto", "Rúbrica de desarrollo", "Presentación final"],
    programas: ["Visual Studio Code", "Visual Studio", "MySQL"],
    herramientas: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "GitHub"],
    recursos: [
      { t: "MDN Web Docs", u: "https://developer.mozilla.org/es/" },
      { t: "MySQL Documentation", u: "https://dev.mysql.com/doc/" },
      { t: "GitHub Docs", u: "https://docs.github.com/es" }
    ],
    evidencias: [
      { t: "Proyecto final de desarrollo de software", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Cuál es el objetivo de un proyecto de desarrollo de software?", o: ["Crear una solución informática para una necesidad", "Instalar videojuegos", "Diseñar únicamente imágenes", "Eliminar bases de datos"], c: 0, e: "Un proyecto de software busca solucionar necesidades mediante una aplicación o sistema." },
      { p: "¿Qué permite integrar MySQL con una aplicación?", o: ["Almacenar y consultar información", "Cambiar el color del monitor", "Aumentar la memoria RAM", "Editar fotografías"], c: 0, e: "MySQL permite gestionar los datos utilizados por una aplicación." },
      { p: "¿Por qué es importante realizar pruebas?", o: ["Para encontrar errores y verificar el funcionamiento", "Para aumentar el tamaño del código", "Para evitar la documentación", "Para eliminar funcionalidades"], c: 0, e: "Las pruebas permiten comprobar que el software cumpla con los requisitos." }
    ]
  },

  {
    id: "ingles-mantenimiento-so",
    nombre: "Conversación en inglés sobre mantenimiento de sistemas operativos",
    docente: "Javier Arturo Mineros Garcia",
    resumen: "Fortalecimos la comunicación en inglés utilizando vocabulario relacionado con sistemas operativos, mantenimiento de computadoras, diagnóstico y solución de problemas.",
    aprendiste: [
      "Identificar términos técnicos de sistemas operativos en inglés.",
      "Describir procedimientos de mantenimiento informático.",
      "Explicar problemas y soluciones mediante conversaciones en inglés."
    ],
    instrumentos: ["Pruebas de vocabulario", "Conversaciones técnicas", "Exposiciones orales"],
    programas: ["Google Translate", "Microsoft Word"],
    herramientas: ["Technical English", "Operating Systems", "Computer Maintenance", "Pronunciación"],
    recursos: [
      { t: "British Council", u: "https://learnenglish.britishcouncil.org/" },
      { t: "Cambridge Dictionary", u: "https://dictionary.cambridge.org/" },
      { t: "Microsoft Learn", u: "https://learn.microsoft.com/" }
    ],
    evidencias: [
      { t: "Conversaciones y ejercicios de inglés", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Qué significa 'Operating System'?", o: ["Sistema operativo", "Sistema de archivos", "Red local", "Programa de diseño"], c: 0, e: "Operating System significa sistema operativo." },
      { p: "¿Qué significa 'Troubleshooting'?", o: ["Instalación", "Solución de problemas", "Actualización", "Programación"], c: 1, e: "Troubleshooting es el proceso de identificar y solucionar problemas." },
      { p: "¿Cómo se traduce 'Backup'?", o: ["Virus", "Respaldo o copia de seguridad", "Controlador", "Pantalla"], c: 1, e: "Backup significa copia de seguridad de la información." }
    ]
  },

  {
    id: "documentacion-sistemas",
    nombre: "Elaboración de documentación de sistemas informáticos",
    docente: "Javier Arturo Mineros Garcia",
    resumen: "Aprendimos a elaborar documentos técnicos que describen el funcionamiento, estructura, instalación, uso y mantenimiento de los sistemas informáticos.",
    aprendiste: [
      "Elaborar manuales técnicos y de usuario.",
      "Documentar procesos y funcionalidades de un sistema.",
      "Organizar información técnica de manera clara y comprensible."
    ],
    instrumentos: ["Rúbrica documental", "Lista de verificación", "Manual de usuario"],
    programas: ["Microsoft Word", "Microsoft Visio", "Draw.io"],
    herramientas: ["Manuales técnicos", "Diagramas UML", "Diagramas de flujo", "Documentación"],
    recursos: [
      { t: "Documentación de Microsoft", u: "https://learn.microsoft.com/es-es/" },
      { t: "Draw.io", u: "https://www.drawio.com/" },
      { t: "Documentación UML", u: "https://www.uml.org/" }
    ],
    evidencias: [
      { t: "Manuales y documentación de sistemas", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Cuál es el propósito de un manual de usuario?", o: ["Explicar cómo utilizar un sistema", "Mostrar únicamente el código fuente", "Eliminar los registros", "Configurar una red eléctrica"], c: 0, e: "Un manual de usuario explica las funciones y procedimientos para utilizar un sistema." },
      { p: "¿Qué debe contener una documentación técnica?", o: ["Información sobre estructura y funcionamiento", "Solo fotografías", "Únicamente nombres de usuarios", "Solo publicidad"], c: 0, e: "La documentación técnica describe aspectos internos y técnicos del sistema." },
      { p: "¿Por qué es importante actualizar los manuales?", o: ["Para mantener la información vigente", "Para aumentar errores", "Para eliminar procedimientos", "Para evitar el mantenimiento"], c: 0, e: "Los manuales deben reflejar las versiones y funcionalidades actuales del sistema." }
    ]
  },

  {
    id: "administracion-base-datos",
    nombre: "Administración de base de datos",
    docente: "Javier Arturo Mineros Garcia",
    resumen: "Aprendimos a administrar bases de datos mediante la creación de usuarios, asignación de permisos, respaldos, restauración y mantenimiento de la información.",
    aprendiste: [
      "Administrar usuarios y permisos de acceso.",
      "Realizar copias de seguridad y restauración de bases de datos.",
      "Aplicar medidas de seguridad e integridad de información."
    ],
    instrumentos: ["Prácticas de administración", "Examen práctico", "Proyecto de base de datos"],
    programas: ["MySQL", "MySQL Workbench", "phpMyAdmin"],
    herramientas: ["SQL", "Usuarios y privilegios", "BACKUP", "Restauración", "Seguridad"],
    recursos: [
      { t: "Manual oficial de MySQL", u: "https://dev.mysql.com/doc/" },
      { t: "MySQL Backup and Recovery", u: "https://dev.mysql.com/doc/refman/8.0/en/backup-and-recovery.html" },
      { t: "phpMyAdmin", u: "https://www.phpmyadmin.net/docs/" }
    ],
    evidencias: [
      { t: "Prácticas de administración de bases de datos", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Cuál es la función de un administrador de bases de datos?", o: ["Gestionar, proteger y mantener las bases de datos", "Diseñar únicamente imágenes", "Reparar monitores", "Crear presentaciones"], c: 0, e: "El administrador se encarga de mantener las bases de datos seguras y disponibles." },
      { p: "¿Para qué sirve un respaldo (backup)?", o: ["Para eliminar datos", "Para recuperar información en caso de pérdida", "Para bloquear usuarios", "Para cambiar contraseñas automáticamente"], c: 1, e: "Un backup permite recuperar información cuando ocurre un problema." },
      { p: "¿Qué comando SQL permite asignar privilegios?", o: ["SELECT", "GRANT", "DROP", "INSERT"], c: 1, e: "GRANT permite conceder permisos a usuarios de una base de datos." }
    ]
  },

  {
    id: "proyecto-arduino",
    nombre: "Proyecto Arduino",
    docente: "Javier Arturo Mineros Garcia",
    resumen: "Exploramos la electrónica y la programación de microcontroladores mediante Arduino para construir proyectos interactivos que respondan a estímulos del entorno.",
    aprendiste: [
      "Identificar los componentes básicos de una placa Arduino.",
      "Programar entradas y salidas digitales y analógicas.",
      "Conectar sensores y actuadores para desarrollar prototipos."
    ],
    instrumentos: ["Guía de electrónica", "Prácticas de laboratorio", "Rúbrica de prototipo"],
    programas: ["Arduino IDE", "Tinkercad"],
    herramientas: ["Arduino", "Sensores", "LED", "Protoboard", "Cables", "Resistencias"],
    recursos: [
      { t: "Documentación oficial Arduino", u: "https://docs.arduino.cc/" },
      { t: "Arduino IDE", u: "https://www.arduino.cc/en/software/" },
      { t: "Tinkercad Circuits", u: "https://www.tinkercad.com/circuits" }
    ],
    evidencias: [
      { t: "Proyectos y circuitos Arduino", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Qué es Arduino?", o: ["Una plataforma de hardware y software para proyectos electrónicos", "Un sistema de gestión de bases de datos", "Un editor de imágenes", "Un sistema operativo"], c: 0, e: "Arduino permite crear proyectos electrónicos mediante placas programables." },
      { p: "¿Qué función cumple una resistencia?", o: ["Almacenar archivos", "Limitar el paso de corriente eléctrica", "Conectar a internet", "Procesar imágenes"], c: 1, e: "Una resistencia limita la corriente y ayuda a proteger los componentes." },
      { p: "¿Qué función tiene digitalWrite()?", o: ["Leer un archivo", "Establecer un estado en un pin digital", "Crear una variable de texto", "Conectar una base de datos"], c: 1, e: "digitalWrite() establece un estado HIGH o LOW en un pin digital configurado como salida." }
    ]
  },

  {
    id: "aplicaciones-software",
    nombre: "Desarrollo de aplicaciones de software para la solución de problemas",
    docente: "Francisco Arcides Canales Sorto",
    resumen: "Desarrollamos aplicaciones informáticas aplicando lógica de programación, diseño de interfaces, conexión con bases de datos y pruebas para resolver problemas reales.",
    aprendiste: [
      "Analizar problemas y convertirlos en soluciones informáticas.",
      "Construir aplicaciones mediante lenguajes de programación.",
      "Conectar aplicaciones con bases de datos y validar su funcionamiento."
    ],
    instrumentos: ["Guía de programación", "Rúbrica de aplicación", "Evaluación práctica"],
    programas: ["Visual Studio", "Visual Studio Code", "MySQL"],
    herramientas: ["C#", "PHP", "JavaScript", "SQL", "CRUD"],
    recursos: [
      { t: "Microsoft Learn - C#", u: "https://learn.microsoft.com/es-es/dotnet/csharp/" },
      { t: "PHP Documentation", u: "https://www.php.net/manual/es/" },
      { t: "MySQL Documentation", u: "https://dev.mysql.com/doc/" }
    ],
    evidencias: [
      { t: "Aplicaciones desarrolladas", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Cuál es el objetivo de una aplicación de software?", o: ["Resolver necesidades mediante funciones informáticas", "Aumentar el consumo eléctrico", "Reemplazar todos los dispositivos", "Almacenar únicamente imágenes"], c: 0, e: "Las aplicaciones permiten automatizar tareas y solucionar problemas." },
      { p: "¿Qué operación CRUD permite modificar un registro?", o: ["Create", "Read", "Update", "Delete"], c: 2, e: "Update permite actualizar la información existente." },
      { p: "¿Qué se debe realizar después de desarrollar una aplicación?", o: ["Evitar utilizarla", "Realizar pruebas para comprobar su funcionamiento", "Eliminar el proyecto", "Desconectar la base de datos"], c: 1, e: "Las pruebas permiten verificar el funcionamiento y detectar errores." }
    ]
  },

  {
    id: "componentes-moviles",
    nombre: "Desarrollo de componentes para dispositivos móviles",
    docente: "Francisco Arcides Canales Sorto",
    resumen: "Aprendimos a diseñar y desarrollar componentes de aplicaciones móviles utilizando interfaces, controles, eventos y funcionalidades adaptadas a dispositivos móviles.",
    aprendiste: [
      "Diseñar interfaces para teléfonos y tabletas.",
      "Utilizar botones, entradas de texto, imágenes y otros controles.",
      "Programar eventos y funcionalidades en aplicaciones móviles."
    ],
    instrumentos: ["Guía de desarrollo móvil", "Prácticas de programación", "Rúbrica de aplicación"],
    programas: ["Visual Studio", ".NET MAUI", "Android Emulator"],
    herramientas: ["C#", "XAML", "Controles móviles", "Eventos", "Layouts"],
    recursos: [
      { t: ".NET MAUI - Microsoft Learn", u: "https://learn.microsoft.com/es-es/dotnet/maui/" },
      { t: "Documentación de C#", u: "https://learn.microsoft.com/es-es/dotnet/csharp/" },
      { t: "Android Developers", u: "https://developer.android.com/" }
    ],
    evidencias: [
      { t: "Aplicaciones y ejercicios móviles", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Qué es .NET MAUI?", o: ["Un framework para desarrollar aplicaciones multiplataforma", "Una base de datos", "Un lenguaje de diseño gráfico", "Un sistema operativo"], c: 0, e: ".NET MAUI permite desarrollar aplicaciones para diferentes plataformas usando .NET." },
      { p: "¿Qué lenguaje se utiliza para definir interfaces en .NET MAUI?", o: ["SQL", "XAML", "PHP", "Python"], c: 1, e: "XAML permite definir interfaces y organizar sus controles visuales." },
      { p: "¿Para qué sirve el evento Clicked de un botón?", o: ["Para detectar cuando se presiona", "Para eliminar una aplicación", "Para instalar Android", "Para crear una base de datos"], c: 0, e: "Clicked ejecuta una acción cuando el usuario presiona un botón." }
    ]
  },

  {
    id: "mantenimiento-sistemas",
    nombre: "Mantenimiento y aseguramiento de la operación del sistema informático",
    docente: "Francisco Arcides Canales Sorto",
    resumen: "Aprendimos a realizar mantenimiento preventivo y correctivo, diagnosticar fallas y aplicar medidas para garantizar la disponibilidad y el correcto funcionamiento de los sistemas informáticos.",
    aprendiste: [
      "Identificar y diagnosticar problemas de hardware y software.",
      "Realizar mantenimiento preventivo y correctivo.",
      "Aplicar medidas de seguridad y monitoreo de sistemas."
    ],
    instrumentos: ["Lista de verificación", "Prácticas de mantenimiento", "Evaluación técnica"],
    programas: ["Windows", "CrystalDiskInfo", "Windows Defender"],
    herramientas: ["Diagnóstico de hardware", "Limpieza de equipos", "Antivirus", "Copias de seguridad"],
    recursos: [
      { t: "Microsoft Support", u: "https://support.microsoft.com/es-es" },
      { t: "CrystalDiskInfo", u: "https://crystalmark.info/en/software/crystaldiskinfo/" },
      { t: "Microsoft Learn", u: "https://learn.microsoft.com/es-es/" }
    ],
    evidencias: [
      { t: "Reportes y prácticas de mantenimiento", u: "https://github.com/" }
    ],
    quiz: [
      { p: "¿Qué es el mantenimiento preventivo?", o: ["Acciones para evitar futuras fallas", "Reparar únicamente equipos dañados", "Eliminar el sistema operativo", "Cambiar todos los componentes"], c: 0, e: "El mantenimiento preventivo busca reducir la posibilidad de fallas." },
      { p: "¿Qué es el mantenimiento correctivo?", o: ["Actualizar documentos", "Solucionar fallas que ya se presentaron", "Limpiar archivos temporales únicamente", "Crear una red LAN"], c: 1, e: "El mantenimiento correctivo se realiza para reparar problemas existentes." },
      { p: "¿Por qué es importante realizar copias de seguridad?", o: ["Para ocupar más espacio", "Para proteger y recuperar información", "Para aumentar la temperatura", "Para desinstalar programas"], c: 1, e: "Las copias de seguridad permiten recuperar los datos ante pérdidas o daños." }
    ]
  }

];