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
  series: Point[][];
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  xUnit: number;
  yUnit: number;
  width: number;
  height: number;
  originX: number;
  originY: number;

  ngOnInit(): void {
    this.series = [this.data];
    const len = this.data.length;
    const xValues = this.data.map(p => p.x);
    const yValues = this.data.map(p => p.y);
    this.xMin = Math.min(...xValues);
    this.xMax = Math.max(...xValues);
    this.yMin = Math.min(...yValues);
    this.yMax = Math.max(...yValues);
    this.xMin = this.roundSpecial(Math.min(0, this.xMin * 1.1), 1, 'floor');
    this.xMax = this.roundSpecial(Math.max(0, this.xMax * 1.1), 1, 'ceil');
    this.yMin = this.roundSpecial(Math.min(0, this.yMin * 1.1), 1, 'floor');
    this.yMax = this.roundSpecial(Math.max(0, this.yMax * 1.1), 1, 'ceil');
    const xSpan = this.xMax - this.xMin;
    const ySpan = this.yMax - this.yMin;
    this.xUnit = this.roundSpecial(xSpan / len * 100, 2);
    this.width = this.roundSpecial(this.xUnit * xSpan, 3, 'ceil');
    const height = this.roundSpecial(this.width / GraphViewComponent.RATIO, 3);
    this.yUnit = this.roundSpecial(height / ySpan, 2);
    this.height = this.roundSpecial(this.yUnit * ySpan, 3, 'ceil');
    this.originX = this.xUnit * this.xMin;
    this.originY = this.yUnit * this.yMin;
  }

  private roundSpecial(value: number, significantDigits: number, direction: RoundDirection = 'round'): number {
    if (value === 0) {
      return 0;
    }
    const scale = Math.floor(Math.log10(Math.abs(value))) + (1 - significantDigits);
    const multiplier = Math.pow(10, scale);
    return Math[direction](value / multiplier) * multiplier;
  }
}
