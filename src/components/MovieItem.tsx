import { MovieItemProps } from '../model/interfaces';
import styles from './MovieItem.module.css';

function MovieItem(props: MovieItemProps) {
    const { image, title } = props;
    const imgBasePath: string = 'https://www.themoviedb.org/t/p/w440_and_h660_face'

    return(
        <div className={styles.item}>
            <img src={`${imgBasePath}/${image}`} alt={image}/>
            <p>{title}</p>
        </div>
    )
}

export default MovieItem
