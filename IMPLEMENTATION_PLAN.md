# 🎴 Tarot Application - Complete Implementation Plan

## Project Overview

- **Location**: `/Users/Jason.Zhang/cerebras-code-cli/tarot`
- **Tech Stack**: Next.js 14+, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Howler.js
- **Features**: 78 Tarot cards, 12 spreads, Tarot of the Day, reading history, mystical design

## Confirmed Requirements

✅ Download 78 card images from Internet Archive (original quality)
✅ Sound effects enabled by default with mute toggle (no volume slider)
✅ Cache meanings locally for faster performance (7-day cache)
✅ Limit history to last 22 readings
✅ Display zodiac sign based on current date
✅ Tarot of the Day feature with positive meaning and best wishes
✅ Daily card changes at midnight (00:00)
✅ Include user's name in best wishes if provided (stored in localStorage)
✅ Daily card cached in localStorage (no regeneration on refresh)
✅ Copy to clipboard for sharing (not direct social media)
✅ History export in plain text format
✅ Custom mystical pattern for card back
✅ Desktop-first design
✅ High-quality animations (Framer Motion for complex, CSS for simple)

---

## Project Structure

```
/Users/Jason.Zhang/cerebras-code-cli/tarot/
├── app/
│   ├── layout.tsx (root layout with theme)
│   ├── page.tsx (landing page + Daily Card)
│   ├── daily-card/
│   │   └── page.tsx (dedicated daily card page)
│   ├── spreads/
│   │   └── page.tsx (spread selection)
│   ├── reading/
│   │   ├── [spreadId]/
│   │   │   └── page.tsx (reading interface)
│   │   └── layout.tsx (reading layout)
│   ├── history/
│   │   └── page.tsx (reading history - max 22)
│   └── api/
│       ├── meanings/
│       │   └── [source]/
│       │       └── route.ts (fetch meanings from different sources)
│       └── daily-card/
│           └── route.ts (generate daily card)
├── components/
│   ├── ui/ (shadcn components)
│   ├── Card.tsx (individual tarot card)
│   ├── CardFlip.tsx (flip animation wrapper)
│   ├── CardDeck.tsx (deck display)
│   ├── SpreadLayout.tsx (spread positioning)
│   ├── SpreadSelector.tsx (spread selection grid)
│   ├── ReadingDisplay.tsx (card meanings display)
│   ├── ShuffleAnimation.tsx (shuffle effect)
│   ├── MysticBackground.tsx (animated stars/particles)
│   ├── CardGlow.tsx (glowing card effects)
│   ├── SoundManager.tsx (sound effects with mute toggle)
│   ├── ZodiacDecorations.tsx (zodiac based on date)
│   ├── MeaningSourceSelector.tsx (select meaning source)
│   ├── MeaningCache.tsx (display cache status)
│   ├── ReadingHistory.tsx (history list - max 22)
│   ├── HistoryItem.tsx (individual history item)
│   ├── DailyCard.tsx (main daily card component)
│   ├── DailyCardDisplay.tsx (display with positive meaning)
│   ├── BestWishes.tsx (best wishes message with user name)
│   ├── DailyCardShare.tsx (copy to clipboard)
│   ├── UserNameInput.tsx (user name input)
│   └── CardBack.tsx (custom mystical pattern)
├── lib/
│   ├── tarot-data.ts (all 78 cards from metabismuth)
│   ├── spreads.ts (12 spread configurations)
│   ├── shuffle.ts (shuffle algorithms)
│   ├── storage.ts (localStorage helpers - max 22 readings)
│   ├── sound.ts (sound effect utilities)
│   ├── meaning-sources.ts (API integrations + 7-day cache)
│   ├── zodiac.ts (zodiac calculation based on date)
│   ├── daily-card.ts (daily card generation logic)
│   ├── clipboard.ts (copy to clipboard utilities)
│   ├── export.ts (plain text export)
│   └── utils.ts (utility functions)
├── public/
│   ├── cards/ (78 card images from Internet Archive - original quality)
│   │   ├── major/
│   │   │   ├── major_arcana_fool.png
│   │   │   ├── major_arcana_magician.png
│   │   │   └── ... (20 more)
│   │   └── minor/
│   │       ├── minor_arcana_cups_ace.png
│   │       ├── minor_arcana_wands_king.png
│   │       └── ... (56 more)
│   ├── sounds/ (3 audio files from Pixabay)
│   │   ├── card-flip.mp3
│   │   ├── shuffle.mp3
│   │   └── card-place.mp3
│   └── card-back.png (custom mystical pattern)
├── types/
│   └── tarot.ts (TypeScript interfaces)
└── package.json
```

