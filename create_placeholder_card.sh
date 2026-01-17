#!/bin/bash

# Create a placeholder card image using ImageMagick or basic tools
echo "Creating placeholder card image..."

# Check if ImageMagick is available
if command -v convert &> /dev/null; then
    echo "Using ImageMagick to create placeholder..."
    convert -size 200x300 xc:linear-gradient\(purple900,purple800\) \
        -fill gold -pointsize 24 -gravity center -annotate +0+0 "TAROT" \
        -fill gold -pointsize 12 -gravity south -annotate +0+20 "Card Image" \
        public/placeholder-card.png
    echo "Placeholder card created with ImageMagick"
else
    echo "ImageMagick not found. Creating simple placeholder..."
    # Create a simple SVG placeholder
    cat > public/placeholder-card.svg << 'SVG'
<svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4c1d95;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#6b21a8;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="200" height="300" fill="url(#purpleGradient)" stroke="#eab308" stroke-width="2"/>
  <circle cx="100" cy="150" r="60" fill="none" stroke="#eab308" stroke-width="2" opacity="0.5"/>
  <circle cx="100" cy="150" r="40" fill="none" stroke="#eab308" stroke-width="1" opacity="0.3"/>
  <text x="100" y="140" font-family="Arial" font-size="24" fill="#eab308" text-anchor="middle" font-weight="bold">TAROT</text>
  <text x="100" y="170" font-family="Arial" font-size="12" fill="#eab308" text-anchor="middle" opacity="0.8">Card Image</text>
</svg>
SVG
    echo "SVG placeholder created at public/placeholder-card.svg"
fi

echo ""
echo "Placeholder card created!"
ls -lh public/placeholder-card.*
