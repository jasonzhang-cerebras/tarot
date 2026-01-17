#!/bin/bash

# Download Minor Arcana cards
BASE_URL="https://archive.org/download/rider-waite-smith-tarot-deck"
count=22
total=78

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

echo "Downloading Wands (Ace - King)..."
download_card "${BASE_URL}/wands_ace.png" "public/cards/wands/wands_ace.png" "Ace of Wands"
download_card "${BASE_URL}/wands_two.png" "public/cards/wands/wands_two.png" "Two of Wands"
download_card "${BASE_URL}/wands_three.png" "public/cards/wands/wands_three.png" "Three of Wands"
download_card "${BASE_URL}/wands_four.png" "public/cards/wands/wands_four.png" "Four of Wands"
download_card "${BASE_URL}/wands_five.png" "public/cards/wands/wands_five.png" "Five of Wands"
download_card "${BASE_URL}/wands_six.png" "public/cards/wands/wands_six.png" "Six of Wands"
download_card "${BASE_URL}/wands_seven.png" "public/cards/wands/wands_seven.png" "Seven of Wands"
download_card "${BASE_URL}/wands_eight.png" "public/cards/wands/wands_eight.png" "Eight of Wands"
download_card "${BASE_URL}/wands_nine.png" "public/cards/wands/wands_nine.png" "Nine of Wands"
download_card "${BASE_URL}/wands_ten.png" "public/cards/wands/wands_ten.png" "Ten of Wands"
download_card "${BASE_URL}/wands_page.png" "public/cards/wands/wands_page.png" "Page of Wands"
download_card "${BASE_URL}/wands_knight.png" "public/cards/wands/wands_knight.png" "Knight of Wands"
download_card "${BASE_URL}/wands_queen.png" "public/cards/wands/wands_queen.png" "Queen of Wands"
download_card "${BASE_URL}/wands_king.png" "public/cards/wands/wands_king.png" "King of Wands"

echo "Downloading Cups (Ace - King)..."
download_card "${BASE_URL}/cups_ace.png" "public/cards/cups/cups_ace.png" "Ace of Cups"
download_card "${BASE_URL}/cups_two.png" "public/cards/cups/cups_two.png" "Two of Cups"
download_card "${BASE_URL}/cups_three.png" "public/cards/cups/cups_three.png" "Three of Cups"
download_card "${BASE_URL}/cups_four.png" "public/cards/cups/cups_four.png" "Four of Cups"
download_card "${BASE_URL}/cups_five.png" "public/cards/cups/cups_five.png" "Five of Cups"
download_card "${BASE_URL}/cups_six.png" "public/cards/cups/cups_six.png" "Six of Cups"
download_card "${BASE_URL}/cups_seven.png" "public/cards/cups/cups_seven.png" "Seven of Cups"
download_card "${BASE_URL}/cups_eight.png" "public/cards/cups/cups_eight.png" "Eight of Cups"
download_card "${BASE_URL}/cups_nine.png" "public/cards/cups/cups_nine.png" "Nine of Cups"
download_card "${BASE_URL}/cups_ten.png" "public/cards/cups/cups_ten.png" "Ten of Cups"
download_card "${BASE_URL}/cups_page.png" "public/cards/cups/cups_page.png" "Page of Cups"
download_card "${BASE_URL}/cups_knight.png" "public/cards/cups/cups_knight.png" "Knight of Cups"
download_card "${BASE_URL}/cups_queen.png" "public/cards/cups/cups_queen.png" "Queen of Cups"
download_card "${BASE_URL}/cups_king.png" "public/cards/cups/cups_king.png" "King of Cups"

echo "Downloading Swords (Ace - King)..."
download_card "${BASE_URL}/swords_ace.png" "public/cards/swords/swords_ace.png" "Ace of Swords"
download_card "${BASE_URL}/swords_two.png" "public/cards/swords/swords_two.png" "Two of Swords"
download_card "${BASE_URL}/swords_three.png" "public/cards/swords/swords_three.png" "Three of Swords"
download_card "${BASE_URL}/swords_four.png" "public/cards/swords/swords_four.png" "Four of Swords"
download_card "${BASE_URL}/swords_five.png" "public/cards/swords/swords_five.png" "Five of Swords"
download_card "${BASE_URL}/swords_six.png" "public/cards/swords/swords_six.png" "Six of Swords"
download_card "${BASE_URL}/swords_seven.png" "public/cards/swords/swords_seven.png" "Seven of Swords"
download_card "${BASE_URL}/swords_eight.png" "public/cards/swords/swords_eight.png" "Eight of Swords"
download_card "${BASE_URL}/swords_nine.png" "public/cards/swords/swords_nine.png" "Nine of Swords"
download_card "${BASE_URL}/swords_ten.png" "public/cards/swords/swords_ten.png" "Ten of Swords"
download_card "${BASE_URL}/swords_page.png" "public/cards/swords/swords_page.png" "Page of Swords"
download_card "${BASE_URL}/swords_knight.png" "public/cards/swords/swords_knight.png" "Knight of Swords"
download_card "${BASE_URL}/swords_queen.png" "public/cards/swords/swords_queen.png" "Queen of Swords"
download_card "${BASE_URL}/swords_king.png" "public/cards/swords/swords_king.png" "King of Swords"

echo "Downloading Pentacles (Ace - King)..."
download_card "${BASE_URL}/pentacles_ace.png" "public/cards/pentacles/pentacles_ace.png" "Ace of Pentacles"
download_card "${BASE_URL}/pentacles_two.png" "public/cards/pentacles/pentacles_two.png" "Two of Pentacles"
download_card "${BASE_URL}/pentacles_three.png" "public/cards/pentacles/pentacles_three.png" "Three of Pentacles"
download_card "${BASE_URL}/pentacles_four.png" "public/cards/pentacles/pentacles_four.png" "Four of Pentacles"
download_card "${BASE_URL}/pentacles_five.png" "public/cards/pentacles/pentacles_five.png" "Five of Pentacles"
download_card "${BASE_URL}/pentacles_six.png" "public/cards/pentacles/pentacles_six.png" "Six of Pentacles"
download_card "${BASE_URL}/pentacles_seven.png" "public/cards/pentacles/pentacles_seven.png" "Seven of Pentacles"
download_card "${BASE_URL}/pentacles_eight.png" "public/cards/pentacles/pentacles_eight.png" "Eight of Pentacles"
download_card "${BASE_URL}/pentacles_nine.png" "public/cards/pentacles/pentacles_nine.png" "Nine of Pentacles"
download_card "${BASE_URL}/pentacles_ten.png" "public/cards/pentacles/pentacles_ten.png" "Ten of Pentacles"
download_card "${BASE_URL}/pentacles_page.png" "public/cards/pentacles/pentacles_page.png" "Page of Pentacles"
download_card "${BASE_URL}/pentacles_knight.png" "public/cards/pentacles/pentacles_knight.png" "Knight of Pentacles"
download_card "${BASE_URL}/pentacles_queen.png" "public/cards/pentacles/pentacles_queen.png" "Queen of Pentacles"
download_card "${BASE_URL}/pentacles_king.png" "public/cards/pentacles/pentacles_king.png" "King of Pentacles"

echo ""
echo "Minor Arcana download complete! Total cards downloaded: $count"
