import { getDictionary } from '../../dictionaries';

const MePage = async ({ params }) => {
  const lang = await getDictionary(params.lang);


  // console.log("MePage => " ,params)
  return (
    <div>
    {lang?.MePage}
    </div>
  )
}

export default MePage
