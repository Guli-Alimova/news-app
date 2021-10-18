
import { Input } from 'antd'; 
import { AudioOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import 'antd/dist/antd.css'; 


function Header(){
    const { Search } = Input;
    const suffix = (<AudioOutlined style={{fontSize: 16,    color: '#1890ff'}}/>)
    const onSearch = value => console.log(value);
    const { Option } = Select;
    return (
        <header className="header">
            <div className="logo">
                <a><img src="../assets/img/logo2.png"></img></a>
              
            </div>
           
            <div className="header__menu">
                <a href="#" className="header__link">PPOLITICS</a>
                <a href="#" className="header__link"> SOCIETY </a>
                <a href="#" className="header__link">BUSINESS</a>
                <a href="#" className="header__link">CULTURE</a>
                <a href="#" className="header__link">SPORT</a>
                <a href="#" className="header__link">TOURISM</a>
            </div>
            <div className="lenguage">
          <Search  placeholder="Search" enterButton="Search"size="large"  suffix={suffix} onSearch={onSearch}/>
            </div>
            <div>
            <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Choose Lenguage"
    optionFilterProp="lenguage"
  
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.lenguage.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="eng">English(ENG)</Option>
    <Option value="ru">Russun(RU)</Option>
    <Option value="uz">Uzbek(UZ)</Option>
  </Select>
            </div>
        </header>
    )
    
} 

export default Header;