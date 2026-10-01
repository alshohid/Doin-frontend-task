export interface CourseDetail {
  slug: string;
  title: string;
  subtitle: string;
  creator: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
    profileUrl?: string;
  };
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  rating: number;
  reviewCount: number;
  studentCount: number;
  price: string;
  period: string;
  heroVideoThumbnail: string;
  totalLessons: number;
  totalHours: number;
  previewLessons: {
    number: string;
    title: string;
    duration: string;
  }[];
  remainingVideosCount: number;
  description: string[];
  sneakPeaks: {
    title: string;
    image: string;
  }[];
  keyPoints: string[];
  features: {
    iconName: string;
    label: string;
  }[];
}

export const COURSE_DETAILS: Record<string, CourseDetail> = {
  "build-digital-asset": {
    slug: "build-digital-asset",
    title: "Build Digital Asset: A Comprehensive Guide",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    creator: {
      name: "PurePearl Studio",
      role: "Professional Creator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
      bio: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
      profileUrl: "/creators",
    },
    level: "Intermediate",
    rating: 4.8,
    reviewCount: 172,
    studentCount: 199,
    price: "$25",
    period: "lifetime",
    heroVideoThumbnail: "/images/course-video-thumbnail.jpg",
    totalLessons: 112,
    totalHours: 24,
    previewLessons: [
      {
        number: "01",
        title: "Introduction to Digital Assets",
        duration: "12 mins",
      },
      {
        number: "02",
        title: "Design Principles for Impacts",
        duration: "21 mins",
      },
      {
        number: "03",
        title: "Advanced Techniques in Digital Creation",
        duration: "16 mins",
      },
    ],
    remainingVideosCount: 99,
    description: [
      'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
      "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
      "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
    ],
    sneakPeaks: [
      {
        title: "Wireframing & sketching",
        image: "https://images.unsplash.com/photo-1581291518655-9523c932deda?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Digital UI workstation",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Desktop design layouts",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Mobile app interfaces",
        image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=600&q=80",
      },
    ],
    keyPoints: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcases and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practices",
      "Monetization Strategies",
      "Capstone Project: Building Your Portfolio",
    ],
    features: [
      { iconName: "book-open", label: "Learning Resources" },
      { iconName: "video", label: "Quality Lesson Videos" },
      { iconName: "award", label: "Certificate of Completion" },
      { iconName: "headphones", label: "Private Consultation" },
    ],
  },
};

export function getCourseDetailBySlug(slug: string): CourseDetail {
  // Normalize slug
  const normalized = slug.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

  if (COURSE_DETAILS[normalized]) {
    return COURSE_DETAILS[normalized];
  }

  // Create a customized course detail from default template
  const defaultTemplate = COURSE_DETAILS["build-digital-asset"];
  const humanTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    ...defaultTemplate,
    slug: normalized,
    title: `${humanTitle}: A Comprehensive Guide`,
  };
}
