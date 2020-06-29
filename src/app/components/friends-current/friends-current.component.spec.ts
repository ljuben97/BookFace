import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsCurrentComponent } from './friends-current.component';

describe('FriendsCurrentComponent', () => {
  let component: FriendsCurrentComponent;
  let fixture: ComponentFixture<FriendsCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
