import { Title, Meta } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable()
export class DefaultShareInfoService {
  private _img: string;
  private _title: string;
  private _summary: string;
  private _url: string;

  constructor(protected _dt: Title,
    private _meta: Meta) { }

  get img() {
    let imgTag = this._meta.getTag('name=image')
    return this._img || imgTag && imgTag.content;
  }

  set img(i) { this._img = i; }

  get title() {
    return this._title || this._dt.getTitle();
  }

  set title(t) { this._title = t; }

  get summary() {
    let descTag = this._meta.getTag('name=description');
    return this._summary || descTag && descTag.content;
  }

  set summary(s) { this._summary = s; }

  get url() {
    return this._url || window.location.href;;
  }

  set url(u) { this._url = u; }
} 
