import resources from "../ressurser";

const Resources = ({ category }) => {
    const filteredResources = resources.filter(resource => resource.category === category);

    if (!filteredResources || filteredResources.length === 0) {
        return (
          <main>
            <h2>{category ? category.toUpperCase() : "Ingen kategori valgt"} Ressurser</h2>
            <p>Ingen ressurser funnet</p>
          </main>
        );
      }
    
      return (
        <main>
          <h2>{category.toUpperCase()} Ressurser</h2>
          <ul>
            {filteredResources.map((resource, index) => (
              <li key={index}>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </main>
      );
    };
    
    export default Resources;