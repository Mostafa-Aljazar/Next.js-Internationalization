
import { getDictionary } from "./dictionaries";

export default async  function Home({ params }) {
  const lang = await getDictionary(params.lang);
  

  return (
    <div>
      <h1>{lang?.Home}</h1>

        <div style={{ margin: "10px" }}>
          <label htmlFor="name"> {lang?.form.name}:</label>
          <input id="name" />
        </div>

        <div style={{ margin: "10px" }}>
          <label htmlFor="email">{lang?.form.email}:</label>
          <input id="email" />
        </div>

        <div style={{ margin: "10px" }}>
          <label htmlFor="password"> {lang?.form.password}:</label>
          <input id="password" />
        </div>
    </div>
  );
}
