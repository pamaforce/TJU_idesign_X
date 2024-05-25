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
        id: 64,
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
        id: 58,
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
        id: 59,
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
        id: 60,
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
        id: 61,
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
        id: 62,
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
        id: 63,
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
        id: 64,
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
        id: 58,
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
export const mockData = [
    {
        'id': 280,
        'parent_id': 0,
        'post_type': 1,
        'post_format': 1,
        'user_id': 51,
        'post_status': 1,
        'is_top': 0,
        'create_time': 1685633190,
        'update_time': 1685634187,
        'published_time': 1685630340,
        'delete_time': 0,
        'post_title': '婴儿呼吸智能监护器的设计与研究',
        'post_term': '202223-2',
        'post_content': '',
        'post_content_filtered': null,
        'more': {
            'thumbnail': 'portal/20230601/729e4dfb15981da54cd3082a853a5ca0.jpg',
            'photos': [
                {
                    'url': 'portal/20230601/729e4dfb15981da54cd3082a853a5ca0.jpg',
                    'pure_url': 'pure/portal/20230601/729e4dfb15981da54cd3082a853a5ca0.jpg',
                    'name': '主_画板 1.jpg'
                },
                {
                    'url': 'portal/20230601/0abffb0f59fc5db546f72dcf91d6d339.jpg',
                    'pure_url': 'pure/portal/20230601/0abffb0f59fc5db546f72dcf91d6d339.jpg',
                    'name': 'j1_画板 1.jpg'
                },
                {
                    'url': 'portal/20230601/b5ed18bf65c64d722f067fde8e445c76.jpg',
                    'pure_url': 'pure/portal/20230601/b5ed18bf65c64d722f067fde8e445c76.jpg',
                    'name': '竖_画板 1.jpg'
                },
                {
                    'url': 'portal/20230601/19456b8fc0c5a45bcef7cdf77873a858.jpg',
                    'pure_url': 'pure/portal/20230601/19456b8fc0c5a45bcef7cdf77873a858.jpg',
                    'name': 'j_画板 1.jpg'
                },
                {
                    'url': 'portal/20230601/abccf7706e7b2872e2b9daa27b303947.jpg',
                    'pure_url': 'pure/portal/20230601/abccf7706e7b2872e2b9daa27b303947.jpg',
                    'name': '未标题-1_画板 1.jpg'
                }
            ],
            'files': [],
            'authors': [
                {
                    'url': 'portal/20230601/29a3959c3723f2b7bb4c40a6c89d93e0.jpg',
                    'zh_names': '艾力米热·鲁合曼',
                    'en_names': 'Alimire LUHEMAN',
                    'grade': '本2019',
                    'xuehao': '3019201051'
                }
            ]
        },
        'sortOrder': 0,
        'post_title_en': 'Design and research of infant respiratory',
        'course_zh': '毕业设计',
        'course_en': 'Graduation Design',
        'keywords_zh': '智能|婴儿护理|传感器技术',
        'keywords_en': 'Intelligence|Baby care|Sensor technology',
        'intro_zh': '本课题以婴儿和看护者为研究对象，在产品监护、反馈等基本功能实现的前提下，从设计美学的角度对产品进行完善，并关注用户的使用体验与心理需求，将其结合到产品设计中，设计一款智能婴儿呼吸监护器。不仅守护婴儿健康，减轻家长负担，更能给婴儿和家长提供更细致的设计关怀体验。',
        'intro_en': 'This topic takes babies and caregivers as the research object. On the premise of realizing the basic functions of product monitoring and feedback, the product is improved from the perspective of design aesthetics, and the user\'s experience and psychological needs are paid attention to, which is combined into the product design, to design an intelligent infant respiratory monitor. Not only protect the health of infants, reduce the burden of parents, but also provide infants and parents with more detailed design care experience.',
        'tutors_zh': '马雨萌',
        'tutors_en': 'Yumeng MA',
        'post_hits': 66,
        'direction_zh': '产品设计',
        'direction_en': 'Product Design',
        'category_id': 58,
        'category_name': '共心 Mindoasis'
    },{
        'id': 166,
        'parent_id': 0,
        'post_type': 1,
        'post_format': 1,
        'user_id': 6,
        'post_status': 1,
        'is_top': 0,
        'create_time': 1670497130,
        'update_time': 1685447428,
        'published_time': 1670492220,
        'delete_time': 0,
        'post_title': '形态创意实验 | 流转之钟',
        'post_term': '202223-1',
        'post_content': '',
        'post_content_filtered': null,
        'more': {
            'thumbnail': 'portal/20221208/09bf9df6d2d79273eb0cf61f092bd89b.jpg',
            'photos': [
                {
                    'url': 'portal/20221208/0e07b3dec7c2ef25cf6fd44d639edb94.jpg',
                    'pure_url': 'pure/portal/20221208/0e07b3dec7c2ef25cf6fd44d639edb94.jpg',
                    'name': '王佳一-流转之钟0.jpg'
                },
                {
                    'url': 'portal/20221208/f280a6809e162c72ce0a6c8d40ab2b74.jpg',
                    'pure_url': 'pure/portal/20221208/f280a6809e162c72ce0a6c8d40ab2b74.jpg',
                    'name': '王佳一-流转之钟1.jpg'
                },
                {
                    'url': 'portal/20221208/42954e9a97d04934c5d31a309b78c41c.jpg',
                    'pure_url': 'pure/portal/20221208/42954e9a97d04934c5d31a309b78c41c.jpg',
                    'name': '王佳一-流转之钟2.jpg'
                },
                {
                    'url': 'portal/20221208/1816db60269ace47a0b7b5f3b2a03b6f.jpg',
                    'pure_url': 'pure/portal/20221208/1816db60269ace47a0b7b5f3b2a03b6f.jpg',
                    'name': '王佳一-流转之钟3.jpg'
                },
                {
                    'url': 'portal/20221208/4df377576e1a9c5e56d7b71f161bb069.jpg',
                    'pure_url': 'pure/portal/20221208/4df377576e1a9c5e56d7b71f161bb069.jpg',
                    'name': '王佳一-流转之钟4.jpg'
                }
            ],
            'files': [
                {
                    'url': 'portal/20221208/c63425d6ca3f35e879576a1d4706aa26.mp4',
                    'name': '王佳一-流转之钟.mp4'
                }
            ],
            'authors': [
                {
                    'url': 'portal/20221208/92b7d8270172462e85b3d25731a975e4.jpg',
                    'zh_names': '王佳一',
                    'en_names': 'Jiayi WANG',
                    'grade': '本 2021',
                    'xuehao': '3021001792'
                }
            ]
        },
        'sortOrder': 0,
        'post_title_en': 'Creative form experiment | Flowing',
        'course_zh': '设计表达A',
        'course_en': 'Design Expression A ',
        'keywords_zh': '时间|流水|光影|交互',
        'keywords_en': 'Time|Flowing Water|Shadow|Interaction ',
        'intro_zh': '本作品以“流”为出发点，围绕“流动”、“流逝”、“流转”三个关键词，展现时间的特性。使用水光纱、云雾纱等材料，表现时光如水的样态。装置通过灯光的位置变化，带来投射在人身上的光影变化，从而实现装置与人的交互。\r\n本作品希望传达给观察者的信息在于：时间是无形的，我们无法抓住不断从指尖流走的时间；但同时，时间也是有形的，是可以被心灵记录，被双手触摸的。当我抚摸这件作品，我抓住的是切割木料时飞扬的碎屑、傍晚离开工作室时窗子里盛着的夕阳，还有最终完成作品锁门转身离开的那个晚上。',
        'intro_en': 'This work takes \'flow\' as the starting point, trying to show the characteristics of time. Materials such as organza and metal mesh are used to express the concept that time is like water.  Through the change of the position of the light, the device shows the change of the shadow projected on the person so as to realize the interaction between the device and the person. ',
        'tutors_zh': '杨君宇 张赫晨',
        'tutors_en': 'Junyu YANG Hechen ZHANG',
        'post_hits': 414,
        'direction_zh': '装置设计 | 思辨设计',
        'direction_en': 'Installation Design | Speculative Design',
        'category_id': 64,
        'category_name': '共生 Naturezone'
    },
    {
        'id': 257,
        'parent_id': 0,
        'post_type': 1,
        'post_format': 1,
        'user_id': 50,
        'post_status': 1,
        'is_top': 0,
        'create_time': 1685471968,
        'update_time': 1716634397,
        'published_time': 1685470080,
        'delete_time': 0,
        'post_title': '异地情侣陪伴机器人设计与研究',
        'post_term': '202223-2',
        'post_content': '',
        'post_content_filtered': null,
        'more': {
            'thumbnail': 'portal/20230602/c854dba43641430999af7086ff1d30a3.jpg',
            'photos': [
                {
                    'url': 'portal/20230602/cb7bdce6ba5ea055f06e1ef0b1938bfd.jpg',
                    'pure_url': 'pure/portal/20230602/cb7bdce6ba5ea055f06e1ef0b1938bfd.jpg',
                    'name': '3.jpg'
                },
                {
                    'url': 'portal/20230602/2896ed93e3e85915ec19b9d33693b87a.jpg',
                    'pure_url': 'pure/portal/20230602/2896ed93e3e85915ec19b9d33693b87a.jpg',
                    'name': '4.jpg'
                },
                {
                    'url': 'portal/20230602/efefb539dfe156b8ed949b5e5aec3dae.jpg',
                    'pure_url': 'pure/portal/20230602/efefb539dfe156b8ed949b5e5aec3dae.jpg',
                    'name': '6.jpg'
                },
                {
                    'url': 'portal/20230602/b0e1100d1d35825a5e344e5028b7f903.jpg',
                    'pure_url': 'pure/portal/20230602/b0e1100d1d35825a5e344e5028b7f903.jpg',
                    'name': '5.jpg'
                },
                {
                    'url': 'portal/20230602/5e82f1f4d050f0add9e700f14f07d4da.jpg',
                    'pure_url': 'pure/portal/20230602/5e82f1f4d050f0add9e700f14f07d4da.jpg',
                    'name': '1.jpg'
                }
            ],
            'files': [],
            'authors': [
                {
                    'url': 'portal/20230531/74805490b944e426780f3db971a0a92d.jpg',
                    'zh_names': '杨保鹏',
                    'en_names': 'Patrick SUNARYO',
                    'grade': '本2019',
                    'xuehao': '6319000296'
                }
            ]
        },
        'sortOrder': 0,
        'post_title_en': 'Design and Research of Companion Robot For Long-Distance Couples',
        'course_zh': '毕业设计',
        'course_en': 'Graduation Design',
        'keywords_zh': '异地恋|陪伴机器人|情侣|孤独感|情感支持',
        'keywords_en': 'Long distance relationship|Companion robot|Couple|Loneliness|Emotional support',
        'intro_zh': '这是一款异地情侣陪伴机器人产品，该设计旨在满足异地情侣减少伴侣的孤独感和增强异地情侣的情感支持的需求。 这款产品具有人机交互性和提升伴侣之间的交互能力，以增进异地情侣之间的感情，了解他们的感受。 该产品名为“banban”，其概念灵感来自猫，猫可以理解主人的情绪并通过耳朵表达感受。',
        'intro_en': 'This is a companion robot product for long-distance couples that is designed to meet the needs of long-distance couples in reducing partner\'s loneliness and increasing the emotional support of long-distance couples. The product has human-robot interaction and partner-to-partner interaction capabilities to enhance the relationship between long-distance couples and understand their feelings. The product is called &quot;banban&quot;, and its concept is inspired by cats, which can understand the emotions of their owners and express their feelings through their ears. ',
        'tutors_zh': '马雨萌',
        'tutors_en': 'Yumeng MA',
        'post_hits': 102,
        'direction_zh': '产品设计',
        'direction_en': 'Product Design',
        'category_id': 58,
        'category_name': '共心 Mindoasis'
    },
    {
        'id': 254,
        'parent_id': 0,
        'post_type': 1,
        'post_format': 1,
        'user_id': 45,
        'post_status': 1,
        'is_top': 0,
        'create_time': 1685469156,
        'update_time': 1685496093,
        'published_time': 1685467380,
        'delete_time': 0,
        'post_title': '以调节心理健康水平为目标的智能安抚聊天机器人研究与设计',
        'post_term': '202223-2',
        'post_content': '',
        'post_content_filtered': null,
        'more': {
            'thumbnail': 'portal/20230531/7735b5af444cf8181c8029bd66de913f.jpeg',
            'photos': [
                {
                    'url': 'portal/20230531/fa2473934b76a09e0de3eb7e442cdc13.jpeg',
                    'pure_url': 'pure/portal/20230531/fa2473934b76a09e0de3eb7e442cdc13.jpeg',
                    'name': '1'
                },
                {
                    'url': 'portal/20230531/603b7847362340394bd0816e0250da73.jpeg',
                    'pure_url': 'pure/portal/20230531/603b7847362340394bd0816e0250da73.jpeg',
                    'name': '2'
                },
                {
                    'url': 'portal/20230531/047dc91cfabdf7bbbed0370c61e1da5c.jpeg',
                    'pure_url': 'pure/portal/20230531/047dc91cfabdf7bbbed0370c61e1da5c.jpeg',
                    'name': '默认标题__2023-05-31+01_51_48.jpeg'
                },
                {
                    'url': 'portal/20230531/ddf9d5fe09ee500aca91aa3eb89fd295.jpeg',
                    'pure_url': 'pure/portal/20230531/ddf9d5fe09ee500aca91aa3eb89fd295.jpeg',
                    'name': '4'
                },
                {
                    'url': 'portal/20230531/7735b5af444cf8181c8029bd66de913f.jpeg',
                    'pure_url': 'pure/portal/20230531/7735b5af444cf8181c8029bd66de913f.jpeg',
                    'name': '5'
                }
            ],
            'files': [],
            'authors': [
                {
                    'url': 'portal/20230531/0eb97ec28436e9c474c9e56e1c1cdd90.jpg',
                    'zh_names': '李哲',
                    'en_names': 'Zhe LI',
                    'grade': '本2019',
                    'xuehao': '3019201048'
                }
            ]
        },
        'sortOrder': 0,
        'post_title_en': 'Research and Design of an Intelligent Comfort Chat Robot with the Goal of Regulating Mental Health Level',
        'course_zh': '毕业设计',
        'course_en': 'Graduation Design',
        'keywords_zh': '心理疗愈|安抚|对话|书写',
        'keywords_en': 'Psychological healing|Comfort|Dialogue|Writing',
        'intro_zh': '这是一款自助式的心理疗愈产品，针对当下普遍出现的心理亚健康问题，创新性的提出自助式解决方案。产品分为APP与硬件书写笔，在APP端用户可以记录每日心情并获得针对心情的解决方案，在使用书写笔书写时，笔会根据用户的书写强度识别出用户情绪。',
        'intro_en': 'This is a self-help psychological healing product that innovatively proposes self-help solutions for the current widespread mental sub health problems. The product is divided into an APP and a hardware writing pen. On the APP end, users can record their daily mood and obtain solutions tailored to their mood. When using a writing pen to write, the pen will recognize the user\'s emotions based on their writing intensity.',
        'tutors_zh': '杨君宇',
        'tutors_en': 'Junyu YANG',
        'post_hits': 57,
        'direction_zh': '界面设计|产品设计',
        'direction_en': 'UI/UX|Product Design',
        'category_id': 58,
        'category_name': '共心 Mindoasis'
    },
    {
        'id': 255,
        'parent_id': 0,
        'post_type': 1,
        'post_format': 1,
        'user_id': 50,
        'post_status': 1,
        'is_top': 0,
        'create_time': 1685469686,
        'update_time': 1685472336,
        'published_time': 1685463900,
        'delete_time': 0,
        'post_title': '面向青年人群的解压产品设计研究',
        'post_term': '202223-2',
        'post_content': '',
        'post_content_filtered': null,
        'more': {
            'thumbnail': 'portal/20230531/0e967f12f1d72930860ff1949e170a4e.png',
            'photos': [
                {
                    'url': 'portal/20230531/7649f5ad212f8bbc3523676b9280645e.png',
                    'pure_url': 'pure/portal/20230531/7649f5ad212f8bbc3523676b9280645e.png',
                    'name': 'Artboard 4.png'
                },
                {
                    'url': 'portal/20230531/6d504565c3d90e34e3956e5a674b61f2.png',
                    'pure_url': 'pure/portal/20230531/6d504565c3d90e34e3956e5a674b61f2.png',
                    'name': 'Artboard 2.png'
                },
                {
                    'url': 'portal/20230531/b6546ab3c83fed743ea92f617a0e59bf.png',
                    'pure_url': 'pure/portal/20230531/b6546ab3c83fed743ea92f617a0e59bf.png',
                    'name': 'Artboard 11.png'
                },
                {
                    'url': 'portal/20230531/0799144f4df1b33529e04fcd8f6606e8.png',
                    'pure_url': 'pure/portal/20230531/0799144f4df1b33529e04fcd8f6606e8.png',
                    'name': 'Artboard 3.png'
                },
                {
                    'url': 'portal/20230531/73f6de49767212980d80be1641a53948.png',
                    'pure_url': 'pure/portal/20230531/73f6de49767212980d80be1641a53948.png',
                    'name': 'Artboard 5.png'
                }
            ],
            'files': [],
            'authors': [
                {
                    'url': 'portal/20230531/731ffd4f9a5ee07b02dcfc6ea930d48f.png',
                    'zh_names': '杨贵山',
                    'en_names': 'Kouesan NTOUANK KOU',
                    'grade': '',
                    'xuehao': '6319000131'
                }
            ]
        },
        'sortOrder': 0,
        'post_title_en': 'Design research on stress relief product for Youth',
        'course_zh': '毕业设计',
        'course_en': 'Graduation Design',
        'keywords_zh': '缓解压力|减压按摩|用户体验|放松',
        'keywords_en': 'Stress Relief | Stress Relief Massage | User Experience | Relaxation',
        'intro_zh': 'ZEN是一款基于穴位按摩和精油疗法的压力缓解产品，本设计是针对现状对当下青年人群的压力缓解需求，结合穴位按摩、精油涂抹以及枯山水的纹理和视觉性联想功能，帮助用户与外界脱离唤起宁静的感觉，加强与自然世界的联系，如同置身于大自然中，从而达到身心放松和压力缓解的效果。',
        'intro_en': 'ZEN is a stress relief product based on acupressure massage and essential oil therapy. This design is aimed at the current stress relief needs of young people. It combines acupressure massage, essential oil therapy, and the Zen garden landscape texture and visual association functions to help users separate from the outside world. Evoking a sense of tranquility and strengthening the connection with the natural world, as if being in nature, thereby achieving physical and mental relaxation and stress relief.',
        'tutors_zh': '马雨萌',
        'tutors_en': 'Yumeng MA',
        'post_hits': 84,
        'direction_zh': '产品设计|交互设计|界面设计',
        'direction_en': 'Product Design | Interaction Design | UI/UX ',
        'category_id': 58,
        'category_name': '共心 Mindoasis'
    },
    {
        'id': 245,
        'parent_id': 0,
        'post_type': 1,
        'post_format': 1,
        'user_id': 45,
        'post_status': 1,
        'is_top': 0,
        'create_time': 1685458323,
        'update_time': 1685614137,
        'published_time': 1685455140,
        'delete_time': 0,
        'post_title': '面向宅家久坐人群的AR趣味锻炼产品',
        'post_term': '202223-2',
        'post_content': '',
        'post_content_filtered': null,
        'more': {
            'thumbnail': 'portal/20230530/407987136ea3aecf50821a04f3284d50.jpg',
            'photos': [
                {
                    'url': 'portal/20230530/407987136ea3aecf50821a04f3284d50.jpg',
                    'pure_url': 'pure/portal/20230530/407987136ea3aecf50821a04f3284d50.jpg',
                    'name': '图1.jpg'
                },
                {
                    'url': 'portal/20230530/5929813039760088b02d808d058f9664.jpg',
                    'pure_url': 'pure/portal/20230530/5929813039760088b02d808d058f9664.jpg',
                    'name': '图2.jpg'
                },
                {
                    'url': 'portal/20230530/010b8d81593f7ca9213a7a667ec7c3ef.jpg',
                    'pure_url': 'pure/portal/20230530/010b8d81593f7ca9213a7a667ec7c3ef.jpg',
                    'name': '图3.jpg'
                },
                {
                    'url': 'portal/20230530/c6399beecdef39e080433f2c653feeeb.jpg',
                    'pure_url': 'pure/portal/20230530/c6399beecdef39e080433f2c653feeeb.jpg',
                    'name': '图4.jpg'
                },
                {
                    'url': 'portal/20230530/9731c0e509770b8acd5b2573aab52fe5.jpg',
                    'pure_url': 'pure/portal/20230530/9731c0e509770b8acd5b2573aab52fe5.jpg',
                    'name': '图5.jpg'
                }
            ],
            'files': [],
            'authors': [
                {
                    'url': 'portal/20230601/443d55cd85861aa9df96608e7a982962.jpeg',
                    'zh_names': '张靖怡',
                    'en_names': 'Jingyi ZHANG',
                    'grade': '本2019',
                    'xuehao': '3019205439'
                }
            ]
        },
        'sortOrder': 8,
        'post_title_en': 'AR fun exercise products for sedentary and homestay population',
        'course_zh': '毕业设计',
        'course_en': 'Graduation Design',
        'keywords_zh': '锻炼产品|宅家人群|久坐',
        'keywords_en': 'Exercise products|Homestay Population|Sedentary',
        'intro_zh': '一款通过AR、社交和游戏化等元素解决宅家久坐人群身心健康问题的轻锻炼产品。',
        'intro_en': 'A light exercise product that solves the physical and mental health problems of sedentary and homestay population through elements such as AR, socializing, and gamification.',
        'tutors_zh': '杨君宇',
        'tutors_en': 'Junyu YANG',
        'post_hits': 50,
        'direction_zh': '产品设计',
        'direction_en': 'Product Design',
        'category_id': 58,
        'category_name': '共心 Mindoasis'
    },
    {
        'id': 237,
        'parent_id': 0,
        'post_type': 1,
        'post_format': 1,
        'user_id': 56,
        'post_status': 1,
        'is_top': 0,
        'create_time': 1685450767,
        'update_time': 1685495752,
        'published_time': 1685450400,
        'delete_time': 0,
        'post_title': '针对大学生习得性无助的创新交互产品设计研究',
        'post_term': '202223-2',
        'post_content': '',
        'post_content_filtered': null,
        'more': {
            'thumbnail': 'portal/20230530/7ce868df21ea50f5bfdbbc79d1a9f3b3.jpg',
            'photos': [
                {
                    'url': 'portal/20230530/7ce868df21ea50f5bfdbbc79d1a9f3b3.jpg',
                    'pure_url': 'pure/portal/20230530/7ce868df21ea50f5bfdbbc79d1a9f3b3.jpg',
                    'name': '封面.jpg'
                },
                {
                    'url': 'portal/20230530/fa8f51f7b346e934513ebbc2f244b69f.jpg',
                    'pure_url': 'pure/portal/20230530/fa8f51f7b346e934513ebbc2f244b69f.jpg',
                    'name': '131313.jpg'
                },
                {
                    'url': 'portal/20230530/905beaf5cb43b968dc4a84273cc8016f.jpg',
                    'pure_url': 'pure/portal/20230530/905beaf5cb43b968dc4a84273cc8016f.jpg',
                    'name': '987654.jpg'
                },
                {
                    'url': 'portal/20230530/01644264f4da529feee3e563c9591913.jpg',
                    'pure_url': 'pure/portal/20230530/01644264f4da529feee3e563c9591913.jpg',
                    'name': '2333.jpg'
                },
                {
                    'url': 'portal/20230530/60df78955d12c9ec986c508ca9fe633e.jpg',
                    'pure_url': 'pure/portal/20230530/60df78955d12c9ec986c508ca9fe633e.jpg',
                    'name': '536584.jpg'
                }
            ],
            'files': [],
            'authors': [
                {
                    'url': 'portal/20230530/e797a7dbb11a6450ffa4fd0127ff78af.png',
                    'zh_names': '顾佳奇',
                    'en_names': 'Jiaqi GU',
                    'grade': '本2019',
                    'xuehao': '3019208189'
                }
            ]
        },
        'sortOrder': 0,
        'post_title_en': 'A study of innovative interactive product design for learned helplessness among college students',
        'course_zh': '毕业设计',
        'course_en': 'Graduation Design',
        'keywords_zh': '心理健康|认知行为疗法|游戏化',
        'keywords_en': 'Mental Health|Cognitive Behavioral Therapy|Gamification',
        'intro_zh': '大学生正处于人格、自我意识的发展阶段，在疫情、学业、家庭等多方面因素影响下，容易产生各种心理问题，大学生基于认知层面的积极心理改善值得更多关注本设计的将认知行为疗法融入到产品设计中，同时借助游戏化和社交互助帮助大学生提高认知水平，营造积极心理。利用年轻化的设计让年轻人对于积极心理感兴趣、愿意尝试，并从认知层面深度改善大学生心理状态。',
        'intro_en': 'College students are in the developmental stage of personality and self-awareness, and are prone to various psychological problems under the influence of various factors such as epidemic, academics, and family, etc. The positive psychological improvement of college students based on the cognitive level deserves more attention The design incorporates cognitive behavioral therapy into the product design, while using gamification and social support to help college students improve their cognitive level and create a positive psychology. The youthful design makes young people interested in positive psychology and willing to try it, and deeply improves the psychological state of college students from the cognitive level.',
        'tutors_zh': '黄艳群',
        'tutors_en': 'Yanqun HUANG',
        'post_hits': 64,
        'direction_zh': '交互设计',
        'direction_en': 'Interaction Design',
        'category_id': 58,
        'category_name': '共心 Mindoasis'
    },
    {
        'id': 223,
        'parent_id': 0,
        'post_type': 1,
        'post_format': 1,
        'user_id': 54,
        'post_status': 1,
        'is_top': 0,
        'create_time': 1685421169,
        'update_time': 1685621886,
        'published_time': 1685421120,
        'delete_time': 0,
        'post_title': '面向女性的游戏化拳击运动高效训练系统',
        'post_term': '202223-2',
        'post_content': '',
        'post_content_filtered': null,
        'more': {
            'thumbnail': 'portal/20230530/ecaa0cc7e7980a47974e7422f474fda8.png',
            'photos': [
                {
                    'url': 'portal/20230530/41a700d5c3948472eb06f48fa1799ea6.png',
                    'pure_url': 'pure/portal/20230530/41a700d5c3948472eb06f48fa1799ea6.png',
                    'name': '场景图.png'
                },
                {
                    'url': 'portal/20230530/ecaa0cc7e7980a47974e7422f474fda8.png',
                    'pure_url': 'pure/portal/20230530/ecaa0cc7e7980a47974e7422f474fda8.png',
                    'name': '交互方式.4.png'
                },
                {
                    'url': 'portal/20230530/bf3e74747c5f9d65e2332862152a2fd8.png',
                    'pure_url': 'pure/portal/20230530/bf3e74747c5f9d65e2332862152a2fd8.png',
                    'name': '展板_画板 1.png'
                },
                {
                    'url': 'portal/20230530/3aa668257cc96a7a2553a384b619c525.png',
                    'pure_url': 'pure/portal/20230530/3aa668257cc96a7a2553a384b619c525.png',
                    'name': '交互方式.17.png'
                },
                {
                    'url': 'portal/20230530/a12806490acb85f082110803a3b3f95c.png',
                    'pure_url': 'pure/portal/20230530/a12806490acb85f082110803a3b3f95c.png',
                    'name': '交互方式.6.png'
                }
            ],
            'files': [],
            'authors': [
                {
                    'url': 'portal/20230530/263556b660130b5d6cae6b6516be49cb.png',
                    'zh_names': '邱子悦',
                    'en_names': 'Ziyue QIU',
                    'grade': '本2019',
                    'xuehao': '3019201118'
                }
            ]
        },
        'sortOrder': 0,
        'post_title_en': 'Gamified Boxing Training System for Women',
        'course_zh': '毕业设计',
        'course_en': 'Graduation Design',
        'keywords_zh': '拳击健身|女性|人机交互|游戏化',
        'keywords_en': 'Boxing Fitness|Women|Human Computer Interaction|Gamification',
        'intro_zh': '拳击健身不仅有助于女性健身塑形，还能增强她们对自我的认同感和身体力量的感知。然而，青年女性参与拳击健身常面临身体形象阻碍、身体动能不足和缺乏坚持动力等问题。游戏化拳击运动高效训练系统的目的是，鼓励女性加入拳击健身并持之以恒地坚持训练，让她们在拳击健身训练过程中更多地关注主体需求，体会到身体运动对自我的意义。',
        'intro_en': 'Boxing fitness not only contributes to women\'s physical fitness and body shaping but also enhances their self-identity and perception of physical strength. However, young women who engage in boxing fitness often face obstacles related to body image, lack of physical abilities, and a lack of motivation to stay consistent. The purpose of a Gamified Boxing Training System is to encourage women to join boxing fitness and persistently engage in training, allowing them to focus more on individual needs and experience the personal significance of physical exercise during their boxing fitness journey.',
        'tutors_zh': '黄艳群',
        'tutors_en': 'Yanqun HUANG',
        'post_hits': 118,
        'direction_zh': '交互设计',
        'direction_en': 'Interaction Design',
        'category_id': 58,
        'category_name': '共心 Mindoasis'
    },
    {
        'id': 221,
        'parent_id': 0,
        'post_type': 1,
        'post_format': 1,
        'user_id': 52,
        'post_status': 1,
        'is_top': 0,
        'create_time': 1685386624,
        'update_time': 1685441576,
        'published_time': 1685385780,
        'delete_time': 0,
        'post_title': '下肢截骨矫形手术导航平台的触屏终端交互设计研究',
        'post_term': '202223-2',
        'post_content': '',
        'post_content_filtered': null,
        'more': {
            'thumbnail': 'portal/20230530/34f70e479b22d69e51351c90e1033fd1.png',
            'photos': [
                {
                    'url': 'portal/20230530/34f70e479b22d69e51351c90e1033fd1.png',
                    'pure_url': 'pure/portal/20230530/34f70e479b22d69e51351c90e1033fd1.png',
                    'name': '1.png'
                },
                {
                    'url': 'portal/20230530/7351e6ee3c7f922aa03b2a1968a1ce10.png',
                    'pure_url': 'pure/portal/20230530/7351e6ee3c7f922aa03b2a1968a1ce10.png',
                    'name': '5.png'
                },
                {
                    'url': 'portal/20230530/f554e5669a8572ac71aec5a123fab645.png',
                    'pure_url': 'pure/portal/20230530/f554e5669a8572ac71aec5a123fab645.png',
                    'name': '3.png'
                },
                {
                    'url': 'portal/20230530/dc8328a2bfbda3503095a0551adde12b.png',
                    'pure_url': 'pure/portal/20230530/dc8328a2bfbda3503095a0551adde12b.png',
                    'name': '4.png'
                },
                {
                    'url': 'portal/20230530/9bd903761974fd6ca60ba3099a397269.png',
                    'pure_url': 'pure/portal/20230530/9bd903761974fd6ca60ba3099a397269.png',
                    'name': '2.png'
                }
            ],
            'files': [
                {
                    'url': 'portal/20230530/a8a6a12222c8e4f8680c8004a44acd88.mp4',
                    'name': '5月30日 (1).mp4'
                }
            ],
            'authors': [
                {
                    'url': 'portal/20230530/b9f4b4301a56767d007009d6df2def47.jpg',
                    'zh_names': '潘馨',
                    'en_names': 'Xin PAN',
                    'grade': '本2019',
                    'xuehao': '3019201061'
                }
            ]
        },
        'sortOrder': 0,
        'post_title_en': 'Research on interactive design of  touch screen terminal for navigation  platform of lower limb osteotomy  orthopedic surgery',
        'course_zh': '毕业设计',
        'course_en': 'Graduation Design',
        'keywords_zh': '下肢截骨矫形手术|手术导航',
        'keywords_en': 'Lower limb osteotomy orthopedic surgery|Surgery Navigation',
        'intro_zh': '在医疗设备向数字化、信息化转型的时代大背景下，本课题提出了具有一定前瞻性的用于平板端的下肢截骨矫形手术导航平台的设计构想，助力该手术的智能化、规范化、数字化发展，体现学生对医疗行业热点问题的关注与思考。',
        'intro_en': 'In the context of the transformation of medical equipment to digitalization and informatization, this topic proposes the design concept of a certain forward-looking navigation platform for lower limb osteotomy and orthopedic surgery at the plate end to help the intelligent, standardized and digital development of this surgery, reflecting the students\' concern and thinking about the hot issues in the medical industry.',
        'tutors_zh': '邢元',
        'tutors_en': 'Yuan XING',
        'post_hits': 93,
        'direction_zh': '交互设计',
        'direction_en': 'Interaction Design',
        'category_id': 58,
        'category_name': '共心 Mindoasis'
    },
    {
        'id': 220,
        'parent_id': 0,
        'post_type': 1,
        'post_format': 1,
        'user_id': 48,
        'post_status': 1,
        'is_top': 0,
        'create_time': 1685380567,
        'update_time': 1685441570,
        'published_time': 1685378400,
        'delete_time': 0,
        'post_title': '生波—产后抑郁症辅助疗愈智能产品设计',
        'post_term': '202223-2',
        'post_content': '',
        'post_content_filtered': null,
        'more': {
            'thumbnail': 'portal/20230530/dfd942824b5c53d6eb6423f153d5be73.png',
            'photos': [
                {
                    'url': 'portal/20230530/debf4f37e5db57415ed911891e1fddf3.png',
                    'pure_url': 'pure/portal/20230530/debf4f37e5db57415ed911891e1fddf3.png',
                    'name': '1.png'
                },
                {
                    'url': 'portal/20230530/dfd942824b5c53d6eb6423f153d5be73.png',
                    'pure_url': 'pure/portal/20230530/dfd942824b5c53d6eb6423f153d5be73.png',
                    'name': '2.png'
                },
                {
                    'url': 'portal/20230530/4d601155f6c6f57074c144dfa2838f0f.png',
                    'pure_url': 'pure/portal/20230530/4d601155f6c6f57074c144dfa2838f0f.png',
                    'name': '3.png'
                },
                {
                    'url': 'portal/20230530/bb61260a4eb5adb5345e47dad0ab112f.png',
                    'pure_url': 'pure/portal/20230530/bb61260a4eb5adb5345e47dad0ab112f.png',
                    'name': '4.png'
                },
                {
                    'url': 'portal/20230530/f2812730b985eeb64727ffdcab830070.png',
                    'pure_url': 'pure/portal/20230530/f2812730b985eeb64727ffdcab830070.png',
                    'name': '5.png'
                }
            ],
            'files': [
                {
                    'url': 'portal/20230530/bcf7fdda1cfaa42540b0389b319f2133.mp4',
                    'name': '展示视频.mp4'
                }
            ],
            'authors': [
                {
                    'url': 'portal/20230530/6cf559bf7ff1f6bf84e4b21dc8a268df.jpg',
                    'zh_names': '姜昭君',
                    'en_names': 'Zhaojun JIANG',
                    'grade': '本2019',
                    'xuehao': '3019201052'
                }
            ]
        },
        'sortOrder': 0,
        'post_title_en': 'Wave: intelligent product design for postpartum depression treatment',
        'course_zh': '毕业设计',
        'course_en': 'Graduation Design',
        'keywords_zh': '产后抑郁症|辅助疗愈|认知音乐疗法|家人参与',
        'keywords_en': 'Postpartum depression|Assisted healing|Cognitive music therapy|Family involvement',
        'intro_zh': '这是专为轻度产后抑郁患者设计的产品系统，包括硬件交互装置和生波App。交互硬件装置可以辅助音乐疗愈，用户在选择音乐和音效库后，通过触摸装置的不同部位来给音乐点缀不同的音效，该装置也可与家人面对面共同使用，旨在提供家人与产妇交流的机会来引导家人的理解；App包含认知理论学习、社交互动和音乐疗愈等功能，根据认知音乐疗法帮助母亲了解和舒缓自己的情绪，改善母亲的心境和生活质量。',
        'intro_en': 'This product system is designed for patients with mild postpartum depression, including hardware interaction device and generating wave App. The interactive hardware device can assist the music healing. After selecting the music and sound library, the user can touch different parts of the device to decorate the music with different sound effects. The device can also be used with the family face to face, aiming to provide the opportunity for the family to communicate with the mother and guide the understanding of the family. The App includes cognitive theory learning, social interaction, music healing and other functions. According to cognitive music therapy, it can help mothers understand and relieve their emotions and improve their mood and quality of life.',
        'tutors_zh': '黄艳群',
        'tutors_en': 'Yanqun HUANG',
        'post_hits': 122,
        'direction_zh': '交互设计|装置设计',
        'direction_en': 'Interaction Design|Installation Design',
        'category_id': 58,
        'category_name': '共心 Mindoasis'
    },
    {
        'id': 216,
        'parent_id': 0,
        'post_type': 1,
        'post_format': 1,
        'user_id': 47,
        'post_status': 1,
        'is_top': 0,
        'create_time': 1685373879,
        'update_time': 1685613259,
        'published_time': 1685370780,
        'delete_time': 0,
        'post_title': '面向久坐人群的桌边运动产品设计',
        'post_term': '202223-2',
        'post_content': '',
        'post_content_filtered': null,
        'more': {
            'thumbnail': 'portal/20230601/929d491365b0fbfe15b4c1aba91c839a.png',
            'photos': [
                {
                    'url': 'portal/20230601/929d491365b0fbfe15b4c1aba91c839a.png',
                    'pure_url': 'pure/portal/20230601/929d491365b0fbfe15b4c1aba91c839a.png',
                    'name': 'Frame 4.png'
                },
                {
                    'url': 'portal/20230601/9d8a8e5821c2746f3479c724c4c092eb.png',
                    'pure_url': 'pure/portal/20230601/9d8a8e5821c2746f3479c724c4c092eb.png',
                    'name': 'Frame 7.png'
                },
                {
                    'url': 'portal/20230601/7a9955fc5c4c0997d9ed0be7097a911e.png',
                    'pure_url': 'pure/portal/20230601/7a9955fc5c4c0997d9ed0be7097a911e.png',
                    'name': 'Frame 8.png'
                },
                {
                    'url': 'portal/20230601/a97cc8b923fddb49338d5f7b3db46023.png',
                    'pure_url': 'pure/portal/20230601/a97cc8b923fddb49338d5f7b3db46023.png',
                    'name': 'Frame 5.png'
                },
                {
                    'url': 'portal/20230601/613f163ba7df2e35c477ff0bd823725a.png',
                    'pure_url': 'pure/portal/20230601/613f163ba7df2e35c477ff0bd823725a.png',
                    'name': 'Frame 6.png'
                }
            ],
            'files': [],
            'authors': [
                {
                    'url': 'portal/20230529/17b9ac22db0d67b18a286e8331fbf438.jpg',
                    'zh_names': '刘淑珊娜',
                    'en_names': 'Susana LIU',
                    'grade': '本2019',
                    'xuehao': '6319000162'
                }
            ]
        },
        'sortOrder': 3,
        'post_title_en': 'Design of desk-side exercise products for sedentary people',
        'course_zh': '毕业设计',
        'course_en': 'Graduation Design',
        'keywords_zh': '久坐人群|游戏化设计|模块化设计|人机工程学',
        'keywords_en': 'Sedentary population,|gamification design| modular design| ergonomics',
        'intro_zh': '这是一款专为久坐人群设计的健身桌边设备，用户可自行在距离桌边5m²处安装。在其范围内，任何时候都可以进行多种健身活动，以减少久坐现象的发生，减轻长时间坐着所造成的身体问题。',
        'intro_en': 'This is a fitness tableside device designed for sedentary people and can be installed by users up to 5 m² from the table. Within its range, a variety of fitness activities can be performed at any time to reduce the occurrence of sedentary phenomena and alleviate the physical problems caused by prolonged sitting.',
        'tutors_zh': '黄艳群',
        'tutors_en': 'Yanqun HUANG',
        'post_hits': 62,
        'direction_zh': '产品设计',
        'direction_en': 'product design',
        'category_id': 58,
        'category_name': '共心 Mindoasis'
    },
    {
        'id': 206,
        'parent_id': 0,
        'post_type': 1,
        'post_format': 1,
        'user_id': 45,
        'post_status': 1,
        'is_top': 0,
        'create_time': 1685333974,
        'update_time': 1685441548,
        'published_time': 1685333040,
        'delete_time': 0,
        'post_title': '基于用户心理分析的医护常识普及平台系统研究与设计',
        'post_term': '202223-1',
        'post_content': '',
        'post_content_filtered': null,
        'more': {
            'thumbnail': 'portal/20230529/8de16b6d4abd3b2deabaccf9c6c149ea.png',
            'photos': [
                {
                    'url': 'portal/20230529/8de16b6d4abd3b2deabaccf9c6c149ea.png',
                    'pure_url': 'pure/portal/20230529/8de16b6d4abd3b2deabaccf9c6c149ea.png',
                    'name': '1-1.png'
                },
                {
                    'url': 'portal/20230529/5a28185f041e8b4654118ecceb43d2bf.png',
                    'pure_url': 'pure/portal/20230529/5a28185f041e8b4654118ecceb43d2bf.png',
                    'name': '2 (3).png'
                },
                {
                    'url': 'portal/20230529/8bd10a81a49dc3f33a08682747676c58.png',
                    'pure_url': 'pure/portal/20230529/8bd10a81a49dc3f33a08682747676c58.png',
                    'name': '3.png'
                },
                {
                    'url': 'portal/20230529/4ae6b9730c8a42ad5473d6afbda45864.png',
                    'pure_url': 'pure/portal/20230529/4ae6b9730c8a42ad5473d6afbda45864.png',
                    'name': '2 (1).png'
                },
                {
                    'url': 'portal/20230529/913ec9fb5918ba5cca7bd1d267acf793.png',
                    'pure_url': 'pure/portal/20230529/913ec9fb5918ba5cca7bd1d267acf793.png',
                    'name': '2 (2).png'
                }
            ],
            'files': [],
            'authors': [
                {
                    'url': 'portal/20230529/f1d2421f8d8caf8d0d0bf17752b87d64.jpg',
                    'zh_names': '韦博思',
                    'en_names': 'Bosi WEI',
                    'grade': '本2019',
                    'xuehao': '3019201024'
                }
            ]
        },
        'sortOrder': 0,
        'post_title_en': 'Research and design of a health care knowledge dissemination platform system based on user analysis',
        'course_zh': '毕业设计',
        'course_en': 'Graduation Design',
        'keywords_zh': '医护常识|医患关系|用户体验|界面设计',
        'keywords_en': 'Healthcare knowledge|Doctor-patient Relationship|User Experience|UI/UX',
        'intro_zh': '随着现代医学系统的完善，医护人员在民众的生活中越来越重要，医疗系统变成我们生活中的必需品，当人们对疾病及医护过程的了解度不够、又或对医护人员的信任度不足够时，很容易会产生医患磨擦，除了极端的肢体冲突外，患方亦可轻易对医护人员造成不必要的伤害，即使是简单的语言甚至是社交平台的发表和评论功能等方式，都可以对医护人员构成不同程度的精神伤害。因此本课题以研究与设计一种让大众对特定的疾病及相关的医护工作加深认知，以使医患关系得以改善的体验平台系统。',
        'intro_en': 'With the improvement of the modern medical system, healthcare professionals are becoming more and more important in people\'s lives, and the medical system has become a necessity in our lives. Even simple words, such as posting and commenting on social media platforms, can cause different degrees of psychological harm to health care professionals. Therefore, this project aims to research and design an experience platform system to improve the doctor-patient relationship by raising public awareness of diseases and its related medical care.',
        'tutors_zh': '杨君宇',
        'tutors_en': 'Junyu YANG',
        'post_hits': 60,
        'direction_zh': '界面设计|交互设计',
        'direction_en': 'UI/UX|Interaction Design',
        'category_id': 58,
        'category_name': '共心 Mindoasis'
    },
    {
        'id': 194,
        'parent_id': 0,
        'post_type': 1,
        'post_format': 1,
        'user_id': 56,
        'post_status': 1,
        'is_top': 0,
        'create_time': 1685261303,
        'update_time': 1685616991,
        'published_time': 1685259900,
        'delete_time': 0,
        'post_title': '针对院外心脏骤停的急救无人机',
        'post_term': '202223-2',
        'post_content': '',
        'post_content_filtered': null,
        'more': {
            'thumbnail': 'portal/20230528/871a3159b94df795dd1fd82bba4bf4e3.png',
            'photos': [
                {
                    'url': 'portal/20230528/871a3159b94df795dd1fd82bba4bf4e3.png',
                    'pure_url': 'pure/portal/20230528/871a3159b94df795dd1fd82bba4bf4e3.png',
                    'name': '1.jpg'
                },
                {
                    'url': 'portal/20230528/f3595321a54d5823afc7d11210b505d9.png',
                    'pure_url': 'pure/portal/20230528/f3595321a54d5823afc7d11210b505d9.png',
                    'name': '2.jpg'
                },
                {
                    'url': 'portal/20230601/22e29ba5d7ddcddcb03d3a45b5eba9bf.jpg',
                    'pure_url': 'pure/portal/20230601/22e29ba5d7ddcddcb03d3a45b5eba9bf.jpg',
                    'name': '未标题-1-01.jpg'
                },
                {
                    'url': 'portal/20230528/85df51a30304bc20a483beb1e98c50cc.png',
                    'pure_url': 'pure/portal/20230528/85df51a30304bc20a483beb1e98c50cc.png',
                    'name': '4.jpg'
                },
                {
                    'url': 'portal/20230528/1d7a5eabee4915d62bb1dca89f5dc6f0.png',
                    'pure_url': 'pure/portal/20230528/1d7a5eabee4915d62bb1dca89f5dc6f0.png',
                    'name': '5.jpg'
                }
            ],
            'files': [],
            'authors': [
                {
                    'url': 'portal/20230528/140cde575b8b9d77d7c6ca2b899a70c0.png',
                    'zh_names': '白子轩',
                    'en_names': 'Zixuan BAI',
                    'grade': '本2019',
                    'xuehao': '3019209224'
                }
            ]
        },
        'sortOrder': 0,
        'post_title_en': 'Emergency Rescue Drone for Out-of-Hospital Cardiac Arrest',
        'course_zh': '毕业设计',
        'course_en': 'Graduation Design',
        'keywords_zh': '院外心脏骤停|急救无人机|可行性估计|远程医疗|除颤工作',
        'keywords_en': 'Out-of-hospital cardiac arrest|Emergency medical drones|Feasibility assessment|Remote healthcare|Defibrillation work',
        'intro_zh': '本研究以城区短程飞行为任务需求，设计了一款能够搭载自动除颤器的六旋翼无人机。当患者位置确定后，无人机通过 GPS 定位系统飞往患者附近，操作人员再借助摄像头手动操控无人机准确定位。无人机降落后，旁观者可从侧面打开存储设备，取出其中的自动除颤器，并在远程医疗人员的指导下完成除颤工作。',
        'intro_en': 'For the task requirement of short-range flights in urban areas, this study designs a hexacopter drone capable of carrying an automated external defibrillator. Once the patient\'s location is determined, the drone flies to the vicinity of the patient using a GPS positioning system. The operator then manually controls the drone with the help\r\nof a camera to accurately position it. After landing, onlookers can open the storage device from the side, retrieve the automated external defibrillator, and perform defibrillation under the guidance of remote medical personnel.',
        'tutors_zh': '李擎炜',
        'tutors_en': 'Qingwei LI',
        'post_hits': 53,
        'direction_zh': '产品设计',
        'direction_en': 'Product Design',
        'category_id': 58,
        'category_name': '共心 Mindoasis'
    },
    {
        'id': 193,
        'parent_id': 0,
        'post_type': 1,
        'post_format': 1,
        'user_id': 48,
        'post_status': 1,
        'is_top': 0,
        'create_time': 1685260911,
        'update_time': 1685441539,
        'published_time': 1685259540,
        'delete_time': 0,
        'post_title': '缓解大学生 “社恐”行为的交互游戏研究',
        'post_term': '202223-2',
        'post_content': '',
        'post_content_filtered': null,
        'more': {
            'thumbnail': 'portal/20230528/0a1ed546ff413f1dde65bc7ad52d55f2.jpg',
            'photos': [
                {
                    'url': 'portal/20230528/4c68eeac669d5d8bfe84f4310a5ceb4e.jpg',
                    'pure_url': 'pure/portal/20230528/4c68eeac669d5d8bfe84f4310a5ceb4e.jpg',
                    'name': '1.jpg'
                },
                {
                    'url': 'portal/20230528/d03eda5683c95bdce96340f2e131e596.jpg',
                    'pure_url': 'pure/portal/20230528/d03eda5683c95bdce96340f2e131e596.jpg',
                    'name': '2.jpg'
                },
                {
                    'url': 'portal/20230528/cd83593ede62ed4d2d7b25bc10658c2a.jpg',
                    'pure_url': 'pure/portal/20230528/cd83593ede62ed4d2d7b25bc10658c2a.jpg',
                    'name': '3.jpg'
                },
                {
                    'url': 'portal/20230528/cd190eec4be962cba3e46be2b2458e65.jpg',
                    'pure_url': 'pure/portal/20230528/cd190eec4be962cba3e46be2b2458e65.jpg',
                    'name': '4.jpg'
                },
                {
                    'url': 'portal/20230528/672ded6c4451f190451cd7941073cbf1.jpg',
                    'pure_url': 'pure/portal/20230528/672ded6c4451f190451cd7941073cbf1.jpg',
                    'name': '5.jpg'
                }
            ],
            'files': [],
            'authors': [
                {
                    'url': 'portal/20230528/fc89addc5c43b9eef0c1f8fe1d0d3282.jpg',
                    'zh_names': '陈宸',
                    'en_names': 'Chen CHEN',
                    'grade': '本2019',
                    'xuehao': '3019201047'
                }
            ]
        },
        'sortOrder': 0,
        'post_title_en': 'Research on Interactive Games to Alleviate College Students\' \'Social Terror\' Behavior',
        'course_zh': '毕业设计',
        'course_en': 'Graduation Design',
        'keywords_zh': '社恐|大学生|交互游戏设计|软件设计|社交工坊',
        'keywords_en': 'Social Terrorism|College students|Interactive Game Design|Software Design|Social Workshop',
        'intro_zh': '大学生群体是未来劳动力市场的重要力量，肩负着中华民族复兴的重任。但随着时代的快速变迁和互联网的迅速发展，“社恐”逐渐成为了困扰青年人际交往和阻碍青年全面发展的重要因素。本研究旨在对大学生群体的“社恐”现象进行深入探索，为大学生群体打造提供社交指导的软硬件游戏系统，促进青年身心和谐发展。',
        'intro_en': 'College students are an important force in the future labor market and shoulder the important task of the rejuvenation of the Chinese nation. However, with the rapid change of The Times and the rapid development of the Internet, \'social terrorism\' has gradually become an important factor that troubles young people\'s interpersonal communication and hinders their all-round development. The purpose of this study is to deeply explore the phenomenon of \'social terrorism\' among college students, and to build a hardware and software game system that provides social guidance for college students, so as to promote the harmonious development of young people\'s body and mind.',
        'tutors_zh': '黄艳群',
        'tutors_en': 'Yanqun HUANG',
        'post_hits': 72,
        'direction_zh': '产品设计|界面设计',
        'direction_en': 'Product Design | UI/UX',
        'category_id': 58,
        'category_name': '共心 Mindoasis'
    },
    {
        'id': 192,
        'parent_id': 0,
        'post_type': 1,
        'post_format': 1,
        'user_id': 49,
        'post_status': 1,
        'is_top': 0,
        'create_time': 1685259368,
        'update_time': 1685441533,
        'published_time': 1685257800,
        'delete_time': 0,
        'post_title': '具有情绪舒缓作用的智能灯具设计',
        'post_term': '202223-2',
        'post_content': '',
        'post_content_filtered': null,
        'more': {
            'thumbnail': 'portal/20230528/a4a649466174e95b801ae17d6e6ebcfc.jpg',
            'photos': [
                {
                    'url': 'portal/20230528/18e26347ff2d58d6a705fdc13545feee.jpg',
                    'pure_url': 'pure/portal/20230528/18e26347ff2d58d6a705fdc13545feee.jpg',
                    'name': '1.jpg'
                },
                {
                    'url': 'portal/20230528/2797394dbeb0155080438d6f00b24d3d.jpg',
                    'pure_url': 'pure/portal/20230528/2797394dbeb0155080438d6f00b24d3d.jpg',
                    'name': '2.jpg'
                },
                {
                    'url': 'portal/20230528/10c71bac7887a0b272fefb7640c31a90.jpg',
                    'pure_url': 'pure/portal/20230528/10c71bac7887a0b272fefb7640c31a90.jpg',
                    'name': '3.jpg'
                },
                {
                    'url': 'portal/20230528/039f746c1dbe79c76f98d7816b0a58b9.jpg',
                    'pure_url': 'pure/portal/20230528/039f746c1dbe79c76f98d7816b0a58b9.jpg',
                    'name': '4.jpg'
                },
                {
                    'url': 'portal/20230528/d9f11ef0490984217450a24f78fb1598.jpg',
                    'pure_url': 'pure/portal/20230528/d9f11ef0490984217450a24f78fb1598.jpg',
                    'name': '5.jpg'
                }
            ],
            'files': [],
            'authors': [
                {
                    'url': 'portal/20230528/90a8d0ef4d4eba61494dad0afb49a352.jpg',
                    'zh_names': '江泽宇',
                    'en_names': 'Zeyu JIANG',
                    'grade': '本2019',
                    'xuehao': '3019205487'
                }
            ]
        },
        'sortOrder': 0,
        'post_title_en': 'Emotionally Relaxing Intelligent Lighting Design',
        'course_zh': '毕业设计',
        'course_en': 'Graduation Design',
        'keywords_zh': '情绪舒缓|自然意象|智能|灯具',
        'keywords_en': 'Emotional Relaxation|Natural Imagery|Intelligent|Lighting Fixtures',
        'intro_zh': '当代青年普遍存在焦虑心理和抑郁情绪，现有的教育模式、家庭教养方式及社会压力都对青年群体的心理健康产生了负面影响，在面对压力和生活不确定性时青年群体常常感到迷茫和焦虑。然而，社会和学校缺乏有效可行的干预手段，导致该群体的心理问题无法得到解决。\r\n因此，现代青年需要一种新的渠道来缓解情绪、调节压力，并及时认知自己的情绪状态，以降低抑郁和焦虑等负面情绪的产生。',
        'intro_en': 'Contemporary youth commonly experience anxiety and depressive emotions. Existing educational models, parenting styles, and societal pressures have negatively impacted the mental well-being of young people. When faced with stress and life uncertainties, young individuals often feel lost and anxious. However, there is a lack of effective and viable interventions from society and schools, resulting in unresolved psychological issues among this demographic.\r\nTherefore, modern youth require a new avenue to alleviate their emotions, regulate stress, and promptly recognize their emotional states, in order to reduce the emergence of negative emotions such as depression and anxiety.',
        'tutors_zh': '马雨萌',
        'tutors_en': 'Yumeng MA',
        'post_hits': 88,
        'direction_zh': '产品设计',
        'direction_en': 'Product Design',
        'category_id': 58,
        'category_name': '共心 Mindoasis'
    },
    {
        'id': 190,
        'parent_id': 0,
        'post_type': 1,
        'post_format': 1,
        'user_id': 45,
        'post_status': 1,
        'is_top': 0,
        'create_time': 1685257920,
        'update_time': 1685441528,
        'published_time': 1685256480,
        'delete_time': 0,
        'post_title': '一种医用旋转复合超声骨刀的创新设计与研究',
        'post_term': '202223-2',
        'post_content': '',
        'post_content_filtered': null,
        'more': {
            'thumbnail': 'portal/20230528/3426b42e30d202a49fc049536707f522.jpg',
            'photos': [
                {
                    'url': 'portal/20230528/3426b42e30d202a49fc049536707f522.jpg',
                    'pure_url': 'pure/portal/20230528/3426b42e30d202a49fc049536707f522.jpg',
                    'name': '横图3.jpg'
                },
                {
                    'url': 'portal/20230528/a567cf090a45dab459b97373c5bba59d.jpg',
                    'pure_url': 'pure/portal/20230528/a567cf090a45dab459b97373c5bba59d.jpg',
                    'name': '横图4.jpg'
                },
                {
                    'url': 'portal/20230528/3b990588f7c962f994cfd0ce36066360.jpg',
                    'pure_url': 'pure/portal/20230528/3b990588f7c962f994cfd0ce36066360.jpg',
                    'name': '竖图.jpg'
                },
                {
                    'url': 'portal/20230528/d1dfa59043d0dfd538e82ad6b985843a.jpg',
                    'pure_url': 'pure/portal/20230528/d1dfa59043d0dfd538e82ad6b985843a.jpg',
                    'name': '横图1.jpg'
                },
                {
                    'url': 'portal/20230528/d28815aa90b89597859142d3a86443c9.jpg',
                    'pure_url': 'pure/portal/20230528/d28815aa90b89597859142d3a86443c9.jpg',
                    'name': '横图2.jpg'
                }
            ],
            'files': [],
            'authors': [
                {
                    'url': 'portal/20230528/c6e8ea5e8075ce3ab06eae1116515a25.jpg',
                    'zh_names': '张以琳',
                    'en_names': 'Yilin ZHANG',
                    'grade': '本2019',
                    'xuehao': '3019201041'
                }
            ]
        },
        'sortOrder': 0,
        'post_title_en': 'Innovative design and research of a medical rotary composite ultrasonic osteotome',
        'course_zh': '毕业设计',
        'course_en': 'Graduation Design',
        'keywords_zh': '医疗|手术|超声',
        'keywords_en': 'Medical|Surgery|Ultrasound',
        'intro_zh': '本课题针对旋转复合超声骨刀的设计参照了近些年来国内外研究现状，超声骨刀市场数据以及市场同类产品；综合运用查找文献，用户研究，市场调研等研究方法，对患者和医护人员的身体、心理和情感需求进行分析。综合采用医疗手术产品设计学，人机工程学，设计材料学，人机交互等对产品进行设计。旨在为骨科手术切削提供新的骨切割器械，并通过人机交互设计提高医护人员使用手术器械的便携性与舒适性，尽可能降低工作的疲劳程度。',
        'intro_en': 'According to the research status at home and abroad in recent years, the design of rotary composite ultrasonic osteotome, the market data of ultrasonic osteotome and similar products in the market are referred to in this paper; Comprehensive use of literature search, user research, market research and other research methods to analyze the physical, psychological and emotional needs of patients and medical staff. Medical and surgical product design, ergonomics, design materials, human-computer interaction, etc. are comprehensively used to design the product. The aim is to provide new bone cutting instruments for orthopedic surgical cutting, improve the portability and comfort of medical staff using surgical instruments through human-computer interaction design, and reduce the fatigue degree of work as much as possible.',
        'tutors_zh': '宋晓菲',
        'tutors_en': 'Xiaofei SONG',
        'post_hits': 50,
        'direction_zh': '产品设计',
        'direction_en': 'Product Design',
        'category_id': 58,
        'category_name': '共心 Mindoasis'
    },
    {
        'id': 186,
        'parent_id': 0,
        'post_type': 1,
        'post_format': 1,
        'user_id': 49,
        'post_status': 1,
        'is_top': 0,
        'create_time': 1685254577,
        'update_time': 1685441523,
        'published_time': 1685253960,
        'delete_time': 0,
        'post_title': '截骨手术虚拟培训平台',
        'post_term': '202223-2',
        'post_content': '',
        'post_content_filtered': null,
        'more': {
            'thumbnail': 'portal/20230528/787562b3dd0a9bc96105950cb896411e.jpg',
            'photos': [
                {
                    'url': 'portal/20230528/787562b3dd0a9bc96105950cb896411e.jpg',
                    'pure_url': 'pure/portal/20230528/787562b3dd0a9bc96105950cb896411e.jpg',
                    'name': '1.jpg'
                },
                {
                    'url': 'portal/20230528/89415271d4ab4dc3d2134333a69ed6dc.jpg',
                    'pure_url': 'pure/portal/20230528/89415271d4ab4dc3d2134333a69ed6dc.jpg',
                    'name': '2.jpg'
                },
                {
                    'url': 'portal/20230528/ae3372b7495ae5b01095b5906c754e88.jpg',
                    'pure_url': 'pure/portal/20230528/ae3372b7495ae5b01095b5906c754e88.jpg',
                    'name': '3.jpg'
                },
                {
                    'url': 'portal/20230528/b02f72ff2531aef75806b1cd81dd5a46.jpg',
                    'pure_url': 'pure/portal/20230528/b02f72ff2531aef75806b1cd81dd5a46.jpg',
                    'name': '4.jpg'
                },
                {
                    'url': 'portal/20230528/f92bd3766d0a165ecedcb77ff2cfbf04.jpg',
                    'pure_url': 'pure/portal/20230528/f92bd3766d0a165ecedcb77ff2cfbf04.jpg',
                    'name': '5.jpg'
                }
            ],
            'files': [],
            'authors': [
                {
                    'url': 'portal/20230528/30ec895e732d1272e5ce6ce5bf2217a9.jpg',
                    'zh_names': '秦福祺',
                    'en_names': 'Fuqi QIN',
                    'grade': '本2019',
                    'xuehao': '3019201027'
                }
            ]
        },
        'sortOrder': 0,
        'post_title_en': 'Virtual training platform for osteotomy surgery',
        'course_zh': '毕业设计',
        'course_en': 'Graduation Design',
        'keywords_zh': '医疗|可视化|培训',
        'keywords_en': 'Medical|Visualization|Training',
        'intro_zh': '一款有关于截骨手术的培训平台，通过可视化设计方法呈现数值及非数值信息，来使参训医师决策更加准确高效。',
        'intro_en': 'A training platform about osteotomy surgery, which presents  numerical and non-numerical  information through visual design  method, so as to make the decision  of participating physicians more  accurate and efficient.',
        'tutors_zh': '邢元',
        'tutors_en': 'Yuan XING',
        'post_hits': 49,
        'direction_zh': '界面设计',
        'direction_en': 'UI',
        'category_id': 58,
        'category_name': '共心 Mindoasis'
    },
    {
        'id': 187,
        'parent_id': 0,
        'post_type': 1,
        'post_format': 1,
        'user_id': 46,
        'post_status': 1,
        'is_top': 0,
        'create_time': 1685256025,
        'update_time': 1685441511,
        'published_time': 1685253000,
        'delete_time': 0,
        'post_title': '面向闭合手术的超微创医用水刀创新设计与研究',
        'post_term': '202223-2',
        'post_content': '',
        'post_content_filtered': null,
        'more': {
            'thumbnail': 'portal/20230528/417ab9ea1223e62d37018511b7351b64.jpeg',
            'photos': [
                {
                    'url': 'portal/20230528/5c7ec92d4d8b091d39b39a140d9fdaf4.jpeg',
                    'pure_url': 'pure/portal/20230528/5c7ec92d4d8b091d39b39a140d9fdaf4.jpeg',
                    'name': 'WechatIMG19.jpeg'
                },
                {
                    'url': 'portal/20230528/f976e968be1cdfab125a186aa780a4ff.jpeg',
                    'pure_url': 'pure/portal/20230528/f976e968be1cdfab125a186aa780a4ff.jpeg',
                    'name': 'WechatIMG20.jpeg'
                },
                {
                    'url': 'portal/20230528/20de448966718b07c8aeec3aef480db6.jpeg',
                    'pure_url': 'pure/portal/20230528/20de448966718b07c8aeec3aef480db6.jpeg',
                    'name': 'WechatIMG21.jpeg'
                },
                {
                    'url': 'portal/20230528/38167b35740c48d15d7c33aa221ab5a5.jpeg',
                    'pure_url': 'pure/portal/20230528/38167b35740c48d15d7c33aa221ab5a5.jpeg',
                    'name': 'WechatIMG22.jpeg'
                },
                {
                    'url': 'portal/20230528/eca22de5960585d38b9f60a897bc3ce7.jpeg',
                    'pure_url': 'pure/portal/20230528/eca22de5960585d38b9f60a897bc3ce7.jpeg',
                    'name': 'WechatIMG23.jpeg'
                }
            ],
            'files': [
                {
                    'url': 'portal/20230528/26077b0143819e0557d714e2790b22cb.mp4',
                    'name': 'WeChat_20230515101438.mp4'
                }
            ],
            'authors': [
                {
                    'url': 'portal/20230528/145c39a8757e651e0d1c3c3c53fb2859.jpg',
                    'zh_names': '周新宇',
                    'en_names': 'Xinyu ZHOU',
                    'grade': '本2019',
                    'xuehao': '3019201032'
                }
            ]
        },
        'sortOrder': 0,
        'post_title_en': 'Innovative design and research of ultramicro medical water knife for closed surgery',
        'course_zh': '毕业设计',
        'course_en': 'Graduation Design',
        'keywords_zh': '肌筋膜疼痛综合症|水射流|医用水刀',
        'keywords_en': 'Myofascial pain syndrome|Water jet|Medical water knife',
        'intro_zh': '肌筋膜疼痛综合征是常见颈肩、腰背及关节周围疼痛的主要“元凶”，可诱发早期的肌紧张和晚期的肌痉挛，使肌肉组织长期得不到休息。从而使症状加重，形成恶性循环，最终甚至会产生活动功能障碍。而传统的治疗方法或效果不显著或创伤过大，不能解决根本问题。本项目拟将水射流技术应用于肌筋膜疼痛综合征治疗上，以实现超微创、减小疼痛的作用，在治疗手段上实现革新。其次，用水射流技术进行肌筋膜松解的医用水刀设计，辅助临床医生微创且高效的完成肌筋膜综合征的治疗。',
        'intro_en': 'Myofascial pain syndrome is the main culprit of common neck,shoulder, lower back and peri-joint pain, which can induce earlymuscle tension and late muscle spasm, so that muscle tissuecannot rest for a long time. As a result, symptoms are exacerbated, a vicious cycle is formed, and eventually even active dysfunction can occur. Traditional treatments are either ineffective or tootraumatic to address the underlying problem. This project intendsto apply waterjet technology to the treatment of myofascial painsyndrome to achieve ultra-minimally invasive and pain-reducingeffects, and achieve innovation in treatment methods. Secondly,the medical waterjet design of myofascial release with waterjettechnology assists clinicians to minimally invasive and efficienttreatment of myofascial syndrome.',
        'tutors_zh': '宋晓菲',
        'tutors_en': 'Xiaofei Song',
        'post_hits': 55,
        'direction_zh': '产品设计',
        'direction_en': 'Product Design',
        'category_id': 58,
        'category_name': '共心 Mindoasis'
    },
    {
        'id': 185,
        'parent_id': 0,
        'post_type': 1,
        'post_format': 1,
        'user_id': 49,
        'post_status': 1,
        'is_top': 0,
        'create_time': 1685252525,
        'update_time': 1685441504,
        'published_time': 1685252160,
        'delete_time': 0,
        'post_title': '医疗器械安全有效评价平台设计研究',
        'post_term': '202223-2',
        'post_content': '',
        'post_content_filtered': null,
        'more': {
            'thumbnail': 'portal/20230528/1b757fb09945a4cb9673a6dfd78ed40e.jpg',
            'photos': [
                {
                    'url': 'portal/20230528/9b80769e627e3388be1f928eaab3d616.jpg',
                    'pure_url': 'pure/portal/20230528/9b80769e627e3388be1f928eaab3d616.jpg',
                    'name': '11_画板 1.jpg'
                },
                {
                    'url': 'portal/20230528/67c8974e16503249d3f6b9b9090ae00a.jpg',
                    'pure_url': 'pure/portal/20230528/67c8974e16503249d3f6b9b9090ae00a.jpg',
                    'name': '2_画板 1.jpg'
                },
                {
                    'url': 'portal/20230528/b0501c4ae989bd99858d81e8c59da057.jpg',
                    'pure_url': 'pure/portal/20230528/b0501c4ae989bd99858d81e8c59da057.jpg',
                    'name': '3.jpg'
                },
                {
                    'url': 'portal/20230528/1b757fb09945a4cb9673a6dfd78ed40e.jpg',
                    'pure_url': 'pure/portal/20230528/1b757fb09945a4cb9673a6dfd78ed40e.jpg',
                    'name': '封面1.jpg'
                },
                {
                    'url': 'portal/20230528/0588d1a8208deaa3a0bb502477a81e02.jpg',
                    'pure_url': 'pure/portal/20230528/0588d1a8208deaa3a0bb502477a81e02.jpg',
                    'name': '4_画板 1.jpg'
                }
            ],
            'files': [
                {
                    'url': 'portal/20230528/6ff5eee087f79779ac2b5d901b34c674.mp4',
                    'name': '平台介绍.mp4'
                }
            ],
            'authors': [
                {
                    'url': 'portal/20230528/2c3c14e9396ffee50f7bb253fde74693.jpg',
                    'zh_names': '李宝婷',
                    'en_names': 'Baoting LI',
                    'grade': '本2019',
                    'xuehao': '3019201050'
                }
            ]
        },
        'sortOrder': 0,
        'post_title_en': 'Research on the design of a platform for safe and effective evaluation of medical devices',
        'course_zh': '毕业设计',
        'course_en': 'Graduation Design',
        'keywords_zh': '医疗器械评价|界面设计|设计原则|网页平台',
        'keywords_en': 'Medical Device Evaluation|Interface Design|Design Principles|Web Platform',
        'intro_zh': '本课题制作了一款为企业用户提供在线医疗器械评价服务的平台，主要聚焦在界面设计及其可用性测试上，根据测试结果对界面进行更新迭代。',
        'intro_en': 'This project produces a platform to provide online medical device evaluation services for enterprise users, mainly focusing on interface design and usability testing, and updating and iterating the interface according to the test results.',
        'tutors_zh': '邢元',
        'tutors_en': 'Yuan XING',
        'post_hits': 58,
        'direction_zh': '界面设计',
        'direction_en': 'UX',
        'category_id': 58,
        'category_name': '共心 Mindoasis'
    }
]
