## install socail-share-ng2 component

```
 npm i social-share-ng2
```

## include socail-share-ng2 module and style


src/app/app.module.ts

```ts
import { SocialShareModule } from 'social-share-ng2';

@NgModule({
  imports: [
    SocialShareModule,
    ...
  ]
})
```
social-share-ng2 use font icon, we also need to load the icon font
in `index.html` or import it to `style.css`

**load in index.html**:

```html
<link href="../node_modules/social-share-ng2/social-icon/css/social-icon.css" rel="stylesheet">
```
or **import by style.css**

```scss
@improt '../node_modules/social-share-ng2/social-icon/css/social-icon.css'
``` 

## use it

use socail-share-ng2 like this:

```html
<social-share>
    <social-label>share</social-label>
    <share-button social='weibo'></share-button>
    <share-button social='qq'></share-button>
    <share-button social='qzone'></share-button>
    <share-button social='douban'></share-button>
    <share-button social='twitter'></share-button>
    <share-button social='facebook'></share-button>
    <share-button social='google-plus'></share-button>
    <share-button social='linkedin'></share-button>
</social-share>
```

socail-share-ng2 has label and button, you can display what label your like
and pick witch socail service you want.  

### custom config

you can custom config the share context or button color.

**todo**

## demo

todo

# Todo list

- [ ] test all
- [x] color config
- [ ] documents
- [ ] what's it?
- [ ] todo


# Tip

**Remember link style ./social-icon/css/socail-icon.css**