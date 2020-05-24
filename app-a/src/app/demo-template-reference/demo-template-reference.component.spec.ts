import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTemplateReferenceComponent } from './demo-template-reference.component';

describe('DemoTemplateReferenceComponent', () => {
  let component: DemoTemplateReferenceComponent;
  let fixture: ComponentFixture<DemoTemplateReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTemplateReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTemplateReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
