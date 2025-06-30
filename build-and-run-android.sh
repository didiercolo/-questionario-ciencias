#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting build process..."

# Build the web app
echo "🔨 Building web app..."
npm run build

# Add Android platform if not exists
if [ ! -d "android" ]; then
    echo "📱 Adding Android platform..."
    npx cap add android
fi

# Sync Capacitor with Android project
echo "🔄 Syncing Capacitor with Android project..."
npx cap sync android

# Build the Android app
echo "🔧 Building Android app..."
cd android
./gradlew assembleDebug

# Install the app on the emulator
echo "📲 Installing app on emulator..."
./gradlew installDebug

# Find and launch the main activity
PACKAGE_NAME=$(cat app/src/main/AndroidManifest.xml | grep "package" | sed 's/.*package="\([^"]*\)".*/\1/')
MAIN_ACTIVITY=$(cat app/src/main/AndroidManifest.xml | grep -A 1 "<activity" | grep "android:name" | head -1 | sed 's/.*android:name="\([^"]*\)".*/\1/' | sed 's/^\.//')
FULL_ACTIVITY="$PACKAGE_NAME$MAIN_ACTIVITY"

echo "🚀 Launching app: $FULL_ACTIVITY"
adb shell am start -n "$FULL_ACTIVITY" -a android.intent.action.MAIN -c android.intent.category.LAUNCHER

echo "✅ Done! The app should now be running on your emulator."
