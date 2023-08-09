// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    category: ['Web Development', 'BackEnd', 'FrontEnd'],
  },
  {
    title: 'React',
    category: ['Web Development', 'FrontEnd'],
  },
  {
    title: 'Amazon Web Services',
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    category: ['Databases'],
  },
  {
    title: 'PostgreSQL / SQLite3 / SQL',
    category: ['Databases'],
  },
  {
    title: 'Git',
    category: ['Tools'],
  },
  {
    title: 'Typescript',
    category: ['Web Development', 'BackEnd', 'FrontEnd'],
  },
  {
    title: 'HTML + SASS / SCSS / CSS',
    category: ['Web Development', 'BackEnd', 'FrontEnd'],
  },
  {
    title: 'Python',
    category: ['BackEnd'],
  },
  {
    title: 'C++',
    category: ['BackEnd'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
