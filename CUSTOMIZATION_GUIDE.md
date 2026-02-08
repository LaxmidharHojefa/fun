# 💕 Valentine Proposal Website - Customization Guide

## Quick Customization Checklist

### 1. Replace the Couple Photo
**File:** `/src/app/components/SuccessScreen.tsx`  
**Line:** 9

```tsx
const couplePhotoUrl = "YOUR_PHOTO_URL_HERE";
```

Replace with:
- Your hosted image URL (recommended)
- Or keep the Unsplash placeholder

---

### 2. Customize Names
The names "Mohammed" and "Sakina" appear in several places:

#### IntroScreen.tsx (Line 13-14)
```tsx
const messages = [
  "Hi Sakina… ❤️",  // Change "Sakina" to her name
  "There's something I've been wanting to ask you…"
];

#### ProposalScreen.tsx (Line 18)
```tsx
Sakina, will you be my Valentine? ❤️
```

#### SuccessScreen.tsx (Line 44)
```tsx
alt="Mohammed and Sakina"
```

#### SuccessScreen.tsx (Line 48)
```tsx
Mohammed & Sakina - Forever ❤️
```

---

### 3. Personalize the Love Letter
**File:** `/src/app/components/LoveLetterModal.tsx`  
**Lines:** 60-95

Edit the letter content to add your personal message. The current letter is a template - make it yours!

```tsx
<p>My Dearest Sakina,</p>  {/* Change her name */}

{/* Edit all paragraphs to express your feelings */}

<p className="text-lg font-medium pt-4">
  Forever yours,<br />
  Mohammed ❤️  {/* Change your name */}
</p>
```

---

### 4. Add Background Music (Optional)
**File:** `/src/app/components/BackgroundMusic.tsx`  
**Line:** 17

```tsx
// audioRef.current.src = '/path-to-your-romantic-music.mp3';
```

Steps:
1. Add your music file to `/public/` folder (create it if it doesn't exist)
2. Uncomment the line above
3. Update the path: `audioRef.current.src = '/your-music.mp3';`

**Note:** Most browsers block autoplay. The user might need to interact with the page first.

---

### 5. Customize Valentine Week Messages
**File:** `/src/app/components/ValentineWeek.tsx`  
**Lines:** 4-12

Edit the messages for each day to make them more personal:

```tsx
const valentineWeekMessages = [
  { emoji: '💌', day: 'Rose Day', message: 'Your custom message here' },
  { emoji: '💍', day: 'Propose Day', message: 'Your custom message here' },
  // ... edit all 7 messages
];
```

---

### 6. Adjust Countdown Timer Date
**File:** `/src/app/components/CountdownTimer.tsx`  
**Line:** 12

The countdown currently targets Valentine's Day 2026. To change:

```tsx
const valentinesDay = new Date('2026-02-14T00:00:00');
```

Change to your desired date in format: `'YYYY-MM-DDTHH:MM:SS'`

---

## Color Customization

### Change Color Scheme
The website uses pink/rose/purple gradients. To customize:

**Search and replace in all component files:**
- `from-pink-500` → your color
- `to-rose-500` → your color
- `bg-pink-100` → your color

Common color classes used:
- Pink: `pink-50`, `pink-100`, `pink-400`, `pink-500`
- Rose: `rose-50`, `rose-100`, `rose-500`, `rose-600`
- Purple: `purple-100`, `purple-500`, `purple-900`

---

## Technical Notes

### File Structure
```
/src/app/
├── App.tsx                          # Main app with screen transitions
└── components/
    ├── IntroScreen.tsx              # Opening cinematic with typing effect
    ├── ProposalScreen.tsx           # Main proposal page
    ├── SuccessScreen.tsx            # Celebration page after "Yes"
    ├── EvasiveNoButton.tsx          # The impossible-to-click "No" button
    ├── Confetti.tsx                 # Confetti animation
    ├── FloatingParticles.tsx        # Background heart particles
    ├── ValentineWeek.tsx            # Valentine Week wishes
    ├── CountdownTimer.tsx           # Countdown to Valentine's Day
    ├── LoveLetterModal.tsx          # Hidden love letter (heart icon bottom-right)
    └── BackgroundMusic.tsx          # Background music handler
```

### Features Included
✅ Cinematic intro with typing animation  
✅ Smooth screen transitions  
✅ Evasive "No" button (moves away on hover/touch)  
✅ Full-screen confetti celebration  
✅ Floating heart particles  
✅ Countdown timer to Valentine's Day  
✅ Secret love letter modal (click heart icon)  
✅ Valentine Week personalized messages  
✅ Fully responsive (mobile & desktop)  
✅ Beautiful gradient backgrounds  
✅ Romantic animations throughout  

---

## Deployment Tips

### Option 1: Vercel (Recommended - Free)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (takes ~2 minutes)

### Option 2: Netlify (Free)
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Deploy

### Option 3: GitHub Pages
1. Build: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

---

## Testing Checklist

Before showing to Sakina, test:

- [ ] Desktop view looks good
- [ ] Mobile view works perfectly
- [ ] "No" button moves away (both mouse and touch)
- [ ] "Yes" button leads to success page
- [ ] Confetti appears after clicking "Yes"
- [ ] All names are customized
- [ ] Photo is replaced (if desired)
- [ ] Love letter is personalized
- [ ] Countdown timer shows correct date
- [ ] Secret heart button opens modal

---

## Pro Tips for Maximum Impact

1. **Test on her device type**: If she primarily uses mobile, test on mobile
2. **Share at the right time**: Valentine's morning for maximum romance
3. **Add a custom domain**: Makes it feel more special (optional)
4. **Take a screenshot**: Capture the moment when she says yes!
5. **Have a backup plan**: Screenshare or record the screen in case anything goes wrong

---

## Need Help?

Common issues:
- **Music not playing**: Browsers block autoplay. User must interact with page first
- **"No" button not moving**: Check browser console for errors
- **Images not loading**: Verify URL is publicly accessible

---

Made with ❤️ for an unforgettable proposal moment.

Good luck, Mohammed! 🎉
