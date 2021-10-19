import { Card } from 'antd';
import { Rate } from 'antd';
import { Row, Col } from 'antd';

import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';






// function NewPoster(props){
//     // const srcOfImage =  props.poster;
//     if(props.poster){
//         return <img src={props.poster}  width="100%" height="200px" alt=""/>
//     }else{
//         return <div className="poster"><h3> Poster</h3></div>
//     } 
   
// }


const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const Article = ({ id, url, title, description, category_name, pub_date, deleteFunction}) =>{
  return (
  <div className="article"> 
    <div className="article-news"> 
    <Row justify="end">
      <Col span={24}> <Card className="card"  title={category_name} extra={<a href="#">Batafsil</a>} style={{width:"400px" }}>
    <img src={url} style={{width:"350px" , height:"200px"}} />  
    <h2 className="news-title" >{title}</h2>
    <p className="news-content">{description}</p>
    <div className="date">
     <Rate allowHalf defaultValue={2.5} /> 
     <Space className="space" direction="vertical" > <DatePicker defaultValue={moment((pub_date))} format={dateFormatList} /></Space>
    </div>
    <div className="btn">
    <div> 
      <Button type="primary" icon={<DownloadOutlined />} >
          Download
        </Button>
    </div>
   
    <div className="delete">
        <Button danger onClick={() => {deleteFunction(id)}}>Delete</Button>
        </div>
     </div> 
     </Card></Col>  
     </Row>
   
      </div>
     

 </div>

   

)
}

  

 
    
      
export default Article;
