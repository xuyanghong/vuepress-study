module.exports = {
    title: '', // 设置网站标题
    description: 'study FE',
    base: '/',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        sidebar: 'auto',
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        logo: '/assets/img/logo.jpeg',
        displayAllHeaders: true,
        nav: [{
                text: '前端开发学习',
                link: '/learning/'
            },
            {
                text: '前端开发工具',
                link: '/tools/'
            },
            {
                text: '附录：错误码',
                link: '/error'
            }
        ],
        sidebar: [{
                title: '学习', // 必要的
                path: '/learning/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                children: [
                    '/learning/',
                    '/learning/internet'
                ]
            },
            {
                title: '工具', 
                path: '/tools/', 
                children: [
                    '/tools/'
                ]
            },
            {
                title: 'error', // 必要的
                link: '/error'
            },

        ],



    }
}