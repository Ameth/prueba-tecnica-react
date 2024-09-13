const API_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const res = await fetch(API_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}
