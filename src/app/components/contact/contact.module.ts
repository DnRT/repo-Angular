import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { ContactRoutingModule } from './contact-routing.module';


@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ContactRoutingModule
    ],
    bootstrap: [ContactComponent]
})
export class ContactModule{}