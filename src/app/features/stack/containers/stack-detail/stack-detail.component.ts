import { Component, OnInit } from '@angular/core';
import { StackApiService } from '../../../../core/api/stack.api';
import { Item } from '../../../../core/models';

@Component({
  selector: 'hs-stack-detail',
  templateUrl: './stack-detail.component.html',
  styleUrls: ['./stack-detail.component.scss']
})
export class StackDetailComponent implements OnInit {

  items: Item[]

  constructor(private stackService: StackApiService) { }

  ngOnInit() {
    this.stackService.fetchById(1).subscribe(resp => this.items = resp)
  }

}
