import { entryData } from '@/views/formData'

const convertToFormData = (data: entryData): FormData => {
  let formData = new FormData()
  for (let key in data) {
    if (Array.isArray(data[key])) {
      data[key].forEach((item, index) => {
        formData.append(`${key}[${index}]`, item)
      })
    } else {
      formData.append(key, data[key])
    }
  }
  return formData
}

let entry: entryData = {
  age: 30,
  gender: true,
  // other fields...
}

let formData = convertToFormData(entry)

// Now you can send formData to the server
