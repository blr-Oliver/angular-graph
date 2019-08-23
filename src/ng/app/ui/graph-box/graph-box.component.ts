import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

interface Rectangle {
  left: number;
  right: number;
  bottom: number;
  top: number;
  width?: number;
  height?: number;
}

interface Tick {
  value: number;
  showLabel: boolean;
  thickness?: number;
}

interface Point {
  x: number;
  y: number;
}

interface GraphParams {
  width: number;
  height: number;
  origin: Point;
  unit: Point;
  scale: Point;
  plot: Rectangle;
  canvas: Rectangle;
}

@Component({
  selector: 'graph-box',
  templateUrl: './graph-box.component.html',
  styleUrls: ['./graph-box.component.scss']
})
export class GraphBoxComponent implements OnInit, OnChanges {
  @Input() minX: number;
  @Input() maxX: number;
  @Input() minY: number;
  @Input() maxY: number;

  params: GraphParams = {
    width: 1000,
    height: 1000,
    origin: {x: 0, y: 0},
    unit: {x: 1, y: 1},
    scale: {x: 100, y: 100},
    plot: null,
    canvas: null
  };

  xAxis: Tick[] = [];
  yAxis: Tick[] = [];

  private static computeUnit(x: number): number {
    const tenthPower = Math.pow(10, Math.ceil(Math.log10(x)) - 2);
    return [2, 5, 10].map(unit => unit * tenthPower).find(unit => unit * 10 >= x);
  }

  private static updateAxis(axis: Tick[], min: number, max: number, unit: number): void {
    axis.length = 0;
    for (let value = min + 1; value < max; ++value)
      if (value !== 0) {
        const rank = value % 10;
        const tick: Tick = {
          value: value * unit,
          showLabel: rank === 1 || rank % 5 === 0
        };
        if (rank === 0)
          tick.thickness = 1;
        else if (rank % 5 === 0)
          tick.thickness = 0;
        else tick.thickness = -1;
        axis.push(tick);
      }
  }

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateParams();
    GraphBoxComponent.updateAxis(this.xAxis, this.params.plot.left, this.params.plot.right, this.params.unit.x);
    GraphBoxComponent.updateAxis(this.yAxis, this.params.plot.bottom, this.params.plot.top, this.params.unit.y);
  }

  private updateParams(): void {
    const p = this.params;
    const ux = p.unit.x = Math.max(...[this.minX, this.maxX].map(Math.abs).map(GraphBoxComponent.computeUnit));
    const uy = p.unit.y = Math.max(...[this.minY, this.maxY].map(Math.abs).map(GraphBoxComponent.computeUnit));
    const plotRect = p.plot = {
      left: Math.floor(Math.min(0, this.minX / ux)) - 1,
      right: Math.ceil(Math.max(1, this.maxX / ux)) + 1,
      bottom: Math.floor(Math.min(0, this.minY / uy)) - 1,
      top: Math.ceil(Math.max(1, this.maxY / uy)) + 1
    };
    const canvasRect: Rectangle = p.canvas = {
      left: plotRect.left - 0.5,
      right: plotRect.right + 0.5,
      bottom: plotRect.bottom - 0.5,
      top: plotRect.top + 0.5
    };
    canvasRect.width = canvasRect.right - canvasRect.left;
    canvasRect.height = canvasRect.top - canvasRect.bottom;
    const scale = 2000 / Math.max(canvasRect.width, canvasRect.height);
    p.width = Math.round(canvasRect.width * scale);
    p.height = Math.round(canvasRect.height * scale);
    p.scale.x = scale / ux;
    p.scale.y = scale / uy;
    p.origin.x = -scale * canvasRect.left;
    p.origin.y = scale * canvasRect.top;
  }

  xPoint(x: number): number {
    return this.params.origin.x + x * this.params.scale.x;
  }
  yPoint(y: number): number {
    return this.params.origin.y - y * this.params.scale.y;
  }
}
