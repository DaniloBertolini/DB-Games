import { Ghost } from "@phosphor-icons/react";
import './home.css'

function Home() {
    return (
        <div className="homeFoto">
            <img src="https://64.media.tumblr.com/1e59432e5fe2d7942df39fdd0223d294/9ec5a9ae5ba9f7db-ae/s1280x1920/8f45c6df3adc9f1a74b58a275b587982b5de8abc.gifv" alt="mario" />
            <div className='home'>
                <h2>
                    Projetos Pessoais
                    {' '}
                    <Ghost size={35} />
                </h2>
            </div>
        </ div>
    )
}

export default Home;