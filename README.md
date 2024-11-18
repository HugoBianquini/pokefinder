# Pokefinder

<img width="1673" alt="Captura de Tela 2024-07-05 às 16 29 42" src="https://github.com/HugoBianquini/zrp-pokemon/assets/65050552/61ee89a2-88f3-4181-93e4-7dbd89da737f">

## Description

Find any Pokemon easily!

This repository contains three integrated projects to create a complete application involving a backend, a frontend, and a CMS. The application uses the PokeAPI to fetch Pokémon data and displays this information in a modern interface. Additionally, it allows adding custom descriptions for each Pokémon through a Strapi CMS.

## Prerequisites

Make sure to have the following tools installed in your development environment:

- Node.js
- Docker
- Yarn

## Repository Structure

- **pokeback**: Backend built with NestJS that connects to the PokeAPI.
- **pokefront**: Frontend built with Next.js that integrates with the backend to display Pokémon data.
- **zrp-pokemon**: Strapi CMS project that allows adding custom descriptions for Pokémon.

## Running Instructions

### Running Backend and Frontend with Docker

To run the `pokeback` and `pokefront` projects together, use Docker Compose.

1. Clone the repository:

   ```bash
   git clone https://github.com/seu-usuario/your-repository.git
   cd your-repository
   ```

2. Run Docker Compose:

   ```bash
   docker-compose up -d
   ```

3. Once the containers are up:
   - The frontend will be accessible at: `http://localhost:3000`
   - The backend will be accessible at: `http://localhost:8080`

NOTE: It is recommended to use the frontend on a computer as the layout is not yet responsive for smaller devices.

### Running the Strapi CMS Locally

The Strapi project is not included in the Docker Compose setup to avoid performance and memory issues. Therefore, it must be run locally.

1. Navigate to the Strapi folder:

   ```bash
   cd zrp-pokemon
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start Strapi:

   ```bash
   yarn start
   ```

4. Access the Strapi admin panel:

- The panel will be available at: http://localhost:1337/admin
- Inside the panel, you will find the "PokemonDescription" entity.

NOTE: Since the backend and frontend containers are in a separate group, the networks are not configured to communicate with the Strapi container.

## Docker Compose with Strapi

In the "extra" folder of the repository, there is a docker-compose file that includes Strapi. If someone wants to run all services together, they can use this file. However, be aware that the build process may take some time, and there is a chance of encountering memory issues with the container.

## Contribution

Contributions are welcome! Feel free to open issues or pull requests.
