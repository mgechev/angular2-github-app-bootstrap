/// <reference path="../../../typings/tsd.d.ts" />
import {UserDetails} from '../../components/user-details/UserDetails';

@Component({
})
@View({
})
export class Home {
  cache:any;
  loading:boolean;
  selectedUser:any;
  constructor() {
    this.cache = {};
    this.selectedUser = null;
  }
  private getUser(u:string) {
  }
  selectUser(user:string) {
    this.selectedUser = null;
    this.loading = true;
    this.getUser(user)
      .then((u) => {
        console.log(u);
        this.selectedUser = u;
        this.loading = false;
      });
  }
}