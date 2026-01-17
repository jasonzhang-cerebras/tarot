export function getZodiacSign(date: Date): string {
  const day = date.getDate()
  const month = date.getMonth() + 1

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return "Aries"
  }
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return "Taurus"
  }
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return "Gemini"
  }
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return "Cancer"
  }
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return "Leo"
  }
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return "Virgo"
  }
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return "Libra"
  }
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return "Scorpio"
  }
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return "Sagittarius"
  }
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return "Capricorn"
  }
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return "Aquarius"
  }
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return "Pisces"
  }

  return "Unknown"
}

export function getZodiacSymbol(sign: string): string {
  const symbols: Record<string, string> = {
    Aries: "♈",
    Taurus: "♉",
    Gemini: "♊",
    Cancer: "♋",
    Leo: "♌",
    Virgo: "♍",
    Libra: "♎",
    Scorpio: "♏",
    Sagittarius: "♐",
    Capricorn: "♑",
    Aquarius: "♒",
    Pisces: "♓",
  }

  return symbols[sign] || ""
}

export function getZodiacElement(sign: string): string {
  const elements: Record<string, string> = {
    Aries: "Fire",
    Leo: "Fire",
    Sagittarius: "Fire",
    Taurus: "Earth",
    Virgo: "Earth",
    Capricorn: "Earth",
    Gemini: "Air",
    Libra: "Air",
    Aquarius: "Air",
    Cancer: "Water",
    Scorpio: "Water",
    Pisces: "Water",
  }

  return elements[sign] || ""
}

export function getZodiacDescription(sign: string): string {
  const descriptions: Record<string, string> = {
    Aries: "Bold, ambitious, and fiercely independent",
    Taurus: "Reliable, patient, and devoted",
    Gemini: "Adaptable, outgoing, and intelligent",
    Cancer: "Intuitive, emotional, and deeply caring",
    Leo: "Creative, passionate, and generous",
    Virgo: "Analytical, practical, and hardworking",
    Libra: "Diplomatic, gracious, and fair-minded",
    Scorpio: "Resourceful, powerful, and brave",
    Sagittarius: "Optimistic, enthusiastic, and adventurous",
    Capricorn: "Disciplined, responsible, and self-control",
    Aquarius: "Progressive, original, and independent",
    Pisces: "Intuitive, artistic, and compassionate",
  }

  return descriptions[sign] || ""
}
