import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Jmxs.dev() - Portfolio" />
      <Page useSplashScreenAnimation="hola">
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Jesús Mora" />
        <InterestsSection sectionId="details" heading="Skills" />
        <ProjectsSection sectionId="features" heading="Last Projects 👉" />
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
}
