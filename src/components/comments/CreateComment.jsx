import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CreateComment } from '../../services/AppCommentService';

const AppCreateComment = () => {
  const [success, setSuccess] = useState(false);
  const [userName, setUserName] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const createComment = async (data) => {
    try {
      await CreateComment(data);
      setUserName(data.name);
      setSuccess(true);
      reset(); 
    } catch (error) {
      console.error('Error al enviar el comentario:', error);
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000); 

      return () => clearTimeout(timer); 
    }
  }, [success]);

  return (
    <div>
      {success && (
        <div className="d-flex justify-content-center">
          <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
            <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </symbol>
          </svg>
          <div className="alert alert-success d-flex justify-content-center w-75" role="alert">
            <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
              <use xlinkHref="#check-circle-fill" />
            </svg>
            <div className="text-center align-items-center">
              Thanks <strong>{userName}</strong>, Comment has been sent for authorization!!!
            </div>
          </div>
        </div>
      )}

      <form id="commentForm" onSubmit={handleSubmit(createComment)}>
        <div className="row d-flex justify-content-center JetBrains">
          <div className="col-md-5 col-12">
            <h2>Leave me a comment</h2>
            <div className="form-outline form-white mb-4">
              <div>
                {errors.name && <code className="text-danger">Name must have at least 8 characters</code>}
              </div>
              <input
                type="text"
                id="form5Example22"
                className="form-control text-center"
                placeholder="Name is required"
                {...register('name', { required: true, minLength: 8 })}
              />
              <label className="form-label" htmlFor="form5Example22">Name</label>
              <div>
                {errors.email && <code className="text-danger">Email must be valid</code>}
              </div>
              <input
                type="email"
                id="form5Example21"
                className="form-control"
                placeholder="Email is required"
                {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
              />
              <label className="form-label" htmlFor="form5Example21">Email address</label>
              <div>
                {errors.comment && <code className="text-danger">Comment must have at least 12 characters</code>}
              </div>
              <textarea
                className="form-control"
                {...register('comment', { required: true, minLength: 12 })}
              ></textarea>
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-outline-light mb-4 text-center">
                Send Comment
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AppCreateComment;
