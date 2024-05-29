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
    color: string;
    background: string;
    background_active: string;
    background_default: string;
    icon: string;
    iconAnimationPath: string;
    iconFrames: number;
    currentFrame: number;
    animationFrameId: number | null;
}

// 第一项和最后一项是重复的，用于循环滚动
export const exhibitionList: Exhibition[] = [
    {
        id: 66,
        name: '十年',
        desc: '我们对世界的热爱与探索，带领我们继续求解无限的未来。',
        desc_en: 'Our love and exploration of the world leads us to continue to solve the infinite future.',
        status: 0,
        icon: require('image/logo_7.svg'),
        formula: require('image/formula_7.svg'),
        formula_active: require('image/formula_7_1.svg'),
        formula_default: require('image/formula_7_2.svg'),
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
        formula: require('image/formula_1.svg'),
        formula_active: require('image/formula_1_1.svg'),
        formula_default: require('image/formula_1_2.svg'),
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
        formula: require('image/formula_2.svg'),
        formula_active: require('image/formula_2_1.svg'),
        formula_default: require('image/formula_2_2.svg'),
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
        formula: require('image/formula_3.svg'),
        formula_active: require('image/formula_3_1.svg'),
        formula_default: require('image/formula_3_2.svg'),
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
        formula: require('image/formula_4.svg'),
        formula_active: require('image/formula_4_1.svg'),
        formula_default: require('image/formula_4_2.svg'),
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
        formula: require('image/formula_5.svg'),
        formula_active: require('image/formula_5_1.svg'),
        formula_default: require('image/formula_5_2.svg'),
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
        formula: require('image/formula_6.svg'),
        formula_active: require('image/formula_6_1.svg'),
        formula_default: require('image/formula_6_2.svg'),
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
        id: 66,
        name: '十年',
        desc: '我们对世界的热爱与探索，带领我们继续求解无限的未来。',
        desc_en: 'Our love and exploration of the world leads us to continue to solve the infinite future.',
        status: 1,
        icon: require('image/logo_7.svg'),
        formula: require('image/formula_7.svg'),
        formula_active: require('image/formula_7_1.svg'),
        formula_default: require('image/formula_7_2.svg'),
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
        formula: require('image/formula_1.svg'),
        formula_active: require('image/formula_1_1.svg'),
        formula_default: require('image/formula_1_2.svg'),
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
    require('video/9.mp4'),
    require('video/8.mp4'),
    require('video/7.mp4'),
    require('video/6.mp4'),
    require('video/5.mp4'),
    require('video/4.mp4'),
    require('video/3.mp4'),
    require('video/2.mp4'),
    require('video/1.mp4')
]
export const coverList = [
    require('image/cover/9.png'),
    require('image/cover/8.png'),
    require('image/cover/7.png'),
    require('image/cover/6.png'),
    require('image/cover/5.png'),
    require('image/cover/4.png'),
    require('image/cover/3.png'),
    require('image/cover/2.png'),
    require('image/cover/1.png')
]

export const sponsorList = [
    {
        group: '指导教师',
        member: [
            {
                name: '边放',
                role: '展览理论知识讲授、设计指导',
                avatar: require('image/sponsor/1.jpeg')
            },
            {
                name: '杨君宇',
                role: '年展视觉设计指导',
                avatar: require('image/sponsor/2.jpeg')
            },
            {
                name: '张赫晨',
                role: '年展策划协调、设计指导',
                avatar: require('image/sponsor/3.jpeg')
            },
            {
                name: '李擎炜',
                role: '年展实验指导、文宣指导',
                avatar: require('image/sponsor/4.jpeg')
            }
        ]
    },
    {
        group: '总负责',
        member: [
            {
                name: '江长林',
                role: '上传下达，协调工作，参与进度',
                avatar: require('image/sponsor/5.jpeg')
            }
        ]
    },{
        group: '策展A',
        member: [
            {
                name: '贺杨晨（组长）',
                role: '展览设计，统筹，展场规划,展场建模',
                avatar: require('image/sponsor/6.jpeg')
            },
            {
                name: '焦慧婷',
                role: '展览设计，财务负责',
                avatar: require('image/sponsor/7.jpeg')
            },
            {
                name: '王佳一',
                role: '展览设计，总外联，物料清点，主视觉设计',
                avatar: require('image/sponsor/8.jpeg')
            },
            {
                name: '曾楚懿',
                role: '展览设计，环境艺术外联，设计组对接',
                avatar: require('image/sponsor/9.jpeg')
            },
            {
                name: '张宇星',
                role: '展览设计，物料调研，沙盘负责，展品排布',
                avatar: require('image/sponsor/10.jpeg')
            }
        ]
    },{
        group: '策展B',
        member: [
            {
                name: '余春阳（组长）',
                role: '框架搭建，PC端UI，协调工作',
                avatar: require('image/sponsor/11.jpeg')
            },
            {
                name: '刘子炜',
                role: '框架搭建，移动端UI',
                avatar: require('image/sponsor/12.jpeg')
            },
            {
                name: '蒋婵娟',
                role: '框架搭建，动效设计',
                avatar: require('image/sponsor/13.jpeg')
            },
            {
                name: '刘宏伟',
                role: 'PC端、移动端网站前端开发',
                avatar: require('image/sponsor/14.jpeg')
            },
            {
                name: '李杰',
                role: '特邀教师，网站后端开发及部署',
                avatar: require('image/sponsor/15.jpeg')
            }
        ]
    },{
        group: '策展C',
        member: [
            {
                name: '陈雪懿（组长）',
                role: '收集展品资料',
                avatar: require('image/sponsor/16.jpeg')
            },
            {
                name: '曲自涵',
                role: '收集展品资料',
                avatar: require('image/sponsor/17.jpeg')
            }
        ]
    },{
        group: '设计组',
        member: [
            {
                name: '张仁洁（组长）',
                role: '主视觉细化、展品手册、线上设计、协调统筹',
                avatar: require('image/sponsor/18.jpeg')
            },
            {
                name: '尹祎晗（副组长）',
                role: '辅助图形、周边、线上设计、协调统筹',
                avatar: require('image/sponsor/19.jpeg')
            },
            {
                name: '唐安尼达',
                role: '周边初设计、年展手册',
                avatar: require('image/sponsor/20.jpeg')
            },
            {
                name: '黄诗淇',
                role: '主视觉初方案、背板设计、实验报告',
                avatar: require('image/sponsor/21.jpeg')
            },
            {
                name: '洛扎',
                role: '辅助工作',
                avatar: require('image/sponsor/22.jpeg')
            },
            {
                name: '易晓萌',
                role: '展板细化、导览册',
                avatar: require('image/sponsor/23.jpeg')
            },
            {
                name: '仁增旺姆',
                role: '辅助工作',
                avatar: require('image/sponsor/24.jpeg')
            },
            {
                name: '王依燃',
                role: '展览周边、导览册',
                avatar: require('image/sponsor/25.jpeg')
            }
        ]
    },
    {
        group: '文宣',
        member: [
            {
                name: '白昊（组长）',
                role: '主题阐释、分区阐释、H5、推送、外联、协调工作',
                avatar: require('image/sponsor/26.jpeg')
            },
            {
                name: '吴语晴（副组长）',
                role: '主题阐释、素材整理、宣传片制作、协调工作',
                avatar: require('image/sponsor/27.jpeg')
            },
            {
                name: '段海涛',
                role: '主题阐释、分区阐释、宣传片制作',
                avatar: require('image/sponsor/28.jpeg')
            },
            {
                name: '刘皓月',
                role: '主题阐释、素材收集、宣传片制作',
                avatar: require('image/sponsor/29.jpeg')
            },
            {
                name: '赵钰可',
                role: '主题阐释、素材收集、宣传片制作',
                avatar: require('image/sponsor/30.jpeg')
            },
            {
                name: '陈诗语',
                role: '主题阐释、分区阐释、宣传片制作、文案撰写',
                avatar: require('image/sponsor/31.jpeg')
            }
        ]
    },
    {
        group: '交接组',
        member: [
            {
                name: '吴鑫',
                role: '收集研究生展品',
                avatar: require('image/sponsor/32.jpeg')
            },
            {
                name: '方正',
                role: '收集22级展品',
                avatar: require('image/sponsor/33.jpeg')
            },
            {
                name: '王博约',
                role: '收集20级展品',
                avatar: require('image/sponsor/34.jpeg')
            }
        ]
    },
    {
        group: '翻译',
        member: [
            {
                name: '赵玉奇',
                role: '中译英工作',
                avatar: require('image/sponsor/35.jpeg')
            }
        ]
    }
]
