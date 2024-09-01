import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopServiceComponent } from './laptop-service.component';

describe('LaptopServiceComponent', () => {
  let component: LaptopServiceComponent;
  let fixture: ComponentFixture<LaptopServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaptopServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
