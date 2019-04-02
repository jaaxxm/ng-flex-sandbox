import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutStaticComponent } from './components/layout-static/layout-static.component';
import { LayoutFlexComponent } from './components/layout-flex/layout-flex.component';

@NgModule({
    declarations: [
        MenuComponent,
        LayoutStaticComponent,
        LayoutFlexComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MenuRoutingModule
    ],
    providers: []
})

export class MenuModule {}