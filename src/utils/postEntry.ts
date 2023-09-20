import { entryData } from '@/views/formData'

const apiUrl = 'https://jawhealth.site/php/insert_entry.php'

export interface Feedback {
  type: 'success' | 'error'
  message: string
}

// Utility function to post data to your API
export const postEntry = async (data: entryData): Promise<Feedback> => {
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
      console.error('Error:', error.message)
      return { type: 'error', message: error.message }
    }
    console.error('Failed to post data:', error)
    return { type: 'error', message: String(error) }
  }
}
