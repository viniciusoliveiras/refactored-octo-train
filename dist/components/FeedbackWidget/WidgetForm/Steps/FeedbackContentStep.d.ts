/// <reference types="react" />
import { FeedbackType } from '..';
interface Props {
    feedbackType: FeedbackType;
    onFeedbackRestartRequest: () => void;
    onFeedbackSent: () => void;
}
export declare function FeedbackContentStep({ feedbackType, onFeedbackRestartRequest, onFeedbackSent }: Props): JSX.Element;
export {};
