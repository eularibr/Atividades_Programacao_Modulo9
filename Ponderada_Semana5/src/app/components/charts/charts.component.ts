import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts'; // Import the NgApexchartsModule
@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [NgApexchartsModule], // Add NgApexchartsModule to the imports array
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent {

}
