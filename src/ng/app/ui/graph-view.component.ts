import {Component, Input, OnInit} from '@angular/core';
import {DataRecord} from '../model/DataRecord';

@Component({
  selector: 'graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.scss']
})
export class GraphViewComponent implements OnInit {
  @Input() data: DataRecord[];
  categories: string[];
  series: number[][];
  yMax: number;

  private static calcGoodYMax(maxValue: number): number {
    const upperBound = maxValue * 1.1;
    const scale = Math.floor(Math.log10(upperBound));
    const multipler = Math.pow(10, scale);
    return Math.ceil(upperBound / multipler) * multipler;
  }

  ngOnInit(): void {
    this.series = [[], []];
    this.categories = this.data.map(r => r.words);
    this.data.forEach((r, i) => {
      this.series[0][i] = r.score;
      this.series[1][i] = r.avgScore;
    });
    const maxValue = Math.max(...this.series[0], ...this.series[1]);
    this.yMax = GraphViewComponent.calcGoodYMax(maxValue);
  }
}
