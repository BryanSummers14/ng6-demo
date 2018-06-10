import { NgModule } from '@angular/core';
import { DemoCardComponent } from './demo-lib.component';
import { DemoCardLoadingComponent } from './demo-lib-loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    BrowserAnimationsModule
  ],
  declarations: [DemoCardComponent, DemoCardLoadingComponent],
  exports: [DemoCardComponent, DemoCardLoadingComponent]
})
export class DemoLibModule { }
