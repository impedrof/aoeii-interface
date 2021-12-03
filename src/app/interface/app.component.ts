import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('main') main: ElementRef | undefined;
  @ViewChild('header') header: ElementRef | undefined;

  title = 'aoeii-interface';

  constructor(private renderer: Renderer2) {}

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
      this.renderer.setStyle(this.main?.nativeElement, 'marginTop', `${this.header?.nativeElement.offsetHeight}px`);
    }, 0);
  }

}
