import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wildberries-test';

  constructor(private router: Router) { }

  public moveToGoods() {
    this.router.navigate(['/goods']);
  }

  public shouldShowButton() {
    return this.router.url !== '/goods';
  }
}
