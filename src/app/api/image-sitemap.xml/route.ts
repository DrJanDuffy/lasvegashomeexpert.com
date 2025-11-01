import { NextResponse } from 'next/server';

// Get current date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Image sitemap for property images and important site images
// This helps Google discover and index images for image search
const imagePages = [
  // Homepage images
  {
    url: 'https://www.lasvegashomeexpert.com',
    images: [
      {
        loc: 'https://www.lasvegashomeexpert.com/dr-jan-duffy.jpg',
        title: 'Dr. Jan Duffy - Las Vegas Real Estate Expert',
        caption: 'Dr. Jan Duffy, luxury real estate specialist serving Las Vegas since 2013',
      },
      {
        loc: 'https://www.lasvegashomeexpert.com/og-image.jpg',
        title: 'Las Vegas Home Expert',
        caption: 'Las Vegas luxury real estate services',
      },
    ],
  },

  // Service pages with images
  {
    url: 'https://www.lasvegashomeexpert.com/luxury-homes-for-sale-las-vegas',
    images: [
      {
        loc: 'https://www.lasvegashomeexpert.com/images/luxury-home.jpg',
        title: 'Luxury Homes for Sale in Las Vegas',
        caption: 'Browse luxury properties in Las Vegas',
      },
    ],
  },
  {
    url: 'https://www.lasvegashomeexpert.com/about-dr-jan-duffy',
    images: [
      {
        loc: 'https://www.lasvegashomeexpert.com/dr-jan-duffy.jpg',
        title: 'Dr. Jan Duffy',
        caption: 'Dr. Jan Duffy, expert real estate agent',
      },
    ],
  },

  // Neighborhood pages - these would typically have property images
  {
    url: 'https://www.lasvegashomeexpert.com/neighborhoods/summerlin-homes',
    images: [
      {
        loc: 'https://www.lasvegashomeexpert.com/images/summerlin-homes.jpg',
        title: 'Summerlin Homes',
        caption: 'Luxury homes in Summerlin, Las Vegas',
      },
    ],
  },
  {
    url: 'https://www.lasvegashomeexpert.com/neighborhoods/red-rock-country-club-homes',
    images: [
      {
        loc: 'https://www.lasvegashomeexpert.com/images/red-rock-homes.jpg',
        title: 'Red Rock Country Club Homes',
        caption: 'Luxury properties in Red Rock Country Club',
      },
    ],
  },
  {
    url: 'https://www.lasvegashomeexpert.com/neighborhoods/the-ridges-summerlin-homes',
    images: [
      {
        loc: 'https://www.lasvegashomeexpert.com/images/ridges-homes.jpg',
        title: 'The Ridges Summerlin Homes',
        caption: 'Premium homes in The Ridges Summerlin',
      },
    ],
  },
  {
    url: 'https://www.lasvegashomeexpert.com/neighborhoods/tournament-hills-homes',
    images: [
      {
        loc: 'https://www.lasvegashomeexpert.com/images/tournament-hills.jpg',
        title: 'Tournament Hills Homes',
        caption: 'Luxury golf community homes in Tournament Hills',
      },
    ],
  },
  {
    url: 'https://www.lasvegashomeexpert.com/neighborhoods/southern-highlands-homes',
    images: [
      {
        loc: 'https://www.lasvegashomeexpert.com/images/southern-highlands.jpg',
        title: 'Southern Highlands Homes',
        caption: 'Elevated luxury living in Southern Highlands',
      },
    ],
  },
  {
    url: 'https://www.lasvegashomeexpert.com/neighborhoods/henderson-homes',
    images: [
      {
        loc: 'https://www.lasvegashomeexpert.com/images/henderson-homes.jpg',
        title: 'Henderson Homes',
        caption: 'Luxury properties in Henderson, Nevada',
      },
    ],
  },
];

function generateImageSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${imagePages
    .map(({ url, images }) => {
      const imageEntries = images
        .map(
          (image) => `    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title><![CDATA[${image.title}]]></image:title>
      <image:caption><![CDATA[${image.caption}]]></image:caption>
    </image:image>`
        )
        .join('\n');

      return `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
${imageEntries}
  </url>`;
    })
    .join('\n')}
</urlset>`;
}

export async function GET() {
  const sitemap = generateImageSiteMap();

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

