import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import CourseCard from "@/components/CourseCard";
import CourseCardSkeleton from "@/components/CourseCardSkeleton";
import BottomNav from "@/components/BottomNav";

const Courses = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const courses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      progress: 65,
      duration: "8 hours",
      lessons: 24
    },
    {
      id: 2,
      title: "Advanced React Patterns",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      progress: 42,
      duration: "12 hours",
      lessons: 36
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      progress: 88,
      duration: "6 hours",
      lessons: 18
    },
    {
      id: 4,
      title: "Python for Data Science",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      progress: 23,
      duration: "15 hours",
      lessons: 42
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-gradient-primary text-white p-6 pb-8 rounded-b-3xl shadow-lg">
        <h1 className="text-2xl font-bold mb-2">My Courses</h1>
        <p className="text-white/80 text-sm mb-4">Continue your learning journey</p>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/90 border-0 focus-visible:ring-2 focus-visible:ring-white/50"
          />
        </div>
      </div>

      <div className="p-6 space-y-4">
        {loading ? (
          <>
            {[1, 2, 3].map((i) => (
              <CourseCardSkeleton key={i} />
            ))}
          </>
        ) : (
          <>
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No courses found</p>
              </div>
            )}
          </>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Courses;
