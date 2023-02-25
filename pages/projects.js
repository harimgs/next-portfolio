import { TOKEN, DATABASE_ID } from "@/config";
import ProjectItem from "@/components/projects/project-item";

export default function Projects({ projects }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 mb-10 mt-5 .fade-in">
      <h1 className="text-4xl font-bold sm:text-6xl">
        Projects Total :
        <span className="pl-4 text-blue-500">{projects.results.length}</span>
      </h1>
      <div className="grid grid-cols-1 gap-8 p-4 m-4 xl:w-7/12 lg:w-8/12 md:w-10/12 md:grid-cols-2 md:gap-14 md:p-12 w-full">
        {projects.results.map((project, i) => (
          <ProjectItem key={i} data={project} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "WorkPeriod",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
