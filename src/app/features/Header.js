
import { Movielogo } from "../icons/Movielogo"
import { ArrowDown } from "../icons/ArrowDown"
import { SearchIcon } from "../icons/SearchIcon"
import { MoonIcon } from "../icons/MoonIcon"

export const Header = () => {
  return (
    <div className="w-full min-h-14.75 shrink-0 border-b border-zinc-200 bg-white px-6 lg:px-8 xl:px-12 flex justify-center items-center">
      
      <div className="w-full max-w-7xl flex items-center justify-between gap-8">
        
        <div className="flex items-center gap-2 shrink-0">
          <Movielogo />
          <span className="font-bold italic text-lg text-[#4338CA]">
            Movie Z
          </span>
        </div>

        <div className="flex items-center gap-3 flex-1 max-w-2xl">
          
          <div className="h-9 flex items-center gap-2 px-3 rounded-md border border-zinc-200 bg-white shadow-sm shrink-0">
            <ArrowDown />
            <span className="text-sm font-medium text-[#18181B]">
              Genre
            </span>
          </div>

          <div className="h-9 flex items-center gap-2.5 px-3 rounded-lg border border-zinc-200 bg-white shadow-sm flex-1 min-w-0">
            <SearchIcon />

            <input
              type="text"
              className="w-full min-w-0 text-sm text-[#18181B] bg-transparent outline-none placeholder:text-zinc-400"
              placeholder="Search ..."
            />
          </div>

        </div>

        <div className="w-9 h-9 flex justify-center items-center border border-zinc-200 shadow-sm bg-white rounded-lg shrink-0">
          <MoonIcon />
        </div>

      </div>
    </div>
  )
}

