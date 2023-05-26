/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from '../../store/hooks/reduxHooks';
import { getKittyBreeds } from './../../store/thunk/cats-thunk';

export const useLazyLoadingBreeds = () => {
  const { isLoading } = useSelector((state) => state.breeds);
  const [hasToLoadMore, setHasToLoadMore] = useState(false);
  const [offset, setOffset] = useState(0);

  const loadMoreRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const cb = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setHasToLoadMore(entry.isIntersecting);
    };
    const loadMore = loadMoreRef.current;
    const options = {
      root: null,
      rootMaring: '-20px',
    };
    const observer = new IntersectionObserver(cb, options);
    if (loadMore) observer.observe(loadMore);

    return () => {
      if (loadMore) observer.unobserve(loadMore);
      setOffset(0);
    };
  }, []);

  useEffect(() => {
    if (hasToLoadMore && !isLoading) {
      dispatch(
        getKittyBreeds({
          page: offset,
        })
      );
      setOffset((prev) => prev + 1);
    }
  }, [hasToLoadMore, dispatch]);

  return { loadMoreRef };
};
