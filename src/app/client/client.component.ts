import { Component } from '@angular/core';
import { ClientService } from '../../Services/client.service';
interface Client {
  id: number;
  adresse: string;
  dateInscription: string;
  lastname: string;
  name: string;
  numero: string;
}
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent {
  clients: Client[] = [];
  isAscending = true;
  searchText: string = ''; // Initialize searchText

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(
      (data: Client[]) => {
        // Specify the type for 'data'
        this.clients = data;
      },
      (error: any) => {
        // Specify the type for 'error'
        console.error('Error fetching clients:', error);
      }
    );
  }
  sortClientsByName() {
    this.isAscending = !this.isAscending;

    this.clients.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return this.isAscending
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  }
  sortClientsByLastName() {
    this.isAscending = !this.isAscending;

    this.clients.sort((a, b) => {
      const nameA = a.lastname.toUpperCase();
      const nameB = b.lastname.toUpperCase();
      return this.isAscending
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  }
  sortClientsByAdresse() {
    this.isAscending = !this.isAscending;
    this.clients.sort((a, b) => {
      const nameA = a.adresse.toUpperCase();
      const nameB = b.adresse.toUpperCase();
      return this.isAscending
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  }
  sortClientsByDate() {
    this.isAscending = !this.isAscending;
    this.clients.sort((a, b) => {
      const nameA = a.dateInscription.toUpperCase();
      const nameB = b.dateInscription.toUpperCase();
      return this.isAscending
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  }
  filterClients() {
    const searchTextLower = this.searchText.toLowerCase();
  
    if (searchTextLower.trim() === '') {
      // If the search text is empty, reset the client list to its original state
      this.clientService.getAllClients().subscribe(
        (data: Client[]) => {
          this.clients = data;
        },
        (error: any) => {
          console.error('Error fetching clients:', error);
        }
      );
    } else {
      // Filter the clients based on the search text for 'name' or 'adresse'
      this.clients = this.clients.filter((client) =>
        client.name.toLowerCase().includes(searchTextLower) ||
        client.adresse.toLowerCase().includes(searchTextLower)
      );
    }
  }  
  
}
