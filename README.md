# vite-plugin-sri

## forked from [@small-tech/vite-plugin-sri](https://github.com/small-tech/vite-plugin-sr) & [JonathanLee-LX/vite-plugin-sri](https://github.com/JonathanLee-LX/vite-plugin-sri)

**@small-tech/vite-plugin-sri** generates the integrity value in the transformIndexHtml hook, and if **dynamic imports** are used in the code, the correct integrity cannot be generated. This plugin is designed to solve this problem.



[Subresource integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) (SRI) plugin for [Vite](https://vitejs.dev/).

Adds subresource integrity hashes to script and stylesheet imports from your _index.html_ file at build time.

## Use

In your `vite.config.js` file:

```js
import { defineConfig } from 'vite'
import sri from '@minato1123/vite-plugin-sri'

export default defineConfig({
  // …
  plugins: [
    sri({ hashFunc: 'sha384' }) // sha256, sha512
  ]
})
```

### Problem
```ts
// vite.config.ts

type 'Plugin_2' 'Plugin' is not assignable to type 'PluginOption'.
```
* Solution Reference [here](https://github.com/vitejs/vite/issues/13027)
```json
// tsconfig.json

{
  "compilerOptions": {
    // ...
    "paths": {
      "vite": ["./node_modules/vite"]
    }
  }
}
```


## Test and coverage

Run `pnpm test` to test, `pnpm coverage` to run coverage.

## Build

Run `pnpm build`

This will generate legacy CommonJS version of the module for compatibility with older Node projects.

## See also

If you’re looking for a generic Rollup plugin that does the same thing, see [rollup-plugin-sri](https://github.com/JonasKruckenberg/rollup-plugin-sri) by [Jonas Kruckenberg](https://github.com/JonasKruckenberg) that this one was inspired by.

## Like this? Fund us!

[Small Technology Foundation](https://small-tech.org) is a tiny, independent not-for-profit.

We exist in part thanks to patronage by people like you. If you share [our vision](https://small-tech.org/about/#small-technology) and want to support our work, please [become a patron or donate to us](https://small-tech.org/fund-us) today and help us continue to exist.

## Copyright

Copyright &copy; 2021-present [Aral Balkan](https://ar.al), [Small Technology Foundation](https://small-tech.org).

## License

[ISC](./LICENSE).
