import React from 'react';
import { Code, Laptop, Megaphone, Users, Palette, Globe, Github, Linkedin, Instagram, Twitter, BookOpen, BookText, PenTool } from 'lucide-react';


import ReshmaMaamImage from 'src/assets/images/Reshma_Maam.jpeg';
import BhavanaGupta from 'src/assets/images/BHAVANA GUPTA - Bhavana Gupta.png';
import BhumiPriya from 'src/assets/images/FullSizeRender - Bhoomi Priya.jpeg';
import KundanSharma from 'src/assets/images/IMG_20241116_211931603_HDR~2 - Kundan Sharma.jpg';
import MukulSharma from 'src/assets/images/IMG_20241211_002256 - Mukul Sharma.jpg';
import RajeshChowdhury from 'src/assets/images/IMG_20250402_092316_868 - Rajesh Chowdhury.webp';
import VaishaliJain from 'src/assets/images/IMG_20250415_095248 - VAISHALI JAIN.jpg';
import SakshiWagh from 'src/assets/images/IMG_20250418_192225 - Sakshi Wagh.jpg';
import SaniaShanty from 'src/assets/images/IMG_20250418_203148 - Sania Shanty.jpg';
import PrashantSingh from 'src/assets/images/IMG_8063~3 - Prashant Singh.JPG';
import Manvendra from 'src/assets/images/IMG_9579 - Manvendra Singh Bika.jpeg';
import Misbah from 'src/assets/images/Misbah (4) - Misbah Ul Islam.jpeg';


interface TeamMember {
  name: string;
  role: string;
  subRole: string;
  icon: React.ReactNode;
  image: string;
  team: 'coordinators' | 'tech' | 'pr' | 'socialMedia' | 'rnd' | 'teacher';
  socials: { icon: React.ReactNode; url: string }[];
}

