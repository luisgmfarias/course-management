# Imagem base
FROM node:22

# Diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Compilar TypeScript
RUN npm run build

# Expor a porta
EXPOSE 5000

# Comando para iniciar o aplicativo
CMD [ "node", "dist/server.js" ]
