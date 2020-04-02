import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.type';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit, OnDestroy {
  public products: Product[];
  public searchText: string;

  private productsSub: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.productsSub = this.dataService.getData().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  ngOnDestroy(): void {
    this.productsSub.unsubscribe();
  }

}
