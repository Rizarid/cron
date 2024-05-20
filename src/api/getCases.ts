import axios from "axios";
import { CaseResult, Response } from "./interfaces";

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