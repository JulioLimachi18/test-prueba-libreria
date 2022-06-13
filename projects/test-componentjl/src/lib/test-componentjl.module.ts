import { NgModule } from '@angular/core';
import { TestComponentjlComponent } from './test-componentjl.component';
import { JLCardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { JLButtonComponent } from './button/button.component';

const components = [TestComponentjlComponent, JLCardComponent,JLButtonComponent];

@NgModule({
  declarations: [...components, ],
  imports: [CommonModule],
  exports: [...components],
})
export class TestComponentjlModule {}
