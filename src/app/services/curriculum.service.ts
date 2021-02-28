import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  profesional: any[] = [];
  educacion: any[] = [];
  testimonio: any[] = [];
  experiencia: any[] = [];
  blog: any[] = [];

  constructor(private http: HttpClient) {
    //console.log('firebase');
    this.cargarProfesional();
    this.cargarEducacion();
    this.cargarTestimonio();
    this.cargarExperiencia();
    this.cargarBlog();
  }

  private cargarProfesional(){
    this.http.get('https://cv-harry-default-rtdb.firebaseio.com/Profesional.json')
      .subscribe(( resp: any[]) => {
        this.profesional = resp;
        //console.log(resp);
      });
  }
  private cargarEducacion(){
    this.http.get('https://cv-harry-default-rtdb.firebaseio.com/Educacion.json')
      .subscribe(( resp: any[]) => {
        this.educacion = resp;
        //console.log(resp);
      });
  }
  private cargarTestimonio(){
    this.http.get('https://cv-harry-default-rtdb.firebaseio.com/Testimonio.json')
      .subscribe(( resp: any[]) => {
        this.testimonio = resp;
        //console.log(resp);
      });
  }
  private cargarExperiencia(){
    this.http.get('https://cv-harry-default-rtdb.firebaseio.com/Experiencia.json')
      .subscribe(( resp: any[]) => {
        this.experiencia = resp;
        //console.log(resp);
      });
  }


  private cargarBlog(){
    this.http.get('https://cv-harry-default-rtdb.firebaseio.com/Blog.json')
      .subscribe(( resp: any[]) => {
        this.blog = resp;
        //console.log(resp);
      });
  }


}


