
import "./App.css";

function App() {
  const platforms = [
    {
      name: "LeetCode",
      icon: "💻",
      description: "Coding practice and problem solving.",
      url: "https://leetcode.com/u/7BTFP6fQqa/",
    },
    {
      name: "GeeksforGeeks",
      icon: "🧠",
      description: "DSA practice and computer science learning.",
      url: "https://www.geeksforgeeks.org/profile/dilipdei9fp",
    },
    {
      name: "HackerRank",
      icon: "🏆",
      description: "Programming challenges and coding skills.",
      url: "https://www.hackerrank.com/profile/dilipdev7275",
    },
    {
      name: "GitHub",
      icon: "🐙",
      description: "My repositories and development projects.",
      url: "https://github.com/DILIPKUMAR1248",
    },
    {
      name: "AccioJob",
      icon: "🚀",
      description: "My software development learning journey.",
      url: "https://course.acciojob.com/modules",
    },
  ];

  const projects = [
    {
      number: "01",
      icon: "✈️",
      category: "JAVA / BACKEND DEVELOPMENT",
      title: "Flight Booking System",
      subtitle: "Flight Reservation Web Application",
      description:
        "A Java-based web application focused on flight booking workflows, backend development, database persistence, and server-side application architecture.",
      features: [
        "Java 17 and Spring Boot application foundation.",
        "Spring MVC for web application development.",
        "Spring Data JPA and Hibernate for persistence.",
        "Spring Security integration.",
        "Thymeleaf-based server-side rendering.",
        "PostgreSQL database integration.",
      ],
      uses:
        "Demonstrates technologies used in booking-oriented web applications, backend workflows, database management, and server-side development.",
      technologies: [
        "Java 17",
        "Spring Boot",
        "Spring MVC",
        "Spring Security",
        "Spring Data JPA",
        "Hibernate",
        "Thymeleaf",
        "PostgreSQL",
        "Maven",
      ],
      url: "https://github.com/DILIPKUMAR1248/Flight-booking-System",
    },
    {
      number: "02",
      icon: "🛒",
      category: "JAVA / BACKEND DEVELOPMENT",
      title: "Shopping Delivery App",
      subtitle: "Online Shopping & Delivery Platform",
      description:
        "A shopping and delivery application focused on backend development, REST API design, product management, and order-related workflows.",
      features: [
        "Product management operations.",
        "Order processing and management workflows.",
        "RESTful API-based backend design.",
        "Database persistence using JPA and Hibernate.",
        "Modular application architecture.",
      ],
      uses:
        "Demonstrates backend concepts useful in online shopping platforms, including product information management, order processing, and delivery workflows.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "Hibernate",
        "MySQL",
        "REST APIs",
        "Maven",
        "Postman",
      ],
      url: "https://github.com/DILIPKUMAR1248/Shopping-Delivery-App",
    },
  ];

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          DILIP<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#achievements">Achievements</a>
          <a href="#performance">Performance</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero section">
        <div className="hero-content">
          <p className="intro">HELLO, I'M</p>

          <h1>DILIP KUMAR</h1>

          <h2>Java Full Stack Developer</h2>

          <p>
            I am passionate about building scalable web applications
            and solving real-world problems using Java, Spring Boot,
            React, and modern technologies.
          </p>

          <a href="#contact" className="main-btn">
            Contact Me
          </a>
        </div>

        <div className="profile-image">
          <img src="/profile.jpg" alt="Dilip Kumar" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-heading">
          <span className="section-subtitle">GET TO KNOW ME</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <p className="section-description">
        I am a passionate Java Full Stack Developer with knowledge of Java, Object-Oriented Programming (OOP), Data Structures and Algorithms (DSA), Spring Boot, Spring MVC, Hibernate, Spring Security, REST APIs, React.js, and MySQL.

