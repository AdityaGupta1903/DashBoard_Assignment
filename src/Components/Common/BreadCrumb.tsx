import Breadcrumbs from '@mui/material/Breadcrumbs';
import {  useLocation,Link } from 'react-router-dom';

const BreadCrumb : React.FC<{}> = ()=>{
    const location = useLocation();
    const {pathname} = location;
    const segments = pathname.split('/');
    const hostname = window.location.hostname;
    const portno = window.location.port;
    console.log(portno);
    if(segments[0] == segments[1]) segments.pop();
    let url = '';
    const LastElementStyle = 'hover:underline text-blue-300'
    return <Breadcrumbs aria-label="breadcrumb" className='p-1'>
            {
             segments.map((segment,index)=>{
                {url =='/'?url+=`${segment}`:url+=`/${segment}`}
                return <Link key = {index} to = {`http://${hostname}:${portno}${url}`} 
                   color="inherit" className={index+1 == segments.length ? LastElementStyle:'hover:underline'}  >
                    {segment === ''?'Home':segment}
                </Link>
                
             })
            }
          </Breadcrumbs>
   
}

export default BreadCrumb;
