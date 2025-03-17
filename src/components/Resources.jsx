import resources from "../ressurser";

const Resources = ({ category }) => {
  const filteredResources = resources.filter(resource => resource.category === category);

  return (
    <main>
      <h2>{category ? category.toUpperCase() : "Ingen kategori valgt"} Ressurser</h2>
      {filteredResources.length > 0 ? (
        <ul>
          {filteredResources.map((resource, index) => (
            <li key={index}>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Ingen ressurser funnet</p> /*I bare noe ekstra jeg la til, synes det var lurt*/
      )}
    </main>
  );
};

export default Resources;
