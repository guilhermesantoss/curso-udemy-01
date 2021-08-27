<h1 align="center">ReactJS Project - Data Fetch</h1>

<p align="center">
  <img src="https://img.shields.io/github/repo-size/guilhermesantoss/curso-udemy-01?style=for-the-badge&color=darkblue" alt="Repository Size" />
  <img src="https://img.shields.io/github/last-commit/guilhermesantoss/curso-udemy-01?style=for-the-badge&color=darkblue" alt="Last Commit" />
  <img src="https://img.shields.io/github/languages/count/guilhermesantoss/curso-udemy-01?style=for-the-badge&color=darkblue" alt="Languages Used" />
  <img src="https://img.shields.io/github/license/guilhermesantoss/curso-udemy-01?style=for-the-badge&color=darkblue" alt="License" />
</p>


## Sobre o projeto

Projeto de uma aplicação consumindo uma [fake API](https://jsonplaceholder.typicode.com), utilizando vários conceitos do React e Javascript.

## Executando o projeto

Instale as dependências do projeto utilizando o comando:
```bash
npm install
```

Agora que as dependências estão devidamente instaladas, execute o projeto utilizando o comando:
```bash
npm start
```
## Buildando imagem docker development
```bash
docker build -t sample:dev .
```

## Executando a imagem development
```bash
docker run -p 3001:3000 sample:dev
```

## Buildando imagem docker production
```bash
docker build -f Dockerfile.prod -t sample:prod .
```

## Executando a imagem production
```bash
docker run -p 3333:80 sample:prod
```

## Tecnologias utilizadas

* [React](https://reactjs.org/)

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
