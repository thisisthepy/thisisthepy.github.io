
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ko';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'features': 'Features',
    'how-it-works': 'How It Works',
    'get-started': 'Get Started',
    'download-sdk': 'Download SDK',
    
    // Hero
    'introducing': 'Introducing a Revolutionary Bridge',
    'python-meets': 'Python Meets Mobile Development',
    'hero-description': 'Run Python code seamlessly on iOS and Android with our Kotlin Multiplatform bridge. Build mobile apps using the language you love, interoperate with native APIs, and deploy on 5 different platforms.',
    'get-started-button': 'Get Started',
    'view-on-github': 'View on GitHub',
    
    // Features
    'features-title': 'Unlock Python\'s Power on Mobile',
    'features-subtitle': 'Features',
    'cross-platform': 'Cross-Platform Python',
    'cross-platform-desc': 'Run your Python code on Android, iOS, Windows, macOS, and Linux with a single codebase.',
    'native-api': 'Native API Access',
    'native-api-desc': 'Access device capabilities and native APIs directly from Python through our Kotlin bridge.',
    'python-interpreter': 'Python Interpreter Embedded',
    'python-interpreter-desc': 'Full Python interpreter embedded with performance optimizations for mobile devices.',
    'interoperability': 'Seamless Interoperability',
    'interoperability-desc': 'Bidirectional communication between Python and Kotlin with type safety and error handling.',
    'ai-ml': 'AI & ML Ready',
    'ai-ml-desc': 'Easily integrate AI models and ML libraries directly in your mobile applications.',
    'rapid-dev': 'Rapid Development',
    'rapid-dev-desc': 'Speed up your mobile development with Python\'s simplicity and the vast ecosystem of packages.',
    
    // Supported OS
    'supported-os': 'Supported Operating Systems',
    'android': 'Android',
    'ios': 'iOS',
    'windows': 'Windows',
    'macos': 'macOS',
    'linux': 'Linux',
    
    // Code Demo
    'see-how': 'See How It Works',
    'code-example': 'Code Example',
    'python': 'Python',
    'kotlin': 'Kotlin',
    'explanation': 'PythonMultiplatform provides Python-Kotlin interoperability, while pythonx-compose handles UI wrapping',
    
    // Get Started
    'ready': 'Ready to Get Started?',
    'installation': 'Installation',
    'install-sdk': 'Install the SDK',
    'install-sdk-desc': 'Add PythonMultiplatform to your project with a simple pip install command and set up the Kotlin or Swift bridge.',
    'write-python': 'Write Python Code',
    'write-python-desc': 'Use the PythonMultiplatform API to interact with device features and implement your application logic in Python.',
    'build-deploy': 'Build and Deploy',
    'build-deploy-desc': 'Package your application for Android and iOS, and deploy to app stores or enterprise distribution channels.',
    'view-docs': 'View Documentation',
    
    // Footer
    'description': 'PythonMultiplatform enables Python developers to create native mobile applications without learning new languages, by embedding a Python interpreter into Kotlin Multiplatform.',
    'resources': 'Resources',
    'documentation': 'Documentation',
    'api-reference': 'API Reference',
    'tutorials': 'Tutorials',
    'examples': 'Examples',
    'company': 'Company',
    'about': 'About',
    'blog': 'Blog',
    'careers': 'Careers',
    'contact': 'Contact',
    'rights-reserved': 'All rights reserved.',
    'privacy-policy': 'Privacy Policy',
    'terms-of-service': 'Terms of Service',
  },
  ko: {
    // 네비게이션
    'features': '특징',
    'how-it-works': '작동 방식',
    'get-started': '시작하기',
    'download-sdk': 'SDK 다운로드',
    
    // 히어로
    'introducing': '혁신적인 브릿지 소개',
    'python-meets': '파이썬, 모바일 개발을 만나다',
    'hero-description': 'Kotlin Multiplatform 브릿지를 통해 iOS와 Android에서 파이썬 코드를 원활하게 실행하세요. 좋아하는 언어를 사용하여 모바일 앱을 구축하고, 네이티브 API와 상호 작용하며, 5개 플랫폼에 배포할 수 있습니다.',
    'get-started-button': '시작하기',
    'view-on-github': 'GitHub에서 보기',
    
    // 특징
    'features-title': '모바일에서 파이썬의 힘을 활용하세요',
    'features-subtitle': '특징',
    'cross-platform': '크로스 플랫폼 파이썬',
    'cross-platform-desc': '단일 코드베이스로 Android, iOS, Windows, macOS, Linux에서 파이썬 코드를 실행하세요.',
    'native-api': '네이티브 API 접근',
    'native-api-desc': 'Kotlin 브릿지를 통해 파이썬에서 직접 디바이스 기능과 네이티브 API에 접근하세요.',
    'python-interpreter': '내장된 파이썬 인터프리터',
    'python-interpreter-desc': '모바일 디바이스에 최적화된 성능으로 완전한 파이썬 인터프리터가 내장되어 있습니다.',
    'interoperability': '원활한 상호 운용성',
    'interoperability-desc': '타입 안전성과 오류 처리를 갖춘 파이썬과 Kotlin 간의 양방향 통신이 가능합니다.',
    'ai-ml': 'AI 및 ML 지원',
    'ai-ml-desc': '모바일 애플리케이션에서 AI 모델과 ML 라이브러리를 쉽게 통합할 수 있습니다.',
    'rapid-dev': '빠른 개발',
    'rapid-dev-desc': '파이썬의 단순함과 방대한 패키지 생태계로 모바일 개발 속도를 높이세요.',
    
    // 지원 OS
    'supported-os': '지원 운영체제',
    'android': '안드로이드',
    'ios': 'iOS',
    'windows': '윈도우',
    'macos': '맥OS',
    'linux': '리눅스',
    
    // 코드 데모
    'see-how': '작동 방식 보기',
    'code-example': '코드 예제',
    'python': '파이썬',
    'kotlin': '코틀린',
    'explanation': 'PythonMultiplatform은 파이썬-코틀린 상호운용성을 제공하고, pythonx-compose는 UI 래핑을 담당합니다',
    
    // 시작하기
    'ready': '시작할 준비가 되셨나요?',
    'installation': '설치',
    'install-sdk': 'SDK 설치하기',
    'install-sdk-desc': '간단한 pip 설치 명령으로 PythonMultiplatform을 프로젝트에 추가하고 Kotlin 또는 Swift 브릿지를 설정하세요.',
    'write-python': '파이썬 코드 작성하기',
    'write-python-desc': 'PythonMultiplatform API를 사용하여 디바이스 기능과 상호 작용하고 파이썬으로 애플리케이션 로직을 구현하세요.',
    'build-deploy': '빌드 및 배포',
    'build-deploy-desc': 'Android 및 iOS용 애플리케이션을 패키징하고 앱 스토어나 기업 배포 채널에 배포하세요.',
    'view-docs': '문서 보기',
    
    // 푸터
    'description': 'PythonMultiplatform은 Kotlin Multiplatform에 파이썬 인터프리터를 내장하여 파이썬 개발자가 새로운 언어를 배우지 않고도 네이티브 모바일 애플리케이션을 만들 수 있게 해줍니다.',
    'resources': '리소스',
    'documentation': '문서',
    'api-reference': 'API 레퍼런스',
    'tutorials': '튜토리얼',
    'examples': '예제',
    'company': '회사',
    'about': '소개',
    'blog': '블로그',
    'careers': '채용',
    'contact': '연락처',
    'rights-reserved': '모든 권리 보유.',
    'privacy-policy': '개인정보 처리방침',
    'terms-of-service': '서비스 이용약관',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
