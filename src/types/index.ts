
export interface Golfer {
  id: string
  name: string
  nickname: string
  imageUrl: string
  worldRanking: number
  country: string
  birthDate: string
  turnedPro: string
  shortBio: string
  bio: string
  careerHighlights: string[]
  majorChampionships: string[]
  videoUrl?: string
}

export interface News {
  id: string
  title: string
  date: string
  imageUrl: string
  summary: string
  url: string
}