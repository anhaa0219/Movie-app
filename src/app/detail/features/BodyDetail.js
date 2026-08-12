import { StarIcon } from "@/app/icons/StarIcon";
import { ArrowRight } from "@/app/icons/ArrowRight";
import { StarIcon2 } from "@/app/icons/StarIcon2";
export const BodyDetail = () => {
  return (
    <div className="w-full flex flex-col items-center mt-13">
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
          <div className="w-190 h-107 rounded-sm bg-center bg-cover bg-[url('/MovieBigDetail.jpg')]"></div>
        </div>
      </div>
      <div className="w-270 h-67.75 flex flex-col gap-5 mt-8">
        <div className=" h-5 flex gap-3">
          <div className=" py-0.5 px-2.5 h-5 flex rounded-full border border-solid border-[#E4E4E7] justify-center items-center font-inter font-semibold text-[12px] leading-4 text-[#09090B]">
            Fairy Tale
          </div>
          <div className="py-0.5 px-2.5  h-5 flex rounded-full border border-solid border-[#E4E4E7] justify-center items-center font-inter font-semibold text-[12px] leading-4 text-[#09090B]">
            Pop Musical
          </div>
          <div className="py-0.5 px-2.5  h-5 flex rounded-full border border-solid border-[#E4E4E7] justify-center items-center font-inter font-semibold text-[12px] leading-4 text-[#09090B]">
            Fantasy
          </div>
          <div className="py-0.5 px-2.5  h-5 flex rounded-full border border-solid border-[#E4E4E7] justify-center items-center font-inter font-semibold text-[12px] leading-4 text-[#09090B]">
            Musical
          </div>
          <div className="py-0.5 px-2.5  h-5 flex rounded-full border border-solid border-[#E4E4E7] justify-center items-center font-inter font-semibold text-[12px] leading-4 text-[#09090B]">
            Romance
          </div>
        </div>
        <p className="w-270 h-12 font-inter font-normal text-[#09090B] text-[16px] leading-6">
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.{" "}
        </p>
        <div className="flex w-270px flex-col gap-5">
          <div className="flex flex-col gap-1">
            <div className="flex gap-13">
              <p className="font-inter text-[16px] font-bold leading-7 text-[#09090B]">
                Director
              </p>
              <p className="font-inter text-[16px] font-normal leading-6 text-[#09090B]">
                Jon M. Chu
              </p>
            </div>
            <div className="my-1 h-px w-full bg-[#E4E4E7]" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-13">
              <p className="font-inter text-[16px] font-bold leading-7 text-[#09090B]">
                Writers
              </p>
              <p className="font-inter text-[16px] font-normal leading-6 text-[#09090B]">
                Winnie Holzman · Dana Fox · Gregory Maguire
              </p>
            </div>
            <div className="my-1 h-px w-full bg-[#E4E4E7]" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-13">
              <p className="font-inter text-[16px] font-bold leading-7 text-[#09090B]">
                Stars
              </p>
              <p className="font-inter text-[16px] font-normal leading-6 text-[#09090B]">
                Cynthia Erivo · Ariana Grande · Jeff Goldblum
              </p>
            </div>
            <div className="my-1 h-px w-full bg-[#E4E4E7]" />
          </div>
        </div>
      </div>
      <div className="w-270 h-[440.38px] flex flex-col gap-8  mt-8 mb-[112.62px]">
        <div className="w-270 h-9 flex justify-between ">
          <p className="font-inter font-semibold text-[24px] text-[#09090B] leading-8">
            More like this
          </p>
          <div className="w-40 h-9 rounded-md flex justify-center items-center gap-2 bg-[#FFFFFF]">
            <p className="font-inter font-medium text-[14px] text-[#09090B] leading-5">
              See more
            </p>
            <ArrowRight />
          </div>
        </div>
        <div className="w-270 h-[372.38px] flex gap-8 ">
          <div className="w-47.5 h-[372.38px] flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
            <div className="w-47.5 h-[281.38px] bg-[url('/movie1.jpg')] bg-cover bg-center"></div>
            <div className="w-full h-23.75 flex flex-col py-2 px-2">
              <div className="w-full h-5.75 flex gap-1">
                <StarIcon2 />
                <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">
                  6.9
                  <span className="font-inter font-normal text-[14px] text-[#71717A]">
                    /10
                  </span>
                </p>
              </div>
              <div className="w-full h-14 flex">
                <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">
                  Pulp Fiction
                </p>
              </div>
            </div>
          </div>
          <div className="w-47.5 h-[372.38px] flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
            <div className="w-47.5 h-[281.38px] bg-[url('/movie2.jpg')] bg-cover bg-center"></div>
            <div className="w-full h-23.75 flex flex-col py-2 px-2">
              <div className="w-full h-5.75 flex gap-1">
                <StarIcon2 />
                <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">
                  6.9
                  <span className="font-inter font-normal text-[14px] text-[#71717A]">
                    /10
                  </span>
                </p>
              </div>
              <div className="w-full h-14 flex">
                <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">
                  Pulp Fiction
                </p>
              </div>
            </div>
          </div>
          <div className="w-47.5 h-[372.38px] flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
            <div className="w-47.5 h-[281.38px] bg-[url('/movie3.jpg')] bg-cover bg-center"></div>
            <div className="w-full h-23.75 flex flex-col py-2 px-2">
              <div className="w-full h-5.75 flex gap-1">
                <StarIcon2 />
                <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">
                  6.9
                  <span className="font-inter font-normal text-[14px] text-[#71717A]">
                    /10
                  </span>
                </p>
              </div>
              <div className="w-full h-14 flex">
                <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">
                  Pulp Fiction
                </p>
              </div>
            </div>
          </div>
          <div className="w-47.5 h-[372.38px] flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
            <div className="w-47.5 h-[281.38px] bg-[url('/movie4.jpg')] bg-cover bg-center"></div>
            <div className="w-full h-23.75 flex flex-col py-2 px-2">
              <div className="w-full h-5.75 flex gap-1">
                <StarIcon2 />
                <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">
                  6.9
                  <span className="font-inter font-normal text-[14px] text-[#71717A]">
                    /10
                  </span>
                </p>
              </div>
              <div className="w-full h-14 flex">
                <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">
                  Pulp Fiction
                </p>
              </div>
            </div>
          </div>
          <div className="w-47.5 h-[372.38px] flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
            <div className="w-47.5 h-[281.38px] bg-[url('/movie5.jpg')] bg-cover bg-center"></div>
            <div className="w-full h-23.75 flex flex-col py-2 px-2">
              <div className="w-full h-5.75 flex gap-1">
                <StarIcon2 />
                <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">
                  6.9
                  <span className="font-inter font-normal text-[14px] text-[#71717A]">
                    /10
                  </span>
                </p>
              </div>
              <div className="w-full h-14 flex">
                <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">
                  Pulp Fiction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
