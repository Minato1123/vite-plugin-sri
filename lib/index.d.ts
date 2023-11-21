import { Plugin } from 'vite';

type VitePluginSriOptions = {
    hashFunc: 'sha256' | 'sha384' | 'sha512';
};
declare function sri(theOptions?: VitePluginSriOptions): Plugin;

export { sri as default };
