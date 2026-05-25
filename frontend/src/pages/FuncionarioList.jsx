import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Card,
    CardContent,
    Typography,
    Box,
    Divider,
    Chip
} from '@mui/material';

import { FiberNew } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import PageLayout from "../components/common/PageLayout";
import ActionButtons from "../components/common/ActionButtons";
import logoImg from "../assets/Dudu3D.jpg";

import { getGrupoInfo } from '../constants/userGroups';
import { useMasks } from '../hooks/useMasks';

function FuncionarioList() {

    const navigate = useNavigate();
    const { applyCpfMask, applyPhoneMask } = useMasks();

    const funcionarios = [
        {
            id: 1,
            nome: 'Eduardo da Silva Ramos',
            matricula: '2025007',
            cpf: '11513619810',
            telefone: '47999475649',
            grupo: 1
        },
        {
            id: 2,
            nome: 'Gabriela Koch',
            matricula: '2025002',
            cpf: '28626122792',
            telefone: '49988668458',
            grupo: 2
        }
    ];

    const actions = (
        <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/funcionario')}
            startIcon={<FiberNew />}
            sx={{ fontWeight: 600, px: 2, py: 1 }}
        >
            Novo
        </Button>
    );

    const handleView = (funcionario) => {
        console.log("Visualizar funcionário:", funcionario);
    };

    const handleEdit = (funcionario) => {
        navigate(`/funcionario/${funcionario.id}`);
    };

    const handleDelete = (funcionario) => {
        console.log("Excluir funcionário:", funcionario);
    };

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'nome', headerName: 'Nome' },
        { field: 'matricula', headerName: 'Matrícula' },
        { field: 'cpf', headerName: 'CPF' },
        { field: 'telefone', headerName: 'Telefone' },
        { field: 'grupo', headerName: 'Grupo' },
        {
            field: 'actions',
            headerName: 'Ações',
            renderCell: (params) => (
                <ActionButtons
                    onView={handleView}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    item={params.row}
                />
            )
        }
    ];

    const renderDesktopRow = (funcionario) => (
        <TableRow key={funcionario.id} hover>

            <TableCell>{funcionario.id}</TableCell>

            <TableCell sx={{ fontWeight: 500 }}>
                {funcionario.nome}
            </TableCell>

            <TableCell>
                {funcionario.matricula}
            </TableCell>

            <TableCell>
                {applyCpfMask(funcionario.cpf)}
            </TableCell>

            <TableCell>
                {applyPhoneMask(funcionario.telefone)}
            </TableCell>

            <TableCell>
                <Chip label={getGrupoInfo(funcionario.grupo).label} color={getGrupoInfo(funcionario.grupo).color} size="small" />
            </TableCell>

            <TableCell>
                <ActionButtons
                    onView={handleView}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    item={funcionario}
                />
            </TableCell>

        </TableRow>
    );

    const renderMobileCard = (funcionario) => (
        <Card key={funcionario.id} sx={{ mb: 2, elevation: 2 }}>

            <CardContent sx={{ p: 2 }}>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 2
                    }}
                >
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: '1.1rem',
                                fontWeight: 600
                            }}
                        >
                            {funcionario.nome}
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            ID: {funcionario.id}
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ mb: 2 }} />

                <Box sx={{ mb: 2 }}>

                    <Typography variant="body2">
                        <strong>Matrícula:</strong> {funcionario.matricula}
                    </Typography>

                    <Typography variant="body2">
                        <strong>CPF:</strong> {applyCpfMask(funcionario.cpf)}
                    </Typography>

                    <Typography variant="body2">
                        <strong>Telefone:</strong> {applyPhoneMask(funcionario.telefone)}
                    </Typography>

                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                        <strong>Grupo:</strong> <Chip label={getGrupoInfo(funcionario.grupo).label} color={getGrupoInfo(funcionario.grupo).color} size="small" />
                    </Typography>

                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <ActionButtons
                        item={funcionario}
                        onView={handleView}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                </Box>

            </CardContent>

        </Card>
    );

    return (
        <PageLayout 
            title={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <img 
                        src={logoImg} 
                        alt="Logo" 
                        style={{ width: '50px', height: '50px', borderRadius: '50px', objectFit: 'cover', border: '2px solid #fff' }} 
                    />
                    <span>Funcionários</span>
                </Box>
            } 
            actions={actions}
        >

            <Box sx={{ display: { xs: 'none', md: 'block' } }}>

                <TableContainer component={Paper}>

                    <Table>

                        <TableHead>
                            <TableRow>
                                {columns.map((column, index) => (
                                    <TableCell
                                        key={index}
                                        sx={{ fontWeight: 600 }}
                                    >
                                        {column.headerName}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {funcionarios.map((funcionario) =>
                                renderDesktopRow(funcionario)
                            )}
                        </TableBody>

                    </Table>

                </TableContainer>

            </Box>

            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                {funcionarios.map((funcionario) =>
                    renderMobileCard(funcionario)
                )}
            </Box>

        </PageLayout>
    );
}

export default FuncionarioList;