import React from 'react';
import fakeProjectData from '../fakeData/fakeProjectData';
import SingleProject from '../SingleProject/SingleProject';
import './ProjectSection.css';
const ProjectSection = () => {
  return (
    <section className='project py-70' id='project'>
      <div className='container'>
      <h5 style={{color:'#f9004d',letterSpacing:'2px', fontWeight:'bold'}}>Projects</h5>
                    <h1 className='text-white'>My Recent Works</h1>
        <div className='row'>
          {fakeProjectData.map(project => (
            <SingleProject key={project.id} project={project} />
          ))}
        </div>
        <div className='allProject d-flex justify-content-center mt-5'>
          <button className='btn-primary btn'>All My Project</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
