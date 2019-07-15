import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import JobListItem from '../components/JobListItem'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import monitor1 from '../images/monitor1.jpg'
import monitor4 from '../images/monitor4.jpg'
import software1 from '../images/software1.jpg'
import portrait1 from '../images/portrait1.jpg'
import portrait2 from '../images/portrait2.jpg'
import portrait3 from '../images/portrait3.jpg'
import portrait5 from '../images/portrait5.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`
const AboutSubSmall = styled.span`
  ${tw`text-white p-6 font-sans text-md lg:text-lg`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const PhpDeveloper = `
PHP, Linux, PHP 7.1

Are you a Senior or Lead PHP Engineer with 7.1 experience? If so, read on...

Don't want to commute to the West Side? G-R-E-A-T....NEITHER DO WE!!! Headquartered in Glendale, we have the least attrition of any company in the greater Los Angeles area and we offer an unparalleled culture on top of competitive pay, benefits and cutting edge technology.

Top Reasons to Work with Us

1. Based in Glendale, we are digital data collection company that is setting a higher standard for data quality.
2. Our company is rapidly-growing and we just moved into a beautiful new office.
3. You will have the chance to work on exciting new development projects with a talented team.

What You Will Be Doing

This is a great opportunity to join a fun, exciting & highly motivated team and upgrade your skills. We use a modern programming stack and cloud infrastructure. We are not only looking for work experience, but rather the willingness to step up to challenges and the ability to learn quickly.

What You Need for this Position

- 5+ years of modern PHP programming on a large custom code base
- Solid knowledge of the Design Patterns
- Experience with Linux

Nice to Have:
- Experience with building Microservices and RESTful APIs
- Experience with Amazon Web Services (AWS)
- GitHub or similar environment

What's In It for You

- Working to make the world better
- A chance to make a real difference
- Be an Entreprenur without too much risk.
- Awesome and engaging project.

Senior / Lead PHP Developer with 5+ years experience, please apply today!

Applicants must be authorized to work in the U.S.Please apply directly to by clicking 'Click Here to Apply' with your Word resume!

Looking forward to receiving your resume and going over the position in more detail with you.

- Not a fit for this position? Click the link at the bottom of this email to search all of our open positions.

