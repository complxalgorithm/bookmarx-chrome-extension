// Create component using Angular's "Component" function
import { Component } from 'angular2/core';
import { Output } from 'angular2/core';
import { EventEmitter } from 'angular2/core';

interface Bookmark {
  name : string,
  url : string
}

// Component decorator to add metadata
@Component({
  selector: 'sp-bookmark',
  templateUrl: './templates/bookmark.html',
  inputs : ['bookmark']
})

// BookmarkComponent module exports BookmarkComponent class,
// because we will need it in other modules
export class BookmarkComponent {
  bookmark : Bookmark;
  submitted = false;

  // Events
  @Output() bookmarkChanged : EventEmitter<any> = new EventEmitter();
  @Output() bookmarkDeleted : EventEmitter<any> = new EventEmitter();

  // User clicking on "Done" fires bookmark change event
  onSubmit( bookmark : Bookmark ) {
    this.submitted = false;
    this.bookmarkChanged.emit(bookmark);
  }

  // User clicking on "Delete" fires bookmark delete event
  onDelete( bookmark : Bookmark ) {
    this.bookmarkDeleted.emit(bookmark);
  }
}
