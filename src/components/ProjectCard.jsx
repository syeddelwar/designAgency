import Image from 'next/image'
import React from 'react'

function ProjectCard({title, imgSrc}) {
  return (
    <div className="p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl">
      <div className="w-full rounded-xl overflow-hidden bg-gray-50">
        <Image
          src={imgSrc}
          alt="image"
          width={600}
          height={600}
          className="w-full"
        />
      </div>
      <div className="uppercase font-semibold text-xl pt-3">
        {title}
      </div>
    </div>
  );
}

export default ProjectCard