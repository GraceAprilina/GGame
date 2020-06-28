import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPlayComponent } from './modal-play.component';

describe('ModalPlayComponent', () => {
  let component: ModalPlayComponent;
  let fixture: ComponentFixture<ModalPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
