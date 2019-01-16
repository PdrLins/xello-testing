import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent implements OnInit {
  tooltipActioOne:string = "Action one!";
  tooltipActioTwo:string ="Action two!";
  constructor() { }
  ngOnInit() {
  
  }
 

}
