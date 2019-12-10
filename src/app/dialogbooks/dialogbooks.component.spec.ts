import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogbooksComponent } from './dialogbooks.component';

describe('DialogbooksComponent', () => {
  let component: DialogbooksComponent;
  let fixture: ComponentFixture<DialogbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
