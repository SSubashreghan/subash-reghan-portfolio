export interface SocialLink {
  label: string;
  href: string;
  displayValue: string;
  isExternal: boolean;
}

export const socialLinks = {
  email: {
    label: "Email",
    href: "mailto:subashreghan2@gmail.com",
    displayValue: "subashreghan2@gmail.com",
    isExternal: false
  },
  whatsapp: {
    label: "WhatsApp",
    href: "https://wa.me/qr/5I5W32V654VJP1",
    displayValue: "+91 63696 58422",
    isExternal: true
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/subash-reghan-893a752a7/",
    displayValue: "linkedin.com/in/subash-reghan-893a752a7",
    isExternal: true
  },
  github: {
    label: "GitHub",
    href: "https://github.com/SSubashreghan",
    displayValue: "github.com/SSubashreghan",
    isExternal: true
  },
  resume: {
    label: "Download Resume",
    href: "/assets/docs/SUBASHREGHAN_S_Resume.pdf",
    fileName: "SUBASHREGHAN_S_Resume.pdf"
  }
};
