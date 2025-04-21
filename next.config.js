/** @type {import('next').NextConfig} */
const nextConfig = {
 eslint: {
  ignoreDuringBuilds: true,
 },
 devIndicators: {
  position: "bottom-right",
 },
 productionBrowserSourceMaps: true,
 images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'sw01sn3hkeo9brjb.public.blob.vercel-storage.com',
      port: '',
      pathname: '/**',
    },
  ],
},
 async headers() {
  return [
   {
    source: "/(.*)",
    headers: [
     {
      key: "Access-Control-Allow-Origin",
      value: "*",
     },
     {
      key: "Access-Control-Allow-Methods",
      value: "GET, POST, PUT, DELETE, OPTIONS",
     },
     {
      key: "Access-Control-Allow-Headers",
      value: "X-Requested-With, Content-Type, Accept, Origin",
     },
     {
      key: "Referrer-Policy",
      value: "strict-origin-when-cross-origin",
     },
     {
      key: "X-Content-Type-Options",
      value: "nosniff",
     },
     {
      key: "X-DNS-Prefetch-Control",
      value: "on",
     },
     {
      key: "X-Frame-Options",
      value: "SAMEORIGIN",
     },
     {
      key: "Strict-Transport-Security",
      value: "max-age=31536000; includeSubDomains; preload",
     },
     {
      key: "Cache-Control",
      value: "public, max-age=604800, must-revalidate",
     },
     {
      key: "X-XSS-Protection",
      value: "1; mode=block",
     },
    ],
   },
   {
    source: "/(.*).xml",
    headers: [
     {
      key: "Content-Type",
      value: "application/xml",
     },
    ],
   },
   {
    source: "/(.*).json",
    headers: [
     {
      key: "Content-Type",
      value: "application/json",
     },
     {
      key: "Cache-Control",
      value: "public, max-age=604800, must-revalidate",
     },
    ],
   },
   {
    source: "/favicon.ico",
    headers: [
     {
      key: "Cache-Control",
      value: "public, max-age=31536000, must-revalidate",
     },
    ],
   },
  ];
 },
 async redirects() {
  return [
   {
    source: "/discord",
    destination: "https://discord.gg/sgt4QEyDxK",
    permanent: true,
   },
   {
    source: "/repositories",
    destination: "/work",
    permanent: true,
   },
   {
    source: "/projects",
    destination: "/work",
    permanent: true,
   },
   {
    source: "/twitter",
    destination: "https://twitter.com/majonezexe",
    permanent: true,
   },
   {
    source: "/instagram",
    destination: "https://www.instagram.com/majonezexe/",
    permanent: true,
   },
   {
    source: "/github",
    destination: "https://github.com/igorkowalczyk",
    permanent: true,
   },
   {
    source: "/r/:path*",
    destination: "/:path*",
    permanent: true,
   },
   {
    source: "/discord-server",
    destination: "/discord",
    permanent: true,
   },
   {
    source: "/feed.xml",
    destination: "/feed",
    permanent: true,
   },
  ];
 },
};

// This makes sure required packages are loaded properly from the TS version
try {
  const { withAxiom } = require('next-axiom');
  const createMDX = require('@next/mdx');
  const withMDX = createMDX({});
  module.exports = withAxiom(withMDX(nextConfig));
} catch (e) {
  console.warn("Could not load plugins, falling back to basic config");
  module.exports = nextConfig;
} 