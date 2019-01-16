import { Directive, OnDestroy, AfterViewInit, OnInit , Input, HostListener, ElementRef, TemplateRef, Type, Renderer2, Injector, ComponentFactoryResolver, ViewContainerRef, ReflectiveInjector } from '@angular/core';
import { ComponentRef } from '@angular/core/src/render3';
import { TooltipComponent } from './tooltip/tooltip.component';

@Directive({
  selector: '[custom-tooltip]'
})

export class TooltipDirective implements OnDestroy, AfterViewInit, OnInit  {
 
  @Input('custom-tooltip') content: string | TemplateRef<any> | Type<any>;
  // @Input('custom-tooltip-hidden') hidden:boolean;
  private componentRef: any;

  constructor(private el: ElementRef,
    private renderer: Renderer2,
    private injector: Injector,
    private resolver: ComponentFactoryResolver,
    private vContainRef: ViewContainerRef
  ) {
    let a = 'b';

  }
  ngOnInit(): void {
    this.createComponent();
  }

  showHidden(){
    this.componentRef.instance.hidden = !this.componentRef.instance.hidden;
  }

  hidden(){
    this.componentRef.instance.hidden = true;
  }

  @HostListener('click',['$event'])
  mouseClick(event){
    this.showHidden();
  }

  @HostListener('document:keydown.escape',['$event'])
  onKeydownHandler(event: KeyboardEvent){
    this.hidden();
  }

  createComponent(){
    this.vContainRef.clear();
    const factory =   this.resolver.resolveComponentFactory(TooltipComponent);
    this.componentRef = this.vContainRef.createComponent(factory);
    this.componentRef.instance.tooltipInfo = "novo texto krai";
  }
//   this.render.listen('window', 'load', () => {
//     const rect = this.el.nativeElement.getBoundingClientRect().top;
// })
  // createCustomToolTip() {
  //   const span = this.renderer.createElement('span');
  //   const text = this.renderer.createText('Tooltip text');
  //   this.renderer.addClass(span, 'ct-tooltiptext');
  //   this.renderer.setAttribute(span, 'visibility', 'visible');
  //   this.renderer.appendChild(span, text);
  //   this.renderer.appendChild(this.el.nativeElement, span);
  // }

  ngAfterViewInit(): void {
    // this.createComponent();
  }

  // @HostListener('mouseenter')
  // mouseenter() {
  //   if (this.componentRef) return;
  //   const factory = this.resolver.resolveComponentFactory(TooltipComponent);
  //   const injector = ReflectiveInjector.resolveAndCreate([
  //     {
  //       provide: 'tooltipConfig',
  //       useValue: {
  //         host: this.element.nativeElement
  //       }
  //     }
  //   ]);
  //   // this.componentRef = this.vContainRef.createComponent(factory, 0, injector, this.generateNgContent());
  // }

  // generateNgContent() {
  //   if (typeof this.content === 'string') {
  //     const element = this.renderer.createText(this.content);
  //     return [[element]];
  //   }
  // }

  ngOnDestroy(): void {
    this.componentRef.destroy();
  }
}
