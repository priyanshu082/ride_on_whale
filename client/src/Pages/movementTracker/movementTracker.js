import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Corrected useSelector import
import { fetchCollection } from '../../redux/features/collectionSlice';

const MovementTracker = () => {
  const dispatch = useDispatch();

  // Access the collection data from the Redux store
  const collection = useSelector((state) => state.collection.data);
  const collectionLoading = useSelector((state) => state.collection.loading);
  const collectionError = useSelector((state) => state.collection.error);

  // Fetch the collection data when the component mounts
  useEffect(() => {
    dispatch(fetchCollection());
  }, [dispatch]);

  // Log the collection data
  useEffect(() => {
    if (collection.length > 0) {
      console.log('Collection Data:', collection);
    }
  }, [collection]);

  return (
    <div>
      <h1>Movement Tracker</h1>
      {collectionLoading && <p>Loading...</p>}
      {collectionError && <p>Error: {error}</p>}
      {collection.length > 0 && <p>Data Loaded Successfully!</p>}
    </div>
  );
};

export default MovementTracker;
