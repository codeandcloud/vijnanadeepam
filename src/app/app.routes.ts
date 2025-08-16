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
          'Vijnanadeepam is Kerala’s largest volunteer‑driven audio book library empowering visually impaired readers with accessible knowledge, culture, careers and community.',
        keywords:
          'vijnanadeepam, audio library kerala, visually impaired support, accessible books, talking books, volunteer readers, inclusive education',
        ogTitle:
          'Vijnanadeepam | Kerala’s Leading Audio Book & Accessibility Collective',
        ogDescription:
          'Discover India’s most vibrant volunteer network converting thousands of printed books into accessible audio for 900+ visually impaired beneficiaries across Kerala. Join, read, volunteer, empower.',
        ogImage: '/og-images/home.jpg',
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
        description:
          'Learn how Vijnanadeepam unites visually impaired individuals and volunteers across Kerala to convert printed books into inclusive audio knowledge every day.',
        keywords:
          'vijnanadeepam mission, audio accessibility kerala, inclusive reading initiative, volunteer community, talking book project',
        ogTitle: 'About Vijnanadeepam | Mission, Vision & Impact in Kerala',
        ogDescription:
          'From a small WhatsApp idea to Kerala’s largest audio book library—explore our mission, inclusive values, 400+ volunteers, 900+ beneficiaries and the growing movement for equitable reading access.',
        ogImage: '/og-images/about.jpg',
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
        description:
          'Meet the dedicated Vijnanadeepam administration team coordinating volunteers, libraries, quality standards and accessible audio production across Kerala.',
        keywords:
          'vijnanadeepam administration, leadership team, accessibility management, audio library coordination, volunteer oversight',
        ogTitle:
          'Vijnanadeepam Administration | Coordinating Accessible Knowledge',
        ogDescription:
          'Get to know the leadership facilitating thousands of audio book recordings, decentralized library branches, compliance with copyright provisions and sustainable volunteer engagement.',
        ogImage: '/og-images/admin.jpg',
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
        description:
          'Celebrate the 400+ Vijnanadeepam volunteers donating their voices to turn print into life‑changing audio for visually impaired readers across Kerala.',
        keywords:
          'volunteer audio readers, donate your voice kerala, accessible book narration, vijnanadeepam volunteers, inclusive service',
        ogTitle: 'Volunteer Voices | Powering Vijnanadeepam’s Audio Library',
        ogDescription:
          'See how passionate narrators, editors and coordinators collectively craft thousands of accessible audio books—learn how you can start recording and impact inclusive literacy today.',
        ogImage: '/og-images/volunteers.jpg',
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
        description:
          'Explore Vijnanadeepam’s expanding network of Kerala audio library branches delivering localized accessible book collections to visually impaired learners.',
        keywords:
          'audio library branches kerala, regional accessible libraries, vijnanadeepam network, talking book access, inclusive reading hubs',
        ogTitle: 'Audio Library Network | Regional Access Points in Kerala',
        ogDescription:
          'Learn how our decentralized branch model scales equitable access—curating academics, literature, competitive exams and cultural titles in high‑quality narrated formats.',
        ogImage: '/og-images/libraries.jpg',
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
        description:
          'Stay updated through Vijnanadeepam’s Telegram and social channels sharing new audio books, services, initiatives and accessibility resources.',
        keywords:
          'vijnanadeepam telegram, accessibility updates kerala, audio book announcements, inclusive media channels',
        ogTitle: 'Vijnanadeepam Channels | Latest Audio Releases & Updates',
        ogDescription:
          'Follow our curated announcements stream—new recordings, scholarship info, inclusive tech tips, volunteer drives and community development programs for visually impaired users.',
        ogImage: '/og-images/svgs/channels.jpg',
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
        description:
          'Discover scholarships, educational aids and opportunities Vijnanadeepam highlights for visually impaired students pursuing academic and career goals in Kerala.',
        keywords:
          'visually impaired scholarships kerala, education support, accessible learning grants, vijnanadeepam education resources',
        ogTitle: 'Scholarships & Educational Support | Vijnanadeepam',
        ogDescription:
          'Access curated funding leads, application guidance and empowerment programs connecting visually impaired learners with academic advancement and skill development pathways.',
        ogImage: '/og-images/svgs/scholarships.jpg',
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
        description:
          'Browse the Vijnanadeepam gallery showcasing community events, recording sessions, outreach, volunteer impact and inclusive literacy milestones.',
        keywords:
          'vijnanadeepam gallery, accessibility events, volunteer impact photos, inclusive literacy visuals',
        ogTitle: 'Moments of Inclusion | Vijnanadeepam Photo Gallery',
        ogDescription:
          'A visual chronicle of how collective effort transforms print into accessible audio—celebrating volunteers, beneficiaries, workshops and the growth of Kerala’s largest talking book ecosystem.',
        ogImage: '/og-images/gallery.jpg',
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
        description:
          'Watch Vijnanadeepam videos featuring tutorials, awareness talks, inclusion campaigns, volunteer guidance and community impact stories from Kerala.',
        keywords:
          'accessibility videos kerala, vijnanadeepam tutorials, inclusive education media, volunteer training video',
        ogTitle: 'Video Stories & Tutorials | Vijnanadeepam',
        ogDescription:
          'Stream educational explainers, empowerment narratives, reading technology demos and calls to action advancing accessible knowledge for visually impaired audiences.',
        ogImage: '/og-images/svgs/videos.jpg',
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
        description:
          'Join Vijnanadeepam membership to access curated audio books, community programs, updates and collaborative opportunities for inclusive growth.',
        keywords:
          'vijnanadeepam membership, join audio library, inclusive reading community, accessible books access',
        ogTitle: 'Become a Member | Vijnanadeepam Accessible Audio Community',
        ogDescription:
          'Unlock structured access to recorded titles, contribution pathways, early updates and a supportive Kerala network focused on equitable reading transformation.',
        ogImage: '/og-images/membership.jpg',
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
          'Access official orders, circulars and government notifications relevant to visually impaired rights, education and accessibility in Kerala.',
        keywords:
          'accessibility circulars kerala, government orders visually impaired, inclusion policy updates, vijnanadeepam references',
        ogTitle: 'Orders & Circulars | Accessibility & Inclusion References',
        ogDescription:
          'A curated repository simplifying discovery of policy updates, regulatory frameworks and institutional directives impacting visually impaired empowerment and services.',
        ogImage: '/og-images/svgs/orders.jpg',
      },
    },
  },
  {
    path: 'faq',
    loadComponent: () => import('./features/faq/faq').then((m) => m.Faq),
    title: 'FAQ',
    data: {
      meta: {
        description:
          'Find clear answers about Vijnanadeepam audio books, volunteering, membership, accessibility practices, distribution and impact measurement.',
        keywords:
          'vijnanadeepam faq, how to volunteer audio, accessible book process, talking book compliance, membership questions',
        ogTitle: 'Vijnanadeepam FAQ | Your Accessibility & Participation Guide',
        ogDescription:
          'Quickly understand how recording works, content sourcing, copyright compliance (2012 amendment), joining workflows, library access, technology and quality standards.',
        ogImage: '/og-images/faq.jpg',
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
        description:
          'Contact Vijnanadeepam to volunteer, request accessible audio resources, partner on inclusion initiatives or support Kerala’s largest talking book library.',
        keywords:
          'contact vijnanadeepam, volunteer signup kerala, accessible library support, inclusion partnership',
        ogTitle: 'Contact Vijnanadeepam | Partner, Volunteer or Request Access',
        ogDescription:
          'Reach our coordination team for collaboration, narration onboarding, library guidance, media queries, inclusion advocacy or beneficiary support pathways.',
        ogImage: '/og-images/contact.jpg',
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
        description:
          'Page not found — explore Vijnanadeepam’s accessible audio library, volunteer opportunities and inclusive resources instead.',
        keywords:
          'page not found, vijnanadeepam resources, audio library navigation',
        ogTitle: 'Page Not Found | Explore Vijnanadeepam Resources',
        ogDescription:
          'The page you sought is missing—jump into our audio library network, community initiatives or membership pathways supporting visually impaired readers in Kerala.',
        ogImage: '/og-images/404.jpg',
      },
    },
  },
];
