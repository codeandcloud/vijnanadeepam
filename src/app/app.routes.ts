import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Home',
    data: {
      meta: {
        description:
          'Welcome to our home page, explore our services and offerings.',
        keywords: 'home, services, welcome',
        ogTitle: 'Home Page',
        ogDescription: 'Discover our services and offerings on the home page.',
        ogImage: '/assets/images/home-og.jpg',
      },
    },
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./features/about-us/about-us').then((m) => m.AboutUs),
    title: 'About Us',
    data: {
      meta: {
        description: 'Learn about our mission, vision, and team.',
        keywords: 'about us, mission, vision, team',
        ogTitle: 'About Us',
        ogDescription: 'Find out more about our organization and team.',
        ogImage: '/assets/images/about-og.jpg',
      },
    },
  },
  {
    path: 'administration',
    loadComponent: () =>
      import('./features/team/administration/administration').then(
        (m) => m.Administration
      ),
    title: 'Administration',
    data: {
      meta: {
        description: 'Meet our administration team.',
        keywords: 'administration, team, leadership',
        ogTitle: 'Administration Team',
        ogDescription: 'Our dedicated administration team.',
        ogImage: '/assets/images/admin-og.jpg',
      },
    },
  },
  {
    path: 'volunteers',
    loadComponent: () =>
      import('./features/team/volunteers/volunteers').then((m) => m.Volunteers),
    title: 'Volunteers',
    data: {
      meta: {
        description: 'Discover our passionate volunteers.',
        keywords: 'volunteers, community, support',
        ogTitle: 'Our Volunteers',
        ogDescription: 'Meet the volunteers who make a difference.',
        ogImage: '/assets/images/volunteers-og.jpg',
      },
    },
  },
  {
    path: 'libraries',
    loadComponent: () =>
      import('./features/activities/libraries/libraries').then(
        (m) => m.Libraries
      ),
    title: 'Libraries',
    data: {
      meta: {
        description: 'Explore our library resources and services.',
        keywords: 'libraries, resources, books',
        ogTitle: 'Library Services',
        ogDescription: 'Access our extensive library resources.',
        ogImage: '/assets/images/libraries-og.jpg',
      },
    },
  },
  {
    path: 'channels',
    loadComponent: () =>
      import('./features/activities/channels/channels').then((m) => m.Channels),
    title: 'Channels',
    data: {
      meta: {
        description: 'Stay updated with our channels.',
        keywords: 'channels, updates, news',
        ogTitle: 'Our Channels',
        ogDescription: 'Follow our latest updates and news.',
        ogImage: '/assets/images/channels-og.jpg',
      },
    },
  },
  {
    path: 'scholarships',
    loadComponent: () =>
      import('./features/activities/scholarships/scholarships').then(
        (m) => m.Scholarships
      ),
    title: 'Scholarships',
    data: {
      meta: {
        description: 'Learn about our scholarship programs.',
        keywords: 'scholarships, education, funding',
        ogTitle: 'Scholarship Programs',
        ogDescription: 'Support for education through scholarships.',
        ogImage: '/assets/images/scholarships-og.jpg',
      },
    },
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('./features/media/gallery/gallery').then((m) => m.Gallery),
    title: 'Gallery',
    data: {
      meta: {
        description: 'View our photo gallery.',
        keywords: 'gallery, photos, events',
        ogTitle: 'Photo Gallery',
        ogDescription: 'Explore our collection of event photos.',
        ogImage: '/assets/images/gallery-og.jpg',
      },
    },
  },
  {
    path: 'videos',
    loadComponent: () =>
      import('./features/media/videos/videos').then((m) => m.Videos),
    title: 'Videos',
    data: {
      meta: {
        description: 'Watch our latest videos.',
        keywords: 'videos, media, content',
        ogTitle: 'Video Content',
        ogDescription: 'Check out our latest video content.',
        ogImage: '/assets/images/videos-og.jpg',
      },
    },
  },
  {
    path: 'membership',
    loadComponent: () =>
      import('./features/services/membership/membership').then(
        (m) => m.Membership
      ),
    title: 'Membership',
    data: {
      meta: {
        description: 'Join our membership program.',
        keywords: 'membership, join, community',
        ogTitle: 'Membership Program',
        ogDescription: 'Become a part of our community.',
        ogImage: '/assets/images/membership-og.jpg',
      },
    },
  },
  //create orders and circulars route
  {
    path: 'orders-and-circulars',
    loadComponent: () =>
      import(
        './features/services/orders-and-circulars/orders-and-circulars'
      ).then((m) => m.OrdersAndCirculars),
    title: 'Orders and Circulars',
    data: {
      meta: {
        description:
          'Orders and circulars related to the visually impaired community.',
        keywords: 'orders, circulars, announcements',
        ogTitle: 'Orders and Circulars',
        ogDescription:
          'Stay informed with our latest orders and circularsrelated to the visually impaired community.',
        ogImage: '/assets/images/orders-og.jpg',
      },
    },
  },
  {
    path: 'faq',
    loadComponent: () => import('./features/faq/faq').then((m) => m.Faq),
    title: 'FAQ',
    data: {
      meta: {
        description: 'Find answers to frequently asked questions.',
        keywords: 'faq, questions, help',
        ogTitle: 'Frequently Asked Questions',
        ogDescription: 'Get answers to common questions.',
        ogImage: '/assets/images/faq-og.jpg',
      },
    },
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./features/contact-us/contact-us').then((m) => m.ContactUs),
    title: 'Contact Us',
    data: {
      meta: {
        description: 'Get in touch with us.',
        keywords: 'contact, support, reach out',
        ogTitle: 'Contact Us',
        ogDescription: 'Reach out to our team for support.',
        ogImage: '/assets/images/contact-og.jpg',
      },
    },
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found').then((m) => m.NotFound),
    title: 'Page Not Found',
    data: {
      meta: {
        description: 'Page not found.',
        keywords: '404, not found, error',
        ogTitle: 'Page Not Found',
        ogDescription: 'The page you are looking for does not exist.',
        ogImage: '/assets/images/404-og.jpg',
      },
    },
  },
];
