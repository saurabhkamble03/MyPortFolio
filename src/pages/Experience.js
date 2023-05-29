import { Work } from '@material-ui/icons'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"

const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date='Feb 2022 - July 2022'
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<Work/>}
        >
          <h3 className='vertical-timeline-element-title'>
            Persistent Systems, Pune
          </h3>
          <p>Intern</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date='July 2022 - Currently Working'
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<Work/>}
        >
          <h3 className='vertical-timeline-element-title'>
            Persistent Systems, Pune
          </h3>
          <p>Software Engineer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience