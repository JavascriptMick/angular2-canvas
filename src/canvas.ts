/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, bootstrap, View, For} from "angular2/angular2";
import NoteComponent from "note";

@Component({
    selector: 'my-canvas'
})
@View({
    template: `
    <h1>{{ canvasTitle }}</h1>
    <my-note *for="#note of notes" [noteText]="note"></my-note>
    `,
    directives: [NoteComponent, For]
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

