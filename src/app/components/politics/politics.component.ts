import { createMayBeForwardRefExpression } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { FavouriteService } from 'src/app/services/favourite.service';
import { NewsService } from 'src/app/services/news.service';
import { PoliticsService } from 'src/app/services/politics.service';
import { FavouritesComponent } from '../favourites/favourites.component';



@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent {
  constructor(private politicsService: PoliticsService) {}
val:FavouriteService=inject(FavouriteService);
msg:CrudService=inject(CrudService);


  news: any[] = [];


  ngOnInit(): void {
    this.news = this.politicsService.courses;
  }
  onClick(id:number)
  {
    alert("Bookmarked Sucessfully"+id);

    for(let i of this.news)
    {
      if(i.id===id)
       {
      
      
        this.val.newMsg.push(i);
        this.msg.addStudent(i);
        
       }
    }
  
  }
}
