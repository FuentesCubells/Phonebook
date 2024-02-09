# Usa una imagen base de Node.js con npm
FROM node:latest

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos
COPY . .

# Construye la aplicación React para producción
RUN npm run build

# Expone el puerto en el que se sirve la aplicación React
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
