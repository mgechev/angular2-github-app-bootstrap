/// <reference path="../../../typings/tsd.d.ts" />

@Component({
})
@View({
})
export class Home {
  cache:any;
  loading:boolean;
  selectedUser:any;
  constructor() {
    this.users = [];
    this.cache = {};
    this.selectedUser = null;
  }
  addUser(currentUser) {
  }
  removeUser(user) {
  }
  private getUser(u:string) {
    if (this.cache[u]) {
      return Promise.resolve(this.cache[u]);
    } else {
      return fetch(`https://api.github.com/users/${u}`)
        .then(r => {
          return r.json();
        })
        .then(user => {
          this.cache[u] = user;
          return user;
        });
    }
  }
}