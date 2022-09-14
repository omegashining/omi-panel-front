import { history } from "../index";

export default async function getMenuData() {
  return [
    {
      title: 'Expediente Digital',
      key: 'digital-file',
      icon: 'fe fe-list',
      roles: ['user'],
      children: [
        {
          title: 'Pedidos',
          key: 'orders',
          url: '/digital-file/orders',
        },
        {
          title: 'Tu médico',
          key: 'medical',
          url: '/digital-file/medical',
        },
        {
          title: 'Mis datos',
          key: 'info',
          url: '/digital-file/info',
        },
      ]
    },
    {
      title: 'Cerrar sesión',
      key: 'logout',
      icon: 'fe fe-log-out',
      action: (event, dispatch) => {
        event.preventDefault();
        dispatch({ type: 'user/LOGOUT' });
        history.push('/auth/login');
      }
    }
  ]
}
