# Dependency notes

Notes about dependency management in the project.
Gather all useful information related to upgrading packages here.

<br>

<h2> Table of contents:</h2>

-   [1. @pmmmwh/react-refresh-webpack-plugin](#1-pmmmwhreact-refresh-webpack-plugin)

<br>
<br>

## 1. [@pmmmwh/react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin)

Uses [core-js-pure](https://www.npmjs.com/package/core-js-pure/v/3.21.0) under the hood.
This package is deprecated and no longer maintained. It is unknown how [@pmmmwh/react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin) intend to deal with it as of 18.12.2025.

For this reason, as well as not knowing the exact purpose of `core-js-pure` postinstall script, it has intentionally been left out of pnpm approved builds.
This package is deprecated and no longer maintained. It is unknown how [@pmmmwh/react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin) intend to deal with it as of 18.12.2025.
TODO: Perhaps there is an alternative fast-refresh plugin?
