"use client";
import { React, useEffect, useState, useCallback, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getDictionary } from "@/app/[lang]/dictionaries";

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();

  const [language, setLanguage] = useState({});
  const [s, setS] = useState(false);

  useEffect(() => {
    (async function () {
      if (path.includes("ar")) {
        const lang = await getDictionary("ar");
        setLanguage(lang);
      } else {
        const lang = await getDictionary("en");
        setLanguage(lang);
      }
    })();

  }, [path]);

  const handelChange = (e) => {
    e.preventDefault();
    const urls = path.split("/").slice(2);
    if (path.includes("ar")) {
      router.push(`/en/${urls.join("/")}`);
    } else if (path.includes("en")) {
      router.push(`/ar/${urls.join("/")}`);
    }
    /*
    // const newPath = router.asPath.replace(/^\/(en|hi)/, "");
    // const newUrl = `/${lang}${newPath}`;
    // router.push(newUrl, newUrl, { locale: lang === "hi" ? false : lang });
  
*/
  };

  return (
    <div>
      <button onClick={handelChange}>
        {language?.changLang}
      </button>
      <button  onClick={() => router.push('/')}>
        {language?.goToHome}
      </button>
      <button  onClick={() => router.push('/about')}>
        {language?.goToAbout}
      </button>
      <button  onClick={() => router.push('/about/me')}>
        {language?.goToAboutMe}
      </button>
    </div>
  );
};

export default Navbar;
