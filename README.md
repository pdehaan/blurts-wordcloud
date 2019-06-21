# blurts-wordcloud

Scans the specified email using the [HIBP API](https://haveibeenpwned.com/API/) and calculates the data class frequency.

**NOTE:** This script only generates an array of word and frequency pairs. If you want to _graph_ the word cloud, you'll need to do something like https://codepen.io/anon/pen/pXROmy.

## Usage

### CLI

```sh
npx @pdehaan/blurts-wordcloud test@linkedin.com
```

### API

```js
// `npm i @pdehaan/blurts-wordcloud -S`
const lib = require("@pdehaan/blurts-wordcloud");

async function main() {
  const breaches = await lib.scan("test@adobe.com");
  const wordfreq = await lib.dataClassFrequency(breaches);
  console.log(JSON.stringify(wordfreq, null, 2));
}

main();
```

## Output

```js
[
  { word: 'Email addresses', freq: 5 },
  { word: 'Names', freq: 2 },
  { word: 'Phone numbers', freq: 2 },
  { word: 'Passwords', freq: 2 },
  { word: 'Employers', freq: 1 },
  { word: 'Geographic locations', freq: 1 },
  { word: 'Job titles', freq: 1 },
  { word: 'Salutations', freq: 1 },
  { word: 'Social media profiles', freq: 1 },
  { word: 'Device information', freq: 1 },
  { word: 'Physical addresses', freq: 1 },
  { word: 'Purchases', freq: 1 }
]
```
