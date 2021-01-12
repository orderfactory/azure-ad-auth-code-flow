import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoSomethingComponent } from './do-something.component';

describe('DoSomethingComponent', () => {
  let component: DoSomethingComponent;
  let fixture: ComponentFixture<DoSomethingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoSomethingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoSomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
