import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'classes',
    title: "Classes",
    //translate: 'MENU.HOME',
    type: 'collapsible',
    icon: 'folder',
    children: [
      {
        id: 'add-classe',
        title: 'Ajouter une classe',
        //translate: 'MENU.MESANNONCES',
        type: 'item',
        icon: 'circle',
        url: '/home/addClasse'
      },
      {
        id: 'list-classe',
        title: 'Liste des classes',
        //translate: 'MENU.MESANNONCES',
        type: 'item',
        icon: 'circle',
        url: '/home/classes'
      },
  ]
  },
  {
    id: 'matiere',
    title: 'Matières',
    type: 'collapsible',
    icon: 'book-open',
    children: [
      {
        id: 'addSubject',
        title: 'Ajouter une matière',
        type: 'item',
        icon: 'circle',
        url: '/home/addSubject'
      },
      {
        id: 'subjectsList',
        title: 'Liste des matières',
        type: 'item',
        icon: 'circle',
        url: '/home/subjects'
      }
    ]
  },
  {
    id: 'professors',
    title: 'Enseignants',
    type: 'collapsible',
    icon: 'users',
    children: [
      {
        id: 'addprof',
        title: 'Inviter un enseignant',
        type: 'item',
        icon: 'circle',
        url: '/home/addProfessor'
      },
      {
        id: 'profList',
        title: 'Liste des enseignants',
        type: 'item',
        icon: 'circle',
        url: '/home/professors'
      },
    ]
  },
  {
    id: 'students',
    title: 'Etudiants',
    type: 'collapsible',
    icon: 'smile',
    children: [
      {
        id: 'addStudent',
        title: 'Inviter un étudiant',
        type: 'item',
        icon: 'circle',
        url: '/home/addStudent'
      },
      {
        id: 'studentsList',
        title: 'Liste des étudiants',
        type: 'item',
        icon: 'circle',
        url: '/home/students'
      },
    ]
  }
]
