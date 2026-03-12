import { motion } from "framer-motion";
import { ArrowLeft, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";

const Feedback = () => {
    const [rating, setRating] = useState(0);

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-12">
                <Link to="/" className="mb-8 inline-flex items-center gap-2 text-primary hover:underline">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Calculator
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-auto max-w-2xl"
                >
                    <h1 className="mb-4 font-heading text-4xl font-bold text-foreground">Share Your Feedback</h1>
                    <p className="mb-8 text-muted-foreground">
                        We value your opinion! Help us improve by sharing your experience with our SIP calculator.
                    </p>

                    <div className="rounded-xl border border-border bg-card p-8 shadow-card">
                        <div className="mb-6">
                            <h3 className="mb-3 font-heading text-lg font-semibold">How would you rate your experience?</h3>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        onClick={() => setRating(star)}
                                        className="transition-transform hover:scale-110"
                                    >
                                        <Star
                                            className={`h-10 w-10 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                                }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="feedback" className="mb-2 block font-heading text-sm font-semibold">
                                Tell us more about your experience
                            </label>
                            <Textarea
                                id="feedback"
                                placeholder="What did you like? What could we improve?"
                                rows={6}
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="feature" className="mb-2 block font-heading text-sm font-semibold">
                                What feature would you like to see next? (Optional)
                            </label>
                            <Textarea
                                id="feature"
                                placeholder="Share your ideas..."
                                rows={3}
                            />
                        </div>

                        <Button className="w-full">Submit Feedback</Button>

                        <p className="mt-4 text-center text-xs text-muted-foreground">
                            Your feedback helps us create better tools for everyone. Thank you!
                        </p>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default Feedback;
