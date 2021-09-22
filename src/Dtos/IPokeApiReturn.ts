import { IPokeResults } from "./IPokeResults";

export interface IPokeApiReturn {
  count: number,
  next: string | null,
  previous: string | null,
  results: Array<IPokeResults>
}