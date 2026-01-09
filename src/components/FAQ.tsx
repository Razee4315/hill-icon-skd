import { useState } from 'react';
import { Head } from 'vite-react-ssg';
import { motion, AnimatePresence } from 'framer-motion';
import { ExpandMore } from '@mui/icons-material';
import './FAQ.css';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What is the best time to visit Skardu?",
        answer: "The best time to visit Skardu is from April to October. During these months, the weather is pleasant, and most tourist attractions, including Deosai National Park, are accessible. Peak season is June to August when all roads are open."
    },
    {
        question: "How far is Hill Icon from Skardu Airport?",
        answer: "Hill Icon is located approximately 15 minutes away from Skardu Airport. We offer complimentary airport pickup service for our guests upon request."
    },
    {
        question: "Do you offer tours to Deosai National Park?",
        answer: "Yes, we offer full-day guided tours to Deosai National Park, known as the 'Land of Giants'. Our packages include transportation in 4x4 vehicles, breakfast, and entry tickets. Deosai is famous for its wildflowers, wildlife, and Sheosar Lake."
    },
    {
        question: "What amenities are included in the room rates?",
        answer: "All our rooms include free WiFi, complimentary breakfast for up to 4 guests, free parking, 24/7 room service, and stunning mountain views. Additional amenities vary by room type."
    },
    {
        question: "Can you arrange transport for valley tours?",
        answer: "Yes, we have a fleet of comfortable vehicles including Toyota Premio sedans and Prado 4x4 SUVs available for city transfers, airport pickups, and valley tours. Professional drivers familiar with the terrain are provided."
    },
    {
        question: "Is advance booking required?",
        answer: "We recommend booking at least 2-3 weeks in advance, especially during peak season (June-August). For Deosai tours, early booking is essential as the park has limited daily visitors."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // JSON-LD FAQPage schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <>
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Head>
            <section className="faq-section">
                <div className="faq-header">
                    <span className="text-accent text-uppercase tracking-widest text-sm font-semibold">
                        Common Questions
                    </span>
                    <h2 className="faq-title">Frequently Asked Questions</h2>
                </div>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item glass-panel ${openIndex === index ? 'active' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{item.question}</span>
                                <motion.span
                                    className="faq-icon"
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ExpandMore />
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        className="faq-answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{item.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default FAQ;
