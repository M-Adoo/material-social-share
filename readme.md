# material-social-share

[![Build Status](https://travis-ci.org/M-Adoo/material-social-share.svg?branch=master)](https://travis-ci.org/M-Adoo/material-social-share)

## Dependencies

Angular >= 4.0.0
@angular/material: >= 2.0.0-beta.8,

## install 

```
 npm i material-social-share --save

```

## Use it

import SocialShareModule in your code

*.module.ts

```ts
import { SocialShareModule } from 'material-social-share';

@NgModule({
  imports: [
    SocialShareModule,
    ...
  ]
})
```

*compolent.html
```
  <mdx-social-share></mdx-social-share>
```

## remember to bundle the social icons in your project

material-social-share use  Material icons font and some social svg icons.

social svg icon in material-social-share\assets\social.

with angular/cli just update assets field in .angular-cli.json:

```
"assets": [
      ***
      "assets",
      "favicon.ico",
      {
        "glob": "**/*",
        "input": "../node_modules/material-social-share/assets/social",
        "output": "./assets/social"
      }
      ***
    ],
```

### custom config

you can set `img`, `title`, `summary`, `url` to custom share info.


## todo

ci auto update demo