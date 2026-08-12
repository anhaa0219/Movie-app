import { ArrowRight } from "../icons/ArrowRight";
import { StarIcon2 } from "../icons/StarIcon2";
import { Movie1 } from "../icons/Movie1";
import { Movie2 } from "../icons/Movie2";
import { Movie3 } from "../icons/Movie3";
import { Movie4 } from "../icons/Movie4";
import { Movie5 } from "../icons/Movie5";
import { Movie7 } from "../icons/Movie7";
import { Movie8 } from "../icons/Movie8";
import { Movie9 } from "../icons/Movie9";
export const Upcoming = () => {
  return (
    <div className="w-full flex flex-col px-4 md:px-8 gap-8">
      <div className="w-full h-9 flex justify-between items-center">
        <p className="font-inter font-semibold text-[24px] text-[#09090B] leading-8">
          Upcoming
        </p>

        <div className="w-40 h-9 rounded-md flex justify-center items-center gap-2 bg-[#FFFFFF]">
          <p className="font-inter font-medium text-[14px] text-[#09090B] leading-5">
            See more
          </p>
          <ArrowRight />
        </div>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
          <Movie1 />
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
            <div className="w-full h-14 flex gap-2.5">
              <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">
                Dear Santa
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
          <Movie2 />
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
            <div className="w-full h-14 flex gap-2.5">
              <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">
                How To Train Your Dragon Live Action
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
          <Movie3 />
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
            <div className="w-full h-14 flex gap-2.5">
              <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">
                Alien Romulus
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
          <Movie4 />
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
            <div className="w-full h-14 flex gap-2.5">
              <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">
                From the Ashes
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
          <Movie5 />
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
            <div className="w-full h-14 flex gap-2.5">
              <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">
                Space Dogg
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
          <div className="w-full h-85 bg-[url('/movie-6.jpg')] bg-cover bg-center"></div>
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
            <div className="w-full h-14 flex gap-2.5">
              <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">
                The Order
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
          <Movie7 />
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
            <div className="w-full h-14 flex gap-2.5">
              <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">
                Y2K
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
          <Movie8 />
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
            <div className="w-full h-14 flex gap-2.5">
              <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">
                Solo Leveling: ReAwakening
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
          <Movie9 />
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
            <div className="w-full h-14 flex gap-2.5">
              <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">
                Get Away
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
          <div className="w-full h-85 bg-[url('/movie-10.png')] bg-cover bg-center"></div>
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
            <div className="w-full h-14 flex gap-2.5">
              <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">
                Sonic the Hedgehog 3
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
