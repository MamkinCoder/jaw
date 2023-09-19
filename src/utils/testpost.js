const apiUrl = 'https://jawhealth.site/php/get_person.php'

const testEntry = {
  age: 25,
  gender: true,
  q1: [true, false, true],
  q2: '\\',
  q3: [true, false, true],
  q4: [false, true, false],
  q5: [true, true, true],
  q6: [false, true, true],
  q7: [true, true, false],
  q8: [false, true],
  q9: [true, true, false],
  q10: [false, true, true],
  q11: 'Test String',
  q12: [true, false, true],
  q13: [false, true, true],
}

fetch(apiUrl, {
  method: 'POST',
  body: JSON.stringify(testEntry),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => res.text())
  .then((body) => console.log(body))
  .catch((error) => console.error('Error:', error))
