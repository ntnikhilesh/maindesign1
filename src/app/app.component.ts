import { Component } from '@angular/core';
import {Weg} from './models/weg';

const WEG: Weg[] = [
  { img:'http://vegetablebag.com/wp-content/uploads/2016/08/thor.png', name: 'Banana Steam' },
  { img:'https://3.imimg.com/data3/NV/FC/MY-10077549/fresh-red-pumpkin-500x500.jpg', name: 'Red Pumpkin' },
  { img:'http://vegetablebag.com/wp-content/uploads/2016/08/thor.png', name: 'Banana Steam' },
  { img:'https://3.imimg.com/data3/NV/FC/MY-10077549/fresh-red-pumpkin-500x500.jpg', name: 'Red Pumpkin' },
  { img:'http://vegetablebag.com/wp-content/uploads/2016/08/thor.png', name: 'Banana Steam' },
  { img:'https://3.imimg.com/data3/NV/FC/MY-10077549/fresh-red-pumpkin-500x500.jpg', name: 'Red Pumpkin' },
  { img:'http://vegetablebag.com/wp-content/uploads/2016/08/thor.png', name: 'Banana Steam' },
  { img:'https://3.imimg.com/data3/NV/FC/MY-10077549/fresh-red-pumpkin-500x500.jpg', name: 'Red Pumpkin' }

  
];


@Component({
  selector: 'app-root',
  templateUrl: './app.ecomponent.html',
  styleUrls: ['./app.ecomponent.css']
})
export class AppComponent {
  title = 'Hello Ravi';
weg = WEG;

}
