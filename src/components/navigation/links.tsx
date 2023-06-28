const links: Array<object> = [
    {
        path: '/',
        name: 'Overview',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 14H14V21H21V14Z" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 14H3V21H10V14Z" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 3H14V10H21V3Z" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 3H3V10H10V3Z" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
    },
    {
        path: '/balances',
        name: 'Balances',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12V8H6C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 4.9 4.9 4 6 4H18V8" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 6V18C4 19.1 4.9 20 6 20H20V16" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 12C17.4696 12 16.9609 12.2107 16.5858 12.5858C16.2107 12.9609 16 13.4696 16 14C16 15.1 16.9 16 18 16H22V12H18Z" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
    },
    {
        path: '/transaction',
        name: 'Transactions',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 11L21 7L17 3" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 7H9" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 21L3 17L7 13" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 17H3" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
    },
    {
        path: '/bills',
        name: 'Bills',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.50001 10.5H12C12.2652 10.5 12.5196 10.3947 12.7071 10.2071C12.8947 10.0196 13 9.76522 13 9.50001C13 9.23479 12.8947 8.98044 12.7071 8.7929C12.5196 8.60536 12.2652 8.50001 12 8.50001H11V8.00001C11 7.73479 10.8947 7.48044 10.7071 7.2929C10.5196 7.10536 10.2652 7.00001 10 7.00001C9.73479 7.00001 9.48044 7.10536 9.2929 7.2929C9.10537 7.48044 9.00001 7.73479 9.00001 8.00001V8.55001C8.39243 8.67338 7.85237 9.01811 7.48466 9.51727C7.11696 10.0164 6.94785 10.6344 7.01015 11.2513C7.07246 11.8681 7.36174 12.4398 7.82184 12.8553C8.28194 13.2709 8.88003 13.5006 9.50001 13.5H10.5C10.6326 13.5 10.7598 13.5527 10.8536 13.6465C10.9473 13.7402 11 13.8674 11 14C11 14.1326 10.9473 14.2598 10.8536 14.3536C10.7598 14.4473 10.6326 14.5 10.5 14.5H8.00001C7.73479 14.5 7.48044 14.6054 7.2929 14.7929C7.10537 14.9804 7.00001 15.2348 7.00001 15.5C7.00001 15.7652 7.10537 16.0196 7.2929 16.2071C7.48044 16.3947 7.73479 16.5 8.00001 16.5H9.00001V17C9.00001 17.2652 9.10537 17.5196 9.2929 17.7071C9.48044 17.8947 9.73479 18 10 18C10.2652 18 10.5196 17.8947 10.7071 17.7071C10.8947 17.5196 11 17.2652 11 17V16.45C11.6076 16.3266 12.1476 15.9819 12.5154 15.4827C12.8831 14.9836 13.0522 14.3656 12.9899 13.7488C12.9276 13.1319 12.6383 12.5602 12.1782 12.1447C11.7181 11.7291 11.12 11.4994 10.5 11.5H9.50001C9.3674 11.5 9.24022 11.4473 9.14645 11.3536C9.05269 11.2598 9.00001 11.1326 9.00001 11C9.00001 10.8674 9.05269 10.7402 9.14645 10.6465C9.24022 10.5527 9.3674 10.5 9.50001 10.5ZM21 12H18V3.00001C18.0007 2.8238 17.9548 2.65053 17.867 2.49775C17.7792 2.34498 17.6526 2.21811 17.5 2.13001C17.348 2.04224 17.1755 1.99603 17 1.99603C16.8245 1.99603 16.652 2.04224 16.5 2.13001L13.5 3.85001L10.5 2.13001C10.348 2.04224 10.1755 1.99603 10 1.99603C9.82447 1.99603 9.65203 2.04224 9.50001 2.13001L6.50001 3.85001L3.50001 2.13001C3.34799 2.04224 3.17554 1.99603 3.00001 1.99603C2.82447 1.99603 2.65203 2.04224 2.50001 2.13001C2.3474 2.21811 2.22079 2.34498 2.13299 2.49775C2.04518 2.65053 1.99931 2.8238 2.00001 3.00001V19C2.00001 19.7957 2.31608 20.5587 2.87869 21.1213C3.4413 21.6839 4.20436 22 5.00001 22H19C19.7957 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7957 22 19V13C22 12.7348 21.8947 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12ZM5.00001 20C4.73479 20 4.48044 19.8947 4.2929 19.7071C4.10536 19.5196 4.00001 19.2652 4.00001 19V4.73001L6.00001 5.87001C6.15435 5.95062 6.32589 5.99272 6.50001 5.99272C6.67413 5.99272 6.84567 5.95062 7.00001 5.87001L10 4.15001L13 5.87001C13.1543 5.95062 13.3259 5.99272 13.5 5.99272C13.6741 5.99272 13.8457 5.95062 14 5.87001L16 4.73001V19C16.0027 19.3412 16.0636 19.6793 16.18 20H5.00001ZM20 19C20 19.2652 19.8947 19.5196 19.7071 19.7071C19.5196 19.8947 19.2652 20 19 20C18.7348 20 18.4804 19.8947 18.2929 19.7071C18.1054 19.5196 18 19.2652 18 19V14H20V19Z" fill="white" fillOpacity="0.7" />
        </svg>
        ,
    },
    {
        path: '/expenses',
        name: 'Expenses',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 17H21.5M21.5 17L19 19.5M21.5 17L19 14.5" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.5 13V5C21.5 4.60218 21.342 4.22064 21.0607 3.93934C20.7794 3.65804 20.3978 3.5 20 3.5H4C3.60218 3.5 3.22064 3.65804 2.93934 3.93934C2.65804 4.22064 2.5 4.60218 2.5 5V19C2.5 19.3978 2.65804 19.7794 2.93934 20.0607C3.22064 20.342 3.60218 20.5 4 20.5H14.235" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 7V17" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.5 8.5H8.75C8.28587 8.5 7.84075 8.68437 7.51256 9.01256C7.18437 9.34075 7 9.78587 7 10.25C7 10.7141 7.18437 11.1592 7.51256 11.4874C7.84075 11.8156 8.28587 12 8.75 12H11.25C11.7141 12 12.1592 12.1844 12.4874 12.5126C12.8156 12.8408 13 13.2859 13 13.75C13 14.2141 12.8156 14.6592 12.4874 14.9874C12.1592 15.3156 11.7141 15.5 11.25 15.5H7" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
    },
    {
        path: '/goals',
        name: 'Goals',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 12H18" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 12H2" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 6V2" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 22V18" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
    },
    {
        path: '/settings',
        name: 'Settings',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9999 14.3466C13.2959 14.3466 14.3465 13.296 14.3465 12C14.3465 10.704 13.2959 9.65341 11.9999 9.65341C10.7039 9.65341 9.65332 10.704 9.65332 12C9.65332 13.296 10.7039 14.3466 11.9999 14.3466Z" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.0545 14.4545C17.9456 14.7013 17.9131 14.9751 17.9613 15.2405C18.0094 15.5059 18.1359 15.7508 18.3245 15.9436L18.3736 15.9927C18.5258 16.1447 18.6465 16.3252 18.7288 16.5238C18.8112 16.7225 18.8536 16.9354 18.8536 17.1505C18.8536 17.3655 18.8112 17.5784 18.7288 17.7771C18.6465 17.9757 18.5258 18.1562 18.3736 18.3082C18.2217 18.4603 18.0412 18.581 17.8425 18.6634C17.6439 18.7457 17.431 18.7881 17.2159 18.7881C17.0009 18.7881 16.7879 18.7457 16.5893 18.6634C16.3906 18.581 16.2102 18.4603 16.0582 18.3082L16.0091 18.2591C15.8163 18.0705 15.5714 17.9439 15.3059 17.8958C15.0405 17.8477 14.7668 17.8802 14.52 17.9891C14.278 18.0928 14.0716 18.265 13.9263 18.4845C13.7809 18.704 13.7029 18.9613 13.7018 19.2245V19.3636C13.7018 19.7976 13.5294 20.2138 13.2225 20.5207C12.9157 20.8276 12.4994 21 12.0655 21C11.6315 21 11.2152 20.8276 10.9084 20.5207C10.6015 20.2138 10.4291 19.7976 10.4291 19.3636V19.29C10.4228 19.0192 10.3351 18.7565 10.1775 18.5362C10.0199 18.3159 9.79969 18.1481 9.54545 18.0545C9.29868 17.9456 9.02493 17.9131 8.75952 17.9613C8.4941 18.0094 8.24919 18.1359 8.05636 18.3245L8.00727 18.3736C7.8553 18.5258 7.67483 18.6465 7.47617 18.7288C7.27752 18.8112 7.06459 18.8536 6.84955 18.8536C6.6345 18.8536 6.42157 18.8112 6.22292 18.7288C6.02426 18.6465 5.84379 18.5258 5.69182 18.3736C5.53967 18.2217 5.41898 18.0412 5.33663 17.8425C5.25428 17.6439 5.21189 17.431 5.21189 17.2159C5.21189 17.0009 5.25428 16.7879 5.33663 16.5893C5.41898 16.3906 5.53967 16.2102 5.69182 16.0582L5.74091 16.0091C5.92953 15.8163 6.05606 15.5714 6.10419 15.3059C6.15231 15.0405 6.11982 14.7668 6.01091 14.52C5.90719 14.278 5.73498 14.0716 5.51547 13.9263C5.29596 13.7809 5.03873 13.7029 4.77545 13.7018H4.63636C4.20237 13.7018 3.78616 13.5294 3.47928 13.2225C3.1724 12.9157 3 12.4994 3 12.0655C3 11.6315 3.1724 11.2152 3.47928 10.9084C3.78616 10.6015 4.20237 10.4291 4.63636 10.4291H4.71C4.98081 10.4228 5.24346 10.3351 5.46379 10.1775C5.68412 10.0199 5.85195 9.79969 5.94545 9.54545C6.05437 9.29868 6.08686 9.02493 6.03873 8.75952C5.99061 8.4941 5.86408 8.24919 5.67545 8.05636L5.62636 8.00727C5.47422 7.8553 5.35352 7.67483 5.27118 7.47617C5.18883 7.27752 5.14644 7.06459 5.14644 6.84955C5.14644 6.6345 5.18883 6.42157 5.27118 6.22292C5.35352 6.02426 5.47422 5.84379 5.62636 5.69182C5.77834 5.53967 5.95881 5.41898 6.15746 5.33663C6.35611 5.25428 6.56905 5.21189 6.78409 5.21189C6.99913 5.21189 7.21207 5.25428 7.41072 5.33663C7.60937 5.41898 7.78984 5.53967 7.94182 5.69182L7.99091 5.74091C8.18374 5.92953 8.42865 6.05606 8.69406 6.10419C8.95948 6.15231 9.23322 6.11982 9.48 6.01091H9.54545C9.78745 5.90719 9.99383 5.73498 10.1392 5.51547C10.2846 5.29596 10.3626 5.03873 10.3636 4.77545V4.63636C10.3636 4.20237 10.536 3.78616 10.8429 3.47928C11.1498 3.1724 11.566 3 12 3C12.434 3 12.8502 3.1724 13.1571 3.47928C13.464 3.78616 13.6364 4.20237 13.6364 4.63636V4.71C13.6374 4.97328 13.7154 5.23051 13.8608 5.45002C14.0062 5.66953 14.2126 5.84174 14.4545 5.94545C14.7013 6.05437 14.9751 6.08686 15.2405 6.03873C15.5059 5.99061 15.7508 5.86408 15.9436 5.67545L15.9927 5.62636C16.1447 5.47422 16.3252 5.35352 16.5238 5.27118C16.7225 5.18883 16.9354 5.14644 17.1505 5.14644C17.3655 5.14644 17.5784 5.18883 17.7771 5.27118C17.9757 5.35352 18.1562 5.47422 18.3082 5.62636C18.4603 5.77834 18.581 5.95881 18.6634 6.15746C18.7457 6.35611 18.7881 6.56905 18.7881 6.78409C18.7881 6.99913 18.7457 7.21207 18.6634 7.41072C18.581 7.60937 18.4603 7.78984 18.3082 7.94182L18.2591 7.99091C18.0705 8.18374 17.9439 8.42865 17.8958 8.69406C17.8477 8.95948 17.8802 9.23322 17.9891 9.48V9.54545C18.0928 9.78745 18.265 9.99383 18.4845 10.1392C18.704 10.2846 18.9613 10.3626 19.2245 10.3636H19.3636C19.7976 10.3636 20.2138 10.536 20.5207 10.8429C20.8276 11.1498 21 11.566 21 12C21 12.434 20.8276 12.8502 20.5207 13.1571C20.2138 13.464 19.7976 13.6364 19.3636 13.6364H19.29C19.0267 13.6374 18.7695 13.7154 18.55 13.8608C18.3305 14.0062 18.1583 14.2126 18.0545 14.4545V14.4545Z" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        ,
    },
]

export default links;