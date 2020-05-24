import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHeroListComponent } from './demo-hero-list.component';

describe('DemoHeroListComponent', () => {
  let component: DemoHeroListComponent;
  let fixture: ComponentFixture<DemoHeroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoHeroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoHeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
