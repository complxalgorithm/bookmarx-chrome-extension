import { BookmarkComponent } from './bookmarx.component';
import { BOOKMARKS } from './list.data.constant';

import { Injectable } from 'angular2/core';

@Injectable()

export class ListService {
  /*
    Three variables:
    one for possible data in the localStorage,
    one for our default data, and
    one for the data the service should return
  */
  bookmarksLocalStorage = JSON.parse(localStorage.getItem('sp-bookmarklist') );
  bookmarksDefaultData = BOOKMARKS;
  bookmarksToReturn = this.bookmarksDefaultData;

  // getBookmarks() function checks if there's data in local storage
  getBookmarks() {
    if ( this.bookmarksLocalStorage !== null )
    {
      this.bookmarksToReturn = this.bookmarksLocalStorage;
    }
    return Promise.resolve(this.bookmarksToReturn);
  }

  // setBookmarks() function saves new data in local storage
  setBookmarks( bookmarks : Object ) {
    localStorage.setItem('sp-bookmarklist', JSON.stringify(bookmarks));
  }
}
