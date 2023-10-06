# Elysia with Bun runtime

## Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
bun create elysia ./elysia-example
```

## Development
To start the development server run:
```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

## Install and use Bun on Windows (WSL)
```bash
sudo apt-get install unzip
```
```bash
curl -fsSL https://bun.sh/install | bash
```

## Install and use Prisma
```bash
bun install -d prisma
```
```bash
bunx prisma init
```
```bash
bunx prisma generate --schema=./src/external/prisma/schema.prisma
```
```bash
bunx prisma migrate dev --name init --schema=./src/external/prisma/schema.prisma
```
