# Subash Reghan — Portfolio

Personal portfolio for **Subash Reghan**, a Digital Marketer and Python Full Stack Developer working at the intersection of technology and business.

## About

The site presents Subash's current role as Digital Marketer at SHA Innovative Technologies, B.Sc. Computer Science education, professional journey, and long-term Reghan Empire vision.

## Skills

- Development: Python, Django, HTML, CSS, JavaScript, SQL
- Marketing: Digital Marketing, Social Media Marketing, Content Marketing, Google Ads, Meta Ads
- Creative: Video Editing, DaVinci Resolve, CapCut, Canva, Figma

## Services

- Digital Marketing
- Website Development
- Web Application Development
- Video Editing

## Technologies

- Next.js 14 with the App Router
- React 18
- TypeScript
- Tailwind CSS, PostCSS, and Autoprefixer
- Lucide React

## Portfolio

The portfolio includes experience, impact metrics, client video work, an intentionally empty projects pipeline for future additions, education, resume download, and direct contact links.

## Getting Started

Requirements: Node.js 18.17 or later and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Local Development

The optional `.env.example` file documents the public site URL. To use it locally:

```bash
copy .env.example .env.local
```

The equivalent macOS/Linux command is `cp .env.example .env.local`.

## Build

```bash
npm run lint
npm run build
npm run start
```

## Environment Variables

The site reads one optional public variable:

```text
NEXT_PUBLIC_SITE_URL=https://reghan.in
```

It controls the canonical URL, Open Graph URL, robots sitemap URL, and generated sitemap URL. No API keys, passwords, tokens, or backend credentials are required. Never commit `.env.local` or other environment-specific files.

## Deployment

Vercel can automatically detect this Next.js application. Import the GitHub repository, keep the detected Next.js preset and default build command, and set `NEXT_PUBLIC_SITE_URL` to the production domain when it differs from the documented fallback.

## Project Structure

```text
public/assets/       Static images, videos, and resume
src/app/             App Router entry point, metadata, robots, sitemap, and styles
src/components/      Portfolio UI sections
src/data/            Portfolio content and typed data
next.config.mjs      Next.js configuration and security headers
package.json         npm scripts and dependencies
```

## Future Improvements

- Add verified projects as they become available.
- Continue optimizing media formats and delivery as the portfolio grows.
- Add a backend contact workflow only when a specific service is selected.

## License

Private portfolio repository. All rights reserved by Subash Reghan.
