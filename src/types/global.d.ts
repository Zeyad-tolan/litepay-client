/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
    interface Window {
        fbq: (...args: any[]) => void;
        ttq: { track: (...args: any[]) => void };
    }
}