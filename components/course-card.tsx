import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Course } from "@/app/data/courses";
import { BookOpen, AlertCircle } from "lucide-react";

interface CourseCardProps {
    course: Course;
    onViewGuidelines: (course: Course) => void;
}

export function CourseCard({ course, onViewGuidelines }: CourseCardProps) {
    return (
        <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-lg font-semibold leading-tight">{course.title}</CardTitle>
                    <Badge variant={course.type === "Required" ? "default" : "secondary"} className="shrink-0">
                        {course.type}
                    </Badge>
                </div>
                <div className="text-sm text-muted-foreground font-mono">{course.code}</div>
            </CardHeader>
            <CardContent className="flex-1 space-y-3 text-sm">
                <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">{course.category}</Badge>
                    {course.subCategory && (
                        <Badge variant="outline" className="text-xs">{course.subCategory}</Badge>
                    )}
                </div>

                <div className="space-y-1">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Credits:</span>
                        <span className="font-medium">{course.creditHours}</span>
                    </div>
                    {course.preRequisite && (
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Prereq:</span>
                            <span className="font-medium text-amber-600 dark:text-amber-400">{course.preRequisite}</span>
                        </div>
                    )}
                </div>
            </CardContent>
            <CardFooter>
                <Button
                    variant="ghost"
                    className="w-full gap-2 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
                    onClick={() => onViewGuidelines(course)}
                >
                    <BookOpen className="h-4 w-4" />
                    View Guidelines
                </Button>
            </CardFooter>
        </Card>
    );
}
