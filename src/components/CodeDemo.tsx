
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Image } from '@/components/ui/image';
import { useLanguage } from '@/contexts/LanguageContext';

const CodeDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('python');
  const { elementRef, isVisible } = useIntersectionObserver();
  const { t } = useLanguage();
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  
  const pythonCode = `import pythonx_compose

# Create a composable UI element with Python
@pythonx_compose.composable
def JetpackCompose():
    with pythonx_compose.Card():
        # State management using remember
        expanded = pythonx_compose.remember(False)
        
        # Column with clickable modifier
        with pythonx_compose.Column(
            modifier=pythonx_compose.Modifier.clickable(
                on_click=lambda: expanded.set(not expanded.value)
            )
        ):
            # Display an image
            pythonx_compose.Image(
                painter_resource="R.drawable.jetpack_compose"
            )
            
            # Animated visibility based on state
            with pythonx_compose.AnimatedVisibility(expanded.value):
                # Text with styling
                pythonx_compose.Text(
                    text="Jetpack Compose",
                    style=pythonx_compose.MaterialTheme.typography.body_large
                )

# Call the composable function to render it
JetpackCompose()`;

  const kotlinCode = `@Composable
fun JetpackCompose() {
    Card {
        var expanded by remember { mutableStateOf(false) }
        Column(Modifier.clickable { expanded = !expanded }) {
            Image(painterResource(R.drawable.jetpack_compose))
            AnimatedVisibility(expanded) {
                Text(
                    text = "Jetpack Compose",
                    style = MaterialTheme.typography.bodyLarge,
                )
            }
        }
    }
}`;

  return (
    <section id="how-it-works" className="section-padding bg-white relative overflow-hidden">
      <div
        ref={elementRef}
        className={cn(
          "transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        )}
      >
        <div className="container mx-auto">
          <SectionHeading
            title={t('see-how')}
            subtitle={t('code-example')}
            titleClass="bg-gradient-to-r from-pythonic-blue to-pythonic-vividPurple bg-clip-text text-transparent"
          />
          
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="python" onValueChange={handleTabChange}>
              <div className="flex justify-center mb-6">
                <TabsList className="grid grid-cols-2 w-full max-w-md bg-pythonic-softGray">
                  <TabsTrigger value="python" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pythonic-blue data-[state=active]:to-pythonic-vividPurple data-[state=active]:text-white">{t('python')}</TabsTrigger>
                  <TabsTrigger value="kotlin" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pythonic-blue data-[state=active]:to-pythonic-vividPurple data-[state=active]:text-white">{t('kotlin')}</TabsTrigger>
                </TabsList>
              </div>
              
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-3 bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-800 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                  <div className="flex items-center justify-between border-b border-gray-800 px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-400 font-mono">
                      {activeTab === 'python' && 'example.py'}
                      {activeTab === 'kotlin' && 'JetpackCompose.kt'}
                    </div>
                    <div className="w-16"></div> {/* Spacer for balance */}
                  </div>
                  
                  <TabsContent value="python" className="m-0">
                    <pre className="p-5 overflow-x-auto text-sm text-gray-300 font-mono">
                      <code>{pythonCode}</code>
                    </pre>
                  </TabsContent>
                  
                  <TabsContent value="kotlin" className="m-0">
                    <pre className="p-5 overflow-x-auto text-sm text-gray-300 font-mono">
                      <code>{kotlinCode}</code>
                    </pre>
                  </TabsContent>
                </div>
                
                <div className="md:col-span-2 flex items-center justify-center bg-gradient-to-br from-pythonic-softPurple to-pythonic-softBlue rounded-xl p-4">
                  <div className="bg-white rounded-lg shadow-md p-6 max-w-[250px] transition-all duration-300 hover:shadow-lg">
                    <div className="flex justify-center">
                      <img 
                        src="/lovable-uploads/6c95c513-6b2a-47e9-862d-68685d05431d.png" 
                        alt="Jetpack Compose Logo"
                        className="h-32 w-32 object-contain"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="text-xl font-medium">Jetpack Compose</h3>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center text-gray-600">
                <p>
                  {t('explanation')}
                </p>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeDemo;
