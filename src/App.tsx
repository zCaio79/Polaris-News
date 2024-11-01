import { Header } from "./main_components/Header"
import { BannerSection } from "./main_components/BannerSection"
import { CategorySection } from "./main_components/CategorySection"


export function App() {

  return (
    <>
      <div className="flex w-full min-h-screen bg-[#DCE3F4]">

        <div className="max-w-screen-lg mx-auto px-4 py-6 flex flex-col min-h-full w-full items-center gap-6 m-4 rounded-2xl bg-[#EDF3FA]">
          
          <Header />
          <BannerSection />
          <CategorySection />
          

        </div>

      </div>
    </>
  )

}

