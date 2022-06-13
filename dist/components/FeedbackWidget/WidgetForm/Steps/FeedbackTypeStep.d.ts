/// <reference types="react" />
import { FeedbackType } from '..';
interface Props {
    onFeedbackTypeChange: (feedbackType: FeedbackType) => void;
}
export declare function FeedbackTypeStep({ onFeedbackTypeChange }: Props): JSX.Element;
export {};
