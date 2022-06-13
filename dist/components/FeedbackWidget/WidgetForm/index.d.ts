/// <reference types="react" />
export declare const feedbackTypes: {
    BUG: {
        title: string;
        image: {
            source: string;
            alt: string;
        };
    };
    IDEA: {
        title: string;
        image: {
            source: string;
            alt: string;
        };
    };
    OTHER: {
        title: string;
        image: {
            source: string;
            alt: string;
        };
    };
};
export declare type FeedbackType = keyof typeof feedbackTypes;
export declare function WidgetForm(): JSX.Element;
