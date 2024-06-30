import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ApproveComments,GetCommentByID } from '../../services/AppCommentService'; // Asegúrate de importar la función correcta para obtener el comentario

const ApproveCommentComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const comment = await GetCommentByID(id);

        if (!comment.ok || comment.comment.isAllowed) {
          Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'This link is not valid or has already been used'
          });
          navigate('/');
        } else {
          Swal.fire({
            title: 'Do you want to approve this comment?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, approve it!'
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                const res = await ApproveComments(id);
                if (res.data.ok) {
                  Swal.fire(
                    'Approved!',
                    'Comment has been approved.',
                    'success'
                  );
                } else {
                  Swal.fire(
                    'Error!',
                    'Error approving this comment.',
                    'error'
                  );
                }
              } catch (error) {
                Swal.fire(
                  'Error!',
                  'Error approving this comment.',
                  'error'
                );
              }
              navigate('/');
            }
          });
        }
      } catch (error) {
        console.error("Error fetching comment", error);
      }
    };

    fetchComment();
  }, [id, navigate]);

  return null;
};

export default ApproveCommentComponent;
