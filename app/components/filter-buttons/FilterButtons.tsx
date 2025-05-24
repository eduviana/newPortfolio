interface FilterButtonsProps {
  selectedFilter: string;
  onChange: (filter: string) => void;
}

const filters = ["Todos", "React", "Nextjs", "Fullstack", "Freelance", "Frontend Mentor", "Prueba Técnica"];

export const FilterButtons = ({
  selectedFilter,
  onChange,
}: FilterButtonsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap justify-center w-full md:w-9/12 mx-auto my-12">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`rounded-lg py-2 px-2 font-medium text-base xl:text-lg cursor-pointer transition-colors duration-300 ${
            selectedFilter === filter
              ? "bg-brand-primary text-text-base"
              : "bg-[#F8F8F8] text-text-contrast"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
