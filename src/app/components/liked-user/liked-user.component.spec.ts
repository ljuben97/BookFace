import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedUserComponent } from './liked-user.component';

describe('LikedUserComponent', () => {
  let component: LikedUserComponent;
  let fixture: ComponentFixture<LikedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
