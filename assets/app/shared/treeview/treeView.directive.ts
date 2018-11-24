import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[treeviewDirective]'
})
export class TreeViewDirective {

  @HostBinding('style.background') private background = 'transparent';

  constructor() { }

  @HostListener('dragover', ['$event']) public onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#C1C1C1';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = 'transparent'
  }
}
