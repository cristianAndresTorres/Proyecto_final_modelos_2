import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilasColumnasComponent } from './filas-columnas.component';

describe('FilasColumnasComponent', () => {
  let component: FilasColumnasComponent;
  let fixture: ComponentFixture<FilasColumnasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilasColumnasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilasColumnasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
