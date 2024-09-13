import { useEffect, useState } from 'react'
const API_URL = 'https://cataas.com/cat/says/'

export const useCatImage = ({ fact }) => {
  const [imageURL, setImageURL] = useState()
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ').slice(0, 3).join(' ')
    // console.log(firstWord)
    setImageURL(`${API_URL}${firstWord}`)
  }, [fact])

  return { imageURL }
}
