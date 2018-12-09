import {Component, Input} from '@angular/core';
import {DataRecord} from '../model/DataRecord';

@Component({
  selector: 'tabular-view',
  templateUrl: './tabular-view.component.html'
})
export class TabularViewComponent {
  @Input() data: DataRecord[];
}
