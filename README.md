# Getting Started
Create first doc:
```sh
$ mkdir docs && echo '# Hello VitePress' > docs/index.md
```
Add some scripts to `package.json`.
```js
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
}
```
Finally run dev:
```sh
$ npm run docs:dev
```
# Configuration
create a .vitepress directory inside your docs directory. This is where all VitePress-specific files will be placed. Your project structure is probably like this:
```sh
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
└─ package.json
```

# References
(Getting Started)[https://vitepress.vuejs.org/guide/getting-started.html]