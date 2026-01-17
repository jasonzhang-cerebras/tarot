#!/bin/bash

# Download sound effects from Pixabay
echo "Downloading sound effects..."

# Shuffle sound - card shuffling
echo "Downloading shuffle sound..."
curl -L -o "public/sounds/shuffle.mp3" "https://cdn.pixabay.com/download/audio/2022/03/24/audio_34b8777e61.mp3" 2>&1 | tail -3

# Flip sound - card flip
echo "Downloading flip sound..."
curl -L -o "public/sounds/flip.mp3" "https://cdn.pixabay.com/download/audio/2021/08/04/audio_12b0c7443c.mp3" 2>&1 | tail -3

# Reveal sound - magical reveal
echo "Downloading reveal sound..."
curl -L -o "public/sounds/reveal.mp3" "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3" 2>&1 | tail -3

echo ""
echo "Sound download complete!"
ls -lh public/sounds/
