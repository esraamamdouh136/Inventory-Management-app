export interface InventoryItem {
    id?: string; 
    name: string;
    category: string;
    stock: number;
    lastUpdated: string; 
  }

  export interface InventoryAddItem {
    id?: string | null; 
    name?: string | null;
    category?: string | null;
    stock?: number | null;
    lastUpdated?: string | null; 
  }
  