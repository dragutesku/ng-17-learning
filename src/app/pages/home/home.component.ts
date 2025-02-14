import {Component, computed, effect, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import { PageComponent } from 'src/app/components/layout/page/page.component';
import { ButtonComponent } from "../../shared/components/button/button.component";
import { CardComponent } from "../../shared/components/card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PageComponent,
    ButtonComponent,
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  // WritableSignal is a reactive variable that can be updated
  count: WritableSignal<number> = signal(0);
  getCount!: number;

  // Computed signal that updates whenever the count signal changes
  // Computed signals are read-only, lazily evaluated and memoized
  // Not writable
  doubleCount: Signal<number> = computed(() => {
      return this.count() * 2
  });
  getDoubleCount!: number;


  list: string[] = ['one', 'two', 'three', 'four', 'five', 'twobits', 'threebits'];

  constructor() {
    // Effect is a lifecycle hook that runs whenever the count signal changes
    effect(() => {
      // this.getCount = this.count();
      // this.getDoubleCount = this.doubleCount();
    });

    this.getCount = this.count();
  }

  ngOnInit() {

  }


  increment(): void {
    this.count.update(value => value + 1);
  }

  handleClick() {
    console.log('The count is: ' + this.count());

  }


}
