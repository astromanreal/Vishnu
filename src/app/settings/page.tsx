"use client"

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { useTheme } from "next-themes";
import { Sun, Moon, Volume2, VolumeX, Text } from "lucide-react";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [soundEnabled, setSoundEnabled] = React.useState(true); // Placeholder state
  const [fontSize, setFontSize] = React.useState(16); // Placeholder state, default 16px
  const [mounted, setMounted] = React.useState(false);

   React.useEffect(() => {
    setMounted(true)
    // Apply font size globally (example - adjust as needed for your structure)
     document.documentElement.style.fontSize = `${fontSize}px`;
   }, [fontSize]);


   // Avoid hydration mismatch for theme toggle
   if (!mounted) {
     return null; // Or a loading skeleton
   }

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

   const handleSoundToggle = (checked: boolean) => {
     setSoundEnabled(checked);
     // TODO: Implement actual sound enabling/disabling logic
     console.log("Sound enabled:", checked);
   };

   const handleFontSizeChange = (value: number[]) => {
     setFontSize(value[0]);
   };


  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 font-serif text-primary">Settings</h1>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>Customize your Vaikuntha Digital experience.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Theme Toggle */}
          <div className="flex items-center justify-between">
            <Label htmlFor="theme-toggle" className="flex items-center space-x-2 text-lg">
              {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              <span>Dark Mode</span>
            </Label>
            <Switch
              id="theme-toggle"
              checked={theme === "dark"}
              onCheckedChange={handleThemeChange}
              aria-label="Toggle dark mode"
            />
          </div>

          {/* Sound Toggle */}
           <div className="flex items-center justify-between">
            <Label htmlFor="sound-toggle" className="flex items-center space-x-2 text-lg">
               {soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
              <span>Sound Effects</span>
            </Label>
            <Switch
              id="sound-toggle"
              checked={soundEnabled}
              onCheckedChange={handleSoundToggle}
              aria-label="Toggle sound effects"
            />
          </div>

           {/* Font Size Adjustment */}
          <div className="space-y-3">
             <Label htmlFor="font-size-slider" className="flex items-center space-x-2 text-lg">
               <Text className="h-5 w-5" />
              <span>Font Size ({fontSize}px)</span>
            </Label>
             <Slider
               id="font-size-slider"
               min={12}
               max={24}
               step={1}
               value={[fontSize]}
               onValueChange={handleFontSizeChange}
               aria-label="Adjust font size"
            />
             <p className="text-sm text-muted-foreground">Adjust the base font size across the application.</p>
           </div>

        </CardContent>
      </Card>
    </div>
  );
}
