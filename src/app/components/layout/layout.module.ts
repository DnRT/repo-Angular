import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './../material/material.module';


@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MaterialModule
    ],
    bootstrap: [LayoutComponent]
})
export class LayoutModule{}