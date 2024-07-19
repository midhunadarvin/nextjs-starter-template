'use client';

import { useEffect } from 'react';

function isChrome() {
  // please note,
  // that IE11 now returns undefined again for window.chrome
  // and new Opera 30 outputs true for window.chrome
  // but needs to check if window.opr is not undefined
  // and new IE Edge outputs to true now for window.chrome
  // and if not iOS Chrome check
  // so use the below updated condition
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isChromium = (window as any).chrome;
  const winNav = window.navigator;
  const vendorName = winNav.vendor;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isOpera = typeof (window as any).opr !== 'undefined';
  const isIEedge = winNav.userAgent.indexOf('Edg') > -1;
  const isIOSChrome = winNav.userAgent.match('CriOS');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isGoogleChrome = (winNav as any).userAgentData?.brands.find(
    (b: { brand: string }) => b.brand == 'Google Chrome',
  );

  if (isIOSChrome) {
    // is Google Chrome on IOS
    return true;
  } else if (
    isChromium !== null &&
    typeof isChromium !== 'undefined' &&
    vendorName === 'Google Inc.' &&
    isOpera === false &&
    isIEedge === false &&
    isGoogleChrome
  ) {
    // is Google Chrome
    return true;
  } else {
    // not Google Chrome
    return false;
  }
}

export function useCheckChrome() {
  useEffect(() => {
    if (!isChrome()) throw new Error('Must visit this website on Google Chrome!');
  });
}