---

## Implementation Phases

### Phase 1: Project Setup & Data Collection ✅ (PARTIALLY COMPLETE)

**Status**:

- ✅ Next.js project initialized
- ✅ Dependencies installed (framer-motion, lucide-react, howler, clsx, tailwind-merge)
- ✅ shadcn/ui initialized
- ✅ Basic components added (button, card, input)
- ⏳ Download 78 card images from Internet Archive
- ⏳ Download sound effects from Pixabay
- ⏳ Extract tarot data from metabismuth/tarot-json
- ⏳ Create custom mystical pattern for card back
- ⏳ Create data structures

**Commands to Complete Phase 1**:

```bash
cd /Users/Jason.Zhang/cerebras-code-cli/tarot

# Download card images from Internet Archive
# URL: https://archive.org/details/rider-waite-tarot
# Download all 78 PNG files and organize into public/cards/major/ and public/cards/minor/

# Download sound effects from Pixabay
# URL: https://pixabay.com/sound-effects/
# Download: card-flip.mp3, shuffle.mp3, card-place.mp3
# Save to public/sounds/

# Clone tarot data
git clone https://github.com/metabismuth/tarot-json temp-tarot-json
# Extract tarot.json and tarot-images.json
# Move to lib/ directory
rm -rf temp-tarot-json
```

---

### Phase 2: Core Components

**Components to Build**:

1. **types/tarot.ts** - TypeScript interfaces
2. **lib/tarot-data.ts** - All 78 cards data
3. **lib/spreads.ts** - 12 spread configurations
4. **components/CardBack.tsx** - Custom mystical pattern
5. **components/Card.tsx** - Individual tarot card
6. **components/CardFlip.tsx** - Framer Motion flip animation
7. **components/CardDeck.tsx** - Deck display
8. **components/ShuffleAnimation.tsx** - Shuffle effect
9. **components/SoundManager.tsx** - Sound effects with mute toggle
10. **lib/sound.ts** - Sound effect utilities

**Key Implementation Details**:

```typescript
// types/tarot.ts
export interface TarotCard {
  id: string
  name: string
  number: number
  type: "major" | "minor"
  suit?: "wands" | "cups" | "swords" | "pentacles"
  court?: "page" | "knight" | "queen" | "king"
  image: string
  keywords: string[]
  upright: {
    meaning: string
    keywords: string[]
    description: string
  }
  reversed: {
    meaning: string
    keywords: string[]
    description: string
  }
}

export interface DailyCard {
  date: string
  card: TarotCard
  positiveMeaning: string
  bestWishes: string
  zodiacSign: string
}

export interface Reading {
  id: string
  date: Date
  spread: string
  cards: {
    cardId: string
    position: string
    isReversed: boolean
  }[]
  meaningSource: string
}

export interface Spread {
  id: string
  name: string
  description: string
  cardCount: number
  positions: SpreadPosition[]
  layout: "linear" | "cross" | "circle" | "custom"
}

export interface SpreadPosition {
  id: string
  name: string
  description: string
  x: number
  y: number
}
```

---

### Phase 3: Spread System

**Components to Build**:

1. **components/SpreadSelector.tsx** - Grid of 12 spreads
2. **components/SpreadLayout.tsx** - Position cards in spread pattern

**12 Spreads**:

1. Single Card (1 card) - Daily guidance
2. Three Card (3 cards) - Past, Present, Future
3. Five Card (5 cards) - Past, Present, Hidden Influences, Advice, Outcome
4. Celtic Cross (10 cards) - Classic spread
5. Horseshoe (7 cards) - Horseshoe shape
6. Love Spread (5 cards) - Relationship focus
7. Career Spread (5 cards) - Work/career focus
8. Yes/No Spread (3 cards) - Decision making
9. Chakra Spread (7 cards) - Spiritual focus
10. Astrological Spread (12 cards) - Zodiac houses
11. Elemental Spread (4 cards) - Elemental balance
12. Mind-Body-Spirit (3 cards) - Holistic focus

