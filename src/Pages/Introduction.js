import React from "react"
import Me from "../Assets/img (22).png"

const Introduction = () => {
    return (
      <div >
        <div style={{display: 'flex'}}>
          <img src={Me} alt="Me" style={{ height: '910px', width: '930px' }}/>
          <div style={{marginRight: '40px, 40px, 0, 40px', padding: '15px'}}>
            <h1 className="text-5xl font-bold mb-2 justify-items-center">WEB DEVELOPER</h1>
            <h3 style={{padding: '25px', justifyContent: 'bitween'}}>
              I am a senior full-stack developer with over 8 years of experience in web and app development.
              Throughout my expertise and career, I have been involved in a variety of projects.
              As a full-stack developer, I have gained a lot of experience in front-end and back-end development as well as database configuration.
              My goal is to bring ideas to life through coding and design, creating engaging and functional online experiences.
              I am committed to providing quality work and innovative solutions to my clients.
              I believe that effective communication is critical to web production, and I strive to quickly understand and share results with my clients.
              Flexible working hours are available on weekdays, and support is also available on holidays.
              I am also proficient in communication tools such as Skype, Discord, Chatwork, Zoom, etc., which allows me to easily collaborate with clients remotely.
              I love working with customers and bringing their ideas to life.
            </h3>
          </div>
        </div>
      </div>
    )
}

export default Introduction;