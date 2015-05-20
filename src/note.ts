/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, bootstrap, View} from "angular2/angular2";

@Component({
    selector: 'my-note'
})
@View({
    template: '<textarea>{{ noteText }}</textarea>'
})
class NoteComponent {
    noteText: string;

    constructor() {
      this.noteText = 'Write Stuff Here.';
    }
}

export default NoteComponent;
