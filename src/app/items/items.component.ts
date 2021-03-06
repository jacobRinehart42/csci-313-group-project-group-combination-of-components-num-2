import { Component, OnInit, Input } from '@angular/core';
import { RoutingService } from '../routing.service';
import { ItemsService } from "../items.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  negotiating: boolean = false;

  @Input() item : {
    itemId: number,
    owningUserId: number,
    name: string,
    askingPrice: string,
    underNegotiation: string,
    seller: string,
    nicheMarket: string,
    tags: string,
    description: string,
    dimensions: string,
    conditionAndAge: string,
    otherInfo: string};

    @Input() id: number;

  constructor(private route: RoutingService, public its: ItemsService) { }

  ngOnInit() {
  }

  //get the index of the item, use that to find the owners id and bring to other user page

}