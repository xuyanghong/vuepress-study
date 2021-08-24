module.exports = {
    title: '', // 设置网站标题
    description: 'study FE',
    base: '/',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        sidebar: 'auto',
        smoothScroll: true,
        logo: '/assets/img/logo3.jpeg',
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
                    '/learning/self-direct-learning',
                    '/learning/internet',
                    '/learning/browsers',
                    '/learning/dns',
                    '/learning/networks',
                    '/learning/general-front-end',
                    '/learning/html-css',
                    '/learning/seo',
                    '/learning/js',
                    '/learning/dom',
                    '/learning/api',
                    '/learning/node',
                    '/learning/module',
                    '/learning/package',
                    '/learning/version',
                    '/learning/optimizing',
                ]
            },
            {
                title: '笔记', 
                path: '/note/', 
                children: [
                    '/note/',
                    '/note/crossorigin',
                    '/note/model',
                ]
            },
            {
                title: '工具', 
                path: '/tools/', 
                children: [
                    '/tools/',
                    '/tools/dev-tools',
                ]
            },
            {
                title: 'error', // 必要的
                link: '/error'
            },

        ],



    }
}