import newsarr from '../news';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { TimePicker } from 'antd';


 const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
function Aside(){
 
  return(
    <div className="aside">
      <h2>Leatest News</h2>
      <div className="aisde-new">
        <div className="pub-date ">  <Space className="space" direction="vertical" size={12}> <DatePicker defaultValue={moment((newsarr[6].pub_date))} format={dateFormatList}   /></Space>
       
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
      </div>
        <h3>{newsarr[6].title}</h3>
        <p>{newsarr[6].description}</p>
      </div>
      <div className="aisde-new">
      <div className="pub-date ">
      <Space className="space" direction="vertical" size={12}> <DatePicker defaultValue={moment((newsarr[3].pub_date))} format={dateFormatList} /></Space>
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
      </div>
        <h3>{newsarr[3].title}</h3>
        <p>{newsarr[3].description}</p>
      </div>
      <div className="aisde-new">
      <div className="pub-date ">
      <Space className="space" direction="vertical" size={12}> <DatePicker defaultValue={moment((newsarr[7].pub_date))} format={dateFormatList} /></Space>
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
      </div>
        <h3>{newsarr[7].title}</h3>
        <p>{newsarr[7].description}</p>
      </div>
      <div className="aisde-new">
      <div className="pub-date ">
      <Space className="space" direction="vertical" size={12}> <DatePicker defaultValue={moment((newsarr[8].pub_date))} format={dateFormatList} /></Space>
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
      </div>
        <h3>{newsarr[8].title}</h3>
        <p>{newsarr[8].description}</p>
      </div>
      <div className="aisde-new">
      <div className="pub-date ">
      <Space className="space" direction="vertical" size={12}> <DatePicker defaultValue={moment((newsarr[10].pub_date))} format={dateFormatList} /></Space>
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
      </div>
        <h3>{newsarr[10].title}</h3>
        <p>{newsarr[10].description}</p>
      </div>

    </div>
  )
}

 
export default Aside;