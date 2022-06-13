/// <reference types="react" />
interface Props {
    screenshot: string | null;
    onScreenshotTook: (screenshot: string | null) => void;
}
export declare function ScreenshotButton({ screenshot, onScreenshotTook }: Props): JSX.Element;
export {};
