import { projectPreviews } from '../../components/experience';
import ProjectClientView from '../../components/projectId/hero';
import FeaturesSection from '../../components/projectId/features';

export default async function ProjectPage({ params }) {
    const param=await params
  const project = projectPreviews.find(p => p.id === param.id);

  if (!project) {
    return <main className="h-vh m-70">Page not found</main>;
  }

  return (
    <>
      <ProjectClientView project={project} />
      <FeaturesSection project={project} />
    </>

  );
}
