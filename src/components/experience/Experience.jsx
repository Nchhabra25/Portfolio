import React from 'react'
import TimelineComponent from '../../assets/TimelineComponent'
import { experiences } from '../../Data'
const Experience = () => {
  return (
    <div id="experience">
      <TimelineComponent data={experiences} title="Experience"/>
    </div>
  )
}

export default Experience
