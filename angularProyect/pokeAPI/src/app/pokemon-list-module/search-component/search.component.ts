import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector: 'search-component',
    templateUrl: './search.component.html',
    styleUrls: ['./search,.component.css']
})
export class SearchComponent implements OnInit {
    searchData: string = ''
    @Output() searchInfo = new EventEmitter<string>();
    sendData() {
        this.searchInfo.emit(this.searchData);
    }
    ngOnInit(): void {
    }
    onNameChange(newName: string) {
        console.log('New name:', newName);
        this.sendData()
        // Do something with the new name here
      }
}