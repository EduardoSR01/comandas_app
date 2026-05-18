import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMasks } from '../hooks/useMasks';

import PageLayout from "../components/common/PageLayout";
import { useValidationRules } from '../hooks/useValidationRules';
import logoImg from "../assets/Dudu3D.jpg";

const FuncionarioForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm();

    // Instanciação das funções do hook de máscaras
    const { applyCpfMask, applyPhoneMask, cleanCpf, cleanPhone } = useMasks();
    const validationRules = useValidationRules();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log("Dados do funcionário:", data);
    };

    const handleCancel = () => {
        navigate('/funcionarios');
    };

    return (
        <PageLayout 
            title={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <img 
                        src={logoImg} 
                        alt="Logo" 
                        style={{ width: '50px', height: '50px', borderRadius: '50px', objectFit: 'cover', border: '2px solid #fff' }} 
                    />
                    <span>Dados Funcionário</span>
                </Box>
            }
        >
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
                    name="matricula"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Matrícula é obrigatória" }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Matrícula"
                            fullWidth
                            margin="normal"
                            error={!!errors.matricula}
                            helperText={errors.matricula?.message}
                        />
                    )}
                />

                <Controller
                    name="cpf"
                    control={control}
                    defaultValue=""
                    rules={{ required: "CPF é obrigatório" }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="CPF"
                            fullWidth
                            margin="normal"
                            error={!!errors.cpf}
                            helperText={errors.cpf?.message}
                            onChange={(e) => {
                                const value = cleanCpf(e.target.value);
                                field.onChange(value);
                            }}
                            value={field.value ? applyCpfMask(field.value) : ''}
                            inputProps={{ maxLength: 14 }}
                        />
                    )}
                />

                <Controller
                    name="telefone"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Telefone é obrigatório" }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Telefone"
                            fullWidth
                            margin="normal"
                            error={!!errors.telefone}
                            helperText={errors.telefone?.message}
                            onChange={(e) => {
                                const value = cleanPhone(e.target.value);
                                field.onChange(value);
                            }}
                            value={field.value ? applyPhoneMask(field.value) : ''}
                            inputProps={{ maxLength: 15 }}
                        />
                    )}
                />

                <Controller
                    name="grupo"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Grupo é obrigatório" }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            select
                            label="Grupo"
                            fullWidth
                            margin="normal"
                            error={!!errors.grupo}
                            helperText={errors.grupo?.message}
                        >
                            <MenuItem value={1}>Administrador</MenuItem>
                            <MenuItem value={2}>Funcionário</MenuItem>
                        </TextField>
                    )}
                />

                <Controller
                    name="senha"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Senha é obrigatória" }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            type="password"
                            label="Senha"
                            fullWidth
                            margin="normal"
                            error={!!errors.senha}
                            helperText={errors.senha?.message}
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