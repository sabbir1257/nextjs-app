import React from "react";

export default function ServicesDetailPage({ params }) {
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

  const id = params?.id;
  const singleData = data.find((d) => d._id == id);
  return (
    <div className="p-4">
      <h1 className="text-3xl text-center pb-6">ServicesDetailPage</h1>
      <div className="grid md:grid-cols-2 justify-between  items-center">
        <div className="md:w-[80%]">
          <p>ID: {id}</p>
          <p className="text-2xl font-semibold">{singleData.service_name}</p>
          <p>{singleData.service_description}</p>
        </div>
        <div>
          <img className="rounded-lg" src={singleData.service_image} alt="" />
        </div>
      </div>
    </div>
  );
}
