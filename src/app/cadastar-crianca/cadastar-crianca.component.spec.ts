import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastarCriancaComponent } from './cadastar-crianca.component';

describe('CadastarCriancaComponent', () => {
  let component: CadastarCriancaComponent;
  let fixture: ComponentFixture<CadastarCriancaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastarCriancaComponent]
    });
    fixture = TestBed.createComponent(CadastarCriancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
