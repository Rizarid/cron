import axios from "axios";
import { CaseResult, Response } from "./interfaces";

const API_URL = 'https://services.it-cron.ru/api';

export const getCases = async () => {
  try {
    const result = await axios.get<Response>(`${API_URL}/cases`, {
      headers: {
        Accept: 'text/plain',
        'Accept-Language': 'ru',
      }
    })

    const cases: CaseResult[] = result.data.Data.map((item) => {
      const Filters = item?.Filters?.map(filter => filter.Name) || undefined;
      const CaseColor = item?.CaseColor ? `#${item?.CaseColor}` : undefined 
      return {...item, Filters, CaseColor}
    })

    return cases
  } catch (error) {
    console.error(error)
    return []
  }
}