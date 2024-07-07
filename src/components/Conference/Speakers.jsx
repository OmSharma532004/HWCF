
import React, { useEffect, useRef } from "react";
import badri from "../../assets/Events/Conference/Badri.png";
import julia from "../../assets/Events/Conference/Julia.jpeg";
import robert from "../../assets/Events/Conference/Robert.png";    
import Ciara from "../../assets/Events/Conference/Ciara.png";
import Ana from "../../assets/Events/Conference/Ana.png";
import Margaret from "../../assets/Events/Conference/Margaret.png";
import Nwachi from "../../assets/Events/Conference/Nwachi.png";
import Jane from "../../assets/Events/Conference/Jane.png";
import Nancy from "../../assets/Events/Conference/Nancy.png";
import Cynthia from "../../assets/Events/Conference/Cynthia.png";
import Lindsay from "../../assets/Events/Conference/Lindsay.png";
import Andrew from "../../assets/Events/Conference/Andrew.png";
import Ian from "../../assets/Events/Conference/Ian.png";
import Rebecca from "../../assets/Events/Conference/Rebecca.png";
import Tatiana from "../../assets/Events/Conference/Tatiana.png";
import Maggie from "../../assets/Events/Conference/Maggie.png";
import Bergsveinn from "../../assets/Events/Conference/Bergsveinn.png";
import Tim from "../../assets/Events/Conference/Tim.png";
import Jonathan from "../../assets/Events/Conference/Jonathan.png";
import Jolanta from "../../assets/Events/Conference/Jolanta.jpeg";
import Richard from "../../assets/Events/Conference/Richard.png";


