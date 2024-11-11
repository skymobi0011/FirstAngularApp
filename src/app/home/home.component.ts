import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter/>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
      *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = []
  housingService: HousingService = inject(HousingService)
  filteredLocationList: Housinglocation[] = [];

  // Hàm kiểm tra giá trị null hoặc empty
  isNullOrEmpty(value: any): boolean {
    return value === null || value === undefined || value.trim() === '';
  }

  filterResults(text: string) {
    if (this.isNullOrEmpty(text)) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  constructor(){
    this.housingService.getAllHousingLocation().then((housingLocationList: Housinglocation[]) => {
      this.housingLocationList =housingLocationList;

      this.filteredLocationList = housingLocationList;
    });
  }
}
