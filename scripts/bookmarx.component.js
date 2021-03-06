System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, core_3;
    var BookmarkComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            }],
        execute: function() {
            // Component decorator to add metadata
            BookmarkComponent = (function () {
                function BookmarkComponent() {
                    this.submitted = false;
                    // Events
                    this.bookmarkChanged = new core_3.EventEmitter();
                    this.bookmarkDeleted = new core_3.EventEmitter();
                }
                // User clicking on "Done" fires bookmark change event
                BookmarkComponent.prototype.onSubmit = function (bookmark) {
                    this.submitted = false;
                    this.bookmarkChanged.emit(bookmark);
                };
                // User clicking on "Delete" fires bookmark delete event
                BookmarkComponent.prototype.onDelete = function (bookmark) {
                    this.bookmarkDeleted.emit(bookmark);
                };
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', core_3.EventEmitter)
                ], BookmarkComponent.prototype, "bookmarkChanged", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', core_3.EventEmitter)
                ], BookmarkComponent.prototype, "bookmarkDeleted", void 0);
                BookmarkComponent = __decorate([
                    core_1.Component({
                        selector: 'sp-bookmark',
                        templateUrl: './templates/bookmark.html',
                        inputs: ['bookmark']
                    }), 
                    __metadata('design:paramtypes', [])
                ], BookmarkComponent);
                return BookmarkComponent;
            }());
            exports_1("BookmarkComponent", BookmarkComponent);
        }
    }
});
//# sourceMappingURL=bookmarx.component.js.map