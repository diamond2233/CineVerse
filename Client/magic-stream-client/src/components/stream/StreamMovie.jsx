import {useParams} from 'react-router-dom';
// import ReactPlayer from 'react-player';
import './StreamMovie.css';

const StreamMovie = () => {
    const { yt_id } = useParams();

    return (
        <div className="container mt-3">
            <iframe
                width="100%"
                height="700"
                src={`https://www.youtube.com/embed/${yt_id}?autoplay=1`}
                title="Movie Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                    border: "none",
                    borderRadius: "10px"
                }}
            />
        </div>
    );
};

export default StreamMovie;