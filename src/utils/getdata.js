const apiUrl = 'https://jawhealth.site/php/get_person.php'

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json() // or response.json() if the response is JSON
  })
  .then((data) => {
    console.log(data) // Print the data to the console
  })
  .catch((error) => {
    console.error('Fetch error:', error)
  })
