export const MenuItems = [
  {key: 'ABOUT', name: 'About'},
  {key: 'PROJECTS', name: 'Projects'},
]

export const AboutItems = [
  {key: 'BIO', name: 'Bio', icon: 'user'},
  {key: 'RESUME', name: 'Resume', icon: 'solution'},
  {key: 'CUBE', name: 'Cube', icon: 'codepen'},

]

export const ProjectItems = [
  {
    key: 'WEBAPPS', 
    name: 'Web Apps', 
    icon: 'laptop',
    submenu: [
      { key: 'TODOIST', name: 'Todoist: Check List'},
      { key: 'BUNKER', name: 'Bunker: Hotel Booking'},
      // { key: 'PORT69', name: 'Port69 Portal'},
    ]
  },
  {
    key: '2D/3D', 
    name: '2D/3D', 
    icon: 'picture',
    submenu: [
      { key: 'PUMPKINCAT', name: 'Pumpkin Cat & the Skulls'},
      { key: 'OCTREE', name: 'Raytracing in 3D using an Octree'},
      { key: 'UNBARRELBLE', name: 'Unbarrelble: A 3D Unity Game'}
    ]
  },
]