import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas:any[] = [];
  buscado:boolean = false;

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    console.log(termino);
    this._spotifyService.getArtistas(termino).subscribe((data:any)=>{
      console.log(data);
      this.artistas = data; 
    });
  }

}
