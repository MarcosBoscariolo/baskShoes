import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  toppingListShoes: any= [
    {
      id: 1,
      img: "../../../../assets/img/1.png"
    },
    {
      id: 2,
      img: "../../../../assets/img/2.png"
    },
    {
      id: 3,
      img: "../../../../assets/img/3.png"
    },
    {
      id: 4,
      img: "../../../../assets/img/4.png"
    },
    {
      id: 5,
      img: "../../../../assets/img/5.png"
    },
    {
      id: 6,
      img: "../../../../assets/img/6.png"
    },
    {
      id: 7,
      img: "../../../../assets/img/7.png"
    },
    {
      id: 8,
      img: "../../../../assets/img/8.png"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  scrollBy(event: boolean): void {
    const container = document.getElementById('container');

    if(container) {
      let content = container.querySelector('div')?.clientWidth;
      if(content){
        content += 21;
        container.scrollBy(event ? content : -content, 0)
      }
    }
    
  }

}
