"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Database, Code, Server, BrainCircuit } from "lucide-react";
import { allQuestions, ExamCategory } from "@/app/data/exam-questions";
import { ExamQuiz } from "@/components/exam-quiz";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExamPrepPage() {
    const [selectedCategory, setSelectedCategory] = useState<ExamCategory | null>(null);

    if (selectedCategory) {
        return (
            <div className="min-h-screen bg-background p-4 md:p-8">
                <ExamQuiz
                    category={selectedCategory}
                    questions={allQuestions[selectedCategory]}
                    onExit={() => setSelectedCategory(null)}
                />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background font-sans">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 md:px-8 h-16 flex items-center gap-4">
                    <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                            <BrainCircuit className="w-5 h-5" />
                        </div>
                        <h1 className="text-xl font-bold tracking-tight">Exam Prep</h1>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 md:px-8 py-8 md:py-12">
                <section className="mb-10 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-extrabold tracking-tight mb-3">
                        Master Your Technical Skills
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Select a learning path below to start practicing with real-world scenarios and comprehensive questions.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Card
                        className="group cursor-pointer hover:border-blue-500 hover:shadow-md transition-all duration-300"
                        onClick={() => setSelectedCategory("DP-700")}
                    >
                        <CardHeader>
                            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Server className="w-6 h-6" />
                            </div>
                            <CardTitle>Microsoft Fabric (DP-700)</CardTitle>
                            <CardDescription>Data Engineering on Microsoft Fabric</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary">Scenario Based</Badge>
                                    <Badge variant="secondary">200+ Questions</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Deep dive into OneLake, Lakehouses, Warehouses, and Data Factory pipelines with complex scenarios.
                                </p>
                                <Button className="w-full mt-2 bg-blue-600 hover:bg-blue-700">Start Practice</Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card
                        className="group cursor-pointer hover:border-yellow-500 hover:shadow-md transition-all duration-300"
                        onClick={() => setSelectedCategory("Python")}
                    >
                        <CardHeader>
                            <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Code className="w-6 h-6" />
                            </div>
                            <CardTitle>Python for Data</CardTitle>
                            <CardDescription>Data Manipulation & Analysis</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary">Pandas</Badge>
                                    <Badge variant="secondary">Core Python</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Master Python syntax, data structures, and the Pandas library for efficient data engineering.
                                </p>
                                <Button className="w-full mt-2 bg-yellow-600 hover:bg-yellow-700 text-white">Start Practice</Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card
                        className="group cursor-pointer hover:border-purple-500 hover:shadow-md transition-all duration-300"
                        onClick={() => setSelectedCategory("SQL")}
                    >
                        <CardHeader>
                            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Database className="w-6 h-6" />
                            </div>
                            <CardTitle>SQL Mastery</CardTitle>
                            <CardDescription>Querying & Optimization</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary">T-SQL</Badge>
                                    <Badge variant="secondary">Complex Joins</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Practice complex queries, window functions, and performance tuning for data warehouses.
                                </p>
                                <Button className="w-full mt-2 bg-purple-600 hover:bg-purple-700">Start Practice</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
