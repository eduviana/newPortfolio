import { useRouter } from "next/navigation";

export const Back = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.back()} className="flex items-center gap-1 bg-brand-primary w-fit rounded-md py-2 px-4 hover:bg-brand-hover cursor-pointer transition-colors duration-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
        />
      </svg>

      <span className="font-semibold">Volver</span>
    </div>
  );
};
