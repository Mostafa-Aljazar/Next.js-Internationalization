import { getDictionary } from "../dictionaries";

const AboutPage = async ({params}) => {
  const lang = await getDictionary(params.lang);

  return (
    <div>
      {lang?.HelloAboutPage}
    </div>
  )
}

export default AboutPage
