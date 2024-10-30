import React from "react";
import Header from "../Components/Header";
import Bg from "../Assests/Images/Hero Image.svg"; // Ensure the path to your image is correct
import Button from "../Components/Button";
import PC from "../Assests/Images/PC.svg";
import Search from "../Assests/Images/Search.svg";
import Footer from "../Components/Footer";
import Accordion from "../Components/Accordion";

const LandingPage = () => {
  return (
    <div>
      <Header />
      {/* Wrapping image in a section to ensure proper layout */}
      <section className="relative flex items-center justify-center xl:h-[700px] lg:h-[700px] md:h-[448px]">
        <img
          src={Bg}
          alt="Hero Background"
          className="absolute inset-0 w-full xl:h-[860px] lg:h-[700px] md:h-[448px] object-cover"
        />
        <div className="lg:w-[622px] lg:h-[306px] md:w-full md:h-[258px] xl:absolute xl:z-10 lg:absolute lg:z-10 lg:left-[60px] lg:top-[354px] md:mt-[705px] xl:left-[80px] xl:top-[394px] mt-[219px]  lg:mt-[0] xl:mt-[0] flex flex-col text-white bg-gradient px-[20px] pt-[24px] pb-[32px] xl:px-[40px] xl:pt-[24px] xl:pb-[32px] lg:px-[40px] lg:pt-[24px] lg:pb-[32px] md:px-[40px] md:pt-[24px] md:pb-[32px]">
          <h1 className="text-[36px] xl:text-[48px] lg:text-[48px] md:text-[48px] font-Inter-Bold font-bold mb-0 text-left leading-none">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </h1>
          <div className="w-full flex justify-start mt-4">
            <Button text="GET FREE CONSULTATION" />
          </div>
        </div>
      </section>

      {/* Main Content Section Container */}
      <div className="flex flex-col items-center space-y-14 xl:mt-[250px] md:mt-[350px] lg:mt-[100px]">
        {/* WEB & MOBILE APP DEVELOPMENT Section */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-center xl:w-[1050px] xl:h-[414px] lg:w-[896px] lg:h-[346px] md:w-[688px] md:h-[285px] w-[335px]">
          <img
            src={PC}
            alt="PC Image"
            className="xl:w-[414px] lg:w-[346px] mb-2 md:w-[275px] sm:mb-0 sm:mr-4" // Add margin-right for spacing
          />
          <div className="xl:ml-[130px] xl:text-left lg:text-left md:text-left text-center">
            {" "}
            {/* Center text on small screens */}
            <h2 className="text-[27px] text-primary font-Poppins font-bold">
              WEB & MOBILE APP DEVELOPMENT
            </h2>
            <p className="text-[16px] mt-4 mb-4 font-Inter font-medium">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks that tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <Button text="LEARN MORE" />
          </div>
        </div>

        {/* Digital Strategy Consulting Section */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-center xl:w-[1255px] xl:h-[414px] lg:w-[896px] lg:h-[346px] md:w-[688px] md:h-[285px] w-[335px]">
          {/* Image section for small screens first, but move it below for larger screens */}
          <img
            src={Search}
            alt="Search Image"
            className="xl:w-[414px] lg:w-[346px] mb-2 md:w-[275px] sm:mb-0 sm:mr-4 order-1 xl:order-2 lg:order-2 md:order-2" // Order it first on small screens
          />

          {/* Text section */}
          <div className="xl:ml-[130px] xl:text-left lg:text-left md:text-left text-center order-2 xl:order-1 lg:order-1 md:order-1">
            {" "}
            {/* Ensure text appears second */}
            <h2 className="text-[27px] text-primary font-Poppins font-bold">
              Digital Strategy Consulting
            </h2>
            <p className="text-[16px] mt-4 mb-4 font-Inter font-medium">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation, and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <Button text="LEARN MORE" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-center text-primary font-Poppins text-[27px] font-semibold mt-[80px] mb-12">
          Frequently asked questions
        </h2>

        <div className="mb-4">
          <Accordion
            title="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
            content="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
          />
        </div>
        <div className="mb-4">
          <Accordion
            title="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
            content="Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
          />
        </div>
        <div className="mb-4">
          <Accordion
            title="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
            content="Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
          />
        </div>
      </div>

      <div className="mt-14">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
