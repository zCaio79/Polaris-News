
export function BannerSection() {
    return (
        <section className="flex flex-col justify-around gap-6 w-fit sm:w-full flex-wrap min-h-fit self-center items-center text-left backdrop-blur border-2 py-6 px-6 border-white rounded-2xl bg-gradient-to-r from-indigo-200 via-indigo-50 to-indigo-200 
        sm:flex-row sm:gap-10">

            <div className="flex flex-col drop-shadow-md text-center text-pretty justify-center text-lg sm:text-2xl gap-1 border-2 px-8 py-4 bg-white bg-opacity-80 border-white rounded-md text-zinc-800 font-semibold font-poppins 
        sm:text-left">
                See The
                <span className="bg-gradient-to-r from-zinc-800 via-violet-400 to-purple-700 bg-clip-text text-transparent font-extrabold">
                    most recently
                </span>
                and
                <span className="bg-gradient-to-r from-zinc-800 via-blue-400 to-sky-700 bg-clip-text text-transparent font-extrabold">
                    important events
                </span>
                around the world!
            </div>

            <video src="banner.mp4" autoPlay loop muted className="flex max-h-48 drop-shadow-md sm:max-h-full border-2 border-white rounded-md w-72 sm:w-96 object-cover" />

        </section>

    )
}