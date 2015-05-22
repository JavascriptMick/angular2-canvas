/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, bootstrap, View, NgFor} from "angular2/angular2";
import NoteComponent from "note";

@Component({
    selector: 'my-canvas'
})
@View({
    template: `
    <h1>{{ canvasTitle }}</h1>
    <my-note *ng-for="#note of notes" [note-text]="note"></my-note>
    `,
    directives: [NoteComponent, NgFor]
})
class CanvasComponent {
    canvasTitle: string;
    notes: Array<string>;

    constructor() {
        this.canvasTitle = 'I am a CanvasComponent';
        this.notes = ["this is the first note", "this is the second note", "one more note"];
    }
}

bootstrap(CanvasComponent);
