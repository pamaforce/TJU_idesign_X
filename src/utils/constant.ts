import require from '@/utils/require';

export const DIVIDER_WIDTH: number = 620;

export interface Exhibition {
    id: number;
    name: string;
    desc: string;
    desc_en: string;
    status: number;
    formula: string;
    formula_active: string;
    formula_default: string;
    formula_mobile: string;
    formula_active_mobile: string;
    color: string;
    background: string;
    background_active: string;
    background_default: string;
    icon: string;
    icon_mobile: string;
    icon_active_mobile: string;
    brief_mobile: string;
    intro_mobile: string;
    iconAnimationPath: string;
    iconFrames: number;
    currentFrame: number;
    animationFrameId: number | null;
}

// 第一项和最后一项是重复的，用于循环滚动
export const exhibitionList: Exhibition[] = [
    {
        id: 100,
        name: '十年',
        desc: '我们对世界的热爱与探索，带领我们继续求解无限的未来。',
        desc_en: 'Our love and exploration of the world leads us to continue to solve the infinite future.',
        status: 0,
        icon: require('image/logo_7.svg'),
        icon_mobile: require('image/mobile/icon_7_1.svg'),
        icon_active_mobile: require('image/mobile/icon_7_2.svg'),
        formula: require('image/formula_7.svg'),
        formula_active: require('image/formula_7_1.svg'),
        formula_default: require('image/formula_7_2.svg'),
        formula_mobile: require('image/mobile/formula_7.svg'),
        formula_active_mobile: require('image/mobile/formula_7_1.svg'),
        brief_mobile: require('image/mobile/brief_7.svg'),
        intro_mobile: require('image/mobile/intro_7.svg'),
        color: '#EF5B5B',
        background: 'linear-gradient(180deg, #F3E7E7 0%, #FFFFFF 100%)',
        background_active: 'linear-gradient(0deg, #EC9F8F, #EC9F8F), linear-gradient(180deg, #F3E7E7 0%, #FFFFFF 100%)',
        background_default: '#F3E7E7',
        iconAnimationPath: 'image/logo_7',
        iconFrames: 11,
        currentFrame: 0,
        animationFrameId: null
    },
    {
        id: 66,
        name: '探渊',
        desc: '挖掘设计的深层价值，以科技引路在设计的海域不断向深处探索。',
        desc_en: 'Mining the deep value of design and exploring further into the realm of design with technology as the guide.',
        status: 1,
        icon: require('image/logo_1.svg'),
        icon_mobile: require('image/mobile/icon_1_1.svg'),
        icon_active_mobile: require('image/mobile/icon_1_2.svg'),
        formula: require('image/formula_1.svg'),
        formula_active: require('image/formula_1_1.svg'),
        formula_default: require('image/formula_1_2.svg'),
        formula_mobile: require('image/mobile/formula_1.svg'),
        formula_active_mobile: require('image/mobile/formula_1_1.svg'),
        brief_mobile: require('image/mobile/brief_1.svg'),
        intro_mobile: require('image/mobile/intro_1.svg'),
        color: '#8F57A0',
        background: 'linear-gradient(180deg, #E6E0E0 0%, #FFFFFF 100%)',
        background_active: '#AF98B4',
        background_default: '#E6E0E0',
        iconAnimationPath: 'image/logo_1',
        iconFrames: 16,
        currentFrame: 0,
        animationFrameId: null
    },
    {
        id: 67,
        name: '拓界',
        desc: '拓宽界限，让设计的温暖触及每个角落。',
        desc_en: 'Expanding boundaries and wide-spreading the warmth of design.',
        status: 1,
        icon: require('image/logo_2.svg'),
        icon_mobile: require('image/mobile/icon_2_1.svg'),
        icon_active_mobile: require('image/mobile/icon_2_2.svg'),
        formula: require('image/formula_2.svg'),
        formula_active: require('image/formula_2_1.svg'),
        formula_default: require('image/formula_2_2.svg'),
        formula_mobile: require('image/mobile/formula_2.svg'),
        formula_active_mobile: require('image/mobile/formula_2_1.svg'),
        brief_mobile: require('image/mobile/brief_2.svg'),
        intro_mobile: require('image/mobile/intro_2.svg'),
        color: '#93C984',
        background: 'linear-gradient(180deg, #E3E6DF 0%, #FFFFFF 100%), #E3E6DF',
        background_active: 'linear-gradient(0deg, #99C39F, #99C39F), linear-gradient(180deg, #E3E6DF 0%, #FFFFFF 100%), #E3E6DF',
        background_default: '#E3E6DF',
        iconAnimationPath: 'image/logo_2',
        iconFrames: 15,
        currentFrame: 0,
        animationFrameId: null
    },
    {
        id: 68,
        name: '视趣',
        desc: '设计的视觉盛宴， 如诗如画，跃然眼前。',
        desc_en: 'Serving a feast for the eyes, exhaling a picturesque design.',
        status: 1,
        icon: require('image/logo_3.svg'),
        icon_mobile: require('image/mobile/icon_3_1.svg'),
        icon_active_mobile: require('image/mobile/icon_3_2.svg'),
        formula: require('image/formula_3.svg'),
        formula_active: require('image/formula_3_1.svg'),
        formula_default: require('image/formula_3_2.svg'),
        formula_mobile: require('image/mobile/formula_3.svg'),
        formula_active_mobile: require('image/mobile/formula_3_1.svg'),
        brief_mobile: require('image/mobile/brief_3.svg'),
        intro_mobile: require('image/mobile/intro_3.svg'),
        color: '#F7874A',
        background: 'linear-gradient(180deg, rgba(244, 233, 215, 0) 0%, #FFFFFF 100%), #F4E9D7',
        background_active: 'linear-gradient(0deg, #E09E68, #E09E68), linear-gradient(180deg, rgba(244, 233, 215, 0) 0%, #FFFFFF 100%), #F4E9D7',
        background_default: '#F4E9D7',
        iconAnimationPath: 'image/logo_3',
        iconFrames: 9,
        currentFrame: 0,
        animationFrameId: null
    },
    {
        id: 69,
        name: '融彻',
        desc: '涓涓细流，在每一处设计细节中融入深沉的情感。',
        desc_en: 'Merging exuberant emotion into every fraction of design.',
        status: 1,
        icon: require('image/logo_4.svg'),
        icon_mobile: require('image/mobile/icon_4_1.svg'),
        icon_active_mobile: require('image/mobile/icon_4_2.svg'),
        formula: require('image/formula_4.svg'),
        formula_active: require('image/formula_4_1.svg'),
        formula_default: require('image/formula_4_2.svg'),
        formula_mobile: require('image/mobile/formula_4.svg'),
        formula_active_mobile: require('image/mobile/formula_4_1.svg'),
        brief_mobile: require('image/mobile/brief_4.svg'),
        intro_mobile: require('image/mobile/intro_4.svg'),
        color: '#F05883',
        background: 'linear-gradient(180deg, #F5E7ED 0%, #FFFFFF 100%), #F5E7ED',
        background_active: 'linear-gradient(0deg, #DE81AB, #DE81AB), linear-gradient(180deg, #F5E7ED 0%, #FFFFFF 100%), #F5E7ED',
        background_default: '#F5E7ED',
        iconAnimationPath: 'image/logo_4',
        iconFrames: 9,
        currentFrame: 0,
        animationFrameId: null
    },
    {
        id: 70,
        name: '意绪',
        desc: '设计师心海的思绪，引领观者进入设计师的思维世界。',
        desc_en: 'Welcome to our mind palace.',
        status: 1,
        icon: require('image/logo_5.svg'),
        icon_mobile: require('image/mobile/icon_5_1.svg'),
        icon_active_mobile: require('image/mobile/icon_5_2.svg'),
        formula: require('image/formula_5.svg'),
        formula_active: require('image/formula_5_1.svg'),
        formula_default: require('image/formula_5_2.svg'),
        formula_mobile: require('image/mobile/formula_5.svg'),
        formula_active_mobile: require('image/mobile/formula_5_1.svg'),
        brief_mobile: require('image/mobile/brief_5.svg'),
        intro_mobile: require('image/mobile/intro_5.svg'),
        color: '#FCC143',
        background: 'linear-gradient(180deg, #F7F3E7 0%, #FFFFFF 100%)',
        background_active: 'linear-gradient(0deg, #D8B994, #D8B994), linear-gradient(180deg, #F7F3E7 0%, #FFFFFF 100%)',
        background_default: '#F7F3E7',
        iconAnimationPath: 'image/logo_5',
        iconFrames: 10,
        currentFrame: 0,
        animationFrameId: null
    },
    {
        id: 71,
        name: '抟塑',
        desc: '设计对物质世界的精妙雕琢，将无形的创意孕育成有形的果实。',
        desc_en: 'Shaping materials, nurturing ideas, harvesting designs.',
        status: 1,
        icon: require('image/logo_6.svg'),
        icon_mobile: require('image/mobile/icon_6_1.svg'),
        icon_active_mobile: require('image/mobile/icon_6_2.svg'),
        formula: require('image/formula_6.svg'),
        formula_active: require('image/formula_6_1.svg'),
        formula_default: require('image/formula_6_2.svg'),
        formula_mobile: require('image/mobile/formula_6.svg'),
        formula_active_mobile: require('image/mobile/formula_6_1.svg'),
        brief_mobile: require('image/mobile/brief_6.svg'),
        intro_mobile: require('image/mobile/intro_6.svg'),
        color: '#4F90CA',
        background: 'linear-gradient(180deg, #DFEDED 0%, #FFFFFF 100%)',
        background_active: 'linear-gradient(0deg, #89B0C9, #89B0C9), linear-gradient(180deg, #DFEDED 0%, #FFFFFF 100%)',
        background_default: '#DFEDED',
        iconAnimationPath: 'image/logo_6',
        iconFrames: 10,
        currentFrame: 0,
        animationFrameId: null
    },
    {
        id: 100,
        name: '十年',
        desc: '我们对世界的热爱与探索，带领我们继续求解无限的未来。',
        desc_en: 'Our love and exploration of the world leads us to continue to solve the infinite future.',
        status: 1,
        icon: require('image/logo_7.svg'),
        icon_mobile: require('image/mobile/icon_7_1.svg'),
        icon_active_mobile: require('image/mobile/icon_7_2.svg'),
        formula: require('image/formula_7.svg'),
        formula_active: require('image/formula_7_1.svg'),
        formula_default: require('image/formula_7_2.svg'),
        formula_mobile: require('image/mobile/formula_7.svg'),
        formula_active_mobile: require('image/mobile/formula_7_1.svg'),
        brief_mobile: require('image/mobile/brief_7.svg'),
        intro_mobile: require('image/mobile/intro_7.svg'),
        color: '#EF5B5B',
        background: 'linear-gradient(180deg, #F3E7E7 0%, #FFFFFF 100%)',
        background_active: 'linear-gradient(0deg, #EC9F8F, #EC9F8F), linear-gradient(180deg, #F3E7E7 0%, #FFFFFF 100%)',
        background_default: '#F3E7E7',
        iconAnimationPath: 'image/logo_7',
        iconFrames: 11,
        currentFrame: 0,
        animationFrameId: null
    },
    {
        id: 66,
        name: '探渊',
        desc: '挖掘设计的深层价值，以科技引路在设计的海域不断向深处探索。',
        desc_en: 'Mining the deep value of design and exploring further into the realm of design with technology as the guide.',
        status: 0,
        icon: require('image/logo_1.svg'),
        icon_mobile: require('image/mobile/icon_1_1.svg'),
        icon_active_mobile: require('image/mobile/icon_1_2.svg'),
        formula: require('image/formula_1.svg'),
        formula_active: require('image/formula_1_1.svg'),
        formula_default: require('image/formula_1_2.svg'),
        formula_mobile: require('image/mobile/formula_1.svg'),
        formula_active_mobile: require('image/mobile/formula_1_1.svg'),
        brief_mobile: require('image/mobile/brief_1.svg'),
        intro_mobile: require('image/mobile/intro_1.svg'),
        color: '#8F57A0',
        background: 'linear-gradient(180deg, #E6E0E0 0%, #FFFFFF 100%)',
        background_active: '#AF98B4',
        background_default: '#E6E0E0',
        iconAnimationPath: 'image/logo_1',
        iconFrames: 9,
        currentFrame: 0,
        animationFrameId: null
    }
];

