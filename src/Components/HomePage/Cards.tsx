import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ProjectCardModalType from "../../TypeDefs/ProjectAddCardModal";
import {  Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Cards: React.FC<{ ProjectDetails: ProjectCardModalType[] }> = (prop) => {
  const navigate  = useNavigate();
  return <>
    {
      prop.ProjectDetails.map((Project, Index) => (
       
        <div style={{ display: 'inline-block', margin: 20 }} className='flex  align-middle' onClick={()=>{
          navigate(`/dashboard/Project-${Index + 1}`,{state:{id:Index + 1,title:Project.title,description:Project.description,Link:Project.Link}})
        }}>
          <Card key = {Index}sx={{ minWidth: '275', transition: 'transform 0.1s','&:hover': {
          transform: 'scale(1.1)',cursor: 'pointer'}}}>
            <CardContent >
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {`Project ${Index + 1}`}
              </Typography>
              <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
                {Project.title}
              </Typography>
              <Typography variant="body2">
                {Project.description}
              </Typography>
            </CardContent>
            
          </Card>
          
        </div>
      
        
      ))
    }
  </>
}
export default Cards;
