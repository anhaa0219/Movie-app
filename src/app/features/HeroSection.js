
import { StarIcon } from "../icons/StarIcon"
import { PlayIcon } from "../icons/PlayIcon"

export const HeroSection = () => {
  return (
    <div className="w-full mt-6 flex shrink-0 overflow-x-auto overflow-y-hidden">
      <div className="w-full min-w-full h-150 flex bg-[url('/hero-1.jpg')] bg-cover bg-center shrink-0">
        
        <div className="w-101 h-66 flex flex-col gap-4 mt-auto mb-10 ml-8 lg:ml-16 xl:ml-24 2xl:ml-35">
          
          <div className="w-full h-28 flex flex-col">
            <p className="w-full h-6 font-inter font-normal text-4 text-[#FFFFFF] flex justify-start items-center">
              Now Playing:
            </p>

            <p className="w-full h-10 font-inter font-bold text-[36px] text-[#FFFFFF] flex justify-start items-center">
              Wicked
            </p>

            <div className="w-full h-12 gap-1 flex items-center justify-start">
              <StarIcon />

              <p className="w-12.75 h-7 font-inter font-semibold text-[18px] text-[#FAFAFA]">
                6.9
                <span className="font-inter font-normal text-4 text-[#71717A]">
                  /10
                </span>
              </p>
            </div>
          </div>

          <div className="w-full h-20 flex justify-start">
            <p className="w-75.5 h-20 font-inter font-normal text-[12px] leading-4 text-[#FAFAFA]">
              Elphaba, a misunderstood young woman because of her green skin,
              and Glinda, a popular girl, become friends at Shiz University
              in the Land of Oz. After an encounter with the Wonderful Wizard
              of Oz, their friendship reaches a crossroads.
            </p>
          </div>

          <div className="w-full h-10 flex justify-start">
            <div className="w-36.25 h-10 flex gap-2 rounded-md bg-[#F4F4F5] justify-center items-center">
              <PlayIcon />

              <p className="w-22.25 h-5 font-inter font-medium text-[14px] text-[#18181B] leading-4">
                Watch Trailer
              </p>
            </div>
          </div>

        </div>
      </div>


      <div className="w-full min-w-full h-150 flex bg-[url('/hero-2.png')] bg-cover bg-center shrink-0">
      </div>


      <div className="w-full min-w-full h-150 flex bg-[url('/hero-3.jpg')] bg-cover bg-center shrink-0">
      </div>

    </div>
  )
}

