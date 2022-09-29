import Head from 'next/head';
import projects from './projects.json';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className='container'>
        projects: <br></br>
        {projects.map(({ title, description, image, link_page, link_repo }) => (
          <div className='flex prose dark:prose-invert flex-col gap-3 pb-10'>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>
              {link_page}
              <br></br>
              {link_repo}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
