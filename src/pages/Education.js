import { School } from '@material-ui/icons'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"

const Education = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date='2015-2016'
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<School/>}
        >
          <h3 className='vertical-timeline-element-title'>
            School Of Scholars, Yavatmal
          </h3>
          <p>10th</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date='2017-2018'
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<School/>}
        >
          <h3 className='vertical-timeline-element-title'>
            RD Junior College, Yavatmal
          </h3>
          <p>12th</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date='2018-2022'
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<School/>}
        >
          <h3 className='vertical-timeline-element-title'>
            JSPM's Imperial College Of Engineering & Research, Wagholi, Pune
          </h3>
          <p>B.E. Computer Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Education