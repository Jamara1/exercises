import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
  private heroes: Hero[] = [
    {
      name: 'Aquaman',
      bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      image: 'assets/image/aquaman.png',
      appearance: '1941-11-01',
      home: 'DC',
    },
    {
      name: 'Batman',
      bio: 'Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.',
      image: 'assets/image/batman.png',
      appearance: '1939-05-01',
      home: 'DC',
    },
    {
      name: 'Daredevil',
      bio: 'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede "ver" a través de un "sexto sentido" que le sirve como un radar similar al de los murciélagos.',
      image: 'assets/image/daredevil.png',
      appearance: '1964-01-01',
      home: 'Marvel',
    },
    {
      name: 'Hulk',
      bio: 'Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).',
      image: 'assets/image/hulk.png',
      appearance: '1962-05-01',
      home: 'Marvel',
    },
    {
      name: 'Linterna Verde',
      bio: 'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)',
      image: 'assets/image/linterna-verde.png',
      appearance: '1940-06-01',
      home: 'DC',
    },
    {
      name: 'Spider-Man',
      bio: 'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un "sentido arácnido", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
      image: 'assets/image/spiderman.png',
      appearance: '1962-08-01',
      home: 'Marvel',
    },
    {
      name: 'Wolverine',
      bio: 'En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.',
      image: 'assets/image/wolverine.png',
      appearance: '1974-11-01',
      home: 'Marvel',
    },
  ];

  constructor() {
    console.log('Service is already!');
  }

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getHero(id: number): Hero {
    return this.heroes[id];
  }

  searchHeroes(text: string) {
    let heroesArr: Hero[] = [];
    text = text.toLowerCase();

    for (let i = 0; i < this.heroes.length; i++) {
      const heroe = this.heroes[i];
      let name = heroe.name.toLowerCase();

      if (name.indexOf(text) >= 0) {
        heroe.id = i;
        heroesArr.push(heroe);
      }
    }

    return heroesArr;
  }
}

export interface Hero {
  name: string,
  bio: string,
  image: string,
  appearance: string,
  home: string,
  id?: number
};
