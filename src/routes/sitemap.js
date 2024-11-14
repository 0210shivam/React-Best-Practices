import paths, { rootPaths } from './paths';

/**
 * Gets the sitemap structure, defining the items for navigation.
 * @param {string} currentPath - The current path to determine active state.
 * @returns {Array} An array of menu items and sub-menu items.
 */

const getSitemap = (currentPath) => [
   {
      id: 1,
      subheader: 'Dashboard',
      path: rootPaths.root,
      icon: 'ic:round-home',
      active: currentPath === rootPaths.root,
   },
   {
      id: 2,
      subheader: 'Projects',
      path: rootPaths.root,
      icon: 'ix:project',
   },
   {
      id: 3,
      subheader: 'Modules',
      path: rootPaths.root,
      icon: 'tdesign:module',
   },
   {
      id: 4,
      subheader: 'Pages',
      path: rootPaths.root,
      icon: 'iconoir:page',
   },
   {
      id: 5,
      subheader: 'Tasks',
      path: paths.tasks,
      icon: 'ic:sharp-task-alt',
      active: currentPath === paths.tasks,
   },
   {
      id: 6,
      subheader: 'Progress',
      path: rootPaths.root,
      icon: 'mdi:report-arc',
   },
   {
      id: 7,
      subheader: 'Settings',
      path: rootPaths.root,
      icon: 'ic:baseline-settings',
   },
];

export default getSitemap;
