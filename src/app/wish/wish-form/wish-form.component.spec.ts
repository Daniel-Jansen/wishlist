import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishFormComponent } from './wish-form.component';

describe('WishFormComponent', () => {
  let component: WishFormComponent;
  let fixture: ComponentFixture<WishFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishFormComponent]
    });
    fixture = TestBed.createComponent(WishFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
