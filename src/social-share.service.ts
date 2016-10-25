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
export type SocialServiceSupported = 'weibo' | 'twitter';
export type SSS = SocialServiceSupported;

export function QuerySocialService(social: SSS): SocialInfo {
    switch (social) {
        case 'weibo':
            return new WeiboShare();
        case 'twitter':
            return new TwitterShare();
        default:
            return null;
    }
}

class WeiboShare implements SocialInfo {
    icon = 'icon-weibo';
    linkTo = (title: string
        , url: string
        , summary?: string
        , img?: string
        , origin?: string
        , key?: string): string => {
        return `http://service.weibo.com/share/share.php?url=${url}&title=${title}${img ? `&pic=${img}` : ''}${key ? `&appkey=${key}` : ''}`;
    };
}

class TwitterShare implements SocialInfo {
    icon = 'icon-twitter'
    linkTo = (title: string
        , url: string
        , summary?: string
        , img?: string
        , origin?: string
        , key?: string): string => {
        return `https://twitter.com/intent/tweet?text=${title}&url=${url}${origin ? `&via=${origin}` : ''}`;
    }
}
//todo:
const templates = {
    qzone: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary={{SUMMARY}}&site={{SOURCE}}',
    qq: 'http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESCRIPTION}}&pics={{IMAGE}}',
    tencent: 'http://share.v.t.qq.com/index.php?c=share&a=index&title={{TITLE}}&url={{URL}}&pic={{IMAGE}}',
    douban: 'http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11',
    diandian: 'http://www.diandian.com/share?lo={{URL}}&ti={{TITLE}}&type=link',
    linkedin: 'http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin',
    facebook: 'https://www.facebook.com/sharer/sharer.php?u={{URL}}',
    google: 'https://plus.google.com/share?url={{URL}}'
    //qrcode for webchat
};
