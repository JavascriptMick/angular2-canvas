/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, bootstrap, View} from "angular2/angular2";
import NoteComponent from "note";

@Component({
    selector: 'my-canvas'
})
@View({
    template: '<h1>{{ canvasTitle }}</h1><my-note></my-note>',
    directives: [NoteComponent]
})
class CanvasComponent {
    canvasTitle: string;

    constructor() {
        this.canvasTitle = 'Now I am a canvas component with a title and my own shorter selector';
    }
}

bootstrap(CanvasComponent);
