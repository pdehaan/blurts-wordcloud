# blurts-wordcloud

Scans the specified email using the HIBP API and calculates the data class frequency.

## Usage

```sh
npx @pdehaan/blurts-wordcloud test@linkedin.com
```

### Output

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
