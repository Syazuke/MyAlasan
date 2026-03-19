import { listIndustries, listSkills, listProjects } from "../../../../utils/constants";
import Modal from "../../atoms/Modal";
import CardLarge from "../../atoms/CardLarge";
import CardSmall from "../../atoms/CardSmall";
import { useState } from "react";

const HeroSkill = () => {
  const [dataProject, setDataProject] = useState(undefined)
  return (
    <>
      <div className="mt-6 text-left text-black">
        <h1 className="font-barlow max-w-92.5 text-4xl font-bold max-xl:w-75 max-xl:text-3xl">
          Skills
        </h1>
      </div>

      <div className="flex w-full gap-2 text-black max-md:flex-col-reverse">
        <div className="flex w-1/2 flex-wrap gap-x-4 gap-y-19 overflow-hidden py-18 max-md:w-full max-md:items-center max-md:justify-center">
          {listSkills.map((item, index) => (
            <CardSmall
              key={index}
              img={item.icon}
              title={item.name}
              link={item.link}
            />
          ))}
        </div>

        <div className="flex w-1/2 flex-col gap-4 py-6 max-md:w-full">
          {listProjects.map((item, index) => (
            <CardLarge
              key={index}
              img={item.background}
              text={item.desc}
              title={item.title}
              tech={item.list_tech}
              onClick={() => setDataProject(item)}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={dataProject}
        onClose={() => setDataProject(undefined)}
        data={dataProject}
      />
    </>
  );
};
export default HeroSkill;