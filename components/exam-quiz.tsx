"use client";

import { useState } from "react";
import { Question } from "@/app/data/exam-questions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RotateCcw, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExamQuizProps {
    questions: Question[];
    category: string;
    onExit: () => void;
}

export function ExamQuiz({ questions, category, onExit }: ExamQuizProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex) / questions.length) * 100;

    const handleOptionSelect = (index: number) => {
        if (showExplanation) return; // Prevent changing answer after reveal
        setSelectedOption(index);
    };

    const handleSubmitAnswer = () => {
        if (selectedOption === null) return;

        if (selectedOption === currentQuestion.correctOptionIndex) {
            setScore(score + 1);
        }
        setShowExplanation(true);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setShowExplanation(false);
        } else {
            setQuizCompleted(true);
        }
    };

    const handleRetry = () => {
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setShowExplanation(false);
        setScore(0);
        setQuizCompleted(false);
    };

    if (quizCompleted) {
        const percentage = Math.round((score / questions.length) * 100);
        return (
            <Card className="w-full max-w-2xl mx-auto shadow-lg animate-in fade-in zoom-in-95 duration-300">
                <CardHeader className="text-center pb-2">
                    <CardTitle className="text-2xl font-bold">Quiz Completed!</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-6 pt-6">
                    <div className="relative flex items-center justify-center w-32 h-32">
                        {/* Simple circular score indicator */}
                        <div className={`text-4xl font-extrabold ${percentage >= 70 ? 'text-green-600' : 'text-orange-500'}`}>
                            {percentage}%
                        </div>
                    </div>
                    <div className="text-center space-y-1">
                        <p className="text-lg font-medium">You scored {score} out of {questions.length}</p>
                        <p className="text-muted-foreground text-sm">
                            {percentage >= 70 ? "Great job! You're mastering the material." : "Keep practicing to improve your score."}
                        </p>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center gap-4 pt-4 pb-8">
                    <Button variant="outline" onClick={onExit}>Choose Another Quiz</Button>
                    <Button onClick={handleRetry} className="gap-2">
                        <RotateCcw className="w-4 h-4" /> Try Again
                    </Button>
                </CardFooter>
            </Card>
        );
    }

    return (
        <div className="w-full max-w-3xl mx-auto space-y-6">
            <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Question {currentQuestionIndex + 1} / {questions.length}</span>
                    <span className="font-medium text-primary">{category} Exam</span>
                </div>
                <Progress value={progress} className="h-2" />
            </div>

            <Card className="border-2 shadow-sm">
                <CardHeader className="space-y-4">
                    {currentQuestion.scenario && (
                        <div className="bg-muted p-4 rounded-lg text-sm leading-relaxed border-l-4 border-primary/50 italic text-muted-foreground">
                            <span className="font-semibold not-italic text-foreground block mb-1">Scenario:</span>
                            {currentQuestion.scenario}
                        </div>
                    )}
                    <CardTitle className="text-xl font-semibold leading-tight">
                        {currentQuestion.questionText}
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3">
                    {currentQuestion.options.map((option, index) => {
                        let variant = "outline";
                        let className = "justify-start text-left h-auto py-4 px-4 whitespace-normal";

                        if (showExplanation) {
                            if (index === currentQuestion.correctOptionIndex) {
                                className += " bg-green-100 dark:bg-green-900/30 border-green-500 hover:bg-green-100 hover:text-green-900 dark:hover:bg-green-900/30 dark:hover:text-green-100";
                            } else if (index === selectedOption) {
                                className += " bg-red-100 dark:bg-red-900/30 border-red-500 hover:bg-red-100 hover:text-red-900 dark:hover:bg-red-900/30 dark:hover:text-red-100";
                            } else {
                                className += " opacity-50";
                            }
                        } else if (selectedOption === index) {
                            className += " border-primary ring-1 ring-primary bg-primary/5";
                        }

                        return (
                            <Button
                                key={index}
                                variant={"outline"}
                                className={className}
                                onClick={() => handleOptionSelect(index)}
                            >
                                <div className="flex items-start gap-3 w-full">
                                    <div className="min-w-[24px] flex items-center justify-center pt-0.5">
                                        {showExplanation && index === currentQuestion.correctOptionIndex ? (
                                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                                        ) : showExplanation && index === selectedOption ? (
                                            <XCircle className="w-5 h-5 text-red-600" />
                                        ) : (
                                            <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs ${selectedOption === index ? 'border-primary bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>
                                                {String.fromCharCode(65 + index)}
                                            </div>
                                        )}
                                    </div>
                                    <span>{option}</span>
                                </div>
                            </Button>
                        );
                    })}
                </CardContent>
                <CardFooter className="flex flex-col gap-4 border-t bg-muted/20 p-6">
                    {showExplanation && (
                        <div className="w-full space-y-2 animate-in slide-in-from-top-2 duration-200">
                            <div className="flex items-center gap-2 font-semibold text-sm">
                                <span>Explanation</span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {currentQuestion.explanation}
                            </p>
                        </div>
                    )}

                    <div className="w-full flex justify-end pt-2">
                        {!showExplanation ? (
                            <Button
                                onClick={handleSubmitAnswer}
                                disabled={selectedOption === null}
                                className="w-full md:w-auto min-w-[140px]"
                            >
                                Check Answer
                            </Button>
                        ) : (
                            <Button
                                onClick={handleNextQuestion}
                                className="w-full md:w-auto min-w-[140px]"
                            >
                                {currentQuestionIndex < questions.length - 1 ? (
                                    <>Next Question <ArrowRight className="ml-2 w-4 h-4" /></>
                                ) : (
                                    "Finish Quiz"
                                )}
                            </Button>
                        )}
                    </div>
                </CardFooter>
            </Card>

            <div className="text-center">
                <Button variant="ghost" size="sm" onClick={onExit} className="text-muted-foreground hover:text-foreground">
                    Back to Selection
                </Button>
            </div>
        </div>
    );
}
