import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { fadeInBottomVariant } from './Utils';
import Card from './Card';
export const Container=styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  align-items: flex-start;
`
export const Wrapper=styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap:10px;
  width: 100%;
 
`
export const Title=styled(motion.h1)`
  font-weight: 800;
  font-size: 40px;
  align-content: flex-start;
  color: ${({theme})=>theme.text1};
  text-align: center;
  @media screen and (max-width: 770px) {
    font-size: 30px;
    margin-top: 10px;
  }
`
const Timelinesection=styled.div`
   max-width: 1000px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap:12px;
   margin-top: 10px;
   .css-1ami7lv-MuiTimelineConnector-root {
    background-color: ${({theme})=>theme.primary};
}
`
const StyledTimelineItem = styled(motion.div)`

`;

const TimelineComponent = (props) => {
  
  return (
    <Container id='${props.id}'>
        <Wrapper>
            <Title variants={fadeInBottomVariant} initial="hidden" whileInView="visible">{props.title}</Title>
      <Timelinesection>
        <Timeline position='right'>
            {
               props.data.map((item,idx)=>{
                console.log(item.type)
                return(
                    <StyledTimelineItem variants={fadeInBottomVariant} initial="hidden" whileInView="visible">
                    <TimelineItem >
                    <TimelineContent sx={{ py: '12px', px: 2, flexDirection: 'column' }}>
                        {
                            <Card data={item}/>
                        }
                    </TimelineContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color="secondary" />
                        {idx !== props.data.length  && <TimelineConnector />}
                    </TimelineSeparator>
                    </TimelineItem>
                    </StyledTimelineItem>
                )
               })
            }
        </Timeline>
      </Timelinesection>
      </Wrapper>
    </Container>
  )
}

export default TimelineComponent
