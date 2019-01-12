import { Directive, OnDestroy, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[custom-tooltip]'
})
export class TooltipDirective implements OnDestroy {
  @Input() tooltipInfo: string = "";

  @HostListener('document:keydown.escape', ['$event'])
  onkeydownHandler(event: KeyboardEvent) {
    console.log(event);
  }
  @HostListener('mouseenter')
  onMouseEnter(): void {
    // console.log('mouseenter');
  }

  @HostListener('click', ['$event'])
  onClick(event: any) {
    console.log(event);
  }

  ngOnDestroy(): void {
    // console.log('destroid')
  }
  // @HostListener('window:resize')
  // onWindowResize(): void {
  //   console.log('resized')
  // }
  constructor() { }

}
