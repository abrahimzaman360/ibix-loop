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

        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white shadow-lg relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Preparing for Technical Exams?</h3>
                <p className="text-blue-100 max-w-xl">
                  Access our comprehensive question bank for Microsoft Fabric (DP-700), Python, and SQL.
                  Master real-world scenarios and boost your technical interview skills.
                </p>
              </div>
              <a
                href="/exam-prep"
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors shadow-sm whitespace-nowrap"
              >
                Start Practice Exam
              </a>
            </div>
            {/* Decorative circle */}
            <div className="absolute -right-10 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>
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
