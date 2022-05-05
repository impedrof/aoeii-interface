import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from '../route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fader],
})
export class AppComponent
  implements AfterViewInit, OnInit, AfterContentChecked
{
  @ViewChild('main') main: ElementRef | undefined;
  @ViewChild('header') header: ElementRef | undefined;

  title = 'aoeii-interface';

  constructor(private renderer: Renderer2) {}

  ngAfterContentChecked(): void {
    this.adjustHeaderMargin();
  }

  ngOnInit(): void {
    this.adjustHeaderMargin();
  }

  ngAfterViewInit(): void {
    this.adjustHeaderMargin();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.adjustHeaderMargin();
  }

  adjustHeaderMargin(): void {
    setTimeout(() => {
      this.renderer.setStyle(
        this.main?.nativeElement,
        'marginTop',
        `${this.header?.nativeElement.offsetHeight}px`
      );
    }, 0);
  }

  prepareRoute(outlet: RouterOutlet): void {
    return (
      outlet && outlet.activatedRoute && outlet.activatedRouteData['animation']
    );
  }
}
