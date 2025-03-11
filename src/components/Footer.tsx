
import React from 'react';
import { Github, Twitter, Mail, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-pythonic-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pythonic-blue to-pythonic-vividPurple flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="font-semibold text-lg">PythonMultiplatform</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/thisisthepy/python-multiplatform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-6 bg-gradient-to-r from-pythonic-blue to-pythonic-vividPurple bg-clip-text text-transparent inline-block">{t('resources')}</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">{t('documentation')}</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">{t('api-reference')}</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">{t('tutorials')}</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">{t('examples')}</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-6 bg-gradient-to-r from-pythonic-blue to-pythonic-vividPurple bg-clip-text text-transparent inline-block">{t('company')}</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">{t('about')}</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">{t('blog')}</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">{t('careers')}</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">{t('contact')}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PythonMultiplatform. {t('rights-reserved')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              {t('privacy-policy')}
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              {t('terms-of-service')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
