import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionApiComponent } from './peticion-api.component';

describe('PeticionApiComponent', () => {
  let component: PeticionApiComponent;
  let fixture: ComponentFixture<PeticionApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeticionApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
