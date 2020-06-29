export class HandleRequestModel {
  user1: number;
  user2: number;
  accepted: boolean;

  constructor(user1: number, user2: number, accepted: boolean) {
    this.user1 = user1;
    this.user2 = user2;
    this.accepted = accepted;
  }
}
