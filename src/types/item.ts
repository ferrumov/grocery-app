export type ItemFormValues = { name: string; count: number; category?: string };

export interface IGroceryItem {
  id: string;
  name: string;
  count: number;
  category?: string;
  completed: boolean;
}
