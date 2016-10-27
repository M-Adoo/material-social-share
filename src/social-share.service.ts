export interface SocialInfo {
    //The property *icon*, hold the icon class name in custom
    icon: string;

    // function linkTo format the target social share url from parmas. 
    linkTo: (title: string
        , url: string
        , summary?: string
        , img?: string
        , origin?: string
        , key?: string) => string;
}


//SocialServiceSupported
export type SocialServiceSupported
    = 'weibo' | 'twitter'
    | 'qq' | 'qzone' | 'douban' | 'diandian' | 'facebook'
    | 'google-plus' | 'linkedin';
export type SSS = SocialServiceSupported;

let crate: { [key: string]: SocialInfo } = {};


export function QuerySocialService(social: SSS): SocialInfo {
    let registerGetSocial = (socialKey: SSS, socialClass): SocialInfo => {
        if (!(socialKey in crate)) {
            crate[socialKey] = new socialClass();
        }
        return crate[socialKey];
    }

    switch (social) {
        case 'weibo': {
            return registerGetSocial('weibo', WeiboShare);
        }
        case 'twitter':
            return registerGetSocial('twitter', TwitterShare);
        case 'qq':
            return registerGetSocial('qq', QQShare);
        case 'qzone':
            return registerGetSocial('qzone', QzoneShare);
        case 'douban':
            return registerGetSocial('douban', DoubanShare);
        case 'diandian':
            return registerGetSocial('diandian', DiandianShare);
        case 'facebook':
            return registerGetSocial('facebook', FacebookShare);
        case 'google-plus':
            return registerGetSocial('google-plus', GoogleShare);
        case 'linkedin':
            return registerGetSocial('linkedin', LinkedinShare);
        default:
            return null;
    }
}

function ignoreEmpty(key: string, v: string, prefix = '&'): string {
    return v ? `${prefix}${key}=${v}` : '';
}

class WeiboShare implements SocialInfo {
    icon = 'social-weibo';
    linkTo = (title: string
        , url: string
        , summary?: string
        , img?: string
        , origin?: string
        , key?: string): string => {
        let text = `[${title}]${summary ? summary : ''}`
        return `http://service.weibo.com/share/share.php?url=${url}&title=${text}${img ? `&pic=${img}` : ''}${key ? `&appkey=${key}` : ''}`;
    };
}

class TwitterShare implements SocialInfo {
    icon = 'social-twitter'
    linkTo = (title: string
        , url: string
        , summary?: string
        , img?: string
        , origin?: string
        , key?: string): string => {
        let text = `[${title}]${summary ? summary : ''}`
        return `https://twitter.com/intent/tweet?text=${text}&url=${url}${origin ? `&via=${origin}` : ''}`;
    }
}

class QQShare implements SocialInfo {
    icon = 'social-qq';
    linkTo = (title: string
        , url: string
        , summary?: string
        , img?: string
        , origin?: string
        , key?: string): string => {

        return `http://connect.qq.com/widget/shareqq/index.html?url=${url}
        &title=${title}${origin ? `&source=${origin}` : ''}${summary ? `&desc=${summary}` : ''}${img ? `&pics=${img}` : ''}`
    }
}

class QzoneShare implements SocialInfo {
    icon = 'social-qzone';
    linkTo = (title: string
        , url: string
        , summary?: string
        , img?: string
        , origin?: string
        , key?: string): string => {
        return `http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?=${url}
        &title=${title}${origin ? `&source=${origin}` : ''}${summary ? `&desc=${summary}` : ''}${img ? `&pics=${img}` : ''}`
    }
}

class DoubanShare implements SocialInfo {
    icon = 'social-douban';
    linkTo = (title: string
        , url: string
        , summary?: string
        , img?: string
        , origin?: string
        , key?: string): string => {

        return `http://shuo.douban.com/!service/share?href=${url}&name=${title}
        ${ignoreEmpty('text', summary)}${ignoreEmpty('image', img)}&starid=0&aid=0&style=11`;
    }
}

class DiandianShare implements SocialInfo {
    icon = 'social-diandian';
    linkTo = (title: string
        , url: string
        , summary?: string
        , img?: string
        , origin?: string
        , key?: string): string => {

        let text = `[${title}]${summary ? summary : ''}`
        return `http://www.diandian.com/share?lo=${url}&ti=${text}&type=link`
    }
}

class FacebookShare implements SocialInfo {
    icon = 'social-facebook';
    linkTo = (title: string
        , url: string
        , summary?: string
        , img?: string
        , origin?: string
        , key?: string): string => {

        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    }
}

class GoogleShare implements SocialInfo {
    icon = 'social-gplus';
    linkTo = (title: string
        , url: string
        , summary?: string
        , img?: string
        , origin?: string
        , key?: string): string => {

        return `https://plus.google.com/share?url=${url}`;
    }
}

class LinkedinShare implements SocialInfo {
    icon = 'social-linkedin-squared';
    linkTo = (title: string
        , url: string
        , summary?: string
        , img?: string
        , origin?: string
        , key?: string): string => {

        return `http://www.linkedin.com/shareArticle?mini=true&ro=true&title=${title}&url=${url}
        ${ignoreEmpty('summary', summary)}${ignoreEmpty('source', origin)}&armin=armin`
    }
}

//todo:
const templates = {
    //qrcode for webchat

    // i think needn't
    tencent: 'http://share.v.t.qq.com/index.php?c=share&a=index&title={{TITLE}}&url={{URL}}&pic={{IMAGE}}',

};