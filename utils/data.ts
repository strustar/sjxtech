// utils/data.ts

export const getAppGalleryData = () => {
  return {
  images: [
    {
      src: '/images/support.png',
      title: '시스템 동바리(비계) 설계 자동화',
      url: 'https://support.streamlit.app',
      description: '시스템 동바리(비계) 설계 검토 보고서',
    },
  ],
};
}

export const getContentData = () => {
  return {
  images: [
    {
      src: '/images/support.png',
      title: '시스템 동바리(비계) 설계 자동화',
      url: 'https://support.streamlit.app',
      description: '시스템 동바리(비계) 설계 검토 보고서',
    },
    {
      src: '/images/beam.png',
      title: '보(Beam) 설계 자동화',
      url: 'https://beam-frp.streamlit.app',
      description: '보 설계 비교 : RC vs. FRP Concrete',
    },
    {
      src: '/images/column.png',
      title: '기둥(Column) 설계 자동화',
      url: 'https://column.streamlit.app',
      description: '기둥 설계 비교 : RC vs. FRP Concrete',
    },
  ],
  videos: [
    {
      src: '/images/support.webm',
      title: '시스템 동바리(비계) 설계 자동화',
      url: 'https://support.streamlit.app',
      description: '시스템 동바리(비계) 설계 검토 보고서',
    },
    {
      src: '/images/beam.webm',
      title: '보(Beam) 설계 자동화',
      url: 'https://beam-frp.streamlit.app',
      description: '보 설계 비교 : RC vs. FRP Concrete',
    },
    {
      src: '/images/column.webm',
      title: '기둥(Column) 설계 자동화',
      url: 'https://column.streamlit.app',
      description: '기둥 설계 비교 : RC vs. FRP Concrete',
    },
  ],
  sections: [
    {
      title: 'AI 기반 업무 자동화',
      messages: [
        'AI로 설계의 한계를 넘어, 새로운 가능성을 열다.',
        '인공지능이 자동화하는 미래, 지금 만나보세요.',
        'AI 기반 자동 설계 솔루션으로 생산성과 혁신을 극대화하세요.',
      ],
    },
    {
      title: 'AI 기반 설계 최적화',
      messages: [
        'AI 기반 최적화 기술로 효율성의 새로운 기준을 제시합니다.',
        '데이터 기반 지능형 최적화, 최고의 결과를 약속합니다.',
        'AI가 찾아내는 최적의 솔루션, 당신의 비즈니스를 혁신합니다.',
      ],
    },
    {
      title: 'AI 기반 업무 혁신',
      messages: [
        'AI와 함께, 업무의 미래를 혁신하세요.',
        '인공지능으로 업무 효율을 극대화하고, 새로운 가치를 창출합니다.',
        'AI 기반 업무 혁신으로 당신의 시간을 더 가치 있게 만들어 드립니다.',
      ],
    },
    {
      title: '파이썬 코딩 (RAG)',
      messages: [
        '파이썬과 AI의 만남, 무한한 가능성을 코드로 구현하다.',
        'AI의 고질적인 문제인 헐루시네이션, 파이썬 RAG로 그 해답을 찾다.',
        '파이썬 기반 AI 솔루션 개발, 미래를 향한 코딩 여정을 함께합니다.',
      ],
    },
  ],
};
}


