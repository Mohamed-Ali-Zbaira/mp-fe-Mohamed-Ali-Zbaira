// fidele-client.component.ts

import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../Services/client.service';

export interface Client {
  id: number;
  name: string;
  lastname: string;
  numero: string;
  adresse: string;
  dateInscription: string; // Update this line to match the API response
}

@Component({
  selector: 'app-fidele-client',
  templateUrl: './fidele-client.component.html',
  styleUrls: ['./fidele-client.component.css']
})
export class FideleClientComponent implements OnInit {
  clientData: Client = {
    id: 0,
    name: '',
    lastname: '',
    numero: '',
    adresse: '',
    dateInscription: ''
  };

  loading = false;

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.getClientData();
  }

  getClientData() {
    this.loading = true;
    this.clientService.getClientWithHighestTotalAmount().subscribe(
      (response: Client) => {
        console.log('API Response:', response);
        this.clientData = response;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching client data:', error);
        this.loading = false;
      }
    );
  }
}
