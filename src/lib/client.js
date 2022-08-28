import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: '17iysygpdi',
  apiKey: `${process.env.NEXT_PUBLIC_MICROCMS_KEY}`,
});