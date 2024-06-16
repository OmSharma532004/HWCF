// Resources.js
import React, { useEffect, useRef } from "react";
import book2 from "../assets/Books/book2.png";
import book3 from "../assets/Books/book3.png";
import book4 from "../assets/Books/book4.png";
// Ensure animations.css file is imported

const bookData = [
    {
      title: "The Health & Wellbeing Coaches Handbook",
      description: "The definitive guide for health and wellbeing coaches, covering essential practices and insights from experts in the field.",
      imgSrc: "",
      amazonLink: "https://www.amazon.co.uk/Health-Wellbeing-Coaches-Handbook/dp/...",
    },
    {
      title: "Coaching for Wellbeing: An Evidence-Based Guide for Practitioners",
      description: "This book provides evidence-based strategies and practical tools for wellbeing coaches, helping them enhance their coaching effectiveness.",
      imgSrc: book2,
      amazonLink: "https://www.amazon.co.uk/Coaching-Wellbeing-Evidence-Based-Guide-Practitioners/dp/0335251900",
    },
    {
      title: "Coaching in Mental Health Service Settings",
      description: "Explore the integration of coaching practices within mental health services, offering new approaches to support mental wellbeing.",
      imgSrc:book3,
      amazonLink: "https://www.amazon.co.uk/Coaching-Mental-Health-Service-Settings/dp/0335250475",
    },
    {
      title: "Coaching Psychology in Mental Health: Integrating Psychological Theory and Evidence-Based Practice",
      description: "This book examines the role of coaching psychology in promoting mental health, with practical insights and theoretical frameworks.",
      imgSrc: book4,
      amazonLink: "https://www.amazon.co.uk/Coaching-Psychology-Mental-Health-Psychological/dp/0367501457",
    },
    {
      title: "Health Coaching Tips and Case Studies",
      description: "A practical guide featuring tips and real-life case studies for health coaches, providing actionable insights for coaching success.",
      imgSrc: "",
      amazonLink: "https://www.amazon.co.uk/Health-Coaching-Tips-Case-Studies/dp/...",
    },
    {
      title: "How to Be a Health Coach",
      description: "An introductory guide for aspiring health coaches, covering essential skills and knowledge required to excel in the field.",
      imgSrc: "",
      amazonLink: "https://www.amazon.co.uk/How-Be-Health-Coach/dp/...",
    },
    {
      title: "Integrative Wellness Coaching",
      description: "This book explores integrative approaches to wellness coaching, blending traditional and complementary practices for holistic health.",
      imgSrc: "",
      amazonLink: "https://www.amazon.co.uk/Integrative-Wellness-Coaching-Singing-Dragon/dp/...",
    },
    {
      title: "Coaching Skills for Healthcare Professionals",
      description: "Develop essential coaching skills tailored for healthcare professionals, enhancing patient engagement and care outcomes.",
      imgSrc: "",
      amazonLink: "https://www.amazon.co.uk/Coaching-Skills-Healthcare-Professionals-CreateSpace-Independent/dp/...",
    },
  ];
  
  const paperData = [
    {
      title: "Does Health Coaching Work? (2021)",
      description: "A comprehensive review exploring the effectiveness of health coaching interventions, examining outcomes and impact.",
      downloadLink: "https://assets.henley.ac.uk/v3/fileUploads/Does-Health-Coaching-Work_-Salathiel-and-Passmore-April2021.pdf",
    },
    {
      title: "A Systematic Review of the Literature on Health and Wellness Coaching (2013)",
      description: "This systematic review defines health and wellness coaching as a key behavioral intervention in healthcare, summarizing current literature and findings.",
      downloadLink: "https://doi.org/10.7453/gahmj.2013.042",
    },
    {
      title: "Can Life Coaching Improve Health Outcomes? – A Systematic Review of Intervention Studies (2013)",
      description: "An in-depth review assessing the impact of life coaching interventions on health outcomes, highlighting key findings and implications for practice.",
      downloadLink: "https://doi.org/10.1186/1472-6963-13-428",
    },
    {
      title: "A Systematic Review and Meta-Analysis of the Effectiveness of Non-Face-to-Face Coaching (2023)",
      description: "This meta-analysis evaluates non-face-to-face coaching methods, providing insights into their effectiveness and applications across different contexts.",
      downloadLink: "https://doi.org/10.3390/su15129727",
    },
  ];

const Resources = () => {
  const bookRefs = useRef([]);
  const paperRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe books
    bookRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    // Observe papers
    paperRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      bookRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
      paperRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col items-center bg-pink-300 justify-center gap-6 p-[50px] w-full overflow-y-auto">
      <h1 className="text-5xl text-violet-950 font-bold font-mono mb-[50px]">Resources</h1>

      {/* Books Section */}
      <div className="w-full flex flex-col items-center justify-center gap-[40px]">
        <h2 className="text-3xl font-bold mb-4">Books</h2>
        {bookData.map((book, index) => (
          <div 
            key={index} 
            ref={(el) => (bookRefs.current[index] = el)} 
            className="card flex border-4 bg-violet-950 rounded-xl border-violet-950 p-4 items-center w-[80%] justify-around"
          >
            {
                book.imgSrc&&
                <div className="bg-pink-500 p-4">
                <img src={book.imgSrc} alt={book.imgAlt} className="w-[180px]" />
              </div>
            }
            <div className="flex items-center justify-center w-[50%]">
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-pink-200 text-xl font-mono font-extrabold">{book.title}</h1>
                <p className="text-lg font-semibold text-pink-300">{book.description}</p>
                <a 
                  href={book.amazonLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className=" bg-pink-200 flex items-center justify-center w-[100px] mt-[40px] p-4 font-serif  rounded-xl hover:bg-pink-400"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Research Papers Section */}
      <div className="w-full flex flex-col items-center justify-center gap-[40px] mt-10">
        <h2 className="text-3xl font-bold mb-4">Research Papers</h2>
        {paperData.map((paper, index) => (
          <div 
            key={index} 
            ref={(el) => (paperRefs.current[index] = el)} 
            className="card flex border-4 bg-violet-950 rounded-xl border-violet-950 p-4 items-center w-[80%] justify-around"
          >
            <div className="flex items-center justify-center w-[50%] flex-col gap-[10px]">
              <h1 className="text-pink-200 text-xl font-mono font-extrabold">{paper.title}</h1>
              <p className="text-lg font-semibold text-pink-300">{paper.description}</p>
              <a 
                href={paper.downloadLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className=" bg-pink-200 flex items-center justify-center w-[100px] mt-[40px] p-4 font-serif  rounded-xl hover:bg-pink-400"
              >
                Download 
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;

// Sample data for books and papers


export { bookData, paperData };
