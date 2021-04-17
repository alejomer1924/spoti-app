import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  error = false
  mensajeErr = '';

  constructor(private spotiservice:SpotifyService) {
    this.spotiservice.getNewReleases().subscribe((data:any) => {
      console.log(data);
      this.nuevasCanciones = data
    }, error => {
      console.log(error);
      this.error = true;
      this.mensajeErr = error.error.error.message
    });
   }

  ngOnInit(): void {
  }

}