const teamMembers: TeamMember[] = [
  // Teacher Coordinator
  {
    name: "Dr. Reshma Rastogi",
    role: "Faculty Coordinator",
    subRole: "Advising and mentoring the team",
    icon: <BookText className="w-6 h-6 text-black" />,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400",
    team: "teacher",
    socials: [
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://linkedin.com/in/reshmarastogi' },
      { icon: <Twitter className="h-5 w-5 text-black" />, url: 'https://twitter.com/reshmarastogi' }
    ]
  },
  
  // Coordinators
  {
    name: "Sakshi Wagh",
    role: "Chair",
    subRole: "R&D Lead",
    icon: <Code className="w-6 h-6 text-black" />,
    image: SakshiWagh,
    team: "coordinators",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/sakshi' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://linkedin.com/in/sakshi' }
    ]
  },
  {
    name: "Mukul Sharma",
    role: "Vice Chair",
    subRole: "Tech Lead",
    icon: <Laptop className="w-6 h-6 text-black" />,
    image: MukulSharma,
    team: "coordinators",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/mukul' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://linkedin.com/in/mukul' }
    ]
  },
  {
    name: "Bhoomi Priya",
    role: "Secretary",
    subRole: "Social Media Lead",
    icon: <Megaphone className="w-6 h-6 text-black" />,
    image: BhumiPriya,
    team: "coordinators",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/bhoomi' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://linkedin.com/in/bhoomi' }
    ]
  },
  {
    name: "Manvendra Singh Bika",
    role: "Treasurer",
    subRole: "Management Lead",
    icon: <Users className="w-6 h-6 text-black" />,
    image: Manvendra,
    team: "coordinators",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/manvendra' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://linkedin.com/in/manvendra' }
    ]
  },
  {
    name: "Kundan Sharma",
    role: "Web Master",
    subRole: "",
    icon: <Palette className="w-6 h-6 text-black" />,
    image: KundanSharma,
    team: "coordinators",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/kundan' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://linkedin.com/in/kundan' }
    ]
  },
  
  // Tech & Management
  {
    name: "Mukul Sharma",
    role: "Tech Lead",
    subRole: "Vice Chair",
    icon: <Laptop className="w-6 h-6 text-black" />,
    image: MukulSharma,
    team: "tech",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/mukul' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://linkedin.com/in/mukul' }
    ]
  },
  {
    name: "Kundan Sharma",
    role: "Web Master",
    subRole: "",
    icon: <Code className="w-6 h-6 text-black" />,
    image: KundanSharma,
    team: "tech",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/kundan' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://linkedin.com/in/kundan' }
    ]
  },
  {
    name: "Rajesh",
    role: "Tech Member",
    subRole: "",
    icon: <Laptop className="w-6 h-6 text-black" />,
    image: RajeshChowdhury,
    team: "tech",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/rajesh' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://linkedin.com/in/rajesh' }
    ]
  },
  {
    name: "Anmol",
    role: "Tech Member",
    subRole: "",
    icon: <Laptop className="w-6 h-6 text-black" />,
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=400",
    team: "tech",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/anmol' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://linkedin.com/in/anmol' }
    ]
  },

  // PR team
  {
    name: "Prashant",
    role: "PR Lead",
    subRole: "",
    icon: <Globe className="w-6 h-6 text-black" />,
    image: PrashantSingh,
    team: "pr",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/prashant' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://linkedin.com/in/prashant' }
    ]
  },
  {
    name: "Bhavna",
    role: "PR Member",
    subRole: "",
    icon: <Globe className="w-6 h-6 text-black" />,
    image: BhavanaGupta,
    team: "pr",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/bhavna' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://linkedin.com/in/bhavna' }
    ]
  },

  // Social Media and Content
  {
    name: "Bhoomi Priya",
    role: "Social Media Lead",
    subRole: "Secretary",
    icon: <Megaphone className="w-6 h-6 text-black" />,
    image: BhumiPriya,
    team: "socialMedia",
    socials: [
      { icon: <Instagram className="h-5 w-5 text-black" />, url: 'https://instagram.com/bhoomi' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://linkedin.com/in/bhoomi' }
    ]
  },
  {
    name: "Misbah",
    role: "Content Creator",
    subRole: "",
    icon: <PenTool className="w-6 h-6 text-black" />,
    image: Misbah,
    team: "socialMedia",
    socials: [
      { icon: <Instagram className="h-5 w-5 text-black" />, url: 'https://instagram.com/misbah' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://linkedin.com/in/misbah' }
    ]
  },
  {
    name: "Vaishali",
    role: "Content Creator",
    subRole: "",
    icon: <PenTool className="w-6 h-6 text-black" />,
    image: VaishaliJain,
    team: "socialMedia",
    socials: [
      { icon: <Instagram className="h-5 w-5 text-black" />, url: 'https://instagram.com/vaishali' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://linkedin.com/in/vaishali' }
    ]
  },
  {
    name: "Suyash",
    role: "Content Creator",
    subRole: "",
    icon: <PenTool className="w-6 h-6 text-black" />,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400",
    team: "socialMedia",
    socials: [
      { icon: <Instagram className="h-5 w-5 text-black" />, url: 'https://instagram.com/suyash' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://linkedin.com/in/suyash' }
    ]
  },

  // R&D Team
  {
    name: "Sakshi Wagh",
    role: "R&D Lead",
    subRole: "Chair",
    icon: <BookOpen className="w-6 h-6 text-black" />,
    image: SakshiWagh,
    team: "rnd",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/sakshi' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://linkedin.com/in/sakshi' }
    ]
  },
  {
    name: "Sania",
    role: "R&D Member",
    subRole: "",
    icon: <BookOpen className="w-6 h-6 text-black" />,
    image: SaniaShanty,
    team: "rnd",
    socials: [
      { icon: <Github className="h-5 w-5 text-black" />, url: 'https://github.com/sania' },
      { icon: <Linkedin className="h-5 w-5 text-black" />, url: 'https://linkedin.com/in/sania' }
    ]
  }
];

const teamSections = [
  {
    title: "Teacher Coordinator",
    key: "teacher" as const,
    description: "Advising and mentoring the team"
  },
  {
    title: "Coordinators",
    key: "coordinators" as const,
    description: "Leading and guiding the chapter's vision and initiatives"
  },
  {
    title: "PR Team",
    key: "pr" as const,
    description: "Managing our community presence and outreach"
  },
  {
    title: "Social Media & Content",
    key: "socialMedia" as const,
    description: "Creating engaging content and managing our online presence"
  },
  {
    title: "Research & Development",
    key: "rnd" as const,
    description: "Driving innovation and technical excellence"
  },
  {
    title: "Tech & Management",
    key: "tech" as const,
    description: "Building and maintaining our technical infrastructure"
  }
];

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="section-title">About Us</h1>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          The South Asian University ACM Student Chapter is a dynamic community dedicated to advancing
          computing innovation across South Asia. Join us to explore cutting-edge technology,
          collaborate with passionate peers, and shape the future of computing in a space built for
          creativity and discovery.
        </p>
      </div>
      
      <div className="space-y-20">
        {/* Our Team Heading */}
        <div className="text-center mb-8">
          <h2 className="section-title">Our Team</h2>
        </div>
        {teamSections.map((section) => (
          <div key={section.key}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[var(--accent)] mb-2">
                {section.title}
              </h2>
              <p className="text-lg text-[var(--text)]">{section.description}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {teamMembers
                .filter(member => member.team === section.key)
                .map((member, index) => (
                  <div
                    key={index}
                    className="card w-72 p-6 flex flex-col items-center text-center bg-[var(--secondary)] shadow-lg rounded-xl"
                  >
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-10 min-h-10 w-10 h-10 rounded-lg bg-[var(--accent)] flex items-center justify-center mb-2">
                      {member.icon}
                    </div>
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm text-[var(--accent)]">{member.role}</p>
                    {member.subRole && (
                      <p className="text-sm text-[var(--text)]">{member.subRole}</p>
                    )}
                    {/* Social Icons */}
                    <div className="flex justify-center gap-4 mt-4">
                      {member.socials.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
