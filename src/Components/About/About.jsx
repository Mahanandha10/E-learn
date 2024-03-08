import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt='' className='about-image'/>
        <img src={play_icon} alt='' className='play-icon' onClick={()=> {setPlayState(true)} }/>
        </div>
          <div className='about-right'>
             <h3>ABOUT UNIVERSITY</h3>
             <h2>Nuturing Tomorrow's  Leaders Today</h2>
              <p>In the bustling city of Veridian, where skyscrapers touched the clouds and the hum of life resonated through its streets, lived a diverse tapestry of individuals, each weaving their unique stories into the fabric of the metropolis. As dawn painted the sky in hues of pink and orange, the city awakened to another day of opportunities and challenges.</p>
              <p>In the heart of these contrasting landscapes, the lives of Veridian's urbanites and Eldora's villagers were interconnected by the threads of modernity and tradition. As the city thrived on innovation, the village embraced the time-honored customs that had withstood the test of time.</p>
              <p>Amidst the towering buildings and bustling avenues, a quaint café named "Aroma Haven" stood as a refuge for those seeking solace from the urban chaos. Its warm, amber lights spilled onto the cobblestone sidewalk, inviting passersby to step into a haven of rich coffee aromas and the soothing hum of friendly conversations.</p>
          </div>
      
    </div>
  )
}

export default About
