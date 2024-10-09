
export function BannerSection() {
    return (
        <section className="flex flex-col justify-around gap-10 w-fit flex-wrap min-h-fit self-center text-left items-center backdrop-blur border-2 py-8 px-10 border-white rounded-xl  bg-gradient-to-r from-indigo-200 via-indigo-50 to-indigo-200 
        sm:flex-row sm:space-y-0 sm:gap-14">

            <div className="flex flex-col drop-shadow-md text-center text-pretty justify-center text-lg border-2 border-dashed p-4 border-white rounded-md text-zinc-800 font-semibold font-poppins 
            sm:text-2xl sm:text-left">
                See The
                <span className="bg-gradient-to-r from-zinc-800 via-violet-400 to-purple-700 bg-clip-text text-transparent font-extrabold">most recently</span>
                and
                <span className="bg-gradient-to-r from-zinc-800 via-blue-400 to-sky-700 bg-clip-text text-transparent font-extrabold">important events</span>
                around the world !
            </div>

            <video src="banner.mp4" autoPlay loop muted className="flex h-max border-2 border-white rounded-md w-96 
            sm:justify-items-center"/>

        </section>
    )
}