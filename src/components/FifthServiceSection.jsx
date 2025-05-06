import '../Style/ThirdServiceSection.css'; 
import brandingicon from '/Images/Services/social-media.png';

export default function FifthServiceSection() {
  return (
    <section className="service-Third-section">
      <div className="service-content-wrapper">
        <div className="service-heading">
          <h1>Marketing Services</h1>
          <img src={brandingicon} alt="Service Icon" className="service-icon" />
        </div>
        <div className="service-grid">
          <div className="servicecard">
            <h3>Consulting Services</h3>
            <p>Offering expert advice to help clients develop and execute effective marketing strategies. This includes market research, competitive analysis, brand positioning, and campaign planning to ensure that clients reach their target audience and achieve their business goals.</p>
          </div>
          <div className="servicecard">
            <h3>Training Solutions</h3>
            <p>Providing tailored training programs to enhance the skills and knowledge of clients’ marketing teams. These can cover a range of topics, from digital marketing techniques to creative content creation, ensuring teams are equipped with the latest industry insights and tools.</p>
          </div>
          <div className="servicecard">
            <h3>E-Learning</h3>
            <p>Developing comprehensive e-learning modules that clients can use to train their teams remotely. These modules are interactive, engaging, and designed to provide in-depth knowledge on various marketing topics, allowing teams to learn at their own pace.</p>
          </div>
          <div className="servicecard">
            <h3>Team Building</h3>
            <p>Facilitating team-building activities and workshops aimed at improving collaboration, communication, and creativity within marketing teams. These activities help to build stronger, more cohesive teams that can work together effectively to achieve common goals.</p>
          </div>
          <div className="servicecard">
            <h3>Assessments</h3>
            <p>Conducting thorough assessments to evaluate the effectiveness of clients’ current marketing strategies and campaigns. This includes analyzing performance metrics, identifying areas for improvement, and offering actionable recommendations to optimize their marketing efforts.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
