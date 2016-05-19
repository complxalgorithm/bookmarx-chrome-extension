// Reference type definition file to let TS recognize Angular "promise" function
/// <reference path="../node_modules/angular2/typings/browser.d.ts" />

// Import Angular's "bootstrap" function
import { bootstrap } from 'angular2/platform/browser';
import { ListComponent } from './list.component';

// Bootstrap "BookmarkComponent" as root component
bootstrap( ListComponent );
