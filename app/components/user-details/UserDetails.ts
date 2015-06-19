import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'user-details',
  properties: ['user']
})
@View({
  templateUrl: './components/user-details/user-details.html?v=<% VERSION %>'
})
export class UserDetails {
  user:any;
  constructor() {
    console.log(this);
  }
}
