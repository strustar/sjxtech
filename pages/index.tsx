// pages/index.tsx
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getContentData } from '../utils/data';

const contentData = getContentData();

const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  className: 'center',
};

const InfoSection = ({ title, messages }: { title: string; messages: string[] }) => (
  <div className="bg-gray-950/30 p-6 rounded-lg border border-gray-500/80">
    <h2 className="text-2xl font-bold text-blue-400 mb-4">{title}</h2>
    {messages.map((message, index) => (
      <p
        key={index}
        className={`text-gray-300 leading-relaxed pl-5 ${
          index !== messages.length - 1 ? 'mb-3' : ''
        }`}
      >
        &ldquo;{message}&rdquo;
      </p>
    ))}
  </div>
);

const ImageSlide = ({ image }: { image: typeof contentData.images[0] }) => (
  <div>
    <div className="px-2 flex justify-center items-center">
      <Image
        src={image.src}
        alt={image.title}
        width={1000}
        height={500}
        className="rounded-lg object-contain"
      />
    </div>
    <div className="mt-4 text-center">
      <h3 className="text-xl font-bold text-gray-100 mb-2">{image.title}</h3>
      <a
        href={image.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 mb-2 block"
      >
        {image.url}
      </a>
      <p className="text-gray-300">{image.description}</p>
    </div>
  </div>
);

const VideoSection = ({ video }: { video: typeof contentData.videos[0] }) => (
  <section className="py-12 border-b border-gray-800/30 last:border-b-0">
    <div className="max-w-[var(--width-max)] mx-auto px-6">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-gray-100">{video.title}</h2>
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          ({video.url})
        </a>
      </div>

      <div className="relative w-full pt-[56.25%]">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white" />
        </div>

        <video
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={video.src} type="video/webm" />
        </video>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-1000/90" suppressHydrationWarning>
      <div className="max-w-[var(--width-max)] mx-auto border-b border-gray-800/30 py-12">
        <div className="max-w-[var(--width-max)] mx-auto px-6">
          <div className="pb-12">
            <h1 className="text-center text-5xl font-bold text-white mb-6 tracking-tight">
              AI로 기술의 한계를 넘어
            </h1>
            <p className="text-center text-3xl font-semibold text-orange-400 mb-2">
              새로운 가능성을 열다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
            {contentData.sections.map((section, index) => (
              <InfoSection key={index} title={section.title} messages={section.messages} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[var(--width-max)] mx-auto px-6 py-12">
        <Slider {...SLIDER_SETTINGS}>
          {contentData.images.map((image, index) => (
            <ImageSlide key={index} image={image} />
          ))}
        </Slider>
      </div>

      {contentData.videos.map((video, index) => (
        <VideoSection key={index} video={video} />
      ))}
    </div>
  );
}