export interface OrderResponseDTO {
  id: number;
  customer: { id: number; name: string };
  dishes: { id: number; name: string; price: number }[];
  total: number;
}
