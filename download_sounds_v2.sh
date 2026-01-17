#!/bin/bash

# Download better sound effects
echo "Downloading improved sound effects..."

# Shuffle sound - card shuffling
echo "Downloading shuffle sound..."
curl -L -o "public/sounds/shuffle.mp3" "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3" 2>&1 | tail -3

# Flip sound - card flip
echo "Downloading flip sound..."
curl -L -o "public/sounds/flip.mp3" "https://cdn.pixabay.com/download/audio/2022/03/10/audio_55a299a5b5.mp3" 2>&1 | tail -3

# Reveal sound - magical reveal
echo "Downloading reveal sound..."
curl -L -o "public/sounds/reveal.mp3" "https://cdn.pixabay.com/download/audio/2021/08/09/audio_9b5b8e8e8c.mp3" 2>&1 | tail -3

echo ""
echo "Sound download complete!"
ls -lh public/sounds/
