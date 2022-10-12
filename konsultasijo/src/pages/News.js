import React from "react";
import SplitPane from "react-split-pane";
import Navigation from "../components/Navigation";
import '../assets/news.css';

const News = () => {
    return(
        <>        
        <SplitPane
            split="vertical"
            minSize={100}
            defaultSize={230}
            >
                <Navigation />    
                <div className="gap">
                
                {/* Masukan Judul */}
                <div class="input-group flex-nowrap mb-2">
                <input type="text" class="form-control" placeholder="Masukan Judul"/>                
                </div>

                {/* Masukan Link */}
                <div class="input-group flex-nowrap mb-2">
                <input type="text" class="form-control" placeholder="Masukan Link"/>                
                </div>

                <div class="input-group flex-nowrap mb-2">
                <input type="file" class="form-control" placeholder="Masukan Gambar"/>                
                </div>
                {/* Masukan Gambar   */}

                <div class="col-auto">
                    <button type="submit" class="btn btn-danger mb-3 form-control">Posting</button>
                </div>
                
                {/* <div className="newsWrapper">
                    
                    <SplitPane 
                    split="vertical"
                    minSize={560}
                    >
                    <p>terjadi pembantaian pes di universitas klabat, diduga karena dendam dihina terus menerus</p>
                    <img src="https://akcdn.detik.net.id/community/media/visual/2022/10/05/nasib-brigjen-hendra-dari-berseragam-polri-hingga-rompi-tahanan-1_169.jpeg?w=700&q=90" alt="News" />
                    </SplitPane>
                                    
                </div>                                 */}


                <div className="newsWrapper">
                    
                    <SplitPane 
                    split="vertical"
                    minSize={560}
                    >
                    <p>terjadi pembantaian pes di universitas klabat, diduga karena dendam dihina terus menerus</p>
                    <img src="https://akcdn.detik.net.id/community/media/visual/2022/10/05/nasib-brigjen-hendra-dari-berseragam-polri-hingga-rompi-tahanan-1_169.jpeg?w=700&q=90" alt="News" />
                    </SplitPane>
                                    
                </div>                                

                <div className="newsWrapper">
                    
                    <SplitPane 
                    split="vertical"
                    minSize={560}
                    >
                    <p>terjadi pembantaian pes di universitas klabat, diduga karena dendam dihina terus menerus</p>
                    <img src="https://akcdn.detik.net.id/community/media/visual/2022/10/05/nasib-brigjen-hendra-dari-berseragam-polri-hingga-rompi-tahanan-1_169.jpeg?w=700&q=90" alt="News" />
                    </SplitPane>
                                    
                </div>         

                 <div className="newsWrapper">
                    
                    <SplitPane 
                    split="vertical"
                    minSize={560}
                    >
                    <p>terjadi pembantaian pes di universitas klabat, diduga karena dendam dihina terus menerus</p>
                    <img src="https://akcdn.detik.net.id/community/media/visual/2022/10/05/nasib-brigjen-hendra-dari-berseragam-polri-hingga-rompi-tahanan-1_169.jpeg?w=700&q=90" alt="News" />
                    </SplitPane>
                                    
                </div>         

                 <div className="newsWrapper">
                    
                    <SplitPane 
                    split="vertical"
                    minSize={560}
                    >
                    <p>terjadi pembantaian pes di universitas klabat, diduga karena dendam dihina terus menerus</p>
                    <img src="https://akcdn.detik.net.id/community/media/visual/2022/10/05/nasib-brigjen-hendra-dari-berseragam-polri-hingga-rompi-tahanan-1_169.jpeg?w=700&q=90" alt="News" />
                    </SplitPane>
                                    
                </div>         

                 <div className="newsWrapper">
                    
                    <SplitPane 
                    split="vertical"
                    minSize={560}
                    >
                    <p>terjadi pembantaian pes di universitas klabat, diduga karena dendam dihina terus menerus</p>
                    <img src="https://akcdn.detik.net.id/community/media/visual/2022/10/05/nasib-brigjen-hendra-dari-berseragam-polri-hingga-rompi-tahanan-1_169.jpeg?w=700&q=90" alt="News" />
                    </SplitPane>
                                    
                </div>         
                                                       
                </div>                
            </SplitPane>
        </>
    );
}

export default News;