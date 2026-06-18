import React from "react";

const Skills = ({ skillLists = [] }) => {
  return (
    <div className="absolute bottom-6  px-4 left-0 right-0 w-full mx-auto grid grid-cols-3 gap-2.5">
      {skillLists.map((skill) => (
        <SkillBadge key={skill} title={skill} />
      ))}
    </div>
  );
};

export default Skills;

const SkillBadge = ({ title }) => {
  return (
    <div className="rounded-lg bg-skill-badge-bg px-2 py-2  flex-center">
      <span className="skill-badge-text-color text-[9px] font-medium">
        {title}
      </span>
    </div>
  );
};
