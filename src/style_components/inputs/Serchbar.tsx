import { Search } from "lucide-react"

export function Searchbar() {

    return (
        <div className='flex max-w-xs flex-grow flex-shrink backdrop-blur-lg bg-gradient-to-r from-white via-transparent to-white items-center justify-between px-6 py-3 rounded-3xl  text-zinc-800'>
            <input type="text" className='outline-none bg-transparent text-zinc-800' placeholder='Search' />

            <a href="#" className='text-zinc-800 hover:text-zinc-950'><Search className='size-6' /></a>
        </div>
    )

}