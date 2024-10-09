import { ClockArrowUp, Plus, HeartPulse, DollarSign, Fingerprint, FlaskConical, Bike, Laugh } from "lucide-react";

interface CategoryBtnProps {
    category: string;
}

export function CategoryBtn({ category }: CategoryBtnProps) {
    switch (category) {
        case "Recents":
            return (
                <a href="#" className="flex py-2 px-6 text-sm font-poppins items-center border-2 gap-4 bg-[#E9E9E9] border-white rounded-3xl">
                    {category} <ClockArrowUp className="size-4" />
                </a>
            );
        case "All":
            return (
                <a href="#" className="flex py-2 px-6 text-sm font-poppins items-center border-2 gap-4 bg-[#E9E9E9] border-white rounded-3xl">
                    {category} <Plus className="size-4" />
                </a>
            );
        case "Health":
            return (
                <a href="#" className="flex py-2 px-6 text-sm font-poppins items-center border-2 gap-4 bg-[#F9E5E5] border-white rounded-3xl">
                    {category} <HeartPulse className="size-4" />
                </a>
            );
        case "Business":
            return (
                <a href="#" className="flex py-2 px-6 text-sm font-poppins items-center border-2 gap-4 bg-[#DEE7D8] border-white rounded-3xl">
                    {category} <DollarSign className="size-4" />
                </a>
            );
        case "Tech":
            return (
                <a href="#" className="flex py-2 px-6 text-sm font-poppins items-center border-2 gap-4 bg-[#D6E3E9] border-white rounded-3xl">
                    {category} <Fingerprint className="size-4" />
                </a>
            );
        case "Science":
            return (
                <a href="#" className="flex py-2 px-6 text-sm font-poppins items-center border-2 gap-4 bg-[#DBDAEA] border-white rounded-3xl">
                    {category} <FlaskConical className="size-4" />
                </a>
            );
        case "Sports":
            return (
                <a href="#" className="flex py-2 px-6 text-sm font-poppins items-center border-2 gap-4 bg-[#F1E9DB] border-white rounded-3xl">
                    {category} <Bike className="size-4" />
                </a>
            );
        case "Enterteinment":
            return (
                <a href="#" className="flex py-2 px-6 text-sm font-poppins items-center border-2 gap-4 bg-[#EDDDEC] border-white rounded-3xl">
                    {category} <Laugh className="size-4" />
                </a>
            );
        default:
            return null;
    }
}