export const getAIToolsData = () => {
  return {
    chatbots: [
      {
        title: 'ChatGPT',
        description: '• OpenAI의 GPT 기반 AI 챗봇. • 코딩, 분석, 창작 등 다양한 작업',
        url: 'https://chat.openai.com',
        category: 'AI 챗봇',
      },
      {
        title: 'Claude',
        description: '• Anthropic의 강력한 AI. • 긴 문서 분석, 코딩, 학술적 작업에 탁월',
        url: 'https://claude.ai',
        category: 'AI 챗봇',
      },
      {
        title: 'Gemini',
        description: '• Google의 멀티모달 AI. • 텍스트, 이미지, 코드를 통합 처리',
        url: 'https://gemini.google.com',
        category: 'AI 챗봇',
      },
      {
        title: 'Perplexity',
        description: '• 실시간 검색 기반 AI 챗봇. • 최신 정보와 출처를 함께 제공',
        url: 'https://www.perplexity.ai',
        category: 'AI 챗봇',
      },
      {
        title: 'GenSpark',
        description: '• 사용자 맞춤형 솔루션 제공. • 혁신적인 에이전트 시스템',
        url: 'https://genspark.ai',
        category: 'AI 챗봇',
      },
      {
        title: 'Grok',
        description: '• xAI의 위트있는 챗봇. • 유머와 풍자를 활용한 대화 스타일',
        url: 'https://x.com/i/grok',
        category: 'AI 챗봇',
      },
      {
        title: 'Mistral (Le Chat)',
        description: '• Mistral AI의 최신 모델. • 고성능 AI 대화 지원',
        url: 'https://chat.mistral.ai/chat',
        category: 'AI 챗봇',
      },
      {
        title: 'Alan',
        description: '• 한국어 특화 대화형 AI. • 검색과 정보 제공에 최적화',
        url: 'https://alan.est.ai/',
        category: 'AI 챗봇',
      },
    ],

    videoAI: [
      {
        title: 'Veo 2',
        description: '• AI 기반 스포츠 영상 분석. • 실시간 경기 분석·하이라이트 추출',
        url: 'https://deepmind.google/technologies/veo/veo-2/',
        category: '비디오 생성',
      },
      {
        title: 'Sora',
        description: '• OpenAI 텍스트→비디오 생성. • 긴 고품질 영상 제작에 특화',
        url: 'https://openai.com/sora',
        category: '비디오 생성',
      },
      {
        title: 'kling ai',
        description: '• 음성·텍스트 변환 AI. • 실시간 협업으로 제작 효율성 제공',
        url: 'https://klingai.com/',
        category: '비디오 생성',
      },
      {
        title: 'InVideo',
        description: '• 텍스트→비디오 제작 도구. • 광고·마케팅 영상에 최적화',
        url: 'https://invideo.io',
        category: '비디오 생성',
      },
      {
        title: 'Runway',
        description: '• 전문가용 비디오 편집 AI. • 빠르고 고품질 결과물 제작',
        url: 'https://runway.ml',
        category: '비디오 생성',
      },
      {
        title: 'HeyGen',
        description: '• AI 아바타 기반 영상 생성. • 다국어 음성 더빙·립싱크 지원',
        url: 'https://www.heygen.com',
        category: '비디오 생성',
      },
      {
        title: 'Synthesia',
        description: '• AI 아바타로 고퀄리티 영상 제작 가능. • 75개 이상의 언어를 지원해 글로벌 마케팅에 최적화',
        url: 'https://www.synthesia.io',
        category: '비디오 생성',
      },
      {
        title: 'D-ID',
        description: '• 정지 이미지를 말하게 만드는 AI 아바타 생성. • 실시간 스트리밍 기능 지원',
        url: 'https://www.d-id.com',
        category: '비디오 생성',
      },
    ],
    
    presentationAI: [

      {
        title: 'Beautiful.ai',
        description: '• AI 기반 프레젠테이션 도구. • 전문적인 디자인 원칙 적용',
        url: 'https://www.beautiful.ai',
        category: 'PPT 생성',
      },

      {
        title: 'Gamma',
        description: '• 웹 기반 프레젠테이션 생성. • 실시간 협업·인터랙션 지원',
        url: 'https://gamma.app',
        category: 'PPT 생성',
      },

      {
        title: 'Slidebean',
        description: '• 스타트업 피치덱 도구. • AI 기반 템플릿 제공',
        url: 'https://slidebean.com',
        category: 'PPT 생성',
      },

      {
        title: 'Tome',
        description: '• GPT-4로 스토리텔링 제작. • 역동적 프레젠테이션 지원',
        url: 'https://tome.app',
        category: 'PPT 생성',
      },

      {
        title: 'ChatBA',
        description: '• AI 비즈니스 프레젠테이션. • 전문 컨설팅 스타일 구현',
        url: 'https://www.chatbcg.com',
        category: 'PPT 생성',
      },

      {
        title: 'Canva',
        description: '• Canva의 프레젠테이션 도구. • 다양한 템플릿·에셋 제공',
        url: 'https://www.canva.com/presentations',
        category: 'PPT 생성',
      },

      {
        title: 'SlidesAI',
        description: '• 텍스트→슬라이드 변환. • Google 슬라이드 통합',
        url: 'https://www.slidesai.io',
        category: 'PPT 생성',
      },

      {
        title: 'Pitch',
        description: '• 협업 프레젠테이션 플랫폼. • AI 템플릿·디자인 제안 제공',
        url: 'https://pitch.com',
        category: 'PPT 생성',
      }

    ],

    imageAI: [

      {
        title: 'Midjourney',
        description: '• Discord 기반 이미지 생성. • 예술적 퀄리티·프롬프트 지원',
        url: 'https://www.midjourney.com',
        category: '이미지 생성',
      },

      {
        title: 'DALL·E',
        description: '• OpenAI 이미지 생성 AI. • 자연어 설명으로 정교한 이미지 제작',
        url: 'https://labs.openai.com',
        category: '이미지 생성',
      },

      {
        title: 'Stable Diffusion',
        description: '• 오픈소스 이미지 생성 AI. • 다양한 모델과 플러그인 지원',
        url: 'https://stability.ai',
        category: '이미지 생성',
      },

      {
        title: 'Leonardo.Ai',
        description: '• 게임 아셋·캐릭터 생성 AI. • 자체 모델 학습 기능 제공',
        url: 'https://leonardo.ai',
        category: '이미지 생성',
      },

      {
        title: 'Canva Text to Image',
        description: '• Canva의 이미지 생성 도구. • 디자인 흐름에 통합 제공',
        url: 'https://www.canva.com/ko_kr/ai-image-generator/?utm_source=chatgpt.com',
        category: '이미지 생성',
      },

      {
        title: 'Adobe Firefly',
        description: '• Adobe의 생성형 AI. • Photoshop과 연동',
        url: 'https://firefly.adobe.com',
        category: '이미지 생성',
      },

      {
        title: 'Playground AI',
        description: '• 직관적인 이미지 생성 AI. • 다양한 스타일·고해상도 지원',
        url: 'https://playground.ai',
        category: '이미지 생성',
      },

      {
        title: 'Bing Image Creator',
        description: '• Microsoft의 DALL·E 기반 AI. • Bing 검색과 통합',
        url: 'https://www.bing.com/images/create',
        category: '이미지 생성',
      }
    ],
  };
};
