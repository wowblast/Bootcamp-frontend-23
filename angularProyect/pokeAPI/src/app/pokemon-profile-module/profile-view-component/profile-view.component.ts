import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector: 'profile-view-component',
    templateUrl: './profile-view.component.html',
    styleUrls: ['./profile-view.component.css']

})
export class ProfileViewComponent implements OnInit {
 constructor( private route: ActivatedRoute) {

 }
    ngOnInit(): void {
        console.log("prfile", this.route.snapshot.data?.['profile'])

    }

}