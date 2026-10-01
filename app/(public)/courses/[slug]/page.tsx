import type { Metadata } from "next";
import { getCourseDetailBySlug } from "@/components/courses/course-details-data";
import { CourseDetailsView } from "@/components/courses/CourseDetailsView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseDetailBySlug(slug);

  return {
    title: `${course.title} | ByteSpace`,
    description: course.subtitle,
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseDetailBySlug(slug);

  return <CourseDetailsView course={course} />;
}
