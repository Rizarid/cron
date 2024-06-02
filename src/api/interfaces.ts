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
  CaseColor?: string;
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