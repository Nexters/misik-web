
import { useUserAgent } from '@/components/provider/UserAgentProvider';

export default function DownloadPage() {

  const userAgent = useUserAgent();

  const isIOS = userAgent.isIOS;

  const iosAppStoreUrl = 'https://apps.apple.com/kr/app/%EB%AF%B8%EC%8B%9D-misik-ai-%EC%98%81%EC%88%98%EC%A6%9D-%EB%A6%AC%EB%B7%B0/id6741109313';
  const androidPlayStoreUrl = 'https://play.google.com/store/apps/details?id=com.nexters.misik';

  if (isIOS) {
    window.location.href = iosAppStoreUrl;
  } else{
    window.location.href = androidPlayStoreUrl;
  } 
  return (
    <></>
  )
}
