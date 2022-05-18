const products = [
  {
    _id: '1',
    name: 'Apostrophe Blog Manager Demo',
    image: 'demo',
    description: 'Provides a complete foundation for blogging in ApostropheCMS.',
    content: 'When starting a project, what we first need is', 
    rating: 4.5,
    numReviews: 12,
    numComments: 20, 
    comments: [{
      _id: '1', 
      user: 'Delaney', 
      message: 'Super helpful!', 
      likes: '3'
    }, {
      _id: '2', 
      user: 'Aaron', 
      message: 'Had trouble with the xyz part on my abc platform', 
      likes: '0'
    }, {
      _id: '3', 
      user: 'Jon', 
      message: 'Could this be deployed on xyz platform?', 
      likes: '12'
    }]
  },
  {
    _id: '2',
    name: 'Apostrophe Permissions Demo',
    image: 'permissions',
    description:
      'Permissions in Apostrophe provide a robust, consistent permissions set through User Roles. User Roles, including Admin, Editor, and Guest, provide fixed, immutable permissions for all content types.',
    rating: 4.0,
    numReviews: 8,
    numComments: 26
  },
  {
    _id: '3',
    name: 'Apostrophe Hotels Demo',
    image: 'hotels',
    description:
      'Create a hotels listing website from scratch using ApostropheCMS',
    rating: 3,
    numReviews: 12,
    numComments: 13
  },
  {
    _id: '4',
    name: 'Apostrophe Assembly for Multisite Demo ',
    image: 'multisite',
    description:
      'Turn an Apostrophe experience into a powerful website builder platform and manage all of your websites with ease.',
    rating: 5,
    numReviews: 12,
    numComments: 3
  },
  {
    _id: '5',
    name: 'Apostrophe Form Builder Demo',
    image: 'form',
    description:
      'Allows editors to create their own forms for gathering and delivering user input.',
    rating: 3.5,
    numReviews: 10,
    numComments: 12
  },
  {
    _id: '6',
    name: 'Apostrophe Content Analytics',
    image: 'analytics',
    description:
      'Allows content in ApostropheCMS to be tracked and sorted by popularity. Popularity can be measured by pageviews, upvotes, social network votes, etc. Integrates with ShareCount API.',
    rating: 4,
    numReviews: 12,
    numComments: 52
  },
]

export default products
