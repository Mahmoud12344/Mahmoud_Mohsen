#!/bin/bash

# Portfolio Development Server
# This script starts a local development server for the portfolio

echo "🚀 Starting Mahmoud Mohsen Portfolio Development Server..."
echo "📁 Project Directory: $(pwd)"
echo "🌐 Server will be available at: http://localhost:3000"
echo "⏹️  Press Ctrl+C to stop the server"
echo ""

# Check if live-server is installed
if ! command -v live-server &> /dev/null; then
    echo "📦 Installing live-server..."
    npm install -g live-server
fi

# Start the development server
live-server --port=3000 --open=/index.html --no-browser

