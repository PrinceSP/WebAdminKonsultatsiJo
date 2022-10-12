import React from "react";
import SplitPane from "react-split-pane";
import Navigation from "../components/Navigation";
import '../assets/gap.css';
import ImgDeleteUser from '../assets/deleteUser.svg';

const bodyStyle = {    
    overflow: 'auto',    
};

const ProdukHukum = () => {
    return(
        <>
        <SplitPane
            split="vertical"
            minSize={100}
            defaultSize={230}
            >
                <Navigation />    
                <div className="gap">
                    {/* Masukan Tahun */}
                    <div class="input-group flex-nowrap mb-2">
                    <input type="text" class="form-control" placeholder="Masukan Tahun"/>                
                    </div>

                    {/* Masukan Nomor */}
                    <div class="input-group flex-nowrap mb-2">
                    <input type="text" class="form-control" placeholder="Masukan Nomor"/>                
                    </div>

                    {/* Masukan Judul */}
                    <div class="input-group flex-nowrap mb-2">
                    <input type="text" class="form-control" placeholder="Judul"/>                
                    </div>

                    {/* Masukan Jenis */}
                    <div class="input-group flex-nowrap mb-2">
                    <input type="text" class="form-control" placeholder="Jenis"/>                
                    </div>

                    {/* Masukan PDF */}
                    <div class="input-group flex-nowrap mb-2">
                    <input type="file" class="form-control" placeholder="Masukan PDF"/>                
                    </div>

                    <div class="col-auto">
                        <button type="submit" class="btn btn-danger mb-3 form-control">Posting</button>
                    </div>

                    <div style={bodyStyle}>
                    <table class="table table-hover me-5">
                        <thead>
                            <tr>                                                    
                            <th scope="col">Tahun</th>                        
                            <th scope="col">Nomor</th>                            
                            <th scope="col">Judul</th>
                            <th scope="col">Jenis</th>
                            <th scope="col">PDF</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>                            
                        
                            <tr>                        
                            <td>2018</td>
                            <td>32</td>
                            <td>PERUBAHAN ATAS PERUBAHAN DAERAH KOTA BITUNG NOMOR 4 TAHUN 2019 TENTANG PENYERTAAN MODAL PEMERINTAHAN KOTA BITUNG PADA PERUSAHAAN DAERAH AIR MINUM DUA SAUDARA KOTA BITUNG</td>
                            <td>PERDA</td>                            
                            <td>PDF</td>
                            <td><img src={ImgDeleteUser} alt="DeleteAccount" /></td>
                            </tr>

                            <tr>                        
                            <td>2018</td>
                            <td>32</td>
                            <td>PERUBAHAN ATAS PERUBAHAN DAERAH KOTA BITUNG NOMOR 4 TAHUN 2019 TENTANG PENYERTAAN MODAL PEMERINTAHAN KOTA BITUNG PADA PERUSAHAAN DAERAH AIR MINUM DUA SAUDARA KOTA BITUNG</td>
                            <td>PERDA</td>                            
                            <td>PDF</td>
                            <td><img src={ImgDeleteUser} alt="DeleteAccount" /></td>
                            </tr>

                            <tr>                        
                            <td>2018</td>
                            <td>32</td>
                            <td>PERUBAHAN ATAS PERUBAHAN DAERAH KOTA BITUNG NOMOR 4 TAHUN 2019 TENTANG PENYERTAAN MODAL PEMERINTAHAN KOTA BITUNG PADA PERUSAHAAN DAERAH AIR MINUM DUA SAUDARA KOTA BITUNG</td>
                            <td>PERDA</td>                            
                            <td>PDF</td>
                            <td><img src={ImgDeleteUser} alt="DeleteAccount" /></td>
                            </tr>

                            <tr>                        
                            <td>2018</td>
                            <td>32</td>
                            <td>PERUBAHAN ATAS PERUBAHAN DAERAH KOTA BITUNG NOMOR 4 TAHUN 2019 TENTANG PENYERTAAN MODAL PEMERINTAHAN KOTA BITUNG PADA PERUSAHAAN DAERAH AIR MINUM DUA SAUDARA KOTA BITUNG</td>
                            <td>PERDA</td>                            
                            <td>PDF</td>
                            <td><img src={ImgDeleteUser} alt="DeleteAccount" /></td>
                            </tr>

                            <tr>                        
                            <td>2018</td>
                            <td>32</td>
                            <td>PERUBAHAN ATAS PERUBAHAN DAERAH KOTA BITUNG NOMOR 4 TAHUN 2019 TENTANG PENYERTAAN MODAL PEMERINTAHAN KOTA BITUNG PADA PERUSAHAAN DAERAH AIR MINUM DUA SAUDARA KOTA BITUNG</td>
                            <td>PERDA</td>                            
                            <td>PDF</td>
                            <td><img src={ImgDeleteUser} alt="DeleteAccount" /></td>
                            </tr>
                             
                            <tr>                        
                            <td>2018</td>
                            <td>32</td>
                            <td>PERUBAHAN ATAS PERUBAHAN DAERAH KOTA BITUNG NOMOR 4 TAHUN 2019 TENTANG PENYERTAAN MODAL PEMERINTAHAN KOTA BITUNG PADA PERUSAHAAN DAERAH AIR MINUM DUA SAUDARA KOTA BITUNG</td>
                            <td>PERDA</td>                            
                            <td>PDF</td>
                            <td><img src={ImgDeleteUser} alt="DeleteAccount" /></td>
                            </tr>

                        </tbody>
                    </table>
                    </div>
                </div>                
            </SplitPane>            
        </>
    );
}

export default ProdukHukum;