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
        <p className="mb-8 leading-relaxed lg:text-2xl md:text-xl">
          My name is HaRim Choi, and I am a first-year CS Technician student at
          Mohawk College. I have a passion for building web and mobile
          applications, and I am always eager to learn new technologies and
          adapt to different tools as required. I enjoy expanding my knowledge
          and meeting new people along the way.
        </p>
        <div className="flex justify-center"></div>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            View Projects
          </Link>
        </div>

        <div className="xl:w-3/5 w-full md:pr-10 md:py-6 my-10">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Awards & Scholarships
          </h1>
          <div className="flex relative pb-12">
            <div className="h-full w-14 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1  bg-gray-700 dark:bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <div class="w-14 flex-shrink-0 flex flex-col text-center leading-none">
                <span class="text-white mb-0.5 border-b-2 border-gray-200 text-sm font-medium">
                  Feb
                </span>
                <span class="font-medium text-sm text-slate-800 title-font leading-none">
                  2023
                </span>
              </div>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                Mohawk College Foundation Entrance Scholarship
                <br className="lg:inline-block" />
                Mohawk College
              </h2>
              <p className="leading-relaxed">
                Mohawk College Foundation Entrance Scholarship given to students
                who have achieved a GPA of 80% or greater based on their most
                recently completed academic term.
              </p>
            </div>
          </div>

          <div className="flex relative">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <div class="w-14 flex-shrink-0 flex flex-col text-center leading-none">
                <span class="text-white mb-0.5 border-b-2 border-gray-200 text-sm font-medium">
                  Mar
                </span>
                <span class="font-medium text-sm text-slate-800 title-font leading-none">
                  2023
                </span>
              </div>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                Dean’s Honours List for the Fall 2022 Semester
                <br className="lg:inline-block" />
                Mohawk College
              </h2>
              <p className="leading-relaxed">
                Maintained and demonstrated academic excellence, achieving a 97%
                GPA average in the first semester.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
