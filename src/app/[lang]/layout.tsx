/* eslint-disable @next/next/no-img-element */
import { RootLayoutProps } from "@/src/types";
import { NextIntlClientProvider } from "next-intl";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SocialMediaLinks from "../components/SocialMediaLinks";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

export default async function RootLayout({ children, params }: RootLayoutProps) {
    const lang = (await params).lang
    const messages = (await import(`../../../translation/${lang}.json`)).default;

    return (
        <html lang={lang}>
            <head>
                <Script id="fb-pixel" strategy="afterInteractive">
                    {`
                    !function(f,b,e,v,n,t,s) {
                        if(f.fbq) return;
                        n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq) f._fbq=n;
                        n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];
                        t=b.createElement(e);
                        t.async=!0;
                        t.src=v;
                        s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)
                    }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '1124085655771603');
                    fbq('track', 'PageView');
                    `}
                </Script>

                <noscript>
                    <img
                    height="1"
                    width="1"
                    style={{ display: "none" }}
                    src="https://www.facebook.com/tr?id=1124085655771603&ev=PageView&noscript=1"
                    alt="Facebook Pixel"
                    />
                </noscript>

                <Script id="tiktok-pixel" strategy="afterInteractive">
                    {`
                    !function (w, d, t) {
                        w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
                        var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
                        ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};

                        ttq.load('CT5HFURC77UANHJ2P2JG');
                        ttq.page();
                    }(window, document, 'ttq');
                    `}
                </Script>

                <Script id="clarity-pixel"
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(c,l,a,r,i,t,y){
                                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                            })(window, document, "clarity", "script", "p6uuyinllc");
                        `,
                    }}
                />

                <Script id="gtm" strategy="afterInteractive">
                    {`
                    (function(w,d,s,l,i){
                        w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});
                        var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
                        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                        f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-55L6MTDV');
                    `}
                </Script>
            </head>
            <body
                className={`${lang == "ar" ? "font-arabic" : "font-english"} overflow-x-hidden`}
                dir={lang == "ar" ? "rtl" : "ltr"}
            >
                <noscript>
                    <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-55L6MTDV"
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                    title="Google Tag Manager"
                    ></iframe>
                </noscript>
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    <div className="relative md:-mt-[148px] w-full flex md:flex-col flex-col-reverse bg-white dark:bg-primaryDark transition-all duration-300">
                        <SocialMediaLinks />
                        {children}
                    </div>
                    <Footer />
                    <Toaster />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
