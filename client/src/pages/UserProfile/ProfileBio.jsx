import HTMLReactParser from "html-react-parser";
import { Link } from "react-router-dom";

const ProfileBio = ({ currentProfile }) => {
  return (
    <div>
      <div>
        {currentProfile?.tags.length !== 0 ? (
          <>
            <h4>Tags watched</h4>
            <div className="user-tags-container">
              {currentProfile?.tags.map((tag) => (
                <Link key={tag} className="user-tags-link" to={'/Tags'}>
                  <p>{tag}</p>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <p>0 tags watched</p>
        )}
      </div>
      <div>
        {currentProfile?.about ? (
          <>
            <h4>About</h4>
            <p>{HTMLReactParser(currentProfile?.about)}</p>
          </>
        ) : (
          <p>No bio found</p>
        )}
      </div>
    </div>
  );
};

export default ProfileBio;
