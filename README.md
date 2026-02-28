# Dance Into Space - Website

A static website for Dance Into Space, a premier mixed-ability performing arts company focused on contemporary dance, under the artistic direction of Ondiege Matthew.

## Sitemap

### Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/index.html` | Main landing page with hero carousel, about section, team members, programs preview, FAQs, and contact form |
| Blog | `/blog.html` | Blog listing page displaying blog posts from the database |
| Blog Post | `/blog-post.html` | Individual blog post page (uses `?slug=` query parameter) |
| Updates | `/updates.html` | Events page showing upcoming and past events from the database |
| Gallery | `/gallery.html` | Photo gallery displaying images from the database |
| Programs | `/programs.html` | Programs page with database-driven programs + static community projects |
| Dance Center | `/dance-center.html` | Information about the Siaya Dance Residency Centre |
| FAQs | `/faqs.html` | Frequently asked questions about the organization |
| Admin | `/admin/index.html` | Admin dashboard for managing content (requires Supabase authentication) |

### Shared Components

| Component | File | Description |
|-----------|------|-------------|
| Navigation | `/includes/nav.html` | Fixed top navigation with logo, menu links (Blog, Updates, Gallery, Programs, Dance Center, FAQs, Contact), and Donate button |
| Footer | `/includes/footer.html` | Fixed bottom footer with copyright and "A Mama Tech Product" text |
| Social Icons | `/includes/socials.html` | Fixed social media icons on right side (Facebook, X/Twitter, Instagram, YouTube) |
| Shared JS | `/js/shared.js` | JavaScript for loading nav/footer/socials, mobile menu toggle, and sticky footer |

## Features

### Content Management
- **Programs**: Add/edit programs via Admin panel (stored in Supabase)
- **Gallery**: Add/edit gallery items via Admin panel
- **Blog Posts**: Add/edit blog posts via Admin panel
- **Updates/Events**: Add/edit events via Admin panel

### Navigation
- Responsive desktop/mobile navigation
- Donate button in nav (links to donation page)
- Social media links (Facebook, X, Instagram, YouTube)

### Sections
- **Home**: Hero carousel, About Us, Team, Programs preview, FAQs, Contact form with map
- **Programs**: Database-driven programs + Community Projects (Breaking Barriers, Jukumu Letu, Dance Meets Roots)
- **Gallery**: Grid layout of images from database
- **Blog**: Card layout of blog posts
- **Updates**: Upcoming and past events

## Tech Stack

- **Frontend**: HTML, Tailwind CSS
- **Backend/Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth (for admin)
- **CDN**: Tailwind CSS, Bootstrap, jsDelivr

## Supabase Tables

```sql
programs
- id (uuid)
- title (text)
- content (text)
- image (text)
- created_at (timestamp)

gallery_items
- id (uuid)
- title (text)
- description (text)
- image (text)
- category (text)
- created_at (timestamp)

blog_posts
- id (uuid)
- title (text)
- content (text)
- cover_image (text)
- slug (text)
- published_at (timestamp)
- created_at (timestamp)

updates
- id (uuid)
- title (text)
- content (text)
- event_date (date)
- location (text)
- created_at (timestamp)
```

## Image Assets

Located in `/images/`:
- `logo.jpeg` - Site logo
- `ondiege.jpeg`, `alacoque.jpeg`, `victor.jpeg` - Team member photos
- `Ondiege4.jpg`, `agwata_show_three.jpg`, `duet_nyanam.jpg`, `trio_nyanam.jpg` - Hero carousel images
- `duet4.png`, `corruption.jpg`, `man-ball.png` - Community project images
- `sex education.jpeg`, `duet.png`, `residency6.jpg` - Program images
- `coming_soon.jpg` - Placeholder image
- `default_cover_image.jpg` - Default blog post cover
- `kneeling.jpeg`, `chorus.png` - Additional images

## Contact

- Email: info@danceintospace.org
- Phone: +254 754 483 075
- Location: Siaya, Kenya

## Credits

- Design: TichLabs
- Powered by Mama Tech
