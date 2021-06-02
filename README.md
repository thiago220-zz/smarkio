# Smarkio descrição

Para executar esse teste de forma local você precisa ter acesso a uma base de dados MYSQL em algum servidor. Há alguns comandos abaixo que exigem alguns aplicativos instalados. São eles o **GIT**, o **NODE.js** e, caso você queria armazenar os dados em um servidor local, o **SERVIDOR MYSQL**.

# Instalação da aplicação

Acesse, via terminal, um diretório onde a aplicação será instalada e para clonar o repositório use o seguinte comando:

```
git clone https://github.com/thiago220/smarkio
```

Logo após ter o repositório clonado em sua máquina, você executará o gerenciador de pacotes do Node, o **NPM** para a instalação de dependências para a aplicação. Para tanto, acesse o diretório do repositório que instalou a aplicação e executar o seguitne comando:

```
npm install
```

Logo após, é necessário editar um arquivo de configuração para conexão ao banco de dados **MYSQL**, para tanto, abra o arquivo em **config/config.json** e basta informar conforme o código abaixo:

```javascript
  "development": {
    "username": "Seu Usuário Aqui",
    "password": "Sua Senha Aqui",
    "database": "vxn50mMAYD",
    "host": "Seu Bando De Dados Aqui",
    "dialect": "mysql"
  }
```
Com essa configuração, é necessário executar o "migrations" do ORM Sequelize, que criará as tabelas no Bancod e Dados, para isso no terminal execute:

```
sequelize db:migrate
```

Feito isso inicie a aplicação através do comando, com o terminal setado no diretório da aplicação:

```
npm run start
```

Caso dê tudo certo no terminal aparecerá a mensagem **API ON-LINE**, basta agora abrir o navegador e acessar o endereço [http://127.0.0.1:3000](http://127.0.0.1:3000)