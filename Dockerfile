FROM node:20-alpine

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar solo archivos de dependencias primero (mejor uso de caché)
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto de la app
EXPOSE 4800

CMD ["npm", "run", "inicio"]