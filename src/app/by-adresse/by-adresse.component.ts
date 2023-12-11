// by-adresse.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-by-adresse',
  templateUrl: './by-adresse.component.html',
  styleUrls: ['./by-adresse.component.css']
})
export class ByAdresseComponent implements OnInit {
  clientCountsByAddress: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchClientCountsByAddress();
  }

  fetchClientCountsByAddress() {
    this.http.get<any>('http://localhost:8081/api/clients/client-counts-by-address')
      .subscribe(data => {
        // Check if the data is an object before transforming it
        if (typeof data === 'object' && data !== null) {
          // Transform the object into an array of objects
          this.clientCountsByAddress = Object.entries(data).map(([address, count]) => ({ address, count }));
        } else {
          console.error('Invalid data format:', data);
        }
      });
  }
  
}
