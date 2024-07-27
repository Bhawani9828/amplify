

// Importing images
import team1 from '../assets/img/th-1/team-member-img-1.jpg';
import team2 from '../assets/img/th-1/team-member-img-2.jpg';
import team3 from '../assets/img/th-1/team-member-img-3.jpg';
import team4 from '../assets/img/th-1/team-member-img-4.jpg';
import team5 from '../assets/img/th-1/team-member-img-5.jpg';
import team6 from '../assets/img/th-1/team-member-img-6.jpg';

import twitter1 from '../assets/img/th-1/twitter-icon-white.svg';
import twitter2 from '../assets/img/th-1/twitter-icon-black.svg';
import instagram1 from '../assets/img/th-1/instagram-icon-white.svg';
import instagram2 from '../assets/img/th-1/instagram-icon-black.svg';
import linkedin1 from '../assets/img/th-1/linkedin-icon-white.svg';
import linkedin2 from '../assets/img/th-1/linkedin-icon-black.svg';
import facebook1 from '../assets/img/th-1/facebook-icon-white.svg';
import facebook2 from '../assets/img/th-1/facebook-icon-black.svg';

// Team member data
const teamMembers = [
  {
    name: "Mr. Abraham Maslo",
    role: "Chief AI Officer",
    image: team1,
    social: {
      facebook: [facebook1, facebook2],
      twitter: [twitter1, twitter2],
      linkedin: [linkedin1, linkedin2],
      instagram: [instagram1, instagram2],
    },
  },
  {
    name: "Willium Robert",
    role: "Data Engineer",
    image: team2,
    social: {
      facebook: [facebook1, facebook2],
      twitter: [twitter1, twitter2],
      linkedin: [linkedin1, linkedin2],
      instagram: [instagram1, instagram2],
    },
  },
  {
    name: "Henry Fayol",
    role: "Research Scientist",
    image: team3,
    social: {
      facebook: [facebook1, facebook2],
      twitter: [twitter1, twitter2],
      linkedin: [linkedin1, linkedin2],
      instagram: [instagram1, instagram2],
    },
  },
  {
    name: "Henry Martine",
    role: "AI Researcher",
    image: team4,
    social: {
      facebook: [facebook1, facebook2],
      twitter: [twitter1, twitter2],
      linkedin: [linkedin1, linkedin2],
      instagram: [instagram1, instagram2],
    },
  },
  {
    name: "Jack Fox",
    role: "NLP Expert",
    image: team5,
    social: {
      facebook: [facebook1, facebook2],
      twitter: [twitter1, twitter2],
      linkedin: [linkedin1, linkedin2],
      instagram: [instagram1, instagram2],
    },
  },
  {
    name: "Adam Smith",
    role: "Project Manager",
    image: team6,
    social: {
      facebook: [facebook1, facebook2],
      twitter: [twitter1, twitter2],
      linkedin: [linkedin1, linkedin2],
      instagram: [instagram1, instagram2],
    },
  },
];

const TeamSection = () => (
  <section id="team-section">
    <div className="py-20 xl:py-[130px]">
      <div className="global-container">
        <div className="jos mb-10 flex flex-wrap items-center justify-between lg:mb-12 xl:mb-20">
          <div className="max-w-sm lg:max-w-3xl xl:max-w-[745px]">
            <h2 className='lg:text-[80px] md:text-[41px] text-[24px]'>Our team consists of a group of talents</h2>
          </div>
          <a href="teams.html" className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-white">
            Join our team
          </a>
        </div>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <li key={index} className="jos rounded-[20px] bg-colorLinenRuffle p-[20px]" data-jos_animation="flip" data-jos_delay={index * 0.1}>
              <div className="xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]">
                <img src={member.image} alt={`team-member-img-${index + 1}`} width={376} height={400} className="h-full w-full object-cover" />
              </div>
              <div className="mt-5">
                <a href="team-details.html" className="font-dmSans text-[26px] leading-[1.33] hover:text-[#B840C7] xxl:text-[30px]">
                  {member.name}
                </a>
                <div className="mt-3 flex flex-col justify-between gap-3 xxl:flex-row xxl:flex-wrap xxl:items-center">
                  <span className="text-[21px]">{member.role}</span>
                  <ul className="mt-auto flex gap-x-[15px]">
                    {Object.entries(member.social).map(([platform, icons], idx) => (
                      <li key={idx}>
                        <a href={platform} target="_blank" rel="noopener noreferrer" className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-[#B840C7]">
                          <img src={icons[0]} alt={platform} width={14} height={14} className="opacity-100 group-hover:opacity-0" />
                          <img src={icons[1]} alt={platform} width={14} height={14} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default TeamSection;
