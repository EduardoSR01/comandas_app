import { Typography, Box } from "@mui/material";
import PageLayout from "../components/common/PageLayout";
import logoImg from "../assets/Dudu3D.jpg";

const NotFound = () => {
    return (
        <PageLayout 
            title={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <img 
                        src={logoImg} 
                        alt="Logo" 
                        style={{ width: '50px', height: '50px', borderRadius: '50px', objectFit: 'cover', border: '2px solid #fff' }} 
                    />
                    <span>404 - NotFound</span>
                </Box>
            }
        >
            <Typography variant="body1" color="textDisabled">
                Página não encontrada. Verifique a URL ou retorne à página inicial.
            </Typography>
        </PageLayout>
    );
};

export default NotFound;