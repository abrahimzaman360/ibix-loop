"use client";

import { Semester, Course } from "@/app/data/courses";
import { CourseCard } from "@/components/course-card";
import { motion } from "motion/react";

interface SemesterListProps {
    semester: Semester;
    onViewGuidelines: (course: Course) => void;
}

export function SemesterList({ semester, onViewGuidelines }: SemesterListProps) {
    return (
        <div className="mb-12">
            <div className="flex items-baseline gap-4 mb-4">
                <h2 className="text-2xl font-bold tracking-tight text-primary">Semester {semester.id}</h2>
                <div className="h-px bg-border flex-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {semester.courses.map((course, idx) => (
                    <motion.div
                        key={course.code}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                    >
                        <CourseCard course={course} onViewGuidelines={onViewGuidelines} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
