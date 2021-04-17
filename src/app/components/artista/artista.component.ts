import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista:any = {};
  topTracks:any[] = [];

  constructor(private _activatedRoute:ActivatedRoute, private _service:SpotifyService) {
    this._activatedRoute.params.subscribe((data)=>{
        this._service.getArtista(data['id']).subscribe((res)=>{
          this.artista = res;
          console.log(this.artista);
        });
        this.getTopTracks(data['id']);
    });
   }

  ngOnInit(): void {
  }

  getTopTracks(id:string){
    this._service.getTopTracks(id).subscribe((res)=>{
      console.log(res);
      this.topTracks = res; 
    });
  }

}
