
export const nav = {
    top: [
        {
            divider: true,
        },
        {
            name: 'Home',
            url: '/',
            icon: 'Home'
        },
        {
            name: 'Pair',
            icon: 'File',
            url: '/pair/'

        },

        {
            name: 'Admin',
            icon: 'File',
            url: '/user/'

        },

        /*
        {
            name: 'Mi Bandeja',
            icon: 'Inbox',
            children: [
                {
                    name: 'Asignados a mi',
                    url: '/apps/invoice',
                },
                {
                    name: 'Asignados a mi Area',
                    url: '/apps/feed',
                },
                {
                    name: 'Tabs',
                    url: '/apps/tabs',
                },
            ],
        },
        */

        {
            divider: true,
        },
    ],
    bottom: [
        {
            name: 'Account',
            url: '/account',
            icon: 'User',
            badge: {
                variant: 'success',
                text: '3',
            },
        },
    ],
};
