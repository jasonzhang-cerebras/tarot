# Mystic Tarot

A beautiful, mystical tarot reading application featuring authentic Rider-Waite Smith cards, particle effects, and smooth animations. Native desktop application for macOS and Linux!

## Features

- **Authentic Rider-Waite Smith Deck**: 78 cards from the 1909 "Roses & Lilies" edition
- **12 Spread Types**: Choose from various tarot spreads including:
  - Single Card (Daily Card)
  - Three Card Spread (Past, Present, Future)
  - Celtic Cross
  - Relationship Spread
  - Career Spread
  - Yes/No Spread
  - Four Directions Spread
  - Five Card Spread
  - Seven Card Spread
  - Star Spread
  - Mandala Spread
  - Horseshoe Spread
- **Interactive Card Selection**: Click cards to reveal their meanings
- **Card Reversals**: Cards can appear upright or reversed with different interpretations
- **Particle Effects**: Beautiful floating particles in gold, white, and silver
- **Smooth Animations**: 3D card flip animations and hover effects
- **Reading History**: Save and view your past readings
- **Native Desktop App**: macOS and Linux support with Tauri
- **Local Storage**: Persistent data storage using Rust backend
- **Sound Effects**: Card flip, shuffle, and reveal sounds

## Tech Stack

- **Framework**: Next.js 16.1.3 with App Router (for static export)
- **Desktop Runtime**: Tauri 2.9.6
- **Backend**: Rust with serde for data persistence
- **Runtime**: Bun
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Particles**: @tsparticles/react
- **Typography**: Cinzel (Google Fonts)

## Getting Started

### Prerequisites

- Bun runtime installed
- Rust toolchain (for desktop app builds)
- Xcode Command Line Tools (for macOS builds)

### Installation

```bash
cd /Users/Jason.Zhang/cerebras-code-cli/tarot
bun install
```

### Desktop App Development

```bash
bun run tauri:dev
```

This will launch the native desktop application with hot-reloading.

### Building for Production

```bash
bun run tauri:build
```

This creates:

- macOS App: `src-tauri/target/release/bundle/macos/Mystic Tarot.app`
- DMG Installer: `src-tauri/target/release/bundle/dmg/Mystic Tarot_0.0.0_x64.dmg`

## Important

**Always run commands from the tarot project directory:**

```bash
cd /Users/Jason.Zhang/cerebras-code-cli/tarot
```

The project uses Next.js to generate static HTML/CSS/JS files that are bundled into the desktop application. The `bun run build` command creates the static export in the `out/` directory, which Tauri then packages into the native app.

## Project Structure

```
tarot/
├── app/                    # Next.js app directory
│   ├── history/           # Reading history page
│   ├── reading/           # Reading pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── tarot/             # Tarot-specific components
│   │   ├── card.tsx       # Individual card component
│   │   ├── card-back.tsx  # Card back design
│   │   ├── card-flip.tsx  # 3D flip animation
│   │   ├── daily-card-display.tsx
│   │   ├── particles-background.tsx
│   │   ├── reading-display.tsx
│   │   ├── spread-selector.tsx
│   │   └── ...
│   └── ui/                # UI components
├── lib/                   # Utility functions
│   ├── tarot-data.ts      # Card data and meanings
│   ├── spreads.ts         # Spread configurations
│   ├── shuffle.ts         # Card shuffling logic
│   └── ...
├── public/
│   ├── cards/             # Card images
│   │   ├── major/         # Major Arcana (22 cards)
│   │   ├── cups/          # Cups suit (14 cards)
│   │   ├── pentacles/     # Pentacles suit (14 cards)
│   │   ├── swords/        # Swords suit (14 cards)
│   │   └── wands/         # Wands suit (14 cards)
│   └── sounds/            # Sound effects
└── types/
    └── tarot.ts           # TypeScript types
```

## Card Data

The application includes all 78 cards from the Rider-Waite Smith deck:

### Major Arcana (22 cards)

The Fool, The Magician, The High Priestess, The Empress, The Emperor, The Hierophant, The Lovers, The Chariot, Strength, The Hermit, Wheel of Fortune, Justice, The Hanged Man, Death, Temperance, The Devil, The Tower, The Star, The Moon, The Sun, Judgement, The World

### Minor Arcana (56 cards)

- **Cups**: Ace through King (14 cards)
- **Pentacles**: Ace through King (14 cards)
- **Swords**: Ace through King (14 cards)
- **Wands**: Ace through King (14 cards)

Each card includes:

- Name and image
- Upright meaning
- Reversed meaning
- Keywords

## Customization

### Colors

The color scheme is defined in `app/globals.css`. The theme uses:

- Primary colors: Purple and gold tones
- Accent colors: Yellow/gold for highlights
- Background: Animated gradient

### Particles

Particle effects are configured in `components/tarot/particles-background.tsx`:

- Colors: Gold (#ffd700), White (#ffffff), Silver (#c0c0c0)
- Count: 100 particles (desktop)
- Speed: 0.5
- Interactive: Hover and click effects

### Animations

Card flip duration is set to 0.6 seconds in:

- `components/tarot/card-flip.tsx`
- `components/tarot/card.tsx`

## License

MIT

## Credits

- Card images: Rider-Waite Smith deck (1909 "Roses & Lilies" edition) from Wikimedia Commons
- Font: Cinzel by Natanael Gama
- Icons: Lucide React
