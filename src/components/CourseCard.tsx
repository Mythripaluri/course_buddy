import { Clock, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface CourseCardProps {
  title: string;
  thumbnail: string;
  progress: number;
  duration: string;
  lessons: number;
}

const CourseCard = ({ title, thumbnail, progress, duration, lessons }: CourseCardProps) => {
  return (
    <Card className="overflow-hidden bg-gradient-card hover:shadow-lg transition-all duration-300 animate-fade-in">
      <div className="relative h-40 bg-muted overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
          {progress}% Complete
        </div>
      </div>
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-lg text-foreground line-clamp-2">{title}</h3>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            <span>{lessons} lessons</span>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </Card>
  );
};

export default CourseCard;
