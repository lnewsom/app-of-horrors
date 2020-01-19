import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CoreComponent } from './core/core.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, CoreComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
