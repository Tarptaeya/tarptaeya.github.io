#!/bin/zsh

alias chrome="/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"
chrome --headless --disable-gpu --print-to-pdf-no-header --print-to-pdf="Anmol GAUTAM.pdf" "$1"
