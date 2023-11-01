import Showdown from 'showdown';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import LocalizationContext from '../LocalizationContext';

const Project = () => {
  const { projectSlug } = useParams();
  const [currentProject, setCurrentProject] = useState(undefined);
  const [error, setError] = useState(null);
  const [htmlContent, setHtmlContent] = useState("");
  const [locale, setLocale] = useContext(LocalizationContext);

  useEffect(() => {
    axios
    .get(`http://localhost:1337/api/projects?filters[Slug][$eq]=${projectSlug}&[locale][$eq]=${locale}`)
    .then(({data}) => setCurrentProject(data.data[0]))
    .catch((error)=> setError(error));
  }, [projectSlug, locale]);

  useEffect(() => {
    if (currentProject && currentProject.attributes.Content) {
      const converter = new Showdown.Converter({
        tables: true,
        tasklists: true,
        strikethrough: true,
      });
      const html = converter.makeHtml(currentProject.attributes.Content);
      setHtmlContent(html);
    }
  }, [currentProject]);

  if (error) {
    return <div> An error occured: {error.message}</div>;
  }

  return (
  <>
      {currentProject ?
      <div className="z-[2] dark:bg-black bg-gray-200 p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-rose-700 text-center group">
        <div
          className="dark:bg-black grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
        >
          <i className={currentProject.attributes.Icon} />
        </div>
        <h3 className="font-medium text-xl sm:text-2xl md:text-3xl">{currentProject.attributes.Title}</h3>
        <p>{currentProject.attributes.ReleaseDate.split("-").join("/")}</p>

        <div className="markdown text-start dark:text-white text-black" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
      : <div> Project not found </div>}
  </>
  )
}
export default Project;
