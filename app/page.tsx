"use client";

import { useState } from "react";
import { semesters, Course } from "@/app/data/courses";
import { SemesterList } from "@/components/semester-list";
import { GuidelineDialog } from "@/components/guideline-dialog";

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleViewGuidelines = (course: Course) => {
    setSelectedCourse(course);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
              BS
            </div>
            <h1 className="text-xl font-bold tracking-tight">Accounting & Finance GPA Guide</h1>
          </div>
          {/* Placeholder for future theme toggle or nav */}
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <section className="mb-12 max-w-3xl">
          <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
            Roadmap to 4.0 GPA
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A complete semester-wise breakdown of your BS Accounting & Finance degree.
            Click on any course to view specific guidelines, resources, and tips to ace it.
          </p>
        </section>

        <div className="space-y-4">
          {semesters.map((semester) => (
            <SemesterList
              key={semester.id}
              semester={semester}
              onViewGuidelines={handleViewGuidelines}
            />
          ))}
        </div>
      </main>

      <GuidelineDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        course={selectedCourse}
      />

      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between text-sm text-muted-foreground">
          <p>Built for academic excellence.</p>
        </div>
      </footer>
    </div>
  );
}
