import { ArrowLeft } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { FeedbackType, feedbackTypes } from '..'
import { CloseButton } from '../../CloseButton'
import { ScreenshotButton } from '../ScreenshotButton'

interface Props {
  feedbackType: FeedbackType
  onFeedbackRestartRequest: () => void
  onFeedbackSent: () => void
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequest,
  onFeedbackSent
}: Props) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')

  const { image, title } = feedbackTypes[feedbackType]

  const resetFeedbackForm = () => {
    setScreenshot(null)
    setComment('')
  }

  const handleFeedbackSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log({ screenshot, comment })
    onFeedbackSent()
    resetFeedbackForm()
  }

  return (
    <>
      <header>
        <button
          type='button'
          className='absolute top-5 left-5 text-zinc-400 hover:text-zinc-100'
          onClick={onFeedbackRestartRequest}
        >
          <ArrowLeft weight='bold' className='h-4 w-4' />
        </button>
        <span className='flex items-center gap-2 text-xl leading-6'>
          <img src={image.source} alt={image.alt} className='h-6 w-6' /> {title}
        </span>

        <CloseButton />
      </header>

      <form className='my-4 w-full' onSubmit={handleFeedbackSubmit}>
        <textarea
          className='min-h-[112px] w-full min-w-[304px] resize-none rounded-md border border-zinc-600 bg-transparent py-2 px-3 text-sm text-zinc-200 placeholder-zinc-400 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500'
          placeholder='Conte com detalhes o que está acontecendo...'
          value={comment}
          onChange={({ target: { value } }) => setComment(value)}
        />

        <footer className='mt-2 flex gap-2'>
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type='submit'
            className='flex-1 items-center justify-center rounded border-transparent bg-brand-500 p-2 text-sm transition-colors hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:cursor-not-allowed disabled:opacity-50 hover:disabled:bg-brand-500'
            disabled={comment.trim() === ''}
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}
