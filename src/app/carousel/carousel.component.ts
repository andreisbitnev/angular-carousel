import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideInterface } from './types/slide.interface';
import { ButtonComponent } from '../button/button.component';
import { SliderTextComponent } from '../slider-text/slider-text.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SliderTextComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
  @Input() slides: SlideInterface[] = [];

  currentIndex: number = 0;
  timeoutId?: number;

  allowMove = true;
  activeSlide = 0;
  x0: number | undefined = 0; 
  timeout: any;
  updateTime: number = 10000;

  unify(e: any) {	
    return e.changedTouches ? e.changedTouches[0] : e 
  };

  lock(e: TouchEvent | MouseEvent) { this.x0 = this.unify(e).clientX };

  move(e: TouchEvent | MouseEvent) {
    if(this.x0 || this.x0 === 0) {
      let dx = this.unify(e).clientX - this.x0; 
      let slideInc = Math.sign(dx);
  
      if ((this.activeSlide > 0 || slideInc < 0) && (this.activeSlide < this.slides.length - 1 || slideInc > 0)) {
        this.activeSlide -= slideInc;
      }
      this.x0 = 0;
    }
    this.updateSlide();
  };

  ngAfterContentChecked(): void {
    if (this.activeSlide === this.slides.length - 1) {
      setTimeout(() => {
        this.allowMove = false;
        this.activeSlide = 0;
      }, 500);
    } else if (this.activeSlide === 0 && !this.allowMove) {
      setTimeout(() => {
        this.allowMove = true;
      }, 100);
    }
  }

  updateSlide() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.activeSlide += 1;
      this.updateSlide()
    }, this.updateTime)
  }

  ngOnInit(): void {
    this.updateSlide();
  }

  getSlideBgUrl(slide: SlideInterface) {
    return `url('${slide.bgImageUrl}')`;
  }

  getSlideImgUrl(slide: SlideInterface) {
    return `url('${slide.mainImageUrl}')`;
  }
}