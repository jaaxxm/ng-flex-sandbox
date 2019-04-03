import {
    Component,
    ViewChild,
    ElementRef,
    OnInit,
    AfterViewInit,
    OnDestroy,
} from '@angular/core';

import { merge, fromEvent, Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
    selector: 'layout-static-page',
    templateUrl: './layout-static.component.html',
    styleUrls: ['./layout-static.component.scss']
})

export class LayoutStaticComponent implements OnInit, AfterViewInit, OnDestroy {
    shiftEnabled = false;
    initialViewPortHeight:number;

    private composerFocusSubscription = Subscription.EMPTY;

    @ViewChild("composerTextarea") composerTextarea: ElementRef<HTMLTextAreaElement>;

    ngOnInit() {
        this.composerFocusSubscription = merge(
            fromEvent(this.composerTextarea.nativeElement, "focus"),
            fromEvent(this.composerTextarea.nativeElement, "blur")
        )
        .pipe(debounceTime(300))
        .subscribe((event:FocusEvent)=> {
            this.shiftComposer(event);
        });
    }
    ngAfterViewInit() {
        this.initialViewPortHeight = window.innerHeight;
    }
    ngOnDestroy() {
        this.composerFocusSubscription.unsubscribe();
    }

    toggleShifting():void {
        this.shiftEnabled = !this.shiftEnabled;
    }

    shiftComposer(event:FocusEvent) {

        console.error("this.initialViewPortHeight ", this.initialViewPortHeight);
        console.error("window.innerHeight ", window.innerHeight);

        if(event.type === "blur") {
            this.composerTextarea.nativeElement.style.paddingBottom = "5px";
        }

        if(event.type === "focus" && this.shiftEnabled) {
            this.composerTextarea.nativeElement.style.paddingBottom = "150px";
        }
    }

}