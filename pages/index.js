import React from 'react';
import axios from 'axios';

import VideoCard from '../components/videoCard';
import { BASE_URL } from '../utils';
import NoResults from '../components/noResults';

const Home = ({ videos }) => {
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length 
        ? videos?.map((video) => (
          <VideoCard post={video} isShowingOnHome key={video._id} />
        )) 
        : <NoResults text={`No Videos`} />}
    </div>
  );
};

export default Home;

export const getServerSideProps = async ({
  query: { topic },
}) => {
  let response = await axios.get(`${BASE_URL}/api/post`);

  if(topic) {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  }
  
  return {
    props: { videos: response.data },
  };
};