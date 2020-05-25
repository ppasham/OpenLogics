import { APP_BASE_HREF } from '@angular/common';
import { Inject, Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'assetspipe'
  })
  export class AssetsPipe implements PipeTransform {
        baseUrl: string;
        constructor(@Inject(APP_BASE_HREF) baseHref: string) {
          this.baseUrl = baseHref;
        }
        transform(value: string) {
          const newval = this.baseUrl + value;
          return newval;
        }
  }
