export interface MenuResponseDTO {
  id: number;
  name: string;
  dishes: { id: number; name: string; price: number }[];
}
