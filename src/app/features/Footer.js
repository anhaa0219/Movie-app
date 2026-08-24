import { EmailLogo } from "../icons/EmailLogo";
import { MovielogoWhite } from "../icons/MovielogoWhite";
import { PhoneLogo } from "../icons/PhoneLogo";

export const Footer = () => {
  return (
    <footer className="mt-12 w-full bg-[#4338CA] py-10 px-4 sm:px-8 lg:px-12 xl:px-16 flex justify-center shrink-0">
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between gap-8 md:gap-12">
        <div className="flex flex-col gap-3 shrink-0">
          <div className="flex gap-2 items-center">
            <MovielogoWhite />
            <span className="font-inter font-bold italic text-base text-[#FAFAFA]">
              Movie Z
            </span>
          </div>

          <p className="font-inter font-normal text-xs sm:text-sm text-[#FAFAFA]/90">
            © 2024 Movie Z. All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-start md:justify-end gap-8 sm:gap-12 xl:gap-24">
          <div className="flex flex-col gap-3 shrink-0">
            <p className="font-inter font-semibold text-sm text-[#FAFAFA]">
              Contact Information
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <div className="mt-0.5 shrink-0">
                  <EmailLogo />
                </div>
                <div className="flex flex-col text-xs sm:text-sm text-[#FAFAFA]">
                  <span className="font-medium">Email:</span>
                  <span className="font-normal text-[#FAFAFA]/90">
                    support@movieZ.com
                  </span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="mt-0.5 shrink-0">
                  <PhoneLogo />
                </div>
                <div className="flex flex-col text-xs sm:text-sm text-[#FAFAFA]">
                  <span className="font-medium">Phone:</span>
                  <span className="font-normal text-[#FAFAFA]/90">
                    +976 (11) 123-4567
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 shrink-0">
            <p className="font-inter font-semibold text-sm text-[#FAFAFA]">
              Follow us
            </p>

            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-[#FAFAFA]">
              <span className="font-medium cursor-pointer hover:underline">
                Facebook
              </span>
              <span className="font-medium cursor-pointer hover:underline">
                Instagram
              </span>
              <span className="font-medium cursor-pointer hover:underline">
                Twitter
              </span>
              <span className="font-medium cursor-pointer hover:underline">
                Youtube
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
