import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jl-test-componentjl',
  template: `
    <p>
      test-componentjl works!
      <input type="button" class="button" value="Boton de prueba" />
    </p>
  `,
  styles: [
    `
    .button {
      background-color: #4CAF50; /* Green */
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
    }
    `
  ]
})
export class TestComponentjlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
