import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TanxuRoutingModule } from './tanxu-routing.module';
import { TanxuComponent } from './tanxu.component';


@NgModule({
  declarations: [
    TanxuComponent
  ],
  imports: [
    CommonModule,
    TanxuRoutingModule
  ]
})
export class TanxuModule { }
