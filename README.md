# ZRP Pokémon Project

<img width="1673" alt="Captura de Tela 2024-07-05 às 16 29 42" src="https://github.com/HugoBianquini/zrp-pokemon/assets/65050552/61ee89a2-88f3-4181-93e4-7dbd89da737f">

## Descrição

Este repositório contém três projetos integrados para criar uma aplicação completa envolvendo um backend, um frontend e um CMS. A aplicação utiliza a PokeAPI para buscar informações sobre Pokémon e exibe essas informações em uma interface moderna. Além disso, permite adicionar descrições personalizadas para cada Pokémon através de um CMS Strapi.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- Node.js
- Docker
- Yarn

## Estrutura do Repositório

- **pokeback**: Backend desenvolvido em NestJS que realiza a conexão com a PokeAPI.
- **pokefront**: Frontend desenvolvido em Next.js que integra com o backend para exibir as informações dos Pokémon.
- **zrp-pokemon**: Projeto Strapi CMS que permite adicionar descrições personalizadas para os Pokémon.

## Instruções para Execução

### Executando Backend e Frontend com Docker

Para rodar os projetos `pokeback` e `pokefront` em conjunto, utilize o Docker Compose.

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Execute o Docker Compose:

   ```bash
   docker-compose up -d
   ```

3. Após os contêineres subirem:
   - O frontend estará acessível em: `http://localhost:3000`
   - O backend estará acessível em: `http://localhost:8080`

OBS: Recomendo utilizar o frontend no computador, o layout ainda não está responsivo para dispositivos menores

### Executando o Strapi CMS Localmente

O projeto Strapi não está incluído no Docker Compose para evitar lentidão e problemas de memória. Portanto, é necessário rodá-lo localmente.

1. Acesse a pasta do Strapi:

   ```bash
   cd zrp-pokemon
   ```

2. Instale as dependências:

   ```bash
   yarn install
   ```

3. Inicie o Strapi

   ```bash
   yarn start
   ```

4. Acesse o painel administrativo do Strapi:

- O painel estará acessível em: http://localhost:1337/admin
  -Dentro do painel, você encontrará a entidade "PokemonDescription".

OBS: Como os conteineres do backend e frontend estão em um grupo separada, as redes não estão configuradas para se comunicar com o container strapi.

## Docker Compose com Strapi

Na pasta "extra" do repositório, existe um arquivo `docker-compose` que inclui o Strapi. Caso alguém queira rodar todos os serviços juntos, pode utilizar este arquivo. No entanto, esteja ciente de que o build levará algum tempo e existe a chance de retornar erro por falta de memória no container.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.
