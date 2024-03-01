import type { NavigationType } from '@components-react/Header/Header'
import type { FooterNav, Link } from '@components/Footer.astro'

// business
export const businessName = 'Business Name'

// header
export const headerNav: NavigationType[] = [
    {
        title: 'About',
        href: '/',
    },
    {
        title: 'Services',
        href: '/',
    },
    {
        title: 'Pricing',
        href: '/',
    },
]

// footer
export const footerNav: FooterNav = [
    {
        title: 'Services',
        links: [
            {
                label: 'Tax',
                href: '/',
            },
            {
                label: 'Other tax',
                href: '/',
            },
        ],
    },
    {
        title: 'Services',
        links: [
            {
                label: 'Tax',
                href: '/',
            },
            {
                label: 'Other tax',
                href: '/',
            },
        ],
    },
    {
        title: 'Services',
        links: [
            {
                label: 'Tax',
                href: '/',
            },
            {
                label: 'Other tax',
                href: '/',
            },
        ],
    },
]
export const legalNav: Link[] = [
    {
        label: 'Terms & Conditions',
        href: '/',
    },
    {
        label: 'Privacy Policy',
        href: '/',
    },
]
