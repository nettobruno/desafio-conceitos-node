<img src="https://camo.githubusercontent.com/d25397e9df01fe7882dcc1cbc96bdf052ffd7d0c/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67" />

# Desafio de conceitos em NodeJS
Este projeto foi desenvolvido para o primeiro desafio em NodeJS do Bootcamp da [Rocketseat](https://rocketseat.com.br/).

![](https://img.shields.io/badge/NPM-6.13.4-red)
![](https://img.shields.io/badge/Node-12.16.1-green)
![](https://img.shields.io/badge/Express-4.17.1-blue)

## Instruções de Instalação
Basta seguir os passos abaixo para que consiga fazer a instalação completa do projeto em sua máquina.
Para que funcione corretamente é necessário que tenha instalado:
- NodeJS
- NPM ou Yarn
<br>
Após ter instalado as dependências necessárias, rode os comandos abaixo em seu terminal:

```bash
  # Clone o projeto em uma pasta de sua preferência
  $ git clone https://github.com/nettobruno/desafio-conceitos-node.git

  # Entre na pasta do projeto
  $ cd desafio-conceitos-node

  # Instale as dependências
  $ yarn
  ou 
  $ npm install

  # Rode o projeto em sua máquina
  $ yarn dev
```

## Testar funcionamento do projeto
Para que possa realmente testar o projeto é necessário ter um cliente HTTP para realizar testes na API.
Eu particularmente gosto do [Insomnia](https://insomnia.rest/), mas uma outra boa opção é o [Postman](https://www.postman.com/).
Baixe a que preferir e já estará pronto para realizar os testes ;)

## Rotas
Listar todos os repositórios: GET
> http://localhost:3333/repositories

Criar um repositório: POST
> http://localhost:3333/repositories

Editar um repositório: PUT
> http://localhost:3333/repositories/:id

Deletar um repositório: DELETE
> http://localhost:3333/repositories/:id

Like em um repositório: POST
> http://localhost:3333/repositories/:id/like