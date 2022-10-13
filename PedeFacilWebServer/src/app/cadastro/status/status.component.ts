import { Component, OnInit } from '@angular/core';
//import { timeStamp } from 'console';
import { Status } from '../../models/status.model';
import { CadastroService } from '../../services/cadastro.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private cadastro: CadastroService) {
  }

  ngOnInit(): void {
    this.listarStatus();
  }

  status: Status = {} as Status;
  statusFront: Status[] = [];
  displayedColumns: string[] = ['id', 'nome', 'acoes'];

  listarStatus() {
    this.cadastro.listarStatus().subscribe(statusBack => {
      this.statusFront = statusBack;
    });
  }

  buscarStatus(id: number) {
    this.cadastro.buscarStatus(id).subscribe(statusBack => {
      this.status = statusBack;
    });
  }

  salvarStatus() {
    this.cadastro.salvarStatus(this.status).subscribe(() => {
      this.listarStatus();
    });
  }

  alterarStatus(id: number) {
    this.cadastro.buscarStatus(id).subscribe(statusBack => {
      this.status = statusBack;
    })
  }

  excluirStatus(id: number) {
    this.cadastro.excluirStatus(id).subscribe(() => {
      this.listarStatus();
    })
  }
}

