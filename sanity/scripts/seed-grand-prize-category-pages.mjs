import dotenv from 'dotenv'
import {createClient} from '@sanity/client'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

const docs = [
  {
    _id: 'grandPrizeCategoryPage-innovation',
    _type: 'grandPrizeCategoryPage',
    internalTitle: 'Innovation',
    slug: {
      _type: 'slug',
      current: 'innovation',
    },
    whySection: {
      label: 'WHY?',
      title: 'Why innovation matters',
      intro:
        'Innovation is a driving force for societal development and a key to a more sustainable future.',
      body1:
        'By highlighting new ideas and solutions, this award aims to encourage engineers to think in new ways and develop technologies that meet the demands of the future — whether they relate to climate challenges, digitalization or solutions that improve society.',
      body2:
        'With this award, we want to recognize innovations that are not only technically groundbreaking, but also feasible and scalable — solutions that can make a real difference both today and in the future.',
    },
    whoSection: {
      label: 'WHO?',
      title: 'Who can win?',
      intro: 'A person or team whose idea represents a high degree of innovation.',
      body1:
        'The Innovation prize in engineering is awarded to a person or a team that has developed an idea with a high level of innovation. The innovation may represent an entirely new way of thinking, a new method or a concrete solution to an existing problem.',
      body2:
        'We value innovation that is implementable and has the potential to scale, that has a positive impact on society and the economy, and that takes climate challenges into account while contributing to a more sustainable world.',
      body3:
        'It does not have to be a complex solution — the best innovations are often the simplest and most effective.',
    },
    criteriaSection: {
      label: 'CRITERIA',
      title: 'What defines the award',
      intro: 'The fundamental criteria for nomination.',
    },
    criteriaItems: [
      {
        _key: 'innovation-criteria-1',
        title: 'Connection to Sweden',
        text: 'The person or the solution must have a strong connection to Sweden through place of residence, development or another clear link.',
      },
      {
        _key: 'innovation-criteria-2',
        title: 'Societal benefit',
        text: 'The work must have a positive impact on society or the environment.',
      },
      {
        _key: 'innovation-criteria-3',
        title: 'Ethics and sustainability',
        text: 'The solution must meet high ethical standards and promote sustainable development.',
      },
      {
        _key: 'innovation-criteria-4',
        title: 'Current work',
        text: 'Nominees must have been active in the area during the past year.',
      },
      {
        _key: 'innovation-criteria-5',
        title: 'Note',
        text: 'Employees of Preem cannot be nominated.',
      },
    ],
    hallOfFameSection: {
      label: 'HALL OF FAME',
      title: 'Previous winners',
      intro: 'A selection of innovators and teams previously recognized by the award.',
    },
    featuredWinner: {
      eyebrow: 'Featured winner · 2025',
      winner: 'Sunsurf Solar',
      presentedBy: 'Presented by Preem',
      summary:
        'When land is already occupied, why not move solar parks out onto the water? SunSurf Solar has developed a modular floating solar technology adapted to Nordic conditions, with solutions for snow, ice, wind and varying water levels. The water surface cools the panels and increases efficiency, while also reducing evaporation and algal bloom.',
      secondaryText:
        'The jury highlights that SunSurf has not only developed the technology — they have also proven it in operation. That makes them pioneers within a solution with global potential.',
    },
    hallOfFameItems: [
      {
        _key: 'innovation-hof-2024',
        year: '2024',
        winner: 'Dr. Mustafa S Hamada',
        presentedBy: 'Presented by Vattenfall',
        summary:
          'Innovation for mental sustainability in an AI-driven world. Mustafa S Hamada has developed a technology that makes cognitive training accessible to millions of people. His innovation addresses a growing need to strengthen mental focus and resilience in a world where stress and information overload threaten our creative ability.',
        secondaryText:
          'The jury highlights his work as a groundbreaking combination of technology and human well-being, with the potential to influence both individuals and society at large.',
      },
      {
        _key: 'innovation-hof-2023',
        year: '2023',
        winner: 'Team EasyMining',
        presentedBy: 'Presented by Vattenfall',
        summary:
          'Circular solutions for more sustainable food production. Team EasyMining has shown how research can be put into practice by creating an innovation that enables the recycling of nutrients and resources. By reducing the environmental impact of food production, their technology has the potential to change the industry globally.',
        secondaryText: '',
      },
      {
        _key: 'innovation-hof-2022',
        year: '2022',
        winner: 'SaniSOLE',
        presentedBy: 'Presented by Vattenfall',
        summary:
          'Environmentally friendly and recyclable hygiene products. Innovation can both improve everyday life and reduce climate impact. The SaniSOLE team has developed a product that makes it possible to use circular and environmentally friendly sanitation solutions without compromising on quality.',
        secondaryText:
          'The jury emphasizes that this innovation has the potential to help people around the world reduce their climate impact, while offering a sustainable and practical solution.',
      },
      {
        _key: 'innovation-hof-2021',
        year: '2021',
        winner: 'Hans-Olof Nilsson',
        presentedBy: 'Presented by Vattenfall',
        summary:
          'The energy pioneer who built his own sustainable system. Hans-Olof Nilsson has proven that it is possible to live completely off-grid using renewable energy. Through innovative solutions in energy and hydrogen storage, he has created a self-sufficient energy system that inspires both private individuals and decision-makers.',
        secondaryText:
          'The jury highlights his curiosity, experimental mindset and willingness to share his insights, which make him a true innovator and role model for the energy solutions of the future.',
      },
    ],
  },
  {
    _id: 'grandPrizeCategoryPage-leadership',
    _type: 'grandPrizeCategoryPage',
    internalTitle: 'Leadership',
    slug: {
      _type: 'slug',
      current: 'leadership',
    },
    whySection: {
      label: 'WHY?',
      title: 'Why leadership matters',
      intro: 'Leadership is a decisive force in times of change.',
      body1:
        'The world is changing rapidly and many organizations find themselves in the middle of major transformations. In times of change, leadership becomes a crucial force for driving development forward. Those who fail to adapt risk losing their competitiveness — but the right leadership can create both direction and security.',
      body2:
        'Leading through change is a complex challenge that requires both strategic understanding and the ability to bring people along. It requires clear, inspiring and sustainable leadership that can turn visions into reality.',
    },
    whoSection: {
      label: 'WHO?',
      title: 'Who can win?',
      intro: 'A person who has successfully led a team or an organization through change.',
      body1:
        'The Leadership prize is awarded to a person who has successfully led a team or an organization through change. The winner has not only taken the operation from point A to point B, but has also ensured that people, processes and ideas work together in an effective way.',
      body2:
        'A strong leader understands that it is not about change for the sake of change, but about creating real value. Through their leadership, the winner has contributed to developing the operation in a sustainable, inclusive and strategic way.',
      body3: '',
    },
    criteriaSection: {
      label: 'CRITERIA',
      title: 'What defines the award',
      intro: 'The fundamental criteria for nomination.',
    },
    criteriaItems: [
      {
        _key: 'leadership-criteria-1',
        title: 'Connection to Sweden',
        text: 'The person or the solution must have a strong connection to Sweden through place of residence, development or another clear link.',
      },
      {
        _key: 'leadership-criteria-2',
        title: 'Societal benefit',
        text: 'The work must have a positive impact on society or the environment.',
      },
      {
        _key: 'leadership-criteria-3',
        title: 'Ethics and sustainability',
        text: 'The solution must meet high ethical standards and promote sustainable development.',
      },
      {
        _key: 'leadership-criteria-4',
        title: 'Current work',
        text: 'Nominees must have been active in the area during the past year.',
      },
      {
        _key: 'leadership-criteria-5',
        title: 'Note',
        text: 'Employees of SAAB cannot be nominated.',
      },
    ],
    hallOfFameSection: {
      label: 'HALL OF FAME',
      title: 'Previous winners',
      intro:
        'Since 2021, The Grand Prize for Engineering in Leadership has celebrated leaders who, through clarity, inspiration and strategic ability, have driven successful transformation journeys.',
    },
    featuredWinner: {
      eyebrow: 'Featured winner · 2025',
      winner: 'Donna Hanafi, Spotify',
      presentedBy: 'Presented by Fellowmind',
      summary:
        'In her roles at Spotify, Tictail and Mentimeter, Donna Hanafi has built product teams that deliver innovation and value, but also cultures where gender equality and openness about mental health are natural parts of the work. The jury highlights her combination of technical competence, strategic perspective and a strong commitment to diversity.',
      secondaryText:
        'She is a role model for the engineering leadership of the future — where technology and people go hand in hand.',
    },
    hallOfFameItems: [
      {
        _key: 'leadership-hof-2024',
        year: '2024',
        winner: 'Stina Linderoth, Aurobay',
        presentedBy: 'Presented by Fellowmind',
        summary:
          'Visionary leadership that has transformed a complex digital structure. Stina Linderoth has led her team through an extensive digital transformation, in which more than 600 applications have been reworked to create an efficient and sustainable IT infrastructure. By promoting collaboration and innovation, she has inspired her team to see opportunities where others see obstacles.',
        secondaryText: '',
      },
      {
        _key: 'leadership-hof-2023',
        year: '2023',
        winner: 'Olof Johansson, Trafikverket',
        presentedBy: 'Presented by Fellowmind',
        summary:
          'A leader who simplifies digitalization and engages an entire industry. Through his work, Olof Johansson has been a key person in the digitalization of the infrastructure sector. By driving dialogue, building understanding and creating engagement, he has inspired both internally and externally, and has been a strong advocate for digital transformation throughout society.',
        secondaryText: '',
      },
      {
        _key: 'leadership-hof-2022',
        year: '2022',
        winner: 'Marie Brattberg, Recorded Future',
        presentedBy: 'Presented by Försvarsmakten',
        summary:
          'Empathetic leadership that creates security and development. In her role as Chief Strategy Officer at Recorded Future, Marie Brattberg has shown how openness, responsibility and a focus on results can build strong organizations. She leads almost 900 employees globally and inspires her teams to reach their full potential.',
        secondaryText: '',
      },
      {
        _key: 'leadership-hof-2021',
        year: '2021',
        winner: 'Karin Hagren, King',
        presentedBy: 'Presented by Solita',
        summary:
          'Curiosity, structure and culture-building in an international context. In her leadership role at King, Karin Hagren has shown how a coaching and exploratory style of leadership can strengthen organizations. She has created a learning culture where change is seen as an opportunity and where agile work is a natural part of the organization.',
        secondaryText: '',
      },
    ],
  },
  {
    _id: 'grandPrizeCategoryPage-rising-star',
    _type: 'grandPrizeCategoryPage',
    internalTitle: 'Rising Star',
    slug: {
      _type: 'slug',
      current: 'rising-star',
    },
    whySection: {
      label: 'WHY?',
      title: 'Why rising stars matter',
      intro:
        'Young engineers with new ideas, leadership and commitment are essential to the future.',
      body1:
        'To meet the major challenges facing society and infrastructure, we need young engineers with new ideas, leadership and commitment. By highlighting the technical talents of the future, this award aims to inspire the next generation to think big, challenge convention and contribute to more sustainable development.',
      body2:
        'The prize is intended to recognize innovative perspectives and solutions in technology and sustainability, with a particular focus on the engineer’s role in shaping the future of transport and infrastructure. By celebrating young role models, we create a platform for new ideas and inspire more people to choose an engineering path where they can make a difference.',
    },
    whoSection: {
      label: 'WHO?',
      title: 'Who can win?',
      intro:
        'An individual or team that has made a significant impact early in their career or during their studies.',
      body1:
        'The Rising Star award is presented to an individual or a team that has made a significant impact early in their career or during their studies. The winner is someone who, through innovation, leadership or technical ingenuity, has inspired others and shown a strong desire to influence their industry and society at large.',
      body2:
        'We are looking for people whose work has developed an innovative idea or solution, demonstrated impressive leadership and inspired others, or engaged with sustainability, inclusion or societal development.',
      body3:
        'The nominee must be a student or have started their career within the past three years.',
    },
    criteriaSection: {
      label: 'CRITERIA',
      title: 'What defines the award',
      intro: 'The fundamental criteria for nomination.',
    },
    criteriaItems: [
      {
        _key: 'rising-star-criteria-1',
        title: 'Connection to Sweden',
        text: 'The person or the solution must have a strong connection to Sweden through place of residence, development or another clear link.',
      },
      {
        _key: 'rising-star-criteria-2',
        title: 'Societal benefit',
        text: 'The work must have a positive impact on society or the environment.',
      },
      {
        _key: 'rising-star-criteria-3',
        title: 'Ethics and sustainability',
        text: 'The solution must meet high ethical standards and promote sustainable development.',
      },
      {
        _key: 'rising-star-criteria-4',
        title: 'Current work',
        text: 'Nominees must have been active in the area during the past year.',
      },
      {
        _key: 'rising-star-criteria-5',
        title: 'Note',
        text: 'Employees of Trafikverket cannot be nominated.',
      },
    ],
    hallOfFameSection: {
      label: 'HALL OF FAME',
      title: 'Previous winners',
      intro: 'A selection of individuals and teams previously recognized by the award.',
    },
    featuredWinner: {
      eyebrow: 'Featured winner · 2025',
      winner: 'Jonatan Persson, Helios Innovation',
      presentedBy: 'Presented by Trafikverket',
      summary:
        'In just a few years, Jonatan Persson has gone from student to founder of Helios Innovation. The company develops a technology that uses waste heat to purify industrial wastewater — a solution that both saves energy and reduces emissions. The jury sees him as a prime example of the next generation of engineers: young, courageous and entrepreneurial.',
      secondaryText:
        'He has already received several awards, but most importantly, his innovation works in practice and drives industry toward a more sustainable future.',
    },
    hallOfFameItems: [
      {
        _key: 'rising-star-hof-2024',
        year: '2024',
        winner: 'Jonna Matthiesen',
        presentedBy: 'Presented by Trafikverket',
        summary:
          'The AI researcher shaping the future. Jonna Matthiesen has made groundbreaking progress in AI and deep learning, where her work in neural architecture search (NAS) has driven innovation in scalable AI solutions. In a short time, she has gone from intern to team lead, and is today one of the most important young voices in the AI industry.',
        secondaryText:
          'The jury highlights her expertise, strategic ability and leadership, as well as how she serves as a role model for women in one of the most male-dominated areas of the tech industry.',
      },
      {
        _key: 'rising-star-hof-2023',
        year: '2023',
        winner: 'Paula Runsten and Felix Kruse with Rebaba',
        presentedBy: 'Presented by Trafikverket',
        summary:
          'Sustainability and circular economy for the energy solutions of the future. Paula Runsten and Felix Kruse have developed a simple, functional and industrially scalable battery solution, with a focus on lifespan and reuse of lithium-ion batteries. By combining entrepreneurship with long-term sustainability work, they help reduce the environmental impact of battery use while also creating hope for a more sustainable energy future.',
        secondaryText: '',
      },
      {
        _key: 'rising-star-hof-2022',
        year: '2022',
        winner: 'Elvftech',
        presentedBy: 'Presented by Trafikverket',
        summary:
          'Innovation that reduces energy losses and carbon emissions. Elvftech’s technology can significantly reduce energy losses from electricity production, resulting in a substantial reduction in carbon emissions. Through their work, they address one of our most urgent climate challenges and create solutions that make society more energy efficient.',
        secondaryText:
          'The jury emphasizes how the technology has strong scalability and can be used by a wide range of actors, making it an important piece of the transition to a more sustainable energy sector.',
      },
    ],
  },
  {
    _id: 'grandPrizeCategoryPage-role-model-of-the-year',
    _type: 'grandPrizeCategoryPage',
    internalTitle: 'Role Model of the Year',
    slug: {
      _type: 'slug',
      current: 'role-model-of-the-year',
    },
    whySection: {
      label: 'WHY?',
      title: 'Why role models matter',
      intro:
        'The future of engineering is shaped not only by technology, but by people, leadership and the courage to drive change.',
      body1:
        'The engineering of the future is not only about technology - it is also about people, leadership and the courage to change. To meet the challenges of society and create a more sustainable and innovative world, we need role models who inspire, engage and show the way.',
      body2:
        'With the Role Model of the Year award, we want to recognize engineers who through their work have challenged norms and shown new ways of thinking and working, taken initiatives that contribute to positive change in technology, society or sustainability, and inspired others through leadership, engagement or expertise.',
    },
    whoSection: {
      label: 'WHO?',
      title: 'Who can win?',
      intro:
        'An engineer or a team whose work has inspired others and created positive change.',
      body1:
        'The Role Model of the Year award can be given to an individual engineer or to a team in which the majority have engineering expertise.',
      body2:
        'We are looking for a person or team who, through their work, has challenged norms and shown new ways of thinking and working in technology and engineering, taken concrete initiatives to create positive change in technology, society or sustainability, and influenced their surroundings while inspiring others through leadership, engagement or expertise.',
      body3:
        'This may be a person or team that has broken new ground through leadership, education, technical innovation or societal development - or an engineer or team whose commitment has made a difference for individuals, teams or entire organizations.',
    },
    criteriaSection: {
      label: 'CRITERIA',
      title: 'What defines the award',
      intro: 'The fundamental criteria for nomination.',
    },
    criteriaItems: [
      {
        _key: 'role-model-criteria-1',
        title: 'Connection to Sweden',
        text: 'The person or team must have a strong connection to the Swedish engineering market.',
      },
      {
        _key: 'role-model-criteria-2',
        title: 'Societal benefit',
        text: 'The work must contribute to a sustainable society.',
      },
      {
        _key: 'role-model-criteria-3',
        title: 'Ethics and sustainability',
        text: 'The work or initiative must meet high ethical standards and promote sustainable development.',
      },
      {
        _key: 'role-model-criteria-4',
        title: 'Current work',
        text: 'Nominees must have been active in the area during the past year.',
      },
      {
        _key: 'role-model-criteria-5',
        title: 'Note',
        text: 'Employees of Sweco cannot be nominated.',
      },
    ],
    hallOfFameSection: {
      label: 'HALL OF FAME',
      title: 'Previous winners',
      intro: 'A selection of individuals and teams previously recognized by the award.',
    },
    featuredWinner: {
      eyebrow: 'Featured winner · 2025',
      winner: 'Jonatan Stromgren, LM International',
      presentedBy: 'Presented by Sweco',
      summary:
        "Jonatan Stromgren has worked with water supply in Swedish municipalities and taken his expertise further into humanitarian projects in East Africa. There, he has developed sustainable solutions for clean water in some of the world's most vulnerable environments.",
      secondaryText:
        'The jury highlights his ability to combine technical knowledge with cultural understanding - and that he inspires both younger and more experienced colleagues through his commitment.',
    },
    hallOfFameItems: [],
  },
  {
    _id: 'grandPrizeCategoryPage-sustainability',
    _type: 'grandPrizeCategoryPage',
    internalTitle: 'Sustainability',
    slug: {
      _type: 'slug',
      current: 'sustainability',
    },
    whySection: {
      label: 'WHY?',
      title: 'Why sustainability matters',
      intro:
        'The climate crisis demands concrete action, innovation and engineering expertise.',
      body1:
        'The climate crisis is one of the greatest challenges of our time, and we have a responsibility toward future generations to both contribute to solutions and reduce our own climate impact. To succeed in the green transition, groundbreaking innovation, new business models and engineering expertise are required.',
      body2:
        'Skanska has set the goal of being climate-neutral throughout its entire value chain by 2045, and we see that the transformation of the industry needs to happen quickly. That is why this year we are focusing on solutions that directly affect environmental and climate issues.',
    },
    whoSection: {
      label: 'WHO?',
      title: 'Who can win?',
      intro:
        'An engineer or small team turning climate challenges into practical, lasting solutions.',
      body1:
        'The Sustainability prize in engineering can be awarded to an individual engineer or a smaller team in which the majority have engineering expertise. The winner is someone who is passionate about the climate issue, thinks innovatively and wants to change the world in a sustainable way.',
      body2:
        'The nominee must have identified a climate challenge, large or small, and developed a product, service or innovation that has had a positive, direct and sustainable impact on the climate.',
      body3:
        'This could, for example, involve a new product or technology, an innovative method or new way of working, or a service that contributes to reduced climate impact.',
    },
    criteriaSection: {
      label: 'CRITERIA',
      title: 'What defines the award',
      intro: 'The fundamental criteria for nomination.',
    },
    criteriaItems: [
      {
        _key: 'sustainability-criteria-1',
        title: 'Connection to Sweden',
        text: 'The person or the solution must have a strong connection to Sweden through place of residence, development or another clear link.',
      },
      {
        _key: 'sustainability-criteria-2',
        title: 'Societal benefit',
        text: 'The work must have a positive impact on society or the environment.',
      },
      {
        _key: 'sustainability-criteria-3',
        title: 'Ethics and sustainability',
        text: 'The solution must meet high ethical standards and promote sustainable development.',
      },
      {
        _key: 'sustainability-criteria-4',
        title: 'Current work',
        text: 'Nominees must have been active in the area during the past year.',
      },
      {
        _key: 'sustainability-criteria-5',
        title: 'Note',
        text: 'Employees of Skanska cannot be nominated.',
      },
    ],
    hallOfFameSection: {
      label: 'HALL OF FAME',
      title: 'Previous winners',
      intro: 'A selection of individuals and teams previously recognized by the award.',
    },
    featuredWinner: {
      eyebrow: 'Featured winner · 2025',
      winner: 'HYBRIT’s hydrogen storage',
      presentedBy: 'Presented by Skanska',
      summary:
        'One of industry’s biggest climate challenges is how to store energy and balance the system when solar and wind output vary. HYBRIT’s pilot project in Luleå has provided an answer: storage of fossil-free hydrogen in steel-lined rock caverns. The technology has been tested in real operation with performance corresponding to 50 years of use — and the results show that fossil-free steel is no longer a vision, but a reality on the path to scaling up.',
      secondaryText:
        'The jury sees the project as a technical milestone that can reduce Sweden’s carbon emissions by up to ten percent and give industry an entirely new flexibility.',
    },
    hallOfFameItems: [
      {
        _key: 'sustainability-hof-2024',
        year: '2024',
        winner: 'Johanna Stjernström, Stockholm City Exploitation Office',
        presentedBy: 'Presented by Skanska',
        summary:
          'The construction industry’s path toward an emission-free future. Johanna Stjernström has led the work on "Persikan", one of Sweden’s first emission-free construction sites. Through innovative knowledge-sharing and a strong commitment to collaboration, she has shown how the construction sector can reduce its climate impact, while also lowering noise and air pollution in densely built urban areas.',
        secondaryText: '',
      },
      {
        _key: 'sustainability-hof-2023',
        year: '2023',
        winner: 'Skellefteå Kraft Business Innovation Team',
        presentedBy: 'Presented by Skanska',
        summary:
          'Business models that drive the climate transition. The winners have shown how innovative business models can solve climate challenges by creating win-win situations. By transforming old business models and thinking in new ways, they have found a key to accelerating the transition toward a more sustainable energy sector.',
        secondaryText: '',
      },
      {
        _key: 'sustainability-hof-2022',
        year: '2022',
        winner: 'Gaia Gen',
        presentedBy: 'Presented by Skanska',
        summary:
          'Data that reduces the climate footprint of digitalization. In a world where digitalization is increasing, new solutions are needed to understand and reduce its climate impact. Gaia Gen has created a solution that makes it possible for companies to gain precise knowledge of the climate impact of their cloud services, making it easier to make data-driven and sustainable decisions.',
        secondaryText: '',
      },
      {
        _key: 'sustainability-hof-2021',
        year: '2021',
        winner: 'Northvolt through Maria Åstrand',
        presentedBy: 'Presented by Skanska',
        summary:
          'Revolutionizing Swedish industry through sustainable battery production. Northvolt has shown that it is possible to create circular and climate-neutral industrial production in Sweden. By building a green value chain for battery metals, they have laid the foundation for more sustainable electrification and the transformation of the transport sector.',
        secondaryText: '',
      },
    ],
  },
]

async function run() {
  for (const doc of docs) {
    await client.createOrReplace(doc)
    console.log(`Seeded: ${doc.internalTitle}`)
  }

  console.log('Done seeding grand prize category pages.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})