import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MenuItem } from '../../interfaces/menu-item';
import { SocialLink } from '../../interfaces/social-link';
import { SiteData } from '../../interfaces/site-data';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'vd-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class Footer {
  protected creator: SiteData = { ...environment.creator };
  protected app: SiteData = { ...environment.app };

  protected description =
    'Vijnanadeepam is a group in Kerala, India, composed of visually impaired individuals and volunteers. They create audiobooks by reading printed books aloud to provide reading materials and information for the visually challenged.';

  protected years = `${this.app.startYear} - ${new Date().getFullYear()}`;

  protected popularLinks: MenuItem[] = [
    { label: 'Home', link: '/home' },
    { label: 'About Us', link: '/about-us' },
    { label: 'Contact Us', link: '/contact-us' },
    { label: 'Gallery', link: '/gallery' },
    { label: 'FAQ', link: '/faq' },
  ];

  protected services: MenuItem[] = [
    { label: 'Membership', link: '/membership' },
    { label: 'Orders and Circulars', link: '/orders-and-circulars' },
    { label: 'Projects', link: '/projects-and-programs' },
    { label: 'Scholarships', link: '/scholarships' },
    { label: 'Volunteers', link: '/volunteers' },
  ];

  protected socialLinks: SocialLink[] = [
    {
      label: 'Facebook',
      url: 'https://facebook.com/yourpage',
      key: 'facebook',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/yourhandle',
      key: 'x',
    },
    {
      label: 'Instagram',
      url: 'https://instagram.com/yourprofile',
      key: 'instagram',
    },
    {
      label: 'YouTube',
      url: 'https://youtube.com/yourchannel',
      key: 'youtube',
    },
  ];
}
