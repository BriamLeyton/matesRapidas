import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ModalOptionsComponent } from './modal-options.component'

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [ModalOptionsComponent],
  exports: [ModalOptionsComponent],
  bootstrap: [ModalOptionsComponent]
})
export class NgbdModalOptionsModule {}
