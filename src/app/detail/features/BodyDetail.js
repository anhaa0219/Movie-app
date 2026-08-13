"use client";
import { PlayIcon } from "@/app/icons/PlayIcon";
import { StarIcon } from "@/app/icons/StarIcon";
import { useState } from "react";

export const BodyDetail = () => {
  const [activeUrl, setActiveUrl] = useState(null);

  const handlePlay = (videoId) => {
    setActiveUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`);
  };

  const handleClose = () => {
    setActiveUrl(null);
  };

  return (
    <div className="w-full flex flex-col items-center mt-13 relative">
      {activeUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={handleClose}
        >
          <div
            className="relative w-250 h-140.25 bg-black overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={activeUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
      <div className="w-270 h-131 flex flex-col gap-6">
        <div className="w-270 h-18 flex justify-between gap-3">
          <div className="w-52.75 h-18 flex flex-col gap-1">
            <p className="w-52.75 h-10 font-inter font-extrabold text-[36px] text-[#09090B] leading-10">
              Wicked
            </p>
            <p className="w-52.75 h-7 font-inter font-normal text-[18px] text-[#09090B] leading-7">
              2024.11.26 · PG · 2h 40m
            </p>
          </div>
          <div className="w-20.75 h-16 flex flex-col gap-1">
            <p className="w-20.75 h-2 font-inter font-medium text-[12px] text-[#09090B] leading-4">
              Rating
            </p>
            <div className="w-20.75 h-12 flex gap-1">
              <div className="w-7 h-12 flex items-center justify-center">
                <StarIcon />
              </div>
              <div className="w-12.75 h-11 flex flex-col">
                <p className="w-12.75 h-7 font-inter font-semibold text-[18px] text-[#09090B] leading-7">
                  6.9
                  <span className="font-inter font-normal text-[16px] text-[#71717A] leading-6">
                    /10
                  </span>
                </p>
                <p className="w-5.5 h-4 flex font-inter font-normal text-[16px] text-[#71717A] leading-6">
                  37k
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-270 h-107 flex gap-8">
          <div className="w-72.5 h-107 rounded-sm bg-center bg-cover bg-[url('/MoviePosterLil.png')]"></div>
          <div className="w-190 h-107 rounded-sm bg-center bg-cover bg-[url('/MovieBigDetail.jpg')] relative">
            <div className="w-43.5 h-10 flex gap-3 items-center absolute left-6 bottom-6">
              <button
                onClick={() => handlePlay("6COmYeLsz4c")}
                className="w-10 h-10 rounded-full flex justify-center items-center bg-[#FFFFFF] hover:scale-105 transition-transform"
              >
                <PlayIcon />
              </button>
              <p
                className="font-inter font-normal text-[#FFFFFF] text-[16px] leading-6 cursor-pointer"
                onClick={() => handlePlay("6COmYeLsz4c")}
              >
                Play trailer
              </p>
              <p className="font-inter font-normal text-[#FFFFFF] text-[16px] leading-6">
                2:35
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-270 h-67.75 flex flex-col gap-5 mt-8">
        <div className="h-5 flex gap-3">
          <div className="py-0.5 px-2.5 h-5 flex rounded-full border border-solid border-[#E4E4E7] justify-center items-center font-inter font-semibold text-[12px] leading-4 text-[#09090B]">
            Fairy Tale
          </div>
          <div className="py-0.5 px-2.5 h-5 flex rounded-full border border-solid border-[#E4E4E7] justify-center items-center font-inter font-semibold text-[12px] leading-4 text-[#09090B]">
            Pop Musical
          </div>
          <div className="py-0.5 px-2.5 h-5 flex rounded-full border border-solid border-[#E4E4E7] justify-center items-center font-inter font-semibold text-[12px] leading-4 text-[#09090B]">
            Fantasy
          </div>
          <div className="py-0.5 px-2.5 h-5 flex rounded-full border border-solid border-[#E4E4E7] justify-center items-center font-inter font-semibold text-[12px] leading-4 text-[#09090B]">
            Musical
          </div>
          <div className="py-0.5 px-2.5 h-5 flex rounded-full border border-solid border-[#E4E4E7] justify-center items-center font-inter font-semibold text-[12px] leading-4 text-[#09090B]">
            Romance
          </div>
        </div>
        <p className="w-270 h-12 font-inter font-normal text-[#09090B] text-[16px] leading-6">
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.{" "}
        </p>
      </div>
    </div>
  );
};
