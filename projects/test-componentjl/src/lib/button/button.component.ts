import { Component, EventEmitter, Input, Output } from '@angular/core';
import { classNames } from '../classname';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'success';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonTarget = '_blank' | '_self' | '_parent' | '_top';

@Component({
  selector: 'jl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class JLButtonComponent {
  @Input() block = false;
  @Input() disabled = false;
  @Input() href = '';
  @Input() rel = '';
  @Input() target?: ButtonTarget;
  @Input() size: ButtonSize = 'sm';
  @Input() type: ButtonType = 'primary';
  @Output() click? = new EventEmitter();

  /**
   * @ignore
   */
  private prefixClass = 'jl-button';

  getClasses(): string {
    return classNames(this.prefixClass, {
      [`${this.prefixClass}--block`]: this.block,
      [`${this.prefixClass}--disabled`]: this.disabled,
      [`${this.prefixClass}--${this.size}`]: this.size,
      [`${this.prefixClass}--${this.type}`]: this.type,
    });
  }

  handleClick() {
    this.click && this.click.emit();
  }
}
