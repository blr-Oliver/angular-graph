import {Component, Input, OnInit} from '@angular/core';
import {DataRecord} from '../model/DataRecord';

type RoundDirection = 'floor' | 'ceil' | 'round';

@Component({
  selector: 'graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.scss']
})
export class GraphViewComponent implements OnInit {
  private static readonly RATIO = 1.6;
  @Input() data: DataRecord[];
  categories: string[];
  series: number[][];
  yMax: number;
  yUnit: number;
  width: number;
  height: number;

  ngOnInit(): void {
    this.series = [[], []];
    this.categories = this.data.map(r => r.words);
    this.data.forEach((r, i) => {
      this.series[0][i] = r.score;
      this.series[1][i] = r.avgScore;
    });
    const maxValue = Math.max(...this.series[0], ...this.series[1]);
    this.width = this.categories.length * 100 + 20;
    this.height = this.width / GraphViewComponent.RATIO;
    this.yMax = this.roundSpecial(maxValue * 1.1, 1, 'ceil');
    this.yUnit = this.roundSpecial((this.height - 20) / this.yMax, 2);
    this.height = Math.ceil(this.yUnit * this.yMax) + 20;
  }

  private roundSpecial(value: number, significantDigits: number, direction: RoundDirection = 'round'): number {
    const scale = Math.floor(Math.log10(Math.abs(value))) + (1 - significantDigits);
    const multipler = Math.pow(10, scale);
    return Math[direction](value / multipler) * multipler;
  }
}
