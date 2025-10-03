import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ProgressStepper from "@/components/ProgressStepper";
import { GraduationCap, Target, Rocket } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = ["Welcome", "Goals", "Ready"];
  
  const stepContent = [
    {
      icon: GraduationCap,
      title: "Welcome to LearnHub",
      description: "Your personalized learning journey starts here. Access courses, track progress, and connect with peers.",
      action: "Get Started"
    },
    {
      icon: Target,
      title: "Set Your Goals",
      description: "Choose your learning path and set achievable milestones. We'll help you stay on track.",
      action: "Continue"
    },
    {
      icon: Rocket,
      title: "You're All Set!",
      description: "Everything is ready. Let's begin your learning adventure and achieve your goals together.",
      action: "Start Learning"
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/courses");
    }
  };

  const currentContent = stepContent[currentStep];
  const Icon = currentContent.icon;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mb-6">
            <Icon className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">
            {currentContent.title}
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            {currentContent.description}
          </p>
        </div>

        <Card className="p-6 bg-gradient-card animate-fade-in">
          <ProgressStepper steps={steps} currentStep={currentStep} />
        </Card>

        <div className="space-y-3 animate-fade-in">
          <Button 
            onClick={handleNext}
            className="w-full h-12 text-base font-medium"
            size="lg"
          >
            {currentContent.action}
          </Button>
          
          {currentStep > 0 && (
            <Button
              onClick={() => setCurrentStep(currentStep - 1)}
              variant="outline"
              className="w-full h-12 text-base"
              size="lg"
            >
              Back
            </Button>
          )}
        </div>

        {currentStep === 0 && (
          <Button
            onClick={() => navigate("/courses")}
            variant="ghost"
            className="w-full text-muted-foreground hover:text-foreground"
          >
            Skip for now
          </Button>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
