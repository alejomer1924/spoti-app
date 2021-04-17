import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input() items:any[] = [];

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  verArtista(item:any){
    /* console.log(item); */
    let artistaId; 

    if (item.type === 'artist'){
      artistaId = item.id; 
    }else {
      artistaId = item.artists[0].id;
    }

    /* console.log(artistaId); */

    this._router.navigate([`artist/${artistaId}`]); 

  }

}