---

### Phase 4: Reading Interface

**Components to Build**:

1. **components/ReadingDisplay.tsx** - Show card meanings
2. **components/MeaningSourceSelector.tsx** - Select meaning source
3. **components/MeaningCache.tsx** - Display cache status
4. **lib/meaning-sources.ts** - API integrations + 7-day cache

**Meaning Sources**:

- metabismuth (primary)
- tarotapi.dev
- LindseyB API
- Krates98 API

---

### Phase 5: Mystical Elements

**Components to Build**:

1. **components/MysticBackground.tsx** - Animated starfield (CSS)
2. **components/CardGlow.tsx** - Glowing effects (CSS)
3. **components/ZodiacDecorations.tsx** - Zodiac display
4. **lib/zodiac.ts** - Zodiac calculation

---

### Phase 6: History & Storage

**Components to Build**:

1. **components/ReadingHistory.tsx** - History list (max 22)
2. **components/HistoryItem.tsx** - Individual history item
3. **lib/storage.ts** - localStorage helpers
4. **lib/export.ts** - Plain text export

---

### Phase 7: Tarot of the Day Feature

**Components to Build**:

1. **components/DailyCard.tsx** - Main daily card component
2. **components/DailyCardDisplay.tsx** - Display with positive meaning
3. **components/BestWishes.tsx** - Best wishes message
4. **components/DailyCardShare.tsx** - Copy to clipboard
5. **components/UserNameInput.tsx** - User name input
6. **lib/daily-card.ts** - Daily card generation logic
7. **lib/clipboard.ts** - Copy to clipboard utilities

**Key Features**:

- Date-based seed for consistent daily card
- Changes at midnight (00:00)
- Cached in localStorage
- Positive meaning extraction
- Personalized best wishes with user name and zodiac sign

---

### Phase 8: Meaning Caching

**Implementation**:

- Cache meanings from all sources locally
- 7-day cache duration
- Automatic cache invalidation
- Show cache status in UI
- Manual cache refresh option

---

### Phase 9: Deployment

**Steps**:

1. Configure Vercel deployment
2. Optimize images and assets (keep original quality)
3. Set up environment variables
4. Deploy to Vercel

**Commands**:

```bash
bun install -g vercel
vercel
```

---

## Color Scheme

```css
/* Tailwind Configuration */
{
  theme: {
    extend: {
      colors: {
        background: '#0f0c29',      /* Deep mystical dark */
        foreground: '#e7d7ea',      /* Light purple-white */
        card: '#1a0b2e',            /* Dark purple */
        'card-foreground': '#e7d7ea',
        primary: '#b39ec2',         /* Mystical purple */
        'primary-foreground': '#0f0c29',
        secondary: '#ffd700',       /* Gold */
        'secondary-foreground': '#0f0c29',
        accent: '#d5bddb',          /* Light lavender */
        'accent-foreground': '#0f0c29',
        muted: '#2d1b4e',           /* Medium purple */
        'muted-foreground': '#c7adcd',
        border: '#4a3b69',          /* Purple border */
        gold: '#c9a227',            /* Metallic gold */
        'gold-light': '#ffd700',    /* Bright gold */
      },
      backgroundImage: {
        'mystical-gradient': 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        'card-glow': 'radial-gradient(circle, rgba(179,158,194,0.3) 0%, transparent 70%)',
        'gold-gradient': 'linear-gradient(135deg, #ffd700 0%, #c9a227 100%)',
      }
    }
  }
}
```

---

## Key Implementation Details

### Daily Card Generation (Cached, Midnight Change)

