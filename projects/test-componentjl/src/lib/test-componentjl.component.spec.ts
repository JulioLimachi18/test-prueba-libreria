import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentjlComponent } from './test-componentjl.component';

describe('TestComponentjlComponent', () => {
  let component: TestComponentjlComponent;
  let fixture: ComponentFixture<TestComponentjlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponentjlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentjlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
