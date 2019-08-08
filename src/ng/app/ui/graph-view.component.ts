import {Component, Input, OnInit} from '@angular/core';
import {Point} from '../model/Point';

type RoundDirection = 'floor' | 'ceil' | 'round';

@Component({
  selector: 'graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.scss']
})
export class GraphViewComponent implements OnInit {
  private static readonly RATIO = 1.6;
  @Input() data: Point[];
  categories: number[];
  series: number[][];
  yMax: number;
  yUnit: number;
  width: number;
  height: number;

  ngOnInit(): void {
    this.series = [[]];
    this.categories = this.data.map(r => r.x);
    this.data.forEach((r, i) => {
      this.series[0][i] = r.y;
    });
    const maxValue = Math.max(...this.series[0]);
    this.width = this.categories.length * 100 + 20;
    this.height = this.width / GraphViewComponent.RATIO;
    this.yMax = this.roundSpecial(maxValue * 1.1, 1, 'ceil');
    this.yUnit = this.roundSpecial((this.height - 20) / this.yMax, 2);
    this.height = Math.ceil(this.yUnit * this.yMax) + 20;
  }

  private roundSpecial(value: number, significantDigits: number, direction: RoundDirection = 'round'): number {
    const scale = Math.floor(Math.log10(Math.abs(value))) + (1 - significantDigits);
    const multiplier = Math.pow(10, scale);
    return Math[direction](value / multiplier) * multiplier;
  }
}
