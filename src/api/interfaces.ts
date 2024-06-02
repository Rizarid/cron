interface Filter {
  Id: string;
  Name: string
}

export interface CaseResponse {
  CaseColor?: string;
  FeaturesTitle?: string;
  Filters?: Filter[];
  FriendlyURL?: string;
  Id?: string;
  Image?: string;
  Title?: string;
}

export interface CaseResult  {
  CaseColor?: Hex;
  FeaturesTitle?: string;
  Filters?: string[];
  FriendlyURL?: string;
  Id?: string;
  Image?: string;
  Title?: string;
}

export interface Response {
  Error: string | null
  Data:CaseResponse[]
}

export type Hex = `#${string}`;
export type RGB = [number, number, number]
export type Color = RGB | Hex;