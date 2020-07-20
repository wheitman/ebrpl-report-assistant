import { Router } from '@angular/router';
import { ClrLoadingState } from '@clr/angular';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { ConstantService } from './../../services/constant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css'],
})
export class PreferencesComponent implements OnInit {
  formGroup: FormGroup;
  constants: Observable<Object>;
  saveBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  constructor(
    private _ConstantService: ConstantService,
    private _UserService: UserService,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      branchSelect: new FormControl(''),
    });
    this.constants = this._ConstantService.constantObservable;
    this._UserService.getUserObservable().subscribe((user) => {
      if (user) this.formGroup.get('branchSelect').setValue(user.branch);
    });
  }

  saveChanges() {
    this.saveBtnState = ClrLoadingState.LOADING;
    this._UserService
      .setBranch(this.formGroup.get('branchSelect').value)
      .then(() => {
        this.saveBtnState = ClrLoadingState.SUCCESS;
        console.log(
          '[Preferences Component] Changes saved. Redirecting to home.'
        );
        this._Router.navigate(['']);
      })
      .catch(() => {
        this.saveBtnState = ClrLoadingState.ERROR;
      });
  }
}
