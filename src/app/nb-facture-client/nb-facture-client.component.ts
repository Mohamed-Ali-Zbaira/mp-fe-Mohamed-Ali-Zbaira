import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../Services/client.service';
import { Client } from '../fidele-client/fidele-client.component';

@Component({
  selector: 'app-nb-facture-client',
  templateUrl: './nb-facture-client.component.html',
  styleUrls: ['./nb-facture-client.component.css']
})
export class NbFactureClientComponent implements OnInit {
  invoiceCounts: any[] = [];
  isAscending = true;
  searchText = '';

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.loadInvoiceCounts();
  }

  loadInvoiceCounts() {
    this.clientService.getInvoiceCountsOrderedDescending().subscribe(
      (data: any) => {
        this.invoiceCounts = Object.entries(data).map(([name, count]) => ({ name, count }));
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  sortClientsByName() {
    this.isAscending = !this.isAscending;

    this.invoiceCounts.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return this.isAscending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
  }

  filterClients() {
    const searchTextLower = this.searchText.toLowerCase();

    if (searchTextLower.trim() === '') {
      this.loadInvoiceCounts(); // Reload the original data when the search text is empty
    } else {
      // Filter the clients based on the search text for 'name'
      this.clientService.getAllClients().subscribe(
        (data: Client[]) => {
          this.invoiceCounts = data.filter((client) =>
            client.name.toLowerCase().includes(searchTextLower)          );
        },
        (error: any) => {
          console.error('Error fetching clients:', error);
        }
      );
    }
  }
}
