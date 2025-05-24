
interface TitleProps {
    title: string;
    description: string;
}

const Title = ({title, description}: TitleProps) => {
  return (
    <header className="flex flex-col gap-6 w-full md:w-9/12 mx-auto">
    <h2 className="text-4xl font-semibold text-text-base text-center">
      {title}
    </h2>
    <p className="mt-2 text-text-muted font-normal text-center">{description}</p>
  </header>
  )
}
export default Title