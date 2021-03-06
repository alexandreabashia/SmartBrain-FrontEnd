import Tilt from 'react-tilt';
import './logo.css';
import brain from './brain-100.png'
import '../../App.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2 zIndex" options={{ max: 50 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img src={brain} alt='brain' style={{ paddingTop: '5px' }} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;