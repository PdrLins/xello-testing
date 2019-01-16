import { Component, OnInit, Input, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'custom-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit, AfterViewInit {
  @Input()
  tooltipInfo:string;
  hidden:boolean = true;
  top: string;

  constructor() {
    // const { top } = this.config.host.getBoundingClientRect();
    // const { height } = this.tooltipDirective.nativeElement.getBoundingClientRect();
    // this.top = `${top - height}px`;
   }
   ngAfterViewInit(): void {
  }
 
  ngOnInit(): void {
  }
 
}
