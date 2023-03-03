import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pokemonColorMap } from 'src/app/shared/config/pokemonColorHash';
import { imagesNameType, imageType } from '../../shared/utils/pokemonTypeImage';
@Component({
  selector: 'profile-view-component',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css'],
})
export class ProfileViewComponent implements OnInit {
  pokemonImage: string = '';
  backgroundColor: string = '';
  previousPokemon: string = '';
  nextPokemon: string = '';
  id = 1;
  isPrevious = false;
  name = ''
  description = ''
  height = ''
  weight = ''
  specie = ''
  ability = ''

  evolutionsImages: {evolutionLink: string, evolutionName: string}[] = []
  typesImages: string[]= []
  constructor(private route: ActivatedRoute, private router: Router) {}
  
  ngOnInit(): void {
    this.setProfileData();
  }

  loadNextPokemon(diff: number) {
    console.log(diff + this.id);
    const newId = diff + this.id;
    this.router.navigateByUrl('pokemons/profile/' + newId);
    //this.setProfileData();
  }

  setProfileData() {
    console.log('init data');
    this.route.data.subscribe((data) => {
        const profile = data['profile']
      console.log('suscribe', profile);
      this.backgroundColor =
        pokemonColorMap[profile['id']];
      this.pokemonImage =
      profile['sprites'].back_default;
      this.id = parseInt(profile['id']);

      this.previousPokemon = '###' + (this.id - 1);
      this.nextPokemon = '###' + (this.id + 1);
      this.name = profile.name
      this.evolutionsImages = profile.evolutions
      this.typesImages = []
      this.description = profile.description
      this.height = profile.height
      this.weight = profile.weight
      this.specie = profile.species.name
      this.ability = profile.abilities[0].ability.name
      const listOfTypes = profile?.types|| []
      listOfTypes.forEach((element:any) => {
        const link = imageType[element.type.name as imagesNameType] || ''
        this.typesImages.push(link) 
        
      });
   
      if (this.id - 1 > 0) this.isPrevious = true;
    });
  }
}
 