import { Component, OnInit } from '@angular/core';
import {PeticionesService} from '../services/peticiones.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css'],
  providers: [PeticionesService]
})
export class ActorsComponent implements OnInit {
  public movies: string[];
  public actor: any;
  constructor(
      private _peticionesServices: PeticionesService
  ) {
    this.actor = {"name":""};
}

  ngOnInit() {

  }
  cargaActor(form){
      console.log(this.actor);
      this.movies = [];
      this._peticionesServices.getActor().subscribe(
          result => {
              var movies: string[]
              for(var i=0; i< result.length;i++){

                 // console.log(result[i].movie_title);
                 this.movies.push(result[i].movie_title);
              }

          },
          error => {
              console.log("Esto es un error");
          }
      );
      console.log(this.movies);
  }
}
