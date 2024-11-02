import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column */}
      <div className="flex flex-col shadow-lg transition-shadow duration-300 hover:shadow-xl rounded-lg p-6 bg-white">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <h2 className="text-3xl font-semibold mb-4">Hello! I'm Ashutosh Shukla</h2>
        <p className="mb-4 text-gray-700">
          I am a passionate tech enthusiast and the creator of <strong>PaymentApp</strong>. Currently, I am pursuing my Bachelor’s degree in Computer Science Engineering (CSE) from <strong>CMR Institute of Technology (CMRIT)</strong>. My journey in the tech world is fueled by a desire to create impactful products that simplify people's lives and make digital solutions accessible to everyone.
        </p>
        
        <h3 className="text-2xl font-semibold mb-2">Background</h3>
        <p className="mb-4 text-gray-700">
          As a CSE student at CMRIT, I have gained a solid foundation in software development, algorithms, and data structures. My education has equipped me with the skills to tackle real-world problems through technology. I actively seek opportunities to apply my knowledge through various projects and internships, enhancing my practical experience alongside my academic pursuits.
        </p>
      </div>

      {/* Right Column */}
      <div className="flex flex-col shadow-lg transition-shadow duration-300 hover:shadow-xl rounded-lg p-6 bg-white">
        <h3 className="text-2xl font-semibold mb-2">Skills</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li><strong>Full-Stack Development:</strong> Proficient in both front-end and back-end technologies, enabling me to build robust applications from the ground up.</li>
          <li><strong>User Experience (UX) Design:</strong> I prioritize user-centric design, focusing on creating engaging and accessible interfaces.</li>
          <li><strong>Problem-Solving:</strong> I enjoy tackling complex challenges and finding effective solutions that enhance user experiences.</li>
          <li><strong>Collaboration:</strong> I value teamwork and actively engage with other developers and stakeholders to bring projects to life.</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-2">My Vision</h3>
        <p className="mb-4 text-gray-700">
          I aim to continuously learn and grow in the tech field, exploring new technologies and methodologies that can help me create better products. My goal is to develop applications that not only solve real-world problems but also empower users to manage their finances with confidence.
        </p>

        <h3 className="text-2xl font-semibold mb-2">Let's Connect!</h3>
        <p className="text-gray-700">
          I am always open to collaboration and networking with like-minded individuals. If you're interested in working together or just want to connect, feel free to reach out!
        </p>
      </div>
    </div>
  );
};

export default About;
