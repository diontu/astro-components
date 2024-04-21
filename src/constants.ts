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
        title: 'Product',
        links: [
            {
                label: 'Pricing',
                href: '/',
            },
            {
                label: 'Start Your Business',
                href: '/',
            },
            {
                label: 'Manage Your Corporation',
                href: '/',
            },
            {
                label: 'Blueprint',
                href: '/',
            },
            {
                label: 'Professional Partners',
                href: '/',
            },
            {
                label: 'Ownr Shares',
                href: '/',
            },
        ],
    },
    {
        title: 'Resources',
        links: [
            {
                label: 'RBC Offer Details',
                href: '/',
            },
            {
                label: 'Perks',
                href: '/',
            },
            {
                label: 'Business Guides',
                href: '/',
            },
            {
                label: 'Blog',
                href: '/',
            },
        ],
    },
    {
        title: 'Company',
        links: [
            {
                label: 'About',
                href: '/',
            },
            {
                label: 'Partners',
                href: '/',
            },
            {
                label: 'Affiliates',
                href: '/',
            },
            {
                label: 'Careers',
                href: '/',
            },
            {
                label: 'Security',
                href: '/',
            },
            {
                label: 'Reviews',
                href: '/',
            },
            {
                label: 'Press',
                href: '/',
            },
        ],
    },
    {
        title: 'Support',
        links: [
            {
                label: 'Live Chat',
                href: '/',
            },
            {
                label: 'Email Us',
                href: '/',
            },
            {
                label: 'Help Centre',
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
