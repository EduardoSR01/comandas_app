import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PageLayout from "../components/common/PageLayout";
import { useValidationRules } from '../hooks/useValidationRules';

const FuncionarioForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const validationRules = useValidationRules();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log("Dados do funcionário:", data);
    };

    const handleCancel = () => {
        navigate('/funcionarios');
    };

    return (
        <PageLayout title="Dados Funcionário">
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>

                <Controller
                    name="nome"
                    control={control}
                    defaultValue=""
                    rules={validationRules.nome}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Nome"
                            fullWidth
                            margin="normal"
                            error={!!errors.nome}
                            helperText={errors.nome?.message}
                        />
                    )}
                />

                <Controller
                    name="cpf"
                    control={control}
                    defaultValue=""
                    rules={validationRules.cpf}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="CPF"
                            fullWidth
                            margin="normal"
                            error={!!errors.cpf}
                            helperText={errors.cpf?.message}
                        />
                    )}
                />

                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={validationRules.email}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="E-mail"
                            type="email"
                            fullWidth
                            margin="normal"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    )}
                />

                <Controller
                    name="telefone"
                    control={control}
                    defaultValue=""
                    rules={validationRules.telefone}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Telefone"
                            fullWidth
                            margin="normal"
                            error={!!errors.telefone}
                            helperText={errors.telefone?.message}
                        />
                    )}
                />

                <Controller
                    name="cargo"
                    control={control}
                    defaultValue=""
                    rules={validationRules.cargo}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Cargo"
                            select
                            fullWidth
                            margin="normal"
                            error={!!errors.cargo}
                            helperText={errors.cargo?.message}
                        >
                            <MenuItem value="Garçom">Garçom</MenuItem>
                            <MenuItem value="Cozinheiro">Cozinheiro</MenuItem>
                            <MenuItem value="Caixa">Caixa</MenuItem>
                            <MenuItem value="Gerente">Gerente</MenuItem>
                        </TextField>
                    )}
                />

                <Controller
                    name="salario"
                    control={control}
                    defaultValue=""
                    rules={validationRules.salario}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Salário"
                            type="number"
                            fullWidth
                            margin="normal"
                            inputProps={{ step: "0.01", min: "0" }}
                            error={!!errors.salario}
                            helperText={errors.salario?.message}
                        />
                    )}
                />

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                    <Button sx={{ mr: 1 }} onClick={handleCancel}>
                        Cancelar
                    </Button>

                    <Button type="submit" variant="contained">
                        Cadastrar
                    </Button>
                </Box>

            </Box>
        </PageLayout>
    );
};

export default FuncionarioForm;