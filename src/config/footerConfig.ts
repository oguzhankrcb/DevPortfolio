export interface FooterLink {
  text: string;
  url: string;
  external: boolean;
}

export const footerConfig = {
  copyright: {
    text: "© 2025 DevPortfolio. All rights reserved.",
    startYear: 2025
  },

  links: [
    {
      text: "Privacy Policy",
      url: "/privacy",
      external: false
    },
    {
      text: "Terms of Service",
      url: "/terms",
      external: false
    },
    {
      text: "Sitemap",
      url: "/sitemap.xml",
      external: false
    }
  ] as FooterLink[],

  credits: {
    show: true,
    text: "Made with ❤️ using Next.js and Tailwind CSS"
  },

  backToTop: {
    show: true,
    text: "Back to top"
  }
};
