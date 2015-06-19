import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'user-details'
})
@View({
  templateUrl: './components/user-details/user-details.html?v=<% VERSION %>'
})
export class UserDetails {
  user:any;
  constructor() {
  }
}