export const portalUrl = 'http://idesign.tju.edu.cn/upload/'

export const imgList = [
    require('image/x/2015/1.jpg'),
    require('image/x/2015/2.jpg'),
    require('image/x/2015/3.jpg'),
    require('image/x/2015/4.jpg'),
    require('image/x/2016/1.jpg'),
    require('image/x/2016/2.jpg'),
    require('image/x/2016/3.jpg'),
    require('image/x/2016/4.jpg'),
    require('image/x/2016/5.jpg'),
    require('image/x/2016/6.jpg'),
    require('image/x/2017/1.jpg'),
    require('image/x/2017/2.jpg'),
    require('image/x/2017/3.jpg'),
    require('image/x/2017/4.jpg'),
    require('image/x/2017/5.jpg'),
    require('image/x/2017/6.jpg'),
    require('image/x/2017/7.jpg'),
    require('image/x/2017/8.jpg'),
    require('image/x/2018/1.jpg'),
    require('image/x/2018/2.jpg'),
    require('image/x/2018/3.jpg'),
    require('image/x/2018/4.jpg'),
    require('image/x/2018/5.jpg'),
    require('image/x/2018/6.jpg'),
    require('image/x/2018/7.jpg'),
    require('image/x/2018/8.jpg'),
    require('image/x/2019/1.jpg'),
    require('image/x/2019/10.jpg'),
    require('image/x/2019/11.jpg'),
    require('image/x/2019/2.jpg'),
    require('image/x/2019/3.jpg'),
    require('image/x/2019/4.jpg'),
    require('image/x/2019/5.jpg'),
    require('image/x/2019/6.jpg'),
    require('image/x/2019/7.jpg'),
    require('image/x/2019/8.jpg'),
    require('image/x/2019/9.jpg'),
    require('image/x/2020/1.jpg'),
    require('image/x/2020/10.jpg'),
    require('image/x/2020/2.jpg'),
    require('image/x/2020/3.jpg'),
    require('image/x/2020/4.jpg'),
    require('image/x/2020/5.jpg'),
    require('image/x/2020/6.jpg'),
    require('image/x/2020/7.jpg'),
    require('image/x/2020/8.jpg'),
    require('image/x/2020/9.jpg'),
    require('image/x/2021/1.jpg'),
    require('image/x/2021/2.jpg'),
    require('image/x/2021/3.jpg'),
    require('image/x/2021/4.jpg'),
    require('image/x/2021/5.jpg'),
    require('image/x/2021/6.jpg'),
    require('image/x/2022/1.jpg'),
    require('image/x/2022/2.jpg'),
    require('image/x/2022/3.jpg'),
    require('image/x/2022/4.jpg'),
    require('image/x/2022/5.jpg'),
    require('image/x/2022/6.jpg'),
    require('image/x/2022/7.jpg'),
    require('image/x/2022/8.jpg'),
    require('image/x/2022/9.jpg'),
    require('image/x/2023/1.jpg'),
    require('image/x/2023/2.jpg'),
    require('image/x/2023/3.jpg'),
    require('image/x/2023/4.jpg'),
    require('image/x/2023/5.jpg'),
    require('image/x/2023/6.jpg'),
    require('image/x/2023/7.jpg')
]
export const videoList = [
    'http://idesign.tju.edu.cn/videos/11.mp4',
    'http://idesign.tju.edu.cn/videos/10.mp4',
    'http://idesign.tju.edu.cn/videos/9.mp4',
    'http://idesign.tju.edu.cn/videos/8.mp4',
    'http://idesign.tju.edu.cn/videos/7.mp4',
    'http://idesign.tju.edu.cn/videos/6.mp4',
    'http://idesign.tju.edu.cn/videos/5.mp4',
    'http://idesign.tju.edu.cn/videos/4.mp4',
    'http://idesign.tju.edu.cn/videos/3.mp4',
    'http://idesign.tju.edu.cn/videos/2.mp4',
    'http://idesign.tju.edu.cn/videos/1.mp4',
    'http://idesign.tju.edu.cn/videos/0.mp4'
]
export const coverList = [
    require('image/cover/11.jpg'),
    require('image/cover/10.png'),
    require('image/cover/9.png'),
    require('image/cover/8.png'),
    require('image/cover/7.png'),
    require('image/cover/6.png'),
    require('image/cover/5.png'),
    require('image/cover/4.png'),
    require('image/cover/3.png'),
    require('image/cover/2.png'),
    require('image/cover/1.png'),
    require('image/cover/0.png')
]

