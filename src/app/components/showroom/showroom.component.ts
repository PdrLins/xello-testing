import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent implements OnInit {
  tooltipActioA:string = "You clicked on action A";
  tooltipActioB:string ="You clicked on action B";
  lpx:number=0;
  tpx:number=0;
  constructor() { }

  ngOnInit() {
    
  }
}
