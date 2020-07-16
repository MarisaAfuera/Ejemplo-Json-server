# Ejemplo-Json-server
Creación de API end-points para probar el Frontend independientemente del estado del Backend

PARA PROBAR EL EJEMPLO
1. Instalar node desde https://nodejs.org/en/
2. instalar Json server con npm install -g json-server1. 
3. Descargar el proyecto en local con git clone
4. Arrancar Json server con json-server --watch db.json
5. Consultar la base de datos desde el browser con http://localhost:3000/users

ACCEDER A LOS DATOS DESDE MÓDULO JAVASCRIPT
1. Instalar node-fetch con npm install --save node-fetch
2. Ejecutar el módulo readdata.js con node readdata.js

POBLANDO LA BASE DE DATOS
1. Instalar CASUAL con npm install casual
2. Consultar el contenido del fichero db.json
3. Ejecutar populatedb.mjs con node populatedb.mjs
4. Consultar de nuevo el contenido del fichero db.json. Ahora contendrá datos de más usurios
