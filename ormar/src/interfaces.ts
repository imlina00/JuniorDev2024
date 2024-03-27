export interface Root {
    Clothes: Clothes[]
  }
  
  export interface Clothes {
    id: number
    vrsta: string
    veličina?: string
    boja: string
    slika: string
  }
  