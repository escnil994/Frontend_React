import React, { useState, useEffect } from 'react';
import '../../assets/css/AppComments.css'; // Asegúrate de crear este archivo para los estilos
import { GetComments } from '../../services/AppCommentService';

const AppGetAppComments = () => {
  const [comments, setComments] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 3;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { total, comments } = await GetComments(page, limit);
        setComments(comments);
        setTotal(total);
      } catch (error) {
        console.error('Failed to fetch comments:', error);
      }
    };

    fetchComments();
  }, [page]);

  const changePage = (delta) => {
    setPage(prevPage => prevPage + delta);
  };

  return (
    <div className="col-">
      <div className="row w-75 m-auto">
        <h4 className="text-left general-text">{total} comments</h4>
        <hr />
        <br /><br />

        {comments.map((item, index) => (
          <div className="row w-100 m-auto JetBrains" key={index}>
            {!item.allowed && (
              <code className="text-warning">
                This comment is not approved yet
              </code>
            )}
            <div className="col-2">
              <div className="circulo" style={{ backgroundColor: item.color }}>
                <h1 className="icono">{item.name.charAt(0)}</h1>
              </div>
            </div>
            <div className="col-10">
              <h5 className="text-left mb-0">{item.name}</h5>
              <p className="text-left text-secondary">{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
              <p className="text-left">{item.comment}</p>
            </div>
            <hr />
          </div>
        ))}
   
        {total > limit && (
          <div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-secondary" onClick={() => changePage(-1)} disabled={page === 1}>{'<<<'}</button>
            <span>More comments</span>
            <button className="btn btn-secondary" onClick={() => changePage(1)} disabled={page * limit >= total}>{'>>>'}</button>
          </div>
        )}
      </div>
      <br /><br />
    </div>
  );
};

export default AppGetAppComments;
