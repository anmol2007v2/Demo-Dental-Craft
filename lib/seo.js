export const siteConfig = {
  name: "SmileCraft Dental Clinic",
  baseUrl: "https://demo-dental-craft-six.vercel.app",
  ogImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDQwIt_gxsorWCfz9fSbeAa-Z4F40fJPdrHOEUdLds_utEXEyyMPxGtdgAq54XZUmmXP4mnPE-jXc4tNMXp7gG9GXnkKHd8XlzY0oKUtICVOZ__P3MLXucZ1EHaj4yiYbH_aBgZhVuXaDyai2G45wbdOn8mNT4Q9-rG-BWMJZQNdSeVuXxx4d1T2AyTp4E14mT2lNjHZzl-DvPHfS8rcJc_n3b4FEtBffHHMHBZ_KTB5IlckvGgRqWRItFW_nCPY122AN0rRgw1Ro0",
};

export function buildMetadata({ title, description, path = "/" }) {
  const url = `${siteConfig.baseUrl}${path}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: siteConfig.ogImage }],
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

