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
    Divider
} from '@mui/material';

import { FiberNew } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import PageLayout from "../components/common/PageLayout";
import ActionButtons from "../components/common/ActionButtons";

function FuncionarioList() {

    const navigate = useNavigate();

    const funcionarios = [
        {
            id: 1,
            nome: 'Carlos Silva',
            cpf: '123.456.789-00',
            cargo: 'Garçom',
            salario: 2500
        },
        {
            id: 2,
            nome: 'Ana Souza',
            cpf: '987.654.321-00',
            cargo: 'Gerente',
            salario: 4500
        },
        {
            id: 3,
            nome: 'Marcos Lima',
            cpf: '111.222.333-44',
            cargo: 'Cozinheiro',
            salario: 3200
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

    const formatCurrency = (value) =>
        new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);

    const handleView = (funcionario) =>
        console.log("Visualizar funcionário:", funcionario);

    const handleEdit = (funcionario) =>
        navigate(`/funcionario/${funcionario.id}`);

    const handleDelete = (funcionario) =>
        console.log("Excluir funcionário:", funcionario);

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'nome', headerName: 'Nome' },
        { field: 'cpf', headerName: 'CPF' },
        { field: 'cargo', headerName: 'Cargo' },
        { field: 'salario', headerName: 'Salário' },
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
                {funcionario.cpf}
            </TableCell>

            <TableCell>
                {funcionario.cargo}
            </TableCell>

            <TableCell
                sx={{
                    fontWeight: 600,
                    color: 'success.main'
                }}
            >
                {formatCurrency(funcionario.salario)}
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

                    <Box sx={{ mb: 1 }}>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            CPF:
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ fontWeight: 500 }}
                        >
                            {funcionario.cpf}
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 1 }}>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Cargo:
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ fontWeight: 500 }}
                        >
                            {funcionario.cargo}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Salário:
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: 600,
                                color: 'success.main'
                            }}
                        >
                            {formatCurrency(funcionario.salario)}
                        </Typography>
                    </Box>

                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}
                >
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
        <PageLayout title="Funcionários" actions={actions}>

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