// src/components/SkillSection.jsx
import React from 'react';
import SkillCard from './ProfileSkillCard';

const SkillSection = ({ title, skills, isPriority = false }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} isPriority={isPriority} />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;