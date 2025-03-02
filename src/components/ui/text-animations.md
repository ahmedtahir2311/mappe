# Text Animation Component

A versatile component for creating engaging text animations with multiple styles and customization
options.

## Features

- **Multiple Animation Styles**: Choose from bounce, wave, pulse, shake, flip, fade, scale, or none
- **Sequential or Simultaneous Animation**: Animate characters one after another or all at once
- **Hover Activation**: Trigger animations only when users hover over the text
- **Customizable Timing**: Control the duration and delay between character animations
- **Infinite or One-time Animation**: Choose between infinite looping or single animations
- **Custom Animation Support**: Define your own animation styles using custom classes
- **Callback Function**: Execute code when animation completes

## Usage

```tsx
import TextAnimation from '@/components/ui/text-animation';

// Basic usage with default bounce animation
<TextAnimation text="Hello World" />

// With wave animation
<TextAnimation
  text="WAVE EFFECT"
  animationStyle="wave"
/>

// With pulse animation
<TextAnimation
  text="PULSE EFFECT"
  animationStyle="pulse"
  duration={800}
/>

// Animate on hover
<TextAnimation
  text="HOVER ME"
  hoverToAnimate={true}
  animationStyle="shake"
/>

// Custom animation
<TextAnimation
  text="CUSTOM ANIMATION"
  customAnimation="transform rotate-12 scale-110"
/>

// Sequential animation (one character at a time)
<TextAnimation
  text="ONE BY ONE"
  sequential={true}
  staggerDelay={100}
/>

// All characters animate together
<TextAnimation
  text="ALL AT ONCE"
  sequential={false}
/>

// One-time animation with callback
<TextAnimation
  text="ONE TIME"
  infinite={false}
  onComplete={() => console.log('Animation complete')}
/>
```

## Animation Styles

- `bounce`: Characters move up and down
- `wave`: Characters move in a wave-like pattern
- `pulse`: Characters grow and shrink
- `shake`: Characters shake from side to side
- `flip`: Characters flip on the X-axis
- `fade`: Characters fade in and out
- `scale`: Characters scale up and down
- `none`: No animation (useful for custom animations)

## Props

| Prop                  | Type             | Default                             | Description                                     |
| --------------------- | ---------------- | ----------------------------------- | ----------------------------------------------- |
| `text`                | `string`         | (required)                          | The text to animate                             |
| `className`           | `string`         | `''`                                | Additional classes for the container            |
| `charClassName`       | `string`         | `''`                                | Classes applied to each character               |
| `activeCharClassName` | `string`         | `'text-[rgb(var(--primary-main))]'` | Classes applied to active characters            |
| `animationStyle`      | `AnimationStyle` | `'bounce'`                          | The animation style to use                      |
| `delay`               | `number`         | `0`                                 | Delay before animation starts (ms)              |
| `duration`            | `number`         | `300`                               | Duration of each character's animation (ms)     |
| `infinite`            | `boolean`        | `true`                              | Whether the animation repeats indefinitely      |
| `sequential`          | `boolean`        | `true`                              | Whether to animate characters one after another |
| `staggerDelay`        | `number`         | `50`                                | Delay between each character's animation (ms)   |
| `onComplete`          | `() => void`     | -                                   | Callback function when animation completes      |
| `customAnimation`     | `string`         | `''`                                | Custom Tailwind classes for animation           |
| `hoverToAnimate`      | `boolean`        | `false`                             | Whether to animate only on hover                |

## Implementation Details

The component uses React's `useState` and `useEffect` hooks to manage the animation state. The
animation is implemented using CSS transitions and transforms, making it performant and smooth.

For sequential animations, each character is animated with a staggered delay, creating a wave-like
effect. For simultaneous animations, all characters animate together.

The component is fully typed with TypeScript and supports all the customization options you need to
create engaging text animations.

## Examples in the Hero Banner

The hero banner uses the TextAnimation component in two places:

1. **Top "WEB DESIGNER" Text**: Uses the wave animation style with a subtle wave-like motion

   ```tsx
   <TextAnimation
     text="WEB DESIGNER"
     animationStyle="wave"
     charClassName="mx-[1px]"
     activeCharClassName="opacity-100"
     duration={600}
     staggerDelay={100}
     sequential={true}
     infinite={true}
     delay={1000}
   />
   ```

2. **Bottom "WEB DESIGNER" Text**: Uses the bounce animation style with a pronounced bounce effect
   ```tsx
   <TextAnimation
     text="WEB DESIGNER"
     animationStyle="bounce"
     charClassName="mx-[2px]"
     activeCharClassName="text-[rgb(var(--primary-main))]"
     duration={400}
     staggerDelay={80}
     sequential={true}
     infinite={true}
   />
   ```

## Accessibility

- The component uses semantic HTML elements
- Animations respect the user's reduced motion preferences
- All text remains readable during animations
