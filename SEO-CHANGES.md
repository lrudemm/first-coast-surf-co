# SEO Changes: First Coast Surf Co.

Live site: https://lrudemm.github.io/first-coast-surf-co/

## Site-wide

- **Header brand:** The site name in the header was an `<h1>` on every page. It is now a styled `<p class="site-name">` so each page has one page-topic `<h1>`. The CSS selector changed from `.brand h1` to `.brand .site-name` to keep the same look.
- **Logo alt text:** Unchanged. "First Coast Surf Co. logo" describes the logo.
- **Added `robots.txt`:** Allows all crawlers and points to the sitemap.
- **Added `sitemap.xml`:** Lists all 7 pages with absolute URLs.

## Per-page changes

### index.html (Home)

- **Title (before):** First Coast Surf Co. – Home
- **Title (after):** First Coast Surf Co. | Surf Lessons, Rentals & Surf Report
- **Meta description (added):** Book surf lessons, rent surfboards and wetsuits, and check today's surf conditions with First Coast Surf Co. in Jacksonville, Florida. Beginners welcome.
- **Heading fix:** The hero heading "Surfing the First Coast: Gathering and Guides" changed from `<h2>` to `<h1>`, so the home page has one page-topic `<h1>`. The h2/h3 sections below are unchanged.
- **Hero image alt (before):** Scenic view of surf breaks K59 and K61 in El Salvador
- **Hero image alt (after):** A surf trip to El Salvador organized by First Coast Surf Co., showing a scenic view of the K59 and K61 surf breaks
- **Open Graph (added):** og:title, og:description, og:image (absolute https URL to the hero photo), og:url, og:type = website

### about.html (About)

- **Title (before):** First Coast Surf Co. – About
- **Title (after):** About Us | First Coast Surf Co., Jacksonville Surf Shop
- **Meta description (added):** Learn about First Coast Surf Co., a surf shop in Jacksonville, Florida, open daily from 8 a.m. to 6 p.m. Find our hours, location, and contact details here.
- **Heading fix:** Page `<h1>` "About First Coast Surf Co." is now the only `<h1>`.

### services.html (Services)

- **Title (before):** First Coast Surf Co. – Services
- **Title (after):** Surf Lessons & Services, Jacksonville | First Coast Surf Co.
- **Meta description (added):** Private and group surf lessons for every skill level with First Coast Surf Co. in Jacksonville, from first stand-up to your first green-wave ride. Book now.
- **Heading fix:** Page `<h1>` "Services" is now the only `<h1>`.

### gear.html (Gear)

- **Title (before):** First Coast Surf Co. – Gear
- **Title (after):** Surf Board & Wetsuit Rentals | First Coast Surf Co.
- **Meta description (added):** Rent surfboards and wetsuits by the day or week from First Coast Surf Co. in Jacksonville, with sizes for kids and adults. Find the right board for you.
- **Heading fix:** Page `<h1>` "Gear" is now the only `<h1>`.

### report.html (Surf Report)

- **Title (before):** First Coast Surf Co. – Report
- **Title (after):** Surf Report for the First Coast | First Coast Surf Co.
- **Meta description (added):** Check today's surf conditions at six local breaks, from Ponte Vedra to Big Talbot Island, before you paddle out with First Coast Surf Co. in Jacksonville.
- **Heading fix:** Page `<h1>` "Surf Report" is now the only `<h1>`.

### events.html (Events)

- **Title (before):** First Coast Surf Co. – Events
- **Title (after):** Surf Trips and WSL Watch Parties | First Coast Surf Co.
- **Meta description (added):** Check the WSL watch party schedule and upcoming organized surf trips from First Coast Surf Co. in Jacksonville, Florida, and sign up for event notifications.
- **Heading fix:** Page `<h1>` changed from "Events" to "Surf Trips and WSL Watch Parties."
- **Content added:** A "WSL Watch Party Schedule" section listing the WSL Season Finale, Lexus Pipe Masters at Pipeline, Hawaii (contest window December 8–20, 2026), with watch party dates marked as coming soon. An "Upcoming Organized Surf Trips" section marked as coming soon.

### contact.html (Contact)

- **Title (before):** First Coast Surf Co. – Contact
- **Title (after):** Contact Us | First Coast Surf Co., Jacksonville Surf Shop
- **Meta description (added):** Contact First Coast Surf Co. in Jacksonville, Florida to ask a question, get WSL watch party notifications, or sign up for our newsletter through this form.
- **Heading fix:** Added a page `<h1>` "Contact Us." The existing `<h2>` "Contact First Coast Surf Co." is unchanged.

## Pending

- Replace the 1.2 MB hero image with a smaller version (about 1200×630 px) and update `og:image` to match.
