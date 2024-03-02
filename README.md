# Turning-Brown-Real-Estate-Green
PVK project 

## Table of Contents
1. [First time installation](#första-gångs-installation)
   - [Node Installation](#node-installation)
   - [Windows](#windows)
   - [Mac/Linux](#maclinux)

## Första gångs installation
### Node installation
För att installera och köra frontend för första gången, se till att du har Node installerat på din dator. Gör detta genom att köra följande kommando i terminalen:

```npm version```

Om du får ett output som ser ut som detta så har du Node installerat:

```shell
{
  npm: '10.1.0',
  node: '20.8.0',
  acorn: '8.10.0',
  ada: '2.6.0',
  ares: '1.19.1',
  base64: '0.5.0',
  brotli: '1.0.9',
  cjs_module_lexer: '1.2.2',
  cldr: '43.1',
  icu: '73.2',
  llhttp: '8.1.1',
  modules: '115',
  napi: '9',
  nghttp2: '1.56.0',
  nghttp3: '0.7.0',
  ngtcp2: '0.8.1',
  openssl: '3.0.10+quic',
  simdutf: '3.2.17',
  tz: '2023c',
  undici: '5.25.2',
  unicode: '15.0',
  uv: '1.46.0',
  uvwasi: '0.0.18',
  v8: '11.3.244.8-node.16',
  zlib: '1.2.13.1-motley'
}
```
Om du inte har Node installerat kan du installera det här: [nodejs.org](https://nodejs.org/en/download). Se till att installera det för ditt operativsystem.

Efter att du har kontrollerat att du har Node installerat på din dator så följer du guiden för ditt operativsystem nedan.
### Windows
För att installera rätt paket och köra frontenden på en Windows dator så räcker det med att du kör filen ```FirstTimeStart.bat``` i en terminal eller från utforskaren.

För att köra den från terminalen så skriver du följande två kommandon:

```cd C:\[Path till korrekt map]\Turning-Brown-Real-Estate-Green```
> Kom ihåg att byta ut ```[Path till korrekt map]``` mot den riktiga pathen.

Därefter kör du:

```FirstTimeStart.bat```

När du ser detta i terminalen så har scriptet kört färdigt och du kan därmed komma åt webbsidan på [denna länk](http://localhost:3000/)

```shell
Compiled successfully!

You can now view my-project in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.86.58:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```
### Mac/Linux
För att installera rätt paket och köra frontenden på en Windows dator så räcker det med att du kör filen ```FirstTimeStart.sh``` i en terminal eller från utforskaren.

För att köra den från terminalen så skriver du följande två kommandon:

```cd C:\[Path till korrekt map]\Turning-Brown-Real-Estate-Green```
> Kom ihåg att byta ut ```[Path till korrekt map]``` mot den riktiga pathen.

Därefter kör du:

```./FirstTimeStart.sh```

När du ser detta i terminalen så har scriptet kört färdigt och du kan därmed komma åt webbsidan på [denna länk](http://localhost:3000/)

```shell
Compiled successfully!

You can now view my-project in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.86.58:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```
