import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'ar'] as const;
type Locale = typeof locales[number];

export default getRequestConfig(async ({ locale }: { locale: string }) => {
    const currentLocale = locale as Locale;

    if (!locales.includes(currentLocale)) {
        notFound();
    }

    return {
        messages: (await import(`../translation/${currentLocale}.json`)).default,
    };
});