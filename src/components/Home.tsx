import React from 'react';

type Props = {
    title?: string;
};
const Home: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <h1>{title ?? "Welcome to the Home Page"}</h1>
    </div>
  );
};


export default Home;
