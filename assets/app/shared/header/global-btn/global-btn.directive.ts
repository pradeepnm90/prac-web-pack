import { Directive, OnInit, HostListener, HostBinding, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appGlobalBtn]'
})
export class GlobalBtnDirective implements OnInit {

  constructor(public viewContainerRef: ViewContainerRef) { }

  @HostBinding("class.open") private isOpen: boolean = false;
  @HostListener("mouseenter") onMouseEnter() {
    this.isOpen = true;
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.isOpen = false;
  }
  ngOnInit() {
  }
}



