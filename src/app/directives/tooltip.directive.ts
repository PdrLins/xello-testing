import { Directive, OnDestroy,
         OnInit, 
         Input, Output, HostListener, 
         ElementRef, Type,
         EventEmitter,
         ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { TooltipComponent } from './tooltip/tooltip.component';

@Directive({
  selector: '[custom-tooltip]'
})

export class TooltipDirective implements OnDestroy, OnInit {

  @Input('custom-tooltip') content:  Type<any>;
  @Input('tooltipInfo') tooltipInfo:string;

  @Output() public outsideClick = new EventEmitter(); 
  private componentRef: any;

  constructor(private _element: ElementRef,
    private resolver: ComponentFactoryResolver,
    private vContainRef: ViewContainerRef
  ) {

  }
  ngOnInit(): void {
    this.createComponent();
  }

  showHidden() {
    this.componentRef.instance.hidden = !this.componentRef.instance.hidden;
   this.positionTooltip();
  }

  positionTooltip(){
    this.componentRef.instance.lpx = this._element.nativeElement.offsetLeft + 10;
    this.componentRef.instance.tpx = (this._element.nativeElement.offsetTop - this._element.nativeElement.offsetHeight) - 2;
  }

  hidden() {
    this.componentRef.instance.hidden = true;
  }

  @HostListener('window:resize',['$event'])
  resize(){
    this.positionTooltip();
  }

  @HostListener('click', ['$event'])
  mouseClick(event) {
    this.showHidden();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.hidden();
  }

  @HostListener('document:click', ['$event'])
  documentClick(event) {
    const clickedInside = this._element.nativeElement.contains(event.target);
        if (!clickedInside) {
           this.hidden();
        }
  }

  createComponent() {
    this.vContainRef.clear();
    const factory = this.resolver.resolveComponentFactory(TooltipComponent);
    this.componentRef = this.vContainRef.createComponent(factory);
    this.componentRef.instance.tooltipInfo = this.tooltipInfo;
  }

  ngOnDestroy(): void {
    this.componentRef.destroy();
  }
}
