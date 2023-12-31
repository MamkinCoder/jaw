import { EntryData } from '@/views/formData'

const apiUrl = 'https://jawhealth.site/php/insert_entry.php'

export interface Feedback {
  status: 'success' | 'error'
  message: string
}

export const postEntry = async (data: EntryData): Promise<Feedback> => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
      return { status: 'error', message: error.message }
    }
    console.error('Failed to post data:', error)
    return { status: 'error', message: String(error) }
  }
}
