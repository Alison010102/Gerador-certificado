import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secundarybutton',
  imports: [CommonModule],
  templateUrl: './secundarybutton.html',
  styleUrl: './secundarybutton.css'
})
export class Secundarybutton {
@Input() textobotao= '';
@Input() phClass ='';
@Input() disabled = false;
}
