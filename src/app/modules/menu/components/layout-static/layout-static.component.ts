import { Component } from '@angular/core';

@Component({
    selector: 'layout-static-page',
    templateUrl: './layout-static.component.html',
    styleUrls: ['./layout-static.component.scss']
})

export class LayoutStaticComponent {
    shiftEnabled = false;

    toggleShifting(target:any) {
        this.shiftEnabled = !this.shiftEnabled;
    }

    focusFunction(target:any) {
        if(this.shiftEnabled)
            setTimeout(()=> {
                console.error("Window HEIGHT > ", window.innerHeight);
                target.style.paddingBottom = "250px"
            }, 300);
    }
    focusOutFunction(target:any) {
        if(this.shiftEnabled)
            setTimeout(()=> {
                console.error("Window HEIGHT > ", window.innerHeight);
                target.style.paddingBottom = "5px"
            }, 300);
    }

}