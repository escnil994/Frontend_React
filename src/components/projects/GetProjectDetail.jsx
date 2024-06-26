import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectDetail } from '../../services/AppProjectService';

const ProjectDetail = () => {
  const [project, setProject] = useState(null);
  const { id, nameproject } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      try {
       
        const data = await getProjectDetail(id);
        setProject(data.project);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    fetchProject();
  }, [id]);


  if (!project) return <div>Loading...</div>;



 

  const videoUrl = `https://www.youtube.com/embed/${project.videoId}`; 

  return (
    <div id="body">
      <h1 className="subheader general-text">{project.title || ''}</h1>
      <article className="project-detail JetBrains">
        <div className="image-wrap-unit">
          <img src={project.image?.secure_url || ''} alt="Project image" />
        </div>
        <div className="date text-secondary font-weight-bold text-capitalize">
          <span>{new Date(project.date).toLocaleDateString()}</span>
        </div>
        <br />
        <div className="details">
          <h2 className="text-center general-text">Descripción:</h2>
          <p id="font-desc">{project.content}</p>
        </div>
        <div className="details">
          <h2 className="text-center general-text"></h2>
          <p id="font-desc">{project.more}</p>
        </div>
        <div className="details">
          <h4 className="text-center general-text">Puedes ver en la siguiente url:</h4>
          <a className="font-weight-bold" href={project.url}>{project.title}</a>
        </div>
        <div className="video general-text">
          <h4>Tambien puedes ver el video donde te doy una pequeña explicación de cómo está hecho:</h4>
          <div id="video">
            <iframe width="560" height="315" src={videoUrl} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
        <div className="clearfix"></div>
      </article>
    </div>
  );
};

export default ProjectDetail;
