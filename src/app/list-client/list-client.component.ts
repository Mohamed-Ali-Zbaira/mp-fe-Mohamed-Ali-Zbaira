// list-client.component.ts
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../Services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  clients: any[] = []; // Initialisation avec un tableau vide

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getAllClients().subscribe(data => {
      this.clients = data;
    });
  }
}