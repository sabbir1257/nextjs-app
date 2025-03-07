import Link from "next/link";
import React from "react";

export default function ServicesPage() {
  const data = [
    {
      _id: "1",
      service_name: "Web Development",
      service_image: "https://www.gstatic.com/webp/gallery/1.jpg",
      service_description:
        "Build responsive and dynamic websites using modern technologies like HTML, CSS, JavaScript, and frameworks like React and Next.js.",
    },
    {
      _id: "2",
      service_name: "App Development",
      service_image: "https://www.gstatic.com/webp/gallery/2.jpg",
      service_description:
        "Create mobile applications with a focus on usability and performance using native and cross-platform frameworks like React Native and Flutter.",
    },
    {
      _id: "3",
      service_name: "UI/UX Design",
      service_image: "https://www.gstatic.com/webp/gallery/3.jpg",
      service_description:
        "Design user interfaces and experiences that are not only visually appealing but also intuitive and easy to navigate.",
    },
    {
      _id: "4",
      service_name: "Digital Marketing",
      service_image: "https://www.gstatic.com/webp/gallery/4.jpg",
      service_description:
        "Drive online growth through SEO, social media marketing, paid ads, and content creation to help your business reach its target audience.",
    },
    {
      _id: "5",
      service_name: "Cloud Services",
      service_image: "https://www.gstatic.com/webp/gallery/5.jpg",
      service_description:
        "Leverage cloud technologies like AWS, Google Cloud, and Microsoft Azure for scalable and reliable cloud-based solutions.",
    },
  ];
  return (
    <div>
      <p className="font-bold text-3xl">Services Page</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((d) => {
        return (
          <div>
            <Link href={`/services/${d._id}`}>
              <img className="w-full h-48 object-cover" src={d.service_image} alt="" />
            </Link>
          </div>
        );
      })}
    </div>
    </div>
  );
}
