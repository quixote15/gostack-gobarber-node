# Instalação

### 1. Clonar e instalar dependencias:
    git clone https://github.com/quixote15/gostack-gobarber-node.git
    cd gostack-gobarber-node && yarn


#### 2. Depois disso é necessário Instalar o postgres, MongoDB e Redis:

  1- Postgres

    $ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres

  2- MongoDB

     docker run --name some-mongo -p 27017:27017 -d -t mongo

  3- Redis

    docker run --name redisbarber -p 6379:6379 -d -t redis:alpine
### 3. Configurar variaveis de ambiente

Este projeto utiliza algumas variáveis de ambiente para configurar as conexões com bancos de dados, bibliotecas e aplicações externas.

Portanto, na raiz do projeto você deve criar um arquivo '.env' e configurar as variáveis.

Existe um arquivo chamado '.env.exemple' que contém todas a variáveis necessárias.

# Lições aprendidas


## 1. [Sucrase](https://github.com/alangpierce/sucrase)
 O nodejs utiliza a sintax commonJs e portanto não suporta funcionalidades do ES6 como `import/export` porém o sucrase é um transpilador que pode ser adicionado as dependências de desenvolvimento de um projeto Node para habilitar esses recursos.

- Suporta JSX, typescript e Flow
- 20x mais rápido que o [babel](https://github.com/babel/babel)
- O parser do sucrase é um fork do babel
- Uma alternativa ao babel com um escopo menor (Assume que você está em um browser recente ou a versão mais recente do Node)

In

    import express from 'express';

 Out

    const express = require('express');


### 1.1 Uso

A instalação é recomendada com o nodemon:

    yarn add sucrase nodemon

Após a instalação é necessário criar um arquivo de configuração do nodemon:


    {
     "execMap": {
	   "js": "sucrase-node"
     }
    }

Esse arquivo diz pro nodemon que sempre que um arquivo javascript for executado ele deve ser executado com o sucrase. Digamos que exista um arquivo chamado `server.js` então em vez do nodemon executá-lo com:

    node server.js

Ele executa como:

    sucrase-node server.js

Dessa forma é realizada a transpilação para javascript antes da execução.

## 2. ORM

- É uma forma de abstrair o nosso banco de dados ( mudar a forma que o banco funciona e se comunica)
- Tabelas podem virar models
-  Queries SQL viram código javascript (Com sequelize)

    // SELECT * FROM post WHERE authorId = 12 AND status = 'active';
    Post.findAll({
	    where:  {
	           [Op.or]:  [{authorId:  12},  {authorId:  13}]
	       }
    });

### 2.1 Migrations
- Controle de versão para a base de dados
- Mantém a base de dados atualizada para todos os desenvolvedores do time e no ambiente de produção
- Possui arquivos de configuração para consultas e alterações nas tabelas
- Cada arquivo é uma migração e sua ordenação ocorre por data
- A partir do momento que uma migration foi usada em produção ou por outros devs ela jamais deverá ser alterada (Uma nova deve ser criada)
- Cada migration deve ser específica para uma tabela
- **Seeds**: Usar para preencher dados para testes em DESENVOLVIMENTO SOMENTE(NUNCA EM PRODUÇÃO)!


# 3. Padronização de código

O ESLint é uma ferramenta de análise de código estático para identificar padrões problemáticos encontrados no código JavaScript. É criado por Nicholas C. Zakas em 2013. As regras no ESLint são configuráveis ​​e as regras personalizadas podem ser definidas e carregadas.

### 3.1 Instalação

1 - Adicionar o eslint nas dependencias de desenvolvimento do projeto.

    yarn add eslint -D

2- Inicializar Eslint:

    yarn eslint --init

Esse comando irá solicitar por algumas configurações, um padrão muito utilizado é o AirBnB:

- How would you like to use ESLint? To check syntax, find problems, and enforce code style
 What type of modules does your project use? JavaScript modules (import/exp
ort )
- Which framework does your project use? None of these
- Does your project use TypeScript? No
- Where does your code run? Node
- How would you like to define a style for your project? Use a popular style
 guide
- Which style guide do you want to follow? Airbnb (https://github.com/airbnb
/javascript)
- What format do you want your config file to be in? JavaScript
- Would you like to install them now with npm? Yes

**IMPORTANTE**:  O eslint usa o npm para instalar as dependencia, gerando assim o arquivo package-lock.js. Delete esse arquivo e execute o comando yarn novamente.


3- Abrir o arquivo settings.json do VSCode e adicionar os parâmetros de configuração:

4- Instalar os plugins: Eslint e Prettier

5- instalar o prettier e criar arquivo de configuração


# Enviando emails

Existem diversos Serviços de email:

 - Amazon SES
 - mailgun
 - sparkpost
 - mandril
 - Mailtrap (Somente Para ambientes de desenvolvimento)

 Neste projeto foi utilizado a biblioteca nodemailer.

Enviar emails geralmente leva mais tempo que outras operações normal no backend. Assim, travar a execução do código para esperar o envio de email não é nada performatico. A melhor forma de lidar com isso é com Background Jobs e Filas.

Para isso foi utilizado:

- Redis
- BeeQueue

