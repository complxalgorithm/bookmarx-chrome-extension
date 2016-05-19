import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';
import { BookmarkComponent } from './bookmarx.component';
import { ListService } from './bookmark.service';

// Metadata of component
@Component({
  selector: 'sp-list',
  templateUrl: './templates/list.html',
  directives: [ BookmarkComponent ],
  providers: [ ListService ]
})

export class ListComponent implements OnInit {
  public bookmarks : Array< Object >;

  constructor( private listService : ListService ) {}

  //getBookmarkLists() requests bookmarks asynchronously
  getBookmarkLists() {
    this.listService.getBookmarks().then( bookmarks => this.bookmarks = bookmarks );
  }

  // ngOnInit() gets called when the component gets activated
  ngOnInit() {
    this.getBookmarkLists();
  }

  // setList() uses ListService to save the complete list
  setList() {
    this.listService.setBookmarks(this.bookmarks);
  }

  // deleteBookmark() deletes bookmark and saves complete list
  deleteBookmark( bookmark : Object, i : number ) {
    this.bookmarks.splice(i, 1);
    this.setList();
  }
}
