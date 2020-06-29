import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedFriendRequestsComponent } from './received-friend-requests.component';

describe('ReceivedFriendRequestsComponent', () => {
  let component: ReceivedFriendRequestsComponent;
  let fixture: ComponentFixture<ReceivedFriendRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedFriendRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedFriendRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
