#

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/nx-api/js?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/rppzwfDQXn)

## Generate a library

```sh
npx nx g @nx/js:lib packages/pkg1 --publishable --importPath=@my-org/pkg1
```

## Run tasks

To build the library use:

```sh
npx nx build pkg1
```

To run any task with Nx use:

```sh
npx nx <target> <project-name>
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Versioning and releasing

To version and release the library use

```
npx nx release
```

Pass `--dry-run` to see what would happen without actually releasing the library.

[Learn more about Nx release &raquo;](hhttps://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Keep TypeScript project references up to date

Nx automatically updates TypeScript [project references](https://www.typescriptlang.org/docs/handbook/project-references.html) in `tsconfig.json` files to ensure they remain accurate based on your project dependencies (`import` or `require` statements). This sync is automatically done when running tasks such as `build` or `typecheck`, which require updated references to function correctly.

To manually trigger the process to sync the project graph dependencies information to the TypeScript project references, run the following command:

```sh
npx nx sync
```

You can enforce that the TypeScript project references are always in the correct state when running in CI by adding a step to your CI job configuration that runs the following command:

```sh
npx nx sync:check
```

[Learn more about nx sync](https://nx.dev/reference/nx-commands#sync)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/js?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Regarder le détail d'un service

```sh
nx show project <nom-projet>
```

_ex:_: `nx show project @wellness-app/data-transfert`

# Structure global

```css
my-app/
├── apps/
│   ├── client/ (Next.js 15)
│   └── graphql-server/ (NestJS)
├── libs/
│   ├── shared/
│   │   ├── ui/ (shadcn components + GSAP wrappers)
│   │   ├── graphql/ (schema & codegen)
│   │   ├── auth/ (NextAuth/Nest Passport logic)
│   │   └── payment/ (Stripe/Paypal integration)
│   ├── ai-agent/ (Vercel AI SDK integration)
│   └── data-transfert/ (Prisma client + models)
├── infra/
│   ├── docker/
│   │   ├── frontend.Dockerfile
│   │   └── backend.Dockerfile
│   ├── helm/
│   └── docker-compose.yml
├── packages/ (si nécessaire)
└── nx.json
```

---

## 1. Prérequis

- Node.js >= 18
- Docker & Docker Compose
- Kubectl & Helm
- NX CLI (`npm install -g nx`)

## 2. Installation locale

2. Installer les dépendances :

   ```bash
   npm ci
   ```

3. Lancer les services infra :

   ```bash
   docker-compose up -d
   ```

4. Générer le code GraphQL :

   ```bash
   nx generate @graphql-codegen/cli:codegen
   ```

5. Lancer en mode développement :

   ```bash
   nx serve api  # Back NestJS
   nx dev web  # Front Next.js
   ```

## Libs partagées

Chaque lib est générée via un _generator_ Nx adapté :

| Lib                | Plugin Nx           | Buildable | Commande de génération                                                                                                           |
| ------------------ | ------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **ui**             | `@nx/react:library` | ✅        | `nx generate @nx/react:library ui --directory=libs --style=styled-components --buildable`                                        |
| **data-transfert** | `@nx/js:library`    | ✅        | `nx generate @nx/js:library data-transfert --directory=libs --importPath=@wellness-app/data-transfert --bundler=tsc --buildable` |
| **auth**           | `@nx/js:library`    | ✅        | `nx generate @nx/js:library auth --directory=libs --importPath=@wellness-app/auth --bundler=tsc --buildable`                     |
| **util**           | `@nx/js:library`    | ✅        | `nx generate @nx/js:library util --directory=libs --importPath=@wellness-app/util --bundler=tsc --buildable`                     |
| **infra**          | `@nx/js:library`    | ✅        | `nx generate @nx/js:library infra --directory=libs --importPath=@wellness-app/infra --bundler=tsc --buildable`                   |

- Remarque : les libs `@nx/js` doivent inclure `--bundler=tsc` et `--buildable` pour permettre le build Nx.

- Remarque : si tu souhaites typer fortement les libs (TypeScript), ajoute `--framework=none --bundler=tsc` sur les libs `@nx/js`.

## 4. Build production Build production

1. Build Prisma :

   ```bash
   npx prisma generate --schema=libs/data-transfert/prisma/schema.prisma
   ```

2. Build libs :

   ```bash
   nx build ui
   nx build data-transfert
   nx build auth
   nx build util
   nx build infra
   ```

3. Build apps :

   ```bash
   nx build api --prod
   nx build web --prod
   ```

# Prisma

1. ## Première configuration

```sh
nx g @nx-tools/nx-prisma:configuration appName
```

2. ## Lancement des commandes prisma
   Génération du prisma client

```sh
nx prisma-generate data-transfert
```

# Graphql

## Le data-transfert projet

Pour générer les code/tpes graphql du data-transfert, on lance

```sh
nx codegen data-transfert --verbose
```
