import { Component, Input, HostListener } from '@angular/core';
import * as SocialService from './social-share.service';
import { SocialShareComponent } from './social-share.component';

export abstract class ShareButtonBase {

    constructor() { }

    abstract share();

    protected _colorHolder: string;
    @HostListener('mouseenter') onMouseEnter() {
        let color = this.hoverColor;
        this._colorHolder = color ? color : this.info.hoverColor;
    }
    @HostListener('mouseleave') onMouseLeave() {
        this._colorHolder = this.color;
    }

    protected _url: string;
    @Input() get url() {
        return this._url ? this._url : this.parent.url;
    }

    set url(url: string) {
        this._url = url;
    }

    protected _color: string;
    @Input() set color(c: string) {
        this._color = c;
    }

    get color() {
        return this._color ? this._color : this.parent.color;
    }

    protected _hoverColor: string;
    @Input() set hoverColor(c: string) {
        this._hoverColor = c;
    }
    get hoverColor() {
        return this._hoverColor ? this._hoverColor : this.parent.hoverColor;
    }

    protected _title: string;
    @Input() get title() {
        return this._title ? this._title : this.parent.title;
    }
    set title(t: string) {
        this._title = t;
    }

    protected _summary: string;
    @Input() get summary() {
        return this._summary ? this._summary : this.parent.summary;
    }
    set summary(s: string) {
        this._summary = s;
    }

    protected _img: string;
    @Input() get img() {
        return this._img ? this._img : this.parent.summary;
    }
    set img(img: string) {
        this._img = img;
    }

    @Input() origin: string;
    @Input() key: string;
    _social: SocialService.SSS;
    @Input() get social() {
        return this._social;
    }
    set social(s: SocialService.SSS) {
        this._social = s;
        this.info = SocialService.QuerySocialService(s);
        if (!this.info) {
            console.log(`${this.social} is unsupported social service.`)
        }
    }

    parent: SocialShareComponent;
    protected info: SocialService.SocialInfo;
}
