import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color: teal;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:15px;
    font-weight:500;
    font-style:San Serif;
    
`;


const Announcement = () => {
  return (
    <Container>
    Super Free! Shipping on Orders below #500.00
    
    </Container>
  )
}

export default Announcement