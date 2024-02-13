# HUNTWEB

## Sobre o Projeto

O Huntweb é um projeto desenvolvido em ReactJS focado na construção de interfaces e páginas web dinâmicas. Ele consome informações de uma API REST e as exibe no frontend, permitindo aos usuários acessar detalhes de cada item clicado. O objetivo principal é criar uma aplicação web que requisita dados de uma API e os apresenta de forma amigável ao usuário.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
huntweb/
|-- public/
|   |-- favicon.ico
|   |-- index.html
|   |-- manifest.json
|-- src/
|   |-- components/
|   |   |-- Header/
|   |   |   |-- index.js
|   |   |   |-- styles.css
|   |-- pages/
|   |   |-- main/
|   |   |   |-- index.js
|   |   |   |-- styles.css
|   |   |-- product/
|   |   |   |-- index.js
|   |   |   |-- styles.css
|   |-- services/
|   |   |-- api.js
|   |-- App.js
|   |-- index.js
|   |-- routes.js
|   |-- serviceWorker.js
|   |-- setupTests.js
|   |-- styles.css
|-- package.json
|-- yarn.lock
|-- README.md
```

## Funcionalidades Implementadas

- Consumo de dados de uma API REST.
- Listagem de produtos.
- Armazenamento de dados no estado da aplicação.
- Criação de componentes como Header.
- Configuração de navegação (roteamento) entre diferentes páginas.
- Detalhes dos produtos.
- Paginação dos produtos.

## Tópicos Abordados

1. **ReactJS Essentials**
    - 1.1. Construção de Frontend com ReactJS
    - 1.2. Introdução à Biblioteca JavaScript
    - 1.3. Acesso a APIs REST
    - 1.4. Roteamento de Páginas
    - 1.5. Componentização
    - 1.6. Gerenciamento de Estados e Propriedades

2. **Configuração do Projeto**
    - 2.1. Verificação de Versões (Node.js, npm, Yarn)
    - 2.2. Inicialização do Projeto com Create React App
    - 2.3. Navegação para o Diretório do Projeto
    - 2.4. Início do Desenvolvimento com o Editor de Código

3. **Componentização**
    - 3.1. Conceito e Aplicação de Componentes
    - 3.2. Uso dos Módulos React e ReactDOM
    - 3.3. Método Render na Estruturação de Componentes

4. **Criação do Header**
    - 4.1. Estruturação do Componente Header
    - 4.2. Estilização do Componente Header
    - 4.3. Estilos Globais para a Aplicação

5. **Consumo de Dados da API**
    - 5.1. Integração com API REST em Node.js
    - 5.2. Utilização da Biblioteca Axios para Requisições HTTP
    - 5.3. Manipulação dos Dados Recebidos pela API
    - 5.4. Exibição dos Produtos na Página Principal
    - 5.5. Paginação e Listagem dos Produtos

6. **Gerenciamento de Estado**
    - 6.1. Utilização do Estado (State) no ReactJS
    - 6.2. Gerenciamento de Variáveis de Estado
    - 6.3. Manipulação de Objetos de Estado

7. **Navegação entre Páginas**
    - 7.1. Configuração de Roteamento com React Router Dom
    - 7.2. Criação de Páginas para Detalhes dos Produtos
    - 7.3. Redirecionamento de Usuários de Acordo com as Rotas
    - 7.4. Utilização de Componente Link para Navegação

## Próximos Passos para o Frontend

- Implementação de Responsividade
- Aprimoramento da Acessibilidade
- Adição de Modo Escuro/Claro
- Variação de Temas e Cores
- Hospedagem da Aplicação

## Como Executar o Projeto

### Pré-requisitos

Antes de começar, é necessário ter instalado na máquina:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- Um editor de código, como o [Visual Studio Code](https://code.visualstudio.com/)

### Rodando a Aplicação Web

1. Clone o repositório:
    ```bash
    git clone https://github.com/joaogdcarvalho/huntweb
    ```

2. Acesse a pasta do projeto:
    ```bash
    cd huntweb
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Execute a aplicação em modo de desenvolvimento:
    ```bash
    npm start
    ```

5. Acesse a aplicação em seu navegador: [http://localhost:3000](http://localhost:3000)

## Como Contribuir para o Projeto

O Huntweb é um projeto de código aberto e estamos abertos a contribuições. Sinta-se à vontade para abrir pull requests, reportar bugs ou sugerir novas funcionalidades.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).