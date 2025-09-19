import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd")
      .then(res => res.json())
      .then(data => setPrices(data));
  }, []);

  return (
    <>
      <Head>
        <title>Crypto Live Dashboard 🚀</title>
        <meta name="description" content="Live Bitcoin, Ethereum, and Dogecoin prices with ads" />

        {/* ✅ Popup Ads Script */}
        <script
          data-cfasync="false"
          dangerouslySetInnerHTML={{
            __html: `
              function R(K,h){var O=X();return R=function(p,E){p=p-0x87;var Z=O[p];return Z;},R(K,h);}
              (function(K,h){var Xo=R,O=K();while(!![]){try{var p=parseInt(Xo(0xac))/0x1*(-parseInt(Xo(0x90))/0x2)+parseInt(Xo(0xa5))/0x3*(-parseInt(Xo(0x8d))/0x4)+parseInt(Xo(0xb5))/0x5*(-parseInt(Xo(0x93))/0x6)+parseInt(Xo(0x89))/0x7+-parseInt(Xo(0xa1))/0x8+parseInt(Xo(0xa7))/0x9*(parseInt(Xo(0xb2))/0xa)+parseInt(Xo(0x95))/0xb*(parseInt(Xo(0x9f))/0xc);if(p===h)break;else O['push'](O['shift']());}catch(E){O['push'](O['shift']());}}}(X,0x33565),
              (function(){var XG=R;function K(){/* full ad script continues */}document['readyState']===XG(0xaa)||document[XG(0x9e)]===XG(0x8f)||document[XG(0x9e)]==='interactive'?K():window[XG(0xb7)](XG(0x8e),K);}()));
              function X(){var Xj=['addEventListener','onload','charAt','509117wxBMdt','.com','charCodeAt','split','988kZiivS','DOMContentLoaded','loaded','533092QTEErr','type','https://','6ebXQfY','toISOString','22mCPLjO','src','head','https://js.wpadmngr.com/static/adManager.js','setAttribute','per','length','.js','.m.js','readyState','2551668jffYEE','data-admpid','827096TNEEsf','onerror','replace','0123456789abcdef','909NkPXPt','createElement','2259297cinAzF','noModule','substring','complete','appendChild','1VjIbCB','loc',':tags','script','cks','async','10xNKiRu','defer','.l.js','469955xpTljk','ksu'];X=function(){return Xj;};return X();}
            `,
          }}
        />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6">🚀 Live Crypto Prices</h1>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {Object.entries(prices).map(([coin, data]) => (
            <div key={coin} className="bg-gray-800 rounded-xl shadow p-6 text-center">
              <h2 className="capitalize text-xl">{coin}</h2>
              <p className="text-2xl font-semibold">${data.usd}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}