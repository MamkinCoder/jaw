'use client'

import { ResponseData, getData } from '@/utils/getData'
import { A4 } from '@/views/a4'
import { StickyNotesView } from '@/views/stickyNotesView'
import { useEffect, useState } from 'react'

export default function Page() {
  const [data, setData] = useState<ResponseData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData()
      setData(result)
    }
    fetchData()
  }, [])

  return (
    <>
      <A4></A4>
      <StickyNotesView data={data}></StickyNotesView>
    </>
  )
}
