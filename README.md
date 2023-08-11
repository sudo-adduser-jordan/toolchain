# Toolchain

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?)](https://github.com/RichardLitt/standard-readme)

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)


## Background

A single page react application utilizing esbuild as the build tool and development server.

Configured with Typescript, EsLint, and Prettier.

Currently this application is configured to build a basic React application. More features will be added in the future.

## Install

Download zip or run

```
git clone https://github.com/sudo-adduser-jordan/Toolchain
```

## Usage

### Getting Started

First, run the development server:

```
cd Toolchain
```

```
npm install
```

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `App.tsx`.

This tool does not use HMR and does a full reload on save. This is beneficial as HMR may require a full reload anyway depending on what has been edited. Since esbuild is programed in GO the speed of your reloads will not be any slower than a javascript HMR server.
