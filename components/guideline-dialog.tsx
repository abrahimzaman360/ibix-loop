import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Course } from "@/app/data/courses";
import { courseGuidelines } from "@/app/data/guidelines";
import { CheckCircle2, Book, Lightbulb, AlertTriangle } from "lucide-react";

interface GuidelineDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    course: Course | null;
}

export function GuidelineDialog({ open, onOpenChange, course }: GuidelineDialogProps) {
    if (!course) return null;

    const guideline = courseGuidelines[course.code];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col p-0 gap-0">
                <DialogHeader className="p-6 pb-2">
                    <DialogTitle className="text-2xl flex items-center gap-2">
                        {course.title}
                        <span className="text-base font-normal text-muted-foreground">({course.code})</span>
                    </DialogTitle>
                    <DialogDescription>
                        {course.category} • {course.creditHours}
                    </DialogDescription>
                </DialogHeader>

                <ScrollArea className="flex-1 p-6 pt-2">
                    {!guideline ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
                            <Book className="h-12 w-12 mb-4 opacity-20" />
                            <p>No specific guidelines available for this course yet.</p>
                            <p className="text-sm">Follow general study practices: Attend lectures, read handouts, and practice past papers.</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <section>
                                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2 text-primary">
                                    <Lightbulb className="h-5 w-5" /> Overview
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">{guideline.overview}</p>
                            </section>

                            <section>
                                <h3 className="font-semibold text-lg flex items-center gap-2 mb-3 text-primary">
                                    <CheckCircle2 className="h-5 w-5" /> How to Ace This (Tips)
                                </h3>
                                <ul className="grid gap-2">
                                    {guideline.tips.map((tip, i) => (
                                        <li key={i} className="flex gap-2 items-start text-sm bg-muted/50 p-3 rounded-lg">
                                            <span className="bg-primary/20 text-primary text-[10px] font-bold px-1.5 py-0.5 rounded-full mt-0.5">
                                                {i + 1}
                                            </span>
                                            {tip}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {guideline.importantTopics && guideline.importantTopics.length > 0 && (
                                <section>
                                    <h3 className="font-semibold text-lg flex items-center gap-2 mb-2 text-primary">
                                        <AlertTriangle className="h-5 w-5" /> Important Topics
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {guideline.importantTopics.map((topic, i) => (
                                            <span key={i} className="px-2.5 py-1 bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 rounded-md text-sm font-medium">
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {guideline.resources && guideline.resources.length > 0 && (
                                <section>
                                    <h3 className="font-semibold text-lg flex items-center gap-2 mb-2 text-primary">
                                        <Book className="h-5 w-5" /> Recommended Resources
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                        {guideline.resources.map((res, i) => (
                                            <li key={i}>{res}</li>
                                        ))}
                                    </ul>
                                </section>
                            )}
                        </div>
                    )}
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
