/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, bootstrap, View} from "angular2/angular2";

@Component({
    selector: 'my-note',
    properties:{'noteText': 'noteText'}
})
@View({
    template: '<textarea>{{ noteText }}</textarea>'
})
class NoteComponent {
    noteText: string = 'Write Stuff Here';

    constructor() {
    }
}

export default NoteComponent;
