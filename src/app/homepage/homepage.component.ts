import { Component, OnInit } from "@angular/core";
import { ItemsService } from '../items.service';

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent implements OnInit {
  searchString: string = "";

  constructor( private itemService: ItemsService) {}

  itemsList: any = [];

  ngOnInit() { this.itemsList = this.itemService.items ; }
}
