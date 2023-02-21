import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Welcome to
          <br className="lg:inline-block" />
          {"HaRim's Portfolio!"}
        </h1>
        <p className="mb-8 leading-relaxed text-2xl">
          My name is HaRim Choi, and I am a first-year CS Technician student at
          Mohawk College. I have a passion for building web and mobile
          applications, and I am always eager to learn new technologies and
          adapt to different tools as required. I enjoy expanding my knowledge
          and meeting new people along the way.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            View Projects
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
