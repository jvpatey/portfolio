import ImageCarousel from "./ImageCarousel";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  externalUrl?: string;
  appStoreUrl?: string;
  images?: string[];
  imagePlaceholder?: boolean;
  imagePosition?: "left" | "right";
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  externalUrl,
  appStoreUrl,
  images,
  imagePlaceholder = false,
  imagePosition = "right",
}: ProjectCardProps) {
  const renderImage = () => {
    if (images && images.length > 0) {
      return <ImageCarousel images={images} alt={`${title} screenshot`} />;
    }

    if (imagePlaceholder) {
      return (
        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
          <div className="aspect-video bg-slate-700 rounded flex items-center justify-center">
            <span className="text-slate-400">Project Screenshot</span>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Content */}
      <div
        className={imagePosition === "left" ? "order-2" : "order-2 md:order-1"}
      >
        <p className="text-blue-400 text-sm mb-2">Featured Project</p>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="bg-slate-800 p-6 rounded-lg mb-4">
          <p className="text-slate-300 leading-relaxed">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm mb-4">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
              aria-label={`View ${title} on GitHub`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
          {appStoreUrl && (
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
              aria-label={`Download ${title} on App Store`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
            </a>
          )}
          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
              aria-label={`View ${title} live site`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Image */}
      <div
        className={imagePosition === "left" ? "order-1" : "order-1 md:order-2"}
      >
        {renderImage()}
      </div>
    </div>
  );
}
