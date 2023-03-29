<p align="center">
  <img width="150" height="150" src="https://github.com/nas-ts/nasts-core/blob/master/readme_assets/logo.png">
</p>
<h1 align="center">
NAS.TS
</h1>

`@nasts/core` is a TypeScript package built on top of the popular Express web framework. It provides a lightweight and flexible approach to building web applications by extending the capabilities of Express with a set of tools and utilities that make it easy to handle requests, manage routes, and integrate with other libraries and frameworks.

With `@nasts/core`, you can quickly set up your project and get started with TypeScript. The package includes a number of useful features and tools that can help you streamline your development process and improve the performance of your application. While still a work in progress, @nasts/core is constantly evolving and improving, with new features and updates being added regularly.

We welcome any feedback or contributions from the community, and we hope that you find this package useful in your own projects.

## Installation

Install `@nasts/core` with npm into your project directory:

```bash
npm i @nasts/core
```

Use in root of project like so:

```typescript
import { App } from '@nasts/core';

const app = new App();
app.start();
```

Please see the documentation for details on how to make use of controllers, middleware, and other configurations.

## Authors

- [@oliver-richman](https://www.github.com/oliver-richman) - Creator

## Contributing

Contributions are more than welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.
