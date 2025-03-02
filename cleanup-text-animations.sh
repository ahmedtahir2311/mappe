#!/bin/bash

# Script to safely remove the old text animation components
# that have been consolidated into text-animation.tsx

echo "Starting cleanup of old text animation components..."

# Check if the new component exists
if [ ! -f "src/components/ui/text-animation.tsx" ]; then
  echo "Error: The new text-animation.tsx component doesn't exist!"
  echo "Aborting cleanup to prevent data loss."
  exit 1
fi

# Check if the hero banner has been updated
grep -q "import TextAnimation from '@/components/ui/text-animation';" src/components/module/hero-banner.tsx
if [ $? -ne 0 ]; then
  echo "Warning: The hero banner doesn't seem to be using the new TextAnimation component."
  echo "Please make sure all usages have been migrated before removing the old components."
  read -p "Continue anyway? (y/n) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cleanup aborted."
    exit 1
  fi
fi

# Remove the old components
echo "Removing bouncing-text.tsx..."
rm -f src/components/ui/bouncing-text.tsx

echo "Removing animated-text.tsx..."
rm -f src/components/ui/animated-text.tsx

echo "Cleanup completed successfully!"
echo "The old components have been removed and replaced with the unified TextAnimation component." 