export const sponsorList = [
    {
        group: '指导教师',
        percent: 0.008,
        left: 10.875,
        top: 23.1875,
        mobile: {
            percent: 0.0091,
            left: 2.5,
            top: 8.1875
        },
        member: [
            {
                name: '边放',
                role: '展览理论知识讲授、设计指导',
                avatar: require('image/sponsor/1.jpeg'),
                percent: 0.023,
                left: 19.0625,
                top: 0,
                mobile: {
                    percent: 0.02338,
                    left: 5.75,
                    top: 0
                }
            },
            {
                name: '杨君宇',
                role: '年展视觉设计指导',
                avatar: require('image/sponsor/2.jpeg'),
                percent: 0.035,
                left: 37.8125,
                top: 0,
                mobile: {
                    percent: 0.038,
                    left: 13.625,
                    top: 0
                }
            },
            {
                name: '张赫晨',
                role: '年展策划协调、设计指导',
                avatar: require('image/sponsor/3.jpeg'),
                percent: 0.048,
                left: 56.5625,
                top: 0,
                mobile: {
                    percent: 0.0674,
                    left: 13.5,
                    top: 11.125
                }
            },
            {
                name: '李擎炜',
                role: '年展实验指导、文宣指导',
                avatar: require('image/sponsor/4.jpeg'),
                percent: 0.060,
                left: 75.3125,
                top: 0,
                mobile: {
                    percent: 0.08235,
                    left: 5.75,
                    top: 11.125
                }
            }
        ]
    },
    {
        group: '总负责',
        percent: 0.094,
        left: 91.375,
        top: 45.125,
        mobile: {
            percent: 0.1170,
            left: 7.4375,
            top: 30.3125
        },
        member: [
            {
                name: '江长林',
                role: '上传下达，协调工作，参与进度',
                avatar: require('image/sponsor/5.jpeg'),
                percent: 0.121,
                left: -36.9375,
                top: 0,
                mobile: {
                    percent: 0.13418,
                    left: 7.125,
                    top: 0
                }
            }
        ]
    },{
        group: '策展A组',
        percent: 0.154,
        left: 41.6875,
        top: 67,
        mobile: {
            percent: 0.1655,
            left: 17.1875,
            top: 41.375
        },
        member: [
            {
                name: '贺杨晨（组长）',
                role: '展览设计，统筹，展场规划,展场建模',
                avatar: require('image/sponsor/6.jpeg'),
                percent: 0.1712,
                left: 22,
                top: 0,
                mobile: {
                    percent: 0.17663,
                    left: -7.0625,
                    top: 0
                }
            },
            {
                name: '焦慧婷',
                role: '展览设计，财务负责',
                avatar: require('image/sponsor/7.jpeg'),
                percent: 0.208,
                left: 27.6875,
                top: 21.1875,
                mobile: {
                    percent: 0.1903,
                    left: -14.875,
                    top: 0
                }
            },
            {
                name: '王佳一',
                role: '展览设计，总外联，物料清点，主视觉设计',
                avatar: require('image/sponsor/8.jpeg'),
                percent: 0.2205,
                left: 8.9375,
                top: 21.1875,
                mobile: {
                    percent: 0.22591,
                    left: -15.0625,
                    top: 11.0625
                }
            },
            {
                name: '曾楚懿',
                role: '展览设计，环境艺术外联，设计组对接',
                avatar: require('image/sponsor/9.jpeg'),
                percent: 0.2325,
                left: -9.8125,
                top: 21.1875,
                mobile: {
                    percent: 0.2366,
                    left: -8.125,
                    top: 11.0625
                }
            },
            {
                name: '张宇星',
                role: '展览设计，物料调研，沙盘负责，展品排布',
                avatar: require('image/sponsor/10.jpeg'),
                percent: 0.2444,
                left: -28.5625,
                top: 21.1875,
                mobile: {
                    percent: 0.24992,
                    left: -1.0625,
                    top: 11.0625
                }
            }
        ]
    },{
        group: '策展B组',
        percent: 0.2708,
        left: 11.375,
        top: 111.875,
        mobile: {
            percent: 0.27981,
            left: 17.1875,
            top: 63.5
        },
        member: [
            {
                name: '余春阳（组长）',
                role: '框架搭建，PC端UI，协调工作',
                avatar: require('image/sponsor/11.jpeg'),
                percent: 0.2921,
                left: 28.375,
                top: 0,
                mobile: {
                    percent: 0.2903,
                    left: -6.75,
                    top: 0
                }
            },
            {
                name: '刘子炜',
                role: '框架搭建，移动端UI',
                avatar: require('image/sponsor/12.jpeg'),
                percent: 0.3043,
                left: 47.125,
                top: 0,
                mobile: {
                    percent: 0.3046,
                    left: -15,
                    top: 0
                }
            },
            {
                name: '蒋婵娟',
                role: '框架搭建，动效设计',
                avatar: require('image/sponsor/13.jpeg'),
                percent: 0.3167,
                left: 65.875,
                top: 0,
                mobile: {
                    percent: 0.34626,
                    left: -11,
                    top: 11.0625
                }
            },
            {
                name: '刘宏伟',
                role: 'PC端、移动端网站前端开发',
                avatar: require('image/sponsor/14.jpg'),
                percent: 0.3719,
                left: 61.25,
                top: 22.5,
                mobile: {
                    percent: 0.38791,
                    left: -5.4375,
                    top: 22.125
                }
            },
            {
                name: '李杰',
                role: '特邀教师，网站后端开发及部署',
                avatar: require('image/sponsor/15.jpeg'),
                percent: 0.3841,
                left: 42.5,
                top: 22.5,
                mobile: {
                    percent: 0.40318,
                    left: -13.8125,
                    top: 22.125
                }
            }
        ]
    },{
        group: '策展C组',
        percent: 0.4259,
        left: 29.875,
        top: 159.6875,
        mobile: {
            percent: 0.4378,
            left: 2.25,
            top: 96.6875
        },
        member: [
            {
                name: '陈雪懿（组长）',
                role: '收集展品资料',
                avatar: require('image/sponsor/16.jpeg'),
                percent: 0.4455,
                left: 28.8125,
                top: 0,
                mobile: {
                    percent: 0.4486,
                    left: 5.4375,
                    top: 0
                }
            },
            {
                name: '曲自涵',
                role: '收集展品资料',
                avatar: require('image/sponsor/17.jpeg'),
                percent: 0.4608,
                left: 51.625,
                top: 0,
                mobile: {
                    percent: 0.46295,
                    left: 13,
                    top: 0
                }
            }
        ]
    },{
        group: '设计组',
        percent: 0.4922,
        left: 82.375,
        top: 183.75,
        mobile: {
            percent: 0.49348,
            left: 17.75,
            top: 107.75
        },
        member: [
            {
                name: '张仁洁（组长）',
                role: '主视觉细化、展品手册、线上设计、协调统筹',
                avatar: require('image/sponsor/18.jpeg'),
                percent: 0.5112,
                left: -26.125,
                top: 0,
                mobile: {
                    percent: 0.50272,
                    left: -6.75,
                    top: 0
                }
            },
            {
                name: '尹祎晗（副组长）',
                role: '辅助图形、周边、线上设计、协调统筹',
                avatar: require('image/sponsor/19.jpeg'),
                percent: 0.5234,
                left: -44.875,
                top: 0,
                mobile: {
                    percent: 0.51796,
                    left: -14.875,
                    top: 0
                }
            },
            {
                name: '黄诗淇',
                role: '主视觉初方案、背板设计、实验报告',
                avatar: require('image/sponsor/21.jpeg'),
                percent: 0.5316,
                left: -63.625,
                top: 0,
                mobile: {
                    percent: 0.55357,
                    left: -15.625,
                    top: 11.0625
                }
            },
            {
                name: '唐安尼达',
                role: '周边初设计、年展手册',
                avatar: require('image/sponsor/20.jpeg'),
                percent: 0.5708,
                left: -65.5,
                top: 22.8125,
                mobile: {
                    percent: 0.56534,
                    left: -8.8125,
                    top: 11.0625
                }
            },
            {
                name: '易晓萌',
                role: '展板细化、导览册',
                avatar: require('image/sponsor/23.jpeg'),
                percent: 0.58252,
                left: -46.75,
                top: 22.8125,
                mobile: {
                    percent: 0.5768,
                    left: -1.625,
                    top: 11.0625
                }
            },
            {
                name: '王依燃',
                role: '展览周边、导览册',
                avatar: require('image/sponsor/25.jpeg'),
                percent: 0.595,
                left: -28,
                top: 22.8125,
                mobile: {
                    percent: 0.60795,
                    left: -1.625,
                    top: 22.125
                }
            },
            {
                name: '洛扎',
                role: '辅助工作',
                avatar: require('image/sponsor/22.jpeg'),
                percent: 0.60743,
                left: -9.25,
                top: 22.8125,
                mobile: {
                    percent: 0.62035,
                    left: -8.8125,
                    top: 22.125
                }
            },
            {
                name: '仁增旺姆',
                role: '辅助工作',
                avatar: require('image/sponsor/24.jpeg'),
                percent: 0.61985,
                left: 9.5,
                top: 22.8125,
                mobile: {
                    percent: 0.6321,
                    left: -15.625,
                    top: 22.125
                }
            }
        ]
    },
    {
        group: '文宣组',
        percent: 0.65228,
        left: 92.9375,
        top: 231.6825,
        mobile: {
            percent: 0.6633,
            left: 2.25,
            top: 140.9375
        },
        member: [
            {
                name: '白昊（组长）',
                role: '主题阐释、分区阐释、H5、推送、外联、协调工作',
                avatar: require('image/sponsor/26.jpeg'),
                percent: 0.67036,
                left: -25.9375,
                top: 0,
                mobile: {
                    percent: 0.67567,
                    left: 4.875,
                    top: 0
                }
            },
            {
                name: '吴语晴（副组长）',
                role: '主题阐释、素材整理、宣传片制作、协调工作',
                avatar: require('image/sponsor/27.jpeg'),
                percent: 0.68235,
                left: -44.6875,
                top: 0,
                mobile: {
                    percent: 0.6903,
                    left: 13.4375,
                    top: 0
                }
            },
            {
                name: '段海涛',
                role: '主题阐释、分区阐释、宣传片制作',
                avatar: require('image/sponsor/28.jpeg'),
                percent: 0.69453,
                left: -63.4375,
                top: 0,
                mobile: {
                    percent: 0.72496,
                    left: 11.1875,
                    top: 11.0625
                }
            },
            {
                name: '刘皓月',
                role: '主题阐释、素材收集、宣传片制作',
                avatar: require('image/sponsor/29.jpeg'),
                percent: 0.7291,
                left: -72.3125,
                top: 22.9375,
                mobile: {
                    percent: 0.74117,
                    left: 2.875,
                    top: 11.0625
                }
            },
            {
                name: '赵钰可',
                role: '主题阐释、素材收集、宣传片制作',
                avatar: require('image/sponsor/30.jpeg'),
                percent: 0.7404,
                left: -53.5625,
                top: 22.9375,
                mobile: {
                    percent: 0.7793,
                    left: 5.4375,
                    top: 22.125
                }
            },
            {
                name: '陈诗语',
                role: '主题阐释、分区阐释、宣传片制作、文案撰写',
                avatar: require('image/sponsor/31.jpeg'),
                percent: 0.75282,
                left: -34.8125,
                top: 22.9375,
                mobile: {
                    percent: 0.79364,
                    left: 13.5,
                    top: 22.125
                }
            }
        ]
    },
    {
        group: '对接人',
        percent: 0.79282,
        left: 82.0625,
        top: 277.625,
        mobile: {
            percent: 0.8229,
            left: 17.1875,
            top: 174.125
        },
        member: [
            {
                name: '方正',
                role: '工业设计22级对接人',
                avatar: require('image/sponsor/32.jpeg'),
                percent: 0.80479,
                left: -14.9375,
                top: 0,
                mobile: {
                    percent: 0.833,
                    left: -6.75,
                    top: 0
                }
            },
            {
                name: '王博约',
                role: '工业设计20级对接人',
                avatar: require('image/sponsor/33.jpeg'),
                percent: 0.81767,
                left: -33.6875,
                top: 0,
                mobile: {
                    percent: 0.84864,
                    left: -15,
                    top: 0
                }
            },
            {
                name: '吴鑫',
                role: '工业设计研究生对接人',
                avatar: require('image/sponsor/34.jpeg'),
                percent: 0.8293,
                left: -52.4375,
                top: 0,
                mobile: {
                    percent: 0.8811,
                    left: -16.5,
                    top: 11.065
                }
            }
        ]
    },
    {
        group: '外援',
        percent: 0.86353,
        left: 22.5625,
        top: 300.3125,
        mobile: {
            percent: 0.8897,
            left: 7.6875,
            top: 185.125
        },
        member: [
            {
                name: '赵玉奇',
                role: '中译英工作',
                avatar: require('image/sponsor/35.jpeg'),
                percent: 0.87573,
                left: 18.125,
                top: 0,
                mobile: {
                    percent: 0.8989,
                    left: 3.875,
                    top: 0
                }
            }
        ]
    }
]
export const teacherList = [
    ['李巨韬', '你们即将结束大学本科的求学生涯，踏上新的人生征程，在这个特别的时刻，我要向你们表达最热烈的祝贺，祝贺你们顺利完成学业，开启新的人生篇章。',
        '大学四年是你们人生中的一段重要旅程，是你们从青涩走向成熟、从迷茫走向坚定的关键时期。在这里，你们修养品格，学会了独立思考，培养了解决问题的能力，也结识了志同道合的朋友。我为你们取得的每一点进步感到由衷的骄傲，也为能参与其中而感到无比荣幸。毕业并不是终点，而是新生活的起点，请永远保持对知识的渴望和求索，知行合一，勇敢面对挑战，用智慧和勇气去创造自己的未来。祝愿你们前程似锦，一帆风顺！', '班导师'],
    ['张赫晨', '亲爱的2020级同学们：大学，是人生中重要的转折点！这几年的校园学习生活，承载了你们从青涩懵懂到成熟稳重的转变，也使你们历经超越自我极限的特殊挑战，如今，大家都已收获满满，整装待发向自己人生的下一阶段。愿回首过往，你们都能道一声“不虚此行”，愿这四年的磨砺能让你们多一重思考与沉淀，同时也拥有更多自信面向未来的任何顺途与逆境，预祝大家一切顺利！','', '班导师']
]
export const graduateList = [
    ['于米提江·托乎提', '短暂的四年以精彩多样的形式快速闪过。这四年里我学到了很多，感受了很多，有了一些成就，更是找到了自己的爱好和兴趣。非常感谢遇到的所有同学和老师，接下来我将在天津大学继续我的研学之旅。', '天津大学',require('image/graduate/0.jpeg')],
    ['于业淼', 'Ok啊ok，最~喜欢的1895啊，最~喜欢的年展啊，最~~喜欢的毕业啊，天津大学，启动！', '西安交通大学',require('image/graduate/1.jpeg')],
    ['王紫桐', '“人生是一场打不完的仗。”', '西安交通大学',require('image/graduate/2.jpeg')],
    ['杜琬琪', '此去一展鸿鹄志，此生由己不由人', '伦敦大学学院',require('image/graduate/3.jpeg')],
    ['王宁宁', '匆匆四年，观察落叶鲜花，在平凡的日子里播撒快乐的种子，一切尽意，此后种种，亦当用心去感受，用生命去热爱', '天津大学',require('image/graduate/4.jpeg')],
    ['赵书苇', '感谢这一程的春光，所以把海棠别在襟上。', '',require('image/graduate/5.jpeg')],
    ['赵芳悦', '时光匆匆', '天津大学',require('image/graduate/6.jpeg')],
    ['赵彦硕', '再见', '',require('image/graduate/7.jpeg')],
    ['陈书恒', '在此间的四年是短暂和充实的时光，在这里你可以遇到各不相同的事件，学习一切知识和技能。虽然不可避免地存在诸多遗憾，但总体来说是瑕不掩瑜的。我十分感激自己在这段时间中做出的各种决定和付出的一切努力。感谢所有同学、好友、老师以及我亲爱的伴侣的长久以来的关心和照顾。至于天津大学及工业设计，让我们祝她好运！', '约翰霍普金斯大学',require('image/graduate/8.jpeg')],
    ['胡可昕', '在毕业倒计时的滴答声里，以前那评价为枯燥、单调的日子，也咂出那些难忘的记忆来，回顾了一遍又一遍。或许下次再见吧，但愿各位前程似锦。', '',require('image/graduate/9.jpeg')],
    ['白悦', '感谢浮光跃金的理想，感谢一路上涌现的爱和迷雾，感谢所有的隐喻、遗憾与挫折。', '天津大学',require('image/graduate/10.jpeg')],
    ['贾皓璇', '毕业啦，充实、跌宕起伏的四年，把能体验的走遍，生，万，人，未！', '',require('image/graduate/11.jpeg')],
    ['邸杨', '大学四年充实且忙碌，有成长，有收获，也有遗憾，但一定是难忘的四年。追风赶月莫停留，平芜尽处是春山，希望我们前路光明灿烂。', '天津大学',require('image/graduate/12.jpeg')],
    ['宋海雯', '是一起坐在教室里上课，是一起在实验室看螺杆，是在图书馆里熬夜办展，是在完成项目后深夜在校园游走欢笑，是这所学校，也是大家留下的身影；有在磨合中成长，有在困境中体悟，是我们共同经历的往事，造就如今我的内涵。陪伴如细雨，良言如和风，让我从弱小变强大。谨以此心，拙表感谢与祝福。', '北京理工大学',require('image/graduate/13.jpeg')],
    ['张淋悦', '江湖再会', '于默奥',require('image/graduate/14.jpeg')],
    ['许诺', '千千万万遍', '天津大学',require('image/graduate/15.jpeg')],
    ['何子文', '敬友情，敬无常，敬谁都好，敬我们自己……好了，再见，我去2024下半年', '天津大学',require('image/graduate/16.jpeg')],
    ['杨晰然', '四年时间无憾，感谢设计。', '',require('image/graduate/17.jpeg')],
    ['王铸涛', '你想活出怎样的人生', '东南大学',require('image/graduate/18.jpeg')],
    ['王浩', '所以词穷致谢，因为来日方长。', '天津大学',require('image/graduate/19.jpeg')],
    ['方宇凌', '感谢天大，再见天大！', '佐治亚理工学院',require('image/graduate/20.jpeg')],
    ['周双彦', '辛苦啦，毕业快乐！', '皇家艺术学院',require('image/graduate/21.jpeg')],
    ['王博约', '真要是清水一潭也有点可怕。但世界拥挤不堪。', '',require('image/graduate/22.jpeg')],
    ['周蒙', 'byebye~', '',require('image/graduate/23.jpeg')],
    ['刘千千', '世上有多少个缤纷乐园 任你行', '佐治亚理工学院',require('image/graduate/24.jpeg')],
    ['林浩宇', '祝天大工设蒸蒸日上，祝各位老师万事胜意，祝各位同学学业有成。', '',require('image/graduate/25.png')],
    ['张广林', '好好生活好好努力，谢谢天大谢谢设计', '天津大学',require('image/graduate/26.jpeg')],
    ['边巴次仁', '不想毕业', '',require('image/graduate/27.png')],
    ['乔博宇', '继续加油！', '佐治亚理工学院',require('image/graduate/28.png')],
    ['耿旭冉', '感谢相遇，不说再见', '天津大学',require('image/graduate/29.jpeg')],
    ['林思怡', '期待未来', '香港大学',require('image/graduate/30.jpeg')],
    ['特列克', '感谢天大让我们相遇', '',require('image/graduate/31.jpeg')],
    ['王欣然', '坚持就会听见奇迹的声响', '代尔夫特理工大学',require('image/graduate/32.jpeg')],
    ['杨子杰', '感谢陪伴 ', '皇家艺术学院',require('image/graduate/33.jpeg')],
    ['哈林', 'Alhamdulillah', '天津大学',require('image/graduate/34.jpeg')]
]

