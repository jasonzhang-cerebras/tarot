#!/bin/bash

# Tarot Card Downloader Script
# Downloads Rider-Waite Smith tarot cards from Internet Archive

echo "Starting tarot card download..."

# Create directories
mkdir -p public/cards/major public/cards/wands public/cards/cups public/cards/swords public/cards/pentacles

# Base URL for Internet Archive Rider-Waite Smith deck
BASE_URL="https://archive.org/download/rider-waite-smith-tarot-deck"

# Counter for progress
count=0
total=78

# Function to download with progress
download_card() {
    local url=$1
    local output=$2
    local name=$3
    
    count=$((count + 1))
    echo "[$count/$total] Downloading $name..."
    
    if curl -L -s -o "$output" "$url"; then
        if [ -f "$output" ] && [ -s "$output" ]; then
            echo "✓ Downloaded $name"
        else
            echo "✗ Failed to download $name (empty file)"
            rm -f "$output"
        fi
    else
        echo "✗ Failed to download $name"
    fi
}

# Download Major Arcana (22 cards)
echo "Downloading Major Arcana..."
download_card "${BASE_URL}/00_fool.png" "public/cards/major/major_arcana_fool.png" "The Fool"
download_card "${BASE_URL}/01_magician.png" "public/cards/major/major_arcana_magician.png" "The Magician"
download_card "${BASE_URL}/02_high_priestess.png" "public/cards/major/major_arcana_priestess.png" "The High Priestess"
download_card "${BASE_URL}/03_empress.png" "public/cards/major/major_arcana_empress.png" "The Empress"
download_card "${BASE_URL}/04_emperor.png" "public/cards/major/major_arcana_emperor.png" "The Emperor"
download_card "${BASE_URL}/05_hierophant.png" "public/cards/major/major_arcana_hierophant.png" "The Hierophant"
download_card "${BASE_URL}/06_lovers.png" "public/cards/major/major_arcana_lovers.png" "The Lovers"
download_card "${BASE_URL}/07_chariot.png" "public/cards/major/major_arcana_chariot.png" "The Chariot"
download_card "${BASE_URL}/08_strength.png" "public/cards/major/major_arcana_strength.png" "Strength"
download_card "${BASE_URL}/09_hermit.png" "public/cards/major/major_arcana_hermit.png" "The Hermit"
download_card "${BASE_URL}/10_wheel_of_fortune.png" "public/cards/major/major_arcana_wheel.png" "Wheel of Fortune"
download_card "${BASE_URL}/11_justice.png" "public/cards/major/major_arcana_justice.png" "Justice"
download_card "${BASE_URL}/12_hanged_man.png" "public/cards/major/major_arcana_hanged.png" "The Hanged Man"
download_card "${BASE_URL}/13_death.png" "public/cards/major/major_arcana_death.png" "Death"
download_card "${BASE_URL}/14_temperance.png" "public/cards/major/major_arcana_temperance.png" "Temperance"
download_card "${BASE_URL}/15_devil.png" "public/cards/major/major_arcana_devil.png" "The Devil"
download_card "${BASE_URL}/16_tower.png" "public/cards/major/major_arcana_tower.png" "The Tower"
download_card "${BASE_URL}/17_star.png" "public/cards/major/major_arcana_star.png" "The Star"
download_card "${BASE_URL}/18_moon.png" "public/cards/major/major_arcana_moon.png" "The Moon"
download_card "${BASE_URL}/19_sun.png" "public/cards/major/major_arcana_sun.png" "The Sun"
download_card "${BASE_URL}/20_judgement.png" "public/cards/major/major_arcana_judgement.png" "Judgement"
download_card "${BASE_URL}/21_world.png" "public/cards/major/major_arcana_world.png" "The World"

echo ""
echo "Download complete! Downloaded $count cards."
echo "Cards are saved in the public/cards/ directory"