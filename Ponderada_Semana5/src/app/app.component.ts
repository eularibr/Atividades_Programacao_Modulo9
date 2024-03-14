import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from './environment';
import { BarchartComponent } from './components/screens/barchart/barchart.component';
import { ApiconnectService } from './services/apiconnect.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarchartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'meu_dashboard';
  apiUrl: string | undefined;

  	
  constructor(private apiConnectService: ApiconnectService) {
    this.apiUrl = environment.apiUrl;
    console.log(this.apiUrl);
  }

  ngOnInit(): void {
    this.apiConnectService.getCars().subscribe(response=> {
      console.log(response)
      return response
    })
  }
}
