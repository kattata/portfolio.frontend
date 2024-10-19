<script lang="ts" setup>
useHead({
  title: 'Kasia Laniecka'
});
</script>

<template>
  <main>
    <div class="container">
      <section class="section-hero">
        <ClientOnly>
          <BusinessCard />
        </ClientOnly>
      </section>
    </div>

    <div id="about" class="section-wrapper section-wrapper--no-border section-wrapper--no-margin-bottom">
      <section class="section-description">
        <div class="container">
          <div class="section-description-content">
            <div class="section-description-column section-description-column--left">
              <h2>about me</h2>
              <p>
                I'm Kasia, a Frontend Developer, who loves creating! Having chosen web development as a career, I can bring together my
                creativity and interest in technology every day, to build great experiences for people around me.
                <br />
                <br />
                Responsive design, perfomance or accessibility are fundamentals that I take very seriously in my work, to ensure that the
                fraction of the web I'm resposible for, can be enjoyed by everyone.
                <br />
                <br />
                I have experience in building a variety of websites, such as large-scale e-commerce platforms or user management systems,
                which has taught me a great deal about working in a team to bring an idea to life.
                <br />
                <br />
                I also like to work on my own applications, which you can preview below, together with some of my student projects.
              </p>
            </div>

            <div class="section-description-column section-description-column--right">
              <h2>tech I like</h2>

              <div class="section-description-tech">
                <BaseLabel text="HTML" size="large" />
                <BaseLabel text="CSS" size="large" />
                <BaseLabel text="JavaScript" size="large" />
                <BaseLabel text="TypeScript" size="large" />
                <BaseLabel text="Git" size="large" />
                <BaseLabel text="Vue" size="large" />
                <BaseLabel text="Nuxt" size="large" />
                <BaseLabel text="React" size="large" />
                <BaseLabel text="Tailwind" size="large" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div id="projects" class="section-wrapper">
      <div class="container">
        <section class="section-projects">
          <h2>student & side projects</h2>

          <ProjectCardList />
        </section>
      </div>
    </div>

    <div id="experience" class="section-wrapper">
      <section class="section-experience">
        <div class="container">
          <h2>work experience</h2>
        </div>

        <template v-for="i in 3" :key="`experience-preview__${i}`">
          <ExperiencePreview />
        </template>
      </section>
    </div>

    <div id="contact" class="section-wrapper section-wrapper--no-margin-bottom section-wrapper--no-border">
      <section class="section-contact">
        <div class="container">
          <div class="h2">get in touch!</div>
          <p>If you’re interested in my work, don’t hesitate to contact me through one of the channels below.</p>

          <div class="section-contact-links">
            <BaseLabel to="mailto:kasia.laniecka@gmail.com" text="email" size="large" />
            <BaseLabel to="https://www.linkedin.com/in/kasialaniecka" text="linkedin" size="large" />
            <BaseLabel to="https://github.com/kattata" text="github" size="large" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
.section-wrapper {
  padding-bottom: 100px;
  margin-bottom: 100px;
  border-bottom: 1px solid var(--color-line);

  &--no-border {
    border-bottom: 0;
  }

  &--no-margin-bottom {
    margin-bottom: 0;
  }
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
    padding-block: 40px @(min-width: 900px) 100px;

    &--left {
      padding-right: 0 @(min-width: 900px) 60px;
    }

    &--right {
      padding-left: 0 @(min-width: 900px) 60px;
      border-left: 0 @(min-width: 900px) 1px solid var(--color-line);
    }
  }

  &-tech {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    width: 100% @(min-width: 900px) 70%;

    :deep(.label) {
      min-width: 70px;
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
