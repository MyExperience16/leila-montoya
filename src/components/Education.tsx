
import { useState, useEffect, useRef } from "react";
import { Briefcase, GraduationCap, Star } from "lucide-react";

interface TimelineItem {
  id: number;
  type: 'education' | 'experience' | 'extracurricular';
  title: string;
  organization: string;
  location?: string;
  period: string;
  description: string;
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    type: 'education',
    title: 'Bachelor of Arts',
    organization: 'University of St. Thomas',
    location: 'St. Paul, MN',
    period: '2024 - Present',
    description: 'Double major in Entrepreneurship and English - Literature and Writing at the University of St. Thomas. Recognized on the Dean’s List and honored as an Aquinas Honors Scholar.',
  },
  {
    id: 2,
    type: 'education',
    title: 'Dual Enrollment - Liberal Arts',
    organization: 'Diablo Valley College',
    location: 'San Ramon, CA',
    period: '2022 - 2024',
    description: 'Participated in dual enrollment, taking college-level courses in Liberal Arts while still in high school. Gained valuable exposure to higher education coursework and academic challenges.',
  },
  {
    id: 3,
    type: 'education',
    title: 'High School Diploma',
    organization: 'California High School',
    location: 'San Ramon, CA',
    period: '2020 - 2024',
    description: 'Graduated with a 4.0 GPA. Actively involved in extracurricular activities and committed to academic excellence.',
  },
  {
    id: 4,
    type: 'extracurricular',
    title: 'Sailing Team Member',
    organization: 'UST Sailing Team',
    location: 'Wayzata, MN',
    period: '2024 - Present',
    description: 'Competed as a member of the sailing team, representing the school in regional and national competitions. Achieved 3rd place at Northwestern in Chicago and at Macatawa Bay in Michigan.',
  },
  {
    id: 5,
    type: 'experience',
    title: 'Administrative Assistant',
    organization: 'Garcia Real Estate Team (EXP Realty)',
    location: 'East Bay, CA',
    period: 'August 2023 - May 2024',
    description: 'Assisted 11 real estate agents with client showings, managed paperwork for contracts using MLS, and organized client information in spreadsheets.',
  },
  {
    id: 6,
    type: 'experience',
    title: 'Administrative Assistant',
    organization: 'ACM Management',
    location: 'Grass Valley, CA',
    period: 'June 2023 - August 2023',
    description: 'Assisted CEO in client meetings, property showings, and contractor discussions. Managed rental payments, transfers, and worker disbursements. Helped secure long-term tenants in compliance with owner regulations.',
  },
  {
    id: 7,
    type: 'experience',
    title: 'Canine Companion, Enrichment Coordinator',
    organization: 'Dublin Society for the Prevention of Cruelty to Animals (SPCA)',
    location: 'Dublin, CA',
    period: 'December 2023 - July 2023',
    description: 'Worked with a team of 10+ employees and volunteers to meet the needs of 20+ dogs, facilitated customer interactions to support adoptions, and maintained a clean, organized environment to ensure the well-being of both animals and staff.',
  }
];

export const Education = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'education' | 'experience' | 'extracurricular'>('education');
  const [key, setKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setKey(prev => prev + 1);
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
          el.classList.remove('animated');
          void el.getBoundingClientRect();
          el.classList.add('animated');
        });
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [activeTab]);

  const filteredItems = timelineItems.filter(item => item.type === activeTab);

  return (
    <section ref={sectionRef} id="education" className="py-24">
      <div className="section-container">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="section-title">Education & Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            My academic journey and professional experiences that have shaped my career.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setActiveTab('education')}
          className={`glass-button w-full sm:w-auto px-8 py-3 text-foreground font-medium rounded-full transition-all ${
            activeTab === 'education'
              ? 'bg-primary text-white'
              : 'bg-transparent text-muted-foreground'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <GraduationCap className="h-5 w-5 hidden sm:inline-block" />
            <span className="block sm:inline">Education</span>
          </div>
        </button>

        <button
          onClick={() => setActiveTab('experience')}
          className={`glass-button w-full sm:w-auto px-8 py-3 text-foreground font-medium rounded-full transition-all ${
            activeTab === 'experience'
              ? 'bg-primary text-white'
              : 'bg-transparent text-muted-foreground'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Briefcase className="h-5 w-5 hidden sm:inline-block" />
            <span className="block sm:inline">Experience</span>
          </div>
        </button>

        <button
          onClick={() => setActiveTab('extracurricular')}
          className={`glass-button w-full sm:w-auto px-8 py-3 text-foreground font-medium rounded-full transition-all ${
            activeTab === 'extracurricular'
              ? 'bg-primary text-white'
              : 'bg-transparent text-muted-foreground'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Star className="h-5 w-5 hidden sm:inline-block" />
            <span className="block sm:inline">Extracurricular</span>
          </div>
        </button>

        </div>
        <div className="relative max-w-4xl mx-auto" key={key}>
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

          {filteredItems.map((item, index) => (
            <div
              key={`${item.id}-${key}`}
              className={`animate-on-scroll mb-12 relative ${
                index % 2 === 0 ? 'md:mr-auto md:ml-0 md:pr-12 md:pl-0' : 'md:ml-auto md:mr-0 md:pl-12 md:pr-0'
              } md:w-[calc(50%-20px)] w-full`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="glass-card p-6 md:p-8 relative">
                {!isMobile && (
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <div className="md:block">
                      {item.type === 'education' ? (
                        <GraduationCap className="h-6 w-6 text-white" />
                      ) : item.type === 'experience' ? (
                        <Briefcase className="h-6 w-6 text-white" />
                      ) : (
                        <Star className="h-6 w-6 text-white" />
                      )}
                    </div>
                  </div>
                )}

                <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary mb-2">
                  {item.period}
                </span>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <h4 className="text-muted-foreground font-medium mb-4">{item.organization}</h4>

                {item.location && (
                  <p className="text-muted-foreground text-sm mb-4">{item.location}</p>
                )}

                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
