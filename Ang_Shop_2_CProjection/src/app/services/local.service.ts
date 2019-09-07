import { Injectable } from '@angular/core';

export class TranslationSet {
    public languange: string
    public values: { [key: string]: string } = {}
  }
  @Injectable()
export class LocalService {
  public languages = ['Spanish', 'English']

  public language = 'English'

  private dictionary: { [key: string]: TranslationSet } = {
    Spanish: {
      languange: 'Spanish',
      values: {
        Home:'Casa',
        Login: 'Iniciar sesión',
        Logout:'Cerrar sesión',
        About:'Acerca de',
        Products:'Productos',
        Contact:'Contacto',
        Cart:'Carro',
        Management:'Administración'


      },
    },
    English: {
      languange: 'English',
      values: {
        Home:'Home',
        Login: 'Login',
        Logout:'Logout',
        About: 'About',
        Products:'Products',
        Contact:'Contact',
        Cart:'Cart',
        Management:'Management'
       
      },
    },
  }

  constructor() {}
  changeLng(lng) {
    this.language = lng ;
  }
  translate(key: string): string {
    if (this.dictionary[this.language] != null) {
      return this.dictionary[this.language].values[key];
    }
  }
}