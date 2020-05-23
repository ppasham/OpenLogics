import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AssetsPipe } from './framework/pipes/resources.pipe';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ AssetsPipe ],
  exports:      [ AssetsPipe ],
  providers: [{ provide: APP_BASE_HREF, useValue: window.location.href || '/' }]
})
export class SharedModule { }
