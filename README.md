# ArrynWiki documentation

> ArrynWiki documentation repository, powered ❤️ by [Docusaurus](https://docusaurus.io/), a modern static website generator.

![banner](https://media.discordapp.net/attachments/1040672846613065758/1058173295981232209/azfzaegezrg.png?width=921&height=356)

[![build](https://img.shields.io/github/workflow/status/okp4/docs/Build?label=build&style=for-the-badge&logo=github)](https://docusaurus.io/)
[![publish](https://img.shields.io/github/workflow/status/okp4/docs/Publish?label=publish&style=for-the-badge&logo=github)](https://netlify.com/)
[![license][bsd-3-clause-image]][bsd-3-clause]
[![cc-by-sa-4.0][cc-by-sa-image]][cc-by-sa]

## Developing & contributing

### Installation

```sh
yarn
```

### Local Development

```sh
yarn start
```

This command starts a local development server and opens up a browser window (<http://localhost:3000/>). Most changes are reflected live without having to restart the server.

Note that the search wont work in development. To use the search feature, first run `yarn build` then `yarn run serve`.

### Build

```sh
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


## License

The contents of the documentation (e.g. the `.md` files in the `/docs` folder) is [Creative Commons Attribution-ShareAlike 4.0 International][cc-by-sa] licensed.

[bsd-3-clause]: https://opensource.org/licenses/BSD-3-Clause
[bsd-3-clause-image]: https://img.shields.io/badge/License-BSD_3--Clause-blue.svg?style=for-the-badge
[cc-by-sa]: https://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://i.creativecommons.org/l/by-sa/4.0/88x31.png
