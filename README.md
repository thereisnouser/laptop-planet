# Laptop Planet

Online shop where people can buy laptops

## Installation

1. Pull project

```sh
git clone https://gitlab.akvelon.net:9443/kirill.makarov/laptop-planet.git

cd laptop-planet/
```

2. Install dependecies
```sh
lerna bootstrap --hoist
```

3. Create `.development.env` and `.production.env` files 
```sh
cd packages/server

touch .development.env .production.env
```
and fill info in it by its templates `*.template`

## Docker

1. Build images
```sh
docker-compose build
```

2. Run containers
```sh
docker-compose up
```
