<p
	align="center"
>
	<img
		width="150"
		height="150"
		src="https://github.com/nas-ts/nasts-core/blob/master/readme_assets/logo.png?raw=true"
		style="vertical-align: middle;"
	>
	<div style="display: flex; flex-direction: column;">
	<p align="center" style="font-weight: bold; font-size: 42px; margin: 0">
		nasts
	</p>
	<p align="center" style="margin: 0;">
		Strong typing. Strong backend.
	</p>
	</div>
</p>

---

<br />

<div align="center" style="display:flex;flex-wrap:wrap;justify-content:center;">

  <img style="padding: 5px;" alt="npm (scoped)" src="https://img.shields.io/npm/v/@nasts/core?style=plastic">

  <img style="padding: 5px;" alt="npm bundle size (scoped)" src="https://img.shields.io/bundlephobia/min/@nasts/core?style=plastic">

  <img style="padding: 5px;" alt="NPM" src="https://img.shields.io/npm/l/@nasts/core?style=plastic">

  <img style="padding: 5px;" alt="npm" src="https://img.shields.io/npm/dt/@nasts/core?style=plastic">

  <img style="padding: 5px;" alt="Libraries.io dependency status for latest release, scoped npm package" src="https://img.shields.io/librariesio/release/npm/@nasts/core?style=plastic">

</div>

<br />

`@nasts/core` is a TypeScript package built on top of the popular Express web framework. It provides a lightweight and flexible approach to building web applications by extending the capabilities of Express with a set of tools and utilities that make it easy to handle requests, manage routes, and integrate with other libraries and frameworks.

With `@nasts/core`, you can quickly set up your project and get started with TypeScript. The package includes a number of useful features and tools that can help you streamline your development process and improve the performance of your application. While still a work in progress, `@nasts/core` is constantly evolving and improving, with new features and updates being added regularly.

We welcome any feedback or contributions from the community, and we hope that you find this package useful in your own projects.

<br />

## Installation

### Using the CLI

nasts has a handy CLI you can use to quickly set up a project with everything you need to get started, it's recommended that you do this, you can find out more here:

### [@nasts/cli](https://www.npmjs.com/package/@nasts/cli)

<br />

### Using manually

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

<br />

## Authors

- [@oliver-richman](https://www.github.com/oliver-richman) - Creator

<br />

## Contributing

Contributions are more than welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.