```typescript
// lib/daily-card.ts
export function generateDailyCard(date: Date = new Date()): DailyCard {
  const dateStr = date.toISOString().split("T")[0]
  const zodiacSign = getZodiacSign(date)
  const userName = getUserName()

  // Check if daily card is already cached for today
  const cached = getCachedDailyCard(dateStr)
  if (cached) {
    return cached
  }

  // Use date as seed for consistent daily card
  const seed = dateStr.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const cardIndex = seed % tarotCards.length
  const card = tarotCards[cardIndex]

  // Extract positive meaning
  const positiveMeaning = extractPositiveMeaning(card)

  // Generate best wishes with user name
  const bestWishes = generateBestWishes(card, zodiacSign, userName)

  const dailyCard: DailyCard = {
    date: dateStr,
    card,
    positiveMeaning,
    bestWishes,
    zodiacSign,
  }

  // Cache the daily card
  cacheDailyCard(dailyCard)

  return dailyCard
}
```

### Storage (Max 22 Readings)

```typescript
// lib/storage.ts
const MAX_READINGS = 22

export function saveReading(reading: Reading) {
  const readings = getReadings()
  readings.unshift(reading)

  // Keep only last 22 readings
  if (readings.length > MAX_READINGS) {
    readings.splice(MAX_READINGS)
  }

  localStorage.setItem("tarot-readings", JSON.stringify(readings))
}
```

### Plain Text Export

```typescript
// lib/export.ts
export function exportReadingsToPlainText(readings: Reading[]): string {
  let text = "=== Tarot Reading History ===\n\n"

  readings.forEach((reading, index) => {
    text += `Reading #${index + 1}\n`
    text += `Date: ${new Date(reading.date).toLocaleString()}\n`
    text += `Spread: ${reading.spread}\n`
    text += `Cards:\n`

    reading.cards.forEach((card, cardIndex) => {
      text += `  ${cardIndex + 1}. ${card.cardId} (${card.position})\n`
      text += `     ${card.isReversed ? "Reversed" : "Upright"}\n`
    })

    text += `Meaning Source: ${reading.meaningSource}\n`
    text += "\n" + "-".repeat(40) + "\n\n"
  })

  return text
}
```

---

## Animation Strategy

**Framer Motion (Complex Animations)**:

- Card flip (3D rotation)
- Shuffle animation (card movement)
- Page transitions
- Card placement in spreads
- List item animations
- Modal animations

**CSS Animations (Simple Effects)**:

- Twinkling stars (keyframes)
- Glow pulses (keyframes)
- Hover effects (transitions)
- Fade in/out (transitions)
- Scale effects (transitions)

---

## Desktop-First Design Considerations

1. **Layout**: Optimize for desktop screens (1920x1080 and above)
2. **Card Size**: Larger cards for better visibility on desktop (300x527px)
3. **Grid Layout**: Use CSS Grid for spread layouts
4. **Typography**: Larger font sizes for desktop readability (16px base)
5. **Spacing**: More generous spacing between elements (8px base unit)
6. **Hover Effects**: Enhanced hover effects for desktop mouse interaction
7. **Responsive**: Still mobile-friendly, but prioritize desktop experience

---

## Implementation Order

1. **Phase 1**: Project setup & data collection ⏳ (PARTIALLY COMPLETE)
2. **Phase 2**: Core components
3. **Phase 3**: Spread system
4. **Phase 4**: Reading interface
5. **Phase 5**: Mystical elements
6. **Phase 6**: History & storage
7. **Phase 7**: Tarot of the Day feature
8. **Phase 8**: Meaning caching
9. **Phase 9**: Deployment to Vercel

---

## Next Steps to Resume Implementation

1. **Complete Phase 1**:
   - Download 78 card images from Internet Archive
   - Download sound effects from Pixabay
   - Extract tarot data from metabismuth/tarot-json
   - Create custom mystical pattern for card back

2. **Start Phase 2**:
   - Create TypeScript interfaces (types/tarot.ts)
   - Create tarot data file (lib/tarot-data.ts)
   - Create spreads configuration (lib/spreads.ts)
   - Build core components

3. **Continue with remaining phases** in order

---

## Resources

- **Card Images**: https://archive.org/details/rider-waite-tarot
- **Sound Effects**: https://pixabay.com/sound-effects/
- **Tarot Data**: https://github.com/metabismuth/tarot-json
- **Meaning APIs**:
  - https://tarotapi.dev
  - https://tarot-api.com
  - https://github.com/krates98/tarotcardapi
