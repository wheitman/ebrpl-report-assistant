import {
  Component,
  OnInit,
  Inject,
  Input,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  ViewRef,
} from '@angular/core';

@Component({
  selector: 'abstract-section',
  templateUrl: './abstract-section.component.html',
  styleUrls: ['./abstract-section.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AbstractSection implements OnInit {
  @Input() public title: string = 'error';
  @Input() public subtitle: string = null;
  @Input() public data: any = null;
  @Input() public templateObj: Object = {};
  @Input() public constants: Object = {};

  constructor() {}

  ngOnInit(): void {}

  checkTitle(): boolean {
    if (this.title == 'Regular programs') return true;
    else return false;
  }

  getTitle(): string {
    return this.title;
  }
}
