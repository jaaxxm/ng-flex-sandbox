import { Component } from '@angular/core';

@Component({
    selector: 'layout-flex-page',
    templateUrl: './layout-flex.component.html',
    styleUrls: ['./layout-flex.component.scss']
})

export class LayoutFlexComponent {
    shiftEnabled = false;

    toggleShifting(target:any) {
        this.shiftEnabled = !this.shiftEnabled;
    }

    focusFunction(target:any) {
        if(this.shiftEnabled)
            setTimeout(()=> {
                target.style.position = "absolute";
                target.style.bottom = "150px";
            }, 300);
    }
    focusOutFunction(target:any) {
        if(this.shiftEnabled)
            setTimeout(()=> {
                target.style.position = "static";
                target.style.bottom = "0";
            }, 300);
    }

}