import { Carousel } from 'antd';
import newsarr from '../news';

import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
// import { Button } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import {AppleOutlined } from '@ant-design/icons';

function NewPoster(props){
    // const srcOfImage =  props.poster;
    if(props.poster){
        return <img src={props.poster}  width="100%" height="200px" alt=""/>
    }else{
        return <div className="poster"><h3> Poster</h3></div>
    } 
   
}

function Navbar(){
    return (
        <div className="nav">
            <div className="navbar">
            <Carousel autoplay className="carousel" style={{width:"500px"}} >
           <div>
          <NewPoster poster = {newsarr[3].image} /> 
         <h1>{newsarr[3].title}</h1>
         </div>
        <div>
        <NewPoster poster = {newsarr[6].image} /> 
        <h1>{newsarr[6].title}</h1>
        </div>
       <div>
       <NewPoster poster = {newsarr[7].image} /> 
       <h1>{newsarr[7].title}</h1>
       </div>
       <div>
      <NewPoster poster = {newsarr[8].image} /> 
      <h1>{newsarr[8].title}</h1>
      </div>
     </Carousel>
            </div> 
            <div className="statistik" style={{display: 'flex', flexDirection: 'column'}}>
              <div className="site-statistic-demo-card">
                  <Row gutter={16}>
                    <Col span={8}>
                      <Card className="bank">
                        <Statistic 
                          title="USD"
                       
                          value={10680.37}
                          precision={2}
                          valueStyle={{ color: '#3f8600' }}
                          prefix={<ArrowUpOutlined />}
                        />
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card>
                      <Statistic
                          title="RU"
                          value={14833.98}
                          precision={2}
                          valueStyle={{ color: '#3f8600' }}
                          prefix={<ArrowUpOutlined />}     
                        />
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card>
                        <Statistic
                          title="EUR"
                          value={12253.98}
                          precision={2}
                          valueStyle={{ color: '#3f8600' }}
                          prefix={<ArrowUpOutlined />}     
                        />
                        </Card>
                        </Col>
                  </Row>
              </div> 

              <div className="btn" style={{display: 'flex'}}>

                <button className="button" type="primary" style={{display: 'flex', alignItems: 'center' }}>
                  <GooglePlusOutlined style={{fontSize:"32px"}} />
                  <div className="btn_text">
                  <div style={{fontSize:"18px"}}>Yuklab olish</div>
                  <div style={{fontSize:"20px", fontWeight:"bold"}} >Google Play </div>
                  </div>
                </button>

                <button className="button" type="primary" style={{display: 'flex', alignItems: 'center' }}> 
                  <AppleOutlined style={{fontSize:"32px"}}/>
                  <div className="btn_text" >
                  <div style={{fontSize:"18px"}}> Yuklab olish</div>
                  <div style={{fontSize:"20px", fontWeight:"bold"}} >App Store </div>
                  </div>
                </button>

                </div>
              </div>
             
          </div>
        
    
    )
}
export default Navbar;

