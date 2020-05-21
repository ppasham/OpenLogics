import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';

import { AssetsPipe} from '../pipes/resourcesPipe';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ AssetsPipe ],
  exports:      [ AssetsPipe ],
  providers: [{ provide: APP_BASE_HREF, useValue: window.location.href || '/' }],
})
export class SharedModule { }