Looking forward to receiving your resume!`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={12}>
      <Hero offset={0}>
        <BigTitle>
          SYLO LOVE <br /> Keeps you safe
        </BigTitle>
        <AboutHero>
          <Avatar src={monitor1} alt="Hardware" />
          <AboutSub>
            <Subtitle>Wearable device for monitoring, diagnostic and emergency services.</Subtitle>
          </AboutSub>
        </AboutHero>
      </Hero>
      <Projects offset={1}>
        <Title>Benefits</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Vitals"
            link="https://www.behance.net/gallery/58937147/Freiheit"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Vitals. It checks your heart rate, blood pressure, blood oxygen, temperate and fall detection every second.
          </ProjectCard>
          <ProjectCard
            title="Emergency Services"
            link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Keep your loved ones safe. It contacts emergency services when the wearer cannot.
          </ProjectCard>
          <ProjectCard
            title="Maintain Health"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Stay healthy. An unprecedented insight into your health for your doctor to optimize your health.
          </ProjectCard>
          <ProjectCard
            title="AI Diagnostics"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Prevention. Our AI platform can detect potential health problems.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>Project Status</Title>
        <AboutHero>
          <Avatar src={monitor4} alt="Hardware" />
          <AboutSub>
            HARDWARE. We focused on using off-the-shelf technology to keep the cost down and increase reliability.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          We are in process of selecting a vendor. Once selected, we'll add our firmware ugprade and start the beta-test.
        </AboutDesc>
        <AboutHero>
          <Avatar src={software1} alt="Hardware" />
          <AboutSub>
            SOFTWARE. Our software is OAC certified and HIPPA compliant. It will be operatinal by Jan 2020.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Our system consists of Firmware, Mobile Patient Manager, Cloud Data Center, Patient Care AI, Patient Management Center, Alert, and Notification. Our team is on target for the Jan 1st, 2020.
        </AboutDesc>
      </About>
      <Projects offset={4}>
        <Title>SHORT TERM AND LONG TERM</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Competition"
            link="https://www.behance.net/gallery/58937147/Freiheit"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            There are many health-oriented and senior-focused smartwatches. However, none of them is a comprehensive solution, and they are just too expensive.
          </ProjectCard>
          <ProjectCard
            title="Market Size"
            link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            The national expenditure in the US for nursing care communities and continuing care retirement communities were $161.7 billion in 2016. The total cost for hospital care was at $1.07 trillion.
          </ProjectCard>
          <ProjectCard
            title="Roadmap"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            We re scheduled to release upcoming improvements: Wifi Recharging battery, Personal Healthcare, Telemedicine and GPS. 
          </ProjectCard>
          <ProjectCard
            title="Better World"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Our wearable diagnostic device and telemedicine is an ideal solution for elderly, shut ins or remote communities. We will make top healthcare available to everyone.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={6}>
        <Title>Advisory Board</Title>
        <AboutHero>
          <Avatar src={portrait1} alt="Doctor" />
          <AboutSubSmall>
            Arther Ford, DVM, is an Emergency Medicine Veterinarian at MedVet Hilliard, MedVet Mandeville, MedVet Mobile, and MedVet New Orleans. Dr. Akers attended Colorado State University, where she obtained a Bachelor of Science degree in Equine Sciences. She completed her Doctor of Veterinary Medicine at Colorado State University College of Veterinary Medicine and Biomedical Sciences in 2011.
          </AboutSubSmall>
        </AboutHero>
        <AboutHero>
          <Avatar src={portrait2} alt="Doctor" />
          <AboutSubSmall>
            Mary Christianson, DVM, MS, Diplomate, ACVIM (Oncology), Diplomate, ACVR (Radiation Oncology), is a board-certified Veterinary Medical Oncologist and board-certified Veterinary Radiation Oncologist at MedVet Pittsburgh. She has been part of the MedVet Medical Oncology team since 2018.
          </AboutSubSmall>
        </AboutHero>
        <AboutHero>
          <Avatar src={portrait3} alt="Doctor" />
          <AboutSubSmall>
            Felix Beeblebrox, VMD, Diplomate, ACVR (Radiation Oncology) is a small animal veterinary Radiation Oncologist who joined the MedVet Chicago team in 2016. Dr. Arkans attended the University of Pennsylvania School of Veterinary Medicine where he earned his Veterinary Medicine Degree. Following his graduation from veterinary school, Dr. Arkans completed a yearlong internship in small animal medicine and surgery at Red Bank Veterinary Hospital in Red Bank, NJ, before completing a two-year residency in radiation oncology at North Carolina State University. In 2015, he earned his board certification as a Diplomate of the American College of Veterinary Radiology (Radiation Oncology).
          </AboutSubSmall>
        </AboutHero>
        <AboutHero>
          <Avatar src={portrait5} alt="Doctor" />
          <AboutSubSmall>
            Kathy Kirk, DVM is an Emergency Medicine Veterinarian at MedVet Toledo where she has been part of the medical team since 2017. Dr. Babbitt attended Purdue University where she majored in Biochemistry before going on to earn her Doctor of Veterinary Medicine degree from the Purdue University College of Veterinary Medicine.
          </AboutSubSmall>
        </AboutHero>
      </About>
      <Projects offset={7}>
        <Title>TRIALS</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="UCLA"
            link="https://www.behance.net/gallery/58937147/Freiheit"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Start date: Jan 1st, 2020. <br />One of the finest University in the World.
          </ProjectCard>
          <ProjectCard
            title="CHATSWORTH COMMUNITY"
            link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Start date: Jan 1st, 2020. <br />One of the oldest care center in California.
          </ProjectCard>
          <ProjectCard
            title="OC RETIREMENT"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Start date: Jan 1st, 2020. <br />One of the most technologically advanced retirement community. 
          </ProjectCard>
          <ProjectCard
            title="LA RETIREMENT"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Start date: Jan 1st, 2020. <br /> A history of pioneering retirement community in downtown Los Angeles.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={9}>
        <Title>Help Wanted</Title>
        <AboutHero>
          <JobListItem
            title="PHP Developer"
            companyName="SYLO LOVE"
            postedAt="Jul 15, 2019"
            experience={PhpDeveloper}
            onPress={() => {}}
          />
        </AboutHero>
        <AboutHero>
          <Avatar src={portrait2} alt="Doctor" />
          <AboutSubSmall>
            Mary Christianson, DVM, MS, Diplomate, ACVIM (Oncology), Diplomate, ACVR (Radiation Oncology), is a board-certified Veterinary Medical Oncologist and board-certified Veterinary Radiation Oncologist at MedVet Pittsburgh. She has been part of the MedVet Medical Oncology team since 2018.
          </AboutSubSmall>
        </AboutHero>
        <AboutHero>
          <Avatar src={portrait3} alt="Doctor" />
          <AboutSubSmall>
            Felix Beeblebrox, VMD, Diplomate, ACVR (Radiation Oncology) is a small animal veterinary Radiation Oncologist who joined the MedVet Chicago team in 2016. Dr. Arkans attended the University of Pennsylvania School of Veterinary Medicine where he earned his Veterinary Medicine Degree. Following his graduation from veterinary school, Dr. Arkans completed a yearlong internship in small animal medicine and surgery at Red Bank Veterinary Hospital in Red Bank, NJ, before completing a two-year residency in radiation oncology at North Carolina State University. In 2015, he earned his board certification as a Diplomate of the American College of Veterinary Radiology (Radiation Oncology).
          </AboutSubSmall>
        </AboutHero>
        <AboutHero>
          <Avatar src={portrait5} alt="Doctor" />
          <AboutSubSmall>
            Kathy Kirk, DVM is an Emergency Medicine Veterinarian at MedVet Toledo where she has been part of the medical team since 2017. Dr. Babbitt attended Purdue University where she majored in Biochemistry before going on to earn her Doctor of Veterinary Medicine degree from the Purdue University College of Veterinary Medicine.
          </AboutSubSmall>
        </AboutHero>
      </About>
      <Projects offset={10}>
        <Title>INVESTMENT</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Individual Donors"
            link="https://www.gofundme.com"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Go Fund Me
          </ProjectCard>
          <ProjectCard
            title="Private Investors"
            link="https://www.indiegogo.com"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Start date: Jan 1st, 2020. <br />One of the oldest care center in California.
          </ProjectCard>
          <ProjectCard
            title="Venture Capital"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Start date: Jan 1st, 2020. <br />One of the most technologically advanced retirement community. 
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <Contact offset={11}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:young@qdotdata.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://dribbble.com/LekoArts">Dribbble</a> &{' '}
            <a href="https://www.instagram.com/lekoarts.de/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by sylo.love{' '}.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
