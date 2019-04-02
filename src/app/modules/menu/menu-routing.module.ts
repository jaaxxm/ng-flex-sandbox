import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { LayoutStaticComponent } from './components/layout-static/layout-static.component';
import { LayoutFlexComponent } from './components/layout-flex/layout-flex.component';

const appRoutes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'static', component: LayoutStaticComponent },
    { path: 'flex', component: LayoutFlexComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class MenuRoutingModule {}