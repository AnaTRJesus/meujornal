import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  noticias: string[] = [
    "Noticia01",
    "Noticia02",
    "Noticia03",
    "Noticia04"];

    mostrarNoticia: boolean = true;
    titulo: string = "Curso Angular";
    texto: string = "Utilizando String Interpolation";
    caminho_imagem: string = "../../assets/verao.jpg";

  constructor() { }

  ngOnInit() {
  }

  public esconderNoticia(){

    this.mostrarNoticia = false;
  }

  public mostrarNoticiaOutra(){

    this.mostrarNoticia = true;
  }

}
