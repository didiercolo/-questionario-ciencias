#!/bin/bash

# Path to the Capacitor Android build.gradle file
CAPACITOR_GRADLE="node_modules/@capacitor/android/capacitor/build.gradle"

# Check if the file exists
if [ ! -f "$CAPACITOR_GRADLE" ]; then
  echo "Error: $CAPACITOR_GRADLE not found!"
  exit 1
fi

# Update Java version to 17
sed -i '' 's/sourceCompatibility JavaVersion.VERSION_21/sourceCompatibility JavaVersion.VERSION_17/g' "$CAPACITOR_GRADLE"
sed -i '' 's/targetCompatibility JavaVersion.VERSION_21/targetCompatibility JavaVersion.VERSION_17/g' "$CAPACITOR_GRADLE"

echo "Updated $CAPACITOR_GRADLE to use Java 17"
