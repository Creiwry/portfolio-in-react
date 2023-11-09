import Showdown from 'showdown';
import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import LocalizationContext from '../LocalizationContext';
import { projectDataEnglish, projectDataFrench } from '../../public/data';

const Project = () => {
  const { projectSlug } = useParams();
  const [currentProject, setCurrentProject] = useState(undefined);
  const [htmlContent, setHtmlContent] = useState("");
  const [locale] = useContext(LocalizationContext);
  const [ projects, setProjects] = useState([]);

  useEffect(() => {
    if(locale === "fr") {
      setProjects(projectDataFrench)
    } else {
      setProjects(projectDataEnglish)
    }
  }, [setProjects, locale]);

  useEffect(() => {
    setCurrentProject(projects.filter((project) => project.slug === projectSlug)[0])
  }, [locale, projects, projectSlug, currentProject])

  useEffect(() => { 
    if (currentProject && currentProject.content) {
      const converter = new Showdown.Converter({
        tables: true,
        tasklists: true,
        strikethrough: true,
      });
      const html = converter.makeHtml(currentProject.content);
      setHtmlContent(html);
    }
  }, [setHtmlContent, currentProject])

  return (
  <>
      {currentProject ?
      <div className="z-[2] dark:bg-black bg-gray-200 p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-rose-700 text-center group">
        <div
          className="dark:bg-black grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
        >
          <i className={currentProject.icon} />
        </div>
        <h3 className="font-medium text-xl sm:text-2xl md:text-3xl">{currentProject.name}</h3>

        <div className="markdown text-start dark:text-white text-black" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
      : <div> Project not found </div>}
  </>
  )
}
export default Project;
