import { Component, AfterViewInit } from '@angular/core';
import { SisService } from './sis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'c3-ih';

  constructor(private sisService: SisService, private router: Router) {
   }

  showMenus(){
    return this.sisService.showMenus;
  }

  irParaPrateleira(){
    this.sisService.showMenus = true;
    this.router.navigate(['/prateleira']);
  }
}
