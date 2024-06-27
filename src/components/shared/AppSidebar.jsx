import React, { useState, useEffect } from 'react';
import { getProjects } from '../../services/AppProjectService';
import { AppGetUtils } from '../../services/AppUserService';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AppSidebar = () => {
  const [info, setInfo] = useState(true);
  const [projects, setProjects] = useState(null);
  const [url, setUrl] = useState("");
  const location = useLocation();

  const fetchData = async () => {
    try {
      const result = await AppGetUtils();
      if (result && result.images) {
        const firstImage = result.images.image_10;
        setUrl(firstImage);
      } else {
        console.error("Result does not contain 'images'");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 2;

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

  const isUserProfile = location.pathname === '/user/profile/get-escnil994-info';

  return (
    <aside id="sidebar" className="JetBrains">
      {isUserProfile && (
        <div className="sidebar-item" style={{ display: info ? 'block' : 'none' }}>
          <h3 className="sp">RESUME</h3>
          <div className="aside-box" style={{ height: '150px' }}>
            <h5>Download a resume copy here</h5>
            <br />
            <a target="_blank" title={url} href={url}>
              <i className="fa-solid fa-file-pdf fa-2xl" style={{ color: '#952601' }}></i>
            </a>
          </div>
        </div>
      )}

      <div id="search" className="sidebar-item">
        <h3 className="sp">Buscador</h3>
        <div className="aside-box buscador">
          <form>
            <input name="search" id="bnt-look" disabled />
            <input className="icon icon-look" type="submit" value="L" disabled />
          </form>
        </div>
      </div>

      <div id="nav-blog" className="sidebar-item">
        <h3 className="sp">últimos</h3>
        <div className="aside-box especial">
          {!projects ? (
            <div className="spinner-grow" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            projects.map(project => (
              <article className="project-item-especial" key={project._id}>
                <Link to={`/projects/get-project/${project._id}/${project.title}`}>
                  <img className="w-25" src={project.image.secure_url} alt={project.title} />
                  <h5 id="last-projects-title">{project.title}</h5>
                </Link>
              </article>
            ))
          )}
        </div>
      </div>

      <div className="sidebar-item">
        <h3 className="sp">REDES SOCIALES</h3>
        <div id="social" className="aside-box">
          <div className="twitter">
            <a className="icon twit" href="https://twitter.com/escnil994" target="_blank" rel="noopener noreferrer">t</a>
          </div>
          <div className="facebook">
            <a className="icon face" href="https://facebook.com/escnil994" target="_blank" rel="noopener noreferrer">f</a>
          </div>
          <div className="youtube">
            <Link to="/user/profile/contact" className="mas JetBrains"><strong>ver mas</strong></Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AppSidebar;
