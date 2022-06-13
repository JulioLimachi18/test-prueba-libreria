import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { classNames } from '../classname';

@Component({
  selector: 'jl-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class JLCardComponent  {

  @Input() title = '';
  @Input() subtitle = '';
  @Output() click? = new EventEmitter();

  private prefixClass = 'jl-card';

  getClasses(): string {
    return classNames(this.prefixClass);
  }

  handleClick() {
    this.click && this.click.emit();
  }


}
