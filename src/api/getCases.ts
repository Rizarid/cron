import axios from "axios";

interface Filter {
  Id: string;
  Name: string
}

export interface CaseResponse {
  CaseColor: string;
  FeaturesTitle: string;
  Filters: Filter[];
  FriendlyURL: string;
  Id: string;
  Image: string;
  Title: string;
}

export interface CaseResult  {
  CaseColor: string;
  FeaturesTitle: string;
  Filters: string[];
  FriendlyURL: string;
  Id: string;
  Image: string;
  Title: string;
}

interface Response {
  Error: string | null
  Data:CaseResponse[]
}

export const getCases = async () => {
  try {
    const result = await axios.get<Response>('https://services.it-cron.ru/api/cases', {
      headers: {
        Accept: 'text/plain',
        'Accept-Language': 'ru',
      }
    })

    const cases: CaseResult[] = result.data.Data.map((item) => {
      const Filters = item.Filters.map(filter => filter.Name);  
      return {...item, Filters}
    })

    return cases
  } catch (error) {
    console.error(error)
    return []
  }
}