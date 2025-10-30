"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { Layout } from "@/components/layout";
import { TechnologyCard } from "@/components/technology-card";
import { FadeIn } from "@/components/animations";
import { IconGithub2, IconGlobe2 } from "@/components/icons";

import { Container, ProjectsGrid, Card } from "./style";
import { projects } from "@/utils/projectsData";
import { ProjectType } from "@/types/productsType";

export default function Projects() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    <Layout>
      <Container>
        <section>
          <FadeIn direction="down" duration={0.6}>
            <h1>{t("projects.title")}</h1>
          </FadeIn>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <ProjectsGrid>
              {projects.map((project: ProjectType) => (
                <motion.div key={project.id} variants={cardVariants}>
                  <Card>
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      loading="lazy"
                    />
                    <div className="card-wrapper">
                      <header>
                        <h2>{project.title}</h2>
                        <p>{t(project.descriptionKey)}</p>
                      </header>

                      <div className="links-content">
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconGlobe2 /> {t("projects.card.url")}
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconGithub2 /> {t("projects.card.github")}
                          </a>
                        )}
                      </div>

                      <div className="technologies-content">
                        {project.technologies.map((tech, index) => (
                          <TechnologyCard key={index}>{tech}</TechnologyCard>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </ProjectsGrid>
          </motion.div>
        </section>
      </Container>
    </Layout>
  );
}
