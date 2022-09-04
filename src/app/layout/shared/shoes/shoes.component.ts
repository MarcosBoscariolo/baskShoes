import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit {

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

}
