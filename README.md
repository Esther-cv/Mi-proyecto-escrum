📚 Mini Biblioteca Digital
Una aplicación web interactiva que permite a los usuarios explorar, visualizar y gestionar una colección digital de libros organizados por categorías. Incluye un panel de administrador para agregar, editar y eliminar libros, además de un sistema de navegación dinámico y un diseño moderno y adaptable.

🚀 Características principales
Navegación por secciones: Inicio, Categorías, Login, y Administrador.
Visualización de libros con portadas en emojis.
Filtro por categorías (Matemáticas, Ciencias, Historia, Literatura, Idiomas, Arte).
Detalle individual de cada libro con sinopsis, autor, año y enlaces externos.
Sistema de autenticación básica (usuario administrador).
Panel de administración para gestionar libros (CRUD).
Modal para agregar o editar libros dinámicamente.
Notificación visual al iniciar sesión como administrador.
Diseño responsive y atractivo con animaciones suaves.
🧩 Requerimientos funcionales
RF-01. Visualización de libros
El sistema debe mostrar un listado de libros disponibles, con su título, autor, año y categoría.

RF-02. Navegación por categorías
El usuario debe poder seleccionar una categoría desde el panel lateral y ver los libros correspondientes.

RF-03. Detalle del libro
El usuario debe poder visualizar información detallada de un libro seleccionado, incluyendo descripción y enlaces externos.

RF-04. Autenticación
El sistema debe permitir el inicio de sesión con credenciales:

Usuario: admin
Contraseña: admin123
RF-05. Panel de administración
Solo los usuarios autenticados pueden acceder al panel donde se pueden:

Agregar nuevos libros.
Editar información existente.
Eliminar libros del sistema.
RF-06. Persistencia temporal
Los datos se almacenan en una estructura JavaScript en memoria (sin base de datos), manteniéndose activos mientras la página está abierta.

RF-07. Interfaz adaptable
El diseño debe adaptarse correctamente a distintos tamaños de pantalla (desktop, tablet, móvil).

RF-08. Notificación de administrador
Al iniciar sesión exitosamente, debe mostrarse una notificación flotante de bienvenida para el administrador.

🧠 Requerimientos no funcionales
Rendimiento: La aplicación debe cargar rápidamente y permitir navegación fluida.
Usabilidad: Interfaz intuitiva y agradable al usuario.
Compatibilidad: Funciona en navegadores modernos (Chrome, Edge, Firefox).
Mantenibilidad: Estructura separada en tres archivos principales (index.html, styles.css, script.js).
🗂️ Estructura del proyecto
📁 mini-biblioteca
│
├── index.html      # Estructura principal de la aplicación
├── styles.css      # Estilos y diseño visual
└── script.js       # Lógica e interactividad
🔧 Tecnologías utilizadas
HTML5 — estructura del contenido
CSS3 — estilos y animaciones
JavaScript (ES6) — manejo de lógica y eventos del usuario
🧭 Cómo usar
Clona o descarga el proyecto.
Abre el archivo index.html en tu navegador.
Explora los libros desde la página principal o por categorías.
Inicia sesión con:
Usuario: admin
Contraseña: admin123
Accede al panel de administración para agregar, editar o eliminar libros.
👥 Equipo de desarrollo
Equipo de Desarrollo

Product Owner: Esther Coro
Scrum Master: Kristel Cerbantes
Desarrollador: Jhon Titiboco
