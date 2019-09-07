import { PipeTransform, Pipe } from '@angular/core';
import { LocalService } from '../services/local.service';
@Pipe({
    name: 'translate',
    pure: false,
  })
  export class TranslatePipe implements PipeTransform {
    constructor(private localService: LocalService) {}
  
    transform(value: string): string {
      return this.localService.translate(value)
    }
  }