I enjoy building scalable web applications, solving real-world problems, and writing clean, efficient code. I am always eager to learn new technologies, improve my problem-solving abilities, and grow as a software developer.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-heading">
          <span className="section-subtitle">WHAT I WORK WITH</span>
          <h2 className="section-title">My Technical Skills</h2>
        </div>

        <div className="skills-grid">
          <div className="info-card">
            <div className="skill-icon">💻</div>
            <h3>Programming Languages</h3>
            <p>Java, JavaScript</p>
          </div>

          <div className="info-card">
            <div className="skill-icon">🎨</div>
            <h3>Frontend Development</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>

          <div className="info-card">
            <div className="skill-icon">⚙️</div>
            <h3>Backend Development</h3>
            <p>Spring Boot, Spring MVC, Hibernate, JPA, REST APIs, JWT</p>
          </div>

          <div className="info-card">
            <div className="skill-icon">🗄️</div>
            <h3>Database</h3>
            <p>MySQL, PostgreSQL, MongoDB Basics</p>
          </div>

          <div className="info-card">
            <div className="skill-icon">🛠️</div>
            <h3>Tools</h3>
            <p>Git, GitHub, IntelliJ IDEA, VS Code, STS</p>
          </div>

          <div className="info-card">
            <div className="skill-icon">🧩</div>
            <h3>Core Concepts</h3>
            <p>OOPs, Multithreading, DSA, System Design Basics, API Development</p>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="section achievements-section">
        <div className="section-heading">
          <span className="section-subtitle">MILESTONES</span>
          <h2 className="section-title">Achievements</h2>
        </div>

        <div className="achievement-grid">
          <div className="info-card achievement-card">
            <div className="achievement-icon">💼</div>
            <h3>Internship at Zetheta Algorithm Private Limited</h3>
            <p>
              Completed an internship at Zetheta Algorithm Private Limited.
            </p>

            <div className="pdf-preview">
              <span>📄</span>
              <h4>Zetheta Internship Certificate</h4>
              <small>PDF Document</small>
            </div>

            <a
              href="/Zetheta%20internship%20certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-btn"
            >
              View Certificate ↗
            </a>
          </div>

          <div className="info-card achievement-card">
            <div className="achievement-icon">📜</div>
            <h3>Acciojob Course Completion Certificate</h3>
            <p>
              Completed the Acciojob course and earned a course completion
              certificate.
            </p>

            <div className="pdf-preview">
              <span>📄</span>
              <h4>Acciojob Course Completion Certificate</h4>
              <small>PDF Document</small>
            </div>

            <a
              href="/Dilip%20Kumar%20_%20Course%20Completion%20Certificate%20Acciojob..pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-btn"
            >
              View Certificate ↗
            </a>
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section id="performance" className="section performance-section">
        <div className="section-heading">
          <span className="section-subtitle">MY CODING JOURNEY</span>
          <h2 className="section-title">Performance & Profiles</h2>
        </div>

        <p className="section-description">
          Explore my coding profiles, programming practice,
          repositories, and learning journey.
        </p>

        <div className="performance-grid">
          {platforms.map((platform) => (
            <div className="performance-card" key={platform.name}>
              <div className="performance-icon">{platform.icon}</div>
              <h3>{platform.name}</h3>
              <p>{platform.description}</p>

              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="performance-btn"
              >
                Visit Profile <span>↗</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <div className="section-heading">
          <span className="section-subtitle">MY BACKGROUND</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="education-grid">
          <div className="info-card">
            <div className="skill-icon">🎓</div>
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <p><strong>University:</strong> AISECT University</p>
            <p><strong>Location:</strong> Jharkhand, India</p>
            <p><strong>Degree:</strong> Bachelor of Computer Applications (BCA)</p>
          </div>

          <div className="info-card">
            <div className="skill-icon">🎓</div>
            <h3>Master of Computer Applications (MCA)</h3>
            <p><strong>University:</strong> Uttaranchal University</p>
            <p><strong>Location:</strong> Dehradun, Uttarakhand, India</p>
            <p><strong>Degree:</strong> Master of Computer Applications (MCA)</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <div className="section-heading">
          <span className="section-subtitle">MY RECENT WORK</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Turning ideas into real-world applications through
            problem-solving, modern technologies, and clean development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-badge">{project.category}</span>
              </div>

              <div className="project-icon">{project.icon}</div>

              <h3>{project.title}</h3>
              <h5>{project.subtitle}</h5>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-detail">
                <h4>✦ Key Features</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-detail">
                <h4>✦ Real-World Applications</h4>
                <p>{project.uses}</p>
              </div>

              <div className="project-tech">
                <h4>Technologies Used</h4>

                <div className="tech-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Source Code <span>↗</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="section-heading">
          <span className="section-subtitle">LET'S CONNECT</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <p className="section-description">
          I am open to learning opportunities, collaborations,
          and software development roles. Feel free to connect with me.
        </p>
        <p>Email:- dilipdev7275@gmail.com</p>
        <p>Number:-9867287275</p>
        <a
          href="https://www.linkedin.com/in/dilip-kumar-484317273/"
          className="main-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          View LinkedIn Profile
        </a>

      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>DILIP<span>.</span></h3>
        <p>Java Full Stack Developer</p>
        <p>Email:- dilipdev7275@gmail.com</p>
        <p>Number:-9867287275</p>
        <a
          href="https://www.linkedin.com/in/dilip-kumar-484317273/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <p>© 2026 Dilip Kumar. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;
