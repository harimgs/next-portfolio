import Image from "next/legacy/image";

export default function ProjectItem({ data }) {
  const title = data.properties.Name.title[0].plain_text;
  const description = data.properties.Description.rich_text[0].plain_text;

  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const link = data.properties.Link.url;
  const startDate = data.properties.WorkPeriod.date.start;
  const endDate = data.properties.WorkPeriod.date.end;
  const tags = data.properties.Tags.multi_select;

  const calculateDate = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover image"
        width="100%"
        height="70%"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />

      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Link
        </a>
        <p className="my-1 ">
          Duration : {startDate} ~ {endDate} (
          {calculateDate(startDate, endDate)} days)
        </p>

        <div className="mt-2">
          <h3 className="text-lg font-bold">Skills</h3>
          <div className="flex items-start flex-wrap gap-y-2">
            {tags.map(function (tag) {
              const bgColors = [
                "#0369a1",
                "#4338ca",
                "#a16207",
                "#b91c1c",
                "#15803d",
                "#7e22ce",
                "#b91c1c",
                "#15803d",
                "#7e22ce",
                "#0369a1",
                "#4338ca",
                "#a16207",
              ];

              const getRandomIndex = (length) =>
                parseInt(Math.random() * length);

              const styleObj = {
                backgroundColor: `${bgColors[getRandomIndex(bgColors.length)]}`,
              };
              return (
                <h1
                  className={`px-2 py-1 mr-2 w-30 rounded-md bg-sky-200 dark:bg-purple-700 text-white`}
                  style={styleObj}
                  key={tag.id}
                >
                  {tag.name}
                </h1>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
