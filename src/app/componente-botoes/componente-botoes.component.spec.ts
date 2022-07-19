import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteBotoesComponent } from './componente-botoes.component';

describe('ComponenteBotoesComponent', () => {
  let component: ComponenteBotoesComponent;
  let fixture: ComponentFixture<ComponenteBotoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteBotoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteBotoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
