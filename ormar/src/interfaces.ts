export interface Root {
  clothes: Clothes[]
}

export interface Clothes {
  id: any
  outfit: Outfit
}

export interface Outfit {
  vrsta: string
  veličina: string
  boja: string
  slika: string
}
