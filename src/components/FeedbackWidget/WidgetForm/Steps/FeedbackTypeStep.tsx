import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface Props {
  onFeedbackTypeChange: (feedbackType: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChange }: Props) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex w-full gap-2 py-8">
        {Object.entries(feedbackTypes).map(([type, { title, image }]) => (
          <button
            key={type}
            type="button"
            className="flex w-24 flex-1 flex-col items-center gap-2 rounded-lg border-2 border-transparent bg-zinc-800 py-5 hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            onClick={() => onFeedbackTypeChange(type as FeedbackType)}
          >
            <img src={image.source} alt={image.alt} />
            <span>{title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
