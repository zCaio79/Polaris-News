
import { CategoryBtn } from "../style_components/inputs/CategoryBtn"

export function CategorySection(){
    return (
        <>
            <section className=" flex backdrop-blur w-full itens-center font gap-8 border-2 px-10 py-6 justify-center items-center flex-col border-white rounded-xl  bg-gradient-to-r from-indigo-200 via-indigo-50 to-indigo-200">

                <h2 className="font-poppins font-light">Article Categories</h2>

                <div className="flex flex-wrap justify-center items-center gap-3 sm:flex-row sm:gap-6">

                    <CategoryBtn category="Recents" />
                    <CategoryBtn category="All" />
                    <CategoryBtn category="Health" />
                    <CategoryBtn category="Business" />
                    <CategoryBtn category="Tech" />
                    <CategoryBtn category="Science" />
                    <CategoryBtn category="Sports" />
                    <CategoryBtn category="Enterteinment" />

                </div>

            </section>
        </>
    )
}