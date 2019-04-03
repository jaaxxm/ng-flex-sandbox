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
    selector: 'layout-flex-page',
    templateUrl: './layout-flex.component.html',
    styleUrls: ['./layout-flex.component.scss']
})

export class LayoutFlexComponent implements OnInit, AfterViewInit, OnDestroy {
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
            this.composerTextarea.nativeElement.style.position = "static";
            this.composerTextarea.nativeElement.style.bottom = "0";
        }

        if(event.type === "focus" && this.shiftEnabled) {
            this.composerTextarea.nativeElement.style.position = "absolute";
            this.composerTextarea.nativeElement.style.bottom = "150px";
        }
    }

}