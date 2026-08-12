import { ArrowRight } from "../icons/ArrowRight";
import { StarIcon2 } from "../icons/StarIcon2";

export const TopRated = () => {
  return (
    <div className="w-full flex flex-col px-4 md:px-8 gap-8">
      <div className="w-full h-9 flex justify-between items-center">
        <p className="font-inter font-semibold text-[24px] text-[#09090B] leading-8">
          Top Rated
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
          <div className="w-full h-85 bg-[url('/movie-21.jpg')] bg-cover bg-center"></div>
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

        <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
          <div className="w-full h-85 bg-[url('/movie-22.jpg')] bg-cover bg-center"></div>
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
                The Lord of the Rings: Fellowship of the Kings
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
          <div className="w-full h-85 bg-[url('/movie-23.png')] bg-cover bg-center"></div>
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
                The Good, the Bad and the Ugly
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
          <div className="w-full h-85 bg-[url('/movie-24.jpg')] bg-cover bg-center"></div>
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
                Forrest Gump
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
          <div className="w-full h-85 bg-[url('/movie-25.jpg')] bg-cover bg-center"></div>
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
                Fight Club
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
          <div className="w-full h-85 bg-[url('/movie-26.png')] bg-cover bg-center"></div>
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
                Saving Private Ryan
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
          <div className="w-full h-85 bg-[url('/movie-27.png')] bg-cover bg-center"></div>
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
                City of God
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
          <div className="w-full h-85 bg-[url('/movie-28.png')] bg-cover bg-center"></div>
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
                The Green Mile
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
          <div className="w-full h-85 bg-[url('/movie-29.png')] bg-cover bg-center"></div>
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
                Life is Beautiful
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
          <div className="w-full h-85 bg-[url('/movie-30.png')] bg-cover bg-center"></div>
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
                Terminator 2: Judgement Day
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
