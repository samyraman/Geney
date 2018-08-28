import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: inline-block;
  width: 330px;
  position: relative;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 8px;
  white-space: normal;
  margin: 11px;
  vertical-align:top;
  `
const Card = styled.div`
  display: block;
  position: aboslute;
  top: 172px;
  height: 140px;
  background-color: white;
  border-radius: 0 0 8px 8px;
  border-top: 1px solid #d8d8d8;
`
const Calendar = styled.div`
  display: block;
  position: absolute;
  margin-top: 30px;
  margin-left: 30px;
  z-index: 10;
  height: 65px;
  width: 65px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #d8d8d8;
  padding: 7px;

`

const Day = styled.span`
  color: #f13a59;
  font-weight: 600;
  font-size: 1.3em;
`

const Month = styled.div`
  color: rgba(46,62,72,.6);
  font-weight: 500;
  font-size: 0.8em;
  text-transform: uppercase;
`

const Image = styled.div`
  background-image: url(${props => props.src});
  position: absolute;
  top: 0px;
  background-position: 50%;
  background-size: cover;
  border-radius: 8px 8px 0 0;
  height: 175px;
  width: 100%;
  position: relative;

`
const Title = styled.div`
  text-align: left;
  font-size: 23px;
  font-weight: 600;
  margin: 0 30px;
  line-height: 1;
`

const Date = styled.div`
  margin: 10px 30px;
  color: grey;
  text-align: left;
  font-weight:400;
  font-size: 17px;
`

export default function EventCard({
  date,
  image,
  event_url,
  name
}) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const imagesArray = ["https://www.rd.com/wp-content/uploads/2016/11/14-holiday-dinner-seating-491628166-Alija-1024x683.jpg", "https://media.istockphoto.com/photos/diverse-group-of-people-community-togetherness-concept-picture-id623600600?k=6&m=623600600&s=612x612&w=0&h=7ist1JFalJ0WMCLqy_-nbEfkjmpD0uP_UN7ksZzVTms=", "https://d2z0k43lzfi12d.cloudfront.net/blog/vcdn231/wp-content/uploads/2018/04/thumbnail_8-tips-beginner_1200x800.jpg", "https://www.pocklington-trust.org.uk/wp-content/uploads/2016/04/shutterstock_286453052-1000x640.jpg", "https://www.rd.com/wp-content/uploads/2016/11/02-holiday-dinner-seating-479724676-monkeybusinessimages-1024x683.jpg", "https://www.rd.com/wp-content/uploads/2016/11/07-holiday-dinner-seating-515602012-Ridofranz-1024x683.jpg", "https://www.rd.com/wp-content/uploads/2016/11/11-holiday-dinner-seating-540101000-gpointstudio-1024x683.jpg",
  "https://uvmbored.com/wp-content/uploads/2018/04/YogaLingo.jpg"];

  function displayImage() {
      var num = Math.floor(Math.random() * 8);
      return imagesArray[num];
  }

  return (
    <Container>
      <Calendar>
        <Day>{date.getDate()}</Day>
        <Month>{monthNames[date.getMonth()]}</Month>
      </Calendar>
      <Image src={image? image : displayImage()} />
      <Card>
        <Date>{date.toDateString()}</Date>
        <Title><a href={event_url}>{name}</a></Title>
      </Card>
    </Container>
  )
}
