
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';

const CodeDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('python');
  const { elementRef, isVisible } = useIntersectionObserver();
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  
  const pythonCode = `import pymobile

# Initialize the mobile bridge
mobile = pymobile.initialize()

# Access device sensors
def on_location_update(location):
    print(f"Location: {location.latitude}, {location.longitude}")

# Register for location updates
mobile.sensors.location.register(on_location_update)

# Access the camera
camera = mobile.camera.open()
photo = camera.take_photo()

# Save to gallery
mobile.gallery.save(photo)

# Show a native notification
mobile.notifications.show(
    title="Photo Captured",
    message="Your photo has been saved to the gallery",
    actions=["View", "Share"]
)`;

  const kotlinCode = `import org.pymobile.bridge.PythonInterpreter
import org.pymobile.bridge.PythonObject

class MobileBridge {
    private val interpreter = PythonInterpreter()
    
    fun initialize() {
        // Initialize Python interpreter
        interpreter.initialize()
        
        // Register Kotlin APIs to be accessible from Python
        interpreter.registerModule("mobile") {
            registerClass(Sensors::class)
            registerClass(Camera::class)
            registerClass(Gallery::class)
            registerClass(Notifications::class)
        }
        
        // Execute Python code
        interpreter.execute("""
            import mobile
            print("Python interpreter initialized successfully!")
        """)
    }
    
    // Bridge classes for native functionality
    class Sensors {
        fun getLocation(): Location = // ...
    }
    
    class Camera {
        fun takePhoto(): ByteArray = // ...
    }
}`;

  const swiftCode = `import PyMobile

// Initialize the PyMobile framework
let pymobile = PyMobile.shared

// Set up the Python environment
pymobile.setupPythonEnvironment()

// Register iOS native APIs with Python
pymobile.registerNativeModule("ios_apis") { module in
    module.register(UIDevice.self)
    module.register(UIScreen.self)
    module.register(CameraManager.self)
}

// Run Python code
do {
    try pymobile.runPythonCode("""
        import ios_apis
        
        # Get device information
        device = ios_apis.UIDevice.current()
        print(f"Running on {device.name}, iOS {device.systemVersion}")
        
        # Access the camera
        camera = ios_apis.CameraManager()
        camera.requestAuthorization()
    """)
} catch {
    print("Python execution error: \(error)")
}`;

  const documentationCode = `# PyMobile Documentation

## Installation

\`\`\`bash
pip install pymobile
\`\`\`

## Quick Start

\`\`\`python
import pymobile

# Initialize the mobile bridge
mobile = pymobile.initialize()

# Platform detection
if mobile.platform.is_android():
    # Android-specific code
elif mobile.platform.is_ios():
    # iOS-specific code
\`\`\`

## API Reference

* mobile.platform - Platform information
* mobile.sensors - Access to device sensors
* mobile.camera - Camera API
* mobile.storage - File storage operations
* mobile.ui - UI components
* mobile.network - Network operations`;

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
            title="See How It Works"
            subtitle="Code Example"
          />
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="python" onValueChange={handleTabChange}>
              <div className="flex justify-center mb-6">
                <TabsList className="grid grid-cols-4 w-full max-w-md">
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="kotlin">Kotlin</TabsTrigger>
                  <TabsTrigger value="swift">Swift</TabsTrigger>
                  <TabsTrigger value="docs">Docs</TabsTrigger>
                </TabsList>
              </div>
              
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-800 transition-all duration-500">
                <div className="flex items-center justify-between border-b border-gray-800 px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400 font-mono">
                    {activeTab === 'python' && 'example.py'}
                    {activeTab === 'kotlin' && 'MobileBridge.kt'}
                    {activeTab === 'swift' && 'PyMobileSetup.swift'}
                    {activeTab === 'docs' && 'README.md'}
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
                
                <TabsContent value="swift" className="m-0">
                  <pre className="p-5 overflow-x-auto text-sm text-gray-300 font-mono">
                    <code>{swiftCode}</code>
                  </pre>
                </TabsContent>
                
                <TabsContent value="docs" className="m-0">
                  <pre className="p-5 overflow-x-auto text-sm text-gray-300 font-mono">
                    <code>{documentationCode}</code>
                  </pre>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeDemo;
