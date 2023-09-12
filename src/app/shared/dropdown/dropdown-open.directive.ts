import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, Output, Renderer2} from "@angular/core";

@Directive({
    selector: "[appDropdownOpen]"
})

export class DropdownOpenDirective {
    @Output() toggleDropdownShowClass = new EventEmitter<boolean>();

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    @HostBinding('class.open') open: boolean = false;

    @HostListener('click') toggleDropdown() {
        this.open = ! this.open;
        this.toggleDropdownShowClass.emit(this.open);
    }
}
