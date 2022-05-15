import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPostQuery } from '../../../app/services/posts';
import PostDetail from '../../../features/posts/PostDetail';
import useDidMountEffect from '../../../hooks/useDidMountEffect';
import LoadingSpinner from '../../common/animations/LoadingSpinner';
import Card from '../../common/boxes/cards/Card';

const PostDetailPage = () => {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();

  const { data: post, isLoading, isFetching, error } = useGetPostQuery({ id });

  useDidMountEffect(() => {
    navigate('/posts/not-found');
  }, [error, navigate]);

  if (isLoading || isFetching) return <LoadingSpinner />;
  if (error) return <div>Error</div>;

  return (
    <Card>
      <PostDetail post={post} />
    </Card>
  );
};

export default PostDetailPage;
