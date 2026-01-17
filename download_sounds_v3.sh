#!/bin/bash

# Download sound effects from reliable sources
echo "Downloading sound effects from Freesound..."

# Shuffle sound - card shuffling
echo "Downloading shuffle sound..."
curl -L -o "public/sounds/shuffle.mp3" "https://cdn.freesound.org/previews/316/316847_5264086-lq.mp3" 2>&1 | tail -3

# Flip sound - card flip
echo "Downloading flip sound..."
curl -L -o "public/sounds/flip.mp3" "https://cdn.freesound.org/previews/567/567950_12499972-lq.mp3" 2>&1 | tail -3

# Reveal sound - magical chime
echo "Downloading reveal sound..."
curl -L -o "public/sounds/reveal.mp3" "https://cdn.freesound.org/previews/534/534929_12499972-lq.mp3" 2>&1 | tail -3

echo ""
echo "Sound download complete!"
ls -lh public/sounds/
