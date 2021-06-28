import { CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   div1: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
      border: '2px solid black'
   },
   icon: {
      marginRight: '20px'
   },
   button: {
      marginTop: '40px'
   },
   cardGrid: {
        padding: '20px 0',
        backgroundColor: 'green',
   },
   card: {
         height:'100%',
         display:'flex',
         flexDirection:'column'
   },
   cardMedia: {
         paddingTop: '56.25%' //16:9
   },
   CardContent: {
       flexGrow: 1
   },
   footer:{
      backgroundColor: theme.palette.background.paper,
      padding:'50px 0'
   }
}));

export default useStyles;