import React from 'react';
import styled from 'styled-components';
import  {motion} from 'framer-motion';
import OuterSpace2 from '../images/Taken.svg';



const Section = styled.section`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: #131313;
`;

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
height: 100vh;
padding: 3rem calc((100vw - 1300px) /2);

@media screen and (max-width: 768px) {
    
    grid-grid-template-columns: 1fr;
}
/* For Desktop View */
@media screen and (min-width: 1024px) {
  
    background-color: #131313;
    color: #fff;
  
}
 
/* For Tablet View */
@media screen and (min-device-width: 768px)
and (max-device-width: 1024px) {
  
  grid-grid-template-columns: 1fr;
  
}
 
/* For Mobile Portrait View */
@media screen and (max-device-width: 480px)
and (orientation: portrait) {
  
  grid-grid-template-columns: 1fr;
  
  
}
 
/* For Mobile Landscape View */
@media screen and (max-device-width: 640px)
and (orientation: landscape) {
  
  grid-grid-template-columns: 1fr;
  
  
}
 
/* For Mobile Phones Portrait or Landscape View */
@media screen and (max-device-width: 640px) {
  
  grid-grid-template-columns: 1fr;
 
  
}
 
/* For iPhone 4 Portrait or Landscape View */
@media screen and (min-device-width: 320px)
and (-webkit-min-device-pixel-ratio: 2) {
  
  grid-grid-template-columns: 1fr;
  
}
 
/* For iPhone 5 Portrait or Landscape View */
@media (device-height: 568px) and (device-width: 320px)
and (-webkit-min-device-pixel-ratio: 2) {
  
  grid-grid-template-columns: 1fr;
  
}
 
/* For iPhone 6 and 6 plus Portrait or Landscape View */
@media (min-device-height: 667px) and (min-device-width: 375px)
and (-webkit-min-device-pixel-ratio: 3) {
  
  grid-grid-template-columns: 1fr;
}
`;

const ColumnLeft = styled.div`
display: flex;
flex-direction: column;
color: #fff;
justify-content: center;
align-items: center;
padding: 5rem 2rem;

h1{
  margin-bottom: 0.5rem;
  font-size: 2rem;
  
}
p {
  margin: 2rem 0;
  font-size: 4rem;
  line-height: 1.1;
}


`;
const Button = styled(motion.button)`
padding: 1rem 3rem;
font-size: 1rem;
border: 2px solid #fff;
border-radius: 10px;
outline: none;
cursor: pointer;
background: transparent;
color: #fff
`;

const Image = styled(motion.img)`
position: absolute;
width: 100%;
height: 100%;
max-width: 100;
max-height: 150;

`;

const ColumnRight = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 2rem;
position: relative;

${Image}:nth-child(1) {
  bottom: 50px;
  right:40px;


}

`;


const Hero = () => {
  const Left_fade = {
    hidden: {opacity: 0, x: -100},
    visible: {opacity: 1, x: 0}
  }
  return (
    <Section>
        <Container>
            <ColumnLeft>
                <motion.h3  
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1}}
                > 
                * My name is J3ff Dauda and this is my studio
                </motion.h3>
                <motion.p
                variants={Left_fade}
                initial='hidden'
                animate='visible'
                transition={{duration:1}}
                
                >Site under repair &#128521;
                </motion.p>
                <Button
                whileHover={{scale:1.15}}
                whileTap={{scale:0.95, backgroundColor: '#67F6E7', border: 'none', color: '#808'}}

                initial={{opacity:0}}
                animate={{opacity:1,transition: {duration:1} }}
                


                >Refresh!!</Button>
            </ColumnLeft>

            <ColumnRight>
              
              <Image src={OuterSpace2} alt='hero image' 
              whileTap={{scale:1.9}} drag={true}
              dragConstraints={{left:0, right:250, top:0, bottom:80}}
              initial={{opacity:1, y:-100}}
              animate={{opacity:1, y:0, transition: {duration:1}}}
               
               
               />
              
              
            </ColumnRight>
        </Container>
    </Section>
  )
}

export default Hero