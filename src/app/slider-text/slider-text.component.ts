import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-text.component.html',
  styleUrl: './slider-text.component.scss'
})
export class SliderTextComponent implements OnInit{
  @Input() text: string ='';
  @Input() highlight: string = '';
  textArr: string[] = [];
  ngOnInit(): void {
    this.textArr = this.text.split(this.highlight);
  }
}
