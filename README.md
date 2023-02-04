> ## Monorepo nodejs-express app 🌌

The idea is to create an application that can store/provide information on 🪐exoplanets.
This includes information such as mass, size, parent star, location/distance, whether the planet is in the goldilock zone, etc.

Currently working on first few services, local development, and setting up the infrastructure architecture.

> ### Run the project locally with docker compose:

```
git clone https://github.com/k-nikola/knverse.git \
&& cd knverse/docker \
&& docker compose up -d
```

> ### Prerequisites for building the project:

```
❯ node -v
v19.4.0
❯ npm -v
9.2.0
❯ lerna -v
6.0.1
```

### Project structure:

<details>
    <summary>Tree</summary>
    <code>
    ├── README.md </br>
    ├── docker </br>
    │   └── docker-compose.yml </br>
    ├── lerna.json </br>
    ├── nx.json </br>
    ├── package-lock.json </br>
    ├── package.json </br>
    ├── packages </br>
    │   ├── db </br>
    │   ├── shared </br> 
    │   ├── user-login </br>
    │   └── user-registration </br>
    └── tsconfig.json
    </code>
</details>
