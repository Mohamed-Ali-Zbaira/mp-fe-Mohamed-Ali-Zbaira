import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/Services/client.service';
@Component({
  selector: 'app-non-active-clients',
  templateUrl: './non-active-clients.component.html',
  styleUrls: ['./non-active-clients.component.css']
})
export class NonActiveClientsComponent implements OnInit {
  nonActiveClients: any[] = [];
  activeClients: any[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
      this.clientService.getActiveClients().subscribe(data => {
        this.activeClients = data;
      });
      this.clientService.getNonActiveClients().subscribe(data => {
        this.nonActiveClients = data;
      });
  }
}
