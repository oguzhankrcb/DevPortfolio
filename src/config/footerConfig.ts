export interface FooterLink {
  text: string;
  url: string;
  external: boolean;
}

export const footerConfig = {
  copyright: {
    text: "© 2025 Karacabay.com All rights reserved.",
    startYear: 2025
  },

  links: [] as FooterLink[],

  credits: {
    show: false,
    text: "Made with ❤️ using Next.js and Tailwind CSS"
  },

  backToTop: {
    show: true,
    text: "Back to top"
  }
};
