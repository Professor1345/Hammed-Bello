// import React from 'react'

const Introduction = () => {
  return (
    <div className="intro">
      {/* <h2 className="introHeader">Introduction</h2> */}
      <h2 className="py-3 text-lg">Who am I?</h2>
      I&lsquo;m Hammed Bello, a seasoned{" "}
      <span className="bg-[rgb(245,244,239)] text-[rgb(45,44,41)]">
        Front End Engineer
      </span>{" "}
      with 5+ years of experience crafting intuitive user interfaces and dynamic
      web applications. Passionate about pushing the boundaries of creativity
      and functionality, I collaborate effectively to deliver efficient,
      user-friendly code.
      <br />
      <br />
      As a proactive problem solver, I thrive in fast-paced environments,
      embracing challenges and advocating for continuous learning. Beyond work,
      I&lsquo;m an avid reader and traveler, drawing inspiration from diverse
      experiences to enhance my approach to front-end development.
      <div className="mt-6">
        Resumé?{" "}
        <a
          href="https://drive.google.com/file/d/1hbkwG4_wMl8TwW-ZLsDV_C2eKu8WC_A7/view?usp=drive_link"
          className="text-[rgb(217,197,145)] hover:invert"
          download="Hammed Bello.pdf"
        >
          <img src="src/assets/resume/Hammed Bello.pdf" alt="" />
          Download
        </a>{" "}
      </div>
    </div>
  );
};

export default Introduction;
