<script lang="ts" setup></script>

<template>
  <main>
    <section class="section-hero"></section>

    <div class="container">
      <section class="section-description">
        <div class="section-description-column section-description-column--left">
          <h2>about me</h2>
          <p>
            I'm Kasia, a Frontend Developer, who loves creating! Having chosen web development as a career, I can bring together my
            creativity and interest in technology every day, to build great experiences for people around me. Responsive design, perfomance
            or accessibility are fundamentals that I take very seriously in my work, to ensure that the fraction of the web I'm resposible
            for, can be enjoyed by everyone. I have experience in building a variety of websites, such as large-scale e-commerce platforms
            or user management systems, which has taught me a great deal about working in a team to bring an idea to life.I also like to
            work on my own applications, which you can preview below, together with some of my student projects.
          </p>
        </div>

        <div class="section-description-column section-description-column--right">
          <h2>tech I like</h2>
        </div>
      </section>
    </div>

    <div class="container">
      <section class="section-projects">
        <h2>student & side projects</h2>
      </section>
    </div>

    <div class="container">
      <section class="section-experience">
        <h2>work experience</h2>
        <template v-for="i in 3" :key="`experience-preview__${i}`">
          <ExperiencePreview />
        </template>
      </section>
    </div>

    <div class="container">
      <section class="section-contact">
        <div class="h2">get in touch!</div>

        <div class="section-contact-links">
          <BaseContactButton to="mailto:kasia.laniecka@gmail.com" text="email" />
          <BaseContactButton to="https://www.linkedin.com/in/kasialaniecka" text="linkedin" />
          <BaseContactButton to="https://github.com/kattata" text="github" />
          <BaseContactButton to="/" text="resume" />
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
section {
  margin-bottom: 100px;
}

.section-hero {
  height: 60vh;
}

.section-description {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid var(--color-line);
  border-bottom: 1px solid var(--color-line);

  &-column {
    padding: 60px;

    &--right {
      border-left: 1px solid var(--color-line);
    }
  }
}

.section-projects {
  height: 50vh;
}

.section-contact {
  &-links {
    display: flex;
    gap: 16px;
  }
}
</style>
