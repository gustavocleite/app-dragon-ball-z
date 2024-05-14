export interface Planet {
  id: number;
  name: string;
  isDestroyed: boolean,
  description: string
  image: string
  deletedAt: string |null
}
export interface Planets {
  items: Planet[]
  meta: Meta
}
export interface Meta {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}
