import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { LoadingComponent } from './loading/loading.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    ModalComponent,
    LoadingComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ModalComponent, LoadingComponent, PaginationComponent]
})
export class SharedModule { }
