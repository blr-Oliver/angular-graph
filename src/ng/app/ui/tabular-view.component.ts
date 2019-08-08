import {Component, Input} from '@angular/core';
import {Point} from '../model/Point';

@Component({
  selector: 'tabular-view',
  templateUrl: './tabular-view.component.html'
})
export class TabularViewComponent {
  @Input() data: Point[];
}