const speakersData1 = [
  {
    time: "10:00-10:10",
    title: "Conference welcome: Dr Badri Bajaj",
    description: "Dr Badri Bajaj is an Indian researcher, writer, academic and coach. He has served as President of the ICF Delhi Chapter, and he is the joint editor of The Health & Wellbeing Coaches Handbook.",
    imgSrc: badri,
    imgAlt: "Dr Badri Bajaj"
  },
  {
    time: "10:10-10:40",
    title: "Keynote 1: Positive Psychology Coaching for health & wellbeing - Prof Christian van Nieuwerburgh",
    description: "",
    imgAlt: "Prof Christian van Nieuwerburgh"
  },
  {
    time: "10:40-11:15",
    title: "Keynote 2: Coaching for heart health - Prof Robert Kelly",
    description: "In this session Prof Kelly will review how coaching can assist patients in changing their behavior and thereby prolonging their lives, starting with a review of the latest literature on behavioral change and cardiac patients. Finally, we will provide practical examples of the coaching application in heart failure.",
    imgSrc: robert,
    imgAlt: "Prof Robert Kelly"
  },
  {
    time: "11:15-12:00",
    title: "Panel session 1: Health Coaching a practitioner perspective",
    description: "Moderator: Dr Jolanta Burke. Panel members: Penny Newman, Health Coach; Maria O’Kane, Chief Executive, Southern Health & Social Care Trust, Ireland.",
    imgSrc: Jolanta,
    imgAlt: "Dr Jolanta Burke"
  },
  {
    time: "12:00-13:00",
    title: "Break 1",
    description: ""
  },
  {
    time: "13:00-13:30",
    title: "Keynote 3: Coaching for trauma - Julia Vaughan Smith",
    description: "In this session Julia Smith will dive deep into her chapter, starting with a review of what trauma is, and its impact on individuals. She will explore how individuals can survive and addresses some of the practical implications for coaches working with personal trauma presented by their clients.",
    imgSrc: julia,
    imgAlt: "Julia Vaughan Smith"
  },
  {
    time: "13:30-14:00",
    title: "Keynote 4: Coaching for oral health - Dr Ciara Scott",
    description: "",
    imgAlt: "Dr Ciara Scott"
  },
  {
    time: "14:00-14:30",
    title: "Keynote 5: Wellbeing - Prof Richard Boyatis",
    description: "In this session Prof. Boyatzis will discuss ideas and research from his new book The Science of Change.  He will explore the Science of Change with a focus on sustained, desired transformation using 58 years of Intentional Change Theory (ICT) research. ICT is a multi-level, fractal theory with five phases: Ideal Self (shared vision), Real Self (norms), learning agenda, experimentation/practice, and resonant relationships. Key drivers include Positive and Negative Emotional Attractors (PEA and NEA), influencing the process through the Sympathetic and Parasympathetic Nervous Systems, neural networks, and affect. Resonant relationships foster change, driven by shared vision, compassion, and energy.",
    imgSrc: Richard,
    imgAlt: "Prof Richard Boyatzis"
  },
  {
    time: "14:30-14:45",
    title: "Break 2",
    description: ""
  },
  {
    time: "14:45-15:30",
    title: "Panel 2: Health care coaching",
    description: "Moderator: Cynthia Stuckley, EZRA Coaching. Panel members: Gina Thoebes, Cleveland Clinic; Steve Gibbons, Intermountain Health; Karen Mellum, HR Director Mayo Clinic.",
    imgSrc: Cynthia,
    imgAlt: "Cynthia Stuckley"
  },
  {
    time: "15:30-16:15",
    title: "Keynote 6: Coaching for mental health - Dr Ana Paula Nacif",
    description: "In this session, Dr Nacif will talk about theories of mental health and mental illness, and explore the debate about coaching and mental health, professional boundaries and the implications for coaching practitioners.",
    imgSrc: Ana,
    imgAlt: "Dr Ana Paula Nacif"
  },
  {
    time: "16:15-16:30",
    title: "Break 3",
    description: ""
  },
  {
    time: "16:30-17:15",
    title: "Keynote 7: Coaching for health equity - Margaret Moore",
    description: "In this session Dr Moore will explore health equity. Unfortunately, health inequity is widely prevalent, increasing disease burden and lowering life expectancy. She will review studies of health and wellness coaching in under-resourced populations to show how it can contribute to improving health-giving behaviors and health outcomes. Finally she will share a framework as a foundation of coaching for health equity.",
    imgSrc: Margaret,
    imgAlt: "Margaret Moore"
  },
  {
    time: "17:15-17:45",
    title: "Keynote 8: Coaching for a sexual health - Dr Nwachi Gamba Eze Pressley-Tafari",
    description: "In this session Dr. Pressley-Tafari will share insights from his work on sexual health, drawing on his research and writing using the mythic inquiry approach to sex and wellness.",
    imgSrc: Nwachi,
    imgAlt: "Dr Nwachi Gamba Eze"
  },
  {
    time: "17:45-18:15",
    title: "Keynote 9: Coaching for weight management - Jane Daly",
    description: "In this session Jane Daly will explore the research evidence on coaching in weight management and how this intervention is growing as a tool to help individuals both manage their weight and also how they think about food and body image.",
    imgSrc: Jane,
    imgAlt: "Jane Daly"
  },
  {
    time: "18:15-18:30",
    title: "Break 4",
    description: ""
  },
  {
    time: "18:30-19:30",
    title: "Laters: Skills Masterclass - Understanding neurodiverse colleagues and clients - Prof Nancy Doyle",
    description: "In this MasterClass session Prof Doyle will share her world class expertise on neurodiversity, its impact and how coaching can act as a tool to unlock the potential of clients. The session will be highly practical with a focus on take-away insights and skills for practitioners to use in their work.",
    imgSrc: Nancy,
    imgAlt: "Prof Nancy Doyle"
  },
  {
    time: "19:30",
    title: "Close",
    description: ""
  }
];

