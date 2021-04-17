import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _httpClient: HttpClient) {
    console.log('servicios listos');
   }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCkQQyECy6lPV3bD6W4gGIeMP3DfzL7BKLocMIpz847quqtxFctrd3SaPeO8wL4E1Dzluci_YhFGMYQUfs'
    });
    return this._httpClient.get(url, {headers}); 
  }


  getNewReleases(){
      return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items));
  }

  getArtistas(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(map((data)=> data['artists'].items));
  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?market=us`).pipe(map((data)=> data['tracks']));
  }


}
