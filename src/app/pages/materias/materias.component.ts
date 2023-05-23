import { Component } from '@angular/core';
import { MateriasData } from 'src/app/mocks/materiasData.mock';
import { Materia } from 'src/app/models/data.interface';
@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent {

materias:Materia[] = MateriasData;

}
