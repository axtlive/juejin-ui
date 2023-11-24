"use client";

import { useMemo } from "react";
import gfm from "@bytemd/plugin-gfm";
import gemoji from "@bytemd/plugin-gemoji";
import highlight from "@bytemd/plugin-highlight-ssr";
import frontmatter from "@bytemd/plugin-frontmatter";
import mediumZoom from "@bytemd/plugin-medium-zoom";
import breaks from "@bytemd/plugin-breaks";
import math from "@bytemd/plugin-math-ssr";
import EditorPlugin from '../../../plugins/EditorPlugin'
import { Viewer } from "@bytemd/react";
import { usePathname } from "next/navigation";
// import "juejin-markdown-themes/dist/fancy.css"

import "bytemd/dist/index.css";
// import "highlight.js/styles/monokai.css";
// import "highlight.js/styles/atom-one-light.css";

const str = `---%0Ahighlight%3A%20gradient-light%0Atheme%3A%20Chinese-red%0A---%0A%0A%23%20%5BReact%5D(https%3A%2F%2Freactjs.org%2F)%20%26middot%3B%20%5B!%5BGitHub%20license%5D(https%3A%2F%2Fimg.shields.io%2Fbadge%2Flicense-MIT-blue.svg)%5D(https%3A%2F%2Fgithub.com%2Ffacebook%2Freact%2Fblob%2Fmain%2FLICENSE)%20%5B!%5Bnpm%20version%5D(https%3A%2F%2Fimg.shields.io%2Fnpm%2Fv%2Freact.svg%3Fstyle%3Dflat)%5D(https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Freact)%20%5B!%5BCircleCI%20Status%5D(https%3A%2F%2Fcircleci.com%2Fgh%2Ffacebook%2Freact.svg%3Fstyle%3Dshield)%5D(https%3A%2F%2Fcircleci.com%2Fgh%2Ffacebook%2Freact)%20%5B!%5BPRs%20Welcome%5D(https%3A%2F%2Fimg.shields.io%2Fbadge%2FPRs-welcome-brightgreen.svg)%5D(https%3A%2F%2Freactjs.org%2Fdocs%2Fhow-to-contribute.html%23your-first-pull-request)%0A%0AReact%20is%20a%20JavaScript%20library%20for%20building%20user%20interfaces.%0A%0A*%20**Declarative%3A**%20React%20makes%20it%20painless%20to%20create%20interactive%20UIs.%20Design%20simple%20views%20for%20each%20state%20in%20your%20application%2C%20and%20React%20will%20efficiently%20update%20and%20render%20just%20the%20right%20components%20when%20your%20data%20changes.%20Declarative%20views%20make%20your%20code%20more%20predictable%2C%20simpler%20to%20understand%2C%20and%20easier%20to%20debug.%0A*%20**Component-Based%3A**%20Build%20encapsulated%20components%20that%20manage%20their%20own%20state%2C%20then%20compose%20them%20to%20make%20complex%20UIs.%20Since%20component%20logic%20is%20written%20in%20JavaScript%20instead%20of%20templates%2C%20you%20can%20easily%20pass%20rich%20data%20through%20your%20app%20and%20keep%20the%20state%20out%20of%20the%20DOM.%0A*%20**Learn%20Once%2C%20Write%20Anywhere%3A**%20We%20don't%20make%20assumptions%20about%20the%20rest%20of%20your%20technology%20stack%2C%20so%20you%20can%20develop%20new%20features%20in%20React%20without%20rewriting%20existing%20code.%20React%20can%20also%20render%20on%20the%20server%20using%20Node%20and%20power%20mobile%20apps%20using%20%5BReact%20Native%5D(https%3A%2F%2Freactnative.dev%2F).%0A%0A%5BLearn%20how%20to%20use%20React%20in%20your%20project%5D(https%3A%2F%2Freact.dev%2Flearn).%0A%0A%23%23%20Installation%0A%0AReact%20has%20been%20designed%20for%20gradual%20adoption%20from%20the%20start%2C%20and%20**you%20can%20use%20as%20little%20or%20as%20much%20React%20as%20you%20need**%3A%0A%0A*%20Use%20%5BOnline%20Playgrounds%5D(https%3A%2F%2Freactjs.org%2Fdocs%2Fgetting-started.html%23online-playgrounds)%20to%20get%20a%20taste%20of%20React.%0A*%20%5BAdd%20React%20to%20a%20Website%5D(https%3A%2F%2Freactjs.org%2Fdocs%2Fadd-react-to-a-website.html)%20as%20a%20%60%3Cscript%3E%60%20tag%20in%20one%20minute.%0A*%20%5BCreate%20a%20New%20React%20App%5D(https%3A%2F%2Freactjs.org%2Fdocs%2Fcreate-a-new-react-app.html)%20if%20you're%20looking%20for%20a%20powerful%20JavaScript%20toolchain.%0A%0AYou%20can%20use%20React%20as%20a%20%60%3Cscript%3E%60%20tag%20from%20a%20%5BCDN%5D(https%3A%2F%2Freactjs.org%2Fdocs%2Fcdn-links.html)%2C%20or%20as%20a%20%60react%60%20package%20on%20%5Bnpm%5D(https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Freact).%0A%0A%23%23%20Documentation%0A%0AYou%20can%20find%20the%20React%20documentation%20%5Bon%20the%20website%5D(https%3A%2F%2Freact.dev%2F).%20%20%0A%0ACheck%20out%20the%20%5BGetting%20Started%5D(https%3A%2F%2Freact.dev%2Flearn)%20page%20for%20a%20quick%20overview.%0A%0AThe%20documentation%20is%20divided%20into%20several%20sections%3A%0A%0A*%20%5BTutorial%5D(https%3A%2F%2Freactjs.org%2Ftutorial%2Ftutorial.html)%0A*%20%5BMain%20Concepts%5D(https%3A%2F%2Freactjs.org%2Fdocs%2Fhello-world.html)%0A*%20%5BAdvanced%20Guides%5D(https%3A%2F%2Freactjs.org%2Fdocs%2Fjsx-in-depth.html)%0A*%20%5BAPI%20Reference%5D(https%3A%2F%2Freactjs.org%2Fdocs%2Freact-api.html)%0A*%20%5BWhere%20to%20Get%20Support%5D(https%3A%2F%2Freactjs.org%2Fcommunity%2Fsupport.html)%0A*%20%5BContributing%20Guide%5D(https%3A%2F%2Freactjs.org%2Fdocs%2Fhow-to-contribute.html)%0A%0AYou%20can%20improve%20it%20by%20sending%20pull%20requests%20to%20%5Bthis%20repository%5D(https%3A%2F%2Fgithub.com%2Freactjs%2Freactjs.org).%0A%0A%23%23%20Examples%0A%0AWe%20have%20several%20examples%20%5Bon%20the%20website%5D(https%3A%2F%2Freactjs.org%2F).%20Here%20is%20the%20first%20one%20to%20get%20you%20started%3A%0A%0A%60%60%60jsx%0Aimport%20%7B%20createRoot%20%7D%20from%20'react-dom%2Fclient'%3B%0A%0Afunction%20HelloMessage(%7B%20name%20%7D)%20%7B%0A%20%20return%20%3Cdiv%3EHello%20%7Bname%7D%3C%2Fdiv%3E%3B%0A%7D%0A%0Aconst%20root%20%3D%20createRoot(document.getElementById('container'))%3B%0Aroot.render(%3CHelloMessage%20name%3D%22Taylor%22%20%2F%3E)%3B%0A%60%60%60%0A%0AThis%20example%20will%20render%20%22Hello%20Taylor%22%20into%20a%20container%20on%20the%20page.%0A%0AYou'll%20notice%20that%20we%20used%20an%20HTML-like%20syntax%3B%20%5Bwe%20call%20it%20JSX%5D(https%3A%2F%2Freactjs.org%2Fdocs%2Fintroducing-jsx.html).%20JSX%20is%20not%20required%20to%20use%20React%2C%20but%20it%20makes%20code%20more%20readable%2C%20and%20writing%20it%20feels%20like%20writing%20HTML.%20If%20you're%20using%20React%20as%20a%20%60%3Cscript%3E%60%20tag%2C%20read%20%5Bthis%20section%5D(https%3A%2F%2Freactjs.org%2Fdocs%2Fadd-react-to-a-website.html%23optional-try-react-with-jsx)%20on%20integrating%20JSX%3B%20otherwise%2C%20the%20%5Brecommended%20JavaScript%20toolchains%5D(https%3A%2F%2Freactjs.org%2Fdocs%2Fcreate-a-new-react-app.html)%20handle%20it%20automatically.%0A%0A%23%23%20Contributing%0A%0AThe%20main%20purpose%20of%20this%20repository%20is%20to%20continue%20evolving%20React%20core%2C%20making%20it%20faster%20and%20easier%20to%20use.%20Development%20of%20React%20happens%20in%20the%20open%20on%20GitHub%2C%20and%20we%20are%20grateful%20to%20the%20community%20for%20contributing%20bugfixes%20and%20improvements.%20Read%20below%20to%20learn%20how%20you%20can%20take%20part%20in%20improving%20React.%0A%0A%23%23%23%20%5BCode%20of%20Conduct%5D(https%3A%2F%2Fcode.fb.com%2Fcodeofconduct)%0A%0AFacebook%20has%20adopted%20a%20Code%20of%20Conduct%20that%20we%20expect%20project%20participants%20to%20adhere%20to.%20Please%20read%20%5Bthe%20full%20text%5D(https%3A%2F%2Fcode.fb.com%2Fcodeofconduct)%20so%20that%20you%20can%20understand%20what%20actions%20will%20and%20will%20not%20be%20tolerated.%0A%0A%23%23%23%20%5BContributing%20Guide%5D(https%3A%2F%2Freactjs.org%2Fdocs%2Fhow-to-contribute.html)%0A%0ARead%20our%20%5Bcontributing%20guide%5D(https%3A%2F%2Freactjs.org%2Fdocs%2Fhow-to-contribute.html)%20to%20learn%20about%20our%20development%20process%2C%20how%20to%20propose%20bugfixes%20and%20improvements%2C%20and%20how%20to%20build%20and%20test%20your%20changes%20to%20React.%0A%0A%23%23%23%20Good%20First%20Issues%0A%0ATo%20help%20you%20get%20your%20feet%20wet%20and%20get%20you%20familiar%20with%20our%20contribution%20process%2C%20we%20have%20a%20list%20of%20%5Bgood%20first%20issues%5D(https%3A%2F%2Fgithub.com%2Ffacebook%2Freact%2Flabels%2Fgood%2520first%2520issue)%20that%20contain%20bugs%20that%20have%20a%20relatively%20limited%20scope.%20This%20is%20a%20great%20place%20to%20get%20started.%0A%0A%23%23%23%20License%0A%0AReact%20is%20%5BMIT%20licensed%5D(.%2FLICENSE).%0A`

export default function Page() {
  const plugins = useMemo(
    () => [
      frontmatter(),
      EditorPlugin(),
      gfm(),
      gemoji(),
      mediumZoom(),
      breaks(),
      math(),
      highlight(),
      // Add more plugins here
    ],
    []
  );
  return (
    <Viewer
      value={decodeURIComponent(str)}
      plugins={plugins}
    />
  );
}
