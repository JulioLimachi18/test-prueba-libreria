import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestComponentjlModule } from 'test-componentjl';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestComponentjlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
