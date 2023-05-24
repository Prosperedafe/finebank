import overview from './icons/Overview.svg';
import balance from './icons/balances.svg';
import transaction from './icons/transactions.svg';
import bills from './icons/bills.svg';
import expense from './icons/Expencces.svg';
import goals from './icons/Goal.svg';
import settings from './icons/Settings.svg';

const links: Array<object> = [
    {
        path: '/overview',
        name: 'Overview',
        icon: overview,
    },
    {
        path: '/balances',
        name: 'Balances',
        icon: balance,
    },
    {
        path: '/transactions',
        name: 'Transactions',
        icon: transaction,
    },
    {
        path: '/bills',
        name: 'Bills',
        icon: bills,
    },
    {
        path: '/expenses',
        name: 'Expenses',
        icon: expense,
    },
    {
        path: '/goals',
        name: 'Goals',
        icon: goals,
    },
    {
        path: '/settings',
        name: 'Settimgs',
        icon: settings,
    },
]

export default links;