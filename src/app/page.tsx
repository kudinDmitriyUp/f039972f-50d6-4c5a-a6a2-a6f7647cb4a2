"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Heart, MessageCircle, Shield, Sparkles, Stethoscope, Target, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="large"
      background="grid"
      cardStyle="solid-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          button={{
            text: "Book Appointment",
            href: "contact"
          }}
          brandName="DentalCare Plus"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Your Smile is Our Priority"
          description="Experience comprehensive dental care with state-of-the-art technology and compassionate professionals dedicated to your oral health"
          tag="Quality Dental Care"
          tagIcon={Heart}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394960540-9qjedf8g.jpg"
          imageAlt="Modern dental clinic interior"
          buttons={[
            {
              text: "Schedule Appointment",
              href: "contact"
            },
            {
              text: "Our Services",
              href: "services"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAbout
          tag="About Us"
          description="At DentalCare Plus, we combine years of expertise with cutting-edge technology to provide exceptional dental care in a comfortable, welcoming environment. Our commitment to excellence ensures every patient receives personalized treatment tailored to their unique needs."
        />
      </div>
      
      <div id="services" data-section="services">
        <FeatureCardTwo
          title="Comprehensive Dental Services"
          description="From routine cleanings to advanced treatments, we offer a full range of dental services"
          tag="Our Services"
          tagIcon={Stethoscope}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "General Dentistry",
              description: "Routine checkups, cleanings, fillings, and preventive care to maintain optimal oral health",
              icon: Shield
            },
            {
              title: "Cosmetic Dentistry",
              description: "Teeth whitening, veneers, and smile makeovers to enhance your confidence",
              icon: Sparkles
            },
            {
              title: "Orthodontics",
              description: "Braces and Invisalign treatments to straighten teeth and correct bite issues",
              icon: Target
            },
            {
              title: "Emergency Care",
              description: "Immediate attention for dental emergencies, pain relief, and urgent treatments",
              icon: Zap
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Expert Team"
          description="Our experienced dental professionals are dedicated to providing exceptional care"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Dr. Sarah Johnson",
              role: "Chief Dentist",
              description: "15+ years experience in general and cosmetic dentistry. Graduated from Harvard School of Dental Medicine.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394964585-gmg8at6m.jpg",
              imageAlt: "Dr. Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Dr. Michael Chen",
              role: "Orthodontist",
              description: "Specialist in orthodontics and jaw alignment. Board-certified with expertise in Invisalign treatments.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394965279-0cu23tv2.jpg",
              imageAlt: "Dr. Michael Chen portrait"
            },
            {
              id: "3",
              name: "Dr. Emily Rodriguez",
              role: "Dental Hygienist",
              description: "Certified dental hygienist focused on preventive care and patient education for optimal oral health.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394965764-iowj4lzu.jpg",
              imageAlt: "Dr. Emily Rodriguez portrait"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Patients Say"
          description="Real experiences from our valued patients who trust us with their dental care"
          tag="Patient Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Jennifer Smith",
              role: "Marketing Director",
              company: "TechCorp Inc",
              rating: 5,
              content: "Exceptional dental care! The team at DentalCare Plus made my visit comfortable and stress-free. Dr. Johnson's expertise and gentle approach are truly remarkable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394966273-okpf0col.jpg",
              imageAlt: "Jennifer Smith portrait"
            },
            {
              id: "2",
              name: "Robert Martinez",
              role: "Business Owner",
              company: "Local Restaurant",
              rating: 5,
              content: "Outstanding service from start to finish. The modern facility and professional staff create a welcoming environment. Highly recommend for all dental needs.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394966897-1b69xw63.jpg",
              imageAlt: "Robert Martinez portrait"
            },
            {
              id: "3",
              name: "Lisa Thompson",
              role: "Teacher",
              company: "Elementary School",
              rating: 5,
              content: "The best dental experience I've ever had! The staff is incredibly caring and Dr. Chen's orthodontic work transformed my smile. Thank you DentalCare Plus!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394967512-ox8r45io.jpg",
              imageAlt: "Lisa Thompson portrait"
            },
            {
              id: "4",
              name: "David Wilson",
              role: "Engineer",
              company: "Tech Solutions",
              rating: 5,
              content: "Professional, efficient, and genuinely caring. The emergency dental service saved my weekend when I had a dental issue. Grateful for their excellent care.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394968007-io23n74c.jpg",
              imageAlt: "David Wilson portrait"
            },
            {
              id: "5",
              name: "Maria Garcia",
              role: "Nurse",
              company: "City Hospital",
              rating: 5,
              content: "As a healthcare professional myself, I appreciate the attention to detail and patient care at DentalCare Plus. Dr. Rodriguez provides excellent preventive care.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394968598-vkkmsu6d.jpg",
              imageAlt: "Maria Garcia portrait"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Schedule Your Appointment"
          description="Ready to take the first step towards better oral health? Contact us to schedule your appointment today."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "service",
              type: "text",
              placeholder: "Service Needed",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Additional information or special requests...",
            rows: 4,
            required: false
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763394961204-n6rmcbk3.jpg"
          imageAlt="Professional dental care"
          mediaPosition="right"
          buttonText="Book Appointment"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="DentalCare Plus"
          columns={[
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Services",
                  href: "services"
                },
                {
                  label: "Meet Our Team",
                  href: "team"
                }
              ]
            },
            {
              items: [
                {
                  label: "Patient Reviews",
                  href: "testimonials"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "Emergency Care",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Privacy Policy",
                  href: "privacy"
                },
                {
                  label: "Terms of Service",
                  href: "terms"
                },
                {
                  label: "Insurance",
                  href: "insurance"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}