import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { SlideInterface } from './carousel/types/slide.interface';
import { AddFirstToEndPipe } from './pipes/add-first-to-end.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarouselComponent, CommonModule, AddFirstToEndPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'angular-carousel';
  slides: SlideInterface[] = []
  ngOnInit(): void {
    setTimeout(() => {
      this.slides = [
        { 
          bgImageUrl: '/assets/winzup-bg-mob.webp',
          mainImageUrl: '/assets/winzup_mob.png',
          title: 'WinzUp Loyalty Program',
          text: 'Get up to 35% in rewards: daily rakeback, weekly cashback and level-up bonuses',
          textHighlight: '35% in rewards',
          btnText: 'Join now',
        },
        { 
          bgImageUrl: '/assets/ValentinesFortuneDrops_mob-bg.png',
          mainImageUrl: '/assets/ValentinesFortuneDrops_mob-pic.png',
          title: "Valentine's Fortune Drops",
          text: 'Trigger random prizes and win a share of €30,000!',
          textHighlight: '€30,000',
          btnText: 'Learn more',
        },
        { 
          bgImageUrl: '/assets/wheel-mob-bg.webp',
          mainImageUrl: '/assets/wheel-mob.png',
          title: 'Wheel of Winz',
          text: 'Spin the wheel to win up to €15,000 weekly',
          textHighlight: '€15,000',
          btnText: 'Spin now',
        },
      ];
    }, 500)
  }
}
