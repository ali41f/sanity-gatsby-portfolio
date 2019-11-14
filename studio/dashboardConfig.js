export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dcdd556338024048329fd79',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-muvi95wh',
                  apiId: '2aff4cee-2c92-468e-8445-ca86a7ef7a9f'
                },
                {
                  buildHookId: '5dcdd55637ea160a39d914a6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-sn8s41oi',
                  apiId: '79c94188-e35f-4a6b-ae84-cc237b66ba4e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ali41f/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-sn8s41oi.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
