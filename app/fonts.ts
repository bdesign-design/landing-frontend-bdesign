import localFont from 'next/font/local'

export const libreBaskerville = localFont({
  src: [
    {
      path: '../public/fonts/libre-baskerville/LibreBaskerville-VariableFont_wght.ttf',
      weight: '400 700',
      style: 'normal',
    },
    {
      path: '../public/fonts/libre-baskerville/LibreBaskerville-Italic-VariableFont_wght.ttf',
      weight: '400 700',
      style: 'italic',
    },
  ],
  variable: '--font-libre',
  display: 'swap',
})

export const storyScript = localFont({
  src: '../public/fonts/story-script/StoryScript-Regular.ttf',
  variable: '--font-story-script',
  display: 'swap',
})