export const offsetList = [
    [30.625, 9.0625],
    [30.625, -12.5],
    [41.3125, 22.1875],
    [47.1875, 0.75],
    [49.375, -18.75],
    [58.4375, 14.625],
    [64.4375, -3.75],
    [65.5, -23.75],
    [72.4375, 21.875],
    [78.3125, 0.3125],
    [80.5, -18.75],
    [85.5, 15.625],
    [95.5625, -1],
    [100.75, 21.5625],
    [104, -15.625],
    [112.8125, 16.5625],
    [114, 0.6875],
    [121.375, -22.5625],
    [127.25, 19.5625],
    [131.9375, 4.625],
    [134.9375, -11.4375],
    [143.5, 22.375],
    [146.25, -19.75],
    [155.75, 11.5625],
    [156.25, -6],
    [163.875, -21.25],
    [168.875, 20.625],
    [173.875, -5.625],
    [180.3125, 9.1625],
    [187.25, -15.625],
    [194.8125, 14.625],
    [199.8125, -2.1875],
    [201.4375, -22.5625],
    [209.8125, 19.625],
    [213.4357, -10.625]
]

export const offsetListMobile = [
    [12.3125, 8.5],
    [12.3125, -11.0625],
    [16.5625, -1.4375],
    [21.75, -9.125],
    [21.75, 9.5625],
    [25.5, 0.125],
    [31, 8.5],
    [31.4375, -10],
    [34.375, -1.0625],
    [42.5625, -10.875],
    [42.5625, 6.6875],
    [49.25, -1.375],
    [52.9375, 10.0625],
    [56.25, -10.4375],
    [59.5625, -0.4375],
    [64.5, 9.3125],
    [68.4375, -8.75],
    [72.125, 1.5625],
    [80.125, -6.5625],
    [80.5625, 8.375],
    [87.375, -0.5],
    [90.6875, -11.625],
    [90.6875, 9],
    [99.125, 4.625],
    [102.375, -8.75],
    [107.5625, 9.625],
    [110, -1.75],
    [117.625, -8.4375],
    [117.625, 8.6875],
    [126.625, 0.125],
    [128.125, -11.625],
    [132.6875, 9.5],
    [139.375, -7.1875],
    [142.75, 4.0625],
    [150.875, -8.0625]
];
