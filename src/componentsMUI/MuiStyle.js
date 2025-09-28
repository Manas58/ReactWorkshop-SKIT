import { Button } from '@mui/material'

const MuiStyle = () => {
    return(
        <>
            <div> MUI Style </div>
            <Button variant="text" style={{
                backgroundColor: 'red'
            }}>Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </>
    )
}
    
export default MuiStyle