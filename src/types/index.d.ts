export interface Ifood {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export interface AddFood {
  image: string;
  name: string;
  price: string;
  description: string;
}

export interface EditFood {
  image: string;
  name: string;
  price: string;
  description: string;
}
