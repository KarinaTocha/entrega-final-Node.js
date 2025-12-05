## API REST creada con Node.js y Express, conectada a Firebase Firestore como base de datos.


### Permite realizar operaciones CRUD sobre una colección de productos, respetando una arquitectura modular y separada por capas.

* Características principales:

    * Servidor en Express con middlewares personalizados

    * Conexión a Firebase Firestore


*  Arquitectura basada en:

    * Rutas

    * Controladores

    * Servicios

    * Modelos

    * Manejo de errores

    * CORS configurado

    * Variables de entorno con dotenv

    * Probado con Postman Desktop Agent

📂 Estructura del código

    src/
    │
    ├── controllers/
    │   └── products.controllers.js
    │
    ├── models/
    │   └── products.models.js
    │
    ├── routes/
    │   └── products.routes.js
    │
    ├── services/
    │   └── products.services.js
    │
    └── data/
        └── data.js   ← configuración de Firebase


##  ✨ Autor

### Karina Tocha - Proyecto Final - Backend Node.Js- TalentoTech 2025