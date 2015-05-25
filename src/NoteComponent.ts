/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, bootstrap, View} from "angular2/angular2";
import Note from "Note";


/**
 * View layer component responsible for rendering the note to the DOM and handling DOM events.
 *
 * @exportedAs NoteComponent
 */
@Component({
    selector: 'my-note',
    properties:{'note': 'note'}
})
@View({
    template: '<textarea [class-name]="noteClass">{{ note.noteText }}</textarea>'
})
class NoteComponent {
    note: Note;

    constructor() {
      this.note = new Note("Default Note", "yellow");
    }

    get noteClass() : string {
      return this.note.colour + '-note'; 
    }
}

export default NoteComponent;
