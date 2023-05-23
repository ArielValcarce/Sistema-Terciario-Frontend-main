import { Component } from '@angular/core';
import { DocentesData } from 'src/app/mocks/docentesData.mock';
import { Docente } from 'src/app/models/data.interface';


@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent {

  docentes:Docente[] = DocentesData;

}
