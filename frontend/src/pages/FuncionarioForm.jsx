// dados omitidos – mantido somente onde altera 
 
import UniqueValidator, { useFieldValidation } from '../components/common/UniqueValidator';

const FuncionarioForm = () => { 
    
    // Hook de validação de CPF reutilizável
    const { dialog: cpfDialog, validateField: validateCpf, closeDialog, clearField } = useFieldValidation(funcionarioService, id, 'checkCpfExists');
    
    // Funções do diálogo de CPF existente
    const handleDialogCancel = () => {
        closeDialog();
        clearField();
        // Limpa o campo CPF
        reset(prev => ({ ...prev, cpf: '' }));
    };

    const handleDialogView = (funcionario) => {
        closeDialog();
        navigate(`/funcionario/view/${funcionario.id}`);
    };

    const handleDialogEdit = (funcionario) => {
        closeDialog();
        navigate(`/funcionario/edit/${funcionario.id}`);
    };
    
    return (
        <PageLayout title={title}>
            {loadingData ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}><CircularProgress /></Box>
            ) : (
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="cpf" control={control} rules={validationRules.cpf} defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field} disabled={isReadOnly} label="CPF" fullWidth margin="normal" error={!!errors.cpf} helperText={errors.cpf?.message}
                                onChange={(e) => { const value = cleanCpf(e.target.value); field.onChange(value); }} 
                                    onBlur={() => {
                                        if (!isReadOnly) {
                                            validateCpf(field.value);
                                        }
                                    }}
                                value={field.value ? applyCpfMask(field.value) : ''}
                            />
                        )}
                    />
                </Box>
            )} 
            {/* Diálogo de CPF existente - Componente Reutilizável */}
            <UniqueValidator open={cpfDialog.open} onClose={handleDialogCancel} existingRecord={cpfDialog.record} recordType="funcionário" onView={handleDialogView}
            onEdit={handleDialogEdit} />
    </PageLayout>
    );
};

export default FuncionarioForm;