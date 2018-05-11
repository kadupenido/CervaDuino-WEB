import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrassagemManualComponent } from './brassagem-manual.component';

describe('BrassagemManualComponent', () => {
  let component: BrassagemManualComponent;
  let fixture: ComponentFixture<BrassagemManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrassagemManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrassagemManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
