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
                  buildHookId: '5ea707887444a73e3f0bf69a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio2-studio-3aer9p3r',
                  apiId: '42a48889-a6e6-4716-b38d-260627e373da'
                },
                {
                  buildHookId: '5ea70788b95f1f0a99047a1b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio2-web-yxqyy5cn',
                  apiId: 'aa56c4e9-9e23-4247-ad5d-255fdfdc10b4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/williambicknell/sanity-gatsby-portfolio2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio2-web-yxqyy5cn.netlify.app',
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
