import axios from "axios"

export const getCases = async () => {
  const result = await axios.get('https://services.it-cron.ru/api/cases', {
    headers: {
      Accept: 'text/plain',
      AcceptLanguage: 'ru'
    }
  })

  console.log('result', result);
}