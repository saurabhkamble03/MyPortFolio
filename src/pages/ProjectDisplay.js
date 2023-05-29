import { GitHub } from '@material-ui/icons';
import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import '../styles/ProjectDisplay.css'

const ProjectDisplay = () => {

  const { id } = useParams();
  const project = ProjectList[id]

  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p><b>Tech : </b>{project.tech}</p>
      <a href={project.glink} target="_blank"><GitHub /></a>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectDisplay