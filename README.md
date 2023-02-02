# Wefit Frontend

Este projeto foi desenvolvido como solução do desafio da empresa [Wefit](https://wefit.com.br/) que consiste em uma simulação de loja virtual (e-commerce).

## Sumário

- [Acessando Online](#acessando-online)
- [Executando Localmente](#executando-localmente)
- [Tecnologias e Recursos](#tecnologias-e-recursos)
- [Testes Unitários](#testes-unitários)

## Acessando Online

Você poderá acessar o projeto online e funcionado [aqui](https://wefit-front-end.vercel.app) ou acessando o endereço: `https://wefit-front-end.vercel.app`.

## Executando Localmente

Antes de executar o projeto é necessário que instale todas as dependências necessárias do projeto, isto pode ser feito utilizando `yarn` ou `npm`, como no exemplo abaixo:

> Dê preferencia ao `yarn` pois há o arquivo `yarn.lock` que fará que a instalação seja mais rápida.

```sh
# installing using yarn
$ yarn

# installing using npm
$ npm install
```

Depois de instalar as dependências você pode executar o script disponível no `package.json`, o `dev`, isto pode ser feito tanto com `yarn` quando `npm`, veja o exemplo abaixo:

> O script irá subir um servidor que irá prover acesso a uma API para consulta de produtos utilizando `json-server` e também subirá o projeto React.

```sh
# executing dev script using yarn
$ yarn dev

# executing dev string usgin npm
$ npm run dev
```

## Tecnologias e Recursos

Para este projeto foi usado o script da comunidade React.JS `create-react-app` para fazer o startup do projeto, mas também está presente dentro do projeto algumas bibliotecas, são elas:

- [zustand](https://github.com/pmndrs/zustand) - Usado para realizar a gestão do estado global dos produtos, diferente do Redux a instalação e configuração do `zustand` é simples e rápida, e há bastante recursos que podem ser usados.
- [react-use](https://github.com/streamich/react-use) - Esta fornece uma grande lista de `hooks` utéis dentre eles, o que usamos foi o [useMedia](https://github.com/streamich/react-use/blob/master/docs/useMedia.md), usado para tratar responsividade de componentes.
- [react-router-dom](https://reactrouter.com/) - Usado para trabalharmos com rotas e páginas dentro react.
- [react-icons](https://react-icons.github.io/) - Uma grande lista de icones disponíveis de diversas comunidades diferentes, como por exemplo, Material UI.
- [styled-components](https://styled-components.com/) - Utilizado para realizar a criação do CSS de componentes e páginas de uma forma mais dinâmica.
- [Jest](https://jestjs.io) - Ferramenta para testes automáticos.

## Testes Unitários

Este projeto está configurado com o `Jest` para executar testes unitários, para executar os testes basta rodar o seguinte comando:

```sh
# running tests using yarn
$ yarn test

# running tests using npm
$ npm run test
```

> Vale ressaltar que apenas um componente ([`<Button />`](src/components/Button/Button.test.tsx)) tem teste funcionando que foi usando para demostrar como seria feito o teste de um componente dentro do React.JS utilizandos as práticas que mais conheço.