// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  // {
  //   title: 'Análisis de nutrientes',
  //   path: '/dashboard/user',
  //   icon: icon('ic_bulb'),
  // },
  // {
  //   title: 'ComboPlusGooglemap',
  //   path: '/dashboard/ComboPlusGooglemap',
  //   icon: icon('text'),
  // },
  {
    title: 'Análisis de Nutrientes',
    path: '/dashboard/FormPage',  //all these paths must be same in route.js
    icon: icon('icon3'),
  },
  // {
  //   title: 'Modal1',
  //   path: '/dashboard/Modal1',
  //   icon: icon('icon5'),
  // },
  // {
  //   title: 'Modal2',
  //   path: '/dashboard/Modal2',
  //   icon: icon('icon6'),
  // },

  // {
  //   title: 'ProgamDeFertilizer2',
  //   path: '/dashboard/ProgamDeFertilizer2',
  //   icon: icon('icon7'),
  // },
  // {
  //   title: 'ProgamDeFertilizer3',
  //   path: '/dashboard/ProgamDeFertilizer3',
  //   icon: icon('ic_blog'),
  // },

  {
    title: 'Salir',
    path: '/login',
    icon: icon('ic_lock'),
  },
];

export default navConfig;