const speakersData2 = [
  {
    time: "10:00",
    title: "Conference welcome - Prof Jonathan Passmore",
    description: "Prof Passmore is Professor of Coaching at Henley Business School and Senior Vice President EZRA Coaching. He is the joint editor of ‘The Health & Wellbeing Coaches’ Handbook’ and author and editor of 40 other book titles, as well as contributing more than 250 peer review journal papers and book chapters to the field of coaching.",
    imgSrc: Jonathan,
    imgAlt: "Prof Jonathan Passmore"
  },
  {
    time: "10:15-11:00",
    title: "Keynote 1: Wellbeing Coaching - Prof Lindsay Oades",
    description: "In this session Prof Oades will explore the dimensions of wellbeing, and the idea of lay concepts of wellbeing, and wellbeing-literacy (how we communicate about and for wellbeing); using multiple modes of communication. The session will focus on three questions: 1. In your coaching practice, do you tend to rely more on a formal model of wellbeing, or do you work from the lay concept of the coachee? 2. What language do you use to discuss wellbeing in your own life, compared to the language of those who you may coach? 3. Do you think of wellbeing theories and models as something you apply directly in coaching, or do you view them more as concept and language toolkits?",
    imgSrc: Lindsay,
    imgAlt: "Prof Lindsay G. Oades"
  },
  {
    time: "11:00-12:00",
    title: "Panel session 1: Wellbeing through coaching",
    description: "Moderator: Dr Andrea Hayes Giraldes. Panel members: Neal Sundberg, Headspace; Jordan Rodgers, EZRA Coaching.",
    imgAlt: "Dr Andrea Hayes Giraldes"
  },
  {
    time: "12:00-13:00",
    title: "Break 1",
    description: ""
  },
  {
    time: "13:00-13:30",
    title: "Keynote 2: Wellbeing theory - Prof Andrew Kemp",
    description: "In this session Prof Kemp will present a new multi-levelled framework of wellbeing, encompassing self, others and nature. This framework moves beyond debate and is inspiring cultures of care, focused on the wellbeing of current and future generations.",
    imgSrc: Andrew,
    imgAlt: "Prof Andrew H. Kemp"
  },
  {
    time: "13:30-14:00",
    title: "Keynote 3: Managing wellbeing programmes - Ian Day",
    description: "In this session Ian Day will consider how wellbeing programmes are managed and propose that they be considered as organizational development change initiatives, recognizing the systemic connectedness at an individual, team and organizational level. The different elements of wellbeing need to be strategically combined into one whole, with a full understanding of how the organizational system interacts with employees.",
    imgSrc: Ian,
    imgAlt: "Ian Day"
  },
  {
    time: "14:00-14:30",
    title: "Keynote 4: Measuring wellbeing in coaching programmes - Dr Rebecca Jarden",
    description: "In this session Dr Jarden will explore the role of wellbeing assessments as a key part of designing coaching interventions promoting and sustaining wellbeing. She will explore key considerations for practice, and provide tips and strategies to support research-based and theoretically sound assessment in coaching.",
    imgSrc: Rebecca,
    imgAlt: "Dr Rebecca Jarden"
  },
  {
    time: "14:30-14:45",
    title: "Break 2",
    description: ""
  },
  {
    time: "14:45-15:30",
    title: "Panel 2: Wellbeing programs in the workplace",
    description: "Moderator: Dr Naeema Pasha. 3x Wellbeing commentators.",
    imgAlt: "Dr Naeema Pasha"
  },
  {
    time: "15:30-16:15",
    title: "Keynote 5: Coaching for aging - Dr Tatiana Rowson",
    description: "In this session Dr Rowson will explore how changes in life expectancy bring new challenges and opportunities. There has been little focus on how to help individuals to make the most of this increased longevity. How can individuals ‘age well’ and how coaching can support individuals to achieve this goal.",
    imgSrc: Tatiana,
    imgAlt: "Dr Tatiana Rowson"
  },
  {
    time: "16:15-17:00",
    title: "Keynote 6: Coaching for bereavement - Maggie João",
    description: "In this session Maggie João will focus on those moments when health and well-being might be absent, both from the coach’s and the client’s perspective. During this interactive session we’ll discuss how to partner with the client when that is the case and what can be done when we don’t feel fit for practise.",
    imgSrc: Maggie,
    imgAlt: "Maggie João"
  },
  {
    time: "17:00-17:45",
    title: "Keynote 7: AI Coaching for wellbeing - Bergsveinn Olafsson",
    description: "In this session Beggi Olfsson will explore AI's role in augmenting coaching aimed at increasing well-being. Amidst a mental health service gap, AI-enhanced coaching has the potential to deliver scalable, accessible, and inexpensive personalized coaching by leveraging the science from positive psychology and coaching psychology, signifying a promising new era in accessible mental health support.",
    imgSrc: Bergsveinn,
    imgAlt: "Bergsveinn Olafsson"
  },
  {
    time: "17:45-18:00",
    title: "Break 3",
    description: ""
  },
  {
    time: "18:00-19:30",
    title: "Skills Master Class session: Managing the Inner critic - Dr Tim Anstiss",
    description: "Much of our thinking is self-talk. The content and tone of this self-talk influences people’s health, wellbeing and performance. This session explores different ways coaches can help clients change - or change their relationship with – critical, hostile and attacking self-talk, with some demonstrations and opportunities for practice and reflection.",
    imgSrc: Tim,
    imgAlt: "Dr Tim Anstiss"
  },
  {
    time: "19:30",
    title: "Close",
    description: ""
  }
];

  


  const Speakers = () => {
    const cardRefs = useRef([]);
    const cardRefs2 = useRef([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
  
      cardRefs.current.forEach((ref) => {
        if (ref) {
          observer.observe(ref);
        }
      });
  
      return () => {
        cardRefs.current.forEach((ref) => {
          if (ref) {
            observer.unobserve(ref);
          }
        });
      };
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );
    
        cardRefs2.current.forEach((ref) => {
          if (ref) {
            observer.observe(ref);
          }
        });
    
        return () => {
          cardRefs2.current.forEach((ref) => {
            if (ref) {
              observer.unobserve(ref);
            }
          });
        };
      }, []);
  
      return (
        <div className="flex flex-col items-center bg-pink-300 p-5 justify-center gap-6 md:p-[50px] w-full overflow-y-auto">
          <h1 className="text-2xl md:text-5xl text-violet-950 font-bold font-mono mb-[50px]">Conference Program</h1>
          <h1 className="text-xl md:text-4xl text-black font-bold font-mono mb-[50px]">Day-1 ,7th November</h1>
          <div className="w-full flex flex-col items-center justify-center gap-[40px]">
            {speakersData1.map((session, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="card flex flex-col md:flex-row gap-[40px] border-4  bg-pink-200 rounded-xl border-violet-950 p-4 items-center w-[90%] lg:justify-around opacity-0 transition-opacity duration-1000 ease-in-out transform translate-y-10"
              >
                <div className=" flex flex-col items-center justify-center ">
                <div className="bg-purple-950 md:h-[200px]  h-[100px] w-[100px] flex flex-col justify-center items-center md:w-[200px] text-center text-lg md:text-4xl font-mono rounded-xl text-pink-100">
                  <div className="border-4 relative md:w-[180px] w-[90px] h-[90px] md:h-[180px] flex flex-col justify-around items-center border-violet-950">{session.time}  <div className=" text-white text-sm ">
                  UKT
                  </div> </div>
                 
                </div>
               
                  </div>
                <div className="flex items-center justify-center w-full lg:w-[50%]">
                  <div className="flex flex-col items-center justify-center lg:items-start gap-[40px]">
                    <h1 className="text-lg lg:text-2xl text-purple-950 font-mono font-extrabold">{session.title}</h1>
                    <p className=" text-base md:text-xl font-semibold text-purple-900 font-mono">{session.description}</p>
                  </div>
                </div>
                {session.imgSrc && (
                  <div className="bg-purple-950 p-4 w-[70%] lg:w-auto">
                    <img src={session.imgSrc} alt={session.imgAlt} className="w-full lg:w-[180px]" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <h1 className="text-xl lg:text-4xl text-black font-bold font-mono mt-[50px] mb-[50px]">Day-2 ,8th November</h1>
          <div className="w-full flex flex-col items-center justify-center gap-[40px]">
            {speakersData2.map((session, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs2.current[index] = el)}
                className="card flex flex-col lg:flex-row gap-[40px] border-4 bg-pink-200 rounded-xl border-violet-950 p-4 items-center w-[90%] lg:justify-around opacity-0 transition-opacity duration-1000 ease-in-out transform translate-y-10"
              >
                 <div className=" flex flex-col items-center justify-center ">
                <div className=" bg-purple-950 md:h-[200px]  h-[100px] w-[100px] flex flex-col justify-center items-center md:w-[200px] text-center text-lg md:text-4xl font-mono rounded-xl text-pink-100">
                  <div className="border-4 relative md:w-[180px] w-[90px] h-[90px] md:h-[180px]  flex flex-col justify-around items-center border-violet-950">{session.time}  <div className=" text-white text-sm">
                  UKT
                  </div> </div>
                
                </div>
               
                  </div>
                <div className="flex items-center justify-center w-full lg:w-[50%]">
                  <div className="flex flex-col items-center justify-center lg:items-start gap-[40px]">
                    <h1 className="text-lg md:text-2xl text-purple-950 font-mono font-extrabold">{session.title}</h1>
                    <p className="text-base md:text-xl font-semibold text-purple-900 font-mono">{session.description}</p>
                  </div>
                </div>
                {session.imgSrc && (
                  <div className="bg-purple-950 p-4 w-[70%] md:w-auto">
                    <img src={session.imgSrc} alt={session.imgAlt} className="w-full md:w-[180px]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
      
      
  };
  
  

export default Speakers;
