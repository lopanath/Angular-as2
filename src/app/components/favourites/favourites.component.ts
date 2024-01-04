import { Component, inject, OnInit } from '@angular/core';
import { FavouriteService } from 'src/app/services/favourite.service';
import { PoliticsService } from 'src/app/services/politics.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
constructor(private serv:FavouriteService){}
news:any[]=[];
ngOnInit(): void {
  this.news=this.serv.newMsg;
}
 
}

