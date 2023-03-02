import { Component, Input, OnInit } from "@angular/core";
@Component({
    selector: 'card-component',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']

})
export class CardComponent implements OnInit {
    @Input()
    pokemonData: any;
    
    name: string = 'default name';
    img: string ='';
    ngOnInit(): void {
        this.name  =this.pokemonData?.name
        this.img  =this.pokemonData?.img
    }

}