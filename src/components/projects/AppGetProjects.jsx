import React, { useState, useEffect } from 'react';
import { getProjects } from '../../services/AppProjectService';
import { useNavigate } from 'react-router-dom';

const AppGetProjects = () => {
  const [projects, setProjects] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 3;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { total, projects } = await getProjects(page, limit);
        setProjects(projects);
        setTotal(total);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };

    fetchProjects();
  }, [page]);

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (projects.length === limit) setPage(page + 1);
  };

  const handleProjectClick = (project) => {
    navigate(`/projects/get-project/${project._id}/${project.title}`);
  };

  if (!projects.length) return <div>Loading...</div>;

  return (
    <div id="body">
      <h3 className="general-text">PROJECTS ({total})</h3>
      <hr />
      <div id="posts" className="">
        {projects.map(project => (
          <article key={project._id} id="showed-post" className="JetBrains m-3" onClick={() => handleProjectClick(project)}>
            <div id="post-title-item">
              <h4>
                <span id="post-title" className="general-text">{project.title}</span>
              </h4>
            </div>
            <div id="post-image-item">
              <img src={project.image.secure_url} alt="" />
            </div>
            <p className="m-2">{project.content}</p>
            <div className="row m-2">
              <div className="col-6">
                <span>
                  <img
                    className="default-user-autor"
                    src="https://res.cloudinary.com/dorqesogu/image/upload/v1684945877/utils/149071_vbgvli.png"
                    alt="autor"
                  />
                  <span className="text-secondary fst-italic">Nilson Escobar</span>
                </span>
              </div>
              <div className="col-6">
                <span>
                  <img
                    className="default-user-autor"
                    src="https://res.cloudinary.com/dorqesogu/image/upload/v1684945540/utils/109613_cd9hmd.png"
                    alt="Date"
                  />
                  <span className="text-secondary fst-italic">{new Date(project.date).toLocaleDateString()}</span>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <br />
      <br />
      {total > limit && (
        <div className="pagination justify-content-center JetBrains">
          <button className="btn btn-primary" onClick={handlePrevious} disabled={page === 1}>Previous</button>
          &nbsp;
          <button className="btn btn-primary" onClick={handleNext} disabled={projects.length < limit}>Next</button>
        </div>
      )}
    </div>
  );
};

export default AppGetProjects;
