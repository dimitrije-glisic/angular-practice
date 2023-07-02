import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css'],
})
export class OddComponent {

  @Input() oddNumber: any;

}
