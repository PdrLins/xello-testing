import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'custom-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements AfterViewInit {
  @Input() title: string;
  @Input() ref: any;

  ngAfterViewInit(): void {
    // console.log('afterviewinit');
  }


  constructor() { }

}
