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

  constructor() { }

  ngOnInit() {
  }

}