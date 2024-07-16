import { Component, OnInit } from '@angular/core';
import { TailwindService } from '../tailwind.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tailwind',
  templateUrl: './tailwind.component.html',
  styleUrls: ['./tailwind.component.css']
})
export class TailwindComponent implements OnInit {

  constructor(public tailwindServ: TailwindService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }
  shop_title = 'Shop by category';
  section_title = 'Tailwind';

}
