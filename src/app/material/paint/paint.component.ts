import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-paint',
  template: `
    <app-nav-bar> </app-nav-bar>

    <div class="paint-container">
      <canvas
        #canvas
        (mousedown)="onMouseDown($event)"
        (mousemove)="onMouseMove($event)"
        (mouseup)="onMouseUp($event)"
        appCanvasResize
      ></canvas>
    </div>
    <div class="color-picker">
      <input
        type="color"
        (input)="onColorChange($event)"
        [(ngModel)]="selectedColor"
      />
    </div>
  `,
  styleUrls: ['./paint.component.css'],
})
export class PaintComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef;
  private ctx!: CanvasRenderingContext2D;
  private isDrawing = false;
  selectedColor: string = 'black';

  onColorChange(event: any) {
    this.selectedColor = event.target.value;
    this.ctx.strokeStyle = this.selectedColor;
  }

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = 'black';
    this.adjustCanvasSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.adjustCanvasSize();
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDrawing = true;
    this.ctx.beginPath();
    this.ctx.moveTo(
      event.clientX - this.canvasRef.nativeElement.getBoundingClientRect().left,
      event.clientY - this.canvasRef.nativeElement.getBoundingClientRect().top
    );
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDrawing) return;
    this.ctx.lineTo(
      event.clientX - this.canvasRef.nativeElement.getBoundingClientRect().left,
      event.clientY - this.canvasRef.nativeElement.getBoundingClientRect().top
    );
    this.ctx.stroke();
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.isDrawing = false;
  }

  private adjustCanvasSize() {
    const canvas = this.canvasRef.nativeElement;
    const parent = canvas.parentElement;
    if (parent) {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    }
  }
}
