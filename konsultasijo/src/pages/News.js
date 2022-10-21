import React from "react";
// import SplitPane from "react-split-pane";
import Navigation from "../components/Navigation";
import '../assets/news.css';
import ImgDeleteUser from '../assets/deleteUser.svg';

const split={
    display: 'flex',
    flexDirection: 'row',
}
const News = () => {
    return(
        <>
            <div style={split}>
                <Navigation/>
                <div className="gap">

                {/* Masukan Judul */}
                <div class="input-group flex-nowrap mb-2" style={{display: 'flex',}}>
                <input type="text" class="form-control" placeholder="Masukan Judul"/>
                </div>

                {/* Masukan Link */}
                <div class="input-group flex-nowrap mb-2">
                <input type="text" class="form-control" placeholder="Masukan Link"/>
                </div>

                <div class="col-auto">
                    <button type="submit" class="btn btn-danger mb-3 form-control">Posting</button>
                </div>

                <div className="wrapper">
                    <div className="newsWrapper" style={{display: 'flex'}}>
                        <p>terjadi pembantaian pes di universitas klabat, diduga karena dendam dihina terus menerus</p>
                        <img className="imgberita" src="https://akcdn.detik.net.id/community/media/visual/2022/10/05/nasib-brigjen-hendra-dari-berseragam-polri-hingga-rompi-tahanan-1_169.jpeg?w=700&q=90" alt="News" />
                        <img className="imgbutton" style={{}} type="button" onClick={()=> alert('testnews')} src={ImgDeleteUser} alt="DeleteAccount" />
                    </div>

                    <div className="newsWrapper" style={{display: 'flex'}}>
                        <p>terjadi pembantaian pes di universitas klabat, diduga karena dendam dihina terus menerus</p>
                        <img className="imgberita" src="https://akcdn.detik.net.id/community/media/visual/2022/10/05/nasib-brigjen-hendra-dari-berseragam-polri-hingga-rompi-tahanan-1_169.jpeg?w=700&q=90" alt="News" />
                        <img className="imgbutton" style={{}} type="button" onClick={()=> alert('testnews')} src={ImgDeleteUser} alt="DeleteAccount" />
                    </div>

                    <div className="newsWrapper" style={{display: 'flex'}}>
                        <p>terjadi pembantaian pes di universitas klabat, diduga karena dendam dihina terus menerus</p>
                        <img className="imgberita" src="https://akcdn.detik.net.id/community/media/visual/2022/10/05/nasib-brigjen-hendra-dari-berseragam-polri-hingga-rompi-tahanan-1_169.jpeg?w=700&q=90" alt="News" />
                        <img className="imgbutton" style={{}} type="button" onClick={()=> alert('testnews')} src={ImgDeleteUser} alt="DeleteAccount" />
                    </div>

                    <div className="newsWrapper" style={{display: 'flex'}}>
                        <p>terjadi pembantaian pes di universitas klabat, diduga karena dendam dihina terus menerus</p>
                        <img className="imgberita" src="https://akcdn.detik.net.id/community/media/visual/2022/10/05/nasib-brigjen-hendra-dari-berseragam-polri-hingga-rompi-tahanan-1_169.jpeg?w=700&q=90" alt="News" />
                        <img className="imgbutton" style={{}} type="button" onClick={()=> alert('testnews')} src={ImgDeleteUser} alt="DeleteAccount" />
                    </div>

                    <div className="newsWrapper" style={{display: 'flex'}}>
                        <p>terjadi pembantaian pes di universitas klabat, diduga karena dendam dihina terus menerus</p>
                        <img className="imgberita" src="https://akcdn.detik.net.id/community/media/visual/2022/10/05/nasib-brigjen-hendra-dari-berseragam-polri-hingga-rompi-tahanan-1_169.jpeg?w=700&q=90" alt="News" />
                        <img className="imgbutton" style={{}} type="button" onClick={()=> alert('testnews')} src={ImgDeleteUser} alt="DeleteAccount" />
                    </div>

                    <div className="newsWrapper" style={{display: 'flex'}}>
                        <p>terjadi pembantaian pes di universitas klabat, diduga karena dendam dihina terus menerus</p>
                        <img className="imgberita" src="https://akcdn.detik.net.id/community/media/visual/2022/10/05/nasib-brigjen-hendra-dari-berseragam-polri-hingga-rompi-tahanan-1_169.jpeg?w=700&q=90" alt="News" />
                        <img className="imgbutton" style={{}} type="button" onClick={()=> alert('testnews')} src={ImgDeleteUser} alt="DeleteAccount" />
                    </div>

                    <div className="newsWrapper" style={{display: 'flex'}}>
                        <p>terjadi pembantaian pes di universitas klabat, diduga karena dendam dihina terus menerus</p>
                        <img className="imgberita" src="https://akcdn.detik.net.id/community/media/visual/2022/10/05/nasib-brigjen-hendra-dari-berseragam-polri-hingga-rompi-tahanan-1_169.jpeg?w=700&q=90" alt="News" />
                        <img className="imgbutton" style={{}} type="button" onClick={()=> alert('testnews')} src={ImgDeleteUser} alt="DeleteAccount" />
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default News;
