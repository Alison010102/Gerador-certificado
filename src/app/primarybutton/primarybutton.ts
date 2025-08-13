import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-primarybutton',
  imports: [CommonModule],
  templateUrl: './primarybutton.html',
  styleUrl: './primarybutton.css'
})
export class Primarybutton {
@Input() textoBotao = '';
@Input() disabled: boolean| null = false
}
