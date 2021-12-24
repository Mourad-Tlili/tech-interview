import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAoiComponent } from './public-aoi.component';

describe('PublicAoiComponent', () => {
  let component: PublicAoiComponent;
  let fixture: ComponentFixture<PublicAoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicAoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
