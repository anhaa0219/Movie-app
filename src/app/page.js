
import { Footer } from "../app/features/Footer"
import { Header } from "../app/features/Header"
import { HeroSection } from "../app/features/HeroSection"
import { ArrowRight } from "./icons/ArrowRight"
import { Movie1 } from "./icons/Movie1"
import { Movie2 } from "./icons/Movie2"
import { Movie3 } from "./icons/Movie3"
import { Movie4 } from "./icons/Movie4"
import { Movie5 } from "./icons/Movie5"
import { Movie7 } from "./icons/Movie7"
import { Movie8 } from "./icons/Movie8"
import { Movie9 } from "./icons/Movie9"
import { StarIcon2 } from "./icons/StarIcon2"

export default function Main() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center overflow-x-hidden">

      <Header />

      <HeroSection />

      <div className="w-full max-w-7xl flex flex-col gap-13 mt-13 shrink-0">

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
                    6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span>
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
                    6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span>
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
                    6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span>
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
                    6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span>
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
                    6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span>
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
                    6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span>
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
                    6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span>
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
                    6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span>
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
                    6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span>
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
                    6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span>
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

        <div className="w-full flex flex-col px-4 md:px-8 gap-8">

          <div className="w-full h-9 flex justify-between items-center">
            <p className="font-inter font-semibold text-[24px] text-[#09090B] leading-8">
              Popular
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
              <div className="w-full h-85 bg-[url('/movie-11.jpg')] bg-cover bg-center"></div>
              <div className="w-full h-23.75 flex flex-col py-2 px-2">
                <div className="w-full h-5.75 flex gap-1">
                  <StarIcon2 />
                  <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span></p>
                </div>
                <div className="w-full h-14 flex">
                  <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">The Shawshank Redemption</p>
                </div>
              </div>
            </div>

            <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
              <div className="w-full h-85 bg-[url('/movie-12.jpg')] bg-cover bg-center"></div>
              <div className="w-full h-23.75 flex flex-col py-2 px-2">
                <div className="w-full h-5.75 flex gap-1">
                  <StarIcon2 />
                  <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span></p>
                </div>
                <div className="w-full h-14 flex">
                  <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">The Godfather</p>
                </div>
              </div>
            </div>

            <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
              <div className="w-full h-85 bg-[url('/movie-13.jpg')] bg-cover bg-center"></div>
              <div className="w-full h-23.75 flex flex-col py-2 px-2">
                <div className="w-full h-5.75 flex gap-1">
                  <StarIcon2 />
                  <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span></p>
                </div>
                <div className="w-full h-14 flex">
                  <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">The Dark Knight</p>
                </div>
              </div>
            </div>

            <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
              <div className="w-full h-85 bg-[url('/movie-14.jpg')] bg-cover bg-center"></div>
              <div className="w-full h-23.75 flex flex-col py-2 px-2">
                <div className="w-full h-5.75 flex gap-1">
                  <StarIcon2 />
                  <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span></p>
                </div>
                <div className="w-full h-14 flex">
                  <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">12 Angry Men</p>
                </div>
              </div>
            </div>

            <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
              <div className="w-full h-85 bg-[url('/movie-15.jpg')] bg-cover bg-center"></div>
              <div className="w-full h-23.75 flex flex-col py-2 px-2">
                <div className="w-full h-5.75 flex gap-1">
                  <StarIcon2 />
                  <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span></p>
                </div>
                <div className="w-full h-14 flex">
                  <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">The Lord of the Rings: The Return of the King</p>
                </div>
              </div>
            </div>

            <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
              <div className="w-full h-85 bg-[url('/movie-16.png')] bg-cover bg-center"></div>
              <div className="w-full h-23.75 flex flex-col py-2 px-2">
                <div className="w-full h-5.75 flex gap-1">
                  <StarIcon2 />
                  <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span></p>
                </div>
                <div className="w-full h-14 flex">
                  <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">Internstellar</p>
                </div>
              </div>
            </div>

            <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
              <div className="w-full h-85 bg-[url('/movie-17.png')] bg-cover bg-center"></div>
              <div className="w-full h-23.75 flex flex-col py-2 px-2">
                <div className="w-full h-5.75 flex gap-1">
                  <StarIcon2 />
                  <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span></p>
                </div>
                <div className="w-full h-14 flex">
                  <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">Se7en</p>
                </div>
              </div>
            </div>

            <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
              <div className="w-full h-85 bg-[url('/movie-18.png')] bg-cover bg-center"></div>
              <div className="w-full h-23.75 flex flex-col py-2 px-2">
                <div className="w-full h-5.75 flex gap-1">
                  <StarIcon2 />
                  <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span></p>
                </div>
                <div className="w-full h-14 flex">
                  <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">It’s a Wonderful Life</p>
                </div>
              </div>
            </div>

            <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
              <div className="w-full h-85 bg-[url('/movie-19.png')] bg-cover bg-center"></div>
              <div className="w-full h-23.75 flex flex-col py-2 px-2">
                <div className="w-full h-5.75 flex gap-1">
                  <StarIcon2 />
                  <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span></p>
                </div>
                <div className="w-full h-14 flex">
                  <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">Seven Samurai</p>
                </div>
              </div>
            </div>

            <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
              <div className="w-full h-85 bg-[url('/movie-20.png')] bg-cover bg-center"></div>
              <div className="w-full h-23.75 flex flex-col py-2 px-2">
                <div className="w-full h-5.75 flex gap-1">
                  <StarIcon2 />
                  <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span></p>
                </div>
                <div className="w-full h-14 flex">
                  <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">The Silence of the Lambs</p>
                </div>
              </div>
            </div>

          </div>
        </div>

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
                  <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span></p>
                </div>
                <div className="w-full h-14 flex">
                  <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">Pulp Fiction</p>
                </div>
              </div>
            </div>

            <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
              <div className="w-full h-85 bg-[url('/movie-22.jpg')] bg-cover bg-center"></div>
              <div className="w-full h-23.75 flex flex-col py-2 px-2">
                <div className="w-full h-5.75 flex gap-1">
                  <StarIcon2 />
                  <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span></p>
                </div>
                <div className="w-full h-14 flex">
                  <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">The Lord of the Rings: Fellowship of the Kings</p>
                </div>
              </div>
            </div>

            <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
              <div className="w-full h-85 bg-[url('/movie-23.png')] bg-cover bg-center"></div>
              <div className="w-full h-23.75 flex flex-col py-2 px-2">
                <div className="w-full h-5.75 flex gap-1">
                  <StarIcon2 />
                  <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span></p>
                </div>
                <div className="w-full h-14 flex">
                  <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">The Good, the Bad and the Ugly</p>
                </div>
              </div>
            </div>

            <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
              <div className="w-full h-85 bg-[url('/movie-24.jpg')] bg-cover bg-center"></div>
              <div className="w-full h-23.75 flex flex-col py-2 px-2">
                <div className="w-full h-5.75 flex gap-1">
                  <StarIcon2 />
                  <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span></p>
                </div>
                <div className="w-full h-14 flex">
                  <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">Forrest Gump</p>
                </div>
              </div>
            </div>

            <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
              <div className="w-full h-85 bg-[url('/movie-25.jpg')] bg-cover bg-center"></div>
              <div className="w-full h-23.75 flex flex-col py-2 px-2">
                <div className="w-full h-5.75 flex gap-1">
                  <StarIcon2 />
                  <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span></p>
                </div>
                <div className="w-full h-14 flex">
                  <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">Fight Club</p>
                </div>
              </div>
            </div>

            <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
              <div className="w-full h-85 bg-[url('/movie-26.png')] bg-cover bg-center"></div>
              <div className="w-full h-23.75 flex flex-col py-2 px-2">
                <div className="w-full h-5.75 flex gap-1">
                  <StarIcon2 />
                  <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span></p>
                </div>
                <div className="w-full h-14 flex">
                  <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">Saving Private Ryan</p>
                </div>
              </div>
            </div>

            <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
              <div className="w-full h-85 bg-[url('/movie-27.png')] bg-cover bg-center"></div>
              <div className="w-full h-23.75 flex flex-col py-2 px-2">
                <div className="w-full h-5.75 flex gap-1">
                  <StarIcon2 />
                  <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span></p>
                </div>
                <div className="w-full h-14 flex">
                  <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">City of God</p>
                </div>
              </div>
            </div>

            <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
              <div className="w-full h-85 bg-[url('/movie-28.png')] bg-cover bg-center"></div>
              <div className="w-full h-23.75 flex flex-col py-2 px-2">
                <div className="w-full h-5.75 flex gap-1">
                  <StarIcon2 />
                  <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span></p>
                </div>
                <div className="w-full h-14 flex">
                  <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">The Green Mile</p>
                </div>
              </div>
            </div>

            <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
              <div className="w-full h-85 bg-[url('/movie-29.png')] bg-cover bg-center"></div>
              <div className="w-full h-23.75 flex flex-col py-2 px-2">
                <div className="w-full h-5.75 flex gap-1">
                  <StarIcon2 />
                  <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span></p>
                </div>
                <div className="w-full h-14 flex">
                  <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">Life is Beautiful</p>
                </div>
              </div>
            </div>

            <div className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden">
              <div className="w-full h-85 bg-[url('/movie-30.png')] bg-cover bg-center"></div>
              <div className="w-full h-23.75 flex flex-col py-2 px-2">
                <div className="w-full h-5.75 flex gap-1">
                  <StarIcon2 />
                  <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">6.9<span className="font-inter font-normal text-[14px] text-[#71717A]">/10</span></p>
                </div>
                <div className="w-full h-14 flex">
                  <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7">Terminator 2: Judgement Day</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

