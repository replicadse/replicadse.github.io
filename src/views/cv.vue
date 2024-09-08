<template>
  <div class="resume">
    <h1>Alexander Weber</h1>

    <section>
      <p>Tech lead with more than 13 years of experience of which many in leadership roles. With a dedication to practical and efficient solutions as well as a hands on mindset, I am a full‐time problem solver who believes in leadership by example and simplicity by design.</p>
      <h2>Personal information</h2>
      <p><strong>Email:</strong> alexanderh.weber@outlook.com</p>
      <p><strong>Phone:</strong> (628) 468-3123</p>
      <p><strong>Website:</strong> <a href="https://replicadse.github.io" target="_blank">replicadse.github.io</a></p>
    </section>

    <section>
      <h2>Experience</h2>
      <div v-for="(v, i) in experience" :key="i" class="experience-item">
        <h3>{{ v.title }} - {{ v.company }} ({{ v.country }})</h3>
        <p><em>{{ v.period }}</em></p>
        <ul>
          <li v-for="(bullet, j) in v.bullets" :key="j">
            {{ bullet }}
          </li>
        </ul>
        <div v-if="v.references">
          <h4>References</h4>
          <ul>
            <li v-for="(reference, j) in v.references" :key="j">
              <a :href="reference.url" target="_blank">{{ reference.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h2>Publications</h2>
      <div v-for="(v, i) in publications" :key="i" class="publication-item">
        <h3>{{ v.title }}</h3>
        <p>{{ v.description }}</p>
      </div>
    </section>

    <section>
      <h2>Open source projects</h2>
      <div v-for="(v, i) in projects" :key="i" class="project-item">
        <h3>{{ v.title }}</h3>
        <p><a :href="v.url" target="_blank">{{ v.url }}</a></p>
        <p>{{ v.description }}</p>
        <p class="tech-stack">Tech stack: {{ v.techStack.join(', ') }}</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Resume',
  data() {
    return {
      experience: [
        {
          title: 'Principal Software Engineer',
          company: 'NextEra Analytics',
          country: 'United States',
          period: '04/2022 - 02/2024',
          bullets: [
            'Software Architecture and implementation across multiple products and teams',
            'Ideation, design, and implementation of new products and features',
            'Security reviews and implementation of best practices',
            'Creating innovative solutions to complex problems in the energy industry',
          ],
          references: [
            {
              name: 'NextEra 360',
              url: 'https://www.nexteraenergyresources.com/nextera360.html',
            }
          ]
        },
        {
          title: 'Head of Engineering',
          company: 'YoMa Solutions GmbH',
          country: 'Germany',
          period: '06/2021 - 04/2022',
          bullets: [
            'Responsible for the engineering department incl. hiring and staffing',
            'Technical Lead for all engineering projects',
            'Worked on track & trace - a smart prediction systems for the automotive industry supply chain'
          ],
          references: [
            {
              name: 'YoMa Solutions Track & Trace',
              url: 'https://yoma-track-trace.com/en/',
            }
          ]
        },
        {
          title: 'Staff Software Engineer',
          company: 'Jungheinrich AG',
          country: 'Germany',
          period: '11/2019 - 06/2021',
          bullets: [
            'Cloud native development of an online platform connecting >30k smart forklifts',
            'Responsible for shaping the company approach to cloud native development in AWS',
            'Lead engineer for analytics and predictions team'
          ],
          references: [
            {
              name: 'Jungheinrich AG',
              url: 'https://www.jungheinrich.com/en',
            }
          ]
        },
        {
          title: 'IT Consultant',
          company: 'Cassini Consulting AG',
          country: 'Germany',
          period: '03/2018 - 11/2019',
          bullets: [
            'IT consultant for software engineering',
            'Worked on various projects as technical lead, security advisor and software engineer',
            'Worked on undisclosed multi-national projects as technical lead'
          ]
        },
        {
          title: 'Senior Software Engineer & Team Lead',
          company: 'Orgadata AG',
          country: 'Germany',
          period: '08/2011 - 03/2018',
          bullets: [
            'Worked as lead engineer on all CAD and 3D related projects',
            'Team lead for 10+ direct reports',
            'Responsible for technological vision and architecture spanning across multiple products',
          ],
          references: [
            {
              name: 'LogiKal CAD suite',
              url: 'https://www.orgadata.com/us/en/solutions/logikal/cad-suite-2d.html',
            },
            {
              name: 'Revit plugin',
              url: 'https://www.orgadata.com/us/en/solutions/logikal-revit-plugin.html',
            }
          ]
        },
      ],
      projects: [
        {
          title: 'agree',
          url: 'https://github.com/replicadse/agree',
          description: 'A CLI implementation of Shamirs Secret Sharing for splitting secrets into _n_ parts, restorable with _p_ shares where p <= n. It requires multiple individuals to agree on restoring a secret, therefore implementing multi-key-turn security.',
          techStack: ['Rust'],
        },
        {
          title: 'complate',
          url: 'https://github.com/replicadse/complate',
          description: 'A powerful text templating tool for the terminal.',
          techStack: ['Rust'],
        },
        {
          title: 'fmerge',
          url: 'https://github.com/replicadse/fmerge',
          description: 'A recursive file merger.',
          techStack: ['Rust'],
        },
        {
          title: 'hoox',
          url: 'https://github.com/replicadse/hoox',
          description: 'Git hooks done right. Supports re-usable scripts and custom commands.',
          techStack: ['Rust'],
        },
        {
          title: 'hydrogen (archived)',
          url: 'https://github.com/replicadse/hydrogen',
          description: 'A Kubernetes native websocket API gateway & abstraction layer (mostly an example project for Kubernetes projects, utilizing the operator pattern).https://github.com/replicadse/hydrogen A Kubernetes native websocket API gateway & abstraction layer (mostly an example project for Kubernetes projects, utilizing the operator pattern).',
          techStack: ['Rust', 'Kubernetes'],
        },
        {
          title: 'neomake',
          url: 'https://github.com/replicadse/neomake',
          description: 'An alternative to makefiles inspired by GitLab pipelines. Includes DAG command execution and caching, parallel execution, matrix invokes and much more.',
          techStack: ['Rust'],
        },
        {
          title: 'ranger',
          url: 'https://github.com/replicadse/ranger',
          description: 'An application bootstrapping tool with templates.',
          techStack: ['Rust'],
        },
        {
          title: 'viking',
          url: 'https://github.com/replicadse/viking',
          description: 'A slightly opinionated API load testing application.',
          techStack: ['Rust'],
        },
        {
          title: 'wavefront_rs',
          url: 'https://github.com/replicadse/wavefront_rs',
          description: 'A library to read and write wavefront .obj (and .mtl) files.',
          techStack: ['Rust'],
        },
      ],
      publications: [
        {
          title: 'What is Software Quality anyway? - presentation at Code.Talks 2018',
          description: 'A presentation on software quality at Code.Talks 2018 in Hamburg, Europes largest developer conference.',
        },
        {
          title: 'Resolving self-intersecting in R^2 polygons for a csg system',
          description: 'A paper on resolving self-intersecting polygons in R^2 space. Relevant for extrusion and other boolean operations in CSG systems.',
        },
        {
          title: 'Defensive techniques against reverse engineering C# IL code',
          description: 'My Bachelor Thesis on the topic of defensive techniques like obfuscation to prevent reverse engineering of C# and intermediate language code.',
        },
      ],
    }
  }
}
</script>

<style scoped>
.resume {
  max-width: 900px;
  margin: 40px auto;
  padding: 60px;
  font-family: 'Roboto', 'Arial', sans-serif;
  line-height: 1.8;
  color: #333;
  background-color: #fff;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

h1 {
  font-size: 3em;
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 15px;
  margin-bottom: 40px;
  text-align: center;
}

h2 {
  font-size: 2em;
  color: #2c3e50;
  margin-top: 45px;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-left: 5px solid #3498db;
  padding-left: 15px;
}

h3 {
  font-size: 1.4em;
  color: #34495e;
  margin-top: 10px;
  margin-bottom: 15px;
}

section {
  margin-bottom: 50px;
}

ul {
  padding-left: 25px;
  margin-bottom: 25px;
}

li {
  margin-bottom: 12px;
}

a {
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  border-bottom: 1px solid transparent;
}

a:hover {
  color: #2980b9;
  border-bottom: 1px solid #2980b9;
}

.experience-item, .project-item, .publication-item {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.experience-item:hover, .project-item:hover, .publication-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.tech-stack {
  font-style: italic;
  color: #7f8c8d;
  margin-top: 10px;
}

strong {
  color: #2c3e50;
  font-weight: 600;
}

@media (max-width: 768px) {
  .resume {
    padding: 30px;
    margin: 20px;
  }

  h1 {
    font-size: 2.5em;
  }

  h2 {
    font-size: 1.8em;
  }

  h3 {
    font-size: 1.3em;
  }
}
</style>
