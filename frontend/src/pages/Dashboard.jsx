import { Typography, Box } from "@mui/material";
import PageLayout from "../components/common/PageLayout";
// Importando as imagens corretamente da sua pasta assets
import logoImg from "../assets/Dudu3D.jpg";
import DuduBP1 from "../assets/DuduBP1.jpg";
import DuduBP2 from "../assets/DuduBP2.jpg";

const Dashboard = () => {
    return (
        <PageLayout 
            title={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <img 
                        src={logoImg} 
                        alt="Logo" 
                        style={{ width: '50px', height: '50px', borderRadius: '50px', objectFit: 'cover', border: '2px solid #fff' }} 
                    />
                    <span>Dashboard</span>
                </Box>
            } 
            maxWidth="xl"
        >
            <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    Bem-vindo ao Comandas do Zé!
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    {`Data: ${new Date().toLocaleDateString('pt-BR', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}`}
                </Typography>

                {/* Duas fotos grandes e quadradas com bordas arredondadas embaixo da data */}
                <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
                    <img 
                        src={DuduBP1} 
                        alt="Dudu BP1" 
                        style={{ 
                            width: '180px', 
                            height: '180px', 
                            borderRadius: '16px', 
                            objectFit: 'cover',
                        }} 
                    />
                    <img 
                        src={DuduBP2} 
                        alt="Dudu BP2" 
                        style={{ 
                            width: '180px', 
                            height: '180px', 
                            borderRadius: '16px',
                        }} 
                    />
                </Box>
            </Box>
        </PageLayout>
    );
};

export default Dashboard;