# Bingwa Shambani – Case Study Website

A premium, high-performance product showcase for an AI-powered crop disease detection system.

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (Icons)

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd bingwa-shambani-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Folder Structure
```text
├── app/
│   ├── globals.css      # Design system & global styles
│   ├── layout.tsx       # Root layout with font setup
│   └── page.tsx         # Main single-page implementation
├── components/
│   └── ui-components.tsx # Reusable UI components (FeatureCard, StatCard, etc.)
├── public/              # Static assets (Placeholders, APK)
├── tailwind.config.ts   # Design system configuration
└── package.json         # Dependencies & scripts
```

## Adding Assets

### APK Download
Place your production APK in the `public/` directory and rename it to `bingwa-shambani.apk`. The CTA buttons are pre-configured to handle links.

### Screenshots
Replace the placeholders in `app/page.tsx` with your actual product screenshots:
1. Save images to `public/screenshots/`.
2. Update the `img` tags or background-image styles in the **Product Experience** section.

## Design System
- **Background**: `#0F0F14`
- **Primary**: `#FF4D8D`
- **Secondary**: `#FF8FB1`
- **Font**: Poppins (Google Fonts)
- **Style**: Modern dark UI with glassmorphism and subtle glow effects.

## Key Features
- **Scroll-triggered animations** via Framer Motion.
- **Responsive design** for mobile-first usability.
- **Modular components** for easy scalability.
- **Optimized performance** with Next.js App Router.
