import { ClockArrowUp, Plus, HeartPulse, DollarSign, Fingerprint, FlaskConical, Bike, Laugh } from "lucide-react";

interface CategoryBtnProps {
    category: string;
}

const categories = {

    Recents: { bgColor: "#E9E9E9", icon: <ClockArrowUp className="size-4" /> },

    All: { bgColor: "#E9E9E9", icon: <Plus className="size-4" /> },

    Health: { bgColor: "#F9E5E5", icon: <HeartPulse className="size-4" /> },

    Business: { bgColor: "#DEE7D8", icon: <DollarSign className="size-4" /> },

    Tech: { bgColor: "#D6E3E9", icon: <Fingerprint className="size-4" /> },

    Science: { bgColor: "#DBDAEA", icon: <FlaskConical className="size-4" /> },

    Sports: { bgColor: "#F1E9DB", icon: <Bike className="size-4" /> },
    
    Entertainment: { bgColor: "#EDDDEC", icon: <Laugh className="size-4" /> }

};

export function CategoryBtn({ category }: CategoryBtnProps) {
    const categoryData = categories[category as keyof typeof categories];

    if (!categoryData) return null;

    return (
        <a
            href="#"
            className={`flex items-center drop-shadow-md py-2 px-4 sm:py-2 sm:px-6 text-xs sm:text-sm font-poppins border-2 gap-2 sm:gap-4 border-white rounded-3xl`}
            style={{ backgroundColor: categoryData.bgColor }}
        >
            {category} {categoryData.icon}
        </a>
    );
}
