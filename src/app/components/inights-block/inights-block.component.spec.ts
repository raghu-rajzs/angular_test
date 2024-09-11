import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InightsBlockComponent } from './inights-block.component';

describe('InightsBlockComponent', () => {
  let component: InightsBlockComponent;
  let fixture: ComponentFixture<InightsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InightsBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InightsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
