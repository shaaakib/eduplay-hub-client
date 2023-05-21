import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - EduPlay Hub`;
  }, [title]);
};

export default useTitle;
