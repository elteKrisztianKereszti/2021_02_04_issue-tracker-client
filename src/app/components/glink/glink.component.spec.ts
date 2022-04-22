import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlinkComponent } from './glink.component';

describe('GlinkComponent', () => {
  let component: GlinkComponent;
  let fixture: ComponentFixture<GlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
