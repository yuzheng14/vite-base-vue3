# Vite Base Vue3

This template should help get you started developing with Vue 3 in Vite, husky, lint-staged, eslint, prettier, commitlint and web-vitals.

<details>
  <summary>contents</summary>

- [Usage](#usage)
- [Note](#note)
  - [no-var](#no-var)
  - [no-console](#no-console)
  - [other](#other)

</details>

## Usage

Clone this repo into disk.

```shell
git clone git@github.com:yuzheng14/vite-base-vue3.git <your-project-name>
```

Rename remote (optional).

```shell
git remote rename origin base
```

Add your remote.

```shell
git remote add origin <your-remote-address>
```

If you want to pull the newest config of this repo, run this instruction.

```shell
git pull --rebase base main
```

## Note

### no-var

This config can't use `var`, you can use `const ` and `let` instead of it.

### no-console

This config can't use methods on `console`, if you really need it, please write it wrapped by runInDev() in the `src/utils/console.js`.

### other

If you have some exceptions, please write `overrides` of `.eslintrc.json`.
