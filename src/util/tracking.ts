import { sendGTMEvent } from "@next/third-parties/google";

export const tracking = (name:string,data:{[key:string]:string | number}) => {
    sendGTMEvent({
        event: name,
        ...data
    });
    trackingFbq(name,data)
    trackingTtq(name,data)
}

export const trackingFbq = (name:string,data:{[key:string]:string | number}) => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', name, {
            ...data
        });
    }
}

export const trackingTtq = (name:string,data:{[key:string]:string | number}) => {
    if (typeof window !== 'undefined' && window.ttq) {
        window.ttq.track(name, {
            ...data
        });
    }
}