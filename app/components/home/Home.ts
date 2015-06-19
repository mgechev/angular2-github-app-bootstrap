/// <reference path="../../../typings/tsd.d.ts" />
import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import {UserDetails} from '../../components/user-details/UserDetails';

@Component({
  selector: 'home'
})
@View({
  templateUrl: './components/home/home.html?v=<%= VERSION %>',
  directives: [NgFor, NgIf, UserDetails]
})
export class Home {
  users:string[];
  cache:any;
  loading:boolean;
  selectedUser:any;
  constructor() {
    this.users = [];
    this.cache = {};
    this.selectedUser = null;
  }
  addUser(currentUser) {
    this.users.push(currentUser);
  }
  removeUser(user) {
    if (this.selectedUser && this.selectedUser.login === user) {
      this.selectedUser = null;
    }
    this.users.splice(this.users.indexOf(user), 1);
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