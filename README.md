##Base para crear aplicaciones con API pública RESTful en Node.js

**AVISO**: No se toma ninguna medida de seguridad en cuanto se refiere a autenticacion. Este programa es solo un ejemplo de como hacer una API RESTful.

Instalacion:
```
git clone https://github.com/capy/Simple-API-style.git
npm update
```

Editar el archivo **lib/db.js** y pon el nombre a la DB que desees.

Una vez configurado puedes ver que hay dos modelos de ejemplo (book y user). Puedes comprobar el funcionamiento de la API haciendo GET a /users o /books, Crear nuevos users o books haciendo POST a /users o /books, etc.

Para crear nuevos modelos y que se creen automaticamente las URL de su API crea un modelo dentro de la carpeta "**models**", y en **routes/public_APIs.js** añade ese nuevo modelo al listado de modelos.