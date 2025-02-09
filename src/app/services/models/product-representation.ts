import { RatingRepresentation } from './rating-representation';

export interface ProductRepresentation {
  category?: string;
  description?: string;
  id?: number;
  image?: string;
  price?: number;
  rating?: RatingRepresentation;
  title?: string;
}
