import { SectionInterface } from './../../../interfaces/sections';
import {
  Component,
  OnInit,
  Inject,
  Input,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  ViewRef,
} from '@angular/core';
import { FormArray } from '@angular/forms';

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
  @Input() public interface: SectionInterface;
  @Input() public constants: Object = {};
  @Input() public order: number;

  constructor() {}

  ngOnInit(): void {}

  checkTitle(): boolean {
    if (this.title == 'Regular programs') return true;
    else return false;
  }

  getTitle(): string {
    return this.title;
  }

  isType(obj: Object, type: string) {
    if (obj['type'] == type) {
      return true;
    } else false;
  }

  getCheckboxControl(
    arrayIndex: number,
    subarrayIndex: number,
    array: FormArray
  ) {
    if (!array || !array.controls) {
      console.error(
        '[Abstract Section] Form array is empty. Has it been built?'
      );
      return [];
    }
    let checkboxArray = array.controls[arrayIndex] as FormArray;
    return checkboxArray.controls[subarrayIndex];
  }
}
