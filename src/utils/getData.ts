export type GenderData = {
  average_0?: number
  average_1?: number
  average_2?: number
  average_all_false?: number
  most_common_string?: string
}

export type QuestionData = {
  status: number
  message: string
  data: {
    female: GenderData
    male: GenderData
  }
}

export type ResponseData = {
  status: number
  message: string
  data: Record<string, QuestionData>
}

const apiUrl = 'https://jawhealth.site/php/get_data.php'

export const getData = async (): Promise<ResponseData> => {
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data: ResponseData = await response.json()
    return { status: data.status, message: data.message, data: data.data }
  } catch (error) {
    console.error('Failed to fetch data:', error)
    if (error instanceof Error) {
      return {
        status: 400,
        message: error.message,
        data: {},
      }
    } else {
      return {
        status: 400,
        message: 'An unknown error occurred',
        data: {},
      }
    }
  }
}
