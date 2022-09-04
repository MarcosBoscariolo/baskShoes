import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  toppingListColor: string[] = ['Preto', 'Branco', 'Azul', 'Vermelho', 'Marrom', 'Roxo']

  constructor() { }

  ngOnInit(): void {
  }

  activeFaq(event: any) {
    const question = event.currentTarget;
    const controls = question.getAttribute('aria-controls');
    const answer = document.getElementById(controls);
    
    answer?.classList.toggle('active');
    const answerActive = answer?.classList.contains('active');
    question.setAttribute('aria-expanded', answerActive);
  }

}
