<script lang="ts" setup></script>

<template>
  <main>
    <div class="container">
      <section class="section-hero">
        <ClientOnly>
          <BusinessCard />
        </ClientOnly>
      </section>
    </div>

    <section class="section-description">
      <div class="container">
        <div class="section-description-content">
          <div class="section-description-column section-description-column--left">
            <h2>about me</h2>
            <p>
              I'm Kasia, a Frontend Developer, who loves creating! Having chosen web development as a career, I can bring together my
              creativity and interest in technology every day, to build great experiences for people around me. Responsive design,
              perfomance or accessibility are fundamentals that I take very seriously in my work, to ensure that the fraction of the web I'm
              resposible for, can be enjoyed by everyone. I have experience in building a variety of websites, such as large-scale
              e-commerce platforms or user management systems, which has taught me a great deal about working in a team to bring an idea to
              life.I also like to work on my own applications, which you can preview below, together with some of my student projects.
            </p>
          </div>

          <div class="section-description-column section-description-column--right">
            <h2>tech I like</h2>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <section class="section-projects">
        <h2>student & side projects</h2>

        <ProjectCardList />
      </section>
    </div>

    <section class="section-experience">
      <div class="container">
        <h2>work experience</h2>
      </div>

      <template v-for="i in 3" :key="`experience-preview__${i}`">
        <ExperiencePreview />
      </template>
    </section>

    <section class="section-contact">
      <div class="container">
        <div class="h2">get in touch!</div>
        <p>If you’re interested in my work, don’t hesitate to contact me through one of the channels below.</p>

        <div class="section-contact-links">
          <BaseContactButton to="mailto:kasia.laniecka@gmail.com" text="email" />
          <BaseContactButton to="https://www.linkedin.com/in/kasialaniecka" text="linkedin" />
          <BaseContactButton to="https://github.com/kattata" text="github" />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="postcss" scoped>
section {
  margin-bottom: 100px;
}

.section-hero {
  height: 50vh @(min-width: 900px) 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.section-description {
  border-top: 1px solid var(--color-line);
  border-bottom: 1px solid var(--color-line);

  &-content {
    display: grid;
    grid-template-columns: 1fr @(min-width: 900px) 1fr 1fr;
  }

  &-column {
    padding-block: 40px @(min-width: 900px) 60px;

    &--left {
      padding-right: 0 @(min-width: 900px) 60px;
    }

    &--right {
      padding-left: 0 @(min-width: 900px) 60px;
      border-left: 0 @(min-width: 900px) 1px solid var(--color-line);
    }
  }
}

.section-projects {
}

.section-contact {
  &-links {
    margin-top: 24px;
    display: flex;
    gap: 16px;
  }
}
</style>
