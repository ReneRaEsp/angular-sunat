import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { SunatService } from 'src/app/services/sunat.service';

@Component({
  selector: 'app-consulta-ruc',
  templateUrl: './consulta-ruc.component.html',
  styleUrls: ['./consulta-ruc.component.scss'],
})
export class ConsultaRucComponent implements OnInit {
  formGroupSunat: FormGroup;

  constructor(public form: FormBuilder, private sunatService: SunatService) {
    this.formGroupSunat = this.form.group({
      tipo: [''],
      documento: [''],
      nombre: [''],
      alias: [''],
      direccion: [''],
      ubigeo: [''],
      email: [''],
      movil: [''],
      fijo: [''],
    });
  }

  ngOnInit(): void {}

  submitData(): void {
    console.log(this.formGroupSunat.value.documento);

    this.sunatService
      .obtenerClientePorDocumento(this.formGroupSunat.value.documento)
      .subscribe((res) => {
        const {
          nombre,
          tipo,
          documento,
          alias,
          direccion,
          email,
          ubigeo,
          movil,
          fijo,
        } = res[0];
        this.formGroupSunat = this.form.group({
          tipo: [tipo],
          documento: [documento],
          nombre: [nombre],
          alias: [alias],
          direccion: [direccion],
          ubigeo: [ubigeo],
          email: [email],
          movil: [movil],
          fijo: [fijo],
        });
      });
  }
}
