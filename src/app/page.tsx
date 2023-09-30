'use client'

import { ResponseData, getData } from '@/utils/getData'
import { A4 } from '@/views/a4'
import { StickyNotesView } from '@/views/stickyNotesView'
import { useEffect, useState } from 'react'
import { PuffLoader } from 'react-spinners'

export default function Page() {
  const [data, setData] = useState<ResponseData | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData()
      if (result.status === 400) {
        setErrorMessage('An error occurred while fetching data.') // set error message
      } else {
        setData(result)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <A4></A4>
      {!data && <PuffLoader size={300} color="#05668d" />}
      {errorMessage && <div>{errorMessage}</div>}
      {data && <StickyNotesView data={data}></StickyNotesView>}
    </>
  )
}
