import React from 'react';
import useResource from './useResource';

const ResourceList = ({ resource }) => {
  const resources = useResource(resource);

  return (
    <ol>
      {resources.map((r) => (
        <li key={r.id}>{r.title}</li>
      ))}
    </ol>
  );
};

export default ResourceList;
