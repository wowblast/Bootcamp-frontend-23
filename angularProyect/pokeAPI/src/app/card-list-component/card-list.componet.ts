import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.css']

})
export class ToDoListComponent implements OnInit {
    checked = false
    courses = [] 
    constructor () {

    }
    ngOnInit(): void {
    }

}