"use client";

import { useState } from "react";
import { Question } from "@/app/data/exam-questions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RotateCcw, CheckCircle2, XCircle, ArrowRight, ArrowLeft, Target, TrendingUp, ArrowLeftCircle, Lightbulb } from "lucide-react";

interface ExamQuizProps {
    questions: Question[];
    category: string;
    onExit: () => void;
}

interface QuestionState {
    selectedOption: number | null;
    isAnswered: boolean;
    isCorrect: boolean;
}

export function ExamQuiz({ questions, category, onExit }: ExamQuizProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questionStates, setQuestionStates] = useState<QuestionState[]>(
        questions.map(() => ({ selectedOption: null, isAnswered: false, isCorrect: false }))
    );
    const [quizCompleted, setQuizCompleted] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];
    const currentState = questionStates[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    // Calculate live statistics
    const answeredQuestions = questionStates.filter(q => q.isAnswered);
    const correctCount = answeredQuestions.filter(q => q.isCorrect).length;
    const incorrectCount = answeredQuestions.filter(q => !q.isCorrect).length;
    const accuracy = answeredQuestions.length > 0
        ? Math.round((correctCount / answeredQuestions.length) * 100)
        : 0;

    const handleOptionSelect = (index: number) => {
        if (currentState.isAnswered) return;

        setQuestionStates(prev => {
            const newStates = [...prev];
            newStates[currentQuestionIndex] = {
                ...newStates[currentQuestionIndex],
                selectedOption: index
            };
            return newStates;
        });
    };

    const handleSubmitAnswer = () => {
        if (currentState.selectedOption === null) return;

        const isCorrect = currentState.selectedOption === currentQuestion.correctOptionIndex;

        setQuestionStates(prev => {
            const newStates = [...prev];
            newStates[currentQuestionIndex] = {
                ...newStates[currentQuestionIndex],
                isAnswered: true,
                isCorrect
            };
            return newStates;
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizCompleted(true);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleRetry = () => {
        setCurrentQuestionIndex(0);
        setQuestionStates(questions.map(() => ({ selectedOption: null, isAnswered: false, isCorrect: false })));
        setQuizCompleted(false);
    };

    const finalScore = questionStates.filter(q => q.isCorrect).length;
    const percentage = Math.round((finalScore / questions.length) * 100);

    if (quizCompleted) {
        return (
            <Card className="w-full max-w-2xl mx-auto shadow-lg animate-in fade-in zoom-in-95 duration-300">
                <CardHeader className="text-center pb-2">
                    <CardTitle className="text-2xl font-bold">Quiz Completed!</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-6 pt-6">
                    <div className="relative flex items-center justify-center w-32 h-32">
                        <div className={`text-4xl font-extrabold ${percentage >= 70 ? 'text-green-600' : 'text-orange-500'}`}>
                            {percentage}%
                        </div>
                    </div>
                    <div className="text-center space-y-1">
                        <p className="text-lg font-medium">You scored {finalScore} out of {questions.length}</p>
                        <p className="text-muted-foreground text-sm">
                            {percentage >= 70 ? "Great job! You're mastering the material." : "Keep practicing to improve your score."}
                        </p>
                    </div>
                    <div className="flex gap-8 text-center">
                        <div>
                            <div className="text-2xl font-bold text-green-600">{correctCount}</div>
                            <div className="text-sm text-muted-foreground">Correct</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-red-500">{incorrectCount}</div>
                            <div className="text-sm text-muted-foreground">Incorrect</div>
                        </div>
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
        <div className="w-full max-w-5xl mx-auto space-y-4">
            {/* Top Bar with Back Button */}
            <div className="flex items-center justify-between">
                <Button variant="ghost" size="sm" onClick={onExit} className="text-muted-foreground hover:text-foreground gap-2 -ml-2">
                    <ArrowLeftCircle className="w-4 h-4" />
                    Back to Selection
                </Button>
                <span className="text-sm font-medium text-primary">{category} Exam</span>
            </div>

            {/* Statistics Bar */}
            <div className="flex items-center justify-between gap-4 p-3 bg-muted/50 rounded-lg border">
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-green-600">{correctCount}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <XCircle className="w-4 h-4 text-red-500" />
                        <span className="font-medium text-red-500">{incorrectCount}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <Target className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium">{accuracy}% accuracy</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    <span>{answeredQuestions.length}/{questions.length} answered</span>
                </div>
            </div>

            {/* Progress */}
            <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Question {currentQuestionIndex + 1} / {questions.length}</span>
                </div>
                <Progress value={progress} className="h-2" />
            </div>

            {/* Main Content - Responsive Grid */}
            <div className="flex flex-col lg:flex-row gap-4">
                {/* Question Card */}
                <Card className="border-2 shadow-sm flex-1">
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
                            let className = "justify-start text-left h-auto py-4 px-4 whitespace-normal";

                            if (currentState.isAnswered) {
                                if (index === currentQuestion.correctOptionIndex) {
                                    className += " bg-green-100 dark:bg-green-900/30 border-green-500 hover:bg-green-100 dark:hover:bg-green-900/30";
                                } else if (index === currentState.selectedOption) {
                                    className += " bg-red-100 dark:bg-red-900/30 border-red-500 hover:bg-red-100 dark:hover:bg-red-900/30";
                                } else {
                                    className += " opacity-50";
                                }
                            } else if (currentState.selectedOption === index) {
                                className += " border-primary ring-1 ring-primary bg-primary/5";
                            }

                            return (
                                <Button
                                    key={index}
                                    variant="outline"
                                    className={className}
                                    onClick={() => handleOptionSelect(index)}
                                    disabled={currentState.isAnswered}
                                >
                                    <div className="flex items-start gap-3 w-full">
                                        <div className="min-w-[24px] flex items-center justify-center pt-0.5">
                                            {currentState.isAnswered && index === currentQuestion.correctOptionIndex ? (
                                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                            ) : currentState.isAnswered && index === currentState.selectedOption ? (
                                                <XCircle className="w-5 h-5 text-red-600" />
                                            ) : (
                                                <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs ${currentState.selectedOption === index ? 'border-primary bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>
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
                    <CardFooter className="flex justify-between items-center border-t bg-muted/20 p-6">
                        <Button
                            variant="outline"
                            onClick={handlePreviousQuestion}
                            disabled={currentQuestionIndex === 0}
                            className="gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" /> Previous
                        </Button>

                        {!currentState.isAnswered ? (
                            <Button
                                onClick={handleSubmitAnswer}
                                disabled={currentState.selectedOption === null}
                                className="min-w-[140px]"
                            >
                                Check Answer
                            </Button>
                        ) : (
                            <Button
                                onClick={handleNextQuestion}
                                className="min-w-[140px]"
                            >
                                {currentQuestionIndex < questions.length - 1 ? (
                                    <>Next <ArrowRight className="ml-2 w-4 h-4" /></>
                                ) : (
                                    "Finish Quiz"
                                )}
                            </Button>
                        )}
                    </CardFooter>
                </Card>

                {/* Explanation Panel - Right side on large screens, below on small */}
                <div className={`lg:w-80 transition-all duration-300 ${currentState.isAnswered ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
                    <Card className={`h-full border-2 ${currentState.isAnswered ? (currentState.isCorrect ? 'border-green-500/50 bg-green-50/50 dark:bg-green-950/20' : 'border-red-500/50 bg-red-50/50 dark:bg-red-950/20') : 'border-dashed'}`}>
                        <CardHeader className="pb-3">
                            <div className="flex items-center gap-2">
                                <Lightbulb className={`w-5 h-5 ${currentState.isAnswered ? (currentState.isCorrect ? 'text-green-600' : 'text-red-500') : 'text-muted-foreground'}`} />
                                <CardTitle className="text-base font-semibold">Explanation</CardTitle>
                                {currentState.isAnswered && (
                                    <span className={`text-xs px-2 py-0.5 rounded ml-auto ${currentState.isCorrect ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300'}`}>
                                        {currentState.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                                    </span>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent>
                            {currentState.isAnswered ? (
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {currentQuestion.explanation}
                                </p>
                            ) : (
                                <p className="text-sm text-muted-foreground italic">
                                    Answer the question to see the explanation.
                                </p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
